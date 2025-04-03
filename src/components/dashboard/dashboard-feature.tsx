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
    "3oFiBXCfsFbzXF2JRrshcJkNrHdCrKhi8ePpZfHm8dwASW3VZs3cqpK8tFDtXVRmp68f792RJLLiFFtQSnSNBLKu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ch3ZQ1bpCVAma2fVLmQn6gKSaqm5J6DG3uE267scV9cCnF1t2BFo2q9t8GXVLPbkyMDG8xqEeB1NuenaihjsiQG",
  "key1": "2wD8Tq6pVR4mHRxUsm3KMkwxEgsL52qxfboDTMMLouTrkcR4yA7nBNoqwEjcGH8TWFes5nx1Evt2XzNjkR1br7NA",
  "key2": "45gUUpLEE84hh1meFbtTxYfcQEyzCkTXjEjKRMPE7SEMzStdTePzdTnHmtL6GQfCqKyQgD8ska5KfJsxApxdFZv1",
  "key3": "3x1P1QCxnwmSwhSSnTgcchGwyieRUwkbQ765goBRoStJeus9yyWSijtCHUPYnpWKV1jpCpJvQBeoktoLFkGEdmxG",
  "key4": "3fX3ehDEqHzk53KRpMfboDjeXEsESWkZno6L1kQrAmRERZKcYKpZwC6LRMMhrCQBie2zT8oGsie6Ni4UQS5saP7M",
  "key5": "2vg1pwRZsMjBBWiKzVsoaLetoUdPosfTZRdbLNkv5W8LPihcifgqe8vRtMGzuABzG7RjhejgjUGz6L6SAy1ZpsTZ",
  "key6": "363j5h4cjMHQBFQzHc3SYNCt7waPPoFFXKoXHjPC3rTVicnuzWofFs5722xDm5pNWv1mQMR5JCN32TnVuehER6ft",
  "key7": "j6qp9kcEh7r4JikkzCKbGMsMXiE38QctzB2q3SaBCPLP9BgDvfJwnrw4VgvppsvucdXJJrGfsdMzcJWvscKu2z6",
  "key8": "uyX7F2YtyHkRnvDxnBAuL9CSe9bGfRxqRFZnZRisrDRuMdASo9WWhaBLnMLU99fG6stdwb5NF3XJF2kCVJJHXom",
  "key9": "5HHJ3DcHAAU6UUEzzs1CG2MMVYhJEM3Q4jFCsd8qDaBtNK2XG9YuugEJmAZqg1ukU515WeAkaJpcgh3PadTybUVT",
  "key10": "5ff6REynrXE6s98ZPQnq6kRYv4pPENPcaz1q8Z64CXbFGVNsgCxPZZ4nAs1z3hwozHRZSuUxB5L3W5WqxD55XJ4N",
  "key11": "5gNfpBdbkDL96kqRgmWp3Zkyb8ayLwBpTuLMfFRcBMtB7FZ9ZZhKyM55zXXmrpT3UvzgJr3zJwFYv7CFFjJY27yy",
  "key12": "5cG5AYjRZBmbF7u3cF9a71XC6hAvWE9Dp5M4yg7q51TdUPbW3C4sL5KQgc4A83uf4pDgVhzQrv8wfozy5qZ4r4Rz",
  "key13": "5Wfe6T6CspKbukc4vWvm35xFDEbHydqKGnTfxwbZU9aZMXiq9mWmGkMfgB8JuhFgzuvZwrm2pQDu3q3HcNdHdF1C",
  "key14": "3TzLQXwM9fvraebsvoTHAuYX7S3uY3ASzkvpATyP1mnzs7ppXscwGMJ9RNfbYwghxgutanPyst87UQpSneA3rG3b",
  "key15": "3AKMEKYmcHHh2ZWNSyYuAJQrj45qLapJj2YXbRvjCWVe1PcKQom7eHet3dXicD9qUaMdVWw8Jj3pC64mcmzAuL41",
  "key16": "2ePuCAjam6ExgXcyBx96Tk9aDPKX1Dczon62MTKzhj1L9Maw8ZETXHmhMS1SZc9Wn8DLBN9Mhraf4dthEgjvxTGs",
  "key17": "LfTvNbYqH4hmUXofwKEQmfvEnthm94rQB1kNHiMB8Vori2DL2RDa97iHSS281QcLYv86u3B5F1VSa8FCMnPYhaG",
  "key18": "4bkoXGnrcxhk7eKHNPnFWGMehSZyeBifKD9KSABXRjwbKvuTYj65ujULY8FddNSdxzAFFddKHxfy93EuSQoeT5uJ",
  "key19": "4kdE15NrZrPQM2rLEuTwYyppmW2BrrixkZmxRMDWzMcuTiVHQ6n7orST86Rf59Ehx1xk8ygy7zqZquC8RnmS5iiV",
  "key20": "5qzWrsi7Tk3zaB8XQZ3aGmgMDWLtm3CbGs6cwX2ksKpLi1JqKvonSxBhPC7Ns5xQTfPJyqeWwT5rBzQrhhTGBuSP",
  "key21": "4La9b4dBy8gK1GfQUb8DuGoPjCJ9s1sYsufHgKWdC8C5XV9smVWqxt3Qq5AurwwTE7GRtuuXAjrgkFtTJrU9RXMi",
  "key22": "5NoxmfgoRoe8rNuyfvQDSF5WM7QNqnuyx92g92jcHBD6UNvBrbV1Nt4fTkZ8ZpBgL2PMbmuMN7UaJbwiGV3wXj5J",
  "key23": "5ZiQXqZP6KVTas8gnXsfidewVqojDbEN4d5PJp3W1qedYCERtHR8qSdrntCvHjU97uPmCSBAVwNGbFgFw6jqJN6z",
  "key24": "5CejdWFPnGjxeFPK9qVYWVScyu9RrcoGDBg43G96x2YLEd2yM4mqLoPuG3JtgmnJXXccHNhcdnAoMGwJ2yA6HPW6",
  "key25": "5suewrtLVZS2w8ReddqDryXbDDYJVzGGkHw8NPiP8q3dRV4t5D7T9iTx16MWp3um7d3wEZnwgphgnpE3rMn84ZmR",
  "key26": "5FTq7VNwSci2snPx5CeDw3CvvDgzhQrW1HALixu29GEVduhvkxNgBzcXT6SzScUjoxoRPmPsG9JFk9EGuKDdExBJ",
  "key27": "LcBYZAEo745L4pkg1oDpAgpyBmWMRcgwPfHbDVHUHhpq1YuwDab1z3XF1EdkTmexXonBHzhzyKSBoVMqyAftAmh",
  "key28": "2VFQz8ZKWaGbUTUrzNmjwXhpbKQWXJd37ryKH3g8ubnhFD9xasKNz6FqZDqWHcb1JnY9M7m7FgT3Nmf6xpAtNPW2",
  "key29": "5nmiS8eWYgjKT4xm7hpVj5gmrfgie8kL55Cja6AVMjRdPNvtEXh57uqGXRmsnZC63w93mXZBkFf98afAKZi2Cb3r",
  "key30": "32Cyng8ftLeY998LKsGoHr2jVpMsbFHoH5ZFjCjUroREjp58AWyUWRGstwV9yv8n2FGbN2QCvWbstXKrzTb7eDFZ",
  "key31": "3M8To5XdZ5UME1rm4bdrudQmdWHxxNxNW6T2PRkGY9TrmAn7UkP4K4HHCyJ5PajuBh5GakjHP8zHMLddvEeYwNuJ"
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
