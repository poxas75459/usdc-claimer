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
    "5jVJJ2th9rDe2bYm7BYYfFQCKrYGryrS21Kj7gCQq7qZhNpsrb9pFF76dRRgNwqL64fv6d2uoxdFSAtm66h48bnq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZwwHDiG3yaCbtJfH6wuc6WvrzHjqWxU1nGCwQqU7fMEitw593VZnpEVnPXy9uEH2eMwSUSPZ6fV6UM4oLCGe7BZ",
  "key1": "65YnV8DE2FSpqoTjwA7eTeiN3pphy4PJttEZsftbhWSLBrDZFncR3VcBLL7LvudvcVd8JYmVHgZKHQyjSo6K5Ap",
  "key2": "4A884hsWYyVKLFPfeqcWM9yKN6a3QJo5Sy1Sa3UDrfTLZeSMzXKPxyh4USdUiPpBEKipqKyhYhvJf3qouqiQhjPF",
  "key3": "2LmC8ZMMprErQE64YGeZ2MPMcXrJ68MAbTaCKkZnKiv4ppJSL6QeThbnPg7CUXLXf8KdabchuWayNttg6GpLHm86",
  "key4": "5JU1okEG4sDLmY1XMTY3F45AEEPUyx5jgWVXxsasbyZDrbZaYicNiRtPfhotrqK4H8tDBJ4A6MoQBAwP6spdscp6",
  "key5": "5roWdZ13VntXocreKKcsjJmDX3ErmbFAQjFuhYo4Arb7qzEECJ4ttwaYLwzc11Ae74z6gQz43oqpxHDP7B3EvBYm",
  "key6": "4RpDXqo9Tm9psPbAFrFiPAGvZhLPBxXKaeSWABAc6YyQ6va8sVMSi1ftevUz1riTG9i1DNiP7T9duz2U3gsQEnZd",
  "key7": "2yVFwznLKqZxxvGyBVBAR2kMhhTHJ5LhxCPcPjw1wsc9SBzmezoCD96v1bmLbcgg1mm64cWPH5MRrNdv3bumj3Re",
  "key8": "21tL4ffi1Eni9cMFbiFRwvUbh1Zsk4BNheqLGU6NXKkK7KAP9eWuKkbTKauFhtSbR9AWZLLjJH6wZE2WcQFcpCdF",
  "key9": "4jNsnFfABbuzS5DAFxo6WL2BCnx9TwkWodVTvFh25cJGoRQpmbpERpAyMgsKufyNd5HrTS1WAMzPHffyn9Fp1Lrk",
  "key10": "523qDVd9RBmVA1iixw9KnNQcJ9q5XN47CFcdduvAFAfxyLuqZaH3vTHXF39PeWAjTNZyeQEk676F5oDNSxEdFhwx",
  "key11": "5RQWcxXdikif5XUszFvFBbhvWwguqsEAZnWE7dyCz1ieLND5djHxHyvMSeFE5nky5yusFiffjZrK4TzegRdFfHwm",
  "key12": "5xvT9Y6Raob6JsD26DSMm2knLnrAxbRErXfw4umcnLPHvn8T1AXKTTR4Z9qXwiPpRaXYsViMFcms9xVtna6ixBY",
  "key13": "56MBPoF7otyEVSPWKRv2yHKKoqSnFcsfg2oMGNdbBi6BEFarqBejefd4z8nB1ikghYDJYc2Ek5cZyx3b9KmgEN73",
  "key14": "2srgNqEtuQT1wKTdLRyvgMhTLa7gAWNinHnTcqXWUGTWbagVKDKwR3msA9qtBdCeAQXXrY9i43ekoz7HM8okQqNL",
  "key15": "4CemVJbLuF1pgtpwwfAA5E17yhRbKH1EDD1NAgXebhy27rryr5kesT75H5YseEjMyoUihd1dHeabWztWMWBZvKAR",
  "key16": "4SihKhgdjnf59BpPW4wR3B2QQo26yTcJKtPuymB6wFjwRe1A9NGaK9oBnaRA9QdLziZP9xBwqSbCWUnTM7DfdXud",
  "key17": "2V4iLZRFUhMQC6vutsF7A2J93ckHmqmnr9NE5APvgcoyNoLjzpu1jedvyyFhepBbjXKk3ZhYiWDLLebwQiRmaXyj",
  "key18": "5xgGgPtLVra5aC3UFZMKqsmxdH5YxNm9H3SGsjHxupdi5MgynJxvSoeYjBortCvcfAR7S7y6VScwWWXJhyiY7NRV",
  "key19": "3gEmFXbiKqDmzaxiRm5GV97XyWBWha92bLMkaBBznnQqfaeP51UHoDhUP4T5mytqT5qcdrc1b8ZspPtC9wj3xNqi",
  "key20": "4fGnGNrxiDsW3xGGiW7Triw8fmF4b4DGv8dvXN9wamLuwGFakA7tktwN7PHbnSCMyxV3uMVipHanAtYKo8Guabdi",
  "key21": "4nFPhjqERVgzhoyKNNZ7yg3VojABYGEgj4o2u69a47VvHjLrgMjJTBe9JMi2GdoqfPbCTva5pmBKFsoEHBpQW6Xv",
  "key22": "2x1nFxp8Fr92LRcPPRQ64d4iKmtGzRqTAWsExiFJSYFpFX5i9NxABMujpsoHwimFpbyugRM3ZXDR2xGQf7tGM6Bm",
  "key23": "4pZPRAFEETEtoCxo4FzgbFivd7nCmMndGKNvzP5qZ9rjsp3BeutdYWvgNrC7ZWbaQAad26N9dPDdNyu8CMJx1XNP",
  "key24": "5coGv8bLhV99C1qX3kDPMAGsHkECQyhMCZyLcUDbprSUwVcUi4kDkJmnTb4yeUUoTeMMtKrpdiiJcoEiSVLeN8UX",
  "key25": "3KULChiQo3okmdAm6cygcZSJrwkqEBLLCEZcFabacgZmqjCiXwp81ys4zze5Bcsqs7QHxcJYfv3NRsscPX676h3t",
  "key26": "pvrcUo1LSLF8ekrcQXwK1j7S5Vg8px6sQYuint9xjjBBuQpkhDGsoP5bmdJ7tWJenwpoDTEmamjthSPW7wnVRY6",
  "key27": "1bYr791PJo3sC3tstTyuau9dhMZ6i6JXXHKTbGWTzjm5Yjzcwg2KWoNY9ZYxmJs9hMaHCqZJkKfaWUUcjWeR7Sg",
  "key28": "5BSSbT5ZjY2SbePp1WkQ4BfvfkTwmiH4cpdkHu8iu3AprQs8HebyosmBUUQuNYv6UN6HnKJJdriDFPceeXJ6hY8U",
  "key29": "UJoh9GM8PjcjqaGBrAnimb5urjEAg6ZoyZDHLxhTtWq7FgcjBWsNMvURmNXZq81PwxyeJAu3UbVmTYFpxzy9CEQ",
  "key30": "2xZEme5nuoFj2uYXim6hUfBDrJM8jzrGgdTVA95yPHQirNvb2Udc5WGPTSZky1hPLzLCuvtcUptJ9HMEiuNhhVNp",
  "key31": "4a6wxK6QWm8iwfkfLAEem9XD7vyvWTHsr7nzNkDG8FAB571nHih2aCE5HEoArqZLcAo5qdctET6jACagwsuMFAFg",
  "key32": "3u7pNXVnutRFhwtbJkGk58yFu7bnS184uwMeMs89pfvvAHYhvEE25V8uBi4w2bm3BB9dSHfffBj13vjD8HFiQcY4"
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
