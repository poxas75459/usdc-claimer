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
    "2HjZJ1CLTAq26J2SVY3hxNGD9CprWuKpegVNSyX9VMmj6XbiWr962GySMC1YNAG3oomVq1oNfGiMwx4oQR39MuBP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hPYzZDonUwWEeK4Db98a8Whj8EZSzhksmgW8qcJ1DhGnAj4kGXK6iP2qyPJUtCjQU7R74ZjKpAKpyrwZ5a4ow6R",
  "key1": "ZDgz7i7WsYUbXXTwxNgeuC4GzRgEczYQGXred5gXGXuBAdjrh5vbTEHpkhasiXtj9pgg1T7YCtzzLWXJHRAfmek",
  "key2": "3aLfoGSnVPqj7Hd53qY2rhj6NQCGQ5FCZSza7h7pwUhdm5cuSnUtsVJEwzjW4CxdNhWzuNYHEzK9cEdmnn1JqKvZ",
  "key3": "2tquN59i5q4GvgsApFPSu6yVy8JR1JocqY81fZ8fJpu8niUdzgoQ9AjDZunpkRsia8vKdMJvR8dty3wCoU5sYRV",
  "key4": "3iuB6EndLA4ZmCSDzuZoAUWQAkzvPQ5sYMfxc4X1hmfDajVtophsCF9ukeU6qSz6G1FKpD9ngMFDNe6viTySK6dZ",
  "key5": "2yCDejnpxttiJvsXXNehuQWD97yfBt1XKPfGWGedc8AR6dWib3UHjp1b58DmLqmhnN47sN1UE54dMcUCZczRGNdk",
  "key6": "2ffTJEtqsPJTjQsrH5SQSrJXNYLaATXzWHr2DSPCcWUpvdEmsoKToDXWxr5RgmgqjgLjgaYeKjWg5BtrRq8GQmmM",
  "key7": "g7i1UXL5CKaSKsEVPtwPvahYKWdwtrEXGnLvGHHqgXKTzyckMmBqkAuDpu8pJte6DYJnbok3Q2rCMoXLtPLSmhN",
  "key8": "2mzRER11xVEvzKEh43ZuQxKpfmsg546wWkDvzhiH5JPJfP7RKKBp6i7fdeE7xjKaVcVgmeCeze1RGrjrRtuTVmcF",
  "key9": "2vQAMkvt8ARkJzGLbY1EKqdaXbevMHNdYiw9D9LMKwwBmS7iFBrTp2GQBzfhyh99EpjFg4xSbzFbPpcwDoitbkJW",
  "key10": "5isfn9dswJuVvZksxEUuDGKLzwGgZPYoirjp7rnMh45ntwePqtKCh1XXvv5nSKMBRdPhF74mf6ojCyYSPt9eaMcU",
  "key11": "P58cQbBTmwPihpfRo2og7UJ5ei2K5bYY74eK7hXvpFUMTpqHts3AVe3oovAzE5AvjRcv86Dmkmv1oPG5xBpStJK",
  "key12": "dUSbLty1HD2fnBWmquLXsgwPk9t3ibNQaBd6MojJtSxW6VQonL6K18xALNZ7MAQvBMjUfL1AZPuYFDarPQmvQ4y",
  "key13": "4PRZCDQgLHiVJS3NL1dvkoKKfrUVg4vLnWuU9kKfBfxwFVamuYNAGivTRfnZyBqY5NwHEmkivhy1kgDRr2zuMfVj",
  "key14": "2JozWRvKSqm4LsAEfBYiVa8fTJkjnWMiiWi1qnk9aVjg2XGGcvjp5HDR5KYLfEZrRqwSx5icfUKvpD3yhNkcgdWy",
  "key15": "chchL3332WBGoMhcXXnmKaEad7kCxaTeqS8xWoKHZgX1tvmMm9aPWy9DMhRhnT5XtbZBBqGm7dt7rY8XXPvHYcn",
  "key16": "rimy6P9t4ByG9yzBKJuxrcuPpD5fh3nDPdivAbMKCcHmGDNuk98p8CQSsehDHa4twjcsFWxqk28RTauh9eZ3PFM",
  "key17": "5ghyDbCcoqHLMxCx5NDaP41uY3RFqLpzTBBEaG3FGXnwG8bDTLnBRcKpQHh8eSMdkAB9k2f1GHt9ogrj8GSvBHtP",
  "key18": "2RSfFHzDtAD2NrMaQru5PivTEq7FAC8SbcKNzVSxpDgX1zrxKcstA433iYA7EwuBx4zqrKfsRYRH2TyuyYyHBpNt",
  "key19": "4ZxCUKpzKkSmzYznTGeb3qPHa3An8V7rgqWkLTCYXNKKksUMRDZ1TBA4G4BuScjA2aGYSPkBd2PAouP53U4ozFfB",
  "key20": "4za5zkASpdCnyCrmYvtgvhqvUB4ybfZwubXah1uJTmwMrP3Eb7XTUYrt8e9qh6VF3SMZznVzQB5Q44V8RW94We2u",
  "key21": "61zFrMu4xbA36RibzMtvigNEcrn2jk2aSvcMcRWwifrVZk7pHB7D5JKLGCG1Y6738xpEtmZ4RZaTXRVDdvPuYqwQ",
  "key22": "333vyij625LoVw6fb89bd25Bd6ZGGPi4XjdS1X2JrU4oZMkw8dD7hq8PbH7dZDpetUwvY4tHMrJ9ms71ptjDRAPX",
  "key23": "3oG6eYn85HDCwZjc6GF5iHoRu1LdhSRBkEc3pWWS11dgBi1vGZTiTkWyiD8qcdT2tPeXb9kLA15UvcKzAmsWU4MZ",
  "key24": "Xc8Q8jXgs4uAtbBLjixEE5oMJWLYVLmoVXGmpZgjDaHDjEHV8gJFeoSuRU96tKxkhNWPWUZ6RB11dN62ZkHAKTn",
  "key25": "37tJdBoVVxDbgpMtdn6dN12pG5enH1WRYYmR2VnPkf6XWZrn95XbJbQnP5gBRv8E17snDVc2hBEwZowgvTmJc9SM",
  "key26": "49jWc1RUtiDREzARZoCmzbCY8MHo2i8xV3Ng9YKuYYfUopCWGe5VEYrMNuQf1GWdHXg4pL4spsjM6jQmT1cMCtHP",
  "key27": "49RszysDUeA4conU2Sp3cbJMhhsVh2AUW2bPoGCDkcr5TAfkHs51eHdvprmLPgcKG3bhbF7oK14LuyE7FdmVa6Wr",
  "key28": "2ZAYcJ7c86iMrEUziNbnhdim7FfgpV8cFMA2vf6eyg3a2aPZoG8gJZvL7qfwk3Qy1RSTiaWpxxcea9T7edjqXi4j",
  "key29": "4uxMA5wotT3xqNhwtqNEamMFghPtGmqTUhcUzcjzSjVumxTBQpskbcwUnBxPTBkoKfty6jxRtZHi9zLn7pFJqxuo",
  "key30": "2QDix3Td3o8WB9tmZxYHRRKgiNvSx1Ge8YAeHgkobjutGRj776Wn2o6ZqXaQcs1LhXvHYDPp5aCRXP7FkUUUooVr",
  "key31": "6bk215nd8mKJwrTgr8heFrQuPPvW9NaL2XGMKsoK7n15RAXAfJrCekjTMnrnF6uFuk4pNBS61vgYgQC7KD5yuvR",
  "key32": "4Ft4ZA6giGJuUYT3LAZi8NCNt2NnKmSgJpxVp28nnvyuPLGyChaVRcDjtPNfj3pJknQrBd9oCmCt8CHgoQtdwUpJ",
  "key33": "4eqD2hyGvHTyhKWrGVrr8SNqiTbaHAnu5fJrULwW5HStVi7syw6m7eC4hiJusrVVSDWFLxsXRYjXrD5qAezYaFXh",
  "key34": "5Ueu3MymVaqyjNeTiCXJAk7jERMyzJm6UsK3DqDyc988DYf6fkYzgichtLbFaftb8c8C7ohjbQZ6mQHAxBRNmkXL"
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
