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
    "sNrpst2zkJ3mEUuyg32xSVwdwF8aVpjHu2sHRS9TYs8SdTHmcH5S4Nk3rLEmAyts2TGHroPXYiH62pT93zxiyvq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GxG7LVPEBakV8T8DR7k31RDEW6mQwkBuHNpAKTG6EKv3cDd2r6KV75wYizN178XtdFBnQzJC6MNAAfcCZgsHUmS",
  "key1": "4ynd9kfb8xK1xFwMeEMDFJMGBMBu7ajSNs6uZhAMhhbgj7EREZKpgpY2GJDmKXUz7CmLJpUycsWV7W7M5PUNUVsP",
  "key2": "CU36fNcRjUV5g5uoXCjxmvuwbUCudYdrnQKWBV9qQcKNLPNCN8mzAq2JUUfPcjaw7TCStiRWMXCXTx36xCkzd5Z",
  "key3": "2F8FazpPYeR98CNS8Z6UfLwmJTCUmeWJGq3GUy5CnNmMBdCpZLKmbLzAot1oLqjTPTzUkMBMKvMH25vZaWRjaLuY",
  "key4": "5eL86EbZ7MWFRgNZ3JSnKekTrDsNaE5aVjrwrbCn468XWadMTq2k9f9pSTVmj5LJ6nGqio2CaEDcoU8i3qoyYTSP",
  "key5": "5eDGC6y2fJhTct4LxMS7JyNmbKF1s1PyQyGMNZkeS4mdb2UMSUPcrGZWmVSyPT6B3vTwe4G9K5KpX71R67w5YbcQ",
  "key6": "3KH9G4sPdtq3rjZ7dPxavC5jATicW3eQPVmjyFBA21EAPD1Fi4uNCXKyCSNNKQbni9uGT1hw23XrVk7FYEy5JffW",
  "key7": "635t4M7QffJ1TonPebBpKoJZMTo1cGreZa1kgAZsPF3FVMtBfziSAhazxwQ17dPNqNaa1i4FKJeim2qZzETijeVF",
  "key8": "qXUZbZD7hcvXa9UiFwGyyZWfEktRgJykRNzr3otUMtyYD8YC2ZZPAUj3Vd6m1aGLPYKk5pHxLbGuJLAQgw1YB8h",
  "key9": "5JPB3TBXwy487rqtTuPsHSR4nHELAW63oummhygNEqGq8XuDLfYRPny4Rak5snmVmJ9BJQKXkgoeSuioMFYGyTsH",
  "key10": "v6JStAbyb7dLPKEf3mLFdFBiez8eDAyWE3jZMsdYAp9MxHK57R7zwrorwmoyQgy77ufKngsio8gG4Nv7g8USCHv",
  "key11": "4GRy75SwUHhxugmaEikKCFSLPFcCkmmihs1LTcjnt755wgkJ7P2RRRWQeZpMSc5eniabyJYAfSmqpmi8EaAN7d6d",
  "key12": "JePNjD4Lhxxq7d1auXgLSzq9yAVT3ped1JQqWbjZ5KVdxzsHhGawhRN9QkyDMXn2K5cjoFW9pchxXMEtFGJEPAk",
  "key13": "52pXRGeyfvqDb98UZHVaeUa6LF3zVjZYoFERWEmjjHvvFVmvFofsnt66JwfBW7XJcNMHquE8LiCvrYXPwpioRAL5",
  "key14": "3g46mGb7JwSWgeakbDgaCdmecJqmKNDe54WKsYiH43aGWLfYwfRSXMexjyTdbLTie1oTzhMjjDiTeaUJ2Y28k1fQ",
  "key15": "Z3YWLXEci8oLQkVmax6cwnHniG2s5JgvUeMwGeDc7fZa7v5L5HJiyP3C2NmJkQLZW6nRdPTBT1hz41FMEPyr6kY",
  "key16": "58RqaRKXVbMNiaoYbWprn3buCUvE3Gq58D1jmfnQHfAwL4CjKjjdyPhUtDWckfDri5yWN3JFvmYJVRQh7dYpPi9P",
  "key17": "291xb6rCFFMhjJueyyFiVxFKm6J8pPPkRkX5RzE2kab4ir6UpAZqCLF1pjQWJJqXQENSxVJXDThcLntfGrPbjAbi",
  "key18": "2t832zqretJGUGuPNiVGcPma8u33SJgqHxX1w9SQWq3v95vjQPeughgmwRZ5w6RR9UCHi62BuLr6AQZJus18S9po",
  "key19": "uiefkQZmFLcLZx5RRuiCuC3qrasgsvzHsbMTzwX4njZhZu6WNwjVGFv8LAWXU692HwA7tHKrS6is1pCHbyuCKfq",
  "key20": "uKxRvhTR15PwyqpcRpwCttaTJDYXkzfZnHuTdhyGqJyNH1fTReZusjq4DWVdQfyL18BnsoQyS7Hvkb6TmRcd6L3",
  "key21": "5wbYrpuh9Mzoo2owizBeLvrSZKDn1Ja6isQ2qaDLmKngjjKgTAKxmkTysivTa5qLwiL4D6iTE4f92wPzuUk3Kzsm",
  "key22": "3VJ8YYcPRjVKHfWDV1ap2iZGwquLjHhguHA1gUqkfrHorf1Pjh1KNus2VhXQZjgfzvxDgSRc3UnfN6iZbXy4zhHq",
  "key23": "2CbDwE23NzomHepv45bf2QzqLTJuUHFdAVE7dgsDhQPCsdMmLE59YS4ym4GWFa8jYMZ69DFoSvfGgdMRT3rQadrH",
  "key24": "iG1VnU3YZFg6g3CtLpmQjnDzgwbVaSCXHJ8JphdYsrPXtNbixVb8JSrsGHredgAESLNx23XMQ783wLyd5mG7bNp",
  "key25": "cpqZk1ZEg34Tm7tgFQQFmCY1PECdx7z94KXNVfoDvUxgRFnDjXtFNDXbNNBFUZ4zeYACSXdnLCi2yP8gFCUZD31",
  "key26": "5ewNCPr3Dcvq3XxGuv1PN5hJJwGPWtmNGmwr5oYLsCJboouYPtZZsDTTWwiBurxAyPwYzPakXVAWUby3H9z4URgh",
  "key27": "5rYHCMguYxBMKXuwxMLCtZbohHx1aSDHe3vAzSApMauaPNUGMnD65uYV4XAKcqyzi5Z26Wxz5GcWdouGRunotXYZ",
  "key28": "4KLLZspVEAjo1wqxF7ESYuMTk1E3ZwPuFjDaS3CfeLdDYtcLsyVnHdp11LemjnS4BfsY4kLFd8cLoRTyzoWqtD5s",
  "key29": "34rHNz2n6oKaYXnydjyA3SX39ak2Kex9QoahBNVUdwNSLJQxJu4z8y3uBiatv9xMNHsF8aiZHsn2pvJBBUXCexPF",
  "key30": "2Wq69xsdmXLRSxCWRF75AmyPMzREFE4Q8d6ZDa6DTRY8gHZ9hjTeaJkuZYJDeJfocmUt4ifNxae51ipcEmFxAKVU",
  "key31": "5PRoBxzxRDt3JXHrn51gguvZQQVz2JvC6Detibg5mZLkDJ1uMNNLVKiSfDmaaqPQvdtaY6691Ndgkh79L7WF4wFn",
  "key32": "3sLAjzW4Z4XsfK6qTzWG94THxJm7A1eYNBpm1QSBELV8ijkL7Qa3mJZNuzHRT77t6mBj6zqbVCWUomo2r1EZAx4L",
  "key33": "2jexc2CRtSdRxFC7EwxhAWVj9mPnJKzbW95FEDgFAG2TvMkZk75DNpbq8rukEpSyjYoqEUZYTd3a42z22kaxmufG",
  "key34": "vrpShgWB3fqBgQnEiXEBXkggETyaRcQdJUmDi9w2xy3ZubBFfdHk8iWTtjVXe1Z4DEWjqf5GCWKbQwN341CGQeg",
  "key35": "3w6P7Zyjkm6uorkkQ9TGhDQHBb5Ni9bTj37yZwmVt5w5AT2hbDfnwL8wpzCcP9LCXHpxnZJmrjbPXjiBaQvmf6RS",
  "key36": "2G5YHVYXPwWKUgJyQ8QeGiGMs2X8uo4b3pstUyG8h37XFqJhb8gYDzbKopevkJYxnM68NHPvVSxmNgnwkCpr9Cya",
  "key37": "NrimBw6aTYisq2VHGW4bVsaUqdVTK9ZRPDHWkex7KhmgLDn8dxMwkjMLBRadLWxkFUZFtduwLEfv6KFpcFFZKxu",
  "key38": "4YvsiHZwt8rZqKigjmpd3S5KA4wdnyDjRZR2g9V8uGxt4xLMMqDEzEgqxRdXh61mhL9zgdfJPtxV13ZX7xRzVPvt",
  "key39": "5VkQJR3UMTPzuk2pZkhKxA8mnrPxxUFh1BxhwJWSjLXgf19iJf3b4qsVo2n5G8rNNCcDQ7duxbZvJ7KgKH8tLij9",
  "key40": "357rEcT3jtnwAeud9RELyMm9retQhQvhYNfLmDydVChawL7zsQBvPS5js1jA5xaKy37xfiUp6mpT4TUcqye54gcV",
  "key41": "85fzieCLrLAByAmidrkCiU7R5kW7c5JhVSWNboJGJviyYQkBwkM48dBqbF1V59C3xhaP4gt7k31KSaVinLrDFVp",
  "key42": "3UyzJ6r2B9knYS3YMtLhCuQQRnHbVndK18GoCULRFBwnz2Cedv1prAbyHEmfWBCLrF9SdZhBnW4xaPp1HZfC3hYu",
  "key43": "5NWrDpS3dTr49jK5ffY9zZUMtYLWpNc2K1KMft3sqTjx4s1dSwoKMSG3g37RT3hXN3Bc5imzV89ypWqr2W15wUKS",
  "key44": "hhKZfvuV2P2kE8PMHgc9W87UZPtazjMcv3m4qbezDaTNxoAwxbmKDr7tMX36yaucq6cyJvnNXppP762FNPo21We"
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
