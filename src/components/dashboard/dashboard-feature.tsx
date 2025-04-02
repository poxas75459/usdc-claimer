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
    "24GetGQ1mSwMceJHnb6ABEvgbsBEJwQnonzHFQqGA9FvLVkGVemvrV33yN4uty6Uj2An1kyvfugoxmsJYuEynuTx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Sto3Xa78MpWD1GNsjBipb3obb8AfYj8fQ8z2QBj5WWMiausnBbzfQHbzba2yPXe9Q9P3mFhrMpPxTVCrLMBsZNN",
  "key1": "3esbz95PTdfupktPpFDcuJWTxejHNGmKRgCcxaKxHWqzfPjS5JG3hv6FNHcGLxoswKL7Yfhv2zzieahuEkw8G8ds",
  "key2": "4hY7fEBYfUQeqZxvV2PFk7HbuTToY95cuiE1GPkj6q7EL4gky1k3Hs3CyMRjJ5RJ8swfnZPxDepX1zUGWNh2dnQq",
  "key3": "3mwaD5A7oMzJC1GV6osPZgTFULgZ5xSj3jSASgjj6yLqHzT4A2Fodjb9K2Lrv9rpzxUpw1w88TAvZhQZWnYuEecH",
  "key4": "3KPPTaM82smqF7TGEuA9LGu1PJfWCRqmwcc8Jzp6EkURnazR8iAi3LrjxxS4Kn6sebCX5MKYyJknaogcHNhtnLPC",
  "key5": "2UnJQZbKqxP9xgoFkBroqRek4BJvJx36pfrNgp1VKUhBvzRmH9sQB5YoeupCxmDi2wDWA93WtBdZKFrZFFQi5GcE",
  "key6": "dT9F44wK7cww2UzSrCVBxjf11mmSu8GeRw8JqvQzcGeWhEf5135dDbFeWmEhsfapwa3agL3vj7sjZiYmo2xiTKV",
  "key7": "eGPAfZ7eKQ15hCJzV2Fcq99z82o3kVrSyTVtcATNsTugyoeCjw5T1vLp133XkS1EmF9qgmn2SikmLSQUr5N1aKT",
  "key8": "4diStCqx8Qu5HRBiLxnYp2zMjDyJHRNTRf867Nf3QQeAXhXp83ttqy1sP9zqoHKSp2KXdrrRoDnSx3kJF32j84f9",
  "key9": "39hGBABD7k5MWeWjRXG83WSEeTzChSuxrvSDgUAtLJkGRBp1r8usnTiK3DGzdL44y2zBu3bj1Bwg7BXTQawubqJy",
  "key10": "2dGcLgpeohCg9LiMb1punEFF6BzUBEN6Cp7w3QHX8UBf8teGLtyzHednk2R6vTnSriT8fDqpkyuJsQh4HjQWybMB",
  "key11": "3EYrVt1g5vW2RHnmyi3oRrgm5toTPbSCFdPxctCLD5F53T5dZTZqAhHi2xz8tb6hy4GTehhxEFX4S8HfH9moberf",
  "key12": "35wRUmBiTTpTPhRdw7WzA37yDMzkFPVwwFp83W2mU88Tvkkwbd2xpoNmrokbPnxtbpLrRoc19tbXUM4RmJcFaYYN",
  "key13": "NtuSQfKGfPVvaskTW2uEhnEpU5C9mQfEgp86sMm32TKCcHRFyPGRVsWYNFA1vRipVFzHjWKdbwzbm9vbzM3tUis",
  "key14": "42cdV3xjCvD8ofUBuYEByjQPbmD9s9Mghocuo94MVG85rZoQPCjzN27AhjUPHe6BrxhTqsTw4TSAWQ8uQ9VyxYEw",
  "key15": "2ZD9YCPPynAG3Kud5YPFoaey4v1X7jMS9WbcqKa2WAnhmHbAEZZQFB9urQwvehaRCnq3JKnRyZi2sfbLHS3rcxV2",
  "key16": "Mc5FpNht8RDAfoX5ME3zVymYPt93wg6MfcomnKVRPTGJzqn6PFpubcWrKvy3DCLc87HTLCAq9VNAEfksHZq3KCy",
  "key17": "3pZYtBHeCvyCptodaEBTsN4NxzVmSpUysqgJ4zTPsgr9ouFrx9kKNLpPQ2ra9wmrWDanhgN4pCaELrNj5U77ZKQL",
  "key18": "4eHc3Jtc8wpkdqTpbqiGpKzBWxGGZjkFp9TsEwGxr2xkYyfAsrCkvrN7kynsWEvQm25k3kDuoYrpPSqoXNmqQF1F",
  "key19": "5ijPbv47gy3d4bRZMu8DiV1pJXczAXCcp4ekCqEWAG8aHvBiFKWd6fwoCXSqs8cVKABCiz5h8sRyasF7fwPwDoQZ",
  "key20": "3kgXCuq8LMCvHmvtPRUHrAf3f2E6AsnaxXuvKnZNRCaLYY6YeTzhk9YDwo6kh4TmhU6wo6FqHUR7z2fJGokm3dUU",
  "key21": "64cAkXo49ov9MXpDkaFMBgkzSqwmoM4i4esh3K7PAeijNF2dcFSZ8yzPzuc9J4mSqBtxcNBwE4Dx6cZUuknuuWh2",
  "key22": "5zw882ezjifSDRE4yrLwhDQPPXkVJrZJ5U1mZcksfaZoaqtEJuSBtmha2XEDXmqQWnUUCgMKmiGC8quqe8Mw8cHW",
  "key23": "5KuwFzU53pgzHZfd6vfLBha9ktYmfZSF2MaCQyeePm9MQ94QeWJt7xFK5gGbzbWNe23a7h4E1TCCGycaBhZiCfhb",
  "key24": "EkgnEZX7GjxqCG4awVnreXPxLTPZy79XGFS1L78k4ZR6BcEGwim2dtzDrpxUxVGsxmGcN1ExfzprfNa8gxE1e4r"
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
