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
    "4GNxLkp763ZqEZYC8bLs8PYLS5SxdSi8V43sCp73pqjts2drM43s4JewjnXGHhdL3hzXhvUhALp3pduVQSa5VibG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yTcMgnW6J9FiDrknRjFr5yPofCcd8j73YD9DFo5V5towbeykCzf68nsTYPQ1dThT1tugoTD3TSCkYFKVDMtHKix",
  "key1": "45e4mmLujKWHcBKUdivBDPbGNmNJYd4wNX5RfYoM1ws4KN5Y5a8bjRp4C9beV1VZG2aLnSoYkZjg8MTVXwpCZamx",
  "key2": "4G1jUrGRu7dXdGR39A2m7xgwxor5Ek2iqsTjAMkgwFifgybhudqjvbbLhTUPqStrjVtXtsdjrEWnhrV6Mjerrp16",
  "key3": "5uYmpwZ6rgpEV5a7BHVX3WMv9jKybNA5o1EgTtqLdUqoWSTjUrxiFtj1HAbYEkMwiDdWm9QKsrCQFJ35Y3xBAoiv",
  "key4": "3c5JsVhkKDmhTZArWkwxLg5eYABohWNNS27txBoqMHrzF7pwbWyWZ14ot1MtZ2sFVSL7orhKjxxmDJJNJrzsX57X",
  "key5": "5BgxetsXSVdKjBevP6qFWjv2GPwT32mgFX8px9xWZTezcpYoc32pp48ounFp6tTLMUtLHKwaEe3avaKbwetGTv6t",
  "key6": "5HqLWgqZ9u1UUySMyC2Aj69raPYHGoKweFMC5TJKS6RBoJRaCogdzDy87Y5nXimi5goanKtDzgvM4AiaDgQym8xg",
  "key7": "mV2KkR6DJbxMST44hkJxPWJhaUbKeda6fDhHaT1UR8EJpDKMBrX7LVxb7pj1o8gMxvfVm5LzpP6V8XhP82zPZuX",
  "key8": "3o8PUV3diKRJjrFi6dsXMK6YjeoVxbokYsMHqmy2p8hKPGMFmjYoFw3BoYxdWAi3jBKkGbrinwuWfZs97DAWNidM",
  "key9": "3vwBe1jxBs2AWwvQTUNF6rCML46FuM5DcHtpvegdL7gbpd4Cff5k9iLTFgXBNqnM2TpkeYfRerpvghMrnjNP9BTE",
  "key10": "2Rt1EEZmNz9DP5U4eZizoMYQMKpUqRt5TgoMdgAV3HmHm81c5xPUJtKVpiXb4MvHx7aZHYaoJQAiGFQgRgkcaF4T",
  "key11": "2TzFaqZFusN16cCfZhoHjgmKuxkrEyW5obonqJAGELrnMfymWfFvdSXhNZ2sxNQFgaYrxrLzLaNDgasF5KftigaS",
  "key12": "2nQ1xSBN59FwaM5xc1pLe55qBaFfd5qmR8UAh1mwUNeY4f6wktrcGJmkofvemb4zfYVNBtMi3N22aBh1ZdrQG4Y4",
  "key13": "3n5ufkkbs4XWGMXebPPHj1HBhjScBKEcjWgv3K152TmfdAsPthuHSjLsLZZaWVgii4v4i3i5UDDQDqfZt2CzCJmd",
  "key14": "3v6wXaC6NNCXcaUmNtfxrReE3ebd4iT2FXiPdPUho46kuDueaQggubbbvVxmW41YYHKbUzsgGc3N2hHM4k66V2HA",
  "key15": "3vfoUMLGVPm41dGwvVELyfKKhAvg5pSFjejtWi9L4sdbYzWH6c36ydNjyjtD8eLT4HMJAn1fsCQoztrKvFXzWdC4",
  "key16": "5Juju1ns45wh81sqWNzez9vv1Hh3wsSmvA4gPQcoTvYnVkbyv9W2LjY8Rcdy2UNTH3i9SEjdcrbt7feBENEr3utC",
  "key17": "4tdXMhh5cLT3nFhXNY1cWPrwNPcsX7v5XeXNgzhUVYakQ67p3xsWE1LssyAPzzUk9NYgEpfA8cqPCTyAc68TKPJb",
  "key18": "5mJDtpPPHVBPYV4EkUxix4ihhHASMK49gU5JVz1tUyc2JyVtFXXbAXVUEQxKFHefFTjWb7XJjE6JLCGACQuR7UR7",
  "key19": "2TabLz55mBZcruS6dMVQxnY1eLSRBZNayndatqoKXjPYt8pn9sZP83DNeSoy7xkfgaywNCEr4BKuN2Yc2oQBChmB",
  "key20": "Gk7vHkmEiA5XtW8CRQRLUEjKQeTbBXdTo8bFVW7WqFVib1mX6PCypJhgK7XZVK76CR1sGBooFoPeRPGVycdbqN1",
  "key21": "4jocHUSA2o7YvPeTiFxs5JEnZpzyuLk4ApsMR7nWRWC12VMggWSyC8SEybET9rRLdmP93drpTvcJ4ALfAhhEyCPb",
  "key22": "4MdZE8JqLmpt3Tpbw3cVATR9i5W8g23vGhM5iK7BDfZjhvBHRFPYmsra16TdnbeJYC9cS4g9kxndKC6CQ1MdRrT8",
  "key23": "5ftSHH1d5yJoTycNNhBV5yPgCLEM5ep6LMPeWTpN151TXRxC9D5sW9DBpxiq89SduLHfQBgUqquMVtdvMKNXAnEi",
  "key24": "5mfSBEJ28ew7tAGBUaK1za6ZemsBXGev6r7iacER9ZYwuWqpFrnacLiBDg2pAHADdjUoNrUqKSjARVxSjMZbvgJf",
  "key25": "5JvM1CP3ttUdJz23JXJNtqtfXqU9xP17vd7cVsrCGbFibb8TQ9EqxE5dfk3B1m4PU4QPizmbnAD1sDMmadWEmoiM",
  "key26": "aB6vbdSqCkDUtCeS8phUpyiRgRV7VJbVjZmxBUv9YZiEUAiTnGHin2JwRHWadh4PdTGoYSTuTMxkmLNnQHhze2s",
  "key27": "56BKrK3fLLuNN2YsqD1dCfNyzYbZNLtsk8inMwvkPr47Uy7zPvHufeXUGs5v2vrFgW362ZxX6MXYyAk4cLbR4vVM",
  "key28": "28wy4t8Gr1ZzdEq99Y5eYUJ3rcRrccUubnFYc14vP45oaHkoGxut5UTUXJhiChwE5Xqr5uqnxM2ecxEWX6392V8F",
  "key29": "JhQ8EYY8YSq5RA8vvdUuHUx1B4k3H7BUyi2PyarcfriUKpZFW6Utys2RZef2qCkGZd1kZyt2YM61ZgJA5s9hHGg",
  "key30": "3ju1kWCTtAtvxZuCyhDtQ6T4SxvgHHWpCapPVF6Q3FF77B3yxpQSMFEdXVWaNQfxePmZ1J1QrhicnjBJ1WK6vBWd",
  "key31": "2U3QxXzCeK8hzphWt397PjAFjpbS54ybnodMF5Qsk7XihjPKhKHoHuyo5emE9gJKnn3rNuoppXdksNTHnHcGQTuD",
  "key32": "3ba42gBAVT5svUQkGEhPaYDdoHNjkBC7Ft5R25fE6u5GGRWyE529C4jcY2fBgj1NMemKbY7JLfEkJzCakozeJ5B8",
  "key33": "ZMZSwn41NcXKtHh79Xpvapu9tGKQkuHnceqng6jwb1AeBfkdyJccDzB6eJFceRm2D6u9KgZTitxmNzbwzwVkVMt",
  "key34": "2VhZhFn7Y3WYL53vrQV6JSgDe6J1wdfpxjrhoauhefAthRZ7uuMXW9umyKSCb1G2XGJ5nutHgcnAADRt4pjWnegF",
  "key35": "3CESEyj6UaxnWRHghHAFkNMKejyGUvs7R8Ss64NkDqkjWAiCLk3RjGx9gui78yHXDvd5RYaoujnoLJtnzCX8eet",
  "key36": "5LxuW46ucV3gP9ph5J3zpwfbgssD9EaU87zkNcTu5iAZRJPQkdok9xacFk6WbveUb3SiceG7kdxfkyHZ9e9nW9kH",
  "key37": "5tTsms26JsqHE9xttgF9b7xRGME7a3uoCqNVqhMyxuvUHf521uFNPFRBNWBeVNqK4AvyVgTGvyDKGoUgkxyQNKFC"
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
