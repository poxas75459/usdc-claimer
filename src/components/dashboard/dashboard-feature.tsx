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
    "5Ln5FgYfM3WsGiygR2yfL92TVQuKERULbSWnY2f1z15tFFgEudS8iQHV31UTErtCy9MLJcZwWZUaPqEqUTFcNNKH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Xy3L1R6WwznjzaZDA1FKc3NGMxYsWeJd8U9cGykp9XT2aZHepDCB5STCEUAR28dmFwtFgMqqgFCMTZnCVkeVstB",
  "key1": "4hREeBaNgBuc1PqmC8faSk5GuPuoxVdctZRZ99cb3McdK3YNu2ptUNBxiHSgZdABBTJqt5aYfeo9uonA17TenwQV",
  "key2": "3sAKU9bijYiuRs2bv2STKGGhHeBuxVoD1iBwypdW9bE4EVct8AjjaCfHUrUDcMiWHVXtDoVbhNn1XS1UiH2R3QUW",
  "key3": "V7yLPDrs62jj39SYmsUe74uESYxmUXwVeMApD2vEyAqR1vMcyMvadgexTzrFD4amhJPTvcVSCGBgzcCdNy4wu3J",
  "key4": "3dRV17PnwoddCJJEHnczDehKBV6TRdzXQs3xuq66SZAhMjQLtvhoFs7XL2Pm4euXtENWi1Za9vycenhvGjYc19qH",
  "key5": "h5TNG9UvM4kLVVL4r8naybZEyMpRyPE2HVVLRiftngbvzSS3v1teeGGT62RTAcGKCrofejvREKChAjvBAGYo3dq",
  "key6": "TjMqGmsWwRYZJRHSbEaKdRVsY7Q64qhQYtDaEVWxorJfDZ5JvwkkyWmSbLiFeQnF5an9mYSFysYjx7kYrFT66sd",
  "key7": "63EWGLzN3sHAU7b3rFwFED34zq5iBqPgu8D3JQkjQdKgJRH1pq2Rh2tiWBm9koHRLhTwaqpcWYLNzPiLV8jUThju",
  "key8": "cssrHuaUnbHMhVyjfPpxWG66Vsz44uw8q3AbjBFM2rmd3TFb21DhsaTg6YeZBMejc4WMQCEmhfRXzLyQAiZj5FA",
  "key9": "2vaAXNfcvpWDcgwTpyz8eZRd7oA3RpZgPszUVfUHBFwTzWtAAUSwUnL5scWM7B3Giu6QbMu3bzbXCtu4Mz6vfesw",
  "key10": "xVi7kh4TG5KF31MFmTBWsikAt53dfQbkutcnqwniUpqr676RBh8WyatLdpT4nCiHp1j1PdzAQ7AhyuCPoArZZhd",
  "key11": "35RffXVU3g9syKEcED26LNXWgEhPMcwmt2my9UyrHiNSRihFDQRyp3ur3ToacZGqaZctGztP9xTjPFDbuE9tSbBS",
  "key12": "4TdAa8sXATMaew3FNAfoko54hig5nDN79Up7c84UkmTffVyRKf5Yc3QXibBCot9jmpyNdfFFsFdg7UjAtSFJAT3M",
  "key13": "4iHEYSUsToAizDtmX93JB2ETmddALN6hXHBhJiNzA338zXK6Yu38wdWZhLxjLwQ5eLmef27dBeS7Vh72XBDh1Wrs",
  "key14": "SbhM2P1uFjgFSHTrC9up96ZEcE7m9uAKzfAyDE3cJc2Cf7retRP1q4aHwdnb5PwqbAvBU8JPNkeXEoq9ugVHjQo",
  "key15": "v4je1QkToqQPWSC55ovGjKZLJEWHTPAMmf8eymzNY5FaeqECvd9AaeKqTisEvDt1juXHPqaMnBxFGJ72w2dcfof",
  "key16": "4PWrWMMoeA26fdhHPhND2v2eKDbbJ8Te7f2pTG7wwEzxjmwPDrAbKfozPaAfsweg5RrSwbu91boEZQoPChN4Zriu",
  "key17": "2GM24edfnHAhisKfFA3ERAFshR7ogAYUoRZH3LERWdiHoDGWqMtEVyY566X2UPrrecjH5mRkqjDofh4BcsUX9juD",
  "key18": "261pkvSfxUKYuWZkP79S9L2xmE7HehrZTzcqedNKqMb7GT3Mg7jjuCByDkEMzjiHUhKftGDgKcmf56rDocXU6vfi",
  "key19": "dN4UUQECaPbabeeKDbAyBCjz4RzLBRxYzqHsHGNThp5EDR6V7CCmVSsdpyn41VKpeGSEmhcaBCNXtbRv33zDpBX",
  "key20": "2yAJ6WUucFTWsw2NAfKCRTGxCtMXhtF5Ro7uJBsd44VgkratYGYrQTvziMkYvVyWWBUFsFdCKAjHJ3HLL5PYxN4x",
  "key21": "5YnsjHpnoLgShRmDfxvSEJ7T9yFCTxwQ32DDMGb8e3hWH76oteLdkxKebkDdg3Nm88kGK9T2HSQAzvBrSCjeBGmt",
  "key22": "vZk1hE3CkTgKpsHbD1RDXKpZAhFAEuFfM86tPyC4Gf2sQ7mBbXaenQdoo1h441GmMarYKTk9hRBJsKC8hYvdsVa",
  "key23": "5SCs9JFMaQ6XSvTivUwNkKAohenVJc2RatTKApE54S4UFa9XypLM4QUxau6eTS8kEUjH14D8cFM7vRvnAiLrCekP",
  "key24": "4jrqgRjQEiQHG1gd2AeNyz4MWu3CvXmySQedaBpmT5Q6SoUxJYEmaPvHuyJ9ASd1uHg491QrzQLTdLgzcRm9tDyx",
  "key25": "4XaVbDHqmUgXtYuT2J6H4MFEQXrwgWDWvTKGhm6LTN7ERcMKxKf65RKfVuDQmXdZCuo3h7X7kbVbeL4ejVTMEH85",
  "key26": "4wH39dB37YEHkEkrLU4iJBbAs7deMkiKnS3VMrjMzcXqQK9SPYusqcWpHit7hoKU2j7BAURB1xQGjKwxa7RRGEmS",
  "key27": "V82osVp9kVhcEqzHFkiHnqcPtsuXTGoQokWuzK57AZcyNzmhAXU2At3VZZMveE6jL2NNX2MZG9smWUUzuxhga21",
  "key28": "5CJ3GtPn6aAyvWRdEdkzYxZpFhMYbmQo9S6mfEVfRZKqhPj7fYSBYnWgijUnSDFy1EGzWRrU1LVzj5MhSfgY5wTH",
  "key29": "2WZFt6Ce5Vj8DpTutN1DjEjjFyBoYza2sCZrVApYMRRg6iyHstRQvpLugeFjPRTsiZow7W5mG6fZPoMfmZ82Usxt",
  "key30": "3WhC9NNFFeZiFS4aGVmYXNx3CEZN5uXeAe1LU7VtvSXJg5G9tZ3EQYcHkVfFGmZoxAe4kmwQzY2y2bRVKzFV8v2q",
  "key31": "26buknMfGL1qAhMWJ21a9qukfheQNNCXR77oXwnUNExZ1xk6JhncQNh265aXVHvKTKDonzt4U2ZrXTUYGCcUTXoQ",
  "key32": "3rydBRSCviTGfdV3QV77SznzkihXZTWeimAza3bMqBvHTrcux4AMnuZLiSN3GZf9PpwFP9SHdrV8N8cMAXnqddpY",
  "key33": "4G5Mrz2tnYczG3uVxrtqnFKrbqPwcYKYhWwUxBTTa4xbCsLcUKMJeG1MMF9bahpxQBWnj8HJP5ZPxB43JBPwXno1",
  "key34": "3ZwP8ScvUzRu56crARCH287FjUU8UYoVLeVmQs6j5BCkX8NCpNx1iskhByGLQo9Aq2SdJf9qiH3T9WsaYNcoES3k",
  "key35": "53a8rc45d3hZsBsZGay6aS5xATMjWKRhM3hraLLBcnMe2X2gzQ4VxnoUMaVFCrAAbFZvVcb4CRt5Tewgi8oZc8jR",
  "key36": "5g5PK5M5mJ8xR2J8UMbD91A7HkAQtthcfyo6MM3kqQkAbDfPy7MFufYJJy8WCwQuRc5HUV4BANhi8VP3CrzqUPFQ",
  "key37": "5bo9EZ1etAUX9inKPWFewmFGot24mfe79qEZs5ivZwpmr7UGwHCiKDWpgtNgqYi9tKNNHZoxtjQNngcRJ4YAnk9n",
  "key38": "2SL9viNGwj44wamzCtFf5TYEtNCkkGS1n79LnodFsLNnfTCzLF3PaT7vNn2W88SkQvSemGhRBakTrxcpPwWnCgqF",
  "key39": "64wo5YrTG4bMZ9z5RmB9UMypvQR1yKNF2SNz8iYNBWZbpoALfdaS81ZF4A7bfEsfeFppdHJkqeQ5iDCb7j5fwPF1",
  "key40": "3iyaHwH4CEENMpTRLxJr92HuVDRybbjH8dYHpbAznzRWr6yvo8NsmnPJBKU582hGwzWA2iK5MDrCjehqnFHfBbpN",
  "key41": "LJNGc3YZvuUwLE1heWwkLwYpLBfoATU6K9GCHYBpBnxZX7NpJ7XQEetCkhDX7tcQfQgA68VncmTbeKFDTPJaQTc",
  "key42": "2jYcfkievaNxh6Xpvg5fNr6rYsrEyo45cARxKtRAUoFzoyiu9fdknY2ukmJ9bbqFrYtgGxqrZpGzq4Rt521TiM5X",
  "key43": "5z3kjqmGNqxK1r6fRoH9J4QB9bgRswkW3KjWmDLmnTjiRSs4dRxn1X67BdBguu9EnNTNjwoFDT1CGsixjnERBMdg",
  "key44": "55bwjeEUzpwFVpevenZge5szLZSTWVMTt358Rz2bJe5kDb9iXsjFHcBZVQcwQH85hVAfcCUA2rK1DMe85SY2Pkz4",
  "key45": "48VPSWAFDqN3ANFn6r8HJMeMeXDCL6SB4wCTizaa95FtFaN3hAdKW2hAZ1FQxSnghKSZ97S8XqTYahHr5LwHM1uE",
  "key46": "5KtyZtErs35Fo2zcGF9vwr3HyXrVAVSnJ33FeWErHcTsjQLcxG5vcMNvkShpzyhyrKER5VSKmfUJc8FvgwKdEwTV"
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
