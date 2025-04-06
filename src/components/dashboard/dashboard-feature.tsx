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
    "4B2PZ4RAKVs5WbXPjQEesowWBcohZ92ufS5MwGGRgZaZ31U77gxur2Tt6gM7e8zwufQUhkoXDVxgGvh2u82rGAYf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fSNeDx1qTW95yQf3tzaWyM2HMB4ViN4aTx9dciTwdFor1iZKDYW7odVck4DxYDRFwd5KWYsJLY1eVcPCJrvqc9r",
  "key1": "mLZwLv3V2Uv99GAa2dyJbdLVvWWGkLh8YP1ibgenqzrTSJRStv5jwJgb3eXwDuCd3KpraHru9QNp1WYbrEUz1kr",
  "key2": "4C4VRZEZnoJe6eWgfrEhuZp3E9W4CZvsf8jpYYQ84cdU7pFmQA9dYGUEbN57jDsrEbyNXghETcU9i6HiRUxdrhus",
  "key3": "35tBCXu94uN5uBh23DiGMUfTWPxbbCtG6t1MYjkqewZDGMrgMhYRqqzYEG8vBWFs4quvK6qU3GPsMS11hTfBGBh",
  "key4": "4a9j2hBb7TBNDMr96vHHinGNES56oDxfSRvWLP5A277w8aZygyeRQxqCgfcsVvKTXDUDvWFLuxYVYnxzScLJF18h",
  "key5": "3iRADXqk4mMR4tnJc9Fim6AhaVfiRkZDmiS7tdsEsdaNMivzdL4bos3o5hmp8Etzx4NYP2sKjy2Drd6tcqEMPfao",
  "key6": "5RJkcTtv7gZ9oLfjoSAN1gCw8WJHEsAumSEBhSagiaqJpi9VXbK3o4tBojRUuFwuSNm2oXWbi1TH8ZwuCanj9i64",
  "key7": "5AGBQc3uxmaWXDgnQ6iZWd59uKZiWjyPEUDZGzfUDYpyWRav5qB9siU4rJnRJomeXxe8cwpUw4fuazhjc7PHhx3n",
  "key8": "VGoR15TjuW6GwYiVf6yZebyFEZGv21WM8qfVetk2ySFERjQ3xTa94ntfzobwWmPgLZ5VTu4cWwvpWG83N4Th2BS",
  "key9": "5DAYXpFaBEi65m9TZSMyBEpyjPS3zm4HQagqafNwq7zWqiXz25qjNqhS2jpg2mKwYJJyHUSLzZRNTvE8BvQKEjr6",
  "key10": "2JS5CwCK9W8edqBjiP8df9E9RUD6JtTiiwrxotj85Vtcq9aAtTwWT3NqJLDYrCxFTWkCjF6cJR6BFm3WXnhFud2F",
  "key11": "2wfWYyuVBDTZhuesPuHNnzwDyAEoYT2so4aWBeW77DDRMiqpje8BojJpeeePFjT5ogNDeBNKfAFRoreaB3Qpjk8X",
  "key12": "5hQexadc5gUfnihoLzNvi1pgapDMqJWcmHntmnNPdJhPnCQhhtr5yZhgqYGFxw7L9Do8XfiCqQChQmWvY3nmQG6E",
  "key13": "64TBks6e1emXsVPqNoo5KUEzaZKBHihLLt6Cau2XnMNLjRx482ppSgdg9ccSfp23JVngZR16V5Cr8fBiYXGxFDpR",
  "key14": "5XYJRH9q3sjTL6cBFTnnkahpNiL1dSbFr2niVarurakGr8Pgw4igxZCjoMDvbtdEZRVd3H7oxFLFq8Z6B7vLqVmj",
  "key15": "4LurBPHNwQu2EFNTeMCjSSdSDxwKmmBKySUznhTkARvZZHAmoYLwuuLd4mrZnCuEzc6SGcDo3jS7pzYh2qC2sM9z",
  "key16": "5eEZA49sfTrzBawSCQKU35ki1MTmHGsUrLWUzGLRvZatpCGEeKagQRc7o9veVm5twszUdZ9qAuN7owDbSm3f7HWv",
  "key17": "o2Kif3LefFn91mHVpDXRPcDpyYgv3KqUJHEzZZLJkN8wyYo9nS6UixKXMdvtfnkLgz4zoFFhtA6ENhsMsmqQ4zX",
  "key18": "Zs9Q6jZr53T2zyZoTSWWNouH2xSf6Z8K6M6gLZLB9CTrZMSo1mvLtNy2zdYai8GZPgrizDLwJDa4zTGGHuxAqCA",
  "key19": "48xro83sBiWJBkPHP2Ndef56UZUR8bJBDXceiHonPFz8MtXjTV5sttMJp1gJdnpTZX4bVdzcMJ1G9YNSqGh4fvLQ",
  "key20": "5kKPJDp6WANa29KF7ytPana4wGLMVW2v9UypoMDhy5bwja2c3fmfFGgmRCUHZqeHeY4CAoupnn3RUFkH8gpZeUEW",
  "key21": "qmTesrLovB4aJwP1VW2UD1GFc13Wmd8j5eYdidSPMaKRGBw6nCdRHvNYjFmdAPXHmq6dDt29SuYhypN9EEkkuER",
  "key22": "5B5H3b3A3sUBw3bWeb5F7xz89QNoCy8diFi3HB9F5dpmHxSp5smrBE53akyp5yYVT4TJrsVLq175bDGi3e6FaTCD",
  "key23": "2TNuGKQW5DXpUYPWy3SwGyV971HzeuNNHfwKWBDsMcuyjEtVPvj5ZqsanhXRgnotkWJELFKLaAxduBc9zVMZz1P5",
  "key24": "rva3HTVzCJhsdz2HjHZjv8xvFGMhtepCBJyePPc7yJui357vHxbi19cdM6EWoL6Z8fZoVUhY6sTCqMygcB1X5S8",
  "key25": "5REBQPwH9AgevdXThPJNd12E23EaTNTdGCUSMLSFviwpesQcjLL2rcacaTkWQN1uDdUp8i5FvQWSn9om6NGw3r7F",
  "key26": "4DGyKPsGVuTd1RoEisEWc2Brw5SdMaa4GpUeMkfTEDM2CPRADtrE6s4JYH89Y6LDeudzsDXdYrFLw9oFgCFQ64qJ",
  "key27": "417HZ8eHuJyTBfGuVweCiz3VxPUqqaBEiWqyhHubfb1fZwd9mmk5AjqBGY3qRs2aVxx7QZ8HmHKBYgcA7awKKvoC",
  "key28": "561XvKGFE19Y79yqwQ5zYkVaHU2Bj3kjYxRZGwkNFpy4ji5c34EpKSk88HpRTUwgWVUxAga6QBGgtuepCe8hE6Qm",
  "key29": "5WhRukyUJY251LE4BEgMLzS1C9MDzZuHucbe54b8bktmnetbDocm3k63fythN8umx5udx631jeCQmc99WD8CszbF",
  "key30": "5dfWztApTqL1qcLuBGg8JR7j1TuoTy1p7KZwC3e2cm2bzJzLetpiYAYbGssowQw2GVNjF2KCozWD3h3TADFPSYgx",
  "key31": "2tVVxVgszEuQkqKNfPpYxyDMNPq7QEN1KAUmHrkpx5eJohJrG5ybDxhQRPYLzhxVUtubDPi4nh8LXMbEQxLw89TQ",
  "key32": "3zXrSGVVUHhaSjqzauqY6CojYk7HxYSWh8ikG4KGwkB3qjo2KxDPDrBwfFHyvzwwVfvwYyNkaWcFHmbRHM1VbNFA",
  "key33": "2Q1f6cQmEnNZxNGtqa7zG8jvFYv5ZJvTSEWrpjnt3jaLmC97454yfeh8GWDtLoCxiT5QQobz9oKRRqnKBJmvvE9v",
  "key34": "43Fd6EVNm9aoisEcJ29hEErXGHLkTC4fuyW8qhyaMZ2tHJK57uGtt3E8z5KrL1dBPdMgyKeRnxULGvs1TL8iKmbB",
  "key35": "3LoNeFF9oVBY6ERyHn3Ygk9Cs5dziPamLTDfMAtNxKAxjH7S3M9kxsrXhrAt7G7VixrfYv88pUJ4tEQDXLKanGa",
  "key36": "452h2fJsJSiV3oyuBYbKMQuR3WwAgEWmwktyVnGvfsAsao2nNiRXKcgxNmBRxg23DEUgvoxqQyec3ZQemFZiMGwK",
  "key37": "hoahzizWhbVu7Mu8YF71L8JgmsEzh9h2qYK7fbUrpCCceo7QXG1LBvniMdFY6p1mrDtW7Uanye3tG9ukyaP5FP9",
  "key38": "ZkhPbZFHFnpAwHnFtQBUWcsfjPU3xFer9Bqs5hTtEoU6LypeQA5Gmi4RNaTXcbkTznF17u3WEY8RSUr416VKrpU",
  "key39": "2nPtQHQ9G5hLF4Cpw5ZTeD7zpJpfRdeZYi7huXtbdNAngmUZHuXxQJgsvHhEMDazmw8hGHXHWkbgpXXhtxZzmgLb",
  "key40": "RVpvd8VU9TEXVTZDtt4v9Jv7xbsGUJEQRXBWxdAtc3LWP3fwyCVp51N1gKdK5XZZhAcg4j9JoZJyzXJALPkNeJF",
  "key41": "5Dtg8Vi2TAERw299ofLHVaBNzUL8NAN6B89RauA6rggaxa5rw3N699AC2ZMPTGLpFP36aFM29vGzqsHtCYbbiWkL",
  "key42": "2BkTcDRZrGcFx9DLqC6AAYu2Doy7XMvSqStNkAvzpSsV2DfRZv2brhVy9aQWpTj6Hds6yXwo1VQs1K984rUnQWWx",
  "key43": "Ms7kX6KYWV88LzjfwWdyARQr4g4hBeXZTSi2GosECBcatdswRoLfhsvoeNh88FJDaDd1ProEugkpdCgCGnBNfoS",
  "key44": "KaREn2GdrNPPKuYseBbsdSpz1NBA5c7DSPx3QUXCVT5GkXz6t5SzKy5Gh2ThM2i3KHXD1J4NnXu2kfiEfv4GR6q",
  "key45": "esM9FqachJ6ZmEfXryBv4VKFhPrSQL9dtnYvxqppMYY7eaVdtPSb5CBjJRacAsbNgLF28y4bJNaGCWgCz6irxZx",
  "key46": "2ngCsKhMEJRGdTg3ViYoLwYQXiXyFkeCBs3CXrsiyRU9AresPZL1UMmQ8XKxytk5VfYFFTZFoyd7vGu9UNdY4gcF",
  "key47": "3RiS9yxtSbWPn7VL1UXGdvh4U7uREi5xeDTbYC864uwBZau6YsuYqMELse3EoA2XEW816Qvbcf2Qbai4fCx8LVjq",
  "key48": "5ikA87NcdNFXu2fVXL8dm5FxLev2tVKkcBP1Mfvda6nHmhW8zBbcmh4X5G8FohN8VLsmAdyNkFw5i58Bb9B2Visj",
  "key49": "57TVwnnqoCHmLkP7sxwqkzrGYstkCL3vBWK9hr27jbv3HPsaZqQzr2zNX1jHVkxuwZ9HHoz4YWdTBJpYxXPcPmKQ"
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
