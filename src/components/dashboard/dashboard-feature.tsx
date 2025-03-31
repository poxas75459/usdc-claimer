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
    "3T88pvo2AypE1tECwFbtmzNov4YcHFrE4R8jpjvZJH7oJSy3d35tomLfMnQbeL6tR5ksf8ucuJSzMpSVw86utYNm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QfirVD5CqpME8RnjjyisLkjStQSAk4Kw1aZ1B8PxLyma3uT757ePHkoNLDV2qRQMmfkTq5CD98JrQtjFuHGJb4S",
  "key1": "4Bui3sVAgx17CjWs5TWSyGbLQ14L5tjXrPLZ9RaexaGqkmPGqYLjtmDEgU51HS2PCNbKHxLCohknoCVcp3hdbi6w",
  "key2": "47fi8seeCwN61YrXveQDcXd8PHFDFSqCYvWFWcLRPABU54puuFFdXEUfpUCojvjBcwSCsdSurTtaE39UtMP51c5c",
  "key3": "4qo3wAGQCPwiiMVLPkVBAm6WJXRH7ZP4mNitFXyu48p7zi21iULMfsap1AwStrNCSKpcyw1utXkyH6KH2o4jvtcw",
  "key4": "2a1wQ7DEdRDAMhyoxmAqk7SwGJ7SJ7voRuRkxhS6vwzA7koYdK6vtDF4mixaT52UJkrU3sX3G5Eck2dZYUxMVX3B",
  "key5": "5XTRnvGnx22TaFZsbAU7DCY69FotJ8M29gQLuoFWPVkbA3LQXzazTZBJTQwZNjB6pWrujjQFUTzbw8pU1DzaFrX7",
  "key6": "537gtg7sKYK66sDeXjfsFQraE3XPrpKE4BF3uJVAaxCEZzsqz3mcjWMbtwU7nFWdxgNfFndVhgf8A34Jie3RTGhx",
  "key7": "X1p6pH4HixG4zuogsuUPbNRembfuPxQ48hzMcxpHqtmFtDs9L4t3EMmjNgCfunNLPrGq19mBj4UYrQ9dtiDVioM",
  "key8": "41rEUNGHUF3PkXWyotMEcWi1RC2aeXVewNPcjFkiAYai7z6SMxziHB6h5wVjJUDsL691S9qpRco9y5Q9Xt5jygzv",
  "key9": "48KvuXm6WLmr19XUma2gG5nLSfVft7TPPj7dEMAiWo735aCpyjvWEGNrKSogE1t2sCpDzMJEmHsgw7YVfxrk7ECv",
  "key10": "2j4K3V3i93e7eKcBNzi6SFE5rU5jKU2GosfRWuBoNgPrPYch9ZwBZGALTLUBUsPy7Wg4R1fyzAhYzPCuDr3bfC7d",
  "key11": "5UvwC2Ma2vmxd2bKB4P286WpCAm6kcuxFg95DHmAJ9ShzKy9dTSpGkmCnTCs1Fgvwt1yLZYVRAiDyYbwrAewBjHe",
  "key12": "4GJJ9RoREAw1S2YSHLUd3iHxzAaoGCp8jLbSRSWhUqgKWk8PBeUPQUF15yQHt47Y3j71iyLsqWpYdKhVr3dbHorX",
  "key13": "5VdWdYktGkReLH8kHaBnCEWqQ8qgybN4obgcnDLrhdGf2yT9adX3HQMKjoB5kGt4YuAqiVrJ8V8YyPrSyWtZzfx8",
  "key14": "4aDJZvPSxXrzGjxJj6mmgziq4QXp1xadwFmn2MxxZTrv2LKaFtS3kbPHF8DeibNbZ9XvuesTxUH9zGMAfej6dhp4",
  "key15": "3pzSzii7UeEoP6KFjo4RVhwaGEHrnRSrHVMEEcxpeLCrEhxy66pGeuTqZpHVjqRnQ2NjZJ7frBoTJQfcjo6e7CNo",
  "key16": "4JweQmxdvrWprDgKnEst99rNBUawe4gzWdkKeTkxQn6K5cNnoLhMGJU5g1QhjSXBg9zGPSdScizwY69soNTAn18y",
  "key17": "5TA4bQYXssNnNwphGtAMqBR2MctnVd2QK1FVm1pebENihkRuHiuJqXFUSSt7V4kPHaDNf6KvTqhQmRKAxfztxhVn",
  "key18": "4krURkVcFF4zTZ2wAA1nPWiW19CPGDeiTKXFMzwJEf1oD5NN7omG75ZvaaHs7h9i4MQYFfTdRDGcTRtjudhxYTs1",
  "key19": "2S3zLyVVJdx6hUW7ktnEMFaBmKkiB3Sb27DryjVEeKgDYB9ziomrdRhjwCX1tKL77avn9eT29XHs2AhpXo1gv44k",
  "key20": "5wWYoqu5cXMZEpToVTX8jCvMpRvg8b84Jpu5SqfxcBSRyFDq2B6V5ifRUv6KWbzubziPh6Zmzx8FLRRDBaGnCPH2",
  "key21": "3AJfUEBgyvYUdECDrkXYjpY3oUfLxGJyzJ5imXv7iVV3dweyLsCZCicZSWukbbqtEtQw8VHg3C97L2G6bKdRVPWN",
  "key22": "GZECJT1JwFMpN5ekC9QVcqUmPoSK62s7zAtCweB7QDvkiZtJpmxTkFWgcqC2noLytWcyfLLmNUz5j8SmXBrzULF",
  "key23": "3beEtMonJ4Hd9sNUESgg67tNTwjDMz9x63KQMujj9sbqPMcPdtdiULbHQGxw1pGqCVv84HatM28paV5A6bdDD7sF",
  "key24": "2nCe9c62pxVrkDDzRgHGSXdPxs5KbjYZGDBXLjbewsfvaSFkntDB1Cr9t9ikWJuwxMox2eGaA8UThSM3SgXgywP7",
  "key25": "3aBSEWp8i5X4twSwHqKMSLjfgxGEiqtGkDomhMJXZVRcCTpNEm8xt7C2RMV6fYtijSxLADj7MJoigPHAhPMRGtPf",
  "key26": "2UVqYLa6Zmc3sPcW5Lt9ungJ2H4JUtnAiXkFVucMKqviogZ23eMBscMmaFx2o1VUuj7GHZxJ8SJNgbpCyVdRr65z",
  "key27": "3uCzs88V6TsnKr64mdVYUJ21D2yhS98zHzbp56eY3k3AbnUhQxQwHpy8Z1FqQFZvpzLszaMsPoj8Y5TeHpo3x4Xz",
  "key28": "2BGnYeUcQ6yQ7xtag4rdR2UiCEAZMnCQ5NhQ7oZodsnk9XEK8HdP9UgZo8x48W9he3nJf1dA3nNs2R4Q5S3uqtz2"
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
