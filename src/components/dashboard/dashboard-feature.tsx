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
    "4sV7CzseYmWAX1cvopg99fqYHH8HcdmWjxYexEiMXggVLPR5EuPccuMQqso7Tun7e3rGyJsYfhCmdXnLRKfvCB1T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fYM2gcJHJUjajY2udRwmnRJzpPsUBGBEffPkvf2kYeRfYLLGb26yoDCfJUwfUNDMswumR42KnYko2WR6kE13vNV",
  "key1": "5KweUJMjRBzbE9ovvEbsJCArvbfz7DQ5jabfd58UN7A9Tzz1qYpxbGUCpdjkR7X2NcUggBwkga8zpLjneXMUqdez",
  "key2": "4QhkSe1KDstMTTFzKZFLbwWztRZ2QiKf5eMt5Q75j5NmtBp8zLpzdvBzF7TDkFcP1ufV8dG5kSwHYBXQ8Qw7hFWy",
  "key3": "3cBko6qecCnywMtiXJeHzQrQ1Uw6AgTqca4bANSkFcn6Tv7DGz9ymSjatWBMX1AL7HobJz7UJa9cDA6oTsVLbRZS",
  "key4": "FctmuFAM4sFUVD2bRroCWReHdgMLJG2x6jsXSw3DMGXe5tvSrhbMVk924ykChv4jDbfzjyCT4NJQoJNmtH3U8ud",
  "key5": "w57X181BGMmg5NkM7obHk9iSF2k7FQHigJUB3sjQd751yteMnN9xwF8qX86RzntaRU7BzabUWmgEusviXnA5p85",
  "key6": "3YtnuTGAPzPnPckhTzRvMRBs3ASxZ7hgS9oecjuiHU4RPeHxooiLP17AatuH8GgHqqMV9iW2ZcjCjWA4Jjcpkc5a",
  "key7": "3tVuUtiyFKtQwrYg9L2VH6Mr53TmJMZAG7G2CGo1kGWZ8rnkDjDvG5vQtMawBuDFRrwKQpn3kHMPLuRcpPGJjX3d",
  "key8": "61YM23CXz2TUtw2Cn96FX9QnNnKqNbm2JBZtbKVt5LzLbCWtmiGkJBtGTfL3HWPxWmy5ZcNoUxBTBhu3hRa9cuRd",
  "key9": "4Z5gJYebDLB4VhLSG3rL8pJcgoNQ6epmc4bXFvkXSpFVGtYAXDrwCzLFPUocxPYN4QGLnbUa5kKBrvERbqAmUd2k",
  "key10": "aD8ToMH8qMya2DeXbpD3RSccP4numcxmAaork5kUAbATM2xJLKSHySRggodMKMro1yW5rbEBLwTAzueLJWQXiPm",
  "key11": "5EHLQp9dywHakqckX5AQDavMmYJwWxnXideVc3xFc7zSL9Rxj7C7jW6eddc5zKvfxCFhapWdaxwKi16EstjZE8hy",
  "key12": "24pPjjEZbzxo4fez8UQqc8jAv4qcorR9neMH8WVFj4VXW1dgp72ENvc4jDUXAhv9rPXosFeJiPR2ypygufWyhMYS",
  "key13": "ujPKdsNB1xHxM57V6jP4mq8tw53kciNvZ39qhX5SE9zMT5A1w2Hai6VGSYuHHujUdY4FMLg3ohQzoqLZoVYQrv2",
  "key14": "5zx6iSXPprVR4udrS18Cns5wZ2ESZXk1SA494V5tWzi8Vyapsgq1G8BNZwyjbSW91upCCRkyqa7pT3qohkf1cDEe",
  "key15": "4HHysf9usBdVMJr29db9eARskVySQcmH5TKveTEs49pEdpcdTCRzmaWmKMVcJMqiRPjNCpvAgRjwDg9ZMEmvnsk9",
  "key16": "4zR4cD6YAxkRqhgfyoreVkhfG2kce7Xy3EZeoTv5dRMdZFjcuaQHK64MxJfiTqEnMcuovosQbfGZwVUNXnpB4J2e",
  "key17": "5EJb3RRnLY5t6zvs6WSacZt5Jpg8CLwKUYLui3v2DBADR26Ba9Z193pGM68QDDdxwfQBLYrp3RkZPhxVyEVJVjKQ",
  "key18": "39atbY72mtyCwjHtVVm4wrFa5NR6oVMdRMdYtqgUK9tr1fYvq3KyD9ZprsDrk4EPWVGs1U7xkbC37GSwGtf9KzM2",
  "key19": "5ffmZ9cp7uiR2Ty8wtSKeYosfjbC5u71qTazo66WbhAycJAYueGp4q2N7EUrWzuEzbiYf5QSijW5xoEd3MA7SxsF",
  "key20": "4jLpYCu47RqEEUxFne6QVUapgEF27fn9CR3RrSubA4Gv9gzS2j1HTmJu4r96rXsBNbc9X7aMd6gPLEhpNeDf7BY9",
  "key21": "4kaRKEfw2sdpfDfQAVCTgA87UrnrgH7CK9XWFPLBFuxcZmX3SiTvvQAC48JCn9NnBds8kk556MnDLmQUAWCvX7XJ",
  "key22": "4HrCcue4qiniYcYov6eAhbZx1KHcWmBrJEqJnXEZ5AnbNJwq9fKJ5xLWogok9wZxypzY1KeAvHGcxrysGvKBuG23",
  "key23": "5XsTndFYW2Y9W1hcB3j9XfErGKqfHNT5HCzEqUyimuV65fgH9rVVoY7CXYLk4Qf9AgcnW95ER2x73po7nUw9AX6J",
  "key24": "tPJUiiQtFSMXvXkKQKHGsgJeGRCxzcFAjAP1hNk8UEvzmtFYCuS4T7tsdFPkeCPJqupQ3FBMpMSj6pA8BdJZDkw",
  "key25": "5mZswMEfSU6wHTkBGp6BMoJYPUws94LNdkAzGWt6MtGzyBQB4fVNdiyhJmhHhFaJt3TSFz7PfuC2px1kgBK3CNz5",
  "key26": "4UiffAWQiNSUU2Q2Aodw4fLqg6A734WruySpnf26jkQuCHJTtCFZ8oVevaK7sPvzTwRCK4XARoDEBtENR8LXH95V",
  "key27": "3B1twocBdERoTxA8i7hSQWsSMutGDFokJXRNiU1CrBt4kqXddSpEehBE6utig2VyFDDnKVH1ctYUmxNeUz7gFu15"
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
