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
    "4Lkm88EJWeUzoToLUyPUnhrTzDsEYVQG1BWcAUj8SjAjwkfD7iSgZpJY8bfjoEL1Jy3hi1xcksNXyffxdhdTvGgE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iKJvsuVJX6yozr6N2PSBVKDmp1RVkrCSGbteLuQqGht7tapHE1bPodWung5Ln8y9BKKkF9R4YhLYQym56c9arik",
  "key1": "4RBqwQpqFVSnSqv92zJecb3o8aqty41H8cbwgn457gnJTH8FeR2a2SG3n2iwBErkf6drzFuETseCLgQFk6uCwGPc",
  "key2": "5LDihrACoYwCNMh1QRKghF6Y4WjPziv1tWc7ri6Tet3eAJRb8EQYMg96NGsBNiraswkCmLDKbwnvjqGG6ZhVaLm8",
  "key3": "633wb9Hbpk92EsTgf7B2MM68jt6RqVnc3ccasGnYgYYqc8GKfGKXvZxvUChevZoXhPhKZdTZEpLUY6sMDfsMs6Ju",
  "key4": "5fDqMoFatjwauxn3vtZ7RBLe6RkLNLUnhXkMFKFcWjfLGPVGr7Tbcd35UjtuZ1mZZfdeyWk6dBjAbPb1qNwkAZSe",
  "key5": "63Waj2QL9pUKXVfEsBTjHDdYC1x6jxyvTou3oy9wBocKe3VHCCEuYzA6CTysq4phdq1cXk6HoRC82n7LrUug4mwT",
  "key6": "DC7nGmudw7ME3QEuzzDByNE7v9qmo6tCbufg6pJFWhxsXXggVtuR42x22AD3n3YPfki8XyP4LtKpzYfPeS1wqj7",
  "key7": "2NTfXxSC9LnUzyDzURkWmWxkH661dTSdre2MdrXk8dk1tmYHVkvFdkAH2MdxLMnoWCUTJxdPwKi9B5wZWBdwJnEA",
  "key8": "3xMSS1RnQzbSaEFQb1B3TSsGCRUcn5SaNGE3MxGBwx1tASfB6ecy4xHrHCJPJPmEjXbwLNMWSWc5XPhCMJ9s5321",
  "key9": "3tBR7LvWMvvh73CbUA1ttBPi4vzX4s4a769VRPrrGkKWN9DkNfnjw5itxhUvccA46rvPa1gbbWEp4yi4AVLQTuok",
  "key10": "tKPNb6Uxw87ex8XncZzYHYMLviPiWz3KStn5omhcS4XGYWJ4yHm8MUK27MkTp3UiSCSWwwZB6BfNXdvPcFK2pf3",
  "key11": "4AatrsAz3srdPV2jwirRMYPvthUHhHss7HxNrm74TV7twRT193NJAtU5TBPgBrDcw628WCUqnw5xDuTHd2yoN9mw",
  "key12": "2MnhJixDTadeJZYeD3AwgevNvhx2QYcySShgkcPGi1FQ4sr4vDunZxUMSpxmYFASr8dLnqHCXwsYisJxozXs3nvU",
  "key13": "4xwQWJpFbb5qXHAbM9WRy7KFVpPtcpwtA3RxhCRR4C4WaiSV5XSHwA452xCWTG9ZTb3ZoCBM4C8Q3A2p5eqdySf8",
  "key14": "4GKBNJmtQKriPxCjbyzJKTWt2mz2eMSs4aRePP4AwbHAaXyqxAJ295m3eTkc5nkY4yjJVfphdEB1CHGkVLiHGRAS",
  "key15": "5xFpGcsRQyqjHZijDRZ4pwWr6xtrjzKkMXwyYpbbUKT2G7mdHhKQ9yAunYw5iTf8thfM8HEezuJqApJS2WHsSrye",
  "key16": "3L2cFPy6zdodV8hWdZorfwT3A98coCSkq9wn7awiyU81BBE7ALHCHvgubc1m4H9cHPHc3WVGRTXTsC12ZbQ8U7GM",
  "key17": "5mPTHtdDpYtLi8wfbgNxbU9RgM5T6Yki2W2AfTu6doztWrEP6MzZ2nDHWr9jDwki97W7JEk6uUvtBfKTVbDTimfB",
  "key18": "2Gmhs6iWP4vMiDWkw18jWZ5t4qYRTsmw6S8Lb9ctgnksr4uS9rrRUYxhTo6JhKDG3NytF6ayXkUkxRTJjbF2Dav4",
  "key19": "4ZgBn8yCi3dv2zDvE9iPxyZPU36x95x7q3vHvN7oALbwTohifZgrhLH7auYsJAgKzMrrbufGPJWrf3o3dbjDXQfJ",
  "key20": "24XnxyDtBoKY5BpRQWi1ZWMSyhSRQVAyzvgkD52NafqKSxeiXqFCtbgfJH143zb3pLYHjkCTm8aR2yPMf5V9w5sL",
  "key21": "58T3UmQ5V6u5oX2BhmE1FkzKjZ421NL5HvVMMCntLU3EkuYkR9ismV34rRzAXEeiwPwyeCpY3YkkohGaugQqeRXA",
  "key22": "2Rhv1PFfqDmYkDArUfycjnvn6hUoAcWibDM9uH681j8ZaR2Bsh8S87mZNADzfSGG3PLQTH7mE3WJgW2AbTURY7vc",
  "key23": "3ReGinEWmtdmru7TM4oHxk2NfkPjnSqyUnVbxaK5jogQoYB7vieoU2d3yyuWTQc4k5jqNzdsrhUy3VqGJSfAFmzX",
  "key24": "3YqQdt6vwJBSbXb5dQUV2hdePjFDFD5PjeQmRjjde38E97H8KPrUxmSNjYvG85KcPtxCjLTCPQg8vLJfojfmXftb",
  "key25": "5Uw23Ej7NwEgK7Qo19onPMKzQNPjWFyz5eYB2z899rjqNSEewJrTqrm9mEJ2y2yKRFG6NAS8SqSsiQoCtobQyKb7",
  "key26": "gJwvCrBnzKJryZTXS89Xt9CcQmhYm1KpjFoRMqQV8kcGoMAiv3XrcEn6qvrDPrsWjF4fwDkBAAKqdazjpkqJHCb",
  "key27": "4DD9ccMyVWuMG7FtSf6jNTSqcWKYAvyUpWKhxJoSBek43dhA9AEMstgsmqJBYHyAqK6AePZbdehUna8av1DVUkY2",
  "key28": "2h7GvWKaNotd5J8vLd3r3x9aiLgVdGgwAqKJGacVLSr5Ynjrppzxdi7GBFrsasTtFiwZpzSttsxc1qm7KJuM3vsb",
  "key29": "5wCJA54grJ3FutGTyBZAszkWhDT2DLMB2KTx3YN4gtxCzMmCuA2RKQgHdxt9H1kcgJvMsG2yA2QRnoEUdJc89QjE",
  "key30": "Zqy1w5sTw4n5v6gUjr3w3bjAvesFjNpqeMStTMM8R7ySvdEK7X29JivXy36wznpmENU94Xvf4XyPLrL4ak6NHRM",
  "key31": "4pZ2b42awT8FnwgqdjCk9bjkmwTWWGKy8Xrah36WG9eFFFBLrKf18MpmT1Xkg843TiFznVbakKFZdACLuaaLZnrh",
  "key32": "2SwtBmt7f6aGCS2FgYoGdrYsSVGmE7jztsxRBDv6j11WTYkCjhKWJsiLXNSDa85FJRXnfFKncgadNZD2XgzeiSau",
  "key33": "4LYKte1CZUumf9891uEtSqREfhrD8J3HV8xGSqDnvA6zacz6wkb1n8XrEDigedDD8LVzggzVQoT5HcqzoL2BrdfJ"
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
