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
    "455r2ct6Qvhv4cRcp5rVEptBYZpJWujQBkpXMJgyuDGd34Ffxek4BFjQhDiTeMMFYNzCRrD6qTJXQMHVw6NoPytW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55rwTcgPyWu2bCefmWTXvrErLNwrXntNCVujJNf8XPwgoRTaLjmqHnLop7QLAPiaYeJLJkrH4mVAq6qivRg4vbsp",
  "key1": "5Bid6fbvWGJAcsAD4AdioPodsiNX4EyYBsaScLyDGJt6KnrWQJTUyFHeUEYkhDXqFJYA8KxZVNMemRsM8uCWHxup",
  "key2": "5wFbxK9u8CbW3PEy1JVS54XdSd2bNCkBYmB6vGPSrYbj6Nhzk4qifb5CkabgEmu378EiFp3EEHr6c8tK6aLJvKrC",
  "key3": "AiA49ezaEX8aR8nJih5gQcFRxRbiqtNYHamEkPmtzshSsvSSH5irf7AwLrPnuqm2A51x5taB8Qd1h5vcmBqLLs7",
  "key4": "2sX3nYuVgufSxqxywbfL1RjqqMZRJv3VrkoXkTbKhDvgeumwz1SW3bY8TiVPL2GdYG4j5qVJTqxRp45FzhfR5GUt",
  "key5": "2SXXNa7CGwJb4WNQUH7bRYwACiGgjoWL5oGZXRsJCfZFCmd2RhewHJrpXv2tpZ3DYDi5sDvWHyLaDXJEg86eutKL",
  "key6": "7fKiqJF6joxYajiejpzHD3onT8oRnpE7MLyGhJ7p4WMUR9naL3xXxSJtcMXdNh1VR4qeN5PfrZR9H5mL7NWrxaQ",
  "key7": "2Xy5jgSFCv487P5YCFFES7uNqfbStxSxEKxZwepoYKponyqLpLwGgZke4bGY6WqeRsFhG75SZvCSYCGYaneJpvH5",
  "key8": "36oJFq9kPo1UDqzcF2Qxjr2LkMyQdzH9RL72rMEkqRyVv7LR7iPXuP9BrpETRrvtgJc9voMA7Nurjaj5Q3yd5DVN",
  "key9": "395QpVsETCek9ueXrZuRt9FesaeYT9Qy8b6rth6SecKyeh5sQXLsidUyYjJ82o3MKUVfbp4sSwhkQEpW477J9Xwr",
  "key10": "2sQzAd3m5B7K6DPxf89KGJzdVczZvC3HzXinPcVCDBjXmrfNSMY52oRzbuB7WejLibmZmVjpWFWbVwm6MgsfWbzW",
  "key11": "3FLgg7FgsrKCyjyrWVDJq98PFkVyC1FGmX4aAAFdWY3R9yQXmW1KyyiFDVqAGmkNZyob96UmFtDLaTKkv4sndJjm",
  "key12": "2Cvb5cwkgNtVcCCYSCAPHeFfdKXNL7KLqYCWqgXPFSmv5zJCmNx8QE3dpwGCc9yhu7Yan8QgqAbfcydP96UQVpgy",
  "key13": "YUaNF9kEjg1soQqBD6VWz2zBDApLtjnZzNe1LDY2Mc7sPJyUQUCRsipEM7TUk1jDQE14ZzpYeTrRbqEBB3nDHw1",
  "key14": "25aiZ9vfr8a47h4RJ6ACm7zDYutpUH7aVtkDVnLXjrJFXuAmrF759Q5pv3WGKqtVpc4cACt8R43zD7Bm5ahnvpus",
  "key15": "4oZWbPp2XE5rGCUCkFrCnazqzsKG7KthTBe8cEQdXYuMhYFTqncUpDLn2huDU2wsQQrdmNVMq8bRJ58PWLHFS7UP",
  "key16": "5jNBbPaoFFE75vjLyjRECc4r5uEL5WAHmVxUPV4jEZWhHRjHzRuKXG3fP2ZnqWm7j8UWEcrvVynLqcCY51dumdQd",
  "key17": "4FLDbYwvFPN5A1GDfrMMwzSdU1gjHSqX83KgQbxFDoHEbY2X6EVHo1PwYYhDi8pnbJGbZexbLSRd69FmXVme6Nn2",
  "key18": "624EGSJUpLNNxXwFGxVQ693hdgUENPTNVwg8U1drQNjvAAVkSdpfGno9aeJDkEnDF4M6rzoX54jG8FF3MByfxJiH",
  "key19": "2Y2gRJLvSGjXdCShRS9dSVJPCyhoAnmXmpQ83PBdexAfEDem9HLzpGzVuXosxsN6ePmK3jEWRtNumFsrCKafvLAu",
  "key20": "4e4seLrxPF1UXWFnJGpUYMW3wRePBwkrJia1jqmw4dPWoNbP9QjPy9EzMKPPDz6TKJgxNripeYvrsNgeF4uKP3Dn",
  "key21": "2X9vJkeYDSFET658u8WJAHRr5FmSZUSo9wX9wu7HFFQaSBriKsAJtbqmwYAxzZXbywtMoeZqVGF3Yjyp4i63gbDP",
  "key22": "2Npmtabg4nqGZ1mr7EiYwHMbrQ3CdJAA332dFT4L9EGNwffwYnV4c4pZzySTqM1hTGn9ZMVD3fJ4iQZJE9RVRzZq",
  "key23": "2KdP69Ve5JEuy73B4PTW3xBwThBNCJAphUHkcxVoDhaQhgDFU6FkvuVeZUrCd7aquxRjd8X1FPWfWVz1trg8iYcC",
  "key24": "4cVeLryxctYTMb5tq4TmWruHptYZsNzS2YffxBp51kazt7JKARMAZRn5nNWcY9FyDrV9UoC32PL8L6ZWcxpWFAW9",
  "key25": "3BJtH4wwZ3HSm8UPTfMri2DBq1eRqZJqJ6pvN8wsn5pveTxK5CehR6ALwvsPEf6fzuKWjuXbS5unWLtiRnfqBRd1",
  "key26": "4B5tKhRsoTMr7q7ARicg7YhKQvj1siPaH7Z8K7ppauW4StL5xG1Wbm8LNyTu4ppBR2upMeJWTKwFou9wEi2Sx27",
  "key27": "nD9b2UJELUir791ZZgNKamunzFANXEErzbRNb7rhfeGUQJNhW213FJZdYBAMSrqxZJ4e8dMcomgUzXxZEx1gZmk"
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
