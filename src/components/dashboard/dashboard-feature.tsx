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
    "3Zm24FeRnNK2JxEpQnCBpA2gcGpJ5uTP1k33cJ23LkUYXS2xNL2vrocQmkrZi5wscDi3qn9uzZWPuyxnKdM5ka7m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ki3qQEZZ4ac12mMKNvoqYWPTkRe667TNyDen6fnp2a9cw2UzY38vCv7f6fQESeMzztJ78DL1JYcWNEyschU3L4d",
  "key1": "MASKN25aw9fbtAx85Rbq4DHEAm6Rh7vaBBwPieHaaP4LX3YZXNJcjBbx2UAw3cBwoNKhj4n39bzpGEaFBT4QitL",
  "key2": "3FpFf9hGGCXnGtk93GHX6j7PT8iLbMmHe9SsPLd7B8hMuQNAauByuhvaMwrdGtX9fqxu8SbcquERjoUYRDd98TFA",
  "key3": "2ZazECJuWGLnMz8KxrEcLe5aKJU7z15LKK4ey8vrhXFZqBzvKKxKFupage3HmWK4vSi1gSB3UDLUbbBHoJCgVUEz",
  "key4": "54CGrqNM53PHUskJAMFjJM9YJLn26WMaPto54hud1Av1NyLM34jerhgfFeMroRvUYQnGQqbGjHepfB7gH5rSmnMj",
  "key5": "665DSji21a4PYqv8HfMF7BnRBfxnXu2pUDgcgbLr5c3DrCRtnKUHNx5cVv2mZZQcLMxvHHmHFM6UEdYwAJFEKC3V",
  "key6": "Dbgg6WGPJyvqXsHY28hPdRg8oaj9tSzQVFyjzZ532aZR4H83cTRVEp9TehfT9NYX8KhwTWyW8ri5qnTA5gBsy5V",
  "key7": "2dZt3zrN77EPwnfp82GqiAjckBuan8HQxbM3G2Phdk89cR1AeDHxKbcd9pGgnX8VHMraNV5gdysRzDcf3Gdtq8eJ",
  "key8": "321rAqwPhW9Ba93pJ3Va5oASinbuLNdVXXKHVX1995Ax6vNaEVReszfLLgV3xpqoMEhTfSDGLpEYmDsakWx8KbmW",
  "key9": "4iSk8KWC1AhtiJi9PaU8ZiSg7QCNHQSs9d6mzWhWFKxcM2MFJgSQze3hWuP2jdSmC8xnDd7UAgvq6EUftuttWTdS",
  "key10": "26QG76YHbFVUsK5caKQsWKkxFsPaSHFAxtfgTJPLJpTkSCZHmu8BzvG5HcqJDg8g6CGMFZAzeUZ2nhs73Carh56W",
  "key11": "3phn9zcPUes4x2VMUmofCEF3t1bqSRquMwdwVeeCuWxKncvvEMacUaAv5wCaMH8tV2zJr7sK3FDQnhRoZ7TTXGtp",
  "key12": "3mSfNNzUY8UBi8WM7ivNuDxKwoYWX91DaxU5CuhYdbnDBUygm3NZqyT9f7TghnRSx38qxdXtgq9dBcUQ3dHxG9rN",
  "key13": "2usFzrVLGMMv82kvozwahZpUoUjVAERM8NmbCntpo4T3yrKrma8zWoPKAjzpGtSYkXhyUwvwwrpGj11QW2V886Hy",
  "key14": "WkvaFP7SebhK5B3Un8RYTFXQobs1ipXbt9mP3F9h42xAzoqEaSSeUNesXXGfapA6b3WFqtttJFhRHFVYvK66rLW",
  "key15": "3DLhmj2DZBm85GA8UqmFGjxowDXRnTUDn69wBCezBNWwoRa99iSAUvhBF7wS1pV9ZxnmKfYEpHMF4T3981WHFC75",
  "key16": "3oShHPVYYCrf5MGnPkyBn5PFj4tEuXUSN1FXXhWaaZajrUo5zh8BGfGhSSh5RqBs3xU5h5WWwjkzGYZ42qK4No6w",
  "key17": "eP9oHTXjaqFZHjuaZQsHHqz99td4YKYRjh3vCXx53P43fziRgoFgrtXKYAWh3T2pZLC8ZpMDZe68AesNULFshP5",
  "key18": "33fDkLCNtp81kHqbNjtNgb7n2DPS6uCiApf3ANEdFXvM8g2JuTCY8Qp3u83jzYefQnyTPbab8TCnJis3BcamnLZS",
  "key19": "3opaSAXia41PoGdg986J39NkxaERhL7QUJrVC7Vg4DCMHScqy9zj55dAaDm8BBDe5GWS1Jp7iMDBmvmbWSgDMFBj",
  "key20": "h7E3HqUphM1C7uEBRYVCDZ32SBF8y9JPDPYiFg458eYNtbzXctgCdDbek7rttiiDPDCbCLvskVGjo1BDvzfakHd",
  "key21": "4qaMU9K2eAxahz5TX6X6vH9BPaX6jgShfHExXEihqQDEgsGPsL2rPGfNeudyogEtyiXTTqTq5phUURzwrNvP4BnX",
  "key22": "66d6m67zMgtoP9N4z8LD1PCesWGVYKs1UNMgBqKQZynWRcRyBBh2gW8CC4KQyhqy1QEivDC7NSL5NzBDCqTCJ5RN",
  "key23": "3mnJj2rDM3UPns3UaaNrymoxBLs2aCHK1AP9vTRqGyR7qbmntyLDU86TfAxXqwwsCkqm6t3fhx3P98QmQodxPHU7",
  "key24": "KbWm4q8PnvrXicGTeBnrB5dzLzHT33E7S7Wy9etTLbCNJNtTjpLKW1XbdvmqzMe6xioKPofeWAQURRUV9oEhaDP",
  "key25": "5bKsBu3UbgZHkewXhZh3QFxSHfUaRRexCFxfgymkvqh1iYYj3MwC5sVts5dKxMNK7dTy868ABmzW1MhfkvMhgg4C",
  "key26": "3BDc4jgtvpHMX9iKJesrwYqCmCSvUgLa8QJhXQ7EEUMW2PkHaekMGwu3QkBbGBeAQ3xQMsFNf2Ta6W4UpLyc6KQT",
  "key27": "4Pb9v4zVTGhjpRqwSrFMqnqYfMm1pKijU4cBvKSueoscBFCaKQ7Fe7UkHTFb8GdCHzWzwWimRsy2MzahoaVjVRbZ",
  "key28": "hUnKYuogWx8kQyyY2zFGCap5AjApQyzYaTDiCamn1z488RFCwm4uh69YEQA1Bc2hKvfto6qHZ8zuRcTn9VQUP1v",
  "key29": "7ngetRUu5pAKqwgyYrkMVaXbeZQVVBEiMSvKTFGh5WnRdhnKadsHxTcRS5oXRBAaJLTy2wD3dfudXtSLjQndFgL",
  "key30": "4QFvFftMpupteEnFPQY4hu8kkTBHUuDBcsUshK3ePuQYBiEYBzCSUvcsEpNuUd2mKuLJtXzshycnoaSxPXDCi7qD",
  "key31": "3zcDNr5wV4WgyzhaxrPa1xVFpLBCbjW19Wr2TJRm6TPdBxFLoP4aArgbCyBU2kTBdsoUYBS2vMFDwCDESdPsh28o",
  "key32": "5VgUfFumkjeJVXJ8q7yFs6HNzPnWskPnHZwF5gwTrt3ixGkAV98jH3M8dxtxceAf2CesHScMzC9ryn4Rc91HXgFz",
  "key33": "3kVy2KvDgqmbh387D3gPrdCE5bgoRpM6rhTSVZZDspSzt92fUnqGeUbumoZNLWaRqrxsQADJK8AdL8RVGtdM2mzR",
  "key34": "2N4YzQyDgxqK1G3tUUbpFtfscZ5AFNf8E1oEgt2sC5B12uh9c6zVWyG9BSNrMZMe5dgcMLfpGqg82fsnf54xWKCf",
  "key35": "5iLL4bEV3MsxKNciXnzWsrAzUftVfQEDrNN844HJELHHAfGxsAJyad2PUcZHGAdeFvBnf27ZXdWYHWhkFiDLwysX",
  "key36": "2t44pbrvBdJWq9rG9zXg3woE5goqutUuB8ZEc7UeuSgNHVSaM1ot1bGHBKA9uc2svVTZU2ycccaX1K7U5bU2ygd3",
  "key37": "XUD65FJceNPtutuHoX59q4c9388jCmAVi9fXAixFiozu4y4fnVZbd8VihUgotzN9e6WjPL1HRjyfV7ZfZsUToiv",
  "key38": "4TM2saKR7g73p1c5toxQeRSfj5uyGtMBDzwTu7KPvxedXaC82Ht1Z9FCCgMWyVxUSnCj8yF7vFxxYbz6v8b5YBeE",
  "key39": "5kR5mtp9jDR8gzBfnhy1HKnmx55BvduuWPUo8ReESTRUy5ezYdk5xu18vHM2dT11tNEy2zg94Wifp8Kg3hLagxDJ",
  "key40": "3pdQbkkerE6YAyuDMJXGdDEQqR4EvfgShLWW2Pi1Jnx5WAQZk82REFwGWh8qaYmgNFKDM9LY1pe58Rv4FShieSW",
  "key41": "2SX13JF9rSzyRSKVnMHckPueyVKmr2oquWASxDei7bDTedUnj1jmmr7fEPiGbUJ94ZAGRi4DjR2Y5xBtS48LSE6U",
  "key42": "2ssAVajmTQWSvSnBTFsMdPSfPSjZB6SkTxQRCqE177Pswx3BF8akf8vaioprm1C9jicpKDXcBocRFSubUq6mz8Bm",
  "key43": "3P7Txttz89KEeoTdCzKvztd8Jus8SMhA3mJGYuqcf72pH8gQUADuA3f1WrqX1QWLfsJVRgt1wF41nPEvhgkFLZzD",
  "key44": "4vC8dPZN5jR8NGCuXDRrdpJfawMBGxya97vnnAM835XtXL96oQYY3MouUV1ZCcihwVFpJpLCqGsWAA4ABdptZjGD",
  "key45": "2T3ukaZnp4zvV6W4SFUFZ62hxzjJbqHQdJFpwZooZ22dMQE6MC4vET4Ng2mGka8SayrvY2xE1Lis8PTd3VRTxCdm"
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
