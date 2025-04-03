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
    "4hqQrVGBBbXxeGL6GJg7fMMbhEwDt5vumPfZcM3Ysi22cS3pq6Qi5CeZTTwUECpjevHFvCiZURLPymQRsiWNNxBc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fqxWhinxX8uyiqzRjF8mTQuf4YaQ9hUNQeSdvwVKuhEoxNFaEmURUFMc9TAGAtEpj819VHmPfDE6UBaBcyBY6wD",
  "key1": "5gWLLPQWoVbRrqRRk3FXaEaW33jDgj8M7JVK1HwM6m8paLiyNSvgs4c8ocFTg6KZ5jTqKGmUKP9FEEkbZsCoSH2y",
  "key2": "bt33h5vVnozLpahecjJB1qaochxQwws7faXpYqVAZXiHy7kYMUUtVnxg7iNEA6Wfn8WfLuhjQ8ifPgfRcw2EZHn",
  "key3": "2y3LHjBFGmrXt3nTGMvE5BRrGJTxpLNC83MARFKt2ythR6eLdtz82H5hf9NpmM5APfWvmndq6MsgR4c9W1CmmpkL",
  "key4": "3u1t4mPm5zTfgNAhhURCA3n1ySi2R9cBMdbKxRuZLSLPmdMPkgUVSZTHr4FY56mwT6PteK5QvugHBSJXrjqNTFqT",
  "key5": "3P4uPwW6wqD5kDJpE4PG8ue1NrHaxfgN2yVSteyc15y5XxPGQSv1wmrUWCAkdeq9wpSCeWZMYHUJyULYfNFLvKy",
  "key6": "3oZSmWsbZmQKjefX146xkrVuQNtQCLhqNV4GqdYNAF65Yv5XjBBeNFCvAxGvbPALahXW2Y3tisnjECC7eKNLKV4f",
  "key7": "3da4RZjoMsriXrJa6ctinefxYC9aKnbBzhRfniBeW345VAJqjVqME4yVgqnWbjgF8g8qFV46XNP9QQZC7sdpe813",
  "key8": "5rnCM9RGKb8oT6WdyS3dyH9tLuBzieob962pNxzWcFYQXnW9t7fMbvNkXDv7xeZZSDMu7Bo2RhXvExdxmnQjCcMU",
  "key9": "3kTxPsdK9bCmZjvkjQJiRkFvH6oAqvdsvh5Q55MtFLD1vTjbqmzdAho6qB3gQQf5AnyXjTqHDrM9oSYdkkv6AgH",
  "key10": "2mCWgxFnuLkdW3o9uEWnqUuGmb8Dnf7VKETK1rVhvR7Q9xobvyrGwWePNjhSP1jv6CozkR9j7LXFYYczjEHPXJ4m",
  "key11": "1MzUM52MhstnuLCJ3UV9FHcU6qRftc3hfjYjhbzKDuzJdXE3dMv3WmW2yNHGQGvadYhGSAhgbqRWkMrpuLipdtW",
  "key12": "4EomUejp1gi7xYe6HZRMs2w6Wy8gfujMn25hmGEB5H7cDXgyoj7jjSKVVFeW9BdqX6QgLBF1fwrTDDHowishLX3f",
  "key13": "56PvJyxoxBM1zfimZp6Z9X7cfLr2XDgPSCkoFy69JMDo1LtzfTRrX6T5icy3j99Tsp5WaFbyNLF5EwQhJcSRZcf5",
  "key14": "3Q6VvRvpd2qEPkcBPCMJm8AtQ5YDcStsFduUpYwTqJZgTKRkGNpdrfzNnyWt885JYjmNuyJDJtdrSVSQmfA82V81",
  "key15": "3cih39XBeVfTdj8hET9gj85zMoqNfjqRPYUCXMWssrCA33xY7DrSBGpqDVzV8Me1scNH1p1FtoYEHzASP8EyQhmC",
  "key16": "e289wxSzd9nxMJM61BJpqQQ9HVzGwtJLRVDDwyM8Nt7TosdFDqkLHKdACPfVcvyCYEg2UV1VpxNve8751L15UoA",
  "key17": "suSTLoSvMKtw3kmj8XXGq7s8Uq8y1ugSLcM5hnqNABiN3PFaSkc8nBwo1RHSWdgBFMV8uBQ73ydqjHRQRBTHrBU",
  "key18": "JuCMX2QgKYHo1U2LerUMYjL84eyJuNGBpnfueFSQkJFmZ6FYaJEWAuogBDhLiaQfUJn2LYtn91fpWWXwa8hdptR",
  "key19": "5Ycp2mhsoUbVUfig69AaKJvFSYipvXose7r8ENTbV8xZ5oibVNomnsvWpbp51w5ojYPrZ7GZum88GJXckfXiMdkj",
  "key20": "5FqrBZeVH7EtTAWJUyLV8t5X5WjBKZnAFdbBX7D7TP6Z7UHxvB71auRbAa6eCvRtMsjDauSfKQhq1U9SKMND9xkv",
  "key21": "4EX6XG2mwaSycWPFNsLojcP3rSoNUgUcU7sQqroSUrAacTFUp5yn9mf58KMJNKAGhsVHou73SVnrPrDW4GYj3DEw",
  "key22": "4kvQ35rG5xVwCECsHJHBxvMXSwA2QDFjYkXAXMS5rsu3tEmU7MGLKJdo4u5NXtsRweKBDwbAhA961tJZnC3FQucF",
  "key23": "3yPP9bjnyUjin1fkPtuqDBoFd2xK37GD1GnCQLVM6Ar7eitjxpeCV8a4jChALYacihH8fPBQe7AkhpoGShRzoJP3",
  "key24": "4RPYtTGmjGWBQ2vPTgA3a2kRFBUpiT8PLSijeQyZZTZGv2vJ28m2rjQjaeGZh3fg7fmXNkoJ55UhqdzU38i339vR",
  "key25": "5eDdei1QEPLstLxNYyN56ZC7JS979qxvG3N29ppMZXwjQUQz6V6jhFCbSqXW6jWjcMNEXjtf4mZfC9H3B9Q7caJG",
  "key26": "2PZYQQiarYu9vdUkz9m2N4kM2pjxAnismMsv6VD4GiDa2WhmmsMB3smVTC5SDkkQpKxkKtJP8zApM4eC94XXiD87",
  "key27": "28dgWbB68GtgTxL9xacvuL6moaBCAsr8sHK9gnpg2i9edkDMxJGrNN5PjMog63qxdN5EmejjdzZ5nZf773sNiSAw",
  "key28": "4EFqxVqD73ha3TPh9nZ3o9Me1Y91jbAaRVArWYKFFAwCUrVbDtKipZNRnxoWL6G7PRmZMH6Yyd1DTEFhMjCxKzRL",
  "key29": "4CVg2C7YNGe7rRLkPw8m4krJFyEvonWtdVFaWYvnGQP8Ruh56UYTAWV8qDbjNaHFQk38id8PoCPQUg9EZZ4LamAn",
  "key30": "S6MBNJoXjJnTKCSGHsS47coEZds615LM2XxZSgLWYUvN9vTPZMeRSLAtufFuMK99A87Pqtu1tDgogKQaQieHMBn",
  "key31": "3qrCUNfVvtvsKWQ1VWDAKCW4rBaeRbfwh6MhFWbmyL5ksxGGe1cUatrjPF9RZkavsGHj26ADGh8DDfUCMcMFSq1q",
  "key32": "EUFN1dePjc3NiJL189DwZ2ZQ7iBZvW5ns5ta4mFiF7gaCVpodp21DJD1YTiV81rvEZ28ZACQ38LLBb6Uss64F7Y",
  "key33": "3J2yZnda6VtGevBgFAWzPCWzuXd8Nu7esX4jSgvhPGYid6ancQZmj5AZShpLKMNxP3ce1rwff6t7B4cJWZXa9J8L",
  "key34": "udhJEQ8WTakug31wqxvF943SPiFLvxUwXDZAukdP2XaeDz8EmQtYACpUZ5wpFDveLumaspnKuvqpNBzpcZfR4LC",
  "key35": "AiCp7wZyjUeYS4gLLHemznJvmk5RVkPB7cVPwMFYvX9zRiL9hP5S7qZFCu1L3rm77wkoMzjoD4eVpywh55QRfeq",
  "key36": "4S6C9T33QrvJZkgL3KcqHqVNubVjwTs6C51NptjS1eAR42EEw5jXpJ3YMRY3m4K8UdwzQ7NiXPnJTe3a1VPXcWe4",
  "key37": "5V6Ta3zhuTL8sRRSt17sVSi5KUgsTqLufxyxaDsa86wze4aMjP5eDDqP6YFR4MjDfd1QzoJ8j3JX18W3BBsZP38J",
  "key38": "3AFG1pwfr5yRt5fzQhivA5GWKW22CJz8SMujd9Y27UM8Q1NSaSkcgNzKsrnPJ2oyykStPFnQaRK7EPj9xVvueAzp",
  "key39": "2ixhw4VhhyDo4xghpnScajqmMYuwibfDt6Tv7hKN2HkjHursMPvPtTWD17of9tMYJ7AWnF4LvwNVLBBvB6MBYQL9",
  "key40": "3cNyTS9vsoaD4QamXF4HiwUcfwTF27sV1p8GgDmGkBymaJ85aasorL68DqTyDwxJcGLMs8Yge7a9DBxoSFaFaa6s",
  "key41": "2CCee8X9o5QAkhxnkqXgMLCLKLCgHhhr3mMjmHXSBPXRgWirgKrkYzvbUSBSXwqodXZmysZgRfDwuKNwJwpKjB7c",
  "key42": "3YV11wsCPAtuyxiLDM1K5H6S4wRdd1p8HZTF6w89G39iAjSTae9JqBSGa84CknqarwCut1jYZYf77igrTYDSLXSA",
  "key43": "5zkcSPcFZdegor2o9NyDr5FH3sUm3ZEwQoud6tL4LAy7TVCQHwzKTU3BSAL66AnpSHL4ro1MDCjhPd8y73Z6GHVv",
  "key44": "2XvhArMXDHJr1ZwbYzie3cd6UwB54Q8wrLS3KA7hG5fdcQPWmoYeb3Bd4PdUHsRE1tcHR3JUNdFhXHoq9A45RpWS",
  "key45": "5mavwqEYykySfyACermjuen3emW1kkri5vdSr7ovdeUiSRVWtXUXXnhdzwUCUy6UwbQddz3HAep7LEHPc7YmUW7q"
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
