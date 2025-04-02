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
    "2jHJHehn22xnthCsuSJ3gkXC8uNgrXWbRssX45TWX7y3JUuxXfDivX4jCaxJQY86QAEP3M4jEGZnwZ4xx8hKkeQi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Lar5xp8Lbr7CUufiaritQHj8YBLipJdAQz49BNZDfx26KCy7UNr3R58VGqqXpWUcAHc92EBeUcNS4CJQbfr6mFK",
  "key1": "3Mqc6aySMR8csSsVF4HsANQFxmVC3mu1EuhUePmgexnvzVb3k3oCvQQQzNqoGH3sE1yHqvaKE9vfP3kfk4bs3rAZ",
  "key2": "2WKDX5X9BuKW3ZncQv9b3eV3mY5M6LhdgvpJ5EuHWVBhaD4TA3d1utGASJp6vFD9c2nSNkvwAqwW1JN2SxZT9x3n",
  "key3": "2LBjv36NNXnp5AD4MTSKadrfJtxxsAijeCFPXLF5mbkMENnPv5G6oMfrvpQgDaCWYzUsHpWkZb3jYfpo7ZaQUAM9",
  "key4": "664YUs9hxVNtCq1ZSZNfjnaNKPc5kM4f86v4reZL5Jk5qDqgqhjNxChCnJQc61XSe5qX183b49PMjxa7HyuMxjua",
  "key5": "3PENmB4q8c74ctgpnrpRnQiGgwoVMgR2zL2iDZ37ZB4BpewKK75MZ1puGfHuNjVGBdfd2nP7BkdhCiDYoUPa14S5",
  "key6": "5dF7NjbfnRnRSJcPgHwVEKStVdcKm52psMT4Xu8QKg3QTDSUpdtaPEUS4JG5iT5kbsmdpweKvicjgBaf8NbJuGhN",
  "key7": "5gwW2jd9Cag8ufzNv4eUeZhmrWXWbCuXUENSPxhFEDykNBVsdWcDpr3ZyA7Vc5dp1R8zenkLcPsEagS6BwTZDsDK",
  "key8": "2s9ZbeXsC5TfLeRwUkgfsJoaZpTjGjFsMY3VMNi362mXdpX9WgZtc8Hsb34umFJ8cqy5et5DM4ig2KGVLLUNmFJC",
  "key9": "2inn5g6KjUbLJFUzkbNE7vDreGuWisjXcKGdwzGzgEG3j2vKgLgrf65f5RsNELqnGHu2gbMeqrr9n8UUXfDVaSLE",
  "key10": "h3f5yDKSK8CCcX1prM2zQfr3whsAqyX1pEvgnEVcKNo7B8Se31VFwzdG9sAHbD9iN3ELVDLN2kX4No6WM8wKTA6",
  "key11": "Lqd4s8dVNtM1tQoyi2YQomuAQ7afsjH8YsF35Rf11V5eMcmCyZpxTXXGMf8fCHon2YVuFBRFqf4wNpe9amLaSt7",
  "key12": "2TrC5E4c7Ez21LFtTFLmjJ24uk3s9kGpBsL83ZAUxXX5TmiCiA2jdnUUsWkqvmdNtbxJjqH9y9qkYRCBZLMih9Rh",
  "key13": "29gvecFirMiN2kDodZNxktK9kjhvLFXXpmCjMTSDiaLqX9SPsdvrghbn2SeJqj6rEVrvZU9grvWZrjoyVbdMrMVp",
  "key14": "4GBnNdEYufZBbEovrYcT9SoHz3QZWS9FqSQ81ts1fwX9FnXVzLW3iuFizCcK7j6zFGDt8sjGRwCmfgHVaEtRWWye",
  "key15": "CRPFqbVSAE8m6CihtuStYhUTFwYMVWd4uWaNd8Y9SeLM7cq3h4rQzjnY554GNASWwrqhXwxf75ByYQnKLWDpQ9r",
  "key16": "5ZCsnpoxAsyaaSEy5QfR6iFUUzVJd3E4hhZr1GAioCMXxE8KAb4UFFACrmsqbro3Jx7LUSLXXi9o94HgGutVwaX9",
  "key17": "4FJ5SvHvvA2WKv245wpfpsox4BuKXSCcYU4TB4JVq3Y5jUx6kwNPiLpz8Jgj5E1XJdJvLGut6c9xVMeAA4MQ6KHr",
  "key18": "4y4B2TRuf5r1fEJSVMspwNaqSC4j9ADfmaN4ZUudBfeLYkvaTQxL2zqJrq8KngNhipdCLoz33o4k5mmxyDmPu5rp",
  "key19": "5gbsHbHRdhJ4u4K4Yt69bFS6tpy5VWcUhTg3XppZJcYpgk2noy3kq9y17Qs5DT1KmGx4SojFCWQapNbE4v71PAAB",
  "key20": "2ipfXJEoFVWcyVro3h4Zubp4rSQjodg9rM6DA2MMjfUYh5PwbCJAV1Yj2nGRabFUkLGr38Lg9SU4ExCLwazMtXKG",
  "key21": "vjJD65cfLoCgWNKaZwqRsetX8UCaL5RZzrNsZX7GxVVYiVAkDqaDqDEKT8rZqYFJCUth5bLJxbiVfuBhhHDegzK",
  "key22": "pvvxD3vY2v17J2ZxNyuXfkxE8NWBMivV1QBHhvzhKSuHrbZjtPmH2kyhXVAz7tGJGoz2aisuqoCXyCh2Agr9zMt",
  "key23": "66196DEHjsuXXJXALTzQxDQnByp2obAKs2VWo6ZAbnDiQHYRe5xHA2dbBJvUgxdavvZJD3EpYrscBn6ezxcmsvF1",
  "key24": "3VAxeXbceMjiJaSw6mW4wjz1FqqnDiiTaHxFUtd5KegXpxL1GRafFYWUQNVhdawU7evqnd8xTYwczFE61TCjkZhH",
  "key25": "5sDtNR4pwH5C4NRcf5XweEMTzQ6ZYpxFAr8nvRaYXz6wgZvditz28qZEbKrUmExCZNk37ca1Q9NdWR68KVPGYPb6",
  "key26": "1ia3JXGdKiZ6BfYCUNd1LXYLtoxaQcAbzUohVTy91oZwvNtj42AUJK2S3Rwm1iJqfUsswGXCor1LdXyZMCGEoAk",
  "key27": "hnaNp7hYjj17cnztuJPjFtnXXZdpPBSfsw8HG5Jyj6jUMq4KWKWk9NJGwGTCuxY34fZ948uYWVyLMdDq5wows1x",
  "key28": "4E8MHgCunk5aevGXkHLi4Ff1SYzd7sZnpFvV6mqb6n7Ggnoy4jD3XaM84EpeA2B174gaYMT4FRJMxNNAr18Z914B",
  "key29": "2aZE9pDXWACqu2yYkdG4ZCniif4JPkyG93LtYSihRJepyYVmsJQL9VEbMkpV1bkoaUtWuuQxjQKEZqVtuxHJuoWA",
  "key30": "4w8HaPERGmQmhxDY2PY6Y66B6R5NskYT8DWvABgNNbtzuxs2AErAJXawVnzJJ7CXNhcn1GsxikEwLwQBrRM2Q3Vt",
  "key31": "3wk66eH3tBZmT3BJdGPkZUALtqFGGCL3fVxoGQVw4s3x6pa8rGtdh49khfgEz8bcGKgcY8MWfvvsSKLSmBSKaSu5",
  "key32": "3tVWgxgxoMgZonGha8oEBnAApQBUUCuDyba1t8TPbR9AJ43eRVFbDKUELE3piGdMLWYkQQyCBrxbikXHWpm6QfpA",
  "key33": "5nTHzbbbH7J8QtigzRVFKMecjdrGbcdU793cBKHbJ2BreL3g3pTQVgoZXF6e3cXvH7cgc6fLeBD8AwLqMFSNmcH9"
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
