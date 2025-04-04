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
    "2TaPXeUjzHzpU8ZfDz6TE4mcuojyNfqeP3RWBtyFi1X91fvHBGjFy7MsnYSk7SsYv6zz6YjDTSxZSsaRzXeEkMQj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3n4QmSiBu7E6KUGyKVd8UNLKEcajfTSTRW3S2Fpouvioe7vdYHPaJ6Bv9XeQGBmoaZhZrWg7vvPpscov4sBiGRp2",
  "key1": "5D8aVg9bxLvZdp9BULJGoPAKxE8RwDgHdtdsuyHPggtAZtYYdhHQv8538RKg54zGbi6MN3p41UX7HwaKD23ofLqE",
  "key2": "31VD1WsZyVVpUSGMxvVVtmtHoyNcSW96pXikSXYDBV8Vm1N4nwBU9hF34BjFEWbe4pxNEKSj8uWUPfv9n81vEdqs",
  "key3": "3YNC84KjWMUHeXwPnecJrMVUk8m2NmoXyrE4Ru2wdeimstoH5vxaBKnbLn2iyd6knZfz7UA4eYqGwsutH9NGRYY1",
  "key4": "yKiSwrSwHStckE778mERhuun5bojCuP6woJLGS6bCQ3JGfpDLNyU7RT7ak9s7APKQbjokssDGqLmyJKb928FHWz",
  "key5": "3oPz6j8mkjBcvrwVdiA62NF9uRvnqtDe4uV7gVajHZpoua3Z5uq5rMY4UXKkZxLiMcfSfyWuRXBTyZRVDxvBt2Jy",
  "key6": "2dswzwiaxDmvg7ucAub6mxcnRrFvgHYxMj11mj2JkAHw2EBkmBhaXNDZFDLdB2F5Db1fGBLywPRRnomxbCbeag4P",
  "key7": "3bKTtrTw5h6rwjacyAzpUqY9kDJVYmi8yGhJFVFs66DnLrbrRF7AEYj4EWyn5nPM95gAEquFsi1j3SSCL9JZ2jHw",
  "key8": "5XMps1Ed8LxmEhbGJDSTSXazaEHPqBtfw9cxiAg23MCDPyE2aBksrewrKWgTPdzc8LBWAvx6PeG1xQCdQfiLmPJr",
  "key9": "2Y5NC4RNQbv7i4gYstVRx5RuWg3dRB3xs5vcri2oRb1KttYQcPdnaovkCuFe1MHnA79z4MFQBMKqgq6FBcjVUTUX",
  "key10": "DHpGJx15HDXmTFsGMYw8bfHq167MGSDmj1UKkW9PTc7YeewmY3EJs6hpkHtnt1u38w4sLwDWXj2MYJvsKHnjGXX",
  "key11": "34KzRUwwrApe6Z668Xw6nmTWf8WdY2U2CKNSZNgpaeTdb4chz34EyBo3YahqKdfAWbCfMf7ovAVxFDbx21Ffk5VA",
  "key12": "4xosvjvPWRTwWRAa2NR84Xa3j9v5Wi53Dr8aKJwcSTDZjhCZ1GazBNSRY4frMyzWDnMxXt1mucr4JMDeprjPTH5u",
  "key13": "3kpevUBr52kT3L6nyKuHevaszhWe1iQpKZRZbASM3SkjXFNEofWUkC6bb1Jh5gj2LRkVvYYSxNXZBnK3yNGYd8uX",
  "key14": "4t2ZZ8eKv7uAKpd3q7G1g4XjbUfKSGM42jh8qNXEhgvsHSpvjhAv7pk63qoyT9DNUpEN95cu8vWL4v4idQZ6DAjp",
  "key15": "8z5TxG7iZYUdhPyTaao83rAHw3NaYTJfATaPLADZVj6AQBE7qPsTC4eRZ1aF3sgFmm7k9ahs8BVa5GC6nhvbN8X",
  "key16": "2A5zhxWf85ZSCSSg2aN7pZJFe1gjxDvMGKgFBBWU7Bepz8k8aY8woL8H4tjeLmJ2Rcq8TnU8S8otMWx3V8meFaLm",
  "key17": "eDGEmyY6rs76YzH9iLNywfnuyFPVyi7FWA7jbnTvd8xStU5u92hReAn9R53xBUdQqff9XFQ5XxqWkeRUtwCoyKc",
  "key18": "3p4PShthBJqTdWa2UmAZsWM6amemvtSUMd8HKcADDtcT6zGum79sVgMdmzMNSJSpEv7wgefzfXktcEDVz5pk64k1",
  "key19": "3WjiQhk9WhiQcBtvohpToNRyTZCHenRrRYybTKavSEWAQwijNsyDrF4M3ndYbW6oz3c3fMd3PZqHH14ehah4CQZH",
  "key20": "oceZ2vqVjfskiC3YmbYNPH1u6b1QYFyvax7efng8UbywGWXbp9nmvoUCH1siFY4UdSGr2TqGe2RttA1DnbPsefh",
  "key21": "5D95RohtVBHowRVxFMXWJeg6y1rv8PX3oa24kCTejKMx2Cf41NJV1msHQEWA2Fhd32sbqykc5zu6GVtaw6uQZ292",
  "key22": "3RXgDgfM4FmxzfqnsAUGR17FJh8F6VFRZhRSADsdP9Juoukdgq5gyXFshykLSY4z1QWfZGEjf6NRh1a98HHt8hDm",
  "key23": "4Y1mHTUf9dWUdANSJPBDLGfryBLAJZ5WR1NcjJbY6TF3qbQ3M99iLgcVs6nnYD3m26XftMKHoeJTuLQyZPxLV9tm",
  "key24": "4sLTHGNdvJ6h9hxBGNVgbLbvLDzv8z66X4sHuiXAVpJLHxsup3uNSVn8XBJpLifH5evfsujRhdECXD4WZ88qv1wC",
  "key25": "24VW8RaGPuTVwTXQ7c1SCdn5wzSwY4nSW6efq5V9nMJc4nsBstxwTVxcLBouviu9BkdcrcEjaHseg6VFRdodqyzu",
  "key26": "3uPzZ4fbjdLrZN7cqAsTDSpst5wULLGUnj76RkBHFseoCFH4a51B1smZpc8dMb6uxC8YVdBNinXdAKL6GjVJ5TcZ",
  "key27": "MEW4hZMrGZnNiwGPc8fFB55MUKM7mWrQnhuSGCZPpYBZf2cZfC3rdWz199oaspcR2W6WuNtN7qNLydpfuF1FM5P",
  "key28": "zRqEQBoYHX3vrvrvAootzk3QcFP55724VnUgRxBK5Zoi2orwbw2gjejJ8AYnaRwds2JAQ3m26YxxjqZnzaaa3ZG",
  "key29": "5Cgs9kdAzZqebpSJpoRzkDp2u88zAqQsrPJvqx8aynAmdfFg4iyLXCByag33fwaPcF9oZEWZqVraFPWuW7wdZ2qD",
  "key30": "3iH4hHsro53FrmXJLLbzmwEJRJANShcdEe3LNUpWnNJN8uKYeTGN14FHmvnhotzQwv8nYDnvgFpTJ7ZKSNBNdueR",
  "key31": "3Za4E6jBgWZeYd5wYRo9DiX6fDRQp7hyWQopb8FhBydWyA5vagYXJYKY9xpcwbkfMVj9gzupKYNCaahsPbGeWJRD",
  "key32": "3KWxnjH4sZgeCy6Nh9GtPr2ZKoYn1w4AUGKCsRgaMm9G8zuYDSG184SaoT7YHRYsnCMheiWcfeFZEuQDxoSR54Re",
  "key33": "3Ryo8cFKyY8BhD5EFYUSCcFzDFnoHtcP4Mj1DVVav2FBGpxgc8KYfF53bQVbdf25A7DtFPacb7EBvDWwwuJNDHhc",
  "key34": "54d9xyhYToYbkvad2NsedzdHhqqykz7fRUeRUS7SvVPghCNKuTB2HaXZbUQmRQGt4pdwNLgTTvUDSq1eFCPjtADp",
  "key35": "3WkAHHAGyPnvAFVpKAFbYX1BSCWRdv6KzHWSvim3GCQk1TuUq2o2UMCudWUK8Y3Fxvr6M6AWEU6VNS4R5SUnQiCz",
  "key36": "5UpLPJGUtuZZ9nrRqbFjt2xqb9s8QcNbvotqYnQWY2k31uQ59wgTWgwBsKSy3vCUKXnUVdTNww1dtgNrURwuJ4bV",
  "key37": "2zYANrDKuYhg6SEHf2wks7xfdQMMRJPZtgvuSEkAE6AykEtibbpFRPasAxBWksCzXG2hNKcDW1cRsLbnkDb7Q4EG",
  "key38": "4mWkq4Zqxk4KZfcQbMpVJCFKNRFqk5RNJPG3L9ARPjAHf9pxAJtC9dYjyB8hHRXKptoH9nWqfYPuxhZNZDd3fJfe"
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
