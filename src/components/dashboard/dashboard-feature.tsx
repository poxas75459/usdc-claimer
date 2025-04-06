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
    "4mVAjeNrkBqbR5RJYB33Qx952DUFMwQ1JuVUm8hqrXcipFTHQ9Ju4msNdP8hTwHju2mHzfVLauogD5ze55MqhQpo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MLD5mEpmQdqVuhTbTZSdSCmb6mXZicpbLPeYB3wN8xjAdtQn8mAnsp4Tv96v6xmPKJM1XWgwDNzsww46W25bWAi",
  "key1": "mBK91siHaWCSXBXNxewEir7ynKB1aEPMYqcH2LGFevWDfncWrmU41ZDqs7K1szttN4evKmbjAexdoGgt6Q1XVgk",
  "key2": "49ed2K9kKqhoPPyaJgYVvjmzgbpwLetjEWkvxTjvWUgssu6TbVmTECgMbeJCYyvkKLjrrbqw7Kx2jRDHGyWVdJPe",
  "key3": "5QNST5qxXTiCzUuV644bcP6GS8zx8KYbmwx8kYxmZxoY4H7cYhPVBbpEH4R25F6Xu5v7PEXqhjvpm2qCUitozw1D",
  "key4": "5X82yqBS1t9mK4hUfMjB41yE9ceiyAVPdNsdAMWX4AYbjVU4roAHSzG9PDeNTFnP9NDsrSfA6FTim2SA5PGikzbA",
  "key5": "559LhZL6oRxYiXQ6wFb4pK6F5P6d3bNLpP6VswcnNWCmEV1FeMgM6NLzLAr6CsYvjXPtzPLjU9hnBxzraGmLJKHz",
  "key6": "23LvXnpMZGFpFxKknzvPYu2RDyCZAAWVZxgCYYVeEGADNpR2rH6n64AyytJ9htGFH2oBX3RaEyE4j44qt6Y3T76z",
  "key7": "EoCnncj98Q8XqfWsDPWWCqsuGmv57tAtavVXcco2kP1EqF6PxmZpGTmHrDi4PbKv8eWLZW5v19bVEMJJ1ZYqRe7",
  "key8": "29d9rcWvw5QNZKrj31otrN4Cjf5jZ5cBfkzSv8W5hqdd3SfwCAwjPMkmi1kdmMmYmKD61WWukBc59CDSPRcAtrWd",
  "key9": "5vdSWucoUoZw728rN7b1jfgPYC1t6uA5BK8naKfLx5nWeSjW1VrLyEixSHj5yhWpS2h9H8Nmd1bnXvfqnE3eZ5kQ",
  "key10": "464Xj2zcDrvGbPi7EsdizqPW8Wwe6FToq8SbRYu5JyUKSdHm1msSkfEPQhLRtE8WTYbxjh3QkDP1enBF1bT4Xm1f",
  "key11": "en95Z82qVsj9n9kJWWePCeSFEBtQC61uTkj8yrAqCNBxpRSV3PLdJMaBihsNBugb3DbEdDJmxJihGZn6B2gBdyU",
  "key12": "3wTpmdHfyQCdpdUgc7Ap2wfBDU3C28ouFbrKgWRtA1FTunoL7jY9J8J4otCLcjf7UWpe19fUeSw1ewGxo57r2E53",
  "key13": "2zQo2htEiewJFbjbUHyYkc6vzWRcGrCptunb6L7WPLBSMFHAyvDo4NVUtZk4bQ1dYgHKAFQvjxeZcE8kUN3d5SqW",
  "key14": "3w2t4isJu6KXtsvsqoMwCnBaXWiRLrLUgosqSidKBU7f2rYNcLpdn965m6PDCLU4q7xSH87H61NfDQQpmv3Zkgop",
  "key15": "58UP8UCicopdfQctvYpDnVXcZXEyLrkpPwfxiBbua3sAW8hAX3wEmZ3R8ffzpcPrvxyS5ecef6AbJnFXKNMbdvPF",
  "key16": "5A4S65wbSqsJbTHjFBYs83b35wujd6JrfjAowAihxJUvEhtpjTHZ4uG59baGrLcTphxsem2kHYTV571ZVjEZkWCX",
  "key17": "4GyoR9ywni4a6pFTQqoTFCWSNSEAoFRNjBtsPbooGw4oVecYagxSaP43kuyWbfXEG3Yawkk4Tm8vjQ7rDyWv6GU8",
  "key18": "hwAwx7JtZLjmXhcjK8sDxNBscbdzXjrMF8XKAWNyYTyEyTdLjAv8yAUob5zX3Fg57F8CsimD9JQV5yvtLu3iy8Z",
  "key19": "4EB5UnRF9mK5srHKkmDZAmZAe2X3qb4ABbNEB9qsBtGg6ddEVZWfd3H5pCfUU51Xb2ddY9MwEovGHPQDBDaJy4sS",
  "key20": "nyF2HxnotZBYu4XSYY598ztFEcr7VN8q7Pkzwgi5j3bqsJ9uF2T2fMhRzDC9yhyQW394NJdR7dgXiaMFNrws8Uk",
  "key21": "46wq7gbKZBvSXLQHZw3LqitegLamso3MdfkiWBbULKvU52h3tWEkmZWPdSk2yevGffKWeRK9WU5GWTrj1okaR66Z",
  "key22": "29BhzyFcyNVMuTaSQVfZyxfEupvuz5AvBZba6dLMwxzPhSef4uXeHQvjpBJFfb3u8bPBrQiKi2uNwNHi1KBBs6iq",
  "key23": "5aRfeLe91AALEv5EbPo6L4iRFYnVfyT6SRupEKzkjbrcszwjPUSNgQCa36vbAMCBDhUwfBoFgFBjtpwTRx3BVFsM",
  "key24": "5JwbNtZTP8PxqxA5XYbZVa7M1QzUjjLTJnyRQmMV8eeukAatVL3tHHLWTHphZE19hZAVMVMXr4m7qA63iQioGhKC",
  "key25": "r5tiV8BaFZovre27bKxr85oqt3zj6DY4R84wsTfGPeE2fYNePzorL1FRr3RrEJM5qHjEXFGU2uJKNKcJAyafMqR",
  "key26": "2pgQy8qEWtxxPeHDT5MNpMEuYaCFPzEY9N7qeyNmtnFoSSCwUUPwmNZCeEBbRei8ER44gJP3QGyupDrsrvp7cVRH",
  "key27": "5bBcyFREB49uzRJXD4utwu6pzW1xFFNmamUhXScachSYgwQnRQEzTgcNENucduKyhYsYmzopad2uHzU35Hau3Qdr"
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
