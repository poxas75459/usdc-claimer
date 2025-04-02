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
    "4uXAubv491NgK4hytt88qzA9fqK861LGTqkPcYip7CCePeXtBFujAbVN2p6Uzv6bGjNoGgF374DEiA82fAvVCuad"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Vv9VkemEzZdmAmzHYHvFRnkiy3aCYgr3uo8Djhd9zBfaXvU6mgnXAGc4HVoJFxRyuUkpPc9V9PMkHR3hSAc2Hsb",
  "key1": "3NjUKgeEaDFkf3QHo1MsCY757Nkce24p7mPDmRTEvtXuf6nuHQQHqozGZWHjyF4vFUbVgx4U3DQzLLRhBAFjRdwq",
  "key2": "51uxKL5W4HL8bShA9zaqk9pYnNPbaJkzzrUSpSkVwQBTRpYb1zpUyEZ9LLL1bgCYn49yAWWwCyJwveNhi38dwaSn",
  "key3": "51hGcSKVLPRbJxkHa5Ae7pU9rUQQ5TABhHndW9F7d6NeQ7q54SiwWh7bXQ1LREnWDWPzY9vVNSDh2x2SmXjGgbv",
  "key4": "3yPFjtsXim62hRiEowyHERQvQEGv7fxk2HLgMZqkFbXEoDCn29zTrHkZepDYStsmAX7Hw8PWj3vYBurz3R4GU9Cg",
  "key5": "4EGuxCYFkTDFmCHfxXXwTbtA1ze1kKwmo5HaAcbDzYctMVReXNMVvap1ZN2mUm7xmbRRUWw3H7RFM5S4ipWGqtur",
  "key6": "2xBfCr2wg5yiPAh7gtV4Jf384WrL76VG88QKTFE1msqLZYGY7VPGXJXhXb7zLTbbzCELTeHhTzU6eTNGB8JB5ygk",
  "key7": "4FmP8g4cF1PNXgpfcccBaBhkoj4NtqMSg5F62mHvQ2o1GcedtKtAjixFD8uGQ9me9VSPuwKUf7saMSJb2xxUaVAz",
  "key8": "2r8Mo55QbsstPTKd7RqWjf3BsVL316CuFPBjuA9Y6cTZNV49ZJtdZvJUWJFTtvBq2APtVUUz83kBJPgEunGJGgsq",
  "key9": "vjDgtcb9bQAVRAcf6iHQpaAda4e5y8HSqK2p1kgQ7DYvDcZMUbzkMpez7QnfH9jQaFwnpAwL5Edvuwct4NDKNby",
  "key10": "5Wx4kk6rwEwNyAf78TNJ5vJojMkbYxaLFCiao3UV67GtLRVJhvxbFut1fRjaxyxztvig2CSW6c4LAiqWStcu73gv",
  "key11": "erBC2YvkoBxWpTN19uaiQpu3GYRQeeesUtbSzb2utjgLi9AME8hUrHWLNPnZdddE61Hp411gX3MeCg5gUmy7JH4",
  "key12": "79PtnrnNGzCpPLpuYKEeLJqXQ7ZMHwDgbLtrAsz28LaAZmpzjoN4rYhpQifK5r4d9EchzFWADKBuMMoVQi5Kf8V",
  "key13": "xhhRgvMafSCuKcAuJzLsrfW3W9bBPwuxvN9xDq3kLFqnSVzp4D9zZk9vc5cJRZDSGMfrJ2hewnTqKyNknGbsx5S",
  "key14": "QduLUD6xReDhH9f2m8QvnyBy2o2CJnPTmrPVa2PZsoGHJbYJG91kqbwnFZZwmGbmpC7X7aHsMKfvJxuXd55GgGc",
  "key15": "2gufCd9j2RYbqG2KpuU3xB8g3mskCaoW1NxfHYTyz48Z5MPPrBdT8ttpwtUDuCyQ2W7gfGeMEpvymWUHNBN1xT35",
  "key16": "36bUgoJMFFBbMkS8pFbDbyQnmPtiQ2epbhHpTZbrJiKbs4WmyKxBx697RnrzaPCqws4qwPkdWVzJizCcukrV6gVW",
  "key17": "3GxkivYbmYPJXpVQFQcUwAVMUygGkeqXQeq2P6mxv7KYqyoAG6SzLPXMFhVjXLHaMhaoEZnFxiiA3egkmeHXUvPL",
  "key18": "4vtnNWs4tocDPEaCvWbgdt5uxWvRC9dKxFkL66dhh9PGitLP1XPzkGPAt5ccCGYTJuJqc4BVQHqNfaiBmcbUraXK",
  "key19": "4VygZyZcLCL77HnSLv72hpfbXAPM9dqukxeG6QUhXaRsMU5NcmfyT2WtVVGZie1CT6h1fR3UzCDbKBsza1HtPmfD",
  "key20": "yhGzbPSeC9C2c4XYo38UyUryxVV7v53EdeBa5k6nUphuUSoExwgDBaQmb33a8cwDmXFToNbgzh1HP47jWVuqkkN",
  "key21": "ppnuoXev7WbqD1T7RZEKjDohxtdS4ZRj4aYBSUnfNmArgdZvC6Z8JFPZoNXjXbrb8rugWWGxFP4fzAEBUcqAnZE",
  "key22": "53WzXjSdji7EF7rVwxk9faPBjUp3LC1mAU8wXczwRnGZ35TKfyWN2GhwxPvS7ckfqEUfdQC3bD48xjfrkcGGQnxq",
  "key23": "5KuWnQobAjgCHRSqqWg1JNA75ixStvuiLgK4TqEn6B3JKVsW3rKebNUGA3duUjMz8ShakjToVQf4r9chEMeSYKTv",
  "key24": "4UjKmAp7dJNRPC2ywbxHtEePQ9gQWKwKtMvgyKN1rzXNGqeZPWdhdMjTLBs3AtY2CeTgasaBjfG2ki8GyLD9Azti",
  "key25": "4FtCdudT9Qe2KJdnXo8nw3etxfiBNMT9LDB8pp6wvt5AJvGF8ZbTFMxS3TcHwiJLvgdnUA73UHFwZT6txBG3UgYF",
  "key26": "9mciQbSQiEBUMqnFKfEBmbvykNHcE96mSU1AdhSxFZWxAKgK6CQnZ4USysggL4CmFqhFc4f5sv197TyrrVAH5c8",
  "key27": "SZTW616tKez6pr7T2aTSWuYZGQejW8xGET8ahG8Nnid3xYq5DZTZKwLENrkB7UC1FWSueXT8yJzG86yscUpxNoZ",
  "key28": "TnQEf2gnzSQjaPhwh36wJXWfyGT8V4rTFCevY6kPC8T4dSq1q9c77YXTsotKnJXraJXK5EevBkwhi44i9thfNok"
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
