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
    "62zu8t75kT6H1StAvVkK6LBvPePP2MRyxmFhUW9BHK1CpWbukFkGDkz5K5VHapLB3acMmcxRZCdZMD9b9jS2MK7n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xKvw7Q69FcA4nn8yKct1SdA5AMFQmQUsvZWTY8GVwongoTFcCRk7ftm1U5fad1S8rvJcbaHbh221rfYs4fVuqxz",
  "key1": "273vEpUvqfqTtkU75w5TGH8d9aHuDfG9wU71wM7rCETY6xCwNyFruLCbMxbwpg45XQrz6dfvSJF9FrkLtio5Vry6",
  "key2": "ybK3hwDF2YK69kCLoed7c7c7SH16KKjoog4x82byqWmuAESwHGXZUPkEPmDi8PkUPBWwwbPFTvZ1MZysC8MmhZz",
  "key3": "5RB89sXWntfm5xuTFWj19EC1EuzjGau69Vi6E3sdQnDwGD4bcMEVhhMo7vWJHwaTPNmtXqLg1tjeJJVwqtqttwX6",
  "key4": "2vmdMgkpzpb5dTSQkusMXZwUpzBGt1vtxevuKaqnMMzQz4exEukSarpx5KwacSWWcUH4gMxeDiXHJ58dEghuYV7L",
  "key5": "u7Pacz3R1uaBPP3WpoQk5CJydxuTkH5D5AG7v7LpSZqoRihdtorwTCQ3PUJ6kY318yqtTSPD4y6pJpG1oSJPmdv",
  "key6": "59xeVfq8gt3t6KytU3hZbydzrxFNRWEDZJt5aChAwbTXx1qVN9xfbiWMDyMRazhxCVACZaakxr3nuWQQ2zyKcjR1",
  "key7": "55iS8bBUvZYwnVsvZYnT67ui3MpcV1MwcoVvXNKMhaEqsKdxie6jVx6LbK9tNHvXyN1TiEgVRs2h4AnJXJQ6PEqW",
  "key8": "4ZQP4CX4bjjs2YRUoCV3HyEgU3vvLA8Pd5upvKc3YMvsY1bs2X8MqmVaa1N4nnto5U124oxsitSqxDq36VrjaGpj",
  "key9": "2mXPGvV6atxbKySEmwdGq1NESeLqFvaAE3CxhangBn1UF2fBB9TdkZDXWpWwfgBAoECXC9ytdzjDLx73EMtYSVNg",
  "key10": "24GU7fAee73MmdRUjeaHSrTskzKoEqXuhm1wYLH78WKcnVozkkbiMYTQbnFTC8yys2jknmjNP8puaKtAyvD6nHmN",
  "key11": "3tE556TzBsfhVwi2Kzk1Xm1vu6YDf92yyB1Tne39YxHZa8MFkjmpD2zbFf3P6Guj6GtWp7QycQ4gRv2NVZsXmCJE",
  "key12": "5sX2xsKJnuefJVuakd4rxAvzQn3w9PQG7gBe2igqTGXFUcroCEAKt6AEX798CjyPPFK5RVgi1F8ub9yfMwpvnT8L",
  "key13": "2Eb4ah6jHMCFdCLMYqCASaxv9LrDUMXpyoz6SDwmZc5UMWq4THb3wuNxcP5rUBtoyXURXz3J8ER654q8zG8a35aP",
  "key14": "wfpUPWZSnLzyGFs4n3HxvTQsVhDjgGfy4TMAsGD2Zm6oHuANwxspPWYURW3xDMHHEfd7Ygs3jix4K7HUg7E45Nh",
  "key15": "3SqG4a5fEFSB6D2PGsRT8m8zSoVyKmaXnTtkn3N4rqMuPmyhtoHEZfDXdMdhy9pdskqGzP7J1Xn2rAya9HKCXL7C",
  "key16": "3iunpaSiz4kGYcT6hJKCCYrXXN7FpArqHiNs99AREdRyPgDEpD8gRRPabRYgobh8ryEDFd7az28DYVuYz1dGK752",
  "key17": "4pZf5ppiFMx8BrjZ3dByaEcS43hCawtjqbvppLz1fMfh1QqsWctRivZzdRFXBymCY14ZhRsbrbSCiy7FWrjxmzww",
  "key18": "GTaXCmFtDRNtzGDDp4gPuoSD3iRhptxGvJb4SrLRAXxwRrf9T1GMiKwZavdQEBueRkiEbwuQqWr347ZWWbMGCMg",
  "key19": "2JZBWiV5wzGFuxop2x2zneoVg5t7Kj72xSG1PQrZStfkcXpF2cfMFka7U6iALXPpXWe3xYs7RHdbzZdhTLkB8NF",
  "key20": "fkYfJZNg7jHao2MmmTousF9ub78qdzbo5RShRSbRGPYXor6zZ3W9NevYUsd1FGgs9pTMnQKQToZvmhGfCU4ApYy",
  "key21": "3wDqg1HKadcEmWKvQbfEWpYfTcsNkSuN9q6uG4qws3TsNV1x4WkLzDJys4KK2FgZhdN2rEWecat9m3SiYBF43baZ",
  "key22": "5Bmk4TSdd5g98coZKfLHMAMFUA5DzqKmabTYoBJnKXBYhwMR3nHwBxKYWX7C2L18TXR8Qx41VgwnwUJVaGYkHQRu",
  "key23": "Pq8p9VbeNecqU8BJHmbJBh9DChMVCMsZr9cfj5pTDkTK32eU1e42qv6ETMcR4fU2ULFDaDEcfqdgVBfzKGPdTjK",
  "key24": "51NGsfCSWmW6sNU7NTS9PmkQYFm97S3dDXZuWKJcPBTZdWhucRvV78B8LUPkhtueb2rz8Du6hswKQGY5vTzm96YU",
  "key25": "2Ew3w7rSyPS1ztc2wHw7MHag66JQESupRWM9VLHys91LC6jm8n4scN1C3oyLwq4wydAdc5yG6qQQgd38MaAYWerg",
  "key26": "2LY1wLk9fNLtKrbGHanxgVA9Vh7caw6QNSjeA12VBTgKWJ7c372GF4vVf3x8DazCUwsw61uveGu45Gn9DGgFTRT5",
  "key27": "4S2NiiuPwR6sZukdo7KWYkKb6LGQCRcCVKPqyU9qW6QXEDPKZ14RM3WwPUM8JatYmn3o4ksKkHTTNXW3dMHtuCBV",
  "key28": "51YBJRjxsuuZMTyEHYJUDu47vA1y6wURQ8V3AnhPkoA3RzsUoXPLeohaETp8qzwMjFJPy6s6M5ZPzQEnY5kzWryV",
  "key29": "5wmNcAJ67f9iA9askJUiygNDWhhmjE4FhVgPcaw5CBHcLFoT43YqfVEVfmZDzC3qBfBifX6DMQbwJPN7UTkCLqaq",
  "key30": "U6k7tivq668GyXPX2Kr5SHo8QoGFNTpcgYUtbTvQTUypdXJV7g2gD8wAN856SNfjTBQuLjcnA1QGhPHMNB5iiBt",
  "key31": "552P3DiAA6NMVpwKZNqY1oJt99FucKfxtZDxWBVp2AEW2GhE8X7c1ZSoKr4LyL6gK9X6PjmSV9LX2auLFXoho7kk",
  "key32": "3ehLDtCWSahneHMtJmgwAKzjmacMqyRpSpWQ2yzJLhzu4MpCf76D5ai3nLuf2tUV7UyLK6BPzqVKbJ2fDx9Ktx5b",
  "key33": "5kYf67teHAgbSfgmzf632bKF2dGBfH2G3HWdm7Ew9TLxijFjBQXbrc9Hn773Y6qP5SPfLvHih25TiADyfQLn7Ttg",
  "key34": "3GurPdz85GxxuCcJKhnmJWFemoFA5un9jufacgwEuqWPUo6cM9xMmcS7g5LzD1bQzG6Z9jLs81i3mLjTaNry3bnf",
  "key35": "37MLPZxqdTauv99Wnui82bbRbZkD1FazSPhDqnVAYHVbN2qtRbw3vXg9bbGkVNR4KJyAT4MSPEobvn2JkGZJLyiw",
  "key36": "iFZ6G53aVXyokUydtaMnnZoWVgiGu6WcA7iVc4hEkWN7LZsL67fSCXQY225kRRi3dYc4AspQeRD8KLWJoPuGuXy",
  "key37": "4pMvDkgx55hHhunp74UKFD3GPayxCYSur7QxRaNQWfUEQiX6vhVFaz638gQVW5NEawPeeyM1KDz6XKZDc1Hqvnye",
  "key38": "5J9yX5pu5vMU23GaM62S4644u7aerEQujZsN1sGfnSLvLJ8sZqHSmeY4aVV5AuDxNmF8v2sEbPp63xDGWVZDbF5H",
  "key39": "4ANDpVTQaStyzGJmVDdRrUkKspbEk3RqRB21nQW4WsF7WaoYnZoammUXbCLZSdrfPke949g3mbs9rsCzXCdD1EV1",
  "key40": "Lxovnh9uDDsRx1Zv1KeBGeYiP6Pha6Na3aZy8WjgMqsWamopLbekTwhyqYUegMiQTcgMTMF5UTuWQxLow1M1LtT",
  "key41": "YaS1d2tDddMRpUmULsuNM3cuD7krddh1R5JRQhn13BbJbc34Y2pUbt5xJKzjvRxun5pQJdA4JoxuU3uPp9buBbN",
  "key42": "2Fn859SeKXH22Qh32UZXzk5pPdYNMs5dbLT9A8y7QnyDm9pRYHMAMxDJcXRvd2UjpqSxhubiWWkoyg8nUuQyNzsq",
  "key43": "5zABXekZxijmnwAupxb96ZTxA5r1NRGc3XYaWWGUF9RgxVp1FStdjmu3kju1431qYDuTDCkWeQ6mvcnFQQFBGLQr",
  "key44": "4uP33g3KwNFXrDEgpLNzf3RcQmv7npk2h21NQE2AudXn8aoyX5A4xLUVySTdZsBz3qoUMUiDCdK4vrdLiSfuzhKb"
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
