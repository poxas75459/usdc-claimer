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
    "3NJbW6ucELFaX3TRWZpHr3XrwwfKjKuHmy7CA6cBWk8jWtchuvxWLqFExqtPqr5QC2WWbzHjZE6is1hNZLbCVHxW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28WcdFYacD9VPbjYocZ95ArcLpvjWjgPmFKUNMoYgx1xu5jHK8DQDWr23tPXMaw8t8vFL4k4tk6rpcBSZb4BNCxp",
  "key1": "LZp9pVgSTGxzo3h8PPkKsHZswZnQUtssEiD6CHqt1DMAjB2HiKZtWVDJFYJWFJccx1L6EKdTBPE7f93urrzytcn",
  "key2": "5vHDLQvqKtSiGHsyu8ugRN56V6fbL3KKVak8p12rht5nLRwbX61yMD72is8r5u71Xnk4htqi4w3QwES5FW5sDGy6",
  "key3": "3r2MZak9DTyyY31ErhnD2P26PBbn19LPqARyA6pA4DhC7ej5SodUGQDn1moy3NGAckkfNdqgUaxeijh19z9RnxZv",
  "key4": "3MemKxrsMnPXaFSCcdSqPiWrd82GDhafpWmLKLy59vZWeNERhiRx5RD6EUrFFFm3wFG5KWg7284vwLsHFqRFoF8a",
  "key5": "2YsDk5A9391FnWsNTKDg7EdCWF1KLhGbMJi3PNPXdS5neFT8bQZDDY8HT5dugNa6u9gEMEDHz9N3b7ouKZ6ypu5H",
  "key6": "35pj5APJJUEv5a9grUdY4Sr9JtSAjDhSuQx3hYydfm364wzi5VbjdYxqnDLdeWJgJMz1nFUSv9iHEeHfu9A7vijC",
  "key7": "1vHn9Cp8oeGGczKb8tTd6YFeLK5W8Y8VERWE9Z11zTzukU5jGXiJ73vY7Tk3EvYgb1YuzuWY7bHAot9B1tmQEBU",
  "key8": "4HMY53hNNBanQUPxmgUiunRwkFcTaVBtXTkXULp7H7pNQnZeg59M93w7gZwubaLx5vSAWSuDGUVjBHjroCPvWPsX",
  "key9": "2kYXw88dm8ojdbcezv9mYVmwFJLu96EZY3otpnQq8vkvJx64EsHGn4qV3CkWMk9qpRdAumU3TUKrpvMRSnd7q3Gg",
  "key10": "4KHisA9m9ZmZuvyuK7QA91KdKESYHbEvrDVsVNev541AJZicMkzDvNSjYetRDpTFPYV9jA84VWtRrLmnWSpUZuCN",
  "key11": "5AAN4hKeEJkbWCQZPd13myQhMauRX91NySVy3EucwpLuPxQ1aS9noRrnFqBNxsdzAaz7UHoX14QQcYX5S7SoZLHK",
  "key12": "2x7z4NJTuQEp8NXNFQkEpGjKaCBDcVU5hrY14SVztmRHH7ZcSrKa64AocLiVYiAxuS1pZZDnQ4FDaKfxYBGivZjg",
  "key13": "3YEBqKqfCtVfzBpCAyMPWdeBTzPPUKCxjAUMMzFXFd8PMLfBrFJ2Gj8Tq1oHebZmqkq43GS1a6MLHsQ5a4PDR1BB",
  "key14": "2gYs5E1US6C9mKYnMjQ2GtdEMem52ocCZ7ipZJMA2eYZ5bV7JYvrekpZRsKzHTTNbtcFmM4F1JiBaeKv7TU9RdSy",
  "key15": "w6LT4aRPxYNtEaSQwoyTSphcmvZgmc6NyzZvrEDTaapchNYz6z8jprNew96GktiTb6tfnTUzqtKcqjFBxm63SZv",
  "key16": "2NhRCeEXapRC38AQhEoih6SQMm8S9ahiJzigbZUHc2KecyZRcwKmFgmFD34MsWFYNsr6K3Qmhp7sW2zwPVqVkvr8",
  "key17": "4JHZbaNBer75hV6MokMcbL8zvhNVZLpLZCc6EsAX8nqC979x7WaKjW3YbAzFPZGN3wSCsbUtYn8j6P5D6CRX9dQx",
  "key18": "a15pDbxmd8RxqWrT5B1zUnZXFf1QahaJsJL3YhqrGnGttRerBRxAgT3HSyCPCkeSUscPDvQUEuxTj8fq2FwCYyb",
  "key19": "2Tjrr1bAuMiDEPX9F845xjnF1P3Cm3QQYQHVQ5bnZVQtUB73U7ziXcGsHqyi9XCQTYR5qvXkjMkRqtLPzsS9vpao",
  "key20": "51oqkStmuYfHVTN4FeAyQQD4i1Kzjh4v6mG4K9PJogsVgSWfBaiB6dVmJ3YEmJnJtecP5Z6Xb7SCLVokWJtL2tT9",
  "key21": "29shDcHjqzLGWPZJsmGSKLD4LWT8j8DVSqmmRctUst3HtpLA8uoZta87s3XNqNQGCfrjsZLtw3bX7HBTMvc2LeS9",
  "key22": "3gKpYYvMQBnSCNAfpHFgpKhAy1mWQ7ApWZmvcRNLVXBAuoPJXPvorcV1j8fmkDc4PWMLNjyb2zZGQJ7pBpkgRNN9",
  "key23": "81Dzj7rdRunQvCm5S5qRYpzW9YEL7ZwroE88UDR8TtgBXmz4r3JbxrBwSwYWrmE3u1d3yXkDKQGkK89yc9EDteH",
  "key24": "5Zt1XebXZvY8GhTxQpHXV6ek6rs9YuTWawnwVpuJAdgdBANV1XwUUxzPGWFr8rcW1jkUJkPRdhq4XKYc1v3LCskr"
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
