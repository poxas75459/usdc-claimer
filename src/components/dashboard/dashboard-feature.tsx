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
    "4gGQ89cW6hPivZ97J6dANdsSZeKeLeDWMshL8iU6YTeLNAPQfkpp2ck51pR3wQg1TAWodiXRNtKBnS2BfUSGxbki"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5x4ii6Zr85si9SfqhdWrY6uB1TBdcpPu5FGM9YTLSy3XiwSajeqdewsiF2dtTFBxNtcrT2cN48mvMY5Jt6LsP1ZV",
  "key1": "s8qkRm5YDAjb5Soe1oMHAoK8SXKfWXfeFVdBav82Sf7XZDyFEGfMT1RSRkfx4CyjMPi38Xa6iex9cgWg6wvs24B",
  "key2": "652ua9VnWirFurJ3HQ2XGmpp5Xrsqjqt4VUQJbW8cz8a7PpXRdLwXMYVUWESeAuWgsmmcs6iVSKtzDLqFezAiWJ6",
  "key3": "5gKzqzQphd9r5hs6SSfeM5AGBhwYwneE5UQcjRbcnGRt5v2Abcr1e46t8gE134Kk76sjSo7yHr2wkmE4UFgFpenL",
  "key4": "4bCA8YeZt29V58rkALtJqvYVqcA5Z4VP3fvLgmnhCZdFXYjXiXzRw4mHpk2yPDSyLuoZWczzSouJovvzTPBhAdsM",
  "key5": "5XgKGZa1vMKyKwuJHyFTL6mpxVd86jPrwK93SV6vVKRsjksmZ1tPQMN42Fc3bydayvvmGvbvnEzm1GYSY4KQsZrT",
  "key6": "5Nz2PBbheMrQTSaK4GSsNbFoTeiXWCRvRzEYfVkyLFV3bGcfwNMZo8Ls5XUot1dZTREZCNP8kyAoAX8L1NFnLjyY",
  "key7": "5nUCLmK7KpfB3kRkjJFuUUTdyX1BbJKirSMHn92guSvjBccm9sCFgNCXCrSYu8grQqARbbpQL8ANEExvKs8LMYcm",
  "key8": "4aChKti8wAsvnmCHuxvnWpT7E5SUeo1Yg6yCAFWcNXhTXVFGvutz7ud7zc94kZ5FKXqnzVMtF5YCG7euDNSxpYcP",
  "key9": "2mmy1Fw3zMhfHTbZxehTtLsvZQJf5EvRQy2p339iCQzpETSQYBQHAbxArVR9mWxNTAu4bhfChLJug4YwMj4VWNMT",
  "key10": "4pZrjSTsWdzQtFvjvzHhxYKYUogR2HzfWA1g511GHWcgfyzcwPEt7hP3HxKqMumdAKTGG75MHsREWgcAiqcfbsxA",
  "key11": "Z2WpQ2PCQEPsHrCYM4nrkK7sWBEnaWmAvk3YrzFsW2mXTo5wVbph4cRMg7zHwMhc3ZXSwVV72ejmTCwEmYAUyTv",
  "key12": "4tGiDbURUcDymcoZAwAieC3rkg3q6a3k9eBazt8rMoGGxPzktvYstFF7eNqTMe4X1UtGXpYQGcjC3k7ASbwXRvFn",
  "key13": "5qj57u9enwonyd34u2oZJBX5ddf33jWpK9UmLtMM8wXTMGrnEQZvCJD4xsQXLDH9w22QW9zw4xA36VcS7FF7Majq",
  "key14": "3bt94AVUZtWitiE7Kfsqbx45E3cepcL1755yVkmcknfqz9cNnPWfy4wjyBUEbT8L1eHPQE3Mz6d5yLGqsiTtiJie",
  "key15": "51B8XGJTkezNbxqZkSo6XJnrrG5sV4L8zZMRHSPurzLPy3ZmijrVNV1RkDEN8XNCpW4b2GcPi3NxnrNY7bzcjqJr",
  "key16": "2R7LvbRzPEp3HCDUEw4uPj4DGBsVj6aYGxpcMQr8Jfvj4rMVsSyt8185rFUA2NSEXeTZyEaqybsEQ383fyeYvV2w",
  "key17": "jpqf5WW6Rr4Z6DBbG4CveS7S8qJ14svhD83AhxbQWdegw832ZJWK9VmivRQMDzj3K4Lt33goQbhKfN4QXGkjLPZ",
  "key18": "3itA5FnqFByewo6Y8FuDPTZsxTUujXYeUKyg85j6HBLQdVALatFfc522MzUzRewkX2zUC3jd3BeS5nvwimF7E8TR",
  "key19": "4hr1MmSJCZmEbV8Gmma43j8EQbXH7mEcP6NJuqg7UCEmkxPqJtSx6xgK3dC2wfVhgakrbAEzGpBhMdtTAW1QzoYe",
  "key20": "CFWT3hcbY4hYbBXP4N6SWUeiALZzdwj5dx46dUDXjyamWn6eoitWFuSc9dG8kGFH44Adps9ryLmdbV5WLxg4Jb5",
  "key21": "5iVQfovQ2ss3qdBJSWunbUCMPySDr5GNs9z3vKzJPC76DYxyBt5XgnH7sSaKmNLD7UoxC1Sy8QMzz45aqDFVpPt6",
  "key22": "4ogeAoCMF3QYcRouphC6wn25YMpTeh8bS74UKimM4PmfpEYZje48tfVPGSmP6YGbzpNPQKo9FbykKhtLTEd2wyaZ",
  "key23": "5Qqxct7RHgaG5iapGGVXZk4MHGHny88JHgicM7bHNzppEPT6VYiiv3jajK5SfWEAyTeg8bAhbtmi1GdeRy7YJvnn",
  "key24": "2Vmw3hq9o8rdCEGYAjx9BqbixMwkjRTvScTwzJudv3RP6BwEA4zL49wvJQLUfkckYAoa2ohSrdarrz9bwk4eBXjJ",
  "key25": "5aLZCL3NATtyvMbzCbGmVSg94PPvMKM6zJF9gcL136unGWx4xeymzLavbGLgT8TzVg6XJBfEvyf8t4pVpmCwvR1P",
  "key26": "23wdyD4DtqN5yu2dGLp7GtrZ9Ff5Xf63V8kQV2cuu3uoQ7ZGnvL1YiwVA8L4yoXV2HyJUHnUpD28necTY7T4Vv5u",
  "key27": "4K5rF8MLVmEmCw9et7nx27874D4SZm6LVxBJi56e646NeC41geowowcWiY98B8HQGXc4NUQmL4pR8hNgk6HrmcXt",
  "key28": "3nD34Cvd35wtxoeUioZTBNrRz5B8uRsWuiH6UVJXvst1Uqixm78ysqon35mXdYKM5foaEj3unoQMbiYiLFZ149oS",
  "key29": "29PgwdaQuzjMmS5fMWRHCQ3Xzkgkn79FuwzjgGQM2d8vAEoaRGvsNZaYYfipTd8ZjKi9fW5CbqLTneDSVJWdsri9",
  "key30": "2FfH62xRPyK5ji8Du8hJn9uTSCNHf2c1WwFxYse25jPiM6NJbp84pgWmRbXwXkcRL31erQvByoLjBBmGF3Fg22SJ",
  "key31": "5GRsjB86F1f79XbYvKcXg5oTKNKZnNDo8kuGGf1aSXXByxXuZ3gQJrr281ir5KUjSsj3oXPHapXKuzGhvytfQrLH",
  "key32": "Cr7cf5as8UFQGVpjmN4ndriXaCwht2ftcnSvYxEZ6vUPgx9asCjUZpAgZ3e2xT8uyS2u8RaQKZvDNFftiwH6oob",
  "key33": "9bAPqyubS4gQYjQFWuWLwwDCVm3pBXHEQ3yApHGiT3kA9UqBvKdWjWLFVwYgPWXEpPvBrUbXdzqHWLZu8M2aW1r",
  "key34": "4Zsaedw8YEvHCwbWMXNodMBfHFMar2S363Gez8YGnce32Y75ifxHsZqA7jQfgkWeoAAJtn4PtN3TTMQXE2ex74gL",
  "key35": "5mQBEjeQ5ATwc3XT9dzYVN7tP53uP8KUsDQSemeDh2CYSR8WkMUGeNCmYXGXGfr4oL224MVZ8c3FcybUZh1mkNbf",
  "key36": "55gvijydCiuKTETN9cZEFg7spHQNHizaq6KAhmjMAjq4vKErP4hM6ZbGFcw6SfzfmCmVVRYEn6762sLPWfRmJAoQ",
  "key37": "2zhsmXUAxHkaDRPpxevNuWLuD8xXsmFKQbQNEZuxfRsV2dJHhJUuQvTYEbVCodE2xvwsZY68VmbJetfLcWarkSy6",
  "key38": "4PhQtu6rJe1SNRCc9J6dxYPedSNXSav1FbHxnXNAshoGj8rfquPs7QZsSgqjB4Ti5GwGz4nLL7JaWbyef9J5u2yb",
  "key39": "VWcSARRiGnfksDxPuCKJRXypBEca5uSrFLAcpUDthfm9rcnhcqDofFv4BSVUGnSbnZ2ZRv3zqYjqhZC7i3oPhQW",
  "key40": "3zXBPWaqSjQ4Ht9W1JPf1rxzvaeiGFpKMArDZhReVXoqx2MyVsS3vK6xgePZ72eq3uJ1XSqte6RWuTGoyB7aAQM3",
  "key41": "4p5uu8hoExX19JW3XaMcNdpMwy73C4pU281uxVN2Uxs8guBxJW7fuYQKg493GFEJa1Y7YZbp9zuyNWqrLmdFCjTr",
  "key42": "5dhr6ZgcKB9YQtLNsnehLqstpVAJaLCpZ1EVk9BkkF6V3YXpniXLfbtd7Q3KVrdrPcDuwKgfNfQHsoAiZ1MVYUQ1",
  "key43": "9ZY26qGfiUcM1qe1H3etS87E6UoNvJNW8k6WgYS3i7xXrP3M27gCs2FEdxCTHobKnBRyH2F2EdtH9ZQnRP5ucdz",
  "key44": "2CJ4f1x5zgnm3GSpphMzmmWpwmeQshsTjeV5RDViATVct43mDCEmb28n8GTPfHWpugx3xSy8PeWGNfG1EkMk87YB",
  "key45": "W9WsrMRBpwr3XoeFojhLiXs6CRmj6G499zyNRyZHDS6Vuat5bYAxbfTkeU8h4wLjRon3UQcqK8GBSPYwSsnN9JC",
  "key46": "2WBp9ADLFkupDBbP1d9EazYPCEY6FrqHa5kRainx6AmF9C8D8SAewsrnq7idUjua5AhJxKE66Afru3bZuhHBVe9s"
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
