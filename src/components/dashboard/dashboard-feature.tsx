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
    "tCDzLJDpucwoW1XWaWbpeAV3UUVyFZoWKJVqZ788oqZyAA3KJoQma3eefgwSamksncz6Djexzj33jRnrvvvRXUF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xCW71fPstWbmH7uxcPtg4e8AcmSnyZcSQVh7Qg39xVshDEnpd5F3KMbLo5EVz9Kf29kJ9ZZagbngUBiN7Dz14Rb",
  "key1": "3QekwyiGbVj5jbhxxxcFuQn9YehVjVC2vcW82f2BaP1JqUCUt4X5Ak15XM1samRGMvqy3LQRBz5FvSSU2V64nNxn",
  "key2": "4R3DHgEbE8dbFtLNXiKiQJDuhcnmqmv3DdKvndgaWb6fq1MMojSxzShMJzCmz7ryd3tAwsxAzBbZHHkWUyrA5FN",
  "key3": "4DzRkteQLoyrWEr5uMoXeriEsf97bRXmBR7DdgoG51yixxoqMxoU9tvaRBSPpQx4GTqudpjJx6sek4E6K4t8iY6Z",
  "key4": "2V6VECgsz1gvj1GtvuWgAH3ny5YmDMepx1MuDNKMYSW5vdy2PLAhWMv6iWW2gG5PghF2GYLDwWsod3Lw6LpuCH1C",
  "key5": "4m5LvTzK4ED2oPNB5gSKzKa1ingzU7NUuxwPd3oHyXdzdWueFzbriUxX3LVEedARWYEYE9AocYs9WT7fwa9MCT5u",
  "key6": "2xotcTnmYvBUqFbvP4xKaRcYYZ77GgiJpX13MbsCL3ce493F9UWvA8M7xXjiXRAjCoXW8u6CSZSxT5xsPyBmPxvd",
  "key7": "3xvZHfnvXYGPkm4QZgNYzGhpZvEZEm6Sgr7hLqwTDZgKFGJDJpu3mi2RdQrSpUPdgyQZ5Ev1zFRvh5p4hYWKtUwZ",
  "key8": "4frmAGhU3RgqKtDBC6jEpbN8Vbr5Lbh6oe5AXzp8A1QDcspvkt3UNP3Bg6EYqkvTapN6BZjXcxq5Ek5YCUsQPJ91",
  "key9": "66btYj43TarqTwmaAe7QnoFwUA9mbXmauzWUqe5SV8tDZ4a8vgouVGfBxDmy74wsvs1oLVUJeJGcDay2f7DtEtpz",
  "key10": "tk7ZhQpo75yJprWoYfYVimBtGeLpdvtoDtFNZkKxZZgWwPc4Uyt5fbdwCsajXHVpGyjnRuJt9zYnh3M7hVbVHZU",
  "key11": "2EwcdRAED15XfRd5pVWvrwcTMhzsuFQvHtMx8NzKELJNKRWTax4qduwH8TuGNnDnHQi23QZaCkBA5EDwiNP3RM88",
  "key12": "5y44V5iqLNYLWHXr97pPyFwbhnQ5chtYeikuE8BdQahqPYRdhRLbY7BMVKCaY2YUV5vfYyUXdkrFCCs5QBsgWSgP",
  "key13": "3C4zqy52WYMxJvXvn6hvd88x3D1DkQgecX7eNQxwUhEcBs21F9MHjFqPQBAkQaRT8PsScdMwnuUkqcvCa8jdZf5h",
  "key14": "2rS6g2aQYwotFWubfTFyvFBSYZUpogtmwmjC6pZPs1BxRGXT8THhJCuctkZVtURvcs8XcK4eZCcsarkceitKvvKV",
  "key15": "FFtLsTbHsu84yT19Lx84R4pvDHPmN5y1Q1QuizfBsnD8BmrC3kVYaWP5bu75RUQZ1MjDEy7PWw5HKKKvxuwoihg",
  "key16": "3jffrXis3jS5hcCxw1xpp7vNuEsXkf9m8aC4Si4W3z9CnufEfSJaYV1e9XGZcBBPSjKaA12jBo5msyjnPQEfvZwb",
  "key17": "5zCUJLDJNfaK9F4vBZasiUEeVvBEquUt65SFvgPQPDMMiBNXQfYJm6VUSbzW7G1DTh2rfQSrB2gedfw7vwVkPTUQ",
  "key18": "4sKDDS2hBURhHXXywfw69QGc8t85Ea36d7ZnFakMUbsGf3YsgLeCg6ZZ9SWzW6y3WynhHeHgR1PVU5B5xMS9W8cQ",
  "key19": "F7TMYdETZ84qt1CBHBK5J1YDQRgnMQbDEz46V99XQF3cFm1ASTjaae7QrBTk5SDytA27LLbUa23bk5jx42Uiac8",
  "key20": "6FKjBdxSXLxF992z2j94wL8QkMqjKgMP3SiMcxchaFhtMonFosLu3Lws6AANfy6AxGDGLUHkiWP9Ws6pMZWioEa",
  "key21": "3fHUAep5kNhxxwfbU7U5j2317xc5Dv74gmvQA1QgPqHZgHn1PRJ5B2pJ81M7MCDGconPT4Epc8vtgwvhBSG3ePHP",
  "key22": "2iXX6nocSWFfChCpKPxZb9kFw3VR9ujsdrHAQcEWmXKH9R4Eof8RhP96fkAMuanoVmvgsCsetZ8sQdru5YD26oMU",
  "key23": "2y6Vk5KgjUuyhGDJTYUMpLDkT2rDCxh9rp8G6F6QVfrzc68Mw4pN7Ts5PeoHVzqez7FqdUME6Gs5Ta4eezfEqVaY",
  "key24": "5Z22DigzZxrCqXeGZpXkciPYXjWNQEMH29sxWQnbAihaTQ5QqWEWvdY8Vv4Y4TkzzmG9HxckmZhf9gBQHdRMTHdj",
  "key25": "txucaBuz1qVBwFnqEHDCJyGUQXh3sEUPqWMEE7dXtXceTGp9gxbvzdr7fVrrajyRRhnPckBiUoBWNuDXynLj7FB",
  "key26": "2wiYbS7XupjGUmYpe7M6p6Saq7jvShWmSEM3UymNPKn6HVDykBVU3fAWSXyuJv4Ym7x23NHhWVitkpdmtMMjoZGr",
  "key27": "4T6urr2nMMfJYbZQ3haeMAQDrAatdYF5ntfR7fcYcw7GFrNSLqbAfMKNz3UgUht7tp8dfAkYBCh32yXVsBKjs6cz",
  "key28": "57DZVtXhfEivwjd5kWxWBDJwY2unEaQvfV2pgFmbMdqkwkjjpSyxjdjWcveiyMrRzUywwvq6DW94ncJxQ7dtq55L",
  "key29": "4thT8XhvWvaccvB8D9ECLV4CffVmqPf3SxW9STcReabbQiq5bcWGA24Ruai9gg8DHMCqrahVcqqkVbNjAwM1AYYa",
  "key30": "2HZdt2m8rdyk7uJTQFzJrLJNmDBmsci37f5gzFfYDGFvHu6DAE178kwdY9TEbLbAqgpFhzYLhV9ZdJoK3cZWWKQM",
  "key31": "4AhfqnwWpJr88rphfKffdpBeB6jnQAfcMyPhPMUrGmsq5k9zPDkhwxzjcUmaCKnUuDGZcbptY2rcztDyEbGsL5Dz",
  "key32": "CVeEJP4BM5euS8Z2Mqs6WckkMD2fKAzyzQebGTbDjJd2cdAMgfwxFwHoZxdnLQ6Xki1GF2GD861YWuDpBP5PJkM",
  "key33": "5dfiPdFGJ9qxZVK3V7CwrqeWP7NCP585MaSQhF263DzaXVSehhyXF6zztfUYGLM9g7YE7L2S3MFQmdp1D6oKCyvf",
  "key34": "XjFgvjAUHrysgk8DBUYxQGr7XVe7pDxm6PDfMh4Zujj47mN5qX639FLRhQWStVsAXqtUmzDRACvqcz4WP1kwJJK",
  "key35": "6Rurn4BXHjQEBaVcFCUE8nxhTFQcTEAxQvWezkfKJRV4Up1MtMsNuRnUctaxQLSSqNqf1pF55CekmCwTmufvg4t",
  "key36": "3EsshBe4miRRDyt2GB3aTkXS4F5upMgSe8Q6CxfMngsRSejaifHPLsW6TL9wq6DSvmzLwCHPAEXCN6N16PsCiLgV"
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
