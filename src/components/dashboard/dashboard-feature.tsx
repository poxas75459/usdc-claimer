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
    "JEdevJ37kZLXmKrT8xTH4Rt3mYXEjgU3GZjxitKnnoWspzzii5GzDenPTSGJ9tgCkHCUhc7TNwkHCLu4LecB8kC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28DR1JCjEayvCPdwemoMXfb16EdwiKLHv44wGDofKbnLH4MvLLfEp2WPRVvHnrw4vVzSLsTvR9GRdkCwmKxDbM3r",
  "key1": "3J5xHX2A6cJRV8w34kfSKU4nmsGVSXKnWVqr9GFyrr9mTUwLZnR24waVPpdPnGSWPnq47tAUWwfqhB4rhF9vZUHH",
  "key2": "38G1VUauKK2dYqtbEgSufKYoyGt3AuNkxcgfZwX6M34gcYzTVcNG2FkSBL8C6KMzqxeqhLKKpG243SZXxiZNYzkW",
  "key3": "2qMRUBLE2J4EF8HjjncyCeqBdFnJVrongywLbv37XRsMfPNZukYKF7F3MPWErw6pGZjsHoTAB3jKaFm9gvg84pPa",
  "key4": "3mJNuARyC4BU2Pgbzg4bZRn9EwUYwnHXb9s32fDDhrpN2BxLmSB2QzV9HAWp2etkM2T4iUQy1nYHbQYtCxsyWdY3",
  "key5": "2jeons8wJzks9GiY6edkBLonEz3TsrseNXvJxERynJWWmSuBiUcDQaFHqKufqCcab8P398LZBW883RNXpVHrq48Q",
  "key6": "3jsYbeUfwZYxDAvTTSKrPLFf4re2nMKXBu91ZEWbxzgLvRbWvg3CV5T5LjYuGKhgmnWzQqpELSaJ52NdaVkNKVGu",
  "key7": "2zp5J9A2EB7Nm3AFZZiZ7FjrdeSrnAAUQqwj7KfgAdGJXPP2BMHM2dVrQzrZ3ydAfFdf3WKyZq2K5eUVfUfFnCGw",
  "key8": "4NFpRAHQMr5PYFWmZ6TWRpoDN6oCAndhoGLyc4pZG9eQGSG7TfanL8pz6VaxNng2cyb5J6gCkkUrGqfUxtVJmw6p",
  "key9": "4BVPtnHcTunV7RAwGEUfxu4kQazZYbYQzR1Dn9XjRF69p95AMzL9uwJq5HKxrhouy6684aszRGyXoECPZkY3u1ti",
  "key10": "2cvp5Wd9SmRCRtTRJ1HDi3eM5tD6pbx7WoXsE85iDXrpaMBR1gPaz6oeaJsp8U6unrkizibvRyUHLdH1LuyGSGkp",
  "key11": "2pwPuXU7jdKjpTuEFqRLt9CeMZPAGifWF3xkuoUNWP7xDxG8Qmqz1mox3roWuNwcfDmANxwabLMc57gsrq9icARM",
  "key12": "sq55QGLm2AWe28Hf6vFZ2bG3PdppaHHnVt6v9B9HhEghWupLUEzu7Mkk9W5ZU4qRctC8std1kL7MTboZmQ8zKjv",
  "key13": "fZsrtFRssRivduf2zVKFJ1J7c7Y1nsBCwt8S9xtne9hAD6aNoMi4jxutaC7wo4p9AqKJbm6MxvAPm2KjWTdQHLA",
  "key14": "39fiGBBmarD3uR7jR2xxovNW5yE9g9RCKYYtNy9NUqxNjX2xuhJKvd6boZst9A1TdAQYEmbHZjH4ZJCq28wzhGdA",
  "key15": "3FztwCE9yHVdz2gC4vDfhVv8RNJ7mhfdfCg3V5oZDCJJRREyU2u32NGg7au2Ng1gQxTLXPvqd8HtxXE8NoZCz4SY",
  "key16": "41eHshuh9po8aSTzfLX6XUpcNcgS2QnVoytT5tLx4fabStboCVzZEkuhJnyatRg7mntJ3SdQiYDhhShdMreC52W7",
  "key17": "65XnPrnX1PW4wc4FCtyaC51nVrz9rFZ6oppBfS6BdWgwtVU9mRq2ThndyoAhNbvZvRdgPmcn3pKwt25rmuF56ZLL",
  "key18": "2rpzbc9xUhU7rwDAqdSj5jfATrvFdCVjfkkxaLhLYXKRDeagC4z7A2PDAWfsh6BxcXd1YjBAXDL19Jb7hiJZ2sPn",
  "key19": "3q7DTwNiH1qhyVXBZephZDwwhmKC6WRP2kdFTBwPhX95kFD2vXSwETDQ5AR7jtGDWTZE22Q3KBzgvRAoq7eqWCPe",
  "key20": "44vY5WmP7F1mvjJgZH5mgw4pvKc6tHgToKBfXWy8fz3rAPbvyNqsQDmU3GioRdMyPHhJZGZ7TusexqmboXbr38uH",
  "key21": "RYBN3aHasrQywFHiiH1V1jZawRVbsxQj1jSwAH6yLp7b7qFqfmPaJwuYrc5YojpBsCV7vbvPyPByDzENM56zPwe",
  "key22": "35caLvoaAgNF8FKVQjAyKAbYgeiaxgrFrQJTZ5YrUth7MaGsGHFXGDzaVPEktpZmfK8DyLE7QNMQF8a4qbXpvSa9",
  "key23": "rbQ9CdqGTzkun36yKxiD4hyJBozgxXHWrVPCWRmsKXY9zEWQ83pL4AJFg2VkRNpowKk5hsSPERkKiY4E7YZeQ9g",
  "key24": "wseY5FLz24kk1R3HrRZk7oHhpw6QVJBfp6RpE46uCSUBMAnp1t7CwPp4kD2Cw5AGohemhAsX7ryw4UTLXoQh739",
  "key25": "4gAUkqRbo36FwujwtqUNW99k3SyZiSYQ826fnYLgH9QMk4qwUZcFdiAn34hu4wnezRz9HaZ2wUouJyzctHa39KTJ",
  "key26": "5sd5atWgZoY25Y4ZoeJd2Py9rpe7rLNTgBQzqS9fF8Qp1t5rWvhbReRL9mG8oyuhXZs2E2nDx2BzFBkM2hbE9zfp",
  "key27": "438GkYb3iv7vzXKJuKRR4JanNpKy4BwNJGKd4ePqVtdBoKxUQ9y38fNzKfvhqDDA2HBvW15Zdd3Nh5s4ksP8wTRk",
  "key28": "5Lfnt717VRmuEaxZiCCud324Aqy6iAromSpQFjbiCvugWipumBRqGyKLb4fgwsmMDSCi3QtdBBAzAJKyToxx83uA",
  "key29": "3u1vFaSHfBStidhzBGxXD57Qkq3NovTYcYwqk9hghCepbQU3Lx2BrLr4NwbpWEbstaZ8bDqbYi1K4NLi5JB46oYp",
  "key30": "4aqdnsc6ewbHxLovpnkW3EFNDuCx5hjiu3kYsn4DccHYoK1KrvEDwPixcYSt6BA7bzUu6w2vE6nfrEt6TnNTKwx7",
  "key31": "2R85haWEjbz3Tcdz8wiJD4NnJKkjatFpX3VrRKvXv1Aw37bsrXbLj2znFG67iuS2JNBREa8L5p3vD1TPYSdQQNE3",
  "key32": "2eZee7BSwVu6HUygZ5hf8pv22Ud5YXHUnkRGYs6QaB9cNv7JLV2abyjq9nDm4m5WbRziXoFhEB1DUpwAtBvnDgqX",
  "key33": "3VErRRSGVFA3QKA2ZjhwsdohuE18pAat8HTFKAPvCPG2oLKxWq71Aac5tKDrkKK22DG8gzmWQW6dTnyUMRorUyB8",
  "key34": "3HSwb4FjLsEo2nZCJLj3tFLptrsfErBe4nyaEiP2kPjtpVsb6QmCvy4j1UNBdF8WpnXDdy72YUm8ZmwccB44J6ac",
  "key35": "5XzbWrU4xEcSpsNmF1PH5WK7wC3QjNPTxjGtPs8qSWkpg2TfTYUTXvfzu2ZfqgujxBZcYJii27y5HWJWHLjzVpPM",
  "key36": "8UkCw3FpV1LcZaV6CVNWZnRqzkYfbr1havQu6SNTLGKW3gAfLFneEzwm8PJZFhMwjh3GvVExxckmqKPY5spKghE",
  "key37": "3aveCdkr7CyLNhg65eiWkMqBCWzVdmyYBpKjBRPurVyyHvsTtUZftzFNUuNt7DctsUDfRXvyRyy7whHA93nGK9Bm",
  "key38": "2v6o2FMZwCZzsGUX1W2bsUcW3VG9K2Bf9n5T1Sisuw7A9Qjy47nTi47zMddwoxw4ZyQfwvQgKzVwdwAm5z7siukn",
  "key39": "1HP525E8LRbxYRF7hb5BZLCurKEh39iNmKFhzgqwBGwY2KZeKgRoPYPcrZJWfnHgZDtFwqXsJuR38UDvSA5Qpbi",
  "key40": "5EfHREK1yKLGRjDmWLibC8kHHbFiHUYNP52mLbWkAQmerUSonK5gmrsCL8SxtTwMdyJeiFYQgcSDdCwFtFf13SLm",
  "key41": "5TK9bLB8ApES5UwTuMbcLGxyzZEcLwWk278rRiVRKVQk9y3ujpM1cvUJSzraVLaP33RFdeNE62xmn8BzHoRdHmQ",
  "key42": "2q85QsKhCwhNjMAYvrLRZvd7EcHTxq4DpJSTwMh2ypPGoK8xXZyKGyjvKkRrYaVPALhzsJ6nd36wdYz8rnQ3wyV1",
  "key43": "45c4nUbH6AgihxsTcRQBfWJvxcS9zhJahCmG4ovg6pd9vVzTZXZLyqxnaoiq5z1bs9vpmoZopZz9qmja8S5xdP62",
  "key44": "5kqjMS3h8zE6VbFVem9JN574GU5YHGDnnAf5YhpmPvi5r8C3iwnkqw4c4zjbvR8wqFPfY3BeyDa282T1Wgo3E6fx",
  "key45": "2ucUzbVMbYYpedmTTHEQDyEn9wxaTd9KGXZbXvGCbZBNEcDZTJncgNZ2Rgw3mnLX9mYPrcDek4iYyjVfwuXjTSLW",
  "key46": "dJXtbVkBx1TET9gKRwosH2pEGjcTWD3pcBK1X495zwAvGuTwvBCoTeM977VCBtFJ9MfkCqg3LiemJmGy2K9ndwN",
  "key47": "4AbH26C2cdmbWNJ4HLXA6Co8rwxUvLj47rFn2yetV8utsppzibXBtnYChbMgpVPG6opbLMDuRdkVG3yeTaj9DYQT"
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
