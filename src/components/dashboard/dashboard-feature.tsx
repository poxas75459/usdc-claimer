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
    "4b541xSNHKWuQYVihxdzZ3LV8ewRnu3cTfXkpoUd6tpDqJRAQ7bQpZu4VU3H3WuQMoNxtntrczzHChinjt8ir8Xm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xdRD3bXQNvjFcASTyDKFvKufJd9M7LPnCgZnYvhu4jBeQCEwzSjr6AmajQnqpfuevwoXCwcvzkpQvqeb5aTWQ3t",
  "key1": "4ragLXkFoGoNd9wm8QrMFfZypxSCH3mAAvq1jmu8hVHjxnGCoSExTJx7jBaXxdViqp3FBVP96pefS97xb3MTxyUT",
  "key2": "3uQwwoWT8PqX4pMKyJu3fRuWxoXBa86yQ7wWRY3xFztpNQASgrnZ2nzBj5M4BbqTrN6jBcHvx6MEG3fNQ41Dp2Z3",
  "key3": "4TUf7RB4k7N7Mu8F8ydTweP6qxL9vPv2fNkzsBTyGD5h4Fo6kXgLM7cS4rj2R2EzzP7yx5GYsDDifQwbXrcRMKF8",
  "key4": "5bZseoeXeJdV8WmJ7itskEivVkWQBtpLv3J23ePhz4fLe2H4WQDauoi5rH2pJHbrgzPWfQZ11R1CX3WXk4FtuaBv",
  "key5": "24yQKixWqH6XiFBK5VRE9qAMrwvPj1zKHwyF545jmjSZj3GYKKQpmU23apcRTPrXzM2QK4AH4xk5qk33niTqvq7R",
  "key6": "5Ggq8dxvpCSgJtv8EP3HxaUwMWMnGxq9KdE7yYfcWhsD1JVpcTVUDg8siM33DRRT9EnGeiPGSzgxxxmLKLHDj5iX",
  "key7": "d7bUrJKEXqufCHG54fujtFi5tdXvoHSdgBxK2ZSP5B3HsRjRFgondJxzMDQo9XujGWyDzmfopw8s3fFZToCCq26",
  "key8": "5RSETgcVQ8rh1Zgxcx7JMWWYueC5EbveZ3HZtPHVKzJqYAyFfHNNV4MWo2hiCZpbcEDoDXRH7dovnrTfwSpx12Kj",
  "key9": "2AK8HMMXPSEdV3gGYRxTBN9fh7jyfVa9Nz8npLbKH28ayM7ZfGUEmN12RT2EMysbBBPLnYVxoR2fG69xVr14jtUH",
  "key10": "4EyXgcCxLx8hJbsSk8FYvXtDpi82G7sUpvxraf1jxW8tLJUrMLKR5qC85S6wYvKnYBixoDWeqHtARFDsAJjZm39A",
  "key11": "sTvTcbjHMsqVvT6mgCTxwAJ8HCuz3UYCHVMC9uCJds58a1uUthnAYKWrzA3GJcCriFcEYfg6CnE2eV88SrNBVgw",
  "key12": "3jfMvrjYzS3nwtNEN537xzKubw8ZEV5rUece7guYSra3JMvsXrKrGWWNZP6KFJU21gka75FKUaDtHRp7wxngDocf",
  "key13": "3waYATq2QBTM7s8mHRB9sSnocSKzGoJGZi5qkr6pPKg95iUbm7Ma3wxtEn3FfoKVNQpJanCfHi878K5A52WHo3DP",
  "key14": "ZJEkxqUz6WugBL4h3BeFxbxLsBuCfuuzt7s9df7ERRBLYpXPnfdj3CAqWDiDGHtbjXFmFEG3dFQHmUmzg8Yju1w",
  "key15": "4Y6Z3HnvNw5ehNPpSU2xE2UWfVK8RgCMMFuSPLPgidqyz2AUhCeaXeh653Sco1yQZFFunSyuGxM9E7LnwtJ6pS8P",
  "key16": "38bU9oB3fTU3WCrNMTFD4kPrHPcUMgkAngDi6BTouMiju48YdhYiTLYxQLtzQzU43YrLvth8BGjiGqnRJWAbTFkF",
  "key17": "2VwZn3oVgDc4RSVSrxJ4UH8ngFgs5ZSc1V7HxDd7R9MyE1wihe3kRbeNQzBaBaYhwmqZoX6wchtReKyU9q6brvhY",
  "key18": "2Wa1EtUctB8XuxJupPqRa2oU69HZjxrLc2EjMmL39NHabKa79Fty7vs9p6CndJfxp5AUokmihdXfY7sGhod62TWh",
  "key19": "3ECEGdbxv4PeV3yjkro1wXtGfQRB7Mfssdwjo6xDEvPqziwDJox5wbUmbwfvEEnyRPRFcT9cADBYMkanNN3dNo1b",
  "key20": "42kCH4d81RonmrQ3tQjoiXuzR7vWSPSEqJkjXzJAZ7LFxLRBnCXav9migW2aZ945T1bb5HEMP6Zd5kcooZDP5rHA",
  "key21": "rj5yDRZ4kCi7XBb1ahDAahrc1NDSH2MjDWWpdMJkQcsGcrcDuZuCG3pjnL6SpZ8prk3hELjBjYQgQ3UwYAxKZsf",
  "key22": "3tFmM2mS7Ej7Zjzoxf3ogb7pfPmBdCq1mkjWPneE8FoHzuLY855WgNB6BccKuMwCda9HvMpGUHHBojWimR4e615f",
  "key23": "5dTqrD2rG4yDkwSejP8fdz1uDJPcccDEivdWAVEGG79wy3pDkJdQFRokgzpDju8hWwZw7TrZJpgNM2upEVEXmk6Y",
  "key24": "2mjAZRfkEHcseRU7Ftpk1xULyMqkbdqzidWaR6QiZUok2PWs1G8VUhQD86SZYWKfGyvyFBpDxJZUiK1qCk5zXuWo",
  "key25": "2thSMMR7uydYrPtV48rD8MKeHAPRWSHwBxv1Jz6qGUubruQwytpAJLmP4ddfsuSbH2ndoXg4wQrZw1RDN78RpJEJ",
  "key26": "2MCahxutoXJ53ouH9xRPMwejC4wPcop74Scxa373zgkZ5RTcNLVYWueRthSQ5qNKKZMzN9338u6GK3w4aLLvgTQ3",
  "key27": "5LzhWe3tA5B16cosgQngJbeavpLqc5GBKtvZnY461k285TjePdKjc3VemeMXQ6RmC7NrvLZGaRMsMFvzmGL2PKh5",
  "key28": "5fYf61AXHwfoMoLgBsNf2HRAadutu8GLEthAYvmZze2UvyRUTeCe5adUDLo99gxUS3PtqrdgKES8TQzEYve8cG7t",
  "key29": "4BvKEkGGEMNfKcbZaghgzzRP5ko7HL1kF9L2MF9k2JeG1X9qNJYJkimzVQAzrAWxJutUoeSYsAj72W1qhn9FKuRg",
  "key30": "3PsYNRojhLoortnVuS8Hb8uHnRsjZp3Z5YBmcA8fkBiDRC9kbtVd7RNHy71qAKEgigedzQ7FMPVV8Ma2Lo6dGNJ9",
  "key31": "3WWvw2oAxpgjZ2EoNZ5RE597UR4Xus6cN8zVxtaymiv9DZfn6VcHg1TvKZXwX2pALnffvQLDa2Vq1hwS3qoHsbqu",
  "key32": "ZxhjEQcbdX7F1fFvvwUFracEuqhpkiUXnnw4uCzJiPREGcxFwcCXgTmUShDqYQ5FygzYtJuqzap1mCbFNMrWrM3",
  "key33": "2159ubWA94nX5hSXw7P7dS7mV7dui1JpLMY7R3XSXmjNkcMbVERhiSkpUxaR7ezAF2gVnMgua1mg2nRbNrr1R9tX",
  "key34": "2XTCjgZQTSGmdzwDojLTMQ21vUJT9UcFHCyEKHrX3nt6gUxZ1345cUQejmNiP3DzijgGT1qaXCvFGqWKntZWfzgi",
  "key35": "39reFqBzfs3FGq1WHT7sbE8THqtBRkHkZJsVjNwLTRhbUMDoZZj3TxcXcVyuiny87ks9noxzUdShb9AdovHXqpMJ",
  "key36": "2G8Zks2ZXi2rhVEmJ761aYjeE9BLRCbo9N5FQTrx1wFa2MeFmcWhTGQEVD7ASzmsVBhC2Fh4wAtP3JJF34sidcTF",
  "key37": "5iXJs6pq52rmVUy8ugVeF2SgF1c4b1JpwxUZf3rvN3bvSwfvnAa35Ne4dv6qxx9NL5GuxC2F46sqE1n5PRay4PTi",
  "key38": "3d9hcddHpt9VEhD98gbijit3aVAqgMgvYscJRrVLPN2DKpmQhukE6PTpczijkoKseXM9WkMwdkgovzJwQG5goF3n",
  "key39": "aUhpoSkzwX7egdducFUeTg7j88qR2ZNH5LRDtUkjRN95Qf48t2TdL2vU8oj1jJWpMi1U4Js7psSbraTuNNgeA2P",
  "key40": "5sFNT5kaEx3jKor8StRyc8YBPBC49tYL1eoanDkdBtbW3gwv5yezSB2Qdqkh5FmpHSxWkgZJqpb1H9XGoVi7JsNe",
  "key41": "2pPVDrJ4UPo7UMwadmoW3H9A4zVF64U1J1vLCFTuZXQWmA1TkdqUsFi9G9CHhqqcioyP3muNdWBE3rV15Z9jvrXL",
  "key42": "4VFiDwdUzUfbTgjT5NpsfhtTKDAWWPZUttt4357x1bWbueD6UJYGZRq721jJWozswL5FF77TCkLmjc37xqMnApgn",
  "key43": "3zE5TqxdfeiunpKQLWsvyXCsqbs2bXPU4unTR4Ct8fcWt66M3CxHsf2cCHicxEjyAWdGhdhh8L5S2gQWCMqS1TBh",
  "key44": "x6rSsKgQQuzwx6CdQZdjsN8vtDQpRbdyWSSNFef3HxRGmo1haMgy9F9ZXzixMR3w9gLxshpU2MA34n8DSjJKvAZ"
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
