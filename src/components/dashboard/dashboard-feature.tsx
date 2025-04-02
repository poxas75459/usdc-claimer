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
    "52UwEkkVpDTPjZaSSu9RpzRbugX2He3ML7Ci8LRuaFrC9pnX4vhPvJixLkyLoaVpNNyoNevmYtbgXjLtNDX8otmY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "437KKQ874RqBaStKLQvtUaqSTZxREuYrHm88KR3XXmKkkG2UGT7rTAx5MFaoDuTJRVhEvTURkz211zqBxuwsYr1y",
  "key1": "3cx4EiTjsbQPYj2k2tGkoMcQv4fSyQSVLjdZwT4uBP82kGFADmogEvfy4p91mh2gLz1Rtzup1NAiNdffqRNfnjr2",
  "key2": "bcWdVmKu4pvZNmuTFP4X92hgZJGNaZagJYbHyybZsTzcnakXy7R5Qfg6ir2HrsTti5va6vbAEyRkxmovghyTXvC",
  "key3": "cXczWRs8PEmFLdAMEPdJoGU1xGc4gFBk85jiVy3H8uaboRWCYKZmx3NvbzyGPZNMr8EPU3aNEvzWTZsMmFNDhqC",
  "key4": "3yrBSETC98qiHJVGFjf3QVRQrt4Tzh7wyqd8kFkyvNzwwfLKrjKGBRFNW7Ficrz9YNPamutqraoD3JgUvKL3BpDG",
  "key5": "q3gGWVrNoeBemh25EdA5WxX1uX8uRYb9gGNHC5JNL6K5fShAvLKkEWVrxNvRKWNc4GfnMU44PeSeaoLwsBoCCCr",
  "key6": "1yhxCgccEcjN3JpAq6JL4RpiqDneLyjG29dTeaCJKvhzB9YSKH6CajD1Bmk9SmP8BanJFHFFtDDnvfQyphc4Go3",
  "key7": "5F1h6zJX6BYGwBiZ9uaxHSnSmHuSvehC1fDQmYeDPZPmpLr4QWcLscJWC1czkMRH6Dq22aM2nkEHGBJv44tJQnKF",
  "key8": "3G8ogiasuJFGWpcGDb3W3stMWZTvbVwV4aFf34exsc36Vfzwbm4UURDAL4y4KR3a22cHun5Eza5wrcHnRYXBiwyZ",
  "key9": "53L7nozTfmw9C1EgMGHFt6vmxCPSoULckyMvR7DUHFHryygpF3Jro4hrirpkr4UWkCpnkcWL8ZNoxt8UFHpJZGeU",
  "key10": "jSvwqA3jDSyKWqhVxKqGfEN9TiBLDmtKsNLDb4yJNqZY6Hkv8aj6M9DKcNQe2QjqLcAczU31YzEZzYF4QXSAy13",
  "key11": "4odKASWH5Rh7uVGC9zdhzcVCLVgKec4QJEBKpHvQvz2ZeQfYWhKQJh6eZXyaWoh5aFxnSiaP9cZ3tjdHJveBwsaD",
  "key12": "5Nn62tTpCBVuf9YLLC9ccng3oRCsihHkMaLHYyKz7Viv2tYAXgFitUwQpFfrVxTR4WRg8rugpHzBvFQuY98Qsh1o",
  "key13": "4xtw7A2BcMt5bMdZcygDrxFzUdnMdXAtFEyxpq2igW1cBQk57tS2gBtLgaQ3hFTks8yEZQz8ChrhqocXRr5uGRLk",
  "key14": "32svUk7eWBMYe1ibWLyv68R2YvytDFYb85rjmYXgCdNEFec96NuB9iZ68btLsFJQuCFAiYtGdmQ5FkJNVFjN4oBk",
  "key15": "HYbkHJtqaGHeUuXNpkLBPBuwBHWLCZKkHgM2HxeGCcGA8YwPpYKYqhJg3MFuRot2WGP9CwVPXCSPCZN31LvhJaE",
  "key16": "W9VGStyWkPhj68q8HdWQddh2sH9HnKE3HPogBcsFHoJJbRpvy4XJJXAWEb58DSraSTdnQJ8L2sFXLribWeUdsVT",
  "key17": "2xA4mFQWU3YZsqXhqFoT8GeWwUEy2cDu7rWWohC1Wpg5esuZw1SueTracW1QruHRE61B6jZeDVfUnhJSjR8obFiZ",
  "key18": "24QMJpXaJdXr8wqKMJEzMRGJ5eqrWxbyoafPXMjpVe5wRhPNZ91bXaEDNwxfA3p5itXL6RnESD5GMSUqgvTzrqNy",
  "key19": "3LHJQUcGAWDrfwosfmLuGRbj1oDSPayGZUuCW5Udsa72MDkcbpP7YozMqMmDRoiSAaW9rEUavG43H8Nz9VCMjeRS",
  "key20": "5eX5K5khkY73gR8hnZrkRHJJzQvhT3m8XXpD5qCeFFvN5596e1N8bWQDcH7YkhJL6JqRAJYugq3HxmwxK8gf5nL3",
  "key21": "29gdz2MPTRL3mBGMFCRtPUagv856msuK4uFMk3ir3XwL17r542nt381CCTrS3iJmd2yqfS756UWBbf9aDV1rGBgU",
  "key22": "5nEyRodKdYHekHAGzT3vVa4chgzNnwJwQ2cdhWs4oEj9kuVs4x3kpZE1mZuq4bfbV2XTQ2x72cyGcokzysRy7JL2",
  "key23": "pBX9L6kSJpZrnuuseyMHKPoQnLJK7VtAa6tQxMTHup6DMQmKP26Lm8u3MKtbW7y2yy6vwkRtTXp3EhLdJoRdeYS",
  "key24": "2AQKDbDzYXSWfhiLzaJ58qDZert6PYiTRjvzvWUkLkyAkgUYpVfMoTnz713EuiQdq5swRVqEQ9rNtGvVvKB31mwr",
  "key25": "64NTsiLEAVJdyARTzcNX8JcD2gkHHR9kx6X7nvUe3Ch1PWvQ5AxuJzP3U3GqXTt16LZ1c6gmm43H1WyTcNSRUwTN",
  "key26": "2NWMuXwBm95f8aeBKgzYYS4uEevK6BuPn8YvGSWmBNgRbnTKxkNa8RCiFuhtreE193ivbdoATfkiDE336tAWCWaV",
  "key27": "56YLjTjrPc8BSegwZ1BEaV3x7z4uAMThQxutSrAmtBn49pga3X9A5zZPJMDypSwMWvbLL3cmwhZfYME5u4f4HFeM"
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
