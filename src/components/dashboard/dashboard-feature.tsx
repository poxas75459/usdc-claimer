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
    "36pUBpXHs2D2svYF47pwaRuvxchFA9XaW4zBhkS1H4VAcVj5rTFvfG2RxMfPMKEk68Qm7oNHb78YrHQTSQ5SqQLz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GbYJph61ieErPRGJnBSNz87FkEdHc4au6pg45thQDVYeX897ijDv5s29yb7qnuhxKgnfySQx2JZExHcPFtSVPg1",
  "key1": "18EiBcCYhcWKuLxN3fXNsw9ABtZo1q9KLWi2QSYz2xuCZSpqmtUcJZhipE7Y2KH8qtUxN6ivWiCJrZy9kT34ez9",
  "key2": "4D1WnAgknF43sH5z9S14QFjjCQhQL1FmseZ4DJcgeaRFpFVQ1zdByotJpbFQQjz2QC1bz31pVL6HZNDRKahxF6HF",
  "key3": "46JYUgiwwQr7MrPmjRR6bC8eHLQDWmGULQRAya6kWJ4vh3oVovVqwhh2EsLiah4VxMu57W3t6T8FzfvAT4i7qQ8t",
  "key4": "4D953snFxHKuy6WjhgniznGLvDQ3Fo89WBiFX6HFzh7MYq2sxUT1YhedUyYu2FgZWXt3FXyB5iuWCPQtcswseT4i",
  "key5": "L4UADKugKp2bkAciiF9McmnkXsB45WpzR7zRYr9ggDBaUsCQdotxFHqhxG4ZvwyP9jghhkWQyi98L8byh5QdkuW",
  "key6": "5CAXXwfd2g8x7H9jRo74GyZVPayWBCGdJRTJ7G7DFCNNtgGcMzMvQjq841zs1yNmiMShe4Jy7eimRSsmZFFvPF4Q",
  "key7": "5ZCB7e7uLU6Vn9UmSxoTfAyzt8hBp1tare574K6SGsfRLAeZjJaJDKQTbeGQAFLWLVt2RdMxxDkdfuFi7TxhUPA5",
  "key8": "4aDKyQRQWuZPWEBM9AMGvcQyAYrrDsXrkf39PjS7UuZ6F9Hrxx8Urj1gunWoY3cMCraAHxh1XLagHc4cMm2WjJP6",
  "key9": "3gcLg4R4Kva8HS8S8yPqXhhQ68i9Apm49DjfQpWcdeBiJCPR1wmYmQFrwuCBeZqjmCjydy6Q1wH1BKzoSkZrGWjk",
  "key10": "7rzRXUuNXw6289aQ9hZwcoZURvirS9qxRbtdbj8CFes7t6VF7p3NabsP1rwZvtgqic3AQcAtqRYrzYDaCiiSTDm",
  "key11": "3ZYVgYGTmoVrE4sNqSw3wucysco84nQXiu4q6hDt4YYZYXteb4NuqYUC16mSwFqJH3UuXJ9iSgvvw3DNEZQLZ6N9",
  "key12": "5HYccaRTNjLHnWujQaTzK5GsA9j32QGEpZSdtw3dPfxLG4C9EKpBPTJC7dN1UBcfhKZgc5ekYbdKr6sMeaE8sZRR",
  "key13": "4y5NpFvjj9BL83r68AWdESZFaMhGb2yKDy1DApo7K92Wsc6dSkqjxZqbtYPSqyt99GJBPSaK8gSUBr4GxVJ4JX3k",
  "key14": "5Bim8TzTgfiVb7hLnS1EQwiLguNwZxySM3MNALP2iLqvZp5FwDPES1hpRCjcc7CLCApDJGPohKXd673w1VaF6tRn",
  "key15": "a4VCySMUE941A5wtkbHiwhqUr5Sfmw6nRc9rDBYxKeouWSAqv2B45qT5qUJiWobEPvVP2ixU9dF7CF4DRHv7Qj6",
  "key16": "4hLLiEVZnzC48ZhrWZpizXZggF9xq5VFn8tJxfy1n9RGfy7pmmwtafQmzy9qRgexLgx6gx4nCAYTMYjyA8MUntVZ",
  "key17": "52fZ4XhHELbTNaRJgHMu2nurXC2U4JHpf5acwoisUuBPKfnuC5AhW9YRJwpHxpcnSMvn49pPVPsMzD63htfcbNwZ",
  "key18": "4BaT2ofVqgKBCWo8XxgmjTXXvYraijG1Dun8USojx4G1UwtVayX4ab5kSFRBQMP3XDmLFKeL7HrpK7yiQy4Rzah8",
  "key19": "2LkgBsDxdkcM52hMucXC1f4d4yGw4wyKEZxMwcFpxqrqfJf595Ydqg8uGK5YB5q1UPPiSjybsKHpiFZtPpmsZ2o4",
  "key20": "3qX6fo9pkC9SeEb3HW98S9tBcmERFrQnFmZJBdPqqeo1qwusWrjfka84R2oRA6VtuqG4QsnUMo6CQ2Jk9QHtuEvz",
  "key21": "39QG69BAg9iHZucghzDF3bw2URJHQ37usuoLnKXTMXSXHKS8JMbfv2u2xKu714RzoBEuX7wSbjL2Md7J8sWpu6iy",
  "key22": "5rSsMJNoSrHKP3JXpj2speaj1rgFZfjzpH5p6cuq2TShJvgmBLwQ5hzoQHZDb8EeBywexrXrDRzdqUuP4Qt6i4Hx",
  "key23": "4AEpJTJrwknNWeQ5tPwcf2wGVJowqaFkt9ceyVgRzzJNNVkujz7LgE6YUgPVfQggbc4L3HXJvCkBrWStcjY7UTxZ",
  "key24": "3ivScNGEPNmAFcW1MuoBpadVxWmf9fAKNbRqPe2QqwNGzoJ6UiVo2QWMVFeNXZ7FyKdyY8b2KUgiVp7TyTv5XkFK",
  "key25": "iVxkDoZvY6bokskqNLGXgaDu95KUYtDc1PfTuCdmr5ZNiCWNbV5Qce8i86ws7tchhzLcn3uypZn6xaRkwY4Mm4T",
  "key26": "57PuSfhTjmMyGQ265xH5VxqKyHuBqizLQhSzVUzN98wXZug5EP1Q69fdN43DbnBvCm9CxxujCKmh7k2WtEAXKtR9",
  "key27": "3Qsd9ZLgPu42HzaBKUvdswd3Y5tMEuRpUXTy9TQAukar4TogycYutPUHsqp5aGtyZy2iiDNyKfJAhELMpkENQ9QL",
  "key28": "4eKhE3DTmACzth8EJYGSwVKnrJHnWVCjtzRiCHfRTWV1MswWgjrnVifrCovdFY9NqFoXvMWwC3NZEaP5dPgB2tmq",
  "key29": "2rPiQEU3BMgs4fSa7p3z85872U4JZCahmaHsD3WdSYKmLDhwQXFwEbDW3R6GCSfxtnYE4ebzHfJbfmEMecsLTd7j",
  "key30": "3t24PzfanXL1dxtoawxUyiBdBy2cTBx3PWa596X9SWqCwmfM87PZ72GWTfJkNEtbmdJnzkoKRkWWfNqSEwwiwoB",
  "key31": "5yHfbKXGkRsyjZHw2tBzKmwiT5oBsnsEbXLAFpEmdAx2WJC1YDkJF4iYpQ5ZM1jwTKGyphqVxsj1v3yne9h6GXAq"
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
