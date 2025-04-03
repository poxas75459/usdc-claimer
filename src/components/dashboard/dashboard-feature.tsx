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
    "5ea6rzzRBvKNMTefL7rjCi2KrMD4dYfpSgWyJCZ5VdFAReCvWgRwkEqQqyXM38PgbQgiRWLzeyWLV61uKmvj3dfa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sh4f9BKuyS9a9K1Cochn1WhXYPRmCXAn9ZcENyivmv3jqbR5635W8ruTGzxmyFhYvjLuwxSBm1sNmw5HmgtYLCM",
  "key1": "2bhpwAq7CioMHCgAz4kxxygmS8tgmpeUff1qixWEZgZVYnDPWxFiPBVxomvHxGo6HNPr8aGfZVE4sTtrH3bCosd7",
  "key2": "31x4CqtmpPLJWS2ZcEGk7J6XF4pkhrd4riVFkakYm1TW85j4V9xb67sZW1yySfU7Xv49NeoGM1i55n1939PWQzXP",
  "key3": "Kth5vsBvwGiRPUVmLXwnWuhZ4zJiWiPYu2kZ8tFco2MtSuZLPKktkqMJBrmTzPYb2PHwBCyXxcozvxLBGNWQBZg",
  "key4": "2oyjMSigFWxLXFah4MY2LRDZfkEGaFcWfUwVGCerGyaP2rcxaB6KLej6xJu8JUFHsj7sboLLXiXTcKm68MqZoZRB",
  "key5": "3Li8oWf6xszNNeL1KPPcCAfihH73PmKnGEJ9fDnTBkC5GvRQjzZv4MLAms4x5yhP6nA5xBP9yXMQtsUm6T6b3mZy",
  "key6": "4H37DwPzZ9eyEa2pD5fcEuTH2K8UZwc8AjTZQ76beEAKbFFhxPWQpLgFmv9q4vYwQsegXrBRoUQdQQvgtGy8txeP",
  "key7": "5m9FSsMUMUNh24E6R9im5yVUSu2HkmUfyVn6fTPJrzZedF23fS4kTL9Brk79CX7zKHndnN5HxADGSkUCWaorCU58",
  "key8": "3zPC47vHk5fuXesmS4rGEEDEZ5fkLAv6p6Dmph1HJTHiKW9zC2H41Upv7HJ3188YWwXbr2Uw3cvyhecgedjMWDho",
  "key9": "Ddpar8VjM9Ko6EYpb2eB3yYHqUS9Jn6jBv9bVzeKm7B7TdqRe3xMvV1H4v63s3yhBpNXh6qzdDHbGmXKYnXzZS5",
  "key10": "2E17uEJharHXBSkKyjMKj33LmRcbhxvjygPa5sMjpoCMg3zy9RnvwTu8EfzDkEPuBgNweBMAjgygF7BoMxbrJDVN",
  "key11": "595EP5y5GrFSXMxyAq5QWEBipoJEwoFZtsc17xBpxs7vFAjqFd753czL73yhFQby1vDdN4Ma2iGD9FV2bSbD2Pqb",
  "key12": "NmJVPd7qh9vGCiivx97E13c7QCLFg7AJGeM895JF5VcJAcHrH9CQPByhH4dvxST9gwkQziD68UCoEeb7J9yLBfn",
  "key13": "3qgVRunjyUjP1YdvkX4gyAuAWA3CVNFNXjED2ZsZVdt5QEhDYeZssfPdUrPutguPF5Eq98ZnSXy2dbD9kKs8suqi",
  "key14": "44k6HswEPUkXhJDeB7UjfpskCoS8emkwmbCFfN69ffY9BeFgWrB3Udw72XVmxaFqyN5tKNfK1skARKpNge2dx6F7",
  "key15": "394487dmvP6vDsSwEc77d6aHxH3sfaaDU2rN6hjkHykghQRwRUt7W3yL5gCqnmGf9RSwUdxmr6F45HmNsiXfRYgu",
  "key16": "4P8mniUxpUg6tQk8szq1pJmbuHBJhgM3fWroGsfJDCuyaQktM3vXaanubzmieGPZdMTWWssZw9tDUZsnT7TtRrBw",
  "key17": "3reUv7P8nKozL9NGQAgCMA26FprkvKfR2aopuNRq1dmXzxNDMJHqhPJNK3sqwxQ89H9Y3tE4cPuD1ccznhGcLzzY",
  "key18": "4mfRmJQhUbFgKRw6WLT3Z2BuPazg6yxwyLMV5RUrjbpLoBsGB4huBLSYDUmDwHD3fBm4aXxXTtM6wiYaBZEcV1nZ",
  "key19": "36qtZCNLjobhqxbP3612wBrFXPsyvnsiHY5SebpTSeLhm2G5wFDG8tKHFrfFHpCJZpSLq1dwusM946qWJGFxUHhK",
  "key20": "iyeRBMxThNSCWWGDKdcPXAAmeW44UT45xQ8yFCqAed7qEenRWWhafzDs23rhauBgF9ArZu41maxNNLT72ph551H",
  "key21": "5bdMEEtDzW1LmWPNcf6Yfwd53pfTpV8Uy916fSUEcDGJEq5SJpJLcGfuWb83XsNEXQ3uDHaJf9jPFdsTP8rMrsP4",
  "key22": "MNyfFR9ypBYqSJG5juhTZTUkVxTRjrWuDhbYkCPD6NtQ17qNnuFy1TVXTeJmYD1cJiZn3jGbuqmKXsBBorqCPJD",
  "key23": "2RoPz7xA4YHNLi6mGaHc8CQtL2XC4ujtseeHoehJbr19Sep7ofQk2xoTw2aiCdy6bf6h6LpzgVMeHRCY1jhz6t8A",
  "key24": "3c41acp2uksRZBcbszCg8sVv4Foxpks2ZwRqdz8gzFCD3KHr8xXoUoEh1f4evYHzDANDRPCvjTST2ZepK2fks6eG",
  "key25": "bovnHsi65mnnXBugY92iqnadTrj5eZdTC4Niabt8uYHhj27DneSfUAu6Ww3nA8qCsHL3Rsvqx6WnomdQYPqJtcy",
  "key26": "yAKU5vyc6X1DoGoYBmNVQFdmXyvckfCY19xCn47ytRbZ7RiJLJdrL3YucQ1C6X7oXWuMUX3mWsom2BT53FdzBng",
  "key27": "4n6r4oTiKQATuL6Ku11j4b5mfHEneesTx32cVtk7dov2R2zCgfucoqg4yexk2kn97crE1m7suyPm9mfdX6wRXtVh",
  "key28": "3CkfBPEXu6cba1MQyY8LWm5QQ1QGMVSSczvLVtRHopqNSLEcHx4zy7N75Ba4n8dpSuam8ktq1CPipBFTAqKHHQrw",
  "key29": "3ZbBX3pbp2yJF5Uae8Sps8Qf2Gq43miuLhiKKx9uMvDdtZLAPgBesCXUCyCBrgVzhHgjRDrShnF6pXaWkSti5rGr",
  "key30": "3YejoYy3m5Jr1XtH1V1czA6puLLdVcDCj9nH4UBUNRXQMFQh4pqMV41uJQwyUqLDZbqtpvtZBJ1XzDAP82vdEh9S",
  "key31": "GgRUokPatk8YHgqPWky816iLt5sLxrfwYuzLP1CWj9wuZ2grRWR3H7AbxA6QhVJn8B1zuGCsPfjkYYEJk7drbMi",
  "key32": "2sPwE2rsDMtga82Ybq2AWiQTgNcZH33qrwvWYZRja6qeSmdds8MfVNaUgdq7aGUYyo9rf66vUJBjLFdDwxB1tuhe",
  "key33": "5uxvb3P18g1WHT2myu5qxUDcxCVsH4P3ugY8Hj72wjkMdn8FXxKhhe1T1jtgFh2cuTxawL1Gsac9BchJmSXXm6Zs",
  "key34": "4qR2F7226Gn1EbxXt8xm8yuT4ZhwpJteY3zo4qG8VdMgfNZxaqo6N9QZqHe6JPY5vvth2745SwPrJKdjvetZhN6",
  "key35": "3nC6vjQdtjqD2Vu9fkmdnKH7UzY3Ze9gTGj45XdVZS3zaV46WNWhgkKqPH5Y6MVxhFbGwPf9aePKsY5jLNxfCPTo",
  "key36": "4Yj1sUahF3syGzpWQ57rQx9DUmiuvnZ96SvvCcXSR7xDn6soQvtsmZLZH57JHV4aBQV3npLRX6h7eMFxsTn9d9T2",
  "key37": "5PaKGv1FjWQTzLryuWxxxHH24b9GiMDsDZeM4tLBf1HZTi7DyXjC5a1GjqkcHJCK5cznhq6aRaND5KasVwyM77Ar",
  "key38": "LXTybX8rfBzt2kdAq4R6UqbTuWbY2c4YN5QALxWuqFTLMcvGkVj2URd6gaiDKLFKXNVh7LmNZBCGPfGy1Sp9jFf",
  "key39": "5b2LhCeDGvjJKZEyzqXgX5WFeuWx8ZKPycDCX3SYULPmMn2SNc465N2kLpZR2eqqyCxDpitYFbJXwAkKN5xNaS6u",
  "key40": "4oRwyUCkMnor3wjFkFcKLzrFEcYjnfMcDAkHBu6z2FDcypmgjWecFYxcTBJ9MthFkAL1WZuj1md39zQNYm9PXmBm",
  "key41": "4TNfiT3Vr1QKUcxgbAnRqVM64xr2XNXaFvRkxU3PiGfW2nuTEmXp3xN5uMfmmGEgJhg1NXEfAAxhXVVns6K4LXfX",
  "key42": "3zVAzzSWRJZo22wvyXu8Gf5itopVkPWpuUhRkLqDFi9c3KH8PvrVPKFCngg21H3HFeej7Hwy4LfKLZBsqrPyn4aD",
  "key43": "5mszaWrthYj5xU4XyKWss4miwmsurC8LTDYm8waNUZJHzMqez8wo7eLeuiMEJivtAYNwQa9Dp8P5yhzC1FF5EqrC",
  "key44": "4CGfoKFDFyyjVSAvqs8kFK39mXYancPKMNnemJRVqM1h1Lb1ojS6RKCEFYLtHygS8abmAd1AP7ZQaSTSFibuzKug"
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
