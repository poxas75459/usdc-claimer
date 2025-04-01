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
    "4auKkaoEcsRpD7dtusAeFE9PyQhdW18rUctV5c2osF7E4xF46q6LuhhGPhRquYaKmJFdsZrEovAvGCZABsQjhMgV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gk8hRUmLByUZsdxNnAirHYxbPb9gj48TzhgBauPmk2iv7zUgTwBURo7iAYVSS4ffurwVBfhs7Z3bu38YeS7THdW",
  "key1": "5r1pU45sNvA1E9V9RXVUpoihwWvAsZhKkAkzfXSwKujzik2hCPqfzprbqFWDBhjEaEK6yXzccx1rAi9oP5b8Xqbn",
  "key2": "5ibKrDPrDBF2kGxh6NJ9Z6mUdAogVukBcHnvuaB4bfbCTuYfvAHZVK7mcLpXbELKhp6XQHYEqd1Ev68whyPrid1Q",
  "key3": "JxcuBZ3aBkW9FyNmbWQysUvWtRf26iWSEgoGtMgB8GLZeir27AaQUjvCvssVJPWcTkDeGSoW2PAfnNLLetPtLre",
  "key4": "3XjWVvcAj8oXLGXhAfrspJQ55FjSEcPmUww2ffVsAsNw9LZuHDsuwCvFuJPKmkokkfP6HwEmWBHC4MxzcanfHTxQ",
  "key5": "2Jie2wTZtrcXmrAeUyp9VQs7nT4mqCuypygr8r5VmyER4YNLqXxgtwYLWqH2c8ByWgxN5vyHWC12cvCdejAkhuyp",
  "key6": "33K3nhZ58zZK5ewPGiJbJot7spkh1xbRkNP5XJAKxBBBcRVDEucKCKUrbdkqrrHJfY6UztnrpJkYBUwcVbucxJiM",
  "key7": "2CM3RGV5MqPBvmSy8a8RbDVmK6BK9pXzhEWhbgZGMyWeKsANV9cgPZaGUa2YiQu1ixtjnjGWjqorW8qpGfESh3Aj",
  "key8": "24BGJbqfDPGYX4xYGC6cdYs9CkvDgDrj7uizMTvcv58S6mnmoWVG6NtD6P5mbWR438vHjusperMdFb784xh5nGyy",
  "key9": "3PURCAXZrzdLitjJAAD1Yk97yDp8rZWTiPNNHiJ9rMEbTruFtjgHC5rxvUHdKXwZkMCW1gt58yxiAZSPnAg7RJn3",
  "key10": "5L3coqTMHu2kHKFNDkTL619ukMAw2bPo6ChLKbWaWZC72cwW83oE4hU3VwSKeLJFc9U3jFBCxHP45HcWaygvadaF",
  "key11": "4Df1PJb7EbGUUEi32yoJV2qHcsLzFWhXdQ1A4AscL6eVesrBKoD3Ta9nNRFQyFXKHNHjDQkKPwN89rYV5ntFtHVf",
  "key12": "3mSUns5o8CarHWtkFtQvXKLi3n7q6PbR6JpXzePQeu7q3PugqT5JBiHbz7H1jpzoHacPbJXDk9q2K2MEPQz7dvTw",
  "key13": "3onMMQpecuMEFJj5BPmdFLh6YbH5aZajLjvxKPPGaZJrDGUDSJT8UtNq4AuPrhgDdy2uVf1aeHEq7xygvgeSPsQE",
  "key14": "2N3Pwf9h2NZiaSc3sfC6MaoDyMD9FBdG9DWG3DmNNFLwFYjyDx3RPBAzpaB8W1EkLR7eNLzDgugmrvkmUyvyLJ5d",
  "key15": "5cpZovoJiEGDmmuu7QFYhi63psvTjP76SXPJgUYEeCiRFbv9ukEo2UeUXTBrQ8ZBixGPexwvcRwuMxipU6S4n1uv",
  "key16": "5WuhZZT7FvEMgmuECGyNzBoc993HzScczcXxUfM5cw2R9Umzqe3xDAYcmxqZre3px9VQpDdMxRg8f9F6wXnJ9mWz",
  "key17": "PFUP4o92wnhzGiM8vvqU6LeiZkSgV8Ebb5DzvWCGVDKMqjiVfuLubAEieSTNAt6PjGqCL6vcnGKT7yEq8pJxN8a",
  "key18": "5iJpgsSWniYXVQ1YQbxaPPk2Q4QEaivDpnoG6bggEhtjFZbdBTcj15A4ZR7RP9n5ri7X9CEFCTnWqEn7T7k3CkbH",
  "key19": "344tTzFafQ2NHP278MPmQbG54SrimikCYXBWE41PPgkBmmRstwXfd3R4BCG1ZUzMm33ufPD52nDQU1bjnLwRukkc",
  "key20": "5xEQoWadNxyEGKcXV7Ru2NyWNXV1u1wWUvYvFmrrBTNntiJzkPHYFYVbrheHVn25aA4dpgLPZiBMJPwkwdWPTcak",
  "key21": "4yGCgDNRB11LTRCvbYiNq1q3dFUut87HtQunXNHc8QCybqsf7gH1DZoBJFpTsM2ZgJpcDW65B5tmCj5qDwd6Nrkj",
  "key22": "3FDD6TLNNkuZ1nVmcxdKARwGUCtpFe7tB1xgpEWYigS9YWjGmMTXHpfmkBvWUb6iLyXmjUJjUcBCbncNTCRRg9zW",
  "key23": "4XFc5i6qBY7MYLAwHxDHFDxK3auhTro9FHXPR5FHWozGbmM76EH6YDnCibg8gSSTNLkDxVG9n91xAeusoz1SJBom",
  "key24": "NiDqQBi9GY6qk9Kufe2n5nFjGKEgdoECUyqJDgnDSa7XvFQgMeXY8qxfrueAWmig45kpeBzf4K2ztX1nY5aAbAX",
  "key25": "37GMMPxyJGAE7nch9oDHZSWUhoRqgTnDGbdL4vGQRoPBo1kSLLXUQWhxACaKfJ3NBrQN4VaqYK8US7MFoD3zEQkW",
  "key26": "5zZ4NdzMe6oZMTMt1WrVRF33YMc15wcZ1d6LHaKDvTsgvkQ8PYZYzgMA3UUCRkTE6GiR23SG2vVWXGF2vbfzzNKb",
  "key27": "abWSXLCCUHfVdnfM3jfZRfrR2fKRmg8ifDSrtQAu9F7WmurZGbzYDz8wzWDAM6MDzt3rCaso9bCxXrYhuzfpi3D",
  "key28": "3uU7voS73NyXPEvvLvgSvbgzVd9TtMfeTk65jbk2HcSoAePRKR7zixo7uHcNkHCB1iYLtKFg3b9JQYF7LtAr4nNW"
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
