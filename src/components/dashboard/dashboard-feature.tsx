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
    "YTouhf8JLvG5tRCG5VQHFJnMZMJELQFPMwx7rWT7n6s2TPgXxYC5wMYdmLECT7xMnDZ6HR7k4na3fyV5L8HeVAE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tz53LewnXW89KNS44JakQUQyNhtbime1NLzrWVuZFLGVMYXkdgfcxYSV35qf123jMndvgaWiYpNnAiTpQUWw9hK",
  "key1": "4FpV1sW2uzZF1HDx2z9ZscqTAegkKX8dBN6rahTWV5S6FGiB5LM1B9ewcKdVdyVCxLhsFak62HG8p9PHnSHxxXmm",
  "key2": "78MeJdE4asQc9C6UF2j4NEwv7HB49FJqF9RKuZi756zjvB1iUcKjAAG9XqPj5P2U2UwYF2acBfqed3QaMS9QXn6",
  "key3": "43Qk2Dwmx9uQW2x6DHdfnRTzMnNLMsq2qG6NGaZ1248VLQeP1DxoXUzn26w3miZeFuant3g4uyXYHdDEzhbWRWjd",
  "key4": "2YNJHEJLP8QzzmbbpbF5fVxmhYyfxLT3DbcAsiVYtihcwtEPxM5TWKSMS5qpF49MeNvbV84oJpEfk1U5VKDTZtJi",
  "key5": "44UH3jUudZPZJjmarrDM8UKfswh5EmMBsj7LoocWmYEsKQZFKgXJ6Nmo1JZQYXD6PoJMhrG25vJcBtaBmnQmgvtW",
  "key6": "4qrqpRBQdg1YnUrXv2ftTV8THX1NYgwhPkJT1PG5RfXEyut6BTKQ4TomPrcdzn1PYKqCXifCMQsbBYwbkfw2SaXQ",
  "key7": "3Le2UvcaGdbYRTSgKvU3dqpzNvYGYqPXYj7MsAi5NLtkmrHf7SFpQkNA8KVNJkggeHZHeZtpVWb6quDkGsn7r3wr",
  "key8": "5GC1NT7yvCv8wwbXNLKA5q4PxTL4xovBPjnPkaAfRfNNYScGAxGTwjps8cLD4qDyXcJ6CrboxxUk3Y3KM1DFHwYm",
  "key9": "5iqECPmbVCYeBRJXxWFRqfhgY5v2DqL1Cp4kr96NrLoGQ5JrgJWj5zRbdBcnx31Ckoj9p2L4Vcb9Tf4tU4Q6QJzX",
  "key10": "BuhAoCtZXVtLDXGo128ubLhLqPjUYn5mxB6ai94rHWvdgZNKxyzoh2VrXNXzhM2pM1srcwXnvtvnFNhpHdUtwpt",
  "key11": "5B1rdVCWNhWTUA7kAxMt8jyQBa4Xs2TyqzNgb4UZzf6u5zFAXFdH3VD5qbjSJse7B1ZRPiVsMK6TsWbD5RTiF8n4",
  "key12": "osHXwFSHKSSPwAf2QgXqt3NwdMxJiXWLRF9HK9Y5xXrHvHGdCd2sLjezKpSotpbcYkJjiwwCFDJKUtwouXpkTAt",
  "key13": "29yFpMAZiKn5ihgvSSZGFz5oWmvJGHyww1jXiQgwUS4geBMyXAi47N1N4wefiSzAsf6AciCVprHiNjo3sPA53pTU",
  "key14": "3rQfNg94ndgc1Q9E8MhURQt9bdZJvUK87Ppq3BTLz4Syrqf6oLvBeWc81nkh97CFzwL1GCHRQvGTKhzouFhgzqrF",
  "key15": "26NrHKMNAD1Am9HyX8iWfSQ5omjB7KHtbH2xYZuMuJshC6VtxRWCmq3pL5r9X5s6a88nGqnm3fYvaMgEkbWGKvem",
  "key16": "2GTQZ6qwpFhXZ6QNosyXrg6DkkDzRY6zWSCzqvZp17196fb6G6rDEK8WDDLj2xjqPxxJYyuvkVuHkYxtJvsFV6sH",
  "key17": "2EEZg4Ef15ZAkpMjvvrfhSzxP9m2aLAMFhw7XGWb3GWYdRkC6CD7qvuiA2tiXu5Ju2bsJmobTHohtEymPdxxeYXt",
  "key18": "2oiboEnx8Loaq2rvPYZyuxHmP1Px2xeh55zCv5QsAWhdTbahCD7SH44k5CJJx1FeEzrfxPc4gUxXtygfbFotAxWh",
  "key19": "wDFYLGULZSeMj5UFpzgmTrHU94QHC3yxrxVzjJmhK7FvVp3hMKXAaByGaSkJ9nZhsTqWTL7TRzpcfTECXSLvs3T",
  "key20": "3SnYiSg4dYxXPCS4sVEHc1zABHZXugZGUd6JMuUjw3AzNXAG34Mm4a8ETLTGSWRx1mM15d1vwjbf3ZpUaym8Y7ba",
  "key21": "ZSTKT4Ds4Zj9cPWHpedV5aivLBU3ZpeNjo2yEQBcmnByHamfnauV4eZX9zaH63vycqkhtZNX7omcQbBZ2Kz8u6A",
  "key22": "5QHniSV6NwaJGPEpCcNq18VibFvnF8gNaEyGGSnefK1ppesu63y9STTKd9Tsf3Tqv7scHu4389YrdDxeYX8Hrzvf",
  "key23": "5QmhKrX5W4n1bb6hwhgzXFja4o5JEFA5gMkHChseQjcGmeN4qZRE3o89RoGiqkJuPbq1THN7udXJ6GVGE6UKX6r6",
  "key24": "zHocm9AfjH6pnPoBkokwv812GMWAbCxAoceUsU9EuyTxiznKzXcoGNTcvHGz9qEGpwx4TMeHAkJ7YwZzqyA9YAe",
  "key25": "5uCTPYbqYzsD7zv64TvFfeZmA3jGTG6p6xseZEmhXSU2vLcgoNsKiKqhjEBeQxJCsZbN9PpxpSqMrvZjt2aFm9G4",
  "key26": "2GUtA2CsLmdQu5UTw4UpKJ3HkWy5T4uJaj94ASpjGbu3k1mBaSfm1eqQWGYHtwYo8N1DFrmA2T8CzWWvoQLEmB7q",
  "key27": "3LPNf2cYSnk8dTfiUh8DpkbMHJZC7L2vhgNmV7ALcDJb2KkfoSm1TW355NQhHDVqLBaYAiJDcE8P9MeeHn9xq9KR",
  "key28": "xgdK4KcsaQE1ihPGUtou5YsbyWFhhP9b4Lx1fEAvxQUiQKMuyBrmxUjKmsuMRGgTAD7LzQmUU3kUC3jNeNKvsN3",
  "key29": "4Nzq742jtSwberhLdqRfL6XqQaX3Kk86BXMaq62ac7ybp5YrUDYXhiB4ftrkYFqSJkjVgnvXpGEsWd9yey6iYaj2",
  "key30": "3yAFBZwf4MyNDqHGoaBvwJAgKGcxq1tv1fuDpY5AWbDrbBQMYCDnZqbNdZKdVi7sdeCiUTZF5x66HcRsEioo2Jsp",
  "key31": "4RM2Y79SUJau9kgNrZy9CGxgUrdP8XbtkHkgQj5wGiKidgyq3R5oLpwXu6k5DK8tNHJsCKKS4Ado74vbGbAfVudV",
  "key32": "2FPzKok5TFCz1oBdHDjCP8zEYTxmNK7g8Px81Pa4ssuvKmPsetS4qLYbFjDT4tATV2W7ZjFNqr9Xypn4QRHRWavX",
  "key33": "34JqycVByxJGRn8tvWn33pY1UhECnEKfsAx6JKKvcMBcRcgWUDvbTtHbvm7a6y36ye3QuPLPFUVygcNBmun4vH7k"
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
