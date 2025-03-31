/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "4NCqcpJ9b9LmoM7AcQHffEfhtNYE95cXcayskM15LYYqiEbs4PZng3iZRXX51jBLuhrtw2ZMSjRYNo1PCUkoftJy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dumvVhR4uoUNB9WrusYz7kYViAUxjjPqm8bKGzftnsC8ynjmdF3vywT88R8DSu2BUFgaufQHvA8AZTZBJ3k9mq9",
  "key1": "3DzZ5VqLzr9PHBGDAjCABsuSeAcmpc6X4BWJoZa8PTXGRz2E5rKQxHRxDvkzHZuJSHfPvJHdUd2nXjtEAxdcef5D",
  "key2": "3eyrsMmnrciLC8XDzVLS9z3Cs8DJ6GW9GSisiRYLzoWuPBZEZga3AJ8fENW3aMMwVt9QWRHTuPTnVVNMV37hy8vX",
  "key3": "5teCnbaaNJSGp77YQR1oT3SokyHz1TEyKfxhhGpi68D3jTrZvmdcuTR2VPKZy31yaQPCnVWaGxfvGAUbRT6x2GJy",
  "key4": "2MaMnrhdZwALpnj1X5UZWxaAfdEbBH7vG2bZZZM6YP1W4Q8gX8C2EnEjnaHFm1pLfQTLp459NnAvFLKLK1kPuWb4",
  "key5": "2qMmPXWtQnA9ZWRAP1shegmB4oZzWNd6K2LYWsi5WRtpVJXnrMvYj2swwZmaMpC85BVP62ut8ZShiwVyUGzh5cx8",
  "key6": "2QYi4Y4fhEcHpKmvqeyTEDUN1mdddarRZmyYeKhRzkBpDJc28fdyPMQVS8K6fyYB4tKUsxMLSHGURAsL4mwqeJLu",
  "key7": "4jT9Ene6R9HULC9nzURMYuGwkD71BbksvnGdTrzARoL1GjDvAi2BRPkYfFbJyPtBu62A4q9pWxKz7Ve2EicsYy87",
  "key8": "4aMVfV437kqXAXaJAhfEmJJSW24E6tTMMnoLUF1Y4zncjAq6ekzqm7idP5dZHfoUUhTfKRzk1gtRHnzrwe3JMorJ",
  "key9": "2zLNJgj7rGsu3Lndb6tfUWaSptPVsKvRD25YztHcu8Hz2ceN3yNqWKN24fkUwSKe51NdjraxP5QegdbTYb49Tjsp",
  "key10": "5WHwrFFPkhr8q26qHBg4Bqm9Mx18X16JfJvVRVKMHdvcYgpJJAVvt3jY5YkJTvZV6PhQswyJt5WQYHqihB3cj37w",
  "key11": "5ZzCu4Fdc6Lm31Hq8CZKC1M5MeMShm6tj5YLbbWymmj3kzRpwzXaHSdFqsBJncU9ZxeeXjGNaFUpcN5sCWTjNmn9",
  "key12": "2uyGm7RPPY1HXHF1SAtpKTXH98nYX1xut4H5VN3PepMcPuET8tGz2EWtaX2xHY8ZYEPEYZBLin27JFvvRZcbBWuZ",
  "key13": "3p1nordwT7jJaLfnJPU5JjuHkSuQBXcJBCZWVR6cPJ2ebxyQmG41LJ8sPNPXJUN2dQvCeKANEtDgD8o7EmiBpS7i",
  "key14": "7EZMj2CzicEeHZwsNzYaL88VaZgWSC4dy4Ecxb6ivvwp6pHsVuwyZV4JDKE15SkCytjSoatrtRFM35TJyueCEKi",
  "key15": "2sQqjTfHY9dodvqDB5yC1LX4LsXLwzR5v7ornhHGjjis4ZiQvM8ezcC3KYkJ4Wzc7xXpvV9Dq8BzaUgsCNUHGXga",
  "key16": "4m1RnBSE8XkNz1ehbA7CEBytAihwhwrU9a7arfm834XRgsqgPnjtvczNzA892vTFprYqWLzGdbYJWUtgoC6RcjbC",
  "key17": "KrpAYj8LT41YrPTghFNfE6MWAuuBRXix1BweEfE6pLeHDGyMNomCNpgbVdHeDsFY63FEBC1DQdvS4Kb9M88XcWY",
  "key18": "5STnwFnbHdq58EwaVVzTSp7QCUZRH2QVycrnystpMTy9p7FyeEPVESmFKRxRVCVs6HrPoUzEU18dy9ZWMR9ZfxAR",
  "key19": "2Gnck8CwEsBax5gMjLrr3VVuPpLiWFd4zQ5m6AfiGHimyLLSJWKi8iGH94hUhHNdYvfPFmT1v4ymmG2qbeUMks5a",
  "key20": "2NyJFBzNb3Zyeoedu6HNsMyiezh85U3LP6A6so4F9vfRjuxbZvRTd1Xk3mBEfYYhTSUsrgE7yuCWfcXVAJYmmhpe",
  "key21": "5H94rVhQDARAabfeVWiPXwJLiMgNBTSEVSs36ZbJM5Qo5RNsYbaS6XPommZspemaZSV9gcpqRiTaAh5FPZ6xEwzj",
  "key22": "4iGSk5GsGMazF8Dun5j3bSQLKdufo5Yvp7oopZmmF5Xyq8MBddiihmDPpbQJat32A5VQwWyBbf1GYauXSvFt86k2",
  "key23": "4H8B9vWRjZcQaZs725fCB6vxLSaP7DNxzVKgZJ14YiRodKVxK1xwZrjHtY4zubxNBnQJg6ZzrpdVVybgerizdtV",
  "key24": "3CSqjtCGJkS7g8WbE2C6fipyopafEkgMXvjEizpHqqwuQTeAhXUf3UnKcAVDB7z4VEkjC7JDLfqRdmwGdyUgMLXx",
  "key25": "35NYrrw72EiVtENrzNb4ZLWHXj63MMRFxxAe3UrGKBGbNwoY4nK6wr585BhmpGjhtXXe3xbGLjGxtuiUthNPsUEb",
  "key26": "ro7xCJHWMrUj2GFCiNfwBoy8nHUssQjBdvop6vo3QaHp6VtQMyZrUwTv8pxTDaKF7UmUxfnzpVHGmDXA8rarAgx",
  "key27": "CfLu4859Pw9iqfcKCpWuSmFWB6eFp1Kkc8RzVFot5F3RpnsPReJdZ2mfE6MecusR4haMpZjR6DDsVbyTLxR7RkV",
  "key28": "2s5ssACGzkLVuRw9GvZEooieF7kCnFv8taEAHyaVtXTFJtoitmYJG5ER5qLsx1J9CcSxwN3PEySztEEesBRF4hnQ",
  "key29": "5QL8DXZmm1qsmMzs39jiAPGFT7x3LBrccxVJmY2Uyhde6hqX4g7NNycewmGSK6gtvm45F8EV6Rjs51vj2Lt1m5Yh",
  "key30": "47nptoPM695qKAKqfpicp1uqAm6QBqWmAVbYnjVruKDciGtmd8YusPfFCW84U4crec8YWi6hgkELcTxQ1sxUpEEa",
  "key31": "3wut8CVsz5YawgXUFRy8Zxj9uXMJjwmywu449eXeMMqJB2oNeYCMfuDXKT7DkxLifQ3SpXx2nGe3pThZAtH7wA1X",
  "key32": "3a8Z8jp7gk6YrKZYFeggK2XqY2ZFyWE1tQjGAT9s4kDdhvbdzcfqAXQJzrviS1HUMuBh5ZFWMa31st7gCPY4SxZg",
  "key33": "CZDzdnZoYacuRx8FXhJ3YQULbkYcFnorZ4a6f4gP8HHioTsRfYrfHG3qQXCcJXTtM1RpXLzoey2zD6pqNiwU8zA",
  "key34": "3zgu2fWUyZg3DJis31wuEfRfHUBhHVZQqikTcpKoGpanxXvRkiwbgxFkLHB5CXPM67yBTjMXQeoh9UGRbMZfE14g",
  "key35": "3WRLcugC9zwhfmXpsad1NqzeV3UDWkKLcVALZVv1cnfiR3q9rrabWx5vT1bSRqhpVBPeyLRho2rC4quQYJg83udZ",
  "key36": "2Uu8ceWBZLm15zBZ6Zmw9pb82Dwwk61VkdRUBE54YNHoFuxVkLHJNKApBX2PwoP5jZJwSYWcoVAwgcnZvGAFiuje",
  "key37": "2gARuspzYjQggMmuhxwV3XVfWp19QMhYcXm62XxkyXPih8oFCurSrijxsM2HrqT8QgBQjCPjxxWeZ94LEfGzeFEX",
  "key38": "4aRpZ2Rf33JnLiK2iXbXNgsJR3BJ7EiTXZNV6oegDv4t8PQKYouJFyLLaxxt2sbqoLHDbbCYP2mkUERnsGVEmV83",
  "key39": "LizaV6jazE9NkCiFkDFbDnRcBM6kn171wkVvgEvF6EmrLwuPMjyDjgpsdRNUG6zXsVp3oLWuDDPf7sCi5VP8HZZ",
  "key40": "24P8hdShFQ5qmsxnYRBxPRvtmCgSjB8WoBBXqTFubtoDEqDW4KKHRjpfDGjLNp2rqW7HBf5RGsVAc8We9waZ1ckk",
  "key41": "H7sqtEeKx6QgssdF2gMiUgZyCySVme8UqPqbbKAoXCdo24pi1LdhESu69UK3L92yiHrrYn1rwgVtdekGVHKWTka",
  "key42": "5TuqJjmZBmG6por8divevVt7sXvC16wa8PJD8JtvTe5HDRF2cMrUoKDL3JRAGqAcehUm3oHzunAHFsUYKR8cDwpm",
  "key43": "4ixMy2ChiQdXoCqnjg7raqiGN9pU3jxBFrdoJKNtVX8A9s9Vn2WqHw7wnqkk3VWiBvDzzfrLDwJXPRgbu8X6WL4R",
  "key44": "4SHwCmyZcy8aPjeVjEWE8LTBinZcjjTXMERsHYMKtii2ooWqpo3wfkmPrjwwofND5RPfvAqXxANesVQt71P81BZ5",
  "key45": "57eZxq1Zta8Mw5mrgPRLuHmvLJFn6tLamCYJHrijz5MnvanuSYv45bp3UfWzxeQopP7wKY9jtuhXvQBdhW1pnub4"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
