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
    "5WsjsxGtTKpGnV2GB9rchpyuue7MgW8CESWD6y2YgYFPcXCKKP59X7qfZ7Hx2UHsRC6MnVru2NL6xfUgqW78yjPz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55jSPH5FqyJgJTKTTr1CTubZ7V7pTr5zsxQpckoT7Yc9yknHXPBRFFyWTuZBUHhiK9NuYyypJbBmhPj8qBmPJXhu",
  "key1": "2LGoKejncyy49phLRWGpRcr83MqbpBMtE7x4Wn1LFv9XeimZzHgaGBv5ouoWBWDdT31EY4HmK3iw3J4oypTDeBwx",
  "key2": "ami8BcRwufLrpFJGyhLkLWDmJbvo7yqehpXw9RgBsQoDThQQjGvccvY5XmZXNUfmcEWSSDYXcDjXyHrLCgQJ4wj",
  "key3": "3Tz9F7wytcFmfJiogVAZPf94ySdj76CaLbQ23yb5vJg3abEq25pNNojV2jC4r3mKBR782hgWsCqBoJ5avQBfPYYA",
  "key4": "4QYiMhjfTEs1jijtzmXPHJaGRqWDhKMrFPgThXD2HbD12iJYhbNi5CvD6W51sw4d1ZzLC8jL3L1j7XKPFmVCPVF3",
  "key5": "36kHjekBYuP46YLmPaWCNJyovQi4xFQrN5h4v4dRUd8Yu6X36MhahVtzzzG7AiCuseTtH8VpnpAyVFWbTZcohFj7",
  "key6": "4X4vxVTDPVaJXz4GJnLUmYnhYhayxnXWFqu7hbvFZpHSDLp5EXhCSTn517spKmnbqHMAiLNGJNMh6MvdFikARE81",
  "key7": "mnVzWj4xT8qdcHBnPTYbgAQiTgKxarQZybM24sCSqjJMw9HCsfGUYB3HZpMPKtogXuio1EFJ4UDMCLd47jGM8eh",
  "key8": "5bZPdta5T5p9TwsvaaBTu9xqNvL6srLo5ZuYa6ESh3jKDozroUMqgKVeRFRtP8HrSjJcTh2paJTQVUg7ahETA5Jm",
  "key9": "2eyX7hS8Jq9M1pyqRRtWfBsKrtn6XJZm7bYe8c5rJcAkEQG6f579b4t1CaSGAwGMTUyjnjfNFLf5YQQ62N1WHXth",
  "key10": "51T5z56xNwRxLsAxAVzj6TMSrdJU14K6S1oEis8GXVCh29ZifByfyfGR1MMvhNXpFAaKHPgYr38YHyRwDg2AAyRn",
  "key11": "4AMpnQ1J3QuHc7xvADQ1dBxCRnBkDUeT2uBFYdv8YrGCATYssv2nuKc1fdJk1Nh2cabuNkUm4WWqgkN6GykxC1qK",
  "key12": "5MsrDnXezmdxBzdFrjwSJKNpHcMD5xrLNKJ1coUhKJX5m8Gwj7gQA8weXNMrDiMMMVaYiMAbPZ6N5Km53WrUTHMn",
  "key13": "4FTPinTv97wqk4p87oCZKKEBQ1CDF8cxLojht72txbwUfnitYzzAQmnAUnXeMwueCyx3C4KfTCaXJ9BsEjjB8cCR",
  "key14": "5x7EmYrPdHP2Z3CgkLs21q6bmccY7dM9MedJCQc1NNYADjAQp43SzfiXmW99xKKi5NpNQc2QV6AHzyB7BPL9jedn",
  "key15": "4Lts38X1MrCBf3RWdd4aGT5bTcuijXBNqTfbHNFibU1YBpqLM8BMXY5MfPFWd2rP8DfRAuWP1ECX8aRZDYZYFStc",
  "key16": "2L7gpV7NRNNJ5Ab6DaxmeWiQxraCobR3MtsfVWAmexAztdPzLaHYG8KvCTgxBKjZqGwagtNCmroPVJmA4h422rsi",
  "key17": "rsctuvheabGEms5GGzzPcLhpTG7eKRy5RxqgGnt1YknVVRkbdVqtndkFPVWsfhZGu5E9umSibzEoECWEMimrpFY",
  "key18": "2yFFSdS3evsr4PYhRmHTCi59k4TTAVToR5xpPm7CmowBNK3qpVo349Z1YFWzd8CT8u7e2TNcfqYViV7JThcYhEbT",
  "key19": "5nh9S7YBq5MQ7m3NtTp5KnjcXL7BADiLgbkHeGMGC84CCBj2yNopNFi66YtRbUfeuVqvi4a341njJzN7myU2ha6B",
  "key20": "4v1Gfa5XV2mtmwdJyFQUmK9T1dM6KxNV27reM46sF1ghzgbZrWZC5bWN3j6fm59QtdiVuf6UXY8FxAdQZ6yWPQtu",
  "key21": "4fBmEbMsUQZnePw7Fwj9zitY8GCVEcosiqp9oMCPod72Pyvnq8yQzSDCMA1gVKDgvUfpwxS3HVsyQEVQsaAAetjB",
  "key22": "4rvjTaJABT9iGDkkKe9bgkETHkBtvGtdTx7oZfiFgg8hHrRZf7DqDXcDJR8YzmdxqS9XsHTigjwuPJ3xuJW43cnt",
  "key23": "s8z3xH27g2i5RvmQEy7vtNLDj7T4PNEDf1S6wkkrNsoT1LyTzPikaXj8k7483vGgP6K3jeFZYY3TUUneBqAYH2u",
  "key24": "4eYYiu6rAxSeyHqsUqCLovxULZpWgrjsuVVhMhxDHUiFLGT8uXUpWEBcLtjA6zJ56wQTbxQN6a4k8KuHozeqKJ5Z",
  "key25": "4hQW2XTF5WGNjzaaNa6c3EKPqQ45QZ4WRpfVjM6nHqKFX4gi8W8YRJMyGQknvv29HTiDWqqzeq7Ss9iSLH4kqWkn",
  "key26": "66XeCoebVhfk57ne7hJK47auyT73KYReEuy5Du5EZbHBJnGVzYZjrxjZMb15mxYUCtEj2DRrndLVw2cTCM5PzE86",
  "key27": "3hQYA5niNikofxMMvyU7wLSq2ZGgq3tu8yk5Pv7LE9wQ1VrsbrTPtLXFZFM3uirR3QM1JBqUkg7XsZgzK7v1Luhi",
  "key28": "2abEMEsbSmeeFMbNfQ7vJ1TQ52dUu8Ar6w1JEr1gvRJZekTBYUHZvmaRr9qTLzNFVrRTKp28DrbsEPQJaYicrjpu",
  "key29": "522yRQkpQdg2pqsQ6j8M3xdWeERr1gErDdgnC3GGx8qTTeCveGZPA6hAgQWr1YQpYtWLwccHFDfnvueizTVHtMig",
  "key30": "27L384YbP4jfB1BoWQzn1iufkV3DEV3AGkFTQdDuoKWnmYkZnKxymMoG7TMrNHe2RzHeAt9J5SvL6kMKfDPtnCTD",
  "key31": "4cvn9LoMPDLX7MTD18QhqXPSrD1ekVm1rWZgnJH6yxbLPTHGJHcxwXLHkoMWoNXH88DMEENMX8y186wY8BVmiGCo",
  "key32": "Vg7wowrnHjVhkUL2HyzQiU7UJYHaLuLn6YHYwWqhCpRkyk3fZ7Hy4HvoQDAnAi2WZAN1cnxpfTxbdVtdgg47HWk",
  "key33": "5cMjJGfNak5wrFKbQ4vqKCiY98zpdHPbXbSbzhtQTeK1ha5s5NdNfyYNi4sYDUyA5ZyLtFMCvk9Qhm5VGUGh5Vkc",
  "key34": "vtR8DUAhWJUz6w1efk7oHYnzXKbLcw4Qfrvb3pTuQ3XcCREmnjezGt8uARt6ENWmfKAJapnVWAD52qtECjXewHY",
  "key35": "398B3UefY9mn9gTcxXuhJBpi4MntvL4ZWxe9fPW6FyMT9WTVCfbg5nEy4jCUgGd6zJLpXxX6QrTKpupczz5eFFTV",
  "key36": "5WCV7MUPF2bAH9J8RXrzyyvJ2R7VvMDGurokxtdz9GKixHCxZEheS9W8yzcLKTLPg19ViYRm8fxFNLrRryU1ynUo",
  "key37": "2JQuWXj5spDDfrZWRdU2aWhGmQnkEHjJdv6o5czQctuBzZQxk67q4mArdLgf6UEgfK1XrdWnGYdPiiERufeDyiXh",
  "key38": "4fnwVm4rcPNYzZHwTzYfD4ygb21cA2KqSiSNGLC5PLeRwiUSTKBQgsZXDpZMxPLWZ1cF1xEYR6ERtR514daaC1QD",
  "key39": "b8m9hg6sZVuG6d5ABEuS2jduaSnsiKQQZ9B8Pew9tfBkfFJSfBukqoaw2YisQ4Hjo6Vfo6XXTZpoCCyBeQ8yA3N",
  "key40": "5ncnaQXqTiRZKTgxNS9dEWEP229f5UCjdaAjEW22QQRNVnzsF94cNJeqzXvW1VMZqMyF2tioXLgZvhwQEhDRETPq",
  "key41": "4jkk4qpg81KdSVUPgyuEGup7XuN8rbEGDqrmoho7mwdMturNjhzapADpaL4xtjb6tcTzUykvAwAv7UyqWuDt8LCt",
  "key42": "3Kfc3Go68n3njob9Rzc5ZH6deFPTgMrnbJcDX3z59aqBxAUtkUiN8Nt1UrNy4cVqcjBSRqKt9V4uNQCitWtfqSS",
  "key43": "63WU9442Nc2GyVM3LKXR7TA7D1RTga4N9G1WuNmMrzBp3x4EHSpUgEW8UpMgDSgP7kLhfDppjA432UxDL6JybBma",
  "key44": "24HtESMbiaux1DKe54ukxGsMtqRU4RxsMRuRXuCf5JA9maCLDTcujDcs2bcRVUL41R6jQ34xFEywtn9wYYijKXew"
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
