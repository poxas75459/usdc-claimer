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
    "36TZ33vJaNwwUg8ZnMRx75AiEBZocx3R9pf9MVqrKAiVCNXZQicSpiNT4Yw6jZNGYFTWKvAXn8hitx2VVVsUTkb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LgJm8xEfbekSgfs9ncuAoMoDgTywV5cWYCHAapLPMURyceKv6irkoyBY8khBvEbQXQRLiFUe8a3c8kUXBRs9g6k",
  "key1": "649pXXZKaB6Yg3xC3J6FUnq3LyExTW3EyfS9qXEHYHmj6TxLdrmMveJq8SzXGiS8dBBTtQww5sjhAAxDsffcD8CT",
  "key2": "iByjEAUdMENmRUCVsxwRsrGV6hmSJgnzvtp879A4f8NUnUzZJmo5oR35bMkeRWgTbtixMtpAnrBJgbynyhrRadJ",
  "key3": "XMfK5AaxnqAtkBj1BSZrEn9B1Vy2Qd2vKvWuw6qsrANeB2MiVMrYxprd3P8aoRVmttYCrKb5ueKYrKW1cJ47Nrc",
  "key4": "Z3rchDanjnyDmjtyR9TviQitiRNbDmaEAx5urp2pCWSD8feMgsPRbef8zMfgkNxzf5mzDYzst4qZKCd2VoXSxcC",
  "key5": "4GLeJVreooskpQJEBYKtVaJZpWsPCidaVfNa1UJfbpRn4HbXbG6r37VovXE7JcE8wXBDkYowyfywSv5wcLg56Kyg",
  "key6": "5sABc3zvfxjJu1Zytj3AWZAPh1JBY6pcQNVwX1ro6Kuas2YQ2FYhAD9Lx6jhazydFB5gSpRPfHuHdoj5Pg2XRe2Y",
  "key7": "tESCPJXjJLLterLSRrs7QGKFyNcvFQXy7iegMihAmTwwewCHVMNp2yNUHRN5zqAeo3kQiSjsDiUprEyjamciYJg",
  "key8": "4uVmRqpB4cVHejemRFadzzhDiExYWFpV3cV47b6VFJwTP9etWXqXKpvADLPfEFjSMJkuVw5ysxYtf4tajUThnASV",
  "key9": "VrJLwoU5EMi9gmWcPEWT7Sw7shMFrKe6ccduzamQMgBY5YvFsHauaRDoCqGuvGWj3GrxfX5yQ9Xo1MvNFD4uhYK",
  "key10": "56PkYVYSJhsnYnpLUaU9MxwAuZqq73CE7aXXJCuY2kF5fWLny387TFqqd8TmLQQp1eqwkRd62DoyBYTrTtu9xPEA",
  "key11": "3uVcA9AHkwi3reVsyVzJpAJKBYr1v8x84MmjsjXAxA1nj5WidQKGVEWbrpRk8CDrQJkEsHroZ5dDE4iySDYQdnEw",
  "key12": "2gT98Ljjqy83zQTJ8xf3gwBsYe1gazFeFGZe8k9XVEL9bKeYCn8u5cPUurYJeejKhAZthFB7PpZa9Rsxb5chrH1S",
  "key13": "2iPuXBRC1N6VzHbS2m2bwmumjaYTd78vhMKQ1cSkeVmhKKEckc8j4W4Qbhy17yTVXUCFPhRABnUBcMemeHKGiw5w",
  "key14": "5dPGXxGaQrSLref5N7DtzanS9VHYff5A16wA2mphk5vSpww4sorNnLSCXTNsh8UhBE6HzuevwvJ2CdLdFz4qxt2f",
  "key15": "578NvJ4evg7DgcWB4NxKGsWL19omtgDHoJSWfSuSTXhPj3BU9mNWd4j3Q8JUjPSbsYNVkwVRX1GcSejKHc1Taj6R",
  "key16": "5GQ27f5iYnpFLD3tNrcNhUbS3ngp1GfsbT9rTJmBSwb72JvbsF1Fcbdt1zTu81g2NHy1YhnT1XECUsFRmaryefLA",
  "key17": "34Vz3pcJMkmEuw494qhKDBVeXLPsVrSG7strNtbo2RZ4uabgpuGXZepJjtbMPVAyAhfN21CLts32D4Cyq6H4qVAa",
  "key18": "5hHAmD6Q8TGvVeW4bjRrjQxyw3fZcWEQjEhsWR2UHJvzKyU8wyNd1oKQVtG2dHenPfhaycmD4Fuhw1bMUXNkcSgx",
  "key19": "djwTdY4PgVMVsxGPpcbecXzhst7QuAgSsoHeLFq171wRB8Abo6q5E2LuV7e2RewXNPshr6zxeMmo3Uvs3XLqtuE",
  "key20": "5KTMyPVxtR8GWFPNCD4pNKpoSbiu3T22d6aCSVsUJ7JL5d777zK49Y8cpTnQnpB2eGXqGyPkHBXbA93xfygMsGcd",
  "key21": "4ZsqGMMJTDRWHFTSdW6TFvJkqoUVR9oQviDr6ppPvqf6UdxkLf73vS4FzBQn6A3BoJJ3iFpnsKpXo9uo2ANxmoec",
  "key22": "3nNiovmHhYUE1FnjbRvMWeYafaMv8hdEuYrh46qwMQA5qmRhb679BzsMRwp5QZmm7TsCu6t3q3Qyy22k32LuguiC",
  "key23": "2scna9i1xduPTNsXJbjRAEscNH9mhkN62G1fHgPeixaGp9PKL1v8NLprHjNN5vqawG3RAEBTCHyocnU4kqg9JjvZ",
  "key24": "3DhgH2cWpfJFV6EXUxKfuMauvGfRGRs7Fogts2bHkM4xZkgEk9agsJnfKYwULRyaX9iWbbeBWSBfzKpz75dnsvt6",
  "key25": "4H7JuYSwJGFvRzWNW3EJKcdjm8ZK7BTLFYKnw3PqPYost41DBv9e7tsJc76Sc3rPicCsPsdGiMw2WaKmJvdaGNoa",
  "key26": "3qVJi2fZiTBkctgpdhSXto7UrRyFcVBThfXMKoQpa2KNFBvRF2vEnNCbNpJac5gFma4JiodBDk2HqjogPcMFkr1u",
  "key27": "64Ei4dKqk6Hua7M2PgZRS3jw2f13F6i8JXxyh4fDaNyMbsAipGyHVevY4CwGREBRNxTMTzz737cRoM5Ug6Smc31A",
  "key28": "3aB8xVmUraFvSRv7JQbpgusHSeyW37TuL5rNRgZjDZgB4SzWLiP3JDthGcGcxHeQvP1emKLFdKKD5pSyUzCRxCuC",
  "key29": "2hAkdsxsrq4M44hpCQLXBhFWRyqHsZU4m6oTvShz1czDt9zsA7Fd8fHYUxMNzRqzK4uYnHYvXuqwsXYiABjCkEAD",
  "key30": "386WANvDvkwFJ9ZgV5mobjZce6SyHoZTiyx6MqgTRBG3uMG8Jo7zVioo7dYYSBZDq8tkJ65TRDN7mNvuK5w9LUCU",
  "key31": "5xrv5Cp3y25weewAsSzYSJFE6irTRaWtkFSfefw1yvVHReutDuthUXZNh4QHBbUuP4qhYoEtQzCcZrbd4d5ujESH",
  "key32": "LwSM6R6n8rGA13E5Tm2XG2fkkjwWdqKjBYh3o8inna8ompX1JAMcsgwaNYCgWjyfdarHrGavERPpNkGyFAXHKmk",
  "key33": "2nisze6nC4WHFBtG8yfdubJvCKnMqcMhxQR5U81xvJv7KcKR7o9UTMB4rL79Xcdq3qN37tATY7kyryYEqwcJwkdV",
  "key34": "3PoYfQYURUWuBvvibpbjdVE417Vf8SHftyXFPD9qrpoxF2gRiebxUG2r1vcSd5etGPBAPB8X42SfLzogLjAnYgJj",
  "key35": "hxKP9XECHiyXrB3dZ5BBs5ouZmXbEPdq7jFQYkKAB5Q83yQsWTqJEX2gHQbQ6L4A21ErtA4SXPB17cehMENu75S",
  "key36": "3z8UEAfBaAyNyLY3JPAf419mrdDjASRiZ9MTxGLd4HcCHY2LwewYqGDsEyffNYMV9qLDF26oKWfGx5T33WjgEwnJ",
  "key37": "3ztSwTMCYFiL3BAvwTGGu9dAVbQ7qYznr4ozBEY6CawXTUtp2VLoSTxSMYSLyS53mGHm6o361YpXWCvmkTQaaiJv",
  "key38": "5WjDMw8m1E9bMWCTPGN1YWqsB5bFtSFm2ERbxe9BYbSkP9ryyCy4b17xnWQmMCN6Bjaq8aLzyXott5uLssfBji8A",
  "key39": "3qWK2BTa1jCiaVpj63q1cr5tGBkr1KwWDm7E2WwGdbwufcFCC7auHrreExK8EAyKaGthyKYfECJ8R7M3pXJMexe8",
  "key40": "4JTFfwEDbLSUSqWyxbTTEC6iveC3kckhH4xfnJPx5EtQvcumakKKtyegpDaWwXa4MY8KLyVtDayETFyWoTYT55vG",
  "key41": "2cUgi3eRJyEdDTM99aDTyYF5t2vZP7Sq8YPm2Tc1hCnjYHMdeCex4QTE1DNcw8Ub2VmsSaa5CjsYKM2bDgXHwgMf"
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
