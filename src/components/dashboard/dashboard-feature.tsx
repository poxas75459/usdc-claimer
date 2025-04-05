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
    "2WC55hZriLHYRhQzgdf19GtMcgCrs8GFamkSbMrdiCoEoL1WuDgSmJRjQHqYfvZu5LvASYP78km2iKwbuFMXtw7r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cCndXi4cNbGmwCbpDsGF54NrUAKWG4HhAohrFv6AzM4wZUDsFP3GiGGaoE7zdBKCj4Qf8U5JUdDC2G8sLgC9sTZ",
  "key1": "5fYxkKFVd2MF5LCigGFWde254AQL1MqdkEEuwSZCS2PUuFtsKx864dBWUUqrQujt8JKBY3dbmWkgbcFbhA3maPEm",
  "key2": "2V1y4k9Bpz22W6tiydeVHNUU8yWRdJbHJyZp2aM3vaPY9R1wvicMFgC1imFXooA9JwKM8MyZSDxNbsjoaYwwRdf2",
  "key3": "LF7cUnjtRPTm3hCiiEgqXLkwXbRRV2iziEnGZhvCqkwkuEfXLHNuK5ApxKRahc7YwBFMRmGhkiBcgBFHUxsr16c",
  "key4": "2mXmQU4aZ5AQrHkLkFuk7pbTNcEo9oWSsVeG8KWRnKPtxcooqKo4abMMbSSXoH21oGVZeqJdQmigTLhP7wJtmWH2",
  "key5": "2HnL2SVGspPgassMj7Pnp4WM9vPqK5vj5Cno7wxzUNhb5UNSC8DbvJrpiozhyzWQr9DQG2v9cy3JV7W84bWmsZx7",
  "key6": "48AF6951eVA9KkKT9GNvaffHc3Uf2nLd84Ta1JWgwfKc4ocrudsvoK4CzmGSpUxiougzeu3VKLGTr1YSqe4k5ryE",
  "key7": "4gLMtHxTuPGn3qrjGykzC1PwE1LXAgxWd9JBg9GEA5k5KzecSVWNhdKcJvss4FtKceUehZoEdyqBARVdFD6MnTgA",
  "key8": "48vBkLbXmQNgF43wB7zn4Ae4QspNiPXZdwLhJifQELPLJDJtW7PBJUofxJWjygh4JmRxz6cZWEN36YL3Gm7oRKtm",
  "key9": "3oKZsmzr7EgRTXBL7eM42kCcDLr77f4N7Dqy8ByNkYmeMuiDtbjVKpsHJBpXDPbE7DbrYBoQmdF4EQZGPFVbVa51",
  "key10": "321pnnaq18ajuhhuKKEGpR4U9mo1FjGHzB4LxDz8rHNk1wwxCa2TvAZGVqADhmu2W95igTSkkhXHjQgyKLJL9yss",
  "key11": "3csBL75ntM5zGuodeei6WUanXqfggwXw1ywTEQCYywrBwQk9Kp8UVPA1dVY4r86rANMZiPPpaoanrsMcZyyy6J1D",
  "key12": "4ytj49Jo1H1VgatjmsEbyq3heGLaEZk4GeiNFjYK5bdv7mPhwmkt2RCkyQxkd8jfaQD9PJTWNS1FdBYP29PRT6V6",
  "key13": "5QHE1qFjuKPQvkYX9nG9UoL4Q8ARvGcCcRxebsf4dSAh9ZnqkmzwqVAGrwJrJXVPwzDyGHe2FKSFq5d7PHg3r2xw",
  "key14": "3az7PqGc8MqjKh21sZ5H6sjhTrncpVT2JjCQnjWZbEYUmHHyi6j4JX93mzAAt2XTqN5uXM9F8Jtvgra5q17Cui2s",
  "key15": "6QzeMxfHCvYsCbb7wqPDfPsp9Vv9VafJunwVXYcuJ87kbcmLcJfyuBUvLFPL9pNrJ625HpYTPbChrvuDSUkymUZ",
  "key16": "2FT5LfiRWhPnc6eXtyxZoipCZdZLZJu67v8QxsFKYPCMxzmDeQyZR4cxjtjtNQWWGSA1UAa6Jfk5WmzzZWqSumc4",
  "key17": "4moPLPSZCmZXLx6pE8YxpqgUYfUAyMfVXUPdXCTH5t4sLCvzvrwE4AEyhkRzazpF7Pu52PBnbBebyFq2pbYBc8eu",
  "key18": "4W9VimskQMbLJ7FngkdzqQE67nF5D3kVgrrbCkKskuL8YDNBponmfpyC3s4Hc3KD8QSdpjK84mKjogcgrgzXhjbn",
  "key19": "34g8khZgnZy6KmkkNGLFudfaTySdAC17dVMYE9WiKRsFZvf7UCypr4HYnzb6hZiMNqP4dnVCaFgVTHw5VQ2r31VD",
  "key20": "3QEi5YTM1PsGMkdV6JdhrkbUKd3fbc9TAoKU1h8PEo1JwZShA1VJtDi3kXjzUiATLQsUx1vAsyjWxftygUKpG8EL",
  "key21": "4rfGDMbg3AxLt3X1qi7t9eBJuz9VmKubE8vv8pYnSUCA6tweZUsPvcgmyD8LVJVJKaFBDbH4pey1vEvbw5jsCefC",
  "key22": "2wbdGs8gB4TDh9iyC91u4y5sau2Zh9irr6Jrhwcst4nmgcxE5qnGd8N6a7HKsQ7XCtHzTEwL6doH4y88Z6Dy3mh6",
  "key23": "4z2K8LYgFvKL7EdoGtERKzzKmUKHyKR4F7iW1qLciNjo7mbGUFj6UVYGbvjezbrEuXQn8Phb3UQusjJ5PAwuf1Cg",
  "key24": "4tdrspESEWzURK7p25cPh3VkQyL6jcrEk3Y8wfVhEGb99GnsqYcC8n8LiyVgY6bURKmhwfLgeLk1jEBun4P9eeEy",
  "key25": "3tTHZpM4vw9e5V9E6KYBH7tT6uroUAnBpLNP2KngmSv577LvA4cFQbKSzYkNT8qNmvm4hd58Jgivk2FPdyPwPakf",
  "key26": "4yU8LpJTAg5NQVMN83j2TYHS3mzqPLTnnZpUBucoXJuS9rRnzQosr6K2riAB5s6vsbrEyBQADxecD7SQHAS3v8Py",
  "key27": "2jAUcSF88xyX9XUrzYJ8qLxV21ER4B8E8rBfxzbyktpatkJ4471oSKRyttez78An8aQxxvhyNinceNZzb9ywCLYh",
  "key28": "pJd1v52gMPDJXjRdZirxD3AyPEtgXVLGvojgcrJyzmBYaqq9zrDihyBcQEgLb3J2LaNBgMrTUbcFZr2dhMkKsGX",
  "key29": "dN1SWeTm1LQpki2XCxBwjxpeJmjhH47XbNeDX2qTapEiQtcy2ZEnUYZaqijuupedz5znbW1LXd73ABtKJcrrfmw",
  "key30": "4kGU7pf7p5MDQWEsyXirDbmC1MT63YMgP5gA9bJyjSHo4UpPN36rdDRWZFK3YVDbim3rrLVQMyoXGSF5LLyhyuwm",
  "key31": "5AaxcKwpdjJkbd9VW11xSB5n8k4hm5uca6omgRfZxjEzaxmUqi3E5hs494cU2AhWmuvePbGBUvG3qahax6sMZrfc",
  "key32": "V4z1uiVXtjSMmfTUjyutkN8pBffACh8steDy8PzT6fGcoyXFjwNKJUaNbCJPxH7yHozBdswSJRJem5oa8ZYGsB3",
  "key33": "2HzBs6UgAGbp8TRuJvMRTtGPLT1yxVtsRxdyjD9QbPKyCpR2mpNqcGUF9bwNmWKhyKHu78q4CDkpNUfu37GNXvCz",
  "key34": "21MaVCWRK6F3VZXt9BLKqJLyAYhtg6HcF6fdh8Jbbzu1bxJfvbivELgdoRMQGDaDyrufJAegZ1m4JS3N4AvpQ6gr",
  "key35": "3RX823Trd1VXYPqWpofyTqkyuSDKhQeT29e9f7h4VcrnyVTyFoAtbttsXrwKSeqB5j2AkQHayXNA2jGtd8qGLMPw",
  "key36": "4BWGWiR4jNYe6twzJyw5mmc75jEuLH7wCnu4CkiZGCa2ewF7VtLdmiURzxb3nSnftxB6Dwqcd1JDLtFV4yVaox9n",
  "key37": "4Yvm69KqvUUWP7FnzM4SUMAJ1wHSLpyEKxVKQSujqVjuiV2Sx1JTfVk6Rko3NzpXJGGRzdNcFGBmtXPF9ryEi2HE",
  "key38": "4MGYeU7oisGpAJwJCUkrtHsrzCtTtzBAFfmMMzDXaKJNzh3kmtFsP5tnLnr1XSoVPGaHvXTEp137qdV1XLPc4CL7",
  "key39": "265q5HKZdXsdHQT9dxSXLh1rxwSbny47H41denmG7qSRXwgZG8z23eqkmAiHCuHeSJtzYZ3hLMze1EhtT9AuQ2Mw",
  "key40": "3inuqeNdEeRfWZv1mJUSWpRHuoaigtXUywoQSLvPuyyvkHoyzQidafKzRWiUYr8TxS1r53RNYtUGY7CJwaicubPS",
  "key41": "5sV2HPKayUwK542XVpMagaPyb6F1jwYXkoaE6wZcbddPzLAuycDk52AyxTbuKugVn1tHSDWruihbu6VpxK8Vys4z",
  "key42": "xFUMRFdGkJ9G7ZPA1tTPhhFYUoRKoqVxGxmAypFT8yauuFSiy4D6b4G9FxnUbjf2EwcNXYWUc1xyirC475mR5JH",
  "key43": "2gEhrnhSxXJeKqTphWnWETHrvfhUcpYDuWaRq7VHpYGxVf8WQay8znvy4Vi9kw2T1r7L6gkLMSRsrfZUd27ZGdZ6",
  "key44": "3VnnujcMuHTBGw3Rto9qHBRuwaHLppLvxUgkAfQU4sjFcjjpV8wKMX9icbKrEgNtUv5nu7w8iXY4u3o5LZfnjrmN",
  "key45": "1aHuyKybtBNNj9z4nSfEbomQWTzNV68QvMkhbHjii8obMDAdqk7GNwmv18MnDnwfD1pMsEBZEFezeJxmT6Y66Ye",
  "key46": "aV5eyTGCXLTKrWnfAkGpMDEsrJN8DZsh9EQ2JtN587K2ZKc4iXz2LqTgppcKXMqVjGFJaS1ZuurEANVeA8Avg4c",
  "key47": "5ZDvua9foLLTMRPy3pgXdVujeV5abUre4QvhugzLZTr9TayLQVpTdGVSUXAY5KVBk1GS2zXGKyQWb4JgSaip7PGb"
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
