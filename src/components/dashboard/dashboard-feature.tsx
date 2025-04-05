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
    "2J5y1XJwPgzMfxEDrdVcT5mpwhjwZ68xDnnS4z4kc4qDjCsQA4H7VXQvZem1H7W6hALCvHCQY4Nqb9mLMGtdJen9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34E1hSjW1E81exjQR2mZF2pGikTikKzMPspZfGD3PqdiWYjqLn4ivfWF5KnERiEuxVqgvx3SKqEDW9wRpsH8mAx5",
  "key1": "5LqyBFzCTRfwWEv318XviG6JYE7by5fGvAKAiQXrAVucT6tCTnPTFmbP2yeWh8aXi2mvNNqU4hQQZqFq1eGpb5Mc",
  "key2": "3o9cXkN3FmR4xQUMrr5kcCMzDJqTQ7wYQf1Xrt2Ph2qkhqCdFtKZeLrHXF89DqzrQaNC15CVXpmf5KfCZ6p9nXMV",
  "key3": "dyK6nwU1gJdebBnNNUPSsNH2rqSDcjyJJRXwkKpuofsH135tctzJgdoi6yp4fFxpTuYvvpE1H31cjM7m76svyT2",
  "key4": "Knrq73udrDbwamkydJzDVZHfkJ6w244P5SXevYmRuxWYZeaPHAaohS1hCJEXNQGc4w6R1mfKwPwKyccLNVTQjNz",
  "key5": "44FCFhxT8bD3P9dpf6EGaRBV1Kr1xzm2oMmAjae4Hsnyx6KMc29YAqtazUZYZxfsg5EcCbdBsbhph4fY8jiM4R5u",
  "key6": "rf8AhXqVH8xPJ56kbeUTSFyQxAWF5MySYfA4EH2mRfMk1R69tbGpLJZVELGGdSZn6FAW8rDkCFrKsB3YbCwASvT",
  "key7": "4hAqGiJ6EX5321LaW7NdmUodEWdYL4SWwNrTEZN5XeZYvYsYBc8djCdsB32renJbMiFWfYTesXqNh4binGcr2kJF",
  "key8": "aFwNQXN1JLA82SQ5KX2UcXn9aG5gikEVq57Ec4tUuVUHLrDwqwWA5mW1ADtCiWxAgRwJcut3NF6UFhUCn8LEZxr",
  "key9": "36zJ1yGQxPd5aP3uAvX9355DiBZ9DRYy7BgtvZZeXoYBeLrCAcMKZLM2BkhyAAF68kfeSkrrdtL1VxM6UmkGmK98",
  "key10": "4nHG1V7qgF8rke7vwAApmyMEqHxjgEPEyyKoYEwBUFdNsiYkCD25qAmiaCTfbRdixZz7tMVQnTdJ2f87KSHg1JSK",
  "key11": "5dYVmAJoi2NvXrbhDPxb1c1fjc9MwQCBA84VaTJhjYzVHpVXo3HyWi7tHC8Dm63r8Zarb7PUuLNAgfp6iafiA2m7",
  "key12": "2xre2QHKG2YwYo9tExCaJ8xL3pnt3At4Xuq85PGRBjnPXsnRc8cCd1oE6whbAgyHiDcxw2YYmU7bZ6zMpgQnmmRd",
  "key13": "2xmSd7UhVwYT3NPPEkzxur5PUTGKDC9p8V8NuYjdREax6TJtZ3HFnhJPynfUCm8qgjwvNQbgeqBzYNnwEngj4GoJ",
  "key14": "4C2iRjW1fB6pp1v8V6heuVMpXebvvSUVtc3pyokrpV19KByLPQtAZYHWFYRxFncHxd7ZFSijkakrngbB6nu3uPEq",
  "key15": "YUKuoXtMGZjbuT2JAWvK6sLenMMWaHPVfguQhjW5GBuWtt42i18YvWnXxCQ95cZtrbYk1WzWG9pxpFDSe2jzdrs",
  "key16": "3cFeU5dUNeBbAsdoqNZgoXyVKe859TYnzBcSdseKKQDiTfpRWmocQTuZFdfDrKqv5Vb1ncbFYpe5fivj8AnDYzyA",
  "key17": "32yoit42PcJDk8KM8TaVfbS9E7SEtudDrzD7igKsC2Vw8QmLyTRk3eWvKd8oP8XJyHDQD9MKqAFHVbKKp8U2uwUS",
  "key18": "3fUrAwshc88nxi2EAH3ZFXpXvMhPwuWguWfRRf3Lyty8D1MVg8NUBSnNiURiPMAiJeB7Xf2TCvwGCdTWVj2o46vi",
  "key19": "3Ev5KfbeAMn8SNo2HfqsiropmPKUSC91sDguuw7h8xBcFRCQegMZfZfJe9qg64emr7rPf8MHV3G537aKZpJDBraW",
  "key20": "3HjQbozUiLFihVQeDTYCxiAv6s1ZxafMSgVkN8a75sUPjHqS7xHMmtCsYbNS4pqoiPyQFoRQTV1knAR1XGXiEWBU",
  "key21": "5c6VioWokHu6h5Y4vdvDvSDHAyrVBJkYyEQ1uHAqCNTjCBF7dGU2SdYnC6ctindE2Ked6NumScHkmvBhUEhgiyiU",
  "key22": "ctPifTrvJW18qzGvz7tUK5X3sxotnuEPUGFWFpEEBQS4QKErXcB1BoT3ukKtyisEr13qwaGST26TPk5xdXYDvPf",
  "key23": "35A9Qv8A4bXqW3qkMnAnbAkRURMMdHc1pGGPBsRFazBuGD7RSY9Tr36oXswWkU2KHoXWr16HM2JCMCND8AZuGG3a",
  "key24": "27bZ9kpji39M1SEXkUoWASHFibixcYwwBWZyEcbGHXPxc1Hoac2TCFeM1wHy73WdaNtRhaKW4ky8WXFoon29f2cq",
  "key25": "124fzhTvfNuaKQBiHXzev7bzpQLSLRxAHdkwrjnoVSzGLFvRq7X1BXEREx7ygoi97T4L3xjgeaQgaaB5ZmfVskBg",
  "key26": "2jiUp4YKmsnkP1yZzqPPUUKvSZzfE45ztpBqk5eo7jRVhtD8pyqLZqZqQHVSwFNAGjanr9MYAXRkv29YrX6P7qT2",
  "key27": "5CUNMPcQk1Z8SvLBFpr2NAks9vofjxZfWGHctDRJ15BbNhvZgPSWVMrbvaHLwstDngD2M3bgKhYL7j758CYYfY1T"
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
