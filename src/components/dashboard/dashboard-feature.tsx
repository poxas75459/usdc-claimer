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
    "2i87DHgNRRog6zxZc4pX1ySCqjfEMQwXfeQ7xcJG4ck5KKrji78ch4QsrPenonmtDX8dW1UVMPq1yHRmW5zEDNdG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4726UsQiCjDfhcQPaNTFNBh8LDZUhxfUabQuJ3y9fC7rUg13ZmyLw16KoWh62xfhjhDiH2g5EFTqa2VYNeGdgpaQ",
  "key1": "5SmU6X7mshdfFP8oehkDFg6qnucKJt86Cp47asvFttEYZjBQVTQFsqDqd2sZUBxnNuEbXko7VhFxVkxyty2GDKxe",
  "key2": "dhQoQxNpZsHp8VtqvsrByxwo3uNdvAuMuYJG8TMrgYM3rnXC8KE9McQ8KUgW9A97bu5oFywhk4Deu12EJ7Tyy1v",
  "key3": "3u75bafkZ7nAqnW6PCLF4rrhpySbQhZ213btfwhV4tw4rWKRBdZ5TwmnYEUm78f2AqFvz9DbkEV28e6RotTm4yKt",
  "key4": "5qnXd5ptWysRrw2pkAUUPiaUUDrrNk21mypeiK2a24p7KxNrDwpB7hkmqQe8TND6si8tXRdsjfNDsXgiY6HJJgK9",
  "key5": "4xJpLbogmEqCHH64G56BLSNZBa5BBMLkRPEC2ABssRWsmgs42bQxYYwdBGGwRESCy4jxxFxCbTWs78YzNR41h7D3",
  "key6": "5z1AVZyz1Mt4aK5fYGLKzyQ2bL5dPnJu1X7dnkmB5gWr2wBxZpFcgDygChqqSpUFwTaq5MVXEB7rBSSMeDFU13pH",
  "key7": "57i5i4P6btZ19G2rmC7C4M47oc41QYLJ3kHiXAHqjYQr24GynR6gAnTBiEzcq5YtN9DjWqNyjuDmEk9pyznw46Wo",
  "key8": "66QcLfWLd2VuHCkWncdsgoDEtP5PkGEcL5eCJLhBHrMbStTRnEGJoRXTNhyGwzjR4K69DfkGo7hHDSLwGm7m5NNh",
  "key9": "2gVztVm4boLFbjkvjXwHkAm7rejQ9b6gbTLR4c8hjVWoEed2Ax8i4oRoncpLQFHVgGqY9LRQZvJBipGRfMSx7sZY",
  "key10": "v6dHeU4nUYcXZ46XSoptoPU47UH47Urhmywww4cAuZbD6P1rgJbVWSxvUe9RgUxSeCncprJRFqX3fLTyD1pSnDQ",
  "key11": "3WxEcuuWYMvJJASQKVBuuiyMTbJxiu3jh4T2A9qBDYNNxj7Txpy4ttvznPptTn3GpWweiL91sxz9FQstoj1UakP4",
  "key12": "nYq7DX9TRxok2pfWdv8id69KaW4sNzQY5ntsnqAbN79N3Qm1BbSv7FBLibiYvme6TUmy3xXpDJCG8LnFgsPpwUg",
  "key13": "3oD2yp9WGfPSzDGQ1QH6jxwV1DXwjSHJJMLWUdQfJPFYWtsyRJhqvtHmni1RTyDWxRpmNfZwtFPqeg1cJULi9Sth",
  "key14": "yuhV7iTnG1mbU4oC6E7iffNpJYV8MMTmypzoSHqGfBkmsTcNEvvQW87zw3AXq3yecBhaEx5QoY2ekBN1UV5ZdEs",
  "key15": "43ggmVnDgB9C5nUtFNyAjNH99a6GJn3cHDtJGkGDSfj3tK9LGhLLCCmdgD6kPyTmtD2gVzepZc22QHjZrnydfHMA",
  "key16": "3NSN5cA6HKb5rbX5HGSqDu6ygDrBRmvBvyh3eRU34Wu1cDx5EiqNSQfEmHhuf4bfC1KTYX2pNn8nv8iZdRhsTZHd",
  "key17": "4Mqn5SGvxveLGwKGx94WR9iXQKiSPcW1RXKJZGwgnExJCPPunBGhxBPgCJtBzB5jVU3VKQNT3vxrCJ24s355hPht",
  "key18": "3yyv23GGpsZbfpuNpfWRYqQjjbRYpbqDj175XSq8uUyyz4fUnGYvwk4441eN6igkyF67VrUJY52Bs6rZgqC99aZE",
  "key19": "3pmDpnC7dkLaqqc2B3Crz2hRmpoHPBGNRz6gK73zhCH6CrGpGDXh8oTUwcp5DXK7WTVCqPBrYzrR79bDQ4VRY7oj",
  "key20": "2w1Y6VQfxr6dvvtiHYdiN1k4GvBUa24wqj94dVdCPBnVeUmW3iqqM3AF9Nfq1quAj3Y9qASHUKZNztDTZKosDqm6",
  "key21": "4R5wfGopYB64dS1UbYC15qKkTyeYfqB7fMpdX1sUR426sE2tGotciaCkWED8mj5ems543hz2V3zTbiqAyfmxmmeX",
  "key22": "VPZqFhVnwFH9Pat38d7DL4AQrCWQF1RbH2DQYKS2eGBuvhkXm24p1W8bBnyAkHkvpdqWd1Xg7J5CvQMktVHPVLT",
  "key23": "4JKyQ24vRfutq9kKmtD841EcbPPn583NL2XMnQ5cqf4XPK6ekh5uSjZw9brgCAkASD4JZKS26uZEMiRcPDWwHZqr",
  "key24": "2x1FAjDcTP7AakoEQ3gFA7teJDappR2FoJvCWVNDJ7adjHi9ckNY5Wq3VwB4EKPHD8nyGod57EcUiBgGgkgYKwfq",
  "key25": "5ibYFFxMgAuS6K7kPZYKhpiDxdHLtCMW1UwKgMARnM2eSwcotDrVw6VeK8wJERCAEWZ1g5kx3dtpBMRwLQeH2ZCt",
  "key26": "E5M29BySmze1Afi99vN2kWazsYBg3kEroEVCcntZ3oSnfwgYg8J68McdAqXL95eo7m7CQLxXncRwQpxi4cRKeUp",
  "key27": "aWXxCqrkXqTquJ4kaTvZLBgUGbqDEAH4a7KVoGkvYADxR6mbrotfpFXkyfhxAbfNkjHGzGveKoMp7dvBw2dKsfK",
  "key28": "5SEnGmDNiZjCUDJfqeArHy5b7WvKV62ZojQkdbmApDCdVFrALEoWGwXswG8b6VouuY2pVNLCSoEh5j3n6xyACuNW",
  "key29": "2z2h1rPw2je9zKFiWRUspxptTdz27iqeTVBe8ib6nyPLeD8WB4uyF2GCfpVgZcs7TYvkh7iQG28cejUu6FLNEDjD",
  "key30": "kACi3Wz1AED4o2yHGDxubhvTtHd1YSBJu778GEER61Paj3NghdQtBngixpNoKLsSygj1yncRhC7PUHKpd7Z8aEz",
  "key31": "5EktNCDqyo3c8EPX1gLNYKWnsBw7s3bncmM6joe3GuswNgKvfM2iaGS93enwzAUPvTP1GmvqShJcy3Vcjgv8ooUm",
  "key32": "4EPrADC74iPH24y3u9Vbjqfbij12xQM1A96TmRkq42z4Vw9DcoUpWXBJadk15VdJSokErcecV7MoPTFp3YPwQZwN",
  "key33": "45Jo5cSYs852tJDe455uhnMXu6jFwSC5fRSthnpigHVqw4XquZCsCGtTtoMmRKRxC5UNEPBcomiTHzQoW6WSKXv",
  "key34": "cL9aJBSfxyh7TyRLo8vWE8i8b2PE2XyoDFN4dvXH4BRpgd2BoJ8QEffzB3xrBydh9CqjraVY7GJSKrmpgV7fXJ8",
  "key35": "XSwRLMzT9gK6nDD7kfKdGdCLPLsE9NCipP1F5PXvvKVDZCh2GhmqA6P5N4uvh1mLM5QwWKTFk7S4DUSBR3uxQoC",
  "key36": "3Vx4sQ1Ar1WTvb1dW247xaZzxFGSWRnmv2xXqoisef3hVDVqX9JJCLkbNiFtw1uayY8PDvGQLRQDkaAnPdBCjK6x",
  "key37": "5EmQYMDZH3DqXmzWZNfP1eN41RPmW8Ugecg3wip9A3xk3CehQ83iCPcsCzBSDsuc7MrxgaPbL4Vdm6KWB3YVcvHY",
  "key38": "4yRmSQoZ7Cy7j8oDdF3UycpWqfv2sF2aq342HeWCxgvDYe93WuXCtJHQu4ZVn8z7CM3VMxnsMGw1Yinzv4kcsiq4",
  "key39": "5pYd7dahxs9E2gjqej1y46HHEt7wi5QTaiYuVMq8h2Fzu3U1jYyfffrBUrnzcmgkoWCodAaC44pWW7nZiT878wgX",
  "key40": "2XwSygBF6ME8ow3csmRTH6KrDfiVrabLt9thtqreQfksYVNp3tTJReaiX5eA2FiASXsHAnyvptBoFKCTv8ghw9YG",
  "key41": "32ZHDvKequQawe9auJvj6ACkFXNX53G47i9Y8JD36Q9TB9oiwWQKeyiNDmSYCqV4vMtMTvwKJag8m4zm3EEsuVUB",
  "key42": "2V2VaPFu7NYsAXnBQZMUKtvFBohohLGgSkSntgrC22bBeo6YhGxKup787nd7cMDcVmRBiozECv74fv81YDpfFiSw",
  "key43": "4CYQLTzy5U1UZPp6cEb9cG9wT98r5bHZr9HLvuh1E91V8aXunjGdvBvuHPcDGbBNUwamaZS4QBGsJnYA5fmowJAu",
  "key44": "U5BjvRhjsy1MHnc367W8hcLyRGmhiTTMGUZzJtz3SHqqeKXHb63wgHVt6cgCY9oBRBTtVwxVMrhjYeDEkVxr2rD",
  "key45": "3V9UVDJ9DJzNd8qtEcuZTD8Wh2sASVhxqnKxLKXYYuRp7w1tLcytSfgi6DpgN72aUYvvMmSgNaRT2jGNnL2ecHff",
  "key46": "1bFSqFUUF5sKVTYy9ur6cRy5YmQWevMrgFeemkAZ186Jgbjp9KrM7EW3e2W6jk1shtG53qjxoHbL7jM8S7aFtTQ",
  "key47": "3S5y1ppGKhKSjp5D5amLoYyktVU4UaxiYkFMHWpSfcLCjEYjMqabkQN7NkC6XAEXisPf1TGYRqJx4Tvy9EaFKQEK"
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
