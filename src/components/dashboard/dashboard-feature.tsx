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
    "4ki5z33ckgbwTKkKwaPWjSRamJrGP9HdvRoaf2KeAfweMjosJpxyZSJzacXciyv8Q5ALrbnXmxZ653HYCCUngiC6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59TosEyZ5LYgTrFCaWSjWWrcPZfwAFfPnGJAL1Q75C25k4iVZrpZez7coCuNXtADg6vhhSMGSDMF8Q7zCJSqFfSS",
  "key1": "Ds6jJNdHCUeptku8gNjfp4tc8TKg6V5soiBhNirao2X5MuSSErN3ZmN9Zia3C9wNSqwPP9PPEpeMmThGBhfCQ4S",
  "key2": "5kDDZJiGNW6qLifKFF9Kcp3qMiHXbnw1jXaBkdsvCAu3zGGHn9igxYGsV71Es9QKMbC8eqVaPXj2gbeqf171LGHM",
  "key3": "3DjPk5qYHDHrgghCkSfbDcLWEQGhR9t7xeKyp5SFX5yK4P6gr3WipF5wrLsKL7Bqw46a8KgUV1CQSSEqjZx8qixt",
  "key4": "4uuEyWrZCdbUjQLwK5WaCGChS6aoRABnMGKvV3WAfXwmfFBx29tkh5VeGMF5oQkLCQdcbJE74hmA8Qf4w2eQeDWC",
  "key5": "5aZwbj6uG6856HENKpvgfaJPdd1EVH2bs1p78PiTnKsW5cqiadXdbAbNM6kXQVruVLx9W3EDmsFh4DV1958nu7UX",
  "key6": "4XCP2Hw5ghh6iZuXVvgLEWQEwmQpD8FsQekrRSaQHUaoDkn2azEYARX6uHs9KbGcUbBMo93QsibufueiuyFwscGv",
  "key7": "3zqsTf7wMzVwkhGTXaXEFUEzBxz58zoJbxSpYTeKRqF2JaED21gD93e6Ejz1LCFbDw1Ly8AeVTVrYAHVZaJLH2VA",
  "key8": "yjtfzmR7uH2dCoDzxemXhe2kyYWfgSrPrTdMQLtsjVhNf3gXGr6eieogDRJjTFkLUyB6kB4g1p4ca572sD6RmeT",
  "key9": "9MFDJzf8pEgZ3qXdhFGdNcDuaVf1UNibGtzDk6Mq1VWb7X7TWKuByNoXkGWz32Pekss5GADHFrEfatmnCda1ikj",
  "key10": "2TysEkySLfUZcSJht6HXK9qYdqe4UbezfhUhwTG4mhy7MQ4cE6YyHJZsqeoN9ritsKYQ5KkbEXTKfyyBJtW3AJhz",
  "key11": "3Lw64rBiqBi5M8JcWrbiqxhQmjLNKDETFZFvaLhJUSzXfYBao6Xve8XMJC9hHk3Z7qXdcXdhRpWS9FpC48u5PQsE",
  "key12": "P3ZxMYSChFouEbvRDym6U9GD95i3xNSU9Hm6KheB2Gyi2WamfYu6zN3X7TaQzhe693oo7Yt8oGU4dCHE2uCMXLJ",
  "key13": "5ceCnYWGrD4fMmoRn17Tg1bFZiTauneBqFG97Yo6rzosPQ5di5Gnxe7eQebJcSc4428pSjVFqFckNbSvhUTeZNfv",
  "key14": "4K2jcpyGavW5gPHCnr1Y5fYv6hVYiCdYLoJBbwx9TS4ffZiYyE4YUjb5Pm5WDUG61LeTLqsi6DwRYLrP1yGzA4h1",
  "key15": "5sgqChqALM9n8yvV7ytHpM4Vi3XdmpEP8wi5Ds5sHcAKnFE2QC9G6UFeeAFJheCq2UqM8YyjSyZh5MWiLLxNzB3k",
  "key16": "MDTMwD5oBUZmmAVxkh7XdJQirzyfdjZm8wpzL9UkMbJKFXQUnjXwjqQYw2u1hxXAQDzWyxTnhPD9YKENk14jRue",
  "key17": "5M6vyRAbMnnjwqiErfTmjeAv2mAcFufCkuMJvHPZshp78aAwQDNQeCiDAbhWjGhECR5exNbEoDKKSptFsYM9KFYf",
  "key18": "3q3P6uGTBndzSUQRGUxx996r9JBZ4VkLj7AX9qTZzXNXtAjNVzD1WGFAtaKyH6mZAouj5pj3HwGSv1XASP1yx6fa",
  "key19": "5o3gpbm6wPdjT9fmPXYpwdhord14NfGi1mopJsNX4bjBnu42LomZUcfiXTbm3U58z2Wd5qT2xep3qBtW9hEiqjET",
  "key20": "33429NJvmtUjAh9eN21499s41qTJch6AdcpYRWZ9c982ehy7m7aPiYru4VEN3LmbNgugd251ZpvQBAMphvyGJaJb",
  "key21": "2r4FfYY3uPsvovrxPEMK7oP8ewRCCT1sHbwSBh6tt7en5m6B8tSvkYpG9M6dcdLkZ1HtAHi31UbFgoC9axCd5uRk",
  "key22": "5NM9q3QroKzYx7cHv3euh1UzPjgGDAG72ZQfnWvuqB77EJ36MJcwNvDeEXQ8ndV7CgnqdgKk1Y3LHDL181QG9FMJ",
  "key23": "4TABaPp8T6pJDLjYi1XcVv8Lt5hicmb9a7w4NMk87Xg9x8KouTuBoCnhbUZtFj9QLTkhd5WmQZoBv8nSaoRPob8f",
  "key24": "5BPUve3Kikopnoa5FLVuZ8xB2MW2iHkojsFFG7v7rjSM2MCdt7H8yCXP8EJ96xDvoy3AQmzLQT6dRJUrVypkkgnh",
  "key25": "sV3MKfHNT2RSTvrS1j2ncsbLJiMjNNPyVjvjw7mWuLeVMMAAQP8ZRr5f72tS9VaSYZP1pWcE33Xmmvis6L4JQcd",
  "key26": "2bro6dmQiiYqgtpfk2GGoMLApPcEuJhGmmyeFE23CZUEoDD72LozmsVbuqRXmCRHfNnSgFAsj5MS2z6CM92d1W32",
  "key27": "4WfSReuj7bGMkgrpPQrPnyZLShfYXifMTKqJP1XmZZGQLivtLL3K8VgCZfeyG9PrANHAG5JbcMynkXN43kJQJz35",
  "key28": "skvga1HNyqUhhe4kJBj3othKZZUkD9NcstrktMsgV9z89bvwKR897HfAhskn5QWeRZYZaPG2NVS1F48haK1tZEN",
  "key29": "5YhjZWC2n5oZrf6xGpZtjUZuByrQEVEbCgaZKxVEAhuwB7SGSNatTtRGU8tvkbjpeMhX7BcVsQodii3zYSKXXH96",
  "key30": "4w75W2enQfLaNRN5dWAst4zRkJe5ac37pfvTXSq2pQrznFDHyE7XD77ymUNyHcKS23BWAZWSv7Ff59Muf1VZJwjn",
  "key31": "3LC6nbVK1z4ZXUb1J6KvZDcqYJsAjjLx9h4qYYs4f6P5T4TyzShrRqHjA9VVDaTcZrcgjNHNG7CdQd3YLC2GziRy",
  "key32": "DaHnFL34gGe7wPPXL6hWJ2A9pPs7Uup2wA5QKqxArkaDYjmQaUU6W2oYvAzamKbTqqbEsaQJry2Jfrr4mcfPNF3",
  "key33": "42dz6wyFoXoj9wCJtH7cytLzejHmR6TrrmXCaye2TvgzyWbtnKjSst4gYnySxkwaTsnEtRauqqLyWfDckjyeyGK8",
  "key34": "2tANouXLaoqK1pwNsPBqoUYoSpm9GNX1m7r12ANAtZXE3f3LDnwPMPRF6GXa4LQ6HA6Qb6211FqBVwx16AmDdYVE",
  "key35": "3Hc5JFk9CHZ8rxsRqwuT43CBDrdumradxEmkCLiryLvbzggnvUXTjcVwBEDrd4A1UxPDqamquLdNzSsb9FkoKqiW"
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
