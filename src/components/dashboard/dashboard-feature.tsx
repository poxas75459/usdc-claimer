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
    "opBfQnuQyHogL3MekHbVvaVXuUKeCpoYoarrzxTUswEbZGgiVCLAk6VJeqrQR84kd7bWcq6ytssBxrSWnRgY4Uf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2984vtaYGP2wjgF25SfVL7a1SFbthcfhJg7amMgakMLsWUUXmbCPooL5CXt4g6ZusJrkyCg9ZhJFXjH6KfBTRuAE",
  "key1": "5JAkCBHqRw1EpTbgNmPKBQo5fdKhyYHBhs8iE8ViUvUEB6QYgaJa6c9S8SArAJpe5YfGJvYVscjv4Lgwitk4cbKU",
  "key2": "HUD7ts77zxrFnWiyFopPnQEePu3fxRderoVDfFSQcGpcKXcjbDTMXUMMxQpe6kK7EW3LTufoDd3V7oGdjNWvb19",
  "key3": "9rwWJL4jKmLk6KAkdA4PvdVcdd59C1zVPovunjdzkz82CDw1DJHoLusV8bJD5xGBYvDnooUtZcMermZoWf2exkm",
  "key4": "4f1YawC3QMspVMonPqGSw23dS987yRZGoJsNy1YquJJ2yyfma3YSVYP4fyW5UjsX3STWd1Ff6AXB9PAGkYmsyhRR",
  "key5": "5aLkvALsisTKh4qVtMvX1bcsbUSNirEdLrf34xz4XkHen3bJZ8evinydKJeVCtxYdWMRvcdBMGgG3MSv2a25m85j",
  "key6": "66iCsLibypCF7Kza3esJtU7tdBZd3tJn3uvkDVUoysDi4UMRQgmeTA6LWHtBcdLTv5xYic9dmiLj9ZSDR49MP59d",
  "key7": "3TXQdatz5UopQCccZMzpR4p7X9qbiJ1mouBqmixfrdkoLCq4Rw1fgKdLn4FgsPCia6n1P84FRjeznbSkawX2jmqP",
  "key8": "2Fczzxk88vkvZit6qCKBy9wnXMtVhsFpwBk2tpsZVXQbcSneoWYtDkDASXxbWAZXNqsE1PovaBUGGwcAX34apMYA",
  "key9": "3GZkVLb4RBMVLsyr4bZmGkaWfAqETU71bvvepm73KMVJb8VgpTXUDWZ7uYVnSFJtuEEfNNQ8Xdc1tSLnzR7A2Ww",
  "key10": "67aUCtV9jTS1MHWtauaVbpCQcfW1b2UpJJUBX59HJ6xmgj3r9HPH4AmYpUd4fpZU66wVXPLJF3fM7uya6nczZhMw",
  "key11": "2tPdxdw3fKFd7WTtFhhoQQuVBhi4YRqTVcKex6LQzWeXcQnCEDiNQHjuYb5Ug3v2bXkygTNeivhSXkYat3LXC4Po",
  "key12": "eMoiefxBT1tUKvyv6ikre3hDsjGpRx5dyQTuKTMwHMa3KfqKwfUoZJrEWCDgdquYiMDkm1vUP3RH4w2CAa2CWoK",
  "key13": "3BvvqJP2dtXccZKoQcxWnav59RRxhhedPnj53EJNZdWmfFCaxbF9hwKqG19aoRThjCMacD9hfmkBz595B8NuCRpT",
  "key14": "4RWoQQ2TXxPjiHTkkhw2f7uxLe2gooWFA9Xo1HL4xrpjTy6L5SXFmermQn5g6zqZvKz98ZMUFLE3CvDeremK4kyB",
  "key15": "4kjBH23h5DS6h8HwNRGn673KAgu2L5dMSa9ALbE94gveQ15CrFTxJEJFPc7xBuatRrbF5LYQ3JZe4NkPVobxpKpx",
  "key16": "2NsE2ZELu4d5P172krWPYrmjnqeuRp1pqtRaDFTiypczFrwdbh4Pt31rLzRXvtB7i4jTHrbjU3Har4MuyvEpCfUF",
  "key17": "4CjhFWVESp7KDXnUwjFLKN4c3h3c7Cb1U6BgPkSW6fTow6jReeWzbMC1nCYeHxfocdtgky5meGVAdaePxQtv7usY",
  "key18": "5FL9U2zBKX52R7BjyGg4jYH5f8mn4SayC1WgDowfbQ4dyr1f22SfDag3vLB6EoBFmCucYi8tvUnS9cyrfXco3aVS",
  "key19": "5Pj6Aj3btK6RS7TD6JqrE4JWwSV7rNRuNMfUQGfL5bDNdG9GLvRHzV1S3HM9UrKc5Fv1yXHhp3QYTXWCL8Bs87Sv",
  "key20": "22EWts7Rv2cPXybopwbsBozU2SzqKjDPP8VPtgCvYXopqLjNCjrzjzpvRZL6RK4QBYE4Mvyc6HxafNYH22gdUBxr",
  "key21": "7H5ubWQ62aCMZn186Ajb7CdgWkGKbjLHxY8ca1WUYYgBdF7jAwspUz8WM13vvJsz3NTnkcnbMR1rNmJsJhj8oji",
  "key22": "3fwLHdF6A3cLHHB3UqPJHjCRRRS8h2gTjWSK2VKtSMEanWqgf54kh4KJRUDvh2kCRJHiRKK1TxaGZ1Jia7Hz8yqo",
  "key23": "3Z8BDoDa1PPrxkCBeGtgsJS2xZ3yKMMNjNJyepHkCLeP9Aym5QyDSubUjrtBWzKr3wZovoJQjFPNXMPB3yxSdY4q",
  "key24": "NzGd1yFHtFyLPEaQiV2AuN561cq8qndT3NB7TLiuZBk8M5nagPtsq9QLNs9VNB2RWQuWuPyETHnNhfUq3iEKRhi",
  "key25": "53xQXBqx14qQ71BGGsoJtPDkMNE1G3b1CHvYnYHkqQHrq9hq8pBKSXsidMUzbLrNtXwpYZVES4RNka2uG8n8rWN9",
  "key26": "2jLFjkK5dcYpt5yKku5aJu5Jeu5cfN9TTnwLpMd5Ko4HPWgsag9rMZqPVEKLSRhX5xEmKFi19bHyAoVFCsDXPXio",
  "key27": "4aHTuinwjWwHbdemkU72qwCHxExXYQhCbN4a7bpKKH4hXQfYT6U9F5GRf4i7kGrW6rrqaT426ByHi5MksRQbmkFN",
  "key28": "5H7F81Gw57iBQttmkonSxN7yTAsoG99fSEsHwtuMcji7YEZzuxp9FvTtsGvkmRcasJTX8yM4HiR67QRmRswrjZnz",
  "key29": "5VJLnpmCJENcQCLWNbSV3hWgbPSAfTCLE27aThh2Pi83s6qjLPcpu24MKDz1wbgdbzsUvops2JX5LvWW3AR6o8pm",
  "key30": "2zkeiEeuomPrAKtGEFDxfCPUUpCk12gCEFFCjpLhmbKGhQs8jcmNSSSGNYxYs8xJZgAiLF7uL4fCepJLxwGCzAcx",
  "key31": "4LdFNmHkvmE2iBW7v4QNcP11ZYF2E7haLAipECmLqPqUrrrESK7fh7o1nCaj23ujgWQbBv8bdKundyAEDeAYXfiK",
  "key32": "3BaRyJcavbKFPdhmXq4mC8NVJwiEGd55FB8gQ4g8KXZnrySxReuYDnf22jwCMs7ZAgRzQw4VryEU25d2CRyzfCix",
  "key33": "2jtW3RJk7V1Uow45FuW5gerfoDTYHv6YuDvZWs9fL12uMQj5YntSznaiovzYsUPoE4R6NgGSC3DGGLPcwy5UafQQ",
  "key34": "2zWNvCzP5wpgT3Mn5UY88uoSjGdG9YnBXvEZGkrfdBkXLypMcrHiKSGHQhb3qrqqhFmKQRNtoSYsVcN2dH4kSRaz",
  "key35": "f6Q4oZ5XU6Dv2X4mtYF4JvH2y59DquRVirGtGppxPxbHATWT3opjRMS7muHHFNDUqdYEsjzP9ZvuK79NgdwXusm",
  "key36": "2rQpLwVSHCJcoCuiwDpkLq9vqBh8S4wAm9qBRyhmyHzMm8rrtvHABA7Eok2txc5ppTe7A8rDutKJCBTC3ZU9h7kv",
  "key37": "3m7aQjsJximTQyTQb3r4wxcoLmDhkbDh2FWoCUzz7cyGLAaUGEpUc9KQH2schdccgBfkeyxoaMYCUUPnk9UXUimt",
  "key38": "57GTiRP51EvvGnrA5zPeDMMXsy49MxEQyjUh6LL5oez8CqPX2H7HohdJoi64qJbJhHMNTm2Xxvj6WABUPcQ8Jbnw",
  "key39": "x8FbyDcfptzDa9GUQ6QKqrab9AKwFSmmJtrLtxS8TCqymyyuW6jK9D8WCrdN95Y5XAk4o1r1HXdTFUo72FYkDcT",
  "key40": "5rbKwU11QWRWmXmZxUWNRwgm19W4g9AeFoEyPFnJyg5159jY9hDNgb1JkcHxVDqPBZumqcAdh31aGxedJvmVhU8t",
  "key41": "4xoYzDva2Ndc8LHpCCwSrCAa7RcgQKqCt8fpcgGyM4iNtW8rhmHazD4pHGCxEMoc9JKqYfvmavmAxyxWEvaEMvqz"
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
