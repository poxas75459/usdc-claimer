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
    "Hyqd1BYLqkBUd1u95R849dYBSsw3mf2yFgUZTQisb4oB2y9DxUwtNkHbhiCMEY4qBaGsHCm7yHfx9Y99uy8yLNF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ePP6J4WbiJsq3vyCrtt7i4mMPNpU6uMgipQfD4LFwmEvJxT224c6MURKSEAdnpAwC27M5L1tY1scYYtgBJbdDM8",
  "key1": "43zGPEqSdmyZrQMAdBjHpyeLv9M8uvz8TnovdNuShiPcqZcFTMWaPtBtpj5t48VJnQdQsvhHd6K1hzcH9nVvsYFk",
  "key2": "3MoqzPnzBoGQJpuv7UgupKHkbnHfm2e3EVjTboWQMCqgHoFaHzbMCFoj28x4zkea1yHjDwaFqwLWm2k9fNbB3F5k",
  "key3": "64btLpVPPQeRGpzxHJ5oTz4sTMG4ZHGWqTPbMnJ3ecSUXwfjBGmYr3XWD7bgNhUVxC2mRPe7Dg4XZsCTJdzNqHqn",
  "key4": "4C4h8n5jLsS4YnEmf9gJS5JbQWQrrMKGTSwoNhm6oSVJx84vBaUAQnEDAGgRqudf7hK4qDCjgPi8Ecke6DLxMuUw",
  "key5": "4vw9WgtYmQfYHwQoPEaoAaL7UAAPKTsFUxQSc4c7bPjh6GTFZ9YqCMeun2kY8vnqJyLManGKb8MJSjbtUpeM8Pt8",
  "key6": "5kBun2qJ6u6GffWyB7aS3NwT7HDiQKtLLn8ZTfipPjyZhUChcqdzENtTuqfW4eTMU3wdoBr4ubDj9wsjJM4ZpLoK",
  "key7": "65yL1isKd5XMY1DKvR4qJcCJJX6LtSo5uYEn3CbPTBGdH24jvaPQCNmuWBdcD4JUkAzvr7CZRYeo8pgCzwDNipHJ",
  "key8": "cqxHR4dEaLHCgWBFWfAMHPwE6A2YhQKX6ezUvStxPHW18yzU6PovEJBbku37gLzJKKEiGK9DghkK81G1f4dDFJi",
  "key9": "63LyWLMhpRpbE2cwHZBBY9xAucmfBchZAdBH9wXjPFjcSDcwxmpjsdWABrMzw1DYZF15SCJRonHesnjcxQJ95QHU",
  "key10": "4rS2oJ4LD9gF9VtxoJnL5s2nHEuibDK7JdsNn4cBZXwTjKFNr3prne2ukCfACh9uyXnEMmmt4uniVjdXB6ye3gHQ",
  "key11": "4S4cK6v9NGrtjvmjWzTrJPtQwFcAoDHx5zUcqMMzhASvJrGn95VkXyhcBGybqhoHxyShudwQ1ZoRNGwaqtT5uzC2",
  "key12": "Rd8BqcKMp3BdeDhFsw6UXYcMhoeRFH7iT7xUQyLbqAGMhpXpo97jdbCUXann6HtDi2a6geKqegtXfgV6naLgaQi",
  "key13": "uRYsBAKXD1BpkmvzwkYE3bY5J6Y7k52C9xkF74N95Dz6Sc6VDk1DN1Hrjwzg2tTdbWZWdFqLKvQFkngj6KzbfNz",
  "key14": "y6KiTCiE3VWZsiddxMB68NE5SdnaJL3qDoEgLm2CpgNGgZPcmkzmzAJsNFkjBeNY1kFTjxP61kkhq2UtsG3n9AJ",
  "key15": "5HqTLREaAZkobMHQr1JbWk3DwBUGfhXvBm8DFPkwCXjtRFjWmxYTD7nwu9W8MjkK3uWoCpQBGZV74MrFtr7pUxjy",
  "key16": "4jHy1MX8jqDT5Z8r8cocgxJWqPEz12xyqjiyFXNHbWgxUiQp9wsgEyqkf4tcefW61ATYsj9MkMEuAn9q8xBCebfY",
  "key17": "qmgGXWJmQLXVaLtBcFEFyxKKFG6R84Mw33UcwG3kutrvbMxZ2gaCADdHuwP1CYQi9mPMoB99yVhbBUPsA317HW2",
  "key18": "3EwFKJ9T27vU681XrRPgjdW1PtVFPZpgxjBugF93d89NAJoyvWzQiBSjVMKhV25YBMGaZEd1ZSUzpTgNoGKBPmW4",
  "key19": "3D1qBoHVLPaYb5v1kE2xtuCbxXmpBJdHFdpVm4S1foaRaS4fbRus9mz5v1MVzj9jsEPaBJFU8Vfo6t7XPoP4uQPb",
  "key20": "3meENTvJifbFcPP7nDKLaGpDrS7xAkauE1GUQuEiLUjZswZPfFojexKFTDuj21WTvQWrks3JEZAQqnPPdq9ZfvGk",
  "key21": "Fc7YJr3sAbXXFpb7TyFKBNzeMZ7c57FcXyr5468rtsCANjV6WohRxXCRps3rnnszVRnNoxXpfhFjTNZRVv5AYWz",
  "key22": "3LRn7HQ1Jhc6HLm5fUxqGVmUWUNvPGsLWRY1DgAvAQPKmsKdZcB5cuB4Nnbijb4qtS7v55FGTcuVgVeM9m33ugG5",
  "key23": "bCNsVYEvfSsPHQg8fjNdD5NziayevNGgZDbsHBP2GJnBR5nMwNFSXY6B24S2XMGimHSQSn9hArsJtNUDp2zfqvz",
  "key24": "5C4cZLMk4WSk5176e9oDyhTgN9CYK7Vquhz1j2DeXPJsZCfNJ4ZQ5gXZ3K9W98M8Bj1SaYYYcARiPX2L9WQs6Zd4",
  "key25": "2zSqTt9GV4fr1SRV1RAHemgXdecchhYyFj8c6rmaV4CrRdZXSJ8Ff1FudSr5LnDC42DagVp52E3WERMXe7boA5eq",
  "key26": "3ovLD83Hs3HXLbPMHkL6pZTELBuTMgSSmqPpjNxQG7stvvjZCor4iyJZp7VVogdQBobgAorjVa7JCXjS4PJjsX1j",
  "key27": "TNAf2fjpzcdAq8TsYyBMVjPYxqEWNHPrGKvqKdCB49BcA8STJyEC7xkxHDyBDsDZJxcKHHiDtqgaHnzGLfJXXyC",
  "key28": "3EQWyGJ3kWnur7LUiaTvov7aXC7eK6eViQkarBp7EaoXrh6Xdj3d8ZWkBrXBZxrMptjRzYpyGTM4wmBf2cEzyBqV",
  "key29": "4JZVB6t3jxnDwPzrK6SnqAYUVjyLRr9oeXBadcE63zX9ECWKuJG7tJCKwmNnXJ2Vxafsx52wsyxTcqHW4LHguJJr",
  "key30": "5rbDXDvW7weZRsc8rDCDZR2oM8xshuQihWXBVjSG9QHse4JeEivDuj9EW5rcVvWZ6Sb9WLCQRfeRzdHK1zWUoj9S",
  "key31": "4FXW5fFnxSwBgkHUoCYYPXwqsZ8xWTNwNS5pyp6TFahS8pr2HQzNCuQgym9A6aqfgtrgdaZBd7VQZ4RPJuMLP5sy",
  "key32": "3YUWLRVfAYXprqz1g5aN1o8PhF34HANu5jgHzPD7aAc5MVB4cadkcXKdfqoqumueXUiazWC8dNfc4nPLcyzLjGj3",
  "key33": "5iNwJBmDsHtEm7LT94YurxULZXQtqRNHCZ6suiynZEkQapzkou6TWcsp39k4pvJVh1QJzqCLyerW65izGwLndG8c"
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
