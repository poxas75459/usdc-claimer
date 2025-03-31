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
    "2iVA2nCLo7Evj1UWPCGaNg2wrc3H1QJM8V5Ec5b5LGPxjic5g5o24hdef76CPF17JdVYfyXbwG7ENxBrVsPoFWNu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pobtejPcGDrQaKEg3C5cT5t4L2RiWdZjftMC1TRjT3hVfjHXFQwjLc3weWYyMjWEgvb4nqYxoJ8xa1G7Ns255SP",
  "key1": "2tShDL69QbtgAqUUodc3y2dDGFUQXmVBDj7DJjmA9G7mdDUVnBt1kMLyxkzkDWkCnd2p22c7MC31jtqq5ukvQVnW",
  "key2": "4dkQAfcYXt9QtdiFgZttypv4Jz42FXVDAKVEXkgVG6N6dd3bYqtg3FYqJHBiDMkVLCnwnCkkuXntBT7kECBtDcfj",
  "key3": "5wFjQgyEqDQWLW312xZKUWBQSDV6wHfMYL6LdyJEgVSCRG86xWny5g2UJpbzfcGjXGw8pukxWx3HCCHtkzeVtmXD",
  "key4": "395yNHxhQkmiChgwg3epU12BkDK2wStFQGkki2mWJ9kThsK5rS37zgPVFx77hpzbpN8QKJawa6Jxg5sxyke1T1Zy",
  "key5": "nDT7Z1YSSELN6ia54bDVX34NdQL2uK25xTLzVKzfKGvDEm9DbgetesAtjKLs4mP5SPvcAF4ZGSafivYCTtn78iq",
  "key6": "2zx5D3QNbSK489iHivRmzSbBizQqq6dq7XbN4EjXx6HZ1ecdXvBWCWVGQrLhidiGcjQ6g3PdeXxAZ9MKbPXgGjCs",
  "key7": "2ivH4VGH2YGLJirunpzjoKEeX9ZyHR6RTCygL6JKBqtdwqBL4c2MFa8MaQwAUEpfuJy42E6BrGkqBkUyG5N7G7Dm",
  "key8": "35eSL8p4GF9EVycUysjBFXLLR1ZJYaypksfMcqfvo5mNwAJAYLgoeu9yt5hizUXQJ24FohgEA6GozXPmzRQiYw8u",
  "key9": "4YND9YpLBREUmc6QMzwtHouxdjcY5xcjLwTbnUVQ8MQqNYjfjHeh6EsvZH3bsNDoVAZUUawumGUbE5eJdues3tX5",
  "key10": "5YBg1M9dqn8UL8ZPKwv5y4XM2vQjQFmTvyZRyAFRtVfCJfJ6yF66Nxj81nJ7dG5DHQY23Y4HiCoQnFfqtvJrVMVb",
  "key11": "4MTASn6Yoa3cT3RzhCu4QCkBymzWcc57dJbpDQBfm25LCoJ6MQX1DnC9xF6AjHPzfzYUW8u5YPVwek9Yr8PzSwAc",
  "key12": "4b65bgs4QmXvi5ZZuEj1C53ccUHHBa4dEU9KMjgic5k5CugCJWCLBaymBzgbPQfU66nno6Hi2b6EmeeRAk6RAb4c",
  "key13": "37ZMwJH4Q2RTuGbCJyZVzzXZB6q4csALGhd6oqChtRkQUxDgTdETcHecWkLtmfWNsgj49w8M3nMnwr2X2JkCHtfw",
  "key14": "3eyxPATNhZCScLoi8LLKcemzX1jxDypsAk8xVBWsmdmBq58S3ghodp5muyNAXTWous6GXBRnKVF8QhnroKD4LH2q",
  "key15": "2q37UHvAcfHyWGPj5EtPYPg2kowcwjxSWGkpDENE5tvqsouGju5WeRSXbtEee3cXsnVYxYUGLRFFFGGcihx97eue",
  "key16": "4g8SPN6fTskk1YC9dS5qrhZfnBhsLWMoKdEWpizAJD91b7cz1ReLxE7LG6GvLCWHjbFko2afQPaY7HD7gCeWy8a3",
  "key17": "34qGhsGg1QcBNQBqBtWqstQu6yUXq7tJKhVQdaNVqvhZzzAt7NmWMS6QoXLVUvGBBYR83uZPQ6fMPZJCdwwLjkgB",
  "key18": "5mngRcFdQuWnPz1eJEjxFEPT8ZNeHxztTgHBMVxUmXiX7Qahe339ixQtWQAZGAvoQuZDPefPtX4RNsZ9yY3HpVB3",
  "key19": "4tEWnsBSPW7KGkW5ZjTVcz5bqNLsfHb9CDqUFdxFg9qR4gHCML7d8RR8afGNofbZUaQiUYUKUk2ooLMAAS98t5md",
  "key20": "523jm697oyDJkwKZSzyYWU1EBh6uNd9tQTNx8p1pwdnZh9PMzgA8p3koBmBk7FWLYDPA41Fm8114BCk1H7bSDs8M",
  "key21": "1TqvGqnMRdTrDz5Vd7KghMSZfYeeuvrntA8U6jdmKCA34nnpEpPY4rCHEQvy4C4vhSebVq5D44EjTkTxdujMBbT",
  "key22": "5rCW6h7AnE8UV6XzCnLs9Nnkdzo1tynp1GEc9Y7m1BXpwNK4XbEbrq8apB8Dt6jAjrk9jX6Vf2Z8pmkMRQVCVt9Z",
  "key23": "BkbTonXSnEeSkKWLnpKjeesErPnj6yM2CQqvdTiPtf1xugK6f8Z9V9Cm2RUnSdfec1C6doKdDVazPGWsdBjjCkf",
  "key24": "5qPKGFrch4VCTuD7vpjNNDQn3FFriH57JUt1WBpfkFVfVQiJPTW9n2TXQpKNAD95xMkNTJvANiMwKgTwaaLAZ55p",
  "key25": "2h5WPnxX8HDnjcnyJBRmerJMQesUFk9UkVPeN2P9kgMGYv3vGCW4tdehkymr2vv7J6KSiaU8kNQC4xEQHcZdoxQU",
  "key26": "254xVF3iXsGUHKPN8UiSEVk9N69u5dUrEsxzANHAojDBC1puEJpwWKJvXHRYGxYwcbDqHAfVH5YyUaVPxP3ACgi8",
  "key27": "5v67XPtU6Mn6mcUvPiWJUkJTeP5N5xNsaM1JVCbBvH9eTx4Cx6XPp47SVqV5TNNQpjNKPER1FENoqx25SvVugn12",
  "key28": "3S7B8YsfhA9gaMteZFEXr3k3Qkfzvp79JDziUiaiVWjwXBK7Gw9TwiuCswkgXhv5stiJcp76shdo9kPb5VSPiZcY",
  "key29": "2bGV97VpEfbkgq9p9o9ZDACth3WUYydPgQwsSRt5mUXyUH9rfuYAQvGdx1hQYeA6cyvf8i2bboFeuPPcHM2AwP22",
  "key30": "2SDiVpTAkjb2Z5vL2L9Ko6Sue6fj6zasMY4aN6ho1VwJHeeeiwSZdfjhUKZxyeRKMz7MREB19wQTpaUWL2Vgq8AV",
  "key31": "5AiRTeSYveQSMy33yrGJE8rgERGWamvNrEroBt4j7t8S8NtxVEmrqaf3Rnyefzjw1S8H7bDHkvofwcTHQkw6e2dh",
  "key32": "5TYfsWq1AuuDHz8wAiavZtunxZPqrap1Z9PF4pnY87kjAMCLw8dpa1StyRKbYUZFa7Dsrgkas4TN7jpSpb7DLCib",
  "key33": "4374RewmfxF7yNE389ixuo3BioMrmx4JNq5PFdJAoFHAt2cigBf2nXfQ696NcreeM9eah66dKmN7caAMim2pWMgP",
  "key34": "2BioZzHcGgELbrKtnRDUF88RSLkpMW8JaFcXJzAatkHCtvvRom39GoXzoqsE8ECuSCGhsNgAY7NNsDiuskuJKfHq",
  "key35": "5Pm2K8aR23pjbtd6HJBHGwo2syRTR8m4LsNWkGtttTei9feexNzY7cNYaLAYnjNgiTmPqE3XW2fYE2sDAz5GN4dq",
  "key36": "35GrZ3vuK4UJFJAenyjasFouQopcAeXCZ5W5MgaWXaT2dhCPpbRiHrGEF8uvBfxowKsYfnRyoAXMPK6QcBSjx6wR",
  "key37": "5fYvqWyQm9E5Bz36gbPyU6UTUFWrEmLQsTiXKvw4LkhWN5swZ6RXLXxpprc12df2LdrEyP3uGiQoc2rSiJGwJsPJ",
  "key38": "4SXPQMxUyUDZHtDxUGChLzvaXntqotniExvjDSi5quRX8wY1BC7bj1FqDSVN2nAPv6U4FvnW5qrrih5RmZnUnCE7",
  "key39": "2iwpNhiLZK1PR4d8e7TpFrB9KVzjhGF3oZPRURM8d6vK49Z7tHd5xvyeSN6bdxypHCELSTAm9pnDVzWjupmvTBLy",
  "key40": "czyM49FWi3qQ6mQFodqYL5WBsv1vhedrWkfsiEYnnsyUB9ZS2bpkV13vy2hPLfBspcsJbK7aGv44VV81Nw7dTsh",
  "key41": "2hgjDLcwUu9GH11Ri8abz3FzzsaGwqb2urgdMWua6jtaVpybwA7V7mGNdeXeb5mC5VKFuaVhNaVttYbwdCxvxTko",
  "key42": "3z9UeivjWJTH6y3dbLojwXhFBbtf5GscushE9drHQYdyDNodBunRX93SpkogqHeQ7fZzW7DNKwN2niY2cZBar7LJ",
  "key43": "3J4EBd7hm6KenwrgZqoKQ3HMUEsDA1YjLkLnnuxUBqBLH35PZqre6c1CctXoDqiMVFhW89gTrYkQ6kVydGChzVC6"
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
