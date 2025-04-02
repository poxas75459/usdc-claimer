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
    "3PvR6eJLqFVh4V7MuGyNxZiUCWhjYKcsTa7pLoHeyH4jLUUUsRt3htC3ffQrFDKMWoumeEXM65Gat92wJbZAA7CH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ynJ3B8sPZRaU6XPuUzBcXsChYrVqmNFqwAiM2mG31sYPS5atgYd71UvvVWKJLsDWMpeTJrXeUKY1b42uK9mYdy1",
  "key1": "3qF4g4NJDE9CzWcgS7ZZD4mj1f44FdRjy4dMW5iJfRs9M1e21a23Dk4HSUvxLpTxjKewmWe6Jg3PjVnBcxoGUG2X",
  "key2": "5euFMSWAc7tX4kTTMqkf16P44HCf15pM9q8WQctdCNMx6SrYZBV1XJkFeDqLZ5nWQtDmLQADEi3xWxDxUAyoF94P",
  "key3": "64YbfipgQmVoFQpvVq6ZEdKsHhDQVmkevptkGKkWqf8PR6LaPdnL6ZTn5iT11hsCe3ZTLNju1dHBGFENjoeKfMoZ",
  "key4": "4QeWqAcPnMqvbvhXpQptvdZXRfiBbphhVBT4gdDuzL3LbiwvGDGRDvaxj9meez3sq5Fb3pEaz4hziqmPCvbAbVw5",
  "key5": "2evFNzSW361rRcTQdo4rk8hyiX4cFRDgk4ywsXTYWhmfUFcwNCPj4p2qNuG8BN3GLWBJLzZaMLh6FjBuoJHBY972",
  "key6": "bdb3v3FdtXGDedowmwLcMiScBJ6kK7KWxCpujQtDLf48yDronMCSof1WZDx4NyN4bHe3efmVR1VsefA2vj2fgMb",
  "key7": "5ADxgRg11FpTGu9ymac3NjNFyM7y6NRUdo966u939TPswTDFewYUKXDVrD79CMAhJ9aXoBqBcSux2wKzRSTAiN3h",
  "key8": "2shyn1ViLoHefhLZRKeqZAnF2xN6sYUw33f1KREkkn3hnCqBxka9NSZ2mhVgfbgTrUQKtMB4tfPaBgAEbwByaowy",
  "key9": "GMyjaZudW4LAh7UqSnkYXR2QbDJpWcunKimYpLRMxwg5SzqGsEJoLoeczirPP3NpTDvAuPxwVMGgTn9YCBdVdgt",
  "key10": "4SUeqgeLNHbCLovv7UcE6s5jJnUWCz7SJmxrfjDSQt3bC2DnnMAx5zoKPocmmSw14vWVU4HrD6jnJWMCPCaHHnxg",
  "key11": "fiKNz6ckRbdypEBPNZQUeEcsURcsAKiCm1CtV7HsREkyWhAWL7QRJDjXW5FYb4htd8XgJHki9DJ2Caad31FLo15",
  "key12": "4hXK27bbK3vs5cFwTPDFv5qHfkRFx9JRXk36tbHeg1NPNQxdkRjLn6H6eNGuSafN7bVkrhnB5mD6NV4MRefrRsZF",
  "key13": "4TiEFHBEEThFC6UFLHjakMp1vWE9ym8Ys7GjJRTAm9PdqF3YNcHtGRYcKLBtViTxjKzV3qjDB1kWuvuVJDjHz1qS",
  "key14": "o95DczwgAJw7dXFJ6K2CFdiYLCkLx3SVxoqCK8VyhJEDwnqRaMrsxUbvwebEpXehgTdLtTsTeE1t3CLM9ZayLDu",
  "key15": "4tvJkSJvFZBjFqMH2mz9azT8W4AmumNF76nSUV1gktqS9vgMotGkHK9rLRRtonL1ZC5z5GZzgMiM3ud1voTtSHxq",
  "key16": "5xYtXkj4tAHgT9N1d8VbDLSWCpJ9i9xUDKyPtLNz5GGJocu1mDK4oupWbh8cxjY8RDj6pE7M19SwroCE8JNTqMJu",
  "key17": "2UPNbZWBmvz2738gX4BozCK8xvchUSGq5cc695r8ojv17CHhSenYVn9KPHt51Lsmk341zmVCNBbueSHQiDMs4j5p",
  "key18": "bDznLX3Xmx6ep5oq1ktt9Tm1d8qgpKP3H3mZCFiC7NX1yfeguNk6fQYmjM6PqR32LR8wkbsKpkLF2ozSYcW7AEA",
  "key19": "3jtbM4eREPTiX9CWpBsbsHFSch37rLURwqbQR6i5EfAvNeaRsLgtAYMWa5bZFF6VXACESikUoTHES4ZdTXYiiXsz",
  "key20": "2mJ3fFsmSDmtSgMkVB3JjkMFiRzLwxiWXVudxRsgt3h6JrmeFRkNE95efZQeBHEJyCaBU2VoFK1x9Qe1LxojopAA",
  "key21": "5AF781Z4u5ZitFfRZs1pAZJj5uJtk2G8PqK4Mpy7cjzxMvW8rEL6pXwcD1aohPaps8UifJAye9b8QjW456DfAD6P",
  "key22": "5nPEFdyMd3Hoh8sXyAKctDXzTMhLLFHKRTpZAeeZVpaAbvcpkQJwYAGZhniE9s2atHeFV4tfbH7qkK4H1kgJ9sBb",
  "key23": "5PSZSnrypqp5ykGqwfKE8P8Fag5oTnVg6TKCqimshgRvbTZFg6HwatA1Q8MTnUdpADk7XDnFz5PdAceXaE6Z3uqi",
  "key24": "3sP5mE3Whdk51EpcZsGvu3CqfANW3pXbq5Zu8HJUV6MUDoBodKKJyqHuHQkcooYVzHeCupwJa9RyFBATSkCbwi4e",
  "key25": "4cwkLYzDWd7LCE4QYZHRBrsufTvSi9XuwPi1EQ6o7aTatujsjtpFW1YLHrbFbXoTKrtDTyqyH732gDjAjGmw8J1v",
  "key26": "4pWQ8cY94qxNq2Q23vp6DLVEGj9L45WdEjtDvWgYG9AgotA7pVsS2ABfa1oAhRmib1FoxWnspFnMRAnGNTTdnpDo",
  "key27": "5DCBnPTwQFiZJs5vf9VofmH78qWT8QLBE5CjDeBMRwwJc17KxDQJp8iHmYNyTEB3C7WdHmY73HWDXNhaCYtcDSAa",
  "key28": "24ttxPmq6b8UEpZvgASbZ3hEeVi3ShZxoZRGVB4R3bgb6aaSXEust8D2aWoizmEswG5QLrXnT5njE2Qqs9acPSus",
  "key29": "2EK8AzQsW9mm2f5NNWEVob19o7aVJa77UEyRrDAEnFt4wGTsuNj4dQAiEot1eXJPSuWDGaHiFJuSrU6t4x9BXuS2"
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
