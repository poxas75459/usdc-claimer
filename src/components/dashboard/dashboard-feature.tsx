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
    "3srUKXyQtbYeX4Card2dQ95B3TTXdo6koT4Mq9usNkeg6AXbHLkw6hP7pFzSoqTb6cHVH5XJ33rQQp4fqC66yCoN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bxZXbiiFZ5Jk8ZU6LGFSiqnfCHL4mpoDRweYyyyvZxzqWffdo3eyULKAYDzVVeqSrUnXM8oGM9tq8G1CavgnCaq",
  "key1": "2vTqMoW7ND1qyxAmohMPDYCcDU4VJry2BvJfpjhHUx3BBXQBRr2SNn5whjMz6tihTMxetRTEymm47SgzxZS7bd7j",
  "key2": "2TXGetTemkCHzbKeUgu932Npg2nunA3Drfeqt4X7xPWDR3wXF9o15FWP8DpfYqtCNFUWHLv3hFZVbP1qxVPdMG8X",
  "key3": "htqFq4Q1cYdqreVtsQ5WuxJrcS7Pkp7N8jB2vQojp8f312zbbjEHaq3JaqMNFctgttTJoUgB4N3jwC8gULfXvVq",
  "key4": "4mFuKmxsvCt2dqoNzQCRg98XUtqTCDSVQXdd2ppiHBNn93ymdDkLqcxo9SwioSMQd16b6ZWSo1eoDD6CzxBKVAbb",
  "key5": "6Z51k8Zb9UpExT1mtaSKnFt9ZwfK7MevEtZtN7t3EH2jjT5FohrWAj4aa5PBGVqNhsJwUnGxQPF4LUtjDsMfZaC",
  "key6": "5zPSVepqa2Sq9VADn6Q7QycrkRDFE32fmKZJ9a9qgxU5WUkGDeYdyqtGJJ2Xz6FEjV6DyhsHtd4jqBRoauASr3nK",
  "key7": "3oWzmxvDxz6QJpsFpXsMtMvnCxucMurxCmd5Q4UABLuR2niuWSoycg1354Bw4LVVsnsmRN9shwrHJQ8ZBrMsg5VT",
  "key8": "4pKhD3xz2tERXWr7PjVdC9nMbhkPfbsCfuF1CebgweGnKJXuFiDVS82AKEXwy874kajHJNXZv3q4y2aaePQ7gwrh",
  "key9": "LEU4QdncjLTT34pAH31zrDcH49KMcecGLQJQcR61K7tm8D9F5zQ2XYbEZVfJAEKKe7uUddJTXESky4W6jgs7Kmm",
  "key10": "3o9gvjcu7G5KzZk2CPtb8Aj8hKXv2f9ANbFn3v1v9vmn2HBUQhPN94uVSQAaVn44sovxYiMhqn8pxhkVAhqkDPbc",
  "key11": "3F2jqVdCGFnMwQA2o3WaV5FDyda8VgNCpfC1p7FFzCQziEFP2DMGgv7URfvgRhMDs8jsw5QoGDv41HXowtXsMu4e",
  "key12": "6oVyfgVL5f3wivdRZ1sSf83Da3fv23gcGcUkBYXh5RHqdyGT4r6SR51JPqD6mujWR6pcBtnaX5yNsgRpeQDnbe9",
  "key13": "4h1SiZq7wbDQGb2nm4WWkNGTtb81XfrA3LoRKPdtSmz75MVoPuc2Sz2b9Pp9oZk6DFiowu3NJux3mWB5CfyqMnza",
  "key14": "VvahsXfj9o5aBKdZyWpEUVziBshqbGxKAQw8ipmsHRbSfnqpGZBJKYSMRPoTeBKELnbgV6W1QdNjiojTsR96xBe",
  "key15": "1kfZqRd3s6p9tSUUFY4ti34H6n5BXCDATqAUbDNhVdearXVufP6HUQTLnLMHqi3g7XhLf3z4wUBowncd5RDpHu8",
  "key16": "negGgjrzodGoSctbW3SaQr9J4eumx2NX2dVga4unVCzpaWakLFVev9ZFFJuuLLjZKngVcqojT9VAjxsNqTzGkXu",
  "key17": "3jMhzJm3YF5nMsgoFHv5B6FoL825VRGY7cUGj7xxtXqsTpTcZmogg6suttMfWu9xkamx2oKjEndQx3aPgRZMYy7A",
  "key18": "3z1h2Ko9ZAFMQG8E5uAkQBc6cQJKVzkxN4rsbt7jcJvxiE6sJS3DTEpNk84581jaubpJ4TWmF66kqn4aQbjAMyCN",
  "key19": "2JwZpV3SSJD1h84kQWkruFuCJ5TpSTnd9456YZ7KmKVSKd6DLMeG1eSmpviF8KUTPQQbVAM48Z5WB3YdFvMkKy5n",
  "key20": "51Nh7j2AV8kYPZDKfGTexkoCdWvD4yAQ1snr8YPcS4JyPiqqnFQaMQCmMkPTbBk5g5jjfwHtu1iGs3ckZKs3BWXm",
  "key21": "4S8yPVAifY9US9uAPUZ8RtXUG364oEU7wbp9ShAF3GQzhqFpYtCi5s3jp4evbWovyVpUMVkQrJ4VpU5GhfaJ2nmo",
  "key22": "9A7yrD6cbWKgY1MQtnWAo3qKtvqfaVbFnuE6JP7S2Fva2UgAq5yTAf3p1Zj27rZeh5yDeuBy2ptts6cEacXsMJU",
  "key23": "CZHuKu2wYz35PUhLhPBVd3yzhwqBnp1fHeJ5DhctosyfnswrHuFSuPRfE1CuU7GcudFdXFdSkcBfxgXkE4qDDwb",
  "key24": "4nVKgkxfetinqRRYMjUtPsbj2XYUWjzjpvSy1C5SkufmFx2Qup3ScMZm9kh5q1ekUYK1aktNEohxYBfWB4yxsqgQ",
  "key25": "3wtJhrANfasBmHhYCSPXeXVUzHxRUyYdUNLg55bdNhbfCJLtatLqBRwGAYiEYeeQrCPiYnT7AzFuwsex86QkB4rP",
  "key26": "3zwWGcyDaArhBvVrPpswzL3w5hDpgw4iUBhQLkZaSW1R4CNJtmEjt9K4xrGV8HmKGdfW72CCWHyZhHPZHy9SXwBu",
  "key27": "4bcD9ZEdtJbuyiY8mr9FtPU8ypAh9sNZPfcrtNWohqEjFAaYfVViNNYvdeTFzmuDCbQ1yNFQejtWGNd6r4kMPr7L",
  "key28": "61ZrK8TtiuKXZBZ4TAju8txeEW9ZWieUky3qavzHrwjGTKgY78BFUkJpZ3szuDAYerLhe1vtUEAxBZweFBby56B9",
  "key29": "4szzYUgiPRBucYHt4kEECtMf22hW9aiCwAtUWhjrTaSijHrL6kPR6Jnfuxh1RVgArfugxhPq9RnEn4gCbkRcCUBF",
  "key30": "4mgB5ZC2r934owrEVreRiWgZBKx7McZMntTBPUvUbfTDWu84DWKMhAc7TE4xZFDxoBd584HhUhHL8N2nRo8SYrvT",
  "key31": "37iFtjCXKAUvPz8AWkutpwadCUamE6zBWW4GPMHwZmtMLt2KwU1xbijXmHsw5sGrmN7sWnu6guNcKDW5rVihfWbM",
  "key32": "GQZ3d9TVHTmaMsZ4JAuUZ9J6rHXXzC9jLrcbPev4sNXJk7htitGd6uTzLkGJ7DX2K3f7X5iE6dZKyKiUiyFVTax",
  "key33": "38QBzPL6dZ1EzzoUXV93Rx1wZxCyp5r96qVrLMGXAmsWRfCEyKyc5gFW7w6eKG6JXyq373P9aewx9bLWRewyRttu",
  "key34": "2f5HZi4yfFRwdfXacBFCdBEhqzqprCEDkaqML8g4XqPsTZg5eavqpMPd5VjKCMeCM3MZhsZ5sW1yExdmceYoe6Du",
  "key35": "5rouXpCAUWB9R2BrYknwycHtaM18QgbttkjhY3LFbiYaFoTK23GUfbKSEVfSfaCEsnJifJ8tJ5xmETyJAL7sGAek",
  "key36": "54qoGQDWc3oXP9SiGworsi6Bm1cXXLHJGLdctvyh82cM5Uq3kKyqZ993fvXoX4QnqzziwCGtQUDk25jT7JdWYCBW",
  "key37": "4qLVTfZ49iX5rZYWmLG5ob3Srqa1gm8yg6Pmdujx9MtXxXDqssJqdVxsPCXRWpCwhTCzFkXMLsb4fHqLJR2yDPSq",
  "key38": "3zNf2MTCSvETqpB1b5FQMu1WuFmyUkufk2Z9BLqC9J6RiiNnYDYXtqNjtXWC4iPdM2aNBhFkJNb2sKqe2Fit8ZjW",
  "key39": "5sH8eWTy4ymxeTNEVah6Vu7DwgtNbjwQzCv1wR7rQmsKDnHgnupVVwoZf4Xpi5MBAZj23vt4poyh1jk5218gaEtM",
  "key40": "62r8qFH4LkySaDi8BgmKZLbcDrd2ihkqKof1ATeXzYfZWsMMs36Bhf5NUSiF12cXNSsTSZ553csz4iJEjMwZBGB6",
  "key41": "36QWMtSSRq3qWVsf9cTmc9btoC1toz9oV3uuh8LmuCgJdAeoba7bdVSw8HXdphJFsWgHvBBZazPLoQEgE5J3sJHe",
  "key42": "3BSNW6V2pVEj14hMb3t5SdjYw6JvPh6ukssxKS5ceVNfbhzfeQSuysm9cG5RabJewKQUX4AjmTEGe6PsXidVWmZQ",
  "key43": "28FNnJLxsJDQGbb4bs1gp1Torr3mPcFwDCckWRp3qYu9xkyQ4fucr7PwzJPtviFKBYtJjWHJ9b7SruU7p2t81k7h",
  "key44": "5V1E8FnRh8mevmQgRVLA6NXEyE5bGEW8WgNCKbAbH99bA4pXQXEZmREsF88zpm9uEuQXbQpCzKM4s3yCMyNzRuo6",
  "key45": "3uvADbgEbxaVgyNimCnE3wwHqWXWMsH3qsmT4h7VYbyNDihH7U98GgU5ZFrvpccfaoQBzsRtjxeAyBMi974pUBir",
  "key46": "39mxVXfjpMTfBurc96r1Drx1Tp5U9wqH65pez3AAzPZnbtyGUJDbBHaN29bea4nchKsy1K2oexebWYC8TH4WHCwP",
  "key47": "2RkMqHuwnHRnVes7BCJz5MM3vhd9HCf4iuKu5Pukevyu1jygXyzV41A6FefmNLwh9Hkgdn5EY56W5xiyjYtdsAPV"
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
