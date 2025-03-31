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
    "2AMcVQD78xV3FJjnCGyif6j9jYPsKJnEnA8PcVyHGM4cUaMdSXTqxPecXbpJjuzXbqm5QMV4RXb6RHuSZaUJ7KXH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GraNyYgEfDvqYwpFMkGmeP79MvM8fyHU1aTYxBmNsKgbpAcGuxxxnUs4RqnyCrAqJJ7cDkuAuMKnKJ9CEaghi7U",
  "key1": "e7ErKTKsXkmdhG8HeDzNtzMDfJG1pxpJCxbo7W2z4goZosc2o8AQMCYLAEURhW6A6AxrtFwr4ckPTDHdtceWDW3",
  "key2": "4kpUiDeVE4mHyKLLnsLcTqun4Rni5P9yCNL6Qd3eoTw6Ld2BKABNv3Kz9re5HjeYs7dCwfvL1PFnjzbL4ZYATEKN",
  "key3": "pEFVrHZm1KB6xozLXwQAXtMJJm87yc59jqKw11DhmRjnx9iKvsFLxaTBq39XxHNwFMUWeFqGJALpFVs7HEkDSh2",
  "key4": "2qf7RGwvUyeuAnzmswxx8MAU7ngmzJUYi7qapMBH8aHVQE5gQSNcmwvn4oW788PxJRbiVKByuy8kQCeyLLBSYDLo",
  "key5": "emfAt83MEjUXMGafd87EnBkpoUdMECL97xFxATX4BgponQtPkhrNdLuSGqPaGXcNtsPXUhQe8PzFpyUHfeLfSib",
  "key6": "4sUFiFqrSLx5VbvCm3Jsff1wriMVEV6YgQdyoCQe1KQUUay5s6eAjoeU6Y4VUtVshdHTL1cJHh4jLZy6GWgqtBUy",
  "key7": "3XiuBvTzsAFYrFcZxQb78MqQG5Fkguew914Ns5H9NXJBZhQNRH63B7v3E7BL8MJJLjrjqpMCmH4Atre3atPUzmpr",
  "key8": "3LqS5AW4dgRpQmjd1DQfHdzaHLy5M5JR3cFErVJ8ff8UqYzCHvujXVWkK6Q1FjgjBSgJex2d4WG77QkMBvSgk3yb",
  "key9": "4zjKh6X4YXJasyowFZe385sNP3LxLQo31mMVFqbFMRpixXbtbaUQxHExE6eJdtyGAgb3r8pq6WKpDdhVdLLXucZL",
  "key10": "CyM8ZEsppKpVr579gvuEBgNu8YYJ4LCw9WNhB1y6ceLbeg9ysy1gaNzt3BtTnQxFZBqqnQsdXRuWr3QV8t1Liee",
  "key11": "25AdEjY47vuNG8apW4jDTJFFmdzvsDH3iLMMjzr1ba6YEkDx67eAWA7rkuwmyQ2S7GEpUS2mTDVtznfr55SWBWQR",
  "key12": "66YejLDjh6jz4ejdChxftALGgbJ7ex5iJvNPHF6dtsaKWyec7scuMyBzWHjxSncGz9xYgto7s96yzeLZUXaxifXK",
  "key13": "2cLSypEyquiXMP9zuKKawk4wGwssgDR6rwFHjfYkRh1p5NZstx5GhhPhhkfMKsWJJcYKJcxwN5Khh2G6sRpicyoQ",
  "key14": "3QM11HCLV65te6QQ925poh1uWs6sb2Z397jgVfJAQNKWuSYD4GEvutJ1LSpHJTHTvSbZCQx67MfuewLy7gRu9vYp",
  "key15": "4FC97GbdKhDCfDiheSpufh8cffE7Fi83rVtDi7P9FBerxDGekTRGtAWt7fTfM8GzPnn5nton69VNqU7LWQNuWwVJ",
  "key16": "2da5PXLhpVd9o6pQtyMuL5jCUrLHjrgXcdSUCfKjS8j1cMSGf2MuuUSv8U8mi7FqZe1bXEVNWMC5jwu1AicbrsQE",
  "key17": "4MzqvL2oTjwkP4r69xt6WVKHp45P95MZACP4mHHX3ne4hY9YUZ5VUXV9c6MD9Bfqt87ZnRCyAktTcykBjiGyqTAh",
  "key18": "5zRN1HXjsbHQwj8wYpVEsZLxgF6Tcq4fs34gDeNX1vaEf9KZ3WzmSsZcQifpXCsLe6Qt1eF6NgtcBYPGapkEaQWo",
  "key19": "5xGAT6Ra1fe4dSS7e9i2Ht6xTWs4EVYWn437Z5SGr7QBsh3NnKbuSN9Fn9qX6sAf2oivr2qaKQYUiGxXWj6oGPys",
  "key20": "5SucvPUxoVAWomZ6GFiaTgUU4uTLkv9GpvkoJap7N2cAY6ae9PhZMxTs54rqN5vVS1BvVNkXWCvN7jJPAP8cQA5k",
  "key21": "2YQLzPzokVgr12sBfHc23pXFN89jwFrGXLSaqDjH9RVi6BCeYNF8Ua3GAPd4CmSGJxy4D3E8ZNUQR5qcYriNm3H2",
  "key22": "4NGyR8aDgxXG4z73Q1LX9Q2bCYLW7tmfJDFQ9HDBYBLxuWccRzX68BKsDEyZRuinFb9z2qGMVRDtxBoMXWtYYZRX",
  "key23": "4NvyeDCDVJBabfhUz6X4Y6CG3kj7zRSjJXB49HMLNVDrNZTjN4yWp7EmfqU6r78Mx9HB9Nj14Ck17yHhVeCPM8ib",
  "key24": "27wzX5rwNhAAEWAWWFEzU4RN1Y2tveZvs32TPrt4uZv6wQyjwhrc2CWUpei25aCTbERoFSN3wieaFuyYmZi8dFrk",
  "key25": "4U6a1rzZmNmETtjwyeANbUcDQpsvrZrvoxVWLWNGyR9FLMAMue9Uu4KKBQHTj7veeNXGPbHcpU2MbyXjo88qCVbr",
  "key26": "22H5p3DSy9Esmji4jFWF39ttDxKJgdmwq1iq2RBwe4WEHoq6HCZkEfEQK8vg9Ao2XNxra87ATALaPDHeNNfqK2SZ",
  "key27": "5kTUdsgBBQWnmDzajNThYUwcpL21E7pbcCfocFnegbU46Cou59f9TbK2vz8z6EXQSVnqoHWmjukcfyKssFU6zZEF",
  "key28": "3VWk7AepaLMdEFQbzVFYs6VK86rAWcrce7oewZFJtBaaiym3MxZpRST3KDsqrgsBtmEazYTBkueAgPb4hvpyTbr5"
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
