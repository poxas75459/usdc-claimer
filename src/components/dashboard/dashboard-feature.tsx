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
    "2dFSjTGSCQQV7VGvdc8oDvovsGophtR9Yecqcv1qfHHsZ1yLmT4YgUAzWMncxe2y5VWpzRrrjnVmm492DQ1tVfCM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gCwTxV53tMrEtngEzBoFs4ae3jR9KZEJuxAVy81ckkhWNXq9dXhabYwW5pPHU4rXZLtCery8hjjUmDYPWYNi6Ld",
  "key1": "3vfH7NXaV1X1yxwKKy5Jfg4Daq7XUSRPzMc9ijCkD4ZEPzGRUGNrbkxYJGrBESyFe2fT88DtdXuTAxWH4281dPYo",
  "key2": "56B45eY6ourQ55omBRgrZh54jwnFi2PNjKVBdAFhddTBCt5YHxFHavUBtCU45vz6R3EmT3tFgKSxvyEcHzEiLtiw",
  "key3": "4TY9BdiB4VYmj5wpgxs8aPDF1Z9MP5F1a5omHJ4Wf35ri2CqUNWP8FRbvgGEKoUEmZVWHTo6wJKYUbUbY8ibxfND",
  "key4": "3jAXiRWHTUwBwbpg1oEV3xWP89kEseNZb7WhFjRhbp7ReSreGb5macuybmdkLMG1T99ivrnFmJPSAHMYEbEvXV2x",
  "key5": "3nm6pQXFf9AcbS5LsuuXHcnd8jzD7e2jcTwEpbUYvSuy1PWxgsbjhXqt8EpBS1YjF15gFA6UAjpyE3yvZZGsGKxp",
  "key6": "5W7mFR8MGqPHF5fiRuRFFXv4oKw1Bx6zvnjWUNKhfKuJBeakeGBGDWG4gAFv2J89Md1QPepoU1bbenCYZC7g496K",
  "key7": "63Mup5M3LSqsVw8Rz6ksGK7TiT1CwaiX38tEWdfpkdNz2acBY4Jb8MdvdzcAT5nr6QJbNTWCRHGD4DkzGywnGirF",
  "key8": "5WQnPdLFdCRm198UhBEzcViporMr11Sz7mQRAyaNnHuGVDWiWZBbEFRvvyy4hnqeVAUauT1Fwc5JZsqHkF7f1uGF",
  "key9": "55KaqCS1VDa7siRBJJdHG5bYFknzgP8eDiJn4CKYqJ45K8He4fuSe4PKpwkVCtkT5bxPua56xyuEMPYn9HiUaszQ",
  "key10": "5bDDWTxqvhuM85Sixc2TEecBYq9QSuAArDJpz1a7iTzYwjA5MiVEoVqCxbnkov7PZBwwEer7e7tZKXnyLvxawMFT",
  "key11": "2e2k6qLYgJY9uFknYFo4cofaQAstPJxy6vTESMuAg1zw7LsTYdki1uuBvmmDC35hepx7v9fTjUGDLyWmnURmmnxa",
  "key12": "QHWZ56DtYfP9mEj7kHHUNxscpy1Mto73AFGNh9c7XSPcGiDnQE8pJdhnBuNaqmbbAhfRCCFSs9Vt9S5BsZBSJAn",
  "key13": "37GQLNypx6cE8iQ8BzTj5aRpxFURww8bV3UKpc6oG7Ewix9dApLXNYNgSDzph96EPU4x6PrFdpCBZhCFPmpmvnao",
  "key14": "NgDbGfN7p5yfSgHXDEKy1UajZMJrVAE4F1GrfbakGYGjHD3iBdoPfEUcXnmrYDxGuBDgFb3yq5XbtH2ADmou8hA",
  "key15": "41Uu97bsNGYShW5VtHpd9LEQrJYyqEnncAoCqfHurdUsdQC2715X5szSvyVjwKvTk8gkGyk5ifhByoneRu2hpYnT",
  "key16": "2Rk9d5vQmmc5LVo39hMp2nQXF8tRphYuFynyXGPLjFRuf4BCUp9Fj3P5dcF2ocNTiFcpCpjoFz1d83XC8Yvn3KJG",
  "key17": "4TE2U8UL2jqPkECp29VXvymcwcC78pG1ijKwZueZwXNuPR2JdtBavtRoU2Mey1MMW4pe4wCBGAJwjKMBNBeJowUU",
  "key18": "3cT7g1X6s1t1yGb91qVRQaBqr47tS7DmvxwkgEGMt8WqH6KV6zCcGr8ddievZefUKZy6jGpNiWDydVovaTcwgjCM",
  "key19": "d7vV7biUCAhXKpCSFzsnTnDqw9jDK6pgXoR8EQKL34Q9pWZVRgusT2iNjQBdnhdTqEihhBQ5MzS6Yu3zynSjEY1",
  "key20": "4tpZTUKZN5yUXCShWUT5HwizbghuUJkoPMG8PmMrcy12sppLUqhLkdxWdRfQUmjyky6kfQSmnWtqGDCwx78VHeUG",
  "key21": "2n799eV1gno5u7DtZ3kMXSF8cjwi2vYZH9kGKMhKNAfKPBNc9McY7Ra143NpsPXpbJKwz22L9w2bWTrZiSdbeM4S",
  "key22": "4zxF5p5HjLHxd1zYKbXPgzKjJzzk9bhZmzNNXDXo4N8cZiMjFLZcBddSweQsJJBqf7d117VwRWaaxanyuhcijZHn",
  "key23": "2xTYHzRcyBLzWAeibjahXGFKF6hKWTsHQbjbRJvphr91TBvufajdqzB3bm7ZwVyUXbPz74AGX87ME2pF6QNaV48y",
  "key24": "4fTxNgc4xjAm6gQ9BYtjH1wzcWZmPkb1uhBjwJJamnyqJeAY3YS1anzh48pPF8HuwL3h8Kt5mdWCQ4dNNPxq6rLt",
  "key25": "5QvpRGAk4uu2rjnfkrj5SkdbRzqDAiXpsEYFVPRDv9bKyeKDi3GbCGUR4zJjBZRjfFmhRArW7f413e4jEy2jt9Vs",
  "key26": "3GM79m49Zjgx9fq6Mre2yq1zM91xFpnGBhht7oy8nYFEesjvreHt4EbZNJ8gSrr8ySJzN1sQQSNjNjPqqQYSH5RS",
  "key27": "4vmTiuH9tp1ec3nHD5RvcenombDYTwJLhtoEqFgE9jJqhKtSJemCMEYKUSo1rALPL4xzGVpgLrtZSVAMTBr5q63D"
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
