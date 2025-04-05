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
    "32b6j5RGDQyNM3Tpb4P9gqBisG3aDBY1z53i8RtXjMwHA5H8JZjv75q7rHsNRoUw6VRos8otv7iG9TfvXdqPJk2y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xqYZZ68XaLfjTqEDJL7F7mYiGePLmCtuAxYgjKKFnPM2JX5viLHy1rrgjEjN63H5Yzr88m2bcQudf28gxjZZvkq",
  "key1": "4HrShArKcxSCZVeoMCgVqN6nbseZj4vdakEjsc13vcGPdmJdPxdNPSd58RNEvT3YnbsgpKeRGiL9zpYfb9JAS8RB",
  "key2": "3NURNqd7ZdzwSjWFjs4aN8XHdnVd7YgWnNRpxLCKofE2WiuNcdSh1jFWVnmw7jBwoXWmwRHH1oT9KAb6jS2vEku7",
  "key3": "63BFyMParUdrVRm8nUhLagfhDfnVhDKGVu2Qs5uNpJo7NLuTpGxhYurPT4CvTbEBFeQNZo2jxVLtAH1qLNcyhyPF",
  "key4": "FiVUyQ1MBBfMWrLeKsRtA6anLXCPBBxU9s11mvvBF9X3FRNNnJw3CqZHzQeGDEM1UER9DSsUwBeVJrjrQYpr7BG",
  "key5": "2FpEEqw3ZPrRVaBCo7Z5L8qBsA9BQFCDH74sLieRmYWTqybBXEA6KQKxBwXdy391jDjVfvAKVKNas2U83WpuPbEy",
  "key6": "3yNvoJNFXXdgnG6ePXdHXWB9QDYHcoquhfUqSM9J4EDxyMzMCTsufurDkran3QLXr8yKt7ijb8BX7JXP3fEPva36",
  "key7": "GpATojMG4G4xHviAkRh25Po2XLB4m6npWqiY6HVijVw6yWyBkQJJVDwyL7d2vsyJTq24nLct9MgjhiRtDyGbyvM",
  "key8": "55QBwcKjqKMYPeVLxYbxzDLrfXQ4vFFWmtr7v8kHWMhgK2KVfcLXhUfL3ejjWeSW7APsgpuYFWbV98HawG4Q1o5W",
  "key9": "5FPPq23GvxhoR1Yuc8WhrForUvVPiWGGmBXUtScxTGyDKryrouCL77zogTnL66eURCYvVib6Zcd978zx1rzCcj4n",
  "key10": "2dXE3tDF2rv1eZYnDvaZZnKwXfH91kheczmN3e1gLCEzggek6A9nj3vVX5nDacGoSPpc3SvzWgTUvZLMdqkBXiED",
  "key11": "4mGn8CoeXfwtTrD9ufhFMwiNWxZZELLaoK6ok4CsRUD5Rt35mhqAUb51wiL4YD28Kf8yZGSdXcaVgy8JY9i9Td5c",
  "key12": "3135euBSEVVwpgfs6Xjk7DP4NkhWKG4SjXhGJLMhsHfKbRwtCTcU858K54phzQNhkDgBb9GS2UEeSEL3oDPKZQE3",
  "key13": "55JoCo8CSjCUUiuNb66DHRfLEgzk9EwasHtE34RoTG6y54Vz7sUq1tNDSWDGbWvy8LC6m27aKTnUGTjWhXrWuZTp",
  "key14": "5oQBXnnozppiNjnqVsciykzFmWRKnfHK1Kwe3hkupgWMmPQyU2HXG2LUTjXrnpVbdn7apJMW48p8QVVmP9knKSZp",
  "key15": "YoCgfSKmZmcgDtnB2ARBq16sE8Yb5nmBLbmK3NoPhvYJ7zhQwVvGVCrrsCQTvtzvESncC9q7FkuHerFcxjqabPG",
  "key16": "7ppm5pKbQniU1wpnQAvBA7xrV5EHbnSVsT82D6rFrxsNyW7MZvGQBR7Y1dq1bKTyK3Dkr6A47P5boSHdq4PaEFd",
  "key17": "3TdCA2yNYjUC1LsM2BrrXhtvxeUQEa1B4AYcW2SDAqvNuwUsWdxho8Br7BsuhYDa9diux121hLbS8VoGyNDUPaMg",
  "key18": "21jTGRVp3pW1tHGjHaFSjTMFeTTfRhKzvW87ALNiHp1JNTCKvLCTeWbpp5iDDdgpMmRhMxSFmkzsVYscogV4Hr1T",
  "key19": "4WyfMzyQoKqKVDmhGvFS9ypckqQ5pPj4i9yNBXNiWQDBMkBZwaGZBFmcuquqBhtBPi7auoSP3UC3s4MJS4vhWRx8",
  "key20": "5WxGfuxcEELHd1Acazh91p67ZnUT1oe4EUjaW2xwiKJUQbhkfAcMRD7pKwQBWJew4YUYNu3mXJ7y4qczFssJ6RAH",
  "key21": "5CcFmz7edCtSYd9jzNGwVvs7fiq25HKUW6xDvR5cSsMapW5mNMc92GTD2ooGnDPvC9reSFSACWTq6jTmsMpfYMWC",
  "key22": "5vqMZ6FdjSUR5zfZ7qwAEahdw4MjUgdi4ucScWqmLpDT4osSiv6rkcgZrrStQpoSFvum2Ly79LhgB3tkm7HdWCF3",
  "key23": "3m4cnAYe1mXcZVsXMC2pu91dibJ8Xx8RWtqeyWue3s9qHodHCS1cpRsPCVfrUWKb7X8iMqeRTyhkgG7am9oiDeEz",
  "key24": "2wAJbwWmVXUGLKUBaNbaUvCkqz7CqPB6FZYBJVWqDQvXBDF75fPvecioeA1NGBqcsP7MLb7KJwK31bVq3sWdRnu8",
  "key25": "2zL2veq4zMQ2tAtxZ3BvvLGfN3qoNb76sssguhDiCrE6GvnX5DdGqx4fyH7DK4WzdsWPNvQTyfcoYDeC91VdtV7f",
  "key26": "5ttPqBxn5cryezD1dU2A1wCT2whNCSgPmfrdcmz8u1TyViBMUcxqsuTaSBU2xMAkJBCvMdr4Sw6ve5aMiBpfJPha",
  "key27": "391SKQhz83ktjCzFjzqH6oc3YonmoUwFCvZ4ainWsahwVNvpUuJ3GJT4WVrk96yEXzhAKw1a9ZwiHaxkrVaPmmhZ",
  "key28": "3jfqQZ8LwURwpt5aJvxt7SurhGbAgUWJX5Y4LpqgLs2wecMPVwkCaDMihRsvTCRJcdamiA3xrLA1j9nyKsLj2XRd",
  "key29": "mXauF21F1GCty4XrtaNpFK2nTUXfsZZr4JHQSrrWX9qsa4PZeHAMYgXMW7tAHrxE4c28t1rUxAwxLbYdoBWNtLp",
  "key30": "44U4dLLaDTD4gSzjyACWb7zdCJTyy5npgjTpdbRNNKdW2RFt6kXUdhsw8q1TqqAvBa6NqzsiRUvAkcrtYPJS2TBA",
  "key31": "3Re1Yr1YAMHuHcn5HoUdoj1ezkAAkQQ4hHX9P7aaad89iavWLusEfPXHnevuaCFVX3PJ61nRJhapC8apzzEqoEhT",
  "key32": "2vJrdebNVVy7DCW9juXoPfABn1wwzfe66pv3h9DsWbgtczaAwzXGtYrfDVxr75PzRJPaq15hXW9cv9e8FXCsUyJT",
  "key33": "2bDF5HLkzH4qNsVnVbNfUAWsG6c2jUv4kGaC9vW6JKAViS7cg7RkB23jA6J9BLvBD7SwQA1aPScX82yhQP62sU3e",
  "key34": "4TRizVJXmTY2mzZaqHdnuCjJgAPYNiNrA8MFToGdg7T71bjLgNS9XDsdFeDmdC9BWvH4ZuvHiFEh5WErCwNiAPvi",
  "key35": "AKfeFRJHFcjuJAxBUFsGX4tTyQRJsgtQA4yXgxU4Yxwcf263y6omGTuBxdhdZatwdB355bGgZyGZ8GWL7VFPytu",
  "key36": "2sQAupZSAT15pQaxqw5R7sNskNPF28pDqrHFC7dxRib3FzDYTWKnh5XNKwxgzrvuLzzhFL1mingm1oWuMt6BCdT3",
  "key37": "5Cv2V3iPMC7coBozGtgfhxh1BX2nEkc6QHhRMwU2bN8BYSxZnK6s7bQTKWGwDNedYDWHCNahJhzJLMH7oGa9nmPV",
  "key38": "2ZW5B3LmPX9hDhLpdBUG2sjMM4UNqGDgsjgi1uobS3dHyXbQB2Guoz6UGpaD5LrDw2iTkxbWZ5NeLTvDNg2FkMKD",
  "key39": "5ASNsdnXKapvayW2gJVgnJrCZqWSYPDgQnzd5FeciRsahvCTcGEoQduRH2jDKT9Vu4jbHdNJzBRgB3Rb2tvyjfB6",
  "key40": "661amGqSgx7TJduE5bkkoF6D848bEDGRZXmYZxcGRUeEaaJgL77LL5HcyGMBZdvcfn4k15M4z1P1FJZKpjGx9rYz"
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
