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
    "532LR6NiUg8sbExEECfkArDzRcQUe4L1bhBsPp7CHGYDxZWALMyxVA5NiTfMhoMHBQMQPBqt7Pdq2CvGxAkxf3Mr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KTd3Q69UvZ8UT2Sw2wdN7Jqjsyd1jhumGAULkWjomUM3rgs4VVfVmYCBmcZCCrmnv28Xb5N1LJp2BQu9WNw4ML9",
  "key1": "5vPoNWB8CrxZu6mnYwN27QkTo2ZzkT89mLTnQGK4zQUJHJm65UF17DcDZ1FeaMj1D3StpLLF6nYKfDaEvHFdshdM",
  "key2": "4gcgcPQvb6gTRNKJoEJzAwetToJXQh9rqDJGb5B3VSCsFTFjgGD4Xrwb1jMTreotfsQx63HoUX99An9DDQPFaKPY",
  "key3": "4S9Uo94SyGF7eG3gfQTfjn1MsC5xw8djWmJP9sxXxgriQqBoZaGFH8LR5vxUYyZg8XaqJcPTBpfbqfDEqedHpgJF",
  "key4": "3ywFLe8i6kno4J4w2PWP18Wrymh7T7GUwoRfnJZ2iWqxn18om91yQTFVomWAGccPFWxoHPA879VGp1346attkyEi",
  "key5": "4rgJ3fpBvMHDCGufgHmLRngo2K4nEsJQANHJi3orBUgiCyY8n6xsUcWHrZDifLrMt1BX4LoYLbtfkFDNASNfWMnn",
  "key6": "35YjL8KBbRP531oRFJFJ43XDDW8DXPDBn1VYqz3wzU4kk1sg2jVdBLiyTc2WnMCkLHPd6prtedCkyuFhcDk8TBk1",
  "key7": "44tkHJUtNYiYGGEhSmJYi8C9nRrNHQJMDkeXSxaQpbcJLFewMH3QFGpcZpFezaVUTpEMm7q8nYrCdC4QA6Cr2ivF",
  "key8": "3QUUivJ3mvUw2qJKxbbPVayspNP7tmajWS369ihiVEBUTHbz75q4ianiwBuQWWCpLJYSwVBVZ3jCCd57oefhET2U",
  "key9": "2ViFaJ95U2Wc48zYf65SSViuSfqys34uQGf4hnnBxsUj98fssDUxpqmt635KLFR3Q7zT72n77qJZS3RXY3EeZSnP",
  "key10": "54mhDvoZf2xmoTRAhZqC6tvFV5Rkna7RGztWgbAEgFHrdyNpd1W7gH3uSpihB2pVis5xrhT3h4ZCaUy2NNhKJaqo",
  "key11": "4DwxWtr5ZNzoXaMprjcwUkTW1zaDqT74mkomGzhSyrc2j3oxkGA3GTgwe9C5sygKotbJzV7gfscQjBHTrb8FWyjp",
  "key12": "2hv7JCPzbp1s7RfLC9wx7oRBqKLrB1gvi92H9sNUFDSTh5nisZQJmyBPdzSxLsMZDtPwS7axGEXxU4NY8HpBoXt7",
  "key13": "3xWnp1WK4GntmGLngTmHZEz2nfDFSjH89sUCPAbydV3ZqFLt6tzqSJT9SUgzjy5fUmw7JN5CCJhseJ9VzfJvMbrR",
  "key14": "3DjEkfYZTQo3PJYzXRr2yfuZ14kKHiXgzbWtx91hxXuo96tgK13nenXvVtrZVBCTq5CHEf19bvRY8HL2t3puVYV3",
  "key15": "go2dpCQuKASBbM6i1VftLRAAf9pkjUDvP18z8mhdXkmWNteq8xqWDEGT5aTbiMDnimiCJjqa3uN1s5rxiWtL1zT",
  "key16": "4enVNKM8T1m9gavnu5xGruxfTxoao1RjEWLrTnoBRAzDKxxL74Mj8NDqgQBuiTHqV3DbLdeppRWAJKdH3J7JvHZ6",
  "key17": "5egcVRhzwvbEsfZF3adrayfCtpPqpfs2iuxVUGGtg86mxdx7eXqpMAzTsdPB2oc9tNqxh24wKvsWghxwM9dbLjM4",
  "key18": "5ddcRNpjyAMMyoBiDYGwwVheFEbAC7Tim44MJkf4DZnhTYCeDRvm3WSZbba6u1vs3e1eghcSHzWyAcc9oCt6z1kY",
  "key19": "5bmKmEeXQVuK9gpiUpphb9QQ3ojhciRFt2CwKfHFYAkGPwCTiqad8jjrCsocui9UMprepcXeGk2dGsLjarTkP9iq",
  "key20": "2YDDCcwxmmn9jfifhAKpJqwRT1qV9XWDBS6X1yGevziAhezfmRNK9GfDWJ1CwrvQQcGoSdJ33AdNVdoHTQgbooC5",
  "key21": "41TfsBWU2cZDUo2kXdNm3G6sMaE3YjHiufRbR6RZLRtTQRHQCeSCWnRZZm7gVv8pXNiCDMGvkTEkpG2gPWPnUwbV",
  "key22": "Y7APBpHU82o1kryY1NFMPZEDKiBju6zZN91Qg6JzW5YcLQ4FevF4JxePZrWdjmHMtnqGhSPwJBxhN1BdxBrZ8Hm",
  "key23": "4H9ntzN1AF1pJak36vzg51Hek1wNbaz9ca8bZXP5hckaBLXAcLywkL88DM3QPpUzJ66ZWjdiCwhCdpSL4CJDNnjS",
  "key24": "2uvDXCdf1TkzkYQKnSNUvfz3gMMKcUjQK7rnBktuc4qwcuD4RC4ooJMqDmJueFjLkhG62ytogrJWyt2gfFtn1rf2",
  "key25": "sy6ACHACWTLNy7ka9BZkuX8ZRMYWbxura8JsDbkD7jqQ8Q5jfi3KvauotZ1UwFLJ9T7dXYRG2ZKCXLQg4nosZQs",
  "key26": "49ZCz5hZs3tPRFgruhLk1VzaZr1RKmhjgtyBkNNbtGhVXsq8Ceu18B58xx39gSp4Uws76nuRAERSunPoRRmkXMUi",
  "key27": "4KoNC4EtenSKUZMPP6rukEQR5ADSZD8WyBWgChre3kkHNDgpLDk49pJbhWbefhHnuiG9QUTdrDBGPfTCEyXQtbAV",
  "key28": "3SuKEFBh2JkhFenSLX5RUsUqCoBM3KHXWVH2TA1JiddruuJctzNKGDmNfBfzRCxfJ59PGYqPUp7AYpbvA9yAHYmR",
  "key29": "5fd5JmS7V3Q7fuxksssyz49HmKGDsTx7rQqmZn2Mu8xXHN5PJ5DF9BYRc9FNHv8fKvi8SY3wekVVXfe16mdfCmnK",
  "key30": "3JRYHBYpGkjFQo7eFXk9Qbisvrn49kTaGcYYxMLtKsbvyU5Mqr71BzY1uw1KudbvXao5dP46iGxiA9A9nT9EJmb7",
  "key31": "2zkaK6b9yj5eSnw8GBMPZLb6z6ubVZyMBK7SxBV6NnXp1t82BWefgTL8CWkAQZJBdFzyxq6uwuPFf6Cegqjq7BSK",
  "key32": "3STaLAzCnGggEXTLhgwgH9PSef6n4ZpWaUfMsQhxsaW8vrKvPwZsbERkiDXKKRv4iuoVU3i6VHNWV37TeFe1aF68",
  "key33": "4SvK3odjiUzN2vEVZrSu6t9KQNmjgXUtVh7VcufC8CvKC7nMLTGMa6FFKGMQUbtpkF73BbGKfAAJWtBEbXpxCQyc",
  "key34": "3kndVkfRXJDJnsrB6rg2bBmoqg8JjTXbfG7Se4dwGvRibmnKKgp5nkDNJwfKGi5gzybTPjiqN4LZCBKJizXrPn5Z",
  "key35": "5GYHafPkSWJBJamLFEYZSjH3tSfsFS9JPMsTc5xSbRYPjyp5A9B4ubYUHVuVNGNWzyUee16ieZ8GyZkZDkwWwKVt",
  "key36": "2Vf1zSRryXuaLow498skigGjQm1MvAz5qMMTyKZWEqiPg5k5DqwAFWwRwkPgxYBV1MiUX1xpN83QxWxWk83SmZJG",
  "key37": "3EQUg7mUpLCqo91ZpiQjf8y7tTLKsBgm3jy82dFR9TEk15fYcVfMki8oHRXx6ArPhs2hvRavoi8K2jEFEWoTsy34",
  "key38": "J96xGyD6oZtZKrhstgHCwjBWVJtA59zwJ2fRLDbhLCZxVgCpzBr2TkHR9iX3mBFB3PxJMHzZF8pyhwgeBZ3KjJL",
  "key39": "3fysfAD9Hh1tYtqFyeEeotXe86vDiKSK71HiE3acWbrzwRMhPAeKSFavm3XKpT3dNfaTuubUyQcHYDgu7m9KNzeV",
  "key40": "4t8V3L5YTzTAMguHrQhWwc5ZtDm8ndPqsMdcue4FDS9V7zBvJkj5K3owtLHYei21evuacApjJYzKsreLFyohEVJr",
  "key41": "5vs6VvTXjZQTzGSCSz4BY9aXQz8vUYWxegDYMdH76bPhbKCVBZ9Fbo8jAYDmiiqdNTQTw95C4q3Ue9nai5TRHvEP",
  "key42": "5RmsfNzyLgKEBB71oRk39odVaSLRAXKB1LkBCHk9Ti2ft9KaRi4y6aJMokTJiyPr7Rz2XszSsWECbYLiKYzaxpfD",
  "key43": "TQDa1D1bH2ArsnEMSiXetfVJ7ktmysY69SUtaGhCMat5c8p63kH59g7Qt65nf9QoaFZ4SXMriuc3fvsPwezq974",
  "key44": "5vsW3t6eeuk5KEWRnwN6vB5Kp8dPULCErMHAFXTo2MQEgS7s4LPtMcLzvGcXatmEbdFYqS61WzfiTFb3aULjkpt3",
  "key45": "32ok2YyEoNcwdP34z8BCGiRDPdhMRhP2DbjyrwvEfMPG9m8h6H6ynHEmtNPWAwG7YHHET2XHEWij1BQGvieGeApu"
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
