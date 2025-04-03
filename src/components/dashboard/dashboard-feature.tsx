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
    "4MRYzeWBcH6UZqKvxbLPfN6eyxi6pvnxAVzKFCGtw3qrFWzp2zm6C54vdA6Atz7fdueHybMSN7LvNsHYNueuUPcB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Wo7JV5LmUBiryZgMPrd8YmhShxDAdgNFDFEyoJfFoPRMdc23GfssFNnFvHPUtC3NdUGGUZvh2oef4Uskuuv8vMW",
  "key1": "3espHgkXoiuKrZ6CFeKwCsg9ZwvHpbT1FwyPMETRU3aH5srkJHtSrAYAFBAtWtMcAVdssE2QE7XgWA87iZckZSxo",
  "key2": "4p1svK3mzbPhefgJWtFRWuDFkc8gyRCeUTxfFbRm7SBf3pvKMD6nGxbEgaN6bC2QjQuXnmVrVyJ8pxV1d5Q795W2",
  "key3": "5hKuDfDUuKHZQPfZ5iXeH4NVXv3NJHSnCSKajHoVip91X5HmKe5LASJjqhce5cPYYaWGgJ5a3itDJfboCMrzF67L",
  "key4": "Rc9cM1HbFr67uyiTfeAC9eosRMuwey9BPKE4Sr6ie39er5hBRDx2i7tYRgzNjQpz2t6k5KcuKr2UnQDRHSL4cVq",
  "key5": "4mt8cV33ujWWx13MvN7EpiDVpTbi7586hJEza96VhZToXs2vBDRpME5KASoy55tRCER3rDgFrdf9A26M5V5Qa3bm",
  "key6": "5Ykieu2ELU741uHjE6BqCBvTTokUVYefPmfpMu9c7fvzH6Jbn8ZzDPVV3WxL14yjtMx6KS5JueyfpuZ9B2bQUYbn",
  "key7": "52fwYKg57wsHMqR6bddrVJBu2ZCrwkPww6opfJnsEvh4KU2KvhuSTPvwcHxbNqDQHpiMWV8Rh4rsTThH7Vi133BP",
  "key8": "5tTwWCCv1CQu3Jee6KRMQBtsnaxoFiHDvLNPcuyLy6xSBsWBVAf7HkWVuy3vbcBiAL5iPAY6evesCioZTZ9yUHew",
  "key9": "2NxE4i6L66PzNZTQqBA9BohSHynUA6dqyXweUz53RDy8FhAHyh5TAdPVdZfx4o5UJMwn3sQ3fmfmWsNj1paJqtfE",
  "key10": "m1w7QS3sZLsyuZXwGyqWPxsuztP9YKuwKLMd4uZtPUDKi9ZgHARx39GQjbbRYFsK4immY6sHsoNHuXuW5drmrhJ",
  "key11": "5RmXc6EZZ6svrHoUnN9pr17YAFXMTxUYrG4CRZvVxDdUnPN4eXKCfMkFx1NmTZCoMxTjKNV4oJvzHerpsyYqT1vu",
  "key12": "3Cy1KG1VBbsByvbxyd2mAd63TkKixFsQuqoK3rHXrVeJcbAyiikFtCaqJddxPaqjZFq2bY9mULbSW1KUCXQYaLqm",
  "key13": "5URQZ5h9B4Ce3xLopY5Fm4QTtQgb9FmWGiocbw4C4TbTHS41qtWFT8JCHirUwaVwkAvuMjQbN2kPwntUJfivdq8Y",
  "key14": "3eTUb4Ca4Wx4gw2vnWU81sLiHP92AtaqCRxqzjA48Zu7Bmaffg55rMb3DaxAkPi2jx9vhigWWBWmbGZmRthzYbHd",
  "key15": "8722EcBECpBdFCuExo7R86K6N3WuWen9BKbpPGqF1pNoWQRTdD9Wdc7PQqvbuuFtisj2B8L7wzLgZa6SNyMLb48",
  "key16": "BQUvwQuh7CA81wtjYcGFtykqK1218J8Ev6RWRaZRHcEGtbrixgn6JuyefQCPhz8BVAdnPR57s1T2FQ1VCko96GQ",
  "key17": "2Xzr9cKXnwHoNhqXfyktsWYrAEGsz5y2g8S9FjHsqRkCtYcMn6sdMWsuA5hBkBBaPy4JEL2gFWoayrUno3U36QdG",
  "key18": "2pBBM2kUamcxoxhJRsmdoRRTFZd7NxpvaFuitKT8BSgPyGsuf41sdjxg9zZJT4Nnzd6B46zTKLUGQGqqjgnztRaQ",
  "key19": "4Psh6hRqoTKF8oNVZth5QFqpMSWjcJ6UhFRrqCEXjzT8DALXnCbEKSNWVHuDBxdS6WPbUh8gqbnzmAAJB7XEhoXs",
  "key20": "5x3zDS71dgfE6FsKPQCcCPha7DQwHBpQRKsCjT99N3MUPFqC3AQMnBBc9mqLDV6eDe72ke9443Z86fXbXpSugj6U",
  "key21": "5HuV8LgTooABf4NVryY9RGPJWSm7EZLMeLKgtKhuzdxGG1qeLkk8eCnwcoGdPAxm4RGaNVqNcogwfdY2HrdJvuEx",
  "key22": "56ywBKA2ETK6mSaZqunYG9smZTkAoMTb8KKtGXxaNGfLrEtMemC2u7ckpSwEV8AAoeEzEwdfHRkRF4U7JpD18j5j",
  "key23": "5Md5DhNGae2zfh3Ung9Jq1QDYkEmFHhLmq7GPvAJ86rNJXyNXaRBL3tZvhmYmbfKjM44NgScZzj7rB6ZZtz6Srqk",
  "key24": "3pAy86Ledw3UKh9mST15aGW5V7Urnzn7389YUhXKvN3hyedopDogMpXZqLPatsA7jUUdtu1ppkJo5MCGPP5FmBAS",
  "key25": "2WQdXaHNqzJhNi2jdDMSUp5BmCLCWYCzEbycxhFE6TXhkw6f3JZanM4w5nrfcDARcD1rrmny6MEiGANNJ4NYrvnq",
  "key26": "5UGWiJKrAWQkFiR7tt1pJoJEQM3vedNNPrd5XQak27qK8kVqdjPR4FQ1LDnwitLFyJNHHDQYCgspdCpBv6rLHde8",
  "key27": "3Ffw9zJFfhsQQTCf4cvHmNJo9UkQCzxD8JADYBiH6ReqRwAUkXZuqC3ENcWx1Gd2VRMFd2vpdYZH7JgcMhDfFAyZ",
  "key28": "36qqmzyZyfHDrpe5mMdAeLzpgU4r65K8Q3anu7bedY3X5F9wVEY7LXinuWgE2XZ7LRjtstBdgUhFiAwmDwywXJ35",
  "key29": "3TSfvzrBRPZYkGG3dUsmZyS6D7jLmG3sm6vztGE5w5Au9n1Q8NeXjrj3k712fYBFYnNN7W1Fqe4rwgx85kPXiUaX",
  "key30": "2D69gpMxKmdKZM7gugUTk8hbGaLyD3cxUrFXgfvE1gNbFqtNa67cbi8pJGd1w8SW75RQQD21Ja2cz1vEdXCDZZPF",
  "key31": "zkzS2w4jWA82RDgSTFeV4oCz2kVEWYivcHx1exP1Mn3GSQx42A5g8YAqWLp4LGNQ4ZvzqDUhqvNwMP7SQM8BTcV",
  "key32": "y999LXUYNjNwQoT2YK3kwE1miTKvBwzm8SGysFE7iGWD5fVZxsarTfzQj9Nf2iQGH7B4dz8fiBrmx1GHbP8zykb",
  "key33": "4WFuaHG937DVndhgmfYRpahDFm2Y83VQcLLueeVNQHgY2Z4AG5fdxKbgdMS1JwongsgTzQqkwgcaJbBub8KfvisK",
  "key34": "if2H48A9rZXYpLCq5z2C2xffsMC9hesM8LL2F3iVNqJedp38x5E2h72n4i1J5Zq9AgLMZHVJXciHbpy2XrG9nFU",
  "key35": "4RtWJnguhdFwQGPfvE4bZa3rWnsdyQuTHWT3KqziNheWhz3AUxyuhSBoj9sqhb7ynq9FBp1oeWzLAco6izDFjKc5",
  "key36": "5njmgcEgrdWqoBa5oNYhj1qxqsxMeLjjYFPtVP2YT1pKeywjUVag9gHiajJUcAx831vprrkrbKVbn2VD28giDi62",
  "key37": "3ZVALF4DBVELoFb8JstBuJT4mSaQVHVvZXionWi7J6aCDhZ3tNrqUw3dgoYmJSs4JhGDTFr5xTR55JNS6Laye7Lr",
  "key38": "4ZMuXaYWVBtqvHEL4Wz3mz6MsHqPhy1RndNYRdtmoF7efj9nZC74oaN6wgQghjQg2JJ7fRZ84igkWVSG9gtfUxpF",
  "key39": "5sXZwVm2pv97cbgk98B9pbcQ5sqkXWDojZbprhnwytaPZMQjV45vZFo2g7zp5B6y2M4se6tZs8MXEFywqK8Xv6yM",
  "key40": "3vzZ58jsEypw5K6q6DCi4VcvTTi7b5216ZT6mAZZJbQZamWgdf3oD5zBi4hqVq8dXvBPL4F61beW67smPypzjnfS",
  "key41": "2Ruw7SUpj9uX3HdfB6mKNH24AZ31XDths9Kg6nzpbNhcxibf8qKJjiX5LcDAbTJsbGD93vskXMWe3AcPYHDWcpBF",
  "key42": "3CgXFF2neTaxj1HfDfBE1vLJQ6hWUfngVJsY2LwZa4aafZtEprB8Wi19pQaaSFGynB38Epv1q2qfLbyGPUtP9Pw7",
  "key43": "5Z9vJMZEJqAZJxeqnPhc32AhMs1HRhD3Uph2yxdwghLVEy9a8VHWFosAqFe7awgYqfQ9zpdBYGjipKZW7CsgEmxo",
  "key44": "4vL6LM4HpPbfCv54rgpyenU9fV2qDEMaXJbLvyeJh6jiBUEAiW63vf1RYSVazYUHFPwFz1wh1HJVdeMXzoDHzDZX",
  "key45": "3XwLeq6ZaBkdZMJNAgbZCTLnAoTbLMxZU1tpHdatJjtZZ6Fa6PMfi54DgeYQrm1fsi7FJan7swG17sDZJZKvaz7A",
  "key46": "4aH2nwk1bNocRwDpevir8SJExTmQYyr4Zj6V6GpKMsQqidn1zxvJpuyAVLr9Ywu9D1UKQtp5QipVu8jq65Cq7AXo"
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
