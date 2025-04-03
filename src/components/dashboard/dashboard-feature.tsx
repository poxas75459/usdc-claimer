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
    "WpCyeiMKABMbyL5r2XbrEjxfYtJUeYukFSxxC8jVcDBQbgAMAyhe88d4Wswb9vYrTFzeyr8Etq7N7MjuNzz6P8n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ud1ujzqFFH4hVRvLjwaseAeSD86mKDFeRws9qyohHWqnKuXW339mmoa1Fw7DQkrrZcFvLYeMY32ZVBVvw8mGTjK",
  "key1": "oxCKMiwowdH8sYVkCG8DCBAdg6vjdCDnFw1EUGtEanQq5MhkvjmtzwV9S4Kf97TpALYTEmvpS55HHKv6zASmzqA",
  "key2": "5qTCPdTjMjUTytd94DFftYMnxd3hioq9YRs5sA9fujQzeWwusc4soKNbnFwGJf7cvWAM6Gc4EKGxYwMpUSBLyry3",
  "key3": "5XtaJrFLpMhC44CjXcGnREAs4NTUa2obgHFpi8mJMnqaTYKYk5ANc9PTfACs7e8cQFcoNcH9qMEY8pQ88XgP6V9w",
  "key4": "2evDpqpGoThgwaxggHj2h1QnvswFuMffPEnw6HrJyqF9GB88zjy5fapjiRSTysKSc6YFpfzGiSr3ykNNyEdxXDrW",
  "key5": "2DWEiLgiboki7s1FC1qrMdxEzQx8zyQaV2M7s8f8js5UeSTvKaY8UgATZCUFKJQX2FmfkAxwk7VqtCjtUEasLe6C",
  "key6": "2KFr2tUuXsY5y4hB4WeDXj4sGhJpXysqtteJVDp1nPM4q8jKdwxmHoqE9Kjpxtq1nufZoYYLBPv43kSW3oGWPyBU",
  "key7": "2Resm7JxX8qSvu4AnZHFZrFjNiUECVubKhTM6fid9yea2jaQWpHbjKxtV4FTUhWWdvyeyGj6MzQWZfWjZ1S3AkQv",
  "key8": "52UXXFhFFFSNyDetvxiQLHbfvRyuGTeF77rhUWBHFkRnzBwc3uNe57VqatawWUzXNud5vRRiYucYeX5kVpqBPFJj",
  "key9": "4MibF5QJgk7WgDXQtFHDxoihuo6fsmVbjrjeXKGfpuLwivo1qvAqGujgitKBab2W8LaxMd5Xgp1HbGbFayDfcYc",
  "key10": "F4iS96mEpTABixgNQi47RCHJg7WoV4fpirFdXkhPmEWTd2ruFA1xKYsfraNmCLEq3mXk76zXJJ2wyjybVjLiZY6",
  "key11": "vomYmGKGqsXQFXPsmeY4qptZ2NoyMQMsPEFLnMRak9b5MFreJeLtZ3s7Xg2kFjYLvADB4xVkmSa4RZnn7EVuGxy",
  "key12": "4CerWBGHRyfVwULZiB9TyxJFEN7XQ3XraKDEovg6k7iERXPSdJogzq8DVE68rZ8NeKMvbRHjFZZLXCMYsAXCcxJZ",
  "key13": "2SAf5gcYQ2EDhB3Bg8HnyMvLL1mBKoeinFLbjdNcrtUUrA1xaFz3YoSF7Qi5HU6nxjM3g4CtZzumK7Qz8gMa8sRz",
  "key14": "4mvuRHvwPpfGRkFmVmPcaUuLsMbhbRMvKSjt61zNbJPDWiF27kL2HeMiVbr8tkJvSrKtM4MTULnrMuQvtnxFaePZ",
  "key15": "5i2Cb9pptsP8xKCVNGxvp9DS5FmLNNbk9oVL93yNfnG9RFpPrpLjhzR5xdBAR45vkRPwYMFgE3agaHPpvKSxvPmQ",
  "key16": "51Nh55qQK5j9bPFa5ABba5viQyNwnby99DQQzZnrxV2Cvwmsg6rke52p1sR3JV9vpqVfVmjmVWTU4rVZHoGSbvVs",
  "key17": "KrwRtnz4bKRd1fUBi5qP1pERbhUkVBdUpmBf7QNmEt78wWGKyEuGkpBecfc9hFKwdns7ikFYfZorFLfob7wHns7",
  "key18": "3vzQ6LH5daoLSGWdTrTaHkPdDhpwm7qPHueY19FnyEXRyiznXtwGFLZTahRMb89WK8n3BW8cCxwczgSWxyfYUFs5",
  "key19": "27m9fyBBMHbaBikn2ipLV4UR14P1p7dXWuQxwnVU6GuVwujsYKDKt3GWgRjTBW357XR5biBfdb8tMqeJCa6qAoGf",
  "key20": "5NYuW6QowcbbfYkfbXNCb7gV23nbD7zskxjSsEvUicG2LpB1fByVSASwWx83HG9sSG1omuFnWsxspmUjxRKQPZia",
  "key21": "556bvKTjj4gaDp42f1xQDnSWTo1LxjD7yZcKsYNgU8FfcoW6uFQTYaeQwVunW7snE6NCmSwKTraatVhR3vqvziHX",
  "key22": "2R3NfdMfXLXBwGn99KDAx6oDo7kbpvy2GnoN2zqvU1yvqXVmi3YKVmVjcoqBfbjkmpxZTRKJpSm9yyboUkEmXC3R",
  "key23": "5vU6o1XNvv6wWpip7vo1d2Xk3YXQ2MwbrJT1YY8JUA4kaRsVRo6frUKZmTXxsgmngorR9u3DpraACL24TaTz75R2",
  "key24": "33SaWzWddg4pdrxuEMtJ3kuF7BpN82Wvt8m1T7TmnAqSZfXwbiCKxpwkb8jRgPPPA2prxEwcrZ3NnGxCzxYYBQ4u",
  "key25": "3jucJGnRd7rWxxpFrV5qDhFSFqNFpRG2UnUwSiAoEFkTKCbeFGzuPaWikDGBXkKiX3DtWZwb9KrmvYBxZsyNdLdy",
  "key26": "5VDgUXUAcwGuxHPNrkB6B3C7PZQTtNRNvJjaW3GpBvbC5h152QAaxdQ3TJzAENyySxJUD6HrBTVDKJWCaQmJyhMA",
  "key27": "4vopiABwTtC98X1QMXLQietZxihkVx2GJYq7diHekcw5vrb51gWXFb96tZVUyawzgyAF9AUs8UDtFqAzstBNtPy3",
  "key28": "WTD8yojq2eafbjsYe4EvWi6XNpp4vCHDRdRhVx37DxJQjSrRX6XBHZXXLCQZGnLMcRbPXzK5WH4VLM5W8CA2hfB",
  "key29": "5h1Ffaj5ZpjZNdnHCWUH6jDNy4N1jAFyfq9HuZYhSu8KJP7LXEpaJViLscbtA1NqrEAtYmvwuzHEB16FnTV6WUiX",
  "key30": "5tfSVbjT16eeKZG6icWtjHHGq4ECTPFsLvaioGZumcNgkkobaRCP5WE3mMDA22JGRbFfeLMEvVp3UfSS6sA9ua99",
  "key31": "3CWsxXZZYLei3QTSmTYPKjuNqk9nte8fuPchPcLd5x113f42YUq5Mo4jW7waA4dTEzXd6vDWauSYEGDqCmmG1Ac",
  "key32": "3Bvdt1FtfdLTJwwTEKMSxjdAdmLxWKmMkuUt8D65CoXwzgJi9nqFCVhodhbirK8SCzCGvdyVcsBNHqunVi6Aggn5",
  "key33": "4mQRZPJaur3UtnqvRkbXJXS2SwqqkUkSHB4Xh5yuJ9DDU1bJyJZKeTFm3zS8uKmTqrHeg1D8vVUwJH9nbki1GyJZ",
  "key34": "4qB1qd2kX7KeDPYcgtPeV1GkDxmHMfYpWSSmmoPRh24SLrKNMVYU8TBgVR9TAG4P8vojB8c9vsdGQPiJptcma9zv",
  "key35": "9pkkAGVoFUJVT9SjcZmQpjnWKJuzkkBqyLjyCjBCQF7BbQTuXprE4C1Amct7KsVYoqAWiJ6CKr1VDyduCe8KBSX",
  "key36": "2ummFQ5HBUwXFnFT8QDY3CaxVWxohGKxcpgRtZpgkzbAWk9gqAVUsH3VWte3cyYu4DUXXbkwioHtdZBi4yoM7eix",
  "key37": "3NrjHuTLVJFq9aeeAtrLk64NeJdHjt3MPqAEYKpuJzwbrF1k7oPoekvFS6AuqyAq9ZU3mJgHQrLXNT7d8RpH4Qrj",
  "key38": "3h27mwHWsV5L5U1eRFJt11Qj1aYX6YQ1g33DVcWwVpUmZR4UDFtkop3ZCsssJgLutSxwh4afBa2t65YC3uCiBoHs",
  "key39": "4rouTNJNUHD4eqWCBSWN1vrUbG3eUxQ9AbQxVPnjG25TNJD6NH47hb1TsAH5R8gB1SDtQj9QfgMce5zPc9pmAScb",
  "key40": "3G6qchqHhtGCTyw75MxTAPYzzisdm2Gy5xtyeNf2PtPx8KL7eq78QDvEfFJMq3vpFTEZTBhDqcLkXed9ELEWWpvv",
  "key41": "2nygvpX6FJJQWcmR7FygpmkMLvugGW9ch9JLfRpzkfSaC9v2sLXVJeNY9ssqgDDLTsTY5j26Tks89HKgKhvrLUsk",
  "key42": "2e6oJFNrvtRg3WQiDGueT5UuV6EVSLRGHi2EJXGjNvVF1uLBa8QFsqU5xxWavwRcRihUT5rgAvFfhHaRZaWJsJaV",
  "key43": "67NuW5sD4SjJKZDUx5WAWvu6XcA1GmMvT78gZEv4zPWS2iunjMukpLfNieusxTDQ8tBKcLnBKYxSsjWLjegRF3er",
  "key44": "56ShcgXeQyBkPJdJ6Hfq6zcHVwSVF24D7rHhvkmxJa9wq5DR8SfJNchjdDgQVTiJP3j7bFDxb77voKpweKZWzz17",
  "key45": "5AT8E1Zifh3vQsi6wkfn4rc8buYHCCGAD2qXdqctw8awm7N7ukx2E5yLS4JguSjH7JUVHUhSLuqxmaKbZdijVLDr",
  "key46": "42ZgnQbsLiWar7gvwp6q1fjaxSckYtG8DEfvjh6Uwci8nQF4Lyz238dY4pgSzDd9HpvknWxaMjmNdQohPhQC9srJ",
  "key47": "3hLsz15t4hNzJLhHodXcxW1xcgh2hgJ32Hd9NhnyUAPVrf6BnAcspSrRVRWMyiS52eqMQ2nNKKvcBKkBtDmxJPqk",
  "key48": "3pWim6j3zQWu2tifoAGoRhR1zgvcmbB4hKzuNkWWJXamtsR6pbgYxns7A5YARYqPDj7u4FdmEyGgJ4t8iRCZHHGR",
  "key49": "5XXmxvopJD6VSEkjyajuDqYRyzWsSjzVgYyL6KVr1phVAj7KGr4s13ndNKvyXiaz9GM83NG6LhCaUPGa8h7SG6i2"
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
