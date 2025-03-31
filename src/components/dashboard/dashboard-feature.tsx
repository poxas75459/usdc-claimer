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
    "3V5sqEbxwFDXqk8CrxzH7JC6bLENCEw2tq2N2NkVxWrbt4kwcNRqqn5XxhmGUWFKB1G3xEFxKWUcLZGtgU7QpqX8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FRrmhc71dcd3wFh9m1FhnAjv2WuuRcA2MvbQxSdB5nDvBDdGPCojZ3nq48jqoRzWV7GVoibqpXy7XzX8Nf6CbnK",
  "key1": "317DjqFTMv9vM9vzhzhayhcYLN4834TnNWcRUdnas7BiHGB7gpD7GzddGaxf4NCgwK3SsiiHLdsDoGedQXmLQx9S",
  "key2": "5TW9zXyuTYvbJYuXiF5ASqANJMtS9qd1VgWntQuF7t8n2Zc8obFUBufPg5YNcPBKKkzrfJUHC1S2fJhqjei4NUp8",
  "key3": "25wtBnXLJJ9AABJHBmTdobz9hWLdeW5WkwbECQ3A5ExN9JnEvSKvT5hw4XYiJHq3Ue6Ba2n8VFb33Kv9XrhRDwn3",
  "key4": "3vrUVhi7Tje8aXfa1nb2hkUBByDoPvVZNKa53qLQeLnRSUchdV9KBHuAzTLsVBJSuBT8kNQakaLdsRDWg8oPppR4",
  "key5": "3JWaAM74yErHTw3BCw6ZsRNMk3A82Gdx4wEQTgPBSbGC3TootuCuk2HqNLpur1cHBS7eRCMFXTPzU8TsZTdxZMjc",
  "key6": "3FmH2JGD6bYkbocTwjXbFvbHMjJzTqktTKkVQbqRUUFmveazBCrAwWtYDCSSYvJfHnDRc2vgYfpVaLFYJqXzqpFd",
  "key7": "42YQMg1roqjiR3tuqvQD5GL1VtuWhKHSUBKVwzVugEnqN21Jqdhv9ZZBLZHC5wnsn4H8DhQLp5cJo3VZaubh73zv",
  "key8": "5eG9pDJ256HQsRCUK2vSKyb4aZTTbGC8eW7RWZ171bTiAXnyGPfbTj9vWfvKzu1GKWsXEqMPqdK6zxeE5nReLbna",
  "key9": "3F9VZBYPSjYbwXu7bfbwDVBn58R1qRT6ghnDNMWAz9c6Bqvms5urKKbqrrxmpcX7RizgV2mBcAncjfwbBcc46nRG",
  "key10": "2f6vP9DfZs7DhDjVZ6rsktRadHiBuxpRZPznkwAP27WsZwLcofDHkuEbkjMpkLd8k3HLc7yCEFWRt4r5PZUPhLiW",
  "key11": "3MfHCcAFS8pd8NM1VjHNg6pTvvMBkhrf9UYdacDfoWeMaB1PRd5SaBnLKPp6WpLrrGnZSYLGhm4JbYv1vpwDi8J7",
  "key12": "35UAq4U8BAmXX51iHAWqH8xHS6Nd35iHfYNpsQHUTHmq2zRsS5LDkvD7bocanUXTHUJ1tzUJXu2dakDR7NMA9YVb",
  "key13": "4Au233wdvpWhSB5fTE45PigbpPsQz8YXHQtJBXGRduwARuSghd6HjHUMbCDYzRt19XnCwprzx6pd8cc4Ny4SsBnS",
  "key14": "4hW4VaLFTvXLARrMdkgrV3croryHbiff29WqqWhcYsJSukMwAJ4FCN1UGEc7MLWZ3jXn4rSHXnHQm3SiTqMBp5YE",
  "key15": "3pVkssje93v3SkDoGnfkQWnYJ8ig4houLNX9TFg8n4TZsVnXJzj4DpQDTNweNLcwotVqGXj8fP6ZMdKSBT1KAkCi",
  "key16": "3pkNVFWEVfVv7zzaGZwsc1dGZy6rN6GJXAKs7sipB62mrmTD3PQFpPkP3K7EAwKkbnV42ewqZTmAHmaYJXScCxEU",
  "key17": "3SsMQ4QX4pTcg1BS5Xyy3AntZUWYUvt1YZzzk9Mdi42jTs8fCpaLpLyX6XX9UtRmqk7HJpJ2Q5FeRXeebUYCWsCN",
  "key18": "o8vWxDe6VP3n5Mfsx8So7MezuFbxixGYCChyYNjDPMyY9vbUZg3LUTAcV8RrQLXTtA2F4Eke9RPTjCN838kVZnC",
  "key19": "65U9cpyFWqaYhWRgEGjV6rp9Uo7jVkjRER74Wr1ZZgwqkNRFV4ub5VaRqfiCfQrbHGKXoCUNQx2L1szEnv5PBfBv",
  "key20": "3mPBcmzcuSc3Cf2PbKhZK7JDx8niknyCAZw4LJAQuDaW38HG4dm3kC67qceVc2AScnEPiw8xMmBFXkrezGYBnSAg",
  "key21": "3zgq6qngv8qQ4GYY8aiEdSXTQZdiZm4zAExFkM6rUSw9oBj23UwzTuz2Db7Sx95DY6LKaYmMgzsmETF7wh9mQC2j",
  "key22": "WWRDGEpgm7Yg3ixy1fSvafS3EAEyzrMfCcMAHwekZDcR8SgUeSLRimRhCczDWaNSDnGgcxeRyURrGHpRww1RZrx",
  "key23": "2cs8VijDb7XZNw23og4VQQndm48vmJGYEbVQToCnnpFCoYosC1HQubc6U644bZHjBCSKEL5zRx7d4XD81FBxf4e7",
  "key24": "BanM7EtK56cYFAiTWGMdKVDBbCqMsH9dEJu1bsBEcyV8aQMbGEJb6ckKLZZhh2ZxtWysJnnp49XgBLiNgGj66um"
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
