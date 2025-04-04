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
    "37rddGzfLF7omMnvwdBaxRDEfS1b5pQmooWLrjYt1zuBttGhfgBBzuv8R1VBJFiEVKbB6JEP31EX17HLWdpfo8gS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5awpSbyaDzfjBhPHMPcrh68YTJPrjiyCZQZML33D4Pc9XPLsL2pvg75tsqYqgF9eRJ9DiPS3fN7p7Yu848bQxhSA",
  "key1": "3mA48FsrhkeHb3hwbP8oR2Mz8C1A1c7Z8q8hYQUyYMyTDbskNUkgRrcE6rKaHnGN9PdJ9rBg6tngeMgVLoG1nGHL",
  "key2": "5GxrZFoYqJ1FAoz9ZMziXpRtkcr5Nt5uKYN8jRKXAJHVN2TxRMj2ftGVKjTZPqYNQ2qd2aMN4dgV3Vz3TgpzYxte",
  "key3": "DkK6JchgMHWA1eqtzkwgFLmgPbC8dFR9cK4JtggNQdskGQd8qsBDTCE1VDfn6ppfDgkW81X4R4DUyTDSyTLzLdW",
  "key4": "4wioqRT7tKFx1CAACm3nUuedsJ7iyyH3g1eA5pdf5unQog12WVnL9m4t3XReQzAvMAztE2mjieJnmYcCqNfi1A58",
  "key5": "H3pxXvWGgTG3drLA4KFukBWFrD61vcVC61xKuYCyefJLa3pWC9YuwVhSreeRGCXWVA8qCNAPKED9dvDewHACNGe",
  "key6": "5M1CgwjYTFzQzDCidFoNNsmvMvkauk6kMKk6x2G1F1RarXH1DqeEnVxQuBtPEcLWzUTGEqwCFfdvxu7iPeMVAPJA",
  "key7": "4iKGeTDFk4gJR9XWAESmqpcw842UwZvGrcxXG1b5v2ZFxGeXcx5mZ6U8ZE4Hy5jTpNu3qvFb9ZN1T7vrvssgGmuL",
  "key8": "P9wVYZCiaXQa7fFWy9cH4zNH4B2yxmrxJrAsAiQr4feNAEVnEGYd5vnrFC5TScumLneto1bM5PyQbSkoqnAV9x8",
  "key9": "3HDvbA5zaktP5SLNCe5YaHETQrCkoGkUo1aUG5T8YAdewGF1BdGzvxJ89zBDkhzVeAb9i9uGrYjK1v5SSCtNb3Ee",
  "key10": "5jFGD5LZNc47Xw9S83znwhPmmLGqanZG9ZWm3Ayq9vWJHY4grkuhVa24u2XVCMpv8cEaRYA51fnD9FR8ohVwUjnP",
  "key11": "bkSvmqHdpb5PtG4yEFC9q61FHP5xATAephMfCgfSve7DcgTnnPmqKhyBasQNFDJ87ZNELwDGNZdA4P3ggp6AUpy",
  "key12": "3WtNjhiFfrhyXJE1TRV41ogHeWqtaGhhECuANfXWmrpP5ckr3DWwZ1dw9FDDe4zGQ8DWDrTXMRWFUuZ94H9S77Nk",
  "key13": "ZiWY7E9xbTAH7LnBKPJ5jttg4fneTwNqZ27UEdqenvzT73DgXBhwgVRBPJKd3JSXA2HGQfASHgNhaFjKZ3uL8CE",
  "key14": "4D9ziKWZYRrczCvAAE9Fvfjm5bY4NNwFzs18soLw2LHqBEugY2iSdGiSazAudVwSGJSbR3Dkwt5AKWtQKAtPv8hW",
  "key15": "2exjNtGYhif3R3E2vbZrA3J2PuEe1ox3FJ15Mzp8PAGCCWpPtMWzWSnRSeH5Wb1YF7micWL5ECeRgCdZQJBSVpEK",
  "key16": "44ARr9US59y4S9Za3cwnU1Fa772b8RhHQY2SwvekK3nfg8LBjqx1dmb6a1B4gsTdassW8ZcEemG1Uy3eowMMYwx2",
  "key17": "3RPu9UGAFo6BmTgZg8L2bbzHok5BWAJPap8McYbCGcnz4K49YrpkbzJdCcNAceJRScPzCRTdABRhwQFhM1ziUeLg",
  "key18": "Vk8pUGxqWHPYgRfTFRFeqq66drok79wLNwVviZCHRTu7kCwiWaj4SsuyyxQzfv6eX9w5LHWwwWpyqUfLaGtZUAJ",
  "key19": "5ey9yTg3NqFVdGpPxrzpq4X9YLWybdTYVHLpYPyiihMiq8kTy7DsKjXWSLouu93wBmBNELv6eGw2QdofP9j4nx32",
  "key20": "5iUGyGnY1GYSuvFKR1hhePurHdjSkM3kFYAQjMDiCWF13W2LVTv9Bxx12AjFj56mZx69hHaoKNKABjexai3KnwWT",
  "key21": "3u4aQczyiDXyT5iqEZL33VL33RkouyA7p4Cgmcuk1MNtbEWsuJ3DmYPYG89Xm13HhysoetMuw3DV3PCZrNdc2wYj",
  "key22": "2Jn4wtD9bG7gvgHFDQHeN5UHFaNaRoyPRNtpcg8cyaLGEeXreY8JcA7zgq73ANpe4g3R6hgGDt5SrSS1PvSpMAQo",
  "key23": "eZV8XSypXybRxnUJ6aR4HNVBVCKyWmqzjgJjgENJ3u66Q6ADHXxVfHUKgpKpqvgTt5LZGF6GmHwbCuQ4x9PpsTU",
  "key24": "ALxvWEwhrhFgsvuNXJ7D8fjEHXwKxNxdhhBJ8Nw9nLMsEi7fDmhEeCNMcQeLjbPEFYpDqgFAs5Z5Lx74hi5EjVp",
  "key25": "4Sf3H5tkpbBh8XbM7mMmQjwYMZvj35N3WZ7HEQ2bL4Mf5B8TZ5HNwDHcC2cN6X9T6zpmCDhL1ypBbEanvTiHgu4Z",
  "key26": "5K7BPyVvYi5ZVeaNQaDCJ5r1tfuecTN3zLQGJZMDbeKtH286ECqK8MGcJbbGfHthhbjut5tsfpQb9j85dWVeKHAT",
  "key27": "5hoxBoUK7qeSHzA4iD4mUqkT2VU7nVhWSCjEt3cwoRkHXZNPEhF8KQAhgfFvK9dCEt1YU1XUQAwTdRhadhbaLbbC",
  "key28": "4W3KYy6vDsZLtSeV5GfqwyeW8mmST5LtpXvCYYLeou9Hr2GLnbMzzvvkiTD14guLzvAwA19QBXY2wfEbthwzNaom",
  "key29": "4rKzudqwSzsCmpWgVP9C7WagMk56Ggf6U3dEGwrg5mupyRGWZbFM7JvY4WgMP7JtUUeqMKybKX59bLCmj6UikXzV",
  "key30": "5pkpG1GSvXtH3j3ntsEkt1SvAfghTWcz1FibYDYeUEsvEfFpQN8WwdNRRos8mwAeeXMxw2Bbzvk5rQrG7c8Khwqu",
  "key31": "2REpzLxyhNEiLUptwoHiSLtjP9UCdMnxvpg2vmuoNdS3m7d1vzKsa5RkBu17hfsJhohWJajSom7SCNFZmhMUu4dx",
  "key32": "2UZM7iLWNGqMiNktg8E7SKzgz8JpWwz4AMCKhMjURRyhypABaPJzRenvZxXDJaryB6d7oQXd858Gyj59PKgV8iTb",
  "key33": "2RMXjAnFLHvwz9Y9khYEmA5VszMSYU7BtRSGsWrtiAoF1vsMjVqerTiwSFuNyEu7nZ9cRfbNTUYPLQ21iCGjrQXM",
  "key34": "38VhmDj3PSbZSEtzxr9wpRae2BhoTdEwagxARkuCjhhCcYcNfRVyxgAnR9wtxRqjh56zZENkd5SuJRNgpJMvnwan",
  "key35": "5TxjuYPi5qeA7V34YS61RxRPEuj6cSatByW5TaRP8VFtQYr7hLWXyUk6KGiEUuhzFMdwS581RcPubA4fbovMFdQ6",
  "key36": "uVSboAj7588jCcq3aq3G9iVufoqDJqgYwzSqebJk9pC8wsi5i3bs6ULK7WRtv29hiXVDQXG668KeH1iqcLXmvKU",
  "key37": "Ui7zB4Na1dzN2pm9nLLfsrMqAd9iSEXripPQWSCAboqHcesGLzBnN192nzUokVDXZyKSqPF2r2qaBULGq16kGbH",
  "key38": "3YV54HVZ1G9xUxfz5qpDj9SMv6Mi5PBvS4XATAaAbMPLoADdBr7gpepC79wYmyUxEXcqh2nQkBGGMRuZnNTwsHe",
  "key39": "2TFCVGD4AJJAG7KLuSy9adXLFTnq9jBRpZmGVys25kDbE8ERiMDg4nVMxKUvf6pdndZpygUYRU4XkPKecz6bxpB3",
  "key40": "2wNKc9eWu92ptV2pKaDf7uuw6xEMT5hmz5Q9MoZ98sTkAuM4hVNEPNYB47p9xQv1cuVrt7TjVD7moxXFmrzw72G",
  "key41": "3tpKwqg2RSPFEhDJQB5zC83LqiYfBZJ4fSP3BTAV1AoAdE6NuM8MSumG9RrbPH66k2XxLJzH5HKD5FuXLyoqmsrf"
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
