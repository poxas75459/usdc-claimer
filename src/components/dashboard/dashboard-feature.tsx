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
    "2d7gsMPQ2Rd6Uv1Gce8Z9kubG3BEwRVHfydSw8Qfpx6VoY9frmcFBFc7J7iT1AEKpHZb58YP9vdeQySUc9VL4dC5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63CAaxRbLLN3NyxTsABXJ4ZFw9uL5cQdjacccA5SjQEynWQtRgiuMeS6Mw5SEKzZ5FDbmkKSH2HNUdVKMPJtQ7Xb",
  "key1": "3wmLMforEVRF5TpnLbRU1vjWnhaX3aGdpvMaSXsPmHbDJXu5TuSrRBEiDE6vhVhTcCxFzHyCcyaaJfzr7UYMVZST",
  "key2": "f7SVHfBvHL8utMTSbyPHBvcQXMSFABkRyCCYY1TjPHAiv2FnL8PqxnXauZquCAF5a58FjqCVUrYhkzY8p3e6tw9",
  "key3": "3qamXj5dfCfAhiP8D9a6ugjzbUygepYxLeaJQJEU3V7jSR6AvCr1uyVV3T81KdHqWQjPLr89PaAxmB9JvwMVnSc6",
  "key4": "3F4eTejBNJVEawBUib4GeW33duXLNxjx8rnTZgdn79F5huNfkhAbTR8aBMUUGQSLEb1doU9ayaPRj8A3zzdnP5jq",
  "key5": "rJTaiVXRCPhLmHz4XcTV56DrqX4tWxnRh1qM5V8SbsnZCrvkEMf4WHwnxoNr67YPuqFFVmNdwV8fvWC58G3LdcT",
  "key6": "5UBar3JzWuVeKoJ4QwyYK2LY3NWXnRaWh4afMVqCXLYpj3dSq5fdDx543PdfTdNWnQMYVzc9V8UH4GSZiXGgypmD",
  "key7": "5aeXRBHzB77wfES8JVj5L8g6SMNmHVZQnLVmhDB2ydgH61kUJDwkCePdkohsqYHk3yv4TwxaWQ362x2pBrqLNU6z",
  "key8": "3AmNPcagU89zu1Eiu2ubf9AHFt4Un7gMSikK841XHXTQpteWYYk2UWfrHzsPRhypcQKmpHBBsBdWWAt2bAcAYnJA",
  "key9": "5ekSaG8GjEz1v59xgnBM4C2u5Qbz3ALUab5Uzt2RTU6Zx5zbkrWK5AXrcTcaE84cspVqvEbNSPoKLCrGFR87hB97",
  "key10": "4azrLkwL91Xn2NyccrFtFUcjsQBuJ4Stgfc2x3HErmFHbk2ryCFL2DuNEektoCEGNFh3TSfzttJ8RZzq3Wf5qvkF",
  "key11": "5Z8UVLEs2LVFbtJ88XUL9dfk18kQVFDBJGA7E6s1SG6NwfTPFTC5KXUPvp3GEW9kRJ2zaYB4AG2D4weKMxxFtpPB",
  "key12": "3k2yLsqc3HwggK3YNpuqjXjagsREuGoopusUdx1xuosEh1Zco3fbESHRTD2xdS89KSQw2Dxa95H2XheeeXgsB6rE",
  "key13": "2nF1JRgEiExaA9JxXGRWDZh5oKqEB8A9xsdihuosBWz7d5LWe7o8qHaXQQe6BsoS5PNtSAiAwB7yU7FEfFNZH3bA",
  "key14": "2yVH48WX5Qtar4vSSz6FL9rvAPjfCJoPFFnoAi8EdVut55uU9yRdttEat7MCn77X56SmEuEDTC82zmP4ESAdE34P",
  "key15": "4EonQVBfrouTmkwFVBpjhQb6aboQHH1Miq2cwkbkHTA4L8rEXetaAPt1bRofayKgLaQKx6mCKJp1znCWbAnKDVcT",
  "key16": "CsEiJ2Ct7tpzVaeSr5P35qvPk1qbsfk6vhB1U3MPRpaG2toURZNVmT1X4Q8aTRNT5Uqz19ZTraR8PZ3mG58yQqs",
  "key17": "2Hn8Pixu1bCVvf7YeRF3aWNb9NDw4jtXxGMagUTo3hdTzj2FDTft7o5KX6Y1d2famZWo1TbA642PksRey92h13Tx",
  "key18": "5qy5Lp6X7S8xcnX9MFQjRJBXT3EiJ5mW628Qej2NkaUtN7tqTcWCbFDLrnSHsuaYwoYkUwNqMjxYFBfJRAAwSEw9",
  "key19": "4WcZtyGfsLztTiMtLz8yVcGP6m48ATPK4d4vqdD5oaiatNdfEE2EwZkh33o56BdqT3SyPg5hKzsr927P1WTKt56i",
  "key20": "Hg5dnGn2TE3BosLbSH12xjXcTaadDBtxutTkXWk3DmWEhkMhrYFySkpZ41wM4nqsyzosy8pTs1sJHRrzbzjFpYS",
  "key21": "2gjB9t3o8icySCBAP3sHRQpgS6uavrce6ww4bpG27q7hfCvdM2WwXPzkKYrkyQEyei1mrxry7xw7ghRXyrvMP5pJ",
  "key22": "4PxaepHTDXRctYqYDJbNDkqMJSPESWcR9ZKAqt4RFCL26Lh3KYYQ4zaDqfcTz1mCWEGkEJjY8XMB7859RLF44JDx",
  "key23": "4sCGH8h9zWNauRHhZDvxsbxCN7eHjFMXvbJk2qh9HRjrj6eZ3DtZmtMu1JpL26C3DHvdMP225z3TEb1xdNmjvbqn",
  "key24": "2DKSGzWCL7dqSkFdegQEA8PiuA4g95cGXMqNcJE2tMrYV8h3ogkjxxFdkJU4heAFBzbwx1nYdww3qzk78WJdQcKJ",
  "key25": "3HmmDJm7qdzZ1VEuiGJh1VfgEVcz8L97VpBGjBPt7jfm1c6FA5MJ4zwLwArN5KywjGZRkfZ6qY6xi965inxfQ5Ab"
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
