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
    "5ETn5J4jJdCDASRa6RXZxyzRDzzyWrgq2uQ8DgCMLDLrZvAQfELJqhFDuqmvmCWJG6fVufrm7pxLZ5YPDPXnHpAW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aURvjCoYA2pehxMNhErsPrRwT3CoTgMDHurpLBPpaeMFeeBmBgF8s4z7mPc6x8x7Gda7Qgixqty6wAHFzto3ae3",
  "key1": "4i2NrRu8wHoH84nxkmqECQSmTfFCV9QHrDKdy5iYqtcobowRPaguzUA4xDZUgeLCepeEtK2byoFnrwLtzRUFydyS",
  "key2": "2yaiwjiYWtmVkgccTu7t6xVubvBoZQdmoxqM7Xi9rEzV6kk6LczoJofcesw3fj2SQ6n2gqxtDFKLGHidP2RULKJc",
  "key3": "59dfWgY5ZwYZ9eQecsL1TnngqhLcstNap94tosqy1Pm55zCbiA7Y2bsne1JLAHXHqGQ12m1r4cHrRjA7aefJCsKm",
  "key4": "3pfvGpaJ93m2pL5aUq81yzpWVgoD7V4CMoP989BSbAyRy8Smv2sGtA99x4msgKD3PeBJqsPxQHpUk4SDidr7H1Mr",
  "key5": "3ooNKxbE8GA2gMD77b5zHAFQmEhZxkNKgN3GDGnM4QUTAQnjnVqfSjYD64zwCPfRkjV7tYBDezWS8uLjfxfQrxEE",
  "key6": "5LyYFSzvZRru63PYxeWgDhCCHyny3t1ukkB2n4Mmn49No89KatbdvGPFULQeTRzSVNEnFExDfGujQiyEiNXVnE9W",
  "key7": "3GFw6uR8W5858kMvbceN87s9KwceGyJKbzh1BmMW6wwkGBiz2HggRsuYXPiFU6xF4mHzhWaxGALePn1Vjvsw9DgD",
  "key8": "YriPs5mZt7zJedT15vWTBgCpU9GDp3GX2sV4pLxXM3w9WxELiSbuJWJM3DRtUJ2EDUXpTaCVHnUHdzBzzZ6cmb5",
  "key9": "QVqoA4j4rKyPA6cF6ce7MEtGKsvfGStKtx8SMB2bds3TzbRHBARiPLNDnFvzPzKnBEUKB17AMqPCdAukwky73MR",
  "key10": "hHvrKDShuvmWcf83wKuiV9hYM3ySN55SwJyAtCwo7VitL7jNRT4XwhCUfyJcKegs1a4435Z2jVSZqTmGUA7MjMi",
  "key11": "23iwvKLmGJQoazBiR2gHG8oRX83CoyxjWyvQKAV9qDLwi42LXE7VHLTJKH3ntU3sB8hoCoN14Y173QTJMbCeRhkr",
  "key12": "4dGz6ZbZi34EHqWcN5k3wBpRUSiRK52VQejX31DesvtkPATyUMLCTH7CYQvmYrDMNCZW6L3VBrzSEkZppGvrV7hT",
  "key13": "49NjHqKobkdU6gfauhPYkihyAWaqJWuBUoxdME179srJeK9dEdHE3eDEUrbjwkE7ignftNBYCTMJXnLuCQbfKK8u",
  "key14": "57bZv2vBm6WQLFc1PyJnmKTmdazfZSTswezvEDZNQAKUQmD5SDyiJJYXF6sqEbJXJf35tMxRXXNxcAB5dkcwvgsw",
  "key15": "MmZC3Sjh8XHoAB8kvHLQigF1WfXA9jiSuRzfhtBkdYjukzAr4ThXH2eZXqiQq91ycyYTTaDrRzSH5X4zizNw1zi",
  "key16": "4KnmQHTxoQESLCLvwPbp9LALZZB2NysnY5Nok5Z6KTQMy8Vck6GcCFS6iXz76qTn9Zg8xgVZUjUXYgbdbA9VgHPv",
  "key17": "5utifkonTSSXb3faLwCGwvK8EX7jkKKaqqyDKowGuRkkhZfRqQQtn3WyXZdovNnKMkNbrBgrmuN5dWS9P2DSTo2R",
  "key18": "4bmVhYhuqX7cH4jyyFJbz3oeWdmECvKZjkeRvDNWropVdcGBzwa2Y3mfL4fs1vmCozmkpuDoF6fdeZDfu5grH1bm",
  "key19": "3qedqrpznjaJEfSmesaz8ezZDLFErx8Eba6bbKr8ZQ3ZswHoKguFYd9MmpPGRYmKYQNh5B8buxYEFFf62YJhkCAe",
  "key20": "px8mMVPPZtpYgGao2XFmvbJ21ppULJv27syuvAaxGJedo9nJ1GLZc4zbYyRGDWYLLPT6nTW4DNnEQ52jsneRPzZ",
  "key21": "3NMcqBs2vnSNSRrRwrW1mD5JDqpyzxdZw3BFzUDE24VZTLmuJPNZ4quDju1d1iKoKAzY2hRffCtCLMUzVG1Ti2mt",
  "key22": "3m1YmtvD2pLXsmaCtuQG1J3BBouqk9fUZwyB3axAEQjrtnT8TLvoTK9XZWHRHRPwsVKHaioC6tNb9xABQGxEVvxM",
  "key23": "eWfXjvrZY4MsB69vs8AmKJ5aUSBrMy5AGDvqqsVTMf2vQ8eBYUFXfKAwLh7Sw14qrkKMB9ckKdtYGTyMWW4earA",
  "key24": "xGHdoYMig4yAHC3SU6J22ozQqdF9q7WdrrMcRZJnamQ7gsG1CroqDzCFcEo6EAmADLrML84SpSgNFdJsAorSnEg",
  "key25": "3bQoRhM91i5NmSWHW8M7TcLHgvTpSSH4ULSFZXekgyTw6iCWP4nDn6vKK8gPczk1KTTFi4qwvyAEP1Hcz77FRCTK",
  "key26": "36oZkBLiSoh5UYgUyWNMrP6ooFgQfsp5jruxHoPPYCykBtHRKBs7PA8Cr4yLRDAVQfPVRuazQRWt5rwLwLDSizqL",
  "key27": "5T9iiFpNdzWLetAbMUoHMye5LSqVw2mC5hYcUsGMpnyjhdJww5LpsuxtyK7889b2oPauSspKzsektmZt6YrwYmLc",
  "key28": "4RyUj2VMrmEUYTV5iWUR5vACt8ddcF6oWbBoB5NTpzUdbZysVSKcsWGamsaLLMHmBcSfZWgXH7UeFZ6NMfLYM2gc",
  "key29": "3cqdDZi1FfuufoF3jbtQCMCLPVHCdssUEVnwjNXcXpgs6pg1Ea55xHSGQfAnXKkXLtGuNfcoTVGYRS9M6fDfQTP9",
  "key30": "b1DYQVR8HhE2FL46faXHqh8r3Uueq9rz91YJaCCEv6XJLNWBb4zCTgewZDjNPvDSz4zNpWKdUct8VMcHbLfjvg5",
  "key31": "2nVE2Q2viXmJmqHydseq67iiVkSWxMYMdPNrbsdEgNUfWNZ8uKp6nKwXmASr7652UD3d4wx2kWmuxgCdmAUmk4jE",
  "key32": "3cVSu6w3S6wqhyKWSHW2dCpQny4tyMinHLBkpMyY5DeNoKhdsKvwQDm6bEJ5Mqd2KyRMYX12N2Qnn7uraqxFz344",
  "key33": "2oTwQ8r5m9YjAS5CbB3ddhkbNxmiuaCmafFpMWXXj5hRiM5xBkFuAhDqA9G38dtLVuaUhsgeR1e29PS4zKA7WxMm",
  "key34": "5dPCvFxMYwTHib9r4ZjPPh6eE1fk6KyrfVXHfWD8iro9uLDmsHJWWfFvR9ygJ1HktLKKJcPqxCzXo9oV8PL3kRkg",
  "key35": "3qcw6bGjjkeqe45i22LW5PesWgR3t31pPoJWUszmbj7wnqLDYGPdP4Ct1u2tAYySScGtsMz6MWWz9eRG768oJJrq",
  "key36": "3ExxxFwWW3km66x6KHNdKRvMSLNK1s8TVHQKctC9iVXKh9DMZDPKApi36YkM6r9hMBR1Y6v1BLPpx3SVboHaaqgo",
  "key37": "5SjaC1qvtUYMSgsqcCE6kHB6PGMrWFM6tSXT4VKmbr375D7ybkgQmQwviLhJexTCnTSiV9mHZyYNiQraYFuXTyZ9"
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
