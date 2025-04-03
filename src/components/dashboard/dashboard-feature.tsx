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
    "3s93Wi23t15WZxnRVRvmT2pUoVHgNBKSFm8VqELnhFaLuPhTpcs77bsiJjqmVCjZdfCPbm441FZ6XaEghHqutYdC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CKTfunLbDoYBJRxFcpRhKGoYGqPFFH6Gr9nfdLjJ1euZR1d9Wz4Cfod1J1kWHcvnziyEKJDML2rbHwNoiHEjnVg",
  "key1": "567tV1Fktt4oKAkJxqTxxaaRdfdyxjLcsXXeHXxm5bk2sBaGzLEpcbAAV6WZyvaTXjSHd4pUFtZkZsJqqQdmFfSn",
  "key2": "2LpDvgN9jJNbpt6FyL8YsXDZrYMvyjiNtUGjLMDfZxREKSF5uz3GyXJqqg7kMP3dvUZ4Zab4rREU9oRzSWtHh2Ls",
  "key3": "2Xp68XrYBEQi2ihD3qqCoiZfR3QSkjQmcBkRXstJHYgy2k7yh7sutuqV7jHqYWvfNgXMTuMHPixEVQj4cVzKyMWe",
  "key4": "tjms4K3sCJEJCqmS9BqcXaPLpyw7H3Egvaw2cf9UbmjUAA8UN3Psk6fbAQbcJZykLPZ5Eims6czy3JskUqbwsRA",
  "key5": "4nEJ2DUVURzCJgUSMMCDrQvA8pXmppTkgdw5g2StgyzNCNns6migiYxoJ3H8xwSqy8KCYvF3hvfaWVoZVUJPC27k",
  "key6": "2daJw3qomkRS7b4Sqo1uqbW45V86oiy2upFwzS4sF5Pr8P8MmAxPkckwPdp9bUrANcXBR6pprgmUzWdSahwV7opS",
  "key7": "3HhTq1zXKaQ5LrcDtsK1VqhJtGR9mThVPFwkQFq6fwE6BEhf93mCbLGFQRXFkXarD21TR5euGagoysB71mQdVsKY",
  "key8": "46Zv4KFGMVhQ8gHpfrZ4KTfTX46pDT8LcmcXqAPTcCSt195zsWh2Fsk1zR8YwW9uYFne21nXqpZDtxBfauNzmJ8A",
  "key9": "mHFRhz4PXEup8mZxzte6NsQPTqFkCjpHDKwe3LiJ5XsdbxePbC5jGBo9TzCSG1gJUNGx6eEHV39Fm5k7yNtGBGP",
  "key10": "3GYx2W9PRiqKyEZ3wTg1Lj1SwNW4jk4xJEL2ABXxNkqXzRxth95yGpTgnmyZATepruAfK8wcg7khFifYeprPjFmD",
  "key11": "3D7wDxWdfZ8kJg9U6JFqZZfJjV2y4iL4RU8X6VFrNsuwuBPSMePj785WAVkcoDaX5EDXRxvGURQ6nq6s5nZdPSea",
  "key12": "XHsDsKE3KCZod7hVYwDDrV3H8o7BybgXCUTBqW7yyGZqhgPfrs8rJkDich6LjCT1DF49FBmrcp9zc4wAnxYazqr",
  "key13": "o6mwtZGVCyZECafnV2TB34A1j5u1bcyqG19EMXtdHEJBntmN7GY8Wxyyj1oMnc9hH7dLAxE7zPo6ZeRZoGCDGhd",
  "key14": "XUTjPgzqRc9SAN826VuUPfqCaFN9PTUhx9zy38VWqdzpxZLuPhhGCVjQJsp5UxantD2VEbxD4vb27reM5h8DtTC",
  "key15": "3cF1LuhZmjHL4fk9LNGV26pp746JSzDPPhjVX3WEEenTkpdZkLmx2JVhTcew8WUh1WFXc17LJM3nejPzDL5S1Cyk",
  "key16": "3czRom87Az93xAsVcy5AmM2KmkF5upkoHWDwXhLt7VTWKDJzxf2SLepsyZKhuQvAhDhV84FJcBB4DoxYKCCg1BGx",
  "key17": "33ygKngWZxQMaeBqfciDBotVh2u2wSucNLMtdzvKQnZdChBb3XfcqzSgguqHYr1XQqTdK63KeW7SjictN2Av5BHg",
  "key18": "2aE7A7Pdz9rCP385xBK2d5WjrtbDrriPuB2Jz3BX27Vc1NGAm5cZ3GmJXDPPgu7X4LHf7boqrAZfNmPT5GMt4Sbc",
  "key19": "3RTk9t81pTvmGp1UzDAxCK4qu1acLAvPwQZQqbZ2drQYG12DzZsjF2ugz3rRbusebpSVusc2hTjCMLGDBHu2mjGz",
  "key20": "W8nEepEbL2VX3kqWebGAiL8vaPdTQa6XuWbw5VsCu6UNffyXF2AmzXFgLmZj3B1tgbusVMGC2QtcrnrsrE89BEs",
  "key21": "2q8e4vtYCMHbxX36BZMBWBqoLebYQC1PJ1pRUirhKV4fGJrKRzjCuqnFUwR3v2ETQHpC2Lvp46Hz2h2S3B5kBsCf",
  "key22": "rhYb5XVQrZZ1db8s9as4aef1aPJWXNefaHTt1eSfrio9p3wxXPYaTiny5LoSDn3fskt6cAyMDc1yiETWtnzCGjZ",
  "key23": "4yQ3chPrLRtHgfnRMNWcYbfenZUfvQGM6ynBCwPWVAmEHRRDPuaSihFzuZ5vCWLTdYSQUK7PWmpyEwCuJbFYLSSz",
  "key24": "5PjbkEGawLqn8QhsPnravfMu2TJxgspvAAhAgwnaYLW4sjT2W5m2w3qMPdwG5pwgcSJ4nk5pHyYKQRb9fZat1Cgg",
  "key25": "2VLsNee18p86waycWguqTF2FrcFPH9cWpd6rDuymwUUjMZciBuNGcUPStkjjfofrGUeDtrnxV15DCEVxd9H5fhsU",
  "key26": "hk8maBhEk4BQpjSbevtHkreDSJuDcNFqPnMDzjbtGa8ne4z22zQD38tu5d44ACY3iBjKuCKVUb2fRQ6RBZu2BC1",
  "key27": "3ZyNgko1reiLtkDYz2iQPJoSfkP2bKuAyMu6YryXJp7upSS2rUs998qDUuAdStQsLfyYFbaUwNJr3KH4z66C1wKv",
  "key28": "2EhJhzBt2h1wrgpccUHM8MSKrtj9zdfJiF5xicKNYEZGtda54RzGrcZo4p6wSgCcpe8GnLzajoT5Y5Y3qKvk7FAu",
  "key29": "5rRkBScezN76ddoeGZSKAWGqbHvhMsK4op85NDjysLZVsEBP2GupWZ797qW41gB4bVvcBEvQWpvSGdUNPsv9DPfT",
  "key30": "41snrqNKkTF9jLK9oAk5knT8yP1ycBSkNr7aukm7Ph9JEw8SKbz2JPVe7aPg8L7U5oyKjQiwkMbnKEZvuH82W1xG",
  "key31": "5ETkqckhvgwsT6RgqFPz3HPitNTcmkkosTLoD7xjTtWWjgSrf3eDyByhfBkvTccwH1S2qzteUizTJZbGBqJXqv7p",
  "key32": "21dX7Ptrwvz1N4Eo6VjFup65YcZT9wNNgW5n1br4BjeG4m9PMHrmhxczPefLcWRLhDT8oRoRFBNEUYKqif7NQwHU",
  "key33": "631FFWhUxFprrdJPqnuGfw9yjNbPhU8nQWEqQukrbbLRR9ZPCJ2DcQ1xfp3qCwodqeEzGjwh7LNyoqUTM4HWgz2g",
  "key34": "4qeJMNbHBDTh9R58vcA5XxEjGAvJ3z3A5vezecDkfQhhVrdZ72WB4XjTTmBehCKN2fjwiTviZwM6zRzKyi6tEQ8z",
  "key35": "T4fNfcz2MCTgKidybUJzE6Ykegvu4qAVLCMrdqnahPuYiC6G8Xs2jtCJaL6H5pE5QCWtsAFFj1af7Nt31tAtb2S",
  "key36": "3msJ48Ev5SYjpEBMBFftXKgjRePDgZ9kqvHrzAUAs5kfFRccrvzTUt8qsTDwH11Nj7FoQtFWrozXd31ArS5DrQMH",
  "key37": "3AaRbGiTWHdC4KgzVR2ohiXcAyLH1kaT6x4CHhbdyhdZVVzadVJpCLZA4AWvQg8Kt2jqrojPJ5GfwXDJ3EDrA4za",
  "key38": "5zEVZmVkuwifg2eYCB2Frn4274hNaqMoirvdL6XoHDmFSvXno4KyH8767YxFqQHiHz1G6hCgtDiP9dtaNsZKZeZe",
  "key39": "2eqZEY3f9CEJEo8moXaxYJhafypS3YhnUxM58TGQEmFHSGke5fv7GDtbHu1W7JsTGftKWMPvcknph68CtiT4vw98",
  "key40": "2wN2QeumeTM3J8vqaFL1h8sSUjCAKg4MKP4LaJYvfTLUgr8rC1fQXoEyzJ9wRFt5hZZPKpCkpn2AHovCuhHEgxcP",
  "key41": "67VmRFn2foMh6E79ebSz2mXhEak3r1F6BpUQsgkmkZqcCKm9u6h99t6bfj8q2z71TFCJNggbSqy2NwVk2AgRdFFc",
  "key42": "3DbTGB3bspBhpcsK4gdera1wkUz4TxtPeNzJQ4tYuoE2TmwSxerLUaBQfs9GrV949XUzcf9ZFBUUnt39FRDqSZrR",
  "key43": "jXdjWuneHb6JogzLhaWwh3kvFDfBxfcUwX5nu9p4G8AidS33rBVeukrv5fZbG2mEMim7JUiXTdAY6gfgTb2Bnx3",
  "key44": "4BYYGJQRyHCKZWedAWGgFWFhyvQeSgPuEYWusCMScVPD1sPatEeDU3eHbx14CyhSZCuYfobf4d37LqLiPt5MWHj6",
  "key45": "3iBcTPX1KwhjM9QQxj4vTsH2EJwT4XPsZq4TNVCBoqZzsdAJbhJrpy9i2PuWfv3iWdd2kea3epj2r96XXQn7FoPp",
  "key46": "2WnwT8fuWbNQG2ACwZ2KeBk1PRypaznviGxm14rUGp2HWhJCyNn3Aqd3npJT9eTNRAsuHbJpxYJwqBZSE9WDCA7Q",
  "key47": "4DR66MWGCUzzhLKNNpTpwe1EeAznkyoDJxpfFUDzPXNYTEzRTw4gQE7KprTxZMvDbuuuULYas6Dwp5yiChdcSTnQ",
  "key48": "28ji253iHuz2h4HV1Hc39GsPp5CSqs9yw2JanT8or6CwYgJW4u1pgpD5uCnoDGfzEcCV5unJrYb5MDXvxCZ2ZZRT",
  "key49": "4DWycsaPHbcFku5mAjgWCskEjjZf3Joir1Tm1Q1odhfFKipk4JGz5Vcr4GkB98fTXb6CA2rmmd3RmsQs7pfeSyEu"
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
