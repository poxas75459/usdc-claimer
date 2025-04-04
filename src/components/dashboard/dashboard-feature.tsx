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
    "4yRdb93eAA5cMsGdvggLvYngW9Xn3JXGBXKHXXJ5E8sSHRZmcjbvPoDZp7XHWj9vVRxhc517KbKhrrxi2qhZjqbu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mNPna5e9a3P8fZcDkzzmhDuWF7zqUr1XuB4sRPbPCMKiiduTbV3a89mjy9e3jw2PeP7tPQTZ971dQ4idCQdfASv",
  "key1": "4rqdBBEaxZoxB9TvDTs4DUCkbdUV3W44vS6V74eYDtMyWbDwSjRNzL78etC3DUMS5YpsUT7F6neNZfADeKR9QkAW",
  "key2": "4B5NaGBqcGJ8UxNJ8PRxKzGEz8Lk2jEkK74HHhTYoxzqZURA56bGyMQ3DUhuSHFr49g4XbzsR4NBSKxBv45eysnw",
  "key3": "pywa1s4NCVj4kuiFpxDLbwkcPMt5MhT9UF5QchhM6yAiNedT1ES96d8TBvczUUz6cSUzGxVgWTHTFrEW5MztEqJ",
  "key4": "3iArXtZSkgwF7Va8VTM9yWFkPg82iaqcDEifN3KCL4hf1u518TQo1vY1jzkwBo5Tw7Zqprue74eJCzZvr9nxCNiZ",
  "key5": "57SfDe2GqCk9Y9rdCj4cvyMkPMWAEzLWDhsbvpX3J5eZJaAwbLwt7G99U5Gn3vUpSbNCRpDHgfeWEbkyfgKVEjn1",
  "key6": "3CxgervAtH1NKwWSrZM71te8CvBaja3wGH8yNTFNE1hEPD8fQjk3ZeP65N9zNdy7UGoPZ1H81Fkxbc7mdW2F8FCu",
  "key7": "3J2K8hru2KNYEZykLkHBLNoY1Ftibb2zGvMyxcXU1YGoc2mXCVfJfn6ivtpUjGLWMmSmR4J4SFcob1h5Lu4v3yGK",
  "key8": "5QjgfKYNZKqGBfanfqbkiggwv6CJ8FfQnSVZyd4xTCb2cQ2AUAD9mwZKeCDLqigDBA57cDzTP7BvzD7yk8rNs2VN",
  "key9": "2oj7njrHe1GjtMkkJm2a9gko3YbKWsQtKoQTxYpeHUfmgkGmpjmh297CzXwsoNRbdv1MWd5HoXr78et9dJHyjgeh",
  "key10": "5fFkjDjY7A9VVxd7ZBbo7Cju7hfScjph1PRqceBE7yMkMENgsuUFUtnsoFTxJwvg2xetiYHFPqGmcDttN1j1euum",
  "key11": "n4FcKDpfmsFAWPGnRNRAfqHFGkhJgsfJLT95cgG6kY3GQfGkfxNUGY1c7HoZTgVqMWN3sUqbpqeqbWWvkjtDAwE",
  "key12": "46HmoSFdzN3gJuRUkzPxokHsVzgsfQTdQchWLfG9uzS3CMyoDFt1LcosPjbpoiTkyb31JaEsVLNeewEmML3SwxhL",
  "key13": "z4Q6Ko7FKqfJ9wLqFaBRQ1iFQEni2uSuwqcgrEt7XVgW9QCd5c1FvND3hf5EMLX62ypXpZJGqV32DwTTCHrWxG8",
  "key14": "42UVmKFME27cwrBPnpxuhmPPaQevuyNwqPacoHDHnmyupo6dhWBxasFb7at67wPNURPtV52qz9R1AzG5Ffe3jGHF",
  "key15": "KJ8KQmWNqi6VbCYNdoyRkSJ3vReDGVxAFudpUnMR5XWVMxSUv3wb3DH97nxRMMoC6jYNhjDDH5YNnuF7acCo6pW",
  "key16": "3pRE4FLnzmLUapiDYZxW2iA4x24LfLTVkCqZh9fResoWDy8tb3LFwBfK5xjUJ9ETt38XQhC5aj3iueUfbAMAN7go",
  "key17": "FFpnXFbMY9KZw9uY4mPYrkE9tBXjqtnoryicaThfWo8qCxjjzfqMn15EwvK63j1UQMquZwE5u6gzHzipYuUh3HB",
  "key18": "53ty2xCHH5qaZLgASBs3Kt5MguzAgFVaJ1Rhdf6pU6bhJDz7Y6t5oWpRDR1C1aLVntQ7WUC2bUgeXKumh94c5pzW",
  "key19": "e2DSDEpgrMMRdwBheddqiyXUK4ztxDhP8N2zB9LBuRkBVWXwLksMTRQQUWWVdLX7r5eVmNiKF1ZA3Yi141n7f8x",
  "key20": "3MPLBuqFDz6ALR7ka5H3qaJXrvmRZDcq6cB1ChsiRjzLxjFvzPxJk7kCP4EmdoxohhSMp2XJ5gEca1iKKmPEDK3V",
  "key21": "6oCMcZkpF7dfE36M1oVxFAodgcPfLxZ4KcAofKyNn3ksj12zj4u7kVJdgqGeYW1QQpcF3Y44Xmxb339das5a9pi",
  "key22": "9vt846mctoanUXs9BERxvkAXJKzrh7h3iwgezvv3fquze4Qzu4jvRM6xTro556Z7XhD9K4xUYFz2Y35Ms6C3tW2",
  "key23": "5Ytw2npobM2CDXsmkUK3ts44FQqo2xssgjbh26JVQUkAA9CKEAsJvHh3yZ8j56WydnMXkxrmRgRxv2m9a81km7rZ",
  "key24": "uLowfVrYj56cunDgGgYgbUnGAau8ZxRDry89VtgvHSTMccsURjQkfuoysiMorwiTmKmQVYZy8qa1DKucCqFdRQz",
  "key25": "5fu6DecGhZ1vWDizA5EH6DkwVdh33bSxEpyw4DuFG24sydw4xnWcGw8q5shPiTpUimnSZ4q28xbDroS52rZy7ecZ",
  "key26": "3rAx1WhYgxdXTiAPQgKe7jwWoh3jyVGKsF5X7jxwAUFV2uvuA9bngadP6SB2TynG3CACxkA559grD7yr22Jtjvxc",
  "key27": "5B7gnLtAV5my72e3b19fPAdJNFgU6e6yxk1KHrQMMKF9HFRDAZySTAytYXE4FR9P2ZDrdtBUGH3HxPUqFJBJKyfw",
  "key28": "3ivFg84Ys2KV7KCSWKjk8nGLvx21u4Fcb1YYTsMXyTA3sUa5BM83ZfxBWFcTfBFhdiJKeC8FebZeMV4kzxCHohqi",
  "key29": "29veJ8eWANRo93XumJ43KjvEg6FiyNgpAtYj5ZtQUaxJiYsQBPbtHN2r8CuoEP9Giww8vtqXRqx5M8xa9uf8m7LK",
  "key30": "5ykKdRiJmmz29Fy9k19ot7nr4Ct4Fxi2J1Q4pbWCbZCtidhAJt44uZY8Tz5a3TokjMUn561wWWC2CtdXfttbTYPn"
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
