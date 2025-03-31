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
    "5HU3ZEovj3zkYcDY517RspKswhgukmRmXSk3pyhf24cCXwCuF38pGepXoPkKzQUmm8WJ9pAMVyeRdpYQvpQHNEXn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44mw6qYCPc3e8Vi3p7f5Hh6GuZ2hWEQa5dHRm5ys2qXHjimYKDoos7shCReQviXWpHy8CFiJQzzTwEvMkwhfLsWy",
  "key1": "3gVkd25ZFQQQrATcwVQMi3Lz7UeUW8dwbnneFT21bPAcKP2FnoEHB4MfSuX2wtGM1oiWb9N4TofPokkXyVKeJWJd",
  "key2": "VYg8GEkGqpu2XmFztvGeHLYHMTMNT9o1HneD285Ug1refhbC2adP4U4d2vMr9Wq4nUZBc9B8iqJvXUGKgeGuHw9",
  "key3": "5AKtQEPt9f57c5pxkhgU1Da7VEb6M4wSSbCV5k4LPxCoxE8BJN9zk3oaWzfYTsyEBzA5ndax8eX1qNeMv8DduYUY",
  "key4": "4Cu8XGRr3wuVdDHHbQxV5ZzV8D7RV218okZMoucYrZA8K7TRLA2APwJzZZSyCjGT6tw7TYWnAhTzUmQaFeCSju4n",
  "key5": "gLMiunmR6d4MvjY9JPRa4EHvuN4F7QPGE2wnCBqU9VevgyCiBvdkzwfGi6PoBF1VEx9D9C2FDBphKMEWXmLGfL3",
  "key6": "3rjgEBxYQ2NKEJ78LvSe9PgFtwfasz2JBL33qkGeKXFYj4qGaUrmfWeTjksBbb4bHaFxjrHetoGgTQNAovdbypSL",
  "key7": "X5XQsCLzVxGQQze27RGcSYfUGVo2KjLng6zrvhWRXJUMXXzMzgazufjghY1sKb5swYiB2iGz7QgbSLq2mpoodAP",
  "key8": "3kwGp5vokokvWNYpoV3J2JJALNcYMKs9BUFfqT3iCzAGsmu6W48iZFLdTJ92pYMSaQv2VLT5XrGK8L8PMAYajq6a",
  "key9": "5kJMdv5qX5QTRxAEkH6AxBH5CnTxwKXKPCZ96meFQ8AJQ93FYatFYDwhSTgd1uGmUitmU1B8DrRSDvoVuv2GEfgN",
  "key10": "5hzwL2pdD3Dxw4TGUw6gS3jpj8D5DAMnTvgUuMvPw7zzBmqkh36jeHWpmqaKFzAa3jJDy9U6mCCX4FvozoqUsnSw",
  "key11": "3TnNJNGWu4ubse2L1aVC4zroWBqqBqUqUcFv3CL6DjuWisHrEnRHZRoeqt41vYjiMBDABvHw3UcJo2EfmDo37fx1",
  "key12": "5NrCDDbQbJ7FgnVmQAqg6KBNnSA3fNcwX3haiXDREwR1jdHz6MrWpw8yFhabScapEXKoGFzrcNWVRgUCgiZ72kBG",
  "key13": "4X69UpoPXWF7SGbJrtTAqJ6fZJ8MfVboDhWkPtJzPMNBvSW7LGChXAXenCtpMuSFaV1r1yMbCKSVvFUE68FWLnvn",
  "key14": "3orrSRCeXSKdnd8GAp5ftXnBaXdSUqgeabZUeVe25EnJXmoZJh7xs7aKeUgh36EXZkSwFuA7NFcbJoG4Tbf6wu2F",
  "key15": "QdEf5Afy1LmztLtHXXpXEMvzXLXySmeFUBTvYV6tizXYxWoowaJkSd8Zmt9GRXcqtB9yEWuNRu2M2PfyqmhRmrg",
  "key16": "2znbzfLewoNQpMC7dZJg17gXUi83Su4jH1QX9uw6diKkrMwLi7VJaqzQQ1wxNKdwU8G5FmNXsUvz1zicckmc55Gt",
  "key17": "5k6k71juoi9sqXiSf71wgJ7QRwPgGN8hySzsJeRnD8XbCFmqia1NdXVT6qtYe4JKkYcPgxCcRd9vTQx1b8zhXzcs",
  "key18": "4gfpjLxu69Mym3PLYfhqBCkS3pH8CMtCSZeG9HBfe3W34B6QUaj6sRtiQtpwxadfZURFnXz4e3SfrUBZEGzdkiqM",
  "key19": "3Ey413KdfPMVvq2W5q4uVFvW4wsm175MAGBghMkSAffEF7juJ2ufz7NY8Jpp6oeT6gHrm5cfqk5wm2tvBGZNYMGH",
  "key20": "3b7zPP1o1SWE9GHP2XSTNRDrdAfFQXUdV7Q8VfGAmJ6yJr7WkdxxWFbTwMPFTSqwwFTUCoJnMjvhAZLPRaMPfGpW",
  "key21": "44PaMZaAArYssFu9XogAt6B5RUZroFxg3f6798FfdQy9oEEvaD4ABru11Hp6AhWVUSgVnPrRiGBjHMSQBUMmy7x8",
  "key22": "4oriSoTy4AatvvEJXEKA173hp14QesicjauJj3B5KVuKKD9aWmF2EKKpQJoxUwMeJMo3zfjBueCqJeooTsqovDbN",
  "key23": "46mhAdXrG45RBkYJmmjpQN4oJJsWN7oTpqXMkewqPjDvGfBeEC5RRzrtzpUsdHW9NknXjRdKqdqfbf1UvNhCS82q",
  "key24": "3K4bDj9LPGitjYjnU4SfpgKZccMmRDK3rSfNW4CDhJqqzHJkvV1JMckU8ktYt1KZMjCFNCbwEd9XNiDPguh4NZgp",
  "key25": "4ap2KUeTQgWf4onpxgNwoomFd1v384gdY2VPKTdJrHiRT5hW15qLsRLyHrBmF6aLoij8QwrmtzU65uo5BWbg1c3G",
  "key26": "5JGJtQjMMSD7g5b1w5PzDrb9aAPap2pAiqd2aKipfqYndF6gp1XcgXKvBiev9dMhmMj93ATP4U8K7K7xm6veY8rw",
  "key27": "3JV3m1h5YiPmWkF3GqPKUSn5afJQLtk69V9E8nwR7rFedLyyZpBGSWQLSZtQzcAHBGFUc3ncTkVRc49m4PzCPtQp",
  "key28": "5HA61gzjx1Y7kCAB4Q6o9By42Mjqnaji31bWTrf6EjLnV3D9ECaXEXnsUKvMBqgBK6BpW85K4i7paQE7XUJPdncX",
  "key29": "2JNNLnqS3WynnA3WYZbKWTAnXt4WGoWcpLd8NFF5t6k7tvgQU4PEraPnVH3e5MoecWY36eh6Z1eVqqusUzG6DLjB",
  "key30": "4STVt3rPvcBvJNkcwS8hm9hieTeNGj1CzM1Zi3YhW4kXchR7KqyASKH7ioiMa7B51c6Yf47MeiXTtR6sNjEnBhRT",
  "key31": "24Gf8Zc7osW1pg3LfxnqBtL2Qx9Fm1e5DDR6saaeugarQS6z1RArfniA4auGAEPqt4du4ndij4eveXQy1uGsmbTf",
  "key32": "4nqPZtCMnpuNAYhdb51S62E4jvAHyMCU6GB3STieR3eb4VYFzRMpTM6sVyChhHqs3pYXbKoZQx1ShKU3TLoHhsRv",
  "key33": "5iUMFh1HeTy57LBUpNp16uij3stwavs2B9hiBxA6Yrthd7Nw6kNHBow2vqkCPfcfvwnnnvZDLbzXGbLXeru64omy",
  "key34": "32NbNAjzN3TjFscaDLDkmiiQoEtwhKgRrGzroA55SRrEmzz7BTb1w1AZtsQSx75RvJuAu8gjpPDQtVuc9PobfgpL",
  "key35": "5VEfXu17ryDRA4SqsKdrnzBRMAovVBtP5AjEKR7YM2AsL4sEQMzqFr39F7Vt15dAzSFWhrwoLAX1wRWwKfXroXGi",
  "key36": "UyJF3zQq1MdtZCsc4Q3aVxfbeVuLnXBX3e2GVuScQK4wbBUBhvyjgqtUEVv7GzUWxcedBGJDwEiQZuPz1z2iHAg",
  "key37": "5mTvCTBF7TREAh9uXLaT645wmfPpHVQR9XTamvFaHds1ni5f6UAFmR7DPtC3e5cHPyY887WVGEoBqf2xraVrMXA3",
  "key38": "667Un5YPTjSiMMrzpf2ykf7HhwEv4vn3QKXXMBWYft3BwGRjzovqmNqcmGxHXEKp4RFWFK6giqfTMXeG9F3q35ZP",
  "key39": "4hCyUj4dnYdfiw7Wo8J8a8iNFm9xyJMDf4N8nkQCYbAdbYMkhHyszRThE5UjSGEMRgXcxUFAtyBZf5oF9XASdBMs"
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
