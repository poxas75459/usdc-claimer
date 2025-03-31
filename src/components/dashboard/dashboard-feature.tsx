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
    "TGv5Fv5LKDfUn3CWbXWzAjhyAQRQNyi5KWK64mdJ3puySnXxH6uDBhpyxYsmrUPM6TxjLAQwaH2J3C3codSzpS2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UHa56V6VALLnzu5Ck7wswwzDjpv5geu3NXHYSRKwVWK5xdBs7cfoQQPPXNkiudwksdThQiHQYWnjhMEH1UZgCiW",
  "key1": "2vRuY9dDJ8wesA92U85bbB2hWxCG8xcCdKn51JDbAvxQH9WEGaPQ9HP1nFqp2nQmUJ6AzRnDGfnBm8vcoLr2hkpE",
  "key2": "28Sy7eNDSzcKGxxN6RRgm3VCmzz4uBZVjLJXEBGSpsjoZkTUPnd4P4aeHCafz5oj2Karoa6uNP63Es2qonTup8cJ",
  "key3": "4tFwtaK5aUNNMqJBYrQ7ozMkyQa49uJWjWwCqpYVGWfycz4fYMUGMQD9VcVUgYSVnEXDa7JRyNsnLTrZqTeuduFv",
  "key4": "5ttdfBFxZUFV6VFGhPfkKcaBtNGBkDXEpx8kdZkvDyrNATgqX1YL7KEodxfF8AQovaqwRJ5q49qMtVXRpA6njVKp",
  "key5": "2BL4kP2vATq8nXwaeUdkDiYLRSNMyhXWRCxoKn8NQWWPMShQjtM444oo2Gnf8LVUGy8dShR8WDTZQpAyUZD7sFj4",
  "key6": "5P4fF3fktosXYZ7RhJhyMcEBJgwbouFnKeM5YSqDw8P2DmoDRfXa15W98z3HPRNCzaK6vnTtzuPAAbd4bNyfmLwg",
  "key7": "3zy25qYFBEf1tqGL6mG3Hpz1ZiyRj8q3aY6uMhxg6rHLBtQ3wXi8GVphZuReLmv9y7Vwqb82d1snkfntnKPNg443",
  "key8": "48hD7n7ieafXryworubcZ5goRzsn6PqBLceVPuJXWruRdSCGTDDkb1NGSYkxE5BnFZBUTiasCmPdVmQqV1bi7BZK",
  "key9": "3qb6e8rTcDWtPKbZyXeffq4YYC6QdYCYotmdG5P6qcDkrQPuhApz7fhe64BVzYVATxuwp5AcxB75Qi35BMF5fVRW",
  "key10": "24iUvriT4RWUVHRKm1oqs2pJMjAb89HpmWr85Ggv2krFJMVhFUWEsxcp32AFBiS3wU52KunZ4hhun83tT8r5LgH8",
  "key11": "47Qxur9VudTQiTqzNvJMcoDp8Rm543dfGZt5pwJWDBdbhLf8VLWrLY5jgk94vguhzs7e88hicNYo8t5BM1UQ4ksh",
  "key12": "5VLm3HP2nUaut9h3ogkAhMj8FvUp63QKj2yTBtcsfA7taAinQV9DXLJJ7qGCMekVrUxk9WYVgQX6qPQ1X6N2GhQd",
  "key13": "SosLJ9bjNzigRSgUMn1rouVVfTLvF62NCNvVSuKgFisa9EWyJRbRj7M3EFRLQzEjMkgBNuhNGWDDy665HwVSikx",
  "key14": "2BySwJmwTK1oJXfc7VNPcjbfZJ6F8R7EtC2qBicFs9SErk3aVcucYm69gsiY1PaYhJEUeKdeHfWVf2t3GCWYt3yn",
  "key15": "29WizTjAgJeVq5f4m8XFGqEpWFBfc5tEQqHJmLpF9pjXHkEnQ2nJeo7EdrgmktgU446ABwERyaHx3oHinXHZcGhP",
  "key16": "HWFsiCmXkgX8SzVPBVPdx7ijpeoxS1xLTMCayNw8A8kyKofbsYuLUG98sLrYGvMmvYz7DKqpTC3vp7ez1ELFzTY",
  "key17": "4dSMFT2XAexduVUtZDCDCBmGAqzhmqMKf5pM1u6BA2X9vt75137mrHLsEKm4qDofD8QPVQ4GcYMoapYHXUdcgcuH",
  "key18": "p3R2V7UPS5q14srBn3dcdWhjZesnhv6vg69Yd8FmLmrMprjiUudHU3DqCFuC5JUN6f1pwuwGnFh9fsnv54YeXXs",
  "key19": "2H3s9caMtcMNVBr7dwqV3TdN5bsPGy1zn7KQzEuKuPFG63TQCvcpsWJ8F5ZkBs2KNCSRpaCUKjgKrRyZt7Y1cMTw",
  "key20": "5yWxi2JwhtXHv2iKXfeKwpntt7FSVAhRscjAQu93AEVREMaGyLtnnujDBBHMbyR5rwXjtcfMp3grckKXzmdaH7Py",
  "key21": "3WZofsDWbvUh5SdNMg7Ni1qFSz56Z8SPoxzenXtPULmFcuYBWuokec1cCr25oqGm6oNFh1mPuH8GW6UauXtLByBg",
  "key22": "3pp5srcpsEp7u7TfwAJ3XzY2JAGSKN2ns6oCjHdN1DuFGaTM9YhHxwmCLtpMjCUjwQv2SVzNVVWFFRhnYcfCHuCY",
  "key23": "6Db8giK1iwnqnszSVFbhgWmKS3ZRSL9cQ3cmx1csyGuk96mtdC1EQWeYY7JVijoXgTWkjZZbENJ1Zen6u1uoGHu",
  "key24": "3HNMhz9NXGX68PjFwDp1Ljt14y7Go9K4upvRt7bZBMg5tCHjYA2FmppxZCSfcE5oKfbFZnZHZLDNcCBNYhzn8Zqt",
  "key25": "5VjaWj4UV7vbAs8cuKQpf2i9zyQHiAeEgSLSybiAkjWjJ1N6xWrpYdQZZeHwBBSmmdeU8YXPPYZASHMcR4jkCie9",
  "key26": "4WgJwHrYAjTA9LTYFqvKVLf6YmEBFjogR39givjn5Gq7tRhAJWhnRY7rUX87wkxAnYUqySNam5ZMbFBCkyjNFpYa",
  "key27": "2FFeSbkXVcYhBoVJycLPrX8MtqniJaMqx7u1x1F9BiRLb9sviEKduf7y1s4ukP38VFi7dJXmBSAtXkiNpAi1cUTF",
  "key28": "62VkPSXQ93xdU7bmQJEvrhtWy4HMgvxF6r6vJgeGQZmimmfUd1G2hG7JKa6c7emy77QCyVbEWGy73Cf7JkdRZhFo",
  "key29": "yBkS3fq46WUfMTwrVJwoMUxFLGAhzz7DR5mnLVkS46VstwTNQM7zWVteMKhvY59H1VpathnzwZYNdAYU4g2PVn7",
  "key30": "3uG3rmeumzUa6jrHh6CPsxpcf4gbjBG4p21VxUvfVAy4R4rEZa62imQtLiYBqrJWgvS9ypfutuvfSaXukeCYahng",
  "key31": "2RfHzCGn98mCH1jhwJDvr886Aj6zTMbmp2XjUhCTzLzukrkWaAW5xS3osHA93BbX467Xux3BDDrowSkAWE6siHCZ",
  "key32": "3PAPuF4Nq9NnYqTcj9aKo1VYT6bsXForDg3cULngqscjGjbRs5TKzSNsQkbH297VYXd35NckSRReXSYsxHid3ojH",
  "key33": "4Jjvb8tKzGin5vuYrJvhbgCKbJX2dngr6Xc6zXtuGwRD4KtR9PJ94gP7UWhnCXRbP2koePJQDb76vL82fdepQ6th"
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
