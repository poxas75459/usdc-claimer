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
    "3UsHbExpRztMf4K1eGJLMt9nFnRqAA24ZZLJANuXCtAYyDyLYrYZqSTpcfSMrFZTbr2LAEw8YWRtBhQkvZVRV5eS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XtEHA6hL9JEFHE6YSaMVqewiqmWHgNw88vDrR72zzAR2HRVnYBa2AgmxUaiS5b26qdk7Xt17mpNvpPTVvVLN5uw",
  "key1": "ADjSY5VDiUoQvQd3vr9x5p1DnkKqd5ip8SFU4mHGpxHDns2bMLp3hKUPszx88CJy8cyKS9PZrtTLiax2x7inBqk",
  "key2": "5XAtbum8Rv6hKnKRz4z9VJyx9c8BKTMoZTAZr7qtUcMgpFUKgh7M7P92VR5ckw4vwG5dH9CxUPgvLuxjqLaYd9ju",
  "key3": "532grp1c8bnv9RwHHXxMk3VpfcmCpE7xuSvLqKFMeekvhKHpPNKurYwnurzv7zQiWraoUtf35VU582MiREFtJxsB",
  "key4": "3wzXkaANUnEJdeP34jAdHLc7HsX7wSu1q1HQ6EdwSBT1eZTwBBXqMd6XKXkmA9ow42xSZ3FW9edGzauRn8cD1Lv5",
  "key5": "39CT9TUL6Z8NsuEGzJ9HCS2M6oiGTw5uGMtpV7FXDomkc3WPYuwBpnyp2oGkHoD8bjKuEWMPB3EcUdhtQwQ68kH7",
  "key6": "FmS1EXxzrtrJviuGQio5CuFVJr3FpAydrVX2YZkS5jC7GGZJ9DvDvdCwrDHDUzaN33jbtH6rj4Z7V3T2Mf8Lah3",
  "key7": "4yPCPWvSohUTENDKq16QQS2Lx6vpapbPG3CgJosp1rVRHrjXQbgC8Hea78YojK898HuhRkfePrwzsxuHvYpytwpA",
  "key8": "2A4yHDmEpbEhztnTP2MFQo2U5zcPMp2y1esKhrPVsQYW161d3XLWkXU22W2WCjMfUac26a94E46myYHGYmGEFVPd",
  "key9": "5PaJTgtW19du6gvYFvkxtxbb6cGBu4eLkzmEe1dQjMajM6xmbJcppsvoTSqMCXPkk2KGxLaskEYBd1tZfZcUDmcn",
  "key10": "4pSmi59efFs9cJDd97UFHRWL7EDDcRPoyuRXxykU4KrWksoXiLsE3Ly8nba3aeKBNsWLAEeZrGZe831YdsAdJLDH",
  "key11": "3v1qN68dLch3DvB9k225WexQSTuRVyp169PuikKGaXJjHjZM2yoh1pb8LFBSdw2Ezs1VJQ19J5STGFX8LkpCtwWq",
  "key12": "59XeJH838QZXRmjoyovqBdvEjot21ojEEAE44XhDjcKGtuqb21ixT7MfYk1Dwd68fdWQiARMMYiP7PWMDYzYNMWx",
  "key13": "5mGMQzhWzSLKjSxfLTDtcTT2JTnSxNR4BAz5afSEh7bpU4s4aZoNFEwDSzSpS3xQbZZwcXiYhEtzG6WWbcCBVx43",
  "key14": "5uz67V3rfQ2t5hXxA3YDnND6HC9NAqCqiCWkiBSbysUEFRBZ3Sj48BhZybHR78kf6gjycjYoF4L8GXd2xV8EZQfK",
  "key15": "4SXxDvwVr4XAexa29MX9krKcC9KTghDDGeGyPaCciX88FqtaReMUppjRmcXHiuo8ufZNyTQHb1GPpfBSUwZq2ujN",
  "key16": "4yWZqW7fqFcAdKxGziFsMKPxtxSWCj8G4v6ZDKRdW2r4nZTdH9kqztXCQsE16KCuWgbfpY9LkZYuPN6c71BhDGe6",
  "key17": "4fHzDti9JzZfygPQtw6roZvdqLnh5hm43QA53ujaKjQwjBLMxiDM1dAosZfM4ANcqWYaeVceqHmsN1dbrHU9Ntp9",
  "key18": "4GcQiecLPG1aWVTpe8ANYrznsNaCcwRukp7HpB82NxJh3VY8y17HuLdqhN6wiDpdnAwSVXNnEQvAh4jyQmgFiYv",
  "key19": "31mwT9dNz9LA8Y6ngZDLWNqJq7bRTDw2JoYK1L3UozFavaMp5DG4An86VNjvvVg1kdN9D6mTHahCDqDoEx9jWQb2",
  "key20": "hN2YDCNCNmFwKMJkkqkR1ys4mz7mMz8TKpJPmoVAYp8emhpuRdN4VxgxoHpwcvBx5SGznGARWLhD5Nqqo7Kzyzi",
  "key21": "4uug4eaonv1Bmj5d6rShiWJe3fBLjJgHMyzdV2MTvn99cjqqZXQEio2gHi6EuM4hVEixi9HmkZAKpgmx5thyEg1G",
  "key22": "2eJTF7PntZGQVkBbqmsTEnF9x3wFpQHdHXW3Jy1g1v4RUotyXgMcDKRPNceGDroyP7zvXmcVUV89NtHwhh8VSZNK",
  "key23": "5bFfhs7JVBFN3EywEfPMtjv9QVjeRmGd7QEoxkkokjLtBMo7jCngp4Nc71iKYhdUPFyrgc6T9esb9PEL2D3J5uq3",
  "key24": "5qEv9xePfZzdzx4FDndfCP8H6vqrhBDAHHJxcyH5geuxagq9nm2ok9n68LnSWEUYrhpKhtYBfep2XonDur7rZwAv",
  "key25": "2wgxKpz2CSuVVTANSEXwZRiUfxehqAzArjAVnQtkfffwZFKDCtaueknncMgFXCDzsPfhXpV7VoCUoYKgX68JtS7r",
  "key26": "3FeriJ2zPvXEgfgnxxuShrX9zFK1Qjtz7j9rCeazUPgYJjUTgrvyhEHN8nuXfXMTs8FpKAM1dcaSNd363p712mUH",
  "key27": "66WmaSBucLkuWCWhtoEZQvop7ur5tpEwUNSVgjPXscKmWXwVZTHZ9VNuvDotVNLQ8BFxuNiTZo3CUruoSLoK5NnS",
  "key28": "3iorcQsn1dq9KaE9t8BxhQJa5j7eFFdyRRZic9KztBcDToPiCUJVzQHFBHfYdhXZPHqqvsQVnBVGxoZ3HEQNfyWC",
  "key29": "5aMJL3x9FZbr2NB8AYKw5n1DMJApRieSGzo8ANgiLK6inWhZNCVbQtFeCXtz2kYBHTU6BLYPtfXTUM8e63epiLtc",
  "key30": "4o2ZQGUBQU5m5TZNL7G7MW56caSZxA1xzZSdKAdyJovSCN8Vy4uXYnCDJmG9Soj8AJaKLuv6ALWbhYsbnRoJGq4X",
  "key31": "63tzueHjdRPUwHuWtGivDKABeMbeBJw9XJgifmHKYzNbDQr5vKGLHL3MKRhcMhKpPA46jBapq7Tsd4YdrFABX8gu",
  "key32": "3Zhy3e8ENmXKVuWScPq2pNJAv6NJSLCCZe9RtsSVpxUHnSmvTMwJmEZRBZkBfGfSz1qVwHigu7EJmfkgP5Hr6cQq",
  "key33": "gATBucjCEQLPMADvg2XJFdyJPiiTSXxWKVSXJ89DwWzUUsPMKQp3JiqMbQ8jjqQiwQyKcZuqnzwQ4FiH7w9WGg1",
  "key34": "2QqmAkMsWyB7KvCDtWgAdaDi28TXdQSpccLbchbuMMqqTypYAgyGQhbeoukWmDHeH9UYo58Vkw8TEkSVRMiqzsTR",
  "key35": "2kA3JXMh121Hb7ts6KH4tfqkrqKcut5rbKV12jqC9BQXbUvhRiZt9knRpp4HeccCex2CuamLS7embMQrirzX3FTT",
  "key36": "3ABBKgcaqJmVx5ieQRqbKC34eMkFam7cmVmGtXy6b2ZdPrRJ4h3XwRtZbgcRtCcMeZMox1e2XziRncZXUU7DGSJj",
  "key37": "57yTBZBhwCHfNnAjdRvQ45tGVRD8NDgNciX8FbRZgyW6p7LKWk3m7jQgz8YTyYv9n8XVARLRxaVcEDYUabz3bP25",
  "key38": "5ABzTUTHZQDpebdvxBuSkSdpM9yJf7wXnsExuNfgRj4yrFM2NY4iAQpVs2AaxrF6EqGiUna5TiDAurjMtzUfwkoq"
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
