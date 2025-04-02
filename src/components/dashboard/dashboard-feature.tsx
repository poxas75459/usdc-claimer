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
    "5P6tmep2VFqnikg5RzANJcscVRZKex5oXc3uAc5KMKPimtMMuuq8wiWxirhRcnNHFzSkHjJcvbabpaEbDuW9JrYT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LNfCy4EQFTtccriw8nVMvGN3XAL1BosmBPyQZXDsKPksuSmTKxZ9YMNuoLYUYWDCwB6xvuzNipjF2hTkKy1yL2J",
  "key1": "2CZfv47pSG3oqjZiNjHXnK3UzLjJuob2WV2HQzFyS2bBAhZ3SBPQhGMpPYL3WD5DrGdgNFDGgZ9GSbmAnboRASgr",
  "key2": "UHBfPbC8W6zWc9jpT5L92oaS7xhZxroWmnYZ5YqTPbEVkgmwAQrcZSfik7CHraMFvQ9f9UDej1qTpbhA3nhwP43",
  "key3": "5j4YGKwfwQunFcd8ShgvigvWogdc9LA47HjigMS1ijmkXkNGQJ2Bs7yDwugQJta6V3d2hYSHWRnr6MhkxrDUQLnU",
  "key4": "43gqeD8HXkXQZboTqV6pa4DjUC6PmL9j5V9J1eQEkNvUbV2peQZskXskyZY1o4gVpy7rWqTC1aemhC82y1Mtgov4",
  "key5": "2hq1po7ZXcxDAEpeJDmjK8zMpPfb13deQ491xJA2t4Z1iEyNqgoVSzBaeGX2sQJLQiAZhtyy8ZWLgRmitojugwwq",
  "key6": "UtefE8uhSHjAjERuU8eir3CAi6DsHLz8CsYYxRdujWfZkidqNtkqWtRnfk9KC7bmy2rTrAz3iLiM7gpBcBdfNsL",
  "key7": "5ExTmYQjoz6j1ykoy1UeXuEBwJXUWcLi7WSjHqsZ8YUST63RvzSRRvLHhoofYbubiodyv8nBzk4LpFynX6i7mzQC",
  "key8": "49ejjtQXJDFJtdTLtR6RgQApaQmHVHcE8YhrDZ1gor97w6f49AgTaBhCpSsiGR57BaAKxFnfr6hqXvtFDF1SrNh6",
  "key9": "3kBXMyXFj5pHwKPJhr6ZsVc8NeJXcKVifrrbrJtDkd3NLGKUuLytcakQ8DDzQYLpUECBSMYStM5rMom1ArHjWpLW",
  "key10": "2F1ekUeww8ys749Zck3rqF1FSoMv8HiHvjJet6yy9tmjsDwbwiMJPzTcKhHReP5sbEnqNAYGQ4Z3hjzKr13cCJ4i",
  "key11": "5ViV9VzKgKAaaQfcxQMb7cCMwGqDBrTznmgmcgZa8nmtKTmufKzntzNc8zr3W8DMccBvm1wEYWpFCjXWANujP381",
  "key12": "5F2EWumbWkX9TEbBwigyNGwAPH3RQFQDSfCUbwB1DVz7UqCE9w6JmbUjzPfsRSBkbaYofRgerfsA7AU1GfZqSGNz",
  "key13": "3dHqFYQcAQBsFeewEGMmf3FdszSc7GUV9qUBnBw7eWAC9PbFvWMRhuWdDwfJds3xbG72yuTdn8CAbJG3PUF72RfH",
  "key14": "3PhxG6HxYQfzgWr6Rczkhfj3mfv3WAWhfzJBVT9DBCqYhrhcRgRK7HJWvrLG9TPGcsFtXvFcCPVyNKACCPjXtKZC",
  "key15": "5Y9u6yGLPzAZheJFn1JAuGHNq7xhkvDWZEmBxm9pG1bg1QyUo9sYSS2mpMUE66ri7MRTmQtxiQAUu4ECBJevdZ6K",
  "key16": "248zWkAByyjAkG38187stx1QKVEJAfkatiGyM46jCgK9X1vGPnmWF7x72vC84RpkgVT4DkwshQBgxQ71j3SWb1w8",
  "key17": "4LkppKsSc8nKcm4yvLtvhcqEoisxkazRKXYX3uhaLssBc2ekUKQ3BkSaNpuNnDvmthsS2Lr88bEYfzR8utDAnahE",
  "key18": "2XQgN7bZyKeSBQXcs7gdhTj9F2px7DdWSXQNwuem6yjmtXDhQD4hpXkFRRVh1oRf6A4WGv2JXwo9R4V7aVZate69",
  "key19": "5Nbha5fyu2LUiN8RP5uRM8E3ckodYv127SbsVtqy9SRDamf4CZMzUrtvDkQtJd524hQdzhvLes3SHCfsa9WPwgjF",
  "key20": "5TbqSzaQeBSuZ3gDNBtuxHuH2cQFyoBHogX4fs22T2fPysKFNuVx3yF6dxy2ArthWe52jpewcxhm2uQJQcshs4YJ",
  "key21": "Wg37qGmN6N7YVPYbC6HwNbCheoRBkfPUciEStVz7ZWsAcVVXyLYeZzN39i9oqS5BjdM55cAjtYBnRUUHjnw4VT9",
  "key22": "5Rk1A3qzjPubj63Z85YADrUcUoSCvobxrj5xTHjYmNs8sfXZGZjbm4aSK431czhVhup3nE4uU7cwLqJtKBCQWtKk",
  "key23": "673HsQnwNRXag9uxHf9isdAyF4s99zEU4prGVNyeNDEvDcfVgJyAgtX66Azgo6RUnyuXSakpCZLePeBEELSfUTzS",
  "key24": "2vD9dZEpyumDWXKTjhun1MpGigGJsR72BxvtpgFEE8oNvFWck1Rn1VAvRbAvJnXEoyWLGLxd9fBZPFr199A64qFB",
  "key25": "2wgQvNhDzyRk4uyESZJT13jpdNac7mCz4k47YJN5vPp5boaYN6zWx2bwBgSHFGcUqmN2vzvBQABhsCp2SQptH5xe",
  "key26": "5VJTPLiPs97mhKU8JEtB5SdJnQrDZRbkkEJ2D4xF4TSEes12zc64N4eyb6ri79Zy5br3i9BPoA3hos2JRf4cfBEg",
  "key27": "2PFbKXUpE4LSxzUG4kZZG7F5DWUtNMfmheXTS7MXVwU6Bk42wG3RgfH3HWbMtGWTyzz5ExtL4fBaRtmNeD2kh5TU",
  "key28": "2a5BdcBygAMzbHRuMFY6ghGzC5hLRHqrz9JYoyUh1CiaAboB2iQjVNXVqvHc7uKVq4k2VfYoVDkkpsDMMuJnc26J",
  "key29": "4x6JrovjDVJAwZ6hsHuXEMvZWNgiHzrfShofpy45KZpApzx5HRzzBG7P64ndcntnAEWJAhyPHUXd7d8ghU1nbxbx",
  "key30": "4N2wumdcfyT6YftT257VM8MDsekjMj3wzTfr8bgjEroWEZKcVR8aoK1rjJpP2NikLQE6MCKRcjfQLuLaTNqQtvZn",
  "key31": "2fLc696ETewPCAfQfFPU9JijkJuT1YnGeRbPLLSGJXqywWvwFp36XqmckKFkJzAQCadR9MugigPgpXJEh5o5anZ4",
  "key32": "5zdrMuPo3JAtPBJjJj1hxZmFWzmjcWfy32Y2p8yPy17zDteZKNNjdnan9qRjqDMbZisQxEsRWW5JeooC4GoLyt9c",
  "key33": "46QMX3svVaZPK4Q7gWrZwEdeDrS7fxC3qU4zcgs6R8eKs282bCdgGoQnJVFqMJPttvEKUtFH1QnDWtokFnCkfEZT",
  "key34": "2dfHLtgZZDtAAaM11ZtXiFaYXgrZAi78DiQCvwqgvsggv16JFut1gogbpmLixinJDiDvMSUu2huvA7WCAyFU8LZu",
  "key35": "4t1Dmk9bCc7erPWnrc9NsMboEt26sLRWtq2m6xNH4VEvKKfZG5cPmTab6JFUB8WShJhtVYkvcwvyHY1TcSnrJyB6",
  "key36": "5HF5zsHXiyiWHBcbHP3BpnxkoLn3QrQ5o9GRHSCVczENGugeQd9LjNhkRwWusfULrCa5FpstiavYJ61a2ojGfET6",
  "key37": "3e1kBQsExTg6fm2hPnFBFRRkXNokf3vK5QTttrLD3i6mpGeEBpVC7MsraqFqMNtwC62VxyVsoSr6zbpDdgCwhVyF",
  "key38": "3xSvUQ4RBupQT1izbF271qTNsuhfYGSwLErESVmnG2ro14TeSARnaG3rCy1h6nGLWKMXsTpWc4BsH5WNjQvhLrWB",
  "key39": "2Q5bK6f8RN1mY7h8f1ebUzywLMxMpzhewzdMiXuTVm9YGvbbGAmBEaDNRou761s9iSQvqFBuy7gLJ8ZNynjMAHJu"
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
