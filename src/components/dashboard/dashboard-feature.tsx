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
    "R5QJpMBMJLyBWyFcVf1F4Lv9gZpS3Gbe8o4FfR2Dkjd1eCy1q4YncY8JLx6DpUJ8xDiSXpkk8JWKmM8Uaiecgud"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FpMRTDbtrxAWn2Eh2p6N2byZS4KujB2niC7j3gmGP6QkVjzDviWqS6LThow5rpM5oo7dNnAravmCNEc1NwjDKBc",
  "key1": "3SevHXFpJFwbpsWNCL3q92nvSMXb7nvpgJYgEKLxkey5zGFhiCs8zLHWPmaqytoGuntp6VrLnvF9suHsY1qrfdj7",
  "key2": "5cZJpDUA2SSZH8SQqMzExb5i6CUoq9hUwd5T16zUvhA6FToEyjDS1EyUoHjKXFrYh4uDTQ96bCpR5eCWs1sJb51",
  "key3": "VQ7ohmE2gGNnVXFsJfx5c9GWtB7cE4JJPjnn7QCyjRQgiknFzuaEpyPQQ8nygTWKZUqAm985vdhFv84pu7ZQJij",
  "key4": "4M6rEh811eeENSMCaZn89fUVQhhdo3a96peaLVPHWk5N5sanVX5tbf9cKX6LW9LNQe5A7iGeD4RF7dL2X9Aw4NvJ",
  "key5": "45xzaSFR6YT27GXKYwKfyd5dx5LLwqu9GigaxESp3Cy7xiEYgBqNzGpWwtHERFUAMF83U4XWFnZDzJZtVW1yuzmV",
  "key6": "4mK1VBw1uauoTDW6ZDtJkTwA2iHpmQxjXMgdHcYarV4aohyTTWDbuaHdSbTP6HdUHEPkowFEShAbHDYcpAEJ1vSp",
  "key7": "3HyNzjVAteCQVd96JSxpEVgcnSvv232Tb5sQiwrc2HgMaXbCmEs9aggMQrWcLPuxg7reci3vQBDGR35qM3tFQeZR",
  "key8": "55fmMRkHHBhxtBU5BWe613o7QVYhAvKGESBZ1RBmXjT3snEheyKxWXUNSUXxSSxswsYpeiFrYdJfJusoA2YqL755",
  "key9": "2pVMe972kN3gRiZLAmosVPjPizWKWxei8cNPehFLBm1w5HMXs9AkzSQP32Lx4DvXUcJHaYMmz33ECEUszxjYmdSr",
  "key10": "25Tuk3V6Mi6x7E2H2wJqDWemiHkgdngSsSmkjgBnUFFdm5DUytG9XgtBfBHzXddufLhmqUMP4p8sVKKsUx6BKvL7",
  "key11": "1CTJpdvPv2qxFFPiQmPdcb5K4nLzYtkyG7riFnBZc6X145SVV2GtPRU9uJZHXKgm3CqtTXHKfYRfwWtpHPZu1D3",
  "key12": "5XjDeLkM6Q5U3UoyDXjqEPXSKyj6cDFRorpbXtDTg7segdutFBcu88DwXTJS4toQA75R5nZrZqFcmL6tH9xztguE",
  "key13": "4cxFA712EzHgMf1HBFVgMn2Bc1dVVTgeZ4VfKZxUSKZ1LjonH9Kcmr8NLmPnT8MzdZQQ6cX9ccK2upRD7gXmqcBx",
  "key14": "4GfAZDprsTahRdKNRpW9bH66XbTXs2p7NMiULf3yZ32Vzq8Z2RetmzEYUSfUS9S3jr88uGZh6qjkT8rnhxSYmaoc",
  "key15": "2sSbQbEEBQaEcN1vfefLBgRSwE2nGDVFgoqkHdF9xHjbDTvNz96mM4Ru8QWCsYEN8VF3ukzZFku5y2uVdrR2RVem",
  "key16": "59bjvLXB2t4NkTgjP5c5TfZNva8zrrr82SHHuTHMAV2Nn4bAahc9SZbGNas2pyLzKHTmH75c4WxXUyRzStbUntug",
  "key17": "5BhfZjy6ciJ9sMk8qNygXSTkkQZdd7vUs6G7Ek5az51icAAwZp3VmpZMUbjcXrg2qxwobk5xeKNQHpEL3js4vRYb",
  "key18": "o7Js7mRL1DKgULDtFquChUra44QcXyvtqHQsDhg2xJ24361KnRoUBZks85pHixN7xw5mKSFJ8TB8TiEVdAuW6Mu",
  "key19": "VAUKo5sneZT8b8w3zUaFfzQYfTG4thC1WMMk1Vm1fYwPw9NH5QeY47NDwUVQ3JDpkFrqeLjcKUQMd1pmdBp9ctx",
  "key20": "2URn3gd2aQfKsaSDmG9R27NPVEFm3BYLZboUpKG3c4feskpsvVytUtqBT9uWeFkmYs7fNzbWreAD8YSuo8zEBsRo",
  "key21": "3D8yW2APkqZh5YcdHuNW8TwsgnUXTuCEuGZdoo18EyUXRWjzn1MQVdukGLeGXNmb2tWrjvgrTtEqEUm81gziuH3a",
  "key22": "4YkWzZaQgyRrsTihx9ZSNETJC1A1QBPaNHNi4rDMKfof119xTB3nxeDa73pSNL5QE9JoFGqgwH6LejSLzQvNJoP3",
  "key23": "3MEbCpLndzFJSR5SXQ2mCLMaN1Bbfbu72P2z8mwJLceH5DevBQ4ymYQqqVtbMZNBWi622Kyz5RoWfXnQysDDV74T",
  "key24": "3HHkdU9voafgLkjC8nAHYfeyLxnRF6gLMVCTZkorYjiDPUU9r4iqwJQ6ZWFkUAtdAQ8s2aJtyopgDs5fcpDgyWKy",
  "key25": "3jSQuZKhNSHKgmj364BdVVwS6xwcPka773bbLVgJNU8aGqX2GDYvEtwHBFfsciGwZQijdZkKsYzycukME9fAhBUB",
  "key26": "2Ax7RjTvqyHiJK2u1TwF3vEr3onkVjk17b7NDoP3oLnSxJJym6hur6B7z4vBpbWPUYXF69e5bWpzDBwPE2Xuts7F",
  "key27": "yX61wtwqUAjeyFzBzHuRTS6Cvq39a3dkEEeh54MRmm8D6k67WA257dkdB7JZVqF9gQCnigbzS7W1wXhKHoDinkT",
  "key28": "5L8mwEBAMz4icM4DVyDpSZF2PXNkZWmVrFEdrYkU7qt54ttGgNfY8Sf5ACeotGnnvMjvj7KZa5avyR8vrLouWjR5",
  "key29": "4pFTHaJFaDyruUDTEot5mw6E4xD7RMs8kYnUazqRpNQwPUX12tB3hFCFGXw44yDL6XjWzNWocCvZJ2iBAgCQ2mkN",
  "key30": "2fohDDsieB9XjgZTDdNemXpJTnjwg3VX5ARnEosnTAQoXPGVXqKZX3rMFnDwVSoJE4SexamPcrtqRAbFZ24wB1kj",
  "key31": "5MWyErxRA685sSShaXk7dP4fsQM3RVq3Cod1gqYmo3ZDnAyRp8MrWphf8JFhLnTB4r1bgdwb31P1yCH6ywb2tCUK",
  "key32": "4pKKMyQgpuMqgbPWdmJ1ZVs8AHGcEM1phNCNTsiwUy5QE3MB3gxkHkrhMDszEVLZXT32dJCjEAK8zfuBBKeMW7gM",
  "key33": "2BD7uaGZGAnjmk9Kn2VLVJSV1wwSGCRFj4JM4TPVsLz89pdQW6mnwHz2yMZQ5PtSCNQ5joZJSSvc6zkTYABpfs24",
  "key34": "3SDJFPXrLrRM3JupoTTsUm72zLcSFdXtdEmTybAX8mLpV8qJcKNR521qsfc58GF57KeE7PN9sSBpzU9uAqzVbcsH",
  "key35": "65HAyA7BGh4vLSJXLSSrY4vHPTS5DmmkP7yu1pYD89Rh1vEKLXkXWR3NwPTZBRqKpCGWQA1egSmha7tmag1jL2dh",
  "key36": "4tEdd1AcALFAjouiM8dgo6Fgo5RZnyoMjVk7WEDdpSuBmsjkTGrcGtFiEyRpFWtKGMPfcNvCF1iC2Hk9hPokYBPh",
  "key37": "4R9YGbh9VAq5RND19ri6nmsFknNepAedEZzUo4f6reP8P8AD8iEbe3ntKN7ur7uvJCktRb5tF4bEcjfhLSMqoY1J",
  "key38": "4tT6HkFaf7cgzYjpiiyEKfihB9PzSqLxEhxvYUUJvWdM6horumdbFjxcuiooz2189QXk9Xrn671ea83nmyj2WD3C",
  "key39": "5SfpjBabrMPMPPBs2Rt6n5aWwxV11v5njpThYM67Qz59s3vx2TKPDcaJ8Urqu6xB2ZFP22BHCDYfqrFTChCe6UTE",
  "key40": "2a6ECBfCfoipre1xDtrVifBq3i3LQc9u5nCzY3v8YrBznF872iQfUSTQD4LR4Z3hBThNTLnJxzT8VVurn8McFyg1",
  "key41": "2WqcoJ6sezSaUH8pktvJ2AJXhTMDM3CVKnhyfnxNVK79t1dXEUQhEAKuGe1DSo2MwbkMF6LbfRUxB4jhadVydR39",
  "key42": "53xwJ47CxTAqaB3HuG4sE5A8y6d1TheDvSbyvzpNzrsc39wNfZm5Nvfu2wTgsw2zTjPPxfLeXRUutvqHx1UtqTni"
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
