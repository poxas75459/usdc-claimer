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
    "3HKBckkwYtc4Kmj8oEmFyBnRdNAQLwaiic4VoUXEbowtPimWSBQEfy4QjorgZc56VscwgvhbGfiXy944QMHtAcQs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2T8Wq3FA4nd9EADZprteLnmhCL3fyyvA7z6SmbH4BDE51jDhhFj3fviYERxLRbhc6NLpZMYsCQ3N786ZUh5uxQtW",
  "key1": "25jD9671mdYtcXrq6DqQBnk5JT6gUCseDDeop6a6CK7qNsC5ZAiMsiSNqv73fL8TkmZWKCRb1B6XddqYWu8a58WX",
  "key2": "5eFfZoRsUi99sEsMcLt1C9nVgW8tCTvt1fZEfAKJKpKCs2SScTAPK3ZaqyVFWyHmqbZjczZqabyJ8bCZUSqTtnVE",
  "key3": "5Q7iyyJRtvYUsPS2a61avB19BMoyVdZDPnjNco1n3bpjrQ1e9mujyq3tFaQ1fXoNRJonWDZ12bNSNKfm7taGJLR",
  "key4": "3FvsfepeBGfWHQgUuuUtG7ubcRgoaXaNvBbvvrb78wy9yicAZpwK9J7wPqD8xdcAwHbXVCc64u56cntn34WsGWSh",
  "key5": "3qXkG1p37spGBM7TEAbmEJVfP6sUP6LALjKPtFQucFsitzzrq1RmEYHUKQBroMa2nL8up3oh9G5YxvroWCGxPnCC",
  "key6": "3LpConxi3U4G1P4gjVsbFbKUGrhNz4sgPtMtoZUiF9Z4WX4teMX1hSy4rgkd98XVNxe63eEQURBP7QFBgBg743Zr",
  "key7": "4wrcFa4dWaes9hKCU1JKqwqaPjfmKorqzDvuXLYAGbK5vXRcbimAqtRXwy9k487dU44ARk2ttawiLtmmWcsCF3p3",
  "key8": "5tzcVZR2RZPhYdd8zkNKkAM2x6zcx1Hj145HNwxvYqG4Qhymj9h83oGAF4kFZBoNmHdEa2sBZmjVT1VxdggpumYE",
  "key9": "43NNLNXfMzpFD7C3zQz5XnF4g4F3bX5pU3xnbyinHuWhFtaewkqWs4TpoiRorzPYksmHobib9ZGWjBKhw7A2Gg7P",
  "key10": "5RWLaXsdQJVxEXMDDuNrm1kbJsLdrYSVDVB1SiU7m6n4RhojEkCCHQaL8ivA8SFvt1CqCRpWXoskXFjWH8mT4DSR",
  "key11": "2unPSmXDWDwSWZyrAjmNUt3w7bfCSSYxbQ1qMxb8jrieBAYS1x6cotEHp5AxAPPFK2gNMnSHQCEFaoRmhSqpw3N9",
  "key12": "4ErKBhRz8qiSdvD4zb9fahAXJtNaTLK6Yk4UtzEBtoNWKiDVCRZoVMskZYiT4XQ1T5SRa7atMiLZvoXM75xzqHbh",
  "key13": "iDxi6HNoK4gTPQakpdu35YJvjvnduspB5v5WBhitn4BvpDxqsiQLFZdHiaazyADL3TKXtBV1sAMCAdZhvQoUriz",
  "key14": "pRAiZetDDXodYrFCNCpK4s9eUk9EiBtdKaN7APxJyYKQdUsZxmb95GFJRz6CkFpULAr1YrNfW9PxqbDXNFmWYSu",
  "key15": "4Vc7yKYvfTYXhU2TYNmbT62L6reb6jtYFQhVqQdPxySwSDqjP9qx36pues3KQFY2DENQ9sw4349qW4Gb4JwKxbQq",
  "key16": "5276pUD6iEbwPpsYhRFNjAUV1XPM4XKk99YWmiHNpBvJM7ZAYKU3MSy6rJCDYQJh92WnEZrUzhtHy6U7TPTiQEoo",
  "key17": "3mfjVsHMmZsm8ua9J79BxvVKtmcH5yeJH8wE1WBNnyvjSxnSagwDAbC8csCpBxRB5HbiHrBTxrR1ynukegyVj9Q7",
  "key18": "2VRyzJiUkPzpDUCvKGiCBv3AhgRETWKyG2gH4CkKCxgMoncz6wJqaKA8cmL4MLQeWLUKfkf2KGd7ikLA2WHDA7xJ",
  "key19": "4D5thSq85gMnzwCPZbSdbomAnqKXPxYE8DXj6i5XbZPh36fBrWsZajUsnEjGAhfunKRB8xEsE9DRDEqm2BN9GA2g",
  "key20": "5xbdvtcTXCPHEET2TcBTLayvbdWTPaFuUeb1UihMmxUhFxgTKQgJM8saRRqYmfVpmUJwBy7AEQxmZqrfufdDtVK5",
  "key21": "2RsCiyM4UcXq8QpQdf2yAwRgnZsqT99rVEnhCMiNU2tD2Zto4vLDHbEhtchKyKXPrCcYzRLztckHFMUp7rDsZHba",
  "key22": "5nPDip1GX9ooUpPaYg6SMYtM5fS2brYwfWxCWFZZ62SERjcfcrvBxkPdWzr16NgdN4oGtNh871kd4k8CLFvuGvRF",
  "key23": "mgVhTBDd1hdEp8JduZfQNRUDj6oXn9w6etD4eB75kZCGSs5j6mynWmWRvsAiHt4NHmNQmbzLzFH5s6NH1nGarCW",
  "key24": "2RqGAECJ3Wx8NnqXJ7NFhzL9j9y9rbdimZSZwJTwWazAfwBYEUcX5mkh7owRH8wCGmvYNR5nfeEAsgmcC5uqq7bN",
  "key25": "5B81GoLsDMmynoNCpqpcPNBqfTYqoY6jGWWCnUWdbwKjd4Tz7E2WEcKjDb6TZKrzYRUx2tE6npCEYBkJbFy4tRDo",
  "key26": "5o7E8nV1uXpE4CLj8DiA8EnBZFFoiVnte9fUzGHC3qLAPWBXkK6MQtrPqEoZbCwFyNxg4axvBt2bHtjG9oo7xheF",
  "key27": "7wFJpAZe6ZFrXVp72rLugpbfLPX5MTMEU211Y7oKG6ycz2KGDdVZD2ykykQZbq8RBG7LDBXCoGCG1UXBZCeokXe",
  "key28": "4HEpVacviUUhFqbR3AAdGPXiaQXxFNVqk7YQKs7hLRJiSSJjgtEJLsirHaRheth1F5rB5fFUtG8cNckw5m9o6CQ1",
  "key29": "5LLGdBm67fBSr24fEjicgRR7VER4dmRsEf497k7mu2yCdPyescCSxp5CE3nNF6reUMCoES2pACu25wMVJsPJtfT2",
  "key30": "4t2CeC2G9dungryecvi41gKYtMwkExNhvpwijgGtoUk8pA7snhhdshm1VV7FWaZZYdTJjZfMF9sspAzajW8bbZeE",
  "key31": "2icuySSHi7GyTfQNhYkuWuUMDm8HT1cSEtEzLyiYnq8B9k9iFLm8663gkCCmSkRaj7u9J8UeS4wy1dBERpZvSqYA",
  "key32": "2GLxXB6gHuuHGm61kwVEeyQmqdiZoMVmRtrGCFY7Cy9EJfvPkggz8Aj4b9KKSKTbNFsaGke5NeQdLSAJmr5qqtyG"
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
