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
    "yjVbT8Qe1cWY8iyLQj8RsPymnHTZCJiDRNsqN6nxgc56QhTjHzuCMXxpZbWE4cpY5vA99B3N75KSxFaoxervmrh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ERvdgY8XijhgBc7DG69iM3mR4j12aHGHm7iZ7tuTCqcwLLpzgKQeo1KVGpB6rMkRcRfqY2Pvah6S1uva2rPRB5D",
  "key1": "3Zx4iceRVFC952WtmTA3xXEzo7gNSyP9gXYTAVs9CTtY3HUSkfJ8XFUUTUmLznDv2hPMfNaA9HhAfYXbvJuqjwuZ",
  "key2": "52mJMwg4Db3NgVkWQmEv4puFLkaFg7ChBMfbumox5wHwgL8yd7Wx6vJGYG9aYxioMA2T2VfhKc9Fw5ii2miEWbHD",
  "key3": "3SLeWgauCyennjF1763bF8dvpm28xmDpzQiKZYJDDtmvvaisw353v84Hfs8EGs7x8N3VMPqQhQZaE853L3xdGVnY",
  "key4": "4WZQqBHGEwG73A2XYDgMzrFEXYWJNng8MNZu1YHYmABuieCZrkHF8suPnjrTTgzfdMcrCCWyHSSpVHsjty3Tacr9",
  "key5": "5ZcjFN8AoBPkwDivLJYJqCHidTK43ZKwwnhSNEQxbqTPo31kNHbuHxd13cmmDQ6ajsDxMRyNazAQTHTD5L4T3Di8",
  "key6": "4unLnUDvY9TtR4giDJMVtgJgR8rR7NwCQKa315NHgGBBgNcxxf2jw5zhXBjsBeJBeSroV9axxWZYdQqYhXEifCgg",
  "key7": "4J6z2FwdGfiM1KKQf3fC17AfjSuuwnwFZAbaMG5e3b1buks1bx7SSkB96yesoZATzjbxz7sMywdTyASvUJ1pgQZc",
  "key8": "5KF8jiP1j8aMGN6VQmae3hArcNxkbxRKJeJ3JVMRt4v6zMbC2hEiZ4UGT4XVDJwLRoEhKsgawksFEtpinZHiw46X",
  "key9": "4BwwN5eM91AmK8VxatXBDvrMQA6kgc98tD771EspgNMBUfMs9EWSbcTdCJyNftFfxQqzqof2q2LX8FdLP7UTmjmN",
  "key10": "P8gpxEHj7JU231X9B3cQV4yGiX65oPA7oenuLmuKe9efLJawyKZ83xCX9fziviia1dwaCimLzYA5LH8JSJGvs9N",
  "key11": "5Cdn8E5XidQjDZDygFUwE8Y99gx5W71tcrmATDSEyX6fP6LX8Jwpg1tB7jW5dr1v13pi6AD1CDUcnmnkmh96ELYN",
  "key12": "2PTad5mfxvaqGH8wUXE9e39KArViUZdf3ULsxxf1NaMypq7cD5611kBi9Ek9jjwnbT6xTKoAe3VLTHoGWyPdeBbr",
  "key13": "3BxAiraJCjzDdyjxn111ahhK1MVXErBTNf684TLWNi3NZUvpVT6utbS3V2dXS1Xhc6kH3gt6uNLk2nViWx82TaQP",
  "key14": "477TaWUwRycrzkE97fhJQi8fa3xCZu9nLTrbJfe6usQoueXABqGg7tUEzEk4HxnQzTWqEsGJngPzMMVzG5sjBJgo",
  "key15": "Na7CiZDKQqJfsbAqKgVecPLdn1hU7yksaSxxAh5vZd3LhudqTdZF8Qnd57py4N9u2oRrtPUvza1daJsBf1kzuAg",
  "key16": "2ZrraXjEB3ZqrFBeeVPGWgb1oYh1nxZgtGTamWJr1gXL7m28Hmsbrdy2WuHrwCRKmspkfKeJF3wZcekxQugeqXXR",
  "key17": "3BMKWLGBvZbmi2fWUEosngSGKuCLVab1Gp3Uj7PqPdHrhbPFugCeAMyKxTi9kKVeN8DmaTPtNTJWFTVEU22FtcP5",
  "key18": "3Sc3nnLuNmNQ6xfy1yMieNiFgRM8sEuw6JwYTEtzRDgJAJcFQvHW7HmnqgxBxd4Mwf2Jtgn1LodEsEunzExZU9dv",
  "key19": "3Wwetw6RTS7wwThQBSLCwyLre5dYVSGoszJHq75kDsmKqibC5CrUUpQHQCWdkmLgk2dLVpXdf6n4oDoWoTUiWt1C",
  "key20": "4CjyY9BWoPM6iyVV5wFcRhyAWCWYVVo4K1SXKYUsqRN5fvpvFsotDvCpqPasoNAPx3B3ausxKwXBiSakzKVye2b9",
  "key21": "4wcTs23PCR1kX6xCazjkKAg4c9JfubwSj3Aq5UozWoATsr4oybBxhgfArHjnQrrF9WcsGvZEcHsedPoxoQ3FTF3",
  "key22": "5ViDyGCS5RtNHpUNXWaNTiZF3c1oyUperhRCQEXJzrjTZiTzp1t1VYaWMf2ZfTwHAcCE1BfwQ6CLm4UYJGFcgLY",
  "key23": "txMvax8fQkodgDLxEY2aBhBQHWqvvHDXRH6X4S2SQP2PysJSnMkpK8gu5QTJcgoxXTwikGBx33yPyhkNsavE8YX",
  "key24": "5yQcUwUAoeJMWZkjvmKcGuXdoRJ4WMHuGKSo2jJKBHWRTx24WiabnbA5nZyM7rFDWGZfn1kKAtBVKNXj9nD5onB4",
  "key25": "35aQGFrbouvUoA4nwnQQnLzr5osdDv4sbeeDwz3QXkjSY2HeXMNQJ9S2gLZB6ERz9Z6pcWfRoQMq3hg4TnMrdEkC",
  "key26": "5xhWJo18rQfNR7gFmKsPBTSP91zj54D9C14KLPK1kdnNpbcc5ny8qbb7saPXNkDL6BA6yrSshjm3qoZKZrTWyrX5",
  "key27": "2f1teUPSZDp9nhG3M3o8sRJMjhdLLU4jkeTozrd3CucvpufWbT6iXfAfzpXamVTdRGD6fjh3R33oyX1nubouB7Ed",
  "key28": "5Z23LkM2j9ozzkBd4GcRdCnn3Z1dFxSwLiCXmSknPmTtWWPYKMpEDebhfXL9jJyz4XTjVNkdQeohfmfD49we5NvL",
  "key29": "5Ui7ZKKAKvwad7E63re82XVyBBXbe6AkqUq7okawE84iaeFYC657e8a3LBG3WfCVoQjQKMkTXkWgALNqMTtToCZQ",
  "key30": "2esfMGTdRCKo8JhWajc1XNXnZyCZgzXjC4R5eiMr8HeF8BM8xhHWXd5sy5Gi1fBLWXcMkwNuAJeijjC2Ns4NDZAy"
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
