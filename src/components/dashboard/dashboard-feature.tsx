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
    "3GDR29v56DXfFJfueaugFYV8F6ByLVwhacMgbU8oCm7tJxoHdXg2jPrK4sV9w3mi8b2joS2GDtCYqGtjFATQxCFE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xkbCnpk5T1iYEG1Tovd8hETUKBTtstV6k7YYnaAGCzthbhnKg84rgAUo5WKLmQfTaCK6oshHqBPqRrHJ69KCfds",
  "key1": "vH13AtUfYVt72YPBsbTDzKDuG78kgmzPbSSR4oVbj1Lap1kKgddhg4M1qhVmMC8S7zaihd9ThkmPRjVBdKFz1cw",
  "key2": "4EoKvJUDUjRq8r6AJTrnQNRqorR9u1wtfJXw33fNyK3FstKwUiVZT8VQKP1ZdTuLFmzQ1uXMQWudTSQLfg3bjarV",
  "key3": "5xLobXrw3wNrLFqkKhogMgpVNaxoWJ3uqzQrTrq1nbFn1hNc1oyu42DDx3kaN9gE2h3cA85LY8KWLnKJZRBH6iyC",
  "key4": "DFWwSvKiTs1yEj9T4uTuhZteB9Vy2JQcs4ByCD9SbzboCv5fGW4VNC1ZwaPWiaqepbEBBmHQh118dUVBneseVBh",
  "key5": "3msnF47QMzTkPFJ7W38cKtKSB45uGxfksCufuvLMGBCe59zahx4GyNPXgcMs42K9UgSCGohHA33xKE1kDzX8SGWz",
  "key6": "3vhHdQfoNcjuW7siDZVNsxV7SFRMyDyFUtkis8CqLdThbUQ32St9diK9ZfdWLwpyiRcKr9drsN3fTJuAYYSbHi8T",
  "key7": "38fV9FxUzACG5qvu9SskNdhX1qBv8dbWERor8q1wk68CicP83sn7UJUmUteJPnzvjDNnqtGe4cmVRJyta4uXEaxV",
  "key8": "3GrF38z9HYWZzEnoBs8Kq53ZPZ8s8nFDDsn96fU8AYMHKYYmpFvpPPxY8wZ1hVfWjjeff3toP3K2VFWaeLCFMxUL",
  "key9": "2DS7CpWUYxV5y4Yd1vrHZHx9MkUMNxR1KYDuh4uAi1uo6KvoPsmK718sZ2MZYY7tDes2bniyHiw9y2f1vk7oteaj",
  "key10": "3CT4rEJijesHNkE1QJbhtP746eGLxADwuunoLw8SBibaAYRoV63TdbgUTpXHysNkKWaKLDaHcmj6AdrwEMxweayo",
  "key11": "cFyT55v8uTeCNwky8gqiH5CULCfm3PEEFc6xCPQM2YnbvV13pV1tCqgperAi7MqJ57NGKiET1dwvuZ8tJi6Mqrd",
  "key12": "hqxQa5KRhBJxwGd55VGVkNZEZLzRTsT7DtBV9A7rtGz7juFVnqPonzQwfcQh7Qnp2SDZ6btMkPZKFcRdwdcQVmm",
  "key13": "3xbGo2pJHBcxN3L5V6UGB9yeDZpGwEiRnpqDqBQF1p79YSaKYggMQXzyVT5nmJjqWk1iQLZ4FDFHU5mvxgsUjGkq",
  "key14": "3VHe85v1QCQVa7NLm4rrJQTxkeY9MNN6VsXbyytsViD2HAsMx5QPpwEugcNptg47kcRF6yPnvmCCSC8oWzmvcqCB",
  "key15": "D23yoXmgESzrRGwzpesJ2LY9EPdiAY8UT1QF58r4hBJ1PAANS4BnMoA37H221bdqKmUdzSQS3vXGURWtfpoJoRH",
  "key16": "TcghX3Ez8o1aL5r3A4zsYi212bJyWSBxMhtSSnXAaVYSN39YqgaFpTmcnCQiCPwB96t8Bd3St5ZLTeTVBxrp4N5",
  "key17": "3QTUZKKruDs7MYoWtS59LjwwUyGn3bnissA4C5tcxmpZkJkJwiffpP2FyNgeysw3F9bwYi7r5RZbY193e2bHqcfC",
  "key18": "5VKx26gYogwmH4h6LbPAEuK9brhYtu26vEvGaYoRAGKcdMVHZa9iNCTFKP6bDtw2egC38PYsmZuCKHMr4FvnRXNV",
  "key19": "3naFmKQALPcW9eKtejhEAXwJQ2htyRXUkGMUFQWXW1xLdmmsM6hTr8XaFvRiQUEkRu8i111K91bRqdC9gnJNVkUD",
  "key20": "3t2yQSfvFQJXtoUStMeo5eMExAfMgEKGn9DSYDv5w7ezNZEBG6FxYX5NDqJvsnLC6yn6jh2eLwCb7y3UAG2ugcYW",
  "key21": "5yAXC4Mingziu5jbmvn5iwmjEun2WQpuhSLejBj9bfYr1aGeHef7WeMpygdxS8LrB8H7pgohrH9c1hjLeoeV6EfK",
  "key22": "ik4g5eSWsLgBEUnN8kXehRoMLdSZyU6FHttxjbTtK5Z75zFtCZ9ZTsVLC65aAhjafVrDZ8eV6uXf1av4rN4QH7Q",
  "key23": "3G65W9cYvdKj73jWiuPp4CzCTgvqrTfkZ2z5drLbFSMB8LXFN46M1kPzuiCyAMimgKNtizTh3HkGUgTptruPWyoo",
  "key24": "4UA2ytnzwAHT9ijHB88ZzqZSbCJhH6aNc8LbweccAm1mSvEooTDVKUFJd2EEsisaiSr6uz494YhuUeViP2fzvw7h",
  "key25": "2e7YvxXJK4iuqmk7vdLs2ZudmD5KHHGpkCqw9kwk5GfP1uoQWvHyhoVYr6sww87VAXLaXNTPzVY2tJ9XPUFvoaw8",
  "key26": "2VfZ9KMktrZALPYwHRBHcB6zxcgM4eG7GQKETrWWJa4oNj7vjnimV55WMM5JPGQzr2euN3FZDQrVi8VSmLys4aPf",
  "key27": "4zibMyrHYRs11W78ryfz4d5VwNnLwPtPF3C2LZz2rP9ESsxtnsvuPf4rBmyfKaSyM9KdZXHLX7XaUdLUAusJgsCF"
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
