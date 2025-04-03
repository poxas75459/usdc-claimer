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
    "27UzLJWJPSFcoF43Hz2saSQvQRT9Sebi2hjpeugW8wGnYyowZJCVTtrcPSxqqURLkUWRFzY2kwNN3uC6ZyMKEm4L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28P87AJMJ4dpcPgEGUorzSna4J6s4PfoY7xNajYb14CKVynsQzKXLM4d6FQBLwHmqwD9pW4pVjr4eiRtszZz3w5a",
  "key1": "4GkTXmog8CoRQ5CFHrQvpdX9itjB14vDo5UASMYbBJGCb7hE8c7E1a5xanbx2veym4V7QXDpNnigg5Bc62BB6wyu",
  "key2": "YwHt1f99s7ZgKX9PvxCtqW5gHcSHXRJJXvAZEAut2LhQcSbdMM6h9cSa6vSpvs7rsAmt41pvKKvNyxpQVFiTChm",
  "key3": "62GAACGd9EzTUxUBp5ZGa7e9NA1vbP8SJ6HiEYLERUxjU1xzmYbKsVf6bFuXPgBiZ1inprYduUE4drRqBMLCijGQ",
  "key4": "Kh8bHa1YybzXd2EmYdWb51DfTzBiPijQK8DuSwLC8CwPyWEKi3ibBD7KgMHmm4AjqxMMZ4BKTbgmFRJpGvspceQ",
  "key5": "4fGMxGuShJFULvKxgDGfQGSjJEjVoX5VRZj5oKzb3thVLkHVDtTuYMcbKwwb1GHn2oD91J9zffijuQpHc6RsfD27",
  "key6": "uJsgYphe1v62HZh41T6V575XaPvbrTEvnzPXrYQSsyzFheeXpHnKJ2j7wsj2PWHvjoL4j67sRgjrhK6rMyZtVTn",
  "key7": "2LCAnm47MXfWrsiFxg95yzhVkQPoUTS7XEnE3jztJREK6uWgK3QR9xKbu64xVMirg1u4xj9d4XpkRaEutYxw1LRE",
  "key8": "DLFdfarrtMyqGtk1hEJnekfSQRGTb4pKPi3iUawWkvQL8e5f8NyfZjveHkV94dV5ek8QvJwGrTr1SAfLbNTTV7d",
  "key9": "5hevZKteajphRJ84mMeeiYaZhH1Tz46RcjJ932DZFyhgYz9214bY6kE4KuSWwozw6xN5fZhGYvNow4LUJAGk2SUf",
  "key10": "5k5moJZ7k2kanp4jksUwJUb4DTsfGaeMMgeucc4zkh5FmXjP4XWEbxqhzLtYWUNP37x9PJGRaiVUu7CnXAzVcuBd",
  "key11": "673nTJVUDjCBp4PHYb98HnHxDXMqXkZQLLnAiEx9m6jurtfkoSnm7zf4uuGR5TEDsxnLuLb1xWCxwWqbwNY1KwUH",
  "key12": "5gn8TYFBK1D5sVSbbUEbV5yXTpkoaiU7THYS1X7GeytZu5gTmZcmyi68QX2NjBAHpUPJEknxvm7Rj9bEMuLiY8ss",
  "key13": "55GSCWjNV9TjaXXEYqHvSK3gTTneK2bc1N3FdbX6taFaZ8vquDL7NqWnoBF7TgTrngy4EQsuxWYn5wx2fvA85iZp",
  "key14": "3doVEx5h7E2SwrhSeMikQntNdGMs2wibSjfC4GJ23phgShnvXtpTyuTKtEsTm45PEyWregMhnz1FHKaEbN7qWcvs",
  "key15": "tPsRPbBpeSXgzptFLtifRseBUFsvWBdaaDZrJLBZgVKFD6dPuw1RA1mcK62AeiuVB2tnLBsbmNohUCpBb72V4fh",
  "key16": "2uEX58YBUa5po67D4phQ6VLQ132AnEKfJRbHFGhk73zTcHz5VAW1Yo8ErrZ41or887urpZhb5nyYTDFmmBj3j5Ga",
  "key17": "4RQDZSiXy5ctgUwadHE56zf2PMzw1ji8f7SU1XXBMmtpbPhakBZAKArgoCjWydLH9eZ5QBH1TgvFUV1qrycAF7L4",
  "key18": "5hRDirKBg4N6dNqfewnrSrDmYSaDN9mF8MQfsEhVSrQy3UCjKCvvjPp1dTJzTaS2hnVjZyqVHHQLXeLohwreBxFE",
  "key19": "54uzdMxxthohBrkuZWbvncAbbmx6dkH1p3HTWNrbg2EzBCp5xT4tP5PpwfTCYy31QEo4KBJo4XMuDzeR12nc1Gyi",
  "key20": "sUtoWJN8iFv67rj5ULvTeiMCUa463ZXXv4TfVdroYA4a9v16YfH1Pky3eDnmWoX5Gzg88rn1nyU2rGyWZz8ydXA",
  "key21": "41Pe6dvENobSvRLVmtA8jPXQVAL9Q8pPD85zN11ba9aQVeeU3WTtGCZzqUkfjK2CgtaReFfFLB3WqjMJUorYbPhi",
  "key22": "6451dQdN3C4WMYxFj8M28MZeph23hutyUZetq4kpKDPn7cSsRDX68UD4n4v7rm4SVLkitxouPmXGk3XpEsKcYijH",
  "key23": "5taddXDjDQdk1CZUEXjEBHidvudZFWTGB3inoiNRpRQP5ob3ZrVAECZLSUgqpr6Xq3syXUpeZs4sHPDiVmpktHj5",
  "key24": "5du5b1LMaWZFj2YkraojPY1Dsyox1ES9u2wKbvvEWBYGT8NTwMECWsviLzkhEDoPEH9HyRmq7LB7rXqGD1owf9iN",
  "key25": "3kgkNn4QZFRRkErV9uhpLCNZGSPT25EhqrdrN3gmLxCDmc8CiLs7JbCbQHV1GRfh7wVytXxZCwtTmqHmVcbgGPCW",
  "key26": "4CCMgMEfJf1HqmGveVhwLiqeb1Fn9rfMXG2mMH8KGg34vxap9P7tnSAB45PUJ8J9S3uK4P3GjTrkkFxLrYjcihWZ"
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
