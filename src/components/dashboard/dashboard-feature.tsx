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
    "3W9wfCZBgGk5BXsjCusTfmHf6n7SLWux4Kmi6TzccFRarcvxCz6rRa8LKF5RME5iEG843dwmaYVTLELChrgwqY8U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ioKfWJNcq5WycYsnF4jJAH79Agq92QMPZ7EiLDUianv3uAug7soH28chyBkznsYZkfSw2aKhmNv7XVCg1742Xmj",
  "key1": "o3v2Z6X6xk73Hr4euopQjtgnNcvSX5mgf3t87goZiLaXjnmJKSPfwefJBi18kCVJ4iL8vdK5ZePd7yK8zaFqGYC",
  "key2": "61CX5e2X41hH7EBhXFTFYxjMD4rfAEfYoDtNvh9axBdaJ1cRwcNujUWt7Dj3KCm1d1YU9BtsoapJEB8cJynsaKLq",
  "key3": "3hbEZDDU91izPB52mAmWBucSwZgoZAMk3swT1VAZLuZ1su1dgtq8iWLN4X1HNRNfwwu2FG1amohCsRseRSMV7f7b",
  "key4": "5UNhcqKDtaBZaDWb2iSWz9gxSgE2CihxsmKwnyQFaNsQfnm276dwEzD9MF6sGyyUZUhNPHgfayFQ41fTqLrhxpVr",
  "key5": "65BUoUE1YDqrNkEvnkch55MJQAjZY1NTnFBsoywMts4F8kRD8gAsgJwVgcCojqxsfEygUoMVzWm1H3Ct1rYPJED4",
  "key6": "S8Bz61R5cFdwnv2P9rtyNevFDMNmMLZKgXFh8BvnEZnj9a4qEuzTJX32FUgFVnKCQcJNSf8yHJr7K9LhJ9GeMqD",
  "key7": "4Q6Zd2uU9ycFjfRKcMuLwcGYUsxbga7T67VDaKdsXMu1vEnhMk5SB74yjwWgFxkcqh8j4P9V2TGLSUqwFiu6oXK5",
  "key8": "3JsoXs2NqEF4fVpPqf5fm3mH3S2sB18DrKC4rPL8JijmWjke6dDU5VJvet2oVutz5PXGJyUm1FNFapamdcVPzoqy",
  "key9": "2evkUaxUkQ9eYxUNh9ZifjoZoaXV4YnxqKpm3q3UoTvzZ3KwbcmATFHCK5QdK2Gr27onj58UodLUM16q4SeKEhQ3",
  "key10": "22c8hRLepnjZEGPSau8DTRMuBhe6Tm74STuimitjjR62S6iUmoRqftdy5SvnpcJxwU6D5XywcCFXuiZrmm6iE3Na",
  "key11": "5kziuGUsGRzET4JnmKbN4MvGeZSbr3RkJgDVLedWyJeehd3DW3wMwci6gppYZgStPtdRYiqqpYQ253bJs8kL1sJN",
  "key12": "4TuJqfmpqpi6uqcdSCSoR213C5tAQhTcc57RzQDJjoqUzqwNJZT2871AuYJqyugFzfvxKdhGETeXriuhvEopVqYy",
  "key13": "2V9g8AoMujGTVXAU2kK4Z5kGFjmj3DZHDY4ad17N7zC1zzMGQuSnq497ntTukegR8viNWfGzfw5hfkiDNzYSpU3X",
  "key14": "5GcnhwJmFkRujzJGbeWvQGPVbQJpFmnBfeF1xSn9owGa25vNkoTKEPDdPLbms6FT3sBo6gTzRn9tkWQHMqAPEvC7",
  "key15": "4SqtBL1f6x4afLCpecR33DxLLwEkt8VH1xZwPsLju7pCQjaqzsxXsjmt97j9kpPfGNZS5fTRBN6Kh51RkWYDxmWs",
  "key16": "g8evnYok6TGFkFzwYKHgFhqwHV5Z1DComtxGNj3KuqVXJQ7HRc7Qh192Z5TAoNvJADiDDWeX1q6SJo1QhEsQu6z",
  "key17": "5nUwxtYWcMZpJeav7vLp3KerKc8ARVYYJFySbs79WJJwsJe2jLmWSrXFUb9KfRYSGXDy2b4gUUB3zyWZzLcEuj3w",
  "key18": "4P9mx8ecYKuPbCvJBYCiADEyuxsc9KMAQak9WeKufLvGash3wsBewwBxcACMnGS4XV1FnDFtWiUdyg7GbEH7Mecb",
  "key19": "4biqY8EkSFB4GVJPxqUv47gFjjJTxAVPWH9cvYihtBnEUchYoFAe1ttRqtypF3UE9bfQ4EEX7RnKhSC2Meu2T2Ks",
  "key20": "4ym1PoxCUbXL32z8s3U6KAcsd5nQ7MbVfBcMZM3v17J3W6MM4bZrJbaqamiWMfas2RgAhx6sYP2Tw3NAzmv9zJRm",
  "key21": "zc1QTzubPRdnyoUxTt7S99gDN3w8jjSJUmkTsi9QyMKZ1eyLYULLmKXciNhSXrbZ5ibhC4r4XdqCgZoDXKmG1Fg",
  "key22": "5VDdS46V3QrmQe3mWHUPtZRU2kJ1SUnn9kxrXXPK6f1X1bHEoEQJxxN8cMYcAGh4Mv3ygC8nueR8QLuDcu9MZaS1",
  "key23": "22zS4Ag7Ydt1EVGYeDJibB5KuXdP16uvJr9k8YsEGNNcsbeH3FqFXqbK96cuTS7q1ok6Z84rV6HDDFibcgHMtnug",
  "key24": "3jZ3H2N29zi89Wc9kTb3hXB2sky9uEDneJtTRBrZvjU9sJ1EjHoq3Zhs9CESmsoMP9Eoxh9oauf3FMrnsNDmtewG",
  "key25": "5SpuMFYRFLX1zqXFonLCeuqQ19aZCuiwNzWKsJcvR4myvkkauXZTArXCnTeHTGcCeYBZh9X8moYT4dbsqEyiK1Qi",
  "key26": "4QjAAPsB9ZKy6N7JqakPA2X3u3ERmxsR5SHNks6RE42WJvzhcTcEB9x4rEyUpmeevtVPB64PUBqEe9xMiHYTSAaR",
  "key27": "228BkqQ6wsD7UoJ4yWY7qiJDpftszFryxvxqT535cA1tGgc6VHEoyc78k15K2d5anPBtuQ85rqPs24rnU3brigCE",
  "key28": "3g8fcLQgtaXecsB5kjumJz9rzooM2UhpsULY4TRkuLMxTd4XmsRXj2s3pcxga4utjikchFqAQtjq1Ly3x3ZSbapY",
  "key29": "5G13XbFx6QKcAYNU9ddWyDmsd5m4kHahfyV8DsxmVLVwDGZWBk6KWWnNbuXpcNZ51fL4GAnE8wbbiJScDwBaUMKG",
  "key30": "3pfyepvT3gkDjECBB6B34qRLXQ6bmKbiGbAgLAAqEfCBDoUYz5SRdTrpe228xc4fyVqt3SyoTzEnf6wYVp2agqE7",
  "key31": "2qbEXzBhkB1XwbcC9TWJ4cLJEVgRD721gGNKKBToJ6hWjApSkYUtCNTT2iY3gEBeBgAazDbbWnNGWuGCdFfbpnyL",
  "key32": "31FzYw6iwunsx2msrdULx14JcGUuVQ8XHKArxVZKTwwjT4iUw5ZNEQ5K837jLS61RSxsQzAUju6T6wSxkSmZ1bjp",
  "key33": "46cPkhas4AEpdTMmXoRViUonwD1R2wmyqJY4Gg9M1RK2VSJ9QK9249qoiuHrURhCUYBvNHVcFpHWB16q2iKZmgTC",
  "key34": "5NgnJciwh2VLZDtWSovAdE2634DJfXpot857Kn8f6TNdHqMMQgAbPCCuQdXHC5NnGFQxxA9Z3KHQ9xiurcPpqaHG",
  "key35": "aFz2omcT9y7F4tPhvPk6gxmExAcPJs69SNUJvKGgGgn5oVCZ6Xk3d89t98bXJeXjEJQvUk5xYcvh93JFZhRnNcC",
  "key36": "5X6SNfcWQXEUm27fbReHwCT3XT8XtwzCMwAyzYVGzGgjqVxfpGZHHJQGSkS4VLTE3GRJrmJZCah73RDzvGaf4Ure",
  "key37": "2jPLGD4MsceKKw6S5tjyLWqyjCQqh4RJs6P2RF6bKfghac8tCFdw1ZXsE5cY9ynipmtiaUiY9UqpYugVca64c7WP",
  "key38": "4C1zAnJp1Sx2p5B9yjJTVu2qXqYfyZKdS954hMTAh3NnD9vTDcvo6qEpxUjKfD8FzE8a15BRdfAR86vpdfkkdE7o",
  "key39": "4grTsq5UX9SQJxLMx44VNYcPRCwWJ7nk3pfYW9Didz4P8A1RvG6ferP2TSjSMawpy6Yv8YLMp3bYMAobH4Djisgb",
  "key40": "3NStm2UsS4PMkHwMxAvmCRNhdqHUNt7aUxc6DH678yxq5uq7BTUz9ieN7fXYzd97oYb4ctx979AHtFez3XxTHBVw",
  "key41": "52mK8oFRgHT5g3F8brNhpkFvsTZ96rx2keePHtxHwKLjYFBqsaxSeVKy8P84JwdjvDgvNq5skGdJozdejUCMxiv7",
  "key42": "46n5UBWHWTFZJpW4VxSigNKZeBxtgAtTJD6rXcsRmTDgD88zEZDBq2KqkyGA2qTWFBop2kuk62RU3q6XoS56s9Vv",
  "key43": "66XowzFWPHBB1gLwuiLiwAYE2qwX9RQTor7FWXgyAQiBhWuhjzhXps7NuyT51beJB7RTpSZb58d3xHzEFj6XBeWT"
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
