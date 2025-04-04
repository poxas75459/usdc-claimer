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
    "3jbu9hYVcuPi8SkhMJ2cQPHTNnRC9cftTT17rha6Yjds4DJKA7tCpQfGmVtYV5TazkLrjPXtMBVYPLmfqfmkS6M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JcVWD3TD3bqvcLKHRWzXe9AoRLKDXpRgGpC2M68nhCidgyuVSZZEFsi3jbBNLnYgPr4XxaS2QvYQHMJZFLjJi16",
  "key1": "478mu9PJHjYv8v8ayAWXj9XVJuXLz95Mf7ihcFzEFQDRW389mtFratH3affaqWghD3nE5isVZbeLAqmprnfu8KuL",
  "key2": "35JQAoHsfFpqjCvtVX8CLQNdvHxtr2syshdpH3Wf26r7LaimEeYHktCf6HMU8BPuivXf6LRbab4BGYYKUVsS42dG",
  "key3": "23zMFY1gLEFnKbvGtiRdPdghnt473a6we1dhcDWDzuSvXrn7D1xp7PCHDfiekLUK6mgZKTjDQfAEzTW3tDbbWGnG",
  "key4": "4QNENfeS35jSiht9MFg6P3N5r2J8ACnuiTQ9zbZueGHySXvZEWYLN5uDHoaUVmwzgkg95MmxqtJnJPGy483V1Bs4",
  "key5": "Go2aY75fWG2VLa3UgfNdr45q1hsrPvEdRovi23AeedKtZQkXYsStAyvFhNxUjVy99JZEpwee7Rx62Qk2e3kaVkk",
  "key6": "4nTHCGm6gdyUDVA45sxGPhLca8TgJMfRm9iSMaJYLCW8BNnHT6mzhQ8dDhj5Lut3YXMf3xdAcaw6zEQ9ZS7m7emk",
  "key7": "3QJpNM5gg27rVZ75J6aZRHwPtdzR4rf5dFdAfG4dLg5Y7UMZzGv1wUr4WSGe62SByU4AKH3Njs8N7MqgFLwi6f4h",
  "key8": "3S9811ATMtrsMNmmMarwdCf1ciGCMg4Nb7i1ZJU8ktXs6VhqxuiiuatcmVsLTcYDorWBpfvUXRJ7H85mg7GHHUme",
  "key9": "622ZFbfAzT4UDCj4H9CjEdUMrE4ctJLCkKvM5XmAJtq1wTnU9dkSWCL1rHEUdPsjbsNZRLMRLrZo4MGohVpPEagG",
  "key10": "3LJ9RKd4bskUJ4JkoijGt4NpHDbQVFThkYHHdxqftGg8L25C876Hi4jYvQpr4866GbcTces9NkZ5so4zt7aaQk4h",
  "key11": "2LjbUMuYYJhEHaMriJbunJ4D535HMfeYSH6Jii39cfVPpdpaw4UAgcjqxWJXTBwF8pRprh1kADGLakEv9F6Cv7M1",
  "key12": "3UpeLFFBZ13LWE5Ju8fVgE5TYDAHULY8cf6DhywHu4ZTsrBrJ1JPboBLgc1crGnGtTKkVU9711rDqErZzGM4njg1",
  "key13": "5MHEXf4B6GNvQjn1LWm3z2Mci7BWn5mE1t8wqGEU2Zz6B2U9Y9tqr3Sz8HiLYByMys4dwVZMeMfEgwmbso3n2cR",
  "key14": "quuyG21cKL6LX7bqZzb9KG9KnJpRXhKFYhRBq6Dc4rHNqSF6a4Wv1fHMDkfGQW32CPcYdZHsC6N7RrwaKuhjNtm",
  "key15": "AbyJ3XFkzK8x3ReTC5J2nDrqgaGerw23b78iqPPdDkJ7q5dDTR6QBoaaaJQGpYMp9TMs2XE4iA4CumFbhz1MTCQ",
  "key16": "2Ymhr1TKy1ZhFh8RzxM3z3Q7Zvp6Z9rGVsEQcvjLiEZc5AzzyEVGQpyBZxXxyepmNj4TD9sHuH3PQHdWWfX7nTx2",
  "key17": "4iXjnfno1G8N2ZwmJVcNoiqtVJX3XzmqkJ2GaXQwtGxcwaE1WVtamq7tAeqTAqSHitGFrQaj5Gyn7YywFu34RxZw",
  "key18": "2wncn8UmZ8SVZDFA1aTh2BNMBd2y2HZQSKcdGXNbh2LM4t4WnDMZdtTT1y27SCPFCybuxKBwUWtXP9XMWHZ559rb",
  "key19": "dDShvTAC76VjL59seuMLDnQJ9iruwtekk1NztEwfjyYSXsLoANrbGMLSreLoB9voBqaFMSiGCNDysMGGYxGnDiR",
  "key20": "Mw5urT7AAnYRKutF7e4BZtApfrjywCDJcSC6tKrNT3fapNQYPSd4UnsicDsSRaFyxPGc4Y76UFib7pZTae1GgpA",
  "key21": "5Kq8urt2TS5zkmtugN9URMnfthiFcYsAk3moYnh49NRpWQxVKRAhD8Z3J58WHfqoDRRFWHBXttZuRkLEjctdQ7yD",
  "key22": "522AK4GDdryTDjupkSkMj4Qxi8ceGqDaiASxwWEynqEFcJf3r9oz1Fsc457o7rZNVWYEzUatLHWzFK4xXadzckCG",
  "key23": "2BHpsPs3MkBSEGqBtYMmCRqiyhDy4SNwJ7nzcCfwBiDh3aqmJFcrofthmzjEGE63Pyw8Vx15KGKabo22KsALmQ8L",
  "key24": "57fPb5qxTKoH9GBrYagZscaRYr4m2XKsX8cAPLX5kW6fhjy6pF6uX7tUsD2w9RJjAeDLHaHeoGkFvK1kbQkkQZY3",
  "key25": "YiWnzFAvrVWA2QMh7GueWz7kXM5qBVAhmYLQ2iNbWG425GggSqPXhwCQB8FZdhnxh3fb1mLd9Y9Jf4J9FzVBhFN"
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
