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
    "2AX71yZsGiBt8peztRhC6FVGa17Xb23CWbXJqRNJrPU1xGwAgqd7eH3FsxNAKmSv2PtMNpXqEWFzAQoXpNL5qQSv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Y3EDNDpYWES5BDeKn11ytLi7gj98dcpb672aKAcPQMCiW8qg9vnQe5MJYnNhER1bEbozJJtvx5jyKaXpBrrzn5x",
  "key1": "SeGTJC7FEuavkBjT9d1GshiiN8NWvLPk6UpixxQ7BWkZKRNUp2npG9Vyvq1R2P7Dah4Td45UAkJo8ZtmQuinn6a",
  "key2": "3CxqZVCVYcWaL6fCTT8hh6wc4xT46QEabWxEB9Juv1iSWin9DVVN77YP7trJo22gEskf8zaWww7hjcq3TbtWWFKh",
  "key3": "5kM726h4qeYJ4ZWfRoZoVGywPGdNJez8SVewa4SvwbFRwJf5yyVCocp8ZbL6XwxCdD6xkSwcLuGpJmyBA2nRBWJt",
  "key4": "7JLeS69H2YjeuJikKeXwYxtM6cXUUZX16gNYeNx9vcMcG1S1BVQA37v588GddVNz4tp6mFdPPXHrRXNReYxGwiz",
  "key5": "4B4XTyN4DyPHLKRJVw5aMCXYsm9ZJhWbPcfqum8aHffQBDUzD4tBaGx3BVxzL1EEwCwhgagrcopNcLVSdtUh3iZh",
  "key6": "56Uc4oEYi8Mjbn5xat1vR3XPjnezXAZvQzrtAFVe9RUt5ZzratkzEw3CMjAsmV3pNJJ17ER3GCVmmNnidWqUhsL4",
  "key7": "4ctM762anqbjqRvfQyWP3ZfCEWpzxzYm61GTkgUpAcTqfuDDesB5YVgcqCcLbEvSfyfkgUc55zVMxfzrAufLqjoG",
  "key8": "jNi5ZAC7qi1NTbwhrp8i7xbjFBp3EtuLgsSJZFCyuSdTcnA34uv5ZLm7mUhLQcNs5cpRt8tWzkrDuCxLAZd72mo",
  "key9": "4UTmYMYarxJHmsfRAAZoUMXrZCkkdXtKWJNJ6mkwpurUSabwN7E6v1a1ogjhG7CT4rkaWRa5q6rwCSjQG5Zifsyz",
  "key10": "5Pssn3xTkWfCZzLuJhGoAGEgfLyHQvZZoxiSMGeT3QajbtgwaFKWuXDfwhVGoeaVHVTGYUcQfdX6MB3RJZ6rPaXM",
  "key11": "2wnE8jdPRgmBuu3EziaZv3ootWWi9SsJ7aDAVqcNamxPqPhdKpVH6abaKojFfqXcVWUpwTRoaHPrJgM4cKXfcYMQ",
  "key12": "5Y4mwX84QFF4jvY1DPByZHv4Q9aiUVZJdPduTFYMWGKcrsRMrmCnGs8XTzEQKMewv83YA6LrpP3FKFG8KnM3tC49",
  "key13": "3Ps1LEUWGEqvPSDmBNT7uQWSwKQWJmYuBJwKRbbvqxqmWLnY1APdxV5t2EDz7nKjRL6Qt45K9pkTRQqPkQ8nEMHH",
  "key14": "4UeLdZ8dqHtJXgkNzpV2Au8N2SRgNyYp2WChd6bcMEuxQbpsQGGPQo7WBdenbMnkR5EdF4vVYfVFsCsaBsJePU3z",
  "key15": "bvm5KghjTP3uNcWf6uM2dd77Jzn2NTE9o6SK8CnX7LrhGvXs7YVoqm2RBfvcL2j9sDjS2NJrRGTVELK8WzhH86D",
  "key16": "2bd8C2rB9QNzXf2Tf4YSS9rg32Ze5JtvNuZzAYn14Y7W5ebKVHwhhKPsY1yJWiznpkyjGFokp3RU1p52c5xFbMVj",
  "key17": "3zTsbymPwYVeK8vXNEyV7wnBUhokrJPWNViKtLppQKoBQ7Q24QTmaWCwRFa9AxrVY5z1N1ftXF6d4GkXscm1Fiyr",
  "key18": "2jCuK8HjZwUEAHx2JDbTLyynFbNi8a5q7fhgFo8iekRaLygBbvD3dQ8ctv2yQT1kZx97HowRZ9uCxESZoDY9pLv2",
  "key19": "4ZHMWb4XEkUBk2s5ZXGWyjs7TKW1NTXRzV6dihGFXT32Xi6ywDQQkBy6DrADeir3VGGZsRUYTZNX69utBUjCBbHn",
  "key20": "5oZYoqx5FRWPF5hmjLqukfxBunJHqngpNZrTjkyidofCcUwCEQFdTKkGBctBDET9fs1gaGM8syNcjpcXbHoVezeK",
  "key21": "5TRQoe2eXSMWLVd6tr6oQDa7tByg4KMcWzgeJFf8ExzMLvvSy28dutJB5SxdWhnCaiqwnXwkjkk31ciM2xdiZwU8",
  "key22": "3LzQUWuZzfGuFPYYJpMnAwwbStDksyu4gwD7UGwjq32nDXrKE7tncx2mDoC6aCMuyQ8fxQ8D2cKqZwzL9xPdqZyM",
  "key23": "kk9JfGgMVvMtxpikmwUyE5eLPHsSacbfxQUhVbPscxQTw1yBYHKYZUJ1NFXBFUCMegLkCP1pa3NTqwZZ6tMU5oj",
  "key24": "EDVkaHHfjPghFRMzgv4YD5mFAEozxd5piRnjrbXWsznQrN9eNod93jYp81nhYgTqe9m1W1yAgPWKCuBh541HURX",
  "key25": "26hiLsrbwuFEQFkEt6boe77ieHK4pvUtxD34hgNuoJN7gnookcuZ6czHzU9K5iRBkzxpLAE5kingfSKhhWt8Kbsu",
  "key26": "q7LoesRG7H2cFKmPmKsX8yKQFL5w1L8URj9aideFdTV6otSTnaduRTYSfYii4Rf24j7Uq8Ft6QnzrVxKYv4WBzx",
  "key27": "3uZvApRRgKQPFqxozPEHDELSHidmX73uUzGFQ4db29ddXfRzhwzHLT23idqmoRWE72Nfza8xidmbcfn3vz31nLJx",
  "key28": "5p1s2MqtkALCorRi3rbWf1bBfFMzwqAju4deswdgepVd6DVVNvkyjKzckUjKK5N2xWXdpwhZ57jqXvcSeH6jB5t6",
  "key29": "2pT2X3QmCTAKuGTVjTcV1vADdyo1vYnBBmTk8WMmzP2Yy8sdRytfmzCkKZxfKSKTc9kgMhPeiDiZ3nuYRzdPCpuL"
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
