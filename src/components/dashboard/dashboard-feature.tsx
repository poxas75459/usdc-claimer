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
    "4up2jZbhKs9zTBL59hGzPDt1tscrcttpjeUtTtxY8g8hGLRmXd9j8Wr2bWu67bDgKYVJ81W4TEWCBz69YtaZ9ces"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NKwwuuvQeXUtFckyjknNijHGaXyAu1MgLN66Qje3k95t5MzXVH8c3U9RbSWGWpcVHP5eeDRKTux19YmfyDBMhC8",
  "key1": "p2pLQdZ9aMcQPZHgvUDipq8Z6qpi8Ag6XJgMN8GSzvYeYsX3zEYh2ga7xc6z1qRhbwUwa8C3xfX2tHuqHvkCRjT",
  "key2": "JF2DDrT4bd2wriANaDzLBMiTzsB5Pevu2HokR9YcXMqFs6pxTFkufAxVDEFJejFNXPrKVzNGThwUKUkQPXCkzZh",
  "key3": "3Lacn2G184N7CfLwAkKNoCtVwm2z2MQQzhfZogMvTrFJdvcRzcttkuKMYGfqV2G4CPsNWS8DcQF8Amk8X5BoAq7T",
  "key4": "3aVnJ22aC5Dbi6TRyYPmMTYVobYLkTt6aZfABt3hCeMbzv9xXxP1yuTkB1W8yiDrAUED8Sduip6bjKiUZYq8oVp3",
  "key5": "4SFrs1zTgWD2hD8tyeUscacGzGZ7fUGZAMV4VDbpqf1XbpsoZBmkXDShr2B1SK5bXfTQWN1n23JVYZZk6T9QoU52",
  "key6": "25CefiYTjwMmPCnw2hZ7CxtJFgHnZmcqQKFYxxHPUJME7GRZwWFqfHQ18fyYrZyUw47bQdnHcuajQ94ykR2LAUTT",
  "key7": "5MUtkc38rB541nN1RFmFUot8zrBGbmHTgi2o71g94YfB9GVe9Us1pGfYNrQtHwm7jhPm8GPrt38zQjq1LMHvVzgk",
  "key8": "LyaDEqz3iVtRSzBPjAYPFgzF86y4yJV7mhXERoDe5YyKzBgwXEmt9jdxo5uuX7YbwrqUbb1b4FXXuEboVYn4M58",
  "key9": "467kn4mCTa94f8qQnWXp1jh8KSdX5UAF5M4xJGwNifyNEHYwfK7LqTQCPjw6VrPKazdpw3dHwX5zxuQeje2UDhpZ",
  "key10": "39zBfnPpzEMKMrp8evva57kneYWF1sVe84wJfgythECSf6BxDNLHPV2Bm3mHGpFChfLMWtHoz13Mii5XMzY6GatQ",
  "key11": "duSNWDyER1cZuujdwVzXBMJheePpt2zB6sZo9bE3T9w48SFJwbyPeBywMcUoJJzs2gBmM83vpsHSGbAwfZxuA4W",
  "key12": "3eBQh8shqTzzBib4Gre1Xe4FGJ1kK3tpRmz5MKAXj1GHvrAWNwjeYPxaVT2PCJnJmHfSDgnxWjwSgHcaBGhkktDW",
  "key13": "4gBvYpNBXH3FF7mtYBM8K1MKG7H7pXT9QswGECmFnMaDoWRmxrt35yZmkjKdhGbeGyDENN43nBFkJzgz2Zk6wEgB",
  "key14": "5CJ5LwGAhB7QuuVLUnYxCFDtL2M7DmVTQTb3gj2yXkAUcCmhnULaHQi1r66LJLxZx9cWsFKpBYQ3fGfobfFtBdfn",
  "key15": "2G4KfxPmRxev5CvnTXxSGvUBK8YCwJ9L2ZjR7W8owKwMiMLcL1hY96rGfXeD364cvXQEB827o9S6zBFemhzJfa2X",
  "key16": "2sDHWWjNrzHQJK6L2RUp348JfCx2c7PrJdz2HA9WGNePTPrdFbgYZK73Ni9YGbocaFH9ajCmcxE3Mc9xXrKvNqtj",
  "key17": "4FWwUgJFgeyp6MbR4PXqSXxKK6rXr2tKwKCR9DhutjGviVaCCDBmGKxaPM5gXCfZhcXsBpoEc1pmPsPo4wrEYmMZ",
  "key18": "2waL53tv9WKxwzrYvjCSZXhvLti6U1F8JUF9YBZYBfArqxCR6zug3YmppvWT1PsxVAE9PZn8vXuMoSiCy492Qyz3",
  "key19": "JWoUfbD6HRRPM58eZCxJ2rgUgUoiefFQZzpaeTPiUQ3cEMbai8i6JSLHAvLagc8bMqfAEvVrFveUTmBT5kjZ4Gm",
  "key20": "2VFvqH9FAyTYYCx6dpir7ktXoMuWZZX3uA4k6PWX78MvEV4LJMT5Usx8peF4poXqVAZHSQ7AKA82EUj4ArZKDjQX",
  "key21": "MBBKjo4eX8WmGBzfnm6DCMEQCE7JbmuRxL42QvjdR9GHThRWGKnNqDUfmtteHZrjYjQrbX1rc4hB7oV27s7T8bu",
  "key22": "44BBtDqXbxLVwhEGae9kBVLkvbBwryHCPra6J1XtEGLeLsCtpw91i5sX6L5EPUn1ZaQQ1FZJ96TTmeqSqoxHzQsg",
  "key23": "5iBnWjHXUCQqkFBztZBne6fjJWU8NDNrLgbBsvsKcw8oM5upDuqhWHfFGH3bam4FMDVdwoD5bNQthigGznhDPjk6",
  "key24": "2vpUNxV8Pby7iu1rSwmiSwJxgN2x8A5xo9mrZ6vhCrknsqMhkyKGe3js9JLut45d8iW9LAKUBGe61x6HcBzPda54",
  "key25": "3GydbgqisGosTS6nKv7BCqb5fqqfmb2vodUff4Xe2yxt4L2Aki3gmmdoo1CdXUsTMUzDD9yRA9EQqFL5DfNS1MAB",
  "key26": "2Wk6Fk9CX2MWLbaEvzWRQim7EaZZBk5FoXWkFg97uNDViSRBpq6rfh3pE84NM5zmqnvTZrjeGWWaPXDjdYv6WToB",
  "key27": "2TLMNStw1cMMhuCdYKx4tB4SiqtUgU7JYNZbGLWNRu7V12MUyNVWq5MQbtA7jevLeQWRgbDdh7SkVDXr8xVG3b8u",
  "key28": "2cSQcwfhevGQCa9ypPCiU1u6ikmckYzG3iQ5T1xtdYJByQeaDaqxsSnevKqk2CQUXEFeVHVP3wo6wSp4cxdsvoha",
  "key29": "43aR9XR9vYngueApPsU2wQzMVWkJk7BS73LQfrRfTTXmSeWEGk8MCiGWbSbXoiqPosmqAPG9WUwANrBXDZ6wKPdW",
  "key30": "pby7qYrmB9bkcgHY6okvk7j5RZkSEAkbG9xhyPpz9ZcMFB1dnqGmtuRKWdJsjfWDLJrBt9otAjXmqMLHRJWc3rY",
  "key31": "3YWhGHpKQp6AzuRd9kCQxTTm7TJ6ci2Qxkt7SYV85M6EU727HNQPua81hB79RpiDoQYYP1fcnz3iA72hXTXJLkQe",
  "key32": "2MB9Epik7GkeukC8QmxpUp22JLJsmeXNwuCFCtqCxvX7hStbQuV4hfLSbP6GdCYzd3v8RCSDDtph4tqiTZL31Ew8"
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
