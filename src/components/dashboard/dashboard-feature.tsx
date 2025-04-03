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
    "ygDXyGv8KuFwHwcEAK3fkKAFeJxiWL2eCZknzvyn34Y6YJu7RE4ADJwAfLp9TvhXjvgaYThMpRfmUQAggmCUT96"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NDLk3PDxchbjRwDnzMwGrhxVjdJVfdAPEmdQMo2WPJbdgsndXiFWgEETwuufdpJG9YALHQRU1ksshn3Nektbrog",
  "key1": "u7RfmL3Bya38oeZHvkibYSDkfiTUNYaPoerQrbC5zXDrEdfHu6un17BD4kUQozn1qikKyhsQm939p64rsztm9VB",
  "key2": "3jZpJ9e4tu8LEkd9eQdu2pbauA84PDiGWWKyfS7vqVyZAa1vGDoXixaQ1BfXe7ZKrGS9MRvXcZGpjFYgPeWcdiax",
  "key3": "5w2jsXvtLUhSDZ5PVLM1jdAubwoMpt2aFdQCwU9ny6YQeUzfWL8FG51RBfvMgbr5CdPRLomUsb6ddjEtpqBGwmuX",
  "key4": "5ArgALBZP6ge2VQU6HWVq1fiGGneZhPG28Rei7NuypwQNEM2rWDxhFsSvrjGm9qXimuwmJh65Ff3pJKa42VWGguE",
  "key5": "2kShdaiG5Asf1uzBLP7aWmx9uuf1zjr7yrgqGAPFy19VrFr3kDS3GTDAmwvDcpXmTF55sgL4fze5QvSkpF3HJRo2",
  "key6": "4C89AYxzHVWDpx1WmaHBsif1J6mPJJ8fNmEveLLjjSrQv5hxjz5ci2eScULFnjcwhFSkDrcvmkpPRD5FKtu1yU4u",
  "key7": "27vJafAkoj9T22NzvmaoJuVR7ZC3ht52nmfCf63zYi3PJc2ckyz8DpX5uZvkwzm3gYUYjY44nk1UuvRoCEF325w6",
  "key8": "3kYbdQGkTWii74ZBmABgA9JW5vrCka7cWzA5WwibTxTyFzNrc8vkDnP8G5e7GY53oYirY5Ew9uDgnxt2PfyiTzzG",
  "key9": "4HPJovgH8ubdWtTpaoaUtxgkpjAZvPAagkcff9ZXhPjwUYjxbxoThXFkkZBEa3MH1vfJ62PNugwLDHZPSda7pvVD",
  "key10": "3jZEN5VcrzWkQHQqm4sn68m8pQujLEKeAbi3ehhRRh59NHBhpu8111GYXPehA2YDeYUUXjGov43vPACwZFFD5AdQ",
  "key11": "54rD9v8Ksgc41ZHW7YQ8frwu2wxpTC8CqmYExiKQHtByRjYrFfJ1UZp1SmeinpHcPBynsCqs1MSCvczxbKse5VT4",
  "key12": "3imCotvrY8H45TkxQQ7WzBTvcCTM5DQbeP3E9wRUJ7BiYrKTAbVV1iAvaouGqf1yi15vcCUmEVjqXkX4zgfTqUm5",
  "key13": "59RSqtAmmtnPPhCoGWVsMDaQmXst7hvs5Av9DV5vwyj3dm3QosrxyTT6PifexuRvTwNpZgxoLVUq33MEAR6Kmz5n",
  "key14": "4MbXiQRszHtkxCgY2RDwKkNx87WUcg5M5p2zGagkELUYKrk5Vih2Tev9WNQf5GfpwjD2EM7xR2SNBDShkkscFxZC",
  "key15": "4ihcG3tHDrVXoUcz1ALeoZnyxbvTkLtV31iqqd4gd6stme4XoAx6WCV959M8TUaJSZkJgZhG1hQRoC2tPyqjPifV",
  "key16": "64j1G6bQfTxFJaBwhGLVC4fTNXK1MTpQqYfWgxfLz88JcnzFyiePDToaFF4EM3UfEPcSgYHZCV6EvHB9aNPwN6Bt",
  "key17": "5aDEwC7769vz4WJwQb58nmeqNi2A7JAmvc2zB8nyKcQ7MfFJxGRAV435xsxHQDf77NeyXUBjwbN3acQSEkvf9Ckp",
  "key18": "2hJxMHDrcZEjppQtXVV6crKKK3ZAWrRPafV1DPdVa6NVMzCv8BRt9iPXbmXtYgSLtB46DWdS3Zb14HApwPb3Q8aN",
  "key19": "5iwnNgdznZVUoT3VTBmB6wrqbmTqW3VLJrhhaBJ1bFFL4akqDrxwGKNcQRKXFNoNKPEn5y4cAnaNqRXtKWiLUPsc",
  "key20": "4R7nkMBMX3FMZNphMr5C1hm9umapMxnmjq1Hb9guGVkfFTVaFtvnb68kauAf8R7fpcxQfTPPn8YVDS4BpKFDCZB2",
  "key21": "62MVfBHVsKWcPLLnxhzzTdWDXRjYrnyY2pnaMCo59pBphq8FhFy4GUazHsJkqnDk7kCtasR8sSA3ySmvek2SMkhy",
  "key22": "NovnQCwFcppXBUrNR8uzYLQDPWHPSETWJ9CtGfzRcTRauACbSnq4ESpqn6oJs5rBEV1uWF5gwKJFfTLzppsV62w",
  "key23": "4cb2nuPjn3SGtDqszAXjXgzfmR15nswgnMdCpBxkTzcEG3zQqGVEziK1jxEXSKyP8eZKysXfS2u9TiEPX2MSCyrA",
  "key24": "3Yn5R8tqctLEc7GZkQ3eA2c6ptVAV36pgKKLszWCpWfmMLJsv8vuHzPiSHGLbduFBMfPzFKT3GNuM62D3emVZNmR",
  "key25": "3AUm5P5mrkc7Cdiee7juamLyKCouzpMXtvHgSaaYfr7tWQvq5VBsFSMTeykFwWmK1AQJKgSJCwCbgd89Ga7XNrdo",
  "key26": "5PYmAtETdziHS9zzKHyGidi6LKZmikUpkvHXUEKwHv25ybpS2bdcidU7bsHVfbsEQ2C4cMBUB99dXJ7nCqzvwvYd"
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
