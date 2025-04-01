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
    "5uabyd3Y2gAbJA9rxDAnZJNcFWzbG7rnXcDs3Ns4NwyoianYYKaKVx4jewQUnz2Bo4S1CrpKPX8qDhhWvuQgXqPZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gMUabXePeNkmwLWmwuT3n2zktBgPRFuTSPFK9esGGhb3SnLo1KWUxuMxNuVEemaGcrpPKSsCmMjkfMUAo6Qu8DZ",
  "key1": "vry4RcYg8Em7CXf8XZkm29FZ9yDipUwaVHQ1rGGqSftLbLgitwFQfDTXfDjkkJQ3tyCMLZXJeYo9eQGou4naZKS",
  "key2": "2TNBLyCoKV1kryNXDNiX25qohBnrKt3fVojfRB9qtzUizBWhyAHsspTCEADNv2c3JGTRwKtUKrRgtHGwXcdCfRHg",
  "key3": "3rsKq1b8Myo8HwBX94mLRV9C8r4qrkxozxxHn1tvpWSdXcazn4C9YkcDc3oMVS88DioPLzSVUvbEFAQLH5rFwd2P",
  "key4": "k9spvjiJ8tzz8oFwqRF6RRXMfiW87J8AGfgyttz8zaA7otsHgMd3Kh5ZLVySsk2uCSauW7mdyuu2QdMcqekjYye",
  "key5": "3bGxho6cR3RwxQ6r3PkhxuwYUiqrsBZkTejSfWYigs6MwC27WHmKodKPoCEp1yNmnrunfA77T8iTgDqT3P1UWmav",
  "key6": "4nYvSBuzNqkR6FUHqwKKxXtvy2RKn7R2assAh4E6fq5fYd6gqeH1vvm6DWpr3M56HKe86rZ63UZxHnkQzKx97tos",
  "key7": "32THzzPWui4zA9hR5LvVzroRkgbJMKvoJeJnDKbVpu73EntwoTekh5sXbBpxsGaQjrCGfQLRreJvGWL8AmGrD8c7",
  "key8": "5E6JREwSsoxcYwTRXCkv551j1LLXNTAEar89YrJUz6V57eGizkDBUexyjT1YWdUdhqM4nSV4p1mApVdsLKThTtom",
  "key9": "2yF27heEwJuEsrjerDfgAizFW8cQFePQfWXdsAiLPQdTt7pqouf2e6vcDYVuriz83YU6dSW62kWvXYmSuAEYb8Sr",
  "key10": "4RfLAJvTGS8k6cTuTwxwYikFunj1Cq2rEajFVVZYgo7bY1N5nekaZrbSes5BU4d8nqXStMnAjSZivdWJPfvUC77H",
  "key11": "2is7B33hp6KUgRDhpxN2J4LbWkNamF1zXw9k2JUELdmRpVpFn9oL9Eq12Bj3sKjGDaoydzTe1uY9qpLKvfPaySY6",
  "key12": "5fsKESTVLQSf7RnvepVYoUtpgZojzZH4Jzf7UYcLb1TxArUBeqrjkL2fVdrJ8eMTHSaLtXuUmYs6UgntWG4qN4JD",
  "key13": "2Q8mxLSkkzu83XqZWcSwheoqe5MBSW5jeSx9pjoZY4A4xQubaqgEYGeVX55b9Vj6Cevi3ARiYdUHDCs2AgtniMta",
  "key14": "3LfZdjcVi3PJ1RC1vthgnjo7d5tSy5ognaZfKwteQ9feSyoAU6S4aXkvnYg4xovLqWzuDzijZ3szEWYDp6LKCnWC",
  "key15": "5sFCaYwEFR2dXaUxsQzkyDzBpBoitANhWiBk5WRpyo9LomiYHTmgWcWP557J5LVxyzGpMCMzhHVCZTfoQUK3XjBe",
  "key16": "5b5ZFqi7dQEer5nSEn8NCWE1RFgZzYiZfXWx3d1BsFXQsJo7mXZXaPa6CcN9gc1cVma95xKDE3RhXiEbPRhavaST",
  "key17": "2NA5KWPde38J9Ua1GkK6crsKP17294nRYJ55CFiaytxAwLUWQDfEkrvrpFk5WLYyEhFarMefu4fJ5dVLGJQyita9",
  "key18": "3eL1DSUHArVWGQK8cyJx3nkqHSw81zkYdnGKc6HuKKqknNPtvWE4ijVNoTaYZQvsDdujujxXRVUEkUS5XSkuQcwd",
  "key19": "ShjoC4dpaFW2khEVSA1TgcznjpUg3FwbgNE3BHbeLmD83mRy3F5JPDmgxGxd3YtdTYzG7BSuCXSmyCc1azhHHoP",
  "key20": "4Ha9wfK2JSGvR2hahq2DDes3zwhtFVdnRWPsAh2wA2vj3PL2xjdMu2N4kWfeShBSqFzNMjiN8GpB2G7M4JKWZoBg",
  "key21": "QRvVs38XnehGekzmnnC8fpKkjt9osFw3Tpx2EbJrVRExCaGoamAdjybBY46yvvFu16GVjN73RKDHad9GkmBcjxi",
  "key22": "3JPE4sVf5JmYQaM2iswNHFjfhgr9ZaEGzTzyGtoUmhAckySGNEeRRNedcJ9VicmmQBVuG4v9SSt9VtmXAtwW4cQw",
  "key23": "5Ru1g7u5fdbDJuA7dSEZKcvsCjKC4bQ2NKUaEWdEZcqCiP86Jda1g8MGafRhQcGDe7VKkT2JaCNgMqAbdULJHBqM",
  "key24": "38q64wZVg5Siwvu5Pyotyv6cjGmn51kzKKTjmV1AbocwX4Cogn32KvrQfqntsFiSUG6ts1SYwFsKLiSLwgiMMtgW",
  "key25": "3PJnGQMSWCYhJ97wiYALFrYgF8jCZmydZwWEYyeAVVsQuRmBVYvEQGWU8r1iGvuWBtFqsBqcv9iiQw9ZtnozhVwd",
  "key26": "rux7dTK8ME69FnTF38Fh8fzDaWbj75zHS5xfDyHuKiL5qiixdWJHCjCnqkD1Dnye8HdAhehP4LEwEtGpnbGnaa2",
  "key27": "3ocGoA3s7vPSo7bsMb17ZEDcnH4ZWqsBqFfRQndZxy2Ap9LbPvFVmrLijMvEn4TJFs1W8Kzym3XegY1a8Cc8KRHs",
  "key28": "3dSwXB96YEQ9UFtWX5oTsdXVSWiJ8kZpcMvitHQuPEhJGafMuDZE6Lsmn8iRJYMYf3ijdVhgKPxCkije9WnXT5rW",
  "key29": "5UL7Fv9eLdqhYL6HZVp2f9mEoJ1mQ1jrtXSNDHMLCshNEUXpTS3uEGzCngzMvK961t2FMdeWXwhpT82iFHW3TEr5",
  "key30": "3iXFShGn9BEaLawjivNmpEMXHFq8BfVQQFxiB4NTt52NGYstqeFsXjZQkWsGKsavSkXsV9iDc1t9FaKQUwdQxKvm",
  "key31": "5cMLQNf64D2BCua6PhwkM9F75b1x63hHtc7AoAZ5dRY2RSEhvKt71CnLSGhML5SVYVRDqNNhyv1mvER6zGNcQpKH",
  "key32": "XZE6gf22ersrNY4jAn9YuTtAioGPN7bpYEbCf8UA4zsF9dvTAJ5SpCKsPiMDX4JpZ6v2ntEyswLw6YAKZCdXQY5",
  "key33": "34EppvUmk5XXfJdp55C8ypjask95UQZEsozdHx52tNdnCfbYKLNohRUVUYrPpU5rWYU9zx82by1uGXS75341jpEK",
  "key34": "5AwzQjXAcZggXukgnht2H1hHfkcpxxGBwZEL7Ccw864p1SAshzCJcUgyW43EwHZUwmFdwNPVuLkY6jZprobiGJpD",
  "key35": "3PzzAS24zNo735yS4FAtcJQatRTXkrszBS2bKNJmD5P1xrccYnNpTPagMWx2YzUBKahdJDD72i5hfpWueDPYi76Z",
  "key36": "5tx3Us5cc7AcHErnppZdrotstEeTTtqA7pTYbVgnpgLEs5ErWhMg1caq1o98okXMM2txdEbckVtDatGwoRPnWx4i",
  "key37": "55tFVYAW8w1kJsTgcCJ7GstPADFPFSikP4grKTD8sStJoqMLmVB7mW4k1M6ML87rq1kxuFZYJahao4YPvhHnwzPe",
  "key38": "4YbkkZ256uFZFcgkrb8zohp2Fj1ukC7nd5HaKs12zidts9sR8wxZxe56NGdMCnMvFtZ4UCmvJjFsvfbVFQDbwBof",
  "key39": "5Nt5v5nr7gcAUDHYRjLZhE68R9sjxVJEqaKNEhQw1Bry5ho9veLTGyDiCvV9Q1PZt7cG66uPm9Po5qxjsfEV5Heo",
  "key40": "44rfguQBCQAE6fg5P639uecP4HYhQ8Y9uUsoMHf4mn5vijBBGVQGrhRGWUbh4w1cKbWRSArbR4JjYmP1uXVTb3rV",
  "key41": "5rF2nvynRjZPUedHfKrq3Na2Vh5LEdpxzcsoPdGGi1U9Lwk7iTar62k3xPxRHHvhe9NFxhgxPwwekEpoM2RRCSTY"
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
