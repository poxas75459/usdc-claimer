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
    "4dzSAwb6pKqHE5vEwUcV4BFNxeUZmmJBdR5xojpqSq1G3hqZkondcMyQfuYxVM2XV9t3QsFJP1hPP3nVrg4S7EXM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27pxj271nSbYxigrvZmAKZf3boymckMGdL7Ni8Dsok3JhZXLFJHcjp2Ugiw3RVzzoFrPmTfTEVCCKv61944obohe",
  "key1": "4pFqpJD6qiDTeHFUY3oTd22bQXG5YUyGwznmnjYxbayCHQDjAjoHLi74YK8JkaiYDrVKdMnvPvStscyCtEhvnXKu",
  "key2": "5ahPkzJoo9yrK17DDx89rGX861ELAMmMcwWWRM52it9PhGwKhxmbHiX5B2oBbMNmbPD6zaWbGKjYzcCHsCWCKc7S",
  "key3": "2QMkuq2Mc3QgmZucUKRKdv5HPvxDCErffnMFv2fLATXduchd7oYFyms6K7FE84wrDStwL4wLWWKZB35aS2FzDYro",
  "key4": "66u85EAU3F5hJ5W5kSFUyobLcqjnoUsegxe7jLPZG976vrRzNnuSPzuWkyGQxKnLnAiCsVXfZUhMzpTuVggcULPz",
  "key5": "2vnyRGKG1AKNnwqhkaov4A61kDL1B8bP4phtSPWXuboqKLYoXZBPXrpJ4yU5CFZ69oXiJyJ8DtDF55CHoEimNLA9",
  "key6": "4bygGCF1uF2u28K3s3G17EqaYJTpfMBHksSGs7TQ31BT8MHevQSQFnbxMaN5Cf618ysG6TWJqnENkxHUVcYoBDLw",
  "key7": "tNi6JhisWTfvX5AVSENZiSe1HQWd7D1KkPHJ8rzjk6CsPHocomRLDjrsNFYzkvo9vzNu2inqZVEsUormrURZGbQ",
  "key8": "2AmuRV2yuTbypX2fins3BH791QCrtMocfwy1hd39uDNjMGH9p9hYVXcoMSpFWHnqJ1kALKSprpkaV3jByK2N1fQh",
  "key9": "4z1UkxbED3ztqFNw1V4hsPQb2T2tE91QH9XxH4r1wp7sMU1eSkFhVX4erVYRFnRA9k8qLRwJR9eePzrzqfpR4myq",
  "key10": "2stUvutu7q1YUFRV7LcA5nE3LUeJgdovWcaufwLYYfTa7b5uhvWbAhr5GS1U7VpjBDaQgLkUtZ8zKuE1zx3oMWBC",
  "key11": "22vjS3zfXUqTxsPUhWKUXWwJSDpW1KuxnChta2c26mngpHGJqFVvWxz183AsNa8uUEwWQDQ5beL3FP9pJFxMWQV7",
  "key12": "4ZdYxGtvMsXgxPFvsAjxiqyfYKLR6pzUrMQCvyuLsznihr6SmupC3o3tQE56DcsLhWNCkYqQuNhPa1wwqDSbAn79",
  "key13": "3H3oWJ9pd67meJMUWHcxYiSxojTtp49Zr8t1HsMJKB49hBYXZ9pLzoozwMJTnNF8MuJmBewc6WsMiPVHoYiFfx31",
  "key14": "3LNkwcpumgJJVPAgxhFFvhGhYbZyVLReH1hQ1TZs8abMSqvgDXqKXGqrqPEXNjwTV6cib3pZPnprzk8vTYmFZCky",
  "key15": "37VTfg3Y9hEZK74Y1ESxJnmtJ4qKW6nuPWZcW6o5xA2s1ukC67ujF9sG7QiwneH5jhSXoSm3WFjCE6Ztvjzo4NMf",
  "key16": "3HuAb2gfcphtLgVTcME1CgkrfWh17MDtcBh6pPEfRrFEY1zuC1dWuFrApSxhXTaNW1Xv6b9ajbPdKYa8BMvwecYX",
  "key17": "rdYLbtFoFphv1Chid24p8Ei4f5E8GgM5kds773S8W7nn3C28SLWtPyakZRfTmGGTjWt4YA3jJbKL4sxqkP4UyP8",
  "key18": "4nJx5iT3Brq2rtyk5evmgw7AacMnghZE2wLU8gwGQZHfvML1Hj7UW9QvUc297NR3DGrqYWycut92T18EzKuaKQh3",
  "key19": "5avT1Q4zrSBX8Gis7Ed5UZwkSWHkAobE6FCiMu1vWJvwdtv6zmFNWd2FNJZMVXD7k91wkgTZT4ZJrz82DeBgY9Jx",
  "key20": "3nuqjsyYrLXirmsN68zWbwwxxNAMJT91oYLcbixdsnf54FHytw1nCjP7ZQtHYTD5GNzown4apyfQjce5vCvu7ong",
  "key21": "5xqa2Piz62rMfePcQho7QxWxWt9N98QhDrqKQ4KYs9n6TYUAmSGTo2Ak3JCnw1Ww1iBm7gvqjCECk7uduT6yF2zE",
  "key22": "3HtKE3x4TUFzBjTure6D3E9G1jUMoN3EpdjpKaQeCZfaZX3reRTVgfe5xKEGoUJ6cTtUcoSFiCTK9uHTKicD22v8",
  "key23": "4bLW5qz6V8q1zGo4koX8714NHj4bdQVrCS83tftYdyJ9zLBq3A8sEK7Ngcf41DcQHtfeMEnyiarV6QBYWacJwBuW",
  "key24": "54D78ZUnBiAhtD1DcAib7HQbM1z6Y65RzshwSi3xaZA39xocfeHcHDYMqejmoEza1Cz7vXxHkDUEerKiG3BoZ1RS",
  "key25": "45Tjc7TUyCw3GgGuNfNXzV2vhFkTZCw1MLEgwijAp9QozPS9qgsTqDQwKjctkSiiaTn1nazbsQoe82mbhM75CGaa",
  "key26": "4ikT6JJhkC37ArVYzxazC71R7jdqbZ8KhVcHGpimyp6RKVMP9aQh3hYJN6rw1gN41aQzcLFbDM9Dkmo7X6wzaaB2",
  "key27": "qk3dLxQwHALbccn3yaetNMvkawfNCkCmC1LE1pbDoNm3yoppxAVMftnP1PAogqZMoYyogKSyXzUjJfZZvj1tw9j",
  "key28": "sfatGZdWXukmTN2PSUpWap24QEQjnjxARCH9jFAWPKSxnuKXESQx9pSMzJ8mnnE1LjaUmsHBctyJo92h5Dc171J",
  "key29": "2Kmgx4Y2jXJf18QhBWoMNTiQX61M5y9x6wciadkUUc7TpaaaSwdVxc9eybRzJvkncjYotiXV2hMAj1FTQqsAFtJx",
  "key30": "2fjjvkU3LWNjNUPpTVPKT3xERCcUQy7CoE7NE7TDnpHbCqFoVQDLqir5jMW4i2ig2P5dcqntMNFYzSU6dt9Jz69h",
  "key31": "4cowdWxZrPvBWK82YQvvz9LZbsWN9C15tPwPhGHW13n4DzbGzZDg8qcwbk13KT93FMxU1tgoCLd4nzLfs4MPr8Av",
  "key32": "2DiMxoxp6btZJDJc3x67ENdqRa1wdjvWUV1SbYSA977Uh6qAJe8W5nEy3hNhsf9ngC5EZ3X7XkhxxLjyzuGrsx9C",
  "key33": "2h2xMknD3nfTAUhVzNX2Q8kq3SkvMAVxd3UmNEvrN89tSDqPYUBpCYpnSq4z6VWbH4EcUKRBwmbEXqdhnPRNrL4A",
  "key34": "5thEY42T8tGaTtcvvYZLDwS4tFLWS4DgfXW8D88dC2htEin2uZYBQSWuTJZdjfKSV3Ns15zACBc1RXtfwvyZLvtR",
  "key35": "4yUFB5WjBEdkDktkNyJAu2Z1i4ZXXV6F8yppgsqpp3suYcRdZVBQkCLPUVuJLXbm3mRsXMu7beH1D9V1p8rQNyTC",
  "key36": "5ziKFbe8N1U6nbqDfR6rdzfP173vRU4WNVpibmwMoUT9eCXYnGeukAHMRJ9NcDcvDJgFRe7iyNtDayNcYXBCn1i5",
  "key37": "evzS5CbhrMwJ7o1CKfqWAT75fcYN4BHYuKv3ujy1VDDbpnTtmMWVw7CtuN3K2RnakLGsr4eFFAp74j7yrFmrpZt",
  "key38": "2bkMiA3rwh6ghhEqG9BUNH9Emj9cC5Z7xFcrPTsMX7D5mtBSkgoomPuiYV2Uhrip3rgKvJL7DSwUxt5ysbDXqMjV",
  "key39": "4xmyEjZVmmQRC29Lqw5i9MdSsxpU39hhLtMwi8HejQsPPpRfpc6qwDjtahfjVfwvNepzcyRve4fSdjDZrTeUJSTF",
  "key40": "4KCqH5krWS24sc7JAxupXcJ6T587bJRTy4Ae849kTqq9AhPq4GfQvbWRwWtpkxbzPuUSnFVFDvErdSdHBDJua9uu",
  "key41": "KmgrWaSSzWqZDWkeBUTX2nEjajTUfHYLHQVcCHWwrASzZHmBSgfXoY3zUtYuEUaAmP2Y9qp3ovi1fcpQQk2qphb",
  "key42": "2JBNWDSfwdsnP71ym4yPctVEp2YvvP2zG7wQYPfocnUutuHD5Dtu2WMcWNqE1fc6ZvNEN9QWaZEdet7UQnMLwVSv",
  "key43": "49RWMNkfT78JmDYQTW6wGNatmZGkfKwwX36NuDCcD2DVTWWZtzeHHNbsGpT8sEFyHh5VTW75qMmPi5qD59gErbGW",
  "key44": "2vSG9BLVTvcRg34KZCbpj3vdrYmdjHj9i8VrfaM7Scwpc2Qa4yJ1phf5MjiVjsw1J6yusvuAzdzq8ZZHULWWUqba",
  "key45": "3DpD4mm4hc6KC62P2YnxVS3P45n1vnNq2pkw2sqzEQuiRRy9v2PsFv6YpyLDbqbMVD2fH4cQq7eb9zbuTPam5HbX",
  "key46": "yQTuz1Q7NKKL1pTGYUU5LhpenGRMjJBpiqDFmY2JQF3djLVcrFLDjZCJfs3SDKhqkm3ApBrgM2P4X91B4tArqkL",
  "key47": "2PF9RDd7coiZyL6iFqPSMVxoKVs468UkZMvSnpHZkURo5V6iV32yb8C24fwuhX3PVsdASnY4iYoigXJMQHuqbaB",
  "key48": "3CZrJ27QfiXji22a83HfvzXFW9UEHELP5BiRaNZBzjuBtM4EUUpprG3Zumvb33Q3v9LLiZ15u3jyp491iXjAWuw3"
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
