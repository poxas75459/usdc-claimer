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
    "5L1tFCe3sx8iT6ynXiiivhrfL6trgwXerwesAXmojyniReiJk3H57p4CMUtcWMeUpnC7SRpbHczetZ7oYZTUi1h3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rmKT626BX464ytyhvs3DkQsas7eAgXHiGLyfVGzFb1tfujfynZS1vTsrVbm42KfHnwTrVqdJ2kGJdtXqEEoTmLo",
  "key1": "5EwpogrrU16B56z29Cup3e6yC4qTi7Q96pSS8CDiqdpDTpGCNVWPYGwkXZzjgYzzwTizeFTVrAkoh2woxi1Xaohs",
  "key2": "3aU5J3uFfpvMa24mXTHXCimLcfB93SUqT6oAHuGhpsHJxK3PBS8GfCUdnujs2dufeX8Ktjqv1WWyGwVEE5H8osog",
  "key3": "579ZJd25mjvhFsNL621u5ana737VZVuAr98zvjPfiesNujtQHZTstEJCXyNDuHmxtceREJ8VmwTpjnBrhrD9SA5a",
  "key4": "2kqokkEym8ZfDoQ3QCGNXpzYWLo76qCJvhLzsYHBsigAdSAAQjm9A1hjG1imFNx7xouK9xJe8Pji1TyycxAoBjMD",
  "key5": "2WG3RJmzswb85RBs5tSiCccQ6j8oXEMjxeJnAM8DCc4eqbBapHZKnse2dd9UD8JKtqow1CFn6itaxoK7VWdAFtMv",
  "key6": "8vABmNKn7rj6zoxo8WkiDTQbapGK3uhp2mHoW2ewWWWY5ajK9rCWXPkbrrGhAR63QmAGPxFA24PuFRTdaQLHs54",
  "key7": "41pzmmuQ1ocsMW562n3SQsKof7tMwzj8cDtMTgFz84kDYqhRGhs3Quqqn2LBUKT3WAgyBhecPV3HXWJJLSN6WyEL",
  "key8": "2iLcrbnt3kieWjTaryD9RoN469aiEqwKmkoTGx6RwkSnwW8P1ie6H6NLEcUrEWLTThqFCjbMzRMz6BeCtmBmpDpK",
  "key9": "2z9JyJW1nC8kmZM1XZGbnhU6rcFLcMNxN3hxCVxStmNs4J2zgBbtTdKKefpZdp1ND8sRGttR5uZLKKoRiCrdGhMF",
  "key10": "jBKVENbTbWaTH7Mm8ZVGjNsmX7VZXPk7hm4H19gKREzkmtZYmxGMx5vnwqTT8HP2FnqbjNsYuNk2tNCUDL3Zg8z",
  "key11": "3RTwxtjcToT2ih7H7JawmDTrxA77VXshfAvHJSgZ6eDvEm9CAAJbxHBu8AskjucWjEjHFgBowzHAp6y5aT4xAUQf",
  "key12": "5bNdusS2v73kRLGysQC5JC7F7unnFLmqb3u9G5mmX2vhxYCVRKZQykn73T2CfF5oXSTZr15sJ5GJffoFNMSxV8Xs",
  "key13": "29U8dyEJSDnKSUYm8GudjkoGkvWHeF1CcWxbkaSpZreAwyvAoUXur6HGJqdeM7JH3W31nPJzQBbedSVZoTKW6F3m",
  "key14": "2ivtXEgm91awYEe7EvUornaYnGy38miwPFfdb1Xks9xGtMdno3kJoHv31yAw36bUF7CEq12ynTugzQhTnDyxRNFz",
  "key15": "4MGTAdnAG5YPkF2hAGKibYKd52kBvQcDGQs22mEP9n7Je2C9HAbFdNGKLcjhAEZUFtw6FJJeHmN1qQJED5rnVyEi",
  "key16": "3AxAyWeBGqoh7w9HRMCtyMbpkmoU5wpRc2mbxGBKAGccz82HZEE2TF561C22DrMHW2BX8n7perjcXMPLUzwQNtp9",
  "key17": "3x2g8oy52G13mght7fxFbgVp4defwXqkxVZ9fTTytGVohumaC6diX13GFMhUy6UeoWiMqXXYxGtJeVFvPbAhJKcu",
  "key18": "2MMe62GLu5EanMHiXsPsfzFQvG1wN8Lk6DTuxuVJZ5UfjhFYs6BK6T2JWWBg1bgjuVNnLWtfXvseb7ApAH45RdbY",
  "key19": "3vhFg8pkcFtT7rss4FvDGC3g6uQkA5uKASGQJsX7ijRk3cy2EGTpBdbfGmRhVTjGQFHZVpe49p1EMqPVBURi5air",
  "key20": "5TiAREccAeoMdynp3qHuc8daescneushh5j5S1WGQivV9c7hXgnFrz47cxbJQUUADiM5TWS9Dq6NDC5ZomtUCw4u",
  "key21": "2uLZV8wZBdDgwVrBEre4fYxfRMHUKzbQDue9Wx5yH9QcLQjN7WBXE2TZUsEBkKRcjXCfjbneigVbLbYmY9gZ8RC3",
  "key22": "28mJ5L3grJ4exD2Smx5kYxEz7Nioc3nPoRF36AXeGH3WBZwgiEk9B5dtAJafgZ5rkv9p6FMmPYB6czVxtLWTdUfQ",
  "key23": "3FFozyhsd95xP59B9SJdZLSVUeAQpkdqFC77eADGNddqyDRtZxQvPKbujm1auiTu54YnxVuSf7jLzokHVWSAHyKE",
  "key24": "4b7e5N3XjGRMcavoXEV5S2QiR32Wbjp9yciG1ekcGJ4WP9DFLujPuWz5aMGfCXozRpJmJSuSjsTh4S6wS3rxPZCD",
  "key25": "5sf2XzMJziBD94Wr3orBLbxvCpz2mQiqVWsxfnGYCKMJVkMpYQTfAq5W4eR2PtQuxPLPt5ojwi38CfG11T1fmrW7"
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
