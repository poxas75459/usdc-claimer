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
    "2dpz5bN1KTeEZBijvmHgiJ6fxNXMsDJS7rzz5cReXf666oyJ4kD4yY4Dk6VbFv8yenA65cwjBSeqDhVhap3PT9ft"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2at88VMRYAsRUPLrCoSwhaPRrxXTRLoBF27wNkJGUzV8NRvBNBUZbwFNAH3wRu6kL8mv7KfnU7u4RpPeUexzp7sN",
  "key1": "4Y6HK88PComMzGC75txTc2NKbumceY7AyhFAhp1h1YwMVieE8xUV1pcUZ57ZXWZZwvW1nvoZPZdGou7jpfCbvmEn",
  "key2": "27pDLvrEr7DDX5K7JHwpCAL5awUFDRwDrWwaXreGfw3hx96j8W9ccqcTQoz6HnDDkFnRJP4vA1Z7XwSYr8D2oSHz",
  "key3": "4gmhuCm9bb9yBuvnPvaU3QXAYRazGKMZWn3Noi24mQbd8rHzzUiYJAiiMxddhGfjVw216g6Lt4AxTQqTNQV5MFRT",
  "key4": "iBLxZvFD4em4b7QRcBJPg1YhYiN6Q6VqwJTzawJVjswKwRPPnrtt5zJhhYiXhVa6sdDbQAvXffhyTsKUs7JvCJu",
  "key5": "2F96a9rQJ5YxMCru2WCZSG2LdcJ95LP8FLVUB9riwkkUwX3exYK89qGLfeEDT5QFwuMpxSx6navJMh6Fwwfe2Cvw",
  "key6": "5DcBi6vrmgGjDtWajgqPJFhJF9u8rEaytp62gaiBRYn5UVe84ZNLZfDNifBpMwqY6xLVPc2P9HkGUrLiQnpn4t5t",
  "key7": "411cmbTGgV4eSSLYaYK8gK4FoopKpst3Y8bfJV9GPi7E7qZzbow722CCkRoV5sgTBmfsFxpyWAToV7dhTonJv9t4",
  "key8": "sTAeRw8jf3jiQYwFHfD5UeCZXW49UA6iLxQ2dr5pKgRyXwhC2a3rzbfJdNHxjetjhPPcPDBFnTYXY3mzpQQtvGo",
  "key9": "Dk9YAVG6Yre9Azpn9Gaw7e5ENRXw5gw13dANJmcm2CzqdbhuUxtCWnrkVe11sbUZrBf6CmCqjJdLuYaGkoKBUjW",
  "key10": "2Eq41vkBGoxFP5RWT4vMDSftb3vx5RKUxaSwAExZnMZHiJ5Biz31MerihgQxAcsWWUL3NbXGJrSaFm9RKWHgCxAw",
  "key11": "BYNqPZ6FCHKnArHE5cSXARhKYELAivLKY3dJSP4F4DTeNUmPWxaEeQhiPoCtR4kn1wQaoK2otyzAGERraCJJDox",
  "key12": "2L7LNEpqzYgoiR8SGC3KRX3y9evfaG71TvYenbYvrb5TskD5dQZNq4ycPgpGznbkRwL7zznweS4etw2f26QAK9AV",
  "key13": "JSByNMHynk6esBzWXps5pKFeS9PtxdzLiQRzWmoHwiTFrexxU4wPiXzQ8HkkNK9MA7mFgLCVztctj78cuhvo6Gf",
  "key14": "2korDGSQGyNk5wp289LvYKcsdsVYPybwZcP7jCP2wjEuM5oMVY1TNop1MpEJEUfndp9u96QrA6oav6hn1drCeMNY",
  "key15": "4gWKfNHBTrc4GY2D1QBhynfMBZXoq3Sg44a6nsJrnvwiEtxxC7tVbGLqM2kvAZmUTc8XQC4MCCB546Y7ozX5gz6C",
  "key16": "VBoe5NvA5HQTEFzs53PVqgmYavb44AHzme5AePvqNLV4BUxwW3ynTPZhd334FCYF2DEf8kHWBsaKa9tLBRjaf7h",
  "key17": "2vM3nKxwHK8vnHB14KfszYGzfthVcve56tYcGPpyGsBfNde9HdHigk5KmPP5ZEQb6fW5b5TAAKKFAmeUoz6nMqX9",
  "key18": "5jfnZ7v9QFRAMWwRuwbMa9Nr2zr2dHb4rwpgyHrztqbN1eSrr2ksPWhkFUrwjh51SNJtBi7N3aoMTE84Dx8fmwn",
  "key19": "21ZR6VdCWHYeptnvXJgzRaA4hB4y5csNVSTmqMCfY4z5tDGxNJPQrBVwWkGxhAMhuhQN6LF9ocw1D3YVZsFTL9Bb",
  "key20": "67B4qBVrQpf1iNJwRo45nC3PZFq4FpCX8UnqpVNVopR8vYKChEJMyYXqjq4ZH1RzhNP9ynj7djo9pyU17QM2oJ6B",
  "key21": "2DiE4PzFowCFLdbnwNZ7t6AeQ3rB725vKsRp6L1LLsgc2SSNuyNPNi2oNafZg9VnDPwtRRrTs7F7TWX3u7d1H5vc",
  "key22": "36LbqPYATMgQAWhjRiX1M8BUBsdbhaDA8oue47iwCnWcVw3z3LNXUJXS6WopqJ9eS7VksqwbW2GWVEWPR6VFAhaX",
  "key23": "AJUJpCE6uEZhEeFeVNJa1cP17wJyWPYjtaRZsXLDt5PDX6gfyLVYm4RC9yYFA4R6MXJkkSN5mtpv5nZ2Mc2Kknx",
  "key24": "5FddtJfqQyeT11urom5168MuYqv63hYwsZ7jPbCui1akjQHpDniKDXtQmvGp6yhWu8C1TP3pHDeSHnZ87D525rZk",
  "key25": "4AF1PYsVwSbdEbjF9wAkSmZsTziQ5Pp1qZmZcNZaLMU2kJgc8FcsrTyP8WCw29R133bQnu41P4NpjHtrBG2v7Giw",
  "key26": "427euporpFAUrrePmby8F4c8igfu8m9cGVYDybz6koQpTo7W2Ws4wxwZTZgENZrgtPokaETm9YjHtxKBgNtvHrzf",
  "key27": "3apYP8raDi4c3VSfx2s3Y28yWCnq9f9aDim985x8YUW8dWxmLSrqCbUav6xQHjXM6uE7kk8ML9ykM3ktfkPs6vR7",
  "key28": "3w8bQLqTrikJ8fXuw8HpC45wwdUJWnC49d4EdTdrXoC1pjsQnbJgGXYh66JwhML6fwyCUNmdmEYTib8UxbsHm3GH",
  "key29": "43x8cU8BdZg4qTjGbheBCgSrzTAHbQK8DQ24PpVYcqqFTdM4dz6DivMCjLxxRk2riaMSs6ACJFeYwdVGuHTQLyvd",
  "key30": "5gLncn3igw3kmSgihTXp6PPfuFksrw4ZmCfUTE4E3RqvMMds2xfZadUEs4Kni5KLDAwXbU9CrxLfPz5oBMrmfULZ",
  "key31": "4SpiDtKvm9vsVXufUV6tdCtPk421fQFAzEuWZASHm1eQhSXuGCAPe9HXdE8dxyUqsZ1iAWe3YbAWAqjCD5M65TAn",
  "key32": "5pW1fbsVv5BxPLmM4E4UqZkdGWQmz5BBSfPS77AbE7Ly4w65ae9VhXuC8kSWibaeCBmPb4ENnf7R66idSBeLixQ4",
  "key33": "5zwGGv9UA8S4py4ZStW9MaR52AbfWgaJSM32oV1QrdUH17gDhkc2tu2ALWgcGpRTs7jBSkZZFrcFsViajuatfuK1",
  "key34": "3YGMpTpUhuDwS4HUR2ExrXRoVafVpUkSHU7NMrAfGqwtFAmaYwjLGkTpeARqy3yn6jnQx6PSpcgCJh78ia42fEZ5",
  "key35": "52ZxFjmg7Qe7e15i2fS4iqVutKmFHaSwDnv9ZaweuzgeB7ysaDtNgN7skHF91pnceqmwoYk4tReWhpSAuj1WnQXK",
  "key36": "AXNtUuiv5Vzr8WpBSQKq4gaFK6cVTqjs5jnzDFomrVNbzYUUYcBdy8fv96Wkg8hzRXWWcbS5apRPyXxwhMagy5H",
  "key37": "2wcTGF6ZMbhD7TBWKcXBZf4RzNcU3p4yntr6CA8XQjVS5FjzQQzTNFjPNSqYgAovm222cvaq3Af56uvHN6ZRqLD4",
  "key38": "3M2b1rEatvm2zPcqDk888T5WqVKTX4u72SyVieqVFkg4q6st2AJaGwR3iqstLRLbP5S3FpaVGN5xVmXifhM6h5Zi",
  "key39": "5esGcBiJ3rJpKRTJCEpmMDXrxqs8FCF2giZnkNsmrttHkcpRBXH9UcagCFmUbt8uM9sC14fszuKMnHm4HHGmNqWT",
  "key40": "2CqLEdjP6qvEFxXwKpDjxMMJXB1LTYxj1SM6SBiNm55LFpkE1W7fwfEo367m2L5Fff2r7X299haKpBnTqnqrnQT2",
  "key41": "26xmNkXgtywfX1Uq3V5mNARczYW3ekbrrbqjB2FZ9YKbVtCBXChgPf7dGRVAromb7rP9zfTksK8LSbKbZF298ftq",
  "key42": "2m2bb7wYFmQeTYTUoGREwuxjvj8d9b5XTJ5E2xJtv3gJHA6nCdA8eNQwVHSwjKUNwU5yqQDtqoanFU5C8LzLtzTe",
  "key43": "36mdoVPPDi1irSj23UeKTsKyq7n5MH6GzPvz5ZjhwmNQrv9QXSShMVa1pKfc1er8ULTk32NK23WWVbUTEzEhVyo8",
  "key44": "2T9SXnUrHygxkWCAv14L37j6oSTwwDWhnKntUdzR8G6FcuiASPFdQCrZDmQ4dBjorWc3EXp3KtyfJAXtTgwQHSbP",
  "key45": "2L26i1TGxdc82iZJxUaynSrUJWDfqsueXjX8cGSUjdXa8Z8EBZGF2bjU9JUdQHeeThbR32AvTfKhmhvwaUioKbG"
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
