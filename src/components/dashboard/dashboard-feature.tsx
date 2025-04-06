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
    "4kopHQ2AS2EDG3tsdw8LUi6eaMSLDAw1dTGVDFjCUPWFXwPPPwRquzrAmem5JGSHEE4YV2YVBYziRq5A4PZcYA3U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RETQsp1UsX1dUtnQfSyMpwyUm2bxUYjWVnC2XXrGfK7aDHZRCrLJBv953p6yT83qnakQs3cupvVy1LRMB16D1dX",
  "key1": "U5HzGtSpE9eQp45fH3NHLpRh7S8K6RTh5T44v8U7Q1XWe3vAY2M3QhgNDjHXieQCTJ72jaMt7uVfYL3VEhTEn6X",
  "key2": "4mXEcf391gkMPKepqft1A1zMMG35x2eZtnndwr24ek6Jb7UjFsUsAiLqVoFhZr168XqjP8Sn3eZHgsUmmJuTFeRT",
  "key3": "4p7HHv9ETVMkpfWGsa8QZXF59pT7DyWfERBXRmux6B8Skv6Lv23sLqNqMGhNAkjrKSvwVjz2Pdv6buvebceXdeoe",
  "key4": "5EgC4VP4S4ErHLcFxPjSQsN8se1znXEoNATTD7wvCUdTuRJgN61FMchVCWmTxaAggpKrYoDpQrsJhSyXbYuCmfRF",
  "key5": "56suMHGWAAZ5Q7vbvKVRypzF1MeM3oyAgtLbLBJhPshEzFtQesaWM3QqFqSbC8D5dVj8XyVBvyTpS7cPNehb5dUb",
  "key6": "2rGFvWQZZu7oTo43pLCPAco2Lvq8Y5tiaeXjzYC9PYvR6QT6AzFLvAJLbLx7fzW7Eedv7TphLye59KztF9Sme12C",
  "key7": "TKL6WrJdhRz2KvAsF7gx8cNGNgwTCxtX1im2Gr8G1mpr76ZLavkCeDxLMd6Pzz9DN3MzfmT1uV1FcP6Wdud41bJ",
  "key8": "3BmJiAzEFU44HrjeVKJ6nL6UgUrqP4qbfKccYDTzkMtGHzdH9vrd3trWXQRRcGYEtF5jJBrJGf4zcxGb7hHRroG5",
  "key9": "478XYv13XKkJRMnBE2Z7nEtn8LM6nYN9EYwXcj5x8BEEwx9Qbv1UoJR814neHiqLXEyA5ZtTWbkfFRNTWe6QxTfo",
  "key10": "G9zGTHhssue1yzkahAVzZT9CJEuA57yiUox69vgZ6DKqWGAzDqQTzzS4rZDXRnayfHUQB9j94y7tqxnhEffBTPa",
  "key11": "3a2jc2ztj4saCFaPHsCES7ShuJ2YbbUdCJrrLWzmUisGe8H4FcZhVT4Bb9TKKMn7irYSvdtsgh9t1vZGk3dYVMTr",
  "key12": "51bTrTX7mB6eU5oRqgPpKoSBJsxx5ogMLfkBRNUNA4oBRxp4LSZPDjEaVcJYKiydvymmf1Y7ZjeEtXhgrnzDkagL",
  "key13": "9vkWLYpTN4w7rTJSRKHXkfbsmYYHBgN6AZdRUT7EcXwWaAcyfyqA8NujvmegZJ4oQ3KQZu6PwpMgAbGmFtgekow",
  "key14": "2e1oNGyqipBzHEztDYWDqenQCpaXMpnrEFaagbYVY9VYg2CpPx6x4nLehcwdrtwm3uVCUBHsYEucRqsqP27WjAt",
  "key15": "5hwCaqVMFQDJjqPB2p3S9mivMmy2TF7XibPEVzRziDihMBjsGFu82VG4qsNJxBzdGUx3XKfE7sSgVj6JHujUEzfF",
  "key16": "4YUJGxKuUNzRxvM6PtePuRYU77hBAJ4cmvU3W9brcviE9ZuvrvwR4xiZgx6KqmixighG3hyGLCCPvKFHxToGA29m",
  "key17": "iHznVdxV1hVPFjucBW9iGjeMSCYmi4GnxYh6zdqVcX7eyDMH39LndTpvRzKBnbcDgsaP3zENfb6a1j5sPRGYbvh",
  "key18": "fkNCbV2NWW6oVVoCsKjjqfqvTK8Wq5rYvPKnBybjQFX74jjMH24KFryFbQL6Z9otMG6vcrZ79mqLM8GUWvRit3J",
  "key19": "2wnU9VkUAFKDuC8qRA3XFmeHnyeUgktz8SctM1CfjvtsKyfRUgKF9s8nSgD825xnxg2YcP5czRoXzQqA8fAV5Hy8",
  "key20": "43LeNEFg8u8Q37NJQEp3yHQRstfxtKijh9hnRCinJemRMN8rv7TPKxw1iGcGd2Lmz5VAQaH7ze6zr5XqBvHLfUd9",
  "key21": "3TpcH5XkiHHpSTPfd6iuSfDPSJB9LHZz4nS1BfkLGYihywp9g9tP3j2vCsQVGxar85qCWt65qwUTkeUoLaG1f3un",
  "key22": "4Ai4U4En51AjMM1rkhXZnZ2QbKhtEJY4uMm42BFnn5dLvLgMxjvMmUxq9Pe5EqetJkL2omsiTFKURqja3rkdi8do",
  "key23": "5FyvWVP8UZ3jAAiVvj3uWfwpnDvo1eahh3BAcweV39Hs4ds69AHKf6rW3N3Ran9EfNbopb2H9mw8PXLwzKe5TEVg",
  "key24": "2WR6qLXToWo9x3qeQfCE5dj7YLigmyAA1YchvZreR8Yn8uRFupmKekKvKrtBdRUuBdVbg1ChbKY4VdUdSL54ENzK",
  "key25": "3jjZxU93vWXuq832vJbXd9UEWu3Avh6sUVVL5EqWdaas7J4U2TW98yRFVtnajQApVHy6mXqchJewNxigK2EcsQez",
  "key26": "4fvA8MdK4aBk2eucDo8Tm6zrw1i1XgVrLAPjkut5XaYUg8Q2TpHRbsA1xp8Lb5AoTyneTCtsrAAvM8KcDhGHKwQL",
  "key27": "5hc4p4xiQQ4X67J46rYvcTcH4C2uCox8PMZ6QCydx1XAaVnJJeCWceu4niQmmUKRvCQvQCQD1JfTdEkitUJwHm2u",
  "key28": "2aR1VKNpt81mxBK4zvK7URVERgQdFCDrkGsFtAf1NWS8mibDenaKZNgT9Xbnbae4CfmXy33P5dyxe9HPwet3cLqM",
  "key29": "2XRH7Ug5YLjYbpn7uc15YMnRumT2ebzxVKiJWKXvhJZWKeDKCM8s4pkVfuUVi3KxpqS44w2GEDZWVx4ZPNjwYggZ"
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
