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
    "26ZtJ8WN4t6FQiK9foM5oTEK56Rypx4Upb2Zv7Tiyv2jY2E7VQ5wryyhfEqysT8hwtTRYoSfLomEStxhL8SzY1dy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Schea1G41o1w9oAHo33jgnmD5WpiAqtYYu1rUbE7Kr7YGSWDLqWBMYt85zsPdphsaWieHGb2jorbKd2qr44ETre",
  "key1": "2FMWC1BfJwfxYk1PbH4Hs5KbXgyd8jY2TYBzu79PmmitEWjQGKQr86jnEFFR8FKvDG8TcN5Ryp4t2houBGPFoTah",
  "key2": "34HozBWtwTyrDLUuN8ydN7H2TCQc5sUJtfrj2znY2jYdVhn8Gnrc6m37jbvuKbubea6EB6CjAJ2tuUDg45cnuUdx",
  "key3": "RDHk4NXEF4sMpYfdJLUXCC26LAUBibw8uqmAZcURko6ke7LEGHNPanNg2jKhWeHCo1TjpcBgiY9SfYRUboZu4F8",
  "key4": "S7ANrMCPTexMXYocF2YYF2AtQdmw9p6pVBNc4Phvh9yKfMPBk2ZZhP9GBjemifD1wz2jKp9sKPGACcaQPA9ggrK",
  "key5": "2H5ZvbqdyBGwygUJVvCEDSHgnS2oYUN6sQMWPUEADpy6UDvL394uUmjLjtaVp6o9a8TWssFZ5GUQhKoVa4SU5vuc",
  "key6": "3LPZLHEWA6b8G54h3YnxndDMZrooSAYS1YtJximuFSbpGz3wxpM1TCKAtyi8to34PcepTQtd44Ff3rehTqad8Zj9",
  "key7": "4PGSRLAai3fLboxcCkm8vx6G7AzBisFrhDPVoj6URBPBiegkuMQfyzZhxCJYtLXCnk68UvbiGPd5m97kw98RcgzU",
  "key8": "XqZ9Y7ajWTM1ViVEkujzouvAnCjWRb3dWgfTnn9NcCoxdGSusRaeNKoEN854rrkGasrbyBmzoVuyUiSN9aTMr24",
  "key9": "4fZ4w7wDqVCdwz1fzZPnHnrFBCPEQec62YbYCAfPskukGQwt9nWybJC8XXGb5WNeXjHiCtKs26Hfkfj7UkdBPNAN",
  "key10": "3JcKuKvSKzPSJCSsZeC9Nyi48BsMBBNeBCtbW6uvAThRfgpxihrHbRocbPauPAFzHPYqqgFrTQeuosK4HSkxS9PS",
  "key11": "56RiiFB6tSPHe8FjbFsgUVqenuJPkS8a9mGh3nyEuPmFtLZJW7pKvrokGBN6JHJPao4R6WFBLwX2wZB1obCMfRKj",
  "key12": "4PZJmmEveWguKnaLJNjVQu1FbadLtMuoTwykuHdHrcrFtyeSgeKuQyJNdBAzFE87o5Rhab2yC26BLt8CYPs8h19i",
  "key13": "2KU9rfeodtJ5GMroDqoWhf13WTDDotGoZqJCBp43KgpU8djKM71AVEM81GTNys7VgkXYV4HS6yrTLkabcBhnxiYY",
  "key14": "4eu4X2Bpx652QxGQ7yPv1TnHvb2pj6C3i39J1wueFMcAZPK7bRPFw1dSrXuodGcHsPvEp72zvYjfFowCXFouzrss",
  "key15": "5GAQ6h8bEUdLzgWdn8vXyN3XoPh46j5dEMqYqQK4r5BDV9Bt9vJKZJe8grts7rveYoDJV7wJY1WmZBSm3VGw6tSE",
  "key16": "5EWUoVwidYXmPzPYLMRHwziLnACbX7AarqkATAR4rHW8Y2N8ioo9cSo2fz1F27VLr4qkUjia8p2hJGcjSFLWYd21",
  "key17": "61aGwuEpYBbp3qXysZQ5NX4kfVjhNyi5bdcKqoBKTk9F2qV69FgaD5m2P6QssRNKP4jXTHnFzWC5whz88GtZr1wr",
  "key18": "2NmVDbVpsV62bmravfJfsjHNnuT7ztoWuFKHuD1wpVXmHnQAAhFqW3YgQrH1E3aighSGwU793q1ujqDdVx33bEuE",
  "key19": "5wbpys4PvPqHawxspRyX9fejywyChyrfR5TdHq4evDahBLyDyh4BPNAuzf38mrrq1nn7h2eXm2Q8SFr9ou2pF6CZ",
  "key20": "36QuBazQSEt155kZ89qKbzBQTAHHo6yRhjLkLN8gnjYVYQpMhdTP14F7X8vhFyCVfdSk9hVq647ht9S7mMhh1Bjj",
  "key21": "5WUTR9e9ujtB1GbTW8zRC7TUSAXXDYd6pBHNN1xPswrCtrXGVS3BDavQuEBMKyTcGMmUxBpwnwk4oZ2rcEUKjitU",
  "key22": "2X3MUN1a6rZFf8we5Bxy2aYtrvwrKFwVxBz5wagAWEksKarvQQwQe5A2XdMJpLE47Wsf6kFGtaSmvUY4aBo68EhY",
  "key23": "u91rQGHXEVvF2BJfFNTKcv8X4JWUMDzyYNJ8x4ZmDFfBEXqknh7tc6acTQh9ZCfZDyHuttgyhVu3XTUHTiE9Bia",
  "key24": "5cwPkEVL638RQkaGm8oLSzktKLtrDxaR68mtHHhUYmNmiWqEu16iScMF2sznaSx7jGeJiH9kvqtip4dL6RujLoJg",
  "key25": "5YG7FV3LVWXiRd1UjYmQWpi1bcb2pxGy9FMD81CMjx1eVJLy2W7yWLxtG8kXRx6GeWPDCDXuQjT9TFQcofGZm4Z9",
  "key26": "2SiJ4k5ePDEfbiw1JEHXeBSY1jtdt51xBtSARoLLswzWbcQZSQ7LFLzd7ND79wYdRkakajxquHwk7WsUqmstbcvE",
  "key27": "4t4gwjekkLSDM4WB5FmBVF2tiiEhfbEKDF74Fhm7kYjdUMoMLtvdyZPEBMvQCvf24bNKSVqSozKwYoRLEVk57pv",
  "key28": "L3ro1Jk4cvnQKa2kKmAUvt7NaVQzveKtfjZGgR6nGspJam6pELwG31LYGbpqnn5ndyvc33W6qWkfh9LAfMRChdJ",
  "key29": "5qWoYVeDPmMKnN1nAvCPLEbf7ijgVKYxC1JYkenoEQ3SiJx8ss1ireN1TebqfSLEmuzh1qh5UWNTEvDBjxYbffhP",
  "key30": "5uBUuZzsNtaTkGdbRJCcacVuDDKVWeXQx8WyPKMRTFw4AQfgEdfHswcGogjMVeZdzh1deYb8nqKeTk1mKihyS5R7",
  "key31": "PawpmRnfzart3PGFXxbjL6QC6ybL3VFxKku9bzKQumBm6QMpGLj3AeH9WWDkKZ5K45fq8TTVQZdYLiA9t6P4g7S",
  "key32": "4eipzxzwiwFao18aB4Ba5h3yEeco6qpo4d9B46cJBhgKeP6oJUWHaRpWzEJL5j5AgsA86nP2t2duxXjHdKtyPnQe",
  "key33": "3qAjvnhkFfLwofvnf9d1YEMLdnoQzxz6EeCU2LgsGVLdjGeMfjKb7fvwqS9ivaPdsZgdpxtXZbyt9j1mxJhMMhsL",
  "key34": "e5XxaxgQo6E1cHZe7CvPczhHt3dJnragzgqrRTiKbBbeRd8Dn7bCVoZ8JrSy7318byaajLeAgRDpRqd5HiJHGQW",
  "key35": "4rBF21mSpoMZtCoBcu9qJxH9EyuSP65o9TNEkCMijiXjZabr9bsSa7q9MvgmCS8i6WLzXPuD4gM4H91psSrug9GZ",
  "key36": "5ZCguQHWWWF7RXehDteiszxy9ibdK2pmiEx7uw7Ab9K1oxEfjeemwNXTJkT1sD4TKmci4gggSbHtVS61SVywc9iC",
  "key37": "3Lz8ZbjEXZ3AMP2BsQpHStGJvuzw7QVbj238JHiPd8mugF5VV2P4tZTdQacgKNn4SkzDKJqqh8gN5fWXwSmXj4ka"
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
