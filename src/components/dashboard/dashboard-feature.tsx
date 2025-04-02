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
    "2VJXKgsYmc2a2prNpJNWjDqRKG3gLqyNDFZEL1uSjQBuSztkYC4UbaEuRZkvuCpx3X1noz7hPHyj22EqLdmqrdei"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2v4sPkc4FKSZ3HUxcmfjBJ6K6i9Y1veii7X1V8bVrrGzhXpJzcMgvBUrN1SzGz6o9iszSvMP7C95Eh5hgD8DR64R",
  "key1": "3Vf3vdW8TViEhNEpjfKPmBzBXxFQUpnduegtoUopMAjuxxyiatHy3uqJBGKFj2FdNdTFuDr6Z9J4SfEziLVrQivS",
  "key2": "aKErLJGeDmwSf9kbGHcTstT3UrY9yKgrFVRLZjPGrUYsVw9eDjbHPBaB5izHkKTyZq3GSvnAtxUNcXvwJVJ6jY2",
  "key3": "2WxD6TjM8EzBbcXBh2cbuDyfi6nApM4pkp8wH9kRHHKPVY8dcG7HNe18jSfZrz1LvZWY5ti93eDNQvvXdECkN3zU",
  "key4": "2nAtA1Wg8PGXTTCuWtCq2yBWWrYNZmf8XWtrP4QkWkXqZixAHEXbJ8UPVQYbe7Jh4zGw4e1hedgqfTVFRmZUGWev",
  "key5": "4uihgnVAfJGNpRtZBYy9EUxb8as9xP71jxfmsLGrGGWuxFFQvpNYuWe6vHYojPJSJrZNTv8dEfdfEqYHLsyw63e",
  "key6": "63Mw5xkdmaXt3oFdSF6LQPvLLD7kbyrSR2EckDKU6XFZjLGkKWRHnmjDGfw48pCCggWai3BpumeZ2JgQ1iQ6fJUH",
  "key7": "PPRNsn2t9LYZGkppgoCNcxUbDy7RaZBWYFAquHmAmKn9oCGD428pnzFmJM5VAk4PyfCW8Dr95wzWmwzBz4VrVhp",
  "key8": "47ALschzpjYETBQ3h3D7fSR187Cd6L1444K9Qq9sSXdL7xwhoV3qSPi42pE46WiyAXSagCNevH14tax2GajJHWTs",
  "key9": "5Xs2Xp2hv5ZA2JixRfxeMTUNcGqaYLWZ49sXfe7QYGan9U1wM21J7SKq9Pd5kzYRmWekSvJzmFHQ66TG99xuWn8e",
  "key10": "5YSzmUZob6hi1LPYYGTttfkwLMU58rypw8WZHyGaqdRXLWxPt7CuSnUWfWairuaqTkaJwbBK8Heo2fKy6vEsdhXM",
  "key11": "3zUqHWQhg8K7pq3uVRTiP5CoYK8FpbVHgC6napDzX8AWJDekF2qnuX8JEzG97bwEgBuM8Pday2QgQZ9TYGawQ6bW",
  "key12": "w2NS616TtxodAcVE3efk9a5QYZknLwxKrd9DgYM3b5kKm2CMSw1s38qPiRSZDsLk79VoqS3m7kgEtD3hXM3gdRy",
  "key13": "3C2ATRoVs5BawpUKmqdpx2mZBRdXH6JoWsMCjndAsqSYeZCsiL7kT8qtyrGBup7gK1UJYJjYfHev9YrxLnBvjj8M",
  "key14": "25q9BbJaQNRQ5fcPHGE8p2wCwhG4Nm1WmnKhbUMhL5F3okLFMYvAUamRymfeaf7PPXvTYzSBKxJpBgDBJ8pcYNbh",
  "key15": "2qpz2A2xZMwKn9quQkhSq8yTwEBvZVK4AG3WUTfAFXfp1cf4QGzfoHRsbrSWu9nvhCwSN5khc2fc98CHYKbfrijV",
  "key16": "2CePQbmwu8bDz9RhaRJBdMXVGQD33PQJY1HrdkveWPdVunvzLQ5J4t2h6RuNfwyyi12SuFAGenvfj5oJWvdUHSdh",
  "key17": "4i92oxnxTzgG2nxkcUT4diE3ZFqGzV76Jm835qhJytUdr1zuNRRghzXbt475MnQ8bVhcK8iqTMRjAVAj3Y7gpLG4",
  "key18": "5RJYmh6gdKRupo9MoZXwDZmrixd9eDQdVsGofCZvWwhwYQyTQ4up7mNC3ZQnS6oqtSPsFjVWFVrvgBCBosBeEF7e",
  "key19": "4cjhK3je1uQeNqovVGu4ydSw1A9Zbrn8Hh6631xhcR3cniQkfbSzKQSJpKxxLfFjw1cjAZoVN1HbvjjpMUrwsLx4",
  "key20": "3B6SmJKsnw8WpB7wjajN1mc2KQ8vKb1Sw5Wgp7FYNFjBDYzXGpBJPyW3YPSfzrxzFDNaWtGdTZ6BPkw9wHHyWWf1",
  "key21": "5idsMVd5WAN2TGcd9Cbky5LHRVmf6d3TzyGa7AYR2cxRv4rvjX89kpveA33WhVpXY2LWP5SAQq8NztmWPHBme6mi",
  "key22": "5spurX9CecZt4g7nfHpLLsEfC2ARHeKZZng8c9wHWvA9g3GxHXPV64wHkVnwd2dmXKCisNZMe9EtYjVS85EcZNp3",
  "key23": "4TL3UnLRBfkpC1BJS7vnkM9mTK4c2XHvD4xxdQVKxCzfNMt5ENfKRiHCYFZsd5p529Lqsy8nadd2x7svaLrKfrFB",
  "key24": "5GAe7GhKHmyM5AZV6Z9igfHfsHcWJBngKLFaEKQuwHEZdDuJuyh5J9Q6Q5y4XseyLeV4XLsnQ7f51ceZgHqpbDke",
  "key25": "SEmpt24YfNU6vioVkNguWB1dD5HQ2pX62rWX55MQTCYBFwpoWkFu66nuSzet5JD3DsLBAXxgZaApSqRMnYTMX7C",
  "key26": "wvTnWvnZ7rWaTcqbUCmgsvCkv2iSGbFoc9SF1PTX3EdeitjuvnGgruXvpgiGC6iFDjyYgSpxLoRdH8nJ9KCgNHq",
  "key27": "C5HTcVLfcyFgRw5iTmAFshBkGr5YzCQYrAmAV6Ev6DnoH2sJ1oJi9hnYUN9m2axmoA3tnegsjMWyMoWdC1B5h3r",
  "key28": "TUeexwPgJk5gngVNymbaDyLzp14XvMrT9exLsMjM6Cs6TwgKzChShHqx46TzL3chZXjzB8HCiHgEgmW5Y1R3sZM",
  "key29": "67qAHAjAHySwLKrbQqGz746zkvFrxDteoSd8NzcR9VcNBgPZWuFGs1CiYj3rzypEkQGJGHkedJRFc9xbytBrR5iU",
  "key30": "3rzzdD8oTbjoTw19a4KkdJfJKCoGj7HYb6ctuyjcxKLFF4GSbw5KVx8sNjduy7qtMcEwTD5Mo7BxdQtgbQfDxzpE"
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
