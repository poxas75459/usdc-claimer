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
    "DkmCRsdH5AvX5ZozWMNprLmEnYEV8SnRBzCP5CuNCzf5jbYVdXqDWAbqbpgsqSzwYHnxssmFjRUgcZWrGUQVMBX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZHAWsPAQtRi9PuaS2N1uehUGQLD4py4xpguDmEqfA2shS6yz9oggMVm8vkfG6Ro8AMSHwgHEe7JPtYHnZuQCfJF",
  "key1": "5LZNFPm2yS864MxQVYjUrfXNd57GFVYebZPqgtLwCTtAzHRTGmdx5yVga6W18x2j7US4B3LdFiyrf6QtxzXscaBp",
  "key2": "3xiffLyFnW8psGSDbqxwg5JJU8Z8xpyzV1bmqk57ZUm4wMa5WruKoaUgKzjeqfWABouVhfRJYdAo5Uvsfck9vbzX",
  "key3": "2w5f1XqCWVRxopstSJLnrSAR1D3yjvmxEhVHYgMjga9mD9VSHoGf7GNcQGeCPYc3suHbkz21uUExfswQJ3pfvegn",
  "key4": "2XYGPVqp9BYynKUGvVUPrLvMDhjPvrmPJXP2dnzfUN4UwJAAm4uupATft5hLLLTEKSqR73GLT4bDmfnHownPyMTs",
  "key5": "28jVv1ckadNzcDyySFV2bpd2unpysUFsg3Rqrpp8npMxQF32cb3VV2BUVp1kjJtZjeRuKoWSrTWsed9YDUytdEmP",
  "key6": "3KmP6svVMq7UNTFnowQfCai8vUoQUpsX8wXyGpYa798eTnyszJoGpGdxU1xfsPTppHGNoX7L2jpUGcxV62FLwSzR",
  "key7": "2NUp8yFx2rSavy6ekE6fcUVot2JaU9dKeqV1GbqDe8j7fJxRHvWJaUGnjP2b7dFQCWpwW6dVMxc4vurPbkj3NnLN",
  "key8": "5SorRP63kPi2S5Ka71ZvUyT5VjCXKhotCNat7DGCCfdncNnErhKZGoHTDLg6zdKo66x7uLp4V8WGDPxoxiei7YFW",
  "key9": "3qY3a3Q6hRYfrACVno2MBUPxP7U4djxTz7hD3CS4fyenLbUpchq3Ciu8qHoWjoVzXVcPp3GyoVFgvDtmzAUVYn8C",
  "key10": "hJZgfDgMBYigoVUpcFMJc89xBjwnHCbGwBDsYmFLKxUiLWuwrHbxE5GryXsnp74BxtVpyPzUB8gtygPvQTFYSkY",
  "key11": "5SFPbbWgPjWonC426KP1Ct1fSsYsqt9jPdpXsuwiLWKit1KsLSJDXWskbUDV5yo9cPeLrzAqhd6noRJRikRBdzgF",
  "key12": "3a4o6MVJw6kBhMnaU3fXw7yhKQ3fMSM4RGzkQm3YGjdmztYyYZXyTBYt1DRo9XhGzjugYzSmvDARA9QV4v6d8UQm",
  "key13": "ZzrsZnmkY7AkR2gpq9TBvc7iScvd5hiB75RMw21fFY9dVG1w2uq3LQN4bjBWnoU2aDGQpm6e8MP8gLpjAySj7RQ",
  "key14": "4mG7TGwWebnr988Su1XBSqiD4w5vH77cXBTxR6RKCbiqECbvEWSdMZSAUetHuaaX44Zg2VhFfeV49SvtGZhrr5Tf",
  "key15": "GoGSHPc2BP5YhMifC44eTEziE9qfL3vxXwAnnY8XjBpaPULskvmaRk5LuVYYHBTCXxLzVBqPC7wJxubBPHyX5mF",
  "key16": "hvDAUix7KTBFGZWtS6gYq1JVrDtfMWH2XiuZpfBSyAtqStm3Bfr3einc5L8e93F9zzh3V8WjVcJ6dqSmykg2Mgd",
  "key17": "4BbwjxXtGKyvPL7XYXPJ9DNpjfrfyWGjapTANporpscLqkDtoJPkKTUixwq65taM6aNyCABZPpMiBiQsz9uUzRAY",
  "key18": "3Hnjsdgcxgxw1uiMXTxUygrGUwpWmSBrsvCwnTDhGR4JsHbGBCkz98y1bjZxoVmiGYfv45pStL8pfgz2uDRRvHFw",
  "key19": "4pCCr9gnwTKJmXLMUg6YNxDpcF5Vkws1YX3DDPzy8xYjef88hQpDGhma86xX7L9EcVsaW6fvckPT9LBgX7HMnxQ4",
  "key20": "4UMJzfgjCs2zjjRUKAZkAqu3JKt2FLcENvZdN5De5HPa9xtnYCzg122ZPZmRpT24FBY1SbwsYaL5gKygRQjeN51T",
  "key21": "zWZKK56fuq4yKzPEL2YWx3JJX9dP5CWb5j1VrMyBSvFnk6ZudVYqY8zYEg6z47tivHvzDGqNMm4pSYDGm7Bqavw",
  "key22": "4YXzwawsRtBURScHuxtFPpAaPfMHnon9Dsju1iXUf3a52Xz1MojtowFMxg9YWfsfWRKsxtGVi3CK6md6KVEFxx6o",
  "key23": "5ZbLmotGsfKejZvvZNaNobFZz299NFjAALsQs6CGKyiEMecN5aetewSK57t8GFxDrsdCc8rx6Th6cEu8Bzp4qkQh",
  "key24": "5xMH49M9hTyqV6yG6WYMsxydYFrVaTv6VMnrt6MPYsBFpGNNcVSjLVUNdvwpsQkcZUxdEp4qyXm1rSNTHQHzyvCG",
  "key25": "2qUP5XdyQTAQgz4hvVAAS5bRgH15fFm1CcfuuofmB393SU1wKcXJkVJdM9LFgzZRnPrdzyXkhivFHbYcjBdS66LG",
  "key26": "5S4fDodGVgSdGRaBiwTifWJiv2DmEEfgjXxsZDaVvdSKjSfamWSmFJDgsYE743RAQqAwFjte2qNjworpRnd5YdL2",
  "key27": "4bPEd1oU36uF6v8T3aQHxtobLKAf9dkZw3Q4rDciFbPecs526FbE6mdVqjHYLJkFKGpWHsNBcF6opzb1tqXBqoa",
  "key28": "4EhHjGUgpVcsYLaSzSKXuhLqX3Jfmj1GQwsghjRAmtguik4cPK6EghcU8SDZYjzSSjsEHvXodX4fEcgeZqfwzyER",
  "key29": "4scM9nWvGRAjCWWr7AFYjuBJwXNxfiEsKNPoEBfQdTt1azrfhe6PwvrbKAGgfpNafPuwFMPdEbPaV19PaK5tqGtQ",
  "key30": "26stQydZyTevtP34zQr6y7r3KuvuWke2oRSvp2DKRseW1G38JwajPf239i7Pt4Ky8LxdiyfhT2E3tmsGzFUL4Sa8",
  "key31": "2M94sKra7YnD6GtVgY8wPhusThUPkjD4qnHSWFDUVRfHJbZ14tXRuUQCuLV1ANYvdJ84cLNmynsiHdhSXoLkkHiB",
  "key32": "4wYTCgE75oakWjJRQTHcHCqghYVD8D1BRU5XuX6C7Ao21TGXwdX9defuNfp5gSF72uFJe7WvPppwKVXewHtWVA4d",
  "key33": "2REJBn6F8tEGUmQbnaXyR5JvW4b9BLEBzgRvGMvcdLtFYYrb1x2gm13HbF9oMmL2Lu8wzAFbkeuiZRURu2qQZNNR",
  "key34": "3VMEMWR6eXYF8me3yuZYaKXf26RppCfPN7JuL19PckR4K8bwecqewE3eTyTGvhrwFeA5FiiRFfzaFqWQ3yjWzfZt",
  "key35": "5eK2s8qsUaDGpuNdnxGKTBf6Rkaim7D1NJTJ3qrih9XqYMgEzTuA4UeZhvK5VFn32u9UjbRjJyEwkCgxeiWFV3gA",
  "key36": "5ooV6wQaQxt4Eg9pgsQsXJat9e92XdTZ9KzzH1C2Jzxc296on6K4ELhrgoz2cPsncJVTTEokh4EFaS6HpR77LSm1",
  "key37": "65JUWEz59LazcnsduSpEJ7Hbg6nTBSs3QdjWM69djMW5uKjGVkB7bVT7RMytZY71mcbGvVphbaYskQ5n73b2Jrn7",
  "key38": "3JfuKHFCjeDYhthDsRyvj9hZ7qaN58iWzFEzP8gdWqE54fEsKgGewKVqb7gLEvQzXZYisUUBcnK2ZPhZWK2JLssX",
  "key39": "5UpKrn2jpT1K25oUSfRBu97rdnPfGAb9BxJ2F8th6LJrqEWwEcnzszAVN7u47KvFx4eZTh3AsZkED2msz4CwxuCo",
  "key40": "2ZHZo7fFLAt2HBQGgGZzxdJfydcBiQ2FzzV51m8bpSaRm92dMovjERrpGgPF1eBNBRcqE94qN5NsxeDiCWaZwWKV",
  "key41": "2uuRJLc814RDsCvqPH5WBiB1TvtfAnjKnxh6TQhRFQpQZpe9y77HVQjv6S4ESD1cZV6QZR1b51hDZfLgz2z1xDmK",
  "key42": "4XLbKZXbEXPjZ4Vy8gZso8UHTXP5zjELBuQZK2bnXYbrf8LPRVfhnVUoGWm9BdvUbq6ndNtqvmyyMmkRavUrLShg",
  "key43": "MWYxDX1pjnqa3BftXNBGByS6fEQr99WExHdVCcTByp4e22kEZZFXupq8vkjArRBXuGxchZNS5b6WPQgdc2PRyAk",
  "key44": "3YMSHiD8i9x41EKZt7T3yDUEk2wPHZqctJgUWA7Kb5sC71c4BMoNt1nwFGV9ZSkcgdckawXrYkwvRBZrRUwPSeuF",
  "key45": "3y6sFn9xtphK8qmPk9CA5fdwqvK8T4zTPxcppG3DV3qihH24uPZiYaFP8L4X2RZHvnJjhAiGzcT6tX5iBzh23vKK",
  "key46": "XLUPymnSnTFfRW1bW8NEqJQhFuLxCPpae7E6GmkKGMcqNxpk4nyFQ9dETGcbiqicrPLaJmte3zy5c3CnS4PbnKK",
  "key47": "3A4WWhZDma52CX7bGwcNZnm79seJyXEFUd8d1SsPvvdYDhTbDoWwNHCnXfr4jpGLY5U3QnmmXTZJYiSWFgFtp2pD",
  "key48": "5UoToh3LxfR79Pq5ccQvRYDUUe7LUdTsLdYWm3pAz4KqUW87ftie2KDnN1ncJQRniKvs7wvdrW4BWsbrCHiqdYN9"
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
