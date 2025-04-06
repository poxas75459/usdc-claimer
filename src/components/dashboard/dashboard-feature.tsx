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
    "2sfn3gMiJ3puYzqw2uLwYSAmM89jM7jReyscdaMoeH1z2CN2onN2McrA79d5cRqFBvwvyM7CXBWHgBcJEHH4Cdxs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CFZwGxWBqg6i4nPXGsdpUP32UFxmcFhQpWusPyT81BcL9nZMYADWSekaE96L3F6NaoS2C2dHVGJpCvyP4YFtAu3",
  "key1": "279rTrhXoofpGiJXAoB2x6cs1DDKiYCBjE8tQBgHUW6sdRefi9XcdvPs8yHy6pYbg6QE1dDo2CVdhx97KByWUsqZ",
  "key2": "3Unj8f3zymSWC3MVHmdPvAFEcjYMMtHWfiQNZfhphfoT1kPecE9FTX4mCgPm4ZX8JXbHkyQotqY2MuH5BddjyYmr",
  "key3": "2WLTYYqGfsqmEudHDqHZVeY8RLJXftNQLCzZiDtdeE6uFAUtgcgxBMWUs8AyBWF9aQRUTDTwMpShCZpPQBpwWbCx",
  "key4": "5HM9P41p3Moa6Qx3BTprX6cGSRb3nwW18cVZ2tDPJt7BPUjGuDVaa7iBA67iKGhTKMsvHbibWVqUJF7Wu32kmpz",
  "key5": "2AjfbanGi99Pe9BXao8KWnwHFvSNv8TQP4qtkEcD45N2wi612TNjQrV81hEMZiythrN3t5dj4nmQb4HoPnecWF2o",
  "key6": "57vCMzx5yaa27PzaW1x5qGRaQC1U2yrJv7H3pbVYUnWL5XQnaHdpx9TSo3skou4ZgRqBerYp93siaFWmHFN2Gfaa",
  "key7": "3YWoCUwbr1K4meWdqA56VcTVkQcJSgm3GHki4Pfni1CfCYp56DbWGy3WcBQXgtye4cEtqsgReuhW655CFNnu8mAt",
  "key8": "pnmJhN3HFMmoo4FwK7Q97cSyvxH98o1rjvdYnAPAiL2hh5Y3hFEJKoqSmJYsaHR5t9V4Eihcx46C95uC4uvUSx9",
  "key9": "4rCgktAoiqFo5RRXJvJupf2to673eWcNMAgojZiaZYk4ad2zDqrD48BnNhcWPaDtvWVp9GZDTpCBJDh8u5PsP85Z",
  "key10": "ebcT8kwDztifMW9HndMLQPAuKKq8LcY64GRtaoaK4kWMMSvE3mz7qRqhD5zA5YmkN2PDx5frRJ9saVVzKedRF7R",
  "key11": "2BC18jCDaeQwtTA4PF1LAb1HiixVRxikNjdgsNex1ZN5HMcEimW9PjbZUg1JTU46dA6GvogL4JBKTBeUNwXTZLnS",
  "key12": "4yWKqSQ9xiDqHA1kNsU5ypsG1Sq6T5RnZhMvtCbzuaaDentcDLBnYBh9NXcJqjfcnGeH9Y2akp6Gvw8H4AadTXpC",
  "key13": "64dvXZGeahf2zE5wFUy3U7oKNx27SG6dxVd8RDTz9LLDjsBv7DJvUdb3bxN8PK2Gu8zdde6c4qFZ3N2MSmYKUB4B",
  "key14": "4QnAQrdrdCQLEUe26gvSzxfgoHqmoY1kX4jG1gpy6HdLUWEG26EXe7YVCbd295ipuwmX8Gswr4WqcwbuK3Uww529",
  "key15": "3JCdQZuCJ5HL1eZ5y6ZH6d4GdLxcevS8LGafu9bHmcuwQciiro2CyTuwqSvVdYQGLLabdNGx85SPCEE8YXtKbTiu",
  "key16": "gHgWEKRqn9w6ScK645fPK8MxdMXf2cpu5cHi9QreoJRQtfnLTAjMfWRRwfAkKPuy6RC9ddahjb53qoD27HeJ28k",
  "key17": "5t7cEKm2pVjcootptUNKypkxPJg7drYasCXWxuTpE4oqWs2WqqvcC7WW4r7GBLBJrpZ7qLb2QFY73UKrvFok7efQ",
  "key18": "j1bLGuRVfxxqo45NUox8w6PQxp4CMkCMFe1yfGS4hXuqnLwCxoWFZnusXsQ2VfnPAkUuECHAKt2LW2tz9pZYj9d",
  "key19": "koWV6g4KuvQQuDBYNdpiZ84THfrzHn8VjwS8z2K56KaaQpZ6BHZMYygREenRydLV3r9SCodG2tbFoAQ9tVfVCyr",
  "key20": "2pU3XBmjYdefbscSHYw2wKjtLnCqKt2GxXihDPUmutCCx9at1K7heWcHcHDGdKHwh7XRerppK9LopeF57b22gfhb",
  "key21": "4MHmuErqxn3yWtbU24dUaa2MsX52o82aqUZ6EwrnXcKLoq1j55L7yyJrCycRgWUqvtjiwBCJTLNDSTCiXsX3kCpC",
  "key22": "29mbHenDVPM9oZzk8PjtUo6ZXBzzvFa6MQKsHN2tcaGUvn8ufyn1QKswV6C9Eo1EpVeAQD9ei1kh7TAWb6B6KWTA",
  "key23": "2CPkZ9UGGF2VqJjFby9dihFPU9f6RcTEhiFdKctSL62bmcKw2vTCAUwbHUUqCHzhUcrFiG2W23zQBbH4hYMPVVmX",
  "key24": "smwrN32TWaew5J4czco3EakiwDHBZ2WTN6Rg6zMoLmWqqPTg536Z4qvmfPRrZowKVGppK7sJ26HifSeVR3R68Lm",
  "key25": "NR6o92Ccfoi1TATukW2ZwV4A8QpjS4dZ4Gb6GS1tCnR3atxp7NpXQpSAqSVvXmMTofioJw8FuU2jXkzGrTac5Wr",
  "key26": "2qvmJJKUwtVG7ExmNR4N8QzFvpX3YmJMtsmZBGoHzNuLwDBPJ5fqdsixcoZSTcbg48tjY3Yvx7Aycdc1QqnEVw5W",
  "key27": "DQc6QBC74uFxRrjJX39ji9ddnTfKnfnQWkSGFakfEUNc7m9bvHqph6KgCjPjrPRYx8Z3mNEQp3D3prbc6yucXd1",
  "key28": "5Le9iDXyUeyV57CLDnmBNfmyYLtaXP27Q9cpfxpGtb4JFEwzSgmx2ZVfvEq1azJjQR35TD73cM7y7oitxrKTX2m4",
  "key29": "4WSVAjgqjVaRgoGuUV7ygQAgUcWRX2iNCzWQik87ST2zgeSow66uNGAK8SLEhYYNrc3ZJWyvzw5fHqoQvu5LAvSL",
  "key30": "2qqE3rXcMButtK9BTxMcT1KxrDaHDRZgyHqXBULm3txNn1nGxhykCradgowodjmxePQ9gGQd2k8sFMvmGqPWpQGr",
  "key31": "5mpsB9j2QUefuqMh5YdouZXgr8KStgKpZs1mWRBWYAFqMZf4JGC5oTa5iSM3qQvG74vaWaZv7EMi6bY1HLWvTx9A",
  "key32": "2CMMUXqWAprcQGmmD2yhWCLTsx4YTh7BEZ1ULbfYyH8eJHVE9VkrGP6s4Sc47QaT6K7jyYHW9V6od619WAYJuDYV",
  "key33": "3i5ee17Ji6RmdRoDuCForEnXLZGWt6B8Au4xS5PedCgHF8yhq88jKCW4pW7TKFWi6qNCcoz4K7zPhHcvnomuD7JJ",
  "key34": "3rKrvzPziFKy886iMb1MXc1Gd4moiTcp6dxvsLmSRDJtZ9yjUinqkNMFFPvVfnEDXiLKGWXeU5fzYG3roboX5ebg"
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
