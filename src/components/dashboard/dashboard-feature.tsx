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
    "GrtZA5zLjGQuzbTnADrVRSQBCi5quC3k1RJiayaMw2WT7wLW66o6N4SCe5mNiUWbBqDAc6YoUoMP4UycmxDuJ9b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YY8vnu759yKfGraeF8SQp39AQyQcfTiQcoeSue5YDMMeunHwnLWgEDsfsAnGegdDa3rbbchp3p2KW49qFSfP4k4",
  "key1": "5cwEtt8QTN7W3XSrEeJnaFVFxHnjdi9iVZBPBENcvWEp8X8DGQfjDc2Lii3rXv1QngwzSU8PqZUrcDxq8XFXzqCQ",
  "key2": "2zgxnYfSuaaVZHx2y9xf33BACZrAvy8mq9DYKYjA68o9p5CoU1E93fVYbLt4yJHWZK2e4yuSAtMJ3hq9GvNwWynX",
  "key3": "2Jn2HCeiC8WiWRroJ2pETj8zzMxwvNU3DTtT7CPZyeNZXSdsE4FDMxSmBkKviXGtrAnRjzprWh9vt9v5AG8kZLow",
  "key4": "3ehN5T7gfn3LX8AYryZkhV7v4dydcZ2VkFtMqUtDvXsAfVU89BREFzEZMvSLCqntkUzXv8KRJiRUJwNsBQBNEodN",
  "key5": "ZN21ikAwhnx7MhmcgoDCngj5UWfDiLsy8oVSHwXgeiqXQBpAbz9FXRYy1iJ4KC8rYeAxc5CKgsy4cL2Kp2AoRxa",
  "key6": "5s6Dyt8q11ASHsVCwXvfDR2Aqwuh4io1HkpucnhoDqEhKTs6kfmhJ3vK2uiUopi2iN21zSnn8HakrnGH15K5q6qD",
  "key7": "54PYwy6aXxLf1uLN4PxC2BLCFboXxR8kBuqsXGQTFsHRhZCXxg8xF9q6HnTamyq29ug8bWPBQHKLRvW5ZEqHZdgS",
  "key8": "26w7ne3eaNGhXiZgNhUE2y8EvKQxDjfnYg4qwuKYvtBWuGQVkBzZQqL5LM3gPt9r35hNXnj1UVEAWQFpmEsmEM51",
  "key9": "5qNrqdRwWEqdvHism14uHDYWZJBWPorqRNPvPzsnEdAdKL6d6C4oJXbormbyVS4Z1ZfxNPYdEnwbS5vfqkpsQS5v",
  "key10": "2HDubPRXE1StuqCciCc25JwHZjMA7Tifisnkncch5kL7EV43gy5F2RW5DWbd7qFxMGqVZ1jvuvqPQsVhHGANv2n",
  "key11": "6Hmt9zAZApt4DWkXpwsYqckYuY9iMdnQ6d8PMpPahvEpFEr3j2qXQUM5WvkMd7xf2AaZNj2taJuFfV56wME9QRm",
  "key12": "1J7CjLQSP2geYcijMzybpwaNhyJ9F8m12PH8Xqbw5b4zpUNSpeN6BdnK7PoiCJWfEUMbtwRSYQhe1o3PBNp2wFJ",
  "key13": "3sx27584L7Xxx6AmXADzYqN3UQB1XoAdUGFybYjwCzxpVwwvi94LtP7JpS65jhRpVESGTycaw4EhkpejXQGb8Bwi",
  "key14": "2FVWUZhTrZAA6BVKd1ZWxnpc5k55HTgcuB54D4hAMouJzWq2rrVdyy7yaRpRGXfwVwVctHVbiw9HLuYy3HyvbXjj",
  "key15": "5SnQ7SYd3ASpf6RQqKp54nyjqUYyxgTihRYLe5a7yEpiSSshAVQmdWpnfu1rC9v8M37EspHiSEFmTSfGkoS4ZMHQ",
  "key16": "E9hzv72sdZKMFedxqLf2jLUJcKVmKZ12R7gvz2S3aFjerzbxvySk4ddysTkFzsQ9vC6Hb2amQz1LS77naxdLA2J",
  "key17": "3ff1CVRz2VmMXQcAesW7Hg1A7nwytPBVx2wj7ut7bUC8BM3sU9NNdGT7v1oWqbZgoiVMUVhaohMawAJrYmZogufC",
  "key18": "4anTmKTvt1PGFn9paXWUY475PsJwvA7X4VFogJaMJdJmRANowAUNivgTEkMGGQvDA4asFReHJNpnNDToCAsiAuUr",
  "key19": "Be2Hku5zoJ8qmZbAWqreG8nmuhvz83BqbEjnpu1cHAk5zdiBZ4o39m2i19LJYtfMdm3Dh9wcyviDrnDyoU9nB71",
  "key20": "5LR7jd4sCmPTSENixBzHr2Zo1Mga7qmKtCBx1UqcxceDLDGf16YeAJeQLuXiHbfL7xpTzC5zgUDefr6ii39i3smp",
  "key21": "ohZJZqqNvMX6pH5KkNUytkRXnN6kJb3oHwtHaX5AvbdEUU4yqFRTp2AewFzYtwh5ssT7RCHR9nxxCGSCWr6QsuY",
  "key22": "3N5VjJ8z6rntuAhCKE8sbXnd24zfPaZMhZSH4J3rsiW6kV5PsXLY17FRMUibUQywoxcrMFa65KKexzaZz5wzzDEw",
  "key23": "9XPRsPf5mbiJQWx9pwWqH5a9qS6vzEH8SyEq9cZv4AGyMYQG5gBPVi7bn8UkphRisr6ZxnCzP3uxkDrp1i34yJR",
  "key24": "2TQ6m85z466LyzcFMdkaDYxWfGd9cZCF1nBPch9N4FAhQmpdQfCge7EtUgCDYcTishr1RCs7x7ADH1LrzS1YZexy",
  "key25": "ELBUsGd7UqpCqC6iNaB3CwZ7YU8cuk9C5ckwZU8ehS3NCpUAZwK6GbXXedMwMDiG6ppKmKWfXC4YDa4qGtNAXhX",
  "key26": "Zqp4ibEVLiBwGwk7pfGnWFLNu443mPPjs2uJ3i7wMBJqX6iufSom9NfmqaKkA2bguAh7NWcpTR2W8U4o2Q2JJrj",
  "key27": "CehqsZw2yzRenCmk4DYAvYQHJYjezVcTTfd6EV6yYpTacJDGbTUhzSs3bdkXYGuFEz6RZzP7pEUpZ3yDgbm4nLL"
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
