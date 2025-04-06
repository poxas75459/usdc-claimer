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
    "JCis5Dr4hqebDdNLmmb9RNj145b3XJt6KjgauxCaLgghhpXUs2CHEr6jcT3KkgmzsQvoxApzK2DAKu2QJbVWZbW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kQ3XcdQ5XSin9AcmVWma9Cwqs7aK1YNi773N93E6PL9y9M8hmMnPgKYzCJPxo6TPYVkYWA8q2wPm4KWRXfhz1fp",
  "key1": "3rZQCwkx2J5ooTxJnD7atNqTeMLcSRUCAGELEgdmmKhKMJFq6XRFH4pzVyksaxm8UfxpCTyii9o7TDGNw85KkyC4",
  "key2": "44mgiLr1ST3sqaXfzu1J8Hym3PQKrJ1wgX1Gkbp7RSk6zC4j2uCqvGhHZbXS2B6irouZD5YASswZ5HDzNBzGRxXj",
  "key3": "2Qyzc3qydMrJz6JV7ertDudYm78HrJNnDv5DhQ7GsxhJyQw94nnuHdAT9M2vrP8Sn2t9J7D5jHQWjKbgLJfBDe9F",
  "key4": "46SCWKWUjJbsTkW6pTaGxsFasT1vJ9M6Hz7gSwXjPU1AjkS3zJehBYf3QWuATWzsMh9V8vd9noyyVmhhzSBYDGVa",
  "key5": "3RFZUodRqDvsEwTs5SCqmRRmg39MXz6iVX43f2LC5RH8ZmmsLxf8L4t4a9vgKQgHLS7ZUBtFDMvLbb4wdYcVJu5g",
  "key6": "NPeE2XA7f4GqtVfQK1e9SZ4UVGZ5q582TVWm5Vj4m9J7dkZPjYSuNmR9JiA4vaZH7aNXoo2eyxsw4b3KQdozWaA",
  "key7": "2BJF9JckyiL8a1iTxcWtv6HsxpooSKJv3X182EtR3kRmkPaxanZxH4Vepk6wyJGAXUCgjFPCH3Jb895iE53jXCtD",
  "key8": "3dTGA1gKthx76oU4yzXpG9P6L19VAd73jMzBowxDmwDKD1DUusTimFn79N4Lpb3Xs9NfAjdBkPsyUKz4HnFvVRAN",
  "key9": "3CknRfdPyKPs5F9pdxataReV5yQLL1CFWbG6AU5WTMGiU7eXPsG2xq34qBh3LTtQZMs1Mk9DjY2HGYLnuwPzACd8",
  "key10": "2zkN3BF6axdbQk7RUY7PKR8qWnWR4yQytM6dgbvGZh9AcbJadjxo85EFoxuPB1YMdeFxK95pNfHZiG53icipXvZr",
  "key11": "3FqihCU1bqLfzCdDtpGqyhZo8j4ghTwSPdXquLNkFTPiQdxrcS9rcK4MW6AEvFuFnQ3Jw6Q91gpYK1usv6aoAp6h",
  "key12": "64xxrLwNa2iFE33118YAbexJ5aUQfVZpeRqH7PWXU5icfVWzJopQmAUgY7weqJ2pyMmDq8KnCEaTm5ngqbDsEL6s",
  "key13": "3EXNMPwQR692Pd79vwxKkewFjN8vuGUZW4HX58h811iioVaoMpKbDZYpB7hyFYP2gViMaqBgx4E15tMuJcrK5pwx",
  "key14": "2GiLDMNPJNzFWvsY1GKLsEbyt2H2UfBF7rXt46o7fXRqkDQ5pT9ZSvHZYpzMLDoq78xQvnSfgc51VKTeMEFjZy4P",
  "key15": "JvF9daiJ33uNKjknyyao4aGWqTQ9C3cnsygmkqtEA8RwhYkP8HuMzvay483QYT56coWx68cwDPdpWQMsvg29sVS",
  "key16": "2CZBJwLo6xjoeTfEwGj4QSFMxXuEu2dXe1bmghRDAG9RahaYH8bNHJU375v6Z2meicqJCfhPVj7RGtxNPQF76Ysd",
  "key17": "5AtYRQ4YAhYDYGPAAaFwxCLfQJh9ro8U5kJ21zkGkf3BKgQT1GrUBY5BU2hwRm7y8oXcoPzwP13oCZ7DftZhApx7",
  "key18": "3aYxN1i3UugtU3PGEVHYgGGTMkgMYmtJ4aky58xBAuM1qB3mk3QqcQdEPyPBjvG4qk44n7Upiz73n41zmkTFHBiP",
  "key19": "35rVKxfKLVcPHjLZRqUfFp6kTV5MpAbagkx9DHpyewf2omS8KH9Jzv1bZnQBpKQMhmg6W41R8sbMqUEPKpz6KNmJ",
  "key20": "75yDn4sjaURFnwpfJhY4caEXqRzfE1FVCduYLwMUPdTRrUoz3gpwQ4V251rGEDahEeoSCK8HFe6KWdAacmnmZWj",
  "key21": "24H3f8nCU3Se4Ld6vv96fnzz1nbwsQ6mp9JYvzqp13v8dSQhx2La3ZtLa2YPNu59vqmCBhZ3Z6YqandRvQS84YsA",
  "key22": "5uLBJiCbCyv2USTGG7HsNiYJvsAVUFnhJtBieg4ox4F27LAp8zNyaxSFeRkBNHmrTJYJW2CByyzWXKy3fb62SgjY",
  "key23": "4cqdTFh1oRgRaeconWUyEjRQcd8NTyVdWLCzHKta1DusJu9Vcj8WxMJ8inLSf5ARh1QbqRy1a2gc8e357mgivPDX",
  "key24": "2JqwMfC7hbuGLKyXwF4Y9MvwKJ7a6XfF3iy4uNGNBheb7M4yBUCFMME6ghJfQEs1PLnRiKTGy33DBRHM6j5uHD1n",
  "key25": "5caPQ4b6jfaKiYaDMkgggARopn1LP3cFnY7rU5f9uWngvX9ghdtzFFGxbTbtQR4ccRtt1A6H16hAFyAY7w25Fdi5",
  "key26": "cjL3DmYSQjyF6xmYLt9Y6ygbppVnnsjpMq25fCGKjAirajdx2XqqQ6mjrtrsrV8MwBfMWAYQtq6YfGWdLZscXcz"
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
