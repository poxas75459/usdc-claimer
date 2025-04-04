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
    "21hYPTqXnivdYjoCzVnCEdECnuW1HNuuVQR8HWLTBPDuBzUJKkqFnPkaGh5FG4mKz9D6mKMAkzyUNznEdTwRZRnF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9Rwpg9EprkpV37JALL5CJWqzhsBaS9xGZwxpBiT7zVcsTeWnC917CKEDrHw7Ytbxy2cE3diDxevZJH7JHn9j6zB",
  "key1": "2NnfiUvCQnPwqUnbatE5TDDAkaLRNhKxxnpeySNWDxHh8e1ZXJBNziv9HexFqHKD3GdnkzRKjmJZXHAR9bJBcb4u",
  "key2": "3woEF9oMujo8z5wzQwsnZVXwBRVDdbKaKH8tohW3wqR6kNJpWSQH75sovNwMhta1bSbLJ6V5r2tr3yvf5xHYpy9K",
  "key3": "3cmqrugwYoqnwdjsyJnNQWYpyXgEtw8hQWRMEeKoJk3jAQVvYjcrx3P2aYSgvpPBFTVq5nbuypGvTfrRcBw1rJyE",
  "key4": "PoJK6TKqvWQAmZducsCR7P62qRZcPnEAG4EjSowPsWkfjrW5jv5SWCJW4wvo2rx5HsWgnvpai7NgCJsdsaWmmYf",
  "key5": "3QCt1nQ3F99JU99qGXMFxaw8eh35DXUQEnRgdZ4sPgYQS2cHVcHxd48M2GZYnTRXA5CE7JKxYRoLYuFxias7Ldig",
  "key6": "4fjkRKiLZfCCTNbrGqox2qZavWG6JHu87mR1kVMWtpjtYm7NjTsGXprCUHHAm4jqJhq8dmoFExkBJdZiae16mMe6",
  "key7": "2exaMMfCH1zkZf1RXNNURVZypF8quFAyreGJX5w4cQWpd8NapdoDHWSQm47HjKefCTEseFVHZPopUozvz7qo6jfY",
  "key8": "34JTAGc1WwW5pD7xNhKKSFQNJqM5Gjs86nEe7aZUv8bEnH7m8cnP41NWA9Q81UxqCKUmM8MSmsYFeuyqG8rBfKyx",
  "key9": "7iqCVyXP1qPiM1FRSynj8vjo8i9VkB1TCJzQbWNQ7B6WviDow3kXEgGqxu8s5WR4dB3qmYMQc7qYAeuLX4KqCjT",
  "key10": "2SWmeAATRwTHt3JcdKnjqHNPsy5i5SBc4FDwbuKZMXgr3hd2vr6BqjcZ8AtVG74UAkVPmCHfWeJSNmUnJAmyZSgA",
  "key11": "4v9PYwKwW1zjFRUcxcDBrBBDfHH1g9UNZX1to5eDT7b7HTqxpLUexoLPfkf8zAKmYogMwxp2cLC9qkXnCxoaVTsv",
  "key12": "5GwmvCWCMSeyGVRhtuSTLndRK5CukMKCZ8y1kdwvBqseJZXU5HnpttwGezLimfnC5LxgYRvqyvMeWfR7zeCYJENS",
  "key13": "4dzqQi3pZebc6rnZuczBAzaph95xdMPV6GpNE1b9WWGV5D8pkWRdC6dJVJ13hvhGqXpz5Y9d6riixEVwUvbXpUKE",
  "key14": "3fQSi4eUYAWcntCkDvNGrZvxii4H7WmkQ4b8pCwpR6Zp4N7CRG9PiVaX4DPpVuJ2PxeBAciUiEXzxLYDt8jigtPD",
  "key15": "2e2g9qLgmNLVMhoxrQh9tpSnPYtmPxSUibKSyWCs1Ntqd9KmG85fj9bZoSpc61fbFnfWPCbTkzgfNcqsG3Xp8N4F",
  "key16": "5cdvqGuvbTYDby7mhG8GgUtv299rbsYr2nPJGPU3dKtuz3zGvXrVWshaNRjiKdrjbXicgKDAAHxzw8P6tk6vPyCy",
  "key17": "4wPgErvrUjjyYWQ9JTaVK2uQLp83YsHheqKzFgkXTnputLVQeaL4rXYrVPcVkdtjPuCpA76hA7yGkoPkZVjpgbWm",
  "key18": "2KACcex2ijNneTgJPdD3jve9D5XAKMUa6ntKapHBVdYPaw33NXkwa3ntSJvrRKQdfUJLLQgkAiErBzexFj82Ppcy",
  "key19": "2Q9f3nPSYiomYYyG5Sfi1hPS6CagYRFaMq3UaSvF1SXtjYgH8rwA3KuQHCrXEKt3nSQfH5MVU5nZGqjLY6jQSbKt",
  "key20": "5isNnifA227aSAbH5ZsN5rVrbhgSeAFh5F8sxkHHtx22qsgmHgBdQoGfg9P9wEkqJ7CUNLR8fEuYqhdTq9k1rVMK",
  "key21": "3LajAWGSuY58XqftTdLtHpUZZnBRCGYyJetRm4fsbzQy8MmkDEPxVxxJei45i4G1Rj6N2GcQAPqUMhwaH3UTqYDs",
  "key22": "33uLczNdD9okdN157zwwzzZsAmxNXxdKRBPjVHtAKwg1mVou2Qej5c8RTEWyzNX4XouKBTsgv9oPy7gdUT2BCj1J",
  "key23": "5GpxgFvY2oUh8LGP9GtrueMbGdTKq4zH6EzKbFGjHteWo9LNKFD9CYGZDQsdRAYMpNq77c7CteA55jTQWNbGzB8W",
  "key24": "2KobETTSA5W3U6VCV2H3BFkxPxiMm5kW8YgwBkxqsgLtsenZZS5kwv3yhTswwqprxsViL55jxvGBwz8vkCUGpBs8",
  "key25": "3geLUWbTZ2miQJYLbfgJDFvu6d5ecZrD73Z3mEEexguvvKzqthKseb8E6aTb4DaEPeLL7jFGPrvrTHnYi977hsM5",
  "key26": "24mVEqPWEH4ZnqjsfncHykm67bmEXUr5zcTS7bo75K8mkEfY2uhm9yLd5z3KKn24KrX2ZD3wXDLALRydZeChjRup"
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
