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
    "5fKG7iU8ZmNKe24AzXTSETDTcsF5aNaQ98XoKx4GkPXSHggjFERnrfL9SfxYQ9GNArSjAScdBDpdi6415XBGQTQ3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UxHj7yMadY2q3NqncgT93mnLvPfooTT8yVdTV51MRSAAmQcjLEBr7CcdQshqwr9VWKWC1f5HMmrzgPDT5uhpcoY",
  "key1": "4eukUMuSTbn7z84yUarVXtc9qJYfc3KU3m1YpE79jrzEZaQ17wCQAPgirg3njm7SX6mYQiMZy2HWBafADunJix3V",
  "key2": "4pNghhjXPBxiHGboeAfYK21pF7ApZ8G7PvWDySczfP7mFbHijNtT85jmyo7dZsHSw9znVxEyhU1qoFZAW7Nyjmbp",
  "key3": "NWPVrGFjLp2dcUeCDuPori6C9dvLdE7kTW29tHoGKutPc8sJzREnyHPCxWv7tQwiUh5pTHb4aM2bS1LpsP6FCJR",
  "key4": "S2qPE93hHZ9f33zKNKUNShW6Fw4Y8mBis53U8nLp2pu71vPYc9fcWVgCoE7n4fjZaiCkTVxyp8f8xMUE9nYjx8F",
  "key5": "21M9ZwRA9DzuGWJPJKKo8KL2UUCCFJK4rPF5r4erjPbCE7PdpeUaAJBz46AkmNcae6sCVfbvpEJKgG7HSB6fkrUk",
  "key6": "2ty6bxJxEuxmKM4G1MdpypzZ32NF7SfyUEykwf2rWxyrutBq5Z4FNwSmnueAqcCWiPo9Xam3G6uoJfwPkRhoWqeQ",
  "key7": "UKnzaP17rkagQFQXaFxLyirJ7SkixpS3VSyaaRmE7bNDX7ajdeSGTmttyHQH4rxdea8YGEpggG4kqrZJJbfzgaN",
  "key8": "2XXCff7Vww5TLNkUietwHZNksXfB8mebdW75KjcLmtnqzAwU3uztpAEA1KvW4Rcg4CBPcvP5YgvSZYHhuznrZDa2",
  "key9": "3TmbZADdZGPHiWNoLnePUwHhhaQw2aUZvBKqpk91j7Sg9s15TPwseeY6KmLT8SaG78mvwoyDfUJw8ZMwvugU7Sp8",
  "key10": "3CqFBYZfgn7r45nvSRU27fu3qFUyTSQqR8fBwH7ZHkXU2n98n1HrBWCwuSSjGwsrkkqAMALux1ctXTdCpBUKSoWr",
  "key11": "42odaq7FgUahXUyNSjKJM8FYsfKmojTRxLPamtpkX6rNU1r1Kgfs1KjtuYqQq5nrDrHczUKUFPvi3kx8PS1FPAWq",
  "key12": "4Y8XNZwEGDAPNqCNap3YM167UkTNFPzdsGkE3wtLq6K22cC6348SVVe5C7rQF5oehGH7zZbmB2feqtYfoti9Rti",
  "key13": "34mCnDvMpaTktidKjrnFV7JLiQEWhpcpj6hoEf1iLuckq9JyyS5rvyK4Pfgjzuro8bcPFxBjvnLuQTTKCMRBdcdS",
  "key14": "2zkQ3nCDgGk9wBkjnogLtzv2yDA7woWt3skzWgXCpRpbSeRcsCGRcau567Ebptdwtd8NTk31SLgFYgxQo59sD4FU",
  "key15": "4LoDWWotz848JoL4F2fDTS5UbdaoMMAYzZEjpZVufiWtTyNUXgadACLTRvCboajXJ1EoQByNs8Xuv7pcHHnsjKAt",
  "key16": "5tQfQd3vf8PbfkTVqD3TWMSnuH8vyMtDHamwrToR2gMvKjCwxR2VD7XsbuRHQM3ZqQCoTfDtvV5q8vfXXnXHvWuQ",
  "key17": "5FyuNWDA4NpvpEcymuzaf2Yax2MfPLTwJAmeQ39rZmgt5hTS5ibyHcfuBUjrra9Nk3harxzyPs7YRrmkbERGScuG",
  "key18": "5jeJCp7BnANZRxy7o8AttUAZTDpk1h3th6g9RsKqkULt9jautMJkjiC7peiLtDNsnciqbZHs3hRb69xM1fiVbyzP",
  "key19": "4dyHE2P5GZGnpyXzAnUzVZM2ogDCojuCiDWzyf2ULgKEUe6A2hg9ir5sCuZ6HFXAnzkKyodiY7hhaNKNE69VgXRH",
  "key20": "2vkZazZ8wAcG7oQTL3qopnuR9suwtywof7jHuHqF9qNSNaVVLvq9fQmQPpuxyegCLffmSDQ1C8TKEZ214Ya5Wdze",
  "key21": "2jgNxGXnizraLVnomwYLyjRoXD7WR1FJkqbrcgrcB6WEgqnUHspiqJG4nJTawgCDkR87E6ER7TiMZWxcbZ3qGbFm",
  "key22": "5tCixbovDYaVW4642NB5A7jBrT7kiR5EMK4TaN7pUgQFSz9dFM59nXoL6mg6kFPtsFA6Eqs7tsrwjZW2YcvqjkxM",
  "key23": "3ZJMUh7kn6KHwPpF2oqzneCSUKPXhPw9odQZU2HQpaQ4cU9NLg3wXCP4cdWLKoLp5yMydkM1eDAdwSAHA63P4dt3",
  "key24": "3q7sjLsY1mFuSPvjShwMnJUZJSwxscLnsgHiDM88mYqQdALabz3AKHUHeW3WwVMXDo54BzdHvsx7bnPJZhcWNFFu",
  "key25": "3oaVy5Fr3geeXia75LrN9JYAhijyP5Rb44NeZtHxPRbA4s9RcS5XemWk3XDKmigkdfJHqbkz8AWQUwPAMfmrxdVj",
  "key26": "4kNmFW1HtG8e8pSsVfTmcWbcXG649RAxmymG6bBeGjN4rvYxmBatNLabG4TP4v4avFGWdyrUpFgiGbXC9i9xHZGQ",
  "key27": "64exqKfuuuQCUdmQUKrJFFZtucmcJjn2Fdgh3F7oRg8k8KpL1Jn9d1rKQfaph3ENVPM2zKHuSnaBW8rvGcKHQPxV",
  "key28": "5NrkR9nfe5U4tDdWPvZzwXYtfUuDHkUrQGMeknSyaCbRTdCs1EA25u5HPP6q7JXXwpHhoymxJYMY6thRcxgz5Ukv",
  "key29": "46dWHg3i9gc7NEE1ML2KSv7KSTynCA6ofxXAD8UxqHjDBehmDvCGgGycBiXs1hXwpd8jAp8oSRjJWxinaFrbQcmx",
  "key30": "4oMwGnK7eszr1tndL9TuD8dwTR8x4eEX3z6RhKhYkwq8DpvQTRUeUvMiP5jbp5rr46zUk9CEncMG6op3TF1fGPJC",
  "key31": "5DGLaZVjUDJEjpYD5JbMmtK1upX5sWftwNDjUi2BP2FpHFmXpk8hWs4eDjwQeULQScMqhvxfnaPveLgiwCFCAtUP",
  "key32": "2TDCJSBNoLxqiKeFmTNyKoYczTymKhHwfjFJ4YHPPphgyBsfXL88zYziCfWMM2trsNd1Zsrr6AoUK4cV3qdmZ1C1",
  "key33": "3NQZooLaT4vNFoAX5tqmS3hhLZWgDwygiUQXsjiEkpZbvYL6ayXdvtER2u3E8Nnea7B5M2ght9nNxiazGFCjKeqt",
  "key34": "2eUT3M8dFhkag2ZA7TnFr6LqznPB3KLNaTAAwTx36yQ61y67r9wUUbY383idXH34jxmXPmNeM5iG44mRB2fY9ZJu",
  "key35": "2DP2LK7wMrPs3Yfn9nTxJRntcT7iPDnX63xdkFt62XfDevUK9nkG5kWjdfPYsp9g8WorXdXS1CWYU64DgjJ6AVJz",
  "key36": "3UYSoxtAQePCesSxAoJyUUhqQq8a8nyNDNUp8QTEfQL2jFT84YLDLnwJyxmhoZPHLCDNY2qEboFQ9MUyfyxosPPE",
  "key37": "2sMBXp4TSfoz4gQtTetjDCVXyYaKDFKnTBhfCfP9be8g5ZTQXk5FAgAkBnHQpm8rfKgV8Feq79kDme9rKrdbsaeZ"
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
