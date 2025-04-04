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
    "5x2Uo7ALwafVHsTTj9XDk1iuaAN8KVCJxqyfYrpEK5Jmdq3UH2WTtUcq4BQ3nz4eNAejbpQX5UXwXibvMvqRfidD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5M3dqvNMC7JLg4Zcwviji4nPoMLjXcVC5gq3hbR8WYKtVD84TeXkbGB2yHw4Nh3hF3ieUhqVK9xfeK6LMp9oR1qr",
  "key1": "2gGRkb86CZrCD9SdtQFfPgVLJtVNSUzdpfCoZLCzsdWgxNXKYDyzAzPGtbgFiyKgQYqkPaDSy3o3Pv218a2gaTit",
  "key2": "Tj6Es65jUzfZnN8wMUN3hDG7DL93Xjp2LWvrWEjF5q62ShW5W8mSbrB5dcS9o9Bx1naQaMursY1qEyb1UoQmuFb",
  "key3": "2GrE5JZkFjChwQqoZ4PnB5FR2gomn7zXXBS8W4nuGevV6JDzupspkTPKsFDXvm9YDhJh4G43875nn2vK6PsNFcQR",
  "key4": "4jFZtw2RNioVi8FEpjGnXCCAbHz2bFq49v6kMzX2UrpSUMTYCmcymdsb6qDmjV4SPt11RPAMKL8Q1HqMZBWFJc2H",
  "key5": "5XvQj2AULhTPmfnHcYUrsqt4f3SCt6hVfPQQ7o3QBBBNPZVweeGw7d55MjyGRU3YAU7PJABqCv3bvgL3LdimkoZE",
  "key6": "3rr3HE2f4zjnP5bSdSkdx7v9tHB8Xxp1YEjvhNYNzKFnuS6wgQjS1vBZPb5rvJszpm59wD6ZG5EE9J2FrWTkGq3Z",
  "key7": "aBdp1XwjmaySc7k9twafJbF77yKkDZKUyLnnbu9VPGjFD18BgYkeCELpVyeTJ6kzbRtTAgRnXpd4VXEPgNLf9fS",
  "key8": "2rL3eCsLE5DPvcGDnjJZAxz7KKfiErfguHDhxtt5bAurp7MNeFW8HQvCRqmRmsjXhdNcgk8ommtHRqQuVizH42p3",
  "key9": "4BPesgraQmR9wF1M4Ji9rLyKSufYfanYyxY8nThms2FwUVLyD95cmqURa7arrNP4kfDvVhzNr4KENw8zyAttRNBC",
  "key10": "4oy3txp5NkiHzJzNSyin3dhNpgFBtbWuweinfMwCw6JepnBAySBrXzLfxB8uife3P2igjSjxmLGyZXsVaV335fZK",
  "key11": "3QChTfwryNX1AH2rA9avW8mksJMZRaksESezkdAxHYY4L4pL9UXoShXkZcAb7csrmTBpf6uJ9UMdKy6NLGkFLVdr",
  "key12": "2KXozriNFDhDT5uHjZsRbXWZ8YsKdJ1qQweSpZx3NvbVvuDpwq81BLU5zmT3NkBaZPcq64pp3L8fjzztR4a8REf9",
  "key13": "2P7p9X4C214X6UePYZ6iAiVZgvL5Xv68c54npjsXWm7dCWG969DqmTHJLTvXKd7NqnTKWjexnXgUNCVB42BZ9V9X",
  "key14": "5rH3tRKUkgn3a7WGkF3yiSu8KbGFR31DwrSnpAEF4b8CZpp7z55NzBgnyjpXQ8hUZuuJNF3kz7AzSuPUYcixAEm1",
  "key15": "FC9cxc9mMWBDJxSUxSZhUTE6Ndz2J3BPztFmzpkhmCxVWk74iiaa4WkkMTpcvsfxfvZW9ADo8fiYkMkkR1mmddJ",
  "key16": "4F6VXFTSgvWm9vDCHFQwpvXGfbRfdcYp4b2hR6T5Ssg79XbKwW7v6ckXRHspUg6jh1aJswL1y9TRZQMtStctJMuT",
  "key17": "2cBfiqYkS3Avi8TyH265U39VdycEQmc4VWeAfVckZCQoB7xy9HxDs92obTNM74m7fYvQZn3yJkxTuT82DS7HYGZ4",
  "key18": "2mhJu6DUwx3X4ybXdaWJ1uhKNMy21ZecZ9b6oRLvWnsioSfuSBdDMHPy6ULdXyU1aCHpESqxPUAvcNMxQPWqXNah",
  "key19": "2VffgwAmxVokJyUkEiCGHLUMi8SkzipGRqusn8ZhQ5WaD7i4ge5Sf2Eb9qsbhAM1NiAi9myqrsPYhPj8s8ptyiaQ",
  "key20": "5cDAAwnRvbnQdfCyZv2M92W7mWDWY5oPBdC1HGa6xYmqq49idXQH9EMrESexyKggJ7iAw96zNuKd6PAc6GP2irSe",
  "key21": "4PiCs2WceKYUzpjeEywLa2pzAcjbDBt4b7BZfc97p82qXEJJkWLg3Na8SpCuMfskAjTJFGqaRrGrpobZfkiTSYrh",
  "key22": "3aRbxxZ3yDS6WQekK3YxZ7oHW5KsSGGMbf7ShCwufDDDD9erAiMEvsTyBi62Dxx9yxVi152nzh9AJxtZW6k67bNr",
  "key23": "5WpzvUkUj6YaPvd5TkHxahQuTWcDCz8HkBVeyXRUmsjhCJUTBnsTXRutbwdjt6h3vRrD6prq6Nh6GPAG2ohG64BD",
  "key24": "28grzkTWFvtQrgFaQFDSnJ79TKKosdek9qBtCMYP6iLP8ZMZVgWLLLeL6JmrhFCogomEXYk1Csv4udLNfkMzz3fU",
  "key25": "5uKmHJ36fj1qo1N84YChE936gwUZq4yLoCuxZS3d7AsDF3NScKQ6WhJMpKA29yKP5g16AMNXPWWBfvMpdCDKFSWo",
  "key26": "3US9SUKApdtjoYYf1N9P8NJopNGt1QM8gxC6eBCaqwN8rUicm73B4sdkDJUK7H1BH5BfmaewhhpiCAGBGSvb4MeD",
  "key27": "2Dnz4qsrMjPuGYTK2kmJZavFiuYvfr3GpoDCrr4Aw2wxfizyNn457hsMQq5DdsTpW5QdgN4t9h4vfCDLryw7o5ou",
  "key28": "4Se8MzA4fUciw2wYN19upBGXX48v1rGUUSyUNT2vhnKiKEc9gHqEEqRyJfTQ7KyahbqRpNG9pUCfZTs6XRoPm6hS",
  "key29": "4sBiFgiRrdHPPJqe8tT7Xtrnh42DNQdHRsspg4xoFDpoNbaomkF6RrRcsUFAmq98mWCQLi2tH9RZEkwycschyVtH",
  "key30": "9keTTbfxcoE9y442xH38CpvQ957ya6CiSYQ1LZQYEugBYSTRx1mN7sYTdWfmvRQ8qXrZbZgFWtLiUvaps3UjN1V"
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
