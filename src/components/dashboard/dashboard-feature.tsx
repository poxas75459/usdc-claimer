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
    "28fwBXhgM1zptSTx2KH5KXSUyXewVmd9gDni9hy3ny9N6YB7JVsVweKc4AHFf99WYesCJPdS1PsVUDwxv7SCjZCU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XZBgUiVLVsuXHddHAaeD86hHy9cL41FCUiukSenJh7abB2i3oi6qSy4mGJHfXcxkGncwnC3mNzrfzYMqPpUdUkE",
  "key1": "5rdVHkCZzjihvGMZNgH8QL8VvmPftJQjNM3QhyqQi3sv3WeQtHfM8Zmnr7HZyan4ZMzbCBJnWwvqJhqjuQKGYAPd",
  "key2": "375MaB5pZaSp4N6UmZPfUCShyjK64q1vCgDBUTT2iqjTgZR5TJq3RPP8BcYqCwUrVzj7CZ5wjv68inN83ehLyQX8",
  "key3": "JyRfTji2seLJLbXfUGXWE6L7fcsqn15dfuP8yVhNjuTRJEsfjLJYotvtdkgbZ5a5BNTTBefywTb5Hxnw3drmB9S",
  "key4": "2x1cdFbFDumViwhV5cJML7uX2mK7iZFdgnVeYdwiTv7ZEsJ7sPFh7fdZoHmkXzciRh9xE9b73P6vJtVYW8TrNBq1",
  "key5": "3cKcJgRyP9KDg8GDszb61fUMmVPFSHg6YkU759bT9vsvtTbSrtemf6uwtYxgtAsMicEAxKzPTkUsm8Ai28fvG9hc",
  "key6": "w9vvQjEJ4sw7q6dYxCrBH85H3TSDpgs3q779jt2qRujuVWHoM9a1y2KtWi3whc2bASFtcc3mx8cTxciAf6ACFR9",
  "key7": "3uaWpVoUxkwmwkuoBbScJ1aVieKvYE9bd39475x8UtAe77y9vjVfk7KdYcccGTXSCPPQ68uqxoS2Wa8djpivX5Vt",
  "key8": "2MxMmoTn1ZZ1AG7MaP7v4WsSSNSnzzLS7Tu3R7owfRMM54iLuA3aj5fASUCfMDjsGoY4jrP6asysy9j3omSrFffH",
  "key9": "FxJPmxFbJ3QSgFZNTV9pM14F3oVYuVnnQJ3Koqf1nvKwL2ADcdnRqvaeDgSFmtzGCPgGgG7XZXNjBQtuoBksWEv",
  "key10": "31aE64sESChhVspNugM6EAjwg4ruKs8N9PvzmTpmYcG9FNDPZpWFrJCkDrS8KFWZ14hJ9wQg7RmDYhGHr4VCurkG",
  "key11": "4RPbsuX3ZNGLhJQfxh8wDcuJsyuFbjm4WqBKKdk86LWdzrRB4PeU8aHik6RyrwbHrU9f6GnyPE17MoKZ9UayYafA",
  "key12": "2cCxFcxyYSg2F4aT2qKMdGPNemFVQJ1A7FKJn2KrYAGCw66K9RSC9qH5EAKtb5AQAmfjaagnKNh2gxCQwpwTK9Kg",
  "key13": "R7cEDPLYETLCifTPAWAFMzqRCKZwKmRxzu3HFzNqNjHnadrvxxBtPZ4mRG3mGt1kPqm3VEyH1gFYhvuyABB9TXg",
  "key14": "4jWUeBeQR6PP5e4Rj8EVHzswDNyfX57Dc3LzkQGoFxYKNsstYPwKxy6fdy69NoFSvLN9qawjXfSksnxuMnVa8Udi",
  "key15": "zeuWcEa2mZUJq73U5UgFU9vUucW9Ab9KcAa9NJvoqW4Ka5aJXEWRr85bcX1bzf3Fwnav9dUrT7PTWauFtt1wLyJ",
  "key16": "39PzS9jrNnsYBAQuZBQnrtwajzheNSaZVrV6kkLgDmcZ2W5iwXXjhxgQaJjGPKJaAmivsRWHq9e2WWEcCuRARxz5",
  "key17": "3bLEGLUc3Yi6Ho6wKKN31c7s3ERSCrmmsgG7Q2RbC3bkBGk3aiKXDgiydRAoQzUgFPPtUbJohnyn59G14U1W84tY",
  "key18": "2u9YvmXVBwGtbJkPUygxoitNCaZ7JrPUpvEUUFmByKjaNgYqGQ5rjE5tfsUNakiFWbqXGSAww1Q4NRnPFUydLUu8",
  "key19": "2w2eQj9XbkqQqSBrdG3uxZQcEPp27i7NM34KPQ7bV8BAiRxpre53XxZNQQLfdZiMk2sjQG5GCvgwaLwLP1UWp8Rn",
  "key20": "2TBeFSdMcZo5EtQuvxWFQcuG9p1mEMXHqBW8D8ko2iSb9rZEeP5RmsiyjVU415XaXDen9Z9dqCFr7mJfdNFSMuQh",
  "key21": "sBf2Hsu3XndC9WcYedxsG82B33nq4VMLzkBgWNb8SZeRVhmTUCQaPtEoky2vyWnMVz8DHNggcPaSfNz8XCAiTaZ",
  "key22": "4miYZ1mks8ugAtNAoFcmXGuhegEoqBYx7y2LPjp6K9sDVByMKFUtq6JxS9ZJWnG84ggXictdpQU2Xzxa7ceBnj2o",
  "key23": "2jAUoD8ZpcE3Ejm6k3967QLFKY1NDARoUw9jwqrCtWLkrT3S9g5BF8pKooqBaecLPjhXq5fLiQbnxugnMG3nVUbL",
  "key24": "41VyeZX21Ehm3C3iud4G4J71wpqoMmc7xMaL3N6FmtkeHU1mUwa6iWFs2QCXNFQ1aT2s5jXn3FBaUXdxkozCg52R",
  "key25": "3a1enjLaQ4zKcjLTomsJrYzKc8pf4DCpsiwRGdUpu3KbszeaoaRLt8KpPvmWKMJPUhvyAPog2FtK6ax3Xryo2NLu",
  "key26": "2MVEEPvgdwd6B6rjUuPXfWWjMwHDuP5rN6AspjZ3behRCnxM3Zvcj4RXshfQC46Xz9oJSgJj2jpJqLtf7gz21xrz",
  "key27": "3MLaFHTNP3NPVZmSKoubTtQsL4mxtZyffBziEnzpEErz35VgGHafbTTwGVuYNANsuZt2gosG7Mmy9JXVujkv2WjG",
  "key28": "K9umq7PW6maPuH1b3NEqmYUZcZ4LDNchTNoMZt9QxTKSZNEhWXJPcRVowf37v4jR54ETXnAdsN8unZu9Hww8J56",
  "key29": "3K4tKReQ4Fprxs5szJ4WEcU9wR3wTqtYP5f7VHeo5Z9oHgMJNFuUq9kGqKAhPnyByvPudWgyqzsZ1tWp1nzr85r6",
  "key30": "4Wef29SEtTtCcPC174UKquh2tPAYXHYw9nLFjVVNgvgPpudK6cjf3ztsPaNAnEw3TMZZP2pA1HpKzbGt4JqRDuJr"
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
