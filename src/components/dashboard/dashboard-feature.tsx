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
    "4h27kepjAsLWMtBUwzsbCC3VxwY8oRsFMAVHYPDcSgJXHiMynWUk8vVMwNBEKUPSaUgWNRfzkSsTSuN2irVyWKZy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LYg9BawVGd3VjmqwvKYzfTydGRGLr6Mt111vTA7NsY2A6r2PybknYWfnPNZPi5a6y9RWNzy4QikxH4cNtEob1oC",
  "key1": "2tXx73xncx8xecVwy2uMLzdQmP9WKa54tcQzcYqsBAaiL9gfRs9jbQtEiFeELbfa2dDjhNWpTfQmRSuyBZPcECrx",
  "key2": "5rkvS6nnFpNusCByWoouRr5iQAioxbNaAUfjA2rcioGe9FYqiWYenyVMj86PShkqmaq94iTewxKe8jzwgDP3xxHM",
  "key3": "4iZtEt63CAs6Lu6YHaJPgxndUaJyCPpCDs1ngvKqPrWwkDShEDgmEDqpE4TmucVZHaNUL7b5wwj7N9fHtzCjJJEj",
  "key4": "2becqyuEjfVpsLKmCvWFLkYvfacxt7nBpYimpXLXNWgCgFfjQbSCkiVt7Uvz7JGqcdBTiViqbFBGZnEELzqYMvUa",
  "key5": "4CvzENhqF1QFopApwhUnzWYBL7cFS9bGbK32TbFeBfVFNvLwLV6XrwE92PEQtsKUX8aFvHkQobHaQpVmQVgeWdJV",
  "key6": "47RkA2tUin1x3SrxYCyhBzV11PtGTj7PFkVn5hoNtzRLS5N888apToNjrF98PcB3wvFGnxWKeLwx535j8pHhM14v",
  "key7": "2iU3z5a6syRXzrecb5yTiiYZEGLTErZZGuuSrP1nVsUvTkUknjEqLpyhXngzNZnMuFbyGQNQ3yoe4Ufm45BugAsh",
  "key8": "2LSd27y5Q62KVALdZrLGjNzgtCrR1fbqgTV87WF4jSxUJi16beeCr8H58uvi8vjxisrVqucX1QdVkKPdSyVP4t9j",
  "key9": "RN3mjVLVKzVX6i9XNQPRs3nG3rknJdELbf3e3MrPhuUjeCArWe6EAYCptV1HAHpXeZynBPj6QkYwjHpQ5KTzVnX",
  "key10": "NhNzEjX5ossd7122ADjkWiTvtL7vW1zWZPNLCVsD2Q5Ut4H9knG3zhMw8eKCDYM7JcxqsxnCvU4qNeKfqFnMnxC",
  "key11": "N5pcLfbBR5puWSxvUnDG9g93VKUo5xKxyFTddmzjcjrQF4bfY4dBzyY8KRRL6SShxUcq4obrnDvVwC351y29yBh",
  "key12": "QwZnQezHFQE24tnkU8dMemAm8YrHP7w7VjSpxwcLmGERGW8UwhZGSS3CUnn81jD68Xv3U6HL66qtLZLYUFSjeje",
  "key13": "5gwasXpeo8T9dMw1YnvrDsHWZJ6WJDYPui4SmJwZVc8xaTQjvyAPUkFTM233wUvTeUwQJ8pthixVbrxA97yGVxc2",
  "key14": "fZPCtQ9Np9GzonBPgy1j1zDayQ1mtpGieW8ptjTc8Ei87RWeCb8qxfrGHQ6UZJ9wmNdZ8P67PZRFtq87GBDebMA",
  "key15": "2TRvu6g1XhqMG6p3TyU2CJmDvXD7sWJBub2dzFaJYKuHSxD1iS3TkYK8ivtq59x8YueW3Hpw84MFeocMnu65HVjN",
  "key16": "5zf7JZ45YGXLc63VBRzKEiqdASZCH6ji3SpT3xkBv6VpQKp9ZfKq1yZiGyjKe223bQ4zLkTsSgTAtr8GpHPGBB13",
  "key17": "3J1e1HtSz8CKTa7Ynii8zsgMpfsxcBEFrQNYzK9yM25qUJb9JqUFYJdxfnbpSLztXgN6TCkSQLL2e94JQPWDQSKa",
  "key18": "2g5gTEh5Yij32tJkQkJvYf5pgxhsjBnyA5xnMhXf8tvzxyGZZ6nLkPqyh11XyyXyHercKAN5AMwAmXSZS9TJKiPY",
  "key19": "7f4n2EbR8jngxKkaxYPE3rUmxyqFWW9d7e12vR7yoismUap5iPNW5Ki5vjjzQAdt7qqLj1YgzPhm6RGQdBd9kUh",
  "key20": "Mnx6EF7E71vdP3Lp4fQb1TWr9JaamjfRLEn5tjwEZK7AZAjyUZGSstd6wBXgt3VszegAzdfVi5HLqiFGq5SPn7b",
  "key21": "eMiD1CwpUtUcagJZxz5ujBihmbN7ypvuj8V8PeYrrK3y6PWobHbBPRRqBDS8T3pV84z66BiWCN8S9dEBvfnEY3z",
  "key22": "3rhUVhCxKE93Lwr3kBMg1LDV8nKxdkpStADLJgHtAhPwVUtGqcer1Y9dkJHy8eUJYw2Hk7bp8Wyey8EwstZcDKWi",
  "key23": "2yk7w4HWFWJ7iwUBWq8v6zYHLL65qc5jNHoG8mD9fkqhE5VWwM3VguPXxPFeumSb5kwYQh3a2mFY4faCijzEW81e",
  "key24": "2NHNSzfcNcN1gZLPBY8EoRefHbFV1i4ED2kCvAVBkSWSBepovYih6Y5FbSPGBrqh8pfEusQBkycs72kv2zXCPCG3",
  "key25": "5EdeXAUrQBQ4FH7aHcXBY6J1c7ZCnLEfaue4TjjAPLK19eKnRFLJLmzwvNxt1tbUse2yM7bZDftzJfhh7yXiRmbz",
  "key26": "3B3cEPaXdtLkarh9o2AZATGYWQ8PewD1VL9tntF46ohfavQLQF3gacYMAKWtcgdywwtMuxRrryNRuqsYcwYJVQe5",
  "key27": "4Ce6jANDcxhsyM51A2ft16FC84anKxpEWg3n9UokJBdkunhmk9FcA8U7DQsfb92jPx9JnLESxXzVT39UbXjJpzoh",
  "key28": "2eCnHr4vczgnxAyA9jABh4AMpYb4vmtmtMsuYo68PmETVpA1mgJcsw6JHaroQVg8UdXXWAHkiwk15FSfP5fLyLrD",
  "key29": "57CQLp67s87DTty4tQVSr8S7bAEgfL9fkCTCwyEp2bFFnpjc1DjyaEJeRKyVD4nQMWB2Z58pb2Zfgec1XSCvqro",
  "key30": "2AWCfhaQvNNwMHY3MFXnVieULZnbtjFSUhMgm2PWuXoAxRtQECNB7584vEANUSZkZx2q6ru4M3EnFGhVwD8RC27t",
  "key31": "5qZgvoVXLvWiji3NzA764DPHgyR2WbsYaRFu2Xbwd88g2K21dhvEi28rPoT9htTae5Xst9eQsfj45a3HQb6Lcr6U",
  "key32": "3Ze7jSKLpbxQpHRqP972qaP92QZbwaxFWpJD6vrFUv6QJ8TBibfzFbmayqooAQ4kqAPe22RR721mA8C9R4f4sgpt",
  "key33": "3TaYpshfQS5HLiBxfaSG8e1NyxZhyeotHJSdVbXumLw8Nh8LWJJhFpake3QFHU1c78wgZrVyaLTrKYJU2TxboAHS",
  "key34": "5EaFnkrd4LnpWP49Ge3Q3YiMu8FNz3gUbMLj9uq6sPH9UCuzv4v5oQ1gxvrfxQi7MvsiJ3WaiLTBoF5b8VSWGi5e",
  "key35": "2HYGuwBf7RWzUEdQTCaxiY6pPkAq3msmYGLMyeNcZZPWPHbFhYh5zhzKUxaPckqX81Ta3sjMUWCAVF6YXN7wYF28",
  "key36": "41GUVyNnxnM5WdrqeCRL3f566BAgv56LkgVXm2rWqhLPs7qMkD6b1UKfJeXUxaR3BW17NQavuVsbkq2E9pA2xsY1",
  "key37": "HVbNdtxuV1fTxWpyfQi7iqVkauqRqcqqHYvf2iFHhk8tHpmzLF8Uwx8GVjwBxGdxJvCnq9rYSr6APt6p7DidQNq",
  "key38": "2LMKtVEt65bYHFTXyH7zEKDaZbWPJVezm3d9UfZSL3hDgD7FHwyVRbCAmK11TwpiH2YzSCpzkEXTjipFSuewcPu7",
  "key39": "4RHRzBbwejyQQvZSTBrvcXG9pEZStXy7F7dfmPVJLAY7beSve6TwzqxR521N6FXopkipmkfeHwMcAqpX1banMxHZ",
  "key40": "4hpTzx562K62JuaaEcY6Vsga1kk68rTFctiRyYUZxLTz78KcwtqRddt2dBc81UvJ3ayHXCPvNQocV6f8z4ddmg6B",
  "key41": "5N8xwtE4UP7ZpkvgjnpmRqz5Fve4fwkWM6JgLNAX3H4iUjH4gNqPezLjUWKRNaiUeb5M2NokkP3rm9ZieaBLS7Wd",
  "key42": "5Djzz3HNAt4BHtvhrNvGwbNp8HtaiBgCmYz2Vd1EHpJKBLRuPw2tsWWL7CPJ5bgQLfaLQZAh7viGjCuUUgQjY2iN",
  "key43": "4SxkUJ4chTWPGhCWQ5g7n8MoaqEndcpDEkZ92gv4851JCLACLG3sye5Ft9sxKnTpwrBU7nD9P2n7Fkq3SB4a4e5r",
  "key44": "3Z5PRckepC1Dd2z1XnTb4WLfKmCoNFm3fg1mbSEAjPDCxJXdf9c9W8uAubt9wPb6HuGrnidTpqSqok9fEueHgZrP",
  "key45": "2Q15YNYCA3JLYvbwgtgUY9sUimaivBGRn5Uq8m6toxfJH66cDDZaLHoMDQeVsNPMdiqBF78vaFtgLYhU6JJyDE26",
  "key46": "3ZBK2VonfpTRF3HJat2xUmacSoyGpDLfxyR6dXGgdosXqwXZLnSYej2eNoZfXFbfwK38u4JhG2nTV7riAZw97kMz",
  "key47": "3SMw8NJXGDVYkVLAs6RxMeHLBaNqsB3eZvdzK8MZUyjpeQXgxN1tp33Sy9BnmJDFZuassPgcymE2CP9uxakhTtUm"
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
