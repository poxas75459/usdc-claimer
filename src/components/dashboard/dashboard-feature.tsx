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
    "3FNXHCncFBnHZky6ccUNHpxExadJQwbP8jduvbJzw4dUEgjxuwgdskfZQUioK6TU4vjcM9Fd5c87ehCvN13xUbsa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BETKs7VA7fkjWwDdco42TXigZNC1groQbkDHJkou4rcyZvwdXwUTEGU1nuPKu2ZxhrFw4A4DeiMHdgXZ5iDLicP",
  "key1": "4k2gx57S5QHm4BfmBSRemLn97XLhtzxbHLAt9QoXTKmntwbLoJ7rhTWUVoxf2wzT3QAUv3KzRqQK7FzHPVQtmPRk",
  "key2": "5mDZ2UYzRRXTnmvRZWKVFD6WWaT2siTGBvRRABEhsZVSJu5EwJ5obJiZYqzSjUpeawSDAbjnF1Egs5CexnAVCVej",
  "key3": "4zPaS3wpmckojdWqKEFpXgrV3eoUJ7NWNznpmW4eVfXnjT1oFDQV9fJSHgCU2EwZPhhakfBxuH2GSSdUz3sBUss",
  "key4": "55eLTaLh6YTnWyUTkTCRvfQ2cSSRQR96JS3JQi22jEVessPzt7sk3mLwy2h3rXDwEao1qCtdTEpV82o6wYtNP9re",
  "key5": "2FbFYVLxWmruaHRGoyCoLsc5wZAXGGqxBER13ZD6ruohoJFR1aJXTUsq3mgMsyWJH7PncJ4KCpdeACvc3DX6ZSjq",
  "key6": "4d2rRLkRrCra6HvqST34davA1P9yXy6NZqiwELyCHZNw9T2bYPBQ6pEsoFhAaJ8nz7RitwR3Q1VYEYiLMqtnpDTu",
  "key7": "3s5FFD2P5ZL2eDpNqycHQHdfiqeV8SqppMDBEaKJA7JgzvVWBoJFNGhi1abcVPH83VbGmN8CKtTXxmERoKAzCSo3",
  "key8": "3UBXctpEXYcajFEhF1oQCNeUBxsNd9QgHT7sNwZbWmFE7V5ijmuKsizDSthm2j21uYcyy3uL1LDEtJTwrJjsFN7q",
  "key9": "3hwGfXTMWhdLzqyJSdwxy3RpzPcTU2Us4jijukejMyVKL7rqfDTguY6yNSeq4A1g8w9JbdcwcvJqX6vdtZAFgh9o",
  "key10": "3RiqkWMJwiAPH3UercRSEXgxvUSfWs6oAR25zXJMCu11s4wrEGTxWAyoDQMMVRXZziYR5ECEXTo4uXLboEfrBQdq",
  "key11": "342cmQ62eTQi2cG6qDGhmwRQphZALU12xfeMKwgdWRVonKs35ub1ZThwKT8GQp7X8unC7sKxSHCUoyXeAKStCmxB",
  "key12": "2cuBWXp2AJ5BJV7bJn4BrVkTM7JdmowC7fEZJPqR9yNyS2Ya2MLXY9rpiHXXwAtvr7DjuMvNbKjbnwbGwkH2Pzzr",
  "key13": "3LNW7qrVCLDiS8hWiPqm6vvSfmMZ6153vCrVjiYKHECSiHzYPv5wuPuDYRps3YXAnGSRbNEmHSUTsz1nhemVd1jH",
  "key14": "5u57TauhdGUYRUPZc4QGvPrH7ZmY1f8RKbpAAYccsUmW5VAfvt2iVXmRJrAsXiPTMW4UBKppe3mmn9zpmdpprbS4",
  "key15": "B4b9ikD2mepcPWY7xnyhnJf9ZsZmCy5NY5ezCVLjDaTmSvqZYK6fZQFc48Y6KSfEoYbQz9zypMNArGeHPFQx1qM",
  "key16": "yNjR2VK1shqYNCw25biuTrM6Uvwd9fdBHkTCBL4bpaewonD2pz4nyMdXVnfhJkUMDTG2pB483AXWzKjWsegpUue",
  "key17": "ZrVthbWKxN4ynBNhuXQcrHfGbqf36XXc3gDEkCvCAVHvQiNP4YLEUVCy3pZEeKSksGAPEyumuF1aKgZhxKCB1PH",
  "key18": "3M5GpK1NC3MQdVVFuiotCii23xAPRLYcFeqgBii3YVpZ4aiVr1nLjdd9e3E7BKQWr81RSF4ZifwanUJiY2CUNXyN",
  "key19": "2xa1QfByKA7HUBz5Cudqie1onwvsGukQcGnHfot4i8fzPNQdQug4xoSMBK38BrqgAJpL3TvEDPbKTvFpFRQFfN8t",
  "key20": "3Eu8QkrrTXyzAfmJBkUCgL8FkXD4amxztzLxdYzhikrSJ5NajE9hBwBGD2LAYjyWDcteGa2tvKxdkfhu3UQSGciL",
  "key21": "4gFVNqH2pn4JQmjrUWjJtxZbXpymrEBFuCdTfSg4HRVpQfZX2CZ46ZfxXPwtUaExuTjA5dhpRHkkenUQo7oBK8GN",
  "key22": "4H1L43Mboj3EfXPGVi57zV9zFpyRur7tvyEVe1Dw24xRRKD6qMCWkn9ehm1QBTMYUzJdhWphTJD1MDuqSm3hTvj8",
  "key23": "o8bUEZGE9DHvP9e69vDsc1jqBBQ2mSXMtjvc3frXiaDNRx3hJF7tDdFAyr8EbapG1cRcR37duWQioLh1JoEfSYX",
  "key24": "3bzJSWccs2ANfHJgStfNDYcNr6C3jMAy19bPPxUjLmccC1dyvSkZjwjrsBCkTcyvi8345WMnf4B9oiCJB3ShsaV9",
  "key25": "5Lzr6du5FZJ6MogUeqJUsReqw1x9fZTV9nCk2HKUHS9Y7Ho3x4MwycMferRMNCnxeXHiGGTpke35apqdYw1zs3ye",
  "key26": "uzVMsZSigqtXEnNA7Z4QW1yuNrbinKHb2Fs2h52s8xZhuz1ypBwGPHUqrVNyPGJuM6GGPv8du4tMKcaDUzRmptk",
  "key27": "3cwM5aywbMfovpegxw3LJSZXKyY6LbSEr8vy9xX37qHiJ99WFSSrusSk1uJ4oJ4EFSrHkmBWDgFRKyyMDBCMWoh",
  "key28": "3UuAvmuibB6cnbQ11eYMoap9U6BV8Kd3TyGJcg5SsQqsMF8EAiFhJRERJqP47uCUggd1JkPQ4XKf4pie1hPVU1VR",
  "key29": "5GMLDtCVJ3EcKUASEUZBm1pNomYdcnYUpFup6mp14ptCoSb1mB7KDuseVBrLRdF1nPsiApQywJ6HmXMCEmSzfdcU",
  "key30": "2HqLU8oS53V2Z8P6cFbJeu1phDLHET7TZRo4J4f7p6rELL3uu2JZXWpinKC6FZ7pD2BEXUBG4CLZPaHxZQaADcjf",
  "key31": "24bprVkrGbiSpQGXbVGzR3JTRRMANkoMTH8JmiDGCb1F9sVYpKp2smm53JTSv8SRaVxNoCqjRDgBgFumbh1kkhqW",
  "key32": "4Mp6ecxTV3XkhESgutu9x2w8hQQYkfEpG25QSEy8jeybQtp9oz58tGHAGg2Sgo7p1uXPuvvDQaW3u7kJS5PMRbCR",
  "key33": "2rt4PN9VLkPxxwPdH8XJGoMfyksWSUDBcwsfnJFW9yLaMCm7ihWJYqu5WQid2aSZhfZnjwFT5jegnJAaw3mGGA9N",
  "key34": "5mL4NVWeHYXKrvis2u1JvaZxMETX1HijpKzkL212vHdXm43TXH8CMy4ziqgVRLvZJkxQMmkGS3LKjJJTSoE7Wtg"
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
