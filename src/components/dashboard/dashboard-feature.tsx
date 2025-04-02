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
    "4uaaZeC4E9fNauPqc3c9iUJkdjPkPAXQNstEeVLpVXvGpcr3rWFSax6DDYDrJxSvg9hzPQHFpRrHSixy9xvtZibj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RetDc4Gv3my4QAwhpTjMYC9Zd8bRsWrxg1PVVnoFj3T1Rm42bG87WPYJ7t6cJJNBVnvBrHGeEioocb9y8pnwCij",
  "key1": "3BwY1q1sM12hnFaqdigXhcyQg7z7QJTefTdafcrbb1z133hzfi6kNwX6pLwWUygAkEXG2GsuYnTcU9SpkUFX271L",
  "key2": "3YHywU7wrqb9GsHLYsRBzoMbBoDbpQHpmcmLLUTJvhFyKSXYjKYmCqScHUKZEuYRhRZcnyASzzZmPKK5ZRTNYZop",
  "key3": "34urL6Yee21Dn66drxKQUwu41DgopzJXWywntJnmsQ5eRWjimqoNm1zsHYjWeA4kNNSE8iGAqhHaVdLcpjLtW4DG",
  "key4": "3vJgCF98w2YsnkeDZPkG7MT5jp4VJEHWzMtsLDHPSoLbeid5ZgkZZGF7t8BjCeEDGbo31wn4qriHhf7w8v5ed4tt",
  "key5": "3hSsdoUeaFAH6x8MhoWEoyF35XmnmVE3xQX97puTmjwucUqTAdQjuQgdBHLTLDN7x8LLdxxQCCxUCeSFN7zdrVnx",
  "key6": "37MQYzD1BuJFpckZQiLuyBjgeEieWpS1eQTeYongFYkxfvuAPmB83KEhSFfQDPgzcoe7WMNkQkryUAugvFTToaBw",
  "key7": "2gzyzhkfEVYHt3kyF2Rb7W1oZLNMweh8Sokw3ZxtZKFbHEiTpW1KsssA72tagBU6N9XUViQdTP84F8mPzZkFDWxB",
  "key8": "3Tr1USYgtCWLSUw4bngRXjd5AZoXJS1uh4nUxhzFGYArYPjucuf4XQo1QojbaZZcpXc52wYo7z6PXPCpBwTgY4Df",
  "key9": "2qAgzosnnVyVouso78XAD8cTZ96hww6T25VchN5LHnoUEmqkdyjPDp8cYYJ3KJkaXahuVEH37TSHcu2ecEpTD553",
  "key10": "5zPngnv8WXDkuRSCUwh8K8EUB3KVZEeKcEDdnYWGMGXwFpQ7458JePKchxY8iQqEgdxbyrtB5mqF7hkcwBvHXsCe",
  "key11": "gc1m44vd7wUCahp4cHwXx2vanoLSUcXfkqvDLc6yQe7ZZ4QXqUoceKyDphQRFxj9died2ZeWTWCCCeT4DR9nxEN",
  "key12": "UAP62p9F5QLrNKiYBdSKV3b1VVUcDu7vrHwYLhyDqYUZ1jVvHweL2noAEGtj28xUak6GaZ9LtxpGjFbQ2LsJ5kw",
  "key13": "547ggEHEkY5NpC613kLgYf4MaKjfyCFXefFMXYbuXLrKJ8qV8jFNhJQWXXLzznXbmiFnjpSdxN1nhPsotthmVVQR",
  "key14": "6MFAQzmWLK2EPo7vtx2uY3V62T5k53f24sZXq7QkoeJQpPov5CeYWoA3zPPRhkn2sAL4QoKPjzVz7zqn2fPmuVW",
  "key15": "2bLwXGMLjkV3buddUHiPa1e7pBbFZKSSKxjmUE8znkiMJmRtEhSkBkQDzKMLzpQr1Sc72r7kwRRkLhjmHyx2tmFL",
  "key16": "61fHEifCBxRyQ617X6Z9aVKxjVjLhDdaCs415XUfVDS8exatCM5qNHRjSciTDpcjR5dmQ8RdNAmcTxLTQDfERME4",
  "key17": "33x94AY9F4EPrXpRi9613bci9nMs9jHwWLdGaNdH448WY3Hwintzk8Qnqq3ucyCkdMAFEi2nnX3jvShheBPdsU5U",
  "key18": "5m2dUMHg5sUiq5zjCFxyvRzCxS44LB6Vwnsry2pkhLmtsXMdCj7uU91Q5xUJLQjFyX7s1YWdVArJpDZEbkJqXFEu",
  "key19": "5amLNhDfvgjXJdcjqGBcbu8sHoNz8Jr7Bufdd9nX4wj891BT4c3mxbMELSopi5EZUsyRzAiKve7PG6Khrgbre9Ww",
  "key20": "2py9TTgZSQ5JwTPUZ6FAuosCB5QJ2MqkPizvB6oqiN9MEE9kEUszmmx6ZLDfqpZbccukH2kGzegdsXyYaieD2CNH",
  "key21": "d4QD5jckfApYatxvzjyD8JdVC3MWQbo1ekXWZf58wwBFHoSFJmkWg9knvpAVwapDY29vWrGs8ZjwmsRDaRXLqYq",
  "key22": "d1eJkmxAKapTAGMNzTwEKDYfKFhoSNRxwzRiryFUonyaDJ1U16GKnsbACrDqvP3t6TzF7jXfDiv6RX8BwTpfu1C",
  "key23": "5o8fvsAgCCPtHQ1RFXnq97XmzN8bDjwxukzpJf3HUf7kJu2Efsa1hYemYEov19cmVZPC6dtAaACkoTcmt4M7u2Dr",
  "key24": "4oca5ThWBjYmrRJuFLKFWxuFg6EKn3XGhwr8pS9YfpjY8xYAy7yzrvMzEcbkPHjR9KTQiRCa2ZsojDkX1sAqY7ma",
  "key25": "cowDVCt2W6LFtKKpcEi75d2a8WM2HubUtUo1EESM2UgA7Q3gLZNimK1HJfFQfcFZoioGjA5ksQXkdfmhZjUhHNr",
  "key26": "4pYPKkJDq75QYC9hFoKEZ73GARvsYS19KkCm2cLpRcLYbSLgy2KbcHCbednuzf1nsv3Sq9gNNNieYAAikFPGWsZe",
  "key27": "5Wk3kZdrCEWHj9FrugfHBS8SXUiasCQehGTqAMnkwqRghHhHjNTprboeknb1jgrhc1faiArMGiX5C5D7vXTk4MbJ"
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
