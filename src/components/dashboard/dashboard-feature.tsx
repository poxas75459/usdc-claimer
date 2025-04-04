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
    "Ujnxtc1MFcN6SQxUEkxbo8BFWHbCNmqryNNjVd2tRuhgECzcCHtNC6vtj5bms6qCZCSfqawH1d2JFfAZTNwKkBX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VxFzrKGE3yM7hk2fwwFgvmckXUMTDn2m65No6kvxh3m2hAb3WMURR4tvgoyDMkP5WJ94WCGn4jEkkbTa8x9D99s",
  "key1": "24yRG2SPCmy3zTWANGTSJoU1TPJWq1p6RTDHL4dRq5ToVy2qT4pA3sprw58Ab1XQfCY7FdCkRN8zq7hRoqWvWaZS",
  "key2": "o4RCrNbMsuzZfjJ2xDvYCM8xnhagkMTSnNnQqYkEXVqAivx4YKHDoMjpGBLwi1GX3F7sfEkNfUKD7TTHLE52vq9",
  "key3": "LqU1XxwG7qwbkAW1AdfyiAHYW3DMCTN1gNUZAV1BD8jtu8oWYsrH8N6METSHQueb4mAXoreJsUwfwgPShCcVp1h",
  "key4": "3USGomMtzrQ5i3qatetMbTXknys3DTjuWgUFvpV2e1dofPxxq8JE3YVnvNrjoNe4SuDV4V7yS7Y1BzoPVXvTNf6D",
  "key5": "5yM4riUNEX6tNfyBCPZkh3BKPkuq2zcfqkkEs9XMF1FwHUXPwE1x33NBV8G1i14HkKrAaCbrVpi1xzjQRyg1VChd",
  "key6": "2YFHW65GqpMiLKW6abtVJad8sSJ6VCg378icJh3RH6z8MNQzXMYZMzoJmWt7UxNYacCg6B3qwc9Hrzw6B7SyEwNj",
  "key7": "61BjAHoWucsmukUzYdGAvV1brVRovgthxZ7HkR6vm4ekCUEXsgGDZeqLtMTi2jjkPiuj3Z9Mz8jZwERuTq5AKdQj",
  "key8": "2uYqjiXy6pvBws1e64gjcuZAyGfZ8GMTKWJrbrBcE1hvQ7JKAt6av7j8xzpRp4ZkX8UJsMsuM3dn23iMakCSCjQw",
  "key9": "61trfsaQXTsqRPu4VEuCXikFurtBEkSbnbCZ1P3KN9DEeqZLN3JjW28tdxKsemmoEBCiJEmjD2q3dCG2Ayc7zgsp",
  "key10": "4UnEU2ACLXUtbAMYU6Ecf6qanDdtXAtdvz2Vh1yTvNmyFYGqgb3Gc4B2A4ZXwAiQBasCNJfcuQkHGQJbqjg1vvPv",
  "key11": "5EGp3zKADqhrLSjh7N43euagYmu45EYub5kaupUerrTao4pCZNHeiu5rb2uVd3hf5TuwwLggK4w3ey6p1PVMqHQn",
  "key12": "UzJEbF2hemjJ9hrKDENbYVvZ5AjPRvQSCsYutn59ch9H6K5dNKGtDbr4QzdspjJRgC7MCH5nEQ5jPgosrLzgjED",
  "key13": "5nAY2DazNWbBcU3cM7vnukhJTaXtHq9gtAHXQo9aZ2UyntFkaUwszaPzWFefWHkdnmLUMtVQtKzevHhnEWqMesCn",
  "key14": "51aXCDXfS2JSU35VUt73RihJvuE5hNXhUWjjY5sAgba5PuXmRuX4swSPMK6BVT7uoaaFjr5mYCb1EHgWh5AQ9EFc",
  "key15": "28gUjP4ckd9p23QQj4cstJYsN4iQsx8mzBGReCFLEDn9ByuHs1kz1KB1BPfRDKU6bjAyrvB6xrWLXExSuU5Fwr4y",
  "key16": "49nmbxxqWSYrsfEz4P3mUnxm1jLmHZABMcnJWiBz9HTvr5ZTDSxJph4UBXgUmxHMC6Fo7tjqStig8vshAK7fgjBo",
  "key17": "2WGRFd5Gfs24uVjWdMm7yhAXzUG9Twfxo6fBzYDTYjGBqmRkEJmUnM7oX74KQ1GPN6EGHBwFRP5oBsZ428PkD95p",
  "key18": "3vHSKLk7P7UdaqdRBic9CYxZodqNzhN16szTrXEGaYGUcoWSpDDtUHqMYY3JnqUhZyCDo6BhdGEaeZdx6dtYipxo",
  "key19": "u9J1Sjfm7u6JSwoLp61Mh4JfPB9t6g6B5QRzBn5z9AZEDhvWp8Eb34WGawAZhSBNZmcyrnvrsU3RjMUSPrXrYwi",
  "key20": "4uSPYkAu1h6G4heeFzqvJNYdSCNJsisVvBgwTfuKnN9x9LX9m9pENd6zCoN78VeMD9VwAwRwMn2iwjnVoNXigcPa",
  "key21": "4Np8CeQrVBwXzR3Ze5eYoMRvXxcciYo5rgu6JmczsS3gfQhCa6jLEz2ChuPvCy1vxVCERPXVqP7wuQiCVo4i9cjF",
  "key22": "2xW1p4yRnsgKJnzcGaoBGmWwEFK6gh7wHs88YNKuDr8miRJCV7Lum3B659r3jBDT8TZgwBTq8b3YofezJip7qqBc",
  "key23": "GyWfTQCxmyqEdvVDduac4jYLEJST6RkT4toLFCTnYniq6Td4jiWsg2RQndwE5EJHVknEcCzbeycxDfv3xVnBumb",
  "key24": "5uy6XtaEgQcGKuSmRA7mRj6wXpesAiDn9LatFJwpQ3GzJdMWD13UyRwQSqBXiGG8BdbbdpLzsEfxMZhJzChTEgWH",
  "key25": "aJuTC99PUbb3cSt1jVVgQQqbG3nTvFSouMBAGYupTKhk56UNDiUvqCgZwoaRELCDiUFtqog4PCvStKWNJHiUPuF",
  "key26": "3soK7KrYhvKnpNh68SxFt9Ho9xSSfNVoxH8PoniaRsAuP2fxR36rLqJbkNjmMkhBUt5pZeF6TX1Cy9mGVcdF9bR3",
  "key27": "3ahdhaN77rnXY9uLCJBTbQBqxuokMoQ61oFjXhcibDoEj5Cqv5C8G8xhYE9bXBfYf1cj2d7vXDvu5UxhDZ3nhkGf",
  "key28": "4xQnE9d62RmDAqxedC8e41qujSKE9HmsRRL5mpGiKyufy4dHJqFwcioaYSFVkpvQAWi9f8erAajwZXUr1LdU6GDu",
  "key29": "36RhBcybdhW3MQnc9kqbNWEbYxC6L3AZpRWtdW6QNMopa6fYfm8TWMKwyAKKovBJkDDtXqrTuMZJFtxprG3EPXuE",
  "key30": "2TVJa3NXZJqhWp69KdL4S3kBBzp7M39asJUhVVgXaT3khinbzhrPctTEmaNFvsDTHCMSFzg8eimPxepdqK8BVkW7",
  "key31": "5W8cSL73LZMWKhnkKUzx7j1Vcckwhatdi2ZWjQiohuLvVRgo9BtqksweWQVbWGNP2DLMypidVs2s145EDhCapSDv",
  "key32": "4SJPngx9PdWCTZ8Ya2sZXmSoSB94zALx2Yiy2SowggxiYsCG6rLBCRfKpP3pDJBt2R8vvpPCLwRZPoTt9fRFaE5K",
  "key33": "MZ1Y5Bm7tRtum43FSuFUZtCkDa33HkwuuGLeTFFMtnjGbDdyTHGSPUaJm1RAm8MFajJ23gnLmGMW4h96Bifh1Tr",
  "key34": "4AbHqutPBiU2vgYag644rBiAwtBeoY35r5ZfZeHAF9zocTYPESNPtC4jyvaD5sK5x2xAzhDFoEntVcuBQgu7NnPz"
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
