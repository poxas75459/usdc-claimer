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
    "3ppy6CuwKzaGs2Ze5wX2NpdNgoXB2Js8MzezQbANyQQf9GM2VCjyapuiCvG5augL4EqvgtNUnKmLkrENtTqMvpMe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4w4WrDNf7gra3hRe9FkNfbAtvcPkJoYhuo6ExNwHjmfNeD4ufAfMdJctfP7nxaT9sQL9FSpUhLuxfsg1X6rzEjdX",
  "key1": "46bPNmTD86JWyED6h21wkWA3q8Fof38aVSQyq2QnMiTxaAQBsxQbbeRAPUahLCASRaE5pcg9h9Tm23VQJ7M4GRUX",
  "key2": "2S93zZzAU8cx7ZDtUyRZw3eWzRKV4RiY73oz1xnK9yi8H6aLxr4Kmq6U1HCp9NaLMNqQrCa5o7srAjp2R8RQpFPZ",
  "key3": "DVE2GiDLeobwyqBH87bkbejZo5qbvaL9vnL6T1AW9GazjxWcx6BjWZi8h3SQa6aFbxfw8QQwSsJpdpCfXk2wxFv",
  "key4": "4Wbtby5Lj4bcoq8C8cXoXaRajiwETFkYoysW8jp2o4GGKeFnX9g2XMd3jpoUkbZB11vsvW7u7SJ9ZQEM3PbZvkeS",
  "key5": "2F8BDvDkYW1NNSsid4chNjwLLZNcCjjjPFjcehpc9UdYhtiMD99tgYZzqKwVmFFf7jtLia3bSL9YsLkUSZFMJDvc",
  "key6": "3mSJYAeK4YF43DfzLKTskaThUvkPnZ32aZdGBnXRD4abkrqVE282Tc5MpP39s5Xfrt5KvvjTq4KD2N8EZhLhPyaP",
  "key7": "2Fzaj2kYX9oa8nCmRFhcqFh4nbbbnNjvGaArQs5KyupkyQpyWjrSznVh6JXosmK6VEPCzSXt7SMjn5ZUxrHdg9eK",
  "key8": "afRhR6MMQ4kb11ere9T7EfXEGCQ4Us3MG2mkuK6B6iHZGRrb8Q55FVz5puK6BoA6686vveus1juZ9JTrLHN6dK7",
  "key9": "3k5terMZ9mvqThXVghy42FUGZq2phYwSdCcsuwCQmWhf4SP13KA9A3DXXRvgjMRtSRS8stvFjZeryWTmqWkr1vdc",
  "key10": "3AexnEc6TCbpAYTwr5QCR9DQWMBgsNuR4kXaMDS41WoFu3Swpsjq8nhjFwCnhMcfizXR8fcRv3EaDZihGgemp3Di",
  "key11": "3qviCDjVwky5Zp3Zm2ntJHLSH7dwF1xvY7iyUNBp88W6mARrzsoCoaUqjtUV3H4AAyzGhXEV1pmobqz67Z5UtDLw",
  "key12": "8sPCsen3CBCyTayoR2ZtvUn2iM48h66ZrEjXrR47WwURFmB7sYhQF9fdgDvjLD7ux8bwPkBBRzysS6cpRHeLfEs",
  "key13": "4m9DMFLHqk2vetxq9JDedq7j9gjutZRDveo47cx4YWfkkwGXKfhytHEqwa6ME7uLFGS4pVhmY2gLdmnDWYPzagTY",
  "key14": "3MDZZ36YAj9g3ov3nZpwPwLYVSdtKZTyQks5oQFUPQsni5YCcpaxhQC3DUtaTfSX2PTym7P9tkatqfTy7BCVpKQa",
  "key15": "2K3KNxDBBJNkME91skdzMj6ML24VRqsHScGkCg4ZVcHcKRBtFsCW6aQL8GkQ7sXTVcWDAwv5WmRpja8Jmktuxe6L",
  "key16": "2Xgafe7AmtQxNZKotRPRJkuV6aZ9FWXM6XN1FBnFCPEgLYmmcvGM9qeYyYQ9HFHyQPGFbkNcTsczwYBX2eEGMcp7",
  "key17": "2fQJYwogYMgrgi3v25M7J1VzLe8K1oQn9d5kJwnJBNCqZ3DyV6oVtACaTuPgziURs1d1ibEtaipgSCAXqtA1E7YL",
  "key18": "5krtnMAc6JQFb8ufMJr14PPwRpadFYw57MNdkospg8XMgSZQaDqmQVEEr3CCMDqE64JzS15iQtYHT2K2GQRA6VXn",
  "key19": "3yTb4RUfyqfLSq4DFKGZt1kqBX8vpxDoBt3vJeWCH9s52rH7M2dqvF1tiKAnZcBYMzEbQPsQrumWWmA33MCKZzMF",
  "key20": "3dS3r3e9mEpBbxXqJo6G1gYBp7WxXikzZBEZKkjkqpRs6HbJ4wVfBBuL7PRhNX17gLHpHw6WGEuRpZ46rnJEADZS",
  "key21": "4SbbSJhbNmxrk1kspCXXHcojL6caHAezNzxHGLdE1mEZ3KFqCmpCzdhGUuiHrtQYLsczwC8j7sZjkw3sSJPaiW9m",
  "key22": "5BCLJQ4EpiANvuGLMJQMudUBAATRaQsvvjvGRwc5MYaj1ZZYHqNR1347wtpdeoCYLoBK67cYtvKxNaq51W9NXsnT",
  "key23": "4bhisMYXFXUeGRHBemMbvoKDx3fvULzGufjHmuzvKXXDmpYCjASFzhQeaosAUMjBhJhR4JBdYnVD8nmU3aczSqqW",
  "key24": "5hXKuAPAkL7CePAGVWmvCJdsMXog63XCpyuCUF5HVjhUzaLohEf8vTm5WQtSLtfjoWDUDKw3Ms5fGGprksSSBaXv",
  "key25": "4p4FyjdPKsYpv54k7RcneP9a9Ro98CVn9yoRxa5RRPQ3qo2yDoDy9HDUjjq4gP86VhpscizfKgiWKnVzTR3Z9ATL",
  "key26": "egA8XZrJyxN2yEYuiudrfYLYVFXamJt6MvfdvQZZXmzw3WuVLiQ3hL8VQejj28BSurQbRACTdLNe7KNd6WUkUsK",
  "key27": "3m49m6My7A2BxY8XuqqSMQhQLuyvgvw7mSZB7n7o6yX5UeXGvKt7XXCzqkvXee767Y6K8498SfHChMNjQLJtvYJF",
  "key28": "2eoJRqaQj8oxFCnKNneEQvMxWfHUw5BbEJ7vJRYb67CdSBiUdLYNMAzs2QLXPYqxLhHMvVsEQVk41JQC7Xz3iDPv",
  "key29": "5XidBsPkzDBa56mUUYW7p1nNZvHryssQ96cgZXRoGtXDRnTjAfFVdd2uKVK8ybQxXp7v17v83ep4CcqY2LjU493c",
  "key30": "4Rdx2s6R8hgKuQzK2kieC6gQGTE6PPcY8sceC8WUvKRLCbGxKDeciFeFrrb6dTPWGvpAmW44qrhaqPGNZjiVK9f4",
  "key31": "28EWVZSzZwJ47NDpacrK7SiMHF84rG5dGTjKFd8ZCeao8hpMervp6bLxZ6sEdLBcVXgnuLkgDH89Ps5dw1kVoxiA",
  "key32": "4AezoReqAHn91gKhm9M1HUN3uaEwpBjyUVoEcNkLeUgNQowNkQnGraXVBpv778qUL59tmnrH9MUX1uyzM4D5mQog",
  "key33": "3ZL5QrNQAcLLBh3XRQn7W6sfd8KWQmAxFanBwSFVi77CMBYBmiSJ2imZkG1tLYo2kc5JkJxFx7k1HX4RpoP2fHLK",
  "key34": "2ZEC4y4yZSHtB3zCty4skL88JhguKKrVBUAXJKhdpNPpFYYNs8rzTTchZFqSdMXBqiS2rGo5T6dp2Sb1kKkDAQw4",
  "key35": "4DKtbQ2fXEWYexHmpyKC6AE2hivDQbrCxqq3CgaLLvurz3WMqcpKCJRJNEsK36fCmCTwLdfmAQnDGJ8Q5tRambaQ",
  "key36": "229Y5kzbPgmMVZvR7MczTbguqULP5AYx8Y9VaC6qX9Vbiw3uvjRiKRFJCYpoFcp4VzRMsv8Xq1mt8sXu7G5N2HwR",
  "key37": "UEwZoXXrcr6eVYTiiiG1cokNzxZwwYX4kWyWocBP1dcoUH1nvVf7uaK4GX8ETM6X2uGbhLhzWhtc2erJyA83ejR",
  "key38": "2sjtBiAJ5fKqorh5wrotr6XsbeDsG8k3t9MZYMoGrRwpoFQBh23dS78NnkrNjssGJjm9FfA1BK87u4ajuMmvPvFu",
  "key39": "4gQHeEqT1es8XJGkQWh7V3pJoL3DqKUu9nRWmegzEx6VYC3WFWQQMFJDNxGMos2pvPRyBVWPJ4rtteUnpsF2CLUH"
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
