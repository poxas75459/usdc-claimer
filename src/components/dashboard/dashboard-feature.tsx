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
    "2b9t8qCF7kbVzNG5qsYVDJ2TVFooJ4Mv9seCJAcN7zYsaYrN2Vyc1E9Tceogay7ncP95raz1ZK51VPGvDJYf7q8Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5J8gUnbpjF62jpY6yT2wxnm2kiCJ1YYbLWZhZXXde6xMPWQoy64xT3rrx9sJ1BazTjDwXdFNgQMCPc7Ha4aZNvGU",
  "key1": "4mjUtDV365CLDDxaHfqgEC2FePJeguSvoewxRM5b3vLAPkwsNsU6z7ua6asJZactuAy4sYJuXY6o76GitJQEaHgW",
  "key2": "3c7UAHiAGGnB4F8amqgaSC16tiPJtYbAijA2i84VAqLYEoghjxvvkEcFGsGq4GVj6bWVBfFcqXfdvauh8BxJjDgS",
  "key3": "2HvS3fpFGnoMcSKVPKcYHowH9oCW1V9YXFm1MCoxnY8fV4t4bwThqSPnbMZ9HKcAAqe8HmVhsie3TK25NJD9GSxt",
  "key4": "3aTA7T786HhvUPu76Th44G9BGmen3tWpDam7YCCfCj5iyv3QBVvNefa6kFnTWWmyejtj9nJwyYawPQNHjiDD21qE",
  "key5": "s457cSwDTtiakxMUQMSshNsvjYKuEfCm3UEgoTzimoLWL3gt8JtTvssNj7xbhVCsZFJH1tcHqqFFQicRSDjt1iB",
  "key6": "43rusjqBpipS3svuYezuZYmQTggjycARyGvcEx8nboEb1E3adoWkekJ5zoSGbM1dwg6YPA4MmZy9iSrksdKNNa9b",
  "key7": "cUs6kacViRmKiX6hc56ipboLfxNFBYEdrnrAY33jsDBj9zKmKu81akPUeQhosoBo4cfSuvF84WuhkgWcEoXraux",
  "key8": "3Qx711BnbnrECwhFocdTmE7CyMz6v2ZhKAiLvi4yEjhtH4wRc7QzGCWrb9HCGSmZYJvegmcD9sVbLitzuLPgnvFc",
  "key9": "nAvZU1umP45e81BACwLg6CF6sr6CTufN9XxV18C17AJGWDyME8XfRh4fGJa8B3W32WVL9L2urGTXnsN2QjoT1Mu",
  "key10": "2Sg7LweYbr7si3Sde6w1kQizexs2QqWtJ38KaeMVWNWUqx9kuJ6GZVrCB4aaicLBnxHoP11abfts9hGzVQe1Nf6q",
  "key11": "4pmRtDxQhtBVchhKBswF1PogJMZsyMmbrgCztnoeMJiEmfWX4bUgKx68vC5FpsGYY9fwT3kA6vrCP9SaRRrRZLfV",
  "key12": "WZL24sHezQVcL5gHbgXC8PguwXZ3uN46Ci3WM4m4ZhtBm5sSoJRsvGu2J7tkdhfAkbP8qWpBgVtGfPLdwC2Eitp",
  "key13": "3NrWhpHJyhWM9GHUBMH2TmdSuVAfKThEgDEc71g8ffNuaKjkynyaFhXX2R7hm8NHS7SsfBL1K829ZVeeNGVUzewc",
  "key14": "2rLi7xFWumuRMMAk4pkCjZBNzs5yUBfMcCNTNhc6NXcSNjgLMFWYmrzg2BiBuoa8XhaXwZFupfeW7BUn5KF3iq7e",
  "key15": "4gX66CYDgzHJJiqB4taiTkiJJCv5weKqdGrvcoNZc9NGERgq3B9beVBwtpMdtA7dpFBXyfEKduZ1RURCfVfcLD63",
  "key16": "N3rNnUm21WqbqvidZYx15WUzb1UxogrYZTSnF36rvuScaZMrd4HkvthNYJodKapDT2Zr9cSNdW4bza3BhvS6Ax7",
  "key17": "3B5Cvh3CvXzzLwFzPmza2NqwuyPQFwmkfhPEdnp6ngNN4xGDwqrrGnvYNskVdNrMkAFojCbzsrrMijznTezGDWGR",
  "key18": "3E7cdiBd8y28DFmd4p23HTBNvXCju5hfcctNEK3pdyvpa3i9icxhckLbSm9tJqXKo3gSxhEhUci4BbGY6rcs1uJj",
  "key19": "426QQDkENDhqpVJVBQBqK8gaTf359xfoyu3yfGvSrXrMcP5fuzkMizqVZB7FRaDM6jfsaZRRYMtrNy1tcNaGV2F7",
  "key20": "4zJanKBgPcG2V7FY3DWoqQbwvQgWMfYNXE26Np5LRxDQMqDR7cmToQFhryEQGe79BNM7npZUsJ13FtxBF3sLg96Z",
  "key21": "28Sq3FnBJN2erK3ks1dUkmyqHNuqRVev2DxpiFY5zxW8NtiDHvZvvt6HWRLqXDv3Fj4ycRmAuGdmhr52hyZcDWAL",
  "key22": "5jzwnCmh4JHcRo7pqTuVaZyUeQizkaV7NiCwC4ewUwNPb1vYDZja2DHFgpquxf6gs3Ztir53qn9tfAZTnpjm8W17",
  "key23": "5Cu84GHVDrkhWEATK51YmSo6fJ361vmxiB6YM5Dudke9a82BGJZsPuTr5DhgutYBnVR7ToVMhALEG3US4b89yY68",
  "key24": "3kRF6pVVSft1Cxho44KkU9UYVrU61X1LxPQKotcCnvYXH26Veu6cPa7Ay8rtUKskvBzt4tje1WdqbAw9n62RvZ6v",
  "key25": "2aaexviYGhx6QoUV9wobfF3hzjuunx4QgX6U654H4ADijZf9pf6jTayaYV4bJwUfD4FVv84F3x9GCHMkk3QvtkW1",
  "key26": "Z1RQn4T5tdDVfG653bChtdVxRmvx27ia6ex8CGB6Zng5a3dZWutdLaoRuJnAN3fdVLSdTapcKuohnkNnCAx6MM3",
  "key27": "5w2NBgbo8rSaEQ4Hfw3ZSTx9Lv5BrRuhHngT4ipVGKwrZFxqa9PFA3c5xUPPHVprTtbpjGaGPWw4eHfWm7vvaiDj",
  "key28": "3UcG3yu7Upxkif1DnMt4pYpTJzaL1R76raVKqqvrMqbVXioUGuZ2mFTdYqvhvvMYvf8YcxvhjNYbH4FChLjMBymb",
  "key29": "52d6yVVP2Ee1v39BPncxBKAofmsw36LGdxcMeTuTwd4xAhHX8WR62D3y8aRSZk9p2qjenwEgLiy4oejpqNW2A6NZ",
  "key30": "446WF6p9u2tnvrDUiK4w5cjS4V7UPyhkij3WDRexG86ukBrhWbbSCxeaLjnyaHwwvqNmhsm1bqmdRQ9YEshZYQo6",
  "key31": "2mPTPXZRt893Fs3S3wXwD6N8RaFMRu8cmSGJSGr5E3XvoyVpb9XAp8wumLwQ7mivGGLYVXpHicNw9nRZqQrvn5uo",
  "key32": "3r2K7abxAyrWbgmVJgD3rVgBVTnh9i5DrT22oYGmqG3YA9iu9dNPCW5B3RkgPbZZYNtGWZLkPKvNyGrybG58hVRk",
  "key33": "91Pyn9ue4AbHWeCytpwAbdH5hsfqRRytL5E9oMXoutXWeb1fbMua8HfvXnj5CZsKHZdketzPSjDvfVXhPTrHN9J",
  "key34": "2Kec7d3mvuzo74nwRV7jHh1NjpwkSPBRnDuxAaR3UdFGkZDm76dbWL6em39fj5eAkNbyCTo2ESeVFQwiHnUtZkkt",
  "key35": "4koCNEmybRKNGYspjprJzqLFYftenrSFSq6xDWa77XnG62hTjXEarE9pS9K2VQKyBeprrhwapWWTZFdcqwWuYT9P",
  "key36": "5g936QSc1mGccXLwTGHHE8YXj8uUMXEREvS5FcuXNRgLtStGGqaZVmjDVmks1rfRk3MWp8bAvvB73bfWq2U26g6k",
  "key37": "4wB26fym1P5j7aHWVCexwCcEUwusHqmSUeYa5z5zMhAEKdgCEYxtgsuT4gVoeZJhZ4GWxzzr9rTxSVSsresXhfjM",
  "key38": "R8983PEaEbh8QdcsJhgMtas4nPcgGRP3XXmxHxffDoMxFUnuRbg7C1ryQ78W7LG9BKewAyeuF1MA3zEEve74U59",
  "key39": "3KgHrUHpswPLgqXZfwkCnsHnwvgNvhnhuwq5bmmP7ZyABkqwBTuJcStAmTv948sFJz28AkczZ54LH4YWjCsWK7Tf",
  "key40": "4fNHCHPzyG5kU2Qv2AQy1BQ4QCh7ZF7kWdPFL9sBbc32JF8LWwzNCFetn2AHpuBcHjyz7SsbxtWDj3Q4RwmnUJ2E",
  "key41": "3S2vj8eUMwKxVw6asvFWcpUN28xLrbdza97KnafSgDgdpc7NNe9XtaDUu4dfqm1zsASGNHBN9swnYd98waY2tDF1",
  "key42": "CtfMJfyNxffsFHySFa8jDz97boWUaYJnbwmU6CBfWgkKcPMv9aPy8VkdHeJxCMEYVy1JM3R7ykaEY3C3RJViov6",
  "key43": "ZmBtDysvnfeujARxqPNDYYLXw2HyWM8hW223KhMP1a7uErHitpim28JWQV6ro727uipPvxKuUbhHzxRVWDs39fZ",
  "key44": "2M8muEHuXpLPursYA7CYGHgRn9ZLJqKPJif9DiXeKM2KcRHufsKZytGZucZMaTGDdGkQXcnFUMT4BkUBic61hvhJ",
  "key45": "3CvFRRx96z6FdV6gxYgDJgh69crUYu2vbaKuzQEsfN9dBUKJa4wHG6KR9LeUwVgfBZwby1TqeiJEE5VXVz6Mk84c",
  "key46": "2DWFfHZHrvTD9c9iw3Lrs2YZJ4RjjFsD43ZMa6xTjxoEb91v8BxhDECZrzEjhdAVHvtMmgpZZ6do2W9i6ErWSqf9",
  "key47": "29E2hWx5r8dhTqK1B57t65yxQTQKwbvB5eBkABHoPejY6pQ8YyTjniKULQr7UdoEsE5zYPoEJPsVkZvV3aWu64CD",
  "key48": "3KN3ASXsqB4FgSXGiPKdWQmXoCppXZunaTg7sUkWAyDXEArXRovCq2pYY5WDkfkEcncAhrfYB8cRn3yQ2uMcxBfN"
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
