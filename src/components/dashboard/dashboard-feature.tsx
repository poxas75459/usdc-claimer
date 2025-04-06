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
    "5mgRv1mFgAXSTdzpeyHFnbmVL3iwXMobp2XMWLURWxhTnb9xguJGKDS8AMwWH5x2zCbBSWFiGdkpMbC8VHsQyrCa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KX5kCvXpJXxQqdvCycDgvCmhBgL5npF9PP5Awd1TTbHnjCLDmjtbW3Pip3879RxsihCyXR3ggchsHH8ui3v5yHe",
  "key1": "5sb8K94CiXAqk7CmMoZUr73X45GDhKzE9UDbLNubyKA6Vmv2M7rpbhniuiEzEozC5ZKDSqEdbzQWQ57RsovRtiE5",
  "key2": "3zAcNSPRaqXtKVVUCt9k4guYbGyfgFf4BqMrFEdJzwRYQTCCsr5kK5SDXGqncSNH7ZNKejMkEx3DLrnqwaaroghU",
  "key3": "5jGnDE8jXJfDb3iaq3X2Sd6rkGffenoZmW9PdMx6DRf1Y942TfWQ4qDgf3Y9gzGUqsk3QLMNw2TDokaVUUZDLTpc",
  "key4": "2R7eUmXs1yBamatxFjmEHWxA3aTMqQBisZG7wVWAbkHcNAjr6TXP1A4C4pM9UFeQnmyTCJ32MZjfXy61VQY6pzSi",
  "key5": "2yCW3g5P4gExxKFJsdpX3qWrG3GK6sBASHqg45MVtoBwjs8iZ3CdXfbY8jcmsWEHVQDWNaFryHNRYmBcdpVmBcwL",
  "key6": "65hEh8hGYhRAro5RRuNB8sNrvZD4StcH2AXzczhfYFvwPf2W9AQhP3Sw63tBrpF4yA6PuBXfqpvLoGQvAQdXDwfC",
  "key7": "4iTrUQKX3gFUsmFbk9bP42dsRD51no72f5a6EHPUgFb9Bz5NcqWNX9zQVJXZwtJR2yrHRihJVrdinPykMixwwcub",
  "key8": "4Q8SdFe2KjDAVV4JpjQna6aVdP3otUttNwaxL1MBegYh2g2bYYawVhdHmMqr8RSCygNSDWxehfPwXa8JbctzaHUs",
  "key9": "2F9D7wG9fsSkcyy2z4B9FGYctzEbtXSek7YcUf5p9ioCHnNgyvswEsLryKbewTyooHppPoikhwweRJRaSg2GTgbW",
  "key10": "3uGhAJFbAgJqayctQNt5Q4FMDj1vqSCFYTBVefUDCuVMyu8KfHRDyati1CV8EU8a172hyoSZHBdrpKq3eE4S7v2L",
  "key11": "5eZNs1xNWea1dmc9cNbULuAuxwWLCcPtTHUFZrYZYnhxXK9ar4g4xt27qY6YwyZu2btSBJZXP1Egb8MmvMpdWroH",
  "key12": "4wxuX1KfkzvMZuTXUEynoR67u5FcLRnDYqc76Y7bUDAb555rf69Rp66ScKDNEnSyVVNJXVapVCNnYF7hp3TmMnoD",
  "key13": "2AqwQ7JyhoQNcxPte3LGgr5XqipeyJpbfa8k8PH9VCiNWiSejUYhRnnjnaX1LEwwwXLdaWVB1Fj7GSLvH4kdRNmU",
  "key14": "2pqL241hWtMDK2RFSZxcXHkqSyoufzg1ne636MnC8UYBKHwZ5rcySfEn97UXCCvfaVhRKYanmY34xqQriNHKzWST",
  "key15": "4n8ukYr5pCGhXCLN5EsM4XjQV6vZC2LarzbHwJa8QM1B2NP1tZvtJVVGKGBVU36vwhxftmyjG8XrJXxHJH8ZhDbu",
  "key16": "5V1w1cZgpgc9UKbSnmb7UNaHbNUFYABs1d4oZz8rBVGfmBw2eRXaeoZSXcgQDNZCdAnoEAiBSfr1z9xj8YFsu8fD",
  "key17": "qCQHh33B874ErjRj2fZ2v17wSKMX3HPbhkRg4GyK3CRWbxdUVbFVtSNBn96bFUgPHmsurrfdHcMMHArRZ63edBb",
  "key18": "4fJEoKzfvYkdzmXbJJXuBXhMJmfaGq4CzYCmohauz1wR7eJHaUwLzZXMVJZw2eBSuLr4dRfhAoX146WYMeuy1mgF",
  "key19": "2piztRCToGv6dsdhD2kE4QnZsumsTJqfTxEaBy475gpxJ363dXh7eJsR1aTmN47r2h15aDLJfG1zRyP5k6FHoHeC",
  "key20": "4f1YnhDwX4eDiNrsDH87dMqcJRyzeuz1XdadCuqySyj2RjH1vQNUVTF5wp2iey5MpSpgsuq4TX7vkpJHzUFU8PY8",
  "key21": "kbR3bSWkva1AKeDmneg1Yq2SfgQwgCVGnqCoGwsTagG5DRMi3Zu6VD2KgvUTL8vxeTZW1pSb8zJAgtQvNXCgrLw",
  "key22": "3GSi6seWKKe8RfpV8PPR5VD1Z575gt4jj5CeT4mbFfKbAbPUpGuox5TGQ4dFk3v3GkB9mkLA4yNqGrYmfLV3a7Me",
  "key23": "Hoctk9DMHrncDSyH3WpyCuxG3whiYPVCCBxVjTD665wvDcPxSZ4LfexLscqLxRkPScpe7whuTkEYTnw2dRdRh8c",
  "key24": "2TaPhGi6yJQ2ZbcrRLPtJBjReXdSoDMZpWtBZDd7M9TPWgiSSY1at49Ux3VjjZYcqLTKSU2ShArcbvFNa9f4b1dE",
  "key25": "357Yvef4EoQUgbykM29M66z8cPsEyuiJN2sDNVrdF6js9ysd9gSW5pZb2Dd2Y9ZyJZXSZqV8UGsWL2TT2fwYKtFN",
  "key26": "2gYq7r77RAARfA9rnMhKGFbYUkT9VhLynda4KaNNBwAVmA84yR9U5sUAakqyhKC9vshSSokr32Ry7QaD8i6o7xFh",
  "key27": "4GvRJ6uZyEJKmak6c99aoGsNc1Lk3BJDWUSr32hmNoTXmX3WoGjS36NpWBaPALokF6AZKosVvcFvPjDN6DJXp7cA",
  "key28": "4dZGJR7rj63hz4C6yq9tEvA8K1PCU2rR7mAKN5KgMSRqpQrJarF5ycqoJTLzi4xqCPHgem6pMVsXzvi6ed9W7CbA",
  "key29": "2NtpbYe5LxSeYDEMf5K71xeKEhrs2X1BokXJZQDmoiJ43rVBvSezeKoquz65nHHemib5GiVm72DB7XmxuicrdyZN",
  "key30": "5vCDHmXBUwMBxmMr8LuARUZURHdworUEHAeYeFuLRTtjdzNLkavvCbfBAqv51dhqH95XigKJiRTmKQPjcaSLr23u",
  "key31": "ZuhXrsPtX9gU3YcT52PaXNuA6MrJzXd7q2cet59o1zb8cAc6rnt5Jsv42HNsSdtUJEJcUV84n1GsBdtLfzFd3VG",
  "key32": "5QRyE6BsPMhuSVQj4La3jXyC3BhjhezTPP28dQNHG9GEvqpC1hw5n85uzK5wgZhyhVS6EuD5J31xogEcszXUiSKH",
  "key33": "259j2BB5U9zRUHbhMzWwszFvPHyunHoY3p2wq9yvYzdrY56ZKbDP1TC4mVhBQDGENjgK7rvyC7QTCfXfmh2ULscU",
  "key34": "5zLzqPYX1eeZmKuzTgeT93AzAodUkTShxycNjesR1z1LoRHfHoxaNATpwTvDdCJSXvmEMEtDqcJ3cSn1x1xeMb4J",
  "key35": "3TmQzGdaMDFdSu7fFCqLR2RC9W1qUuSHXh8MBXB1UxgHG8rvRJrPTRACoTz3sLNLXRZBrq6oq35oy683FVNX6MvU",
  "key36": "3QREPhHCzHgUXaADpjx2Fb7kKh2uYiX6ygM1vXRQKmhNNTXinthVr9JU65wqZoyomhV3nsXtSdMa5WAZNhrqN5Xh",
  "key37": "5GJoZDpT7HaTTicHMTVZ4En4WAgAV8g8MrKQWttVe1sohd8wEmc7BEX3yW77NkfTuGfqHmdc7qRY67SjZqzGshEa",
  "key38": "5WepRH98LTV5yYAmTf8RjYzXhdnXi7YmTqswxLW4tgWriJRVRn6W1dYpRQQCsrCDpgWMBUMJMbZEfaDP6XB8o2oL",
  "key39": "2ykZpgHThCyptPueHovDZLqWorvLbGuf4W9ZNeqp3UZgNCwRG1Xtpaqx3VcuZWbqi51vdhbVBrdBJr2BaS3mdgPs",
  "key40": "5h3Z6ts6qyXfm4Tszf7Ky9wKRb7eSZgFo7hUSEQkJw4JbxB4NcpnCgJL135PaD58LQLBH38vi9Dz2pKwrDM2A6h4",
  "key41": "4LNDLDwgQnDyo85dQu5jttvydmyLgiisKCcsXbMo81kq6awvFsyKVVyQod8ywYmKUkiGwJDd6MRpzufdyhkGRBEw",
  "key42": "5FNjEXnpfM46zAqU24oeF9meAHmfn22yv2vz43v3HEVsv7vTDM1mkbiFukJ6ZMpKzEYi4jsUkWPn175WDFh19qag",
  "key43": "4auHUEMNQJwX4VMkz4Bjz9izCbj4hZ9nQF35zVbq7ksM1GzWDXp8shRFiDFeNS8w7d8r4JMg1mPM3fWKE3xGv6xe",
  "key44": "25m5581oXvRykjjEVqKVVVzg12yvbpwWn5EFW1nEX3wZscCe17iZvr79AhocAKqxHk7kG8hhUG2HxDNQKemNi4hN",
  "key45": "5hKXti3V4r9Dh4MAgBtd6uetueFxKkbGtyYRbHg6mazCi9ZYrqpHrfQi9LpNYXfcPfa6gWRTCvYZoBKfyF8VoZMJ",
  "key46": "3MfshkfYb72fK1UDgHCx2JPNUafn5yT1G7jxR8Jve7CuDnpPgvRhW56tRFtmP8Ze7byS3pf1RahpQVTqqySp3kBt",
  "key47": "39QB48Ra6BNrR52c76dq3W9pYJS8FNirs4ik92F1DgXZ58cjt1svu3Wn7Eg18Vah88BHAJPxrMKc1eCWJkDdVF8",
  "key48": "59v3rN55ikqycV4ruGcdPx3VsjVaBNeU5VzR8MeBX68U4u4jh3yamkJfynFLG6N1Xuk5eY2UmVBUW7xHD8yiXJfP",
  "key49": "65MZBUww6TiNP63AMSQrq3ZD8NJm7c6pbwu4pEBv1QXkRUFpLCGKmf9eStJZDQxJxvGa2bgz1uGQcCaWe5TmeeQ1"
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
