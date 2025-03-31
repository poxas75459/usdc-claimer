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
    "2rq1LhieWHtKw59oGvzwUzXbKMvzwSWigGvA25tBKB48aYQyocq8LCmBEsQ3Sv6SqShn6ZiVZGCQ9RBX1fDqMEpR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SWVSQZi66SWc91HchhbbUiMiYoLQd26KFf3cFSSBqcriZdWWGD81Rdk9iyVSH6xVC2vP5Z56Kdy7WCypipcAkvB",
  "key1": "3xyrhQPkBh5SzFsfKLNSiaCfsZziPFbEKj2dtTHjktynhwNqSUv1ALvxA5p2tkPAvRNQ8sGxkFHLoTESJLSFszQk",
  "key2": "47dWGv7A3kPBVJxT43WKoND1TJSdyTS4ZdA4HZ9Ywggmgxxy39eSAWRagT4ZRe6w58VbdtdL9yMMoedchoBQkiwg",
  "key3": "26tmPvZvZrgM1rF9y4VSExLnrA6kWBr5fSE9R2CBvzdwNicRmUuD7XKL7pxa5faRTXscpBUoXAj2corcUfsfMcET",
  "key4": "3uZYmVTCBHg1aiwFU8giTFbEmRghJ6ugzkvfYHXSYxknqjagRBYBVJDfJY6MVq6YoCGKR3TCajJdkE7bskUUWqcE",
  "key5": "iAQykADdWunVWwcPqDLkrVeH591x1wgNtfDVLZFJqgBW4ddRxBEaSstWXYQEhU8Q1exBbdLXsoFknxxMAsyQ44Y",
  "key6": "4pHvvxdKsz2wYL1dNskZBmqdjf1XLebyjRDXJwKNPW9RhVocqJqDyTuNNRfAaDiT74zGqpZfYZ1BeEYesBbFuUMn",
  "key7": "5FWmsPVePPxA5ymbgXqXDmPfoNKmJxBTD5vjUPPDwssNmrHFW82s6uvbs2KTVtw8hGBQCTZS1obUvx1sZghkWKGp",
  "key8": "2s6W33WpoV7EbTqnVfEis6fgR7gCeqnTNfBwL8QP1DENnwXg4vJu6Cw5eqrN4Rfm7maYqhwwdtT9NcvqVK5JTVn9",
  "key9": "48vPtV8ZwcQjhYVCTaQFCV1vFjRfP3QxcYjMbQznJxfUuWPNkD2ihx3eFYMbe9ArY4rJ1BrLedvFkrF2QeHtqtST",
  "key10": "58inDyhExLSYMFWt7kdUZC8VwHTWdtMDEVsFYH5mMM2MhYNvh7LM86Z7HzDDWskLLk4WdzYTL5kXvnfNJTPeET5x",
  "key11": "538zXkZbRwWA5omXDahP4JDu3UCs4FV21nkcwUxYte6QCh5Jrmg6pLmZUmY8g2zkkwj78jV6niPT97bNbVrwasHo",
  "key12": "2FgJzRwi7QtmbCRLBzXbTwnHdEoBA56ivgLKWoihNSAtb613HCPxAC7T4HxH2ykZ4BCKcDstAEVwD6Fhmy1Nasq7",
  "key13": "4W8kKC4SS5eQDdebLrkEyLxNb2VYNj1ftwCcizjgD21pUGBv5FmvosYqzqr1APWUuY8eYqBpWgegqCSDE7uTGEng",
  "key14": "5yGLjg5TH1xMju5z9yisUtkvmjbfCphgfsUh3Ska4RcrQe5EbGZRt7yq6ZvzUXDwtvGFABZdQ8T6kA9Jbn6UDn7U",
  "key15": "44YMYDVqVtteBNjqDrzLjciMnBm2VsjzamDJzM4nf5M6UkHJbwK5SoVuG8gDHvH6QCfEKdeGVcWSXdSE9bWSbWiq",
  "key16": "2EKeQPNnRw78zqUs5PU8vYEZgwjNPaEvjPsNp98uLSHdP72VrJ5rQfWKZ6uUJrVbbEvMi4zk4mrq9fXvkeL2mrTS",
  "key17": "3nNugSf3qo5NFjeBoYMAy38WvijMP6FwyvVtSnzwc1vvVYPsNHvrHT4j9ozZyo18zafB5iozpyBio7gCrbv56FV2",
  "key18": "57zAfBgEVN5bstiik655CUo7ETyz1YVuEXVuaRyoAKZjPmZgJmVX97hodNakjrnUfwN5s2ijtcvjwhG7xAG7gnmP",
  "key19": "5rTi9u2T2zM9gd5xG9RVM2me3V54ePxqo3wT2VPrBzQgrtpEfRqbzV1ZyGDdNjGgZ8BDFS1CwBsejDLkptun3YMU",
  "key20": "5F6La6SR8KEjwE8hMggWGn1MCsVCuVmvcwWLC4fpLUYHh8EGdCqWTpBsUzcTK6rbLHCYaz7SwWurC7MtUP4Geeih",
  "key21": "aJ3WSZK9e2xs4B8ofyB2jzX9eDxGov15S3MfjLyabMQzmRJpymqFy6kA5nLajZQ1zR5D8FzSVwQAV6nRyboGoZh",
  "key22": "5aPxTChvDQMYE1cSt7BuNwzNbjQaLtenmKcyFJTvsezDb7mMVU34jhBmDaufTMDYvi8ZacrExsWjwALhB3WPbBRg",
  "key23": "4xjpSSLdxuRarAhEWtRfCbtJW9fXR6Xb7dycXfuJkUrBa2RyLnzhc7SpZJ7BPNKj4uMoAuru9k8iNrVmoDPNpKyd",
  "key24": "5dbFo7YVeszVNAw7aEVRGXebzPgL6DKXtzWuKzTc4YGs3JzXFEWAfSPom1nenBiVMFQ4QgYAeYwEDLC6gL1xUxpS",
  "key25": "ThrzyQSW1CHiTKwbzEatD2oQnumqeQYkYTJQv6AA8yDyUCmU9u5hBhwTCkavPBJ9xsyukUGDcwKeL7ujVngxeQY",
  "key26": "2vV8s8PgSJH4ZbmdHed3ZqyCPBYKGchty8XwhErTnB4zuEUmb7spTGDVZYg9s4eo2ugPXdDVsekg9TntSJZE25aP",
  "key27": "4HvbZLcisSCQwXZE2aADJXP1gmLmWH4ZWDrMZHD2V7CZYrT2dPfzVDukeQfabGjQ9Xgr7AxFiHYhG2x7KCtphmsv",
  "key28": "5NNdBsWxaRd3To4kbmhFyS1JGiFNhXJGQCFRSTJL5rBHSpYd8TeKQDHLiZHtPUMV4fMiG6PFmfhHsCpWEEVSHuQg",
  "key29": "4AAdNrMWfso9seGrxGsaS2sRaowYR5cGctiD8tQ94PyshK4GetE9xz49S2syRqNP5mt5QU26Sy1JoBiXCQumc6b"
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
