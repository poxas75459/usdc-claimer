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
    "tn3dpsPy8UBf954pSvYhEFo4PqYfqfW7uUensPQfXx934G6VNfqzQMYgfQshWEp4ND5YFFPK6NyhnBJ71CmkMJD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yewprJ9jJY5ZQXQxfcJtmSC9PRtApP3DDz8DJ6mdmcU7f5XXQVuvr9jYBYi6zX3k82u9xSEh2cxMF8gzwqzfE5",
  "key1": "os9iAXM4BEhQZ5oRXJ8Q2yq52tsjEgcgNDK3dsGvpbVwi2zHK6m3KrVs825CqGM9EWSXDJsrAofgsMwLPL2e8d1",
  "key2": "4cukDFFQk42gqLWD5WTLfQHoDruN1KgqxMVEndziY6pkqhNrxFUAdhHPQg5sNwMbspqt7RTRPiwu9gJrMY3wY3n9",
  "key3": "3gXbLGhsDXt8CgN9Dx2oQHRHjUXYgbVtXncRwD8TWgre5cdYZWs5rBw79ouP5e2EzH8ym4svBtgYh7MBEKerdwWY",
  "key4": "5fMPFHYKCbg4b5iHKgpN4kgR4gPfWWCdn4gqLbCkjMD3bfsjRTKYGtZvfVARJvhVCjoWFLgw1fvnsYPEG16ERWjY",
  "key5": "cL9ykFcPBeXrK3ieKTePmC6Uym7F1bJp6Fndgz35jKG8ueAdgSBEPmGBVY8ug94GPYBhY3mMiSr9AzVBxJm1xE4",
  "key6": "vqqsYN5iQ3JLZJhvyWGAmoRFfR7LvtR7fQyTjsWLXCYNvGUgQKyHgNQBtopUr2hn5qMCn37PmLtqQpmbisTh316",
  "key7": "5Jj96yoMFXgU8CrkwMdAJbnAsEhzJo1naJd6SYo87Ujfs4HPhomCeyBwWDi8dSGtXKsAutxuj8ms49VwJbrfcPNT",
  "key8": "2JBxkHv5CUrCmSV46jUyuwnX9ABMhgG4e97uEQpWoK1uDQ2GdB2yERqnzhB14adUXNjpxL4ZGWhFdLmmXoEjekiQ",
  "key9": "BFdPxJsmm9u6Yaf2CDjDLZPBT2tjqF3utak87TnJiMrxJeoCLHdMdbTBA9vVP8t18hszy1cbV2ooL2SsNaV7V74",
  "key10": "3mNMePJQV4YjRqWC1rQQNq32QvqHvijWWzAWNJPoxRJdBbowLSH6LqdFjULNFWoqX4ebGvb4EtaSizkRex1woRSK",
  "key11": "Sy6SZW2WxK1vZ2wvkVM6zRQ9qPJk7pmVg2b1HwDNriRHwDrXEvn5qMhQnCxVtAbc3jyZAHmHY7Gkq5WEvGt8fj4",
  "key12": "47ri4mctzbBv15mdEQEtXC65wGLDKNLa1X5uucTS1Wpt3MVRN7fFmSXDRqGcv4wBrRVwe8vsRx73LWgxdJFc6kBJ",
  "key13": "2TycMnKwhuzcHwqTmJ5oGbmZ6MiGGYoiCF81ijqizsVVtn6fvd4fPoqj6iuPnWrinngKB5SQvTTiS65QyNjJa7Cu",
  "key14": "FR121kSyXAEL5ww8qMCz3rLfWCyeSk7QAftvqHvdSv3nxaFwqMajbgbSbJVb55pJ5R6XrdUu89ZBWaHLwDver4p",
  "key15": "3Ghcozv2fYpeVqKYDacvp3FdW4aTvvQqRmQpp4g4Y7qkMTgo184AYkXoC4aNKtMETeb5kj5ho6t3Z2zumMGiqd1t",
  "key16": "UvGUBJYQYn6Z2jSjXcYg4fFxwcZrQyi5W6Myz2K9NijQmPRBuKKEpNt86LjPWnWCbHoA5unDyiSHjeCxcJhv68V",
  "key17": "39gbAD3wP7oazXAUeXrhHAtfBQoQ1dsfmpX1DRvwJSV82mc1QK6cRzuUhnttXubYmaVTfM5273FR11awugSdYUvn",
  "key18": "FLrTxUohPrueX6Sz59dWCwMW1fwX3ngLK4kJmS2iRsJ5GEbg9aqw4YZUWeQbK7mJTX9w1zLmokRzosAU9jUjWGp",
  "key19": "2963CTjvAbZXbLtZyDoNzYBDeaBEVeVNm2tig1DHiCubQmKmv2gv5qTBL1pRW8JiuWsosTg3hTNW8F6vunPrS31y",
  "key20": "598RRg5BQFNtXC2RULwWZH3Sgwf7g9XuRmmzz6s3ejzFTdzVYz41pLYEbG3uVA3aFcM54z7iCiUwZGsRDexCc5Gt",
  "key21": "2ebbZinT6Fe25ZcQ3pQR72fou4maxgPnfx1okZzQ73hBVaHxue8QXk7VHCwjDAHjPd3HjTTGnMUnz5bnQGvRJiUd",
  "key22": "4QDWXJTqNG4tPzSLSf3s8Dwd3xV6JW3HNPKRyYfMZXLgSAVJT7JyZcyFRSWDs31KtKCvLPfWS4hLCyXsdri6VLpp",
  "key23": "4H7RFjy4BU7MdckgPKKT2P69c1gZeCp4aBY9T9M2xrxQBYBk4wYLmr7CyWrmtoaVLSN66uNgmTNEsn98r2hxgiMy",
  "key24": "4ouL7ivaN9swP6WvS2yCZP5a8k4WMkHBd6aySPiCU6Y4QZA3WJZk4698Mwmq2MzUcTgzDuuZKKUNDjTFNkFKjuUp",
  "key25": "2UcrCcHHvgSUZEfvaY2RBY7bi48sVwDekm4UzT16siCabLETEuybBqkv6bR7EeQXRx7dVEUMptcP7xvyT3jrbxKS",
  "key26": "3ftwwa6K4SWDqp5FSvYJmBv7ugjrvgKVv3RdheGy9FA2dJU3fMxEZGtnAztQt211YDyQccKFTYF89ZzAjC42NcCe",
  "key27": "3Jh5ZPZjRQpYcVs1tSUJeUqSBmmsfZdUkMD5KAg7tDA9UwgxDUrgFPewVCJwcWMvN8hTYzXRQq1xt8kKw7ML8MuT",
  "key28": "2MBCt7WGAECiq2eeTKwpF8sLBfYVDNknunA1ZkMSy5NSnqC13WYETQhu4Ct9hHE9R8KiNCpk6E8kX9Sygb95nsf2",
  "key29": "2DHCVBLBkP1UsYjFduV1FdV7pBGucEnYJQMoNncPGPLzL2Mb5xnoWmfxa2XSxihQvjzpzB3bdwS9NE4y3V6WTKDD",
  "key30": "67MTPUxjUcCeew9Ba41S7PRbChKoec4ANNRWt2rREcXgCrWMqwjw16ya6UbwSuhnCwi4Xvu8ZCM2bEJmBnmRF23F",
  "key31": "3Jp8aZqy8C7mYj9WnHGjDp5WyaaZhLaquE5yF7V5HazQcoETXDb4hRtsrtykbSLLnibeg9FQTTF6EeCb47rhnjo3",
  "key32": "8KN1xHqeuPKiM5bB7BK5XehKJuRY8Er1Ztye5Q3eTtdj2U1EiZm8dLt79QBUFb5EL75Sg2UWLSFZXkJY5hdGe3x",
  "key33": "2DJAuaSpva9DmRaavzgGXaohpFpmrPcRNcnz3R5zpZ7XkNsqHS4eWpEgwHmygJQNcdtD9hT6orGRHosoC2JHS5Lg",
  "key34": "EGdsmNav6KF6fr8S3prnN56jv7vnd9oEVM7GdWBSsQCT6avzow35Sj7j4hgU51Wbt4i2Kaz765svXUaCSUXXAWv",
  "key35": "2mxFvoZ3DVr8Hye8z6v7D8uj9mGTCV4yy9yG6TfHXz8w45Mx6AdaZnPUZDCEVYbP3Kts8csVQe4QvZ1hAFUi1yR2",
  "key36": "5EZMzfxtWSX1iFJtJ3eYdhQ8ansL6p5JATxdGvC3A89A2VTLd84bSHxUmEPqvh6E8wzJ8PrxxGNMjdG4rp2xa7cU",
  "key37": "3oKEtqb3eH1ui6eYHShXK46XxFNp6cFkT4pvHxVXv7FF7AtsYhzLWXPJzVxsnbmeimGZcp3Z9wZHipXZmdjS334Y",
  "key38": "5n8L1XDiphfyaNf9GHYkXU3KtoJbQ3hfC3Td1YgZ1TEdMjE8sC6a6WKRAjVaJWtjgmjzBy8CG91Ekr74qbmT15AM"
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
