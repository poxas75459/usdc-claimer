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
    "2F2Jsmw7WYkmni2FeFfv63z48LUTXtT68hyJDgtGfxku6GyFviDYk5MyhKeTcS68c1y9B9PfiRK56cajHsvjNZPR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nNDZcSF27PrctypwRWGD3DxRsZ2maT1bNdME9enduPG2pbDhugFwL6K8BAJxm2MzXZE6KBw3Mp3PaDx9Z6m2pbb",
  "key1": "Mdd9MWGUPPY9q1yaNEKtvt8jK8PbDRgFWeqh1GUwECD8K2pHRuTocGhnSWZ4TvzN13KYZWNTEKwvB9JrFHzkzdy",
  "key2": "2iCGickokeu85HMSZkDmCrz58tFeaHH5YQTv9LVjhkRTaDWcHUmGGyx1yxrQuaxa3zyFRYA5rAUwFi4kwYyPVEog",
  "key3": "2qqDrd4LE5HWdrdP4uTrMAWn9ehHjwqzJju85UEPbyxff4nQhbKPaHH9vfHBNWTxVzPFJn1aiEVfQPo4Dg9AFeyr",
  "key4": "314Fb9hkcdD7wZ4vS5FCktTxUSLewaVmKFoYPB6SopeGBfWq4zggAJGDwTYucUYUtRpuZ6xt42Pi7bAHF69rcYTr",
  "key5": "3zKaJA4HYG6GPK89KMS3daV3BZZddo2WTQM39KutWM8qz3crzHKNUFdmzoobsnYswwZ3W9NxEmC1wi9MGzvwMRwD",
  "key6": "2wMFMiCezNS5NXa5cbsBpkQLTyNcsQgqASjt2wXuXMWAsvESpAXSbjK8p32XX1QTVoa6vpr7ig5ARoXQ2BjVT6YG",
  "key7": "3M3LqfCyv5xvrTkrcnbPA5pfEDSJGWXq2HAoLDVCueY9Yg2Hqi9Zv6pDYpDtY5drj2gVHBJjtiAqNQHpBAkezTvh",
  "key8": "5ygmhKvt2vGZjV8iHSDkRK9Pw7hze7yPmdCyFHEKwNBZsMWM8BAYcG5c9UocBbPVDPqwQr5WzmB2yXxNv81ChXRz",
  "key9": "41cSgev4y5M7mDSF3b26Djdm7CTM1FKdsiPVB1KW2dtCppUfLefapH4dyATJFg9MojezEcqeZWTWZSuU5nkNwgT4",
  "key10": "2cT6zKxqVNTxaUCrDUkjznx2F1uDULrap7py6iK7CMgycjCqVXHLihxupRJufC73tNA5z5Lgb7BDrXtZD1r3diNW",
  "key11": "hhTEw3MNznEZ7oAo39WWujGMEfVDYGcvbc1hzAW2MtuKsLcDMMKKstVnCGFoLjm6bpwJSup2fx9MVTHutXxWPta",
  "key12": "4bvJVSG4a7WYSQMVKMctUDJ9NFNP9vxaL2vSwQCj2ZMLTGBYt95E9zCYsM8VBib7sPPEK62tfaycuPwce5AUSLdC",
  "key13": "5NQUiwfGUjBhSYUvoPqoFM4EW5HSTgydXrnTRrV6GBBYB4AWmc95dDypM4iaySHJ6hhsHZtrrkoS3HeAkv9Tyv7Z",
  "key14": "35DTgztdTXwRiW8XNFkTtFsNnb2WjXKkym54JjpFK3RZ2Q2U6VvobMhrjRcUDWakWfvU3akBWKuXZcuFUw5jvZCX",
  "key15": "28qVmiNyGY9apQdbmCkBfu3jWL1ngBtgh121e3tDZijhrDwNJpTyRRhoJUVVtqxg1ww2ZrdMGgAozwJJL4ezELbx",
  "key16": "Dc42pCn1Yp16jHn6xntxxjUNj4W3m4yN7ZSyugVPPVMfwzThXgoTyaBNPm2U7yM5gtHrJj1qD1i7wDnmHgh3dPF",
  "key17": "2FBcTmShPg9foQY8bGJm52rtK64NxSMhYs5SDFBPJyVeCCCxEbrvkohSgJWRsjHCg19Qs4DK1CyDfrQJgLacCXDK",
  "key18": "5bdyL1orzVz53VYxdW9SPu91QT21uFaBNa5sDLx9ZPRGMELDeaMjqB5YNqTZBqnR3oK9Jx3Qzov669jCYwiUNS9o",
  "key19": "5T4eNYbs5tk9DCTfsCa8uND5isCbYh5BTdzyH1DSiE8ahryZ6CWXZm7DU6o9CZ6DtGEwrp8Ya4ozHUPqjWSgVwoN",
  "key20": "5Fh1xuzPvKfQEhi6LRfRtjnboUDSbfwHXiG66VhkwTar7ZPYimawxMavALJ6EnnCcA81aPdXr6WedbCtjgkvEq3P",
  "key21": "3mR7svJgVhicKGT2sPxA979QugHqrTR3PkjtmaqZSZ4X6iKWy7bKETSjVdugoUGtgc1XR8Wx1HcTe1dwGh1nhV9V",
  "key22": "4DJ3Vq1UsD69GE6h5CVMeEMo5rDYUYmJJK9A9L9FApYaSrHh7NVQs6wVC1PGxCV6B5phWsG9oNhsJuthryj1iF9a",
  "key23": "4g2uNR5ZcPaJYeM6xN97oPUrcoCcp4rXgf3LxVTompyUxP19kR2Z7B2nXuvxRbgzTaNbadSPKqEsS1hMG7DqCN9h",
  "key24": "53qXNWz9FzxtFRxRMAp6uLob9qJexzzYLzExGgExz3uuVfzs1HcXD3GFuJej6aUkLkSYTZSbTGTM5WtqrSNHxjNN",
  "key25": "3ravCbFLkLFYsyu2UduoTPofAn94SEu1dSUnpABdVKAqxPPWLHm526deTnupNFmrVtjQuq13aVfwhdL8657u23pq",
  "key26": "4UFmuBu6JNyEQyrwBt6SrabrcwjsNNrUS9i1X5HrXp6B1w5NbdVYUMapDZvbyyUqNfUMsJ5xWLfsU9uZJw5Dkm8X",
  "key27": "4UoX4Jcu1TSkVLFHTsHTvdakKuE8G5VMzuTYLhKmAA3UzQTuYrqBDjtvEqiZyhHE5eVSFzQgpnatGRp1wxmTWiHG",
  "key28": "5ERt4NEoPmbrevHMb6GpkauEUtb5WcMgH3qLwYkFNG2MuAbJGnjB4RqTvMTnpHQM6j67Ney6TUFiFWPzfmsrSedi",
  "key29": "3o7Qd9ZcDPzamapoBNMc3N1kKWAxyW9c3ikS6cpAo9qAAodL4nn3HN1dZRA4H548DY4rVqnJ4saqcDQNpMmku5QH",
  "key30": "2aDLNXVRanTCQEenVggmpfwavVdZu74Rniy2R2nJo5oBhB16NeEkj7ByyVeVTbWFzU1LPEpGGUmNzSGay2KsAD42",
  "key31": "5wbiFpv8AujhhQoWuFkkLxy1HDdJfVnBF3AcrSMW3ddXzU5nMTQR4ZZzsJWPudgQVStWdMArTB2mrUudovuiKt2m",
  "key32": "5zJ2MyL5KYAHv9DJ8fqziZT7nRjhLyAhGtAWuWW2bYmGYxizuFvcjP1qGuZnJHn8iDkHhyVQz7muDMaN8Dep66v8",
  "key33": "5yKy5S6DBoGwciwAuyKeV3ZLNdEx8JTHSpyPvRNdDBnPCgrXs3YqYXnj9V9XLec1VJVKmeR5bg6SpRxKQPmZxBLk",
  "key34": "37x7zVjoM2HrS6xhmPXP18jxDpgdVjL87Uwo2Ef4jkJi2fivcHUnVq1QcaGMjbMgsNouEk7yPcMpjyod1XS7xkXx"
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
