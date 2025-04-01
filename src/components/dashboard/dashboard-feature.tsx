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
    "61TLgvP8qu2fgfpLEonYD1huYtoasvcN45pP2e9oLm4su4jNjfEzoAmM9w6aoTtwnMDR4Qu8vJrDqCDMTfN25uMH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "388tg3TidLcG76i4U2jJsVkmeznfFagT8ZgZYwXhHWzFE3MqPE8iG2wZjN5o48w2HKfU8K6vkFXkVyCpZ88HVnb",
  "key1": "5JbPZwxFUM3hFDC1Wo5MxXue7azKRHkgpLCnuEXM8kmyw4uetaY6j6xXRDQwzBeKsfFB6yRYKvod6QEa4ar57PZv",
  "key2": "3oorzRBvfe3UBBxGwaFuxCQBBedycuRMuscxMecVhAdGynZBbL8VsrMM2YzhTXTuoHBwQnQDu4FbvpVXx1SChafu",
  "key3": "3gEEGEUh4mSEuWaNA1ybZZrUxxTJrJwAwiy1GCsPoAMQbd3EapdnEQgEGw2LSS65S2EA61udeqx8nfNVzcvKaj8e",
  "key4": "24Cg2FdB1vWXt78jjA4fAJrLJrhK13pS1gpQXdtMtveHyGAe1Zj4fUbLMvQUt5AuiLbJHwBQnEdhAp7kqMf3v7RX",
  "key5": "4z2G3bQ1yCQJ231ajMaPXDBJyRBy2eMyTcQAeEiE5eAqg8T241dyRfwDg9wxEyEbwbrKGYArvUq4w2cR5jTAVP83",
  "key6": "2tFztHeLe5UKjne2KWSUuiRdiVrgfZjRaoEcdpc5JaxyMpqMZx1JkYx8cXsACy2TSonXpEkU2uxW1nenUHXWwFt5",
  "key7": "4SxdYUTroo5UrihW38cyDA1NEugUYMpk43CxynWenvEy9MbL8AYcZVLg4dFYfGCB5hQW5y48wWJEtuNkuMVRCdfT",
  "key8": "5P4QTHtvdX5eG6yz3HaG9qiLoc7unnJwctydvDK4H2oY2PSUmoeR5NHRdeMX4u4eERPRm2e4BXPgfrsfNrEqejZo",
  "key9": "318Dmp1fvkdHRQeNePTJi8JvArLAbqZYp8Tf34ZELVMSFHMvn4vycttZUjHsNoq2dh2tbUYFvGfimUD2QxAw6FCZ",
  "key10": "5T4CQrmmGpzwG2q6agaDHFPdTFhPasMKjZ7SAuZFqbC57tXfZwRLY8yZ33aJvT6Zr8CJiYKedhkuwW9C1m3EuFsu",
  "key11": "UAaTp3YtbCbq5FD41itGe5pS4EVphoUKPrz88g7KRAgqrMkrXFbw9mbtKs7BydHgYFTJxMttdzMokscj4zqE6yb",
  "key12": "27fJBr8RaPVU3ZneQZyr5NsdfGDk33MdcnyGw5Psbjc34eeydFcbKuwWaegpUC73dLafhBmNuegs2FEmaVWq1GvJ",
  "key13": "5AhnqVftBk5WyRGpK8wamajPY4tfrQ1NdFn5AKLHwN8Mtftbh9fCuvHZYya69WRYG7JHZGDhv8zX5s2u3nqCLuCT",
  "key14": "2N3mSTNCMEVQ3jGHD7mALG35Q335CYfS4V4cpjtCVwmbnNXozfFNRs2GkmRAkJYnbTTUeFoy3LG8dmsZUqgoPQPa",
  "key15": "3enz5zcEwXJ9myn9Y69qD3bU6gfarDF4e4A8mfsNZcMesJ4aBsCqa2hwbv5TAexXfJH5YvxavoyKLasJeAE6yU11",
  "key16": "4GRS9SF35Mb6vMbdPUvv9xWszibHFWw7hBD2sqJ52Zh7kMZAmtRGKhkRTuWcqeNaQrR1wwbz79Sx2xzWPepYRv8U",
  "key17": "462iBEBHwprNpcdPdMuH4BxMB3QzjCtv5Ce6gAdLdc1srqM9nLcXVy8MKcEBCiTMKp7RTNFeXy59bkGUSq6wwJAx",
  "key18": "3g4QCFEa5ctMMi6sbViLXFstUrpiT5ubckYp62Ya9QxGqxBfM3Qz24ijoY8LRizDJMJKY269vMk5KcZ9U2GgrDTM",
  "key19": "54WFWQxqA5JN3tUd9aQDtCxG3yiUveV4LGqCFVusPAvj9FgxxoMah8JjGziqGiW4MxXpdfwH1ExU4JuFTkZ74qQu",
  "key20": "bjVqPUUbUwhu8DHo9bvRnpdV2Bxf4VtFkSAVwCB8ypfu98EHs9r2XkwKyiokSzD4UCNFwbafRW3ZB4Wk3tmWSKe",
  "key21": "7dRAkeMKfyjZr9wgAiZ43p7HFyZxMoHCyq68PyMim5RUWTV3JFNLB6t62jesh32YtTujimT7bDsaNH15VLbyj9A",
  "key22": "2M5VDEuWpp7cJURzmEbGrYd5Rc7bFrUywdcY38QHtQx5SnKfcGSoWxfij2F7GeuDgFtoxRhSvnixR2PGzZpgExtN",
  "key23": "WAVQJAf7w13SMWsVhzZiP5HavaQ97fb4pZ1CGh1wzEPFAqp2oT3fLCRTT1KLReNwqKrg2ufncyjE21kdxocRXkr",
  "key24": "4gDsf4CJMme1mNyBsQmHaPehTMMFnDY1M1xutcz6nVGpaNgRyP2aPPaepS8HzkTr5qCZzsdqFkfEnCKQuW5qiX2W",
  "key25": "2m9ch9tP9vNyAvqLkQx5SV6gQf5y3rALGJrt5nFi8DEBhDpYihBB5xym68KLEPua1kKC4rNjpgLDtMpV9Ui5p43Q",
  "key26": "2sgDQMXaDEZmqGsQxk6kgAnZXegNhWPiPh78HUbAqPjrBKoPmdD3F9N2Viq9fnvBHoLfrF7ndAuAr498jPJEPkP9",
  "key27": "3msv5NmP6orB1yWGj9edfkcDCRADj63paNrW8kCL68pLP6jGdENQnVEejKyDvJonbtbgZWmXVCFGPz1BFYTKyQRV",
  "key28": "hbGEfBmghy2utChFVXUpc312aDJQYKjXAVr1SCXmcaM7MB5CVjSxgti5t8115CL4rmxafLSWKYsQBdsZCLKyvcU",
  "key29": "2DccgXy8xBnZCXgrohbQgmUS5vyruUEyXwN27FG9DDzGQFRJZgtqtQxqJKexUYCr2Jvwbv3qgXjUDZsZbtD9ow2K",
  "key30": "67NW4fo7Gygfu4ZmGAeMMo4WyKGPrqow1mp9k9TpWbDt9GdgQ6w3v2AuBiFmESk6QnEJ718apYDiVGGJLvwuZYnH",
  "key31": "3iJQ2UTBWXaeT6vY5byw3Hy2h4GcEcxyJiZScznyvdiTWBREZKvfb4Dqp866agBqDgUufUXcoxKz5XhKXvewC9ge",
  "key32": "B4i6n8yCkwTTrP1sEPbGpYMRig16whcdBYAChimdzFxwP84Y2MWuJxDep7ScUEtncE24nz9oKruELhTLJH7Xwmt"
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
