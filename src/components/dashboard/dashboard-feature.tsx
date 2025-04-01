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
    "4NWrFHmaK7movo7gKrQnfghAPHdi2MLmuGU59vT1aZWqKnXKn6uSMRHyLmZGEfTds2Pj5Wk9dUSh6LNCKTByorNF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35WzuQTiQQTQsscFz4hQ5351YbvDtecfGzRXRKpCmnscZLMEbtKfCjdUbSBv46E4wf8U1YNpNuJDkuB4y9jCgtC2",
  "key1": "39wGwFd8MgcUXQqmtzKz4GnwV71eyWDPYs3t9ZFxV3Wt4LttUqSiCdzbb5cdfDaFE7EYxRmRSHqFCPZs1NiN3kyJ",
  "key2": "5qB4UHCGib7PYkYaXruEEtDzPNRimVbSmv3Kp94Etur5Cy66QqYufM7YXPvQoFgpLuZUyRasK1ngMCg8VB7DiZ5K",
  "key3": "2nVFAHTWW7XD8xo4EZdnCAxXajjHogsURi8VFrmRXWNkUZKjYSnVZ25FZdHNhpUk4arFCLWqyV8raiHJnyKqsyfC",
  "key4": "2haUKCqMfg77MUU57qBaEv4E8Cat4Ji2wjdw7NdaFuJk1b2MdzjPD2u88g9kNLFi2jhAxrXbA9LZNLSTfjnk1jL7",
  "key5": "3949qEZy2UWP586PG1sgBVQoX3d6DwhweNekiq5JchhKm33NLjYeJtfz69gwXWLCvZdYgAh49kzTmryWccQsBSxt",
  "key6": "aGZbMhKbSq3x8e1CStSWSVVvz5wR9Q7o7Fm8PWDMUkWyZVrMbXV5KBihZ8TgXtfCePFgqH9MtN4jML5M3D9FtXH",
  "key7": "4FJG4GYnB3WD1r1FuAg29D5n9mvGkLbbQ5dHCXpHwPSJujvddyp7zK5uCo5mLDbdSJwLyxfYMg1kB6Qh2yKCrSUu",
  "key8": "YP6TvXsNTyjZNcVgHFSChvn9eGhrJEE9zthL5EngYmnoLtQn67f1pMzCK2uvQgPdMM4p2vBAA66SSWdDiU1xR8G",
  "key9": "4vTzJKRPvgZLqhBn8vMpnY8aJw4Lju3eZxjurkWLEAw13nMrKxmfreLghuhEUWqYqjq9oCSRC1nGicQE2H6jotzH",
  "key10": "3ukrdvzpH6uRPeUF1jATTjEzKoFUBmj7mi8U4AAttgKid63uHVfZdeV1SR8vHMDLr4HvzJXeVokYFcXBMVowUjZs",
  "key11": "3xGuvBxyLeLD9JtuqiSDpyFThEwpHu7GcWChzdVxXz1Fy2nG9u3NyJZh4nVWysvoXKtEr7rmDkArVtCt9WHUqAjG",
  "key12": "36Vg1QcD6h3Zsv8Hd1HqnUVsmKg11aRcrXdFyQvvRuKC1CFE5vbi9Sp1kA4FtsA46v7bva4aRsoYTEjtzjHZuEsN",
  "key13": "5onP5iFDDFYDADxWwbUWkP3oBd31Tcjg9UMLbkwWgi5eRHpddRk8z1GWESTWziAtrUUgfTvQW2hVGgteLC4U8g5r",
  "key14": "4B62J9duFNbNJ5odcYhoiyzjcnHa1imTK3oJupw6UNUNZjnKgQHjHr8RLV1hHxVSyecTL8MRyPhvFe9cQFEqjSm2",
  "key15": "3gHRi33pk3fTZStY9BTbWXFh4r3NkhUw4RkWB1NyEmpDj2ZZyFMWB1bFstASYCeBV5xMAAHhcfEd1YVRZCmvDk1V",
  "key16": "5Y9MxdYkMyGnNGMwYzJe48ozyvgYji5Ef39WhyGtVzJwJWfghX7FZ44NGP247iB743XbetarvaYkebfztZcju9nQ",
  "key17": "2VBq8kN2ZuWdiJkZbdkVhmt868qtspfMZeEMJiwrzK3Yi4HwRuU2M9Rs8qw459CeL7uz6dE4oriqd8nMBThUexmw",
  "key18": "5ZachVQBiSAYFMZw2WRAAxNaasSpSvvYPpv7ir5p42JQuTWwqoWBGPcoqcLZMeW8bq3t9WeXmKWCAuzQcAJud7Y8",
  "key19": "5EG6Skct3CHfEyyvpejqzggybMQ72g8QFS1Z6EKmU71hjPohF1jmNZ7Aq5Bpx3iEJX88GtCpyjGpuiVpdy1NGD6j",
  "key20": "4jRFmNBKE5PLaGu2uHW1fFobMWyjyn6ZaUWXCJY2pAJjxUf5siB8qaMmvXXHUc3L3xgiiT8Qhh4U9oxAKrZ3G2bW",
  "key21": "5CXo58TWLe7CExgNMZSFMTkABpYPQu2cMvJMqqoxDVLPGGP3TD2u2dcHyGih8q1dXLFjvXcEpUNtt2tDtEEvhWiG",
  "key22": "4swsStjrJKDuM1FFjfv9GnX9zNcdbmr5KRw2uKpo249D4oZqPzdA5zviDnQW7e5sc7PPz4VizYdBb5CXQ1iMy9k2",
  "key23": "xPnvqiNVUYjEuUEnYUpuaiUd6xycAweQpwtTxSsgiyscgsbSXhU8y9XvqNkrbiHEXFxKuhuHhPmHuqgcVsCy6jQ",
  "key24": "5SaR3mxnwzAcmvTEK6GvVo6wnutWisqRkKt4L5LcPivX3gx5NPcb7A1NDECuZr3J6N9q6zW43kEBXh5Dc1gLcJcy",
  "key25": "3GVDnC1gTPpCewy2bXqDXLwdptBybEYhjZoW2qPRU4Ch3AuXTdAtHL7Hx7aM5QwqnGz6uaEB2w5CTC56gB6ijTY3",
  "key26": "3BReSFHjYorwq1SyX9RN4P5rjQEGPRgqzTYgjMTJtab9U8CbWjJQa2J62rPJ1nr11insBJ4eEkkvEPnFHML3tKp5",
  "key27": "4AsrfJDcSaL8qAXDXuntZ2J6kCdXUCWYWrfCdHNMckHCLQZDhnQa92EicFr157pBcA72QUvNvUb1WDkAZYLUdqWp",
  "key28": "3vbHcmdDXZrCUZHugZh86xTy8JoB1w8VQVSPdfbCGN2rwuePWjN2NMEAJAYHEEUihxP2CdoRHtv2YmyLebUeccda",
  "key29": "2DvgQX2Jex9vfiya9aTnuRqH3spJo4oJy3eChPeuQnJeJ3EFc5HU9YF8smE4Ky2qEWFkiFwVSNAs6xkFEoc4s7EA",
  "key30": "5taexCD23gb4ACUepDwvV8hP4rFqs52Dr3Wn6P13jXLbQvNXqnBdYQGhsE1J1d5Y3fXSW4YcshDZxemaEQoKXKyn",
  "key31": "3aapYRZgcPgC1SfwkPTa2h7tDrejfhLLo3H5VJ6x9kiqbctyRsQ5DpuBHYaWTeRGMy8tasPvHE1q7qSD4FntaVPr",
  "key32": "DsZrkV9CD15vkZ9WBbbmzNKjDsnfNfZxgZpT38paZRvo3tuFdzTJuYaGum6SafvfvraUebvmkbvDayqKW5Qxfey",
  "key33": "2KnTYZb8rjKqArjPbS4EbA68974j5KmNTZGVMWS4Vp1J5GbAC2bNUFbvfXcPJf38SBwXLKxViwLrpgRg5qZyyJ23",
  "key34": "52FfpUX45KvswfNqY6FQ8Lfkqjw6LSMvC6iSHTgrBYQPC6ZmbXewWnePiZ6bbPwXdGKssEK4c8jPcLhxdcLz2f53",
  "key35": "3uVSL3nJdwn7kArV2NayNQjfYxwer3kPp9Epvstgh15GrorMFKHHLcbWScW6iSMh7JENnJucSN7ZgccGyrrovX6c"
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
