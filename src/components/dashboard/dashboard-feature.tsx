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
    "sqFWJvfDEY4hq4U9C1WS6no1moaDf8nke3v7Gk5ni8EMEaooBagUBC4t1bbvoQozjY85eFnaEQgwdv4rfioXEj3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4P3NkaZmaANpsu3Ag1w9Yd9Gn58B5H62NmrTWkotUzVL6FMWndvo1tegPx7FTvkzLkTQ9SCGXzaW6Y9LW6C61UHF",
  "key1": "2P42mT8f4kS2eL5r44jR7rVSLtyDDcJGziH1WkQWBTPawqdavvRcBjALMXTTzbkEeHXta35ui9M6zfMEUF81XbcH",
  "key2": "56ZYzJeG5heZq8sKfo96GphikMyQjgXLpaoZcUhsWNJrYJj9MJApSPx2wVsvEPkoToKXQArSDYmVpcMBTLXqyYW4",
  "key3": "2c8Fsn4YX8yWtFZu8w2k8aHwE3AdaMtJfMe4YXxAFCjjmnQrBCbpbZEPdoNg7mTUkwYATHf3WRHKivdeBuMDewJa",
  "key4": "FBEWYdGdqTi7UJ2iUJuTrPyPtbyMzbJbCxML8EMaeLGCW65RBJ9GAhunkcAHXCZJkchRGGEgL1WjpJtjsMKAw2M",
  "key5": "UW7hs8QJhPk3K4aKdoMkRjxeXyA12ruG2jK9wxkQSWoSBLCYXDhCnoTrPmQKSYFWYAP8Re966xC9JJ8phRTyQWS",
  "key6": "4uGurgu6pAePM5NHLWVBdJbD4qfkMSS1zMvkAXJAJaSuZhuH2b1nEqnx6eAfYiPDPa5tfriRsqDWwSCKbsKVM6ew",
  "key7": "3vs25nEoD13cg44aEe3si3qzj6gPkhKMnSmVY4SQ5JJc9oAvgdeuSreRRNQZd8tCjjfRgkJh8uhorRbGHPSJNURn",
  "key8": "5qEN1oLgCBmQmE72YXkxJYaUMJrdjg8ahcLmp78tZecSwxQNmmL7CkZD31e6JmQYZBqg5z59biGNwFWVm9QnV5UE",
  "key9": "9uazmb4cGpddVXcAfU9M3QVh42h1eKGz2ag4cFTKfjkjSz36LTCpYF5bnnoAtNAwGoUF9ZwoRUmKff9yHtpiuzd",
  "key10": "2pqiw7L2EyK4pE8TCxij1sSAcS2xrKGoiBtSaY5cYyvKer24xtrzGGjapbGhJSV4dNinKPDSET9qT8JrZiN66Xyd",
  "key11": "5kfUBcUD3eRTYDBtAwZfP4CR91DdBhfVCBqipZLn8UuVtvQwykFUyA3ycbCpEbujXu8Xx2XBKEWbfEU4qswa5eKv",
  "key12": "2KBzvz2M22738a3N4gfcVy49uk7AXbkX74iq6HEj5X9zPnQ5k6ZhzzKkwUk5bcrWieuyJQYC26ueHBLL6zepJQvF",
  "key13": "5v8TUTda5V186CqhjgzP25PXA1aqfHRHZJSEdRCAVxbhbrTzbXRCoyYRkwVryar49SVqKHuA6SYKu64AT7K7frxe",
  "key14": "96isR1i2R7TYScU578X6YTEARKQqzri4RNzC29rSxdfWsHPRi4E6nfeAJXveqGLJe7ACwWCSASj4tEgzcjdP2b8",
  "key15": "3PMJ1eXBqwC2TSzcMsCTLKPEJvXEw63v3QdMvVUAbC3o8dowPzYU5diR3G4JLtN3DWfGN65bmpvKuC6cNDpKwaJE",
  "key16": "3jSn9WBWTSynkDbpXbByz3TSZrq9eG1HEQkzoQ5Sdr13xFQCeHAhXLbiNyHr9z3vTN34ebj2V9WAjWgjMy2oz6gk",
  "key17": "3d8M86GbL36ktGEDRBuT6yqtfYe7JeGjoLFfHgn6XfBGz8gB5Wk1LgmYXj3QXxU4n9nKA6e2szu6xZX8qeYuNCru",
  "key18": "2zcCCUStFsRpWUBVdRiQncULVcm5pocHgVbBisKmGcmVmkWzSUUJEKxaQwjR2GtKNCbh3mP3rwZpCbRzj6bHYMQ3",
  "key19": "4uxu93s2mjVu1pt4nTqDWuLSLx75U9MFazGmjBMqKzHWJYmWt4JN4mvQLhDBFskYsJTp9Wwd1ehEJtpEg5ydABsL",
  "key20": "5HW3F3A8hgWmgaddr4dHr1nCAMyejGdargZcTusBLUAuZ9eraFTH779Qn2eSmGwxabd6JoE8aNWctoLPyWNkaDRe",
  "key21": "3vpzzCJK5w8DZfYewm5iTiQ3msvJ7fVLhqKGxQdQitRxmbRvgMoziK3a1qMVqFUQXEcfxba4TqeBR5gHjcL8GZY",
  "key22": "MwfbnypmPq6mJ76LCFBonGgBGh2qX59K9GVc1Dw1HpK9SqgqyZimriXSktwwVy9gZ5f5knxeY2gwwiDehpgKytw",
  "key23": "3RZy8DGAfe478szGs2P8sSEmgPAeiAvmwHAEJB6W71ZDRfZGR9vk9gsjyf9DpiasDs8gfmExnaRwMGWWGvUC2Mo1",
  "key24": "fPA9Nr9g6rzxA9trxHUxopMtZj7WRBCr3MD5qb1iqqu82tf8dLGb1JUmn4yzBhwNrdg3g2cJhRwTe1eAwNgQ9ff",
  "key25": "GeG1TgoRgd3TUCqM8RSjfdAW9zkUv5nKfG16ChG91NV3A3k3iSQvq85JmQXE3mFt6Mb33VYEu3SCZR7TyUDccd9",
  "key26": "4nikpvYByDvnsABkXVDFyYu9zV6gmN1iXoawgUFYKNg3LdwWb6Zym5P2DaMtwSZuyPRoa5Yc77Fkfw6vM5asghpz",
  "key27": "FkGeR8kwcvZhVSmvgEAWyaH8nHvUXypyKdfi4rUSTmvp49XVULaHS53gq2tPVoiY7YV9Tfc6EHPQ7ddPjW2Gsx1",
  "key28": "ZmkUXBQo1s8etHt44sjAzHMTcyQHuDJC2LjS4TL1WZCFyt8ATiZ3x7iLG51HJR4ZFan1nM4qT7BN8DVYVdbr7Bg",
  "key29": "2yrGDBtrvRJcKV3LFYW5m5wiHP46ZLqGNoXrMKZxQStTHfboYXL3F369fuFeuFbekBbRHgBWYLoKsermPb4mRF9W",
  "key30": "r1mUDt3W7Eu3ZosXGMQ556taZQHoF1wwVvvkU9Z4SXtC3ANEejxBHG1w9YCRhtvP46XDQeh1LKVFzLNeSoDD2Hu",
  "key31": "2sTtA4txNzPPie6hJoTqTdz34CMtbU8FU7s92e4pJCd1DSduZzTb5qZTopkUXorQRrRHErFHuK8pnfTK3PMAWAb5",
  "key32": "25PTD7degEsLLXYqaNcZcX7p7wE8reTMBooBCttQUnX9dfC3ZbHi8aeQQRaJAEqJnuhm4e83St8m2PqwH9sUvX9L",
  "key33": "4P8QdHD8WT2tQ5ABHxW4VmxwJJuaRB5BgZPqdrvZqrh9Fo1WFmDX4sj7NA2fAiMTFbfcH1yK3Vti7KVUDxxRskHW",
  "key34": "Jymqq7umpZCw6d7d8HCBUryFeR5AubKKF9ZR2LDdENcWDz5Uq1RYi1Ygsr9z7ze1GgNGD2Svbp4gUggSRhJ8UgN",
  "key35": "2UDsffGM9TMocpUw6A4PdyxGANxYWxAbjAv8S4bCvxJAyS8wAaQcqY2Yhb4t3gkqtUXoMmPJE8ViZxBFfpDBosuN",
  "key36": "5KoRBfshHpLN4fwzbaVjHJzEsENg7BLusvzVLSxkCvPcuACMW9SM6cFbzmnCSGiRGBZCLtcKNDYUkPTFsW8B22DC",
  "key37": "5ZSB2gN3ayD2uQtSwsVDfJHz5UTLvDzNGu7JCEaGnehNz2TKxDRi1mimcCTnd3n15ayFHn3AwZTBSMbdVxDLrtFk",
  "key38": "5Rxc3HeaPRfPmL5LmaseLYGafWdHbDPP53auqc1VB3eRPEQN9ubo4Ewsqqct4TLHibX8utgww6sWFftK7LkdPwig",
  "key39": "4kkHBBMkojdg4Y2DGAP7ax4QDhqHz5EbiQSHPexyKSuTzw6Nd5QVMGWewXePmFCbzGnpV6Bm1QYEPddMUjxVwKLt",
  "key40": "55QEbp9T1AFtKHosVVFPA1bjqhpQGe8uFxU8eXKrex92PgcPComeGyQqMzmEHFcmoMmWpYZCRHt9dowa62FnF7wA",
  "key41": "5Dn6yyHim1vor6kSK4LDmg8rfKcU32jEP2GXkt5ALJzLvgAtCVh5NBap51YZhfAiKYy3HP9JNsz3iNV3p11MZJyu",
  "key42": "2jYCWXSY6GUjhztZK3oTedzzjFXHg5jZNQ29idjJ5d317q5eHYLYEYCM8oJ7icw3uiiKxqg1875fHVFqCu64nc8f",
  "key43": "5FgqrpHFFWE53gWw4v8EnjeaRuJBncdzQDeECHyPmXwPdQm1dSmM7DqPsNcY9UUyRZXPwQYsdNV23mj1WRAVkYu5",
  "key44": "JMmT72AU8ZCbeHQqTwuVr5WFXh1WiVov4xxdxRTgFQzZeBfuw3z8xufDBJzP2Nyk5t5sp77Ew1onM5kEPYtdFKp",
  "key45": "2y2zrCkWqoaFVfTmd85PFdJ5UXBH9cLg4SUp9Aw2vRx88eDa81LxGztRZyphFNS4TZd9eLwpaERcJ9yhgA3fd3xE",
  "key46": "44Y45kSQfucyKU6P7CGivEqWiTRTy1he3zcioVc74CU8CZrnGocP4nP8Bb1R2B6Zw9Neyxvfdnn859ybkfqB61id",
  "key47": "5oU57RcbuhHaygYrdCGn8mr7pLnr4RV3qWfwFaAmaozCWMcn4tg6z1V8W1N1wsyik9qAxnERbuCHudX65jHJoU7x"
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
