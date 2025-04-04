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
    "5P2Q7hvyzU6L272FUeZV6gVRTGUsVNeLEn5qvyDCcHsZcN5RgERCLW6seq1viaT4q4cTGCF6Y3CxjhApumJxSZTN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qXU8V7kX7oo4zHPezXzXXhYNAyDpRBNVFhSkGBYbWMh9gE9QwKyye37ChvxhNjGgRBDjhtEj2THc9Y2VLpuMtxv",
  "key1": "2zjmqaK7qWVLzmminRSQNBp1TnFmwJD5NtJofUnzX41ETtSNysvNjyXmJ2fdSRtiLvtV32kVX1xdnWmPmXXMKYy5",
  "key2": "5XADw3woCC8orthWvq3jztpE9kgoEJeJvC3QoG3PUrjE6WKrpeh8wBEmD2N2hxrL8ENiaLQrJ7VcC3JDUQ3oQisi",
  "key3": "C1LJmAWQGv3JBq2z6FQXqMgeWKUNwbp9kHi7redEMPiRqRL19C1u12ZjT98dSgyFecBxBBN34D42rizaXQLUbmx",
  "key4": "5Sc1ttuTx8Z8MY7423DrzksN67bbdnZH1qBVcpArbuUzKYvAT4rSchHHyKWpnKDprHWU461Loo6PTco26n2RiYgH",
  "key5": "258NSh1oZJXSGXTLmH7CRdr5i7MB1MTupXx2uHVdojnx6WXvBLP9kH2aJwxvBzy156Jyuj1Ubq5mGsqZEnuuE1a5",
  "key6": "3gxjz3smvViFbRC6ra1irXpxH93qsNoY7CG78yVbaemhuYNvjJ1523naWzMnwX3sxwyR2QPQRSJ56KaRtyJF4XQ",
  "key7": "H9SWDFfnHn1SfhKvbPqvkEpnsQsrFBzdUSqAcTTotjyVdncSZb9x6hxgmg9puJLaTpHT7ZFsJHLWnWg14MA6JJ5",
  "key8": "2krpJFYyPFij4JnMcL4NqA26oW3SnPD27TyRe73aPLdw1xNF1xz2Cjon4oL5GFH3nFq3r6hSHbfoS9TP7G9vrhKJ",
  "key9": "2RuBhZmTwaKvChLPrmnuZ6RSNnHXAxFB62gMizbm6N4h2xX47ESbq54SJV68zT1r6wWF8Z3HgCZbjeuxRsdtSRxh",
  "key10": "WP1qyVrWPs4Qfso51ps9waSh2b81CBkcZgzRfsQEkT1GQFY3vKpYo7GjYNKGM9U75nMHDdyDhEq4z1psTzN6uVz",
  "key11": "2qYwRMDpgRG56teBvusNsfajtb1gnEiwmvLe4BdRBR3BfA1xRuJZJg2tThXSpjynYMdTPfAtBLACaGhYkugQxSsD",
  "key12": "4QRnKVoxC5V6gtX4GuPiTThKe5JwXJju6czHrKX3HJLMYQQ3ULiDVWFQeUnyDuMwz2T343mKA3zD9vobWCR3FwmH",
  "key13": "579LcS6zT5LyBezcgCvdc1A84bsVbFdb4qKKnDQYe6tcVCDCcCZyEgF83VafYG5Aj4J7VpFeFzj9sVqEz2Pj1X8i",
  "key14": "5TC5mUJYDrHsyo6Qe2ESpuVNzhaDvVGV915kdjJZQdShfLVQ9EqLyJoLmWPT5i2bMexc9MA8XTqENEUHdxKtP2zZ",
  "key15": "3fagqFYfTuxpbzJHkCeTuPymwaqMgJ2odd5Lsbst3YNjLv3u9MQ4iBWzdPptSXWefX5mJ8naDT9vCGVt2K7X1e34",
  "key16": "2brk85kFMaStF18nEg7RuAZeTECMpmiEmrby9BqoNmy4GezbriXZVoFYXcVx9nErCtH7fZjhsS7gyfAc21qByncM",
  "key17": "5zzdQxhoSweLYVkNTREZ6h4i9Tm5bvK2SAfwyHXumZ9USbmuHb5nMxLeLGtpSLG8iTvZ8k4t9vKFQ5zDojk884kW",
  "key18": "4XzAv9iK3ayNRbXnKuERFjWNfJoHduPTTt6LjQNjzpaNucurXiPUF5YafuhycMDweTViQfmUp45HVR8PebNRgA3V",
  "key19": "5H6wSqNWNNXucgVQ3uoSxpSWf92G9pdQoPKWZgvgnuEdcCMytnHnPQyxkwDe9tco6hNdRBe9YmJwroCE3cWhymd8",
  "key20": "4uWjaF69aEHWGff9M424MH6MLsdJvmaoWPUZ3G5WayPg759uzu5NMFhZfk1ALUHKUZFPGkvS8C58HaB2amyWKVzF",
  "key21": "24LU31LV6YzNoXHvFde64DQCW7x8WThs1SHqmUgFrrG5dx5GE8rWoAcovoPdyfYKC5QxZBp1dnW1x6GLGZWL5drT",
  "key22": "3Rod7GbHcLuZwAuzr1uQn3KdYr8zFjJJkPTX1DrjvoqgUTEcWBsgHynAeKbgRDHF6NkMLPASCvmDMMg9HGPphwmy",
  "key23": "42tvu9onvYat21kE8j3oYZJiQHYzM9K9dHmN2Q7LTBDFaPmQXmV4HjTKyUcJPB2GYG2wRe3SXFzoDGVmc48HfDdo",
  "key24": "3pVMzgpT77hgVtpX8fzuuXM4FPAbPqj6ShzpxFrivdGfozUS5oMCsLgCFzhR7ZiLLNZhLqbjExpgfjMZzCmboCvV",
  "key25": "41bKJduw6peUdwVFSvxqsxq37771GehaJJq5HEjhqzGsWBwdXAWUrH56UpK4WATppgWN8yRUBqUzasnoLHDxjXxK",
  "key26": "2EfNCrcPJbSBiEhcgE3vi84ioEaBL21s9R9r7N9JojANJeL2hHqiuEH9SSxbVfXUkAwwQTE3fwsU7Ypd29Jsq8G",
  "key27": "6AzxKN4nQHoAEzLytXGHqQ6XbUFuZeYC58sATMVbgT4WCpAwtQHinJgBCjv7N5SbrxM6kJzaj4etCtcDZw3LrHD",
  "key28": "3J2U2v3gapwrAgpj5Zn8dZ5xrGpdGFmQHfk4qmh4QN33hkgZVFS5q13nkACo5Csy8MFozA7gtjW4pzNU2uES43W",
  "key29": "5GK4YMNTwbfWy8fvdbGpzj9fKZL7Va7XLk5BCrTXScDuorYgzv1dUnFAHHoPqjLH2FM8foeP2PEWhM9SCWvTnZGV",
  "key30": "brLXafrgCSFYSkKkXuRYrGHt9TL4wCfzkB8MUfHfFkEWoLWhka7ySkATtadFhVXasc8gRDDniU45tNx3CV4VQSe"
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
