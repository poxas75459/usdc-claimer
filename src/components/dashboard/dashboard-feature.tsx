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
    "2ixnjwaLv2Ms1cS8doTnZjkNEPpe9Le9gnKHH7FnhddgdngQpqGYecZsTSwE72a2Ch7eVJ45gqidRMu7LntRSmHA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RozE4dchnjCgV8hS6S6E6JS8iJqZWV5zCpc7XTJkshzaHWpKArBCACKQEExGudwELkgCi2fJdJRUDh7cj4KCSfR",
  "key1": "5q8Ezt4XapE75nGcNTDpj7m3ZqjQtJpNQ8PhWBqaMupRhnenTDNEgBB597NkTqos56hyq1jYJ6RmNxgQLHStHa7X",
  "key2": "4gEqPCt3qFtHHMg35TiCSXTgD7iszNFcTscoU7CpsWYTX9TnhtZ4mfGx8Ewbz3A4icSk3QmbpzWbfdjDjC3p5EVk",
  "key3": "3q6fAMLCX9YcqjdRd1TPq3KnBjGYtXitv2MBu4KdA6mxKjj5HCUL5Y4qVzVyfpSALJ5QYKAxTuinNLk9NWyMMMzY",
  "key4": "5Ccxk66JxDoutdYc5JuAJY6gzF1uQ9bTncdDRHBWiUEyvGLSFFFVUuGt5fgYjKHQJYxwMCmcNaxLjJP3bt8oDF1t",
  "key5": "21G857t3i2r1uJe1C6hS1kbutcWxRqrEoNbgHSLYMTGeYi8mdy85CXKnZ5uP9BuNm8avvmVaYPP6DzsvKThdhh4X",
  "key6": "35iVaMj3RhCgeCYKpKXt5CdCK6BEXKLjPDPmLCbdh7Wcdv2K68ocpHWtPtyxchVG4eUGhNQpMSJGfzRrj4XVqCSa",
  "key7": "232KWgxwc84jhDvVrHczjfzJjiAHUK1yyxbw4ozJn6ooeX1p4BbqnGphc4FrUp276M1X8VppsiNbYG74D6VbWhLc",
  "key8": "3GtyamxMVfBBUhcx9LQwReDuWE3JPVLJu3zuAQbUW2siBBduhphyT3wrJbfhYqm4cvrt35kcysQ4f3o5q1JNHQ8X",
  "key9": "4kFDSVVMDhnPpBsrGvD4K7HRFNoi8CBGM9oeu9AG1k3sWRk5JBTR61Xg7A5rRDbStrT6WoHku8vPrefv4q4zZajf",
  "key10": "4FgocAnzd8X2bZd2NQW8tFTkYzfRHgXAAc3EhtQvNR36zXV4kpmiH8ubJsXfsBUfj26L7GxD5g4Luuv11wQYgUXt",
  "key11": "5aBGJFwMEjZH6nLxZzsnuw3H1WB6cpMYBCeoezDspmka4y3p8mZYvJxvJcCSBLrTzYdoXheNHXv7RxSb1EmfyESk",
  "key12": "3sgD8LaYFhG4XkGDKCsfWT28fG4VtCGG2CcTYjiPMENFmuW9Sb5srYHJ9Y8PXTwxdpca6TfzzF1JXkqwcDfpE5dN",
  "key13": "5JvHjEBTkNqxbx3856VF1bgAUkSJDjfcZWjpfzQVtD6thQXAdzpqViXMU2BQeNjggGqqZVRKuSHm6NnwKii7Rn7X",
  "key14": "4CogpJf9cJwEWLVGU6xgmZtQP6oZA8bmEphWe1LPzBVia5HmjB5P6eYDU5k7nwnSLyTg41Go4YHNGCgQZ5PtYjdR",
  "key15": "4736jjrMhJCYbVFVaUJejYX7pPzTxKEvhyvufw246nDEnBcXXCv97sYP3FmfKEUiCqLjcqjdkpDusK5mem5gcVTQ",
  "key16": "4L3zDcmrrtcxLSL1rgm59cXj5dqWkGetDJjRK83ib7PRfzC3xbDXC4iY5bcRKD8ysDhChdMF2QzaBFW88K4Nu3QF",
  "key17": "5wuvWoAwYChdhVTmiEWLNkgAa7VJAQ6sKZDPYk6wwtDXtYnXSmREusiSoPrNiMkL3gR9Y7CH6KavnNH8T19K2HUG",
  "key18": "28vq9QuskYg8FVB7miBEYtTaZCn3U3vtZFMRbCmaVEBNyQgUgVw83xW4FdLdD5RxxuHDdRLywtq7Ei3yx6kmdMEn",
  "key19": "3US5fvn8AcD1eF4XfCeNACjCcyfYv4XTs2TAVT9sRdGKWUoizvf1mj57YPP5V7KveYimt7NpuDrn5zYjSx76wXuk",
  "key20": "2rLZ11WRpKyFvTFbKsBFtRLtDojXJe39UDmrPVGkfEmje1CVhMxgnjBW49hSxa5S47nAmMG1TjxMim1GJWRUp4Au",
  "key21": "4YsQAiDhPKxMMzUAmBBsghmomTTpLD4iAeAXfosTL9GGv11n6T6dgPhnh4xCFQaXoKmc9W9c9ApYdgKD6PF6Skzg",
  "key22": "4TmsnDfTq9bLtB9jhzPbjQpkXZjATnu1XgS3V61FTg5UijvjFvgzbuQoFDUo4nHMy3bqMzqCARK3YpyaK2DmpAX4",
  "key23": "3URHt8hLtkb4TeMK1vCUPqHaCBTG8suhLcSUfToL8DUCzsCinugpxbiDi7Lqp4ytbUBcCkYYsb7hRxVdBwi9aBkG",
  "key24": "Pg4SMDEQGRNte4tR7LGFJSoo8kPUXavW73XeqhHiZnBYsiDSS4poh5JsXi3KwoaTD7zHE5PE7zwLxzq42pzbdpT",
  "key25": "5QDQtZvACnePtNZERVUWJExZ3Q7Pe7w23Wo5pCU6aqx3ZXBMsn19CM4iiFbndAG6mu2jen9N7ksRSYwqzufYHwX4",
  "key26": "5Z3h7eep8BAu4ffEmfKjXSYatX8exL4V6se5Gr1EARvdH3YEmEmrgm5scw83CkrSbwUPdQH9v4cBNtACb6ENvdhq",
  "key27": "FqYmNSfTRcAmjZBjJf5fwPyepCJQq8J2pEeePCumpTayerqv2MoRRt59u4bUcZvwVYNJ9aotVUnKwewN7RiZEAz"
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
