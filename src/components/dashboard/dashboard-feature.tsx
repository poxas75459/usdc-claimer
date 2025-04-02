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
    "3bwUx32os5Du8yDnUff133uZY9ZsitiHwwYUa1nJZsFURes5aNXYi8zFxyjJho6aNUrysyu76vtZSW5tLU9ES31p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5661wxkoyGuNJFMnDaWeUjcZi72yHVTFH8tWeR5i3cKSjNCBk6rLXvG7W999rJ8McgvZq8hhg3acZC3Pyv4C2WRq",
  "key1": "299YbRDeCa8PmTbVDdqhUk9KCCiRjdyhSWv3mWHCUBnWT3CuqSst22VAK6XPBt8ZKAiHPjfbtv1pfWuMFWzeScrR",
  "key2": "kFaUDtvyKCyE6qwJDubpkH4cSv5zA62iy9XfdUUxo9m13wPSPA7cG5MZ14tJMux6JRL3qctXSHxNe6ziYG6totp",
  "key3": "VdLmiex837H2JpyXq5PJyehRSiLWvhuFUQK7n5JAmfhfWotLy5zrwq2FGJWhJVXRVMNZXeBH1G5jwQwfh3RAf9h",
  "key4": "4Z1wSrMva8PXKqrZpuKGY6oiGGXRviZMb2xu7EGGGVi2ZNenwqDxfGpnctZCEJnPoU8e2qBu7BewxvmWCgszdCym",
  "key5": "TNWFpncVpu8rmptdHvL3xUB584n5SB4oj2xPdLS77eFyLntPCAA8QfnDBfgsdUqGZfpeht2EhJ514v3U5CQVHEx",
  "key6": "5ZsdU2WxEixq1HwvLAPJYWGfK9BYkCRJff6Za4KxGmkUWHtvsppGNd2CfMyzPbtxNxpLdVtneF8tG6G2KmzbBm99",
  "key7": "56RdW4n4QaaY9nNcuPJinsrbbpj4yuCJAoXww9xcRwbXtiRdMK8CpHZjUdVRCLYQAXn7c1DKL7SBkG1LLSqQAV8",
  "key8": "4dp7AYDBzfM4FezKtFAoCLueGKgymje3zPmY5v7JDxeaom9oSxBDCc5Zi1UDw2bZHd5Hocdg41G1FZd3WdUmHKkw",
  "key9": "4Pni7sNvA5gGJQ3DsRKQPm4cgY1XNvhT345WdXNyeY9GX4jTw3kmAqKyKWaK9tQ2exBehdGVfBkPhzfPkptHZSM5",
  "key10": "3soTQdLcQRaMcff7gSkD7ekfr3PFD7qbC37ggtqPHef6tGL86qifCHVvtpxU529E2vn5bCMZHhK1J9N889ojBMTZ",
  "key11": "679UFvd1JbbxCXfYrRaRRbDcLoFozuLFMgmLQtJTxDCYmyp3tTQcDs8TapsiofCw5kNKqpHTeUHdu1oEzs6PimZi",
  "key12": "35VYCce9gmYjxZhPbBfwJbZ8RQrCAdeohqj8MHDMYqF4JYGkurzaktfssAjJYpZu6ZqEcE2JffHCKMuU1Z6W8LRQ",
  "key13": "5BannbjRoCH4ZzHdRRqbZsqCXKWNffYp4ipNunQJV3HQXQBaAZ2F4rk87z5sLgijBqAFZwroWNwiWk8LvmAXBs3f",
  "key14": "YdiVvwAEAUkh4kDTnb22Lv82XxNFaJkbvF21EYqPJDJpQieQNNSG4p4fY6f19WbWDvzShhxSHFJVnrntCHVatMt",
  "key15": "5SfEExZF6Mn2749ThpY2GMkA4S2qsPjPdQLVLPWoPKcQkpF9kgeQ2n4tiVNJmLu22kUDTLUu3o42V2VfUHcoN8EL",
  "key16": "iTj4KHYQa6UofcwkZ4jRU9639GgazFiTAUdAEZG9tFgC9yYKbjv4Mzu9Pe1mUqxetaqQtjSogokDKSuZvE1du5D",
  "key17": "2ViJkqFpgeqNPz5K9PJNiSpAKhNXDuBSuJvWGsvGjMU5CZD4bwAUaghErqqQhf6h8z1mr8n56Dx2o6j9jj3fGaKT",
  "key18": "3AtfP1r56XKU6iXo7DfJYJorJiaDeFwSP5pnUkke12QRK9sPc7WGe9veb11n3nHpNafRX63SPvYCQoFgM7jUJhRf",
  "key19": "3dqC9mrmj3PSTqjYX8B5QTw8bBgpkB2gNfogTMnGwmnRGxRGzgy5ckrWPWAnBPWoufsVjVFUcRtXUquK75Vnvjq4",
  "key20": "5z5Gx1H2o2AcvZ9xPBgpDE6qL7CrGxLFjuv9DAtWcsLqbANYuC6D3f9HJNzuYkUxREwkxC8r4UWj7DdMj6Wrm17w",
  "key21": "4uKvKGV6t2D6JYi5KXZ1hxdhvrodDYWm4BS3o3VDiAJyepwjB7T8iRGyqwzVV2oczkHpuaPa5ZeS5eeApZ7mxUsb",
  "key22": "4kEAwKzHJMWm8zA8B8Lwyknx2EzkZsNqB6sHwFssbFLAhXg4VmzqKyUBk1wFVBfpJmAEmziPrDnAoTmdqXK5h3hD",
  "key23": "46krs6d72eaMCe5ccrgNBAjDEL46rXDREwZDtkNB5FHQDi2nioPWqETZstdz9UTcUv2BpWXQTFmNkPN5cM8L43AG",
  "key24": "4pRr7gPZQD6FSns5fjuhYqCK1UFV1s1NmjxSQaavLecT7tXuA3A63sfKPnGPnu9Wjxpzx2E1RNAG79s6mc4ATqjv",
  "key25": "4o3SGEAsYoWrBWY42sQANB3m5ZmAQa1AnnLmtUM2inmws8pjPG6n2iRxqckB15jxvnn3NEM1BdacePWVRQuW6uF9",
  "key26": "2uXwyqimPCWnNsGn31VeHcPJQT9x2FVptWvD6PsFhh7HuTEerA6gPB8prxMFEPZidNoTjazvAV7WuNxV493X7okm",
  "key27": "3x1GR4XsQWEjRmZQr3cQij47v8yNHsxvBKhyrP7jXMyVaL22sc2gMaFwUzSGtWCy44mp9naZhP6woFdGFBKwtRzZ",
  "key28": "21CSGxFyJqSvVopRKsFG2NKn99AkLAaozvRAQpF4UYCJcyHoRu3jhVEkUUr7mj2pdp5TYpMaFeGDFivT9yyi2LXY",
  "key29": "67BTcWoh18gcRnbFA4pVuKrT6CkW6Ag36SKmfm5osZYc26GWfJjiukAKcQitZrZgAe158cNNRiHjsiMFUBx9cc9w",
  "key30": "4KycpYWAjnbJRbkaXsyn9ZwSWwgyYuFYHSr4EHKCYUKKcTpppK4bfLKvTobAqxZNMyXbFGc1PuAn2FBNKYz9CJTZ",
  "key31": "5txtfZsuqG6aqdmRHHtx2drZyC3Pcpii8pFLnzrKB1AWz5PcjkL4466jspR7cgzjUjNipp89RFswpCkScs1x9F4G",
  "key32": "2A6QA6EecmqjFRNZ4Pc6oHra9ETv9w5g9GqGie4gWuqPv29HoWMEPiKM5nEQnZe2UvGYH2thC73rp1r4TpiqT9c2",
  "key33": "4vfgmLiNs6AGVGeiFSmGNfhYcs5FmQh4BdFxHndkQ4YiQpZDYohHWCXK8n2sPX3ttsQAgkPbCaSTRSug2CrV3Fmv"
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
