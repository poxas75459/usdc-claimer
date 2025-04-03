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
    "2m1pjXRTF1Zxrqz3n5wA5vNn37aHkHTSXudZKrsZmwLYUd3p3o8m5gLGUnN4pRz3pWmazomU3Y1mLRRBvAc9szPo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5o37JLgJx46h75Jr7k6dWGJWEVJteFMwtaWNVWoTeXujLFCFqNAnfpQKHaLdeAVu7kstwhKY9QuWK439ki7f6FVE",
  "key1": "2yJg4vucobiNzDs89wfL52VL9TvYX1Wqoiajqw8eLa2de2jxH1AV8AUrJBstvHGUDvkaFSiCqbDwGRLtSESUP45E",
  "key2": "3SdxET5yyVcm5Hzp2CGnHzUCGLXYz6hugE8WV6EiSfsXN2twepeHLVYFTC8YLH6r5FTzLxhWZa13HQYWMvWr61HU",
  "key3": "4dUyaWYK5p888JxnmugwnkpBg2tN8EfB7mQkJs9r6P5MNWcQRhEzPK8xufKVFhsQqCwkzJHhrNebQSctFeyxAv6R",
  "key4": "2PUTafE7ycH4TK8XPBFEGKFEFHq2FZhEJ8LJVDkbTnEPdEPPDHxo35EvGhyMMScbNcbLMavFQkNbinqQQFPgJ3kP",
  "key5": "3bajM7q17p9Ju18CUTDu9SjUhX4DwiaPgdfGBDzHkJ2M5CWRbzPDRTzA2ZtM9fzjfVQb5xpvrv7CJfJpr7HDteL1",
  "key6": "ZfR6vzSLaXeHMRwKaTWAcCCnXvaGDuL7ZvLQyJcTzv3Do7yGovahWYMEoVU6VPJU4nSPG9vogB2NSh39oj1SJGd",
  "key7": "2aRpq8cDup9VidtY2NaaKyvHdRF8dT6sfSW44qomKzm26o5CzM9kgFtzgBfskF8dmbKH4RTP2uZunQnciFmJfkxj",
  "key8": "VZoSowtZxtSmofGFV6jocu31pDAgPBg3vGjoSQYPbJR5b4nKPQ7Z8c2oSKEgvVbCUyg59y1FjXycT3747XizJNH",
  "key9": "2o9fTKvdP2VFRNgNtfQEuKSyWDghydgs7jPDiSsVT8cS7NZyxSRXnbq8iBzvHePhewFaVSB87LxgqPBUe8ovHB3J",
  "key10": "CSJK2wH7sXq5zaAZEvFjjiuzMPvqCNd7DHMjkBnfGN5QsdV2pJTx7g4edc7ZC2io9KcTNWh3jHNyr22ojZ6BdeH",
  "key11": "45MNkFUGmUEreJE52doLgC3cGyh36y2jbfgCwoNc4cRqKFVyZUWzEVgaiFsfkt7wijnTgYgdQhcE5P4dmfpk5Sa",
  "key12": "2B1eCcbBYT3g6vhQgzZyR6VLbqbyc4MDokLGN6pa14AQ1QQtMXpN1J6V4jgxG9ZrsL9JhhCKG5m4XHFBx9NEjerG",
  "key13": "5GLQGaqvKL8JKA31vjR4xMiTi1AYmmx4WdHgcautj5zE49ty6Jd3qqfjvJMcjfieFt4c1KBZzCD2bJpardJKTxHb",
  "key14": "5UDTozf8ZTrH8pXJRhGKfgUw7J5roNXbqF2w9LCQsirnFbE8XFVU5uccEAzgi67fZZXBzL95sgMFsnt8ZWxx8YkT",
  "key15": "4ZJeXxuQPSq2BieyfJUZ6jMyrFQ9VTUSpFPjvmoiPa5dVag5gYQuTVKWvqPqxi4oBNpfXqSjsNk2r9nEFSke2tRy",
  "key16": "4JZn5iJrFse9T6ExVSjsfDJdCbSNWgHaDtRCB9W72LbB1nKwQZtbBBhEF9zxHM98RGnAbxL1eoaPhzQJtFRZYbeH",
  "key17": "3Xg4jMbUwhXR4AfjFTr2fQBm7c4wTeBhWLJBaXdzgu7CA8xUYrcWQZR9jtDQSx3MhmhXGS78wbAC7suJdVUppZid",
  "key18": "5icvwBrGxksKuodq143oNSGZUqQfut9dAoZJkbHAt7x6WseWHkyfU2NjpTctyexALeaebSVU1fxaReQfGMKoXqwD",
  "key19": "2y5MaiZxgYEKhCxkECV7s93G39mT3r7QXUzCK9QZ5gYGv6CNueyr5bRk389Q48UfcjynsX61JMVuR9FLgBTFjJnt",
  "key20": "2u3R5NNT2ESnVb8AoCQdZuUyJXELqEReb8kY3198Jchd4pqksCK9iXeCQyCZgCkBBCZxgnXuejNmafAXRyzgHTsM",
  "key21": "3zYBqfwpXNN56XyuBKGDRC24mzSzpZ76S7Fz4hTs72dXDJAWave7fjvFCHsXaCgVCv2R9tg1kpuKuU164J3RVbaS",
  "key22": "2PY6JJsfFYXGuCCshXuGyed2ekurVRhUKBNsCDnWby79j7XtLvaBDdeAE759kJNasQeA2LcWpT9ZbaNsrXLiZ3me",
  "key23": "5XaHAiLoVDR3M5i9mXrJSRnH6HTWgjvFhbsRXyFQUogyhSfBhfvwQXEZr3D5GAJbHDqtmbbdgoz15WCpwLFvrtZd",
  "key24": "54zxxHkb8LtVpqy5kSFtGdrUmb4DtGVDv3ozwzeVRexrvJQZtv4uq3VrASNQPk21QAKTsyrjXbExNPGhju4Sobb3",
  "key25": "Ad9ERvugfc7Q7t98sYdroyGfpHgVQbrVbzZTu6PnZhb7KLxGH3656YoSQTGZTAFdgMWFHybMws8mcyWvUpBVxvi",
  "key26": "TpS3a19JbK14PzrHcjE45Rn6iHziKFziQsoyZC5dQBbqvfJdcCNYaZuC4K31gHYLo5Qx98Ze2yg2tFmWSti4wac",
  "key27": "4Wqv4aw8S4wHA2yCf76gsUsNYXvHvZGqK5WqgrAMm2ScqMXgREZ6qWSstqjL8J6nWTW6Nv588Ld5aNreTL6TTRhi",
  "key28": "5NM8dVcVU3q3co6SxmYvL4WRs5dQzVfRTvhNCyFbBZKiCgTWGEHKRsbP2Jz2xAXJszngW6bwHFCtvLVnAqnPszB8",
  "key29": "2S1JeisyFt4w6cwXXELcG1j1gAbZKeYCmz3T6KtxiZqSPsXb7EbPenpVpjQpAXt5NT9AFFsJ3Ur1w9BzQYKdZHSF",
  "key30": "3vwKReMJ2bgKE17qPdDJcsiKypxszDaF9rUMSzaYWaBv5r55SPAZF5e1WgdA7C8Povg1W4i58ioHxh2L8bLD8PJb",
  "key31": "5dN35w3BkP87uwsgp41DXDRxUJAGBmT6aTczZhHwFKMbpjcUemAPZkbQuTvm7VYtUsgbtNxm1s5yyQHkT2NTtotT",
  "key32": "za8vLQckZwdtJBgzADSM1cNcepqYFUQkUEsVS4w1DfPe97cmYdavUiSVgDJ1Xw4oV7cKc7B8qUWpGPpzjphXxTZ",
  "key33": "4dDYtAwGbfN1Dv3yQ3n9p5xkiXdyUAicpHa8BPMr79n5HKt8TYFeqvZ1MpMndGcEKwBSCM8kCf4bwNbBs9P4NoMV",
  "key34": "3Vgd89MUmvaeivZjtRarkhpqa5km2qTsPdSDRHReZ1LxWEaHj9VbneeD7gGnqZWNR38XcMW2FXnvgdHWGZvg4nu2",
  "key35": "5JjLAUrTEj3fuXRDzwKokuWddALyiuSjyvgcVErtguCF2zHPDWqX9Fp3dVdXDJDro5TYm9kapCDpC4yt1eBiuSf8",
  "key36": "2t6cacUDAyaxA1CqERTHLPsExE9nUdh2RzwnMSKgS4Vtyay6ab5GG8C2Ltn7fzBse4gGCoDf645gUkdPdcXCNXuT",
  "key37": "4t5PTGvggFGr6BNwTMocGQEVCrb3WfyGhNvy4HYZeCGSSU1gU3Cz3izVXMDT2P6g2PjYEod5CX9hkYX9ggZ3W3jc",
  "key38": "PPVzztmc3mtB9QPtqSVrq1SZngg6ZqRySV9AUXyqpHDfafPjCqjkhfiZCofeN4r4s3BXQmk7JJqjYMCYagoqCa1",
  "key39": "2L81vGEZg9uZ1xw6qmtku8s3AigNDC6P7mGveo9RQZaEsgMUMKVKostDShZvfj9gCF33gyjgePWW2oxSfcDjLdkc",
  "key40": "sXmXWHs5NQyqErpDFotcohdSns6AnX3KxfrcuZUiYqot3EMCfxsm9Av2kAdBUL4HCNqhY3WbD2VHDLYgeVBLj2H",
  "key41": "HzK9d5KcbuwoBHUjZXA1vhJybZdFTZ2WGYHW2cXGDHHrPe7ezBpdAwPXXt2vVJeyffxkahaMHq5cZ5DjFqBxxoU",
  "key42": "3eKdJamXskdtbcaqU4667FLRjkYDwaCgSf7ftW7FpjbqkdMUrnCZ39ucws46gFcE7TmJcCF1Wim3GTMeWahDbHL7"
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
