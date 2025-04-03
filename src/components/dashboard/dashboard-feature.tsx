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
    "3Yrya23ecJ8ryg4Hw8LDoFn3y25xRhwrgEZ4qpLdjm9ce6XGw9Sajh6ugxPdE6cq4p6wKrK4APGs8KP7Ht3EjqDa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dPkRrbay3zxmKpD4dSfyDKoZyDrGRJ9B8KZ2D2GoGC5ifJ7Z9Af176QRGHMDmBTeaD8dhRjGH68q243z746PTyk",
  "key1": "4QGSrK8gze2XD3FyQyzyaGx42KzErjJab9Qe3FpKhEFXUpS7bqzEoyL4BR4MrBNsqXFAj1kqpHveeLGkX6qHicxB",
  "key2": "3VaFbpUcnDP2kfWsP5xbza3uvih9guoHWJFrF2HeGsqKiRCoKSRPGK9PMrqLYtXcUbF1pExe57Ub2TjWjQbYxjxX",
  "key3": "4ncZAEFQ9sLz45hpPViebjMMJ8wcR3SbEMFCzQjMR4CV61m6QmwRNvFTpem2iQifVhyZGYKqrcWxjisANUA6qkCP",
  "key4": "561i1RkoXsoUAfqaT4rTpfBh4c3brHyCetXqHDveqANPFgwKAZReWCTJwpT4gQTX79HdvhS8RQ6xZ4juagzQ9rS9",
  "key5": "NEdjf9K1Yiaqd5AeS9kQFmeBzJVimeUYpxMttjc7Xmg6TBhybLMk2UuugzyMp4QqnB81waFrU9yYhXxWm8kUzhs",
  "key6": "2TwveasU5DD6keRHXGNWUXtmMzbxPGh9obUTE6dNqavEfVMuLG16kohV7kUKX3B9JnQT1FTo3oyaJFyZEZ66qqLb",
  "key7": "5eo5ECkxceVfrCC6iZbnb3N4r2U32qx9PWM9RGHvwYT8HMjh987M2jdJaYDtrCQeSDqojTwVghjuRGZfH6i9cPUm",
  "key8": "Ht29BFJ7q8Br7pXNHbkioEC1auxX6z4EcLcBUnq4BDftxZzkeruz2aWxFJzyXKQR7W8mejnpojMpSpJrtky4HEP",
  "key9": "4DvAAe9M1DiMzV5bx2N3HM1oas46RDhk7K6Hu8NUpoJnPeSxoTwKkpyAEfcRSJbNomp3kiBD85X3ZZzpGjfjDB7q",
  "key10": "43CYBYosKAC2pQdFBhe1DRvkEZL5TaXSQvEYhDSqfK2V9tVH1Cbp5nEpPGHLdS6oeVgQoi3VWqe62wvpiTAePJ91",
  "key11": "49noNjhUr2iMmdT86bc3joQwFMD8frkm5xhHNhSgs2XCmEBBszzirCSUjktUCR4aepcBB4mJqYsicudEej6uGVYd",
  "key12": "q5t4cDCbwk8ZGsm1Ea7y7tB5xybQmuNYpRzLUJPFwTqvMiRuV6qYFsQfMCXvFnqA54QCyjQ8pZ82A6UFZAnJfnA",
  "key13": "2mjxnCEaj3WeUgxMWnVYpv9bA2ukS1oT4812mQVXLrt2eb7qw15e7HtxmcmLEWRphxuDcnjJpmuqZKTgBCpWgtnK",
  "key14": "3fWXN9rAoNFr7VTw58LLEZbbPUBprm4e4845Pned2nBj8vd9xojf8hqVNDsEQ17AuiZSTSMEkejuT75zf9C9S8jp",
  "key15": "DNczKJYuqrEvfPZhdQRN4JQXoDntEMDyTTXQEyB1EENKREzAFehyfCSoy2wa4mBZ4T8gu47e8BNgQbw3wtpzBNR",
  "key16": "5u7sa7zZxiD6oQjsW1XwsJYTLcq9SaCdHGboLBhXRkZoqaq8uLaaNBvT34dWD7JVd7Y9jjoTTqArL3dTY3i8MQXP",
  "key17": "j77QY6rQ6sDCYGnfSuhiYfLkdQkssTbBj3g1e5pZa2skziGvHQF3vaUsAB6HANDJiBQ2kG57owhmv4JjcVdM3EY",
  "key18": "3RxS96jePJFVR8PkqQAqYT7b3RL6jYjcVsa24k5oostTRDjiZijRxKqD9JiuyVKyMXdbnDKRZgp1uPaQBQsXqKhV",
  "key19": "3bbhiYPHGc9nsmTBVLmvu8KXirUv44HtEZG9uVgGBvKxb8gZwnKwB7PTETxKhLFswqGtXxy6cWJFZLoT1LZ1NyZm",
  "key20": "5hJEhVUS78yA4A78UHr2GEKYWUvHqPs4QzPWjWKW4UTFTxQUGPRLJTm1zCNyRbeWU1QNBLjp8spmzXhgio8SdtSH",
  "key21": "2aSWpDhkLdeX13stzZ46Wqj2n61DeEFTogV9zgfcXgJWfB8aBAvRx69m3Xu2hvHXYbyG518JiHEA9qWqwmv3PUHk",
  "key22": "52uyZhRiX3RzUyvY6KCoMMetAcCDUf5TYxyEfArNVo3nwPxUmwXfrqnVnKqQWhDHbxiSqkoRW6r13YYz2bWmjMcT",
  "key23": "2dQLJE52NR264RaEhvwh1bi2zpr8GnddAic7YbiCeVXo5JvsAXF4Qo1B5MpeYyo9pbLc3Cg93ZMsSfU9kPoTySJt",
  "key24": "wT3q7zJgjbMjzSzQh133QuczwpdWqxogsaJoq2RdFxSWEhqJfimTK8ri17TNWzvNUs3MbSbbo4jxkjLfQCAcZ1X",
  "key25": "3cTSofq5UoWmj1FxXxTq4M1aXDWmbdrmKxCPL8UKe7VVhfixtz9k2MPP1pBTNisApQ1isUE2geYAjLtqWxgzdufu",
  "key26": "4uorygFw2Q2akZTAAq6RamzDCrhtojJjyfZqxNZP7DcJERMu154ChCtD8t4wf4AmFgKvcuyy5S9gEignrfodBwm2",
  "key27": "28AjYT2QfRtFDWKHFmrGjQHtDyM7m8m1Y7LrJXnm9F27ktT3ViYHbRS5Q6nHh6WS66HAy3EfXF5HnntiupJ6uLnj",
  "key28": "2BHEWxKKAa3QPpjb3aSvu77YMPUiB4vrtUFy1izWFz8ZPRFntTpHL1Xw3RrcFZkRPPBmkLKKqVm5bsEpQsBT3XRq",
  "key29": "3eYmfDD7Xb6iDeT3bh4VGD3QLKotnJx3zDmfRMzUDt7eqmovbKrYYuZCqpNCA1KyJNwrSqoJJn5AcSkPQjSXWoSd",
  "key30": "5C3fozssXWTym6PCyYjoZgBKUo3xrqnLoQWc8A8QLYW2SHYFdkFAVUi5ZsYeac3PeiAfeWjYzPvTpB2eozMvaKZA",
  "key31": "25RxFrV8wAafQWM86ZQ9oxZ6Ty41gJ66QL4rmT9ZNezy8A8hCZ5gnEvdW9dHmWD5uhPd9QGxJuznjvFhPVJ3GVqu",
  "key32": "3Q2r3FcSWwLzf86cuTRVdAMEYE2GiiLn7AzXLPxbae8LWdPYJBPvXx2YRUigFRtJ7pYi7GWkjG9YYZtkgECcQHT6",
  "key33": "3zPcJgWQVUxKpUmXCehnAL1n5kWXHyXtvjCdApoVDJcoQNMo3aKMHp7gGAaG56bEEJZLtQEskQhY1rxTBPg92QvL",
  "key34": "X8vqnuzyfMtQYta5EwbCEpzygjoS3Th5XnTHMrAvdwuGbqRC3CteDem8z6rteHTekp6BLvLb3Ldh56mJrS9Prt8",
  "key35": "35T3RQxf2Jxk2aKc57crcx5iyHLz3eNK3qdP41xZxbCs4yXhpJGPv9XkRX9wypbfTHyfLfGvig3REcM7bV7bdLYf",
  "key36": "3QMiyjvPgNQKSY1xNPSJm9zs75FQgjqDmeGtQdbdLqLEqCq6h35DPGrARdFRugeqPBTk8ro9LCmc1hwjoGLKWtL5",
  "key37": "2JHAVifEiLYQF5L1nieDRkdYvgL1DNcidEMHsPYipyr2r5kJZuPR83C4MvqJdnzoLx8yaqicFkbc2t378sqfTkZN",
  "key38": "4Jum7Xq2msbUZAxP7qfJFtkrqzYwpUToU6Kufq788MaNqyPgBFyp8BTJNK3LBQpxxm9frg9CLz4rshyoxmkBxcvR",
  "key39": "5doLWHrDdq8SAmLF3avMESG4SDJqvkrnX8N1WkQ2NSxe3iri11brWcaEFrR5QrfVPcAbryffEjKeTAHTbC1gPHV9",
  "key40": "58UzFev1XXhkio2TQ5vQWD3TBtCa4pVjyHQ3CXgDRj5AsqV5X3iGQkcPeEyxGP8ThvSvpfiT2FxcTzTjPZRPG2Dx",
  "key41": "5qH4gziB9GxVtvf7C695xCq9BnidtpQdKnFvBpYD7UuGZo89eNfzEi3XVQVbQ8x14ouYYq33Uw3huCviLLohdDTE",
  "key42": "VctYChNAx1n2bjhLghFrubyJ28vsTBWMRFwpvnBa3J1A6JKr1yA2W27F1rfSTYYbMzkBXRLPYWUo4wDc6t2apFW",
  "key43": "3C8H1Abiuwq9P8PzmYzsZrwXoUcDEjuUFFN4qiU9mg2s5DhexBV7pUYbMgAEobGDdqLgYVgp7P4CXwPRCCMDLcE",
  "key44": "464J9MZrKTpx46ftMnmNE8xQoGPGXmDaKq2KLSt9vhsndTj1QraRdZNrFnSDXt8g6bYHg5pYL8sgPX2KZrcSMX8M",
  "key45": "2e5v7ewERYypp6ZybAyGE3HCXwh7k7NphaeFfLPYmrMAwjPtejd75twTZRmVkgojqcQ1gkovQkTSmyZx1iaaBrTh",
  "key46": "ooowh4CjEy2xYHJ1hAH2gYLzQNbjb4dQ4rSCVBttASKq5NsstVG57d17pX2ntaTRyKqrgDg48BK85VgU47LF42t",
  "key47": "5uWmUoCRArayKQd3VXS4pVwgVXJ6W5jJnz8YJmMcruSAqyLmdwSCnjdRK9t9W9ySEs2kM5fmB9fh1XKjeu4hr7x6",
  "key48": "4YJwNz8XZ5JMF4TEztp1UNQDEGchcSpqttt2WVEAazwK1iedkKq7ge582PvMkVv53urv6WtyLrk9MaC5tUCHpbgR"
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
