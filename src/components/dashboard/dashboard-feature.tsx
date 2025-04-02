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
    "37aSLMUGvHiy73NXvGvPoFPeZGLTYu3HDX8ycaH4Mvm4UeoMHgPa4XindbUp5dQqYDUBA9zSpaRHHSorvXN4Nh9M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5y3t3kLrXeFCYaziMp1n4YioeohVo6L4CpgALZWDid84jhftYb3pHzpUXBSecTvYvV9cGsNw3RuxQKjLcwEYuYzj",
  "key1": "3MvrtEe2xoPTiSvRa2NaS4wFEgHkRgsfwD4nNu6dRLrzxPf4moM6YUBkWHvKBpsKEVRCfKU1HmphbPXByEcbATVL",
  "key2": "2F3FNwiMgYE9J9PTj5GvyKz6LbMtKpe4jcMtqgpEWxqFZNu2SeiVz4QDZxVFXANxFwfeA5AtPF1ChSmFHj5oYoqX",
  "key3": "4Q5RwboNu19jJzhCXomi2JzR3H6FRi91rgpgXP7Zjf8TjzpCC9Xd65eHkkJxxq4mG6bQ6bne4bC7FWAsejBzKJ5p",
  "key4": "5UdztK6kcDrBr5DSu8EF8d3Y1rCqtRvqUVXgc4JEJ1gcJr2X2ufhz5F7miKSWGCZ33csPZFRnQHj5Lb6pHfecyse",
  "key5": "3pPEyWGC9L8xK8XxvnKShe3pCUp6xinM7p2wV5pXySCkTw2gGrajzLS427bDYkwWJTZakR8goSnND7TmSmAwV2at",
  "key6": "5rrpyVDHnyfCxbfP5RdJZXGnFpFMu11aydEqYp6irovgusj2xGkJZwQSS6YQcVFZRg73MurD2CiWyiLTbA5VXsHT",
  "key7": "4veLBQApgBHssjxnRQr4uVn1t5wfeavmvrVB7DZWUKv85mEkx243nkGpbvgJUm3wN1fuuo6L8GgRJKTf5bs5XFKJ",
  "key8": "2wSUAm1iWQDR9Uv1Kiq7sfFbFTaiH4sab3feCWjBeQ2SrhDyReWkbDCywebt9kfbumqDdtBWvhgD7R2hAa3bLVk1",
  "key9": "2d4XzxVirXhJ8tz5iqpQ9Kd29ESBPj7zgPwmnDTaJXYLBgsm7H7TaJU2NQNvf8j8cR4caxg4iFRrRwn1kCEvLPh9",
  "key10": "3Teovv3hbr85jHbSaGDvF88bMZemmQmPPvkqsqMUgfVbEnevp9Mb3xN1U2uBjbzYyYUZTRronf9QDJnhasvmtV1m",
  "key11": "5T1DJ1GxCAXE6w6PCZ3egc1byYT6iT1dWJojxqCDb49NPbgBLp5Znf2bJrksnnrZQMykgd3fTxncYL75Lfd92wWd",
  "key12": "3oQDWMuZsGV86Kf587h4mN8QBGWetU8Jem7quBxsq46q1nmXPN9Deohtt641PEUJLsFDbwvBPHPy9beeQoGBAaaX",
  "key13": "5BDqbgzH2mTb4HomSS2h5CvXBhbWoE9uwfeF7kebFQ3JRYzTNPipj6F5gLJf4jSH4CMMfjJeKdpkYzw6mkQGV83A",
  "key14": "36KG5WVDjiPBPDNZW2bRvT3b8FinabZioWb2S2JUo2V7iDLJstxvnhP68ngfAnSRw8exDTtjqKNPaSNxNABV8qH7",
  "key15": "3aCB4dBv5xaFsQbPJ5HwGpuDqgx3vLtKaFETwMfjys4gYJc3zEvkADgj7pwnfmYvjvR67JcJD8BDLZ1KPZC73uFx",
  "key16": "4PWr11cmGEJ2Rz6LZZ8d3bcy2doM6wVJ7SDCFHzASeLJcApGPdLyzfLiCE7tzRuK6qcYVe1VPV5SoHQqf5WPbMzs",
  "key17": "26MM5DQ5YavnrVb7e33Qy2sv7g3zjZFhUqqyF8UKLxjTELvhg5sQSg9bMtZC7LpWMZkUZrVAePyqDGx9dDdaeiBG",
  "key18": "5CkLqPd9pwKdSAyDRm4Cb2RejMs8MJgTD6mdUPa4636bFerqxM3jd6i3LeLwrZXvCsKkL1GNd1ocpGdv9Zk9mggr",
  "key19": "2fBXq1P2LMHF86qSNg8zm2KPXosq4DKfmpzrgfmjhE5r1LyFrDPsrBrELoTmVXWe2vmVu269s8soTpjR2tRggYEp",
  "key20": "28xsMozvwMHVDAttvRX7hnNhn8Q55cfShZU38Jn488bBcqJggBGi4zYq9VJ2zukExm24aSnjxmY29cJjcTyNKTTk",
  "key21": "2Gov38yhfw5A5RgreMG3MzaDJQSPg8jNLq8Bbz1Ev2yyAFRtgzLqygVcBbuN3vbHBLEnXcYrzgf3T1psrfviuBnC",
  "key22": "2AJmegrCVqj3QcKXvrwUb2onRFhXYPMiD7XBhWLEb2PzFVhkW2b1tVPFNsPJ7dQ5TRLPAKX79Gz951D9KMXf15V4",
  "key23": "NzBG17r8daELj321fFtCdhDUSsAGrU8RC1AWg8EYb7ePV3F132xvzdTeXC67KLHmu3WpQS7GtukBXGHz3wrdU7b",
  "key24": "2d8QzabRDc7rUcb73myaB68RRMGpBM2quNn18MiDvjWCzTNaaHCEkvNfsxUnPB6YT51xbN18dSUnD64DQ3ifh1Pe",
  "key25": "3bEEvq67VburGgFsK17NTYGQBuTmSnUnfGNvbGbKjCxEfRc6rTwgpqU91ENGb5aBAky7Sz1Wb2TzsY4yyE8PUm5F",
  "key26": "fDDDE9ZQTmoJFKARa3wHra5U7uEK5p9JafnoRCneE9PogU9j327EMCMsMVgXnAPjdTtby5LARS8EBW7xLQ62EZc",
  "key27": "4jVLBqNRQMHDtreuUqesmV39hVfuH5tW6k19H6HRJgWJrRQDms8AsdZBvnrnrP7y97NyjfmARwnyj1vrpQQ4FLcQ",
  "key28": "5zQMrnmMGx5bj6dXP1dGf9RSJbEkTxsVyamjUFaWscuRs99jiCFScTFD8kMoYrfiBkjFjwsJTLdJKRqjgjaDSnHF",
  "key29": "2gXifWMau9jMopn8UJ98bMprKiVr4A2KcGEBbQs6HBRtVYoKMNjiXjpJ76pSwK1jjBXB7scFrAz159gK3aJLC3xt",
  "key30": "5EZim592tqxmK8wcUhACCoPvM7hVGvND7xe4qenLYBynrgRYrGv8RzcqNB2YjtHWMap2VbztBSfajaKBS63jzixp",
  "key31": "3GwxBwZy32cGWJqAeKBoVMhgPFUaitsBTjKzffyh273AE1AaeRka5AKY8sgv7Krr5E5foSoBttB4QFdqEk83TZ3n",
  "key32": "4j24b8ciAngcTRU76DVfQCfhFySaQQUxQGRFpzq1p4KcRsv1w897dtfP9nh5YD2B7ERi6MHUiapKhKmV49zWMFNq",
  "key33": "5XxZmoY53grock4Z8wy3uskyoBZSpj16CfTwp7rSLMa78uQT4HxVjFJqDp7RQtZt5PRapgjhKr6GG7F1GMtHWXo",
  "key34": "4MSi48pwfaNaeTGprLe1P8Dmd57kBxfqTcPdLWFcm4kko3AZyusSsftXAPBaLnZ2o2gminLBHC7YQXThHsaodAxg",
  "key35": "4cP8YcEw2XiV3uYESpDHRnGX1NShUGWBWsQLNYKTxK7vwQnUA9nWT5e13NHyZeTMMdE9CqRGwCFMPck692J1moU9",
  "key36": "37oo7mjkc4AuvG3EBYexxUqJzaJopCCuy566gBDQUPWQcJwmMKruShSQnZiowb6pdPZruxyWJPNuh7uUZVbCVeaF",
  "key37": "1BxLtJCFWy45LFpFkJRSYtHcXjpwM2Rw7yoqutDgpTb9LJJY4kNFqzbXu3yGCzkTqsdd8xbrUzaMFsbWrBNsF2N",
  "key38": "5c8RCrrW6Cv6G2EoaptV5FrtBgXEkA5CbAcf8KHEeJTXbbBL7C2zgAaEmHgkuerKt77bUpqDP13S6BNYSCja2wGV",
  "key39": "4HgLyh2rGGCPNhk7VcE7R8pivUpHmwJArce8p1aAyzMG5fxVkN6JwknQKZ2CJepcGiU4TzhL9Q4fwqgoGE1Fe3Te",
  "key40": "55fLjk9fsReNjQJaGx3a3i3BnhgPnWmt4ccCNvmUD3B34jAJHE4FScUCd1JFicxHgxQCVFWq2pExMHfz5iJyP83T",
  "key41": "26bGbBAdYHZN6V1HWCxXc3zKjeChZrd9Lx7qrFvMxG294WsoGvio7bTFg4dGK3PjTfwC9znmYa92MA4iy7APWsQ8",
  "key42": "2tQ5CaJTkkomKhsQCVjDy9orha7UomsLjKTXwGDJcBgArT3FezdYDsaRd6ca8LGN4vjsqUVpaXa5rrMNcuirX9HR",
  "key43": "2Jj9sGiPUn9aiYCFCinD4kZrkt1Q7Aty7bK1ciZwUUjKrDsmsm7ZpfLDj56WUeEBwCBjxiqEq5tq8JUcmU1MjBLt",
  "key44": "4rzdMg95fQjV2dU2xAzwn4A1B8BSfDsmjE8qeEUinjzLEWCoa3mqV8ynV56xiRY5cUD3UQVF6xBRExgkxSPSMpeK",
  "key45": "2LqMPz3efcECcUnXdWhPXqk8ztF2qBBEHSfc9fiHSTP4T7uY3NhBB3dopBr31LcNtwsLSS5EPf9Wc6b5USjQtMdS",
  "key46": "ANJQbjBngcLWXDEu5h7FFHrxxk1A3QAy3h7Ju3JB7di8Ehmk2vuHCWMAdYMikPNoW4A8SCeP8ZdzXhZyXsvfNFD",
  "key47": "4xAG8Av6zzgsN2hWRyAKm91YzTAfPYgzG5ZAZpDdDtkjoW9qsuzG9HAxoYDPiXqEW2prmgkP7uiwhbJEr3TDNYro",
  "key48": "46yoYz8JkLMocXe17Evrq46Kber75tPGZxT4oyMyyrLqixDnRhSNJrNyo7tX94LZHGk33M2M5G2cdbETjZcFUzt",
  "key49": "21bPR3mR5RjYpQcKHuNw1XSqzGQPSFqszuhbZVeB3XQeWXYgnRp5y1CHWbCMBUJnziC4kYuvaRvtQPxk6dgPsV88"
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
