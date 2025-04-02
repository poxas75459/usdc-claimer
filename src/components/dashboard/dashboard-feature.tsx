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
    "3BX5cvusRVUoaByPHXXq8tsV5TmxYXQg5LyKWsPfFqJ3iGy9Y1b82u9KqTT6a7KgjbHDWU5mNTkbpoWCD14WhVD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JrE2cYAHfGHE6113zAst1SGS51WomWokq6vTKWaVuoj6SvKELBHKdtzzMFvXFShas6cwzMPAjL3ke9A68dPRVP8",
  "key1": "3gmijDr2RcXr5bSCFH75sa4P2JnJRU4jqzThVaEm2C95CnW2TMWikjdFZCCFqWfAnK44mknYX2CLwUB4KoUq2bL5",
  "key2": "31dXtmPqkLx8ZQiBqrnC3ANsWKpwG6mYgBTJBSBfYEoqpzuUiFhNqfnRLLjfv5w5QxJn5BR4Fu7faTYYoz7kWXEo",
  "key3": "3sVSoVzoaQbKEQDNPAoAz2uA95uLkirPVABF3hdqux5q87xYzhu6U7vHPFnQWcBEZ9gBB2oJsJkma8nbDEMNioBQ",
  "key4": "5V17oCTvbsKyiKWp9iZy5fhKsMFTh6BbLCf897BpxRdrcLMmJkcwfC5RiQsiRj2gyvi6viD5D57BahoZ4R6FRC8T",
  "key5": "2vutsjGUzugveUz2G9QhKDnLNWUrFsovWDpabjpaLvdsK5aQGgsouFJQN5LNHB7DUABi2eXFzBKAfhLBHCuNbkWp",
  "key6": "66N2JBqjM4x5q9DnDFCAUe7JvBDr9cH3xMYNY6VKWe7WvmSHk8dUB9VTp7949McczJqamySAzALTR3f3JfZJ34rL",
  "key7": "2rC6jVSVhgnuAnDvF5avKLAvCkBAp63qxZ7mw7MgQrbVgqCnumtKHLbepypH9A2rzMkYjvSjDY8cnqeKqSgCu26t",
  "key8": "2BNMHrwu46MapnA2sYuWPoXoFsP4emD7xndqz6kgQKrUZbXWuzRegSD9VfLGgRSX5xtwi2n1KwPuzauaWjFDdUtA",
  "key9": "UUkYpLLgQma6u3Dx7nFVvq7dUKCVXH3i8Mg8fSScLqmgJHBh1rXbzhLzwN2UtVBREZb1StNQrFPHtEVvzwECpgk",
  "key10": "5urGAUf6hkd8ifzZy7mHTVfaDxRtzGT1dvkKTmDCW2RZgLgYWesWDP6i53XYwX5EvVaajeTFMTKUJuPeEiujcmdv",
  "key11": "5JtpLxWTC6sQCLEUr7YTVrRfeLxsgZ15H44qCX5kusUZCGxj9ZDZbD12VZqkzcsZmyYS62t2CE2GyRa5S3vd6fU3",
  "key12": "39Uc4Kb9pVa1LvNDL89kohgC5M5XkNDARKB5Mmre86g5YBeJUHcnLxHgSKhnNR9zhPb3J2saeZx2hqQLBAA2C645",
  "key13": "s1qXqF4YnFFLZfYPY5KQXr7NykS2VhDEgAYFv9Mn1D9z3Vmc1AXc5nc6fTfrLgkBtFs1sN6GDSNqLVP4xBG9kT8",
  "key14": "4SHSxwx8XnEDN64ChFrUFfhBBXZ4xsHYh8vh14QNmFRBweXXBHR5a5czWKmgZWMcyyXNr6qaiVMqs11jLVyXgGoq",
  "key15": "5tcyGNaDseqhmewTraWx2q91ZFFnUBrf6BBpwRFYU1fEdiE2oHkzsoGBvfStvVJfDL1sN3UrJsvdVuAwZX433xCK",
  "key16": "5sgRzqVzA5agUUCfR5iMESCXEvhrELhXYq7aP6LQwYRMmjVqntQjJCjerRY1vFtcAJeF5qw6tZTMHLVaFTRHd9vd",
  "key17": "4sJgYCqa9ouNoYiwLbYwHmuD5nSmVMELAUCaAWjxiKdv5zSA8Kg2vq1j3hNjUStaRux5Z4DDf7iBEHwzDETcUB72",
  "key18": "3cUAnLamzJMsHaPFwchczZ8e4dQgBzt9b7XWvVR13Wqy2iSQRo6svn7Wwd7udqBDLN3SgZ9c6pBfksfqY7uuk49S",
  "key19": "2YYYo53rWWoa3WspNoX5mYVZmvBdnAkn5bT6FWubcopJpBnjpiF6HU8ktnoohpFDapKkJ94ejYQPuDHQSr5s85VM",
  "key20": "2SRg9nFEKFzmXZGCbGGxphBXZsRfMJrHrBxtmYrZWav7Vimknpa1YjgZWH8kSZVDFjUZTLLtwJMjMLLnS8ydkoXt",
  "key21": "5w4mpbwuoxm8uYwD3XwsVUnqnmqH3fTLxLL3igAvQJCUo9WqhRTrxz4nHKqZtTYTmKj15optAPjXC8mNEiBLwqCt",
  "key22": "4V5fxUQzMn3EU9gLkG6QAGEf5pzs98K8fAhknPxFevNM3PeuYtBL28ZDfgAoHAaiECnydb9oHwgAgSd8qwmSvpAq",
  "key23": "3xddttmWKG18vsERG1LoNfjrdg1pLRxXuCNWfvVQVmZbrPA3qFFPQ1LHSiVuuU15xPHnoZgLUQjfV1jmhvT6QYv5",
  "key24": "3UBFGcMbKcBcmvoTUoWFuRyC8Jk8xZngyKp3fc9den6a4dugyrAZhJ1x6CXWPFPYjYwJTr4PBZ3uvxLuugmjFSD2",
  "key25": "3VQcHjjxSL1j7i1bgxLuC7VQf6kZXAUDmYUqkUW7p7YX41w4og1E9MP14YzrBXqmSNz4pDGjur92CgJKthbWGv2R",
  "key26": "51u3vBHKK7tV1fNMaeCLFh5rvY6ExdR7Enc2b9o7KJgT4AjRBviwVDLVaFkKWYzKob4jLyJ6yen2BRkQ8J6JhNUa",
  "key27": "2WrYuwUo2opDGdK2xwbPHZviJPiLZUaPeBEhakdpyfVMipd6caHTfuJqK1hncfrprN8AoyiCA3fe4Emsa8XMwq2X",
  "key28": "pWKj6qUUdY2A9FxqYQ3TyG6hBKDQE3JUQechYuFCxShB15iGv6bKu9YfJQuBPtNXWAA5q5a9RXDvP4m1KpdYgeZ",
  "key29": "3gQwz36Ek6NYSSXw9z5RXFWHXMuCBFEkJxbfNALwEHyhVZuz4jgC7EbVSKTVMd6J61kWGjxYyoYZh2XWvvsfGb6b"
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
