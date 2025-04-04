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
    "5zSChbqFrY6vQ9PJDNrvdTVmNvmCTztUhmjds4MgZDdbDt9HBiuBvr4614budDWehiW9NzRA7hF4Jf99E3z51EUj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kXFnWfWWNMTbRMAPFjT8vYbX18FDLuWw9V27mqo486rmVCi7y8iQJKc2E7LUYD3c2m3H8E9b8SZTcjfBWXhznnp",
  "key1": "pmoPVutRa6YrVg1dhbavHUqRexuNqd8TnNpd4HUU9HkQy2ZuVQWysvNrYi7KrLv8rJsRtw43cQDG84SwAhQ1sUv",
  "key2": "5u7E6dMJYJazYMFWTJcdQGiB54KLQBTeVw5nvHAMyBxmmnPUZVmbj7Wu8aArWWp7v9xeiGarHMRXHXmdDuxL1grn",
  "key3": "2kty4s1pAjCfADCSCuYiviDGXfcMEQiKRg71DQX1HvP6CxUuQDMUhMTwLr78LGbCCVCbdp3bW2fTwwgpZeDmtEBh",
  "key4": "Tn8j9FnAeqzS82B1PnY5RonUzduKF7XFhCjmgpLnV2u9ATjogyqZT1sxzrgXrFbAwwp2qUhEgftq5CE7F1vwqVq",
  "key5": "5bMoKHSoBjNPf27qb4EBJG7M8QRpRbAEpizpnVp3o26VAnfC2yMR3EnFuRPHriwV2YY5TbLiBqchULiCtciWLfWy",
  "key6": "2naaWeaDcsd5Dmb67qsiN5pvjXCpuXbV24ZGXhSFJnRmM96DupVD7SskR3v6KF3799gLpT9Awn8dAccSa4ot7mq6",
  "key7": "RpzMCZ33PGvVy194LmGX2Eo8EpQDNEqpFscqYupiC6Xicz23S6S5vWpAxZf8mgG55wE1FugNqeqbkq48JgDj19P",
  "key8": "3DQHujyjnRuhmJMab9LNWnP2LWJBt4x3RLWAmWwSAbydK9ZHwVUwYAt4ehSWvQyvPviDpLAztBf2aaKHTTNUkLY7",
  "key9": "5mq6kZovPQyksL9iFgpVAr2oSUaU634pMdBx6oQyTGpso4M7r1VkUC94uaRihsRDfJTFrNyEDp1UU1VZqHgT9ScU",
  "key10": "2u5rbe52UFQC9Dy3VLh2LbynLDRRdPrUumSEmPVYcd3PxXst2ZXun2xgumBcDnXKNKLPom1j6Ah7RLqvExzR2Wkc",
  "key11": "4Hu5GCXRXko2bsTA4Tuyn4mZRDccL3SZxKQLgdNZt6b352mvzP4F1ahMJd5nDuc1pyQeuUtqYSYqzrSRwMoimS26",
  "key12": "5mKZGM4L77WcifAUtUU11JUnM9WavCEgiMu2U8SbN5TdHAZrhJuhiGNKtiFDMTQCFh9amsQJkTFxLu8pgKtt8tpK",
  "key13": "2omgVfhdJF7mSLDSJSWMyzbu5KPeC62vKV277kDWC6o6cWiBaJuc4tc8Gr4LAHUBhXvF3zRDCrQzvswfUfPYX5XQ",
  "key14": "3892Eu4gB4NMUmEWz1vs7qNjaESe6wRB2A9BiMeSoJiMjtmiT3kYyHwdAq7QTKQoR2xNpvZszW5hnYEc8eoFNBCa",
  "key15": "2khWcFgp7tkQyBEj1PEvTJjfwdgVgntHpctQerEYFU8Ef8EaR4jA8LHhwuiJgK9tXNEbU4UCAA8HxXnCtufTVJAz",
  "key16": "384krJ2y4cmA3iLSNQuqeyRt5tSkRqRfifgn7PSfeRDaDtxi82kX9AMq6D7HxMbQXccSJ3AnTMdCqsog4KCbgKzF",
  "key17": "2WDYxsnJ16rLCTEczTBf1dudqDGJPjCsxeTX6shrJbS2dYaSoDJyq72WiungnaD2941fM3vDPPywjhM7A948xemu",
  "key18": "5w1uz3moawMYjqGfXWw1ZkNJvE178grBcgW9Nyy3rvbXWecpdTQ5guhTxSzHt6hSKY7XXoZ6MzsLa7rU86t9qE5X",
  "key19": "QoFzZwWiJZoPSHCxb9HqEer3zJoSFLR1tzauckYAbiqP1aXKNMjuEJhs8iffX5v2Ds5urjbs8iwFEJSm2oGZZc9",
  "key20": "3NzrHb9nS9s75Kx99fjxSXedHoWd6MY4eucqUw1VvvSfs3VxMYYSg3dzfZUgAJtohnVfJGLgXG8ef1RFV3ScZCDd",
  "key21": "rsN1NkWSKHc9egtfuFgfqZ1GaWqtD89PNpMH2pQqX3wBTtePF31iyhp5KS1MFKUKfVGMfeQ4p4xcDDwGCKsMP6i",
  "key22": "WVqpvUmv1W7hd1i1zCNw2hRBGK47eLAHn6ctphni4nWwYuz2VQmpQT31Ac7F5g7aKdMQ6hWAfKFtGrTqdG91xUW",
  "key23": "2FH6ZJKBBEW88SzH4c6NNmPGMwzKuANLz96jcRR3aZY2BaLvLXDfj7uBaFkKgRJ1MnLhZCduePuttEwRDbfjwk9N",
  "key24": "5qTmFWRk3twECNqMoq5RzK8gLa23A6keGexSL6aCpqHTnisvCeztVABrv5xnf3mxR33fE7Lf7aQcb5NxbC1vKFFN",
  "key25": "4y5AENRVpSt9iW1jpPLMmfb9XHoUvVEXiyqcq5op95ZoVffsxfCP2bXATrDP6BrPFE2WVMVLpskCZh7fEZ8FfUSt",
  "key26": "2k6fvuhqDoP6X9aH9uULxB6QiGjygPNbseo1NStwbwDeW3gNewdUo2GvrGVkY6CWwgYXTh7Vsb5xQo7bfrFgidp6",
  "key27": "UUu57NHrrbWsEiuNcTXKikUEMahZDweHkrsDm5ewxiUkPQmuLhcEjXDCEcY86KhwWZ3zmnxTeS9tonoagtx42zk",
  "key28": "3h9GSrHhiG5XDY29HVQ4yxwnZa9gW3exLntkbmPkrL6WoZJZLvyjt8JVLDTZm3FKM43qBb1YgVXzYRi9nhStRyS2",
  "key29": "4sw3q9SXhEukBwaLPFurWvbR2Tg5bHAcDdvhp7BeDi6NzCjwXEEo2BhbCMfWiaLrKdktA3otRDDUoLTk8wagFWPj",
  "key30": "5U2Nd7F31dqwiZJ9bs1d1zxnfuoUW2D74zfuWeffQ773MeUKbw9TriGE6AiYYPqXKR3sZurk8keZdYLdeNNwt8Xk",
  "key31": "3RX1hroKkuDZ3yK58cvAXwrwwvLbJqhmMeCc4Aqg5RwaV2oTGuKey1U5YM2jSNancixw2j2QSpydBcpyZAHXSCye",
  "key32": "23HW2SidFxzMqxHoYgDXpEBvWh8WyMKhwzirYwLRVxzLxLoJWsko8fKVEHeRe7xL9cmtjY7Ujy3in4WGsj2SENC8",
  "key33": "3ZsB6JiwJanvgVyzjTUDT67pRgm5Qkm9yQMBLDr1ZpRUmur5WkpqbpdB8SGZDbRe3E9kQaQi4LQVNwoYMEAS1M8d",
  "key34": "4cdhxhKkTdjHqM7wS9V5eQniJyM87F6wy44Xex4hxTHffmhgLp3tk1TU6FT1wu8wuBJwjLxg5SbhWwX6HxA3Cox3",
  "key35": "2zqipoM4rtkgERDkqqzJ3qCt8tYP2FgdTuJLJCvajCck7QTsQxR1H9iTgYLopCoaWXu9VKA9UNJhSeghZBN3qDwD",
  "key36": "3TYLv8HShTNRdgticG2aac911UAJG6Q8ruWFqvQn9k4Rdn1dzk3JEYNPrykBUbRvSHjRUNT3gNSeY3cNK2hJXjAk",
  "key37": "5aqEQUToua5hLfvC9oaiaAvUzjwmnwRm2E5SxQMUgBpZ2nLqUrKUh5JBg7x1TzBGHxJTbSVDyTJqUzdxa5xX3UMC",
  "key38": "AtcusbhtRGXcpvpsVDs7JeyhyKkDupKCEqB9MpxKCbiQrbqKobb1skXo88ehaVQT3y2P4djhfXzxAKYgv3vLFqp",
  "key39": "p9BCmXUGC2yNnFPx2CdZHTa73eNDkao8s9fN6NLse1x8BygdRhxZofSTTxSBzva2V4T5QRQyfi9fw6NU3xKzjRG",
  "key40": "3ma21Fv9wyFvTpn5LfhVYZyrcn8atuGpew4NgS6KtPUYjNK6LE8aqduiAYhQesGmk3JV8yzGzPqZoUnW4ByNfL2w",
  "key41": "4uWyLDWvRJnNXpj9aGgMju1Y8kRVC7gMb8npfVBuwu2pZpL9w4UN2HAZpYAbtMooLKqq83EmbFKWNkyqqytg6zdy",
  "key42": "2o1x8PU7wCHBnas8pPRx4ry1EpyXgKvYXBtRManr7G89ddM16iqLUe5U4PqQqU8YkiZb4WDS1s5zV28yqZatYvdy",
  "key43": "2BmJZcxDh3T77H2YX5vgHZ9UV7zaDo7stbeCSGmfaQeYdpbw8LwyhXWRfxXpLqbK2snP5hUy2tZn8M6xA4HmoNYm"
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
