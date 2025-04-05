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
    "43gHjXjNrnCzR6BCHL7MKX6pELmmgiECGb7iocHeuQoWjP1ic2AbrbnFFmeVnec2gEdmUbYBbTbehUPcRGhzPcpB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "soDJvfvwTd8Dkr3KeRMG3cP8ypVwV5fVfsdqVQEoDoM1onoYzw6NchnLV7RKx73UZ1KRgFa9bMkV1PNNwxnwZVq",
  "key1": "5o32ZAyJZFM9uQUF44skwrRXG8UTGHufuoJpzPVCvkHE4rz9FpsEH9MfB1ojJ1eJSDKoW2txYnTpKcz3fyH3QeEX",
  "key2": "42zMF7sHyYemgZuVriHdXwtJa2WN1ck5kaSLqSBdfraW9uCsK47pGYjhBBJkXySznhJKF4BK2K5zxnEPWysGs4bY",
  "key3": "5wjq5rCUubfj8HcXSCiAhjyQHZaoxJjbzntS31qCR2kHLBFaXiWGnRYEXe63eCAKsYDS9GVD4WKB5gLsAzik9Tmd",
  "key4": "5uimA2ErVXuJkY7yKZZsvy9yYc8HfX7e1nj2VWJ48igVuKnsWimN8gaaK9Vgfw1LwA6FBxZSXh7sYz8JVeQFiDsV",
  "key5": "2bN2LqnpcK5iJyfEcVtAErUXvCCzuSVyAv1LQ3b46jdEWdDSrg9mDrCDr9KaGujVaWGGqiUHTYFDwgWNskHiA1oJ",
  "key6": "3d1zmsH57TmtqY4PHQKKgaTzLWv2Xj8C9dEEkLa7tL4BfG4hMxgrw26KBrqN2fqdnmNqZyp2jm3Pj7t6TdjrVAeR",
  "key7": "8yuyrm1AVR8cZNNzSGrRnZ4VSDZ256KUCxbJHiAfpw4nJup57Gs4YDbXaPxsYVaszjJ7m9dfXwvLh4w7NLm9swc",
  "key8": "4VCvqpfx3gkgWp8foXtTpCo9Tfd2Bzq3LtMUew6Vk81vUp4x8rqQtiQJbF3XveNNtTVjoM7LNHfUPMQ8vb8sjwgf",
  "key9": "2NdTYf2HHgnSRwqn2XmBQ4cK7Sn64mYXB6dJB2KwvDFhqtfeb2rAffLTNokyCBbXq6C3WXMNQyfzWArrfYzCAyh7",
  "key10": "vxFy5GTPkuZ5yYd1cWDsPxn1qcUNt5thzpp4A6rLhQNGoyTuEg1LUwATKatjbk1iDPQ5zMHucaZpqhT9Z9tNevr",
  "key11": "5o9Asv49jNFpZJn3jnV82MQKbPyvVqZYGdwcNb5AGYS2P8vQ5SWST3uRLKAstgnD5rX1WsHwLzTJxmLW5J3tf7og",
  "key12": "4cy2sSbkGP5YFvw3zW6a1hoGLEiRFiaAGGNUo3DfBk3HLTd2Yo2WcMoucFkJZFnyWzsrcwDWvfqdn1YsXy49u9vq",
  "key13": "GKL399jK6UPKJR7MMpfhrtPrhBFidPEz6PiizkPoqVksuta5hvp3naem496eobr8n9aVgG5EJFMRPQxj4EWbTEB",
  "key14": "29F2uaHqBg5vLK6EJCuWjdFfCYttrWfJNpQbd8qt7xsVx2K5pR359n1LxBZaS5G6keyT9bNZ5qPa7B3cp7N4JGgq",
  "key15": "4Qg8TGsHzeDXPWEJUqqzCko9tTUPDuLPohNmKiymiKbxGCWYPKvwkkbxsSYrH6RCpPjWL44KLjwVu3AkaY2BwUrT",
  "key16": "3UiKriHQyvaq6txpNtpxJEPra6FCPp5F3PZXFSRgtwibd1cCG2oEPbj4c6nZ2dWvqLafVnZVw3EytPpQuSwGLprv",
  "key17": "2Nn4Gshcir1WmTkBWnsuzxkR1pjyB1etzQ9yKQTPiHYY9YT296WhE6iYF6RiHG8uMSBc2M7R5HAWdRgYRNohLgcH",
  "key18": "2BDXSzZtvCgwjCnmZkmpoeCbvTsgSJyYppBhxt86VkSsMH4KsDzvPaXP4FpEczHaUmqGsG186BY3NFVfcQhRZ8VQ",
  "key19": "36egHPjPd4gDrJmo39PuXr56cqNiqzGfeq716AxY3N9eVUvBTSP9CPJ2zUuZQNkbtyb2ZqTWTrwAgRdTeBm2gaxK",
  "key20": "LcMZJxx9D7kdRguUXvp4z5N5og3gN2ziiEyzempWiRtfzRv7UtUoxsJSnkxyCHV96U6Qktj4wZe8AZAU1fFVDgp",
  "key21": "495ZzCpigRXUQZ9D7dWWsakWhCmKCKV3Hm3uh4F3HeJikcxEvHeN2LwTpfLkRAiFfZkVyFghjreR9fe3nf7Qq1hZ",
  "key22": "usnVjNw6nDEJUzR3vHUTZoFGER6VgB5Bfwkx8WaksPzBeF9Ds2ztcGuZE4Zrby2JmbuTCBw5pCZRxzqyR6sALX2",
  "key23": "3yK58xATTraL5o9KZ7tgASbQCsvVqAvmDcSDLDiDChwhgMYUDuUMCie2Tidko9ZrvPfQyd1F18STk5FptfJBqFfi",
  "key24": "44E3Ldt5PKz1VNSXveU8oEkVS13TZqctkADm7RfonpXEVkNPTfd3u6Ro9czUcSHvhYescgzBJ5hE6yHhG3ZMd3vb",
  "key25": "4mebyLz3XwodumFN5ByNefb95Y7vmQzeXivP6sFwZkU1exxBB6VuPjTmh2j2KbqecwVUsdtjtCAaHwpVEqPDaL7Q",
  "key26": "nZuqj9GQfgRKhpXqAq6rktcXyKCM4Cy7zKpXMQHGpMAPJQD4Gqdhx58WC49YJfrLqSFDV8XCy46pyuVxjf6VQTQ",
  "key27": "3AcdcqNzJym3a1NYvjzCjV9i2KFtorYzNP3gBs3Xx6xasxUiGndH3MzEFoqYcmZ8jfb4RaE9Ho9E9goRTteWQ9BG",
  "key28": "3KHTJb8smqihtnXucHahrsY4pLN9mJKiDcgMUwivA6vNXHUMZoPUwt4nAx7LK6EeVoN1ehuAMr1DWwKTjYAv5d7D",
  "key29": "5r6am7dscGShZY8s1UqURM85cuZNLHy53D5ovaGAUKwgjYnfQiUbKcKqdwA8w8Q7HmTDN8xYx7S3ifP34qvEwfEk",
  "key30": "5NT63GeLepP2EsfQm9FJc57sBWUMziycv5HzMCHrpDHEiJauuYUBLSHvkW9cbcnXmrezBLGDaJQTxuu7ZWqtCVrF",
  "key31": "5Chgd3MSFkjCiYhicmLiYCyNh2zL4EnKSpy5m32yKfKPSGZFDpR7Q3RBt3m3oW5JSPTGxTpuXGSXW7ZpQRsj7UCg",
  "key32": "YJJjrULWiGTCJDeLUw879JaG13LtHeJ1smAdqeBv6WuVmoFbuzgXbif3rqNAYA4kCHCVUGJ32BMrd3buA6EEVoJ",
  "key33": "5KTEigMvEk9Rt8LcQi1Y3Rui7rvPA8MKc6gkFRBZfNTYbvFwrm4gJUwudVkZHu9KX7VnBifZwYquWsgPgmnrn4Yw",
  "key34": "3cRNk7s64RCr41nPXydgCb5QkEX1AP6vKixoAAU62PESfkGnHB5u4kjQWaZ6XVV51hBUY6XDjsNBRaZsXSp1k6sT",
  "key35": "2JpuPCWMT9ihsTLeVwF1URbQGWEar35nHiNbPjfV9KZ1yD4Lhcx9LxnT4wHEHZZJsPz4XtRjZEkRFCagM1a6VokC",
  "key36": "4NHbyMkgagrFxyf4GVnkUjCrWUGrVJUk2z7fU1TD5vtxAfF8HzXMR9UGa4LkLB5a4GDRgXdXiUyKfzUVh8Atpkio",
  "key37": "5zVkmEfZLjpT5ttU69K3vjMzbF5sb6e6imCTcMeCgytpfWiTnj2RiZAYCwaGYwUaBTGM9jFPQoHUQFtJs9z12ZN9"
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
