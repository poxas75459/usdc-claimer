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
    "2EmWYgMQ5bcRtFBtJygPYgStMK4vEaqJUxXaT3N9rMiNVBfrmUUmB7mFCpT2N4LLXah7oZHwRZLa1vsWzikRbDoL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55VXQCmhhvLbwA1XPXz2p1eBwB9m7XbR8Q5FRnw3LB7s9TpM7ACY7Sh5a16vNgP9EeR3aAQ6B3c4vsU5sUaajRkE",
  "key1": "3fL66KZhFDpytMqxZSu99NJyUtbySZ8pqpmALCueCkDwxTPaA9DwVTnLsCR9y4mFMfuLXAzrz6FmR9EH4d2R1okq",
  "key2": "4ZxDAbL5rmFBZbtAWR2Gbd8vH4E2Ryj8tbuvCdxvJkfJomivMFx2o7EWr3PMWLDmJ6Ej6ZFHghngPXJogTKcx7xY",
  "key3": "5WJ8rmY5LDH1o8YMKEp9iQtn89wD7JdQZ48KykiBDdkSyvoqw1TyzQpbeLCetsNnGQoTLvPntpYCzwxPvd6bwgFr",
  "key4": "3GKBzUm9CtdF9aMj5Rim4UqkBCUMk6kmVQ2Zsq9g6Wp8Mpcw39ujZGZFctY8RmtKzV9xSXNwdjnUF8URo16JbpQ9",
  "key5": "327XVtd1aBSLPWt8V1vu2J9gcySLKUS5Gi8H2YT6UKye2DNRHmB97STtXza36PRsggyBrXs4yqCbDTFtMAemY1W9",
  "key6": "53o5oMw8xcTwA5MuXsvAiq2VzNg2xRg2UV9p1XcnzXvUGUy92h679JtKbRVkoLvpD4eH8ZQtpXvbF73JQs46WGoT",
  "key7": "3y5iw1CZBfTsw6XwaUqthxBPbhsTd3DbcvwBaJ4P2j549mDcaPGfX1tvKxyTZurdz1vFGtndj7n57yAFZdViyqVi",
  "key8": "4XEbuQfSNxmHoZSLBhYNFtnGf2iZ4SpEKWtcsPU5Dg6wP7zPLsshQFzQHCJ6mvu6Am5T6wEknJ998kM3GUdaeZzY",
  "key9": "362AMbqaLYbaGvUM2Ddk1eNRe6KkuuvfXjno11DKiAMot7VDcXWYnxJ9wpv9rUUR34nPm522mrA4LVR3TN5ZwYtG",
  "key10": "5Az8FnDDLZ9N5NLzxnFB1dL88VEkVz4rswRRrnP3DYnR5N4sMh3JWsS7fow6mX37ZuPwHmpfbtehdsedGqriZ9nV",
  "key11": "5kAsa3QSvXX6GyGbeQ2TPxEr5W2YiHRzAuM9Jf5i58E1U1ewZHJEz35zuPFxa6CHVK6AkJq9FHJoCPWY8VDt28AF",
  "key12": "SnWxEgn98YoQFsUXWaNaiwANHU4YNWUBsM9qV2uJa7NGFo6115zQ3wmoeqZD1EVqGTefm7QpV59XGULwVSDZVTb",
  "key13": "pMe9X6SXZK4V2nfUTvEzZduXLE4MrpbBpcumbpQbSA714MCThCDtmc4PszjRW5VPb2ivmWTsHtbAERuc65zQzaE",
  "key14": "uCGUT4zRhQt5EpUFc69Pw5Bv4zFRXpEdb6rPk7RjKjv8QdorU1gnPu1QjWQ53zFhfeRZp98jCqWpvP1sVdZuQaY",
  "key15": "2BpFd7efPSvUDyuKs5XPxPUEHMQx7E1G5p8R86QyJS2Rd7X2msLRWNUDWEMYu292kzJRgY6LVew48j7KsKLP3dU9",
  "key16": "2P8cdPzZ4EA5dJ7RYj4QzmwBPU6B6NJWs7Es6itpVgWSUH8boqJEa9H8bvDVJkyLpYdX32W4rqewvqQTx2b4SksF",
  "key17": "2GBb3KnV5KEZeUz4MLeTui5sjbUEYn5GxYYVtiCLnz74ejM3Ay18tPaDSZE7HHTiuvUgcTAaGpgopVjZE4nkkAiY",
  "key18": "3xQMdH9BzYHiDSkZN9Nj5fqzYHsNf1SnQC5GdMVpwMYoLfKptqV92oefYFR5afEgZfk1xu4AUiLSSWbHAjPJRzVD",
  "key19": "2k7A2VGiDxE7rcrxmDp3K9SKz3QfmPX3wYt16VFArVM5VF617EoY7FWo2KttdtQnQaBtXDgHZdRALrZk6pukUBjU",
  "key20": "3JmyWrRsG9TvcbJQDBDZUB8yD4goACtctxPpGjX9xsvKjjRHGBEnzsvBR6AK1yPjXjpz15LoTgH8L7JT9w9ZnfXr",
  "key21": "4a3Vq464X8g8xdfqnmQ256RC631CEnN9P4D22JcSQJoPs7xJW5YFc7tzG4ncSFQgQK866PXnkvBWbqexZT5pzc2Z",
  "key22": "LS4er6937xoyRArbwpDwaxDGxYmSErgk42HfhzRphw2m4LZdUPW3458G7ivd67poVNvWZNqZD9q9QQPvurbFxAN",
  "key23": "31UCRaDSBFBg4V4zMZYqB83wkGM2g12gx1V7xxrL9cSjd4NpvMqZwnbUfy3f8Fumh3SFcyHzPwZCgZz3iMhKrWKF",
  "key24": "Z6bnYgS2qzHGYNUgVq4H4RNsTeAcTqj6KtB8y9yRbzKHFk45EPh4k6DSdQF3m1pR5S8aDeu44bnk9KtZ2UdJ3zi",
  "key25": "4b7c1pYa5zE7Riqfds11g6gNpregaPzCDfCeEaeWJSyMEUziGT5ChHbmXPbsR1yY12HYYveUnh1rFtsZndeTcpF3",
  "key26": "5B7yuEGebX1QCxpzJALY7rmNWiXrAqqmqKZEeVLUYA7oHWxbqQPC3ReWq4XRatr19ty5xdQiyZc2y2ZEPNajxAet",
  "key27": "4RN8m4TCxMN1hVrwLZ9Kspmsedov1bJynNBwqWF5kYdMw9xpRq4fozjs1jHieZbPk1y9wp9CzV3U5qCexFgubf3D",
  "key28": "BjXnPwuqU1NSotC6QuSWzR9m9nTvEHdkR9Gnus5wbUjGhPZcn4HCXrQDoSDV8hwDyjJBKfBXuhKBFe2zXgH8Bp9",
  "key29": "3xyA7jLL5vjH8aXkNAi2q7SVkyUi5h1N3F4whUzrK9oXrPCKEG64MZosGrA6sQd8nA81AsEsTT6W1pyG8QBAdWoe",
  "key30": "5cunocaQk2dyZXGnauxaGWpT8x6Hi9zyxD4Komnt27sv7jkZkPG3oDxvNhVvGTBMALp3Zfahq5VCd2Fiq9aMPyGH",
  "key31": "4Ur54GB7ijZR4XYU1Sk5S4K4LMC121MvhmdNpkPNt34ViYRt5nQkhDWZTLtfyLFTHstdLY36PsuksYPrD7ERVbjH",
  "key32": "3qzaJvBi31AbT2MhdkQQ7BMA6kFDUMthE7hWiQMkvYZyEy7TBEwsbEBHkY3LSBQizmGmwZCjNntLZjz65Rdkphsq",
  "key33": "2yDgRrn4mXAYzppSoS98TAUEdCzVRG62LbgrRfo9wYHK5qYVvXhEryPgEc6rzTG93frjZQvRDXkhfUqiJTZJW8bE",
  "key34": "5CVgd8xhh8yyxnTAYEGynY1BjteMQqUzDkDMR5trmPhVSNxWjjKMJBTMSCiPSEdjQbTEzzz8ibKFp7zVY1U2jt4U",
  "key35": "3bq9mphPp5fgfrWg1rCgujrMSqFrtxCs3Fbd2gui7apnHk1UuSfU6veZNxSkxkqVDWTEbjTioDfuQDzrC7VqDZL7",
  "key36": "29aQdA9dDCiEYvCoW4otQFEFqSZJy5ao94mYm714YH8tG2nMw5Sa4Exms1Y7XULySgvdC1QpsZgBnbjmBusAB4Cu",
  "key37": "KtgEivBK1yARnQNSZGgLhLnvfrmSAkh7KtWJMKi44BPQ8vRkqu2iayZMJaG14s19i6YWgzkbjQm9H7PNYcgfmUW",
  "key38": "4MFkYFLjt9JkJpzVjyhbSYexxFQEhYdfiSzpe3XH9Ww4chBJ4nAd5jG23iwhCU5KQkYwnCfHs3ZYkAkE8De78e2e",
  "key39": "5a9Q1JpywX7JWseoeS7caYHTVCULhUs6WbbNJ6UASVbZXrVh6UB44fMGFdm7fGsrT8fY9pAnh15hNMVeYc9zo5Wj",
  "key40": "3iAoGrAmn7vshE8Nvfr9afVLpCCmEkz4SFw6DynU1C237eu444f9xPY7jA5BibAus4PWG7suVnbq3DNbaaLMbFbm",
  "key41": "61WecpF8GNoQzc9rW6FWyJp1zmnMwRxoUqconEJS4dWqR7LoMkhscuyk2e53ffHRvZGQcvfJC4dRFj4tph8QiTDP",
  "key42": "27vns8VtXmShyqmt4L2wqPEZJx9FjfZdpEEV3N92SYGRVN8JMh5rFExycFormmRLgSfGUdxHYakGRPbxitKg5ujU",
  "key43": "33xosU8tE4PGNKmyhtj2ozuobeFRRUwZmHViMSCwPmm9nSVbtnn85DcsrGdpw2baBwyuAxMUVqUgui3gdtAu6F8z",
  "key44": "5wY9BAzetg4pwjVUmMYDjVejRjHR6AQkTvGJwDyQdyMy5CiGXc4dbipSALyfy78MxpNWzoTGVk6oJe7zxZ5N8g6K"
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
