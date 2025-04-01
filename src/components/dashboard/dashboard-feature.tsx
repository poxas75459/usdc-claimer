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
    "64MjzdNJDNkzEKGX4oUr7WnGi6Djf7xhchVqghnsJ4iu8Wa6cFcBguAExqfRJFWy4pgN7jyzz5tYQimTcad38L8b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "X6BtfbBsHM58zgcc2HAgU1KtXzNaZHV3uhHpwcywtyeoa9RqQBQf3ghSHEdu8BdpfEoy2gQTBEjTde6W37D8FQD",
  "key1": "3bJNhD3mHfRdhfBZoYAxqm3LEUyXtvsUERdj16euvmYc7cBbCLcaqE2K2RF8GgzopNau8qtKwHx73voJi55qzvHn",
  "key2": "3aRHnJCQfPBSxHUAuvR2oP6AzqD94L7xdKxFS3XDXgYHH3CGMDnh5zxX4VjTLAoiPSZiTFCaGGPwsURtZujckGMf",
  "key3": "67mjvtp1PTz7Y6Kako3zmbktUXqqE8oCrZqPLvcvqMsASwFFLMebLQRVBTCJboFrtYu2BMkGHZ7fQpjHuCxBDvxm",
  "key4": "5t2X472avSahwhd6bNjGrz9d8mQWfJySNJQouuZJ3adsRb2Jva5U5ofNEXv8tPY8Rqtf1FcAmEVpHzDuvZ2XoSz4",
  "key5": "5Das8qNZJW18HzCQEzXfhTjRU5DJXxty9FxcUcRgXZh5btMxPmnn5L2KXjgsaxuyAzLkXPSPzDJwue1QQseaTaMR",
  "key6": "5XUhsw4ijTD6Ku6SyCeDAxiuJ9mmDanstcTX2E2ivyEtbDRWkohnGKq1wrBbDLr1cMMyFoHGCiZwAvTAMt9zp6c9",
  "key7": "2QwPM5Jv5mM3YvPkh6ChS8GWn9ev3uKKb5NVWsXzAqnNER9ueFQB7jNP6Fs1aiD9Y6KXTsuUQnwJQpcRsAPfBPK2",
  "key8": "9WgKC7X3HkUMfgGANLUbwkP1VozNK7sSdCcU74KTvLakj8QDYxa6CYnvs4QVh5BE3iDaofM2bSGBkpiymTcdnaV",
  "key9": "2gXjeBfgG5a7HCaZ3hYJyfUdUBeuCdBpnfqjDQkMQRnCZipHCXVgZ7PxbPLhhNeGLuDvqXAhGNhrcHfo19LkDjJW",
  "key10": "4wDnrWmCdscYJLdsM4mtR5oor25vgKwtWVjuQLVD21aGZWJetb2b7YqBtm28ZQ7RCwExWX5rWnVwbXigQWNVC46m",
  "key11": "JreScgiqE98GtBK7ykxWAtzz24jBFgWF8LzUBRktfqknb6amqBaRns4kCxgDBmPK8BXR2zgBYMUwrkBPSEYjW3k",
  "key12": "5FPVDZo1Zgz75Uno8TVcJGd1s52whtBnxAc5hGysCnLED9GrhDtRvmHkKgsd4xHVsJEZ5WeydfcmHWEPnQbg9t3z",
  "key13": "FTZxXTuQFByLxpXja9SA1cTA9PRiCKnquXutu7FoySLYMYsbF7Yytt2iDfYz19zpPJW4mwRhipCr4MJ71NKrP4o",
  "key14": "W2EnmjGusD4omzPokw3hRV4hf7LpdYqWRkoGamdhtiyfrc6XnXwt9fXesKnNLinv16aaNZZN3xBimfVadobMyRx",
  "key15": "QB4cV3kFQWX8fUT6QM2q5d2pSgLy1Z8nnHfcNacRQwPpRp67KRa3xg1nzzwrUzeySQxfSy4W6h6EMcsL9oxY1vv",
  "key16": "5m764bWf6D9bsqXDsnyve6ZAxczzF6dqUba94DYnSBwHk9Fa5LEjKCfs1p3qtv3DyCadGRs37UVy4mZgjfh2odAY",
  "key17": "5WnnLQVJ8GRRET85x9nGePJENFmqgbQZs77Uy2Zicg2YStohVAh8vTDsTZbApXNpgAxn3yyAncqw1KuocovimMpf",
  "key18": "59dRApQ2LjJysSPh4P2B89Cnu9sqHXULLWAawpRbex4Z7z5V7ZD7Lp7jm2mm5ikqFYLcqg8mGxTX2E1x8AXpGbE5",
  "key19": "5ttQSzaxC8aeumR7BcjkQ7BQJu6nPxBpPSLsu6LFoqYwU7rfZorFsLEWjpwfgRAjcTJ2J9JoYe4AjVYHEthaRqVx",
  "key20": "5BozfM5aBeMkgr37iYmdvBrkQfv3esJYxiRMbLyNa99gzdJ4PU63QVE1AfHAWS3YHecALvgmedf7syRqNByYWbUz",
  "key21": "48Zw3WDw22CPU7qjCqSYCGZRx2NpTpHFqBpzjQKfG4upV8o8WUFc3PJUTcCR3zcbFswxv7pVFxqs6HPuRgPTjTej",
  "key22": "3ry8zxwg8zdp5au3xHYSER7Dt1H8N7aGJNSXHwwpupYp5NU9JWYRaN6a2BWpjXZU7jyrVQWygTMJxZ9JVgotfypb",
  "key23": "446Evsq9MfQKo6iMZwE9sTQXQXfqRRzkNXu5aK6XVcuTP5EQuJqrw4pch2AoSoy5DFJHYAWePn7y6iqf5msQVEhB",
  "key24": "24evRvPehtg3W94WbM6YMtJKGoyYqh8hzyNBT7M7nAHsCE491yXoqTufk3Rkz5WFzz5g4N4ysY82nr74iMsAcugz",
  "key25": "2XHJCCUm6uCJeieVZDodqLe1eZXrejRgFCrqiA3NdD4foiEGejgFZBBnPprhMcjnYoS2GRmVG24a3iykuBuBaBkY",
  "key26": "4qUnvtSapyvULGWmw9NRSMFR25oudAujYM9XjFp97nenrXtNJCakR9TEQiqM8DnYekGFDEwEzoKZukDm9XsC1LX7",
  "key27": "5jvRXTkW3zrVD5NXZG3mgGaG7Zsf8NYtnVAyKMRkua3EkWQF6A4UMKWY1zpzywEMcAKWid9qaD9qmwtVgHbNCwbA",
  "key28": "3ajo7T3mM6LM62VgkwrTLVG5NMkKhBK1MVjW9aeFx6Q1RCvZ4p3ocqp1Nkr8n5vh9FtxaGfNdfQv43s5ZNaPN6Bt",
  "key29": "5xsjm5M9dUobwEe4JdKMfztXZknqhCiS6jcCn6MML82kKYP4FebCTmS8dEsNdejY8tceQsYs3YqwPPspNcP1BPKL",
  "key30": "NaFKbETJWjxiFPhK7ubK3H6pBwbrPiapHqVrbpgKjm7WWX3CMrF4b8z99eZLYmYcPTsVas44scaeuVneGwqkJDh",
  "key31": "6rJuCBrD3d76ev6iGwGr5nnHQu7dthdBhwdMQGGEuGPNkrJT4dR8vvpDhf3LBeDGkuLzHU2TWabcX4s9k51Q3BS",
  "key32": "3hBcvL2Sa7KvBg2Qmw1jyD3BXikFuFRzSCbp633VSjcxs79579WvtKWhN1sEtnfWxKaQVnW2oSaYrhGKwFbbVb4i",
  "key33": "xYTgUzdMFtGr8Wyuw8C55n74JFVKkpKzEv922FPnvdEZ99cp1kgKcAbW7ZVEvB3qtkCUaxkPnmzbG2rTTHjHiWJ",
  "key34": "RResrTUndRy28s6zFmrUt3sZ1FdcAPGh5VxAzGzGHYFtcgoYm4kbDPvA6QcwRwpBXNwZpTA8esvwYEiLjgBjTfu",
  "key35": "5FQuznMFBTW1XHFYAHREgcBtV5gdk2XUJtMjdkBH5BzDwjFKnwpq8kPnUuL54YdAo8JrGo9E9KEVTvkuZyGYgoxj",
  "key36": "5Z5j63ZCBArhiqxhsTN2VVcHS53svyoQs4T3Eau1SLJFociF6JDKa5XgCQZv2AHkQrFpCNajFsWQhWxuwAqoCQoE",
  "key37": "5ZSVEaCUgsfWdn454tPkLjcMQKn8GPwPDzjmtCr8STgCDh8N7kxsYyo99iGzSMVDtzj24upNXMoDYcXCY9aJQoPM",
  "key38": "3EJrcK2p9bpoP1nALCcVZ5pWteF8rLW3uT97NsBEsEPzh6YsxUQusADqvwR6482oy9Lzd1wS6MDwUKSaYnxA9Jub",
  "key39": "5sJYTE6Nxvr8tJwm3fVnpt56FfiawmdT45kvA7Thsj1B7FZQSdK4Sr4rPtjWmgRhGK5xMjcZZJZYiJbeV9LMYxdw",
  "key40": "5HVe7p3DpTJWikGCKYAzb4RCY2tWWkfmW2iaMMw6p3DNEfwi4n8T4PCbN9TJfhWA9WYwYM2bkCBP4AYyRKb4Szyb",
  "key41": "5gNdKWU98ZqY3EMjQpJHw4D698mnd5tkuoJHvWEkM9utniEP8nHLTSc8YM9CrWeoPszgw194Meq6Lzp4tvdY319k",
  "key42": "YAXhxsJ4w9Pf6EBfvaKSQxLM8vLMiQeHBh3NcmDManaRnHYzmVywzwPRTWJb3pufyvpy88Bcmt1KLmSSRkDz68J",
  "key43": "2abgbDu4MqAUdfg8a1VGAGRVWLn9SgZUePZ2KxAncyCMq4n441CCWspqtspLbSVMYdDRVjAKPwsXjcm1yT6MZmq6",
  "key44": "5MTcKdwvXEQZ7yQzc8odvTWwv59KqAF6MwXpq3t347Tme2tqknexoxhjJjBmKECaQt62iJDYtMsDWSBULQ5xN2nY",
  "key45": "NpEJaLqet1eZDNgcTgzNbxJrHJY1XZPU4vXMDAw2eYNvbmaYd6RhZwqyoS6JHE1z3qd59JK9Lk1mRfXbtLb9Jj3",
  "key46": "mmDU9vjVCQX4Bo7sSS7wxGzm22aRZknoasDX3Wzn2fM8YZXcYeUHHNJYWkAPcwdoGhWN7G8HpWY5taNTUzS9adq",
  "key47": "3iv5Euk4PPnpySGV8mPngSYGSMnYURrW1mRaxkEBRsZccKkQxWiViFaHydHZu937iqqBhUv63MbPMfCSvuTUZVQF"
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
