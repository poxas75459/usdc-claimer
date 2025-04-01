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
    "2Jn7RKBEncjhnScppAD86bAS8mMKAf69jkApiGNeAvXEtUzDdfQd577WGwyeSCoZC65KAMaTgqUoWivzpoqcPMVC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61CKjJE3udnCeP2dBbM4QBbKqv6kKfnKUmBjQuBPW1MDc9sFGhbu7BsLmAgsCWjmng3k3VMdeZ7ByR8Dj57z7ydk",
  "key1": "5w74AkejFZigsJsr5JJ7GuVzVaJLEcz5KZ8PgZczAysBeE6jWzi8aMwiBK4eMUJRcqK4WaYP4eLPZ1wZg4ARhK67",
  "key2": "4ntBH7Gz84oX5Ki2PMeNJQMNzA8Mi1P6KDJC9uSDhCCowd6HyHTpxdGrrWH7ppCqHDceuJr5ngyrAQjURriv52sB",
  "key3": "5FYMgg6BPCz58ziCnYA1KoChEbi8wozrKPy2tYT6EKXLaM3BjjQE5osJeubq3RyoLDAtUgMskUUtrURD1EuG53my",
  "key4": "2Yc2qzFsRi1UJZGRKrWWdCpVFuqEo7Qfm7iyXxw7xNgT6FXAptSxcHDhQ1NTtHdBmnhTc4XFassrV7E5ZSbUp8tZ",
  "key5": "q1JgsaF9YkKQBsrMXu4TemuHNHFZVyrnpywadEdzSHcpkW4Qn2GQsSP2iJWcws4zgRBAwW4bsy1vxfeNa5izy3c",
  "key6": "2mzDvV82qNTYbCjRVPb9xj8P9YrZNhGYcEtk8Fdwn3nCnNTympnNumsroLJw6eLVSnstbuRxZPvZSoUEpccqNtQD",
  "key7": "3MXf4dy4AkD8WTmPQpMotHsCqDVwV5qaz2NzfyzjZeRrcqfYALzGbeur5ZYzHnfG57A1zMQSgDhPLrDsyf57iYZG",
  "key8": "5QT9yPJ24gZKWkgPas2R8es65s9sWek8vGedMvD8de2aQsSeVzVKsWsT4wLXLDEr5ciRoBoF1vnd7tqV3kmrdzUh",
  "key9": "FgHCsEFg4QsUB93tsCkFBXtEijKPazBqf98owqUwLts58PbThuMySqpKPF1LYVCTXjhJTErXLoxJZUguKEC9XGm",
  "key10": "37WARpJxJM6dAT1rFgnAC9XUXmU8Mx22Q1iUDhPSrn4YmNe5FuhcFSGb5wJjC56ABQxzzMA7DYxsiE7GU3jgYq1Y",
  "key11": "53P6qJfcvWfJx9MAWWQFJqyLejmrRU1xHQB9JQLZfV7tWkQPcZfUojhbXBwB8h7n8qxxZMyTiSjWBy8TGBnY4zfg",
  "key12": "dxMwNd8qqTrn5BMri83PdeTNK97TXPWShQsXQkRZTqPK6qbnDAj4MqPDENE4R3H5FDCZdSQwXZmV3NHcwywydCn",
  "key13": "5oGHWs7ra59mKuP4V4bmXgktiN3EREuit29wrUBydhS4DrQHwoDTADSG5PmtMajtndVr5ZuRhDAaFDd3hvh6omRh",
  "key14": "272UqDbnkgLf9nq4xYjFVL9SH59mjiHNRYE83eFvUCiYq4Rq4hNoP3Q7DmWykw3exge9Z3hrMANcZffegmA7ruh6",
  "key15": "3itYYGGX5hQA8TeK5o8339GDFfCmzQuvNpALQRNN5CYHoimYDLRYPTXvBWhP9PjxSf7wHhmJifAV2uVci5DwrTg3",
  "key16": "3FC4Us5dTYCKQNR2XZtGEHiZVUSK5nX82LisahokDNAoWeHYY4AtX6JUcUFT2yTwf4r8gSpV6wZfFKQvxzJPo9dL",
  "key17": "4GZcpe7BCMfPPtiKim65gVFgg2ocoDiWgpEX9q6a9jh8B8wULHdNCVDx1meUaGmxAvSf4phdeKvxd97T4nSAH9B4",
  "key18": "mv1caeAH5yaWJxfDWuSQz4K9tK1W5DwN4maFkM8o4YRbrMqheWGULqPTkwuDA7BwCt5UiYbki9RVehGnvh1XzAF",
  "key19": "5A4mG3mhLQJyZLqgBLfas6sbE8D9rtuURTtqp91ANP4fTrL5bHb1zmjyHatSrdQogE6ZtGzBHqoF8oSaRccaZ7YM",
  "key20": "57GSzvDqiHW2hA8TwYj6uv5s5JGmjjTdRY2M3etvG2rqQTVJhwswKMM8m8bZHX4nZL1XAYUXBUZjbYBvwfrQALpt",
  "key21": "32KogYMfBs5mLBAVfugYc2DaYbnUEChe1AyQrx1hciYKCX3ZREyF1nf1GxDyQz2JCnnHDFQprtJXqR3QbpfxtSJL",
  "key22": "x2xEMWkAQx2Vvgj6tBEZhkUn9cLqyHL1EawrbVZwVYg7nPwbUHZEUVbhdHovgCM51oanH9at5LkQAVaf7Jp5swy",
  "key23": "5iA5f2YUt9WWsbu1ivhM599MxwLXRh6dbXby2znvqngeJmatrjRgmwSuoasCejV2beYQHPVUz5fAnHfZE9LrqRkd",
  "key24": "51pfR16houNrDahZFwp5s1DcKvjFPMQeMuGKen2M4yJxDe1biq1YhHQRiPXSLSWwVCYcKS1Pu4fQA6icaJARMxX9",
  "key25": "3BpsYBdkGp9QFJjp5GApTYHtDe56BaDbSSy9LHJVPaTxm7c8iE3r2BzE461MZumZvqGV5dWc3ViwudbvjtjMymcV"
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
