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
    "jPg842TiSWgFJ59VqaAL7awnNPbb1ELsnhBodqTfjdMAu93nYznWmZ4ptCavEFygVLhCQffRSHwNv1VtmSfxtLu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23W5CaBXTzLbhXZ44n3sB2eeB51yZDaT94cVvdwZyThp5Jt4F2psq1YsT4WceGDTVLs2vacwiDMSVr946q8NJpNK",
  "key1": "aqRsHNuHEyZrHxLySFjkArzuefB3dQvcix5pnW5DcGJ8CiEGjVTFYwjH3Jn1Q7BKBQHmkaC9c5Fai3bz2Zs9Qun",
  "key2": "2s2AN6AhrsWr21QtugVUEcyi9GCnhTU3oUp4eXFExGA8B1RzxvBEvAguptBxqWN9rSnqKv5aeh131VLEMuK7obj5",
  "key3": "2N2nXyHjFiVsxKnbekYFUdhpmULfYsVPxB9QsbUMs8CpY8rWbNmJ1VhnGuMzYr1YzFukxgyELdw5ioA43siC2VfA",
  "key4": "2iFWgXAGPmaGP282n8muvrm3WDeMqNkXfbuRBbjqAkMnFNmKCUZ7fHFrr3UJsruinn7vkZ5chSfcEmgViwAfaxuU",
  "key5": "2TzzmH2MaHGhJZbPcsrFWtWUAz1Ch4ZUXCHMkidLPZjd2bNKhDbUSZLc25ZeCHJU4r5eZFqT5Wc3U7fMLrTmjS92",
  "key6": "5xwWxHkSbXYp5vpmrhbTu5LqdipgBxz86t5DrD5MgfG6EFrcd9JHqjZoSCDM9o2F9CnpaHcBwTqx8datLsipVntq",
  "key7": "iBE6wScN2E2yvoEEb5PREtqL6zaCTh7PGHKYBv2guoD6gBYEasZ9Jzpy7UfprfycGaRp9XxKBJj9XXr4PHYaD49",
  "key8": "5gMr8nPg1MsyDaveyBpqXoGBceRtRGyDWfpP7dT8zWXFSx3msAX18AR21em27RLtxiPEh2mWtSTPeaqbdST6nitF",
  "key9": "4PYtxMAqEztRkAqFMBMUnnq5G22CNM84wXFxfvuPVA5YVnmUTKogU8FxCP3b6VsW6pogLUiyaH6pgpGbUmftHouW",
  "key10": "5uksf8wSztj4G5Ty4R4ukn6kD4JaEcUY1bkKZzchZ32gEHvTtL4sdo7Yp7ESUbM7QVxPpDCwMdHhrjWidgNxjUCR",
  "key11": "q8B5NrPLtHqUkYZrXGFB79s4Tnhj7XBdy381wkbCu6FdKFRw1N7DLJDvV3WFxyZV87eFJe35o7oaxQc8hbFiGUr",
  "key12": "vG6BT4if5g9189MDqkAtMqGSrU81FaeVwhd8X6jmqiKJFHjmZao5zSz6PYXzR1nzFW42R59ocDJ16CVhqM6PEaP",
  "key13": "2NhXQUgBkGxRVt9rrug3kdV32S1vdYbNFahcu69p2qyKt8Luv2RtCqSDjKW2QzDzCgDSYDD4miP19jKAfGCL7GMq",
  "key14": "5uxAnRxzf4bf31AEKTqBP5PWGi2cra8WssbSjdCfqaW8ZLUAMhvhGzzc8HqtnM3bnaZ7acAb2GwGJvfG2t5eX1mb",
  "key15": "2zUUD2gmfQbDVAGBZeu6XqpqxCu2WCsCjzJbADfZDw7ftu1UGTt1GFU6EDSgpa8FHruyNKPXjBS7wxFMRQFSTy9s",
  "key16": "2SKiP2hgWtZS6d55tB6ejxN8n8XXoQtY7imgCbkTq4nCiHGiVxqtG2c4kkanwNHLgPckqwjgrUzyYoR7iaceiAdh",
  "key17": "59VQXqYobH2HGvTYVdPgtxn2X8TzVt5ji16p4sjYQg1biiGkiv9FpkAuvBKpasQdysY2fnNkDpjkrV6EVA8dRXj1",
  "key18": "3yyRpSh2ecya6rdw48Cb4X6qNwE5G3dZZy4U9tK4iBEg9NmTDveaomPsbJVajbGTp4U8T6RfgNH13c5EbpFcGsxm",
  "key19": "hKUqYjL4BKgcUrkoA7BJByjCJKiZHBg4YS69yTGJLwTvNUhtPn58fWdzaogagfrDdYywzMD2thcKnMHgKNrUmjU",
  "key20": "32LZQ1fUZys1axsU2x6opXyyVSej8XD4aLKqGC7BjEHpJFyAfMapdJ37gbTejT9hFgJcBwbQqERPc1SJgUFJ5ydv",
  "key21": "5D7Apc6PKKFLxyyVyWkG5Cs8JDh8S4Q2gXwVeQELJ4xmF3ZMjkt4N9FvCSQ3qePJMD4hAX2BgLzVfBNqSCkZpVqy",
  "key22": "5kUPymceFDD7s8VB2hc2AJnSuekSRWyZNML8MVaCWqUxKXGwEP9uPR7Emao835LgSjkuFqx1tMY6PWRibWp5qXL4",
  "key23": "VnuKECuxcsYnjWuoLkmvQRV1GSWuB2WCstnkaBBGSeL6Bq6kqDZDAjWbZFjDbAa7GwR3s23r3QMCFHJxvha2APx",
  "key24": "3ybKCbyaPDaXcevEkmtYoBdTc66kU14cBhv45UkgFgdeyxEKNjBN8VTfobmCeqriHyCn3utJsz4t72qTi8HqvnwX",
  "key25": "5o2PYCZFBGZ6gRnoTgcPjNYxf4QNUS7nazPRjrpDM22cdxRo6udcX3g9obs8KeG8LhWEjUPtYc5fTEhKr2VfJXXZ",
  "key26": "31QzYJv4VfxDjioEcg3LLVnfqpeXD5mXMqyYKiRJwK9g2RK1xZxKw2o8y7tuoffuvyLz6hm4P9uyHy3XALYSiik1"
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
