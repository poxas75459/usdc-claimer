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
    "3Qo5ftxLmkrV6FzSc4ALf1TpwLT6CfhcgpDFXJdyPnhJMKCjG5cuW8Ye7JaDjKUgKFFN4odnbNxE6ELj3y1sFpeT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oXjwwGPu9KJRu8Hx51xZYWeuDvkVrBFUenE923ykb6LPHSJdiZ8TRLgeVZEnzLMFhWesCNucdAn9kFu6xLY32Px",
  "key1": "ZXsJJcg26qAmGLtqDTWyTyRBjLJCWTAzNajEmC8q1xuk1qea7zr9GNSEyKm5pjRpK1JhRTy1726oEr6iCzJdRPU",
  "key2": "5Yq7upjKEbZpNc8b7n5syPcGwHZ2CRiR5iUMQgTFj1tDqSBSMBZB9ovxn1ryFpApRJPcVQJ4DjXB5vjxuGbFBY3D",
  "key3": "5P933kWXNejd5P2PksG59Ps6NrbkDqZGPgjSCvTAYarBJigBzUdqFwVF25RCNioc3q94KFNERR8djT9ujx6Bhb5B",
  "key4": "3tomyss9NDf9jREa788La1Gm58JEQXW3iunkaby2NRUUBJJgsFqkiAcJEiHZMyLgKa1CduuHEPTYLDnE6fzfHG8q",
  "key5": "3RGhQGwSNvBs911cmH6kE4qe4jwDxSuKJJFtAddoYhMkvqX3Cjkij8WhPpFX2CGFZVV4ixJdmk7AbyazB96MZjci",
  "key6": "64HZWS9i4kza3cLjZQppxpzSHsPFdFRKagR9rDdtP6gzrQVFxERcBBBkSSyKNNCLJzMZzw1cmRy9qATn3byqRHUU",
  "key7": "UKE4ruWh4NgLuYL2PLfknMAaTxDZajMGzaWQiB5bXV6QTWzfVPZRADYUYGeHKXHrTEtybGZiy2tSvqL9K9NYqqb",
  "key8": "3PuzWChumJvZQeH5AgGoihQvbMicqk2tCG3Z8HanGfJTYuvPeArr6puopCjxbraxfdYbN6s9qMn175BC48aMgQju",
  "key9": "2fiygyi7C3ci25oTUH3z1Ejn23LPJcZMjCcpS9Lnt29Z7YT6pp39KjYzjYRqBhyDhLsnDzfbEMa7XJVEHkM6hqdw",
  "key10": "3Dj7VwoRZs525Rv2qHStN2VjBYvozzruEv6HE6Gi14bGTpXfujadPuuWP6esvFiozuDfGXZMG3PgFrSh8S4iavod",
  "key11": "9ied2NRtvT6VqAuAyQY7g4WJoPyYefmDPzDxnFTnr4gKtWuKQBWSkntoAcPQXhLEDWw8MiA8KddTAGDM4otZxYT",
  "key12": "5XX5bKi1Swt91wBUfU4YZe6WuAa2Md6eGD3BnuyPyxiRrrbuMQ9iVg7WxenEXHZ5zdRw3qE5yw9E2WNLTRV3vhgd",
  "key13": "5kbaBAP5SBeSB9RytpTre76oHqRZ7YiP1kRzz9ZmtfbqtiuwYquXK7Y6wpPuBSjPSHicdpBP15zFYWzJ2K2M5aBJ",
  "key14": "AywQzk7tksKdDXJnYWaDzh8zPw3fzypEyrVYsX6XfyrvxqvbJCjdaTkNBLmrwcPVE5Pn8gDvwtgsgDJPEd5uE6Y",
  "key15": "34MZ3SSnZ3rUKmmbSQHqDgbm14Q5vqjxSyH7qcc5RA4QjqXKJ8FvQTS7iQPAvDEqyY8YLew48QrkgpcdRAWJk5Ly",
  "key16": "5petVzGv8WBeEYE9EhtmENwGEtEK92eSEnqXjYYDBCc9wgAswzv9tgs2oUdUEDA7ntgGYzJpfqeUeXMKWiiy861J",
  "key17": "Tn4SZvCoxjFFqQa9WERZ41kCe9dkJJLEugJy6fbh23BDK6vL6Wm8a3vkdgJWyPfaYSF5dqGcqrvSXTR1wnb8qZx",
  "key18": "4aRhgfAjkVX4P718r6y3A1RCa3Ga3h8Wvw6p6REnFqRypGMp3QSELyjpDdqYChQbnAckZ7o5tLohrUNCceam6Cyd",
  "key19": "2VKdGeHGMjMCQB3xrSvPnvBJYmt54ytDXfYE7azERzfsAvDrpbYdqpfi7WqrBjGrQ9QVX9UcHvcUhVutrhYfnCzP",
  "key20": "2C63BzDDzqUxZLzbxNg1yxwhRkAGncgg5Fp3ESqMeKLGYvc9cLSbTv3cgGKeEYoX5GXDnNcDfsnfWPhqzmtKJhcH",
  "key21": "BRBuS9oDbfe2XdcdAgMaYs7fZfvJLfHgdoBVemECY8NVdu8VdNodieHxQcku3NNoUcEE1fsJ7fgmqso6CjMoqud",
  "key22": "3zRekx7bBh5MD89AeoygyZ1Tw8nkWwdPM3YXKA1HFiDn2DNnPiUGQFX2344uKp8S7g4KKCJY26tAxZqBK5tAUKzm",
  "key23": "qFgc7ycfGMTAtV6nqLEcD67bkyjYnWu4qSxWJRfp3648ZzTyFynfcTLdXuhpYb3KsqC7tL6VwpnfgLzgcD3YPPJ",
  "key24": "2GBkhBcxSDWFPWSrZ1CvHF7qBgXfMJZZupB4DSa16ZiSeBjvmL3XngNEvAuNu7K9ZoU35dnaX5GYGwcymhG48gGz",
  "key25": "PNLTWsVhGDx1NemnTHKDJtFSGN1kzBm2kzMaAv1kaZm2hu6bT6bFk4q4yav5gWp7E1J2yG1PSs7Fu3joEwZEDFz",
  "key26": "AwrHzMrdDvjULQweRLxVyYud6RHiXJDTS18XZY7GkVnMksHgFQeo1zyE2pRsjfXFSKxwvFgmedk6wZHqFrkSa1J",
  "key27": "3QPY813HPcxUKxxjuvSGWZV5J16VJhnbEKC8AA486B6t2w6jUU7o88VXHewbP1EcCdacwTwUUU79DuqytmgCZEHT",
  "key28": "2wBUh5BtguJPVnGrPSqUcTT8HxdXnkYX1GUFzSZUpVFvwrBPwHWtU5GrPfXrXPeV1LV7D22EkxwkUo63F8fht198",
  "key29": "9HfaGww9DTFfkXdY78VyLqX2fzsHbqMLKo4xgNVF3tKGhHnVLJbnfPGzg3C2Ako3NjVYbx7xDH5wXLjh6wpcMQZ",
  "key30": "3u9nBLAJu9deHwUNc9Vy3UXHzaMjMDRiz8SFLT8aT41b2ikrSFqxDMrw5T9rJqdGiPpnxLfJdi5tEFiAuZsUUXJw",
  "key31": "HwGjCa6uNuHJ39oFJVKPYToFKJ4RZKGL6qPjVDDXBjw5EA39NoZWEnrth665YKXrHEgJiToSLrvAvtMdxLbKDR3",
  "key32": "5ehL2pQ8iCDqZQuZUYUcrpHzAHjPx2bQ7wR9f11uLC2fnD1oEXcCCnwhw629735w2hF3myHsW64wGufqAyFdg2A9",
  "key33": "4r9QMk2VG14yBocBcBbLoLbp5CcoEwCAXWwvFDd5hLPbswxviYkvx9qaJDuk3ZpZW9zx9WgLSkV5ye1mB7e859ZL",
  "key34": "5jiv9PMvUXmQ2fHB2xp7t45g319J8JGnvKnaUzEsd2FN1w2bHwymRcNBMxKfAeRqfqAhWYqHAjzf5g7qVLqf6AKx",
  "key35": "5zsEtF3AUiUCtdkvfy9hGvCczCNQEbPso71GdUbY6Rur9BFutpwu1g3hH2u88kYX7AjcKffdTFCzGjNAgND5qZRm",
  "key36": "3AmJr6mpcpZqF7ikdzmPhK94wU5FtMBCUuLpZNvEVhm9ScB4CHc3HTMtV7k26wKyveFXsMSWzogcSkc8KeDzPUBQ",
  "key37": "537MY5khxCLM3qrwtD1CUyZQTynEytQcjbacRt7RBzLBft4yMsPaymHNJ1F9ibf1Tnevqp2m8AYb8X3sC8VDSjhd",
  "key38": "4RRCMLAK2xjPLJPxyZex47Z8DxpQ81nsYowahzaa5ENuku3PKmN5SGYRrHPaqoKivWD3ZobV3rV7o8115jwPJZrR",
  "key39": "4FKid1vNDswwhvX7TsRd1aQw5ALMVAtmhjXSkHWpTBbKEyDsRQ7w7MMW9g8uU5HgFLdATyqtorusUbzQxWFrHPTV",
  "key40": "Sevy1U11oaWEpNdeqERkQpgNF5TKz9QRZebHT2SNUrbm9FjCBTTTRhG3HsEnVKtxK2brDBGNXDNp9bkX7n98PXJ",
  "key41": "ytrRBf9jVHu1h6UbrW9fVoAB4n8q5XdNg3nDYGhWYWUdzzBXo384nzm8gcC8LQNsK88cGPkWY6N359peboUmwia",
  "key42": "6Y4rYueq55Cx4V2iiYTC8d6EpC7DzES3LEc8QtsAuZn8DkC2i6emRGU4GBNA2ksUjFYwWaGAqzgKmvweDWfAkgg",
  "key43": "2uMV2cibnYVU15dVpmWQouTSCm9wXw6XHApJDozfSrqWzHD8CfNrtxeKjuie4FTttfKvXLQy28gteHBRwaz8n54e",
  "key44": "5m2kDoRkmCKHAfrdEobzzxVwjsAL7zsHPXk8c31btACcg3Kx69ByyezNABAWPjia629mFUgLbWWtvWkLFwMvK3H7",
  "key45": "4oT1TBbFxDKJYdcSz47abYV2H1SvKQx9WgfLw3cGn2W1netgkb6R4uQVji8iy9v9yKgpRbmV1RUFBJmFP7N8Unkj",
  "key46": "5YoKDxS54Z7hUdonTyqwdSKNNdZXycvVHA13oRKz1yTdqPyqGeCdNgNCBixJs3f1Uze3jzeA4MZbtCE7voF1ajsK",
  "key47": "5rfAsDvzxkouJxukJdbHuEyqiTuPj5akN5frQyt7GM5KAdeptraKGwYRnCHiCc2j3P6EbRii5CD3x15HB3FNoyPm",
  "key48": "EfwkDJCMeCtZSogn6mfNTp19jC8q743WhV4AYuvhL8PwQnai8me4od3vYLUTKiMM6fNUsah6gJixWA9GENjxhb9"
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
