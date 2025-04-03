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
    "4gCQgCqRc2yMm7TF6jPNK1U4B1A5zcphRBF6WJmBTivBV7fE3xGjXCdA5XhJ3d5AbT1y6VJmgKXgjgnE4ZwqzhoZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UpLZwhZ6K2KYByjHN3xs4GzUF28aigvepD1EPramydYAxGYF9rznJhzuU8ukpH923HeeUjS6AXVQSM5Xn2aAuG9",
  "key1": "3bAJ4reZL85uoYLanpNMuVVzHURdyGzen2AMYQBVkVaFjz7aQtqMQS2jbS6cV31gKEqX8W5RUA5KaknhNwcdWAGq",
  "key2": "7N6gH3nYyWaiR3je3xo7zhCjKoa5tKgSvqrqvyuL23WDy6N6AzuqthpoE4rDEQvkxBZoANUdHxRyS5htcATcfUK",
  "key3": "2KdYoKQDp9PR23WwAm7nYQYaSWEKHjaXdwJ5sJ8JAmJp19Ey6DdDW7K4PkqSJgmjznCh4B6oQM1qmomHU3rinL84",
  "key4": "9dpeTEudkGWpeVxQD4iKSEknxufUYxnffsAAUCHSV7ctv3GAXyDagsqEp7XZipCun8agDcQcZ6me4CZchprt1B1",
  "key5": "47KRtNdnyozoHXK4ckgUpwUhya8rvd7gb8N9pkWqoT4GEuJYZQbTbGYXtLqjWSSPdkeBaNWsn9EhGcyZgYL6Rh8g",
  "key6": "3C6G2n7rTD1LMXAbjRbUVzHCbLHCmHM15sTSondz5UodBVXEaEMQFC7mjDkh5hYQsurEFMbLLbJDxqXcAzPwuYYA",
  "key7": "Gz8gkHC511AqEaHVbdKgCAUMYFt6X2J34pLt91y1RyMfjRtYNJjsMf5oKSFBbo25s8jf8mHRdVyHcpmEYPF1zMS",
  "key8": "2ede8jd2sRakHfyW4yKgPo4YG7rhvtoB6hbfJpqLk8abTbJkZew698KhFV4jPdA8cGioHEN17hKN4L6VrEoM9VPG",
  "key9": "ydSc6QeF6S61XRbgpsAE7onWFnxXJ5poQ25Lc8Bby1P8YFJmkPkMUyj6uVcjkB2T4bLnWXY4ojLPYisgZCRHXiM",
  "key10": "BDs6Uoer8wBhVmKzjpz1EWH6KQtdR7vkhPCJtPUwxM71WATikYds9YXBXyYunAWgY8phdui8uzkXfsu5VxSK42c",
  "key11": "2R2y1KCCGjiMsyXus1htAwHF94k9EqyxgSCQhiMFHocccYK82YJ3v5oUBrt2EhKaU5Rgi7amJzxGksK3CM2iQhnN",
  "key12": "4xfJtoegSJEdnfGo7kPN1jwzoQRchhsAYCe9WtSzCUWvT8c7H3R29Kurf5ZPpoHNEN1mVqCrU8sL6EycAiofcXnT",
  "key13": "4X2WYyZ8PXkKww6fMu9We3sDgw5zRUACocwJD4rYXkW2fbonwpx5s8T85oxN3iNHR8ETAiLpQthf36pNoeMczN1m",
  "key14": "51fkGqcjRXVSrGXzVVod49KEQhq9fCKpdC33o65Rr7yc1Eaay1zvdbr8Xeh8si6DNGiwkb3YciZVgVY6HTyFqaEr",
  "key15": "3ioDPPHfSD5e6XPH3ysC2KnRkL1xa3fEMmfuuUzLueyyk5msvZfGVtBcC8Y9SRyZ8PkAX8E7pP6An9keuaNJjgcQ",
  "key16": "4arLSBkEW97yAS73MWiW2wTWrUk5zfrSnZ4DWtusFugDpZfBt8AntB5MQKJUfvpFpPJFCeDvs9DJSXZ9yaKK6MkV",
  "key17": "RpUEg5AbZPmcZUmNrXebxS9fpUvxLP5coGA56aygdXV5nYZ5zEdtJeUPdj6qKLtikhGEQT28DCs6JzDK446SUqV",
  "key18": "4RFnoXG5WmS2J7JCxcN6DfxtLhsBG4Lgt2jD6nZ8TCDFtUW3Q6DTa12YAyMHziBrrEY3bJ5agP15W1LMXbPJqBij",
  "key19": "365cCtqNnsvv8TggbnCZSW9Hy63cyNezjuih2EypGhieDEatrnCo7sQaGL8GtxyVRTmZEdnS94WQyXsjirBiGn52",
  "key20": "3TZwqz6nsWmjiDPeu8tv9vb9brYxEGg8wgnLeERcPg1QNt16qbA7PvcyFXQWn1vuFo2o9Yf4AgkKb5Y2Ktu2xgQc",
  "key21": "4vFLhj1k86UKL3HQSQn26YxW9R3BmPzpu5PhPH3ErkQWbuzD8zXdWxbEbPHZ88gCTxJqDLiUe7Q4N9ZdYjfT1UBU",
  "key22": "5KUK4JhVGdqtxnxB5xy2FBrjpZHbFFqSvuD9WThgChZDHymGRE6kE4x2eU9sNDJFuv2VRJjdiUfK5SGWKhJ9aXh3",
  "key23": "44qrUeBXXAQKJa2N6q6bAxHFvJjyeuoMuS9WBJsEFskamQ8zY35Gkq1kmR6SxrQwPa7tbViefejcyv4dH7AtFBE8",
  "key24": "2Zqw7GY8z3HJFfcTRpJoAtPtYxj6bE2BQVjvHaNv2FPhGu1vL1RPMDVZdJCJtxri7UBBYH3nCtHBB99eoP9aTXgL",
  "key25": "Xee2etCdP64TG5sjHSsGduC8GJLfedBQwkDxoFwEnCySUSS2euAAzxevy1DrMbcGKigwPrkP3Wh862Vj3esUKmr",
  "key26": "2c5RDxBvqxEDuVMw65pFFqBiVAvmyyQkoDcqF4znfePdnvWhnbsrRpoEvSuro3Vbp5gePyQi8HqKDu3b62GxQh1Y",
  "key27": "3GyhnDAs93vX9UHPpmgZoKqjog3LEpZ9jVcDnMgRxWjUdtcsuXB7uhQHVkdGtjz5Y9TJXRHPWXMeYyri13nuPKbP"
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
