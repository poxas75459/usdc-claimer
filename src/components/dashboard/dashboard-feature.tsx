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
    "5pwnxpPnxqgmqJ3HU3KZrccxcBcrRBndaCD5zGmj63PgNUkUFvwsMmQfgj9KKNfsMtzKae26VHaW3YgxsAzqomjp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dWXaskGwShEnwgUzk3bPHDFXwkae5Df7xRTtBv4ci7j5L6qeeKabRmo2Kwp3hQbs7Z4dLHkRZns7VhVUbsX2Rxh",
  "key1": "3HnAnpb9BLdrNqFhbtFR2uaEnnajaH848PuahGHDt5gjna1HH2gFodFPq7Y94d8jVXFSbgekVC2Muk6D6NkETWv9",
  "key2": "4qAJ4gP1kddyRm1LbnTGqWWxH4BPwmL5Kr9owaPFzZat4zEqGpT1bXF8Q8g1ZSdJGFtDPphvRCUeaM92BaKNY4aJ",
  "key3": "5xhmNrXGnXejcvR3iyV195uJstUqkwfuuaHz7eYQxYtdvd8C2HXzCDsTtKBeMKkC6r9HKfNzBDyuoeKFVNuUGRgJ",
  "key4": "2s6USULjJEQqtGHkYuiWedwKdZWzsFLe7SShBQiEKmXj3LcuL39yyFDhk1ySoZJFo86rRhdp1Wv5qcCWxqDuBc9r",
  "key5": "3u9YNjpdUFVFGr5zaP1g8tWu96ezHFJBJucvjhgM4gugne6S1heoQhhcxrgdby5uUGR8P45ZfcZFy1bYF2QmvMSF",
  "key6": "63w59TJq3bzij8PmVQKyLRMUBnY4o3wLDiEWNgtkjuNw2jsbyfFEptgEah7yE7ykHRRvw9mKWjnAzvGiK6dvGfgq",
  "key7": "4nQdB9uqGpWRuzWxVSdV1XTa1oE8otHY57QxJ8vYcu29U825xMsjbvWyzcP61ymyt9senX8V1R3DRvpFsjB6VTxj",
  "key8": "4yWY2Gu2haMbsBALAtrQkD5USbQqPWTqL1QKPuXBB7RHumGfhgnkZBiXgQ98fJFuf8qFQWDHz87AERMcNYq1AGwf",
  "key9": "3v2o65LEFteiAqjjZygzSDuUNwananipHEzvBTeXA6Zczn1jzvrBPMainkFToYRX3MJupowqWjVBw5VEtg2FcPB7",
  "key10": "64j3iXJHGMZirV3kqon65eZ1VB8gx9P2FYUXz3YqVxfpo3jo4c2GwZyvRbw12fkena8dnNGLm8Tt3PqY3EmZKFgY",
  "key11": "38paf8qR5nnCFSBXSXdDLJScqvTcYuPRSLAhMx1289Kb8DjcXyzVj8bU1Kn1xJqnMnuRVoe3WQj3SSj7K7Kxjdu3",
  "key12": "3SW6KA26NGX596FAnmwF1eh6Z3dGHcZwnJwek9EyFxtWps7Cu9YsZ2Dgu9kmV8fP8P8ZZ5prKGt81u7tzoxhHNnp",
  "key13": "uncq3erhRGqDfkiuUGoHfMxH11HNveYAMkRALfMhVdwkatxKbMRbnAd1ZsAo9HgNUxLRTGAmtko1Rz65V52m2HJ",
  "key14": "pGKAHsYBFDyPxLiQ2eqFvCAfP4SxgNSGAUxPkKBo3gjXpgvEgNqNH6HmkeujkLxRtLYvv1ppSBUmYKiVAN7LXHp",
  "key15": "21FdcroLcbtYiB66S71XtETWfLYVW6VjyfZwMxWMeQ7tZYfKbZK3nkSRqk8rTHoguNTRr7712fwnLNr9WqoJemt9",
  "key16": "3Qj3mAAGGr6a7kdh5XwysoKj24EKVfzSwHhfczUGjrJAMEF69BWaUXjSP996bcSdwriLtkNv7awnv8onBmpzoUoP",
  "key17": "4pkSbN4romtzLTMh3PzZyqrf3WgmDiPnoCVANrio63HFd2Gkmrsa917RZmKQ3srr8Hvn3aa1TyYeRUvSYcy5QwH",
  "key18": "632ABPJ2n55tUeqkSSpL286Fu98nmFTT9TWAD9FuVRVYM2SQnBev2WxpnGGczixZn2J2iuf1TFaZ16XKfFNi3Di8",
  "key19": "4yNBPNJPsEZSHoAeV5MYEHDL8KsxDs8zQRjDSBFyk6JUBHFKpyXXN9QwkuiKBuYBVLannaGcdU6seuCUCSp4mjX9",
  "key20": "5XHVfBwXJGdWtppjarJZnbyWaSo4WUzXkXC5DpqwYMgMYDenPkqTtotC6WXX9Q6DjM6QreFWquQmgpaEuPH4cLTp",
  "key21": "4opz2jTkwCgXutf8d7V8xemPXfp7bLg4Ez5D8MmpzEbyxi7B3SWcCxm8PmiUE3eCARMcW6CCgM8mhRep6vQhna9c",
  "key22": "4kjyZdYSU2PuW1ermSfktBD3Wezep7VZHmxPWnRi4E2N4PEDRV3D5DHiWEFL9QxmELZnyUXepsvZPsSwJtQaYzqn",
  "key23": "3PrFdV15VXj3Q1qcC5xZBGFgwijd4zzCwc7QMHD44njh5NxgxzV6SoGbRdtFMSAWmwP6BzANFovyg8s9WCPg6fXe",
  "key24": "2pV8YJt5hHvFRpptsXGeRThasopzYgbQa2B2AUkp28C6AGJtTSeKrf9udShp8YC2VSngj8LC8hje7CHWum8Hkoja",
  "key25": "2CWQCH1UWkT3quWgcH5arwMiysfkryqtBju2vB8Vu775efBLsYYBaqE8k4yNCwFTUvbX3gi1zw6okKzSryTv6fJe",
  "key26": "2zfVNAky9Y1HSBraH2DZEop2AnmA7mpZqqgLNEx2qHjybpt6cA5tdCuXqEWzUBJnvC3Y2xd9WWrzPEj6JGWfJpTH",
  "key27": "22xEV1wgx2A3MvYXefFUQduqEKXLku5qjzNRwnfq83J2vYR1gd5swhCBwCiibRQGjHo2mZzJ4cvZpGzjWDt9Mb8K",
  "key28": "4uyVdqtegTSNtu1P5TF37QMsAR1bmwp1xaJ7cqZW4zW8dpbfunQaVkhyKJw3udGvRGiL4CZ2EV9HTsQH36num6y2",
  "key29": "66SXzoAcp1FkZnEBPncHhRqhVWwccUX2GZbAU1SXodFWfkReWJQdHAohR7skJJeiRCxZ8wGVanCXrdTqFsCxKvgT",
  "key30": "33jGeJtLwzh3D3S11bAZ8iCXFirgGZtBvFuYQSaaaYu2MYSPPBVk3SvT5VLJTh7CM9zsm9wwhmXTvPXh1ABzkcT6",
  "key31": "hsBHrbNeUJgtKJhLr7tvoKzhBPJtRy2UFxKYqNbYVGRuBFxLnZAcrq9GU4ySmmQcFrtwJZPqHJiWr3staqn1CHG",
  "key32": "4BYawvYE9wbU3k8L7Bx1hzje4AYDo2G2XLPBUj6p4VmCbkMDEpP3fLzeMwKSeEQTfVUkWQdyZ3kfdMkZLPin8ge8",
  "key33": "2cSLSnknhRn7wbq9jLjLxtV4pgGruiwmCxig8cGSaWWCLJzacRa4JoE69rQJm7MGa2Zk3QoCQhFitg9bXeQNRChJ",
  "key34": "3y5P7CUfnSJFMNLh9VMgrwe6u4u3PDVMVS1QWwhNRZLwWPfzeuYqssDreb785uVgi3c2K5ve73oJz5qLt1NzHTCE",
  "key35": "2ndGhnrx8fRKKqjmMBVZoDCds8yiu8DEnJMvmKa28DG21yCbqGbSipuxsPHi9NmBpnRYBsoEoRiVBn58EPK6Z2o7",
  "key36": "5Jg6PBYHitBMSxKRrNjzUnNmhZQU3iYdnfA8ehHgDJeXzCWoigDRjrCiXv5u4vR3f2yuLEVipWHjvBGdUWz2tNzw",
  "key37": "25nK5GhN1ct4AxKYVuKqa3a57JYMaCwwbtVerzDey8wH9xUo2CvXere3tMj3rFrhRgEwfn8xjqcbQw3T4QMJZ2ES",
  "key38": "39f28jAmnEa8Yu6t8khoJEaq7wpToiDX7t2fRe5Y77ErdGKC6yeUffrggcvc3XJcWzbomqqERkg1LdreLy1w2ppc",
  "key39": "4QWLgQe6GNjeodM4QaYd4KJSVYr1ZjrRk8TBJq6GZE9c7r8Aob7e3Uq3CZLqUwFVG6hNtjBfuYF7qgWBogheZiio",
  "key40": "3TrbL1M14pdCXRHTzxMnm27F9qmg2TK8EyPByqJrBf4hiuyBybZg8NbQTzXK7bU2yFZ8wN6uD5Fj8CuQ6KBRdQuj",
  "key41": "4poqPh2YgTHLvQ6BxVh1dJrHYTU96ukPu8baFmCyBRb31wi6SQ9A4wHRCTwt3AqzufjXRb5NvhVWnyoL5H34oPY5"
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
