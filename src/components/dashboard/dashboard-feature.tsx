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
    "59cRs4Gb5NcDBWpKrUU3RLDnnhJFgtknoGw6DaxBBEcjKaHW55FBTFVx7eKLgkv6ss2RrviM33ef9WNWXUgxMVcj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Jdn7CgUdJybYchTjxfzyYRhMbovkm9qT7kqgi5AnHnuvtHiSuxWMWcmTY8rGb7gRRAsrDecA1RdppjspYZFD8gj",
  "key1": "5MeaMDTztbZC3g3enxCcir5U9r1z9dUJrf24w78pkLgGPLCJDgiD8ihAThP3mRrXPhwmoN2KWhcPkW7N1mTwKq26",
  "key2": "2ZYsd3e2PLGretjknNuLBqmqyC4zgGQc98D36akHWoVcaeWCVwuRXgm6vtRafRx38E5AF8tcarNFBEthmJvgZJs1",
  "key3": "5K4tDvKX5Vh3SJEyo38s8Vw1NmiZ5t55ULYqBsFB9oCe3bJXMq6tDPvHjwpHUigRb57kdgj5fyyNSQ2LDv2oxWty",
  "key4": "QdgiT6P9XeDWbNoQrsfKxwidsmMECgSHiHJ3EavBacohg1ZBVeK5RYGGm3dEe48xsX2673nGJwxMhSjbhEYXTo9",
  "key5": "56YXdJtH4jGYYhX9js9V1yUz77aNN8GRrTs3PNBBPW1cSK8PCK9AXUzY4M29etLZW7QEKhYxxBafTVUrohjkZyjo",
  "key6": "5QMdg38LT9h9W616EEXnNExVBnWLzCmjEkDoz4AbxPUsbh85P7cXdWq2B7oatFUaaDYGREyHJcqLNEUUezxfUVQW",
  "key7": "4r9fr2BmpCPpW6WpGakxxQgWfR4yr5uWYqrPEfAhYP2AWM8SCjVVur2JBy7cyTR7tM688cXb4eWVJTtqLicsexCw",
  "key8": "577yup2QXkLizLseTRmpCf6zRiPNdtL1Nkf2nRQaiNfq5euxPhAceKxvGrdZtjZRTB6bGkQwL1mKAaoXcMyphTqo",
  "key9": "2j6KmbBVjU3TMZpEbQ7FaK9g2gNfQmcpFHMan2JcaBKCGBpUyqerExHkDwwXcqpTyeHJLBkf6wQ6QtK7fBPgqe52",
  "key10": "4P1VFAT6nNwq3cyejphVnk5c2nHtBk7vwGBrgT3rnxD4JPAz3sXBTLzeYZC6bZPGftjE7ffpspaBmPjKojdzPixw",
  "key11": "27ZvUd4U8Rk5ULMP6hoNPKh6VHbcZxj7AcicRdFqfjJaDnVqyz5SEME8o93Qon838Q3wmzKmT3t94RdiUSKXZZSk",
  "key12": "5vxFgUdeFD7B7FgCKQedxeSznod6Nz7DzRzstYodCJDJcunAKJEbT3Ft9zaLKRx7HA6Z8u6uTap12NZ1BN3uKMho",
  "key13": "2CrWjRfwugNysZtPcZVVFj2A1BUZ2NpWyDBEvFotV7DrfUixUsPGm1BYQiEvVaWQ5tUKzirReiiN49G8k7HdH43U",
  "key14": "5Rqcgf2K7Buj9GwaChcaZn7kmUpLmwa8mESCwpUpQcKxYQ6PU4gCqB1Ydp4wmfpSbEzyc4ZMiBEZZj4t6VWStLph",
  "key15": "4NzUsbtbgrERf4VG3bsJYybCBWq3xofVGhoD3FYc2Wfbgc3NGgBUuxNU23qywaM4Sx9u69CVTQoKmQQ4CLibZsdr",
  "key16": "5Jav5TZgRJnq6prnciE6wvns6rdE4UuevGnuaERkMFrqqZhbFnxHYVt3oesg4egXRzaFhQEzdFUiEtP2egpR91Ve",
  "key17": "5y8K17X7kUcTiX3ZdcRjpikJHCzT1L55vfB5mfhwTrX1pXfb7MMVVREiR42h7ppjGFGffYFm4biJik19cM1fYUrS",
  "key18": "42MoyZzGuX5k3TW44aCnJYLzygCTwpGrh9HidKtx8CTeAcGV9bNKWKeRseZncJkQZFX9kWwsH2wqZsrHWXvDanBj",
  "key19": "3ihezqrj7Vxd1HuViE1LR3er4n36bdZAo21ASDKTcj4k93Ejj7iiNDnoEDPdmq3v2iZt237SHG3cyuaSoqP4NUdY",
  "key20": "5np6JoN5uBoNcyi15BhkDXtUrBVHE2wawkvhK473sYKSQJ5YTQ4MMBZDbnbioY3Pk41MtMzrBYpAQ8ZGiVNZc1fF",
  "key21": "3BMKu9WaNuMdFkijhVuGMNTn7RCuiVKMaFVtLosDZdWx75eAUg1Yprqy8fbTNoXSj5adCamiSv6w9BBEUY1XHyPe",
  "key22": "4RJt5WmYysbzchgbbmNAECAfqVjZT9SC3p1TqEh7buxqVApdovMopA6rQnTprf8kaxUECt1LsSW9Lgop82v5fm6A",
  "key23": "32crHFfB8q4GgkSpW44yeiakiDYPaDpUuBmaABtAiPzDV8cE8PDy6vm1GVRwCKWCZQJ5y4R5yuvn7vg89GDUijCJ",
  "key24": "2R4USKM5SmeqW12wRpFQxqBs4ap1tPgoWuxDZ84BeNbNx29oUTxd2EkKhB9qmB6h39D8ZJoNv11V64ZdfDAB49Jf",
  "key25": "4mP5g5FaqeLu1XZ3kLUF9m48dJTyfYTgSuoTcgd3XmJqxmwZM9xkNuKEy5H7ZiFLH7kEVfLtDWh6GuBqWnjJVa3Q",
  "key26": "238BQddF5FnES9Hm8dTg1Gs2MvBLyNBvVKg4baBJUmBQkTYGLSgpN9kvS6AF73674Yi1GS7BtTZfbes1wMfG17fS",
  "key27": "3XTS7LukXpixpfXSWuEhSVFtVvXw4TfmNtJ9AK9iZr3rA7vp4cJdK3GGxc19hqH7p5C49Cs1B7M2oULb2MGLtdZn",
  "key28": "2WJUZaQjqVNgtASQv5xw2rGBz4M6PhCCS1Af5PBPLzHzqBVzPoDVFGxYkq5tAGvkyRPUTM6ozsb5vpHEfc4b3zWy",
  "key29": "41dPPyfgohpxUa1xUjLBpVFv7SBqJ2n4tvrUYdMpMS26sGWSf1k1qmFbGadHWranCJ5npocwSKW4L7993zFw6SGh",
  "key30": "5MeuMRnkkxcje8FDTSd6FU1B2Pfr92LK9UagjjwqkViio3N6NZpNfg24HYRz15dNiBPxrj7gAgw7NfYmx9Y6h5XK",
  "key31": "37h3AJEjp1CpGYbEYuc9jpNpYjWp2kUhxcwvt8Kk9Duhz2qzDF7sTpjupSfFz4d21uAywov4h2tzURL2b4BPV2t4",
  "key32": "x6yQzL6YjFg2foVrToPcBvykF5TMhcBhXJzdAKcjdY1UuaLuSniuMz3Bwp9FVpQ1pMC1fSzR2MHBCNZAbmAxCFE",
  "key33": "4AAW4PV6VoLUfvVDW2CcMjvjPNVn6rPMTsxzfyHGr5JahWwAMtC4VNochggGeN2p4nyYhagxrfnts9fb8pL7EU1B",
  "key34": "4kcfGM7qxM29b1KTLNwRmFFDdSWEYVZBVhcS7AbZk4wonbZcGLNJb5m3d4E2GryvAivLo5zdccghpeUdVHUoDqBW",
  "key35": "4pHPc6FJpnv9RDDMgft1DuZv1RQszmR3BMYj9MH9MMthzcz1FsLcsyzjAJSSS2X23tj6PhQiyBSq82PPFiW88Sbs",
  "key36": "5REWDk4vVwF2RP6M7fXKWKVrFLhYiy78m8rAE2XeW5unVwPFWNYTtxnemcPaGEGGdL4bMkHXG7aGNRcdAaYevBLw",
  "key37": "4jAaSwHPmv8HjtbZY49jj5Rbo88d2vwggQhu6bnq6g1hHWk1bLXUePDkdoSwQUHDWkrdDS8vKUitkBomfWNqsed6",
  "key38": "3LMT2w32KCV7nPPFTX8WXXWLAWvZQDBvBCFwNRgVEHUmckpV32N1hmC6nLZVwzsqRASrNCipGSikFEw3peGjDoBv",
  "key39": "xFrjdVEhEgZcRd9YW3MU1nJozdpiXL5LGoc24hxQXfeHTptXvdp2AM92cGweCzvRr8gAQ9t8DwFR1e2FRbiprvQ",
  "key40": "oyy1pF5YKiLCW1cCj3s8gXVRe6auFNoqTtAeax8bEPPWnRmAaz55p1u5vm9eabygn9rorXQsVGTGYpRZNJUnMKY",
  "key41": "4ukVKe7ghtqurRcJLraXZhLazGQDBrtGsMN6VD9eQZJoAyPtosqL7UA6GwfbjMcZNDVpm2z8LTdnB5ZKdByMsXBz",
  "key42": "37qhmPthtEhLMgAApAuViwSdKAWe95VAyuZ3jWNAVx4cvFtE3LieXBv5qhG8G9NEZuGBZAeUS7SJjNL8L4yKFzEt",
  "key43": "5T7NMHwoj66fkusqRrNHZXfSB6Ujz7qKkU9GdKGZRnaoUkkGWTeC2LiJCV2TsUvVGM9Zp47WLMrZgcx7mVdNfV8D",
  "key44": "AEDvXSay9MoYGHJ4ajjUvrwmrY5hjDePn8EWYkJPPHHmBUud4bQCii7reQe9TNyUep6tZeG5JME8YnBYp8bAs2q",
  "key45": "4LJYmjz2esZ2aar8fhey2xEbMqT4y9CJEUZCkZG2uVFDqzLNDAyY345gCvU5gxnnCzrU4G3Bv2oKuNfngMAMtDUb",
  "key46": "3pjKDdtrB9A1ZWF3cbGgZjdetuk3pCG3LRwUy3DPiU9nSkXQjwRYimbT2UXyzxJAi8ZhWnwm6uixdyMsBKe1f1T1",
  "key47": "Vb8oBrg6VJ5XBnJvmXc6RcgigD1XptgtXD2bo1v3KskRbjFESyNexwtff2esuLXKraF265RUcbE7uNLdtW4XnQa"
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
