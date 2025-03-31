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
    "64uh8pawDwCN5B6Yibu539tCZDgxjHrNjB2a2TNfedezz5pwSkaKzwqBnbRDjH129L7PVyYfjSn1ntghmd4a2LXa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dYHad53rbdEQvPpi7sEQMnsvyLXfNVP7jmi5a9oUXzZy2nUY5CdbaYu9DPYfsdxDXxUBwGqUhxgeatnMREbxdFF",
  "key1": "5csFimzy2gm7ifEDHtA88rjNxMLEiYdA1H3tE8Jx2yngSEMWZj573dv8CYXrhitgs1aoPJe9Pr8KSdjFiaNZ1GvB",
  "key2": "5R9diSymgTp3EJDEoYJKqRQfEm53SjCsk7oqemZeL1Ce69K4RnC4yXp5EKNAFXd37dKwbkT91AP8Yx33fVaECtXi",
  "key3": "5V2f3vpk2S8eEMwXCiRNYVV6fSSBwtoo5fcVCvFJuM3j4k2Z7PgXj71LnALK1hUcPKhb2mfvCEdb3LCQgaQfB1Gd",
  "key4": "4E5JtsU5HSm7AFMs7gbFDgVFw3eCprVtwykEygqkjcmXQZ2xxNBX2BLwkKpbChuHFiHjYFAH6URKk6RdjXe5nawW",
  "key5": "4mP2qhnzTuEaLDMoHbb4a8vxTVZHwhQHvbgHwiBSLsBnwNMHpmD1TVUfqYEBrfhpH2eK66eCXf7VTvSfrsQB5cZD",
  "key6": "2U4nBm7Q7PW6LA6PTG7VyEysuQvmfKJbo5kCB48evV9SHJSiuPTYsYVXLuooL6hGw4WeSndBiBFwJFAjQFLy8cjT",
  "key7": "3eES3XQYaDaXGarqmcbffhcEqHJV53TjP6oAQ35PffzNoWC8Bc1dqvKhDw7qjHgMF1K1zCscb3SETVQJxPK3PVNn",
  "key8": "33A9fTmw6UaDq5JeHJniy9LK4oYC6nNwh9EzAYTLT78PXXPBM2xoeStRvjAT48xWq2MzqCj37zzkVFAzKVhLxUt7",
  "key9": "FMha7LcfYDDJehwpB6yJpevHcTfGtFJhWThUEtrvf33r1bTAX1ujpH2sXo7D4u4WZCXE5NHkVz13LVwpikCjWAc",
  "key10": "1nbPrQUz3LWa8c7oMQoCKvRQn6uKbMLhfGpLVFS91oQAQfzVHxi2w6LvM3vU4Jhbcf3HXbLCq63pYktA5BciFJZ",
  "key11": "4Mg4YRgSaKFdhrTsCUumEpdLLbKsX8mj7o2v4ekLcteamqPLjp7YNiQCN7J7n8XkPMrcqasJE7W7bWAtPTjsfZQK",
  "key12": "5r63S2NvywFooMzrwqq5R24iC1uS4T79kCY3iFVsPWWphR4bP4LcQvN52AhFGpfsWJvFV9G9ZJxudR3u4SHL58ah",
  "key13": "3CgDSbvu1z5Uv5kXBpog5MaYmYyK8DafGMXxTjQ8druSyCGK6TTCommcYZUvqTCQ5RCJ82QYEpdgJzpQ7geCgvUd",
  "key14": "2b45zGiYM6xGqWG6H8QYBw15Zzt8uzHnPNYbeC2GV9yBeEitbfZ9ptZDAn81EToRnUbKAv655jPhVoaQegVzyJVL",
  "key15": "5bWbmxuj6HKDHkEqCVAy2MmHc9oVmPd2pTjMEQA4vJj5AJwpG5PwACyFxJ8ujsZADSu7WKD3NDjYWvDWg29c8E5Q",
  "key16": "2jhCevAk1MHbv91ZTYDWoMDNcwkgExZmGFGvXkVRFfCL5XKxFJQBYUv7RSTUv6Hr8X7R37uShadNk51TT52gkwQc",
  "key17": "4Je27SemKauiihRm7fZygsSQ8Hq8KnppEVuQ7srs3fNhSGqcJeYdMd41UWzPUv3J8f6E93AVLjRYvuxSYyR3Nyfm",
  "key18": "3bYuau8mBXJ14yR6Jbjpd23AeB6Yf2RavdMpDQYuNeS5Ng7n6Cc5EdATDzHWSCyWxjp1PF8gFLxnf6ouK1tP3iYC",
  "key19": "2RGBL5LLqVdp9GH6sc1B7v4k9WNCDTkab8NMjG32zFfdo5f2CSymp8fvWHcUMJyYEgst4KyiAzhTNmH7TpcUtz8M",
  "key20": "2bszgcxDnMNrJiwvxBxBX7nrbsSntLtEnx5uapRCRjuLAc23nuqo5zyEzEYo4y8rkeEdr262WGHb3tXJPab4ZAq1",
  "key21": "2RT29LN3GnnQykshjn7tHeLPcs8P3iGH3jUCr2pwrt4r8P2bZj6BdTgV7SFusCrhMJqoQbNQiEH7k62cBrm3AvJj",
  "key22": "2MycpM561dzUssFBYU7PekvTvhsQ3nAXGvxLy3Rba58vnS3ea6YkNaDX48aMP5R3xcvef4UjcmXB2k5S7wa1qsHG",
  "key23": "3rm6yhMRSoQ4BFiHdoFFvsDUMdQ9f23dpMHtbrup4WCq7PMHF55PvuwfGQ7tqGnajyENz3i68G9JtKQQDCqGLy2H",
  "key24": "5Ln6HYxywHtriMPNbecRQPXbLkzutGdpthUK5ThdSvcQ8teUsCbiCE45uojyX4CaDg66gD9h58SMzZk2f9EoVp3x",
  "key25": "3QjLSBL1vAmxXQ8T3JapWcCNQjQm6iEtWYzTujAFba1jdEEN2CbCHBQWLhE3h48sqrE1pBps7bHenjm5GvAEW54u",
  "key26": "3yHwdqKU6RgXar13wSXsdoManvwurXgWHWqP8r1iQXQWUACBpLYtAsEyHxKDG2uA1gPCQayKwA9J7iHt9eqFJfgs",
  "key27": "5T3iUcDLKytAaB7LAyTT8ggCVaS1WmKBP4VnRV3wToH4JzxMr7KThgAvEVERdTmKeXtvG3jH6ixzsQCT9nqBvnMT"
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
