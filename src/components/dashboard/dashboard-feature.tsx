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
    "5xAhjjtotjkhCQRN5wH8truWq8eHWQa9W5fe8CXMowD9sGLYarzbCPBepaeVWXT8DakWuNnNUTrYz8BTdSGx7WTw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3juncdYN4NkPZ3e3eoHfeCTnGzQhb4u5KvyePaUZvJj8jvLXi8buLzeoKv8CdtR1LrdfcVQJGsrX5gGUAars2g6R",
  "key1": "4eUA6KgELL84TAzpVwqLHTSuijYiMcNXpCdrRs2LVxJNS86ejEJemo17GmJ2mBdGdwwAZFiDKDNCRUAxJYfsyQkt",
  "key2": "5ZUb8cVxScT8trKuYFvGVks3rsmACfa1oPDgz533kRVmQNtH53j1fjPs1TqgKMAKmKoz5hADnzD3NeSbB1UbdQwp",
  "key3": "4hG48artwfzvqUh7KHo2NjLrb3b7PD4tJN7BE9ERo7H5ndPBqmSKYmwTHemaqo2D2WwAEPUjcSDLHED41H7XQa6H",
  "key4": "3NbtFUySUQD9PbECTqr8JdRQ4iPUduycK2XcRqTEJtVKC4WVgGMj1c6Tr3p9M9abwTkJQtXSjgZwFJS8Pj5R9tMy",
  "key5": "39YY63W8em4tEYFXkNKmJ5DRuCHBNXsiEg35bgCsJoLjb8wKbvKGGREKEyWzhrVzX92NDRDNNAZxkVjPhTsEJdce",
  "key6": "3TtnxQj45XXQoEHjKLGHMohsvVowuUoa88WyKiEXTUUr3iNuyqCMZ9o2hSN5yVtrjwC3rS2uB3hZ53mipeyEojvV",
  "key7": "4KU6P4sJ3Kpzo8wwgRWozCTMzpttcYed2BohX4NxRicXjmm1gyuvWK8dL9NaPg84Z6JB3h4a3n4ZPr5csxHa3oRy",
  "key8": "2rCNHKvRmqEyyPuiTQhJszz5iQmEzSzvGAYqd3jmoUs5aTiiDbWtKsHJGjkvhUnF85SyXwEBPPAVMyFASz2mom9T",
  "key9": "3t39b66J7pzLnULBsALb5LugGQTEzKdncHD9uuGNjghW5bxyJbCCM4d7HhHeaC2LXCaJNi3qdSB9Z1ydWJAYQcfu",
  "key10": "SqBkKNzVEn4Tk4Yj1aMrn5M6URpcK6ZTM6AsQU5RVSYa59yLmT5148rsYRdhdhBfTbQXNrnzfkH2Euiiq8XNMNX",
  "key11": "2gwktcUpQbVeCncTeya9udyHz6QE5hJrxpiyL4X4ckwXPzuMiuXTqdwQsLjxnzUqVpGyRe1jFzuCiTBfn33kYfkN",
  "key12": "p9rksNuuLReMuqMZ8hCCz4qJABnPzoA23ZisZi1HP7qYbNPYzL5bUR3cui5vLYjvsmdjHUWcrcc2L44Yrf323fs",
  "key13": "3Gv5H1BDk8Ngr6gFMfSJN4KqcrurP3MK4ZzbCrXRhpCSNtmgnRVBGpjWhWozwDNrNrCKEKdHBNtUBc1xTSugUVYU",
  "key14": "zWfh9WpEQHsDjzr5KgKE5FCsDQM5BXTwkz1CZpcWzbLAap16JyCyEaZVPna2FnKKr8KDkAA7sk8CoSmwrPEKxdG",
  "key15": "28jLTG6xkH8nrhLQEHcbk7Z3SYnrPp9nx4ECWj4C8yP1fuchR3ikG4hKcq96aPVBpHjELmpTJo5k2BNQzQPCJt1t",
  "key16": "2eooNFCGYZHbqax5rc6NCejyct7inWd7DWR4VZe2f2b7CcrPYNp4Rqyjzx19KvYayKUsso2RdcdLhBQXQegiYdQi",
  "key17": "5h12snMAsZj8wL4StZFYSnVH7iDpWUEGUBysiPi81dwKH4nR6UrgQS2mn6E63S8CZKG4bxJq1P9McJzNj6evPW5M",
  "key18": "5EnMdqpNukcJq8BLpLvfpgGXmVC2R2Xijbv9bV9E1Jud1NTsZyP3msGC7wAoJpjxRGMqdPXUo1cxodTYYaj1zyxx",
  "key19": "5QzB6ZRCP9ZcfouwDXB438bba7n13fi1whDrA6m1rt4BZ5gEwwVrvE6KyttFDcuKJ9DyDMp4S4sRpx8rW5opuF1j",
  "key20": "4eB34u751uhPKzEEkfznmHnsirkFVP44pqNeL93sjyP9qq5ijr1eSpSSdo6Nj4gqnkGMuqTXRmSWci271V6pLyf7",
  "key21": "5mjELfeFEnzmQHDAdjwYfKy1Vb4vKry3DscXLnVHTQs4cf1D1N2ENDdarbfhRnMRwfCUdvZHKvwWfyc411kobbGB",
  "key22": "2XVEJcU8iHrBgkjrKcCgDewmmjrvpvjvDoNMMg38RQA69s4tgNFYgG9NLPGhfLqYnAP9X3R5LsNfMUXNJgw9kP2p",
  "key23": "5ru7jgMPYktfGSzVgbjphHoZGv8UUuHV6KmaHVEUoL1VS2z6uRtgbXkeFsaxRkkRAe6BsV9ZYoT7FG8PUBaw2iH4",
  "key24": "3uArV5Qi57cqvodG35mktth6PzZES8zvZrP3bmkNdQiAcLyxXn3ivRYNkBky21EbeaPvugvtKDnt4bwYfxBvK3KY",
  "key25": "61LunBhsnfyJMmzMQAn6iA4LKzHRxER5e2ZKk7pTGGt4nq4csr1L6uDJLJyWPZTjtinq1u5zVdmFr2uduroFfrka",
  "key26": "3bLR9YE4xwAJKPeaZ2W2r9ZEQyivZGKkVcpfHQ53tF6RF8DEEACtWWEMmVYsuBtGG7YnxFwo41D2qG6V4M5Kn9dU",
  "key27": "2YnZqHBTdDTXZfFkZwEC6yv7qMiqqSJsZvZXrHzkSi22NhhPuyHKd3xT3cFzUp7HWccupG2mKrP8d7UFuVCUrSrE",
  "key28": "4Z9EgjmzDqVTiuWdYvtCWP8kaJn4dGr394WkBMfXBo8y2bGKuxDUKVQ4rHPJjnRmckWxaW9pE3BeSEmcHHwVBujy",
  "key29": "5sXWbpDyARwDQe55nUm9HL1LpSpm93VeRAySpZPeXnia5dhgVU9sZM1s4RqNUM8S5WSih63ZWa3x2y6V2XDMZzYq",
  "key30": "ntKYCznrQgcqmZ7Bv81grnmcM5hBtLjfYLXrQCJPpQKSvbBgpJQJyZH7VzecWLPC5AqtFk36wWtXJcFViJASptv",
  "key31": "3JRCF4JBtUBdFaZ7vms2ceVfAAvKrq5KYPD1WoUM6SEgDRefBxiaGynt7HHGSE9cKzB5SfEfvbHZ6fpSEpJkHeiT",
  "key32": "5xzXGiECKwDPqhCpy6APwy5bPtb2aQcuSBusQdHYaWt3VDYS9k8oFyQTriRQbQrNzW9wPYcuhJtfNeUVZHvt3cuG",
  "key33": "3f3MuyZsG2LMo5c34pwSsmMcfB9hek12QBNemWmTKzhrtX5TC6mFNabnu8s5GuZAtxun5q22rSpMCruJw8uo76e9",
  "key34": "2wnCpSQrnDPD942Vf62qoscv5HZXDpPbvkq2uq8Kit4ZZMT98REXA3fYoM4hA9qc9J8pcT4TtqdfiRu3VKwfpRyj"
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
