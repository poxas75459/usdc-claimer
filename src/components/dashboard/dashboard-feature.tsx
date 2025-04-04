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
    "4ijVDV6RjRpSfuhjU2fXBrEnMrTPhuTRR8pmr2YuG7N72oMhwUGof3MnGCWPskQYLMaV924s1RmGHVAcn7bHD7vn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aoJYg3SDrLnjpnQigC2BnFmUa6rTw35J59so26Jv72bkczYz8BowW7dDuKUWHrWwPKXggXaPNZwn5R1yHNBQvLT",
  "key1": "2vrEXuMXt7jkQqSMLcXyRAzLU3iprhVpGjEFZrSjmZutL43RZsCTkv985pPeEi9M9TrTmaRHofS3LA81TZT5Ug4M",
  "key2": "2yE5a3TzffwDm2LfJGc87aGx2XhBLDfbcJTW1L8LwREk7JKnLB7pMBPPRurs8FtL1tmwB6btdabfibPkXMoqYvdR",
  "key3": "2LBZg5wE9s6jTxEx5EhSeVF11jKKC4D7zLziRUgmyCMuvZzSDAgNw1QfQ2TE6PLs3CgnfZMv364uoVpTrv4bNgye",
  "key4": "64H5LF52y6sGhyb7HeFwfhPVnLuuBuSnWVBbfwhPP1ysNE8XtsQEwdp4wyTrnGXeMf9j78Zb7o5QmaBRkQzoVuEw",
  "key5": "5pAvmJ6V1RSSRxcp1zQYP49piZkuffo4Pspxhv9KecK2LFABi57qrw5r8idt22tUfQQYEScoCoxRZKn2SkkPw9dv",
  "key6": "3UhqxwzKTFFocWcxbDcvcWZdmzAdMuwvaQaqnauCCiMgXz7WNENEyGyTzP4dbrN3JwYrorvK3ZZLDt6HrBRAp36K",
  "key7": "2tKymJN9sHaCjPrZfEFuZTNvvGYKXArdMEvPV3NnagKBFdtwbSdKScCp2ceqenvWF2vfUr4mbqxVDq3GU5FazqLQ",
  "key8": "4eJKBqWAnXykxzPLpZyuvqgFZ7zVpsGRnpyyMj9Th81SpqSt8C2UG95Qp9KCfPjTwCEyrvJAGpB4xZ1UWRHnukKf",
  "key9": "6ADnsGNNZsCJk1BNxVLq2k8MkBVCmFEzHvoYxML5VCtexyZ2pYhj9nG1QfHymMd6bLdFFfpfnzEiBzpJ1mcSit3",
  "key10": "2rLUuTvhc1KrYVk2pJ8x6BuMp57uBEvJFYFsS91hzxX9tiRQRwPwqv7gvX8bqfzteKgrGAb9rXJdZwgo31hMP6Y9",
  "key11": "5ST72NF2aHZmTiH8R4LdkdXn2D7XtaFRJEhQSPQxaJdBC6BrByG95WWTbjPDBFc8dPDfXgJSABcEfodEQaLZXDZt",
  "key12": "pokSjT4xZr9xrwp9yqF1jVYChgWXnKqwyMaMxyEkLApdJWRZWQ1AxhVghWLyYabrddZ7PJzqhPFiUDHJhWcxPQc",
  "key13": "vER8eB8p4t5UStQXqojZ4XcMLJ9nXH32M5CWFGgxNHofqo3DdsfU856tBfj16FkU1mBUXJcKU4siM25osm2ECDW",
  "key14": "29TJbDqAUw29PjKehdHHZtJggjq1VmxLG6uMTtZ9yVLXMUnRUgzdgn45FnKBoihhDnp43NpCVHukw1VVBW5k5o6Z",
  "key15": "7d1ugTsCmFbwvzcFFXGsMDVhCbBBBLskXG4MyjnDc8VpMbxvtmfiyz6wBHedBa2HWfRfKQaExdb5BPmbyvsGms1",
  "key16": "vDckzJiXdTuZbNn6f48dXP3LKHVstousAvZwsPweJ5AbQhQxmuvrYJFHongcSA8Ucequ8Z7FmPtnye2VpST2VrD",
  "key17": "3qNUSrtyq7YzXSNAoRvRRdhUobFS1PLobxJKeGJmKU9ayrTUetGPrCZ7xRR93Wd4rvZcBieLMHby2N3yk9PpMieH",
  "key18": "fuy6zMP8UiVcQdVT4xp7VWCAFDe6DYe7tEo1Yenz5pk2aecdCSUGrAcjx8N87JGUcBW8at1vob1XE7oMWTowWac",
  "key19": "4tZ7jFR9gBKgbhLx9FW8tfHkXtQVTtooFmAnkVXGjQQ7tWiuuiiZf3Gw3LQ6ZXmNaf5eGj4NzmwWiug1K6MAT6L8",
  "key20": "3VeHnkHX8xNRNCeAukdHxRhExLL5UL1LJkvrRyCjY9odp3oHFupbTHHE6uqB9aQgN8eisLHvAY8eYn3GZtTbWawi",
  "key21": "3RVocM6uaE8XYbcwsT9xgXgm17HKgW8i1izFhTitCiFhs22VwLc7XW1KvToZMzyzU1bn3F7avkQZryskzbhckAfo",
  "key22": "pUsHSigoD6LuirbEUYqqsFRrqHu1Q6XnubhPrk3wixGhfAXWYXeRD66c4K16Ys1aFb6P61ocTMeNRrjNEgPxXiB",
  "key23": "5p2pn7rqUahwfsBs4zEEnXVHnVsw7RkFi17dPsaoQ9zDrjwLJijLBCEGmssEyCVv37eNRMsp6TybWARWqvng8rwU",
  "key24": "5mMRPAjmuHc3oBp4pp6CHznZpKrM7VUTUMWBJ2Fg6KYDUPMET3qUx9aceb5hjZ4pjvw8AqRMaYKj4jzQKC7FbCeZ",
  "key25": "7xhC9X9p41qBewJGXuLPEApKL17kighrPWuaSD9G6xBjrRPG6Jq9HzSS8KVzG8sbMRyNHAZMaJZD4mwEEgzeeEG",
  "key26": "VktV1dxiYBwXs5W22cNMoPyt6bENvB2Xwj3VC3x57Lzb7K778zwDFqpUTBwFvoSAVxZwMtmk2DJZ9sMAoQNVF5T",
  "key27": "3UsG3KW6vBTteBA4TSFdnEq5B5X6wxSvkdYVfACk4X7eYtKoETHjCmGYCqVWr7XWs26VNcA5v7dJY23fNbrFyAHS",
  "key28": "33XQRtJEsJ21qHQaT43RGbWULWr6tHUAHRLBJSqqEM75UPjtXW5nxbo7UQogPNEAyET2UMNJmbrUVLDBVwhoALgn"
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
