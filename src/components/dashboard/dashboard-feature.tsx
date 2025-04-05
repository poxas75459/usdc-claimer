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
    "3X6W5VdHi9fkwqPqRzP5MjUjo1geutshzptv6WVkVKNNR6uJ7MDzBLANEqQfqfsnJ7YjUTeXPw4RDsiFdkgs5iEV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QABaKx9VJpwztrv8NzGmxRcFGN9yX1zPUGPxkYWi6r67k6Nbukm4zcZJ8ZrYc49E4gZvBJNMLuFgZ2y1FWF1xCy",
  "key1": "2msoeE4y5cuAQqZwgyjt7KaCkuHZqMSaEhz5FKavMAtx5QuhvT1eon3SfKNE1wDcZCQ2ByhDgNKC7i5WL4cw36KN",
  "key2": "4LDgvDTG8LTUz9GBLrfEWHpAnjTS2Kvn2MgCPv7GCkXdR5KZbdJ9U6fBQdp7CFHY3cfQGs2ZG1gN5h4FidrviqLT",
  "key3": "4mJNavSuwZYKGuLBAGxcnoxRpDazmJwjCQNyS3u8ti2C7HAZnVJsvTj3szvqj9jrjNhCU7cCnZsRAbSD6ocsNW3B",
  "key4": "4S6iD7pwCzhBWXnL1RvRmxWu66VpjYRMMjVrN2bLYQMDy147FJNynjRdv8FcJTZcQ8mVTyVroTi6U5CKV9xzdLNZ",
  "key5": "4wcLLFEUpXXPnJMNpGN22QHJPQTkNnro8ffCz449uUwULuZeYa22TzedHLc4vofhTXBPZdLrSgyHAtEFbqUXJSuY",
  "key6": "2u63dnCqNk1Mu9byvW3ecR5amwGLYftyWM8tGVTnftzHegRB9cS5Gc6gawYsXkkHcMuTwNAS5XE3mxvCqP1fH95L",
  "key7": "4Nq1rMiUBfaKKR1cKu8sY8s5JCh7VETHKBriyK8pXPRNVfdgPKGS1Nrrpmrtu6TE7KR8NuuWtXB9jXPky6DFCtz6",
  "key8": "5QtFrybMWkysan95Spf8Qo8SDUuC1CWUFihUPU1bqKzmT78rRfyWS5MSjLyU5fWfH4ESZv178P3Z6tVwvQgsmfvx",
  "key9": "5395PQDPXHpcyyWcvoc8zB4LwGpVxxGCB1GixudH83Uj38wjGi9MPCJFd5Ry5JDZaqNHCiNBToUJ6TuXkxDgfooj",
  "key10": "2eoFRJHSEuUibpGeWLYckDhneFd14m77RR9SwWs8Kxxb7PB3xrpXMTNXHtcsXz7W8Nb1SVVqFfNjNdW6xbnsmvgE",
  "key11": "22EceuCgTpHJBPsJrNZ8ibJxosbxcrzPTDrLABhPPKwznKa8v19rUv6j2ZmqtmDvWcpkAcYehC1FRk2UkNTxnqzy",
  "key12": "pBF6sFmYYc5TspaLgUc6cttnSPobzg4GAKvvy6q9872mvgACuzJ7F96G7jtZiU4FhzhBhjkhJSC8VHo2JjGWtXH",
  "key13": "3KHuvdYbESZu6LHh7GRqPhUXVadWAhfwoWL5uzBzDZy66mvM43gij7P8Sff5dAvy3jQjPa7tgkGauFquBCCEWFGz",
  "key14": "2DVESFd6S1Rer224ct99PBPXAXihRgohn19xqKfwYS1Wf4LAopm4uXBQDXZoCoHjXwtfhkijtCZgBBH5YrvbigcX",
  "key15": "zVi8XTqZAMmhEjnDsg8D1tYFDjNDXQkiiu4eRC1M4M961D1vAfNyyDNNaGyC3A5gHGt4c7MJPQmPLSyY3K74yCs",
  "key16": "5Cn4VnDGd2mBciHQnkNEfaVfeca7Wd2pbadB5ytAwjYYpWA4RzVd2J6SGdf4iDkp74cEAXko9wF1tVtDBv8dEcVE",
  "key17": "2qDVLR7LFrWdApwiPJ8KJ7udagD3hnmA2kEdFBhMuHF7MuvczxzWq3vmSx5C4kFvQzhSRcVqmGLDHx2dgNvHVcYr",
  "key18": "5RLptoafJCixhBXcxBsbk1bH2JBa5hqRPMFkWiiSvLWUsh2dLTF5Lt8Kv1QiNY2SK8Y8QzraRNcWSXjv2nGBUTYo",
  "key19": "d9fkfsXmWBXvLn3FAMDMmDsnNgDkUbyoRinAENZ2s2yPbTcEi4WBGcd3kHpxjJxu9G3b5WxB8Eg3apacvN7wHwJ",
  "key20": "3dfCHGj2nGRnqfUVA9KZZHQzjjwCqQZUsaDJWJp7hmAhCLF1gt8EKRUJmrJJVVZVYeCwPBRxs4UQ2tyw4eP96nv1",
  "key21": "4mXbbUtipwvjp85nRCAeaDNAkMjdwpdLVsyTGXCWj9tMJXoZoYddL59q3yvUB6nHUDJ7mFduwxAZ21FP53TkUPC6",
  "key22": "5bhD7djuq21WuFVpasqafwCbseoNVDKTuwqL8LigRjEqZeq1CTJJdRAwAvmk6kMnGfTz71vgjmna12stdCeqtbo1",
  "key23": "TqHaraJpPvTTVWUU8bDZYJ4pWP7zSdJqMNugjpsJ8FUz4ddaE3QXWiSnN7B4sgrmBQtRgkk9V1hDu9eJUQyG2Y9",
  "key24": "3wB1vuGbC9nyqa36FqCbTsBEwsvW2xiKiiwEEzfRqevP8wCsXgc7iHoDxt3nt6khWvnfdBySbiCxNd6pSMaPA4me",
  "key25": "5yZf7ro1fTCBw1uXjrdmrHQCX4WctYkfaKAxppD7noVPi5B3W6fwFgFJHp7FjNhkJo5HzGbo2TjW94mGByPcMXHw",
  "key26": "3hpNS5Q6fP41mvujoMR3nzws2sZVpYQugHu5daSQP42TZXfTWxzKpEGDJTGn76TWenTLTSnwzhffpnFRTgm4CN2v"
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
