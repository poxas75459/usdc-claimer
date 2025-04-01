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
    "Y6y6sbnjteTZw4nGBxKr7dS5ZPyEPmmtBSYVDLMPpeqq6XbgbsqjY5Emdqh6DCAR2yvF3TtrLyB66BpLegdqj3D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BKtvwLi1RieHbxYWWhNbBR31gGXs3xYdkFSdpd9WCx8fuYZBCFGVSnG4cYVbixB9qkY7oYKGVYvHRWZ6HnwuJa",
  "key1": "34ewbgTLKoDK5trcL7o4Vc7NSDxSmRi5GGpvvb7ajzqLomgfQpYxAPVACt8mWLP65K7oqL59gbdUfEXMK1JuU3nN",
  "key2": "21ZwKWFdUnBa8K9NNjCd7BYK9V9DDjLThRwuDbNd2wq7dTb1k83Np27TwXLQEmqynDRmzaWadJ6BuBKM5WRYVQNL",
  "key3": "4ioomS6ubkKsduSFb9WJwoeGPRgtYmY5fWXWrsUHP3XbiArSfwWrPAhf6wSHvnw2yiWHatuyYWv3r85hvnP2eCsF",
  "key4": "k2LGAXjphGhLPfBUhwPK48chSxZGdN63AZELpL88aRsgMthjwtuc7MKCAiPbSheZ17EaWn54WXPmwTtijxZhZZe",
  "key5": "3xo1MjUqvwJN3iAkvAURpnK1ZKimAejTrFS8Jaw8NQZbN97phtiqXRbgUW96yGzk6VnbA6gsvTExy7uywXXAERCq",
  "key6": "5NgpP6dp7LV3SjbV8RJcxNxfefqvzncwt5DxogobaN6HHoBqDZANSTzcjD9NTtRzSV44oDuo2jLqefkBm2xMsrwF",
  "key7": "5z4fBASF3QiqCrfnw8hv5625guAeDC5i3PPTE54eAyCGhBy1bs1xgdUMawm5JEL45mUtXQNu6Wp51tijbJQdeDB9",
  "key8": "3UptnDLvqvEpw614SkCCfZnRV7YobDoXAEJ1xVmLabPf1tKSsjVxiXjTM8t7VaxdqyApWK943eDoosLk8YaWAxNi",
  "key9": "YitfX4abLythnBU95u8SYsBdRgm2UvdkbnGYADDq2h55HsCtQnM5rRmQakjJKH7djiUfn5GxMaW7kHc6Cr2yCLK",
  "key10": "3K4udTP8UKqnxXrZ9hKGKoUzi9aAMbnpPTJt3cVwHxRrLqY5Bg4xNcjtx5feYpSLx9mSMjdUqKz8gNPrPXHL45eW",
  "key11": "3R7cNKTN85Vqr6jwXmWWnVyvcvS3tEcieJSqU2tXcdgLDYRHTqqfgnGNjVnHBXkoNufFf7K3MjfW8b9sbRGsKUp3",
  "key12": "4uqcG4eQZ32Z918VLAj8QEHgZPFbUAbjLUgEZmKee8mbgaPtaNcr49U7M4p3QBhxFzWab79jekZc2mZQEorK3gqn",
  "key13": "77YHUivKZk4WNS4ZKEgWi8XYkHgF3DivyboGYiPpRLeva6sQ7dN5km4Q2Q6eZmfzu2zSPcL7Bnj14vUcx6wm7vD",
  "key14": "5dpEg417PM7PDpbkWDqxxSgD4HcAjdtLevsyY61cB3hhSHhW8AzzEJ1EwZzZDfdZTbh4WMiq5yFRmkdCophjUhcu",
  "key15": "3YtaiRL4zaNPg6zkobGGGhkLsaA7Td6TvVcRRSgvyCfwQZfqCjtzcPsp6qQX1T6NiCxFwVWDrha1abJPbWSkQbtM",
  "key16": "3eH1L8KUuvZ4FK4zsjrgiQQ44PCUZTJqNeV393PEqGXbbVvJYw1Z1MJCbjUDExXRT4QbT1Ftautx2f8jETyD6T1C",
  "key17": "5uf5CHTYhqfSSQmmcFsG5eqem4TCgaiGN5yffYQ1u6j6beZ95Dt6xe2r2RSaFzgM87eD317kd4ZLSNVXaf4sdR3r",
  "key18": "3kyWuFV9N7WcbxQLX9DLEPdadRMUCnBJSgWNgAxcgvQGZBjt3Dtx3RMreNCozhbHj4cmPnfYiWtovk6NJ6groM3t",
  "key19": "41K4bWRGwkzobfHuQhhrrv5y3qzdzgpEZXx9nKmcxPuKAm3awxCErD1yBCMpbH8UbqmikrQfsyjWU34SstLHkrVe",
  "key20": "4JxMeGXk4NS7JVqyUuLLifC5ghCiEcd47RL7dw4BX5kZZDbFLMZwcYiJMMHG6cqiwc8GLMvxiDnZRkzn48NNugxH",
  "key21": "35tAzntWgXNn8psVem6mGDciitVnC99UPv1m7FMKT3QbnUQupEfidVAVKJnnz8REjB167PMPdT8C7Mnr8LQCG7cn",
  "key22": "4Fc7ij1mNuyXhZLqksZE5iZuCQ36ZrjxHBYexEEuxi9E4KokjL4drMvcYz1LUqqwU8ektKaRAAwiyZtaZDniPcFJ",
  "key23": "3UVxbGqLc4kr1UDn9gWCBZYiTaXSUbJPBanHXs3LPMp6dBefFmqyJ2wiAqfNrkngjjYoCJEUss3rtknpUe8WGh5M",
  "key24": "yLmFRCnwwRG5aR5GfFBNkqUtaCYCusw2srG2E3FP5SKuvDHTytPpxaFjcrjMCyvwerDBkHqBnD4ryUGdbgHf48J",
  "key25": "UX6xLGsW5Lbnakydcm24Bo3UPLterMYq6Ju1GWwXjcF7X2vZE1gmT8r3bkqMzDwwLZ41Y9sGNQMmtfQXjT2GB2f",
  "key26": "2ZFLszYXonZCWrfu2iyrdKadWkVCzw6rwLKE8Det2S4u9EU7eLtfUqfJZv6LzRAg6gZaoX61pa3wXTM3iQefn8jB",
  "key27": "4yBKfyutwc3j34smPoQDsJMGyEiBB2FD7FAdqYysnNgrScuxtA6jvBNF2QzqiQdWQHAYpp54Rv4bRUJfTfYB2zJ3"
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
