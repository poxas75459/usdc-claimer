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
    "2xc9zfVsqNgpr2ur4Nyb8pC8mCdLCEE2zgDE6goKbL13AA7EPxWMeE9jt7q61xcMxzXqRNcB9A889XcZqrzES2p7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "j29LhVGxSZCUPnms96yw1yzDHRJ6aHcNxfmLezE1T6jptGxEqrsGGyZGyFZqMGYeExxHS1i3RKzJhq55uCUT1zj",
  "key1": "3iNt97Cc3TQrUSDYKXQRkj8S9bHCYUExadcV3ocZNaB1ay6DT5HYoUZ4u78g1etU12y26fTfq1NKfoLtBrG2B1ix",
  "key2": "346A6s96QAk34DQcqjF335XV696AsaqXNX2WxYb5DzKfEVGtLLRPR5ivSHCBf5kkuDQDYByESnPXRfPz99iKxJrj",
  "key3": "3EmUT9HAN4iCYeVj3XoGhgfHtbZ5rDMaxPqVXK26nifWgTDpzHsHuviRgz342JuMF7yLxTi7d4fw8UUPNwBRQrHW",
  "key4": "aLg6JXu4gD9At7k6rHYqiJ3zHJUQatq3hFdh6XSzWTepUJUA83C1wt4uxUTX1kFrTDTs6focpVvc6GMgCgufR7k",
  "key5": "2h45NFgoESXXRAiVM9vvzJWpPcR6GEr2Gjveb4H8DS25aP7YPaqDaZuj7rqs8p5CEABc6TVw523jBrXYnq7Aoypk",
  "key6": "5X9eGFmSgubYbSUpcBhtb6kR96PoouzEUZwFwdFqTuuiHxJvPM2Q119j8tmfvSneMjwXK6MyjwZCnU3EHPaZoZqq",
  "key7": "9sAoQMv1sjAdn2RWbY95BL7RDcmDcfFgQvgp7Umaas3fDTYuV17e1NRATsX2PH9YrqhiS9bpeZmwwTz1JRNSRWW",
  "key8": "4CxTKwzJASwExe48ZD5AsVgYBo3fWCZCMfuJXEn3MQvQHAb2qu5vYq7fgSPK69geVwZ1YzWSJtrKHBiPw4tnJhHQ",
  "key9": "4j12JvYQUpMywJZku8miiUaU3xjDHSks5AtYE5ndQL6DFRaNytLWvfZfowF8arSg8NduTFp5PNdgKNFffvH4YEwR",
  "key10": "GDGE5LooaHK3nqxyoNweWpVvWKTLGmcez3c5fDKWfQ11dmR546ohD5SeecJusPaVhdq31JUyaGt85mvGqKRaqVZ",
  "key11": "3yiC2JRW2VdXyhMJztqQ1rwk45L6mFdE5wC2wZvAR9Hiy9aLDvwEmBjpb3MJKR3B4itndc8q5U16EZp2jB3ZvfYY",
  "key12": "3atS1zT4Jw355k8EkbTwvHGPY3ucUW9SqEnCDc88W26FG54U8dfJQVa5WRx9257cKdWoPxmqDabPUhy7XNHVFxYq",
  "key13": "3L8pySet2K8nzV3W4Eoa4SLU7K6WATgKXjTiKYL3d18xyuSCqkB6CpYudvuRbC1u7iu3m26qisMqPLYFX14ihhN5",
  "key14": "4rvdJhdJEFEN16p934j7fhaCprSgRtC5HkpA9bLdiQcgK4ZnnkDwNyEEZMXorxYbCYnBM51ymZXBzU3Ynzv1CuNt",
  "key15": "42V37UET1tzdm1RGLcV45ttNxz6SGoJdq3Gi3Kd8r2D4yvVfAYM7u2jWaEdKkn8coomKTuPZmgu4XL2Rz4SmfgTC",
  "key16": "5sW23v35udewjNGPxR9MMe4RLBfQyoJ5aEZrCkLMVb2X8eF4CQ5fovXi9SKqhGQdX9tBhJiYWuoFJsMYuuKfpXCZ",
  "key17": "4bi2EuWPdsxiAAn5nYD7zDuzQ4Ce6RCUTd2E7GCmmGZsdJT9B79xc8qQuXktCZqGGSPnmM1i5uxnYBoVkJPPCRzq",
  "key18": "4ToES8UQPN6LdKMFVYjXPsJcNueuhhqghj9KUEpT77KVSbnQo9fFyHNN9AaBS7FCM1dDx1Uwo2YbBuM2zhmW2gYr",
  "key19": "3w87fFRMJAHfPJeQZKygS6M2bHFKgq1bVhtq5UBdcVAsGrUn2R17K1Gp6jsTftXN9m7N2MpdDiDqH5NaVGJGdhrG",
  "key20": "5jqAPzSVHWjUwHgrP72hN7H1CefvXFDrh2RKpJiXTHrB1R46aBFKFUAWeJmSd1KDss4Xq1Hk9auuTJTqyG9rtP3J",
  "key21": "2afCUJY9PLdQasz2R6pSUNTQKxnsMHUNKzs8tJDwEss79Wi7yTS7LzC5E6hiyyUqRTZWd6BKr4ciTyHmsndqkGoQ",
  "key22": "57bNQaeCMDwqkdak1c7ap13WBwW7v5aPSrKNCMXuL61su3UuFvU8L6xf7Xr1cj5KXQafaVHGDgf7GhkyjjMjKzeK",
  "key23": "4yw5yAjeksphfyZXpekHHFXKrGL3GNxUfhnwbWNV4GWeNd6Ny25qnUxRj8fvgX76t6frpnqowJW71uadiDSXeQmC",
  "key24": "BXut5Kr5PzFhAUFme8T1TyWzaho8LaZkREMQqtUmW7M3R491VjoUuVy34wrcgfugBDa8Y9ckkTRnzUDeMMSAzLQ",
  "key25": "3kcnkD5pmofNbVMy6jhWpgpvrwy8TJR7wsLoyWVeQVmQtDjmLfy6VFQrLR5RgZ26anEhVCduU4oerVYmQyTzWd2p",
  "key26": "G3CfpDUVptQCTjaBSEUpKCTewHm41tB3qWwA8tPY4dt8Mvy9yyqt1ZsU1T46NoLofQTPdEB7h74mRtAua7a4brG",
  "key27": "4JmsXrZGuYYxPDVb4JYy3FkLZNMRv3SMgTUFoi5YCRP3ooSmvmmafmT5uAnVAzHTxpBH8ytciX6smyBHTtSrDk7B",
  "key28": "2PPxbqpsrLXKc9muwyxADGyxaJdk4QpDQQRCZaEwix5g7k2tu3k32PVJt5LRZFmy6kiCut2d643VLDFm3cbNhCC8",
  "key29": "AK7iJ8Jcvf8g5cVm3Syi6mTDnKyc4xxD6soyNwiz8ehPxK8SqwxojvyCHAzMu3QAwXqeZoB9JjE1NUN5icNzxoZ",
  "key30": "3NuoWbkpDimMsGmTkFM7SEhWnvoeX1678foiUbD7uM58KfzPKwNHgEQVatbdP9S6k8Rxfmts4hWHwnbXasPiyVoN",
  "key31": "4MVF8dZC7HRkp47emssMe9PufdvnJrQ5D9jDvvbEo5BJdKxLmKQzNuHQxDCcxkFdzFSCQgLWRFBCuuMbzwSiEaJV",
  "key32": "5d174gZPLcg7SrHrYHYeAuaWiYfhcB5FH1yxgGWJVBBToFuiGy6eQgvK8ZCJryfBjnXhCMGbkchPUxwknoh892rk",
  "key33": "2fqFnfFrkq6EArGa6qxzwiFxi5BWPLqsjQzNKugERgNUow4TX1QP1z3dhYRdLRereWLhc4iMBPvuvyeWMsoL256N",
  "key34": "9zxQjQPmQtpK7AuU7LF4LEaDjJwWK5Qg2LFzCpCaquxzwYjWzSSP9QTFmkQhisbAKyXdN4mHtuNLyiyG67kEFR9",
  "key35": "3KUqr7N1o8BUUvq2Kd517PPHHGfdcT7tSm1KfRnUrEmmzavaDurk3w1PAc3YXW7Zed3kV4fBMQQkACUFJBH6kF8b",
  "key36": "2QvjQndWArhKbdZphKwQn381PaAgbRii5DBri3WomNTqrtuRV3TJzoFYdTsXBcCoyTZ4FaCJKxzga88S4ViwL7Fm",
  "key37": "2GxHb2Vy9dtq51r196PxdZxN46W7DzMJdvMgu7v99nbZv43PGwVXKFmZaswzAbosbYDWckhKsFqrHQGy7D4Vma9V",
  "key38": "2mMYB59TfA81Cz4oHeDK8wZwaoZwrUiDVu1m5aa2vPT2wNEa5PNwhGckKtCBMAWSyYvn8XEqs74FJSeH9iwiwysr",
  "key39": "26B22BKCuGursumN47wytaw9KaNBdkm17z4NWk8WxKGKe6uy8JebeoaR86PML3QBPjRLwiQeyZT8phstg78ozJXr",
  "key40": "4B6bWwEyyVNmmR9dkcpienT1h7TYQ54YGPst5yCo18SN36muxFbeFhBoeYTQdomUc1QdFJfQtgTgnHuMCj3FcVKS"
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
