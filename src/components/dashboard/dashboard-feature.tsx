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
    "4hFESpRqyPS4eb5VwC34tBhapYubKE2zjExWtVAPnkZvxvdv4GHv3dga11Ayv32oVFGE8cr83kdLqJs2qCjawfhi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hr4WYYJnZy3iGXbw3L6H2bFzxj8PBcNbUpr8eHcztRswgi9aBn93iK6gmNWn1bVixb4BE6gy6gknzanR9fuDATA",
  "key1": "NYrr3i6Hu7U2gxyv4ehVDH994vhC8gkrwh8wCHszFHFupPeg5jusYi1M5SiG88wMpvmcbdCQr3uqqUL7T9dWWXy",
  "key2": "4yz5FeGzjo9aVKSdkptZJt2h46TRfJ2T4wG9nq5KDk9WhssTT31r346aPvkXsxByYvFtvWcDwNBeRwmG8kwXjpw8",
  "key3": "GMPzfKVzGHiot1VtRbBgYWtpSiEVPF3ypxVCXro6Bxx3z5oWaHRhb4igQhtD3VsTSEM48TcwfuLppwiCUhvXK1v",
  "key4": "Apo3ZzcGXjwEMiWLX7XWZ5LLrR4mmGDCm9JKqmk8Hsdi5QQLeYhtzMsQFLXfyTqxxmfGELQVzcxokBi9RdWbZkD",
  "key5": "5jc6iejWp8upy2k6Xc8zBn86pFuL3uvJDu8WeuGT1x9V2aojVyYMW32jGQfsHCaXiuV2Dj9yKz9PPYfJYU8cEFTo",
  "key6": "iPZRMnsfbXdooKbkwrN7G236oeQ1JiHyybmYw43yLhCXtN2HczfJwJMSQUbr3HdYhETJ13ARYq6yL4hAWYP12xg",
  "key7": "4VdPRM4kByeC3b7ZKmreVKjrfvVM8y5YbDzJbib3NftzezUbjJ1DjJoUE3ePWzd6PzAHG7BdTPiYN8m9Mj8MPBYx",
  "key8": "5wcQe9w6oxi9tZ5rqQz5TsAkaA5p4gw54K8FxurLVwGr5ZyqJFzQrmtFcVE7ZW4Hu8kvz6Z9gSt1ELZesALYbzHS",
  "key9": "64kyAuxSGfyQs4KXofsoEE5sycHw6mFhkAfhsXVbek1zNeVpJoJh6MqMaoiFAyrgF8twoPLAfA1wzDtQVYGj4Vr",
  "key10": "4ZqPVKu7qfcgKXTQyHnUXxHC1sNsY3yGdGuxcRtrYcaz2AjstrZBcW8vtMtnD1spCtnVXQimHfPcCneHwijBaoCK",
  "key11": "HEUMDY5BRjqRvjc2VSv1fnAVkxiWhJWPj3hEupxuUmopY8qbb296wTkTm2VwXUVyj7gkAxWLQVQ3u2jR7yWbHdG",
  "key12": "4Y1szLSJpuSxtUzR7ZdT7E4YC5WCYq6V8BPbhSRW7VuCLKLEdVtzKbe7Ug3xuUR7DHS4WiA5eGbDfuMAHHeQaqFf",
  "key13": "L3nF3ZXgFqHGiRfLEEctnsvVSAPmSVxXMGbC3z1N6qdaSjyCRJhufTyKEM8Jks4Hx4i9LuwnVGaxykcxRTHXCVk",
  "key14": "5bG7QreWk1HGGp1s4stLZv1BmqJ6U2eLpcKFxD5gHweXSFucYh2VJdcDR6ez7omCsksEbrjcudt8TWn9rM68fvZr",
  "key15": "55vp4emkLUQqSLz6JM4VdtdVTBgG884x6LKjLz7Eb5TAr13yLZHnGYqZ8CEXHuKFbKMpgwwrnXVMTLYHXcJ87pgv",
  "key16": "2bmAp53y9UA9K4c45iP1pdnzPMS5FqDEuewZHE6RAHvEymSjdhRzn1eFcWLnihrnN5cvGaL7DYgNL7DBRw67j8Gp",
  "key17": "ymDMvGNmF9yGvZu9YhkS8oQRH3zgRdg72xiVMHynMafmm9aDpVcYpfhkzL5qvwaF4Q2C19RG9mBXVHZH5PKKNxb",
  "key18": "4rEH8b8soU9G5gksCnRf3CYHUa3CFRUYxy9SB9i4x6MaegPNMBkumhhgXCi5Wboiry3DtnuSMLDRNHu2SH2Qpuj7",
  "key19": "451LeuCPEayLxM8hYHfXgNHe8G9iobPmC6fb1VY27ff2Z9p9hWFgVHZpxvCMFzV77p5DKz8D3Mv4jbYJrGngiTr",
  "key20": "cWrUuc7yfUhvWUidQvfpQTrKuzNvT7uxe4hfbLPmtLLvrNRAc5FWyRT4CkSk8EaNwsBoiuurVVD5UovLW9Ljg2W",
  "key21": "32NqJhyHvC7z6VQe2irT6q8g2dw5YDbiH5g3V7RWbLk3Nb17AxU3EcifrwdfWgSmotiNhPaUEZXCVx3qm8AGkSyh",
  "key22": "3ukGJcBK7aLcQo7zQ65C1sxgd6km5Sc6bxj4NebhVwddhvQEwyXKZuP7jL1pJ2V5fRmAnzq8TRh49zsJTe5M7dQq",
  "key23": "4tCZyTAFaU1JmkCnr7XAXpzX7XPNfMhwVgdgZHF5NJGojisT9JpnrKgzrzjCMjMfdmFPTiBLZW3BUQo6kZP1Y9Th",
  "key24": "4mJQWwoY9Ww1sViF341jFzkmibYNF5KvUePwFxZdjaoEhzWqsHftwC6m3JFDkeRXK589x4SacNJC4MdhsKFXJQKg",
  "key25": "44EAq25HENB34zhRqJ9StrQxzz55JuYabcbPs3ZS6M8ChYzWRwtV7uCk2kqfwtyYro6bK3KmNVYVx5k8EowXCFm8",
  "key26": "JKQBYZuGCf8gudaTPfBZpUMBMdA9x2axxP3Q1YKa6AUq3kknszzmKPeKGQsjJc2StNWCWQkH3gwrLB6AgQcfBPC",
  "key27": "5WP3ZaD1mwHCrBzMS8D3Dz5oYh2cyo3hFoihBVoMwJqcd8UNsj43Pq21HogJHQj9KbR6wtLo4kRTfvdyvE3hVfoA",
  "key28": "4F6neJxwLehQ56h1NSCEcfTR9K67TravLktBwnSgbg4cFUd6fFE6eyzVEqkheBpXiPWyuCJmDKu2PceACBo8tvBM",
  "key29": "64mUDrmx4YPFppKwYAjPVJusnadngn3nA1Gng4aohrD3sNmmNvtC7YCRNoMA59FbRaEtee9wuzT5K6Jm7LcJSeLp",
  "key30": "2oWbLYV9mfKWCMK4EciY6jvyXDBoeVvdTJq2J2hNLZL2wkhuNHjqkTqb4jQeSa7LMfoEfLikQba1qmACpWHpiaxR",
  "key31": "5TXo6Ph3aSNXHsQUhEKsQ7799NG39JEeGGtBAT5r7HpFuMmx3TAUZDCx83f2CiawwTWZB14idqvcCUvMbtg81j8M",
  "key32": "4MxcDE39dooPp3RxgxDQQBD3awfPQJrKKDfLnpUtaEQpM57sTGWsyvDTWfKiNsyUqG2vuG1VLHnMp9HXCXsacYjb",
  "key33": "26seinCBQk5Nvrt3vXUTFgJVXKjpBgM99rwGK4hA6pYSSGjaECDD6H7yLde6AqDzsxpYb2jWxdUa38YjxxTYQLzi",
  "key34": "5SaUaSfgoZWxEt9cSYohUPqZUSPRuZuWGsU8AX8xjWYgWofRmzMnc4W8rUsFjVhb1ad85XiLjt11mqUH5E9tfy5t",
  "key35": "GKQmUYQYEdqNEZ3KhmxxoFRnXm32X6uviqVDVAyjC4k8aDXn9QRCuccy6ZLa3VFanK5xBnWLghf9ahueN9X6GLd"
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
