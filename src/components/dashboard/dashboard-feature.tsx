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
    "5AhUceQtsj6u5rVJoDgJgx3htSkUWXf8FX45WnmMNZQaAcgc45zA4xLy5e4hMdAVMqfnRUvAydtnir2nPXZ6NQRk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yvJmUfh2mbdhVXGRSwCvvrebi8ZmtWJ9FoJo5Dfm8Zcq4CxeMQyyZDcAKETuMZf3eaSXQFX142FdT1M2cpRhUd9",
  "key1": "ka1zZLDLtAjeipEB4K9ZYSv3VzDR4HcCv4ca2h4Lgu12Hmziuea9YXGgPLRM24scoAsYyvWZetYi7tvVDqxa9ch",
  "key2": "3idh9nrGoBJPG1rNT6Hc6WJduewsNGxepbPvwNs2qSmsCR2RudbAxhDYNkRphwENRk8kodHyhHSGHSFjZ7o1qtt5",
  "key3": "2qvLoeFcrkSmSkpfwdE5hse22dQZWcKXhmyPPhkz3nqASKcWs1Dn4ovWNrPihjLysStUpScbLbXBmYNMF7GSTdxZ",
  "key4": "3pEqr2sQQ4FiD1YiKuMvuNjPjsvt1gG5z9B2iAXUjAm2kqBpUhoxWZfejQzBJPsWWVfvVf3uBsj6Quk1Yskczasf",
  "key5": "2iYZB83QLefRi4KWYDvXyTTLMY5XWaRk79z56C82eQYRyXucdC7a2CSy2vuyufxnKgzsSN1vBWyKXsAhKVp37mtL",
  "key6": "KUxEQfUkn3csGRBACdy5qg7SEDShxT6Y69r7Ne1PNEMUVfrS6qHnhSnSjAx5EEF72To4of4B4Uz3QysHbrcxN6q",
  "key7": "53ZHhQU9nuox733eTbfHTxWgsZvxDdCGrmaD13C6hJQCkzqT3EpAegeypdcaApgeg1xT9URuvFvSbvcfJFrWfoXR",
  "key8": "5x457b6kixXLa1j2cAa3mAFLFRM2FXN8d77Npe3EiTZid2Tt9FRnLqvkQiLGTN3ScRGY4iiqBov1P2njhXVFVZ5y",
  "key9": "45AbA4wdftAxZY3EkZ7Y5nJ9DaThEihrHWghtpH4yRDLLGJRmSLPh74dcojR5EtAjZm81SNpUcGdtnE3RredG35e",
  "key10": "3CpGvw9XkemurBVVqKmpPcUByPcnEgUYcwTeVoWgJByQtB7EAG6MX8pNsJLKX2HqsNtciYaPUdcAhSfcguNWzBpf",
  "key11": "3xF7fsCBCHUY7e5VaAFeHtVZJy6NJzrSQLUiJy8RvjxXzYrnQaxcphQaU4AfYyFnASie5wzB947Ev9JAt3yKYUwf",
  "key12": "34neZoReuifpzykhZXKTv3c28c7aYtuSBgqWmNxeJmgfvndwrsa1zqSkderBmYc91Y3ybPyKX9PA5UmYf9hsNSgq",
  "key13": "41tcogB76GEPyf8fXMG3qcVN6sdbE428PP9VMXAPFjT7VDmZY3j1coRLhga6C8MuC4vveVAt2euJetmLoPptEYiD",
  "key14": "3J6BaeExqm2zgyMVJR93Urwk2EVWvxA5BJ8uFLjUhJsbYd8Gv92MC3WhmKiRLJRhcB1CvWfF9suGYNKzmEfvGz1A",
  "key15": "21uKveosk7MRyRhrMEKwEN1obSqkLy8k8CSnEepFd7MN2sorgfsQPoxqGMjsTKC32TzuzAQvCxaQQL8Z6bPKqR2X",
  "key16": "mrLLypTU29LwLPVevDgharLWbSpJTXd1Y8EfTkrt4Fk5e5jSsrapdT8nfkpJuejV7hvs74C4PtkPFbpiCvifygK",
  "key17": "351LFTpGe33JUMEy7puPtnEdqYFEbruVdczHicBxkNa53shXRhHDy2vPm3CEz2MYTC6btHTQJ3vzssqMzETamwrg",
  "key18": "3awNTP3kJoYXwb9rwH58gehkAZfsRd9Uebqm3eRBy2jXD3dWehRQDZrrNxQNUxyEEn2RMPXqQ5L3E251iBPesGK7",
  "key19": "4Lgo9uKLR45njgrCXYpoJaQKT2SsMmgsx4oshGQyHcCgb2jDm151jqM67S94Po4AEuPHnXu3h5bfxh9NNVBH1gZK",
  "key20": "63fPFjEWijEwb5r1BgUBB8UhbHkhX6oFV61rp3x1Wv5j1hks3vbPZMu44pHyHP872TMfddH7SxCHzDsgbsCPvD3M",
  "key21": "5zE9kUmTBXTEE4Vsp88MEAab4fGWwGToZoBbVJCXpRzqRBAzuv64V3nGBBkVmK1uzJ1LQcydKjQsf7poAzSfKY6U",
  "key22": "42v1CBzwBKDLxvhmXm3hc65YUrFRi9nyH8BeuEfuuSa51CrYFQB2BBUWiDi5i54y4B2q1TNu7KKdoVwZErJq1WCk",
  "key23": "5wXPPhihn4cVhE1C2VPZ8QSwD1G9cZbcCNyvvnysUToWjeVCpjbvcD8yWpuYUT7CLDFncCxd2cNu6wm6HWhD7TdS",
  "key24": "5BDAF9RNZgFjr9huZM1nKRYadiEv4wBAzHcPh8cev6XGzaT3v8xYiDztXsB8NpeY67Ky45ttADhfumzcQrQW2Zb2",
  "key25": "5ipqafw2MAqwzE89EWPPUfNaEcooph4WrDCqLTFRD8T4K14nC5h5Bo4bTLg883PXrXhZeuKgtUYdDaaXDmzTDBBq",
  "key26": "5eNbmaew3LER2M2GVQp8PHpia7MzcFcyt3TtVDv9hyQMEqUcozKCFRmd7K6HMWFUTFSV6gN8U2CWzckn8n1H1PTs",
  "key27": "2Ug1qu9XKu3Xx7z7jxDK38rkpmN1ZAWnsf1LRJkYyQJERkLPMkR3jkdtve3LG3CFWG6ZEsM4D4am7m9fprRJruUn",
  "key28": "43iBJUviPs4aaeGKdHGmkjomASoUof5Mu4pHHADaEZYfPFsS8X7dDHgDVxwoxVGmTHuuPLMMiqLW1CQLYF2UCXdL",
  "key29": "V3B8UdaJ1dAbf2ZnQkBLa4RiBV3122VwxhUK7HqLyneq6pCwyEUzadMhKfJWmKsnmVhisZmXPYirxJCW94qJRoB",
  "key30": "58j4kbCgfimJCtGhARuGvn4N31ztdUVdRiKXZQEuYyqzPCJpqSxJeZTaycK3ZYLb966nDjx3aC1aAY3ypEcdFEQy",
  "key31": "3KYjFhcHcnFTSop3Wk4bT8GJTwicxZs9Vqzph4bPKaCCQdZgS4RvRyuhaoMB3zyH7cNtm46KjtBuU3xmpZiL1epz",
  "key32": "2mMnCAKad9i8bKyk5xLdpSMj5ezVoiHK8Z1xDPanZfcHzNcYuBKeVdoBhifNRUCBmdzzJuEpJWyCqtgMcwvJCbyk",
  "key33": "5nfj9mj7j8QTAZrKMLNuVhha3YxSwApNCJ9bNrHiELbmkQxwL8n6QYjfZ3b6Y2VwrFBk97cP2vvoNSyi7HeZMo5x",
  "key34": "4AhqCJ6sETV48juUcob7mcoYYSg4FgZCtJbPsaECWKXqCUw17TbPz6kumKTubdGFyvMtKCgfCgAb5UX9GWsG5iNm",
  "key35": "2Z838bjeCYtZryq1ccjhM42TiadZh9yUuMNoXzCtnnhHynNE9qSsDsHJStQdovjZZynjaZ6b5fkjJ2ysbZMdcERY",
  "key36": "2bCJptgRbovx7QzNYE5UMhG6tU7qCXan1M6muJjN7cEKTEW7P8CGBoZx2LX84FtmqvLT2nB2EmERprzLm2u4LNBY",
  "key37": "4tNbnK6MNxGKuQ3BJuRbDgwZdNzt3Vs5tjMa3q1HW3UT6GqQffqB1tawXYxnqNjLwV1jNaByhXY7adF3hK5QUcu"
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
