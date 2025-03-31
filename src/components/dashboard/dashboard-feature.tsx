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
    "5fAPtoUG5TsPFi5JdVcrR82Gz9UzywpkbiAZRDRRqdrmsfkzwvExhDCLZedghym64YAYtbuK9BAS4eiBC85EoAbv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aiuZ7m3Qsth5R14egw9puMcTTx6qUqRDBeahgHjo8krubTtAHyvJL99YMXQgaVTUkbwnYSwSqcc7wK34HnJXyJw",
  "key1": "2Z1C2XyPdGvk3XeowDqA4avNWY7nDMJdrPsskvrdZK5oCXaU8H3313mYHKKZfeLSw2mGxXYFPPF9BuFK5fsaMSwY",
  "key2": "2s7mCw3i8snWVRoyZwh58sfDsePghsZbBiLykFr5XQUAiN6eVeAGYEKcEqZxvnKnn5dpLh5MqSMhdkc1UspB6c3K",
  "key3": "4GN4FuuszpzGTTMh5bMALeQb4sxVNda7AnopDHFMkrb4vj4sfdqsDd748R8nZgQqsKuoghNpeY1xox9ab2oqDJ18",
  "key4": "3ZjaihEwW81EjuVb1xrS8NSwrxXGdNYGv1n7sryz3uZ22boR3TyG9C7CLrtZYuTyfv4djjFf3qApCZfR52YXPY7e",
  "key5": "2kruLvjYCAKNYMyKFhHXHW6xERAmvSwbbRr9LcfNPvNupmrV2L6Fk8rgPf7Ria9HbnfAvVwbVhuCYhb7KNSJfQS5",
  "key6": "4vUYrFAWmQqBKofU1WVy4dtHatuT7FtXYHZSUCQbu4A2qKGeBDg4f4sKHWrv5o7Gj5bSfvCzYESCRV3J9Xr33gVp",
  "key7": "M6deNoTqnFpyEBvVdS8j5175ezohxnpuUTjQ7mdWh88wbKR5DQYoxifYyUKcnJ65JS4fpSpX4p6J6nrEucXujjL",
  "key8": "4boiGcoAMeLHu1CU7hkJt5NNSAC8jJcYZBUC7ctTmo6Ceo8PVDXEjthqGKeoZNCtHWph44c2VAQsi3292ZotSAib",
  "key9": "3GXyzm4zAMGBXBcV1cYSTSE7w2LBu8gpLQHJYuFt1mcFVv48oHgmkqB8xVvUue1A1SNLQKANxDK2nZ1Lsati9DfB",
  "key10": "3TPFBoPvCPzt5c2tyzJAwAZipuZPBPghFw9WFqSnRHTxUKChadSw1EcvZzmeeWDdMztyPA19yYitD177krWS36Bn",
  "key11": "WbavDmh4vmxZzjgsyfczRhsZD41udAhVxpzZpA5oeM6YZ7W8i2cDy7x5craRvwZmFpPiQ7Yhk1rAQwrYvqY8zhZ",
  "key12": "36yB72W5GMfjHPzWLvhFLBtty5gExbPpSE7oQuV9iipXRKZ83dhVvtknPRxsD98ZiemAtCWG66S84BKmPEzSEshd",
  "key13": "452Xnf5Ltz5McJJhg76TEzFYYjPiLF7f4KJGSWTiuRGXsCckkRN3WqeVSyfbAswDBNvdNFDPYhZyKPzK5fYrEcFJ",
  "key14": "2nm5QmVcduUqZ6vF6rnb6Q3V5DEPrkfrtL7FzwuLAvMzU2RMRXhzsSqq6c8Exn9CLDwWYq15dKRgSck3PSiR529h",
  "key15": "2zAvUoiyRCBJTuxUcGwuXj8Nzsj1LKmGa3tLaLfXdiyhW1avKbkgLtQxQdBGq4C12ru8pJaiksG9rpwcavzSaAJJ",
  "key16": "3TroMwX27GgSke9bx64wKZ65agKWdm5cFty53FVeaKTJUNwELVectdBqy5oTdituFrguB6ihwFykNhpmpV46yCq5",
  "key17": "4fzuonu3fbqiM4U9AniSBjwkoQ2cAkab4jSDGCWXLfVyWvkBTHWpR1wwSDRftNvPwmEKnC14eW1CdTGJ3JpqN67f",
  "key18": "3MCYhpK1YLhifETaHA4SGM25pRnedqLojQh1EzUjRwNgMFZAoX5pPgJzrB8pLvQsu1kj5pb8ER1y47oPDHqAL7rV",
  "key19": "4aunrry4trtdfiaV1vPJVSZm8xDtqvZ5nZK3QG5wdEbMNKcUKgGxtsWrDrqFbFvHnPGNL5zAApj2p5zFpjPk5KMZ",
  "key20": "56tavqtfTTt3bDaqPyXsdcFMtKnmuPHfr4wt7rfcF2vE1GdTBLNN15DCiNWEBstdBqTCqbaLMzFm3EjqHvz7poyr",
  "key21": "2HWiVXzBin5CtD9vexDCPozzSpMEj1fFzVAd5wtq44ESYhmWBpr3J36iBfnxsMSUqz37YX3mKygtCFBwqQS86TCg",
  "key22": "4fooGcK5XH2i73VwfagHcHoXVWvknXmmBJ9GzoVZuDxor9qrntJ5ooZtKND2AkfogX4LGY4oPKkiECABgUvuUHzj",
  "key23": "2NEkRMZBwG1pgvY73M1NC1uCjQ1GTkNX1ayXE4Q3KbKRz9psEjR5jeFU1iU4TkiMrZDPQFjrWHJwLbS9yHcgQfzp",
  "key24": "ZCobQFUaAffrjxWNjDJBVkDYmy5JFU5nysePreuoBQBUWbetR6Qy5rvafLgjpQFP713KC7eJcAbtXZWoKibX6YV",
  "key25": "2VfxdR6fUPhHF665TebiMiUiXKgLHaa85Xvz91FUQMnifRqRUt9SpQKs9fSQghgHpaJcxZMxe2bcLKcvUxV7aJc",
  "key26": "2kkTUdKEhWCnUFCZGCA8Vh6bLiKf871HW7yTAxib5YsCL7TwZanvEdkF6bjynv5LVjKJzs4v6oGtMocniLbCHtUk",
  "key27": "4Y6oMRo4paH2escsyDYaW1FvVBPPNLpWWMedif3AmUneJcLV8uUDu2rfL5ue1Ua277G4TY5MXPwzWFegX1xmajtJ",
  "key28": "4upAuT5qSCywBQc6KvWjH4KuWarGu6fK5bgdvQ5CNbWijjnSzT3zicx8v88UbhYPovynYKySCtuuZtPK6Bhtkn5Y",
  "key29": "EFudX5ssQ4uqx5B72rCVfY7o9o47hDcvrHHQ7zqysjCkyJHUhLUZLq8k8AmJH9QKeHUdzvkiXJnR3mduBgdoFkX",
  "key30": "5g6djJ4GocubkYBWxuMsiN5riHnBkKfWKSB6bWTJWubXch1u8ojVjauzYEeHeq2w1h88io6GjsX6qjkjGRTHXVty",
  "key31": "31uoKfphSxbXsxep3uWk5mssrHaMVm6dr7MHgUQQzjyBoR2WxTdAVSeRmbN91nrWS2WcYzMEbyapKRCd8avW6vAq",
  "key32": "23LSpz2rqeVwgZfpuJA4phEP9u4mBsspB6QQKBiTh4GMY4hZi1zGUCMW1sCG8hjrJSD9bexc93QA2uMxq5rkWjca",
  "key33": "5xb4WXPwnUMH25VnkusH1CChJ3t2Ff7UVsQMX72qGC2nvm7UGJnKkEGkuAy7oxh2QcrS2AZASCCa3P3NthBLm39C",
  "key34": "5GnTzUspTtUrRcNYwdVaY9XkwvaBr8H4ReXR5nYXrzL2ACBKseMxCV54q6SndkSBoeUtpQtWFDouJ2GTXkgiSucM",
  "key35": "UqysPJgSmhVveXZrwh98hdJttt31wyMuockWWQVkfUCqEFgcpZsxPwgM2M2Q4HuW6WHMPz4AUM3ctrc9ZcPASzv"
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
