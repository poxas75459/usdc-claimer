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
    "26w51hdxX8bdzyVhBrFGXeBVApXxBeF75x4F9LeE8BepykdTS7kXzLX43mTEGbKMAayzqWR46qM4SadNmauKGmHX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ND2PPSqVZhWi9yeYHjqWiNQtTKtvdCyPrZHK1pR9HdEQnxnFaK4HZ7wVrD3iuX12RXkWTBSFQP6q7Wu4kmhFYKD",
  "key1": "2bnKFoCqcUJmdFEUGa4tVMafkF1z7VmXJrPuxfCKrUhhVts1huJhKC4J5frroJvdmxrgciSXLCsTxYyKQ1cVKVs3",
  "key2": "2vqSrA4NXCCd7ExmxCtN3ezddkn5EKpRfxZ2AFVegJtqAkD8RDi4yY99hgv6xPWaX4rwKSCh59uxgJKqNbLU3DUU",
  "key3": "3E1voEzGMZejZeBbsUfzELcQcLhCUEEqb6avGLuDf6g4JRZu4cNNSyrthEGVvfZNck48DjK6pjA6UuRRFHQUjNfh",
  "key4": "5x8UhtdbhDpyrCQnDRKwZ6J5yRvPcn86vdeeudnmRrwvYvBvcMKRH8igLFyy918B6JZmdrbpmopgCJ6qqvS4pvLb",
  "key5": "5D6GEmdtMKH3F7Lr5nXTd5TP5PEwNE1zCtC4gB2GmidFeMDvavVDUV2XAUTt9y4h5A2zPN7X25FeidJNTKtkwSzZ",
  "key6": "GMPAm4KsN7UAcV1idtFyh8nWiHLG1Fo3ZHb9h3WhvEWdAhFkLW4Nj2ZumLRisD3dW62kB6xQcaKp3sFNn9W5ehF",
  "key7": "3q9fBnyFbDyXSqEREUowkxFxJhfvkrA9nfk5HkoaDrjL18S3Eioz9WRMVnuouZNyDczTr2nxMBzKnFTXQHuCAb9",
  "key8": "24PNn3DwB5vumBQwEDGQ5TqfkPou9uokmHbZwn9meReM8hsZtCCLKJTbxYwWuCHTX85qkmW8hTKcEuGfsVRhURgD",
  "key9": "wExWhaFyPjGPCRXbirtLcRg7djb4o3Vjykdzde8pPvB85XQugKa9jUNpuTdAKGobFLkapfxvhpPzXzX2cawecBU",
  "key10": "3dsuNeZVzpfpkqBXfwsxfV565c3mwokiYJjqDBc7evxrgSSAGPDkyrWBYmringDUE7ZWEs461x1dW3ydfXTUzE1w",
  "key11": "3u25BkEcsXQyQn2sFbRXgXXjxRPU49Su4cnTeX93DT1Rp3xww3p2BJd1i9oNT2JX5SJnzjXUAk93HNLBv8ThCkiw",
  "key12": "2Q8NWF1zVMNPNFCCPML3L5aJUtKRpuDkexZ9eHoQtFkKqseAjQEp7f8ZjuVEaaJDfw5gXc7YjAWx62d8xiyVY8Cq",
  "key13": "2XwveMpA6jyYACm4bndRZXB2kuXW8iUWRszpfK4prhE9fQQuUfJEiAL9oLQyc6C3P1ko7dFQQ5ACDgCRJqV9Kmxa",
  "key14": "3kNrGNdBt3kjgzovRHq4DRE61RW8pue9b8YsfDoXbats6d717ZiHNTPEW4qgs3gVc58TLxnaMmx1Xi2ZGVhJaVLy",
  "key15": "4bpCfxbGVbqroUw8RLMpiiVPBtZHsfxsaiVfHx5zRVUoFbqc4iDaDpjuEab9fuS6rRtH5faR1mkAfuZwQ4BMWWKE",
  "key16": "XPPZkzhQTiphC4UfcMeTDFSuPwTuDu9ZNM67M6WRqoLTygUbDBy8TgxRPTgjcAD52i5QYutqGtiBpJQ2KuNGwDj",
  "key17": "BumSR7CFBptFehKfizXxPDnhxu9ndDTsUmcffAXn8Xj2p3rCCMzgVDavBPtYPmwwago9dXzaff3Mdi8gaTur48A",
  "key18": "5nY66uc4jFyzVGs2koDwLfjVKwBTqoMzvWFodWeswvSHUX67Q93kZwtefJ7EMo6jy9sXgrqHnQuHtzCJWPL6GZwe",
  "key19": "2MPAjDwwketcp7VakryQoY83amzFiP4xDouvA47xT9b82TMhSbshYK4PFa6vwQUgvPNrXsedg56VTa7x7V7iExmC",
  "key20": "2128roiFh2t8jhXUJUWuYMDMstzQMMfxkUsvisUFeNd43U1oC1gjjHieUAB4b2C77uD5JHarYz9E8fesT3TVtQ7j",
  "key21": "LGPLiads7GGStnnGKMHJR6NfBAK9yPDGuSfJ3WqWnRazw8PmfcszxmAKPApQe5YReGpoPPTjFCJDMUji9FGgitd",
  "key22": "4TXj2qWt6krUjeg6SYDpYviYRf2c3PNcfojv2FYzReaCxdqoEbXqyg7HNc7XezdKGabtBUQwaRpHYn7vNY18LHHf",
  "key23": "5oaiY2gJtaszWAJrdSzsm6WJwodmi14mUYFXomRd7pSZFcDTPsiqpso4MduQFH2cdVHReSpivLbpBkm1wXnxxdAJ",
  "key24": "4iGKBbnLNRGsTJYjCM7xCxzVu7zQFZpkEa3FFpsipgHnEb9eRcv1jp8uwS8AwYmU4C1xc8veqanm7HXJid7i6FSL",
  "key25": "5ZinNhATMKiPW3rdsk47ciDEAiSFqMr3MZGGEBN6tNnZNyQeGr72iDn9cuXhtewJWhgUfr3cNiDUJ8Ycx4YR3X6R",
  "key26": "Qx4QFbiLs7XeZMwsS7rn11Hf6VTnDyx1CVj2UdRnTn9Q2kQZBLMGcHQxWxbdm84HKqv93wVYVBtygzavDcTk32e",
  "key27": "5z9cUwNcXZxAYHeQdAEHmjYGcLF2SgUgXPttLGmoYrmZJ5uMWBsdYVhfMji6K4ErW41oQh7NaKBN4cT2eotxsABf",
  "key28": "2wrbSmHDfuT3yF8KbNdWBMfdbT2Zd9EGXdoqG23FhN6ULVV4vYQgbsxNR2DBHrHq4P1GdzBf35bMFiB3KHHqAdYU",
  "key29": "2L6jCgtyR91kFJieX5wxDMhwYwnLbj87owx8DAMTsGcH4PLLtqBQf86oMXgUtZVaYKUGprR8vAK4gCbkD3QZo9E3",
  "key30": "gKH8gq3753U2XuwudX78aqtkSfw6M5v73qDLvGYspfghjDqiCcFiWBQiZc3VBiytbzRhgEMipZ8V4bHQ2dvES22",
  "key31": "5J56XyxkiDQRYP4CeyiXJsgi5y3poJmeK8qa6SDAtBTeziZStJ4ZMp8A5Fh3WA3TU4vyANpFg48W7evUUrKXeAnU",
  "key32": "51LynpdQkrdKbMsM7dEZuZ1HGjhDyWgxTAq1CZeCuvfzHQya5XCu9Uu86hZkNtyAwaMVKt3ph6hyf3AZZCVULgLe",
  "key33": "475fRtt7BFtUYyWTLFQXXs29NfVvpmfpCH1vqVUtUNb9gRNorfgp2jHHz5fxvdJNxYjqueXFqBazcKiyoCGhPHG1",
  "key34": "RTiezMn7SsxnnR18r28Ft1nWYbm4ATy2AvGuuXyoJBaxSC9QXohQzUANawjDLd7qzP7PPzTkJ1s3zeGG79cZDpR",
  "key35": "4Zv8hjrBeYATeF5Ria6rapZZEcwN7w64aecapkweVnj8xvHsDEMHFeCByVUgPehxbH4gwV9TxViLAKKS4LktoP2m",
  "key36": "29W6X8X9VZei7aPGiS75gevQX4ab8751oyTRhfqudWwRHKKPFfEYHufsnU5d4p5XagsnELvqnkarVx141v1HEow6"
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
