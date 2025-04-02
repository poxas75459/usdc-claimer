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
    "5Xq8Xd3PiSM8hj6KevpmoyAgNQuYBACKVgW3KHV5Zqa66HJkKkoMgrAxByXpc7MBGNLdyXapRN3yehzCdZ4N4Mg4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5995CFFEPeG73xaCbZxDNNHuqZJfLfX7sZho2H6Xc16PAPaLarC4ATF5pgr5apikRwheoh5ipc1jcFiQPuUyT9ri",
  "key1": "3s9adz7NSEcRUkPtGkZzSvvRxBySrzYPgARtWPCVSvsJa8KMHm8JvWpkGVohqYGXxAjQASC4UZEdcVRb7YApeyUh",
  "key2": "3tfzdEXAnBNgVBj44KYLwbPwqarn1PVFBqqTHxLSeEM4y1CJGFso4ocKpDWY34Xk23bpo4cfSfUAzDyBzUhSVpbe",
  "key3": "5VqkqfSzHqwiyFqyDXnyHS5jEgDaYApd1SaSc6DYj8o4mvtWaKe5RWrVcmpd6FDWr6TNPcZ9RGAQPuevJVcQEDia",
  "key4": "qXS2KvJnzxfZtizKQ98LgxW83B6GS7fjhmJszUGUS1mpHYs5uv2wVHAEn1g6T9TYyBLyfiLSLFiMpZHdyGLv4BM",
  "key5": "4CRc9r2NsBu9Bgh1TRPDQm6bAhtMifWiQnEL8pCb6spyuu5soJxAa1HPtJFr4jJhRiZ4TgHinTbXKKD8nsVyLEgD",
  "key6": "yjq4y87zFJdWKR4rnZiw1q8mv4TQy7N7aSXvdFd9WqZCLc9dEKaeEKKZXNn6U5WweCjEZ4khrnQs7twoxELTjkD",
  "key7": "2mdS1tE4r4ga1BMabiHqZ2WPPMJSJVSjBm4qADkUDEmMRze9bQP9fG5CvDfNH8KvwvAAhs2yXezViW2z3YgqURYi",
  "key8": "3gYTx57edo8nXP9ticZrnLpngNZ5HMK9eY7Gd6XLmxkxN71iL9wSYKMQgAcwhdVpJMmJ62KdGLvu4Y8SeAvjjzrf",
  "key9": "33VtbmUNLevEJqXmnHouQhkDgWyvKJHgcwzWJ82U9R5gYisvtZCTsr44CYHZAfEqRaPSfiqU687W5F5mHSgmxqZo",
  "key10": "ZPeVP7SMsFYu9in34THRXanDdy4JdsonxxvoXZ3cMYRV6tBNhtYYv259tveKcVAVb9sj8YRAJeJAtp6Y94Rszv4",
  "key11": "3SFmTFAjcrntYqRgSE2dXDzFiTPBCreQQy7JpYpPMzodPXLtD3BU6JZmVgSQ77jh7C3cXKwzYv1YMknQuViF9ayJ",
  "key12": "5oeX5YMMxev6TNnY8vQdvQSUFxcA8B4JDeCuM5HeLA118rXxKc8KPG3wtdDYCMVGEpwMJT22fG3hfyyf5fMoKEWC",
  "key13": "4Sk1Ke5fvsftBrnqTTC4vZKTpWXfF1YRJ3Qz9uJnUGKrFN8R6bx9d7yKzmmRQHTrJngityGANsfNTCV1LuMAeXGn",
  "key14": "sweX28TxXHDgzWTLm3whpHhA7kzqSZjBvVuBjTjLBW8uaXvBcmykQSiWRDsKeix56HLr9cmXeUfU6LuL5YaDXc3",
  "key15": "2FM3VvYUtiVKeJJkYkzZx5p9mEnPPKyGLiDTRycRAUTAmqPQQnZUejPi9YN2MgefdhLACemF8i2ujRfRyf1GiwKR",
  "key16": "3yfNDqrzyPcK9ybFTdaeD6KPMJ4hqy2fYHfxeCdk1zhtApkoVc4chZr6cuXnGAd2itp6vTatRe2n5UeUfHfE6j94",
  "key17": "5o7CWbxxwkhxZ7bB4GmMkL4LvqTEAAgo5fRLDnFpsGvxLk3q9kLGpShDvZKAQ5i8FpuekiipmhxPVG5mtuiWLfk4",
  "key18": "2X9WBjgoUeDBKxdkhQsv2odgGYGhkAniaoe7GorYDxeFNUfBzUs7Ds8tsWsMm4uVHEnHrJaSos5GNYSfv6hjNbw6",
  "key19": "3pjXF6zrm9rwRoWeS3mC9QkB8q4XTYmqaSF7wjTCUzNuYieThH6emTxk6vYnuLQWsor97HCHyRQrhiwU3Qg8n1Nu",
  "key20": "xh1PKfQhF28qchdh8LanXKiSVazRvijo1EUmBNT57vsDwh9ZqWViLKQBtbs54KGznuUs1M9HtBkBucg3Si8ubZ6",
  "key21": "4Ww84iH59RgEV3feW8uQ9XRaHfjrXXeRaVcRRAPqsCxtAbam6pEUHc5dw1vtAFjvQXQM1CNyxpsPkf2J2b5fwo84",
  "key22": "3sqmZMcbrsYovNyin8tQU95uRCpUj8QXSszcgbtu68779HEzFt4UJ5pn7ptsWthC18ueEGRaPS79T3mEpyeER9jY",
  "key23": "4F4mTAShmgSqF4Mk1wBR5CMKEVVXvsfiBq5GcSE4yYcb1BThBNqGPyb89RRaqTyLr5DUyQLfD25FokYFozSh31Uu",
  "key24": "2J4ELCDcQ7Q8M88cJFpWpkmU6rn4TozejhtTWV17QJXr1GRHNMDL27yVL6Nnm5mR1xkoF1MiDCGzoScw4U7qJqAS",
  "key25": "2UL77K3ZVgBcSFBPMuBEu3gJhfXjkeuAr21tU88VPsHB8pSKKQRThTqrMSpN7cB6Ka26MxnPXwXrCy2U4QeSG8N",
  "key26": "5vzKRyPfJczFwfdeqS2Epa4ZQ8bFAphgMZEd4VgzNfqmzn7VGDSyRnuiFXVm71W9UJpX3SwyK54zE3tSEhRZwF13",
  "key27": "m96mPMaNwaAcHv4REnYarM2MBNB2TEWNTZajWxVGV2GLHMZaM2Lstt9wivyBtsfG4NZFTEYWZkco3vAcgQKogaN",
  "key28": "3X6rdM3c9oMmVnqs74yMWBrhs8XbDtrCi9kicTh4ADuWkHiEjSqG3D28WLKXtUZoK7M7DvanuKAJMeBaEteAPh8h",
  "key29": "KZv45EDMsEUMaQfJMcEvWk1iBQQzf4BTVXGEUBYw7rLEs4jtvkqVg9ZqdLEh2jBuyGcrSYSWeML5P84fNMDh7uL",
  "key30": "5bmPcbMyD7tAvoMm6x57skyz3sfZ4bgPx3TZvx3DNTDBMCXAZnXNGwyKxXfunzzFAJyGMMuFYrMXQdV7gCYZvTUH"
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
