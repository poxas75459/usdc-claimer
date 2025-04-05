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
    "4p9f5WegjzZUFWSa5juEWAM2gbx865W8sdsCwSs5ZVbkEqHcRsVGsrHqJZxFD9ynCTfRRgS9GYT8BFx2D3HSm1r3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QWVzaMjoiveDPTfVHtEWhuWR91TZgqwyNQcrAyXwMGJSJCeghwWPsynCdQdbdgiBkahEDKZaPz13Jh4CDWbT5Nq",
  "key1": "2GxEVGnFGak2CCLMeXoenyqrpAdoycpjyFMh4UfgkxAmTWDjugAzR6aZ6Cxb4K8oHtfX6NNGV6rYJMyPibtgzRCB",
  "key2": "5iJnwbMuon3yshKrNXrK4y2dyqF5wdwaTk7aCs7M5Vj4vQvN5MK93JKkqbRqMAcaKkzrzkgKdXU2Ez1CNqK7qMQy",
  "key3": "5x7YujLHnxW1Yqxe78rmEKubR2ovC9KN6kjUCrBnbhK89dAZgXDpmwe5wiLTzpCdi5UwHK8uc9wDux9Fpy8WAT7d",
  "key4": "65kGX8kGgiX2QyAvoPMqy5fWYwcQwBJp89bVcMzx4pyqCBwqdsV7wVXu9sBqGvMUfBiGxzF1K9g9j7ChvnZnMKJN",
  "key5": "33heHqfLGcS1Ksn8ZBGxEewCEoQjfjhjL15jAbgHpm75dfDLEKPYkTsFiTKnf1hoKYS98uSt6UspczrWoHzKLgnB",
  "key6": "48AV3PTBjUpfK69QZnPcqjdVk9TeungMWAGYvrmjA4oiqgb9yANUSyVcQVZiqNT8u9UV8xE64ck7EzjxjdfN5DFr",
  "key7": "qmfnRQbb2mgUCbtScmMa5jqjYMsE4eHZbhdALaNrUXD3xrxtGhEjpBDaNtDceXrbNbhwDwKAeNNmVjGvzGsamSF",
  "key8": "519x4JXwjAQ9gEpakHGB3wSXPsdWWEEwdkvhrdvs3dq3pn8JtqLfdiBjC4C19Lwd5ruPv1EbmAxh91NvFv1MuiHA",
  "key9": "2BunDXt6G62WtzBFDMncv3UPyPXfKHNiFZEESMXtUwJyqQ9kYbDSNTWv5qP119vdx44QKkxEG8hH3K7uM9YM3Rwd",
  "key10": "5qD2L63oALjfXeHmKc1FHxaCkCnhbVwREP2dUJr4dmnWVywasLyCUfH7zdMAqFzAeLZFiaNhy5eTz2H22Euqrbcx",
  "key11": "yMD7qWuRvExnTYEyxaLvTwqRZhq1ZvZW3MYwtn3yNGowNk3fG8mAQtqaUwwqUwjzseFe1DYHPn43nirWeNN8E7n",
  "key12": "4vJPEghzcuPPMBBmRydikounnwMYMXnEk3Hr3bsXKxmFH3WhyqSFuzHwJipn5FLTf4mE2DZsHo8WfJHFVoEhNCk9",
  "key13": "MGvB2sFVhKoTLgADp6S9addXZK9DfGhjV1uaRnBcHAVu5yknBTr4bXUHFhnYqXkCAhnH8KWdCq3ZpJHRhtefDk7",
  "key14": "49Uu7L3d5KzK8xtEB7P1robB4nzwUjcXNR46tCUwUD3AXGUz4fSuviaXwu5onHRqLwhhwXnHCf8wpVpQLq5ZLREL",
  "key15": "2tWzAwfGshmpfzEWMukUgizYvUZBmyMR52kR3QyMzfmbJSF937SvmkL6Ziy9SWCsQPX3bka8JYqbh4ENxB8NqgKN",
  "key16": "2f1qUNeiZDcDHpxxL97Gug4nDDoZERhQDty6USVMbSVXQ5DGw93mHkzbA3utYD5u1WKvEv5TEzKFYJMrZu2j1td7",
  "key17": "3onkb16ECZtcyZVoBQh3dMYF2vtQpPJz1hqNT2tfpSW6KVrRPSuXhjfteV79kCthGiRi2APFf843Ye9HvRAVUgzo",
  "key18": "P4bisJamSkRnzCqHhBgaf8kTB8eqbQ2BJJyJTzHkPa8B3Sn6VtRJiE9x8WLdRp3uu8roJsdAF3KuikAzua8CRuJ",
  "key19": "4nKRAeW228resv52qMU7JKB5n22XKoKFt7uWvGSHSX8n7K7HFoXmrfF7HkraZXrnqLufXWSc8oWUqT5dgUZjHq5A",
  "key20": "2t45kPAXj9ioUzeah3867iQPeLbqTM8zHKkDoRo9wBGw2kyuiRLVtKAecHZC8yz5xRhkT4aqSb3YPx4rcvazCctw",
  "key21": "4KfKsPyAuPPcMVyewCPce9fDxWxoJcTEi1r8CJoSSNV1taHAxv4ZUnCQ7JDnX4NymeGEe5dEV75QG6qaQysH5qYj",
  "key22": "tV1TDVkh3avdN9UcFWDFQEtR8PXHbteMT7irJ7F6aRqEaxxUupg5Pjd9VbK7rNadEkUVFJdY6omcrJzNCCvxHXp",
  "key23": "xs9oVViQjFkidjUzfKJWjeTS1XgyzDZEBT5caDa7GDBtsp4svfq4ZXkHtLNRqKPurYvm3wHJ6hd4oKSpPeSMGeN",
  "key24": "57QyvjiJSaXvRSPFtG3EJBZsHBUGrqbQS7UzCAwph15sMUJoajkPFXwtBSijSfwNehNx5JBkNGWr1R9nSEsymwSC",
  "key25": "5FL5DFSQXeEys5ZRc1AjRe3y4ZzKaW3HL9jCNBKxtZXrzVDphJVpPnEvNcpAFLYBTYRztRvVmsg4s5QKSN7bMCHJ",
  "key26": "617uD9ZUKw6fs734BW5tYxwu2CA7q6PiNqYNPaFnHB9ZNwGsqpC1yrMByKZpZZ8rKEDSQLTF7aPiqCVJm7UBYNxQ",
  "key27": "43svPbzWXYsW5SJr6izr8LtQFk2uakhHVfoJw5fp4DY4c1zFnJTdDYniWBQgRq131TkYf7vzPugfuy87995wpR7A"
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
