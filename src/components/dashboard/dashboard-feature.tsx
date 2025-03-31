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
    "65y9iLWgjuZcguJnMzNrgHPvQGb8BVMLfnVmgDKm2Gndx15c9vGK6PcyBpmALhnyDxJVe51eyb4xCgpd8TgspVpn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36jiXsTmtgcSjXTQeqD9JQDmU1atihpcyDQEYCVstth7CLGJNkXKu3nh8XbZ6agCHfam4ZyLxoNZMuLYGWZzG93b",
  "key1": "44Y6iprCr8Byf17YVUQL9XKoYQZafWbABdDbzUWzFyBNNjZcveURfqVmDc2Wv1K1RbshNcT6CjiJXPQdHR77BC1i",
  "key2": "3EbJwzNpk6jGBw4RrrYginrTDrEBJ7mpTk6QF5tnLcY21dTYXTMYXWZDKEubpRkG8H9hh8rLZStccjLT1Gkfw78Z",
  "key3": "47yxZ2CGjFJa11eoyiPB32MytawUWrBuGa37GbdktK6iH8zKh2U81hMs2q88UDGxQCdyM44UnngSj2UHyXsSnkHT",
  "key4": "2UjMTmeE3Zu9Up7mix5TxBWzBxvk548jTwghSwFbcUZxhop8K9u6ca74FhYbmSb67zqhNZEENRnVBXnL1AEXh2UR",
  "key5": "qXcQT2DkNsKViu51MK3NJvCvbpbM1GuKrYyQg4y3fxNezmqqbgsFQdGrmGT8rR7JYc6u8nMQJa6sjdpRkkh7f3V",
  "key6": "56qz9T9zBBBdd9GYBJsvd6okYY2JWgdzio8sNmhJ3Jpi9Z4MqjCqei8n512T9KCaFWPqo33AqqSpKbS99wj5WuLK",
  "key7": "5mW5VcH3Ao3ndnc75QZhV8vj3Hdvvrs71NmT231hmTbkqjEUKNcPNCvxBsCVr3zH734ntjMoD6iNP1puuH5feVXM",
  "key8": "YgdidspfVR8QwNEdMLygUN39WxFsxQaBmG9cdgyHEQo9D4t1oNHU6VahFQZusBWAbJZ7uQWKXTUxqKZ77F2FqWC",
  "key9": "2zwpjNnGTKhZb54xG35dfqCGiE9uRjKdWN2Lmzx7ZZvrnfKcHj5xMCE51QfwNrKF38JM2nNLkZCgg2ELEr3gQB6c",
  "key10": "4uwpqz9nTePZQQoCDd7Bav5jk8Yapw3KT2TPxgqBeX9LZorHhBZFq9zxbpnhLUkdy6zTJALvzVCErMi4qsPmjTA5",
  "key11": "2RxYcgWDEsbaaa2eVer2pnA7ijDZUykxe79xfatmyfFbqi2WddpLpRy2bJRSs5YRaXPzpkWwJPJ9QcUbZAHXfVyr",
  "key12": "28HphbiS7koXwDhZx1FmTPm3tuK14BPTGwdYFzniGUmbpVhPPYfGRFiDHQoby1eNEkrCPM9y1AjH9FQSHfbC3ZJX",
  "key13": "22XE6xLFUxjnMKbihG8gs7mEiDw1V2UcZDjChpHqAnXaKH5v6ZQ1kYvTXcW9ebK1nthNXacj2jH3iqjt6NJTbiZ9",
  "key14": "Yj3wR2sLL5KyfvMoBncEc34t9q57DF7YcyMoF2Ct1agVabowno3qrL6HvN8EVB2q98j6gBcHMCUNHSGyUGWbnRp",
  "key15": "3cdXV3Wck3bDNX1seXQsGPBt54LxM3Jo7zuxmJK5jKMPViRhi34EVfHnFrgezkTnhRNV9AYsk9o5F9eTEp37UHiY",
  "key16": "5i4A3JyW3pChukdfxm7uCz3cHf2CyPrPGndYuCCRNufj5xxzwMf2j9eGCMJSn1cD6JnCwvddaJQkxKtMHRKyF6eb",
  "key17": "4oddiKVBnz1HD3jsXhYUs6jvtCEAyTXf94mLvzN3MbVk8e7xcxEEzpKsNyumbxLYMYaCWz64xXEbWZunzpj8Q1D6",
  "key18": "42bqSb3UzpnWGZQ4PSGA4ZKzkqG3owEqWoSPp5ttr7T99GgL858g3LyZJiHGr55f4bvTVPYLMeMH3mNXGm8vfHr1",
  "key19": "5yURsrcku5RYEmt2bcpuejgPt67H86pSiUjdQ2kwRM5Jzr6X5ZcPhVh3qfi6CtuxJT4Mxrm9vngm2YNDnC3xFGVb",
  "key20": "2qn2Ek1Ct97QmkTi2M8k53VANUrJNhTKLF9nQL6G7BmBMJvSVpG7hJgAEcfyqGFKn5jkRojjQ4NPpFKR7kLNgehj",
  "key21": "2ZWz4WG9ZmbzFbmAxAo1BuQQUaAw8135HmXKDCNQU2gJ7ChrDr36Yr9JBhiDm9DcTLVLMPMk8RUxDiDHDgdf9oYJ",
  "key22": "5iPGxKW6uRoH7sWpxBHtgUJL5zopVp3VzDgwyRm9qWoXkA1CsvzEVkHjtb2L55B7U9GzUCgCXsU9AkpUXCsHEBz9",
  "key23": "2s8jaLZZjabxxApsBajR657VkamzWPCbudYJq4JJaxicy3bhLcrMJ1fZfsRbqZjRmNgMxPwMYgGQZccBwok1Gf6f",
  "key24": "3zv8PA2M6bUaA7ycopT8P3AAzb8nsU5szKdqTdsSNKZYfWaGN51hdJJgrJy5bbihk2J8eyHuJ2bGcVhSJ41pPUYu",
  "key25": "4bkRYLTrRtg8zb5Cmt6rP5mcqAKwFuyhsbdJs8GGLtyJCy86jFvkN7pSjkkwigQnvP2AWTjV76JY9z2rDSbbMuZg",
  "key26": "3vEvWQvjnYU6251b2Cw3DE9fmSv4igmeuikbSC35ZaTbvPeXs98TtqvZazkvdZgEcayYdT16cLc9hsEgZZthTnZu",
  "key27": "5uekcwZPPkwaAriyN6M9NVABFa1uaosA7hN8mSimz2Ex3TMqqhXVSXv1rF4AVW9nAykCQvF1xnyb1AAAiyFmWoVY",
  "key28": "5GaxzUNE4cL8V8nfkVvTfVY4C4Kd4QG5hpQR7kjfGw3Wo8aWQ35KMcr1fwRdQVqqpsbTdC93oLUiXnoZfWZvqmf8"
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
