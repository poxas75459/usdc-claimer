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
    "NcoUrQJUDWcCcfroz1vkYpBV2kGsVQPpkc8m47YbEPM63BkwyaJXLPWJ7NUSzo5BaaTmuqphmihLxGoWDv95uZK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MfN1sfgwp7tRNRwNpWsaUuk1vWRo3HRkMoAMSSiauboNvTsCfbDHh15NHut9eBphJcaMQQHDFG9iv9tQo3i1Eqr",
  "key1": "26SASNX5heNus4z1qcZQss188SJFXqYsVAa1wkxkaE8twdQxiD8qnBWYzYPiFccvU2kRBrVCXzBWs8Dso5JwzdAu",
  "key2": "5JSiGVDMof6xB1HNLSuJJpdNxNM3n7UmNwmfNEkWNEeVqtY4vfeKc1LJVfC1cKw1zxnDJUfaeLBfm3CYy2PNMvao",
  "key3": "59JWKmwSoeiFcFLXz8zZ98EruiB54n7m62MTij1AcZt9aimUfxHtJe8CxhWrHC4LZeCAv98PzvmCZwyzppNiJ2Qy",
  "key4": "52DMdtScNTMzw4DiPf2BJMhCoFv7xeA21ifdxZJmCSY5Y8v7YVG4u5LmQUn7ekYTe7evQGohY7bhsvpKr2WpRTdH",
  "key5": "5quStzVNEUtZ9HnVoBNxCZxeJNmpJ9UTxXkJiAtuUcvxuKr8xSyk3trsHSHNL6pshNByz8zH1Wq5vPKdaKguFZQt",
  "key6": "EVX3o5L7gmmJ6gb5Di9Yxzb5o7DJt2S9RraVrnMVTgSFpcWbRDD6ZG9K5HKyFEppbL38wx96V3QXhGPdaz4bB1U",
  "key7": "4TfTPammVcnwUTze8iE3PFzxSB1KDYngewVDMy2Poi4h8ZDmueXjzZg9JbW5qLhN6XThAy1LNqZxfyteLq77tZxd",
  "key8": "3o6Aq8NmCq96YvYsJbtbzg7VUXhKUWhtHkh1eZXhnECnXnSvy3hXC1wFVsFi3YQuVcZYJvCtzGiBqgCWo3utWDp5",
  "key9": "2ZsTu8dww8pw5DhASfUFM641wYuVi9edMd7FXybSD5i6NeBWk8dF9SHndw9awqaEPYXgWNEtfoSZbNRywhTFX536",
  "key10": "4AcxYNekg3VfaDHJYQvxTqBVTkoZ2wrkxHZUV9DjuhqDv1eCipZzwosvZFwGrrWyVbhyd4zmqjtW4soiqDUAx53Y",
  "key11": "2cSi9KFqnU8yqc5QEBjot4MU7UtzPAwyHMGd3rqZaYEUi8aCYU3o8WxuvjjZat14aMHJ13ffT5VrbAte8d8aGW55",
  "key12": "4cXfqyK6JXNRmL9FDBiWN9Rb96VcNagmsKvpKhqg9nvmYYLn3QBmiRj2swY9gQYbXj1G2tchrts6DHQdtYP1LSLp",
  "key13": "35FAsmHZGo5FkQhYM2igWCxVr7Yqs7Us8e85uWzyhSu3y3HN6GhvhRnTGJu5Jz3ucF3LEaMV3vkMdcmwpiQBxX79",
  "key14": "3W8bzyGPUyMMiz4qmCUdDeuXyyHVeAAqsyjogwGKLf9Qu8byLwgDbVKjCF3cCQB7pTe3UCZLkTtBCuHzDZYBb74q",
  "key15": "4MUioFCdcUvmozZUoq8CmbkMF4Eig1htsP3dSLv7Lu6ttpbAanFk7aHngPUUvsz3caVWJZ3G4TVHHgZwboXUZps2",
  "key16": "5GT11g33pMgMU6aomnMUKFTSr7jCxeF7wjMMSuQhWgiacFj4JKkDaNGdA6rFSCLSLP53gQvX4MLAycrLEyWUdKAd",
  "key17": "3AqnEqUqEN11QPyJtjbj2MuNFPt965gSG5skXCGFKrx1BqYeqJFSaBHm29622ZsDzucVV8akCyubeiAsg4Lm6Jn8",
  "key18": "3RFC2tgnmR6UyWc3dLASEBke7qzf2Cfao3ZJTAUnTVD37vwKk9KKd68sTzXmzL45PVquUheBufdFbJMr6xs3bi97",
  "key19": "3SxVYu85S6bW8nVyX5sYqbs1ZWmPCqeL5K5DRm8ZPTJHqcouG95YKt2W4FQkwhaWLRABLXMVzmNgefyfBnUSz7Uj",
  "key20": "2WYqLshT9B4sbmPHgMX5G6Rk7QbrxTkL3mLeUGBaaRswzNU8D3F9oHrvishAJuC2xBDUik3fA6SQjaNEvWBHKxZR",
  "key21": "pMdvgSS6FeUX3Ei5LDaAxTzbmjep4HtoiBemNcw3H5dY2NjdPD3mqmFZJ5dWoqrb5BLqqiWH54ZmgGSs91RhFwL",
  "key22": "4QKmLjeAYs9pNCScJCsAjvuWk8ii4xixyJYNJvVQiiQAVjAc5onuVRh2ZUJpryG8HZhEukUaDo3LCZ31ydPjGCit",
  "key23": "3RveYBcwoY4mi5DR1RWgdZh71AyahUXLPgH53dr5wutYTaaBXik3u7HJHVJ2xVqF8ZJcqhaFnunMs71ptduU2h4a",
  "key24": "5Tf262XiTMnch8rY5C47rEBuZrq5xRZJjykLTUjnsRegy3dfnxmB8pSWoYoQ45QfE1pmufm4nCMkb2gsscJSgYa2"
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
