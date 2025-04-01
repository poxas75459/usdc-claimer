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
    "5iLBPoL2GTPFNfLEM9u3PEKSjm22Q4UviZgrybwr82N5LtKf539qwv42J1ZX4vs3gEDcXV5pSArDJzsczp2hEkhZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1SFhJUQjdv9jZuE7qeAZJXytchaQjWchkHJpkKiqR5nswNLQVKLvd8EodaXnFGp11iyGL7CdiuiRAhvmNbdiC7C",
  "key1": "2NcCjeb1gjoDccjA8keMq84y3HdMqoLXjSNDMdGz9QGGKCjAWMW2tuH69w5bguKpuE21C4rUTt7fH7hTPKuzbkwf",
  "key2": "sGyhUaLm3DQevdUiGz2iYqMmgZ4fE8kzzW7S4rRE1QvkPLJ1MKymdHgBsrWwzQQ6RcZLVh32Acb9RHzAqnjUn9c",
  "key3": "5vZN4A9ZjMus6j5AEqJbEXy8eQktXWNaTv7Ue3kqi2X74qdEgRbmzFrTRbki9ToesatJxYcK4Tw2txER965MvZRa",
  "key4": "5cyLkDRwh6TuiUqphdPPwj2PF2QNBSGy2e2ckYdxmrUEZQFcfNMmVqbY7mqodcZNSqtJLidru7P1QuaW8SPN8VxJ",
  "key5": "4wCTkpUqtvXcp5wZNYEuWMFHVyi8rgRS9Pw5D9ivLetFVQjz8xRp7V7Sqsg4U4frJeHRzmGt5woSKNPJfP6ircK",
  "key6": "43ecf6mJpRYB2P6QFUApaVs1ok5pXH3cbgxqPvLWGbmmTjG9xXjQbAqYpsAtjp5X8R4eSF9uAYDEjqrYALf4Sh1f",
  "key7": "2aHunrRW2sYWRxdAGGh8oXNKPDeH9WEwm9fMWScDShG7XqAE66F2MAmYGenui6SbppqLTrQKR3wZecYsLYXvM5JG",
  "key8": "muBoBr9F79Jcuxgcsi3erFof9yZREoTL7AnHgL6UsX1v2FPBRj1vCijSMRqTp5A7XrNPeRZ7wX8dp7uAZ9nmz7M",
  "key9": "pFk94pg2MFLuXmZPBVGPzRaMeqvP1ZBdek27tFEeFUXap9We9KEobkK1hUh43vpRNnnunjFVVkEPLtnsqGCSH9t",
  "key10": "2f2AzhCWJb1vMh6dD1zStBCdvoByhpSWTEsdtcN6jZ1cCuXsDq2ZwBzcMzreKjnerGLWpuBmXbywi78dS1nXRunH",
  "key11": "43ZAnNgPfzpbXm6KSqUXsbN4h8oHWzqPPrjxYwQnn4GryG56gLQN3oRV6U5fGqp3dG132Yd3TVTT3jzSX8SrVTJQ",
  "key12": "2MrE9WR1fVCo7sZh67m3oWdejXhPRGJsJCNtSLuDjio48UV8HR9S6KUWA8mcfHc4zY186LbVHNy8BDJueYyhSQTZ",
  "key13": "4jSZ1FoHfJVnb5ggQgBwepWRUBtdRuA2J1FTM64ZYToCjsYpvLXa9oEzpMXaAkSuqa7wqd2tAnSDPJhjCQN1injJ",
  "key14": "3vqnSuTipqX7qECauY3VayvNDe6R6CwiztcwR5YKg6yC1FnBKRhjLRRouNpn93bGXphJASYFauyZ4AbRJWkcqXF9",
  "key15": "2uamJxgQdFG6DccrsKUAAdqT2cvSBtS8rrw9Uc4bsVsYXaaEEgJs9WWoWdF3hegejGLBwS8hkXzs7kAkvS4DSmJd",
  "key16": "43Mtjiwy8GhgRhJhr6fiJwrsCCRU9jehuo381odCf5Ww51Q8JFCiYMZC1FwfJPefprhh66AiDesf9jJmtjnqiTDF",
  "key17": "3TBG7N5pu5r75zngWH7AEqtR9betseh1UTDALBVNLDxtVWWxDZ3GBSFxeWy7KswfrgUJhangfeKisLyBCHXhCKqs",
  "key18": "5aXVKVTZDfyZNdSXFGUNHsLqjgnaLhQ7m4Qdmd5B7zKht5H1cTm33tvjoYSyZgmzSRtZE9vxypfPhGB3oRDn9LGa",
  "key19": "3hBWpkamJteJTRa6kDVXPcUZEGttKgiLowxhqLHGkTsk9pD1wR1H75CBCKxs9EkfvDbmAMu9eBnoiHUH9qeF9kF8",
  "key20": "5mLKLUaAiLyRLEY4zWVoUospEQM6HvunwjmaMTvL8sFQ6ACuWHLSvVvRotBufqtXFzgKDEn6iGdfnnxYgUhViC9Y",
  "key21": "fQqwvE8f7EEiASzcKVPYdAJkKgjRzw3kD7EJ63Y8ntxmrTbGyMfYFi9Wsfcje6gMxqr5TJEDb3B4qa6uKCVTDRo",
  "key22": "5RNgxet8JsaaU3RgQyeJBQ1KBVMxmtvz6BVyjrJTnaGofcBagoUvZJKsRYDefnbYhJ75LEfEmn5gvVW1uNwt8Kz8",
  "key23": "4QbrR63u3ZdJL8v4CZnaouwcesgUgLKrJjNiHBMVdW6R5nfk2qqMFYGgRBEqAAjHmTAPy6Ufn45dMN5zhWfNqy4v",
  "key24": "5HozMD14pDihb2K7CTaSXwoirXAu6EtejFebAW6o8x8pGDkP9z6gkeNZ1X1jGhdX5SagTDhprRPVgpfA4FNr1WQ",
  "key25": "23J968Urfybzr95wM8A4XWb7gKPmC73X1Ha2vAttSmLrevEWoGBfE4Mm4c25nYbbb398rvU8mQuztVkeb2aZ8vs2",
  "key26": "C1xoCQsYSxp3i5YUjZPYr9sifLkonzR3DbphfrQk2ELgufkaBLgkBhJ6tGsTeQ564nGzhARXadpm66sii7ArFro",
  "key27": "5HG4zUJ9dm7TdxRYQCEtwS2eHtoExHNRh36h1yvX7yRaRpp6owogBsfynWwf2r7vNhoegUUVRQHPtBqRdyh2JknQ",
  "key28": "2U4tceK5b3KfeLckpbTvzj7BZChkvWryTQFBfgQW5AUFmqcPPMpHp9pauwk4tacvQTk42SzH6Eu7ER9cunh4Agqf",
  "key29": "4nVToS1QwbtQUyDnxYHV65R7ofVmyciNvYaDYqmEcGuF4fmvNPoYeK4P7DrimSeGjUyUL1PCnZBPj3REx5UtWuTt",
  "key30": "2ZPfjvnaV9ZRBbhdJgpdpF2Cga5hFkerHJ9Z5oJZASbXurwmPmRcCoBR3jZxXcDMDVevBRZ8HkSTL7ra2SoWtmjY",
  "key31": "HbRzxvKQ3CdXes64hp4LMtvTHDPPaRSNwoi6QSnVFgb4SjSfssZDzXdDA5i5e3Wbni4m92fap8VxRRhukpgjZF2",
  "key32": "4Ngz7JR8TY6jeoAQsMYqp9BF5JmXKShg3sE4YmWZpMMcHowuNtPx8bnBjFhxXU7vQEEbJjrA6Mo6DyRuMXjeTojG",
  "key33": "5prNnuMPh2nPbF33Tp7hLq8Jn987Gciw4CuasnoknD9iYdDBRhksScZztyzCqaHcFoDThDMQpgSLqPHem7xZw2wu",
  "key34": "2Agmqte2pxEZ4hQxHjtj9CiXK1qWxMWphFnGm2WC8GV9CNZCokfSDYxcBai4BooQGxDvyXR3G4YQz6xxbrhJyA2s",
  "key35": "3i6AgJQEZLEF4H5auevCjSXwWmEy2YUz6HB5o8Z7qHohYCX69tiA5sasFyG2JjsswD3mVyHNqwqAEckPrCDjf83V",
  "key36": "55Kb5ZhZiQi79K34659MWb5jjHAiqqxwkK7JeSNvTj7RSyScx33XSeG9k7V7swAEB21URLwSEFwwMZ5rvMdGkQXJ",
  "key37": "3ysaDy4FVd4WvYbxKLGL1iJPKP1TxRqwxBsZ6CFJKHj93iwjtyJDsuzvXvkRMxpfG8AeGRZZGAXk2JGTbAYrTGw9",
  "key38": "3JxkjgnMdNXEvT8r9dyfpgcBoqhCGXSUHh4fNCW3QEgwzDHiBxLTBSacmspXaMiZsEPNThftJmiwauDev3KMXT4x",
  "key39": "eiEyvdBj8E2DacL8PEX7g4rU73zhGpGMt6ap3Jxi5H7TqeUCXZqUgW5LguLSTLWgJwXkHx7aij4rQgBKhLBtFmF",
  "key40": "2yHDFCtQeFXKmeQ8yryKMCWckN147DDjFBioeaCGaeoDXG9e6kH4Rk3MsCXfZTFNkGX3z6teTyjen2rXsbspGLDd",
  "key41": "3t7E6Euvf6YJk6rNSjFiPWYAgyV3MQFYrMMK2kCZ2ErH3DouTxzwXCAVtFSgKv5fE3QzSgy27ATeJSYwSVaYzcPH",
  "key42": "4k32TsgGFoi5wK73JUQKtdapFa3L3W4qnQPHdiASqYSwJ3cxQMCpqT3sdgAKVfimzhkA45ahVw9yPv4fRjuUgBru"
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
