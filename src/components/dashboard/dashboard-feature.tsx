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
    "nKvKCB3e4qtXSgF5YE8ZkKDydJ8jpZXCioEyuSKn6deDZQkagmKy86Dm8ZV8nVUXnruH11JpqbQgUYGtavE5LrR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZRxxfmDAXftsY6kZSiqGoz2mEqCK2pQfWchphofRKXqXrxNoSEj613ckxChejKuWcNXbWRzev1UJWfteNuzN7Q2",
  "key1": "3B5N1j3YaUTpnbda2fYADGZ3D1Pm7C93Zt66uSKPuQKxZxM4xSeMu1p5Sk86RA6dEQFotw2V9zZgEkiKQAXWBhJH",
  "key2": "fgbS8U8MyPR2yJdJhdyvqiPpqyND1WTPeoxgsmrYyGEgAjHJ56oeYRkv8BybvTMHNv9V8ABdSD5VBtmRqGNx687",
  "key3": "39XWjn7HE9roEUDHatw33PdSCZUNfF94X67fNtHHsaqZwYRSiVnUjFJXUG5tTH6YvXL5w2A1uF9YSp6LgktWMcBF",
  "key4": "2t3iwMVDUSajqAGnbnegf3he9siQMZqea5jK9WQHhtAHjHPgby9zkCdzGxcwrmUKXamacuLXCTb6Kb9dt3FnEhCo",
  "key5": "3a7N1DwwhW426mwQiCBuiVh2XVF6XZFtq9VqPMDiqYUW1MxpSnoHEBpYbrDP3RGWUtmLBqYZdTvqsDUb8sH3sbVA",
  "key6": "DqVYCgkT3mtcnwNTmHoEJFpD4qoDRiGKnzZmGAohf4xjSz591YTJ76W7TppkXKBpATdfqtZyK4SVHJmok3q6MTD",
  "key7": "64c7oskmowvUtHAHBjDv2HMVUMXmbwNV4mff4MA6ZUywUvgN6aA68NMPgaivrtKHjf3mPxe1BK5FAoSupeUVWbsm",
  "key8": "328GXv45w8RDkSvTke4nNmg4iwHZ45A9d3F1GxdpBSnhjqzNUdE3Yx3Tc1FsHMEJoC8J7oBhzfXBWEYJEik1z58j",
  "key9": "36m1QUkyXwDb2fLrzYWutp5kxgJDiRi4K5ahobgzWXaig9qpwzLwQ8tZmCgh6ovbiNBQD4PNXg9JvkZUPYNhNFRy",
  "key10": "3fe2RcLHyYBSiRS7zC6eCWCwmbhqtNzAbNBatB7eXBDCCPbNZggY5pv5sFDoqd9bofFNnvuch1m9zU8yX9hLnpez",
  "key11": "4RfhzjTjJmvVTEvooxFdvzQj3J4ygVjYHvXVcM8zhs1oPqjuQBMbAm4NN2xfg1UM4nTfY199GWyUvsmDc6kjeUKa",
  "key12": "A6rdbaSS4jummGgQs36916MC3LeRya562vwSRRumqgK5igJy1H3Yivm6LXb3dSUZz2WwDe9HLd332BsswrQWFpJ",
  "key13": "3yieLTYy2GEywH1TgXRtMQHX1qzVoKrthjNu1tAiD3gyhU4hiR3AB2DFr3tn9GebCUngzSSM4dnV1APodAXJnRe3",
  "key14": "4jRYGC8Byu6SDNTtSF4ATyEnsScoMDGjtU5vstD6EH1QvNYAfGP5HMVUx1qHEN857M8Lc3VvLN99H3YoL2jUhswZ",
  "key15": "4xMzc1BPJgaDXP5DYj38e4pKYQEDYPs1aerPFsZ7Dhy6g1EWf2GPVRYPwSE66fPKaV5XMGTQz5FjixWUWSoN1ZvJ",
  "key16": "kCAB68QyV3GSDrvasbFwSPz3F6HfkTU5BT7k9khqqhiWLSBK3TgyNfP7BzXoZRd3zpcjJqXMB6ejgmpuZBv485y",
  "key17": "5hi2uwQCe3SuAJMHkajNSwxJQLsuXYxomXNfXcnL7fR8YPChbCQKwrGWMvb4KpgVYKxYkSPKSkQjsviQfxvqAWrb",
  "key18": "5dFaNb1b7AZN567evLihF5CZEnJnJe7BvVosPL4tk1LiMtWwXErTesdzWyQwn4sE9DBaTZLNwChoMXWwZ5wQhahN",
  "key19": "3ZKdbQ7pYf4MT71vPBJycrEzwF1MvMNX5EknEaPVPXsiJApm6pNrJ1FBN6HbLkUC6VWw5AFdTJgwffqFSTLa7wwH",
  "key20": "5PmJg456YuZhtfUFxEJp1cujW8UTRYdHQwu4aTmu53c7yZZkWZupHHrZNuLhtE5ubWRxKtZVdPyE6Ydn1a7KVYFY",
  "key21": "3UyziS2gkTGggRxXx1ANjNJToxRAKZU9R1f1rHG5fkk8RdjcXxfaTLAKskXMPuqsQkDXcaZW32zcKMAYwn87AJmE",
  "key22": "4mEDcYvcErw5VonkLZteKgNq4VMLeWCcm8wHQ3nicUvDSTX9kKCKMhJ4rz2r6i9xFG2pWqSDQXQYCirKeFbvVGVn",
  "key23": "9aCdr9LQTB2TkwUUTGshmJtBembbhrYT7VYxeou1vfmZCabs6sp2Mar1xSd7HpQ4GQ4rJXbCDmSMox4sWHPxbXb",
  "key24": "3EtGe7GXKKgxfkjd5yYL65Fzr3Qxfs2QD1a29zijZKojiCBPkuFT6WNBwfU2zf2M1Zr3Ma7udqmbFJg3sWBr92CY",
  "key25": "5Nm2tvWHmvMqc1pFrcGbCqTDY56T8Uj2BU2cdFrEAdqxzwSvcSnk9o2ujzpgiHTBs2tc6wt5KmeCADb7simwaDJ7",
  "key26": "yDUWKuDViBtJGrskAqbgNPrm7Pn6SQfxxxMw3eADfMo65eGsSND2C5pvQjYPBpu6v9pE38xm456rjWmEpdvx5Xr",
  "key27": "54FeKoDkGyTihiFNvcYuFubBNFdZ7d7KU7GchE7VW4ZZTazr5A8saa5wewTATjJbDdhdjsKPsne5jDrhat34peMW",
  "key28": "5476VQ4P7Mk9xuVgsW4HPjt4JkKN552sLhV4WHqLnff3TqkevQUYc2DdBV4FrkokuQwCqHr53z9Pmxsg2TcPuVXc",
  "key29": "VbnN1yK3EUBwTUnVw6xP1VT6WXHK6SpHUDvJNZEQV5ZNNeqst8Z77SpZSNsWSQNwP7wJ8Fj1Cc2bAevhFFPhZAX",
  "key30": "vf8GWUwkD5tJk7a7z9dyCayFPV6Ty5zr5xXm3UCcbE4YU54gxUDJadNkR2dp3sP1LgF4s9JonZzp3oynMARiYFh",
  "key31": "2mYuRmddTJc7YP8pQraKQGWtrPpYvGXVqC8QbAnH1KXGMgp31Yhv7Zdi3RWhWKKrASCugVgiEuoyhHksJfJFixgs",
  "key32": "5AkNNow9hVRWPdAsLjo7GHEpjiDawqU8oPZv89BpUKatuWgAygFtgbR1hmxG6YcR5VCLid3iYUhpFKLYxuAXZj11",
  "key33": "5Ph8RtvaGnWWqW6fAAcFQ7pS8Rmt8eyJJCcLjpnEPVqj6EajgnQ4fzUZUPEEXN6qGA7nt9VQBU5nJVWuNGVbM9YG",
  "key34": "24sCgz9viF1vLine7Fm5FJpcwnUyanNZE9z4XGScw2uvtZpJAhg1jnKd8SZiXjdWpmixgr5e9PjMsSoEBALYSFRF",
  "key35": "5LQWdy41vT1jCAbPMiEK4ABWLHYAJ61XheFCQT8PbnFz66hM5LneCjg3Ay62EvpwwRvfAtktkmDqSwQacxbiixiQ",
  "key36": "2veHAPNE8zVS18ufZ9A4L1783vJsdDgCH1YFow2LWoq3wcyYBYtw5PFVMj5HwBABy2kuPYbPtRZFA9Z8PP1dvhE6",
  "key37": "2YgMxZYphmKc4nS72Xry6L8zndU52cqFDhsqwuUgBZpqhqwTCbjcW5DJxtMQWK9nU4zzPXUF6u4k9wFUrtUa2SyJ",
  "key38": "2vYDYG43FkNEvV5ZrTDamxnmE32CBr88z3kgtYKVnnzMMMSkBP2y4HyEFBGjgG58Gz81maAKtxCeJzyrfHy7YNUC",
  "key39": "3WsCUPzGLjorsYg32DcWx9rk1Y8SuH2Pc8JfdkuupiiLtCj93g7LbLB5miyw7i5Ya5RLCroG3EgJJ3x8jxRUQYkR",
  "key40": "5w6eX3oXFodHYd9gU3FGuEh2UB785YvzkeXGKaNg62Jugr41gnTBy1ezrktVbCB8qhSTYkbLaVbbRZ1LKrYpkFfg",
  "key41": "NAY7Zi7ySGt5Ez6tDiZABtZBNueMGVr71XC9HYHLNUvfniS2RZE6YtXPR1ijTrT1snh5HT6AhCPQtBZtSNkTDkG",
  "key42": "2sB1NG3yV2J8oL23ZY7fTKWYshhV4j65EvpuvYu1AnK9FHtNiNaEyLs9w86QNLWtPEyVn5F7hqHsF7s1537bQ4Fy",
  "key43": "5KdFGyW3vgws2T9DnJwrRSxq7rKwJuBFqEZDF4MgQUdKK2LB5nH215XyZmvosZHL5t7VV4mcMJk2vk9tA37XdFts",
  "key44": "3GokgtMretgoFS28cp5drtiyv5f6akJomk6TznJGAoPfttimmJpH6kpFYCU19bX1GTfRACRWNo8n7YMiFzknNS5E",
  "key45": "5UE8Q1fXP9SQwRqV1Z17zkZ9a5CgAaHzLdNfsUrwdhhRSvzTK5LvDK3vvMy2zmKgtPw39ZadUNBYFP8LP4oWPuPg",
  "key46": "XTnv8Z2YQUaY9Ss6Mf59zkwyGMGrELT9xj6hjcZaSFKbUhdhcrn5DNGPCzEngJ63fSmWb1khNNQ1XbRLJFyTDfo",
  "key47": "657TDuXMkyrmezsbiSppTsk4oce5T1VR5dRdHHTPByW7ke8CX33NRWni7zM9kHox7hHvbUL98pYcnh57RXFRpbTV"
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
