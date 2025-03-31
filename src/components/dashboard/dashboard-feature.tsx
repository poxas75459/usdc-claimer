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
    "2rYR7d7WFsRXfQbgC2PYFFVxz5cxbUXhKWNJwqGHJV8XGHrtJp5NTJK5Hh1LDgQqPpN1fdtBxm5tLbSUWEBRCrjX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5of2p6w94n2bvqbQxXK6aW4tDbJwyWuhVFqptec9kGpWwFMk2aSarJg8jbz5DGM8MCFuwF7a1S47atpbMx6ghTiz",
  "key1": "5XCAF9ZnUNBLMtevQAYtr5hvLwvZGWX9d42yaqis59Pv9Tn2KPq1a1QbT53SzFQT4g9mwBSY3tMQVCs6cfWHpfov",
  "key2": "4CkAniAF6wBCMJ44UUV5Yaen59S9Y5Vspp6XCKR4KtqYSfendZtJRsp4SVxuLQerxWvnJTeV4B9oTnqUQrQJyNuM",
  "key3": "mM83A9mA3AoWjVpDdbZ8ERvjh45kexWGDf5RcDZbQTKSgJ9RQTg86FuVgnZHHcy8bbZ6wx1Gk5oRUgbS8JNx4iy",
  "key4": "215BcFVMovtwNcnS2BQjmTbRkASutLHiUA5zrEjAaZyiXLPrMrBuyhdLKPfiuZofEmWkFbxhRCvTacpxucsFrszn",
  "key5": "5MjppQ1YwKWpAJf7mQ1fUS3eaaJWrDdMgGqTqAUdskEhxAShoYpYDdytiBvaYxwCRwsGjhYhxpyKHgdADRWUrHpQ",
  "key6": "3udeeQApL4FBqhAicGVDievmy7wXJoXgmcFhohbRCrvAzJxwvhosAzuXN6KecELt613ZcSLyi1cz5EGNUaAP3Aqz",
  "key7": "2QYxcRCgaXHbunY22DkSHkTueKNVrzB1VbtYJKrN9mMxgew7NsXaJNwCS9U7ohWTFUBJTuU2f4Zg8ia4S4shSS28",
  "key8": "2V2PaRsNyQ7S6u3tZF3xyVDSmouQyXxiGc4nCMNWH3G53HCCFcqAkCdbKBpx76ZSk433mkDoo3PjisXZpUwHaouF",
  "key9": "5f9ctw4bGdtGaAKuupkD8rxsGfjUqHjgDCPAkVsUnPs5kyNMuRnhHtymGbW2QdtpvxyBZjeEgZXhwaXMyVS6NTxw",
  "key10": "4eYGpn7CNTF6qhjoFYzcwK1GCeERKtVJt2HXG1qMFK43EQowKBBhDasHM6oAzYYtPBHa5BfKU99qgrkKmEERpaup",
  "key11": "547hzD4smwsxcfMXj1nstAmCMbt8UQ7h1izSuCjREDDqpLSdfzXNe2qQR2Kdie17rdxvf1hKzPPuW4VbDpjYQs9n",
  "key12": "5Hbb5a6rkNep434ZHr5rGLiZBt8A2eHMiUDBVtQetTqxj7qw84hQbTcUDRBGP4rh5szbXFcLRs678ACvUNYZsuCt",
  "key13": "Zvodf83Nrwrqy4giWcSMgKoNtx93dfxQxtpPcsYTn2EprvSjtBpAGhNfzsbCsaPfAuUcT1zBQfAMbZs56s1HwqR",
  "key14": "3f4bKuUvait6LbWx6GuRXAX64WbrmQeMDZerbSU3fWcquhDfV84dBtFPHy2xM28RYBfLxFyqzjoyk7EUbMjVsCEq",
  "key15": "2rwdvVw4em1sNRVBcuEt4edDm3YTxziMYnJDNvf7oXf8XaqYBLr1AvmJQ6ESQZMSMDBsVTeTd28caEie2QSTcKUG",
  "key16": "4GeeAgWYmYFuiNtGtyXsttpmbrdekzrzBt6ErRJE5tf1LL6afpf3yCtTbYdPeyX8PHb7ATGKg1z9VQZNGLCyeqiL",
  "key17": "5qNjZygJ8N8isP4oCh1vGLL7opHJTnFjERgXdqxZdXTnfZFMWrfAz8MxMyhHds9uZAJ7w8rTSnbDVnA1bnBrmcpL",
  "key18": "4qDwgvjikEW3ZQ7W2qQaDUzcR1fvgDpMpnXDNCFXym5nxBpgA5KG36XASN6GcUVWvHe6ZtCPvpBGsZRBhc1Vx43K",
  "key19": "6g2sCLjEtCSasgamQV5L6GzL1FsHQedKew1wphnc65xTbAwXjiwN8BfXmDoZ3RB86P3h142WRMtaAWcgaX9wx8G",
  "key20": "5UPD1K5BT7GCyNCnNNVhYVa43SDoNyJ9KRmopDcvjNwpoKJSaBWpM42dR23XAMaxCPjTZCE7rZTqf59TsJp6e2re",
  "key21": "8dVMQMX2bFGtVmdQWw2yk5gsc9zEHJbMSsQCHhapXmm6QdYBayRdqwGwAQESwXbG9kbdi3MkdPpSV2JgvTxHDov",
  "key22": "52tBKCcAz6zqrxhbsepK9NFPZgq1wYsWq87w3H2WoP713qqwQcmdVpvgSBMqVMVZN5fqYPj92BUGev4iEKi5Ye1V",
  "key23": "3j7sL5MXeuFSHCcJ7RkijP7afbH5txQy3LqTxWAD9QAcLPusnEt7sGdzEyXMZhHatXijphPhEJuh5WxdWC4CM54R",
  "key24": "65Jxo5WJutWnuCdwtD4k4Hhfnn99iqBJkVrjsmafdkU6qA3evKTojkbjqoytSQiCvvwWyYERsFn8ioagGXkNgoji",
  "key25": "59xEt5mfUsYZErqnqHxA3oKmb2nuU43nJc637ViMZyd5jRB1h8oZLAQMU88qXKcAVPRmL5TjxbkKkkF8zx2HkGjs",
  "key26": "2ajqUA3ChxtBdrnPywnxViX3hWA1zMa6B5SDAeA41dXuBYNZuZSjLKj3wDK8EtfuymoXXtSxJ6sqHmYhtwrDYw5a",
  "key27": "4v4DnLcwV9HD1Ndk4Y3y6QZtwY39ZyXppjJ8tZAHSX41wxLYgsGiAZWZv9iA85yH3MTHq6WR35fRe7fon8yfCEi9",
  "key28": "38UsWxLv2rFrouMU38kmgnGJVwKD9kahDpPi4WcrfrxWZyDYG1zV4ju5aazEQk2u5DCgijwfjXPVnQVLVhbX6DeR",
  "key29": "4SNHa89mSKqmNd4rU7qQxPzq3w7ydubciWy8JjWntZagYbCQn9oJ3aLSksSLkiX3kCXvTcSHY7er25d9jHb8TfbL",
  "key30": "5w8za8eE2FHZLbbnaCaC7WbdHdM5Zd8vpjUCfZJeRjWoXVQLyECVXsaWzYHtbMDXmjMacsgUUM4xBPZZGXiQ2FCm",
  "key31": "u8YJDB79KL5uACQ1pmTd97WD5XXPnPoxwoyVbiwY63roKZSduQVoapXdhoh2DuhYb9cUoka1fZdNoSTt7kYfne9",
  "key32": "5fBGQQujituitbLMAbvfjfKFkYys5YrMcVB2nXXZAheAHod3UL6rZ1JaHZvikzRQv1DXPWdqQgvttn7XwhrPPkUe",
  "key33": "4fefJt4KMgSV7QUsD7YRGqh8REcoUReVp4WQuD7iqa1XtR9miLjvuMgJN1qGwTe73jwp4ByAsY1pvEoLtRfsC5Yh",
  "key34": "5sQxJoRtain3fDs2ZXmbV2NM6G2mbuqvXKfWpazuH2C8Yryc7NkbPLYAZjFbMZ29PmRxdaYq5emg5iDTovUdr7MV",
  "key35": "2uqvKjsw8hLMScM9ZAFRFWvTCQkRJDmCMMpQoEh3BhYgLWRs3fiCKgGL4VDFutzXumNXn2WtnaAxEQdxvMCDdRGy",
  "key36": "45cA38ZERgRYinTcjVAdXojtgA13wnJiLhbBEYkfhwHsvatFqsbn4Fdzgxe6c5c23jorUiZahUfMPbiLK8XhvSYD",
  "key37": "asR2rZXkr5C9gwppZfDar3yvhNW3XHa3qyXwGpASHypcH7H3tUNanXuheUVVZPSexYZH3JPZydcbTRGXDUqyFqp",
  "key38": "2cykjs2d5NddNUJPtna8MUga8AMd3ag8M5Hv2pNUyrK4PEiSWWp6choU4uGUzJdZxRQ2h2meiQz5VDxyGQvaT9Db",
  "key39": "5U3xYufk3S3nv2cGZKH42EUBiZUyQmEq6Yn8oSbbJfafuPkpagcda3SSFR6CrrobTBd4GXydDVpmjairfVcqQvTT",
  "key40": "2Bebg79PDhy1QRiDrxo5dMsCcCKdUz8W8TLS5tkERfAw9rDje2cdH1ommFeAfU9ADy6bbQsfqcVinDSYcTCYc5MS",
  "key41": "4qMXvdYf8JzuHYcfcBDGfKnC5KURECK6ZuqE4oKJCymPpUSRk5f2qQLEKtqV6vmynxMdmVKx6yDd5q1aGLZwvx95",
  "key42": "4zA2YLx261JTLnsHtAx3mZ3jvGoNejrLzvXEznKQ9hLjQ3C628GXMYwUnRpDVVfegJTzfaqTKEnbaWopyfdWL3Nr",
  "key43": "5RFEpZHxRwD4gDY6gmAGsRJSj8RMBqeZ5UtUmsR8sTS7L6DoCU2DG8iJohdDy4YVHX3jbhaUuB2yByT1nviZ4NZ2",
  "key44": "5j2NfG5AA6imSobYqTEeXcRMGKN1bzvo9FfndkGwcshBxWrMiW95NBgqA9RKq6EedAdU4s5262aurPPdf4oivCMC",
  "key45": "2MV4SHvksMjssHmjqHoQ5L17v7EcS1YmdWCER7ApbMtyqZ94hw9hiNNz9aytopZNoBrYGruVrhgUeRn8EBh4Jnja",
  "key46": "4YspqMx1PEaANXcCschi21SXzC9ZdCnyZkM64rKci9Un2aPDYcfRYet6KaKr5jkwonYbbomBTQq3FMnK4GuQ6cF2",
  "key47": "5q2DHnGCUxsv1k5ZQsWoMimRXc1HXTkqLbiVMXXvN3HBGnbfbNApLiEs6bub49qUDg9pSq8GaYX1PF3xYYNFq4zY",
  "key48": "4f28GuwxQqbMpLwJarfw1BcgcMeehkAzmLAoDvP8CdXP3TeuQ2gbcTvvKBT3TutiijC9d5vBYxhYpW3JkDHFgCGg"
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
