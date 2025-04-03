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
    "33q3sKoyUTRb22UWvyU86Vs3j1PZnrpEwvtCDFRB7ZoS6UEjDqdANsSWmyfCCyT6ateiVPCzw8dj4J7ZjaBr2PHx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mXGRAzvskgSTRX2Pusm8X7F4Bpbc8H1y41NxWfD6Wt6f8Kjpo6WKeMxG95EhaeroBzs32e6cSwnrNycyfypTaVm",
  "key1": "MvC2NR2pWJZXb5AnNbDns3deEQVrGMDhmgGVruqXkf4p2ss5rTRKJG7kcgqfAM2943y3Lrn5JxXR3gmjJPcLmh8",
  "key2": "Z4uA51BV8VrFTV4NjoaZyWRKj8jtM33hVw6AHFMzKfiKjwo1taHDjX6frk5xHvXkD3MGmGUgpUJ5msaxnD5n9e3",
  "key3": "2NRUuMZ4YJC8JT4yAteE4czgPNMQiLt5ZQEukVXjNUMuMJDTyF6ezLqMwUs9DsSW349RohFAczJPvJ4sg3v46kUB",
  "key4": "5igxJcesmbJ1o28WxxJ6jDemSyb5z1GaB93shHgkuWyAqsD4zsRRzNyg6eMrqbDEekbvGJDbTDNWf4ZNLwcE1U2n",
  "key5": "29gszwhTcwEsYnwtrigKXzaULjZdWszvwbjzL8MvGcgn3TmXF7do15HnKrDJyVunNpZ5m91qwBoNoeJHdwuTY8J2",
  "key6": "Jz8QwgXsgkdwPH9aCU8fFV6r5WjKoU4Whe8sQZft4ayfcGSLqwa72UhdDTT69FCCUkRB35SwxuH9LQ9iiMdF56k",
  "key7": "4tNnoFpRbWhPfuAz7QNSMwBNyhUiJTGDF4i2oYq3z8N318Hxe2CtADTBp85aYd65mRpTzEbNXQqEvSSeJ2ft7gMi",
  "key8": "2jD8PEsZnn4Kzi7TwtPsoKqNwpd82eiDw562kTSAUheYpZ9Z5kC5PS4KZndF6E2mjRnhd7uuHi8qafbGsePWBMgp",
  "key9": "5x2KzBnEJVk43XcqTLHw7ntycszfmGG2pZzbaqmSzkKRJ1nEk4wkJibiAsu3TN7aeKbVrWWSHdZ1gLyz9CTQXmTo",
  "key10": "4LxhXyHYZi9xgHqi7LcgCMsVBWwuyAoYRBGoHZNtpFjvxJYdmxzBGbukZk23R3Dn1fDwRKqJP9Qy2dpJ8nGFbGLJ",
  "key11": "5fovoWpJH1uM16eSqn4rQv1R5qanprJBCXJG79EwLFa3fhDxeV9KQgVxrr791CcPQAVad95ry2WsqVpAZwEyikVZ",
  "key12": "379SgxqNcBGmbD6Y31rbUJbbQZbWx9tdXL3qWTnM5Pk1mD7GHuiVcWSAsT2HZJF8t7PJ3CC4D7gsNCKwyDL7YquP",
  "key13": "4nNxsxBUCxWVDLKX4s6FiVsnrfDhqRHSt4GemU6Z2PB26LgocExg1r8DQin5cWRZFsx5EUxsopmgnETzntppPmTp",
  "key14": "5W9Qxx9NfjU6tx88HLWCZ3e1JuSuU4cNTNMnvdf7sPqMWGzrBJXhESW68ba5mbYMtB1cUhckFzBiCo7X8UzJaj69",
  "key15": "2WL8o5viSGGJYtRU7h5RNLWDPMtTjPHqdddzPkmF6HF98YeQdj6h8o5q7zCqjYu85kCGhmbNrwTdCEPzuyEYwxrm",
  "key16": "4F96QV17C2Z3jiaUivxxfEHjf8P1XCvAPd3M4WMVgE12qCTZnJJrZMfy1m839bYznD1MTd2sSZxGffegdCZkHs7T",
  "key17": "5qwmGHYNt85gEgERseD8wztRYLcmpEqagzytTb18gUfY4dXzingtvJ71ZYqF4k4gGMhEqVQ6Q6GjNawkvSRAuNNZ",
  "key18": "5haX1AGFsiXofmqGSfAFNLLeuLUU9iKw3fH7wcBVKJcRSb63mYvzS6zLPFxW3Ft7HJySVbFju8DKf5Qo22VREe4C",
  "key19": "EUk3PEuiqEnf3Bf7B4GmeXbaKYVLw6PKEXZqTwirHuRXZaxgvfWD1fLt6PYmEs3oXY1f66q5BWKwcMrmTwCf3ZY",
  "key20": "46TdXNP22hcyqAmfzBBtCvq4FociJhF1B8pHHkdJk5gQPknYacXzNsp4DS8zjVyxM1TtoXfovbxPKhQugswWM5CH",
  "key21": "3zvArSyQ59PYo1gEhSJNWfxh29hF1mq19hVpz49rGVdPhHd8CoNnq2oA77to33g5cp7D352aToBJNK9nkndWacJV",
  "key22": "24KBLsJfgXu8CioTHHv6GwT4UFtdcZtaZTkZr1S4j4PSJRRnmxZo5ojYJKBtFSGPDrdAET5TWjMELv2mRXV98zne",
  "key23": "5NxxeZ4eLPHMyd8MZeN8UyoFSLtMrz9VagQw3L2xaRBBX9R7QNcRkX6eWrJAPp4f27trdENpN8CUjpYgWVx8q5b8",
  "key24": "2UeFBT24nZDfhN56o7Ykk5qu6FGwznhVsAyP9hcaS4RqUpChR6A92uGYJ75xLBn2BLf1GExhDGpwptYwggjjA2tC",
  "key25": "4LxNzH7inxHRtZU83gAJiGudv5vdZhND1f22CgaTYAZycZAxZ4WaBnikDsovy655tV12hM6hdcBjQjrMn2hXUKez",
  "key26": "ZNGTem3yan15BZDK3yFonuLpesnXLFa7RQ8vzhVVaLEbLtJ6KRPoLUyfmnwySLLzP9yEe4CCU5iG5Mbxi1Jrurv",
  "key27": "4RAjWnDxs4CGNGDrarXhwxXWWcNaaDNrsA6dTaKKsQi51fr2E8TxPT15Z4UdjZxJZm9dtsjhEatULqUvyVhtoY5Z",
  "key28": "4NaLhkSum4dXURnifS8y4zeSewcrz3QttxQ6VQXD5X6eoRaJpfsJ3yiKbRGbZ2rnY8HnvbzevnTo9HLdbPqfHwe6",
  "key29": "333LFZbG8b5ug8jWs5UdUheD6L91yoKifKLhp7UFhqQH92JeeTa4Wbvxkj8sRSyqDN8p5KvnyWJsem27XzQFuqGD",
  "key30": "fkqjdss9ibTXrBoDiJQ4GEBFDZ58NjGfPE5oZ1W2qN4QPwMUzzGPrZSkfmFtLPirnJHrTcoQf5WQcYDRYaACrEQ",
  "key31": "4tFVUdJ9Jg42e6sRZByJmWpGUCQ4BKegMGLsmpA5X2ASkNzSkNZ1Zb1QihB1gAhNVewHiKSEA1orFxPLGpjjjB91",
  "key32": "3f52qyYNfuPQFf2NG9iU8sys3jYTCkrFYfPgzBhgHFpAeohC22zfjeKcG6Wjq4a2j9JkUyEX6JmwLgcdc6yQqjrJ",
  "key33": "4Gn6vr8ibXt98XX7mLFFPAWHqw55iGXDt9MZ7rz5RkegSxppJrixsfwTVu6BuJ4fN9XpiwXjeDoZuBvxXo4i5yve",
  "key34": "2PGBjCey5HjbxnZc5ubVSf1DhPvxPskghRQAMZUUfnvSeEUR4KyJeWnWmHcCCe8qVcAjhXsFxJGFw771hK3xnmy2",
  "key35": "63UWiuJdZaTHijLkX7JktdQT8T2XCUEzg4b2JrpeUR8VzfJYo4UoJMvFo3fNa7zf8yQVJppJcPXDunNVkguKswa6",
  "key36": "5G9872ur1bfhrLczQdeC98UaHmRYJFdnH3BaTf71KPrMyZMg7zQEmKWTSybAq5PY4Mf2RVuagPcwrxoKsPmDKed",
  "key37": "5y6Mo1ScKUNXc26bEYFM3HqZxaE1iDSfPbsVS49qHvmeBxqauKa4TW5C96Eo3HiARhNrEZfmYS9XbypwdJjkDiit",
  "key38": "5MTQGuFS4QBTYdtubzasJGypnB3FngSPsSt4QE7TDo86qceJYqFZf7E1EUR2fnDJVxEBjD8BfzkiT9UmZqARFpe2",
  "key39": "5rM2GWCD1DCR1kcYJpBcWAeQHQn5EUH8r3Yrbt5q7Eod2gnWwzqpLBooQNNnuicWadGojgCBXZdnTWGRsFBxW1ie",
  "key40": "3K3caBLkz9vsqBxfYTMZd8JsLJzAHbhQvc8xba77FyaAGRLJw7KxLShepsGem7YywSNJbJrcAZNZZzJvZPw8MTSd",
  "key41": "38vMRGe6qP5vPxjn8vfRHVjKtRJeGcQJqGoFFtmTuxnjxczCi8TX2EMCssZQQwKBZf8CUAabq6Av8Q2Chk3Szruw",
  "key42": "2VYPNmxpxe41Yoy2wdhac1Qg7aNa5fsUAPjkexNAs8FtTo2xLgm919Muy4oR13qu2boHAsgTxqU2R6SV6hXd7igP"
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
