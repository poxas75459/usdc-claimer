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
    "2vynswHrZaZyWYK2KYGne2VkA74oMUB2VngqFW11AUgeG8t6Hn6x3a9R1a4R7Zyb5LzoqjQ7LtTxJrwb7x2gZkt1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tuqPvUdMPfUB8ttu9sWHCsVPB38vWiPu7hVZm1KhM5Ja7fHfpWEFH7XndKv9BsGwXBw3Uxn7Tj2xiU5np4pwtRK",
  "key1": "5kzYzg8KEWfRRQpJ61Vn3ArU4LgmXYFpYwJkCFPEvk5eYjychDLD9sojePLMPBNxPnKsA79ynZsFHB2pDMe99HwX",
  "key2": "UMos7B8Yg3pzrVHKVa3xJFSTBe2y5zJFjaGNbjU5Skx358kYWScmBZeuyEgrQrBUbfD1TkqFNXfTSQZdMHuD51P",
  "key3": "2D1u71syTsuSFvRmYbp6cbygPL8cCUhmVVU1tKieYvqhFzWGTEcC9qmbrUyRMBoFMW6fqmYkDdnmh5dsLkzFGxm9",
  "key4": "YdH5buVhja5SUM817qUdK4y4cpGchMEyUDjujsXs8qdXkXrnEprQxVimBWKWvCi9NQPcbVG9CwabeCk7Fn6NJwC",
  "key5": "49doaiuFPLUTrdPaKojfH45yJnKUVYXPskTBysSJhEg6vHRYYMjLHu1RLN4iU4snsrswnDko3rY1XuXhub7qX6Qc",
  "key6": "2JfMsY7aU5rijG8pAqNpPBuzE7A6xb3ZUpo3v6EZBHyH96M1WuM1kZ22rZGaiFV5aeQHdA4aCby2T5eA7w9AYdjH",
  "key7": "2M2TVwznQyvG1VJ8Dgv63yCtBRrd2prDrDcJ3Xoq77o7Jt3ZCbfozwyz3JMCmeEw9ohYMCpbC3asmEiEaJVUbqED",
  "key8": "4gpG9oMSUYTP2oCpVNKZhcRHgGwmosjMmKEwsnCNmztkPLEgtqMatfEZBe66NSa9juH7fuHS9M6Tg6JXNbghgwo9",
  "key9": "5w9FCYJaEEba8db1vTonNkRD5oqg9qrw2gtF3hRHnVLGthxmWykxtkqAUv1PPG7fNySz6vZamEu2jnEedygQEqEp",
  "key10": "36oTabxS8nD4Lr7kfRwojbpE5YGHWAnrKGJAiheV7tn3FbDuxK8BcLuNkjMf9NnCdZALKocZEVP1XiT44PA2VbPd",
  "key11": "4dUpd68sKExsd89jgSMroe8GjZwQyCCJVLEP3wVq9SZmnLZjpJbgL29tbh5ZdhFGLicNqiQF6XVEU3eMirtoZ23Y",
  "key12": "4nc9MWXSTu88LG7FARZcocBoLTDxXKn5CVbBhwfdf73h8EGM3c4QVYL8DQSTZh356d9ManAmkp61cSG15KAu9Wkc",
  "key13": "2FNfq5m783jguTnFpWqEN1bj6b43YvzfdFrmCwezgQ84yNB5LM3swhUjBa2tbG4CxJaXpBxpNxwYoFnpLmA6ht4J",
  "key14": "2E58Frx278UmCmniwwsHpMUb2wUWRPruoVv1DD3Zwcd1XTNYxfAjin2f7mNpUF5RXvSTeHsbFRW7amy2jdbBi7g4",
  "key15": "42183en8Yp3vz1LWCbLm3VZhv9uQVyshmzRaQka5Zrjpa4NmVJCEQBvgj295Y328RvLL6z4nu3UQcjKL5zPaRi84",
  "key16": "3sUwJ6PgU11FXcEKja4Rdor4raRtJSosUCMZPG38YrCNHmodAz6HmzcF84C9xmNtp7aGWDmPrMJF7J7wTp1Ywf8D",
  "key17": "51e5hGEkFUWKp6ugpM8ZNBxUvQq5XPYN3uqHs8q7ochhEsA2eW5RJCYCUwxoVKDMDgH1Sp3MsNwwR1gQyCE1DXvy",
  "key18": "4VV7bibsNwg7XbuLsczVGbPmbzmizfJgE1zg6dENEc1RKjXrC1QkEYnSmAjNpYx8TBPGZ26BmqzomoxgTdpeo9iM",
  "key19": "udJPUdZA1xVsopZxAhVv17oC6y235DCp4yWLi39b9rerL96mo3y9xD56oTo2WwPXSrnXSaYWrPitcSqSgQheSvw",
  "key20": "2EXQ9W75ycYh16bRL9nnAe8EupL94fzr7pjXxNseez7RcEHvzzeuN7NWzWTebjFh6ET82Z7xdb9iRaDByUTxjyLW",
  "key21": "uXLSmhD8a7pwNoPaTRmcEUrEAexBFw4w9azoHpkaohVPvqZLxYhKnhQhb273YbLrmaxim4vUXdtbWPjnNMA8Srz",
  "key22": "4YDWoJmJGVfsaN7KYSgNcdknbgefeppHYc3MzbapYcSESJbk1qjuyLCXV2Efn5KVVPTucnuGXPsGRPFywyLtvbZ8",
  "key23": "2jLfAZADQorjsnVVCidGKYveUNtZHgPDfmFUm6cFmFYHPZGoTi1meTeqw7LXBHR1y45Yuz6wZhwuEbMtxAudnTWD",
  "key24": "5bm5Hq1ime7Y92VGdzwEcjwvSMnoqvVdFUxYquMBVkFJaeHAVxKShjj5EPPF5HVQhwfHjxbJxE2enxQBHRm4xPVM",
  "key25": "641CPM1oJ8op7qDL1RoCiQYCX9GNZ5XcxA5egdUcWvCYupthsY4VZpakCS33Vsimi1FiBcVr5XtvtSUTMMFuRAtn",
  "key26": "4B2Pen4Vmqs195zZvTBPzxireSpLABWCn2qekMPR26bteYBPp5rpQsEkEnfGGJYFwRWmCsmZpWAxudmCAdTTFBKT",
  "key27": "ireNvsnDaHsR27cTXxECBoKDtrLVdsdvK8Wtz8J8irs2s99Gp74mXvx16p9ZECcjoMhKt1GkP4nEDDBjZsyrNKx",
  "key28": "fbWvTqtAp7zPXAEwPqKgambQ2p3n18JW2PaKQpCqzb1UJikDJqVBPSHM626NAfL87CUZsE2CrrPU3UAAiQHS1Vb"
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
