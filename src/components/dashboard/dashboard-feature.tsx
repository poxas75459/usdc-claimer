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
    "oQom919RGenZcLKPi893hJmCvidUmP8agBrnb88cXU9Dk17LmjSXPdS19S4KezwFFpHMdUbJEMk1ogvcmesUxjg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ANggcZwh9hDD6No77GSsExPUviGN9AShUKMNkVRB6YkZ4xT7mTTJUVZf9Ro24g3eNnGJGr8Y2EVSLvz9asaGkrj",
  "key1": "5gJWQZKX9BMLKXvxkrbeKF5jtyPRGzxWn2CSWj8JpgsYYr9rrdVon1z9WMwzsVXVbtVSVnCz4KePNDMYPqfdjmp2",
  "key2": "3cXFYMHa4Ks2W4JKNE3ReRjtrQn8ncrRBDg8tbuxXgG22ahGVAQpDSsCaaYi1HZE5yr6R74aLZUbo8gDHEBhnRCd",
  "key3": "5nmiHmysgwWUcFTV9U4HKgkGVr1nY851PJqEjw4jH1oo1Tu67ZT6BBLd3q3w9t18x3qgzrzxGoNe3UfrLonSn5nr",
  "key4": "5vCQdqmCu75Y9Che3QvheWiJScKdJTVvcZdssaCAjkgAUQPAqCn4bi3iUg7fYEJNrKyEXcECQ2YLg99YfV9i2JWK",
  "key5": "KmyvwUnc1sR38Lgi6NHXq51QrNBJsbYGHLF1dZsxHD4AzCnSBYoogZwG7CD1tDQvQ5wwpopkW5bzmcLTsJFdigT",
  "key6": "3y7uMHdNsEnbYtDpJNdBeoDuK7ESLZym8oAVgr7VhG4C7DjWLcgGXg8UNdfScUMxswJd6KWTPxQqNHQDgS8EKmFY",
  "key7": "2D6zjsbrae5xhh47qh6MbAxMdbtP8UroHMqoX28g5qXb2aQem7CRchKNMc7Mh5aGc7vtCWJRq71LnFYmbQJpMoio",
  "key8": "5FqgNyf7nByeqHKWCuiEiVu3yxSsyZqN2qDUrfM7PxpDjyoR3XtnBhjTRQ1eHEscLnd74Z42k1ZPeduRqRxk7g95",
  "key9": "5dtVWtP3T7Mm95a9oi2sanDaR3sABiY5rr2tyYQayyWAxHu6urR7rydSJmPhA4pHsn1zNSPuG2z1CGQFAFxTySbK",
  "key10": "56uQ3sc5y6H7HL5iR4U4GTMxJ69gouR7vB5f6YrEucwrxdGwjCtkd1qeVCfPwLM2bFtb6RhTM7iRGgEtMLcAuqEm",
  "key11": "61H1htGc7o7Ti55WtSXUH8QVLTgxBXUvNz7huRK2w1Tdev14G4H8MhkfBBtostN8wGwJMUd1gDCDRUuoR8eLzYEv",
  "key12": "2kkSKg2RhRsLHcZnmi5yruszw6H7VRJkh88Src9kiqqyRxMPWubwHmjo46jxz3zzCZ9jRtmQ72NTAr5syJQ4UesE",
  "key13": "8bm5FZfQHUnUfGypHFqbT1eqJYLXcw3SPEKc3Mj25h8vLURJb2mujCHk2hwvZdYEzV6qioBuCL4KqSLw1XX4pdA",
  "key14": "2tgzGhzPUZ5wjj1hAPu9Nkn2fTeaVDeDU3rzxCMiuF5Gf9kCMs2fpV3LPTzbytJ2ErEuxQJaWyW5k9mR4itr8Wzf",
  "key15": "4oXJ5vWbALxy7MEGPzZy9t6R6zkQ5Y9bWGCTXL2Q5Euo4boD7HrYCkSmwkd6EvN9Vx1crb2t638dPEuHsD1f2waP",
  "key16": "4QLWS3mjqYhV8N3jCd8CA7ANZM6duVHHrwNWqgiGW14CGq4XcAovvmAhbuyqWJnQ5xVNAr4qUhpANYZdZJvxmcck",
  "key17": "2Q3mgC2mEHeBkXCJ2WKeLGpS6DfW5UKu3aSiWnb9uyG5bbiVtF99U24kNfRKvjBGGwWYAFXFut43Q2mh5zgUsYhj",
  "key18": "4bmu81N79poGD1WrfdgCbZnS2o7BaEPHgfcBzq7QtFYqw1Ffw1ffSpKqQzttXaX3jsddB78Nfrw52SXCVRtQmxdk",
  "key19": "2bmPmmi3BS2KDPTyyQ5YgkXsjLBSaCgenYWYuDKRBFg2eiV9MdywDpqaAtz6MUzvZE6aewfsSE49SnYw2SNmZH7X",
  "key20": "2RmtszYhVGhkhBn8td4QZcYQyJk9fxhr3QksNPfARGmiM3BRUCtYvLGYMPMCtWMGBhJZoQNhkUYC8yxDZib5Wx1Z",
  "key21": "63HZWgxST7PfVBDqgC2PUXwuzYt1JKjc5C7LZvtevfGJdyQcdZGR4PRQpcr3u4nBUKeBptCHRnFXJG7sqeMLADBf",
  "key22": "447hX7ADcRR8nW6fJmAjPiVsm2ujvYTNo8aQ6BtrFN7W55J624Q8VNP4BzJG6UiFu7gtKCKJ6oo9aq5ztbvipPZQ",
  "key23": "2sYo1oxcRL7fPaHk6bmvQK1kqhFjL8FVdThtfh1oZzxJHFFXJ5Xtr4wgfauqrcC4gd6Cfd4s615jd9H6MZh5rqTZ",
  "key24": "62figtYeDfxMkw3sTVGPNfU59PjvCnNDVGZyFTgspNPj2UKuJqwbKS9tmgSHDJPh8sap8zKYwWqayMzi1Zh6VMJx",
  "key25": "5kUSiUZaUefw5RGx2fuJu9KcPY39YoV12uPCkW83Za2KFq1J8B17PmACmEB2djR7t6j4UWMBGxQkj47Gm9d1Ve6u",
  "key26": "o97Yp9YdAgzCQDn27kFo1dFeYiWwQ1EAXKF9UddX1UU3y5Z8v4YJA2p6ZQPLpyYdn92sTSowzBdzEcyVUSUsM2Q",
  "key27": "5p8eFvgn9DmZLmBmCPxsaBy7LowPr3YMojtjoV4SHjbTxGHUvs1jX9v5FFae8LE4wPtxA6xQkywLbxEsuUnybA9",
  "key28": "4hE5PAFeHmsFdLomdY4qkyBb4sQgJGobehRvaaTv1DC3JA6cbU7nrErpUCGmnwspaAz63FcVq2ATfAtSpH3AJTD3",
  "key29": "2YrNgmnRiHm8RqNPi86yFBSs4GUgoAE8qR4DumXSFg2e7JAg27nhKo3tRYhZjEg257tXEoTMgN76XN9dX2FUSJeQ",
  "key30": "63oUdXpLbSvYxtS456Y4WkEeuFyepNe9sWsDgGkdQxruQbc4DLmdNcvVWduiZ7YKa4D7HkPJnzTV7Fwr1DUK8KnX",
  "key31": "4Ek8QNx4quQPmmEj3T4KaBmSFixyvbi5iekSbJCdDYWw594y4nZ1smJHNu7petDEe7UWZNHtUPL1uq2kUxUr4ryU",
  "key32": "21krgTPBX33F9CisyehLxNDR1jMKGTX1UVGhaJJyn8Eh7WxdsbDbqc75Ewn3WdtQGL2YXXsdkRj4imGFBLxuFnn5",
  "key33": "4Dg1HyNbKtmDtRpJjJxro7DWRuqHXtbPUVtbCDSBuZPL5dr9rbUJQ1gyjU41XVHSntni9NhL8dTewEWAL6rVBVhd",
  "key34": "67J2LZxjxutpN9Gcaqu4Tt85p63MkF5BSF6PAsFdNhgKmrQ3BsyVq8nqMy96R1QH1xMAAyW8kFkHkVHaxG5Bpgec",
  "key35": "2ZhvRgPBkEHi82xhXPA6t5G32RxVs3hCKVBcTiYtjAyEJKGDd1xoZfGzWE3gRhq1U7YigKRFNunYP1MxuzUSv1b5",
  "key36": "4Ss3DPcGt7JBpGext3LwjYmYZQqm6DdW122AwdnjgE193HFAap5cKP64C33qgEF2Luhoc3FDxvxgu59GHeu6oF6R",
  "key37": "4YAMtBsZckf2suCAu5xkr2ytLu6rmJshy6h9WKVG5adrDrPSd5RHJpG5DscBaQAfQEQfbs4RLs7KJe5kvbYLgRFN",
  "key38": "5mw1woVFTCmpfsgbahPnZ16BZGqczdHNWypQk7sUGohed856Z86HYQofU1saHttAp6AWw4x22KfbBXTwaCYYnijQ",
  "key39": "4iKYhAiDRcRooy4mTkyM9MzVgoBwL6jTMv3WsXu9hfh84UrGd4veyvcuvF8VGqrDL1YRJ3Q7mZSKXe2iUs2BsUAD",
  "key40": "4vUyAZQ6CE25a5DWgDXguuiFgGiz7W1nc1qkvTDY4tqYuctFbvgWi8jJA2nXWMSEvaZmKwQQQSJ5TiPZcq4eMzdw",
  "key41": "3NeUhimfXKvce4pXw5xja1D9eUPPSXhWKArm92xaHbBLHHF5yAeJ67Md2NvrpCoUz5vu5AixXyyYgVbyS66GJsgB",
  "key42": "KBmr56xWMQ8aPhbNGj9oBqjtWLwhqGa2iyndFKB56o1tczKYyeLT8keYNX7YGyita9WsfQQ3WX56tKabdCdw2WE",
  "key43": "5WXaHecZ8o3cxgHoWZivurSeYVoJpWF8cRZGUsJQAzwDyVV15wnbRGsxtgJgQKLfb5dcxse2eQ39MQBDWniCoFx4",
  "key44": "3Qm3BifLeg1pr5YJgPR3bHLXTs4kqvbrNPJkkcp6QhaeEFSBBA67ayFRfyGrv9RpZL1SDc37QwDRa2JV9Uco8vtF",
  "key45": "4us1yNZ9er3q6fq22idY78QEYWXdWwNrKFNde6kVTQhEYx968QLqyF7J168k1eqhMVda524USxN2VW7QC9KaG8F8",
  "key46": "2PwgKEUUDUL1X5D4NpzRQU9k2UeR3K1ocoUQdnYJZosNuE5RNcv71vq6oMPt5sxAu1TJsDnbPR3pHwruBoB8boPM",
  "key47": "61YiCX6GkSYLMfoz4gL9fDCpccSo6WhRpJ1Vw8FzVxNq9EgE29J8vyZgLx2c976GNVVoXveufCczp956nE5yjtaX",
  "key48": "3DS5Rh98sHd2Eek3TVuN5cuMM6xTvg5d6LTgF8FrQLqSqkBDdefRb2Dc9fJK5FqsXXDtombZPgkVgK98zng9oJse"
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
