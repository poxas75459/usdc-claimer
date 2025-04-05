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
    "96gqxV8omosa77aDden8vM9RqwwYVyuDexxD2VPcyijBg2k8ZzKgKsW2dwESMxCravj95snvamMAAFWSdrtSRU4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ev6btDesXVaam2A8NYNG5PqcdVirzHe62NRuzyBffK1qvxUTXectBEGJwbvu4DWRQfKuBj16Sr4Nf32NuU4Dx9u",
  "key1": "379QgDsCczGx5HP8rfoXzQ7pZaf8HETP2H9aacfRKr3GsPoHer8YrrzwVhKURXm4kSRXJvht2EjYUZ8cHmnnxVK3",
  "key2": "3SAE96sEVaWYxJeycAni5dLMoWVseHjKAkQKibKAtWtcddN2shhhYwJAYZRRU4qMRwXbUzmakdEUDmt8kBnmcqTy",
  "key3": "5wGED14ow9uSkazUoi1XX3BPnZHALdQy7orqziWHbsdwboGxSXC4cZuqY4sj29LhyogDhAno46gPjVEWTRKGoL2f",
  "key4": "rkppsQrf4BZUC3Jx92GnyYxpdAk9gKdEmzVGRuYFBAQe5EHkQBtnCxeJCPK48rSfabFPFXJzCmj43rDttHEzaLV",
  "key5": "4bxTBSAvwKjM4nDAjKcfAnhB5i1ZyXd4ivaya26M9SQqafffFfVnf2pVmLjbGP9UcbEdo38huQK1M6oLCtDfeLD1",
  "key6": "3HtjNjxHy4Qo8Lg488N5FgC9WfMbhYVCF74ntawaADekHUwVMaqTrf2LGYNHRV6VMX6msiWU5VEPEjWcASFNpRMz",
  "key7": "2LosHCTKJjWgCPmtcxaJtJ1HajMN23vQgnT8BdWneKW5FqqpGfHjmRzqubQUjR5vqwP76WEhYvqycuAKSm6xSmbT",
  "key8": "p7XqSoErppfwon4brT7KF7FMHCNnZMo1Ka2NRJmnUdWJ1qUxhVNyKmXEEaGJiYfnHeHmBG1Pzht6sky4RR8pCnN",
  "key9": "5Ut5skmp3mA3n5bo2QejEtnMC6rHPta4ZrSwJyM75547sQ1EKzsB6PRnQebzuBbDcNVqVhfg1y3Q7nWnmW2dHG6S",
  "key10": "4qcTYk8fA5mG8Hp71uUgB6mcQw4vQUs4F4VP8dHub4X8rCbDdSXHPHJKCrFoekRwR2XVEfj7be9aQBfamnNDkCzW",
  "key11": "2ckpkCFhJn4bJ2T9TwtqCSVqC576kzDpYL2iuis71USjPnzNFPCFeoAh3uSB37rz3ypLmgMEmtnezBvf85BcUpqe",
  "key12": "2RxaF1yVie1hiMMSfU5Ydgi9LH1r7n9uSpWnS4xvBYydyNoQC6ArzFb2PagjDWdRHAoH3uRZEbHpD9As6NPEUnL9",
  "key13": "Ea3yTq3ASG729FPpck7VrjgD4yys1gqk9UV2sYJcufxYc4ULNEseLCxx48jd6yq8AepsSSkX25datRWapqZGNXG",
  "key14": "5TyAnTZAcH5CgpsUVMSv5464FFb1tkzvW2WE7NoZ6pURpA4YMSLhZz4XUYWgmJBa3xv435wpKisuXDdSa8p1h95W",
  "key15": "6643F2kMTkKxaXfCdoKiKd9S46EpXVhHrg7ahwxSB8WVFt3XUYSQ2FxwY3JBDLgpSujHB3NYXbFQYVKhP5vPrpjx",
  "key16": "2gcd4pSFSHdGSj5AQ28ikpn8cx1DacD4b4oewEpN7L5yFBhq4Xq5vqwCd9M8NoXDTn2GpRCSV8gP7iTYB6YoxfCf",
  "key17": "21mkTrEhraogeWrZyrBjTFKFuYwXTpKHGRS6wqN1LDghjnzTu91LTAadNXWhnTfd7yNB17JzEM7eSsqZaUe8jJZn",
  "key18": "4F4fvUAjBpr29gzLyaAUeESAtxo4TyrHLCWtVEH9uEt8EJdDrqdPW7heL8NDHkip5SVqwd5osFh4X1iK9kzn8psP",
  "key19": "4TsEUg8jPUM6euQoQs79ujh36ppTAfERHNUjV5YWSsoZEsvGSxnMFLaxd5pEhGcyEWvAumBHcT8oqFBjsSJhYNnd",
  "key20": "2hCVUKtU1CGjF7BhWUZt2PGwfcknRPMRwNyfe39YQdc5h7KaceGTyadPKbZN35sKossFBTsbdKCsKZKpzrKv22Pi",
  "key21": "25yVpHbT8UgMsLgVheaBHieDAgvfAtNfj2PgzYPDvUyPDqdtUeeNjdnAL1FRQ6qbfna4LVeMwDH1ek4KDPASPZv3",
  "key22": "xYRDwS667To4Kc6aoQqxU7STnQUbxfz2S8CqUFNNKH8Yi1oq1QnwVc6AC9d3am7pSTnKFwdxad1yZKFQRkhMDpL",
  "key23": "5mi7VqekrYSwTJ4Cjeb4bHTdAKc8BPKZZurZ8xWFzMgoCprLGajEMf2ZtS6vtQvFnUTMAebPRTr5FcsRHoCgakpH",
  "key24": "3TzDrk3Lw3z9cg9WFkGqFCdDiYbBVwjCct8fAobpfQw3wACQmNeFZLynA1aQrc3jVktyVV8fWeLZNsc2Nncpsemi",
  "key25": "4bAVUNKDJi4BRPgKg9fwgEuzvkvsBEU7whgq9dPgK9qUzu8ezZXpa4CXZZuFqqag98sHdSUU28CsELUhaaoTACBP",
  "key26": "4WTQ9tXJUykABYekybL2miS3MoxW5oF7j7z3PayGsG9X1adLFN57FN3ih3f27jzh6QEcAyMJzFNgsqw1WsTJWRMi",
  "key27": "2XZu6rANQHdR9vGSHedLB83m3gwbdhxmr8GNqc34MGwxj3tUe9A8qVcb3LQa8SA8upN3wFrcqwaKzhZqu3BoGs4R",
  "key28": "4eNKYzFFWcnsQXSLdJVdF1DenvFkR8WbMTGoVqtjuoQpTGY4WJwM1M6frQ5jAaUTUooL4pCpx1BzJHzYoRq4uFP1",
  "key29": "5TuPo9pmt2qZ56zVePq14hQicEjhs4zcR4Ems5C88E87GiL1asXe4xW3tQFpti8KggmEhSp9RLU38nTotVamGBNX",
  "key30": "2B5gfFGcx1sdM1ct6hEFLwLi6Mh4ZygmYxfLg2o431SPkkBMBHCUk3PCTwdhXppVgRNvA7kSj65nfqgb6fwpR6SD",
  "key31": "5qJdMFS6RAAFX2DsCjCkA9yk63PT9Pepf9P1kqC5RDEqGB3ywvcTKuQSHJFu8Nt1KVXUxb2xmK5BAF66d4xubRPL",
  "key32": "2Te65esMc99nTJY4fEHuC89MQSk19fUFwvb8djTxU4kBZxJUdr19qhLBb3S85DzoxfZg1MNmj3EQbY4kMPTHWUah",
  "key33": "XiDmVEVLhC5zcnPCpc1u2PyyhgHZuHy9VnKF8L4PpCCqgb3ekcL6kdxCpRVCP5vCqBEvSBz2FvT8j35p3SToXh7",
  "key34": "2ZiTG8JsasUUDaSKMTMDncFiLqWQMHVgePj2WpNfWBBxgZGfJc2xfpShBm1Zc5RPnhmswkt7uffT1cfzaKhq7yvT",
  "key35": "u6ScQujBnT1zfoALhb17R1EVVqMwuez6yLaNnjZ1Crvk3nVpHbgu1Hh8cjELpjAgJnu1XqMAC82imx9smWAatc6",
  "key36": "4dVgT85JUg55LzdxQnTnPexXRyW5H6JNUiM25Fu1X1BkT1EFpHfroMU3brZ4sAskHSHeq9hxNdkHhpLyeeZEAvVa",
  "key37": "4ExWsEaBKHmBERMbJQs3DMn5qNoz3WGfDVhvpWXmBL8p5zumCuq4vEbgKczTefDXdwDwgAHJVb8LjkkuLMhknzHt",
  "key38": "WShTaBBJJasrDyDM7axrMmArL8YbAiPwbsDb24zFiMfGNQKYMVUfjUM4dm8EWjAKeY98wuMy2vJyRxEGAmLYQQx",
  "key39": "3ywP9LNk6WEvaMQyvwaveacs6uXDTmSmMwAHWos3328qaZU5NSus2TRJ6ym5ZFw69xQBL6dfvYoGLQe966YQVuX7"
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
