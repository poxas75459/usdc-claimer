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
    "5Ary6LCKxRQdVznKZ25xpE92ZjuxSEAGE9gW6Wfo1aup98suUbGRRS6ySzA2n2RAy8Zg3aBrRVt6hsoaTb46RP85"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tzducn9frzR1QsTXqbsViGWaBhxGDV4Nqjp8eAPAGtgnu4P6me1UKLkT9d7wKSaDMQVoeXKDcUuL8XNXMq4b3cS",
  "key1": "2RNWmqX3y6qJ2o5XHSnpGi8g2jypXDJ4YNddxFGLHtQbL8shWwV1rUVAmy4R6qjrfb1TKbtBRhNzSMq58xXndUoQ",
  "key2": "a13ib3EyCDzXbppyg87n9fX4rV8jjAPZg7WKR1WLpUqJN2dJ1BsKKhEwr2NP4AUGrmfMXig8H5JWSqZ7bZAdjUs",
  "key3": "3bToxTkjCEysuEBa5Wm1eQirciQ2c4W74MzUsBERAcXjHYwAaWcuWqtn98rg7js2RY2NcFK8pZwoDEwPSSfv81Xc",
  "key4": "48Rw3dreuwuqX9DXeNXmj2Zzvpq6RxuxB6PTJAc4xqF2y5UHFQKCdxhQR67S5TDUGGxedt3gscHMoML5eJN59S5x",
  "key5": "3Z7jgV4zPetdr9pi84kVUveCntNRPVmjcEYivBxnUG2ijrNzbCeByygigCnFWBuwg2eBD9bnM2bFMEZBgquywg43",
  "key6": "2iim2TptqZKmcYtrzayDQeEheiFsC2U3XpWwULPaYRH5Ws2dSjFrMZtzprcW3hKVKz3soy6Whkmw9Ati4ND7fTja",
  "key7": "5p7cNq9HmJ8YKX2cJXfFSc5PCmZbd117T5JjZT8haGCqXaNY1BQb4NZsgwsYK7ksCr1s8RXJxXjjAreV51bCoxDV",
  "key8": "3hYr6LWdsM7AC7FnLhQM7i1zyBVdbGiwTY5ZbzzHWJXvMZV1VR9cNs7uQhsyBWLsqKSDDkw5PkogVuD13uNKoD9V",
  "key9": "4aKisyN27dd1JbgqX3jJgu158BV6sfSDJzyXMSnrH2SAMRC1Pq215QQyvms2zpxQ86zUykBoQ9QeKHC3S5VFDd7q",
  "key10": "5tSs5QgDL14Bkt9qpAxAYp1XUWMq95mn7pNHFL4xzo4ysKiNszFbkR2FwfQu8MV1VckKQ2Hgbsb3ptx7ofr7yPNN",
  "key11": "3CYCvtmSJLfSv4QbZVZoHh7FfRmHx5XzvDz1P92WzgJezpXZ7VSBd2RZ8xwof1wiZS5BVcKYX4JxnbytERZ4YGW4",
  "key12": "3GE6tacbKsxFLoz5kZ4h33rR3eJkoN6sebaN3NUCg8GsT65zMB5C7dKojSNbN897BBdfLthhn2QuUwthKYfxGdei",
  "key13": "4zJT8NWZtanga4kxzp7AmzVM8r9j35qNJ3BjUWiZFyvcbNeiUfxjceidDVniVM7ePPZs4GgAVbGq5iTubieBSwZC",
  "key14": "4aSKpVQWZVwzbqYiyi7HkQbN1ifec27vzGrAYcKtiJH62XPsFwfBNPmpJWB95C57VxTnrtLySuvrfZiQgeVx9nLr",
  "key15": "5VrPeGmGCrDyCB7MxPMovE99Rjmv56Ef8khs4GdZ8W4G7DPApgqPeCgF9mocYacRfaQhPB1FF9hrUNBTTP7W7i3c",
  "key16": "4w6R3A2LbgF23n4nCzSCys3B2z1Kduh825cgwuCJEmvLgXynHpcehg62QMh5Z3N8PzWcrQyKf11Hmd9tiSVW2hba",
  "key17": "5vZhkm1muWB7vJQuHAcXdTCbGbJ1sds7tUuV7QK8SS4KB46D6vfQjZExG4GWCUNUBdGpSooyTq3mtaAyS2uSHd7E",
  "key18": "5thhR5URYyH8eNi9z5G5WMs8Jus5hP4qUTspngnymGmggpReEGcuZfGfZARNHsQBUP2cRf6pRtHD8WCcHpTjnSwW",
  "key19": "5F6Ap6qjHsi8dkjXNFUAaXmrYiAQpmn3mztk6FnLRgRsNqZdkEGPcMtM6Fz56ngQhguc2KgEHGiZFH3betHUm5kp",
  "key20": "5rUbUG1KiMEFKMmbx5gJqcSHH6C6VUH3ArrtoGdMVjMPe6hLzWF8wEVzkDbmNJbCi1TWv2r3KkjURhJCyXiFcut2",
  "key21": "65eL5CDkoULsYwKJsEhXQSFGr76RFX3hhUxRxj784RKQDAZTviacbqpiVx9K6LqW8J1C3TUw6rCC9d3RxkckNLBu",
  "key22": "3MUG3bJcdC31dXC7KrquzgbLz5GxCp3oycdrby87bSNnyosbhDZosTKKGQAySqXaAbzAZ5Ns2Kks2ktF5PEmNHMV",
  "key23": "67DpDt6hUvtRHea2FQDG4GfJoxQRzLiVrPUU8EKE2rsfhZDb34mrQeoQcmVmzfTJnnGtHopiUYu2pkByD2qvFmKj",
  "key24": "33b231MMtQeGLna7pBZYa8Z9hA1jNZYN3ZZ9vqi8u9hwKYgkD8RGvJmqzPrn4pCPEKiJybgj8Y3pGbRunMjdxkgv",
  "key25": "5haKC7T5MDhyY7mqtiYJQzLk319BZHhVRAg4FKAhJNDFmCYXjrQym5gomijN5VquSkC7TSWoWuun4szRNqJZCbSJ",
  "key26": "LMBrogJFjeZY7UuUjiujFh23DVXPp1GvUdB4KjUYd18dcLw5aLAPBYGtsRvr2yR2Ex73ps4EhaAvnHW8SKFtF73",
  "key27": "2US4QjT3MWzCNxQzB84hH7iDJGUXbKUa7eiJBueFPFwb5hkk2XvzpticpCQwLCz1JuYHa53aAPKQkCyNg3ZMQTxC",
  "key28": "4sAMnqt8VS2Hof1zLiWbCQPfYNhTBwmS2S2QEdfhyCxkSGWBRmzHw5voPWRnzSeLYg8GFDoejimV3NtPw2NZfpKs",
  "key29": "2gYMKzQbYeXi3BDLuf3Jubcp8uQFdK9VBdAcfcq6ide3WK8a2j91RaCz8LwcUy2adK71zBSxdzM9QWcWP9yCcDew",
  "key30": "5E5EccPPTG6YbUM6yp7D6kMnqkbVJKfDuDxhSBcgB4eFfeSJXmuBs9SWJBqjMJHkuRZUqrqVSS4bWyVQ6B32nzAc",
  "key31": "5cdEke8U5pGwXqWPN57Zn2vCkF9hyUUDLUNw4fJw1Wh3qHmdJXG3HLCfTc2gkmZ2vZFP5BbHPDUEyudPif6g4P9i",
  "key32": "4Vu1P7yEaqTLJNZvLQemEWaGiyV51n1LAvv5TrsP4Vm2zUZVtWA5sX6i28hhjQgY3QDV1HPxFPHecPLQTv9sqmeL",
  "key33": "mB7DJKRw1DfSBd1fpaVAoWpqpL1nAbaEhAwRnohg31bXr9J4RdoC1xy5nJsguPhJWbysi55uz3W57a9FYoFWZC7",
  "key34": "2jHUfkFB1AaeUjyPJpZHRwLfQdMz7nnJbaqT2SiQ2eZkiPHzBnPcAPnLoF99BJjiWVmG9Bc8G39h3aBJYSQ7LZqM",
  "key35": "5EGSRevc99w3YwiortoQXvvyrdKGSGpaYXqcRZgxZyuZAimc8bBUHstHYszRhyZMUAACRQhFYnGPeBfHZ2uuTsbr",
  "key36": "2K1N49cCkzu6QSPiDZJ9oqDoFpgi88QYY82HYmjDEytLs2xfXmaHwztPS7aJdhpyy5qeU4pHYvU1YhSiaoayruM9",
  "key37": "2q7E3LUtaXidHFm2Y7N6TMdtfxP7TJTqj2kJe8mnG84eU4t2x4neT9ggq3GA1Y44BzBbFFAggWEjMTP1zteQ466E",
  "key38": "4g7FcQytMpyD2ipeyYxGjRhNyT5ej8XESawzj3HezK9QN3RqJoEu8QGvxg6bfN5pz1e646wYy6R8SAtzU3949KfD",
  "key39": "2KqmsQqARHh2Txy4oE5DPrnmvF2sTBbGiheMEHahrwi4CsuqH5JAbARYEPLNvuwZkHHRQM9MeEA5egmyxmx35cbF",
  "key40": "5Ub7h5x8qNkvwGB3JfaCCkFnGd5yQ5jkUkpjqmCfgzdeFYzBBH1ofJ2rygJ48oWsXSuqBbKBgRFqobHoMj3M5iQG"
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
