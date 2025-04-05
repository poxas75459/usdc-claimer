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
    "5cnr7RCaFTKuBEWhDe5Qv9DcCATRLb4W9kbwo42uuUk4srQyvXMmzkbzfUXPacsJZT5kmvoi2LwcxkutyLNxvMYP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3D5DdJGBfQXzB7U8FL2Gay8hKyZCBxDYubpTMXutRs3Q5LxaUknrdNyGF5VyqEQGYjuStBE1j5TmsNmSnRMsiCbF",
  "key1": "4UuqewFmGwk7QkoeaVXPw7SdoKsNpSYeBcZUgyoRAcztXvt7KWDiGKtffZKQhAyyzYPiXjRvSXHwetTDiWE4FR6a",
  "key2": "gsNchKYmPsKG9gvmb7xZ7qnfSR51rXsnQ9hzya5CGEKPj1E7SeHURyNXgy8jdpxiMqU6q9umzw2xRmHssFuhKwt",
  "key3": "5a8w7CMnjxtepN1zfUkjsCiLM4GeK3px7ktLdZeFPARLMGJKpmQRxE3t4shHM3kDaatTRLWGc5WGV87FPL8t1ts1",
  "key4": "2rCjAobDXDbVXwB5GEmVXrvrwAopUDH9zsLo7f94H57Z1jw7RdseP6JLP8v2C1Xek7monZGExz1m2XSNiGz1CAiE",
  "key5": "2odrQMXZP2Mdz34XYGjdcfSrqKytcYe4cacjFUEAjxGWrnDJP2k4LBotMc74DdfwxRF8Ye7gxY38Vy3zhwHzWYcq",
  "key6": "41SgTzSfcwY295tfWfQbvBUVoRTB9UxqHDgbGHFeLngvmEu71A2c72N2jBmh6s6GjRiuoSTDSCbfhyDwLboAeuoa",
  "key7": "2UMLpxTvRCXJMts2ESoXYk9ie6wPuhs3R5Pf7LSJLUiG3vz2vZVesu9jFX6pVKU9Dy6NCq9bgpbCh9Ly3xMNZMLW",
  "key8": "4JbxMLR7yQ5LjwFfX4oc5WXhr9Vdr7hqBPbdJfJXyq7Ri6fW7VL49XFBHQXYompJuYrW15Nju4Xi7GDDMtowkeQN",
  "key9": "5a3mXVQ4WFpcDQhYkBUnRyEtxdAKHSQchGpAhy4PYM9sd69mLLoC5Yt4ebWmdRBZRAYyuSrVye112ChtXHjwRXAZ",
  "key10": "4TZzpWL8Smi5frjQtYBUL8mfgAWKa9qhgLK2qgkuHBfmVwdSXmTVd8f4GM9CK8f9FvNTqEzQz9KN1uBammfCrpqJ",
  "key11": "3Wt6LQtKHWoACBs6fhamoQ2KcyHPxdSm2QpSrZwXt8y8WdSQfR8DiFHzBo4iFgWK91pCwdUiAp4cGzoW7msXab6F",
  "key12": "RohkW3dMfaupmBxZSAaT19Z1CS5BudbUKHAdYvzvPpqCvV7rjnywCDVkgSDXEtDbo949XccA4hrytWFNV4SDcjJ",
  "key13": "4auqLWEAA9yCgx9s9MHrZZDFQdvby52mkiaGte6LD9wDjLt858EiE2rgHouyPTh58SswHTzPCjf3tUjKHYmiK4Bx",
  "key14": "5SoURi9VEoAPPUUXvLBesa1pYXYXn6QQhcSshaoiwrsJacyeNoFnQjC7ucR2NzifFuYFrZxuoZVSqKG2PAnMJWDy",
  "key15": "5qYct84a4wkNnwY6abTWye5no23uda5FgHYetLgXoLe3NEgCQkvNto7G4arkZws5iP6a33aJaXGtGiYKsZxhdrNc",
  "key16": "XLGAhEA2vGBxyZg76MkbXvN8U24UouuTrBcf46jbtonv5UZMdL3CLZC4PMjYYFQ8wSNKB9LJcgVpxobeqgqmDh6",
  "key17": "4KwxsDMcFgXnZsnfDioLfWvW3AzkFQuTBe1bBmJPq9WMkrsYi9r1YaBJayU93Trd9CioCXd22noFuKmKxKdTbxth",
  "key18": "9bMM7bJCCsQZH1c8547ZkNeWERW8RShDapYSVnhrnyAmjZnq1FCYG6v4JTe5RriD3HQq543fKiKxk8RK4KJD4j7",
  "key19": "MKCe8ckiTJifC1pyTuCM7zJvjAiSZ9cLdkNN5Xt7LdBi88EF1DPEmQJ4zCiFUB8NxFdZuGbKREGbVbECD8ftUXT",
  "key20": "2rgCojof1mcWQHY57CXX9SrepXXMYqEtfzsDTNjQvHbmGgp4uoT2xxrc39pPBpjYDQ9x8xYnEhr441595DvG4jXM",
  "key21": "64oNdexT7uHhi4xBZiL7P2iGkagfHfFuNtPFsJngGNnaCGdvoF8PYjqhQ4EguJE4WCyKp4AjcRyEQjw5F3AUfLHx",
  "key22": "3R8LA2wRsyQg6NPhSejskHrTswxrMWTQKCo3XYFdxe8o1o15WbS9Nqd4JUSkXpKwW6eeataxTttVXxZrQrLXK5sa",
  "key23": "2HLCnm24ZzB9NsRi2hPcwGrqWFbzE3quwZD9P5EqwhVzrZ2a72aAdbJswHhuwTyzJqNTonro7Ycj6VNna9BRG2ud",
  "key24": "RYycZsaJ8RMHKpVbRA7V9NApS3hTauZbQaKJhnB4JKPyaMcPWqKQw5fhQ6HAmxs1ieTso45HnPAdX7gFMNk3fHH",
  "key25": "62i9PRFSXHsM5b3SykHFkZXT3UfiRFEzFssMcxPdPs4gscvLtaTN7ze6JXdzf2FumidLMHwePj43FJQF467NTsUa",
  "key26": "3Tab1wgKSApaU3QcuT2p6LXiQa9w9ZQhBmANWR1iW8as6PAeG7Uhap9oxLQdcETm3JgPtKpyRc5Gcc26WUVUL6Cv",
  "key27": "ymAiySgLekZGeWUrJHFWKPrXirUDWUGSgAxwLafpD6Qxe6cbTezarprEFq6VDg8tStpE3rRUroYZVQrupKp2jme",
  "key28": "2LWYQesBhBxQCxmAiY1QDD7VwfniSwH6fd8M1SayiCqJLjrfuCnKVouLdVKA5E3iXiJ7c1C9z3zGKgk7NQEygRqx",
  "key29": "37jZoqNoHWYRPPz1LatKTcNqBNVkPMTUgg4Qc23E4z5UHou1mq2H4bYp6xT21WFwJLgqFoJu9y5YftnDt1DPDdPz",
  "key30": "5LyFhoGTTZyZm9jjRmBTxwG54mcKRjrnENxFRF6NsennzwSRPRjX7WngXmrA2bBKz7vtzAFLtVSNxdMMq2xrA7J5",
  "key31": "5Md5QeuNvT7nt2mutKKfx7CarbS6SM1t925fLiwtQMSgDWpQ7DWtf4nCnrGQZovL66k2scumpyerP1cT9Xps3ZWA",
  "key32": "fRZ8dDLp7nKpX7FhB5gqnzmUdmUefS2RMxF4ixKdqv2Meu8VHdAXioTq6aHF5Kn9e2tDubQ5mkA7p7bV5rMz2yU",
  "key33": "5bkntJPWWhoqSWgEy2ojnkhtsHojFWWPv7s1GHVxyFV8UxEQ2QRBXWsj58nnMQn4tWLvEYqB28FZD8UvtPemw82M",
  "key34": "2XoK79tTGVfzg41FN6pqCzTLTiHqg3q2eAjVWg89srrwdA14zPFBEnNV87for5wQ2MW2FF138EaeRTtKMjxSL1j1",
  "key35": "4qD12KTUxdjZ1oz3bsH5deZdzJnm9RPP2p8M78vYqpFQ7TZtDkkP2uKX7yFp5gHVJ6rzLtQCpgevpTs15tUxoZjr",
  "key36": "SFNAfRQ7MzaW54fZRFj5UofboTKWEC4jeq6jQ8Tp62DW3ASxyP815gHuNUA3CGmTC4tsLNWwoscth7R6AyJSbj7",
  "key37": "3Gu3VePykuzadwiuV3MdmG1ykeSEyZWVpRwZLiZG6bXF6nNPfJdroqivfhnAVQLAMiA1ttNUB9oh5niHNKyX84Ar",
  "key38": "2r3CAPJM27yWFarizBaRUWwyRY2GzeHmd2xjZsRUyZrJFjosMuDyXRC54Pt8xG2ZXK9T7sxnVwaVsstvz7L62at7",
  "key39": "6f8mQRbLf9MYAw3CjF6DFSNyoJ6NPHPHVPPAnzDU7BVXP441GvysUcadgLx99hAfYYyf31JP7YwDCa1n5naz6ST",
  "key40": "4pHCGgEGPECCNRWESxuXc3iLAPDBrL1mJcLkfXt2kLQffZ9szYyP5r5QqcVwVK8y8ukRFM4BZtyypNeYQRHLMr1t",
  "key41": "31p1nVEkHCttsw5WFYQnxfDjF2xtrhQ4cgdJBBt1sLAd6FxqMFo2w1NjDHPuvdpNF6QvcrZCEs9Bc7he6RPt8FVJ",
  "key42": "T8rGwfnV4A7GJbqunFgjpghd1HB7cBzCW6qLw7qEJCoTaE2J4gxxNYVuVKp7upjuBdvUWacaKgY2eMTgoo3eHug",
  "key43": "2aG3QczdoURvszCKTYVoJmZdrLuHiGeUAFSoVFuP43LWnEAYDraJbNYMzuZLUqgRLao3sTytApsYR3BqwtjCfEE9",
  "key44": "hCtDVkyZkEcWf3igpQyd4nHYh13BNxfGmVcYnoCA3PELQ7cxuVkmDBq5EjbHpuCMwie7YcEkVCoirKLv7Zg2zJY",
  "key45": "3FN2Qp7RJLqr5ctuvT3Zh8xwbS2kFAV6qXwP2t4xfz6gQ4M3PzGK3dzTcE4BzDCnpVvaKnJi2iGhwbxbfAiL8BsZ",
  "key46": "53vLRELxS1csH2T9P7vzJkafmNepyfDWHScWkeuearH2x7mE4YN66KDD8K2SuaRnjgu8UoMcHzvDx9yZqmPRUyQ5",
  "key47": "CQaG73HQF11TdLzV8dgSkZRqwALj1oXuS1Lu2WtRFUsfBGtUDj1nQ8KWcrV51B8KHdWRVTcqVsQW2i9DdQkky8Q",
  "key48": "3vNzWvYqsQcoqNK1Tncmf4we9XzwJt1vssxP6oQLJHy2ZBuiYjsAaMAEyFWS5YGayPWoNeBtysLiP7JV7bc1h7Sb",
  "key49": "3eP5ruUZn9h6K1jwTRUJCsbexkwBTyh5a9ouEVRswAdoR7tZ9fS72SFDvmJvPhTmcmymJQqEfqGNwD5zmWCuivCo"
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
