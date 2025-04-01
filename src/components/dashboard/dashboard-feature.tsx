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
    "4xHed8UALpxeR1VcmatZWHy1Ren3rmPYe8K6SbCKRo4P2gcz1xeb9zxA8TaJEJUDVNj183yCUtWUAyHfdTK36Z83"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "491DkicnwNULbsrHVsrPV4jj2vjmdPNfgbzMEPiX6q6TEgZ4jMsWDTTk3oHcHXqBEJyM21diWM2rtwYTvxRvv7aT",
  "key1": "3h6KwoQHw8Hh3Yd3swwueHdbgCxP5jfHugNoq1X5eZ7RYNumcYMcHUuAWs2usUFaAc7Q3HnTjv22U88qSHYBvgen",
  "key2": "2vbu3VGKC2xu2cJ2vwtvtTnWeE7d5wW3dNgSaJhN4b3Qz3okUbbUFbefxeMhTtexHZ23ZbvMT5aWbMKjcWWXoGB6",
  "key3": "5ZC4cq9TabEpBXGPxs8Rkq5AYtRPkisUTfjRb5XQ4PALFK1orabGVVFuMyj7eSyiotDa7ViV9skhcKcEmZHWa2kp",
  "key4": "4JiE4zxCA7zvMH2sS5UvgfAdJS9UXPGp1ufdJwbM8XrXRqivoZQnickywPYSPVzSGS2SrdH1actggJ1ddpF1mJp9",
  "key5": "EcT6pkjyDFXwztFsiCfgckcu9Rr735Wgsivk3kSfUZpYVRscBxZUQFagyMTVcWgMt9v6eXHDnwSX1SNWUg4icAN",
  "key6": "iLfj27oPgnBFwJmBx8AqfFssoHLZq5iKHSfgR8RWhzgiFZitm56Mw1zCytMNP8sZNoXVG6aTzQuAuCvU4B72P8b",
  "key7": "2fK73v1vt3Xfr2tmbV6vNimY9nwHFqzXTJi6tXuwnp7zAt5Y2AjfZuMSp3t97KP3qt5Yz6vvPe7uSoXkSY9GHDs9",
  "key8": "4SQXbJvABvLYTRDVc78k66PJnJEmMBkvV1ERDdJrM1xdfhHapiid578c7JhjkxPzhpY1nByQXUL3m8Yx92X6YsH1",
  "key9": "36X3ZBUeTRKkSiQbtnxnym17HwZn74oU9jhe8wBcbTtGeAzC2yQ8N4nZ6u3rJtc2nDSSH2qP8mgFMBJp6kgQZNym",
  "key10": "2qPHNLcRFgJDvuG6xgWLNMoJK71tYM3DMo6vob7vdNKyw5L3U3qeJeHmkVrLcBYgjEYH9qNXAjqrXzd2AAvQ4wKa",
  "key11": "3uZJrXTtfGPsk1AwLCD5GdFXrC3PiYMmiYyVi9DzUkHY2tHzWE35RJC73LZxM9eVs5Ri9mpX8pDQAv3anbXaWXdZ",
  "key12": "5cb21G8D5S3MnJ8C6Y1NkuMjqr7BoyJBUw5QYp2FKQZVEkcyMniaggmQk9ECUbg7L3tBg9Px1pVK4AuqHJLhm2Ad",
  "key13": "5tU5KVFXQw99eEfmHqyVjoPfzAxSjvRLx6GhVahmbyLBzcrzCHmAfWNjv9rMS3WRV3CtLFTHNoWHGJN27wwVMFHs",
  "key14": "4odg8ZAjhzizGMYJpJmuvgXr97miVdpVt9Lukf16UrTHp6Wi1FCgrg84qvBAZSB3memFXhT99eDHRXmmVFR9SpC5",
  "key15": "2zqAn7ENdgBm6QBzYzsGj552EDsWri4pVXZCjpfaFkAaFXUjuD3CqUXgMRWgXapWgHeqvR2kcJLgpF4hf55T4pM1",
  "key16": "2cw47Gdq1D9wm44evWj6MwegZNPyVfgDSVs9gfUDEtW6kSu4CfXaYHk21142ACDQiCvPEqqUrfNZHn7o4NLctrwM",
  "key17": "4y2PVExGU3pbUbJhQ9JKwHS8fq15HY4Ahqdqd38tk98uo1W1qcNGbtbFZqKy3be58XHCs6z7TdRBzH6ShbXs3Nuc",
  "key18": "47w24ThTfWph77LyGL8JoHX6aeps77Cejo3LATv97wEn4CpYcweCtKNqDnWCkeW9SaViL4W1zBARYdJ9Vr2BppzG",
  "key19": "2gXSfjBd5crvwZjKy7XpS5xn7T58XsEJR1d2wbNtknjhisdrodoap6uYqJDvYHHJkh28HhQByBKE928RhAJB5fPY",
  "key20": "2v4cosnQhgjnN1crgdRxwAVCnvsJfnNdrisjy7j7X8sMqVpzw1LNB4Mi1aUFkLySYwL48tt26NmqoHWhXfgD2tmE",
  "key21": "4TMeySrP7W2dA39ZyikLDnSnf13uGsrNQmjgz9Xdj52BhcGeCa3tZiq7iwZd6TVqeRbqFdJHU1iwbUu1aYQCZG5v",
  "key22": "4V6HKbjAwzcXxLV7g9xiNRxLx4wpnGUYtTwf8dY6uii8xpT5xyxPvD2hkxUdFd6k7dWxfKJ9Yxo2e5923hHB5Q3Q",
  "key23": "PKEUfSXuFYFm6jFAFApKAoVqHNCuFqbu3UxeyQvUip9R9ap17Msk5cx6CTjqRp88EaDCGKCzzpgSLZDWHTnAiiL",
  "key24": "47Vqo9z85d7bv7fTux65KLnu9JPkCM7dmaKMCmR1uxnx1yUcvA91oCtV74WHgLb3GhVbdmGZrqnztahyD9gcYhuj"
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
