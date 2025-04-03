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
    "4ZYCifVU7TCEbunDKeUaU1jrQKZDSVVS8nN33Q2711ScrnBsaYWRVFHtrxhh57yWsg7yw28KMGb8BzRJtpfTJYnf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wYhgNSuof84hsj2XhgJEn9nu8uvejCKszfTB897kcEZWbHjawVV7qkBWzwUWLWi6dDiob2pZJHsHuKTk7xuFoxL",
  "key1": "25qqbeNBkCgbRGLkgeDUZiD2Na9no1LhnbJHN1rZ7hhjV6wRyAS4RKp9CGXY4Dsz2AuNxQtoEqLyaPYKjnXtgMag",
  "key2": "KRE5jP3Z5oyy2jmdzanzAbRo7vg9d4CmgvLm1kTbScx5z8xVWzvXbhiD5jWP6iegPp5gHa6iDRAf3o4RuY6xSeQ",
  "key3": "n3biWdo36YFfngvXFkSsvciat3Qw7AKxq6CJePX9PXvRQjaZ5kP8N5mUQCghes4ZJKp4TPpGTcwbbsHLpxmpc1a",
  "key4": "gfx6GpfqZMv15JSxgQhw2QZLy5uvGzsvxjHjpAnxJnCMLswx5pJfSpVfx1k4BvfqUTaCWYNUuRw1LoZXN4PLTMK",
  "key5": "39b1x4gHbLgjJ8buVc1TBJEFPFLDjcAfUqnoB93CeRJMz39f4wBEsh2tc1ZNJEuk14jMHCbgnyADq1uijYRUw8QU",
  "key6": "2uY8jNayAJTLDvQosemeR2hmCTagYetvyh8LRfzWh88sdkKUTh6Mv7oaYkzmcbEXvpnaUbX5TCXZvjEBdM7Q73p1",
  "key7": "5AqLqySMqQEHJYSR4iRUDvb132Ex4HjBkrMYjst6BzUYjBtakgy6xDGhEMpctkWQAdCashAS5yzQUDCCjYGmqW9G",
  "key8": "2yN4T9C5ptoWmSxo4abzZgZ6ShxvvtGex4JxhmCgu9axvZZ2VVD5phK13rvnhpj7d9Ug8Ay39XtBYnPC1uFcUETZ",
  "key9": "2CvJiHKVdeFNQTJSsFNYgKeC4ZeeZ95T7LhdWTCzX6NvV7PM3yjJ7Tmb6oRhP2w2CC2JjRR4JGCX2CMT2Gi1JHzX",
  "key10": "3Vbfc9f1UeVZg5BF3FQMEazbq9po4qCL3mouwuq8mQ4pVrfKBTguFhcRsuzErjp8P4criSNB6e2nyMS9k7DUt9pZ",
  "key11": "3j5D8rNce1FGnv3dCz29KEXASMdUtJK3Cj2XsB2c3Z77uczCD9XUnWDRamVbkKVbC6dSxxcHYq71hm5UNxgj677d",
  "key12": "66ydZJBYxhM5deRh39zqPWq1mGoxTMsARNcxyt6Hrwftu6pZDX4JiP4kigJDG7SQuXYbWspnCWw3V1Pch4Fkcjyu",
  "key13": "4MTuprGJ184BmqVYyCuWyazAMGzgL4uxEE8THvSdGGymGdLaSqRgzhDEcqNf7sHSozehDEkdysXNop8y6bjwmYKs",
  "key14": "4a9fX6dVSpYeGtzjJPUeyXG5nLx1bk29HQkpPt82F6m4thquRhzDqj92xjsfAoBEVstpCPubgrp7McSg1Z5rQX2F",
  "key15": "4mnGYdmwPsD4YfkciPAnT5WZNyM8DkYdpiqeprnjfvgfMoSJRoJmunN1oetqHiLdVVYfwWmiXNG2jNN9P855JvYp",
  "key16": "525bYJgtGLYqCdXsJXkCf4cKP2pDScmrwewLcBwWvPLnk6Fzu2vtkeL69qCwpdTqyGuDhVJbWGmsjLQpycmj7Jq9",
  "key17": "52ZKy8mhUTbHVqeYHz1u7oZ7oH87rZj7R31ZKAitApNEiPnRVZVeJAxQfanQ1tynD4p8g249BpFTZRdv2PN7Vje1",
  "key18": "5xz89zrNHYr6HLxg9yB91hveJabQ5P8Lah5X4hNYcVqqWwhwc6tJBS3Z4Lk27HrbQcAsjA8M6ixYuFF7tdCMT3kk",
  "key19": "3XxMzQxP9XqHTtLUy9UFYCy4qGonCWyGxQV9PL8MmcFaWrserSux6QXnUa7v3He7AsreSacqP2ZcVirvQJi9kW5z",
  "key20": "4MEyZcWqcXwcr4g1cuQhaYLm9SdrGUEuNmzYT5p8c1X9Cjq1df2bzCeAbFgKaX26x2vpHt4gr69AxVJQkgZvGfVz",
  "key21": "2KmSnicX9LTkcAMCtsxjgNk8dF3q34ycCRJamVVNuaRcWoffyVKinHDor8BSv3tDk5G88KRAcaNjfWFPJerYNU9",
  "key22": "4spnG8WmtMT4VaxsE1dp1Jo3HS3Psw5BWuSLLmpX6q8Qy45NMacPbpMQq4J7KDxzBmnfqgQqWdoYkbiVQjaaikRm",
  "key23": "2C9XvN5P8aRfDYVXKHkE7KWTkPCzAeT53876Gt6KDUdrZKzXbrU3CZgmbheAnmLZowb5cidKEHTuDB1uwebXWjPu",
  "key24": "4eanGRWf7Neqb7XegTeHWqsL5s3unAH1AAVPWsyVKH4m8fvMV81tSehm7n6gs9vx3k9KrJyxivdowq9SkdhtrRfn"
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
