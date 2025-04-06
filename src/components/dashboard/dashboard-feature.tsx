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
    "6672VP8eUzcRDjJnytyLvVsQcLugodHL1WbDXzADdnnzcf1BDELwxZ4e2YBiqkoSfwz9ahwq5HwrRULowYuaeZCJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SvnmPWKnwgUAcf9VDusVA8pnfBxTD4Tqwq9nG3UtUNrLbq2FhR1VpFVJqiX9MZfRJpvJLB7Z4PZ49cL5hZjM2RW",
  "key1": "26TxdiqVhxDdQe5FDZ3tpzFECs6jcqfhDFz4nLGjaMWhbabBDuYae5td7bHcc4p5SqZfG8v7QpT2LQJi9X3sup1X",
  "key2": "hjmCbWJricBFGnDxU9nHPRXAq7Ef2ztRtczHxFeGUtgYmnS6UBCXjyd2aCaLcaVS9dHsyQYrrJDvhRuUDi2FSY1",
  "key3": "4QHn2yddxmmBvinJGhipMR8vaq3odJrMv9fL8KFHCJZvZ7UCZxxGRxESRDVDtKfxL49aezTFuyEXTxLCHZ7LDK9S",
  "key4": "41dGmqEaRoJMcjZKaHjBrr5i85kwqBZbCvHtv1iv2PdM7SijdmvYpzmTjRMGehxeph8AAanrQLn6Ccf5gEQ4C2wv",
  "key5": "2EnuUVqXd3GU35JTtVCXWTniYYTtyRD6BqYWdtWQ2GDoocRZecaMYw3cArnWPN2BT1Xf7MGVyqs6g7v7WxMiKdHr",
  "key6": "3Rs6fW25yuZMtYpVWTHto6eBDnecV4pvsRXLtFT6SLTL7oN7xdgmKsbBHoqH8HPhc1MTynLEt6DbgmYvkDVcCcnY",
  "key7": "2MEcLtfJroSQLhFGRGRgoA8F12o29CZ7civRwU7hDgnQkmw22L6LnZ5bH1Ean1gXLEgUwGVGsXBZ8XHefcZ47esE",
  "key8": "219iYu7LPhLSbZVFTLXcy3f3FyM3WwKL9gVgosspnrmTL5B8Vtu3Ufp8eKR7AjMgZAY7w91dhL1JFoYHbk87L683",
  "key9": "KgDbqTT2Q1FD8kEwWMY9AHwFe1MUXw1yTnsQmCeQAPfs9biJvgDPnpMBopR1PbmGKa5y3yJcrbULuwZoHK7k8eF",
  "key10": "2kChjcA3HEhy9estJavrd7ic5E5Gy2ZJAP8JA8VczmCYrdk2uAYZCiDM6Y5yWXzeqoD42NMf7cmiEHWchKKrsFAL",
  "key11": "53imjuaqNpFh9ThfpFGdmNPvdJTKCPcnAiGQcZ4BYV2XuhHDTw9N1HTKhPtuECiyi8XkLRA7574qitSmjRT8yEnM",
  "key12": "2xRdN9SfGrwneXZWYGH489SQaixyay7TmdL3S4BZfzwfZ2RHZqTB8KDEBgJ9rE2f4KgcK5y8SbirjL5iXz1MbpAv",
  "key13": "4hAGFHVJcHwKGJtXcJPqZaguYvd1vKXz3FLPGMPPSScAP2M68erSMdJShHzuVVXdkTMFCuv8XE9onrUofwjARW5w",
  "key14": "5EoVXQhD7RbxexUcDJbZZkrzXaGVgJ43x2eNWNn9w8dQYW5drySfuTi8NhX5wDma6sQ4Y7D4hAGAYh1xtpg5NAnU",
  "key15": "4ZGwgeWKdDfaSrmFcAQaBzscNB47tnC3ikF2fNKWjupJKqa9eQMRqjyjMGbgekWVNHUf33gw5EBHRYL4kiYUZELC",
  "key16": "5hyFBG3CfXkg4ez7awc4YGeL4tbnjtyTXHgfoiYk43gSwUuHX7kSoPswijJw3UZbsee8UvRmFzE1XiktWxLxnvrR",
  "key17": "5YazZT3buqAdGY9Jc6Sag8HeV3JPjApjJRTtEu6h5vneCTHfdbjmGm1ARHEwb7fbtX1LNGy8RcGJ4BFC5phHfsQt",
  "key18": "3wqUKqi4A48VqRfhtE6gKnYxqjms7BFdu9Q3k1p9V9CFLxbVRr5GfS98RLNQxUELzDwXpYvPyEw9uk3q2srt4PWa",
  "key19": "67bKY3UjMZfs7vQUY6J2YNGBgkVjke1vEtB5psU87EiQapMPCUpR14Y8ioSxjg4LCGoqcbxUoEEqYJbHD5K2vQ5f",
  "key20": "5gRoa7VTCTphw864wTEY2bfFrR9o1hVSi4os8THVzM9XzrYQEVp6w3tVNMRysEjB4BH4PZJpyKzMXgm4KkzbrU7i",
  "key21": "5zK1efD5mRUL2e2jjfi8PVYrLUYAMxXAg5muDQ84vyDrV7Hxfm14aaGjcfvCbFn8QyNdzdVoBjZKMczAVpaVWE31",
  "key22": "2MNzf7L8T9WTHjtvhM9Gf6DVeFkfvQxyLHVDkYyyemS17Afj1yAb7dz9BAbeDFJZHVZofrB57MiUDhYd1xLAECQo",
  "key23": "2A786ZfkeoHmNmSzDxrHHmVzw1ctdeq2MXTiUxxZq9fU9wmX29kC7YQW6KESTBctoykxZ9JrY8wDUojxqiWMpiBs",
  "key24": "4axEWZrcB3PysU6JL3GVBk2ebQNNPnSMikVkaSRmBw542MmEyFtZrvTzLor4oaj236bwtzDr62afV5wRK1huGYoo",
  "key25": "4xPafv5ruWJjns5nrxgAN5XQjTGfCSkXQbsxDAL5Msd5g4rzid2XBxLJqgQhVpHYqip5CXPQqCGUvjkzdYeWVEWH",
  "key26": "DdgjE83TyNbF6UhEbrCq1YTxdP6tudKg22zXE9EF86Espw3FZYhrYKDEiqefPUrrmjSHpeAkX85o2tGFpV2ZgzC",
  "key27": "5vZTRvEocs99sMY6WkyMcsfRa5tpLtdxMGhPYYGJvDHAgoSTmDqtvvr1aPsrUdftbofjtU4ACWzPZszyV7jfeXjV",
  "key28": "2c3dqWat55aVbMTDjM3CazyQkKWevmphyAxaPQzVLq7T3gP1LPpqeZfUSGCMP1MVkQ9qmqZvpqcDcCLb6vgxGrMk",
  "key29": "5rbZ9Ck9dcmGdbgHyYXR6hArFM8kg3jioHveejfubWo3kvY8ZaQknYRmcFhkq58raxy59DdorF3cjQDUmR1JjGAe",
  "key30": "5KGwYoQ7EhSka6uLmuZeKodmkiYrcqeagwiuWKH8U7ibK9YyD113ZBPEq4ydJrg1ss8sAWSvFdQwqbyMmU3g6ocs",
  "key31": "4ddC1EhBbx3u4NgguzSNTi5NmnhruK7zDmX3GzuNnGSXwgPr9LNfxh4FKweZmQCiGxyBHHeuqJY5Yek5cT6vEhHW",
  "key32": "3wcGsFzr5tjcF7idFeBtSeiosxzZ7bq8CRMnWJUwiHug3Z34YyNxUYjq5BgHFyyBXGpy2Hqb5aQDaCZDFYfAr2Jj",
  "key33": "3bq8bykqerTX7FJjf3pdeB4zB5ESGS4NTJbrn1k8bFrTHiJbsPJiL4N1aXXKSM85q7QMPaRneDG6cMxDsBWxZFCx",
  "key34": "FU4tfRogJBZWABEDGsfNMhnKxtWgqs44hhucDQ1ZVNxf9bJdmyapJoa6hjAdXLWSaFEXj2uik71cULaXk9wuLXy",
  "key35": "5vsMcFvBWXVmetmRwAMP2sChywfM7PFb3NEwjPLPdmQhu9QaEdbTXWEQwLUrJuwbrcskQAWNNYJuUpi1dGF8tsC4",
  "key36": "5zSM4aAV38KSU1QZBgHACGHY5vmHoMeTPofefYKsuKKmSNVbULb6M2DJhLauDQLRnG4R145ZLBbeoXvqjN5Rwtuw",
  "key37": "vHP76m43Bu5kDWbUEAciPnHSnfWondfWshDeE3Q8d9fbTqVGSTLNY6ytZbZZ5Mu7THWiiydiUoFbQXcu5KFj5oX",
  "key38": "Tb4VJ3ZYMiztnkdEejgccUgFzQK9nqi2Eh31iu7fTHkXZunDCXwhHNzQwqAebWZUH71K7jZRH1TFPeCHwRViBRx",
  "key39": "Ca297ahgPq5NFyQ4VMtLStvdtLV7NR6jEtzRLURE23HiJHN8Fprk8Q8McPBZ63iwgBumPecmkc6mb2aLw5qF2zp",
  "key40": "iocheYjJTjtAVG7UgHajEdetwMje9Yy1yDnMikJnyV8rajHaXSSoxVHiNcijUSiJfchYPj5q9Dod9E12S76WSPy",
  "key41": "7iJNJFek3CFtyg1xWtwLqgrzB98aMu3xo2yGwb1QRDZiiTXQicD5QdsajWHYuDXzBKdzuFtRizUzEdK4egPiiQo",
  "key42": "brp6PzXQtBA4uNg5RnbL272Q3XHWYLTi9vcci4qjbFssw7xk8V67GhPK8SNrresq9rSbFfu7QLiuALADm2mZKNx",
  "key43": "Mgb7sfMqGUUDtYuvpsgrQYZCjbmE8m865V8c8tdQGajzdrgbcNJdbvZZd99joAEMD8EJRET5CWuPvxUmYiPzQpB",
  "key44": "2aMGcAtzcoeLVMR9j4Fo5DhiRd1KLCyBaZwRh5EzLmzsChYeSMCVetquUjyr6v3yy8j1uouCBuWrovfdAoifKMwW",
  "key45": "2dJbxZSra1YKZzpQ9FyArERuJqNF1QrqQpjZkRxQJkKqnZ655huUuVMSX722QPZH57ynfNrnJMPLE9hh3Q4S3mWx",
  "key46": "2LEwh5CWqvHfrcPqycNmsVnS3gyeyRU2oAYTVJ5SmBpzsx1VfwdypYfZvHhw8ii2PmEieDCH2Xy5DvuorRG9m1F4",
  "key47": "BssYMp4QBfsgnrqqi6W6fcUArBBUNM8R7fuq2Xd1kAtCnmUx4GBjzz2o4w74JSrnTWsmKngoHWHmb4URdncbKwF",
  "key48": "5jVaB2aRKaY21tVcDxg95GaXLY9bXnim2iWSr6Wig7ZpryKuP1nTFnQWLxfWRYZkbLCx4SyfGaTvhQDymyrRXM4e",
  "key49": "5x9HAtMz7xzrTD3vA33aoQ4iGuUZYDrRCEmGK7XCRAsSAHgwTCTruqsgLsLWbon5mLZxXNGTkrumXHESzNkFKcBZ"
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
