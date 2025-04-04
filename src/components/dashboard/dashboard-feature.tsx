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
    "4wzABL96M4rz5cSLFqZieer611uDPEfPjQTq2B5pm8EE45TE9M3hHkbMX85TYzKZzdtFcw4hy5HS1hxGGyqWgkBz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ejCb8gcL4wxHhmy1ciExePxJegfv9qCEewrutHUuWDSuN52E1Czc1xEYRj2QrVcU5hw7Zr8jgd4jeicmT6BqF4R",
  "key1": "3f5mVdsGY4Fx16FYAAWQHgeTdaLrgZo2oWnkCVkA62Tu9H2okd8KyinCmBDVAaoHu1v3T82ZFJNgKa1W8gKfDdBs",
  "key2": "856z46rAXtDGw4KdorvMiKemPLPWMxhWtcyjD7hnBoZ3YZHMGN6R6vF5znjJStQWG1A35qjbbWszWw2PzdsutKz",
  "key3": "3vw2LKKrufyjYHE1TgbvHRgH94dAGo9TXs8dLPNUb3hyR9HCbVuEjFhmBwG14dD4qiZNBcGDdj4jVc5cY7xVjB6f",
  "key4": "XmdaFyS3K2oUpZSVkydetG3mq66LVdSTE6GU4T6fxZgJk1KHZyastUrmDNboqHZPC6q4sfcncCEXRMNH9QwkjCS",
  "key5": "C3HXn8o2xnqoAWCaKYyspuN1PdDzGCTcqvFUShX394cEQniTmCn1JjxGUPYwnb6JRSu8ytnhBa3oa4oSNNUsvzf",
  "key6": "3vWHqFJmqwA1wp5Fk1VzYosMy81zkjgohDvKsTwsgAAE14N2AsJbD1rc5a6HZGHgEjUSPrSL4rJx9HkvEfY43PQX",
  "key7": "41GMo3CKSZ4K92bpFKGX74FKVDR4zMHqSUh4o3579AKtjdjJNugtLbQsYQDT26JaA119CgA9zkAaJcPnqNeLK7s4",
  "key8": "NePLY2zYE4uqAqbkAQN51UFmjqFD9V6VsXPv1eBchHVYtAiKu1qjbJfM2ka9jttua6Lpp2NFnNbBeBpd1jPvzxJ",
  "key9": "22yZCoM9uC8qtJW4ShRRUikAF92TnLETZpobLS5HfAonwxbDCYGGcHjWWHeT3FwWPLPkpcxWrXr8U7J3eiK5yeVJ",
  "key10": "51toPnqhBCoQAEvS7drxoLJ6ZoNxSZe43HcHAXxTqxLHxWLHZY1A3Y1GEvG2gvV87vwf8EdGi8eL8kEVtexG8DaA",
  "key11": "2o99X7R3AFSNcE8RuDQ1V4QpkPjGrRZ8YpRYJTxuc9DZDXpnAxjLooYzMSDmD1SNgtD6CbDBvWhyNyq7Y2Bgd1Vb",
  "key12": "4jcaFL6ZkSbTVVQoTXuvBCTgeH6fEE5GAQFQCzxE6mDxedzVrhuG5wasUwczH4UxzUduYgej7tMs4GKR6e6D1Myh",
  "key13": "2XmjHVfg6WG5GeQ5vscsSRNfJ29gikc5N6gXUPNME9cX3TPek4BJe5gGgqb4ehbbFE7kxYEr1aqdD8zxJues2cun",
  "key14": "428saBDgZvBG41EhrPBNgFHm4wpkAt95LCikPHtAQBb2bbrFkhmKn3SWP2Lum1CeT95kMVkEFtMEwS4csb2Z6C4d",
  "key15": "4wFrgS8uCqNoae5SDCRFZmpFPeBUQNbxNMzScdYfgpcCrxS2emQUxEXjqDuu5FXjmcJs7Drh4fCBaRp4J8EYPVD6",
  "key16": "3RLBgWBBRMWZQjte9dZQ8kDyAUjTmh4DRTQvZbHoyE4e5mtjQz5kavoBRMNiJYDy8Lnp9T13hMYkMdptBYcAExvz",
  "key17": "4wm2KTU1gLAYkSwsx7gzYLBkNVkw4D8pxvGcBpWAfU8XzcWccBM5UXV4GG52KAaA2M8FKUZNcB4jN3xKD2Nj1oMw",
  "key18": "65phEkoBRHSVfkQanCnmNujerkS6fvr7VrGYkXkQZVYemDeegCpQp1C9FUrhUBkLbYdSNnXBpuvoi6qEw5RTWUJA",
  "key19": "4sL65oCsHHDiaLGD63inKdCgNHEaknZAuU3XCyY37GWBKoyVBa3WdigKaeT2kAc2tfindhrq5o1oxqxw3qkHVFYQ",
  "key20": "26gst9uHbvPCg7Vyzi1nh2CtTpHDuxijb8MJZfVVsHpeu4yXwAowJbp9W6hDuniHp2wJy1ctm8Qwxuyo3qdkWm6Y",
  "key21": "5JJuHzc7D7nniMx2s4YAMinDrEp3FBjZCf9syDTQvsugjs3M7M3RnSkEm6vD1262MQowwo7FX5F8Qf7L5C9jWFmJ",
  "key22": "4cRXmVDVBALuNVLZv5i6ZDDfjKi8fe6NJ5DTzKS6vAAJR2LsyHEtSNS5wjfncSmRRxJaaJaF5qeE76ihfbexaoQe",
  "key23": "4GyjNwvLxvUg9AdmZrMHJzKQyTroWohLgfEujUDej8iEo6G1yviGPvxdKqusgcmyHVbLWb62voKW2z6Gbjc3FaY2",
  "key24": "8gKAyDjVkG7Zxn4wGoGLvLjnznT1KjRTnsS94Z6YuDDYjnrfG2JshVdrFRdpWi2Ju9wCpJGceoQRctMbLGexCZ2",
  "key25": "3utuQeouzm4i72hkT7DFBZBuP7NSF3VPPWYrYJ6vuWP2RXpwHR9Md5xrziwC4zacsyE6y8mnEjVLM1dqoxaav3WC",
  "key26": "48233WzyyLXvvKhQJQT2yKw1rkhPxmZ8ZZTAoZiMYnz58KsTLKvRCtmKk3wdWRU8qtXFtaXKmiWSZf7iVgSYkGC6",
  "key27": "5oUKng93wwwSHRdQSQS2npKzMSV5sp87zXarRaoc9NSjeD9KMsEEwHXzr6LTysA1o9BpkQz3MiN8NeiwPHXjiZMR",
  "key28": "58p29k3Pkok3d29EA3KnUx79ZoLpVtiHFYCRSvCtQooYgGQKqKnrpBHM3gNXxft6UQ4YxTZXbTS5XdJUmShitntE",
  "key29": "4aK2FBj1yMS7iFbwHzt39tRg5koSQLtusu4stYpPfnfTkQEJB8wSHhu4ACryCoouHd7bgnbGkwnLapsVL6TrVjU4"
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
