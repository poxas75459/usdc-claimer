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
    "2sTHwg6pyKALgA1wUe863LE3KtXTiKnxWkKr97USBzWY5KKApPEJibQJvF6dFf52GLUyZJk3fubaNaFGZjF5uYzr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ENqSwEfdA452xCCirAJhyzYbxgabXE8yfHtU26meyZZGtkfkWBsxTbdufBWwtgHaeXBhqbWv3wbLjK6nB8CmHiz",
  "key1": "4TYuTXWdAZaRV6t6HYGQAKmismrWdkE54TjDJFV76jbGraezX65Ngpw5M8rJzXrbH6CpT7kJWMTR87FjHScKfPik",
  "key2": "4JUgdcKrUoNuKnCq7p38Y8jXZ4ziF7cAzJUosHDnTE5tBWg2fvQ1gNbiijd4A8ewEYyXUsQb6LMVh6b7qPyTn3pE",
  "key3": "qi1MGnzEDNRjTELYxn8FegemKuaqxQnMuLkEMm8rEunvFYedAm5fkWjJMqH1bdusNBkdM8fC96XaBTxr7RRpYFM",
  "key4": "3STUi3nEuu5caUXAKvTppwAiEuQLukskRwAUGEhwUJtXQEgMErmFuRJsHbFMTDQReSvcRtRMRDxDjXoKWpz2mVyZ",
  "key5": "2VMiVAtj8nWpHfGzHt1FisqgdzcBo4Y5ZqBmVsN5Tdtj9m7aWe999Wrjpm3WMfbqYvSPWYaQo2PFf8Wzvz63kCBk",
  "key6": "2Ac9KzbLPFYjcpqJ7mKVCDyStadazD3bGZCk78g6LM4R7UacGbuXkmxqSfgcaSUa1VbgFxjyETNHdAzktMHGSA6X",
  "key7": "28eUVRhdnDicUMHErr2BgSRpAUub7aGCMQGmiUMXYRXVCqUhBnSr9t6k8qVTPi7i9QTM9LZB37avgBBXcJeHXWgz",
  "key8": "QGMYhLANg9o9aH9ktrxX6jKUnsDr3RLDF8ByDRJGLjXyx1iKVbU51YL3trvy59zqtUpNXiCoKLw6zNYR2MJgRrC",
  "key9": "4kEjdDEwYWSZ6SZrV77F1q4BcRkLorxDRSoX9mQ76J722ZTXtDUUvjzwcNxsSL7Krj7tah4PdDg7A8x25yvGTaGg",
  "key10": "5vZzpgWZazoRf8phifhAUpdtU8iTCwd6Qcsk2tXMMNZXnobL4UsqGLEx8P6qryRwfK993ksnfsrP9e2n1swdgmgS",
  "key11": "3BCZ8aB4rftcmFmsGRrRZLWCD3t8Y4Q3egVrtVGmks2U643VyTmtJqceN6B2JndKKGivrXPpVhmdArHfh3CArwKS",
  "key12": "4wXSm3BRWp8bbs5cx8kp38DNZ913VDKWvvRnp2jFYnWcpqyVD1bfwCwm3G4x42i2BTTXq1KHnTeaFbLDY81gveTg",
  "key13": "5erU6ZNei2JbNX353uUKjBGkCV8Jz5MuJ7Zy4UpTW2kNW18pHGWdxncXbs7yFXdJQ9MAT4xVFLvu89r6qNyTJ6G",
  "key14": "3H9LGB3cNz5Z8UzsvxbSFvp1jWPeL3uDgFrkE8XRjgZwR3u748YnhUNsKwNbveRczwwSZmZdg6gD1qauJgKhQ8Bw",
  "key15": "3Dg3V47HozknZFPVhJjRHFDx3FDP8tBWjms2TqkvrFcdCyBfXxb8P8nsH5uhKF9etE7QWWjEHjJsL5MAsDJ7F7Eh",
  "key16": "4SfTzZTDYiJHNoJXcTj8vrHVwbSdRvp2XVLrz7djGVVYEJnrbHMgUfQSVUgNYFKa9PVDLnDMsLeEZinKGENbcPSc",
  "key17": "5RVrfUboFQH9uNyL4UBAGPSjRV7PJ26qzk8PMjMasrfH7e411p8q38ZA5LJgrXwRERfvmLdamcb1P6nMgb4Aw6E4",
  "key18": "48FoZpXayZva2Vvfwy8fTaQhUYhmkzEBfAjZhDH7fUw6WnibPXSrTxZDZSX15bMH56Y2Af1ySgb4kpBsXn5jG2LG",
  "key19": "4QpE8Hy3jxtM832MmhdSQuRfVGhzzuWMq1fuD8jCz5XEiZnEFbeuqnPuQT2Cr8XhJsen4hRP8h2tAEPoZdDDrTzX",
  "key20": "3qo9agjuk3oniJhh5TMJnfip8kJHH3DYZLKfP3sLgGHHXXayDsZxMeSynHBAVQwCpeLTAX2AfaD5YZsGunLqqpTw",
  "key21": "3o2K1ScAPA5fQYGR5C22DxfkLrctHoVr1LQgeM4ifGRjo9XF1xXGJzEQuw39D37wrDcTj5QY4zrEzXbcSvaeqWjH",
  "key22": "2AyHYDNSP25VxRvjqCVyZurxxZ76yesBeKou4X6RsS69CCnWdakLw4W78poCf2Yf3GWoeFKpacpYb4oeWCnM3rtt",
  "key23": "2L8NTK41YpGJYkzxaAcKwMEAN5HqsQ6m61J7c3CvrxrwaQyKk6Leq6Z2wWA7kHtC7iVfhY31YAgZ64fZSjcxpHDM",
  "key24": "3X5gNVBUeoeS8Lvqe121aUMpkJ8KAm9wejeBGz3MoNj8K38WxwfgQAB4dgPSUvNnMq51VGsD5EnSNUNcGnhJj82s",
  "key25": "4ZxuYNocnxy8aYUYQMXhryigx1AKtX9Wq7embK6BbCKc3Gw1Bp8d6QeTyYv2ibbFTu97kzAg7tnSkYMyVK8pzgTG",
  "key26": "67p78qN5HcQEcUNgg4TTpLKq61rWF9crh5Ac6QA7iDw8pwrzbPzqyy7BaLSmLRYiWZygohuSnLVp8Gkyy7XJWq6u",
  "key27": "2kbvzc4fibxr8ENpyGLZt3MhvbNkGsAZ3P3HJRLbKDCEpFH9PF6LT5Jf8by7vncLgvdDJfDFuqeKaCraPWhToERf"
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
