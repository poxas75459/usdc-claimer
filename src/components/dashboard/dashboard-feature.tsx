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
    "3vWhUVkgCRHjo8AZ6TN3vznLv8jjj8M5Y7fT9VnhvoeN3FuxjDbLQ66f929AwKAhZunaTxXB4MfJXPEEMvBwxGCy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22WtQzYvJdvpKKCftvRUTt67vajzgaC1ptE5e4DwtBJx5wxQVtY39s7m9GjqQQYQiMJNZknGaTtZFAwemDnEHWxU",
  "key1": "yyXJd4392PyP96Wfh7rFsEX9PuyVSrWoJWxNrXkUh9Zk2wjSP6adXPe1XYYitRLUTB2DRAtiejJ3c3rGLDjVSxE",
  "key2": "5BkuUGD7EYqgmH4ufTfKx6DzTF2qrk4zyPNgwRGZ2KtYkdmVZ3VcRmij78koLmmuyHdYjC5VDXocQzysUZseoioE",
  "key3": "5yW4ChSbFr2duGiYjqVgjevne7sbPndWmkZkFHtTdBDHpjjYFnB22m6EKXU5PjXicfzQocUo3AcStrbj8pSEXNXu",
  "key4": "3hSam6suJQnXAKtXuQvDU8kmn2JMJJLjx9BYPcjoLMwdfLePtSWrEhDuwNzCUC9rVEMqLfBZ7MGsPsb8aKr8yek6",
  "key5": "5CVcSXMV1zr8xjJo8E8udDjfchGfhQxkHvSPSdKbevi2PbLsgbocsYSe4XTRzigDZR2o5iAi4xn7gGEwm4kR67LV",
  "key6": "2S841voBVSm5r5pKU3i85U51RcFtHt5sJRKQNn1DD5L37tXhPM9w4dCsNcM5MsZnsniBPdawXFE7ch2mNFo6BZP2",
  "key7": "nrLSdWnBmHumDStb6S7DQUvzPqCEGDUaEPvaiKQWMfnsZzWvvEQty8U594SgR5rsAakDqKtCuRPetDVKr9hm95T",
  "key8": "3mpfdh4x78ZpxU5e1b1eSmZMEtKy8RzCffpoTH3bdtjBkMhgaEKizumq2wqUjaLSLuzG3EAHsEN8KeaqxqZn2NaR",
  "key9": "4iht5wWLBMfWxKqQtc2tG4Q4KaKMYckCvbEZz5XmoHvDwJtv8ZemQ1SxHUURAniH8ggVdakLeNHRa6iq6vh7eSt4",
  "key10": "2Tv5EQ1fbhHi1qxkJSgNm87FWbZxUesyzFMeEMYqSNxoRsgNpGKdgPmGFGG3CGMF8hRvdyXkAsB7j2MaqvuBcCHa",
  "key11": "3A9bMQG4BQ4n3fPzz7m9CT3LpWwG5cCRVZjeECLEh35VRpwureTRa7sqayh5LQhwurV7YPRHxZ1EWUtD6UqQcYfB",
  "key12": "35AuJRhTZyuS5Mfek3MLFqFAufwEWKFn2kBL4onMe5NRa84nRcgCbnnk3Wc14hMLgtENKipkgpkQ3k71w5ppoEU1",
  "key13": "3SFvj8eRPdeAAtPEnd4xdvqGcCioxtBuZ3do8vuiH2a5MTQGnZEEvHMkVSKZuaZSyYnGsdFmDx3aNikdrnJwmPQv",
  "key14": "4n2UXaAgtts9Hgy6BFMNcTmFZF5kWKfMyAJB8ckTb7STpQpzNAzo6aV1rxxgHjt3EyA95qthaLqhpNa7qq4Yevg6",
  "key15": "2VMJA1ottE3sF9LVW8Qk6nwVQPFj1fAf1TYuZ93a2sryd5F7r59xp6buGRzcD7BeksTQWMpjynFoHHw5JqmVbJKq",
  "key16": "4LC5Qx52oUhaxY7FJT435jK7jnxNh75UMah3akH1FGouD7htangq6QtuvP9cEjZ4zxqQg4UwDr4ZqWX8h4FtyvdL",
  "key17": "43koht8uuv7FB9r9Ts187TphEp1B1ZtuegRhK7kQqh7eEPX8H3EMjaq28xwoqAwGnCms7MSmu62bQTmh7AZMoSrS",
  "key18": "2mnhT2nW7N5hKg3L9nTbT71VpERgxbQWehDShxb38HCzaFjgyiteEkWfUHzpbio24mPmsvLB37k1QkzcrFiirqnK",
  "key19": "5SRdiQ3sL9rEjHc2QpSRu9oFi5Q1VKUTcGSw2Ucd2ze6u8xxgd73bt3cnpGi8m6RTJ7kyp3Krrwnu3p6kSe2GHCU",
  "key20": "5ya7xnGzP8qnndaYGgPUtAWYRuRxi6xRwyF3hE8UKYCt2arKxHDyBM1jinA66cKN2rxLau4WNC49muFX76evgVEL",
  "key21": "4iTaba6mdNGVZwBLyaKipZqSM4z2sHtkfTuw3Fc4n8Rb5KDaBUiEpjkUPHVTAwXYgzeRTLaMhzvJcCzmYNvtz4ch",
  "key22": "2g4csGWZHbcDB7nWrLxTb9h6eZnFGYHwFzJqUnXHHurGa2jhD8u2BW4ZCDYq4rwuBEhkNKBdcn2aBUJhxFpjjvM1",
  "key23": "2YKaMmmhke8W5bU2Bii39VXHzewayMASc1Rn7N1SVEPUE6poWcbqLATELRQ2Js1E7Cw4YdTYgpCBJ5czAq6B7UcK",
  "key24": "3dpQYzmAnyCRnSuvm41kMZpju5uNLbk5aFXUServS7x3pUZykSptRXR6qQwuVAGCXngEMn44ziFDGqhxG1PNPaJC",
  "key25": "2V7u3fbSNu7sj2Tb7JcScAr5RPCvy1ZCk9ymceUf8wMiGtm3VTmbbuXipaPo1v3nVNXCwFZn73X5vJ4HcCATZrqn",
  "key26": "3W3LqvqGancpByMdscAcWvU8Q7aKRuAaMkuiLKZDk1jx1uKEJNvmpjNhwKg7tsEB5nvPnHnCkZfdmPhZntTnEBQ",
  "key27": "5KGu6yz8suMwb4tFaniK8zY5rMkMU2EsyZzRTeTwggqm4uZUuPJBZ2avUP5BjdJDAgearmicyVdfBRLxiVV6W67A",
  "key28": "GuvjKGCQg1GTRBe5pNS5gXTy2yNUJKkqYbCYRfW342Eg8zffdqqRc1hpCgH2cUyF8cz2Gc8HPaZKiCHTu8ik9CH",
  "key29": "3aRMx7M4jNPSXn58xwQgnsedbm4KpuTDo3jFL64NE7iGaZogiHf6QUaFtuzHvfvpZNUdihA8yUW61KLTXVcUoT7V",
  "key30": "28LCxRJTsr33PHurswNAptm7s3ejXQmQKrpYwN7x7P5Cib9WMuhMweiSHkFFfrGK3Cym88Zcd4MpQB8ptKxTcR1w",
  "key31": "4E8FawsiMxWu7WoCi3ACq5Acit879SvXpfKQP5mkGsAX63xmBxJ3RsV4eYKmpcP9McAhSX2qGYnvoTTZxUGANJe7",
  "key32": "2RnqiWH3eNNp2s9m3KHsHFgFzZQN8w4V7nos4dMKiqFSyAg91qrBssGejSPfiKY84d9MNH2AA8fXKKn81eFSxYvc",
  "key33": "4DADUShN1LUm4XimUdLjAqxN4FA7n9LbFqYj5HMo89Bw9ewHXy92CpXRmF1WqTzg6dC385HSoqKwb3GQNNMSxy6N",
  "key34": "3CZ9hSz96wVrgA8uy6wBi7HcF1yrysz3sfSu9FFn7JP7qX7kvp566MvY67ehV7qomGgpe2RdzvXQLGKx5KWH1t7a",
  "key35": "iBA7rsvPiZMhuiy4xfow4TZJ4QazvPfTNYucqU4NJmqULv4rwkDvwVSW741JixmQEpwTYuTCf4RHPeLWKMYt1nU",
  "key36": "2QZ8EyHqxBxpDd5mMZzCtht2cjxgkhAeijTWHripZvKr8PNBZNXXBhk2Jcskvv1j9ZTD6dYGPcEufX79pWY7fBiy",
  "key37": "4H3SzrtkArFL3ZJ6xc3Sp4WznoqvLhTkB9ULQs9cWV5L51PHiYwqmqmnDvaSNo2Mo9zZS2mi6UkpAczPdAcmrUn2",
  "key38": "2ALoMjb32av8ou4RmXdK8m1DV4waPQBFF6jiRvv4qKTvLuEP5Jw1ShRFgRDH11FCch7KepUSaq6nFdXnwgc73r68",
  "key39": "4wWnAwtwu8w3cjLfYCDA1n627DgAUPeirtd6EhpjViwhyqJWTJkJYWewWyDkHRcj8eTwVxUCu2ei5TS6pv7LN9zj",
  "key40": "4bm5YFWdPYtj3zZHhSeiJjK3ffz2KBqUXt5z6pEdWwz2HqMCSbVxpvMimSw7JAiDkvPn7yDWmvBSqLRLJDYC6vLN",
  "key41": "9cz4Bnr7gpdqB89s5kMozAs3aD9T3tDSchYyCzgsDWb5LSQynZf79tyiSgp4FDtWq3nRe7JwdSJdSVuSdPg47VG",
  "key42": "4JQHSzrSTE4BdkCZBNaNHLCetribmnH47y5VzzzPFySDPCWeLk88oM5Frj868LTpfX2ToFzVPXHZVH4qaLpr27dW",
  "key43": "yVk3q2M211oXdgckqQWke1V8t3pryhJyV3WL8ebXsnPBG2nmaspZXyQJd7q1zpgkraaYDfroK66HrXXY1rDVm3j",
  "key44": "qHxKQmUGPLLzAbWcrbL9FwGBoRquF9yRJV3XfxRjctgCFSaxsJgg2kyfUf1nW7okSKEYvULBAgV1oHefkzW4pTU",
  "key45": "59Gs1ZKQiXBqVGAVZFMNXfqDJtHEmP1GPeSdc82xQ4J1viGpQ1VmUy8oXTykfy22y1mRKNNUNYcJ5VeBj3jAR2Sf",
  "key46": "3c7fmq7ejKjSa24GPWSSQxxprc2savy8G17tTCe6sxq7tf6oTbp8L8M6jbhRaYPaMW2CvBTzXENHacKrKbpAiRo3"
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
