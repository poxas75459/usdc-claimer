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
    "3ML7uzypoQrRNyWozN5j2Wzc4V6S4vXPrcXDPjMc1kQKdUK6E6Y1En6ogFkbT53iWTwMjCYDNAxcEuCLeeyUBFKi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QxtrvUn6VKYsF2fyiXz1BBnAdGX9VWL3ZhEJuEcDZAHjb7cK1bB4W4FrX7YjWXG7XUsr5kWvLy6QrWUqx4TAFwf",
  "key1": "3775RWA116DckYKZSFX3tfdV2YVfEd3hqFkFkqMbirVpGEHeHTo2m3pgR1T3JpAua1xsytmLqH5Ua3udzDjEjJAN",
  "key2": "cXDU1UtVowBMF52HKgztuLwGLvWGtymg23dvuX8NrFAfayoZ7TRAr6fyopGp3rvtJop5rtcUJnxyVWBacT7mNQo",
  "key3": "51nUf1rhc7jdSoy6qzs9vR1CSsasaaYx3wAqZN9zSbkMcxdsu4hZotu4uEF454zQnF3vPGSNwkLkiUKtcDoiSd1i",
  "key4": "41uCeF4hfEtnsmydpgwYuuKwxhVHyYJKHcWuXf9miJqaQSB6R9Z1mAEtWZwvtk8M2kfdLhJBQKPsRvgwzMALg7W4",
  "key5": "4hrWPGZtkp7EZAsLne7Eiocouhxcd9Fg4xifLruJggqeZb3XLKnxJMWqHzECSAkJeRjm5Bkc42W4rXN3B6wePA3k",
  "key6": "61pZ2ERDwnwh56aKLLbprwSgpjDau1DW4Z812NWjKQugxDvyuced5dKAkHEJY7ZRG5bdDH8zvKnaFnCfPsBUztyo",
  "key7": "2nsb7cmhh9TW6eeJUjqMJfTwMqHggDQSFBTXhq2963ER4rPmNK4FF6fam9Tv7K8fqmupYWZKRCMhP93PnQespBPM",
  "key8": "4kWMgGesBC9qZ4JPHwa4vLcgwBjMJtfc7JB9npsmA6FhRdd2H4iathYv3exbnmS5BDycvZjRib47gQTBQ3CTraja",
  "key9": "5KCTUMiAAmrm2msYQ6QwZzPjChaGBoQBWBN324fHtcYwcyGDgX6e44bs2nbdTPh3oozo1fihuQYTbXJt94f4d3W",
  "key10": "zzv7WEcCw3mGHgUx57c7rfcc6yaXbCMc2BSi6XVfKWn3Cbc2t9cbzNkCRebZ35bR94wHVWrMn9GuogVtURLiebP",
  "key11": "3Q4EGSSN2YtAPE7o6Dc8EWBVUNZwAhsdYKAmBtA2QXwBzYiRDL1kMk1xnjsEq7nk6oNPFjs6x8d1SWN7Fd4cGHCZ",
  "key12": "2hBVtRgMVRofouumsSbiCE25BcZ9yQkBi4NpRSbMYS4rkXC5w8athMvT6X2B9sRFnXojpBqP6owwq5j1oakcc214",
  "key13": "46C2bYD9k9DtZvzFbX7xq1d81nzjwZ3uD1SDh4YrWKiFYzu3pKYw4771EVkTYop31gnU9y3bPwdS8iG2eQtpjC9",
  "key14": "2GJgzrVu8tNeGJj2hW5YJag6pLw2erhk687Zpy4877pbsaH4RDfcXc6a1zWrTUUXA7FUXsFswsScMbUJsML5eWva",
  "key15": "3u5uzNyBJNpfBTKL1x8Gpd8NkEhQo6fPywFGxZqK19HpbAP2LLJwa6Ae25hAvymWi8b4XLXRG9sXMXk8N8y8KNN6",
  "key16": "41UeZwTj2mu8b5Knm6oWXX3UtCkDxDZ798cLXFg4UH96zGPQfZf5mNJvB7zS3T5YPo2gx5sCvGhspo5ujXiLEk6F",
  "key17": "4toQ9kGmyFeb4ijogb1ytrh2sfbSWH3boSDHSbeftyHYXqginvp8cc8iHcndJmazucBNWaWfNEMkCHhW7GRs8NBo",
  "key18": "YX7eeydiZHdC1kLjMjY1cygWdztqnVh4AyrQFs8se3jTccojXixPTKzfU5DRX6A7dWRa1G3RPGUb6nZKGXFLYTy",
  "key19": "5qKzxRFSM6bhp55KnwgqyRMpAvQKJw4fGHMzBeBjSmAjAXKuJj4x5yxW4Fe51mmnsXs9CtFnFvRkD62z8aZLNXh4",
  "key20": "63ZkspTCe9i2FrNJEbPZQUk5jUquYtPGkidrgENnvCpKVLTokKRhinZsj6WXDRw8s6gheJv5Rqw8D587UrjuGJ5q",
  "key21": "2MbkY32ALwg77N3WaU59mFB1dn2xqvQ7ZKmqcr4ncytrf3hoaKyvhU2j5GYcqeTa7qmuC6s37R3kHbfCwa4iPWvj",
  "key22": "5XK7TJzzXoQbXLx55FSsr8AAH5HdLaD6CsmvZZ3fX8GjhDbVYhaDJYGUevxCYY7Pm13Y7fDT6d4ueKKzHu984Mg9",
  "key23": "64zKoHhrceB1VMWgHt3oGdYRqT2LNsyjQ2xQVykD8GZhfPiJn7PHHXZcRW8WpVv4mCd4vD8J1zerpKZy3cYPk1B9",
  "key24": "5CP7Ai6EGc3Cq4AFDbLynL8YAKsa8996H2dpt2ceAoXz4SkzF5NcmWK9MTYVipLiECc7LFW3p5Eim4BoBELSRUjV",
  "key25": "4Fcg2zGu1qWLzfwuse2XKYtsQJt44zrBwikjoxbEykmeqkDy1hrQCy1g32Vbvdw7QSQkUR4QTJke25hWDWWGEW88",
  "key26": "3G93rkhWmqyucshLfXCMsJ4BJMZgX2f8CQM1e9QQigi6L8eT19LyoR49FTwA7x194LWE6YuSq4ZUvxLFiPhMtCgc",
  "key27": "4jvEqhkXtzMgH5d5Qo9yQfVAsmXiXKMXEcdBnkMjP6sSsQgn8sjpcbzq5wN1CDsosbdD5n3b69nKDTTrFp7HpeXi",
  "key28": "35gKBb9uQJnXvE8TCHgmVxu2CYKizL3PW1r9JBm9AS7XTr6kwfiRpdxfnNSPwUYar3TEr1KwACNpNkRb2ahn92Ji",
  "key29": "RmZFxqj6zsebF7CrBMGqG2djmH7oSoUK6bYPP2nZVFUHKYb7RdfZHS2Q3XzBy3U1x4TX3toa8iMayy5i3Q7x9wv",
  "key30": "tDBeVjM1adsjvpetzXmVTsrnGHAJPuMZtuAnc1yRMtSNDJrB2jAmfLZLHU33WTKdy2CRkRWmhTe9iqoord2ivJQ"
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
