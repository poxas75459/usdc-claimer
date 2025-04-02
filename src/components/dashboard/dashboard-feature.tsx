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
    "3VEAMghLpRrbTh2pzBZVLXMV8KgwJaBZjDS8F9QJWC8qVFe97TFjGpjXiiaCrfQkrLxKAUbbMNhnY3zaFwbQifkx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kr8rVGWMnnktH8yr8z7vmVQhkMcp4Z19PT6W7ZCwK9UeHjxUksrfKqv86rsBu8WcEBMyQFvpCDWj4HxAEifeSHq",
  "key1": "2wFBQSsSbvxrCCHeyaSgPTmHkXbBFR6D75GsiRMHPVPGGbkJMjiuNkqJy3c4CbicfET8JNvHGHfrZ6bjnQUwJ66f",
  "key2": "64X3uBihFDmDtmDaZg9mPNZUSqKTBCo1UmyXxwDfa1Jw8DMFZXutHZqEy9DdxxbHznyqgwgqtUUtRZEsM3tDnAQK",
  "key3": "tXZ1HKhAbDxXV5xzGbSwsVW7nJuk2mFefPVxp4sxcmR1NCq6cLcFoek7dAtqoWSg3NPqiQQ4TPLMALCudv1Dn5o",
  "key4": "3V6G8vctpFDaDRhKicsrUCyRPUQm1GtuCUnCiqPXYozELEEACpGuwEk1kaJCPdAkqWy8Tift4xpbdnrvbiAa4Fp4",
  "key5": "3KhLNXp4gpznrV52PvEAFjcoPAsQZtTfFkhKBx8nHyR4afhSvUMxXULeXBNwCmcPNAkjWPb4BDHJJc8fochLXnM9",
  "key6": "4xUhLQe2VTwdRhe4Y1NYtPMinda629VQWgKGF3mertTCzXRB34GD3CgRwALSugLPypZTQBh19hqa6qDfPQfi3TAo",
  "key7": "3DVhAnETh1nASphDsagqD334d8w3DUUJkbcQ9LHQWNY6Xpa4pSRvuuPDDbXkHfaRRpNQoeJY4pejAwNP52erWHsK",
  "key8": "4uEDf9TCX6e58iZtALLuSwG1UMVBFA5Z6To8eGBDifphrSuTK6oxsEbt4ESUhytCe1DeWkXSBuot76Y154dhQJPJ",
  "key9": "53vHDq4WVLMxnifuhFcqnH6YYDLeYh6cybMsUDs4mggZUjRYJ7B1ciEV249rEuwxusmBZ7rygoLvG2AuQdgXTy9i",
  "key10": "2fJtj2djkiFbG6E9qVFRLnJUpLsTLVbu8DBqkxVRW9qcm3pDongEYRdREJxmzc36LPsepkMvkJm5voEKcBA4iYA",
  "key11": "226PhdPHTNeGwXhi1aG6oMc4bHbGAvsnou4gF2Jch5PXwqGXHDDYSszdxXZtVPSLzQCZiRDJjbpvFyMKETFkN2cQ",
  "key12": "2iZgYyqnmfcxzarHguBYxiZLhBh3ykS4KfpPBEdebG6akEx8ydNk8fFCuuCozF7JVwGfAHVpjVKQ8RFsECSdYsTb",
  "key13": "4apohHWEAhpQ6Mi4ynZemRp8erEnGtN6p8UzKRMKiVCfPyg4YkLx3sx3TxBB8SaJkXfARnFyKLYxDrZGkXAqYYJx",
  "key14": "3LyA8aRb8qqr2KhDKLXPxUvZkdowNDTeHUzSDVDLTduwduozQEkEYfEgfQDgFeF5ni76WcfZXznnu6VXkpRLeX2Y",
  "key15": "3ABquPVtAubajVYq1oqLJUCkG5te9y6WP1UvK8nwfbqH43Z63L163iWSvc7ypk1d5JETMLqMUDP6ywascykDXQbN",
  "key16": "2CjiGWAccdMC8JzVbEyTnMTPwHqXYU1wiRS5DfMmbjdMSsRfijeaZTZk7fnbchvU82QZZgFvncXjP3gg9J8Ue5cE",
  "key17": "3tLjZnoZkZm7EZAr6gUHCwppVYktZcB1QhE1ED7ACtpnyMd2UPj7uJaKnn1yGLSHRQVJxMFghMtKCrvKM6eVnVUi",
  "key18": "4LborU1hHbrsK3hFQ219RYjqSzRb7u4NNDMssp6Pa37PDH1Vp62jvSgHMsUQWTnf6CoLmWPXP4ioC8GD7GwTkzEk",
  "key19": "2MDhcwkZawxkydkiksjHEAVsMujtuk16Q4j1ss4bpLhtHwtfHH1YeQE1AdDsNMXBwfTKccXja12hvey1HrK4PHZx",
  "key20": "4VDhEX1V9xDr8NEiNm8KNZsGKWswzEdsDtbJX4o2a7SPkk31Fa4KktEgSTuB46NXtHB3hs8e5gLwdm5htjn5Xkx7",
  "key21": "3WUpgU6sBU6c9p87Ez8hhQca3uX9XGT8Q56K8qh13Xjxfk3E3xCFSWhbUxyRdkm5TjZ4KXb3kWdUjEh8prmS66Aw",
  "key22": "26ab1Tz4K5Gdh45jzsYiA75h7f6HQK2fd6qzLMGRoXTPVdxLkZKwwABNfef6pUWTykdfciPX21n5ZnJveoFe3wKG",
  "key23": "64cuaiEqse45EkoBj3njrYgCsTQL8jpTCCHdoWwoSmNPquwDeymAcu4xNwpikE1CQC5NnunXE7xuA5HDSgYD8Wd4",
  "key24": "23vTs1rvHYGeWsXJhag7FdPHZunbySVGLnAFpghYfBArudoqaaJ6Fdp5hxvwgjEaBF6sZcWNUtDrNRARQKfVKX56",
  "key25": "5mQFkW8t5gVT52johbMfXHXMwUELpUBcXFk5MA3v1PbtE8PtDeDUigXyzRuBXWyEcUfMpPbARuqkpqHb22FJnMu6",
  "key26": "4V8g8FCpkgAYiFvKgJUPD2CWZNfzLkaNKrEvMznpR8cdhQGusACmKmWssvy2ribJwcDBjpAmLQHhesnYETasAEfe",
  "key27": "2DHka4RnL9y5Qec9FxtxtDGZMiemtQrVqhdYmQUmYb23LW5ifzwcyk4L89CVm2SCTGHj6TrcttWLnUkXsrewSkwc"
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
