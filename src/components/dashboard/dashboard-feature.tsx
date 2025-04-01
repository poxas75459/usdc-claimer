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
    "3jFdEbUevt34BH7qvJTr4GSkvoXtCQWTBAqzuojrhZEyXgTkzgP9CRNnzp9zcTcAHQyHmTdqobsroHGGQEvkYSLE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2smLPZfWrTNKQhuxbeWLczFZBJgcQULRPAAEmL3RpqhpAGpT39VwnxShRgd5dcmWxzdBzUMoRuYGJMjrv52GzUHY",
  "key1": "5F4eygMMgFkjWgZnroYEAP34PCM5Mv35ye1pDtgpnT8Na9frzy2T1H6gsA15Jnig7HvoqCvvnvj7yRdu737TvrJU",
  "key2": "3La5sZy23qZiK8c6pN88kzfC9GcMySgnSzbRCUWdj9hRD5AoU26USHh46fJuf8UyE75MpQKz3zyY3zupa3t1vTNF",
  "key3": "2emY3aKDReyLfk7amhNR9JYmnAtbNpR1a6izaWmwJ2oufdmXq3RsnqK3RzG6cUiY36EHyus8wNb1atTccQxd5csF",
  "key4": "3Lt7x6GvkbzU94ixTBiXXXSEiQ1MuR6LYKZTyywS7zRuTvAKcYjrAFKY7k4qFLn8k83KDn8o7qfsJHdpnpXdxHC7",
  "key5": "3FhbR2AQ53mnwX5W3C923FMCDFphg7s3iZnqfCX6foxdRcKr1RhBranu3Xe1yAfC83Cw1ph9hNQ5vPfwtHFDNgP4",
  "key6": "4iMaQy4k9dLjoSxKahzxK7cTiaNwVCuDuu7nXpm2irXeLFXEpvvS2wC8NpyVMfzY9v5iuocUbZpQfPgxGmZ3dHB9",
  "key7": "5jmJW72naC9M7ti4k94cYSAB3Q2WJC4mo4pYhoiXhoY9MWd5JnzpsZWoYApe1FYUov6ep86yNg2JhN4mcchjTMSa",
  "key8": "6SEj8uAvzz9FF3uJFnamFusR2CxMiH6nQ63ijkr6X2PdtuK1AAhnEN6BmAgeV6K7qvgfnVwvSVUAGyQovHHsLQb",
  "key9": "sw1dEySqqeNcKd7MMuqs6vQfiFDu3ZNDDkRUdvWTsDV42c2nFHdpcrwh2PKRcqKdxE79Pe95diMY25tLkQWcJ73",
  "key10": "vmFFLGMKKGD8N7DjzTScWJymwZvWxmHJxVraayzF3pktQD4h1EHwtT5w68yW6TZkCeQSfCL2GBC1Qp2TxXpyeDt",
  "key11": "fkmX66cHVa2kkZBzK7Jxun3zgmoziv8bEkLfTzQJxMV52sK4SQfQCmZZQ9gvec4wZgCwMBEQV6Zc9EikDsWoVaV",
  "key12": "3CNzFRi56PYYJjMUHydVZZpRobtjsbEraex1mkYaCa8vuafPmZeiexNhvGyYwyFDPkctVmogBT1U2seDmqrsCidH",
  "key13": "Htw7iiQRjPwP8j6QxzM1SdtHeRAw6qWHeXhFhnzkuWfYj2uBxqxpPtCDiD2KmpRo89Eqryka7gou3batzUYeAqc",
  "key14": "3NFy2WG15AC94MEbpvQ4orv19qBK4jBokXKbFLihxFYh3PtZoJRPrYNzMuVzWRQbcG9XCTQGZ7zehDb36NWNsdJd",
  "key15": "4Q3KxCxU9oeVj3rxpabcP62czc116rnp2QerZCwkMpidCWns2BTiAR9kkLgDmLMJFnmswJCRZoGv8AxdotwFXCrL",
  "key16": "4HdakgN16weivFDE7rkKgQGcwUp8pXsVn5nx9h5RCEoiXnhkHZqJAgRevPWMyhnKLMjZcZzVwVproZgDZbtXHGQS",
  "key17": "XVKPj1bsCqaWRPNySkB1Md6TTcXkHTUMBgxLsJL7JUNPcPGKaDne6A7Z9n4q6uUK3FTxJMqkc8ipx9nFBpjCTfS",
  "key18": "2giR36og1gQ36e3pBhzPBdSwr1vWnKBqicoLMDhdeGGNjyQm61qtUdie37QDTfU2E6qGspYRKGYg3VfKTr8N26Le",
  "key19": "65Hn9faBTzCKGe6tBBK4Up89eyDRFzwjjefyq37eANx5DPAbSoonRh1ZsXPUy94xswetgsyMCEP8vKwQbuKaMdH7",
  "key20": "47rB3n1WvcUVrTYx5BKT8dCUkFmR1rqqvQMsXAMzZjEgBPAqdm42Tna3jk4s5mSreB8LiPfY6QLGjwTvnkSUG8sA",
  "key21": "3mRLDhd8nM9LG9Cw7CLDKA5mTodkN59mtETHQdHh1Y2FbEJs1Qw2VxvqVQiTCvvrXZbbTa7eGyQrv4HtLNrBdfNH",
  "key22": "R8gT4Sbg7K2XhqopLfS9tqAW8HBD652i3NguBTEPtq6J1ma43mLpfZaM5tPA9tgbim7rkbukH4tHaneriG1L1U5",
  "key23": "47Xoem8UDXzwPQ7prPh7SSVKZDko9jzhSJb5VZpx57wcKkADtYEs5MfEpCwRwaVi253dvanVqHYnnB9Mdxu7YPiW",
  "key24": "3AZJU8y8dm8FMgWJ75C2FPjYYW5zrBfthSvZ8VmgxVRCQgGKRh4XntCfqfDhKeuFqHkeFcjbqdtTddomNmdbLXSN",
  "key25": "34yrpECe6FgeWZNw1E4CE7QSSzRnzSpDpvMGvDorjrHyu1q15EzZ1RBWMJdXpSr1QyvkPCFqyBtUJurWVTuMX83k",
  "key26": "4xAUKbJx91E461JphMSAawTskaTzBCPRuArcaP1Zk125EAezfTBZqN8nJvkTcgz3wH9ysKURw4Je3LsF3nrjMyic"
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
