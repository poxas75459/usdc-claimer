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
    "4tTzBqaUMfyFrRbrS7uinmayRL9aJHz3UkJpUd3qo92L8QRzjQJSrWWXtdsyi6viazQ3oiRUYQGNNkiPqS6oCBRy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55Y2QbFGf9a2KfJqphBVDUdpTP5AaZhvrwCtVSK2NhZDqsXDMJT2kw8jW1RPUdZdhUAB6m7WPyzNrENXywnPK74U",
  "key1": "muuex9LFS7J36HLENfFZQz5BhMqkV5TktpwboknKvWtT8hs1bHQHhsUrZpirKYmnHVQXqkNCyi5iMAyAGYTXWXH",
  "key2": "25UatKqzRFfzR2vTn6ksjSSbCpFDPuvYoH53u6qbPxxFgG6STbT32MwVtHG54HsFyaKoWbHbvUGYyzuaPqTWZ9iH",
  "key3": "5jtTcP8g115mMfcW84oueoDUCQtFnkSTFXAGvGv9ZUdKAa4YTgbhEU8ejDvZrQSpQV4pgqdw1hymgPJfawRpUnGo",
  "key4": "22hDyVGMSULJPFEaSBa1h9SY8GdpB1zL9QUq2fW3q9ttGhowoqYjWp6bkP6atyi2fnSNGabg26mQb8wk84WkBKTU",
  "key5": "2qELEsRcjG6cxTUBfh5AyTDz55bqa5aV6ThQ5RpCznxU59HTgvrnhBGThVuDTRJhpdVgPC3Ggt1q781yyJbQbSUx",
  "key6": "3bXdC1bYLeutbmTGD3cAFf6zYk8wKihvVqupppqGwq8Jo5gCuEkRpTmoGMhnMHKcTDu6gmU7oApNcxW63yWd7r3B",
  "key7": "4W8zL7peJ698pEHS78JVXigncBe3QAtyxfBxyQ8mArcKXD5M7CyAUVhRMiDdMqP7eXq1iyrirouP8D5NoRuXiqQH",
  "key8": "5AsohPynyH5jrc7qkEiQTmqyGKeN3i8FeYLYsogniZ89wiDtnvYv6wWEeF892nmYFH4nEpsmnCU3nsCmkF6hitQE",
  "key9": "zh2SKKEvX4srQxfizguzknoJgfnJE8f7JMPoPYhDDRdArEBqeRYY4kf36s2vSYnm7mbSwZehL9hRjH18GtLGNi6",
  "key10": "2QjNQf165VTTJeGWD1qY6c2ALgJ8M7VEhu65txM88xs9nSAGXVYGWrybrTyZ7rSPeiCAUgN8XgtLYcsgYXNZGbbr",
  "key11": "DkGECpxMzne19sZzQxDmzjwg9buKFsXLiPUACJikFoxgyZSUZuU2HEF3gZXbTYJFfWHec9Fb2FjaHKxfMCqhmDf",
  "key12": "5PrDA9fJo7p4x7qaAyYB6qc7QvuLe9fqB3bcqSvaxpCVaGX9yUDybyw7oSrrLUwcrm6pstGA3hNhL4ydajcHhLbC",
  "key13": "3rPaJrUv8Qijxg62Scet83nFruWbNsYakPnuUhQ5eWqfQ8P8nxhyEp8K7Mr7sJ55xZBGaZVBrodSWCXdZoxpZ74e",
  "key14": "5r4Cje3aYhuCcqJRmW4GDgpAxuYPrNCv6oVdGpCjVSxatvCXCbvUwUWoWRez2rK1giZRE5YGKTfcoY6TwUeutK7s",
  "key15": "4ga426QXBLmYnDJHfyKBrhnLoTRWdztUBG1UM5gHDchjXdchBQ42b7fWsyBFyJKLuoBs7zhyrsWgJSKfoVBgp82j",
  "key16": "4a3aEPxMLQt7SJ8BB1WT4cR8Tzs2nLw8bHxbSkzn1SdL4FYijP4u4HP3MUpsvFrm1UGBEtPdDBchCkG4owmp3CoW",
  "key17": "kWJwzohCd8DqmYQEv5zxsy8Sd8ScCXeyG6kKKXUYcEpoKGLL2mPCGNDNdvZcXEpYyJsnJLytq4jFfhD8v3ZHQyC",
  "key18": "3c6hU8makbtKm8XfPkkSsmKXhT92yDgjR7WoGf4LDijRvCNctLXbM7j2Jv1x1VitBnMTsdHkTPyaDJKmY85DU7Cz",
  "key19": "2DVvBnkhujeoJPmX1wcsGPC9STF8BPCSzhsya8rTtr9aNV8DavWaJJmSk55aH62uKBq6boePMEM3623naJzTtNdb",
  "key20": "5tHJPuagirLwRHpsm7Jf21FtXFF5Ja6FNYNr5Z5wS7dE95B5hdhburbBT4SjcVhy6WKFFhkosAjq8AsCjRpqNpGF",
  "key21": "66PiBS6VCLPT6bYK3T6LLzmW8iEAh5GSs6Cnwtocp7FfQshQovJwkomVNdRLnYhLAMZJgq9KoD3DvC8KWTJRMDoq",
  "key22": "58RYGJmXmWvkFpdQrp9WKiWenza4gjviYxRs2hWP5ca4V8CKAuVyPsq1a1CbS6r82TPC8wRT2mLUP4ZUsuWVaGWB",
  "key23": "5ybu6HG9pf5B4kBkyzdQmTHDsJ4cwrDj9GNBComUgpbHSDLaQwEUCJtfSK8MTAbEcdn5ZV2tNW5TmdbMhhkyfict",
  "key24": "5DSdrUE8AGdR1JhYSBwE9X55w739hekvEDfdPQ3M1W8mGB18tqtvtMnMW6Znkpm22mtMbVB6RzsgiKckZRFQQjvV",
  "key25": "5re2FVTMb6dWW6WUVyqpSqaWbpbCwR4FkkTACMJ672hNDa8irq7SL1DuM8Kdk93gRKiLS5LNLC5J68kGchExyVRw",
  "key26": "2H2qcHtckZt3gsnKdxxiuyxPt1iizZHjswXaAQiZPrNeBDBRXEjCWuzyRanDpongEVwwxJ8n6i4kMiNeDuqyoDfE",
  "key27": "2tKRfWo9eFLvfvijJJwzMtTzy1WZZXx7MuvyQZo8oLmS4hoP4PTHQ2qcXHJLNodzj9cBcHvFEPN16SDFVazghG5X",
  "key28": "24TZAkSkNNDoiDA9wSR3SwHEg3YYpjx2H3PhZi5ycPwUoUpwgtnP1qpfjyZt2t7UU8bU3tcdAhTBwPckJRKVLF43",
  "key29": "2jo9sYVnj6kpFKuJp4mEqnAAyFYHqY9BBz3RqNL2wGQbb1W3w7xdPjhBJR79NRxEiFcgiFhEKrBaUBvSTnPmR3wn",
  "key30": "4MGgLsA98uKwZ6mBMv91pr5Eb4zTzWaybwsZZtAfNpVvpQfw5HgxXarwoACdoE9mu3PsY6EQS8S4j7M3miN191nm",
  "key31": "43gGjv83bZ8GDcVrGwKk94Zw7GaMb6mmwRWWqAhsEAD9CCzcYgi9vM7sMFdCytXSZhpRyFgRCBTKvcnDbfufypN",
  "key32": "2RGQsnV5Lrg4CjVzB9kApKPvGxxpYM9pi4SJhuH3vVNma9KpmK2sapNagJji6ei11YCJChw6GCrCxnn9cwuexDc4",
  "key33": "2BxWZqM4Koz3PAUfv25PVwa3FYPsXs9MoTHbbysG9d13VvFTThofvaSxYK9ExjZZrzGZR4DNFuuM9LfU5UjTxeZ2",
  "key34": "2K8VSgYqm7rRmh4zyP5SK2e5NNK5gp2cm9P6MdfCP5B7VJwZTAiCEYctgZnvvbVA3hvrnnK98S2RS9zptnX8kJMU",
  "key35": "3jxg7CGxmbuMpEPtHiJFRR85GQP6xNXuEZiA2yvmpgDGKB9MY26Y7PLszPiJ7izgcRywQUYsCm7bRLb94Bz1wHZc",
  "key36": "21BCaJrVDRs6tQwuuQHQqDGewsFApedczFqfSxxK9jrpwEPF5AsVTp92wgL7zXMxCPYUky52kqjc2sLRjo2TG7G1",
  "key37": "66sn21quQiYEHv51qaUgrqW3LeFjtD9BCMGows9ki3zLVNMf5SiCWya9VybKir8FXLFKqEzKKBQAv79i82pfRD3i"
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
