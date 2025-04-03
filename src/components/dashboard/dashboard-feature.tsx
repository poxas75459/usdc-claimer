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
    "2ioBygNvyKrPzQ1p75b54fE3TKNsXxS5DCf5FWUbJoU617BQQb12Ky6XUMHowBxC3H1nXa44PtvyWKJU3pmhMZ1u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ddosjecAv4tkKcaGaGhVwzGf23EX8pzjmp2JE9RikfvFt5KYkUXTr5AFYVDs6F2BuvApq2ESrMQiz14T4Wk9KsC",
  "key1": "2NX8z1eCzK3UyMh45g114oKTXZkunP189ttDcCSpunDCH4pBZojrXRfdGfGC3UfEKcy6mHMopKiJpH2XwNJw9qo7",
  "key2": "4FFxtCckYirYBejXr5sfsgyeptAZGknYYtPxd38ViVpzAnE2GmYCEzxyX22sGRLwCxiQ1fsxava9TA3RavDhqBYy",
  "key3": "3tPWoBKwZjEM9joNHztozvqjrF6HuKEbGai1KYmP1BYTwTXHsLCTZLVvgDa9HkjGjJbsjq6LAnuwG8JCdWkAHaoZ",
  "key4": "g9ouCbMRHNtoDZ1YDUdijR9oqzay1nELvDoEDDBpi9dtmdtM2624s9bv1EKCyrxF4qxxrekrkxHTUui1qP7oNHw",
  "key5": "2EJqH8jox9iBhkcffrTKCXm61BgyqDxRTJyLPjgvE2u3b4zQLBBJGEtGq9Bx9gqsYcQ5M5ttb79heGt1xCcfyLwX",
  "key6": "5hm5YXhCoiRjKSV5NSQGphoATJUwwZguSzHG62gxZBjcR75YExsp6fgfkPLM2a4TV8Df87s1mVJtrdCcAJiRjM6h",
  "key7": "4AFbusH3YQoucvdnzPjgft7PcgmAph3kqDpJfgjoxPKhoLWH4usqNniCTzo2cH5Vy1mjNCspT4rGpzi2o5aS7BHU",
  "key8": "fg1VTzA5M2aVH4Ptx6hNCPjbRaHcWvHPjQCq4U1JG3FBeQgvFRQHMXWR38b6MgnwUHhGeMRt8ZKzkSXnmW9zS21",
  "key9": "ACZvDH38J3Y1ioNTbE47RNS3U7xGw4A3WS6RrZtqDQ8ccHhrbLMiTDppjqWuQYgwuXRTVyuQjf4gYRkM6mtYMxV",
  "key10": "61WSQULgmNdioX6z8RG4yxyxGjStAfMAjBEqxVAmkwyFPAsyofRdE5xVGH8xHvk8JsNUitKewiHzvnpXiWpmXtYn",
  "key11": "2Ra7yaA2Xo7oXZ9YyivhLAT78xUkZ169hkgm93CzARK1dmomPrH9cdkWTKBXcQHWvYqd5MVMAnD6ADA43WPeL83a",
  "key12": "4AYEL47jeScnGo2R2r6BEdXvSVwsozrmmoggf8UN1qo5j5LD3pkPnuxVRJ5fJoh8nBZhGYpN34gaBY8iZ993NN6z",
  "key13": "mU1WGBYCuniUcYsAzgJpz9werWaBowsBi951kJZpDN8zj6tKbz8StfP98WjXWJED3WX3EP2gfsFXpRGdfttQJS6",
  "key14": "2z87vsA4faBnXuBYNPLFqriYKPS7zGGqHWtS2jS3e25Aq9ojQYhGPj2hKFkjarNRyB9sLfFGTMm15753zcwVBXmW",
  "key15": "4rbe2vGxWCu5FEK2Z75mfPExdHPrN3AAbp3YbHUBmt3r3q4YokC9MjcC4oKJjGmrjkNKTD2YZZQxaEsqo3yJKjU7",
  "key16": "5qQ1sqHKYtwYm5mmuxzshm33xgh7nZoggV5yyJtE8tguYNahuAMjkNgHCeGuJ86tAQ2zugaZaRzTJj8FumAzowG3",
  "key17": "46EqG6ByqCh5zgTXGf4Z4eNBaFmchoo3vjLDeW1e76oLvKbPzhnpdoUmHkWCqBJKdkPcnpVUCQkvFXg7Yw9eRSmT",
  "key18": "5JrxMG5XQP6McDeaMoyP4ay9m9k6JmRFSoErjVUjTPPCDf7ENsS15Wi2dd2T3JeZzAhgXc6GG11sUaCx9as3TB9U",
  "key19": "2KYSbbykgCcSue9RhvJykaga1Hc93U1hdAPwkSNvUaZUtFpbfH4xhWwG2KymuMQpk6rB624naaPUzXUQEJHxGfzG",
  "key20": "WZfgkFd4HA595X7SFZn8PNnhdmyWHox3sUhQu8iKvAzXySN5vBuY8e7Lp4VmbBRMg61WKbHHocab9DuczKZLdNz",
  "key21": "HBNMhy4qcUC6epTLiBxaUdUyq1m7s1t2oyUftJJLUvqfeC4J1otjpFirHzCB6V7zQVb2zNxGybNZUxR9fUQcEUb",
  "key22": "NWAGzA2Ts6GLsLEr9dJ144m7FGf9myobxgBvKsWNZVR2roBxhxjBYzJXPDkFe8W6T1xcxBXuAPX6RQPhjWVVAue",
  "key23": "38eDNLLVgNwjh5zZmPjJ5dxLnXzDBNKu4gpUT7atTXB8gH8y1XDZXRNUauuQ9wSq51ftEGHgSMjG5iRZ3QHwzC7Q",
  "key24": "4ApMtYYrLnTcQSX2hCt8uYRuZKhYBs9p1vST5dAdHa7hVqJSk9WVT2PyUzSLsn8kxFCaGSAZnQJytuoVjr2y2AzH",
  "key25": "48ifMWAPqzorpF8D5UVGg6tRLFH1jX2Go9LK6QiEJYjG4xLKEWguRzERgMVS3JUoq24ZCdkfcFbAoTsjkVtRKzn9",
  "key26": "5wwgUSHpayjNRezYTYEPUDAa2FmLkUckkhPh9XCUfoze59wenkm4P2wkQe2tU29ZKrheH2xFEwaiD4o8LckCnscg"
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
