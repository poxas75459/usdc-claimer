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
    "3UJwZLTxxU3yYZ43X5neD9magrGF7WtA3DqbXc5KyPNtPunGENTADxa5vbQ7LUP9E9V8xorsWFmbUNhZzYJnnjwf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VkXNDsnN9zgCMhoJoufPem9gEayALZpz8Lx1hGhEVpVhV3nRwLCrqisTCubrb7TQfDqCYzPqq5Wa3B6UuYobeDK",
  "key1": "zbztgC8deb2BUReA4TiDLdUBjWhHNd6rFzyMhoGiaJsUzLqkubooqTpYvUx7adrew7Swjinoo1VFPoWJwmFAgcZ",
  "key2": "2gVaSHwaa5QuW5Dmd2k5zCo3PLAAVZNstY2DhhKeNgh4bmGBQaTKttxADqLgguVRFJnmekUGAUH6No8m4mvFcqbX",
  "key3": "4xMA1HTtdKQMEsQfKx1TRCQyCfKWgLHYHc5xm4rKTtG5NuYrnQp6BVzhykC2HLqK93dHPtMUZ4uhqF6d5RAKscHX",
  "key4": "2rzYiq2W6KfDsQF5WKGLni2MmRRkaZPwZbUSNBg8SfvCQoudiPAAf5dy9D8qj1HGg1wEy4gCrkL3J2NvUqwMdjxA",
  "key5": "4m1ackRwnkzRwaZrJSMyCgkG7ZTMpEwf1UKrVBRj2mE47gJK2bJGey2fH63j8seaS7SkkTccPitRkocnwQs1kdFn",
  "key6": "4uJkGoAXxE7oiaBrde5RVEd5ntv5bWLjoutMV6agztLN4GiuJuaVCM6wjmD7hrGrwStb6d3eyXQky573d141jM8T",
  "key7": "4QegRJ67fhWD31svnSP5giR5weU1uU6B2sFegCvm8SBjXYA2K2Psbiz7KUR948kCEWz3TBvAuspz9Pr1Dn8hmJdx",
  "key8": "4YoKdcHWSmZiY2LqfJtxQHKx3nbg69zNc5FfzKxEh2oS7acVAr7beCdFbvzBJoVXGoEfHKwX9oTtitK9C7j4xpQE",
  "key9": "PD6iG4egtbiv3JDr8HHiQnN72c9uAFD6XRc14vGDiL7KzrbrffjtdQA3ieP6LYV1299wtVEEic7UAKcBwHvih4S",
  "key10": "2hA41ni9Us497ihgdcSz76H1uGJmegbBUm6bWsbsGpBWWZDLHktSeqrVdHBFcu14VYpU4BA6ip7JZ7Dtzin4J5T2",
  "key11": "Jg38ntyAjkD9zXeJsM8Gq8y9AYN88tjiKWt9qgVkBfVnoHz36CmPFcSSNfvAsBsxGoZVrJHqRewExsptMHbC8No",
  "key12": "3YDxT1GS1F2uzwtQzJXEwYuxPj9jdjTcW9TWFZTVxgJ69i6xitJse8vDRZbZAcvgpVsWZJaa7AVGy3uBNfVo5PnN",
  "key13": "3rTgxb2t4zVMqy2xHyeWEcQ4LST1kJjkKLGgo23xfYSz5ezTRdPoMgSzWzL5P3XChE3eqbBEdw46R9U7hfXRRCoL",
  "key14": "E2768kw9TrFYqvEPeJMXAhT2jCV8orr28NGXEQLgdgfBHhB5pHmPSigc7m4HrbJyWzvqDRe8gUKBELLxaTSfWCq",
  "key15": "4GhepUrPfy34uZ54GKUvyEWuP8Rqy4Lzw26z7PAG1vLmNp9AMse1ozakxyq8XMPdQUXjZHRprbmJDWk9VfJmkgZi",
  "key16": "2g8BP7g8TMNFqjPcvBG9Y6E1RkwerCLhs3wzLupyT82pwiT9jWaU5gUHb6WwW1oniTJAwknKTH2JtaxNE4hpasRh",
  "key17": "3fqMBkQYMSjKrG9rWL6KP7Q4UZo4mD5rMFMZPUR9ZcEcM5zKg4FA7LqD4Q536d6kn24P9JKVqWtF6zYemx62mCu1",
  "key18": "3mKKXvDbQ8dGwShJmKt5pnLZLRMwaHxLc3stjCk3KyXLp3BC3uTe8RfymWd4cEou2ioCCmxhJPyW1JcTFuqpq78c",
  "key19": "2wwo2wgfadzecNUnutZXtnq3gSTV6wzBv2d7mDqtzv8VkuPzc8DrsmwGGhwH3T38vUhBCmvbzFEixByqw89ebsqg",
  "key20": "2mCwYSf7CpyZeueW67Lq9ZNya1p4Vy4eDX851BRzzGehcYFopnswrn5Mvg38uxRb1H9XKYd3iPAmTt3bKYm5m3f9",
  "key21": "67nuEPkd7srxevbUEM89VWDe4LbkFe3gG5hJoj653Q2Wi9Wa6iZfU8MEg8hAVS1XnGiV1x5sbyoCEL6TQ3th9LN2",
  "key22": "ZdXxUWsqC68zGvHjo1UzZvdLTCdhaJtK8ZBWoJ4i9hdw8dsHF3jP2XQC8FbF7UHJQBu5ooJD59FWYMVemYEmk3V",
  "key23": "Ry3dD5mXhPmZ3VLyTSyYtMj9gT2GzSdvdVJf5qKgDpZD833cHKNFcdQRKeNm9gaN1gCWZXevPtqW57ZQvSNtJ8h",
  "key24": "gvPHMt8FzeypyTXJgGAanv3APq9WyFQeYPVL4XsbgoaFz1McFBto7DbEy1TXwN56czmHnoaN6FgW9P5dL9vj6Lv",
  "key25": "32VHEfYT1Q7kYa8z2pnRjW31txDHVh5P6VBWX7NRHrTDDrbAMaj9y6ATsj4ejiECUV96nEoNxD1ZhFt52dFuCV1",
  "key26": "64Q17eVBU2rrJqJMZts5LJuVaXUvBLB7dDtmKKq6xdUua4mY8kUDUdQQ5tCR63YaEDDAapQFmn9xWUFP57fEXv4r",
  "key27": "2znTsRDz5yaTsNTuhsWk5hjacvZ7f1rFDqUYuitXjbDbubZv8YHFCTevDjJTMovp6MXyXpUF3nBYMziFYc6WdXpS",
  "key28": "4V4zfW4iSYYfGSKHiDrpswUHXWREC7LC51jh2xps4hwr2EHdQY8itKTnAxBRgxhsqxyDxt54j7qoK36hgNCLyJCG",
  "key29": "WDJwgETavLAWFU6pTvcTe9sLd2NzJAtgwrX7oYk6dsdhxHmzaffLhFjt6jS2X48uWmpcuXRTtj3Z1mRVxfUjHyQ",
  "key30": "46p7RC4jWmPMqpu9MTZzzVCQi6Fhais1rGZRWkG2qd2p4kptQ8ihRve2iqnRRGXjPCEnWdfGUfGMBgJbAZ21i1qT",
  "key31": "5XtKG9y7ypVbp5Wx3qK8wUH18MtvM8RQpSjN9H8d3Hre97WN68jLAeYbMmZXPdpeNn6aWTRUvYVX1sxjcCNu6j23",
  "key32": "2jGzASZHSEX3iX8bTskdgssjpAoQiFq4zoG6D4DoURenrhRT6AuX1YRYtAxJzas9hfLUK8ZqqKd3aa5chTbg3puv",
  "key33": "2JPUhPY6dHx7ccWRHtXp78ViVBzy1hodX2ZpdAydoRdv15BiMNPpAGHUnaHSLDqSWDuLk8B2jd5LvN1FyjTLpLWW",
  "key34": "MfQtH7zjHeQixP6N8UnnVujr22wyyMAhUTB3meojVR2t5CpyR6VqUyaiJAh5TgFHTnKBivvub5LfsDjb9nNUmnF",
  "key35": "45PPLTYP3US9xLBX1zUHz5HFxx7JaKfifWUU2xCtkjSKneGfgMsS8BepXN333ufPmWtEWekNs2xx5Y2Mq3VrpGM6",
  "key36": "3XhgfkHVQiQ6ae6gdn1BjgC2MwrPvoEFvnMUU2MmkYcriTefybfwyowPdEnGWBFCmYuDwnsHZEzRNjYQMNfDFy68"
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
