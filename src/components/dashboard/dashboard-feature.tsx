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
    "5DRtob3qPrXfXtgUYG4Js2fWuP2cbPViQTKH8YtNdtHhJ9r8dX48wfecY4KafuCQu2kdVu2bm5EjKy7zbprdVjnu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65WtcTjCaF5bqPEZ6oKWi6mH5gNyyPSQeCGdHtema86qVu2qbwPchbkRLr7YRFEmK6FerjNuLiVtTA6NUDGKGiWp",
  "key1": "3gbajUBZxiybgjPYEZwYgQp11e8esh7m8YosxN4BnrQrjznivyWbgMShjZN16DQCQr23DVnzmpNzk2caG1EcaZZt",
  "key2": "4RcF38CrUkhAJBgnZ46vp32F6We5epus1Gm2bZWTG9ah5qNhXHLiKrzgwbbWQLip57KLGVaE2LoW6fHnJoH7z9iC",
  "key3": "5f4HZ7JEPixhyzPFggZFfjM8zaXAqr2JGwzEvJGTmHUPzkuQL3oAvMMYAC5DVbyqirepJ4NzMVZVMLhLr9rn6PFJ",
  "key4": "5WQPRVic3jzagBv6U8f9xAeHs4ZTxsAq32UDNSCmnawxdC9LMXpTtVkDEqpmQ4F3ogWQt8G2YT9h2vbbC9seCH7t",
  "key5": "4ZxtV7AoMkgbTdYbZUJidc5MLhtqkNt5kgFmwrhsZ23bMqmv4QKxurjeEaSFAS813fAAvBi98cUWvQPfsYzwERCL",
  "key6": "4gxwJCxZ71e2C5yrn4AztSYDmjtjXmvj6dfbvsbwTUbcn8q5Pv6vX7k3KswUr7E17CzH4QMvA4pnW8eHk33EAkyo",
  "key7": "tLkxmfDyM6FBTKG2RmE8GGKxD7s5hyLkHCDHByCwjPTnAUqZjAgjGL7VWZHL2zGtMvZ8mftu6ZVpUu2aSxiXGwH",
  "key8": "4GUSKAoSB3scNu9Lx6KGTLpWCNqxCfL6j77vBxovRLUhCE414T1sY8LtkbfXFD29SaGrNJ1iPQgXkgZMcuVPgBg9",
  "key9": "x43YRfvHEjN8UDc3CX9rZ9edBNyfFDvYbvieTCULSLpdGTA77o3aEcadiRzLFUfFCdKvGXHA9LfewPQSjmozDgm",
  "key10": "3UrCKs3gA6xP21oesCaMbkjWxGEn1muuVB5dpFpD7sYUTiEBMzYqU3pCjqVii14wutYdpWbhQPJKZtHieriemraQ",
  "key11": "4BfmTwtqtLuk9wCJAuH6LuC6cRev3xWemLbFEzuSh44HZZDf4F9QLSMav1gg1xTNvsJTL9hsK8VE316qPgzeS86T",
  "key12": "2Vez8aLfhKM4MkpFRemHxJkkqg85wiePqjqcve9LDiB4aHPXcvSYDwPdcFSeNjPMgedq75mjhcikRtToNegTKpsU",
  "key13": "2frZq9rMLLLdssnox3W7osYdEr7eiyLfZJ2zh4jRNPAbhofBRTv9Yt7WWZdVnKyhD3gvLdcr375Sz93ubgjDKNGv",
  "key14": "oDXzG8gywKDGuNiusjjfwpsbWbQ7CJCS8dkn3obmfUrVELr5doooezdM6H2y1dZTQhLYTHGd2PjzSVq9uk7SdSW",
  "key15": "3KvHDY8395Nm94keii7AKX2a3bp9nXnSY1GDpce9unHouSbJNxpZ8daS6rNdV83SpF1kLzhnBmX27TVXQJn7nXyH",
  "key16": "3zEpKgwCsfA9M9otV4NYugKLy1XZGFsfrrSqMpEnzzaYBCQY3JMSrErfQpd7oNXJf5Q3yScqHnrZYXVd5GkYWFGH",
  "key17": "3NMRMd4hBrXyafv7fvhZmmCZDz6NwrpW3iJZeJ1xUfwXPyWWc1KgtzHVNR9NNv6sZNZiCJbeVzqsCsvd8Lga2Nqk",
  "key18": "55qDTy9z5FtBCF5bk2TXUWdqp7C3wTYVQjWKyYJksEoTVxrg491MUtaDFMfULnNQjLW2J147hCueT5AFiVEtUycK",
  "key19": "3Z4zck4fihWYDRJnCcGQXwHobyHjzJ9GJ8nnjtBvhVpvoFHxoh4uEfJqPpeG3EpSxs4vonCA9etkym1nVNY8VF9M",
  "key20": "5gCQJoFCy8bxu3MPzXMu1aT1YWzYYj5C4YHW2YfrfJf2ndRP34QiGa52TEQm3V7Kokn3pgNPYBsrF8KccsLjfMKV",
  "key21": "3DCQEJxg2XFcvydajK9NDB9hXs1qQpKqPQeEZEkXxGkcay9mQV85nQygwt5dKB7BhKeHKtmjQc5wueHh8RYqnSJM",
  "key22": "2JvafMLLPFb5T8opNbNza6XCZubGVocSA9jjGHpY9aNLdYvumSL8yzk7kmNm8k4cPVhU9aH2d6hBSz9qgkRDZAPb",
  "key23": "2Jsyxk2V8xsMJApRzenS18WHcKU9jz9VGr7dQ6QTXBSwUYVYLk1TYF3h7xv7dJJV7UQTLnm1JcjtaYTJpm5VgSS7",
  "key24": "62TpgpNKfTwuacteZUCxDcsEi3M2M29bBTmdrQjPnpiAV6Dnv7jQjGZL6ZfpiRusFEp2pbsPJLefJ3zZXzuxE3H1",
  "key25": "4oMELs9tFj985Mxapb33ra4FPsqk5JmafZzvuxfAMYrHmECsL6aAEnj3tVPs6WDgzxKeUyRKKerzT67LdS99DuaH",
  "key26": "278cVXSv8rEyk3o2SX73yFb2e8LfUDPBC5BVmfAy9FtPH5rAFvFQA6pCEpKRj4MNugWeLo2fuFgrCc7XzDYnvqJt",
  "key27": "5T9itrhddyDDH9JiAR4n3UX4XQuu9yGKZEnUDZiVdtDpxZTDRavpxz9SCgDW2JQxeD5DrtpbRuC9TFAKaKsikg3J",
  "key28": "4nzZoXKTQsgc48A7K4uNE5f4rkDtZFEAxAfvjfvn9KRouSbi7wBTCLmDTMxeBwNSMroConhVQEG1gACuiJ1mFB5V",
  "key29": "5kJcC1xseVYEqVLaU8vZsxwuc1hiYcmywPUb74QjkCZ18RuGP6mH3zdoy4LPonh7Tid4frDYrPRdER6R4h2VQsZQ",
  "key30": "2jeB2nErPvvtKRSiLf9mhwzjf8XoD7DJRkJkikiKLbd4G6PAgvfsahUUSzfG57bSKwSZ7qf8AxK3VCHeqbN4gggQ",
  "key31": "5kaX19nCAh9QoErDobPbXVJCaekvNetY9U4ZhC5CDYrrKXZnHUUWEzChXbhaeKgWBf4XjQByajKxmu932rqJhKhP",
  "key32": "4NvdnUKz56AE9yXTfWd9UfKqw5MH7PjgS2Qc9hEmcBKifnkX4GX2vQ8nTRqQ9ygVch8aNfXCucYhHxbpRoaAcPgc",
  "key33": "4ayDaxrHhd5rfL8UWFjZBRkjwTF9G5mAXAmCRtrPnk11R3RxkKXudaYn6DUFj8Xk3UQY1waZRYaEiAbo3qmaTr9q",
  "key34": "39836oHtUUNH445i7R3y5ggyK8Wnvig8phtQn78UzMiJsUapo3W56JWXJ5GGpk37tywzrpVfuNBkhTTaMn9WQTs6",
  "key35": "Ju5m32MCXSgkCmyx1SkKA5PBSh3dMUXRExXaEKCQUYsyBPRYjCesHJiAG5nLqdrPrS9YmAbpwkbWpuYwMNeurUn",
  "key36": "2Ja6chqadHoNpeCbrePsjpBZVk5C5T1PNf9nAcpKFnVpkxd7fCoTG17fzEUUXL7fSMu739rtWQdXyZae5ee6jZjC",
  "key37": "5ymXUKuGBiQqXEw1Su9pLv1Prm6fY6jDy8z7uGeRkAjFoD1VwALDMaihQmenwzhk5UscXcZ51hDYYSjFoCw4KFvk",
  "key38": "4YdADNo5VdzF493Zq8BiqyCAjQsRYFEw4872W5hofKztJCDDVMemp3Va68rC68o8Jz77kLQhcBQXFgYwXqykm5fX",
  "key39": "3ayxtyoHbmYf4nDpuk8b6uKHWiEaBJGu3VKg3khzXp4J76MDseqorYTR625G4VDzjNHCEctzGFk54GpJ8nTEKoep",
  "key40": "siPQqbzSgFFeBmtjEu96VKEPAHWcoKwq636igkg7qvvPstPgJ56yDabSDbMBuWGXCzbZ75BNvaNGnKweJ1tFYH2",
  "key41": "2doXcGgMCQ9gEB2ckwGdkRndfo6Bd6cpD9Pi72o51JEY6TLNK3GiGEX6hJeAwmcWuME62kDMT6vd6knmfV6YCe3o",
  "key42": "3MRoQ7Y25MNG4Kc6vdFtdZZSDLQgLpKDW58BudcsEHCMv3zNHRZTkyfbM9cY543fgHB6z1wLYKCK3EPH2DVoiZGZ",
  "key43": "3No45jCLkFMfnzcQRbYhevKm3La8KiCnKPnZpLye4chrSgyhXW37NVsA16wWaC6paEmvHYkWSvmQYo1WeLSoXmms"
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
