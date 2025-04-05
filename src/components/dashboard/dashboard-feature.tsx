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
    "4KddfaPijWDMP73bEiYbofDjGKvv8g3x1mGKzErzdUHq2HATq9JHJ2oVbGK5co7Lir2cpkTzs8FpHpuTEMXppB5b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4afymZBzu3QfAt9MQkkqwdHWKUPUp6D1AVjSgjVwj7EnNee4JU19kV8AusaGqeyre3mu3DV6z7XeM6cqaLR7ZjLh",
  "key1": "4B9sUncEbsaELK5oqcHfKbeYvgMTVeYLPY4Xzo7NrozhKdaWLnMufJ3KFuYErXA2aAuxBTM5HD9iSGuXttwFReQK",
  "key2": "3PJ6dtb9Ms8oFs5xCTLAqL1FRnRk5B8mZkNfpZ6WRf4wVSoiCDxW8odk7YFEnNKv5sdzBxU2achCvee2TrQ4rUuw",
  "key3": "3jPYREbj1uD4rhsgvhsHCHiXbPneF5DirBpAMVQVy6jzAWdH1UNXiaUqZiyMGdRw7UVhxFQr341iSaEHLSBPfqma",
  "key4": "3LMeTjs7H43ddeLiP3VQvoGAJzFAQKHYFZ7F62H2xW7KCDZ6xqDGTCG6XZPgN7V1onHyV5RUHFRnZ5sKAVfVFLpD",
  "key5": "3zi41SVgrzKfPGu69XWUFGbZkwVoNtkLf3yQ14ZMMGrJxTiKsizshFujVuYcWXyXmUQ8xktF5v8RxjPbzrYCNKx3",
  "key6": "FgJZVTppp3rQZUFHepwB9uAuNvWkMAnxW7BgM8zvy5ULhGTfhR4HvXyJSp7FnNDY4hkXojShpTrHLfL1GQDTcuC",
  "key7": "nhp5NPUwZ1jJ2aBgjBUpCL5UFyS6gcPXXzvRYSV6ey1JcapFy2zAqVp4omf6tmvapXFyuAELLMTJjxmQHdPfbfF",
  "key8": "4gX71TNTEWcdYcghShKTmmdSaKHan9oJm7aW4dxDgAJrpKNp1sirKB2ZT86ehdRWNveynykWyMU3Xvfbc6yD9GR4",
  "key9": "r6u5KPX4yGXvntsMnNoWkBDvmLMZvV4RGYtAiXvoSnh6tFiGuRAMtMbwDpFr6PGbFYUnGZiaiSSMEoVFt9q3Lu9",
  "key10": "2VW416AMA9Vqt5gzCq8vkECR2wJnaLmeYxEYF2PX9531JpGbX1aCSVKEF7gd4K1C4vTVFUk6Vtp7zt4QH5T1e8Wp",
  "key11": "67SCEW2t1e1PPEdBQHfwvHipCZSvcNgzticxHFuNpbQxM47cN5xBs6YhbeeRYWaKw9mYwkYq9QCAvbYmzyXMVJT2",
  "key12": "4mFN2qyvj54LRL7JsFhz1crdsbb28VfuEu9vSzJdjSStxgGSfZKZXzPqAf3iyNmJWaeN3pc4B13Knm3NWfEp51iu",
  "key13": "7YQSC19yBQKDbAcGEvTDz13dW4MZpwSUrRzB1H4pBrqiSXxm4pr3DasqzXHWL59wKTzDJKT2r4Pfy8oTS2Xv3bQ",
  "key14": "4sjRh2LGCCUD2RTdobDVW92Va5aHJjHb44ukagRUpmrunRKcBgfyZziMGUAYWsM1cYKXpxbGq7HAStWaZbwMrqXk",
  "key15": "3GAn1hcgWKRWXRaE8EukRZ377ReG4S6vZYV6Pe5DSJFqi6H9aJx6r3tTKMr7HC43c436njNJPgsedtRofrjgBcUa",
  "key16": "o79JuRPtgJco6v9M3Ken2xNjbLbydhuHBN3aXVyVWq2qrAfXfzC9vDAHZAw8vr2kPvs9Y5PuNoXUkF1igtoJ5aD",
  "key17": "5DVqYCWP27JnkvuZcumYByLbc2csMdL5U2xFEAoK9p4NdXa6fK4deAfrENSmRs8rwmpLiDS2ktbqrg8KM1UA8A5K",
  "key18": "4g7oXv5LiJYvmkmkzv1W9YoTKtmRKKJ3SqpeAGmr4wXtk7wkAGpNf2MUqM2EBJWahmVnKRwDxPc5764DaBiTnmB1",
  "key19": "4BZDqsijaHtasT8YDGWiAZSHwWLgU3cyj66koXBpraoRASZQXGDy4sidxeJkXo1smP1HJpnoY5B8fpWSCAH24JqX",
  "key20": "4PjM6beT7M587dc1rssBdLsfgKmVukQ6affx5ZMCeBaATQvfw43UAM2edGupoUvJMJiQg4LjHd7s4Jvqhm89awJj",
  "key21": "3kJuSKJ9qrwqtFnSP8kdoFxJbw8BEmEzThGVeW1PywkAsh1E9HftAUiMUd4er593VWuHmime8PcTZ2Y3HhU9mVCX",
  "key22": "297QzKVK5LNnm9pC2aHPwZ79QpinMQZCvvLq3PA1wmgD93egfkFDUHk3eQ2AnwyTavsvBnhCMLy2erhgiDgi9qfL",
  "key23": "4ua26LaSLmtTwxLfBZNBVm7q3wa3ah6KLNmVnF5V1NryTZDi77TLq7xjtDFHNGHntK56c9DJmLcBCGg5qa5pgvSG",
  "key24": "5U8J4eM3KsEHrQs7wsRZ6LZKG6hTkMsfxyHuEhWnb6boDPx3pFLexXofFQpXJ9a5jXbKaLDbRFTEmECUL1qGY5C6",
  "key25": "5Fo8a2ycsCpF74gYoCgAwd68Y7TFcA2skxqHqiCxBP5PXJkLHijbobzPJXAS2EG95EDCTJ3UZDX2yMPyxPzTEbqN",
  "key26": "rbZFSZsM39zvjVTtmQjGNKJHHzWfzipFbwtoTCoZZCC448AYC6eW4whtFCBLA5BJRAxoA4bWZKoScAuvDFtvzfD",
  "key27": "5WXxFyXnzYXer1qTSWxVPiXAvYJuCsKY57GN5WDGQsgxBLXxcsrV2UdofXhCS5pboJnSNZBt8cWQ8aHMNo8JTEkt"
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
