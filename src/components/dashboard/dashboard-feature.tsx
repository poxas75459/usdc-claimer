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
    "3CaTY3n2t9jF81AKCosefvw5XcDJCitM2JgiLfmDpNt7UEiKhDsHEW9AFgTqhsCQheoLoL4AzvtMMW2PjHM9gXWY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xBgvSooFFwQXFWhrN5rpvraa5JwKEGUU2zzX3NvuHNwHSi4nS5bq1KGQyn6NDD8HAM8dDXuCScWp2yGnqXLBgER",
  "key1": "ZxPB5tSKxaUwhwan9Wo4LckFe4CeKXhxKu7JnrymtMqiaMJr6qED3RK7wr2eFFdZc3D8BnChmrreEr6zQSRDNdK",
  "key2": "3nmfJJLH8W4asjfc6Nfmusk1bwbvgHJSEeKo6WYowVkjNRBADfZR7ERKke1ySRqg9M2vRoz5rkmMCVMC8m6WnqG6",
  "key3": "AbBvajLr9HkM1tVpjjJhvd7ukqyTRLauTxDSiZyodL8WHiytfLMioNf6QriRLZ3pHesYYfVptjdwfZQPS3uN9jB",
  "key4": "42tVkWrQXEdq5T8s46mx17HwVEY3kLZTU3MZ7HooZCAwLQQQVekTJzR3J3yVp8VywUyWrvKsZdjX5m2qvC2yF54m",
  "key5": "3CEQvFGosPfVXpfbznss21MrLy3bJpnFNMxqzN5fUpWRRbKcv1VM4mfrEsJPecPvRFrqW2ygGMb7TMw9DV83oknc",
  "key6": "3aaoAPGS49ifebcyJr89Y2hB6ijqtspmAjX1AS2ojzrNxguYKeJyZRnDBipT8tapDznKJpoYMcGKGJ3MWAAWkrEC",
  "key7": "32VUyNtR63x7AckUKwAuMN1TJ7ZB8rQttqasiJPLqeruo3CNTs9qRTuLjcCcykGPWr3uyvZjCHzfxW99SC4S3v1y",
  "key8": "2aixQGpGt6aTfZQVGxHbHaWsUMdZtDw5jZNahpGUtKmjkdKcqaiVbXMsGo8PxjHVGxjWHw4bPrXTYaszeLng4iZy",
  "key9": "2fmt6H6df6Br3SjJr7vGxv7dUbTT4HAKLhYrZDdhcQhXmWzHEkCYr95b5jDBP7q7nzdJFqjy3QzWaqdRidA8YCRP",
  "key10": "1p1bSx62ds8wuVgvmDJtQTCdLTRrcV3UTdyseCrdExKJWJrhLR5eqaUfkCYyXbRKzspoTcYh6MZWfmC13UAYEX2",
  "key11": "5JQQwC6Nvfs4CSrYFs3MRURpYLMpq3iFe7xJEHkC34oYUn3f5BtdY4djgXMcFToDf1UfNNCwr7skoxNaznCLWEWp",
  "key12": "2H7g4baobFT9trMVA84NZN4HQXmHqDUNySMvFzGTaB7nZpsbpbjFbKYwajHeSvyqarNcVnAM6UNe4tCRPqttmPYd",
  "key13": "3Ash7YyQzySK1gaevMjxZAwxAi3CQ4nLWDLfHitF1PMtxV5Fui7hsA7LXGoHeUwgt4gTMuj6eJ8WqwPS92HfQ4zd",
  "key14": "4XA8AZGC148xStYYFwKaj7oriKkVAbiBeKxkMCGs2zKXWDRWuccPVFKYPPwwB86FFbYBcuErUir7umDt5k9sBeqc",
  "key15": "3p818mWWMF8ikMcH8de4jF4P9kBUThrQjRmm9pwvZwAjS35tGeQwMVcxuu1R4MKknJ6Zh7JcB1THPZzM6N1mquac",
  "key16": "3am19Hhe86fS7smWcJLYcDSju2YpserautVRKGQNAZ7tD8vD4MYzKKsSkdgh9oxckBmeuYf3K6eMpT5X2YY7PftY",
  "key17": "2vZkjLuGFECqJN8L2iBvoAutTQedfaBy41Y7vz2nkeUUdhWuXBuhBNWaKaaMnCxrPMYx1ceia82pJtwMPDVfG3mw",
  "key18": "5BtNPaVhrrmgwzBo242X3M84b3Bawhpx5dFgn7d3oJcaXHy2xLMNP79neiAMaCjafTLbSm1gqwF8opSuCDZsXC8q",
  "key19": "4a2yFcNg2vUd8ETfMNsxzkzx9sjfi4ZCwzwabpV8H9CbcjK2NG3dXwVqYfGfBSBaYHjj39URynMQBFjxRxmokspQ",
  "key20": "5S1ATAhbCzBSBvHhseg6Bu5GeLfNLxw1Lva3rf41bBuDRf3pnHujhM7LWZTsqi8o86iLBJpuH9aeaoavV5vdxuTy",
  "key21": "3Qikz6Bg3WhmzNngHWyP7h4JbEikv4Aay6a1KhZPwvgg3R4u2cniUDmQVf6jq9a7RNsynLqXeHdhea6uHYFGttoS",
  "key22": "4mE1nJmtCjqz7XZXchWk45X3QhLhXjLbEwoXu8RoRu1UemiAXqR2WfrwNroxJwGqVcnDa3ocaLy7yo1wJsmC82SB",
  "key23": "4DkjyP2mJEudiN9MfxL5cZ27q3vsinC7YSP3Ndi3TAgLjDYoa5N1GNhWYthXyB6A89a4TB8sfyHtVnj3bFsdEDFP",
  "key24": "9aYVokfRnHP24EWm4WKpmeL7ueA9QDZBqh1NAAkEmDeEwk12pDbK5erczd3KeyCJpKzaaEtnjY8m7HpdTXjv6ch",
  "key25": "2zzSXdL4fAXmHNCGd76fKZV6kYkoneBtUr2rc5iTjUkFZr1uSxiDygN6e5pjyTHf1ShKQnJn7FmPnYrrBkYXdiLj",
  "key26": "mwUW1HJAvG415pkFWUUMBBjwFkrrH2xcoaE6iXQQe5sbttuF7KafVobA2TbXWemEoorQEP7oApzCQaaLnkH4Vs2",
  "key27": "RXQMYJdjhQx3Fp4LhvbQnsbTGTxs3VcNyKPTNjTX3PLPi3JsEq6oWg5NwsKBGbor9mJMsnjb9ieWThztYfbM94a",
  "key28": "3nresqA1fUTp9cuwZCP5Zef7ArT4o9QdRiGc3ofMsGZs7ZWQ9dUkwf9FJwEAGVT5A7328fvJKeGrtYpgQc5QGb3Z",
  "key29": "331VLSt3DvLMxs7S11cWNFjHDtdpaMwE3UEpDuGz3bjMBYfjsmi6GDsxFdv567unpTS7QBz7EsMTu7tGjJX1b5KK",
  "key30": "4RgZWMG84ovab4gaLecUrtYGD8nCZ9PhgVzFpDdPbA3P8Q3kLipCfkYKsibdkkzf3kL4vLeYieQKd6cakdxVaWXi",
  "key31": "21D1tVXi4GFiFKzFzhXM9AHxMLoRpX8j3QEiEAHktXfRuFijxnB5cXiesq81HxJVYbXkoS1h3KEJgZxZtTXogLZY",
  "key32": "2tGnuFCqPLtqeaihyQcKXXHkp9qNchY47k1wz1LuTv2RAez8iKQTpzAMyMDt6rQxWTqoAm5mYt8nCuWuW9DXgCQM",
  "key33": "3PVwB7h8u8WcrXVaAdDm8S4V1kwZK9TE9Dz4pGFNvUdAkHqzMpo1bU68qcZvEvY7w4GCmqTts8hXf7yZ8y5X8iTb"
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
