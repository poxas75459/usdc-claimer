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
    "bpydstAg4XK2eYs4uiNXt5eyjKcijkKKY1w3V8zbG7xixSECUzWmyUHH8vHp3bwoGJJXnfmMDc3bHgj4DgrXoJm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MG9aYftXJJWhHwesDTyosWE76k5g118FrZS4Vgdpn98Tn84t952GbQGUu7k3bBxmfBwfwzi6EtKKmn9yxr1y2Bq",
  "key1": "3yMvgxALsYGM1WeP9kWGHrvrThJNBUxbXHqt8kvPWoEg1xFGQT3gmuDs23qNupYEduStdgr9WAaurjnbCFJQUcCo",
  "key2": "4Cmekf9d27dibjnGxbTzqLLyLAnWXVvbsNHxLnMqHYAjCmKxjLtfx3XfeENnd73TdqPdLYkX9a7RpcfRAZFBg1Mh",
  "key3": "5S4h2Cy5y4kz1EdXHUSe6CGZVNPqV85f9YUSm9KiXoYmrVMC9DxatLiXd5qNStM9ez49zmkPJhskMi5PBBCR6YPf",
  "key4": "5qBsiHzUkDGdJg1jfRsDoTEWdQ6YxtrndfkK6j3RL617wbYpr7KpP4BZiBBkoWTC4HivnwAJnWKDghShqc5AN7Z9",
  "key5": "2tVgtZJJAixDMP8yVMtqpKpe3Eym2QQyQwhQVTb5RAm9kJ46e34XPB8CKYEk3sDaeUNeL7BXRCT3J4RHX4StnZen",
  "key6": "5tgLjSd8a5bUn7EGj4azd6tEqVbm3CNCVYBetv1p96Eb9s8zS2yx8NyLYkiTBkznV1mT3GusH2VJHZd6cPsWhqr5",
  "key7": "5QjwEkV57TEWwTiQGgLuQPqCTJo1uTNMRJDqLu2omGs9jCrN2UBNtENUwvW8jZpQJVa1g14jCz4VQ2PPKkKg5SfM",
  "key8": "62wHECiwet1GdikjBQWZFzxxEbhXRcwVRxh2X3H276k9W1zNkqMxLs7CPXEu4Z22Noyf56Njz7sjrBDLJgNBv9uB",
  "key9": "2eo5md6N2FNRwrumzAoFxoddtFfvB9qwLDqKB4Jwoo1EqMPWYHtgt9BA6psF8cYAtpGvMnZQH8yeb647tELQ1j6Z",
  "key10": "64REfm3ny794iu3QPCnG2WmKcxkKUc4UdYZC8fp1D9yi4LZ2ZqWS2YXX4zxXrWXhr9THYwF5fvtqzVPAuQm48K4m",
  "key11": "5trhFipo75GemQ6DxEes1Nh2VA7RzokaReKVjjRQvrYSjfLktP1eNADabkx9bdMFSTZZWJWF7oF76XT8DNaccnhG",
  "key12": "48NVLDhXHoisv5Yop5fdJhkZSjsuJmXavW1hPJv6LvLhYveJEkSvkGYfsZFX8YatU5Z6Y2AtdxDFFXpXuVWKfRWz",
  "key13": "2vmn77fGfLaDqwgjmyT3wDXDTti4rdob7hSDrijtbTzGVKgBhq6ZEWfxxKcp6AXiZzr1EQAfsqNExboDXGKSkA2t",
  "key14": "5B5F11P3MUfsyvHmEiSZJoKG1MwSQU4yWqr58h3RkfdwjGtTmt9kBoediaqBYfs7AB7uXeHhGFvQTDSaqx6U9VZQ",
  "key15": "2nRSb4Us89Q8YfmMDdFA7TrYDswaPG7bDaLL4iQo4bKgm6b2bSpokYkck94Qs9fcCWdEZLpU3ECDxVVf77UpiPCr",
  "key16": "AAxPY8swW8H2oqvPcCS8d58ZmcgexaBPh7avdnbiqBEJUC7Q2MJVKb2vKmfMcJ2ZNT7pPmwYFTZ8fwcn3W25ipA",
  "key17": "2HrizUcH7RWPwu9mqor9AwgCP68uzTNu3km8nPHttPN53Lm5wrUbVWBc6dexPoC3XNhpesAxqkaHykGFyQQNigjv",
  "key18": "4WKQDqchavHEkrWgSso7HcSGLp7LDMz1181NRxmWhnewQi3megQYUe1F3FtcJ7NX8gqRLYd9LTCGBZ84gDqcGn4o",
  "key19": "2ASYjbv2vAmBy35kaxDPSypHaQhod1UetscjQPTMYMuHRGkDaSh3QrZXJhANcHg6VjmQHwFcPNENm4PnYgZrpACW",
  "key20": "5S6LDfVB7FiJBZdWW9mV1KfyBqNXv94MKvFmvGynjeUCy5cwX1Nj5nGxcPhtzNxpTFrouX4hCnc3gWNVoVni73BL",
  "key21": "3eCLaFWGsK8oUmCcX7CeeCgnKTUngXfQuRyZ5vgezojnu5a3VfcSTCw8FVNBNpDhyUMZrufLHE4UqNwZNmC3LowG",
  "key22": "3BZJeUZjA7qY8RzZ1kdjKzcyhwmx7sKbxR64Wy3TXFsgYrFLCmqzyAT6y2W2oHH9qqXRXUBfhiwzebEnqEsD1Up9",
  "key23": "2oW8y5EB1k6osqzt1Ge3YM2JRUv27hCprgpoatnphjcV6kRZcoSba1amo15aWLQ5L24DSvndZRHrRXgmAgJvrcTL",
  "key24": "61v2hFHeHHP4rVBhUW4v2KmarrQ8wLiFmjHme6c5MSLYWSTS3ZQCVNmqS599q7EbmRPosJHFqDDgsh9Vgt9smJuA",
  "key25": "5fD31XuWW1XKEtSDFjkWQ1MoQ13Uhfdm5fKsL83fMQE5idYq3SmnNBVq2VKvA11dz5oFsw4RM1xwNgvhPTxTAHZj",
  "key26": "ec9KBsWMfkh4HutK87Y27Jhh2EQ4iwKK3FJtZDCu9zf6nUt9FCYo5Y4FdAMwchfZbWanAvmQLMPz2oyEvx2PhxD",
  "key27": "2A37yMkfPKnWenKTX15fLtABPt5bwiaSCa9Q2tzKo98CxpUNCThfxY5prrsPnNRskBP5LeFsFMWjxdvj41jYGX8A",
  "key28": "NnADW7QcQAejcJsQ5v2ECzqyY6r9JPKpwa1bRBZdjGoHQaU2MiuomUbdNcntU6BExnDdnwvE5WNkbnzZPz162Qr",
  "key29": "5BGXBQbhMZJ38FA6CgnHMNRw9F9XfqeiDcBHf335oCLwhJfcpEfLk2uXLHyYp7uU9gdNj48PBzbBjR71W6EYe22a",
  "key30": "3eoQwHJYJs2fh1PRDd2ur1L697kg6ypsXcdxDpgp8ckaCG8rKnD73dRbJm8BmUQEAoeRzDpfW2J2VajPLXgfGhMf",
  "key31": "4jNKEFiZhPSWihC2pBypcWkGUMdYVA6oUo1NBvh2gLmGUpfBybtChK2JuE91YrSpxbHrVWgCjSr423epiwrRtJ4B"
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
