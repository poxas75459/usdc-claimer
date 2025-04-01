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
    "xusfJQ5HS7TyodmTvdzvS8sYj5B7XESHGcnogkRsiUJaNrnbWf8bMM6f5sYdqGV3TaxR4ZuXYA4eQCrnGLsbrGW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46hGHP9zwnJFeiZ5BfmUySfj71A1xueQ3rkxbfupX5TkrNSob6mnzPVQ7167MgAoQuE53mdMNjdsbywzrDFNgVo",
  "key1": "2ctyUbBLUXVYp4cPF3aPzQhEYMMSz2wo8xU3hxVMJDrHtMAc2jFkVHXdKB3ka9QwqsGBiEB91sBmnVHr1NKro1bw",
  "key2": "3TXQsC85FF84MmA4peBLkgaQa5Y78gTdaNW4NseFtLZjc9YNPBu2KkcrDD3rdrZcN4AEYcy8QXttrVPEDepc6wq5",
  "key3": "248TK1BxBnvdaTTc3Dw6qwr8PUiD2f94dwiAZh1hCYNwKDLdeuaX1gKeqXQkywSXwXogjRCuiZh3rMmBMm7MyjvV",
  "key4": "2vHe5VJzRFK1yiwUjkTTuWPsFcLmXa6TzAK2XbCmo54VeugkA3yCPDiH5j4L9XyrJ8MWwaviMVTCJdJtQmbBxGGu",
  "key5": "2kH9WfL6AAHGXaUTxUEHfEVQRqBbX3t35btLpRfjqxsRZn2TqFU6BxFc6XWEk33QL6AXne8XXfTUCGhjVU8ZoKaR",
  "key6": "tCPJ739ibgYwTMVYeCiNodjia3UzFu1F5Wz787P3FHhyT8cQpAzLE3Zim7UuBcnWroZjMBMi7iR6dWwmBtnikAY",
  "key7": "HQsUK5T5YC1Q4tBZoJTt72P62WcfFzcwaAeyADMmNEH6Q3zwzeCAmW56zTi3jLWLyknsXct386iXxaSmzdd1k89",
  "key8": "5HoL7MQAiabaMxgoyjSHzRhxr2NKFeM4dKiDw3EgwAnGnRWqohZovdujHmdG1R8mJ4w3tQQQRa8cX4VJEUt1wFNt",
  "key9": "4NnzZg2gYx8jByPDj8ULRGxavJmgEKzcr8tbPvcfUU8tH4rEVeCkLCAWn7jJjYiRo7WWuiVntvnJ8RDGH43u1DmJ",
  "key10": "3rETMsjGf4orDkdJaerBSH38kD1jTUgVQQ3dpqNKTfx4aK8Ef8wp47X2idN1zGTrmgLRdjy2L1oxN2CzjwhzXZys",
  "key11": "2UdzstwfPib6RmJpPmHpcfe9nZjWF8uyVfUvYjRfffzzVDvFTN89UPLAMBtCy6nGryp7sHrwEkxgYpdTr1LEagZo",
  "key12": "4keqEwdUSiM2SRqwMZNvwMY8ebvZtaDVRigM9JTvqDfsWumhvwHcdfa9JcitKywXW6VFXJvmAG5tFQE9Hu7JjZ2y",
  "key13": "145itrS2xMYGJgo3Ux1u5PgnkqJQhzcSLC1tHEw29qqvDtgRQaJqauxzDUCMTkJpRovg8PDE5PwRn1u5D5j82f9",
  "key14": "3D8qfu4gAgJh2qtc5qzg3aK99dsMs6uB74FFNdfDH6YipmX9hXb6tKURwrYKAjxyJu4xpgLGB3ERkut61j3noxqJ",
  "key15": "2GoTBh2Sn6Hk8yNCVJ2LruL1hjJLz58RwBCZSkf5siWfX4GE1JUTeDT3WkKsQgraF5Rm9qsjMJtAgjW7Dzafp5Qz",
  "key16": "4Rer8YAdpjmWzer6nLh7gPJbMcrVcmfzb4TWHjZviKrL77XHC43foJkRZN7CjiLEi6yppMCvRAF1yR8CH2mMvw31",
  "key17": "36sAbqxcg2NYbPAxfHeunYxn6dhQ23vedVvK9AiuZKWQjY3Jrsua4hEYVxWUzWvdHHcd82dhS5aEpjyBpUffbdfM",
  "key18": "2eLKKSHFoGKB7pT2nnidvRSLU4xLnbtNtqZpoCidDUrzAJaqbEjiAV3YgF2HHoZg1oE9ueQ2epg8MsqnkGTn6qpx",
  "key19": "27UDZnwtag5pNq3oetratMzCSrPLnqFdVQ2tbvpKa5w3VSFjYZAhy8fPfkyd9XZq1hpGFabVpt3Bq2Af8xkEh15U",
  "key20": "67aFowRHCYRHCnp3quejDYupPo3nzDwArk88TuLVYGMnEtbK4SK1nq9TSPVo1ZVhgPNpUmrrtBXrNaE6jAtZ99bS",
  "key21": "B3hUvTHtTd4dTvBnWMjQ7G9WBwQGsiuM7aJWs2axHa3Z5fHXUgWmqqi7fBtTpt3iUDgGGCMnY9ijhLWJkYGq2Cw",
  "key22": "4q68Af352mHc1fQ7AFPmrA3gVL65cDZWFbcYooxq72w4hBKQgHFPEci5iAoc3Z2sW9mFJwUa8i57MBtrTpckSBG3",
  "key23": "rW6tKLMDvrYKEwrb35uzVYaRU7xxgm5toMQEx7wQ79Na7Cn8XHuqf723zGxVVVcBahT1PMKfpsCarLZCEjD5Ywo",
  "key24": "65x337SLgEF591P8ov97eQbnLSvWsb2mndZPjrvzjomRLP7JT5jxfcGw5nD4FaoD3bGymCsqhuWwV9BQtH7oooSU",
  "key25": "3rkpqn1bV2HkFwCaKbHmDMzNrU4jtfcEp2nobiC6hwJ8aBNsvrPSZBJHGQc4sRWnC5QAfHFWVxtTtwFMLYscdLeM",
  "key26": "4s7omiEwTRXyLnVZGmRPi7Ceg4vtyGjBHF2pUYM8WyLXELdJFMhiQT3SqLJrEeAoMqTgGmoRroAw4wuNsKky4y29",
  "key27": "5QzzxpjcaiTttd6jmHCJqKoF8bSsida2JqdZpq8MQKgQvEhg8zom4EJ3J4WeWZjpi9PrQaZzAMMijeRKXBMxTsS9",
  "key28": "3cYC9yVyZBMAXmhRHejfieGZpnHbX4sZ8jQy6ms66BSfCv9YgTHbucwXxWkmWrm4i4AdLSziNjAF3B2sJY3321ea",
  "key29": "3rwWzd75DrhUsxtPMpAER4V94nGSPVKJX7RET578h8B1yBYbnthPfdskeUQ5aMT47GvUxMUK3UycYaKB4jqTwAJa",
  "key30": "2A7TC92hpMP8YWmfRgEXChPNq8Vy28UNKfzuGekiriBXQvuQZxHsRcqqaiBD2dBn4zp2CPoZspfgnLjDSVnghBVM",
  "key31": "5JVn9vcGVLtCUG1zR83KWHnwGwnKyaMSDAWsEeCfAyisC3RD5AnKG6JcLh6Cp65uuf5tUcnzqT4rfQyhokTTgjnh",
  "key32": "tQyfdVwAFtRxjTJpjf412oNuYrKfn5xB4v6MnyJQjaRsDuNUfCLmZVoA9VMaRKV6mnYfRTVKdbi3P7zQVRPmG1F",
  "key33": "3JGvtSKDSjN6xUH28bqs1DmAuD4jf7NrnE5ZBUZ7duJMk5PjD1Jrpgjqzg6REHV1M5hss1X368aCedfCQX7Db3Zu",
  "key34": "3xfABYikMAeZffWoiojU5t3rPLib4BgpCHF8eAZLBDB6iNpqaCaUWXn3ZbdUvTynVkG4eXFy4T37ZZzDTCxHKqhq",
  "key35": "54za5WX5ZF6h2eeReFCn58aHWYdFz1xZxHHCPem58oUQFrdM9qSd9JaisPFd4RBvjwmQ2KpysTbGcYucFH4j4oso",
  "key36": "3TXYaAvWsmH2iuXFPfcFiB41NhtWco6uBhVPEj2K2udERbzUHZyagxzzNUz9fkgeDJpGgMb2ZBHU1j6HSN7bhEm9",
  "key37": "4f3NjzzLstXC7MZiovUdpHaNvnF1ADGkpP8qVuYmmDQ49MeqGFPhJry4T8tmJnQo2CgMfNeAKvKNW786QgnEtNa6",
  "key38": "5Q8WVfdEFv9TAC5Gc6Q3TMVyhx6F7WFNEVmdwJLv1tMrydDDSGyXdiG2qa2CvmhU2brj11Kf7P4i1JsrYV3miuEX",
  "key39": "66hRXeHjrTJpwsGFbJcwXGpvber4qU3gYcmknYdxdvUsi8PApEQmWfiVW2Ydyc5Aj6dFfr9UUg1TjG6WqzQu3Y4Q",
  "key40": "Gs3zbSmkgKgakihYcD8g9Aipz5hd3F7TLWXGEbMsRncjYqXrwR4rbiwvnQqiFkmeeii8m88tjCv4WxQqGUJeuMi",
  "key41": "5TFRCZMyyceeMMb1ru3JBJoGwgMATFA9EihYXGDeYR7mjnWVoJZi7WjpXSeAiZp9hHvNTzX3MYkF3DpP28RR2txi",
  "key42": "2X8pGH9azuaNwRU7iD1Ej45uBrBxuocq9xpx2LzMJXvy6e1q6YN1eRXfp6AAx9vTyboMPx4bPLKAvzrb3HAKm9To",
  "key43": "4hD5ddwD6WsfTEMqLuTSPo3Ey5atJJj8NZbt2o2Z7myTvLeQJHykX8ssZe3NfE5QbNYJTYDYgECecz9VYvkUQpNZ",
  "key44": "DXKZsYNAuFKKbwXoZsA4ueTQspyMwXeWLnarh9GqbtcQbYxci2mbApLi7WvYBN9Be7ewJ1xYSNQbMvj7bQ6SqZ2",
  "key45": "4PKjsRtmMVHu9yq3H6BjRV9ePzdt7Ppx6MaV5i1rXKPxfVe8hNL7xDnJCZu1fWdEQx6KPv45nZCLe4gVsSe9tQB2",
  "key46": "3bjSfYV3ZkfviVZh1bFVJ6duCnU9uYdAmvnhQfpDS1CzK1VtAQDJ4scQrZHMDPesUJwykDCYeLTEiZMEMUnihetQ",
  "key47": "tNLs1CnfR3oiW2r378f141CWuT91opgxFNNj8wF5HT4DQkBSTnmSmCBNJA3UY5AKKSTBTJd6KUNovPGj5CxaQmc",
  "key48": "63uwYTx5QhJniK9aVBeB7z2udfNRGUdGKK8NoKnUyGYadbubRf1MLZqbCHVC1bdZ8cfYt5nA2DiKWHqtsJownKFT",
  "key49": "3k5jK6XxZgiM1aTR2p4uGhoMe9x4f8rprsVL57E7LnAz4NyAy6h6ajcGQvH6WXPvei9h8XTDbGPyMjLdQryWfVhF"
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
