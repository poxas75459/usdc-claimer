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
    "nh8JqNbxGmc4ouo38Hw8m1miZhLNmrPZkF3E32o5GLPN44AknrbRr5F4V9qXqKWXgxvvTf5uYRmxeUTHhB68ykF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TfHhUBqbiF2PEWRTdrUgFEJVPfm42nVenG2R1hMaMrxDwbNwJSc8KYdq5x5aB6qzvsPe9HYmdfWugBiEZ4RRKPR",
  "key1": "5sZQc1WnVSqTmCijNkeQnVDxxAWpW5o3AhoSUHG82jJFoPTPSMUEFTVWcbBJoGgqecy474Yw9GVF5LckbZKoPAhr",
  "key2": "PqyPZ1MhAP8hzeSsbYKKDvzvnURUCRQp31y6p9a9CYoTYc6QHkkYZcTSAnZDR8Me2fVUfumKHgiFXPUxVFdKRHL",
  "key3": "pSKTu75khPamhpDDJHS82LUgeXicg7RufA4tQ9YR96Doecujth12qxFwfW1JkwykBV6QejjfWGLgsTcaQyXj9nK",
  "key4": "3JwjJRN3U5BTAivYMNsvAtYb7LoMwnQXdacJSwrjS5wfYtJCiDGFJha6B4fASF2X9xTuaaepQ8bXC2TwhuP8qnBj",
  "key5": "3MzDmG9Ycs7TRubXqbQMWdEgNdfa3YNF6aJN9spZdBFSav7HCxYJkDWUCrVs53S9UmZaUCWEFLQGVvmwV2doTf2K",
  "key6": "2Q5e6sWY5yMBhHWwUjVdDV3hCVL8ghh2ViYx5QERLsJHtro7WPM7mTKPY6JyzDY6oSiFJ6TQsX1rWGQhnMPQ3imw",
  "key7": "5tvhfTEyopQiBnBhmzaEtnBvKAPpzY8frxiLAWAxCqYE75PZYk2L1Bxboi5DTCJLU3dhoHgEgTUAy2G5GA7XHoDx",
  "key8": "kPrPthEMS1wPqJ8GtfzKwPj7PpmftdLbTYgGjkG59UAnnsvQ7ZFjsgn1VvkAMQ1611MkrCfoX4UramXke6VDJ23",
  "key9": "4V5ooo2ATVc64tSLPrEy4czsVRLSB7X8ZUZ1ehVqAvifaXZQfLHTNR6x1ahkyKPa8RPtjNSVfgvYWcUGANs2mu6i",
  "key10": "58hyLTrFkbQVcfuLDBcnn88aZYMd345RM5M5sF5F9FC6zXFvPh7i2ek6yoKVKSgoEchUXfYQ5rivND1ZZvzbPtMr",
  "key11": "3K8iKyyGCTzgqMng2L71oMBugiN8yTAwuhuGGMKGwRNQHG58Cs7HbLL8DGFEqtzJatNQqaUVYapUFF5E4TeuJvrr",
  "key12": "4LKaj7wieiaqM5QGntfSeUS8R1MA2Ryw7QVyB5a9RMkvdNDb2scUN5HeKL1bLQyw8MDmVjXZDZzCcGRVnb6WcGca",
  "key13": "4Z8po9ASMWwn1uPH1K59hvxHWLeYw7YQAiFVsYeNxEbzZbzsi9SPvh8pUL4zPB48ui4Uby36dh4Msb81ARCezqLR",
  "key14": "43dxvvC9dDf39h6JoSynKD6AF6ASScJdKisoYD2jLKgBzhNKM77RMo2MgU4NqvYBPs61orwFxnfXiEzWVaf4R7m1",
  "key15": "3pv1NHyRhXhLFYSraYgrpqY6cjaqQvp44YGTSoFnDdZfiB8he4aSimPYq4XAfJPNkcjXanNVw14ApetLMMAWmqfM",
  "key16": "5Fzzhski6ovzuQF1sydK74s17Hks36nfPgb9FwuzwfgdWjsAT6ATRKAczjxoxp1jvwiCxPBMcfPTg2PioE4A5LCJ",
  "key17": "3aa8F2EEjApPQVhxAwr3RnzhPqtRnAduEtSPAJN7AQkgvMq9YEgiKmvgDC71CzTcmsb9aghAg4ViBEmMQCwzZcUg",
  "key18": "7hwKznG1iebneh7GEgbuQqvHFQSFZ8jSJ5Upm4REDMYWxZAkHabhD4mBKEejryoDaxuDGicUiJET9G593hL32Ds",
  "key19": "5EWcx7NexxwVLDrs5s57XAihCQMQjBqeJNJWqKr6LTwkj4csbLZLM6hQHt541YzFrbhp84LAAjsWVoWsKKjhSUWw",
  "key20": "3nRfxxgm1DaMYe1zSgm4P8yzd8UhQDLnmPdNpop7weX3xaT2hwpskhHTx7U4XvDVHoMzUSaVzgCaZfEGYwgph5SX",
  "key21": "6182iCMtT3FkXxG5GgEVftCDHJXsNjoN8neAXQPzE2BhFk6ZPRfSkd1B94YXvv3yNSUDW6mcSSQBMDG5u2JuhHmq",
  "key22": "4Aqx51Rfv281Qdi3GGLa2xFZDHJ3FRrRF9wz4y5cYYpfykypFW38wff7jMBRTXPuoxAq3FMTLYMpFj5WMpaHwgCx",
  "key23": "5r7k4Tf3FoBX8PeUG3DgNimPMwd3Ln7RfY8ZsJpxWs8iySjnLFNN731rGJnxV4VL4Heza6SJ5txivFMGaAifD7Xf",
  "key24": "3tuVVq72aBwius3f8i1Kt7DaXDDf5A4z9Uxs81aJq1ya96kqSrA3AZUTqgHXfunHchQwi5HSa4bQJJz1rTNpY2XK",
  "key25": "5imtz7bJBRQ9i7iCFV8aLQMUgCbopKzEwfCfGgxMHUDnzezpfhpeNXGZRGwXXhqZam55qXXfe18xHRokqDdrbez9",
  "key26": "sB72wz2vfNdDFQkc2HCUNXU7yQGbZwuA8HFGNk5cuRev7H8PVdC2hZiYZfTTggTj77fuWSeS48SoXzEkz2tSng5",
  "key27": "5SPXYCu2dXrHYAY2GSBQAAkqLFWg1sRBu6UP2PaLjNrhdbYdQy8HZn9xP8rphfBHngtjJAd73ExTEB1qkVVDiTUR",
  "key28": "5N8Yy3kZL5gPgEwcMas5WM7LjQzvWRdZ2JX4KPwNkNdpr1rYMgsiUNvsNAG3n4brTw2oB57ue1AfSrhHjbFaQYkS",
  "key29": "5jE4WmhkA7WQQjtgytgTWQTBZAAN6RQa3v1DtcT4qdf6as52x7pQdRjcESxDP5BGLNmsga5zs4hYYDMUPZTVFV9R",
  "key30": "KA6ETKpajtEf69YGoBUBTdKMrq4gpgPZfR7LgqqVhh2qE6jWAK89D8R4kYLUVpKLVCaUGPRwwT8W1XptMgqWwgS"
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
