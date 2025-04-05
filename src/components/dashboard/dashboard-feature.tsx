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
    "48r4VjDTfdh7SADjqVjsJabSqrDSXUvykfYR5S7oG45gZdndAXRQy6aJY2gBRvjHwsoSDLgNuxbZEW8YrBma8sNc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CJ61szeQBgHsjf6oUffhoBeHGYAUnKgZ5Lg3p4TxHp1VTwgkDghPATiPDWyzHPVZCW5D3C25pfNV248Rp62FBE",
  "key1": "5KtSgd9U2LFwYksy6yXH4xP3nQubXen6hBpfthEMWCDSw7kAmMTYjWzy2Xa1ECMxdeqbCaevkyFQSjuJ3Vw2NmRY",
  "key2": "4aEroc4vrRsff1Bw4xip7LGwEcoD6WZvdjQppTsm3qrZ6AZv6kuyk3oPoc5iCNwwh3LRy6Ag26kCe3eoeWabjg51",
  "key3": "4zdmZv1YFpm9AxX3Df5pNQtExE5yMotoxGHc2HbSbQgM8MGjFXhK4oevo3RztjWDt5V3bQLpfcdwYiShwG4foMc5",
  "key4": "2gHc7k1Tb2yT1qKqZ2hZQxtUtRyczLszSaRvD6MTPywVFgxz6eHxwNgmzZgEwJv1goTxfrEKGwU81BpfUdqvqUSC",
  "key5": "5dzcFMiMXP2wBevLDKsL2TaiGmBH1A7KLhjrDPwdNm3VCAw6WBVctLecSnoWNLgdrtwG64WzkowePYQBh5qL3YT9",
  "key6": "3qDQNQkJ3TuhqNm5H1HBzoWHWL9XmdxGFLUTwbD2hWvPA7WB7JisxNeCotkGMo1p9xRL5s1RDCRmmmRLZHdqXtDk",
  "key7": "5L4ThWS3xr7zn3e9Ww61MF7cVaBZX2CtmBkY9KTfLkw9BDuzsVzbVv7RjkER7qFUpEkN7GoW2wSrkfPz7wpKKkqE",
  "key8": "2ijT647EMAvns7pcC614HcXKzKdNHxpySL7N9VADHBSs6ew72pBALYF3zNhXLdmA7H1GxbfjpxG7q51X1RUZ3bJw",
  "key9": "5Yx1XZPDDhBmkbYirZUJ466MWES1zbxWeXWBMujuYkGbo1FiH9Ms22fcx35HmJKuMbkGnVmte2BFZgPMtJNhcXNw",
  "key10": "4B669DC41xMih9g1gwPMawkmoQ8JX5hSQamKwrop3Lo1saN8mHKK2npnA63f7caDxiPQ2nufH9HGcjsbKTaW4W9J",
  "key11": "2SVDAbNP9Z3UWgmN8tkaQuoE8s3AsbwPWpEAzmV6ps23eT8qHU5atRza3AYdPAhu5MeeoH2kLBvBQpRA1BQmqA1",
  "key12": "5AqT5xY9qz5nAzHW2yBzzQ3Y7NKmieo6Vn6akQGQS3sZrgYJg3qgptNYdcEeJfdnpC3GCYeXCuwCmmRd3SztSPm9",
  "key13": "5SgF498ipug67bp9N79Fk6JdjUAmTLBuEM3zVuXYb4aYajZAoHXtPM9Cw2xPHjJfejom1JA6kJd94Y1bSzxKiDjw",
  "key14": "3aGcAwkZBPjTTeSVC5aLAYvCs91x7DbpK41yXfe4e1hkYi3o36Pzbqth5wfRdAVbJpHYLkY6kcSR2ygzazkUn9Lf",
  "key15": "4rwWbWJ2AzDmpYdazTcgejowFfD83hzegbX82kGd65k8wLcGDc8w8HXsALmrW1PuNGHaYtPN61hodV9H8rtAMHzn",
  "key16": "6fKrdbRYDahHZGVFQZmrx2WWZimJ6AhSJTsHFnc2GC1M5MwXZ5oy2WmEPLyFcJfs8Hv2m2hfru4hyxWFJiz1wD3",
  "key17": "3V8LFVYgcAtnmcc4t5TTQQREUYdMNKqATjxs6QB3eB3Y5zWQh2LFSaNrs3uFwV1h8bpcvLuvX2QCpsYMV7YvzdUZ",
  "key18": "2YWY2a5UfMDFrVRDmdYVPRcucyzPvN2Ua9v1DgaRYh6wLUrAWM99nA5GQvoeoHi5JD6PkJDnM8vVuLFdGiKztLE6",
  "key19": "2H6RrRpDfHdtEHgXK7uVx2suYBFGFLhKmv8bsJVfu6ii1FbjZJHKNqckyAvSY8MVYa58czTyeVyTgyQQq3FwMApV",
  "key20": "5HPivduc5uxEtQj8gtbRj85hVy1bEYKvPYFnkoKN8NKVUd9XUQXaCcEjyNJzGK7icKMLxMa68Bm3aajJ22R92d8g",
  "key21": "2tJTe6g5GpRnULzMDgTZsaRNXxGU2SF3xGmmq1LtW38vQbeaExu2eE7Gfc2wdSEmZeENpjoPNUGKExGpQU9qEKbP",
  "key22": "55TqEowNij2H1vtmPHutdXNcwqfAHRvEdnq4L2S3a6AyfWLt8RVJSZHdeufMsyy7ogvyXdrw6LGzXL8www97J89g",
  "key23": "5292xXrjnjUHSAobeVMUBewVZLxvzuEC9tvdiAjjkLsYrRMwHj8QMtWZqrm5QpYTt149MQVa3hgbwF2mFrE8ipuq",
  "key24": "VU2eX2ETUfu8UZctkTFKRtw6PyZjdgNybT1PauXZft7googmzxj6jh3hYhYoHNwzDPMzhP1qJFL5rTghkdURRef",
  "key25": "BfVvYXjre8ToQNpQ4fATDrjU9sKTH45URDJWveoVHDNdEDL1qhLYu9sLEVGK9sexnuaLT8L2L9nvRE41kgqirog",
  "key26": "5XokucYhFi3v7GfcpCHiZym1rPWgbH28CFWtTuZKpcFzdfwHNYLw61Bdjt9WkUBCJsqH5KBiwXgKgd4TJ23oAWph",
  "key27": "4EmganbCLmwffVqzvHK9ZdFJHZRKQQZ2ZKiEUMZZ57qHtKnEtpDDsrqi4pMipBZXyCCuixfigkspMGUewrSLzLZu",
  "key28": "34Cy1mrfJknHPSYgUQBjG4Umk1PEwUza9t4NaTfV1mrYuz6NFeePgtFhRcLPQNPpcGUdkJCVRdJS6KGWmqPGnYHB",
  "key29": "3nm3vPR5V28tvZAFq58g32Cn3p6Vo11znS87hMorvQieeXNSao2yCsJ28D361rRGVR1PswFEDMgezKcB87EZKM7T",
  "key30": "4EvBF7tUs71DFAp9oyni8NELYNHPvVW7YRkuv5dXuessR5iyJ22toSihFqE6pte5AtR6muD3i62QKUgNuZ7rNe1V",
  "key31": "3gLsQJc4rfJtvFZ5jCZ9Uvpn99bXDsjj7mkBeU2V1kcw2B34bKXAy3Jq6DvxCBxg1RnPhsQGCPh2Y9vq723c5Zvs",
  "key32": "4XoAJ8n6BiD83DMjFjYEP6UmDSxcjD86z1vDpKWK7EodbsvqydQxP25Mpq8yW8yTxCRq75n3qjq86vXSmdxsGAmS",
  "key33": "GVwvcwL1GbEnMjJHwzq2QY8bDnXwiAzyhbgZ34LyGPmeqSr7JzEvveFqnr3QHtDLkYCdTCeieVJKSkhcZ9eCykK"
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
