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
    "2APfJ9RiKQr4sN31Vt1So5oyL9CuY2yvoic7zEJoWtSCHX9EDH7A1hct6i9Rn63aKSjW2k3VfArSUz1P7zMGzDBe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21EgeM5TrumyGpr8SZL8x3Yz3AQDfxhZdR9TaVMZi5SDhb7E53keBb8MzTi5qt3XxQyymqjDif2fLM3x9nXaMdmb",
  "key1": "2zLeA7s3NaeCj8YoKatYFzBpVgmidVW8zLWej6AGMSLJLoVjusuVazic87nfhzGFv88TWEM29cfk8pgLCzkSxCZ6",
  "key2": "5djjDYxAxRfu4tQT3jaAYT8QGCmpQwqQxiQcU2yqhCv8hYSapS6mtq3gL1fGA35SKxkJjgAdY8fLtCASSHtJSggF",
  "key3": "2C6CyQqaB28vCzNToBQg82JdGvcrRq6z1yC6noVqbEG85QipzdhNkvTQCPhoTwTHVaSaCx5cJFVe79SJJ2Ya5fXF",
  "key4": "3b8s9FXWrPcKhoscegR8n1iWp4kJFHjobvqvFKRRKm1taLeJe9yepD2EPYcKryp7ao7mWwK512EsmhpoJUFfp1BZ",
  "key5": "3WUM3bUTwUqHb2LzFT5Pz5bTiVtjTCrMV6dB8BMoWLzZeZG4Z3aF8b6ohY5Jj8sH1Jdi3YWd8pbZEMNWePS78qfn",
  "key6": "PnuzyFacvhGieMknVnPhJVzNNN6pVavjRGA3WfkYAgZnTxQUWB2VqJbGBocXduXJMdaocJ54UWeK2vDEw8Pi25K",
  "key7": "63VuooTSvKDpHSkX1s53xJWXrTHhuCzBnh7HTb7nDTTXffx9UE64H1imCnFhZbnoLNQQwQRRfnppJk6rKdmH58WV",
  "key8": "3sVnRG7YPSySLUGYAyKymU86ULveUHrjc2KUTPGcG5WBEVD3y7Vzw2oLM7bh69Ljz4Dh8dqC3LjycXCLZrjqmNqY",
  "key9": "4XmoGgbNXtZA5kgaycfYG1AKarBVcXtoH3hYSiDnrNeVigh2Tq7Zv1xyRfH9btgMdXgKzTBLDyJ56hJbbhnfESjF",
  "key10": "4hW42bXxc5YrCjYk9JQ6vXL3LMyRL8B2VoemyxrDLAHFqHpbZ4BYxL5KdDJuqWMd1H32HRsymLGKdHPMtHDWY29i",
  "key11": "3v5FhAASKyNR5yFUDYnk8qyVuPERiTwu3yKt4pETiaqZihhNXUmW5JS3yoS21eEe2JKDcNLWAQvjRBZv6dBPZnfH",
  "key12": "2WyTJ2tjNH9eDdyczPyWqVZM7MKdw5368zXM1rQA5sjZWtfmBdQQAfgz1zFBkyuZgUs4j5EaHs4iGqhpTJAqKuRJ",
  "key13": "3ntuZ74wEPyoWShZ9vD9o4cHF4LK3g8UbduKtKVxdqj8VgEHqatV7cUuxVWoKw37PpuXiAYMJLUapwxB2hA1Y49i",
  "key14": "3UrsN6dcjGA3LZvcRpE1QxNXMvcGWP9FhhUVa6N48eJMZgpqiLwHLdjkJKiL4bXhVt33zfprUKDSY152nkED6Vua",
  "key15": "3A2syijYpR3zunwabSvLWew3BMsv5CGdFQPexs95k5ZXGEK4sndmMMyt21EGHTBWRexMAr9kGoo8vZEJns66fYy1",
  "key16": "vCQifYsF2xxKDVPfkAtv7MkrmLJqocZoS14zXtDt1i9mVU1LGSLo93x8puPmwQ5AjrZTwFUCXbssVcLfjNZnozR",
  "key17": "4pkHipKS8QGPNQZHFkiJNzjMgHaVzGqguLpqU289M6mws5mWTPsuXW9zP5vxxJqyamSeP8Vr3kGENBwjBZNmopue",
  "key18": "3hvwT7fAyThsLiLCWJ8vkcPWTidn9awCxfNL3XAsCWBt4gtd7paG3ZLSaUnf6MNZryhDchVFdk2DK5sukY1bEdyq",
  "key19": "22beTtZ7yaXYqsB34F8qvGnk8KmDe5pY2ojJkTFmymsUuZ5sEFABmKfiTDMhd7a88zFht1Wws434RrCuyLhiKW1V",
  "key20": "25qUQzfqeYNQcDysehiJ6tZMYyo9yrG26GHjRw8DypJsKq2KiUYMHvHBQrKbKCFKpiFFGozrWHZmBSGUiQRTpHrB",
  "key21": "4yU3kxhVxNGqAtempyFChHer8UtLFNPXdygYkmNjT82ny1tJRXpVkYVHVGaKBQH91t46kXjbABXbJXjt3FZkqxyi",
  "key22": "45dfgwQoy6PMfZHY9VrkQE8WfonNeoyASWMqxaWiJDSbRJcZT81B2Q915ogQL9FmZ1qrMt5NGiadTAdTDWCfcdHP",
  "key23": "3xG61E7DiqqM2N8GcKtZYkfNgVFVwzkEJv7K6y21MMjQSAztP59qZgw2jzuDDYoBtVA3Qj9acx3UJC6VavBQLZFP",
  "key24": "45BYwee9UGi3vRdpPXWxNS9iVvytYjKvmxVJ1WCgH8f4QUh6YMw3YnSagjmaM7zFmPZd5EAEYMakGvSfmKeHjaF9",
  "key25": "5pv6WxBhc4urwTPNTrJsz6ivEJXgkPUBEmxdxyTWxNr7KYbv5udB5hFsVdPpinifXsGw6FkfP3emkkcdKmtCCRcR",
  "key26": "QDU7VvNHNe4KgyDfBuwg8qRydkvmFqNSd9zPS2Hbb2FBQcZDrSNHNmziSF5evvkrJxaYZf4aGdq2rTzJmPiCMoX",
  "key27": "4xn6XuQ8CdiS1cCSjPN4wmwVMDJ6yZqrstpeSFE3HXn6ZgfgLozGibWbvSUPDfRdyR2rrWXUJzZjYdDMFL8NdNgQ",
  "key28": "pYi4iQvPVKPChCL6BjQnoREGpaRU958LoPfxYUEnJ3Qbea2uvmtKgxnoQm1yKzkrEYEQx7BgEwEb64VfrzSE4Da",
  "key29": "Wf7Qvy2svqnjDbwDMWrcigxg62J1bmcPDcHRhtyHTYzNFkto1y7icj7wVJdoJxAmmebBs82bp9XB5AMaT56AoKS",
  "key30": "3kJQvMf6C7xitorcebTUYs9BqPaH1RehMGGhxJ9R3Bn1bZyCibi4Y6LE15SLPUvQqB1aB4diVchsMhiB8pvaS7qD",
  "key31": "4YTzjgM3eKQJT1MMAAuE3wEtuvkoMsRNagRRwYvLpmuKKFykbtutqzRuHQgRBYauoJmfChPAgSqFkbn7kwb8vb9X"
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
