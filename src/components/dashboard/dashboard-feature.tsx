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
    "5PkwHqgb3zcNGmmEvwukLPsesamehmZPtpVtbzvooLKujvuhkeFDX5Z4oXoUgoQwu2VRk1yTrC88EjqvemJ7kgJr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42d1GdSSho5zXuZwTA1MCrqRoNq7W5mcFuTeAK66daH7BZoAjpEcLQqf6wkryh8yei1WqRis4HbKzwsHh4dKMkAE",
  "key1": "43YwhUTud4991zfQb7Qm24PEad6PeFY8dX1GAxByHq1VMNcGRig6PR2NutcQe9QAwZkmH6o3fZaRU2ve5vdZiRbu",
  "key2": "5ovWXkRsYAU3pxwMCJqnw3xWDm71DPugmZvZDX5YtFv9hCncZTFnBHuAWc6AALmXfixf2AQt4NzHWcEGJiMkXQso",
  "key3": "4RcSHTRbeU44HxujfxbQiJmhG1Z8Tyq4iPPGYssMoqduqbkiUcUugSx8wfHAR5vwMy9m6SvJbzdGCzWqwozi4e17",
  "key4": "5LzVhyT1mJwGrs8xkLHST3ijS1ftsdN6thb7k6d7swPHhjgSnxtWnmDno4QAVT6i7M4cWStsU91zXiuRe3DNCxi4",
  "key5": "2jQ8ZVfHAWNCrbD7t37185DyHhmdnpCAvuf35sQTVokPXftRAnfWHTwCLx5a9jh5rt5sU2d9pfYhDtZknrk6wSEG",
  "key6": "59Xwn3d16uLPTuQw1g97i4U6KHAkUpEnZr3AifmxVA2Q29qE5xJqswf5k4EHkTQHhFpAXYQpM1kDmaYLFtMQN1E1",
  "key7": "vXXL7yt6KWy3cTNxjLsQP5mVrZcAyBN7c1ckdpnkUH95zWJeY6F49F8HEAUcaRguA7cH1Up399LjmewE1uBL7sk",
  "key8": "5JMHRMoRbWJTaKtcTAxeffGFt8HBgXXmqA2DMaiir68kaoSNMWdumc5USD842NACrAFTYgVbCggekecpYc3ZTnh",
  "key9": "5Voj7fb5BtRVrgo2vFdeoTCyApVdCNU9pBXN2PKihYvuejrMaaKewNJgzdkpKQBJFHwwaCStdkwaorNucuM4y6Pi",
  "key10": "bNbnL4W6miwQm2c49k5xbBAx5YSn21YXC4ZyzDJk7rMj3j9v88k4yuf7yvxsRnUtVdu6xTWKjaeBqbfdM7kNrmT",
  "key11": "47oPhyCvSityieCdKHRj59nwojevXsqXg8H2iD9A7wnNPGviGjx5Ls2BK1rp17QAxaM5NYVbqRAR1GQmnzgH7uAy",
  "key12": "2SJiQ48CW3AETWRsLkCk3dohjw7PfPurQJbdkfEUeUNpqbEM7GrXRjHut6PmneYcxW3aYxeQLdjR1TigdZiWHBqc",
  "key13": "2KNBSS45qN4sr4ZYHWwP69VAKgCkZxxqRHwgxSsLCgAfQ7gPQYJKaNBuGeGem7YG5w78PaVYZhyAt69nLNEdi34N",
  "key14": "5U1LYvMEHRifTc2pXhjRVrGfXEEdD1TUQKZiDQKhc3kdApdMbGXU6UtXV8kYLvzAtGQBEzYHV4GUCnMxhH8YA1xA",
  "key15": "5niJhTTKC6dqZQ7CoQJjg2VRbKREiMsVUYQkxov4qqDHx9xLAgKho7PoMJ5N4VPrjMteZTVcDgLq1BHoE6kBrhvk",
  "key16": "5knC3rprnJEvJMQ3svr2kHDhGR7Xw7nNg37aDmbYnxUtmg8dWQSAHg7WDuAFGFjy8K4QhXWXmGUzcnwkZHhhLPEV",
  "key17": "4eAqJBHBuZcrTr3rZmLdrFog4z15BLAvy94P8eAtwgms3YCj3j1M8yd4MJ5oZw5awK6VeAqeJPFs1YuhNd5bJJtz",
  "key18": "535Y7YssDgUkFg6YEU6g69sUxemsBZ2qpLJdTQwW8QZDLnWCrLCTKFtRuQXBXLEm1ucqjNrRZJzKhUtxD23YyWkc",
  "key19": "3KewbUtV4NMfyaieaoZwYXDfRtGq6nQ6Hr752wWPzDjvf2F1tj2n9RaSaW9f86huJT6aAWQb7Y9b7yWo6ECDc1U8",
  "key20": "qeFKXkR5ugxx88XY5UCyx1eGs5fK7jFRL6Q6SGGXaBWbcoN86goPZYEvFHdWWhumV1nddtHRvptS9ow2BqHR1Tu",
  "key21": "aL4iYCsnDF7KX4LMP6gXS7gcW2VM8vQChWPofgGBXJ9KKUiXbxwAZni9mWy71iAu8a73mW7EmwWQbtXmsTGWyak",
  "key22": "5CZnJkTme4Hmwmd5d5FTzPoMCBEPEE6oCSJ2Ue4c1ibvqHPCQUPEt2mah1kUomPDKYLAQRsiZPWmp5a5Eg6wQ8vP",
  "key23": "sRc1nhVJbdpseVeUNKw9g66qhowucVeVsv8CL7oebNZBnh8WDQA6e9KEghbd7VeD1c17PoWvK5i77p6hBkt2pzi",
  "key24": "5erVF5jH1NMW31RzkEGm6u5xJiRb8Ucqj2mqz8RrvZxxYZ7KUS8BubKEzZczDj9rhBi1jqxjsP1HAzKG9WCRuhoQ",
  "key25": "pu7GGR88TQkMrNXGdBu9HTSN7EdLfsbgt3DrtYtTAT6JMuNYMAn88tftGMY4wAcYFCKe2kt6t3nTKJGRbRnsRny",
  "key26": "5hw5L6zFHd31LnyPWJZttWeJ45Uj4neHyGBkuGcDcyE4f45eMJSqCxPZJwEJhftvszfEcCoTTZN5WnuczJYzgqCY",
  "key27": "vXSiYLuF8bLr4w7BQPhCa7P54PyXrNnFZf41oXkm3XeV1diFbuzXwuQWayPNGFRcSpQFDkyjAEdRsfXqt7YJ2bj",
  "key28": "KEGAVxNtykfaQJFiAVAcTMErNcb6q1ETeEhPgGSBztbSXuYM3QCuRsNc7xorpC3bgwu2FDS38Bz5hrX1J3wzWYg",
  "key29": "5Zyz8dH6qAfnAgLtF7pjp6d2QB3APwWF7SrZEGN1GhHWU27eCSp6GoFFrKhdB1bdZNZNfPZCymm9j59ZF1dMHmyG",
  "key30": "JhJi7JS3HBYrguaqsbM5zVKqt2h1FjRx2BCejQvYBxpTtnLbyrL4YzzrZUKr8v1J42TJnukb1JnKYXrcTYXUsQz",
  "key31": "5vtwFbnJxRM4YSYMALcmET4QAx7V9AgaHsSzJX843unygAj6hotvj81hSxcbJBxdXiMfVDUmpoftL19cYeBPXXvy",
  "key32": "2Jy8WfapqGdmB7Z4VPmTGdS97r5PirNPhwDpUy6wPLxyk2Yg9pb3GbdqcvBmTZXWhBuCDpuKS876WtxGcBwNcpWv",
  "key33": "5wwkD521Y7EpGryc5Hx4WyT79H6s6LjmrG84hhQGQZvaX3SdHDn8EXhnLkn5SYn2HXtsKi74k2oJejfWdw45jmRj",
  "key34": "tMsnGMiS448VGfJmRKnvWyXHehMUeTrxpazB9WXUoEmekrnvCkMmtXfTkxPe8fzgUpcANcDvGCv3FopPyVMjjcm",
  "key35": "MzXxhgdAa41EfwcqHkRbYh21wJBAejobQ4aEe1shHRpJqdTRCoVzj5HVvUTcGdcYGG5NAuX5RmkHp8txK8snxME",
  "key36": "3t7hYqDhRqbrrfmubzgGEbzhEvSQGEKRF6uASGyxtJ5dZkub7cnQjLWAoy2KtViGci7BFe9vAQUCYtUkurmnu3Fg",
  "key37": "29R5bMUoFHJ2HmraJWiyVTxSRP4QzxGuswQjz7g79rErTNp5VHSECJsX8PTHzJqMchHr9MKGKnaL2RRtxzU5kScW",
  "key38": "4gEPLUPUEcwTn9Y5NM54XnrnMBEkXJKBg2ALRJuAaFpsDSvJ9VDZHfaDBpmgLr2i3EfjaWLzTc93Vbi8sxxn83ii",
  "key39": "3R4cq6sqgJpNAiXXb9cBwwkJeVoXreGdat2dPHeQRqLTjCVkTesEGWZDr6uSoPEG69o8hNWZX9pW7GRDbB2WzzuW"
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
