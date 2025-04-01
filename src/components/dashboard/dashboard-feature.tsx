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
    "2Lzse45mDgrwXeNpLpWJqGuAB6m4dmRn5tU83t3gjUTP8FkBfoWyaXW2mSwGH4uiVQAignoHhh6vcUgq2zHLjcRe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ciCZBuaX8tHqCbwrJnAkGPH5ic8hYWqr42De9APxmvMxwrzNjjziMTJWn25G2sf4WhLeQJjWB33iyDFHRxRQbTz",
  "key1": "3RDevyjr6x45JB163sMueRCg932DGLcx5BHBBjSSsHFFV2XhRX9XT8t6xHFY2v7QijwHkrEEfn6WKYjFY6bVcrci",
  "key2": "3WAfLK7Suo1SMdvupSPWgHfeddjrR5qC87wpdqXokmmDb86QGAVHuAwJG2vmgRLSnfVMzFKXojp6jBigeWeZENyT",
  "key3": "2HofcisWjrBJaAMAfxTPQGHPZPGd8uAeVQdC17jSe4w4w4Dg1fr8Dtnw2oY3BuR52XcPUmTWc169sR21oP17xJhD",
  "key4": "485PU1HDDuuMTvswzJ7KcF2vdcfaNSNioRsSXMrWoDWLMEiL9TWrt4TTuF8Nn9g5ndREVeNYnMLiYTSYHo3rabXH",
  "key5": "J9D4MDaKbzRaVhhNN1kki1CeAHsdKWKcS8UhxouFy8NFfmmPPLyochemycgxQNzrudiKi6bAcxwqqDeEeg78pYY",
  "key6": "4LFhypE7tc8aXcyQHSoRreHmMVr8pDiUNG41p9cVCSmCLFN7EcxK6Au4V7p43VMMUz3XWdV6gXLxuPcV4GKDPnsE",
  "key7": "5ewVbEJ771YchF8F9iwmKd4Xai5XcXBK3jdKWk7W8LozMwAE1KHBKV1kDiLHSJww7uy912G4WYmR3TbLywRp4X1T",
  "key8": "4HiT9uPHbKJLaRnyZCL6Yhg4kimMREHdELyakEtYXYD4x7RQga1a77FdmPoPQLvyfXRrh6gFZBLQ7waUfMofgtd3",
  "key9": "5WHQQF6Tg9k4sDEWr2fVx1EwhEDumQgowfrybi1xqimw6xJNm259yixYB9rYHC7dNWqgKWeaJujVD579eFPP81gw",
  "key10": "5ZVrs4KduXU4TWtz7Jj9EWHTVfUBV17YDjTAanCuFJZqM9hSaaG3W29Khpzr4Y5LfTe42BMKRAHUfcQbNbgvjNe5",
  "key11": "dLNeJbkyZPqEQ6qboF6h1q3gKgF9hXenxCJpPtpF6K3iFGttT8zwhQ8rGLzJ3JV8QiRgf4LETVjpUXXuq2QG9Mo",
  "key12": "4XUycNhThCowkBSnyo3bZUz24SdQCwnko4pFYmZpXA5KZqAEPM93mSNCJrzNCUSegQU1qnxWzGtFYedXR5VaqrZS",
  "key13": "2ZgJX8PD7nMYzZt67tUK4BCagvRQLmrXnwthAoAKKJKdyaRVcUL1BseYHGL6NeXoAsVg2wSuYSBKhP7zX8zkiZPV",
  "key14": "2wnnxKbW6c9Jr6Tn6Re9VTRiSVfDwCMPBNLHydVWV3G3zTjWxL9SFHWginv3EYjBmLwf11S9vHe9N9GQDXMVGYbk",
  "key15": "5c8kGiaER4eqdCvpX2QwCMHysZrbvvoeg3f7Q6ptSMT2myMi3nd6bbWfC9EkeM5LA16F6BCWUNsFoYs7JKDmDfyc",
  "key16": "4BYB3pcpVmoiaHqqMUMfC7ABK8h4KUqp9obLmdUfkAbrYVLT3PMzVg4AjkEwGnxWUL9HGA5Wj5aeMA6qvjC1gaYD",
  "key17": "MP7ecf3jBonFEgPGym1GGxuWD32gy9A7Bq8FqFnHMZerU3Khsy6Xq6a5a29pxMYLwRWG2UUVttPDU5U9j1fbzCd",
  "key18": "3hFidy6mtHXE821HPYw5p2Kr26i4nnVgerFGwhqwzyv4JNadNHLAeTGTpZh99Sainj1LiES4mJUFLbsnD6H7Jazt",
  "key19": "3GBQWPm7asHuvp7prooy2B18UUJkF6pmD3TExupF6VDZz8SSE9GQRVtELbeoKvhdah1yrUQCznJ1SDV4NE2auZJW",
  "key20": "3WjmyvS1Gyw6Lx8YSETm2VSYfqRFQ5ni5Veg4K62DErduPthtJCnGSQas2JLxpsUv76fCkdjq2FssSJiDM4VHsLu",
  "key21": "3nMeTfDiZaTzqZka6dozMdbtNNAtLHwUcoqfMBULSUMpCF9cmR6w2pWwoQesbeACMAT6EVyFqmgEXpizCwGzHGyj",
  "key22": "2RiMvx1vNbEwjtRjUo8wxzbJ8HHjda45KEbj324bEuFp87concBvn9GtNpjdo3KXdkKEPwmGFLBCahNBVhTNoExc",
  "key23": "4dNdvxP7g6uprzcYNgYrTjuJMnFEftvpN3jGq5HCHt2d4kEZ4DZgRGfxEiW5TQwAKDvYjdbe67f5tVW6nP66qiVB",
  "key24": "2cUHVeBh2SwjSHcx5awjTEPfiy1EugdDVpe2fNHEVAX8mNApdTtbp481hwQxhZq5nyENJgywhKku19sikp7zdCCi",
  "key25": "3n2wgTwsmWWunWgGy5BGrUYCuNjuzZRt6YQjGnj5JMuKrTGCmocg164eVkGubKw5dmBNXiXMVUhvAtvbh6erBJaq",
  "key26": "3f3THB7P59RKWrtfjxh9ffsQM4dywFuwS7Je6xansppx1KG9i48eT8BQffjev5UC7RG3hwiyrmNbYnxJTQFxqbtf",
  "key27": "4N1FtnRjJ3anC5KUUPtUEkxuS8CDjy1EGmshUKWm8RwdP8bvtXMuLeTKymBPZzZ8RPrEAgoxgh2PtAXj4DRhT8ut",
  "key28": "64TL57yMpE1zZrnTDmG9ep7AJau69iU957YRLWbtJ6mfuRpEu22ySPPjGWmDHTaaAqvfiFCcuZrVCEwnJCjEPEmA",
  "key29": "oaGsk4H8JBkLKcU2mc8ncJA1MRWxQ9vdosF8ohUzAF95EN1vUZLUrZnswfnXoGwrYvBFviNPsyUu3ixC8JpVwQc",
  "key30": "4B2iwqHvAcTQsNavvVRZ3tpxbVJ54yS5sxrkqTSMZXnyyKQGy1sRHVMVGNuzFmgf35eUwPnWytEkBofuAs5B1m83",
  "key31": "2T7U5DCh9x6ovaUWmff1zyngHCLrnqKW4n6T3ya6tt3i46mjZFn3vkH5xq2QTq1o7GpCN4RfMSmoqMgeWF7Z6yYf",
  "key32": "mT9pcUNnPeBqGf23xhQPvJmBEXsC5EPbavXT2K6Beb3FQjTzNBZKjhqQkAa7NayxAML7t2j4kAJg5J9APCohiet",
  "key33": "2CYZpas8rq1PtUfzCtz58MjC5iT5zAnYYNvwo1RnCdwnLiAL9wZzJyde6MaeKAFbwPgY9e4mvye9LcZxh5dfARH2",
  "key34": "45d5XQY7FiQF16fVTGoQXFf3dTT5PAuVibR5pmmLu36majJNUNZBUnT4HDnfPW2CEcUNFbCX3shH1fRidFPt7xbu",
  "key35": "4UGppNTWXoFUXvQFMFe4Ev9QzdTdoXkSmne2zjV1WVxdc1XhXpfQfN2r6hpj9hZ5UGvUVnspggdVppNd9gq2HdJf",
  "key36": "2KZuhXUsvVd94MuX84AUAqbByTE8oxEipYCX4cYtanZZB8qce8nW1dcuWXEDUkCU4PFsiPSYQvUvUBzaS88GswMP",
  "key37": "3DunhJC22g8amiXBi5CB2UpT6dg4b6QKY6cvF9iXUH76yrih6m5ZgcfeVRMRfcovC7ad9HasEPGDgJxZqoXRErU9",
  "key38": "5Uaa5hTRkbQAJ28vUBQDGDMJvVBB9ZMaRS79ioAr7K18Bv4ReJSGM8UEzKDNBNmV7p1rdMDJU7hTSTiox87PJKz6",
  "key39": "5VBHBqT8Kc2TgwabBmyNjz5Ke1q2hmGq9jfQRzab1dK8ZMxQEpDG6bvQYPwBc1cZMWPU6nHB8Z5PUoeZnnZuxn8y",
  "key40": "24vbWWLb5UxATFico3Q8QSi8iUtkGZ7B8SnPm8M85qNz87pqXchmpBHLxYqboGexUTDftC9PGKcpFdUSTdvybFJV",
  "key41": "4Y2DJvN8wCZhb8u69s6edW1s2j9qq2kGsmFTr3B2HFc5eib5k41mKfo6g81LUe7Ax2xmp17AznzYfsqyfikrLHTT",
  "key42": "3ca8EmETkvEBW9Kgw5RVU4oKAJEPsFFZvwqe66gu6mZTt2HZoueW2LudG5rz8gkpebnC5ZerSApWUFiaWyWvdtvT"
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
