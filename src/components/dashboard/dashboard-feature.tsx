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
    "2YyuLLmjsmjkq2AMFDaaLPdtWUMbtXJPwR2WeLztuviNV4uLJgv5KtFLxeyHGqBQv5JyERmW6VwmaKSGCJRXfyFv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LtodF4cfceXV6KLLVHpryLHnDq9aM4gBsc43cSPFDCjDsK8CA8VqJgddYigNUPYGQ1NbDqKZyTYDAn1uoRkYGwd",
  "key1": "4NvViLqhNMhDxVhxX5maem3N8HZqmvHp9GMdWsu6PttUuo2k6wgVe6LWDUuT211hBiAdRS7NCwx5Ya8y7EhmocdV",
  "key2": "2bo1EHXifX4jGPR3pcJWsskBzCzdS3B5x7CGuTdpGVgRekZJrn2N9mSwypzqW2VcEjuK6JtWBLRZ3YFJ4pQB1gqX",
  "key3": "2HAGAZx2YvupmAchRvKm6HsPbZej5JEJvWaqvMRvgeQPBmNTfkSuZVygJsTPDPfrhQY2kZwaULUnvWemrdn9qU6C",
  "key4": "5GkzrrVtGx3va6hZxtTig6jzeXbpSrEzwoJqRRXRS1wfuq9Y3gPX88PtMmZLkcSwKmDNwpZLm8M1DuJ7RUMqk6g5",
  "key5": "4wdoZAqx4rT1HGqxDPCrULugjNQFLHHsz5GAANwiJ4Dy1HS9YMgv6Rv4nagfj6uMYjHmobqY24tKV93WxBC4WedZ",
  "key6": "5gfk6xdrZ3LS8Mdrnwkh9W9obqsgePEmVhErTQXVVB1HhMsHX47KPHFZf9peqhGgwg5eDcvMmnyLx4efgRfzdxQm",
  "key7": "4qFnWRnFHMQZ7t9VQ1j7gjKFKWcgxte6XdVhpsFaXWmjRzkvFAkBCQtpmf6ronyHtiTxrf5k5xLwwUuFVFFiu44z",
  "key8": "E4qLVEHYm1Hoa9x5G2B1cjzm9LUrVG4bVccCMfWQEf5ycjAqZPeURFfbtZSCjn7cBM84SGxCGyWHQVzGeLL35U2",
  "key9": "227rbueUwugv21aJQadxs8fVFcZ92r7KCC99APYLpMrZLyXcEMEpemTZhBDsL6PK3JatT1y23uGaL6zgt91gs1NL",
  "key10": "3HPZhAn5s8ykPxL59s7H5R1kbcpMzMrMvzj52fm7UxnkXd4NwsSFKQoNqvCWdpd1m8WpVWNFHtGcMXD8KWHhU5az",
  "key11": "2C73XEnCBKKKT7MHyx6XMSWRVvZBFtXvpPjMhw6eeJY8ysopFK79E5xv8k1W7MrkrnEcpA8nVYVdjstRY14PYJXN",
  "key12": "4nBTcc9Qhj6FZ1Pa51Din5H2Jk8it9DG6JapTekDKxfLYnYTZmEVeBfE9KxV5RiFMXDi4qg5KLhLTqFmYPz6SDXG",
  "key13": "4wNrfbfrBbDsx8zpn1iDUqUjScAuGzoU5Aiv9gNpZg1htGcarCTFSJpoJEzPCU6kaMdLFV3s9kbEHrJw7XRjjPEk",
  "key14": "5forV7X1kwmjgk6uUaCUecRzR1p3sLKbVV3DZLWLsh7ru96hgtaRMwjjxRHhJKV1uCyLkv63Lng5Tbm8thDNQh9E",
  "key15": "5R75Lb56Yg9cmJD692fLKcz8VhDCfRSJQ1bWHj9zwx5x7gbeAJeWATQnpDrKJ73gnnDbQETVcy5Byuu44N8hbgh5",
  "key16": "34WKjSKT7ZXcZFFjSTgwkH99sXMkTYvyzQqzFRUFv1U6qWWn6pjdbZ6JboPifrjEiKLrJfTHF3LgNdp7MMAFgzph",
  "key17": "2gMoB6KnitMb1rNrsHc51CH6SQdfjgbGYJaMNn21AGahLYqTQTWmp1jfMSYcknoGAQus4MsgiL59yAeaH4XEsJiC",
  "key18": "4Li4vMSi4fBGYXzzbqRq4ynt72bxbEhdwfBF4ytbv37Tch191zrqszeAc14tByLnEy5T6NvrpqoB1ZruhhJtedkG",
  "key19": "3LNHJHDw1GLrQ2CWtFMBunkB2BTnEWGKorEL2e22weyApRRY8A53ZKtEYpcHtGjfGigBgVCQCqibvupeg2vPFEn4",
  "key20": "4VA527j3CVB1pb5uJjEcwKzaAq8eBConRyT9Pz6jENKje17RXRjL9id48r2ozu3VcQEBfii8qxT9sAUjqoYA7gk8",
  "key21": "5V8EpuG4Zw7BSP7AptJq5KTTGiTph5BBUbKYhZFxjZDpMdbbqU9QZFJrJgcCoj8N1w3P3RnBv7WbocRFtQYDh327",
  "key22": "DpbBciA5J92sB6HSepcx4wi4wGh1VtQqGhkJgHyY7FyBnoBzVijPj2etke218DYrYvULcCaEAojmXNsvyWTxJSy",
  "key23": "4CJFjddPkN7ErbvXSAcq9NNPvg5GuaBsaQg88t4tdXSHYCtphKqVh5tDR9MtH54u97mjyTec62AjFf5azSh3h65X",
  "key24": "5Dc8dyZPC91kKumkF5FeD6pC4XxQDdFi4mJ7JKaae51xhk6GYU1ZRdFMNEwKBRqmbYMEcerCy3xixGrhWMq9VdQW",
  "key25": "5m5edQ4SCK8qu58dDAgKmfEkT2AEEd1N9ty39cYiXX1UqfD8BthLQYSh55f2BxxzuLmFnJJ6UQKSXvLK2QZchXJt",
  "key26": "3zQFsjtp7qwDMi55sskfE9ZVY2tfoE9tJsWYLdEQRvw48MZNdkmJcgKV6gt3c2yQCJUXjauzQ27KwoDxvg7KnJY1"
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
