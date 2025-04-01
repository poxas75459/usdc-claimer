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
    "tnYNSrzvrEipKLno1BvLQgLUXXcAFPEg31MPG3LgFmNR9fKhKUHmGQihMwGksZZSTCYCWCSzno4APxsAyUhxBJx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27myzpareXUgUxYbQXjjprrqpfE6senAPaPTMZJEY5DysuB1qiNJGCP5Y6hN7jZqMUxJqn33dXkSvfukpkYFmbQ8",
  "key1": "3qU1ki3SNQ5xB62MsyyRmHrehvp9PxxwRJ2tiwGHyHyEHS3ph7n3cchrY1ywcdz4DHKfCpZXYSBAbYQTJjf3bePr",
  "key2": "4UEZTRn4yDkZSWAATkQcX9rUbLkQM5aseHEAze6pbqG3qUFaj6AsuwnZTL4RmAm7UsjvoKoCasyP8TpUgeHwWjUT",
  "key3": "KwL3AC9UZDSaHrLvpB978EaYXWkKfhCMgCkQ86QE1sgVEDqoBaxAM1Mt5rv28piDbo7jbdHUdYZ3912sGioXqtD",
  "key4": "5HwhZ8qufnFsuffqeLVe2KPuTE1BcfcWHds925UkPHcVg5dutcmzKw19k1Gr5Ls6UNXFgZZV7qaLyyh7DKkfaatf",
  "key5": "3myPHrAd3EjseE2wZ9fiYxBZn73SPuRpoq2DDLXxJ3J6SVBLeSKxQPG193AyogpPqywoCPEXowwsdHdwAq9GABgG",
  "key6": "3VTMvn3wAcFcNQCZzs8TRSc7byJumdXETVC4yfBXzSrcFC51uGngGyGhPwmfxyWVHB9U27EkWgu7qc4cpwUoqAq",
  "key7": "5cCakEAUG8yA6VjQm3Mw9rB4uFYKDQs4zUvkqLcvwhuvxYvaisdKjEWRnGBgHBz648oqcyevPhkmoARiFzdvsRau",
  "key8": "3vG9BLmFSQj5EZcvtw32zmGLQ37Jem8uvZMjRxSuEe9maebH4u5mdymAs2LLoYUiRDGy5yE15kUAYd8xjv71oZHo",
  "key9": "h1bAyjoWPWm7mXh89zCmbPBv7VFHSw8rvrjCjKqic4zyNrVxNwz8m5r7gHLuZHanKncLQKeiF47B8mYEujMprGX",
  "key10": "2MM8x5zE4krsvWtmnsbXyQhLQy19TjHtC5JKoaPJAeiRvFuFZTD3GFSiHEq8BQGGtToE2m3NhcR3BtVisMh2TkoU",
  "key11": "4DnRbVmxKXMv92xbhek6JcRtffrMNXuaaao17hUL22U5B1j7peVuPWuAkVrNCtZX4GD9aTuU1eYnNZrjwChgKytq",
  "key12": "3njMMz1jDyENPMGXSStdjBcQ3zb2uTrVkLbQsia7ydDM38yqUrPXr53dVjZLzietZAp9ENwQMrKk8AG8jLLhgamo",
  "key13": "eNJKvnjw5smqPy2JqRU7Ckac5e6RsJZzAZMVD92poxJLEoxJcKAYhrUuTgNDrgjqr5yBttGqWp2vz2XcgtHXcXq",
  "key14": "4eFXtjXwCL9FTnJZyraCsgy9hhQikwz6YT6xPMMpo54yXn8jnDj2PAq3XAXfgZdYB6wdxdaUQU3XU3KTqV1QGU6K",
  "key15": "4UG7fvBDc42bw6hCHCFDN98LdZWmMamLMg6MwXmx7xtJEz1L24gEosM6YivJ647VGTd1sJkNLnRhCV6JRBNfRi4S",
  "key16": "dtebk5prfussSeYuab1PwUAxejJDZd7wdsbXWUoRV7mH1RPZ4AK63pYosQc4PCXSd9i4mZQFHSVv7dtLLj3CDdw",
  "key17": "4GgUv6GW3Ef43Nap2WburtL2VVjuZLiv4JQnTt6rncAbz8E1aZgn3yWQ7dt2HLGczZZXm6HzQNfUtEF4PiraE2Gv",
  "key18": "3pRj4uYcYemZ8usXWDkw57wVNjD3Er5WFNdRvQH3svMC33BnPjSkgs6sQpfeokYitFw3ox8gxHXvctv9fAjmd2HQ",
  "key19": "4hm2VbeGTPCXB3aLcAsheC2aVY7ECjpWMDPcd8rbSweMg41TKpdto2XX3F3BUvW5NZW8t7FvGUbzQvmDEVt47C5w",
  "key20": "ELo12TC5NCuzWWJE9kA6sEaLayHM3K5BmJ7yqV7sM1WnGzirA4ByLyVMcF1GvzJjQLRDFHT8oTa8oLpTwKZDC41",
  "key21": "oP4n1C7EQS2UygyEfYrGzkbmr3FaxmJiCBTkEVZ8ceSr431AWVcjoE4a3F7F4MBe6KkJGnffuSRFVTfZRy4jwN4",
  "key22": "4WRdAvPYBZVaoBFy7sbJd2uHtwFJFNt84vRgtmo8y7Yzc8MKvnciJ9sJshUCVRZiUDMxjQXMtKPLRAYQqr4uw8cH",
  "key23": "4qncfkDdkjpZrzgR9pLjRagfhEpJC9WUWZwErhyndhe2dc3Laxqx7BjRWpwKiYG5yNdNf3bpBxziAYyxeYdyKbrB",
  "key24": "NZ64hDSgGJ6MBHVd3pCozoBxaCXZ1tUTRyt54WzttAqgusSqoVLWKsP3fLSxyDF8UeX8Lt2Q9iEk9haRcoipxGA",
  "key25": "5E52nVWGXLW5DLTKetEBgD3WJJftRajdqugxxEFASpAJqxe3zvgAFipa86fEp9MA2z3FB5bHABHy43rqDB2Yg9Mi",
  "key26": "2GTXDtnmDuxV94iw2sD6WjLZ5YJ9epiUuyyfYnNefL1RHx9PUvTd44wah3TkMEwDeEgFd4zaqgkpRs3YLiH4CGpx",
  "key27": "7tmASDQDKpWCGyZBeXnv8yGPGW5eY6ZQwTGHmurcz6K6uhu1q432tZ3ZX27zFToghV9JFpvjtZEshSpme1nWwu7",
  "key28": "4BvMX3oKvs6NtZpJEvppPMtZsMUcPSMvaHLjsXWiprhvsjYYdBpBzf2CQJgSx5UTF6J4Z2krkrJVi1XDKRG5BxTn",
  "key29": "28XS5eYuAu591WMjfc56iY8rTnf4ky8Cp4xiJMko4Ksb7S4QStaQapU3nuMKam8Qr3Ws6fcZ5AEXjhVF8uSta5yT",
  "key30": "5zPhYZ9nNF6dLeHK7yCtdBEQZX7kBu6abq2MjkXbFwQ8b15MuCyqxE1z93RhxCVah49CJjnXTuBMKhvFGGr9CsLL",
  "key31": "2EqeNRBvcVSddgcNUmPi3anUuf2mE22GTSknG7DupHojeFJLk66Ff16QPh39FncBNpS3Ke9CtMHFnuSqjSopWnwe",
  "key32": "UnLSVJKMoDCx9krQBSN6CierfSns4GPkPLPYDuFQ4NK1fZkvd2YXVtLarYivG1ykzS3LBWtVgPiGUeG9JKUqcSx",
  "key33": "3bT4XE5xhtA2Wvq5gtK6cFptfQPdynSHQPDXforT1kY8NizZ4bAk9jrFmJYqaSMhFoUmfzoYECRsYXw8EDVgsNAM"
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
