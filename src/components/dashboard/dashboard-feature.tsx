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
    "2CG8b2iKwSsL1K4ji4ACuAQK5JHADtfBEhYmzxVviAEsANpcDv1ajsZuxkgDGe6e8b7WXSHFCixPf1HoEe3q8dXu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gnNPySHcLSeyZ4NUeqCVxv1ESgeHV7JFyG75RJfcbgczunc2y29JH8P4pU12kEf6pZNZquo15KqPa5vDgHgRKtt",
  "key1": "2hh2N46XfsaJNuyRadEbaMnCHGCpWSyQft4Y6rRnpuU6MymiQhf8jHbJ7CAJdPpXTUo3MEwewUXFKz3wxSX6UKNV",
  "key2": "3VKJwE1sy4h3ScvKTcqxf4ugNhKLbKri8QjsVU4u1nzZhfiKTBhS799pxyEoEfX8B6mXGNcX1Kua6Hsn8nzeCgtZ",
  "key3": "5ywy76yis98EErVyesjmVRPpYBw28MU5iVfQ7xknakk37GMDSwZoNrG8BvctPHu2yCpNVgZws626JwXMTPWrz86a",
  "key4": "5heRhoW924XKdQoFZHSukZg8cTSvdJKp1gRxgFa9XxAu9nkw8XM9s6EUMofvMa8kx7B7jt5Z72T7ZsLThgqq1ent",
  "key5": "2FfCjShpogqvshwownSqxv2bcn7Ysvc3MMQc5qbzQc8Um8oL2dxqET5wYNrDjyzMZ9nwrrUwwcbec2K77scQoY4x",
  "key6": "1tFBRu5wer6s3A82UeMoQU6bCFjnWBFt3TiiKu6BTybbVNuBYRayiYKQZS4scpxMFKrGxXzmmREzRdY7xRW64f8",
  "key7": "4YxY176gYrQnHXdL3AGqh5s4KgiJASRuWSwTC6xTdFQWT7fTFqqcaCT2qz7cnhcrz32mUkj2PRNHfwFUHAjMwuo2",
  "key8": "4qtLJkx9gu7oUC5Xu55EKUA3HWXftadao6bRF6QSQqPQmR2FRQzd6iV7XX4wRUP3pTZMn4bExgABK8a4G4MFa1FV",
  "key9": "3tcfagcNVWet3SHjaB884MDz1yFjqdNMP2G9cJJwo3bRfs7MFxir7hsFF74WyQacaEJdyp9jL7rWYwUz7RdghFof",
  "key10": "4T5FUWFBDmsoAuJqnxfZm1AxnpFaqtwsw52LHRE4byYpuDzBw2oa28NGo8SrBu1iVA2ceJnowuZaqxd8XWvnN29G",
  "key11": "2JAEskroSCymBrKdYKNht4Amyu7gDGVWSveDL4bbJ2B4mhyo2pLjCLD6ryKqY18BseQYncjxGd51tjVGq3eD5QuX",
  "key12": "1h76wAPmdufDW2wiVDpbYYjK8veD18j4MjuT6yGRSqNGkrVwVcLZFW9sogwnUEhSBvVidGQXTJnswAAjWaNNZcH",
  "key13": "2eoyqFhf7a5d5aHVx9opTNKMQLKcMjripsXcfNAszRb9D4BryXr1sDUf5zs5JBx4wP21xe3f4VLeHgL4zNnnNsSC",
  "key14": "43e6KuEyTzu9rbLxM21ZD5qBRctufgf7WyLbibcDp2g7Vq3JLKBgM9c3UZRUYnMJ5HrNeUAVCqqWYeSrSkosUfq4",
  "key15": "5qivP5vRLPGzKpq2NgvVAYn54hJiXpyeuem3JC2chsfgpeGZQZFPUWu8R2xwYQ7opUZPLdaFscjhn12LBUyg7gbW",
  "key16": "T7YktEYgcMH3LbMF2RjzEp6XPshk5TpjK1SmLjdbVGQPvsy43o7SxRiD7bfgsBrKWAmk6sePgYV4trCHsEhcURk",
  "key17": "4TvxFtkoCfhYjZnDgsGZeR5Xu2uczZptRt3PYah4szbBbYjUNAoCkfFEmH3SuTy9bMiVU9yLbh223iaYLRLR3JaB",
  "key18": "2mTHbsva42M6ssUWvueojbsKiGTAYWhU5932u6k5TdowSV19SZQMMScLzfwxf9Aj36zLzfykUmMhjn8CYFZ6JdNe",
  "key19": "2yyv9G1Lph3UHNh2fAmeemHVdRCgiGQ5cJgWupNktcAncMNFPBntugxKZQ15sxCHiakLUR5pZyCAR4gG9MBAkspS",
  "key20": "3R29x67kCwvGvK9egcPiHnvE7g7smoGHfWo3tdBmgxE3dBSJSiKkDuu7tuWk62T5Hou3fNapdWPdVFByNTogmokR",
  "key21": "d1UVATkjzbZ9k6piyFGkaybiez1zfNztMGEKCStK2YyG7MDW6pPfXygdF9bbhDasThDDu7caBGMqSMVsZKzwphV",
  "key22": "5q4So3yabkNCdMjncdrCDvSST3maNZ8oDMCZbkSYDLwmfrj33Z4T2qEKjBQMEopCAVsbkwryULpWyCsKyZfH6Vy",
  "key23": "3w7AJgsS48tJXxH3E1hAhpxRy3Dc7kgC1gUAXJjh6m8d9p5RNWE9zN6faZvpXfP7wgq2AzLTtJPbyF16gP7eyZgD",
  "key24": "56A35txkvozrgcFbLAwvZXwxyANXV98MRhHPEE4t79FmbSW28GqHWzN1G6fQNGnsB3ygtbJrppZ8jHLXh4AXyaN8",
  "key25": "3MDqDxvrEedHpDRPeYXriR4KKxwkdg3vRwjut5VD4eXAxGMH1cW5DMQSiCwGDJi1q3MQywdj7XqU8vsrP7qiaVkz",
  "key26": "3Um8w84McBtQKLjfewEvvV895u57fATfZCTyfFpAL91f242wo9PbekNZxzkFMRM9B1Sr7r9xAMqdCVpzBKvMEpYv",
  "key27": "18VsE3QMHeE4mdzb4uvxnMeLq2kM3HVktiRBnf1Ahym22hepMxYGUuvBsmK2YtUaSrqGL3tmvFwXUS5niWHtgSJ",
  "key28": "5KCh9hZUxqKzAjDtZF4GB4rAk4TGL2jYNxSDenhorFX2YCdy1H6mm3Z9odfv7zD9KCeKTehNLXohvCQmtAKGz4rm",
  "key29": "5xe58cUNQb25qT2EKLVCLskvYTSejWa6EbabE1KMJmqkqGVXXfAtGpZ15KkXWmyo8c3XdpmXvmMw3gMDrF1VLpcU",
  "key30": "3wj831ZioXwL37HZHi3iP9m1h9wktQrNWbiZpsYe2Dkqy9AzoYgmW8b6KeCdLMU11WjK1TurymnKYnDsJMrmmpDe",
  "key31": "USsuz8FU927DKpJr9EcELtwCvaPHJHmiikkRtKt747EmMG8mj34LBR6N4MN3qn7LVPEPXAJScfeBfmdnCv8SF9y",
  "key32": "5EJPRFARR1qEpi4GgHPATrU5bR9PMV8yS8PqNf5AtcAafoqxaFPbemukpNxRFxY5mpQZbG9dnP8mxQfMtbG1TWbV",
  "key33": "2r8AMtC2sgjdwv59SEinxCg9fwNnwCsLHqwgGH9SN5wnSF1qKcDVUq5fGpE6wo63vWDDUAgJNDBYKTeDc1dzHkeV",
  "key34": "4iUHkCfXQBuVqozRRQUGpRTgf4GWCxoWrMfKKPqzCKUtQbQwbtdKti4C36RhcpTxmiPeXmbT8dQLieUpLUFnDLP9",
  "key35": "FJmg6g6K1GgSDGF8SKkvdYXzhmzSAi85husPBzSkTu8BLhm9ZT3e7cKPM6zTp92xqVpQoydV4MGpcuWqa7XyxxA",
  "key36": "4g55aF7U6oCP6fNjq1mYW13CNacSHnQ2441kx8rhz9q7bBrKTDRKFzEKf5MZcVsVqFvkEyACP2FsKVErFnD9ujpy",
  "key37": "4CNjfAwzEPP8zbc4uyqaeb7h7Ggcyq9Xea48u92mdrnPLoSJfAfrGKdr6jSbfaocwRgUYMKfMb8kqpUHW6vBngox",
  "key38": "3EQkZ6ftCTfND1eDBNuV8mN3U7iauWTbzB6uEp8n7i2njWKoWNcVnw6By4TKQhZoevnc6BdJjZiWmLKoTxYQDKL7",
  "key39": "5Tsw3pqqYgjSaRzGYoTE8TsM6N9KGMkhrvbbu27pHsWtt8hpiTJtBVWsLMzUKfnJnYo9pehaSMPXPn2Us3QYk5LZ",
  "key40": "3VLzifsjSTADoUffbzi3KYjo7txA6HH99vyrR41n4gmm75D4b8cePSwQYHghgn92rc96Xcn5DW2A78y5F6XziPh4",
  "key41": "4KLSzvxVjSv8bohYrXNQpZLq2JdTFdGbGAK2ZES1XBZsUDZPEgDDp7CDbbmGQfxwgPFsHw6FounwtWNUrqo3cW5W",
  "key42": "DXEUqYYZNcxwWFeoYYPNsyQDtYNaGHExKhoCd3V9y8NaK3nGmpYthitpxmC77ZrcnG7nQes2bekmMqEGZBNNycU",
  "key43": "3H2EagsgNWWqyt1jvfGJouyiBrmGXrjXQ2wN8iqhqH1Xc45jgRcdDUrirKBHmoHVUGaNB78Nwym5UY8aCJS8qBtJ",
  "key44": "34LXtVFagY34JLM2SaKyUkk6RVD8R8SWq2CELAX8wup2uFpERqRGRaSv4jrXAU7ixXUq4mbPJjycTKpaYZKs5ddA",
  "key45": "3rYqBC6KyL4oL7D4DrSzctUnnQFTgQT8tQnqCGcGJotayckjPjpdEE24LZCY8UT4K14D6RVnZzYGyHuERdgSCjZb",
  "key46": "2krgQXKSJ7qpULyTintBVZpZ48fMVp84APmcAUMzV1kAyeHgnxDLYyo7x1AmpNzktwscCjQej7ARWgPokMNoY1wC",
  "key47": "gWS6Zjcz1RuLgnehxFBLDQSUT7pFfaieSjPg9Xwcyx5XKHsADcMahWFD8N1EVYc822fwvYhJna6mG9jhrDyijHu"
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
