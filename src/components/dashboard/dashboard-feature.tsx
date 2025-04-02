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
    "WNDVaBoShprq4BvAdLKyBD4xr6HaGuePGPYQaYhCzBTpHBth1wKuCU3c9BjQDDSozWLwEAEY83cK3dHEnKZJobH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JvV4sZVNvEetP1Jq5FRfZ6CvennYm8mBQd9Q4wBhs4VXd3wEgXfuCprNjtHVhMkyzko68JazEsNrn668Zwv5qvS",
  "key1": "2e3EormdvXv7bKFg8v6xU7jWcKw75JSvFCqqQ5y1GHemxm7ZFxoaaAf3LPs9MkBML9A7ATN44Kq7woVyM3zqHfYq",
  "key2": "342xuLR1fv7PxLpuWo4V4Gbjy6xH9uHbzqZVPGBZ2kwshEHtqC8WfmxmmMK37oWBnFRVFTWwUkiH7sSoCTicgFwA",
  "key3": "2xKcSWS7AUziN5YrRkC5UvBKo7nGqMyj8ANDeXAktdxh3oDkPfM4p89YLVsTz1KBrv1dMvvVGjub53xjWpbBVCZ",
  "key4": "6rAXYxMK3kZ2Snzx9JighdopG1ctvig6Xkeh4ZNZofD5KRHo1nw1pX2Ebx4W9L2ZUDVNjMjJXMhpwbAehtB5g88",
  "key5": "34VxRpJSDC1nLLUiS7GFH5WT1AimEYwbdzkbGZtcZBMsRYHYWH1DWY9PhzLZbsCimG2g8nEc4Rs85T2hb8LwAm7m",
  "key6": "Lc43ATxKZMHvcAjmEJPXcE9hH2Vgh1LPxfai39tMaeujY81oUd6E4pGPHCoZmWDamSq3vphLTrhNTXNUftHQrFk",
  "key7": "4zyXtbXfkTU6jYT2Kkw8ET5EhDPwPLV1wvYFEDzM7LFKTHaSoGzTTcWrG1RkTsKnYNfXi6SUUud9XmFYTCPh3XUF",
  "key8": "28hvYWd9zdeTqB7bAfgd5AQmny7pf8q7CnVSepZoS8XjeAbu1LbJBqagQb4cdhDWwAhyBjTd6ZsquUsctLnaC3Mz",
  "key9": "FbDAdL15CaKw9uBEK3QKX1by1yuejnwHzb7ZKvmEHv6mXT5AUM1TyMwcy8KWeYx7Va5cgkM6MoooQL5McUCjErR",
  "key10": "46xCzfb3QKscbX9txkvWijEjMnfCNQ6j7kTNVf3kXQKhUjP1DUeqcprKZJVK4itXtxyxJFJkAfMDsJ44a6yjXNCp",
  "key11": "3q1XXFQg1ic2qZ5XHsUebwemU9mKnKaBatk6pmE1d6hG3xh6pViiuBna78A6v4sSpFKW2LTrRCEtMvjhMNo1wuNZ",
  "key12": "4h3suPfQtGDVYpqNNe25sBA7d5znYpXERwXmmWqTeAsDY8uhPdsUGAtHCXAmq5c6Lq81PFTRLHJTZLpGVpfycAqQ",
  "key13": "2sy3YYW5ShfY7SevmWFzyVBzx7svKxKEo1Zbnx9HWUEDQ2M1B12TNAsgyqedvELXiWYZCE7zCj4iT35SUgmJv7M7",
  "key14": "5GzQCUX6J9ctVx2JDBxiumcnuCvBBGKeLjyptRfErJicWnEyrikPhqKQtwtfwuat9vWvZ819figDudYrgz4QcuiE",
  "key15": "4WYuZBRmmG9YprHu4HWX1yU8P6KpYhGdVK6i4qejBNmVo3VP7s7eHJNCrgQZfEbwtzgrmMSFbhwEbDUoZCnfHWoL",
  "key16": "5d4LFxLQhTHP7XgyGchDTGEP6nMfB314ySaBXNndHcGiAXYWzFUMoxnnTFBxg9Wn12WVdz7QuLVXqpH6eBmLx2nE",
  "key17": "BARM79trEg2ccHp7UrcVUEynmELNTgtxYzg7Rk8Hr8DdVNe3NUbdAEJrenvRgaBfgtqaufUFEZTeNxAkK8up11s",
  "key18": "2YHqpUG1dKDsYzA8pb6tpcpsBc8Krzv589K2LXowyKAUs6wnLhrbf1hkZAV3x7mfbS7dQK94SkqfbdNqioFuQKCx",
  "key19": "2w5wA5AsW7j7MGmPoUWyFPi3vgTZtZPDtBpg7bgKVUGGYMSbEWKsrqjrVjo1LEfSu7QAePkk38UxnGm8UzzRbzsJ",
  "key20": "3JL1VcgCf8YUL2giPKFFJLmHDoRGPteEnzRrKMxuXan2KzhSc6TWvNqWekTBK8v5XUquckHW5eZVjj9KMaE5ji2N",
  "key21": "dvQrULf5Dgr9iRjAZWWi2u2h4GmDWFVVWLFUd5PJAuwsshqbFRpwUWqhnGaD1B31DeFww1uaUva9vxWZgCPWYUU",
  "key22": "5cd6w918WiHyYNK5KPXPkBcpErehLp69Z1nVMaHBxir1Q5pxpVK1bA9ij2cvjognHz6dovgA21QAkeSTp1qqxscf",
  "key23": "3MEDaLH2RA5e99vyfN5zU6TVfzJYnsqPbAQ3k5GLK9vawHrv3BwJUf91wcPW8JZ2Ppt9vbP3iriPuMPyAApqFoTv",
  "key24": "3RnLXMD5gvkDJbzTCNmuPpRiyAonzey8X2vxLn2EUvQEF7w7Kd4RUzfk5EtjS3QH9P58VkgFqJNC9xDi9uB2iiSZ",
  "key25": "NdiatcaV1AMkHroNUqkCPZFLXQd3W8MyNWVFfWu2DBrpUy34Fsab9emKZiJfME7ZdcmsKvt4ZdQ6zJpnRz9uK6v",
  "key26": "4R6kDSnnRorrd2o6PCG4DwGVc3GJ98Km3jsb7ABU5tto3NLm35ifBffhwgQTaYRgwN8CgFxb4f1sBXdnRCepTvbg",
  "key27": "3FMQNimUg1ot8KDrLc785GE3dwz4M98EQettfPfG4vjBNnPvWrmwe1UC8HTKHkGKR2UBf3raqrkRWhWdB5JAtcHX",
  "key28": "3mQB7KtEFz9L27TdhKuhaRM7poxM9yMEjFe22xcF9ew4AwcS3XYiQBi8fwMpxYuTpd4zhGJJwpCmMqrSyaa2xTi1",
  "key29": "3UJ1poA7edm6MEhA2bccw4fxGsqEmah1n5uN1mDeckM3TMbXJd1GtgvYXfBXwkoqnofckMEna1y3ozuwd7Dta97Z",
  "key30": "43AEGtHcDphKAd7pn42SyFznuQ86tau2dDP8CiMNYGPP6GbpzygoJBNiyW9Brc76neXTxDaeqYvPm3pr8d9ATAc1",
  "key31": "uv6fuzcK5Uc4C7ZiejJ8VQUHbmtBCkKrkLBjcLobm6etu3gQry6juJf2aPMrTh1q7U1KYa3SqZSfJcyDA3CY1Vm",
  "key32": "24KiMy15LQL92NPmHarn5623YcHfsriF3zDeAAyaHdRwCdGwsecZTTkaWydriCFp7hycXhPGu2HEsc7sz8KqJePs",
  "key33": "46x19Cyp1NELsnvVpu8nRXBKzWTvH85hwgfWPh1rSsS3m2Bu781df7xqNj24Ef2vrzvnYHC5NZzc65rDVB1yK5KF",
  "key34": "2YFAQzky1GkJVTQY2nBsEBWgwGAdTossCoMeYG6bTvA7wJiSAjTYz3d2JqHabKgnaZp4GZLJX65EWZoQ9xq4zhN9",
  "key35": "429fHHMpzcNvoWzKjWe1mgJCTS4R2r6rjtZahMu2psyxTofVXpQo3rk649UTkxaLDLYq1JLdW9kH1q6xP3HiLvia",
  "key36": "4CZ1T7u9hrDRpM9awYwjR7w9niNzk4ycJcGhaJAYRVJx5ohrVu3G68ypojghZ9xyA76W6Q2gNBTxsxHMmF7ipq31",
  "key37": "2576TRZbwtgYGV3earq5kmUC2ZGcMrtd5qAw5rnowQXQhuxv7jLcZrUAWgw4Cr7PpDNSbpLVMuGEb6xF1gekMgq7",
  "key38": "281e2HPnMVw2CpqdjT78otrkR1D73om5Y7mt1f1ESd6qmzdXorKtz4Hv8NjNDmvipnu38CNLJDHzh99UENWxXoE9",
  "key39": "4DqFCsqrDR1NF3adchdQhYCHSbka3CZQWwjPVmZnvnbxh7G616NYDwavWz31DisfoHsD6qncF4eYQ7jvJJ4ne6ea",
  "key40": "bB6rAiRnMznBrvKdiSXkL7t8dHXB8mKxZuf6tPZCPUToqFPJp63DjCvnWJLSp2zc2A4XXssbUvWJzb6xEYcHpHX",
  "key41": "5pNDKCTCEz1WZAgEpNwmu9Z5mM66D4oGmvMvbCVAyn4AukvPGFZBisnS9v8Bbm1NDNDLvZd98s1BXca2xcBK4UPn",
  "key42": "5WfMWEqRusVj8FFJ61VeAUcNwy5zWBfPvvGwQQ4FETRUVGinbKtYZ47N641vukjhEo3Dy6M4Epivv1BaEnQABzfy",
  "key43": "fXvyejmVhzJ5ADz8JCYsMfHfMYsJSjR2sGuow1Q9pSQQBrbE3ybhErqXsbFTH3oYrx8JRAhFoLLh6zC5MTaJhGg"
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
