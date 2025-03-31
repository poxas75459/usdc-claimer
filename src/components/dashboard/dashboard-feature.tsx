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
    "5UgAmNiZazNzwNPYp8Gg7B49hf1pZaPxxrNMQ3h9Vohp5YVhn2FuVmgr2w6A5MdgZPBuYfsxXb4RrGHB5LVT7xcq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uKZp4TdR5MYyLq3hYUySmVjrypgUiAMqykuF1BP6RzExomkZ9dHsFta8rKahjywQzUdmsZcS8XKipgx9mWxwi6w",
  "key1": "4RgozWmRrbtzP54hw31Xjfmz6pZ1E67tnvcaMmP7qZ1xmGcQzEe6yuvBuVtEu4jFfpe9MiM66JJ8jfEwM16FEaac",
  "key2": "4cNiGtV2b5JDrsxRLC2eeTFsdxhStsyoLtdxCAcAdn6gCrEkKAseMMqTHG3wT2zdaJgZxy1mNXKPYXLSv532d9bz",
  "key3": "3f38sBApeSJZzQuCSRsVEfWR5UoG5Sm1miN3SisPm7riEdvsmep6zsPQ7XV8SqJNG5KP98tZh1Z5WL1JyrF3qtvE",
  "key4": "3MAguvqxL23xuigYmaXSUorezm17LQ1z8uWvk1KxbqWVyWqgNPJpF4MVyupGqTxEZZLEnxpiG8kmAAfd5vHPXEQe",
  "key5": "3UxMBq11auoZj3iwAM1ETGzspNsPDp5sMHdgcbjNVT4esmqsFJt6pjNZjngcuhj7BtHNUxd9d8DKoJA1ME8h6ttM",
  "key6": "44eddKAtGADgJEekStWkNqyw5uMnxGy1MS5C4njq3tFKCyZYtFNg6wbHQWb9RKwzHRTrbfLihq4gDAeTkYDpVY2P",
  "key7": "8uGvqNak6PNFBbfEVmubTxkV4BNgknSQFZQKrxYc89cz5sWfG5ceM2SXCAuUWx7wEE6w9Tgg3GLYhGS71pXzBVm",
  "key8": "NZD1f1xKi2QA6ZVc7sJHXecHAe2NNeWTXetcgqEah3c56RsgKBXK8bqFnKQK95yHbpgbE1yBcTU2FVyFpfHnyBm",
  "key9": "4ZwxuEPxS2KQVRnH8hy6pdXfPtFvERZGudUHMqBRS88hS7wfkLTNbUxuW3vKLSZFTNwej125fg1p6axxA3rBQCA9",
  "key10": "5FGqRYWRwxqV7QuqQAVzbkHEFjDSgkVg37cj4K1bo7rkSQEJo6HkDMMwPwRt7iHUCQrqmvGS6fKvTuqy4Gqd4Kn8",
  "key11": "3KutVBMJEqNFYo7vyaKFbgdffVtjtMosWBsfSbmhixvzc21k9covNSRVRBgGK9ou4HB1aXYify1VRvhjLE4Gk65x",
  "key12": "3Yg1xFFGTrZXz1Nub6khM8d2LGjGJZMLjB3cNSgYwpa3Fyqs4TZ1vDC6NRueAbj2vuCJQbqqoU42U2Mu9rcsj1Er",
  "key13": "4Yr96T9i4NUMRw7pTd9peaW3TZzy476hpGCVUwFwG5sTkNWWeRAqM8By8KCSsahxPgPZ4Sus2VPw6gwwcH75DQd3",
  "key14": "26N6YAnnjqQTBBZVcQJYJStxQ4xRhXonEcr21dWmjtYtrvmUuoyimZMnx4mHeKsg7Uv4GVtgFhLN5PyUU1SEeVzg",
  "key15": "5waAUQBvWKTw3qNWK8hzZ5fXKk8zjNxzLChKLdQ7M27cRKenNw1EJDfvefFbnPRMgLCbD9sHeKxBER5XeksmKGez",
  "key16": "3tBGGeziFnLSBFCEGkGxKuC23VdNg7LU6Vc1ejPPfrLeuXMvTDmDaUDpvvSZh9DjNd6bH1VwLRV642SuvPrbES5q",
  "key17": "29sGcBsMWLdYnWgKb1Ar7JpfyGmyGZmVDikNX4ovA5v5nrsLaBUwhJhZGFiYLQigaf8663cpY4aimQp2aLZmJM7c",
  "key18": "4RczKtTbLbcTT4GBZxqmSdHWcqFcYFmMmNJheLh4m91RZL9DitCSdjHYnGQSwfj4Jmp5CzeQ7nSA7JKAarfn4cTh",
  "key19": "4BR3iKS8EJYgFcFwTfAkp45qP9Kzmk9iLBxzazDky6F17dmrBbmfQ6WgzMSHbogKZSBC4w1gEkWEJKT3b4oJgDt5",
  "key20": "26gwTHSuW5U9KcNkG9hrZnHHPfe8YWmU4mfobFKUQ95mLFtg6sJfEFxNM7V2fioVznydLSFoRcSjMfbEs1ZvThyp",
  "key21": "51si26P7qGSxr3dNwQYMyXfPgbTWGk2XuKB4DuW9XmjNGCFthEon4hLNrFjC5cnsd74J7PvXvRPUTWXSJZPJhDKE",
  "key22": "3w5NUigjdujBQfNDGhFmpDPE9aeSjjzAet3CxpfnRK23NYuGR6gs2CrWNySCQmLcLGhoXFLr9wSYReUdgf4NynmT",
  "key23": "3vqSiqvptsadg1uVgBWY1opx5WUtvfiLRGvzTeRJHVgYytQuVcXMQyBVcbc6m272uBexEMKbsFqfcVNaSnRCFAk5",
  "key24": "2BzuEp6ec9it3zppyQwnxm3Tf5aPHJ94xpGPQJGpfJHapn9kSLBHM5ki7jrzoxKibumPAYjshFGSC92yve6pf4av",
  "key25": "DaCaG4BjqfmprLnFDvSyqKehD294kWtUMqdkBge8UxnoG3aa2icAjeseaUzXCg92C5LmxswJYPsmtW7h2bGHYpa",
  "key26": "3DcpvVnELFdjQn9D77nyZYZCFVom2YxvanQzu4TySimL6MV1Go5NrE8XnhXV75dP5tdvW3PSDhsxcFo8CjexrwJJ",
  "key27": "3q5kob9aqvTLMhX4eiEPeKLUVh93vUJKAPE57e1Xvtmx8j3Tp5p6NFnLjbFHArSybV5scqm3w81NmmAE285P67ES",
  "key28": "4jkSqs91mYuRgcvjPa8et9rx6LurV7ecMqdoMqudSDbCGtJQtvUC1xGEVVFzSy5Veykf8eksj1YYh5c1U1tinBdM",
  "key29": "4ZBTwni522p6VsTfdpAV3SjfAkteBuiHyHKKbDh7RocMxZfatcoX3HPXW4uM6ZcxK9tFW4zJTdBoyCZWDPqJUkaP",
  "key30": "3a3dmsWVuGsNcm4CJT2Rn3evQccuAXPchiKz58tn4XyjWNNAvQarebQCeANFyTX2E77NUdJHX1azPvghDaAjWHjS",
  "key31": "5UVggMy4m8ypAr7s6ziJkU4tTe1vCRAhj8pMA7kMdyBRh59ituxPZNU3KPrfqQpMVxGouNskzgdPhUq114fDBQ4j",
  "key32": "XNEJARqEgW9Bc6RcJbMR3RhuMQYT5N5SfVfDGxERGA5yibzsfiBiv2nrECMQCiFeS7ARyH3tcon86aTUkKZsxJy",
  "key33": "38Gv2US7z6zYurmwyoZFZnHTZQh1h15bpir6Z6mTpAvVmTt64rjPaxmQqeRDNpxrm46baAhj9tPfm7orvR5uiVKw",
  "key34": "3YWzAF9yUtnFm8yi3SvbbnHePuGnxVpVtSsRykG6oS9Ha5PBnkdRiFYytN7RFeeTtmVDTDNwsfcbPWaoHNKVGhp4",
  "key35": "3goYzvbL2e644Fw2rULrQbWUFgUrbhhijwm83rDNCd9KEQUtyzMVVD67tbp5nX2P1Q8LNKVZWUzdkH19HUdRroha",
  "key36": "2d3RBYaoGBnyUc7GwgWQe39CYXdVSCkQzfdS5vGAJ8ZkCz2jzjomQeuKKsPjqr2KDT7YaUmXACAvYEG6mT45eQ48",
  "key37": "54suqKvhBtoW11H59vxeC5yk1xVPboyQZBic93Hrr2Lq5TeJHwhgsQiX1nJgx1CYdKubBw4MfUAhp1dnZGBBgrBg",
  "key38": "4qGLxACtm2T8cjrcKtkDsmPibV1uAjrEFjaC9xJDWk22Tckxokjpmy2j84WQYpBTCHcKpWHGu3s76Tyv4QWoPc2v",
  "key39": "4hA89ALrH6JzsRdMPnxnnHor72Bf4gQsheCUmXF3sVGCkPH13PALEKh4ua81cL3qvCV8EZd4bTGe4EUDvJwmqrfV",
  "key40": "2yxpv677ne7yvFhNhdcmA3zDPeiGgoxCjnpSzYZwdpUUcnNkWPoAdpk5cE6VkytNCPeWWSmAERYydH9wfy7UUsyZ",
  "key41": "5iLdVWT6rgYzKVbF3JHu7yezzwu99YuXLNrhQ5oGAE22HjAuWy7RMgsSuvwzxFXKNnexaxNYwgQ2hDndupuJnZab",
  "key42": "coBEizhTwd4hUiMzWX9YgVmKtszjZLFPodgyQRCnaoXfyGPDy8EqSQ73CW2ukZKboP9amTbVd7EVEStY6fTVihT",
  "key43": "5MQZDjEtHYzWZRafWe13aMxMSeg3mMi44kEQanMer87tJrV6tBVf63PyRVWXA6j1Zi1tkcus2GK63BTJSZprUong",
  "key44": "45rA4qSvtJajSYiDyowU5RY43vmnzsocsqttGA8oJCzzMV6NNgGr5yq2G97kgE8SsW3gDxDc7HGcN5xPfG2fJ8Ad",
  "key45": "3xV5fHzHYDpmp8VgbHgo5Sw5U9QYRZd4nPhLY7j9q7U1aULb24WyNqmnV9FqomJ4j78ritNnvCxLwrfpeii4jqkj",
  "key46": "5kXefq2QFrKT4HqscKSBN4PzgUQyzkryWXJCfWyRs5Ythd281vjnh9GEVDsYgCBTwujy5SHKWWjpZXfjbz3ypU16",
  "key47": "57cWj83H1MZaR5kDGDJdZhvbMfRzFPpwfAhBganYsek3QcmLvc7t35uvpu8YnRWQzESYU8NWoyFpT6XeEhEhB1JU",
  "key48": "2abvBipiqkdnrG2A5BRYFXx8fDXsj9PdufUfjLJKQbXf5tiqS38rpc55tg5K8CUh5xSaes3iGWmmCvNiviEt8J98",
  "key49": "4JVkstn2Nc6Pbx3euFbavZYmvAE4YKcAQagwrdrY7TPFn7HrtA5C5vdHukFv7oneDjQBaBEQf8PgRubBXjH16Psv"
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
