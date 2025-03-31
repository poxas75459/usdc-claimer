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
    "2uAibWC4FSNjXLojwD3KNPTkJpcUQGnaRUe7onEDfWr2fqDLXwfWHZxgtDKTZgCvyHnmgua63fTDRvob3qhYVnqW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QpfQLkC1SSmaxP4DYgnKUSDzvehMiGmP4VgHzyW96tB4qxpM5hcMvhnPcNpDnaEvQ1jdwrDFZXU3qoUoyL2WhQR",
  "key1": "5T5AhtqSt3xG8BnYjuRHAvaThLsD584hcKwH8bhy76mNHKX7zast4e5SsassvW73Kw12bd1MmgndBjSBrM3tw4G3",
  "key2": "2TSGCWaTbergmNjVt2c8KuMVXosGNFsehW9eaJbCQSGnixCPhwRPHsvMWYYFKsY4X8CxT6Z32srMa11pJn8pfuzR",
  "key3": "4NCGrgPvTHGvR3HAVTCdPG7AGo79WULFqbnujLss55GMk5oNxL8wa9w229bzLhDXWATQaLFhiRvXQgirgCjWuq4w",
  "key4": "gkZLm9CPbgh8hN71EpvJ2P1rMjBhr8ercDfPjgyuqD5ARya3STfqfHKJY3QiHDyZHXho2sxg2DkPZBGxsD4YSmV",
  "key5": "2rLCo7ry9uQkHT4wRYnzu4NcLVu9MPgFUt6qzk2GNHTeUwWJFnC1sXqt9yVksvfrF6fmtzJhkFWgP7PqgKBomLih",
  "key6": "499xBHwVs4CxLAXYsXxnyKDgS5mCEZaLLsvWEwbPbTkgV3pc8syrx2okMC453jF9y7VKzensfLb5yF2U9oETogK6",
  "key7": "2D2dTL21jL7yUrmpdwTFBcgfSbNjfQDyCoFKYUbWHwj8ZqQEe6tKWFWBkgKSf9MM3Kfjha8iMbhDv5o4ZYhhMvtH",
  "key8": "Bw4oLPUpXm3J2q84mYMtNnL9FwWbmZfmZsk3UJFnhRwvaUQbeiUFiTbZJnv5B5cbp8bQGQF8pgZe1VXbMXbaPwZ",
  "key9": "Rgzh67VCnLPu3TNupDZ8L5nnP7BKPouP5n8NAiX3ai59zSDywrygaVgMFi81nyDYTj33BLeRKU3VmHtpBkNHGkL",
  "key10": "4mHCmp8we4PNyKKhNnVauwX4dYSTz69ndL1r1NtWGRW9WTUm8rmLBneMMpxKQ3qR79XByNhR4ki7AzcWR9quhU3P",
  "key11": "pSXGTXNkScTaGmjZuiBiswoN8aooC89Pwbd8pefMLkaBYDguJDWtEj5QsUaNsy25psqqMWZnaQ9MxDAymhXK8m6",
  "key12": "2fxHDbAyh3iS4SLnvFrtbR3LVVfasFmaxz26rdZDZUFTkwZsrothyfxWG1aje2KKS3kjN7svSqnpqz8bxCuUhTCX",
  "key13": "4mSQodoXwXUcPeGSougTFQbLVF341xfH29u2YdkP5tHSTn1euqmJNR6Bd6m5RFCUQp7JcLfuWnDq6HwU5AyZBZfj",
  "key14": "5YV6aFkz5so7F3vX6KaFaeLJT9kg8RquidqYNXSbkQoCp9quHAeCjBk9EL1uqjdtfzdmFEBuuD4xCJA1HmQWE5A5",
  "key15": "2CLh7iHB8uXxEXN1eeTcMhxj3x6t2Za7x199j9UYjnTscX5K9LxN7pu8mFsFeVN9PBNUKpKy2oRUp36DaRXWZvTx",
  "key16": "woGeWbjWdTpN33K5T2KWNrmsjBd1fc1CZNZcvAznfz5BaDu5zDg3QtSNaPo8sjXzbuW525y3cmwxfmqpD6mZ2oy",
  "key17": "3iSBWbG57zq7VL4tXjvizZnx4MzajeF8cxEYtTxvQiJjRNj3UaxcKNPf7GazZKGBLMqnfRvxRFLRzpam4JH3d21J",
  "key18": "59QAShjgwsKSchr6HGPqMNy3DYiU6xAoKtUKFTdfuyiVeoJeLeU7Ur5GMkwKo5KKwTDq3YukZQ82G9ybwfnM7z5N",
  "key19": "3p8edQkA4bZtx73tiGUJjmpYMHbrnnTcYRLFmawz7cYpA9xAiXxjGbwxxEgnEBmAH6tDNAtj8z54d5M7eMdHjPEu",
  "key20": "3TZrKHkoPA7C9C77y7yamoszXZ7aNotQdWijvhkdmdH6daPK5MfeGbgDMAQKNG5MwtTV5GFADeAa7j3jCakpYQKr",
  "key21": "38NGfyggi5Sdw6zNH8uZdYvi6cC8NWWXT3m5wmPtwpn2ZWhKEWg1EFPD4WVbgYCWQSh7QFryrLig5CCqFtYBZUcr",
  "key22": "5parnC2ctAozfjgd7QVaGHZmLbRJ8GM6VjqUaFds5fUNKEbGHax1iQy7HDjEC8FNDzpzxz6sbARVeKvBzPMB7kSj",
  "key23": "4UkmPuuhG2YWQK9n8B3e6o2QwX9ECyU7V7bPhpBiPELQB1LP7HaXabei3ZDLFyaMPgBiVwbwyZphnY3Gj9paFY4n",
  "key24": "3tUz8ZTShpQpN1vdVSYGdMgiUUoZvUnW3uFkoLVywPTAihAzRxPHUUsVnTzKTHHRtWZVnFndemwvxxRhMpp9NMq4",
  "key25": "2zJji4QRJiB8RMych9FQTL849LTGrGqxVyxWHoicwdVRu9MRNwCRd84pG9BKunUmRi8dbcppoMfBhnQELQnmAQ6J",
  "key26": "4eDk3mjRRnHr8NDZaUnkUZdQU14T1WXNR99kwjFjXRihEJa3LgD19rcmguH5UbZskhqJeraVbgu1njF4AZEevpGH",
  "key27": "67TbzRDqJofg355QLEHHbDeUoqutVrGrqHVZahVwpzNvugCvdQmf86afRmRmyixdeRovNerVErYUUawTeVDkP6Tt",
  "key28": "33uQGp6KFrEfDzYjm5RET6t4YD9puN9qAa6NxP7LGKtWVwzh8JZZxWpk4cNmXXmi4QRcCkQo4683aSJNmReh9PHi",
  "key29": "DUrcphCmWTMHdDMP8XawCVTViZNkbhQYgpshotxWYFqtLEBMq6dgEgUmqLHyxsZxJ9p5Nh8rcgduJ6sntQNr1Y3",
  "key30": "5g74EyYqAmZVdA5oa8C5rCycDCSPXtB9KXgpGRaeikkGXtsMzT61p7CMp8iwMQvwhu3PL7TMJQSr4TSinpRdP3Ve",
  "key31": "5Jj1tUdBiGYuJzHJz9jw6KUyj5qAqzgp6aQaaRp3nLKGdLXLYLg9hfDEVLTdeaywHRX1AyVw6eRWn5jL5cDPDdeQ",
  "key32": "2yYYBwuAqVno6cdicspu5wfPot4xLEspHkyMbuntVHV9h8ESEEWawmj7ZzuXNLzFLZAgEW6pBgciP3j6jabj3p1Q",
  "key33": "4jau1YEXx6Yu3L3wi8mduQTEHVsCVajwx4tKTTUqGt1SZeTdR1VZAYUcvaGmNzBv339XvuSsUz2WyT8MttWdhrBc",
  "key34": "2A7L4AS14mbjNBSzZtnoFVVYczVgsULRbbqQUab3L4d4hcYUcEZ57nFiUunnGDhdBtt39g5iVpK7FrzJNzJun3sY",
  "key35": "2SLJ46fRUQxH3pEgRWnsdAaiwYVQeudDu2LqpPJZ6NQcyHowg5qLHEF7ZrpqyXBSgGgWMKgMvvUYFiz3EFKVD69p"
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
