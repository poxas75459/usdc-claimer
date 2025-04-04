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
    "3sYUQcvWD6uZ3ctiexJjBS7aikHyWUcJhafAt1bwW8auzD6bH2Thi52Uxa1ZzgQbh1zCgV7sF63fhcgA2JerXedG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28tyVA4uCpDzaSx4LPBnVfEBCRtMuKfCiuqpTxTPAiB6FB53vYRMDtdpW2wwPpxRSznZKjmCt15jZBFXH6A9CHsk",
  "key1": "4mxvTZyVZECgxrvLd5CaHgGz6U5LvB8CcsW22Vhwr7Kt9FXAWkuyuwSGpteL9WwYaB34qT4Fm7TJjYhvhhw9CtSr",
  "key2": "YdEuKkKEoo8NRz6VMWNan5CBZTpt4MqiMDSWMqza61qqFLByWLBKZGnFpRkzv87NEK9jQuutaMyJbt2Jz4Rv8tZ",
  "key3": "3hKuEacZRFHCk1x94yC8GfBQetBJKkCSWqNsT77GCumSwLbsdMDzLGfjqd18UuxCuTjEfMh8Uw9JZoKdmWoZbSZt",
  "key4": "2zmcS7g8R1t17ntCEzeLuQqQ1bsSddLwRmq6EFLpixdcMwdCPEyGFmfhY2HeQt1PyequWcc1Qk2tWPjaH22JZ2wj",
  "key5": "2tEuSJix35L6SfdYtQwfwRePHspjsSJFCAoyiaPLuFeABnGe1EwUQZ6ZLT1tSryWbbAY33CGecWxUtyEHG4RbAXg",
  "key6": "5VhVSgtrVqKdSekeYx4CdU1CPLMctfEQyM3kdVHeGE3BQAmA6YHgegzakwr684p57fXg8tjm6PrT6D1stTrKV31F",
  "key7": "4L5boY51Ej9Ks4CpyXCaBZ8MER139nExa8DMcwnqFdAfqnfY4APSNGbpVdjdgNjEYnW2JNJ5gCAWCcnzpymA2CSy",
  "key8": "2EhoVyR4uDevSnFiSCJJQYvvkHmgW153X5Qocb9Z1R9Z3cqbwvnLZiXnxktspPtcixV2LEkJZXvRyKQNVEyXGvN4",
  "key9": "5JjGYC82geYw1vGz5QGshMGZyJGTXfeoTCMZnbbn927izrRaz6GSz8bRUjQ6S9ZFAacL4RBbWefTWEyPM3cTby6Q",
  "key10": "51sjwgWmYfyqkChJZiFrNXSVWDHYfBoKCfG31BDaS7MQgz752vSXtBJdyDHfoC2LdagaWG2BYUNrDVsawPAcWKc9",
  "key11": "2ib8jtiq9CWAtnW2NpvBVNm5UC4FDK2WFjrz3wZ5CZDDRsM1D2qM2x5av1EG262TnX1yscV8GnA7qwPSPjfsXWJH",
  "key12": "5Va9qC1hRa8q3jqmzJkDVEHPLc8hMHJ1Bc7DhYU5FEfvRW89zR2ZFHxmhAHmZ7QAeznynzABQ4PvrKjnY4PychhZ",
  "key13": "cn8Xkpk4dnUQk7r7ekkCeBCafTz4vK1M8GpdSCZo93v8DaDbLioNDFsx9rmFpMXyZy2FtFPNXVFaLQ3idP7Pyop",
  "key14": "3JhV7NDLPexVL9ka13fS18AWjDM1N9CBJJwEdN2vs6TXQKwmP85mKDD91eay2ivowyT4QdFMeUwFezb9Sz7fRbMW",
  "key15": "425KbKSmjogdZ5dLirkT8tRgUS7hevz7YK7MUHYrVED4NzW86zgAAVWL6EQPBzV7Pue8VD2kNkuB36SQ4cMMeroJ",
  "key16": "5U3kPe6xTZpacMpbHVEnX5fsgbCLa3GNpkn9cGqAZCoV2PQqe3nHUeuFjZDna6QWyDK5FMpxfVsu3qTQ6jrHqFEq",
  "key17": "2VmY1Y73hwenTXZiohjK6xEdX9H1B2cs8E53qJbLWNpk2xwkz7nNgBjfgtd6UPJ926E1vwQLpcZcLYz8UrBEHfDy",
  "key18": "FjjN6bRYRuvL5ihtcAyW5gfDGN1BC145g2o6J4p3uRqT1Wy8ePTwYpae4Tvhc6Mf3BxnkcZHogea86QwBZ8nuPm",
  "key19": "3UUU813uEe4aXNo2hsRVjDzRbbZNrUDZ1PPaiHcdfuJ1W1az3m5zj2KS82ydyjJJJYhtkVgPfVxsfnSmtDqBuKKx",
  "key20": "3N6NFPoVePozFLVbQG72Nyyouyi1kyYLmHRDeGrfmypaJCW6NEgfbDsQMRidchsGRUvM6Zv5JPySRnzqjKjKw2fQ",
  "key21": "55HMEJCBuCMEA1yoLisJqypiciSRFGq1UP6A8WwxnPNnyK5RK647gEG6xQ4pMCiCcZRcR5rXYxaQus8QPqD6jbMp",
  "key22": "51QchsJZpATwbFQ2y2GeDhCaSPTawPvu6LAHPuQqK9P3H4Vn8PbT1XRSMyn3RdsTGkXMDRWCxf2peCNuHiMcTa9S",
  "key23": "4UnrjYaM1eUtE59t5rpQu9KyBrYz3BfZ11dmdMB45kCMmtA5uzNgkDrb4htJtPBBZkkr2wZG8Vm7DdcYZTJ91PJA",
  "key24": "3JcupYQSnfZrNfc3dJWR6MBVAVPCr4hGA3wmm9ihPBPuwK2FZWEuCxw35sEM7pz5ruCrAQ1iuS9aKyCASyt1JU6B",
  "key25": "ZdFjTnfU57weUgFBrtiHU7c7sxWD1dv19yoXPmqfa9dSiHMrsuw9V4cvGMcT1iMB5PBmJyXA9WRiudBufb51XFs",
  "key26": "3tUWPso4X46XL481WPfPxVedij1bxb8TgwNxYDnnczYSAqop32fH1rni3vPRghK8wueJUYs4JudmQogKv1KwQtRj",
  "key27": "4sj4y9xV9YtitJPYrGCAwmVW51EdKVL4HyT3eaEV8p3ADdXNg2C4iQ4wfqm3KvGaJTd8uc9mxW9e6ApEL6vqvghd",
  "key28": "JXBfSMVtM44X2ZfQewhb2cQrzCSkRDXcMa8mTxX44PhRCwqBLQZQjbGnwU88yjYx9iRpV6J186znsRrUSuLz8cE",
  "key29": "2vLbm5CrgWUJD3z7B8ZszLswub6W3PFFx7HAeKQ4dmqUNFJxMWdApdXLUuJRrRWoJ1XFCMXDCfos9uWSFT6YSnkc",
  "key30": "4mPyST48zptesBVRYoQUMSvzCqgaXcJ7EWKEs76sfzKTcBaRnmGoCs5CpiEnF1piSwDUe8Mg2ASwL7ywDaazAUjd",
  "key31": "32dZyCCCRzaguTrFHhJfyFXBiJMtBysbcttECQBQNLkbozMAqFUEPMH4yFj5VfGnjet5RfJv667tBS7HQajgB5fb",
  "key32": "37H6ts5A9rCYJFEDagM5cukbNAxAFKEQyne59VUVqfT9B4obCVoeofMENso5jDiQ58Zm8XmT63biDVLMX6SuYt9e",
  "key33": "4QRG1RR3W6CLzDhr2u8mcZKNnpG6GZ9wuFtb6tX9FmceJQZZh9okBwp1u6UfEppg2hviTkPQV8xKLe5scZMtW8FM",
  "key34": "vm2dNDnNE2ANSGunmrKeAcXXzvWeioywswx6rg8kbEsUhYJ3futNqSS5WMzPiyc1QMG4xHZuWdTXrfXctiU5kVx",
  "key35": "2QK5niLEC976fDrpZLLtQrUw8fAmG6KNJwnReibGS4ZMEcRzrC2Pxj2Kpt4zx5utZQ81XXmrHf7WJ1vFad7sS8V9",
  "key36": "FiHi7LjNeFEJmvSmKS8UyV4kdo6hFnbKZoV1pxLzLyU3SwoC1ZzJNXy4UM13nsS1Axx3CdowSP53USViMgyCS6P",
  "key37": "5NGM2AXx75Sb99BfMXKa2ae4YZZSDMddMrq9z8GzUsj5XsWmytbikR5D6535mztr6c54r1TpR6gDTufScrweXEN8",
  "key38": "5ch9UnPzQ1FewAuLNoH4mi9khwF73ktpN3i28P3kig9v4RKSfLBTSPDyAww6iocpgca4vEpAFodg49YxFqJHLSGA",
  "key39": "4nPrhwyLS9XJwfHC649DejndfbywTx4vMszyVrVZnRxavRKAHK931BR7EZfoN76BjNxbtmbBqAXVcS3xPayUxL14",
  "key40": "1wKCEnqXijBfHt45ayAZFWjjQ8ZxBrUYT1WeSZei1R5CrBvdj3n4DzQQNzFYLMLDCkyzvQ8iGRFNL7kpGU24TeW",
  "key41": "K4NMRsxDNFu2XXLk4eErY6588WjEaZBhboVBfifrYpxY5QoqeyTrRjjvpSSNka3YpwGzYgyp2khZNW8oNESeZZK",
  "key42": "2mZSXSWFXWHrMauBWPKHRefyJrVf4iLPpg3Kp6JWBtuDsBGm9a6s3X3LdU7NBkd5o5qw7cHoC7zUYDnBZcqkcLqm",
  "key43": "5awwjZtMbzRVRgd2tnk1uTTVHGmjZBe9D6jrUg4qmNkuSYqxoXQkPwU5JzVMENFVUNhYeQCcgLo4sWw4qQFJBAJG",
  "key44": "5FLhtvzC4Um4kzTFKfsGdYqBDdw2RxBkvyXf7tgJWeUKH2pmMZdHscPFybb3Dg27iWD8GS1LpFvBH6nNA7hCbVAe",
  "key45": "3HSdXmbPxXPqM6yGJogN4iT3MsGFkZtFGuyMSo3p6eCKoMZLwHAQmt7FxaD5ZCWF7cVVvaq5cXYv6TdHyYukoXqs",
  "key46": "2pMmHstzWb2LUzpduUWHfZjZKA3aioqgKST1VQ7tdJD52ArzfXcqVFWxXcVbkAjVrKH34Co5ApUdLsQVBQ5D64KX",
  "key47": "4JfzBX72P4fw4Fb9Q25EQcnEFzEb36NjQB1KmUP6MBtTfrG1HPLaH9CasPRzCTesp7V5SCrgb8CQNAz9x68TWz6K",
  "key48": "5ypfXtAQmVQXutXV86eyXbq4ofpaX1iYszgVTYZkk1YeuyMDPAihLARgGy8iRosqB9ga2oXQURrGYnseXYqcjsFv"
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
