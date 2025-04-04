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
    "27svHMJuvLKT26rms7XmGk2bZcpHjBLz1pRNHZioXrSmmmxVMYBdcJuRGWoz2kKG5PPRnRH99CgVvrK4oePGSE5e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tDoP8gHzJSRBkeJMbKY9DY6SPT69F9YunS6hBYfBDtFA4MzsZxaPnWyX7bSM77XPbM6Jdsh5ewL2Cgp41EUiTw5",
  "key1": "4KRA6nrRmW3jaB5ZFxSsrQEytHz23MV5tXUmPgZgHougDH53fQVMfYF5pdfpGEsvJ6WntvxZn9w2SNZWW3NbZvRe",
  "key2": "66FXQU2WZzkE3GUWFjFFTCBDEukJptiynLH67SwgdN4x3vLkQf1MXWbf9N3aSGcMFvDQ688akwrHsPFK4v8pEgL",
  "key3": "2SYF2PmURmFyMxmmQjZNWqDWSwdeHFKXDi7RGuzga48HXJbEuPggdv31eTuErHgtFDraiCNKYpjiyrwNokVQZmTf",
  "key4": "2phchEMvLta2NR7YSxPvQfshP9apfE7SMCLjdYBZ7zR7ne9nbdbsF45gM3RMsFxFNjDyDxJo9QsmfvirQDKqxVf9",
  "key5": "5b3pzbePzCFhFPioywM427nDjYLMV5osCTGMp9M2R5uRb9WQhEvsvRQcipLFjTmTpZZ7pv6BpPgkTwJn1kKuwat4",
  "key6": "5djrEEBCPB7x7rSca1jhhtqqBEWtXDwHRsLcAih1X1UiEKYUFKdukTfPPTrGGetAubPM1xDhXRwDNTzUffDXsPKe",
  "key7": "3gwJQprzkrf1Mqu8sR1kdkgxFymCMCbWVbSeZ4KuWicLRQ7RYBwi5wdj9JZTY7C5SkY1Ju7t4BWzMBFXZukfx6Wa",
  "key8": "5PcEBFBuywmHeNKpUdvvLuqPTkRiXu3pJc9zKwY4NXyUPKCdydt3TPiXiDxE8XiW6UGLsVByBnrbcFy9nUTRg2Xk",
  "key9": "2kZC6khjo9H6MFBWA61BdDbiK8r96TskKU9XJmZ7YsTcrkFbLzzMyCzg1Jvx68eNwB9foiHYRzEBvEbg3BZh5J8p",
  "key10": "29vrngnasQk51PumqvgrvRE4fmnYgTKKLiNUUK5xb34KK9MsCusbMY7qpi8kLpMB4uCmHm44AnFrTWMCfizU1Q9i",
  "key11": "3rNGU3a5uAbUk2HPUxeBfnPQ4GKGnGXmXMExrCcAdrRjavxyErxGaSm4sbrwEE1nZbqkqB4siFY17dBoBMXigo79",
  "key12": "JK8SrtXzXC6JWZcsZ2h3SF11oXdyhcUfZj3uoayF7XAC9z448GjyYvHPg27Bm2xXgr4U7XDRyX71zBzd6GczDDL",
  "key13": "3xR5K8MLGQ67K9xE9yjfgH16mE8tWbvd3Kvdy7oWyPF7TA12K9UKA6HvZV2EG6y6aP6LSWyHnwiHXXhuP7xc1xQd",
  "key14": "GcFD5hMk2MYRZWv1p4QGPvTabGsQFHqn3fc6bfE53vTM1qoTqXXVYXSPXi3rCH5mmZFK18k39ApMW93e5U7zhXr",
  "key15": "5GrGDPk2mNFpHWSK6LrT61c1rLxNnkBguYXpSD1vuscBsv7gZ4in5NwEQZes4oDUE9RKreB5i3XwzEQiiBFEJJG8",
  "key16": "3Dp56AnrtgAjtLHBFeqZAiJ59ZZfAqaD7e5ppcxR4g1UdyC7cW7mky1PJMCAFN8MKoHJVDYnp2vuoygh5A7E4L9y",
  "key17": "3PGSZSeAewRvqAf4ueeJ4rrNvZy7iJFpTsUJTtRpATzTBCxNWTJooXsS5PhH97BNEm5WbRxefHCC8SCeXqKPavJt",
  "key18": "EEwApsJ3wyvTJPKJorcGxwdW5xiV3vbQxL2eqwH4eojr6gR3nHJ5E2hXkeL18osXX2BtcE1GV5xoSzLE7mZ3LRh",
  "key19": "3Cy1VqQ8SrFiDCrrdhPX6KBY8jKbwqug4sCz6FVTi6GCx5ZpmJwhYrQewxt4EZdTYNUf9y97FBUegJQka2FxqAzP",
  "key20": "32JPKr2qfYJkd7fhn7xZUAKvw5u3cejjCW8vMhfp6NF9dQxdzNHTimHiUpcxERK3wiNmyDybq8t46A7UPcVPfxLA",
  "key21": "cQ4L93ApKtkvo4iMswFKzYYLTMH9UDUqKZGtWfwErJmBJgwztNYTiSit3TzMRRYA4BHHho8PzRPbrxzFP5E6Rr3",
  "key22": "2cUtpPopX9LYDxnxW7j8svfqhddjJSuFSPeS2SxgFAT2DU149K5YFuD2RnbzVD8n1pK9zyxKvbLT7k2v37Y2YdBX",
  "key23": "5Vgtjcghw3SJ6tTUjwVYrrU4XeDFCaLGmq9L9Kve6MDomHTPDcMgNRuP9KycSXVcE75rSHqwN6h3VE4ZsLTtDoiB",
  "key24": "5g6J8jo6nxke3kRRvANUC51q8VGTzCpPQ5VVvZAmDYWwjn3PNLdtpyr3V42foeW8Cfv7EJ7AtzJ7Jj9SkTsFZU4b",
  "key25": "2SgXeEUrpRkeRPb6cebTfcsB4RRj7YXCX7C4wVMLicjguZgwrShA9aMAFvDz6tDRXYyywyEbAyDFKL66wDXd3EFV",
  "key26": "5tR8V5RmBjinw2QEp6TuLJor9EYPL3XyUTNFSyyp1JYPPawrjkn3n92grk6Mau2pz59y42KzAeeh7bowKeeggJdY",
  "key27": "5f3YBRxz1PTUCGdz2yB67keUBtBVgfCj819ZXKn11TiBfvSrX1LpXxbNBwq1tec4AZU6NCB6vcoNQWBZWJBdfKrx",
  "key28": "2epBEDtCVu6ngM3o5PS93nhV7MEX9Hwwk1PABKC33fgjqkc7QHoNHeSkhLcpLrQ3apeB74WtPNkDNN8Scxzd5tgB",
  "key29": "rVFqpkyCyDcKrjk7NVXNhDLSJngzkBrcqwH5KDM4VbCBE96uSyLdJ2DioVufB7yp8sYSQkpZDNXKYbD6bENsYQn",
  "key30": "5xAi8JeKsAWPDDL2vaRW6XdYyKnPmcoSFVsNUt8xxQTd2yfwMFipHnpETSEqDenv8YA9GDsdn87k8qHQY96xaDD8",
  "key31": "5fhag9zNv2W4m7boBYbde3JK6CVS6whYpPXTHMfRmwaBraRGoMSM1TAXeRv62puLx6wNJ23w5PpGF7Q7VCi6VZGj",
  "key32": "4YXtGpfCddPz1hxPsS16bJeDJHsShE7nhTrun9mnEKGkE99SenCDUBQGHFBajDfeKRM6SnjMubrND42nVVnyH57f",
  "key33": "3G23KgSUuT1MBpDXeU2Ey7h3f85mwXBUVFUe2M7naaf58WhDrMHPDiPfgmgxnEsdS33NmaFgz1KfRggTUjNPJ3Tj",
  "key34": "5pk5c5WatYQcjuCRSwwjciQxyeewGBAw62PUCmxdsj1L31ZP67mDedEeGr6rw2g71g32QyBpgdDPy9QDuRqsFp6X",
  "key35": "9yopACyubqJTkW6R3a5soExAbTw9qHKxM2Sqo4HyV534cJvDhcCruNuQSP5YUfXYUgorkpQRfGBG61pFjJfddLG",
  "key36": "438HfsAYd9s9HVDUfp6fFz8QFZZuK6ttM15kNgqRpbe9SPxNCWFrNyPRCxsZXUdQUX13oJvu1mHjNYNmtgWCj6jt",
  "key37": "NebbRCjdc1bGEpSRrai3NzKuXSpBBNsJihgYv3MBEJrSgn61sv5LsjPdBeQ9abcDa7RykdxHC4ft3cnjZqTt5Gt",
  "key38": "5qPz2NEUeZCJGGd9Fqomqtnr5rk9ahoxJZuLxb8zapmANqbYpCY57wx7UcErmUCaYeSL48wtqAzH9uwmgJYXxqNE",
  "key39": "3VEFdwrdQ95YmY8oAS9B3CXtcGqdHgyViuptUHByRSEBRCTrHUyrzZcmisXrryMCv7f8prkdybhRf7H4Y4rzWPuX",
  "key40": "4iL424h5Bfiq4ovedqZp6AtuQpnMYEkXvwiPgvJ6g5JVraznkra42UJbCakwZXKKLHP6Prq1CMU4nbSMwy66gdWd",
  "key41": "mCnP5DWGrMvRt2HsHsWoNXQ2fM95vDhUmyCSAoKtQNLZziU7KKyZ49oBQ6wkEsSbcfx3Gh3KaESgddjgVxmhtKd",
  "key42": "5QAYZAAeYkVUs46Xb4TwXXDttC6onFSsHo3aAXT4zMfGki7BePskR58NMjFta91caHitDKq5CkiNc52jXzv2BckA",
  "key43": "2HheUUgxTWdJx6863MV7Vyu1RGzRhiMqKJeCrDJ8zPgMwR21EvcwPGXdoAkz4dFRiuJVuuqsA6P8nDWLoxkqEGN9",
  "key44": "2k2hvNK4iVi8zZmBhVXUgwu2qXaWgfJhjaGwhLCCXH4gfMCXuoqS4QVQBsccpGWQYERA63ruZgDccmaFo8TNm6wQ",
  "key45": "5SU2nD4JLLpryVuehePTTEbrXapmqVXDD9TJBcmPzdiufT1LQBRXn3hM59UmvL4Lj1GzsYp8C2NUNcwbSXS83g7j",
  "key46": "2UyHSsguPQD6DXpbtfLQaxLJgxTqNHLf15u7aqAhebHCD2Jq36ei1cx82q7f6aUWeHkYAeV6v9ac7Nb6Jrtp5Mqn",
  "key47": "2cmtshjiBkZGkuPb6cwNGx7ne8evpatVGDwQGcPuHv5mrkoQLrq5GY9u2zEqcvtYisFc26cvNv3EXC2y4aZbQeUa",
  "key48": "4xbwAh4NKT3kzYFtKWreLuEBWX8nb4zpjP4N1d2Joi1RupybUJZkC4GDS4vVaKgMzG2FZtFHYiBwuer93Dn9KZj2"
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
