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
    "2gGBEqSeTwaqyzMHKyriBAoFPJNA9WedqJcTb9nJAEUe1rBrJDcf8sLkLEGYvHuQmkDbzfE8C83oa9gb5rjf98sn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3U9PXkBmLQE2yRM6fPTkyEyHiVJy566XoN9mBBuYFaFVjcf6jT5LBuez6xxAPhmodsKEF8LTKGu1ojzVdrNz1KFp",
  "key1": "2bhF7E9K5aXotoJckWDYMSiyqvPPm94e6vMqYS8bs7jT7chKFS4H7rsNX6GKve4Ai2oj7HUTs6kcGm8W5CyeQvP4",
  "key2": "5GA7beDUkx6wNVPjGT6rquaQao4Q3eQDG8ZsHxarFRrw6wJi88D9huBU5msYA5ynGKiAtaFHWJpHrFPYTmaiayhW",
  "key3": "2ndP7bPZGFxwDUJny4eUdPnDev5eny9mBv8mgj8UiS7vwLibUU6Tr4cutA2L9nBwnQjTWm3UEC6b4TgtY3EyEdvr",
  "key4": "muPhSiXMFo9yA2sPne8tccH6odrg9hiBxiWayWJzs5xMXzzLmLvotxtkY1simRWmTL4Ah4NGpoR4FNCzsAXUGFA",
  "key5": "4sxS753KV657KB5ks6PZ3LwmBzEAxrwEP4bDydd3bGscmHHCw9hpp1Bm9bEFm2DAMqg541i3ePcs82SjJ9DirM3m",
  "key6": "5LGFmSwTcxz7G6yvUySXgShQWhG9p5o1LXmBMhiBQNfE3h2bMLbP5hoFQQsShQK3coB3sBQ8cHUZP3FXvmkFimHv",
  "key7": "4EMGHV4wo9R93rLT3amrTPYFqvXEUdzhRKYWAZQubS2WH3AD3SPQfGpEjk3z7jAPSupqDH35dErH88s48fd3feKn",
  "key8": "jMrTZ4YeQwBJBTngHiuHza9PujiuwHKyg1mvvmPtPtjgexG9dPzbCGkmW5nx8Xz6Tvakv7YEg3xF1fWq5MWaHpy",
  "key9": "3ZPXpH4gTQ19PisDXcbtYJg2BTQLFKqJTqPffTUFBnjta3GKqWBrm7hYxSF3N4zDqEiQqbRozXiV2kgR3kJxvbjR",
  "key10": "2zLVziEVstD18XPyUpYdXjvjMKmHEq3MNfCGwnmQygrGn67CNtFsApPPJrGWoTccyYg7D3KGe6roteN2dNTJS7Jm",
  "key11": "3bm7kEYTiGdnrUiafENnKKBk6qR1PKEeqiBHLj2aWBWjBrvmgw57hAP5rLs2zyLMJttEhHMkw5bSXXBBPwsHKtdB",
  "key12": "45w5495NcEi3JT3jREY3x4BHTF8H96CC7extySFt3xhNsh1TwtSbb2UjsVkqHjJ4wb8tbRxcv7cm3ej1VbAZbXS1",
  "key13": "JViDNGhqngGjaync9EFLRnczYShKcSQHn7tvo2RUaWDXbF6dMcSzMN3qbF7MCRWTHnKcz4M8hS1RrhxHnyXtFoX",
  "key14": "66MqWW3AcCRXd9pKVtnZCnravP4Kdwhc5Lp5nUhSZqr63cjNwwvrKMoTk3ajrEBEsMgHzRdFdLQ8T9Hz4QszQUa3",
  "key15": "AunkqidUushUyGpxZZApEW2c8eknzCKp7Qm6nga9AwuZiD1bzQpESQ8CsdNcJE62G1qQ3GUHLQUbZUwtTH9TPJz",
  "key16": "3KdKxTHQWLnc6vTYyuT3ZTnTssWuSA5utkahUfagg9dEBZTZB7Ws6pcpLRTXNxeN2dAnh65fYGCmrHtPdBurykVs",
  "key17": "5jgPWLdx4G8bx4P1iWy9DFTktNRu4UPhHj6NUJ8twDVCXb1crGQLmkGqS3tFuNyXcRNLgoYEHVCCAPMELYkKX3Gn",
  "key18": "2ubXgc2zVQGefKcykmgsDP71aLZC5DZTzYPE9sACt2XoTYroXDCtyez8LFicdJobx9b4VBnE5BLWzyYc6Kryw6Kw",
  "key19": "4D2ZuDhDfRsJGdNYdQ9q3GpMz54WBZXCiTVq8zxMtkSznVBMf2ZJKDA43yaMSBMQpkBE6YLNWu3HUyzsdqQhk96b",
  "key20": "2omC4BTApPCqmV7FfCtsoBXYNaxCH3X5nLHzxXRndecEu9oankL6RDtATY7bTyzY7C1YNkxQxXQUPecoX3XmC7cx",
  "key21": "Xa6RrmZ7W5sNFXyEv9YaygUjz7xYr3ruFKLjekqEqoXne4ZasivwXMd57xxDijEi79b1AbgDeofgwGxb4b8UU4H",
  "key22": "2Fdfk4udZoWYjFZo6j5tKX7gM9GYkxj3qZpX6jJL7GrKP8qbxqtotvra4X2hDdMUnkbbcYJy2GMzBUyRUekRMDXq",
  "key23": "34JKGz5H3hYLQprQE15SEUhNbMF9H62yWWYryGt9FFNkw4vUP3CCDwJwhMkqfKj4WnHZg61ZsBQDCYUbHm8TuJKP",
  "key24": "2eefouPbaF9w8f88x91JKHPHG1JJQCRMQE9ny5DdmDyvF3bR76ybF6MAjuRic7mfyWudD7rzDELgr1G1rQE8KnRa",
  "key25": "5iPFDBmdFQXuAW1RZb7zmP2qwtpEmhiEGza2oSkA4mNjSHfjjtXtSgbeZj5EakZZP4FwS3VcDkfRQFGWQtvgsV9j",
  "key26": "3FcgZ1x1UzrJmi6EDfmRqEk3PCYKEaDRcZDHkNw4ubQh1KPpYigv1K2Vwn5wkthE8BKBvHQPjAABgZS7aoqUbpSJ",
  "key27": "tUJcNXtkigx2E8c5T6tAxf7UhXJ7Y78UFZTd2VSrng7qQq24uqLbBH3LYnAg4uQrq7uErBRsziicguc3xSaUGz7",
  "key28": "4agsM94tmEDJJJbKLByP81Pmx4pCk9U4sKfCRRETRDUwvw7xg5Khv29c4dDupyj45phZLw4ginTfiMBbQJREqJoj",
  "key29": "4je3yCYS8udDYaDx2ba5QJJTPLahwiVo4p7UPnpzEHNFXCiVgL2LyQwX6rcyqqxrRsYp2yeLKo139Lxkw1jnSXgG",
  "key30": "CjvXiuayKcVAvm1m473m7aG5phGD5Lo1ypVQGxsHDA5gtKCRUbKHb1VRzAwvk7igz9Hp93Qynkr1nEgBPksFAjn",
  "key31": "RB6Gy3S61BUsGhyYE5SwNW3HfAJQsjARaJ2RX1Ux2fm5cwCue1xhaDifL4yaq2aN1ZCqzsRYQ7CV1pWPA8aq2p3",
  "key32": "5BTtgDhnmcQdd9GXUfdoxLtGiEcrjUZcCzYuTEcdWJdw6yrSNUBCVmd3XLZfGPPL3r6fjua9jQf21nJPXXZq2cvF",
  "key33": "56jThY5TErnpdYxazZQtg8B3YnNwEcjjNauNFf5kVnxaTXaFJWmfLcj4nkao23bgJyMdp8sqzx5UWA7pM3YjNAEy",
  "key34": "2wVQrQaXcpxC8Nj5vJSANSNfnatc3keFvFphRPFeXbakobHbzvjKeZp8JyQUeiKZkQV9iGB3cLqtsZLpqeMuGw5w",
  "key35": "DcL485ZtZKchq4Zee9Hp5RD5cFf7hfL7p9V3ahvRNUoAiQTFzuDZM95cw2cPfVBVvtraA1DzaTwTvC8Ua82MuzR",
  "key36": "3t9dc8LmFUBmjbFKzcNe7EaJEVyeEDtm9bm8Yazna55bkLVtPs3tRdP5h1AoyuFARoo1qXBxL2Y6qVKPwdQHYJBc"
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
