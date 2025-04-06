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
    "4pAdjU61bX6CyGKycbDK8TSS3cBhoBybjyB5LWHkgcvz36q5D4Njk2LkwupgYkuFcnvZe6Qx4rFdqYjoD68T77kS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BUniPNquuHRwG6zJYP9u8QgR6X4C85T78uZEW1QfKuegF2ZyvPhbJcVLHaJfiMQisaeELLjbEZAfrhujBGk1qtw",
  "key1": "5F3mAebMcuKReRvWuY8xUnP94Z2nfmDv2chQQyJHwK8ZCoWq8ypxxRtukDSQdD5hBJfoVxZfQ8iaSF4MvSpYJorq",
  "key2": "3qfEx79HsANN21PmkruBftoA3CBUnJ2JuhHttYkmg1kQpBpy7gNt5DT5ooBBgDHw7B2CtRP7E7Q8kiCmiPQ3TtzQ",
  "key3": "4JnSH8i35VbzkmGsLxryD35yTP7FpBMRaCPFwfh7csJTdt4MgjCwKqqZKjabE1WJ8s9wsXhy6fcWWpad2cntWC6n",
  "key4": "65fmeWXbZgviFhU1PxTogtJzjdznHZDtKuB6bxNgJKsEiwxd2PvYPNjQcfoX6GfQXAtw73ULQzRejj9u1Ee61mm4",
  "key5": "HXZwybfD1mmSYGoaKhJqx8oaMBVrYFXRzQV96jEyvUEKzumZbXrMCVPPkvhJ8FwJij4AKCeKH9mui51TdMcvdCQ",
  "key6": "5BVM4AG7pNjYWAsyb3WzVocRsWuUDGbypevjGQ2dR6sEfmAam37v7PPkcXcXH4uHUMVZLWDWxe5CjZ2yizQtU3ug",
  "key7": "4jRFg64jvirTa9Rp6WwjSxoaReXXzPJNTinZd47Si8KKbgbNn71KWr9mrriPDzuNzPFhbNKpmaA8rFZoJrFwDWt9",
  "key8": "4GsZ9pR72NKpSy96vFMqoYq26Cr8nY6bNKjCs4YFMm6wfS4qzvDUWmFdyiQTzC3PVo6JgmudJhtpghPiRD61oc3m",
  "key9": "3642NYgGxoC33CCpZesWqfZtvDdVc2xHnrqX7tMHpy1QNs3iVkvmj5f5Wgizp84twG91uZJPuTN3sKBXfrWMysAT",
  "key10": "3m8iRbBvMjeNBSUagfJp8mhcDKE81zWgocfxqgY1UMT9pQgz2piAeaiYCFq3n9THXeQLPLY5i7HZ2HVA1T45JJwX",
  "key11": "umMGpuijKS8HcUMyCSevbhPKc9LB8AVjSDBs8v1ksWyuku7UYTnF7aEcA9fZFGh6JC7BHJCth4WvEzBBfpPsTVv",
  "key12": "dooR7fsDuXr7y5JfEMb2ycm3r8i35DAuKYr58Taazo7wqTa7mHC5GumJhPZEZvrb76AeRQ6gWWjvZEKNgXBPSx2",
  "key13": "3DJR3dh7YCiyEAM6dCADSEP4rG5aWBKL68tB8J6UYUXrFEiEt7jc5ysK22F2JQ4andqWG1e1btp9VWDMJWSojJG1",
  "key14": "5iVBFhE5Hk1oA3haMFXYu43d7vk7X9qZd9wocBCYBoChZxd4UsjcpBNcZTpsAmaSZWAh46Fh9yPJqhS8SJF6UUYy",
  "key15": "4KijvJqHDR68PZTHWR1xch93WM3d5CwcitpCu6LJ8AyBgo2g3yXtediApgRQRRqCTvYVdXeE2eJQK31ei67afrj3",
  "key16": "31hreuwMRAkqyg2n4vdJNhhDBV31fdARcdBys9dnRAnFjKmvEr2wMSowYicXMZ2aZRKmGYsZUtfKFLvjLG9ucAwU",
  "key17": "5oe53BPnR2JJvdbrMV5xJab3NVP7KXrp4tJn7V7p7RNgc1ixBaZTHVvPHjPxQyZeUusyGVTChpC5iyDpyXgeGvs1",
  "key18": "5KvgPXXxGDcSMQe3bqBSXuy7UoRs8GJUfpzkzMdG3g2jDnnK6q8AxdnEwnou6nk8HpYGAXwDsn7iv46mE3HpMsuo",
  "key19": "rERSZUQT57YoxC6vFYGdFjNXGQFAmZvrNgyEH8NAapwaLQZvvqfbW92TKdUoEtW5HaPWEdbP568EuxCCnCA8CBW",
  "key20": "3LRgMU3CK8fVFHCCeLfCrVZxAfBrQ2y9vAZkT7Q7WcKuB5izJR18QM14ewJnbQUUenaxYBbDBD16c8bA5Wz2dtnx",
  "key21": "kiuBBh5N3S1XWgT9utzeCkgxYUfdW1DQ322unKDsZKKzeNsciRZG9zg1gK3v8mQrS7GnvY3BXow9GnZhm9p41vy",
  "key22": "fBjaYg9yoJPG88XjQkGBFk6V5N2DYxmZoqocAs4EkAjBpBND2uLRxRoMVRMTefymRr2Nr8VnuCmp8T3Zz5EJsmp",
  "key23": "2YyEcRFSVTyqcCUxP2973rBANjVSVt67dVWo17t2LNgNoxMKEUyYFbbXD1PfdnCo3Qymn3WVcdmz8JjvRxZo88Gn",
  "key24": "3yAL7pNs9kCaMQZwQuMs5C83KnUCH8HNmFmHxefKMqPDQhmfhY1CxuDcDDfmYvzSg9hCmgRkG6ALZmrKnik5qQcg",
  "key25": "YLmxEaFWejfguGSh9bxx7hf2kFuoETkKj3JKAxYZk1cbDWWrQu7AS39HbeZqnckqS8sRsVB2hxNfffsiPxkbZeR",
  "key26": "ezWoBkPVkmuhABm23116kQZVqpBt8VUmffHKiMjzM53MMBtf1UD9CRgMcnbnLopHYGQBZzK997yVy7wS3DkkU4Y",
  "key27": "5knKWZjR8XMPpexMtVyRdBn5mxApTMUnuWCuLYrGykr7YKvsvV34QEvtqiVchfVKyCZddE8D31qwUwQXiARuMjkn",
  "key28": "4hFvadBKFncbfP36aNN5Mr7U2DRcpKTb4AiuncvXjsG97FoV46NSzVfN2zKD6jxRJ5XoxwwqBYExZv1WRAyxRDPr",
  "key29": "2CAoKJr5TLtfwpFRskdcxSDMSX3DjtNGK45cUAzicASPsh57A7uumsqMioTpyhGvp8Qv91KKugjKZZhXp8HTMZva",
  "key30": "4ik9wpnhjwYMu6BLs73qKRQ5fBJSU12PpQLtMzQNUPrPsAkj7su3fTtG21ZMRjxLpyjUsKMcfFx2vsT3bydfdj4o",
  "key31": "MEY5XnXHegqzGWsjc4WQbpe4aREKM7xttKWqQm45mKJSqZvUBNFzpEfQAVGngafRzGw3nYnmSEPiVd8Q7s2d783",
  "key32": "4wzpRxRdz1266fDtutManQcrJAnKmXguM8PWb5ApFT33mW2MvVNiyvDkLtRwDv51X1BsXa6H3kxo5davJArzev6F"
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
