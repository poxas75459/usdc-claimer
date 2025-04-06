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
    "55sr5GGHQCEf1UYc5HLESJ4mPibGNVGeSghoQ72uWrGvjsNrfMDfiHjoe4wj4kYVRQLMhmCy5ZhuvgpugRdvMoXu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Yk8kGm5hRdYPJDH96LJZ19Hx7Na28CwW7HQEkFCqNXZz5iNc2Cc4buobffRrLAVoBxErwExkGj9QTbWdDnh17KP",
  "key1": "2o4xY4vPjdeCTY8un4jJeomgKyMb6Ug734MV8m9xmpV1u6RhxvGaVFxUyB8iq2FBD2Ko7PKMfF3TVuFjuFp3Yp49",
  "key2": "5pcPsraPmVhYPJsqE4bBSpyFUAGsZEfDcPR44cc5enSQh4x9oGYxFv9afXY7ozQH5AT3C7dFNfCxhnDjnGfL7rzK",
  "key3": "65SZtdND2sp32B7svhQrnbq8Q1KPp1RDttRVFapp8dkzbSBb23UPZ7qhMJvnMnwFGwWJQQ8erbZF1ywn825epshs",
  "key4": "2G9PBZ7TB2ivQ1AvYazAUXPUAZwLFCJfAsok3PmiBB4HnhDpE25mUDCuzkBmt2rN4yJBSU3UvhUBUL5iDvhff9oN",
  "key5": "3ELJxCXamSm7Knk8q3pwaceEvJmjqAnHDvNEVKYpdVb96WahWgvWokjQ8Pw9tZxpjX43Qpc1PuwnWan9pLvTAVCX",
  "key6": "o99HMfNat5RPPf1ACpjKAaN973jCDoXF7uLAYdQMMBQd6aQTWCGm5AFwaAUswJz8x8VUt1gzoodn28GBHjWR14m",
  "key7": "4pDEU8xqt6xh4pfguyErCSqBtNNaDQPEFnM4CWTu2emkTUbDrbKT3xxxAVBrxAJuY59CCqtQyuU1VUc73yA3icJz",
  "key8": "5xyRvTUn1nm7h7LutmUeEFZSkdD7gs6EMF1sntH8gSuRpVGEdUSUWGtcrprMrXdmNCed6sfxVkLYGuXd1JhTbEWB",
  "key9": "5XN5M1NQzWvgXf2L8yoSBsnT8mXFvFE3c45sH1MxoVs1ymHiqUUwGiMkyxp7iecetrXLrmqLxeGiX3k1cwv8KhvA",
  "key10": "2BUmfiMtwRmJRQSSFYpQWXWdLSAYdW8oxjeMfB5oisxZ5WLFEuLqvnigzrKWeDeNYRhwqXw2B6QUJYhEgbAP5VGa",
  "key11": "49KkMFGzNm9TuEGzey8j7coJTA9hAjf8wmazbxDiTnwMTRnqdMvFwQrppenrmLg9XBfXQSbbXJGBZ5ABpmXJ3Rkj",
  "key12": "2xafg2kwoXcnicchs1XTZCg7vjeoPhhJ7no8HwgUyTxeVYHnn9JU4evfFjif4mzCJM1Z9P3MU5dzbj9g4CDMMb9J",
  "key13": "4T6vCe31b6v8khUVBceu78oERk6FmAfrWLKnmgZiJQ3Y9qNjmZ83KQ5egtGzMPtgjbFAST6gk5U7ZfryyyurbbXQ",
  "key14": "3a7UKenFCSYG3tV2e6RfChh6nX4xvg7aCzXL5svMQVzvwhsBA3vHYKPAqWbPZpgbirxLeHh8YRdfGeKxnaTx8q9B",
  "key15": "23VHXPRpkCSbnNrbpQ2mgrB98DutM7B5xM35LaXPdBbRD84VmgFH6WmbSEtRbmuHXNFbBPHqJUjyX4oMHbGxyVBM",
  "key16": "dHQuZ2okE9UcHypBk1X2HjaFTvALyDHpMEd1LMmB9dW3Dx8H2qwjGar1VjTdbtsbCukNuMHb4XfgXPDid3kcvQQ",
  "key17": "2622TyAHSdzwCERwcCwoH18hZV8bMx3BZgEe8PuSNtQaqb9e62YFymTdtayDNbdeknaCaG6xCsoKGreDejyfbENL",
  "key18": "3PsVi8ebJx6yGRBhuFudc1sHGRsARFiN3Cn3zjWHmJinGo6uZ1Porq7trWQYgYinK2NdTPRMcRV2RRXWgq9Stawm",
  "key19": "e4UN59YDSyXUSe2RdvbdAgBmJR26gJ64MpDjeUQ81nkq4wQfu36HhzThwSGooGAcYThsJbqEhFVFRfzZtuGKPX3",
  "key20": "32v9Zq6oEXZ1YjenRiNXMB5BSXAhU7gszz6fZmk1FiBaS7iJJ1xjkw4boyagoL9dfmn5SvoKdAEKqGuAvMqqMjgS",
  "key21": "4khMQswFnnKuphYuXsT5AhTUYHnenB4d9aqqjmEREqqU9cAqzXcReP9n45ouLchcQvRXBfKxcASmNBzRe2yw3VfB",
  "key22": "5gSJvCy2ChE3ZdMGE2H6Hx3qrGeNMVxPvcYjzeSCdi33ysenh2QHK6LXwdsk1GB3EDCFps4WnmbPV4Y2wXgHd9U5",
  "key23": "5ZzuxA4f6SMEnNYrFcF6ST3R9LFKd94aVJAXuT8Yasszy2x15oczQC5ymeQjZXscaqKDx3nVJQkaxz54a7X3NjRg",
  "key24": "2JCGAtnPxnT75mx9qwGPtr44p8k1wwuwv4tNcvcDyhF2LyjFi7yFvkkKVQT1ViKsk4Uruw6o8TDGQHby7t8qgCgD",
  "key25": "2G8fZcnG417fuQcV9WDPjZzYhiqg7J9am8beidRQwF8UZKR24QmYR8nn11U2pJGoNrETUtomEHmp1Q9tCoLVuqum",
  "key26": "58DjSgWmkXU6q2QEJFY2TGAAhfk1bMrcQ7bcJPygVGLqp5hwf3eSPT4C6mzApJnHdPTSUByf1igRZA4q7NMLWHMM",
  "key27": "4DU3PTvZhZzNA8En8CGRrspooipSaeDnAd97rvrGiyNpK2y3xLVixjsL5So99rPxVhve4KS5eoVYjXWUUKW688N6",
  "key28": "5pUD74kDZYB1SefMEt8dmckinrNE2bgXeigV166eHSzn27cKkuDkQDN1PRS7o6x8bJ7L81pzirxKMahFEYZ4vnrK",
  "key29": "4Mzsw6TcNaGUt9HSZoAewuNq7sc6oLbeTFgvd4cvm5ed5CfEuj6vNJzUfLoqvvzCrpraiQATDTFMSFapS24f5MpM",
  "key30": "3oAav3UEzP3Sb5ajuPo4UWxiBrZJt2uoY8PGAEa4ypnJGtGSPah3WEPKA8Qr2bPpXFkb2rUQuRieZ5M9zkhB4WE2",
  "key31": "kAkqC9J9yf3LL3C8bh8Nq9U1MqoMRUMRMvMuXKR8SHDi8YmoJuzgTim5r2ausxACc7yXCBTAgGNQQLLoUEosYSp",
  "key32": "4D8AN6hFPGR1Z5oPoLmaSL9v33Dkjw1H3iW48EExzgTjH7Q16noNZpPWXCP2wXhKxx2Layeo5R7wBSViVSPYkcTM",
  "key33": "4PPZ1kuEWYZDvdQcJWw876AgHn2z2RNikKADYP84VEa3arvTC3Xq1YcYptJjyUQBCSHERz3vBashmYJs2AtrZUDb",
  "key34": "2bYtJkkGGsoTCRjQrobaVK1J6diGYuWko9YD7qoeKwbq59CYTpbrrpQai6gM8dSxr6uDsU7PckQVxpgVtyxEQyKM",
  "key35": "2CacMaqCUf8vSr5zrQph7G15XJDvwjo7fQNberuwUxRKvPvknU4hPF1vfRXWzxqqkkrBMR9KRgSVAmdqQHnT1BG5",
  "key36": "29XCcpHcK8xSmTVdF8JNNWsKpEHTVpi3TcvRitDHvwn7J7Hf4QX1zzJPUKN7C26mJApdmv8zhhEtzeoZiWnkAmuc",
  "key37": "4mWdHddv1QgyiRnWcQ2kcuDgBuL8fQHtQ7eZqDJKTMuV7XEtLbdkbzfqMWZR4p82E7DMS5hV7qv3ZKgskpuRYE2K",
  "key38": "5Xo5NQD4HEGwoJDY79fbFz2LwVrnt3feqrkKJtnENNtD88G9XPDas6RT2PzpMUxtDnsME4Jbe7pkHJSSddj4aKR8",
  "key39": "61CRdgk2dUnaKL8X5VXp97HAjtc9CYARaQWM4t5TXLJRZE9pZRJDcyn8g8u8yWGgo1a273Z4WdFzYreCGuFxKZi9",
  "key40": "5FRqEFdhxKA9hZTPRZi13DD4BQB83j3oiqdCoPZJPpFbvqU9Pb9ohuXUPEU91f3rTUxg7BiygMek2axbfpskYZF9",
  "key41": "ZimEqmoMia4rr7QzZBjpkWJmFN9ky8Pd51khiJkTdmnv2ryRLHPqQraheQyQaeQBWCVu6KxW2R1M5BmPvDop5uz",
  "key42": "22aiSnD5VtSHoY3gkcme8YSPS2aKFkbnLFkxhy786f5TDtV9qiFb8TpVvyjXWn7jWc4qbKADvcgS6j2F25r9MQJ4",
  "key43": "2ek5a93uUAojzutyAcw1hzuuCWnc1dKLi9SMPVJ4xCUzPpRC47PLE7AoETPTGrVhUm9Ykhcrh4naJGDohK45fVU4"
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
