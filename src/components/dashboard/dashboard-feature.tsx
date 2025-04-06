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
    "2fEk3JAj7E4SsyBzeDfMQRupRKP72YPFCm4ZxjfL2MTx7r1DBuogs9drAPF1iwR9Y2EJtNqhQRV97D4VF3oAmAtN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zPEkrTth34BLxHq3rFNEBeLtkhPqVkeBN1PbVt98u8HE8sNmt8DxKwNfD1LcRcHoSjHFpt78tBkJGhah3QFNuG5",
  "key1": "65uSo5Zc7aU221axJk3mJc22gdhbmnqTvStATvkWtpi1cFRyXW6L24BYwbEJcTzKkhhw6tYWL8deuDRecDzLFAD4",
  "key2": "4jTUmuvv4rhRPw9bArzYrqrbg63BoTMPFqENw6coeUJ2Jm69wBkLSUwptTM7Kdb6KNSqwXpia16sGPS9A6czqDTu",
  "key3": "57YA2vaN8S86UYanywtUUwinVL2qvqrAJ449ef4d4mYxo37JCHUHcKN6vBush7J4qDRTm1js8byaxSomxcosbgRy",
  "key4": "388JyqTSLbWmPEWqYWSnHWquewuBoeYMrKeYtaTKCSuC6NFq5XzMshVWrV7JEGmj886icvjqakFNzzu15xcnutvV",
  "key5": "2WBPBmFfxr6M1TVzQvAASkZaM7vjZ8MPw5wLPjVS6s7ADkfgperyXrK2nqS5DLAU26D2B8nCovcDP79fiJiMfkqD",
  "key6": "2pbZnf8uiH5c2Z5cYNzhtXMxe9y7aE529FAyX2Ahm69QthPzy4n6JC5odwT9gF4ho1CszkSi7BvnExK7hiKJ1uGA",
  "key7": "5La7mf1gDe9qQ1LohC43z4zP2qxhmUc82vMM6CPbymaFDfeUp4DqexS4kqEXcbQ41JhBNjNC5wwY49pjVGNb6FQX",
  "key8": "25ZxRL86dtzEx5s17B3MFF7BCBC6wxQD6XgZ4SMv9xs9BPhNKC2qXKModxnW5id9C3NhRdVso4PjhKvgS5Bs5WsP",
  "key9": "2zoxfFEMaVzSsEordHsPmT2qnukupk2JCsfzMSxoXz2HRpQangeUbwSjNMsQDozAz1na3kdUE5krQkkH91sBxLXK",
  "key10": "4zjgw4P9XJP4Zibwz91kkboTh2Y7GX1yfejBB6wHVFnM7fCRtGfcXGcXHinSMbSaNPcD1bzWTFecKaWi1yUWrGUh",
  "key11": "5PS6sJhwvZVmrFdhWX6aB8hiu2iUxN6w9AkGwfozDFmMSmRvqPYoMkErwTDpcQHwEEvNLG5zeycb6TutaxRifCgv",
  "key12": "23qJ3h1H8NKdADYXrMp31d315JifNkrcd8LZUQGAza5B2yLHTh7ZXKDbqLrHcNhr8HSjv6bHZADRfdyvQhgX77Da",
  "key13": "5Rr9HTzpQzSPPFxDaTs2AzBhKyJpeyHLGjWhAEgVAj95zYGSmVxE4kxkFgrd88kNm5E7Un3X7MdYg6wZSYWGi38a",
  "key14": "3R9TZewgfhZr5RUxFEC8o5dGvZLEvxwzi6YTWKCVFZZ1sG8MRTZrxSFe7kobVAhGHuU3coR15UkWH2ecW51MFdus",
  "key15": "24XNoCYTuFsHXhiTW7p775U4qP6Edz9TavPV5pwxAPemTWmMafx2maxca1WsiyYYjQdEd5fzftfR4Crb9gp4CsBr",
  "key16": "3oRbFvQAsD7yqQyoTnPJc8AHt6GGUTDTwfUiZCEBeACfYtpyB18iC1PqVbaU9mHcem6XvHgo6bS15rngi8JiBaXK",
  "key17": "s695eNn3emZYL8RKVBiByyVQed7G6QwacYgnLbfG2yiTD5VhXGpAJhxzTGSeE5H9j99GbY7mPwa1R5iJopkiRFy",
  "key18": "38dh7M7T7bmhqksK7NDivwJBCVbrnoyFHhUKBDyiRZKBfttVTmezeapwaNW2mGGrTimiQQRvDxaHi3LSDz8g37V6",
  "key19": "3xjZgX259Zbqd1uMtQPDGjb4ux1RPRx5n9MsW12CjNiPxxu6WRtmgtS194Sd5KBNvqHX3UsLie5eQyku8Tg9SjLs",
  "key20": "4SdNwS42iRuHfh8RBgcTC8ws4GcJJ841wMXuG8L9dvUaeuBaUxJCrxjfEWoqW9VASiWYR49rWgTtrmPqd8rxqAo9",
  "key21": "4cV6E4C98caHusPxbgo3tW1g6MtED4neSq8c2stneHwZ1CyUH8zYDeVtwsK6tzT6fui5uoV4qSXQcCeVpt7X84sm",
  "key22": "2D24DPPuDjbq3aEferRJ2sTW5Yx743hnnBeSFrCMPuRVrrAfEjPEvuLiTKFzWWXjkbjU5vYcxK2TGPPuBUZreGcM",
  "key23": "21FwbGbBUDwHA3cjiU3B6KAeoYbWe6dVuxWbDwSSjqhDZr9jKhdWmW9SdoDN1ybHh1UXtTw6mxcP8RFB3Ne9Z3Vb",
  "key24": "3jfAaJbktzexshFk61LPsw6ZsXJxvbfSVnCFqY5F8GL6U6G41VL2CvcCvsUUv8EZhNpoSaDybGUsTttAgBTJqcCV",
  "key25": "5ZsR2jzDBkonNjgFpjkxX2WcHT4bwworQSGP4YyDaCKxfyxH8qgHTKc73TaY9FpeNKXYZ4eYHVARJSw9owEdy2gG",
  "key26": "4Ak6b6GKxLEUw4b5yWcyqSoiZimjAvRcheKSyxSxHcmLaWirzijJEvFH2WorFWrxzVxrS6eMcSibzDFMM6uzqSKn",
  "key27": "2xzC9DiiwHRWGr65cmpLcm9WAHiYXUG49zck8V9Pb4uZTKZrmaS586whpsUbgLYveVDpskDPDsa5Jfo9aGdd8zWR",
  "key28": "42yz2GcLCWEecY2bBxNtHa6QAg8TF2wFquQJA9r2CKZqKeHxHcGBxPN7UxFY7j67tWZTt95ECwQAedDX4UgYkCJ5",
  "key29": "5KF74qEmhi8f9vaUPFeeYcsJ6aic2qtnnHKPWj7NoWhzaPwH293XSyLytFXZon3WYsjy3pQtaHdRVqc4VwxzcnES",
  "key30": "B9fcL6tjCzJmS8RUiRqpR6a2PQZGLUMj6f4JDgCdbaggBrKuqZngiSGhywrsrAx9NLAZxAz3qAubGDUrCerAZkw",
  "key31": "3q5cBMJUMb2j74S7TaJMrtoJ4ZnMnn45wii1Q1xQqqHr4Jq7Jos9PTceUH8s4LAME4qbCUSDBmBfjQ5GZ2cALz8n",
  "key32": "3Do5d8jrxKs1g3NjAAHpMzybrzU2sez33FMkGCJNjk3Z886GCDXyvd4pXCBJzmwi6qWc1LGPwWxzuo7p1vC6dtC9",
  "key33": "5ZVDYUn2A6YntHh5n2TUhoAmhZaWgGev6mDkdmNy4E4sDjbBC1W3vVRVQPNJ97bNGhePpjA3AE7oWppTmudarQr3",
  "key34": "2VsfkSH8rdGp756hoPBrLyW7heY4Kd46Wm4jnWsoWDjtikSmVVhVN5LyYZzvSiTvEkgy5zHjRp3h2Ni1SEewzPGy",
  "key35": "5orBQwJLnkgytPmABo6TJTExA9xMp8VwZB2a7G6CKCmQQidUfuPpLkon1UwhNxnRzBuaEeA8ktF6U3eLJESsWsza",
  "key36": "PysPMbMjwxuaGTfWyciEv1yz1vr1jX1yUDS57r7x2bbe6g1U7SeKN7puXEYAgb17J8xJLjwRDFQho94jRNxaiH2",
  "key37": "3txGduFh6HxQWdgE5rGJvzmmsQaPLr9GC7tMUcF7ZaWefJyutQsrdUxkn3iUi7oAhMB1gwmGRooWLyouL9p16uYV",
  "key38": "4kXzTZAh4y7eoBL2jaD9dwQmbXZk4A2j2ZpYRNfAF2b6jHd6L7xdzPLDxrwQwqaJMUV28GhFd9HduaZjPLjzMgqr",
  "key39": "ApsRcuA6BLvjWBUBSoAx26HirxgtFrtYGYsnYnz2EuYd7U9kVyP4tx84YCh4D2Ug9UyZ3EmhJ9NbsdzNa3KjjHE",
  "key40": "4WDUnpGkQTwdpA454pGgNc3Ag3XewXYVh85dd5n5Gb6koLYxMXUBGsSFYf9i8rP1AjfNaUYyRQuijG7uX1tyHek2",
  "key41": "3vLf8DdRHsJ7sz1ReXcdmowiod18iUcUEf8LzNHcWWohFiVBZ1CYRnF69m5CgLjLByyXY62YWfUC325QiMet9wv1",
  "key42": "Y3mKz2Z2PaXK9GTQf2Tt7Cvqroy7K6N4H3YZe9ikxZECSKzRarK2CPLSgtMEHkzd8LfqLk4D3JNBJWt2HTs5F5v",
  "key43": "5Ww9izpD7JEAE3pGqEgYy6PXwZkM83moUQ6qoHBCPo4mZtWtpjX8borcq2SeKBrTefw9EHniGJmub94L7FgSHUMR",
  "key44": "qnTPcGpZpLKaCP6H6AEK1QhNxkQXLvh5HjUKSDAWtURvZkeFzLD6RNHhqDvRYVhSSQUAhoXi8cgugrDG4fJjC8W",
  "key45": "3AZLqP2JyihwqwA5wdVs4bzxz6PAS6KLDV3ERgSoQYf7cjysP38wu6vtvGueXcqYJns6brgykAcYTvNF7gAZBxwf",
  "key46": "2FX3gdBBvVMuym46TSzVvDQxWaKn1GW7XCwu6q6JiGRujGbmyBRquDXZqwS3s61vXNVpDoECyxrkkvg9VSytTPSF",
  "key47": "ydnJbDN9FqPVmCmcXXC2VU98CDsmvnfLJaMyQpFQx8YWKE4JeL9jCEiQedDxxoznEXhxkXEMTaVPLsT6TkqreDm",
  "key48": "cpqu5igQ6rUCsSeprG1Zp6EkJZMrkm76pRf5nP2T2bFtXSnmRdJUgVvkgvVfUR3nzRGZyGAHY75RjzLKVAd7iVo",
  "key49": "5CvHFsYBXEhvJd24YNqPQnqc3om3HDQiPwVNsZofW6NWUvTcWfRGZBJxBo5YJG8aM6ErhWfWxgJZxDvdEgQ1zn3E"
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
