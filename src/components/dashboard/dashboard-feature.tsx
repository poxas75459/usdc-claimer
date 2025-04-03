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
    "42BFC7LpyDEEGKBbaTyLHdGLng1Pw3vme1Hmd7mqtdVNHWHHWyL57hWx28iDFBwZJKUWUjurgMCSqGvUZ2NHbHuE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ySTyb8a6SZybhnykfhCimVVw4KLyK37SC4YBQzu1SjLEib5RCH5aWLHmhBGMXHfs1JndwhFrzRkF27mfHtgajB5",
  "key1": "4Bm1fKxktN3rt4p3SypUciJfvveXwmDWPBXBgJAUBX8chfzHHWc31D94XzTxSKSSRwCptwbNvi3WMb3yFQzyuhxy",
  "key2": "3aHYqyHeR2qaWd5ME9vbio6CnAfVNAxLAdxgvyj5beqLHHEQx7sCfFGZiWHcEMwZzhURefLBtYQtXnusMyNw9fz",
  "key3": "2eyecGvMUQfoiWZh8c5ax1wRR172qe7pYdm1jtTKHtecR87jfRHJ7Ax9dJXrzhekkncenTYdgf7cMgj2dgUZxE2F",
  "key4": "3RkgUdKPVdKadEMyt4LSkEpTc3KZsgqoPoQkxMT9BWoJUvicXunmmjppw2hWsDjhQAJ86MsvSkXfw8EuPvQ3CLpr",
  "key5": "SqgwxRZUCmmv9CwUCdjDWyEtcdWuhWZa4BSJaKHgHXHeGFA812VH1sBqbYev2qYJuCQEcR6yV8cd27XX4LkV6Y5",
  "key6": "42Z2sLNRAkaiQtJDJc6Et6K2CK5U5tiT2yXazYX8boPU9EZrNWy5sydeyxjCiDK3fgvpKhT5AreTnrfVvC4JDujP",
  "key7": "2NYqYvfzWFr4pcSMttnYF6gwSfJzc4Sgd3z2YNgkFoueYhaTtpCDZGo8u7qFMCxv46Baxb1guM64PJB8ed3gTrWP",
  "key8": "4sR1kqgJiG4AjDwQFqhFyA5a9jU2zQQqi63X23a3B72Z7CLCdo9vYL9yGhu2k3AfA7BPTYKQxM6b3jrddK7H5MG7",
  "key9": "y2qfJGct1QvFKva63AmUSpaay1EoPya3YvsqP5jWMyCnGuFBCAe8V6Y2qHmDMtrjNwcD4YXdWuMMLNCWZc61LRF",
  "key10": "5U5XEuQZTcgRkBkhypkHku24m6P3684qe5AVw1DkKLXVZWP1fA2aibo5AjFisyQgNdow5YC81FKvRocSapshtHHk",
  "key11": "5kBqT6pQgc5nMApaHGbzjHF5EFwTydfRBTZakUuUwSJzQDUK8TYg1JqwkkzTdSAkTPdfAL3jQgyLhFiWXUBxVZ8",
  "key12": "545adH3Z5HWky5eZa9DTTRycczaWwLa59JyF7vVNCw7oJKtVULPzPVU7R25C7diBVmV84roYMzN6rp7jPZTUUrGY",
  "key13": "2rR7o6RQbgBLFkPQAuDZiBLR6feS8zBE6KCz4ijghYY525roufEmUaZFvXhwdjZjbeBoXW231kw3NNAQ2MYN3hve",
  "key14": "5rEaZpipDU1agUowE61UDX1KUcb2cDP1LnE1EqFsHmJpkdAsqEvRE1hKU6DVjgmT46EVrjj99NcgeeTkSzdgmtbT",
  "key15": "27dWVMg4BoBkZPD1eg6eQ9JpVZhtBHLnL1PBc62YbjmQ3vgiGh7TPr81JMsepjkFhXJqwpxtQDhA9sPFzxqNUvVP",
  "key16": "4p2G4Q8oQLgQAcJA5Pc4MDS656QYTrzT6TQ9F7hsvy8ySZC6aDypkYwQse3dg1cPXbxCGMBy6BRbvKwXQkqjEb13",
  "key17": "MUU2pQBkxddRdkwqCd7rundST4xiHTYZEitRPeVW7es7r8RRhyPz8fPYPqFkMHFZTQrC6mL2xkCLrW4De8yania",
  "key18": "2yhEgHsW5NxzT7S5Wqm13xZ9rKYSM9KVxeTdU2wkWBTp1Ux8jYgJTNJ6P9TN5CTZPEUNWwzyZD6pfnGEMNQrzRQ9",
  "key19": "3S7VCq9jBm8aJU3cqRzLSLmEv7weKgxQt4abL7WydiJCzBqs3zjq7pjxWh4NTe84R8PDvv78GcuAiMLtSM5BWWpc",
  "key20": "4RN7BpBrPTj5r2H6kctcWP3dVYpdfChun5cFU8iB2kQAMsPxmoSVNjpMYE2a49wdvyYPeiYU9wpUXLicH1j35985",
  "key21": "3WmuZhT6d9Q1GdR2LS9bpRHaqc5dZN31DEqrhfq6uX4H6k5wzY6s8tMJ1Lu2XCkvy9MNmauwTf8btbSWHHCw7RyM",
  "key22": "2KnpbwTmUFLrmQNSzjparWokYdmW7MCcKojuvuHb6XVb5Pi2tY5ei2BW8J7jDkS2PfLwxNQpaeTETpKR7Zo2wyb9",
  "key23": "RthNsup3HYjdkjxdwFxA1pn8FSrmyp9Y3BweLWGVv9mJs9nMUwauGKinQUwnWrK9Ec24iVV4Z8bUL92gv9CY9s8",
  "key24": "5x8Lo5V2ruXH2CRGYdHgo6vZfUTFSn654msReSPQW45rRVuHyvVJgmRysDy9hjMfDYpUrY8cbiYvRbEEGUBTHMoj",
  "key25": "5d2pMHpNhGD9WLK5Fb6gJc1T4HNedqp3mmkUsrKRGa9xpMJamU7CzkVhqKLyJ8BGn9NK1v54tfoXutBhxKSPoshK",
  "key26": "3n99A4gB75hwnzRt9oPRRCUJn3oUcw4uBzJWNPyxgWdnehu1axU6XrmqxiYob1zwp6fZmvLYfHEiB1rxsDzfzsmd",
  "key27": "5onE8wQugh7jFpqMXQPsKwNgCUXNHyouvcicgnskgvDvd5qWCeYyWbxcEjp1ffyThfbegY4T8EXPo17baQe4yvZg",
  "key28": "3hNTmjYQphP8ypfU4Hm35sdb3ms37VghJknBzRVVuFVYu2AFNzBgVdtYWwBDWH8WWEPoU56xMD7jtGYNqQYpHb9U",
  "key29": "RqVwfM4qTbapoR4L5fd9KEPNm6vGMWme9yeFT1tdrwjGbaLd5MPpbmFVqqHg5fw4nsCdHGH9omKMLxmDRkqUdEe",
  "key30": "65pWRSyFomkptF3pZaVAdbezRsws7Zcsdrwv1cX22zY23qnmRcRNkd2EqvfADUyEKDmkreRJQCKFjW34wnFFjfYr",
  "key31": "2bmcyX1Mt6KmteMmbc9cNpmxHXRwNBTCg9pWWFUPZY9eBCSSzWmvGAFuEwYK3bRRnAJaQGZx2go2pNpn4FpHx6XG",
  "key32": "5L9H61QdmQw4jBMnbUqVyyAb3PDxrjVQoKptbxJpZJuXQCQqdi9FQtZYzufZdHDuSJar3A78gDvScSRzHAya13hH",
  "key33": "3F6uBBc6gu1UTZGZB2jFh45URQVznFm9SQqYqZfDnXtubZtEAn2jtTnHJJJKF9MhQUfW3dzWvBGFpuT5ZjjvN8Ya",
  "key34": "S4Uos2hPDGsv4ge3WeXEXVwxrr2psNp7HMKqQbqPJEpLaG2TEMBqc9pLrYkJxtVg8EaJQcdBAH1hEQKkqpaxny7"
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
