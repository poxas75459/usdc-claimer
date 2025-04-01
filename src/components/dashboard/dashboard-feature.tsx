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
    "3KciSJNqZ96HW7FygQa3jipdhVvVtGHiDxsYUMAn1xg9AFNev4fyZpksf8ynJXjUKGG7vW9YJ38JKtbHuWbZ1ZBK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26FqP7pANLpzU4WzkC5MxCDE5ueHfJehusdvF3RjhKRu3iwaoTDpp44B3b2Ujctidy1FWcwPCLGMjPGxRe1pJxUT",
  "key1": "GcqNmecaKAZs67JzqCzurSdY2KLMBptop5MP5Qh3S8QxToAxHZByDXHk8GsSfdoT6evpfWSn3tnWx983Ahmwz7h",
  "key2": "5RQQk5SmrjwJ7YH1bAZ9X4dRLqAboTE735SEkMzTz9WJVhM4LZiMiRCSp49PitJKvGZomvtS9qjCFx9FcRXjukoR",
  "key3": "5tgsYEvQqBUmtEAqy6JF6t8ZpgQD8FELpC3mYqdwEwpxq9QvWtZJteNMGAx1sSJvgSd5i7geRYaeC2Mg3WGMW6fL",
  "key4": "3zz5KrXUaPsa2AsjYzC2BPckuiYkDhzV85ea25LRZn7KkUZLTbteqFb81pb5B8Ve11iy3e5dXwLVth1Cn5S99Nup",
  "key5": "2pkkb7gBLhUYX3MC8E4JTP6AW6HoXKxgYGrc8TDWxMSuehZUPn1syi9RyDLamg9YJyjXeMb1QNHPqHyf4iQFByha",
  "key6": "CCLWRsJpLmFPrFwMYdm2hd1gdkmn2HE1r6PpH4iRACZZK1aUWsijE88Jfo8AMHPx884oHHihEhyW4uqcUGQzXiw",
  "key7": "A33bmF4Rth6XkAAySDDtD26VgG3Jor6UeiWTDgW6puZNqKj3F35zDmi65bQbRsbq8tXF9qGaCKmLcn4raMYtJPB",
  "key8": "2bAjeFdwXEF1h3PH7jiepFr2jxaEEyGSnFU4Ze2nEt2cNpJnMPJADcTegvtsxzdfBQz13ZafDaWqedHQ9FuU3jhT",
  "key9": "LSBCHoJN4mFDX4RZCtSoUEeGFVEqcuD2TphzvvbztEwtkPRv63sr76MrntgkCYjn7anrridNaTg3ZQ2aFTmFYtN",
  "key10": "26ao2AhjV7EEB5uziXwM1YreUgihTLz6hFYEYwk1eUtzBDv69TJNVEAg99sKM4jMr9Z1HSEwf33XDpQr8YARDpYg",
  "key11": "3oDStT6hffanRfuJPgJDuv1Go4yCZNBR7ouNDsu7hzBKHB9psNtgWhBckDLrt98RYzJYkGZHjwYQcze1jwgUZyVf",
  "key12": "56JqXturi2pFeBkMWdjZRZqoxBbVLfRRT8d79U5sSxBYrqnbKc7JfdDUJ9RG6TEqWRnWmKnYXyUe1yaDSYNPoX4W",
  "key13": "5YTkWNdRfS92TgSCKbrq5LBS8MTqVoftiX7H18Dzd4ujKjukDsGdxVej2nezBfDacCxUZNY6qm38dGfDxUwse5t",
  "key14": "5VHnSNudtyweDBpBANqBxwvovXf9LKmfAuvvsky6nY5B3jjaL9E27jGmJC9erXcQSbQMV47QrBBe6VwgpTr5nTJi",
  "key15": "jh6aeo1o3CitwzcJE2GpfhTzzu5MNDMeNCsRB4Rm6fZbdUY2VQquNZBYX26bwnDd21UETpxUDGnoYKXpVxSaaRX",
  "key16": "2yLCVi3aNBE67aq5LrxZKY8XfyFLcuZArDgFbkWdqA88qE4sqTNyvUMsZm8cGC6m5VAVHkG8mquHCxyaZY1dMNp4",
  "key17": "5XUqj7z4wJ2GpTDC9EsNJ3EeCvT8icAEcjAHN5u4CsZh4eywHYoTRFbHEFMoSqt5GpbDqeUJ1u5a2Y4DVXDB3pbZ",
  "key18": "3u5dB8Y9qWKwQeL9aVNUDHLUjdwECprb5qh2xraoHeKKWq6YJ3wxxy4p6a58Us1fZAJyzdkhf89APUV1PRVYwHrG",
  "key19": "54poFjwrvNmFTBp99JRhQq1qcHtsAAn2FwwGyiW3Auk1Y9Xt88BkP5VzoPNrvp8GMQzwWnHvjEmMXSFp3bdH6L5b",
  "key20": "46LNWsnkHFSC6LnNrr9gMmA2gezGnVKsnVBR35dWZ2iys2xdMTGiHvsbuH75JRw5gXWYCws5J6qzaJWo9k99Dm4",
  "key21": "5TTaT9uAMHYZPEMP4bWiqJYWUs8C18aqQKZtsZTwFKUbkJbhvTZgaQiFbBFaG4G7HQiSGkKaRd1mqoSrbm7jsNgk",
  "key22": "3kNpKbcug1Gf8EgX4r5Er5WMw3GjsEBTN5aH54W4XVx1DfcvufYPkbWQHBSG9hg94LeeUdzKvmvQUWAMeZ3JQWpD",
  "key23": "5jbR3DbNfYkTjP3evyu15z5PCTbJ7Le1sBM8pZpf6Kju9WZ3yFjjiT7pnqD5PvVs8VZRqe5hTju5yGdYGxwtVpdp",
  "key24": "5t5YKgRQ1Mij2pyLBXkwbowhZnbLt8sX1q5MWisvKtaFTYForPDUdFB2k6PtrjGD7GzaXnUuxiQM8GVRHzVkaAud",
  "key25": "ChphqL7oH45iK55R9Te3rn9xuCNcMiD4DgyBF7XT6Ld6L6W2tYWR2cWRo6c6EGs2aWDrwvm39LttYnJQnykwvkD",
  "key26": "Z9hvTwSiDvywhjdj8ud4drciw8Pmr6ekxbPqwNTF2nUup6fvDZjrHSM6cisW1MGcB3efpFax9et9RHigLsyKEbW",
  "key27": "3h4qZ61V4jwcbHNEFBYdEwHRZtwmxmsCxHp5WDs4ZWNYsN6nvfe69f81QAQZiGrZXQrf9MU9TRNL1HmCzswxmN5k",
  "key28": "WebjGCCmkHJHeQarzH1iiT7nmjeAqGnb6CA6pfcwFvuxQUjRCN9tGPvjH2juzhGZ78juynpy4bJrLXGTmfEbFnH",
  "key29": "8k5c5GSHCEoF4KJqWsKqrMufBdeNKqCR24zCPpwyjAH8yxaX6ZH55f7fE8sDRZLxrE2ETVMFbGzGyKnaxfVS8Py",
  "key30": "5uxEb3xbf6GgRJpLPiWyUosdKM8iD7SSRTqDLPbM7aqWaKXUeYzURLuK1iZqnpN6nSq3jAzYt5ENZJ8xz5GyEexL",
  "key31": "4zAMSsYrovwJ8TnpE6CH8VSZmEpzSzFc48BfbkVZtFqwA3ZssyMXDS9ryegSiuRnRNjqxDSnjGBeyANyLRGAgcTd",
  "key32": "UxMmFAT7bTkUy4qeYv1NARrZomRRYDp3pBv38e5WiPLrqmoHm1xSb9WeGgT8WVY5c8gCF7y4nWvRVQhM2Ld1eYx",
  "key33": "3Dr9wuraL8aMUY3kU4Ergy3B4VynZzkHFVTiGRrsuEX59EUK2ttGgZTYwoJRbm1FeNDPxbZ74Kbm2HeyXjrDKX1q",
  "key34": "h43nQ81iiEZmroM5firUdEgX8ZfxDnJkWc8VNQfn3hR5i3J1AbauPzn399wpC8WBgEFzp7nDA8NtEEVVXh1dQpL"
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
