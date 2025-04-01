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
    "48GCRxfSGA5GMzbGRU2XjyXb3ZspAVUxBq9XpFN3NFSBoLSqDPhidgmW6DfYghwCunxj4rbKt99JDsRFcBKkWYEZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1E2DN8KmPAYzBMocnnaJxQrNy9uH5aAT3jBGgPrXZQnx5AL4YpiSpEBMftzHZo7tpBiaSPZP2ND8Y4UyDL589jw",
  "key1": "67QJ9mjDaYKG8ifk8ZtzLpjzCEXLvEYmYJJznV79XtXZm1sBS6xTfP7iMYqutWuyCQd1DSqqLHNaBWoibYmDMgFT",
  "key2": "8LVPLq33fkxdiKhTwvPUggUgirfZjmr1LG4vthRNFPfLrPrbuirvVgmVS1nPJ4mGxhvgbrJq7oX28CoHdvngaXQ",
  "key3": "357aP3sZS6hAS2LhH9fJyoZJkV7mjuwho4wwrkhFxHRJoc3sFihvdFhbStUNkposzZRjtK2uLASyg4SMWYYcQbSt",
  "key4": "55tge62i5xRBtba3R6uWiN79kyfSxZxNwtpGytD6QSwGJ76biQSqYN6k2e1e2dknvLSns9xGJVWS8QGj6GocgoVj",
  "key5": "3eyjKbe16ABABvQSFY6nn7drZRSKYQ8ZZRGGPXXrbQwacwD5hVt9LRhYRnBs19cK6QtkN4k3UQdeJnCyNyAo78uc",
  "key6": "2XkXmcs4xmbZX8JGBDB9fZmEzozxJ22qBtmi9dukY6uB1fkrVr8YV6sPGtkA8bDGqTHzRGkUq6kv8FLNL3ZSxdMY",
  "key7": "2EpmiavnXrvdfeWHSbYk36bWT6YDUAb31USCfe8KJivruVbRYkGEodXX38nSiLSuYTBfEAapn9XtBDT6X3sjja4Y",
  "key8": "45rKVhLCek5job3CUzu5oFSoF7RjBGwGvcFqfhBG1kTi9HkaYnLUSaQHxVAFWtepoag8bfAzzxmSQnwJUf796wqh",
  "key9": "2NPJe6cAQSH26w34BWbmGrSGBQLsUetPttdVAJgdwt7qm4DLyqQ8hVwDpBtsA5dPSTB118nsAWTah7CDgbmghYyk",
  "key10": "4cXePa9GUvo1vL1HNLZz333jjCnJm6AZFCqgaKtuVHsQQEdJUYbt6HZ25i2Kiu1Tm86wWcEY7sYcM445JBmKQLzZ",
  "key11": "4SfKoFMmxFBP3R9ahjMmujdwFjHJ6DyKxKJuaaZG8Umv7M4MzT5iUcgQh66j4kuiMyrzxLdd541JQiUBnWcawcTi",
  "key12": "2e9m8TrLc3CW3u8NrCwDKQFCeqQojgsb1NBDZHjJrf59kV91KSHe8r89zdWt3ETHdHJCrugQJZFyhSidTxDWq59J",
  "key13": "2c9mFJBQffbssPierpZ596CYfcmS8NDiN5W41GygQcszdsmwBabqmhXKpM2A84djiPENeY6o3rwntyskTzEvGYmS",
  "key14": "515TG8NDWuKXKbkzzoJ6zoHRRBG98G694MmgBvg2kcAkDzpsZjzMFmmeAp1Rga6owmBiMr8cM49vV2Kdoi1xvSkx",
  "key15": "4VVqEm7jb4FeknPu9aXnYnyWPas5DaqfffpFBGhV4hJRKEeoouQuyNaYRd42HCHjdQ97Ntmix7UtfpcAP9dNie6x",
  "key16": "5qXDoucW8hGFFr6dim6nSJKm8R3uZPxx7cmvVcqXD3BTST8pCyvie8nYF5iw1a5EVXCc4K8W34kp8NQexrPUPrZQ",
  "key17": "2L3HLQbkJSrDmL6eqNG7txatDbDassDK8UBgVLx2aFiUAHYPEsVfm6nHPgwdrRmk9ZfvUwSsXPkPo5J2fViDsa1i",
  "key18": "bT3C9G5jAaDzmM4jBbbwGXd7VepGuZUPeDuc5kss1gkKXEs2vXu2pvXkGkZ3mZWqB5sURPi4EHYDaHwNk3Yqgqc",
  "key19": "5E3ACfGBTV1mZuMYNVnkCvTAGUy8fAffu6QC6thu9tJFpEE2GogucvFuu7Yz8xnQmuVsugRS7UuTAKBdBvgtWeUJ",
  "key20": "2AYgJpjan8rH7dep6zc3roUe9AaAWvCLVEmvf73ZNNJRWktJBvXgAF2oDcz2hJMEFui4LqreZnTTMZybwBQmF67j",
  "key21": "5DGoNh7r8ZVFS8FDQwEHEEPc1FpfVV2YF8YT8hGNtWptD1CPU8VMmKTekHsQ1CVDpqLqmi7YgDccA8Qfh4tXEmKU",
  "key22": "L7ZGi63sQQV8oqVV361Y7CzZENuyWUtNixbyUYvKRvEaFBcrjg7UXh7hZNNmSGM9kjbDSmW9biqPRaK5DpULX7J",
  "key23": "3HbRECs8T1BEuDQysvyxc8DAVmVDb3tyVXEMrQGnL4J3XGQsESQGYxxHqYNEseH1BQru21UGThuZPaDVu8XLZQw7",
  "key24": "cddFAJA65Tr5tGrBtVnmCdt4mrBbbfvk83fsUTGVv5MRVAbjjD7BaTf8rCSzLCCNw53qpruyARXJr48u7EuQtYq",
  "key25": "7P6Z1MS6sXQX2g6oaBEW5qXew3Xt4hiQqiEWAmDwoVyzMTNymhwquzdBRqQ7vQa7Pg4mW3HN5LCYhPZnLr5yQcV",
  "key26": "5qfyL1AjDXfPJTPyYqPxSYdouezMvJmh5mxT4junRYzaQNZAqJ78ps5o2sZnyvbVxmg59656h289uU6skZGh3cfW",
  "key27": "389uTAQtrmCoMoKzTHw1qWSnyvX7syvgSeVef63tWy6goykrMqkL3iTUBWNwta89g9fAMqroZgCEZ4H4ihwbekvh",
  "key28": "5NpAcs7HRHcr1A7GTnzhhEzhWKNVMb3RyjvJCv4CWwqDzgPy7mJEvdKhDkTa6XZULpoc7kAvYAFeAuUwJVahQsAK",
  "key29": "5WM2hhhopsSge4xcczv5JPriFyq5yR6VmBfLZRGybkM9hU9Xouc85TZFvAVXkpbihM9MWPTTSpgPqzDtbWnW98jy",
  "key30": "oE7NN2CYobSLiudLGZJfULx9ftJuqms9RGr28HENhw84u3C84KA4dokCud8PoExejZkqpNys1osGvhhQnh7uwmu",
  "key31": "3BpYeRFwxJmHjGXSezPYoLmiyGq7Qr7sXgu9EAmh6TmUL7rddBYmYrBRsAetXLTfMattE8QghVe7ceAa6YYKP2Tc",
  "key32": "21zENJ1C6P29jv5rZAztc4SwfMsnhFcnQyDAwVGovB7L9VcSfstRR442kCSu2DVfMyoE6Hxbj99jbqQZ71vQxqyB",
  "key33": "2e9jukyLuVNTvqLsoiM9XUfu7N1T4PMwL6FfeungbFxZqpxbL34EJ8ZUxezEt6VJrAMjzgG3xFsPrcZ3ukDpkr8k",
  "key34": "UXfuGfSNFx9CrEvqVXYNoWjqJfAkWehqwbLvqDJ1P7TDpjXd9DQvXcugNhzA8ErUyrsiJrgBx7rLZRQdjn5NSHf",
  "key35": "d1AASa9m5AFP5WTR6HKYx18Pz6gKsVBa2Ua7U3U7iLhFE9gacu81A4HfZP5mwJBDtYRRwYjepTFebhE9RXNibBc",
  "key36": "4wgDe1sNzAU83vfLrcQeMRxo95A1Tz2vUY5rHe5oM2n9HWJHDDNviqQLi9tB3qaUgPEsQB6GBGQnhNV2CRtDMzBp",
  "key37": "3k1Pg9WREJwcqkyCx3u8xrywtx27BLFnCv4uzyoj69mATsayxj9Q1Va1FZoXpJseRZ1YYbSxk1MsBJ72sM6VCt59",
  "key38": "3choUR1b3vgaNA2nRrdasr7DBAL7scAWUK5m9yTxhhbakMYKnyF4jX714sfy5EnkUMTNKJjySEkd9MD8YpxU3aFE",
  "key39": "ku55gCoegcg4f3ZrCb5tbqu5yrfTNTiY2qCWeZTggx7n7ujugrCqBhX82JQNNSUscC5sZjZhRfG4orjWWBbhUML",
  "key40": "5rpSf1EGfkzyAB7NdYbP8J9t7t3S7Te4pkQDsvRUpcuYwQhnhGuGdsVcVfbTdeX8rnzKuR1xij1WuWmQN5g4ivaV",
  "key41": "cTw4Tmwn8qEcK1rK9GcYHymDqtKWJACxviJrytpxyeh2AojYQ8Aurb2wtVaKiQoDsuNnosfMD7cT8KMyeKmKUiw",
  "key42": "54Xsg1giECMchc1ucwLQ1rFTTXCJnFrRF2zc8ZqHKEFB9jB5y4YitBwoZ83zi1FVG6aSMuzHftuczSu2nKVPDg8z",
  "key43": "5iLvZ79dn3QXnstnyWB3S3wNbh3rzQcynUEkT8g84LCYbs8nGJBaqQq3wbc7gQ1cFRgLiP92wpUiwnZwLZHfZ6ny",
  "key44": "2JEonHYiaTeRLV46Eo4S5RC3VQRxuNoDGsZio4XaTn2rTjso1mr6dinJcQoEBWQpF6kKkN3KNr1g2DbJyEqmYAJV",
  "key45": "48pwSiGPSsitFjcGrgQDdFCAJHdfdn5Ak1YLTdCaKQ4gvpRA7zadeT4tYGxjEToZuhqsa6qtobAyu9fi1TRoAb9o"
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
