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
    "4FmV6ZdYThUWYZs2SZd8sXsDqEWY58Z52uKUXZ1F8arBtbwHP16HZuBwpayiJpPVZLCJUM6QfiFdriUJgWVhRZXA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MQnVZEUtJ4p4F8iW3N6QpJAdhBvwH1Tns4UB9r6zHYY3tjJ39nbxH61oihoF62M5XtTu2Dfa2RUDizWK6Nd756x",
  "key1": "2U8HePSLGDSes5V35gYsJoDmJdoDNLJaPS949r5sDS3WyJYZ3V6xwQJirK61LEA7FF6oXxqBTNmZbv4eDPTC2ntv",
  "key2": "5gGMu8cSSPk94VGvj7MfRgRJ6wYjSLMfGKQAj9U9TyAhDWmZZSTDH8NimaLHdBYyiCw2AULeUuSTzXMUDpp4S5JS",
  "key3": "2ARMWzZTsG2ysofschKxmT76Nun6rRLdRaBUsE8ZTE5FNdNyVeKGhsHfajKcKrp38To6b9vHwqX8qUgvHhHPEfyY",
  "key4": "5qE5GHM4XdABhKfS8HZoy2UEHqg66Hm2ihE648uQt3SXLNFaicJmwdBfBgSzdSWFTbUm7DPKY3tFq3HT1PtcCdMB",
  "key5": "2ix8ZwcrdoGGD5gfPyUjLwSm455BECQF8xjjwgvxyCFXRXK7kuPzTQLvUXmg2GkYQjtMnktBPzoSHVVW1tVADrvs",
  "key6": "4HR5YyBVUcxp5u5cuKu2vjcvSFLS4r1KgvQsUPeWQBnJ9EwdJdSiBPWSFuUEZmVmmVZruKmjBSmgjwGx2PA4GgNr",
  "key7": "2XJzRpHa4YD36dYoAUXscnQsoHG3WNUX9aNvUdPbbcjVxNnEDC9KD4w3GWqYWZ7ujHmwv2GEkp6NhzEhgJQ2Ys2w",
  "key8": "3Xh72HDgx4jNzftbsjwCbe5pUGRkAmb6d62nTNXRPDf3eozcckFU1KWHZMeUUeXteCHWgwzRuduRoCP6QQEBBiuS",
  "key9": "5Zc2NGSGr8w4nukyWZ5M7tLrpqi5T7b1cwJVnG1dpbe9L44vg6pDWFfDCgJpxoLvTjUnL1nKh5ciDFBLdhcBVdez",
  "key10": "rupCKF2o5rYQvZYKxFNxYqMCaUmnZt9sYKtCNf5y2xFYi6fHqWaVXNBdPir6mRfivcfEEfnuEDdxFAtNQMgUG6j",
  "key11": "2B5kC4i4NcG2QBQAMF3gTMZVyf5WN7fXu2LqeyxeQgd14HpuhxH5DM2SZeW37KhoFbpfTzwqnjfKhbMjJwe8zXXh",
  "key12": "2auKgfBfwwxhR3kWPqJUqjfyp59NXzLxrjT9hztBPrU25bEUvaUqgEKuLqQbyxEQEM6VCH4Vr9pWhew1zAcHZuhb",
  "key13": "quxXTydrVUb5sggKzBcdeNqDtuGttiVbYzXqV3dFogh1G459ia23YBxZhLTY4VWyvCouDnmGkkQCb6CczSPMg7n",
  "key14": "22uqv7C9111xviDtxSmsoU62NcBEhVM6kRzK92rfPvA8AroHfQ7sATB8DxJAunNZLbhzYEEzBMA3H9AxSRVyDhp5",
  "key15": "4w4tjFmRevgCoAZDh5nWpjGRz5yKPuXXCgYnt9KsnA9boE5u8V6RVeLVP56CXtDMJJbp5zioW4x3s2DzBr72HKWe",
  "key16": "4Pdi2G8BbKFLUE6zuUUqWqqis9c7nNcbtmCYesELNkySFBwwpJUyRVC8fcLBgpZHLbi41g6CL5MsiPJMMoBnsFYu",
  "key17": "4P89ZeC733ceHqAnvUzvcqQFUMScZvAiscQS3RG2Puz2eMSAAPF7pBheg1b7tToTHuKWvdofeKY87ix3rtzoskDU",
  "key18": "5EcZMi8WAmsMgHjMgyzw5RZhoemEpzkM6yoX5yp2uqRVvb17wVarDzVGZynR4VHtiftwrCuDBUR12VjVRLgT4xCJ",
  "key19": "3BfUu9rNG6eqFfUHqFrc5PGKN9cK451WVuyVS9MmpcENLH24AxxFrD9XkLZ2sSCVoLsNNwFAakCXt2Ni7gyMAcoc",
  "key20": "Dy5p7JhVgK6X1xTJjb7f6qPUwGTaJjp9b18Kjqhi9G3UGnzu7PTBfu9xnb4oXpd5ak5RJbyTpuas4K9g2D3jo63",
  "key21": "59a4SBRrp7UZA1kxBxi2X3xSMy7MPw9eEeuW2urNoaHt6EdyyBdSCoRk4CxkN4KQV8XnBhdpka6TUGC7WU4f2Ev2",
  "key22": "2kBckLJJBT4XQ86M4Qxz7Jn5jQAqGYMH5gozuQ5KsjnXPBFKPid31oZbYvycRRfVXcaEu6XGhKjS7CHiDheaNhGi",
  "key23": "3Ym7VBcGxpd5iSnxs7Rvr5ZoEhdWL5hce4L2yqqKvozaFnoLqSwLxKUT1pCy5GuJRxH9s8h2hkY3bPvHdbJZqibv",
  "key24": "4YPPGQbz9SzppBdv3L29mvig7tkhuraC8ey3Qri5ysz9pvWoSEBZ3uFFpHNiaVnhcsnQsEykd39QCWWRPQBtThM8",
  "key25": "4egB3Cg72qgwnLM4pPGyez3Q1CMXcHAEJgTumQuAwEzv43WCxLp4HR2ZpccJW6hzBgjrRYPmBDRujEeCH9K5PW4K",
  "key26": "33PkhTgGgeKNGtV4bXhnec1DYY6WYAWpptcmwT6YGaAwiJKozh6XLgMpAatQYW6gwwFBnhaNyJzQAM5U3yArVD5n",
  "key27": "9isDcKsR4N798oMJjDNTVwTurvPe3pbwxvNHqCjxTRoxFGQpFX5aZYvAe5UFHmf8LbAUDGVqidCYthnXps1NKF8",
  "key28": "5TvmGi1x63Ao3iiwAiHPPGHTw4UFkNUJyw9WSQxc49jf9Ky6tXVBBDNUU184DozPmkz2YiitLioQ74b8zEMqbNZh",
  "key29": "2yYjgbEAntdaMMJqLdyZLa4hJ6i8yppioiTJ1gWfYMYh8Vyrr2nTENPgfPhuSuGbejENxFGQk5iaBHQLBYFfUiuT",
  "key30": "4UUfSHey4cYQqn3ucwq3abdgk5NugJacv4VFzLGtJ1EwkdRsADm8Ej1DFm6xWQyACtWSGVspUw3NVVxFyD7NZ4iD",
  "key31": "5cqv6xJmhKYtAfm1GwnMN6Ay6soCGs6kcHgBUWksuEyUejRZXxFFs7wLjK4F2a3wG82LS9WKasu8Ci5TRuUPnVRh",
  "key32": "3FFsq5AsQJuGcwCueZiGwrMHVwX6Ju8o9EGCirpH9w3jW6QJ7qsY2cggzsx6d51aTNB9z3zhsJdjjs5hT5m8gwWE",
  "key33": "EcmGWSDfj4L4aHbd3BKc5juPPLwqTfbyQ3WecYdYEgMqeC2TJ1mnEuey5HD4nBke7qRsUhaxjseTWG1rmsvsac7",
  "key34": "5RstyBPhRnvcLMc8GguL1RFL6a2JSCGAJKy7tVEM5aci543F4TnDH16Fijf8HaSNgRvs4WinALm9NWufkmagsmsj",
  "key35": "3o8MRL3LUa5ZnYGyiYLd6jvx2r7gWpi4vGuZJpwnHVq3WBxvfFUecAqvyFNvq8MoXbiSMadoBsFp2sz9oLe6JhxW",
  "key36": "3m7aAQ6Mc3tfuFMKpghHfmxDusV6VPTcMwTLB6RxbqQXn4QzmemwQt6TZBZAC2N6jhx9aJfjwdEpRTHKZ2NzAxtm",
  "key37": "47647PUizVpecGJ6V4nTb4bkdDLSguu5sYsyz1peVUHHtUaxpE2K5R67KwBBeStM5PhUMaKMmhWc3cNDUi1fcmqM",
  "key38": "47xhgdVz2XQeHvdMFZG5tHRhc4RQ1pmEAyq1sopQyt34cTvvooN9e9GnoeBcJ2FV6PLpvtDq8e1rSeLUeGkKk4tu",
  "key39": "5KLm6G2cZNu8hB7QPCJyKmKzm2jLXHe7Z1mdVgHBZhibf2BP2BFBAaPRbhVaRk58HFE1qQxLHEM5T7KxEmSS2TEL"
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
