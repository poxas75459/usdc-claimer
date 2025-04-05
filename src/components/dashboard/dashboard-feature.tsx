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
    "23ET6z9FgUXXGSC9Xk7ArCnxTv6FVKConxLd94zbKASxwZf7Brvhk9VJ5kwjMAymezVdE5ChvyQCLKx9r4LHjrWk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59QjzKxzyHcxh1kG9MgN9BqemHRicSM4aMyEqv679Zt6MgdKrBrVeHJvftVxbE8LsAensiNeRp8iJUZ7LpW5hqNK",
  "key1": "q167zYEfXoFFHkyEJo6pxQYmC9X41RUUnQ6JcRwP4iFMsxVsBRrwiR4p6c26cJSRVag9pzYABcW45hm1a2YD1az",
  "key2": "jfo7syTfBp6W5BGGhDbgGADQvqQBhvVncWCF5LGUCBg9GtMVbAhpiDwACMpujJj3WPw6yznepU5uoEuXNyNxZyo",
  "key3": "66dFXEEWJYf2tzLqSQU5iUHBAXspLBAySTNBcMkxzBzbzq1CduY8qyFKGH9W6S28LSARMk8Ua8h4tcPB97Pg5vis",
  "key4": "51E3ibbj6fUKjnmhLSwpw2y741iR2Z8NcVym61aHYfAU88tNkjDTQVTrD5zC1v5hrpLc2rtdSamLRfiq4y5etD1E",
  "key5": "5CzyVwhnpzSEaCr33jnwby4Yf2bwmF6Sy4dT7Ca1ga55cVZaGNfi21Xmh4Yvbi3bSm1jfGMisSwajAtD56FKKaZR",
  "key6": "5gx4Kj1AA9WFCLj49oku7v27H5tmNzU8hPcJJ6cR3Q8sscg4wzNvx9C22zP9GYQsifJhma4DvcLBskVjjGXfb5H8",
  "key7": "2yJ44rSSaLhxzPxC6vuvUGVRfr6podNHvNUprakbnPZmQs6tMkFzi7WHCqzuYsjMHd1yz5R9gWD4e8kSf4nU3D73",
  "key8": "5vGvH4yCwpSTe9kkJVfQmMB2VWENSNdrsc68PsxPFTEi6HtPdGZ45SAEMprH2FLrRySK15VxzaFfCq9zxfg2A1ot",
  "key9": "5c97ZZSiSS2etvXED6xaRKFESRQjbcQfDVy4VJG2CfQ51qyJnxJydoLyBaqcZsZFVAxP7sCDZMABkMH6yePxPs2Q",
  "key10": "2BkGgdMpFPD6mUebR6QMpsSKZY92BFTMt3yAP53TgnRRinoio2g4CuTGPZkByUhoAFpwU1sibM3A58XAngAKMNW8",
  "key11": "KC1op4P14kxBAdtcKPQZ3bEdmHyu4PQbaRJLpF5euCB4Yh3MeGcguGiTA5rK1yU9K6gmjwQbZKanzS2KEXxhgL8",
  "key12": "2Bxmgyed7WL8UEzHf1aLhXc2HqkaFyZ8e7epWKa5fj9TRDr6SrroMZDXiC6zFgaonWW8pHLrvmhwKGkJkxv4AKoV",
  "key13": "2ZAMcCCzjLNXW816DHowTuzoGhwicaY7EfvpNDGzNrULYQ8g4SoMjneQWwMyb4UecWmmdss4K58b9Gb3cXi9MNCv",
  "key14": "5vmA4jZMdxKpKxTjYaWyaxcmuB1g6kciBBrMCvF1GWT1UTbKf3KrqsrfaemRwFmU6bmENfBm3kbXpQqdggkAgZFy",
  "key15": "2PPSZAoCrvuuuuUPWe7kjC8PRTcp65pSQgv4wGCuKQXZgmE4G1CKhnjLF1WP8S4jq8D9nSf1ZDy28wHbLWtWW36R",
  "key16": "34CLqV1r7UXBcJ9ihtnJKC5wo2mP7LRCyVTW23A7vUDqLvDdvacjk9bdM49bbzgGnsGTuUE2GFiu1NKyhEq7A8w8",
  "key17": "48ChmRjv8aMdfZNRHUPCgmKUwjBHphcVzCJpPLjQeZFNHpHcSDL5XoYAdCtQSZpJhhMqvuUFH4CqDSADV4ZMHV9v",
  "key18": "5mrEmv5TjvW7omqaagNeaivarqq1qr1tLZtg5Rj6znKpVu8t2aBULBcXUvBfruyTsbDJtkMUUjMJ159w4bPahj3w",
  "key19": "2pmd76QuLS4q8GD3Nb9ZxjHk3XL4dD3G75aAuYAw3G2PM4YDGNtDVGP1sdPvqm1XiNeyHKZu9qfakwwKYmF6RraH",
  "key20": "3iriPrLNyoSX4XVWwu89aq9CVSjX6uDdTqjE1DLg6zfG1wEVrv9TdZzoTnbFCjfCpvTWY9FPkktnJFKKEXEkmWFf",
  "key21": "z6UxdtkakArHcvEkAkiXU5QVegwo5sk9g5BRVDDCEgGQ6qUciyyJLMCHtvmtAdm56uMP3LCEySz6CnqjdeXq2Rb",
  "key22": "3i9bWPfnAqExeMyq6K73w1w4GezAu19eXJk1VkEzju984B8Z4x3P6y2aRS8CwuMu452Rht94hwMYU2QJYCdYpJst",
  "key23": "8zxDt6Td8usZpdjaiD43LJoBBRjt45sJGsrbu9Duim72s2sehAJfKEaDogyBfgTxt6mdAE5ctGZsJbfPjU6Qgri",
  "key24": "JZbF59RpeZNpLwZmRifFKqqtA4HqMVoHdg7F33Exfujk55boyye5zjKVP9KL1dLYr9iwwAzKK1bDK8TiJaLYaee",
  "key25": "3HCUKxPYJ23xRC5KCux3pF3qA65nDKbJYzQZ8gNfXecM8NzEKFtE1wQ42cBwemkwonbLTqNmY5GTCU6uNCqBYV74",
  "key26": "2gcgqmyZnsrEJimE6yhYUibL4xfsro5B4T6yhvTVTUKSJig2TWDBY9nqPXZghMZBg8JzN2EoAf2pXiysLhkYhqtB",
  "key27": "39P6ta6hSLH8r35U81RgNKZzugZ1TPXTM1u2ayg1VVcVPuFeKzcyJjg7P4P31bvh9fZ48yp4DHeRN5UotDzDg4cj",
  "key28": "2gUJEu1UocrDhRXoL6BjZLd5RhHCoxCAXRi2fgnzKogrHWSewbL8qqi7EzWAXdMpHWgpfqChLwQ2qChaJPPupgZx"
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
