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
    "58VZp8pGfHq2YuWw71Z6JAN3JKDxfhQw2n8pHiV9Xh7teJ4ydEqduy5f94DibGT1r7HoyWwR34nRzHs6cJwxMZgx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2m6Yzvhq8kbfkbj8SEhGSJLe6vA8A3CydvJhwGopB5WFmevX8xTUxaW6npQRa6dGqZCsp68Sj77n2kiFKGq5t8K2",
  "key1": "2mNAso7qJaSmrfpnUg6U7YRHBktxKPZPxU7MgRa24acZBAkqANC87uaFnohA586TxDGTrDGRiTS3fw1VxeGobvYn",
  "key2": "45iQPDPMzGfDsGnMwGBGhtuQYbqYM8t1eSAGqTu8zFCtwwnbU8cUqH7eAmj4fo6R74geRT2baXVo4KkscUKJQmpH",
  "key3": "3k8sNJHRVS3CNgbpDakkG7UNS1iRT8ENGPzPmUyVi5nEMaGXpdfV1wj8CkHZcC6zhWeF4mNsGNQx4u4KxzqCmYor",
  "key4": "3z53xNpk6UsUUdtWqdBRNe61mBYiqXp7LWLt6buVyy5zbNyUX8BrWHa458uS3J6JN3pyNf6KEw9rPYuBvKwCD9Bx",
  "key5": "4JmeRHeFpLz7HsfLftRnkPJGWNpyGgR1FPoaeZLZ9FrK6VfvuoagWTwDqYXoKu36HgDnuoBEkqEwLK2BcdfGUkAn",
  "key6": "zEAmwV7b3yNzrRZd7kdKUqFxNJekgB5tLdcGdkAxaYEVrfFsus1UAYPMoKyFaFZCd1hcaoh6QEH1vKrmAJUuPYr",
  "key7": "53HR8sW83tUug7JD3GBUGiDFW1EANXfjb2DvqcNLXRN8VraqEBGL3HDFsXJodecfnMwFShyR495osAnJpZBhGQDt",
  "key8": "2dkWjzKCFHDVdkycuxJCZdeUxKHCBq1zw3DdRPGQnmvWfwgPMCxvjfNuzhtK18YEDY8CKVdxLzSAFPhAwhm3f2Rv",
  "key9": "gVtUgq5pSfD1KFwjaHKSKMV39pd1HWeQbEVU95fj6Ditmo3gNoUKJ13NnQv633VScseMKh1MKw1Y88rGYfR79jn",
  "key10": "3bnGaghh4u51VD79UNTDs8satnGU5FNSSWUcVYoqW1pw18Gvw3ic647TkELJC9fXFBsPrpwkbccns5Wjo2SqcqDn",
  "key11": "CSdHgfNM6YGcQVW9rdjEaai8a4mghDgipdbhGdqNUKEqdC9SKEbBwvvK111j7YWCytEWCFmKUy6ou1C4ffM6mQZ",
  "key12": "8BvzgaiczqgKhhjFtJrzb8rNuXexGwStYUJnMSZtZXhfMBJHMzjYdU5LdxP5KqcEdPzGFScjwjjgu3v1cHGEYLP",
  "key13": "2y3cYtBmx9CeCgsZGzYSiuPZpJDpev321U7xc81HpKfFdgthCE8WP4YDczQnJU6KXoJC4vEj9hRQr5VBXYx1uzkv",
  "key14": "5tq6vnWScPCxnegNQg9aVpNaFXgwp9c6RFNqerRDxAqnevpKjJutazFuTFDVYZxkFz2jaQVVYvH6zjtTGqyEyTrD",
  "key15": "DjhqQQ3PLMXq775Y86oH89wg3235stm3fhrrzskifwfHDDe9d6YwB3C3jGbKkzVKSQYgkwRV5H9EzRkLVkXDZgC",
  "key16": "2uA6Emi3WJ3xrDcDWDBvLY8ZCqS1us124WBro332DU7tT2WFDAJC7tRqfx2uAB3wZi7CNrpwKgCywxm5moToeQQt",
  "key17": "56u7d9J5zKAeXgjKpwEm6rqFPVQnWPpQ2ECaPHS3JT9evQ4XGiCzRC15FRGQJCe1WXaEdWxZZ7ZoNiuTErBrxJw7",
  "key18": "4fz6gFz295WXj6TqaDGCR7nGMiuGdjaVreE4L8XDEaxZQvuFcodmCJtKQSKDqcUKgaKJ6i4p7W4P2NFQjkvXx8zf",
  "key19": "NrvNYtAZbzLHsktsrJ66XsdKrY7ry7UmZbVHJbdXLQWKjifBFAWUjyEobG7ta7WSu16sKphuZb1o3gKLfahXzjT",
  "key20": "n4pa8wAVDXUFPLkgVVSbRRU52Y6idJTahq9mpk2fCc88Br1BVedN8c8gANVifHy8DCXzSFNSYFyuFagEGYsxBEc",
  "key21": "2bXg5Y2KWd397ZXLpCcHJbrv8iystn4DqfthQgZXiizC4GW1etZ2Rcqxms14WXnDk5GyDCJymvNYpTS1HkNh7umx",
  "key22": "3Vrj2FKDeqJNF3JapBTZTirTQW2DvRNQXeDFm8eaVDUdvF8DMC5iyTBFvDJVtXosdr12DuJaWXNpiPBR6LcDgjHg",
  "key23": "4j2Sq5HhwpMJvZPE11UhJq3FyC8cqUwFNQbJzysxco33MP59FN8PYM7a2ATMw9WWMWgGWDtFTKEr2Jm4NeTRPuyv",
  "key24": "21CXLA99nYyGxrnVrcq9JdFjVJgiG4FCzxVDM9MKWp6N4cv15b6PFT5P6ASaWpWpNp2SdkrfdydR3SZAvaC1LQYj",
  "key25": "2zPAb7G9ukpEfKJ6aLVRtAD8frbgS7wW1fm7R12ghPCiD9XHnSBfVrK1nmkw19KhXcjDpoC9Wp5YNNpW1zrrF81v",
  "key26": "LCNyPnxiWd5LKum33gZUkwjb1Fq6WW6g5rVsTt3gvFMGcQKtaTvPAPUeza5zFx16P85JLBdP6HjRx5kjL7PiHz1",
  "key27": "5b1jBe5J4nqbeJgFYYqvFdkzYS2W7JBjBbi1F2qkTD7BMYvKmKzmA4chKvpdJWFvC4Mo65pNADEuk14EqCZHNSr6",
  "key28": "4EL9fiQ4Ndy2UK5cDitStHtQFMVxHvUv5DkDWta5Ft1exTP6gtSrYBYu8TYXv6XUwBDzqcipbQeb8DJLFbXHyrnt",
  "key29": "3JpiHGcDEcyLddfr3gv4MQqCCRheNrvazrTTvwbhrRYBSoru99TwVJGmqYfjCcpn5GEWfv1ZExd82xvdKo1Znm8y",
  "key30": "5LvdDtbjpm2uWw6mFTkcBRK9LNxTStnX3cNGpTYtN1bgTgN6B4GbrVbJbCsGgTb6QKQhdbcN4SE1RcVeGLHgrZBm"
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
