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
    "3jkRUcDmAF52va1VqdWYNTenw7kkCRmGtM9a4DZ36Qmf3tFEuURGJnWgEed5rAvygWmseFHeRQ7f8aNBnX9JdhZB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "D3L5EDpENHD9v5qXkFcZtCfAga8A43gjkgS6AGiBGubJiYQyH7bnGFjg6v8AYTDjao3QUg7rSWufm8kyYoBXpPV",
  "key1": "3VT28Zz9XJEZ9nEj9zHcJ3suWUjcBjKZZTuiWC1yYhKiq2TsS4PPHuNa1hig8JSG55bTBh217rb5jNmw5iXjUVf4",
  "key2": "yUo3oiHFUhWVYZNYZpUX1k2TLWmFoMAXrsFBJKrJPZtZAyMom9UdrSeqZGCvegZNqXiDyqLam3v5oaDASxWbSMQ",
  "key3": "35XX3UpPwXL4Dh63umrrPXG6MEPwBqvB5ja6iUWfEDYAVXjRtCWfuLJqpHbLf6Xxcz29Aq3U21oKX25VTPBqqUba",
  "key4": "36wDEa3KEGbyFRucTmA1tEyXTP3bXCsGqdBfcCBhDXCNYG5FiiYsiE11T5BQMkxT66HtVb5TJo6b8mNn5nhYo1LE",
  "key5": "51up74NvUCsARM3SqqQufCq2W3pgkquDa26BGe7cGkE5Xpnz3Wx6nQJJBauxYXqbtCtqtEXdjibqdeMkVAC3HnFq",
  "key6": "2WSLMZ9VMDeywYAppygt7BSZU7gjTMxGVyhoYNamrEezw42JWs91LdVvbAwJkVCrf6MUxaN9g45pFZYqGeZfigaT",
  "key7": "2Zg5vqGB9Zrdf1Zcf1dX2dTZ6NXk7MdbjBwV6AeRFBB4QsiHmspPcwATmXitE7y1JfeDPKpVnAABZv1VNgQBtKwN",
  "key8": "tT2pyk4xwU5XmTjuWCzZk8nYZuKnvRhPyqArwMtmYHFjD6jodJo94CNgx36zizDCwfFRtK6W43bv3RQDATokwwP",
  "key9": "5UEWJw7QBS6YTg9J3M4jVY6tj6zjj6t48YQQJe7u4BZHyb8A45bNx4U51dWoHTty9A734qz2jDUoiUCjjvo2EKgF",
  "key10": "2sxeSwekGPuxRzJMJrjv8zZzEBTfvdQW8AvTzFDWSrRptGrwUJLigjK1qtGQAeBgiTeoV7Dn6Wx2Huv4E5DTxBQa",
  "key11": "hNhYYqGeraS6Ej3k5Akorq4yMVdyWS9B3sxkHNUWRazFMqBEWjdoFUV6qHBV2f2jsT9UVj5BVaQhJaWzAjzFStY",
  "key12": "5PpFoiLqYKTKUHmPGMnvbX93PMDz2vgmfHXobBYcCoCorJtBPQojhncNxFMeKJPdpdMTcWpEWbXu9NU7dFFgVYV9",
  "key13": "4Xs1GE45qq1iemjGbd3y3NVDGFYop3ZwSy5Jnno1z95SmgS757sLqGUTMTSLDn1oFjXFncp4mC2KPZcRJKfzuMCC",
  "key14": "3kjTsmFQhP2FEBgsft3S5bYdMdw7TVfMKGE48kTvBRghNxoEWQ14RFdNDgjAC1qQRj9SFFfNw8LioZ7ea63kVFMg",
  "key15": "2adZW6JTR8VmBYJmYHT9nobXry5oCVZvQh2vhQaKTuY6Geo7bjMxyrvTnpym3JYJZ6n9QtH8Cgjf2Hz5JUmwFQmN",
  "key16": "3N7jLHCg15yhqc5ec6Q6JaQRkhKGgtqVYeXmqnDrHvWVHUNQapEKtqAc3H3dJcyvXkY4B8Vwn95hjmBXB2jHDJHa",
  "key17": "ReUtY95d88gX2VfmkvWaJKsC7taAWvrt2Q6cjc7BU9HEjs5z5mQSe7gW8BiUCHm4PdcKBk4miLEx5nUc71ZYM94",
  "key18": "SmNYW9X7fbMXhpUYqv5pCJCrXLYpHdG5meZ31yNLpPL8eT8kZyCgwng5bgu7LWFFvX92qyVcrZmSRVcBeYC86wg",
  "key19": "5H78nXFokXVDVxviC4uq5inhL4fnfQufHE2kgJfL9Lhp6dbrJnp67nKcFeim332xq1YYRPaRzrhZBhJbgT4sjx3a",
  "key20": "53u9eG3f9dPSBrmauSjAALLY52PDfLTN2mNTjwzeQsZPiHCD3WDb9fBsgPxVL7zQ9zQHDQWtYKPUGFP2DEL7NV55",
  "key21": "esVmbCd1RRfaYgXZ5dxCqHdgWgpiGZ86urEtopQJc3wLPiHTVVUjGzVp8KzVTwSoiXAqpBEaxY9DpsqkJLAqZRW",
  "key22": "4rJ9yJeeRDT5xrF9pA4wtrRifdC7G4AMgACFTkjdAxWoqFu9Nx7xbKAD9e2C1KkrFDo2T2kWvGErYsskU7eYn2rX",
  "key23": "58C1skJJBrFgkg9MjxqRPv3R472rY1uRxJ3MzShkfRxMBbY5ZF9sp2Rgb1diogyXTXdaSpF1sGmU8QFHvxLYXAUQ",
  "key24": "ZonnYNCvB2qtGfscYNcdPDm9YLarHPddYHwqLgqfZGQtVL29pj7VeRQQqfPBhimiFLHKfirxsHm4ocKaFZwXjEC",
  "key25": "58DetedQzx17m6cejkH3JWXBvQ7dVGj6qxvPHzD8CKxw55MBJu9W5EmaB9qzUepFQ85JHEXUx4PCZEQAg6ztzTZq",
  "key26": "2rvF6VXiSvtQ3BG1bunxJHCErLBqfhPmYhR8DvhEHeJXRSWeUUqweTpetzjGNdXBGUTfhG4AXknp4WcCuznRz4rU",
  "key27": "4qykrcqss6M2UC2fj9YZNN1TFtR2A2p9HygqTYXi5vgcD2UP2MBcpV41r7E5Aik2iyJTbNoVj96jyPRdeG8BUoSA",
  "key28": "3CvYXQGodZaFs8KhECwknAWZD96GQDh5avt8XYUxkQ2prgEiySCG1MvrtTUswSEqijByTgacGBnA3JHVUQzdhT6b",
  "key29": "2cr1jJvibJ2Th9nu19gbqSouwWfVQaeJqw3sPaRQF2qm87E2peRHnfGRHY4XRz7ar2uvE8oMvWoJ91ZEckbPDSXs",
  "key30": "3CopBiLBhGpAn9hkqgXY7QC6Mb46q8UKdD9uF3H6zwaEG9HXGwuXL8fDELx7cZnAtrt84j2QtKovQTCKfXDwNkeR",
  "key31": "4yHapQM7JtACFiohj9UhUSgGSJDr6LC1N9raw4hpQErv23CXHytR7Pic6tfenroL7SppozG6rVnB9PmfGUJchsuG",
  "key32": "2jsKCSpFLc97o98C4wLJj9NKgPXUM2YwY4mjYbFtrF6HJy6P9Vth6Qr13wJQkgv6Gb59pvz1cdSgtQ2ipwkyyq14",
  "key33": "2SyrBMokr6Sp5YmqZtG5huwLogj2P5xu5NoLECGTrdyz2CYFmvBDPporH9VP8gxuYEcMkgMqjPDT64cGQqV6Ereh",
  "key34": "HNM4pjjVAohm8du53ygcahB7Xo5GoP3HZoYVeb79KNwryDgmBPHNFWCr7yQ7TPhdSJ13BsU8oiRHwF71s44s1yo"
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
