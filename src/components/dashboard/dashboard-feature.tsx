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
    "65aTKQTgfN2id5MJy7Lj8LCmHoHDr384y9G7gNJEX97L1LP2GyRPABYyPWS22UR6VTuJ6QsH3vnAFGGJNcdDHMc3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xrnp81pBpBrDv71nF9FxNEKqBjnEjdnB24xUfYtLcrx6qLwcHs1W8UoBt3FGzM8XzDyPpRrZX4CKY1zhF4CJFsM",
  "key1": "5gpSeQh9Vr6s54RJedGN6vC8pqmu7HpD9BvdKBEaeu7HVAKiumy7Hn6ipXgBwx3GZduBoJv42AW8vdAVpeGq53dM",
  "key2": "3UmcqDBASnz8Fk3AYnaRtR1GVBFo8qKDXhbH7EysXbuJfJr5Vy9fupHC4fHMNMWPzezqkRZU4gpLfayV5PNi5E5U",
  "key3": "3AL26ce7tWCZskpGerFzt3tAVYMUpBiqtsjSDUACZ5R3hZhf16uCbiJNcqj5gK5SN1Qnqsndqd9S6VLKgyAx1vnS",
  "key4": "5iePZkf6dtHKyWQtc6JMgxMsowrvt1TUJVC8cVGrvpQcEJ1uicicp3f5SdEqHy9UoDs3fZjSFKGv61Lcu4v1pW5p",
  "key5": "2XH2givynRuEJuMbnzQh7ZJyvxEwJVDTpHzXMSokKJnVXDMxjYEmKxTTBKCYtQTJbn9LBLyzoFp9mhvAjJn3utt2",
  "key6": "66rPyMsbihMgrkGtUCGE6KAhRaC2AY4wWHszs5mmcuxPRkDC9eCuEEtw9dASM4zKVugEtpCLv6NoCPrCBew4zFzN",
  "key7": "2aS4U9BzpuHQd7rf7Myy2nNW1LZZcNknog6tPkvGwUXVkU82GjoAAQFmvEDk8Hr5aHZUWfnvTtD9QLKYwzucvkd9",
  "key8": "4nocwL1xy3TtmTMvzZKwPfkW3n2hvRZQEhqiQvRAietQX1JmH5VcVAUZVdKK1yoMsNDxqK23c3Uc9ijCrmGo5dCy",
  "key9": "PbzJt9AgEGGgDjxFigCn8p3MB1JAqd7VM7t3gtjMRbY9Bdzr2DDUug116gYuEampNexYtLSkRfT6fkBbzcqNSYu",
  "key10": "3tmFUSuQxH469SRiyNSAZQpc4MTUiEyvRxbJNXNmLzQSmbNiLLJ8PwNN2gvsBYwXAAYB3FCtMzD1Bzqga7uFfPEZ",
  "key11": "2REAC8Rhxvy1JNfgKsQthQp1euPDiTQEvh1obQY9sU2f6sj59vmrXDm77Aojb8BrcKA3yLLQ86sEtKbURAq6L477",
  "key12": "ebY4x9F2ZEch5vwK8SNeVBj1sgwdwZMEYdNioyrcTYUrJfKR6xmFmjfahSMHNDkRC92BcUHSmeNY4C5haMjjsbN",
  "key13": "4frZdbEsTyMMMRgjHtYZ9qVu9f11CrQKdaxty7ivrfj3n9SgfBhQ1f6NZ6bHewQPCFh4vddFY62uX6FDfa82y5Ei",
  "key14": "4LeCca54MPxGok1YrtL8jnNSFARQXYXbhtFCnXGeEeu6aCmFDa5aRqpD8yTcwnttdiDke75SE3VhEW1uFJzB3JKn",
  "key15": "41U5p4rYC41kvGP1qDVVKpfGCg168t1vCRfShSFAhhUJVA7cRjC41P1tNfnFhJGcPkuYLdgrBVu2fhSNkBsu57Nm",
  "key16": "5MCS52GjfmogUoCTD47AjMLyhHJfr87Qwxaao1sA2YEWc1jSd5PQU5uYvwpVmw7zSRvEz4wwEh9abRnUeUMX2unt",
  "key17": "3Kmnv3LCjnZh3LPqnqWPepm3NZj3P4FEnaF8uruGcqpREmoCNL7gC6UYRs3XmtHdFbaJBgsvbxwKtZG9s4QpVnMc",
  "key18": "55LQx7c8CrCNSccXG9DVRHkNQ4RmizMujjPwgsMAB28NCLMLhtGePVZDXQGKuQ4QtGs36opdmEu1HDk7eWvppECG",
  "key19": "4ugPWxvbiV7Fm5JoBRBYs8F6ee92NEuFowG3yGv6mtKsW3CqbYEHpZSCoBJCPHd31f8YAtsA45UcrsHJRhWpAm4Y",
  "key20": "4BTN5jUUpvUkmu5arrPkpXetEwGvnBpMJJjomUhywGcZRXueYuroAVmSGh1Cqg4wv8aCWqGhb8bbwZ3ChqRZ6Rbi",
  "key21": "k5cAtXPhEhjBXMTFePdqzNLo2PW7YwgmC1oXK69CbXZ8YR8B3nzPrGkPMf3yKndmwWkQBjFTTGygu8qsJyW73vQ",
  "key22": "5Ee6t61opa2hKC7NZuzguk68cXRWX7uyhrzaoty9gGW4eRzGowos6g4cRxoEUCVX49ziCCxmYenJ398g5xwqVpyS",
  "key23": "5DWASbS8arSnGrCmu17DBmJFJk4v53GXCZdruhACNQ5BznqrgNprzq89DaLRcHXLuMBbCh91JZnxwEDG38Zna6m9",
  "key24": "4bC3V8fsQPBkskxNFLyLiVeExgu3fevtyEnkKDZwR7CgFMiC2wYEBdZFWMiBYxRNWaywVNn8Mx89tccxxkunpRCM",
  "key25": "3e1Ch8Wm5M1afdRmXczsVJS53E2uZLRFSyvo5hUQDizn6nVvBsU4RtAvaPB13ovt8D3AiXCnPRL7HNPFvh6vmDit",
  "key26": "2aK17iXtdfGDUAnMmYdz1cGB9hQ5SWrT4TUQCKiiu75ktvKqhH9eLFhBiqdL5Dk9Dg5mFa3y4B2ucyCVHsML3ADw",
  "key27": "67XjYf3BNksGGwmYyJqAwexw7cWcZMndcNjXBHpwFj3XYfkVSeZfZJzNRq3czfpuKE9pCyn4htzuQbHzJgCgLdo",
  "key28": "4ZFdQy6fSpzCsz6VTVJqxiGfGqj7K6ccAKsMF9z93f8Vkqh8cPa8eoLkk7x4ZQMiiggwjTsygkuPao9NP6n33o7X",
  "key29": "3jMGr1t62qZLWePhdGkDGv2oC7R1NHNwUhtsMWWDU6PSp1jFytidxSNqG1h31dPcP4rSzoyRgvUCGapwgN4Aq6TB",
  "key30": "2HengwKZ5A51APpmtYfjfzLhp3KKUpEXvCUQ9edy8EutooeANPBp2oY1d6JSr72zdY85GYeHVWbLpJ3TPS8wzcxa",
  "key31": "3o2PhsAqADCcM27cbgaqpJz8DVgRBfwAANcWETcBqrsUxfYgtEAPx2aX9tmsvL9WCLxy7694SQ6ZEA5HoXp3eaZe",
  "key32": "3XRb7wwKsZ5L9LcEgGMfc2VfeWFv2bJ72GxL9KBWcK9Dk31GzR5RU8HEsC1PrBMfPfgboNgSWfqxzgnVhSV8vcWR",
  "key33": "9sdpwaP2ErBeuW766e4Fb1B21iMMNFxtzhYbZCa9iPm7Pgj1t7WUkbmFF9RQxS4Giy2KGuc52zkQxYUiwXfuB38",
  "key34": "61norK9u6Qiw8CQu4SsHyTsCn4V7Qiuvm7sAHzRiUXjtP8wVkHMyLnAiVXzarg4BTzZiKDw3oXLxDPfTC21iL6mA"
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
