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
    "4ZCcq335WvzGsFVARAeh7Nrt7P58M6Pq6fnNdHP5P1ykaDdTkchAtBZGiL5LxyegZ4p8BJ2JRrhcBiPxKmNbD4ZQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GFBTmXh8qDDjLor6MmfFpmMD5mBNKrS7fUzMsdTyYeiZtDrQGWuHqMRg3H7hyDWdBz56nE744QocwTKTr2L3ZTe",
  "key1": "3Q4AAgHfEeLZBqzPuizDHBxMkn9fDAnQpZJJ6H6vQnKStQty8MrqzYknGEe8MwX8xAAkVwrRAYhscohHrLZbR1Nd",
  "key2": "319narx8m4GKKFmBLdeDCfVGbA72CrNs5YgrPmMCyj4bPSdj36ZEF34qrzXKjuVjBR1g9DUGVvHEGHMqQv69Z76a",
  "key3": "2TPjsvon8baFXD9LUsgtGg97UYTmuFzLt2jzun5LiP8XjTkEZj714uMWuLENZ3CJSVNYfymaBmMUeSjLnw4qfDQP",
  "key4": "B6C4hSWkzvWbLdUN6hWZdJPKhZ7A538wQtYZGRjhJcokPLxdPXLJE2jR3XqDYnzfjchJSFmDiNFtVpY9JhzTPNc",
  "key5": "67akdQx57KtNqFeA2zyNCoGazKdMHwtxXz1Bske6EW3Gkq1s94GEWGRGvn6QXZ48DhpvtZeJwSQsr9du8m5AzDTM",
  "key6": "3B2QqjZsqCdWbiRsg2BGMx2x455AhZZxpnS6zARtyjdW3otBzmLN2pkQTa7AtK8TVLyFaAJv8X7Dc3eY59QBF2Jt",
  "key7": "MpT1EAohZcmtrZmpJsnD3UWydL5gbKAqccR9bFfKJnfGdi6pRc4YEiGcWjA85pAA6qV3bcnCm7H6PXwuoYZ5Vsg",
  "key8": "3cKtRCLX2XPrNwKnCFyBFP7jCJ7LHNNK6M7LTaWWf5NLx2m2SrC5BnmE5MpPRmgz8V56CYKG9zaDfp5NQH31Gp7n",
  "key9": "35ij3qFdw16tePv5WvCAikzuTA4ZbDFSUfZeXthdtTuZ6EJADY7EkjArBJ95S7X2YSKv7QSDjjRMeEPvMqw8htF",
  "key10": "3rZQCYcjtm1h4zy51UAJJUGH7B46rPnZecaofeqMAvJaZ8WKXBpQFr3F5HkyKPh8VVQVfsrE8TaUMBae8ujjaVkC",
  "key11": "4f61yMnrEwnFaLTke81w3onG47JobdkRMnoHbaC1hMEghGwiFTq1M8cd56gg7VZugcntZE5oYTEkb2Wj8D6RSL99",
  "key12": "2uEX31AjZqygGX1tM9gZER9UyprYcZky9rk2ey84oQzobRWkLCLNYquRkwTa74bHvTNj1qoFQCMQLywLsWEduMYF",
  "key13": "5x66HLyrUkH3VGJoHS4qvX1xdXfgJempxfDACqFpajEi6B7eoEW3MQMiWfQAce7nSepYUKmNp7noAybn9Wwm1We1",
  "key14": "3YjtuxmmeTHUaecY9eDwwbFsvgs6bG9EUxjpSFABCFjoNhDhSpnGf5HxAdR9MKwocHyS21tCyfp6Tj7kwaiMzXxd",
  "key15": "4wAnQQcc7QPb8S1Cqe7cBDA9DGoaWVTVBDtphk2iQiYGVEBsurPUTRLZn3v8PvZF9kSXWbqTgMQy6dPq8rDrGN5q",
  "key16": "55nkjWx6zRqUuX4YGzdEAaEdqLwnmMHk68zasSD4z9KKX1zDR5jADudqKvpjM24nYg7H6Q2f1qMakfdS1pkuuge",
  "key17": "rkcFYPtekYEpmkaaDMXVBhd8rTvbb9KJCcKiGLGeWDcUAFKzHEKEM2yRco1tvyhPLa4xsg64K4kmpe3VWvXCP31",
  "key18": "24A7JATahc6wsFu8iFcGPQgaW7bUzsQSt9dgfMszUrKpcgUguuSLCpC3nbW8JUyrFtDjTEXZSyuhE67wg4BUGJwn",
  "key19": "5nrVSnMKTG9mYmZqbVyzPmXSqLFm2F73Bd1i1YXvujjDmWJv4RUkisNXn95uT3dzfqa76vau9QJz3coVvQMQ3zZ3",
  "key20": "35vSmD51FQZb7H42vdbpM2a4bXUnQsV61nWRYfQxJNBtUihZubgbym8ryq1B8zdxHMnvw5KaW3qSUKqpYuamgLgd",
  "key21": "4SrmQ82nxoy7iL3duQ6VbvJcLEXuC4DoWV5oMZEFU5zsHGgnjVTF2UCoLBNGg6W4haq1NTMBr7ZcoDfE669k3qfN",
  "key22": "638JS8yX6zedDC4MZFxJsVg6EPuSoLbr6Nio2baQnxFhhM7zknR5S2JHZJVZa4VGctMw7hCJ991Whxyz91D51rTv",
  "key23": "3khdS6GTsMiS8NRfCtmD6pWPUxRQA97ESDs2GEtQCAm7rCfqeQeAeGiBbaqXv16insrkKtPp2MpwDZDHZD9tKKjc",
  "key24": "2EnWWQni96Ugq2mE2DwPHGu379fSbnLUZKSY6CSpL1jNRPPv8CXcXhsdL92pHM3JAQFm3XteMFmtAntV18PXBtSA",
  "key25": "4cSCDPoXhLkUYDWA8uCwmEZP38uDJL6Uy4TxNZY58h7iDJVskcet1q7EG2Yp57e9fJrvZFUsQLXwR2bZsWzy7z7U",
  "key26": "5ctUYkeRxp3bGhxpuMrAbGUQuuDuLLpEsYseupNSdfTWZFFcfsAx2rfwTQuMcBpdwMMPBomzse9gG6oXZAosV8tM",
  "key27": "PPAVb46RfyQrG3PPsnfhqxfyXgKuXchANkygCgMzux5vhw5QBAvn1YKhWAZ6grS6Y6QhKCfRaoji3Mfky3ey98q",
  "key28": "5ZzUzdnXLbjnQD86z3Zej4bvrvjDgqfguA2hVAP4WF4qCdbKSVHUBMruQmwJqbF5NpepPuQD3ih6ipg5kKFhHwPC",
  "key29": "5PGj6tSrsGmjpCrLpBC9jcmkbG9SwUpe6XtMKfpn4uYE8rANdD4ueaKbKDPo5MTEyqLZiaE8dpeozgQqrW12VdVm",
  "key30": "3q1GRmSzm3Snk7vWwMxNKE6zskC5Wam1PkwYrtF6BaaAFi9okTuQvwrgPDTRbso3kpKwoUHZttwknd8j2bmJvbma",
  "key31": "3y89Vo9snPW3MHVPEY1Vu7ukvSmbJDFH42VDf7hyeHUnHFpJthAmDLw86WD5VeH5UoSyMh3n5XM4sNuwjKLaN2kh",
  "key32": "2XF6GoEwet3jxSVMLWVM71Wy4wd5Vniz8ztSX3Vb6FV5v4gytXfBPgKoiWQbhMBYSxdHny28tvtwaoFuKMPXE8ud",
  "key33": "4q3TJCouJosdVr2niqN2nmH3S2Hbehn58hG1P23gAobR32a1SnCGuwxXiHw9vLqdAfDXjJFw5abUYmhvz7MhsDfG",
  "key34": "2twQtsJtRrixih1SneDHGWeGa17F4VeRVScWPktQ97Q7LuA2GaSdESnW12Te52kYs3mcL8JvAdUyBTsdq64Afk2J",
  "key35": "53cfRELuuANSZ6qkaowek2kz8qLXtV7bcRNxeaqwyBuG4AcJvMkJa94xFY2NxJvHhABpk2amkRTA8hAJ1BpiWCsT",
  "key36": "3TDGrufesyadJDfFu2eSrMfNbUeg7KbnyPYXEaDJdSABCr62jidA6tKXTEDMXz5PYZcfiJeFq3q8T7RLmRXEDPq4",
  "key37": "vMCLXGSchqVHTti9spgKx7V3fmepQXPm985fwtjCxpZCBACC5xmcigyGYU6N4DVLbBY9KdcHJgYt4qWCiMzA4hB",
  "key38": "4dP12Kx5Fr8bb3irkAkzhxX3VcKa8CWKS5tugtADYutftbwMnL6Gkw3H8NmD4eH8M9r7SyYRWNzKegpZ8G3MSFUg",
  "key39": "5TW5isTJVKY8EB3T6kGQTPP2Fcu7PVr6YqVRGtEHPMgUHcpMsxYn2AssCeA9tLqcX7pe4AjudHdYbt1ioXjJMhf7",
  "key40": "2XtvUbvQfbRoA4GkqfasW3R25JF94k1M8MUSncNe1REyLBdukZCMRcvnuEsbPmAWYDA6WgkG6SKwCyU8kf98MEpL",
  "key41": "5tk1eKPc2yc62nriNEWuCAthtM8RyuxgBCsSqnjo9Dth6a8qJLCRutXAiFRqEuUqgbreodWgEsMS9nsMHD45ScT3",
  "key42": "5uADHpJu9ghyLRGstVmKAbP76tC934rDcyzzuxLAeqeGmFGuhqwzjXawJgyGYiHfC4mxqikwxZpKt9zcTC4gf5Fq",
  "key43": "5ZrTFFd1oXwv8xN2HLMUzA1PEE89bacZzTHvQ1PmwNqiATGbkQGJDoraGcQEHox1bTWWoudbz5f4qhbeVJGxDcj",
  "key44": "s1EgFYiHSkeg4E9EVoyP24otczCkcVZ7M65HYWz2EgzMZwgkmgH9UnBby7dF5Ymo26bovj8hS5RRuwwyWM1eGPX"
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
