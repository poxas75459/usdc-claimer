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
    "bBr1RsaDCnAeqtwNZxYGPx7mGd5NnLWr4LRTeGZvZDBin9icbBd3sBetbJVmMon6ue32bkiKehhMZeXjWBTCD6p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4utoBsvwU8tABcybgignDmtA1rBNBbPVuwURrT6NuBVyUsNKoBr13taaQwZEsWLAPW5zYPAJcZQioN9pZ2PwDrUJ",
  "key1": "3K4bFZqGrFDk4pesN6yLU2tmTF6ws5XQG2N1mhXdTYJ5Q7jgaUwXbsFxV2EFqszWaUwW2w3QUvxtH8BL8vK5srKg",
  "key2": "2iK6QJHECGPTY3qku51SCXR9MxoxYLGrNe8h3Gxpm535N2w1jNGwmmgDpagxXdbgUkc52nbX2cFmKRGUseD7Lye",
  "key3": "3xQMTCZH4sBktvm6ZgbGkTTvbrMnNjGMS21HA3nv4nf1LM4WbhQ4ZrtvYBAB7TDidyMHZLke62CPDFeEuXrk4gJN",
  "key4": "Ak6od43Sray2j82rqbyuTFDUSk73bt2qFtPS9tTTeebtRrvbWbpCVx3t8YRFBm4vuEANnTjhJvehCwAMQkjnpza",
  "key5": "42YZ8K2pDSfBjrKvbaEaKHzMC3jce9d2MHpmzk9zjAaaeweT4qDM5gyUd2PYam8K4ergPjwWUzmrH5sSWik7pD2U",
  "key6": "5RF6mktJ6iMmVU3F8ejnuzKpzLuhPsbjLezzCUUkf59WHc1xhGMLaE1SiDc8Esm2oBdzM4zq5NvHhWtvZojYYYP6",
  "key7": "CbaCTFicRppCvJH8ukWSKyCM5EsaZihiK39PjZkSoTkhq7Tvm25MuboeA7Xyy4WMUovvvZviA8bsF82Qz5Wd4yK",
  "key8": "3Bf7fuHdKm7cTz7A6YkVjdY4dPdrEegNUfqCYnFjtuWrRqLCZwYeNg1m47AAzZzspMpedbrafrMBhGMu4RwnhquF",
  "key9": "6zq9EVae48t4dZ1XDjcj3oa5xuyP7RU1cM8y2nJZS8XJaeLxvXSzsRCsWa2mg24yJVPMMETJUarqfCestXqf47E",
  "key10": "5kk4JKvtoPLVXQ3TaE7WbXj93YGYwYBns8LbdvJWrVXHYLF5RdxPpz13fYXmd78yKCEztmWQUdiavZ9ZLc1ZUdwZ",
  "key11": "2H11jH86GpLwL9R6jdfmH2x3cA1a9jPn2oh4SceqQD9Dgpf54DnCv98tDWDk4zwUDLJM5uNhyZUckmEsPnfdYUTn",
  "key12": "2coUdjwSKMsT7jpXVPveLq9L5qSwYQLMNfP5YJkHZY8WnchkZ4i5ho7igSXXYYB2dN1jFR2WfohcHV5bbtYq5Lx2",
  "key13": "2D867k6PtrNhYnQFS41fcQXRGeajDSpWfkrhDuDUS8JUxnxppBuUK5vXyDi3vZyYbcptRb4MStZCSQ4TpT9Q67V",
  "key14": "3ofyQSHnRDGysQgx2MBuFVeh6KZBUhoFKFHEY11ZJhABMMc9DfgWhFog2NpyQ76Rkxxvbo5wkwqLxrvre5JBS2qM",
  "key15": "3Tfi69fweWVHqKAeqC87GkaEZC6yVeEejr5sN1s9829hS8X5aV7TU4akssX3C1YHzHseu2uUiB34hAscJSfJayNW",
  "key16": "5PJWmja75b946Ru2GRD5XZbGReHSm3X5ty6hwqmGyYWgWD1eXqMvFrtgxaSXH6Hs5yYFgwSuFWcRuPmU6sQJATEh",
  "key17": "S3m9mZYrnGRWXzZAkLqAPqgLF7Dwef8HguFvxVyh2qkGd8nYFEPjvAUsJtYmQjiMiBm1eDPBTrdzuAj11SqaTmk",
  "key18": "39wsZFtRJL4vJGwDMYYs5t1sD6YunKXPwwmAVut6DTSnz9qoopRRkjRwtv8JTreCnLGk12GfWtthqVc6hjK2jEUb",
  "key19": "398b9cSEViPA7R83Sm2zYhLUaQ6wj5F5SBiFD789eR33APFYt5gtjN8fj9stAfD6e74GzMkSqQ2zRRYk3GCiUVAP",
  "key20": "2N71S7A268ZPTj9Z7dW6HYWcaThoNfo1oWTXeCGj4p45aFFTPvBMLjLrn16vqFXXPsRZkSUSH9tPhA9jdfiabNGQ",
  "key21": "2FDC9o1T19nmUYETSsCF2SoBhR7ksyxozbyvaCBVManrJsRQHkzLgNeHoSKMtYeKFaopd2WwdRkgHENvGqySaw8a",
  "key22": "3HgTgsSgczXGhZ13YRo9gZn1NQMD1WjfTYdGVRKZcjrEzv5KLkvjzru8fMBCSFYX3dMtPRS82H1BQqBEJBKkCree",
  "key23": "fMipC4Pi82WsPqTiz5PNHc9YVSW2CMV1rGd4txeDsNDySmrbxcN1gettGhUKXZCwom5sCP4GHW8btScYLqaZTfg",
  "key24": "5dmhJc8MY1b2vL989cCmuWUfDGWU1uhuK9B1BUy7sgo1dATWsRnuSb4x1PzMTZCtssPizQBFAq5BBjgcx7Lv8Q9m",
  "key25": "3quSgCW4yCH2g2avpA9EmmRN72KsR7DySrU8kzumPAxzEngZFrmg16hY4P5HjogxFhBsSRCuHYgLgjrGG5KJbt7L",
  "key26": "5TcJGYp92eoDYsDKPiSgqAzRfQtML8w2wQpDPTBD322ke9c1DYPPBLw2BBsxbpVsSiUdEiY6BLaJHZ6u79Vx74jB",
  "key27": "5cTDxkdupEKSHi4QPftjvcQnAaXcKrvCTpXKeKhyB2fRo5yidP9nTJgskAnkXpRz2Sx3WJzQScCUjiaB6Sd86AgZ",
  "key28": "4WT3F6WdLNVdKejr7P7mcNiqzxVgR82J7HxiMtK5ejeA7E6sUoMkWc2ZJ1nGiFv6TUGzNMMEcB6E9VKd1saN8R3"
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
