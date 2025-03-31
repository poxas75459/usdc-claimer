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
    "5MWdqLr8tDnY5CafQANwuRGhUGMAJWgZ9bimHF4QjC2xiqbXZk9cNgocwnQzZchzmaJcvS2np8T1doMSYD7K7Drd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eeJ6DZbY1SHVEYP9DaxbMZJ4HHPXiPVBkiu72xYBzc86dqsCWaMssKZNYUSDCigpVkPRF83955a3HuXRvp1dHPs",
  "key1": "2Ejp2ajGYiPMQHe7nkeXhnoFFmwBgXXj2LdqVT5uKpFP83acXJZCS9XaEoCEtu3WtNF2U9vajGt7eXMEEfet3Pkt",
  "key2": "3QoVK8PjdvZBfo4gt4idQq1hw5rytDEb7cKLHvDVvr7d6rEsSA3n4LcGd5npqkB6EsgPRQzJ2A3WmEUDuN8uPz5z",
  "key3": "2uB9FzErc5zhJJuQZptXFyZfh8U6VgC5eFGa9WUUhNzd1owz3i5GctyXDfs2dq47PzEbNiH2YaDzDRtnkewZGMiE",
  "key4": "oMxPeKbg4yZZHex1zt4bBZdsQ8Ab7AKBFrQPBqiTnXaoUjn9UVnk9iZu66dRVKhXSeQWbRt3LwFg1XrpDZy1Epq",
  "key5": "Ftt2A2JwMdp54sG9PY1Nvz9s5oWoGUVmee2BmsmtVa7ikAS2KqKzJzn3uYS7ei8FAqTZ8gwPZLHwq68cPJZvf8U",
  "key6": "5aCkqayuXjc6F8Qp5eC3igSVCA1mhv2myh6Etxr8mzvv3FT6PnYqv1J3YqUfUmxVt8hPFtoaf3oE6GZAtwk68gAr",
  "key7": "2ScV6SdKLohZawh7yJpR1UbXJomNejG5NVNf6R7hUKmHhCqkAoopaZDZa8uRPUMP2Hv9Boz6kHYBSkesNBLeW97A",
  "key8": "5f58ArPpYf2Ty4sRwvNJCZNQcxPovGsF49iwgVpVxWEzoi1cSfA5ScSvRWuDYRU4aBnaXmz7YqbxKjzeYWW6eVLh",
  "key9": "w3NLtDWw4fEphCGi6oMagKxx2eKwSyHGaK8ETXY2hJsSYTEGNVeq9SDXzxM3xVUwiZJGAag4pe9HuhUC6c9RQx9",
  "key10": "5XRUrbE8qyJ1hzNQGMxVUWBRupw7636d1fLixU8Rrx4fQmhaADsyCwJXaqHW6vfa5kFW37mMujJALCvif4iVGr9B",
  "key11": "6TF4MtFykb9cY6e5tW967uvV7pqLSLRohBJZuLrKTmabSdpXMtgBgHqw5CztJM676yxvmjQGa1Yk2ezHAAzDL1H",
  "key12": "3HoWm6j8AhVZNd9d6cA31hCFRygiCe7ZgtT61FiXpfTjGz3HwRqpiemYdGmjq1ynFaM9zNSBFi4Q6iSPb6Gev6Gc",
  "key13": "527ZCZhy1H35D7JJkXcXS98o4EdTLKD4BqZwYJ3jqjx7DUchbTCNMnMS3kc4eSwPEQLKRrtBhXcRBBLJGYymozv2",
  "key14": "2P7cK6NmeTcnGERJTbuEBUVyQSShJhg1EzHpp3hRJebCHbrJajPNPJSSaEXLZp4d5CgPFgSQyhEjLMn6Yim7MyyP",
  "key15": "4zFTwnajds7xbP7tqJNxpFV7xXchXtLhEy9f86H2yKPL2RXu1tQe8YAdeLKb3Azv6SV9HzKJewWbVat6DUBCGA2Q",
  "key16": "2XenF2bYPNYDUpB65abbi4niDSL43u9CgGGZwty19CGCoJfHpiJwyxm8x8y4UyDrB5wgQs38snaU12yUjvTdULW5",
  "key17": "4o7WfcaTWaSEjh56Tcu5adMT6KnQeWJb9t8TiSj8GFvxRCCqJLz5ieYTL8Ruqb1fNbGrr136RP4gGoBKtK9R8xSj",
  "key18": "yEf57c21yWM8w7EBE2pGSDMtk9Sg4gUvcsAWqj7g35F6pXUU7Uof7MceqD1czwfz3K7Q7ruuHyhSqFw6kSisKS4",
  "key19": "4HissNrDJU3BJDQaF3fFUAsUpYEHkGhwGhhuJNK4PYv2aGrfxScB6M2jiMTk2zBYTtQtGLhnhU8R8oQLgYqSfLDK",
  "key20": "7hguvu5X3KRhYdqVaLegJPuNWoSrRBxVeX9GxS48auLSow62vmLkq4xpSXAvpt3vES5LqMpRAscXtjvwNR4tZmm",
  "key21": "4svRYRxx4YGZKTjENPQ4nYgj9CSL5BwNfKvk9a3nSNbWEuqVo73tpTz9SjP31TJoD1U3ouRvxDAS8jnVk9uetGAM",
  "key22": "227xx7pj3TSHVYnFLbVGS6gcnb5UeCBbx7PVu7oDkSqbH5qga1YiTeWCoJVC1CC91du7Dy6JkSuurPej6qnPZbMR",
  "key23": "4ca2ejEuBFJrCRaTKNSrzvPJf4X9v79uuJNdYzPxrqzpBPUSXQPX5MSUcALXYrD9GdCsknDcGPvJxufiQm5VwP2G",
  "key24": "55bf4H1xDu2vQhjk2UisUmD9dfgB32UByed1EWJMyjxNQQ2okzgdJEUubWxUE4L2XFpV7TN9kTrVEzjzzquc3Lfn"
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
