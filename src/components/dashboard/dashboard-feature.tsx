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
    "4zCJ5PHDkdrBcEoRN4Tnu1NbkuZuEgGwkZiNn6A8muHfz2NXzbzUMDXFxm9V8XTsky6vEYG16Lc6pAHBN7xyZdw9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jFcdL13i7W6U2FqqXiDeT6eBE2k28yhtiRrZXBCbPdwszRymvuC1oJt4QNkwsmJTz6PMyuamnEko4gvRG9DtvMd",
  "key1": "4GbLTaDzs1yPmG7JVCWVApCJNXEzn9tHhMyR5m9X4r6MLZDwRa3KvF59xGKNn71NS5DFNG6pXrBUm2K7xfPuP7M4",
  "key2": "zP95RRDtrpWH397DM8JuxP38ZroeyCPyPgf2um9T7TL9KDdiBZEQxMDpgzNh5WbbQuQ7FjC79NAc9UT3pGp26Dh",
  "key3": "5MgEyAFjHzr2ARPnJTmkKq4efK2ASfwNVMgmMz1fQ91Svxco8EhFN79DnZw9M5UTwbkSK2AySFCjjs63QgdaZrg2",
  "key4": "3HfruVcHhF1RG2mr2f1oagw7Rahkf26zyuLY9S8EWBFTMLcWuiRZPbYGpZJb2naLG2CUPLcx4PBgkciUWw7vPLHp",
  "key5": "yN1B2Xhxv8iRTyNFmrK4CnTcRpgdcbBVvekFoXXz3wJA6iUR5hFCfq8C7UARkMQDpdWPCLz1S2C2VWaJjESZPDv",
  "key6": "2ksnuDjBmErsFJHW3H792SzDKaKxETdfEo4ATP1UBmKxkCQQmZHTiAUV9w7XbaAzjyMaRAxQJsXSzqH6WQZT6me",
  "key7": "32VD8G1nsLkBqDLBd3v66NGCChadEDZ8XzYSa8Rm3DVWfajZiBGwibFp9Frz2nupP4kFTv4GKvLdQEcAvChMSuJ3",
  "key8": "49E1LWje7Ys4KeZPnn6VkeQwqebYMu6MdssoSYqZB2v3SsFixZUWkL7oUMD2s3FPhEDfrbfPzeA1utdUc5sr6RCL",
  "key9": "3EvsX2eyHkTEqTDhDW132xNyiwUBdiNPNteWj2wmNuFaZLi8H5So9gzj6KdnYeQwFynmh689eSZGAyoaPWez43TL",
  "key10": "5VjXMvsaMM3VQzcf4WJ17NiUZdQN2fDAdwWuXA1GFmgNG5SHgQzmWn9NJhC5mtLJMyUSHd7jyDxkcq6J8uAGkuy7",
  "key11": "5FmwHycgk1HmPeGymFprHwzM8Q7nRWXnBiRcRJcQZC5sWM1JtWpu9BMibtVrgVrQ4kquyYp36nWbWLpt9ohh9dmF",
  "key12": "3ftvLLL1Hxk9cVCojMbbMxnBBQ4u551TsrwCxpCJS33Amvu5ivwAR8sF5Y7bCGD7VoF46uqYP1fUbD6oQVsdb4tg",
  "key13": "4txVqqXS8icfaNukAvVuszG4Abtm9A9jJqmKZ8yR5RKV71hb8r15brZ55gL221AcCLU23fULeek8hPvB2mpmcGMm",
  "key14": "4WY9FMdnmiDYh2JVJFuGn1CG8K6daSTh6KnnbmJ5zrDo8Ab5jSA9JCSbbASLPMZ1uuC2spXheKPFA2LTt8emPZm1",
  "key15": "4Rj6MYAWzdtZxHbYBUf3LbbifvSqK7LUAnKkAYRHJSjyr7tYsSrzbK2KP4cVUSBLbmJj6MSarnnzxsx5CzZZ6HFj",
  "key16": "4i4E56NVda1Tcgoq36DXcSXdkU5asNmP413qewFfvwHPLws8rqPvHF1WbNCtBSZXysrfM49HcsALT6rUpRjqd6gr",
  "key17": "5mQMAVEVSLDyzUUZWsy8cq9FmYYfF8AKDZb57mD4fD3rq2noxeTZfZBrog9hqdU6pkymFemeW7jDAPbogdVG15yA",
  "key18": "r3PBLdVu8oprTBgxDcr8e5P5DhukiqAPJSVq5tyahJvnL1hR7aM3L5t3pcYqjd173H4wnDPK8h3BtNqF7J6iiaw",
  "key19": "P4e3WMraHJfii78dZdAMe2rRC4po3m2YmBppQT3mq37yYFBuDjXZN4nRrwHxzrhZXSBn83quXS7eCF2vBF1uNVi",
  "key20": "4CR1zwHtSdi1be3DqAa6fksbxCCxfkU5sF4eBHcyfcN5RN4m4AwWWf194YWB5QWeBoCnzHbxLPPz4tmAPh7BmZxh",
  "key21": "2cDG3xUYU7W5Fu6mTLEr8h6T6Ayu6nfNFYDdSxtakh5xbe4PSLNRSbwBU7LEGMyivDPstRxWfQDgPeJCy6osR5tt",
  "key22": "ZgwjoVaV5vUxvP3T2GLqHCrrjz9ptXJw75npdCf1xUXrGv67yc14aixVFFUiMt13PZtHaL6XU7nxwYi1nzPUgMq",
  "key23": "5xS8EtBQmeYTG8UChg8jSFNZdJUmpb7kbDpkkEqf8JQqcbYjsGSyfaGR7sVaPQeWSZsdtyGysJm71fugLqvdUJYW",
  "key24": "PsmKateNmPAXyDBCeJYc4ByMXzxaZYxHc31t7S1g89pJLF8vV1Rz6L3cChAYvC8morQuc9LgBxGS5PEZSimYxQ6",
  "key25": "5FKBfTSrXHz5NvShuK6hnp6ujr9nD5zYxbTL6gqKJX9S6xew847w6YLDiGrHSzCHA2TWrrsi88sjJMx6ynpSfbcj",
  "key26": "2q8GmWNjCYKj3d5TQZojjyEM17WHV9dqCUPk4EPJYrBwvzTsGzcYR81AYaCMtiyM97PtbGJ7NNeHztbgigTknJjk",
  "key27": "jLaGFCHHT9F2RWf8mRD1BBLtpBuKCB4iiDpH5EuTXuS8u7R6oLhUVF31XWQUtWyUF7qhATiL9eW7h6BHSn2Uxyb",
  "key28": "5W4Y2RgUZ3e5YZzAE9Pv4YKa6FAa5NtUJnQy8kNujkQfQVy6nNms2CqpXM3bKJtLNiindXH94zcbcFZGh3GYhF1a",
  "key29": "5KiBgxd9imxcaxAbmKbAsKZEbYQXpqyffGTCdTrViR17W2deoFUdumeH8KuYrpRhdDX7cxGJxG9Y4x1q3ySdW6nj",
  "key30": "2sWEPHpXrcvZL2tqBFJocK9SNYa77X6tBKwspyAbNG4EF9KCZf3Y1ksVs5t8evXYjqZkjDmZwbegnLr2qhj9cXP8",
  "key31": "3Zc2btpH3cAUMoQijw53U2DWByAdUusuVpjK5kcfzxhtWX8gCbV4EkRWNtcHACSRDRpfLPRWBeKADpjrgF24dAML",
  "key32": "3zLnoqb2ecuGvoHKH86JaWGigrS2ePy1biGANFbJtT1NU5fsF3vt1k7mwBPpKye3HLESgeSgwSrhMaCuztjeQzxC",
  "key33": "hgjWHkzXiPte75mE1rsXsea3HCUnVR2Wcfzh6WP9jhncD2zq8MoXKDYZAHDTDDZnmW4vHcf44bfbcMbiPh65VvZ",
  "key34": "2rjBSYwG5Ph15fWjvyrjZxfXaNpG2Ne4WfEdfdyVnXqB1q1BjFzEh7KT5bustbhQuYDYhqzCZuNHx9YPSWKsjvWF",
  "key35": "5EjQbJCFK3fRJcwwfg6d99dgLPHgvVuzUbimRRJQegkwSaBc3fmQwRDB1JntWM8Gsu1GqGEf945KCkTRHYjY4GkL",
  "key36": "4iZTEkdYHqB2nNMXLFp9ffUaLtY5UQ2oW2L7FwG7pD615xEbuUE7EXUXQJoyo4RQVTcT7mCd4mQb7oaD3KrcXMDM",
  "key37": "52gr9e8FPU1NrJmFJgAoj3RbHsHguXgZSUJG4d1CUcfqtVfBQYqQWcEFA1uJDhASkXQdYwSgmmECiyR8TNxQzD9u",
  "key38": "4gZo1mZiDhmFpbdzZjrEaLioskjiRRvDd1WdPDMtcTMamKP17eERRo8Zro1qwfJTFpi2fmvuSEiNGJtcszUxKyGh",
  "key39": "b4j9R6LcXNaviG89FGqScELjo95xUkpaviEg5WMu67iKb4qTjFU91PT2mNRGquzFJQS4RjYd979eJYT2Rg3HNdB",
  "key40": "38tUVfpLWZfiN6fejPMZihLjzSZEaMLUxKXXCnWT1eauY2ecBjviVY9LExjxnqzuKgAVPNqSbQWXX7CaytFtgV36",
  "key41": "26gEeXgUcWRbCqxxrWSEkBUkqhSp25cjjLjmAjHMENCsK11dyGLCMFyPEDf9U4Sdwi52h88Q6DpGQwbbnPseZp6F",
  "key42": "WJkBsBcTzJ4WGZG1y3p74TV5orCcpKtPxfEQmQzwK7xyD4iKb1j4mtUx5QfjKLpXi6bHTkVzr2T9M8ncym63R6h",
  "key43": "KGLqu9wcWvHCwBe1zf8gsjUSW7LnVSC4JR1sEBPF2E5YgjHVoEUWKQTrZUvL4w1D4SHaYq79DA4ji58FXBobGvq",
  "key44": "F1vafZCNfsYuayN4SNGD9vT2xLx7rqTHh5Uj1Y1EiXuadAHc7t34SeaKhnHxwSQrmQsiz9iBpMfMWWLvTgqXJBY"
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
