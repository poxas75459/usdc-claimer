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
    "2woDaEdk5H3rtSqhvafEoo5KcFmfHHerJ3Euq8M4WHAqCechuRZg4ptXgjuUquasA47pXk639tQgEHgx9Vo9L5CW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aRa13QrigPVKNPs6Zio6AVZ9g5UcyLRLLV4oLJWuSneeCzbu9ReXfXM9yXBvBJEUwLNcv3QVqYUzWd6DdRqVWju",
  "key1": "ndgReyMyQcQRpDs7d5Mc258GCWPueGuaxkt2u4B97yxE6542CcA8tueJbKxsnzcd5pKPRz5AAcASrmdQeRhkv6d",
  "key2": "2PkJPrehnLsgo6qHuj4A1mqcsHLXtotRL2U76CMPQxXfy3zgPJvqLpQm1PFxfsvk77hwCXkucrdq6CjxVF9TszYw",
  "key3": "4UgNW4quyPHqqQgbwTMWPHq4mDX4ot3GrpQgngjAYb8bqjUFQb2PgTe8DWSugFUX2S4GQSubTW5xETCSiJ87fuz3",
  "key4": "4hk5RBrH3iaLUKzQ4735mqxLVLBymAegDhkZg5BxCjdgsMwh7cikeY5EKhTbSfLCP5hvzPuMdemyyLfD6gRq8vkv",
  "key5": "pDLrkAh22R7GThveRqXf1eub1MmAPy2K7atdtrophi4ZQwGwg8oGYgCgwP1GYAxHFLjpgcgt62YZ6ZGqYefEdnT",
  "key6": "7fWQA86xd49C8uieVbgP81qB4z8TyNu562qQDnP9gMB2E37bsPoPVPM3nprmippGygHRgWQmnwDrSq5jBTG33gq",
  "key7": "Q74ir1xrKtQmMoYR7KKNHniptAqo2mZ8U8iwwZES4oEDLzcdcRoHCyTdUrK1S1gRDHkVSRNiVyP34E8kvZ2ckpB",
  "key8": "5Z78j6KFkf8dDJ12kbwu2RyuybsyuURhCWfc9zLJkVJ17rp23YCXZeWzBgAC9MzpfDK14qkQhZ19oTzUwH9V1mLK",
  "key9": "3AhxzxiDPuTL7EpaoSWdac2CooT2G9b9JnXgWUnqzQYx2bnnyUacRYAyVYbmnLSrFoLcVcFo9ZD9h4o4JBqHS2dS",
  "key10": "2iRDY5ENf9fsf9axtCEXYhu5gm9B4vHxhtmJygFNpBMHTtjKux2oCKXfMKHSHoqiQGbsQRbfF2taorEuXeWa9rUH",
  "key11": "51zC8iMLYA9m16oCa2sCbXqvU1BpPBpKa55qdxGGu665DmGBLuii6BKMBocETUFgqzURzDJSeiUAPAnDVAZbVibC",
  "key12": "2so9TKbe728be1T62XQwzmNt2KtfQZqiyT6tbvoqh5NdSU3qVaet4diAjjjSGUVC1SpSzw3SnqRj39ZDxtqP3ijK",
  "key13": "wRv1LjF4UQxqejyoRwhKb9LHUVsQunUgp65ubEnMW6aaUgfyqHhB6ynA9WpMCnFHpmWPxKG3LiXkZEcrzjn9aLt",
  "key14": "eVu1xG6XZmyq56VCQr44ZTrfdRhUQqi5uKoMDthtmUQUS35ZA2975nt4R7p3kN4HNvX7bAdMYnuwjokSg1mCrzZ",
  "key15": "5KfzLfyzc8rYQ8D9CFSQcPTdPfsNDBcxeoUAZ9hfeRz2h76BuWbhC9Ro6cC84uNxRZh2woDKLsCc2ps8K9ou2d6C",
  "key16": "4pGBXbSvUpxz8VZiSgKwXoNdZDg92RUnrLjdHx4sHBfmb3aCPAEh3vV24L2ytsZNobKgR4pigffJyh8HAsjpSie4",
  "key17": "FHaC8KKagynjZeMyyBv3rG8gFmpaZsJcWipwh4M5wWRW6HFTYRAHrWkMuc2RBruHrrsw2qmnH1VJnGGNUkn3mT1",
  "key18": "4acwB2S7bLB4tLkK5LJcGbxEcG8iPeiRRZnKs9NuHdPvy4NkHBLoX2NsanYwjG2PSvuNCkqLy5sHNkzMpTHfWCUG",
  "key19": "5Sn7PM6zgSQWDCqSFRYkbX851AgErHegTnPvZVEcHAkRZTqARMSGT5NRsmWq5cdPNG8zcghbMVs64pzcxTB9BDZd",
  "key20": "4gbMbqJuSDzfPd47LkAzUv8p6o9EYn4k8EojbwKWyhc8hUMZCBa6UC575TC9KJisTrtVEX2vJhSae8r5xttzELqg",
  "key21": "37xZJVD5oZqX3gE7K6n6hibwyGdA5S3vuAvmCxTrGJBkjhG3CUUquqMYApTz9xQcELMhqydGot4Yaow9ruHtaiGo",
  "key22": "5qqZhzaApj4zDmt1piYN2y7NGC3M5uKdCrD9moxF9toc6nM4bHD7s8TJ2TsyttJHLpjBG3oGGPbL7zkSW8Az1bft",
  "key23": "5zWAMV6EBAiaGkfHuK5fCNTU6Jjsm79yoJdE6qsxXBFUK1NL1QFepb1tTHYYN3nfM3oiX9rQ22L1gfTqowRGq56X",
  "key24": "2hQ9BTZ2GeykRinAGJZctGrp83MTBtBBteppztQLCbyxCQUcSY6tnatZdGFkQ4a8BMPwTBTvwCNcQicmUPmhn3rN",
  "key25": "2Wf9TFhgxbHWYcBCgkNepmexADst6TAvTmqX35qiB4N63meTyuRBp53KEdvNFrnBmVinPwWqzUimWNTxeSMjzo8g",
  "key26": "5becBD97w2KDAfiYqpG7jWrSisk8yhcD3wNxBNor7wzd1tVimqHns9CNa6PQ4Hv75gddJqKAwkTSyCdgyVkgrddm",
  "key27": "3s3LBmLFNdoVLnYL1RoLMmxALJMQFHjRJ3wzk5scVk9izA3fgGSfeTyHUswYw9xV28MZZHJptbVYC8z66mPTS2Y6",
  "key28": "5beHzqEKHDXWTAPfcB46fCJ74t61VoDmix77YVsFVSJxk8JRPyFSrvyUsm9c4Su8xyjw4M4m4pNduVjyCcdjZz9o",
  "key29": "2oct8kU7or4ebzYz9ZB2tomRffbD55RZ3zEvEsxTwt7Pe2dDjZbEZw1Sj9go9DYNh8nFQ1wCjMyBEBsJbUFUPkHT",
  "key30": "rWufH1EjKEKAJF9E7PcXRKcZ4G4gxtoY3WaLY5d1cMyaaQWUvDieVYVH2PbdpJBYceiC6yapzSvE17ePYqewS7Q",
  "key31": "5wXUQsydR4srgQouNvz1oDSn8yRUm78E4ssHwCPmMA3FBENtM8caVaJCbbipiXG7mTDkJpHuQuXNqC8Sd5zAjV2o",
  "key32": "Ygb3cKHSMwVEcG3ZHsRkE3BQeBAjxKzyeEdjBUt7RK4mCSuBNNtwL3oMAc4xGPEc5TeWvbAoXVYMVxT12LY9QUE",
  "key33": "2DzRtXymvnimHBhvP2k3YcJEbydzX7TpYPQkRgpZfn4bxvCHqcFWvJ21RRnW3q3R9UNoJgsuPJbAgQ7Vz53VdjwK",
  "key34": "4qQcH7DBB4H8jQjsFS6cXuA135QMx3eYwqCjs7qgV3q8Kef6CPBxGmhNXtAvAA7cfFq8esHfwC9jqAQUjcxetEBr",
  "key35": "SurEDawe7MJW4wnLC6wbCQ9VU3LozLE4YQwxrQfsvSdGwoRVgmTWf5XhEeCAu9fBix54qk3nNPRdXJVVkyuCxa8"
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
