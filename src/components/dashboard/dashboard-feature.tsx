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
    "2r52FwgZpvJbkgiJ1vfZQvVxHsnzk2daNpm7FhjxSnn9jd8QQuo62qFbHzbPh9V876JGYaTpnkcbQdKmJip49Xun"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9hJEsQpGijYKYWkvhLsRjDa5oPyKPTME8443NEBrGU4MFEY8LwpfjVHcozzDGAbQPdoGiE4Y4jND91zvcbgqExn",
  "key1": "4phP1Ux1tTTzvM3DfqpgFwZ6jMLRW88jgM1tNBgLaqWGCN5dsHWv138yQxXBmdj6XsFauBHiZTSuvt17JZBHdJoU",
  "key2": "5AJ5cCKunj81oSuMNeGaTHWZ2Zm3qa7fkyW7xMmNqWTKAvGPnNK8XyMSZPMFmnqrN5wcojHHfMg9dmizztsMyxSh",
  "key3": "5t39Z8YtJxhGb2Fq7Fk2tRSkcz4rLKqLwLTeCmKzBxw4pfc5GywDTgRYMzKaRBtgvRw8Y89h3wzGsdg6bskn7mu3",
  "key4": "PzHjGLYtXjWgfei1Txzj3hhZkxp8bdv6H4oXXk9Xrax2nAhvTfQKJUntioQLXuCNuvjoTG9Ay3Aeq5Y9fXbXKKM",
  "key5": "2hW7e5jgBAu9Wyc2qSy2E6QSBHLQA4p9FTk4KSd6qYsAGhGwGr2nzqXqkjkTzeSxGcrRbLJ65JwUgTKYAfWeJK9H",
  "key6": "2RiHfSP6NdZLmbjS6UYdAer1E5nBm3Zz1NVKiw9RMpUkJnVsM7kJuP9bYzm975NVZ3exSnM5VH2ZzVQWsr2zTr2c",
  "key7": "5ZN8gW23k28v9p94c1E4VLtHjTJMzA2PvXdsSJDmUDheZGtcfDR2sRgaPanv1C9GpscnTG7JqPiVW5xFLKmrUHZq",
  "key8": "2AVULNZNjefcBtyVJhocrqXZF5SzsJZihzjzknmpGYkp9MBVqDMjdsicuwXoSLu9vS8uZcbvXcw2gRb1iM5jdHmi",
  "key9": "Q82qAiiRw3neagWo95ah9REejfHyCMEXr2hzB8NwMptUiUZVDw3A5HMuKSUhehTVy1PFn9zi8N784xM76ou5MRf",
  "key10": "2MJC1jVu9Ck3DaShBVokhCVKTBNEzoMV3xDzwsmKRqCrBKjtCip9pewVF64uSt9WeFyg5GTgyESoKgHhjtpwbJD",
  "key11": "3VdEGhDxGGaNYf6Ghuqnjb4MXtPPXXraHBkGNRTDpjta7nB2zibry8ZC9WsPHEYBup47jeWL4Kt4wxHDvnjbXwk9",
  "key12": "3yLLzb2HdpwWtwWgeGsbEJmZzA3YVuDeJvHnTWfnCt7kk7LRRbvrntpgDGSUZo5cM4ykyYhMJVWG4TV49ENm8DUN",
  "key13": "5apfpoY5eyfusqPybXhX8iiTkmjxAH68N9eSnf4brs8wEpA2B2VdHcQfcujLeyLw1h24tTybxBuWVm4HgvsMmHT",
  "key14": "4LYrbWL7u5Gv8ycLnnW9PJnuVyM1fcLenHtMG6FTRCJVmZJGFAGbC6G865ACwgn5mcEXz2KkdHtrX3fNEkiQU3nP",
  "key15": "5KP3B7Gjd2bvYmrxXQPpscBZksNkRqsTrqzV1s7RdW8jVJ2zfQfemUzAgENus6MewRvd1uk5AGkYt9qjGdVXJKev",
  "key16": "3y6hi2WwDoY2S7ZffBZC6Sp18VbQwcCxrLHGCyTSCN8bLSsGS3DHrJgtULXhWbAcuXPzK8FKWQSXtntcHLPnATWK",
  "key17": "48fPPKgy9jEj1V5QdXB4Ke43xVwyVCDyxWgLtY63hFF2xJNV6seV7e5MyZsuqEimQmR48dfRhuzkH7T75LWWwEJv",
  "key18": "2BcScQUN5JoBHAow1rbgpp778NxzdRzH4jhchPXepNevM2pRt7Nh1wZ2hKfZE4BBReKwxFPS5B5A4A6y4uWcvWbC",
  "key19": "5LPxU1LCaKySAeMJNJsZVffAH9nsvgyUMYZfwHsrsyJXzh663xsMgKwFU4FUeD7QTwmBJfHAscXcTRXapa1ZRkR3",
  "key20": "nnWe8pbDbgtah9jG1uGE45Kt6VktEHCBa3VLWAyuWB7iGLtJKq1Bf4w8hrEiasK86EQDYyTSiADqj59PCKf4N94",
  "key21": "3dnBxVJ955wQegBv8AvcjRT5CMH5F1fTvve9cHSNBBubvg5dh7VQx9NzCoBuLDFmPSSe5iRj3kQohkteXnvBfxaK",
  "key22": "4yokXmAro1336bPvNR67SCGzZXrw835S765XGTgD89KFqqYCy76qF3o6VUd7vT9aSpsNqjeqxJJsF9VNftaJz3GJ",
  "key23": "2t4Wv9eo53jcsd6d3ts5jiy45yzgqHKzKHac75c2HwJHpomKRGZD8doSJLwzvPEH6dmkUDZ7yCZWGcth3D3AnR3t",
  "key24": "5SKDTmgHDr8inkS6Bs76mwXq33mQahQsuXj3dQjEN8NUH3V1N2DaZJusWMYS26MNJgTkaGWis4Unsmx4dwmVtMjN",
  "key25": "stX7W3nMQt8Y6FdZxq5QHbm5QaMwZU998hkf2V8XY8xjStLB7mNkB9FpXLXpEgy2pTbs3ryViL2VWsxxuumNzoD",
  "key26": "4qVJ46Rcbns6fWNbhWwXMDyLB86QufurmPrWDr2FxDz8U6YwacKwt73Kvbx5gKQ47iVkt2LbU793EZ9Ttz3NzYfw",
  "key27": "2gz96EvGXGANAbCDLSdiu8Fkj8YikpmhnRo2N1oezH4AZ3jvyLwrfWcD54VUB8mypgBBr9H2aTV5dHLxrWzet267",
  "key28": "Twx2ubwfXHCWyw7tP7U8vzrvKpB3MyN62L5TiLJUCzbhVcDVrb1aNmappofxXsNivokHMdqUzAxnuPYhjqE7HFr",
  "key29": "3VhGWxRY5P8T8USMTDNMa9drV8ofRyEMzKAKqiJJKfRSt4a56C6xbTCq2YX33QQQPR3CaGSacWiLtUDVjj5jLoCx",
  "key30": "2Jw5f482Vc1DYcthj62iRLnzP5dsTKQ3GW84vhUuU9hzAhxMgnDj2rfaYm4Le6duFLAYiwMRGfvaT4vDk5tsUj2M",
  "key31": "zBaxhrQxgyjvznx6j125ThAhynCMBt9WXgMU3HmADLhg5MyfLhmBWHauoHn5oVtgL57Nx1vSk5YL8jrJReBgzF8",
  "key32": "3rbqSaBe3EqNajUahMPUMiAA4Vv8He7m3xPYH7o15ypmYpuNoZmdEKvyRvzu56cmqB5ctdnA7KTDvwpd4sFpwfR",
  "key33": "3wx7EkVq28fZR5o2sBLn43Kom53tAchxs6jdi7QoFMgGYStBV74Bwmv15Xt5d7RVn2wCBiLXf6iHwH7xyiyAfyx",
  "key34": "41QHZycC1ENMuS7njJLb15XrLW62tGuVWF5DmaFJh5feWSh5PKV1xcGvCHWrzFPmfcXso9sHYNpHkAbGLh7dKbDT"
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
