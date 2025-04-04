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
    "45UgeB3TQxSjPdQgW62r8VAbYdqhE9rnpNdZL9GxcEwqpSxXZNMnScFD2Mqpmx89kzCQe7262YYNkwCzzMnPRbdp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24g2NvGQ6FfDn4FRtMAuf6yDCEYb1bonJve48aT6ru43tKC5B96YWQHX3dpnF377kdTVJjLjEdC6Lx4Wmym45N7G",
  "key1": "SkozLTkr3DEfbjkFqQWKVPSGdCxUAW2bw3S3FwQzPsEVqt2TXZj6CaUK9VK4hBeW99CP1ZTPR88xNX4AVctBKbb",
  "key2": "4gapxm3n93TZ7faTsU6jPSxjE7uBvnDStCdiT1CWWfitu71c1G6PRCt4MUNPpeqDQWLoUixxxMuFdU8xuEBrgwV7",
  "key3": "2ZQUhCN4QJLSSFZBrmzmFADcxCUeJ6Ne9oJSXXhuyJgvLUwvTKMgQWuS2Ss3GNK6JVwFadNRJmvb4NFV2CabLz4s",
  "key4": "37V9EYZQ8ZzUN4QhH6bNHctaKi9raC4BtHMiwxME8YZ8G1y7x3oph1Ln2X2BLiDKtqNqP2BXrVX73XrydCMDBaep",
  "key5": "2pEZJZzXLoZ1GWzTzEhV7Q2VtjJQGm8acxpnn8T1YZifey9KCuQH4MrakXjfxi3XnwwCemd82cTgmfGRaq5ukefn",
  "key6": "4ezUzdhUir7FyAQik46wZUPzkoH1ooDpoQHGq2VHRZRj2uRyGBNNKuSLAHoEFEDV9Q4FjPo9QYeefR1VVCnYGWkS",
  "key7": "638ge5ySfCXjkjm9LcQbkxbbFcSxGkbvetnNtP1s7JEWNfeuBVjpx2rxeYbkHVTsRaDqRNNz5Pwmd1q9HuABiCaW",
  "key8": "4W52VsadvUJsfSZ55qVPnVGr8VAasTL7TGgEK2UidZCmDqN8mQXWpzwfvmVfmW6FRob8iTCzaBayX1gsVYUiv93x",
  "key9": "3UbCeYMrvpdZCWWNKLmbnbEyrodYTGPpe1WLJQqvwpredZZHTL4aYBbS7SroQLrJFPmP8atpFjVzVxygcKQU74Xg",
  "key10": "2rCpmoBXsB8wDdHK2gBFVg9gyK3CTYexXnKAqDwpfSaTfLf6rhXRXUxH5YSHvsd9NbFaTGy436kwckpzrLG7TP1B",
  "key11": "4ExPNwZMR1hsQMfmpL6T3rzWwqPoMFV4mncrtzNrhpQNn7kVo8tooDBh8a4fewexKTW6qSLcZAuRqAi1ZtpLsUgf",
  "key12": "58wJfHcH2UxkvNmd3i7oCTTSb49JGBv5MfjM7bZE7xfGt2B44wysbFKXuyEwbcD77zdcvyUFM3XGskSSN1SRQrLC",
  "key13": "4UeWMy8UM8YKsAFZJt18rYAubmswoeoJYx8mHUSKbeMPHUtTF48qcowimyNKGH2WdLvHUGD1NC6gMNuGh8q5N9M",
  "key14": "Z1CqxSbcNxLykTvRyrqtfAZTCpHtUTDxjZ5RjXnLfMhU7wJz2DqvsqNJqN7zzScgT3oQuBbZYeQyCuFMJ15jQXT",
  "key15": "2QTeJ4rwNgpDNrpWSD74psjKjs4sd6mStQbZeW3LUq4JtGCj5kBWAprAtWxV3ZktWURrgZmvGXysaxDo7AUBBcEp",
  "key16": "47cRrgtJcRXGTYHTHx4NbD86MP4r2YNaECURLyijDfg894CH1W3q1hEew2pXC7yuT9PUqoUUNoQXwzx8WP1CZWup",
  "key17": "32iaXEwvqTk5ELcBdRXJCMpE6apeq2Eugkd9RmnDWwq8njES5RQovdCLUTQqXQa77UocuxCsJ8VgvEgHkMDn9BmF",
  "key18": "5odLCyHJiadvVwDBRuURqPadxCm2cyuQia8E5WnZMbiNkg9yVLZA36TNWwyy5wUFBjjC71XF3u6bFMU9vFbuLv1N",
  "key19": "4kQ12viNSwi5qRqyc6fM9PNniNcgz6rsee1HCUTGjtMwjNvxqYgP6LqtAAhzkRsbL828piQEszYAupDQ35LgRor2",
  "key20": "5qe3RSPR44kaqpnq7g9hvZdpfh58AQHcBtF7NNKzQUxQaLksWdgdafcmFr1mJBs5aWewgWb3pstC1DDDYBeJZNbE",
  "key21": "2tFNuesf2SR4apQAVUhcB7mMQHgCpRVovAcKtyf6fCQc6FZCUrCqiDrDBtLfKkgUatZpUsNp7CAWgo3sgPSBpDtf",
  "key22": "2BEYf38u17veTiLqAnz7VWP93Wr2KzJBurmoYrHER4ArdYTLA8fVWiZcCV6hrtUz3BYxh4edEADkQebTsc4KErvZ",
  "key23": "4thAt63TacgcKxBH5eGvKKcfUxJijqg3gzxeSZVLqNB9ZEgVMwfPguJ6pBF4mrrYxPaQDArDWnCkBKkJvVCsufDJ",
  "key24": "4ayPijdBkNELz8UKZZvdS72KMSedDurU7bpsSbhow9EFDCkw7yUbisNgtRX6QHwGYRFFmUUdhVfcvsRcevi9fYm8",
  "key25": "22aQbhikJFjW3jwTqAnBFFWcDDpwsp6LDYeMnA5hKFfS7ahgiu49MBo15Z2hKJnX5JHxdSVdS4ScmFrgD5eDuyBA",
  "key26": "33S67eqDqrrf524TMCVoF5PCDs8AXUAwmdLpkPvwhCDBL6AnyPQT46XjY9DPRoSw8wdWn4wJEQwMe35D25i9rzNy",
  "key27": "3k69QqHHNGrrWgPxPLFssufWUZ7GQULHRBgvZYU54oAxCMAwDDN67zux4koLpcogMZwdi5jUbG57GMhjUN6G1pjZ",
  "key28": "5f4urvuWfYfd2ujHQsqDcnHDUp2nxLj8HLbJP4iSqHbQw6WkkDPYKQB9dbVE7MAujv6ZS86vBCMRRqbBaNBxvpqY",
  "key29": "zbgdNLiSwAKYqHY9sfvrLaFfD9xVXAhhnCoMe9n6C9G4t2hU3t6VXe3zQpKbagE72AfXbVXUZUXGFsAvGzud1Zv",
  "key30": "5p9uas6dHzian7FqmwQPLsWcBmVqAHL4ZnAcVnJqb4iQscEHGy8tXtXq11SPYiLEMGuQUdPsJRoFXcWGajAbVK4Y",
  "key31": "2RwC6pygEdCoqyKqBxTgoH1rENBdPRCexEt7MgmsrUPTvtrRpRQmcdafnEEWrGZxis1bZxtQ8SvS76fURLWGDTT2",
  "key32": "5T7gtYmzUe2XAg1HsiujxeJ7MQU59SKqaxMcBSYqz3nyHcik1F3HPLMrZuJJvWSGYySiNvK57QAnrReiRSzohTbU",
  "key33": "59CLqFcLKZoCdz7G6uJePHDRtrUZvZLFhu7z9x7qPqugTATvp8hWNAHyknXDnSLNDeXp79gNRtBvUYdK2vXpY9Ys",
  "key34": "4mWD6zT3gZXmRs19r2Dnq6DrKuVcc9Z7vSZrMGsF97xTq8RZipHkmH8szVbb9o1Nx64L1jKZVx2AqHMZ2TrYhSgk",
  "key35": "38BRYDG5HQPSrkpLzngaikZXTP4wC8e7Upo5ofziATiShkbTw9g5FUESq2cFjbPD6YH27oBRgCw2JVnDMzAq9Jzh",
  "key36": "65MzaFJRYHvvuNXQGxjpog9Rtw2rxVRhThnB9GkYNxMCst8gELwvTwsr6mPVNCY5EdP79uDP4ERnjCjPu1RqTG2V",
  "key37": "3HSf4Yru8QgmnwLSQsZN8yVwHDLsB6LHEjpdm44XejgQQXNHr5WP6SDvgxGjtz8Ap9V18btt6cnutjE8u3ECgchf",
  "key38": "22nkAcNWUFbCDCaBdnMhVZQBGJSAC7VFcRUmgwWFnct88nLVQnsXxz8uvujcNHrRfuXMDSFsqcYv1qpg3QGHe8Yt",
  "key39": "3p8fwAjUT25iTD9k9BiAwtu4LmcTgKVn62vfmHasKgK7k1d3Lt3x8TqToHi7r8YqkkAV5WKzouXJBb4wQW6mHdrk",
  "key40": "53CzWHRkrn4xEyLND5nFMpnBycKXwo2QpcMG63NCRBqGoHEzdPypFhMZoNVrnwzaSoFXGNFuNafZBVKFHFMGaZvL",
  "key41": "3X3uwubwiPQ4NcGSBkqcT881N1bZbU6rS8kuSb44MQgDNWQZBekkLkjXDhfrXwQ3FbnAJdtSTskx46rqAQHop6Qg",
  "key42": "3s3VCMMAhENVaBC6zDSjXzJpkTeipF9Qfds9pwrADFyG7b3Ayjkt8NybQ8xeRxqJFWuMaXdq8CW2FRJVP2dfoycM",
  "key43": "3eQmw5RCGpAmn2CkTskZaPZpSphW4XbpULbxokfQMNkcZr37sacuAGzwwEn3gnfcegK8TRKujAm4p6iuqqGFjpnn",
  "key44": "5nBiDPyLLXGYqcJipXMA8jSg8TfWQHoypWrTu9RYaDtge1AbJWTWwpPjrjvfs4jou5g55CBkRCpJBHPb17B79sHz",
  "key45": "2EhX94i8objRzA7hQ41o32BVQmmsdrSJ4CnQswtFpefDQ6efWRdXLriRX8vdDWWxNG8gpgSsowBWPDL9zaVP3N5",
  "key46": "hex5fLDMLQpZ1CqmcbcFfJkFFTQbwLBCjqFLjNM5exth4kebSG4HzzNayfnW6raKSyUicmA8NZ4hngXi2vh61fZ"
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
