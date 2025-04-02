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
    "TuQmATv8khxQdMPJjikCKMAuZkw9w3GqPHcsE8UCMfSbkp4X9SMpv3KzJmTp1ndJAFpaDmQvRcFxDGgbJcgZd5g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61CHAn7u7UAvniDuWzxND1vRkuTDTz9By5JfQMjeWEArmmJthctmeTgmi5GUJRLMTt9x6LV9RbjWDRvuQ1Bs5jiA",
  "key1": "5zNgXTpByWJUdMRC5oB3kq3oC3SEpLbZQ9xfKb9HDGha3c5vFQhppW74i47YaU3oqnp5izGR7MjLB1gmYjUxvT4D",
  "key2": "3zcyB3sMCe9xvG7TMFVZ93XbMVJuTz6kc2cyU3MgsApC8jE8QJYmW3BQHuJL8hDEG7wk3nj4R5UTTYbXxjzf3FHZ",
  "key3": "c4pfznf72cWXtzQKpmdMGzTHemb8tvkv9i2t1yc1GU9sMns9xCaJ6VUgzJ3JQJZ3nCmFBSPQz6J19e5zcRZkcRh",
  "key4": "2jMoGvJbVGq8wEpDKCy1V3cbxKsHoiU1kv7Hx4x36HzeDGJmpcWsbZpSNKvNdpsHwfo15ARAEJd8A66YbXAELcJJ",
  "key5": "3jgLC7v8auw6dZRxJ1r8kLGLWYvYPtKAjchpyzzDmAbq1EdiHR1b1CoLpQmQu9Phmi4cqW3bDYMvz4SMDT7xUH77",
  "key6": "5J1UqMd1WrfJwzpWFyLD17xPXy8P3ZLCPxZwNEJdvVA5Xgf833o1P3dBeiAkqy7qfarMbTna9uxSMHdxGubrfygd",
  "key7": "24iv8jgmw5d3SsLsGg53uiNva8hA8q7oM5Xq2iDcWqHMAN3EMN51sv6d9xwyefNKGeVVNqy7eXw6J4GdS4nYxb8V",
  "key8": "521Ndimiho91hybgny7my7aUyfD52wBMjDyco8FiLooTRqo9W5SGmQJbnvMcXRYVYKSPzfkA4nJtrb4d6BWo5iKh",
  "key9": "2tvAf8SQfQGgt7Rq5yma6RBq2H8hHNkk69wcurLswLgrMtkHvqpGBgR8fgqxeqowgraSdyuvKFf4Va4q7wa2qpTR",
  "key10": "5eVXkBG3ZftVw4zV363rXUQKMBXAjRPgpLJwjqfnknBySQLxmpdmzgLM1kgJueiVXMpqpCv9JAvFqBqAXfB3cet5",
  "key11": "8JfXMU9tDzwnsAXkT2xRguNi4wCGVjVYa8zL7ZhMvbiYY7UCjQvsCeWYJFPKsiqcYLtytSSzS54GFNL9Sfr8pB6",
  "key12": "3KbqaNcRmpfFTyrYpUVLtVWQitpkCwF8JzWF6ZG5JLSW3Bbn3NBRriqCdfTw3rMM7Z6hCTKGj1hAGxAQghGEZZ6A",
  "key13": "39G46BukuXxeYqrDbRYa9aoHeZqxnAVb7z7WQbLvKF99Gbmgvwj5zXHf7fzYn9GAf1meQbNEA6vfJvu6JyBR4NES",
  "key14": "4wEeWnt5H4m7YnTmK8HnRdQVm6kKXxKLeicd3XEYwSUQndNhDQw1kpRjYP9zLnCc8hJPzcZSFAPghmV3yeo6M2Q9",
  "key15": "H6odqtgU8CcvsNXmgcmuNEihj3JrdwM4YPgF1iscviMk3a8aAy2YuZKPSBRJsFqEdXvQ1g9ghFUfmhM6fEBswqi",
  "key16": "5eJjD8m2ZfEbRtxehXDctnN3H2DoCWM3RnL8bTgdzwmET9z17YbqR697GoA4H3TKmgmPhi3mCwG6feXvCZADuXs8",
  "key17": "2jYP5FoSEaHKsndYj8dQdoPLr2Wx6xAtyZ3xTqnVg1Vmrg9AeJUTobYZyQnq8zJLi3hUQqEgsLP4f98R57mJkVeA",
  "key18": "5HiaNfion3dBhg1268bvysvt4RzBtjrzC2bCXqux9aDGDoaNgmrv27QUssHUTJfeVLqcsxNfnomhsjKPKt287ZTB",
  "key19": "2utNAQw3YrjF3djo6LAz5cdTRj7Cye4socZL8YU2oBp3uAV3mrRT8mMt54oS8M5HL85kQm4wYsakYMhD4cTePxcT",
  "key20": "GZwjdwNmkJuV4nzTGSefoS3C7tWRvvuNLyMvw4apF5TXAnZMgAKuwsGm3ZjjCm7fpphm7DTPvkBuRsTv1HBVXaq",
  "key21": "2osLVCzdxqbzHJqCdZ5SB51cPkuPcqWkiDdhB15GcvPdVYr4aPkA9mYVn2hxtpbpY5Rc82RqJ18ndWi7WLpLyYJB",
  "key22": "jW6iPyJQakqZy4kB2TKhCqFH51j2YaDYLJ9khns2ELTqKZ6JLHpDK7CJiwBM6hKsHuZUXRu5oJP4tT9WNjH5wKz",
  "key23": "4tzKWPTrJBjnzAHaViSjAkKRpGxGJP2LVDkTfSqUYmDZ9WnhQ93xe2AUNcSjkAagBPcVYyxkkGtb3v5XCtge8zpk",
  "key24": "4n4emRU3sXX6Adw9pK4wfVQnGWbTFQiPbNvsJoZTFEZcGePA9b3VM869tMHG1c5VdHxnf2PA2sY8QHNxheF64z1D",
  "key25": "3S6ESKFSNxjLEC7MACVQQYB2X6jhsRmz15fwraq4AbJwMYMJsGLTMGAh1oQbsQH9n2pnv7gmXmPF5eardubcWbHe",
  "key26": "2CWkpx1h8Wn5g5AgkDi3vrvcLWQ8Pu5tdhAS3GkqJ55KEBE9VBiD9Ye9kWAG1GHPxSmXfNsSh4P2yzBhz4M69Jud",
  "key27": "235xg9dwhjs7DDxi5NfSJesztg7LDoi1FTy9xKE8SDNcST5tEWfAQ74bAgeBVKLAyXFBo1GSZ3XCQsSYDcazGWPF",
  "key28": "3gMRnJeRLUnXDrM3nG5umFgsjvWmJ2rSb8bonQHTPHKuWdWvmkM65vYjfRfHfTPdN6TczRCpHK83wcL936oUccQr",
  "key29": "pvN8r9hgPQiCB7YyiCuVJRGSNSKYoRXckMEqMriMH2q78ShERVL9e7ahE1wU9VKvngBJ52CboLoKZEebwfCfPaN",
  "key30": "2czBA7tPyMRNR2zKtxZwb1eVNWmZJzTqQEkNjyxoXMzFHqB6h8A9xqZhVxGZRp1Qk7u1CxkSbxCFSckvSv3iJ6qB",
  "key31": "2fZXQ36GjuNMVMdprqAgmgqdET24k2fCqJkWjFBJh4DJWGfMZmxsCRVz5KrRJjtUYvPLNmCuGPzBcZfFhRzDe7u5",
  "key32": "38Vi8Fg38fZQdupqDPPZvtQa35ecTJzHSCJ4PKH9h5TFLYfoG2WX7c2ynJybD5gtXVmk1M3rdqVyADqP6NNhmbA4",
  "key33": "23GybV19RuCmzaAMi4ZYfsTXGxp3TYycFA98h65CtcxWWr3pe7CLxK1qBcvV9VHuuaxsw6kTXLKaf8YEeu4ZujLu",
  "key34": "4SkpcDs2XudxAQn51oeBhwunJ4XM3hAVR8YGXVpHN8VFEFSnzSf6m845JVfqXRKB4v9GMGTVNxYsnuXS1aUqGujk"
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
