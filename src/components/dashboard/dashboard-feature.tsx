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
    "3mBi5RW2Ej46GpQk8FDB7x3LLocXfKVqUUmDvhJE3fPpmNjLr11dwTz99LrdekTEZdZYY31x6cdpmt1EvKA9BjwV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KsJnrXy4EdkQw8U2cGst3pj72SBkV9fMpWxsdSRdBx36tmLGiPwpSFoNG3Lm5r8cAPxXpJgnERJDTj7zHQDWKPH",
  "key1": "2oowHAnKSdQ54NnvzbysLVHWv7QnnKDAoxZqP1FAWZAohLYn1Cqb1ApKEEViJvfuU8ckPRp4iZGgYYtnohPfGm5Z",
  "key2": "4ewG8hAqy4P7Cj4wNqnEdc1rHiRL64se8LmwDX9Bxrgzy7AaA8S9jFNCJ9JXCzLWwdaJ5JbvcNnxbM8gmg1toyev",
  "key3": "3Jt11R3eR6dWBPiN91foNj3eNkz9fUc2xiT1YXiciN9Ra3potwCKx2mDBmfnTqPyoh1vAXPCj7X6Whyx5jTKzfTx",
  "key4": "5yfhRQuxEBSM6xRrh8QuTfkDZSFStQA8uu5xnU7zp2p8h3h5p86km5rsLJBXQXLq43ALZexZc1oJnT4hyuvoTXHJ",
  "key5": "2UbRw4NFvN2A7m1yVA9itSKngE32ETBTyryrbV85GMGGtZjTSFuhXgDT15BUQn3mjYUF528yQn5tL7ryRhuMEe8b",
  "key6": "3gou1mGdwY2QKdX7Jivff5NcY2GSmUpCKTfT8nFZ7XzQzzseXrvPrXP7TWJZQBbNt8qUEmyscU6LS5HvvebUwEj",
  "key7": "gbiyPNVotY5iR83zcU3bXeUFZCHnQySSrFFBsfpQCuQTEgb4xA8Rwy5zvPBeqHKDJJ61oP4ZjT8Wtkar69gxSg4",
  "key8": "sp3f7pfm6pNbBtcfu2SVDvkXrthX8MFkQjPYhihn4GxA8ceXNMidxMuTF4bqPybMWnrtiYsPLTcsFbhjd7a5apM",
  "key9": "3udT5vvNiPUyxHTC1h2EypfViUfwSK3NyPE7Z2xiH9b5FXukNEQVRiEEN5UGKA9HDqxHw7ze6Aw5mssTj5xsovPW",
  "key10": "5pJJR2epsqf3oJjL13XKQUQyn4EH6eZU19bB9e1C1aGzsH6eCe9edtodjS5JqJ5Bf5oNwstzqb6EwywSXwMn5NQT",
  "key11": "3G9bB9aA4Wigo93L6SsheZfLb6sEHCyjcMgpj8avuQ1EZEwod4cSwwhMWuTNsWwUF3P86RPC3ptiKTfeqB2uMaJQ",
  "key12": "26pHpVTaqFfj8QQMwPuTPWixHFEQmJBzrGMSxGXLDkaDgakUWDAyYipSXS79FqP4mjxLqc9e8eXxA5U7HvrLDgrq",
  "key13": "26usFwkMKYDr2JMx6qJkmNhiCtRfXsfoPfpGy3a2ufKthPWDqf9hRH6RafjYb5g8HLLgmTvn2LhrGvLXhrzUMnJN",
  "key14": "3r2PjG4nHFPUBoaGtmhYW8N16aapK8YwgUET2Qn2tzJPRELnwutKcUYgZKAgqcZmXVu3ioN17gkNqFhHLGpPSoTu",
  "key15": "RP1nF3hN6S6PUdMvCXs1veDFpLCDC8vRncNFabtvFHZsEX8pS7vfc3WTzTREHcTowWBJtzYAqsNZNQnyg85yfaq",
  "key16": "4CPfMm9rf1joKmct5xDgdqzoQvaYWDy2FyNC6En5hv4Nu8HTvJK3PjaG1W3SNk1jLfqBQ2arxGNnQKptpEe335Y4",
  "key17": "5VjTu9kri1reaGsa7zEuHy2dWcWthu1o6KBWwr2ShtT5ixAE8qVnwfhLkFJDLePMqCjcReqNreauFcKtawpLbwPK",
  "key18": "48j2ths5vNJ9gAyXqdTM9YvebGMvaSFpKdto5HD6V3C5GE1En898HGQWrsVuq2tgKpV7zbnq4qiVR8tVudypV3R3",
  "key19": "2198dYj4TSqn98PJaipMRhjPebwBCvSnWxTBzf96rs8M8oNSvfjojJ7r4hPFA4GZMBeVG8owgpw1tV3sQfu64CmF",
  "key20": "5SjiEAZo2ZYgKALcYtckXiqoUvopSkGmmeBg2pUm97GQuuC4riridMBNyW8Lxsqd8gP9eiSUkuQ3L3pjZA4ck2g4",
  "key21": "28iiFLSs9UNMSnyjjrWjAK2aSdfZuLpVzgvqX3yzJHnmGnE6HDrWogatrKp7ZuJHzhrJURqChfkViB5tqxtzBNpS",
  "key22": "4DT8PJVdzdjTdfaptidAgCc5r9iMctsMysUZVPXXwFK6kZ5KyHKgWefdSNjvqmHe28RgfAdPivfAei1VF26eNFFC",
  "key23": "enhU1m47DNSAQRhtsmNbi5hwZxrRD2if7b5bvy9b8LmxZF6oRWfDQVcZTFRdHxrdy7QDk7RUj9jJBtDNYtnnEXr",
  "key24": "oyPBTTdZHLzuyYDYTvzhKuTkSuVT6tRPXE7cAGYam3qwhAk33CD4p2WZnBz3UE7hgsBpJQgav3d2WcMdavdPEme",
  "key25": "5q7rW3rjhtMbohHSYcGNyyNzxPgo4nBykj7qdxwqeRQCF3AAgADtFzWBizT7FjHpoKajiX56geFPsEVbNLdZJN93",
  "key26": "2oiEaeeD9YwyhbJ497hKvRsLezaTQcJgv44m79Co28vvhD7E85x5xcz6mLzUutQRu7wc1ZvSU4QbC2mwkbN6qWWs",
  "key27": "5jHvZ8fiegyBToAJ5tKcBEwjDuf8EKnwrLRi1TaEuQ9AG62PgstCauntUh7XybUNSMosc9QVXFoJqm15agV7m675",
  "key28": "EQCtX78XjQQCx425KBL9ZcSQdNvSpLQC5rqQRGRCPEMjrhNAbBt9G7edkabQq333cyUbpz24DaVdf1QpQube9BN",
  "key29": "iNzi5zoYzRYwTrvfR6BvYSHoRkjj5ybitRpguXPf4hU9nb5WzTvF1ssGCwosiDU5bE3jf2QJaf4mh9BARAvRujM",
  "key30": "QK9YFoyqSf2oZV4LLbGBjqQL47cX8ovfZsu4mCQj4BMXpQZaZg3WSmhaK7SebY8gRexfJGeZPtyBHZP27ZRtPEj",
  "key31": "5EjGW3b6MzYwCAKCsjQeeMFZxD1xmpwxHVRXD6t9Td4E3ztmf6JT4H7nunmr5VBfRn6c5xbdzo5JcrKCE33U7CW1",
  "key32": "4Mg3ukzPfE3dN8KYzrQGtyRwXRqMRVkwF4WuSjkuwoPQQybPk4vZ3gKBRksGrH9AUQbHn83xGTk2FL83kkKFqEC5",
  "key33": "4aL56E28gCDaGBTKBFEVJVFbCYNkVgYax4owAfZuer9GVQciWV7hKdituT8669APc9gGS7JrPRoc18qGPZxQJZD",
  "key34": "4VGwyXPwwbJ8vx2KrjWwuCbq9TApdJmpzfjBARNWzbz7aikK5YjovfryE9yGvUTvzjZimT2vMooWvoUNdVZAMphT",
  "key35": "2BXPqdeXkEWQCvvp3VApxBHBwBx2XRTjp4LNEp6BkHfdas9nd6DKMANaL4DqCH2hmCaBkwZTbvZL7foWmhZDWDVA",
  "key36": "d73m4KEwpXG6pZpdRQauGGZxWTheXDr78w3ZsohaWkzHHeqsmA3uE2gwc7mZSNXeB4jfMhZGUg7Pg98pxQ7LLSH",
  "key37": "5UjWbA5q6BiwAEWy1dcRtFJ7dhxtovYmaXUbLivKx18PsgteTuH1HgAmkd22rp44Kr2pqPT1njdMhQ3Ri3qQEuez",
  "key38": "5hTVYwhUqxaAkFpryKBiqkexQfN5xtSWC1du7aK8TjL7Bb4EWat7Q9x8363BpaFETGDBPuqe5cAJERxBcfLm7hxn",
  "key39": "iUNCEzkKu8zL56VWjjdCbwX4MZ1gkpR2CLBLQ3YuEY7LXBCaUKxKzzu4bSvfJwchWH6JUA4Sv7Kh2nXvaztmBhh",
  "key40": "24s425KjJpEXYpPksPtRy1dsVuAAQkkUy5w1oCGHsbhW43tGm1L5Yk5tsJGVShZyDuvugVoCiUNmKyJJ4eShctGc",
  "key41": "5KM8aEZ68ALzSgCZWPi1sTkwENR3DqbseHncV1VNyDQa76x8XFXe1rLLE5Xqxp2b7giMDNjzbNGXLnytKV697Wsy",
  "key42": "53kuhoQZwgxQDLCS88ALa3CVfnYFMdE4hp4zq5d17xwTiEMSzNft8jRFkh7GXKDdaD4Km1aNySAA1PcjRgcdJqYg",
  "key43": "4Ft2GDC82AH7YVFLnFqd7p5AyUqH6nnSi8Eu3HHaSyKFVGWzFw4QBH8GVn8VgMFYsVmMq5RU7obcrHJEStqkpDth",
  "key44": "3HUMRaQr3cYAhKwUWnHfVzu7m4KRKZbUL4mJoHTzKLTaoQCchAkminseQV9ucbNzTdk9Rf9jNU9zHjxeZVGa94N3",
  "key45": "ZBS3QGCe1M19mo9RmsFLNmwMTyR3xkZ1fgUSv7jzrY5pPBEK364keJyAQ6zsUu7dpdo8aXKYGX93GhVVcSeGgC5",
  "key46": "5hpFHHgt9kof6inG4AusUmuZ7SfvJKNtKS1ck1ghEZcqXGXbQuk4zsn9cUgSuSX25UUw5NPpGWYg15yxm9K5mfGi"
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
