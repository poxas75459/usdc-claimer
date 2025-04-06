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
    "3A5DbTyxitTYL6ZqSoE2BTGE6x4jbW8yed9njAaw77CeSN7kK7zPBMQXMcd8e9Xvkp73q5zH3wEwXdfV1P2Qkdb1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MdFjW6V5ddGo5w5sn6oFfYoMcw8dF1kxWuxQ7sPLdvVd6DADWUekvgDhMNHRbu2e3NT7S5po2Hs63bHhRxVfSmS",
  "key1": "DCUNYYNwciwfY2DvQ1dSD3ZxrZX5VGsyXKsu8gm6hbAMR37xXKyRNzgYxQ76iEtbtGmk5B6JosjQDbKqm7ebFHr",
  "key2": "2KJmWcxFMSfM6b1ACpvjqDid3k7EYo7Epf3AkAWuVr7KXxmqgkBKyQMvZnJXm4BTJAdbGdL7dzHeR6Lh1KBPi89s",
  "key3": "4KneNizPwq5y7zhP6NiwWjjSC7AsgH5TpP4aXwMoj3bcGWn8EgrcPxGEPxPo4MSybu3eYPALY1R2Hexrj5Ayypgv",
  "key4": "4KVwyPUoPzC3mBh2v8sn1f4m6z7yiCot4hHJ2sP1kPmwNkDi3XUTnaf8vurQRmEhhMudmo4gDyjpPvGUT6wkBN2L",
  "key5": "2ssh4AeDkUEpDUuqV7mWC4yXp3nYut2hfNYm4G3VqtK5Pp7PAxTK6QvFLEzXmsvSf749K3E2hFLfW4To8CafKMss",
  "key6": "5GuQGJJ13TmFqzvRgFxobAf4P278ZMSATAGKuDVSbo7u64yuvkjzB2kjM8xHsFRKzh6JqkCFbd5KMeNa8Ve5qezC",
  "key7": "34BMLuQTswNWY1R2cHcDeajGwW2FvoGKieW8CKzSxmmg6PkKyyjsWRyLvPLhQAgn5p8BfEV9qKVx7Xg1XaQxYTxE",
  "key8": "4ozNsR13Z7RaTuhg8Z1aDHkRL6gWvveQRpGcPUuZKUFnxPwEy13hB7BiDXDXfj4GsQNtjafLpnBRLyCJ7ymFJMb4",
  "key9": "55a213kcKMJvp9ZrUFVzP2U3HsxKgDxC6sDqeAgF3eNxBaS7xG8uWPgkUz24QHQ9Y4161yg6pKZVEDYmSbjYbHXA",
  "key10": "5P9PjojxVCogFj6viYY2WUnzm5fCZX7MSJHTG4d9MeWAhgg759sktJecUAdR1EUmoxRsngXRwDRArWKwfWuSqL9T",
  "key11": "5YZGRd5RwecJi5NE5q28VGWk3NpuKULAYjvMsxGAe1UuzThyow6uCDD2c9kc5NBtnzXZcfrhjUqvad8irzHAAdFv",
  "key12": "48hqTWpuZZcRM7u3tb4wmYX887X2fwiE6xnEZw9UUa9rrG4hfJp3WfziNh5trVS8oiPxhYKpWWU6a3CEqhaYo46x",
  "key13": "2c3qnkaUKGX3zAewPGLhqdTpVsbsHT3BZaiMhQ45QV3T5ebEyQQ5xBdHVm4ACYWrzLAUYojhqTnUxCVqkufiZXoC",
  "key14": "2U2TRaFNY2vQEgA1Cx8CBE9W883G4gk2EWFu61Udr6CzCtV5wMCcYqqsvpLdxy7s5FJHpN2WLFgmqyXNPhXeahqQ",
  "key15": "2gvr6te76GS4ENqxXnnE2KhKsUmRz8gQqMwLPGcWpq1J7jVC6hFdhuExBX3Lsba325XG4qAAKKVdewHntBCQ1T3h",
  "key16": "2uWc39hqHvyMS4smswDrpdWLsR6SpsUpeYoDyv49knUZKvijU32xvPLh2Wpvrh9zAhCPbgGi6g6Fff2XF9L2XnvT",
  "key17": "EQGQK2CC1pv2EZ5AoVsrET9X9RpSxvdjGZMgoCDjVMw66Aw3s6RDJngP2q6HMM2DN3S3vT3GYjHzwdt3uDPkKUH",
  "key18": "58KtYydGrsaYgujNmq67SXLNMunQSAT6dM22cEj85NNui8odwBxByudvv4G2uGgLSgb6CTKHwc8MjGzGagNcEv4p",
  "key19": "PSRJ7r2Wgps4vVyqtsMNit7oGtcGUJxNVJykqFitWhA25pxvqC5Nd7q1r321TJdEQGVW5Ck7qHvxA2SiYrGTDBW",
  "key20": "4FohSZsCqVCvyX2i9h6JEbtUEaVjWJ8EeLkvHvj5jf6DcrNbty8djsgNjPwin9zfstaviftkrP66f5HsDs1ZJWX1",
  "key21": "3w9MLCSSkrHZq4DAqhE47u7jUHgD7hK9WZDV6J3jLKHqG8QLX3hBfJonPrupJxRvy9zkyXrwJmpchMq3sX6bcbaz",
  "key22": "38TKvUNtoUPR4Quo2oxUyDsgcyHQgmG7qLnRbXpm67NmHTfzDUWRdBQHsVfPi8jSvhuVTPTvQvCybok8mugfQGcG",
  "key23": "eYQD18j4o1eJWP7sE63HTLgiSz54A5isX9MTAEuvthzduLHmkPHiTUp6bHtSZNa9bSYHuxuCt9BWoqhNczSUHGP",
  "key24": "64p227ujEPH5RUVsUxb5rBM92HefbSDb3rew3Lnx8s78Eey61LAwDkfavPQL9yWpaZpbSjTNTwqmUe4JuXgatHDJ",
  "key25": "3tbyjfRfMJSR3Fm7BpoMqQFMCikdsfjBz1QpDPKNKSWDXd1JaHRpSJtn6qAxqvHjUJfWkmT4tij5zmUMBAep7bdb",
  "key26": "2yMMTtwFp87UgpHNpGsiMLKjbrjVG4Li5zamJPBPGdrGSH9i6vdyE5EDmFDuQogYygKkEUEhiTsHi811NwpKzaEv",
  "key27": "3VMDrAxMHdUZ7EHNtFdeV88HHHNGQQPPRQGySPDQiNfyCtRkpuPr1rHEqFghpz4PywbfC16FXdfoxyY9swenuQuc",
  "key28": "3g13U8XAajUtZwZnd7ZPnfsxyxgZ2im8gF6ZMJpQ4VdjGpt5XwVRqHwso3PuPRAZMq7LoQN5y6QCuHEf41LpT2Ma",
  "key29": "cWmyZX24WjKNL9378peq4hSEa6wLAKj8BNpz7QFQEwNFt3XPBB4TuPtKZMTR12Eod49jFniEKeFY3c6C4UD4rWy",
  "key30": "4uAhvmZcUCv8LKBJRXvEUDHu3e2eipiqbJprH9AP2NCFaG6uehVxzhTkc8tA1s24tbxHKCkBrbPfVkKk9odg8Jim",
  "key31": "5wJ4uTetoX2cJYnMiQb3wNsr4LwYPcXqBnMsh6Wwtmj1qk6YWzMwjHYCBkUcMkG2xGrkChGx8h3VBmF6HzRUzkss",
  "key32": "cFNxyEvZ5Q9C4omPKB71mHe8DziksMrMiu3PBvqvtNZ2pkDtJZGgHCzBY8fpyWiz585sUvhjkdv6BmFrdKRaD6M",
  "key33": "5FCeLZPZSATRJ5YX9a3D1SdEokQhwyrzEp5rCmoDhewV3PSB5BWjjYyHSMfoBgq57tfNBrFgn8LJC3j6uFNjgU3m",
  "key34": "zEWUV5hNZxsiQYVrqtYbpheUXXDaHLCATvas6KATAhADrJrpwaha64Z3SFBBLN8H5BFJmiZTugk4VEqLX7hWzty",
  "key35": "5xh9YLKMfjivXURTaKSzA9ensXs8teT2aro8HA8ASfbfVBtoq5YpRnHpko4RMiY6zite6c2Pt1rr5Ge63o5EvKEg",
  "key36": "gADBrtr997Gc8WeyuQoYRaVywA8sosCpuhNT4pnnxxMevwhrTdnTLptJiyWCpc7sobFiPG8GW5X6P9LzU9tzQ13",
  "key37": "26uxSXPPY3UWVLbsDfNV4SmxYfNMMiQ6UaVWDtyN8MeQfiex5gLMwN7o2MaSfTrDj7WqNCrM8XJAsiosvv4eA5nt",
  "key38": "UMqwhanfAhubBazC5gF1nBS6FfdNwau4LvBMdUhyEo7vDRdpAk4HushfVizjrReHq8usxRrvpqovUZ3Ui4yGBgz",
  "key39": "2y7kabq5F67SAqsXRKStwFeQPu4UtaRMcsboe9vQDG3W6xxk4GtqEKkSSLEvReyodVifGgFyUk879W8kxvmbSxvr",
  "key40": "22oCJEFMZeYptDZZ1pK4prY9TzLh8sfbx5NWexP8Qbx3wp7toMFTFvuNFsxNtFTSfTA5JRNzcR3rBLTTX9zinBG6",
  "key41": "2eWDVmjw4mQ6xuAURJcPyhmrkZe226etsTUZabAR8cMAuZEVtd2moiVu4WFKy1d2K6xgry6dm3C9uhHEGaPxje6V"
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
