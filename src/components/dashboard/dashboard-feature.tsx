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
    "4kg4AyhJ79LuHXXp3ArxSWxwxPSNCV63qj1JeXdDjaCN2WBmz6h5XkyzhZ5etCxvYquLyT1FnbUo2MGdtKP1bLYY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZewkCHmvhXrF3Wdo1r4cTjss2gEfn6wFTLGktg7RqZVMtE55VgAyWKU3kkHQBGhHRURF9CLLtJGMXtHR7bGtMtq",
  "key1": "ByFXqfqa9yHYHKf8UMCiHWon4YcHFW69rChE78sEaTSCNQeLQ9NFYtQtHjgzLFYHuqG4i2B6FQpewSdWWaqkyGv",
  "key2": "2e3uXH9wnJRPAyoE7Xh4DDogTPyy2npbMbybRTp8ZpMeTCFnwZ2YWF8pAqUnLc1rhD9TNNkjiSd41GDmAesmdSai",
  "key3": "66nTQXbWe51HmQdHRCjvWgWusthcGjCs2CnAki6KLw8WH8RGjELRH2HLdgzbNSEDp8E135kB45FQorJv86bMsedH",
  "key4": "5Xx6cjfCr7i9rL2FLVgrnsLBpPzPHHDaXxNUCVSuED5P5vCxqPrb8xguBQqCAS4WT7TrZvJue96g14UQPzLDWNUn",
  "key5": "5NqbCyXEt2qLiScSw8KDLp5NYzmpLTrjK6k43y3jE2iznZ7Mv7XZw94gb4twW8bATAXT8ZhpCZuZA2Eqod4giZGG",
  "key6": "3xWsGm8QZ8x73uKSGZ3i79DFzEMKFetNswxdt7HA3qRFBr43HNZohFEjXSBxRSxcxYjmRdMhsdwBCj6MWUGVdQUJ",
  "key7": "4m638tnNGCNwpJD5KanwMa7a3xZWnxbE1HAqPy7NtLWU94163SmxDKqzdwCDCpX18AiFaASmvRMaR2epyeX2uXKi",
  "key8": "qMRcT4gFcdpVat2iT4yMd33gktcJfdVBUbFtunijS3BEB9DkWbJRzPEhskTD8CQAqYU4QzQ6jbrtJ7wSmF97Ak6",
  "key9": "5sErbjCSJCwjWL246TrCt1juWK3rQBFtauFrscBAsF3XgdC5MUK5gVZp6adGZphVRrkz1Y3PiwT3373yYz9rW4ra",
  "key10": "3pKqkPwrbWXfZmpCpywVE6YKcnVosYLL4Z35Ccp8PrGBwyMBuwB8gxneCK8rVyYRWrjo5gyE6hpssrDtF3RwbAZE",
  "key11": "4auZ93CTVVyym2bpPGeQcBsUVTTxhTU2mJ7T1s72AkymqB2coLQ6eSJnYDiKczunBSqkSxjP5pr89nBiXs4PTFWV",
  "key12": "2GHambpVScKTbXxfzSRMxt5J499QZhahc6nyKFzBBku16tNKgEPrTXdFvQHbxvhCHAJcy9bDkDKyLhCFJL3bs1LB",
  "key13": "51a1Q5fa1RXNq7E82mHogrcnhmm6tDbPD43YkvxncgHtVJhA9gtMExh4SPVo5gxN2UX75jnSvoqjUeCoQBdQjBd4",
  "key14": "5jdkNYeXsvtxjyFKrPAsXCeZ9bM1tiPSVVoZXRxotG4cWF47GEZgavhoTmadvG8RjxvvbocCZ2wdpxRz1bTzX6FM",
  "key15": "5u6WL5RQdKdR2WfCauExEWsBr7XjT2jvkD817YazR2TjgpWkEcc8uzbcQ3jsZJxeSwkEQLvyT2rYiz4MZe7yqWD6",
  "key16": "2wZSJUxwpcYpQxJjJg4aZywMqPfunWBEhKDaVfnMRk5AP65av42WHoJi5T8MFci9vDyXFknc7YGXzN7BJ8CJinza",
  "key17": "2QEoi23o6yQHytR9u7Xds1kqZUbY7GM5fsA3WggBNNLSmKwgxLH7PpWCkxccZ1HYfiQ8SnKmoCiCsq6hQvNowQvV",
  "key18": "3KHJ8gVPKMNF27dbDbTp4ZyRcfYKx9Rzos7pG75pPSsmVGf5mTPwjichrgyjaafe33nrVE3irLm3R2dGSCvzHJwN",
  "key19": "3ZxD7B1cucunMouy4EckET6ochskR6e6QiSNPz47hMYufSbVnWLV6PghcApKs9wbmK4qahb97iuEdP16vHQDUze4",
  "key20": "2HzeHvkUAezgJ1k14JVb7iXK5EebXuaSzomqrkQ4bAdNgzbEC5eFpYkCZp2iwXy8tfGsRZjbmQTjTTPjgTBA2R3Y",
  "key21": "4QndCEH61iUsGxjmRUAb1m5ZdgtkkJSjzdhq9BfZG6ZvhtK9k6yNGZMnHjKyiibG5BhDQEPoLA9CsQqT5QZ3MKme",
  "key22": "3aWrKPrGxQZAMD3Gz5NAcX1wR13NuWrBXW3kRr2QGtXq5cNokDMeSAF4ytKS8SD8BXCBuqDxAGe4qnC5yx3QxVx5",
  "key23": "2DS98wb7hnuqbPHHbHcWq3N9yFMQ4EgGCSQkaSzMCWfep8wvYPLmjywK3wf9ipzRVdZUiMP7MYmEsBcryB5iw6yu",
  "key24": "sBERGST9Wz1D7NPUS8Lf9R8MAp88zttVfzese9B1YWQpocFFCRQD7nhKTZAU1ZveYjQBGcs2oXyozSpQ5iLGSoy",
  "key25": "5eHsATfuStsNBUhQyRETDmBYs9aU32CP7gZPFTEfeoH5tbcAasizjk1R9kUBWNUoNtvoSnUct8ZYkW4FJKkvEtbQ",
  "key26": "2isMHTCnTv2NSzBvsDcbvPDc5fTHMyZGbrjBKBKVwQmqLyXE1xukaWaj7zX7UwEWqqwb8FBKrwNRtu6R1Rta4hWt",
  "key27": "DkiRfkoBxufCcsv3qWFcZeRymasETbzb6QZNgJBA5EKRKQYtZUt8g4NG5tjY2xv5XuhjgiPw1EQKRWMUjoiLgZG",
  "key28": "5ZDNjDJFhdx84qfsm2CZKNbzGRPhBbZE59ztCWq2FybDXcjLRfGqJdNwoQncHirwE91Ypnus3GQJw5dyLJDUm2rP",
  "key29": "4M543viwJwZxxixyvUufT69vdvUSTLk3ugCJQknxGkudPfp8K6NBkrXWW6P9HUGHzWapi3uJwGM6x6WKbxCgepc1",
  "key30": "2hrA4ELUJ3zm4uZyJU52cQ4SCLTFucDJr3rNj65apD9kyxNpJmFpov8vCbta55iwEy2m41cL2n3yZf4YdXqgVV1f",
  "key31": "3onLrY9bVk5XY66gBryGmPykG83chLp6rv9XcykQStqVmXLat9HyDJZQyaaCkY8xGzskZuwwRjQYK4ryC9yNfsLb"
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
