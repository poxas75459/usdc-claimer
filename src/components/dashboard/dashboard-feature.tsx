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
    "5SSvbpHLzyhztGp5Bqc9a2s7VKp4HY5cwmfuC8X5FrBUAbwkAtmshyy9qBzV98Xi4Zx1JnB6oHj6d9DTaSp5Zrtn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zGveJmhxeTZiG1aZqxHngUUEubiS4WhFna2nmeND5M5Qu4PFQUMqGy4VrgQ6BSfNDM8rXJvFQvm99kqJmMpPbTt",
  "key1": "3NvQgpUg1HnZazp2BgH6iVgW5icxrZwpWxbxVTBirwK3VTivKSp2Q1A6WzPjdHbGCpiQZuepTQ9jgiXUPC8Wut7d",
  "key2": "2kiyTmGSpYnZwVBsRrbTHzxG8oEhXUj3YpUp8vqztDRbFi7DPdu4MGniFz1H1pMUQcZpgsnyHi9F59rU1xPrGHCf",
  "key3": "2iexAAbCx32jUxwfeD7ubeLr9eBiS1FRHWUUuXHcL7diQrPr9cDdC8gh7nwCTRDSEWmJe3WX8TaoLoQiUPQhyKyq",
  "key4": "2qZwYSsWsJHdctZr7h1Td9zyrN5iufoZfJUdxrk93XzQrBKYLBpPMXBUJhsnTSD3vcEv7bNPDu34EtTbHdXFPeUD",
  "key5": "wmsMV6SegYZ2KJdRXUKinq4CiB2M6YpMSSmULAdXsNzw4hizZKZgboJsSsnhkvMPcxbb1Z4AUdbU8jQbUgkagUy",
  "key6": "2gokhYjQPR8ycGxgmtj7s14kc6ckSuCzE4zf9tV7qrfWESfBdXgzYbBVbEAfYkiaA3pzF3v3AKfWhTiVT1hZ6VPe",
  "key7": "3EW2yeTAK4sQFUoo4mmdRKFFQaGQbP9xj695HftugVYogjRUz6RKnYVawQxS4KXxqhBt4z8H58uB5gEJYfAaMC1j",
  "key8": "2w1B7bUHrDYVdJhHJufc9j9zCS8MMMu2fVnBuoqsSV7qx1JEXagEXbACFP3tYYmUBJ3bGGwAajBBzmYnC7a76E1Z",
  "key9": "3s1uMZWxuTveAZ7mhijRLXJ2VtRyBpASHg4fYJtWWbDP2ZyyVbQUqiv4kYEd3zLDUki5jXWMsmhXByX2YBbTXkGz",
  "key10": "5yBghf8tphmE5SYTNbwErANptz7rWkdGhQmxB3ryoeEC4S4cLD97XomnmdoFuQWcWuEYxGZE4cgdHhDWfGdLwXB3",
  "key11": "RnXpU1NJqRtenNCyANiiRUXc7SjuKxnvojuH3uZk28z4A6JhDfUBcxpHzAgGEGWhxjnhZ5mgAmXN4CJnrZjPZV7",
  "key12": "5ZtojQZmc975StfFkxaLhPjje2WQDzLDBDQTMTor2oK5yMq7eQtgg5h1XoE5PvP932k9nFb1HyvPrzsromQMF4xe",
  "key13": "57H5PTVuihXSNiR6kJ5u9dukg5oWpctGWnZpJqzHru777JtqUNmJ8ZgbWkPUQ1q26QuCcTA6urut5udTKbm1p5qG",
  "key14": "4cyJGWMSvoLFAsvwdx2oajY5jJY1i1SFsa39CzRXx416aYY6oYA36697FoAVFuAf59FcpMdaDDFTcQng1VUFdp1f",
  "key15": "2ADrUC8roecPC4s61tXHAmutXB4ET3ycURNdAbkxsj2T6DGo6Wf1dyW2oaNffwAz6g9xvaxWYphVfjCA9ckUvFxE",
  "key16": "utQk92Zd2wBwmjTphPUScqp3HeSwsKiLmnGowwYTHaaV7wssVsDM5YP5QxtSep65sjaJtpATr4rMaVdMDeLdXQJ",
  "key17": "3rR1Vw7dvKySrg3Mdb2CQXEiDTZcTBkxpRdpMfqMVY9ZBSFvFYYQz6FxzqKbjYsVwNXv9w1eGQSf3za7bKj4Cwvn",
  "key18": "2e6UNHmhQ4ZfMhvubwzWWJk84rvksLbKr5CANKgA8LkxRyEYEut8Mww8WJJuENyC6aCQqV8aAth6iystBUVQQnTB",
  "key19": "5sGiFW69xEN4RkLhbkhztmHC4jfW5WaeaFcJNkKNHDSY3NQx4mMe9mn7sKvuHYPc9nm2fMmxn6VBbp6jrVddQor1",
  "key20": "37REvX1qmKoGWQ3rZC774feuicDgJnJyHJRAHfpmQ1dTf922yZh3kVHvkBQ4qSW5LpsLnhPzjMSH9269mAtt1Cub",
  "key21": "RWTHbP1eMt2fibqAxAfZ9ta6tYM2ZVxGPfZoqm3L9vgVb1uSfQYLFt4makLZkpnee9WZdUa932mSsQWUk94y1ys",
  "key22": "VDjbsjAZa58fid28h2L4qGbv5iArmQvWcMff8jcTRtk9C6HuGvRcjK983mSk6LvXVqQFtus6bRy3d6GZYD864mb",
  "key23": "23Dycrgf7YSiCWRy85agr5qqrWPDzLS83nGzutH7i8XBTiJWY5CVBMmqCXbGFLmwf26QxxLfp5tsWoNcKenDBkJm",
  "key24": "2tpc43ihseEgHRQaEFJ4kxSUPjHyFGr2zZFKnWPfxxVbDrmJHjLESrRyqCv4tsUqtTSYmzN7YLrRqEY4xxh47uto",
  "key25": "2AtvWSbxJZX2eXKz7bzrzPyPtU8cwD7JDAupQMRC8U8VzF2kU9oqeoJBm8RB4uV7ZmyTTUXxtANVouDfZnFD42TE",
  "key26": "d74mu2GbFgmzS2ap3KDAJ7cKdMVK7UwZ9z9AyYm1TKr5dY2vAehenGeQhFbf5ougqJaC4Xss52o6R4oeaUy3PUi",
  "key27": "4JKcKCUr24KPuNxrf7CH1tGJuiQf68va2Bx3ZcRX51JtGaXYwnVz7rzseTiT7jxfbh9ZaYJPy8xhDfKidkemAcpF",
  "key28": "4moQChqXrQJFKLhn9qFR5bM8tVkCRvk4EPkPPm7pnn81Zf1AyKDfE8fTNHo5eGfeV5rtLnwS4MAZcntd1vs9wZk3",
  "key29": "5sg6fAL7NnaMM5Hw2z6ik2bXtvMBYJ6sSQvQ88pfjz3xvsuHrfTsdsKusFFZ3SBVvqXPkti5wDpAYXHPTne4BJVx",
  "key30": "5xB1Ft8CdmnX8NCXA1EpzNYz7rd1h8yh4z74sqjf5MwVSSvQnAYELcoGeaoNsHMPNzNkLrG84Ar5egdDzkSi7fN6",
  "key31": "4o4gkmW8x28uEntEJA7JcpiPfc6L2R762p4VkRQmZQTCsZ9JNuGvY6iZqC2VWpbJS9CDBAGJu1nSd2xfwH76LhR9",
  "key32": "3Ba1wNdSUUu5kscXG71h7eYx5QSemjrCARL2YKqRwFRvL3xAuBcioovBkvoq8cpPq2eXnhR2ihTpNjPeZTVyo63F",
  "key33": "7S7ZXMkXd385YKy6RBRBSvUriJHHu4HmaxiAG5HhniQgA57omBUgoDh7ef85Br2RJiCE7M4k2JDTNFU7ueginyK",
  "key34": "4dm83JgxmtM2BeCy4A11LL7q56sgVM5ckU5P9Fn8gNMMufHbLo5cs4AsMxvEaCQ2fSuHqvEurtHmiZbpAWQ6yutY",
  "key35": "2SGryaYB5CGzUJdS9vvfkw5BiZd53CdtJtiWZbRi8sPRKe8PUZu6o2md4MiSP1yR2ckBnC3aR82petkrM2H22dQW",
  "key36": "58tvxBZJMvh52DMnxXC5m7rMsdU5krqxoXiJjdxskAe1zbNtUhzphuPi39uhrCvdZrTwyf8acQeyUvrv6ejGJsqt",
  "key37": "3LsiazpvXzfWVZsTpRaVhkZYYcy9c871Kk9fYCzQUU6FmHJNFHMPNjMAzeGAHNhWhAwLW2NfrxG97MmLv81KWkgE",
  "key38": "tnfXmYby8hWXASf6BDHg4r7A4d4t6H51xYiWDiZu9VgifMCXdDiq3zns5Q4xQVJCpFxYMysYxHV2dEL7HsUmvMT",
  "key39": "65V1Hmv2FGSwG4MhK4fAiWpZ6YdJDm29oz5ydR1prHfvMMWYfdFDssaCL463y1Xc6to6VS2wqj1QmF7vbtj478MP",
  "key40": "4bVSzvN8DnWWkFZA4EWFNEqruvwL6nzRSfWgvEh9xJ5LXAThMeqw9Xj57MVMs4KtdKdUbiAMd56B5FcmeZ6aaDUR",
  "key41": "deVf4GS9ifbE2jqc2cNaQVpDC8XqjkSNPaoiNRpt25pAte2nsF4WkPSumegnor6hPwx3ziLdEFKpdGdWxdSUUes",
  "key42": "4LqrjgSAfrzQZjSgy8TBieHx7ywfPBN4yH5jAq4d1Yeqwn6N11FKEXxPnTUvZxh8nFRNMVByDkAcmigL1psBGYCY",
  "key43": "3VAiygVMBXi7DeCaqHhDHhDH3Nna4QuWRg3CX42CSh3jU2bFMF5Dv3J5Nb7RsdCL6kG1tzGYVgDaV2jnj8oxvuLR",
  "key44": "2ULgk2WKvXQFqMJevgDQ3UTx7K1A8GG6RyKYjzBdELCCTT6CAo3P3ukeJLiSyJFtDwCFGgHRwmkCXNDGqBJpaWo4",
  "key45": "3uYovDHdAJDKCspMgUv16Riar1MAKquK6f3Yx42de5QUr7VEdhrjG1WoAGcXwtVtE7UC2zHFzDCotAogvxVepuz7",
  "key46": "3AdBD8QUimeanmVr1J1hS4Ttrrf491GwT5TSBbEJomEqZs7yRyzn2fvD3Mup35maURjLrgXrDsCHmXEYLkosaAu7"
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
