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
    "2bU8qbdxKWpRQicQ3GuEp84TxENgYk5ARi9EnWqXRedaFiNvjkjnxPtNz4og1mj2JxyCjyhr1eMr8DAw7wZdTHJj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qeFbgbDDVmU9PZKygV3uMEPCn2BCbJK7sMUzWV1ggPtJMTcJLEosJc741K5c9ANbLbyEu7aaa7kZRPMR3KoMAVV",
  "key1": "4DcRkbntbSEW9YSAk5K6s5jeqKRhmmerFbs4ACn8bcagic1DeUjcXFYV9oWYLR3Cb8EVDZwQX2qS7Tyj54AMQz6X",
  "key2": "5WRgFigm9CkpXgMeNcSiEQK2Y7g1yQz2HFQCsZ3pCjZkntBbD6HKkFWQreuPYrQTGK6j8sQ2qKGS2BpBbvGAPg85",
  "key3": "4mTWsRL5WTSPuRUdDovRUi3RZijq273VbQ8iq1cvxosk5QX4AJFwiumHiW2Ps3XAD2ZKsdaxHFovbvgTz1aXSzKt",
  "key4": "5Eewap6rg4eZitmQkqLK55TV1kpYwugGuLZDY8AJoMZaGomjsqAvFMhU8aCRWtoQPZVH1f9wW2YuPVrfDRAwh8xA",
  "key5": "3FSvXzs8ZH4cvBA9HD2xjTYe74fuhf9y9tgQGeP3KNGwMzYKFuwMa3njrCZr5zxJduhZRhnnuaXidAX4foPtuhso",
  "key6": "66kbnUAtKT3Rr6XK9wEKDUNn5ht5vvBxtaVs3vKEoNQy85jwydvLuhUr6jXVNbboMzmi63LrJWwe2UtAYzy3ba83",
  "key7": "45uv791wbpS8NC9EZzsmRmMZ3TbXa6VfuFjU5efk1Ghd9LuxbFd5eabfKAzFRZHmUqNhrVhAbQMukHwEdw8Tybrj",
  "key8": "4x9NFEKPtvdEmWnVLmn7qceTqbhyGGPjohF76T1wP64NNQX9EmGu64wWPrQq6EdUuMo3Skvw6YVYHQw8RA1NFbXi",
  "key9": "2vYAtPUP5AMUkEiNkN8mJwKTzec4XDHzdJqbbALTenmYqGjzBZs85xAxkkxZWWYP9TQQt4vSpN1ijNTq5aNQiVoP",
  "key10": "2q28XX5YRdA9RT8ZB7oQm9bFvg1TNFGhbMAzWKAS7HeRhWhgj58SmpjiNCjHo32nRoB63G9txzHbmZzchkeFrskt",
  "key11": "dufSTG4qRYMjbCKKJ2hsMdfxtVC1K7wVAr88FKnRFx8oTMdS5szWj179UN3argRZ439GVnh6cLJ9MGBQ7DKVwRC",
  "key12": "3MTKHAT9wz3k4JEVwwViEpWJD7RqMYdJ55XFVkHKMXLdxp8hQv4vahTnjFnoUgi99CTFaytDLM576ZSK9U2QL14k",
  "key13": "5KNrjcJr63JgUgPxckuDjKrYXPjKxzgLA9cqbyxDbuERa2dY3QMxuD7JMvB6mtqMMfiJTNxS3a6LvCfsXwkjdSQk",
  "key14": "4h5xS4xwu3iNZgiiHAikfnbb4zTkXy2nghe3B1bPEG1iZGsckDRsjcXnQhEQaCidUm4V2gRoD6tLfaP4LjxyXqyx",
  "key15": "4VEWSiQRuW8SSjHfVnukXJQid4bzRxZ5yrsLYvvm2nnn8qu7bohUrCN3sDTBRoaJ8Kvz6f4FLnyghoD858DKtp66",
  "key16": "3mumKoKjfWa254JQCae5xsTQdsnQg1YnBATDggawpdn3pZaRzq4md27ycm4NoR5451touu4yojBG6mt8NTz8RnFv",
  "key17": "261qmdyEmzJQnEC1eMjCrJe2pGRGogpcCZwWUvSfYqdFvpaWpQMEQNejwkDFch8EyYQ7GCvb7VYaHWTKFEaDNSTC",
  "key18": "3GziHy3MwbNuJv8yo3YgAdX41zPU39p1EZUvKiKmF6dVNWBgR8DkSDjmS17neaHgGKZLSQ6dqnzHYns1kZNWV2vj",
  "key19": "ZxeqCqdtULjMCEAaKQfZJRXdr9RznMNDsBUqKfHGVEyU1jLUxNR8dsyfLFNJBuahFKUY5NXNSfQWC299D5GCwYc",
  "key20": "2z4zcRPMQV2PfhTx3VeA2mSmXX2ULFCzLuynqRgX2iLuG94uhLXdmHEUjwe9qpgZNivzArHTbe1Y7MfbdrRdkFys",
  "key21": "5g7mskZM9H11rYtshGaMWXk9f6babqjm73h7c64xrCJCSNwg5jpVceMMezRj8fsKHNQuVqZVTqWCwWn5NrSZNJmd",
  "key22": "2xsb3hughThAWEP9sGCcUeebMytdp6xwYEy95q3FASYtgteWDWTnxNY4A1ZzYtPn24HSTLuW7A7ppKCLQoVXwW3d",
  "key23": "2DryXSDet9URRZG4SAA1WpsF9pbA71EdPuTYeDAyxra6sWvKxNjVepeBFLCJNcZJWiFxtZSbd1Fc91kyqSYMEDqi",
  "key24": "5uqXRwocAEE2xum3WLFPPiT3Sj2kNC2DbBxu9qjcsAhA129oUzCWC6ZsLyhKc2H2aDQzBdJ3WSiNMWQ2Ffg6Uqx8",
  "key25": "2enMgZo7Rzd5CWrYqd3v3QD5VV9AAeY1pGWHjbCAcYbqKrrspUtFtyTHPmUFbk8EHSwDeCd6seQyBXhAQnRD3AfM",
  "key26": "66PAZ7dDswdKn9gRBPNLBxPpsVpDbfmHKxaEEk5rjAYhSSWW7fZFyyePnBDUANyzvjaKdByHi51383AyY5P6jmex"
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
