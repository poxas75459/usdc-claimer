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
    "3sqYik6K7RrLBUL6PuL9SzJNrSi8XdDeSUsXWVsGetr7f8vvdysgDs3PVcaXbwAo29ASjNP7yte2Qc5S3yDbhsvG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64NiNydHd8arUsifZjWZphh4ANqRAzL1xPAKviqGBrUAwxXFq1prJkaWT1LyC2Y9CNhk3RB4ABj76qxDHS3o5eAv",
  "key1": "G1Tj8WFoQ6pmk4bKaWfF185GQA9ivAFpdWnDnVw45WWvuKxUBJRgEKpQT2r58aVoJaGGaakbmzYV5YLkcTRq1Wj",
  "key2": "4mWbavJPMsgCFY4HpVC2sEizh161r62KfeTnn6wRfUFpcXjAmrCmCTnrpQwc1z6wsQ4wPGfAXqQhUPcXNASDAE2t",
  "key3": "3D8qGfR8QcNi3P8Vfeuk8s2QMLR4FuwKH1vQnn7db5srwTFtTRbRqDnDyvAMCC9bN6iFadPTYooBiw4QeDn78uVM",
  "key4": "2BySH9ichtfLdeTbrc9jPtJecum8pQU4G7iz4EThbLBrmaPU1qtB9gdj3U6S6pZk398qxRBn2xZmnJvj8r8WVdxL",
  "key5": "4Yisdbyv7q8cQwGSvfZSTG1rTobjkbLrckh91j5VyQ5zqfGRuvXJnKjxRTHP3qN55dd4Z4vNztL5WVu4kGjSVxaE",
  "key6": "3a4aQmWTxWoJ6UzeAxgrPRp7K8j8HZ2BHNobi3Y5DBGBCpQx4e5p8Kdhyo7MZPN447LJ4obDzm16JvmMhb3G2yyk",
  "key7": "3JxErZmSSPVsNkMeiqbwe9AWHJoc18nDHGj79Y24kg9ShZgvv1dK2zHSmgj3JQnrNUXz5uGwLueWkNHjviMfvUfY",
  "key8": "4sGinwjxgc5LSiQQWaLmK4NVaxvgD1NdBAFV9eYuyk4g5Ys9t8NvNqtpVr53sk76sUTw1Dd9ozAmh6YhB8x2JGHt",
  "key9": "5DKKoZgpPVW8K7vd9YPmp3ryG9GQ5d3SpHYUP6d1LfPmrxGt8qmuF1W6CjHibT51E1PCcbiTtA57So4uGnqVfzAH",
  "key10": "UHtnFi7CP4tBgvMx57PtMbCxkgzeamqqdtSWANoPimKJXA3kpnURES3f794bE2vAu3YVJ23yupS5Ko9FUhn1M5y",
  "key11": "5VPdNRDhEnY5DMXbTzzzAhJZwqZoxz9GMjgJsjzTHikHZo3fFbGQ2ypjA8qeuUV7vP3uQQdSi4yaVMFK4pqEQJRA",
  "key12": "25qqCKGkdaDhUfCc1MDHzfXnf596r76LiGKE9SnHEoj6CSEHFggnhLnTrdE3stSAQDGLobSNPiADk29VX8ieYTXo",
  "key13": "2pt28CjVk5Umm93fywKr71fJYb9UDLXb3Jtsu5f8ixq3FYKaLK2jyfmdS3PHtiLjiYZRJTebfLBm3wQfmAEua8kz",
  "key14": "iEaAbT7ujgRCFxPhQTkAysSeDc863wFRKgE2jxy8oDua12uSWHSDzB8G4u8nvwR9d6CSnDfemQU6uKQJ7NLGEyE",
  "key15": "XNwD4JUUJHVSMnqkoExkTibykwoiiJLiFo1vYc4N7nF4rqC7eVx5v5R2d6fQjQLZXVZXaUaJYJJe4X1qfGghkri",
  "key16": "wVoU9DJW7aiVwxazx8keM8WxM6sMKyQqVo3pJL6jW9yTaRxnYUAWUzMubhpCp5ujvB5bF7CgVWntmX8CB9dqQz5",
  "key17": "5tZ62Wroqh5cx3HNUCL3NXzitXREVTpxrhdG8m3iLMdMy3K87ZT3rjCic3hbRvZG1vS299dD9m33HpWxanJcEhbe",
  "key18": "4pCWX1jwhrib2iZtaxnkcdwmSTuhjxdpEypwT1CGsQaJLQ8c47RgvRya4ksLKvGUZLoCuFABVBnjWToYTDrxUm7b",
  "key19": "5ZYhfS4q2co22goTpXDWEAG3ijg8AzAMbrhCYeMzGqXGwZBegZ1ukoEYFg8uUjznTG9oPbuc377zUfGv5SoAVo31",
  "key20": "2a3w1BZPADqXCxdEoU7euM16D5AP2Cs6VYW8vmuVMMj3iQiB7BswmH2DtuonKjx4FgFXjuKM2qUR8gjM7jN2x7bz",
  "key21": "2AHnQ5WK9EachU7yFgYDyuTonXDpM1EyRFfo2DpY2wUYtMnbszUL2E5QScnXwoX6rHZqNPS9BeUPvfS83aqAmoo3",
  "key22": "4oESRwTsSGp4BSrCBv6vxEhWFhNe6XevfPQGDJH2mHAJfmry3eXs3DpJmVMxDfPYr4ivuEzxseK6Y3KqjcUWGW38",
  "key23": "3VQTcu8hf4xjGwrcydKZTqPkFyfDpv16ZLU9Y4xSyaPZ3QdEkq88Vfst63drHNrkciZLNS8UkYTTwscEgL1J4o9C",
  "key24": "4NFH7bMc1Mi3gEQLbC6eFthFxc4GkPRQzC3ABn4HjG8wT6eJ5mhk9Ac7cTM6pZu5435RUgFbPUndC5kw5XeeuYSi",
  "key25": "5sfRdXipBmZhYzJUNGFCnRojbsg9cdJSAg9HwHyxjTxRvjFh8oYomX3MohsYoqaZwRxCVWWSFwdyzm9X1EqkQqzH",
  "key26": "u4vQ4YCWPPKWwoLYcf7bXXxC9oGjbAb8ucG3yzNYD1MKZQr3TCMgezbcHykpf9adumRQsR7LtZk2oF1w9NZmq8n",
  "key27": "4THHRsAEoo4CUe45A4BeqQQLV4Q3HJY6ewRVk787sT18wDrJJPDWaVT48XXbqk39gcdLiuakijB3xoBnZkXHXzyd",
  "key28": "ABvFqXNEnTm22cHrhsdMdjeC84XhpxC6fpZ654A26VB9i7XJR6yeNTdSennc8nRDQswG6gbMTAwMizaCmvQ9meN"
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
