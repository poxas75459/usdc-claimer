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
    "3NC34R4YG1Xqxafc2PqWLJH9qMYPMc1U88SRQXuh4PWYTVErBvMMDHD9gfPQicrLDBAp5nUELzDcbW3npYdEJitd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23HZqS7UgF3LUPtDnUvgLM7F7rkmjnK7X7AsSmUWMa976HaSWpEmh1esL1SB4aVB7sdHJdLDTjBmAMNMyFipZiWt",
  "key1": "4yRXVU7yJbPqvVbHwW2c4H9jMGSDdGrTnWsxkAg41N8B6pNCjhB2euRGefKCWCj6HdabwdzGYP8SYhaQZPz8f8EB",
  "key2": "5SoDYbFDKHe4qZDSGAALNcXjAZfsWopjcbwbfu97wDXon7zHRyNt57HnBMvX2DKfmyEmbmT6UZ6f9x2YX6yR95GS",
  "key3": "64i2fqix8iTN3eVUqwoX8eXq5ZuYeboCQrtJVBN9Zrd7UeoNe2c6nDjoB3UjoX8Kmj1bSWResz8K3GkG71BrSe9j",
  "key4": "2VgFpMg9R6TXZX7nqUfAbb26vCFmyUUmYnJYQ2c4PkWcabkXLAiSbNKre9qt2KR7Co6fGds8m2tcw9dSuPMD6GPe",
  "key5": "3LewYudCYPCgMgdocT399WmYUZvDsoHqwxNxa1YD8BRskcZ2HqZALSSX5shXPH46xarYntVZ27pzLRDXSdHeUGEG",
  "key6": "4QnHt487d7c5qruyazZmb1eXoZtqa9JkJDzFjo3Nnws7KNV4435KBVHsRz8op11uWipJoGJjpopmi2BqsjgmeENC",
  "key7": "4xtmV9swvNDdhMhMo36LCqHM6XvxKwniMLCXGiHAPvN1weTYWua4srmpYaSqnoKeKM57GT7dZNtTkFgXymB2YA8f",
  "key8": "5hK3rT9Ug98UjfrQGSRCr9gyDiy8NkSkx9xjWereJ64TK25NAgS8ukyStoe8kup3xG3cLg8zJ5LQwYBJdadSYdQw",
  "key9": "4vi68gaLozV3ZhF9PaSTaLW65qSVyRqusWZtzhVSxeKqeU1e586355MmVdhEDrMot1GBC1ELCrn534wEFeWAyqaA",
  "key10": "4gSsBAXAfraS7eAdDJVSm5gi18yxXv58iyq67wC7fJe1gLvdEbe1P7UbZp1KXQCqgsETyS5GkcN2YxKhVabnSrpk",
  "key11": "3JrKLuUMQ84MUCYEQtPv8hs4LuVwJBaFAFhZEmsZmWYJJoZ2o62ekhjMA2gTQnkuKHhiSB4vZAq9Ley5Mjce6DpA",
  "key12": "4n5KJUzHscXsLS7yJzpDaKEN8FC3amQaDYrG8Ey9XLzdFDJqvdeYmu2FpxyrFXgXgGH8r4npYhKZrNeyjFvobUx4",
  "key13": "AnDvyn1tEqcJZN6AwYQHFJTsT5LnWfxQpJkFxX3wXCToEyJzyX6sWAQ9QAaezVr5A2oEkfa4MzNmMeuySXUhm9j",
  "key14": "GoQXtaNwbYhHFhQNtKxErJCKLDiKnGiMVVruJdqhjpYXuHKT5725XngvuXp8cX5AfQm6yRon8xaEsYZjK2ZrLAD",
  "key15": "4SmedjR6J5cvgJQ4C3Njd4bqBYGGv4dYGRV8HLGc1E2gU5dvRhuE3d9gCkerMD3GWPfK5H1VTBi455iHDG9oyEBu",
  "key16": "3nnRerhTrZnTJ1PcZUnBKAzo46gFNhtBsnSXP4a23TZucqiKWY5r2XoBCzMsG878sB152VszbJiZim7CDWp4uErh",
  "key17": "r5JD3UPX3ANSoy8WBry4nW5Z4AtDnSwsUXecixgJGsUZmkWALBLT9Lz7Hip6khzcyD9MacDR4NcM83nG3wPTt18",
  "key18": "27xnv71xqQ38thJe4qTXo55X818VbBswZsXhdyWRPfraB4wJTvAP3EAhCmqBZqQ8nSMxGmJa68mj8HyE26twTKYo",
  "key19": "2y822vXhdv2JcHtbVn7gbmzeMVFsQoDmdQLpGMsA8F9xTT4Prdnx4kDw1DxvzfVFnXgrAcuTZN3e5RHKfqXwgAK7",
  "key20": "4TEKLYhQwEn25NxG6j4pD33bQuiGG9ywpGd5oBZGvgpkvtHMPk9gJt21oFxhWyrSuQBkQR2VWGY5kuTmJL9uSPZX",
  "key21": "5R6tcnCa86ddb6Ar4Va6A3RT48K2MA21S6eezKD2mLSSer3vNjFA7WeyCH6dZKwYUHP8QdcuC648pSkLPBL8d1nh",
  "key22": "24s8BdGbY5W5mUZUJasT9ubhkn7kYdJ1ATzLY3r3KTbP5Wu2Ls5QUiFqeYC4kfvrftLQxBJDXAe4VHeot13bk22M",
  "key23": "3MFtkzSTZiUt1YNC56xsVD4Zj4ZvvVrRUCdXgXQ1x6EfNwh6bi1yg5q4d5shvj69W2KsZ9h25ZrgiVFq8BvhgtcM",
  "key24": "5NReX9PEc4w2geeNLi3zBSrN83rESr9VV6jAQYGSNFYhr7gQvBjJPYduRmXT7A1CuimTv8RsZxpcH8innaZzqBdm",
  "key25": "4TqBE7jKy3CXFyfQJfeEsG561jRFztD1LhBiwtyADfuhMmvEc2aimRTGerH2BfKg2LNgj9v8DcDUqDmmVMComtUM",
  "key26": "4QZaze7Mt7pmYyxVRibmD8m6vDXw4hsjJeH9kf2tPgarU9WygEqSwFX2hwGGTTrYMxVAvFGDcXcdEZ3DeMo5CeSg",
  "key27": "3Yo7LK5d8ABHiUPkixCajdvy711Y6jeVhxTx6x8ckZitbEfVr9Xsqn6gBjgcGSymM33PNeHg6zhaKig9mhNEMo1d",
  "key28": "1iW4GTgXbmmgvTeYFUzwbv7rxjMuMJTedkfwLimEpMB24EpZJJbUsJKUayZPYfRt4AXQM7vLKyrYpDB9rBaUUSo",
  "key29": "21cYGW6bMcVUt87mKuEY2xZdgKabSq5CCW7qJkFdVrVCAQyHrdf5ovBde22BgndQb9tBPwAu9Yy4ZoSK8JGTYuo9",
  "key30": "5nbr9AtNYPMxZuiknMYoiMfJPa1HntwUPgxjWLZK8mB1cX9ykUMsQwPFYGkkkPvM9aLrYdnw7cUHmbpT5o1biDNg",
  "key31": "2tRSoYrTYWbkhSZC1tQD1Myy1PpBQafXzXyxuJnqCRL6qh4kaQQejK38QnJVWvvcRdKMjJo1sXKGTayedqrgdaLe",
  "key32": "5AsDFiDGbqAZQc4WKYfiSbjVdJEcxPvwVsMRGhSHYHR8t9FKK1H3dxaAtxzjn4Cgz6o4v6PjwHDUTFg8jRQn2Zsc",
  "key33": "2DEf2rgQneFRv5ac8wqLyTPzsPAZNtejyaKqU4w75V2dUUJrTEGSiGMMtFjTDooJLkcrDAFYDYGPx4UaUfbpWTjF",
  "key34": "3vczoHkEBeVwAxgaGs9Cbm1Fr99os7i5muwk2sT1TNk81rMQk4duAHxKzKvSMeio5azxNRTKS7hqWWYS6m77UN1w",
  "key35": "nHcC7peuZbYcWpojnZacxGsgjkv3N6b5RTRQ2wyXSPMMdcU2uk7cyvMmVXJKGs1Ris7diXXqCyTHMvWpFi5hHD6",
  "key36": "m2wuGpiVdQhVqCXLqL4NQYZtrRPoNR4Cp9H6yP6XfjhPh1xUrC5Ue6Q3qsawowq6VMXEz9Ykv8q9s28YcQ5YX3f",
  "key37": "5xh5nZuMRgJ6ExTRVi7wLaQvt1NPHKEbBajDv1gCMnNeMHViuCAjgPFnwYHsYDyCxPdkFQFF3q7HXrXU6jPgDLyK",
  "key38": "3VNPyREoE8F5v9LMSP8C4uyQL3d12y5JhXxFniPy1Lh2Sr3Bmmj5kkNvPc4xav3xVMHiS7avpyt3kf4Gikmo3B61"
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
