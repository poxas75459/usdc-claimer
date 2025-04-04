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
    "2j2MEUC8iev9WKGd8Qix2U5beB8yVKiLJ8kCjDcGpHNXqNWbf5QjJNZXQcevW5NmUWwT4r1fSvxEBMMRcMHCAKWH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CxJYFBfVatkYrj5AjiMQBZLgPZj16EuP1rLJoqc14nd1EyadUC1MQ9vDaojnzvvbY8GFqb5Wvna4x81BKUrUrXc",
  "key1": "3qjseYpW9v7ACTjbabAarGjkfPaT3V1JNjv1knS1cwgTEEcDyXt479up74AHbYzsZQ5Gxgwfc7xhKfgUbe8ErZsJ",
  "key2": "5LdQFzrEA4wCCXhpwXtWxZJuDNv5TdwePTxHhmvA8Gso6KYABJJJ5iRMfSrH9haMc1fiFXXpX4BewcvmhpELoU5M",
  "key3": "47pGus4Gyu5KxGbryPczEzrbybUe24DzmTcX9S2mC59VnY64cSFGntHsFJ5kwbixzn9Xg1A4djCuih7UDpNEtjbG",
  "key4": "4kspxJNMMvvJPsMUAqumkWUEXH1UrwL672yNVJwVm1Vc2dKe5QsP3kFtsmB9QhWhz7crFTeQQLtYeHuGK8DTSRa1",
  "key5": "5E744gTHvuXs1voAPXeXTjnxBkMo2QT4u3xDbTxEZVPQi16wRC2b9BhmHRQWzrZ2mxtiB1fodcdq2CWCqvBLpVPF",
  "key6": "4DSBuPJsUc4bM8htnrF1qxyfknNSNbAs9barqjwiCRfTi1u5VUjHN1mKeDezJJQZbGdXrgmGT93ZkUeeujo1vTLW",
  "key7": "2LSQQNtkwNrq7d3VhptRLkfWpNkLqqxTReNHQogwDV6Fy5NFTDi8s7nRmvP1PvtZ9YuSu6EhPY3F51xgY6upedNV",
  "key8": "3PUZX5EnwJC4zUiuEyYXDPuU3JzABCbkBSeDkcNbdsF48kvhEHnY2MvD8xHUvbavTmiMy4dS8r6tmXu1knpMhkm5",
  "key9": "3PdqL7re4DT299FVVEm5vhGsFF6RKgAdFEXLHQr1yzEhQu3oaVSnme3NveByhwfTARBK16SjFEms3PWfSvG5DNAw",
  "key10": "3XpN7JnsozQbLgJYupnZPb3n9nTWdUcPdEoawEobnt6VczdMM9ouhw6s6Atso7Zxgy8mAB5FvBprGjUxgiARRQRK",
  "key11": "5iTWAZLjenaWWmHtvycQwVsSiPFAUCcYP8XwoMjyWKT5HoVPRa68Dy4MoUKtznYYB8Q7Hp7r8ujvynJaz7DTE762",
  "key12": "crx7eaJVEuiddKpFXvTVdmyfauubLeLuw586e2C8PiiDoJMa196fixKzHf4cY9PgjmmtcpHmdhXuBtS3s9aGqbF",
  "key13": "26rXfk72yjpauCh15XWR5ZBtYpPeaVdfhPYCiSJUA4DD1yEsr35c9RYPnkbH24XVtWqW3XnxtCtiWUQKkrUFzWPc",
  "key14": "2NwcQ9anTu7xGHho4G8YdyFrB9zZ7obXu5TRmktojNnKiLUbrKCxdUxGgZVkwzMwfCiVNFpsSDpAuAACeFnznzYM",
  "key15": "4Dz6mvEtXdnwL3Zwk2givfdmXPNK7f6Bqv1wWvKw6veNzjahQNZL5k2R4amVsJWeyCKogDs8Q9zjLhk9BQ1XKpoV",
  "key16": "5ceouFFSQZBNa43Cw3iW6N7tdsa5qPMd1grHjeLYy6vv1ejafWFfxtn8Yu4ddZwWTFsGbXNHMWsUJaAXNeuYJi48",
  "key17": "22gfyxjQvfEhMyaCqDKAMYM2EUjXV6ox54SEzf8n4F3iff9XiJv2m8NYikMt7X68CPmNsGARD6mrpAf87RApjFum",
  "key18": "5F5baUz5DqLf1EYtnsbgzgu5UEZA95aHhaqsuemyM8VTZsCu2LyCDb1jmaptLz2eASKoCoRYvYVQoEYPVBJ6QRQv",
  "key19": "NWdc9wkx6JFvqrpmPYVMrmWwBaWsutsk9NQN1ArjNu6uBbCKAEAzjJh9czNDUPxLtCqZfUSoWyVgsmoFqeRMBp3",
  "key20": "5ED4PSPQ3jdEqBGmSEaaic2pKZSVJeLWWF2Et6TEwppgwrRsZLgPwA4SiCLt4PCWTxhpVcSjwnYV4kwuQxbw9jQu",
  "key21": "4mfKbTaEugHzmNj7emTmh75ZZx9gy3b5SKVwTKuCKFLCVdKCo7yETanUBMRhG1U8i9Ws1tZwnNzXMFMW4jwtc7jY",
  "key22": "MfxYMt6L6CNZuq3eVin96gN745rmZmQWKfZdnaaMn6EJGcbYMNciEGN28nA4jQFnuJU5aWQ7xjeMhdWMq6LRZ8Q",
  "key23": "4rU852wB3SavwRLjuQEotLDN4yBH1riNxY28fTbHLg2oZ1vjf5HR3ZG25EUmBPfzCPVikcgB6batfvHFVuhpUcPx",
  "key24": "47YuwDP41ZU7vUcvnRcm7cffKX6k5xdPePAHUQWPf8wMZAaEqhWYS3daTiQEzW91aWoVVTtbnFsaopqZSCQqU8px",
  "key25": "5YkjtHybyVNB84TMzHqHwTKhL5aneDCJCQYXcBsWwr9kG1gcSmHV3r23ksYXmMuffrqDLyxTgdYCmmy2HeHEKjf9",
  "key26": "5W76eizKAFxT8jm9HKRWCtAaVpuuovPcV3xWuEtmvY4nUoWxKPZA5LcYfZ5tXsWRPkPZFXskep2G9dskmzH5gpuk",
  "key27": "2WedMNNiYGUFmwpUnPYnr6UNifEaGqGK3ShAuZKUfUCqXMGU6Gz8Wb4AzNPxy8YLuzhYSimDCNcRAg8FVyygczJm",
  "key28": "28Sdc62eC8pc1Prye9m4SYSyUFv4cntdoptS3fhARJLxWWwQfStCkakw8C3okhg8R8nbzGZrJ9FSWw5Lcxeruy1v",
  "key29": "2q19FK2AGkdb4r3LFm3dSJYBiUKvNNTwixKBvhgiKsadSJ7Bk6oxcPe2YvSY6ZQbN8dAhSQce9KoBne3qqGP2rLu",
  "key30": "48KPU8Sughg6M3GHV7EYXxV86dYNc5Vbk7YZ6ooN31h2cop32Tqfrnkv6Wu9Eher5C1aikxB1z3x2woE32yR6YzR",
  "key31": "52zvobyqNv4hW3N7bpqrFSKMqZm8JTaSgBdBmoFgv51xg8Hy9uqZV7u4azHfDwyBLxXVb9qZrd3ScoX8zo99VMYf",
  "key32": "2215KmLartBL1TmB32EV6VzfCf6FcpVNSTARm3KXzMXoiK5iBQe3BwR38gJXy16iCyD2L4RC1K9uZBtHACFuLZSe",
  "key33": "5jjc3UhguXLxtmD8k5tG1nY2dXBe26KmtTqbc5CJQAFNcSEjwgZBoCHRf42VCU2Xsr83htVEiNGdk6BWsAF7xZGY",
  "key34": "5dbsywWkQ2DttUDKTbj7ToPiZW3KhDbg5zHzHVrRokZacLRgKdYdRXoYKEZa9zbzHwmUirXeaY3qM4dwVAjNH34M",
  "key35": "3CaxYYR8B84vjzFRENnt7JUJu3i3Ku4tDpCRBZ3r8AzkNJqqidYXo74Yd1yESkZdv8DXB8gByzSJSRVeSiZC5bTN",
  "key36": "2f5MhRQWeNvTqNWqtU4tjCZg4hxjsTeZ2mLYDb7tnYKT4h89ZZPqt2HMeY7Aoxw3umst11tFgfTJS44w5oK1GPJH",
  "key37": "3EaKcwEY8KdDRMw3sYqHW8MBBSUnf5ji9tx27tAoa8ywoDg4ZY8iUkZHBPEEPA3gdTWUk1ARuwUKjxxDrP6rSDJw",
  "key38": "M7c46BEvLP5t36SW7mEDX5oaZE8huHucREnuxUheo3H75A1o7B2AfPcPhLEju4B38Nsdt9tGPvwZkYfkxjdwpUK",
  "key39": "9bY3X6RszH5jMhBcUzyB3krHWfBSKStnGpo6hLB8egMU6Y43nM4v75cVkpfn31gVpnsPZq8RZuetZXG87bfVDHw",
  "key40": "2PRpKVjm6Bqki4CKTNxK6ddceB9qCJ5KQ3RAAMo7rBuyfpp3fuxQM8LsV4mFZUeHHfutKsxur1yjpE5f96fMpjUu",
  "key41": "3hKiTTHsit2ZEcP82VhQ4guENz83fKs8mLVg7ESE13H1cz6UB6WHPsCSJLhFE5p2CgD5BqXAFGSbVoxCRqb6UPzN",
  "key42": "4JqFiH8PxqgXA9Zu9PFDGnRyTKpVX2uoChQrtD8skdwP1LBRyLKA7pbWKRhAsLWJeumyUagzCxwntuKt8URD886v",
  "key43": "398YoUMusPtERyxQj23rqXZ5TdAsVtT7MVpxVPGBkPSBxpRWSafwJmgV6WGBDhffK1siNd9K7H6Zj1jUHqpV6Dpr",
  "key44": "4JokoVaL5bypABcWr8Rnh3nJ2nUn54FBNHDPekSZoZSB9ZqwAXpdgtLkjGyqkrxGhQiMwxnoadvYXY8fFxiMgKNu"
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
