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
    "5VRajB6WXbpp3U2gjArvLjTDwvKbkJBiCRmQcrg98eCpdYjggCa7vzuQLoYwk7eUjNfnDny1XybCM9gcQnoRTB8P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22qWyLqsbDaXmRDgWkTiRvurrLkG8bpn2NUBiETwyJ7WQRBAPu5tYF6TmAue3SitFZuoJbtMbueyGzJz9d6nkDYL",
  "key1": "5AXkcsun36NVyJm17p7zw89k4KGXmHcrECwuHX4BNojiy7RMKcwc83L4BNRTjjH6naPPxPGxKUnHTzeyifiaRnEF",
  "key2": "5FY81zXgHLetngWm6sSg5QPW73CLNGoVg2jZVbbgxUtC574J7JQTQeMWV1ZC3GjQTu7tnuUonm71qYBdL25YK61R",
  "key3": "5mndzkoetuCrFpLjHxqvtPWPZfJLA4rP4bxTV7RbHwRsHtb3aB6SkPuXgw6Sm6VcqpafnNzxCgFDXpEwR2asTRet",
  "key4": "3oNx1yXwf2hbJ4SsakZtykVqJaoVEwSrpMLmRcyTcMhk3YuLsdYbYxxN4DpFoFZRXVV3EEwi5McrLrgLMNLp74FN",
  "key5": "4rjJ5d7weSRBmkTPsFT7ga2F2ZpsafRLiDAktxCCASz3YpanwJ2gUt1iDRwv3Lgv6dkxgvhDwpecDZkeKZmdcNEt",
  "key6": "4D73pU7tTb3xZy1YG9XtWVMuTessxcFmwRpJzMkgzDNnTvzCaeeerNLzbnzYjMRs7Z7mNYpL8zFxrDpf1bbVvt43",
  "key7": "48eUtkoxvca2C7QXqEVdVvJMa7bz2Kc7ehqnd3a3sjAT5uVLot9MEtabJ7zLGm563cya2PdMDCobDF3VyCWqcYZ6",
  "key8": "2HNTBXUk8bw67XbJE5NoNT5KA62Btidj6EkgvUqxCFYABambsJuvd7uqGTFHg7T17Sz4ojGUX1Ht3Tjob18k3Mte",
  "key9": "3ySJmBT3W2BxinvZRBjL2r6g3KTNARSYM6PQ7uHiU4td6FykzmbwUEWbNsuG2F5GjVHwqhs9LqqWdTiub3MyGpTN",
  "key10": "2f29ecLeqP22o41duAAoPjFTDJuQSdo89nHouykGBwogmJy7qjedyMpeE58DTxyWDJFCMeMgnxDWNDip22Wv5LmY",
  "key11": "3TNcvUEYH9p2QocbDUTerR3CsPGnnJvRxV65dsukMdpFUBhxYxdXXuu21ycup1qdsdn8EBFGs3176ct7doUcViU7",
  "key12": "4MLeb4cngvmFyeK2GYVXtYfi8zhrgYMrnzPfqD56qXnzJhDYqa3H9SQ69o5WdKXdvbcTmHRvm9k73AHQMyT3T7w2",
  "key13": "2gD4AKK3d7gfN8resHPofofbiL86K8fv5Lnh3wwP3nr2kzijyuFxHH257RZcF6fzNkb56Bkbh8sZRh4CwDzR1gTb",
  "key14": "5vts4WDNodUQ3ayaF2E2RYb74px7DPXE8v6kdmUcwHJRt1k96WSYa2RdL1ahf2iTLDyd3DVq1NbEv4D3nWd3TJ8E",
  "key15": "JqEMjhLvQ5MLxdGQUENfJFpUGcj6tA1cJzT2SYmSFcd1XaviKc6VwopRe2Qe22H36KKKFDPaoWhKA6eg92xVJup",
  "key16": "32253Gd9kX2mrevf7jnVNUmKSFTqpQPP5AsWgZJtH5Kr84vC7hP3u1iuviS7fpgLoxdnrNerr95cxYCkjfkzt3rx",
  "key17": "3w92qYW2Hg5YVrZeT9w4njJUcbHouAB26HgV1bsG8DHiQdtiuzQmgbXrUf4ncqghq4b7MuER3DSGJYs4eTpkWE3Q",
  "key18": "gKPawfAwPqtVsZfBmyxJBiUp7gvkVjS8x9otNu5X3Enp5CWSAYHD6uoSsahFDfwMRtDpiYA4PCLf5wcD4FPNegq",
  "key19": "3w2JGxuutynvnDLzJaWswniwKp6D2MkAvbE7yGjXvbCmHMf6NT62j3Gp41yjr3rVGKpt28jK1PjFMm5zNbwuFofa",
  "key20": "3oFohWtCp7HvdsD1JeQ7m6rX74v4bd3NLJbcBnLpYgxE2XpYWjYujFFYNY2QRFsd9hhY4A7NsQpY1TEWprf7H56v",
  "key21": "2SSuqDDbsPKMBczd5fC6RPJRh11Ksusa9wGax5C6sb7RRX57Lt37VryoXuCrWmZUkJCdhGjtzmPzCAfxHUbqUnsa",
  "key22": "dAXVpSHkj47V4Y5y7UhSZJZz9owJEh9ZaJgMPd1wjdBkv7NhtmK7YXpCxRqQUBcPFvqFVcGRPbpd8ymmvNizSRo",
  "key23": "CZ31xzQsxLGqGqAjB1wiXM8tdRFYweJ2rJDaXCrjR91sRPNm4EZUjcKoxk2hevswjbR7LQ14fejBEMsG92ijrRP",
  "key24": "5ZnqQHtDVFAuMXKLyQmisbinxfJFGB5tKVXQpP2wt86U18RMrp95W6AVsgTb6smGH4sVyYbeJxfNfY2V51tdG92"
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
