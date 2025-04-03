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
    "YZqzcjN5sxn5kJyaJ8XXAe3wycM215T1xV9BwES1th7kDqk5Hsn8nHUxFedBudDkzuEdQkpcSWiAi6rxfMSV8Mf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42p9Ja8VPVj4gFqa2auj537ZdH3D2DbQmYLd9YYq8gz3BhiKDBWUpYTTa3qvGDE7Mw8W9UXnG5aiJu3m2fs4R7wG",
  "key1": "56xC8GQ8e4nYTEY6HApLPjSJJHVVJvCcjQA42c43AAE22Cd9QvvR6kzL8QY5v8YWg4m5oR4KgK4jwTFETgx3LMZs",
  "key2": "4CNTmAAehqboZeFCgpAKBouSoKWfRj8phkyqBFHepcyRnxdmhKg437XVKcoFUC5L6shBKjgjJ1grXAs8sT6iAEFr",
  "key3": "9koBbSkYK3HtPYtwGhnVKJ4BjovAFrp1Bd4EQjM7ARHQc7bGrxfzgH1TV1xwqqq2ypX187vGRBZe5oYjGLkGtee",
  "key4": "3Xw9MUNr7E3cmVMThBWtYj5x4NsKMiKvoH7eyK2Tpkf4BtxKhPLdW2rf1aNw6AQzTA2qmHcfNP4TrAh2aRuiGHhu",
  "key5": "4MoMLDGc6qQb9w2kV8Vi3hLj2YvzVDeqHqzrUxEiaz2WT2ZNTzWvroatFAZoSkR6Afuc87jkpHXcRS561BDdjJTh",
  "key6": "5vSJjputevSqsRXyD9F3C6bWimL6dcnrq2JZHtXd2i4VRtYQMu8WwuM34VQ6kZHWNoU6NQiAyzSpsk31eQTEwPt9",
  "key7": "4nNimosSx8vHxRftiMzvLqDga4fZNbA8mwLSCm7VQeWaLUf86RbdRBx7RqHx2hs5pEw8hs3kUhT23KYkiqkD1x6C",
  "key8": "8YTTsBJ3jGH8GKysvsvhfmT8G1XvfvvRW7BiQ5jAQs6S8Fm81V9dbMuccPVHcx857R4q18cvgDwdWoAwVPSe2N9",
  "key9": "45Pwuy6c8SoSXsWqJGkAXhxHELgdGDiiDXECmqJjUqF6VSbkyitTb1WQuirB92KTfaLSmqtpHf5RvWeLwhmN6QL",
  "key10": "4P6ziY4nBBSEAQmAT5gV5VM9L9ievyQeDjE13ELW4isLKvgmXTNF998j75tb2t1ropZ5xD653PCqEgKwJGhdR3xE",
  "key11": "5HenducrHyDQrcc34GofjqWVVURpjtxwDLq6gqFA25nS3KmeSYDt3xQ4AMfPyhzSntrjjBBiRReNb8SdBX9SdiVB",
  "key12": "66DJFWW4kmyt4Ex4L1cXpbaaGBtWaf29hJxC9oKntEnMgdLSEw1WnZ8ucB2G6NT3LnmYCVM4M6jEPWViqskrecqt",
  "key13": "3ctqwFyXWyWQBB4R8gBrv2WWVpyV3HyGWdvTrujGEXKZbxbPc6RHWhvbGhzwDMgCe39TbGgdcJRv1notJ3UMHbgB",
  "key14": "T6DXw9G95RQ5Vm7GwhC3XwvJYuYSNraUaydMQ5GqUGvmUuAcFKh5EQaQSGttR7Lnqg5b5SwiG5aZKqGLymDntzi",
  "key15": "2SKnnrWS6geGyyXpEoZ1NvWuAQNHjuRMwTAiZrnbcPs1kAK6xF7kqDBbp1sqYEuK5vCisB2RiC8yPtNTo6qKmbzi",
  "key16": "3czCNxFAob6dwnKdJhw2kChoS7Gd1tDaw6wnHJvbPdv87r5qodkCL3YHL7e6NoxxMnRbR4kHgDfLYWbH4Kz2AsT9",
  "key17": "3tPes8UtJW5gQZGuGTHDicgFFQPowd1qi7MvHVqy4ircNKVebZxLXob4jQFfk5Mf8acRyLwf4adkepZVwxH81NpU",
  "key18": "2pnyjqgVYyJTo9wUEbmaPr19hXZHuMzVXTZM8oaGv42C4x71G1rn1GbddNdDDJyppUDkFPYKC76xKdVW7fVU3vda",
  "key19": "5qJaRiBQXmC9kr1prgwqZndSC1tnXTMJ6pSS6rfchmLzors2a3u5Y3LpSP1Fq3LBga9acKp5SjrzCjf39ZBvzgAC",
  "key20": "2ZUEBF6Jm3hP5TyGd2zNQz95Jzb4GBJnZ6UQQBogmaosCsdAZPc1i9rMqFWWqnTUZGmU9FacR9daJygbzTDpcfP3",
  "key21": "5UMzJ3dDZmTRY15iJZPK5nGPYFMgqjyPNi9bbohwjnuh1yhg3y9xSWbZmAaVGBcvC2HBmuGSpJsTsow3pWcNuiPd",
  "key22": "3FuKpimPdmJf5wrWMHSBnxkyddRqHNenQ7PcWkcE3Gw6G3dkwqq5aZ1yyCnfeXNdbP8XrH3MtoxGhAX9Rnd2zYKM",
  "key23": "2XtUW5jQ7W9fP8vCWQN4hhV3FSvAN6CuvFuJ97zq5ETs44p81d7rr8x5N88vRQJKJ4V4U4oR3FVxDdnHHUmdT6jy",
  "key24": "2y4DfavxnyCRVmFKadMVJx6vpgvg7WPABP7Sq8sriNRERta2vmXU1JRRK9eqQ1D6pKpLooFqTpMDNRV4Ed9KtC69",
  "key25": "LqjSb1EUAu8Cd6UcvUSH88tbkdEzCEKp9pyYrrS52NbEsp6fxxq9TWYbCYd53M9M7yeKeNwLXQxwbVfRWYVVuHk",
  "key26": "4sUgdb6oVEsmpm8Rz8obmZGSUgWxA11dXWNWAi9H5FM5rPQtcFFWRwThfC1EXRsyr4LEM7kNUZDuVsdKPHwBRWXW",
  "key27": "5L1DF9tq4rebCtHzhjnxGPLmMT5xCkfwqbkZg8jC6MW5JfhysZqMfDWjVjmrL5mqMFEj42fi4jmkmY6Wq2az7G3c",
  "key28": "2ydyYhWDmKMyB7gZXHk19TrYdLwADK5BQWW49Eu3Ds4ccfR8BxWNVp1EHNGQm1mpd5tzpZXCKMCGTo5VfQm9iJW7",
  "key29": "3nXpbZT9fWP5Lw2G3jRFAKK2UzfaFZpMRaUwah7ZHKxd75gYeeghZpyBRywgZuzmmaNa2p3kqxDjrYCUXcaj5Trn",
  "key30": "5N81UepDSbLEAf3KopC3tZuNLXR1SbhPcNHv9mc44LGTpgrvUSZ6kYrkqke5X1puogL5s79hT2rgLuuD6G11rDoF",
  "key31": "2wMsa3WAJSea821gfVyXSPUGQrwPZy2ZDG6JWzy1gQAHRy4LHhN9Q9gJZzRgbwGBEjMsDrgRm5L23CR1sg2gabUu",
  "key32": "4HMn7meH4fKK3TM37UkB7iKJxc3cZ1Uc9NANkiEwJUxAvwsmmwDJvBjbiLGBTAUhQUfR5CFFkkbxJL88HCtCciao",
  "key33": "2Am4zNi9Wm1fwsEqVoWNvBCVrJtvYGiREAshNDbYL6G5PUm5BSKSRASQBq49RcAALivXt4N3RtqC3kfQnEfr6WD8",
  "key34": "3U2EReFnWCUchD3VR9baejShcFUx1e6gmerxAWC49n7vvtMyLkswdZApqVLMebk14s8HHGfQeWYrp6UcrfDognet",
  "key35": "FXg3dQWB3cJskLkQNB9Mqa9xoS2DJ1u8kSwxjhZSFnfniohM5F5P7K3RogpfNbuY7B89U5hffFo13RfZ9QPcwsp",
  "key36": "3Xq3wLstJ1w1g9FGR18gn8VhCo1g2F8gHggADWhvR4RkgkiQ6XHhfeeWtNt5cY8z9yDRz7dxxDN1hovMYb6aGMkD",
  "key37": "2MjS1furcZYyNg6BYpkg6u1nh2oVNCHi7Dqgs6XQa8eaM7FPhPfJ91A7hLkeyMQZCbCiJKdc9GCQHJGCNXthz4FG",
  "key38": "2m3sXWAx1U9iC813jWGPBPe9qgQNrXgFgAVEoi25t7tsP5NRmdK8J47yBL9THtaFTrDSSYE69tYwXh1ssgn5UDFq",
  "key39": "z49zhoZSqno8mdce6W7LgXgcSSvtmEfi46ubX3pB5X6q2SpCWPRdfKokwxFDrQBFbZuCNpVBFYQUkrpPio1j3EG",
  "key40": "5Lk3yCTScsxx12tEAKcpjTEjjs2YtVA8V4zkxVPbH47JzGf817q8qKsPbrcLqYZ1Y9HvmGoRVyGNpphvsZLkQH5r",
  "key41": "KwDQsuzataLVycxF8UKM42ef1XKhtLtNAKVgwFK9Fwq6stw6QUxfygRQbP2PNK9Lfg56pZ2WQEkpjUeJwGLDuH1",
  "key42": "3UXMeZXqCGAjDzhsx1bcmKZVvqrLXWWAU7o8vfqDVoihDdzDuU61zPRXbj1ye87o9HBnbKH2dCdY2egRustKzEZX",
  "key43": "93D49uQceHpfXSwCpPsKH2PSgXVumhuaNQPfTfXu614je2KVgbqCSUsfeoaenYYdT8R1Kw3Zo1iaJdUXdXaaQbB",
  "key44": "4U25NTmPCPGUBG1MSNfHs1zy2QSQFX4PygBigdVajzrrBrvWezzaHgbhFQhePEdS52mjSxUYir5YkiQJBdpSDGpJ"
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
