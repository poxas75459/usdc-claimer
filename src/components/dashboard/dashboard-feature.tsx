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
    "cntSDNJphMsGLPBK8FSDvtcurrRD3WoaPyZHWtjkVgK3YCfcZ6JZcX2e3yCwprQUNKa9FRSHExF9Lx36C6qusVc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kgEJhKQUEHs1fBKtDAmm1xWw3pL1B4xK6NXXmp7dqbWtHoPJBGKM6bqeXFKeLpG1PbZcJxfRgS1eYHkW5Prm4pS",
  "key1": "5MTdcgnDzVXGuDo2J6focfGyC2CG128PsXGATL2uyRHFhKUvTkvdQymEhc8X2HEzVgUqdxLcgGJSHM3eeEBvkF6U",
  "key2": "5SZdngF32MMyrcvqGiDxC8E4HFy5QgJWJav2HPgB41Gbo9rcqjqBUpYRDD6ayrZvmMuNuJ8MGBamU7KhZ2RrH6K5",
  "key3": "qgg9myvpsQBmJyvJEtWyxbFuhFeRqPXv7Wi1EzS3Sz7uE4AY1HMDDDB4zXvjseRPgmECKYcq5k1k1Q93EyK9sYt",
  "key4": "J5LfhJ5cpJLqkMsEXcP2WGsRdbeFZUgBTeMH1cXiuXHXwC9XUEPeWf4y4QHH8y5ndXWvV4fRhjxiNyHHakJznB1",
  "key5": "6WSdCveRTXwpgEJ7SNP8BQ5wpgJaQrDEXASyEFpWp5MWM8Mtuq8sJGZj9K7DFNJdAVKigGen3ymXCcA9RyxVQNf",
  "key6": "5ekhohKLUHL6nDRFgDsg7mcUuobdSnEZseur8mLU55iWvNVQGNjGJ9GrSnNQxgpDimzLCSHtSgKK7BmubNmepGpn",
  "key7": "bwgVb6XBjKT9KsYeQS11x2C1SVCKN5oc4gi6VK2zfynBEAk4h3jwWjkkKpXbyUqi6HpW7k9gRiV93LzzovzDSgn",
  "key8": "5p4Z6KVkx1XDbcX1zfURH4ebxggJsBfATG9HKt8zXeChnnBeteTLStDYEkGmXnGH8NVmGa6vY1E9pez75zCyzmVw",
  "key9": "5tPCueWsj6HYbjALeFBrMjsEQjx7KAHpKYNZZsdVvdyvhmmCwwBPnPeyvaNAgTQSRrBRcD66heE9SG2zALtTxLbg",
  "key10": "4dJyVTaUeQ6fANC1is3zsUNJXybgNPW4h4X4WKoCYoQzoQcEj1yxd8N6HKxkCAB12jMyEVGQ4BtUddHsziK1q5Ze",
  "key11": "2gKMJQpEqy5haKPfoZWNQWM2rXHaWpG2wMKmRSCM3FDV3SxHvmgQJreHJ7ymKTZfACcu2jJdLmiQ2Yk4UP4DBG25",
  "key12": "4ABRGq7YK9hDz38rRWQwwmR6e5AfVrvB2EwGwXQFfrvnZfc5BCU6XcDqnn6iJ9zoLS4uLVw1NypTzy48PmKb5o9H",
  "key13": "3DYjgRB3uuymvYYVp6tSoN2FqWEGwjvEc56nC1tJBKg3Lv4ssdhYgWXK96HMBBjzodyM42pVT8cNptYLoTuwLrrG",
  "key14": "3pff5ddT3qZ1uC88LQdtUoR6RK2g9hEFbNfMKRevxoB3GKBzZqo59Dydjx49DC5KVK9cEXubuT9w926KEohZE16U",
  "key15": "3yXFcf2xJBhPwDd485ktAPPuQWHT75MojaUbpY3xJyCUHbtLCPgoHsHUK1kN9LF3RAzrYUPhc8RnNj543Ue2Awod",
  "key16": "66qJyF1yyeemFsQfkSeSmU58yJqz2GKTMW2pEHNSQVy9UgQNfpwehpXDD84mKJ4UEJDWwsHZH1t2n2Y912WzGCy6",
  "key17": "2mVUCq9GWMSj51jtyNu3xtNVzX2wtDdSBhZ1Cvg9dugxi7YQPYaF7CKuG5LjNaN5xTw6bFcA6XVi1b6P5pC7T4Wy",
  "key18": "cZxgXsrjy71jEnr8ASb91EvYk8yG4xhgwwBcAUpFSi4kphXwHDQp9pAVSHVHhvQkUsaeTv6ZH3YCVBhj7RRdmE5",
  "key19": "5MjuFMju45ZYhQFYuB9QLiAKrHugicMHN3w1bmMpz8C9WTdQxVxbKuzrBv5FmXSzCMvDi3U2BkYhWkUBNz7AVozL",
  "key20": "gWqtnNN1c92BV26B1h9gAbvbd4EVwszn8GrBwqf2p43JSuQXvSPH85BSYqcDS9YMsjtC2gQ7Pds4tUn6yWBfjAd",
  "key21": "5HduvrsyB93Kej2AAFkwzeefvJuwbZZ3egM9mPxyQAXY5xoe8ajYZiaZbKGTAnCKTgdT5FBNhUVnHVvkHD5kc18x",
  "key22": "2RZwPkbVyiriwMtt7MZWPR7F2gYLrBi2G5Sd16EM9LLdZSyyUZURukSeojXM7zubzTP3yuwq4zEUMZm65pMXQjRM",
  "key23": "BDSEpWhnfEkgzG6ww9kEacMBrUcLQQevoBYT8Q8cY6JN7Qu9tQYKpQN8q69j5u8SqKfjKtEbQsMoUfbRG8MUXa5",
  "key24": "3EruEyDVKDPBPLy1pnqfEVWqmZtsBT62ybG7wLpan6bR6yzP6MsbHbn1w8tpGjrGRVhR1b4wEDsCe2SHXVqy3nML",
  "key25": "5Ek4yZEKVP3kjQPiyAKNnpiaskDFNipC9fCjyvrzKFHX6tcLyr12458zfKvFjMtVxDmfAQAtW6mfBXBDND5p8TmF",
  "key26": "3vnWCLRNndX1CU4Qs7SFQVSHiEvEwzrTomUrTY7keYv1tbjji5fxYjoW827gJLLKhE5HL6KKkYreqcYEVPrcqDCW",
  "key27": "5oBEvJXiyAFd1zXuXqSTxaAh7mBTTudbBWn36hcNHVvWGmPsFDGMdZqKePJqho9XSWTrJbPYCW9dASdfe4VbE2WL",
  "key28": "4Gc1bKxUMgTDpiFdpVNnmKjJyRkkXfJK4QDyuTp1Kf39YCVvDxsSaVFjUgWutr562kpWfyryRWz5dgVMPnnP54w6",
  "key29": "24X4PFCshYp4k7NWnE1KNs3M4AdnhrbxjZz63wEBbYdpgciiW3uFd9HdEYut61MUMGWatVbNauAUYYSVbnDVioLi",
  "key30": "jey1xmiBK7w8G1bqaetWbemfPEreA74Y48jisQGKPzqPb92f1QDaxYgjR9S2QCv7GenCFH9XhFxmvjJ9B1G6J1s"
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
