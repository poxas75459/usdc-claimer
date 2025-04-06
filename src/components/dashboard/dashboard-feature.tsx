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
    "5znNeUaXt818YfVpXpeeq312bdfKCQtMYojdbwVuRZRNpsTDX1c7UPoyb4P2YyRD1hMpddv1AgJFSSTHNXehg2fU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57mhsexYkR5TdVUakfnKryk1AMovmaYHQAHPL5zkPepBf9tok7oXmLGYVySNFw2rNfsQrUnLe8NTkunwgmG8qfuK",
  "key1": "FiKa9dRkUtBuD6Azb3rY7VHXCEzM33rZGjwHXmmQc9TxYHcnRVEfCeYTjSvwWrkDVQqufagUocnqGdAZJhJzWsB",
  "key2": "5txhMSAq72feE3Hryyz4pEKBEi6XCCo3rEaPF4M1dcgA8tRoYCkSTuZq4D1joxqpmkVw5cPWKTExdXNEnNxC61eN",
  "key3": "5pW29UAzos4byoPpXmQDc5ZRLsrfPyCFbnmM7vQWByUpYKt75TJ4AVBkpgYH4SzprzaJTh6ZYRwviGtQSwRQ9hPY",
  "key4": "5xaNeUPG2Nt4VUppD9zhPa8hed55dca3HjiJ2iRGW49VU3r1cwerk14wqH7dAiHmVVXbPYgpMpssEFeTUMwRbdF5",
  "key5": "4wGYwz7Y3RWSmUjmk1epeGQX3K8qVWPXfxhD52N21LJJ4NKj1MqZNX7SCUZCQ7Yn852EzcMg5NXiCtY9WN25FYpm",
  "key6": "SETntfkv4MAvgYBZAoxiAiyKNw9X7AaUu5tqeU4bACwmY7VM5ihUBCL9VaEKgWrEv57cJCoPHZ9Jioi415vfvEp",
  "key7": "2Lpm3W2TYpqWFiNQkPRBw2XirkNnAx1yW8R6nn7cNU8gVpgUrH29rhWTyr5DihVqHPQLwa4dgxgbaxsRLmbF2aAS",
  "key8": "3rBcp2PZr5TYVPSjW7hyQbgsiN7vB26q7PEArx3341vZC2GZ5GYxfhUHkv8a5ojY6n1KGxBMoezwbz2t3JzKq73L",
  "key9": "2TEYMSBJstZG9jDBs9ENckvazERVqx9pezE6KJ48D8munj9SZZhCFq3uBteqmEpaKmSJA4iuL3HLpR9GJiy3Mau6",
  "key10": "5QZBW2quRTqgUb2bv8eh5oEqgyJgZoXtzzZBJCCGXyA7zKgCb5zZ8dV8tnfdhwmmjZngRq14VXV6Y5Cg8DAAEivH",
  "key11": "4yKi5oc4B7T6upBdj1F2VAUDqUE7bo3rppNSThPSZD7Y8ovBeiRpSRrNLLBANmy9WBRMuy4x26DjfNksRZSd5U7S",
  "key12": "2Hq9RvjkiPtnrV1Fh1mfYxwyLoPS5hq5735icQvYee6SNSrpuEivSpyffxbNxmPWPYcVUU16BLgLVVNoTFP87jkX",
  "key13": "2FazXYeQsEzR9Ja5t2bUBX4Zi7tpTbNjGUJhgbdFmYHXJVVhkwCed2YQkvHGuSNQLpg56HEmwQ4eRZkzt78D4PcH",
  "key14": "ew7TJy4qBBKAED98Ztye3hGpmNqZa2zrT3v6mBAfZF1duJnF13eYesc4mCxUL3Em491cVaiQAdKQQ3rerEGiEbJ",
  "key15": "4xciEHaTc5sBk4Yc1EA9gxSbN6D18VMKBPAu16322VmyvJ5R6unKPCFH5EPzdFZ3PkYZT1WJoYu4dKkZRLZ8AnSM",
  "key16": "3wrDocogG7Pm6kH4QaSmBD5yaGcUMvEoRAJgFdmX7VXarAHaYiXzNJ1qGiDJDQYYDobtryJafxaLRCGuBH7PVjYD",
  "key17": "V1q9HJ6CcK4rGgyGc61S4q8uoc8USJBwN4EdawrT3DP2cCJTvhXp8YhhgRPpBHEzxD8RfzCodXtAHWmFNrMdGrU",
  "key18": "5aYnj9sCFj4fe1KTsb8nDy2nJfLhpbt4igULz8sEsLLBKj7ouWHVBFyexBjtGnmpNejezcjwA96eEKLVt5t1LyVo",
  "key19": "3VdKKt8uN47AMVFHivMygbYTGGYWZYmCzwCyn8CNK4GfTh3GiUWyvuUCSsLRsPMw8wFqPvJMFpPn6yfj49JBqpzb",
  "key20": "3RY4AEbRBM8uWAzDzs1UxFRug32kdk813DgY3zKSAEsJsQn95GfgQB37pxLXLuzz8AW4Dtmodohc6U9K7REGNCYu",
  "key21": "2VHnVJTD6hF79ZDJTtfBJXo5dqmC4rayUaPVU4BrcCxnzsaLaZAcKBiinp7phi5L9vPZ9CqMP4YY1zqzRshRZD9F",
  "key22": "4e8kCkJfjFMYmb3a1AW9vBdy14jw4g36pgv3hu2ydD2h5xvk5ZRCVDKbiJ5CMWFkbJ9woYRhn1acUHPcpA54xbLa",
  "key23": "2WBGjsxjEKZFi3ViNacV2HfrNZ7ojiEw1aeU2KZcxN6JdsCSj3nZoLpYMxkggdn6Mme2MQ6y877zY3BQ4hshQyvg",
  "key24": "3ytk2DYZMwf8Mnf8hcZZownzrwLDhP66KuYhAQDTFcHGUvdPi3PuB7X8V543BgP1swUWHbmN6NStm1JDfr1Hy5de",
  "key25": "5QCg6TWvi5XWQ1V8rYZNSGMjZkXbxm3RK6YpzF2ayLcWrjfr3wcKkk3AmaDsJavmYcLDXTdqVx1VLMVCvkKPhzM4",
  "key26": "4Uk3rQZuqFRVGb4vUFMSVhSju8NYvqdo4Ub4WqKZWypc8prTQXjcTaMybRs7TB4HtpXaNi7FXhPniHyV6F1T7mVi",
  "key27": "5AbZL5GhwWLNfAfLsfk3HSstWLGGGE5h5bZHMoJAbKkRaYUpXTenjipQt1YA9puNdoEPSiYzKF87KfB3zGSetng3",
  "key28": "2XLAWvVgUQvYcQjbwTsZsnSKTUnpK1ViRvhCSk2QvaU3jk8Ms6QmmRYDQHqTSkTxRgTjCAEjWM4Ym3rapiDmapG3",
  "key29": "2EDzZYTRE7dvfMqkrS2f9SLCL7P49zEV3JMkfkJhG23TxsEQZHvWBEnJC4UtVExmkQXXDGiPFybAvCfHPF4j8ezh",
  "key30": "4N3iMhC1QQpTr4vFXqyDkNbSEsWEPozS1sZqin56mdMPeoRwH2N7zF5JF9dJDYHwwHmUnEqAfNXwYQ5NvwH5rYy",
  "key31": "35Kve9fzAtDQuuUGZmfQJYXNdPcFY4E1eRvA2wmfstqip2tFQfNwtTZG9EUTavXSZDwBmtWPpqnduYaLe6DfAfLt",
  "key32": "2q5NyD2CSfSBs2a95gtzET6FkH3pbRPDkL7UdBoFPDLuouLEBHF1i3k8yxZ1egX79scaWRujZ5BTaeDGYpP4gj7p",
  "key33": "2r4Ds5izFr7PsbaR3A8GjKCmBZgea9gZvnKayJyeE4wLB5Zh6uyNN29PwaKw3594Ze1VGX6dyM4nUskDiC9dgx4w",
  "key34": "4bNnc4ynZjvzakVKSzLxZ2F94o9kdED7DjZ4KLDx2cj9kpz4FnCPeFs4JnTQCS3vJNVr54hfB8gjW474vgHtSxhA",
  "key35": "4t2R8rx3RkuhcWUGVAJEScKJajH6z1hieD2v5KAJYid7SdGougBtp8K8ovEgTTX4sSaY4gb6Wr5DXEV4kFeM3zqv",
  "key36": "54g8k1Szutr1QP5f2fxCKnYFcAGGWGFVcEJkHsmG4fUu6hxHXM5MpYNVyTjCXjynfpwPAHae7XspYFHJr6vAS2oU",
  "key37": "5MRwqjL7pidoX6pFmVBTfFkCHCLqemnpuhNoMhP9i17MPTbQy3WuHiWmuMrrz3QPVHhkqmGBawoZmtsRcqAKgr5d",
  "key38": "LvxQHxqsybSRRpJ2m3Q59szsEBZBRoWLfokjifSb4j35Zihs9H21rZSyNuxPAMadHWhNzoC7wFVm4zwWJazmhPf",
  "key39": "6Zmu1Xryso2j9f2552L74CXsaHF1NsQCzYfbeQsk3iAas8LsSyACZNZPHAFWjeRgEjbRTMvLuSRAj8VaRRamUCp",
  "key40": "rShzZgZ55Bs8nzHGVjR2hx8a63cwniQr4Y8fcdPVMXpi7reoBkU4SgBkoYMFz6GRG427phu1tESR2UKGH7nmEVa",
  "key41": "5MdFjAWaV6b5hFBMknfFFMnPJpkTLoTkLYbbbreMLQBMVTK1QmymqAuPCvmXQaxMLDzX5QFEPrn7kaB4pnYSWnLP",
  "key42": "4RHXvikENRmQPNPEwc62h42zZVpP1KKsftkmjzeiHs2gE9ype3E5yvteAj17xVRCEEkLMteAkvcPani685B71ZWt",
  "key43": "4f5m6UVmgV9DjV785fbpDCVddoke6nkXQ6PRbyT6DG34LPmrj6rqAqxF5X4z5C315gJey79YmzLdSPs6ExNjUUVD",
  "key44": "51JSda4WZV3zGQwDHMX8g3UtF2w9ZSdvF3UUmgLHKy25SxM4wyEbbxz1xWx1iw6tYCKFcoTviaZfr2Za3eXztMGi",
  "key45": "2NfnLhgsYkhZJVRhXUXr42A5Bt8Y73Sctz5yYkC4JdDPYy8sxCiFSBjxNb6b67HxHH2KgTaEiZDoCCNbUhrymqac",
  "key46": "5UkQnfpmKnG7CxkpnAVPL17mezTY55oEMdrennQbsLkFRe3V3zJjonPrpRXCcsZwAYYLfz1XM1LN5jb4HBwmKSKU",
  "key47": "3P5XUqMA6mkP5ejFWFGGzsFJ9hVWBvTucZvB9tsYZxSLsua4cdhNjmJu6Ut9CndGVvBhdAV64a98hPHtCLd5ReT9",
  "key48": "4hhWETxcfodhvx61PPSMt2fcztNJuc22qNJouRxa3TsMza5AeWzV9zpW4XLi4LiSHXcQuov3DEXawstXodg7CxmW",
  "key49": "2KxDSEceC6q99drAxhP9NDgyxHmv14gLbrz2AgrNqQ5riepQXsEHhopDERcuk3cs5DH7FXRxPekynAeyCAdSR2te"
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
