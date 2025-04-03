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
    "2TFA7mYyTWxebHRM4BLcE7niiQJA6CSRnmSQ2JSLN2Y3mxgjXo5ZsgbF3SMPw48yKSo4anyV5aQihuaW5cKVgRyE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HhMSkV4Hz566i1ikKCQ9jzbXKBjcneqEnwwfmU5Z2hWxpD9MNjzxp1bsXLc4urw4u4hh1JrrdqGonKhJuHd6FHH",
  "key1": "5P256JFfQ4rPqPXtgJ2PYksM8EbnhW3HxeUWRFKpunYzQxjK1JuggQ2CHkj96g9anKTi9t1JMEVzvsek7SoqxQbU",
  "key2": "oYTjsLkNWipUqDCK9nrmYq2X1oBmNhEgjVFJHtrmPgAyVoxvdG7DZEK9Zst1RQR7srMw6sBRoMxDKzs8Go6KeSN",
  "key3": "4cHdNDjkMVZaUAZgiFVrXDsE3mS5hJ36Gn2uTT8TpAR9bZZbHJoQJ4236NFMXAxw74iS6uzTtxyUqtV2H94mqqdY",
  "key4": "46DpKuKt699E972yoc2B68x1hovjzjnNaC6H7VfePbsrNYmSEJNzYS2Cv27Yhnc9bXayqKHsjUqEaXNYVTzM1nLb",
  "key5": "5ey7Ed3te6owbt1ZJNfDJBoMkyddbmGpd9ZmZr2CsXqt2MRBeSW1MqKkvCFGFjFAG3Dy6ZhvhU9mf6QzaMEvoesc",
  "key6": "3w2uKyPCqVTenFjD961jud6LMrV1sb8SLQCkTJpUh2f6yM7Ub5BiH2hv3i71N4fsKnWt6vvk34d5AhymUqBtHceg",
  "key7": "5MoPSBxaHd6UFLP9eNUDUhDenheTsJLntfsCvd1RUTzqjrv52TdEkzjHB6nAcJn1MAtHdc4Ap7CREBQkNgDM7FGa",
  "key8": "2DusHtTy9mcSshbrQqWvVLXJ439LjUqKpzW6FmbSQVRtML3cZBgwxStxLpuYAvKPNa7ecgJecG1nHbouwpjwQiCr",
  "key9": "4Uy6LJTtPjbafUPzZfPG6W5SkJtqfyKPTygL79yNSrgHRyNmjiFP1TscRanCrmXWgQxRJxJmwCSvoKdGK3zuHV2B",
  "key10": "2R8wmh9YoAnqr1YqLWsKazwJW2whhGHBXt5GagHFjY8H61xxwJ13BtpigHCDsnHLsAMRyBPtKeQbhG4pxriRCPPu",
  "key11": "4wLHjboCPe1iLcqP9feYQq7pLSTGdLCVhnwomkr5RUd95UVRfr7qLigkCLACpSZYLdJozuctkDyfPdLtbdYSnb8g",
  "key12": "61JrYfSjm3CeKAouvpoh5Vf2tpCdA8TZvd7vr2uEhABAGfY4TgX34JjxbNC95zzj8JxSprxwtn7qKRiHHT5sVkvs",
  "key13": "39gZpF8UK81o6rgvFHcEYepxBAJFePrw3AesL2niXkq6DLxfQ84KMXqLGGWFEJBCeytdYpLwrwnUZPHHcoc69F3Y",
  "key14": "bxVdhhtpe63YiYYzpK7wgboG1E2QGaCnYQGcztviWcGKvqAsWuYQdoZVRvMWKS61TPKDqd6ytKyhpjM9iK6Np9n",
  "key15": "2V96afvaWxZfmFMEAd3eBvEoJRq9QfFxZkia3fkKgnaSLBVPJy8V1zi7oevjCMeVGYtKPSySJehauj8mH1cPVcbZ",
  "key16": "4iD8srNspCMWZ8VQRXTzp3ZkisX4Hb1tVZVnVYsYMsXfq5TbbrTxYDe3TJcSCCmvviEgzQLsETi4ExHAXp7XJ1C1",
  "key17": "3ENrQjreEHiGdhMg5rY6eAJXYZufnYHCVv3BJyydoYsacvKk2nGx5r8QtRuEDpcpmXaX7JJ2S1Y6EujbD64doUwD",
  "key18": "3o5J4AuVUc9L4bcxhq2TYgi9fVxuPjkUMQKS6MJ8yDynqZRQVdY85SmDWEFcptQCrrGn5yffyujT4Yvcnk56kczb",
  "key19": "27SYVkA2Q1oPdZCfcaY2zBU3VQ5XfzvrsBVNMZG7Mr7DdgnxmC4Trv8SauRakGi9qXSXCcDTQJuv7p3SWBHQC3fc",
  "key20": "5e1VEkYcEG6rv6kKf6SPkTuzLSvGGHV78gW4tQrofqEYP1qdkEUYS6WbvLa6oBNcN4J8vFZFmspC61EmgfRxHPaY",
  "key21": "5tJew4qHXK2YmCVDyz3yHcSNv25ZTu6tUryGjsZ68Sigjy1uigg6GQTSe7m9xes8ZB8JCx5dnHrqxzHoJBPrWm5L",
  "key22": "4JDSveTDhujJ5uLVjkiQaeJQVX8sFQgASt56ss4ysEnbxenUx8xXjrbyhhp3oJsEbtomUxUvXfGvs5riMQp1XW3v",
  "key23": "M5jcVY4QdvLJR1bzQCxqkGzAP5G29jQXBXYGGs55TvJSxxDPemDxgVagnNXYgQfGUgkTDGTpk2aFHz1jBJ2mcHG",
  "key24": "5GZBghsESV8tzWLZvd4dvWx5D3yMjmYddpap6VSgpPBQaXizmRYVkicVGagV9vaZHNKMYdmrZhgk7sLrKX1p7An6",
  "key25": "ozDhSfzEad2w2wb6VfbXDxqCcbDweucUGupM2FRvi4r9umm5rg4xjFH6Lx5djvS9hK39tjrLm4RVHRHY6uLgfed",
  "key26": "2UFR4srfDMH17yuwTc8U8MuNHKMnWvQZpMbXyFd2EMyTYZK2CwySebZ6qeKWM8Zac5VrfrRaFMM4fWnFbbbyLLL",
  "key27": "3u2QYX2obDa8kjk55MMDJ2Fsq2skdqDUFntuzKLGThCykRXpFWKef479pPPPoJesSBTmRXkfJYsReA8LYz4B4v7m",
  "key28": "3rmD56ohnNPp9yvdGBxzGSsdxF5dz9ZfiPo1HyxtoTddRWwJGaTd68J3EHAm8iU3RRdDGxesiDR9sHQ3vpcmTx8B",
  "key29": "3xkKUSrtSQx7wDcVvdfjP1Ka5TcjsLoVZeXzZbDDymAQnztkce2nfNMKdgNBCnBc7n5bhzGXZ7YvpaypPcmTB7tH",
  "key30": "53UHxvmWpNeRsYF6xJVWmskfBZFfZ9fz2Wik6SAj6uatDhatfjESpuYr57XrxRyZcmzd8wc4dzdmXc7QL2MBUzwD",
  "key31": "5n8mwLh6FpqjeNoBYTXb1hebx3PcE8ujVKfq2ZmWePokFqYJ9Y5sNAUPC7UKRgn7JYN13SUFHmdgGbdFpy3deYpV",
  "key32": "5NN7X7oMUUnbZ6ndsnbkndsZf7ptxzxMCJWet5SJS5p2VCKcGTWZKHpCgGDXLRHAPm8vE2xQ2X2odkRZbXRdk2n4",
  "key33": "2M5KaWDdu77L3eFcrNDKT6Ha2GdQX21yRLaEbhNSpGoXr1zxrdCjFTLve9YCWrDURBcE52uMsiWZnECwFpP46Fj8",
  "key34": "vefWZ3yWoTeHs3BabzjUSueXRe4FLLByeVEDYn3xcobmxzhegC8hQrAWNfEco4yZBBb6NJKzF1VPsckeNQXi8Xc",
  "key35": "4LvPhBWqR5ZnMPJfyFFHi1Wbsyx2u74g53UoKzBXLuny9DAYqJP6UqmwPdpN8Er8hsNBpRGtouKBLo3tpnoyxZsq",
  "key36": "45Amiu95cDZmTTjvpDaoRicKGnWrohSFku6R2y2UvvsUJWicvAuHuN77EKqWX81GZ19nheTXnmpmZZA3tGejjgGC",
  "key37": "3jbzxkNQj33SkKPvG9144KbJJoBbsdX79Z4NeABqaqHXaSRaETJUf5Y1yjuKAKHEu3a16PyLPdpmE36wWhpCCiAw",
  "key38": "3Che2TBNWMVnbJb3eX74ML18fYKM3tDE7bqQXQdeKAGzudmKoSQsFv1t4rDutNcwiLUNrxvR33wUa3F4t7K1w1yq"
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
