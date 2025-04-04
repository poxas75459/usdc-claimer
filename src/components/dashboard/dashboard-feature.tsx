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
    "sjxsqUsrRwZ5nYX4XJMQFUdN5k2jecyLj4Xu7suqtoQiJVuhL7mdso4Q6vq7Zz2jNChuLYzkaYT4UyjWqZcu4FJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NpmwafMTbHKgE8LP7oi8Df4iAnKg4WpP9ZMcbCneZj52ruub4YLmq9nRMNTDDHSCHesEVAN2CkzZennmmsXEoTc",
  "key1": "3K2vUbD1zmEv6xvyaVNhomS4KZojGznxTQ7mx5rmcaRyBJxxbAHkmDW4TLJzBAJudk6h2cUr6XLvoDVjkUtyUpDQ",
  "key2": "66KBJnfLZ2t1dwwKXrSsCEGs3rgvzQSryKLkyiuPr9TJx5b1BqhN7rnDdAdWtkTYD9SLqNy7kkJ78qEQ69EudAGN",
  "key3": "5FG7GYDw1eA9XCXAVeDRyK6bramXeh3NMdHfHtpZkNuqWU2vJKgde5N17vHZJgFvSoXajnp8NL4AahfQTYFgUGaV",
  "key4": "2A8edw37JtritN2gKAmEijAp8zATXcE7pL1oixseQAJiUkaMdAzmu3h1X7zQ7cFzoTEQ9D5Jmubn5LKNy6HYxHsR",
  "key5": "4kQaRf9R3yMSWpAjuaYEQmDtLq7iXBKaMRSy6PzgXkMfgm7UqBEkjmudRzvksopeDezc1Eo1nKG9AApVjWjUc1ea",
  "key6": "5ga3Qg14podwLSaFrKbh1vxunpc56QdRk7yf11uKP2wtqT4zoaQkvEmPA8EJfCuyLNHypA5E8sNMdTVCVqe6ozmZ",
  "key7": "4isTG9qbdnqb2rkCmcty7y6p2twgfZVprxHgq31JR5qH4sV9hPgAm3xJriUpPhNmLqgoboUBgJPxq8AnTy6pfbbz",
  "key8": "47rjiyYUx3XLc2pmPsQkQPrviR4DuGur4h5LaB2wuKEeF8MmkhX6VnTwCHLnpSGHnmixgFZFT7xePT2GvLoZkWxU",
  "key9": "5VtkmFgmYsVSr31CWLkKUWGy24JDE4F5eriAwu4evm2Z9VBVPHqG8axhDRqGhLDBYuD4jRCASdyACaKgjtwdp96a",
  "key10": "2rroZTjT3L1eBDGK8DKnRnzkPW8MBnK8JoYBFgQWKqvHRdzXtBAUN3KLfMsxqcbr6Z4oDDJNKpSEYYYYtzDnARmB",
  "key11": "5jTtr7frFYZv5PmU4Txiddqb1nMhyCRQgNiMV6K93UXU1GgffCQKLxkhrHF6dqb5gBVj5ebtpVfi1rE3qJAcaRMd",
  "key12": "3v1rjTBnxGFLmQm65EyoUoGFxQyDpTb7LM12RJLhJxEivLfEd2do2RfbY8HGpFw2JBRbH8LzVoHYWCGesfcCEb5B",
  "key13": "4kpwHdideMseVtZUrA9aThPxNDcBiNAdpipTAnc5AaJbARFRNdafVgqhMvzs58sVdihJgiM5doobQAmkcmXkAdtW",
  "key14": "5Dtvi5ZEM3UTbkCLrVjEYCAVvTBWrF5MLYErUuwRxmAfqGedkCJLeCY52boD61ESggN348xCSMxqKAECaQpJuHge",
  "key15": "4bL6FM1VVvcmvnjXMiEF66hqpTNaZRvGHJU4n9u7wbKsUXMoCXN31BtxXTuEDL96TgnnPkxGbBYxnTNu83uCF4ny",
  "key16": "w1CVhF2m4JH8FDVm5BK5xNV1HqXiKimz5GUrnjfgCSFAN9JcpxULvhgtv8DAXV7agfNKRxsRdEqzYJmtqVu2EpG",
  "key17": "3Q1NuT1n1HYu3AxPHb3QpLfnw5AdVeBDWLTtNoEVhvhXTTLWHZvUf9omUekLHtL2zeeqos4NRWsyR2aFba9iMkLd",
  "key18": "2mGikUeBmahvMbpXnLCmEiMuEQVWhB3MXBWjVWphnABS358hjHMkqX5axYkb5JHLHhEq2kGH5EAG2nspG1TetAct",
  "key19": "5nawkYJ294MQoATA3QAHe5uXHmRwAKw7RsFjAUE7wvdLLiDEdx3sTWwkqNvHssCUUY5CMKWYaQwQwYJnKMJhfzpX",
  "key20": "5D3Fv8sk8oxHsEmAfbpV7fyTu1EPy55atWY2iycTBz8g2jNB8iLHFVTEnk7opmA6wrjes1Vzevp8ETpeu53JWuN4",
  "key21": "HBTcJKFgoLMFwt9SKB6zjFoWX9Je2L1coJC4XXu7U9Qvf5KFx82nYQJEubYfxSDrBMjGmfMUEqm8yhD17XK9BU6",
  "key22": "5xZfPCSnPjU1tJmUqNESgg8jG3xPnLx4djNtYzn1eHcBfJ7Cth1FaeeKwgjfET35YrychLK2kn1A4A21wwGcQVYQ",
  "key23": "3TH4Ycsztwa9xZtSA7XZdUJnW9WLJKdQSgsNxGybN9ZKJMWjahgu8RsGtyevuZFM11uqZ2vEAihZgoF2kGJdFRbe",
  "key24": "3di659fCd4N4KSkmbTLNZN15GGubNxtMUqcHD95VvhjzSbpMVJbBGE3pYDDmHcLao1v71erde21r1xieryPZK35f",
  "key25": "3tmBPWZcqUQZ2h3VfuFGANnk5qcgCJ3ntej7ovegDWMXkEjRfBkL6v8b3i1vxkTdEJSWtB8734DhWgNui4ZgmwoB",
  "key26": "6UxZeqhqPiaWkhs8Rn7g6Gza1PtsxtYkeKPGAKzkotmVGi3wmm2pivtCc1C6Bm3ReVo9CE5FJEiXdrWZZdbehJR",
  "key27": "2KdPVBkLMkG4sa4LBejCHdzQa6H2NGSB9KgwgA2jkHSVepjkAwvz2PXQouJuZVH1LojUxuY2EgWDeEdUHMA282S7",
  "key28": "49g2Nygp3vMWMMao36whEz89u9cyyQgjEqX7D6yCPVsNFSBu1WsLxrPfQ8hEvBxkVH88EBkbCDcY8mxA3AzbqkM5",
  "key29": "3ZpoJsvda7whwXjQB7rZdXyfAaHjymVSUxLi9d1gUjLXovQp4Yz4HU1D5wh1N1D22YKsvkyZv6QvVFbk7uiFfToJ",
  "key30": "4Sz243LwvPzitva9QKjv52FZsPbirfXpMxKWtkLq6JqwG1nFVnQCWq5x9MAWqgjbf852UCtMPPw98Ms7BA7oicX9",
  "key31": "4e8U9bc7DNduGH7NcuAmoQVoqf5THmzDsz6tfHoovgZeFzoPE6m7nXWpT3LnBeDopk5ZL7CGtFZEy3PHgfDwWA6i",
  "key32": "ZeyUexbqHFqfnwcrssewN3pqJJ67BjphrmZbxzCvYXksrZWRWimcwCqcagzyFw42FtpKsfNDcRYXwhVX24Y8cUg",
  "key33": "3XDwzET87KxnFvmZJLWZhff4gVKixARDu7eFDs4gbFF6GTtDdoQvvyzxZgMzo9VHPPKxQACcHiNFecVsW5zKw8SM",
  "key34": "5idDLzuMDog4B9GWMyfhT33g6YpyF3hP7H3fJKeRrnHHeSCMjm28MNjTPhy18NmriJSUSpoknoHAMiMp6fbr86Y2",
  "key35": "43Ymhdg4ppmH1NBrYR7iaz2Mfs4sDYH1ULVfJrjKMuerTc5RTitvyiVqLKq7fZML7a3HUWSUtsCphMhWi4xwnpV3",
  "key36": "319aJccQ7Gvi21UMxb5p86XNPYtkh3ybavqhMySVqnAjha6VxeehoyeDVTbLYtdGHgRLCf6SeJa7c9n9v5r7zcBT"
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
