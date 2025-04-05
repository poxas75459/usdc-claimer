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
    "x3Y4cXd6aBQYk8A4Yg6mTFu4Xma7tJhgZmxvPHd6L2JqZb53R911YkhEhY5NdTcs73MjPrpCJz4L5bz3sRTMSRG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NNMW2oT6KwtY1gmH7GN9oyFDZJhsJkELVM3ECA72cvrzE4reKoE4QJBatAukMeWpfqd7EJxMrcXrN6GPDxPTjYg",
  "key1": "HikzqRgnL995FXucUfZPJ77sNQuMaRV39mMbuRpLeGpjjAQHFcmnd9yow6EF9GufEbt8AhfqM4kN1raUeKSeo4o",
  "key2": "4oe4ZzmgDuo2Zy8Q8v1pMHgaeaEdwzr2d8TmecSGTBUEoww6p85fBpauwNzWM8B78RSQKFXoaxfBqBW6p2i8YRE7",
  "key3": "5EE7qqftCpevN7NVg31fSVidKCXZd39ykz5JBJAPEfbaM443uGuRGURpRYDzw6LF3VJsNjetS7S2Hpezkh4iGmZM",
  "key4": "5jivQF5XoXMdEcfNcPoLUWikFjQ41hRKMEXUQfU59Sq7nYCZJbNctBgemJira5Tv7S7ybdGphTGGXWTi9g9EK86K",
  "key5": "bpfHa93wtc2oxGAxtge5qZ178WTmu3xKPuP1F4upv95rN9c6Mn1YQKwzo3NmDPPHk1c5SuwDGMkGk8wanrR4khw",
  "key6": "4bJetqVbrBkcz7GQwu3cwJz2ivnYihgiB76g8oKdWjpnAiBRud2dupLtBtu4CDwF9viNHCphLTw1MR7XwrYUabEi",
  "key7": "5pEcpGgjPdzTkFqEbsXJuKFpRtoCoJMizABoqhY8hBdozkmg11DefsUiLBeTRP1oQVEKxeFFfiJ7QRPowX1EYN2h",
  "key8": "5WZzKM2Vq1kNkhgXRMXax7SExt7Kpi6jQZgP3WAjRDimvcfnNjbKFsH2UBPNR7ApTYhL6fHk4YUYH75aJMmGtScP",
  "key9": "eeGSg13SJRsCPeW5j9N8LsdDNaJNg8mKPttwM6AptLmNYxQ4cCUwD6Wtb7Pj1gY4ZpUCnKXVEdNLSBuZxy44KGq",
  "key10": "2zSPgf5LwRbHx5YRUpdw9ihK3DQChSSNycpi65J7sEzHFdCs83wiJzNFZCiTHwLoKu8z7FZp7hwnnQRxCyFyfgnB",
  "key11": "33w1EZzRoEpkApJRdU1LuMLRuiJgeRPGCKAbZQ87gZxvyULf3TDYQdP6nAoTBJGJoLTnYoP3bj1ZDksmMrqwY7ax",
  "key12": "4nYHtLU23DCqKVV9krhLwVKbqbMBTs6o2jtUWgJSZu9Xdxup5K77FLRgQ3Pcwrf1eNJ77VZagFqedDkX5kBH9YWZ",
  "key13": "j8MfVTPSiZvA2hte77TQgFMjk3T2ebLZ9An3G56R8ppJZ9qp9FaCsERmSTcNXHF8r2TD9hFvU1YtAH3TFTphKAK",
  "key14": "kZK6Zh2n7L7R6cSqtafkHL5UnRjUh9456Q7mt4o1FmbRwwQXFWC2NSzyk4E8WTrxz3iVFcRuDFoNugNpfW9voRc",
  "key15": "339vGPCFWxRb6kiA7ANDoau9EY9SELtkMwF5BB3B1jkcgz1qDnnxCgFWFC7M4C3AXEgHSy8ENvEniGyro8LVzMLd",
  "key16": "3vR6p1eXwumJYyVVZn8NKRsbKtHEh6s5h5MBQ7ztz2pRtNXrFg7UX8FeJppmrBArx9Lu88tTNKyJuDXBsnBQp1sz",
  "key17": "29JDj15YH9ADyyy9hoR2B59GZ5CHrWbSNnp8UJLyj64TRJYTANaJhDHnrNsD5EqnqdjBBHiig5D8YnKwPbo7Mc7a",
  "key18": "HXVkRSRtCe1GsRt8VDCYu9Z82vQzB5MRdSfh6eG9aTC5TdGmYw2cNHGXCEkxUcQepnMrnbHGVFmEDCoBVvFyoBX",
  "key19": "3jsrDwi8whQ2m7faXVZu8GWzgmhfAb1iCAfdgHck5Um9Gr1dNfzropydb6crEfJEEBhV4ngW3yA5yjFJxWUJitWR",
  "key20": "wCoWkBuTBgDNC6BPHbjRuStmMTHUZAnYAbQowcfBR1v5MujjswnEzUuDD8yTmAmb36GbpbSDnn8GBYCimTmcAt3",
  "key21": "sp9VgfXaBB3B1zEFAtQdUyXKhhFfzgQcmerTRS5thQ1fGs4MAzbNppKYuJCY3d33CtcoP37HzgMVmdXeQKgnW8P",
  "key22": "3GEzbBrAgVbnTbucyYazuibNFM6pTK8bpWEWmUWphahCdMVnMqRvy6H734tDRCLkYzBU1m5xWgrforpByQ9BC2FZ",
  "key23": "4p8CYknozjzed6EbL1z2coQoQpkGXANShtnVzZ2oqCz5XWbPvh45QLgXSouDK2YeSYmipUYjyEmrznPwgQczhkbn",
  "key24": "2Pb3sqXq33tfrvFKouahhrhf5KhGyLKE7nv5jMeat1Lpu2y3vG8rigstzt7y8ws9q1XFf6b4Ckd5D3AaqsEcPP8E",
  "key25": "3F8GoSrrdm5wJJMY18WGUQ1JAdjU6nPhXM4A7gQbm776uoCqD7dumKVP91mvVnTG6Vdct4eHiSWE21h5hnVqGr9y",
  "key26": "5fcSRaBF2o8CFuVFNiT7tf65HaWvzotY5nLnnGLowg5pNHLEg74E5a7PyE2zZzD9fKCEC4SmJJdSLod492nyXMVx",
  "key27": "2xGAiX49aDiCjGmXJT3optzs1pWP9nQp9961drkGbAm3SJU2519BznJe43gMAChxrotfcbewY4nJ1M4KYuMYSznU",
  "key28": "3mcS4ujdgWzEdzSefyPsZRAvUFsnKy2htbCxZNNp9ZqA48ejxEVt2Ru6U5o1YV6jtSBqoxjpD8Ptvut8jmjP4jaf"
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
