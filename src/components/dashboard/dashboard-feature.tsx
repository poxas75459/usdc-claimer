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
    "43jFBX5LhvDcsgQAjNUUGoTrXfFhBTrhad6MdTE8WBkgS4vrZCzJuQbQxwXtQYhTyLCVL95KXkCJhkHumthXD52Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1AtgTo3VjMgT7PP1zNt4UToyJ2LiBiKQxM6sfgvaV5coQ7q91YknLyr3JLj1nrRPY8TG4nHMm42QNsHpEqUNr51",
  "key1": "jZdJtsZeLxsgKSzrQvKerQiB4bkFMj7KvXZGepxgBsVKSMC2CLK65R6rsKuWB4DHMximAEeyV12yGfCQdBzwNtC",
  "key2": "5ZKVkoEjiGpjyDyxsjsKD2WKA59xHyRjvtHv4fBpRCg2hdV8WBudvdMhvm9gVrKd13PpwLarTgA9S2mbx6py6pTa",
  "key3": "29spUi36QTGFAbTjRd8q7fWYUEDryAREKePx82R1r5E2F5x6NEP3PxvpdaTwcDjJxTmYJQY3npc6v9XoQ2VdBNT3",
  "key4": "5oYZwuRkk2ZRcoGe14vbR8tAZwqL7rNxCemNRAiRMpBt6VBVfM6QYQqqq7G79vvDpDWEBeKsBbjPWfShG4gaPpYA",
  "key5": "q28zZxygSNJDRjn6EunaQJqgw8dK9aLvmH2JBRCiw2Mamv3ScLfKBH2hXmginb1fYYd2GpWmwKe2pPNR9MpxHGD",
  "key6": "miDpHaRyP67VUhQrG9iXJ1Q73XHhEmBHPkProWShEyKT7aPodZ7nVhFyxQ5ypFKsLaFZHots7swxxXZEX1mwHH1",
  "key7": "4skp2GNi1aMJUnVR3KtbVrQNTsvQ4CPKdzbFTBsgizmGi4t9gbwYgspk4vRw3woyqaPZdeamJ95pSrczBv59Ts7E",
  "key8": "3PF3uLXvo8o79Nqr3CT7G4yhJtxrNvdG9HKw4rXWr8f1cJxU5UqDnEtdRWhYUWhrMVEKDpg3M9gjgvckSfxbmoii",
  "key9": "2z8sBt8oT2CvCSJ5M1tXq3FUkZfSYscGT9quk8z8mbs7Q8HHejaG2vNneRBpzL2PZSp6TmBZ8xqSP1F6nKzqdfpP",
  "key10": "V4PkxFp1ixvMU5tZkGEWPz6bcnmSPRLXEizcrg7WqMVe973i6kfU5833A2niQUVpmjjtDm2DGJRDmhY4RSg6dSV",
  "key11": "2Lz5yiVpaeeVS6YQMPUz3ibNtePseA7y8jXkgsp51MibzRLc2Ci6jtAtoMsjWsiVssdWoGCg9N2KFss6d2jXsbb8",
  "key12": "4nqa4LxCQTTC9r86oJ5TyB8gzKFGNnroPkWV13i45zq1fcmaxh3JYfYHr45NtRbjnDrSaGB9y9VTs2aSvSnyvsp7",
  "key13": "4jfXvRxzzjL4QVmyUnPXPyLGbVcGktXVohPTeMZA5PyxaazkyETFtuJ8PNHg97ReYkfmymJD5mSHNZrmfcU5nHvn",
  "key14": "4Bqha5EpDV1DJ4hdsov8TC7zzN3mcGHbbX6uYvH4zUBQPKz6UMqGPF7yRLdQkasotQc4n5d7rFNouJVJQEZZ1Ds3",
  "key15": "7SCoxNr29qTGrvrTp6oj8NPiVNRAfsrVnw4jjayw4eMNKZrqszT1gE7V9RTF2R12H9rANf4Dr1L9om15pebNGPr",
  "key16": "46sTYcqUJmQG8i95w1F4VTbDAJPJjmpxVtYn5rHY1znJaqD46GZsjnBNg62jvAPDumLi4VZGSCZR2hrptiKikJ1H",
  "key17": "4aEqGpVWcffY7yzCiDWXxfMTdMyMhkBUYoyHgqJaFsfhJun7bAiVVrqeHLjzGDNLJ82yVpTvZAB5sAUgdhTpKusc",
  "key18": "3Lq77tDRN8C8QEv37T1qZX58cbJzdz9LoTmq4g6ANAQHF1P2KvzLJNHueR3jRXrfb345tfsKujVaisg11xkFzgTG",
  "key19": "Xt6qy8bce6Jofyj6Ed2tXRwGSxkuapDsi44uDUaW349PtWZ5QW8QH67UmjYsypbUov9QWu7ZnfaFNT69TNZthqV",
  "key20": "2dv7pbaHwpmj74RMXjNvob9YNdxMK1nkzhzmvEvqNen3JMr9HvA9EcfVhDbYyfUE2qVpWkwJapQuWjBhED7Fmtxi",
  "key21": "4Q5X25BauKBzS798zR8ggJ46QvxoWmBhmT4kSWRHRjQomAuJdePNfAZ4hqcVQ9tVnXPdrN4mVZYeHhQ5gosSQXYm",
  "key22": "4iWJwBAyj79az1Q4sgZcFZDRjRhvSGQMK3Sv4d4c7F3b4CLMFwJTPfvdhm2btR3fTacppDhBPC9BBY55EPk65P1r",
  "key23": "3NkbynLVDmsPXjoFtkTtWsx2HVMFPeY5xVfmP6QFbhCrggc9n7JaDDumFcGENyeptjkxz2XDc6J8mXodWMzjsiso",
  "key24": "5RJykTUivNwj4qSiuyzSs1yCVPh3wVxsTMumGmHMABK1FczQPSifxEMwtoqDxXerRp95RCacDU4EcwE2ux6U1NMq",
  "key25": "2K3naZxBv1iqmnt9cAPE9XiCseiMZu4DTCdijWhGmgEpTybzZBvMzHUBECYEEEnPBtahktFUtyqV46xXLUeTnaSA",
  "key26": "3su6MJi2HaqbTB1YJwCYCcxgFSD1RU4PmFndM5rkZ98PRm23YALwSdfQrDvqDVSELKFbzZX3yV5kXhJciTM2VQh6",
  "key27": "5EM4Vphri92sApgoxsXEhMsd46tJmEMuPQB1zZyfKJbeGZK4284iWxkemeHtogZ1QhgkV4Rx7uh3PbpsNzXEFGZD",
  "key28": "2qA2Wwrp7KFStHLcmUxiefBsmKs4yNsGiwQqFCRqBXzkgugFtVPToa9FMa3xCbKcYq8ecKM8dJtBPLkhHALSJbdE",
  "key29": "mvzfw7KD5E8neWFxhsNHWJdrki3cTG8fioGYqwJBPWQhsf8awaXLQYCp6ic734Xbc31EPgZaXxFGTQqtcdd4eRL",
  "key30": "4eE3zNfCDNunubk5ZHt8x3Rf4H1v17WuZsnbaSd3MPbonf2iwu2J2GoWwk4ci7Gt3pi15WF8ZDQicGa6rQbkoKrN",
  "key31": "5JkFsDdugCFZrT6DREVbrseWSUDHsfmq4jE87aUkYrpvrDQGcD4AMdLsLRBQNrdjDm6HPWwPagi98Tk7t1Biphwo",
  "key32": "2rgcfu1EyLTcbVgTsM92GrTAGKfPJz1P6cgQuhWWikwRjTZJTKv1X8J5bLXggSDkHo6SYXAZUWj5amqvuph5Tta7",
  "key33": "WVci6gCR6QusMeEUacRTwghCCxjNmTpkU27J1M8foNbRC7gsWpenjf8L8XvnTN9SdHuBYtRnLLVpk3SokXTjwki",
  "key34": "FM5R94S3i6MY5WtbqdkbfucFB8wd35s6XT6tj13JpK6FJZcPuZ5PFSQ5sf8jAgFRT3VCF3CX6Pfv2nUybzj5f1m",
  "key35": "3bZWYf8R7rs8yTcxkkzXFFN2KqSxkGGheZG2qTgKc8Ac2WrPCt1Ww2m6YVjezi2RPViKJCG4rYveGDXsGXyvpRgA",
  "key36": "253iZt1f2F6bR3u2X2gfcYW1H6J1kSQVGkSQZ6qd18tDuqLr25f7GJnBQZwdHoF37WmNG1dX34JQ3HMCwHcEJvuo",
  "key37": "29dkN81NM69V2HSf2q7JaJKpXfXRw2rpmJeChAHFV2TgWkbSSvCgZeeuGFaXi3JwRMP1U2ibufbjkiCUPoYrhtwA",
  "key38": "Kas2ewqHQXuQ2rhkLu7kUUasm8SURJ6of6LdvkMY3Bf23mpLHAo5ng5Wwu9A5GaUdrinGttcyRksUGtJXt3g4j9",
  "key39": "2gMbMX6mEYpbu1iKafjmerZvV9meKK67AVp7YqVjeRSX3f6qGpuMEfzuo9DAhBqCW4TbTNnm1qbHEAPFqwT2FEgt"
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
