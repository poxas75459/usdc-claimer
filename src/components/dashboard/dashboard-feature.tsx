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
    "54m6PGpHw9KJJQyCCv6DsfimJUwKPCJQgnTcvLwpfnmTpWYdoPrbxe9sHnwUnuUeNfQkqYuKqmqgryPUQaDqLzre"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nH4mpLxexiKa9CvEG5nwYcv52mmk4bctro2VXMoYoQxUtFNzTorHVwfPEJQZ6b7WyVr5w2vS74DNeWUEDpYJMpq",
  "key1": "X84S9u3rR12FKryGDbghAwk44PmwmmyQ3F5USdeuYThfdNACnwAUzXohgrq16AQcyg5dbjBuEYWXWRQyMAq8PJJ",
  "key2": "4woxaW4BJrySCE9Yi6FbV98YPtApCb4zTKMm9RYL5oSueziz57LgmA6BwpGWbXDC3fZW9q2GTphki4MLmxSMoBMy",
  "key3": "5xoZGvAkDGxJi6i4UhEs3sMwUitYJsKq2i3s8NAg4W8UJKqKR8V3XC3J6qR9ChTtJuG7uHpPnP8DFHRbFf1qoYrf",
  "key4": "2mGTLKy66w5dXmGe3Ca3au6kBDVPAYeUqsfTkkH3sTV122G67us77wDFh6rQR3FHt8TrZA5TyjgU4wLRJaTkjzh2",
  "key5": "2TRP6cqmZSrEUJ8XVieH7BR1JALTKXTXvgXgVGoHLbRBYBFgFxLVwGorD6pwqFPmFAdyB1MmPKbWiY1DUYMd1v4K",
  "key6": "4PakZCVSnQ5C7GusbdyA2uzHQ415WwV6SHFVRc7X24Qauw59WcjB8CudArahURrMq3Ma4g8LKDTiuTnXr5QKD5cP",
  "key7": "4M3ryD8Gq3hgLVCWmBLtGs2Q3X5sP2qK97bbDfhMmRNHbgBQiJsAXaKPdvPWnsx9H5Cjv8kc4v3XWT7uViX4kp1f",
  "key8": "5tYVwYtc1tsCTYQEePyDPS5T3ZdNXgHiYcgwHuXJRzHhwR7n9xPBFREbt4vSPNxGBUMMo3q8tbh5FEbd2My1iUWd",
  "key9": "2g55Q7cPuGbjp2MneWeHnPzJB435J68CHQWfHtmNm4dhq7LtuWijjssBLsAi9vG5s6CkEwUbfDw8Jn16f8uEn2jU",
  "key10": "4DXorrBS9ePGFC2nRCXQQrMpaigGYrEtzekjuNPSL19VWcpCmc4kEmBHZEEJSpaAWa46vuiBttxdnztaBF1QkwbA",
  "key11": "4MQvVDWhwDgPsCyMGPmP1A5SQCgFLVMkEh9tUK1VxhxZCLAQguxA6Jw9kYfyh8NZRQHpozr3qkFBmTmhZQqDT1es",
  "key12": "1iGmsBM3GRsM9jXoo2QyJFCeXdGsGrZDBRkHs6sEa5qVKYy6QrmEPahnZQMNxosCer2pfVaxjSPQhTJhFKYYbp5",
  "key13": "64vvdanMPMimp3DdUAEHXCTdAsLVvU2qmXFej4sbfZ2GetxtsHQHdsT5iMw3qnHLchcd4j5Nn6NQgdUCJDgj1kRo",
  "key14": "5b1PvJtKMLzkrnuG5V8R4RBXkAUKEpUdbL3a7PnJAJiUL7cJyzzD4gfS6bgZkcgrifH2BALmUmTTZnY7jKSJGmfF",
  "key15": "4S2DckXumPYB5RJxEvGDuEM1Y1v1S7zRof4E3zpn3VRResGJv7na8si8srBR71p9jLzL3YrYoUj7BNwV2L1KTUtv",
  "key16": "4xF22ypKUhvQPL3qzASQ3wUzY1KfeKTcSKYdDUPvdUrh3KbnDKCaC8wRxKFQHhkhP8fsk4CwiE2Wpw4L9FJ4iRNR",
  "key17": "2ZRC9ktekDHPxNuLtMTo6XRYXTcd71rQkVnieyrzXexCJJDhNCBEhNGneyfgTbwBV7MvVEqvpeZ6guBR3Mtf8rZu",
  "key18": "343VyLxha3rQi9hKbsCUdqJLXvURqPVFtwDFPZ4oqH8ch71YLu4VaxbRiMbT43yzxQEH1tz2EVci7cTmx6dbNT4i",
  "key19": "5TNDoMpdhfoMumS6YzisYvw3Qgn5G13kUioSzBaAv2qHALhGjD3fzLEFGgFdumJz6aSoKA1X5BU3oaHcGR7Gk24N",
  "key20": "29v68R5Cj89DNVuiTDspTugMbu8H7wATVKET4dkNBTj8NxdTNpVbUY21PqsfDwdDHWi2qVY6Tsfcxf7ptNYT1ty5",
  "key21": "36bYaj7iaecYCtaM3RtLQgsiRWMtP8qDrquaBg1ez76wDxz7rn9ez6zUxVWBFx2UQFc521aTG3E1QVZ85kXAtDwQ",
  "key22": "4dqVc4otLUwoE7MAcKWQjrFiZUQTpQ8FMgeogaF3s5LMdgqhzdjSnFS8bdMgo9r9KkRkeUgJbiRAzMten9cqqBQn",
  "key23": "4fwwFXRWEfATP2pVWDF3HnLAGQT7WbfkusntJ7uemHgpN57LfJ7ucGdVRQ6rBt1oBF8Hdvm3DN4GW41uv3qyto8G",
  "key24": "2on9RSdGQ2iLzLsSdGx59LbXFXHdxkMKqQDBJGAGsEXtVE8vqMQVHFPWUscpVaCYiYJ6tM11cxfiyKiPsET5Jg7d",
  "key25": "3uYdmzFHxkAoKxpxfGZQG8NLKMXqoTTuJWgRmDvRx1HoN95AVVvscMukE2AnUafeP5mu2npHrUmq76JBAvvNJu4z",
  "key26": "ryaGomHzUfr4poTfaQHaqp4mNPooeDrtwCwBYAK9dG6srvogq2BD4KtDXxCad8Vb3FvhaizWT5WpE4TQverrUtn",
  "key27": "rAtwAaK9dW92rxoHSNuDXPnssRLpatsCw5K4mUCSLVFY1LXx9cH9AL9JJsY214CdspHCCQNL1qgutTNNE6J28VT",
  "key28": "3kEurq1eMMuS1iQ8MuyzzqhmTMigumJN3KXkyHHy31Egk9ZShPZyEHTZ51o4YKT3iqCCifj6o2FDsqzA28tz1nmv",
  "key29": "4Up3BmsPN3yrmETvKDLEhqi84VTBK3cefr5JTi12nEhtMUWs7AvVcZC5MPB8yB9cauR8TwfVQvkfuoYFwyWbjhM6",
  "key30": "5T94b1VtsXjkVY7kZ6upz7gNYnvZdv7rhEXvBgMLb7GC9JsEHHRp9Rs4NXbC5nYHwjRTtUMRQHc3gjgajkrmqEmC",
  "key31": "4Dp7cFKLb33EnWiuYmCfi9Xn2JuzcXkt1zZnBtqrsw9Ax1N1mHdNAqBzSnE9doXYxfEJHBBGiwohFDPUWgv1cX2",
  "key32": "3biVMtk4XXG3Ji1fCL8KMHgExZgb2WjkSHdeKi5yymD47y5zGmXu5XMWfKbXypzaky76XC7PH7oLb8J1b34v9iz3",
  "key33": "4sAv12sWzjc275rmU7VQwM4TM991HDAwv9JfJ5Utd9LSJ5sFhwSEF3TfWBDwS6DY4GAn13qcDtRG8GrWkUUwGUg6",
  "key34": "6M1yqXcq1xrPhnUz9ALi6eYU3tPBPawq6MRhy6atkyYTGgMUk5x7jdeors4ifRod25HhUgfaSBd3xGU1FEJ158j",
  "key35": "51xHAsWNjRA1G7SJMzwcu11zbhhLQMpduHVmpoRbJFCb9QjBgXES5sNqG4sGjzpb2DrjEgtmC9RgshMRvFgLdxFW",
  "key36": "4VzGT61z1r2deenRoJ2jbGrZp6hR9ypjpQiBH3h3xALvkpdTYG7kDHQDEk7Mv2Z9HAot75bcb4b6MpPt5mz4ixGF",
  "key37": "2iw4SxGQ6nQzBf7eYMa9QMvWs8hnFuMAqqhFza3aiSxJbPWKn65aWwTmfiMdK6EbhJJNYHoViu6A8xBNDmtQWeZK",
  "key38": "3M5Hge5sAjbMMFsFiyhrpXxj7ZVnrUzpYHU1wFnkE2kF5T7AX7xaR1uKcWeT4tehfzVZZUFkUxzaoiTfCdwcAp2z",
  "key39": "4w4f74dX3GfRAVA7PjP4ijwnLnWy5H3b7JGmiTTPCPiBKi7td241vuS2wo4pBFg7GhRrSNQDpxhryBqik1F3TWBd",
  "key40": "3v7zqb7hZQbmNLt8Fu2qBXAmJzDCeWGbvTPJ1fxWHRWJcJ38VjWHvkgLE1r88zHSpkHQVzv3ezEphzEXH1rNFjMe",
  "key41": "3DU86c8mkvjS8nrGSpjMTgX5ixRATFuaErKMjkhfpYW2oEQFia25f8X4YvoUTdheMETZP2sG42bTo12kruWizxy7"
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
