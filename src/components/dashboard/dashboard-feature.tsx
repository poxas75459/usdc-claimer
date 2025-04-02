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
    "2nwJSVTJZYJv1WwRq7CEp3VNBucEbFyhddi9nofMu8gLTaSs44YT56jPbAVy3j7Ms7zfcN6mnxhsjXYUbiExgLJy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SPh42QzLEJoJvw65DP1fdxyh52RUE5s3HMj5HdWrV2SkG4gx4S3jgZHCyBQG4XNBTtjdZceheFdDwkEX6o1H7z6",
  "key1": "FUP6GKPaz92twxfVge2D2rRbhozwr1s2gmeBYPrsyziQok5BWRAZbhmFWgLY1ysFVhSQ4PfyzGLZwhj2AHqfS2B",
  "key2": "5pqcHTTaZbk9gQY9WxxQYbQuWwb2eF19xaUW54BRSQrmAbNsdCcvmib7CR3h5nujCnjKGAARX73HYw7dEXVJrbqB",
  "key3": "2uLR7b74ZCrLrKx1WMe82GguGhS5rTeL8xoXoRE2aK6TKzrjjbK2EjnVrPpLBbGVV9Hpmod6TqRkSinqMh2LfxnX",
  "key4": "4hWKkSaZFWzpEihksavBA5KxYrsxSb6iS8fAGGmDE87XBa2gbYaeRf7PC9pmuZnfJrGeUK3XexctS8DSQWU7ZeQn",
  "key5": "36Gf3bTZVoMMaJjtsCA5LghRoTKAbpQefM31qir3Vc5DikDGfXSDtvfaRyx4r2u86DbAYthQuykXcMWdyMNuFDEr",
  "key6": "2dnu6e2byEp2jfiR4Am3TDcYHY7UoJRCS6nhx1NKZaYtYrajoEUPdTc5gekzcjyHKu4vgykczK3dFpkEqVCY8exX",
  "key7": "4g87n77xLaHphFu89i7NUZAWUwAQ3xWb2jCcCGbSW23MDVKAMWvZF6S46MUphV7wgoK5Q4ZgGA1UqyTGc4Xwf2Wa",
  "key8": "2MSpqWFu37NbWx13yKHU4HbY7ax6pbShaHaUT8CSt95cXSk16EErGGAVxyVF3kmwjrJdBUFNbagzRqKzcyYrbgo2",
  "key9": "3t69s99qi9ggnwiU7dAhRi1yX6NurNy5drkFZPCbFLzGAN2eLPryyWCcx1FqDZM987vPZshiNYRt35jVrp6UdzWT",
  "key10": "rQVaNnKRNZiyMZpuqMQLBAeZCyACW3PVTg4W7VdqWNWVmxrogiekbaBQGZmQaou2KtNXvgkJsUTCKdTEBScZbzs",
  "key11": "2e5qFNE2FwjNNz6YM7zbwF3VYdNGy6shWZGPagys6uUSzD2RYGgvAa4QyvZpCErphFUv7zCnkGhF5rYxx4RM672G",
  "key12": "4S8YmxWrKEUcWPgB7Vae7VwDoWYYK7A14nFotq5RTDc618N9Jfeycm5VLd1CcRb2XJwL9uU31zEPhhQE7WKgotrp",
  "key13": "5s9quWnZmzbo1t7dn9Ef2u7S9ZfpwML2FRwS31GeMXE2Js1Bome7m7zZVK6YRuyVseNcbJ6rggEcEhswY1vqrm3f",
  "key14": "2ENcUjHsviwP6gxuXbJmqRgRhvtmfjW63TMBeVz9yrTzXnSX9beXQzoYYVDekJXFB5T8rZGQB79wJ7LYkP4bjKP",
  "key15": "NDHgUxvSd4Jonc5d3zvzUVgAeyAcukvGoW2XfYe3VTJPio6WjWTwCoFPohyPVoW5bgs41vXQNeYrfwLA3qRfp7N",
  "key16": "2AGrqrqo3X3LkkwmdmicfqbefNhq42HN2AHK8wU9sLCW9KNkx2VTKEFKSVBR78X3Ggqqn86y3JxCMpz7HSa9GaRC",
  "key17": "5UBgiA2xWpjmXKXVJP6vQ3bMXHKyrQ4Ab2KohUANqfLyf1opSQ52mS6BhajS6PTyHbsqMF4iiDYKgSk8gQqYfmWH",
  "key18": "3sdvYqAsYLsJiqCE1iem1cpeAR4TMkDnVhEo1owCML8NBPXzhXnePiZM5bpBq4yiGYXkdhF4LbfGqCrgpxXc41u3",
  "key19": "4fqmkxL3XJRxqZtG7qQpNnWM6QUPBxmqDJA8EaYSjThh8HB3ezgnsguhg9cVvJxRCowaBCxRPWvmAcuYPb2Jx1dD",
  "key20": "XkSYAjojTUSPn2VXowVvdYSsDBtw1atoekxKheH3Wrv4pWxokq8eo6svQNmYcC6USUzH1geeqiQjzXqsyVFfU5q",
  "key21": "4RomXphNDpXboniFcem8B3ZYEZ3REkwJRziXkDUYcf6D73tqLiKzKLrEJj32RXvm7K2bBWaNyV6gzkXLQWdQvkJZ",
  "key22": "3J1q524k5B11vbWAPFQ65rZ9sAyoyAAGLDMparaS6h5DymJCLZ7cpDRq6NstGu9up15DHFNnWKmJCtMfsDUL7TWF",
  "key23": "5MhGtzJEnSTWBkFvoBU4Y9jdjZCBKkFfJkGaW41XpXSwCcrWn2aTRSNaqV6b2hdxeTFJtrMRLfB4WsVnDiDdaKph",
  "key24": "omt8JipHFJv8BmBaRyDxK6bAuVwtSTWCoo1ubdfVpXqA4tuKDzD1KhkCjbMpt1D3GyKBUr4dDSG4bdZecayvpYC",
  "key25": "65DL8J4TcF4zQL6Am54fL9gfehwiQP3RkpvsuxtXkN2cmGcudAVxGrvi97Z9yGdSRaMpnZABLowEfeLS4MWd6QZ3",
  "key26": "4ANHQAKMRLUvDkt1Ko5PACWhMFLi7T5CeQgwvAeYQCN4SEhqyPCdVdQGXyq4L6UhUK3HcwAi3sKKjhM7t9QFSQJn",
  "key27": "29R1SN95WmJidtK4BKUdW1feLuEgUQnWBfRXzwSQRrSgaZX7wUBvyvwXAAAAerbZRfaGnqF2KD6R7kPqEYdTeRR1",
  "key28": "HmqfkSUQ3VGUat2MseSWKwaZNS6dzgp2ZzhNTVGm4PqqzMAZ3oRzgrBR8D6QsDHja4kq61GZsJSkQX5J45vv7Ga",
  "key29": "3LDagCuomRFMqsx6Cx7x681AUzENECqtr9xFmJQ5fYeTxabPQF73ht4rKLWMNzfBCmUHMmksgC8aFzff5KJG8ry",
  "key30": "2oKwS9r8igaCrRp8BBMhiaxn1gKF3GpR9vcjz783XCjWFdfTtYUdYvm5zJSnLGBJsagwJDPWqPMxFP3KEzKJpU21",
  "key31": "5VZDZKzEAV84VnpXyy3aVk6zCHaW2hSscZKXAei1wfkhziZDkRnGTv8c2YaG6PkAnjxPTcEVWJqchN4cLqrwKZXB",
  "key32": "2YcTAxccqsFKNFtDBJVhYAznvg26kch1L7x8XE39VkzoBmpvbqCGTsD2HRf9P6nTHtFDemVaLdBdNzug22MsajBk",
  "key33": "3JHtHb2sggat6xtXo8pjbtc9mV1YYanE14JSZqmKedgrXH4WuB5pXR3bRbhZndJwsqiYK8YrJDFha1HJRfU8Cyhg",
  "key34": "3xsBs5Atyv2Skb4extSHD6c1AQJEbQjqyLJpUiny36ecbe6eDNb9FiTQWE14D7hNsUzwFCZBBtwbQnusA7aMAx2f",
  "key35": "5HCQNWokSboaGWcefzP6seAToX4UdZbGsry6AuDMVtMQNE7ko4dqhnduy1Ez5qErjzTnkSaQuCBgrQc8ttoD49dS",
  "key36": "5SUPkapFxWqHpfRX8a9ucEwrqovmMF1fewUZvrdhzNqxc1i6rQQDi7WqWS8R46nCbQgEdEt5AnnGtJcXfxj5PLD6",
  "key37": "4pmaGUw77vMqiVGUzQyeqXFPwERxn5RrBjYEemK7qT8tkVu3ZSXyMCexgPXrnvx8eTPwgWrywjDUA3cbMizQDb7c",
  "key38": "3qwN1wk7G2oxzb3Cj1VsrupJvvGWww3jC6wkmTNCxLAoCkyYMvRu12CvG5LixjGne8TzwnL1BN8nZW42vMHneEZF",
  "key39": "4MbwgD3da6UB1m683zGqLSLrT6r9XmajgazWNKX9KTFmiSjdR4r6VooXGF9yE95TytLrRCx5ywJKUZLbHJf6steT",
  "key40": "49QCuKwLNieC1Mt68LeHZZaYEhZjk5CeJ1drYQYFUjtGTHvXTZPKfwmQaosejfv6cgBiana9RZQPjofBBCqzkFSm",
  "key41": "4WiSDGFjoPufbiNAVn3MVPD7E67FozGzCEKjUXRnKrWDiAdiiszUjeJejZN3dNdymjXRpX6Vf7ixbv9haUf1ZpDZ",
  "key42": "4vEup8ot67j7t7rSVg35gSBfCaRzHGfGwC62k6u8dsiHkeYc82vRdGxkYsbPxSN75Pq5kwVHcgynyzPqCCsnguGv",
  "key43": "2VKfon4DP1HJHx3Szrb3PnDt2rukRoTeMJjw2y3KyM4YgYcabnzEB4yY9D1FUeqqKh6J4yTmUMBDgGMhjpaZ4jHV",
  "key44": "3gvNZ9pvbpHQty65mkXTGzkuAk8xmj9CiR6aX27KGBnw1JYq7WaoLBoSF6ZWoYMB3KfKfhdAMSnxie1hD5L6ChDj",
  "key45": "3tgHBBhQeF6UcSYPWiUP9XzqyUsDjkx4ZJhLgfYy8ogAC1w8vqe5giUtLCnc45YtgJBUPGxg9N4gFcSKHGk8nB8K",
  "key46": "cJk1Fgio3nz97whYCtFb1UXR5rYGm8sYfUZab75C2WHJdBZEBAWB5FuEtGqgJpibmSPm6Fa49cMiFSs8BMhAAfe",
  "key47": "2S8yioMxHiFaoTwfR1FpSPV4ZDWQnoZNpgngZbKqaAJdiY8ew4fnQbPBqanzdeKZei8x1YwBdeK85p7dGsUi8yCp",
  "key48": "4568sisDuyG3iMFCpDsFRW6uRiHENjofu1Lb8wpDYWmqTghCjNkWwMS1kmwTmMxLoEsSHcPkjJVJVQan3uCJKZ7j",
  "key49": "53gVNS8mjr4isfJSEzp9eQLJwTsWPFBAFr3xF8Gta8u356gTkbZ757xEH38Yt6AJcUE8FvHBP5k3WWx8Uw2uJN9c"
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
