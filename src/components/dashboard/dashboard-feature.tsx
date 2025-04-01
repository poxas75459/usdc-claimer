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
    "5CWhg2TmgAryf3XNSemtYKV24teKT1dxgjsaahjopfy7ySeqcBuDEaxe1yB7M2yBFK6MutcbRqBwKTUoHFvxSLA9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zbA2JqBWMYG8dKTCUPBodKBgiPt5cGinJ4jmm94tVKvHBndoCgm5MZh6mx6vTpoLEyDt1cBpFjSs5P6yABpS5ST",
  "key1": "3r6VjzT5fB31M5HEA7vsQnTXJpJBSrzXuRf3nH4JFDg4ZcHDKVzwDR4FtSVZwvNCk7d2xPm7Y9XEyEnM1JgASp8m",
  "key2": "5ij19FuH2H1o15sro85jVen549uWVSqqZXVBQ5hgSDAShDoN3tC21BYuM3qyj3wVyZhzd1HhNwKwNDE5fVy49ypP",
  "key3": "L7wrX9Lw7GyYH8UyyrNuRcztCajqXTD2o6NTFNR33GdoivugFJdMEvaFqm25rm7cynyYzi7nE6dn2aLF1VquHri",
  "key4": "3teS9EpBzt4NypwffPsMLsfRSh6Akc7iCxJ7m2RYVqFMLp9F5zEtW6gFsYCmg7Zy1vN3QLeiQfcznfT3XmnQoKub",
  "key5": "SCbFhfrShyCnLK41kaZ6b12ziA3889t3yJj9kibpaF8xpK64pwN7PmQD2A8RW2CAKMf2chFRvgUpwgAdQs6N5NL",
  "key6": "2mYmZhTcGCDpmUe7giBhyxdv35JLgR2JfAMvuyktcciyjt4LYg6B2TnkFB94wdSdQ9nxAJdqFHyYBo6c8qiqEV6F",
  "key7": "4spWDbiqV4jGZma9pF6YMZ1h6nMEZVC5LwnPG4pX8QLhQAzHZmCbcdnTynHAMucpSDGZJxLzCoYzd5Yp8jvYaQf7",
  "key8": "3uarzUHPsmeueFpiMqFVdpzR4sJNxYZDkHYf4qDNMSG5YnBhWzpjE5XMGhvPRS4MX5DFJhR5sPeTjR1YqmS7hVhr",
  "key9": "2UyRCp3G8hbdQGvkTh1K86J175sfsh6nCzDWNjqqMPhXBz9PaXshNhaMfs1zytQ32nLFvqeQnTVtjr44KZLLFFB7",
  "key10": "322f9wrTNgXkhfTFiJmz8drXTK8KJJHR885bGhA4eWcQ5vvwoSa7LGo1ttK3ar2wkkSsK2q7UV5ZjfSKSK3prqms",
  "key11": "4Xtj3mPcQqtug4ojJriduecG9Z3wa85JAbz6NaMdcAo4dwQ1wEzAmY7je3xRq9w67DwmoDjcjgTygQxppS5qW4ij",
  "key12": "4SrnZMZBBt6igJDucCrEZ9XhjUAXVmR9MGqPVFd5TNsRrvK69hB2YAPbTdDJWvM6X8Jv2Gr2fPjApWma5zwYbA9u",
  "key13": "4efjuSwP3CdxNPVJ3yJBMcqSwAevRD4GVuXFwxT2NUHc2b68V7GzgMh2rYKNEuQRiLhdBzjpofhagZQbDCYvjMDT",
  "key14": "5wHfSfqKESTcFq3X7wSVUypzKeTYonvzGnFe4hcqNorg17VeCbesCwJ2fYja9ATHXLXNAjqpZPyx6KmA8e8p4kXX",
  "key15": "46hWGwGhxJYo7TrXXA7gig8WW5bw3kG6A1XgMwkPvz8eYKGmv8UFBEkXFZ3WSkBRiT5QzYPZdJzWqVguWBG2tRVc",
  "key16": "4axJZmenMUZQxygBjpRCQrnSPVvbj8SnGKaqCww1DdwrxqGg6h7cAnwfVh5CH35itrXmsUftGCDm8BfG2ZB9oDmk",
  "key17": "5kogK81tcFA9AXFrsx8qdFwHi2nD4VvmGoZ6NuSijLNfC7vQbDdG2Cj5X8vhGNxLXkGYEtYxT5Ftjv5vuR3s3ys4",
  "key18": "4KVCVpfTh47Yduoh9HxMTe7pAtwDJxA7LHvtw4m12b6K8UyCQuqBbRaEfrXduuJiqnUWQC9aqHJDHe1p32ZAbvvK",
  "key19": "2qrjit9zNS9oSgjGXF5g4tDs7EAf3QHJRaeZVgvSypADEyvTnaxBEjuCKxPweMJm9bAtHhKC4uFL57dBfvZrAUSr",
  "key20": "4JYbiG1rsqbNrC6TUDUVVuVBBbyE8niWmTAxHPJvwGyQpDifs1JorffvFwUF8xtVk6qPppvLBAsSvjKqPxxHNp4W",
  "key21": "3KzyFNUuFhsMwSi8f4faAR7S1W7dbrk4WXtonQm2wC8bUVeKtJxaUfP2DR4TimhuzkjKsjADrKU1epzWMiX6kGFg",
  "key22": "4G8avzgvh8aN9WmRNaqYwocmYxv7WMD9Etxj5w7UFmb8qjdJCybT2YFD7TXJitj6w6dLtBexo66BHQCxSgEMKTTM",
  "key23": "4u9n1wPQpXxPJMq4YgTKJA3GTm1CwhSpM41pejBtERQ4Yuey7jRk5nR6EJ5rtknRhnxdQy1LhXeGM6pnqxVLzp57",
  "key24": "3tZzuCCacHiZtLJVuiNB3RodrMa2j2Z1WSBTFKV3K2pp1x71ZWwTJpHG38dBtAA1ieWsjTixSQcYUrA4YY1n13Uy",
  "key25": "2JnTVZjcTKaLEQSBt7nTZfzX6xNHyLe9i1wtyiP5P5kU9PzFMiLAcq2TxBqLdWf3e9r8hEueUUzpScDXsmsAkVP2",
  "key26": "2aYDGXnG8kqvWwSbwJCi3TtfWzj8CnKK2RzoBGau8YAaT4TgP38F46TyL4yKzbvd4sS6nhShTk9UGBfHXYCq7dpy",
  "key27": "2rK1362KN2N5PfH9j7VZnDvQJQZxoWd4j8jzw5cyvkRHMYShrv1ySHdxk3fTC76KXonQuYaNjBwuDLSjWe7KuZdY",
  "key28": "33ECXD5yuh1KJ1kVwEG91LxkNVqcVKVdtRTQKy63zyihhSJSuKRQjQswJVUPSo65Fsv9SbkD3AC8dKpe7mFK1htw",
  "key29": "25LTg1G1kzMooca6W2KbV7JJ3g7GcJBibmhvVqc56LWyHzeM7XHFiJ8DXg4FnS6LvJ2pdtKqcMggUjfQDzBW5n3B",
  "key30": "2gVj3nB4qf3o6u87bweHHuWbrdwcowNGVdM9YaprVRSiUwDmzuSux6DaT9Wt2xmH2BsmBoUY5LEtxjck4U1SxMuG",
  "key31": "5qdULhbY1CWfUq1VuBKuLvjFcX55Pgf4PmP4go52SB5YXZ7EfWoA1KRda4DDwB64N9Rkm72JYHwWJZVTqVFkRB4y",
  "key32": "KukF81sXRLfhn4qyPb3vJrM2yQpJsnCqEB4yNthHwDWU5tKgesoAovASXBCrW2HRPsgKxh2RPkVnc2apfggPLo9",
  "key33": "2Jsv7zx43KBtFEdqFjLQyjThjjXzMmpbDoSd8K8QCpMRoERQnUGi9Ht2Rh2ynpG6yNX1iou7BxEUVCypsJChUf1R",
  "key34": "2coh8Uyed7XUQ4WWPM1VocgpQQZPT4ajJFPQ2g64EvNbtpW2gRBFrdCZbS6XDR45RZE1qaEaC8rqzUPzRw9RDiJb",
  "key35": "3oKm6tRK1ZuLom4YdmqZzg1zpXpLgQaeTXro3pgfmkRmABTZkL3PDPT5Jsax3oHNhfdhk19bgiPeH51sq8UvVA2e"
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
