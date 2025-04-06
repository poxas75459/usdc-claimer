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
    "4aafegVVkx1VKYnhZzyoCqzhGrB3mzZbVEfYP4N9YNDD8FSC9Ykpi1X5jgRMn379Y3r352YXhcCusLJH2shvsePz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ehNLQE5tog7hHCCWfQL8kJXHSBCKi4bo97ih6PYT4tCxvoWjmzhmKxrE7FQ5uoxErnkMyqiMmqSGCAE1mAYDKmS",
  "key1": "4Y9KUgMCVtmmrrtRH4rCYjaoJCMG2M99dXz7uHwx2mMWS7TKjdyGtSuM9YavzjX6xoFx5KxMTgfBUvPFRTkgMp2E",
  "key2": "3vPCQPtbYHrvFSAuTfwnCFsnfNNDShf51x1e1QBhH7eq9snVsGMXU3cYbXa2BqLHJe3YsataYNM81AVMcwKbHeDY",
  "key3": "3ZQp8yYFF63NWLjQXPGCwGKtoms9DUPwFjcAK79MgmbbbJUNs71SPoVnWkF65mwc5Ap8w2i9h92mgU2MyhvJ4Uf7",
  "key4": "5FMXWzmeqfkTEPJEn7WQZbbKvK7GSya6F6HbsuyTg5JBcNVN5XDuXBPX4skcFBT8ZkwBKdVhHjBnmf4euk4Sqw6y",
  "key5": "33iRGSidLkGTuyyFxnavkHWt1LuwDqF6Q2P2kfesktKKED87AGPEgrDBnn5FCnh9SdxAphm8g1wbd5o2z3faPpoL",
  "key6": "pj64Bbmoxm322tMrmZzhGvCrd8QhjkRmB3CAM6rPzyUNA14XtPo8kZreZJPpZi6P1HjgHJLsSErZ4HXzTmvqn8q",
  "key7": "S9MTGUyfvQFJaknxFsfNDdeLCB51gor2F6GgBXjju9g36mF2S9oNDHRLW1uhMnPQz36dgPpAA19tsjCsF2vJSCP",
  "key8": "5DHzbVQqVZZMZTi3XVJkZzqg6vKMD4ovhjANFJrAEbxrsnr6Y4GeXd9EQ2vMB2vTTHSBmQcgKo9QPaTq1mJ9oEPL",
  "key9": "EEJhogX4xCfY6whHiVXFU3MypFjpCkw443HxabSnW7wyzgE7pwgnqG1mBSDd2RwjaSLX2s2c1CM4yFs5YHUoiNa",
  "key10": "4rVdxoX52mmMLU3PgZtU3TT85rm8dDbGtgvowYhXBUB4Z9wnfpWoRgW96CAdawxnxGtiw28z83eKZUv5G8SHqbp5",
  "key11": "4SATWpgP7RJ3o5d6EUQufeUg9ciPUAwFMxYf6KQpfAw2ubVpRhizEN5fjXbm7JPt7Q5EMBBtGHFW3iyB9jgeqrbW",
  "key12": "514tHENwDej6Gretr3j2wUCyJUv9mK1ut7wt2SxB2MhB1n9e9acNDmX7xRrh8nEtwZ145nbH2HpUDjWTiefhro75",
  "key13": "4oEhEjXK9pRacFVCuU4LzMKk6eYVdsR1ru7aNyN5QyyUBCcosibShLMGKN4YgMhMbiTaPKiDsTRahNkfa6VFigoF",
  "key14": "tEh2KZKVx4g5yiXfqzRt6sp5bdq2rKaWXckYa8q1TN1Pz7F5DJ6WkgYkBuxjMBC1SmenKPtxQjE9UKyCShdyyKB",
  "key15": "3YJcSjbbEBxTtG7pZgyJtP2FezFDqXt822BTmHNj7MfGj2SCt23ovuXXjtFDcq7mbFHgcTTdVjjeVPuSPtb6bg4V",
  "key16": "4cC6CHvEbGhwHKzeWLLTLLoZe1KcaqTYrHgmdCFqZv4c3mHk8t9DySZbPseBTA89sgxsua7e92sQqa8LWRC7uQ86",
  "key17": "5sWFyg4CDKQWnzKLcZCoQV2QT4b91imv6MVKB1hGvPnMsAogxvZ2GP27jVJzVRtSifpszQJeBe8mkiqSuZx4et3i",
  "key18": "5kohJQqHnnbp4rwQvYHeajoktervmgq9b6SM9kHGrPWesMYFkHj2QVMNxhfrywJtpTpiZWpoVyJkMuR6egEa7L8s",
  "key19": "4qN99LUr2xyMnFwVYZpyjgJJZFqH9d9JHH3GAQr5f4Fi1e5wVogLrvVqCmREuU5iytL4er1HvAucEZvVXNjAdihJ",
  "key20": "QGi9oELFMeEUgCfTjCQBFhduMRXVWDauci3iZY7MezD474MndBhZsfK2oWrjvUjqaL32TpARavSEme8agZj9wmu",
  "key21": "5ayXC9oGasMBSzNC23TknKNrfNhmBvddvVTGjg8n1CVnP4ebiSds38Wt46CMcBkvdSCUkBfP4iMvdGMTSGi9hTz8",
  "key22": "4wRFXPXi2m9NhcjzEZXMYc3XQE9vottjH49LFTyPWxMTthYSZ4eKFCWUoY9CPxTFFCrxWfT5KRyNRmE4ekSkRvDk",
  "key23": "G5skFP6udCmY45cxaQCnPYupi9r6aSsX7nyrk9C9BMzpUb39vq1fnpNiBbKLDeKQgs8Hjsb8SFtU5LZ6a4Cxm8P",
  "key24": "3UCtZw82GLJqVM6uJNfRTunS3aTwJPqhpHiaRhBeKcWcTZfJv2DsDafYamGrGFMHX9AtnEbpQRz49jK5h5355xxj",
  "key25": "3K7BR9jqom7NmgVXwmf4CFGHf6vkHokDoHK2BW6y1YcG4eeFR2Q7UyuCX2skEAnyz9rw19r7x1sc9bS8YNaEjPEL",
  "key26": "5Hj1SpWY1k1w8VQxUQ7e6LWApmVn1kTCDdk1agtws473UnLUgxfi1V72h2Jn3K49cEbtdBLc7r9iS2eH8BDQiUu6",
  "key27": "3XgBmhvtu81LFNbGHeMGRwUR2BpHMmaWwSWgksmY5AMeiLMmTLh75Ni4AJNB5FZWYRnF3AyhL8t1Wi5Snfq1WvXo",
  "key28": "5PbWsVJG8h15SpC15PNU5jBY2Z6bsoentn25eaapFpkM8YtZCtNiBBd87TjGxMwJzevSSDwsqqQGZZAFDW2hgWyA",
  "key29": "5fybV41U2qN72yPMfiTV5SVGUeaM2ZPuZcteojx5Xfiu3ZhrrDm5De6VEyQZp34hBku5AQJF1hCgWcUAJBsWYgyg",
  "key30": "4hurLH2CKPZkSnMNQxxQe5fFJFVGvUwqcGUcZy4svHv1QqEJVMXqsFoqiHDNWv4wfXsujafTmKHg9aQ7psJuMXWc",
  "key31": "4XaKDbU9FDgfcRctBDCyBHsPmBohAkA8TRoouoD1qbjP6qjsYigUvwP6FWvwDadWH9jKbLFpGjEoD1kxFnRvkgzA",
  "key32": "uviGJxkgNQNRz8kndaDYkzKzo2kCc443ZbcEpJzp2MV5B7QbpFmADvHLRLLtuDpsWoDDtWhAuYMBwT72taLH1uv",
  "key33": "4ECKRTFDpDhHhaQhV5vwgcpELjtnXbrY1yQ5PPwL5HAwKVRj8X76QPqXQVPPxkcKJA5eB92W9RePEMvbNDttXdFq",
  "key34": "3ApMMk8YbHgf2vA8F5GDmeuZMdetKzkP7zwyf6CfUjoLpXtfaYAPhnQxJHk17dySdy5k2thbCLt8gnx4Xkr9NTE9",
  "key35": "42gnk2WVTWCqrLhTthq4t7a7rTrZDuJwMb13ZUwVpRfBojtFjWg24Ho7eZ7M1XKnfgGvA2schjZCvGquQFHnArFT"
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
