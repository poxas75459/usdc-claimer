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
    "5MQ71rCFyvTsCa9WTBapbXPYR7vKB39QCJ3zMJik3p2WJZAR21B593qmqnxJEmn5C3pPQxiA5jaVYdwhuDBFsZs9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jspWtrsSG7Dv4KMvBw7Pfcn5YK3aVbPAjGbzzuoz88fUbchRNvNQH59eJWme1NZAFEQkxbv2qahp8g8XDZWZrng",
  "key1": "4RugbPEFwyWdEgzNxDQ3YrxTy5myMYtYmCiGKEjixQHeyjevxj5TeBJ9bJsJo8QruxP1Uu1fMgihZLhRe35Dr8T5",
  "key2": "3uxLQMcHk6EKN1N7p885YJMEfdFBKi6HJsvQQevYgWAVj3cWvCwRFx4Fu3xw5so6nBKEudP9811dVt75KKUovTMy",
  "key3": "zivXwz9Q8LAgW6QdFebnexYH5hxq9wNy4hzmeRgJLn3uwUQSyCE534cz53MtrJuYTAX4sbFk66iuG7ueQokJ7Ks",
  "key4": "3jM1yijJTdXWdQjPujQZMpAKARGCJfsJSC8KWoV965Eh7snPnYMq9MHPAyxpcfY1D563eHK23rz1kimhay8t9aNU",
  "key5": "459tVS7iPc5dzb1t9ov976sCXaZ5Jd7rmzQ5jZW91YKw5cp4HHeo85Akcy2HHR3k7qmA4exfjk4tQLVvX1mRWfvU",
  "key6": "5ZRAkjo9eLUzmJAGUVu4TTethaDJnWZhA4asuUBHRA3uNU5GdEepKMLLuSgMXMywGAeftS5rPeKeRn1mdmbHN4Wt",
  "key7": "3LnkLg5KoLnjWoMNzTHdbPB4FoNmiEwVnkSyiy2YeJhe49kpxpCgRK62df2WhtdmM6hoPjvskHgREbFMY8n5Xk7h",
  "key8": "3PrcYR2HzMQtHAfG8q1iQFDEycaZYp1voJmX2mEs5R6GVVbEZiSw9LXxqMaARv8CeTmvpmnwY3mzHmPrhZc5PcSq",
  "key9": "3aLGrYCN3KnkssU4vaxZNPqrWrbB5nySCDjVaSER7Zxd3SD2nJQgpBvaZqYQwpGEyf7hgsHfsE9R7ZduvvTMZTds",
  "key10": "2tmqVhH3gwNtiHCjjbge3TbwcuPSjwN4pkQAaEWuW1WM9FC1ipR9za7gdNJtNKBSysbYho8evQxHwrhoUjkSqGmM",
  "key11": "2Tc7SXxKLwZgA8Mo8tnxmQkE7yMgtoWhC114PQASXuPgqA9ok55wprK2PK3yQ6zZhTgaxDB2yJFMFW3Yo7G7FMdE",
  "key12": "2JHv5x2Ua2JmquTDwDvEkVdHhNe5WqkhS3ryUNmNW7tNY9WifVPPFk1kwckQkdHK75YJwZtAgdHrMnAUC2Byz9H4",
  "key13": "5LiC2z2v4pKkeHnGH1eAcGMCnpokjZZ7LxUBhrkGTG2mZdiiNwyMcz79ryeBZ9urha7UujfmjgiFNN31d4gag6T4",
  "key14": "ZjB5o2ynqwQi2DkeMtrcLP8by4PDdGFMgAwZkYTMS1t6PvfLxynKnrX7zr7C18fPYCsQUxRzPoNSdMpRMyEeVCt",
  "key15": "27u5hrFRTW3ibFJKrQ443ThmPnDxe1spPXkhxiv5YFZnoPXspA9H1QjhG1PhJaCnS33xHaPi6TfK9yb6BtWRagoU",
  "key16": "3wQ5sTvmCemo8ho9NgM9E2qxfZMYuCpW2QtTobXKvwkW3ARnHwwLkarJCkHB34NCGncxFNNaTyuWZ1pPAvoVrog9",
  "key17": "4g2mmH6mcUoBekYps3UNSkacDpFuMCLdxPhbLehTdcmPsYWxPZNZSvCDAiYTZkHzvmMWxBXaZ7iGxCEw81Ae1VTn",
  "key18": "j6iT89yw1iq4jc4uGaYhxXuhjM4kYSH2ELpJaZB9s8t7x2bbZZ2WKtcQGGW82J1sRtcgpwiqsPmbUP5YeCbnAem",
  "key19": "e7i6EhtfYgmtxSJ2RwQyX1fgnA3DdcC8ZPWHA8fkQKozFhhJ15gAoqLMsJauEwA3sB94G6idba8n4vuy7GQrwf2",
  "key20": "4PF694yVTbEW68rfto77bQfZx77qbG9eDCfuxqXD736CuKqCTLGPqdTnS1XjXHyBsLs3gRKXm5VPyLdpvR79MW2r",
  "key21": "4XtTE8ob1kX3fd1oGQbcwXsGHXHgvHe21PUt1bZMdr439jLQCZoWiQmGGJJohY82ojxntmnd5qTHtfXpXdsHxvY5",
  "key22": "21ic4zmQD7aSbbtwjzRQjU6mJd5usCMaW6frKehh2gvYFpaWHmqFXWsaBsboFeKAQEipkgdRPKe4xMYxUQnBgEma",
  "key23": "3B3WU4a3Ta1mU9J1KeZeHntLpET3G1kjD3iNRuWxTS2VkjBiC7ojXFgtWA8v57Lg2VwywoLGSEcSrYrtqoJ9ABPs",
  "key24": "34bL8r5MTSjKv4osnKbSdchAckbV6u1dwV5gsykH5VaQbGdiKJ5DyesWCSQ6qR56WR5crUGegKrYz3SwN1oUwWtL",
  "key25": "5Xhgep3TXqYDqoCf8M4i1s3UrJRnHsCyAW2cbviMX1dRRSXQnYaovcUrBfCa39kqTh8r1uPtwBQpSZW7hKhY5RoL",
  "key26": "4xUdTvtaBMBM826u1sjAgJZHjxVaEYsgMrYNPd8RZDyB37nyVfSQnvqdjgDs22PP65cGNnSU9sAA43n1AUgtgVuY",
  "key27": "2k3nwr5QRcfHT3z1tUAPqaidyiB2BQf99dexowxdpjKW3w8ba3dnm3S4vdDoA4ESRkPE93nSVQHzPPbeCUvQvDfS",
  "key28": "2nJDyYyCwLRzwywwBMN3o8DpZZyKSsKKcsr46iqHxhXSrZTV5uSjZ4Xsuz8fdU3bHHyMXPr8mQnDCxyivJFDUopy",
  "key29": "5jeqSFNvfhoNTFfMVyVqQ9mETZA89Vxnxm3tXMj2nDN8wdiWDUz7uzMx4ysuBGRs1NDuQLedBTCrVcDz9BNBDhyP",
  "key30": "52k16nhyH5udvfKpmiPG2LDEE7y2TLMryZSbkAbxkPqKy1B4K4NVfmFYHYmFQF8Yid1MX4K49tzAw2nQtaNbcUwH",
  "key31": "2x1StPXfk5sexmhhQvbUt3drGSGpkk2VpDXNTZEiwdyjvhaBQ91R5QroF3mDvXSZLbPMhWnZmqxmg41jrbHFvwTx",
  "key32": "4tTfJ4BFXBPwGytsj8RkiFbzwfeFrS9CrgUuRJnHbdpVi87ak1CQZauSbCiijFyMzdxG8tDATAC9avH6qqQ3EE6D",
  "key33": "5VThGYpRBYiH13wuVenCWnmaEcivTvihQXhdW3UW3mTqhpwBtEw74GWtpko12aWmwMWw8d2kjoGemkqNbwuTm6fB",
  "key34": "MAJiMSeG8hvAgstJRoVkdtDnnVnHwmtMZvmjerA2hd91LvYprobmGegDiS7c2Hd1Z3UwYCBfuiLJo45b4RoRhTx",
  "key35": "cZnNZPPrm19KsrYh14AKfeYpdH21DRZX7464D97tZUVGkDSjVA6WoVizPbF7QtiFW5Qca751PhKRT5GoPE6pTnH",
  "key36": "cyQEzAbDhV9syHYz4DacULACMooqmPXb99RrLK8r13LgxT2qQ6mRD3oqrEuDhNekygF77qHwdPQ3Hszo2HerHeo",
  "key37": "5xyjRr2KTvaxQywiBBEspmKCdchTTwA1dnxXhZiLvaXMS2Cwa7DANgNQCA7KUEAnNokB3toMWLBPn3pWobn6iTDK",
  "key38": "5BFYVhfRfEZ1Czwmyn5qn5dmjwoNHGgJ4CUccH4jAQdD7YovDmEQYGFMVGNKNcofUYDYUuiNyzynNxWYpKUJHmCQ",
  "key39": "S4BbV1zPJmSxHSuVVi89gTE3iUN8jGChKL6G1wNp7uAzXb9fuNSEBviYpFFxP7GZTZDLSShS2jgyxVdUHBaF5dj",
  "key40": "38z8htqe9xgzCr4Nn5Zme9Ta89SkRhpR1w6UYdFuDgSuKNCNPnhVBBLi354nGoNL3AdmLDAZFtXEaZxz1hHSBXcY",
  "key41": "zToaqUxRpDX2Tto1D19mnwzFx3K5qGaNSqfvg241EmKw9qDfTrRLymrdvwnMhwHvGxk97xW69ymhhB2TqpnsM1g",
  "key42": "5cE7jWKMoAqJ49mMSpZ5R83CjZN5wP3viPsCg6mhuuYvirYo2g4GfJfWZ5fN4xi9M8D5KbAANKTq1dSi7MbroV1p",
  "key43": "3CbRL4FfJmVXR8v3smigX1fkW2yNn1gpxobxt3QsT4Kd4qx6u3oyKTumR1rEXg9WEtmuBZfEJt21XTCmY1gcpuPU",
  "key44": "3XPShEg5WjWoZz6KT544VRbGXeHQLpa6QKg8of6H7C3sv2SZSHhVGUDtrrymjYvwepjbKW1mi1mWZgyyZpcZWA7p",
  "key45": "3tT43aVKkcCAhsnHz8pYPmHC1EzLFLFemuNFsVJzqtSd4e3yJCvMUc9pzwBKRwFBk2chK77JsNPAQtNa98RWUNHo",
  "key46": "4hLaKbWPkP6JYcohjRDk3apGaeagmtozpAvWVrLZX7PBzUDxQ2Szuf2VznFdbBF9sARW2dy6fX5p6h1NktT5zhZ5",
  "key47": "RTYqpewF7ZCrMzXL1cZEbSgs4qhhTrtrwrn4NtrVhnsFHzidFAKr1rTuduHive3hmDvKaRSBox4tHeT4Rp1KM1F"
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
