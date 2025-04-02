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
    "353ozWjSfXBGK7sjH5y6xhtB1kSYSfcgoiSXHQjgpsCLbptXvpnjwV3u2nMcaXMrFpmbX6guUvJx6vG6TRxfJJvk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5D2LxR1xbVeVSeu9jHF4iVDSQGzwJcpaKpZDjKKrmQuBNe8Zj8UXSzzRzApxzZiWRqvZgKJ4Y9opAoDMsqNqs6nd",
  "key1": "5GLamzDREFvZCtWT4Jk5smusuS7TKx12M1wtjBcP3oggLMZ4CysLyCuutsjrTD7kgLqLrnLNP4CXomXqY1XCYca1",
  "key2": "5H79rpQdceTr2cJS4qCyD6QCVySZmBfUciyWrkCRydq33of9SmKXtYF9dqPSy4cZd2KdjfJ6tDdNzoESRFZyR5gT",
  "key3": "5X5W9LAsUHzkrG8FzbLqSfcrU9sESCDFSLhTbvg1bJZnWUXLx6FTkiEeE5Wfepi18hCGvJUHd1FFzdSNvzj15JS8",
  "key4": "3BmarYfggGwHo84uUW9D571RE5zUsCtDGoLWNURuE3TY6jv5s3QAPaT9ZYK6Txbfr5hKozH5DH1R3rekrVn7jm3u",
  "key5": "3yyh728YHL8qaqUQL7A5P8VHnJ4NGzRy5yYs5g8512TUBKZxLptdcKXM8XAfYh5C5AANuGcf62a9BciZrzzGSxa4",
  "key6": "19aD2fQyvBCyU5mrjTe2xwNJPyv74rCiN1hjD9D4VkVJtaDeybtj3eks9CHAax2YtRXPLomjYefemdTeprGpx5H",
  "key7": "2Q3wC6En6zZEzVFVyD8dKNtm6LxA6DKuXZp5z5PfTDfLBYFZvHpZwerVSjbrjPjKhahNpfcWgcqGPonnrBDN7tTN",
  "key8": "2UjX3zJj1pq5HMeXEehYF3ogRma1psEgsnUamyqVHhehL5JunkhtFT8qvjrxeibPoNM5rYZ8QsgCM2chtSLDJAEX",
  "key9": "39DUbVTfjHBKVMtdTuTUWSeUAETgzFmjZ98gXNTHL5JVZ1WVJ3wWFsyN2YR6JwMyUEPkiKoVJqL7Kanr95U5DXPb",
  "key10": "5JphaehwSQw3e7R5tfDiiv9JfBiBQuAFReoa2bgqffLqo4UU9BRRRXFSxHtSrKBT2k98C8MAdfhB9f2YrfP9iT63",
  "key11": "USusD2hBJcSc7zV2XGXa8Ccx1v5BmKWcZGNb9t7qZUT7VujzWw3xvRSqsKZ2bGEWZoZkSMHgMgytPp3eAjKANrL",
  "key12": "2Qp1u2SFg9DNA4TTsBA6uuTSs4CDEKAFG9WVPtfARDT78miYpfwboCq1ca3uNjDNewYfmTT8smcdvH3aF7Q5NYe3",
  "key13": "3GbECeXCicF4ryB62ibgSLygSEJvUGcbR9EjNYSWj9PvghLSthSuTAMpDZCnnhL7ASVZcgs1MzyDhuRrrn5NyLMT",
  "key14": "2qB6onvVQue7znYoZBB8JjnEWDMcefHkSAyNqfrvgZM5tSM43umuvNoeiE5Xd8eF1PTsgxC6gBPSHKdSuFxfQJMK",
  "key15": "2F8GaXMTUFib5a2CYhVtQ2xA5wsRYgkKPaXauWorob2S7EKwq7NJAr45fjtvmaixMCxKjfWDuhjmnn9daqyjTQX3",
  "key16": "2NFxFfLSKU3PySstUsh5MG8mkfYQci5XFLkkw1p5mU2YFMnZPhE4E61uhbWFgw5JLBT5mUq9iKobQkrtniqkioyK",
  "key17": "3BjKLGH5UYA9MWGgb3zrNjh37jF5QrkbipQrfb9TogQGUjUVbBypvFSMVMHKPFeQNU8w2nSm46xfHfRWLTwytE8K",
  "key18": "67WA1WsrtC97yx1opJA7bZVSpV96MNRhMWtPoFWgPBT8NUmkAsgzZbx7yKneJMcZjDzH2wUGvMoctDwAm5X6rDrz",
  "key19": "5zFSbkveZxrYjtPdGQuoYoZA54SfX9YsWBsFdXzJyUYC7LqhASSfUuanMHFYwavitHVhzGYDgoaH6DAnxJeQmJBb",
  "key20": "5XjfqdAxgDLABauetpx7pnLdEhEJ7EoTLzWgXFGSeky5XCUZVQjEwqhKo1k9L4i8VW7yh49PbXhRq9kC4KzokVM6",
  "key21": "3zh4qUvvR4TqfqWjTsAAwr7n7J5H2WtihbB7Nf5dd9pBQvqfJ7D2Uucz71K7mNJyA36yAP9G4C2C7RGwjqGEpYKH",
  "key22": "4zJhf8W6b9QBmKh5b2qPMDwAukSwPGddFpeCFAaYSyTpi2BQtr7aipVSZwBHyrG1AYyG3cYcdT6tBJUJsjmgSrWn",
  "key23": "8S5HCBEitRNiD4HQfMecQfyCNGnypLp5rvsigKS348CMzsFogjbUCAf4dfEJciv22BUEifoRfJ7VgRazk5Rjwob",
  "key24": "66QTDszcPeFN6K6oLUBCqjimQo6RwwteLp3XYwGaWtAgdHLegSMVWDPZ4jeYoSfAPzT826vas6bVSM9zLVw542Hu",
  "key25": "4zfPtu8fxqAWpf2WAvdv7KY3guUMeWWickVJS9fxrQDau8Pw8yLdiPmEH3c4kFVnxV6KR3Ez38vX6Qsg3WjUhu77",
  "key26": "3bwJB4HFMMLvsTEHQqhbGmqdkPkYUuWrjFN5z9rVz7X8zxQHy6KQhRbUAMGFDqo4njMZxXiymz4HnfYGWpi594N3",
  "key27": "2HEc6qCNnGare5Q8xEJvqtPdmfyEAgEdgqR6G7nRnhJX9rjM2cn9orPFJh7Ty2CmrMnPHGwkNio6q8AtA53HkGvy",
  "key28": "vLYj45fniiBUfcr6z8Dk2qywjq5rze37Jz6pabQMrRNyP7V9g7dHSUmxiJw5g176DSNLS77Yiv3hA7f2J4aPGeW",
  "key29": "4NFeaPmkaTHCNUnLmvoC1Dk3DCuKpafpG4m6Akm2iv1fniJFMNoDo4MsM7pv1xCKB4JVeajkNDX9mnFWqcvYMtJG",
  "key30": "2YeikFMhuBm8a8AYixZgdCFpEPuWH9PFkqf5zVxMhgU8XvML7EGBP6yapJnZPcrwSiFmzfZcdNSTPLtXw1JXmvwC",
  "key31": "4H5gGaib6gE2UnafpTudroYsKjov3DxVtSL4AV75yDCcZSyVUkzv6isxa9sLCSYJ2HKEWpXyRiYagJ1E6t3yH1ak",
  "key32": "L8TrUN9BzduU9dDeYJVbk6zPPfNj1g7QJWXbPHWmZUQnJtLUojsTVogUy9ue4MuAjkRLr7DvZRdF5vDccAtDvbJ",
  "key33": "3FeZCMic19HLmzJHY2BNcA8dtTzng4GPoUtCz532B2VY4udEoG35YDLc66PevUUF5C7NJZdi7iDEYaTqDACgo3wW",
  "key34": "3mo7A77KieemgPuExnGMpaAhp5VaXtqcftTgPLo1y7F5vjuZuAQkWNtiRuHkgqikEHYHNkrQuDgUjwhV5zU6VJCT",
  "key35": "4xYFSpg6gteZuxDFkKRsmJaBdt7VmusXwoRmBXtkdyJJzfttAFYdyLqkcMiaRHeWhpp5NnnSi3Cawk3UtVciFDM6",
  "key36": "4RaT5HZvEWZvj7XqHrpk9k3bejVhCetbkfy5aZ1SbDBuQmPdMWdmgQkkV3dTsqxEd9GKptGh8AFdcsKbLPGXcZmm",
  "key37": "4UzjCT24ZPPB3CHbWZtwD6RVEezckGtssBWvjdFnAq93d8MRrig8ScVbrPokADeAVwqtQMAwVnjUHb9XGJgaj2PK"
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
