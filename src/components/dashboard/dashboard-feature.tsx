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
    "3RRPc81ihrwRKFdjcboPLqoZFMJ2UhJSNCqJxMq6UqMxf95cR84P14h6Tc1wvqrAeJfB7M3VgkLy3q3u4FDmojCs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dG7M119D5LdmckU7Fg6vvaMfzbbmsA2ZgNPQicVeuHqxWJ62W7fwLhyZjM8SBhD2PbwYWY6QyLqg3HMSW91RHQD",
  "key1": "4n1HH7a24u8pwM9gUcyhNDeNqh94xWL57ggeEM6LTP5YBRFZfzwpuv73LHV4i76s8ZVMZAQDpmvfTNu5dCoqwwYJ",
  "key2": "KRLMvXTyGKTfEczXKHAVT9YHQjoytFmV3jjPRz6NKjgzvRbUTV1rbmamytQqiy8DKMtQX1qkDTttQ3kDaEoPj9D",
  "key3": "4xKrekuqWmAqELdr4HzqzCFdvo7NJLC2tsbGx59iNyrhSK898cb5CU5yKhJQ6pd73oGgv6rj8rQ7XBH4tHydAKty",
  "key4": "3YfyFjC2eaKddi2c8xt49wYrLZLEfuwohmRJrJizGWSSAnBZgFy9P5WbvaVGebsofCUNRJ27FYn4nxzwJGtqkYxc",
  "key5": "rUCdSKmSLcsvTNaye9d7s69ULS71LZSRaRFL6fyvZM9xXa3Gzgi4YBPnaywCp7hyTnWApj4NB8RFUzuVbGSUw4a",
  "key6": "57KuyvooxWVZ4MsDt57TcNkJatQREm9jhpRN7as8NhrtmKCVn68cjuxoGNqRCipQCxQmFaVd56NHEPTZksDdSAWC",
  "key7": "2BHW118iPsuekPvZss6ozFVcEXNskdcvbkM1Bj5GuB72uiKwBbHQan6XvKDdgUcC43b9SHicKn8bLkKD6oYEwL5P",
  "key8": "2PTTewd5uYDjqdMd9UJhxBDVp4NhgCQEugPTpEZ6gWb3Vybfzrykd4ifCifEssu5RPh52entziBhtHZWoa8mvbye",
  "key9": "7RBF6DeQ552Z4rVJhUcT4R3WrgUhiuVRr8GpZUT7Mbp2A1S7uAd8WXM763ZeyUAdUnhG4mnfhcmuL6HgdUSWhJE",
  "key10": "3vkMSfniVj7yqc3d3aUY7ZteomRB2aZ1qwK8r9njF9TQxie8SB6cgJ4gERCcRTy1jRKKcv9fzdoTE49QbeVFepKU",
  "key11": "3LgXX19FXojTS4Ee7pwavE7arBUvRT9vtcU68FDewW3GU9sBX2P9UbzvLyFfeSekKQiGbcGwYdBqbTSUVfRFH94b",
  "key12": "4ymXaoKcnPYZeVJcmQLZBzgsZc2jdsx8YM3uV4MWFUpn13v6hN3p1CNH76LUaT6haUtDgj4babdv7zXQzaVkpYbM",
  "key13": "5vnSYEFnmvgRhPZYMgCMp1NXBtRHN5sLt83eXcCTafPtzqu92saye5yAYYfMSyEv7SsHPEEyDb6L1qrR8oygwG4X",
  "key14": "2uY25FnY2DFDKMn5uMa16baiz1PcG2Y2cdUabcjBZDYj3Gqoh5mS1KTZ7EQzymfFhaLey38kUcR6ENXbzTVCZdvL",
  "key15": "4f4B7z8VYjzQNozSgZHHsQZGypmjnWRX8r6UG2AA6Ak9hhE9LBKKeJDjxi7DecCR1Z9nTxfqGpDh21pAd12MEHcj",
  "key16": "5DsDtMTt49yPeEmEk8kHAuDzpCRjzwY5Cp2unUtosP7PbEBK5Mp6d43iPFdRCAu74LVtaLZVzjvoZVDDNdsHciEY",
  "key17": "4iaNjTMosa9xwUkKMNSSZ3C5uD2NgyjA2qh1qZFfD5xHUCGNrEdkQo7pjqBYWhjxGtq1ZRQHF688aYVnyyXnSdQT",
  "key18": "2tZ4jRyxfCPEhsQikK9xmAdnssdWMVMok6LNWu58ufBtwrN7KuVFLZTEau28VAqMaLvWpdZSMPA8JXT3b1UEGist",
  "key19": "5HhLvKcUYLC4SQNCvDpCRLicJ1zUyt3jDFb8fHxUT8WsLPPthrWF32TET5bbYChhPyRVczGWvatU7D4pKrjT3H1Y",
  "key20": "2X8hDCxBNwYS2emM2Ei3cwa2asvyvWEL3kSoPew8wYVgStRhVHMxZoV9PXqEiiGBWGNdxTdqxSEyjXio6icHe7fh",
  "key21": "2akmGpavqMHV3pqk348bYq2YCjNEaxiwzKaVSKkEZYSTVNkkoMJCktBoMCdYANuZEzUEQ5RftuSX8FhNPaALFoBV",
  "key22": "7tfLK1bsHHoj4FhZLsNVXECqLXkraJ4fF2dgszcpcQtqkuxALwmDGhC7xrzrNkMrSqkAgeSsjrdAGAphPs8uBnH",
  "key23": "2kF4WrKNeogGdVabWBXDCwDAEXK2PYhVDayi17d9VFcJ9FPXeXqnu9gTRVJq6r83Gfw8TJFSetSQkgQxhM8n1Dsz",
  "key24": "62at7NWm6BkvtTwm7cz3iLvwZethQLbHsxhKVWPBAnHsUTsAfzmvChL4frTJ77ojqGrRMu8r7FP36tAqqajZqpt2",
  "key25": "z2xV48hXmTDBvpbVWBMue4XVH6YeGnzWkxWpabVieEGcTNgLRqtMkKG7GruNxXymxKDGcRinTtdtjoJiCMYz9re",
  "key26": "4PEMkbEPiDPNdZ9GZej6D21adebJW8K2ZKWx5wYTFBPwnpM16AjNaMwCrUCkSa5Ptp3TtgrJvUENzMN8TdpGzxar",
  "key27": "5zrL8uPh7ErXmzAgvEiZEPzg1ty36CSoLnr6VvuHpfEvU2MdVHorSHiARghWbaNdjcJUa6cjMJMB3zHE5KJWJj3g",
  "key28": "3zCsWCzBoyhf2SD6MHA9q9zYdWkXRpwPrQbLAvGFt4ZM4oq4LCsatK6orjf5XmboY9tJx9kStoej2dzPuAfvabxZ",
  "key29": "8w1Fu9WFzvo754U3agV63t5kWWswp6ovnmp8uL9TWdgUfht3UZ6KG5dYa4oYgDkMnoyWLKW3e3rDEGr5XsZ7ETx",
  "key30": "5UX3dQTo8jqE3QLzTMMAkpBUPQJtKrAcfxsT8e5LrNeMxtPt7FcTaYs6KSwjLXT82saorDnFFLieoAMpdjn89q32",
  "key31": "4HXdyfKrzoDaebYZRniumpsbwEzd1VjZcPaHt4phi3DkfLSBofNKA5ua3LuJQpYLdCaqSJyyE9ZQ1GMnoo3nh17V",
  "key32": "FazWFQRgdtUq8njiQJKKWCuDFgpqRdrzu4RxMRh9btHBaUywPJ83h6vzRFvGJYQnBf5SdD7EvHhpV7ZWNFAW3LU",
  "key33": "5NTGwHWr8HqE62NmU25snEw2siyrZv2mvPfRrcJJkex7ZE1Ftbf8RohBYBd26asnypKzQjS6uByb2dBGHKcg2nUz",
  "key34": "4ezq5MBq8fLcLUXRPmzX8eDm8yzVu8BLF4gWB938T7dWxhbif9q31C2ZpeVk5ReuJ4pGsEy7YrEgq47KfDZRrEbq",
  "key35": "4RQo13HAKA9zchLKZ2jRqZfgKe9Scb3Ugi8kJPxsKJXwk25A1fhCGpg7Hi24V1MimJN5rTRcwjxW4phLNAY8D2R8",
  "key36": "2pzxLyUNtAfPU8DV5DAoGamL8GtTCkd5bQLXwAjSYxWrXBUZzx7HLW9H8MStTpCm8Bp1oaJFh7tE7kBpkV1dpoaQ",
  "key37": "4DTb9utycfvhQv5GxyLqZBp4odGrTUvvVunyo8meDQKyri6K2GuJbqPerHnXAikzKeoU9LdBsRaEhixagT67nueY",
  "key38": "4uLDVJjj232FyuzbAhUhZXTgL2U21qs66s9v61H6UJo31iWGFHP5EebrSnv5cv2rwYAeZSj3Kn1XWj6MwE2KAebV",
  "key39": "2Y3qS3hKxECLXGEPUxJStHwLKt6UfHuYY5Xp2NYSiAha2YtsRUiehEHMLi3ZNhRQMgn1vNFzLoYbLe9ZAdR5cHQ3"
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
