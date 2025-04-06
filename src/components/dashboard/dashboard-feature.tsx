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
    "4m2wxE2NeqdandwRbE18tRRSRP6Uuih8b2aec3QXg21yS8namwHzQJXvEuTyMZNr8F2qjV5XqQkUBuK1LFF9dYXw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1kXviUkTfg9qc3WLkSpJGdPVV5CyyS64sJXgGS75dfV8YbDonWD2G565cwHwJMzsTY14iB1oW73i264kHLwWfmk",
  "key1": "3t3HtJd5ig2aoKVAUKi6bYu5hkmhf7Q3nU6CDMMf8zfgbuFPVxL1uPpyypW3zkeh7yRq1vAyd72DYf1NUTU6YmZV",
  "key2": "bNDeoP2jYbK6FFKUExBVBA2ZM7NZykv8WSPmuTQ9NmnhVMzPVsLtebMR6nq5HwJdNqcnXYaQi5tQC5moy1bB1wZ",
  "key3": "4Q1Rya1Agi3Tj9hSuvaLqmBFdQZE9fm1Hw3CAvMFcS83hg9HAUwDT6e9xyxj29QZ1xK7zMJAwVeb2tNWvxfkJdDM",
  "key4": "Y277XDvh9qRtj6uT99iVN8LWjth4mWeyh74ySEaMgHpKHfSRVGefEeVeBWFUTpZZNuz4zfCA2YktxbjTaxMzpKV",
  "key5": "5CN2TKmUsuvynW4k1KHvHm9ugGmeAxNuuh6v3p2U7ujGDg4FE7WdAF3CTSHbtDppNfybt2ByHwEuhqWhFcxYefgv",
  "key6": "5t8hV3pZKfPXejuh8BppSFYNcbBGcUyxD6NhCb9Mx5S5S19ZwzkYNZhSeq5VkCBe8i6srgAjrXhxThxVuMSMsoY8",
  "key7": "5xdqP78cEa3cAucS7WzomBAckFQPD6sqsR6nwc9Aad8YPszfhdSE6WmNkq3t61GJ89usMtzdD4XgFvFVubt8TD6p",
  "key8": "4TGVCtRF6H1CzGUUEVMW9PnQBgGQe7Nq1vZukf2ePyCmbDAyjRdNhqSZy4qFk8R1sjnjxHKRfEmDNdsFHB3JAmfR",
  "key9": "4vH38u6ZUFvCH6swvcqGwnvta1VGBjFk7rnobj9KvXzdFRhUj22uNySuERNGPLYmDuNzKDRaATSod5H7sKsWBGmM",
  "key10": "33EKQyQsVDZh2m99fxyeK1tKftarSiUXAJeJMN4dbWUBF3QA6WskRN7iT9BpobJsC7pru88uBJ9rjKdo4LmQ4hdC",
  "key11": "3f6R3xbNsL9CktsYLWVVC1pMQAYi2gNc18PMPa1gsr5oV1Dt5AYQAoAWQ9rUChxt6zia2X7cuPfYTdUfL3X1uwuj",
  "key12": "JXC5wySscTQik87NK34t8z4f2nxYPMJDB5dxVA9izAG4dNVHYr2cA9eASrpstdaTQecsA5jb5Vi4xkvEnZDPuGt",
  "key13": "4bELW19Rs38GCsF1BZZVsSQGoxUoF69kPGj2RTiBMApuKArWZ8tXSqhcAtgy8Ryrx5PSKeFGhusuPGnCCwYUkHMq",
  "key14": "2hknLVZJBTyV1Y71mEJBKmR8nUSEdw3H3hsM7hpuNFFFFV8J5tZyM5FeasNbmLrcPhxw3thdc1tDKhqZ1yrd8cE2",
  "key15": "4zLvuDJUa5cRgKEsjMaVQPGB6NEe5sXpKTnHsdU4mwGmAFgpBupsC6mb3evuGwicv6tWmPoNXuL7sp4t7wS4utvz",
  "key16": "61UCLMpiagD42momBPpDnPycwqRVyCmf1jzkLSKvYX9C24YPasPLTALEje3JvbWfWkYYdd44FHitzWXcSsNajFTZ",
  "key17": "5y6Mu4m8sCxWEE146GgrNnmssoBRVbFdRQTe28zUJmo6YgRChVhJ5aSB9QXr77MGKGgukgkHkjSiEAK28MUmgxVL",
  "key18": "5ym2eAiSn9qTaYn9MiAM6Z1ufr1qqH6GUiCYYMprwLpJY245GFTGrsT7CK9YkVye1zT3rFTheGAiEL57dhCJwF3U",
  "key19": "cnYZf7Lf9gdGmw5bSh1Q4mfRo4syKERfV7guE715dRY34NNfwFsNvUapA9apCByxnneyg3H9CyguyjRJf441ny1",
  "key20": "G9YvvQ5YnBEygUCAnnR4u4XzZ2KnW3WnoGnqqL9Yxv2r44JP5ksm1hbYC9ZWA6DN7BtxLtBndtnYCj2zhkxsmG2",
  "key21": "25WAR7jZ4Z6ju7rY8zTArc5ufewJ3A935czTZRmMPW62fraTWhMiuGkuxK1sxwQ6opz6JGPujey1dRu1VNiCs8EM",
  "key22": "4NAhXi5TvR1MffSWKDbVspUzqLajhCh2ucWtFC59wqFNeb3qbxXXXUFVaZkpybFiPutacwi3me6sDVtHoJaCDdVp",
  "key23": "3ncky4vUBSTYvtDmkQW9kzkx7UAZHWpLyjke6LMSuHXnT9oHySKJ3zjs6DGrJKCtK86bV8zEZSPih4oboNLZkadh",
  "key24": "qudTCWkTCVzfsHf4nZFsg8DwqYj78esnp3Sd7t7fZmaw3ydaUaruVuXmzt4aTwnweS39CuHuRwPe344yYxbYBYK",
  "key25": "3PxYRVqAM4ywMjPD2Qk68HYFXhKvgjsRimpyPYzFbZVMBc9N7ic1pGLQnNxsjuzSY3Cr4nhfsf9ofRSBoWb3dZ5G",
  "key26": "5rdqYHmR7qVdrUySkvQxYAmURYGi2Hd2WQY4chPnsSbsy5hYmXALDg2uEm9UazPKcdE1oXF1XGzofDjqeantF86o",
  "key27": "5wxiwyE53ugZ4MALYexAwdddutgADr5JN4aVy8zPpS9ne4zA8uiw1gee4kafMS3fGT8TD3Wb7hUbcQkNZfFarLaT",
  "key28": "3r4aMtby6paAYZE2dvGqdwJEtUR9126fZ22kfUvgxHxEbvHKspmcpipvn6N6LbSCeXqX12uUTdxeJNYxwPx712WM",
  "key29": "4shBeQ8F2mijabN8CxfKhgggYeEe78H8Jk3vUnm58K7LF1Ss2ApQB4migfeZvqYvbDB3LQoizQt5cMVq49N7ZNRV",
  "key30": "3bfzKpuG4qYMBeJgyvQA86veSymfZM6zTgwef8yeavLqvc4kajkphWsSTqzX1TaB6XyLvo5rwZLCWCGkHnjd55Mt",
  "key31": "4B4gSmzbier5yKqVZRFzU7tc8B9fahCKeyKLAyZmE8YxvvCL7AtAZE9K4U8hBVzbWMCcA185tPbqDuqXS2wNmxk",
  "key32": "3G5sB77cui42PK4hfNpNGgHc84AmyLA9gX52u4Egtfumsh7RJxYMnsVLj5AY6RiHtaAZz6R6ekjBRRsf58bTPXt",
  "key33": "2nmsLLoasZL1caECucQGCm4bqSZeRniR8Ayk2wMWi6MLcLKEiYSAjHiHueYnkbV7DFhhg66YLxF9zZAy1PrP4u1G",
  "key34": "FnCRw9wfNY3ocqu2DYDwjh85WrTy4mboKmaBWmCKkkxgqfpSTk64s1oVogwq5uVzFMdLb7CRKpLUJQ35TicUCxe",
  "key35": "3qyNuEJknjbwP2jtshxmo3b8f8K1aV4oeVQtEVMuaRejqBqUsxRgbFHkxuqxpYedgc2Eh1tkuZJWTCdH74j6shEm",
  "key36": "3aFpEYeUWLWx3aVSR1Dpirua2W3GxGJCLaVtgwGpSW9vHDajyG7FUi37cudHPWuAcrQfuRZUq6HK9WzEqPYmz7vf",
  "key37": "5ZKcm9UTEDd3kMC6hmFUQoWee9DZZb39V1nxk47aUwBCJ8CwSHxErn32oCz1GgoA772bNkVdtFaxhaWuvMdM4DSa",
  "key38": "5spLUQ5WRCUkYq76jX2jniyoAYZdk2QgXo8bGksLvFzEGHscnQNoNg2Ut4aq6Nr1bgYCR6rhKoAwvkZbHaakW1xw"
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
