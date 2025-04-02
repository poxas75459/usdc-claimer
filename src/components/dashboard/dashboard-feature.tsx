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
    "2KJSMn2NJQP1tod984zVnouEdtif4idNwGyqPCZimCMM6TWzkTDpegk2hGSeQMPFvxcwJ1e3KoAbaQSM133XKJUK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wgJyW7goS25BUCJET1pnvKZ1QVCKJpgY4cvADNLSZ9eQ6KnL3W5NJbtLByPeZ3WsAccqGtrqc3ZrZQWtLSCvp4W",
  "key1": "yoJYB3PjJvCaPh9JbmUmgSzBdSPoxz7YQgYsDRRp5uB9uLah43zsoS7teic1jutpf2X7YAAkX7fRcjgXorGxJmd",
  "key2": "66PLuPBnGjr4jDEUzU9mQCxQ7rEmM9yLf5tRvex93YQRkiaa2VZrFZbripLRPwD7V6dE4M6hBFGaqyHPWT2HMnSU",
  "key3": "5PJSTXg5bW7RaYwB6iRBT7wpDsFYodF53BWH4yakG2i8SiXEdpkqfAJ5HJasYs4WxB4Uwyf6nwgTJX74qEJB8o2t",
  "key4": "kQHJu5eJK6wACXfjHBTiKz5wQspjrQYXqfXe9dy3nKaQYbD3q6ALu7YWFiRcdgrYMchn6QpUGD8Ux2a6XanStbb",
  "key5": "3kU5AW9YeXDg2hXoav6y3tHMdFkeyD6WutpkfHVcwizfU1PfYUUmaDBoGGbaYxudngFg2Vmt72ZeKfzWNpy78RLB",
  "key6": "4guCBbAQtGE7xjvYmsx2R2HfmNFDo9QvhtyAQ81GQrYyrQdZr1QncQsnFEoCjsjxENVTwoGpY4BKWyBffuUFgYpt",
  "key7": "5xXPWmtCgKKgCWKnYHPjYcWYwBrcwqSkkiC39wYSW6yCyfH2uvP3Arb5xmqtpTzuQiz19fPWNS4JZHW2CBHEHLpZ",
  "key8": "fckXVu181Z6yqHyLgkf3YvKU7HK6qe4ae9DDYqhmRfMYj5Wd9wTNyMcSDd7ueZiXbJ7DHbdqPY4JzboJ5M2wA51",
  "key9": "s3Vv9JSi1Agex6VK9y6VQZvVnRGkvNmnKPxRK4yvNGv7RyQhKJPyGyWJ8Eu5ps1Siedf5Gq2zEi9peeTBqphS6r",
  "key10": "2XVQ2A71DPZYgywvsjVDWT3tSiGHR8Fr7y8W82gGcd1x5y6KozRa6ENRQb4WiQ54VKfJe8n5qou6xncTkUhptDFQ",
  "key11": "4bHMqoXyHLQDSvKeKSibSsHyV1tktAZBU3gEZ35ryeZ2tDr7VCuZy1zDD2TXQSWHe4Ruov6DJHE5K8VDvBEUgC47",
  "key12": "cjPQLS77aGaNxBhqctNExtpNsCUGth547kXo3xJnPCSYHKT3FpTD2FZfK5eRJ5VEDsfzdkLSKznYaEJuThZsnyK",
  "key13": "5hp1uS5ft3F3df5LW9qFWRSPYkaSVStnzq7aiz5zuLYjZ4sPz1DeU9txJai5tp3EuQNyFSnkUFyn7eVsiBdLZcD6",
  "key14": "2tQiTXAUgQwPmnGa8uh7uJHERUbMYoSBjtNjANUnEashPtZLRkZX1VhefLi1MaU6NuRtugNo6UJ8qx5JEyGSeN7N",
  "key15": "4pRJTYRxGbT3fnV5KFDNNwcgTwQvyreWPVfrScwZHx5hwHcRV135KDuFkgLdkrMyzNHz7zR7mYjd192L4R3JA5d7",
  "key16": "25Cgd4ERRcCzPLeJhg9u5kEGUANJ238qnhFFz5BDeKp8AxHTaAzJC9pSP4hyngSZTi1hijN8byVoH2NAnLrHcUZZ",
  "key17": "4CcBankuSC8v7dhQJNwCc9Ksf8NpfVX8PgXtNao1dsCqr9vArXEjoYXSRgCsWYsvjMGyhdW2ZVv2JgoK43RmEGys",
  "key18": "4YH6xBnDfmPhFioJcLQHDGqrK36pJTJ7Exm9KtDDL8UgP5tnyuF2YuKXxZAbh49si8mZs6tbk4oWKCYPVBPbXVtG",
  "key19": "2j5TsMWmrTjJPk5ChwESVxUFQtc67cCvgooAoWcpgCBve8enXVQZcRwpmugzorhHFYa7FeG3uEVyJd13Z2xVdvWR",
  "key20": "37vocT3Q1qMHnPc35yt5WqtXyTLQercXvezqSGaDfNHrf1pNjLVWcAbXXt1HBrmNvgDXqQatx19b2Yt6GSMnKgoq",
  "key21": "5h9bzyrppcuxZY5CxDMfNNjHBnjtL8RU2UmU5twXsVDcC84omDxpFWSBXnf9TCpYPQXoAXukgfazAhUHFkzXxgmy",
  "key22": "4o78mByUrjquDzJcKQHKz87j3vY9zSvdRksaNv14Xrrx7GiVcuxqreEbg8vuE2seXoJAPSanvRdhxC64Dveubvob",
  "key23": "5NAdbeC4Tf7ZGnUGqEqvPLszWP4ySFF5yYbFcQDak55cig11auRJvajD4tiZ32JBgZuUptdaDNMojyxjew52VUwW",
  "key24": "5KMBVY8z3PPfsWKRZFi9ktnGRd4GBxPWgqT8sMdC71eB7z9An6DZwtunpFv7R4zMGGpqFwr2Qg4wMUN56rfTtkv5",
  "key25": "4Kvqy5gGfL4T9sroaiz4HYNjr1oWeY41EQDWdCqeArJ2dgnCskazkxHNoFfdtebQyD3XyNFZqJ5EBN4ei2Lh6nWP",
  "key26": "5fTe65sSsF96hqsxCNfTVSAKFmQoUoLnWgbFP6D2P9KNBXqHbUVqy5nwrFZGFwBohyHUhhj82hhHGXwfJYy3bEDw",
  "key27": "65yzdh7CvKLWeHC1hwEBPjrrdw98XNLWu1RrRdGmWLxprKuPkYjAiGFEeWxdEmWTnJhebusiSQCoMvuMJ2ZRzJ4x",
  "key28": "5fXSnSJpFJeckFLKes1H7caYCsdWSueuHNh13UrAX2h1pnYZAaMaWrG2JBSakNnHpj5B964ozaYrBsNwJfqh2om",
  "key29": "2mouaMN8Y2MX1SMDG2ouecBTED5w6n7uANKTbS9svDvwtfzaEynqt2pSBbKXLbEunjGfhRHQdR35eH7X69kyqBN9",
  "key30": "517Z2XBWD6uTKQNtrm1qcWWPkonRxU73Zk913p7uAUhdQZazzdQwH94fyNojvi51mzQYCZSVKnBZ4RXFjfauwnnW",
  "key31": "2qhBudR999xgQjJ3FHMUmJudbPYMUkc2me8XN3j77hvkAf6Vj615Rcunq9nZLNcNVXkRwtPB1hcV4WKUi3cHUFtm",
  "key32": "5z4ruouiijGS3fGDD2QTfhckukSR2ejYaGKqbLdqcLi6bdQnCQiygQGLQTB5HYptMjphz2Zm2jWCzyZi5FpBKbsx"
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
