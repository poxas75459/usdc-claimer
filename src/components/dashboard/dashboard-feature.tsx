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
    "3XxZ5wR7mLEXYw1sttq1RLz7wUcZ5VzNNLL8VwGJo9bJESmByQtfZ5rzVqzzA3LB4EegMQneEppJ71oEfkiLNU4s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pw1LNSwURcxD4wZwLDKsdpr8rEvE7DNybbfquAKZfTDYSn5CkJ9D2H6XAn7PKp3UStebcarwRmVnrM3pXh4rjJt",
  "key1": "2UcShSyjDrSDuvGYAZoA1i9TZy2FP2JwGEHWFZfEqYCdQVqNqR9R2voaZTKbv8whuCWrWfR3t3Yn2JDjpUrS8s8r",
  "key2": "4mnHppBVX5dgHjPZMGXxcPriA6hQrCv3mg5CxvzLvRQS3hUeKrxyVXBaJuWUiK8C1wCL3gZZyi93g2dT2yvN9uVx",
  "key3": "2x41Syr72qmJfxv1Y1GuoeaDUuSG24qUS8UEBP2bZ6GXxxxXnr1LEhV4nbr8MoGgXiBUERSd5wswBHFYUF1dKvgM",
  "key4": "4Fs8SgfzaFGVNVVf4MpBJmn9HARWi3tGeUL6GddxLm98vH4zzdYnn32dK7brLkfBLREXNYK6JLPhZByiQw1VV4cG",
  "key5": "4zW4NehHu8Mtsm4XrkRmTRMBSXLmipKZWjo4ciwoLGsaGSntkj4FY82Q82CakLH8NvStEj12DbeW1QKjTz7L6Ar7",
  "key6": "3iZQxsQc3SYpHXyTLRRQKJeMYqA9YuBiykwjfb4hwcMNYdGAdEpCq4qAxJEgwXJwzNovHVAGviLjiFdVYudsqS4q",
  "key7": "2Vwvx9NGhSa3SGoUfi7XzdhwjaFCYeQmLL1Q8RfrPPpmEGcWKqye921kzfBh8uKnRV2WtKYrqpBXT2w7ayykKd9G",
  "key8": "E1naG9Z6fSGFwHtM6NNCmyifVjQqxscuiwZGDNLGofXF2Ur9t9P2kuL8erUUfGiR1qQgZkUqCtsMMu9bmzB2Ex4",
  "key9": "3PvYzWZ6oFtkAzNJKmKFAG39F1sXuEUfEgDDWZTCM4e7aW2SqyZzncmkib5jayQPcrUP2YGuCzdk7kHvaRM9wbmh",
  "key10": "5oio4HMA9jJYWjnBumfYBwq142UKoJ4T6P8ZrYVHVUHitvt8yLXGjQoAWdVXVzx61H52Bw2ukpBJgXGHeJcZ8u4u",
  "key11": "NowHT2pocfbG7bp6D8uGtWLwxnmWjz86J3ZdJh7SfrsrhEw92AvuQnZdZS1HifXLHWhWT3e6vvgPqWtMBpxFdso",
  "key12": "5jpQAXW4GhgedGeZyExxAkFheRU3enUppY2VPdDmQjKyZiwwSY9G8FiCAsZF8QVKipi4oGY2CfAGUhpRdRtGgr3k",
  "key13": "3GhQtgGwusHymwpv2J3bCYj6UHTwvCkcJVkPK3rnSHSdDwYZfDEs8dfdYsZpRx7P1Sf25EPwHeMDPApmkyBuoiKZ",
  "key14": "3mjwhi16JLsbS7JVYvBDSRwEs951FcFYh1hTP4DjFMafXPihPEWyZgGjt5s5DQ8Vg22asCUgHQTZiUG1SWv8fQgg",
  "key15": "3S1tDWDXH8msk8BtFw6f6gxUGwWD8RUesCNWvHkWB9eUxWhCLd6UgmcDqwENc7gtEYyPg6uxcJAZ8gcgjUPsW5eL",
  "key16": "2FbVX8ESsScm6Qz2rSGTg47ZkxU92Y84GTJLgejVL1t7JchhBYJcQL3kWYWzwJhjA3A2mQUGe4RXe5RYtqRDAQYA",
  "key17": "36LCgukvxGyxACAkG4ZvxMimaWsQieL6tviPStRvv2av44qfYFvmwqgypHwqpHkhmQrRQtCs8cm5Mk7DFPRaycsv",
  "key18": "4sJKcqKnqE2nx6mbbnR6sbJ99uoscbQEzDEQiVcm3L8eEYxDhYkpXtqMMckia7jsUpCrd2MinWojv8Hb3Zi6N4oB",
  "key19": "2JB2BBL2dikkvTXi3Aftq3J3NHCLRWhv38uY6YjT8zvBk3tcdPrbzQLe7f3UCF38BKFzAPsnAsY6GUi2gEu56do6",
  "key20": "4zVXep7bpJWk7WBzDjvZ3W4P5EfrcUkDnjVKZPBb1YtfN73aLbcFFWvnLJKuG7yaNraw5BiCjYcnKHdugmxwQwTH",
  "key21": "4SzCqSimMgnxZZbPT4LrMKh4eU26svgWcdwHDkX5sGZXjzYyE54FeKDFugSf5itZssunXES9GrkNF5oD4gKehyzU",
  "key22": "7GnJx8ycLRJkczWik16baYzPc9sBRyVu9ytL894bZ6YwM8puWKV7F9STA9Sy7mJp5KGtsvEjPX3p2cFVud2RVUi",
  "key23": "5hPizfph8CdTgRv8kxLHF1jajTh9g9c7MVdDuaLnjwNHnrA3WEy88XmvZcqbQ6r44GtqqNg5BQhNm9uju5BdKzMG",
  "key24": "4buQfrb51qMG1abBr1S77YhS5jXnrMzvbPmJSf8BGdh58qy1jkYULgpjwQumPjsfJAa6kzLxaGGo4n2yY2bWMNc4",
  "key25": "24U84MB7zpFcShm7DacFjvf2TvdEDyktFQpBjmTWM4z8bcUcbZMP92WNwrowci1b8w4U9FC1U7eWAX3V8PiVx9sq",
  "key26": "4PT1EZ8epv4Qj3dTWnYoUJQiwLKeAe4zTx5zEcqEBPAXLBD8RVHz2nJyma2JQFNrSoBNWnWujSivyi8maiLRukd1",
  "key27": "kmFsiqcDrSkBA59bJw2a97vZEmM6Z9i2qyJmeFkjFGjLoNKJDXts8tWWbkYkHvEPsUReTK2De7owPyeh4hshWyD",
  "key28": "4E3tWwUPwkxKRL4EKdq7CM44VGuSySLFogGss59CnFuE8rHoXwhbv1Kto9FgkBDJjWsEJA9e85zH4N7ADcjZgJiS",
  "key29": "2MSVQgNJWh6wy1DjsiJzibd4jAXMtZ69jD3eKekV7cKkY8zMEFKikzRBQpvXPMeFxeMs33VoP1GXQLXv93arLsJd",
  "key30": "4PX96iZ2QWzPJmQvSkUDngghkreCVBxUpBZsXYZGNfRfijqhkHs83uaAGwuhDUnayvHWF8gGvLsXUx2Ljxfq9pkx",
  "key31": "4y7f66DVtVcPd3CDFaSt8ZHGLo9h9baPviJTmfMDraQWYmLQRxvENnpyJxoQoTzAMmYxonFCznm6RJGsjGFAVKiG",
  "key32": "5LvqadUsLNQeLbXKk7eVXENTQREpV9rP8HzUNJeLeZp58pdptixHUjwpEuEKRYt97QeXDE3ahYmmefrRhYZ4ZaLd",
  "key33": "5xjKzp9KjwUPGLjfeV8A2D8CKdJZWPQuiyXRB7Tqi4npBqS5M1wnLTKxiZLpsXPe2fGYRczZKxDpnGvgTrr8v28X",
  "key34": "4K1JERP9PnytFXuXy4Qirf7EiUHq25tbfHuc7EAfbQSmUYiPQucXDBB2jkqgvZUFpeuf9KbsJB7agxN5SD7XLmTg",
  "key35": "2YHJPXQhPzNzAeN3jykqaG9bEXQrKsr9iUfdye3nj9T6KjEc4EStzvzcyNjPrTDnB39kqWeU3bw2b4M7NUQqzmWY",
  "key36": "4HU23R4L3hbvsxPJf3Y4b1JvGqLTrst4ju3662gSxv1yDAch9KLZ7ZMQ64u4gYDidjQma4BJmSJwBFa3g79S7cAL",
  "key37": "5YpRvqcna1FJP7AcJVDhvi5En6uyR6efp4bmeENuFARSHa9S7pWCS6QdkxRWGMk67CxXZYhan9pcNv41z3kybNfQ",
  "key38": "4HYEZzJkN16dyr48a9Bm6mcEjwhMBjp2imybCsVLV1vzQ8xFSSHDgTg3fZR2yyg8sUBPkdpSCUk8NYV4yDdJSeLw",
  "key39": "2CB4mZKHGZZFJtM2TrD6B71XxRjS1CmwARhseGc7NoQLug27nu9ySam7nJxvbGMqDQeMWhH4XTmcFiMgwvdQ8Bir",
  "key40": "2qcKHN3h7maS9E33eZ4JHPJ2ZEwtFTi1QofK9bwo12Z3ktEYZ8NeP6irThvebVuMWUuoQCdWGsh3sAMfXDdbw5LX",
  "key41": "61513h8VzXJHiPdXVubGiXWbHzottDdnnFLAPPYLPCQSZNCL4LhV3fdHUotYxdq9f168Ui2DbGockrJzXmJHDnfB",
  "key42": "8FQcSBLoiRt6s7MHBp5Lwmhg6R7rHt5bsjd85smd3NPAjsNci8Vj5omRM96n5X6WN66bBijKwnbxcrK4HJ5h6Cd",
  "key43": "41KibdmzGCVv9YS1wFZbd97fyZ6vp2S5qjh2Qdh1TRiwov6EdNG6sup9q988CZohAKEM1bqBjSN6LBfLXnzYwwhi",
  "key44": "4aJBb6Yi6e5JzEgxbJY92eNQV3oA7XeBouQuwuWFCnU8f8Fp9So4Fox3YXtf5MD1uBFZxDihCSjYZuAajhKhAuaz",
  "key45": "ZhGRQdfSt41LNVHZcFMRZcnWMGYZgqNQwQJuc9dSRsPMSsbDYoD8cfGeZD2HX6ceFntKf7jSciqvyksWHJiaDry",
  "key46": "4D4hGeo1hBm7Ty6gBm1L3qoUZrhYCppFVd1Mmp3pPDQiETztvMyjzNHEG2eUztzBocU2E867yW14exWtvduzj9tD"
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
