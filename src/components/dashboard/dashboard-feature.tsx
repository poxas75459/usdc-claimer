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
    "PZSpBZGxrCrN1epegBBFD186t5PQDXRpuE73cXsyc5tEH43U5aJC7F96szSCcLQqAy9VngfkQuhPY5dVnK3abSD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VnvxyqSDrPTZxcjsdah2uLzvwrHwG9b2DdFHGCdFoZ4Mdn2wVs1Syb6GkP6qFSRjwhhzLFBNrVqSLfeUKFHoKxe",
  "key1": "61XWEjPEYspnbxhMA1Bc2gmBQhM2ALgPB3ZzP5TYDgVdPHkZkqchh6WMrfuEmitaDCorTA2N9eiCKkKZ8vpHEEJx",
  "key2": "8U5vpCvGEwuFz1W5mitV2WTRA8GJLHBKFPb4fGSqwa3qHRtfheffrQgvBCdEj2JgJ2PQ691AMBMzZJ5SkQj9sLk",
  "key3": "VK2F7GYVNtwFHCxXzZ9yvGXKrgJgTMes61q4uXxxPzEhUvDB1Kj7dpAtBkNW5DJxYxHtVPLsGkw23yiZCAdsos9",
  "key4": "3GD8FFsmTPfK97bDC5tjfGhobXp7971gLMSR4B2czMfAnqHU6PXdZnYSwq4keYrrXiApQ1L8tEcvjzKdhif2D3fg",
  "key5": "tAPqP5CT9an5Rj7SDZ77HswvPxJ3pVc32SPLr9jB7zw4jd1mUK27eHcWp2AhSCiJQrQXQPQScjeYhswkUPwiwVP",
  "key6": "5FJttNwNpRmi4SGF9tiSaE7HkDx5JaYzTBgPvhTWvkDQEv513BFapXHYvLP4AhcpJb88p2VnZgRBZzjNdXeC8Rdt",
  "key7": "4F6B8qEqLvQfpKbcctGhaPjVrgf6dUgTUCpFReeH3nNbm5XiVYvy7cunmMKwF62G8X6QTPavBj8o5WeCqG84zCPu",
  "key8": "3XXug8hvsnq5xQCSDEdeWtUYvR3a7MmJC3vw2Dv7oMkU3NqCkU8rBKywLX25c4oKZUuQsH1RBaXBtpoVxwoMsd7p",
  "key9": "z4gV1Q2DNSd6txaxUoi4zx16CMNtbeMAJ4JRFbFmTD3Xh2eGgNixo8hazS4Yjxv4c81CoN5LuDaANE2b1B7mjeQ",
  "key10": "3K3rSftpmfXps5p7GHUsVE9K4pM4F5jrvXAZ2nrqVP5inikSo3RkuCoRtgF2gZ5ioBiGRcMfrT1r8pheSsQtQHmD",
  "key11": "3ysoSDYUwYB169iEJzr2JjLeJ8ra5VLo1rBWUCAD5CsMMC7GE6nLjbMntx2uJzHRQEVD1Tst4dChw6EzBuNxfNs4",
  "key12": "5kyEZAJ9A3kEpcYPyBFHBR6ZNvx8MAdhav55umF9KayG7RkYkwTcYfQHsVu8HyGBRyErhXP6VTWyNEGbCTV6pzHK",
  "key13": "4wfnPseBjTpdwnzRJFnbWZDt3ei2PFw4a5EUgKwX1BZEq2JVVunK5boMhhmZ1U9ne4EB97VwQ8QCc3TLZ1gmsGZc",
  "key14": "2kozktDX4rPBd4jP91GGAZUECYM2mNqaXyZJ1pKFuJ4W7pNTrBFryw6vVYyKLPnST826W46gPe9CED2oQQjXwhgV",
  "key15": "5dit5DJt4qEAmHUfqZrmu7YpZZTZujuP5DEEwzDDgV3JyaJvn5YwLE9iaKpnCRdnbZNdPnxKshbq9vRAHp7h7JKk",
  "key16": "5pYd9EVppH7gZcRHmmfeRgc6JyiE6iPTQU7iqPWcP86eLY1ge6fNkiuwFHThW8JmwyimhoiMdxJoGXw5V5RKqwK9",
  "key17": "4qtZ2EnqZEsBxFzBbjEwzaxvPyqtLQndCVQ1BgxKGG6XnRRxpQQDEqNfnDL7BrhY1dgk7m2FXA7gRVVJoPiA8U9D",
  "key18": "Vx2jzFuWWRVX6iUW5qsnRGt1R6TBtUjKjknXaSaT2JzUyPhbE33oi8o3sUPvX8LnjFgFEJ9D7qhRJWx1CyQ5xzZ",
  "key19": "BH8VnfJ33ssrH5K36sijosVu4xqNo5nyymtAZv1hpjVgZAzBgUwqr1g3g7Nz6nbLNco8gJDQ5ZUZvCdGvkyoLW2",
  "key20": "5PSoqxMaYTihorCk1S4aC76QXStBQRg7XrN7pVqVSMjiKrfRYFtamDuPt21vR32sVDEjF2yr979TLAQM8uLU4cLj",
  "key21": "2KavDrhLRQhjrLghUkuKfAYcgBJkkwbybHo5xAwuZTk3ryv3vA9zyMCG1sZRGiXLbUVeD8zchX1vxtsfTu1LXPG8",
  "key22": "53fsarSMyrsa75q5Wmhdp8UfHNcZkKmSGkAeh9HjiKYXh3zXhpyzPrg8PfZwFMhrwU7hfV9p8DgqJgQ13wrVb5Zn",
  "key23": "5Lniz1oGHBpVT6HV5dCr2SB8tVMwXdkL8yDov6H87AsPvhXHmSJrtncrkFfEmv1iWhzBfZbkZtEu54BGHzS1RFUo",
  "key24": "HNbin1wt1SdazwEiYarUzMGpPNhhjUFKTLLS1XKLntDecusRDbfvBDTQ2ZASs7NS7QAuqkNGgcVjHADEHpaayST",
  "key25": "4zPDaN9QqjAjguzKcLxoe5rEiKkC33WsFtBSAYBQnMuEL6WLtRHphc727in9LZce5F2Zcd5EBuyZd3vyPS9NGbtd",
  "key26": "3BaQk9GaXLG2rSahSPD6HDabD2rocjcbMHcGvixARbDqDTs7JGVmZorF4BSpE1aQhL1ftEqHEX3HbvRjy8mckt2K",
  "key27": "2CauTYUKk6Xr9T4in9DJ7jvVM85zprCpSY722qcjsjCmmrDceFH5ndUJ89KaTEALLgW34jLPRKeTZDgjTso24CTh",
  "key28": "2Gtk7vPmvJzWKvrpHEnFNdRp4ufMTyZrsNqo5DK3kK2ekXDmffe2EVomHi5iDGHm6eRgsetg316JigtnywgS59Nd",
  "key29": "22x5e4j5eDp3SGedfhgBxF3XcRCC4DoQ2TgXn5FBvDQg54rdeq7yvouX3ivYRoiJbAwd2DQdWKDrRzoXxzYx9a7S",
  "key30": "4tgVdkwgcmM7LvXkBXbe2uy15Tu2JitTfzXfLb7KSjeu97ntsCfQTo2J2AvptLgA4cn86quZgJGK7VYbmfs7Z9yd",
  "key31": "5RraQ7uuV21FExxnx6wvYcd751TWWd9ySmtHJrf1FGbdLx1e2ADyHsdvhAFJ17k8rTCxCSp239zJfErXo1S3sEhF"
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
