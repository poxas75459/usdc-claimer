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
    "2qEeuqYr3HF9ioBwnMxwQsMUVH1nmK3cXxznA2oGzYWP427pnsS4QVrV96ByyWo6MGrsd4LbfceBf36qKtKAMz6T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mBPbuKhFhp2N6Q4e3TmFvaLyZoT14mHiv4a46wEqfE7ZannzEAh4EcX8Pa4D68nzsjpQpR431fmwhgHNTcNi3Ts",
  "key1": "D4eZAhtKRGnzoLiWSNUiUbhZMPqnBgW43ykRjeyc18FJhsZ4kUasXr8WxtRDEsGHZ6PuVYTEq6tzcbiwy84TFiA",
  "key2": "3yqopaHAJTF97LtMHRQmXtKyZHPzkP4Wi4Zm9t9wamwtwXHKGZx2xZHmf6ToMn229V1RU6XgeEMEwm5ZCgRoRZj1",
  "key3": "4Wj2rzcH5LcZZDRLyUP92ENNuVdNwEdAgpuTwtepA3xM44KJsL4ixaGfBaqfzUxTHx1xj4YkUxFmdqZZJCeGckPH",
  "key4": "2SKA7WBvY9L7GeYnpZntEsYV479HyjVVamb3iurE7URq4PoLx2TNGNMWuTGR47LEcdKztBR4SEsmRgB5CM1nNmUd",
  "key5": "m3fTfjSXj2anyCrrNH2o78SqSP4tDCnW68bLHeNSvTo32Xq2Cph3qUTz6oEpJiHE73fNnTaeTwMaRqN6VJDrXW5",
  "key6": "6PunAQFmCFkP1E2h84je9KpFsLT1C76bUP7ku2z8EqkRsKyCJpNrQyBieTu2DVQumh8Sp6v13vpxJqu7stmEnnF",
  "key7": "411EqJz1EsgwuykLAJUurpsH6qVWBazbqkfNsu7Vj89PAq8XQEGaaXnW6iXixudDC7u8n28ped4eN3ALXqLh3Ndp",
  "key8": "43gCNRvqgoNvCBpRbkWvG5rartxbSv7pDGReeuQgvkNM7mPiDQfz2NF6RyMdqRuntqRndJ5UJwzwsQxcn6R7nxEa",
  "key9": "2iMopTntGtYbXwLZnYv3JnZsLbsTDunArQREE7yQYFXMtjeS5aWAeKx6PRqPSEqg9S3C4SVU4nVmEF1SryCu5Dbk",
  "key10": "3oj3HsBv1nojqAM1t8btYSLqt7wYHJHzHZGuGK3uEoHtVvaMwbegucsSZiaM43LL4smx7YSC4XSdEbEzuenHRsg8",
  "key11": "24je83SvbQ1L1ct8G9PoD1nJp6txYgz4kvKFefarBBM3MQqdatQEKGiKBR6PYnxeEW3ZsFNLKUy78QXSaJWSqe3S",
  "key12": "5zDanJnLBR68d5ujyfmNPMzBY5ouXxg9LGyonyamNUVfCLR4JKTXQ2Zof37s3u4521RCwdHtLVpQmPsHjSE74AFB",
  "key13": "39dhUswhkunRM3m8X54tfpc7qhfmmurh7fMdPSsyF3TuwkgZBUgDDjY9sfdoocREpPFkiKok5H1gDnmmERRE94QG",
  "key14": "5i1JyTncYi7KE63rAdxU5C8M5rpPjvC2AiHhWqAFbcEyq8bWd5UW7soAYYfNZ3T6M4NrCW7s37zYEAuogFdBLexv",
  "key15": "kkUv2XPv1vMX3mTDk287F5uWBah9DnsMQ1xKzmpjWkFFAPMhfy4QE321iaaoWpSVfYCDSWdbTKepzDpqUqqrGiU",
  "key16": "64gEPnvPiSLouiSSNC12CiP1GLMir3Wd9mhheDA1VwNqoyjVqadiYbmmmCkhRyTMamkiZuoGJ6pCVpRohBqsSSKc",
  "key17": "n7wKt8sGh7gLBAZgubeqNbXFSQAVYWMwmfuKpunD3Y7qUsFYKJASdUgZ9ziytSWExZQGGQez3RYdkXsAJ6sLSMD",
  "key18": "4rit5LeGV6hnAteAZyBGG9zm7kNyFuSvzZoE953gQtidDNCkckigjPTJXiCT2LBtw2LMjs6nngjJfrBWGy9oy7N4",
  "key19": "5HDDh7MqMTE5uYVMkWySMxARhxcwQqbCTqzBgSC9rWgz6vF8Fp4BsyRi5waK9RTHbxGkEXrKkw6pKmr751p342Vx",
  "key20": "5hYe9ST23hEqUUYNR3b7JLLnDyk1zcc9LTZcYZkvinCb7yMTjt3y5PAnscrKSZUUq99mvinoZh6MCN2nzfvApTXV",
  "key21": "3U6wJ98NqvxE4m6Qk1GTL179RBGSNwxa1JwXABykegVFbhnJBfX6i2FcdhD8E5sC6YDJf579MbykPQ5AbK4scyrZ",
  "key22": "5AHpFJRLoVRc44JJ5UWytY3xCiDJhPKHEjuExE5WqZa3DWTXy1eeNmWUBHrZSbBQqikWffeWvtsmEQsi4TCi31XW",
  "key23": "3aANLVz4q6Dg76mAkEhiaHJvtyaGButxKFA6GQjhBFHgkLQP65MsWByxXn9qy6L2E5jLznCLsxdevvqfQsD9MzjV",
  "key24": "vPzT3NaDSTR1ZDxXakeencvnByKC3pBnB55ejmJ1prRLWaAY2HmMhvwSdQbs91iJ8T4F9k67kkyoNa8t9uFrFBG",
  "key25": "2BQsDGshC6618s2VgZ1JN24ik7vgLM1PHUqkybB4kgZT884k4TJWEmJod966ZtfpHm1NXoppMqLbL3GDD2RDBFFc",
  "key26": "3NbsFbmorwXLKaBheKXyWRkFgAQvEn2Hh37u1ah3ZZLSNgD171Gqg6hQDJhqjTMzMaqMn3iGG1iKQbP8iKc567ub",
  "key27": "zh6fD7byuuux8AjJ15mmnzwbbsKzURk4yygNN797n15Serxt7QuUJj46UjZzQqFfnAj4piUegT1BhBHcDGRmxtY",
  "key28": "4DJF4KT7AoiJyu7W4L4c9mcfrq3Qk8EVWDNYj8CtCAbNyctQD4eHU8Guqs6ZgPFqstu1gU5wkVdEb7ZobYsmu7T9",
  "key29": "2r4h2sq2briJPtNbjuVvp8HAhxbq44WmzDbKsUBPwoE5JKBrPVrutgcDQSgCTj8HpP12a44E7Rp5T3zFiXjsN84P",
  "key30": "4UG8nxHQwRsSmArEHR4wqSBRGVr7VcgC4DAi4LbdVyDujpWP9Q3fvDPRBR6t7JrzKGmu7KrKc3MAsjmJyBnJATp4",
  "key31": "3JZD9nvg4veHVoFR8HD3jSwFetmoMVvKYTgQ1tj29EWyfaw7Nk92LjjFvjZydapHdX3hAJGfLJdbW4HvepNVGuub",
  "key32": "61XJx6yvTWt3eJKsQtGUatsi7tbcGMLgi7SimLWE6B5XAM1APw2ZvD3wbfBWwdJFrckg6Zb3Km1qsk3hcVDnZCQS",
  "key33": "4nJif7yUdS34AFvfgf7uze2pbE5y3CCfzgSXUPdWywNsrbhaZm3gBH4kwTzCNcTvRx5nZ7pjkekdTcd3xSxDz8mJ",
  "key34": "5sRKtSq1xLjdVnQjKqgTAA9TvoChuGCr8tBnEExgR7ii1oT9BqYXvsps8uNWU53FkyjUK5aHBuTxoh342n3nFYwB",
  "key35": "3AL4yPwYzayJTBvyiRM6gaE89vNsTbe1L67MKuo6f4LUWbCTEtmGgxbU5Tj6DR3qcETg7y8P7Gyb4FtnBEJ2Prmw",
  "key36": "5iNyo6JHaNiJbGVdnoNEupL2ZCFN6k1Jm2kxQ3h3MDrfLNxzzfXuHgPjB9eAZiKNk8U5vzmHC2HDovWTtpCusLJm",
  "key37": "3AGYk5hHiW1YTzfYxMP7LobjoctrfFEYqSnXCFxwh4DC4iZG7SiMwPqfNaysVHUVxetyaaLv9v6PFUaimC4Sesoh",
  "key38": "5K62UGA1QyViVW2UhpMWqB4zGiLRfXyR2VNsJK23MMUQoJwg2xkiGa9rDNZaa8d2g7QxJYxSCSoLoZuVWHr3NFhE",
  "key39": "P28v4cSiFqa4rkAQsreVSgamDTRbP3nmb2e4QP5Jjvhkge3aKTHBvCoXASPiVehMszSBUKVrG4iBa6dYMsjG1Uh",
  "key40": "4N7vLK7KC57aaEsvzGxHoQB6kZhUavk57fei9XUbUovRAtazcZpuJjZDoaZ3x3sEucBa4HzY2RdgvjxPzdT4Sgyr",
  "key41": "Ah2oHh1KKASHvMo6yGKbCcYMm3uBYGj761r3StUrnsTk5Hb94BcktVnYyuCE2inSnLo8acKGE7JS4VufdRQX34D",
  "key42": "5dk7AcRLUBG9AdC3mehn1Wt8LWE19whCrTGvKPVays5woupcknJia8eBfUwiCeLbF4rHZkTwKjETwzdRPdhm9f9Z",
  "key43": "o9nxC878VwgX2yeS4tGmo5bNTT59757A9FCRdUDCzzaFT3MASxo9T9QZyXF361VnNjzXNwVnyPRnRBunWxEQyWT",
  "key44": "46gJeps3M8eDDBCjqKspsC3ibWyYzcBHPyHZWi474vWRrebhv3dt5DcZrm2Y8jqwE2fGb6X9jDDtXFnhkdUodwH9",
  "key45": "sCZN4ze86m4WUGUkG2SGHmHCQyuniSxSwqTxiChzRqcXAgiyGci3bcp2pLigPk8Bk5EQGR6PSi9KBrM5qN9iaZY",
  "key46": "2jvzcRzZqr746C6d437yue5XZeewZUgvmukJmXzrkiZGJxZebW1fLMQ975mHPp7q7guHkHet9ycwC48uH2zn4ACC",
  "key47": "62sptUwZEXd1CfSTPvEcDnBtVDG4YsgxqLsNekGR8PfHa5zV9fwHtuvuL1QjT4P8vDo8ijBrf9VcuY1nymCo68pW",
  "key48": "5mFQwrRpivP3qitU53BQUvPTgXvEqRc5T5PXbiG42tm8Sk4MdpTyEnJWda6GLNFrHHBaddajnjHCUWBKLDSQVSoS"
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
