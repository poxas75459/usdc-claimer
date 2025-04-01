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
    "34mn7LoLk7dF8qsHKDsaS8QX9AJ1EwDJqM4h4T683oxhAsHHbV2ZyGWxZJR6f7stW5crY3oktqMCxYWTFnHU5otq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52MfVsJr3KrZohnupkNqWm69RRGb99nVGRYLVxgML6tgJVrrH6NKDohvVqTwcCRXXH8YtQXSGbvckd8WMhY1q9he",
  "key1": "pVMny1RpHRphA5UwUeFhEAftksM7XV6fsTXFYENi2oETaq9gYobmxbu5fS11WaDyHEpT2bsrmCHUDG7gbM9XakJ",
  "key2": "5PWBx7LTvUmUsp2BXdAu2s8Zu8s2hwu11A6VU7g8vMprFUKZTeWJCjiwjfJMVM7Xp8gdzScTwfuDEmo2XXwarpB6",
  "key3": "2W2uVrX9243N71D1rYQNd14rnJNSz6t3r58FV9goQGFnyK51McY2Q7f23f1bXmupXnGcKn86rVcGEckJmzeY2res",
  "key4": "4zM6nFcGGeEchGyLhzwKm7BDUmJDUQbeoQAutsBMrrPHgv81enz2kBYVuNVcqhZ3MSuZ5yaU1Ze1K8swXxnRpgC5",
  "key5": "4NtV8Tt1aCuL8w7xW5vUWSXJR17bTzNj6yNheKnjNa1JuaZtF9VdMxKhmVECYD6FHFEiW9HMAvPFuAseh2VVdQo3",
  "key6": "577tvZrBVnVaTTxBoJxTUvVuwsZH8YyLqTLZ4TWtNsfJ5gym1JD1suvHjYTNfLTDpgtTHA5bJ7WLZjrCx6FNrq6E",
  "key7": "4uDv2cdrBgSDGHJtbHHQYWAR56ggGztYAtDBPXTfuua9mQM2AbL9QtEGGJaT5nju6boiPcm2nywvVqRX55LTeaST",
  "key8": "4746Ju3cve3YYL5KwGkEVwkbkY2ASfV77FBcSDa4otu5WEWw4oCERJ2DtgXYaHCWxLnsmA6fUrvFi6AGAfUX7KQg",
  "key9": "2qdbC9id5sMCT4ym8gHcPxtY2xd9GsU4vZn28eTUtm18f6Kj4RbAj1772PdX9Hy3z2nFQXPuUfd7nYSGaqJsgruX",
  "key10": "26wa6rFVG4Vvk46LYKxagy2Bg5WpGGeF264V9EdM11igyH7EeQB6RSzh7FTwGqcks34doE8zFiJ7y7Q4y4Wt1juy",
  "key11": "3G9XZAuzc8AYNqenhBjsxo7n7Ff3qVeVg51cuejd7WKJ1CntpnqTixR4id7mF5CCbGjsxQySxGnLhvQBUHpZParH",
  "key12": "cq2LaGmUJ96HMdnw9ELEgq864pp3TfyLiBFkxv8uihT5HLtBZGf7HfZQUy22A6SDXjhFLLwBsUMytGPmkucX3C9",
  "key13": "51vSGgNbATn1ocUmeDotF8jnWrcG7682arDUNV1EXZwanpGKaJA78CdesLAAPTRQQHiUv9K5T9aCo21FxVandGum",
  "key14": "2UDSPciNrMcBD3Mu8KJ3DNyWHXpRph99ufQEk5NurMFDJ9tQUDReLCKLYiGjEJRqQLo2nXxWUaAyZjBQXu7azhug",
  "key15": "2S4Z6ijz4NqarAVunz3veCxVTFZytkNhHkKyLqy4H7KRcX3wZPdppnASN4NqBUbUASa1JLJbGYPGa9JSumeZe4m3",
  "key16": "A5paucNQCLYeg5B2KEP1JvrAQfwEUo1JDCE3qsHR2wUHBR3bWvLuzUDp7y55k2VNEmgPSDgowL9urHgorFSf2vB",
  "key17": "4kQxsVqcRcQSKdFBt1YBf1aDncU93wsWVYdw6iteK4yr3CBLdXD35t387pEJsb54iP7ySnqak7x35qTZkHeRgNm6",
  "key18": "2q68eyzpVnzbhGprFrkVFV1bCRV8bgFVda3b9T7TSzuK3ZHgPi17AoyQ2DQXeF8SkMg2RKFw95B8DUs93iFt4qKw",
  "key19": "4QxtbvvHQVTiLJFN3jxwADiiANEBmbaPF3MzbejnLa9bde1G5yqDMs29CPNpNhFoawa9iJ8HCnmujFfsvdkeLNkV",
  "key20": "2pPeXYAYaR4FtnFCqkRiHhEGrWuDoY85HM5mc7upUQ78gngvLtEeCgac8N8i1LdvgdXjwJvzksuPfNS3dMjyAdTt",
  "key21": "5Puwsr3EkhqvCGKyN7QBV566tbyzoC6coLL3VpaXC8WeuWX9m8nx2KzfgXtNcHscZURijamPNViPi3UHCQ72vpFY",
  "key22": "3ouyuMzu8BNRQiLzP6guXCms7nvLKpXc89trY6jKopGcKXnvauD5hVcr1fJvxRt2J2iBaiHuMgavanbRPHqang15",
  "key23": "CgGo4AvixMHzkVR6EiZZkYr4CEJPCazVyjYz4X1csb2pcdZtgvk3NtkoQaQVeyMVfVsyNTkehFn1aFdadCNtTxV",
  "key24": "4iaRoW6pKsjbpYSHNT6S3foQLgQBZd17wLNqQpNdkZgQ5LsajKJt4yAGfEzNnqQNLATWnjPc2KFHDxS75AZrvfTS",
  "key25": "4YXeEBuXTE4T63dGeud2N4Z7Hx3NuiB6qYHDbcRfZQNYgReSFbdbZEWtPVzvxZtvahMYccx2ZZ5zZrfHCifAF8qm",
  "key26": "myjYgkcLDxqLVVnT2WKEQUZRtyqMZdtMEhy8cvzKsqD4JfHNt9osygCqC5kZfa8dnyLQHFa9fQMNpTNPoNYBLtz",
  "key27": "f5uKhL8617pvBmPJkEUKRqCgbBvqHoEuikJWcEzC3AAj5DQP5TUMRwD22MYT34TCjSwCyoZ5iga88NK6RMXsR3k",
  "key28": "3LCV7CBY7q61XvZPHtGNuE7HoRuxRUzrMAkqjQHhrztH4joSPjEzd6uaHQMMH4g8Zs6uvtoghvdtY9ceHUuxJnhr",
  "key29": "4eZ32BMZd6Cm673De5bqZsG8UbARdReTZkDsL7JMADJLbPSLVD8y4NXUHuV8wuy2oyRGJzSuKehZSYz2LGcp6bSc",
  "key30": "2DFjvUk7ZS5FC6TAmdWDhfSQBU9XuyV9xoAxwRtvpKwiWBC4WCs8GPp48qdAkTm9nugqdVyJDmDfHXkR3MLZCcci",
  "key31": "3V66eaCtv7piM4Tp6qZv8dQXhMY5FGocjR8EF4YdVFTU2sxVXc1obeYF26e8P4vmmJkgrEhANWGTxr9xaDQvsNZL",
  "key32": "5WrD9bvdvJh9JPKPWn7Y4G8Y5vEnzwE65k5h5so6jVVXZwa6yHFovUbLGqDQAXFrbTtk2yRyZTQJGzZB8CMAP9Qh",
  "key33": "27e8RzGBB13g5PUo9LSozFSs7kz3i8SainQLAGouK6vrPHKWbNza9GgmgeTjsH56hpzarFAEFto6H7KedwcHBVpP",
  "key34": "53W2WKt5uAUGrMWnuCBmsuV5cZNkosqtiMzkZqc1etxmVSMRK79VvBtbRMz1LoyYiKTiRxriEJrmmyNfXhwVHWnP",
  "key35": "Dw5XqCPGL4WvLu3PFYpb1vRLhfDK37QzYNAPwBc8akYaisXLt91vDzj97H368pbt41Ztnvbt9XtNhAhpwrWQ52y",
  "key36": "5725SZeiszkQhiPKUKWcTu6evwjv79CgHbW4zy3ZCkNuxeTX2SKansdfFX6JWXNQ1uttpULbsBVCp4mXFodJ94Pu",
  "key37": "3qiXWu3XpStpqfGHQbjfAjFXbMLmQTnovC4kxymvPpanbyqy2VJCxFZQBF4LM98wucy27dFAHhrBe7gzo3rNffAr",
  "key38": "4iYJkLEDRttsza5wvi3w8cV8nJUd2eSZ95wJXN59yPj789GdeCWtoH7vRVWFfREEG9DXRe58zaraUKQ93TLZRPRe"
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
