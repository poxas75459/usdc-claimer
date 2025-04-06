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
    "4qzkMK1SebRT8E2qmV2SAfnDYJwNSpgScK2STKdwJRZ17t1zsiPFt4fkZd1Woh77hRuz71UwAK7LZNoNo5WGLQsZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NTyQGYFs7ZniSwA9DBcZM7qNWsmzAn7Xt3h6uYx3h8HGZvaVn6YPkxdQzp6HpZBzAcJcQDnK4X3i3tB9GyeFy7R",
  "key1": "3owQcD7xxsLiNGm7WCPJ3Nj943cSVDNTSr2suXH4yuuBAa8a4nza44mkNaGu2NYHdvhfr9NkrE71Ki44DVQTCqZk",
  "key2": "2M6rmS5AaKVP2UzXC2gdYcSoADfTK8Wg9cEEM5JmutsH9aoFqKjrdVJ9r4pXy7Uw2FeTrPezH1tm3fRvkk8U1z6u",
  "key3": "6QA6EkJRAG3WkSB2oy56UEWo3rjmpYvuaahhRhXt12JHumw8pEgGeDGDkbU2BXPT826jJLqgfgVkFU3eBtT1bmR",
  "key4": "2AZyd82AenT4Tab2R1HRr4EeWfyPqwU5guehT6BuGo5NCn6nxS6QT3Z5qpJJrPwyZqp8kieXcSC9cV8m59V4L9kg",
  "key5": "4ax647K2jSL6z9yeizJqeZNTZ47eeNv5aMwULd24eTDefFtUJnLBXQvfDtVKUpCnWuuBXetPNjq8w8BYREX6HALZ",
  "key6": "2TB7vfHBZu9Q2cFEApM3CpxApuekbCQkboTiB1HcFusp7YdxczqMeyyjRqq93XGYf4gdfHJiDgw8B7t6aAXAbSGp",
  "key7": "3ywvt5CG5Nt3ySrqD3hqKZ2b2ARquN182SZdNeNLbVrEeyK1NUkwpf6hMtgJDgpKyMsa5FiQGSEZAdo75NmoNNFs",
  "key8": "5nrD1oxvuHeNrguBp2MiowCkPJzA8vBnsY8QXLpV2MnDn5o1a3GiXZCBoKMDKw6EHYrC2L8bdwcj9kTnUGuCePX1",
  "key9": "2dgb4S3UJfdjTTftG36UQ1V7siTWWfSTgbXNS6GVbbCNWWQcreXLJQMbLgmnCLp2Dc4VJHiQBbWREsWvju6FQF7U",
  "key10": "2utVqyAcD3y3fuscAm33xodnz45T7K9NGfUvNVwrCsoNd8Tciz2kczoAKtWzpgyA8zC8TGxuh7urTutfH6GUrQga",
  "key11": "2pfZa6afzXEq4kQkky6ths56meA4yjEFAYiK25bkf8hd7zpscLg1D6UzHDEVSeX62DTpo8JCbmbv2Xetw73c32KT",
  "key12": "3cbY4kaF4VXstGX2QN9zjFmVHTobvfPHJdci72zv19JSNWbp6U13qYsndGtqTD7ovEveoCCqNvJCuMqovTnwVjS9",
  "key13": "5kWo2fwY5gztCscWcXfmg3BGvFtY24nMMYDaaetm4nXzgrqGaQjymi1bMY7ASgDwoj6ZyKWX8SaHBjBfq6mkhEqg",
  "key14": "4oCGRTBRKCDLRAJjLRXrnBCsdzVozTKHjpswfhzqVL83p9whvydGoJoMRPGiY2zB8MwTFpsWnXuui3iwKAh39DTm",
  "key15": "2pF2taYcVFogA1YHpCnWuFTzEyGb3Y6LuvMJx8YSjpLWhVVeGkqGU5Xydu2aNDG2nnuQiJwuH63YcjqyX38CgHSi",
  "key16": "346qxkiorFAXbSZ62v2U343emZJf23uewvap2WcrEzBeHaXDowXyqxcS1tpndEyFGFVzwxncA5rdNcT83pz4v4QD",
  "key17": "5T3KiEFi1S8ikrNd7mfR8SJrapgqNTuVPQcf72mCXhFCKy8h9o1fvz876QmHHrhY7k9PRejs5HMrnTzTQjgRNQmL",
  "key18": "qicQfeLBvua47PH9Cf7Zw8XLdPSzBfUvSufnG4EL7GDT9CRhmtBgfDwPhxhKmoppgirH1t4ubuidZUki3Fjbvs6",
  "key19": "4hfJ11HfTBsjKPDGKbV3Y7mj9LTsjzJiuKgWT7odqp12HYtopJDcmgzdCix7kPW6Dt6Wc3nsV2HxCZ11hF1j2du9",
  "key20": "2eFedcxNEcUnSWa4LFKPacaB75i8oewvfuC9ucTdofRogaK7uAXtXq9EmdUig6qReMGeTovjYUANybg7RVd26P8Y",
  "key21": "2xA695Yp3TNp9DZXEnZdNwPbejPbqiRAVPTfYaGEYsGHd98SKG47iW5J9UE2gxaW2LAUyENTTTkVw1yQ4AdZtMEV",
  "key22": "24b5cXQGA4dbtBjoX2Z7gMGwidVYQ6MvS9Ag8yU9L49rMohkAGusQfVuoNpdazuR54KP6YA7Vhd9vnj9PGaKvuoU",
  "key23": "373YKv1aK17ifjBfGdwXQHTeunmj8eBD34WkdVbZWZTszegJMHwXZSJg9cEtvYkMCZAKhNhu3ZSmBPRTKdQJea6K",
  "key24": "471e3WrVwwGsmKDj5ucXmqqtkeg16rQWMnDCwxr3STdLfCHJkC5Gi4J5Ang71j6TuXT2p21YZBB32rjjxgbirjvN",
  "key25": "5cjFnDfksjXtVCekULJ2rXFUMcVyUaiKXifF7PZYyFCfTeKqGRUHF7c5BhxSUKzRPcpZUBN23ACMMaCMUWK9hTg6",
  "key26": "2JanEv9s7w8dL7g5TdfPSQAdc2ZnGQkeAboM9M7H1AUPTtBuzsmA3ZQ7kKToEZ5bWqdU27B3YtwBhiiEzLTcjdJf",
  "key27": "VyWCMYqabZZ1Pmy2EUmpA1esuTcyMfw1ELy5dHFrL8CKiCjzdwGWAz6Qq3kwTktroPsafuEx6R84zKLYPnngpSW",
  "key28": "2vCMf2yHqzwyhzPoPFLTinTnnjs7ZJCGgcb3R4DNBwfmkeiNkTw2TsQB5FwyNSvre8CK6NxTXSZBKxrfFV8f5kLm",
  "key29": "2WGdwjoCrNWnwmpUCt1xcJDL3APvnshhG8uZ1jHiLNUkU2TGXQdatvLzWQgBueEaLx6Gnkw2SsRcehNiLG3bmxPA"
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
