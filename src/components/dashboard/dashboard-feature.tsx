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
    "4THDeGnpKDp3GKvH1codcP1Mrp94zrdHmBTkEUrs1YJrfekZAbonF7xyXbBrB2WAkVce5GNm6KVa8qwEcvuG5he4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jFdDL4HbFemAxUhb37J4JyFtaK3CFG12KZLXVc4VF1sGF3GoPAYKSbqkgeSgi9uZzBcnE5FHXgAE1MweyfJgLY6",
  "key1": "4389EMGPVMiStBuhXXqkWZ1L1rDvLcH1Ygj6neF5CRS3qdXMxVYn3jYNfcwxLfvLaa6vjDaDSJxpjLH9RerMM4Ko",
  "key2": "3aogJxpT8madawLKWxES75dX67gMXDmfwTmBDZ1YFLVqpsU6YPpPC5XoL65V9MGSngedWu55ZhQD54gmwr5hqCcF",
  "key3": "2PrgoErJtUn31vF17y2rFdmuxrb81yHvexsNtp1joHKCwCDocypEjZPPMmzubwy1PtmicGcWyqBKanaa4SqjjnWj",
  "key4": "5d4LVb77JZZfzEfSaeHyqBpzozC48obU5ZikqcngvEMVf1ND4wyK9eqFsg6ZpoAw9jJNq7QB7K9RfxPNbKamCMYx",
  "key5": "4mfdgYQecjNNtXmnBXBbfjESKNxGzGVFKCm8iWNMSeQjTMJ4ZsC3yawWAMUGnMkJExenzLSAYXWx1gBQzvURxtAK",
  "key6": "5mesRMAUYuEKx745ScBQCPGbSDHFqyuBHZLbtnYmQpZM6ZV4Ud2g3Tyh3Pz1268dVKpNvZZ6n1JD19ApiELQy1iU",
  "key7": "31v5Ge9ny8rmP49MYiYJjY1KioBNpcHsp7X1gsJZquA9HbrcVYB8z2YoS3cMM7DYbpz65UvDFiSUA2dTFbV2toFG",
  "key8": "31nrfhDoq5v9Jitx9t6zeHmA7nH6d2JnCQ7d65WjDoxpVKD9PJqLVEEdoPG6JF8hFw9kWs73dQ4fo3rPegPnnRrA",
  "key9": "2kfTSzVFuuVJXNfAko3Czeysx1qfWWkrQ2DSkyojtHR1u6bZgCL9SijDLkmNWMVsBoZikQ9MunpuDvmtzWbNK6WR",
  "key10": "65fgajgoZLFCVykkZ98WpUgvAJKUMQtnzKg7g1dYBd1X1ZUjPn4JRWSdZg1gcRF1873Xi1wnRWk4znaw7eH2ESiG",
  "key11": "3Thmx2jn6S84uj2ZH71SonQmgMq5Cg4mvQ5V8HQMJxi1e59Cxgz7JvJpDMYy9ZZJnHjXti3dC3RMRJgzqXe6YUNx",
  "key12": "j4effGtorK1PoBYA24xxf5tGNe3SXpW11XHM6R4WafddhCMtn32gQrFd7TG33wqzBWxYVi8hikXdmHdLXXRvoq8",
  "key13": "BjvH3qdwMet5oKTrSdW1LhvgXezbLDNyppZAqW3K7yQKr4DJrsXqucty7eky7EWnnN4YQxTr2e5upmco59xPpqk",
  "key14": "2NDTj7UrjV5tU2mU2oCydAcmRXHexemsVTxoR2E6zLULeYM79vs2qvEFUZPpGwPPBajsm5K9jiHX1G81fsPu8r3u",
  "key15": "GPiPeuiYvpeyQoY7iVgxqtDjEozEz22H7FH4WEmHJAa7ka56oEhzTkcNYRHa3N3BZd8RA5SkDedBk5QGpFVVjYE",
  "key16": "3uDteJhLMfrA6gZT8F9v9AzMLbqabFp88YgREJoXVFYf5PKWDiv89NjT361uy8w3bRA3Jvb9bUV2rtS5D6fn1hvE",
  "key17": "2T3mzB3TFJe89YKFtRqFY2MHn1HdY6xWNBsMNNgcKfDHufEn49JVrn78JQ9XBbofZpXc7WfBGEz4hSfpYk76ctR",
  "key18": "7C9xmWmUTURnNFCbTsa2DHYyEjm8TnbbNPgi8MpxFsY1GaDiokSrWHRxeskeZo7hc1HaN9xNFxUj78ZASszmvXc",
  "key19": "yUaAURRz6sBebCpsc5YUgUZjGZSYwchGw8gTXuQ2zsz5Z9mgsM25rRVs9cvVofzfSk9KyF2cCDN2eu1vmiaKBBa",
  "key20": "5it18kav8v16AR9WnCs9ztHd2GnC1dM2HYuJYTFwRZRriwDvqyqaw9iuPEbSGVBAZpkbj8f6GysqLY2UPkB1CjgG",
  "key21": "4UFJom5riXfvZdWMC7cGgG8euHPHmEXvT1dAWdbcF7ChuPUDudbc2yuWN2JH5pPvn6WHFnatYTRobFzr21Sg4pfz",
  "key22": "4dM3Mw8wzdmK2wtx9rGsQ8ruym92o8YV4Rnssmm8U68hXVeLoSFmR38cSX4rg2PPVN9R5auz9wtsmnD1j5JuSXF7",
  "key23": "Pw8JAidmLFwwWcKUSJ1XP3PFv6usdozF5Cw42u6pbPLmwfToMZNDKPwXVTeuzT2No5BMkx9D1i93tv2K91mFGZq",
  "key24": "4DTPfuFKo65EH4FK5uVnFyPGuniG9b8HV68CdtcMsggXEi6wiA84MWwNoRfCGvz4EPnq1m4ji4BApB1eCVpVNmaW",
  "key25": "483n5WDRvWraHxiwLN18SPwsu7WvN6Lrq4J2rYDcTp8dYKQWsZES2C4iddRovU6AQjrzNC4AxFnBPSH3R5s5kokR",
  "key26": "55enDHviY44fU8kKK8FJQM7Tvr1m3sC7FHaQxrV3D8FdcasJtdETNieTDTbkbqVnyTsqLGoBRQ2Q6ZnmnZccy3qu",
  "key27": "5hJTQucLaqvFJFXzQf9KptAkUksGPamNnnHdheC1prxKtcrpu42gynuraTpDUWfrsxW2STcPsgAQCHYjePnxYkDo",
  "key28": "5LPCdv7J4furZ5diHSaT6MXoPcXWhzWAsdesMLBrK8S9jLrVNhAhRdFhq6612RFdZHzg1YS3H6xbLU9etVPrffUB",
  "key29": "GiTAhrQTjZDThwAoVCxkz9Ls1d6Dn2VT9RADQMXVEH7JceFvUryQBhH7HQZayNJMhGdjSFVnh6rUgnZxbuuRdUz",
  "key30": "2y7n6TcrkGE6etUJcufVqMfngykqtN34PvT8opphF2Wy6ZaE3U7SohQDGBvszR3BiM8G5HeJpMfNggNRasa84hJS",
  "key31": "5LKZm2cXBryBS4Q1khn4vvMhpyYcEN1aKB5Kz8aGFaiUAKcRqGRHBvGQHv1KM7zQZqx1fJbE5UDi3jGExmUdBRes",
  "key32": "3BdNMSndzLqenCKtZ2uuZUo7m65D5LguwhM7oVpmCA1CF75ZaG5QL1qMWQVCxN8bqFp8w2mgK7eRhr9J5oMnXQY2",
  "key33": "61DeD1gjXB9cVLdPPV5TMTSEZ7tCgFfSQSgkeneN2WaRn2vB7Wy8PuyZbCkNBtsz45a1MCiMa9E8wa9T9avh8SF",
  "key34": "4KrfKArw81xxmTe3Vgg81EKgTruDWLgFjCkXHZts31HGbj2nTXHhAppUjJaebbCX4Vsob1PdvuZX6kF6ouwavRgW",
  "key35": "5NymVj99UkT3tvStBsZE19xQaPbJnwSBbinb1MMEDecZnxNnrFE9tGKXq68ktQtGTwqhk9bAqnPfaXTRWiAqW5Sk",
  "key36": "2wSDZVSJKF9WcNBLfgRGnZsZGJUzfEXjfJaWqYAdpkxoTnxJovCSxMYHSgHxErraifEfc7e4Erw7H19ecmSDq17X",
  "key37": "3KLCEQqum523HkfHwcuUBLwSoTargT3MqZAnwCCzVwmf8EgADz8tiYVEh8gBFQq1vUBPe5N7X2cjn3NcSWRG5Fjm",
  "key38": "2DVXg19W7UHHd7SfiYpfBcLstina62bfm8T6qrXdaGnmwWTKb9BKWfBYELUjtfR83stRWs4hwfNNHPSjA8r1eFNL",
  "key39": "QZvjJcFBcADMsV2twHfTH15FRW28KsX4d9NCMyVHtX6KaPVAvqvLwdoziRvLf7LXvMhqYPmBK4qrDaHAtNosF5f",
  "key40": "KgGs9iBPJoJMKtsbfsx34vc1oXp23e8rnHYk2higfsdghARy8p6mUkPGPTSRH7KwjQ7hyFxvvWJRzWqs46aEyiz",
  "key41": "4f4VB7tXdZwo1wDeRc54PxQj24vqjPuMhUkwgvALEg2vgjdiRGnuFP1PZBDZLHiWFbUoqbbL26Q9tWpFahumBasD",
  "key42": "2KTC71xqcYDVDzmuTcjvvdiy4o4eQtFkJBtc8UPjoPoNoUwKxYHGdMVW8mjdsEamrMbS62nHgGxeNSfDT9Ai3oVV",
  "key43": "5NRdqRDCiyKvPMr37NNVFzYCDEzVBdnn2cgq5bYqpiyY1P6SQeQAQyXydmWhaTUuYBt2mwh66gfFEgcGzEYf9SuV",
  "key44": "gBhtaNp4Rghrm4uHvgFVkPkgwy2ngmReesV9fLiKt4p5veHL8cPitd3ywLcAmmntnBg2tSGBqwujKZXuRDcX1R3",
  "key45": "5oMrPgbH1AYcBrv1YauV2LoXXk2wYzATvZMTPoPXCMPobLjYqW1DmTKQjwzHQTPJc3LLKMAZJKSBESGZwRLMX1Tc",
  "key46": "43vBMBBED5Q4MgUsmTEyt1axu1f64RfaTtbjmVRYWp3xeX1hr6nnmoALjDaERZXFoHfZmpzFAW9o5KTo3MxR4u3E",
  "key47": "2PjNNSHDbFkSoGLKy53jkUu8XzEemxeJuFx5qPY9Qf8VtfsdGb2ZoWaCBXze8qkTBqMD716a1MQ74QmLvo4BeqPz",
  "key48": "54XFARKXAQCygF7DnsZJbgov4BnbmGVtk578h7GDGLCmxr5HQGTEwFCKe2U8w9b68iADkqxjuLvhUYqWpepXkRSY",
  "key49": "48KDDjJKiSnBuNVtyUBWKMqEohnZqmt1pnTh59JyzertdZb8MEfsydFLFxAkKtMQJAAyU8yiVmnt6yLpiUAnLqs9"
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
