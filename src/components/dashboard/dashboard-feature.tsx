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
    "2umxJtnSCiKZ1XhbDTr7FDGEkofGxyWc42G3jJhcw96Jcb6FvqkpKmgAyWHnGWH7eYDVLEX6Gy9aQe7wHEmdLZPM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ifH6JnPpWBcaSzJRkHHCUMnqWozj7HCFKfpF54txVkW66Gk31MeH2bjHYbmiU7nv1FhnLJhffC1CQoynmvmBXrB",
  "key1": "3Ak1PPWn6zwggyMfkWSzBkMHZ1x93p9ovVQQdz9EDmic2ZY32oAQkTtzyms8XkesAWFLhfRKZ5J2ZQSvxzjPP69A",
  "key2": "3wZUNh3m8Lm4KzU4vkZM9R1mVQSNQEkYr5gntL1cvevr7VuHkuYezd7WxeSCNC3woWJbVUdbnGD4YPMo8exchLM1",
  "key3": "2EM3DR79vPZ82qpqub5Nqu3dUjVA2fubHgC6WAeM6mCygYMmTP8sRRt2YPKCQ8zro5wjx6bVLacDtqxmAEv4ueVh",
  "key4": "2s31wDLBKbbYt4ZVUSZ1ZBbjdZRnCkNxwbtk97jHG4VxN2X9qib8jicbvPYKSwtURMV31DmyBxncVPQLj786G5QJ",
  "key5": "5kVC1i3R5f7rKDqf3j6GbXzqDDnmoGbp4wRUJQgZp56J1ERqnyWSZsapje8d7jP8WeSwJzubz3eBxnENpuG6uMM5",
  "key6": "4yWfdWhGhXrQpzPoebvWE1das7TxMdMncP4WXcdgs4dPHHCCz5EjXUnver77b342sMVDyCgMcma49Fmpy28bVi4",
  "key7": "276UbbqbRLvtmTvRAorzzdG2QAHqvHSWiVtsEYEgMBTYnSFS7MAdG3zPXDqDoLaZbSxi4pPNNo9hiHLxsBgTij3K",
  "key8": "cVRjs4BTusXHRN3XLtqQTyBnARuAp2ybS69JJFW8b6NQ311FupwKvppTmLF67N5xVWFQpNiRXfNZuQshqXu6jGg",
  "key9": "3KZrxudgpnysh4f6PrvtbQatRC7E8fCAX8qAZmCz23GTFSJYDdMCNd7iKiMYZTre6H3PNZ8X7YzkY2mrzMYPNmCN",
  "key10": "xmFmYiAcxrXseoQdwG4DNP5nYJ8quGi5e4LyiEdLniAuRpiFrTJh3XpBsQZuMWYYEDZSCn966cXdLKQ71bFZjhy",
  "key11": "3vCdSfC3cpjLKuuMKxiFw5m4fo3XfjdX9UP5ZtRmMzS2nBJjPgF4TyynTE52kuAqBMuSHwPjqwTwBNjvtLaXWHpx",
  "key12": "2eMUNp8rcd2MdfUVLwHs3G5VFGDPxQvY8u6UFEwo5Uyint5vdTaBDXYGK3dpUhP4YRaufrKAQPJy9mSYNw6mSQTR",
  "key13": "5MGkyRKwWs3CLhxuKmt9sXbhqzPeBdSPK68f4tR8c6XAuZdMceSaY2WLZC338STZX77FUg5k3as9GTyPvCdUab1V",
  "key14": "4rrzTFRbidrg2eHkykAUvZznRuowMeMHQ3gYX5QnpoLo5jhmk3NCG5U2Yhwq3A6fabmht4mg33XDFnz7aXMFk6Qg",
  "key15": "5U3gef7s2ychUntUuy84YsBiaUUH6HzxwQyYPrh2U2RJRLozLiar2DBxQF9EX9uAWEbPWBionaum8J2imqGB1SvN",
  "key16": "5Rk1WpKP5eBSJcgP86MRV13vV7hsKeKzJ74zuehPp8gU3qv37k8HCVaDM6jyFcXpayVSVe2TuWBMg2wQ9JBCTnCr",
  "key17": "266BQByTh6vsoyHZXhU6t4JCFJXezQ6nymcWkqbUP2RdtmaWqbKk8Pk4t3Rj8jmaDMYTygCaw47dQ8gFzRAh3wpZ",
  "key18": "oBo2QPEi73NFrws5AS8RBQfCwuDCLqZYAScw2foFu6dWBuiZRo775H93m5QJCgJsSoGPDnS3MHcxLryUN8zQwjG",
  "key19": "4jQMXHwVeS9MYdxVn1hEKp7nRbiJQkSmpD97BBXr4bsN6NkbdmypdqpPFozeCs2QjhJRnraKXd6NZW23E7VGAaxy",
  "key20": "2Q4rjKkg6xQ88Mn1rGkQ6mx6vteMH2HiRrXrMjTrKYNWhYt73ZtZMDuwG9KTgRh4KqrJxMWCCJje4L7rrd4dMKyV",
  "key21": "482bYJiiuAXKFREwD1Gy49YCNFZKEcUm3TQgQLUHejLmXYH74xMs6cjfp1XJ15ztsD23Lusf4eYVpYuixt2uNivS",
  "key22": "5TCqKTG8AdHYEeST5H2eef2kEsUYXsBwju9ffmnpi1rLgntFxxFTfRgaUj7D5E4PRBHbCfRXzSiGDSq1FgKimgoG",
  "key23": "ZGaNiNm7JrS55jC3pgG4ByaRhbhvPdoNU7DdJXf1WALZjfPJwGJakRWvSv9PQesw8Uyqm5kwNsQPHJ7AyLizRxz",
  "key24": "3C51hiqPjYVdfGPuhqgN87Ut5pFoET7RmeTfnKumVYxkJz5Q9Ts9mNm3nuiqRZgEXqVCYURiCHQMQuvZdksR9Jc7",
  "key25": "2VTCXfAZxesfskoMEGysxwjaoYLPZDcuXbXMRnPgL2Z2sFzn6jDGtM18LGGEaoCp95VUMwhnzxPhYiKUhecYrzeC",
  "key26": "2hoa4L1q87Kwsmj6Q5q8gyK3hjqCmd76Noxb8ZvL5NY2ed3HX34DR6zoccWSmEaxgCMiTKXg8Xboc7jwaouMSubR",
  "key27": "5Ca9vRRBZ9bsX7ehVxEG8qmBuAxP68nnDo8r1yk9eRtXuhLc1BESKsBZw4sFAbNnFnXgM2Yv8cUMGHVfMHVacW94",
  "key28": "3faZWAQtLbBwNAnVYscbQCopHRGahEgWX9DdhJmeXC24fKizoqEb1SxrKw64PjD7DqiHzmL6EX3weYxGVQs7XAzf",
  "key29": "21yxo29jnvqzq9CTxrtHJ4KWC2jHTbMH3hbCe9jAKwrWxXbfzG2mHwmkpx1wZ4PXKjLHbLseocDtJLWJyXjUkbeT",
  "key30": "321zH8a2c4K97U55nV35eAQsUuWmBDkWRZJwrpKMhLgWAnc9SbcZCGLJ3ZCiLDb3kwdXDHxfGKC1GDvWZfxWxJ47",
  "key31": "5xMmgkfeVcr4ZLTV43yijaANBUeSTT3NVC5vo6jfqy9qjRzhuuW9psjsYUxduETpzSdFYr6WTXdcWoShQwWinLjh",
  "key32": "2jK59xboQ8YW2N1j18WEsrPPzvjuU894ZebDgBeyv1wRk3tjvMoYn5PPYZGsgqYQ5UY3MjJJ4vjtgi5kJN6BWE25",
  "key33": "2pLGhAkWEjdJU6Y7nxiCo8tUGv6La7sbH4i3FSNoY7BPoY2XfuNDd41nUyTYfkopBRLy9SNLbCK6hvCG26ZFNsjq",
  "key34": "FpzMBjXxbUpdsx4MNwo9pLoy2EFLzpqPn6K95jSDQMtjBse7ELNiXChJXAuDU1RX6getMts7ypnxoa8oo7Ppa18",
  "key35": "oqwEDjWhez72zpfagSgdrs9L1RXD1mPXxYqNwhWK3oU3ZfupuE6PCHzv249KjGsJNhHnQd8NjktHh2UgJzCRizb",
  "key36": "3dmqzNMfT7w4XNR1uMCMq7pJNAwCqh5bBYGMBSXpkYJ6benuJv2rymVYQ8tRAqNaP7DXhA486672yfb2ZyvhidNo",
  "key37": "w3xdGCdz8iDhUnTxU8g9uGBn9cvbKVc4oqWhVuUJTFA8H8EiTKan1CPTYUTd8CSm6L2Kb7KGTGETDDg8W6r2k7z",
  "key38": "27oo1JTgfdpMDhjArQtcJ3yUrrasCEbeRXtmz8JbzQMhYj8vyCtgyB5GjEVvLrKD3DitHKxp29q6cFfJDqZJbs2X",
  "key39": "3jUBhGRh56H2ivsW2sT5dgStBF96UBYSuX7uSQmqcLis4hEHmi5H4yd4aBiTuci8XyrAZgw6BtiieyYYjjAJRuUz",
  "key40": "5jzhRreqWSLZtf9yrXQqfWVn7fEe4HFtvrTYQcrGGg33ZpNRzeuavnD2knh8j1bMy19ZdBQ2TTZs1dT1eB3DvXo7",
  "key41": "5tujxww6Wa5J9a11VA7uPyfc3VjmR1XkTjtB63EFtTie6LXDt3q6nuLjGjSXh2dpWZsj9ybdvMoPZQ2wSGUx8i85",
  "key42": "4gmwfBfyqXju9XBDamptzDwYv8G9h2vfNo9UpGck8BYaaE83bYetKZ9u7S95EQH2WgcU718UK5bA3yH4DeqUM7yt"
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
