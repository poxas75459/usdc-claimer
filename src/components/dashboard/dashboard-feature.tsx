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
    "3enivNo4AE4guVorZedknaRapAS2wVqKD1nxjpnT8KsuD5CYgdKWHCwWQhb4HW5wwmDdoxDzs1FtEm2HoMhVvNVY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uccUExnkwgeS3iwLBN857pznyLFYTdEiVMr6xFAhPo65uX4CP8ShKE8uQCjw7P8pZGxxWnjmFSc169wQRaMnNSA",
  "key1": "2xCSNEKbBf24wxLqKofuk41SbUPX5xMNbwDd1Mb2VkjKwx1YZGw9fqSbF1TXaUJTJd5YLWYGjFRr9K4WmJHafvCq",
  "key2": "3ShJZoQjBsZU6fLRogMPYJPZQxEd4Em1JJjewj4bqTEAkNxu35QoDdp8FvZcF3vZKCifbmRRDQBZSNer4C9dax4M",
  "key3": "fPFKWcZfkvigfGSePXRXcvETvmSQ2A7HvrW7Q5Goxa6WyEJXpp1ZaEDFZd5cc3qvtj2F5bgFMfUV1FUFJzfrcKq",
  "key4": "4Da6ckfmfpt37XbwCvR6JykEQAzsmjQmeyNUadDisTFiktdvP5wRcWsFLJjPW4dQeVvNokmaTj6jkfWGufgp8sEJ",
  "key5": "xdASnGccgXpwns2HMTexjGYt5Ej7SWNvzFhsXJqpGQJKvLdZL29RTgsd3rrvt1d6Nr57EBnyW6igAuyJZJEGq6w",
  "key6": "5btQDoVzr5xzvW5dPQckkHENUUscLxSVEN6vTbGq9aLGvovo8J19nj2KxPcWF5E1ny6bq1tvSbGiyiftVAmqwHLc",
  "key7": "1FuvWWic64goUGLpFWjWzu3J2hWv6KAwHYSkf69rHBTeMehCUpGnpqQLjUProhFNWHX1WemLbHT2jCusCwqMhYz",
  "key8": "617gUDSy9SrFLLwD4JLkruJc5K7ZAwckgjoaGqxrDQ4xBEQgbTo5FxdBTDsK7Zowz3aakosy76NEH5TcsXiXdgf",
  "key9": "5aqRKsKLg6qGcnpQFihchgzvoDqq4tCicQzPxGzaKV1DadeV9c6bo1zdChsnKEsW1f2Rxs953MU9w41fPA1tWE5g",
  "key10": "4f8X2tS9AEqMC5ph9Ji7YEmqexrswPG4atMrsAb7gKmsRGYNSGXGXLTD5heMAsty6TKD3dbEZ7iRpKgNwyGrJ5YU",
  "key11": "5R6RhUVRGNE5yB5HXYN9DStoHBhJggDro25Qv8YwNSSFUxGDXEK2tHERvPf12yVZhPDjFnVrKxnM8Lpm4PK2o1pa",
  "key12": "3CqFN7R7gzjkNed9wEkzEyhZSAwjJhzvsWS4UdbafNUwR8vG14xGHNqC7uJCZfnqxWVm2RgtuujdwkiHU5N3cHYX",
  "key13": "5Rnt7Dm4rJJfnnmpLbJb6xZohwCBPYv4fTeAccZk3iHJcTFovAztsjpnEqFD8FV4V7v8X3C6FW9DZnPisPBZkTD",
  "key14": "5Jdmr95h4dgEt1oH6Q9KcZ2rNW8Y5rtMjgCrZ3ryDW2mK2WiVtrbtdBnY1HeX1SPJezpQfXEBFwg4K6wXGKt7kBk",
  "key15": "3QAnrhnn4cCteSJ1B767GC6SwwHCVDmj8nSNfHCLiUqdqTbPMzeoBjatJQQhLDSZw9kLgsBnjLpLe3Cy71bS2VBk",
  "key16": "35BbUPAaNi5fZLSsququSfEu6ukZp5yikW5aHbg2sFQHheMmj7HnQM9tRCSgKA99r3dZYxhnJc983uq5AUFoeR4m",
  "key17": "57T25nHSQAr9BpEvHQ1LK9mM93etw44u18LiL4zaB6a3dawnRdWafuaH4jaRYoSSiHD9TUtJj1WhWBpL6DsHTee7",
  "key18": "FrvnS2KbQF6xE1MnhtReMzm9ifs3tQqCCQprUg9LMTGWmJjH1fZNFpf8W6FSHsoSD75ZVDJ6o1W5dcjnMFXp3kC",
  "key19": "5pD3Sr5pPJqgv2FmRdURpJbckATZ5MFGSrUdj6UPtfuSDvLT8cxDbxWrtUKQuf5cTyYAjHN6KXLehgnfjTEpPKF1",
  "key20": "2aDoVMbsyLPCPPAHbPogQ9JigKLGByp6fRtNgBkmFFoQrDBxGRm8sUkMh8LDUfuogShtG9A4idN7kyLXCwFESsD7",
  "key21": "5bpFTzxwaHZX72v6YNA68csr8Jj1bsdtxgcDXhqRgUE1R1BsVGngPVDf7nvAvMd4dRweqCGGouHXdoycsjxn8B66",
  "key22": "26BsDnYD8EjKYXhJfMcjXnRap7tvGFXQDBSNobNaiPR9bWU9gAF5Ln3MbjBywbCggkGg9XcnSK5Mh6cZM5DNii3C",
  "key23": "3ULbYJDFzP6LUUwDfuhBnsT5r5d88V2ejM4bWdoVChhiuXKG9QusvEQfei6gxQ8osF5SKSF9zPPw5iur8LFExkKw",
  "key24": "5PV6VgpZENrNs7aAXZZCjHgpaEMW369HNfSBQQmFitckM77BT19aWbMxAkuokjaqZ96FSAzszp5yVJVcZPNqKd3Y",
  "key25": "4kPpDysmt6uqoBG6uSb4g2h8FYpdRvC6y5eijco4EhtcdJwqzS1zcxuHGY2c4o3gvRGdNaCWvsmN465HWDaAfoJn",
  "key26": "2GQaM6KHrttaRd8ibjshhW533hbL1yDrwNkqhorYHmpBia4UJEzEeeppQGXE9Len91WRTAXHe9rQfa72FK6PkkZf",
  "key27": "3qf444hc7DBtKscA96vSrZDa5PEzDJw7ZNciEb9arJP4xZ58zxFTXs5tLyDuZnrnQrdxgbPeekqG9hH35AwRmpAz",
  "key28": "5g2wH8irkAWaSNa4LGp2MTYwUvCo62rTa5wxFtbMTbSPHZWLtEHKEBtVeJg3oaUQLtsC5BT2MwMH6MMuD25uf3xX",
  "key29": "34im849uWiokZcdtccVtW9gcfJvpJAb1oJ92aXUQJnCCtz4Fy2arRocwueUTGFEcKw8cVSaBwYiLbjuewdAwKczm",
  "key30": "5M7vWVVc6NWx1qhRr7cm57pspNwj9YGjSP9ecBFKwt6qsCrZSHCWyUhd6yZmdHmjxHZxboRQtpkhVuDZBAbfTKdA",
  "key31": "K7ioFEHVAri1jGhvezEV4YWhuf7tvPhnp64L1jwRQLyH8N43wsKin9UZiaJ8kTgt8Z4KgBRmuBfepgNajDa6fbj",
  "key32": "4Uarpx1MRwLEPYmHTgaVqXo3nkhbwNae5kw3v2T4oizvM769vU7NLqsTyN5ihcw6JzBtScQi2G3ktpM7nNeZLQie",
  "key33": "5ma41XH24t65rYWe5fyDZNFYrXrAmhEnvoDfD8txQbmQJ3PpaFYzhfbZYwSvvYGtndBGfFBFmCkfhbNEzNuqMvum",
  "key34": "2TJ9bLor2bN2GGsgNrPvebSwm5jc5pBY5pTKzf8o2MB3XiH5nvbBcU8KNaqJVVQy4tW2dD49iyJmPTNxA7rM322Y",
  "key35": "7eCQFoHm3MVgnfeRwi66wxFH4JPWcyDJsbi5G12npmagPjMY2ggsTtTyanbcovoxCfBoWntW5qyVNfHGDoSrXiT",
  "key36": "4f5VvaTz4cZRAUJYfTVaz3F3qKv9pgt8oNaHk1n1f9fvKdw3ZkwBUgt3h5ZyWob6MDf6WeLVuGgzbweTJAMX1RSw",
  "key37": "239fYiHepXcbhy2hQbRWooEAqMKBPFeV4t9jFMz69dFKQUXVoH5wyhCkFkDGsfN54mcqxrfyE2yszJdvQW8rXo4b",
  "key38": "3xE6T1uPZqn7hX39rdir8YVBp1JcjicndJaSLYamismrDqMwmSeNN6n82CHAdMnNNR3cwtrWvNre1Zndt7XrnJ2S",
  "key39": "3wxN9U2P5rhow8wAKLAYta5TadFJweWhpRPjFPPAfxGFH9ws3LVVjkcyciHnsiQozC2VuWqCT8VJJYAJRHzKjFLD",
  "key40": "2Wh3si2KwZVxd1Xjfm9Qr8iehVbGi1HWvjvgSu1W1n1fSsPfqZUDroNUKHTGdQYYYEFjqbCdWBrrHthLsFDQ2V7u",
  "key41": "4Yrctm4HoECeH8EFmA4L4biVhb1EXZTHB66VUHJjTsfPwyXs296jxXEFRgmfqKr8S23YfWoK9zZQxMa1aaxFikdy",
  "key42": "4WuP9UBkCKLScw5tLmhA29ueDBhzmpyJAscygDNLKsZpbJLt6NdMn8wTVqR3WcaykcJnRGA11V6ZBkUciqdfcJf8",
  "key43": "4sdwyBp8WMDdxPUhHy75MXDeNKdMq6Ka9bXGBmn168mKPZXQeTvnsvPpHVJCjx3RnJuMQiTYCzzy8uury9VwE7gG",
  "key44": "25ZLACJwDXptVAkTTNsDLnhTyC6ZMs4urR7j4Wfj2FFG31XJkvHVfizduNq8atQEFbtyq19k9AFd3GhrJFYDYFYJ",
  "key45": "3sisQWATDsxDGoANEkn51vnNkzwVXSn84Exp3CvMh57Y6xmMmbEevE8sGyKyBu2BwbvCZEKRupuYsiSmeQvCGkjw",
  "key46": "5jzM84sXbPtm8Dz7kVdVC6fEzadiXgheYda4dXGDiczwLRmdCanFMmvkT7p1otKQ1JzZVioFnTRCEp3dHDXWUZS1",
  "key47": "qug7YSx2LaE1DxtkJqxw5hUkiHjLqGMkP9jzgTNwQKP5BFHraKo7C8ciaKp4qYhM9PVrxm23ph4xAH4Q4ZxZ4jp"
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
