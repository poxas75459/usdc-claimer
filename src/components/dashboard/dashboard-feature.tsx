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
    "uYmYnEszh7PNx7BEUYwKUFz7C5wKTXwebir4HeCrCf95EBV87ofB9uHbjKmJCJtpSjWrJh3xK6PGCEfj6PhXDA2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "czWH9cUocWp1i7qZZyDbveeyuACYgibD9XvMksnaDD3bMWb2C79jMCHDYXUsiv5hiRPgVraGPrA6eYn4rAPsKE3",
  "key1": "2td6PdDxm4HVPVdD8tSX25ZhqLz2EvdWRARiMnnDqznVTYaLJdc8jyqMEFL8pV1cupyg8fjAyt3hs7d5Ms1zcqxd",
  "key2": "5X1VUCAs9g1niCzABvmLKNeQSmt846WGmsfuoD1wsy8pcyfYyaaVNhBQRTJZAXas8hrp4bx28nXWNt5rvoCqPHLH",
  "key3": "3Qe33M16T5XkrAZ8vm8GsrpPi2QEVLPoiQFsyhxjQFWHimNqANwjJmBKmzC1A59sx7BG8UvANWJjExchgTPtTQV1",
  "key4": "3GUxLwDuusvbbvpn4XZWZeFi49V3Nu2LwNKaMkGcBeAZVNJ1ErpvLB47oQzepxo4e1ZdFqWDGQt5BrgpjMr9H8Ug",
  "key5": "62sGTGhCgiJT9sPiyt76F9NofkQdShZ1dXeTjc99uJysNVr2foM9ZsoiQ9Ps29iSwKxGx5VYdcd4AdCECCmST4L",
  "key6": "61erFqDu9ZT2L2K1eRCyPhXpyYdM3fVaGyFQxy1JKgZTgdcpRiRJ7ZvCJ86mbrCQGrZCe2A6njDqjG1McfALPgmn",
  "key7": "2fVBYQesZSFSbTXX1ycWgqkkH3yaPwhiCSb9W75PLANo1v2VwLymfPomEjCY7N2HQPokqPuYwoDsFVopXP7d3efL",
  "key8": "tB9VCxbrQRkV8mwxvZeYjBszUtqob887tL3i4DCaNeji4q6jao14Yb8zYsFue5qpYwff2BQFKi2FKMyjRjDTKgr",
  "key9": "2DZ2bSgpmGmnwU1byXo4WJi97g9F3xQr8dNs9y4YbbHf4w4eRGvV97Te8WFmjGvgHsSDrqDJ4Nx5joNwSHwTZwvh",
  "key10": "4fP9aMsGQLocLKY4A1s1f2zghPZKwEVA7tGHhcuzuZRCXigzC3nXVEmAqR7MXGEmtYJvTiwTbz3ruDTCHXZDjVdH",
  "key11": "3cZNdy5k2SXqCfFDRSjpTgZUHGZey9rYDrtW6tpXnh76Qx3HGtexWoAxTZ78WR7qD3XybH1M7W19X1xfeuDEgxYE",
  "key12": "5wK9ynWwm4SB3Jepe5ByfM8qSaRLQwDK6fyCp9ZRtvkEbAqjJ2fEbQQWvRYMCBKi7mWKhhbKzmbvMfKR7uizK3Ez",
  "key13": "3npKUEa2FeXxR1mhfvTDuX3wSGHf25TWaBdnAQnhi3UhMLhYCFnG8jLoT8dX3q4zZr5yYr9iJAHnzmDMwGsy1CuV",
  "key14": "21M6cRUGu5q5T8zvq1mPVRmnKmzPP552RTzfKvmhNYBSBfahVncMCEvsVuSpbetq6LkfdQimjY9HQrJAJAhg9D7E",
  "key15": "4VBf35Woyd5o7SQmJJbJin4Z5X3L7LRFwJhGn95wyEVvvDgj4yMWxZpyTjnKLgzLisjZ1mXsYog6eYJWePAS3nAc",
  "key16": "25KwwvAYaj28yrys3s4g7jQwRZh7Z6ZLsteZg58V6VS2RPqVVKnucDHXszSSaRTHPTArQSYyRUhSBpvmCN9eT5GX",
  "key17": "B4qkgnx6Wkwxh6rgpu6UtPETAU97rudzMSE3gRQ6GJggE7vb4hjtZ2nCJQ7RhDm3BrWNSNuvvxw94wumUkSLgFu",
  "key18": "4TvDD7Mej7JiCxaCFYv17KBcqTNXauvMNPtawEbbWiFuAvHyHZsBAYyCeAy6WAZuAjr6Rdwf9Hbw8Ccp9jtSEWFM",
  "key19": "3AtNRthrnecH7Kgt41QHZ7XqPXDRihzR2T6LEsh9xEHSyWmkBvuVuJJRfBkJJwWtPemkQ12xnLuYQK9B7mJ7ujcT",
  "key20": "4c8No1xaK8Sv9N89fJGcQ31YkqFdPP8sQt2eY7k8rjdTSsEGaEQuyyMx8teSSrrvv7Cs4dc1xThvnJzVFqXvSvWX",
  "key21": "su61ekPzGYiLrbeQZ5PuBaDcEPv7b9NiZBSfnBT6dcdV6ascVv7fk7w7JzJkqNcNcckNw9VyVADVn3Eaq2aNEhe",
  "key22": "3xYB8vux3xVXGb6VYRbfqdGvsjDfVqtCBJh6fY6kChAcRgsaszghnzFCUKcPMHcwPYkzaRJ97hm4kCd8DRwWHowD",
  "key23": "3U2UttV1EfoFNTqifTmxycTHkPjAAnv7aASsbpWfUZf3fDgxmirQriocWvKCPhoF1VottjywYxdpeu93EPaGPU4K",
  "key24": "SeyVbVq8aKxAYzNRgdTACtpGv5x1y61zHm5S4KgZvioQEQA7R93f73ozxonMf3GfPP3TWMY6hnRDVKeqHS6Fmiv",
  "key25": "cTbcLwskRVLAkHYXupeKLE4ox7bRKK2kZLkdbZGSa5foaWJiD6fRyW6DFB4YQMkCpSvNrd8ViGcG71NxT8w39JT",
  "key26": "5Vo8jH9Ha49Efh7iaKAfcPc3JTZdbSqh2cw2Rd1aVNotjRCXSsVbxeCRuQLvFBk1ZchpJNn1emt2ANXL19vgKtif",
  "key27": "2hJVKahb7CpQpCjKnFXvKNdgJodA4kZdnjALmKzMXYtNCE1t9Maf2y62EAP3gi4yrLdnXRgecB4daxbeFT1gPB6b",
  "key28": "5Euzyye9yGKUXKRXBXV8MNSJh7JtMLiRnk2M7UWAbG2H6p87oKN4PwPmKTr8wixk8kiPFFuc7Bpq7c6DowzrxWvb",
  "key29": "4pD4HQLNtVzRDUuRJQGswQ2hAGjBuWQ32wrXyLEchv7q1WWsoJA3gffxQm8ZtDmo8xcMmdjcL9xmynKSurEK77Dd",
  "key30": "jYbWbG5gJDwMr73dAqtLiQfNxQfUELcBeSU9QjCCXuoKsgH4hsJBBr4BagwMcz8AhfHio3yTVLGagap54Bs6ddJ",
  "key31": "3xZzD8ayaNyBv3n4QdN8ftQjEsFjFcfyVaQadwjNNF4m7vbbVy9bt6WYBh8wt2LJx6tWci7iGCyGykNk1bVPamzk",
  "key32": "4WxaKiqMitiJX9rtCYDvwAFNfSf3zLbPBP2EoD2EKHixmYeQU57mACAhq3rdL5BfwNXQ41Vop2F5whsBu7ZVu7kU"
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
