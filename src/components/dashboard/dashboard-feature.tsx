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
    "2EYWpChbvUnRmfXLFNns6SfEAnTLbN7U2Np6eeivdQRHn1UACdS1akyCKknnhWJPrDU8vcoYt4QpSe1Qqb39WixN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TFYhP5ovT4yJZGSNHN7KDzNY9mVYbtkSsyPaznRYRwtyjPpyusLYj6v9s1LT19Rqk5W71RcCnCMepDGNU4EEfmY",
  "key1": "3AwHRAk7C5BqLY17MBWKnkd3nJkycC5eanw1ki4mRxpAaHiCcLbk3fVyZ53VP2afo2TDLk63uprBGTo8h3r9gyH1",
  "key2": "62k9vFqXuX9a17ePA3io3VAcczPh18CNRLthNp1DUQZrp4hAH76kcH6KSLyCf9sfNqzPUf3T4naGoppMvYeneYSc",
  "key3": "5jTYkR2dnvEc7BkZxkSFntwJDMfurSMFUFf7yKB9tV6UMYBfMy96dpSqHVxaQau63Mqi8qvmJkztTPPPYwVHyPdZ",
  "key4": "3Ub3dysJ8mDagcLzRBGFf2ToC6GKJ8Z4rf73c2zAxgVjBkxhBF6g7uAQf1xxdkMzWimBTcxjSU8WnFst3qaaz33K",
  "key5": "4GWzjzxZ5kgbjWp72tYEy2RKNA4kXVMyNDMUesWfei8GBBspqTLTWKYa7VqbXxFKzojWbozbG2BkKTEpxNCucnHT",
  "key6": "35JwXz5sxg87i7TyptW6ey3aCT27a8H9HCibdBk7NY1EsyXj6FkCXjZe3Ci5uEFr8nQUmaW3yYWwuSNJFwYffrFF",
  "key7": "CmU9yiKjmqUfg4EJ9MzYQqi1KEhtU5mjBwmuZ94Kkn4cdrWLCs6U2RGoBwKDReoXdTgCSEEXjNgu7aVCvJtyaZ2",
  "key8": "3bGQQ9fPodBbYYDyafNJaLdnURAwaJ1cBoec6HCWQToM3rTMGfVtzEs7LppUYzWv1CLUB2uA53PrpqcizHhF3z31",
  "key9": "41Zfp6s2CMx3ynAKfwiVivq628fijBakXkVTHsE5QbctsP9jcET5CrjSsS31xGNuaVWi5GDTgxrjATUmthkR9FaA",
  "key10": "4ZSXbxZgYD25gUk3rxFQoFJPZjk1drBbtXkvhGxKifUHRMT7LQbwuvK9DbiHcpi4JfKzPn3Kj1RVap4Tn2jL6tb4",
  "key11": "2rtyDVWjLeN7Bqs94QXCULMYTh1NvDL1KPpaT392S7RpvwkXJDCZu7kAswiLFXWz2kxEFcXbjPpEYUqo7y1c6AwR",
  "key12": "5D5EbCaFsG9zeN74FcMyKCSKJQeJEX86a2eVEoJnAQbcgZ8DZPbCQPe7yuvASSsdzjJLmKaB7CA57yb6ah2REZi",
  "key13": "2iMSTHdrZBrkkwktPeAN3BGjbKjepnTjwyYZzYuuSiTioQZJetjG9dZRhn6KAUSbfUCQYdzcmtowPuJpBLNPBDFf",
  "key14": "yYsTiLYXathWTAx29HWkFAcakuqcgLmnh1RMHH3gtmEzc9QkLfhoMYLY1MEDGFafbaQMG3c6aRDnDtBs2Dcbjia",
  "key15": "66Q1L4jk4c4unWUyPzm7NCDbmbcMKmk4dYczUNLLUoGkmeiDeyCo22WgJitemtVQtAgSFjjf4AfV6m8jt1wWJ3fE",
  "key16": "24mHa813KjfLpew9koJotvpTLV3mCCAzhL8K5ECMdskdsg9Kv8xYWzKXChqREY1cA7Fh5thVDAXjcuRbmjNfoL6q",
  "key17": "5YVPX5WH9S86dp5krwRFgT4KFpzYr7CJqKjaowz1TRfHmkw653zaSZA2BhnUeQ4NwPvLFPYxBuoJCbw19MtXBcJJ",
  "key18": "FqEqixmnV5GN1XGE7NiUhP7YooNh2x9nkBEY7M3UocKXRKqSNzijPp1fgyUrrdkrQmJFYoA7yEWougieVLUyXEz",
  "key19": "5whKnLkk915B5RHsKypXu2bQFdUXj6NNq4CDcMYFRMfvdZeMuDWnGZs12SkvMq9DREB3CRPdRRgerZkD9i7i48nW",
  "key20": "3MQc1H9gNJiVXLXFjFzexsKi23Wf3fgxXdTyKa127wxve8vo6B6PUebQCWB41uJhayFMmPRmbGeenGQbeb8tU2kH",
  "key21": "5JceqeKnRuLJW8o6o1WuEmhQ9SXw2cERGtSh82B4T2preCAd72YutkqxSfyeYANNgxHhkKwHCooWu5PocNqSz4N3",
  "key22": "5WjmSJF8qTxSfWiRgBt8nmtE4swTj8voHf5woD96RU1kXECfiVypFJ4mU243L7kKC2XkXgd8e5UZZfsUSJhTJb2Z",
  "key23": "2pXNN2XpWnrBTc9BdG7MDd7orzLQf7UV9gzFUE3CrZM4JARceMKpJpNnYBh84jRiC5kuyrxyKVZmVtepWypr9u5t",
  "key24": "2JqSCYErRDXoPCuTXfoWYjvRS7wvQnYtqoJagcEXCv6ErXoMMUu1CBksjPr8RJEYxVPqCWaHQHUefw1WRZomZNa6",
  "key25": "6MJMpjnSyzhrdoQ7TwsyTr69VtxxsJZMgrmKpCboCWZjWGBTkUPF8BULT2EsJDrJhJLiv2dgqtVjoWsx3azj376",
  "key26": "2Fv1HdehvLZDQNkzF8QZGKTK6bjB4jF9LS6tiESQxVTXQUZptHzwJfEEZfYLvQjTfMqJ7pfugroVFRK5wNdkUB8J",
  "key27": "cg8ZfqdaipxDjEat1SoCC4TEen7EXAbwyjrCkbYR2xn1exFGLrP9FDdzqETvaKthc4Gsj5XsRjwKnLFBj4D1Zr8",
  "key28": "hFiXL5LNpL5S4FCfdDq3zFoq63335VJKg9boy3QaBMwidpshxpdbGxSZ97W4EJVPFKQ1FZfLupgE5qCxUv1TH5R",
  "key29": "3uTitVFadQyRqFivvk4F2xjzZ84mHsfmaHakpy95CcaRMTnzKpwcHtajBo5RnPt11zDjoB1Hwc4uLz8S83yYvEeS",
  "key30": "5VfXhTsBfNtkutDyDok4BSYpNaQ5C55eFqywGXJEqQB7MBU6QEMfaD65WdsG3qRuLtyEYcL2kGY1hFvL4K4wHFy5",
  "key31": "5BjsxoCQB6aUWM6C1DTYJc3uJ4Zd8jDUxfLXfWDZi8oYyJdR9N5dHtmzL2r4egs75wkR2vhnf7sQfTEiumxHZBLV",
  "key32": "5qo6o8Hz16f9BPsYbFaDVyZaQvPtLPazS6QkQJTv6HCdv8D1JSKkzHpZL2VuMHjwdRyZQXh7xg2FqV1ZZhSUEAw1",
  "key33": "3725ddvtHQxFXwB6KCv967XNXnw6aR3nCpkr2GbrB5Fq5qjjvu8QV6vbBhqQtTjsBt1pUaUZoWTq1ADYYyJ49sCA",
  "key34": "4ZXURqJBcTg7DxpToTQV5HTafwQQFVTXJKY36LhpPxEfEV5wHAeC3TyVTc3EYR6VWhq6J8H3mbKqGmFWDfLywc8j",
  "key35": "cciBYoKnk3tsntXpQeJqWGnMmjXnk6VpkKsgyYNqfxscZNWCpzSJ2kauE4jqmMpdSNmkc7wzZvtwx5NxA5XaoUM",
  "key36": "2A6w6sbD6sdTyu2DyokRsJNKRq6T3xRTJVpELFWokWSKCj2XfFndXoAENirkudZ2KXESADPNjQfxBvUC8VnztrXP",
  "key37": "SdgRcztrxAqpDR5t9E7s5VbCLj1pMiL25MV7bM66y1BNP7HEbRGP7AVePb6Xa8PXvwKh5mW2ZPkVdu7tvFsCCGe",
  "key38": "3YWdHEpih9MdeEpuTjjKC4sMfXE9aXGWgotwJiQsAKCn82Xs68oJcF236L1KZfwSa3qJ89bxYjcDkLGP22Y1Wtis",
  "key39": "2hC3o4EUgdSK9yavtpBNwKVNLTcd6T2MVWUNyrBzynnsvRNy656cX6zke99eiRKGhoZdwHtqRk28GjCHWpMLppiJ",
  "key40": "3qUHjZKSqKCmb6RihDDgBcQ8cJ6dHo3hFfMZZLNbn5guLEWSxwWoy5KsHESzkg5h1ENTYrSehgCfM9mEh5cGxLy9",
  "key41": "zwJHk7g41rTXHVvd4jL4gTocH1bQt49JD3RDt7U6kPhnfeZ4KPHxL8AZoCHraAWgmQyy8r4K43FWmsP9scJrMvU",
  "key42": "qDhPC6nBeVaZy5eg7hkYNhny5fsTqPFCSrGzRj8FPEZU7Ho4XNWANaZgaAibyeeUEzdfA1jyUbcDDtCmjPiKEov",
  "key43": "3LqYCWno2ntbp6a19XVSnTsYxzArckZj9hEJfU39YQDmCXZF3poctGjYUZAxsWWqCU8sJmRBWQEjjA2cg8APZW6F",
  "key44": "3k3XorF2ygZjqTC27hf5Pr1TcMXYnYBjgREdEgKYuP443Mt2aJVyXFMFHV58xJGVYSDeLmr4CmLuduJNgxT4ianK",
  "key45": "5w2xhM4wBdPKQk7Ng3Ex4Q49oaU6mTfYWJBELV8ktzkJBZr4rCHUEyEoqfsj8SnLBzkkysCDixFDEqUm5wzgiB1p",
  "key46": "DWDCNbBXt4CBMFM1BuBEnBuGc2Et1TVLNMccH6BkzLr92ihqFMXmNTzsH4k3hyRQQdBFHjPqnXChW7fnqHreQ3j",
  "key47": "25pGZaB5dRjNgr1bsHBSRipK8aJgZwXjxibLTGXkxVZmsireR9zdmYgMaD3UcG53xLM93YXYAbUSK1nbEex7aBvP"
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
