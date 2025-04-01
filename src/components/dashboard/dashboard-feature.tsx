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
    "3ke3yr83m814gSCmPLLcp6iigwEGUekHaLxfPT8CqbFMgEwRV5nfmNjM5HXfULYRf7xofc4AJAnyxgu2zkyxNTAE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cAbvUzqrNRt7CD9oHU81moDCd9V7UQx5eJvdVynRkGr3ZQpzGogbWQFxLbwaqhVbKGLU145TTL4g8WaojeAca7X",
  "key1": "5FQv5Upjwvo9Tm5bxLNsYGCwYVgwAgSJQLesz3WhwgV3VgC14uFE2M4p4jH8fDtgTLh9URLDJHphGeQkJ9jZF7xw",
  "key2": "66xRiEDHXvXCGzut6TwTQRKz2KZbrdn23hnpKGg5e2uYA4wGqWX9P77owhav5RVedj4LhUB97H7VJ28sHmMdAhZt",
  "key3": "4EDEgfZftqQtyQNDsSrGr8Q1RAjwpDdhCp659sXq63fpFQkLpFRL3mUN7LxkRAaq2fEZWp3wsgaerRfHSnZUdhDQ",
  "key4": "4NSTHrPPmXjBznNHaBuaDkqa564hqcqswDj4u3tjLG2QE4PpiuEVKeVXYUoBeAY1UaKEwftYToKomNm4Zxepn61U",
  "key5": "5gg9q7eXnVMdN4rtSHZ25dteJp2Gztn8i7QdEeQi4rcPYsmJyYmC1MF6RNdVHf7DEP1ezr3TrL5EZXQu9J6hVdH9",
  "key6": "2UM7SJFDATZZQe8ZxusEPjqYbR7HmqYsk9XRqY7rzCxWaoM29qNHPf5DyVxXiacjaxdNrmXYLm1rWsHQo9jC7Ro9",
  "key7": "3WQccm5wLVdc3nFQYdD9tbqe3dN89xqHTVPqY13DJrp6JbsQDuBm7evJGW77AhF7WQtbQ3XVLAt7mLULQ4whtkyx",
  "key8": "3Eri9iwMHEPmHxTrtyyBqBzRQtPCKMoH5R8nkWrvY7RdWuUsKZxCX8iBFj4UVb8XbarfpeCBwNqGzsEWFEL8a7Qz",
  "key9": "4H3FjSZWwB8SNXE3EmCmN5m9BdrWmZm3EzYxf3wko98L5jNmkaA2BfcGgmLXMJGWgJUz7MbCERXHaZy4nG3QuNv1",
  "key10": "4UDemtbs7iTvvusib8RqwRYrFtLLbc7UPnZ9vDCZUoMRPehpwC4pw99NoURv2oetYuV3SPspTmXvbEJQvbjHpwFp",
  "key11": "5LgeYvof6zjmkNsYALnoT2tUFuLNiDzGP5UENv2TprVbA7KHso4dv1tSmZW4q9RbVdxAcWXARgaGvcFVHNohE1MN",
  "key12": "3xDpMaj4QVXpnyhogfmxjAnyjCYa9rCWPKHftDKYpRVmidfqghoJquaqVj1mNEzre1EUgHh3tDuXekEBr92rNTFh",
  "key13": "3MUME1mNck2hvJZyMSMfRzoXmvuK1KqiukkiKKTh6H1HExcnHPrQWh8ZtkV3k1ThHq4SKx8Ycg5ivAHFzSNyF8Q5",
  "key14": "4a8tkpWXtu7D32MA66Tm9pvPoDdvswCHKqA2QKVFngg5HyTkoAWEmx5ZjyagzTJhumiobmTcCnp3xhtRD2r16MwP",
  "key15": "4j5k7VeJti3i1sSGNDY3fNKWM4FQZnZxmNjp1pJyHLBAufN71BZpJUqpuN5BPJfMq1HquK91jmD1TYri2hY1cPVA",
  "key16": "5rP7NRjoFZrZDffXLj3NM3j6P4yRcaSzyMsKTDXg2W9bbtTjzeko5Q5uGtYhRvxqkK5VduM9vtnhuC7MnVKNFQqp",
  "key17": "GhsjcDCvpNJy83QjEafpYAq6zwtPR6zmWFGX9HdQXrduMGz7FUU7adY5KruLzF3aH9GecErfXrxULY7RBxFK6Rq",
  "key18": "5FgbE4yxrtNbujdnugnX5fqoWyfupAvhAUrkCEif3kWyGxfGmSg1giSZPcK7HwCXLdz3VJpBT7MKqoVHhtCdPv1n",
  "key19": "3joysM55k82Dps4idJTHKdxBZbMozhzUK1VN8fmVP2c6eE3xkHmMM5pNh47wesr5VMBJMQ5rEsTjGKEDNi9oAQp5",
  "key20": "3x5LhWSzFcr8GggVeRfHyWGsBsHU5joYZujAfq7PRUKK3ZTa3RwZRvuAiacXoHdkQJEGFMGCgJbtYA8G6ubCxSAi",
  "key21": "2VDda54C85YqeXyrrYLACBGRgpV8xXtfPsRqZverxvKJPCqYmKDdmPoPuHwpKncKm2W4syBDNmV4VjwdD538CQ9W",
  "key22": "5soQQVqkHzBpHN9KhYhq6UdVFAzrEtTadrn9CMMmfKy1ZW3q3GJBM4WnQEGsAdnXQM3vK8Ph1DyGSuYDaaFUevKy",
  "key23": "2gvNkJQZqQ2hQo1Wv1S9WhkY8vSrNmoAiBWkpENyGKxJUD55CsXpsScuwJq3oSbZjwRwUR6ZaSHaL5MAQvZ9JJ5h",
  "key24": "g5AkKnHUzHuMCySmNc2wqB7n1i3pNwZhF1tggCsccuZWFQnXt9pe3X5xSYdJ4FHg5PN6A7QcUCqgAx3uL3nci2h",
  "key25": "4Wfb8TpzAX8apuQyVfzFTj6DEUmr9ehRkEWD5ZsXq27i2Sptddqor6CDURPp4YgMEsAWkfQeXCNshE7Jageyuo8E",
  "key26": "5Yf3qd48wey4t8hA7sWhyxQ3UXKoE1trzRH834cKaPNGJcFcPzSUd36ZzDCiLs7z7g1z92H7CnH6V8DGnNajefrA",
  "key27": "5X81nZbe8HkfRMxpogtyA3b1htUdmiFbmKFNpyV8QrhUwkRSFr2gX9LpNeXZN2tGqNe4qQn39TbfRtHoT91Xhq7S",
  "key28": "3cnwJNeHefTwvKsEL5p4dSVRPJ8qLvXowp9aBPugtZrwW39GFrADS9cyXNsa7EndTBx1mr5skbgB7GSUnWTdSKHE",
  "key29": "3yshrjrEv7eX4y9JYLgcKGjbjWcn5ERhXXtKoKc534DzfaBE4LZhRN8EcNadHonp3hH79Q2n6oTx7bUpD5sFk1JK",
  "key30": "4AMTE6BAt9Lc8cxbSnjM9rPNdeRHiCW5KDY8nFfsitBJib8VWkfndAQqMPmDtu2L6izGDQNZQuqUfKWDk7FLFAAf",
  "key31": "3fjjAGBug2ohPUMjQaUk99avcHcuR6F9njEX8ZvUD5i6qFeeAfyxJMNMmnmaezECTmRGA2U3A3Khzq8cg7A5n6sR",
  "key32": "4ButvCowULKDHxtsMF4k1p98Y9DBsatibeHWMhSNfEVA8bzksprnqYZ31fjUCDpnmCpdfwFuVkXZPqoCtdQihuP9",
  "key33": "aZL3D29nBLX5zCHXax4HXaybPYPbihD72VVBT8VsStyA9QUkKY1kJeqMqFXrboxoaoNt4Rn8S4g4AfFBEikx5qb",
  "key34": "5yeztEr9hUc3PAT1yaSyyM75vYJC6ByQSq21rY9nK789CioVFns79nTwcxFHoURsPGLZZMmnatnTfyFTgxTij1Qg",
  "key35": "sthyvq2RC7JNcskj5dRypDJbgpaqcuhxvWWpBmBUVBzDg3nqAuCRNrvYaAErA1MedcmpZ5n1n621YjavGnqQs7f",
  "key36": "3u8GqMsCyCKr8WxeSHFybGEmJ7ZvGYGPLAuruQ8f7M99dUgYyZao92rT5Nwrij12hyPub7z4oKjkGRYNoPTKQn6h",
  "key37": "2o39VYh8aXjQmdLJqdNchgFyE1bea45AdRUpXVe8Ysbm6Wqw4MB7m7esVv4GpxNam8k3xhPuixkQjsnqXipiTVLT",
  "key38": "4R6imd2uSHjLnNQmG2KraeiQgnspwk9fKnmg2sexWjKMiv6CF2dNW2FR3gvKBWdVP3m4a2mtE3zbU4PBc4tX71Kq",
  "key39": "64pQz1MUAzEgz7tdQuvmwpLwRsHgwA9kRChFLZBTrekeuzovYQs1PH2huTVMFaGLJuW9wjoqnj9f3gvi3yeTtDYk",
  "key40": "2EY97N3B2oLG59G8oE6aNDRimJdwGhXAemg6HUi6DGMpjzks8RnbpKwSwAYebvPneW5u7vrN8kyzT1BCNqUXeSME",
  "key41": "5c2FC7g3qdTpe17PWEaXJMmVEnA9q9gs6wGY6Vy1sJA1ojDUpBdXwZfoS6d4QfwDK81Mahz4SQmxYDs13nn8t8xu",
  "key42": "3bNSJVLBDXzzrWFGXBuZyhmo37wbAeeaP96dFfVJQFC3WXfepa2vy4sxhvVsQAxRXNSbhD5fcsS5EqYFWi9TKBqK"
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
