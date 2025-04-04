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
    "2nUWBREbVoSpJXRskKHRxDPVn8gmdHtxE7dQTmNq6g75PUf3sEGi2oTnHesZRZA3AhiAuknVowJaaGfTRNX5K24u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ag3v3pmPxUBVa1rEsm17rBmugY1k1zwsvnxZwAJNfyS3Enbjgkvhakjhgp8U7qyZXcXssSpEvsWmjpQBzXugGBN",
  "key1": "3wHUywPE2Fo6gcfhFioDvbNqXNXo6Do9RhizhpkivBqUBoWfJhbpMMasqMNRKmVNEyrhtVQMWPuhb4JkS1XKBm5V",
  "key2": "3PY5m3GD8wzv7FLMiEV2PevuzBwEbbP5ZMTYTvGnFHHD11SVhAmSQ7L7UxTnYXjrcf5LXRscj9dbRSGHfcZv5XRM",
  "key3": "4fSsr7N8v61UQKBEm8ko8TBgxSMj4X7zHkSZy4RSyhB7KRmN4xuheXrrk2ZHT4VMMnbH3xxrdNEDNyHy9PZRZsbH",
  "key4": "RUGu9ikc4EBCBbwUq3cfNy1Af3SUKbB6FiCmmUGF4fpwqHLoH9i9ErDyxVcNCTQs7NqP274yXZaXfrVSjwQKeaM",
  "key5": "3EjCdF9gQn5fnDodp48qn9xRkVSWkHKbvfFuox3HYpcVz74uaJEoFAhMKUPr7Txtwjj5GsBwcCQtHEkikENgCJrg",
  "key6": "43pQZtoV1XSMgyNbpipDTt6F4sihB15GY2szzmvTmRyr4BhVFjmP4F6SiAiibJCvVsEUWrYgj3SfHHCL56JfYWiX",
  "key7": "3xTEf8NTFAn1qJGntJKD5hDysb2Rr4eHQAw5dMygtcDT5PKV9ox18hE3LV6GYSdKphDMtxJj3b7aetM1TorEpMNF",
  "key8": "2NzdZYsK8npWRZLNke6FCyNSs7XfN27z2ChHHEBzdmhAXyB6dz5kEfGJH9ct5GvCqTbei2pT7awW8kYzj9xrJQVe",
  "key9": "5frwTdBGvzjDc36dbAJBsE4VWRnx3mUypGwRuh87isGMSDucEXLGv5M5JNFkAB6ogskPQtwJ73WfHzGBJixkDNsU",
  "key10": "3Tewi5k2ZZFyd6q9EZdp6hW9Psjme37oaDqcsV5u8fcsqbGXeqMEnZE9ioJoyFCVYCKkh1LFXhxSr39WkJ3ZG9Cw",
  "key11": "598bbk96eB3vkogWja65SS2vr1MsLg9imVVe3WppPjn5ybMy3m1gwtNzAM5f1QJY4RvhUoKeizrTYMWunxMhMb3p",
  "key12": "jRhJDYGrUebrmtzTmmppsGMeeiQXtytGUoR6PPCfspXbeCGrqm5afbUKYAbjmouNFWShoNhtP7F8rXkzg2UtyU7",
  "key13": "5kVbwwd1VKdUk4QvuPg8TtGE5z9pqZzK5xnqBwSqUS9P4bBLb6upnrLtdd3tfkUDxNq8BfszHsrS7spCiozzjjw6",
  "key14": "4rfWGHpZh5vwvghNNVesG5chNSJjA6Yy6MyC98BkN1csDADyapS3gYnw5cMQVNefEBLKt2ipszp41b9AfGv2676C",
  "key15": "2ZDEm5ZsZbWJZkaNVfuney54x3Cw6hZTs85oW7bV25r28yBA86j2LNPVZ7ByQx1b72qVVgrpJ2ezKrWH6SBESosy",
  "key16": "4aB8ymSJsqB6CjKniYfQarhZzTj3PbSvX2J56NZWdQsmQWwey5azA6xSWbdyc1p758W1fhwypJxDhpLEmurjwGWB",
  "key17": "59NbCjC32vkSh2RhEmmZvYE5KskZqfYAxJT5CvUjJUCJ2p6mzszj32sNbEQvJC4DSNGDii5ThHmAXZogbs5pxMt6",
  "key18": "dMF64wmegxQ2QMzVUS349X17TZH6rwExB199AxP78KBU7CJF1b79NUsW7pGcbmNnsZuBYZM7ULrpnHkqBvxWb6s",
  "key19": "xA1he8GfU7NgPaeLQ7SGH1ugin4T2uZN5RtGGbqNWLmp59qnWTczNMeKFsHsXiDHSCLncFmvQd5ZstX6i8wJqWi",
  "key20": "5s9unkqbjyB6ADxiCaAZHuPkVfgEEqHtcxggEzqHQgTQhtTa28ohQ8F5zkCyzjC9Bw8YeSWp83xA1zpBSD3gGyRH",
  "key21": "5GjLF9nmtodyJZNDBVGgyPmPN5oHUd1wzVz59jt9t25H7QMFEiFpyxgEvMvVeHBcHWJ3hqEKGoSrejmuiJ2HMuta",
  "key22": "CF864hLFmRtsTiAbnidKm6Hnwmok1o8DwbVGSs2KxTwRuC2WhVfJnp6ZxSRUznnLfpjCCUK57bnFaeRDYaiZ8R3",
  "key23": "5UBkg9m7tNPG5Lum1uEB9bSiF7sjuJyBZ3ho4qVShT8edVNxZUg9JM9Q9m72hPrRQBYEY2jE8cCMe8pNfHCukv5b",
  "key24": "3B25prKDMFiGQeujjtiY1hxKvYuNDBufFYPJCyCvBVGR4UedprHHo5uZJb2N7LoqBtMzTPAfbWGiSd65G5Lt4uri",
  "key25": "4r2qroow8vQfzwBS9ywRHszvs62acRjYvPKnPBs4uo2GuoUMH6Bim193Z3QSxdb9GEyusDQaPqigoJT86rgiERCi"
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
