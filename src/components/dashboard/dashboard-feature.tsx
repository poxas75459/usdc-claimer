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
    "4L4rRLta5ZaLH9qDMKwCVkEPBg7pa1nRywYuqnwy3Mx36BV4oZjmDWNifmc8QPoDWCDjBv26Koie4KGQK9UWL374"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3H2aLYWSCwfCGXvDhYLckk4y6dS8wAoxEA8f5oiV2qtkvCqNp32jPzFAvsY9FcsQ53TjZahmLp5DJiKn8TGmS5XM",
  "key1": "627p73HRt7GgM69JppTnN87XGQdanQKFsQ1si5gHoxqDyjZuud1D8XocrXXKaDMtPuK5QisSQaVFdVNe9Y2CDeCp",
  "key2": "pA7p6HW8LPDk4v2fP8ogo6HPzV2VPtTA5qVRc2dpgkpJKNEsrj3mCmai54AvLfGCNMXC3t4nu8nzHbY6wmHcy9R",
  "key3": "3REFA3M7HM2gPMdNh28sinzMFDQnosv4AdqJJ6nvDEMwg6EnPqWDsYpRa4fAZgx11ZA4P2m7wqPLgSCn2Btu3T6D",
  "key4": "3aVh1dtQcNsvPBRCcXhqVhtz6YvL6jpD3bM8qh1nYRSbh4n2UrpVmgfcmSsdMagDFGo5fpWHnreK9jCEDMjPUmjE",
  "key5": "4hAuQcMnzHzwBoPjcw8Vtca4ShKBnzB1KHVDv9E7WFyvn3uN52aLNfZS4e9gTJWhHBzzxdRViMKnVuKKotk1iqTu",
  "key6": "5H75Ap4F4PS4gPYxX5FFj7WrtC2x7h8Hi4AL8vYLqAGe1VjXmfa1ukLKKjaxvhD4nru7nMCqw4Es9QdrwbkBjfqn",
  "key7": "6amYbSYchXiEYqV5L4YK79jXDC38pMjefatosyMs55CcnWB4av62HPgTaGhjGGNxdCfKGP5b7nUiHimYq8qBoop",
  "key8": "4uS1SZRBFLScDsJhrZoHo67F1QjqrDG3xS1nGKxjQkyCM59Q4Xn2Nj98i74y24959YUGhqi9EGyu9J169n5A1zp8",
  "key9": "4hSM4HrC1H34hCF33Zn2NNqLzTbf9jcER1kPjX4rQJsuL7CXUvGEPgv6xb1DgexS7WJ3YtcspEXuWQC1arTNRiNx",
  "key10": "3hX1zt2tb3asQHexFBN3W5nk34dqrssSwB3zs7xADjHFQdgfDMCpZ5LLv9T3Ny2YZ4j4KuhC683bR8UhR9jteuzM",
  "key11": "3Vp8E6XKNn7LJEtUjTKPEdhHc7PveKQjtNBPYezC9jdssWJRuP5vzUFiUQLtR5LzXaaJdXr3EPQ2ToHdJmyGVwcX",
  "key12": "4FMB5P67UhbYP2J4TXiqBUopFkX7MeWcZqFF8PLmCGVKNXwBvvbBtCUBphKtM8RtGEkukmQVeKp84UT3x6qwGT4p",
  "key13": "HUs6YknVsJPtHghvqZb7777RwZj1oyVFoQVMDiD79MTGz2hJrCtHbeBXkeg7d7GN5kBFsUVESX4efMP8d3E1bJF",
  "key14": "2Uchvr3oCvgs5QYNCV3TcYTrjkJYkAFSyxECKXWkBsbtLUTSfMnP3nUnDGvn8xQCgYeN7dLJmJibKyQDbmNBbb5C",
  "key15": "27RJEnxAyMhf6nkCaTqDMseGPFNFPXKQsEAYrm7SLB729zH6y9NqGsmJmWSmz4AFQRhHkoiAS4K3q1ckkMu2dreU",
  "key16": "4UrX6rcVUmgn1U1rhosZFHHScozgJrXgSTwU9ME6BYajj2jCEugoRRg2BUSxEHzEnPDnRpgDE6B3GeB31x8vPX1u",
  "key17": "4HMhjFjkrCj4tvvk6cyew1GrFtopX3abqg6RPNkJzWVwCTDYDEjcEU3EWs7VmZmAZWBBaNtKxrssP8VnjUak43Gx",
  "key18": "4JeU67R6nMB3NxhkDkCTSvwfHtq5TDgpYVjtDNtD8Ym8qCgtYrq6xYevrUqy6JCmXYXrtdKv6gpBCV6snFzGZPCw",
  "key19": "2MqRku6cgcQnwDLoV9f4DxrNdMRqXhK7QXVnkaaKKThu8ieEUb1h2VF54DHzv1jYjyCowedLhSLBAksUVnRv74Rk",
  "key20": "65JRiVQhbSCnipaWTZRDT4FoXV8CYm6ZhPmhgX32AQdNeAwV1924y27Kz3iBadHRCU62F1Ayv6KMezKCdvdW4Skn",
  "key21": "4k3yhGfgeHWxa5vCsZnCnp5MVFwgAUU8XA9uKsdME1tYYWLJJXH8S6Xysnnw7SgijFnAmzCUGRmZsGBoEhwXySbW",
  "key22": "63r73EWjZEgZhUfEUS1QyqdBC9Qbg9ViBoe6c8Wa3JQHTjRA6Zpfd4TdwLTCX1XiEjCfkWKFopecXRwoLRzgWTNs",
  "key23": "5mV75x6P13avrVE33gn61NK9gGHQB3qSp6UJBX9eyTbi1RfMQe2JTYREWhDyFzcMuGF4M469zKvC745bDFTLUpof",
  "key24": "65EFGgsdZa3hEEb2J5CTtSJdKd7XtucF5ftS8NW4kSqoWM1gvAbho9715hMN6hhPLV4LqahDg7ULgNfTdmGxypvn",
  "key25": "iNeYTuConkVxRidBTfPRF9T3VKyQExc1Y5cVoAvbkzAAvpcCNVExuX8zf1X6QgQDY79TdzJ4B6zDz7AHatouQzn",
  "key26": "22VtoToM7RNYmeCtd6qaVbVqRqFj6yMNafPvBzZChV9N4KBJhfcCrZ6RqgWC8RrwFavzbWcQ1a7AgeLbfqjVFfTw",
  "key27": "5t7X9MsHvfG4DkayoU5iHPpYks44D1Jb5chVnAkU1iY1Y1cdasek1TdnneH5cRaXfT2Qexv2zW9UU8JKbQUHe6qW",
  "key28": "4H71k2L7x3dZ1agXzTgz8H3Gaix1XGrnZeGFjWg6Nkt4FzVWTgQBbdyVRTMoEgHduTyCmqpb7Haemq1mtawNjnwR",
  "key29": "63wNWXshFX3b2RRJFHRE9o2aiukWovkWsBEHkMKsXFLz25bZXQ3BfivJfvVsrv79oC7Eg8HK9uHFo5s9nnW4bowK",
  "key30": "4GnYSShTNguqydGyyPxi2RBpvKH5xt88XEMuAS1Gv5ynvaAu1JvnU6RmK2DbMxDNp3WazZNhL49jzjNacFczzh4w",
  "key31": "5iH1hggU5kswzf11cawKAy3dfNbbAzxC189HK29tfL41393rDp9KFyTMW9q1mPayeGWCA46sBXRro9ZZ71MW3eQe",
  "key32": "4DG38acQoPWbG2Zdct2G3hkTpDbwmXAPXbYFthnbcgVLw5cqqCwsXB7wrdAUB8tHCwDnXHCaQA6JpT2h2Ezzjdsr",
  "key33": "5E5jjtY4aSBa2er2wJPUUWt9jtvYQMKC3JGyCGaBvEaLNrTqZeof5Nw6rPShhCN33c4JDmd3ABBKUjGhdcT1Lt1Y",
  "key34": "5BBmEu1hkxDK6hoguDhmW5PG373hPzuBywruXa5uhTCFNLzcBrRoSD4dwptaXZZrPpVdtgbihCrmV8KgLNXG918B",
  "key35": "4JQBjaihmmcLiGGpeTKfauZSemt8851J4weJon4xQnuvbCs4N9vfvEE8vUndbeNQx6ticP1d8bKhfb1Ko6yymHX8",
  "key36": "4HsZ4qNjBfn4VxRinwDPmLEAn4L8buA1LvYBh4TcxP7JdsteA8vADCQgcch4QVgkG7gJqaVT8jpnmqTD4rpAL2CR",
  "key37": "2i6DkQwhXKL9c6oY2guG4kdUomTN1JwUTKb3SkKLfMV8Y1GRr1uuZ27K2u22JEZHHxi7L5ZkQmXz5QGGimSotN7k",
  "key38": "5QJPkcNge63F8fpLmbhnqTBVedc6RMcLSHVZFFDqaLwYD5PzJ2eyo5ZU6H3WbnLsfhwwg8zcdBUnqXRfoLX1GtA",
  "key39": "3rbWHGXMGmhfYpRfcxwxkidKZhFFeJJ6dUxyZ6NuHnnw59qaFZj1VQz7Xxs4GtkEKHY2J3j4zEp3CMfbq1maFdF7",
  "key40": "9Xw8SHQFqjsGZvMKvnP5eDET4XuTtcjpzzfE1eC6z3nuCKiha5j3f3wXrKTx51585p5GoKCZTw2i4YAdaBS3ysQ",
  "key41": "3LZ4C2FecDecNhqu155474rAC8rtCkKMYXWKZGGpUkSwkRKK4hhhsuLhrXqVn36GVSp8sr4UHyazFqyZsMAghgpy",
  "key42": "4hZyZPvshRgt1w1D1vj4cLJLwy3TPtfzEXGgnoDiJsaK8241kikiNQiStqzHcMiUM5KKNT9bQBfNX718Ys18GPWf",
  "key43": "29XD3drwDqaB3XcREmx1d7iCUHCpQPJcrtvKuAwiuDwQRnJYM24B111bHiUaijPBKFwDQRJcT4oaYLmw4Gnkjzzd"
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
