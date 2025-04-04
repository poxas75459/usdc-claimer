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
    "48MjjzkYWRXNdTi7933bZ45HMXDN5dEZdMV1TT5rMV7SRzZ8iHiZhmuiN1ANdWoMidNqSGjb4Cr4ysK64GBgKFiR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uRZoLtAuS2UmYeDsQD3YyqmR3RoAcQTzQR8usuuJbgriZ1ivr6vh4TzDAaodWK8KmUvTZUgmndQdYanYvLmKmXP",
  "key1": "2Wzy9njiiFCaAnd4QYWZnyAvVEWgTTTveoBES6cottMo7Dojs62vAPTzLX5xgudMDRVXhUCnY2ra27VwNvJx4KA2",
  "key2": "VJGLYnE81oiyPb4j4n32Fu22RAbEjsZE1RdxhaUjAs39vpyq6sVcovJiqzy4ffnCo5P1SPuskPhbZnSJUenYo4G",
  "key3": "42FNtrDgmkzb6SXv7GwkFBDQC4LWrg7diAAZ9ykzyWox1bphKgxjDjRdR5NrjpqUKYKgDYPH4ytkfaCb2k82m8u7",
  "key4": "4XnPckpf21pq3umDCfWBULvda8VcPrLWHkjURg4ze4hpKmN1r3rVVQ2Cnct3XxX6G5KFKRDurnFx9BFoB5jfdAs6",
  "key5": "29XEkthHeMjySx4JThMLMmFEaXEjqgffKgFmY7Y6wtsKhf4Ce1k7nF6gEovE4NtuUnCzhqjkaRLkDd4YAAedasUn",
  "key6": "5rPCYQFtxnv9FfWN2XxfqXPvmkwQjfpc9bnQH9epY92oqDmZi2Vo4we78cLJCM47sSz1GHCtccL9Kag6MbWoLHhm",
  "key7": "4kYriPHFignqS7gKUAxUMmT797J9Gt69XFf2JDwEdzSRFvXV1DEpeiY8YcuxN9F1qDTsMUU56X8rV1wr1pgdFzM",
  "key8": "21b6HqchgU6GRm23dkfD5rjA1SoM139JUD1pgUXM7VEz8dP7wnS3W4gi3BgEtdmZn4MWLYAVWwZmUdZqivryS4wx",
  "key9": "3SDZkMpde6xdsBzBCvdkZBDAv75f2ZcwQVzWvZRX2RLGJPY1iqzCDms3qfBxwc2n2qQkqmrp2BVV6hSbaHvsXXf",
  "key10": "cDXpgvmSXQKb1QrvU5bob8dt7oG1hba2r3o6XNoHPY2PX4sWzk89ELwunMLuAEguHxbGjVHcYVuvDCCJPYrGaB9",
  "key11": "64HyBHSh2uV9ffAMTRbcHm1yQvrE5Do9k3wdv236xRBii5TwAZBnYfErhU4WRfrziYmAmbBofMN8GKtjZVi7RZa4",
  "key12": "5KrbJKV8exDZDJMFabRkvhFfTi3x4LiHDc5UCCpzqHbudse6kEYBLzQ28G4sCTnCSrDdZtSih2RgAtdCKrasmLhi",
  "key13": "4U79oYPvfH1MsswFSCmHhg73zsDSb8B3CoY6Ssw6LvWE9X14QXmt9SccUcjTUhFRyAUV2rDbHrfcZLjDKSHYEM23",
  "key14": "43EXNUVkkG9QPcczHfQeb2QHkJ8e2UnPML5JRGPCGuBJrNjiakd7iS3EWYL9CH2ndtxKYz8Ez8PB7W2ufRLJRouL",
  "key15": "XhvkHP3XK8oHKPrueSLjKLEVixY6R8DPrTUwUoPyBxB6YQDVXZTq1oJWXHuC6bppkaaiknpTJURMorFkiuMiVGf",
  "key16": "3Z9Vkd17ZGkjuTydGhTSrgWUDXbhCqiWGxAJFHZ4zAf47cfw2wCnFqH38xmj6bZ4NUkBEr347ZWn1xjrJXpKVyQr",
  "key17": "2Dhah9A19tx5dvcPiERZAsP8uw2ymc4pymAu4bbm8NjY4QThk3tVSW2TLLnPSFXu8u3mXbZe9gU6fYC2Cea1VAPc",
  "key18": "3v1qSGjkQFn6MttUSuTR89AC1pt3CmXSHvH5b5ZvAZdvHFmGxWzD1PrNomQB5KZ6x7Qo38RaeqJci8dNcLQQFb8n",
  "key19": "381m5UacTmW9E1xXcWpukgBtHJsSMLKbyW7pxFHmfTJFJYnEVY3ZsWfp1SkyRphumTNqiC4r8zbmarNRWsMefH5T",
  "key20": "ZH8DmFLWBBWSo5DewU7bubjMzoF97R23gJDofghxXg5bt8KZzLEuaUW5UQBG6S5dZ3AYmjCTYNUZ7ZAW3AF7NDB",
  "key21": "5ScGC9zJrcqfFccmPbRb698rAji1mT2BhNTgvpC3mRDkpoeyjt3XD6DUeKJh3owQZLQwtmNo96B31UJ6mtrz9wz8",
  "key22": "5qKyPgt4jMm4sbP1uWcjcS183qdCmuXT2ULsrG4DsbkfiDnRbwDM4Zjp51B5rbGSdUBjtxGtRNTwYTGzikcL77CF",
  "key23": "3T7xDAF3pum53RXuc6tj5EeYg6CnHLsPRL4FZjnoqmytHPKPdP4DAsAsQ1xEJmi4giL8yT2ZWTJL2y2WvgvPp42C",
  "key24": "4NcUWAHXHypRrLG3p2p6NAvAYWcV8YeUSzdTm9GYTQBi8cCjLr22zmC1KtHP918qeQXArHoBB3j2UPpDVrqq7wZ3",
  "key25": "35yZuErhiJZbfyDFcNBy9TWiGnted3AC6tLJh237FB4JzD9uaGNNAA3Ygv1t2BQLhaSG8dfZq9Vqe4yJhymG5M1j",
  "key26": "5VSfGARXCSz2CdGrDaiYKrFsoMfEBpg4LVMWoksCzE1Pn5XhCErPsSzNo1hwvmWWFQda6tR2rZDFWFkaPGCqd8w5",
  "key27": "4FPT1c5r3spmbfYPNM1sVZHmiVDX9uuKb3nTonzt9hFri2GNinujLZZJHqvUH5o5AkzGkoJVP6YgRqkTxUaKTAVx"
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
