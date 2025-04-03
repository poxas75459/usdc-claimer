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
    "5xjma4Kn1HKVhNYW2oAhfrsZmiaKqrVVmGY2EHy8XDTMSxwUp6xjV6jEzc2T1smVzMAPPTnU3pNj8WdPMtr9DWrW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tHk1JqWMzHGe8J6JU2uoonB2qsWFJPUazLqcs2LpKKBnXhU88z8re8K4xsSHsJ421ADmh7Hni4EXufrPHk9CvML",
  "key1": "f267focgn6zkVJEq4XVmrsNTDTjRPxBVfBaHudA7ryRvXLqezHVjZvuL7JG12jsK9Dve3YQ5swzxnjgWJT8q5aV",
  "key2": "7s6gPqgGzQLSDD7fvs4Y9mGucfGXSiDFmA4Px16aYUTRNjUcVu56x19ca43yDfFhPu5nrfu8tAGnbK8s8ua4Gsp",
  "key3": "4RYjZZWivQCUqheMwhQTRfbiSdGGmfbBuKdJ362DUxWLKXb2iQggceyFTT7UA4bBtSLq9REFAT8JZCCsiFibqfe4",
  "key4": "BThBVCqjkqbQkGEQsenJjMqYW9ytPbcMHPxhWDX8fFJk35LzCRtm7WioVKr3hvzbALPxkazPKAJx24cNtZm6EAs",
  "key5": "5X6zJ6NcEhynRuqtMZUuxodv2qiU47MqKJpJMDjdtddKkZ1sS9zJmrYRcBbGchZZFF2WZmkfxJZZoFCRs7kJgr21",
  "key6": "3FAQTc6RTSP5CgAi2ynn8mSL2171oipdQxLZMbf2c1JAd8co84Tc3HfWp99HXYNsKAAGvWUwrQpdWtnfhCzF2KNp",
  "key7": "6544LNL59BtKZ28PKgFWWhuvzdXJdiSfc3hNxeWpsxAoVGMyJ233UwVu4dgqKVTB3vhUbER2rGHLgnFWmzXiuuPZ",
  "key8": "3Wxs1DWtib7ygMK7x6Rjps9siFCZfE3hvmJ33pPcKXhXLd64tPJa1Q452kps2KJEDZHZubBYaLenQAaPdKhynmzK",
  "key9": "3W75C2ZrUkfhDSShDBsBHiGkbuZShziaJJaTmEvZtjbJr5tSRr127HbvvqL8pjyTzjEVJCdi1zbP2r6ZJmPmYrUC",
  "key10": "448ME4sag4KxM34VD6rWhviYVypqa4mUf8YLDjMZ8Wd58rxR4R8beWcuPYFTBRzAynQSTPwtF13rBXyTBVDiBfV8",
  "key11": "2f8ugL6kFgd4FzoAamE8UJ4A1mR5Vpr4FduQsz3ATv5mtLncm6ZEMQQ4S68zENBZNYLL6BP2o8YKETFMpCSYE9sq",
  "key12": "5MHV4xWvE2RwxQGQerqmetG6shJkfhtarC4aemh6zqUzoimbXXDcD4g4p7UK1NbwiDcKPQxTHG95scdU7Uor2vRf",
  "key13": "4hAddTsJeNw46jqfUMEWaePhakYnxnQjsK3GersscdFq9Q2Ec4adfUBHSUzEtaUN89me12ovfyNz5cA2gtGA4XMK",
  "key14": "4DTyfHXGHfc83YxdBU5JfRThEMQnNGN1RVQD14TMcRsLaKRoPRJAFFLDh1LS9bubpQZYK4KAFySsaNFcxsXsfQGB",
  "key15": "nNpfLuXjjtxwsBv3wp9SWQjaT2EYjWC7FbqmnEYH2GRSV6fMj5HECihohKWecYKsmvyu9DofPrbCE42feF1R8bR",
  "key16": "46sRuUiCTNaF2tnNSXMhZoNGcoWc7wJH1tdjPaibnSH9bzNBnnD4TsK5g857fxrRUMseyoQRwLB2ysB1nEB3D4Sn",
  "key17": "5TBB7hqh2QdXkzAec4EEMsgxcEgYH3ZMCGivbQw6PMJA2deo4uujmkkHDGCHNKwd1rhQpK2jXBAStgoBVfpAHFSs",
  "key18": "5xE4vbaSzfSJZqpRryz8DgwdSF6Q4vGpfMpFk6J12iFNHH8HgiBVzT69gDx8XCdVrst6a7X4KGnZWY9cBA8tLPUu",
  "key19": "3hGm2yPUdQtNdNX47XGjFkGsszmkqUFt75kN73D7PEsrd433q8cH8j3ke5dUsxsENpBrgKdu4UG5JSJkXzFcmQuv",
  "key20": "4FU2zSoR7TSdHRhRahHKgb7acUCipogST1QdiV12FSxWwN3CEdk2Nxp64mhVEuUceURj4c5M5wQTTcwYFVYuEZer",
  "key21": "2hivzM2MZ8DrBUqsnNATm6rYkSLw2FBCiFpxmZphLF1ABB5ySH6nrsTeK1n1aSiTNo8ubD18YW9VoAqTuHDfxKmz",
  "key22": "4miLNZFcb4rGy7pV3TR4Dk3hW31LQky1m5sZYyom5UJU6qHFPbUU3t1BmJQ3KLUEt5mSWsfiyGtwCmYhrGsR1xwc",
  "key23": "2R4drchNN6MPYVciXUauEoC7Q9GCoS1b8GGRHz94g3c31vdmKCu5ysgcNP1sH2fifqSnGZfAEVdnUbsTpkwM5Bmy",
  "key24": "9nrrTUtBVeKEbWUujRWpLgA2FVnnTTwDgEfvn78YnJ8dVCThXm8pKLWFvPMDhxcv2C58zKsWqHmxXmgXKtH9NQt",
  "key25": "5FjPoLUT8gtn7WeqfRXVC8a8m7c4aNhiRiBz3pkLz4QK6PupFd6MmnFGEiNZbfYgPXm8fVNCYSnfmykpfZdfJMti",
  "key26": "4pFg3gmyQ9W9ZSmSoEtr1Fz2AwqjsktrYRmDcwcMcTe5Lh3BJtkiMeTNp7iHij7ZdCpWbYAAeCDLvCgP9vtGxjrX",
  "key27": "3XpdwyFmikwsu7errq4p8GXdqh1PDCF2RbPnEstnvTZSfmQagN7WbYowpUHD5XJcGdvr6LZeEH5Z2TQ4VKVBWCdv",
  "key28": "31NZRK5HUeNej72ET5Nhp7fqtBJdnkpsmGQmGXNaZJdZ4Kwy4zW8AREYm7w5dAJnLizLPV9yqUzsRNKZNCzwFfde",
  "key29": "WwBBXBDAx7CaGumeGpuHanphEfEy9o6N4kjprHZBQjCvD9R2E2erQuNUK5XAjZzAXQkukmWi2QaLCG79LgWBJdv",
  "key30": "5bJyAWSRT78HmFmsp2QafYVsqNEF69mssgQeqBDEo16TKS8zrMZ1ceWR6KXbDWtvw9PT76kVAHtakT8f8psyb3ub",
  "key31": "5qsR1nxUo1L77AkNDVxtTAG88ZsDLZsrGz2ZpvnAYSQNWwdWjFUzzb7NTjaUfMEPa5tPHVjVT1buEmjJMjGmrC8J",
  "key32": "2Q3fAHLUdgomijpnNMo8vFNPAQChTZG7yJgDCNNSdm6sgnyUxiLFA74k5R4N1TguKSBwwhgnP5khnxrBhdcnR4Pi",
  "key33": "cozsH6aoFGCmttBB9TSsmdVHtUGpMWK5Q7aatM3ubGpBqgjvETnnoQZoxKNcuUpqai5cVQYQdrwQQkrbUdEMFf5",
  "key34": "4vsS6MwCfesMHMywenKJJUUFFGTwvdXG3tN1cCG9mfTPycQHWhHM6shA3n9WYhkDnza1iS7e1g4QTjQxmt531FAS",
  "key35": "5kFK37UT8bMDmWAuYTbti7SCkY7kduLwmgKGRLCWrQed3KfUkHcNdT8eed2TwfD2Y5yGM7pMeiYiGfoQJ7sEb38L",
  "key36": "yyw61DD5ycYVP7RXn5PvxwjiwxZD3bzzaoB3Ls7PfBzpwf8m2J13GWsdzxaotPMGXQsx3fm7g76p8ke6Vj3BaYH",
  "key37": "3tfUtfTEG5gFoujgzaza3xFNf99j2U6pYgdrqBgR4mz7DSyfaiZBTb3oapypyim8GyBf6JmPWGmwnpG5vLjuEcpp"
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
