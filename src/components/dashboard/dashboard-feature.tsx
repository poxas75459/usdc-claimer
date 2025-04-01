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
    "4qGKBGjPiuZcj3Z24hi2Hi9aV5i7tj4GLdLYnG5SToMF72bzzVfjHAwfqDjNG64MH7obTCt2tQCWhmhoUM5y7ESL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EmmdMvqx8NYcyCFUxgM4tQKh3ZCZ2Z2iAZSV9E5Qe1K6CiGxQRqH6sL1S7nML3MKsho7iLd93VkrhVjBGR86xXU",
  "key1": "fTC7MwsS7JZQ4173avw4Wefn9xYBxGkzPfByPfYZyLn2MaU9sYE1Pib8KwkqK2rjPBCejYiCG7aPk98ZWVtrigU",
  "key2": "52eLvrQNNh6u2hzqDVjg2briooh9ZRPppGfBwvtVN2C2y819x9rMdxDx7g5VW1oHrKhYGtT1k9ca7v1kJZfpUsY3",
  "key3": "2Km7fnDafwCsuq6nJ7EZPEJJbpbr4pfNAoqtCcqnXxH9Au79ZjcGqHKAtFgG477AhbXPhp2wZQfyHZhMg4jAGoNs",
  "key4": "sgGzJQWMuxLhmneX9Mu6WG4dhbCnNzXcoYtJscfHKaikYbgcbR7SHxSjBzRLx7siV18kGA6JdvRD5t2DzX8jspJ",
  "key5": "XY5EHJuCoaD2B7j1dypQBVtG9KPtaK72gAdERtp5UpFfjTHprmaARchVBTJzYJfrpFDus5a37uVu17bJkEfBAHd",
  "key6": "3MHideuPqQd41TiyhQx6GPEDnAwM36QaT96drHRqy5sWRVnq3yWAeKud2AQVk1jxYkY2gLQx9bBkFLWTYTq2F1Wz",
  "key7": "2h5F28rCw8XHLknQxis9kGLHVMTnBBKKcU8Nt5s3S2D4VYxCXiYoPxT8SgmWNmekq3w1XXTwoFsvQa9ZTvhDWdEW",
  "key8": "5wM76xoXnehK9jDVWSgd3QfQtEeMLs9J5aGRF4QvgakSS577hqs3BQPmkTMcGgv8KBkc7jT9hPKJ8sqNmjpRqNZy",
  "key9": "5DCiVYHGYT9dgRyPYTprs6PLXcEM57JCyVTsR7LFSyhvRFXVsnFrBYrUziUSbYcWPVkUatKiQixGteQQRHr8nFPd",
  "key10": "3hECwNB5SXRpVNLKRRFTAxdnZna2u8oigzjnbXnw8oxdTAFXMCzWvdwP77z7mSWnwFzEtr7n2Tkbeubjjj2bPbUK",
  "key11": "5T4ju3XsegzEVEPxhgpJaC6D7SZuZVGSg1Phrm84J2Lbx6QpkTjiVuGW8wyhSArKqeJN27VFc6nzV2DjeQ825jog",
  "key12": "66qBNBKFvh9jHmjre8DG9wnENvMd11t6fhsrVYddueaWWuiTv9jhbgmAGHvGYeshnL4g4R8bMAaZG7P3ePZo4onB",
  "key13": "H81yBbm58zy18WoE4XMkGEg14iob8PX3PvJ6rgRcEjyGGjMrbkab3js5L5PmE95mZoxmR41iivTRXWtDWB9wFQp",
  "key14": "5Z51A45PL5LHdbr4E876hfZpsgnakAx7LD5rPm8ivwUCgj5wZLCnnbAx9D8BHeFywPy1be54hYPbGbPMMqkY4W2z",
  "key15": "3xVr3ZmFWKN5zDCPZMJu3Ayv9xfZHxddGdGasfBd5CzUGFzh4XaLvQhtVu674UfTcmyD9YuLuTVPAgVWRXY3iEPX",
  "key16": "42ZCSQcyUcXpAav62p9oSC3Kq5aHsawkyz2NoTmYxinjWVafzrZ91LTTmV6RjoxBnEbpZoMBeKJHapfdGr1voTzT",
  "key17": "2j9vwJqku2Nf4HNkR5CH1WHzLJjG2QYKp36fALgYxe4N9WBbaxQbd9haENrsfuGKQUhzgGswN9HjyKupyS4r9orH",
  "key18": "3ijUCBQB4dhfRSA2ss9oBbgXGWv2oUY9MSyYTGveWRz3rGoorqWmugyGBtZ2WgjDqVto5vfvRYRPhLkNNAVBc6Mh",
  "key19": "4e5qjY4UJgVu41McGm5PyzvBHsJw8sz33cbFGVtf1yy2TEaiivFo5qziZXCUvPLfeRtTFY51S8P9FEQUgece2qKs",
  "key20": "WUEDkJdeiACp6nfiNCsfSeGyh2mRegPfoG5JvXqyvjcVpYAvG1EQESMogmFVrV5e1GR5H9HSAytnHfrP9bscV53",
  "key21": "24gvGrhg1CdoLTZniEBTF9QVnGEHwr2wK7hzcz1Z2U8fHNGXuzwJByMSx9ujyVsCqjmjcGSJ9TQKPRwuiegF1dCB",
  "key22": "HCezyrbBW17HyV6LspjHEhsXD4bQxtqt8ZCV1EUGvcBspyy9C4fKWXLNKg2J6BXhwtGmP3VjP6ZErpRpN9gpG69",
  "key23": "2173KQmcKUxqppYbk2L5sPjPuZpkc9aoisAD6ph3JCbooZty5fVmHD4kS5sU7pUDTHpF4ZKKsDFZDdzq6tWGPqzK",
  "key24": "3G8XdimxLegbC1jp8y3gaBicDtEmhQ4mvBgHSPnBUBe9ugpwEfh8Dr8c6JjygpmDBqw6RFHQncbVcZ9TQQABEkV6",
  "key25": "5TykyFSkLHaMxRZNRNVYmdRLzLNiL61RVfVCKxmPNJocfEPKtLpm4FdvXKMsZtvkg1a3x7HdY1gB61gECvAX2L41",
  "key26": "2iC2nNW1izmCj2ELpvwtJMXH9UxouyLa1MkHMz5a2w6BnqUZJdSX5z92m2swPNqN2k9xyPtaoqXAqF4oPgaJhmvF",
  "key27": "5KnJsZ62W9NurF3F9fSdGXpydMR4UJCwX1WyPYr5gmbvf6U4pz93WaF1uP9vd2rawA4oXKRXtVdwiQD171wWqStF",
  "key28": "qdPzYB99maP2eDsrWH6FxjoivbS4h3amp6pTb2P4QVCv7S1zhyRzcvMnMHtdXKvk5Xzy4qw3nZhZ8bSGpnyK3Bn",
  "key29": "SDndbQKYWg64PrLBAce8KWwxPoVZZbNPD7LzErQ3Cm9xNKihrrcdzLfZ2bAe7j7fPXKWHWhhKZFbSsCmAZ2wbe8",
  "key30": "5Q97ZftM3MryZhSpj4AVwRoELRvLSHGNcmsSDsD7z4iCCra8rTp2zUu21emifaKGjmxTmSniYigGriCsirsJaZ8o",
  "key31": "PDtPabMKBaVZnSqWbLiDvXRsoCcdgF5NrKSHCYMpjdYrMuUU6vFkx27TErcZZDZq718rKarNrhbsGTb6qSvWYup",
  "key32": "2GcXfgz8y4HR1bqhHkbngcXaqS2UUKw8q8Jv4n8t763ug85eyPwaYxBYLqWWwi83o3FigZ2EErdE3nuk8q1KreaP",
  "key33": "w7D5tfUbtSUERT4m1sS73qoivdZR3aHRJkgn1ByGtsStnEffBiTDEjr2qCMTJAxLe768oJzhxLyU5tHCWEvVzG4",
  "key34": "56R1jP1S5F9AKt3g9JE2mCqxiXw7a7zMLwzJJjSLq66DZhifTgMvbhqdNJmKMbftF25EU8QXJgKnTaK3EkrPDdV3",
  "key35": "4FQyAYhzYEZfzTSFMj4dMAA3nif7aSkpK4DT4r93821huKAH1VRUbzWdGhMeGBuDyUhbieRY3faWk1sS5fujyqgr"
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
