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
    "3v4aj6cDeTwqrKfAab9zxBsQCY1L6Wk2HGCESNLm4htkadAcEEAcdHQ5CbtPtYck817aFG741qc7D4XuCmUhguj8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XzEHQtpPJV3M47pReZ5YJu7v5DKq5aDmX9yssMydkdk86otRpnqwxBjFvL2hsQwFaCmN1ZSTsaYZkmudiz6Vqi6",
  "key1": "3YEkiUHjBeCY8JkjiziMMbPcVBW9QAvFM5mwuaB2VNvcaV78fMajU1WCRQmMb8aReeCbZ7n4ns1xbVJT7MDsaWLw",
  "key2": "2BEjhB8Qxt6buo4VbVPxKNy19YJoYygPt3cYDDPHRPi9CyX5WSKBsUTcWJXadQFtuHn4AsepxZWNo47hT7akt8LT",
  "key3": "4NQtad2s5qPFEbzxftNbcc4y7CMvgfDf4fMy2419wZtCQfAJgT5vMzHpG6ZtY3Q5zYjLWBisZPcEhoRkRWYhM6Bt",
  "key4": "4oyJqD7cycQFwbtR2P6tfMnvmaBYdsNfzFPWorVk9X2xGpRsaLSwyigPgDNpQ7jwHjry55bFaXzdgGfRawEgTAPY",
  "key5": "3adBmTUirXW9LwwqjMAkQ4YiNtGSUaNZGQNE2EynFSysmi3VobsL13EgqUQZaAiuaM3uc7CrDpZ9SfCZoqWRSLHt",
  "key6": "RaZboncXv5KbggPnc19Z7ytx2C9MDTFkz6224RKGZx89JZmE1JJCtY7xGEmzxurjkD2XGAPZgorD1fV7RHnHyxQ",
  "key7": "21gHDUU6GYmcLSMDWUwp4yTbBcnNTJctBYnRqWuX9DxnS4E9kp6aL1d8EPfaURiZcjGAXPnAawgSKih4edYBupKS",
  "key8": "55nsaVPyueACem5wVS5mD5aGZb8RE2EFEfHquxsBUXrLJ2xreqog2qR4jcWFGetPTtvVbpfi7jfqami6uWNHN1Mx",
  "key9": "4WP6J54eurohuAeZTyBv9LuthjK1GqAgUxzcJNeWnhVHcu8Q5mEAcRM85nYMy4fRH77m2MTEfiPyCn3GPNpoQLxV",
  "key10": "3BHR6L7VnbSFWj2TVBXRqRfq9LBQz59yBfn99SyDcswFCh5gT5qZyuqCDCiLK5CyjsbXkVQFeYQMonoSha4bHkXA",
  "key11": "rXCXmKR8NsHehsTV271KVS5gSR3Nzmgpt5pm5CzQtp4LfjT4YCsjacY3BmUYrCXoEG9Zn9KwgWoTBMtaMwd5dvn",
  "key12": "5gpQEJ44muRPhe9ZLrMFS9BkoyDr5fB2ZxDM34dJsbAU6Hec1b5gG2ZyoX8cmvA5zwYEz6b3SqiTwJtscj7BqcMj",
  "key13": "5cvA8xAUA5LoSFKe1vJKyAma28hhS9B39PYmAjVmeYrNrYvcrD2MwdKrGX9nA357Y4DTTR6aYSnhXTdegPbUYqYJ",
  "key14": "249QU7zcZaTxhVFaGyuY6jpFBGJ7AcdoXBWWv5VqFGD4t5gT7h5CUTkENB2JAs8MGAzvGkNMtcxkWoVrPDw6so7g",
  "key15": "2hYyXKgrBXhGzU65GWSGF16cBT46hnxug7URak6ZAf53ELjLrDa6gWqX5UUWevbcFqx2VAnpehShHebyLDtrjsD4",
  "key16": "49b9uvKxqX1WzHatcu3kzgtYZwhMhBN6qtodu6Uv6VaVdLaQ6Vuavx6Qmcs24fiaug69vHThxGTsCqaL1bQM9Tzz",
  "key17": "5hQ6DKxeZMqCW4WQQ2TtQYp1XNeezAQ4JHagFL4HocnYMpgz9TBDWHJB7wZ4juGvCEuaosXSE4tmsEXfvyxtvBws",
  "key18": "4wdFNrTzQUpaJswjgF5N1H7gE8r6Rr6W8ebZuCMoS3P2XbvQwy1AiHQZpA2p4ZCbQj8CxtBDe4XZiQ6wYYvL1eLJ",
  "key19": "417s7Cf1c4h4dqSuMAj9Px7pbTzhLR1P5bEcxVw6KRhGELMzi45rADqd7krB8Dd8vZR3Cgt4g2B9qFmKP1C1jWkj",
  "key20": "2gHpjZ8hwMrAPN8xNDCHeAqKpbVsZ1xKd74E5uGetcwENZFBScLE5piKTnNQQeFruCDrH5VqEXau8bDr7QFo6ZrS",
  "key21": "3hDz6JhuzSpVaefF5hYQaJu2P94Lj4v4DNGstTicKujdTYTZCp7EnTRZs4X14HMp4NqwsCVQqwTZ88uMcExUgTxf",
  "key22": "2p6LyQte19gn3APDHnGvdviqhHwpCj4CGRBqPsMrPy3niF8Em9161HkHrWFscSShv9DYcME1aKHwMKQ6xH7i3noW",
  "key23": "2XYjeqgyVh5Wfraoh7VSuSFmCQoPsiEyaPUWscAL9uVozppkHmCXr8xxrYPuc6TNPUuNGkE91uyqE1apMb1n8KZa",
  "key24": "Wvk4K4xSdRQipQY7MiajRNVE7zrPYtFybxJtpCLoNLVtDxqGBE9vQviv4X3ykHZQrEH3T65Aodo3rtiN4XpEzuA",
  "key25": "4BeBqQq6qFDmUGPmapxuWv1VuRbGh39EPmrpFodYdmMG2Mc6GxZ3KAmA7NUoJNZjJueewNBMS4Ec9gvFvQ4cAfwZ",
  "key26": "4x6AZU2k1KWkovPkTqGxSZzyqvJEL7bbN6u3HmRHyWzB8w6k7QRzu1JT2cMuniVqdBWzEyLiZWjTsMb6a2nBLiEE",
  "key27": "4iRDWEGnWqGrafcU8e6JkSjG3fjxNV3T6UAoUv2bUYqbAkUKP9Tw8VhRxUf41gkMDxmTFhbGeyCovfirpnSQRKge",
  "key28": "jofvYe9rGD7ksxBrk6UvqRda9iY9L59LdDUBEkANK6N8L23zZ5W7LYCXVCWvCzTTd8pPwbUoxH4rZJ1dWX3CKSE",
  "key29": "5h4k8pvzrzNtRZJmFKKfNGKAL976nrenWc3ABsYUfEpm7gipfjyPd8oMQFLwaCXVnQnBjcy2tPwJsVcE516wDYWx",
  "key30": "328QgP8zTpUD9ydcR256oJYnZ4KahJMMN1HqsxB2JdMpL2gGTeSJy5DadEkJBDeFsSzhqzkshqECDQgkGLFtF2gg",
  "key31": "e9TGfow7prs7MY8NgszcZfYkxoM9gSSEZHckSTdJ4zpeLuAusXhKfXDFv8rmQrHDV9kd5gBNY2ozK5YCVmsE8Co",
  "key32": "2NYbeX2KY6H3wvvrzSVdFsDkSEQPE98XYv7s7zf23b2L3hqdaZydHPZrAhJkqRjufV7iAw5jML5Ezcxq8xW1eaX5",
  "key33": "4C1gamJ2QvNgndpF4Zs9x7WsdRQLWm8CgaXuTubLMWhwtD7UBAzyDYDiJnFRSvUHNi4UGGRiZnyiX9VBVfep984k",
  "key34": "xjBzYhLuCLhw9NZ9AQCZdzbJgZW2bDWxjoZDkL2AmMZ4juVqVWRSSoUrMru5jp7ciTdzXxVxCGSHGFJqqhFYwEX",
  "key35": "4hZwezeFRKb4X9HRKr5YjzAY4ZPVPYDF9AybSqG4Mmg6cnajHzyfhz1ZuyHPmVCkqhnzFZ3Cw8F8DnctZuJgxoQG",
  "key36": "5YWZmxitvJew1fy4Dkkr4acQgxL6F8awJdS1n6M1R1QT2HzYLsuHZk7HzmYYRoBTB3w2m63NBdNrNCJrNVJk5anF",
  "key37": "2wc9KvCrH7bxNxtwXUz4uFpRXEjNqTxLV2eZHSVYvF7h5gCuZauiySFfoiV4yWcFc9nzbLcQ3vobDXdNarBMTjjB",
  "key38": "i5431Fh5UohiQhwiUdEqKogBQjd9WDtaBMNpeM1XeK5ZYsN59nWwrKAAYYQw4bc1Ks2FxtT9vFMoxzjwpkj5oaJ"
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
