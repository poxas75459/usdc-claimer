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
    "3wzK1tUCNStW2RvuFG2Sw9uAY2JzDrgdJPmJnrSoYYmiGQ85f5DR32fkcKnFY2B5Fb6dhoUqXoQSKXTRprvxFH1w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rDfMSYvhQjqcHU6RF5sSdwGstxYPLvspG3xoCH5aJStyB3SaX3pFwqQZTW8x1FrfJmA44ikDk7YwUhe1rJP6i2P",
  "key1": "4v71JfqYSKGYuHMSoacxisbjsueZYzq8YCfdEXyLffNG2k7U4YmwF2EcZsmm5uHEhAA6J5X9AsTk7aKSqDMUe54p",
  "key2": "3pxGxW6Hq5kzERU5ChCZi8B4ZS8sv4AoLdZBGbrsoieJASsXNyQdMiMBgReuiqLvQ3LRpSm79Qv1dahXCAjEezsF",
  "key3": "2ABjcXrik5wc4rTNGipdKENMSA8R5vDHsNFgb8dC9SeDK1H9rAUHC4Y5TDmAb5fCN2r4eMD83Aq34BdcGApYwiHx",
  "key4": "2mfzzRwM8eJ6kcziBSGnsA9HSB36qnArhVb6ckBKHzFxxPqb8TdsGV1fjvyim3vSRXG9WkNhd74fKBfPLawhufmf",
  "key5": "4TkUGfBLnUihhdfocywpUVCP5RkB7MTs2SB32t7b3RmtuLzbbzH2VZFZ8o1v8SGWVqCe8oYnXqVzv3gpsMvYSLZG",
  "key6": "3sQr6xWjGMf9zTz8dtCbdYM9MbftwhhizbD4S6tH3YhgecWkf3yCzCXaC2rx3geQGQz7nAnp84bPVaZRHYc9yur5",
  "key7": "2aM7LfHMPYUds98yf7pGEcNyPbXUxGVAbxuXAsTQ9eN5VkYsn3Qo39xJ7h9in43M5V5Cts45X8vXH2ELmVQR76j4",
  "key8": "T2rae9BYDhApJFAT4TtVGk5zqvyaPGtww8eQYviNxj6bVoyJBpQRH2PfN5kJQS7nnDnaa397hnt55iFEHCy2iRj",
  "key9": "2LV4YYqPawE4LiWX9sGc4eqkpwXdf4QSTyvymDJeJeuka4ctQSFTp7AhCcqgbYHqGuJWqrR2vagVbxq39ppaLy6f",
  "key10": "23R7248M17N7JZNCu29D8LH4WcFYHYvut4dZEX72Hw3yQmMcxR8F7MokemP9xmpuyP3FrH94Ppiidf5mP2cEZy3u",
  "key11": "49QbuUQwyHFxX1xMnB8A9128rn66x1xyobxYbcFUT4tsEMAJngSuGYbWrSyWexWoajHniYYt9rarS6c9qZa4tq3C",
  "key12": "3a3fK7pPHkAhMACmFHUZ5Xub5q7d4kwcgUttqSmp2cU1VTcZZYEGneeyi8rBxUf3L45ve7FEYeT5QfKZs7kJk6PT",
  "key13": "2VBNqFayw3SqWEjiMTKg2JfhyY1GVc23QQi8oEugygJx82ur5aHLsC5CwxGNiu8iKPZAyRckKa5y393CKBHEwE3o",
  "key14": "635KCqXxqPV8subtdmwEKMsxMUTusV1U4gkQq8XWdmovFmCWdrmxzxM8HJUwCrLhGfo79VGbYquxkdTabezBUH61",
  "key15": "eBmTt3stp8KGxQe5crpPgGXJbTHC5VHEFePq6rbMUMDZBtPvhWCyT9iaVbcBv7uDzBMYddMkrAyS1shqVRvWx5B",
  "key16": "4Pmuo2sRBnAsqRWATuNEWqtzcWxtyoCUUDWsXxVNPaqu2o32pyfiyjPfF89cFMX23GmqULbKt5pwSZWaAebv3zHY",
  "key17": "5zNJjhewqUGPbUqsaVNAKX2AwFKmt7pLF8zvJRdgjgsgWEEawuQUbuUugCYsoqJEjCLC1uXW2ng9uLkpQWKDqmmQ",
  "key18": "5vAiEKiGdv27dVE2TPCVJ6UJZTPqrduMmDWY3ZjurdyB3DV2oqBS7o1xJk5yWA3JmpyVHb9L9gRmX3G3iPEoTmcK",
  "key19": "4R8iXo6MzBhPDHq233s1cCTJi8PXkXBVrjGLwC2GoUVYnbBfkQPPtfvBhE1uJANA2YDqxmwS2WqVxviGEaP8cRYt",
  "key20": "4tviDTCgmeAFHea24mh9ubj6xffWLfgQ9Fh16LWn3BtaxRDFq643k3tK7kePCHSUo8SsZBgqQ3P1DzUM24Tnr1oT",
  "key21": "4Edtsxk9rsTYKrwTimrZmE7d9YUBr96U7GgZFQTQhTe1GD6S1ksy4bph1eeyrQQAz7gcHwUBkmcDttMXnqZxezj3",
  "key22": "3zUBL17347LPCPD4wKiVMM7EGXZeFbWTzCWhry5bS7w1QAZhmAdUY4x9zrAzwpLYQ8aBpySz1Sf5ajwe8fLvHAmu",
  "key23": "q7F2GhMihJ8aq6gnKCA99j63QjsWXtws5mo82gZ1eSAo2MNLLJNg7PmPRgSePFYjFtYbb2xuzNkTLbYCSQi2idz",
  "key24": "5cb4caSNCk31VwRBHJPnujnRMukxo6sxHcK6PexpKHJZLppXXyiE4aUFYPvHNerYvM6CYa1GWJ7ekYSEdxfPw9ET",
  "key25": "LvBgg2cmsoJ83mZB9S5gQBwF9XfB7gCxsG5DPMuf5CBBZbYgNzXnQcqjvM4x4MJF8sFAMCtYjVPpUsk6ykYFsBJ"
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
