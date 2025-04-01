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
    "4VUWN9rjGuoWikpqdo3QPNND7qgozbhKEzeS9YET2oDCDXeeEm3okc2LFmaLMh7RaZ2UdkV6MazMA7ArqVe8wpCZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yEDD8kq79VPKjiWricTZPZcBeYnHM1M5zjfyCiQrgZ36e4wf96troQmHsZiwkxK6Ak6JriTrR5PdcD44efohFfa",
  "key1": "22249hRgU6yj76KnhuMCxBNAZ314e6KWfDd7CxcMnJMFEjweSMwmb3cHR1zcXtR1fbDq8wb1xTphTZRKYiC9Mk1u",
  "key2": "3yHbd13mD3Yo54tEWY4N1kwdnxzmyCrQ1u8JtyK9NiUkm3P2XVSbsV4q9uNmaZohuUX37dmrovChRbiWq2Wu3uo2",
  "key3": "29fbYtPcr8HaqNVKZjFgy3Uek5mF8wGJ2NvMLc7jGizKwgiBohpuiqDS6AcrmduC9vQsEaZkdHR8BD6D4YDNzr6b",
  "key4": "2Uk5CQx3CVTtA6xfcJ4YCdT71DttNjtPKSL86oJvssSCrfqDd237k2xqYqYSjiBJKySF9Hewy1rD4GAab5ee9puf",
  "key5": "5c2Dh8x9h5zoK8vATuU4GvRpbkNVVJk42pxtajxiGnQit8EibSqQXabxePemp3ZjnTCL84DiG7226cF863KMF8dK",
  "key6": "3dwktr8fXxQSXhb9NeieHfSLAfAwTiV9whCphh3tLkS27RSuQ5ogJBrknkjC5aHP3GNrWtJ3CaZ6miE63TecSddP",
  "key7": "33S8mZiKJ23YudZNJ2sHyuY8tKtqmsGHt9BvMEZzFUtuy86BQc8x8iS1YF6wumZG5dSWBN2upkeEddAkV7EmTnrT",
  "key8": "2N3vm5GbdgMa9PT14zpTGWXgAZVbRsqzeSpoCTqcGB5G8dPoe75hH6srXCRK6Zh7bYcwcAktJteMtJkdv64W5QuQ",
  "key9": "3HHEYixZSXEaJ5UUXTKmWqTJLH688GDNMwyDDRGQxTCBaHRtQNzB1MFYXU55G4mixW1psMUVbtzdMsWQt9G7UcTc",
  "key10": "439nNRbgmZkWc3z4SJrFiMpLT14x7ipsZCcoYkxxP6ftFdtTPRijdwMWuwPoHZN8EYjbmm2hgMN2UTWahHYpcgfM",
  "key11": "5vey3Zy6uZjB9VNba6yBvnnFhT97qFH4kagtEvVLqqMYR2iVz9NS55deEfQstEkXWz8SqCGpv5DdSkuvDGYGA3Gd",
  "key12": "2feF848n5TRDncqznc1DdSH91Dv6BxfQhfYSodEuutTfRpFDGgPQ5QBtbTusyW3qQNi9hW4VAhLivSWn3XZqLP2v",
  "key13": "49PJuBfNSMTREyx7S9Hw2qUHVpyiC1UxCk2UqjxRid3aKtFZjseJPaHC6jviWBedeem8raFnWMwZmCraAvvV61Bw",
  "key14": "2gbacZ8agBf21j9kMvDBf8AB6aBwbobMPyofiNrGNdCv3EsCbbq21SaCFU2WKzc7MFk2f4AqFSoCvTtvv5uCm8SM",
  "key15": "ooQ3Wzk6vLpHRPPEDojQLcDViYCJgquaX3C5wP893HSrpsFieopaquFKaMr3wLHVRG7scKHrZWXBDarwwFzLE6j",
  "key16": "3Nk4D52MrNkxYPXCQQfr7ugBQyTSyCAFWebAt5u3yVs9YrKTfR8NFWmqcsrgdDt9ghprHqfg6cRuF3voTJcYHtdM",
  "key17": "58wWpSdCjp4yXtXC7Qgk9NTuBQvCzUeVGt2uAS1tuMXbLpbbnwWhJN2Mom4metwAKW1HAuF78M4H2yn6GCzaixrU",
  "key18": "41YS4JbkjkhDn7G2SCBf1kjzUo3fYKSLPX9d7bJ58bE8QTB627tXX4PDmbU3qtBWsvHcAZEz8zKDfXsMXjoLU8XP",
  "key19": "tETyY5p1KzpQY6uZsCJ6q9PAv55xjcWxAb7QK6FMJQhCTJugkJdWcR44MHTTmWU6ZBsGjo4EqJqwN1rcz8euSBW",
  "key20": "2j9GT7mLP4vQen2qtTvdewPq8aj8APowhn5Pdmd83YpZt1X1oA7ovdBbMYiZBZ2jB6sXHBLyk4r9kRYTSpPvmoju",
  "key21": "3Qn1aWjYxayFNWXRXek69XoxtoXj23QMATF6brjhqkoSHWv7DA8CwKvaTY4C9PRva19sFYPFdY7nrRi5bxvEPXnT",
  "key22": "2AEZvfDGanHViNAv5MErLgadBu9n9yW94GmruLT9fvLN4KugiWNCYPgBXfPMqS595txFU7XZ5AvB4d82Ha9nY4rr",
  "key23": "3DF4PiwEueyoMziP37ynBkd87a5f2j4yf99MpgZPRL2Nt2BQHpjjE7BPtDXdbvjJqeyiQmcuYbTyLBpxtMd4je2N",
  "key24": "5ByVMPVBvgyEv6UKg8HjGQEMKZFXm6i3KxSejzUd6FzoBUfhMjEF9shuGa3vgohvzQ2GyijcFuyJ3iAWYDANxYFv",
  "key25": "t4pCGNobzsF69GMBmrxyZdiVoJLxS7g6He2h7rQbFMmzeJQZ3YkgxFyC3exnH3w74Y8Tvzx5G5Fy9gr33AcjSUe",
  "key26": "3DUVTiYnVsf2RsHuSdM8CxxCH3VK64iTKaJBxFv8fjX95fmFnaeKom5DE4ZK9PeKzWwefTHJQwad3bkWwaHy82J9",
  "key27": "5Rdhu3PdubZ9tsSkadmxsikEcF6xgTMssVvGEqUyXpQUSjN4HVY8vCj7eRWTbRDpjDmAAq9fumynqRUc6NZixCft",
  "key28": "5VEyGMDr7ukE5wtcBZPUrtqHEsbmxt17HtQ4tX1zD2L3rCdnTgF9XLGHvmKwvx5ibgQA137x4VQhngjVkb6x6ssA",
  "key29": "3T9HB96F7QaiBkMJzH88xyZg9UGGXp5pWCvQyRKBMZcmoVdZYLjucuw98jSE24JpSAJUehxSssm3bexV9U7vWD1c",
  "key30": "2njW8kc1PFehVtwezkiKgztjTvniwEQvzYD22hjzWcqzEhcH4ntz1cBhE9K3FTZyxACJs34EscJ41BG3mKxRagYq",
  "key31": "3XUkKT2jn8Kgj1pfUxviYTzPnMwPm4cfttTf8U6qHJApYPWf8STDcLueV8zqJtcvbXpNUFJ6zBgqEYfdvB3mQrR8",
  "key32": "zSaRt9fLfSahoNPCE3NHKHq2jXSANypHo3H7eGJ6aeb2aEaLcxRFWMDrG6u9s89gauRwq1noE9NT6oo1g2md1q7",
  "key33": "ejEmV1jFUXijMzRknGTmvuhGrM5BVCNF7otiMQQNKvUF8Q9uRz4zFzQZjj3xXaceXYBwMnRhaitDLmp6gmWtQ2u",
  "key34": "4aypaVvMoYtPN3Dp9eWfRg847hCK4dSmV3Hv1eiY7ih4dRxw63sa2EymSWUtvZ9xhrgCoV9DiLRMAdTeATq8d5Qv",
  "key35": "21kAHHburVs56C62YqQ3ixDe8r6Bm7MRNdgrJPXH3myha39Wt1vZRpKh2AaEE4bZPgXnnrSpcQfWg2JSAm6qiuZ2",
  "key36": "5DjwtXDU9BpFD6EiodYZMze98GCenx9y1ZZPGGKWK3f3XB5cy4fhUS34FXWqsV8vNedk9si3AYSnk4WiJChGmEaD",
  "key37": "5iNHJJjt8NCEC28swSbm7QdJVKsHrXkkqrSswAJzqYLaH1jpd9FJ8oAsvKSoqikTku1qJyfVAmL2mUssedGLw2AW",
  "key38": "4J9kWWW6QjQqFcc5nAP5MeyitNnPCNnwNBntkv1WWPHZjxZBoda77nNzQbgwRF7jHYnBKAzHBhheQyQ3SN4bXw34",
  "key39": "4JCR9RcswW3cakZ2cf8iWU5RzejABdzhGJtN4X7qY8kdUGQy7ofeFTvCVTbNidrQ5HiiCYPxLicvh9BCqsokTusu",
  "key40": "3fWHYHek1w9H4bhpNRpzZ2L4fEVq42YkYhathSmUUEMZ2x9aYLLtUNXctu9UaZCTiazCWnQSS3v2xnhcs8ZtFuQ3",
  "key41": "63iMGpAqoS2rVp8gMHkatbLZmFwvYxDZRyGryHg7UvfB3vzWS1UwgNNmLQFRiwYbiPVhZKJrUvrgXBkXzCSY4qwN",
  "key42": "DLqtPTB1y4RUxU1aZvLwpPZNeoMH5VRZBCHYogGjqdYXE33p3NvYYMhPqvaSFTFgtzirGrtv4Vx7L1n25azrqpM",
  "key43": "zgheuWy8dD3swrNJ8ZKyeuezVsnD2XTnzxVBJQRVzZQg9ww6wBLYiadkDmhZweoRAi4Q9ssBp2gnUZhvk93LwJz",
  "key44": "RJ56iUzXweZwAJMiSboCuWz6VjDXFvCJkKNHpwAWxQLYwpjpvCRDtA7aZSVwod3Z56h4RVEpickFFRWHZdKy84P"
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
