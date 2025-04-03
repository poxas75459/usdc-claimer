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
    "49RTyuJjLT6Sox94NbB6HBxqQHz6cJW4xvs7YHzE7TJtZ21mFUgo4LcozFTWpXHbP6Xotd6xphCxs2za5TgdjJDT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KW8CPz6ssUBLqLWhJpQamnVjKHXTRf6h7PsVrvAiZm6s8qBVasqrCdxhdbsG1bcDgLW5tWgnLGytPZmmoCAUPYB",
  "key1": "2e26GGrNUSAJM3chhMzCb6QEUjaEniJm1TwcfRdPwftdBMyXNL9Z8NsbAFaTiWy6jhe5t6FchSATbWDqCaBTEixv",
  "key2": "411MM6TEqDK1oEtrDcGJsFZq22MhUKwidHUwert5w9S2c5Wcuk6MMZnzRXKTfnTbvTPGsVNPHpJWq4CYiMZQTbKn",
  "key3": "3zyVvztbmZuay187nAG4Qde1CxMJHB57PJCFz4hMnGXAzD8tQrsvDa3MsZW9CLACKDRMJrnuEBegB3RTL9Xmm1es",
  "key4": "5xeL7rzRERtbgo2RpN1xfqZSc2W9oENTroUFNPxRi83P61ttuUjCD3Lo6E8HcesDh4HtBNV8haChbyhq439u4mqq",
  "key5": "5FRUoRkZdcLhBb6GkmriPUK1sDq94FGxoUYdrDNsTazGxjtvZvNbyxb8ERgfhLUrqCpAavMADQWD2EaAxjiL7AgV",
  "key6": "4Pk2fMBYpRULdUXhEAaB64eamSH7C2jMT288kbrQr5r7bFX3Rvvom1XFyi2YX4t292cfUv9QH2cZvBa5VEV7gkJ1",
  "key7": "3SxHAdHdZ6R6DZuNnJgfkj4juXpUgva4XL38TXN24gnnVXrp5nwTJNofnnpkUrQzy3o2NQBJHYXixYK6HuXoBxSd",
  "key8": "5xHkXZcLnX8aAef5rQf6jCQvgq7HRVHEVS8qa6HqyTmHUs9pRXhJqe2nzNVEibNxsVT3h5kZ6FYhjcfewVyRrtUT",
  "key9": "5sqig1nKTo1xSqFWcsmrssseGcGnGc9JnRCHJ7KgfkNzKinBv7UsiyFqWP8GTH9aQNYPoCPitP8z1rcRfViyPbGZ",
  "key10": "5rUevTaL16Q6FP9cUKfHLqMLsE7jYtG9UH3fuzUdAypSbpxb93ZsEFtuR1np8DM7hTiNbemxJrQq768BqWN5WkEL",
  "key11": "4tfBmqiWAU8WVGoZV9wzduub3HVT6D2AHoDeysRaty9GEXZvRMT9vJYwaae4Zw4UKfbUP8BVeW68xqtFujuRocw",
  "key12": "4JLQRTc8bzw9efhc974Kp7VmUiVG6eH9X6oKCe8syZjkxyiokuzDu3JyfukJjR7SnzL2vEujgFc7xEGknfMtwNji",
  "key13": "3a8E2ahrzxpsuFcxEv2yLMamEZzYy784mPrVXtpWXa9PS6tP7ncHFcioVhhJzRVfJv4a86rxRmni8D1WuMs9nMdQ",
  "key14": "4gPxx6pJmorbpdnJtgozsmHcAyyWJfiwRJMJuAnNpKjGvVugJWS4fKz5deySHQs6iW85SvYcA8oEoTYBnCF1YW4x",
  "key15": "5k122wHUSDczeGbdDA3GJYMcjDcyPWmfduwFRoiifDuT14QeV9mEriSdEKu3kLftC5FBsD72v2EWMMfV9QH6yJGS",
  "key16": "4fE9ytScy5xFvvE7qkWhnUN1LpHGJfRZhgnphzHoQh2zN4ZCi8qCwtgUKi5udZxLGaBPWqLZ6zf8krgGeV6XVRnQ",
  "key17": "5uxr2DGnyhgsjQB4tmwdysAQK6LaW7W1t3RRdNXejV6aUVGhNq1e877XoVV1EHdDsP5kvpc6aKzG3NznJJ183uTh",
  "key18": "GYae1onW6zf8fCkbws3V1oWwYBG25S9YVZsGAsrJQexLaHsf7ifTRQ8ERM2bzwX83BrgY4xZuEoivgJ1Wo9uLnx",
  "key19": "4jPPzrdaW6fa7JEbkiYYXagCkd5jEjurnKzKUthjaW5nrcpFJbmDcbMSWhwDqZNJ2m7rhmmdcRUmp64wC56ENkWW",
  "key20": "ptweF2D2HKwEHUCznomwChpDLUwHmQ6QYafcJUHuXbwUcPPRsHdgyZ1TREmrtFkRZ9vyGBCUzmLsFQ3YxAPv4K8",
  "key21": "4QZ8kykbMTbUbNQpedPUo6SAVS26Uvt2Csu1X57mmSpcxh8D268T7BJRtXwBo8LQqWsBYeppMdYiRyDAgS7hiTz1",
  "key22": "4Qm5CDU2n8fG5J9wbV4Q2g7RNQoWSE27dBhwRmNhM2Yf4CYnf1kFW8yLJAoTt642CJaGiedU1Vo9r97xsc1hpmcJ",
  "key23": "45r6cEJbt6pNpXfPWTGWuzmpp27bovjurv8cdNXaBXGBSkryE2SnMtM7BN3jaykZk1qS7doFUqYCqtFi8h9gZQed",
  "key24": "36tfeahRs9ez88SsZfc8qpHEgyabDCyhuHLCyFaztNDeb1vzBf4rtNpwMFxPhvUkfCb3W3Z7X2uF8e5nEaVw8cfF",
  "key25": "2f24PR6YAkd4Qpc4WoGNd45mFTo8BCuyPNmQP3c7SzB6o3BQRpU9przcXkxGziHmpqQUVoBNWUefmLoQNRn4HzKD",
  "key26": "hsXXLZDhppQyiQpP7557iERe2Xi6vN63FuccTuikrGwNCaFUYXiBbV7vBVEjZDbreYq85knT3A2UwjBCvoKFR4V",
  "key27": "349dYL1iLyB84gCv6hxXPHnS8jKeN72fzSpFboUsMdYNMy54NB2NxtRRtKbGovQo1T1UDw1AyV7HDS1uocYPtTH7",
  "key28": "3FYi8nmqS19zD1ZB9P6QoNY689T5Rt2chthwxA2RzWSGdBzcBybZNSWwZf9FzNxKkan1V9aEP1MCg4jFv6NZdgtE",
  "key29": "zqbq7cSDt2YWYncGVrRQyYNDTsCn7Hr7rHQaXUgPEHdGiVWqtxF1U4xPviregeTk5hpZxHZJf6ZtH9wLWbTd82M"
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
