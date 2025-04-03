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
    "4apmhgPrmNMUH1qZr6jshFxieAW3sa6bdb3UAqBQEHhwnQ4x9CuQSbuAdVF3bp5qpcGEyTricn4FjxXBXTeMeyyg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EXzF7B7u2LcE4EywRLjfnb1UXm7c7t9MnpEheuzMLcSxSKLbmp83FkXg8MTpFtVYoKnzZhQqs2Z82gw4Msc9qks",
  "key1": "61TiAbutKxqSwoJjyfyiQypAYDJXMeSGjtUAo1AA4YvPkZXSt6JoH1VKpbzU7gQ7QwxDoAajrQehvMjcZtrmSvAq",
  "key2": "3Tj9GPV139x5pj47NbCFSupvobqUxC8LM2RixwwoutSXoqkmkmJTGhK3EPkmSS4Wk1Au8fzyUuSLFDUFot5nhZro",
  "key3": "339h8E7bvb5yKsFzBJ3APPTiZb2VTd2ZBgxLaWQPU5g1s8KgbyB2oAVUR7h4ToAFmqyioFQydE4qxH9g6eg9HmZK",
  "key4": "5hMe3tUMR4Yoze1vcLD9uLf33RUyuJB5oNdGLUnPv8CRr1iaLAf18MhJ5GQM43LrPWDnHyknY3CJDKCvaqtTVZrp",
  "key5": "4Nifh2mHpbMh6PtbpCvhgEwewuNwfkrxxxMBH2NoZxRAo6w4Qmr9dAhtt6k5ZDLeJQwFQXHDTn517Lnphfk7PN2f",
  "key6": "58Vpqr8vDZxQx7E6Ank1CHMuaFsvBBaPx1Pu1TpqEKtVxysMxkLHe7ttx7tkvLZw9XCshEymAY9mWjkKgEBr5hiQ",
  "key7": "uETKbiphmFrJPey6HgL3VWa6akLE5ozKEzvN7Kqa3b598wRNpmkhWLvmxbCqgaVtGZJRszf1BRKuS1zinbRyE9o",
  "key8": "LS88GPwqEsoDbfwbPQsuaWEER6Bqf7QNw16GR9Y6ZksRs1RnaD8QzRSZsbe1M6rFbHMxnw1fE9w8XcBdrt8mkRF",
  "key9": "63sbgHataBy6ZcrfuwAVFYXoaHXYFRnaopy32h3vZmfC9Ye9LMg8mdw3kKMSocrugBDbQ5o1zzvz87MC4BBgjuGw",
  "key10": "2Vjg5mai7vNBviqjtjr1iJ6rVRqmv9UbBBrS38faJ2yRzuzVjzuE6AZ4HGqbVESAWFggPk8JfVYtzGwRV33cSE1i",
  "key11": "4CGKfzJexWTMr78PkyzHDv4dz2hqDmd1kERVxPmFWKogrAbXxSqxrA9YAPZ6yK6hhq6AfnCLyBn66JaVwKcHdXLV",
  "key12": "2QVdpXYTpK9oZAZfg1aRvY5e9yc8P1u5Y5bZufeQnX5Pwd2xiZ6GcyBgsLaH3rZaUYTFNzNmh6KZtFwYegzWDhuT",
  "key13": "583qUjac15NYE3JD27KekJy4gWzv6jKHgHMh4J5aBqCaCXcnmdXHc6fyhR5Lc47gtVpmzg53BTDTY7pTN1RkUBjF",
  "key14": "6jQQ5WSpBE9A6RsETn4vrCBiGhZwo5n5bTWyG3ApbbVKeoKzLLjrh8omPvdRQscgW8ZPcHHb5VDSY6S51GUpwXi",
  "key15": "34SN5WTP4SYEwgGQNnf3YShWXKdb4jeUY9VVGUzB7XwWvbDDDCdReHxeyBjMhpaUNtPL71nnDH2Zz7YH41UCv5T",
  "key16": "3CHDf163qzLQ9khPCMwkjZGCVgqEQNssxQj2mJ761EnxdjVRysKKVAaZMAKNdqAP68nTXRbkGEQo7kSYJRUYVC5H",
  "key17": "2faj3mRLx5t9ZJvQt4J3wkGVyyFpmonvPcJp9beuiXg7fMTsYx53JFYbaZGHALHEpYaW7Jzdcg5LXY9Nnrsc5jPS",
  "key18": "2D9xxjqitcMxqc3SvGYrH5wHR1Em6BotckxSchiitP6D778xZg5w3zVsRDgBeaCrArPGbU3rf6PVqDndGTW9egh3",
  "key19": "32N9EMwSBdL5SWCeGquapZAaHZQr2VofEh1Nz4eKzp7U2viKBDuyHsnAdtYTtQCEXTy8xPzEn3J9QohpZXsrw4Ec",
  "key20": "2jtmJBjKcgDZ8Cv6yMrAFpW9XZ1EXafJSszKivMATxxeC5DQWF7rWJhA8bx8XzxeuiW8vQKMyg8mydM4NbDz9kZw",
  "key21": "3afTUidAHUi3EhehiHfD1jTBDQ72Zd4ZUrFrmmRi8BtmFgRPvCDykUncf1VPYxzXWZoS8cqW5nSn2T7rf2YHYQbz",
  "key22": "4Wm7gW3uzpXF8d4MigYXAx8UtqtTg37LWorXvEWZzC6zcZwnef89q2MR9kAMVdscokZ3uLaSJBQ5EcacB31WGNKY",
  "key23": "271zNV5FxxmkGhwY4NxUHXVd2uBjRxgnyUmEkLmeDc3eNf2vCx7YJ2dsWnVT2Ds7WZfV8fzydqRZN3wSNKdwZxb8",
  "key24": "7n4nZoU3PDtctABSqTV26mK85hjCwHuLhAPc3a1B7ryCpMM88TZXEhQ8mqV5QAMWfedgrFbEpYQAFfQJqmBpMPR",
  "key25": "4mBt4ccXTet8CeYk1JdRAVQdYvCLavgNRHu4aMv6drNW7ohMxia6UVx6Rnwhrq5YC8DPqqhUq9BQ5ppTsrrGg1fi",
  "key26": "3GXGo3sHVcwHM4EiHTbUKzLW9ugJKgdzkGCrmeyKk47NMYKrU2nv7iEecuxGSSjDAdyL1noMXZdZSxTkK7AHTXHT",
  "key27": "5U688u9NsnXmf4fwtorrFpC6M6eCsvqG7mChgmvhTTwSvFQYsna3bcxuTxCgaZ8vdfnrtq7JYYHwDJXtpfzigU9p",
  "key28": "2YXxiPvves2a3qdgeN9CPC8JKuvtwKNRnqT4bVz8vHheDUmC9jnyZyvEzFokfhWVExWfFRRAXB2QPEn7QgVGsZ4d",
  "key29": "5hDuBvNDb3f7JLgRYWY2v7w7cpzK7ZfL4k7BspvQS9BTEo2b2pF4EhuMcRpFcZAvA4wZDbCojp7L8s5UVma1d6K5",
  "key30": "5hgpESntPMm2sMkrMuw89XkexyMf5rA6aWkxdxcnhfXJxFDeJcg29EsSFDzPBvywna1Fb2EWAiXbBWsaHTPgmHEg",
  "key31": "2SbZbgJEzPPUVuFhSgTLv6CszoqHnb92iSz8xsJMoM4f3KiBfAe3Ct83fEYpAuVPVvFN5rBe1sFDMuLZan1gaBvi",
  "key32": "7fD7AcUSY634e932fP22Taw9D76w81avL4fc5gGDmhfySwwA1Q5MySEAsa77c5GpYGtyERKfJDi3iEgHDyg2b25",
  "key33": "3A5hBG6a9u9jL1bJJQHy4cVF3tFASZBCyxtLoiQe7u7LZVQLE52Ey88D4rYKVTeMoczkpZCGskcgqisGvViV5xpn",
  "key34": "guskWRVo5PkTkqo13NtMMdSDLXXyDSJHZ2e7zFXCFi8eJtZ6ehDC2Bt2hQEMd1Sf25Uy8Mm7L2njzeUNHMgDLS8",
  "key35": "FCohdj7B5z7hPt65EP8UHaYz8MWTQKZUosZQFQZPtyshYwJu7cVb71GKgdP4n94c34uFueWV4WNxiaYa1C8iFtL",
  "key36": "4ALsUc4w56guKqgw4MqtxHUjG3ChZvHZDqYNaQczYFuEEcZuXbWJT4mNLvHehuLbAoHZFv5pXU7LbiiSogfTuZ4C",
  "key37": "4ZtD4owXFikhrehfGrQHFgMGhdzJ8KCzCFBFFD2V1n4o8LGWGWdmmxMdVn36K66poTC92xR1d3Z99ZRThFHCycvk",
  "key38": "3YMZoZxLxqZQDodaQuqGBMg4Vun5TpPFdPufT5rVQGREiTWEKgSnzWxpCzqwrCYZNf1U9Bmt2StjHGdDrnUDWg7c",
  "key39": "nxvEhGX3GseZy4G51Wj15Dkyh9CjQza9UQeJi2RaDFeehNjPRAU2Dnf6Z6mHqFx39nPN2WZEB2wHqMz5skt3CWQ",
  "key40": "5xg15X5Eer3MhzzLjuZBbLxLdMAWiC56TYpyrb1jDJAGfUfJDKtsbfedLK5gQFPbAemZEgSr8qQ8h37q4McoTJxF",
  "key41": "4kJm95w8NgsuetKDpJ61Gq4trdeDLn1jYe3XwVFgGhHFDaxPB3FNe7xC1DnqbxG87wVX5nWrJ8YicZxkCn17Nonm",
  "key42": "2HWzS1m5XwSHnkCmMRsps6aTz1qcgPJVxUmkRKW5LErsfGhBBuJEzVx6icEq4WEm2cLYtgghkSEeFc3MuH3dbpJE",
  "key43": "xrgcxL9awQ2pQmfzViRG6kWEpLPL6oReovdLGa98YLPLSqf4JmkK8RLniZZmyu1Wm975jToaRmKKRr4DENFG1m2",
  "key44": "65nZFqdAPsgUCFLD22eASuXKAvbxTLZncDZx2JWd4Z3Gib9mY8rCSumxEeWpZAUT9JdnfnLi7pAgWw8FMXcJ1do4",
  "key45": "3C74s7CFYH8E7jPc6RpDNfqHTrKKVVr5Aqhw4NvW4XbkPJw31xUxLtDKYHp92LVqqSy6chr7EyM1GgwvJoNKkkx1",
  "key46": "NJ6HgMf3RtKzGBrxEi3nuC34uVQ8Bi3MMDc51H5V9T7hj33yLmixzXiFhDkHCNFtGEsEVPynUd4oDjFZMUf6bZq",
  "key47": "2zSqeBvdfQj9y14HSdBGutehTzD4zkDyAeWckjioJCfsXdGU97R6JmtyuWddvg5W2hqWFZkSL7w7fMzHFXpzjzL7",
  "key48": "22eXJjJdJ8Z1kGas1CaY5ERnfZBcqx2wwiYVrKF7h6zW3Gh1CSBSiYn69pXJ8jPewPu9tKotzxHd386qhEgPA7bB"
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
