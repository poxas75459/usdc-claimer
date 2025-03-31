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
    "3EnW4j2Yvee1sKQguFTRqAY2kXP6hNS824bfqcT5qVyA7CTKBKiR4BzB6uMitXSP7L8Vw3zPSxkwXut5fPJsfzRY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nGtWSNHCJan2ARceijEz7hgAqueqmsi2CoJLXGPv3bdi2n6ZR93yE8pHV4LYCYjC2nvHYoSdbooAbkm79sUheVV",
  "key1": "2p1GPBx61LhReqSxQccWfpoBLXABUoPwwwKiFUVscCxHcBu4rkgRZmf1nn9SCejMZDmGsBpdPS1QsBQxSoc9zyTC",
  "key2": "5QmxiUnxo3FgA54XqPTmjD8TfDeG5QsGoB6oU9JYFFi4LZCzoL5YoSgMTiivfF1Dwyw2JRhR6AQ3cm4qZsgJNBBm",
  "key3": "3Y4JAcLao7qpB2dn8wBGcAJnYNi56CezNUMAFQvE9RRwNDsYZw3Gqdibwn4pUkMDNEcPkLavw7RFvaSzt94cv41S",
  "key4": "4TtsckE53w9R8FE6jFFb8Meq4b6Un1ZgM9PwWoYXwWJn1onzPDMs1Qx6YXvMpz76JbLCbkB2wnUkn55c25cNXN9n",
  "key5": "5XAnVVzz12c3pTZJdpRpsh5CvAkjCBeyZ9QBPZBnSZP1kXQnrA41DZpqXQyfwZbePxX6fpBC6J52rfQagi3cDk9J",
  "key6": "3unwYep5B7vSV4AUtCftoLqHBQ9bGNDvpPiHRwk7DMREeAmFYhmWi6uFtc6gZ8wN83t3B5FML5rB71zxhBKXec5E",
  "key7": "3oH5kbW5RukVgrxLorLkxLnjshrbhgGyGL16HYtWhx2PfGw6UgibuXuz5Sek9kwg3jG7f3M8e8ydxmoVcCQNarUu",
  "key8": "b7LZw1b4Me7qoah37JaaLj3aMjbkoujCv1dMKyoerpHfq648mzsPzr8nGrQvUw5c63b5jjRGphvbWN4HJuwTbvV",
  "key9": "4Y6a4mC64MTA5uqS1ZLr4diKrK7xBaYADhBuakuax7Vfua8a9HgZytHYj6M7S8EUR2Rgwi7AVxUaGBTbZPf9Q9q1",
  "key10": "3sJws7CN5Sjf6adXax6r9zHB21vcuK5AJNTACXcUoEekjvX2wdivGu7BdKCdG2ZbRgVs1GuGzMQSmNyQruvgKhtG",
  "key11": "5JpEUz5AGc67m5vovk2xWexGGhuXELUzykcEvxZrerWHMJLsTtyxvSo4QBL8ZggUSL9TPKoKgg4beZij7f2jDevV",
  "key12": "iHnTZ1x1eJBcLBPwWcqL8EpwVGvYb83bco2yjtN61RDtxS3B4eVviDDkj4wFEckYtjXq6yk7fWp4nmpcWJ7Jc7V",
  "key13": "5FyXcffioMvAe9HrR2M75pmJQQkcQK6ReaKMAzH8J82FezLyFbz6v9wg4m4WtUAqgjYvv8vXbuP7dwz2QFDXhs3R",
  "key14": "51vLkKoCyoN9xmgaJSRZoJLniaSQrTcPHspidpTpxvCisaRHF5cQkgiq7jy5NXcsFei3CBqJq1BUmawNMDmfofj3",
  "key15": "61M65Hu5TpPxUYgJnC5VZho5k51KJGYK5SPqnmTca9Xe95s1geFvnMgpMo5RPskhZWSTJNK95d1hFuqZrsPPd7Mc",
  "key16": "3nan8wsTR9XhjfgyRJ2CTdDrEXpWJpeg2Kah3ikLiKg7xjcqBb3EWABWY7Mz7pN87aWYFQUjYd3haY2Z9R2pou6S",
  "key17": "3KXEXr47j89S19MgHHvSjoQNndfjedscx1CitbtQjuqv8WTwTEJvHzQhHmsdfTNUj4x8EvHeFQfmJpbp583p9zft",
  "key18": "4vVTv1Df4Fw22PrAb3TukA6zqjRhgSwCiosF4Kc2vTSgsi7EYMYVyEjLEQ2ycck3YtCR4gjf2DJJpAnwt4rWpMnK",
  "key19": "5ZXb86c3HRb7gwaKtasVdKG9UVoEpjF8xCPHRmupzWF9mLyYfxzvgkyWvgeAzdMxFU5d4NDW1KvftWKruCFJYxto",
  "key20": "2gvhMgWWJwX9QHLovuH7sKZi2eyy6EPngAxcVcG1rQH3H7hY6dmszpxR17paP1maqQhrBhyvxHMeoHSv2DuqXQPP",
  "key21": "NPJm2dSUfBiQ6F92yoekrLBhVbC4bazJHmSQGSq82DBVCx1Ut7taLPMfPsviuKW2NkkStEpbniZTDkqcL4mPWSs",
  "key22": "eSM1HhChBkoMAeox9tFysv177fQiTviNv8A6HJPSxPB7Gs89FRGweH8YXU86XAyYxbmttZngs3wSeVnwydFcRwA",
  "key23": "dY2dWm4fb3uph8hghspXoZTR6L4sqAtn5T7z42k2bA319RPGZ8SkFsbsJV5PbSYEcHqikBgXAb1eouQAPKtdTtL",
  "key24": "s7Q4MiVfgDjFCipqru5D7TQayZ5ahQaUtjn7g1aFKTjC9rXLTnj42w9x9BsKWbsg2bKWS9uh5qXokDKzMWbMR42",
  "key25": "3zrU52aS3WLV54JeW3C6TVtujPqZunAZh7HXLvbsGEDhdZ4Hr1jZssf3jWKtnwok2rKPor4RPtuQD66ENwJ1YDSC",
  "key26": "3ry4wVmiNwRYorRs4BGwJKKKwYqAoVb5bxKMuUqDEjHKYnFHJry19CGT5iRjKuMZGF9ZnaLNTYRVjb4xiQ7vKMSM",
  "key27": "5AhcRXFBmi57uUuuqX5m5hwshg4PJsc834nBGm2XZuQvQr4TP8nQBcHXodpsveGbtcu8dczqwfM7jxiUAj84kfRG",
  "key28": "5LxcXr98H2kE7c151FwjFxevPBvjdgXnUFTeN23fzVEeT1MVyBDoGpUvEesxcL6LUQpDyoJYi3LVr23sPDRFQYVo",
  "key29": "425M7V68qyEe25zexCoBXvpowLwkDVT1PHjV5eNErHzKwaGGUjBjsebviq345enUqZm6L1BHTkKk2EwvfpaKSvXw",
  "key30": "4cR7cTpyL4ufDGJuYvCfKj1VQTZB9e43LjGuMdgJSLRr7cY5UJHqBhxqUB6JbrPZ8ZxJymUZke5kF5jRGKzYCE5U"
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
