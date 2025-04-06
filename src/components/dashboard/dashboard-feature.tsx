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
    "5agdSxM2ZRcZ3tWjiuZGyB8Fna1DM71UCe4YgLkwKdAfvJ4XLLMfVz6zbsVxerCS6BHRmHrGR4tMhxobVjNe2Aqa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QoVQaRq1wjaPewpB6WqxWNaUUQamymHDcH4XVQESaCt4Gano4LMLvJzZPQWVcQnX3fwLuHMmjqSfgGrx5kSHkB9",
  "key1": "HK4TtP9ynjK2TRiyceygqY98aNhph6fvr5Ht6joAQXTxK99nHMgkaqRU7W9tAzwiym346DqfqrLrac23hDuVBki",
  "key2": "SJuvDDQkpfp3gmpfqtcWmum3MZYAQSG3hNNXsKSuHWpKXXYamdoaHEiUw6j2dypYpoHnx735ogi4PLxCrZgiejp",
  "key3": "5fBXGdqgD9ysiFoEa13sCZEC4Krv3UkfDDQFngKGxnrrd3reRAMxCheubzNiFVPtptUpQZpe237TU6L8jDZiPw5j",
  "key4": "2iw8aVSjPBbWvnE73jRkvNCNEz9P5NLy8HeFHsz6H8Ym4bmiU8KRBT1Nexe38RdimZxDzp8LzVtp7Gq6jtL4mLQa",
  "key5": "Ay9giZ8NYDLX5USf5E4P83wmq3Py5Zu8NgCVsVoFquvqcdmp3FjPxkZKUK2Km126HK2CQtLb3g49CsxgiqtHqea",
  "key6": "4EjoYUWMd74PwCjY3Y5tGLZXXtoeQ76suB6rXqBuVSyze74G3Sg4cJVU7wFpPSNXE5U8gZ2LrvG32eTuA79SRxzn",
  "key7": "3LQsBat7KRtjgvgB7vwmxi5JPKNiyPXyfvYw1HaAGyccVmzAjVeA77M8UfuC33GV5j2uWSejW32qmfLhY47a7Y7s",
  "key8": "Cx4fEWtoBqxgFSgHEHuYuF7XuZP3xU5Ywa8DqQe6is4FP4rwEbGdWEA4Eb5pWTEB5vqRMQkzSuEH412p6ry2EfK",
  "key9": "5vyDXFj1CPuLzUvTkx4ubqQPDVAnW1dza9ZgxfbPiDgdeeBnEA4VZi3yChNWAVz3jcgsV8jpeSyaCCwp4bhwDd3E",
  "key10": "63jujLbBZbPkBahS7LMFag3weaczkCnCVSdZKX2BLALzQvFePTN2G13DKtoRakMUka2oAxZdEiKSu2Jfk4TdTZpJ",
  "key11": "3LGvwGvq4tJpwR2YUWSfcFCjoggWPAoHB9DenRmgz9pFLfJrqRwu44fee55hWqMKSWgZSySwa7VyyvXMcttmDawq",
  "key12": "3BvWs5EakYjat3Rb6NVA9B5Dy1PQE8EuZ4dPYpEQ3nUQhabikJiX1N2N31dAoyLhCdu3qH7yU5iDB1abqmDZ3d2b",
  "key13": "4xXsAg17MXYsPdzNtkdCLpnze7qXqoqRb1tJF2Am8Zr68mkfWztdRD1hP6juKMX77gZmFZp8QpTYuG5wRLAdfjeP",
  "key14": "25yBVBh73LU6gyktprSvkDkswByNZQbhpRSnoXKWEmT6ZwZQ14pCKMb1tkDnLRe695BcSpj72VDpFDrdDwQtGgDU",
  "key15": "3tf5w6EWgD59sQ1SyiaZfNuzefg5XgNw9LjcfZeBcHQ1DtXEXEMB9VPcz5GfmLueCrrBzq6yiWUuCxc8PACAK8sP",
  "key16": "45JRwBsnVrrvDiLGbQpW1tEvf2rwS6jPdK9wxwqPLsyqjn5frLNjLQabqs7WkYuYbBWs25yXhjf1mNnajbCQBeTy",
  "key17": "hz7XXXJcy9EhVRVR6knbMNRef3X9vjMG5twceJzfQvGytQL2hFg8Ja1P9nbq7HaeiEvneroTpKBE4PkbBWKx4TK",
  "key18": "3UBAM95cDdCYJ7vWRRacGD4MPvYD5Lfdwn8xbMEe4FJjdwXK2kBUi3iL9oBmaw2qZaQ4eQniSFMoAPgqUU9r6vEE",
  "key19": "372YBa6VStezLYSg5W3FwDM2CSG3uif4kVBSsb1t8C8UhYTM8v2MYSf6RRqAj7DTXXv1MXRNmhbLXy5GyJFKJGV8",
  "key20": "3P5pjGmFMZ2fkdAuHfNQuJcrFM6De8q32y5QbCYAU6bzVnKnLPegRC75zd5mg1Po4aeJGkoUqKyz9igQAQk7JgVS",
  "key21": "4GTKCA5Wg4nQjYoEnkJKwxPj76A9r3wHeWFyvuRsYa3NZuzZwtrMDYvQu1MothEDiuwGqHVQvtRqFF1mQQRgo9PQ",
  "key22": "58FX8JohG8kz61Zw1VTKxeJ6PYKohNGiqZUnhHVn7phfWetn95YkbBsM1zh5orV4Sq2kinmhEMRyx6DzWf4HnSRj",
  "key23": "58v19S7xD9DfGUhbpQctbUPMpfFKXYK6tCrZVeJ9RmTazyMmJgtJ9aQj188ZhyNwfcthRJTrnWJkZPmKrPQaPU6w",
  "key24": "54SQbD8Sop6qqaLGpmmXsoar4pK7Aw3oQaoa1Abc7YjFuXE4qDBDR3SrdkXBBNE6VQgpfdFmMarFXjXShswDVUfR",
  "key25": "3k9sXEdRpsPXmKcC3VeMxZfAQ5GrobVGPUo6VR8VdqDzEx6Unizw2B345PJ5XCrSaiJBcyhyad2miCj6qmGpXoFN",
  "key26": "4mHbj65BBppBNYc8tGfd9UdsdLDJvDtZE6Bw4rk9qcoNLM4DE1GPDPAS7JGnyGTqfAYaSpEyuoguNGcqc6TQk9nP",
  "key27": "2MgrY35SKpYySVekq6rnmYq3A9F1ZN8sVBSFk96XXArkmUc8yy2iP31NDfra7oDCtaBAo7hT6Cmt2oPkA3bp1Vmx",
  "key28": "4ux2AWq9u59ES2odaeb8gFhGf4kdLvDiT9dh9m7qNuWVBX5kjxHzQF3WuEBthEzfX5cjbBFNyMQfS8RFZ65Amb63",
  "key29": "3dgz45PU6yLcZmwLToz9jKQYpufRs5D6wzFJzfNfKrKgnKJkFsExqQ3i6pnNG8dL5H7d13GZ3zcusRaR9rAfx2A3",
  "key30": "291D8Q7VWFQj3ixK6oHCFpYjvPTz39MBUfV5XWqtjXwHFKLcBPLUG2aixjpiKoHamwY84nUWmDKdHPKFMUzZWQD7",
  "key31": "3EMSvRM2U6dvBVeEMV4zsRm5CUcfrmpjcM8kn3WnCQ1sUFvr7WSm232xBVjfshfrxcSjziWa2sttqZMFVAwM2iFc",
  "key32": "3Q1gJj3KFmkEZSSjg9hGecFThnJfe5gZuAhE1hWRhRFWdPov9RciKCsuSPk58E23idVTQ29TXJHvgx7Z2NbgeoAZ",
  "key33": "2VpQETshF3fu8UrdZotUV8yNqmECzNoEz62vpgoZvcDziGhn1TekMvhKk3ZwYXV3ij5zdz56UH3K8EkE9sNkpNHR"
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
