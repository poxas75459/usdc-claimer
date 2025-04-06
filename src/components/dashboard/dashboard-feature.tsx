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
    "61bU5AEY3yw1D7rRvvQ1HJW94DvwHYnN4jpLFMvNzhSVKrx3Yp69T3P6yv8RqhoWE4cJnFDPAFuss25wKykcAwJ8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tY4XqyCyTVhWVbNojbH8pgfWXHneBnjEtkYSzMiYThmfKnHoZCtHm6HoFzb7pYiL1AABGz31rmX1Cq9fVy3NtxL",
  "key1": "3AtacLScTtaVz3hzF5pQwuvRgNgT9pceoDZF86GUfbVEMZnkn2atroRtLrHUB7AWMz1fkbiwk5wFVgNfGDAXEa3w",
  "key2": "3Uac7aJ8cvTfA4ArYQnTAYLrBorgRDnPWUjxrJmJgMVJGsQZ6v8dEtyhpyub433GUraGKs7Fxgb8f3qGGbjP8sEG",
  "key3": "5aFvHHwVEe8CRep5dDeDumyGL9ZieLcS6UMFgsMmQB7g5rGCkdMTpdAR4t7pHd1dwLcvHjHXRS1pFJ4LnKyoagki",
  "key4": "31eHxMWXjsvoDV7EfVFnWNzud4VHNjEunHJovWcEYbqVq18DHy5oFcJk4FLTNBGfe99B7Kfd9SQ7SjMYmAGWNiuT",
  "key5": "2rnPLP8jMJFm1GepLaHWH8vTSXw31L5VX7bTJApNBVroccHRuPt5CURVec1KaGhxRs2t7Lq6NAyNPJEcjpRBUqVW",
  "key6": "5NxntEXXgMjfM9dZmDGYVoy1vLNCYPZxUcAvMiZnXn2GHiBAruHVB9C4v9NZ3itXNvif7AUJxJa9w8DHvnguzmos",
  "key7": "3XprSX3Prcqcw1J2qrHvJatsAtLUjnpwzsMVos2FbcKjaTcGKLnjJ94Rg9r6nxyp9G7yZyJsX8b3ktC3CgavCo9z",
  "key8": "5szrHK24FW92BBqx6UNqQZMGV69fkTmL4xuuh7d2uBsrAmHXE7KR6ja7cDzV2cEfRWTV8FnLG8UpCph5m9JPqdSh",
  "key9": "BN4KzX7VWt43xGPEGdWUMDoKBWGQE5EpsH1hAwKRA9m24uz8VfnKyUdz6Cj2mVicCdbPWM3zsjF4K85hmey1gUs",
  "key10": "UPueLHu4Lmf9TayyzHY7ubWhsAoSnP3NTxmMUbsymYsDbzAxRMPZ5Yf3TRDbcfCDMBYorgJFww5iBZimJVtTdNV",
  "key11": "5Gs1oAjuPej8khZvFWun38vyjK5rqSZdSzKuao1vUJWh9aeveSq628J7YwnU2QphVhCJWoog83cgw3pkihuD7pFW",
  "key12": "21Z3PYzzVpc3TSzQXLzXwFGL8MiDZzJHFEZsricHdVSWngDccAqTb9KgCQ99JJoLes7iXdYc9Bb5qMg7xMp9dbnn",
  "key13": "56DNBLAnGx4WGLWRfg3a9xk1icejCoM6e7oC38ixZBHeaJPMZdbCi2dpnHUPy4dV7Sjsi4bPdRotemVAp835LR2L",
  "key14": "2ZxPgo12gL8TJafo3Gm7skhbk5f5WDsu8PjaoCm38uwgjMjdSRK8G7ii1S9otqtzUuHKCoLTTd9yFSowdEDNrDii",
  "key15": "VgJ32fnDHvq6hFYPimG7isVpJMm6euf9qfJUTAcTm3KnLbGFpyXBYHtSjudEgKi6U71AiekzEFAQFKHwF8hd8Sc",
  "key16": "2PKqr637a9QVSnQ4Du3NCsJ8QRQurpm9vwMUjM3xb9DPtKSKFadoBKZDFrYxQex4y5xfG4DUYXb7ZfNTBkaQkCNF",
  "key17": "5R3KA42X4WjhHSHZ2m4S7wF84nS6vT8wTB6uxSNmAkrVgDZb8fF5gqDrFuvrhrqjrP864P4TLEYdjw4TqamjkXnw",
  "key18": "L9PA8ixUpFifZUpsvtRvu7NJ2eTNNLCowiQMTxom6on9NDxqcJrNLZwCDnZ55qNRpzgv5RPndYpqjpyPVfpzJd7",
  "key19": "5UqhhVB1oMpYQUE9f8JGegJoNfaCdpKJNSE6x1sHuSdupDuMhzcgN4FpKTrQEDVB4gxoDxpthPsiLabPnzzpsKJD",
  "key20": "8tnHnAYQ2FmyjHzQtebckVZBMUFVQ5zWaWn5D3M8HhU6BREjLfzxYzv9Vw87D9PAff5NJEKDkEHcExLkymZk6B4",
  "key21": "4wrhvVUpSTTtG3ZQ6oLyL7Z7qjL2LC4WtZY1JFr5CCmyhN3KjvcqyK1gxCsDJdpraAzFbTNvC5tUKCfbP4ZErUwq",
  "key22": "4X1SpmxX7suVGUrmhn95rxVcpFLDrqPNrTh7E5iG7a268XbqETuvo2q6c8yZpPf44yFmxiqMt4ccLN7Dmry6ZeuN",
  "key23": "2QJ9jUHx9V1Kp6Mmbd7SwfTY8dJ4dujgXEDrq1k4ajRFzckAb2Mr558KxjbN89UdcZr4jtPGyzVYN521QigM1Htj",
  "key24": "45xgzmR3KUh1jrZBX6ZxCTKyAT8DBdSTgsuR9QQA1JJXWNYcysAudeR81Eed1ip2tLfUEXFC2DaB4bqXjTxj91Cp",
  "key25": "4VKpNkW1qApvZYFm4gUjhtKLiJLPK28Ducy7gGWrM3KARXr2jsRd9zGTtKfGAKF9cos44Db94ZxxDkRS8rL7Vo7U",
  "key26": "4XDD63JgimQbsqPJzZ8uXUP5UzoEK2ZwXSx4MAThTzxuHqoyu54PCesYiokXS2DB72kqK8oGSDsyxxKUnrbAiFnA",
  "key27": "3d691XYi5FyhfomNr1b9XHmMDvZqmfwbbRs24JbG7b9PJQvyvBVY537qV3GPSesQjfoFBucGw9yDTF4kB788VYjU",
  "key28": "57ZukUypDfScDjFhgtAfDg3uDQAACJ5HUhHzmt2pDXbFMguZpA6R4uTvoTRftzotw47vDvBDq8xaaLVmXXVPkuYb",
  "key29": "61y6a6Xx3WfGsNkQaARq6v6cA9yvWVth8Euqdnt5JPf66tp865APiSo2R3jpKgoSE9YHXUaCRnbh4YYjxwebYawp",
  "key30": "48cuoKq5bKydAohQ2BbpSdxBfopn5zGZGG9cZeyvxZSYLx9Tsz93y1Vii9fVw3PAWgdDEKqJ5WQRtGt5PcvFHcBf",
  "key31": "2zxj94QiTP27BcpjksCmZkHh8pZECZUpvExpQftPgQ9VwhZvekjn2zhYQ7fi6g6yYixgYDVgw6CQfEn5Pb13ggrq"
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
