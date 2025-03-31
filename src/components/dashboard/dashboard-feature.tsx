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
    "5SiJRt51jirmA76dRxsDEq3RFS8DG1EBSfEpezsVTvBn94K2VFgxdfnchbWzJKXm8YtTpJdvomVKuxu5d8dELWKV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "j2BJaNX8KYbtNmwQJYY98V37EveH5m81YYcP3zRAVG2TYZUmW1t66EmCiYSybBisUCLAcz2ze5U8EEVwyoyY95A",
  "key1": "4APEkjUdfpEjftyULZw3RM6k5T2zgeHsghKeNJ6YT9GzcnY5UxPCkVsFqPwfXdX4qA7yexFjsNzTYfsBSnb2tEAJ",
  "key2": "r4BbrgpvuJzT5MqEcnuKdhDDc3TbsNd7k1f74xwG8qYMiLC76cysb5gUotUJPxCw4cdqzr3HUaTFEGrgSwdMngu",
  "key3": "3YLaxLcffpkCWLRsCBaDvn7YbGfsPJ4TaNd9t2SLByHzuJpx2xPky7ry67JvZgivu9EdjiCj5MPWtKc1FVEGgTRN",
  "key4": "5nfg9pmkn1C8MYtMivgBLBDWMX5LbPqoZ3RS5vs4NvQG4jd8HEo8NxwCsT4vzXbFMNkC2oQTnFxDwmBL2q84pjt",
  "key5": "2zpGoJoVFabDRz1FDur6bzEyPknogydmnDMPdvQFVrs2Bq6BxYTn6CLnQaJhNQhgw5d8jCvD7y9G3rD742rDqqHs",
  "key6": "3tW8f2Pa8sJQqLsHc9YugatLKTyU18AqmZPfDMXXQWqXixas48H7hKaRzfjUs7HAnHVdxD1uQ5iF1zygg9NY8FXq",
  "key7": "2EgUG6L3TWnBS6UdYHrF42GVokwbGEps8ATZrYhXhspJozbtX798YiGdVUgjYvqS9CawH7ksM7mWWugRp73EMhrw",
  "key8": "3Bi14nQTetPQ9kshwD4qAkvs93mnRHDMZaHaG3uehTWvChDBUKkoz3M4a3jjVdUvWTF7d6yTbD4mn2rJ2XLPcMWU",
  "key9": "2DEV1MCtioFTjqsfPF2PfkGWoruUKaM6qEbTRzEi3RXXGwaiuZe1yKQjfvH2aX7FmWFHwAeegDCY9S9qczJL9n5s",
  "key10": "26WGZtpvsPftieqDifaYgFJeXb1PofSSkuovbYPbnTsdLertwoN2frX1o3ciVB1tgqfdiqWcpN9aex83KDFJBVdW",
  "key11": "2b37UEE1jAxNQvqB3NeQYKJUmJFpzGCZFX2kDHs3gsdJL3LkF4HzGipbTZLRiseSimfYCxZM61QkMqyjezKeitqp",
  "key12": "5qE9qCZ5wVuz42vN9cbw1f6eGFQGGwNxgzxkbkBpTa2xRbocTJFhjNWVUFbD71rj28JsdYKX4m7gbJm8AaXwwwTr",
  "key13": "4K5BYrwgoe8iBgLrbvEaUibWg9wSacJTex6q8VMwjFnjWFKrv5xx2h154ckjFvKhChAcpt9HRGQP6RFdeR1nyCAX",
  "key14": "4ZkamXFdztXDUBBuBkKWgqMGqucb3MyR6iHE1GJzmzAXJiDonfH55nR7dESjZpetvvrGLEFNrBpiXgxmM98acW5h",
  "key15": "413QXN4NxMXLfagnMoNv3MJpvawbYqrfibb4sWLN28WA37jmd3iPo5qYHBPDX7bvHwQwRA2XPVw9hixLNXFKfdUW",
  "key16": "3MuPE9jeVDjd9XsKq9f994BADejBfyxPANvchZTnk2NWqaKsKs2WSRHg9X7xkGbAwdV9fiizM5TxKN2DUUrP9zgj",
  "key17": "T7BSwkW5sk9vweMB4WF4dZVfWJySrVKHHMjsMkQfd1GUF6BzPiSHEr7mykhkPEEHKtMfDUP7mSCkC3cR3zfq8wT",
  "key18": "yKCeRFRAKMSjFR48DNoiUVaFTXYGEAnJUaJ483FZ8HdjiBM1CLL2a5eFPH5MHewiGwohqqCsvVa7WbBqP8GgRvY",
  "key19": "Na1228TdLDDFMJzTnm5xe4CbEuqFG8DbbKRjSX424B1RBRJ2Mpo2XnDMbqu1ihEtTcUTAB52noH8xFs7NCgWTBB",
  "key20": "3W4WnxnTmAbWiBc73FeeTRc3PQDh9Hxd7hDrm1iRdu15qbUoJbbEQpe3oZM4czrWmHLkV5fe6Lgv8Ph3L9o9Sjha",
  "key21": "3UkHKFvDrAStovtmnE6jzVZA98GX4M3FpYcA5Nmt68Sws8778XjQdaAqkUx6shYub7hZDfBMRs42x6ZGV8GF6xKh",
  "key22": "6kz7WBCXpiqioyzzgGt2Ub3a7ANyqXYGTU55sfHxY1U4EGy3ruC4EaMbjGHxzcN7FUnwYhsJfJRhz9HoRc2DQxo",
  "key23": "xAesBrTRNm2rssDUcnre1osjExiDszCyPCumnT9XtwhJFwstZyYZAAtikETWW2fJ4xUEXUL2VazLFfhGsmYScZ3",
  "key24": "5VzG7YHSiwBo5YFSdTNh17mfgxqMBEmA41rwuhtmVxPPbiKHncJRX1LNeEvhwv1GkUvzabadrJkXHWB7hSDtD5fn",
  "key25": "56a3WcWkbFVEstwyQB8JXdcK8oGKVJms3iuiE7rmM6Tc6D5e9op9GBCu8w9xYEGXXkwGtJwkcoGYYrjqeTwyhwtP",
  "key26": "4WZKLKh5jrG7DeSF7skrDbXjTpJ38EEXgUNepVgCPKnCDz2iRjx5DTcNi9GVwh5dMnfWC6VrNjdbdTmUVDURofA",
  "key27": "3N1hpP5Ja6xWXL5HaZnQe4R9PoZsVu9pH1rsQmvoAjahRudBJ9tSF6BWkTAH5xyhr7igx5hX5PfLZEVwRBYefuUU",
  "key28": "3gchBjgUeuHexCmNTA1JcfkEzs8BZpd2VWwoS1ctdqpL7zko3GzJ3yePNuAdEuACCCygBJ7PXjvbB3YvshNGUc2s",
  "key29": "57RH7c47miYCsr5Jt7YMaNMkybNV448dAFitDgne4hUhpNJcqZkEtU2nZHqa9dSTy2r5V1jpcNWjAti8Qw4czu1S",
  "key30": "2cTvKnxFEiYnBNKCsALqccriH2eoowMEiFRsypfViEZhxYc8fTt1aaBYZtsBTu466vsP1HdTFdSSpQChGZ9bu6x5",
  "key31": "4cKCQDyFA3yvZx8Kpwb4PKwm7KDtA1mAn96WiSNazyVeAVpvonkxLGY3UVCWvdQqVQBUaQ9Sz98DDfRBbhMDfbQ9",
  "key32": "2cMi25u7rTD8QD8dKLkMMzzRgQddY2jfZ2qk8EM5Lg6mVEMm32QfbUPnq18YUboU1z9vo8J7b19A5YNmFXRWzhw5",
  "key33": "21GjrBanmjXyDD1ZPrSpcUwbHQSGG2sPH8tEVyETh279SEdWLj6FPcLH2KWpjWW61mMw3nDdwFTBpDQocnvXgTcY",
  "key34": "5BExNKpw4tVhgPjwd5nyFGJjA94aUY89FTLoJy2Cyrcs6WxcwcqJbuFJ2wnEdwptQFbXkZ1478dUjPitBjDPuity",
  "key35": "23rPwwnTZeBDFZxV4cPqURi2awBSxjJu7E8RgTQE5nFeCdQzCs613LQaxDqXTWnbxULLnvutWifFTBzPpsdHeT7D",
  "key36": "4kvgJjQDr494ipDVXUCMMwPmB47BRjPMiwd6921vUGM55SnNbcuMZPQfnGbACiebB1745ykVA4H1Bx4cTibC4GK5",
  "key37": "4LiHUnov6FwKjJaSTqyPBQwyKC12QTVdzJ6u6XVYX56pUMJPfpbLxUDFBxPuHbLKAJpxMygSw1U4sH38epB4prre",
  "key38": "4jtZWHDy6kT7FfjRdXMwe2uo2PUGZV54jbGgHU8iUqeVP4tJPnPzUJgqx7qK9TyAyUn3rYjqyFcs5WcA3kxvn271"
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
