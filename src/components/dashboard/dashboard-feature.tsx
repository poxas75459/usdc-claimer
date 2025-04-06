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
    "Fi4rahbTU4HKBNL9hsCsVe6D18N3k65ASXEyjjauUMxrRTdwt2UW5X7sEhgwzsdS2B5LfJfxZTcvWbox3t2RFPQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EAB2kfrPLtw3ZL5qSeLL7gpZzVHyWsUFfqmHyLwJAjwqMxjs2rjB8JiV1A9qS3cwEVpp3bAkY6JT3bSTzv36DoH",
  "key1": "4cJZqtjcxLuux7PQ5Au6aEfFyVasAArWYte4mjki5UPLuT55cEh9L98XpZEGGAYsCeQiQBq8j4Q7Y6gnRtR9XiLX",
  "key2": "2TG35rmpmNC3gqghjKfDUJyV55gSWMHrtZ9fbJQybmtPKyu175EHwWmqwMS4Bbf9pgyFtU53gv85hkkVVDnqsrQ9",
  "key3": "34yKkn4GDDs48c8cfYVLnb7LyyuUcbVm98PCZceGmG7brSu6w25FAwbhUtykdJVhwmt1XT1GZJN3xgcd1aBgkt9h",
  "key4": "3NFwvwRchvAccnfkUnfj7AM2Ud7rdqQZ6V9oizNpi2jFgKgZVfurbi6RMBbqWzQ7qzghouoD5tpYgtNpESTazSdh",
  "key5": "5nkSSJiRBGK8ywEYyAqmgnuKUV97UFp6rpMqM4dXes2kgEdizsKmGARcRbRiXzHU8q4h2nLU3mH3yy9Ep7KzpzhD",
  "key6": "32XGhwJTAoAVqGKGG5ZWNmPdfQ25C2DjTFqWnejgqvxXQznVFMqLNb9JnxmTqYa5Pm3zSoKWNa291PkzfyLpJz7j",
  "key7": "9PUbDLz18cmyzV4QZqzCyXjXCPvsFa3upRbBERqkbCmYA5Pka9SWFcMfn3LU95WHAtJG11yxdGj182Gysu86w1J",
  "key8": "5sWD6Wg5Fg5c9FZNUifm2PXZuiYmaYuwDGPJuzAY5hoSe8v2EiaQumVSQasycbMn3W7RJUsqMActx7aK98rUN7GY",
  "key9": "65PXmfCnkMvgE95cx7Yt12GYFqPifdsV8WdcbFu4EF37xYt4g9dYnwQHtjR3DWkQ7tU54XsKLnduNHZh1gWSbSWK",
  "key10": "5LDYdf8faLcZzzJBcREtpFnf6SekAKCSHR6yTGaCHYMZcjaquBHqqNpCXsnYueMEngEKpyBJdra4mSCs3EfH2Yap",
  "key11": "3uUyZ9vs9cx2ArrvTiVaW8YVaJop6pE61v9DwVdmrVcqf18DGaa3BFjpyQyXPWiZsQp3pQnhkjfURiCQohBwJhXv",
  "key12": "22RsiHvay35GcfGraenmum888s1kPtcn23TbqtA4mkeHbatCenDpEPMYcZ7SnKWUzBnGCbpARuM3rM2R9TWGyVSP",
  "key13": "TEAXCcmXqkRC1CV4f9bXk1c1WLP4pAZ9bo41cpiWVZJnQy7Lmq5cNYH6k2L3UsNTT9X2MR9Wwd8v3qZwQu9k6qi",
  "key14": "5UYC7paw4tRtF7QPv1XZzJDecDmJUEcCbjxQehjQx89aikDmxZNnhmCGk3jH4Jo51U93V7pavSoMsTjiTzCbZP7n",
  "key15": "2JwHbFsLiJvCwPWNGLXJUr9y5EAU85RRsx82zE1YZ72zHwxUS1U6jUbdQSPsWMktuvP9bEsUZTvgcYJT14YnU5PQ",
  "key16": "2ndWhWtJHXbYjt919uhT1yi9QTYK4LXJwjEhmpPrFHbRz2axXyKWWd7vRQtWyaGgJBa9dia1WvCypULQJmR5We3b",
  "key17": "3K7iah4hfDGi6MnSuqpvP7PEMRnGQmGf5VpqRPmR7bFnzBNqzHqNqjjjDmqBb9kVngdEycAsMiPGmo7LuV52hgLz",
  "key18": "45QyVUPBK62iiNMEzHdqe5X94jmsZo3Rv7G4rEP1nSgLU1ZFRWNx7ie77B1nQPzqFKqxZueNQiEu6ae297vdWD8M",
  "key19": "6YA6aoCcrp37w5Jy6jtuQf61DGEuM6QKYr1XwZmhxCqkGge3bTWUu7iDCLfDMXNz4g8NivgidBi5xrY5XrKpn7z",
  "key20": "2U46onqewTgQCDZV5aBi8KnMEJj8ayWA5AK4CMPvwofsV3v1yb5N21T1CGqJu21eFanDAQidxBRM1epjBAvdWyDA",
  "key21": "stqRgsWR8szkYDtdJkw4haD2xqi7cUDeBX5w1Rq6x1vd6n5dZwsCTYVHLk8Rbc7FAjdXBMPm6yTJNhLbXAjEA5b",
  "key22": "4TaxbBeuSeeHvjpfNiA29Z8pqBXfwPQfVVA7mCHcym8tRnWPM2Hwzw9Pot2qJh7oKwhpdE3wcrapzMxS8eSksiyP",
  "key23": "5HVxaucM7BmVB3V7HMDJ4QurmPL3h4Eg8vEKRY7QqsbQNeAc1LJ8GjZy66iqCTUwVB91KY6Sf1GxBwFQESRSrush",
  "key24": "58L7F1xLVcPFu1VkBqR9RiJU1Af8Md4b4CiBpaJu1ewqkgt42ub6Fas14zMCcAWLEQW3cr9dj6Q7yZbPEArCZxZV",
  "key25": "oL3QwKfAVXiT2Wjh9j6wjYEF8TRe5EtrYoyaKZzAQwqrDiyqEbKf9MZzE3gkSy7ypAhcETN6dZXNPUqK3pJLMRo",
  "key26": "3jn7CWTU5pyKbnPgZpoekhADD2sq4PYSGQ2rVcDeiZN6DSGdXQDqqxAsRPSgZ4PyN78XyFebTC4daSyyHVbCH5Ad",
  "key27": "3mXf297cMZ8PJPYRcPRV4BhAXWNumMu2dWc1pGj25dEHGaPPrtG37GVMixyaVaZ4vi3tyJhRe8b1WXNAeqgeFTkW",
  "key28": "5VvkMUzSBgZvB5S6s8ayFZhFs2ezbxweWANLq1vvJdkKFccPBzhLAHfjBP1WaShapLuph5RmE2fEdxQyW5xoF8mH"
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
