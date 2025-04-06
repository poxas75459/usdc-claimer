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
    "4Eh8RfV3td1Bub2v8CDjajyw3hBv6g5fZf9uedxz9z6uKrYwXcwa7vkqt9M96EtYU7iY6KEoQesAkRPPrTbCc5mA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pTnLasWnTbRxGK9xJoHSW3eKkbbsRdaH9VbeGR3BmpgVE9P7Np3ojUmSqLXNiHm6388tKhxcrxnvo5tDTZJAzxp",
  "key1": "wfLGppgL1vB3M7Pgn49KxVJKv3cAG6z91Zv9Gwmfc8FipnfEEGyumYJHhFaLE4SkX5QBKcUHmTNd5RgUdHqL3Dd",
  "key2": "57tHZBChJyHRKq8JVeN67PYesPj9XvECigCYzeZKmh7WvUc4pDjBPnc71XZ97DqTmvCiHJS4xqEbQR9zJMqhgt63",
  "key3": "4MwoqLjuVwijAtw1mj1ysZFjpuX65XH8m9DzZgDGwMivmTb2D1tTzBNJt5kZSHkoFtHA42d5qCSQdFLNxGE9EsH2",
  "key4": "4DDrLFMuXFjnXx6pQ3iUMDLDsoHAoyoPKkiCqgXMYXbgj6LauBfk7uQNjdE4dN5D8wChCbCywAAvcpRc4xt8vKMF",
  "key5": "5T28YoXQ8mM8YEMnbSgeNpypcx6TCmLo5JqTTwGhaDtkcfb856SrshXVW4jngnMeVtGerqzkRHe3RLd4FaKtfJ2v",
  "key6": "xhCUEXtWf4WSnvWjtyjmBdh1eDyyK61UK8f43nECmh8oqX18vW7gXxVSxsDi3GdjZHY8ea7KhzVYPDNPCf2MM4e",
  "key7": "3FJLanSiW3uTL7Vequ2GJMj5rSaxR8qYwbytmPuzkeR6S5cdmgrhrHPxstbPusRrmMmxyYn3yGfGY6q78Shh8Ruj",
  "key8": "3oQf6XmL3TRExb57WRZPLq7r4XPEnFNA1UQYXfMG2TbRvR5oyg3iyqzQtgAfg8hucBZwGvtT5W3NR7KwT4DE3Wj3",
  "key9": "CH6MZFJjZcYaS2KfS7e1TFEMAuqBRTNCX1AecEqW8BZQJ6yHwfbASkNjK6883qVVKmiRhySH4gmV1RXjoEPjQ2r",
  "key10": "23N3eFrXEAXP6cGUVqy7EVx5mpCJFoLwycvUwhh4ykRVbmPgzxcVv6EGqHpvxytVdqUNAy88t8poZbAkSjE5Z24t",
  "key11": "5J1fbm8AuYJJivrLBF7XH6NFZVsCBWzJ3BZ7RSLckrCnbsjKwYKGEAge6yeUDg2X9rkTVqTckXFtvykBMwUxWqty",
  "key12": "ghhwWSifrvNZ5MJaZUG4ftN9nS2QLDMLogF5njgBUu7h8y9QsjbpkWj3vi5yH833sJ1du9zZQgrjwdrquK6Fqb7",
  "key13": "XZGWreasY2rbSwS67kJYBmKFoSP37n2Xiv2C3rS5sYK67kz6XZtDeXn8aDTudcnABtQiKZqyGjkjpVfiDrvsgVH",
  "key14": "TmvADBE8VkTipxYq318BVXKiR6WHEDSDMohuspFE3fZzWDnqBmWieWeygCdv5z7dVqnHBm6oBdmDStHCMKfPgH2",
  "key15": "4xB8jKuQLSQ4eFcbzfuMD9MrJSvqDihsbrCogf6Qajte15u8gzRupKzpLbhHP4gjmkfT8CmCgxvb8woWEzfm6UjQ",
  "key16": "Bxv7iL8ycXwEvXD1awSnr2rg8hJ73BNUdruWG3ZEfGeXrxXUj2kXBAR1t2992vEiwob7v8CtJM2KexcSncVhFJz",
  "key17": "29YD7GpGcpA24gXzHKEaGaAkosTTYW9NRWKB8dfHpyvDRreLZJLn74MSXFErde3TRB9EkJaWgHFLA6xKcFVNKucu",
  "key18": "4NX6Bs3pX1BwFE4B2pRDpEwhaDULhbh8miRrokZ1mznLcxvTrATan8uYC3p4H5jRDSH6zgpqXEqSMfK9b5SAYeDE",
  "key19": "ubFQWkvSMVvtK7sANEdraAD9KRiM2EGJTh5xyZ8rmY92yphpAFN4YfLNUgM4bfMUR9xWkWtLxGZU55tXByxYq5t",
  "key20": "2MqLXmSawcYahfvTwattZtftDMVzTLhRrA7BAvHJT57UhugoYZChV7PWAg2QhLJ84Fuqacv9smenNHaGKwLXLqhj",
  "key21": "eYutoZVoaquUTb6x9nszGS2gm9ehz6gaiUfTahrc1SEdVfx1rq8GLPh9y6gX5PMtNtsY6pYjTLiJTbomuy7t6XY",
  "key22": "4JaqYxN7R5TWdLhSCU8WqZUctwk2SHtrfrj6xuDWQLpWByPXgE5YMtKKEooVN9bdqzx2AArZK82hQCo8QMaqARaE",
  "key23": "MDPcyjnnpAB2uqzMK29YLZ8nW2LmXbZui2RSZEZk7nV5azVaGxL2M5vRP68jx5iPKzdQCpz22e6dUdjXSgs5stw",
  "key24": "4eNCo7xNmrEoXCAzYE3cNSf7Tftb1rTiZzWMNXGf5v9JmHV8JFLD87fLCrpZzwkjwkrRH3dUFNDHSmW9Yxg4F8HA",
  "key25": "5x2Gxfh1yFWVHQ5V1RatU5gbGfTdQoyXdkeTiMq876qctAwg7fJdi5kL3ws9m5r6zCKttsEad2G1vZW46QLMLNKU",
  "key26": "RAzPTT4Yv7TNm6CV6yLmg5Zbe2fQCDGwUJ37C735V1bY2w32UfR3ymdrbWzKsML9Urzhwdmt1gKjpeYchXrz9Sq",
  "key27": "51TvMRkWEdNwfnZ9vvjiW5X4ZExRGdNHwVmxxBskTBjPkj2oHaKnfz12TPm88uAYAZrxgvM31v8GffS3NCJTQLd4",
  "key28": "5Jcp4TXF8f6YrVZ6PwbwK8B27ksMuGPM8UzVWjbbHrUtzPHM5Xg3TAZowdPwuow6Dyshr4KySi6pZA1c4fJ2mvVL",
  "key29": "2HhbJHhUYvCwrsNChREba8LKakUhygpv2ycaUZH7vjb9W6DRg3gvQHy8U2oEb1pEcULJkHmeQqgdZcNa9BNqPLao",
  "key30": "RFeUxWuqNReK7jefs5risQyV3SPaQDfVSvpcNnL82YD2j6xvfsuwW2rzxhhsLZZvSNPxJ5n1GD139HHV9xU7GJY",
  "key31": "9hxGhihX7drHqKktszEeKDRKruYPBT9BFo4XbiNQUKMG4pf498UNhfkqrLMxBD5MgfeynWq1XM8SjPKWMWXKkf2",
  "key32": "3pWQ8TXLvxDwCQWrAyJXwxAoa3AocYuTywpQr73hEBgS4n4i5jdsSD94vjahX4UTpN5TWpD1ZQjBtyzFYDk9Zp84",
  "key33": "5wHiwQrr9RnBD3PgENGzenUgnqXSB6NQfS1EefKZLJ3etLVTdSpPPPMGLos2hwEgEdKWenb3RGavEBfDoa4AfhbL",
  "key34": "3gTqfwTKXLxPsrYYRDKC58miemerdhXC7XGRN6mCg1bmaphJyMgEnFHCJcuuyGj1U3JagQLrTBJWhFgB4E5eyh3W",
  "key35": "4doApYvAMsh3zYbBbyHCCs1Wek7y7UWcmrHU7NMBbBXWf7vbJCAxN9wZtgRQKMca3CPoLWwfWrnUcmFstuk651SQ"
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
