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
    "5F9vTMoPs3wy6HsRipjQV8ssa68Tn44wfWUVnfqM1YEyJQDcvxobeuxd4kLWwWKVBFiWqTEMdHjtSwgHaz9wrcnz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hFNMfaFc7xaEqQAwcSYER9hD875fEeHsFHUYk5bAboqmLTCdBz9Q4beE6iw2v2MV6mFwyXeiD8f7FR6C6pRioqB",
  "key1": "5pzUrxp41xfNNJ8LAmusz2wim7zk9HAKgJVzNzhTZcyZpjFjK4rsqt2gvaFGwxecmdUcF8y71nArdaT8a91STpPw",
  "key2": "3LKEFfmBvEFQivLTqkqP2aMMwoumbMrfEoB9BXvzw3y4BLfPjg5rteY84Q5RmHwUqpcsQapidvsH52XkfjerfDWL",
  "key3": "3QskFKZBrB1NfJMrqMk9r7pKKiHHhCrq6NMzKLbNt1n6XXSNbngMAxZAi8tJXjMgD4xa3fiZW27QMvmjKDbZMg7w",
  "key4": "3EXZMpEd92nhQ4Qxw7EyUzZC9ZftEaAVorShk6gY5zqUmiG5mkewp15oLsS91rYDzNbsLr57o1J33FQTHyjYe25a",
  "key5": "559kEr1dbLZkb8uFwtef1xbLhMzqdYPkDNMKPzfx3KWUdEMkfSjTpmT6BABqyLohLfbUSkJeBY7Wh9PfEBAvAzHy",
  "key6": "2Ao8UNpyiALnogr5wLauKbaBViWtzBDYuJ6sK9cD1dYhyUW4hYa1o8PFr9Pbbgfu8uWBuUzZWKqL1PbhBt6fv7wC",
  "key7": "3p3fRKEmgaiscrEaDRp1DpXkpZTGPPNJsu2wQ9CCP5k5JDi1YiFKLjXEErJEN8cMMQ8RSbG3PckzYvFZYmr7bZKL",
  "key8": "5V8x1KwzDEhGGkoMjMRJSyupjGgzsoRP2ZbanB941Qv1Nv3iBLNbrWYGQyE9Pt6ctyCw2GotasgZuvnNUspmEV5N",
  "key9": "vVBcrFMb7tU2RxEBcK8AHQZByPtn5bCSVyHX3SW6MrmRDa5mjqemX9M7Su5dkEHnMSbqsUP5JVbcNvRuKTecjjr",
  "key10": "2ivmo1C1GU8NQKwU5Jkdp752Fgovg5CY1yBfxw9vPEqVNvxTwL9jJ2gT4itSfHsuNEckCZEPpjSvvXMtUh5c2nB9",
  "key11": "5ULN4zJsHbHGkVwZxfYEEz3NfX4DD9HUkPiGtWv471nriJ7uzLLdCxGJhvnBfY6KHsS3PMscjXmyX2m8GeSMkJk",
  "key12": "48zVou3HdPQF5WoZn11q3PSJ7tmMYDGtnhCcdQR1ZXHk7r2RZkW8qruWPRRE3tVsSo3LRA35ib2r4hiCYnLp6QNC",
  "key13": "5XXkR1AkASCXxif6xwrAWJnrYk542HWBJ5akjYFAoGpNWPUeji7VBgGCJMWStJpyzFBU7QnhNsYdc4FqfK1froqJ",
  "key14": "8ZKZ678mJhKiYaWoSKcJG8bDm7mKCswJpt6gj7efMbUymJu4HdYAyh9hm8huuJd1TCdd4wi7f6SKHics4eMHH4R",
  "key15": "2jM7XeoUaY7rteaweoi3xYs2LdC17bU4PJnjBBXYTnRyNWBee5gygiRCQjHmbaRjGbEYY2Jb8CH2mejgQBJCvQHi",
  "key16": "5uW4ZYFrudzgS3x3siAoyANwmSYXVDTnHooHMxvm4K946NzdSWSnaobL5LrhmZfsgKci4TzAEFEBiHPWdXrid9HE",
  "key17": "65gjzazVbk4Um5VqS9KWAMaTs4hR8YSPE4ZMfCAmP5J18pxcbvwNbW7q4yPvG5g1aQQyA3dLXfz5EyVAc816yfYG",
  "key18": "XuGXkPxEK5kg8XtwAfbfLPoqaA2MccfZBGCRKHEUbRaszTzyUz4o68MXsp2VHkBzS2oqixJRjBbuLnMDfmXwcrM",
  "key19": "2SayCqsq1cM4bTmRGyewoeC8bpmYGvniS2yjuk5LoC4w3guWpWzkkxeHTQXQxDX4SNrFbHzB9Rj7nfmzinsKy1Wx",
  "key20": "4PZKgj4nMWQxrGsMhU5tPSHNsJBxt3dGh8witG6YjmNdhAWmnaiaSoTGjYqKk3aMoej6wbQ3dsqwCfSQH8skKJvU",
  "key21": "mmDbgK3XLN4m1FMfD5bN4jCQBTCxbnb7wE1w1XPhPzRBr2JxaCM9nRA3tPAS5LpNLZxurAgecqgFecLZRzzvque",
  "key22": "xM5RDZFeiqf1bPBBz4n28KhPZ9VqoAkSWWN5YeQkfTGgCFo9G5C69bCX9yucQQiM1P8pWYMorvczGrtRgR1guwP",
  "key23": "4fNpuHsuggqDUtCN9PjNQaQSSAQD4ta795JTqV3txeF9a367v9AZYBStfoeiGA8b9TAkH2jpDGAqF1ynj2botp38",
  "key24": "4Bki8T33BPWUPMr2kjyox6JADrihdSFMa7zBZbbrHA98JzQiDMCGzcvaATcVNvK9Bpd3967F8wQaNrnhzSf3Br81",
  "key25": "2vXKTqxNBo5XfPbDDm2KXi4hHuWvB8DWtomRLYCUB2uaNLDph9yYvQD1HRg4MVX5tYoQH86xSHMVYwC8f1Dt2o6C",
  "key26": "5og5G73VS82Ms9tvT8W13TcijDkZFwQZDWqDisD8Ym35ro2c5NEKrwB7tzH1yYfdQXR5owAbMPGKJT84WjkEwuyF",
  "key27": "5wF5sYe1nKvbyguy2cKdr1hDRXRnsUUDFYtNwqPKwX99CKYPNz9JHQdt6hmAanVrySxEMmV4o9i51mGcFeaBKyAU",
  "key28": "58qZw5rEEwjsx7bnYzU3A68m6DT3buwA8whpmuxQsN2kUFsZTvtyeu9RQWkC5cVGAGjF1KoNG34ZSbF4zQrNzGvV",
  "key29": "49uTPu4q6mWMzehzmNGQb7JNUy2tHdifmdLnUgP3pyrnnHQA26BaQgBxgEaaa4NiccHdqbCZCbEZJ7s523CWyC4K",
  "key30": "GH3sU6TfgChaRecZNpaoZK1sW1BnJ9Ec56U5nNdBVnv5L1aLr5sRfEXc1b9LTvBDinrsWRvEhRoLrzKfEpq2Cy8",
  "key31": "2mz869c7NxFWWJ62MHNLEtokdZQCM9ZyezLLTfHDiacRHPvs8R2NiEjFEuTQDAW6XaTBTV2JV4bn5EAhVH9Nfx53",
  "key32": "4Xc2a7cfXdbNd1sooVnyGyTkKAw4CYdJP93oGTVEXW4YFtSa36ArJ83WwLfWGBM554DddUMcKa9fZaYtVB9dmWkJ",
  "key33": "4769sKmjcGy8mnDdGWNS3QRXhPyGggcABvvk8kzt6WBk7vC88qoybKx6NenRR24e1bZCF6asovTFDvD1rU4ibfd6",
  "key34": "3G3X4KY6VfFEYQptAwrCeWrreNBVD4JpGcsxEZgEKzPWBnuzPxJ3MmgbEtN4VpmSpLUspVqgAdo4cNP6spd9s6DB",
  "key35": "4B16QfaUPYzzR4Avr3KG9Qp553CjVLBTMz2qanKtztXxBjrAg9SyfPpv41XrR8958BzBB5RMUQJNn2oEyjRjvTf3",
  "key36": "jmzUfe7H3Dm6JAkYWEiF3sW3331jh95TEXrveqELiiehykg6GC8oaTEV6ibiQDyBmEmyEQ39YSTHTfwwQR6hZup",
  "key37": "2eppV3yThb4grpyq796BidUhAfdqHU5hEMJGsUcioVsFZsSXfa8AfBfwsLbDrcvSJb2LhdJZqWRyPsgWAu9hZ3zz",
  "key38": "4MeEZYEdgcdyhjHCnVuhbLGPqGmqYm8UyydfVLDWVsazmNMAgmrjHKKxZMPtdxqMXxSs6RPygtXQAFUH9uQ75yDZ",
  "key39": "3UvojqVjrafpXFMPrZ7cyrapdpNhcZnsYCgzHp1JjRxJaEfDRxi1CPoBbSDt7WTiwzLERZ1tZ6tB7R14iDLb2N5o"
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
