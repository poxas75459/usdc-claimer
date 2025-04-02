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
    "2yQMCzGrQB8cB3B8D3VaPkSZNU6z7WcDmHmUriK1e32wfZuxhkRsURUzWYPEqb3VUUR3fTciGN3jk6jw6AQRzAMq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FUjzii4QG5fubSPDGCZQDuytQwN491mHXEssjSZCHVDXMMcpqnGuGsfkTqp4W72SMg3NznNXW7tXdRi8t6GzsH4",
  "key1": "28s6AMQw1ksCjj5pj45QWPgTZ7jJowUgBt5aEdswJaTT7zcNYb3RjiZs34A9fSRLgkvKBp6qWvLidCyVDUfcx9J2",
  "key2": "2f4kSwtXiCtMbVwPzuJbY8yQQeSRdhK9x2YQMGvugr8Bsrhx2QAkUFRhJkd7KhjGN1x5HCXM9K6t5cYQHWpwbdAB",
  "key3": "2wUweRtr9EgJcBNqDqmHBGQTCYfUX6sWLw9pMqXKPyFVM9kaBpf9htiMqsFfDTMfp1Q2y4tNFqerZTpey8diCnjh",
  "key4": "1w6Dqx3kMsfjp9gLJWWvxfNeXrU1UcxwXsk15T6KiFrm4WZpQ3D1KM25on3D3Mr6AwZPeXavWTyQQnJyak2S1Pb",
  "key5": "4h8Na2EJj6zPz4DjmZKrxoRu1SbrncZSYfepRj9tUUXBCWKavTZaEtX7YFih9SDaZD5gktkfL4vpVR3bMmqBR89b",
  "key6": "4w4eYDDYUeNy1CbQhMpcjTHpFJggLsLUkYn7inTzm2ZAdXQdWxuk4DNvgi2TYwquhR9jh5SCYincAsSrcpkautuw",
  "key7": "3FbbipoEHBqccLePYQTFjtNhrv4VqAwvFn95J9yPrr6M9TmMx3tU6ytX4uWaHaUJvSfirBeYQzLvUSSYU1ZuW6wZ",
  "key8": "3G2yWZdQykMoD4fPN56xru14VYruEbGuGRFdz1FbGPYqy2Vwp5cAWx3hRCQSwhGYtCVbQbShFZvyqySBVHsgkKjq",
  "key9": "3WFjxTUmZdvjnHQcza6TLXss3s9FU83qvegbcVnkeTk5KKMreUEa2cQf2CMR6QMFbtmvPfMjYtN3dTD9UqxpC8MZ",
  "key10": "25p1e9LxaRuupfw36U4fmqovDjgt5LcogvKwnh11f9dUkrzixREWwzsNVPw2SL1jLnZQwrySUnY6eeG4bg2Q32qy",
  "key11": "4kU27pfvBmJHaxUWnhNu5iLbp6aAwWt1XN1gKrJhejPThzPQz8P4jRUvvqFVB8tK49Li2n2XVBk5yMSDRrgtXqtD",
  "key12": "679mcUSPYM3fPvnF5AWZmAWv8E2VrfKrNUd1VQdnWfKVfKrQuywbGpjZPDPdXFZF2c7AcDsTct8oSam5jHAUJ2EZ",
  "key13": "3f28KQFx8YvNATX16RANZdWrjgLPTeNdzRjj9Pw2tBFsE6qsMxAnTpkCxzpvcTtU8Yf5xfkKCcUhq27U4rNnSx7F",
  "key14": "6x4ga8EXQTJZUHMmxXuTtCgrtCmuGVK7btxBjBoABHa9gvjwVjaLAvm4LvPwsm2CiC9fgtADDzEwJMLPzzNT981",
  "key15": "2sgiqJvnThZhaiQ2BndKqhtvLb7JbyKU6GGjPFxL34W37R2AhYSWNXC8kJUf8LQCXJafSgtz9LGkRnnznJQ6haGh",
  "key16": "4zZ5aqPcoRKrbCrKFUdU537uPA21VB3WJt7NPY5oLJvZTfF8Hx3mM5kyv9HDNK9h1qtbMdBe2i8usqCjpnhsw3Lo",
  "key17": "5d5dzXVBmcG1i1rtHrF3AbTKGJzRBRPrN15dT38kfK32ndW9MZyiYKv8qCQ7wcGkzJzvFykeDvkqkWMFiHbWyr9M",
  "key18": "6SsT717GxvxcuJjc5orcQDTxYxvskFx5Z6i65XYaH7LtvRMcbxQEVGZrULZNS45uNtC3ayCM9DenN9WPgZRDZUh",
  "key19": "2udwtoSLDbmR1tU5tKxBvpg1ySFcmZBwQAFT5nmSxY4Z17jFNS8WR5yYDy3Wi9jRWqP98XWzbrS6JPfhjnBL2gTb",
  "key20": "2mPH88pPt3saBPoCHZAUExszszYMKmfvKaiGtXhLAPDZeqLY9z41Ey3Cn1NEQ4rsQbfKraAPnb7yvEHhw3p1Duk5",
  "key21": "nG7PL6yFyq2BHcn1EBg6EMSHnZ6NDTgRQPupZZm48hYmSFgJf7TmDfdfFVoNkkLiLnfBid7ND55iT5EXxw9QWNj",
  "key22": "4fjMpxj5oKVEPjQbH9MmPgoVbkiUnMM6eCwLZgtHXZwuGN7ZPUmpLKRVXYCiupnwwNFYcJQwPTw7xXtRpECjQ2Kx",
  "key23": "XDg257fSokNzjmh35rJTUzPek17yJnJe7iqYBx96YoR4nvBYEUR9sRtgyqXrdSXrBzgH7MQKEcPapfspawDAWDC",
  "key24": "4xhgxrQ9R9kcTaNrSUckeEFQVMGxhyt29F43Ep5zY8U1ADpYLSGSRf1RxjDcq3CoutKYMMor5sYfSYbjmdRiYJzg",
  "key25": "3S522BEkGNtfGW2LRcarCgPYePjrwQAJ7Aj39CihDEhm13gfwZD9GXiFSq5U6f43GhFs8HxxijH7g3iVxHM46oMh",
  "key26": "58fPU5agJXo9aBTxAoGsZ6nJhjMhU7n2ADduk2LNkDEeVMrAxZ2yGAmvYTQbphWvyaZ2kd8Jx8rtwJnSpFEPzTGc"
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
