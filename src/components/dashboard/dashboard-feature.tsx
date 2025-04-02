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
    "5o1VJavxp1ZKyJpxNoiY2a8DcKbU3t3cz1pjdm1dJ9XPsMKEKtkvKKyWgF4qBeWwxkBeocXRcESVnHm5UekYfDo6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FxfcNrvhVJaF9xJZtpGDnw6hWgWJRndUUbZzBEJ85w1sWRv84ekCFCKQVKwuD6tJ8AvuBDyWFGdmkEUXqRu5G5r",
  "key1": "3FN2CWne7tAXPv9XNDnV2KpEJ72ypq7zQKh6kgD5BGk42WA4eNL9NJP21f697Von4YBSJWyJGzVgHEZ5U3r2Awqk",
  "key2": "3zTtoDiPnC3r7p23Mv3Hshdemh5GXeNcj3YDAgoVqvy1GLU67ksv64cBUbMLZN5Jdj5VgWK4DejNSR3bKhG285q7",
  "key3": "5av2U46Psg73knF3pKoERSTVJjm24Rghbx7uW2S9HZfggANLUZt65AAsoM1GbuFfvReMjd4YQVtvouJ9KBZqvpgj",
  "key4": "3vt9CzQGPVtCzdqfxdDSwn6zTzCFwhWLq8RpTWANy78axP8ETm3pebrQEUgwXs4SwzYGRHQxPdK24NqMW6E7on1o",
  "key5": "5V61wS9YQNfjyKbw2FhEPDuHQ8RhXgburk79o9Um8R5i26CQPR7rp9Gu8dJLgFpzRWSNTmHp3GmC8qXfE5bL2Rcj",
  "key6": "J9DHFD7UtNc9ER3VXdABJKHeGTaFnw1JwUytdT4uToJUs2433r7ws2J1zNtGJcLfCGTU8aKo37fzwHw8QDSdwtL",
  "key7": "29cAojhECEvYN4JxBDjPuJywB4xeyv4UUWcwTUCiWfaUikK9A4ecby5YQK1eQRSFDNVUn1MytFqnRoPe9F7a2kSr",
  "key8": "2awR68qADjXxE3FaaebWcKLVjE4CuWfFJpShHaJqn4DkqmYrUesCHvd9STT59qg4ru68MUYLgvJeswhVahVLrg55",
  "key9": "4af35p6D72jEkBW6TuVw37N4u6NsobzfL86NdLRaSdtQz3iGjRNU6Kvmitz4kMLY38rycX1uz6ecejpGFKMuSZGC",
  "key10": "5hyo1bZaPJVAHMDPyiBkSWoQj17Be58yir291JQNw66xGFAnW2JgN1SFd5ftKnEe5zQNuTi2XaPGm2Xiy3PVJxYM",
  "key11": "5AzgGfsTa4XTUQq39MfKT5HdodZLvCAbRfhKV9DR5V9ETKYSLqcUKVo7upkg87G3a7EVtPQPmKaCDUtdoXf78JDn",
  "key12": "48Uc8vkikZyeCeoxmU9hCtnWvXNWNfZgPFjgGAn446bL565C1d5FHdLQeVGHhxsf9DCzUzE6mnWA2jzpCB6sC4fQ",
  "key13": "3ELEaAXUJrNyNpNa3McXKwsVxuY7rn3LLLBb2sxQxxeVRZasGvS3Y1455aMPvtYFAuJCG6kyzCcqNWKUJa9B29vR",
  "key14": "4f9LyusHWRDWYvpMDVro6atuaqi3UXVkq23YDLmYu3L9a6o9w86GvjWGUUiEENgQbh1BjYFRB8csbfQSCQYzj2Ju",
  "key15": "32FpsaVSjzRinsi6JUNPWPMEPYDDwHujxUBRmVmp2vgWBQci2hZi3ZzXVgQtzDZZYGv5H5zFJc1mmzqTHzhVXFkn",
  "key16": "2xjdGXintd86hCNzbMTJQfp3izbC2bhd6dqJyEWr6i6R7P83J4KTmyE36wJ2aVjc8hHEBZLjwCzZTWwCA44NzgoG",
  "key17": "3xczUcgFX3tPJvCvAf8yhiCXGdKha48FoiEQmdaXr29XoYtZNaoN1xq7AsZqZFJwqqWjoRvE8G23NfR4yUjQ8Pv4",
  "key18": "2vC213y5CM4wRftpYpbK31rbXyQ4zarsep8drhi9eF1DoewSDKhuPokWFztNaLNN2z6CBpXchsoZr8ij3M6ptzsU",
  "key19": "4QeHLCsEdhBBrMNhVbskez5j8CjW5sbj61h8o1NroccRkmUnAdkP2CVDNXGUpsiLd9MzZWQSp9hrR6osn2BwgZqa",
  "key20": "275fsS4jXmCX86kmYwgPVvmmzbLMZhamxcipeNzbWyUzbThi1nhhhrxbRPL9iLnnebnN9Pyg2qtTk9d5vrNvxFmi",
  "key21": "59KJnZV35L6LnxbzSQTwAKRRowz7kGkNL79cCRuRsGRbbWeReGZUwmiw1946vK1nXp56jqCpAg4nhaPCUHEYJyj3",
  "key22": "2BG4U4NpZWWFR9ki9gbfSsqmeSeTTU4hao4gQua4bQU3GiQtBHauDUgq4bTsH5LjJ6njT3j1jZoeaXVvCNxBDJ3w",
  "key23": "5styRfQGTYcBaWhfB3qt5RBtF514nF9Zw7R29KYR64heSYFtGnvK5ZcnqQHNBg1qe81J9GAm5rVYuDypWZGJtwby",
  "key24": "54FHFfxXDYQNWkZYCFnq3zkGhHwA9GhLoYan7MqDq4qodmHu6HV5Bjg7UbGYLCzi8hFtcqCtD1oFt8HHgnFdZyLZ",
  "key25": "5fAFTa7yey2DdnJLEytbGMJcgVArpAtM8tDvjqaaXHQp53EGZAAJ62A6vXrYWqrVyvF7mLC8f74rgMRg2iJyNHmv",
  "key26": "DxurVrLbexpEPRpfCT3fVGvBakrq7qcgYV9hEG3qSKUrHQ5nsRuxstf5fkjZexnZ4EavsX5T5UYYfM8tkbGornC",
  "key27": "3XYxDd6soBUHhUUVzHS2fgM2vzwD2rP2PDWrYEArk2nEDDxo1cSxPBtqVN1DyDYLRaW6WZhCMYA8VWQ8CuJQdK8e",
  "key28": "pMXmWThokQNZAfZnq28gQRxHLr3zkfk131ij162dLL21AyE9xSq64TWcAjBBPNykx5TnyKavQcPrc2DJgwFgMyi",
  "key29": "7aDB8RkN2i7WMrkv3krsn3S384hK8C5ySkHCXLTFTZEtJuTUXGY8Ac1Sa5VLyZp7i3Eg1F7TWeDZ2vM5Zs8Q1Z8"
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
