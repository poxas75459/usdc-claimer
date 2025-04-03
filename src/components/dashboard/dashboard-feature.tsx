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
    "4XdziPzsqLj89egpVZGXkvmzRxNXG9LN4ur3nFo31tjcMZayT5MvtZtmD2rZ1Eag1W8rWkoLXT5QWpUvhZY1gt5P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MBKaqk58JFSxAjTP88tpJVHvwSYDznXWm77h7WbJYUUEmgAjpNuvc9n2LrJbGVwY7ujJ6bwHGzVeP7qozjmDTvF",
  "key1": "2hd9aLF4QJqiQZy4P7io5PcA7p9Ev6uMcmuA6C3mhvLvqPXs66R4J8tJT5E1sL7jVWUPwX7yGUvSdC3ikCmDMPdX",
  "key2": "4ZZxRLWkDKSXQpwVeZeCmizcxQ4GUUkRbgCcgt2seDq38Rivmd5MduJMhrHeacTohDXqqyzzXDJiRxruNJvddiDd",
  "key3": "3xg1PD3cdBSm5gGu9EzKvanm2WMgvBnxfJb7NenX5tJR6LARvVo9T9hCYeRAzEy1iVrjsUMJLJoDRAfPmo4tKaGj",
  "key4": "3Gy2iCLTxRqzeMPWoBedAgHtec6zaTHc3z6gYwVHvcb1YVCFcvmJ17XE4rowFbVAua7J9j3Fjj3KDwV5C4vbAqqh",
  "key5": "4gTn4Zny4YJKx1QmnbWw57gshQwwNZCe8QomSKv94Q65f88s39UEFYbEiN4eiEiFUq53pGU9XTP8bzBHFRJf415x",
  "key6": "xT22P21EHSTPyxEUtzbPkLjCjJXGLB9DGGBx4sFbp4oENVjdUFC2iT3VtekvR8UHzSBTyG8C5MXj32gzGXtE2RJ",
  "key7": "4K5QmthEH8hrQgfC49QLP9hvnycAhz16kwST5SfAWwBs8SM9ewNW2hHhpPmXe9gkFfbj5KzJjDD6gGBx5FaF4rtj",
  "key8": "4p8bij4ovXHMGiVX289Zq2GWCds6fbYJJznLorR7wSW8NMxBEvKetNfxp3XhpkwpyPZo2FshmD3gPqGScTesoA1y",
  "key9": "2cw4hTVNzHBs9UVtHwCgBqFzJTGDs4THBAd4z57VbXEAQW7Jonuy4Rhx5hG5shmjWeNfSk7GedvD3LvEyWQHtGus",
  "key10": "5AjvE74HKpVLuSe7XkNWe4ES1EwM3iq8jUTh4e8FC3S8tazuURZyuM8vEQUkYzPFZZiGHjAttG2g7gbiiHF1wLgQ",
  "key11": "3AyWRJpHMBgScW87YFDjHjQFgz8JpsuYeRdSsrZKG1tcHCHNJrD4dVw7o9wYx76zL68yEEXCtXVXSMnysM9effUG",
  "key12": "ZFHf75HFeKN9UAXPMt3v4QJxcY5z6b3mZQQSDihSFGvCDR6qJobgt5hzSPuWDLm8wPNNY6qgeswCJAYrHqW7mvp",
  "key13": "2TXRP4MZVNi6Z51j84QCDB7XPVDPZ4ET9MsxSwf3FUNxsUg4WiNHgZZvMQoCQG9riGW7G1zHzC33Bj4pvbfcFtfM",
  "key14": "4givo3YvtTLkHQiNLBppyc3YX1DzWbRKH1cbFRFMpenRThz2XAzxXr2mNGz9StMbzQioz9GeUVWiMkrSfMZLcbx1",
  "key15": "2ShT1xM8xA6ug6EsNoW2eno2CfvoSqv3yBimv8DjaYuHGJevE9s3taxH76Y5xRbCfJVDeUaTgk7hVunUMHdTBKAS",
  "key16": "3bhU8k53KgDtLxZ8cvB5xGaLC62jcHGL8PrrsN6v3fyNbSgDURKsjkYgG75oXVfGchvF9XLjpWSno3z5qrz9QCou",
  "key17": "2vDdEMjihCHcJV2TJHyf7ro5PJ4m91u4JRa41uYLbVaJKkMXAWjoQT9Bo2YDZRjjiTzb1jnJ29LesSMdZ4KhV971",
  "key18": "zTtbnitLYQxXyiCV5tj9n9jX1pxPqtikPR6xuPkfvoAmZfFp6sV4hLdgjVnqvp6ht6zhSA8p2ZLPcz5tdo84ipo",
  "key19": "52MttqEzuYGVvMTS2eNxdbVP21KCSYKeVxqLJKuy3hQ2EJxQPhSszc1V11ohBPfphCTrAv4dRBDmtkh7ZWeAKj1P",
  "key20": "28EJrVcUx13mwnH85yha6F67iKyCy1aEtpcDrhLHqaQAgY1Wwn1xsxzPbUV96AGBhAxaqL4q4X4ULk5UYzf2j555",
  "key21": "3G5s6vi8NaT1Pzb3ye8A7vg9yJwWyJrKKj6KDLarEMVm9yrNEZAb8dPzX4dDpEpPJ3vs24Wtdti4L6BwzNg68jVL",
  "key22": "3QkGFo6P1Rbkbfvm7gD4dPpAoZhnoZKsSef9nJvBQSddzkxtRv6xabEkmH8DdMtnM6sFmd8penfrtb3mH9qngsAW",
  "key23": "5AUNH7WHqbuJmF68dpAHSoWTMFAUqvHcLQWKyQLcafm2HWRmXUMwtLpTtGm386wWrKm9JMo5Jj68VmDidj1v88Gc",
  "key24": "598U5hg5jmJzZyH8uHEHnAjdiShFiJmiJsWQqNRkUzuoTcvHc9AJJn6E1gtX39ESJPHhAKSTdxQqkHx5uzJX7YXs",
  "key25": "3kUUZJKNQDZFWXgYkMkSseqortzXUwVXmWum2SvuWYu2PCy1N6X5m7LjzjFjpoif7chB1KKKdLrR7vRJfDzLBtru",
  "key26": "4cpRDafVgVBibsSrR4di12hVmD2TmDRPeGy5d7ZYQ6iuKvuSdQciJ2Jg9RqPzU3mQfqsn7mNNJzTcAeuWya2iXVA",
  "key27": "5GLyteMLxjJoBvk2i3JNkmwioidTxAj2zZt2mXLmYhUhN2P11qZoyEebupEMspX7QJP58UJU56Nn62wrp1M1LFpe",
  "key28": "2W7a9aJ4vx5qFnBmikfYhjJnRc3yR5nD44hfEFq7vR9meucgj8m4b1JySnouj5TurUSC5FNzCyFdJcQLi9uDx4DV",
  "key29": "23diyeW97CTtaMdWEcYpoaRqjkzUoJRm8GDxi3e2bbfW99TmEijANyy1jARAhizvAMW5JY1dCU5rSes3VPrFzhbp",
  "key30": "Bz97ia8VPenjcQF8CMagXndGQzMLf5aNJPgaUFXBPdnsRKoEBi4qSnh2YosYwTR78ndBLunKC2GraokqTQXvbCQ",
  "key31": "4XUK8HmfRdBQHL1U8JRuZcSYLXLhxtf3ntY4BrYUsn1Zxz4PdzfbgTePynM86SoYSBoeCbfVp9LKwAWH1cJzPsaz",
  "key32": "59HFTszroyvGqhm1BBCnqSr59syNLEJrA3pmPJWabk1SzT3rcU8oMqE4MJw3W7cH8MxpbUdnis2iCehQQwqGTYfD",
  "key33": "2AUBshwqDSfxe8PpCk1fSsqasotUDcr2hWun4KPYhR73aEmtYmzhmmBRREPgUqVmuTFrLQ63cZRi7G2xthMgUkPC",
  "key34": "4uY24NoJJaYkKgGX9w5vx7jnrdwzLtX1NEn1jGajeME1QF6XaV7PDudcu4FA2A7eSZHxXnrqsyn2Uv2tsYyteQrS",
  "key35": "5rCE1c6iPRrQdsmYxeh2g9s1mDtyqcVZqNRukbQpzurzRA6mqx2RY852eD7rGJXziGGtW1Kte7VBrEu8BhxznpiX",
  "key36": "3H7sdc3HEDtkTqimknScsKdiw43cwsg1GbrbqxQjH6JJJhzMs1mv7xkpq6Bb5DkyT8vBg9jcKFzCFsLo4eGSxfcn",
  "key37": "5cLCua9Vvsh3KqGM14aZH2BDFyyi4mqLogq6LdLiQT1pCopCAJeVMJiKBn5tisLJ1B6VRX6UfPWttW4FRiyjBTJz",
  "key38": "3gEZKCrFUHkfv64J7UqLmC6aQMuquy4wzwsD7wuPJKJxQyXkmK7LSgvB44AEfJpJ7u9NCNTPTuKzy5ybTE8nKzJf",
  "key39": "34JDFRVpxT9zFmbK4kYWQBPLCLd5ShsujzokjNZbrf9qkAeyQxKZeTEvU5rhDBq3CJxjWmsubviDXRpU5KPV1QDt",
  "key40": "o1Ucd5zLdx3LCbJAPxRfGX8bVVMfU6nHc9rSvK54wAHY654M8QgU9CqMAEvaPTpTRfga64H77tznKMgNHSUrQpX",
  "key41": "3BsW77Sct5hPrGBknBg7Riq2esw2SKDQbe7WqU6ZZqc5QVUAgqPp5JNWdUiCz19hfDXXomAXSxs2hphTjbGQ41zi",
  "key42": "3bw6CNRKHkB9mMzXvE2RFvYMqTTnz638FgD63YNrwyWWqKxLB4ibVEXzV7DWfgZvs3Updw5i4fN3GGToqmX5SPGs",
  "key43": "2gVQSWHxy47LDmCEwZjPZG8CBMTZC3YsvMj3iKDwE6mc8r8mWD8BQVPpjaYVsjtQM8hQLf5HL9k4hAPCnCJ8uXj3",
  "key44": "4H1YF71Rvk5K6YakjpkajhfTotbAZDdsWwbbV5jap5Sk2A2ANc9cckRg65nvNSvo9uiUJv6UnfjYZ3pB52gUmwA7",
  "key45": "3Gb1PgbpLCoFtwpzYbNAwwii7KCxXngXwzY4jHgGPwLtgfsRHz4wz58d4sPtkXLk1uokTmrL85YiPMWzbNgUjZSd"
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
