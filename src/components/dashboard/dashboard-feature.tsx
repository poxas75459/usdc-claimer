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
    "2gtZFDcSMRCYn5cpsV4ET7vrnLrkVHyKwNmBiJLuJVdzrS14m8x8yiqDBTVfv8D17ek7jC2BEJFJr39G9akSqRrL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jJQszajmMXnjL7gVCjn1xA8eAyYUaZEiGpWiQ88RXiLY9s9ou2CsicuBMQpj7onrXhcRpvboJWVLAb6eoLBod1z",
  "key1": "4RUcX7tAnCyAgwYgEwBaWfTqi65UsPsfBB3Ae4SRfbxtPkj74LRvVuyy2PaiVshTKFaqwvoMFRfrgKAs3SqawckX",
  "key2": "i2pCujAe9jbJN4KSoRZn9RWGog1zHc6d5Vd49XPRxzquKTx5Lpy3Qh8mrmJ6doGvSBDNBv2vTrqZbDedXMiw4tK",
  "key3": "2YHr1iQDquvDCtdRDcwpXxVkmT9dCFDj36oNB12MRQKqDxZG2cMgckCjvBD91cQwGRqMKee7rmqgiHAn2cziBLHm",
  "key4": "2RzQYPARgpDieBirVPegEAqBG6WyiyZWyqtxp5AspwbnSUzLNNtuUSoMYHuxBD9raeyDMMcVdc1QrDtRjDCaGgPy",
  "key5": "4qx4aDKAvRerBYT6mdX3NsgvQv7VJpfi52bhxLnk71x2GVE32MVeeKL1Vzf8kWY83XpETCSjSyVWpjuXaiXkZFSP",
  "key6": "xKmtqPkygX7Nehkr8vWs7kNZiCFkVYRfgWSoDLrCRvdSNrNHSCkkbPGRaQPjGxgkerZn77pDETbRDhXxP2nBFWi",
  "key7": "4w1E1XCsbwWCfRCKzXfZ9Ab5LPm3o3hLNghBQxWeyLUeQaAKTD59BQ5n9Xh4ywzFnT19WnHJ1QsKroPvy3GXZy8p",
  "key8": "5A6jcfDBQ7AXDy5tvWPQgbyM6E76tMDaHbtp6uTxNeahozv9upinBcJJXcFyiH2SRuYAejHbA7EFsLAEFr6PfjEk",
  "key9": "6693tSZX91T69sDzXEFNZc8GveEvqNNhLsMdNXPv7hR8ZyLiUjXPM8s5A54LbvYDaphQBnQUDTAW2cLbeT131QSq",
  "key10": "2QXPpvG5nu82jLrpud9NHVGDu6WcgrLKfRXHYS9GaRDeT8LfnSmPSq2JcGdBPnLp6jB8ZLp8WAB61Krwz5ubRsMR",
  "key11": "2193nNXqmDE1Usqb9gNiZrY7QoTPc7T9TjsJWgpB4DQwshtXbCKVTdkYTah5ayrVS1XJTF9g2Y7o3QsaE4TzbheR",
  "key12": "xTvRscMf6egjunD3KQSXJdCqPuW4oPF2zK9uqcF24EDeUSqFxzvAFGZD2JG5K2QVsYiunyr1Ldj1PKferbzKJ83",
  "key13": "5V7M4coiru73syreCRhzbbaEuKM74vzW1wgXuHy96WnbGf52RiweGTa8X4TqVEuK7ENtcmeo2Rq4E1edrD8Bv4ji",
  "key14": "fTvwVsxcZxfpwN2j4yvvZmkVmE5bWRRDuhC1gjhbWvodAfHWykoRgmjkrh3X1vMVBawQYctHeHoyq4CVBTXUsJ9",
  "key15": "64QYK7XGwjJbVoiBVVbAgLE6QSVv2gwQFkiYvzVzmJ6VmWnFtLfoKr4jgDeHfndrRvvd1Js4bursKx8r2eD1Z2iK",
  "key16": "5H2aTMajBMzdWeEHao569CzNtr76NYyQ62mmkJ6gfFuhUx2Y87TaAKinorzRfo7zePjadpb3uAS6uXzr7ArNVQcM",
  "key17": "tENFzWn4W2zy3bCbP8wX7cPCh5rNvXcVaqZ6JLj12bN6tLqSP772YBUGURrmqKng1vrVxjfqpEVZo7RbG4NEAFm",
  "key18": "5L8oFgSX6VRuj3p4eWgiFyu3epVCZx8wxUPXtB2G1BEsFUk6yiF6WN5ykZH5KAk1BwJnWT841nBjdHj5J3vvak18",
  "key19": "3Yn8CZYWCqBi1qTisHVwHeyKcQLUroNWSPUw71ZsLBQTy93nBG7DoGUPvFDmQeiKJA47y66TY6nHwDsV5Tuk9v1a",
  "key20": "4b9omyo1z48h6VNArR9bWM4vzRPjLsWCrcyXcV3Qg7Bt8rHbobF5Vmf9WaovWmgxxC1AmeDe7qQAWqFZkWQmnrDw",
  "key21": "uVnLogs1LEYXH54vXsy4x5G2e7L9DyGf72VSkAohWcvgBZnpX1RENjAtJSBEqirAxRJT4tyPLtXow4PWyTaCagK",
  "key22": "ZXAQN8ERaQU1wmQjX8G3jzkqroCj3FoH6XUZYKLehMZujFKw9fdCtRBvoT36DcNGiytyRHBVGuSivtBvUKCZjkG",
  "key23": "5DdFfZLtgRXPPFQQfgkTDEBjBQa4HyH32qE4f7fv8HvyKZ5StuYsiZe1Jc7mUQdSQKCP2FiVZr7wJ3AtyR732PZQ",
  "key24": "3HMG8igb4zmMkYwJvWzbybh4Tft3EjYaUgkvf5jZQh5Mjb1V253dhSfWnMSo4x2GkKLsqbTUoGtQsAjnEoQdcE4Q",
  "key25": "YyK3T7dZgGkbs3aUYMBm1gpaA1GBKWBuzz1UY76FC7gbaejiyVy6akRFyqyPi7Cj5FTUQeBBvhZjypgUnLUnfuG",
  "key26": "4GE2AsnGRfc65fqrWwYucdKZN5s3MExcMRj2ZofB9zub2tgVfenfGSNM5ywgNmyCkzxG76EKxMDe94qFXMV4uq5m",
  "key27": "5PNaYJVzPLWExywRUV4b8bb9Nog1CURKsYvgUpwSCYMsEwUnizPq8qJEU7WuNMxTsCs4cWUXYqpq74eDWapw9Gef",
  "key28": "eUqejgzzDCjL1EQxyofJF4SbKkzf1xTJF77RFchv9kC7SrnJ2x3uovJLHMxtotZESdycwizbVS5nsog6Dq8YkE2",
  "key29": "46j8GW6QkqHHiUXxDnFGU2r8HMyzU6b9aC1c9dX2r1tMeBKrRUqYPjm3rHdteW4vi8x5joBqEauec9tEx88fqEQN",
  "key30": "4cwcqxXcvCEsT6KUfCUgkM6GTcPwQWCgPZM7nrKbqPokpXjZjGTrhcp3NniPdg7NBkJhgAxEK4UN6sGGkGmdjLjh",
  "key31": "2Z2LFt9UNxTZ5kjxLaTSQVZXA3e3Ug4X23BbvdX8qB6AE8rqkHrMTdh72MBcvVPGxggRd2usN2BZBLs6GShe2rzK",
  "key32": "2zTqu5eKyR73PY69dzXNT8KDveC5bRLEorD96PNFpajzYLLYTuyiuM4gfpngZQ8u3xbXuQkAs76Cr4z1PRyw5UnL",
  "key33": "57votN59uGckA948yGWiBwBQH2CP26rQKgbyuwe4st42HnqpCdq4AKds3fGo6cBXaaDiSTpeNAyp1Ao79bDnkKrM",
  "key34": "4tHTF6meADnivwtVM2ThogqHMzbcKk2Umt73CHTbjzw1mU9QtvcnVaUBLmL8GxmB2ihEBugVTiR63aiAwXR6iw8W",
  "key35": "65hrjkWJtcU7RJ1jbaX9VrNTWi7kVv7dx62RpkHUC3raw3XtPApPa1pU5i2UbYxUjNCHfAveEsP7bKGqJWAkubhq",
  "key36": "3pnnfDio5kXyfinY2JoXLz7d5QRvNiBJJPdFXzBN6x4j4w1TxLDXay8Y29qdxj3K272o3iuKB5Ca1N4MSwCtojXE",
  "key37": "2H2c4oNjRFWYn56EKUuTKiH6mZ56gmUhWgdohsVQHz5FuCQvN58MqdHeVFgZZnwqSPL7oc4ezLdajhH1Uk1ALFmF",
  "key38": "3FRuskpR1Z3owkuLsdFqsBiU4jFW2vdtie9jC36DTcUbRrdZh9r9D87C3W3gnHiPgjDYAikhXDX53jsNXewLNWTD",
  "key39": "3zyYLPnzjvFDUnx5TY6sKHNTTKnMxF72gq8H83vg6svXze4Jya8RWTTaLcpVUcZAm3RZqCJ3Z8o2rLVKfkbxeUW5",
  "key40": "2hccvR6C31fhgjSVT1cE8SHawzZuFLyUQPUN925HqzQmdJiZBwx3aFS6sAQt5N73QwL3JfoYLCvHT9g38Qb9LHCQ",
  "key41": "5eeJPgLRY5PyCTfx88FA4WV6rLUdBU1SHL3XcTF7H1uG5XZex4VAA5tkyJjsRe9sRYRNoCVVuxjnnQxVeQUm58Kr",
  "key42": "2Ny4Q2R1PL13QS7tSFx73shwreuX6T51BXypqRd5piiGtjtPRH6Z6bffAuGvVXeUaCv9eXMcFNAZVAdknEzaT4oR"
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
