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
    "RSu3KUZtR8o77gJsNbkvuNUZHznxw1CKtECo12fz8YKb8jd8BuNQ9EHPv9aE6Zus3izjwqNy9dc8tbuSpphTEDC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2d8SnVvVmXGNC92exXMJa4pR2qqoedtSVfi6dE92swVPzq7xGt8w8aFoLJL1Z8X8minqBgqkG4tHr6msJ6tWUYNu",
  "key1": "2mjasRgFvGRDvRXUVq96mkuoXcJDdzAqRwKdT2kvV1dzB88aJ8Vcg6KZTaioQuJyN6Mvd1UTpSpNxsJkTQ69rDmM",
  "key2": "WQoCcGG7haZ1MuK1rQnyNtcmCwepaMo3rLzLrMzVYXDBmBw7uqe3EpfKHmPn1364fvBrsswALaTV9qwUsEttTCM",
  "key3": "4C5SpGrRPKCLXdkwJV1jCfVY7Yhe5foyCHxvrfp9ySmK78u5v12vuZ7yh4w9RuTffdJtJvCpY6RAz41dm1Ru652S",
  "key4": "3p9AFVVnZw47YBGC4RnUVmvzPyDWEKfpygbn64xMEax6KseWjMZgLaKvcrnSWBNmHUyPg8cAZPADiFUeM7FQRQdP",
  "key5": "4PFgw9UXAobbYYipCJSVFPwywZnsCwcCpMt2Fm7HUVs6vXomXoSKLQk3YYkXgafZQjAm4TyK2axa6cyAsaWDeKE4",
  "key6": "3EaVBBW68Qjx5Jg9xbwX34L38vxruYgUXoet9yTqimYqVz3B8UAcoJESkaU1x7y6Eyj1rRzPVDe7sCztwMC4a913",
  "key7": "2EXGXcPrGNr58MhLw6aPmxu9GW4Kun9HwE97rxK8ptExMwaBSVJYrA6co5dvYfcvntmsGSxddZmfyAjpkZUBbKDi",
  "key8": "3tjGz7gz81xaNMFwcJZCCPsqv3egTuyhFop6rHywtnRe7Whc3axcnN7Qi9kpUESXnqjp98M6N7rBMAqaxuQaBDN8",
  "key9": "5QPrpLbQdAXZAAKnfVHh8XQPeDpf7DDwF9CYpoiSjXV1YEqdvgtrkcFcsbVcPdt8UZavmAYjm28Mxcm5an8g5f45",
  "key10": "3uzA2eo1JneB8iF1wAwqSPNZLVt6dLQpuGEt7nwRqL9t4JZnjxoF1rJpR7EbUdRqAXvQttB6VxmVbBReBV1jjwV3",
  "key11": "2shgQDsvsnYsC2xBZ4r6GtwtU8ti7NM4SZru39rKcKpzyNH7zQ1iRPnD7bjGGzfsDP7N3LCzFhvREjuyNZmWViZ4",
  "key12": "2PLMzSKPghBHvdBiEwdHCfZVKRhmRa6c92CsHpndgeKkBxwBy6CycfbugqQxbHyjcwGMnJmk4H4nrqmEYoogJ898",
  "key13": "2propAibyxvUDD42Q3xx7eq3XW2tajUar2AqxfAf7Bq3w2JJUAXNVFWwMpNrgErdxpQbyuMgmLnJY1Jjhtm7zv6T",
  "key14": "4mxGKn5hopwvmV1YzoXbbLZNHuSUeTWEbxf5bQ4rT79ib7HDXydRjuPyTz2krSPg2wvE6ERBdr9yNExVSpw5Em4x",
  "key15": "5Qi8hF2RATpWJ68npQK1aerqnG3Sq9LekiVqsLPggkvHQHj6YEiwHzQkZ5vRbSqKTYCuKkYxYYhuvatLDNyDpNwJ",
  "key16": "4GoJ5hvQAqNmgkJzujPeqmiAoMFjmMW48VhbCeezN2HyHVwNFWza5SnZGer8HeTbBBVLkCTmWxh6BCicUKCLWq8B",
  "key17": "u8Q1tvWEL3R391n4yZvUKy39DsFKm4XBTLNH1KNKrTXAD6Moh3tMiYpVTs6AENvn6SFcFy9W58uezNKQMAZtW43",
  "key18": "5nNaJLjjThXiUsax4jpn6kWm8N9KLQ6xMCQnYSnfjdQWqAUhthYaVAkNtaqqMeYsF2jQz8xqadW9gLvFQR7WE6Jd",
  "key19": "PRDAPDRXiKVQBaRejJcHL4vKUwPVpUDcG2ekxyxtihQhRY2HFXEpcgUcZvLSYGWM91Yf4eA6FX2UfoVbuZJURXX",
  "key20": "3cFVMoJB5ux1rxRozjaG7hf8RGN79bNXcpcTQZWkXCNtknGJ87mk32ui5a86WTXZHqCWNZJ8wGEWk2K6a4tughSj",
  "key21": "5Kvm6sE1LvJEH6iFwnfJUDLaMSZXrND1ru5d7GiVKT6A3KXL84Rcj9feAgEzZq8tNiYmpagC4ht5fLPgU5YE2LWj",
  "key22": "32WoRd1aGnrxDvBUy6VKeKpM9WLojkJGRXW2T7p1UZ7yY3VLzUAWqxXatsUSuUdJt78GsXEoboJqWXQXjv2UuEii",
  "key23": "2FLCHnJCG78b1yZ2CQFTPf7Fcpu266vDYiATrKhaCpPkrephKNJUmJb8MPmzUKU6qPnwcTLif1nh5PGXuCQn1WQx",
  "key24": "3qTbaMXCkHXYeh6cXV3b62GZNzUFxsXfbU7K8iEGqLjELbYiqnPVTgmKn9tRdatq9nK3QERFLt9cj8arPDqAuGq5",
  "key25": "3hm6TpGqwVp3tJiAA6HhnbUPgCBtyfGLPveBd9PnRKnuFkmtbUYL56ojstyvYtxvfSiVUbYMoDV9EcCNXCCSpWF",
  "key26": "2d9ucMv7eRSNgLCqyxnjcxFaizvz9sFrryGJ6FJQ4m2Fwk5tdTGYS3oRPZKb2EAmyj5X1uf7sh8PB3GUve8kRwwh",
  "key27": "3Bke7qoCEtGzCMcJr4A2y9dgPZBcu1btXtfBs8LAGzZTP562Axnmp2hvHWY2RcyqYh8jio72AD63BdFnYfAeK3dg",
  "key28": "4VwobhXvpNwvFb1B2qTKxgkB8VFSH3z6g62Q8SFJZgvK66dfPw35YJrwWbdscnCyTzRgY2J3MMX82cYSNVC2863C",
  "key29": "Dy54FJ9s5wuvzVzcP9pDNmoiRscBaGmP7J5PCsB6cGYQ8bjiRKnk4d5nsMvberhwbEfENPcTWPBZdAesJp87MZ4",
  "key30": "3qNeZLT2jbtwS9Y5a1XnLKb8X2d5yVFjmr5uZgv9vrRimFBoskeRvjYrCCieL591Lo5HH3ku72EYg3WCbvcXfjWi",
  "key31": "663Sx5EZMEgXXHpLKdoJKALD6Sc7Nj5KQZq9MhnqSxExnB8vKf48N74Vz1NcRi2be2AAVgbc1VgYuCYijwAfAEtV",
  "key32": "2sPSqhEVTkCiqsFuZtPeNAWfRSBzvnChXaDtHoPSWmstTbYvokARRaSWQRpjfVVW4hsJzSWwMw79HBbG2HpZXw2G",
  "key33": "3eUVzNmMVZRQ2yiDo2k4GmP1EL1mfhGQMvnumjWXf8cCqkTUvxm3yDjTdW9SreZe33G6xXPRNRbWoqJUNAzVecfV",
  "key34": "5MWsz3QJHx62dGHftuUEACVCqLoVQdNJt8c2tbE2qe8wHQxaEDaNskcsCcpmdz1dR3cm18VDq3aDzWahHZ8ThGyB",
  "key35": "2L4yT49A7e9uM8V6x5KLN2qgz98KdQwuGzfAHNjUf29JPedfqZS9UurBtuYi5VVAuD7YJNx1aJRCgRMFGoUj7Cv1",
  "key36": "2wUP4oyuk9VQjJCEZLHDbRccoASHer4yF81g5qfnuE9jV1tBdxsyYkKBwM5kFWyCmhC7krGHnXvDZp5fkcP5T3St",
  "key37": "3pndVuDQpa1eQS5Y1s1UtZ4AfA9RfcKCURwi1bdQKR5JGWpWz5RGTKQ8DwD79sMgpKoK2aNyPHgHx4yWvgUGKMCB",
  "key38": "2bkbpYs4PeSySQJmmuayva5DpdST1pfBFZ5kNERavgAg1ZGSaBwuRUNC1tyTFHYPUrPag6vAgk7bNW55iWUKYL1M",
  "key39": "4vH8WPekfTcZucqY6EvbQco2HVcUBQfxk2x2XUZAvCE1K3Q7MPDASN3TzPZix8FjFoZjiAqcLLg5La5NuWTYmNcG",
  "key40": "3xYycgMan4XfAF5oeLWA2tnwRtpQjyj8rDHnwNUmRxPj3DEQ4fN1LNfWerVcfJDKnN3chtiApDk6Q7snXoDz614n",
  "key41": "2xQnp1WMkkMu4U4GG5xTNe6y1uANmHcXQMSUsPFm6wpV4wLzysrtXBfQcc7TNFd1sFSX1UY7j2c6y8dFa2z3uMB3",
  "key42": "2nLEbuFSW9svcbVfZ7FmMz4BQq1sg83cKGuGjEcw2BKSmWpv7cyeSXpAxbF8gAbB78W6vHvTFNVGHUggZxwbaCtw",
  "key43": "5ngd1eaPG1DfJGcWZcAjVE5Nuoy8nnhPEypxgi96DSYSNnzEPNCYwssa2NjyZPhbgsgK36kboP5us9SNCTbDYuE7"
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
