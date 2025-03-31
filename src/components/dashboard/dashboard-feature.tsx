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
    "4sds5YvpPV2Z5ZvmequU3hZ5mx8j3rWGt5WAZor5z5xWQkLjSzhVk5Mva7BjJpwssK6PYA731XBpCaRcFA9nd9KN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xC1gTVtqoATxXySmrnYSHtcBuKPUapAw9jwqtAxp7r1fEVwbwxewn6stBuv1fM5WWWsJ4AUxfgTxtrRWwfLX5Rx",
  "key1": "4Tnx5Rq8ka761Pnk9W6umDnx44uBuhqRzhUQ3hgzYyJdLPxFw44PNuoaHfjQfqmxQ2UwV1qygsu3qNPv22HPJLj8",
  "key2": "22KFq5mWthkf7qHdr8v9u8X6H6jzwtb8rWbubA4PHy5uDWLWq96J5hUgs4uX4ikrg3UqbrYKctN5SEfWfFEPSWxB",
  "key3": "jaotsjongAKF4NpnBA3sYQeV6A4F4GcKCDYbCcjZur7qpA8QzNRh723JVyQyR3Gvpxejy3t7ftFV2kV3G89jwqo",
  "key4": "Djdv75goXkHYWXyAwDwx5FoJvj79Ds4Ja1u472Xurc24EmbHJqLvXqUZkYngjuiHBTBRfjEfjhGBx6icii1GWYH",
  "key5": "2gjPFuPz7YLydxTnuukiMY4sL3tYZdVgQfNwsYNSrSPRLV7ojnzohdvrPmWeBfZiMbPdribiuPLSxVDZs4hfhyEq",
  "key6": "4piiixDFiwSBCviQpvnroHGD6zo8jr26H1YjfnavP3DdwPV3YA1Ezk9UrXYjmSVxyPc98L4YLjJQdMpqiWv3Ybtq",
  "key7": "3by4jdwNff5qXq9g9Kd4m9eRWAxSfmPsumQDiDjReuwSSU26B9T59pXg2nZPuHmcVgMVrqt414q37nofAuyskatw",
  "key8": "27w6CiJVU2QbRAJs371FhoY5cm14MgMF38WKUEkAhGCMUSyeDGY3Jjuaq4x7rdAaQTcM2iTsBLNKEaYRBDQh37B4",
  "key9": "2jSNJdDD3TBoJxbDjJNY2fmc5S7N9ASAiecQAqb3aLMwXmVBzc9KWk4xzDnwaEcaScpX7sSknkcdHkpeDdBVuKoq",
  "key10": "5gdAVivovZ21uPqc2JjvLgKtyUuGzQWLmHe7th9pDRMhwX4Xdm6t4k2FQ8MW8BbgcngeGSz2hHuJoaygmxfCQFFH",
  "key11": "4Dq78H8mS56hYnaYqtEqMB52CxGGGbruCtvU2jHu1fRkUtNo3rschwpGcvRnCY8bmoQsdkhHjJWx7TcP3Si6PKG6",
  "key12": "3K8Ng5jLxF4qsXfzV3sC9HQ7mbEGoKU4nCTpStE3Qv7sszpGySypvFaGTLFnvJBj9DZadRjxDoQvf1unnfgyGScJ",
  "key13": "5h4XTKsSg3SEmjsLW3avpXeywZNEDYzRrT9vyxupTbFBwhC9L1vVyjfnpcdrqVta3ErVzYCTsS7YgZeNGEsBYMhv",
  "key14": "2YZXc9PbzRxDeThntsqPTWcErT3GBjx5yWi2VBCCaTHgTeyM1NgP7oMpfbJDZtpaLQpXqSVZhFeFp1U3Uzkk5j98",
  "key15": "mcpfLzUABmpEUhN3KNJC9VwB1Tos1XoYEZoRcJhbZo5dnb1JWMbuLspvZgdu4fvGA4QoWyxFabx7cLZP8xiPc1o",
  "key16": "3ZETyg3SdH7ffHankaV22CWhYiDweg7EkFv4fAC4AvcLZcdj1xCHWi8s3c5a8STWCQjhGhDFa7Lnb96Bt5puSjNE",
  "key17": "5W5z3gdGcnVXKa2QVebZtFn96nEdHpKxpA3XNKKpP4ZqaBr4L8LcRcoFHigrD7wo5G9ry9AJN21wrB7SgkeUzR1e",
  "key18": "4ZTgZ3pT1JGyTxgApZo9AiMzJ8HwoHX1QKa43rhDdjzpfXbKtNnEB87B9ywosk7AcFfq9rHnRZHgodMpdwwxDhgk",
  "key19": "2Ltjn4cWMnQnSGTtAWBXZVaeBmYc8zT9vYrMotfiLTm576PQ7BGC9e7LJKPW8oH7dRj5sTHpoJDwhdSTR2D2DjUi",
  "key20": "5EXg9N18WkCEKeVnTfXVSXmTCsjSp9aFpnAUDcBuvoUiyvor9WJJGQZvF73J1USRJrwBdRHnK1y7asjN2BcNUYEr",
  "key21": "3KfsehFQETo18qdJ43UjSzo6ccSoLA22dkyQD2NEPh7nn6hPFtKhuVvr57uMZeMWqRjtBQ4c7yawAcFJ1GT1SZrn",
  "key22": "5vKeBJD8PjpXJMuSGzWMefWtN7Db3ZVG5onRvZzgkJRnpAz62DqdeWTW8aNdVYBpTfaVbivwbXYtnUKFJFDdSxWx",
  "key23": "61ahpobmBJfvi7eymacQ4yAaRwNPduKn4v9vDWgCLuZe1ycg7RbQfAuZytYN7cKdJhZfmViwftb8m9jbvuDcNNy8",
  "key24": "63izUectAwZzAXPuHJjjjSxyw2NbyCCLzH49Fk448oUuGRFtAwpQXEtWWYQkcPWnWRWCcyBXi1m4FyqiPDS51uLK",
  "key25": "64WKsdgrT3J5qtZeAueYckwGU8VCxT682fK8bGsAb25Yc62TqLpwsjpjP39UgTvp7SsFG4UxSNZAaLQQEaMd4KhL"
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
