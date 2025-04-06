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
    "4r9BEzxF4HDpQR4y8z3ShBhGo7yeFt5mAm8aVLuXXTxQMiZaCidijquf8KXawAUkmPHYudDr1WVJ4t4v3c4Ahcyp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64vjpzkDkqFBdFe1wGyQbhsEk16ZaZ1P76rX2UxTTH38UpjAjrQ6WegWnrxCtD5N4wPmV5cpSbRoHAziofUvG4ui",
  "key1": "2fioj2NSNGZ2nFDSqcHsVX2GEbNhZdx9eJL1m6NueBGfkMGUtMFW6Hfn9g2pgQ6Xe6no61bEnG34W9vCtwjwhvhr",
  "key2": "2ioCNrFrDxsU4Xoxm9xfw16uhrZXrErJH4wKFhoXLLaeNbWaqfJZxbpvEmVHdFVsXgR2F7uyH2f6qtjXmycvWVhC",
  "key3": "5w9pieeBF27bPkrpmfrN55neRt9wXyo7Gez9Lny2FSiyYKLeXn9SsUmTCLvex1dMFoVkpVdUhx7pV2fFSPbTnLYx",
  "key4": "4PteSGAWpJqrZfZYHjU4Ud6wXU7eios7jHmD8F9P73gPZX4H2wpcgRvX1o43sAz8mugxiahxAu4UMn4Qm4h4367q",
  "key5": "oP2DuZ2nHGtXSh9oKexRgv3rNPCdiWAhmESUWHMADJUrQkvHw5yx3ao2Z8cQ7WWj8MB3FnYXHjJ76RrHTEAZoUq",
  "key6": "26JLy1syEe2XBQxDWZdHFfv9HTQKDAjpAE6fvRBN9AKPCAd2v4T5E5vT6X6M2oqYWD6dVmQxhFoTMR2aAQrkmcKJ",
  "key7": "2C8TW4rtTJbfagfxrFRL6thmWaPAUmQPWCtPNXikNxewTF1CAy9wnAGfEwtnTcdS1pGx3VvuEMqmyCPW7z34dsY3",
  "key8": "q5opo91nEZCjA4DwfsEZ94DnpEPstv371hMAxw3Jr3jbweoUzBAbMzJJUmi9EX61zTm5wfPmF7EjxFZg8eT2BWb",
  "key9": "4ukhQNk9CJQj7DR1Fpsg9tihLStyYR3vhQxJJFWiXNXyV4NqgKbVeMLtzupLndQuDNoRWBfXWpzX7Z7yKJbvoxYi",
  "key10": "9kEm9WSGJnprEZyNFGpiJgN6Uvpx8f7Y5Xjf1KdoeFVN21ghsVC8JSc2XZ2UFtxX5hRxMCsBuvdhQcSwPmLw9KM",
  "key11": "33DCffjsDDKj1XZ2B2Cy4FxnDCE6dALUoCL6hVdTNxU86eaNvQsP17j1aciQM6vR2v87wkiovaZYQoPuz6vTa6U6",
  "key12": "3TtYtLKxLjKryTFqyqtpsifvsWGQLxZW7v3bmE4kVyh7h59DSJCmCvsdZr1HwFpxsXdcnhqGa8oYyYEY4o4xeheK",
  "key13": "2ekRCb2KM95dh29WNnjV2VQwTu6fAAdkCU95XiWamWZ6kJh9SwCFETBJEn4nJMiGovnDeNThYWEY59XMadRmu4yj",
  "key14": "5LDX45khqd2jUk41fjC4EEbbwXmNKW9ECGxsU8KGnyHT1Nk7PFbjYs8nWk986gR36FL4ASZ3MRVK274GUAkbvbkX",
  "key15": "2KyZXpHSG9T9JsnxoRozFkUVbZV2TUaNP3wzrnXfzV2rkoCoHt8J7qBN5E8vfc42k423TXLCQBPvPtpW6pQySrok",
  "key16": "edaVTXCdU4yUk314kSHGF8iF1sYAXMvoDftjEWqfeVosPx9d2PQdjwwBVhqGqNYfiCF6TwbU87og9HwSBPp8zXH",
  "key17": "2mv1gkfEyejGEwq4D2p6xVYDTL756yMRaiPXfhxKYDqXha5aL9Rt1NnkWQvRKq7nug3yMUKGinnDJuj8DAQPFR7d",
  "key18": "GMJvsAKesYNYwqyqBYjrKyZPibrQaYFgvhf8t6d2eGreoUhj8iEBgJzhvM62n6vaSffuRfrJiTsdUaQCA7ZL8JG",
  "key19": "5JEqqui2sk47KmzKqNWgFxTtGanjNeqFMNfmUVhhGhJXCLoJhQDoGKBVXaZM4x8NccjGSDvXBxMur9giZYzvuuCe",
  "key20": "3kMNdrFbDtMkS6x5R93GgJmBp5aKMwKVcAVTcvQc1fDy9z3H1LyVDP2h3caV4KokaMgE2yKStvSdR7mwZHkRBwoT",
  "key21": "jZD51D3WGcWna2ATNpZjpvRSa6YHJLGbZyD9R5zBfnmoAARLzv2anMcCis4aM3muiKM4u1FraDWu1FFnB9gUD2n",
  "key22": "3UPx9ZGtqULLfyrHrA2KKQGJi941Dh2R3xJbzTNnfhJj6BPcEuYqRzocVroeyWgc4K55ZEcU3Uxepu5H9wodjGTo",
  "key23": "3APaKrwhQ4iGdLJhswgw9PTbeUHaSYApTGM5nfyKedTUD74yUz88ZxUFFdAZVh5tU57j164enhb5KU1hLHpwMa7a",
  "key24": "2q78X29yPQsbEYjGonCVDWaujfDo4HNw1sX6GZFNJAB82Po9YvgguqWyqANBzLuZ8SAYJ8QawKQQjqejKXd8VYrn",
  "key25": "2cvgkHG9ndFMGWFxWekd4NbGZAXsXwceHihTdJzJ7tL8SPpTbCDmQzq5pbs1X8nc73VFU3MwmagpuUYGAjLNBUdx",
  "key26": "3rS2GVzgJY1m3P3ED7ZuSKt75Y3eFuU4sHqEjcuz1gNojGbhf1VfxpLo6U5qo8GK8nCKaqt7bn4CK7GFyQV6Egn",
  "key27": "eWNvKS27NfQ8ohZ4bVJYt8maezibHRJRKQ2eTnxvR2VcpiWLwZER3UygqMk82AKPQv3SUtWMjQQwDvVK5WYSWGu",
  "key28": "5xPXALfhe7tqnag6uuKwVGmMRvmm65SKemuaV3Km8qQHEqbdDJV3HThLW8VQENKDMR8zV9ASP1pVo3XwBTTRMitD",
  "key29": "3DVisgn7aPAyZFPWiHvVYraGDFhGDkb4KDBQfSqcXCM1MMy7pz4uFzVahnVCBZYdhAEN6Y7R6qtY3eHdjB4pUeqC",
  "key30": "2SJPeDkuy3f1j1GzwDDncuiE2kaTxXwPH8bNoR92Y1jf25U3cS1Mogf6DWrUtU11B473u6xty4Aia1xEhnLRsAN2",
  "key31": "5LQWipPtfR4JYQDGwPrfJmqe4Cxx8xdpE3gnQV1dEZU9p7QkKe5H7HsbfTiHv2Khi8GrpUXsb3UkGFSZMoHHpbDP",
  "key32": "2DN5UmqMCghijB7SyvvFnuxtp9ukLP7wbX5pRKbpdaekKgPuoibdyFaZmxbmPqMzQMp4b8ijfMbE8bEAPSw5BHiP",
  "key33": "3NSJ1hTErFpyBYkw5Vj5J4CBt1aLU8r6z6yYGcGQDzY7r1y9iRUe71V24wCsgZLxTM9Jkng32RPBV3kF5GzpobN8",
  "key34": "317GuSAq64AD4ksVCXvShi3p9raoiL2tXqdfgSFaRp6rjdyXXpTc8CmkWFVupTEkW6JXpRL5sVSYHDSSaYbVoPTc",
  "key35": "3pg9Yssx8Vk9EmhBsS67bbcuQZMj6ackPE2US2ksYMQGq2bXpsnKoa64pRR7th6RdVtHwodLb8hByDgTxRsT4Q8A",
  "key36": "mBPSYCcXmaJHvw1xYXYt2kQwSoD5vjLsm2tCufUARoBYrrn44GbdP2AhSqTKF4fxqQPVUnSr3PhqFZ4dLCdkQQL",
  "key37": "4Mx686RqMef78fYhVNfQxqDbpEmsxoCFSYoHbEeu2toeim93wHVnjQC2aDrzHELCK8LSqLfUoorGbQQ3e31z1RjK",
  "key38": "2MpykKKKVG243HAaA1TzKLUdCGmVGqpN1XhmCaAn77GtoP4dRf28HBrdkqw31SRXGrpbjjaPjTYgaprJwgsmr73D",
  "key39": "586PSsrTUQ9UAYFMispPCZxqdxwYPSkNoMfuM2zYviV4dkrQXMGXEgbJG2cSxsecAFfvumgQUkvrE8vj2QVrr5Za",
  "key40": "4z8uq67CSPPZb5VdRMxjjuWYWqNZJM7jEgjz3uGD1owByerHk9QYtLJ42JnxTkzknKXra3qbUNKyFfQNEDti249j",
  "key41": "659n1kMevT2yMMQYgutw9jBZnwgnjj7bk7dnzg1DFoUb6bDAtGW71jXotFteSJ7nARja9n2iJQTq278dAZQwwmBS",
  "key42": "4BkSQXf8d1X4Yzvzkh9qz2YcHDMvR46spGBAKVGLaAXqpdSAWZQoVBLy21gqEy46JRU4A8c6uMPHeB2kSpxNzHkf"
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
