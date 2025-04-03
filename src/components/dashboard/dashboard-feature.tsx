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
    "5aANeUo2Hta7HoByBCygmmXUL485WMATaBEbtFJLsPk8c9kJ3mtp9NqNXLjmNmgKnmVxTgzuRCh2Ku2wyWmGCwic"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JHb1WuHdYrKx8RK1FERQikMa8WRxzef5VSVAuaweR7jacA3NvyhwGX8d8iLAmSwv3Tie5g4j9y7VZQDi3gmW2Sa",
  "key1": "5kupKHpgYjcPgdsnX1rmPGc6n7v5UrDvXd3rqGWGLd6JXJeo3N2eF9b2p5mhz3BPffiS4CWW3j8t6m8QtSLnyEbU",
  "key2": "55XuGJ7sAHkDpmphsHfuUkkDtqs2LXbJbrr6bB832oy5VQwuhLASPV5vnX7e97MqLxQ3fWt9NZzsEjAsRrn7Zda9",
  "key3": "3KcpbxcRnqHqQAvVJpkiH4bo3SQt5JGC2g2heHPkPPLWGQH7qMwng7gk6WFyfi1BBc5tsmrqPse2KeNrXgBwcqUU",
  "key4": "4gyNKbhfhwSpzaJ964jr3oEeS1eVjqhN9AyKoBTwRaN37yETEVcmTjgWhfy8L8j6zGTYhx3JKKwKfa6D7oLwfSFW",
  "key5": "3AEuCoETZs2WbHxszVfU3w1dbBRpqYtvqLgSLPaPkk3EbCgQVmhsh9cyUd2dpkctqn7BTvi9dr39dn2XjrN8btPY",
  "key6": "2ZMmAmXvKc8xUUDaTeRAG9pDXQiXnBYEvWQ69Y1wzHWCjNBSToDXwRgxaQfXNsA1x2FyaBmJ9n6dF5gyCAHjrUuK",
  "key7": "mYtB6Ypj9TnHeEYJZjRYcLiuNQc2hujJZafBCNmoCBQDajFiH1gp5rhKZS4o8dZKuQB1F2TvXhbP4VAXc2nVtqK",
  "key8": "3DxLSL3dEjw7ZgdidjQztZD4sXZGK3EGvpfry5CfNTpifpCyyFNcU5PersVn9vfo2DH64oqJq9oCZMZkyyMSmsVh",
  "key9": "4H2J5QdNjBjcCVnAYkN3gFnjDj497gsDVAqdjhjJXxjwbj3JidipUFykhMVxtCDYG2sN92S9GxLMsrhXaq5aCvpW",
  "key10": "5dFJec8e1bAfdENN7T4WdJ5Z87rrYMsJwRL9j8a8qwkCf6byQALgLfFobYoD5FseGgXR9x6AK9Z2EEFdsagbDxyy",
  "key11": "tQqP5kbCwGwc7Ajb2XcpLKg5Y31k3PupFYKYvQRWFEWnNV1m9KCGvySgSFrtJEWp8GQEZ7VX2zJDeqtjoTQ7Xdm",
  "key12": "2ce76hg64DWhdbqzNDAqrtdEHFRyZB457Kxk5ATVjD6NtzBLjKaUk7DEZEY4tmfbMG2n4LNti4hWSoC5eGbJGKPX",
  "key13": "3Df2thyi1e4mF5NnJuzSsQfy2UoBkCdVAKEbSdVKGj3rPsnBJ1ggZJWGDSGFwzZrCqwEg3hf748Y4M1RNbfNp44c",
  "key14": "55fCPHt2JcjQvSE6WnnbyqCWGURCAvSfRyLum778t9tR7BxpJP1eGp1BvJRLmRajFYdA8M6jccHBc9qfmfB6nsDM",
  "key15": "BYui3AVDtAiLvm5BqXgJqPwBxkyo5UxQ1MTUvWL523f27pzoiwNkNVrKwPKFoAv96TxqF8qdPFAosazosFuTFoF",
  "key16": "54NtyzeB8xLYffyvKyUGrDVn2MTCoabCK8TChTMGZBnvthXCBiwzHCpdqKG6ohATe6SvUHe7z9xjcE5HoDembnPK",
  "key17": "b2QWpWuBUsmdH4wUBwj5UG3QHDdNCybJGDvusYbeUoGrDK4LfFBxo5DBuwpPX9TE5BLYdYQdvwSx4ikk4Sbyb3k",
  "key18": "3kqcn5gWyL1g16MQf3o6EtSWUuq8D18C3dRA26roRckTCMpXqDm98hHpSuAjHQzpMSYE1Nx3nXzJTBmjbC6NHfGZ",
  "key19": "5Wn81MdW6t5LNoKdzVyKHg8DWjjFWQrcKwXDgra5S2Jq9uesgtzN3eG7aY889GGQR7tp6NrcquubnfGHqBagWrxS",
  "key20": "4rPTEUNd9DG1kGikfCh1uCZrqtxhheBaWN4GNM1wcaiSPUCnFRZbXPexkMjBCeNZZicZjvgstAZsd7BVsAHy9HPK",
  "key21": "2XrLxTcxA5FBFGVuHHya4rtzMGiF7YF5fnQv8bpqbs7U4sSGdnxywpNMoCryBUR9TAKS1DwY2LfXeFR4r9JCPukc",
  "key22": "3Dzx4VRDLK51heo7Ktg64kBQt9dPNL4kvVshQcBHkNqAqFYeX2XaZN4ESw9vAxXUAuL9U5rBei3ufAviFzzFdGS9",
  "key23": "2MszKrwumkHR8BKjZmNXtm5LaaZVW8xutZ97dmRL762x33rVCDnAn5MidNDi1zpEjKvQoQRJyHH7z24V5EcjYNUQ",
  "key24": "4fs8eN9LfDPKcZiaDvPocT2hmGonfHf5ZnxVAjaGzu8xrgcWMi6QnL5LyQN1d3pn7biYFq64tRUuaATGmesHMm2P",
  "key25": "62JFCWbRrKG9oE9nX5yT9UM1y4z7ezZSk2Ymeeixbqv3GMygP4U8cem5gFNo5a3r688ju1PNXRzqRENbmjBAQpbZ",
  "key26": "2ZenUPBnYM3BxXgrkKQASJrsrcHvbWWD999BQMU7UT7pxdiD89BefH34V2BkMujUHMZJjU3XQjC9VDcYroU1ACag",
  "key27": "2FPcXVGjbJCUBxxe6d3FWKM7bFbLXDC4coMqnXXZ3aD5irtXUN7Qwe9Fu2irPF22hLTnTGffzEb3UDmJjYszioer",
  "key28": "3dVrmJomkVjoqBTRh7mWzaik18YnyTvEzKvMeMQiT6sByxm4ULYBqjtyRZyDKFKFLuhuTAqPfgjqBvMsdkaQ3AG3",
  "key29": "jeSjrdMtwo8hLL3M6chhPnqJC22RqamoRUjg7qvured5QF2LwHYtzacZMUCHKhtYHQooZjokFqY7YdYixZsWMny",
  "key30": "5RMsN1yLHgTW4zivmg9cDhGd3PNkEY4XRH8Xscauzwqbh7VHHfYFUrD7PGrSQHjHEqb27fKTCBfVuEFro38uQPp2",
  "key31": "5S6gvtCbU7urQ11mvdEYmF7wY1SHZCSohURUveM7xrE6uxrqkGEZn88THcxGeMjCgRNXDdz2yvAnejohx7fWbGRW",
  "key32": "669SzwscwDgxkTDZ7Emx7ZMpGYnQ9nwtCMWzQVeu45xjSthghGWFXQUjEVmbY9x4CHxEKTb9WLjL3HLi593hezu1",
  "key33": "2F8JbX8ceBwWRe6q8sF4idtvyWcbBPRoqmxbfG67Mu5UBikvrZwBwfGrsBWzo9eAbu38bNiPsuHZjA97PKz6W2SK",
  "key34": "4bW91rubKFB4skNLHjxH2cRT4QW4aHqC3uk1tzDHxTzWCfHeocugeHhrZsH726mE8Sc6vdVkyKgEAP3CEu3L4Aii"
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
