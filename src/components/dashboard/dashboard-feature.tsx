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
    "4kQWEu9suYfQcegEMdYdRpDuojcemTYdiNo3qKQtq6hRiAc2Ck5DqPX2fxiiFTKSTndDEfCWYXbcqxpfBZHsGffV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Gi8MB9HfbYJUGdX8nFFPB2bTA4bf4Yff3GmRQjNVYBhWXXXkChfzDFVLvDeYVD4GqFJ4SwqJCM7z3pSk7xaug6a",
  "key1": "5CvVDAR3EPgA1c67vRUjmxJqk8ozF89W83wYorrAsa8HLqfxpom1gUnvu9ui5TrZ8Aori2jA7hqjnjyVQhfaDBzY",
  "key2": "2iFjwayQoWjjjEKRR2YTwTKg38WBokFbVZQ3FcqobfvSWbwcZ3G4JbvPmMG1xYvX4WSPHRHvGMD7LeUSqdasEG1D",
  "key3": "4D31LzHD2eeSJ7SAeACMsMmvN3v7DM7jv8KTxuCgdXBTZb2QiF7wcYUEGaE5f3ZFcMRkAaXiu78SjCnj7dc1ww31",
  "key4": "4Jjt4HYyRzG3qjwoSExqaUqKzj4jCaSLC8owPSbLKpAmJGGeD2k8qLeAcqashf3tk7ohFGL1hK6UCBfY68mspkry",
  "key5": "zXR8BwSEk3HFDd3pNGZAT5Qk8imT6fFbVvyydrCb6wQVR7DLu1neHbxgFyUpQ1MR5cMpvTnaWgZMjK4hZKCtcG9",
  "key6": "5bc8RvJLQ4Lj4GEQv5JZiBmHJj4w3vJijVXeVjxLQYQRNNRVWFokec6bKfBfreHiycXviY1HHDP8cxL7YgCkLzwn",
  "key7": "63yjfRKiQDHW5g6Sba62b73fVdrK4BjqiG82EqefPpnrbMiX2r3i6ggD5Rtf1DUAPtPSav2qJGvMFX6kKHJzbppT",
  "key8": "5KeTHmLL3ATDrEfdrtUNRWADdKEuakEq2xefUs7HtPRQZ96AFb5LnZztYe5nWuWzRbkrxWZbmXhHAqZDK6ajGsfa",
  "key9": "5GdujpdMP4SYt1ZmQfggrpXn8P3z7rWNpRccAS3rZcgAYrXHRXXCYFyxynRzXdBzwLknrTMR28NxVNv5Ngow2pjt",
  "key10": "5h8c9mFqhNKMmKPdmLTPsB59LToqdMjyNhPZERbpDwPXKXe5hXxo8ptoZpS5jZZcjkyZz4qtyCtgpRRHT2TpBBWL",
  "key11": "ZjDw1Qje5HwXKbrF8p9s66pLJztrnj42LubmiRRw7YEbQADyyosu7Geos6RNPSEXv6Lijs5dD72hWJuggQJ73r6",
  "key12": "3mZV1ZfieiTBaVJAgp8NEJAayoC9eyQc64pxssT5hCPaoW5aWhAVBxq5rcrgVBvgFRVByxAZXxNGWQQS3cQWX4Un",
  "key13": "WGzgXXXzzEGyKJYdkhCf9nr8Vj6ZXGDie5KaCwVQQjkTRSm6ycnJz8kWJGDn1W9NvWEFVAwT7dGFvh94quQnQ8s",
  "key14": "3FSPgb2ck3tFXnLpjVaG33S2fyRyx8ARLX6vdEXqRSp47oK1Eh9ofbfdcja56FDkuM5sqmqpQW4dBHJNmfVuPrYj",
  "key15": "5XHyjcGmmUTwhsD5mEoz9m35okDogyALJHPcVXubgg9BXK9y8eayqxq2sh4akPNuoLGFx1Jt6QNuCQwgwnD3bSi",
  "key16": "5RkPLNUyieYfZ6mFzjjZ3qgCXeTBDdagWQM5rbRYPbFjBhNsWZfrRBn6XC4Rbi4CXQkKmxYvuvaadHJK2kU6wSKr",
  "key17": "5SWn9sDDphyhC2w8s37xwegZB7cdXyxSQNte91BAWPPNqhUPQGyK3drFjMV6WQwVd79WFx4JsmHjdRh31b5PhYrW",
  "key18": "4NN4HHmpuB1EgEtz7PoS6Sek4TvXqxYsyA3tBihNjRkcf18WsCHLgaFGkAXH8iwE8ymLJaAsEsb91QmUbf42v7Jx",
  "key19": "3RVvkwBs3GXFzksyuAXwR39sDhZaA4RN9rBRHCj6cZcUb1NkcPcsikM7aRBhWmq4uueGobyNQZjqi3VpgUo7diCq",
  "key20": "vv3sPoFPv3En1os5vrW14U6P39Riu8kbaUrkZVLGW5Uz8q6MgsLgRQWYgKzrAET6JBaCKWY1jG1kC1v7KJy9QBy",
  "key21": "xVcFMJU8QX3htAWhdUGzdN76atBQNfHSMvLVZq75A9wQrYi89LEQdieSVr7UQvbCawAyCQk2UTx53ziqmpD79cZ",
  "key22": "28MxVK3dYDHgfADVtDEfffyDHnwCBsxiYbsRtZiNg9xE4A1rKwUttSWtaL7vYcMkctJ2hbsFRRSZ8D34HqbSxff5",
  "key23": "54apeFsqx1mVrGbefkEQrdDoE5mTp7M9fqyTrNj7BPnH6GGVS7nxHnZdfPRJGhGwKris4P49upMi86y6nCt24KVd",
  "key24": "3HbLGRd324QFzREduYuUf5kLs1x4cLabEmfPm7rFRB39s8RwXEuj7fGwaadmU1SDUQdXpJ5JrYKJ2FPg5vr23Ubw",
  "key25": "WoydBxEAoV2r4poUxh8kLduzoQn9DeuZA1rv7bfJPT4UCis49VUzDsCDLSPFoowJi7NafgaUoMXL9RAHa4KSABW",
  "key26": "5xFsjcZyFaSoxUdeUi5F3qrCBH9J9xgvDEQHVDjERDajAU5V1LD9Pcky8gd1ahHGRHApmsqAXndivqWWAEYfhR17",
  "key27": "52SWQ599Ax3VfjSYwkVyDwCR8dVDXc14aLeLeikGXrt8d83hX4bGY3xAaegoMjt9XRKMWgi5nV7jdmhrSKcZKyxW",
  "key28": "A66rTvjHwV3bRZ6jc8Z79oLR8LNQd2LXEsMsRM9WF1TawyZCsFpRRMkWf2SU37RdH3psrwE7jXUzZULjcaFKD3C",
  "key29": "4DdfFXy1x9GDnyyud7ddsJE2mtE1KSDhdnRF5Uu9Htq3GXC46MJLDvczRFdVkPzm5u8N6zStVH6NTeQZ26bD1Gqn",
  "key30": "ERMSPTJRnToq4gYAUh9qDxPusPM3RgnWu7WUMBKQ82mUW7SB4RmE7Fs8roZJjnBeg7sYczC8DpzsEu4iKp5HFYW",
  "key31": "5cHJKvjJUCq2KmNhEjWebA3v85n6kh1AAP9FSoTAwADhYeJ4JHx1QnUsbyLjm2MjjHWs8bJTyzAwBLDFsCs1PNL",
  "key32": "3FZbvTPJzXXKhMhzVQWUfSL8Fn4Arp7jfdDpavQ5ZMyhcTdztkM5sfhSwxWUprJX4sXMwSV77D14b1ARAb25hNPh",
  "key33": "5Dnjd9USMn6oGUXzBGu5wMNABiBs67vhCJQeXYdHQBS5JyGUeqKC72uGMAGJyhSdg5p4xDryVcibApZG6xmJvNxj",
  "key34": "yYrQ5myx5HtUJW8mRNafKg14cAsk6a7tkVcSGmFT3RLz85dxpiJ1JC7Vgzmp233XfBRASLavYy7SQEA2oCTkvD4",
  "key35": "5ZCALRDSqnRySpiuRAz6LxjwnPFF5Xv7RHkssE6VADTx76Rgf8rXD1bT6PpZguSymbfwWtas6A9PdVDuNVM3XFRz",
  "key36": "21ES3PbCVrc3jmPBSQKxJeHnUXUZBLAbHBapdDuH8eDR2wCDj2eiPYPX3Kd5pmTrpcT9DXCeBrvWh1suczjwBGpW",
  "key37": "5jL5t2LdLNYXcv6ny4tHBLsLuFAoPc72neMSgHWZuxHK5Ho2zAxQsbpPNTNHpDXicacTbeHU4pNSLpwysr5WnqJg",
  "key38": "n6c9iQEhpgDCAF9SGvdJADxNqL33xZbjoZCHjHyb6wkqNv5oq4cVUteeruP83fpXcYDauAqEE5xsLwjRbzT9cCQ",
  "key39": "41te38cuba9w3MEhemhenupmv3g9HnryHVkxcJJctm4ngBKi9wCJkXTZFczY1h2DiWfPgjzF7EoyBbS5atkRU2Jk",
  "key40": "2wcaWGxbP8867cr2issBFRLgfX26BpYoMZo1X5n9YNHP3RTAqWFWBPP2W7x3nSVZRgJwSSjxMH1meeDN6VN9xEx4",
  "key41": "4oJphSqF1h5tZT3gFXo8xbQTRTg9DtsCqyRgRkkNbYsV69bdd77432f3nGEATkbRYCFZeU6Zic9cv3SMYjaq4Lhw"
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
