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
    "45LctnZwi5g8qBdawxWp6RjB91Apg1BTP4uuDWpWsFzVoowrbeNLFMK2mCbXC8qqmLHzBiSqBByBZ9wUGbEvcUDv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xWWJpUc3QchHgxYeLbKwpwvnFoEFFnpcYfRCBTapzvAQdsCCfKkL6deihZ8wjiJzFEEGszsHqugHQbiotc6Ba8j",
  "key1": "4nTSDY9G1ULfrkP6KinXZDb92hu5nXmLAr9kzDegniLFGvdCPQU3eUtGi996tHCNve5EDLwGZtgfxsTquLefrnkd",
  "key2": "2jRycgKdtfMqgUT7Wa8g4iy2sy3uCKWj7BidGSgujJb6H1nUCUeqDLKWTEiT3bpxPLAa4ANCxaKcbbefq2J3ZTKi",
  "key3": "4AJG8HJNhTXAeyUcQ4Uk9g8VqhiggG8nScKxfTpzgbHbgPJXi49zwhCmKs45FuNnLgJFvCkuPZGTKr7zB1RCdoPn",
  "key4": "3q6akqdgCcLXkkE6Ai8L5DfXUGsD7he5y6ZV6pU6Z2iYqYyFoBCu6sU1wbMrjLXNefj9j5jnNkwYpcfjJEpATXhX",
  "key5": "2BxWBuxUDYCSQr43yiz1rptjruoHGjeQaVkt2ZgfM4LUtP3fhpa3VG8MrWbkuUU7JyqwGZkmzBKZ9w4MxdDjL529",
  "key6": "HUQVaNB11BCiavzNUAhsjEF4tU64daoL96ZgstyJAkbiM7CP2i6XsRr1kHfrjDwCXEN7TMnXMrsYjozhavTr7tf",
  "key7": "5p9tJsXybJqfZWvKfyRzNFnQeQ7NWWgKTzu4anUEU9HoSfpjGDZJDKUuZstqWztzpS2NqjoSMyEoeNf5WFSxP2HQ",
  "key8": "3QpyEroPcpGoYCPFq4n2S3gEtvmERAWhwHG6Es4kGDhHZzhrg9qYBeQqJsKaADuWHLTaWiJNrhDwELaA8a3KnaJK",
  "key9": "4SfSuB5ZQjPBxwfcwbU89fdmsyURnz8fYsKziZLByExCsSWa3wg7TW9rQ87ofuF6AA75L5VQVTjdS7zXEY7SECUq",
  "key10": "5CJvX7kHtJ4wiSa4oCLMxBjxFyY6DyycDh52HxYpwb6bR7BZvAN9fejQzpbPeYrWRvxs9f8YmxtVuViXHy234BLD",
  "key11": "5wp1NWcWBLiPDD8eN5zidvbbGx5hhAsxL4khieuUyDPzrHaJvULHtZs9ndzDc3qKeqQ1JduzWBR3XV18oPYCkz5Y",
  "key12": "5fxgLWJcxttenaLLZCATokbGRqjnrDSQ3y2uhMR6yHHDXrBcsobangvoaYqHmBj9H6rKWAKnaXAcZVR4trX4rtAh",
  "key13": "54gjwCAS7otpZtrqbkkS137t46mAdy9X1ywQTNDZtZy8rEEWJk8Y2FoTC2CcNLMu4iTv79aXb4BMkRmGHo3ne9oK",
  "key14": "3LyWohtvhsWu6PH9Ugfe8f1QqKhvtu4Kmm4SyntpXiKUFVeJP8N6Q2eMifpn5uccsoo1odK3mBAhnfSD4K7JhopB",
  "key15": "5zk4xYvk8HunmmPT5tMywwCP7qDFQXy5jGMntEwDcTyqhLF1mMf8dCabzFrzovAHDJF6tJeDt9RTMYZYV21AqbsU",
  "key16": "2eDPezS7juqyW3FoY3bh8JHBU9JZfioqXiXmrgAkyA6RcXjDf6fypU6tjgKhScXUthAiYFZ5MeHUvfRSMdunzmfU",
  "key17": "2s8bA8KBfPjvpV6QAWZwMgqmJR9PgbBU4nCCXbg1aPJ8KRmHKwWsYZ3SMXtR2WivhGdsPTaNutZMHN93ARth8DEx",
  "key18": "SbVyesJNMT9igRorS4J8EUNH1aQVAraWYUsTWYjzWEsUNH66vYeYNVERib1ZTwgA2dKagccZbyLgk1mQ2mFghYU",
  "key19": "GwNFrcgCn2hU7tFef8kWCqAGXAxRFNCGB9vm9eWPvU1ZqV65NjRRopju1UGqHE5VsuYXcodKbtAyT9tZSc2Riho",
  "key20": "kkVfTKuUmQfzn4JsFrmD1VDJGKhMRp7oF3RtTzSUeaP8qwpGQ9V8kt6zufSK4Bvb8sLwHjpmNNM9ndPxVe5F4dM",
  "key21": "3j4fKek29HsGrwn5aizk7LcFzCW2ozmS3qea4354yUFKCkZhVfd7C5UxwnqT6t7zhV7kASAEiMr1WCUrKjNAziN8",
  "key22": "2GvSdS2rf13DsiFAvd74hd9cgEPBDrJweH6daJQTjax8fsz1PmJbqXuyrdgtQV4gZ2JAYvC2wEyZ6byskrua7Kq9",
  "key23": "2S6YqEuYdCs7rLPvFd9Xer5JYfJdWf7Endg2RGtaPVGPJYPbqk2XGKbGomxZgfkQQnXSrvVtkLydiWHQSAFkF8pZ",
  "key24": "K6Pme8Vi9ctuQ7xHv4tvZ7sbb2VKxqiFtYCTRGdHBQASJ5JykzyH18e7by9fbQyuDJC1CxjbD8P9fPeMqW62U6b",
  "key25": "YUTYeGDaSuiS7UA6Mwo8m4Ht692vWrqASVkdpJDHxaPf7kYpd4xgaDDAeAYkKDW65x3UCP8G6Uysd35rdQdqMhh",
  "key26": "33UeDwJBWDeFUeMiBJxUh1Q2AN3niCtMKj7jqy5czSELFZR8xp8eH3piuBjhXEorgTcjVJMezzbcqMyKhSNcYX1R",
  "key27": "K8bxX7aF2kRGFdb2NxWQEGZMgiEaMxmzqmYJTdsChzpJAw9hrDaaTkkfg1d28F2NUxVZUHc7PAoDB7Hogby7Hn2",
  "key28": "5LkYRVq88kU1TYRJxeRJpLWN24RPbbZXPxWYBZQy6eMZsRbAK2p26SE2ePg1Btt3mLk6D3eMK9DWPBqjwJyFE6jo",
  "key29": "2gMNneK3oo5Qx4azc79fvDCBBEjw5hNGDCyjK8wxPKCvWXhJ7amWeAAnXbyFxA8zYX8XfB8dhwe4TgnpeHGM4ULf",
  "key30": "GDigaXyksiXoVbc6qogUbzi4K1jJ6gWBSidBVHurz5pNqcfU5pAv7Z4UMrSd2JMy5zw1VRvK1hQ9o9qGthwQYYV",
  "key31": "2baWsA7JWzihnToGZgPQFtWv1oaL8vmeAE949qJ95GQFQHpaoT6f8pp7sFD8Hv32RUBk2xWCED6pPCQCW7QEhgc6",
  "key32": "2YKY75BkLdVoRvjBKJs86NVBapvo2wtPxDDPMQYbKSjTged6sgwkXXPvjnjHEGyaDkMcPaafoQuAYHb8A4uTGBbo",
  "key33": "3ahspRQqErykdD57yNPJE1vwBKKgk9g1rNCVJ57bKH9qUF62B3yjJDnJTuvxyPXay2dvWaeYAo7a3nddsrcFdvjN",
  "key34": "5CNPKVJamgrwXXWvm8y6z52UFsc6D3Q5pqahtvrRizMZsYWBubJWq96puXsouzYjSFskF7J1YQZBLK8xCKsEUL7F",
  "key35": "3ih5TdsKEqLhTjEEto2rjYjqKLLtTPqRrXSushXsMyZxo3PuboD5Ng59usda5gvhdgD9V5V4uWwdGjgN2LyfgHHD",
  "key36": "23cDcy2r3byRCWw3PMHZ2M9N4gcTtjdbKe2Mxo53tqcASoarFW47DWbeNGe5uePZwNDL4psPr6pSAD4M9nj3Mzay",
  "key37": "4uyB369XdQhTvnckfkG117EtGUaHdy2ytSAYWbov8ntPRQw32LT74oSdZUyyTPoR7hHG7uvzGyfbngzVdMWcuUG2",
  "key38": "64y7yTvJu6m6ucbTnhB2MsbDghL2oTQUUZskXkou9kewfqDvftin1qPGon5y8T9W3urbsurerL7jiCL4QP2H1brr",
  "key39": "2YvAvG8vX77oGnd3uTNXQfsvsibxWJTPFNQX172TmUDkBzk266sA77FsBA4CFBrj7so3h5AANHCwnUztgz3PWngz",
  "key40": "4pW2mWR8eCXh6FuCwrRDe8Q4QUGDXWQLqb5wGpXNHhyiB1RcbCay6619ezmRrm1QYsy5DcT1vHAEZsjjnJui3RKX",
  "key41": "62HtW7Lsc9Bu1druQRfs8VFGMfkGoyMEwamoxjTyoMhUGtg8CaKAtnKbgxtdGgxJBVgWvFvyLPvTBzjpeskpgryV",
  "key42": "3PfTnDSGSjdfaazDhqUBiDyFX85Qu7i6ZZLnK7o2cADoe73WKnd4DzddAyZTvKNkxLH1RNMxgSTo2BSVLzgeXsqQ",
  "key43": "3R3C99SjEnG7qdWoMyya1aKAL4b5kpkQPKgcoiRboTkKBUGLCbsoAsZ7zBRBKtmPwxmx1xBrjNPM7jqsKA6sSBFc",
  "key44": "2P8CKzGLesoLMDwCYT5sNyZEwdMGX4McAdUS3e8TZBo8pbeSBUAewjsMXU6xsoPq17W4kxJspKjkxZPyEjF6QiQn",
  "key45": "23wBLyvA3bNyhM2D195N56bXc7mEBsH13DSv1hHVMuKtQrXtyLqzEvBvDLNgUqpe7hBuxPWpuZMxsuQxVioF7rUH",
  "key46": "5yMtZBRiu8JLCciaKCvcadX4aQmCSjat8SEydai7spSW7FSRbYdYZFz16oazFf1KzQfA1ihMaSaT8bzvs7cZdyaY"
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
