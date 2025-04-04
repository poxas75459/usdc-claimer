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
    "25QSCMGpisghnuFVr9uDqhtLvmZm3EUyTqTs6UzV9gfJTSC3BbJvH65aM2G6eSiiCwd6UPGpb5eCuKV7y1rYraqg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rUWQoqifFeVuaPQHuq8XKSBdVZBarBzJgS4rJGSHuZFJ3iqzkoc69cShkPehVwkgKtjt1S1RhSX5J1DbH4Wk4Sb",
  "key1": "5tPyoTupPZg8ycB9HBQ9bZUGJCttzXNVK8E1nhTNBcaLAHy36xceTBMKtD51fF8hym91YCaohW6cbXgFmuhr2NfQ",
  "key2": "3oNC9Gt2s4y4yJPCmywnm9Jiqc41v3EHiWjaYZRb4fwoLoWhkrWfzonLm5adQdeS7DgPP4ERdr65nzbEmJpLj8Hs",
  "key3": "5xgC7HnYTTMpjaQshqebSs4d13g7Em5UdBUrDRjfiDJkeuw9xFQQmjhVtG1o8SHQ5t31wuwZvfaccxkxq5cWRXZo",
  "key4": "5iNJtbcq6JFiTNdyyJc2SdWssD9JJXawncxi4d5oSUrrbVpPkCMNHECEMSBwSVfqZDyJohCSnC5fn88AKba8ZJ7Z",
  "key5": "dQhzk4RMYMWYRwjvsVS8izvVLD86oG2421aXjhZxmFrR5cRo9DGKkVRENVSJNWu7nCCNHqZSfCuV1MEr32L75VY",
  "key6": "5FoeNgbycEuefoLWLC6yuoiBL2RQzNkvzbXHeXVaMa5pMuEfYJkGfgURwJg5dUMDHuDDA8QEnF7KxfJTwtAbPoLB",
  "key7": "5SnxZKP1ZdgN9C9ftXfY1GxsHku3UDboaQpAPMNubCY5KudXY1NAPJjVkPAQvEVLUD4CSpykobeuigGtKjXiQ96v",
  "key8": "4fuXWZQpL6Uw64HX68G8jyDggmEAE1BggChNz9S7t23zfQ7gotvTJoDNEQfWgSZqxZgbvTMtPAWjN2YsywCQEFML",
  "key9": "32nQMtF8WW3aT7uZdRHtLUdxQTvKbLbJ1dK7NHpqA5VsSNGQEV85kaAiH1R7FJThxQDorrdzTgBtSybXNKgHXzFK",
  "key10": "gSj4KFPGkZgfzTL4Jekn9RZL9ARMJ2XoNHLUipugYbfsykgHJNzSMyVHTfYUqN4FhVa5mepxuurSeWnSa5ap56J",
  "key11": "31TwwnzqYRiiU9YRQX5AmC7LYdynPP9vxJ3vKdTQBb9efgg3APZzRjGEXa9wst9hJsRD3QN2VzfvcY3A71V43rrr",
  "key12": "5LDkhKEfpZmE5mdmFbPfPKYExvJ8ckpEGmB8ZQPFrFbdSYPtteUjPx2is4iJzLFm5Xt6ZTKBZYLL6huRUctEx74r",
  "key13": "2NQr7mZGmrvYajoQGeXrJ54WdFwmKXErvzehKsaSSkeQBHC8vZXTaeBQVnM7PwHab4XChpPpxr852tELSsHiybLJ",
  "key14": "4VKh2bDygQ5p7myUfdkmMcFrW6MT5Lni1uNMB5UMp8uPTzid2N5zBBs6DjUXsPyKb547YVTW5ZpozQypUonYYYQy",
  "key15": "4sSXuNsmWuQygB9pbUtFaBJe33fwApQcFoh2nTisJQLLxQAt8M6uxs4Hj5Y28hLhHfenikJfk9VaWfme8m8agKLp",
  "key16": "5n2rDFV4U7KWmm9fmYgdUJ8KSjzgMQkiWncfvRaATWwMmzVcPFsfbd4trpDsJRNcB5cTmtL33s4wUfLEPsiDe6JB",
  "key17": "5n96fwqMWqdYSePLELqYFFWnf6nsiKKcwxLY1yqnKvhVYSHsMzKwC1W5VGHjqZNwj6ftVRScT69e43c6say1h4mF",
  "key18": "4jpBLT8ckHyG1fjERm6XZWKxX7VRwSwx1WfDHdMCwMm6ZNqvrsDFdFdxWBGVr7ziaTMYnUTY1VHMG1uYuxHWs1sT",
  "key19": "3p9CfWrveJSaNRFt2YkGPDbo6bNPpaRuJe9S4CSTXWLm7vGUu4UuUK5HejradCUXcr7ZCx5yNNFMuZyS9LxLhUZS",
  "key20": "4sL7Z99geJ3oS4VUruUwWSKivW3gpMCnNX7D8W5EhHyXcqmue1UNRaGbWZJMRUNiJM6uVKQVSoktcKxGiCF5g3FC",
  "key21": "4JwSRMUpbsa6R7dgy2mX4KfDwYqM9LWFUuHh4EnQA7g3rNYebycWvEvNfXWCeYvKvxDLmy3tUj1cyJqjCiGEkLMw",
  "key22": "46MrJdk3UXjcNSFUSyy4cdQYbc36d2kzfFz29v6MMZKmQAZigKM5chtJsWqr3KTyuEWFKF6AY9EDrharVdGpohdd",
  "key23": "sEoawqCxvWCss3k1SabB3wd5UDyz7kaBmw3yVn2dn9fcMbwDBvVGZp9BBTbCU5dyC6WbZBPT5GRhALsfj2ecvZ1",
  "key24": "4kca1ECzhk2JuvkoLXzFe5GawYvaDfH5WkMwDWvmxtjzXqAtfTiMg1EhCtRvjf5jy8EMwarybMmtQHc7wB4heX4b",
  "key25": "22eiJTAh6DUtwHWJMLjFyTzW8wLmSTVcYVRwwUoZx5npg6t7Zc2Ysfw2TerMecTY7qCnMD3bRLYbEfsuheZpqExS",
  "key26": "22c8GyL2hePnZsSaU9bGsB5r5CpocD8z6hh733Q7FDTnXzadE9N9Pvc1qpv7g6ZmdWbXEyAx9c2FCWuSFioYyevn",
  "key27": "4EzKdbrqoKqN1STiMEqM3rXt4EqqkeFrDcwQaHN71kTYyKsdkckg6DFeE9jvv5jbtqycP73sy97tSq4B7m2gog7R",
  "key28": "24crLw5pXFSrsQwephAbRJrBFXwupvxhGqD8BVHykpbi7CZ5BvZFQbSEvNWdpJo9VGy9w9Nvx3xXtBQCGDdrpqsk",
  "key29": "37m3rUsCKgRg1e2GtVAAMeFLXJds4zQyPeE7kEWLcbQsyTPoDuraxgXRnTWbafWC5wCjsk69xdBheMbWuFi6mPm",
  "key30": "21iPFV6vHefAp83tzfudebcZmKyXuLnzKA6ucd84vEdMgnwJQXh3wRT8o3RFCuYGYjc8rF9aqqqPPRdwQqR7dReD",
  "key31": "3azotiXxG6YaFNDVzaC6hx7LnHXi2R2jP8MFWWP5xKRvYwsHtUGvkJeK4UqscFcJyjQG7ADVKJJ5XNKUqWCajmjH",
  "key32": "52gTGJdcswU7kM2z38C2oEcBVnmQXZQyH3AyiqC3ZXBYas38X6abxsM5dANmkxH1uycZLSTKpoRtmKdJkwvmX1uY",
  "key33": "5jT1vp3PWE2TpgnXeKbZugSZpigvP9sniZWtPnjvQoNdZbMsYV29ZUJx6d1t5m6Cgq9xtN3scUBWihykknu9KMNy"
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
