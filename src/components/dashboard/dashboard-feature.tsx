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
    "dCjEoe3WgmxwFBHfKddCu9m6isGSAZLKDfc8je3FFJoqWFqypbp9BqgSx69tQjVrQfiDpfvK6GM83xoU8dkCZr4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3G4mHaFo3ZezHaw91vAHKUGDBkDyz4QfbDsdhEy5kSwz2PQvKPTPkFd6ePzwgcdZBt86JcG9nE9QFZqHzNVTULPr",
  "key1": "3FrY6BthruyVLTL4RCRPKRVc7T1aTEWcAACxnwkaoVqMgMHtMJAyu2ebnXPDiF2KchDBTD5xFdSTW7mwLGVgB1dp",
  "key2": "2Ai6qUveCdHyVUhguZScmZokNZaEPV8G38oNsN7TD3ADg1oewwYAjDzthv6eMiAMRWmUccjtZDtwra94yw6rzkrs",
  "key3": "3poZ8xjL7KpL27JHu3Qm2eCEXujKbut8MSa3WhQpbhJFn8Ai3QxQPQdaoRSNWAdTYoFxD6GWqqPz5py2Z6RBc5jL",
  "key4": "hkZydmV8iNEpQL8mDTtgGBqHLvbT6rjPwgu4N9de3jYFZyQ3jX37UMvFKAQYmi1QfmCnW8BChfFfrsW2YT4t2Af",
  "key5": "37jZYEKgn6P5m5uQchvXRzHkVosCJ5hzmju9G9uwraL6CcN1uAx89m1KLG8LDCu3KC5URetPJFpU5QyyBDH3xcFC",
  "key6": "3CMih9SHLWSMHpgM1U9RroBD6pnXAWgn5LuRJ4D1V6Me4FRSF6DiEurHuxZ1vyxxgbEEhJQUgpERtxkXUYaVMvfC",
  "key7": "4PcU7GZrNvrGD5osVXxK9DK99gmTWTGcFQuiiTyhDjLKgZepop9L2HBv74c4qXrZ7woVADrVAfM17227BaYXRA6M",
  "key8": "2RkYtA9YZyqky6KcToFNZ7tnZPh93Eu41JNcPjyEUiz5uLpJgEhfHrPm9BEuP1NjMHVCju1RTQsWkomojZiZbrkB",
  "key9": "3KVAEwkxTtXvZGQNDinDGnTeZEoCT6hJHg1emNmNZVWubnWa9BRotgTBJ5eXvb7WqzNKLDKgxuyHz7QW5aJckA8M",
  "key10": "2yaRsm1zexqLmvnJGZD7DjVbVsqp56SZ19yyoPTuRNRRny8BB1zsZchqCbHzg8bX7uRcrKtgH8hyriVXvPZgC1gQ",
  "key11": "LYpmkAo89W7i1rYcZSx8Vpp8PPeTFE8GDZRb22e3pqRdUzYM7Q9sZhW36JVJ9T5qcNHNiapib9pQBtDqRTg7c9M",
  "key12": "3aceyZPVubsWbwY3RMSMfdunknZ6D4vcqWEipyVzv2Fs8rRspgejzKUkiwCozY6f9B6mTXVm3Y5oLJE6dQgYPPTs",
  "key13": "5qkbHsbSeXHUeLKVtgwVxWE6fVysTKnWKfwTCY6LXAfjeQp2shF1Z6P8WdpZWNQ4eiy8xTYWK3vmz65ww4UESe1G",
  "key14": "589EaMBAhCdNmp8cUHioG5Bn4WjYESdAiw21zWm1MJbW1U3XevRaDkJkq62ZcZ7mLYD4sQuPy2r851wRaeWXXJkU",
  "key15": "4fKZHsf8FwRNe3giZXMKdvsByBsYo7TW5Sfwi5nx5t9FAgFpzNnuersMQQjGx5xaivPfEu7E6cytcZpqteWESyJo",
  "key16": "fwTV7VLji61r2G4qQGEZrbCff1qE3dVTtYnJ8xW3ky8RWCcme5BFy6AbcdVeQaYNGYrUYLMcXtfKK3ALc3haE7f",
  "key17": "2kqAMEP2dxC9K1Ffmyo9cj8dXcryrXX6jjjJZb8CaaqLGRiLCFrEYdmcuVgBLth4u4tn6GUKohQ7rbYxvmhjCeJZ",
  "key18": "2FjzsPWqevhqL6nRvBV9QFxmKrDZrB4msiidJ6aEJJNdFRRFJV3S2SoRDwTvnsLgSpX3uctFWq7NDWL4fpYrMZrN",
  "key19": "me5G2Y4vgY4FHpcVaZ56KXzVgKnBbWHkipU82YAYHiraAuqZd31axg3rxc8NJZDXyTu3NjueNw5kodWCqNKps26",
  "key20": "547QJfQ15syHu2YtTwGT9MeDMaN8ERvsHsbccoKSi4vuoPWriZqni1SKR8eB1u5P3WnJ1psWyT9e4KcqtrTQTCKB",
  "key21": "5vGcVRSywfsuECgcMHct4L4UMjGUU4CVcygc6ZHszhkVfm1LJJoCYmh2DB5XsoeAbj6EL8VUUaLHnZYB8EaR46mN",
  "key22": "4H6v5CWXwSEg9h89eMdcwMgaVhkkgGAJZ8jfCPPgqSXoUZNYEsmkfA2thgwEBEzyBLezqXr6o5xDquq898KQzrEz",
  "key23": "35MMKFxh95qY9ozJU6WFc4pwnGjcdm3QnxowzDDft6va9i1acbqZEaG31SzCCDhpGkAWeEataDYNar2sm65uffgw",
  "key24": "3LEPP6qR3rDbJeAtpxPUyteiNp4k1JGyC6t8koM95F4YuMP4MbNDYZehQrB8qETgVV5z5YQkkyXS8A632BGVRFEX",
  "key25": "4TV5bVEeEnXfzptkLjp4f71M38NcWU5DtzuaCBtMv1LY4ZByoDCGMBx41tVZYDZK56kFTuDHjet3hNPM62uDiUsG",
  "key26": "2a7aSKRSte4tE27xRRxm5WFLA3pDrkZY2T9FyxuHrUFRivQs97yWFKAECkLZ5R1nouvAgKLjk4U3RYKP7UyJ4xjK",
  "key27": "5QZjc62k6kDQZwJwyg3xKPubXWkhEuhnBxbRSGwdQ7V1AsKQZUk13n3JQ1uwwZz7QvMuGyVNULsJeWx47E4Qw1jD",
  "key28": "2BJY4VjsbtHLUeZGyYbKtczgfDimfpjv4QyhjqhqsuePMgLZjXLBF1sc4Xmc28r4pHxxdT8v4NACe4ZouyJea1uV",
  "key29": "29bpPEyeRiizweKf3b2x9UmbDs4P6iaqwmfWJVMioFYyK2b1bJtwGaMuFKnq6DMufAX46WmbCXcq31M4DDzcqiaF",
  "key30": "GXGkwLosmkgTgZaR4eV7kzL4H6BySBAa3ukMFQa76B2eEjGPLbvk8iRyhH72xjhCEhCQPF6Zdnx2kZsJF4bsbrV",
  "key31": "ab5XMakzxMJkzaNT1gExL93NDE1sG9S7vMqYe6Sw6XsHWu8ryWh9oJ1XEFE9mk5R1uoUAzeeuWxGWqYfBhjezMm",
  "key32": "4gRnVwtFk5UcsxGcBrTfRLNxeM4ku5FD4tAZ8ki9sqWh9UMdamw6H2Lhdh2kkdwDDjQwzUqHtV9PGvZ5iw2NYL1r",
  "key33": "2B7Ng9ixE72Q3V8snW2Faj9t2i4Up3t3B84tTNjxVBJT7vn1pdfWHpwoZfxqowUELLfVh9ttmG6R72sxx3KVgqn2",
  "key34": "yo6RcEamfgxdUPweBDsDA2xdacah1Lfs86WGY1CUvPZXjnZgm7raaizDKxsmuq5ThVbu9dVnUBuPN4QRRAf1NeJ",
  "key35": "wGVGfPPNEbQLiirewUpvSqZ4DSHVHtHRaahG5nUn5KQ9WLbCUDhk1UTdi89z1MP6YD5CeC5vHAaRGSZ3wNtoE8u",
  "key36": "2xRgMysHCaeok8aDZAyqSip1q4ZatKBtYmk4qfTkzhuTj9PvzZeJqxVdZCrC2YWzW4hMMGGwcnHV4DuRAPGkWAx3",
  "key37": "28EgYwBoVCRHzezE13k94yS9WHVQV917gaCZh6vdqjgYgFMGGohGSLfDU1xq89464MRJC145opXk839hHoSK76qh",
  "key38": "2cakWnrbB3ttYChjSs51eGwtbCAXP6unoAggL7mJkQ6A43PoMf656ANk94GVX19gnk2sympZTJnVnW24rZdFmH7Y",
  "key39": "395TzxM6FgegMFUSHVSonFBDKTVZRWYh8pEYYANCkfhfpCVqk1YEn5Pm8AUxqt1TKjsii1ZD3tWBwp1Yp3pMiXCQ",
  "key40": "3G1D4xCimhg7tVnxodFTWgq9MYimcDShZXyYVbg9gaaUqdYch5dHbFX4mBMdqPCJoLAAJGQh6ZU8kqgJAGriWvRe",
  "key41": "yDdLZxs5vqYsXohbW5zhs51YBgET7LkQhrWqB5ZobYXvRXUwtR7eerGdpeXWX3uiPfn67wBBrBLQEiKHR8LGYvm",
  "key42": "5Xfw6BBRKtHkq4UyKQbArqcY1Uvf6Vfq5hGJrQqx34Ke1vocMeP6A7NX7m3aNgCCST6xi9N7bQyw32Sp8SX9ziaT",
  "key43": "f2zQJasAbJ5Lnh3H2Qwy2iRKFvpcsxfjpXpKm6ZonXHwgxmXs91ny8VbcWUtRaE7KpMSQzLVCzqbvsMV9mcxFgr",
  "key44": "3gxX6wHQuMDSDjR9BQoUoiu8rUNmTFXH5jdcbZFDa9PKsCs14gR658nfxtGbyhiLN6c5mmjubsPYvQUxAHSPwMrz"
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
