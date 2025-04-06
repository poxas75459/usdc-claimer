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
    "4qBvxkynYedc2fYWGskgu3T2XDqbKAk8HoSqx6Se6cs1iaqhQGfmv7YotrH3tkXQKNRfHRHiSLMYK2nmYmb16WPo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QYWQdxin85u8DoVaSnhS1vL5CMWMzAHVGJezykKKBXFWUVBC3yX8SgMjDSSxwVzoArCXnX3EE4vQYFDoFRLM2tU",
  "key1": "2Bp91rUsNAUYmM7Z8Qmdy7FdhUS5bgETA9RKCJyjZzwxsCFZhyNXYMPo6WiDurerGo6cVTyzXrnCFvR8LwcMpzTa",
  "key2": "GKS2GXMjpXcSRCmitfxPtvteyykquFPp41HBPrUvXzwWTarQitE9ajTza3ahHudF74zHkcJDfw6CNX61K5Pxi2c",
  "key3": "4QxDE4CWd7NFor99mYUaxgF6qmqyZfFPYscnma72yEVJQJRMvoU2ANd8RKHuN2MVx4ivdRrCuYdZC2jnXPz9CNHw",
  "key4": "5yRmWu1ijQRxZHZcXpuyQaojSV5x47N9g2hxBh2y2ok72M97LxJRsMc8zyKaMm3q7iAjjPke2XcudMuP3V7HbzeS",
  "key5": "5b8hkAeee8rfEjnp6T5vrooAQD6JruiMFWJzcCm35AotSkmQXcSPdoK2SiqJ1yg82nCv6NH6TJVcQbKZvSy7XVxB",
  "key6": "4UW5owYxRKDCpn2busTPjCpsPS6nyxSLPqXJj8WXzqfXsEMJJtPerCXsARQN9ESSuUZkGv3PBDJhmcWpWySPLd2u",
  "key7": "5Ve18fuufGC5mW2yYXGeyraWibUPRKufRALr2CTGhv3xgxpFm2UHTcmuMjDbtTy3GE18UxfQHiYK9cVVFsc2eeqd",
  "key8": "3oB2yvbU46AYx5CHMENz6EJM9cFkuGDtN4WMuagBbAtVPKWvxvRzrvrwdxEhi1KPKoaGNdy1XrkSXkfC8sMibACg",
  "key9": "4B8CzRH49PtSx8BNT9kEdsvBrinEtrPUtEAjeufn6jPkuyB3BNZpDDG9ftogsiGsmJqjvJABHVkcXT1g3tnQrf51",
  "key10": "4pmrdQhmsFY4GLWLyZDx3GUEcqZUEnLNMTBayc954dxmYgnjqHuHkYr2BNAAWkn1bF3EJEPKJxf26mkw7jSkzh7t",
  "key11": "4Cn5gh7efD75h5buJFaHLSdKzSznJYwqHCGeHCYx6j38X4aQSWxt4c2FkLGPuCVM2AKoexwEyT8cVMqZaTDDNfG3",
  "key12": "2UhcLFYGcMQUGheofX4UJtdQXVmVBKajatFbBe2z4w1pPMoiSufiSXp79yKViHzHNAR56tpheMYU7oFzaMUjzUnM",
  "key13": "4jf7HGEi2dP1pnrLW3ESmDfXRuWsz9f8sAhxrSMLPe6Un4SbLS6XfvLiqkvnUDbjCC5Wdfio1sqmShBym6xmL7mE",
  "key14": "3nPhUVrgjbzytL3U3ZJzNsyQWpTAovxCwpPdGnFPGjWgtfWqzCmUNa95zRvRxvTJPYpDTUsywYS8oqmuDYqpuswS",
  "key15": "4QqxDBfsapzBfgXkfhtfG5L9oWt4CTyPKEFcjkFivJytRLzSeeBdtPf4UVCJuSWvt9b2Z7oEkNinJHvJoerMSHqf",
  "key16": "DDNqpYYVt9GMtFAGhMEYBsEepP8TpqDHG4bz1zMeAvGPgFyanU1UXydHvDyzNcoC81T68SffL5y1k3BNpxhwnVo",
  "key17": "4Ki3Up6P2Mn8VUkmHcfvWGmvwveGHzKS7AxVWeT9RFYwgkuxHuLEZzsSGgjbcQ3bxdJUsVJwWJYncF8n6zarrfUA",
  "key18": "2Vk5LzWMsyFoLAuoD8foGSVqq8jUumhvrdyEwP8xdRoDivT7XiWudmRgjUbU8oey1o8u8f6bbn4wgZsgwPwABQrY",
  "key19": "39GozLKs2WAKXSBxZB9bggmRn1sbvjqCXDP7SByaPugnkBQkDhQdYhXedVhQxXiuvwiZ5i6HZDT2G2NHq7AmJzdQ",
  "key20": "3bgoH5jo9GqvfVrXNp1R6f4rne2G2uE3qQNr6aVSaiWGpQSLq2oEUHHVBoE4TMAsJVFaqFr59fpvRsWDwdUL841u",
  "key21": "3g7gRYyEnqcrt6pghRkkh3fxjA51RRnQ2qZNy393233KKMcxaad1c8wWtqyuqMs3sReoDxHNRCAP8xwnLjp6AXNx",
  "key22": "2jLfnVmmZswY7zt8RJJw1qVkJ52jtv5wHCrWMfQKeJhN9Wrq6dGknsnkP8dKmfPGHL8SUqfL2HSgTRQ7is4DUn1Y",
  "key23": "34mSr68pNwjHAmSLkwcApjNoDtyniUzZdFM8sUVZz9Pz3oUrrr9HxT8yqemLWjJmzRcxD9a1nuNRQmZLNQBtuc2j",
  "key24": "58maPczAfiRZwN5dyitPaqfLQit5wz6kNKobeUeVEk1DuBWxBrHDuqzmPN5ievsam7ixBA1q8PNj3ruktUJpCPKN",
  "key25": "5R6WM7e42rL2az23oekDHzgSgGLZF5rcwz4QVsmzqbqAE23r7kfLycsnvNgWenQPeaQTxhRNwmbyby3D48GeDHPc",
  "key26": "2LqCMA6EqntFALJZd6WrtLNjKzFmYMpWnCb7Dd4cQtECaa9Kq3tjEhdctyqeosLRH8yVJxLkRjxYEaeh6eC6TSNS",
  "key27": "57xe12UD4ihWS22kPSK3NW5nf1kng15vx8TpXkHLMuwifZwhVVJHCSLpBjZZ6c1DLU2tLz4orV9m9Tq7CJZ3kkTH",
  "key28": "21i6KwxL7LaTnpzGE393Pb1mQc9xjnwstMcKLmvL2hQrZVjJqUFGjtPiSDvd5D9tyFb2BKNCv5BtmGXk6KCYYiMN",
  "key29": "2D2P9m4hpREffHnSuZciZuaVgu4ncV5eWsSjZD8kChrqNAFz21a6FyYYPNermGW4PJDSdRMyYc2v4Q7zgM3xzckF",
  "key30": "5peaQ3zs9gfKekicGryvHFXweDeLJGH6ZrQ9wM7FtHCRcrKk9qQEDL1a3a2JTXUS2uNV1QrXMXEfXGw71wkRAyS5",
  "key31": "3VA6sxUBsWGUrEzTWKFPATK5sp63Bny4mHwpfWhuKWqG5vY75arbA7f8bGQhvECojeyE1pC8bPn4XZqHQk6dFd4f",
  "key32": "5HLb2hfSfv8DSeH5121WdH2NS8vmM5yNJYW26zJqysKaorws3buEkvFRCL3G3XU32tDr9vpbgfsNGf6vnxYh4fH1",
  "key33": "21fQNNnMjUDfH6LkcrQ87NTPDMbpqzCKmZDrvduynZgFCi6hvUgoV7Gemt7W3Ms3J98xxRzJRNiqsUVtPu57JbSi",
  "key34": "461zEdqS8MuLVNqmTUJiBP4CQauUvYW74NvgsAwWQcDNHNiLET4dLNaYPnc6Z4GBysFU2wvaY5E19HvbUNBT3fJ2",
  "key35": "2dywuu9xM3rsiMooEaNG2tuTET5qJjzJLj7Euz9qcUUakuNesBtQWvxHiobERReoFVd1kHZpC8KWYMQTrh9mLESW",
  "key36": "2XEZddNc6kaLfhjmbLze9i4FKsBwNGtzQrPFWkTM6xE8V7rbLfAP1m82mDWnhV2HaaJPTd4uqF9XMiBGoe2F1dDQ",
  "key37": "5xM9e2BBGBixpq4rfSCwkCWhfgWPaas9r1rC7mZ7qFFZD5bMaeCPQQRoCpncbChGAXFYCMxmuuD2znPTEZ4kp9FG",
  "key38": "2zcwGgMDbsLegJdFVbSSvKicx7a22zDxEeBQEnYywTYC68GcGfcevYRhdq5BMKVU6o9jtD1NUdpBqugCPhv3zEuu",
  "key39": "hN9GRR7joMgocktzy8yi13FQMoDRPDFBAGg28ppZKRkRMYDM4rFeK71yna1TrFfhAvAeDSouawi2Ase2n4a635H",
  "key40": "4pFWhdBB4bBtxSLVtwPm13nMUN8cYCUuNmTALMWJy25Nn2tY6LtMAiNpJg31BRzgDUUzYi5bE7TMf6CfHQBUSmbz",
  "key41": "5XpFcw5rHpWSWHF5REiTgdyKbhon2rzTKTPnQq2VwzEE9VXXXfNhCC7QwDLkhfuAqiFmDGAPMv2VacqG6HyiAmWz",
  "key42": "4h63Ue5Ewh1wsFmRsTR3wwf2iV8c5uiNrnpyMbBGsJT1P3Lg7JwYFwv5gUWSWWKpxM7PsLpqWRndUvcaZhbU8riL",
  "key43": "4hzr6s6SVVLPhE3ucWzC4cP2YJavkQjsiSqjxB972GtkCL5YC6vkjVz5rDShJGfo5NJ3T3H5PhKvc2YjK2yEi9kn",
  "key44": "4rKsRhU4fbUTM7EntKFGw3VKeqiPQjCenMD87NezeJKFxcAuGFeAapXWCZXPk7cdaoMCWxbyer9mLriz1rFyeRsw",
  "key45": "2UEHkr4mBKuU6HXtF5ovWTWwmrE1uuERvPC5xaXBMLLGzqY1MwL7LJqedDQt1zJdkfQofdmLYrD8NqvaQYrYoKK8"
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
