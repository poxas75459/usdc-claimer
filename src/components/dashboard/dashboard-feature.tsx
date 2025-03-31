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
    "BUCSmu2TpXF7EiyYm9Hp6mMfgd4wK68FHmZR6wc5NdomW1j3LbvDGSkcPEg2xJFvsyDUFFQx9pnKuuA34trxzHj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5643pCHpEwdzwvRBaoZfAdkg2kPSS2ZGNHLhEz2KfVT1bV7pzhM9E6xbieBnrwAbDEWFkjBfqXK8UqrB93sz5fLB",
  "key1": "TgK3j8cFS7dQD78SFffLjycZu7qUTnSLSQsD6RavB2KZHsB9YZMegdxYpH2eV4GXRqcNaVxqdT3hTwfLAxY7qXj",
  "key2": "4V84K69nwu8s1SFWcRbXtJtMrbgTQGcqbMLQkWouc1w3wcSfXSaoJZSr88U5r8SS2FkxgJow6fQVK3jnK4qeg26t",
  "key3": "52VwQhKvQjjQCRR4SNoQYoJoVKHLGqbP1HjibqeqcWej5k8d1DaWahfvAEbJZyYSzb7jVgweUzGSFZZbCg7YPgSZ",
  "key4": "4P5LTtLea6EShqjd9ocx7C7gxVgnvwKLPQvwHJxTzBshSRs2kP6NqwBxFso75MwJo2uBsD5HcNrb1skG6eaEorvy",
  "key5": "ZLzShvyuRtEon89hnX4dQfQRRe47kszTkPVWpfK7kCCjCN4dwm7WDm9vELbKJdwfakKDdyyMuL9Uvpc5tw22DJK",
  "key6": "3FAWt9J8JERPRq3NbRjzYoNoh4M77KzHwSeB75bFtwHNKoLiaAsdYFLM9CNsZ7ZzkmerJXGTGRBdVvUiGcj56VX3",
  "key7": "2Rubj61fambUHtx61UjeG2D43oTY4gCLmTGcVRoGWESWszi4LzafFnQ4r29tnvvHdj68DwUKdMPsYeGZaZtkxJdm",
  "key8": "2KRFgnFS5TSBHu6ZCpkEQXHQh9ZhEZ2fA6yf7DshRiRzqZwQLXijcZPvh4DFeyJZDdmAzv3VFtmsaAvHVyKzcjo",
  "key9": "5hK9xHw9WoT488RHT2nyr8jRA9WNjFFCHSdL74xmc4jrfLorFy8ijaFB7HN7ZLLSvFvtfCMtGiAVzSSEaLoT8fZb",
  "key10": "5M2DrsCHfyDr5PuJSpnwFDP19EycBLnW3PzXrhVP5mHehgPNNBBAkGP1Qk4zqcJAwbNbdadwftqRgVpbJ4bq9mU1",
  "key11": "5fz3jTtAfLuhCng6YDRHcDvD6LckvhkMTHCcJ6YWgkNBzySGU4BpNASxRt9bjAHiQuTeTof98ECx6nyzxWDVhwap",
  "key12": "4KDXM7YoyawvocsChk5w1xusYG7UAPyT2HJqDck19gmQH5qWGHQyyhMMimgCeYXLPJVrKYxg9AeURzcELZbj5XDN",
  "key13": "tvQSNzLLaLLu1LFKxL66xAn2BjM36xqzfXPDyFQYhNcioEVYy7FsYK7HcFgUihpe6eNE5T93sdnpcSi6jVxYdjc",
  "key14": "2zj9boj38T5EqJ8VoG1Kqme1tEf9hLKaVZD14Dstov7eD8HvXzThLnZ1nXtH94RbyvpJjJpXuKt26h991v7RAaHy",
  "key15": "4FNV7i54VvLHyDanCBp7nKpn41RySVokRs8UGseYtQeeurEaZPAMevpbRcYmJVy7Ba156v8DLehijLrVwudBk9JR",
  "key16": "4bpGD6kSQCSPUQvdghdHw2vdaqrTht1nQTFgjHrZRHJRrmv5JrDVgQZMGh9KtgGZf76TVPUg1A1yq8ceoHuhVemV",
  "key17": "23gHEr6vMyYu83xjvGTfhrLsi7YhAVhnNDUymdi1i1NPzfZ7WwpMqm9UwKQpRncSwPCjuCFNUgzjCZdN44ehYbtx",
  "key18": "24BEzaYBWwvXT2vRFDYggRxSNipif9sVkpEGMDXdq1zAMJKdQ4AhD6Jq8Hvg4yY6uGfTN5h5NWEJ9tq98cBJGzPB",
  "key19": "5pivfCyw38PtP5namh8CdVe2fpwyp6mFMDTQNnrdmNdaA4ab52q7srBwrBUoQdsC75khzzJeEcNdVUcZnFFSuu27",
  "key20": "23ToMDAk5ZwhuBexC2bdRnNhRuTBc7FV9wwLd51jLnSpPGzANaApGBGKLqeQuUfsUQWabJeFpUHGPySp1EUTyd3k",
  "key21": "5Tgb4RB3zwpQbi88RRiEZL7tHcuwTk6hScRGseVUL1FY3HrhEFcuVd8XncSVPoPoDHvQnaEPJDo189uCfSLM9uts",
  "key22": "2aWhHwx3c5mWVkwJhhxoShbyE3s51oUYoHWFW9tgAm6ncpW5NGunmkzj5y7vLv9RrJ8ejqvh4kHELGwaFKNcbR9X",
  "key23": "3rcBQ8AUMo4d3Q6zpndbF2md5nFbc8TVHdCnjefRpuPjBJdQLn6E1JMoY6U7CyYtmpbQkzusLQEi2eRSkQMpFLyL",
  "key24": "HWEBHH7PWLbKzX1ZKXzbv4BukAYmomJg4G9ZUybPwzTM4Y1Ns5zsVacbQ11n5jmXtDWgL4EsDUSwxNyvQtfokWW",
  "key25": "3xqnTnFVixqsyPr1pxv36GSLPSTEGEMVASNb3QAu8e4CvHvL6NG7FB9XTCxWSrqoFz6nXnRpi9pWPUTqSfNyag8f",
  "key26": "2S4ZzAKXdM5rw5zkYbFHWhKBkTM4Q8Ha36VeAwep4fnaPNorkP7x2uW3FrbbkadNW5EoeGGnNGFSFBXNvHQzmHVK",
  "key27": "54iNGbx4bwi2XvWhf4nRBitbFfPgrEuDm84nLRRHy3XpgvcHakMMgYvkrGRB5ityECaH9bEj65TqhZnkZAyzz4Uf",
  "key28": "29iyiTUNqqt8EyfuRY638Vdy58RHiuU9RzdPm2FsFWyK9S8EDiwrQteEXujJgFxAvysKVto1roC8RT4Nu6xKpJ5G",
  "key29": "2nhH6MmwRdFPceHyznWtepUpgvs3AQjcBSvTVVeNduyFaMK4SWFZgK6ysHZFvqJ88s9XSX8y3sjvBiqJpyTEeTwr",
  "key30": "4cMr2DXWxLf6eAjyshuCUeGbA62B3iW2EqnDxYrWy3PCSTsCegj7NCa7LpFZ5Qzt2aYeCSBdtht7XiD63D3eF66a",
  "key31": "vtDT7d4sLpQ7xi7YnHVGv3GA4nV3Maaz53ejzM58mAtMHG3vD6QhQyDiMwY6URomQF5xV1Eowb33bQBYAbN6sdc",
  "key32": "3xi6MXcEL2LZ1uiANJSG3vvRa8nw4G1ENV1R48kgcoWnu1iHaQSWNP3FoPWWY4GryFa6RkwhQv4EVHL56Xac9vqf",
  "key33": "4A3gTHmN7pwzTW6CRNZkC6y4VcWMEoT3bcKbRuSFWNXd3JtuWKBiEunDN5WPu2XwjA6BDV3AJGAhHu7QVMqCBQ3f",
  "key34": "2vwnLELUZ4QjXQZc3QJefHy9etxrSUp3jMtqkrZhezJwYFfu63vo9HxwZHu9HzEAHyw5TuZTW9TbawKV4SvZv4dp",
  "key35": "3jEoQahHitwHndNqK7JePm9BhBsVekjqX8mznh8912LDWhjCzukAatNztreH3gqXaUS4gXyDJfjxqAYeEJFokyqm"
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
