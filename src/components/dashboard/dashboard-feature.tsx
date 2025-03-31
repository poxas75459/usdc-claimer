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
    "M3LN3CkhVB6TSVbgn9o4149hZbkZzHvvqsBESehpVKBgdA5hfDTM4jafDLvPaHaXFDmQ6E5tfeNT3ov1Z6AGUFZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iajTfPicbNfwMz1GQ2hKG4y6nvNxEpzhihhXWnvks3MfTHS5UtrGtGpjipCC5uqCQX6iKL7XMCxk9MtRB2pFw5m",
  "key1": "3Q1fNisgj9RxteusPx3fYsZUsa2CHnsoKuddb172c3gnZgvsu8ZyEmXoVTrqKG1sDWwXBGhj32NK3wVA8utMSJ1y",
  "key2": "4KLXpRB1wGrXfT2YjtKxqjBfmW7fE2Z8su69kxh25jvKGseMku9KwiiMtKBouXTDe5YQoHBZS9UnYDg9iZC5eFNE",
  "key3": "38CYgVoSDn92f7WtUyesAS2WBztZjyrUbqFH2j4nJmWNmXfs96GBV61K4KJUXmDDrqcZ6e9edhLUiMHQK7MFmPuY",
  "key4": "3FLyiTVRUMGbxq6mJPEaicY86tX4c6mz9P8e8sv22tssQ8AgfzF8xfuG4xHCiCmdxFx1F4JyYXG1RtkFYazwWDni",
  "key5": "pZqf9h5BkKEVmKhRnZTHr12trsHyLWVPT9xRscAY9MSfrBn1ghAptz9cFWXZc6H37R2NmmweY5UddyLbf5JpeF9",
  "key6": "Dhym1tGfLSHS8onX2i5cJA2pjFeMTWuZQQx9PCCJfdwccXfaC9DBxkou7DM96YAREwsNgQCdGTqbkDD8C9gWXRe",
  "key7": "4UbzK24tdsumgRSS1Z9Qgk5h5hF6bYwR1XjZarGcPh4X9mGbAXMCCwJNjuddvG6wektJJRnnngnLUxgrXdVFxDVE",
  "key8": "5vJbpaq4ATCGgR5jk2FjdT7anvABFguUoXMcaXJbBTwXM1S1zWiGSQJxFyeArBULYPo4RcnXx52Q3vCWpU872Kc2",
  "key9": "3vMaR2dYUKL4WjvH7VYWXazrgB1582ezXErWvzHrFqc6fXkcQnNxzMWWAPwFXzMXfHTjdxXWa7XcdYopj76s3R25",
  "key10": "5Vy3zguoEkLj9pHXrEcUqKJpW5cRpCa2t3dHD3pJZMNFwDEC8DSucY4drsgoWn7fTMTWtv5XKiZwF4cyno7bQDqz",
  "key11": "4yHmownMAfzVGt9RzfknSYdRihbrB3Hk9ZihBzfkag66KyYQDanU33yqTE4vUQswusWCZMj8L4w5CNHon7nUE4TH",
  "key12": "2U7Y5xngGAvQ3Zrr4UzU65XHm5ZKRXCCjYVfzjaytWK2oRc36phbsntwFBhCcGy3Nc3gtZqEcMaxyVAnALoAqvNa",
  "key13": "Em3ntnJR9xFiAWD8DWVhRWz4J7eC2kT39fR1sMcM4Vt7R3smRQjf1UrYKUXAMvdQZa9uvjUynb1ZrE8wv2Ao384",
  "key14": "5Si4sQhJM3sU711EoPWMfTsEYWWpjCXw1qKK1YquFyTsQrJSjcJZbSWVNVgbLQ7pfgMtRHD9kJcrUr1Y155EYv34",
  "key15": "4FRm44g6yfYMiQfJLfLKs3Lg195nSvBwTvkDsoi4iNMQ1aLWMcQP7kQEvJ56dM21Qc26zKgXp6vhgjtwL8vKHSWa",
  "key16": "5ebzuCXLFkVHS5B5QPDpZeqzFdB76uUawB6DwZxkK5EEFFgc93Qx6k8sE28yvqJ5hTC32av3ioM75uPs4TRFiGp7",
  "key17": "3DigYm8zWKzjwsgMrKTTb1TgmihaKCZLjq5dRNAUStuAZ1rBq1ZbFmXbfE4ZQNm5s4HyxATMuTubrmmG7k9MNqdx",
  "key18": "2GcrxF5Pai984RGzQpzweyCr6fLxsiSzSxnQig7VPwwfUnRhCXdh73CLGgHn7BjqUyw6u2Qi3ruzk2MvUvfaehqB",
  "key19": "33434PZu9XmdhtnCwcP688SmVGdtrvWHMwQ3RqkxNz7REUyzud4uR1U6QcGHASuKM6AAVHWXn2bxFfUFSsAqr1hk",
  "key20": "4rt2oxRNtqkEbcsi6syL3iHEjLpLHJMxdc3NvY4GkWLxtFkCYcTuTiS7RYXmzQYLJLiEbpyVyxsEPZSLZaJvz3Kb",
  "key21": "4t3gCrmDtCv2MUcpe9v54g9vx8T6mm3w6yGakPkZmxCFJmzdedvTmr11BPqwb9D78nC5BZbtiWJiMvL6pnYhJNZr",
  "key22": "2hRMiH4P2QE1gGUF8SiNaaSf7H5zMKDntD7Y7xTAcCLrTiNdw7sakMJKa4nKSJj7nhydgFvz41hV1PVaeVSAKjhD",
  "key23": "vrMB2FzuUQcdjzR7du1rcHAcfY5MjR6GUGR6kB7HQSfnWcFihkRvWFMyB8kzHUMjYyMp7BifD29eXKVPmbaUinC",
  "key24": "STaUKbwGKr72HtWmCdZP34389h5RjjEHXBVEDL48kxXYiXeeCsJH6Y5neXgyQ2oaGgAxZgADfbZZn5dk3Hk1FP4",
  "key25": "3nDYqBFdUBLU2CWtQYyhtXA9J7WsbHHrtp7odCb5Axmw2kHgaGik1Sh2aeRkzeuWXqD56y2kiby355XQPocuyyc",
  "key26": "ZujCR45DYhgZU3MbFCTTcV6VtQJhs9KFFgs18BMhhA3zQCxiqivmx9LfQ26pgHQQrLcm2JcmVM56A6k9s57qiLZ",
  "key27": "BiLbsBJBsHFsvBtr1tAfkxHcj4ekeyjS5WpXuLJNKj2xkVoNokENf9dsj4vwWjNNQ6VdqAJGWv6WAmdX6w52JUo",
  "key28": "4igfW1h5b4iaz93yiCRghHKJGo8WUVDc3TkG7j9cpJFM7JWo3wumsMggWAhim4EWRAS1mcEcp4MbNeJmKsKTkrxt",
  "key29": "3GdwaRcSUc3gBQos2QaofCGckQQuFJD6xYWmCVMHdjk2NzobMcm21pABAYd8WAd7RXoJ3xbAw6DTtfGiecmEXQeD",
  "key30": "3BjHhubyUjhTnMNLJMkbPdwnEJwCttAtP56XfXtYTnim56JaNmwSM4fvM67zCD8tKPf4k1znD7qL4JBkDZGAB8xd",
  "key31": "3BY7omdKfZqyvbXakURW5XbpwKnBR4cUhiZbNrESCJrHXjhEguLNTzhzgBuBx3MgcQuWXCDRgbcoFAU8C5f5r5Xo",
  "key32": "5VPYZWDHaTtZirWgCzZxMJwLGnHnF4Me2H4DhstmwWWMdNr49DfymR9YpDrqDc8aqTFoGRom2TEZ4B7XpJ9TDA3Q",
  "key33": "bxYY8cKCoZZCxnHEZVGPYYtLWHYdpgihCrDBjiKLpJXXwZ8b9KzH59AMMUg6mKw9ndoGNwtVxLqzHAqP9YxLGKq",
  "key34": "4gk8XPkqY4zx8eeDTCGKLs3vFqmFZeLMXW1Gc7vugrrBn8sh8DVWjk1Dkwc7VSQo2QHFjFWdMYSWMdb2xQ7goCqH",
  "key35": "5bE3hAqZ56CcXLUbv9VS1QTb5tHX1uxNt8chECksB6NTvcrzcipigzp8Cy54c1D4PokVXQ7hUVSJMP2EBc9XZGY9",
  "key36": "5QrNJy2LcE3c3AkbUw9JBfB8p4F1BeMuLx4g4dgzi8Lu7gtYr6WZC6PhsYGXK6GgxT2bP4MgpXL4aENw7zDYUwbb"
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
