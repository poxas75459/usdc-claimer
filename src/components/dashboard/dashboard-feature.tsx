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
    "5qcFwBiMW9PtAuMJtMCT2Ys68xgtYVJoWKtzvTumSFVLsDdZg7Y3jVCGrmiomiL9PyD2DgLge8KrwHdnedMU6PsB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6PF4hWMiEqsACS5s7QGFg8s4Ywhv72ZVQE2YmzPmqoVubVQ1sT5pbeZ7CQkxEFN7CWk8KCdg6CWNWXS4pAAFmd9",
  "key1": "5Tcp3isEuY7wM5T1v7RvnhFieB4askyNnZgNropcmAqYpmGjmKyKktgSgfNvLnFjA6gWHNFR9Q5vCJ3MHSmeufVa",
  "key2": "1FbuvxY1cjektzSkBQZzKsRFxUVURdPaxuz7oeGEPuWxK32FxSM591bi38wZGzzaTSEFEqVjMPg3tLt6tD1p7FY",
  "key3": "673WC154MSWsaZwQuRmdfvrs73BUfsGCcKQF3sVgpTDALfkfXDJrQKhURjYt3TTQx227tWpuXLeXjgJwxz3D2SG9",
  "key4": "md2ZBwChv4w6SxacKv3L8qVQQ3BNYrpL8Xgz8HBuWQLyGBaFKE96jo4CvkKduyhZg8v9Z3mKopWdcV2eFivvuG7",
  "key5": "44HsLCyNLaR4HRtn2gVURQvQnJV7FGf7xjfUfW3oLQpaTVLAAoUuunvyeDoPf9XhzAkiYSYGKNCsfJkrZFtpeZwB",
  "key6": "2ciaP5fpQF6Xuk69FPA2BGDaYQjW9vP9NGRWtnbPPNmuYFiXicHWxHxcXLqDjinP71KyUqmbdmPvQzj2pRQTJTXt",
  "key7": "Jb8wo68HkCj9d9wHrD61EF8gi5JGPj18rZ62imPuFw5CwhgBjF9fdfvdDrGxvJFP3a2gDtZxMseSe6BeqRfE7Zw",
  "key8": "Lmh4FZr8xxnkaXxLshpM53tZkWsWoYm9J7zUKUc5e43yAWW9Zo4iLLa82yNLMpq2HReQVNpi5n13SqhcwsiFGX9",
  "key9": "5NQcJyMZ9UPb2Rt4sZznwr9n2vczYRswRB8CtQYWJtJfVAmU7NNWg2Rp2jkc6iDqQMGGWWzM4zfdNWK8kU7BHWhj",
  "key10": "4BLaL1WLnV6a4zzKPDwzyTcib3QikUtEU6SyDyVzG5pvVz5NqdmSgEvTymLYCboLeuKGEfM5NVewEoK3jCwFLsRT",
  "key11": "2uW2HHyuvendPhPgpjuDLDZsGt7M1ptY5aWDiheydGgp2oWNUBQvyYEpXwrRViGfojfmBcr5MFH57zSLww4PLUnn",
  "key12": "538VMbHsyZ8q3FxvZzET6DTVS7MAvGo3sbc6YxVEURCa8oxsfCwdSsHnNJT56ZxmmxQxCTSJELoLJnPSPgr76qh8",
  "key13": "23i6z1derE9ewSzFKtdUEye5ReP8zhY2XukXAp8UbgXkttgMfkdrG8omqa338uLPv4pmfXatP3fo5UVhkpSDFzCp",
  "key14": "31SjRTQwbBi6dWQnuBczBYP1GFeqJdpkWZpNVuQPDWJYvb8CEvabmzLHyaEiJmz2seoPd6EfuoX6wEHqexhrFdtz",
  "key15": "34eR4zfuZDv1XgpBF1xnHGUYeoC6rgwWtRrSzbxy92GbFb3rjaCUHwjipDjHtVVPq9wkjBFDUiYGwEeJXMRDqTKg",
  "key16": "2xNCjwYGgv8ghFpvMZxcWsNgYC8jmkwQZJZEB4D4QErA4NCHNHh1skmgHxYquyGyR1J4QzbLSVCuxU3aA4AEpBB3",
  "key17": "64zqBRyWd1tv9reAsTATYKDzk7ZDwwU7tRMmWaN7CEtusCNtV5RWnW6t9nqfyMeqJhnvGqo9ZhcLDjWMPTK3ikG8",
  "key18": "2a9QzvncktKfnpBNEKDTyMJFChruAJTUnoNKhU8M2nRsGLmUUjKYyv88f5cHTA88jXXqmqAQdeYeJP9EiBuLKtDD",
  "key19": "EyEYMHbm9LuHZkijQXzYFQtQpkQMY8nnyDYTSPqLwz5tYWfkJ3sNqD8sc2fsNv1zuuA1xwFfzEhLcBVNoGhNLpM",
  "key20": "n6G5h1U6hp155TkV1x8z8sBRiMtNYw5eBJm1hzBdAdm86Ayb3qVjZqioX4QkJToLtsArpNmoSubqqhSmbFzYfzT",
  "key21": "46RAbwQb277dcVZLpbCbcR9bJBP7xnrA22TqJsVp7SWWaRdr4egAmsAZxVguEh8Kg1KV7eTrEEwu64Ei2ATBxdKM",
  "key22": "2o8bS3dUdB7m4BMrpB1ddBEqZDPzMv5qW6sGSR5i7qVDEXdVWzV2Qj11rafA48yM1Mq1835PWwdUyLugQGTz2MPH",
  "key23": "4pqDda8geUykLEw4pQTZ8NBeymHA4x8eXtj2irHdnQ2SieFQjnEj2VwutswYXc5KBWTy1spVX9wnDxJrpwPgnWtd",
  "key24": "5RJF61pwSMJSuQ9jp6zTyd7U6LNwyxuBhJfpBHwYvcbQRgj5r3p2LC6EDXLVrtc9oGCSEFVRN5PGsvzjLZE7NUhj",
  "key25": "2XLR9cDLKVAWbpKCUVSDbosH5D1jjuJuDHXsbBXdH7ZLitJJn5w4GW6zJdDhZndHhauwNVtVoFW6AK2cTW8TmiH6",
  "key26": "4gMaAuD4MM3wUK1kBSPGvYxmiEe7xYdbHbEyv1x3d97Wp64GgsRanX79MtQdVTQQbsqX1LQj3woCHPpqEN78rdop",
  "key27": "5te96aKQz35Hj98TmJdg44wJMnNR1C4rsmn3kyF1EwBY6uTRwF2Be9YjLktroghGd6ozLxgKxAQhLDrJzfJ9MPA9",
  "key28": "YBqxAiCR1sVhxdssQPWYG3XmnryjgyuU7Red6KimGYyL5h4tVH5SzsRGMi8ks4sgpZ1FDN4NujLUViTp7wrhvKB",
  "key29": "eZGBouaVLeVcqB2NFG7ATiT6JhF8uduLd4JVpEQjjvcppmGcsmsyXRQKNt5wcPkhoRGryPhHpmJWUw9zoc7XeRq",
  "key30": "rBddZdcG4Qf5JqwbmKnT3BzPnFVqLB2Lm6wdWJuqRQrFDLkDV6QwFXiahJX9fwkRV7rb4KQc2ny661WPj5wf6Ns",
  "key31": "EfapztWgqVzj2prqCzh5EfinMJtG76v9Z1S8TF9sDe2ND6yw3HpzG3QavaTSuiZpxMZXbLCKNTcq13fPjYrKVLo",
  "key32": "5Y6zGXZwgqSb8BUAPVNsDdUGspumtiEnhMg2uPktCrgcr4SRftYsST5CUbEPPiUiUvjD2w9s5P4WUnVfC5mkJkne",
  "key33": "4Vqj5hz5gXDSQdio4mQAaeXWppLepmija89QTY1tvsmhhTGKaPZHF6vsb6HcSeRmQQ5Mhi3ab5vPxfdrpm8DnNaR",
  "key34": "5AyXCv4z9BdkXiWyN7gzALdtzQG9pZARvMqpxbD9uTHo1wDuTCZVEfcMaDkmfh94uQk6SQsdch8oG2Ho6ppZRYEe",
  "key35": "2DgE1qUhq1E3EHshLEmLTaMvUkzViNnP9QLkKFN93egMJsHL1d2ysF2d5GqNVf7epviYbd2hGoH72TTiSG9icNF3",
  "key36": "5XuEFiMENwqiYy2Z9AkKUDRv76Xc8ehWjzg2e9R4584rtSbdjQUirqaRDZBnmdN7zMAqXtWU9JLZrDb5heBVTNXG",
  "key37": "3yLLdJs3bX6Px7ST7rYYW7QKttmgL5Lbo3KYMKJRY3szsASkopALrVvjJRje7ekqXGWewtA6ezj2jFv5tZbNzYw2",
  "key38": "4WY6ty21Qfz7qBMaTy1rwfcuHu3JS8y3F8CKoCBWNShK9MjzHcpEQvtA95W6n5jaGSDUWLWJwXc533DvhDrpb3Ki",
  "key39": "4hJjBB72hULrK43rBMUCB1f2wDvh3RKDQxpzd7Uu48QmAwt61vgjCYAKd2V4jcFrhJtXQaYVi3JNtN7WfFpTeJRi",
  "key40": "262FrkQdKiC3ydcaYpm6GktoPohVL6L3YWivnLH3mSt7rJ7GTkYoxnhLEohNudYRpaLmBfTruX5gJxq7QiHehhDr",
  "key41": "3MZSzZ2hyJHZxDtLdrzPHwABvZHqNqhfKKKz1hgmwSFtVUx5AbcMhPtgEHxJobR9WvJKLcDXEx2e3RdK9sLzt87A",
  "key42": "3ASZGdnc9Eb9ZDPLGdLYvwhHcyegJ5R7WtJgd8e7nprSB367qW572eMX5iqcHhfqn1LWeT2i73ZAVcoDeHhDn2EM",
  "key43": "4izcXbskp9pZrvkcZRXDbfzVDL682X7cxk2Mow4C9JcVb83eT3HYySBep1DCYXz3YeMryofyYwthBU69riayHKt5"
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
