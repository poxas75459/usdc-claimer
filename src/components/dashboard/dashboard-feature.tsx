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
    "BKTEei7MksAjTMYndhgYpG22Qfye2C2LPQ1228EHC1bTBpwnpJRkMNpbbgVpnNCy2gB5yVqeza6JGUeXFSc9nBX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UrfLWXyQMvxUazZGVw8Y3TV6rzmLhYXqWtmf3DpM3mvM3KrZNZ4MutvvXsQPUWJBdt7jwfqxpCbfcVicjK6CWZD",
  "key1": "aoyaYtDNokg4o6q5aVGE5tu3iUdaQU1xpaFtgfP8sdJyzSsyVpgPaFSoMPaGc82EKni5SMXUrrsjw68t8tAn8tE",
  "key2": "3mZX61fZUH67HwNd1u45GPkyRPBisxZyCkDF3JF27L3PRE8H59ze3kcY9sKiy3tgzRf3WWYiFJuwJ4gPn5vyRYMm",
  "key3": "3xmtvwPUs8UJufz2g8zhix26RfmQHXzmSMJmkvYkKprtxWGxi9xaxYSnvaJk4uvWhmoyJfM199xnJcpEPMzTFoh",
  "key4": "isinNU8SyyrgwjBvuiWUtSrQXvUg574udxUdYv8ky6XoeN8LCWqggHT8vLoWf9ZajT5JSgevD1qkmhsUfLwvZJJ",
  "key5": "27LKt3yFKV4yDPxyq955iejtYK3JbDSPpv1NnegozZP3vfoouyo8EPRdJLes25psBtiHHxUeUj3GafBWZf1jTc1S",
  "key6": "2EbR3A7drHMB9ZzAkWRgAwRnz2pedWKwriVLKfhKQdCqgEZgA6E5Qi4QAVgYQgLhTUFTWJKgRDzw3oy1weX963eY",
  "key7": "EsiedD2nTwuGZBK6UDkKa1UTgQ1rQKE57usEg99cQ3ggEd3LT5M9p4vGJUbPwNuHfK3J9ZcV2v4iEkGYXBkg76o",
  "key8": "3uFPv2dXi3yrbp396wYx4SpPnyp5tcp8wUYjRiWp4aqcfN9m1C5aMiMCLg7jXxn3r3dkidodK21n4bwgUnr1vBWf",
  "key9": "3iFmnwtMD78cCx4NMbVhDBpUmW61kLkDnYrdfoeSZZHtgFZReCMview41hbdXfULEp3UDEdP8nz447bb6FSbUvVG",
  "key10": "2fsdJ4SjWJtvANDTV7nE4rpuDoc9xfcGG1nYYRBkyj1frJLp93VpkMAuuGC372AVSUXWjdUd3Dnw8xArEQeReUc6",
  "key11": "cHY4yn6ZkAZfe69azniFgDgCuu4PGYgR3zfRb6NpabzPS55xyAYsS4EvnK6r3DJ6TSUCv6mTFLXGt5JqFfBBUjt",
  "key12": "2D243RShg3Axcexb495iCro7BKcicZCmizE3Ev5QBiS7V7owfnVYzxAPN4m2wkCRGkm5qFc77jYCMCnqe81g3VrS",
  "key13": "24UwKHpZ9kjd7u8xU8nE1ffoQx2Vo8b6RAmiJRdD1FSXhW21p2St2fNpAWS5C2pdw527CUWZn8GHPpJEWLqAuyCd",
  "key14": "2GgxuqkWELDyJtkaWcYLn1NTViT7AiycFSJMHbvvLE96icaKosjp7SWB8WqPqtUN7wX1XYrUC1wfuHtgRcnuBaxz",
  "key15": "m4SKNn6jef1byrhyt3HuC6daEzfcBqFreqgHPjvSsW4wNffTTbQ5qBfVm17Z17wo2BLeaYe2B8GwL6xbfrc3nVu",
  "key16": "5xsZyt1gr8uvmwCigVZE8LFKuRe76GUVpenqShTi2PCrW93bCVyYzrzdTD98sHYfdvbJBnfLQguVhEVRVBKiLjoD",
  "key17": "289j7sgKMyFbuwNRg4baRMm8BPGaLFG2nU6LVAe6rtPgywNMzRn4GKTK5m4KUi3eHxNLqwpF2stMGobgxQTJonp3",
  "key18": "4GD6byo4T1shYpHfnRXYbo6UCnkAfGdRbr76SMJs2swMGijpn97aD8csq5tvsmZYcDWPLDknsn8p7UnTSqeq9ySc",
  "key19": "3BuyjsQFKZ62mAvVJ6YncR3KkSJLRS8mf9xgLWtaqjbgkYqUo1Wv2scgJkv6iMTTBDcCRf1MQypebh5LsP6norJ8",
  "key20": "1sdq1B9s5iwRUHgbpzzqGCDFRymKQq6YxTFJx9ksLM1aWur2uZUawbQdERZnWWHr5QRUzQ9DEEXJhErCr8fdq4Z",
  "key21": "2o18CQ7Y6ikjooBzdrZSxp6TMKwWZdXrsuVuP65s3HBL3iQH9TEi84cFQuSorwcA2Gc5u5oSN6SuXLZxzkKV1tzT",
  "key22": "2gwhizAcfPRGMQSw2WDTcpFNnF52ieEuGKrZTenkCrtXtkznGpoppsibXy2DE8E61CvoZizXL9Mzy1S2LLWXwb8x",
  "key23": "2zWL7k1XD9aMpTTaCtsjkyhPhUBcVs5JsSL4MrXpj6rXCCkDUamkqzDm5Ah7LUAtnQLqckCb9xgcKeZLXr7FPdYW",
  "key24": "3eT3KaugjAJm7N6RMdEkXLmRU1ZeZGo3wS5st8NfR2SomPvUsyYdgegvMLUhAfTNSmp5G5pMX3oYrEWo4NWUhoPQ",
  "key25": "3toL3F2xMa9PoeVbAhYq9ACW48r7WsUABnpHZwYZJdArgKJis8tD7bKBxDyF5KJ2oLQnpVXJPwrtf2Gumf6apn5E",
  "key26": "A6TwQBg7Kd3ZnjgL53XzFG7xYhsfcK8E4xdSzgxdj4PAMhgrQHLYxGT7w58ceKUQdHLst9WKtdYDgikBN6XVB34",
  "key27": "3HrneeeeMQLxcgVvb4Udk2VUZJSWF4kLExWcNWL2PoCVQncFzB8w9HWceLJ7DxsxQz7Sj6HS2qgjVCYczmqmRBb6",
  "key28": "36frtkLmeRgpnTPhKfcJyTd79JCphi81AGjvo5UMzLx4MTMsdTK4uCztK6jgX8wkNjMTtbyhvXeMwUPi57iCQho9",
  "key29": "375QXLtyB7KPmVGjUhEnSnA8wL86kkmuTFUELDvbSxGoY6s8dcgrifKcaZQcidnNautwfXTKpL4LnfPTXaAjXo4P",
  "key30": "AkWrKhcC81JwT2HaqVtvrMgCMqUEYi2a54FCkqgLYG8U3UwUUHKeXV47Qn5r7UJUxnYZ5q3wH4qWLaTVoWcbKKC",
  "key31": "3T8dqhsLmXp8CtenDgbY4xRnUjE6eDy58gdV4dbL7LmxZQ5snytAXBEQEHTonhUUYE7TLcx8bKZ7CrHXczDzTmsG",
  "key32": "3b9gTSnfhpuBssJqmS7mFyy9JVcDBskhs78THtSiZL3yZnkQ9BvgWJrNe2WKjNZLMtU3MZBbgfsf6dR6peKrodjw",
  "key33": "4cv5chRd8dERJ8RCe8Xaorep7GKPUCmfJrdR55VdBnkjXZjU3xzbFy1xCUbQSR7ooEWQrUtuUELhDdUzHP4jTTQF",
  "key34": "2szMBTKhBUB1K1oqge6ufAxD4ACPiCewK5N44DDxXDG2wnBm2FCUeNNRvU1DtyYjQTPe2ZEZrdDTxnzz3iJSUyjB",
  "key35": "2zXsb2QLfVB9v9NYAdCPVGibMgwcxjhXNVc9wG4UsjL49j68U1CHKw5FrMyiHaNsqn5RCyyaGRMkzHfziJBcKUo8",
  "key36": "2PRFY4nP6i8VnTwt8fFZuKKtNyNKrss7Eio7LGp4LWBNo9rdBPDiQEekxFGfp6WLkCtBC45GfPMyowxQJUTnEu1P",
  "key37": "4vyjFEzyhaKq1oJW7fHntp9v3B5JfCKZjACLFxWw4z4fSFuTa5RF11m6GuFBud3MAsEdwFEbwfAA3w732NBiPnDH",
  "key38": "57oL8QDiu8zzWrSiJ6o69MNmvfcouDMEfZUbCkg8WLmZBNkT7eWgEaty4P3k62giVwURiQLgmFM3qzVQ4baJ3TUT",
  "key39": "2Qz25zugsDfaUE3VLoMcRkgrb9MXZwQQcS396wyYng9RWXrTef8weH9VhGUUco4FW86cHqayb9Cj2fp7iN8XMvmq"
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
