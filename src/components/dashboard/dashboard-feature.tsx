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
    "5DdW5a5n9ZVnGFXkQioRRjRCNRww3EvbsP1PPNVSbjcF79LcsDK2Pnqdc81A9wE5ta6bA3V5ioNW82R5wofexqXj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "b7EkpLHpvqbhSrgvJseqTRQUjYMTx5Ao7hztajm5WP423mPh41ChMF28FvD92BkhMdrWHu8toN44xaqqFLc3h6T",
  "key1": "38nNzDYxr2cN3hXEgGfa6ovWW6bu2x2EiavCXHprCgc7mT4JhXL9NhagaFVasbgzLeRyLSS6QmWnwLZa13mLDvQs",
  "key2": "4pKLHrAFG8CCdgL7TXJEW81Grs6GER4VC15WP3sPyVe4ADmyV6Q1Afqj7v2PrhUBs71kJC622p72i5ZLcdeGDNJE",
  "key3": "3tggDyBGXRnXEVZsywtWMBtGyi9Wc5qxejT6yZHjFoyMMrReUnHQX3J4UqivEvd3cxNs5HfC9ywLq7qHdL6zZHSP",
  "key4": "povwzwbZC6p2z5JypRFfWt1yMBvmVcwRJ32jXZ7vHNuJ8uV7Ts1FsMfA95iNsyzAaHS7dQ9hktEoBgMbBoBGUYS",
  "key5": "V4ftq3vG7kGKfSiFgCVJs3FUvh5Ejrw2ft8ZtEAN8oBAmfpU2nSwuDLEzBnLTbGfS5VBJrZtEj9PGgASbyTDFQU",
  "key6": "5G5YvgYmxaWSxYFhG4FUZ7AYuxbJ8qnhV6zGWwff1uhsoh2LFjhpwP3Yzs8waQDEfVauHttxs24aciK5Z971nrVA",
  "key7": "5D5xYFEn9M12UD3YhA8uX13RCMAw72n21QfVuy3ox2azczdVVaNxHyWhFfBJzBaCq5vnATztURVKvEKP36qFjVN5",
  "key8": "5KjmMtQgKKcG1QrCUb9j76jEWkpUmUWHCtbavPjs94TXMC5zReGFYZMoPk7KqFpduMoya4a8aaxUvFG5dgmVpVLf",
  "key9": "5yKsXJqkwD1Kh6iqkMx7ZQZiFEDnZu6zGbChcYEVdmd7U7TmncikopsgLtR1Vyw8JxjFuYS4qbmjbfoj5NTUnhci",
  "key10": "4yqZkGJHq9KkkcZGsSER5rBzLHgKs6ozV31YrBPxN1PBoeDhGxQ2qxnZ7JbhiGbCwqyjU4w7hoyRUkYQJK553uky",
  "key11": "SSPwBX8gNnPXNyzgcSpCHzAaXkovkkvCvGDrEGP9RdQCmwTLvsdex3sAAkPEGCe34nBsSnEZSGZ8MwzQRKyQ2Jq",
  "key12": "29D9Ji1ZL7YkrRrRJxhmT4oxgRW58Wtsmvofus2913LxxnLYQz5dJb9TGnR9UenhMWYYR1UnpG64yD4MJdmNxo4w",
  "key13": "tJ6AoHStpCzDYrj4yBVj9KYNeHuJuWaJBxTn7up4T6Q3Nw21PkvJpYPYSu4gxdwqj8HnzCRkp8bKxyYAyhowhYK",
  "key14": "4m5GhakBi1zpLEP1ap2WvJXG7KefPMNEGQGnh45HcqkZLWpmF2rLbkw5NeUXeNsEbnBRdUAQajZsYDmf3mCEwrkz",
  "key15": "3fenB2Zra7u63ue2n3hgzeKQ9TxKGxTSqGrygpwFjEA9nYC6TgPi4VaQGw9cb2u9CJtGqizJYuzSwjKQbxMuEjX",
  "key16": "4KjGi4iaPbPms6iwqiF7LpvM5jzY8BoYaFPyhbgMHB6inzQrUwBg5Q4KQmCEFiZfHwcyDcyBoR4dbVGhqMBuPJBf",
  "key17": "3r8tBz1YeVWftaQVC8n6UTVcnS5pgNBuhSKXa9KDvRi1ohjudntC5Xg7BHHkYbnYxkxbqMooyyFw6GSFbGdQB8DZ",
  "key18": "x6KZSk9ZUKt75U3QPUjrT9d9E3ShBrYs4sr15QAaShF4qT3R1dfUoveZo6ENZysXnFRoSJQqWnU3VGhq8vDVfYc",
  "key19": "vKyktywwkAwZihuGUJh9mBKiE1nvtWuJuAoB7sFXnU2RcaUES9i5XHBbVaHyj7DsxWXQPg68zQLfJ8uqqWqk7BH",
  "key20": "62RsjC48d1wDkGyeUnRC9Hj3Zyzs9N4UJ4d7gLuthz22n1u8Q4LfiEju1mQA9zav9smUBd5W7NhPFFHmM69LmU4",
  "key21": "4sGQ31g5ACNvHVxn6vdkY7C4i6Bftcb6yDTLNTHQaBWr6eygLnG36F27h1P8sk23y3itJnRkmjqx6QfjvEAaSy73",
  "key22": "5mkdFYkQbR7TENtZAyXoyNGDZNewCynZvjGfDFLso8Zkc5oa7vMUF12BZLU3hzi7LAdMo726gsz7QRjSwNXikQRu",
  "key23": "4wT71ty8usMNVYNWpVXPHmJZ64dMzByKahsk6MuLier2nAc8eMBGychCdR2jVBzPTtetEHhtbhXxHtbiiLPjqhTh",
  "key24": "5VjE2VMPrCto6U33V7UJQCRWnkt2JxfZta35BQhRdqqw4nrCDqnMnAiFFS5Fdcxsi6GmbxvtNTpunoPjcHcF73g5",
  "key25": "2niktr2JysCmEoxXZTKv9wP4PPj5R4z8JDNfER1tXgNTbNfioZb3UcbrjacYzmNpiMztpCv1PwzvCz3SQ7zQ9Kot"
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
