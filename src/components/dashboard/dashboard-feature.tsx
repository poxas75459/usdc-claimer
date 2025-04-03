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
    "qVeob2aMhAq85pPjFHhwwYzSvtWP8oPgAWe9bCVQ43rSznMqncLP9FDBi66KigoGoTPQZbMdP5tayc4iJHFAJve"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KjHe1tfQQPqfZoo4NSDE9f9iGKVRZvNpyhcmLETSQ3TNtSbiBPcSacXWfMQ5K93D8NAvgoHCKiiLqd3PXjVxLd",
  "key1": "2CWS2Y67JZT5iNZJUak7sjBH5MnrPk9daYhXh2wpbX2KHKVPh4qUsxWASqAGMnEgAVdVdKQNd9UKdwPNeCrBXtsH",
  "key2": "2RbWTGnzxKwM5bJxrNH68n1R4j4jmSJz3MRKMv65vckHmiWKS6FwJznGnLfYFSu5qT6CkGxg5xhxnQH2Eh7acbZr",
  "key3": "5M83MkrimekFzC41GwVUJpcsM6LuWBw3bD7yFmkwFewRKkzLirG4db4rPk4iyKZWPYex2t9GENpZWt53wzik6W5Z",
  "key4": "4NC3aFus8QBWcVzr1Ee6j9E3kBBnHQcFuPrGFTBbu1febvGXLRPJCnFqSkop8M46cMMPNYQXXhohfVRDdhyXC7n1",
  "key5": "Eyq6tBhoqKHWyMGcTZbHCrWVFZzcD4emx6puFEiXZFgwf2rdnXdJkVDPEJFFeiGJtbi7FGxsnEknjQfQvQTa5C2",
  "key6": "5tZQZ5oKbgR7PhG1CBuBXzNzdpEDTtd2tHcN2w4JforzXyu7jjnvVaenF91DWNH4sJeJ1G7c2PCWpfFyjf7XJ4MX",
  "key7": "4GYZZHYcHLagQ63rcagEbVXUBHJhzXozH9sf4SDetRW5KkBQQgR9Upbt2n5j6CLRXiJuv1JyMTGa7rnM3gH9g2vB",
  "key8": "2ya73X9cZoCwT9z5yWXcsTfdkvJu1NKzMh1zrQNjvWop8K9yYUJJCqcJEQv9XYqiMTqkqCgYQznMdBqq2a1TACte",
  "key9": "568uhorqc9gWRRDy1s2j9PqeSEYzTPSCWZD6pFLowm7VVsGB7G9K5vNHLx25XWqCruN3fouuvQC3iuMASnZtacEv",
  "key10": "XvSpzxeYGZJkvsawbn9KNz4oTJ3NzqDdbWTo9dMGKv5R8xPP8FguFqZxSNZVunscMJXcNACa2FBwmf649hSYRvH",
  "key11": "B31XSwi93FwAfFCPg6tUxs47FGKQrPdeJMbCtBgajawk4cvYg7UNK7Uk3vS84sCWtkt85Mj35RfcXEtnn3PmqtF",
  "key12": "4SmUXRVNiyjUc8TwsvbCpmpFU5N1z3Tcc7W2Fnx9ug7V6QwR9maA4utMCd855WPjgY7P6Tk1WeEz1FR4athe3JJF",
  "key13": "WXGiRD8Uu3bWDxpvPDMGtXWKv7kXVsSa4SoXmTRfAcjxzcJZziLG8VJXWa7DZCFqaFXix19ZAanAerMQ5r3eWdN",
  "key14": "3rTXqzRDEajbLVG1V7evNHRubzCE8a5zyjp3QUVdX6UV7b8JpKKBhSS3n8EbYdFdPWEC79TWDFWJDyngy3ChsRvD",
  "key15": "26rCAyugQddvakecnY3ptj3hTMB6TbBqJiqiaJqsNZLdhZY81dAbBPMoLsT2QDqBdxsoeQ6sxqXT1MnqMXcSxiay",
  "key16": "5WtuQt4HDdJ6TqdodR5v4SwKNVRqye4L9yyYRMK5cRaLu1pXJud4eeuC5v8nfXTgszppmGMFHxw45L9guF7TRK66",
  "key17": "5vG8PqUCjRR2r7MbR1SFF6hZQtEpo33HmCzAADwksQJFmXNkg1A8X6cSmkuFhNuhAedQFPSNeYbgHL8M4dsXoEhZ",
  "key18": "39RXCs2wVWq6VztzEEUcFffSK1bbep4QEoPgshPQdf8zMw5gtG8yHXNXr9wJxEqKXcQsn8fq95hc5STnzCicHARm",
  "key19": "4KyUWpz3oRh4wTvDUW4gxoqopgJjhVdEJNZqhtxj4tFPZFJXodmRuqXrYZrnwNeTofJf5EqBRWyhcw5MBdfPMjhj",
  "key20": "yc1uRE9wpfxf4TNKSVuSCKMpqLsh9QUHmmMTDJGqsVdoc3Vsa8Wjdjy1NEWUrWqGdd7t4kmyWG4Y6k7zGiK9Nr3",
  "key21": "3UZZgEDrXDMJX9PrvBQqA7UPXgD4V5mogvdiUJmCqwkxLkDeT1sT4cjVaAVRywsLiAzNbEvYR8MU5vhCJaDirnVM",
  "key22": "5q9NCor5sFYPDKTF9qQFXxfPa1yv5U813scrkjQH9s1g21MAQHSU1MT6nvYWCLkjCURxomU5SZFeyg4m6eqTdFby",
  "key23": "4RWccr4MJgkrDVYX3xGe5TUqKwb9kWxfqRGwr2CtgWaoJVwpYdHAcpQC3r8zTGuawXUMuLNasYwsXj5aQcJqYMp",
  "key24": "4DLjEZ1FeBuu2M5wTbbE7MEV3XHh1QPqD1zQBKZ49ZQwuF2CMZZdtZAm6aFAdr5NmDn9hbWVpTUsU3wrXcKjVXz5"
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
