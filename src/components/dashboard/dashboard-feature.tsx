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
    "P2y8mt1RsCY15DZrF6ov9fE1GY4rMn2zcQM8gNmG7Ymm5vUL4MtPrn1ckNbP6Twnk9FhYY1igHBeD9bVniTXxZv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3t53umGrnyGsEBes1mewuvEdwtYQoV2rsZEBUr4VPgHnxdZwtk5BYTxKNmueHBugC367m3hmZKbZqNozwyGw2ob2",
  "key1": "5uWi8MsqTBJMVxvu6z9diNGTnibFbHfaAiMizLbhiabQbZoLNFYr9XEXaYMRQcpX7tWg92B1kkZLaKBUY98JjoY4",
  "key2": "3MCGy4NzSSxK9jEBedr2J8QJYqLRpS1tQptMBcNTVkNAutDUyhDYKri6i4u5uKHc4yRoFgAGEP7xSMfGDGPVufQ",
  "key3": "4yKipVkxFJ53CH6eY8z6QiFurJFrvJcXiKqar1ed4DF49xbSmjsDnkLHRwyBomzvTyQHfru1yXZXNdvrw2ZxaTGH",
  "key4": "5fHNAyG5f6QZKGWLzAxEFuL1sAVGRu4saku8qwgqLVyxzDCXLfnKDxrnzxuVJHkmcj2hW5DjRrSQtJWEeacLkjZn",
  "key5": "5hSmB79XMe4SjDPsuRTHktiWTVonD46XTnpZn9sA5gY1ZAVWMH1Ka8PhiXyg9Z1mcWhWdq79BvruEv6Bx1d9LUda",
  "key6": "3mYKvmLxwNvYahGiLzTzQCZgNCkrGsBT4VwcRw5Cp9oxiYjtU7xXvVgRGU3W7AgArHN2XtPBpyoqxZXNjnNAMsnk",
  "key7": "4aQqv47PqFwVGrgXSLiGefVr1Wkt3CechX4AKgmPVPPCLMkAjQGzeKYQgNH5u32itWbzVKvfudbkyohSoiTDnk2T",
  "key8": "65GYgSaoWq3s253ja7fJFbgDL7un5sEUDnbZCu6jJuJT7K8a21x92772FCNcebHmQMu7bnp2zPJAfmqYjxVCpqhT",
  "key9": "2sPp5Z95kWyJSgVamY9xbVcf4yp1Rqte2aiiaBqj8pNLD6HZdTong8uQZ9Un6PvGCko7SYTd4GGWxqxHtNkzwXLk",
  "key10": "3ddkC4T1qvdArPVTbiGHB1NWDaBPXc6Pq8qWFeD1H9cHzP45jBfBWf3uRaepRdNspdRfM9anwZPxAdXGokAv8cVL",
  "key11": "4jEg3KTo5L5Z5Yg6fn2AMWCMJdm7gSJShncrjs7dEtUuinsW2KTS9sjfBNW71meoqZDgvzDXYDonDQMg4B1ZoR78",
  "key12": "3gT2SuDkqiNQ9qTSU4oyXtgQ2wDfXxdipx7n8YitJ8muK52TH9XRJhfV7y6mf47Waa6UdzUqhSbx9e9UkCM6GYED",
  "key13": "3vALnj2o4TpjYRndfMVmdf32wtXqrA1DRTeYsRJWyAgVT4nf7CTeA42DgKEZuejsuWjX8bgfL9ZpwFj52MwJLpmp",
  "key14": "D2JpSdySewK46svNPnVYJ2qUT4Lui3wLAFZycgiEvhbCX7LMjdv85pHD1pEBNaETLV2e7KCSMw4D1j8rZHJvR8P",
  "key15": "2xfurxxsTCuoptssUSLVsYELzYS2cGQfFFhyWqzk5111PgsdmyMDQF8J5opshkvygX3XaaarRqmWefmFjcgSWeVT",
  "key16": "5cZvx2o3WNXcNVsWSBrbDwVceF4Ck15gKZ6zPz1X8kFGPtXwf76uRYp5ioNwmckR2YrbDyMSvhEBmGJed7gwFUCy",
  "key17": "66gubJB8aKRjt2ggSH4ZGftjSE8TKojPGAsC4TwyXnd6KZTJgoR1GLU4c29oU4rdGhrp7ks8ae8VxoP8CZH7vhKz",
  "key18": "4rq2CXkBk6bCAvx4VC6Jk9DsmCNxdcUwNMj5tPxrSqdkjrY45nRzFQUuvSMk9P4KtaJZKd4Sh6fuKRndDY4agjD4",
  "key19": "3xHdguM3RYCcUXRGS7Ky2T7Xhfyxjsnc9bvwZgNhoqDH1g8XqL3Cu8MVCuZFRrHDaqf7BWUFxRgZXuQiq8C2Hptm",
  "key20": "4QwWSJmKoEhjaAjQHBC3qWESK6svBPv4WdW78tEGyDHPnaqF9TwgR23mKn3nJV2sMRo2judsbNG2HB8bg6WzNe7D",
  "key21": "5Ecm31AJomkqGV5ZaWJWsfbrv2K8LDh2YsNNuSGUhBdVjTq1rNkbQVJBdMPLqGB8NNrw3FfCuAthxkJDutm9YsaY",
  "key22": "2M5pa5tk4KvnoP9pkaCRXvZbNu6YpmZKuhDiAVDSfRBPEbqw9CXAMJeQUcwtCA3TKdLncnrwybppGRmwjBFzHowo",
  "key23": "4AZo7B1Bhz74k4TavMMp3H22NWFLeD3uqG7XJvpg76XsQy2TUVxcH5qLAJC5bMBJLbASFFxUZbK8qfKMyvrNMtdu",
  "key24": "omZeioG6kaEA3vcfBuu47hH7CLrmFY9tU9LtnztV91n5KRQQYfTNy9gto6NJvRdk6AQK8a5vMxhpoQN76eG64Uc",
  "key25": "3Q25Vwad8Wa2L5CwgSXkprgbsWxemBGRJtMguHdvEgAfT3Am1bKqE34txCvKPVTegyXHqP9HkKDLnjgnr17S2P1",
  "key26": "2EfxaPqNY9Zd524sE3VRd96Jbo81h7jTaJJy8QS1UncxtR7kFT7dYLES3abVG2Mqr9vsmyVDB6rsX6xSan3jFatA",
  "key27": "56M9shmxPqgqWDVYPaHTuFVRLRG6bYSyCg1X7TDA7ZNrCxhAg5iBGUHPjEhs3qirMCGLAz2txBwKUc7NHp3eyVgA",
  "key28": "61nPYeXCvGdhd8afGVLU7hZwksKbRnFyk83nPtuxqBbKjEp8vo5RdJ5xEMF4QJNvxyxfqqRuCK7V7R8yGz9enEYJ",
  "key29": "RS1jm7YEzdUQmSRrDhyvirPMNvLeGo6RaXnwnA8GDJU1Vh1qZ9h8UwP4G8t93eFb3qXzmfXDupHUEMXoYjdyVAn",
  "key30": "FHfeNUmK41UvSBNJue6HMKis217YifoaY9XR594iadm6gTR2h7EhsXj7oXrwCRFeg3iWX3aEGKCrodLJFDEvm8a",
  "key31": "57hjv146VMJZNHLj2j2vQCUNPawXmpR8DcErkcZi6GZWKhjkXHfoRjPwAgAk3JepcuGVXAo3ty2irYT96hB9LGLj",
  "key32": "cukZ1gjdu2BK8eD4CeigHGeM6L3E6rXetdPGj3hf7NRBx5oYm6mgrcirW69zxwwKM8HxQntKtsBK2AixaEPWwNx",
  "key33": "v1NLX989mJCoXL8ekwPDzazteAyj6CPUtpYbPwiQQe1qNSYVfwSemiTkj62vjMrnP8JUZaGv19QeSe76Zq56pwn",
  "key34": "e6EzMm1pYd62NTTyEkRMFLEAh5MFD8cDBCx1eYTMQajDqYJXBxSxKv41aVsBYeok5RobYTHAki4cpAKx8HxUEjQ",
  "key35": "4R6oXvZ7y6fLJuFnon1cF1WkLDRkruFDQdVBHnRqiGyC57dr1wDiug6mQP83m2ZKz8WtrdcZxFd7UemypPb9dA16",
  "key36": "63H6TtnZ9dPjg2xYwVXB2Y9KRspXwGSBCWYnTdCkN6uKkUVjwxbaKtm2RCXsPhyvTRQoPhXiSPDD3aRqnS9NvNT5",
  "key37": "5DL4yFqzex5MyJgGu51CCDv7QEUbufybLrEiv7tWu4Kh28T95pXWhXWFfscfASdcxyXuvJtjAiT4sFjWMpJ9fwYC",
  "key38": "5twrV9RVdMczqEti2kFeY5Bc9yWY9GMPvr3JNRaVHu41xaZHFNYoaePG412TRudGgCjddEaGkBjULCcKFFwVWYE8",
  "key39": "21GG6sXsGvgNgYQXUUdPK1xHK6h37BZEQmKj8TRxmKp4pxkCsp6G4pgzNdgENTS6j9uMiFnobavHWwjvDGJJgdfD",
  "key40": "5w1YtTdmmpSCZD8L2a4UjjGjVUvjPZNgLXi98WKSFGfcastoEA9N2vMC86ErRUwSpXpriAMZ7Gv9TQB82TdpV4sT",
  "key41": "4eH6AwokrboddjGnD4nbmkfZdfa45SVAFAP7QUrneM9C3ETwjZkA88pCqT7ewGRN8dM2FM4aE3PA5ASASS66KYLW"
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
