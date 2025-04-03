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
    "2eozpy6TpZ1EBJFPj7KbLgULYv98gNjtrsQnynbtaJbEM1PuyVRatLFS9sc89ZnAurYzZdZyAeXifD85kqqLFXR4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XHK58iQP38JhBdgUHqXV533J9Cqt4g7zesshzTGpNmWR8DLDuDiuEq3PZ6ddRU3CpBj6S5ZnWj7tci9U4XSt8Jr",
  "key1": "fBerptq1t8hL3vchnwi2TZPgyeTAJi9Ucr7dkGVAqWwM3XCxwhGTqtF1MNvEKNZ9hH5ow2wrEXFtQYP3sXosMyb",
  "key2": "4htsgBUDyaGgg3xeSTQEV94HbL7Nf4nBXii9sfyZZ1LQQ1qaw5XieDkYZfsoqjxqYFTreggAt3Wag7ARoHug8bV",
  "key3": "5LijhvhRXYyNiWE4kyhh7GNaNbTrbMxVRsbwR6Ufj3m8wU3RBoAcqTJSN3DkQRXvCZTTPf8VSNwpt74WGtNxXRLn",
  "key4": "2eoQ44vbmvXwXGBQBz7JaLdwQHFxS6RKvDwzufr6n7SQkkptq83HuAapFy3HKTM34GQKn8aiU6GZJu5DwoPcicHx",
  "key5": "2SwCHZj3sftUJeCJjyzuWnhDMQQF2TAyXgFU5RoM3j6gb6a3Ak2TaVEXGbq5T4NTR7cM2PZXowpzLx3UH8fqXnDt",
  "key6": "3La3QpBEWUQzuf2g5mVtErRwyeUtaVj6EBjJ6QAABRNQSoCG6JLLgceB17ntxULFcRt9vAVac2a6p3Sn7nTaDVvN",
  "key7": "219fEaX6UjTpa6yyNKvs9qVoB3EfZmVJUUwxkSRZz628Rsd2Gei29C2z3koYd3Uoen7EniLCJVeYz2yVd3NkE9Ln",
  "key8": "4Fa1rocRNHUESGb2kdNZJ6tvCJ3KndSKDsZsiB4qNbgPGdCJwukdtWGAyWxTivchkJkPnayJSjddVoV4WCXH9dEY",
  "key9": "2cdgpdTjyYQiz21mBe3g7JPVH1nmLXBrpXyvY4dGvRDGFHxYL4XdDfdu2vAct7bmrL4xqQQfxtk6ijbksg3gLxfX",
  "key10": "4tHXzDkpubVJVbCbxZXSRvirduQ5cPwGZiZw1jtE3LApLfDknnY1TgV5GVbPMy74JMfwWU5oo3nqgQufpFt4DjE4",
  "key11": "vxBiXLrg1XAy66u9Xtj8YhidfeHhRHCTYQ8pxdxnkp4WrYx8iKcCgd3KQ4Dc4HQXnoNBFuSi9YA5WyjkvsRG1KN",
  "key12": "52zC6L5ErMxwagMfo5kCXKmb3BK1uiCuJMhZk7ZTjcNjHWSqoANwn9VxMkoYMen8HrGVyT1Vrp3T4kEVonrxZrSx",
  "key13": "5opYj2AYsKnvuoqCWBomjxnNwC5TwrqZdfrLtUDpbs4WvK3kYFJU3x4ESqSBv36r7xm9Syn6cPsuzv2xsA2Tu3dR",
  "key14": "23HmS5RuTciuxyTkztP7HmSajTTkENZid2Q98s7P76TmXS7BWL5K3kyoJGZd7tqc3t6pturFWmnWJD8FzExU1DnF",
  "key15": "2c7KX9p9CbKpPnjLWiSyuFGrdqPLspNkB6Z1GJXTCmb89dfGcAFDzC1xEjkFVgFvAwcs9amFQTQs8LAzWtiSMgun",
  "key16": "2et8Hv36uHf1KCaTj2FvUHX8d8QiyHTYNsfw127KWu45VHEusnCqN5bQGa8wzkZGsDYCMdwFMxxXYxBbzB36etdn",
  "key17": "4r8RnNabFHyeZpfLgL4w7VuChseYefmcMXs42zNics3uXpRjWAgGNk1DrVyCWQrwAwWewhgFsdsf4qPHnthyvDKR",
  "key18": "2HSFFjkvcwZasjP1dH2c1nLjNEkvA59FuwsAjcy4A5yutNZL155nAErSoP2mr8KAEZ6snhshXUNjfBuEea8jrQdT",
  "key19": "2FNs5FjKSGRP1EastLfd1jyCMC3gTPzRbmL2PLfx9G3tn1pnVvzAXpm3tYmfcJDs2UjyJ34Bqkpusz69y8JQGurw",
  "key20": "2nLAAuMv43Wqek4KNsMQY6Cc6hi9aYe1WiLm4LRjsxNQ3fTDV8qtGNorc3K4BBbs47fjhKcfDEtEfZNXGE3Bg1oE",
  "key21": "2dGSimqkB2mUuL1rCPx5s53hRN9nE8oQ4xAyuEsNvoGPW8GXVrn9YueYj1ZtBAcJYto4ZyuJFo4YweUzaW7FvuMi",
  "key22": "Q4jMj4fUDH1QQmu8CNuVGJdvWnRaivcZXB1SrB71pcZeLnkVA4KvRWAyQdS2qneamfKGCCTKxHcQuiMJceH56dq",
  "key23": "5Ds616mmVxA8kTvPLywE5u92vQH8iMVJ68JBXDwUKWQSCqpb7Q1WK58jKKwGznHBYNKigAgBaCVJv6CpEn2LK8P8",
  "key24": "42MNrS1ELWYxQpaJgEvscEGtDP9YDekVg6u12gpee4cVTfsmysTaXdUoiAzN7Hb5tZt7FyqQL4cK3pWt6G3j9QvS",
  "key25": "4sFBq8Cm85gCAPoZDi2kehim8Z4VUAihYmQAYeMYLjZ9dmf2Mi1jRdFuym9zguCPzRiKKvEwxuVY1SzRrJnuZ4ZU",
  "key26": "5dLVkvv8SiRdtznRgcMqdeF8ToxNzeN9PVFVkJqJS2e18A93sf52UUhR9UmWLDHjmTLi7tD8vmTaeWxQXs5Gg5ks",
  "key27": "2cV7UQ7HJjhK21bi5AReKQYu8HH6UK6KXKzvuz2WrcyxJTDJKPRy1YtfN5cMhwh96PHC95a8teiPxWvWd5YYgCyu",
  "key28": "64LT1a9mbB7GusuFTHxnoLdbrmrPfPtwCoh9BYhXFLpme1cJqYaxCqp8663KB8Pyg6Ybh9GYJSEe8o6gu91hyece",
  "key29": "3jqQRnZB9fqq1aqbDcPhMgj2ykMnbXYJNcDE6WYhg32fxSc2TtaL5R1rWNhKkxGEgMWmBntHF9dwQoakFyUtLKkC",
  "key30": "3KrEttYcX6KbEYwb6M2hqFVRc9mAt774AaAvWpn8G3sZZQz4c9usbeuYvvQXJ4qyrNDz9fQQTCyg7otKSsycD1gC",
  "key31": "5KMbRcMP2MgGprE4YdkQkncabor6EJH8AFEhgT7isxStNG2aceuZCj3aMftmf36Vj1LLiqHS5vGSZL5cgPUwtsxa",
  "key32": "5wuFev9J8TgVMd826LQmuR8GKrAZeGgYMs7EAzg41oRkwFmEAZB9b6QBK5h5xaDSpJXtLBaaRjFDKMJSbNcwRFsd",
  "key33": "hFnXKb1fsDXwZSZStKusoPBRuF7FCX4o7Cwi8RwwjEGrXfFt11KiWSZGNdLS462o96eNkrC7m4bXnfXzCv4e8UX",
  "key34": "3PygwAkrze5eaHUXHHPJNPrurmGSz32g5KF4YgbYXLbWobZjdYVRB321d8nacxMSauXEkwPEP7B313nVdCyBdaFq",
  "key35": "5os9hAXJE4rmnF7kGjd911JKP53dNycTNFTxZ3AMWkFf4hY6K2tv7RhMeJaaegVjxvmor3A22TqHTN53ECdMSpBH",
  "key36": "5MQZNNnXZLdUqbyfirU1d7ahvn6goufA2ravGTGdvg5LsCygnDvUNrhKw4753SfLBVSfKU4GEzuafnnt1fXEYJjv",
  "key37": "2LNwSmT5EgRutW5SVf13NRE9HjQkqwHA5oeqryc7sKJ7k56ejGEhgSQuF7Rf948ET9opsTskJAw3dWDVShyKCnW4",
  "key38": "2DrRt2GzvfQaJyiTDJ3A2mGX1Eho1U5r1784m8b1YEuwbMEnccBGUVZMaim8w6NxeKUUxMzEVffwAG7eqri11E9i",
  "key39": "5BBCbhiW7KCrtMNMq6CgbY7RrdTvBFJCoVjr6PPz6p72zndRQhUMvNAtKqPJmmqq73nuBcq2MtU1c5CqKQYPwEVi",
  "key40": "gWqmtugFwXBy5KZU3CEFGbprZs72MDE4enC9DF5gp7Q9hSqZ3BNAC5EBYsUk1k3tH8QitRpdz8Hf4g7xe2MakHv",
  "key41": "4Cs1vA2ZPxE715t46LcPK5iSKXHMVCqoLpLihZEvfC3Xd6uiMRKPR1oroe4GEtLNxqrXdcifzEF7GWNBuR66oZpH",
  "key42": "3WsNEa5hQpjsbgJAix5jpQeB2RuNsF4dujkZB9gnkUbwzFrNU36jhL4YXoEq9m4GSVKfCWzVJupcKAqrHZarALV3",
  "key43": "3TRHMYqfKXfGFVov7Dkr1vPGocTfLzsPpQv48YWR98XzDppj9xSWXJW7ULH2Gsnsx4yhiUuCYdVQjZozi3SH1PBz",
  "key44": "5yv1U81VmsyRBYFAEFxAsxeSn3cS4cPuA9647Y3B46Jc4kWjinRQFzMfLx5iAzXBWeyeuoHafNEVdNRJpKoPhYBc"
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
