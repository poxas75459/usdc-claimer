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
    "5dZ9DtykHqnrbdLVJaV4v9qiRLcYLsqMHvoC8w9mnPmW2YGKzgFjeRM2bUGWwL7q81X4pUcECneN2KZxEuEvSoTu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uG6hd9FXmAa9r1Sjwi71T2YzqEdUDsz7ZFLdDR4Mww759cvYc1TXB5aLposVzzLUyc3pTeSDKBH5mBEjHVikmAz",
  "key1": "63bM2kMzKD73q983WD7RbBLDMvv54Q27jmhHkpB3ow9xjbaWE8hvcBdz4aLHdFiLkfBYCkFX517WbfiyKjefKn4r",
  "key2": "2ejj9gEQH67g9Sum3KJDpNtYbvkuV7LKz1y85GwHbsDb2oRzuW5cagypFFGeubxSJYJyATp35sykKMBMZ4hsRxkv",
  "key3": "2Vu8oPTRTHKbkfnYhGKAm7kcZU1nkY5UAc3gR191xCC7M4fiJgt9miv5mWvR4a7WKTeN1LzR1ExNAzjT4A3ALJvz",
  "key4": "4feHAvQLEoHRGYJ2zewhoEgaC64sJjxQgbcTpqambFvey87E3AiEjYzQuQunYheBygzJj6imfyTuaeZ2mgfFHYH6",
  "key5": "4vfxGqqctJCd8fdpchjQoPLEv8rQTSZ6YPYWJ6sg9kdFBc6eXzxQVHciUzN3MnCUZTfaFqqdsvPdMVS98mAPFLdv",
  "key6": "NMv6rHathbQTGGtvypA2cEg7PSBfuqNSoKjnRWfEH3VMCC5G1GKeoi7JxTSiULwBLStHi9kPybp57MdFAo2nJ5W",
  "key7": "jfKCaQ8YXWuyDfszcheoUyfT8zGtCytVYoC5pVW6jMmxsfVw8h8DiovLJCWUsQQNwhz8JqZnBcGFQ2JgBbk7VLU",
  "key8": "48QqaLSmqWzL1b7BU4XuxX28snrRFLq6g95fGRUqTF8gtvWAdSVwsWxr8vAs867iUgzz5r7BhimWbwPgejQDB8c2",
  "key9": "4iqcb5r6cUxbSUZbRppb27YKgn5VMTWcuoRTgzwCgyqFS2XLgbA1pU2LffDkii75A8xBMm1kGVJovWPfTGwMSLh",
  "key10": "3LPAeJad6JQVs81qnomhBhnsWqqQD9CbYPRQLbHeDcrE6ftwcgfW9bL1rS3XsidDjVXy9yoPSJ5mV5xaSkvGUkxt",
  "key11": "ErZJtUQMkem3dG7pre1ewLw7WS9TVcdZ8KAaLw7q54p2Pc6pvWEYHC469uxEAeQ73DmcwxRBgyi6NUg9GL4tf98",
  "key12": "Xo9QMYHbkRUz2g6CugoPLcXRDhJ3sGihWjwraHa6n89EMSSxCAVuCdyF6zfVy56ffTbJvMc7XGTXBvisvkKnrm8",
  "key13": "32ZNjQoQtJQegt6LYfZN9SjYXHtnjdx4VGFkR93vjPrsuz2cnGkCBDChdV9Es7bUJcvzn6C7UHpSh8kkfPFEEHjp",
  "key14": "4GDG8xNNaqnHBfxgXMg32sAfkfSpS4M17dtTVEga3E44jFU9DosZoj1mxHiZpRjLJzYpXJh9pnn56R8aWEb7AvqP",
  "key15": "3cNngbqPHUWjjCw9BrFhsSHWdhvpG6vf2Swrp7SetM2n6GEBKeexLv54FhcZCxDpcrKD5yA4B9Hcxv9MFJcpeaWG",
  "key16": "2pLPWPhJk2vFmSeN1FzTNqgMu42SPuty9qcJEC4HwoDMroMpqgCXFmdkgPBoZjukEaRF5F54UxxL5LZqQ461LFfJ",
  "key17": "2MfMApQmDrVNkoetywbiYxLqm5GgGKRoUuLRXgff5iWn9VxDGjKhgrFat39c6s1fWapJQcTKNtWZ56grtUFH5wdg",
  "key18": "44sWEzgaLjrsp6KzupdtEyRJmFhRavazmoFBCPbK3FAJyjuTNHNcWhoSYwd8PLJGE4SbyVAGRWpEKTBcmdTSDY9R",
  "key19": "3jUctwRYqYQFo62Av97jfR8iHWEVPbz6UFxBZdSW3EV2FV5gbhGB9iPKgrgjwG3oPgbqvpN9WcPuPtbmED1QzUQd",
  "key20": "4KpEt4uN7VPkZrPFtowmGduDyGRUjKbwibYSoNkBRi3HLhZu3Rpq4yoshMTtmDVGoCGwUfjFJpqpW4R2cweQ49Dx",
  "key21": "5cE9xJTwqQWWB3VK8BCM2dFyd5GUy8ke2etX5ET9jAH7FHxUgqktujWKvJYAr7VqZhBP2JvANg1C4beBxsnJ9xSR",
  "key22": "3UQnveygMkMrAk6mkwLFuLebqmgrxXcysSHQTBg5WkGnFEvSCGtUjgX9QjpfdL3FXaxcNH8mqGRChcw67cZRNeBc",
  "key23": "m2dgY4bovDk7PTTCbLG6fXXxk1SiBJ2xABHbPFyuA4nqCMvFxCBmFRjw2jAxvrq2BWHmuLBPZ4YYpxbRA7BZ5LL",
  "key24": "4wSyUkHA1GZUqmpiM6Hs2wmoN43Vu6JaKTN136F5ujLLbMYEgshMWSGsV8VWh6K2ts2cKbp4u4Ls9KHySYpf7i45",
  "key25": "3nqk7gm95fMR2125wxGaYXDGwqcUUYpmwCoE9K68JxGLczeyRBBgyiEmYVVu1xrcouxkAvoNMMavowHiynVyhvvV",
  "key26": "4fFS8SLWv9Qqky8HRT6nKFmfi3CJqT6MaffKwHn9Jd3fBM6tLNCvEYpcLKpC2KkJXrYApmDoNhC1aYKrUKxPyKv3",
  "key27": "2SFowUfEHnRxbFTbKwsdL2DfhpZrvDM1yv1hhvWz1iE2q48C5WDkEu3zhFz9AuHbLgtVRLYEjPufjSVrAt7rTq1C",
  "key28": "5SEZbS8SYErvXXqsTiTGqyodEU6vDeDXCtbeDEbME9Ta5Hui9Xr5SBE657DwucDoQaYjUeeYL4AzSjP4xrDPSiNw",
  "key29": "3djj8WqXKUiHhJKyT2fRamx7Nhmkn3zDwdgxVUYUR6qYSuPPzGAHmMjTK2Bmb4feRvavfHH6yhvuUown9WXAu7cm",
  "key30": "5T6J8yHMzr5fGkmH2x4Cb67AXCNCjNRQ78qRS1t4kyhmUwGaJCR1cxDAS9xVbX4pX7xhKERrHsEUKPofW4oNFEio",
  "key31": "5a6X8tqeaky3J437vsYsi1GCSyMeF7atoHPUfmWJJcfdREaQi2CJE67wNVjcsyoz7ab6C5HqgyqcMdCtxscAXmGv"
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
