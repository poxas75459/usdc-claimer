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
    "2iUYN7cbiKHNaotxc3NwEPxmvMnC88wCjELwsfbVVmokhVW2wZtipnBz8X7AiqonHEdE889APcAtnj7D4JwWPsQo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rUWYrrdkjDtNGrxx6uvBWNULypwcrmJyTJ5dTCJBn98MGpxdRrGtr4qVeqTSNWaaFfQH6W4e229XbjaX3u9UzMP",
  "key1": "7nkSLYLY5zmV9ybRY49ia8bxyxZRHfG4D5pzNhVvGmkG2zonVCvvyiUaP4vxSfRioY1JVNPDneAfnsagn9tck3N",
  "key2": "5QLV8x81GZQ9pTFd96Q9h7G4SfBFWbqGPf1MsRSiFtxe2SXesmycXQP5MAdfzuQuuuBNS5G9b9n8qu5dn8PFHfPe",
  "key3": "2hDE1ge4tFH4FX1d3BirnKjs749BL866VXK7csuLJZ3d3uk2agEWVVw5siR43UK1XXWgdsRi6vgDvj7zKJLtBt21",
  "key4": "4PzsgjwSfFwQwgZ9XMjWDFKFoGeaPyQ4jubYzEH33kGMB1B48GTrB6c1hh3ePBrnRsfVp7ur9uxzF23G2jd7miYy",
  "key5": "4ViJ8auwvFAYMBAsLag3SXgNinY2iwCagHH6ikKQ6khSb3332JCnUMb67XGUpCjQVq4z3xDjgmpoqEjS5ptGMBxj",
  "key6": "65wAfhjPtmwrwACDh71qAL5sBYc7W1NUp7pp1qgJJsXNSKd6KBETRydCZTtnTtgCi3XGc4ZyXFEH7LToskCy28R5",
  "key7": "3vTHnLY4sCTK5AMHfzcx9kvCpotkcKXxcEeRxGhBWYYGxwWCbQ8CAhWe5q8XLrDqe9TX3PSJyA35tcaPUn1vh1gH",
  "key8": "p7P4YxjXXLEZjUA4vJge9SXqBJxdD8CKatc7xr5ehRf3xY96Bi2U6KKjuaQboBmsFiyQsYZmN1r2fksVcUzAZSM",
  "key9": "5BqSorfWUp3qTucV45cM9EDzqULoLsoUjZVZQFYrD78bwVYzEUVpmY62EKwckYcdmcuC3GjcR5kLBdMWCK8teD8m",
  "key10": "2zAN5yAB7HeKbsrtmTRmaz8f7aZ8jyWx3bTGMoaDjnjQLTUdV9HESeeE89eBJFvQRmM2habGegv84zY5Ka8eZeRG",
  "key11": "4rx6H97WgiUzV6fGSYmENcppjNasBMApSTeHvVczcuCbRKqG6ZGHrnvY69P7dvgCjGCUGGaLqGZVrqv9SUiuNL2W",
  "key12": "2RvWC7SFnFMo6SsBA8PCFHj8Eaw9SBXP3JYmmrzZQ4JQ2y5y2B5hDgXhY5fv9pzoYcn5mvjhsY2rB7VmXzXTf3p1",
  "key13": "4W2jn7Hfx4UudNze5UnKxpLDFTima3x9jG5upU9rM37AFMCdRhn8BSDuGVevHvW572tFUzqMK79C2FiwvQWWWSQk",
  "key14": "53qKD8Swu36LYiCHRW7AM1WvBbYivPEwxXExFpF3gapwRVDg5xyNJYYh3GtCVL46SJBmfRCeExmAZjHPmtJFZuF3",
  "key15": "jBcCMeXLL743PeLYCzDB6GvyJyE8JcUrZCecU5QD64L1W5GfK5xtjzyvLB7kzia9kmH1U5SfZfmkzL5YqVNwwfg",
  "key16": "4M5rkxiDzBkrd6DUv14Hg8TPYEnWSQ7WZYE6gnkdRSVg3MKV19tjJCzqyMT2FphyWRoWi9KQLcqrmPpS1JYSD32R",
  "key17": "5YYGsFh24CQckT32CP3KBjSrGBLFPb43czsAMJEUNCd1o1vyn1sCEW6eYei4AL57EKQr8YnwREjjiNQV5Xn8TfdY",
  "key18": "3mbwQ2ozohxHMYi9tRNTafFg55tz2VG8r3tXmVKNwGyi3CMGyQgG8PH4SW9sGEV6BKYGGiEk6smdmMkitoocoC9i",
  "key19": "4ACvoddKGVRGcZidrXjp3GRNDacbKi3QdftfLiyNrTD9sTwp9WESty24ouGmjznFWkZPWNawCcSWDXQ56dyZjzhb",
  "key20": "52rybL5Yr97e72q4ojYFHs8feTF9Cqr1coCahC6rMM9e4Do7q8s5y539MAQEQWjVJcERs9KLxjbtuN2tL5NWGUB1",
  "key21": "2fh7ut2yLFuNvPs2wfw375oJBA96PG68RYfJkxNU8aMd6vSBPd6x45Sge8Ai6zBzwpZu2kfNWzsYXCEKoztEPPqX",
  "key22": "5VofCLtMzcmCABEstbzmvM17esERKeEd8MjnMkVpCRsT2tDqTcq2XbeP4XsY1DtnfPhF7KmEDEPDeYwZorpJiugk",
  "key23": "5gTNtzBAECq72eUQd5TnANAfgTQYNJUzcEcYJ6GR8iG4NTJev3KTnR8jJRK8NhgfWTRNd7ot1gzgW8Z1sPM9YBAP",
  "key24": "36WBywS8Je8iro5azoKBgjDf6PQEk1bF2pUQU23T15mMKwdHaKPPtNGP8THqxB9AfsX7j9dHJ5PDwMLQmJhA8Gis",
  "key25": "28NnyzHfCkMei8EncJekRStG2vxq5wqtGajU1W5c2ogJ2XxEb2XrMRgKoPbPTDyBJkFrNL8WkYWgbNkNLsyVGU3d",
  "key26": "2hb25Yaddau1qUpGkmkATe9CKdBdC9Qrs3yYKkVFeLt1c2cQM936dcK3R3ygi4P5rdtzLfaxMU8JCWDmANSEBm9S",
  "key27": "XaxYz8uf5xy7EcvgiEBrmdBTt2hWfTW4pzJxt1aHP9iF7brSNT9ujwBD1JuUBjf65MtXFDwQTLqwQhPBoBYfafH",
  "key28": "4JW36shoJoa6c8xm14ajQrJPf9rU3KpEohg5kwaJNbUhZ2wqsQRqNFwQYLqCjbrpQZDRTTehhWKGNHpJbALo8yXk",
  "key29": "2do1JVa8F585bzmaaxYQ95gr5PkfpAnj1nCFLyCzocxwcdcmU7ENvkR2TbkXWkPnQWsWPf445ZmtgzcJ7zon9mZu"
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
