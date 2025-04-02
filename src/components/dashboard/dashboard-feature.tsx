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
    "5s5B3ZTBnjpfLyqsgUAuqW2p9Hvvc45mVJ4GQBDQWsz6g12L45Trqwpggh49kaAaKQi3mRezKcXnKdjgFWdRzMA7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MVax8GeoEjE2ukMC3pYy1e8744Jjm9t55rSSPSGCuEik8WBHpkXFgVJKSh73ChacEXBsVqX1knvHGyKhHqSfwFe",
  "key1": "4GSMqwNnAXyfEz8wv1eHFM4WMABitGt6ZRjKMVy6exCSfSFXrCCPF7A72dzkyjpMAhMKhCWcBSbi5TkkT3pkihRd",
  "key2": "4oTRPXijbZVfMrj1n24BN8mWCZ4y7emRzKaMkMkQrNAHmm3jxcxX6P1HdDFRJcyXpuDCxbHJR9KEjBwxgBQmpUBo",
  "key3": "3YEnRRFdLov7itouPf6nS7H7ewvGJx3bTcqxMa5iLiaKvhyPZanZ7BWAyKM89LDQV3GLfSrS6dVEMQ9bcZKnxf2P",
  "key4": "cmWY8sD4zn8ki5U8dVNT8oxDGENjxgNa8oHWG94QrgUDrufyeoHgyAKKRGj4Yny3G9amucBmcgVhAbHFYUptsqj",
  "key5": "2v4hWXVipexkFN54Y4mgwnh2hRHoiC4bQAqLgBwK7i596MV9py4YQzCtcTE4jhgTCSkHRptuNz1tjk3ZfBgKDEQJ",
  "key6": "rzKFyw6bfetHBfFgvGZesNPhZwfbBBgcCS82BfMTiNQMLza7GYr7diy16XvqNwFkL9zut3Xh2uAFuJuo1psvyoK",
  "key7": "wgy8pvL6X7Yg54eGZowwwJHz8EVzosjrsjZhs7uMHdyaNuG84k7RLnXoWyzZbm3GhLeo4kpzuksq5Kjyo63vPSm",
  "key8": "3TJ95HfcfYwqxPWw9FyCs2emmPnrgzGBK97vfNQgFPbFQrCmbadUxy4yQBvuW9NVmQv77qSGLX8QYwTUuHxzBoJE",
  "key9": "5yEoXNJXYuPzoiJKt2bSJjM6BhrdTps78kFN1azFf1xkXLxRHWn5jzqRM341eDgDc8wQFhb83FVumsnjYe92UYVw",
  "key10": "2iZRhbzPHgNSu34RvetLx2sbqbLhNKR1HcXjpcLpbTdKrF9i8HwH4u9Bg3AhpnWwXUC7jer3JTsAhk4NT7H8DU3N",
  "key11": "2DaoZidS57AME9krAbNMFff7r78XSXazQYNYEXqu5PMTvG8DCtJGfhL1LTR3DYLrZvrbmXoUZ2H5ihXB8urnhMAV",
  "key12": "yj3KpVR23Z7fa3e2sqJWQRKG3gC8jYjK7GNz31WTfPmBjCX2NAF1CQ9iY8ykcyTzVh1sTh6J6VY9dreVACXUNgK",
  "key13": "5N5usjTUF1vbq1UtXavuVtp6vKubCUZCPn8ywzWXqw5XsVaK1k2FjbTzf7z7LtZePaho9jRmcaDGWSq1MkSxtTon",
  "key14": "TQkijtiDvv9Q2Z2WvY6GK29SxMhBr1n7Mux7jUR34XpUkvziyL4wtaLWLBGBgyxQCcTfkASPBz2yAUfkXe3mJVs",
  "key15": "4HTptCGkUvW8s7YPkUPGzMh92qGe2RnTaueutPyvpdf58vDKmbPXmG1CBdbv71a24AL8twNeRMkjZuPwqZj7rdDL",
  "key16": "2T8APQBEbeibPYdUYo2LBb5c1fCyYK54AindjiKGfxHavFKACJ43yZByfnWWMQ7tB5PRUNozoe863TDDM1PNbubA",
  "key17": "46Ypchm5EHmJMy2fzeoPgUFp8wDrtNwTTjKgPFZUZLRjLVLxGsWM15m2nPN848ybF2u1G9xQ113ukt6M4atb8nf1",
  "key18": "7inHC1t21wAYixeeZYbiTqjpudMhrFYoyjaTuxH5LANAKsRwA1D9pSLSttNbo5vNjpcnt7basBt1goEEraYjZ72",
  "key19": "qqQNpV3Cb4AQJjvinVE9A7TFyTyVZxH8vD4zG7vmMayWc9tcqbiUVbA875sr7Ufpq12tUDaxH4SLfWF5PEGYsnu",
  "key20": "5UMG6z9Vgc7GD9MsWuTmqRrg78CCVtBA7ysgfG8ezBAE8SSfvXAAwvJYexcdAKW71hDS5hXDpgw2aRzDwndnbz7D",
  "key21": "gWGYU5HsCnQMygNEWjyJ7AX7HVUjb6vn5L9eBLfPQPoTZsNELWcp6quk5RZmztkAHz2yY6DPWDfboi62HoVX3cy",
  "key22": "X3mth4t4rvKBgnd2scbuXpTQToy59GerQiLkTKjzjkSDJxv92isBbxXaB7CnaUgUyuth6SZU5S7u8PUKUDEzZtU",
  "key23": "5Di2eG6QWF4Y8pbuRRWYrzQNwzSPk7sCCEPgLZKXgCFXaeBQctj8M4j69kX2yH91qeKWy1HVChDAC3vvu5RDUGR",
  "key24": "3vThPFYtdbnWETugbT8U2Ydao5zHzTWNrknDeJRQL7F7FMUeT1sZ7rWMxmHmYaJh2idEr5fvQEWVBwR1giq2tiJW",
  "key25": "4zDa2x7WoLtvfzFHvX7ePGYDaLXBZGSrRZjHpDs9HXuKa3R7vREJbVYWPUWqph4jgKNou6nnoA41cvqA6QWVXmmx",
  "key26": "46z9FTgCy9rkChMRAQerhehXSMvpnQ7xLLWirMHCPT8HT6nogZugcLoViXocWoQ9yvyvekxHmgygPFMh3c4KD72z",
  "key27": "aMLBw8XPyRCN4CRurfDZoyg2PA88C4e5jJ1tcaQFgV27Nbj7WbmVu74Hcw4AmnPTALFN2N4ZMtxri2VUZRQZtXc",
  "key28": "4uzANf3esHT1DdzExxJz4Xoh5T55jX52uS8wfQ4RaAitjSraHQd2xBzBQghw3rWdNDD1ScjHi9ddUrQmwmtRC9hp",
  "key29": "21X67zM1s3pWj4CxYYbnJ8zMwyKZDfh1HRonGdzmZADbtnPjgf5ZaZ4j6hyBpa5ubBcE8WPX5EuvPn8amSAPYhdt",
  "key30": "2BXSZh3hnGbGfSsr4gr9CUGkswKHPkdfz39vHCWVJC4dLQjgmDrMeCcS3FVEWDZqg2142fhAK36UUtdZwVq7sJEC",
  "key31": "2tTRTtLCapaDT52rUwiYmXq5fUM1oAynjFgqsos4oXeTzAmiTdhVc3i4oES1AYoNCw3DvUQ4DEAtB2xzQGJDyPb4",
  "key32": "c8aGsA9FcZojs3DBJR3YP5anhbtVnpdZHGzSJRFVFjQrp154sZSC1NzW9fJq8ngHcomdpTGp8yWmg4W88tdPw8B",
  "key33": "2RhwWefuDFU7NypdAixcV4FVeRGBZgahLAzJ9sgexzuYmGMeRTKubfM2X7KG1sAKVcRAroJd1R7DjwjVqRN2RLEL",
  "key34": "aBdaWS1ABGQM1MwFbDVsotYhmNFDBixnHL2i6u5Du8X68U4CHeD1ZCyqZFJwnz3t7DyU3EdpKJGXKreTPxgYERT",
  "key35": "34xCbkWdwmcbuVyrD1p1mo8xyivKYq1G2msKD4dt3iLAnhvwR2irtsn2NVMe9xbKgUr7XcB78q76K8SHcgbVBHDL",
  "key36": "4Yu7eCaVzvaPRutX9N2RZoazEkvLuvmLjNsq4A2LDXV5kJfXZFV3PxcVnX8uGKvGbCfuUzV1CGdmodekfkng3AGb"
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
