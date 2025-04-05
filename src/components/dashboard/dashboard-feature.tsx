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
    "5DUCSU3sGHMuWL3szQNiyAx9hcwf3YnaqAuYXDebmEHrD2N9JHJfv4dT7ZozDKA59rBFfvyte24xEapecp69qUm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fmw81SLn8GXDgZ8MB8TvK2FVid358rridixKp3sS4quueJ1LoSxvDrPgZeKTmWguECxzsCkw5g26G2FahSB4mCU",
  "key1": "cMy6y7ZWARjxtYrgMbLGXugU8hFYuqR8GPVvyhUtSrtbmoBNvMXHkE3dC7ko6q9f21rFLBpCkP2fzT5FePRQHQr",
  "key2": "4yAfcdn8MQZwYM7X8i2YaN88RVXqw3bZcU6WM8AB1M7Vsi2zFEKJqjvbbMUYLtMTkMC46VfCYDZVUnBoiSSZijZM",
  "key3": "2GRVVo7t1nZ4wy6cuskDeXMYeWU3xQxMWRMEFiBdYYc6pdPpWhkXZjBXUg2LHV3wESwzfsMin5ycXtBKMjk5XyKi",
  "key4": "3DUm7PfGzrbomVYSsW4ZvJnN65C2LpVNBbD9cWmBsJD229r5F1iyCjnZryiVmFRGRfyEUg1qM9mZCR4NCswrUXTX",
  "key5": "51DcBJQ3sCyRsLfrTteD5Vqjk5GoNgMyPxBxRjzKVKTfzKY8C6tYJPsdsxZ1KBda4nL5b7ixGgBW64Lt6VpFxvgw",
  "key6": "3CcEosfkmif1tgfHGeojrfwCaofoBKLsGjhurxoAWUjtMuZwKnnPjTNKb6iTFrbToFGQyX87detPcqvSAVTL1Kge",
  "key7": "rWVYPkZXscMSwanX7ZNfg3uuRvwRGN6M3xYhbCgSGvTe44RdnvqUMGdeQWvB3a5oupHMCVsazo69PX9SxBgjxas",
  "key8": "266T2SVLMBiLiAsm4d3WoH7jn8h7P3X9jmXbuqXFjg9g5VsNBKLkJYAgx4kaDxQZW2p16ex47YH3tscokNV2rLfV",
  "key9": "66Mrkrb6KBj3SppB2AvMCjqiMUh6BeJebvy1JqsU5wihg2EMmfjJoZQkXJkL4rpJygoo3kGSK8XZcXfPPJe6Adks",
  "key10": "4WoeFuQXieKzny3Xtez2nArYdpyceST1K99p8MvcDFsnudXc4gAvYqeN7AtbJ3KJSwP99sLh9sUsqDJnreaLKEaM",
  "key11": "2xdFwrC1vnhmeGDDme6saDLhAcSKfXesZDx6wgrtwNxjbMDecxwN7MiKnJCvtaqJDUP75cksAQMFvZ8DkG6jPMSV",
  "key12": "2fTATNGN3kfwaoiB8wBxZQaur6i8S41iTHyVV3g3Jr2Py8hLAMow8ktkchgVMM762Nmdz1PdHcCPff6HcjBwnwxu",
  "key13": "4WchysS5QnfLETjWE3BngqwMcjbh6H19PUeaHjKyHKQJc4MZvz71fc8f4YtMBfiuvj2LUEBhK3xmKaiCS7UsHVs6",
  "key14": "3E3KH54MedXLJJNaTC1RD6TN35UBv3aguJxfTrvtpZQNDwHKCa97ZBdhW6VZAFCpaEmzbaB4D8MjtjE5i5889MNQ",
  "key15": "3nfBkwuLwXWa4SvBnbBoXWA6WB9RVqxxj5Lii5divd82Qu6WCAGYEaitcZWeaqMnanHSMUyjiXoxtm2K9RH5eGdR",
  "key16": "5fuS1NRuCidAxMg8p7gMpBWy5H3wvt4ZnyCbHESEFXbk4EkqktcRv5PtkJy8jnLQGk4uJHy2SrdKhQDzL1vBfKmf",
  "key17": "3kCMfq9iHjcvjBXfGQQAtaME3ZPT1uFGKaovrr6e6oJtfjsyk9UVh6JzKfP6JqXAU2ywXgQiY3LceCvLPVdynnCV",
  "key18": "3C4J347uhpwLkTAgTjAKMDPmDw3eWwUMwtLxhc6qnpK1V9jZ9i89sQagx8oeQo2M8u9n2KL9e9rda1mCQqbr6hTi",
  "key19": "4f5twoULvcRpsLCQ6ARbthFK4Lhe6U2fNBjDMWPY8niJg16BmmoqQtnUUDCzXuyjq3EK2Xa8j2FTMQ6fqsxagBvv",
  "key20": "5rquV3Wy24n5wS6cojynohRnjcBHHM6cdYU35LHoQDvcg82o1vMzVP7p886G6XXnsxqoWnzURNyBmxm2kjWvNFmQ",
  "key21": "4hPkC9rSHKA4SUXVcj5YuXLkifmWaP1b6FfgxkcW4vCKE8LnSqSQBCZte7MPiQiEbZiNzasUtbFk7R7Fm9iR8AEF",
  "key22": "5rioi4TenDZ9q7puECXqi8NpG1vijqdFBJAkGefBLtVECz7TyVpu9Q1EcDBTFk5VQiQTpGPi5Y9nDX5bC6SELE7h",
  "key23": "5QdXjHgiHDexG8pHJHJKgMfzrG8zBKJrHHjRTRrrpYQ84vNhUuRRp3GdjdowaHmgeRVMRVjErVYYVCzYZ1bCZTwG",
  "key24": "5bWDZiCaijDkbp8ambTtWpRNcLr9rjTXAf25jiKFEL1GcHkZdU8M338KiME94ykApkkgNPUY6Qo7bWTU6UZJCkdf",
  "key25": "4N7RrpU2KA542eM5dhp5Cxsrj1MQDXfV1uWLtdzwLGnCUzov15aPvq6iXkMJSyLzbY5V6ts4KRGyiZnrfHYtZRni",
  "key26": "3Qn8Vo4gQ7F6SN8QjsVV1U1MdEU2DRxFcnYFKyYTt93m5sgmC1z2JmAP3WZgXx4PQurGQe2eer8gWB5rHztQai2g",
  "key27": "44dmQrVocECXFwEFCTfPrbyfc3MK9ZDfk3d7gpESQv7xPF4zm6syea3XFFogSyD1TVdKsRm5Nb9PWGEb4u97VoKs",
  "key28": "2UumaZ9iZkcB3ejcBrvP9smXcxpZvJcW3qfpRJQQcx1TgLP1Qkt1Gguqa46TqCaMPztBYCn35u2D3atwko8JdD4e",
  "key29": "5D5PJsEzFyWUnX4haEgzYay7oC8H7rTHthVRWyUdvBtTA5UVt1XYAzcsdZzKRkAUwBFBL2gXqaHf34iUDdCuj8a2",
  "key30": "635TrMLTuYRA6ns5LrNAzbqDd2kgrKWXz8YcC92prXJuepVvVgqVpM5kZ1coD54uZYbTtgXPqn5g4ZwcTizmdmYG",
  "key31": "5C7DuR1fjWSMmt6QLHwo9mL1Dp5z8XjVqUY5Tu23dj8aYzf8rCoTXEPDhbBj4cg2dooUtHUjwkaytZaGFDhD82de",
  "key32": "qbPa7SDCHNdk1tKH4dVXAFuifpGAauA1gWTcSULr8ybPtnzYPCSQR4wUQMH2wjsuFk3DPjwSHeNMWiwNLUsk5xP",
  "key33": "3AXCSHTas3x6StQY4CLntkNKpvZ14PPvEwW2LdSjQDLBXd5tNyVADJ1jqiiNqTvXpFZKjutL1XT3q7CuoXiVdQL4",
  "key34": "2VJvwbNbNhWAJgCzHtakaVfXDue7t3Uqd7umV4SC5omLcQbupSxvw63sReycUnaKSXCSR21n7GvNJyVfgMBm3gR5",
  "key35": "Xtu5dxb7oJz4in5okNVnps77Vb8NL1phZVj7HXLt64AoUGLmrqKT1NWn6sYgDgGYF11j2cpmURH5tyqnc5nmhcd",
  "key36": "DmJVrBWrBLhUZfzasmxh8gPNVVEhC59sVe8iboxKYXuJQN6Ky99dVnyumy88wH27ZiWYyvr1dvgzaBW9zQzxRaT",
  "key37": "2XjkoWReLXR83dCpecS7bZYyZXYEdUU6DRPHDRwBwWh8PRiLoqsWsL38E5MroX3TANzkMEEbXeEHAa8ATDRt7KrU",
  "key38": "2SYcNndKzLpyC7fjt7sTsK4mDDLK4pu6ZZXxxGZhVxj1hHrgYabZxkz2KWfskog78KxGkb4bdLf8nPsZhC5r4BRu",
  "key39": "3DCfrDhzj5KoTfyg6GVRPzdtopB1E1LMLXdV69H6acbvZUHWoo2DYqvntYTpWMbVjBUgQsqmQxWtTrqR4VmRH5Az",
  "key40": "DHXw9CRjzLvtBzRVxwyxCTgW8gdn8Fm8oNGMtvFeb1tnkwf8KZWL91uWLWQbcnU3R5xDpKsERzUpUChTBjH49qc",
  "key41": "3aWnUt3etvzmpsufpUSKkp6ii58aHBeJqb2DzLuGbu1sRTmnr3TQwBh84kmjeca73usDYsF3uuwVY8PYxmxz2Rnh",
  "key42": "23TPVr4vU7xi22BssBpgS4TXxidnkgWPDooyZQRxCcXK1EwzfC44DNr9XQwsNk2yDqUm4yZXCXQBro4EzLNsB1HE",
  "key43": "Le19RUNxPtnzS7QxJChhgdXHbgE1v6gVuhQ9AAJavkYyhH4fWXyJ1USredd3XZUYa8Bs66ZX3ezBYBkNPfFV2da",
  "key44": "MVQzJwZTeHAvhCiFAZSXTWZky6vyhg1Cc52oAAkrFiXm3JYGpjKurfMxnnpt7YUb4t2opC8b3jVGwtAJRr9BYWh",
  "key45": "4K8BLEbtmXypa2mybsmfkRh8rXNnXC42tsPs55THAEfGKFBPD9otJ7hnTzVPP6wTAHyVH4bEMLztVJj2yjsBdx6W",
  "key46": "wAdt5bihPzSJ4o9bMHifJf5NiWD9H6ZuFc71ZZxvmgJ7sAjZy9RGzwpxKymo8xfPVoXrBKixLUkGvFEBWVFZjYK",
  "key47": "5MKB18URAefkrtPZ1PoJsaHTjMrdYjwz8Av9tasLJqeJHEoMEhxFWK1ZZyQygVCSaj9aP9vPLDcfSfEXG4oDKtwU"
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
