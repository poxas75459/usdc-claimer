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
    "t8LKSoHGfXtmaaTZrZpQi6zxG8YVRTPgyEoRYi82pjpGFs4uua7KLSCvAQC1jW56vf7G2ewhSz7PEdeZx51s9xq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JFR2rCQNt5sdQEnFF6QQeFMrax4LcDm27bzsNwRNymqK9Pq4crdyd7LNbHRziA2wNWmMSak4Ft5EG3JDRWXzxz3",
  "key1": "3M9qb91Kwn3Nr62oeyvPzjyzLZ3TAsRVqGAZxVZ2GsR8wNRpim48WcvKffeL45dBFhqEjVyHjRHTe6S3nmuckwvU",
  "key2": "yaUom8s4jY8jwpv6Hnm5dEWpMt315WzNRw1UCPnfzXbA2vbiQ7m6cMftP8tpmR4GyB4TL4QnTp6HHoLgRGE7NfJ",
  "key3": "4FSkhRBaFSQRe1ntrSFYwZsrvTLMauSvcc9ttemSG63ytHJWgynmULGEJpSMNUQkvtbLd62NQCrU2DDZCvGqZNAr",
  "key4": "4mi2GTeexT73Pndycoyd1Xq8qAsQfCMfPxRC9dYLVKBbQnkzrDhiDPFUo87XWbKyuhY3PSbfZCWpJowXMHPLcGwB",
  "key5": "34xnUv1JZufgeyhuq2CswQQSbAAu3RChpFo4S3jQ4fBSBgZMdHs4sQoUoZbGziSNea6H3BNcpan3yiUbWZSxQ5bs",
  "key6": "4EjZVD8m3RX4hWhQXY1PuWFg7uBdeAXtXhTWmVjLgYycuz1JkLdAARjaHwmx92mADAATQpeDjtk5wRWRXkA9eXm6",
  "key7": "4CPdwL8rJPBg7W8SVJSzAfg8AFQE4NF7tKUhJhEH98JkMTdUMZGKxgZz6Kzjz9y81PQAcoxaQr5zX1mC8Vw3LYoR",
  "key8": "3SCy2TUW2GaJdK1tWoqZfcPePqrqcre1q4vor5XtMuw67uKNEMNjdWxJhkRmYWXpx4iKEpUQ5SBLCL8N3vgSJXye",
  "key9": "5rgVNWh2CBWs8eZF8QspFq5kWRaJwwyjicgUtYFPwuRZiRg8ebyUxYtFE7YMgHYchCNLEE8bsVvvSYgWGxfMCMbe",
  "key10": "46mK1QpHkLbyBDJECnHycMBnGD3uHhMv6dUTYV7oEvzikbwMrTasSTtzkkVGar5qXizRTV2cN6anW34WVyrVdGMR",
  "key11": "omJmjNFLFJYLwnVia7zpHrZdtPb59H1ypDhfVYywsrYTEdihThq9h17evxzBEMgn3K9p6Cc72waPhLAUUkYsSoQ",
  "key12": "4ocvgZRyMQL5V6KYNXs2mcBEYYVzVHc4avXM17HxyMqhpqB4mByJAnrKkh3z9FGZPiCMmmnYRrNds1Qhmjdxeu8D",
  "key13": "648pZx9cg1SRN12FQFNyaJisLJyqgzmrQcjPiU3tsLUc5Bz1nMAmzf8wYE1DxKNBU2Usmbz8R8gy2ERPFB75Pfq9",
  "key14": "48hovTdpxWpZwBkYoJ49L23EGfVq2kwjyrZnkebnoN4rNoXkN1a8UZ7g77gBkwm7m9T1qfdj1iwUH9n4jFv86Q3Z",
  "key15": "2KzRVrpXedTmKbaQBfYMptGB1JfJUg1sr4GtkJ6mVoy4p59hTuH2RyUXDJsAmq7dAayZQ1P5HrpChAcodJ3sJxCH",
  "key16": "2fNUqKyM8WmcGtjoQbDcwdHQtT4J3cfDrgEN86zkBcbiBRLyG1tVf1SFdNhx8LmrEZS2qme2moTP4xAg26RNBfzj",
  "key17": "3y7KWuSN7RDEHNk8PDTmt1HE3WzM7JPJMWzrdi34Gqq4bbXM6HMh2wwdtXzUayyMHmSwG3Y8B7WwcXp9LomEWBAA",
  "key18": "4zfRbEzLcx2JGtMu91mYD5F1WXAzdsbbUqJBWoF3PEaoW9MRXGZi5yVWSdsUr6ML4KAuMouESLBYCXcYGJHJVzt7",
  "key19": "4dygobgc84vw4yeQAQJUjGFepowbybrHbabCgFPj9rigBhyBuiEmR2CkL1LEai4GJjCxMyuciaDfXo1nRF6KmxuV",
  "key20": "4yAoE1FJ9Cad5g4z6WbZ4hxgiQ4WwgVSKmC7AKh1r9faHoA9NgKA21uQNdsE4cB39331ZuS6Eri9MatyhfdJw9g3",
  "key21": "57xnH4nPuyunn2Np2BE1zGK6xo9Zb9uTCLSjkc8JQuZeowhf7J5i8DeX6t61gwiqqs3LyuATaTN283H6diNTLoxP",
  "key22": "3DRGNqRth8Lq1J7V56iHg5NBTjYVS1LjcwYTRxdFP7C2sykwvWEuYEMBx5Nuk5CpLdvusAbUToa4DqAZvTmWNSCe",
  "key23": "5Sg19sGajf5W7nANi1qdKCTs6bv9JyoepQjHwgfHo8jVmrLzgQg7woBwhdS1EsEs2Cr6eqjejDHmQNwRxmiHJyhi",
  "key24": "246fXAd6sQmsyXjt7BY4rGdVmuP6fagyR89w2X2TF3fAR6FaLHtoPVdoawM7YRCWxoprwMtbSYwEu5KnQZ6rrakb",
  "key25": "34qB3RNBZEKY3smYi8eAYDws8ZF79ks1A8eXqRH2Gc4kWcr4JYHPjsXTnL3Bs84Bu3LbCUMLy5tf4A5r2t6K7xu9",
  "key26": "4ZZs7d1GRFd2yWzjGE4U9Y95JXcqdMfyhssVco8MW5V5dJyvLdEGXM2goW8qKvCnkNgwTyxgikQTToDmv2ChaM5E",
  "key27": "3WEUWaL43WA3itgoqB4VUkvcGyqXrzKi4zpGZnovo6UWdFwjnp77XMvR8kCecy8c15nx3dYss5U9SY31LkmYu36Y",
  "key28": "2hnAddM1KGdRueRLTehLerW4EuaKWqqEexGqLigcoVP8uE9iGrq5EPVyhQom61SW6qc3YSq5h7JMzgJKuMWjKC1v",
  "key29": "4AkfR5izfuWn4SHPM2jmtm6uZkGSKjVgjuonS9X8ebkx9dVGuGtT2DyWam8GcFV5vZyhssaABF1PP4qFPsUsiLFi",
  "key30": "3FCu9pGmfkmNrN5Kffz8kZprFdaw6Uqqz4BaK9eY5hhGrARZh3W318sPJv2in1f21P7jCCtnMVRiGe6PxmLcVMm8",
  "key31": "3AzfBgdHypYuox1bLUGCmdw1UEiiox1C1f7koniT4r8CNFyy7V38fxbyHfuBfWzBPiWGDS91DMsZB5vYYYnn3rAF",
  "key32": "5QwMNCYC96cLVwL4EReQaBeuwzhYTmf4GQenPeXuY84fztgULwe8aAFRBZ2MkWUvu6qfaLohw281BBgF7tqKfcjw",
  "key33": "45eeLAUBHCaKnLCMK6GahAVkeggu7t3i96tEQ4zzEGt7dQ24pCRbWAaA79HcGViRNmCNqBCzrT2kvrgypCYqMciy",
  "key34": "4P7H35h11XvMVfxcCSzk2PkbRL9iyKomaNMYctgCRPhkouiMW7BL5w1X5VTKUkv8TugrCFypvhN2a2kU6jGR2Y42",
  "key35": "266bgHh1T2TY5u48nAbrfv6dVwyFi9Tq9djs9pUK5QYo62xYVpcjTP3d4P3cbwssxya4owFALtWDxCS8c2SA2nbN",
  "key36": "4NtwrRg2jfyZM2ua3GFqphXFCYqUH8AAQVeVWwmtnPkBfqd2SDJDsrxMdvgdNvNCf4wjhikEF5PHMx6vsZfKKr4S",
  "key37": "X1HRTjwXV6ZbAjQzqGzM3v2nFEeXZo57Yv5y6JJWDumahbphnF3fKqUGJEE9i2AJ1wg8UxA3NB1yKQbk1qLefKR",
  "key38": "obt1RfkRfXtJ4AJXLwdS62ysQA4xdQRNKt3cE4RnHhdwuB2czBtVZDgfcQVakrMqJ5vXEqVnfmn64jSy5yQE3Zr",
  "key39": "3pjFf4Cb5vL91sPYshXtQSBVrsAQBwBDacCc4SjAWPyBkD2nxMbfaSWPPb3oiz1qeHTcu7f3LaPe2NbAQbWtLPgV",
  "key40": "4n887EGe1e1oJ2p4WwDaGkebvgYqz1GLDuYMb2zNatDc6vRQ8YCw5HajquRKCeseaUMUNsveAdJYethd35gmQQru",
  "key41": "2vzXvmxnfgVdYZQUdAXRqUwie9Fpxwx9bMFys1aqVGkBxxJJLvSUy97gBgYMZgBuwep8817LV4y27AxrbV5t1KaJ",
  "key42": "2TewnghwKyyE8mpW8f17iPGL1ovAW4F2brAReA8GShvJLWiMvRgWWSGM4owdQk44KbbmQZcBSW9yzaYDcoxK6Wck",
  "key43": "55tpcBkY24WEXrvxZQx4g3G9SELNuwaWgqeVckfMyS7B5oGqBNNCorViGTExnj7rGrbjAKbUgydMyEVoQfSyYYMC",
  "key44": "3nbcqAnXvCMePXmwrEqAps13fMzMtxFVSyQnvepmDW23ELEBntw9uHZbHWFUbvbxLrY7FKpoR2KhCdpyUFb2eKTf"
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
