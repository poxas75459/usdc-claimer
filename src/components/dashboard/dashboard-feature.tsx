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
    "ugsBkySBZ9ud5nb8WcR8mjaXQK3eGwNwVPnTgDRSSE3vTc5e7Ev5eayqvT94UUoA1N92rojoyHhMabkv2B2dz2e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KNVNMUcvAYZo9GbrvaPmjMR4VVJbDPcwz6u8p7abC7ZetXFQtinPdJiWvtA4s83gNfYnf1DpgfRC5wx28Do91bi",
  "key1": "23vvwkNGyYCBbq8dbkGEkZbnxmo54MEdiYjSZ7r5KTUnYXGB5JLcMB9JC9d84LNQGBL5u1sjWJhzZqhSWqzNMwQR",
  "key2": "3hUzZFQSQVdCcDViGmAb4fbg4AYCVUtbVuqVREHcYLHHSm4jQcHcLXrc64BJGjJTgsG26WW2Bfc4RP2ANo1ZcF9N",
  "key3": "2B9SPvP4GbgecKK7LAFNiu5wWSXVbZsKvieyZo7NL1qDvYtH9a8Jw6aoxAM4jEbJwg7yoTFADaeXZqPQHXGU7HnR",
  "key4": "3A3dAUUJv8qR5XS2kzG9m6dZmCvFpMpGvbTbTGa8HF4Wj51uK4YbehjMjEYGARmZj5EFbw5Z1yQa4QVJDqqsVm7m",
  "key5": "2zhky78ww6mLLFhJvy98JPZoCLLNVi2YYUYve1amDcEuAop4jbcadfJraSEk92gMux526nc9dNXsXFJ4Ne2ESayJ",
  "key6": "2ynrMuY4bnyDGErQnEGtGh9vjFXSsHZTB4DDPYLtrfywfB34T5hZhSFnnW2rVuNLpMFbD4aghDemrcmm2wQMujsE",
  "key7": "42ZsUZ4KC6Kjx8VSKS7g8KMqdKqZKkG3Csib8x9SJeEoE1Qd8JydRPsDqEyLiptnksh8vpFGmniJo3sNgH8Rgzgj",
  "key8": "fVrSMHf7zU6oeyvkS6gs49xwJaJKqfn4BiGQkkmqGs2yPaLWNSXxua6byLjVA2zwaQk9andfhPXydCu1zBeyKku",
  "key9": "4pe5zbUyFJZgCcXJbHnaJ4sE12nUuFZpmH3cX2BgpJBu5TD26dWNq4o18TYHBxp73pKbVXWSycApSiH56gF2tDzK",
  "key10": "ys1sGHBuK8bwNitdw2kioDiW1VFAKmWc1CZF2ax2F15wWrdGRDoiRdXmpaGzMQnGV77wTQvK6MNikEmxfUsqhCH",
  "key11": "4w7CnZXJRF4eHEuP3cUwWcjSapDXjdBSnPboiqaGJ2CSHa1mkAs61Lg2cL3BheMK7eZJ799STEtzoZghmC2x5pyL",
  "key12": "52Jc8oC25V4xJY26gbfGVUe7ELCUwMjUztTrDAK2QxVHoTQpyKXSfJVqzGmxgjcxTCW6uMXNWDVGhqdmUSGcbQSU",
  "key13": "3M8scWQggauddTgtbdS73My9BuJXYrAZ52WqvGYqxyfm5H1DapywjrjFK3heeW951r46a2ZaKe9FxRGLFp4U5v5S",
  "key14": "4gCyAA15rK7mtfgrCiu26AuDw7stoXcABsjT5wRqgW4wYyAs1CmnUXQG2WEmajeQ7Wi3H94gFWY8HCu4NoJm7Ryq",
  "key15": "34Nh3Pgqm8EHVY9aV77ZvLVch2MA54PapeLLX1HgDWCZ4ccQZPXh8Nd8symC9s6FV3Lf6ei1cHr2VJ5nme7ry9CR",
  "key16": "52guYcsjMpkruPoKGq1i3y4Qr1yXyCnx6mtgyvuT4HH8zXvd4BfaGLeNhgh8SqQrymzb2hwv7i7xFnXTLjtqz8hn",
  "key17": "5s58RPNQhkyYmVxXuEJBMfYAHdH8F2RPXDtMmVje51ppHnitTrFoCDR2Yv6KcRz56wdjhAwcPebpUmCFvJUAuHxA",
  "key18": "22sNm5vAVFQjiSAKeMDLUNen3wK99DEMzaAm8YjMFbNeNmVfwGrcYdhi66miWWLZaHATqt9TpkN9HqdGQvM7jx6b",
  "key19": "358XBNWiUuj8KMnD9CPbFkHn6C1g1dB7WvXqjZqxyHdc9XizcVQbpJ8e1MRR7RELfpZTAmUCWBQE7gkY2qw7BXvB",
  "key20": "5VuPwLwS4VmEWEx6SqVtn77dRtTKmSdFdyNxsFM2DvJeXyU3R1wjbhQZXEjtAQyx66iNQRiyHDvWtqcB98xxrzb8",
  "key21": "Q13XqakP76PHi81yWsof73NDgWUiSprv62rd1YcWG9HYYgw3Fhvjz8DwyDB4X19xmBEcQudJzmr2rCZzGfLLDwS",
  "key22": "2G7N9Vjbpy4PMiscAwi14nkjEwjfPSGJteQXLC8DCoZpfkMbfdTEsFV9moAGzvQiM3tHBHNwY4SisPAqUGVXZhij",
  "key23": "tzZcUHZfy7HCxYuoXvnqJRKGQRKRcKdb13ZFSwv7KXrW9RWLt48ZrcH53fYEEp8h5KpJwghrkKmzQ6qmkp5REas",
  "key24": "5RStP5chSEnJ4Sv692BjQtG7VgUywt31ZnAJBM3R1JXpVo6F9d1eb7Hq4rPLGNgGbHJTrRps6toTo6kCMtUaCDB4",
  "key25": "53xPx63zY4tL6BcfGV5Pz3LHwEK3iK8ugY2SfPGMCE1PnMDUps7yg1MYhVHgF2FH2sjMM9CYRsaVUPnN2ZsKJx7i",
  "key26": "3EJYaT5gku79rS8JMaGyz4viD2ZdS4J4AxUXFkuPRy44kAqCREPGLBvCCwu8aM9oiFijsVtsQPz5eVgSETTfKLZb",
  "key27": "3RoFwhpYroZ6KqxiGMZ3WTM163RfgwCeyc75mWe89NSKY95Ea9xasFskoo41WceWPJo7wvNL1khw99zVvbJaA5hK",
  "key28": "2DbpgdxWBzsvGg28dGQGYQPYLkLStPfAQsRBGbCUQkNecn4ZKFZFtqQwsXprMpjxWA7nFuHuoXaucXFsGGkK6RWf",
  "key29": "MaipqkTkp8h1QY56cNNojB8RPtR8bW2rgcEMuvgdmg8omhz5Nnn3jBE1hQmB6c5ZAe9jntQNLdkgDhgnZag8Na7",
  "key30": "2XxD8Nts9AAKdUSLXyh9bEXWLvzEGZDv8uZ6VKWtFm3dTktVHUMx9nYmhbK9g6AgkzpY5meyUF5Q7CzVnRRLag7Z",
  "key31": "4jJg9dDprhdffNoKvi2F2G6EWjG7uTCoPRUPewAB2ebYWtVTrbKzRYDoA6HPHcrhTmS5dJzM5efrr3SEbwWN3Uy8",
  "key32": "Pj1AreuDSsFQz3mXrEbxA3DEvXppmUwT8DWkaqFEKpwYvCLac6TMLd1TGu3jyCuRL31HYBtzzQsNe9rfBqFmFMt",
  "key33": "4BvW3u9p7ddAz5WcfRRzra6JixRGwAe6ighQswMMUTdyXKdhbhHPQMSDRLLBgEb72qFYWi8d9ppRYzK2MjofS4Be",
  "key34": "5QingnkKuRNynDUiWQxqvFDjAJrCqhy8o7FcjR4MhkV1xwQirwyLQ2kkSRWUGPjFeWrCc3tFkx2qcXrgHna3Dbq2",
  "key35": "5ybCUNvYCqCQCEnd2efWBnZ4Y3FFXNXQj7ZCzFjUZX16SrPhP75oZYZWfGxxFqqCBLaWrv1pxjAaTnetfCRZDC32",
  "key36": "evfNekdwYCWdBPegtvNBt56LMfeS2sq9UMFEA2Mt88uCtiVma32DNaByw6vspQywVq7zvbEQV3Dh3BtPRfSvxHU",
  "key37": "3rKPTCYoxH3eFtVtq8vSzr2ihZnaXsVanibMJui7aXrrtwYBZeJnHupCaEWp9bL2GjTimYCwPt4bDAPGSLEA35QQ",
  "key38": "44BuKxDrQW8SAEipXFgHrMWigS3GJvMnyaZn8Gr3DChy3eZmf25Zqb8EVeNKzoi8sFmGaohbKKEr5qVAzjESPBCu",
  "key39": "TceBm9DMHY1MsZ4b6aG793Fyz9nmKktAWWKCLuau5p6Gb1mo8ohcfPRQQF4yaEq7yjbcGMBVYYiQpqvqL5B4Xac",
  "key40": "cCpLrzLiix2DhFcTgpNftceYm1s6a1UuhWiyvMEP4pz8JmSzme6zEeQ1Qga1BibBjuVTXHCFPxwdw7M49dCQf8x",
  "key41": "2xNfhGFhx1pJVc6Jk36DnFJUTrgvqrWCWes3j9Eu79WKkqKfPpZZDZRVX6ubmZPPkvr5epGVv4dMXrC6jfc1p1iy",
  "key42": "2YEcrhYhg261MnkCYzpB1gKqdJLnsApPnanctvDt2DEqHKimgZXSVXVEeZfXpkpCGHyJJVRJnr9TSRxKdwQWNNdj",
  "key43": "5S5ovo3j11pn2AxatNDLVsn9xPzhuf9M59HxFCv2P3E7SmK6Jay5XAjLCwUmhMYhdhCGkyf699zJnpr9ALos43sc",
  "key44": "4BqFyrqjX8kufCyKiNFL48acnjMmPSbSyRgXJicZhrmJ2ZU5RDC5oZS7FUugikMVrRLxxGs91zRNDLgbMVRtRa3E",
  "key45": "2BFEbMknbCnkroaKwWoLma5QfcdaJAKwGvyXQpMrXFJPonF7SCd8CFLcZJwfboVYhcGPpUHYNbs92f4p8VmnLTHr"
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
