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
    "3uVNjRpqdFAEXV22UXnmCDyo6RFjgfRvtdwNRxRLatzoRhRs7B6nvgjjrv7kcKpsvNTTayM6ueENCggTcWcFRT1B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2y6Ao97EPAfrRUHGrT5gFy1jXzfm49y7sLgRFYgaoQLfakqJTusLwcq4GYDxhj5VStM7tDU9anggVdp3AV31LWwa",
  "key1": "4Z2U9LAJzEpdPjoHaTXmhuyXaNYxGN6s3aw8MHqJY7mUSrtd58VAfT4iZN5uUVPQC2DLjvvtJ5EM1MMAHhHawuAn",
  "key2": "WCAzsYA4SUGUmq6cgDYYcMdtLg3b2ZPrmYRGGcCKdrqRLaCQCGqT7wqEn2abFp69s6SZpSxwUFjn3u3FyTi5xrN",
  "key3": "4DBwzAbz3r3J9ZjjudZtx7rfoSGgLRrn2nZL5b5vbm8R7UyAQnYSRBx34QsNc1gZRt7enKKrY1M2vA5PV1anq6ry",
  "key4": "b2vhEuVHh1sq1j4wW585jZ3Zve9zdsQJbJjuDDF2jnsjdMgNVzcZyUYEcA12MYoXTHxr64wvSCisykoLGr48xoJ",
  "key5": "s4mHGdzMcSSfvhzFnhpeDwkUZCgrmCF4aZyAMJQxTGEP5JvHka7mCtbVnaSd9BUjCa7Zug5hyZyh2iXrYeCoBTy",
  "key6": "4bbVDPiJBbMK7kXPTg1UzwH8nXxVN3pKx1fE4bpm4upzTjbTBL6zgyCru7Kb4WRDhQtXw6rXQttXd6jj4vt2KmMp",
  "key7": "5dRawEkvhQoyZxcDpto3a6qToz5FN4L4NzevPB49oWwfBkjHAYmpkzzgwA4FfXHNfYMyPftuhkrqB96Med5NuXxn",
  "key8": "33hjBGWdRbLWBACaVVknFsTYxerujcfTp7FxTnWmxua95VTpHBW4GYMsvRBWxaSyog1Sj32Fsc4ES9rhe4xjXaRu",
  "key9": "5Ho1dHhL1dE4kizz31UTfBZjY7LfcGdnN2JjZfzL21S9qVaPvaroaVxZ8LZn7SQbYcTkYM7nRTqQbsuuG17Q9UXN",
  "key10": "5WTe5cmJrvUaKbmZuGvhGEcjH94goDX25FPsHZUXfkS2rKeTVndrPCQ7HnKTqXYEAfvN4SDLWFpWYmHxBAi1dFbm",
  "key11": "5hQ3mSEHwHqfSTXW5BZfM6t9JrWHs5a7eVGQsR25a3k3x6quyQhL16m63SV2nofurWN8QUF9R2uhWf5HSBgnJTBc",
  "key12": "2WFgefciAPwCcyBNwBb38eoYwT4Njt1D2iny4ofMqWXE4tLzEJYaNyxtYnUey5KVESFerWL2CZU9bh4Pr43tXSsA",
  "key13": "iwbgc8XEzjz7TNfTp7VK3XLb7xaDFLRG3nHv8NWWmQWQ11Cspf5dkte1ja71hqDtT5xHDum18tgXgGef8Dyot69",
  "key14": "29jKWGfqWqbfj7v49ckLTJtL91PVYpwboqoh5ArUFJadvQ1waeSD89bDqxunu94FE273NWk4Mvxm3jY4AQK6Rp8x",
  "key15": "24gernqhgV1yTNEkU148RcKx3cbFjziEgijaUiE96co1KkxXjyBD42Zp8qMaAJpcUVwNApTwDFBBnj2uTMD6Jm2u",
  "key16": "2VFYadd4Y3m3zeFNk3yzMFsq32H7qLqiEuS7Sq5souSVRcN8xNWenkKPEvJPyCRFBwNddpHwQbhWp9tsTFo5MMf8",
  "key17": "A5NF1r68q1SqNNM5FbgCRqxhGChVav9vwJndfoa2usTapPbBZP86UFdFcyNEGcgkQN6qWER2MY2D29GD1yaGksh",
  "key18": "3v3B38FqDcd3zomS41jLqovHZsDgz6v5jMvstwH3y3AWN2Yx7EHneUAqVZ93eqsmbiCrPNs3xv4CNU5w7Uy7bzjm",
  "key19": "3QqiD2i5vNdhtCNGKWELYY5PeCuvQb5EENNc9D7jbQFquP4AFF6DPid8Ug2dDuTC7Adhi3VGKEZnEW1JM8t1dEUc",
  "key20": "2oHnb1WTbziZFyHDhikzwKMnwv4LEbCRdxpvy6Nz3urPBcmpdsBAWvWEnAYNM7Eu4sPkvCZve8D5cRush7DskK2W",
  "key21": "2tPAg136snBc3giDC1DxkZd125W2zbpog4pa2VHBRrDtSmFzUQk6XffG1GvagG1S1xnB7CUY3cB2jm6eL7NxcUvp",
  "key22": "2cmvTh2jAXFoVudbzfmLXWrzUxhJVGGd6wiPSPEeJ7WQg9x2buG3KokaHZQ4QcZt25qs1NpzE3kwFiV6zPwCjVTR",
  "key23": "4fGEj5sXeoX8CZJ4kjuAhknLdxET2okydyMsSNd7TaSE1o52tfiri5pM2gYfsNyZewuJLb1FGXb8aZheUHuuqtHM",
  "key24": "3RrwJbMTFxVKXhuZogjyYFZFtaTHNYAMiJrpFTFce4RWiourXKYoBpXTDFnXd8DL6sAFsW188eeCUkfqHNSk7s5L",
  "key25": "39VmDJHSzEvxGkXjtRTXJUyc8rUrvudJMSWFtw1HxHAHKYgyzEReiZUjmQ5hd9m5wmjFEJQzbHxWLRWk9sbtPedw",
  "key26": "2EW4mbULo9dgPyxGZ6xnn6XUH2KDzxY6VDzNxKmymD1AE1FxuDRtsHmiwVWtaCXSAdqdEjHXB92XyoMk5zeMuenY",
  "key27": "58P55YTey6QwEKfLi5XxjCtLJ2y1qPCkAcWnmYh3PJdR2PA7Eww6gtQGVSi2wdrnDpPTBkmJLTHB4dqcftNiEUMC",
  "key28": "2a8hBWCH4AAJSbeDbeuLjnaDNAPBvXB7DpEY7GK81cyvD62RGx8xgX4n7cUBYghvRnYb1556Az5DJ25rYPL3oVdJ",
  "key29": "ki9dM4Ye1hPfk8g46hteTRaSKz65r1JYs6QgZK2f9xK2ntL6XWyGYJYZJdYR1fdzMzaeme4oemEWJquncEURu9m",
  "key30": "4FkMrZNkfihEzojQjAet5swTV1KBzpJdRQdVHTt3F96VG7qYwUHig6vypGrdmxuMb8FuLXaeLMWFdKi3d5WQnmKr",
  "key31": "5PJi8yMQqP4jF7jQ7sQW1TLE2giHriA1iULeSTJ3Xzby3QujkKPBDW1HwWLq7Cqi3KynEwVzuPrbAEZWCpDetDGk",
  "key32": "3VxWymJRrEufU4d6ZHyhSpFZ9wtTU9YqaA2wY6vUys2VoMg7jQ48uGQrqxsKCHAroPjC1topUETZJoCeMpdTjsNN"
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
