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
    "35sPL3x4x7uzuUQzUssFBvKZoChpnfyoGaCnqBxx9Du4kSjDER9h6x1nvQ3ygdzR9DqCB1zVeC8GAUuYR3cF3SWY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Hoi28EseUHV4fWJrSDjf2ySaUidRPtyYDsSYmDFNDzCaB59n4THqeH66kCvXNjinBY2YoVnxVLzHvXDQ1Px87J9",
  "key1": "21zyyGYzspH83PVypUh8yMtzYhpS1K3nijVZynqZNkngX6qxPPG3qpvsax9iRwspZhSdvXAFaMDVJhMX6P3Prvz7",
  "key2": "5c9TriAuCjziCFGTiFS2oo9rsjqWnCx3MiZPKwigPQWuVEjRfgvCqeYbyiXtdLAUAarsCSQa1BFkvxGENutUKigj",
  "key3": "5Mkos1L9EZn4r38YcqAaJWPazhuPQFa1ETJ2tgSWEgU8Zk6HWJ97jRAotx3ctbXFNUXhooRF2mLn3vWJHqyDxqe3",
  "key4": "4jmTL5W3Q865VPMgVrKqNHX3zKStDsEueSf78ZZwJUe9DYyHdGyJHScxnTokfcgvbBpfXCmAF9Lw3j8bcGN43gqh",
  "key5": "5pAmxgKFYRiFbLheuGiBKHZxrs8Ai2kQ33jT2G1NfoDFtg2GsFbt4NtXq6yPkSZTFydAiTdAQvSEEjUccFXASvxi",
  "key6": "38E9RvVsTHuzTiYFPVvFw9GvYZbtbpypi7CcM5Kvh4Xcqb4DK5m7L6YNrae99wdP2AAVaX3tntcxN4kW7Xm8zKBu",
  "key7": "3Z5d3RqVemkgsYWEmWQGd5bXY9wfGM88QbBA1Var6vs4t58ngCTUyG7x8NvTnN9NRtfdNo6tJ7Y2n8dy12pgzwG2",
  "key8": "3xy8hfNPibQbqWZAgu6Dvt1TSJM2Fw96GNmmNmgUQv7BgzEe3nXmYNhS4fcXtS4Bi6Cz8LV7MdHgx87PhG4e4Wq8",
  "key9": "3WuuvPe8tfL6Dct662BxTNqoxrU8XvsyppZqjdfAgdvT8cXRZUuqn51XM8dsnTqosxiT5ww5vC3kLgbxDmXEQxA6",
  "key10": "2H9qatgwx2zr3C1boNcxu6Ao4M551F1qFcpjAhjSBj4WGcvUmBLrg2VoRVAqLmHRAc3WDohkf2DT1kx5i9dXF1vQ",
  "key11": "5xBWSgPCT1T65v7EPgFL5p25VTGQ4Jpn12WYuW32s89q7DyNC9GcHHMBR2oX7DCmXNavvNXToQYohaL19XcKc2f2",
  "key12": "VeTV6KT7xVo3bCG2G8127U2eg3xEHrGAY8bQP7orzMhcA9xJnxUrmmtLxDAcoiC67vxVfCmYvnVbBmyd71fCGut",
  "key13": "4PxPgKZSbUM4iwhHdk7M3EKdMKSzFaVLReHrYxZPT4ZHvPCAmw7fT7gXpJuYbacWr5HK4nv6BySsAHkBtTgBZZhq",
  "key14": "2kHLvNCx3hGoXuajRYyVcgypVXDwDt6uTvw6HMumCtmjuQde37of2NxgfHFPD9tcDzB8KsKDWrZcFZk1pFG728Nh",
  "key15": "3VhXRaJpMkR8fC6uMmCNkTSifpcmD9jfw7nsbhq5xnpDCnpH8R1Uua2YjN52fZat79rvtZbhR5rPr6jY9MFrBRif",
  "key16": "3vHac93hrnvkztLJX95ikTMVSfo2nrbvCifJ9YDYUZ1eEfCNgUgMYB7qdmrA36TBpHJbEBSPXi23vupDSTgsQFLd",
  "key17": "2rUkM452Tm1KA1htDnEgnvmcJdhaNfoXtJPmoK9w63ES9ybbzBhtbDn3QAxkgXkJhqw9GGhZsj2wnm23ntq1htjP",
  "key18": "3FD1PnvxRjmGFyL3rrhR7oieXVFa6aezDhjPBKDinwPsCHLPANjSQLwLenoUkaJ8Co63ZCVjrFMBPTtXV5Bj4NEG",
  "key19": "3s3mwmnw9qvzDkTgx7z2Ac28nun96E4Nufp8E3CAdA6C5yLnFGgh2Buumo6A5ibucNuuweTjfFMSxeChiuPcHYNA",
  "key20": "61eQUuUhTY1yR4kqfiS2tpP91mRKVqHUgQfG4Cw5HKm3tYht5j7MY564pieLyZZTVaeZSjiKv6LbeDrw9dt1ozXy",
  "key21": "45kHDX7PxnPV6k1Y6RE8JgzGpnHCknwM71hrjR3hT7cUTDt1dZuqU3QHvb9SCsioo1A1NpeC87QZy7nzt9mTfxSy",
  "key22": "3buhqP8DKcxnVdKjE4xwCeWoPYrK3fwEsvAVUJtLopmNLXkoenfzbfFrtFQSHeJafRKAcqKWGKZLWPo2iJtkjxqo",
  "key23": "4k8wtg1FfAdYDs4SozoQV7KoTHcNHwdkBb1Du2orEm6cWfMED9yxcFQEm3y5Mg7RjZozXVNHXkHSMSjufGAiFU7j",
  "key24": "CDrL5fEuoaXHG9i8L4s9AAEwjFoqmPHvy4HcqrM1F8qG1FVybVmaUoV5xpWPKcSyUXrwG3VHBbMGXdHcnCx7h6x",
  "key25": "4WMzLA6Nu71STrD3CNReEJfiGSRZrFAdWfc5PLK9ZBJX3dUMaNi48Mg4MTLFKh87Zae8KGXRvM2XfnHwCn5noD3X",
  "key26": "5rjLYfEtaa3r2gjjhCk9ndLvpH37chVLUSmsZZxZE9aioCzQCw5yexyLtFmWaF2dTRsgtJ2ShnXY5FQS1J4qCAT6",
  "key27": "2uc148rranSCZrh4nkEcTrCFLJz4d9FkgS1gAc9tFwWg2sEDyyrLicCQG5FqtCB98xm7iWzHbmDHn2HmwiU25wHv",
  "key28": "4eo9V5gJm4NKMJb8e5UEx3bLYmFSwkpr2KCySQ4ecHB5doFCWaUdPdQye7inefVDf4fxkdMKo7mPFGUvE1dvMzMs",
  "key29": "2pGL43DkKafuMnALLAMw3UzYfNXXEcxE9Re2BrVJV2auDu8nJh8Nwhb9MWnWS9kzXjw51os8eZfsq45oq14g7sRj",
  "key30": "3xyaBBnMmTCCZQ9Qf4XZsPu9XrAJCrzhb8rebD2VuD95yaNVHBu94uSqTJCFrfK5yCzFH4i2j3s38TEEeFrky8F3",
  "key31": "5kjfdLfo2qirsYioKmu9nSe3cP1gjUqwxjVc1mDeZFBztKViu8ek78agzghfpt7yAy8WSa7yRyzyfNKMcXg9K1Mq",
  "key32": "2aKw4B4h2cJoj9SQvCYB6qkg3RmhtbFkZ6bdw9daCU9ChxWjZpscqFH5DVqFJwarMtCQteyxx2zBBKTUY8MJAHCh",
  "key33": "48oBzPxR55JDSoJBXgvcptsrQuAnU3F4NiZBMtFbFpPJ5N9D2yTULywXcMoQGDwLvZM8Z4ztW985FvEgMuTi2eK3",
  "key34": "47QXaa3mhirtuLxS4S3rTVsxNsZWGXDezroQHjQPh2SXstn5cMh5jLGtYjfuvbgLbjCiqJwuygc7Yag9pnB31r4C",
  "key35": "3gYwgs5T8YSEi3cVLT2qM3zHMCdUc53UZegJv858PhsGCrbLNUPnptmQA5xWVwjc65vsfA8W8gKiLUbstg3QL9U2",
  "key36": "2EZnBKgSuti7cQogagrnHKrZbh8a7RDjetTBYRiJXJeCiZnBRD7fZCdvE8wHmFZUJPZQvEu1FmfWfExqTBRwGodF",
  "key37": "4hoZjssFJQd5zkmRL6PhLH9seh3YMyPmhv3ofin8Y2iNTKQPYCQuFZCoBa3mFjBeuuV89SEfuNBAZJuU3kCccBGD",
  "key38": "5BLTRPHELEPmPpxSucBX9HB3tcuEDa9WQRRF7YxmQYKa1RzFG89WWkz618yEAj2E2fLfgCPdVGgRtYQBiBc1wwUA",
  "key39": "5w87byC4VFWsEqquTPzehMa52hoaGqFbgNcNpAUKYSQFYXtEkr4AGKkwtWRyCBMmmzSYbstmEfDYsatQobCRZrTA",
  "key40": "5ESu2QtyHdCUX2hPfA5FQjA9JdqT5XaHwucbJov4Mys4dauqG3tJuW2dBVQAiDNwYCX1SZ1iJ6DCb9dRqjBQpf1P",
  "key41": "2rAojvU6hucFFEe66bXQJC9Smo9hNBVzGwRWd1mhPzTw9fzfbdvHk2jfKT4Cv8xsaEc444ayVehVcEoPetUXBEVj",
  "key42": "xNA2VeM1AVhoV8qKsenCUV7qB3rCZCCmio7hfmPSdycnhfFgeawkTDtYY62dACXsBrM8SiZ6J4EYwnF7fYPNnZk",
  "key43": "3XYakTbBf4MJzPb6B5pF3owM226H1GB97aKmgovoLEQ2bTG6Bw4vPzjRg3h8ozfj8m5Evn89pJjqBe3FhVt9zMGU",
  "key44": "4XziKqSTeixkbS9pbxSaoN3UqQyNtfyVNdybnDK7hMeaGmFXU3VGPca5XwWXkqG9qV1oJg3QuvQbv8M4QxoA1k5M",
  "key45": "53LELgSf2Ti2pzUKh43AFaxtAJ7EWqARNjrsZv4862AT6pBshbc8diDtr4n9n2kuTdAVdm7KSC1M9wS4NqtqF8ku",
  "key46": "5bbjPJRbmqCEWQCF86kTwhcru7AuhXWEJVERmVdRcQKesrr16z4J1RRsTap3sQpdNBKrxxgqDXKK8e8BjESBiPeS"
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
