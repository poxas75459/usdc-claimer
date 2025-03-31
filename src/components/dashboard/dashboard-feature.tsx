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
    "hacYPDx1dCkLkj4qvU4dU6Lf7hcPUkoXUpaBC5vwdh3coca1b858GtTqtrP8SZgwzf87PyURv6Se6wK5QDtpGUd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eWPdfM3a8ZkNmMyi7SFAFNQtWVNqkzrkSEwo3AFkgwFxHb7Qkqcvc71tUazGWRhTvP56BsWhcFhpi6Ls6iREppC",
  "key1": "EFVQXDMEA2qqrA5rYRtZ3ETAWXuYN96gq2st8YV9tTrbgGHndbpYX6K89yRaikdF1BDrsi6ht8EXpGeeVxryMXq",
  "key2": "57uQVZBd24Pvu5oJXBwkRhRXmiVBYpAEcQEsyfzG95qY7pg5wJSassDD6yNCiGxJGFjVKZX2k2bsoAzwnvScqPtU",
  "key3": "2wh5rUQPsxHYHfecZ3gQfXUTDoDBa2vsxDbyzocRWxZ1uAaJJ9ppaWFqcGoBjUr8PWCpSH6TDdixquzCXZ68rSAJ",
  "key4": "5d6TdxgRZeVMxTRqe1osu5K51MJ3Dw3VpQzYKQqNL3RM33qmfkfYHNfBFfpZdR9wTYNxLhFdd25UVQx1AvmPJhqF",
  "key5": "JnykVL6CUhRf143B3Mnd4wf5yYkXSgFNCx9gSQ1Y9W4gSnLpFYaq4DtyfNcsoTF9pQyZz5vUnwPRpfgS4xZxGu6",
  "key6": "NsdbPet2DXufUnLA14mDnBe3JpUEaATJBDBqSHJjCdbuTCVRJVPotoCReugdK54xWfwF3Uy79MR7ecoCWv1o3hb",
  "key7": "5VJQ2qmyADL1r9GRiccnYWyC1SsinpWyzzSH6RHLeU5ihWrkFbspgD51QvL5pDoCBWCc4HHbL7u4boTPfwSU5ZZU",
  "key8": "5tqX7PUXCyYsrZYVi9vfVSWBmeWx4hVHDa3nDbjJ7q3ro9BBwHMi8M4DfXhdWhPKcRSRXFnncEx3WKjs5SjZ1Km3",
  "key9": "2ugdCxxtCsZRBXWg4MEy2ARen7jriBFpbonWuMC3RQB3cdhcNN4VHWgkERpupGwru3sRhfRR8zLNpDVty1iVnwF9",
  "key10": "2Z3tFsjT83Gnzz2g2YrZJNoDrwTywM6HE7y5kE1HHA8gTeQKguVanCubYj5m9qbWE3H577nKwyC8xZnvGRaUFFZA",
  "key11": "47XWXimxpkHHR2wZayEGN7P4Q4KqLCcQJjQMt4jWjGvQrFLokpgPykQgsLR16c5CAmVP146S2BbdnGUEtNELZvZv",
  "key12": "3KgsiKwk8fguKKnV2zbhyydfj8wrbbMVD7eZwtreeJfsZVuQjrJnV8coC8dgNMCqntmMu5jmXJbt7xriDhxQ4KnL",
  "key13": "2k9SbAYCeCofqrb1M7Ry4SeZEj3kN9kMW8UiVd78E8ZWYbtPkhseP3aCrXEf99W7Cgk3hEXZDLjPNMKxdjrFs7Zn",
  "key14": "USk6pc7KHH6DEV6KbostRM2XpxfPwNfwiNxNZxzWhtoMwV3WeAHj4zkSitL4xT4GD6yHrMnSh3b5xGGU7UzXg4A",
  "key15": "3aeZakXLK2Y7GWYoRzq32J6zdNzYg7pSErzrhvtN3zTikJ7bUAz8tEb5TYwPW4a36Xh7uoYHUPux7ddwxpYeJhrs",
  "key16": "5TckeNbu2Kn75SNGke88Hf71ZBv6EE6C6LoYjJ6SfNxmyTrDcfCKPzvqo1HRHA8qEepQ5sN83euBr6vjxyPdRZ2D",
  "key17": "w3oGjxDLhyJrBjPYAHtBwxfjE2EEq9GdYkAcjKcDXz92ck7ff2ywGpUFUjq7F8EeMXLW2F5ntaRDdzMXs6smUE3",
  "key18": "3cttiTtZBK53qutmgDvL1tK1uBzawsea7262Zb4cF2rjX1gi9g6KsHfZVLKuyiEcmiaskfqCZCHKnFBR7i4zuW85",
  "key19": "5TSUPngBzqwKXF3nyGg5Wqh4bEpypxgrUBSuCJ3s9GhkKEc8dSMU4RzmF8qCg6EQYTcbaagMPeqkWPPLTxfZaCZE",
  "key20": "64hXZ6tjrNgzUJEtwCcEjvaMns2FVvhabgfhzyunUAubdVNNVnS4bJd2aatAkoP8XLZM1LHCKLuM7pwCWH2zdgRo",
  "key21": "45Hkizx8tCWSY6qxnmDiK89FQ7PWchLXUf6Vtp4ZGMgccy6v4Qf2az3NgsUgN82VS75GbvXutSSUBGMns4bns6De",
  "key22": "3EuDcmSqT8kZ3KUhWkxbPtTMffUbsifWCoeueAjUFmokeSVBWr8q31fGfbD9Hb9zqaY7bb1dArBxh8GThgxsqsTp",
  "key23": "61GJUhSUp1M2T8ciUiAbGxwrtCJPvY1WoQFfCp67QtBtP9uiqKbu6ZUWJSmKjnKDimGPXoAv9yVNgi9e61ZeEiaw",
  "key24": "Lb9oGf1nTJBVRZ9LzHJpG15RF1K2hQvb5eh45Q1twG2qa2GPST1ejb56iFowKuwYR4f4s9GvNuoCpbqzUhE6Hdx",
  "key25": "5TUboHqH21rmqu8xVQewj1Z6inrx2BidHUzJc9PJZ2prDt7vWW1tmBVPirfFKWaqrRgdBPAorXquzrWmDqC7qrmF",
  "key26": "4TAsou7bjoA5oUGxYQJn1GSfAacGrTGE2yiUds5fekQt9WydbJsWRa91KtNJEerEi7sY9PdgeVQM7SrYKZy5vmfM",
  "key27": "BvrqXSRizYuwXhKyhFtVMKQnyQ7WN2g7KdDLe2czbS37ApEzwoxE56Y8cGpWHaJ5C56LerMMBTZ13qpCyBkTLpm",
  "key28": "5tW6V19Gn8GUu7MLBRBfXWodLJ1C8UGwmrmvkuonhVBawoNVq2RheGicWmmBke75kmUPookWCWGrKion7Yo78DJr",
  "key29": "2DKer42PBaRH8T8dUJVQbqnRhhCi6wD48BerqXHVAo8oPxjF1n4rZfnWYuoxDBifZWSRK8X1Zii1DJPHsTUGEA7w",
  "key30": "3KPZwrUaKT39qgnBqQXZaB4XLsfhWMZwBSsVaYSLrXN52CshGz8HP54LkPCK6XMVU3yBtQ9GdEKK8nofYKpxP3sC",
  "key31": "2WiYBCVwvjmzegHu8CyNRq2wC1RR1myaRZhdRQm2rXWX9Epbq1Ms9zMkXYyEt3rfs6WYja6mfvHtN9N9VrM7oHox"
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
