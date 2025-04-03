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
    "26Qg1cNyj8JSCkPP4XiKNNdYUhCTLgtVsXTfSf8XerE8FBwTfpdXtw2TuE9y8x8gZTJNT1xosEhMDS9NjaPdEZwx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66PuY8yJpr9Uq3fnfwcUaNuGQQMLhSjbxWFbqjuZXCrRVnjQo7E4komnXjqXtraAdGUM9rhVyyHCC2zensCYLZMC",
  "key1": "5k61n8rirZiCwBvkeC9Xjh9qKH3TD8ETLz3SSwHuQ2wRcgWDiG2CbyJsQKZ1zJJRyyvBse4KcwsMy3bRUh8W8aSW",
  "key2": "2YyUd5NmxspRfqdVUvCw1m9q6wrt5jcEfiJwpJ6onNzNdfyLBCc64KLY7X8vYtqscLAaWdTAFeMcSj2oyzHoYzdq",
  "key3": "M2yWz5rdscZrRmzJvj521drU2n4bkfsxQXxeSh9JZRMJeBGugw2d693E8r9Tjq3inkSnvp5HngDMtZWxfhsZh8e",
  "key4": "PtAzdhG9uEtjad1PkiVqcX1v5EbsCLgYXtmRNYmDRNSsd3ifZ87euAeftvw2ZVn4sufRiw2f2TLq2XBfjzYwAqt",
  "key5": "32grgcKkgfBfj3HtPUQLwRxeYPzBdFEj2bgVwBf21MTxtTRohNmpepwXY1vsQjmVH3wd9L1io7rGyLxqfSeyTqgR",
  "key6": "8EWWwKzb17DehE6tEZxBCvdbKhsFENMHiM41s8WmAfJDMUznC862WkwU557rLiPbHTWFtNEHddjXWT8qngbHcqm",
  "key7": "5xwMtXWqjUBiiAhTAdjZwQ5vx8brvecurrQBt1idHb14n1jJt6xwr49DeYzFJNbQfQxrLF1adRAN9rQkc9XAao6Q",
  "key8": "3Yvd8qTu2sgSbneR8RyNWpJfPvWVoYfUYprdMUyT5rjKy4tmHnriivNXTpwKFTg5Pw6VYzd9aExQCkghHQyCKVzs",
  "key9": "2oVvMDcRREVCRByZ7UG1NDBaiF9KiLrYoXKbAq7uZVy5ae4Y1AULxshtuf8AH9TBh64ENvwuhh8UQErWf6CYnQLU",
  "key10": "4V7x5joHnUFRjWBF9eHXtCopU82urYoWFio5KsnuB7uH8D2LRPP4q1mMyt9GWej9Acp69TDPAtZGRJF5SR8kzahm",
  "key11": "2ZjRMe9w763PGUTnNKLYakHGUKuS7iHH1ixDRSP86GvYZaruiiAYBeLZhP1NnGuefEAS2L3hpkKBN8XxSaCFTzio",
  "key12": "3zrnxGtCifYXkwx449WejDTURjYi6DzMd3GBAwDPszr1uenWCFYMbAXX8BxvGxc87Q1CDvf6W1ZdwxKbwW8GLDpN",
  "key13": "4acPfzMJnPtM5BrGfpy295Wk6xmELz4g3qRrnb8rYZC56ed2rkXV9L8BN914mLzeh3hfuWVaJRiqoEeXGjBX2GYK",
  "key14": "5WBcdXGHxT8DDytgN73TjAduXdpf2QizPTCPhMUntVQGNH66jJKYnQTGFKzYDYdxMdqLhPBu3Zsw5hxTz3Y7jSB9",
  "key15": "2RtYroGSzdPbsDBRP3czENjWFu3chxFgh2ZUKip71adi5akNMzhYCuZXZoyYP77wmXLWm8SQDGpBym85jTa7Dsnm",
  "key16": "2vGo2YGu7XQUrNDsqixoPBc2tWuFxuVpvdDbhUkpvw4BUBWbufZd5qRbiZvprpayd8Ed54pPLMcsHPVeQgNQFsfx",
  "key17": "4AgzYgUAE2M3h7QWeU179CypJPRV9UWR1qj9o7FXL8qJFuVjExFGy1hUzFyAQkjdyVQpBFaxQzZeKnCfWky99uan",
  "key18": "5yTASGDj5GHK8oXS6JEXvp1AozujSReo3h6mFmhQdSFy8rY348zCFm7YFbtgQFwFoh5hffrSrtN1uXdREWpeBvF4",
  "key19": "CZqqC6Tg9aKspJUiTxcS14we191oYDBcmNHHkmZyEt5FPcdG8qBCQe2DWDjb3fodLnN1pa3L263Nj7b9ypxv3tg",
  "key20": "5bKzr2kP5Njr329n6tc94j7hXy6N3Lnw4CXzmYJMTFHoN3MZRiDdFfKh8MutqWdVjraAenj8Ym7dfPTP3kpdcckA",
  "key21": "4d44yyFFBT28phuJ6CDiwoCoUk2hTd7w5royxcwZg7vtir5YkFeLfapMZznvEcbRYEpsJx22uV2FqgJkaRDRyZXK",
  "key22": "4gdfj7ztJTRxQzURny3syVuxkh8MNwWGhMkJ5wNY1c6iGina2FXXEiv9H1joCg6d4CBwuwH5LCFmu9EbdiujpAHv",
  "key23": "tCLnsCEPRtBtddV4ZgfDHVkt6KxaFCrtMwKtGSN5BX1XbdUpJUryhe4gnDGgCMgUPoRvczwTbatkPt8MCd2FFWR",
  "key24": "5HHq5vWZqWSvXKXHcWmejTJwQPzBED5q78ApNoaNuhkb7fhDrJ3HpYSa7GVoLKJQaVfLousudspb5yPm94Tiw73p",
  "key25": "1HQoUjv5cbuRfxNAm8MG7FkYX7CS7rrGFguSdcfkWC45U8tSx4ycKkmdFcbZiVNK366Efr67BsVdKdhVccmmR6r"
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
