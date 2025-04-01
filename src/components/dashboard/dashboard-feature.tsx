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
    "mKwFFnt4DibwUE543wxCZj4D6TQbUR22DnMJ26DW3PAAuusYSrCz8ZD5Rjaq6jTerqQBeC4vzEivjSpKqyKGUV8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xr9YWGTfcyi3apAqeTKhFEZU5Kn8qj1mCFYDnofF3P9prCJjQTfKETe4LP1TTmyMGCxtuTwZ19EJL7sqYMgXCTG",
  "key1": "44wDrLE8AyTU1z5kbuHzZ5rTgH4e41xkpT24kfJPBwPW1ynQyYZrNHCX4hVorNdU1zcFhPMUfsHuWrsJ4UF63Rg2",
  "key2": "4AyPuhUQopiBE6CZCbdCg1uUkXnz1X25hutiirxpjkSLWZQtLUtfDdAtCLRpqjCTV6Gmetsw3m17YFYHd4pbBnCD",
  "key3": "4wNVkWuM5Pf7Uqwxgz5oQgBW7BNuBoRnNKxXHf465UkdTgujUzNnB2vFH4fef7DUNrBfso1KdKEfPjTNavuyYRTX",
  "key4": "sCDncbovycPjzV7RSLJtsURi4AgadKE8XXeXkj3EXLgiQzzvBBGxFLsqdM26QcGBgxoicJJBzKnNXj4Md42hoRk",
  "key5": "3WwDbFUFaCBVUaAgLBbQ9odEfY812gm6yHFJ8q2PqTBUK8h4SJdBjA6FYRBgVeqXjXtjdPrFVpttjsuxcpn7MVtS",
  "key6": "2tAPnrYXUnxjQGYiXLzhh9gUxEPu5YghLXjbf18Z3D7SzUyiwUsmkcpzZGiZAgC2C7R3C3C3QrNkG1fwhLKtErHd",
  "key7": "2LFzNTRvo66ami6ekAe9ZVLufnJDFmMQH55PrRSRbeAKYjGfYVXYmPD2ramWgUNXxGD426Kek4CgHkEUmBjHWQo4",
  "key8": "c8Q4AXeqoySa8DXZWgApokxqBAx3mm1FkAUkSE8BAR8h2Hh6ikx3QBVk7epVFwbRyJPvepqw7fp9N1qtvsmWiix",
  "key9": "4MoNDmRqsrUrJBcEwLiC9rNk9tm9dcRBBgBhfCbVVrKo6diwJvifXz1cK1fxFiSTE3uLuY3uNU2dfcQDziCr7t66",
  "key10": "Vu63Wi4dccUCwacohnHDekKezrMqdXJeb4FepydRFMm4nwQw5D7FwJPfGnhG4n8wHMaTG5He5StBbKPRQb5ZQaC",
  "key11": "2dEL3sx7A5PTtiUrD9ZJJ25uT6HWnWBB5vdyrFPFBBKTHv1v5ekzftytbrLvbhbZEoDceyQq2UfArfVwqZj4daGh",
  "key12": "4kJpk4TLrfmU2H5SgGrCEdypSk2JnGKnFD4iMP78o87nivTfnRVd1GvzQooWTwxuBBoctQfAz4tPuk5zUFvR815T",
  "key13": "24wJeDgDfjxS876AM453NhhjC1FuxGXDxxCwCjGCJNttZPcZLmmnhsCuSep33kGDUHXxBz6r7ucVd38qHxEroER9",
  "key14": "aCXWWHzAShZJGjhTXZ9LxXL2cmmeyPSeb4kWV7aYe84qvQpHU7jYGh3Zfp7senfFJLjTtshdroosJrziaSLMWZo",
  "key15": "3NFducja4sqNHbFE9LLP4eCSA3wcxfTaMWPiqj5kK8wqgAr6X2nUy967aDb7dVofwm5hJCiawigXqVQD1sR3Uk5b",
  "key16": "dfj2YY9KFaHyeAK2fjYvzZACksuyB1ZJ7DzdsZq4Cyxdwkgu7JkuEf6o9nZZoxDf15PnypKyNazhaxWjFWvVbnh",
  "key17": "5mpPDBZTV9Jjz5rJoo5VX35bjZbkv5ipN4GY7uz6A2Qw1VQw9us5SS6xhjHaSLT4j5isdx4KMESRV2EqeDJfMsye",
  "key18": "u4VPEqNMvUqmRtahYuKPchTBNcvgKscBpJKPH9nFos37oD5rFEFCHbp6HhxYBqsdPMu8VuQAHk6GBLzDTG2s2Ys",
  "key19": "mW62sqYSszn1LaPwXWZBybwbGeG1Lss7EskeAS8gJt65rNhn9K7cZvT226JcNRh5XgskDcV3VuXzcBVJNk94xtG",
  "key20": "T1kJaJvvEJ9nhXiw5Qp38cARAPDZ5c7C44iUYg6TJwyjoi8hCDuJgzwsMtVb1VkmnaMyzXHpQSsY9QUuUZTJFcU",
  "key21": "2D2EakWxZdFDLVpDeFQPdbsv3XCjsWzAGWyhW8pprc1ovNrK2tCaK9NUdAFNGfVjJJrwZEMyHL2anSBs795fjXn5",
  "key22": "4VeCzk9KcoTgyKv1bqkTarYSRF5f6aeBciDgShbALHsZvLxsiAj7MYSZebUHpKDWZjtQqJBcY8g8VteTWhHM7pPd",
  "key23": "6qTPJXpg2D3J5ZFqGTJobZy3RcUaCXkwUMgJ6u8twdLvW2rx3MmLdhCrhzYJYQDmjfqZmur1Gv3wPSSSVdgYype",
  "key24": "4hqLiXs3n6NEbGLmwUYFiQVzuBfnSrKX38VsDm7oWCSLzuRMXT4A5wzuSvt8rWDth1KTmkwDphibkYfAYFTtL97M",
  "key25": "2YKhEyTWbERd4AsRWLpP6e1iaFF5g8LAewBUqmjzMjQBYUxor1mw3iws4HqytVkRYY2puGgGynKydsTBt4cJhPw4",
  "key26": "3FrG4ThzKwyunDEeve6uCxnDRjAnCram3kHZKMgnzKS6RPY73MKBhGVuMwPoZLc8piyBfmNKxpRmmH2aNb32Cfpu",
  "key27": "4uc2JSXP1SXZED41hrEcG19TUu8B9nCECzyZqoYU6W9fYaJ7ZEUZTMExbUeSi7gzvKmw5M7wTzGUywp2iaPRxF1A",
  "key28": "4KW3LMccRg7YHGyML3CVjyihwJHssCUEo7KaGq2KHEurMFXigFxTYZjmNiXPGeNQGomBkykJnuxXmkJAtxF1qodq",
  "key29": "zfA18Xw3aeBTQDBJgAQ1ZdJ48WnvYvwLPK7WXeVvPzgMCFj1kSQcH1JmLTghAo4pnoRBs1rPLXTkQKXsTvNAd9b",
  "key30": "Thd2PqLiUwDU995mfpUbSJNcXpDxYMU7ED2swtYusHL3fAJwxpeKyFLn1GE1jQX5q1cs2sZhhd9Vw1ymLjPaXif",
  "key31": "5w3vbw1ESrkgbPZrgT41gDqxVEYsxCHR2zeLD7bVAsM8fhattEijHLBy9WZZMrqk7xA5TKt1DpztiK61VqfMxqSX",
  "key32": "5nXvAGuyvbENFbPoNnfV8GGTifk4EoNbT9reqVbEkvsrbdwoc64hoHkUMtqTrDa6b3JnNrwVqLxs5J9aBXT5Ga4Z",
  "key33": "2eCTqEtL5C8QH2bATaKUz1mubTQE9ka4czxANaDagWUfjm8nieHNfjQETewkYiEL5MG5NpZsSEy1fPv1LyfrKxFt",
  "key34": "3xD5BADixdgaxjtNoeom1uDxc5sLJxn4k8WxZNPgPu149NuiHdWqUjsh88VuLqUiPhmaopkP5yvx63Akz768qvRx",
  "key35": "66Wg13iLcg3ch2MRe6zc89VNQxFUu6cgi8mtXUL3TWa8jwSTHFEYq45dNoWh67sZWa9ohJix79iytvC3mXzDv45f",
  "key36": "2oyQitoeSY8ZTL3k63rmsMNiTcEVaUHpjBkDcwZ9iZLh7PSfrnb29ojcMo3t1G9LMC7wMuTTHYP1PR8xJR8ABdHu",
  "key37": "miw4Qx4JeSKMpUusS1sibMAPvqn5SuatMwb1ukE1dd3h9wgHFzAtyVGqhXYeNtpE6fP5Ynkb9JXhbPQ9PwAZddJ",
  "key38": "2J9eJCh65rXXpcwaGTafXgSC3GkCmmMiviDE78KE4x5o2QSJuQ1gXtaWytUqoJgwMtNvW1ZcRs2gH8RcV1NmTZud",
  "key39": "5a1rnjz69D2J79FRQTvYeNC4Fmvnajyd1xcz5bpN1yPzQ7S8KG3iwPqiTx1HJyLGLHWAsJHwgURzENDfPkxFAaod",
  "key40": "2qHd4Dr1xRDNNREvuHt5GAiTagoXdV8kq3Wk2hS41zCpNWDMeE11AzoRCoZNi6nN4e2uTWYNULsCN26BytvQigyH"
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
