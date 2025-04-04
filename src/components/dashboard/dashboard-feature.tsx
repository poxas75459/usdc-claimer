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
    "4UZraoBJb4k9oSGMwdWjYq7nkHg6bEMCrqSBebsZsa2NPNtHAkknvcBpTXDF9KkdCsyc4F39QpSEaksLr9p3fiyP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rvUv7CApzudNoFCkhfd2dcV7RQzyVSYEWrxggKJ8yajeNnoBRNsGPrxfHkdnqNPMqpxLaZLHgHTWT6VyrCD2BmT",
  "key1": "5cti4n5h9socqA1UNwpApVFqMfKPyqS8UXGD36jJVYvN5acJbPUTtwm8KPbccxm7uYD2aGQ754ZbD3a1gs91WaSb",
  "key2": "5X6HmWxoY9V8fLSbawaPZR1QTfPEutgbQfJeCJzQwFmDyQTDiJB8RKBte8vQeHhfxbrc9b6HH46sETW1KdABm7Sf",
  "key3": "4RuQEGnLY7kTf1k9hBsiK2wRZz8TvnTTFnABuBgkgqWTFFhpEHJhwioT5W95H9pPChdzJXiCdvbVnpG2FQRhQgna",
  "key4": "2VMkD2hdc75wxXN56ZanUF8EYFbpCxb1bNoiCSkP2rbhk1fYwCVXBoP8QWZmkZnRAmgtVRfEzv1QpXuadPkrKWyQ",
  "key5": "3KNBmzrddCd1hSwrvkZSRXqZ6eFcgxEdnMwsuX9byH3ULiNHVX2paGDsAr33jiZ9w8iry5HDGMTzfqshuP33GK8s",
  "key6": "33wWrXQN72QFww4ctt8wUN5KwnidDSP5iCnQaUHQozSqhyxkTU9gkuo6afms9PYurJqQrhtNRMQeTtSMrv9Jc2Fg",
  "key7": "3c9FHhmtLWQsyDTrvLH2R11ewBTGHjGaQsMnuNsW867SAiZeiy3FnPxis7NPL4kbtBcZyLohoLC4xRieGKTira1N",
  "key8": "A6FZJoM2doKSkrZewujL21QUnNS95DSjXrLeB6W5s45ZWWW7mjNNWikdsB5MLsShbv4Rm6gNKfiUzkDV2gmDd1b",
  "key9": "5RUfj6TDkqDeS58nVWeocAyiPcmCa12EUsSfpVgLcViNA2rQ54wcgAtsZNcn9iFJxucH3bWtxmRrpqdwgu6VpHZ6",
  "key10": "2M18A6UtEvnRkt8wcXuWpRJHrhy6VsFVAMnDEYVhAKkSTvJkTBd218dAZ992DDBHGkrsfncx9JtL9X7PtHAR62C9",
  "key11": "TMJN7wdjaZiYXGZaAoKjSRbjXqmg6Mhra7PsGo3BJxhRwbF9fMkU3WCZaRxkmKKwhZY44cwLtgDEGqrxNFZXoKH",
  "key12": "r8Aoz4xTLEimNJcEp1h3c2cwEPN5mDYHqquHV2XJLswCwe5r5VfB5a7XhWGDF19HQoJMr7FjuvK7hXxKbLnUZKA",
  "key13": "4hSF7LydMyfMM6kxm5ZVT5jaoWd7aZBMmAyq4SKPvQ9ZKhUHNMHyeP2qQLvkVrMD2r9NHrb45FfPLQCuyRQSP2CB",
  "key14": "xxnfgwx5jzGAiiKKUR7G57k35iBe76ng7UkVvsWe2oVuxtA8oKnHfEGMF7qHkfncX1ATBKCnG1dBNraQBLSN5Je",
  "key15": "2HZgKkx2pp8YBCfvq1YYWAaGfwDhpYgLodUTN8Ch3gY5TXK1vVgyRrGwMqZe818xChH1bGfMnMAZfCxpTjA5rRh",
  "key16": "4mfmBzbfewdY2bdUuSxeJ559F2mAaqcY8nRF6fsvG1TyLYRTb9tVmWTLzEnAk41DT1fKHosMVFM2N9gnPa6Xr6Zm",
  "key17": "WGEjRH7ihCUjWa9fUj8GmMwUQkbCTHebbtACc1HHTJpMJac4LmS6ASFXGRMwBG5v3Ersc7eK4E38PM3GYAMXTz1",
  "key18": "4kGYx4eSYECAB1iqbqVB9aRm4jyttorms8JNtoA2GuxCW8AwZhdCpDBS6Sjx5U9p8rAiqYsFndRQ5yaWeEQ6hP3o",
  "key19": "3ZS5u3yxZ8qSJ6RmRGHNHh8ZgcgwZSDygYw963Zvcakfpkq3sjy9U4Tb7WpCUmLrr5VTBvPsaHcGG8UQabjAX6jv",
  "key20": "9ij8Ypz4ksqe9pbua48M8RYNnsZkKEymFzPr5AVyMT8PSUPvXWAcqVVFvMBFxi2Cesccz2HPzYJPuG9kZLWazTF",
  "key21": "5rMcwghz6a2nnYvkaYP6dj5mHP3v2Y5JU2n8s6XTcwqCG57ui7epKuwW8GpgY6BrN2yUD73WhZWYSBkvPrUzYSei",
  "key22": "3VDW6ZhqvWWm19hnBigBJPPxYCGgdyAj4KpKSW78WSD3JgQgAAqXmMmmM9xVPrkgdQeXaMXLCGEjBEAVPyfFyNfk",
  "key23": "5KwevTHGKNnT62cg9k1pZ5xz9QHLKwMfT1GHGpioz7NWLgABqaz99853xhpc2QUxPzwiBptBm2hfq9q8DZTrobPh",
  "key24": "2LesBLfotQK2uzWtxFpqEjMGje6DjXCaYujR8zZtyqiaSb6SjQSpbWj64LTY46WCrQ9sCXCrq6BQGt116T3QAvNh",
  "key25": "2pzbaDHKf7XQa8a7u4HEPpGfjGub4XNuXziNfcESx7S6UsEZ4st1m1iMm4j3tdGdCq5fTtsWRpMowaP3YqBFxfJw",
  "key26": "5UtJA7GC3U9qiF9n5wnTu8r3Qi98fvXJC7pP9PHvFWm4Bqzr67uax2nqHajrqUqnEbsjK9ea4VRGBKEQn6fuNQRC",
  "key27": "4ZMCxY1my8Y3AhabDAWbtKRFKqsV9TtEoSjxoTxbeepLCdLhnb3WeWrrmumAy8cBtdMnx7DDHYW6w4JSuTx68pJh",
  "key28": "2ZUvCx97iNhoei5NQJCGWYiCvdAfUzrDQpFBUPv9dY3KuxXBjkd4QumAn9uZhny2F11F3N1heEUMrbzjMSa35Pue",
  "key29": "3Nvxm41eJcC3YikMo7qLEaX5PppzztEii79pmqdqb3eweQ9DoKwjjtNXKkThcQbTUZYzg3wjQZxXnXodUxRDVWLD",
  "key30": "4ouRUbi8y4bUSuey393D6sQTzzgr8DVtPAovGgC28TECsA4rjHmNAdLyZTssgWcAxt9EKzEX4TwFuv4KKjwQJ8by",
  "key31": "2cA53C9cnzfoSTnzxfnUEob67RutKLeHNLuaxigRNiergCBxAyY5SYKibJ4brHCgFTUpJKU7gDp2JsJwXTqfCjpc",
  "key32": "zEWmAinuUcCQCQN4V4r9HVRas36P834cwDXVVZ398j2TTHnDRKbGynrEKXpgU9bA1bTK2vVGSroRHpe6w4SEYRG",
  "key33": "52Z7NpBt2vucKub1H6WmM9F1qbf88LMeQNX7TSUjdqVRRHeGzzqZGaYbnExGLRc6PVWDTW3TWdGQt6u8a22cjUKH",
  "key34": "HapQ5tMzjybgKmswaNzctctLYhHNFTfveeWprV2hpvhfhMsdo2CyRyokWfJsMFkWCC8MYCTnhVFUP8gFL5ZN9ZB",
  "key35": "1PFWaZo6CNknwrHCowhYogmHuBfkdXASBZjTtJKSTNykc6MXJhTHPFAEPHJWry15h8uC2nFW8epvVdoRqx9j6uY",
  "key36": "2ep68BQGsH6oWBiHyg9rYcbML7Nvhb1p4WLo5A1APh7TdRsD6kv1YEwn44kKuHuZXx7kkhCgm3diBEaxNYefT47z",
  "key37": "2CzVjc4u3CAS2yyK4VgR5ERDAJ7W4b6dgGx6mWceUoMBFyR385XXDykJw17Yy5FfW9q8Bc4mndqRhCKuM9kWgXjM"
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
