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
    "24RuEEf8jsJuGNati54ft3qgSWUXpiR4iFyarq33SMoAZrcVMVHtTfEu9iBuDZDKT5Z5VBT9bKXYJxdpmFHV6VCN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tLhBwLBoFcV2X6R11GqEuPiGGjwVjCsxSvnzTtRdsaiNKHaQwLkZS5C42YFgunFArA15Ft2GCYPo8e3Q5BkxZiJ",
  "key1": "5BqZ7RMNjja8LfiLrSDi6UEcTLymwZySomyFHMP9VrWQrVsZ2tWR5UNjwfKgznVH3Tw1KwfHDrGY5mSfQft7G2Kq",
  "key2": "JHCrN44d2iHUDKCYsqpMNz1HnnCTMsBWZsL6TiynmSZ5onpnizsM1p9oCuVPD8HhbKizfxqcd8etfyjoEH2yJsT",
  "key3": "2KFGX2yBcrVXrdEFMkcQGiW8jyoRA4TPT2oq4YkrHqoG8xEQuWAcuMfR7WYgdwiZpU4Sc7GCXgxNCH5uu7BUrejz",
  "key4": "7BWnHbi2yby8LWm6YpTvQQojb4Xq5dJb4vcKVj1KtGQMFnt4rZbHowcZCb2hnurx97StdvSh5onVabFgQpmNMUR",
  "key5": "4eSfZK17qzHyDPUSBJDoMEd5SDCWjhXoFYKbcctPWSDDayAZ9nnYdquSzptnwtMNUUNjDrM3tdZpfkHNpmCrGNs2",
  "key6": "4F1z3sAB6a3fM5kzyhYPRdPgwqHBPQ9YDV1CNVcNgg8sjB1xXtD1JaQ5KULMKmaLi6bWESJvXNWnAZaXpaa7cC5J",
  "key7": "57xqHitSGjLgX8Jf2g4YBw1cgCUTAGoh2MiNWGtq5zhUYvMFWT4KCw84J6DM5uDowwkVY9HHABMZ6VqDr179dh8W",
  "key8": "3XzzsEQ7utL6daXfxyMP343U5xUzXPc6hAww9bw6DYkiGrCZKFxMcKuzBtSN2Bfcnca5TtoiUuN9wCibgXh7m6rC",
  "key9": "3ppHe4126a6StW23nds4S7i16yLSAiQ5fTQGQVx9Sa2wSXNdyKx5CbpRAfLteBAMMjom7tvVqZduxLfgKqPQNN2H",
  "key10": "5UzezfZpKaNBKg6Mg9hpNRxNq2VRSijm8qWr5dEDefvyDUrkqT6LoJWBPk6nr1QgkcWegdj8iXaU1jpHAPPFcG62",
  "key11": "2i7X2PC3BGF98WeJ5uBPWWVQ5dHaArWKSU6uVEF7DuVXk8pNX5TUTPktXdK4wSHxNKe4hz97M4RkTGyaWgEc3pPx",
  "key12": "68qw7gnNdfxp3Atqu5KufJbtncruYQYnjt4UHow619fVPtqcYwyLaQcmRqvQB2MwSrakbMY8gACfot9jsrQmQ8Z",
  "key13": "TBj7h2oPMUT7yyCXNGqwn3zUb2McHouaFpFobVdLb7Xe3nNh5MCwYs1qYzU9ZMrqXNqGKyyD6XgxvgjxbB8CGZA",
  "key14": "4hTfSa55yqkzsdk4iXz5RTKnPyULGCK66WWnJftekDjgXzq6yXb27DegGSWrs48N5nUyCWcUZWmMjb6QhUd1Lve8",
  "key15": "2Fe96oAg2bzCB85RzLdYj39ubvqwdCDjJGim4zhC8YAD9XtHigNeu6rP752M7KXFRvgX29jofawbgYFaTH9WwsEm",
  "key16": "CiDS46keJKqJJdb8Vvi4yZcUo3pTrq9U8DcrSKwpH1LAyZZ6TbsduMDkCyRjTESB2BBmpSs3RjH6z74aXNAjGUL",
  "key17": "QciS683bn8wLq8DZh457qFMxbFjguZdfGgPFCsU2hDP2ZUtM4Dy3Zw7AbAyvQGHeA41yZJJX7kv3RKrVF6NMKiB",
  "key18": "5FaPEagnZ8vYvzeYdar1MpiH92KrMFcQeUoEijufZAZ59rw3FYVxFs54EoUCYuLSZKxLDNZv4De3GpefvfEJZiKh",
  "key19": "pY2Fv8VsUEgmDJxkUXH2W3n7QwBtETEiiberQaCoahKyMURdAYMbCT7qez4uup36D6gDT4wearPTD3YeH1Kb4KC",
  "key20": "3T9H4CRUe7hjRjbR3qqoZwpzZsvCfeVuY9YTLUkifdN9LzCrVpvMCGCGc5jBhUJKpsjC1yCAADUB28oxsUQWHPv7",
  "key21": "25jmLcBCCZv4gNKbDZx53HoAh5wnCG1HChkdupsZe3ZXqs1XM2miCUyuEDJwN9snKTH1MAD9WpP5m2F2zwESxR9i",
  "key22": "2vxCt13P8xvKUR5nVKu5mNnAvQvWYGUYVFbBpQ57NSgvJkeQjw2mU2roE8SkrfAZgihWbE5D2KQAhmNkmx9A6nmg",
  "key23": "2kc3doDJFKYwManFRBnn81WZo1yMKvt2X3QhuyJEDVJs2qZFeu9Gwf8u1y4gtPLnRzZjSA2R7sL6r8NUs3ZeiUkn",
  "key24": "4998ahAcxk541vEfT32CsQZuKurdAaTaGNng1AsLKxGxnBtVEpWm9MCdBpvt6KmUq7wrXMRu3Di83GAJAc2DoUhe",
  "key25": "4YHgUUi3VNgshKBN3ovHh3yC8gagoyDzDHHscSFu7J2XxuyMc3WHqLFK9tm75bZ5ZrA8Qbu8rxpLjgHdLd25M4mp",
  "key26": "5YWeiQq3HryV8qDvR2kBW9uzc7WLMBqfafUGZSG9FdiB3QoZGrPZjHJmUuyhuoooa1UKMGufqjeWFmaMunZtPrFb",
  "key27": "2H9H3tVS9scdfN1fb9keHEdJHttvkAajKcmgXxmdjn2DUmM4v7gqeGiaFkCYbYjW68jdqgNKHfGHTY3jUMMcsaEe",
  "key28": "vwvutv5hMGBP4pufAE2fWtmojhLsCEtiqz71gX7yvQVCtb7V5iBnpd7a2926iVhJJ5Z2noU58yvCVuQS6GoaAqY"
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
