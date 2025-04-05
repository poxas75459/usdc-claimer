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
    "35TW1zYWpTC3UHEMhTtETG2XAcUZh4EFVE85Ek3esgRwU8mmZLHMGjw76YwKy9WCUvf7AzSfutgTDMXb3vAzqwXR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wAfXBmTfHA5iZ5D3anNdJoca55kPiNiFDUkiGcBx3TMLSzBa8dAHuNWtQKv3Jw7bfc2WcBdwJf3nJKzboBYZz4Q",
  "key1": "55k4XRAYqo6pPuEYCKhh2i19gCeYuniecoo1wpoyczjZZ5Uhq8QzRi42yZDwR2qWWoxFh9ByDZApAuw3c25yf3wo",
  "key2": "3cCCwzhbXyowEDBFCJQAMA9wEjzXS1BaWW1gd8jwGu9sWMRyo6SWVRwNXJ2dVCt7LeaEyoFrgn5LSk82kT3fBgGz",
  "key3": "2gKk1bwRqHsK1TdnYS1eWbGu814n9gY6BT77PQNbyj6fWdhWft2z3332rEEuvpgG4ckYpUJ6JpyHnvMRDis8SYSS",
  "key4": "2SqPtDNYiuiftsExS5WXrSHkJ93ASrLhdWcNhTqZ1Skm4mCTRo76qZ5xTcnibJvCn4zAu6hWpjz7oBLEvZho3zFM",
  "key5": "2hRMWS681TruLw1hpLmuczJJpznVeE7KvXndjjfNzpaZm6R1paFsMdwsuQFCzS4S1965kjjf8tebc26z3hPvD1Ea",
  "key6": "3CgbDAgCuVP1p6GjU8xTwGZ8vWRwFvrd8UPf5VNA9Nj6irVZYd6rFtdWJSWuAkMVYTLdyWQEvvraCGHVRPkH6uPg",
  "key7": "2tqRwyrFDday5VY2EXa2n6SCtfE8urTWLAXg7HAXhx6Dmz1WxQR5Zz8kh6JnxQvTeUA649WNNrMSXmnoWoQLmYxu",
  "key8": "3YsNNTZbxYSousXAWRJEmWBsBdJuPrBfFGCyLmD1E4xKrNQrrf9W3S9tEGmr9ByCT2wS9t1YA4KPuiBFEmwx1GU9",
  "key9": "2W6E8pkHCeE6p46HvYzysx2smWdfzXWPiZNLLBYEjwJU4XZtfQWuivCa145Jzfxao3ntAdoJxW6RUxVxFJFFjVC6",
  "key10": "uxNGFMc6TSGhrvdeWPJkeTafh6oDPodoPwHuixtPXWeo15wZP6t1MMyQzSUh5XjqwwUoe9HkJbBwHqgNvTALaXc",
  "key11": "2NUZ1pNtSBxftC7fCzHARQE6x2CC9tMzZaMVrZv13a5ynYreegyonuUHfNrPoTXpLmnMphzeXqLaEWKA2XfLjsvg",
  "key12": "3omwDqM645RxdyLQQK2bqcc4yW8uWNCzDcQVNXQUZ8HTgrrT6csyQH8NgcACi7Xbyti3SLxvkjQyL42qHGUrkfHv",
  "key13": "3XziGXKnJhQFVcYSjEbZAkmQrjd6kvpt6RkaV7bPvFPgqbJVXqAhEgmGEMgh7vweWByF3PvRUoQWaFq1YssnsAuL",
  "key14": "28PVweJhqJdA5XDJowYM3oUdniHa7sA357QB2Mfe9pVyyPy8uxbf6qPGiQG3ycVpKvueD1gNMqiABzWEaxcZ86x2",
  "key15": "3D3RhtuVJAv8MFsXuRZ3KRqVDMUDjwcnLSrR4CKKbHLSf2g3pb1k7zzuJPB2Hr89EhtMJvB4BNnWWLzHdoF7JjoP",
  "key16": "3Ke6EnQCuGjDwHQk6JboPwaE5hNsafXbc4uBzQDadPWdH17paFJBMMeYCMcMMcLdHNi8sPzrSM246SwHbX8kZUUq",
  "key17": "3WYYYr8nM5kMTY1AUd7mA8icHpkwfgjPEBC76AmrDFwvbdTZRJ22pm2uT467oLcm3NMg1c2TTcRYG3LMTa5H95hU",
  "key18": "36eHH5vZVH5XpS87utFhhViq6aXYoEF8k4hC45XSNsson9NyNyiBaEvWRXUEhBQJrb9tRW9TnwQYLtLUHmq1iQkT",
  "key19": "weiDE2G2gXVmJ6UaD8h19igMMnWtohQUPWQugFkMwCso3VWWF6nAfdiwN4SyMLkuH2toWfrdAJaQhKQ6pNUudQr",
  "key20": "4CU1Kj1WVwrCapg78yBN5W9decYAfQMrPR6xLsghYdrPzfQ2yKPJqcqDFigv48oziffw6sbWBvUCGokAQpoej3eS",
  "key21": "4mvqLqefoMC1pF2cZdxr7GyRGvQHrVwYGwAD6BXbahiUwWBpHrHLq4ioknuQQuQDe1Gp1kvWpfsGonDaovcrWNNV",
  "key22": "35Zuytz2WKcJcWydZZYm5NEzaCgkUVGT7kNRC7qXUC8weBL5ntaLmgSNJUbwR8ie39ALfVATGWLyBLta7pDx8ZKe",
  "key23": "2dXwMVg4jXme7sPqCDk1SMcvqrwjr7kNJxjg78U46uDnzqbw8ZUwBYy7TFzMKYodh1oQH8QaYoCWkuS5juNjkaUg",
  "key24": "2C4cCbtzLXfqg9TqBr3kB15wNyseNixdfyxCvh59vR1tEN3RHwjXQfcvAB6tLite4sA86gHkBUYbBiVoXLjYbRyt",
  "key25": "4yD443tHg9UvVxrA9eM9RALEHiJCe5q5s8ut7Mw82sCmH3qzPPYxHXCQYpqoY8Zue5uP4ys6jRE7X2pQ3ySTCdGL",
  "key26": "2Va7jjBUx6bsQBMgHB1Zpj1KKzkiPh2dHQz8K4pAnv15TrMpbLhx7WgjfxhwmtVXbjYaBhmoPd7RUYDRvNx5JYPj",
  "key27": "B8gN6rCDS3vg1w1p3uiUAo6CAzuKoY299g2Crc1wP6AU3NMCGZh1CmFYMYmHqbfgRhwCtVTzuk7MAu7UuesNLw7",
  "key28": "584NuqCTsaA7hTfzCLpwvEHU2PWERYyzgR8p6ovoNevnyYacUk8mQqKudx5gFSBwtNhYEkA2jk5k6kQHFVK2nAHY",
  "key29": "aSJ27UCe7FGA6rpFUzLHfJ2a5nb6uzgopoKX8fzf2xonXAnos6vhvYRzgVZMsd3LqSrHbpH6s6pK9oQwVw2vWVF"
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
