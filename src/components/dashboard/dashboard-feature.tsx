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
    "41MkEuMz45WwnuauGugqf9PrJroYFp142KEdnH82zMuXoXZDYngALa44nxbdFaisCuXeAmbbkEBGqjk72LYCK5Bq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4U1Bwujrvfk5VUBk11b2tMc2LweGtarrqw5nGHJm4fE2xaTKVTcqB3uSJ2byRgKUeUG15TXKDYrkvusV95zdWGnV",
  "key1": "5Y7knRybSf1tn4mBv63F54RPfDChyZyAQoEzZVgdMBhZ3jSKVKTjKNT2o38gJyXVb8xFiFt596xVeKEq8DHLmrks",
  "key2": "55bvVNAqKZSfzUhNG1za8zAsNU2ueEYhdVU7zLd8wbrMkxg3XvxuauvMBRuUjXmVmKQ1w7ghz7PexiVDeUkckenc",
  "key3": "5N4fNiwdPFnGqX6Z4qNvx63oJCDf9TMF26iVMRoKxcgFrBAXdKZziJXpLtnEdYZCgcujDdAJbK9urJkiPiWRexGe",
  "key4": "4jypqoWe5UVYjds7yeJQMuEEZ55HxGV5bn8pvRHkwoeMhdmkzQ94WQSG7tHxoowvBWTQ2RjLASC77wvn7stn15dW",
  "key5": "4HSysSqDuWMGiRwSmV6hLLrPPP1mEDRpyzhQtQMvALiUDDhSssbCb5S9zXpix3gpUD9Ec4PjHMyTdGUmPxZdPnNy",
  "key6": "fEp9VsevtFfpkMRxSEcruc2LurE3UWLX5vEc9ehpVG17VfbdyZ3WKaiQBhfpq4ba3mJMTi97tN8SkYS3JkDKAph",
  "key7": "28aTXGgnFHokfeBAi98UE84bcbBtkRuvJ1V2HZhsfnMFhqCMQ2iosrecV815epHdfowvNzxqXabxf3kUAx5t9FiY",
  "key8": "2LMnxABgu9tv1wkBuUFAsqFSheB3zB4nA6gCQVPSBfKXuA9qvsNNezyT6rA7XkXUtt644jS6Xn9SSVMJhDBgqcgW",
  "key9": "5egGevP3RdCSfmdTidTrVsFAm34zkwfzJBr6PcfyaekGtHPoTXnSA9YaRtMrAetb3gYaTqmKynePqHGxXJiusMbk",
  "key10": "65w7jXN8E4xmghzLd12eH462JyJw6rGtjw3ALXWZyucoHewN8GMszuQd4h4Wxebu81dzdLNtrfGrrYKgSwNeh48z",
  "key11": "2ABHPomeFbrKJgJPMLQb8zHeHhmomrNb5s3uJz1i7Y7TmTXkXeLHXmzBcJMZ5sQfciZ5Ltz513YqJzBXqJTXuHe7",
  "key12": "2czn7Zve3ts5A56s4vTzCKs9xdvgFGbZzmsa4NWz4Rjn2iyCv4Eq1TZ4jAYTnQo31h1ctvWeuKAtD9fJdiegkFbd",
  "key13": "2dBwHf59eSzykXEbVX3jgiHUhdSBZYFjmM4EzvuD1sYHuW5A7X5yNqJFhMhMCnFwEEE2NNwHdvu8HxCZdcVEWuXX",
  "key14": "23dZym1YRjGUFED551yY8AcicEC4A7Hh62Vzdc8qzDCKBdLJq27qorkV3N3826fCragkQFe233ZAkXSz6GRWZReF",
  "key15": "45LVbwVvaP6N8Bm7AhBR25kNZcw28nWqBRvTHCqRcS3LUAda1S9g7rvptdBMC9ZJrRNEkev2dvhhhjoekqWB3ENf",
  "key16": "3CxEXH4sHfQ6wUx6Dmjnj3Hwj67PwVrJpfayuCsWR9zP5XTkAUeLb7UfdZ9bwDrvuRgTzj3Ufq5MiuBP97p4WXaT",
  "key17": "5stGzZzPnEEPoNX5uHuDgqJU8YVJW3HgJZQ1txeLW9RFMT3y7yHRkojvysNDNvMHBYauZhkxycqvUDPF1JyvqrJt",
  "key18": "guYNbBm2UMq5uF1w5ci8vSEHHpJxAq9Zm5NVsxMoo2QS6rtpKtSnigZe2NA7xtpE84kPTD5iQvq4CzPgbFLVvjN",
  "key19": "DPd1fjmvR7No8Y9fUDM7WLAUr7x2wVNb5ddmjV7mYwMFqSVEQ2y7dWAP2SSmR5MuuDmPGgXN5q29MEuHWKFHdwv",
  "key20": "5noXDEbAqxAsAhRFb7si6ME4TTDFdEnoxvqNipu2DyxVDwRgs7TT7JXC4jYdpGmwi4vKyRQobHABNi33KDnGKS7h",
  "key21": "4K9gKDFjWevi7AxV56pnn1FbufV1PuKYLtaL1utJ6TbAfnVwERE5jDHFuAisfZqCw4uoFUCuYgnp4oCvoapG84TN",
  "key22": "4sStnXmCygMt5BdsXFWYaJpbomPEG4e2y3zZzQALq2rL6mab18FndkKMkkDXRtAjqgesQpNYvawusw52vqjD6LqV",
  "key23": "3PgCYLfAs8FXqsEkRC7x3EugAMda3nCes1GWsPTnJj2WC3pcxEr1JrAyPdGhx49wWMj7s7tGjyCC2Rhiu436pGs5",
  "key24": "4UhP5di1mxQ9uCbCnDtKD4x8EY1emH6jS74UA6Brybm3LpuFz19cX3xSDNK4kvW7k7caMQoYM7q9eFkYfmhfoZ23",
  "key25": "2XVXBCR8sU2vKF1BacDpYjy4gVE8AAWVeW3o7nCnsTYmjTjDjzP72xReAWX8d78wkq8PbYPCYVogD5dxGs4j1Pic",
  "key26": "49CFGD35H7KAvp83Juc5o7fKCdMxQNPHhx6ZQmeoGdMdnms27PQVfkkHEBY5JUS2ym2eniwiaXZUAoVezg7pdJgv",
  "key27": "2zKr9KTo2EVsEiSCDHdzvhzjcokbure3nMAgLGdkFZ4UaZ8W6sjUwp2k2HyQH5vfmhqmeJqjMoAjGDSgyrU1GWuX",
  "key28": "494VQ6X2jCnCQ9tdYLDNksx8yZeh4kjPo7vXh5Mc5hRrGkuVwt5SjQ355Egd3EPuhc5hWLP2HvjZh74A6azm4Xoc",
  "key29": "5Z7BotSF47WxAuJ6YzzGHEVmERmpDos5ufFtAUmdtLqUhtaETRqLJY1SmiL4temQEf2kmRXM7T44fWKYpRDBm3xx",
  "key30": "2a45uPM5Gzhuv6ks9iYFHwRxcGJS93jJ6mfrz8grg9rnGD8r4NbHPKUEdNWchCfd9bTdYHoH4A4YRaSZth7Q4fCc",
  "key31": "4gXVmrHdv4quTVT18ijgNWJ2X66gZ4cidnYXnioisbhzKiL4s1f4ENrKEVTurABhdhVSy6KFgvXwaEVw8YVZgjvU",
  "key32": "3T1Eg8fmc1CnbnZArMmLMZ1ZP2j8ACTK4dRPNG4RJ6qPnc8uzrfAvkuYDiw2JrzFaGMzoxF9ExyJ9P1URNFjsWac",
  "key33": "MucvswFzXAGsvzDLRo1EwTSws3NQGWUJZn6ATMgyEWKgLLwaERoz7bSqEdnvSUwGH6fcdmRRMi1HjtLnkQCC9cq",
  "key34": "4QSYf7Wt3TDX8g4vU9SmgnJxvrBJgeQ9gcuCrxtpyDUn8PfSAcm6tY4WKM4dN2KkcSEZiF7163iPZ7Y7pEosEQgQ",
  "key35": "3qXM4DK6cP3jXocB7fNAccXXairYU32VsccbiKDL4DYbXyCoZLnWCr1SbJchkBBqed1ua9RzSDgVuY9XpE1JroN4"
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
