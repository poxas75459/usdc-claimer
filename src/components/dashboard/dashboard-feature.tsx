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
    "25xdSXeGy4bXjuJVbRXX9ytFEfuw9Bs1odqMGLWMJQR29quUFDMy4uEfy1nBD9Nexwu5DAKijuqUKYQ7fzHVE3Bi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64EuVLCsJpVFJ3fmZNS3CgktMiQUyeuE6gSkZyzza81NxF7pS52SqtR1N7D1WdEAfZkXMFRadbWSENhUMg7ZN6kS",
  "key1": "51D18B8TWyHn2CsFMaeASP3i5FLakXJZ9UW5t71SussSDmVsJnvpxNG5gotW4ceRasvzm6riAkfZ2WaCVZUT2EEF",
  "key2": "5QqGFLWg8RfGv43kVwCHe7vBz8n3DNwNsuVCKNe8eGo6DpgEr3EJbwFDGVtSfrs8Y4v5UwP8AsegQVX4umU6PAwb",
  "key3": "2muZy6FHA6TLQJLAkHce6asX8S8RsvJk9JaGiiYMTbbHai3o88K3wiYKuPHhdS4qaFmAkPmpMzqY2Yo3xzeG6zT1",
  "key4": "5rksRkaG6SXYuPvxC8eS9q7H8X5pMPGiZBTVM4tiYZsmWNKGGZ3jRy3JqznWML5xcRp8L3192jiLb3QpHaXHXXrf",
  "key5": "3gtbqaknNFPG6PLahNvyap7PxRaRAuNkpUzkPgUkx4Sdron5hzz9zJ6728KaSUwGpxboZQ4wHb5PFewMvCCF3Qyy",
  "key6": "2iC9xXTsmxdsPf83AFWD3fBzpSBzLYY6iLRAtCxcamM23nj7D6gM9Z78p6sKTUcgi5jXWi7wqzS67AWALTF7Wxk3",
  "key7": "5HK4oxLjojB2QkJNX7B1LHacBKX3oBcLDjwqg8DaWACUfMEBuXxEmZt72aKGXmtrcWtJYCtrwG1Yi715MCvRaj1Z",
  "key8": "NdsZmco5YSRFpvn9XXYZn8mN5rH7omAaYv7eoPTzAkk1e9CWP4xswZpt1fwmsCKBM1jtJPpybCq1oPrkfTVimwL",
  "key9": "RNEaZrfzDi7WeLT5QYLbj2rp1rRfP1h2E9E6hdFVPNw7pFGAoj2Fi1tHFzfFh5MQseAYuGse65V53FHFWWjXKMQ",
  "key10": "5bMNUVmKueokoqzLnfX6veQBiz8VF8Y72ec835PfnF4Z4fx4dYVbyPw1wGjRhKh4Uo4U39LhwdWFishFyKksN8SZ",
  "key11": "iovTAf2s1GqfKk4ZYavMXJK1zGazSGktRxs9GKZtgBspiWorgdF9vzjUADWav4esBdn4rusWvWXuD4pSg22HcCS",
  "key12": "3MixsXUPWdbnp6qoWSSNX69CB7rHLoEQ1YeVLDJcVt3AHrweDY8Tb6CwF1Yty8X7Hx754mVYpgqdggCM9qYS772N",
  "key13": "i4dWjJb56WbXbUM5sCypG8bxMhdJ8gA7eaKPgb3V1arewWYE6D1616xMYGqaBVDPaAc5bzuRApn5fjEQaa2uTFM",
  "key14": "3MtTHxVEVxtjmxpiWmLta3nmpM3TCSyC6Aji3et8H7zNAz52YLysLV3ypb2a9C2S2N9stRWFygPUa5ok9s8kirUv",
  "key15": "4uxMoj6BJis1Nr19WUJNenEuQzf2tXNWoewPfTrN3NbHPrZJvYmAZSQb2wvLUXMWmL5xjPJsmjSJK13DPFg9Sfdd",
  "key16": "5HDQf1ogSYV23qcLEwW5PDbmzyMDgp4kJkq4r81AJZwRaBu5Aus1btir8wNvDfZShwzzhVQSJZCZ6cZmiB1Pvynr",
  "key17": "4rMoiW5c6uFNsPUgzxsMzJ7EitnzZ1fxQ9ScfoP3dfnHfcGH1B6a3XSiGfghz5SHzDhroyLmWdUj66eXkmKauGDR",
  "key18": "26h367cJau2iz3ebsUx7zZQtCBpPVbrLw1W5UNxp4GwLeM6mKSKt625QjLBRmicSvoQqCVk8ddnHSMaF9i3PZGjg",
  "key19": "5hzjWh9AaztNBUTagZkCMJnD88Jh4kmCAc6z9gXiEUTSJD2y2J8x8vWk2iHY5Dr5BmDQDGiErBK9CdkuiCPmfy9a",
  "key20": "uv4C3CFkAwzUQ23cain7AXR7jWVyFDP1eTTjDZ6QAzreSguvePhrgdTtkBDNrvNCDbb6VEF32QeR7G4b7MG5X6T",
  "key21": "4bMhgZequtpLZvBECUJqf5C4DY3BjxttHCtu3Cy2aLwnVh5iETV2kok9Ddp31ziS8BhKKJuHe3NUX1cMuws63dXc",
  "key22": "55Q97gMHfSaYc6qUSZjR1FqfFu93pMPSZ9YjThJne3tCD4GpnJiE9NmYVfcyxp8sQ7kT9rWesKp8nxszCcgPphaa",
  "key23": "4jELD8cmpx2RrXmrQjntCbaqUUazB921AqS58yCe2LjSwAeb2Gi6fmHCzAzvNDqvzavatAnYSvSW2ZQE9hWp6w32",
  "key24": "3nt7qi9wJ9iQP9pE9pBLSLJBDLqvNdxZNdyBEgLB4HmiSjKpzapzEfnrX38sqhYg9AdmxZrsH2P56rQuF2hzcjZF",
  "key25": "5Kw1SJG1RhoVwuXhEoanJMVR4eGMQ4i2mgrzjgrrPg3qYbBBKQ6ahDd3zVjRYZiMDZphYNsKaeqw9KsAjDLbZ6Zc",
  "key26": "5kH3RU9uxXwEKTKPXsqb1XkZZskcQ9Cc6HBzYUe78c1zXHwn18jS3DegYtHxAZT1YGJW9oQXdMby9BwWMaKGu3ee",
  "key27": "3XkAuZ66kLUwpEEWW5ff8ATqfcVpRMoB2bAUKFxHJSoMRNqb1x5WtM3QtjpjYBN1zHVRcSuYUXvG2zPJe79BhAH3",
  "key28": "33q5zFX2icqDKzKmRyTQ9nAW8vmwshj9VXaUyhDS5kJiK7KXqXRptfehyk5bctCyBPjgRJ2KJoGfc4xnwFrZVBCj",
  "key29": "4MrA31de4XKWB4ktqSxs1QyEtvfuwrrUKq8KofbZwLQpemKw8fiCeuv7PrTbqxdVLwdEG1XMK2iepRGHobThx1Pf",
  "key30": "5MScjyqAhe5TZXeG9V3dPzvzzmMVajUpxdBxh9t7H7MEt1e2fX1eej4rELNHqDBVQgyQ48BUm1k859VLs5xZo5px",
  "key31": "221zuJqo6qXM5HkYvtJrVVZT523EfQ82v4H11EVcRVUGSZGNPnWaYSu4pzMCsxxTDMRpEM6TzivLhsn9csFWmvJ1",
  "key32": "F8xE3ZHvwSFe1yBqAPawfnx82HgJ4nMqxzNLFFta9hThFn5njM6hpQyowP1vhkjhP486ADP9KLkGtZ59aR6dSDM",
  "key33": "TH8Nm1jNGRSsyE2eCuf4v6m1zBqGmUFQYXMuah3PbLLNJEeWCV5hfHnwq2KiJvgKK1f8LwyRKLZrur78rKoTXyd",
  "key34": "55gdmeNpWUx23nEYMmoarpN41pEf7mQbPHuujNs1VDyySF9n9gdJSFqwbRHpwm6J11uPQLjG5pDDeFhCt6vSjPXp",
  "key35": "V8WVyeBQkpr8mUG5gqL4kexYB1xoVtkjuUpvgMpNFDugoyAxxYr3JTXX89joTKUU1KqLQioi4rLcsxXJrajs3Tf",
  "key36": "4MZNnxRqmYpQWBbQnkqKzVXxU3d3VBf8zSaWM6DTVMTw7YqAWorBwgxS6dX4sjdtStstX4eB9atayd1xTt83e83f",
  "key37": "3HV1EQPxHS2M4nzrbPjNVPuXaC74dakKihpjuyZDsySEAfCBfxhTMWp4j5cHEdH283BjU8Az9yctd4JpWfppyDpj",
  "key38": "q9iMcV4ePzbNZkFXyTi1SniVV8YnKmW8yKir3UdBuMe2yUTChBKQJFQzYJFxavpuhcvfes5LpMUsc98gfKmB7c3",
  "key39": "4LZjztU9a9PpCbx6cd6SmaBBrKGXCDrDPeAZL7ZHRYZF3gYS8msjSvhJKYNcPYM7jafp7SJNKZUM814R58dQbngu",
  "key40": "3waF2UasMFtny2ND15H3CXmXxMYt93iyuJ1qqJ7e2tfR8GnefY246j4UmMGiYmT9z9jRdtTMPNKpcCjs9Gknqcbg",
  "key41": "46vnGcFcEUkCWi5vb2V7HnfC2ju9RJ1bpCgrogzqjN3QQT8DUzmA6RjQkVsxbACbhA5hW2aWKbvqQgLdKB6ucEK1",
  "key42": "54xxrm8bcarXrFXMF3AGnrRoY8PME5Ti7f4QLw9DCCnXJqh6ayJfw19prKpeEq6dv7Rd2SwYkTKziL7xgVyooo5T",
  "key43": "5naR39pGjtgRtnbVwiXcFaVgbdmKSZDgUTjMDgyQJgRQ1fP2CUogfBq8x4cZcwMdjUEb7PTbn4L7yZRr6F3PpYwx"
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
