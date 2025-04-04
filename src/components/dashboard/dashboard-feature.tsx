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
    "5aUQBZdgjmS7KaDLE6C3EBBpbVrnKAAUBMzvcrca11mJ1kJHS1bAeM1pAisF381uCxi9Azn3XyRyPhSLgBjorB62"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bKAjoEMhRycKdkgBrzj88obhuxjCdxBnKZWRtKaacnR3xLcGwBVvPWf8GR84sGcqnpojYHza8Dv95Ue6ygBv185",
  "key1": "3xqVRNgJNsxwXugzivF5bzX6TUC6pMsULj4KjHAJo3TFPmc9hiE46ZRwmsHv4GC7AibKWq17PiFNeKFXXF5eQzTq",
  "key2": "3AbJXRXNbx4GyLi1pKnZr5u43FZumoF2xrvp6xSyTrQ345zmVWCCnoCWcypR2sHonuUyVVomoeJ2F3a2p322GwZ1",
  "key3": "31rjYHviHU86zocmf4ZsSh9oKz5ZNCo6s3wNixmWBvoU3bsqmEexXZheoK92YaCDeB43LDaERryYQXHUx44Cf9Tk",
  "key4": "2o4yDf53n8F8hRNW69ay7ptFc4cWaDoEkFaWYL9wYkKsemVCsfwi4yFQVm3qi8W1bnCfwWPvNq7YQkmMFAXNFKFy",
  "key5": "2iQuuFy6epuixjrGuhn51TAERF4TJ3paSiadrJguetDMhwRsUwA9zLvpRrMW5aPpKYVaRG6JcurpKXQbMjabPjwH",
  "key6": "4Q5VcYW1fskgbpEBzcRkdo9MwrTviyhRRDFcYzc2TYzqwA2xaDbJMWnkBP2T7RHd3zDc7yhGeYg1JXcAhwbB4rFJ",
  "key7": "3Nt4QTW9oXK6dsoMyhpm1eohf4qKDnbxmn6wM2KBQEpDLwzk74pHkEMo2YXL12dd1BNzCA2133BZBjQmo6JHRKgv",
  "key8": "4i3rbgRJ6eJBDGmBiDbdL1XwmprJ1PYbBnWPCMASDf9uSyQQAWqVWb3VX3WkXgoutZ9QbQaTNB3JjW3SndeFsBFB",
  "key9": "32VbfGsnnP6w79m3nDPLTdodyCPFp4Qb8Ys3QJrQU8aRNoFL7RwXmVK3LdF4cnQJnryVzYbhKPkZRgyYmcWKvMjt",
  "key10": "2NboTApjLMEskch4b8spwHsqjuMKxzSTP74jRMKFSWQ4m8dbfuimZWf31YYR2g8LyB6njhev2vhkydMAb3iDDEm2",
  "key11": "4uyGT4GSeEDwkmYnsfe3cfAsrmW4GMGofvCtZGKvpCdGqoncCCGihZDkCgrM9SKiRFjuijxhAWBsDp4tPP9sSfG2",
  "key12": "5CMs7YWiMALa2fYsu4scovZeV7wQd47bCnG6EmhPHJypQqNPjgqsd5yTQgRZUoxCmUzAuCh7cxmfScWbwAT1ScER",
  "key13": "GaqmFD5vuqFnn6xjzPi425hofQfbgeZYAssHZoC95mbLmH84agx2yGzMvKJyHhAcG8MWoSkbfDoPjNe4fvwPJTS",
  "key14": "qiet5nmdzURtZNxbufTMBf5EJD8fj12FLk4okvWi9KkgMXvgZWRDmHcFsPAxAxUgiykWFGRpzG2kHFGFQMkEVxw",
  "key15": "2Fyz4D3R9mdHbvJFD3kpQBNnanjQrPmWDhj2sUJ4eK1HWRLqy2azuy8QAnXu8YHNGQEHvQCs7TcS14y91qYR3CZb",
  "key16": "2KmDu56iDWvuE9n3N4mjFUeCiqq7Vf2ibKLy5ayBpKsT7FKzDsy2GvCejgegeUqsvKciJRmPuduMeAo1qSKkrkS3",
  "key17": "4AqBfDpoAieJftFmoAjskHZxBXgqPyZtGnfKTw7sMccFx4RFzzJiaPiMuuyS5Dm9N6KGCrE12xiXHWdUBrGZi1dJ",
  "key18": "Vhifh6p6qpf82rAi4rwHCAiuMow3q5RZYWLkJKYUZyWkMpBWphWxmNsKjFuho9RG78XiiBDhm5Ko3wug35sgHju",
  "key19": "57pRhwUYswRcYBZShgP7ZXXKRkJyNEt2c4P3btnL57gbSTJ81hr2muYugZ1PEd6aH6A7ZVUAJYc3GX5Bq8t5bojT",
  "key20": "3Y1qmXm4soAbbK6Wg42iDf9vZZhnwT45o8XF4U89wtnAyAHWd9E5QprfQkWPPUKvmAFe3ozWntXphJsh1RqoS5cQ",
  "key21": "4wgryhehQMcNrScjJe4dDBU1ztQ8Mh42WGMfXWZt8ywwH75SbZyiB6GtpYEQNgKH18JBxnxuNZLgLvUedeWHGiE5",
  "key22": "63uUtKuNHbbQJuvqHTkbc3LWFk4t7BevyhNbJPqf5o6NdN71gFYz1Y6uexvDw7rBfEKy7P7FxwjmmMYb7itMibAN",
  "key23": "5ETRU5BzKwZ4aggvFGctqXaxkafVPwv9vfGYLD6f6PsuqqzMjFeRLE7kwFfrgsqKVvD73vkB4gmfEbuWi6Zumouz",
  "key24": "3hRH1Km59rRg7nNfuPWX5PQwqLri9mZHTs1ZSEMPeaD5hxFF4aznwFnqWitmxFNBFGH6HqFYoaYD6KdAXAbkTp7w",
  "key25": "4ovK4AVkH88SBfe1JbKX6Wm74VHNaWfiMhof8AcDc2sRyap1g545YJn3bZdbws59bUNaScFYjJ1AH6ZgnXWc3rJA"
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
