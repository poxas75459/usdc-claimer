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
    "5WCt8d48uPcZBffFQxhZqjdcbDc7nfipP5Hy3xNJtkaNzksN2QgsxvbaojL2xmNtEbCYLncGK2yMSPQbs8ChPf1G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55LgP9iiV9M493G5zFPEFvA3Gcey9q8GJXSFthQnf4MtBeVN1LSbRunUGmrA7h8kegCozUJbPGqRdkGycGzFGPkM",
  "key1": "4C9Yf6Ms4CJG8GpEqx6YWmh25BCEZUuZnPRPvauLThjE1FdZ12KnM4Bhv9YB6oL8maJt4kjhfhPWH2GV7eDEVFwW",
  "key2": "3zk39Q9y2QDtWuGDnEhUbuANa9ATm4G6kK5h8m3CyVE3ymuvHZVD94AZGZpPvCJJyhS1zeSjNUoDATxbBWfcJ2sv",
  "key3": "4m2GfdQX29B6ZQLJoukxseUBDKD22pQiW2F3SJKvEKdz1BT3czdpHGywjWa8ZU2WAo14nyniPcwUeu7vHFERzL1C",
  "key4": "5otUbvaAy17rDfcn1B5ERUM296UMB2PiFczVM5S2D3ad3kXCXGgtDB6uR5y8fqUudcMTDmb3gG3ucGRNndg5kdh5",
  "key5": "5wFn2mXieXdFqXWb528ycSFGdtmrYqS892BQNnRm9z7c4GYoV74zGGSvHEWF5zAYM5HpjGdLFZ6vopCA5nzhugLS",
  "key6": "3cSTdxPgbZVrtaxUTswm3uXco4HJG9pYmhZnKrR5mLEvf4YQRyo7fV1cMi9LwwM7yVdS7tPhvQJ7z182eo1Gty1K",
  "key7": "2UR1SBqacgaYN5KQU37bobnGxdZTz8NpPcck2L53q2rYKmkMxSKQSSYwceqbuyLEj1M6p5xvYEW6zTojCjTD2KYu",
  "key8": "v8Fp7weQrcybjo4XgD45kGfx6qJsDYMnN8ibt9JhtRFEf6cQnUQqnBJ6ZMmYGKBDQBRRMmdhdVwbqsmApQjWCC4",
  "key9": "sy3FF49esoJ8CtWunFpNwXayqTvHYN9XLFPd1BChT4sdT9HbLxJbLh4DZxrHkXt98842vv7Wbkgh3wgGvjFYzXa",
  "key10": "55YVz1jsAeehkEJtxcxvNRrGqc9krpE7CwU2AqLQaafEthF5FHbjTufYF8kWsQeHtewdMrUDrQ2UQwL5oyZKvYqp",
  "key11": "2cgFbydCoKNKp6N6mgKncBeVnkbkknb32JmBKoD2gk7kEord913n5sVW86CTQEdHsuwHrybpzSTmsSz8CqNZF74R",
  "key12": "3Y3sc2wmNicsoXFiJWq7ojJJWSwZc48bMy87VZ6fZcm35dP9mbt973o88y3AH4GSXJNAe8idyd3Pm6A5cNTNm1Gy",
  "key13": "4LjDvdwRKHahvcP6ynaFVBjwo6n9rjPyU3vLwS4gCvpJSNxv3wUvwqp9PZrHWm9vEgaHxJrcVayUSwvYonQho65k",
  "key14": "kKuhDriDFf9JqK17EnWoqHzk9Z6JoQqMVYdh8urRkbAUuT9vnVF9SjWXkdfeP9se7c6sh6RbE8PyrXQmoaUjAVt",
  "key15": "5Etv6qcmPhmbvCPVyZyGTmv4T1CN8M13TLpiCUA7Pcr5e47FVyPHD8dA1dkDAoVA6n9yXTGDnWPP6bE9YYMe4mgV",
  "key16": "3s9fmXhZ7RM6Mz2SFaE2UXm3HN7zyHRcXFmRLtJsMUYcQj9F2vWz11Kjja5Td3heicr7a9kDz79SMCP2EMuRGGXv",
  "key17": "4Zs9vQJGY7gwYMb16bqFGyTkUgvKip52h699j6BjUKYUe1V5hKm2tXCku3dXotn6FZHAwoJyXt1YXpQwYYHBQCx1",
  "key18": "2BQHqZZUeiBpxyN6zqrhbtfMVQPYJj6E5ucyjskcj7c5yip5nVomJbcm6BShZeva2CqYTnL5w9Z2F9RAsYbBgfZo",
  "key19": "5b4CsbGS4eJvkKHcY4EMW6okUS6CCUWrxivZzycjnTY3EKaBwJ7ptAuy16q1qTeo1Y4wgLQaUh13UmizAgYLfA3s",
  "key20": "35UGAkUd34UiZxjntmVhRdeAvEa4pmh5uagyxjjbbqBaTaaAk7BfaskJJhhtiEq3fkjiuMuG6HpRqo9VBuvmo5Vc",
  "key21": "3Q6Ar8VTkbCoTyPrKF924aRqpQVwb2v39uNEPnck8NPLsBvJauBad5h1HCV7oPeUzagFhcoCBy1MywMjxKypHqkB",
  "key22": "56n2zhKU77ZSQTWHnWeLxMZ1K2Uxk5eRd6DAGoT7rdVPoqkkDaH9wXV6GQ5wVnyXLGzPLysj5LKPZGEXyYtJVWRC",
  "key23": "tq9o49m3jCrvjzEGr9xr9rXvwY9knNcrMmcXbLYmKaiCh1GW8xGjc7x6tBaHRU4GAEb8jAeJRExvmTcm2Wbfqi7",
  "key24": "5dxxGDpwf3eku6A8WJb3acKZHJe3NFxL1yteWtNMShHrv74854GNufWkH8gvMZgn3g5JnBJ5nGNpRfQF6ZfAXXC1",
  "key25": "4wr3HQ5eioye5LG5nzrudzXK1cw5WJUcjA7AhoGhZxHP1PaNQAMUYCevmrowHnxJQDrmEK5uYHPYraV97mni1Bf7",
  "key26": "2XRFMhEHZ8zG1FPxW5eAjLeCiBndfNHmk5Ly85Zdq3S28mdagvU6irz6HELBiqv9Z6dkhZL5ERZm8Ufk1XqZTLWb",
  "key27": "5Y6mLy5rVkCq5Cq88ipNVBKb8VziQ7d9m2UGu633XKq2q6wSccNhCBLfH2dvwDS9WqnwAwQMeXiqK4D5TAgLVeFn",
  "key28": "3BPBznV9cMSTSNFuMxKVeV9pqVUzmfxcv4ALoJBMpEBeXm6tYLuRtsXu9sG5GzZYzFRAwwEmeLPEhjAc2AZ54p76",
  "key29": "3u9kDCNCt4m5i5cykvfay13j9SmMbv7y3AypSvvF3HdXLQgig2weyaAjDFvKsKLpp3GWs4nyrbG4aFP7mYbQZURi",
  "key30": "toevwpRLsua9AAyxaEPT321Uzbo1bqcH2ikQbmuR7RUJ3thi73LdFZMMtnwLB3VVBqks7RkKXFRapzLL9VBJ2Py",
  "key31": "4QPSXBm8V5qdLaRMSFiaFWWZwmLshg6vi2drNxvFPz18ZExHMLhGiKWeFeRYbvwiWni9t21h8tXduaTkvGgs46ZN",
  "key32": "2kNm8wgwhJ1PKHpWEcUv5PNT1fSwfeWJYM6m45L1UZ8A8pMSL2Vag2dhoU8V5sgAT17ojCfqUQfwmT9AP1t3zieY",
  "key33": "3nNDaLhw52ByMhYybGPjGbeMenZePwiymJAwb8yTqcVx94UYwMebiNN6MzU67g6LNS1NzUT1VT8KzvzRxZSvhAis",
  "key34": "56wXfoRdjV8Bz8ygSz72UgzjCAseoGgBHxNyiWfLJNRLWBU183NEGbDiiBNaBZfqbCVDjm3KhU3655hQ6G2HkWU7",
  "key35": "kGss6jAHCBftN9NUdTurYbRqw8B6UBCNsApJh2hYhCPuuL8sAaKnPVjPKU177aheE6RJBsitQedJKvyhb4DgyZk",
  "key36": "3VvJYLdyEnL29inGeAkQZjQmnyWiupd7ePsLF1FtGWjv3qKUiSrZx8asbKuViWTu66LCganYzhQ53rxZDX9rXAZ4",
  "key37": "5FgM8vew141LTpaqPSVsbd7CMja9YpeivptqSYjmzT3XmQdbXG1FCPApzu48PphuN63wDPxrRyTYuWzFW1RFxVrg",
  "key38": "5ZVqphoGTb6f6EKkkxzVoNVzu2TV9xFUNsbkUqNgpXxZQfRMSZZvVsmSkfMrmeppnCxR3Kje16Lyadq66nAAvyq8"
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
