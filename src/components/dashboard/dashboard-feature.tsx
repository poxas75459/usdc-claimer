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
    "5Gh2BUgdDXsWqXPK6VTjFGYzkidLSgJHgQwemtN8xw4wczWrzo6wEGbFftboPkGEnkthc4aHxTXu7EVN35FwCjtY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "274nDv5JPcQwycv4Zziw9mViYFr2htK6eyP1UDbJZu8NdLX4TZJMWJdXeecH1vRvLX6n2d2WRfDnxFwu72iJzFy2",
  "key1": "5RPneYPR3ey2sDnSSxnJbG4RNN6RUyw2gp2gD9wdaqhxbnqMx9USNb2rPqTAgHX8red3uNLRY72DDARUYhArHkoQ",
  "key2": "Wstiak8NdSzXunufQ1GbbZJLaJhFApRvyj3LPyYUnxQdxKFUf5sdFzAaaamUE46YmzY9MdHpWRUuQNcEffLYf2U",
  "key3": "234q6gfJ9GBhu1vB3MckN7brbtfADVtAPZj9sWSQP83ycj5PJoAb5cobetbvYUfSYSRwZqGUU3FZuen6GkEN2uQr",
  "key4": "5jw6GPi4ksAVeYPV31DWtuSVgQSwsgKtGaEbysYAZ4PmqwXurRs69wstN7TSQDQZsWLtcYBGp5skoJvYAh1rDYp5",
  "key5": "4gwT2UH6oz9hKFKtyjXwAwXbLwPcLHUsXbrcrs7wa4VVPbQz57oLvdjEs9XR998Sk8dQLXoQQ5aASaGzh8vjYCu3",
  "key6": "2ZroEa693rAQ5FBUoeGZDjdywUzc8m28m9umsEu5sJJRxSUvhLAcYZrY79hf1tBDo6GLCFdCB1ExaupV52okDFsK",
  "key7": "4QFkfmpH1VjJ3BYmVw84a8HbAvMGG1uVdDvvVkAcEGcCNHePJFbZ6n1UjRZvtBRry9SoMJrviE8zAcQdAKBx2rSJ",
  "key8": "3461r7azRXero3wsEn7tqvqL685UgGvAv91aai5zuZJHgxZkUkzHdufhLzqoZcFwsmvLAbwnc4jGLbSamF5vxaje",
  "key9": "5Rgx5fcFbs2PHsYJeCnd3mqfSyY59EZKd8Fy3J9VWQARxqf7ASrPpqV2jtFoMmfVowjr85nhSyirtm9LsuSuyK26",
  "key10": "iujtSjQXgaL3X1oRwwpDq1KVZmniTes5xGY2Nh7ty1k4vjue4Yt2LnFCEdX7z5aZrXWn11H5EBgWJ93cpQKoKLd",
  "key11": "3vDbBFi5JKUdz4p2sUSqjHMvv5uo7JmzoCfhnUswFzejH5XiVr9AuHqMAtBBFM8D7GRr1SQ4qDSkYxNEnkxRU3z1",
  "key12": "2FRZADAMUrezgFfNA6eBDnMxbNLXzmf14413zgDefUU34jPSLtZxeZ8LQSvZs7g8RUaqNNFXspPCyqVqK5KsZGEz",
  "key13": "5AgY2SetzPBKSrieLrTqLnUpfgt1MqHXwYm3HAYUGrk3Vo4DR9CoJ8a7ychqaDnBGBikk9bwNXd8mPf5wCMeoqss",
  "key14": "2Ks54ssy51AXVY4hL6JabJmE2P26g37fWcGcCL6sUBb9aUvbaEhQfREiVLphicrgQY5zkoSsVqcZ4su389Zucdbd",
  "key15": "neQw89s8vTsABQe2ewZVbAbkNxL15WsrTrhrAVurxRpdUvzD4zVn98DdpZB8oyjhX8yL7UsbiB4kcnccYPfYDMY",
  "key16": "3pzTzw5vrq5tH1tqrqT4JAKNt7tHimne3wYNsJa6TmKrZLmv2oPaGVVdELb1XFZbvSAMkdr7iPFY9WX1wGkLdbTU",
  "key17": "mjiQiwQ4ofw8kVGfVBsnPMGjZQcMdg2Kdh89pufQhtPNMXxD8Myiv2GYHcXL474VNoz7dpfEoSZSk27B6hks3DY",
  "key18": "583FjPd5YBepvP8nNuJtnYT3T6XpFQqBaGGsPbViaHdnjhWJLPchUjrz33uqk3Fa9RBf5oZi4Fz583FTGLMuRxv5",
  "key19": "5QisVFNAwuDPkRrFZ6z33DwxmBQTEcL935PrbJ9FGVg5tosP64FmKHWB31uSXJTF82mdtr1xFkeqoNYrXmifKfGB",
  "key20": "3moNPBrPdWnXzATVW69yJvwduVHtYSGBjRZecUsZQnwc691FRA6q7fBASceFfhr9XT3UERFtuda6J7iaXpvS1Kks",
  "key21": "2gSUWVHcrjvyiFfkrthxpdBJFXN1jDsD4aZ3NduZmEPR4JcDgskKY5654QJBwmZ3DZrFCjc2xtbA6qDV28F5ZWb6",
  "key22": "CKM5VVV7T9p5mmVbyGaqpbGa1tgLs3YHSwWwzgMc4yW8tNDTwt9aj6NKkmu6XmCKYrcX3NHEs6Xywr2tB9CBz8p",
  "key23": "uKPtRFxWD5WFpC53DTx8LRP7fs66aEjUC12FVMD7Xo6xZnvWUneB99p56opZ2shRngyF5duTqhH8ofR3U54wVWU",
  "key24": "3nDkBiYD3rk3W12y9QoM2JHRS5BdFCTjrJmnrxeJxr8x5hZeE7j1e9bLtmqpqYKULjsMo5FrtFYivdZgCayh5L2h",
  "key25": "4oScF9LKZ9yEckZmPFK27vStbqvgVv65nZ4t1bVZoEQTyZp1KVT11ocmXrRYVWa1k7RXHJiSmfhJ76MUWZAuiifM",
  "key26": "2LBLpMyjT3cyDk3jCPXdiswCTvtbGqqVd6HUqQY28ENByTgbqS63JdtUjtL9Puq4g9rXuo5D4MvsEfFBBNhEvNpY",
  "key27": "5QGbzsNwMvSyJ9LHCknyzwxtEiRvp8czCMsze5uR5w22mNJ74EVuSA9q4uy2v8Ei42VPw7aBbdfg1Y2AJXhTYGT2",
  "key28": "5UbJ7AH7ZGpVC9criN43mZLtePQLpToEacUcZNMu6x6L6wpGYLdVRn56NaY3o13RbdswDtgMfaM8gvLgbCBJPdgU",
  "key29": "2cPCdFMF5m49kECe4WArV6watjmHZJLAXXu6R1JG3Jki7xU4iuCRsMwPNPjyZTfF8WoaJWHSGmB97xKcxpbAVSjg",
  "key30": "4e5LU3ERe19TWvb686SHX2xmsHQA1ZVNSuXMuHArVrifYuNvYPPpLmAJ8FCbwtG973eWEm6453PuwakdXHpzo9rV",
  "key31": "4mMwhuJ4rHYrEE5GwMBNHtnABjLc1cVkanJLHFe98SBQjVKvvAUifLofyqeV5p7VE6UWnoW22gN8mQiPpU2TsYS8",
  "key32": "fFvgPAB1u9gtgZnqG8h2tBF1zcYmkYW5eyuQVVkZ4yHWhUrpv2WKbu7zd3J31XND3r6NfSxnt6hV94UQwRa7P7X",
  "key33": "5cQsFn1VP89TfWL3DgNLU56b8iCNztukAKkcHPK6sMywtRE9RC4tuGFtLYSJrFb9YQs5hizVU6j7VSX34G7u2eQ2",
  "key34": "5L1QS4S2EtujA7MUNg7TbdyLLcUZiu2xzjnZb7umU5Eu6PvgkZmnuzFTEBo7EKwT3DpF5TyV2qAUvuPMgu2ENJce",
  "key35": "4omkntSrZ2nQQUXNYReMuiuoytYRjfKkct8GjzJRbUsqtCVwALim8mfTbvkJQLpueeoNYR5KzHJoUQkToCNREtMP",
  "key36": "4XGuKGGBoVb9VCLWfEp42hLwHq1oqwXFEDA9ZLJyZGTFLmdcWP8L3YJfhCBpFGXoVe7qrQVSMR2fde1yjhqQAeu3",
  "key37": "2byyZQbTvGbyWqiYLwb3aNfuBwqs2zMjoWSuhcUCMoyRGctynTG8saGGU7H49FQGMA6Y25tft9mNMqSpQDcnyq8s",
  "key38": "2apCdatzGND8LSFmuD1g8ta94hPkwXLcYfvfWCbEJfpdyA8kNd7Rd1c2fuoYN1c3LVZd8TeYXSSBaooTagZAXQ9r",
  "key39": "3FgmHiez9djz4EAobZo79MMjtdtCz57axiFhXaaJCjRHaUyWPuSpXhyCJpzfSGpGRcS8P3Nu75ddLP4aqKMhgfGm"
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
