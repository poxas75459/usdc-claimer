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
    "3FDUQMFgVtviPp6tTo45AvDqNyxShghCtDyLmTUjEd9pT2mG1h9mzXRAQGV6k2EfGR7R9WrFaGP8BGvXLjhvFwMq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27xtJrNnaZcJDRMzS2T2RR7kbg3W3c4QzEk5zXtcpTjuqsNWGmf26P9Mz5RraSMR7X7tVChThSdgBzVRLZjEPDfv",
  "key1": "4qKCCBmNr2iyByv8aLMBsWkN9LwcmvtT5DEmxvj7JmpPohCDJPYZqi6cNyRX2P5WHx8FmXbfkgzFUhCqetbVNEs",
  "key2": "66LE3xETLGytSxjBKVVmBUbkLecW64PyhNYGThRP7U9QZZKFdVpDjK4xYjnmrAmV1Y9V49zSzLCZAqTsxxwsFxPg",
  "key3": "2KyZeSWJqj8mqCaEqk1xwVSi19Rm2pchy6L1uXC2xNgttXMiBSqu1QVrxGKgCrxh8wh3nvEGDvhPVVAkoGU3rVV1",
  "key4": "25z5CEPqNPctJdGvaJfrUXLWPFxYhQ3X8FxhS8gJhNAAjqADbABBjs8yZiwHACru2r9djxYxHgYWvd4DWPPyrHe5",
  "key5": "F5XFdU1v79CCegzJocVvwCCceZH8hJY8rV2jFok1hDKmdfXMrgKwFc6exm5J1dmCocg1WUZ1qSZfir7NV2PbbPP",
  "key6": "fLqE5uXRjQSFAcGVjx2mHGU3ELuZ1aCRW6CMUHGGDb4iwNTR3YwHKHmpyqioimnvBNwNAbDzWoHh1pLrp9oethM",
  "key7": "3tkTGtwZXrv363m59vaj1UvCRswrA7Pzr8v23RT6FuWYZver4ufpzf6qHchR7qB1rHyytJr24AMsZjXJJZohQKQF",
  "key8": "27oYhSUdQDZuX3xx1tWGKtbgMCWXk8p66sPrTg6vTtgthqjdtadi5ED3USZp66HnJCajrA4UaSLe1xsL2qfzuKBX",
  "key9": "6AhgG66JEFWvDnbLktuFW2pD7fWn4EjannXGvCAWjSronK1gkDyufiZM8fHd5tGChHsvGGhpUwvrsdZ9YBX2vHW",
  "key10": "2zn265XaTQBwwo4N85aRUwZZh19Gbeen2V21nMJY279dFbraLgnvGuPk5BTJsuR5SCyjf3u68nDtZoKV73NjvPVk",
  "key11": "5weMuD64dwvscbjkkzwtTfYJBhfoPzzQNGqCbSk69DQ8vF4XY6jqwLhtWfKsVj7REpBEtwsgSkPwxX9xC7VUuvaK",
  "key12": "3HFQz6XaHbzTBZPQbg6gFrBnRVnk22peCCRwTr32Zffbpwxz6y2yTJU49sXRXrD2EedxTUxqPait9mtkGy2Hm1ue",
  "key13": "4GHkhBW9iB4pWpSLGAuehFnFrKf4ABBYd9qsXirhap6FHmEY4pRHwBjbos2kyr1RrXtftU3tW5xK2cak5QJR12Lo",
  "key14": "4pwzFzBwZAC75cVpdcjYYcrVjHCPx8cVPH8Qht4srzsExx8Evjk2rzj8JTAVaT6mQZubqWojckuE7LBtbynP8BYu",
  "key15": "23gfFs4k4UCp8VuVuWBsjG8ctRAjuqvivKtgSVgiv3KrF7ske7uohDSnUWXr2nFKXvrH9oKFFLPnSe68bCRWHRNX",
  "key16": "3ycYA3d6A2Qhi9Z3McZVAxm7uCPxAX4gkgTRndrYcMQRyL6CprYRtHw89euFk3yEdRiPkN44UZoUkY8Zz658dhp1",
  "key17": "3reA65yhQWVcZW8deSoKkfQWABZ8oxA6bN7QE1TAzPwYSv5MvJbNrq7coec6oiHwMpszkEe6rRWaVJ7WPQ7PvuNd",
  "key18": "4q4esN5CCoovqg3zPiocH5Mgnz7vbjAVDeQt81RyYMhWELU8BtnqmVoih5v1SDdpEWBeVrefZ9Vy8FgxrNRdKofR",
  "key19": "GDetkUtgJeKJcMZs4cYCTXe3KV3JgKugaN2KK6w3RXu2y7ZfdqZVW3qkgNP2bp6XW5YqhnApG2uG8eg2d1x4iEd",
  "key20": "5xs4PE6bnP5k7QaUyRHcrMajHgCQVUubJgmvp5tEsjjsaPoMU5HT2MdBmpHT8iwssXatbJLV1XPTx9KGa5ppbXZA",
  "key21": "2rU2HpWhS49CXtHKusq7iMbPSeboTZw51g87EnztofaTSui7Fptvb7XVaHYTVWgLpPh9tLj73jZ9c5TFzWFu645b",
  "key22": "5GjbqNwSKPcmgFyMgmAMztaDBtL3SyZUcYaAq8g2JPXxnZw75eMCk8rRSogHgLvMVPtFrb3zMNNyntn4aQ4pqdHd",
  "key23": "4T7Uw7yvjedUtKGJVQA7yvJzjVeDeVne2kS4EKsrKfVW6nWba1udSJ33e7ScJW1d6KeTVGe3GC1yREnusmEYxtU3",
  "key24": "2SEbfvteFadpcvLHrrNAuZK6Kya26oRspVPYqoaNiDfJyz1YDpjk1S5Dwg2PHPwNGdNxvV9Crh3izdr3wyP7aao7",
  "key25": "27w43nRLiyXSnmazvsUauwHBCFPbH8t6ohbJz5ckGjRN68kSisr2xMUasQiQoJeuU1uhw7pP4xTuqk2i4sn9uWER",
  "key26": "4QypApuhmxrZ4sHNNuhqycTb4sT25xVwsBVT4HmjBKsHeCcYV5P2BXoEAjyV3p2ePVC9qh7NvHWRhkUpMn2kRogF",
  "key27": "2fLM6tNDCJvDUqNToRRzU7skpFJYxuFeNRm5adipstCDtwk7m7KcPfzFkiGXKcnNowNh1SshqgnnBmFyaBMPNfR4",
  "key28": "3FXsHMXCfaKhm67nsfeuNkewzDueg36RVvkGXcS8w1YY8HscPpZ3mbh7UV7ANEmZKdFBXPgZaVw9SEhYKCpfb8J7",
  "key29": "5B8jCvgaHhR5PgGwqAgtwDDPvBBTEUikF4sFhYZK6c3t28mq2YMBayxFpNCEiGXWSDkvTQwoDH83s5vnZYsYRcvc",
  "key30": "33rFV7M6kwxiiFEsJdpypmqQ917cE3nYpd4QV2jidY2FK3UmxcBRcqG28DsRcDoSHbVkB72KqbuKdncEHxuSqyPK",
  "key31": "5PQsz6uxXdjepLxzuGa416xufJCKbQKvJ6xrgyKZvutgcwGYDg8Kv7EBWegYmmpPQMjA8Li2iS9P26ECnFK68RVq",
  "key32": "5JBmV3j7gzF7seek5o6LFcDSjZJS6ZtcKzaPCrVKMNffB8xwgD3Ei3KuEBaGYwK9sf49ziZWnsY8Y4GWE7P1ygCh",
  "key33": "VyzzMWxE9Z9w3V1HAd3NciAyzzVQS7Cb1h7tt5F7dij2bECdTUCD5LegnM984c3qTvpsnSiLhz3RReHzvkbh53w"
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
