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
    "3NgkRExyw4xSGDs24xTsLWnPPR9DuUn5t6WbekVsb1AJTdLv53mBJzv6CNbVDFFHE6NHnNLP1WAciwcKKQBDnqpr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fCTQGzcvyqSEyrd7jQ75qkGWejVexeKZW4hS3JaqZXRW21HrMvfrTkatcw7RdniYALAaiPKG6TTGU1mJRdLE8yt",
  "key1": "5JWmgsPBUznEatF9qG2BfDY1F4KtWdTrwQs8oACTcjienQskgaA2q9KuzHQmVqh2NVTrwnquza4A3mKEp6iBUPC7",
  "key2": "QQjWaiE4VrzviVdmVaQAgcCGo52ki8Fpug6oUjREnffqgXoRBpv5u22D9cGb7fmzh8WSgRd986DBYfKRf7Qibvk",
  "key3": "2kGZC3wSJeR2Ya2DSsMKmTaG1AbiLxkSUWy9dWA4vwwDUSqScumiu3ZuqWCQiYLHVzXMejYiC5BnhLVYyx6VbtCX",
  "key4": "2Z28ZbW9o1wEPxKGEXrmCG5xdjP4nzNWuthx1uGcydWNgavPcEkck3Z4YM8apuxRRY363uWo1rwxbihJ6vPMe8GY",
  "key5": "48FfCZTmzUo4zWSWEoPv5pgUS3Bd1YD5H9eeyBXvSuxobqE4GhPFcPjXCzMM2F3VVt7aLUTDZ5xEWp2M1gHEPmHd",
  "key6": "4Sj5cwGx74PowEq7FGS2t1fzuAbvksWWZvx5iP3Ui61VRMCgEfHsyKfki9TsXvcE8sJWJgTBwKnkLBBkyTJ8iWnE",
  "key7": "3Q4JcZb1TCKrqiABJmiJ718FXNwGnW9F5B6X5jELAiaRENT7uQF3BYQG8VLJsAxcbsgbM5TtgzZrmZ1U7KMjZ4n2",
  "key8": "16vZmpQB7KZJmNCuda2YtAirBoTrSGkxJkFKFEPFsRCiaPKh3hZnEYT4X61HuAdADJgixVX3Q6JxRHGXv6Beetg",
  "key9": "WQoUAXcaCx6bwJXZV73ULUj2HwfK9NKwsQJmUmwVti6hj3C8D38etQrQW7cDYMLng2HywfEo48PvZkYcLDBH4YB",
  "key10": "4YXe3KpHr5MNt5ch8n8xqZEBVbvyeqc45XHoGRoaqyfzRTNHp65Zq5qGFvJ8y8tkE6y9dPfRvVxJxF2s1TWb1JNX",
  "key11": "aC6QgQR7QLXLerumuPU9bgur4D3QaMQHEK6jdJpdX6Vi5eyBX19AMnydbg7i7tR2pLteEa8sySEH8KTUK9ajm3n",
  "key12": "45pv99ezAJEdnnk4byP1FQTBNkyNfYBBHYwKGfy4RREQ1KrX8vZhh4PUSLDQQXJYpG5XepmBCdGwQ8BncBhwAcU6",
  "key13": "4fi6zQUcgc9x1s7vWtzPdHu81NZdxazELqtCfLKdkWqYN6cr5N98peUMbb6r2GrHAMdjQThPSA9WNAHY1widFqY6",
  "key14": "6fKvkznosCJhcuuy8yg1bcxFm5FE8DRSUfHQYTfQnwnWXXHFt81UfKzqcwHW1WpEVoYieK3yZ91XeYif9GQGe6B",
  "key15": "589dBtC2A5pPfiW2o4c5TWwb8fZ2YU4nuznGj4TjNmF7SiLb81qCx6jd3oaPKxarXRfJPHw2BhFPqRcNYvKv5och",
  "key16": "2kWWfoy5XxSB6kgn5uu96s5TL4UvK1tFanQxFYApAT1UwtuU8D3DWui5RcEKQobYdgdKJJGrEmbyCTqD88UfY7q3",
  "key17": "3ZXQS3988FXfCEiE3hDFsAX141tGH2NbBayaLtUJTerRkfgUVPsY9JyKcv1nCkmpPsinnePYJppmQhrrKFcNndYc",
  "key18": "3B2iHHkmmVhkoZFtWLBb25YGkcErKBFCwynH4YUKUqSj6x8yydjo2dSUdB4bbSEUnxs7ExjRpqw3gDRPBPG2seJc",
  "key19": "SekWrSTYnLaeJq1WoN1K4tTLQ3Hf29cLgCnkYgCe5r2AWnJEL1dJ1FhX4QT2vcRf3w3J5hKpYfw7DB2s46uT7pv",
  "key20": "Y8SoLLRr3wWE6LK3Cz6mevdcsXg7GokZQsAgk1JYQ8zNdXmJvCb6d7gCRbnj2mxVoudQkH8rSzJLLGbhLzUqoL3",
  "key21": "61bpC69dci4ZSAawn28krrr4Nfv5oP4rgPRBvZ4xB5Pg8xqS3DBk2iW5HAUkYuf8qRuujB3oGeJMq7P1LFZePLNG",
  "key22": "5Xf5wG4p3wCCi35rRM4GVtQAj2bTokMru7koXHntSDJnoRk2NBeuhc2e6YTdV5K2nmwH7uwS41cDRyK8gCqH9fmJ",
  "key23": "JWnV9b8mbwfbdHgnpksUy3kftPCgFza2YzdnAfC7VMVFndW8zdDdpY5YJ4vxT5YUntYjUsEY368uxw8UhoQF9hA",
  "key24": "5vkJx9ta74iAq8erEktms4o4G1e3NP5WVdjNzz8BWpuKy5PTUSWrGJuKbWZ6awqeGLFHMkuotXWEnCgNuK7LK6Dd"
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
