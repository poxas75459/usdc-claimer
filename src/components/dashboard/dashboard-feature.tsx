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
    "53NiqPAqq5RNneNWhq7ZdMR9mxvj77DeQkxbNemvYX64dD3nUFMfSuRm8Zx2neKsrTTwebhVttGo3mmkq8Y89Uhc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Ce23gcyHck5NEHWzsRhjwmL73NPdUz4dt7733LpQAYZbLhJ2fch1K3DDiyk8QCBAvZcC9QeiPBw7xHh3269oLRN",
  "key1": "5S4M4srsQT2SFy7RasNZxNHsza95x4XBx8rKTFh4EXfFfTrHAWUwVMuk4T73E6PpjgVPpkhBFf3zxxZCPx4cm3P8",
  "key2": "39DM6y1ht1GoCqyZ7y3UgbQfYm6JregVPnPyJWRcCvbJnHAyVVJuVe9RjKmpfAW2s24PbQRkE9Pstcr4gv9G9EMj",
  "key3": "3CH3XNZmThUP7Pr8mzxdR1dXtWQtUqDTymFPFXy9Mx79MviN1gAQUpKNZpxPT4TmsULGq4cirBynfLd3mdNWtd7U",
  "key4": "2ifZFJ2cUhkG6w25JemsYH9Lkvn7iNFcQ7pTzmkrkjQK1t1d3wTcc2RFe61uos4YxZRnbT2Wn9eq9ji6F3bFRokm",
  "key5": "4T12MKW1KXU6LzzA9Y1QzjZXYXogbjMAnfP1cKxyTVc5QKBdNHUSxsv6cp79AanUWNepSqAFLF1dA12o4FggBGEq",
  "key6": "qyBVRLk6gqDYjCfRFWZ8shz23sJwHm1xQfvbrf7anAnZjhZundL4Af4XD7bvjDK2YBmRfTeqJNLrcmzTeAvWWGW",
  "key7": "3QbyfmYqBp9Z8ak29cYGqVYuBaW39v5C5EAGzjhBGYUs3nxZvrWUk5A7MrLJmpaQ4UhMUQEpX87hB4AznQacHXXA",
  "key8": "33QNKM3aBy5MAq3DPBGkHeUp9pTq7AFW9HfdpinMDKswanv4iXFZirm6gNeVKbgkJNmUuXyW17HDGnHhWxKqT75W",
  "key9": "2NV73Jnp1EWEv1XWoZLccHVXkHyZASC8E1VNGpJH7pzHYj5YGAxSAKQtbbWABYvoEoMQnmrwXV8L9yEMvSqkr88i",
  "key10": "5zqogamuoRDmragnWV8hVVJySYA1ZnSdbY1cU5LAUEKMJUNAFS7qvrNE4PBfgpAUftJfcx87Cyqd3sh8VtMTVBD2",
  "key11": "ti9oarijdbdYP7jLMs5hJ94yycAgznSJkFyHjyACx6biYYEn4YCmyU5vPEQc5eTpjotDbocu2QMbmCwTBCgi35g",
  "key12": "2uXTAdkbbBxF5eiTC9rM8yByi64ReDPkJvQ5zEGBkcoenwu2742uBubKX2q3BWG1v3Qz3nMga42oC4R9xxGJBTBB",
  "key13": "3nfBvwsDm1deNGakpZ1Ldx75vAGXFHwSQi8v2kvx95qvwf86oR3sVhUNVW5zvs1Zj8W46AW1KRizc7DHegoKmnf9",
  "key14": "45D61iQHhFj57hhCNeQ41o2WXE8opCjXeSLXPH6zT2ARjoHhKo6FamrdqCtQiuWmSshYhccqP9oJcnrL4riey5Xh",
  "key15": "2LuSoMktDREVPnZR7ADvyuMPZcgspXW8xjL8KuUjgcH9eA99nU56EnS6cPYBgBWoerbDCmCAemvsjettV27ji73t",
  "key16": "4iXBcU6hRjpA3qVTKFooF2WkxXjNMickXZEPBZZWHwBqLbhbaseD3wqJomauygYUaxM88DiJpxdcqJTLkJgfsw5U",
  "key17": "2BPuKwMcgN91N2XQm15SX2pr1jJ61sGkM1yUrkUZU5gajaUZuxzqqJsaQg7aY6EQWGmPsRg7t3CjskkqwuEx1MXo",
  "key18": "4RawdXvpYWQ3CNxU3vHRUCAvxARYqqZN3rw7CRdmhLueoftnvMVaB6Wh8D1uCvBH4sU9BKMWMCSasMxu7Z3L3pn6",
  "key19": "3ZAYtRdrTWppRXG9Qz4SVewPwbhgdUom8djaPB9M9AWSH5Xd71LB63CKwV3qgto4B2jRcD3igRxmnoA3nDVzx6qV",
  "key20": "2TACkYhJK9XcTMoQbznjUboHvLRZxcAaxsoxyVvHphkMRYJU9ZbPtNKJxEQGmnpeVtxxpzEGXJo1YYTC8AS9JhNg",
  "key21": "22xpub55QjwXbaWSe91zMBDNfhRFxdaYZjhQ65TyT5ocTFjoeFkyWhcxM2MjdRAKAotu45ZqadJezycsiMsZWgc6",
  "key22": "58CU6UcAd5Bcg3UR3XxyyedJzPkwC2BYnRPwe4VzFGoCvTS8fcWt9iD1jeJGsZPqCZrBQQCGShAJXfdqdSsy5XZy",
  "key23": "3RW833SEhvoVbaV1duiFj9NFVfpN6pUr7XsQXaYb4tgPiEd65rpiHRjZL8CbiqBReSG8SqECy973UsQnPwzKZo8g",
  "key24": "4vJ8KZs7ESAaa9t1aTGvmyji2naNbtkac93KRRnnvSjKLJYbnCCurfesGiXfQCxNqAVM39CNHQo44NaVNTxo7ow9",
  "key25": "2aVhVMPapu8mnP23ckT9ipUTpBRxRz7eyAyXztBL4TEUNz5bW7qyqKGNvkP4GiFWp5YBFXdp1Q981a2U1iQbEqr4",
  "key26": "2JZ9uvA5YEWJqi9DqZss6Kx9c8fCpUbVBgpm6ENuM1kdteUnRwwfzYnT7Y8NH55Zp6xVK1psf1JiQasv6WSmqiD1",
  "key27": "4riY2HyBAkmDh23EdCtgi2NDr78xTtmp6p1DFZfKcBHew65ZKSZ74bqkuG4b5H2xT4CBTrmrBn5BT6pAYhPwk8Xk",
  "key28": "63VBSeYBaX5P1xtgps47bU7UBcSKcMK4tTEGDbcPMKGXNXwWx8crWZj3Fqew4B3t5dA8AujzQByfsHHgTiqcPb1V",
  "key29": "5RZy8Nacedgnd5BnNFyfaAtvYTzTAbAJjXYk7Hp5sac9nPiizmxsDi4EvwUHcn1TsHxaTiwLmtSouLaQUKTe6GZG",
  "key30": "4T8KVXgAkFjApRtFLEaKyT4aPQhwx1HaDGwAABCU9eXQ1PujCCasEvm3b66xDhanynfV63wLvcr47iS9iZ32yKyo",
  "key31": "3odgZ5oRxuCS8JjSTmH1MoueAKQd1uZi9pEmKMKNa441J74sdJCQoJi6F8zVCdNZuH6g4r5scyAXz8jkmz5Z7z7q",
  "key32": "3tNcVARADK7JutuKoaZdLN9Wq8fgixpv6sx6PCxquB5J4vBRBZxLoixhhESru6rghddqRNnrchDLAa3irJhHxF6G",
  "key33": "BJm375EuEY8jTQvu3MtT4xjnw9VCCL1EHR7LDLgMNv9AUyncgfMGzc3uKvkrX11qtdgdr7ywY9QpKxdsRhmuUhp",
  "key34": "tMPNuqLU6yiducybCqKXLa6YNJMiSg2L4ZjAeFfWJ5pPkNWDf4Xr66UfrNcCiQ6idqd6E6LAoTRiF9bzK2MzJ2u",
  "key35": "5tSG2nRwrdUndUoV57zrNkYjTQ443siyVepZvH7CntYABUca7VB2b4yFpdLjQGarah4LXvhE7w48BQEjFHYQ1hJw",
  "key36": "3NZza1ufGpxeVkTa5nSx6jCR9aiBRDTKtsZmz4tMAk7nHW4HnRZV7yEYW1uR751CL7DP8ZECMPFvdJPkgSfCtGd4",
  "key37": "5oW99DwUFPdr3rZmdYXh4Q8e36rJAruFcsA3UvSGnbuSSw9UrLKbn8gKnt6M1q5G53jhnsfwFQEyrQF1qVx8UzAp",
  "key38": "2uFtc7iqS8bSppgSWmSmHP4fxYdUVkeNFrZyFMH1CeDKyQwodF6VnXVPp9hdkkpYBywAr1nVGV7zXSBZN7aq2Ea3",
  "key39": "31Pp6CrQSry5XXjXe4yT5F1wqRuhhkX9JJqxEnSwHXxTh3ckmZy7GUWsNyHs57CHoBLVrfrynQaRX9BZvmAiMmYL",
  "key40": "5D8NVZoZhCzEZdBUxLi6imtG2Rgq6FVSobBdkcE32wYe3hSHMw6vJP52LJQD63bJFnn2pNVkuJ89cVyfsRXKCh1f",
  "key41": "3A8gAeQX1PQxbQDkQebQTHPcqfeBkdJfTDqt3QNHUoZutnTHx7C4W6z9esYfb5LvGSEtv7Mmw9kwqYucgupKbRgX",
  "key42": "52hxx6Ag1CP686n6QdmyDwaNKbVJV2hxQBLPu3wKBvrRmQzBHeeYNxY1sGzboDbiCX6JVBrsQzU95VuSrH5CuTtp"
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
