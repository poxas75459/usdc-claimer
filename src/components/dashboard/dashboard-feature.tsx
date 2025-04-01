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
    "5ubpfFoyj12Khyt6bx5ih5xVPL4UuwQaZfsv34vPpbucGNiF7pfExA2dpuaWmXeHfPq3CxStujyd4fysp9tZBxSp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4drG769odkUaiSfrYJDM3SyLRJDzr86b8TuKBoYK2E6tgtDFj1QbV9KHhBGApN8CF92mhsQYgzGkHNqQx1czeZ2U",
  "key1": "63DiCCtamF8buWf4zRanPDaE8K18KZVbXF2YHeTGwQ5BLB1qzHDSR4d59v2pCdVGGLV9sUmyLtWzerVQRFstXqG4",
  "key2": "eC3zMQtDQ9GS3R31bjDyyoah9rR972dRwtiSBUV6ci9PQbUMmqLJsuUzbyYBP2PqDgjKbNhDGm15opWgQprjcmU",
  "key3": "5VFALA4HoEyJPv555tWQDbu5muuQxzdhyduynbyuHFo2XQkxB4DH9XWTUfhxFsDWPKLdLPryPu1XkDRGwAfL9WeA",
  "key4": "5FiaJr8xoVrfqBjDXunnCP6S4SmqrqVVbJ878j9itsEM4CR3fnULiNV1YjZTzMpQqgmDqp7sK7NFVzSn5ic75gNN",
  "key5": "5RPWbf1186qoSoVVqLDegRXkSRTWhgqUMgn6Bp52VfmkBih6whEShNFyoGjLqCPKfa4ysDp4yDoiPiTNxxsuacLD",
  "key6": "5qfvMvoZtM4Xy9UCYHwMA4hQWbUFgmbY8VhTd12qeP4Wd52gcqqE8L8k89jYoPtFAbDS2fXjaJNSa4UHSGMgnCZ6",
  "key7": "2TGQEJ5nmZLa3ZtWV5iLJQpVfaPxpa4iCMCFKeZAjqoZke8BenFiJZSJ2sGdSxdRJgoAC7ZUY3RNwXvcim41UNs2",
  "key8": "kLjG5kCy147FDnKXQtbZ3XAWDky4rN6SbEnn2myJ8mF7aDsazLwM9Ab4mmWKNJREbu8smq4APLZ6yaQ4Dr4ah67",
  "key9": "5BHssBxVwWwfaTgaFsFHMgxW2smVoByygCJCSD2xhHSGd7WXsubNz6oGEYjdhEmQq3rYDeLpwuKynRajnHHmF3v5",
  "key10": "4HE5o3VYJ1C8iQc61vkwDpmmc65DvvxhiVdAjia2tRjPVyMTq9nJwhCsjm2dHu14aNcDit99X38a2iizihCxVKPW",
  "key11": "4V5WM21Bv5fEa1J7AhqaEzUp3seHvTj3WinQAbxY7nfHhHewmwS9aRtEKToDFqnKEoW3LjP7ooJAMRzFqCXJGXyw",
  "key12": "4iQo994GReK76FoRfjiHwH4xpRXXuvNngDW9vqyZ39KpwAw1SyF14C1ursRMcHhZQBrXi5stVCMyJtAwzA4Q3qBJ",
  "key13": "4byXNsWVU9mPEnK1X19md7VFjoQftHn69BRLbdCFn1VWqUKARgvmvzCkskGY17ET8JtqwiK7xHXLGKr6csoG8kHH",
  "key14": "5i5hqgmFkHa94iWzgBNe4f6vACkihSg6w2v2tHVGyt7RF1awfwNYh3Qy5ZhGHE6uXATo47zotceFx1XrjGDRoVmJ",
  "key15": "AUsK1dAi6vuXqwM2SN187gAhk6oQkUEhGbnvy1ZDN6cZDRCksxibmg59q5imc7kBtQHcpeGmfgjo1wkCBFpVdBr",
  "key16": "3E2qFqtKXtWgAMttG4cpfKfJ5nrnvbXN5kfgims7TJUW5ot7mdJeg2mtz2pJLvt4s5UUGTTqXKTR5AgN58HGWeQm",
  "key17": "34cZ5pzGZJipacw3iJyw6YSKrp9rCbaYzfXxHyFXH5fhUV6wYekYzhcnFF3CMPCYbAGjjXLxfnB3tZ8ZssJ7MWF4",
  "key18": "58yikrQvyZ4BjY23G98YEQMjPkz5en9wdvNtb23igWFWpCfwyoKtpbMR6tJYrpeAEnPd4xRd8m2A9yigfLmNVj92",
  "key19": "egWe7s98gnv46zoMFK11veBkz8tet2HAZFxXMMbJRxhUZywbhbNmmU7H5a7k1zrRCd2j4SP7mJmq89srczRdxBr",
  "key20": "RxK5Ge2pxQU6YWevXTummeahz9VYA1ceiez9MAxwSf6hutwYQCnVFxSCVLjXXmW6VVKbXoir5QrQ6kMrmzXs4Ux",
  "key21": "y7rEhnSm6hktF7ptiFyc8vDjTbqVRgQ3hCJFJ5qY8MwH4pA4mTXRpXJLH9bcVr3fs9yzQMNwzjCUcvAoiNvWC2j",
  "key22": "3f9X515z72VN7XDtosq2N45vEaFDttU8WEE4SEFTjqwZUWazjFifTNp3W9VnCnFpVdEQ8mLEvdU6YnsKbzbtB2me",
  "key23": "3xpqDM8LJind7Q9apWJ26CvK8ALtzcGmZisuXNFrBiYVoadq6sGcNXfL45E2Bqu6Vyo6ZXdKLooa5ypJqGsMv8sq",
  "key24": "3TuZ7ZxN81BQ4Sk2sh9XJmsdR9bLb56uw6eo2SgXqLHVDrxo2WuPSWU7jCq3uJZQ7WV3Yi2yh2TMmqFnyxEPGgjF",
  "key25": "2jVYJKi5uMPQJuzC1d6jpG45uGpHipa635yRSWAZCo4yt3cCuGAARkWJk8KESMhJBMhkoAQd17y9ddatiFvWhTck",
  "key26": "51KKXiFK6vEYhLZDDHDfzKuk6PPBSrp7jvoYaYAGT7s8jYeY3BzYds7HcAcrmfYyEiH8AcwtWWG8HpkWdrTz8LKK",
  "key27": "4GC1gW2SnKUBTF18Gr2DpDQoKktzxKF4ZASX2rtBTujTutgPnHMxud4iWfBdyzRnJumQVuDZ5iet8aNYdtW3mt3h",
  "key28": "5XLiHCEbZVUqj5C7ad4kFgvWTDGqTZAMvXasFpnc6MvfCAEnNQVBQsYxR8V31daj2KXeYSgM78giqVcqv8TDojwX",
  "key29": "KugEYjyGN6C7bg3vnbqEPzey8LTcS48p9EV6J6oyS16suKznWUT5McX5ccHs3ST4JWM9yameNQBNemTUoy5RM8M",
  "key30": "4nzfEQmMv7ELorBXSgiGT2ppTDE594TamQubUmg3UMSebCpTKNsKbnvEgSzNkzBGeDCshVnK1zcWXKEAw48GChQd",
  "key31": "P4Vem76AEf19SgfGpZV1BKSY6pr4YhqsqyKbkEYFHCQegbCayCCqVGsEc7oKeQYagrvZP9rcrtgHccWQRt24PP9",
  "key32": "fKv4z8Fay12qxvBHjJxJjCJS81SkkHDLGtibKdsGGRJur4FeWquxxndrMCF1wsczWsVZqddBkfTggTUBqPiRVBy",
  "key33": "2bgWQuwfGvSNAqHYH78ze3G8WmqzJ2hMH3XwEa3zixfqtNPuAFji11Y8ipNouXTmta5C9s8rq9cwaTqvNfJgWmRm",
  "key34": "455811ShFAKq6y8tctKyBBZ9MUjXHQ9aFo8dg2FfqbLU7Lvst1LbajfuAuSHBDgyfuUUt1XrSXRu7yBiFMEfEjQE",
  "key35": "5qujHLnLVD9vBDN2mWTAWt3GvQtKps7KYN9mcTGsEry7rsz2KKmZwbRQAEemZXYwWCS8h69jzYgEX4Hr7qLePTX1",
  "key36": "4Fcug2wRRfLyJuhYvbAApPbTfuPxWGTAj3XKtMA6tMvutAqqWh4vYAEg13zuJ8JcJVAuL2V4HjM6MggiDNaafM1c",
  "key37": "53HmWEssDn6NR2HjfHdetgAGisgXvfKLMC1S5chxmn2D5Gdu59wunxi1MsFkYNu7sG6rQWZdZqu7otF71Vv3fFyH",
  "key38": "2VysaZBq1WtSH328ct5mUK9WfYroPgHALXFnqYK4kxyM9XHk8TKNef41fdJZe2X9bJv2aJZ28oYKZb5mwYgfWM6L",
  "key39": "3asQxVH2HgsCbBsJ3vGXj9HHBN7yA6MdyjMjYF57AuJhFXd94CeeLQNdregABie2DnjoU77CeMGsXt9bLcnUJ5jr",
  "key40": "2FTUEAJbnFi1hy2KdMEsXEwUU8cEFWxkwjCsPqqBXAP59HiseCS9nVNNJdXViywvJMAVE49MwUZEecKJuLNYsmfM",
  "key41": "4vP89HrSPZQfic37ZwF1GYWJ8mmL14jjXHH16maVUjHMQfXfeSuXBPcNXawev36mwgb7uxnJYjUuZtMXJdVRqrBe",
  "key42": "TYyRr2dksF7HzCvWynjSGMZqNw5KVVReUEKFU7PiZwSZewqVF3JTe4kSwSpvjo3zC9KuHqSbgj4En9zBqm31PYB",
  "key43": "235Sq8zdYpFTM3n1JXdnSDGAfvRjbkwNyvpbzfZExFnW1kCREJqTwjGEQJWcaFB5w7CedSB6KkgkgG58DVC53NFr",
  "key44": "4K9smyRtydevmHhQQpbYwsXE9h5775KoxkV48bKvMnKfLxbRS8KuCxubm1gVugwbSN9pBV1LVSgahDkvQXaAFnWz",
  "key45": "4yiYUTRpfKAG6CT2RDQMHY3yj7NxFj15XTYUmMbHsgGLjnsMvyYtVbvGj8ZDWnDQ8yzz7tmvvzHxigoucHRPHDXU",
  "key46": "jxfVxoueo8hAAaiU7tQmhGLRD343ek73vLfMxnFkFLGifgqoi3wvxerPSLnMkivHsU9cGsNYrWsfEtEmbLEQHGH"
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
