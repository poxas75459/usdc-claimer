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
    "2Q4wBsyzLBNy4ucTUDcbwoSFPVwWvr866TNZzTV2ZwJGT82bgRmUQqy2g6z3z3fiaKyLd9Xy32S47U2Aop8Uc4yh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wn7GjX3ySKskgTCYmtZ6BDgb8qkFPhnupXeJhU7vnz66GRv4ZwMoB7eh3dRKWoMqbWTWb9dCyahEFVdD1brXRGU",
  "key1": "42pZwtmWNjjc7wPb5o2AoFiX4BWnMZL9VnPty9NAtzfkr7faAPWBhYgGMEHMiVksAyhj6HsSZJSdZvfcP6UAexWW",
  "key2": "2z5wFeKkXkDM3gDJMbWVLeZp72GDqofXRgU6pgE9nZmwVHbh1mHP8Ggcc7HFQctcez2j2khjPAbcLa98AabcnFwj",
  "key3": "4BmZ4PJMQ9SGWqgQ6x2LNdePor4gHMiRTTv3mtJLsAsybu6v91HDmUa7Z3HZo1dURGPmqboV6DAQ91P1wrX4Ujz8",
  "key4": "2mqeLWXpQXVVxHodjdkBjg9wgxreaE34vNTUKyMSFnY3YP4FziBRrhTuBoUfWYxHLBw12EXvJrTx8LEyohp8z9j9",
  "key5": "3Cwa4211A31oENA8wqTzAPqg7aacR1MaDTXz2E1s39LD3AQKoLtQp3eDdVX9KUrTMpctMankks1JcbqMhUEATVEm",
  "key6": "2XfBkYRDvuh8c9hSxAu63QsiR3x2tJ6GRmEN1tiJG4xdnXVeQ7Byoxxw59rBkJ1j6jcDLH3mZ2qf3oZrmEUeFxAW",
  "key7": "4yHmfiAzDbcV3JSMvKZKy2v1nf83SdZbdTWyW36J2wbGhThWpYymKH2prQjuzXygGK84Fje8KT2jmtpjQXYtYGkf",
  "key8": "3pfUFozhj8GTKS7w4vMoDx2HBUa2DJArgQEj879YmMFHpLagwi4AvbqZS9SCJ3fcyQnuU59dRuAY3SVfMNk9cDXE",
  "key9": "2R2BqF7Lea27QoJhsTJwcgiRRfa6GV7Q3XVP57BQgvA1tic2BDti77piCMMaYCB4rq8ozozq5bMzcJS5aExCxw1L",
  "key10": "dGaCMGyi4rY6DXWZqjFMH4hDFnGoJnJY1zwhJqsW4D5Ld2t5x8NzQ3Wxu6vkazZth6jg5FVamwZZRPBDHUACdpD",
  "key11": "3QoW9nkbt4a8hwHtGeLu1JHmnd5HNQwbJ4LZknFPgF9kAjndHpbhzG4BwKS3me9vfRK19fAGCvyUEDXJdYnk9oUG",
  "key12": "56VHpAYz8tG4Xa5VLPdsXyTfvaBAagHLxMWFaXG6t4YEYL1HnB1yREND3QhLydkdyiCBFbhxShYHKUQDaLaPeFXX",
  "key13": "WyVkYB6opCtBXCZUkjN8WRoGPTBGs6AnhsgYGNTz2ZApVqoM2wRTKuWDYXmQhLDivjcUqqbTpoV7fLqyHm6TVfL",
  "key14": "qAzGr8oocKJLqhZK7ijq2bYGGsBxm8AcDggftxhV5BicgFS1rEqW3Dw32ZhDKYPBT4Nz4Zfa3xLc411gwQ8u3mm",
  "key15": "27z4ZjUMLiPrXHuAjie3XaS62CgrcNoAfTpYBiGDqMXpz8WzEMEZpgfigugN5rv5eFAsXHKRZJitKW2GwHJrbdkq",
  "key16": "5MfJ5WQUiRUd9gPAEVskW39X1Dbm7NL3Dq5TpbRm88RETAPUSN7qTuLqAGSy2u77e2W4AvEiBFStWar2X3cNtUTM",
  "key17": "3TNqURNnP76PZR9Bego5ZLEtFBetLGHgUsjgoDixiZcnDqe3gHMydwJzYPHJZqmgEoQW3cDUA2ZP5FQgTex5QwWN",
  "key18": "5axkKoD1975qQ5apzvWJ3pcvHgVVKY3okz6EqLqwARy5FnWpDVeBxuzidfcYpqKuebx3rcgmi2Wu6zLZKBCTkmCX",
  "key19": "2N4TXXh4GYfcJsUtGDhLRXoLhB9LmDMfY5PVgBrCvckR18vJdqTCBSR8CsRM7YnbJAk2rBStbVJmd4cEeaZR31Gi",
  "key20": "QK81dAimhBv8B732TGg4fBXWLswJiNRu27en8Qfoua5purPZm93siEGUF6jemx6Vf2WcNc6Gbh1DcD9hxCMqKWL",
  "key21": "4Xqvhk3kXv81ZTJ7EiNLrop3DucaN4KRcQpL75aYb1KpWWxAimTrAY4vZBwqdBFHHjL3MVmp6vnoCERrtS417brM",
  "key22": "p7XxyQnbGCtQYMhPU7wQ7ZfBHQ2u2QHWaie5H21ZFqvgvBXYBik2xoKusVKxSUkyV26wB5TE6JRbLY53iEpUmA6",
  "key23": "AF1gemdmQRCztYqipY7Kmi7L1LAL4XAiaA29tiNYmAKgU5Xja5LiGd4KCut19c1eV21oDXeso57xUeu74mHThFy",
  "key24": "iv6xY3uCSUuxwrDm2YxXvCf2aJ4iN3XNvCHwYFY2pmyuMyBNJvmyJmDHFAQqRRGJPNDZGe45zX9ZEML2c4QeKgw",
  "key25": "4gH31gTtDZCj9p3ZnxQ8xbS7UhQeuyufxjenXKPBpTG8APqUBv2jkWCkpdfB8K1pcZBfKrbZQ4XwZN8uYf8FvA1Z",
  "key26": "39CkVqwRtgXe4612fwftGrqt3UoR2aUYnsKzV1BkZbJjG2A2cqZ4WkDU3FXmaebNUDXnDxx8FrD5dyXTQgNYfnV",
  "key27": "4pgMky948r2227dJG11BRFnJepAntJL2XbUtAoV4H9LyomwF1ozYbZ4B3eqHGYVS2T83EyDd2XuyWsAksdsEVTNE",
  "key28": "2SCJzzqY92JKeLWEVcDAr9ipkacjGioJwgGiW9c25Fw1gNsmHdm81RNQ7g98QEGf4PYurYQ8QRSfYskeuMkEoEhU",
  "key29": "99CZemNEXLjZSXM2au1YC8757v4hSTx2SGm5ZEfrvC64fAWsMWsy2znMFEktLBCSmQ3HR76CjfErhJNo4SUtaJK",
  "key30": "wuEx3SbGYYjUGFyLBcGGgWcTX6iV9tgGVKqFMyUnUXD5Nr86dKDErzockYFeR6eV18EEhBQikyiHAt8EueRp8Ts",
  "key31": "3TLWWUoBtaVSPRDscMtBoZV4Tdj5otjWzpiztK1Hcvao1KWuGcBea8zM1hKXPWDs6GiiJrJvjbjngJLLtLC9bMw7",
  "key32": "2Kr9DLs5QBmwanbS7UvE6QrPB6sHwa1NsdxyJjFHsCf9tKHJ6JEmqzLQUspDcCnBWG17RvK4b2dbD9RLPZpZTD2N",
  "key33": "4dzo4VKCqhbAqQE8izTVTYkpRphMkkz64CoYW7SCHxpD35i52vhKyhkdMBpbGUmKRKWau1jeABzcQ8cmJQupXByB",
  "key34": "4NecdxxpwGukuDBC7FLvWCfGu9Uc7vevdSDxQb9D9JqoQTiEVf9r9nq3HGa86a1cAbgR919XHJfPnMugcYDMDfAz",
  "key35": "4tM8LHpFjaNEC14VzaxbDw7LQbY6JdPX9k1aXzMminKi5PwPzkDhu3NDJ8Mm8LSa1oY8boRidvVc5MZcYMz11Ygb",
  "key36": "419mEmGvjshmLYDdbpXR7sg437chkCE4R64veY81nQSCUyhayu3Ft9DbcgYYykDV2dTMNz5q7hDataaKAd2hhbfe",
  "key37": "4HGtd8qnPAdao2isfMpzN7HTKc7sKVaHXaLpvgcgi1riudrWRZkBzTMoaDfgTxuGfcGZtLJMTTovn6iAxfmQ4cUZ",
  "key38": "3131ZNDMakw5dZyPb5zEXqGrxXugSr3Fn6DHzHrjhKoc4QojhXfxpxurfYSACqVjm54SJu1HNNTgdgJu8wg62Gjb",
  "key39": "LfirXFG8nKqiYgNHUFPR3sVJVZWqFcg8GitaaYKYuPnG7xr4jEhwqpUu2hvBZaaUQoV7YpTqTD8SyJ3q4Rc1qYq",
  "key40": "4xatU24EKaYUV3haa577m6fFXBoSW391eZPPFvNBvGm6fquK3U3MhX43tQGZF9UHrSgenAWhbAq2cRtJBS9p8iP8",
  "key41": "2nt6sckN2yYz7mzFKCjo91wYj1JkL4YEtoUBkRK7CQait1x4x5dbZvMaknVUh1fjk9r1wXiiV6iiA2vh8PRig3MK",
  "key42": "52mdxfkoN1RbWE1pegRaEtPcsVy9kDVZf2CpV47tTezzkyGqM6x4MytJrbrBRfUGEXkYj8FHrfrVwb3ep2qEutA",
  "key43": "3mEfWKx4ZYnpy6RQ8v6gJb1vaPkUa4c8pWMsDxgtYFQaQ6dyrPuHdar9TDKgeMWk82yqY99PHesDKpGrxCJXwLdy",
  "key44": "3riyHtGx8sVXk6VxkvJtr5PadYVcDBzbWKydBPzvUvzjVkFg2DR9mFjq1aVBWoo3DwveKz8Qor1BHNx9Bbyh33bS",
  "key45": "2c2f7umJmRnoNVuLnxXS7jdRbBwekB2SYaXccZYsKugYRHHx5E7GtPrUrhbc6fF7DGn6ZN5iaJQEw6zpinbERRkc",
  "key46": "64XHutVykhegR6ghiNCgauz37thaZmZuFCUWj7L9E9SsNJcsWb6WMb7Fu8amschy9XS2agSWKqRZrknuwxzf8nes",
  "key47": "4obHFrnuh9gxobaySKA8QiM24iNUZagVUzQ6XrxjHrGww5bn7QdRTjYTKPuf1VbQEVwLN4JSxgRHJs8tonsz2k2T"
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
