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
    "5hGVgV2sv8Piq8Wd8rcy7qR6c4JaxEC9nDvsYTqAZ8pL7Y5QzUQcHLQ5RDBjQVeF5u1fp4P2FunoJgybBjoGaqJh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4c9hM4vdAAM5Ba8VR1jim56bzr8HL9ae5xP76VVFt6A3uowPGnnSv4NmmtEexUzGPqXhFc8jwKxw7nWoH7f9W2gy",
  "key1": "2zUZgqZxsDGwJmpiRC4EpbyTbtAFbnWErK8PUp8zEzech1SaMsTRstA6wp28syw78Tj1GVoxwN1zfwqkwog5CcNK",
  "key2": "3q4CBCBHWi53jTg9otL5dEPYtAiMueitRQ8u5CrRD4hbqBL5f9eDCFQGmGjvViDE3QFWpkwhnaAFTEjX8XCXqesz",
  "key3": "5r734vFdU8PnKmDc7LQEfmc3cfSrUg9LVd4Xt7Yxdd6yBGrNJur4PPALq7iNicZiKGBLGfPgc43zV9Z1F24D4gC4",
  "key4": "5KMXtbFgn2XXEJFbcfYGdETPmFxn3nZfPsSZTAKhQkWEtUctAD4rMqMX3mHLohXJviAkKgFUfNsbjuocwjrG1RKU",
  "key5": "39peKs22ioHiR7fjVsxm8yxyCx5XRtNAopCXPE5FMWUEE7r8SLCHnrTP4Y13aiKCKZSuUui8b7T8BvFKMvHs9PsA",
  "key6": "4fBt5rxTvtybwwC4jpsfTDZiyW5TgzxYJuKn2okuoNZzcdYp3btmGi56SvNrKpKLvHQ3umcP7cHtRY2NS5DumbHy",
  "key7": "5oiwN35pVC34UrC8tUrTbZyJKPrf3NKQTyZiH5dXc34SSNjiPbaQxbyW5WJN8u1ReAerFBPfEFxRuNCqV8btqZnd",
  "key8": "2n6uqtkeuhoDB1PkMPimn9BKXt5xYGrRjUGoTVM8haNrDxKbVogiKjBGvT9My37VuwW67gxt7PsQhShDKdqrna7x",
  "key9": "3F6sX4VoxYuu9vsTq7s5d4w3c7CcqkNU6hqu5WumZfzReov2hw8672V7YkaxtFrm2xgxKzRzSghgFHCQ5F2tERAd",
  "key10": "2Lnx4U23d3rdfqSA6pQUPkQMih8T9hJHhaGNKn9gPaV7xkGzvPdeXLqabLgFnMS6wRzF4fH6nXqbZTFe5oSS9kER",
  "key11": "2i2MRkpfJzqTbXabASZLR3cAKAGEYw4tSmKvr9pnhEv1EwRUui16bHAwRipKa3oKQSbcQktZf3QkMky3JVDH5jSA",
  "key12": "3s4xg41wht8kEXzF14YoTp3uBQocMRzFVg3RuSGqmDAvkfXuQtdfPZQ91UrMiGCCYxpXY2rQ17ejA8BLVvohPLhz",
  "key13": "MVWdBD8yohr7WAKtzQjRdko8w9Rkeo7troABjR87fYeZBWcsAsQpYJSwUMUHwRwu5FRi7Gnae6HanHV6Gy3iMn1",
  "key14": "5sR3fhLdQyjxVpnWj3qXxTsRxBLAFGzdUzgNzgHJWec7jqAwQo41Lz2rd4UNQixjjQcTNeCKQkgntLwbLbTGgs4d",
  "key15": "2BCRzWz6SGvFGXCrpaZk2VGJRoPzvkghQMio9WFmG6DJDEX1hCdLcUHgJ7GMhE4dfnApwisB1SoAmXt1ANFmFQp9",
  "key16": "3RiBizqDStM1YsRxz31voSA7xx6d2gnWSWQE2N95wTBrQFxGoSgfYKvQFDcHWrWfV7XwBRgXHakx35qnJa4ECBKm",
  "key17": "29U9nkGisvEu2hwL18SNcnSiEdubLqUadBGE8Fx3skcnZpU5oHgQuuEydpoFo47UQ2MW7cXZtxbopJRjknsCFLZG",
  "key18": "Ed6XFErsaoBjrUeHFZyNTZUJugpjqKLrwPhmcbagprWX6puC7PSi8L5f4FkAZsTRMVKNxEaybdy3FJq1Fb22r6y",
  "key19": "5vMDH5HSEfxMz79KSHhWncRatfYnvfRPDMfcRtbHh3eHbwFDjC7uQen5QuXoqgKQeSWxbqdLksW7SWviixCxweUg",
  "key20": "23Pp7MTXEAGZhgNQaqB5TDsgDxnNo9dZi95RRPgoCB4kMrGQpC2kyw5gTL2mz5BRC3mjdUA267zxE1So5iFNm46J",
  "key21": "mTKFEm9qroKsyj64MHvBXRdE6XoHn2LeoHREWwXzD221bY7ApxamcEBc3C5ParDU36RBPwcsFiBpnqgLPfTrfcs",
  "key22": "2YFnXTvm6EEExgNxX1YC1uH12YzG9Rhd4g7LwHnCbZLeYyc1TaJ475EBy42DQgUZMAJvzimL25ANHPrpPTCyqSie",
  "key23": "3FM6PPvGdtrUJH8DzhK7oh2MR66KdWRujNX4DGCXr92Mg2S88y319JTXYjkWnd8yuyC8V7B5pwLSdqpaABmVSxkv",
  "key24": "4LAi45NLcEtD9LaBzMxR1wVm1ZzCaLkipEmzhHSbKvuwacaB5s23tc2rcEMumm5Va8YwvH6AjceyFMiMiiSfmxAw",
  "key25": "zJi7rBrDXkjuBZXEEiiUmZJTrBwJp8Eor8CmfK2XdiusPv4yXBQ9AAdrb2WcgUdG42tegvtwCnrCzVvZDrgEnx8",
  "key26": "3vVz8D4RzdZZ5TRn7wRKr1pXcbmji78h5HtBbopDCsGh5cDdTT6W5subw3CxW6erFKS3YhVnmxtyThD9ME7MydJ6",
  "key27": "5mCPk6CXAkQ1dthnQsgc57yALmGaXCHCdyTF2exnD6fEHcBJZNj5kwgKGef34o5vsrtFLjgzeBmHx5m2kDfS6b4v",
  "key28": "5Bp2FNzbed61TrkAFdbbph9gbDsdE5AGjnbCtv28gLLTUZQXM21KKHmvBSm8DhDmGStTBNjYfXwXjq4VVJWvr2Rk",
  "key29": "3A2J493BPQMMTBH9aw6mVoStZfkiNqMii59DBr5N66BrN5mn8enW5MBEKKs3yvn7wJUZYtGijiZnAoNAsExSTPpC",
  "key30": "62Pe1HYcRhneQJ2N6YUUht5P1J2VTZje6vwX7SzZpwvguxnCPtK7Ug2aTf34D9rsQBm83WHTZcyaXFB2SGjf2qdg",
  "key31": "2kkNwqAWiTwqDRtZTdg4CNL3SqhvV5YzLQvzuubVgCpzJFXqWrhKeXcWqAF7x7xuC2gkgkNPcobd5fEKMWnawGMT",
  "key32": "4UDSCLjWV1kDs1Z35sAGyLPK5kryzLvqZPgPWx9DU6wvk1PquWQnmRcBxHhXxJcDW5duK5kRcvWjVeUzefgYrqwA",
  "key33": "4JkNNJiphcUVfffvUWr5eHEp4HWo8WiPbLpSfu9M3vDb2Mb3a5zKtyTDLGQhsaRd1y4zGFNjjaMMnh4FTmqJHPEx",
  "key34": "47MRYX365ch4yZxrcz3TWuE1YCbjk5APieJ3MdEJAaDBgtqHYYDRrKsd2zSkKJJQFPupVhEyWW2n6YeF71p1cjuZ",
  "key35": "5mAJzasyYyw8aFAwKkVT1romEFYiTc4xw5N4DR7h85bALqm4QnR3ZztgJ23w1Kdijtsu4v32r8rLpcZquAwYMMDX",
  "key36": "5QUFK5nHDJjcgSnKVNHaMPiZ3R34hbE9hD3XR2hUdMBTot9iMtYMA9oHSJJPrxgfsyKwY6BBokKC2aukkQfTAJui",
  "key37": "2t1aVM1Lm75NgQ8jqsVSbgdqwvjz1jLMCrJygJU5beGRsELWBKDvRTjgafquvv9SyWojoTR5CNUN6wKpDjRGwAzk",
  "key38": "3UaVaHCwVat99NLurDQp1sZc6Rn4y67Asf2EVEk4pPWuvYUQSWyqsheSggk1HYAy8PvSw8t6D88Sp2mp8g94GHPP",
  "key39": "3fxRih4UsEDApRa3PDWuDJvD382gMEAm97jGDCnHkfSVt8g9E3aAemMEwNPdFxMiAxPq6iLLNpungGcTwXxQeC1q",
  "key40": "3iMuJ6H9gkA4niquXV73vvaTwxNR9az86bnhxx72nSMqTxG546sMLkrMat2FdmMwK6pNDJhF31SQq1edoo6zLFtc",
  "key41": "5VWUVBSeHrR9gE9gvjSxH2fcWkxSxDrzV2q5xC2JXc7GxH8J9DXaBhAQse6xYz7K9UwnK7NX5kEvxra1wHoCMT8",
  "key42": "2r8ZSjEH6L2Y5hEo1LAM9qzYfyejhV4vdZAG96p1E85xhSrgewoUJHs6R2RksuXMQPvSiBBdmissf7iTdzMdE85j",
  "key43": "4nwQkNuFmgDGMQyp3JgNq9gp6VSaQmKDRTmZzZzENmKDSS26y8UEgVx9kNK4SCv59MmjyxvgEJakJvWimQcnL3xh",
  "key44": "63QyuM8wW56eWRrtufKqJDfm235H7ffid95K3X3QUWJsjeuLpH55ZPyoUpJtKn58m6VKcY6ZTGwPpWPhggt3DTFG",
  "key45": "3EqWaHPm37dSXtyYFuEw5WSnJNJoE2Dm5oiyw9em1ynNhSMJdHiKs8EwBQcqFCwJaQydctGANbwJsR7YFNGbQBsq",
  "key46": "3rGFaWZp1JoEzuavB4FgNMWX2Hmcat4N8vXqvzhvMTt5nqwukKne7MkP4JCyu4XLtZ7ACPXw14F2hicaAbeafug9"
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
