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
    "5SAr65SQpXu8mYBykg6tS6fsiPSebRgBQZQ9AhgnwqyL5i7eeDo2HgzKWnjatC9oyCJ3tXsLweVZQGeHZQH4FUkr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "248eGBs2LE2mXoEreSQdHE9soo6V4Vq8y6uaUZweEXgJ6Vs5ayBJHf7f5a1Hij7tsXcHXuqMnZLqb6G9vuzHaXcC",
  "key1": "K967Hamt1ck2SPdiNm1VRtuhcUi9ACagtBMyaaayxA4mSSSFHpoXoYpLpV4iPBE6o4qoM9kjQpUQPhGyKEPEaQX",
  "key2": "FAyXPn6UJwHH8tgE1N8ZceoewSDgZQyayYh5vJUm9HFEoe6waw3K4R9KqEk7SmPpuc9YNR777zFVbL2GNXj3Ynt",
  "key3": "2Xad3UsGfsT7iB9jEuJgnNyzKCzDvvmDbkpE53CV82JYgs5VV6kGRoqW4ou2WgJFQk349ZuV6Kbr3RZBbZmaowaz",
  "key4": "3A5aHE6baF9wrrFpygyz7Hj8hVTMnPH9d5qUQTTGHzhTskcHswAfveBo4r4A6LuE4MrCv8n4UB4aedZ3WTfvfaHM",
  "key5": "AuQyawHa5HjoNgwp4wvCuEpfrbaYDwtk8LEN3D5kjcqkHJTiusrerVky8ahmkXJ2ouBpatKM6dq2oLEdbJj3GvJ",
  "key6": "abiaeUJeX5kvDKqzstn4e8emRhC9ayhi1Jfis5khi4F7zyeR4MGvvWRHxoAJMJcDQryXpz8A7Xaek8mgCzif3Vb",
  "key7": "4PMh8UmLJLJeuYuDFaZxQhd3jDgtxA5Ma1RJAeQoDpPp5d2sG1goS1dsWyayZhZjPXEKKdxQ8qZxvvV6g6icoXFZ",
  "key8": "3am8HG6SWA6XFqqUaAaiocXqf69UjMBq7v6N11gbdMvDnvF4Gvj3juCVpz2xv8pGFWonLdpeBuHw9sCzsfo6Qqv2",
  "key9": "3UEP28SeKCQLtsugN7dC5QdguYL7c5fKx4RPZPkA2caoWJUwVaJLRdfWEC6eKc7Y5Gg1HXViQTmCCZCqjNBQD7N5",
  "key10": "5iZ4RfTdRdhyCRkzJmaRUQrpTGUJoBCNgG3TL1Hum9LCaBiMSnN1RaSJKy8NvbSzLmLadvN5x8QJ1EqDXHBpj7c6",
  "key11": "5DbY6j1iE5BgW3WcpbSyCeTKrRmzc9E67YuSFedJahQjbdKjpFX6yRceqgdf9V8MvwiaNDBmStfjYD2mLiTZRWjE",
  "key12": "mZTiVwaMFDfhEsfuGsqUjQVtQskHHLf952jBVJPCupjaZPkQt6i5Q6Zp3Tc4LLtDbXrszG7Gb8uz5kS5iYo9afP",
  "key13": "2Mc6GjkMxWHxa1KdkeGK6TgLX4B18ZvPikmJ97uxwbQvrwZshXvXdd6y2cK1iV9zJDRRqseDkcSWpCw3ftwUxVnq",
  "key14": "63NQ15ocujzHQYjMCBgfmnEohAj9dixjv7NL3yuULspuwSS26dwctzwGtBWhoGNuFvsQ8MjVrUhqNUX43sxRUMMy",
  "key15": "Y3fQ4aGqPVG79PQQM5CMe6SadbJJn44oE831ZEWkLoR2YMoYUfvdcpy4wypyA9yK4TsHd5JMVPYGjtho4Fj9zea",
  "key16": "RnetEVipE3T1JRLuARDrevxaovhi7Z7RdUmjb6K2NyZEoMMTPjSxjTQMep1HLsVRp4KEn3XjoEqj8Gwc3pAvYnj",
  "key17": "QjoXWpPQMg4voJR4QbK34mpgQhnwH6A8wzF3cHk6io4cyxcb9NMaERnztR3hPKLCzkFhFqmonx8kzvtjZYDQpAv",
  "key18": "42EjYKNbQkhZTaJwMNMV3JgjVoTbopNwZQZuS5nJz5tYSoQDYSBUWXSpJTAFxDYyeQ4AD9yXsQCvk1rADLQTsoWo",
  "key19": "4pDnwRUoJ2Ajw27o5NSBDEUxobKDDbtrK9bELp6vcB2rpJSN4PFaUyCVTY7uva5m73nKHggduKrgj9cn2hCHA2u8",
  "key20": "5CrUATFyb64sH1aMmqbGk1LjtKnB7Vq1yMzMXXpneiGA77EJEj1egRWcxnNYfsUE9X7TSwvn6A1zT38yCtRCxLCD",
  "key21": "4uAbUnhw28JzvqHCAcMDpTucTx5y2J8MySEc7nsyV494QXuG4L2wC9xgGCWdCAQagU7SzuDDN42iikq14CZbspLz",
  "key22": "28x5etb5fSnUkcZEyVEwbjU62jfKjjgorBNtiv33dJMSNZfGasS6s12ePUkf9FzTEViamoPYuN4zEhhE3iM6hwQh",
  "key23": "55ZSVx7YDQ5YVp3M9NPRMEm3YWJNM6YJkTCEthdUkRWc9GJTeSpDUvdhpjP6X6Mf8SQMxkBTJMpvtDZLj3uLj4gi",
  "key24": "yPyWNC2Pj27fAQCcP3PcVVJ4FntBgNL95sRxvfhLTGtCwmbAbTkWJLKU1W1UAH92HwW7NMCbssxWfWQYp45gYWk",
  "key25": "23Jy87XfGXBH8gNYeHeM6hw2mCggzgT6mWqKKoebJCRmU2tySeg38vgnvRKXc5XLexvFfFjK8trLHnnkafvhYuBL",
  "key26": "3is7MscqEXhUNNhopL6c2D55q6fi9n3t3EjHgv93rR2znxJSiRneH9qE1Luy84giG9SxMpXSZNUxQU292XcaJ8zy",
  "key27": "4qWAKLPV8bas6pCXMef4Usy6vFmzxPE8wQjeioQko9KNLrbHC8L1mdkCHvU7p2UT6tcxNT6miEYV3fbgm84qDS8k",
  "key28": "5FASXu1JNbfaEuYS1hZZf598yiv49YjD4QZe6Z4bGnaLV4MXZBANnd9z3t8PsFpGi7SygsthonMej9H1ujTKP21D",
  "key29": "4sCub8NJXmrnaDzhr9uzwjkaprorhBZms57sHpk1q5zQy9zAanwLExEpBvVveZAtXQKmbagGWy38isGPpVbCxwWm",
  "key30": "q4jq4XLh6mrZpqqHWa9Q4fjyUktBtwcN18ECLGJPCLy8pHC1Y6iNaTh6HKMTKQZWy5JxpMHjyCth5LtauLSZ6bw",
  "key31": "5wHE4rBZ6VETXCKK1E4Bf495bZTDwvDhZxAymvTWRE865pitDmv2SUdHJsv1gikQKtMZuepwmXc9ZFsuuvEHZP5Y",
  "key32": "NVw7ZPjgJHePAxH84a2MbGoocFTXD13ysY8JocZBVgYdhSr6PvyAg8Lj5HeuE9KHyXWxpkw22wXDKie6WpDbGJy",
  "key33": "3tv8ihiKQqAhiCPygHkxJXjGQsPRcAp2n5CePmQviv49erFDxaJpnoxpFiSuLVeyZing49rmGm1skJooKr6zWGgU",
  "key34": "5gexeXvsrFdE5hknGmv1MFRjDVzDv479gr4H7wfCaW4ze69RNhCYP6kyLQDjYezHQ1xFEtWsMgizRt1JQcGzR4KK",
  "key35": "Ykk9MqiEZt6MUh859cmGVWV6dVdK8bQNrjj5cjtYucpEaUQBKoFbtmWsnm7xghKD2dXkKzXQqu4e1eesHhUFrja",
  "key36": "2Wno6ynfQsotm2UjPZzGfBnkVu98JwWa8SupvxgR1DWBJgfYV8YeAyT2giQkNWqrwx5MyveniHjGaZyVfE1v12FQ",
  "key37": "5HMDFKh87NmQgbFxm41PdQa7fmtwg6bCbZBHi5nqRqyj27dKuajGmMTEfnB8tXQ9BvdfCtJomauQrhfzWA4BACFT",
  "key38": "3386QC3BLprZYVvW2ivxqFJJFDofYc1g15NMu49zzTEwK8Zn32gTNEYowmTbKVu3SRY6ErD3EbkhVcWFDemuT1Qa",
  "key39": "29gGG2wDpFY2SYKuhWpV3UTkn5bcKi45DcyfM6d3MQTxZPUsxAH4FTsyAcYxf3WrYKyZX8acFDk86okgqMMEkewx",
  "key40": "Laaqp8YWqHXtQD8gn2BoDKb2oSXSpKT6Jzf2XiLtJE3K9fcaPDMyHzGrxHTL3iSTfzviD4pPSHnWUzcKVMYzNbz",
  "key41": "2JzgC6sytWW2sEeDqcNRDGGk2h7jvUpgDgh77ZLejikVik417g1WqsoBJLbQYJaFXLzG9sWx5T2EH8pAqo3HNom6",
  "key42": "FHw4N26HBBEKzLMBvTccAbxmDiCe9b8Viib2JSLZtZFkE2Dw7Sbp4ADSjctEWFekvZzBECDizqSLMqy4ct9MMu6"
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
