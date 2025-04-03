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
    "rbx4CYqY6XfcXCuPia8UwDt6x3nU5WzbBEt9CNQGKW16S8XfgZ4fQFmf1yPWSy6LNrC4zaNZKqsm4jWDtMS5aKK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KHDB9gyVeoN2cmB2KwukW4sEjSDvX4tEk3SuVMxspiYCt1Uc3YDKqaapQS7SXs5bspmvMuSe2tBUEYyRLe3Sm7z",
  "key1": "2CWMRLLJuvTe9mf8BDWsSo49LoyZpUyXL2agriQXAxZr5aXeq85Ss1eMxgygP7kHECBuReiKbT7c6NS8kSr4VUds",
  "key2": "Tfh37fDUt2gDb2e5YcvndyadWrCMYevmVam2hhcv2fwQjTGsYWjRiCrzxJiksyaphpR49MQGz63VLDuVDd6Zz2Q",
  "key3": "4LR4TqfemntWJ6kFuQWuNBCq3EiX3vDDCyFWr7HxsSoH9NzitMqZnuDydbMgWVJCAvnixpVtXSC2SxUQciyp73re",
  "key4": "vw7BbJnJhNFhz1Y3YMwosGUudGeuvVT9hvfDJXoQTn7VVXpcF4MTEkWTJcPfEjupToFZddjX22bs4tHXjMs2Pxj",
  "key5": "16gzrZPZNefSfAVqUCxpNhjBmfzbJsGgnhFBzCEZeXvY6eWnrYJ1eg19ytuUF4Ld7zGDRywP3HTABauj6kurQQv",
  "key6": "33bRSz7CFPaC772vrBZ4R7rKFiVRLqrKyWgYtLyAxW5HsftnqGArSbFhJ5AE8smbg5ytGbgfum811E85Ee8sxBwX",
  "key7": "4nVaKYfxzuT6XT8JZkjm9FXty7EDcaA8HQ4Zf7T5a4CVNFdddbhA4Paw7nisTSMNXbQU4oWbqitgfvroBGCB1qAn",
  "key8": "55vMLEGB9BacqPxG86edqDtj13Jaiuze6SZZ9d5AYBharurGV1ws7BHExQRKS6aaiqxuRE53tFcgTpzvPtrWBB5G",
  "key9": "2F6mN8ViRro3M9btgp8hU6ga5ZAy6x5fVWvy9YkeMfJYixLkYAG9qxy2FAEDGHP79o2dQraYFyHouGEts5W7dUKY",
  "key10": "5Y43Q6X9VZC9pUEYQFBsYrt1eJpGg4oKq7yANxnKc3dKpGYgqbsbTF5uft8VFEbmyea9tniPoQwTNyht5hVvET2e",
  "key11": "4ZgonnQDrQ8K2eJLeVCLcCzXXiTK6QrdMqfv6HcYGVCVTdE1upuXhPew7tSxch3URwTZgnYGB1KUNaxYsUheQNEq",
  "key12": "2w8s2eDHqMmotJtejuBCCmTohep9UQnEcF4fTDr4bFAwKKBzWHAaU3owu9fs7rWoqd5P3MNZKhqpBuTLEpmw2sYs",
  "key13": "tiT5rVZkBV1Y5xGgrjDP4SvM3UfyqvkbKT2cX1NCxsNEUQmrjX7sxW99JhShrNNeve2b4BP7PAdvv1LKbUKCqU7",
  "key14": "2aheaBMuKdP1aqc8icNQLpVVjhBSWv9xZgXTcbAwxwFibPZYyw4YJyH4h7eKfUJ6A8954W4UwpMAxNcXh443w77n",
  "key15": "85PBqgMkkNHJANavQgrA6mZ5KRME6gyKQVJAeLYmDVH3XPHFd8RjGoaMePXVsrbUyfiwhJUfDhvdi3NLbqcmAod",
  "key16": "gMHCRESRNPt2eKrpRChwfoK3dhstQvncFqARDJXiTzbuPJFLsYcScjbi7ftGh79tfvbCTxZhdqZ13EvQCTk77Qm",
  "key17": "veMDA2A5Cy4TMQmpuVJdUaiTprVhWzBYxHPP4gfEXo5416AqRmGkKGvyuwFGdYLfKurkccKU54w7bjvdEdXc62B",
  "key18": "3uC4cWpuGqhwvh8NueDJACbRaQEN2X45BTYAdQM1e8yps8JqE9rGaHbfa5RtPCRzitB6HBGDffoVboMmXcqiNSPW",
  "key19": "4Gd9cHEX6vamgyDRBFQHAdGrRPQgH9Ks3WWQb1ypSVAvhitPbotGHwkKkRKFzbpinTPXqdeg8MdEXoZ3HV6bWtTn",
  "key20": "4f7uAZyKzQssgfHVnJV6dSEHqpFaw2MaKLeRDyUxG2Ft4g6boGyNmEeotMtEz32veqstCi7izAV2Z8ZAV7qxygU5",
  "key21": "2UpgSF8XDVKFp8GYbDe97UktKu9vCJEAwYNipAvW16GB4rA8m9cuTWHkof2LhDurBN8eVjPdbf8Jk9GtYdCJAYHv",
  "key22": "WhPd4uTT8XpqBgs88KfQCjyS4f8AyuRB6cm1KHseFrsK7WQnYwxgq3jtgJpk1fpEhPa7qAdybyyu6pG8JwSBXHV",
  "key23": "2rDjFM8MoPYEveDFqwfXeQRHACGKzg3k8SKG96nrMVThNxpKLvdgbBppB6xeZRnbP8Tn9yupxeteWy3BYEC58DNn",
  "key24": "24VZP3szDSirSdo8tdXKcCj4ncueGw3ytWVzbsswYDFs7rvZ8h3MXFVYYAomx7aC1hZx3YaGuDMWvgWmKAotcRk4",
  "key25": "3443RwWptTH7TR6vkrYZDn9YRqDv1ue1aYLG2DddRTkXpmd6BZvsG6qTVmSmrhw4TQYEnwpm2NGP5t3xurPwJ8zN",
  "key26": "3SgUEgnxLZQ6ka7h9WGJTLjPRcyb1mMSXmXpgvgijtYRSLYKkywwnfAdTADKriyEHwnY7oiVLoiXvUsH91a4X2mw",
  "key27": "2dAgapxANU9RBfTTHtanPWAW7DYfbCoubAfnNaLQmZrXfjZR4JXVqXaeiewDWKvUCEqsg1rWBr1JhyPodmDsvpko",
  "key28": "5oiHdCcD5aM7kZzLrtpxSHbeb9T6TeRZvK9XGFGiRsf74du2n61SGpSWUCSHwPQemsToyUFgBoiLZSC4wizzuwpd",
  "key29": "34DhUwExJCs1aJnef6P2PSPmKGHBFtLNG4o9SpJVGKyGKYjDzTXkLV5jP9itAfzExD4riZLguDnKNJrM2uHWXzuY",
  "key30": "5DdXTc9QfbNpo1xD4VrGE8iuikJQJ2CAeGw9XRjRbERfYvY53yuGTQsz67kii1SE8muyUdqZhmmJrxwefDtq4253",
  "key31": "44NE6rgVTUXqf3KVETcQf4GUm46efGQY2RzpPHyuag3amumkPMFnqgoiuWuZf4sMVM27P15jd5jNrWK8NzfCmrrb"
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
