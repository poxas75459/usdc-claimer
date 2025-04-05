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
    "2y9L2R8F1q5558y4v7nbtbxp9447nYpzdS8Qf3Ehv1AghCnDR3gg2FX7saTJFHG3fvH1sPxTcaGWHbD9SbWkUkyz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bcMejKPs6DAaxvBn2Stu1hH1T1kScFixH9Cu2AnwDYXjd7A7vprvfr3BWrc3WwYPTFvKiusPUoNqbP1G3mpyDi7",
  "key1": "2Mj6MCS2jkHjUwsPNDuaevd6wbvhQe3q4UgLrkf5QNGskcTQjuJjxcNtzrn2wzkwhrmpd85yV8PEjWbz5D5BZPGo",
  "key2": "4AW7itzmiCWzYzTMfXLsqXudhecXhFf8fQXuGcS2p5vrxshzLX1qRAzkXfdBWCEgXLyDRVdBzwHtPDFEKtXgf7Qs",
  "key3": "46D8Rsomo64ZkJAkmLgpiWzX7XgQenzzX2GxuZqbD4RpVGpRbKJSTWkKGnQk4tzUvxm3CpDkLEwbqp6qu5pehe8A",
  "key4": "4QXmCxXXgUxsACk8iW3R1SPTfZSBjXcAnjMintvSjsuQcdaqGFHkZ4PtA7LnGqtK8Qc1r6scyRUhYdtYDa1Br6x8",
  "key5": "4yTGB2vUtqMiJ22pANg3x4YHZgetk1RvQHD9sHNC4NLJnntpWf8vzZeadr8sBXe7dFVD6Go7hzYKGKMA3ubvm9q8",
  "key6": "PD4L2KmkZzmDMoy4ntbzhWy4oAPQKPLby2af5CTPyJu41UKgx43dxN9nvZcgaU47Akdmr9QA4Fz7d11W1bAsUX7",
  "key7": "29dZgA5BrW5vANdui3be1g9LiMN6rTy5SfvdyUd6GKZSs2EZbBfWiwskqoHnbQwGh2rEFwU23QvkX8tjZos6eSGe",
  "key8": "3WMndiy3BTX9FrHFhyHcSaLz5jxC4Bp6XwMBN6D3F6vQDPpC4MPTxKcaYDtvyNtBycZWYH8ZkcXTDcpGWR98MKQs",
  "key9": "3FNFySfCB1C9bZohZKisQg11zqdP27bio4smFT28ex6gtmqQJq6HMitt5o676KDzkZfdkFCYrWErAPsJ82RD7MkG",
  "key10": "3VBDbsq9Eoz2btUwSHMF5ECFdYT3U1BodYqoMbqKNK9XxSmcZFq5ESWg9XazmqctzRCz7GxLAcZ2CSm75hPDfuxx",
  "key11": "4QUrqyRRDYqhLwnBzXivTTyvJfuNajyWaXswuUMqQSLgFJxDPS1pYbkLSXr8GZgqNuFvvWPKDcuvU1o6euyDMvcb",
  "key12": "31da83urfAKWTTye8LbgidCwQUDzkTz46QB8ycAg8yqiDfs7oEPZq6329LkLXf3HcDJgVVXMmTQfu3TMkNECVzHR",
  "key13": "HsXt6z2qr1zr34MdhmLZwmxY4Abxy8X6QpAMeicNUoage8MRtVSUNDaeoJmTQrXp14vGsFMgDffJFGwcVqXUUnf",
  "key14": "43n4twwqDgANaCmXyLxLkg4WbvadGk3qK7g1RGErrznE8Wwaj2oEqL8XeuxkL52axXohGtQCjCpxSNgrpDB7naJq",
  "key15": "gtSHy8J9mqXuaSNFNmKWvtgEi5S45vYTyu3nm1oaPEY8fq872M96CFgkckZ67J2SuQaZXeUSDUn1KG8zqBqBVVa",
  "key16": "2kDxg34QYYr3vH3u2qV5KeGidXRBMZMLZpL5dzF4ePNpzDqq1cZVP3Jnq8wVzBXmuFwCd5bAr1gnkhQvA18xcaev",
  "key17": "61F7G3aQMegUVixTGp2mtdLJXhxZqxJUbGUUWVC46zwcww8abF26PgYACiuSg2evqe6CUhYQcLcQgBYVTYH5KygS",
  "key18": "2wshBse7nDmy6s7D7KaSbx9jCMMXk2ibtvijz1H94bUt1wEqktSZzvDyBsa84qkqMMBbezoqsKT2vCUnqYEU5VT1",
  "key19": "3ZZVSuHECoHYFHf5rnhdh3WJrZMrH9F2FQA6SVrrJxQnLv1xqrPUXQjjWzHF69k3nPYMKcvxevvKC9PhTYpxeTmL",
  "key20": "288RrfF8jvGGe14u94FmEDekkqXTXbSVFY6ddBa24X72hM1wpQ3Ddiefi2z79YbLGoH5whZdc4axcXZyLYX1NcHF",
  "key21": "qp75MbFFiyqGeSvtttWdH2JzxCEzEQphY3cbTfjYxhFo1wLCwdVt19FSTjkFU2p8wLWamgPYXkj6sE9KjuBxpHH",
  "key22": "5wsiiw4jR2wmCysLwVBsfxbwwsnMcSjXL168hVDfue6ahgGmoNxDky1f8pPcgMQrvDS7eTQJr4S9aznU9cuVzfUX",
  "key23": "32rFP8rCqcDFxnwP2vEdpLwtUroqq53Yy6JXdmkskT2JoCJJoyUGfURP3oRZj5MPD9H8N8wG4iAGP1ZTuus3Yetd",
  "key24": "c4ffhahnE7agTJ3dbLL65N5VcbachQuqJQWJw2SUj1xBkEcLWBTMxNXjqM25J2JzsYzrzkF8DdncRJp6rebYYGp",
  "key25": "27WvM6tD3jTKqkthzcLTNKzXzee2C4SWjaS2Fh5RkSrxMHrAAN5nSLzeV594Wb8vf3ga5YZPGXM2GNmtCY5H39si",
  "key26": "FhdRm7niFq6K3XXJgmAVvwySHA8eyQLCQs7q25J3NzmDkYnYCmTcrZEAF4x8hLsmvUPxue2NzW5HJm7zMx4Gq7i",
  "key27": "639vzjJvXx9HH9kYFnzzFBJwm6GjxK8teSBANax2Gz9u5Nsr154dEevJPueATVsd2yAgzJJDAw3TeCodiMJXgEip",
  "key28": "3ATVdT7v1tbNZHyXeZNtyzBLJCivWLZVz7NJnFUvQxo3y3cKBkP9xFBDZY8ot3F4cTDH4YJYCKeGfWCf1mjN7ePU",
  "key29": "21fLjWbGmpA9NAre1YU58o6egf9GoEQc9vXz99LVsFUGSxD2gCvaQ1La9gipjhcmxv5XbFXPWHxajjhG3Y7QCuoX",
  "key30": "5wy3ZsXPM4TNSHPTvzLMjrNAu9Kj6NBPQzzf4aXi3wTEV4qUSLDGi9Tdtj2FMToq4w5LdPHBoLUw6gEaeiy1436d",
  "key31": "2SjgDRD363f4PUAMd4rtAfTnmyUYLPQrFcLPwKrXeb2btResabjFQJbiEh23rhZ99jwjTbdgqUTRgwh7gAhLjWY1",
  "key32": "58CPDv5BdyPEv7mbz6EXV3SLHCSgbDtgg92bnUGGUwmbimPus4VZXVYWiYBU16zBGsWFWTAPAB4QLGyCxUJn1SFn",
  "key33": "5bmvDu8pdLfxdokuu561D4xMYRNQpeXeAogY7qmjKFP9VTxbkUW9S5hAXsXQeAPgdvDnvpyTWUJGzxfBtK34KAZt",
  "key34": "4BEbtM1eVuzzvbgfDxgsdGdoZqwYDURc3HsChGYei3enPMYWXq7FGFzaySAhFQfZGBnzmoeyMrFZcUjzcrKsNgw9"
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
