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
    "VQ2XZbR5MrceSMpU3ThvXFMacn5RMCyz7N5nbiKGYX7fkCDXyS2KMx2TMoTirfpLFpFGhBUcTmXkY3cKM6whj61"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oGqa296x9XFdGMNBT7UWkRcwL52WeXzp3tGbpezYsxBF4tLDsAa3KAWHvJVMpWvfZhVeLhmCUky7z4XERXYyVgW",
  "key1": "5zXWGpDc7Qpd2LwsGciDP41pZt8FsforSy58znkYAiiB4zjZtM1jBXnz1wC9nnefQTPBGYCqaVSSMLtXzcU5LueM",
  "key2": "3PM4WfdmcCUGnYd5nSgWRtWLt18ghU7wcjNNPPc8eZKk5QA64UmgrKS74Q7GBu7PUnDpzVKZTXsr6igXfqtGBNcW",
  "key3": "wXpfFCZFKdQ5fPwguJ7kvsjsfdHNd2qFdcc5wpy88rWjCp3DTCXUKnWhy9hfS4bjdjU74h9Bar1f9ZMuD44mhfM",
  "key4": "3oZZsMzFvbUHNFVGQiGRBEvNHgJ4peuPKjodCLbVVpbC1gvNmimdxDJ5Q2B8qVacZCYxdok2Dzd1ntKBUKcXuA86",
  "key5": "4s92ik5vw3HaQSbcdZD4gnsEoAHAcXwYgGV5dsS6yDBjmu1XzpycfcnhKm4EwoquUoVuyqQuQTbso4YVNSejAWD6",
  "key6": "3Zq7XdcCUHadSJjWFuhFVdCUom6HF94ZLn451tUhvzcEpfv5uWGZhdi5sdvPxmFnnxJdW93JX8Z7EE18ohiQUD46",
  "key7": "1cChNQaT86hkg6rhGNTEs1EtXuGbf54Hr3EodNbKGun46SDa56SMzugf2VWbetK9D9VJBwdNyngEPULJWatZkti",
  "key8": "4Cy87RyK1jLfwfRMTkBL3LGMRmcWnikjEjGkM3pCvV7rysQHiuEniUnnTHcbCr48aBSEJnQJdTTXS48Pkuf7kqg4",
  "key9": "5nJV2PnE39GKnrB3ZPJuENaYm6MQyC65dkb7RbuSDW2o4FVp8biru2btMgp8EMswmzVogY8LhPLSYaWevD9Rfi9u",
  "key10": "RD3snN9CPCCZJdb1TiJc3TaSLtw9QRQQWRSmd9dxEmvEmQh3bnEuF2BaRfnSTAGmHjCNq6owVQuuzWweo4jJEvo",
  "key11": "DYKVBbS1t8nqc56bGvtexfF6C4DvaknCvjYbE2GBXCQc9xx836eCm8FwZzoKdY2GY3AJrGrvvFSUHWAmPrAt255",
  "key12": "8xYUhXq89shPhw9eUtuftAxYf4bqEuRjuAax9Fi7H7vydiZQTsYVU5bWuGFdR5BneBKi9W8rHtCM33koQTG4Sfy",
  "key13": "5h85QeqS86pwugwARrTh64KNFCoLa9YPY2g5W8TR6673u7xumHGipU1FXe5KYyy3gXYEK4bUbeiGgPVkkfksZMF9",
  "key14": "3pQgkfTjCouSYvr8R386Ui7GcHVpK7NyLkMUc43tFqrrAHkgQB7D7btE5c5bxgQEGNMxzVrFefSbXseKGmxkV9wy",
  "key15": "4sctXuwoR2bWRZyeSUzdtqqy1bopov3ojEn2tMgkZFsvoVncP7uLFEN5vEVMfM1kxe58jtuC3G1NK6xtGffXHupC",
  "key16": "URnsUT76orcwz8FJaLJm43vLX8jHAiEto6ibJLzc5SfHMgNdxKy7weryQTA9oVjYQkdkAeTKwQfH61fVyw591WV",
  "key17": "5fA9zRr83JtXz3uJRMjqoLJCisxoPEyVZC1chr356qAsRHBp7Caf1Qgbs9uxJXpcEvcun7A4fzg6NJoLXe4m2bZG",
  "key18": "4BHFvmHLWvy7RwYMRYTywbmo5Rh6kk8rkGwqZg6X6iBVGtLHKPns3nr574mJrPBtsMzrifS94z12Wr24TkLwPW7w",
  "key19": "2ENhJtmeKNdnTXrGP5dJ5iqZxe5f3JorP1dpzifBnQ1XhAnGYUeyasR8tN4PWKZjcGt8dMehVh5UEVwb8a7FKf2R",
  "key20": "3yfyLB6UGaBsbf4iYArFojbmtBT7J611qw765xrU8RtyvmzJ1L5VwcABFQ1znS3tyScAk67D1nogVX4bRvUM2nzu",
  "key21": "4TvAS6K4Sz6p6xu7VsSoAvoPvUabjR7TSeuxV3SwMBNRmytQwhePHZtMuGGWn4LMh8q96hmJo7DnnCWVxMEcMkL5",
  "key22": "qmRPBruoq7zhijkhtDLHwGSgUDoecSc8ts5bgwrRrKpgHZyajXnStXuEzTuiEmnmwy1BgFxZg9eYyjNAiwXVzr1",
  "key23": "3rzjQwuVsLXtLJf3Z7wSUvGhNxxbqwMma5H1cz7ALBx2WEpZLSsBzgryFfhRMLvdzo3ZMkBwkL5sCxGty92ghs6r",
  "key24": "2h9zNdssJfjxu1gZK4KGsdGNC1rbArnXjVK98JG3gaNC2Y5uahjZdibwbaGttFRbR7xe5EJAX1kvkCfEAv7Cw6pm",
  "key25": "474T68G37KBEpi2zmWAf7vQDs8Rw2qGR7HmhERgGDJ7ZAD4tCHpTeD2jdkrYd166yGa2pgxkd1b5JzNeSCccwZy9",
  "key26": "2DDfTT53gfUcUpRTYftiXUWeN8nq6R9yYspkpVkwuoiyWN8k2h2y8MaLtUVcVrvuE6ffhYdvvV9YJBfLQE46cfET",
  "key27": "3JFJr9sCn9EW88a3vo2PNk2y8Rz98Hz15ktHSGVQv16mCv4b4kTPCr4VcVm9q9t8swB1hVPC4s4cirxy1ifg2pRe",
  "key28": "25VkDFzcpsAvJxALS9gsCFtBQPgPKgyfoLGKzZF6KW1jw8Mp6crW691gPrf4T1mzMAq5k4U4STDfxJoqsTocyoyo",
  "key29": "4aTcK9cxMTYpYYnFjqcH3h5wCRquUgrpeyM4Zi1o78gGd4zEzN7BD3TQMDTfHH1t3aULx1mufip9a5bpfznKLKqx",
  "key30": "6hFfAeEU8KyzTbVzrLNBtLU8kKL64TQGhXoFdJCXUHzLviH38wsXfxYrsEeURcLXAksd8J4P8EUp8GHJQYYZSeu",
  "key31": "2ZCmeT6bRY597oqYp3hcf37wxcgABTibAwRnXsK39zSKpzW9Dztt5bEH2FjacNcECWhUF9kKXmJgLseu3cwHYYiC",
  "key32": "AHvetAqzaPrHjKGEhqsxdPjscodzqGbiVgV2C3sUix9TrN5B8cvwLwgQLc8eJaZrwYVkGGbGx3RWXeVmfg6P99C",
  "key33": "3qLVytr9Q6cav3WBWvDoMfAs4YAihoLkNqjPAghcyXLYnCMohVfVkDJLQY3qb4h5oUHBUv9Sxz4qjbLLarNGgJc6",
  "key34": "3naiQpgyr7gy5kMDK9RVqv3q7Y7vPN3nLQp9XKSawACC5FEzhqTkHcMmLCWz6DwcpKs7kuDxLD322Cf1vx9NUp2k",
  "key35": "5xp8qBw47oLKPVNhtzdgKP8jRKDzzkrXmhQo1wntt9ibkje5zQHpu6roe1dVCNmq4r2bYNX4xRhjma6Lg1HogsqS",
  "key36": "4o6ivemox9p4Sdj1FwcxaZWE7ZNovs7DBdXA1DVd6SDkdRXCZ6HRJr41Uir3iTHq5BBqFUyfsRzQ6RDxFBVk1B7t",
  "key37": "bG9coMWEeg5H7hFcT5z9fjkp4ZE2fED528GP2mP2Wyj6SEVgto7qDwA9rsQG9J4bhWntR1qhi6mNruwHDqUdREK",
  "key38": "5AqD4nGeRhbEWyq2KDEA2mavBEvmSwGskxChzQRz2cE1uAZH7rQ743ZbhdGK2RKnjKB5RNWe6QKhFB3AcBmK9TT1",
  "key39": "4dLqNegTJ7pt7evvbe2hxJRzo4o9or5xjZnHethq7KexYeboSWE7UDTXrComP38o1VhFj4EKCpi9qV3MUYxTK8ht",
  "key40": "HQcFVsprR9qa7BCoxFPL4xiz24zK8FWU24enFb5WGp2Y9FFWjCRcx33TRrGPQ1oUPgHsV3Go1pSEVPqJvKTBm56",
  "key41": "5SfyEr7KX4MtuEeZsrDuEJ3uuYDGqqxukhpU6Hwfot1YYBQWL69j5Xen1FMuCiMFF1aqZwdiYifvz2rYpZr9QgW7",
  "key42": "4GL3cfBLcWUt9ueggrthC7HDxnFNthCcDsmfgkspgr5PQPxHbRVjEs2wFmDxDZwPaFSH74NoZ9Jea5ZGieSU8iak",
  "key43": "dMx42YxDvSMK7bnddsHYzHJAD9wgzjn658pZhHLh7ULGPfEscXzBHRxv8Z16Vdg9moetfDhZ9NYCU2HuoqLA6iP",
  "key44": "2p7yDkZh8DFjyM5LhVfdEi5hoYJnX5WitxajXJSTxNcHCuyqW8cAdceQZrDjvM5PeXhrFnmReAv17wtjjdLKjVX4",
  "key45": "2QJEbz3jFHqczg6ZoKyWmrKWYyPm795Pv19qwaAg1jYXXUicUPD9yvHRz9ts2KPVZLfg5ji2pazEZjewVSEmCj6C",
  "key46": "24bpA9LpiL33rYq6NGxo5N5zpjDJ8L3mK2et685NpVEBY4Dh6viUANxtTayDvqtYfPHqmUfiw9gDEXUQwUaqryoT",
  "key47": "24jD9SVRdgg3JvcfcNpVPnZRfpL6Yntcf66BER7NZM36fC6U96XrkZpLfNWJveadURwRVeAnUYsuQX5riyD45fXJ"
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
