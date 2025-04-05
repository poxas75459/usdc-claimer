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
    "5LtEX5SJwjwSJBkboAy8bwM8zfvLkgR3BZU8kmzUL7GpPwJQFhzYnizsipgp4BEwTpd3q8siZwkWkaFfvTpnGHhR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "666bkW6U1hSZfSBxiKChSe6Ae432URHnJntzN8itNuYFTjUJNkmbG2H9kaEBbXT1NAhM56Rfmr2exLyfL35wit6s",
  "key1": "57N5eWaaMXwNTJDvihxEtgq2bAXM6rZNNRM5K6zDz8R96vj7cGodcCCkQJ5AVyLGVdnb3TKjQrrjVqSuov7S9Zqg",
  "key2": "4hyR3HrPksYKKB3GNE7T5ymvoacQ1w1kugGmXp6BaTh83cFRdRLobjsBMZPg3DvKBz6meZUGfq7Edc2MvLe68c1W",
  "key3": "5g6ZqDwTuTZwcRWtVvKGtAHTgXHq5cSRRVwsuQ5u4xeczz8zaQXFPMRyCbSbTiM7iMNAuHVbQ79RK2AokNVu2Mx6",
  "key4": "59He7V7i8fn4oHfegSQiha8u1fU9jvSWQQxn79KQtbcNRq9D6tcG8WawWZNuFD5PALAJLf3raWQ4fE86sWT3M5X5",
  "key5": "2apBke98FHENNpKMvf2EDFFypMqW8gwjxo6z1GsqanbGDtp2ZxHp8iKmbCPq6iqwjwHnaRrYUibmyN2fSuwE6NKs",
  "key6": "2b3gjrUPaQPbqzkL36zHStmKmKo6CH9pfEio29sD4FrPSGv8CmLBaftqrxRLyrVUFVuarYJtwqF4MfPqZCrgZuoU",
  "key7": "4j7TJp5BD3jnJ2tvKSvM5q4dMiUB8vdYNpELnxrAoCK7kFmwd2obFC3TvsXwLu1ai9QV7hGKjduoagZqzzivKrjF",
  "key8": "oUijUtRLSP2rWyBZ8vsYtidviNUCRZdBP6Rj7APqKAZpGyA87eGDcisQWZapB9JXsqe4fxkR3uM7zBJGnLpXzzs",
  "key9": "5xHkvDE8dsxShP5iSMbZ3jEKVWXZBEgVndUym8ka98MaPZ68Sn3uj59Qe9qj154MFXxdxcb9ADU1SMK44Z11eAU7",
  "key10": "46HJGaKsC2kyjFKS9LCCxQyrpNrGDYgfWEr4QMzgYS3EWzgwSEQpmi2ezr7C1rmqz7srFCapJMut95uYZuBuQsHM",
  "key11": "5HD4qQPiLzpf7HzfvFpZWuXAiJ9wNj5QJAhZJnSQHT7McNXuzzVzQ7i3EoJWmWKMsyxRn34ZEheh4AvuUS2QrAFe",
  "key12": "2N49PSRxdMLnko1VPZtYztwDYkZCpzkXkPWhVB9bwkN5LBfuUPXiiizUBmV1XibGMtN1etP1xDUmkG5zzisgvfVd",
  "key13": "aaLEHg7C299SLPAQVUohcFR7rSCfNqZrmioSweNjdWuBkgj2pFPoJTiWeGqB9LmnJ22vYHtbgxB2xmSCuQiWAD6",
  "key14": "2GQ6kBoRjRR885z5ZCW6AEzyd1nEeM9zwyZx1Fg2952tDGBpnZoQuqzYy9K61jMjrg4wfpjq8VcojgjiLq19Xgoc",
  "key15": "53XBTNiTpH1vpTiGCjQd8E6QUPc7meAJuToWGWyRTus6ow8U6Pg6JhrNoB4L9Mvzfo1qdsEfQsESE7NUqRgxX2Aq",
  "key16": "4rZ8TNhYdGHmkyj1hjPK9zDuucWKegkrsAk7CQgBEHNv2aXvgUzGLLMQSCwEwrJbmMxPA5C9bAMWi3B3yuRfggTh",
  "key17": "3xsWQHnRy1ncHpTuYh6nXUzGUhsw6mAsDX8XbSqRGyDTZzJHKqiqDfYPBB9JCXxF9jdfAMtGr4uPx62Bu1dNtj37",
  "key18": "46yA8gdxpRRGnyGKJxssLjpmVFcPoaJ3kLdbZVujkaWGh1Lg76nDmbEhRWrx3XxEhZJsi62TGjpH99menEXT1AXP",
  "key19": "2uCcun3SFwTrEeYwjK41mtB9CJyNCJRMqJEXr7LBuns1DxaxKmKyPyq8JEFh3WzXZqVVeQfzLu9Ui9hTTKwGbZkv",
  "key20": "4Upq4Q8QQw6hyv1KTPo5PFdJhzAt4mc5u7DT8LAyyirGwayMLDMMCzPP6gdhzsb9eYdBwba8Z3QkW6NEmqMtHftH",
  "key21": "41zAfAdReurtt3XCpxdmy2u2Ymjkj6XBbrC9Kcewg6QcwuUM9rRGaG8dCM6PX66VVQwtKWKtnK7YSqiArgxpFTQV",
  "key22": "4giy52EvcBStz48TWBe9PyeZWouDpK34tPoPUhKEXkhdroFtCDXVAoJREUt9XvEThFCARkGXWxYC6NjUS8bG2Qz8",
  "key23": "3CSAUFYHWabZQHt2crhn4tvZgnWTQk3s2scD2RVkU981bezEyunuG6BsM3qQtdQpm2qBXx6BfphASyKd1QbpKjhF",
  "key24": "4kVwduSr6LjEoU6XyRPJDKTgaVugMqJJs568aaEv1X6AmJ8duH392D8DW4RjJL62PqeFkqm3QpZPsX76wCvaCJP6",
  "key25": "3E54sns3N8d1ypbguRv3x7ScsBC4j18MXHnRKv74GxwKZ9x2Boh749aLeQsjtfhhuNuMipr7f1DaF5ndFqug2egr",
  "key26": "kgGzsDPAXsgcCPb3JnxH8nBurrMccbq3fxCJNVXiSL8ksdkaGEj1jZKgspGsCWhmMCJM8pYz4so1nejXPC1fvUd",
  "key27": "4gzYBXXbLg7uNxedU5dJVE1T54NTLpYansV7aaQjDRrW4vRU3GYDxr9z5ESBfQi3X4UEbXq3FWopNV4wAkgu3iZJ",
  "key28": "4z9UpxTsdKLM6LQW8ukWWMGGvz5idjUpx25uGNtjd1vYwTUiKeXisQzb24wRGjp1yAng18u2iK7kNc3QTNTob77K",
  "key29": "5rAZU9mJoE3rW8F22Z1igZsX7Z3ryp89po1w6XAV4yoRENkxBzPBTAzLC8vb3M78r3ZjgfvjfYBLCb6kZtA55D98",
  "key30": "3RaDQkcdLn53utt58tXGxcmwGtRTnC4FVDbifMCtfwJ9DLwZb86LybYN6nuxgn5KfJj5r5Lw55MSZxUzhX15M82F",
  "key31": "511c1YvPJ3uA9srhvxLjqzKmC1o94wLPzsVAQP5guSBcdFJUehpDvHg9nj2xBskTdrBD3zRGjeGmaetbTBFNjpBo",
  "key32": "Sx8zBi72JTdLzPequyLCBTUG1frGYBYfQr5qBjQ3Ev8q9bTxJDpdrZPduvYrpLq9JX5U9Qn8YeLhYUh1ZAsrDeA",
  "key33": "5NjPVieDRtAoCqVKCQzQXh8cdMmAGq9xLtJoESSWdUybNgpAi655WQxVTqJypSYN9te4Jbbu7K2UXSKt1ezuXF9",
  "key34": "6JYZ2GXm9KotuV4xgaJzDrAdwuUjGkVXtrYviSsJmApyC6mHU2QEQd3DFmKQyrQay2uukcovPnR5nKsvoyQkXP1",
  "key35": "3MRQnHKu4MeKDkpXSLLPeEcu2cPNC9d7RG4ZMj4yV7iH9trpWyLNMfGKhUD3gA6p9imXFPPFQoCtqUVqexUjvcxz",
  "key36": "2fTxWg1dZWQ7ZzGVTKuPvLARqDUPb9heiSY8YUkbZ5Au2uEnwxqPkydhe4g7fsDZPu6ppGwGF1k5bDxeAg9UqsHc",
  "key37": "4c1NzHuXJBBLcRo1XFG6vCCH3bkQqC2ALHdSUNGroYnuFpprfBs8QH5iguEAjCJFHLkieN5493Pwqk7kCVMEou23",
  "key38": "5to6orjHxZFKfqweK6VByLvfxqdTfrHNgY9CG4gdV5nkNorME7CHWxqUCaWYAguYmz7GTZQRgizQ3MZgx1N3KuUo",
  "key39": "66yz8ndCYAhC6vsCnHUozMxBsqBKaMFT78YpbyRm1yWd9J9HBh1KW5YJULR3UWkaezuExzNwKJ84natJDuDtkKWo",
  "key40": "4GGYuV1mfPcpUiDrmvWYpYoTWXqtacBehtssFgjhBFBtu633cZtjt4483ajWwHh7iryPZMEa1yVSciCJ3WU14iuL"
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
