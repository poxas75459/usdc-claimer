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
    "2c4Up8iqqYKu4BPNLtkzZTc7cKErQdVBDzab1jhkEkhKMES9GcYuMs5FKHYcU4GjDujtBWRiRDDxnGD3HJ6r1Qdy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5W883cQpXykjuFFsTGXN8GNP4xNd34CjLshTpaXezZn8dZ6SLwRFRECpjJKzzFGQkoGP9viwugbwvkRF2MDE9j3P",
  "key1": "3HvzCMea3GmbjPZHvd8fE8ksPH8GPZFyM9uRCpUBhF77X5ohFCvH78rHNCCEAFdQWn2WAUePM4WiQqqvzF3BKZB8",
  "key2": "Zq6moAaPVssZyJo5T9aWTD5fkDtHTtHkds972P2gYv4mcvhFk99AjninFJtq7jSoY9qwdk6BSxQbTgySePogA3U",
  "key3": "3uNh7QE7nYpfYgsXBtbD784BA9UTBPZwNjy6iXrE3iRS9s5HDganKGBvXCxCi3Yao2XehozpLmNAuNTfzwEGGyYX",
  "key4": "3SXf2PE7aP6BUWoNVNLysJEJ7SaKzSP2NEkkWWprhHNSfJVDUkg7apfJWibR14Pu5Y4WetA7EE6JLDDdNR67bVJZ",
  "key5": "2oVRPkTPKJUENvUwuYFrwgdUna2RjqPScpmzNPTfKRXZqY6oXaHfi8TjGLUQx6qVtwPVjPNp1zAK5ThEX1qjHHGs",
  "key6": "PzfdiTNTNsmQiAeyzz9YPWRweSVVvmLisnJTouyYg7CUEhbz9VUrdsRdaaxJnoB4UnXmLHMxUN3iLH2jmGmB4Xm",
  "key7": "5r8rDThieenLAJjDWHgozBHbLEKBvPA7vVzMgGKqTiVAWStF4j2UQ6x6hFcoraYGn5iuXmUBNncUMUS1VMBXR8uS",
  "key8": "21huc4SPyZCJGqpgRDvw5cMDC3b7dDKeQtbEhYeEzaQtT6LXfruHHRQPtRHGXpox1L1HwfoWZMp3Ja8KLndVEEQ6",
  "key9": "1doXNFVNTnsNvw1Dz74545sJzpVaLdEEMeWfsWZSpYGbpouKCY8uUvPbN77Sxr9FcvXJCq7VMXLhKY9hCctoXz",
  "key10": "3yb93gykqHBgyHguUWd9gDL3bcxN2kN3qi1uVCjeXYuYRL8AghDsbcKnbNPbwfS4BTPVhPUkXxz6i9RRaCZAmd3G",
  "key11": "2rLkSVq8J6Cf9S2bzdPBr1eH3AYRoF4DmwktF3Y5uaTc4rLjKgGkNf22LnSxxBnGiPZR5dUnbTX4uFnFmmh73iWL",
  "key12": "5AeqBmWWvBxhhZDdvtZz2XC7gqFU8YHHKx5kNsdAq9Lb62TuRXEMNQfMY8utcRKUWRtpNkpYSAM6fuRg1H8rkNaN",
  "key13": "3MR2tK6aeYfZdCZQuJteSmiFzBmaBDFh4ryUdMf4omXHqLoBVpaXtZz6qThBdY6ptRTafSMBc2Rv3KjAzh2FiWyw",
  "key14": "5zCstFB4mwvgPWcSVK8wFPwuVBepp6tiRw6QoEjcqWWHTSVM6Fzn22nQDzKJYNMZbU7quUox3FzxdwKZ6icBP1J4",
  "key15": "36Jc876j3LGCdeF2QNMoSSQTEGUSym2U74axmVMkfGRi2fbEUFb3jwo48Y9boTCmdPPsrEGdAkPWHjx4zkt9EhBP",
  "key16": "cSWdsBZDjcwQf9NwugYnpJaxQAFPUKvY6VHcWuq1DXtEvmnbU7yeUiy8w2wTaX5fd86wtfKYVu3qZBHThdMwiAu",
  "key17": "5v3HLvjNJQ5vVGuzatexYYXDCqCgXh8aMkPpFzECTbqvyp4aw1LfPaWtHupUvaDMVRkNA4LHuRL2B4pmBQoHdNEZ",
  "key18": "Edghkhkwism3BThgCtJ949nA3mkcUdVPhNG54hbN79DnhUHiErJvt1TQY5s3gT6zWhniSmvc8AFHkNXvhSD2chM",
  "key19": "3dsyf8wbGsvFN2KdmUgQiokswx73FUnvwLGG4MiZQekuxpoCteVZHHuE8rHey4k5RRiSbqngrumvPrXEwTGixcsW",
  "key20": "zuTRPUriMkrwnqHVuhuTXE2ZvfScvNmSZh3rf9SgckNmNtqcECQbPJk6jj13UUqJMEmsswLx5f66GTKyjEyr16y",
  "key21": "2yPsoNLyLTMK9xzWMmUwaVUMZVTNAeS2TKzqE3iAwFkjCQrxfnjoHbtda8ARKYUWoEHq2T53yAZGSsAx2RAUkwMk",
  "key22": "42YLwYZb4jRcERk5mCvsbHJ95shdfnTxBSecjMbavwqPSi1bBK9BS5mqSXrCr5oytGrR1oQZswWkVNSikHWFoMTt",
  "key23": "3x4hAp89E97xRNuvcRSbagJABnwG4PF9GvwU2m9zEVFP8NxAGSL4qWfzMdNvXQhNpayQFLtmCUUxAFkQPnKWid27",
  "key24": "3B3nr9WuGfeMjB63atVSn4ij2GSu69pHjtre59EHV8YNgU3VjBouXSnSHqShWPyDB1sM3d7zcMseAMYsNCbZ4sr1",
  "key25": "29gAgfiRpkvnxVCV5xawdWYTHV2nB75C43NB4ujctkw2D7e5am7DUWRCe4i8fW6ox9TnihEn7ahCCMXfgogLyxCZ",
  "key26": "5ajQv2kuuJprQpaG8wckfNCe5c8PEp8pekuJ88d4qbK6H9sAEC2CExKy5C8K84XJsV26mPydWhkYcJofZxJr9sfu",
  "key27": "3uTfY7TFDLxvm5wXgriCpnh4juPocYBFsp5QznT4FYiKqwQexrJJMPpkx2yjVTfEy59eVFDrRer6JprTHfwNgk47",
  "key28": "5MuUqpUmCtJrzkUvZDhjgFoJ8ywqLdpHzV4kXdrcgeAKm9npATj5eq3b9tX7ougXwvzcxifuAzEic2MXwbsoJ3x2",
  "key29": "34GKL5V3m1tPYiVYGqMFvezqRJyiFfutpDoNdc1gwhJ1MdatdhXXhVVhydinqqRmvH4uTVMLDpbTJzqQYJp31t6j"
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
