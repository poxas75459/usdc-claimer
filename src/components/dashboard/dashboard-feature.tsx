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
    "5fcDKc37PN7ApkXSqkByo28VuTfZLdUgJh9tpPDVqYWBzmw47QSfnsDq3dFWMa8Hhk14rV8jEzA43BjC91o2JJac"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5f7og1oZUCg6bSGwLcwzv22XWrkcWN8F5MYHwKxLqdanHhtbEMet7T5pTyPTgB6iG2EbRHmzKKUWbf4KZ79dJmBu",
  "key1": "2QQHP2nSWeC14uf39UrdjSnjgvZ6FGtWK7v5XDaQGGfUZCduzKrfAR15ozz2KKuSH5hJQ2e3SSzcfSHviAJntJuC",
  "key2": "2EG8dS3TDFEijLuv4LJ5Gx7d6QTfKF42bhAzgEQPjmEN1eUHo7m1iayFaj9XM5T9fNueUNdGAtTqAsZrATR2HYCC",
  "key3": "47n8oR2qwvLYrXPaPYPpg3p4SGwKucDHELS1KY2m59sBux4j12yCvBd6VXXywiQCm9SPdTHPyYs8eXpeiDfwEgHL",
  "key4": "34DLqv4dt3qfvcisnePPX5cK6nB25HA3bkZQ8NaBjAK8unAxJgkLrYKyxEUxawxWTKeo34chZPFacnpBwFxPHaz9",
  "key5": "3iZxYcDGBKzMa2MV5xAGk7JmWumb24DonqLxm6gjKERf4dDkSzHEh1Axifeep2aTL4ns5tkwJECAsRpxfffy2gxQ",
  "key6": "4GVrnzz3AppZivW1gfjZsDrzyfLZmf7ZZnk6vSyc55gxJiZfXfsoJGcfwka4wSGX3ZLFgU2orbQwJ1DXcvrC1SNU",
  "key7": "2yffQ7DfebXjKq7dTi2GMr7961zDkLhWd3qA2qSe2U6t2hDowQkZykzEGzYMzGGRfe4yxKYsnVneivJVszd7pB3S",
  "key8": "JdNagTvvbBF2gCNMeruX49edqHdFAVYLqxiZjHjYMhQZBrxVPM6EMT6khkeGgvyr1za1G7bagojkgs4YvEKYT2t",
  "key9": "34sjr3W6ytkmKMna4jGEqoKPph9mbRAhEmHYfL7PcWBHbrgzGs2AA71KPR9h9g2XobSiMRq6QMRfZC553kTsUY4Z",
  "key10": "4n6P4nJ3x9a4hTKGFJegfZbZFiui5daAzCf7vyB7aFnS45xQZNj7AfHNhiH6iaH2tF6tjLnAqFXHjXGrWSFJc3E6",
  "key11": "2beJdCiaDgfDPXhV7e7eEX8EsKohidzkr28LpK85K8ZhHaFxfMtnyFASqLdijFJrWcjAcUB9NfrCKW8MV6GDdb7D",
  "key12": "3aZZmTLzRbF3uZzn9MZH55gDoF4kDJvLLP23whi6XasTiWbJYXF5LAh5phMRb1xUVjPuhH9bMv1XfDVYZ2sF3mmt",
  "key13": "ViiBtkgGdL9banFDcU4Tz3EgTxKm8R1hehCxqodxJkvFxFNLfQ2PKQEYHf8NPetk8pBVwMvQ5fRnPknK17kx3zj",
  "key14": "Pwivytz5XwZKxujtsDQbE1kxdsW6FWmtfuqo9Kdq64tCnyFZavJDsA4DArTQvoN8hhH2Tt8Q1kgCLZ2eGjYFTRg",
  "key15": "4Dox7Za5N4dMQvJ1gYgLDLyb21NpuyfwFfW1a2pQbdxB5dDoNwmj4nV94J8DJSDWoiHMv9CCSLBLdkt8sD77ggSa",
  "key16": "4okzWbGDzRsjT6CV2J19uYXq68MU9acRJhEASwTXe2p2KracCJAzPf2MvEtiyMF3xfPQdvyQkDqjrWj44jWFxAo8",
  "key17": "36RMFJMhE3inETZswfAGhbn54pp9Cap9isvEpymeAQBNqpW1PBnHtCrin4oUw5G3b5oF3YBFHzJzCXWenPEXu5NT",
  "key18": "3wPVHWSSxKacMsYCXErbkSkvHuyLM9vUuqGQuvyw93NrRTCmxqMzJd4C3bTq66SKok41uppN6P2HAcMExbbjZEQU",
  "key19": "5mfvDZ7nDCa5nquHheyqCNB9i3z4S3EiBX9gyR5X9qBb8JSeUqYM1u9ABLLb8efdSpKs1DrG4tzV7T6urpSK8Z4y",
  "key20": "2xJVacESvtcozU4xVnSuCuuW92Np1Q8dgmBxYuv3nV1LxvWPwHZQERapHtKQnmYLk7vqVCvjYntc4wAUiCXbyD5",
  "key21": "4m7hZKmnAMWAwjxKtHiWy55Ewa9NqyVSuUwzv5qnTsTKbcuMx6uDc5C8QaG79g2aX6n1MEJ4ycJXWdcscse4D9nu",
  "key22": "5Z5AxCSmaH22VS6BPdSBkqvZY4sP33cepNFQDd7FivXZKpx6jt4ytoX4oojsuhgBhMnkJqUp2txUcukiuhKQo8b4",
  "key23": "3njiVuMr4huCWRwCk255TPhdDw637TUDxSWJThTdwak2L3xf5hbNCR6TFJvnqqzv4ojqzidQ4HCoZ5Rd4eftVx5z",
  "key24": "4eBYVaXEZvk4oWVCNTcuSsqptgwiM8gnJjncrX6dxpjcRZr5VnmrrnXjmZsii2EKLFRsv7E9jqySFR1mCjdpKjiF",
  "key25": "58H8Js6ZEz6FJkpY15y3pmUyaS5GJgRrqVkYWvePTBBNeJdtSG8X7wUy8FoWzzQozZyh2VdgNfZCRvS3Bijo5X6Q",
  "key26": "4nSCmw59tVYg8mgr3rYT9yHS7Z5vJC8e4jNdHdhddWgpVEBV1msvmQgkXp6NAm3nRAKLpsMjp6HhHVRK43reHp97",
  "key27": "2ogZh7VaWddwXGGyrR7veYqNVNz3whpkwKawov7jbGyD7jPwuHbAwcZYYDijxzkuDLuchmrzjS1pF6vt6L792VnT",
  "key28": "5gYvMoH1uptcC5Uqgc5DiGmxfkyugCn55W6THJfUYjQskFy9pZbrJthVGzxkb1KAKxET3HauaXrXPmr2qWsn2C4R",
  "key29": "62RR9Xd9mk52mrwP9dKahWZjvqVxR3ADVjwGtxJVX3YPSkEDRinCRCSsNM1TSd7rNWw5bSSMCNGnEdRCB4EQEK66"
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
