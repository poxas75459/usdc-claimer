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
    "3EMQ5paxn1mNo1tJ3xnX73VBghWuQ8hXZjE75LpPQ7e9eAUZJZhThK5Sy64meRYqEoivDYsBUy3j2ND2NmVLjZmD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QgCKTnWYXGUP9whcgGGB3iHJT5hshyKJqEywKr8o3hMKjjhZmci1qRA39VNZQV4eiFs1nkC3mVsyxGyfAYidGjx",
  "key1": "SHxh9P6huDNp2WKNvPbjn6swYouGWV81GHLFipFxyoVLRLCZEpLxAZDXnoVCtpqUuph7SyGmTFPFS5euojSuTNV",
  "key2": "36s9qtVuH6zmA8UTcMqyiXJvjsjVQibVdrAKx9ytSKbZJGfjbZ8cisXJEEpJDsPiCs5oGWqCioreBTViMVLtJyjf",
  "key3": "3L3dgozCLUr9bcHi3BPpWaFiS3MmX6q8tLwDVjLmimob4emx92595nu1kL6PCJv2LpZWCVNcVthEUtjEbZSXc8ZJ",
  "key4": "NthrpzwPDd8sVuPcxU393GRm1EieVVKxpYDxhc6o5f1txZP3g4g5uHN3L8uUAe9E6YbMUWXUKCfDynYhzCwPZ6H",
  "key5": "3h6oNSo9bs5hR3t6nEJgZg69LJKuvKpGi6XrNnGD4kMGZ9TMRNPNanVnB7HZbhSMDyDvXENtuzLi3ssU1G84UXtu",
  "key6": "46nPrByVFGzXTYtYEGds43PsjoTQZLy7bk52FkQKuWq58FsT3eeTwHearQYhtYUJdd6ZPQWcR9N86vWykxSYefu4",
  "key7": "5Kqa9GbkkBbvQptCrTSoNwMRP9RdhcdLULTGdD61VRHJ3F8RuNEqVuXWmVB7yddVNZFmWJhGdz6eysUXSSEpNiag",
  "key8": "5685CGppuMRZfQ5vC29mYRWU3RFFoaR65E8obS53E1sA2CeVP7EVa9Aynn8cNtPJR87ZzHtHSGP62Zx6hCDidN83",
  "key9": "5Ja3XpSeMu2yaKGTjgAoMKtZiU5UJ4h5FmQDiiw23wLPjDi5RRPvBN788cFr3bymxahPUFNrLYo7bbu4ENHjiCR7",
  "key10": "37yqfhWSetHyXttwhAPfobiSMA15RrUEppXamK35zNxA2v5mu8BsZVfgXpmoCN895KyN68Yqo12n4eadricJ3FBQ",
  "key11": "2TaHjJZ3gE2qzYjPPNMyiWX8zrvTrxzUFsTMG2C2SCf7YRSLLFRTQ4TKeyYyPT8FNtott3sCGWRFFZL6ps1KK8BR",
  "key12": "61Q9WGpv5dTeut91Rhssd34m7rcaTcfE3XpHiNeeAVUWiFm4TkKXCc6GvF9EPzCiqBwENxorgk4sSJMEFuRTGiMh",
  "key13": "2X3W4PpxfALZu1qZMYPNvmZnqXXUAhsZYrRBepdVJB2qoL8e73WWwmF24o56m1YmmpbuKKEH3pTUBsMSTw8WE1Dh",
  "key14": "2xrNpNk3Qhv5Hpxb4doLpQ9xuk5ajzZdZrKJRQnGGq2EoHNBKXNRxw8FUPTmshuhphh2DuACaR12Pw5wnsLiiPR4",
  "key15": "3tofkMiVZj9Q9LUhxH8VxSrZPgsif2E8f9UB4D7CbgPXZUtCpmU96XuvseKxixwqX5WRGHmSz3VFT4dKcyuZ6rbx",
  "key16": "xuTeACeKqDBYeexoDH6hQcyrQWrGSh4y2fLRD2gd1iu9BetW9PdSsUNvsEBzqVHotm5jrqbDK4ijkm29WMmm5hu",
  "key17": "4E7UV5HNTQxVQe3jzYYn6Kwho1nWfe88TPdsKZxPqxmWPUZ1XDTRkg9uVY2DtxVmQYV2SqpSthQEJVSSRxNmZ4mV",
  "key18": "47tZJ4UUR3hMRUA3Yxcd751S3Jj7zF6DKDQkemPwP99vMsZVwggg6s2F7V1hWMFvbAxsw8AQ1nRWVjSXvNcqEcdP",
  "key19": "5aNiYTDa7VxeMUUKnCH6XRwjkGPKkdaCdkCW8FRGBTf4J9obm5GYUFftfyza3HXyvVCmkoMndzWKPux3jnpAQm2R",
  "key20": "64ZBY4tirLX5ZqgvMrzrx9xJrx6UtH8jjmWRgNMf7BHk3d1USjsLF7gwQVTkYkuLfdMiFBiAtEfm9JcBqFuZabxs",
  "key21": "2nvccCoKHJBhLzr8LaifMiiB2XrGWepPHcbmSJYHTRyVaVieJxaZuZTxYo2iwTNaBMc43hcij12eDVW63tPz6edA",
  "key22": "5162asFjrRkVrjgwBotQ2yXbSXHGwXDGymZ8CWwUKvNKyutWoeFVjSL4YUxxxFcVuLdKM12FHkXasHCmmvLEXMaD",
  "key23": "419sRKQmD2p2mvorVeJwNYCd4hkY7bMC7PowBNExju1vyfk6fJVk9dFXtg6nRYYTkKPwGzKyjbptSnpwnXt1SUr8",
  "key24": "4xtLD1hLwCdr67N4RchW635tzQrvEv7YZyajr2xMEewxAqLcp4GQffagQL8QFrtWrdpXHzuYp4L6f3fsniv3Cd11",
  "key25": "BPdskRRw3xi5ZBwmSC9AG3wYLS7ZXot7qZradKyd3owuUzzaspidbvXEYZWcEHDXsYRdjXwVc9BE7nRXdSfujsu",
  "key26": "c2So7qJ6xzgYsBbWqbzPbLFGrVNyfN4mPsrgD32mcDWCgcBN1U9x16BokLq4qq9Hzzk89BWyzXhJsYDeGWn6LzT",
  "key27": "3Lv7u1oWM6G7E2PWu8UPbUaymLXSDRys4xrRReCweVjHmKQS5kGEcsNW2ezerDRNrGavsZ4BergNoYjB9LAcHk1E",
  "key28": "GJEEdWkjCsbekpx8KvhCLtSk1B8Gop4uUBkFyJMMP1jP8YYiXFvroZ1vVG566wsPvNNnc9CFXD1PmJ9XodygyZi",
  "key29": "iFbp67AT7oCELgSFuz1RWmdRB1rHnhNBNLEuhKPe9ENnQrHv9onHvTjc9M5YbrSg1f5tTWWZUNNzDDio717hevF",
  "key30": "2Wowb74jnXPzKDwFbG4xCzR2cmqbVahdfqm5B5cgPEF2Q6VDj5JXN7BqH69hGkoU71frE5tTBPQhCj4ALQoPh11Z",
  "key31": "2EJpEk7s2exyj8BVrq6vQ5K34ZDuw3z7RVFKt59MgeAKprPAcYAAjRT39YGxTMLVcKzWLFGuRmYFLLa1B6g7kykM",
  "key32": "526nX9KSxHQbUbJW88JXssYouySQvCKQSC3wvub8bbwVvSg28KN5ZJQe127b7eHUeG7Vd9ninkjrCD18eiQ6CeH1",
  "key33": "3RanxbttcKU6SfiqM5DP87erDKY2m2DCJm5RLyjQFaC12bwScfQiGD1KsV9VuEZfYLUwSHr5q9mSD6WL1X4XJUM4",
  "key34": "2sKh5LpEHFHRmCedq97vF4YjAtstTeggTUsyB3DJasRPGHGSG3sTR6jPtnakPYTo2ZetM7VJxKhNKLem3PWPFqQb",
  "key35": "D9UHnvn6AEj8VYwfDrWinDa1cjkixYCib25pYw76ki9yCdFYPWGdUB2GCiTosU1hvDdEG3REzgkizseuML2MwMM",
  "key36": "3Tk62d9NMPo4ZZLnJw33ymLAy9vzRQGFaR1b3jVqMVYLpoVSm94ZjqhaYMz8nvkG6Vw2HjimtjucpT8bSCoMNh8e",
  "key37": "wFtmsetWjSvEJ5RghqB2P3whk4vbnrF7LcbaY1Mkg5fcj6YEMdBUuz4g7uN2zvHH12rA8KS19xQjPRyJpmjXdDU",
  "key38": "2tPg61LcVJQK8YbVQXYTWvxDEqkGVJ3ea4FLCuViUZWihLe6Kudqm7jD5VrcB7SjgX13MC5LRytMYZC1fKaWCE53",
  "key39": "fod2sJxGD7CaJ6L8L8Bi1dweJciS15Njv1J4P6MpzyiqqNMNzCzuEKgYWmEApxJNiAGDfXR4anM7p8XhpeFnnBT",
  "key40": "3Ws6iQz6Wt9v7j7hhnLF3vQ9MAGjMbziw5A6zERQjVb2SwFT6GQyn2q2Kutqn5sn47q3ai1CknWCTuChuvfDWAd",
  "key41": "5yjf2bqYnbh6Uqqs72SXRFT9pLpprkWgHDXkqyBjm62G1dd8V6wSDvbXk2vNZNhSyFbqRQ84C8B7nrMrvJA1uSSp",
  "key42": "JB62W7AoDagYT34Nx1qa6tWvipZefArcUeuoZZhNRfqKPWF8GDFdGY5QW3Jq9HgnpsvkEkD5MrmZ9cQu9SEavBm",
  "key43": "3ra273t1H6L2aaMZdKKoK3vckb7zfeSKfUcgWxhVxcNAmPPV6RZQkd2JhAGXTWmceEgFxWnAtqsMLfnDy7Uqvjsw",
  "key44": "onnArEk3pv4LFHtqjR4dBpu81HuwdrNnQ9movrB5qARwwh7LTKBbccxAxpG2bVtZjDSqebBUYbvxADhQMBjZnLG",
  "key45": "yk2uYWNnX2qUNBS9r3VnKJVvyn1KPAUHhPtgj3obbzWKhT5KiFfzsG4YRFDJs8qiAB81aQ74DpCgBiMVkTG1roy",
  "key46": "2EUkXy2N93pbHTiScNPxkJFBNvMoEDBZrcLcrQJGBggciuwNRnVCgRQqb2QZbmqGMCpPRfojPVTFgqVqTEfC9kVe"
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
