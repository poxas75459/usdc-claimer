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
    "2rsrYH7M4QGr1oyYhoCwaF51fDWWstrsZcc9xz42JpqiLwhA3aYsgFN18f8UPA5BbxVKFoM18nVCCagEM5PCAGdR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZF9W4rBwWsRXyb74Nf8rsm3en6C7eGvHgnSE6Ppzojki3YaLq1nHL7tFTzu1bW23oxdmnALppKe9t9wLjpkQVg8",
  "key1": "5jfb7PkiknryGJmwk3RfXLsaZAPb2qvQb2MfB1HxFjUYmhKFawssJFHp3jcEaicEonAdZD5thv3bGVg7CmnfEBLe",
  "key2": "3YJUD51vRym2QDunEJZyzxvWTHnrD1SNhYLtLvXJds9zuqh38f68PUbSVZLNseq9M1FokcNqC4xHhf9ZLrKPitS",
  "key3": "3UuK4qKLXAhjV19q6n1T7piyrn2ijZ51Spz3JRSDfbPbbr2gpNJwG6HdvLi4SNeJbpxBSru34UR5ZBB1snDAcTfH",
  "key4": "21fTpHdZwLHzrf89SYsRF6DAFeyjyFPqqK4CsHxEWsfPh6RRfxSZWYite7fcEiYqhrE85pEuUc9ttSMcx4uF6CTa",
  "key5": "4x31BAR7LWYBbp7ZjtP8RyyZXHbhQCQkZWkvphXocVrnX2qf1oopYdc2fQZ5poe4fx41qkb1Gf5N1nCf8LfaYDC9",
  "key6": "CVXGFxcHkZsy5F5VVjQCVmGP13sFkZBVEu5W7LhjTHAY2eND8X5f8zE4uP71BDxmsB432gproBuatXgmSA4Fd3W",
  "key7": "MWTL5TxmgHbF58rv14tP995YWfFquZSjgHDjJTcFDsCauseaGrHY3vHLRRFkMEEdWf6i5oeuc7WDpk3vVC5xkzH",
  "key8": "5w11bGPB61THzZQDy5DJLDSEzFKpKgZ45uQsF1NBj2NzSkrWsQop9ocz64iMcZgGr6Fz2nmmMbQzq3cqY3hmUedU",
  "key9": "4Fxh4vYzFmWEhAPpKYbFqMMQeD6cwStLkgQzL3tm4c17j8dALFM1Y4UNfnX22TH8uFsBmcjpf7T1UGbayL4VvF78",
  "key10": "51qXumS9ewByH5WQVWg96kawKDnARJWqCyDU5MuuncWRwTp5rJX6G5w1JZHwRU2pdBoUfdQU8kLSeKwUStwoc1p1",
  "key11": "zYR9a8XaTivdpLHVcpu5NqYwGSPFF5JBQqthdky7CBezz8sjxD8bLwMC3w8dz5n8fK5iCFiJTdYqHWqSHfbmHvb",
  "key12": "5cYxfA2rcXbQJRhxim5hK3LBN6q5ucvbJgpzAP9YzB8APpcV5twnaQREUBcaADujDEvyesaaB3YfTThNL6ZjQtq1",
  "key13": "4pN6twYGVH99cy2QaUeWMGgkc96HmMH8W44E13esE68xsQ1cjMQ7Wg9JgG5qWPpjz6fhtqb6QbcvvWzb5LsWAdQ3",
  "key14": "57B1peJpcTmiY5DPUi9UubDnh5hbdJb3ohewxDgTSsAqRKjMfzVntPfGamr8eRL5wZGSF8PR4sdZSuekE7oSrh9M",
  "key15": "35QzfzfyUR3xc8V4YLL6jdCEFD1sYVES9R9KyMo4He2jbceGT8QFGLHaM5ZJccrRbZW5nttinagMBydKEP7q5Cuc",
  "key16": "48R27dYmRDAovF6Tz1RY6k8jbYerDF3nCTcDUPRXx4cbAPVLp3uofqg7xTnvSNzMi6ZRXzd3Nx9NBEmEB6jCCHWy",
  "key17": "4qsQpGLgZKmb91NmnURaRyan57SfUD4ZcMvrtwe1ySu6xyApED5QCFJPacmZEWAZcxqrGqA39Gubk9VLFbyvvzv5",
  "key18": "2A5FHm3u8mju1ACYVGv7KrkZ4dAbeCF5jtM5nuojiqC22WxThYu8BSnRQfDGAbDU1e16P3PV2U7NXXZk2oV2VhfA",
  "key19": "MPkKeDM7oKDJ466PfWSwNGKqS6nwG31BA1TCKJ8362if9crkZrLmZ9sykzjK26inKHSJaQ87z557XB6FZ7Nqnud",
  "key20": "2XFq34sEUgmh3mTWzGPw7jiTgQCm91Fs18xxqkyw6G3TrpHWdcmWPaDu5oMyKzmypZdZ1xYzJB8rCpuZGy5jXLS1",
  "key21": "23DQq8AvtUeeHRsR1rjzpem3DN17rLebFBFPZpSNkn3qKXDuVq3Qf4GiA6Y2DucPCr99y821gQoG5m7r6XSBMPHB",
  "key22": "3PfKQDTygBLmKEyDJFfYgi4Wssbz2rpPuHcVoSvdNDiRyzBkxTXQbFvgMrNC4jsbBrtA1FHvH8M387Y8aEnoS5nJ",
  "key23": "3xCsohB8aH3DL2nZNNLeTPFhtW8n9kMyvfsuRjqmpUpXAHoSqZyEsqbJDVqyr4w4tAd1vGtghdCX7o4v8pziHsV5",
  "key24": "2XMsSrkjm15bBDTk9T1dEraNXVtEHT8wC9ikibM2WKGzsjHMhKPQzEELUDKsU6i55fJtWPafEmsbTT3TXntaF9dX",
  "key25": "33yW1zPFLQwaE3F4yctT3eceZeYt5vXwxom9t4v2VibBEzjVXHkom3KcSk3pcPgtVsn9DtnmNFrWyxGijJqwwHUM",
  "key26": "6uKXmyiTXbqnpTGJUTFuHs6D65g43t8Mq987UTmFtyMh5gmrrkoprwbBYp7f42u15inBP29vEMfekr72PJMu2Yg",
  "key27": "33KCudP677ja2FzzEsmCp5ArRGQowc4zjiCY45jsd7tdSdBBiMELECgBqDWpd9kN1Av8c63KRh7mSxUx2Sue6i5R",
  "key28": "2MZnx4iVQow7eh6LofCwhDW9fNLi91SQLDN7f7p3ohwwjzUJ7mtb2AqfPiMt6wrfC86BACZcFtCUaFhAfSCLgjgX",
  "key29": "5NbYinmF4TfQJUL9oDmxXdQqjbvNtqPrnpjEsHz4gYWtoP7TXiAGjAhekVSjLBtHxAXHQdZP5v2kDNHa1eGTrYYP",
  "key30": "2cdFQ4YSdhG7vbfTKgJNueKkP6RM6NTFqYNRfpaYznkuTEa1rJ17gpww99mLKGXgfLLAziGR7K1ph746DwMpuhpp",
  "key31": "66psFJKsoG9C4ijCWFZjXMEbHxLYTw8fQjinNTMU4msxc1pbSB17KKDhRQBVHuhTRmYyhcA8nnmBLXvNnY5Gzemc",
  "key32": "2LULnQwr7pzAiix3pF7p8hqtAc6RYmExPoW5WgsqfsteRDRDrejbzw4GzohQJXq8vYtxAXb2SGiKwnw9wtBoRfnR",
  "key33": "2f8XhjiY2FxDx1Jnxq8YbhNrfN1bEXeL4A5bMFx53LDNw2Zy7JzVkLw7fhUGmDzajX5vEzJvnA9LftzYhUge2ZC8",
  "key34": "3jWXEatNpeBRFvTLzaLaskxztmM6JnRq1HEUcGvs56oVnukHg2prFw7nx9gMy9RzjDuNPNswyjp26Tee7WjaHegq",
  "key35": "63autPMGSburbYfHc2x6D2W1wV3Sv4BK1T8FoGSTJhjTvVhbngf1Dfwogpu3cJy14387oJAVMHQ32ew6AtrX6Rd1",
  "key36": "4MfzbpB9arpJtiDP5jSovwvXrZ842D5G2fxUfGxmYESawbRDfpxaTWuVzxyG9hd9z4sE3RFbSXm6TVEZwpRAmsGb",
  "key37": "jWB6MAcYRdv1KzscmXUgXqveLcEdrwzBVuBUN3un3yeUZbHhcDrvbh3rr5Rsyj1hxges8STn8LjH2FvRHZqaxD5"
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
