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
    "eN9CRiG3J89R595LncCy41b2oTM2rXkh6L2cVd7kmGFifaZWNTt9TEFt7T4CT2JEyRQtJkN97o7YvB97WN7RP2e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oW5keZidLLoGzdZaNZf4tjutk1ZTAD22FntVQ878QJyPWSrhcAFoyhogDMLpAGME8M74vXh4TzGnnXH79JM6d7D",
  "key1": "4LgCcAuW7JySACP6Ytn7azZPN5RjcPDXvjQqqcHnZ9A7Cn2wmWLkCqf4skqKiaVKiBoz2ZXtVfATt4VvR4Va9xcf",
  "key2": "2zekQuCLtQpW8Xd5e7jL2asZpKCHaDxd2yTxftEVCxXgfmmjX37m4a3ZiFtSSjdD9qDatRSBpEAUQKkZRLV3cAsv",
  "key3": "5Vqf1qPjfyzugkavk7bxwWBw22e6CJmeCon2tPGtirdHVn5yuDhjJa83RydkzQNkG8tD5vEXBoQSgQupMQdGyQCR",
  "key4": "5MbGFVGA6ahvcE9c4GWb5DTmxVfmvt3N5XsBSsmW27syaq2jQ58mRkxKsS71tnjzBCipYtXcHAip8kjJop7BoqYj",
  "key5": "PdMANAgiA3bEdLa3jkpjZLMcj1UxwMCjZL3sWoTocXsu9RJu7yP12hQ2KkSxXcjijYUSrWa1v2kJhWrfk4jnD22",
  "key6": "5CobgWTis4VtYboGpD3HLsWDsMeVG16kD5dNRxAj7gNNmCNBZxfgznG89RgvSqJnkPj9qgtjW2UvVYoJMK9j1SVU",
  "key7": "4YbeQExwKwQg4A2jUo5XEAbDiGnxHWLZn6QK6NNLrcPRWFL6ydf6hLs1dg8AQJ6vNZJrsytbGFnjbDckRKhLAPCE",
  "key8": "2JvvzFCtuzcTh1sZZ46KeE6zuyCn32Jz5n3iN14LxiogBmLDuHswVt55QWibovpYL12eiL2gw5aAcGmh4BxqSG6R",
  "key9": "LWocZXuAwA2LFH538LMAboyvkrW8RNv7L1kqfMWjq8DJQY2jKYtg2jdr9RXiCwAL2vLB35QUCjqqMBF593c5t5F",
  "key10": "2M34CmCh3SCdACHKAdHMsCrna8yMaYh7NFHBGmteudRAgrmhEqgYBLemavanGs2PpK4Q1taYtSnFfKPkf77ooEZj",
  "key11": "2aksEgoMyY6L3HVBj7wioCNXrNtXzf6EJMGPRN6B3q54iYu1bCRJbMWx8PYvQGFt49iR4MAcLHxJ4H48sGyd3myJ",
  "key12": "3vTsw3RtKvJyA1CeETryUFrb1MpdcVUriR3YrfMWWi8T53PCGbgCPVpsZqN9A1HAtYqP3RLKuXbKzeWbiZHLqBEe",
  "key13": "4NiwWEXXNn4J8wXvpThbHTUEKHDADRfbwkoTiAHzhkctsvMYZAk46t9QM8vAW8Wye5hmaKeL2bB54rwh2VDvt6Ua",
  "key14": "3kNCPGGQyuL5XB5aBzvFxjvo2iuA66Qzo7Ubrs5Fa7Yfj669AcnVdRffHgWsSSZvH7efZeo3TrvzfTvzqqr1Vxu4",
  "key15": "dDUfqKVkLFNWoRjXDLr39RwtJ7W9AB47oLL6oYhsxDKaiHY8aDHtFPhaPtp9fLM7PSB6BZtf3ijSgi9yX9hUXQz",
  "key16": "3dHcuv3phZ553JsVFMxPhn1nq6WUareoXwirU7XEUXKZY1zJLVM7VWngQ5ybXUvMvSARdseAgBPV8MrA3Z2PZxPd",
  "key17": "2eovVfHM3bdpkNqoiYeSDCmwNzqcvmSvhqhdsqXahjhkR9kv5jwuqtobsgyzZSY8Ts9tXqjsLQJNYjFVUYG2sUMU",
  "key18": "2nLRvU3FJrfeP8r9LDqgJeU9bnmPJX6cMH9AGx9JZrhstMeF1di4thbgk5fEJkpPFghaoaS3yNxtXz6ZWfcG3Ktw",
  "key19": "2HvGnBA4xhj1ZV9yTTMcBccaxCsxqwx1BYFPgmABGaEx9tEepixvrwanCoHtyUYZ34N8ptvho3RXFfCUBweDwH9t",
  "key20": "4PriELZmAxkU7uXokuzTpBuqABwSWNahK91UCnjpXC4itE6Wdh41jUBmEMvWM2z3c471tAhVDQ8Qw33hAatRzwh3",
  "key21": "2A7Nw3TPo8kFUwBp7iNcAGfZM4eysSKdswidAtRQiNMzhTukcw3kVRwoY6TJp13Gb48HZPDksfGpVYNvuVAVRsj6",
  "key22": "3A5MFAfDhAuCXWnfw7BiTQwsqjXp64QUiZSMUGAL4X2p5HQogWhNcsFLYHp1rY8bNx1t4sSpEQ6eMBAysay75rds",
  "key23": "59GHTZBKs7gRcohzFiYvNFE3i3TRwFVhFPzr1DCsbGhE5MuynC38ztspaXHUGpW6RWUsYxo4ME3UALo9Wbfk4TmD",
  "key24": "4gMuMrtd6RywkZ4DcYACZy5wdaHZDryrdNVpsHc9svj1L6NibhkQMJx3jCjtHLuzf52Yt1LDqK5rjUErM4poHYU7",
  "key25": "L2LYYkc9vuE9ryKURpCpxzjzTRfLeipRPZZAWRPeaaWu25JM8WAADsQtqMm8cG1AnEJiQr7H2Ur2bdTNo5zD9mT",
  "key26": "4V32Vf5vHk8rHRpuTkd1oLJUZ8wQEKTidmBwegmw3t5SX8MAF7pGTWuZoyYPCfVFcEx42tCbqc5aYSBtcsTsuZ3H",
  "key27": "4tp5HRajwqhyFPmGHT16crcKnQRh7fyBj7FLvymWo7QGpkZ2B3uTiGuCVPyouX63GFGZFXJL4Pz81wGUaJSzGWKD",
  "key28": "2ekEU7NJF6gradAc94ZfjskBy6RFXaKyKmaBS3vTWvcKwNAPTmVSTiaQRzwke2sXZ2abpniUbnK8ShWTMGi2Ah1v",
  "key29": "42edUSLCg9o2PHzXZs3ToXZ4nLT2ZvBakEarjK1NWadJGgeHFzYLDKzLJHc1uh1odpGvxSUftfUumDnzw4SMQTio",
  "key30": "L1B3kmGPESNeWektQJvwpiZ1NvX7Hvou3ttv648uDd9pFFCPrN5SGPopHZqxTgNidstB32Nr4p85Dacc5eEed9q",
  "key31": "5SU5dHDomt1WH3VSEopcyVfFbGeq6uJPTc3PqxVcMYq8AE3PVkJsWYeepBbofUNLTCJy5cX8W3sQDy1S2YJZBkQy",
  "key32": "2RVHRk9KUgfE2gUZPGpiTQaNokMebsPW93GWFGVW6kbQes9RAK4AMarfEgNxmRLhtJcmwDjC48ymfjZ4ouqN7E6L",
  "key33": "4sG96x7ncUaC9bDikkuM2hLQEG81oUK4eRZBm93pHDjAGiW1fXDcbjdyZHjFtDQEGaFeHEYdMy5ioXfVRP4KX3uZ",
  "key34": "2MwXqcerQgLQh7crG3SANVHNi6GZ8n8XWkTXx9raQtSSv6dng6p1hHw4b4pGXvaVPFCzWaeKeBkt32C68PyJJ7pi",
  "key35": "41GuYMoqyJqJKfAqqBv2AyfDDFxSoWNECQqLXyvtabqXXq8v722usttjfqhPobjWYcVwJCxqnmJ181Wh5ZWeuGBD",
  "key36": "5aTNqxj9eqMpCEDNcytMNruXAPzbqzcNTPMzEt6wKkGGitEobd85hoejXhsJvxcjoLMR5BrZC7dsh896PG2k6YeD",
  "key37": "W5WGzMg5EVmweuUZ2tKcJ1jxXqHLnRnbb9eoAUTMiu7Q2CFTTKfL9aSFjTAnkiR7FqGRP5b1WSCT8kqm4Wem1R1",
  "key38": "5VGfEesb8Az4Pvh6ym4Hum1xZHYjZ4i2h21VNws9BQUAz6Q1CkPohpEeoQJEsoeUaJXxff6WCwVj1aCmMUiqXGE9",
  "key39": "23WmJHspta1sBJLb9TKTELAPNvFQe91bLoHsgti1vqCF5KapfL4WJkN8CCzktsjurPfre7UapTZ7Es5vmJgmbuTj",
  "key40": "5hDrCvkEDeJgrVm9zdotvqy2JaksV5mvD2RetwExShHejHSx8wuj4w9Wm3DPYMXeMbjp4jwYqVfd4JHiQwo9ZXSx",
  "key41": "2uzoMDeb919T1Eqg6HGiEc1NiRRFcrq5aC8bCWk5L2YmJ4bRPnpZFhkrMrTJ2SxvfXHRPsgXKa4LVXVsGyjTFZYD"
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
