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
    "Ny171p8STRbmFbKLnXFBYWtUSA8HLes1h2ix4SoDGq2bqdMhzuk8TbGe1j4mg5FD36xAfqRP3QGUNFk1beo212U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QP7Kh6f86RHBf4LUH4o4j2d4A9vAYAbQEwVnMVCqZd7AZ5MP7QDf1Nzx8qwMX1MSbbrgZ75xesQqA6agBeo8kfv",
  "key1": "4f7JxTaPheLSBdR1kzkDKkBcF97L4JD8C1S9dv2ptcNcR2vasQB8vqKZBqKFeA8HWeBmX8MWENZB7jKHrYNjAzJw",
  "key2": "3qe2PUrio3pFuZmVZiJmtzXqLhzE2CbSfiCN53MwTRjdtmpxXCoR9NuNfVZR66w6Bg8TgJ1maiA2GbLrw3R8oP8N",
  "key3": "4aH85MReR7PETjqa4hKbpfdPG9uk1V2SVPQyiFaLn8cMySJdPqdZraWXBjQ9yYvjAco9DewpfdCMDdBFbMRnjGHY",
  "key4": "2aoLqaHsjTnhiENkN8eeFk6PpB4bcbiz7yg9iTCHav1LL1QD45PRfVbzqSLMA5mropWHGs3TJMeMQLakCV8QxxXt",
  "key5": "a9BsRd5YCWJ9eTNejd1KH3T95riGtR3PPLxbLGAaKudAvsXDworohqfHKTWAf8nDpKJ7XVWUyozHNdikyKVj7zU",
  "key6": "4LfZ8g6RdqteBL93TQubC3FhzrQqaEKoc83K7F3sCKxMgtC6hPtQkbpuT4W2SQVvotUzuesLew3hzmpf3gPu2KMc",
  "key7": "2Kgz62PfGYCcKwgTJJYpnPdYg4wkYGoA9y2a3pHsC8GjC4oWqfpnDP3ozcHUSrNCHqWp2PfjXb3pAhVBcaVZBYcB",
  "key8": "58LjCD17oUCinj2rLgP38vKYBGkSQJxqQHFtaQrDE9SZZPXtjQ7g4y8fp9Zbu1L2FSZgCw5yHBPyZbShRUe26vEf",
  "key9": "39jvrQMLJVfeNNNgPDzsZC67JtpuB7ygUbZ2QehU2vZvEHB6dUr5CNksRyDxvWcNFD1FxnUUc6zCYC7qv1BNZWW5",
  "key10": "2t7READBq25nvx2EwNJc5s6bKkbk8gLZ5ZDb6vbFcYDT6ncXQqYQBKMmHMK7utrnMABBT2nEEGq7HjvoaS76W48",
  "key11": "4gRXjhFRo6ME3ZpYzMaZxZWnY63g2fohcdtYRcEr1wV1UJbF55nYvFBdN1mjefgr6YMgoiirKHGn3DLnJZ6jaM7U",
  "key12": "4uj3Jtr8ijtv6eUaU7QMSbJuRe2RVdJziyKmQXqvSvFct6tfKB5pitHr5BjyWD2bRX83zNjx8z7n9K4kdFFWJd8g",
  "key13": "5imFU2vrkdMe5qFQPXwW8evAxFu35K6aLi1i5Anv6A9caC4E13MX2ke2bFDrQ8yjEQhNbwks3R5huDwBqjsyhUjT",
  "key14": "4Wb2VPe7GQhZDGHA5eTgEYpWfsXfLtkmWLZ1aFJxMrEjLWsphzYnDft5suimBWJuwGeTNA1QMF9x5Y4FVXfuXhmN",
  "key15": "3q8FT9sBRYCHkHEgPtZhm9mprhQoEkMTB32VZTYNW9xBUprNXH5vDa6gQV3E4nYEJEZVmdxtVdvnmUmhcge7TYcm",
  "key16": "5uHvDJRZ1598VUPLxeLS2jkoo5ZPu4kTZkhJQP5TLbWgpfHh3tC1hV86kPx5q5fHLrPcFprgeT8sU5XSopHnkfGr",
  "key17": "3H583VCheSKejfTP15FQMgQZF6o9rCwtPjJ2qKUBSnpJKnp8kG8iQ3qFydCAXqaxKbXsRsba4BDdTxDGDEibmDfQ",
  "key18": "4Am4Pv3SgDdPdY84LezYPaETFx8coc2cZBDqEDfZYX8b9Yx1ktewVbpyQqnHRMUAuH2w2B6uJQTJBxuFrptZATga",
  "key19": "uVYJ7PQL2vCQdfkNwPqyaR65MvjFXfNKFxoKnDSSjXrbjE8AHchHJqpdzvx7ez51aq6aeWTRJv32jNmf2Gukybe",
  "key20": "5gtWKf5hkggcaXHVDprf6jxocfsRGr8npVQWQH3NG9iNn2HZtjhxbvPpvvEwuFcuzDLKS19WrHbUXuJaBTNM5qsi",
  "key21": "2sy1PtCu32ysAFonAjB4s13iSDsLE6tZu3T3ENDCfNqBEWJ7HRV2cKFfvUxuxzFR5PbxYwW3jda7sHMd1RMgo3vr",
  "key22": "2vMmvq2qdWiWnGBxKudrecG8r65W1XbsYjMqupBXf22Sy7pZywsQJS6nRKJC2u6jELQwKKkBZCYszwRxbo2CBVgM",
  "key23": "57XCB33WTdYYeewSSKM2h1rd63i6sKGduBu2vH6Uch1H9gixVWcMS8u8GAxLp7H1qNdnwNYDGRtB2tPScJ6DNGBJ",
  "key24": "XotFKBqFSfWW8tn3eCSwW2dnPYG37TQBQU3zmMbc8CrSbZcgvTLLkZQ619YXVasr9fJzpTWLxAY8zT9hVvkJWLG",
  "key25": "2LMHc8nUGXcWhkwcNxM6NBXNwk23nDrT9CrJ2ZviBBrEfHDnYKToRDZvpySncXVM6TeJDvMBnzgTaRuntYhLf4cJ",
  "key26": "66CtkuxaGs9fY1td36sHeUySVTeSvVzAEmmBks5Bcgu29PAvhAd2rbhPrwWPV9o9fAea66Na87AXf9vuxKoNvCPc",
  "key27": "3CUGYpi2wKz82Mvdhn2WCggomYAYDJasjTVEvm2AD458gsCUmXZPLThuwxJzruKgM8XM3QnDjurpYUTChAhCkdfq",
  "key28": "2uYrzBHuZ6pjAEc22CTh7eAE8ko2zybFVvYQuu8nieLPYWn5oJB1q5xZREkJuDQ5XQaY1EGq1fyX7rfXtj8eMrhZ",
  "key29": "jxADYX5fotN3ANRPJeeurGWuPj9uN7qLXea6AsofebreZffsTgp4DGuY4Zgey27gn1PSFAdWjSNzBRqykgQHyzr",
  "key30": "xLLPk3pn3aZ89zUt5ZzozHGsjT3GxWgAoYouXoQo1t2UuX5cebGHRMXvz5z9zLXXxjRRk1CTyopfffXGa6foBem",
  "key31": "4EztNtpNTR7dFW1wn92UWhjSXizhEVKX24LciQ8ivzwMStsFoNHhoZcZvZeic3AT1CLQugaCj6stYJXkwvS5xEhG",
  "key32": "4VWeenREanzGxJdABQJ7jbtN2x1Nkkm4GkXZhKtbbNGUqhfuBWA79cw4foDaVYLenxv1MYrQyZHZeavgVzz4588G",
  "key33": "2quUFuzxC3RV5D3E2jydVBkRNxkkvD62vZ4rHxLhaverg1bfSYRv3ucf37wwJ5iij3bQ9T6dHBgLb1YURSvydpKM",
  "key34": "4njKr6bLPWWBoFA1HbaeLQB3oJpwn96nbzq3dkfAi5psXPzM5q9J8idt3fPBCWo77HNhBwTweBMbDjZiFpZp1QFD",
  "key35": "3sTHhn9GJDVfDGux1yvsZemthY7PsFgCuxaZ6VjLbdts3dYzLhyVYjoRZqkY4yxcq6xw5WdUJ95QSCFhtcmjBk3G",
  "key36": "2KksSYHfxAr3dbfwpYQcm8y3eEx1eguYE6puUD7Rf8zVUmHXmRJkKNtQqFTtDLCSZ26n2oAxVM7hyGeyWDszeAfH"
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
