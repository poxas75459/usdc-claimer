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
    "Z6DK9JkDG3LpxvE1VgFu9mnXGvCCVf4NFNDdzZ2E7gZnVfY532xcCPoqRKbwU9N1qappbNzND4FQmjmW757Gw4z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64Ye7LPVyxNmNG8YAERNmAjg3G2WX486CxBNKHi3wQSPAQkEAeQBsgsZ2EC4o1HZDTKDZHvFdvbtbgv2JMxnQwQV",
  "key1": "2vdvdfWh7LzEBs96hPspXebzWf2Xmvh1ZYgf9UuqLQHzWmzEdkmgspBcMJK6o96PiyjRBnNXJm1tFkYySmugD7iv",
  "key2": "2ALLJmrLmFRfY9tnbaq2x1TfWkuv14Z32VZRp26YUxs2cFcJjbhpmBFZ3tAiboKFmfcx5LYz6MyAeNLM4RbmK94Z",
  "key3": "STcH1tTMXaH1ey9zBzsLYhqEMwLY9WRw5n9LWXvH8sZwMH6Y5pv3aan1Yj2F9Vuzbq25cTv4SBAvaLKEjat6SBc",
  "key4": "5eH4jicaKEbnUbLAAReUPx6sgXNNTQNAceq24N5cdi1KHzGBv4udHPV2RsNrD2JjonWCE2YZDXYZh7cqqUawj6qB",
  "key5": "2EXN4XbQifYo4nrsCxn3263RwQCuN3PVL158uDY61m5ub8sXaXHifMc5NqV1H7Mzv1SetUtrVUeQxxQuL5orG16K",
  "key6": "55dAtjdhXBWzwLaQg9HkLkAUHAo9o5M3TijreCAw7JNKM4v41furthxT215DLNtUZUN6y3iNLEo87ydBFjCHcuXf",
  "key7": "2PXqvuLubW8o4YRzYgXaDKq5nSrf1JLL9GLM4CmkFZaCWWqmE5Q2Xzosv5VCWsAse2CkAMvERdJsWbpRy9QYsJc4",
  "key8": "3jTnezTyxjeHQSkUUt6vadcnnuoPngd5VZ4JDEkMjQ79guAzKZNkgNohF81hxppevHa45cvLkxaq6ZG63X3oq3Pr",
  "key9": "4hEqR6oboKiMpzWCNbx8aswvdXQysSqHBMbfovVHaYmtfLoubtqhBmRnUBU7oeHACyEGVFNCcm78he71MsA516TW",
  "key10": "3G6GV7Jnj4oezdbKPH6DoDwp9rHYG6pPfhk3VT2K99vx8VTzJoq42dCDqVbdKpRw4NtyFJY9CgNQUh4y94Kk86V9",
  "key11": "4w8ae3i3gN3e2tSkckHxSSYivj7WfRr11wWX7XKDmfZj8aaFoWg97Bc5juXjrSDWZrEyHGFcdNabR2ZBduVH3joR",
  "key12": "4xJAGQXE2Ydhb5Y6A9VJyM1yWGeHExfW5UBpk2QGz2dq4eDuSUYbobxLAe9VVu4t5MXfWYQ6Ec1f96PWezVU2xhW",
  "key13": "2SwTfwpUsoxxQRZs3Vb81PVSwXFUaDQA1dqW3KpxMp81gzfJscrVJLuZGQYkkYS5qjeoPaHVijQQy1RXwHCRSCQ2",
  "key14": "VBVXCRtEjsroiQ3Pp4eZiP2JyrveqqHVNW8X3hx1y1769TELxwYBdnKB8EE4yfoutSDoGLFRwzY8VrJMoTHXjP3",
  "key15": "5N2vjGPSPrF7DHroisquzif8Stp7kB5g9JHs2VZTVgAbkXScG5zr3QqYNZjePYvoa7bAi5uN14sfeLK2bQ2D8EK5",
  "key16": "2J5izdTxAZeSGoaFALfmChVKePq1ZVHdWDTXYcxu5is6s8JDx9Y2KJSfVBdttuskTg6vodSbPDoU7NtWfRWUpzbx",
  "key17": "5EvuQG5TC9yLRvm799N8KhoirCjpx2KDwPqpFs2EpgTGkwPxAKuzVATX1j7BhFKHY6swLjesB7G12npPPH1m2WDA",
  "key18": "22ifvKbzqqFXsVewp59M2uU3GXM1UAMRyFuRueZxj4aVTUc6gNj7k4ZzSRRf3AqDou7dYBv2PdMPY3LdSJEBMrHC",
  "key19": "5cpmzJJbWpu5TdnGkXF6ss6XKNbg4VxagHB7ibs3ZpVMTAcmnLnMgfpRYHuu3pfyLwTjo6yKMrAaZF8rMLJ4jkNa",
  "key20": "4y9svDVy72vjqmUmnKmkFQYHd42cKviP3T2vF7SBahqkHJXro6uNDgHzg7sKppFTGLxEHE7ZQxa3m5vCmUj4DXKM",
  "key21": "2pWqTWXLgDnZn2LKFqgywDeTmm2ZrAgZEqXCa7RxnRX1VKfL1fFx6Yu3nNYbwaN362xfjTbjLs8Fi4TskjWaRoF4",
  "key22": "Ma1YQyYbYHP3L19UXC3UaHnmKMpcnqGUeYhkNN2azzpaiiSvWFMMfHA2TeXVdMTrJtBB1m8ZwMpm7Qk31A5zSN5",
  "key23": "2zuR8HYeKxxDLrfuLUVPWgRJLQPzNkLQdiahdgbxrHKbukCtnNsd88q2eDczKTya71uWmwuvQZmVtBE9GSXtE728",
  "key24": "4caKinpaMVoRmyEvijedQo1s2qgcp2DrzkXUWY1VPsCbasFdBjPWHM5T24ACqXKPMbv8ZLghF4qFXUw46Eh2cipE",
  "key25": "3zWK74rpvy3WRAaRwj46mp2nX4FmWA5FE65QUqQ3DEdAyWzdwapwgP5ZiFMcVAuMLcgJVL26LczyCLZqfHsmUB8N",
  "key26": "4mW6pibERMjqdXptbbZfuu4fGcQy6VZKzZ1BqHArzcd45NasZFNiNnXfepbt87WKp37pcb2JBrF86rPSdDd5i2iz"
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
