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
    "bzoPVQAwKg8G3Qpztg6LHa13YjPpPS65NFMe8AY5onHbAE15xKZev5TcXsush1GA5LYSjJSyPWt662iCb24vExQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ExeFetNZZmzwAL2G1ryUTvdmP2L7nsqgdNwLkE9gufV3D2ufpbm2dMfKPhAySLWMMCDY9ACaaBUFxabrZixFC5E",
  "key1": "3FNdPTYpmwh9BFobYbGQxmxjT7d3gjH6H5uiEXUE6Gkq8E3HQvV5fv3ZfUtC9QiuehnbwoyCiQe1JjxLGfPNUo1W",
  "key2": "4KhJjMvvnSsoKdj8X5PHqbgHwNBp3cDBbdpHgEvx3gZ7f7T7sAbjEig46vyWUs3TW6sDn8FkoREJLssZv9dt6NAt",
  "key3": "3RjxuMcbEWMME31mDPP79osTquJcBbVdjU3vGPNeLPNyXUZ8VRUnCqxycdUrwETw9T7TdStJP74xP4K6zaamRKD",
  "key4": "41Zb1XK34YuXdrVa7SKXCtCNarPsuSiP7WvvzMtZ3Rso1WrkXkJXJ9shHWogzSwFXfp6Z5zdB9rZ7TfGQk6SjPTW",
  "key5": "5vkE7BGKAW1eULXMm52T2HaNVFxNTJZSzsSFuC7ajJqphrQYmHEc3oYCjFDseQCdtHMY2MRJepJyLy5TgXW7WbRG",
  "key6": "4kCLMNj7wUW7tDmAro5TWprDEn4mVKTNbXGf4mkZ9cpceMe4JrcjornzyfxmHVWoUDSyEs9PXoJzqrW4CLY42WqV",
  "key7": "3bkcN3u3BsruRRyu9EHwkhbSLfTk5TCf4A9TDgeLefXNjcppyqggbrPwiWLSjqFgfAwpEBMc2Ha1prcUL215nGZW",
  "key8": "3XZwabqwZ5YR8KzWmF6ujazXmaiFJpaJC12fgyNfuxauvFUFf51cSSUzprpc4QidiRsVwLYxaZyv1iW1aQRmsLzX",
  "key9": "HtvEkas6r5ALVb3FhQL975i1ebvua41xqmMehiQTVzzJcv2JpVvRvySW1BByyTaavyKAH7fxq6ZL3SCdU4M3t6z",
  "key10": "2tNBbBZYhYzTGnMxD57hjUon7uYjeKU1aCKFRtfSv2Ec89C9CV1EMDXe4kiUhukqWU8FkvwEsy9HLM6YeMCCzBJF",
  "key11": "5fBVVTi91db2cGkB6mu7NpULoYLwiAyR46zdtMe9kUpsnwSvv4PVDKcS6WYHpZNxFbqbTAF1MKjJSHEXmNpxymMp",
  "key12": "3BWVtusLczsW1fpTPuvt8B82rYQ56xbsacaG3yQNKzVUfzKXBHnfqx9vrkTTStpoBwhxNwri71oCEf25CUrXYsRC",
  "key13": "5e27h7cMtwhbreKz9jcbmZxoKAmArtFeQKrmovR5KimbUsdhuV6GVe5SqCTs9v3CZENrpUz27yX8Nds5BaBmFp1M",
  "key14": "29utQiELK8YQxZ3cPDUdCZTp1tHg1N8LbW4CrwGuQ4mCd46x3Luy9a34JAKULkMitBBoqRcgk9CbUwoNN53aYaaH",
  "key15": "kzDsbVUYAkHwaFm8zm2zMW2ztZhjjB1uTBXyA3DezoXbCwyipZFbs1jy4czd261LSK4htY56Eyq8j29tCRti4PY",
  "key16": "32pWuZFMFDJABqxfszvwXb1U6ethfKVfKQtjD4niN5uNsibhogdxrfdsK6PwndjuEon5zM5bp73g5CnSVQXC8T9g",
  "key17": "3NJgc86aR8LMXNq24kuhLGZQEqF8C9EbQR1FKNFk8k1bcMUNpWm2bzgv7j5kdpPjAnarHE5PFppvKXwdzgBAkAGj",
  "key18": "4VCnWghvNybBoqL2vS7wkcc7TTEzveHHUL1rVAypmmNreoGGpDbfPF31jR5czU3XkaF3tFJVmrJFTwc8zfYKiyUT",
  "key19": "4FvrymspBg5XueFBtTwfTwVudGVymGYPea5xtsuWyUjLLTMbqn1dSzNs4G6gs4ogecKbEmJ9EK77e5LRdAzmdjS4",
  "key20": "3TFb82XdvJHChhhCvH9btTG5yKVpQ7XPb6RNFG9gXpopK3QPEbCggKWua4hrXMxxBv84owbktBQCV1Z3jHxs9aM8",
  "key21": "3ApqKrWL7v4vBwVXnm4Fuc3wfxGvqYTPctZJ6AckGmNQBNeseSuNfv2x7xXSG3vtVRG7Wn6KPK7szEv5AicX8HVp",
  "key22": "5GTj9dYMcp3iGVKNQYP8jh4s12fxY5znLNsbWcR68RaENpiiccTbbKX9e7jd2GDVd7A48gtb3bTi7TBGmiccykro",
  "key23": "ykBtRJwZEaCj1oWFfnmwgHVYEAokd5cy1j442RkkZViuEL1Y3dr8ypzsDeRhrpEn1sRQ6whanJooH7q1QqXhrRi",
  "key24": "59LQFUqbKroceiKufsNrFsoeFiqXMmqPLy36YAWnMtqHykLr36EvWnGfEZUdmtT4ShiejdNN8ebG5aNVN5icQtUZ",
  "key25": "53xsPjampn7ZCYtwzf7bZcizPSnqB67pSjmBs3JFJddyCduSBSCBLSCwL1jBQTWh7v4oHMQ2VqYySCTrkuz74dYC",
  "key26": "5kvam4NDGDwEderUjRMNAS3TwBnhz1Mttv9uwq5k7rZZFtshEWUNsRcNwMMuEZBJGj2u6kaD8jYJi1AYpSwLTBh4",
  "key27": "5N2Hm3GX81fQ6pdBzM7HjZ2LBu3WfUjbKjt1EDX6ccTTgagLKNi3ipoC6Z3p9xq7nJ1VSR4HMxRkocArYw1WNUs1",
  "key28": "5BaUphCQvb4Ud1WXLLnA5uyc7oPMRe7UxG94NF8zGPybkt9hPHtz7zBdFtpjjJhzJU3dkqwWsyKQARyw6R9f8X1Z",
  "key29": "LtxKT8Q4P15aydJ3hPNSFoYbnCMKAiPNHry26hJiz5z6LgmUSjsdV2iSZ7cvVeASmxtVR3sxpmLP6cZh8q4EkYf",
  "key30": "2kqQKRGaKZCsm8D3Q8f6ukP6PtHhVAKVMu2j1wwWh2uTxPZ1y1fwncygHy28a8VfVEpn2imHQ8FRrg73aEjsGwQh",
  "key31": "2aX91uu18Mi6LMkEcNfoFBTEXbj4XSqXXQRC9zyv1GcZA4qSPQPYgazjPztH7c1vHAsMFnFck2UN87JEKkHz1php",
  "key32": "4DtcUuBycPNJWiLQddfkVXWQTsEEWwgs99KpaWuGMFfZNVyowDukQH4re6Kau4cLhTmMw2bsE7wqm5aE3EVB1dDS",
  "key33": "415G8Bz4bebzvX45RMycAatNZGBLo4zmMRZssYJoctKzUsDCs4rLFByBRq2V6Vtxg3aSigFBuqu16JQCcq4zVzyF",
  "key34": "5akkNTs7fwrZaHCqAkbaotzwDJG4vi2g8xJ9J2YiFfHLPsLTmRKuVbJowQDcJf1wqVKWweWfBrCZTMz2udq3W1A5",
  "key35": "5Hfp6S4KCd3b7w2LUJKeVAEDNCLd9yV7Hzfju3hH4qSzTAiDBTd6UZKx5RrFE4nEzdK9kvPV5yQqEHnyaSoGcuUD",
  "key36": "32Y7cFzeNNV4toBMYDCAzDMkh4QUFaQGT6jkSLzPMHTRSEqQ8848xxBMndxVKa375cc1sDiGurSZZocVapXEaLhH",
  "key37": "3ujwDgxsKen5x3WmFJPMi1kephdawm4EzHP3aiJoJx4BSeVMhBGBesjnba46uMHLjyqFAXGAxgERNcnaxAmMhhLd",
  "key38": "31bGpawA81XtUGzBF5YUMsVv9mNHyKddQN8VxtfhQCk7SQayCeB7AZWLK33YxGZurfFEthbvB6FtabKPFzZoymHy",
  "key39": "3mKDCDrthy6gMUyrAuriXZgCYkPbMrDfkivERJBKBKK6cBvv8PaEgfyZZZSJozUExjoRJD8uGBK9WTKDQmfB64Nh",
  "key40": "2m4nQRNEeaUMnuoyYDmmup61BmEZ71B7YoA4wasvEFyGREqCwjBzW6mFdbC2nHopKD3fKg51PocYQrNzCyLsbzue",
  "key41": "2J8Wf5LEks2vyc9zfVRaDLLrH93Wq9g1xZE7riFUFMioMMSexLmv9DBHeUxPRrfWWj8PRHC4yjCxzb9P75MWAwan",
  "key42": "34juibdvjt3hHnBZ5Hk52itkUVBrU21FfxnySEN4pZTkwtBy5x45T3smkPTZqY4iiGHSGdhucNQAxWjyfwhfh9Dk",
  "key43": "3S4Y5ZdHXYez5kVmXs6LoBTYc9c8kedDmzDQavbzi1srpXZp6F4ggyPRPLUFH81oYrUzz2qw9jKLsPpZn2SvrZCe",
  "key44": "2HC1h2qgemzNChcqTE3fzEfQ4NhiEGGpdCebiBjHCmkTf7QN2s5JY5CrhfuYXZ4pUqKhzHQm3HnLYxMJcia6nEze"
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
