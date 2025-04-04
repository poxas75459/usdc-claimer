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
    "8xi47fBzFMNH33VHq32ckFUCYLQMKku6vcBtZ5y3btg29cGzZmGPJvatGMrZH86NgnjijtQ4GJf4yLjtsboL5Xb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xYSsRGsim84o8zZbgeAj48pgqFYrtZ7sAp8xNM2BvAFThjTdvAaRoHyy7nu1ZECV4DoeNg5zbAgtzWtGKea9VEP",
  "key1": "3ZMwQtjeL2x4XcxzpLGrnMDrrF7nTJx6pYgiNvxBteoWgkxX7LVpfK1zonLTgdLHyZDMLhTqRyWmhEZfLAsJtwpa",
  "key2": "5ktP5ziFBu1YQB2nAXHx4r37tvHyGJMvG34G5SbumKWr1oSJr4rzWv2rbKhiTX3p1pjwauShXSg327JS8Mg8SRj2",
  "key3": "5B6eqtn6ztdUj1rrXtthpakaYxijxcLPtjYqvfTLj6gjytrb6VPQnyhFPSidrGv3Whiq8WuzEGNwshbUci3SCkHk",
  "key4": "4AfeK7uzswzCnZfQh4rK63kT5cxBUTmbwvJReo5h8vkvVDNX6moZ8xgjC1rfpXTZJcqoqNNY3YH6vSfnVfgqd9Ad",
  "key5": "2ByXfCoW7wmx6oL5JiQecgnfemPjbZmyreaGJrEeBDzK5ZrzbQhaRfA7naKKJYRuFEgKm8j36uVhKuys3XT93Mbw",
  "key6": "qyxpPy97TdGhLPUhDKRNiUQWZDQAKe6h1zJsn6LRmC4541nNxLYFu4ZLvUjMd6Df55Y1YzuWhFB5fe6mNxKPgD2",
  "key7": "sfqsU3HBQ7uxAAbMZqmjhPoAkHTgtibusRWVDAnuy98Sumbt8mMVXdPCiRuyoT92Us3YXKbb9Qcmbis5p8byxCf",
  "key8": "5nefmML44FbRi8QJtHi2QwFujPWYFydVsHqEwKnH4Fugt8XyE6HKEz8KPpTfEQLvJkV5YgxUQe1xgkKvcspgpXYT",
  "key9": "2s1RToZdwHrNXyzih7gRJNyajk6Ev9XyYp7yuVEFu4E3gGYmuaAXHhTmASicCzTYfe8i4XMTuAoTgMFDN9oRkFx2",
  "key10": "5kTZGUgsHUjV25yH4dtXQbyHqU4XSYA4K9T3XjA3Tio35RWmbJxchRc9pDCvVSgqUun2QSjiQUupndMxV25NPpZD",
  "key11": "3tTDxxesdY2ta9G8YvwCFEQoYhvPWfzyjsUrXYbkCwwoS731mJRDqzncSVaSHkXdtj7mTkUhQ9PFik92R3kCJ1R9",
  "key12": "5yeBTiYcYRKxJCMZotiofWNc38aQ6vUaUFcDPAu4mERF7LKH9KCE3awfW3LbdghZTCH5zFXhsH44eX4F7PaNwZWZ",
  "key13": "4ioPE1pqSgV1NGDTeynLozLxeHCHqRxEjbUrwmaDyYsJyVZXXNeBV2qp36K9VQq7zG1PwCJPyeLfjkNBKf3nwt2J",
  "key14": "66fTeDMc3SpXQtqBjmZQ7aB3mPrCNxWqiTboVYN3NRhujviDtz47ac4soHruFWvaYwTixhakLoqUa67fRE7fijmw",
  "key15": "5wjafpu4qBDm3WL66sCNCB1wZ4u9L52JbT66dUtfFDjqzGGqtmhVfVQi8MYj8FMKNrjE2d134FS9CxU7ks84UYx",
  "key16": "4MaMMWa3a2T4X7XctuJR59HdmjkG1d49sSQEjVe82wfgfrVYCHUTkTaAn9maE78MwjVpeeJACVHp5gYytHCx2ReH",
  "key17": "3Rb1FxJcQdrEngWgmxKVKePPgzxHqB8BEobkDQ88sgkv8nxFqSum3veSrn8C93uByvN51YBpmeFqeq7G27yVbBxy",
  "key18": "2S4uimNuXPptqExRHCXTcCyhLn4Hhvj4V5q6wZM2m6j5H4EkSu5vxYZXH5HWK2RcXVMaJWmDkQLeobBG4dHHdyMg",
  "key19": "424C7C48sA4tL9pjysDKNB8Uite4B6shfN9smBxgdDfbTmSa7SFjf4qn6hpwdnBWsga4JhxXu72A5MK2ZWoj29cF",
  "key20": "3tR221Vd27xewdaXfRgzyyJhAzx2jJaJ9cg2StFpZFpYUsQtNebaSQF9fbcEUpBhHtgK9p66uCkd7WSerTWiGh85",
  "key21": "3zKAiWmvuR5RK3aR611oJY8tZgtdG412DTjxFs6PeDVUBQmAFAjxhcm4zdSCqAuWwgSBG9UPPMBV1swaFHUTdkBa",
  "key22": "9LzPw5n3beaBi6xKzTfPBPHgDUXCHVmdEFouj2Li38tkwWBZ6LepsKM5aUafAQ6AUP5sPgCAvw8jDSDi3pQUTM4",
  "key23": "5fq6oZj96pNseKcAunmUHHYfxd9X68jfS9qRE34Brdidd2sF3DuY1XjaXZGdh9AX8Tr8itzrHomw2EnofqiCkjZN",
  "key24": "4hjbYjFY1MTxfuNhrf6EEs6bCPfphrNnsSf4uqHGuTV6457sj9SqJVXTPPPPYFNCqAdP5bDqo7QgSFktwyYMtG6X",
  "key25": "5hisuWtysYyPxY26WP4T1Qzf7mCpUhkFyb6kgwuL8LWUegrzSjsUyjosz2d14o8qT9BPh69yezhCHvLPmp9mbKJN",
  "key26": "3us9UzUKigz643QnBFeb7HgQWZufyFwSLsX16p4PazToau23hhUeQ87V1kkiebzKR99LQNfi9wrVXkv9TtYLS2nQ",
  "key27": "5a9GR1tXPimnoHek3LBbhQtAhPHH5LeYuLSzyAZMN8TSL2c32DzGN1DfUVQopUyexaQvzfR4sXY1JFkja7rj9Cef",
  "key28": "2BFCkAznkASsjtgbKGnBNohUMGVTtJvpHP8H6Sd4HfatiG4h2s8RY8nWo6td8rKC2B6E2EbLZqADDEAC47YAktjU",
  "key29": "4Ujih9bEC5RsKUEWup8AKr7zUikvB2q6AKWR2iJ5JUzmgYhRtVsuDNWDs9Pj4Yp5z3FAdh8q3XFuEbKF5DubSt8K",
  "key30": "5paxRD5V1bkzcQZpwY3C2etsy92Zq2yVgkKeSEy32sz6JKmpTHtRGwrbRSam4hpK1ZLY2iguqxXxkv3Wo13r51uj",
  "key31": "39t3Z5niPcUZX6zGrgHwHpFaqGiu1mkhTH3YS8XLTYeCo7Y2xbSZiQw12ycfbGcpTgMZRjF1PCwfgJjhMYfY2Y7F"
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
