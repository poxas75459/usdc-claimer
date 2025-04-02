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
    "4egdBcYWnEJu2MhEg2P716ouNH2d5FaTRPYgKL3a9pRzxt3fdAAQux6d9LCMn2kj5aVD16f5pBYJzZxBt5n48DB7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cDpRzPvzH8sskWBbRLShFDt8K2hjgm5rSAxScrHLT7o9tXKk3tv9eGATN4ZTFJdnvYHVtR2aAwaBEKC3ZUdWUgm",
  "key1": "4tUrUEBA299vwpiQTmVYbVugyAjgVKcU8hrnmJoq5LR23J36KYKP6krPGp13rZiZP81K8CaJj5mrp2roxerQjwdj",
  "key2": "2biXygcyq63TTwgQQpZgFSGjyeLPHBnogZGhH1WV6h5dLkxmpUCGc2aoF1RdRQVxHgji2w9MMJXmcNz1rsRdw8QS",
  "key3": "yDwVewMe79j1Cet47Yatf7kpFCz25ztfxvzbVLA3yERj9uiq6T2RhD27bBFy14zJVvRW6zUUSVhjdGHS9JrQKJT",
  "key4": "4nj4XxmSEUBDtXthCW87HhgoiE6KmWFpQJnw7Ha8mc7ZcQMGGCcSWvntHUGDwkSGkirZPvr6MBnm55Pj2RWBqbaw",
  "key5": "6EBMPvzWV4LUJyuWixoZsjusahHxsHBqVMuhbwKyJFoxqt4cL2q4MWcmfW31BDPgxipgNcgSyJTbNChuP6u6D87",
  "key6": "5vmxfN2k3st2pMmbCcaG89SCmUtY8JmwGzSuZFtZGAYfZhvXTuL5E1TX7hQFem4dUwFE3FrDpgowoZPMJvrZHMyf",
  "key7": "3jwRYa4EAPU64DqS8v5VkqbZyX42WXdVN9CiaGaraBR7tUhJR8H7SKjT987ZzVfZZTvBD3Aau7qYs4XK5tWZvhjv",
  "key8": "3wF4qQEojVdRd5PFFdAw88bhF36BYWanoog7hyaVV4H2FarEo9KxGM9gKGNvSbJQc4HVK8bCPWDYXcZNJ8QDdxPp",
  "key9": "5tn8btoVMin7TaqfdwRe5TGfb4q4wXAnAjzUhiyK7wdg1rXY442MfYQ3bnM4nY3KUNYKtnUGP2i9fuYBsbUuB6JH",
  "key10": "NUvBcwYdnK4TLmQttkRdt2B7FQMZhpLHUumkZ6W2aF9a9uiMAmKkBtpjs68LF8c1pCvPUY4U7jz427LXHhY2yW7",
  "key11": "4WSUA6aKYYgzVZTNRA3eauBCXJaKDj9yDMJ4iuizxqWzHL9Rdff3K1HJqkAeMFS7ucmPG49EjdxAcagCx6TZ2XhJ",
  "key12": "3s8XHHNMa9d6aCRSW7J8VfPnGtoBwF44iWF5ekrvA2o7kdSgkvWCgZr4916UEwvvm6h2u1EEZtPtExtXjwfmudZN",
  "key13": "5pGyNQ7TDq5ZNWxL4qTe2bJQ5J2mo2cd9JiHj6GjZoi6hQUE91s4jVdDCSK7zC3iyCitZQyh7AK5KD6zdsDgzdfZ",
  "key14": "4o7q29iCEDuTPCiz9MNjTiWYEHV8JxiMDy3grqi2xXwBWhyiKZM75LghZmJwBj8n1cBhdpzqGkufbTitDKi2QCRR",
  "key15": "4tHmJSWS3DNwtKbhgq9QcQuHhBKTcitnDdPW7nhHsRXEgHVAA8VcasZNRZ9G3HCkgjG7PevynZWHA9C3aVNWuVJf",
  "key16": "5D4XJHPW6ELEf87sVS62s7Sm7mXWQ4dwRH1dSsMAhaUheYsrV3d5CLnvAtrg4Ed8wTngSeKyGXZdfQFoWpFAFZN9",
  "key17": "39vFbXaLeTYKkWfzYNmt9LU1qAZm7dHhef3N3K891LJye9tTbqjJBj18p42pkCbYG2o612V2mPy9EfQDm8AeKBv6",
  "key18": "4Ut7rWKCCEn7eyj4kwSPEkKrqaVxvk7vM9FEgofFZhDcAQpC5gujh4Yf4tJuv3L6adMYG6gCAkyrVzEsbXBWPqTV",
  "key19": "4snZrWy27xyJLxUHHJSTxxQaLs7D5CKvjby8G1uBVUNxkivTnt9RzaqPmjFGdQ4muYEZL6Uw5nYmtTp1NRvyJ6tK",
  "key20": "3o9CskFF9Radz4vRGvKLvHSNHKwVyeyN1PPvrFvHayBHPCR3ep8yQeLe2kMuZ8SMnBDAQRYcvMhvJ5urM9fnPDWk",
  "key21": "66KhBkJ7yTAT59FxWYPdvDmcM8jsvGZeBUEpdBgiK5wrfYUGw43nHayQk95fqmydPHoHqtxQXtydgr1q6tCqTbbs",
  "key22": "3WUxnGauAQmC1TF5theSqMvJdJaQViLjUPhnPgTCefNTyT24exhkjs7aPEyapxk6zPYVEcZAgYAtCoCz4AXjFcsj",
  "key23": "JDdC6CLaP3GGsurvHZ3k7S6xVbHfNgpzrQLtgQsQZH2yUd3WiCs4q56PDyZwcFqWh6sXiosQM1kEvhkK3nZHn3h",
  "key24": "D4yRsFePPXg7b7Rw3pKgaUVHJFLxyoPXCfnnm8fRHAzSYuQ1S43SqmAF9hKNm5ifvcSJcjCLTXNpdjJ5ehnTLyX",
  "key25": "2bcaoTEUcxLvuGHoHLCcDQRYTAuCx5SLmQvdrLBEqxVasobgaHkR5z3iMmf9nPtLKz2tUm9X3toMkVDLk3KTg6Co",
  "key26": "5ZddW1FLzaCZXot9meU5FuUhpvaLcMhkMJJwFUyPwRAUVEfxVw1QPvG8Bd3Zgj1omotcUWN8MNxCp4pYMW6ZbijH",
  "key27": "5Kq8foEbQRzqsQTAeDX3ghHA7DP2xH53DBYgpj81iHELGT9DLXs7GA6NnPXsU2uUihgC5xdkM8f5YrjHgqTUGcwG",
  "key28": "5pws3EumFyC89KyiDEoQqcJwmNErrrFdMSFbBR1HUg1Hdyq3GUyLSkP4qxPFSzw9QT4nQr7p66Sd8HJiAUMBFDYV",
  "key29": "4VNoUq4kz2ZheT2Bqqo6VjGJRWa5MgMzbMxSGmG2PtWQn3aGuhNsUMZMsy53Q5KvRFiX9vCcWbPrWKP3BECE3ERk",
  "key30": "XLp6xYFJ2CgRfVgXhJLYpNFS1DPtx3vUokMo1aBKMmGDPjeYBhyPaU7JLtmQ8Rrmm3K7DAYPN6VCmgo8FoKfz6T",
  "key31": "2ye4k3T16BL6KYWpgPooBN7TaXgwVcJgKzy7XctbasRkjfyQCVE3evegQ7kdNWhKZX5vropEoeHq8YZ6Yh4BKFLv",
  "key32": "3RUcURCtTznVG63gDKiKkCG3CLXajTTLwF4DNuuaCwEFrQ5SU7kYfhFYtYo3jgc6CfADZQaHe4rgDvWDi6Eb9fwq",
  "key33": "2RBe9Jj4EYrVFTYqfiJpNLX9pfzEtVoYU8ygZsD4NeE95hTqHzppGooyWvhzMC82w5ZjqCA6fbpAcTpLtx1AXzMH",
  "key34": "394wBTWmmmrVejENy51ZURokUkWtEZFeQX9Pim6QgVGjE37Cx86KV66GAmt9FQg1JKSfJKWLEQh83p2bL66TN6QZ",
  "key35": "3fHAJpwAzdPhjiZXCMS92s38z4awqgpaSys5q5p5L4CVzA4jXeAuXrTEv9Ukf9xZWdZiGGKRbvLdvfYKQJnmLCs",
  "key36": "4ybJRF25QXwWdN3xshT29GxqFGm6Fb2HfvQCVpBWKPrzWsAmpP4vDdm8v8of2dz2Wm88S8Zc1ZGt12XuEwWv7ERA",
  "key37": "cb4frDUwbX2577VfKgMoGzyr277hy93iXs3Vpfs6DcD1xN9w3RFk1fgvgo4McHeNQh5Z5vL4SRR7HygkYvnqB6K",
  "key38": "jyvrEU5jrnRc7DEHbVRoxGGxrHh5M6YHKtyD53bGyouHyEAipnCnAujL6W1GwBLfbMWW9smR5wmW1AQEgjTocYP",
  "key39": "3fsYCQHaEFCPdKLqZMFYB9KMevVXyebKtDHZJAWdUX8GKL3MN4TwDR5qzruehKDqhjVG12DdyCsVE3YPJ88nphRx",
  "key40": "5eHSoFwH6VzMYMML5GJFWGmvzyVFX1jo4xewK7pa5GQcDAT6JXrjEmUGJw8JMTPoZ8gtUvV7ubDgMS9Un3pkCLrr",
  "key41": "2LD5S3BGr6CnNuoYbneC7Gptm1daZxcB3e5asa5Ho15DVKwQXy2MrFNQDufysYhvFQ86dLgkdsN4XQxfSLvWHyhx"
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
