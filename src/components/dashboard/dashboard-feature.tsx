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
    "24NtMSjugc7TcqvD5uCt2C9zgSKqEeM39crLkbdxEinToq48Uoih2QxPGR6kq2qXufPPkZWbteCk6PzVu6KdE6FZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Acpc4aSk7FEBfPMKfJFXt4L5GrAgQs9ZNiZtidvWi7i1ZFNaYTZtjZTMwdkwPiRKDwugHBN7AsbTVi4BbpCB9qJ",
  "key1": "J13RHuGcH8MQPYFeLVe2hPXZhgx8gSmN9oWjiDy8JJpm37tjok4mFGiuFYekeoBkcLLmqkEy5A1AFokx6kUjLPq",
  "key2": "49rd2DT82NwC2PHkMu9kr2Tfpiq2sA92QaDUQSfp5zSTYwQM7AbcBU8hQNCLPEtyFxmFUxztyZb1F6XJjjsSnPTx",
  "key3": "2gbHFBRWSRqp7RDkLDqvroGqedzhx3x1EeXN3M6LyofngKidLAqXw2Qt1S1Qs9bJhC7YdfpUCJnQtWuhjsvea18d",
  "key4": "4SqXhTPQ1XrC4663N4E9rYP6TPf5xjcwYn7TJjVX5FTV7F5oWqmNjF9hZidEmnq4V7DxacRPxyB1JM5bZn841mL7",
  "key5": "5S19yLLkvhcuEEfKj2WHrED3kCEMQh47bow3h1EJGSysi7RuGXPf2mRZ2Y1MXasvnzy8q1r5sn1pRQyf13GwYqCE",
  "key6": "5hw9XZ7uQhPgP5Hamd1ysmcTCqJ5cPYiw3zwP9SS4b114RkoDGH9UccCLar7Qy6GKTTnKYvbTJLxCrBwFv4UwiU6",
  "key7": "a3euLDMajSL9to3LZXRsN3VHNR7FV6QhUDzTFEopTXUBWgoTFKH8pRNeEZk9aBsR7RvsUc4tN7PvLEWDQ8evcU3",
  "key8": "4GoJVdHSkRoLUNXFjJwZZX5r48ZW2UZ3WGkdjtS4VyGuKQ2UpwLQHNeFYwh5t4tspuFEoyLUxV1aSb1M55NmXaBs",
  "key9": "qsCV8Suuu9RSrUpQ2TyXoUrY6nB4brX88nUfgs4ojqeNrVcVTNZ8Gq6K3XxuGeAsv3PGvE8U1mSt456FAA11SZn",
  "key10": "52AjQtfUBpCqk3jCvVuHibBDuJhZxGUxYNdUSJ74ixGTphhESZPbJSoLZthBLxF4qp72vSSvNU88QrEqkdSNb4ye",
  "key11": "2AiKkhikP5zShXhig6sLtGTyVv6FS9ZmLkKBEvaWxqqVMvaf9MFB522ZWmSvycoCFpeAzrbu3vHNDMj5Q2J3L3qJ",
  "key12": "yN6Mn6ajZXK6StQH7WdZaR59GpbjA8VPEWLcSX5B2Fh95TG27uoU8ERRVKZWMP62SGDxy6dchGPSQbPZ8czeWEY",
  "key13": "3Ez6QAmAmQT4dHfZjTTpryumcLYRJxqCRoB2ASAiZ3YVzPyc711nFnaQk3ujshm4iv6uJSGrXwg7VLkZGNRmuzoJ",
  "key14": "5JntiQkoMHd2XsaTKrUuE7hit8o9wEp5zCVo25UKjRQhcSRQtmBkbwDcE3GM593HxiBTfUqUriQWm7k2xm9XZxdv",
  "key15": "5bxHYuF1f7ZCZh8D2PUUQ55Psh9o1HAD3H8dEmcLwWmx3S7muLWCurjJXgLPNcfLqwLiy3xXwnrMowt1yjhskmWh",
  "key16": "2wwGhMBikkRPMCKUqo5WxTckoQyFRr7pLj3not6SF9YoKtaeokdQqP2jH3DvZbxkvXUCP5W8KuniRoMKJMPXK9re",
  "key17": "3E2qepv6FRuGCm9mJcQcx5ntC123dn6mU8tpGKykX4Y1jRDfVpUvsfWrGZH9VoE3GVYp8gRtS8awAMpMC7jrvpEz",
  "key18": "64e4mxYV5CqGVxZaAYMjQ2BPBugJ9GeNDeEgtGzaukRw32ktkTtZgUK2fffv3BN3X2bp85TLvbyuax9xm4zwS3mb",
  "key19": "3iK3DXufxP942d6B9AKrZ8N51VLUKTqpfuyRziK9svAWJgbw2dS4tnYYSCUEanqrDC6fTXKJPFjVx57nExAJnaLw",
  "key20": "Lpk4Bje8VXbuY6boDPGxusGMjwCD6njz5BsWqqSHyL9Q1osaCbcqdDsCXh6ELnwBXhC7fuytsSj1BEHWMvEK8Pd",
  "key21": "55DDpvr1UL6hGEWiB4ck2862iRsNR2Tkbwwbkr5REMdXnwyjcGpbnZJuHgFFCGNY9pJhPtoL3JHy8YqN36FxDWga",
  "key22": "4fZWLSk377wKRKqbxpkwMHtQP3GbNgLNSuhzM3AwF7Ynsjug4f8oP8aQAYvP85BKWe97njU6q5VtatGkE6jBRA4w",
  "key23": "3P9RQajr4hLJcH7EMBquhDkFC3vWrrBkYuusV9LinVURvDJdo15fhYq4qx5Z48XjXFyCVtuod737rPJwXVQzcSMW",
  "key24": "2t3K59QZ411sNo6shssTy9w2spGs5rwWbWHnmgD67kjB9dAsetypsFN9JmrMehBwZFV6oT15EQY5UrvRUhHViGps",
  "key25": "2cogpJY8uE97c9XQbm8CKuTgUCzbDFJL4j2E26tToaztqPjpxefWdfAX5LbaaaMig6Ng9UqtXudtLz87mF1GxcCM",
  "key26": "5T15jTRhuVior62h7a3rtNLcuTbNTsy6XRmr9TTagvmD9hJ72k4TJRaG9UMQPuVAijmPifnxh1EKWTMLnZZTsibd",
  "key27": "6VpdSExyVhpZgYHTuasNhYe9PxEMKkdH2tzws4HW3S5QG6CjycgMpqV4kLCAWo4FHSCwRKmMWEf6AbwoPm5NK2N",
  "key28": "2KD9NPtWJ5ArsBaGS7UCqVNvGUo5hdmy52Hgwb9CCBNscpocVqfXdcVj4JmbMF2qm8QcpLT4M4XkVmTHKPxHKC1E",
  "key29": "CFpZhdMQSu3uhcNGeRFP4doK338z8UCYGt2REQ1iZFYPqXwbTC2hZQwCU23s1a4NcMzmu2vzxxX1aka6jVRDDqJ",
  "key30": "4t9UUpGcJrydgdS1upSvziXrfivCGdBz9GLNRCUUNBo12caxoEk9NQLaFYWQRWqu3UCpPXMDWAZjoqbu3NXittKa",
  "key31": "45mvTWvcpjgWo986kcrfN3Dk4ExrExySEsxEz7py4gx94ZGUtjkTPGGiJgGLo6AcCXCefL4CPGiDcsvxMW2zhrVe",
  "key32": "22t5ETfFo7YrQ6GK6CpiEL1fng956bB9qpWwrMKY9SkyY24X2jtafsYYie3ddT4eJjEjbpxhijMMtSw95JyGqHS2",
  "key33": "5vvBbRYrzn3iyea7hDy4mCuTbt3pLqUjWc2WSCT3wpm8NSpqq92bgB7ZFu7cbqY9QMg3wWCDiQVdHu2x6gtoVmv"
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
