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
    "XLP88KwwEk1KMo1sRPLL23ZLCrKfHKeMpc8gyo2uKNvkDykirmT1pgy3FqJjE93PRYnMUY992KnX1V3gi2H6kNr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nAUj3nviBYAcaDmT5uZVo4RVRWtmnBV3gq39u3hJh6PqmM2J2mzvbqwziqDkk7q26q9UaMr42YQRDyc9Fkn8zKY",
  "key1": "4MfLDWxY1KxDBpjmwWqRDU4CUcKRHdSe35nTuVsAFhBbuYWbJUKnyenhZ3gemiNTTwvT1joAFQxTeNQiSJVQHZP5",
  "key2": "5XQ8yRia2jjzt1aHiqkPa2v9xficFYunJYZQN2tamFHAijDL4wqFPybWy74PyVxzAfiVdLTKozUWirvudeL39voT",
  "key3": "2URfDk81XtoYN8bus8B6HRnVpjUEpMc2XczXkGJBCfF6MuoBeAc1DTdvwx32j5uE8p2mvacvXPGTnVYTa16szsBp",
  "key4": "2aCU3BQPyifb9qquT5LC9VNSh1L52KVujcwrQuhjbvCPZssospfhDXSeZhbGpRdEowavuYSFb7Hupe14h5fQc22k",
  "key5": "vwVq9vqSYyvyWsQiXr32jJta2qyYc36pgXnJbSU4qvVb7Xq6qFSBe4ccZyrpSoozTxYH1pQNzeQD4F7jRVjnZgt",
  "key6": "7tmnezTZVpSbZ61UAC8QnzgjxCNC9kc9mJDWGqdKpnCMCXFVZpqJ9wAs6DfDbRjKyCjFjHEacp4T1kaLuXMzQ8X",
  "key7": "4XBURCkpwE9MtvQUfAgYGUGZiYx5ZqERt8Jdhd8zuQijbk1YyGavkR8vB1GUrWiqfjpPwoZ7u6d4mm9DYPYVu5Dj",
  "key8": "2uQS9FmCzRfYYkqRLUHMEmt99RxtxmnGaHKUwznzABHgvqcPeHDky2whPTY7Pt1xpiLxWYSUzMu26jWRiMGQHdMh",
  "key9": "3tzbbV3BVNfhRhqgmS7uZeQgViiwe9VFsgjtEHUvnvkNstNxByrwQ51NstRW3AgXwVBYCtwr6fhJvSfD5ts1umxm",
  "key10": "2u35SFkcW377ZHJCdJNYzPmWC1jZUnN5R2otrCe2thtpc8GLudcpG5W3uUEPbaVMmgdDxHvVpvWY2P4vHcEdCWT6",
  "key11": "864CKrADhCC7HTwEA2Mmha3bocM8omwjvh7SwZv2o7NVW1VQC1uRpERCCZmzARmcByMtoyhzurvUSVrkGWkuCrU",
  "key12": "3c6Lo49No2pEs8YnijgtLLRQq3dRuYxVnQ1HJA8NYdtHejfdpauFNEdr6r7kFzbryfSNPKAL8LFY81WnXbfNf25v",
  "key13": "aBtYpNGg74i4j2LyS45MW6gdpGjU9sieJowURZTnuBaTqwssQF7g1fyimomkXKtywBHrPEuTBjYT8wXuuJPdVzp",
  "key14": "TtH2vwvjjnkqTYVeDdyFKKwhqNH6ig2jqaCW8Ps9xj1AqouC41Gox8HBwhQeArxwgNxrvkoVZrb9jYVPnKiUFkM",
  "key15": "4g4J8s3YKYyj7kBVnSCc9yJUy1cWqfZrDg6Gx9goBJLafSBfpeyb8eB32BcwL15Ak6nqmEm2qsYyaZtqew56iKL8",
  "key16": "5mHv2dvWZg9HVRmaKfMgUCG55Ns5p55BdpGyPqYTdPxu7cSWQXwPjBxdPgmwwG6jNpqFmgv8VwNV5n7UGW5qYB7Z",
  "key17": "BsRKzU91nZE6UgoCi86yfw8vbzheLL71xNMEjvP7VcZFqoGMpwwQ43SsZiHzazX5qna2G1ic2YkSqjGNfjRDc9a",
  "key18": "UCefvDizTYZVP3JYz54wPjDxaWNJX3SSTGffzxR6x64kcwPB3rUXDHBA91dk6U2ztmmgBEfQXgQM79eLra9bvMD",
  "key19": "EwnjugJi7GPmaQNRJSW3Et9dyFbDVChfxvGs8sp8rrrziUjENv2jUcX7e63fNcQZ5f5n3LaGmRLFPkxtHkuEnv9",
  "key20": "5VyKmPCgd8rWCxXvcgkmMrYJFmGh8khwgMXaoPrLLNmLKhLEeogk9mbupncPNzAJXD2B4MBSWKgwpoLtvsTzHrXz",
  "key21": "4CmHC3D7xhYmKNGL6iMeQtoaZMgd8M44FRwCGVuUVsACBittKrk4jseqUf9yttZTuBXjRCKzjvaZM5q7Fhn5bCP8",
  "key22": "2sDGsKBLBtbCuF8gsfmSSr6tk2KJL3gH8p99tVVjTYTSdh4tQzvFvssvJr1TKKRHXZGeLGGbmYNHZdZHB4WPCk4h",
  "key23": "JQz5QJk5HxEqxbwAoRxmRfbjHb4qZfnxU9Q6rGF9f8wgoH76VKq97GoKe2qwk2Fq1HPf4gkgcifgVwPFcrzBRCj",
  "key24": "5u9NRW48JbQ1C7TS7HwWkfByaPr7NUBPkDw5rkwiZJ9W7Zypn3b2hnydmUS7Sr4W6VEWeDki9B9RUcFybmcdqLwJ",
  "key25": "rqhpkXfTZkjaibuavf8QeQLB9gFarMxvDuoXtcAerW9bxHvi4pS98MrmaLpBuoiM3fWCUsyjczpuXJhrFscNZUb",
  "key26": "3AtJ1G6xc1Ep89JBKfVtfpx5M85dp247gNVJSSFYw9tMwFRj9pTkJjMM1nK9bFc3djeeSGgngPVV8asBQtn542PW",
  "key27": "4JRgcyoNCnBineH8wWdiyyLf59bPCjbZN5r3g4yLYpCXjmP7rfXsY39fcNKq48dxKX7xc1ghUiLmGci2LShWbKxv",
  "key28": "4HH96UzPsHgKVLwftN5Q5RwyPbYs6w8VR15Lp5xW5Zw6TJALD4GJVQAG4DeFbP1fCCQszLsUFSf4weYMWy7EEN6o",
  "key29": "evhJvWFfSJV69gFsDH8ZtUBAJePFMeBRcctGUp7pZLCMEcVkW2Nsk7cqvwTKPCZBcSVXt4TE5LRQXswrFbozPRK",
  "key30": "3Lx9f8zbDawxJVAsHn4BJuQDDu1khsm69Z63GV8jmHnFbDXHDCTNgYJppoWWqPuUM5CJMeuScaNvfjUwfChxc6vV",
  "key31": "65Hjoq8UPSVwhHQBqNmvUTuJ7FeJdVQ8fDUyHXiCAacwvvZNwXQscZqrx8A35EfEbokrmdfVH753bkAZVNsHEN3Z",
  "key32": "PdZ7V2pwthxyhtSY8ZP3Sm7SSXxhcun3EFW4KUDJtbprRYuzew7f2KwHE9MCn7tceQtxThWHs7WPZTbmiKEN1yw",
  "key33": "4BHtAgr8FRBuT46jr51c89HrgXXQS3FV5RMWRjcQy7zgqB9j44P7Kyba2L4AfLwnCTPYVFt9EdnV5Gh8XhYhAJx",
  "key34": "cF8QrENbccfq9ApiTEsyFHV4J9d8N7gBakZVUCjxUJKwEVCnqbWyuUd9bn7JFXy6EyvndADNdrV9MpLbmban3HQ",
  "key35": "2twgeCkWsXNZfq9dgDDycJyoLKHBmfgTzHu5xtm79jFNNi2jaaBa8ZXBSUndWrwCbjUUEj656hT7XzfTXWFiMqzn",
  "key36": "3HgWQAay7WW3vEXnN895LXuzvrbZMwyqSzV9bJFbjRS9Yx76HQvFqYhGMfV3h8DCWTzeMNxyzCa3F3E6b8BHnAMR",
  "key37": "37aQpEVmojPVYntv5T3cwc6CouB1UFxww5q14zKzYfYHJv6fg4WW7hp8y9FaSZ37Ux8rXLHmkG4vkW16rC96dQVd",
  "key38": "5oafScw1e7Z9YcujrXAvAa1K5BbbSyqVbfqcev9RYYQD6b5cBLbRdbxSr8irc3XB8s71m1mT6Wc3LoYUStRZeSyL",
  "key39": "28WdnJVCDAUb9Qd3nXrykP79QtVZEy2PACf9zKtb8papJBrQbww883ZaCcZeg6whdvvF69zaEPbhjY5aiT1FPLRR",
  "key40": "3dQ7Fo6BC7KvyxMACPWPjXNvp1pZmA6bj2vJ33tsqWZMMPM6NBXnba3qQuKqyLJ8AohuqUaL8qUxdEMzZDedYwib",
  "key41": "3jYAjTfNTqMAZRW8KyVHREWuUkiiuQWFRQzXLYe2GZrD1dx7EcQQPWnt9zL9BMp8CbUEiLABaeqvUHRzKAKnBkXz",
  "key42": "sRZVLCnDWNQ9BqGj86hLqKcmiDBSRwzRCvAAoN8nfLhzuVwg6Hv8md3sJmAgrg5rBN1fVLxFsBMqpvsCXjb3itx",
  "key43": "2fZoJ55eXgqTcgEqUK3NYkhexWR1X4Z9HmZsQhJwwpw251CGzVqTypYpxyLqmW2CyEzH7Sk7JzRKu9g6AVBWoUVh",
  "key44": "2hpqFPG1r9LYsRjWgqshoFdMNP8m9cpPjS1pdX2Zscvur6XGeW51BBPdUKQCcRejDwaLXSDW42PMfE66dFXDofjh",
  "key45": "RffoPuEYtaV3QyQZH1udRuoE2Tqowhmi2DbPe4ndGmmQYXxsdsDvaNbyRRotXmsnjsmRpaLgM89pZbRzyj5WTLk",
  "key46": "4riyuAguZQ6mJG484A4WrGrsiDPbeEgmt6vqt4M4ds2XXqPmZ6Va3AeKVGatuKDARe4vnKQTfkoE3vq7YsskiiMp",
  "key47": "4hc9c25wZDF9KbTLxQd9aqsk91iJEnNo1MkTgiJMS7QDzQ9FaPNtQDwZJ6hNJuUUaBjPtFToT8iBDbHSnkE327w5",
  "key48": "5fSbroAyM8V8krwNa74Vrt8YBmFEb5cLphtMeHwcLvrbFJKMcC2SdzdMUpBggrbiXB3wHX5AA4rYGMRpsLfXQ3aL"
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
