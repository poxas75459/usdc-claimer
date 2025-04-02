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
    "JDvm33AWXABQ8uPVu9YKhnV3nFFSWqBywZka7aNyPK1PuQqM9UjcAk9zhSa3YinGy8Ur3j5FiyLJvvXZcvg9zuf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xNxihiEM9yMcWftLphmHgt1QotU6ejwqQUMypemNySQwkRsVFMMqNZNjrixN2BaXHzfZyvuvKuMKUNe3LJchD5p",
  "key1": "3jPGaUnFh4vpD5rkzAtCVD7hRHa1VUY8v36uwgZy4XEn4fuh5Nv78PwGTUh8qnqZFnz2Lugc2Prq5CEMTuTaLoA7",
  "key2": "5zrCf1k7uZrHiJC8jWSZkMWvL5ugisCDGcdSN9RnYph6EW5VekGE87hrhshSzTArXurzBfQJSGDwoW393EkHMAJz",
  "key3": "MxqPCx4yGXTWReJVhHhQqQzJyoyEod2xuorWQ5r4i8m9J1rfkZZ7cMKGxdPB6GhMG4vPWnUGcsk7ZMpsEUUZMeR",
  "key4": "3wr5UpwDPHS7f88rcWuQbutKrgqjEaxAqMbMPdcydVZgoruBrUxbtQ6j6ZrR4sxgroMFTEreZCL9JmNKAqQVAgQp",
  "key5": "4ew1Lc8L5Q8uX7d6eXLVyiSkq9cky1ydFfe9boxMKL9gdUELA73pHqXYKS799e6R2aZSgZDbT7stzVBt4gMeWoaC",
  "key6": "2MzjHi6veoja5nDEJZmjA88Hd9JtpESbCx3seWE8XTnNMynLWM2SyPrnfUMbZXpv4rUGgtsth8ths7rgHR94dnd1",
  "key7": "2PbFFMTX8j65EiYCnfRgeAQZNftLZrjXTxQSghUJwTj9NsxYTN2StgjdHS2jArU3MLuU8DQzN6kPyuBzACrr6Gka",
  "key8": "53k8JsA6HTRV85t8GMLLihzQr36176Y9YjKhnXaTkuJ2Bjg7eeqhKu2BbjzS2h3qf91AujNhtxdMD1HjzonwcN8c",
  "key9": "JGnxdt21Sw9gNtuTiCsECtvCP5V8b5zqooxNwXMSj864fQV1ZbaN7mNk6j2K86CuXP3R7cqLstG8xYgZCrL3wje",
  "key10": "5T7UmJNhY3YWBVfgwkpMJGmDPDBon2kmUmXuJ8o8wyLKYhghpityziPFkNmkZHhmg9wNmrn1XkeLiUXh6FJaN5BN",
  "key11": "5ABzVnzHRSQwyM7LwLpDWmhwQYCi8Z2HnA8AGoDZM1wmxG2Hi7vQ1TVem79U3MtSJNVwZ8M19XxJFq47oJc3FcqP",
  "key12": "3cvXwy77udRK5LGjMbfNkHiZ3ju7PfHrjB1YqSjC3c3juoxoRxjZp8HE8U97CKBL8Qz1JHxkeiq4XXLSjAzbAYNP",
  "key13": "2SoYWLXkqSPA9xykCDNULmfenDfjNHDWDrXfDKZeYT7pjgYEU4pm3VuUfpSyHxahzzwh4hqy41nA9D4GCU6s25fv",
  "key14": "53TxAq8LyXs3Kz6NqZDS8iKuGk1wEvqF78NNQGJL2rnqquzhuYr36WpkmnFqKXrtx5DmX7nXpfrUAxrdVaiqoCbW",
  "key15": "h8sPteMz7McmFR5VJsG48KKWF49697WWisuQYdyfohHYf7ngUvwJJuBwL8qoLnDVE2RHjo3TmVpw4Md1JyunCGi",
  "key16": "3QcSR75v1myzvcoSwdUNdkVUXi5c4jzcxnjeQ6aumH9YtCezETjB1VnPgS61z2upM9p2iPta7mLNby5N1ZwQnwEy",
  "key17": "4uvDrW6DcZrBftH9U9sgaCGXKTyce5hwn2HCwYUsgUiBwSiN8vvd2TePA6L5TwptndzJeFFZ18JTq2KheufmXG7U",
  "key18": "3HQ5jvKvskahafptLsPePC4w2ngefPfKMBENnGNCcSYjfjKfwHs4Ms6RGtmJnp1HqhzLh8BRT5wzK8qAxwkrCEWK",
  "key19": "42cJBD5GHoscGYiZkWsJLm5bExzgcX8fxVot4nk3fm9zuvEWK5sgEEk8eWuXLkwsFict1upHJqKRqkf9fSde4BSF",
  "key20": "wcVdBr2t3wj5pdXaabLYnBS4koqbPMb1VTszi7zuz9LqPSYuWt96myJnevULgH4MnYLwHEAmPaeP6p1XA8xgqT2",
  "key21": "51aDP1M8LS3C4HAknVHJj2nD7jKcgqWFve72Si8vMHUTJsi6uDQrRTx2rUyjWQu8neYCbNLtaxQmhYENDmDYbH5e",
  "key22": "3TNHgXPvDrNmuTxE4orbAy3JRW6sxe9P6LL6eidwPAZ4gzh4qUwvV9afk3oCWUKupPki49W9RVkKN7VkpymJanBc",
  "key23": "2mrzRvEMWwXQisfctXzUfV3rcXq7zcCdYvbsFA2CRBpc6Vwx1zX4u4KHk8gUXRLusju3Asa61oymY8kG7pX3fQ9g",
  "key24": "4AC3C2fgyA3fKPpUJtVgexroVhKoFpKT6QzhoNRi4cdLgAUQASp32GNbuhb1Ebfrh7sGWd6TfyU9o9zn6LtXBByj",
  "key25": "33QXDsxyuoovJymSXuG87B6BW1X6KGZxdhyfX9ht4euyzTNnioQvBmc1zuKH9Weu2zWLP9jA9FPQzCEeveHvSHfN",
  "key26": "4xYem3ETa8gbtE1REk4tURAF4eEKWZpSUmoZsGijL3UqJCzZzEg8sNSg5o3VR8sTsxVDSQ3Wb2SQi5o8ShRLEdKD",
  "key27": "4sL4x1zyTETCcrFHvatrpdvgS8Mfx9qeCLJLh8QC1aHSG8u4JE6HhrrRsNf9ifmXoivaxWkvXPgep51JPQKEMx4S",
  "key28": "3tVdTgJh63WXKkUd7mXKKtA5c5isEFFTnYJmuR7cbeG8Q1cYTiWmHDL35zTvkpfvq7FWpbUXp1oeDpbmc93SmFEz",
  "key29": "5ugK7894bF8neAGLfgJ1DyRmwTHdAg3G8cvjvxTZWSEuZshjr1pZ5fvc1N58gueVjjLB7c4iQ4A1oRbWvDECzREf"
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
