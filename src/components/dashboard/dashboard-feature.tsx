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
    "59EiGF6sPVvkNxC5sQ3MRTn9Hb5o1Wif8qHkxS4AkYTyfyaqgZbLX7BVMCBJjJbu4HRu1UXPouhZL1mJEt4YNQX3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MKXm3E9YcmnTZhGtF2kHFWznwkLUGHV1bVLbYoK3QcsrucMk7EcWBcCWdAvMvuG9eBSoMxfzsQK3UYEpKFg78Eb",
  "key1": "5DpNjpZvnJXG8GWKeLRpuwRNZAarednyz1gAe994vUmthyK11SuMsh1Jh6ud2BWHsxGdyGzHa1PgxVickKEuNiTJ",
  "key2": "5wSpFSMX5C9uWFP8gfx4BNd6iygs1sBXeHmeYnLM4ppYgtdsjhkfJFiHKKqFGKjR84JBxtkjrcF5pEF25KwcdRaA",
  "key3": "2YWZCwjLrnqCx3ZNKn548FvWirdsoQ4UxbJ6zJCoexeC7FHUnfBVmgWQDP6v9qeeiy4QmgiEfouinVwmNZtVBD5V",
  "key4": "4NW3VEHc4Hn4iZUvQzYzQC6eJ4rXj98rxZ3FC4geVsCyCnr1tbDH27ZfwfymAMbo4tA5hQSBtzNUhDLryLZWysCh",
  "key5": "58z8wAYQd4njoh53WE1sSgZJMjMuzM1ykCWc8nmrjsdViJKEgBL4m6MGcjtdYnrJNAbgrRQSaLBmMJt7sooWhscY",
  "key6": "3VdKB3ynQTYKpxbPQRqHaSecN9Y1bQNcRFAaWRAvjXU7DavqHioaE16LGuBY9TT49bk9rc5e5hBnzKQraXhM8n9b",
  "key7": "2rahLhrNfJdyarbb3ovLUuvub4wMt4uwtLDQ5r4jPX1KuvARCYQVHS1SSznCFBc4e7K8TovM7dtDLKbqwfcGH2yZ",
  "key8": "3JFDkYShfQyamWpJmPTdcPycRU27PXYGxvQVxMKgBNBXMAA3uVcfVqubcPrbr8qc6SeDH6Ku3qtcVa8wvpqiXF5o",
  "key9": "5Wv9xQo4JijvxKnveeUHEVVpmyKDd5ofZTsKaqzxyRafeTg8hRNm2rJwpqJ12hrcNpzSRUTXUyFuS7zyFzU5i5Az",
  "key10": "4CjiTkQxFqaqtzxHhMRkqLyUYJQjUJCtjhAXZXeDfYoXx8NzFv7JvRLHtY1fD17kSNzWCG8Saf5qd4ijsDbnxV3P",
  "key11": "x2TCCxVxCfDrEw2AdLEvWzLsdMxqJmmvCcTKS2RnGpAoVmnfpVwgG3iT2krnfKnUKERQe5Hru9nmNc3vrxgbtyf",
  "key12": "3cfn9djz4d7PMj7Rnp2HkUyDrDScHmzvDvWHvpVRq5M7G6sHxeV2wjAhAZMk7AcfR8pQjtDkYd485Wbtm7bVykPS",
  "key13": "4nZpFp5XgTNsBnjZR4KJ3HanDzu8zZPxZWvCGSYG6tNHCMEk2eAnyZeTua8MSnU7ucN2xmBKvwWtd1cKZmheraac",
  "key14": "5q9ZxPXqMNSMeaaij6CWSCqgdwiiNGGdu3KTNW486ULk6jTT4AMnKmEfFtHusaBCQyvY1YZbNPGkowy6J6VVjk8r",
  "key15": "8VcuqEcDJ5EjTgE4nBdweeb7xNz6m6iGUrZdfZpTVVCjJ8SjGjLumJRrQJbDigxVxm3BzbosENwHA4SXekvSf7Q",
  "key16": "2HG1TdYwfAHipnN4qZrTeaCj7EvT2PTrCAjm4MaxC3BQ6p64A8UguSdxAQULzJqrCfvwd5DDDFMqxpCmqaCz8xxc",
  "key17": "2ZHACf7a9QqwqWgwetwRiqraHZVbZqvWbCFSndACQYnMNX7wDFZ3j2zqKK1XMpidghdUrCJwAceRuypYSGDs2ndY",
  "key18": "4PWx5ZA62GcHu5XZM1hG4MrxSmQxbhk1kj7SjpGuMjYg43wh2Jyrxg6jEC5dE25YiscLfP49LmXkm5K74GJd3c8N",
  "key19": "YQnZ9wW1fkVEuBhqxtSyhvSsUZUpdSnSarzqm1QfEzzi7BauMJPLNyqVvLSxF87hAPDkYhCohwDBxrWDheyz4F2",
  "key20": "2U5HANxQj8wUk55iQvQPRZRSW1UM5E9PwZuHrRoeS7Xgc35Gp3G9DcP2cATnDEip8PiuWWUJ8o5wz212DXr7jee5",
  "key21": "39f3fhSqpEbZU1y1LpWQB8PXUfeYdAMTD2Kjo7fBRzxVx2AAcTTYkHtodHdPAwsAHBFmmpL7PiHLASVfazpMoiN3",
  "key22": "27fs3c7GqaWGhwrYR8w5tpeWFkC71c8QPG5wdQMirwuZsxZP2YdaDhqwec16zKQDniSHRepegWhas385zQt8vt4b",
  "key23": "5g99NhgEVBtxSsbhX8pqXWzSpAgvUid8tibgANsBcSCh4BuvVP1XEiEqxVxJdmVtF27mGSDmbPrtJNnw6nvgbWpi",
  "key24": "3o6CBL36k2imYfQJmpXQHdyK4qYhxS3Hrmof7FEXandLVk3XCN4ZuadjHtLei626dtqoVqgmcQsqJUKuCVLzgUEU",
  "key25": "5Roh4qFxYuXSJJkMXwEDJcJyDYC5ri1uFrmUQGRTmMWE9L31kD5gwbER47fjMA4ikm5oMUSQRybXMMRFpHUJUEuM",
  "key26": "mDuz59fwCLAPx46hKQCxNy1f2rb1bPTZMivP79youzDywQm8k6mpj346jAzhFXwqXb45Zp9Cu73npKV8CetCMTQ",
  "key27": "5HXjSM3YHCLx1dcaFLqWGLuPaatqvtf4CNZNn2M7WSBPPQoUukUv8JqsFcMeoQsQ9WHhpgg1WxJpzVSqdurcJsG2",
  "key28": "2ZRNedAPKjQ2hCF8fkfdtNCigDf4o1j4Zy4zNKnKkNJqfXzEcYfSforrCuyPpVNVz5CNYe9W6PN1ZURdtaDc3Bty",
  "key29": "644bzr86UPoPVoFfvMffeY6CkJTEbWXrspTwyntRkGHrtp4e1Y3AfWFTeFMzF4X4EzFYRziB5HTHg3e2sHzFEHBW",
  "key30": "3qshLb3pwDsdeyYTdYm3mPH3xzmKxJAFUTDs7JSWwEvmZfnsyDSFbpyoyE6xU6hu5bELr3cgqnXwvBSr3M6d4Hc2",
  "key31": "58X1BQrrHUKd8JxwFG1KqcjNUYzXwwukXfQAn3WyQP4ZFPoChZ7fg1u4V2J6qB4xKEN2FSpet2z9tH6MQhKqnrt2",
  "key32": "4hLpvoKSRpXGaUbeNiC6eFurcWcdN7UmmBh79tRwQW8iyAQMNEuzfF5hGUMpvQp5ejS66Aga1HiMV82ry7qgiAxE",
  "key33": "PVNXgyjCSazU3i2Xc59Ems8JbsH29xnNqh1bvjnxr9UmgBnHscUet5kGzPyVUCusVhQBW2RNNJsaDtNBUds9WRu",
  "key34": "44Fv16jNo48b9ZGvJdGEidjfD9DzBpsg6CMRj11Np1pxHvLWPijge8kKFim7uLCQKETy9bPfDJLN4u6Yb8s2CQRC",
  "key35": "4ArFTrNUrZ6NJ4sasCvo3V4uCeuS7CyUZjMaGbB6PAS8kZvYAkHffRmKi1PFqS3HEqQXVb45zKHQ5qMB5CAsuezR",
  "key36": "w2QZe7Hc89qAvWRKTYUwTg4xTCtsEtNHPJw67tPhTC9i7JHpqFnXTpYR3Y2MS7r76unAV9JMLvFa7j6aLHAfgm7",
  "key37": "4tayNp9yy5ENNtCqaGtuZiRwx7bDSSnFWjPPE21wminj1fCqfXVREcCgL6FXqX5gr86hf7va7nbCMEfp2z33ENCD",
  "key38": "4tMvwVmQx3a5sgFpoM6QXqoYJpiNNXeM8XE5WH7mhEs6aSysNac3BjdGEuPy1L55tY3gkfjGJT16E4rSWrBAgtRc",
  "key39": "3xGTLLb7GLjRQQHTQgu86nnoKMKbXtSrbBsQrEP45h7bsopP9J12SM8E6uCWeDDYVeKVMi8zHMZGMjrSmk7qdnXe",
  "key40": "2r3ZNHLD2FtbTRZrfUWobpSxeWYFWWzRyivEzUsDQ4ZvihzRUdxPH48JuVHkQggPW13siLseZh3bifH7G546AeKj",
  "key41": "3DXkfaDFpGcomVcTjwtxvR7DPTKaW2VtZ1ZmFqstDLn2joSYfaj3X7M6fvJGJ5gVimQcjom8Xnv9Zufyejo7mhJT",
  "key42": "LWs4fAwue96L6eWviTDwogZe4VVQuhdk2msRZCQVrM3UrPU9Dx1WBAeBqkcuXLtAwiVNUoREoB9a7fMQpajndgR",
  "key43": "2gSuCqBWYEkpTtHTawn5uSjLwgkNuUbzfwHmffga3MNCcyrQ4JJmaTKnKpw4DYAYQd18YSB76QB8vwc9PbUPbg8y",
  "key44": "4twqQ45GANGuwHYuLisFBkTa5tKkPuKxiGJL7rzaAq95YfKmSB8PHVsKWxsjLLA3ghn52kNPFf3wZ8Nv5RCg2LzG",
  "key45": "gZJtTvrcqFNYpHUtFa1LVdhHdshoE212hUwLyMa5P2djkrJmxLYCb58piAawTuGyHXYMRRLzhkjc3q4egoRU7rg"
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
