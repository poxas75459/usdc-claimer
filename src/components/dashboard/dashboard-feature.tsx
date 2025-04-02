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
    "5wco9HgFdTrtk9QrX5HA99NoGxNKQoHzMUht1JYbz4WgKiguoxzXsa1ce35Xtvta3FDGuydmsPcp9PjXo5mUef9G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RLGEQ1qDwx4NJSxxdRc9b59NoqunUY99BP3oWe35W1YRqAU3ts25uEgXfywZQqrW5a431gFaLTFwjqHrMGgcyrY",
  "key1": "4ujMSkoaGWgMpr7nxu6FYLdBhqcFqJ9ibrx4cN7qZTt2xnpMkE146e2fmVVFUx7by4F1CvHXM6MvnXyQGujuKgej",
  "key2": "3GC3AwFqoPnQJuBRgFkMcgNFd7Rz17vhJgxRR1YYvkjiMfYKEYaHYmkRs19tBnKyhmUvCb5yUutwzZnkp9EtKcNJ",
  "key3": "ocug9ZduZTGT6dasHT47A3qHRZmgwwXUKnapS9MywwuBkBKFeVfJr6YTrgS1UQdqhVvQ4nkmFuxjDAb5wVt7j5f",
  "key4": "4qJPjnNfv5jKbfY3Ap58rugF4sC4FBBVmjxozAhJkgXPP4C2mVZaTK2eQ3abHimMWkvSeBuPLSqnGu8LWZN2CY9N",
  "key5": "5etCTcmqkUzXNB3mHQdy1UrVKBHXXRfQW49MHDz91XsHMi3W32HZMhm7HXHsUVEd8Zym4gSow8h8n7WtE7fir1Jj",
  "key6": "2DLbbj5VpsTg9smtcMtVCyCWg5dGxtubh7JgxrASffhP3fSwqnTcdesLLuYhfaeZmJny1PKzzggp66LShUhCGPrm",
  "key7": "3CGTVm9f2eo64Hp4D7XTpaAuTLG4u3nY4G6sUC5ddc333araSNj8SjQxQTxK8QaQwMySjhS71ppyUQmoS7awyqqQ",
  "key8": "nMgs2zGRqt9xK5KeZKTevWroh71SNCcQHpQadMhpmLsnS6oYBCREbp57UwZ5fBBTQdLHYaSJUN1q5N6D3ybbaiQ",
  "key9": "21oyE72hMUL6rQKraRcXTmLC1QsXi4XiZgDkbmBpVB8zEJR4PQSUWfGZ1a3P8mqZD4GBEp3y2s72yDwiwi4jBMpU",
  "key10": "2siBsoik7FhpqKmwPaVPCtNxh4vXe5q4s4d1QGX4V29kuEyVKixmaAroJeZQVjJr8NfiN9XwX7KWRcBDGQcTm12C",
  "key11": "Hu9cfEJGPnhT6YWnaLcRvxqJbqqrQ6hn6hVVtEeUjbyDQiCQH1NrY4wVPGwZ4rF9arwgWHJha4Z6XSZT62vLD73",
  "key12": "5P4KSrSuuoSftjB6rdEAKF1RNsYcDg1pNurJTJMTvhkLMHV62poHkgtjn68Kch3WR9W2yp8q3Z7XZBtaGs8r11FG",
  "key13": "uZombU4SwwFnJwjGy9UmfyKEm8A5s7aXyBiuA4o7xPPxfYz2HismjLauPcbUv8ZgmoMLS5TonSVHfczcbAdd6CS",
  "key14": "63w43YyQoip5baz6KYGMBuKuJ5UTgD7WocJktWgaAYmkLyKg58ZjDs9cCeymQYgEmq9uAqnHWiafyvtdoNi1yyio",
  "key15": "4pzy9N31XrjbVA4WN1BQrQ7shKuMAsom8nPEDWxRMF1txEyN9p6ZXf6zRxF9YzJ5u8J2ern87x2ijKP4qdYp7acj",
  "key16": "4Qd6oa2QWRrKuP7nGqoawzC24GfpcGffFZG6buAcDi57KnW6M2faocPd1ioEYrrcGmYr7uQLjhsyRidrVeZ73xDY",
  "key17": "mGb3nBx9PkxJRCBDWJxABMb9HBk7jERm6Bsw5WELVKfRbSsZZVYHDHjKxbcuxywfemfsjqwCMPgrqNUMpboZvVe",
  "key18": "2fW9Hu4Vu7zDzzkNfKxPwS8DDcbMhJApWiZV9ESx4dc2zuPCxCBn8GPSKCDq6VLm8y9z5h5KSF2CYcNNZZCDES7o",
  "key19": "2VmSiCsJxS6zeYt1pxdarr1Qq4ZpkN7vPCRHBs4nZMmpBmd8X3GCBNd2wZ8shd7rndhDDyrbSsuBovUnx7Z32B6x",
  "key20": "2idPcXPG5iGyzjFVSParxaC5YxaPiC7tcFTxVGRCRUaANNQ6iAzTgqnFxJQRoYib2n8CeStgGYDsNxrnguGqkPkA",
  "key21": "5Y1NyHKEomA9z2MGvuDrojg25t3nccNNs5KYA6Wk2KiaviRwvhnDRzT1kRwB1GaK62iEdoDtTjd2nGzGbCaXXfEu",
  "key22": "2Ry2vAMcvR2Hk7vgM9g1Kxhv7fehSeYMjDiu8US8dVGf1sGq2uR3TqSqMVT8KTfXZMpWdyELLopxZaf8eQNd8M4u",
  "key23": "3TfHtEBpBHueSbshw43VCHWzoX1pnvLcyj1gqPbRZh7fjttE3taqoJAYj7f57RfwNX5MK9TDQED1WTaeLPZYoj2u",
  "key24": "2XPGS1bHoXSutpFmwX7Hf4wTfqLrT83KgchnitBpJuZKAHJLpkVJMgo6GNUnZqNk9pQBYMbjQrvYkBJqQ6L6fL2n",
  "key25": "5CV2tpJjX3KTRNeNgNZR5DKfU2o5oEvJEShjC2umr9ag2v33HRT19YDzik5MU58kcu72oKDCZGFUdAoofPhsVVWv",
  "key26": "2VJE8eLwQguKcgGsEQbjfg4VDgwUanpJDEC96wttXGtDqGHGX6M7XpStsmDCwdb4gDg7qRj2kFnmAHp2FWWk9YDr",
  "key27": "32d5f8VmhNqYJMVJ2ggabnZVSwNYX3PRJCzkcVT7axUBWzxCJjrMJDLKHvH5ekwaztFffnuNVtpZozeLpoRSy4A3",
  "key28": "66d7LCiPAqFrzDF1n9SWsQqyUiwXvM47oMbeaFigQk1iJJRL6TygxyLh3Hf383TRmv35uMPVECmJkWtK1yMhN8np",
  "key29": "3hSvB4EkP7XF6RpEgwPF65hULhkDGwkqAFWpHCTWkaQMcfVhnqLgPS9DhbXTxN1xSmQ44tHHr95bjBF4X9M2LgtZ",
  "key30": "R4xNk4cTDgUYGTEeHPw1NZNhTNNZn9Pp3Dvt8KpyMfUADRTFE6ycFPfXCsjdaEa3kXxtdAXazddVC1WUQuBTVo1",
  "key31": "2y6ZwQKUgv4Gzbmqp9sJUau6PQKRwnRtTgQ86j58F7bjPAq6JVghj3fGkNKM5knYCuQkKjc6QPhtMySB6z9vCQAu",
  "key32": "5WYwvm5GWZVeS7MsyT2Z3EdNpoNAbG7w8g2LUgwMzyv73J56fWwB56DsvPP8wAEoSNBypGt1AsTRGm5YZXyBbGPY",
  "key33": "4TAPnAhfYfxhheifETqzWVW6DUVnv2EJjotbpb6C6R2PEUbTRMhq8BoajvAQQ2cGgNQRSmAXUERUCTgG4MB32goQ",
  "key34": "5QpK1u7FF9ekFq5RMQBeBiUwgSrCKYUFnt27Ldsrtw4fRwvT4fyFhUJgzp8bcBfGC8dmmyiRNSRboYezaGiX8zXe",
  "key35": "5oeQjdmPmjHF6cUyFebfnHim8FWERQW8BFPxdd4Hg7cb1TBdDwoNaWGyLquHKqgiuDkDsW2yeZJfyPUojrk6GLSQ",
  "key36": "64dqYMtBa2ndA2JiuezE2wjssf77SXpAyhjGpU2VeHL4XjLgsXRhLeP3PKdUEsT3v1Z44L1fSo6zc6iGFHHkrkyj",
  "key37": "3q6wGxQCcdjvntY9jp5tvQteeCm8QEC6n9nYqBbCtNsi121ZsCeRFoZPszF8UfqiNCdikp3JBT52rY23CtzgPGgM",
  "key38": "3e3hywsUCACPVkyokSqjGbJrp1HMJGmhqJZFnHp7Z4Fcymdik93joTaFdH8zfA3BoTzvYHxo7mtLtTWtQoQZXYNu",
  "key39": "59766m2tiTPh5PXikf8oy9SAULvL2TJqiTzeP7HBJTpqLHgnRxYxGWmDJB9sgRypjsQ8CNPNnBcGUQR87ShMP4Xe",
  "key40": "xTUzVoruitKstZMKQnPqerkeS7kE3hZ6RCX3EPnxoJ4sMo33aa5iT4pWV8YvrYv5vDUpVfGdtGt4rgy4rs89XYQ",
  "key41": "2BtQNT2NRhpMqi5RikxWQFqchhUX9eifNZYW2MeHoMEB672HE7ycjQ2bYy1Gh4eQF5qipRqqpXX87bnrS6NcsL7",
  "key42": "4GVLKwrQzpyq3wduAjvzNXeVyVXFfifBnYPqezuo2Nnr65215oMu7KHyPHx8LBsiZ2JQ75a6PSRb4CF2YEGwRujV"
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
