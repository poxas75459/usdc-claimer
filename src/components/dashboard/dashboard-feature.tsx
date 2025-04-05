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
    "w4gXpzQD9grNZCDBuVMbuYLnSdDvmWu7JgchRiLTyLiVQhWC4rp37grv7z5kTTbQerFejMKEAjqfh5mXJMqu4Cf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PUYdhEnjW1VbqPLehwtFaa9TSAKL4beP8Ax38E1DQZbJ65r6dFQ1z3eQUHRFwoVunbJgTVh6heSFZcZEvdhxM7v",
  "key1": "61f3JpX435bf2B3hHAbW1NP4JjY2MmpYMCRsWQazsGeChHupXDobGxGxPc2kM2HepKXtvzLfHKgUV7bfRtBefRXL",
  "key2": "2Gjf9p24LkdPErsZdgpKDaWKfGRJ2t2FhHd1WfEVcsa8e5qSAh5L1euYN35KHKrgonGjTPuTWXrj3xPP1t88UodT",
  "key3": "2YHxeWEsRoLRa51cgpvvzqSmJCm9Hn1om8Y2LSeAZj9YxTFdKmnS7x4FNAgQsKUJEs8cHo8VNRjTTrXpqXYdexr3",
  "key4": "2yDCPWgG42UvbNR2o5QdLe4GGPebguRBW2r9mT7K6rjadCxT4NPvPywLjLw94HnijKPw2uF6yGPSF8bQaXeaodZA",
  "key5": "4f3tLF964ZUexLfPwPLhQFg12FYqxgFTy9uKQhWYq9fSGa8VoNenrxajcEHBgBLxtHmW5guTJdrnU2EESFAi1wto",
  "key6": "Lx3CXDDq1ywRnSKXrEYCUD8FyTbNRJigbnkhWTvFyJMUhfFhY6uBeoY5ve5J9HzXEsFrWCW4DZrEwq62sodAwCr",
  "key7": "4hfP87RpZSChQp6d4kr3fQjbxVPSWpmrXaZauwTsAugYnZhqgGtSPV7nhutaaTm5zR2NEXv8ZzMeku8L5VR1iKSr",
  "key8": "29A4nHJ7avGKSvoDVhtppXe22JvFCVRhS5gxKGjkDCUbeqpwy3xaPpFu34prQXKPJnBpvm7DFzFJDWsNaBzejV49",
  "key9": "sN3bafEXYA38iVW1LgmbCUmkyMBGqExRZ4Me8AL2BumcHzgwqNNCh5vF75urkkcrqk7ggff97wZFQzEQtXdduYt",
  "key10": "dHQAH3zwzBx6SMc2sgMeqF68HR6DgoMnYQRqPnYzTYpU9uoWf7kfWyBjgww1kdYUCufXrLjh6dhwmW3KJ5WQiLM",
  "key11": "4sMToyd6kUR3f3av7ZNSBR48hWLYHBtPsgk57csUhBA3hr1GrYvAc9pc9z9nTZ5ARnaTZxUKsWiJZ6AEeDyRyLrK",
  "key12": "4ypnFk8F2SiMTx1XTAFJimcLqFiVrsfHkyvYWDginCFLPcsNR46MBPzTzLE2Qpsf6zB2414gxbhXkfEWEhdhqt37",
  "key13": "5R8XhdgWH9oKvvsw3RiDwKXfiCcWvXguSwpvYeFCU6gkUBf38pDA9VPDDkpwa6qAzvPFxjqozYcZgtosJ9Bxt9mo",
  "key14": "22NunNFrDs8sjxUr6t4CEbMym1PkTmU46uLc1Md5n9gJXH2kT8FgeuvFQBYzNKtf4arUyvAF1gKKZ6VBc1eaVcN1",
  "key15": "GyB2uxeiQBfpuHB2gH13bm6vpsk2XFp3DKuTxS7N2FJJi2v3HBZxHAeUahhMRvoHZBwV2v8rX1FZuqSzeZUpvN4",
  "key16": "5NGdVfjyAR4GvQ8vsfvnDaVWCQxpLVpMrpFscDQbLt2Xd3o8Xry3k6ELxsYVXRcpKrieqiPee5kXKDDJAv6LJpVY",
  "key17": "2Rkj2pRWFZLULrFAj5tiWTw826CdgDngaH9sjytzmBrVXkHq8NQZvqJdRvs7qv3PujVbjpTu8MYV1opesWCaiJTj",
  "key18": "5GubbVjcRrMTP48rBnXPdnFPYpKZMryDQmt8arCARdTTSSEQJz3Vmw6xp5Zspa76vkRYVbkLVkEezZ17zcmnwJxZ",
  "key19": "52rjxAfKCBaNEpnCJUHuXgPzDQFUq5ZSFDZcb1iAKndyVWCSN7pE5XR9ut9nbuTj26uPtBKrix3XTbnVrNPSJr5Q",
  "key20": "42pPf1WiJ7WQasVqUqWz2yJ22VSwZqbSMSVas7R3ehBmKsekJsjQNbqEnDKfzSy23yHVgEk73HbQhyD8Pm6LLQp2",
  "key21": "5yRqr7DtnHaNycDHvkoRfcETtUdcTrDavnPa1vfkWMdk5s6qnVqfDFwv9dN7cTNDAfqURqBTMpGTz38FGG7NbmUM",
  "key22": "4wn3xoS7p77YDqLHZo9Z9szLbqZo6YdRMPbF6HdGN5SMnCY7CLQEJ6UjtGjZb5Sgge7xD5ec3iWAQPnutFxUwh6R",
  "key23": "4Bph9NpvcDsGDjNZcB3FkQ4jEwLxd6BzMGXmuYanuxmzeprrNZRJeZiFADavQMteECJd2d1xpYQ1RRpaXTM4RuiD",
  "key24": "5Sp5JGH3km9je2khQWEyDECRd3o2kYVRNuhmCBkg2nhwZVoFzTf9XXTeS4ciAMpZU2xcDdRRfMonJx77X1wthu1N",
  "key25": "2zLtWrLsimCXsQf1kXP3qLN6NWx8tnXMm9L4xejbv81xdVoux4YsAJBGokECamLwXq2EuDn3KaPQZr8wrB2kKU1A"
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
