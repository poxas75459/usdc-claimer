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
    "2ZhTqxuqB2xoNXiJef9MLPjUxRTZzFGcbTwyXtRt3CL47tHjADQ9BuYKsR9jVHU6BdVRZcyC5yEXvRrgQ9UwYCob"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mKZVGsoXUQs9gx28xTkcd4Mkh7tyxg46Z9jgCYJDCV3bJexLXfLKu1LihE7pRbaDpBH3DE2XYrMMZuS3TsqX8LR",
  "key1": "61US6HYbM48HqxoMsWMou8i7nc3GhggVknhQxpTsTAJK8j16UXPHyQU6vab2GiDXXu2wRU6dydmonrRm9LE4bkrg",
  "key2": "4hZHaLavfoyxXdNCgBpFNNzGRbEq1gp6dUHJm9HQij2QHEyHkdY7ZxY1X5NFDvmK7WQBZj7Q5MQLf8NUqnA1qvGH",
  "key3": "an19EXh8cULJPX8QJNt7bAhHBFJiRE2PQzXuBNzftZWyibBgePZmXkRhMzHpXnrCnnk3k8z9NVNf3KrQQiABiQz",
  "key4": "C3nAZXB4W6ibRaDYLKgErxwodWqwxx8mC4Tu3ebpWGHYndEMG6vU4MPtfBxWFWm8AXsivLFuXZMWfK3EZGGe4zZ",
  "key5": "2ruvBUCHAtemfTa5sR1i5SettN8Q5TdgPRTWFquGFSYdgzj7xwKPZPKDVEGa4tZnCscVve1zXHGKqv6vj8PDQ8my",
  "key6": "2UBE1vsNwAfFsqUf1BZKNWspzPABiLAD8L12yULJ3znkUtQTzpu7UCzjcb9fCm56hwhnTd5fcwLnjGXMomxvigtJ",
  "key7": "ZBKCFi41JDpjxZTXdHBy7QqjVXCKoti4LYq8zGqPZuWK2ttGTh83NQ1ZBc6AnDBD7of2NaRk777Ed6EDeemzNpt",
  "key8": "5H3dBXgs5xFvSA2XUayV2RcUkNnP7XURdwf4hiBCb9TQEhVavJq6wR1S6tuqccvYWLJsk6URVSow24oWsuRBL8xH",
  "key9": "813Sa9njD3Rg1VecXvtXPVEUZUPK3KP5e7ZvHCxzpNEtR3tMz9tXJNPPaLAY3wPbxL3jWehaaEbtMUP6q4Q59vd",
  "key10": "21P1X6oYX8C2cx8t6WdQNaFJLgg4EnkJSkMKXZXA8vjsfiHwYhAzFrunxpB6bkBYrigtZ38k5e3DKmhc5FragzEy",
  "key11": "3nv4F5xHMUbXFDJaSfSYYwPo9yVNoKLV67NiQv3NHC4pq7WtWdBeSN8XAcLhsEVBTdLubwfXfszzrK2SXL3LH4eP",
  "key12": "5wmJFjEtgJQ4jzVMzEdARYvKes8mDc9ba55pVF5aqkWoWoUaj4RJoRbrFLtzDrj87oZNUQAQtB3AKTS3GAbBakPT",
  "key13": "4cEwqVq6HySLDNRRVNEVcLxRJ3PyV24jDsmp4vatFvJje94eDQkFpN3EXfj3zoWRzgkzd76aaMHCpzEtPQpfbbKa",
  "key14": "4AFaWDRKQvPBoFDEKsfjSeGwxiNPwHgSF4Ch2uPhTTKZvkWr1iYNFRq3EbpupxxKUaHbLwwmGXZc7XccSXyYjQxs",
  "key15": "2hEUiUFiGH71F1Vhv9GkTEfUXXyhrCpkRKRqvhPbL3kV8easBiysiN1egjL8XRKrwRAbAWdXoWqjcaSwbJViy4Wr",
  "key16": "3JiUBabxNaytrtC2FxVLGcnhgnuDWLPxmJgpWrgtTX81Ccz64YHuzVRRWVRGUFD4fsvoeSy473gWvoG7oS2gxzoG",
  "key17": "4ZP7qnqz5MpS6qK6uCDrXMmDyZoATMjd1xLkpgAKXhdkccqVXe11DjaGHn9zGkSGZrW2pXJuz8Krd4ecvSZvWSRd",
  "key18": "2V6kaXgibaTcZhJ2V9Z9KA3NUHZouXaDKUbgiK3yYHSHBMVgN9x9vvqJGsqfGVX1urpPRBd2T9GP5rCiUgqwQaPN",
  "key19": "7yNahuiunSHj1bQGoctJdAFmwsYiHYk9X2BniCPwJoi3zxKpd3wDGi1dEYt6TvrgPozq6VStHW9enmdJyUMgFd7",
  "key20": "22sHpFXmSpnAB9KCmG7PawaBCAdPzHaBHZ3ygUARtpXRExRpmPBeQpWGpGFFs3zz5uh4QUVWSPEWCy2KQrxCNvcv",
  "key21": "4fhJahRqRpQGEdKYqp3KXAQGz1VVeuYgiRsT6NFEfBtqkKRo46iiS6WwD94YQdX2bE5TyDJaeQZrMCGWxPfJ5wXB",
  "key22": "5Lr5U8xt6fj5QrC2wkdoZDh2xdgP1PosPbWkEx84mCq4AsNEQC7C1zWQnDgHA6ntJzodE2oTAMxFcvRhQCsxGKXt",
  "key23": "3suLZAHmwdbFESFvQ9Po5ZxDpWFd7HVgUptoVt15DgD3dY3PMD3Um79daGSuB6N63ciw4EHjkfKE2KqAssD89Scj",
  "key24": "4tFWiXkTMg2FiWwZ5euTyiKTf715QonoGu2Rua7d8V858BTvvBmqgXstE5JNUPA26BQgUXvW34gTSaAcgAsbXaf5",
  "key25": "52ykcGgoSFRMwGJocYfuKjUbzguSSqVubkyGu44bZVuEsizNjLFVyatH6YyxbWty3p7QtJHANetPSKq1iaorPc5q",
  "key26": "3i2LJBRgFCQbembcX3fGLTS87v58rQBAKYTe1iefq9Zo9jch9hpwKMtrVtzB9iXcmuJio323kV2H1rqtvboa1QGj"
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
