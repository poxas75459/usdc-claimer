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
    "31uLRqR9CVtXew8AyMirVBYXkXmjPjsgXnHu8FCry3XQ8uHfpYyYboho2aTVmcGdhtdLQ2FGWhTQp3i9jFp7PsfY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QfUvkxYQChcs2YHzUGQ2MJqGe95VK4YPjuQwSVKyPoWcgNLcXrCjXyWe7d5wGTLG5j1QJVgXC5ux5ftA7qaEpCL",
  "key1": "4x8RMSmyTUqArEH4HYqGeStoVVKgqFrNcLyWgnP5kNDD8KSZFxZgevKD5vaQT1MzNocWobWHTypG9GaAVQD6L7dY",
  "key2": "5Z3a48fWyYHcH544n9Hue6RY9AAimsqMGzZj4jWTdiM4GcpGJusaZieDkFeuUt4ijanJ8CFa7WooejwbP4waneJJ",
  "key3": "2ygVY7nsGGBBJ3QHg5ATnh5scete9JzMLx9D3iZddrKpb6frjc6yNUX6rYpm6RrjuD4sVhRgh8mEy8AWBsL31biR",
  "key4": "oC3rdtSTXBgUZtbgcrGfQQZnGqCzanEEwjpdjQde6VH3jPcd71jMdPNACuFhS2tXHzVszsNdPDjpZ9AkERpNFAF",
  "key5": "5PYrqQMrBaBHA1JhnVLMBmyNkRwd9CZnQWBpgz2Dnrt2iZPXmoNPaBateuKfUaXtC3x3KZA2KvDrjp2QMbyUbAQk",
  "key6": "3WtTHJQDZyDJvVK4TNWYEFXwNH5HQfS6LJbujpW7nXpBvKj377wi7UhEQmrr8GEAKZywL4sB2aBmb9CPvkrsgZN2",
  "key7": "3myRXpWJ8CGsoQra1VsntEUqfiFefKCpGL75VzrfXs6hPcpru8BjUPzLjTZTUxXTAoetBT4Yd3nLt8Gc8kxyEoGG",
  "key8": "dRsWYmiTNoNYfa7jXSpLG9Ut4SoHT3TY6VfUpDwyUkZyCSA9VEg4GoT5TZfZHWuStBkj5iFLLUu7Z6YHYdHMwLZ",
  "key9": "2BnVBocfGSR2wx6d3vuqKKSSJMJu794A85P2rs4J5QngMA5bK3HXs5u25giedVvtuVp8bWv3S77Goa7gbTGWmxCs",
  "key10": "3xUcLQnotAHR6TfHwtNbYH3zbmyQqXCzRoKU4PQWUGdqt8y7TwRqHdpssV4kvYKYXNt9AAwv6UD2dFxMpZGb9toT",
  "key11": "2UdjSoyzxic1PVJ47NAj2YojxRjjMuYNn5zCF5MfdrqAf51n26m6KKzQeKHvf2pwU4J81cLdRQSpNJocYAkmLrqi",
  "key12": "4sdWbhwVWzAtJyuTbEHdW6T7xSNSQotsSB2WwpQg3LRwXCES2a3EvY7qbLcgxMLtgJdEep92Gayed6mxWhGh6cxh",
  "key13": "4gxJis4dzGhapd6MSDKYqZ3WhAQMv2r9zAayFc86neqCXjJNWcN1uewdT4hm17ZrtMRuHn7kBEgh4Cmbv2jSrjoh",
  "key14": "3qi4zJfNjYMWdpHyi11YdF1MM82YMpmn6FnqmKh2aUYjgpUCenxPfHrVwVQNsuKfTG1KkLd7p8ekfW9bn9dbtJTg",
  "key15": "4BcRSUg7g9u1mrvhuP7ABX863vguGY5a3TArmqv1MQDfVb2rZM882ZmUbVzRp2jX6wqURv4ki9vMPeDD9MJwu3eh",
  "key16": "3C8qpqHdKakrYGuMFtyrZ3D9hqBrp2Ra9x5TJuyg4WRebciVziBP5ecxqjbYWutxnWxGHuXtq4NCNW7Q9eoELPFP",
  "key17": "2no45CURHVSQcaFf3DKxaVQfCHdhEUZZPvyR9d78T4spJ147dhFNM4ffqxinWzhkuzex6Qi5pJZrijvA7sZt6Ut1",
  "key18": "59Yt4tYH7YN7z68FX2VwNou7PZKdamfcAdJ5yXUhcEDnL5k3dLoWYtLk2FnE98HdLLQd6BXBY6T2PLSkPRyNzVxs",
  "key19": "p9cDbxb5hfyw55TYprNjycbDUqG84z79m3ug4iqA9nras1Lg4wqqwTDbEZwWShzx7cV2m6J1BQ4oTH5HcyGvo5W",
  "key20": "2cDBeZTmUSWhtmbVx9FJJuQdzygTyDd5iHEpefMweapKVeF5B6aNdrx2o3YHNbzXTgiHketb6tj9ujQP379VdnyZ",
  "key21": "3Nz1miRC7aoZEaVms6uHHpY24Ac8ypZnBrYqhiZyNAS2VT7MCDp8LaJpBJf5JvZZ1SHkqihLkq7Mc3CFNJYdDR8j",
  "key22": "xYWA16dGoBDew2kAsC8B1hFcWw74DLcqmtTqaydJBFrJHvpfmHR53t1M8DfJFHs4YDfzgKqJVwixytVTw7eGqCE",
  "key23": "4qt2GioVNassRrSszzjTkFHxpWemgpTkDofU2DUbz3v7r4FNjD4wPWWPY8MUz1m8bmyc1xiTW6SudMNDbhVDqTow",
  "key24": "2Mawpnn5rpuu8MhapBypn1zG4ogA9oPEod2oZsyYAGfEcn3GoEFN8ANMyaBmnTuxbCe66nn8ha7VXvVXY3HUab5g",
  "key25": "4QWTN1Ffk5G73vP1RysQ5kz8tguPetwmMXvXrH7nGHm3RiBpMcAAC3CUbFgjpP3MYgzGGnEtQTVvgZG5hYjiDhPh"
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
