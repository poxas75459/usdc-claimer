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
    "4bULNVzxB3trXXqDZuzERD3bzy9c1ZyQr18cdesCpKbNcjQFMXpH2btmJ1KpKAiRXX7XFSDMs99cS7T8YhnxwKt7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "piR6fTm4bHiN197dzkrx4Lb3yMgcfv6N9FXdGHskoxcK6qt6Dp9DwApYc8wxRf2DPSbafebzXD1EWHdD5aTWBGk",
  "key1": "2jPuCTCt1qxV7ksgaAb1XhEzJEqHT9yNuGHGDTUtsePf6ZPJaSy4r9oizT5rf8bCykjbGQ5r8A8Qqy7Nrhpf7eY1",
  "key2": "3EAiktxVSGhxWiiH11z4YDZuZFm9zdgqHZiurNwomf2ZKY8VFSE5Cf9S16Uvc7NrEP2ZaahndudZ1BznTTuHe59E",
  "key3": "4GyaYyHa1nTYiiTtvHy4b3fWYYgVdyCZvVb2fBatcigTaA7iTjbjkKNtfUeHGQxymQLQhQ5LjPfZncWj1aGYAgSm",
  "key4": "5NB9X9QErj7m8coyF34jqJPhuJyVccKeVTHsyYHH6gwMjkcYNFosnNZoiWcVXMG5h8NG5xE4po2bVSrhQBx4op75",
  "key5": "5xxRxdjF1KBAprmxkjHGELrEdCiwzVqt1AaJU5eNRzV9Lp24QnbfwU2WtkQgZcWPyp5yff7phWdKqATcFV1bEN2t",
  "key6": "3pQwMF3vADzxgaCcxz6rueo7TmFD4YdBsrEqnwUzn38dHASzSpzrst9fBWgkVB4zcZCyzjxiCwpKKDMFy4KL84Gj",
  "key7": "4ckWTBFAVCovAwYLbfdd7khhRiL9V1TiKqfky3mNebZA7bbd7LWwgc1fqc6mjCiJQhkthTaBVxNvPd66fufCxt4x",
  "key8": "2F4UGHN4kUovogKdpJ5sEu1Kk4S6LEU26sVeiBGzKvSAk5RrzxnD5D5iUs8X5w9Qs9KFNxi7EcYJBsGZNTzK8zp1",
  "key9": "4uDXuKEfpaM5SqAm2RaBUdtoCXFCGzGLc2pi2svxesFXGjxMmNDcqKaTMrMMTzdAdUnzaVYGu923GAtrtbg95FVD",
  "key10": "44QasAH1joq4LoREiLrBpfcjvb87a8dRYMnQ6KqxB8W4U2bQJ5CDRo3T3bgjVp8J9JRHXaTskRmAZ6bjXCAR8zuA",
  "key11": "4wnGh2BXLUnAbPBXWcBKY8EbiyZSNpZo91L52NneKP8RcXNg4scNMjc2GAhQ9Jy6qrCPihqhCYkiiDGttciWZwJD",
  "key12": "kaCkgJob7vt7YgZKi3RcTzXFWTVS1DyQsjuFzTdNMRLhTBm898dDCqvN5wmWgtrVzrqs3fnydTy6K3znzLhJ3E5",
  "key13": "tLscaZNCqYRnhXjULonzLNsjnV7UQaReyRAFa3UJw8fNAzUb7JhxBP8j8iGoyK5FFjZmuVUhEkxbGgf3MJiaNJB",
  "key14": "31Y68fN5X46rTp2qN86qh9XcwmsTm5xnky41CaeHU4TYgQA93LMMuX9KatRJmHU8Bd6smDchnVKBCtSQz6AHSqPV",
  "key15": "2g4p74ZLNwB1uRvAEvrFb4hztsRYGDNRQw6FM1ea1AYurtq5ckau6q3qqcky1rhsjxqsoi2EZyTSGSJR7yh6nkDD",
  "key16": "3MpKzbcuMBKCn9jAAWpWLg58CbAog5eWnzYwYpCKgELRm9nF7KKjVA6Nn8UJFD7Hd7YCsJRFu1xqFMSpvbyuWtVH",
  "key17": "4xx52giGRbGfcWFmP7q35JD3Q5hYAyhpxaxZ5AD4yYiRGEVbmeNGXZQBJpcgKybWFoiHvdWu3K2twVRf5JZTzHeu",
  "key18": "62XELuAHBa7yR1G6fNAooNzFZ9K3jHGj1G5irf6wURdi3eTtmZmfebvrrHPiuuqf5Qob8Pmwn8Cw8pyc8CCn2iSB",
  "key19": "3onD3t42Fw4t7Wu2nCJpQy7vhkGnaFFBQsHdf8YxE4cfr4WYH8PGPggU9vRZ6WeCr8BUoUjBKW6MEyqdmCcufUPJ",
  "key20": "uE9mPmPxPbAAN1tRSF7MHVXSpue7teGeVFuubpGWtpdYwTfaoaFfU224rj3jiE7uiT4z2RXghNPcaygVoASHRFT",
  "key21": "394iFuXYwGhbBRcVEp8ZZeccoeEjwmAQZRwmLcnkLWtJtJSkcgJ9zyFyizaiXFc1T8ejXehhH3huDtUjQLB1TuVD",
  "key22": "3XezLCRt91RK8Gbtvdv8GGsq7LbxPgTK1Ji6LmKvLt64phTv2UKqqWWfAfWXSDnHAgB13EAszkub7kFATqHdU9XE",
  "key23": "4AeAfdzrd8rSLmPp1CAEoGWuz3RaC7jUvCSii61aHWxAcaLUNYYmC8Sv6Bq7nCfYxy7cizS3oe8r3XtGLTQ2BA3v",
  "key24": "fgKdreLab8YhtoVpSfquk7Qhu1mnZFChjqr3V9YCdppNAhjntM4diBrxk9WQhkS4oNSzYmrJixnXkQQp5tqS5Hr",
  "key25": "2RPa4rXaD7q8Zo2xiS2dQEBe7MX36XGqP3B8fTPbh2fY9suHzPBrJdAQP5kBmmqr1uZ8xGJAoMhorLmfqFWMAurH",
  "key26": "1TJNBLFrjqb5MkWpzpuiqobqLWgupQFV4LDEhZsay7MHUoT5ZsXUd2n8Sqkokt1RLEn3ogqUJCKFAbCo8EKa7Kp",
  "key27": "4KBD4yS1LymutZ67SfPn6NsMLmWGL1SgfZdZpZAD6BzMHhQnKBgmVrbcyUUHWpzzhNi5MGyTMXZFtsT9bkSzRtC3",
  "key28": "2yKJqJHVANVy8o4fqyeqBxT8csy1tbkfoTvQZ1UvEmL9X6o9AERi6aq4gTFsAJM3t7NFsPXatsPxf1w23tiwoc7H",
  "key29": "jNH1t4YcTqHgqjPSy2n8gVbZuq6RRV3eunMdj7W7NJcAUdru7hBDUH3REqqW7JiWngAmdUpanBUAfT6ACz725W2",
  "key30": "2Uw4ugu9Ni3CUbh2ikC5yGrLJN1cVXYzMbJMxkeTHepKkpu6mT2ARG2pfJhn63w36nhpAA4ShptFJhLaBEWvFJrK",
  "key31": "QmDNM31NzcpC4k4T7CNcMTE9hLpZivdYnsCiZfnkeTdkRWKCmaeGCE5F8otSbLNbTw65CAyreLhHfmR4WxFKeCB",
  "key32": "GTRXE9xRFMkCo2kjArAaEHNgRFfQ1UzyJCaNHDxF813p194gv4iJiLzVsvTBYUvPyRjjrEpvrf6PLhByJF9vWF2",
  "key33": "5ZKVwP62CMWrYdShMQTjmzPJyt2aVa94vMa9gqbazSJ9HfCBWBwQWRnbLD4nfSpgwhdFPjR7cqJya4SuQD494Qyk",
  "key34": "3LZG1EAJznY1Jb1CqFDANeT2s2nznEw59EcKdJB1rvrsenZpqRirRYwmkv7dL2WkmQtd5JkCGScqU2hqiYotnBYA",
  "key35": "4p7w4gNcxd5fxVv6yZUQjgTZMf2jsaX3tJkZbRTY2AYgVQTs1LT9M3TdSAUfLRjL4dpNzYjFurXzka3WVCvEsEGf",
  "key36": "4xF8LCc2Zm3BX5idgnZojSbpTei4UpT4QKzLafMyQ2gFhphNnDsLzAEpzi84srXSmR9nWqvWQCtvKj7F4LLgk21c",
  "key37": "3PeJcf7VvqbMvJomQQr2gpM9f12LkyAPh8Np7qanMZK6xo35szp2SYN1RatgHyuZ6T5XSYJzNX8441kY1XxR12Lt",
  "key38": "4Juvp9yyAkiSnNxDKrczCsDPcRWXh9JxcB634HZYYxJHPgMMti1V7Cd5bVknwSGW3ZCmM8aQt7tevWVj6RA2Ks5f",
  "key39": "4YGSRJ9KVpALaLVwzHDYo2su9wrf15zKekcEBaW4FdvRTHkVqK7QyUPKK2bY7zFrcHhtCdz6K2sS6qT7Ev4vP8qJ",
  "key40": "3dkG6ELLYE6De2eRgJcC8dBvdLmkKD8X3vAv9YqgyRLyqg5VcHYbTkiiPMN8A3KyTxUq9K74qdv4sL3xhkY9F2VX",
  "key41": "5bKhmGLbYAfzrvmeQSYcS9Uz8Hp3EvT6FZ6Z7GsDpq5Zv7KU1ovdEbzta5V9EX5HAHVMCSQraCdHwEKBhQhumyzr",
  "key42": "3gRRcrbEMygcwgqu2dAFxVhAG8Eb1vsrbofHStpd3ix1G42qSd6HHtnMmeFjJP6bjtQATk6Z1ckmgTzSkmK3uifc"
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
