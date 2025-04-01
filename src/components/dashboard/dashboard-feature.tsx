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
    "2x5UguGCirwPDC6nPE214VYfKsxyPfv4Pns1t5e4dQEXs2PUq7DMPVeUsuRT7D5DNVoeVvU57mbvUwpWnYVk42YE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ezdNxT4AEzT8nAv6zJYUdvFq7W4QCzi4avsVKoMv9AyjYG9GumdUGuNBuQWXBDjL1CLUcgWv6hA3Gvpv2xxdFpy",
  "key1": "5hz3fyD7CYAbvw1PsazHwD9CRoobd5rYgC6jAAHsVTWnNC9kzRJsHWEn548WrTfGdHx4g9kbYTehqeYnbc3LfiWW",
  "key2": "5MLXz5PTaTnDyaD1jdjdTRFHMPbXBK93rGjR1uARqqx3Dj6uo6k5868Zpe1htsBvgpj7qgDfbDdHnZbNg1pc4p4q",
  "key3": "45LDFb4AmQ7uhtChBCZwkWRiKFkXrXxMUarsXgBLqNvCS1pXhfDHbddnUaEu9qCT5ww5YQuSTCA8uD5C2jDWhLGi",
  "key4": "44p1qFnVrdrPU5x5Vy9s6QspLjearvZk2d9oQLqQWNc2R1FaZVWhXjBcshYtcpZTqofXrxB9mTNKMryYZSuSovLs",
  "key5": "2bBQPZ82QpiG6N1sJ9S4paxs5L5VHFC9aojtDZjXtSUURUg3vVR2J8EdQNtYXJvnX7bfpAkbgDfmkfxesNenhLxQ",
  "key6": "2d7bQUyEmwhDSUJdN2aQwprTkjzLczDpEYkdNMefMrYzWPDaMDHREMYxLXCKACNKEVrVQvMkMS1pzRSKFXXR5Ssc",
  "key7": "3i5NoTTzS3v6ctdHehktithVsRf3J3G6RDaN6LUCQEDbVv4GkGkimAyMJZ1PzP4sjgV3WwEKm3iSdMzXotEaULwp",
  "key8": "5m6AEYutZdAakgYtyXvE7BnrfE38vDCZAcGB1XrGi8Gp9ZFN3iUM6dKkdhEuooQDUECajBTfTCaE9kSwNVcKeaSR",
  "key9": "3T1u97JjPfRPk7d3dwhycEj9ExB2H6QpfpN9pqtQgTNuZMRavJLoySUoxRixt4MdzDbQE4mnjZTLnPzeNAm5NjPP",
  "key10": "3G1KZuY1z7CY1PDXiEym4dAA5z2GPumYewhRK9oXEZZS8Gckzv9BPQeD2kiH8UJ8jwFPigVuqXxKN5XvtYWw4CB3",
  "key11": "4WPeYaSKSg5rYTaw5eWEcc4XV3BVw7J8KnvFn3kAnXagJv9xXGpXJ3G3B3GsDuMZ493hhf4SKPoGqZFqKEmtG7LM",
  "key12": "2zKoBraFZfs6z583B3YUSnNHW8FyMTvXwFkhJKTZSeibkAKyKzQwWcu7zZ2sNJcS4DasGcpsHvkiysSuSqXBDcw6",
  "key13": "2XeGACxeRhbnRhadRjT2Tk8CDRDkLf1t75rAgFckPbZbXAsX7GQmnfqsigvtnrUAR43LPTsiM6BWEVpegmJp4ytF",
  "key14": "5ZQuAy8z5VvnPYDt4RVFttJQ6wsaj3pZ36yYD8A5CDdCHKSooUMumpDUTK38BBa7FSY9bB5vDAnzqPNWdQLvGBpy",
  "key15": "2AavoBE2APgMJ32AzvGSZoyX9utZX5kA7wvhY1GntGgoCmzZfc1ZzJGnAkfWgsjyWY4b9dkDJwUGV8YeAgiXPf4j",
  "key16": "KJN11XjcWmn7DXvTAnbaCcjMrPBAbhXXCM7Zmrhy8kBw78cQogTEQeLjAwe5oJKJrezTBRKQmux74aZpa5rf3iX",
  "key17": "2FBh1jRtXVUxnxN9n4CneW3QBTyEu3HtzJ4nAboWKiPuWsokB7UnDqBkrMSGiaBtFuMXXotKBjYtnP3ihpuRpqnH",
  "key18": "4Q5FfSq841fYAzHA3bgxJ8E47UvCS4rmRZMUtctsGcnQr3ii1xxCEEUJg3GLViS1duXUmNEUfTD7tCmA1zK5oTzC",
  "key19": "5LfupwnJBT4wNemdxxt1eVAFjwV48NPUHsQRkED8VPKUR2EmPPmemU6MEacS154myp2mWRbVrbWctTLVE8K5jCyV",
  "key20": "641Dc9iTtXKQhBezyZ8UzP94Nwdptv8raEZ9nZqJ9AAzH29VUEzV9kKEZKVi31fQwRo19Qu6DDkvDdnkh6CaEnSU",
  "key21": "4mpHZv5nDecKcT3N3Ca4L8AvvYb6dMXLQ5NqrHqUe2HZDQdMNcYModp4vmJQs3oozhGb1goN2NgSfRKReht18Z3D",
  "key22": "37jYPEFrV12EjGkfH2afHrdU5EJa1miNFcsFd4qwZkEs5Ks4JaKFDw75P24ZRaCYkr71mFGPziZrK9cAUdpTWMEm",
  "key23": "3hCetusz7Ym8oW4AZYj34Yu9bqqPhRBV32xGLQF387miyWWitembbJsXUeNM7X96fsR8XG2ju8TteNwkqLU6uBPA",
  "key24": "49uRBtdW5FgY95VWAcjjzhTBpUbzTnT2b5EdBNPVpQi9C2jGvwEFdLPNpXbSBbS8orJWN8VR4NJiSqWGPLwcSxrj",
  "key25": "4HdeJo1PDvMeAQ3mcQHnpASVAnuyXzTGjr4hgQmXhiqsycDK21p1gnZ6vYpnpRvd5P9nzKZzqCkitro3CZm6JinE",
  "key26": "5kZyFSjG8vXSXAdgDN2AxjaSChssg8Deof3daDpnF1hpqB6uLFr8x2ufgH2Y9bGQRJrVVewpPc75pqVkS95XytBv",
  "key27": "4PQxkxGTKdK4yKrT2ng2Tm9YVcSs45ZEtnLfHkVeW1H6YxvPUPquHJ1fYZgHHHgzCMHPsU1gj3BjUP7SeXXhW2UM",
  "key28": "598fXVJFwFLkvhfX1e87oKuBYNQJ1Gwf4ZJyPWxmSNVyheW7BVJhUEARZFmY2jm4jqvsdeWRDxi38z3GLg4V8MtT",
  "key29": "71bVc2npruTovUH5jYp4xVkFDQcrXh8oP3T11eG5RsjVikjHTLsGatN2TapVgyQrLhNvrhRiYq8xBoKsWXC8gBj",
  "key30": "3LjqpC4pANk5MaLiicLa7164mpVSrdxb5AKyTP7EgaF712ByBrcPpEvEbfNpVbkbk8B7YL8KsNLD7HwGQwN2t9YJ",
  "key31": "2ou6fA4WDunGDUTJfgyqzxXQ1xGSY64R4poarz9wPGkKACgjujaFXKiMSn54HaBUawnRZbPtw8vjeyqCWSJKfXeS"
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
