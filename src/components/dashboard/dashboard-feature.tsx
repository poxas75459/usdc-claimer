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
    "3FrqgKZfNbJZ6BcdXyyXMHiSskvzgChiAyUBaAvhrFkPtfmi3afZc6VUnGFxxF5vJeBpQYtHxWfWkFP3Ry6iUT7z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jzXztNzikA8fKYqfp4vd8DMt7kodSceUhueVbVX5WcpH6Tvqq9D9t4BhLy62LCMdSYTramKLjgjEYPh1vGsaTHH",
  "key1": "2nFoApxMGpCUEdEQXv6D9Sk3Y3yoPD4rkvmPvStnVQbWzzyprfDKM7MQxucgBy3yD6waArTydrc8cNJWr851QhxS",
  "key2": "2LKEzu8QkiYw8uDp4Nmtu9gZrY4YvPpCsUXkaLCcgCPtfCqMqe8EfzS3Ty8K2SRvCWHDftjXMWqWMUi5EkGw7z1o",
  "key3": "2fpJUdjXpQeLeexrhJrmVa7bNye1n9TbQxLiUrkpVfbHSYPoHAPZHHWifPVUP52J8hAWJKzbeCw7ZbnzejEDi7wM",
  "key4": "3fH1Z1yNWVag76frLDJjYG1fxvMm8qikVtCHNZYsK23wmoY3Nhv2bwyj75EStn8s5sXgcdomVqgAFu86jaGEdTKp",
  "key5": "4dMidJVqxdTxmZcwNddFuMku5tXnU1cM9Fb1mzKhG1DeR1X61yB4n9ouJ1zzkw7sYG9aUT7Uk1HNSndL74r9JUgA",
  "key6": "485JPAK9wYqV7j61DL7cQgESsDUiWusnfvUGET1TnbWdRmHenjHrZ8NBmfQaXHBcvQPsHYGZQU3MG6dbCJFBrxQa",
  "key7": "3Po5HqkTYCVAjHP1UdpNFeX7LcssgKKkDEKLa7buyiuVaGFY5PJzZBNWjQAQWg1esUuUuofmYZXQRbAESk8yuDeC",
  "key8": "4KExiuzXV7hLpfGY4dSstJLvhSMC1J8PFZvk22tuuoyfXgB7PsPVCJdiuA9q2Ad8mG1qBdUZmNQTkWmHiCBTigZ4",
  "key9": "4G4y7615ZeVW3rt8sCdPP6DzjLZ3ZRtye14sWf17Xb8wosXZruv8GDTbwDteErQMNDtAkNWsEkfwBDpyxvdj3oBn",
  "key10": "3nQk6gT2imppuBKi9hY2FPK3BfKBe4Kq9s4zE4EKSsGnRJiKYqWx1MJ2SpArFotyXDTq4pquVWgG71fr5Ab5aUus",
  "key11": "3AZdNMPv4P8sYfNVd3nqU1f7RE5YteFLPEQtNJ7aVRSdBqdCKtgZTzhhAQVfrCW7jgdgGAV5ZWFevyVoA5oPZZz2",
  "key12": "3YKnPjSsbUGjeXdNB1wF7TLFbG5PAsvE19UUBoL1GaMpEJcNfCJZPgGNnjNG2tjVQAvnH3SRPS1v2Sq7eHRj1DCL",
  "key13": "4TTPSLwUVZ9XFGcHLvoo1JxxTihxEWA6kZuEJNzyBgbx9amCeiQgNf77mbY15rc2vgDd88Btfgp8y9irngskcJei",
  "key14": "4Hq3UXfQb5BZkNYFXan1agHkm6LvdzAakF3Qb2hs1zxqhrx8qfXugff8xMQ2jgtipVoLNvY36xhGwhpZE4iCxeHB",
  "key15": "4cBExviNeD12ftJSy6E1ttggGJ2LQnZUv7pomcaxNkX8QvA2Bxy4mmxG5ockgmqd51xGKP86CMpUvoHs177etkDw",
  "key16": "374nHjsXtmwJtvEPAmR7EXnKpEaLscuGnFS1H3d8qzpn8ekBm4SDQ2VFiwHCJtn3H46ATEFkMymKHkREaM41fptx",
  "key17": "51RyrJZMKMWqCv5q54dSTbpPFZimD1FootY2NMevZBRxwHDSypJv3Soe9wUpbqQj6UwEugwy6FPowsp2mKHRsJTB",
  "key18": "TLxB7jBd4Nh2KxCmurfxx5TuUmopCfGUjCTH2gUikxgyaR2mY4udSZotHeddKYhvp2KFPUnaRwcPgrte8zxSu4K",
  "key19": "3L2JKTwjj3iAK8WBBKkdGgipnWumf9VybKckvwTxnDRHRC2TQgQpRSf8tQAmDUKbsJjugDkCLatK2DzqL4v6FUup",
  "key20": "64kxfJUbeHMu1xcEUM5r3sSD3eBir1LiDEWhY3nqBi8voxYLFXSFrGQVpCunwvvFB46QtsuJWDKmUjj8Pk6ckTMd",
  "key21": "4fqWB75EpmWgTECHQapzbUNiKKGvxs3ULwQ8r74erMkVi5FiYSveGj6bjLgmXATVZtNxnVmNRc5AjnMbYbwyH6bP",
  "key22": "9squSLmTMhSZox29DaUvJ59iBzCye3STgYLYubQ7eT1wn8yrFhNResPmcoPMjhw9Vtaws38AMBBxWuDqTHsr3Sz",
  "key23": "oiQ1VJn7NQZm5rL4tELNtQGpX6kougGxchTnHVWHw4FD1e6ypRwXw6r3KEAzQEsnDPPSgKtd4SLsSGz94MY8vE7",
  "key24": "2zw9KXGzD1bCQNGopXyYabzV1JD7udg9L3P9hD72X5KWyY7m7XTUpNVxpPp9C7QdRqjh4z4LLJ3c62nBie9ciXQb",
  "key25": "3N6X47Tpqb7259u5XgzWmhY7SHiXrjcQsNaPxGcT3YDJ9HEi3pXtnc2oK99JSmkQM9sPa55rxWuRWjuNDvGD7Ruz",
  "key26": "4aoSBfnXmWpexnPAyo9L3UBGP5cwm59g1GFnhZvdwn7SPYjQkbf3dawSq2F4rdvmyNjFv5CXyPX94DAbQZGKGQwP",
  "key27": "4rLpTAXfrxg5uoJ4ny7pgraPHAx5PD33pnewhbUUuGxMuo6CvAyBtVTJaRWSbZxo1qGqqCMwjCwdeGrdipTWktm4",
  "key28": "nMzWVnb9eMrBodjgrqFmcJpHYgGq93ppqBAiM8TfHEBHZsTpet3Wg4j7cXbu8AcGdcFaFF8zoPkgA5tX4WPW8QP"
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
