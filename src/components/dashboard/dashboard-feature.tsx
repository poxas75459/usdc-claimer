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
    "2pTZXVSEDZacEwvvzEwGk1upuXFBcJJo5eKZpEQFUx7gDhewRuWhvPVHqGSEUGdcAu2ZwagHb7nXmuBAov2wQfsN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ptFZkgSV3sbitzmGQNDLWNzjBgRqDe6vANVrBhWThYBfN4QLfkq77ybvZN7NoHkLaoiBa2DSeppF6idD1A8Xg4q",
  "key1": "4Uyv3Hx5g3asbHfiUhJyhEm3DYVmW5bK5aRN6Jqii9LvgEmKJmwcfk988sCSVpJcPvdfmTmxn3rrTW7uNvbyNPZt",
  "key2": "4MHEvGwAy88v77Fxr4LFMx9Y7YFKxbfYSHfBTnTmUhNiepE2v3bKKi9p4J8yzAwdLaSnhGXmGYxZDZYcKQrLqjPW",
  "key3": "mhcMjMCRNg1WNvLErkqpEW2EebJBGSfseANGdBRTKuMcEGXzhagf2hwnXtiZZgZ2uZGdM3pZWVKrprHHyseCCKL",
  "key4": "2a9JdTtgfewq6Gh4XGVXoj5CX1cKugWViajJRRFLSH71gFiM5nhPMvxSeU9br7iG9yabYzXV2p3cKoUMzaFc1ZUy",
  "key5": "Jkaiddo1r9DYWiqioKtB3zxfzkbN5qyWcoPSNTaEQmRq3wPd96cEHNFnuJ3ciXDyozExujRKmqkPuWgZWvkPo1Z",
  "key6": "2DUGJBZvjovwXeoGfY6RggaLN5dEQqwYQaoPX6tDAU2NjkMGwgMxoXEHdeAcimQQKz85CYE1tykCW8omTLon5Mat",
  "key7": "5YuYk463xAEewx5gfrAXSF1Dur2V5C4KxZwGxUUaiqueksgCJTV5G4brgMNgGJz7LWvipK7YnkgudDXRDANJ4Bbu",
  "key8": "NuZFjCEMFXr4qMio1Ukw3jxXZ7ryAN7fWDNqNRG561YUineccANT3rsf7E1vzi6C98Px2c5FhALcnKLgtEmheuF",
  "key9": "mKGKaFL6t2m4kBXkJZ3YvZJnf83n2pKg6ApNBsTggrBXMS3SqcZoRn8SzN1u4xw8rp6rm5mnezhRDEwC4C5d6KN",
  "key10": "2L2yyU8dUKzV8p6Q3NW9nyPt3MkSyQVn1RvLSTmFVoC6RQHPpHGBLbCa7AKPYcQaM38fLQnBi3XyYXwzBu8eXi4C",
  "key11": "5UbRqeVEWdJdu4DEyKdRt46uEvFSbTszcxaoLwUDbPktbbPUM2triixEgWYrS2BvXAhTRPSond7qP1KxiuRHd3wc",
  "key12": "Rv6CMu1aSViXGa4V74ea7tYfFqWkWS9uGCdhMnFJkUuwEGeaL3B2X2DeP2yDK9GHZ8RBZLccfeKviGqQHHo2WQe",
  "key13": "231wG3eQWTv76HkCHFJ1M7mqZdSQQ5y5brQ59VehM31NyRMDJWQcMAtn3KJRKhftcC8JjwvFEtviV3s5DPkCCnQe",
  "key14": "3J6ZWzvavnBffbzhdMJ9mZsZyGTV6odD5Rhu7WiwBQhdaw9HGuAHbEMYtv29ctg1aLe4iDG7ZhXYigwd1rsQooBv",
  "key15": "4ryMfy2pB5UR54Uk4bmQNanF9fazffunyz4DreaqU8DXtSVaibUeqWHeC2YSHUwhu13BLU5s15f7yq5Qwb1BXkny",
  "key16": "2YUKdpcgo5Y2nnWyRRNNRvqH3g8mympyHqfss87CsRw9hWdsoFg65J6v81kiXR5M2BY9ojRJvzZasQiZZ9HQpCy6",
  "key17": "2hz8VYNNWojV6nW7hZZpVW6aVBHfx9pRM6V3FvegqipdSJeKBKdzanBYvrVntBd3a6vPFznUnpizAyr22sMr9wCr",
  "key18": "vBsKLvWYwGU9PB9JTPLJzYumNLW2hCWuXFXggzXSTLt2Xi4EaDKXndWGwyJ4U8Wz3CuKHohAebRGP3ugKBUQqxc",
  "key19": "52Lp5Kb1Bj2ygRgTqEF4TaHRYLiSuX4zJi4RXaZFPHGr5gV7C1znncrVLUgnoKDT9ATacUvS3xN6CoJim3r6BGaf",
  "key20": "sofFf9Qaryb6N67hTHJZnZob8dpmPw4Lc5NEMYxddVa5EWePmECDMcrvsffm8oGeZb9WxTm4z65AQNjwWEaRE3Y",
  "key21": "3DHJ1Ys5Dgsrg3LLAgaKMLoHk9z9V9L3rLsNd67FcuEEb1Txy4icrmkHbWRAiTePVJQuKJvBvUGqemXgvhZQvCGk",
  "key22": "2RCxgtSwtFa6Lba8FEpWVR1pbDHKXFcAjJfBvntdux8VNqspUVrWX5maU5TTLG7acQoKyoLZXbQqGbkZ4i3wxvjv",
  "key23": "XVpNonBFTct5jkcTC2XSm3Y6xoVoTL1G8ZapUuLMWydcU2NPAgBAtgRjkfExNyAMBMdY8pWAkEqA1S71E2YicbF",
  "key24": "4MwY9yECewaZw7W853nvRuTpwjVXQn8KGYs3Mc3JpEeLxVMnPEg4fMEp6ivgnsYHJTcPUZwjzUQvBwV2JWgtbdPP",
  "key25": "49Xy1ECey6NZ1VctzAahAZBZpi4Jf3ZujSGbLh58yP6auZURdnJeKyBbmNVe62mwMkArhZpu4DSmC33SFHG14fC5",
  "key26": "nrjvjWd1PuoraPyZ7mzVYfppbCxRAh8ZGeJLTicNZzRgRh93PSmjX1oDo7QF48yUfMjNF13XARdqms7yCs2P6iC",
  "key27": "2iRQBQ1TnSrKDedcjXmDKhLEnimv1SGTDNyxd4yBacCsMSzxk2UPgKKJFpUsR1Uajab13RYggnagLWvK4JMusXY4",
  "key28": "2GP4e45k6TSJ8PVkgLaEFZcqKLEcFWCesToRFiAB9BKeWWP5vQJGqSg7zpbRhpBVXckVGRBz91qMA291juZNDXSv"
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
