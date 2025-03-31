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
    "3biGWvjxh2vUpxMrf1Y4oaTBd1CW2VkMaPu7qQ9XfUyPoDAjwJoGr9Hx3Rnae4Ci72Ubz46dsMqMP2CfJVXX9gdz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3A276aWRzfqfEYHpYpKVrJsdUCRD1dZc7H6YrLEiGEzy7LPFTyUMQWowpcJWJvKpKRaxy8is9FbX4Wf6FEg4SLwN",
  "key1": "HCmKSpRuozSYus78SgpiwB9178gGzEZK4BmGgaFXz9CSaqoQaxLBp5gY6a9Vi2bfPEaP5fZLuu5uUUvopqrmHur",
  "key2": "3noYgtapWimzxYtqEhkrQquzWHRzv9V3e1YcPp3efsRZSHyqWzTMLuDa3L9zkNvf6HQtMVy2ad4RWiE4tGomgMNY",
  "key3": "5jtDfKjvZMwCpUsK68pWXrwBCLhWALDKoq2eAz8o1QutLDwDqu3PZvNRqQ7tuKPS4LMUHzW32eP3reL1T4N8mptk",
  "key4": "512p6wX6rE1Eg979YgYXg5DUbFGhvPtnosC85bm7AAsRp6UTPPVgNCJmzJXMsxpziygJ8zZmrXL11zqfG3nAUnTb",
  "key5": "3PSkeESeX56BnLkSkEPJyBUNYnV3bkhsvCAQG1reSCE8cxCqW1cJUVLpAXehPedRdfNPkG4ssFD34w9ELeXnvwkD",
  "key6": "5yB89uCg5Z7ZTxoeHwBUr4s1k4SCfv2JG4urE12z6SWZk6Fmt3pK8tDn9QGkZhpMz9nabMsWDtLUUjFrK8YBgVqH",
  "key7": "DWV6k5XTANjq1QoRKHq6Ki8nPzVLEfGZd5YehpHDZdDYSMERMzswJbo7QpG5r1q3c16EJDAae3xRSJtGmCZuw4V",
  "key8": "3N21xGqbdggiNHsCAaks2q22FZ9BTghirWTeHNLHRRVY2BUhb3J2PK2zy9ypQv4wzpQ4ETpprgLK8EQeA7w2TbTe",
  "key9": "2hXrNemnnNL2XWtvFUJsNzRkqgSGhjzcAPJxRrZy2NDkJUeModP5aRBeAEYjPYYjULSbGLhwfzxFrx2MxR6kW5vL",
  "key10": "4snAHASwoWD3vwaKABhac3tdfBNvP7smSfE58Md7mRn6LyaiGCBwe9sJwbu8YxN13mD9V8zRcvcrUk8a3H2xarw9",
  "key11": "5NgwhdcVtLmX47M1ZfamotCb5yP1v41pUeNCuXdUnAvz4DZTRe466eNftLJMvEwVvzZvxtQX2qgTVpFxhU2Y5uxP",
  "key12": "2UvKgbz2suxp3RzUVKrgeCyMdmTNf27JCqjn2iaz7dzCfspFgmS1u2RQjNbcUf16BTc5x7Qh1sYRHwQHNXZ5c7tZ",
  "key13": "RbkfL9Cn5jCrS3PTNTDJsjjc5JVCdwxtrtXgaQx9M1qsK1uJBSj8KMKhMCeoGnGhHMg6y9z7u2HidEFFNsHWPa9",
  "key14": "5rKQeQEJfc87eiYgGy6x4NB14KGLbV7oQRsh5kwcWLznHkuNbr8HrKwunTtbpijJHqg2eVyDzz1d9EF6NBLcj2To",
  "key15": "5zq1XanGRedbfkoQRSk6v4s5ctfZzqZR6NkYxGyDsGEhPSDsEcf8ioaqrb7v7kk3QtmjeVWFnHn1dQCtjvAvWyU8",
  "key16": "3ohbm9NDx8eMA77PQwA6Qn7CTEUqZMzGwr2yNsPwnd16VrydT3y6NC48JsZXZdkV7UWg9ZpxkMTAzpLVVY2UqoQb",
  "key17": "2VQqnX1L4x78Cz6ZDw6gzkcZ4N42M8wxYdD4aCuKRj1Hxtcgkgk6qvJB3RQJYd6C42bX2iojqdyDtLT8ySDp931",
  "key18": "4Dh2cVvUZPVNBasHH2agvjhpsV8U7QUnTxedwe7DPcQXD5UrHANVdm3r5X949sw4WjtAyz7466jej7JJwApw9K7K",
  "key19": "49qRGNvFVdaNGaa1PsjWkfP2wXTDXhipjnHjJeis8XbV4Va4TT3gbz6nZ7iD5WeGD6o1Lv4FS6Sqf5khRQ1WTi7q",
  "key20": "2C5oQSS4s1kynC8Fw29CwzpNf4LGEim7ortM2PpSzCLqCKTqwnnQH1gnDcJ8wk5y2Ht42GABMddQnbzEiiHjAU6R",
  "key21": "5dtWYyhHqeGYDugLKcMPvH9piGTU5GRAEsWfz4HxKq3xF7NKZ2HdESjoQFFLcs7Goj1impJcmgXRQ6njyUtQcQNS",
  "key22": "3sHE8nbyqDZxU5ufeL1BLrjP41Zj9WuoyTb8Wzqc1kkdH52VVrtD7BmCmt3jxytonhH95Dmj2XK1JgsihpKhkAow",
  "key23": "3Sh2QJvjLTB1nkLhnwPsZ5MzdP9Ry5ftCbMyXZp1jMW1EZUshs7KP9qxVvb3DpK4pg9mD66GdELXr7xzB2Ayev5f",
  "key24": "442z5nG3UZzhinJ3Y7oSfUs561sKXNzwWkSvSr4dhir5wvR4Ma5XKwDmSNT7xqxjKgnZ8XceYf27DUEowYmbG246",
  "key25": "nbMf2wXxYPqcxHxsZLDzdR6ezfM9Y37ugK32hJGqRoHD5phuhKWoSuQRwQwTXXzCD8g395BU8MzNGu6DinT7oes",
  "key26": "57Mg5ao9z1m8M87z71eyGD6Jd9tvurinaH2QvCNK36rM9wc7EhCjAjzw3tVd97isyaJjLH4VvubpUQcWRQwoVp9Z",
  "key27": "vrZXNX5ZQWDfufeimDtoicxxrGRdKaKgZo2REXJqZhNdf2SFr1pNgAqFsjZqHZQzxeFEA85wqWkUpzZ7ToREdCF"
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
