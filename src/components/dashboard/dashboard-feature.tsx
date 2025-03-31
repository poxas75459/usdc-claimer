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
    "49QxtfSXU3a4sWH9JedAjxBM63XBxJH2jFPKXPh45UiHdUHe7AHAQFxfreJCYFpxQjZBJERA2ehEprgcdRXhrZ47"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WgBaRWvK5BRZVgq5GJqV4mGfnuUYsoTfUXL9EPhjBMFxstkxEZ67SXVhXM8GBfrgTg2rd9onkhEHT19nqZKFX4Z",
  "key1": "4KPNg536D4SL3wRmkhfgHvYXygK9uP1iaCjkTVSAeKD2Yf2foiXzjT3rfdHHAR6hr59zCQ2Qux3VxSST9H4fffgo",
  "key2": "65yJrskiVCgdqm7Jj3zAt3uUGLiMQ9ZXGisR5AhPimtUwtJrcGUf4ekof6iGNLX9bkBgzbFs7yMJb3vfhxtyTfuv",
  "key3": "3qVnNqxAiq4fxpB2rsFSvaY8VF5hsYhx8P2nJpDRtkNhseyeTNyHg8qFWBWm8YKajp9PJ9rXKztbg8nU6BgAk86k",
  "key4": "3qsjHn1ow7hHV9diQEFR1zmPpnHUoWVeW9mB3Rw71cJ5QeatihrJ2GkrpMEp7wqo1bynaf5GKf3eCtDe2So5CXAR",
  "key5": "62gmVbUf4agonNU2pJ1ox66ExpX8R1ZcJ36M2R3n8iv1sTkkwz2FGtMQSSNLYVDNdDJ6qWX8m8XTGopUZ89Aff1Z",
  "key6": "2iJFvkR9nSE7V8V3UiRHHpdsz7m9YAuc1Te68KSER64mAiAq9js1AC1bTF33Akuf3uUk9TQ76jaMUXfNsms2YKFu",
  "key7": "56pyq3cpd9hedbBqHweKd1VyCAuYGxBQuP18NqGtGp5u2dCw3WeqKPqyMi11t5VXxHpQVnYUHd19HnxDxzQRzsG3",
  "key8": "63WNkCppHZgUPnbcw3rELsuJWdBiMwz2DWjCg2BDxuuLc3eouhysob8cnucxukweJ3qNpki6KrEKHxBVXWbRAn7N",
  "key9": "66EPELUsYiL5pjtfQBRAS3ZCfTzdK6JqeSqTRAkcRNNr3bAjZLzT5TfW9c9qndExX1Tt2AhPmj9UDKDHzSPLiyp9",
  "key10": "2G2zEBfdVfGhyeVUkAipLAVb2dtSakp9CB8zuhEvjU7T9iJZJqmRVdVzsfJbeBiTonwoMYjXpvNohq9Rb2ZLmncS",
  "key11": "2s31cmcpR6QxEnAFHhh9g6TiwFUp4fubR454duxAMupafRoHCyFoYpUB9zNx6dzy1Va4NnrBfwFUrtqrM2yDaJV5",
  "key12": "3m6JMvMyMC1avtMoF7ZDDsGcQj2mTV5PmKVeJ7PgLbmNcPc73NNC5PqQNGU2L3xYTTZVwtCXCQCjzyxFjvxbUqsM",
  "key13": "4gRDhGuUApcDbaokxea5guAUfyk4tNUSqtqXei4bYuwnSGBbqZUsf9pUPwAxoC1jfkC1HVSvZ3J2c254EM5tprJD",
  "key14": "2ScfsEmtTGL1VBBoAvX8hgTWiigjhFUqzybhQysJbhmZvHrniJ4NET349upXoWwow7vomCS2kKoCJahTsJQo5nRf",
  "key15": "43uBv8vAJiTsfGoLQVqrAsoE6om7UYHsXDN9PMDAUmaYZto8NAyQDVmKiH2WSKym22i5UTtBcbedv263rhkNckaW",
  "key16": "3UaLmo1z4gNumdm52Sgq5DRypdqp65rNgMvrFFfkoEC8gVKzLyZ57EwCeP78Sd6TNzcGXtyUdRrP4eTmg81Ccah6",
  "key17": "3Zf6R5ud61MEV8HBG5CfNCH8fPGatBJk1E1TXLo1RCoyZma7xAN3GcVLDN5DCnaqZLTZ4Bn6dSxYB1FB6edQrjc7",
  "key18": "5mZW8zbvPxetgESCkiqSRsqENGMiJUVbbjEoNPiD7iGiUDXshRJzP71Y2PuZPgcGufyssczYf7YRd9EHt7ThvPCV",
  "key19": "3Ug1rxik9iioGPSAKE4nbDgsQzfQKyqvVLjmaegLyczrgEpVACQStmCHuFXDrVrkWADWJX8oWbKChbSwd7ad4cek",
  "key20": "49C3nnx3i5xsQUHJhgjayyQUoz6A26YTcD4RSJGV43yXehkGrPxqmuKmnG6tLLuyWRKQq7EGABVCBh8E6uNX1DMj",
  "key21": "2ukjDq2nX1w3fSUckaDwBgYSea4ZS7aLqRhCwmfXLGB3rF5aWgfGttMvcUiAAMGQDpruJUoiFtFRSzsJY23izMd4",
  "key22": "4Y7LH4i4PWrnaZp48oaLFJf8XMVpjAnWx7b9RFMPTvXVk6WqFDpm8Y3WSD1dkMdvEBp3yaDpRhBL3Ay8wvi8RSNL",
  "key23": "5kCuhGTRjm8Hj3GaMyk1Bj1nUyew12ppuwNE4JSScDmLr9sn78UtNbTKp9gk994MLKnz7dyroRCQyhVrtcwCjmFK",
  "key24": "4zUPeqAyto4UP15kPqtsXW9mKDWJmuArypmuSu9oyEYUqP72v18WxqzhzMvHRAUFN18gsmQDyb1x9A1udXrfnnxE",
  "key25": "3rNkD1KctUyvoXSgjLMFV2NPCRJM3P2SvURMauJtt7JVGQCBwJTeM5BABPJujWBjjAjog6nV75ChDk63GvKCCSjS",
  "key26": "29icBLvy4k5cGtvnJNoNQ8UKGUqq5fQS9rarH1ewHLRjnogwmtEDA2QD8caFJ82XnP7TbCbU25NZHwPdzMUiUukf",
  "key27": "4LkxTQmmQTVnm49nvYHXhq9MxDxDuzWdaKWFoFGLyMHzFNk1HeWXGuVqrXttZ4g1xRVKg9CckRu55XyyFbqXnGgH",
  "key28": "317RAuk2YHfrw1VeH7DARxwTmeGHtNzhiawTzzRKymH3ssNYZ5Rri58FhipRhBUcDeZKncVGHXG91iP7tGv51jJG"
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
