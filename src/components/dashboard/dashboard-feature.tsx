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
    "rF9RUSt7qHGqNjq8GHAYV2foSLLBJDA6ZP7cWjmd3pv7DWmrVC4jKmMcUBfkcVD9Lbf9q4uLfDv9x11kaxwQMqr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4a2QBUoZ7cKBdq2JRFB1KzT6AgywieJnAEBbW45obQ5dy1BSG7Vzf64QnxkwqFMhDgo2R6Ec5sFbdgobtzuCQPPx",
  "key1": "3N7oJ9sfsq25GMv78ZTeDxqmJ1aPK21fshB5gVcXbEdPtnKWhtgfv9Ahc8896UZpboEVSQVStgvypPuShbo8LtEH",
  "key2": "61DUT55GzGtubHtLDi1EzhrNYqsJeLRnCwiwezLBNMVUMrtWX5STN5kYJLQHtvjkFumr1R3Qp6LGDzC7rPJtooXn",
  "key3": "2dWxtBb6fwc1XHUGDWBC7zKy9eeQkZwhtfMg55db6KPSKkB7gCMu4GEYdkc2cXkrTL1wPA1kELPimYVhbWFEX2U9",
  "key4": "2RFPqtAvrUs1eewoaGuRcPJ5LQmb3JpWmZ8CwkTJ8UYtqXuRWUYZrYjdwSynivFgk4941otUbBSQE5RCzAnpy7vW",
  "key5": "62mESCR3yUKVGijhXgkxeYWWNW6GHvqVr7rGaWrAqKgaGnqaKyQr2pxhLm1c8K7Cb2aDv9KuEJ8seEPVDSFXchLx",
  "key6": "3rBjr8nQB4Chgt3W9v7gTvcz7gFREgQgEe9YZmYvuwNSmQontLfVekPy46MXEx5XcAKDWsN18JhZb8T5DuKtSZjL",
  "key7": "39yN3k1ZgAjFG6SHx9mDh5xN1oBQRtviHTkF2bd7WruJzki3qAj1Kxg16kd9Wx6f6w5CKsoaiaGGQqfWREeo5Tt9",
  "key8": "U3hY63UfZ8PTP1ZtxfVn5Y4hRr5bgby9AZ85vJoGXRLhbEGBE3BagKdMoMptcpbk9fNHLRYoUMyXk51d2tsqjLX",
  "key9": "2JozXa7a21PUfJyu1zJ2jC8nBWXfvCrFMgWkLMkaBNmpa5nVKYNTkQtBmVuvU6mBPJzShCYcdNL5kJUdU2Qg9HBU",
  "key10": "556ejzqBHW3px4QAfX86FXLa68M1JjKBzuRuhjwwMqnmK77z1TWm1zddM5RVYes2HGHeYEdkfcf9kgKTPzot88UY",
  "key11": "4WRRGK5sSHFKiAjeKEC6AsEcMWw9LQKCtEXNZ4Td5SVCetnZMVbWbfpFf42EHkVkTCJdJ5WKpSKAxHjvHtwf4jbW",
  "key12": "5MEaUCRNYVL9cskqCiUwWi8UJbsr7BL5PoBbuVAdzJeTsZQicyo6wTzRVcJGuaSwXi2XcNVRXd9erVsVi2F7SFNf",
  "key13": "2YMPDBky9r8AwejRvhwhg2KZPgRdF5tHBs57G6dUTL2R3XzSPf3cUvRJgJN7vC8vdTiVgMPpDAbzU4h9mY6qpMtm",
  "key14": "3eyjyr52XLcPfo4rTK5F1qoSr6Y4CYHLaMV791nh3qF4mCmgUNTJKwfRWX8vaux3UruAZMwAM2QKVqvWsA69qyJg",
  "key15": "45X53X1tTGxjLCBfVnj6bn5FwiZuyit2s9fnCbXRGXNGXZrmna9c9Gbfjf3d4qpXbUadXMnde7SF3vUkQpF45zU2",
  "key16": "3EKJwkqmiEepNEVmuhuNhbszKhXGyuaEtgcmyK1evBwjMM2e3RCRKjUwCdSXe1TUB6JujLM9KmTCPGBm2Uii8aPZ",
  "key17": "CBKqKdGS1ig7TEha2UkxZ2eyYYuoFbBRkhvHiaxekfK1jup1uPbQWbGrz3gVz8o8WqfeMNadzA9vAiFmEjs4Qt1",
  "key18": "5MeqbNDpKdcJ3P3JUxcYt4ARxXqWYGYuzMXqhxvURkASkm9CC3m3k2t1mEmB5QaWwdMg4mrXwWRpYeADRvmjtgAr",
  "key19": "2gS5Kra8VEicwT6NVoETWxrSck7vZZrUBqRNSW4wg4AmAr7iQd11pn6d1dtBAYgBgqXzMs18oQwJVpdtVqB2WnBj",
  "key20": "srfAi3XD6TmqDwAQ3X7RoTeUwRqxFAf9kigQ85eGPsxyt3kPSRvu5HkMu9LoSFpsV5CHr4yJcYAHpDTUoNpe9tL",
  "key21": "UKhcDTcC6onEbXYAMiJYZAK94hxDdvtGQGiHqUWmr9NbnAxpu3oVXZSGt8qEEBaF5bYRNhyWUrFu3zEejz1Tipg",
  "key22": "2Djj1CQkXbWCFpAJbyE8dmBb2h6N8QFJfae8dQcB8xHWtTY9EN4y3mGvFLTuhQBnR1ZePaxd7eE1MNM1Bn6qw7mS",
  "key23": "5Yg4r8ByeaMw41NzbtaFmfHJJMZBLGFhVdQhutcttHP5bGBvYKdbrTx7ECvQ47vD9nZ2RntWrjN3uUeBUFT1zzqk",
  "key24": "2CatpdgZsduiEkeY72gGi63Fv7t9BESQqWisHwgZ95dbwm7kMQXXXGfQJcVSk9damQnrrpmJv5SJKRp1xMoMtNVR",
  "key25": "3Q9PvWUthmkVV24XR43QBpxitVjWFuMhYwE2rP3KmpwBows9y6juFzJbBHrN4G1yExC7GxJWMuvUJUkh8eiBN6oM",
  "key26": "2chir4tAcEi2U4YARCiwMFJQKCrhusiz5GdBmoc29iyxJt8zuL1QMe3hfFFk4iA2PXXxQreNEH9ReYwmBm6HTCQw",
  "key27": "235VW3Xz1DUvVxj8Kg4e4HmX9T1QxnYMc4zBcWzwHBjhErvj6aWToBYuzWRgRbCgfXxpWWjz7UfJzkrRM7iScHu2",
  "key28": "23XZ9KvYdqVzbgSrX2apKJSmnXUJPMkrk9SysyzEjdRcW2Grzu95cgGaH8u5fTS6YCQh3DX2TY7RPx9zuUGSLG4S",
  "key29": "3pPg17g5SgjcP9jm9N4Ebs8LMHKCBfbont9o5iYyEsBr4jXijKTtb8Us3ry5TG5aLi4LkPtGapUJegzqn4z1uVt2",
  "key30": "2aEcjAtUDG71kaiSv9UsWzaKUeCsg7S6uistsMx9MHu3FV6Qo5e8kByFhNFdnCojRV4RYvoGxGPfGjcAfUF23EXh",
  "key31": "4cydoWGx1eW5efk2XsyjhxUaqYKtR19xFPd9DmegJNZ4oreS5ivjXY7rUEYcfLyC2Bjr35s82iSZ38tERQTzwy3c",
  "key32": "5aEjdkVfRc4kUTVouqMGqDQdXPHTVjMsMgg44C5ssWRyENvN4uGSwg8E9iDwouXKavAAZtWV2vFE14HiyZCe6BuR",
  "key33": "BuuD4FSjCQKqCkg5MwmHbHyCCu37jZFvajYCxwMeSs3h9kYWz4S9itcTW3ijTLSvceDAnjwtRv1RgakBJ4iHH95",
  "key34": "4GUBxYnwAPWqJ9XFncbSc473hoKZEB7oKHNXp67fi3E9et4dvw5M2vb2nN8kTw4ihVqqbfV9ijuVMerBW3zXWkDF",
  "key35": "3XhHam2wka76UgJNZYiXmKxDcCPMZjaWiBQYAHbQr6NQKXw2ZbGcRozzjUvjK8KguRnD2HD8A9jWLV6EYvkiNxEP",
  "key36": "43QtLQA4iQnQMcqYwQUpuBvuYpe8ScpXE2KjgBYynDdE2HUEUBxEt1LHC9GxmdC1MGx4MXMNJDz47o8m8nkVqH1r",
  "key37": "2WzVZSA1SMy1Mu1h6uSef4Dd6VGskRjXh9jbyPmzrKEHcv2PTqMHFs3ixrCLJ7gYVnoVLXwHaf4yra7jVy8YdjC",
  "key38": "2MnFvcb2MHHp2bCBBAFiNqwGsiCpqece3PUu4TNCu5qNPjaWqiUutWnS5TxdTZa17dDaYrHS6s2YBjbFk6ZVkiAp",
  "key39": "4RZFnNboomc8PoFgRiRLetq8NwFi5JFycfBGN4PgFn28qUbWNsnZxg4ba2akm4xZ2AShtUJTjygTWE8iHY17rH2z",
  "key40": "2eVjBRoBUhn8wUtszqhW8ifwDYsCZ8g9vy7bVYDkkcQh5aXrZdGm2J4fzRpvL9pQkJ2MJqjxJ1ERQVdrpizHuUJL",
  "key41": "5RLKW8s44k165Ke2hdbDtkr87b9G64zxAVYRuDQv4ggNYXVJehfwdxd6buFyuXBQGg54jLxyooZ2rHPxJuQpTCB4",
  "key42": "2CRHFNErN6cnbX26Fak3meQx8N6vgZxVGYaKP3b9f8gxcXBo18kRmQgAGC1ju7bWE7phXtWtygKe26pUouZg3P2b",
  "key43": "2PDnaZQqbcWaekuqpsgYpijtdLeZc4RkGPW5H7TXKDZpHdE8CreGTaKN8kLxbTn5kF8a4ish85YQFe1R2juTi2k4",
  "key44": "2TopmipjFhCmsUJZE1BC4Vsj69scDb83xbQp3758hyjEnY1ehLZRNtygHA1UhHJ53HSKitKE5zK1ymVBZB8aV9x1",
  "key45": "3pFndxPpAHrcmFDW2DMH6FSpvDHBQ9dSmCufSB4t6ftaAAbn5MBZ1RXs5ZWgyVabPugtp3ukedhGqPXmAkTmEhZh",
  "key46": "2gjXpztD9d2z85u4mcHMpg45cdzdNPztr6ryJiwFkbiNJHw1YJGtTqpf3sr2czyAXxKhhmw45nawHqrYvd36WcoK",
  "key47": "2mNvDBgja1j7vQF5PgeZXQKSLjoeAR1q1qn5b9CEaxkWR6DddSTJc8pMWedZaqqqmPwgWKyg7HixeYs4g4XZusEW",
  "key48": "42SzDZ2ZXprWFVSte29RDd2rsfqg2W7JVKspuhFuAp5UUoGM2sWqrZ7PTkqN7xdeed5g9yexZ2VZd12ynAUJ2EgZ"
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
