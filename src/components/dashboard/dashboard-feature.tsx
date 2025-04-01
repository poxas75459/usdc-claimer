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
    "3SMJNbvivXypdUDts2E3yemPd9QWEw631ApiiTkdUj4aiuzih923RidtLc7FRdib61V2R6UKRyiyBm9uQNPWgP5n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nXMmoELrArYDMjn5odXBECz79N6xCfcTDWAJAScuvLjsKjsFbTpBcyeQ5jgSs6GS1EPATVV17QfvQ4HyNujmwSV",
  "key1": "4F34xqr4NfPqgHWVRUmcixYFyzLYhHkQYiv9J1DvSK9XsmFccZ8LYVrm5j1EPmjvZ2fw2fAr1nDHqSLEiN7F7RT",
  "key2": "2qA9ZL3XAkwD6BqcChG1Hm1dmvesuyDNA6Twwo2eK2MafEe5wZnGSDK7ibcfvXqzNfYpGLCThdnN6GWGJr3TV66Z",
  "key3": "3PuGcfWrbx13GXph4HAinpmdKxsqc3P4W4n6ys6RuZzmU7G7hsaz1cphmVGpHpVnjQPk7uvVhwU7oT3ZrbKYf9ec",
  "key4": "3B73n92WbWXT9YDNKf6AHByAA6Ei6iNWQCFZty7Cz7HtZFjZNrGPvFLdA5EdKfQmkAoyatpCPrSBvYHn9qcegjLE",
  "key5": "3k8PhhZotriL8aUNcYi4GDvMuhSkieMQNzRfpvZi23qbgg2iPmK1PTd95Dd2ceGDjGy3huxTKBs7Gsg857FWbqYW",
  "key6": "NtgFhjBDBRfdYGWphzAdfxcufNHce7UgKyi1ENo2aqAQQg372frqDGoqC9GA8aZKo3z5K6AZi1JmEkpGHut6ZrK",
  "key7": "4k2ws8r4wcfV1WjEmYxBnY1v3qEqrwRFjZPECZVufzosT1vW4ouBCQoXMTHzx9y8RQbwjGVqRVMqGWiAw6DnkWfQ",
  "key8": "29VnCkqcwtBQTMKa1NSRTkCp5dhhHfkDG7xrEhH1uzLiTyZVPyj26VX47fDrtNNFKek6QjQiY1fEH5Mi1rAonr8N",
  "key9": "DaA6jVt13VXb78KWFdeEuC6ADanpHRYeQamPVGFPJALKdqmxU32dGctrR1fDnSgNn65p7bxytySuNQPmUjH5R2X",
  "key10": "2puu7yrSsD8kLGbsfSYVUXQ2AXH2BZ1AbHL6VdvSM1C55nS4iScXJccVkX1A51bJVKfRCQ2EEQGFjdKLaAyZhvwE",
  "key11": "3sBCgZp5ifMpVDAcxiD68815kB78xLH6Fd12yDdkDZbexjyRJ1vMouMzYwh69fC7UApxYJp3mGiPNR6zp8gsWAdC",
  "key12": "34TSmfGWBPaNrfp7BfDGEmUgLRJiesZGmtAU7YmXkW5AujASS45zDwfwZwF26BPqR3L1xw7DNZkDHcF87Ad6nGgs",
  "key13": "5jBar5RYFhz9wZTxow5QTMqRKGwvtS2rRukM4r9iBazsHbSMFkE3R6TLN4D6d4XfHGnsRHLVbrKAZydtHMWvn678",
  "key14": "4VZEsuBiG8wRXxdgoB5DtCuYYqvD1C71xbPbRaokdJ68zLFbjdYn1f1CMaS6X6CMfja2qBfReZ3VyPaE4kFG6G7N",
  "key15": "WZcAVuC1zNLsp51CEfPndLY9HQxhR3Z18dsrZ3yeA5nKUJxau3fTtCEgUr2CyfXfFjbiPzrT56shQNPjkYkD5qC",
  "key16": "3aFaZ8HNcMVRLGnHEeQzG7dFDi3c13eKNZdVZXqrihCyyurbv8eguvoCYMgxyfX6YDs1J1ESJJAopdQ4T6e8z629",
  "key17": "4toBd8VfJn3A79PK5PeYRFdTQ5i8JhxZie62eK5kMpr7tfKcu69Jm3koB4foQe9Z4WWdDm4L6JmrhuwTn5ya6tg9",
  "key18": "5m5gNu1A4ekBpuSF9gzBMPebrjtpxczAo9q48bTdMvtYt9pLtjKsHk1hn8mQwzzCemMerMQ7N7MzZKMb4n4Mu8Tm",
  "key19": "5GAzSKarUkQstbo1DChA4whAUK9ciBrP9RvAxQMoJawMxAT3swT2jQCehx7cGeF1izKUTop2AfXjT9eRMJpsjXfQ",
  "key20": "5FT91Cjw6B4pTs3TJu9jREtKNFZadFF7AnaP7BXUCpbhAaA2vecSVnRLWnibRyqdtZGWbxZeqsM5jqjWixfY4aDu",
  "key21": "2Bj19AXTr4YYA8zBZEz94G3P37Hh8Rpr92jdgHnm5mvRmcX2BGqB5tbbCCu4Z39RGvdjziURmpVYdPchpPFHMEJD",
  "key22": "2gzCx7WR7tcudXC2XKb75oQmkegdsXmigoVdCENpediJ3TqdLE7nPx496aVd5Jp35PNFcVF2n5SQS6LH87GwnW6r",
  "key23": "2YpurGBUSuY2pDMRtXn3W1rCN5qgJ7Sggs9QNXEFy5EP547wUKkcMk5J3YcJpbw6WcYdQ72gsgCkAQZCFErY2r6h",
  "key24": "4TExZ6iZGn6a35UzXQdFTW6Ng7ZUbafxpGkmFfDLiKeGm7czkSEJaQf5gxzZFa6StK2TyMJWUGwWAsaB1D97QzQP",
  "key25": "3MNoqJee3DvqhuejgUMm3H451unXLG4uupvopaXtqAsKPWVePfea9xWyFLzjsjkeryjqk98P73njCFCngS822ZrJ"
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
