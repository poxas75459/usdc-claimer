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
    "52YwqL1yb3YTo4RWtqxc4t9DvgugbhdanrYPuASgLksURYFU7eDdCecybx8EF9B43KCwGvzavAG2guzHuiYTwWKt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zbsovEyz8jWV5h46PVL94Wsq69TVGeBbJB2SQmUUwk4BzASmS61Vvdur5Kc5FhMzp3ogWziD2m8mPFRnxywG9wV",
  "key1": "4qTUBP5X3pCqtc2h7R9qhJKw33Dq53CVvcdgnaHD7HbyUb7ykPkp3nmy6TzgT3SxbB4qxsnxAZM9A1EY61KcSs2M",
  "key2": "wuBWBzf2pCqT2x2p8DR7RjCVfi7Ys5ubmiYsvwnC9hGqaHzYpjwFzNn7UDegQDgS847DiFKNQeerUbQ3ukdwXqz",
  "key3": "4o1RgRxwsFdZVTPXYuFG5Th4nkGC4G8dHr6JpMzGXMD7rxx1D3EGFdyco4WyW9oqfF3gSVChu53557Kao2DZwRDv",
  "key4": "5DyGSChdPko57aWVP5sQv88tDtgn9ywHvk1MLQdTDgMoKRZfxEmSBg65JDdTxPQAFxodwkg2pvSBC9s5T2Wjqk55",
  "key5": "7at9ihn3kixVK5ndh7Eb7xqCxqBhL52ptH6S7bVGokYuAKCmPuHji6T1fXcXHUpDbkDqoPEP7WQr9Yxk8Tvhk6F",
  "key6": "2QuxBFqne1Ye3WDSWJnm4YjsfJ4EYMP6ntY6DQJDkigrGcZngEuuCWsqkrZTCrkz3eRhHVDyW2FQoWEEQP8wadS7",
  "key7": "joowQMDuJWpzGiPEFUrnJiAxXsUkbKpoQ1xDkAShSsdFw7wJxfUeK4PLNMjismC7f6bc42DPaVSK4dLRayhCL9r",
  "key8": "3pXnjQWp2qZjnuk4Qsue8bkoQ5g75ctJpBEnCqGskPya5Qs2b92pKDQw7JnYPRSgvo8ne2VsjFWKNGMixcpb86NK",
  "key9": "4AbaKRodDpwscTtz9H7H3J7N1LopukLnWrikmc48wxNbxNjCPKeaRmNNjKv99JjqTjgbZNgK36u1TTujQyFYnbaU",
  "key10": "or55soSR4ntSaBp2SUiueEcPydhUFLMe3f6nuEy2XCSbF1CfJ42b4q8oMx2iXSpqnTXeXNoy6Vzu3DuKzY6mQqp",
  "key11": "a6PTMnBDJx4xgMYyjVyVzpf56a3dqa9kS8kwZDUrxU1XmZBAAYrAJs7JPRyLavWoe8wRpZh3vDrb5Zz83PsTcAE",
  "key12": "5fF6E8g58yqrHCiyb7LXZvrNiX78UsMjuyFwdws5uUjNcWZUhk74DjCCFBZCZyuQDj3T9um9h5ZHPnZYU48zkTfE",
  "key13": "2gEFt6HpaamKeQBwBoAtEWbWPgcF4JnziSeNy8Y6AdAs9yt2LKBVdMTZtiTBZck7z3wW7JNkyFf4yiJ9NvjT28hK",
  "key14": "2nqQniPMFQQRLUcWr4hNTUVBJyFraJRwVS1Ls836oy7dXKf8uTJyhdvQsHyRpSLjP57YWZ3v55vT5zTQBiAWKpvy",
  "key15": "51tA6p6kXTHv71uU4z4T8whY6an24q7ix1NZTqMLha3F1AsQ6Bv1RNLCtjCCdFH9vDd9HPrmJcvZpzw1cAU6qaWv",
  "key16": "A6dipcgbr5Ri5tEjsdDpM73GrgHj3zB35fRFFnYV1mmLmdGiPJrg3mVhUDgtPbB8KHJao5bKwW1z8wCrns5CvFz",
  "key17": "3vP7iGgzuThX1fhtj1ZDosxr7of54aGhL8njkhjqhwTQ3Uta7k6Qu7zjhZBQUoxfaU7QH876FRrwABhES4iQRsPN",
  "key18": "RsjwE5PkcTGYfAkS9ag5sAYjnJAybNnKQ2DBBXz615HPrvJHCACq1ae3AFXx1APezFeMmeNWpBZUAirCqTPMvWy",
  "key19": "3kRfE5TW1L6NvsdBLMCjyDRNvPiPatPGE4TxRcVAu2HSU7pdZQzMShekZa5ErXrqKk3q3G9qgqyxH3jEnA4Ftx5H",
  "key20": "58Ay7srGftZNRsEtv3EhZYDVv9dDZAZyDNvsvADyHx4FKK2hhXDd9cX6KW5Lb2yqpxFRV3MhDswcp2frpbb54bdw",
  "key21": "xqVxWu6YfTUGded2yS6c5pF5U9ma8m5kKe7yLU5BpXW9M49vV2vgFfhnY1u599zvGYAychh6sPwZaVPJ3jUsNYs",
  "key22": "3Kcu7nKuT4u7dQfAUuDS8tVDdyjFWsxh3yDtQ45mmRSEGMHXK7HMbDGAXvsAzEtvPq7WNN9pynQ6DpCY6eKQwHjb",
  "key23": "4Le2Givj6Hf5cT1kR9baB2YzLM2yWHuxdGwvY8K5DhiS3nxQkzLGuByCfKdqJ14hb4Ti2WBk8Fk7gMAiLvdLQMQw",
  "key24": "pu1F82fa7xuYka1cwP9uW4Trjm5HspR6dLs1voSbHYh7vWzCAGrzYXvBUEX5SSk2wopPqfwymAUozCe463K4zUh"
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
