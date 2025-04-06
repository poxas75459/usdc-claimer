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
    "3tkRBRNqyi412UBCqSi2PbMmMeSA1G9FBzTd4kG81FoUxpTAEDngxaiGd8nGaTJX8Zk1b7tT1fo5CeLVKNs6uboj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QhMiSrXpcmJYUrUGDYBrkzokFfL3ii1NFrZryEPmzb4J4fEFAaBaNaWms8XRaLervPUYXP2sypcp8d4GKW4i1gJ",
  "key1": "4mDB4RXWtf9F33UsXLN1WA7y3fFqVPUfzVDeB3bWY7gu4cyZ5fZY86LfiiyzgjFHFFpvEwjUqZCXw9F7PJ8unogm",
  "key2": "vFUXJkPVR7bFEsMpUSHSJfiBY84tKcaPrBvg1maZ1BGdx7icdoVdfowsTTePLvmviRPqvsDC8pBYEevdCMQJhv3",
  "key3": "4G4NTVCMZE3fXxosUvr4M2fh9y9U5ortdW4wwAgPNrATQyEcEXa62HY2RzzVrzEGEmuixfV1FYxSBrZcvGETreeF",
  "key4": "55hMaCCSPX9EtNmpjtDH7ZBMUskh5mFfh7fwCBoBESJTcevnuvmBUHcFKRZgG1RjTbocx8jpSHVbWhcuttU4jsed",
  "key5": "MQq9pjxvCDVRwKr2oYU6Fm8nwUZroWaiNCgVSJD5Cxz1D8JovmjnkrWv1s19vLWFoHJAeixsehruD9CsXkkhZFw",
  "key6": "3yVL2iod514UjmxBxETdCkEQjDxQbfVzfPEkFoEC7YkQcHz9UBgieNa22VwGq8NtG8WexTamPJ8UUtHvRLcmw5mM",
  "key7": "5WWNcHPUmz59AUHXGTwdrYjUfzHZLgrGwdYZoTBr9ct658a5oeSDxDyNguwxMhuVvGw8oMFqTX6tJ3GqGaquk8DL",
  "key8": "5cNzTAP4xRcY14o9NaW69ESJgpUexMVtX3k7jVjsuUFBsAEfFxj5fNDfEd8gPBPeom9Esw5tM6Gfei49sVFu7fV2",
  "key9": "fq5WfLgXAbcD6JmgsvhKedeaFXAUKgpiM56wagHhHLEdvGW4ehr8dL4BHmsBMK86DbE6danS1GwRYc1muHVYsQR",
  "key10": "ExLZCTEPoPtJj6UdagTMNFLqWwLLA5s4e1ddxxssvk5tRrPiZMNozW13yP5wHLQfCMJECEeTkeHAGZpTYTQgTkQ",
  "key11": "2WXjny8DFLDrVQYK9d3stJdUHJKpGUWsdvjQabehKk7UJeUf48nEPtR2v8hnPMsH6rFx8bUenj1aERKARPXwAS1T",
  "key12": "2dqtFPF2yKuHp2nBRc3xCh5FbDjPtsPkfoExWj7NN9SdiTfkCNBvf6ARQXm7WHjz4qj3HRJzLbnZU8wZiT9NnjXN",
  "key13": "613Nk1daT64koJ2PZ1W4MGpPGZRktGCHd1hUY6tbho1fGs654Cfn1NNdHQ16TFEtqhpgV3fF3A5WJBeEpqmDVDKf",
  "key14": "PDkHYf5jFZdKFfts2HUwiJqVJk8chgUMVQKKER45GmoSQcPG8dTqARQWFcgUn6rkBcHJtg72tRswFfbPFHGMfUR",
  "key15": "5iQRreNTC2kShE8LyikU6id6bvjYTZwfQXsXVajPz9Q5pe56CtMfVtDuy6g9i6ivYxC2KdaA2P4a8S7anThHSTtK",
  "key16": "626CNFUqLghHuB63NrMaFdEM1NNT79CRjbzwEU5rU4R4S7XWSANgiePE22QjA6iYHwxdnjCJq4gXSzY8GLMsQ28J",
  "key17": "3ASn2FKfQ5TB9y8dthaVAeTBiHjmJdijupzMrRNASiVNZFQxbeewNZrsVDb1oFCAbjdgvJ9H7bXnwZmHuSmi4o1V",
  "key18": "5fkfYeNdC9ZoyFEJ9bV8iiRUeTA6vKWnqw9EPBnHMNh9ZQvezeoV7vnTdTcQ9rGmzGSUoqxhdVQA3yjQNYDdNE1R",
  "key19": "4ULzwGadjajHP4taq9hWhawEeXn8aKzXjSADyeoSkWNHaf6pDTWSZAXR2EWXD1PfYw6iACU1k27GCU3h4TfgBWtj",
  "key20": "2UcZnm62Mm3rTs8FKEhD1egJ4mTxmhfwuqeVsCZbTJ1AR9cEDy4BAiS54cHsoMBq9QXiF41CuE9es9wQibQdXVUY",
  "key21": "3gD41J6HpJjWYCwaotwsn3RbUYWJJQnhihhhvanaaZUHxqNqN59HWRgRa8FpEY4r4zT7LJZu7rpeAtzpMrf5m5Vn",
  "key22": "2z8VMmnJSoRxPq1sMLd5h99raMKTE728tY3MGQkk1558sNtJLfwsAuBFYnyHnG6kiuJVSzMkzK7S1ffQWH6jgVh4",
  "key23": "2gxdSpwMFp6qJ6BVWYXWwpjyPM4d5dwrGC4hMwk7reS44tr5nf7dDyYtRZDYw5WaJeFWxqqxaqENMLQ9JedVV5SX",
  "key24": "DSAC9JKWpySzAyQTEkXu9HnHxMngBWuuaCYgKgXXJqnS7Da99naP6Y4Y8qSYq56AwXrnMGXWuquCMRFLFULEYij",
  "key25": "3JXdp8uKRapdBsCmgc8g9M35Ndnsxm4pEN5qsXpBZQRvvLD6wFFcrBQLwUv7dXXJjqc8fGRimxoxGNGKVaFRcNBt",
  "key26": "TUSkmtvraDcQWkyLbUZEENAAzPGCnzkRWuEyawYcKWAFqcP5geBN1MjDjMLcBjBERiy8ER2sJkobi48eHY1pueR",
  "key27": "C3qDAFikyKS6BZo8mKYu5JmZtw75ajheJtRz9xFYr2Fdyb8vmSPaBhvzLBw3myAGFyzyx8dxyk7cda7e43ozwop",
  "key28": "2PoqdMPvxZDjjo6XKyz1wMBcaduG3njBpkEtefxDgRzm2sKJFo2oHgHUFgCDt9aAc6mHC8Bzm2LnQ8sPdiER9QD7",
  "key29": "3XJo7fwcxqAgmpHneeYNzFJd21p5vV3ZRKgAw51B74SjwCrUH4czwoSxsLjwSmL4quFP6Po9PygCEQr1yMHEWyvy",
  "key30": "38wWikVSMYvbioma44dBeneyMtR35PGhxQtgwvTLtLzeVqbnfYYHWPU5QzpD8qnhNeDCWwF8LBqGC3hm9YeNx1kY",
  "key31": "3vmbwZUxv8A2jnxbwvFw1TEN82NXwSTdpakFFornhLx29T2TCYW7R24gTtmRfbAojfjwy1zLTnsDV3K72h8dULm7",
  "key32": "5REWejyCSBCsFGEKK4k92xirRyXNHuBJcbpEaUJTzpKBgdsSwNYCrLSVBHmgUwoGWLFaFNwbGu1z2riZtMyLcvvE",
  "key33": "Zhk41VFz6MajkmdXTif4GEMrtUJRtJQSbLfgptVsH4MKHJzMW3VSGS8ScHULZMYJuuMtApmWGxwmnSHjTBsfxN8",
  "key34": "59obaLqMZ8hMN19toHanqFgM38sj5EiWHkMKFcDX3QV4vWkG33UAyAH543JvsfFFW8fUMqzYtmkEqZyYoaFWJ85B",
  "key35": "66VTLMg76P7g1tEVQhL41B8QdUBhDa3K7GuwiYPe16ZZiibcwwAbZdUUXuB549uLVt2J1vASWozFGDNw8fp8UA1X",
  "key36": "26epJkZrdKqA5CgCtKHtq5HyqqrfdxCyNRDhuwBfkWSCk3bCWmtSNpzif6z6nEz3VQ4ovLcpbrtDXf4eL6BUH5mS",
  "key37": "PJVRoZZxixuxwie6aBypwx5Z6rKb39ejfLPyojEc7epkEhF43yPoHiNg6iBTBvKHCqcG7764EUWNvh4rfR75LLZ",
  "key38": "2MunJAVBLFpHtvikvUDuzCq13czsbWAtAx9USaRBvUonRarx6R7u2PdaESmp17EKrvVLt4jB9PjaJMRfd9UVY6fz",
  "key39": "2kLdzmXh9MeSK2TsQYGuUJewt8xj2VeSrHkgofhWFzFfVV3hvBibrYB9yfooDbU8cvojBZxiuZLiMZonZFjwMmy9",
  "key40": "qBdHZEfdHWp8eKda4HHaPisEsX7QaVQ3CBNvQwHLX56PXRNPmD42S3SZKkK3Hxq83RhtTq69wpiFD51cHDNpcBn",
  "key41": "2NPP8g2LPzq7hrkzhD9mpXCVCeS7S5A72k7KWXoDGEeg1oZjHdZZXcoFS8i4mkd4aeYpE4zFsPtEduDjc3ipPyZL",
  "key42": "37bognLchorxPPyKH2v9LSeWasvsEY235A4Dst1GuQYXWteZYJ5DiGnchm41sNGaYQeFZJg1uCgYsso1arx2rsbs",
  "key43": "2QJBrATqXsaVfKvJG6r5pG2aUW3JFggGAWMwaMXU4GQM7SN9qwcT5hoBjpcZCKuSA1Usmcot2i3F6NMFnMmRK93d",
  "key44": "24z5CPY95vDT8VnpbuuVj4SpRx7Jpjw1hS17rKvcQKuNya98bhVGr3extfwm1cXnZuEkW9FDwiBgVYparN9DtubH",
  "key45": "2KfMVHonvAzBLPoncQjrQT8bvCsGfpQ836GRZrwYuK2TLKBZTjcPG2oJBG6KjE2MDh9A6NiqaJ4eFw3hYV9xwM4G",
  "key46": "4NgxGDe2uG46R6oXmVTgy1aMxkpWBK4zkJvdbgkFgKULccZXCzMAEsBAtVRsdZ1omAvjGiWRsvPDg4Y89JHjrhiH",
  "key47": "2HBev2U5SmT8ivzxz6j1Rhsm1DFkyyX4abUUPTNW1HezHoSiBzv55sYmsQzr4KgwfBN17xfSGD4fzwwCokB4iTfV"
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
