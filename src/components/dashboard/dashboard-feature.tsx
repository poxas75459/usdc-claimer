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
    "2pJc8GeboSjg5YzB12tqiDVYfTKVmBiFWw2jXQqpDfnWkBae2mPp5Yr7bHvUCxC3DR2YVaQfDjqyDezpaCryhsbN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bvVojbVbarTYiGAYU25phEZkZz1vyQm9iuMffv71uZGfF9A77vwyaPQMTbq2GnQd5hGXJjVv4dLiFF2TMcDV6Wb",
  "key1": "4s8KQhYDth8WjGkH4qhqD59hPvKFRDM8or6CGnijTd23ZFzp8PtysGFdCiNh6F9uiPgG5J4tVqg9i8szgj95C7HN",
  "key2": "4rzSCYs8q85nckWHDAeHrGnmaygKcj7EhAAZ79K4KmbCjebzGgENYxbuDS3XrEG8xUZLCPaat6kMigfEhusbjLnf",
  "key3": "4ctMUREh7Z7f7sMatLyorfD2KmJhe1JcfJKBAVQgZAFi9UvFcsXiBLWw4BPJBWR8kG66dHgRqyrM7aEaUcTvxxzJ",
  "key4": "ThkYKEqZ9vPdRdcVvjoBNrQ5SiHDpD24PztAJyXTGRN4VdhdcaMoLLXyCyTFjq2mEpzPGKPZcqc3Mbj9poerkAH",
  "key5": "2UX4RVpMnfYC2FWqLvy7dBqgC6Mzb9TCmYyp5idb24EPxpmy7UoX34vKd8YqJMYasd2RJgEf5eoWvM2ZhUakXth4",
  "key6": "61FNdm4EfbG14Pd1EVXaZ5GbWqJTPZiwQ6eSFLFv3r8N5GE4QD2CwWxTZwNsWpzk4wtAMQ1uv5DtDPadpnLkZCjn",
  "key7": "4TpRDDdpEbYnnfmXNwRdnKuVQ8LSe678aFPMTkDMRjfDPrDFoedaxHVYwgUBDzp4GToWfsRBgM7DaBstFPt7dSJ8",
  "key8": "3AY6GBXKFWMCRzjAvR2YFkhXVpWNg1k7btMpy7WXxgxQB4yq4AKKoPXeySPt7sPE3vwwKJMa7EfUPgp1HSYAesNq",
  "key9": "5vMVDT2aH2qkx5CwPrtRD13ewqzncrN39jYyXgcJBaUJ9gTSRDdjgJsoY7Kutx7jdRmxZPBLErcDmEhTAGhAJd2i",
  "key10": "FehtKWdverwWi2wzM6swP4EsgJ1CYN1GmcaZkLbEQ9nhAJ7mkj5UfVaF6iXNcuZ4jgFy1cwRuCsPQwD4gMxFBhv",
  "key11": "3yysniwZkDkMGUgZUQexYU58inFXCXjwuvE9wMWfw2iisRggAXw6zagWVJP5TjRZw9H4vquVvpgFv8ytePA7o8aU",
  "key12": "3tUi49yVEHrHHsJccWrwDk5cyhJbc75v4zJfZPJL25HV6TvbQnodftSvuVJ9mJk6Ei88RveM8tzx6HGWpPTx2M2Z",
  "key13": "5JJeoSK1YjqsMFFtmVe4UYfNGZgru2oyWSQW88PmAQUiCZNoutip7F7ve8aEfWNKhLsdBbQFxVUJWyWyineU5xq8",
  "key14": "5Doj4Te3RcQfiiiGHEmzWA5WU9d87hSBbuhZZwSYHyTrXXPVraUTo6Dhxm9BSFuZ9KD65m39SXP9FV93wy9F8B86",
  "key15": "E5GeoP7wfW4qWxX2qe4iXQBTNJ7e3nampJkH96PTo43D8kFAtbutC1VbEjXBkrxGA86jSqzb32UdxTy41CijsYb",
  "key16": "64ASQj3Q6mubHHEV7KBSSw2qsYaVH17qt4eoagL3YB4ccvtUQUivxwfP4WmBhYMTbzqEqKTbg7sq5nbaqnWkLZyU",
  "key17": "fwMLg2RbhELfFaRpgBp7UjKBoWEkZWS4tcYsHLRGuVwH9j9mobkabBoiPs78wV15wiFT5EhGorrFdrtmtFHPckK",
  "key18": "39TPyvyq21iwPNjv36W6K14atVypgxaEyyzLcBXHWXbGudLqEhmB8rFGUriXtZuyjkUREcWeQ9BHi8F9vAVCyvp9",
  "key19": "4p2j6stWtVZYr7bAAVvtq7usmYiWg9y7VcPE5zWRE7wULVbj8VMiK5RNqLLGadgWbweJpsusmh58Pbh7Bnb37N4c",
  "key20": "4xLh5dqLVGpppinvAFVGqMHKi7VDhTNCtrmZ4Ggd7foLTci3XpdxWHcJMgQaHwY7HSizDTQ5GqUkm8SAzrH9Cot3",
  "key21": "NoKapA8b6tYWpbPzru1vaxEufidRzCjBV3ahLoL6DEZfGELQR318xkxRiZeDvfBmUcuSCqBB7N4MzBQ13fPkE6A",
  "key22": "1V5noBcUf8vUm3ddMjsKpWexU645RArKrPrLR58nDJkYy9Gm4YrWbjeVwmxcsPtuU1PXiQdojJkcaZhgGr9Qtxx",
  "key23": "q799ADXGZcz82StFcavmhweKbYXGXZmzXTMqfkkEA5oGt4LxYQNv6mkJJAyu4dMBPMQ8mTY8ZA36xLkn67atfZE",
  "key24": "55eZyYKfXhihBksRUdCVuvtD9PHmir9rfquwokBvoNh5VdFHrJ5yZhFYaeqzuHxj9ZJYxMxBQFqUhwStdFas96sR",
  "key25": "2UJSvSJsskZYT9UbjrXsRf2fCgE6sVbVp4STzLZvpDdF3sMxKLbeoH1L4VjCnjDYT4RFYeegFmQp7rt7ETvY4iqY",
  "key26": "2iMKrLTkmq1zCw8ivEKLix7ABUrXd9XhaYqLaPptQbrzUkP4Fq8RLwHcxx1XGpNgZycSWF4QHr6qrCJed2SP3FHu",
  "key27": "3fUSCrHPZ6WoWrZ4fAtv1F56waVGaJJM2GQgq6hz6NQ97qiGzzCW5LX4x21HWDyHBdvosDihWnu2VvjFFRH97kwe",
  "key28": "4aXDos4F9hEQtyhEY5XHXQAzyySNCh3j7ETUExjkRww6Ukk18onfgRn7wrdrkX5qtKXLBAa7P6YAQqWJihCGtq1h"
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
