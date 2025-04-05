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
    "2HFe5tg4PUzQTG5v4Du9fty6tsZ3r6NuSzWuLHy3jTJ5igAKjyTPmcwn1FNuzAggjDumFJ69EbJ5HicM2Ckow4LV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62NpME88L25kQSUju3PsTqkvMAJhFdjH5NM8SjjqX1s3fMqqCRQVrZ8Xjxrm2z7y2K69erpXizvvChoGqLFZsFoa",
  "key1": "hzDtWmswjqeS3ivpgcgVNtgZucEhFbiC4kUH4erURdPvf2M9jVPwVwcV2H6YL2mEYU9DqSQ9he2btEFxgadT1ZD",
  "key2": "5UVnwBiwh5W4GRvti8d5thEwGAhomSHaRn9jg3aJvS2NzgEbwVjdmjuKJMy5vs9JSfKZJo9tLpmfYgYWuyaYic6m",
  "key3": "66JNj8oCySuxPnExM95CMg2guBJMWzi41L7JGJeUqJ1zAaPLAfVw84bWG6KatXtVz1ALP4d2yCdr2HtnGHwLD6Ze",
  "key4": "3NoyJHGkz3YuDc4GyjujopshhkzbPi3egTd57PXrdd8Bjgs931NCaebYDLxzGvqLuK9Gg3RAjH4nRHtFvEUVnBxh",
  "key5": "4cEo6apE7eQ7Y5DusPX229B3SAdqQT5Cbp3pQuSXtRo52pUVZYDfDY91q18Ykw4xahZJk3Uh9mYBq63RJHWgWTMt",
  "key6": "4GghGtAUJ6TrwZeHoxMuX6XqWXbXGLW6mwpsgu4PLBt5EiJ9VuPihEVip8ezD1TyYRMcQyi2YjbNTGryd6fKgroU",
  "key7": "4cn1FxYRPdkqsqxd4Y53raVTsVBnovNeNMRRyu8jHywCNRfcdTpVch1hBoB8MbrwEnupBN7JXWiLG9rRn5pEbXkU",
  "key8": "5q1RTL3ZrcT2TMAhD6eqt915izL4y5ecXXT62AgQFHhzNNE2LLEnd5bDgFciBEwwRhHwYNaKozJCqE2rgp25JVka",
  "key9": "51mvkSPUJH1fE5KToo1PSmm8uuLyoMcgLhSpYEre5cFn9NJy24GZRk3Hz9aiJdjuUsYZyhX27XwGBUzCKP1QrjFG",
  "key10": "FfahEKMmP8VWDWoark464vQscCTrzHUm5atfwYHem1j84MbccjZZmm62NVqFZozyG7fw2zSuHNh1U7L1TYsXyRK",
  "key11": "47BXBtkY2iBW2wBv1wAdxEB72jtNbQL2UciJFU9v4Eux8pi9BpCLDPfcRCPUSoH9s76h4mEcxVVyiAiTi1wqH1aV",
  "key12": "2kGg9kRJEaaoBwxoZrmnCuKq8LTUebMem3C9PcmHCe6P3Fh5BgzH4JqtRDQoffrSQUuHuA4ipMKPxHzgmsNYBuz",
  "key13": "3vbYSAbB5hi1HavHN5csdJjRx55XG3kQmrWzSeuaKUzz4C4gt7e49aNCUzFbiuXtCT4B9ZAmFkHm9xbjcgVg6aXn",
  "key14": "3BofVHDgZPG1rXx5V8aoqvkGGp9Nh8BfwhgPeGLEePHfEwVPAffUPqCgs8Uk6ayroE48KiVs99XpcwUA8rfbruhz",
  "key15": "5tGDwr74RnSv9DYU3vGrMQjRrjq7bc1VCHMjyGaKt3EQrmJ5JDnNQpWD5qRVkJ98oS6VpA1bQ6weg7TmR9tCsfZQ",
  "key16": "4qpoBzevVZeEJ3XYqm7ZTESw1QuuCGJaEkRX8pUoiDUWo4hf3Ao19GqVqLSqFARJsfGenF9qhW5nqueCBWmXsivX",
  "key17": "3ZCLW7yKZDrtSvxUVBzEA4Yq4SdNxxVweCREQb1HmUpQaHom6tDQ6R9YbQBkRB7uB3z5FQAiA3H65R4RumCT6F9D",
  "key18": "54QTPJo9XjC7HYac4qaoeZeA4a2qZuxJUxwCvC7gMrJaWzkB6e97286HZBGPHABTvxgdwAZ6YXFD5wFxbvFMWnAh",
  "key19": "xWKSAkQPuEzY6frhXCy9wdCaX3UPH8sY5KmcParqkFu1Z6mAXMHopREYryJq3uRKG11Zb7Ui7BKoVLVFDY5h2CD",
  "key20": "2SBZW9YstttG9gYjdypk2ZrmFjrisYbRsj2zxvVbcBbsD8XJsJ27HaCqm2WJai9PY3CW5p6qFrGJE2xqQHnk44V6",
  "key21": "5jF7abSNAkFsaFoVRPtWXqTYizacwhFidvo2kfPbtWs8XNSzjxKpKpfRyv8dUw18aKvuZ28rHqZMUuQSZnsmUHXE",
  "key22": "48m9ArKTZv7fbn2LK6twgADp5trAx2ak2yA94rPuyNGMNd8rhcBVc8uAQN7CnUdtd1xe93FcTZP9hCmfKBQgPzi9",
  "key23": "4MXTN95BqwWnQyuZqdqkdpsBstHNLpeZmvVKt7iPfFkQJGwJMkV6a66FoQ2Awx5gSW99tYjUdKpEDuMPdc46taQq",
  "key24": "5wEP4rqASb7oW2J5mkpfdt2bd756RXBQBRVUnFtGSRPpCrx94tDLkrvgemytD1pGwe1PJPD9wVDBfCtBopm9CPVp",
  "key25": "249R96Ui5CMigtwbbVUKqH8Xv7zwUFaafk2xa2s2VSy2dT434TkEfL4ienybZQan9HTAyn68vgB7rBU4rJyn8sVF",
  "key26": "4TXwtRh7sARRKCBrd3G4JgBZsgo5fCRJ5YPCeEjNDxPPiwytyvGDAatNBRXrjxc35g1Kp9SJ911vhe5MA5ULAP9d",
  "key27": "3maGvWDnW8ffgrDSSynz5AceqViFamcF7k8rbwztyxmaiVMcFzzW9etuvQqfGLLZo6N4tKAYxMAGU6fiNgYgYZ71",
  "key28": "C1ou9v2pvPHLJvUfCtTqpbSJu29xumdvfGeuHxGjywoxRwMZ3i2aFfJEB58fAsAL2CinLP5WyYYf13hFyw3p59n",
  "key29": "5QbbL5RCmx8JzCKgeeDQfyYYu8QaLhWvHy9PED7bWhL5NHtoHfjWsDndkkMQdq8YgYDgZ3jdU5TR9pYEmXmNYsn8"
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
