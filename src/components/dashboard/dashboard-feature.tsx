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
    "44hTtJVwovk3MpDX83bJcsRGRwb8e3TZYW8uFh3Vz3hpa1vrFS5f5n88j8KAJeSotXXLVGvPhp4cLeQr6pCa2vAH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tfsQxJR3186CA1Rk61PvLkoSqpjNdqGGng5SpmpdNyW41vVt57PBTYvDav61RAa8REJTLafhniieBaTWVgQNFQE",
  "key1": "2iUQdXGPeLkFkWY6fQnwCHmgZawj3SKrdW3SAMbwmJHFiTMxZuspgmJHRCh6Afv1hYSd7HYpQuHQqDFLvrp1v4LD",
  "key2": "3X5GU76qVSRTgre8JnywjYCeCU9bHYANdcY8o99ZgDkRuFiKeRtUBHXaYZTUnU9MHsVgaMkaC9id3WA1DWjewUMC",
  "key3": "41rhV5o1f33KGupaAfK41YjT9wy99x7nuB3kbpSD9C9My3AuMRbPyRACsQKgA9mnEEZj9Ao3iizanRpSnNQ5whAG",
  "key4": "39eDvLSZkp8oW3btvs7HMEMrdDnx4KRGDxT5SP9vT5R2MFECwEEZqRQ5eEQbFLudwhEWqjyMVbPsKqhyjhxpoEdW",
  "key5": "37mNUcnWf9N4TMyzRkzCkwb8vKGpBq9Go4s7T68ypdopWakmsY76FrJfK4frGpjyVWrhm68P7E1d943295tsx6HN",
  "key6": "3AENjdeSpUrMa3z23gZwYcSd8tJMSz4EmVDEnDJ9zFQpYGhwJejFeUUCsZNu9HX4bi9qxfNJpYd2PApp9VnJSopT",
  "key7": "4a9KhGp6XHuTtoFuBSDJyYKcz1dPH3JPNFzpFxxH5ZC8NPmeKgtzPGHCQ4kiKVG7xDD8mgcJdQYnmKrRr8y5N7z",
  "key8": "4KyqQE2861FRvRsR7kQL7aSYk14tUvRNpbHrqo5gDNzFQ5fBwoRzucDZ28PGbBacjNrKzJ1qRMqtga9nsVUbrpUP",
  "key9": "3moKa7CsNvSw9Jx6bgUmN8a2itPjPsm4ciPMw4JZpunEq7ojQ6R3hrJJjtaFsm9dBaowUJyGzrKhsiZeo1p9qDAK",
  "key10": "4ihoLsdvjSGdZpiLqPicNKrP73nu7hdzHhvaQp3szbGDfo419cckvri1vcHgtYpQWGysvB7ujhhM9RRCCiq4Wdye",
  "key11": "4fQCjXWbkp7oP3SCPULVH9EUdpdwUQ6eHGNPafodohd12pCLcWnyUSuUjsbDCnmV5nSgWeP2fURhZ9XWovXCTsJH",
  "key12": "4n3cM57B9Fs6jsGFxnD44r4SjGGSaCqA8o8V888qu3CeoSzACTaMcDufJQz26c6xJnekjjn3X7NvG3JPgGwKYbjB",
  "key13": "35mrXnTsdiZZHzsgLQY9LK6pLFnMCcnyjRSrgMeNFKrz94GbMiicfVCwVtyyM7wL57E6qpdFgRFjMP6hHFucTJ28",
  "key14": "5QYPfgJ76AaDoSTScvjEVB1yPHf4kzcMS4dCvJEM6rTTKibwDoGJjd2VUHx8dpQZGin4cNJDZ8nY5urcuwzvHL4H",
  "key15": "21rh2PB8DC7rKiGSKymAC3wrCFF5zCeBpnakzwjYNXMoC7rbbRYeg5ch8ybZ9Dr2n7BkEe5cUebVcGUoeTAp1mkz",
  "key16": "5rvC8mGa4vHDVemfSXCPVKFJoPYZDBRN34XZMCqBPgALfQmtghPy6affcPYzb1735kRVSygv4mfT2y3ADEB6W2ie",
  "key17": "3LjQCpKd6CqGD5NopLyEWnrsNXKYpWwcirohLTVgSbiX2Fvdor1J2ZD2kprkRFiXLuaQVLvkmMWDfdiC7FYQZdHx",
  "key18": "4BBqNMwSGSfS7vy2zvocWMhmYZVXYqjLDxXVspAPvJSFWnhF7YrJyyXpWDD9dwqvjoe7TwNfSmXHkC4JDpG689HM",
  "key19": "tbsXqpHJxfRq9yqZQ9jQwTDPPyYdQHvSU6ZHv4tAyufZL1tnkWXjPpFTgBz7Erd2N58Qsfom4rTCX6Hi21nDXcS",
  "key20": "EyrJA53Fx8fR69hrKro7a3V6vcyyzGgw1zeVhKRbEx3xetPFLjyKmCvTxyjuGcydvcS9kgiW96A2AmmqFZbaqJX",
  "key21": "3cmeGCzJfi3tycMkAP75DqhFC4MS7aiLc7o3Wa5gWSF3jgDkPSvg5Gr5w5YAmQASUQunHrYb1T5eT2nQ6Tib2zzL",
  "key22": "4U9fmEu237wN1i6voeRe2zqDEVoJuFX1pmmgatY2rt52GHxTEA2P7ctm5EDceb4kyPrSfzrhr7DfivFNsfSScGBE",
  "key23": "er2V37YaKd37hGVnWwseMX5gRiAEjrmUhiUZQsjmq5qpVXWPEkXRVNRfVFzhChK4vUj9iLgHFPxNxHuAAhDK1bD",
  "key24": "4aj5gNPEoQzTouAvp8jtY5HsvvnCMD8N91kMjGn96nQReiMiN17u343odoeEcc5igxNqmXrw1trRPQEQ6Jxozoxz",
  "key25": "4tXyP47SmFrbW7BcQbE1mwK6PNz7nfFmvAMfZRhpsFsCGxUjoDcmKthJcw491Wi892tYMy5PBt985x3DBJCkdfmg",
  "key26": "saV58LDDc1kPUgmHGUxpQ6LCB7wEc18GD66RCC9SPrCXhfV8BVJZE5Z8hizdZvQCMgpfM7mUtYUk1aGsruHgpuM",
  "key27": "BKf6mytdVyqw3tHtZHLep4XtMB21HabeYbYPEwrFBQfBBtCSuoNDhhYN2DY3dQ8r6gPGdTUTHXarBXybNPrWACX",
  "key28": "5QcGTdwCD3doDLvrRCDahePKXkv9cVhfHFRQVCDLwRab9dtYYPrAfarGsuXY2N5BMLkCyEupHGNDukqVdPj8FeAx",
  "key29": "2K9pbdvT8dSKxPoeHRc1pKPcVzA5Rm1eCLGegWhk46Mg8Upkook7bVsEEL4cRsQbGDAo2Mb2wdKrpnDPfuBadzpS",
  "key30": "3Q2z2mMvrZbgzmzfd1gBUfTzgxKtrbHCxwWmurtHCjyKYg6pQRKXz6Cuo9D1pj5zjXEdML6ReCZqE2i7f3YsADSs",
  "key31": "4nSS3qxySWEVy3uUzteHhGuecM6ApHEspWZ2aTgizh7xuphi2HMRKR9x7B5DnE7YxF4uWkzByGghkZGPtFy84zVg",
  "key32": "3dTqGbzfxkzrwwxyjdm9wQGUsDPiMshGCHaVT3UFPRtMcqdyzJvdAQJw368LwTePETUo5iPsjTVWPU1tSeBdoTN6",
  "key33": "2nKLLKy4AnoiLgXS7UuioaPdyFzVybWQPcG1XAr5f8wUhSN14qRMHtiR6aeqSxk1J6Juu39ixzihG7tTXtPomNEr",
  "key34": "3ee1cWnDXMgeKfTfQ5e5imiec2hBJh5AQuQJ9opR3a2fmhq5jbRBAmZm19Z4r8ppK7DysCLMuTg8tzJnpjkfF7U6",
  "key35": "3uMsuCcGGw2H8VpDY1HQtAyBGfNCtG5iX6HR5mfsE27tXHcrf7s45eUxmyJLHU95mpA6R5cGMrqu4UEXqcjUeSja",
  "key36": "3zdQvWTW93RaQpt1xUbxYy2xncxYjtQiDzcyDw7bpuT1U4Wz1uvibCF39oCGkBmVt2Z6YCgiMHeQKbRBvVYN1T24",
  "key37": "J5JQ3hQMBMTEXwMxT6BKH1va3C6ubefAqL64YSrJRvLTHL7LFsJDVQYoZkTGvRZBzZVBT2qirFQ3Q9PsQPj6ifX",
  "key38": "3ozarbJBrmRGXPKqWLHpWGGXmw4od7onF6piKr4jFVNDGQbSnwYqYRcEq7f8hC2Uzf3uzhxzYSidRDNNG9tYZF86",
  "key39": "5AwQTr9LBcTAuD2S372Zgyavomga9zNug5Mhgc7Hmh7U58e67AH2yTgZXCegQQeiCWFB27yK3gCYRimQrGr3bcP1",
  "key40": "54VfgQHcvvBtvLuMHYhKTXJ7ywyZHPovuTyWiQrHzxES2omSs4hVj3CEvoqrdG6fWiRzWzHMotdAFtv5GenzpHD1",
  "key41": "5cqvUCSv9jPpKzQRK6ar9EjZ59cK6VJCQ5eus6YGumEUULQfx49hxJbDic2TUE7jeDCPJVEzJKQ75pZz4G4cLJKa",
  "key42": "3XBeuQVjCvjndmtEaL39NbbFJKQdgf6viZRJXzr2bc98cjJcEf7djR6eCAHGbTBMaMPThMMNJmXP9LYgBC4QK9zS",
  "key43": "3FZ9DStqf2Vf74aj8BXvTrE9u2arJ7E37UrMJsM3vTj4Gd9mrvSdyGkmYLDqDf7sSohpQJ77CqN9TCBTwVrmcwbM",
  "key44": "2fsWpu83Co9w9vRTah4i4tcdFvo4JdhxJteW9q2iKbCAWBp7kvNGKZyKhQqk1tPDMbnLHAiMQq3kkcaepMsmRnqa",
  "key45": "3DpqDfgjUPNB9z4kYR5TRX9Naa1TsDv36WeRGRiuFbFJMtvNaVyUoBn9TKxSYQryRQEwBsaJZgiX4EMdpgrMbM3G",
  "key46": "3MYCh3gKxoJ8TjMAKJ2ZtPVAQdmNF5kyrzR3Pv7QceQ9FM8JpCK8nv5XEC6dAL3vB3bAJ6TTWn2iME8UcwBhCWi2",
  "key47": "3mwo2vsYsoLNBUmuPouKTjvdScGHN5qQ8msohWfjUbfLqq57qVfwZRYJefVrAshjrRqTq5VAAQHRdWrxUMJnANbf",
  "key48": "5HMQshfhjgPSaNkjWNq2uW1GRB7FCe97pgdJH6yv68CmZSVCfGfR1VMcF3KCyXBdSZ8gWx8qZLbMhkypwPqLS5ga"
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
