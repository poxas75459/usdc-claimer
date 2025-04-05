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
    "5fLZ4k8aYPJpNajJVhsQbkwqQGhLMhbNaHeXkRkMxuEaRx8iyfk7KSfjs338bqh9TgYyLen1Nmnu6w4NC9epXAMy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vQ58Pz4SgPCHrf3zVW3zCD5szuXQAaQLGm2hiQjN6HEMkHcphv5h3j1RGAYToFB78Djp8xQ5RMKuxz9wQuQpgVt",
  "key1": "3JUygenzUgo2NUwVuWyvc2QGbdB5eJKqrNKWX2zUMndf1FGn5FH6Xni7hBwXBbcGfXpmyRTsPUos781KDvpxWbRH",
  "key2": "4Qzv7Tbt42Gj89B1244mrjnkDqk7F7R7YCru5p2cd9tGLnrmaB7A53oKaDYxTXRiQdS7MCVihm8tREEsPXGBq5ks",
  "key3": "3nkcTXQT2nPhDZGM85skq3iV7cXQSiYkavJjK2sT3S1wzziN5zq1iGyavi3Baocc7bTyWtiBgsMEFoVjnZzMfk2Q",
  "key4": "UjPkcbRGKhsCk8nXfsPvJPA2rdFeaSBtvK7HVMx64VFrMSBE9cW8o2A64cJ3ANodxtYDFjDcXQivysfHrKqmYm6",
  "key5": "tFRXMNP8BJbtyMJ6FYAKp72t7ctLWZkaEc9UrSF7ctz2ecHysPTgX7w9KTQjwpPSyksPmMJ7dC5a4inihaTZyQQ",
  "key6": "3dqCBWvZVL4dQady4jgHh9JZLVh6sr5VPowfMqWqtVFYcgxoU8cF3mjiH2Z8Borpa8Dw9mszNUeXUJKd3Cc21m3M",
  "key7": "2JrTBBVtpJLDwrviMDzqkWnYbdbcANYyJ7y4zd4r2RAogRkCMowWPorjf9jgZynf3u4k9cCTPqog1L3xUtTygu5z",
  "key8": "5KirkvvgoaowhjFEAn85gMe6QourpJdrBBSDpVTUbsuVy4yi6XUuQTUh35HefjQx8tTGL7HKVmEVQmnpR2ZQBojo",
  "key9": "3FMCsrF5a49UGEcMidoQNeYRnuFXsu8F78KcKK6Gip64Uj9o3HvZaEQhuqQ1VkPaPn2U1NBMozHW8vDJcE7MZhoa",
  "key10": "336xwKbBKSJkYsH5TfeEHtaYivALpNo7vev73xMPsRGCwvYZCGYNBrDyBYMPq93BsFDthB4HyQrPFsfitjwoHVHG",
  "key11": "h7abXZ42GMyrPdyCVnEjezT6jaNywKQbjv8fMooRoBVFY5CJsWNWw3qYyN77NhqtQEgGp7ZXpHVxtqtLkKwc8Nw",
  "key12": "2s6VmrzcEEQoDc7tjnWDxg92HE74Df2y6HYrv2w54mc7kRG5Rd21VCUwsAKT86EJVSGByCJZEVubq1pAmskpzeMh",
  "key13": "2RzPGQXZKPKJSevua8KXXxyeAWxZFL3cWRdQE4Pr5dT3PB6NNZDTogF3AJrgwA4hV3vfxue7i3KGoajTF42LNrBL",
  "key14": "33i6ZrhRKuLoUmKTu5aPs8chas1NBwdcSx76r7gAugQUB6uS78zaHLawGso1wX686DwNhtmKD17hVKj9MUwaPFE4",
  "key15": "2YDFuUdZB1iY2wvuMEJJyVasuNgG3iyaZcUAASqQNiEsQGMqH6HxdrncHh5HFsCnueMHy5hUwK9nEr1hxQhN9u3k",
  "key16": "ysYfyQAuzhLDJCHFzPC9rPE3WAM8QcxkszHgHBGHT6Kzh3zRZRTNu8PDDnQBsknQVfQ6kf5L64jW96za6s3Z2Hj",
  "key17": "2QCQ78BuTJ7tWR9KJUQhUtXVsdivUgqFibRMCe5eYsLsAuPKkg4A6npeVVQ9MwJuevE743qnheRsFGJwX1P5TjTj",
  "key18": "4p9n5Vqwk1zqrUF69FmmVDN8SJjvoKtaF7rGUkVf9ncP9P5ubHMRMfzKLKcwUCJwhFCiKSXYf3A56vjXhYNLyZYW",
  "key19": "4SnLbYX2x3ZBrFTDUwa26N2HtRpodWdFBesZtfwSHhTusrDfxmTA6hxWs3gSZ6skeERDqeeMVatWofdawBYdzy9f",
  "key20": "2cxdo8m9Z2ZV8KX1sqyshTbPu143bYPTPCBLt4v9peaKytbX7nvHkHnymcYqgyL8KSB3wPBgB6L1n23Cf3rFE8eE",
  "key21": "3fCq2iK63sqgwTvwkX1vuZzMRbW3Xnd7Qt5gZWgSqiTyM4uNdLTGVnxUdW2XoXLcpMmJDtEC9mqXt8KBmzVdc9fa",
  "key22": "3tqr1zv4YWYeX1anduMoHY3mm79nKt9D4wJ4ZzC8m2drwe1iBMxk4DHpmfP77QLtSvvZSvjCcB4ok1WLiEsa315Z",
  "key23": "4LZzDYG1BJ2ab6ykrNdUVxkk74n9DpnBxGe7wuVnGxfSPCBGzM6V6XcFKv1saTXemcmH7bkTUeESEyDFJLRsJc22",
  "key24": "4ci14UQdEBPLdB9LcPVy5gaRNtvD6CJVeZdVk6Xs6XE4vkKTb3i8Sqh8iRQafnV1ZtkFH53BgRKcSd6AHGFpVvwp",
  "key25": "4opK1N86JrTPC8nSYaS4Zqgbg5o7dgSJNsiXKuJiWYz2cCfu9AsXRZfkYxq7oFPAiQGrDVYem96GSGttosK9qhYD",
  "key26": "2YTE6FqwthwXVp5xyTjZfKyLG4MeVNnZqz7Gomv1hZ5RxpQxNBxYU4s5HRUmtjq7uGYoPieLe8daBrR5fRBPpoHY",
  "key27": "4yLTPKTnPY2ecjabzHattpDYd2YJMie8eMB5qqugv8ybZtRNs7yZX9bbuBaSSMb5C6uMfeeqDPafBUaL9PB3pyoG",
  "key28": "53BtZZ5LFVK4L56acN1ehxWuikr8P35iJbLYV1M9iH7rz2FtUq82UNznuMpgWMdjfANg7iXFKDKuHCzRS62tiWT6",
  "key29": "5qwE3NuyjjKhfZSaprJxVenyubfbWdtqDn5aPK3fzJps8ja9TpCN8dnU56Jej3kb6DRyS84tpQ4Sthqx4XxTT9pt",
  "key30": "3yDrWWCgbch2oNCezjcA8jMQ7S15dPzqUZwToLPQJ7ZXuvsz6kafT1VzPYpY7nzkr7Tvu926Dmn6p6LCnNyQesCP",
  "key31": "4qTT4BtPh6rnCK2MLR7NKCSRLDiEJ83ue89LwfDpWRyMRhJVPxAyKW43GkYfoj4AxSLs6fxCYCQJ5Ybvp227i5kE",
  "key32": "4xsPQZ7j7HCXHQhAzwxt2fEnwKbcjDBeVooEd2MNfyz9PXcacfZEFP2PdE8pgDX6SZzbcSp6CXhrX23YsuPTpPdw",
  "key33": "4AMkuv2KLswqT2ys76gwjLH63NJj1Jji3twWGstda2N21vXqrWbFAL6DMXbSmhg5h1zVeo3Z4EfZwNKoaSwXZT5s",
  "key34": "3DJUYTtbAfUPFi3mKA9aKrkptLZHYy9461qv1Msd2eypuL8McFsphkJhBAudHRn1E8ufnQWSKwDJGSuBNnJyqeca",
  "key35": "4bwbqxNuKBEztLKqNJYcj4RjNNPjFoq6o2Gk7TQJeo2B6vdkKQKzsDJYYzdyySAtYc1yyGDyjDhRULe72ZVuTXEV",
  "key36": "3riMZSq3BDHAqsnEXbrFmUT5pakaBKYx8jcoeks5kQ2Tii2zyHY1sY9Ba4YSCFRRuMD9CzdwfahvrarAvxCbW5cT",
  "key37": "4b9th2n2sMXVC2U2v5W5VX1RLjjhRm4qo2go7YDpWLL99tCAHTAww5ekvzu2K33enjPSKLGk6g7ijUxB1z5GswP1",
  "key38": "gnK8voh39wQS3xYqBkthwdhPc7HjLSqPEaqfP33XBxmMf47p8rcXbr4GJpWxbe4x5XHWwznGzzjkRJfRv3E3CpG",
  "key39": "ysbnTtCvGTWdM8po9MQ3AFBv7BXKyYqnwpHFkznAL256Np2tzDXzmQ2DprtTiJNHxw5cVViQ4TuSjwL4KF2u7xG",
  "key40": "2SZubQUx1uTHMAKhPMj76skN5n7jZHSxhn1WjCiJtiHKy6w4ipNKaLErizhS36DpVEEtwuT8w89UTjHh7rTbPVDE",
  "key41": "t4RjsWsxz4ahca3Ezs6qRw5WxibwaUWJpR3GQW8YqwWurJap8YNprETxPYY93AsbRXp8w8Xhihc8xdWgcyBwqSv"
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
