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
    "52fgm55CikNei4dMVK22a16J7tMhUMN7adKYdQBhGK1AobmHjYhYVefqVQPTiwJTKFEXaPVvSJJv8QoUQPc2q7hX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GSvQQJnRg6pByBhgbaghJJUxtjPcFm6zU6WX4wZLRvVKF2h7TrmfXruZ68YGamfB1HxcDyFnGvR32M4WZbkxp3c",
  "key1": "4kYyCPFq1eASedoaKAubDnPS8MDPuV8cEF6c4JD6t4gWFJCY8bH7Bqfrrqq44vEfck5mtTk2MZYPzxny21UpR4Ex",
  "key2": "5AbrbaCUsYGQ1r1FFtiTDryezKfCbLrN6SVU4r3R9W3R6Qng3yvV2s5SsbNcri5DgMkT5LiekCbK1aGB83jvJ3w1",
  "key3": "fHuWfHr336hho4s4M6DnYqLQXzRNi5em3s3TmqH37C3hxKRLgDnXpBaFMcTGTkvL6croJkh4fwQg8w1tFh8EJd5",
  "key4": "2Gug5YYrbYm5Erw8ZEAqayqaYgyJr8cURbK7kfoUkeeUzF5AcV65qt3NMJ861aDqL6C884YtvV7UTsnYnCk25fnA",
  "key5": "F54suUR8EbaP2YazJvNJasLVUzd38tmD3mM4n8MQbsvbJAnCfsz6XUHySe65fuNWW2JLvJmddcuqkyQTdSYRXcB",
  "key6": "67Vn7n49zTpc5DiVLQG9HbQpAiifPLRBQFQbMFWizYVzPqWbob6TfinBaeWkokFG6keDH8gMEUibGaHApdLAbd91",
  "key7": "4enhLwcn11Vw2UGU8MJjUFZkibQRFd8zQpZQBwRCf4jBNuPH86XLMmGDhgt2npD7XkQGahJ5EXLh4JSZGWR8mNZU",
  "key8": "2DXRDtwL9y7LDwzL8DzgMAqaWqEhQK9SGu9esUCvSy7mC7Q9qHz2S98qGy2c2WPTiDfbYPhBVE52WgG32fLgnENc",
  "key9": "NK1CgSLxpJ9Qkr2XwnsaxnDFCSvGhQMkxEyPZw6sG3zEoJqnWpHVjvorvXd7PZjCCWgqwGTvHF4fVqTXuBGM7uX",
  "key10": "2VzG1SME5cL52onSVRQe8ruhSSrUMAJzUjaqgBYkscNXJmV3iDneoiQ48do8K2Ax7C9ZR6wghDXQKf6x5p2p8Gg8",
  "key11": "4a7NHVBzP3MmpGdFzDbcdEmnqQQdbKQK2Qp8XmNeaVkm6S7yfjcp3EFKfT2SYKrSLu1KXMSAPNqdkdZQEgHVpZkR",
  "key12": "sHYwr5CBeTtWAAqwvzWnDN3GvVDNGK1w8t4fkXczFJ48Z7jCXa7NGtCWyGjrT4Qb5eRCZc8cw8wYHcmvGVvgU7B",
  "key13": "43VDzr9MHgoBXopqFxghuRFN9C1FDNjWfqCtjB11tVRsihBEmkkcP3wy4CQ9XP5Wm5SaPNk4oEcYNiLRpcuW1nFM",
  "key14": "QKvgA4yuAjJEEhNFbZLZo7JCNdCSHj3rfXJhiwHDjz8x9UpzYJVZkqmYKx9BZkUtU3cPnZGaXK4h3b1iQkM2QM7",
  "key15": "5fqffC82mpVnDPEEfPfq9Kmui9YYHB3B8ZxkcY2Q4fK4oyEHDYoYScu2Zde63UMR5ziKYCeVGtV1btAwDTCyZsTK",
  "key16": "5u9eZLSUkKc7J2dkp89rjvR1A5dKkqSRz95hcEiFFkNV7rsixDPExPvXef8T5edxcTD2rkPAkHeAkNYSTwRavNBz",
  "key17": "3z2LetABCJpzNpmUq4iTYqLPLzo7KBYLxnCKeHb7jHEwEWfcw46eXzrdN7cqbiySY3QWdMt88vk8QRgsGChCWkrw",
  "key18": "36b4jPhznkriR6Ur4AghP9W1uwk9HdwEosPiUestAPP9CtX1fQWiHuuTnCEpj6BgQLC3iYuHTK21PWDnGVGbLrst",
  "key19": "2DenNH1NkjfZiZthQeDuCR3Y1AqGKfWPCcpQgg523uTJmLXiB5Ytu1v1iVEF1Joyp318ygKwsDShUzecNUjaeCrJ",
  "key20": "36UseDbdguDNJdd7BoY1QkLiuTif8W6EJEtunjyUndZ5dJe2JcKeR87QCtQvrAYgUybcEf2vUMkLuyd4jpY8kqXz",
  "key21": "62pF8e5f8AqJoT5ptEwozHDrWHJEiYeaDokPdzEcddj5xhCRFYWFsagSrRqhKi1VhqpuqsGWicy9GWxpwgoeFyRY",
  "key22": "3f4yUeukEdrEJAVb31pXdbUhmQbxDedCqPNHZZDdZtarsKEKk7Bqx6hz4kpWoZGH3ZtJ28YPquqvyob88bjJgXU7",
  "key23": "4C1sPnUNf3vYBL7hdYqGZG3Qknu2p7s2CZh5KsowECYWTi6Jy77Gj4Jj87t64ZDia2kSj5Q6ZEjSKnLdc86VZSzE",
  "key24": "3rsvWnpLnwV3fE3Pbz7jhEHk6Gk7BNdb3DCJt2VCv6cBL66UHNvAiEqCtBpFYJ9ePDgFUjKSPyYc5yQHXF7GBM9L",
  "key25": "5xxnSD6zgSAcxDBY7H32Nr1UMM3yp2usqxbExW3T9HJVfngPG2krCWBBmyHLnQZYWB7qZGc2njrro747AHyHb1Bv",
  "key26": "KznMkpNxaU4FBBrHjNZVY82yVqs5nb4wcTUWLvyN9tYf6Ayx5KjRr1MRW5tYhiMm6fjiubHrmec19wBEBLGqNnZ",
  "key27": "6tCT4FBna5eDX2XPRMaVD4YDpc5B63rCmxZdvbfKdpecVfLhxjgLRfkfqYgMCV9Mehf17kp1UcK8Vz6LX8rQ1YW",
  "key28": "3Rk3RBDSS728kpGTB3Z3P4PkYKjAnx5rYWzDGsgnXXzAcBwNx9qjFgX5fREQo3ZvYFxpNeDLcMXPXCWLeEFkPkwD",
  "key29": "5reryuecVkcLf4MhdyXu2d6q7d8HJRgyPX7Xc6JMa8LJ4TyEHx9YoDATq6rns6zENQCZtkLvGXuAXbY6nxYu5SmM"
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
