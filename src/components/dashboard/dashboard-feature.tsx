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
    "2K8xA2szpR7LaxED9rNgtxH5JQauK2tNwdCuAyKT7H2wzcu24kM6ufdt5ttdr1RRbS5q5yxaAR7VDdAu8kVDg3SY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SahJgbRdDhrM7rwCWwe4nGFLbq2bCuD1mv3D6jzdiiu5wn3WGYPAvHjPFn5G8nkDKbLarNDqVzkWRaWRwB1D5GX",
  "key1": "7oSxL5RojzPBcH2XaeyrHyGraBJ35wZof6bBYG5pdQxqHb8euqemo9FkUZ8oXMcxhJGK577tp3rCeXiFiPttBZ6",
  "key2": "51htXaik6nXoErp9hQavteeZ5pkpPv9dz4z89ANg6jZsvjrqCn33dQCqce2o1kodVw3f5YxEvaDZDoFpWPjaMWsg",
  "key3": "4kMFvJwEAcJ6XLV1xsTbvbdq1sEK17qLYMWzLirV3Rvvgm3v9rLt588PTkyqeuqoHdBRQdx4iPLpxmCCoCd2UZhs",
  "key4": "3NrRD8ibkH9kof5xsHrkeNAM7pgxhKFho37Hn1TjZu6MYe5mgAkT8tsZ7QDsFd4rWqwkf77WwibcWDeeiz6VvzVm",
  "key5": "5Gmya1gvhspQ86p99Brep5wB4erNFDounR2Fn5kRjJzWReAiUap6oejgxh76JroqnNd7FbhYSrSN9s5rPyR7GvKZ",
  "key6": "2D9jtDKghhFaF2482L5wVG5DUWjBfwcuPUvvgvJB2uqNkWSMaqAQV2QbqjK5E7atn7CLPEgJaZp7xisGtxr9Poat",
  "key7": "5nMeHXBga4hM1ajWPFMQLFzmNgU4ZWbyabnPRJmendHNnbGTxqcn96ZbJSTr7gWXwsaseaJjAbAjAMK8WRpMEzjc",
  "key8": "2NbJdsmPZ9rTz7ubC1aUkBgMQ5uV6KpKaaj7UGCPsaFk5dMSwgrxNkdxsJ91AqrZzpNk9jEfCkxTiNj7FmyFQDjD",
  "key9": "4GppcJxymxUh3SoheqtedVqjXuyCPK6hWoU57jqHRc7fJYwtvDB69rAzoqf6qxzWEtNkGwryizZe9eV58Z1uNd3Q",
  "key10": "2n2oivZWHaPohAR7Vnt8t6F4P1Z5MQfyWt7a26VWGdLtgbPEN6Y4urKANwxnfHBiVHqrR3V8osiBr5Vx1tdTXoK6",
  "key11": "5FybR7961vVd94rH4FBbKq9KtBhgEeh8Pp9Tsrfc4TYEGQzZ5CXCHPoNCt6Q7H81qv7gey2UbUQPz8JBP6tYDew6",
  "key12": "5WRi5W7uFyRWoLJZdqV8y66Pn3YRHWeyj1tDGFHxHRiPaSQEFm7uRaPjwFrsrLytD3Jin4JjzxinLgQfe7gx2soo",
  "key13": "5vRdzF9311av7U1EXrmmrCNzpcK9dxQfyzeV62QN4wD6XZ9qphXCJv8adZTXNQYEazbGWK8EDQexrqdxb18SXWix",
  "key14": "27mZjA193enbzQ34WZnN6V29TE8Cs2WijFw79Jfj7PqTx1JmypvDL1CUYcguKLxw1MkNGnrPXuEHmX4wuRReBXRB",
  "key15": "2PzY3Az6AZX2DFgDMKCLZCvzJsaL2pmtPoVpz2wC9LhWhQMHTv68Bc6XFMHSyviF9xeN6CK6Z2Z9xUauGhyueSYN",
  "key16": "5qxhbnknKUH2NhEVqfcvbv8Lkp64gW7yzagAp2KbjoGQ3eAYuq1eSaVuYdmnMJUSnbWbJaFWq8xsxexxR4sQw2kY",
  "key17": "2wx4STc1ZgsK2fAx6siZhXZpX9h4LKLs8Sru5Ckm8gKPNBVHQ7FUV4AcpH4bZWBi1sAThhVDWRwED1nSqU5LHDxB",
  "key18": "2dMUcivyfYAGyGLFv3Z49Gjsw2Gkr9jdiRgxF8N2BULLgbscN1EyTCxk1LyoVHfYDSjD2jdpq98CS2RKiYVvHxK7",
  "key19": "3Akt6sFCag5H4Z7Qd8kFutz7iapY6UkXEVPL3jXua64gKVnSv9zCbrN5m67B9oKfBZPTf2xSKdmKwNVaA14cZT2C",
  "key20": "2XRXGpi2gyi2k5KwBVBbSchw9r8DW4UwMAre8rNEr6MuVwkPRJ9qoYWWUsmVv5nw5NfFhvRSpbgBLM7rshqTErhW",
  "key21": "UbNuQsprpBn6V6qp4kM1apdwq95JGWqqSJgJV6PpUVsrZD9yp1ujDKf65JQaPjkcddANF1pUu25QTMNgJWbUnjL",
  "key22": "3GfLNBLiMABFdbKBLYdXLQcuT9c83JsFAzSg2NPSqbx3GQaAUUDun2YC2LrN9mYL1M1SkhvFFHd2v6dTWv6PJCx9",
  "key23": "323L4vRwLfCYBGk9Qz8p96yeL6Yd787Y9zFMyMKMB3hYh4AwTZFJTz9QNGHo4vwaTcr6Ef2q8ffekHofEmBePuWg",
  "key24": "3wYDLidcMnunRP5HhUYTDkd2ULzC7SbLJpFJNkQyUMni9v7vax9TwErdYn6hBQQv8YHegBvbYEwzsyyfwR1zd1iM",
  "key25": "cQLRG6Bt7zGZvAGtSrAGpytFDzNcMdw4oHvZVscAAKFbuPoFXd2B9g66No9AQQfxpobFpJbKH9SW83tVSXtohWv",
  "key26": "2ED2KX33iFkmfN8PVmtGPqNxNWDcbiT7qw5LvH1866GYYaS831EUfSeeY3TwexPwqeChsD8PLCY89uzsG5RRm3eM",
  "key27": "4fLrrBp1hgZA5BeDvSoZY5cRfBSodVVGKeopBSuNh81Zj7X13TeepGKMwwruFWqwZp18PWPy2LzrRePH5fhRUYhP",
  "key28": "4xv99RXSEMnV9enCzkBGmbTQ2HsWyvESPBbjMDSUNrw6gLuhkhVjUTBDpEa4azczray9z4evNebGXsVNZYw8XheE",
  "key29": "BgtMfSReYU6TanVW7HVtc5MGqAwk8TfeENT9FCxQxbX4bKEhZesdBaadcF3UiMvMCv6Dd23CM8NPRuM9EQpZn8j",
  "key30": "6mpQUEWx1gRAa96qMWhrs8LfzasQF1nao5dxdZZnBpAHVu7qTZqXqzPWLRr2W3W9dj8BvB5EMPyNwRb6tw3Rfyo",
  "key31": "TbjHAbdgX2V5rk6AQHTnbu9zvZQpz48r9SSiWuKEtYFaCdV3EFXStdq5bs39CfBR6mtNcYS6NxJfgTHWqFif3G6",
  "key32": "3b83PEkbeWrifP6St3Y62w5pVJmRyfnSeWJMUY2u5GuYjvDWpcjU9yZfLKDm6UrtYebSaZbw9ora9XnsUkRQXk68",
  "key33": "5VEvj5sPUZVKQiq5Uz7uHBxigetWSjx4v87FwFWcWSR866yX2ispk2irsBQttSXiwzBdogAWnq6xpr4Jz1h2zYN4",
  "key34": "2ZZW3WySSMyczhURN1gHdGRwdm9hh6zRidZhaCCudTsdZ7C8co5v7TRgVxs5D3CnghqSt8damPFnPNeriEKDJDTm",
  "key35": "3Fb8ymMxA3sYupHEvhBmJCuXKmQB4q6PaZgKGjcJf3N44hK3Zr1v4cR7XXXk3k45bViYm3nrWj8DMUqKZxCsXdvf",
  "key36": "49fdovMaB33JHDbvArgzXDo7LTxYjFCpgKEhtDxKxmmWyGhkkL2W8wnw2qu2P56y6ueVUuc3Yy5mBsgzZPXSpE1K",
  "key37": "5vTwXexAw3u5tny8K2ftCh1cyCtdkJGPpPciYMMMAfck2hLP4yUHMJFLVp7pQGXac4E5uNjyEXrFeDD29m5MkaRV",
  "key38": "5kutVJEZqF69WizjJn6umNtWbDcurhEceyA2QtaRViLyj7WKiBMaLBNPg22HbvhVRFvDPXMjgMMt882aG7T8RprC"
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
