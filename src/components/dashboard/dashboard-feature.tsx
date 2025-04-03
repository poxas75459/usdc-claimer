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
    "4sVpY44KtnzhkGLZxGJr4bdrqGq2o2qLLEGJXVcdCe3rwmfp2XiAib4SeoScDHUvMzevM71DBtHEmXedbaG4PhnC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Hbvcrs7Hb8czzeHsbUeZvSpA3fVvkVBMjAhyCV1oatKKK69Rm7ESJNHAREFZ7SoTvC2ZvcPaZDGtdALoDsPX9Sx",
  "key1": "n2C2nnEwkdaM2EF25gAMWubywS4RjjLk1unjuAjuj7wjKbmaQ77udVTVYUMwDCnPrsSZ1NkTR9La8YjeZJddkMi",
  "key2": "66sFgvSMqu8W5BBq4giUyXjrHT86x629GYY78JNKe5QML1xCb7mhPvdAPbZXjEqQeJ55XdWXSL7Cja1dMZA1Tqqc",
  "key3": "3NqJdckKq3cWQ8nkxTXWdciZ6xJhTGCWoKWVjHLxgHkEmHwPLrDTvn4FvErKDaCeVERujaweQxSKDwHzHdpa2tzR",
  "key4": "36avVQMSGNAR9gAhc8sSJ5XQmPVhVSia6eim2n4DJatdYBafGwm3FyJ2HiqmA5f34De4yMLDF9zYV2cAhwoZs63",
  "key5": "2YAhCukXQ5DuSCk53HgC9oKU4BeVJSjuqwDSqRZeAMPJDZRnysT5iy2jTxGe3143u3MuKSSDQe2cTvVWG2hPUfNe",
  "key6": "4QmDnsRCLccrnzrVSqvLQ26ESR5YoUmUhfVsdyvNjacNcXsjjAvmjvJLgjPSgVwes8BF3v87cWYBnUNpZfPYUpLm",
  "key7": "4VHoXDt9aqoBj5tbBJt3NPZccQjwSxFz7MWpkP7cqxUBSnyghfsMPA6sS5ewjx8saAbtYacvUZg6HhDgQQsjcBd9",
  "key8": "4oqXjfzxH5FMBgDxdYSJ23wV7B9z6bdRXhpJx94di36FXih9QY1jDwzDw3sUCBJGMEo4R5za4s2vNigJahBqMpJP",
  "key9": "Wfa5j6iSLREE6xGEvv7TL46ZP6AkRrPQYrgCKsQyCwWLMZPUNRPD3CpVTkB41jjQ1vwjiooD6y6wjD31ZY1DBA7",
  "key10": "4P7wCwJtCZhE91dTL2VPxxmLBLvH9GHdiZy8GXKXBGFgPowLfCzXmiNVkrP6awAt7i1HMjJpHn8JC23DjYBVmYsv",
  "key11": "3Si2F44AmUGfiMruMkJETVUKrZFEc9ryb1eRbGWYM6hnAaJ544nCnU2DzJXpNgLy1wiTmeQoh1qxzmkABAdVQQqp",
  "key12": "2WAaw5ib155y8nNkXMPTxRPcFEFVSha5ZwkFjWau92B2fzCxSbT3W5jGmsKa3D2SHao223vZfZ8sGxeYEczsuU2E",
  "key13": "4crLwEHCFJMo4sRJLihuzNfKz161czBKNuAEZpdCH4sD66BTB1uKiigtzZKfNeqzSgZN9CWhRjvLKufNhmUebdMD",
  "key14": "4F985CZ6CEJ6XMUuZ8Zc1tS4HJTiCHrCtW1SR7chvQDBpJvNBB8ryMfSBzY2v23QKwiycFqcqKgvKpoqEjuWdtsY",
  "key15": "3a4siNJWD42CfDanxLRTi3hvpMb4sroQ2ZYp3mPgR2gxb59TmWkMcJHKkk9sHupGDQpjB6F3ntB5EY5rUv9g7pjL",
  "key16": "2t5UJmJiomCifT7nB9ZSZ5oR1Bza8kzb5KU4KsNEPsDtFUB615FwhgQbLYgRiZKi63RF7mwmwgwrMpbYeVhBJVs6",
  "key17": "pJAvn8KiZcSD9asJXbvnNUENaL9F13BGE4Bd6QrYWYQ4aTR1nS68Adc6fZB5N21v1QCtMmqy5x8PYEzGFwisYqa",
  "key18": "Sb2Y6VjVBUVEQRuRWfjSp1Guyh24tPjcHbzLRANUSTUJQvkvhvgoPpoCkqhkTKQ9Y4zbxb1fQu4tUBZ4Co5df6D",
  "key19": "5whnxPZBom1fMXcybyUodBB4QwUK4UFRiFgTmP2n2oreQnUiwAb74fVCpTj9K2zJVTeTLkSNkMQCDyJbooF3i3Q4",
  "key20": "5YAbFnidc1DsdnyL6R6NTpyQoqnbfvdhYnBNgCnWJPCVy5mSuGubPqvGq4S9ERBHofmuhBUjdvZRU7oRNJuL3y86",
  "key21": "3Bhn3aBXnTLgkT8xDRHYeaPyuY3Xo44MuN9mbcwdGaSdcsQ93au9YSiybHTq4t7MkGBJ69DddDUgu7XfVQw47HYR",
  "key22": "3EDf5ykNcqDqoiRNkjhXbfpJVymqgquiLX9vCAy6Nb2t51SVTNpUFRQpTGkfS6bdHPDkSDxrBe836v2zGi4VvGqg",
  "key23": "5USWBtDJU9HuL7yrK9yXC5zAY2sBMuDxejXfTLaLPXNmHytg2v1x7bBMApzWc3iokwgGWu7w2inQKStWp49qy1XC",
  "key24": "4CKMDGFGYEE2ApbPe4naYQdVvZ8J6wsXKANLSSsaW2GBPdMuXyyDgr6yVbP9WNmRmy5Bqzr5r7tW8UqDUewCPTkt",
  "key25": "4uoRyJP3rU8BKrfYa9hFGevbE3fEAozrPnpe49pNXPHBvAT7SDsgwNjTWHwpBaPMPdXEmyteYLy1y9t3gWp5AKmz",
  "key26": "3Zz2zZBHNFSufRJ3AwpnJWpu7r9DMmYkvdB1JqhVgDxCdEEoL29T1eGYukLsBefPfrfLe6pU2eN8bQGiUpNXv6Ps",
  "key27": "2SJ3ZpSghUAgrc7knkUSHibiwdrhbwpYdQsQYvEyFvgbndvvqajwaP8fkb4FYiU2sYrXo8xVMLQHDhSkBAJj8hxH",
  "key28": "4X2a78wXGn3Pdxc5pt3iUxhndhiLa1QM59pLDpZAdcpvz8zhmKD6weKTMZixAkh6XUa6dUw3X62xsjZkZYkE9Yqn",
  "key29": "43RskyZbfeK7YibXnxb9ckgMBoW5CSX4sUHUUwm7cNYYc4mEnmQG9qQQsnZqyZiU3xNLzbxte69K6bDQvEtQfmNa",
  "key30": "4s2AL7WPXofGLh5wakgXCM1JLHwrKHTgzY8KyzBt9dDECNsr8sg6kjg2U3uUM4oaEZC3oVqQo45QT639hq5hdzxz",
  "key31": "XxPFB8xmrCpGwaGhvU43kjPRkHFGXQb4uq4nJRUddU7RqonBCs7pFz4kaUyjB1aQh1aXUVDrXsN7Aa5A9SNEPXz",
  "key32": "5VoZoCagCDaucQrFGM4dafS3FrYy6Qr9hxtrxTdrQdPmWRHLzbK8qBkNa4tjKavKy9RYbyzbMGyLgEyAM4P7AmQN",
  "key33": "2329GJATiBXD71Jgc77ytyeJaChhi8iTN86ttr2pVtFRM2ejDtEkgPyWZ5TNj5thCzp85AtZkjnsr4iw8S3nRucQ",
  "key34": "3KgupTtZpdtAu8VtZcetWJRdhCrDP14ozwjqf3qLZkdCwiWCAetNNpRkLVcNrGKc98eYYpov9iTm9udB6GXxV6jo",
  "key35": "4DGvyekvqbcHQwQNbEHT4TCdL9PakXAZvL67ThPqZJgGBFLPwRyP6WnooWFt4pd4nfubwqCDZxQdmee1Wx2kuMka",
  "key36": "1THAGkQjMsQMdAdfq52Y4yQbVeCJwrB9WjkGeMQjHn5MVFShmix7w2mVoPBgeBZwdQpEZgiDmkreFQi8rQUteUy",
  "key37": "f4eJBCuq3SKyhUHmuAc5cwrJFP3pxzUhoR2zDZWAdNtRcgMN7Su46X1wVyY7rK9qgtnZ1dnwiF44GXxg8XopCUU",
  "key38": "2gSHosX41f4JRorRh38vkDm4zYbkKNkhXayPrp7r9UzsxfKfmBuN5oHWiNpSgYVPUH2etwbbJ9QDTUafPkFX5gTy",
  "key39": "5e5SnYkxzp3K6ixgMZXwGe3FuQFYbNrVeuc1R2K4zKVGWjr5WJefVbfdMY7VviiB7UDxax6HC7b5BBLFLhFCaHq5",
  "key40": "5Ka82MkwLayB5ELZRseGSNe1ZvZN493KXPQUTD83Xhv4zQrqH53fAcpAepjMf5DrN4M7qhrucTS5eZwDysiqQbNt",
  "key41": "QrchE3f8kFj6j9bHkVG9phGPadacNgpL5BiYkKvGagSMKog8qvviBSesUD9ifJvzi9bZpQMuapEcJ5wJn7XMJWc",
  "key42": "5v6XQErYC4sDSoTK251UfhRreKZ1YmXUPCpoqZfBP3eEAT8ZDvtPr7RPDk31KtQd73oBSohDK7Tdkde3ZrcdT7GS",
  "key43": "5fPHxwzNy4GSkxEN2xFHxqH3QeWmQPNnJdjX8rXSQhWu478Fszb5fbtYiaAiG6YLEKjPyvkTFgCQ8Kzrqdo4ZVnV",
  "key44": "38CRX622o4f3hWs38s8KSVkiNr4HNRPwaZtpnatNjeMfo7gqcwBJ2ve35osYRQnGzsmhdTpQeky9KGy14UJ8jaFP",
  "key45": "j5UoQZdH4B3qen14nF2mKUfRSEBGk7aRwicnPfDDiKNY4Jw1YfBaa37ypQTR3SNs7DdANjWzZKxt8rS3HctyRR3",
  "key46": "2P8A8Y6AGv2igmCNGrrW7av3o3ZsXb2LUg3PNkp8J2QwsDBUiuwawnsRkRFb2wanBtWHDKrjCFiMUSpbUosH56Xn",
  "key47": "3HaZbvMeD5yDvxbfmb21kv6WPHobdcerndQ1A53ER982NajT9de3F3hJaHRVX54ooucJ1rSo1n2DGS236pMjzBE1"
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
