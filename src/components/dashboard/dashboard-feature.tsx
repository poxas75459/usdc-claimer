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
    "35RC8T1LJzExm8EYWX4x5DVHHSkFitMcUD34n1E9K6fso8noTnrQ2yhz8FS4thvoYwD9SRt9cEeuFrXPURTGpDEu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qBJah9cdr6kXq6mAkJx7zrwkfbnrHj7sRuSezoCtSuFcSQBUMCHRrSGCrQ6oJHwKWLy8rYAzn8BUxLxLZvF773K",
  "key1": "3LuxgGbsZPFtjxFFL1TLCjUEmtfL4kMFRRVGXKxpDbWEqw7QYWX5TeZg3vARf6VZqdatXSYi6V98y2HDVxL118Kt",
  "key2": "3JruH7rpU3Kb5F4Uj5UbstkFr5C7s4MWXKiuSg2DPEkb3x5ruVDa4CogNzpn4GLniY5dz8y4yATeZCbaKxLqf25z",
  "key3": "2uLTuqc5d4nF7TRXxDcdrq5gn1UdT7YnZSmqyYcFHM6D7NM7VodyNU1URnvEJj4vCX64UEgrwLFC8T3nNNMLCGVw",
  "key4": "3bYZ2NvrYgk1nGBJYAJyWV47MkPvxPv7duQ4J6kXACtKYWvHm7uXx9ZpGVdZtBxkvVJNCCgC9WYsC2bK9e8UWzEZ",
  "key5": "5boeeJpJSVniE87TS3Yo9oEG9aUJhEzHPKXkCQXcW3SHqFbR5P5jCUcCWXCx2v3YRafYNJrf2UP6XNMwAZQUsfxM",
  "key6": "4mtLcpdmuK9oBxaKsXkLg2gDwo8CMHfdEtn3EiWx7KnzEVcgkinCsh4DfbT7wKBZB3CJpw4NH8KkLCfWdzpMj138",
  "key7": "3KZVMUYdzpCVbfvLo2bS47u5zuxVG2NpxMRaHgjpQdneG6EzTATsY2yEDwpj16GvEpHsTxkWd3GtMMJxAU9DMpkF",
  "key8": "2i2DLJqTsu3carg1CrBBuaj3VhkBXcQD69KtGMifa9c8T9f2VtfVFDdV7HyoN8JXWgK8GG9BbJDCoTRsYiBybrjF",
  "key9": "SZPXWZ3N9JBnNVSv5JNdZVvycZNq7LG2r9SE8iyaAAtL4bB8JwXSnhBAPg6fKPy1TquEhZo8oq15HpKJyvKSemF",
  "key10": "5owN52gaYEeyUUC3wmPt3bBZuypZRmzKmgJgPTDGPDzs9arzxpsgxXx99hjKPrWMotue3RiLighVQaEPjiibBTQP",
  "key11": "5SAXDHX2d8XTgN8o1FzgMDWUp3UbwhHEPHD7K98e22yE69HK8PXzkYVXXJN6KPqxfBAdaE2eY9knMjjrnb2xrQa9",
  "key12": "2d4F9HSYpchHhNsYgFvk1KU6QNBxzhTUavTzwaVxoQJUVBtwJdspoKRzPy9s7dDr8Y1H8i6QTSKWXpRskKWHstuR",
  "key13": "4rTYnZSWHFsussZuqjGi85ECXBuK5CN6MPZYttPZJzNTZuUvpMhQaPQxJHovLvjeJUhT3tmBJifCKaRQTCNbaiRj",
  "key14": "k9kErXNZcc8BP5kbkkqth9hxfCv4ZghARSp6tM3K4dqXkFgE6n66K7RSci6r5PDCnLtTL5qKTPntrrNrLhJRNi1",
  "key15": "3KRxJDEzavBdQLbZuyswRyBW3AeUDPdDbQFbbCiVaM9a9LZ8TMfA2XehzMMoyggrfMmCziuX3QJtG1sEFZFG2gj7",
  "key16": "3rAfzu1xjFm26ThvvZXFqkLfJzpsPPNSRBpY9P7TWwUkyHw2xK9gCKAe3PjtTsAhrytnYB98G6RVo5TdLy34PHF6",
  "key17": "34MaxbKdsD3YxTW71KPsREDvqBxaJaVKj8RbFWE5LkyNBtGScZJW3pC7oFaiJvTNypn8GHUB7BBoKgRHF2zJMneb",
  "key18": "5CF3STporFfBH7EtR9Xt3bb1VQFUkMfdXcdFZDVMGE5bQDV6CKzZrgHRMztMk1wnkBHwutUst32wW6QmRU2vKpdQ",
  "key19": "4cTTqGaQ816ohHfL2WgkMcYamPMEAbPgB7KVcqHqJDFGJyxzdzFbW6oDhKQ2sQUMdwgE2SLWg8keha73Bj5bfGHy",
  "key20": "1m5qSdgQBFkZBDccheNCZdYqHtBC1vrraUR5TXj7wRC3t6RngUEPTHhTeUFtxGt9fBEigoCpNSfDhC6DaUwfQjq",
  "key21": "2zTPmPF42h8KAr2TUGm3vfUYMcXAiYCExzPFDuPxFQvZ9T5uFBzENsargHbsqhti2v1gZw7kfvtrPeLpdhSzoVSm",
  "key22": "2ANzzGsGeY5CzPrATMQPepnDi1cfPJDK1cvB7ygm29z6jzg2Rqy58qwpQuagtrgrWn7WMpq7VTcVUXkR8rQ5n7BC",
  "key23": "25fzyGeGKdEFVs2K2sfKjDnzvoeXpSFt2P6J8RCL3yZ5tUxUn524SPUfi7bPr2S6U9BY4jvadfHcXyPaeBSf3qBY",
  "key24": "37UUggW5ncizmZk4QRfktCdgo7ij1EuRoHBWCedasF3XG1LQbT1tzHUPWdA9a1tXGu3VYbkwGGMHwN1WBZKJXNnD",
  "key25": "NewfJMK2PjuPM9nTBxsMRZxUAa18Kwn2j5EE8b71iYjGVTDi26YruhNwSQ77w1xtnh4Z6s3zFWQvzGGQQHBxjZW",
  "key26": "3LjmFESMbKk8fzApLtmPgJg3fHXXfREYL7xUrvDGfAVamikF8G4CXfM3rtRSvsufFm5f2FTWCP5J5jEsXWT794c8",
  "key27": "sD5W1RnwgfAfZfL12JVYk36HQbmVhtNJMPMmgThptdQvgPkUhx49CkYXKibBDagQhexAG5GPQYgE7zr5eHi5Pus",
  "key28": "3SQZ69ERJMj6YwnSjPZhcJjzHzADbKpqEzBFG4k1VW7VJ8DnqhLBt6ZZRHgG5mxAoo5uuv8Yv5hj3k9Cc3HHc2AL",
  "key29": "3zEnLqRQmCv42WBsrGtLb6KxEtpRsVDVQbRCDHwT3QSkWroXHJoJMzaeERQdtvfjUHikySvaBpNaNbT8gdPrdj7m",
  "key30": "KgUt7KXQ6brm4FbVdU8yJYA4gv3SX2qetkfd4t9YEYuEzVL2AFSXEUCexhR9RKXYZEr8tkCwYey8sG8mQXmMSsA",
  "key31": "2ay7urbpWveimEKpo82wqvVfTTGAnywVswZVzpeufD8P9GwwVbSWf2hsWeMeZbpj42TtKfNdmXPFE7sTeD8iQFQ5"
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
