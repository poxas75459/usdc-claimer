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
    "2xLBbTa5GH2vLz9kCBuousrshejmqNTmYN12PLUBf7Lt7KGHjTUoQGzzag7aCp2qp5RVGJSZr2WkJqEjnFjqhoS7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZXksJE6fiPJYtegszGByr7at6uPjfNQrUuQSTasTf4rFsfdnWjHMWdp2EKmnzX2bQNsW5ESN8CnM6kt3txvTsFJ",
  "key1": "2SHApigD35fzCkYpLLWWxxGcogq4H84FWcgDBMgA4mhryn4yD9o4A9bkJnqTCQLFcMfVnZdwz5V3RUgYhXDE8fJX",
  "key2": "2BqEsSp9f5SofJZgmgWi4Qc6Pm4CFUZYLbFjK5iauoRdXndR4c9V4DwzzSNHEnwNevkneHsxERW9gwQ6tTUa1UNN",
  "key3": "oS6gxP6RLvxys2AbsgaPTdfKQiQUtH4tX6NAWqy8pxZPndc7Cg6LeMKK2J9p6q6JwhPcBbrZV8Ujs1Nh38nAfoy",
  "key4": "2WrPHi5mp1fmsgKAYwMJEP3sP8ittQbyQ3mx1xdNPPTV5RrnrVjjVqtaqQenFVFQ9QhDFvVq1mAz5Fad41KCRnCQ",
  "key5": "5BsAGjApfCfkpLsL54brJWxp17NarczsjgKDWVVBVHJXFRHbqRRM6qQUc7BpY55CzBEGPCY7n7G37UqiGDkybB8V",
  "key6": "3eKeT9MjGTNh7X9DvBXJHjkgAew1M1kmgob7JBKusTNnfZrAtzGU3V9ZFaaaALV175rqDGxScLtSUzF3U5qXpEdJ",
  "key7": "QGcc99g3o7FWnMfVeCbcwDcAhPoTrGXpbeWeitbnJWgoJzLNkpi5RhXZz9esH2kpeYYfgoszk93FtXSPcpqd3EQ",
  "key8": "mmk5DRPuuMJBicXAgEMqT8tVf7teW37SRUfXamyShW1Vy4L12CJH6kAZ6MDjdyr5LCW2QNJutARTCtoagvyPzTM",
  "key9": "2DagQbkrCuXhL3jgiAsp8AZ9yDtMphsZ2Rx6BZPoAFDn85p2zBkQFod3bAmcimdzXNhBa38AVicJrXPTZXVx5rNa",
  "key10": "5pDwdRf3cmx9QiYo7Q9EmFmfRgVuhW7soQsupviPKkPyHo6bf7UrTvwnT1QKWd8ANYYdeWrCRJSeYLKDViSgTW7Z",
  "key11": "M1cWsMGsvftNqCpZoPVHXTZryD6Sy3HLDWhkH2KuNtAZt8SGRwLe9SF5sivv1bPz772gv9DGo7uxstaGBJWWqGH",
  "key12": "61FE9r2MDNoGn15Mj6qdRQRYacF1BcwvUSwBcUQMsY2sMAocYNX1hamjfxPZvJyajEGXHEyYHZSk5xUejEMMvQ7D",
  "key13": "36boGUmtUU2uJCFiWfbNjsxZZK2nuwAGYBfVnDxHmHfBfh3LTspGE4TKPLdAb6x11FKLi15oaeXrJ9c6sGXLBy6B",
  "key14": "4BGk2EcgzRGEijCounoAD8AoSQMUwmnHeL4kbwviNZrPQ1JQhByYiVQVJm27rbHP4asiHf68dT7huHMvNBmSguyQ",
  "key15": "5q9od5GNooJsYPgds7qmz1mVyP17vTssEDnnwtU7sm7GmdPaqEJrBMymQxkeuq9rTvkkjrUksHkmCHLpUHKyJZDf",
  "key16": "ope9EEDoSRWyNjPhp786h9ArEFaDqSgBgmyYe1HKNpX8FzEDPsjaa2ht6VjE9yUZcE3dRWwUDTzdTq9DEGZ6sTR",
  "key17": "DKYFAQzZZSzFNKmo2q8Mk9Z1oaXWLMppHt3FtXwyUYoUNXz7haKPvoX8bQNUWXLEocRFaMtBDWKpJ77h1hXU7tb",
  "key18": "3paBj3dppcZVi8AHvAnVgetHb8bpBYrNhrKey161hBrHBNJNn3kCuKju3tNg1EaUPgv92sZQYA8tTTxN7hbcr4kq",
  "key19": "2abBE6cMUD7HBSGpWQMtutmCjCTcimg8pRQjjN3bmbVYTKJavUKyndUsF3uzSfq5h2u6L8VdEP1tBAY2jh2XuqPa",
  "key20": "7ECyff3LbtUPy8DFPEyHbvAfehK6bbRUKKr3dsW3o8c63Nhrs6JUKYTtRtfRUr931tzKPh66MTR6ti1ow3orXJ6",
  "key21": "BbzKwXEK9zcCFAJ29vyDkLruX2caUi2Kkc1EASd3dJG5aMZoQVPbpxnxzwAbYoDBJvd8BDUtWzpMqSdSmsav9nL",
  "key22": "2U49KND7zsKhs1chfgZiWPdz999yfC1pFe6XtqFGj3PXt5QGeY8xGTPzzxE5MLrSowyZSWUWBnHcB3ZKUipyiT4i",
  "key23": "4ce4Jg69eMpByCoNNUefEv4drnVzrq4b7ChpByzYfiiSomDKQLTNc9qwwrFm6kz8oGQ68x2H6RUgeKTmZSNM7wHS",
  "key24": "3GEnEMd3JbLDXKCbauHAPXdokMXBFFh2Uw3Er5t7BuWKik7NK3AmKGwUCjAt8HT1TqSvaFUWBoezeyEd5mvd8EKS",
  "key25": "SP8XkDCzmVBXuNeoUSMQxouDXNCrM91kB1g2i8JE99Y3KzMx2mEq8ET5aMW3JYb3GxmXX7Y8gGiGEYs3heM8b9S",
  "key26": "Zk9nkPYuQHYDBpudY7mrGuoywnqnRcjZ6zLqzSsrefUGXJipGhFhA8CcVozGRuAbxKnYCtRzuXXidcubxJuhCRx",
  "key27": "5jzy8PsiJRV39mVscWmSrdokDM5JgQfMeU8CPqHxATKgjwhMvfCbz13MkvV741aSd5XXFn4ekGsPdJrLgyUxDaag",
  "key28": "3iRiLKo6pmXB9DmnhPR5x1LpWJU3WkGUvoDSstaSq9aihTVwHzA1EWxYCEMk6mXyo6fW4vkdLdHQSwsS4m4i3Jnn",
  "key29": "ZQq8AdzqxkjiW1hDs5yaUME6bxHFBFqMr42ViAXQTavF1eXvesBKvpJVVjGJ8dhr1SXiRPWJrkaWkhm8VSTsK3b",
  "key30": "5pazSnp7gMReKCDGe5bPq15TPcmKfJngtM55A86jn9rKWdnmQwRWJoZ1acaJgSQg3RnKvih9FXssCAtZ6SmpSh7w",
  "key31": "42dbrNfiUnA3waHgzxGjgQVbjsz54pAgMsEZ8vBGh5yYAdED781tg8vf4cXceNWr91BP5eNwqtsCxeb5oK28X165",
  "key32": "uAEQmuCTQ6heWa3t3JkT7wu8Fus9pQ491QPCgwzPqhk6hPxFdn2dvZ7cDhTuCCN51gZByBFjkDSjebWLCMqZmQ2",
  "key33": "4tFwQkqHxSKFhBDTGm71XbJS6ixMJC26a6315csZ9mBeaSvCpqqmmXNiCSseRsFh2SSP2ZBz2boueCnuQ1bHGhqx",
  "key34": "34BH1QFTK3auGu5bAzdKnjt7HFx6qJKc86JXDnGsUwjBx8Eq3FTHd2KXJGxSH41yE17f17ex7Zb2kRswM6z28eWr"
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
