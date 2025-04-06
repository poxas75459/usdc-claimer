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
    "AzLMnWUMpeTd9d7Qz27qsUSFted8mhkU5PSKwLwmYQ3YvabBgx3pSFNAsfTRApPJJ5o2PKiR9MWBEVhfxqrdDx2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZmCKxPT3v1dPYu3XZFJnTU9wevDCP5SS7AMMJDGUeseVnWXD6K4UNep5fgYo9n4xVwsQpMtWH7aES6pMKr4U48F",
  "key1": "5Ceg1fxJ8E2BnfArAHayCQJwf9S5Y9fxyEeNkrqtw4VuBzvn76rrHfAewtESEFpuwZkBAfeBwwSBf3YimAUeZfuS",
  "key2": "wjBi4ZRJf5ZEohR5NP3YatFzQd9npCWqMo15KrTjct22oEwfFBRYiufogHw4kKtUJz1nJLiJ2ZUmaYbYjH8HaFS",
  "key3": "4edtWNXfhSZ3Fh9Dy6jJfwyd3UH3pZHzD6ENHY2U3LpR3x1B8ibn9CmuQHC5rX9hfcVZtMxHoAoioFRSGkAuN1yw",
  "key4": "xu1zdt8edDJ8Sdsn8DWrRrDqUznFpp7kDjFJtxM5CDXJf68euvGXTrFL3iQ3rWJRWmN2hC7t9UnWM3fVZdZk1Fu",
  "key5": "3op6zXC3fxNTbo3o6QijFv1hnrfxzy7zb2i5fjE2UbA7QYWu23anaMiw6wU2TMTnBB8TdJw75EB8inmeHQqUvthD",
  "key6": "2j53bmwCLETtnDFkdPBwKLHkuw1J3u8Hrbj5PGAVjWLtZxgTrMZREiZGqQBKXtS2WJLxkeaR517JWQusqrKn793i",
  "key7": "SSwqvMxSprMckqDNqtNZS1i7tQ2T8dec9GamDncGmKa9p8DSAwYvxAu8xoJhFd42ZBwimXaCMngnZW3BoNTWWJi",
  "key8": "3THxtGFMTUDb3NHbwCrk1Ju3ViWCwgf58JCBSHsBmFkraKbPeGxkzkrWLd2Hpgxu6D47sC6qLwKPb3cumPKjm43s",
  "key9": "Shj6WKUyS1T8Km67Pr7w45EbdPS5416JVu68AgxzQHKwa6r1DG87hox2sGXrbaf5rNME5qpPkGYqfvpPw57P7aD",
  "key10": "2ftrxnzjYQpXz94ucP89L7XvjYTApdtTjHq1E3uGpjXG6sKaSUj281vkoYp8wiHfj4dKmBMsWubwF4kTwuRq98Za",
  "key11": "5RSpAJixMuLQLhgnkzC6tfGEeFXSSeR27piBW8hiWjgFpDXiEVhjEeLroTMaxCBaXdnwpz3giA5buHiH3EbUvp31",
  "key12": "Gz9irzd2CHnXTH46Nxc4ks5wKbR2cipVFa947BR6Pxh5BP2zXePrYcZR55C2EppPz3U5RqSa3NoqzzVPHAtLCae",
  "key13": "tMcUERFCuU46P8Dnhk2QqH9Vz9tMDwBvDpAMpTRrQoqKAsRKSrgtPwQh4yvyod4fgGXQCAmfUya9Hj9pwBKZAPA",
  "key14": "3okXqVDTiK5vRz1z6fDSuJAhK7AFfhgbk8Ui7tDV6xj4md48ELLs57UYBb7vgdRpe9YAqeKNJPGo4BUPZShYipFg",
  "key15": "2s7kZw4j5t2CikDn1ni8kQvobVxr2bodS3SKbF1bh4JNvjwTCFzP9ZUNjunUwFsduhMGGeY3gGit2dkSLwQAUsCv",
  "key16": "3RAqRY3PE1aasWjinze737tWMbEGiCDXdDtpnEbkKMYRLtjrFSorpKEHBEP44cuWbYYTN8cZDMesszBz5SxsVdxZ",
  "key17": "4PhNUL7wm3igLuxAVtSyEeRoVcT9m83nDUTJJbuXtQXWd8R7k3TiMCSFwwtj3zrnJon2vbeAch6wz2w5qu63HWQc",
  "key18": "Q6Z5r5tg9ZB2zEvc53mm4gYa5ShszQtu9nF73uLFeq6CnZtFuSUmnxsVMQRLgp5RP8A79jDoQtULvnCcMn6jjR1",
  "key19": "3dPiBh9TsHXwgE59s2vbar17FUFHb121hszCkqZUhxgUReQUbrkHmJ2UMczAuYCYhk6fcr5bufWp4mcxRsnFAisu",
  "key20": "5VvYsTa5vxtgCnGndMuTRdPpAC3AN6opbWQy1P1kwvmtfexvBQgNNWnATcLGU2k8AaHeyjd6CHvjeeCYD9YBr2db",
  "key21": "4wMp7zWPxxzpMHHGgBffi4dkyMYL2VMwCFF4mioP8kfC5fNnvfUwSEMNDJdD6jntLnpfKYTsZd1h7snQoQp1zTfj",
  "key22": "BWBfMPEUXKiguUzzRajWtWtkBZYCEBZmg3TraVdo2eTPedZYeZVN1ZdpyuK3suuFqFttfs72RZ9aVWNjfwUsF99",
  "key23": "9iqofCmqFmrTstRwGAunYoC7aL4aoPNSSAtDjqs1udrvLfcdMWSpni1FWcibHkEhvSdmpn75tz7vHLvkveTqQmf",
  "key24": "3CbJSdCWNyZTFYcg79opyKY2boE5pCcrGSFVbLUv2DrpQckeCNHx9bGxUGepdfq8Dj4qtKfP3SdN4L2iRJBdZbnk",
  "key25": "WZpWp2PuLksMMSF5jVQQQ9wWDfPjLiYxhiaetDSomEGP8Pte4TEDidqnN7AsW1dK5XNLmArYRW1qDNga4a2nwii",
  "key26": "33WRbjstfd81EVqfNNckWXhJZeARFi38EQqcpNXhAc8d5mHSQryMRMoxKiYFRHB8aimvQtbtEPcDyfLcvRyNMqbo",
  "key27": "2Tk2rSYDMyEEFw2J64iM1HSv57M8etN1WmpDsQ1X2qqB4QF8UqkoKkpaVWqqyjHoqaZSuvwLD4BZkXKNELR1udjv",
  "key28": "2aVeemcpfxM77ZLbLsGEnV96qpWjJXQz9YP7kN4fRj44oayhESFxdZbuXbXWwvhqf9v74XvggqWxWGefNL6dTqnU",
  "key29": "38PXUJZm5iHf14LcxxBKH5j7nPwPSZSv1ugLuQ3fLkHaWFi43ti8JmtxHbmYudcwk52oBUDBxJz9WoBH2yekEnqq",
  "key30": "3NDmEHZjxwyQmEqB7iTs8m18fCoq4mNKGVXkUCE43tkpvXvRDeVM2rYw7eMDM2r1txfqQUpgiMFjM9iMyPYhdLSH",
  "key31": "2xSu1aLswa7dM2bgEwkjj9BoFLT2vR7NFxKo7eXwcaXgNEMFZMgsER13MSrGAGnTpiVk3BosQU2FyACeBdhEaG6c",
  "key32": "3LxT2adUY3qb9DhXHv3JxiokQ6UxqiifAGgE1w9F6UfqBJ6UVqHUoZZBiMJMcAP7HgZeCEUzXQe1WFWaiUdXrvgw",
  "key33": "2JY6ggJZmdaenHVgWNpDqPqvMJ2ssyX8z1ztuxVbniNJbg3skNUQ2cdcn7AZXus3z9MdoYgBQ1kYsEfEVaybhMMS",
  "key34": "XwXFBiijdtHfv9frswfJ4LEmKKwU11vzdUqtZ2nNG1aXcDFVjxKxCLRv1gjDTRCYgHj8JTs2NjDqrmXoUTQs6Jj",
  "key35": "3HcLmN4wJm2eEoyj2eNGmhwbkJbXNrwW46DM26oXofxCE6L6EpXZrv97UU5yvDFuoJ8PJjLnAKmkVp4G9CQcuddK"
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
