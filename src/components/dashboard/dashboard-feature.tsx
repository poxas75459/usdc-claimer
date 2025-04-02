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
    "399CL6sZaqPZoqK94euKCZ7ymyYLpF1KLJtdhbed6Rr9JoRdRg15cY8tXMXCATqeSHq41wZi598pxcQiDDxe3Y7B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62MUSFGJzb3juU6LnRQmNFE5P6Y1DXXso3xMz5yZzNbcjUqBE1Kc8RBeMCKS7E5c7z9vRWLw4pDVXNdx72RZNzZb",
  "key1": "6GXxqLbJjD66SqYt9WjCgDyunXWRaWqfFRNiPf6ZMXBJ9Rfib545MUM4oD9HbiU7XEnb1r42HrYiWtyTuCMPYvK",
  "key2": "zYcwoksJFTMjsgEfCcV1ws9zwmJ5SctMhzcvkviGs9JSYZDtGM4m7m9EoNsPEUKrrwbJsLH9eUpEFkQzBA7DNLE",
  "key3": "29z7dHEi1ht7QVsBhUyfoESeYCrjXwew8fx1rNnYA7vkdzrGnAUhmq7CUhnNjh3S7qvDfdiskyx6LeLJRHqAW8BK",
  "key4": "5JSrKvZJv1BiDTWhy6PkonrBZCruaqPZm9TENAxpkT2kBE2tXDWNMoG36gmznQhM4RLcWf8iByF7vwpm8UD2wPa2",
  "key5": "23q9xVMTJNfyXELH7Jy1d7cQbhdLRqSriLz4PdM7ovhdFQqNKyDuGqxfQNjw35PigzLaAJhMrLvgw8Yi8nFTNmRj",
  "key6": "2HZVDkUnfid5V4GFx5VLgzNcCoMSoieWWsgwS7gVgkkZcHGXig4B3AYmRQ3un538SeBG2cbrLH2rr5ZmD6vKhcF9",
  "key7": "SMc1wKE5S1oujb2Fmp3NtdxsAdJs5K2GAspUXueLNyepBkVyFjWfRUWaQyz7NczkHyQnBur6odUcw8Z8BE6Ljix",
  "key8": "4GbCawEA9DWQSyo9ufP7Z6eGDHzar7LN64uFv3g77HGVJ15kEH7StVVDyc2PqRP73gtcLckgFTByo2XCHhdF1SoA",
  "key9": "967w6D4nbonMfDBptRSCRP1bjq72Ueka1KTFEXdgbQaNM4uovX5cZdTa2DHs9x2vEkd5HzcXKa1dyw8dbspvpHX",
  "key10": "23q9dCSRQAkoSx9FZQpkT5kdgiey3wAPH6ccUFQahwDaqDSYCbu2SFjWvNscSJs78cUVz5f4Cz8KamkASWvWxhkQ",
  "key11": "2qMbZC1uiSQNchXsnLbRfwNSkNHyz5qLjk28MtwpBfh4dV8HsX1hob6PruZ8aSzENPjd5Gx7UiqhyM4nBtiUgWx3",
  "key12": "4ARdny1Db2pdap3V537P8SMMwLwGBBhbAHV8zi5YArCAcA22d81ZBZGEteVwMQtEnHMcxmCEeDLcYTFN8nJT1deg",
  "key13": "5XF8HqNFoYw7UMuHRX5mwRJHGxXyKMMFwC5kawvHhiEX5G6WtzYaHcnJ23AvErfvYZy2xLitzSTkv2Msm25L19f1",
  "key14": "5zkw8ADxY9aNGPokzdQQGJUtV8r76u8bkSuDmVEQkymnBsHDo2V17VHjxMcdTcBANka6G1Yhi5nTwikecbd4mZzr",
  "key15": "2FFosL5WuJJMTNmxSXhctsADzvjojSXCyE3ZsPGAZZAWseyGVukK4xnoYUpkJufszP6qLxBLhzk7DniowpVkQd8e",
  "key16": "YmRmVonbdWB3xfcYB7YuTfBRxobin7dNBntQfH4apz5rEmhefPWqL76iJAYdusuSv4XvCEX5oaPRzuEAcJqspSm",
  "key17": "2PYhSzKKL7w6mUagQqv3DCWRPbYLii6xdfB2RXQgcLsptXF3qtxjeAVs6kzce2dgcCvpiWVWmUFUbwkPybQhqZLE",
  "key18": "59VwdH28f6RgJ4Jb61aAPbSSRGLfMtZ9WNG6tPn68BLFtuZgtQ4ehtZRBbDjaiimdFRjgZocoNDUxF8YQQR3xeoQ",
  "key19": "bwuSKhy6M9qxC6LnfHSxTtWzFZsfG6tw4MCDnsBVWMpTofm5fkH1ixJjXqhQ2xBqurJBErqWD7hYT1vfcWTXAeC",
  "key20": "uANLzp217N1yQ8K2YAAW3Qb8pcuGQXAVt5ymGiwVAdooAQA1qTNEGJ8Mrmkq6oEGrKu4m5oYEscQ3SHAw35q1te",
  "key21": "3H5b3jnp6FtPY21dWTmRT1zcwL4ZgLYXAR4HqmaiDHpTkXnZHcjyA3f2Nv6cR8aqPR1YFczdJhnVQQMvG3jontXv",
  "key22": "4hs4SCvAPjqpCbGRND2ZjB8ARrZo66Yf8TBQg1XorwhHupivkT8NiErX8PCA5dtcbpPJLo57EDA9ZzgF9hvE26Yq",
  "key23": "rHr4VgCDFR54EzUAoJqJxxZZkm7MuEv6QAh2s326oJHkXsu1DQjm1pF7rCbhrFKgRe3sf4VdY1s8ZjnPb983Xth",
  "key24": "WdnNE3BizMp1dti7mrraHXDQVZzbNCP5m1KUGM38cJWatWfJfRSao9u8iP6Ghy25LQWyqDh8cgEh5svKAtPKjTE",
  "key25": "4XNskDnRjBPaT7vVe31xyBs2G41z2TjmRXtrhzboBNeG4BTZqKE53J1KN3yxokymHj5RAncaMjgkDWVkppmsyKEC",
  "key26": "2rp6hMwAbGNKTxjQYcCwAQn4DXWybZVo3beXXfoKCDjWSa2ELFjvzAYcA5xxfQq5bWYMMDG3wNQ5QZB8yLTxUqeH",
  "key27": "5qtainFasvFs76VEnK6aytAhZtN35w1MTc5i6c4pogCrWe3uttWiwctnrN1AGB2MSqEC9L3n31Gff4CesiTUfDAn",
  "key28": "5DnVRVQJXtrKqeAqs3bQ6MMXLCMaConBULyFg9LyWEfbDcvGubaPwo2qoyTzF71eS29Gqni9TjfAQmK5w67kC1T5",
  "key29": "3pD5zWhe9TquSTH3oJ8xUDJ9WeZ7rJEr8HAaKLsPNGkHmtGFWGCo7difsaEceydPBpz4VsM36wuxXuZ8rVTxgikB",
  "key30": "4uu1HibqbV7EXF4xbFJvnogpS1wfceva2mR2UY5WhQEy79gv9q1TArXfJgEh2oUjv3nXbHC6c1MTQ37ZqzMQwfAn",
  "key31": "5FB5PWeavJn9T1s5j5e2quvUbM37LWrEGESBKCP1Q9ov7VqRggbMMfRGGUqta2FMFSHmrw1hkjLvrnSWKy3yQPdT",
  "key32": "GFcujgt3Moy8sQLcr2nX4bSvEbEUTzvL3bhCvzfrUvxidX4V28eGEy1noayd3RDNAgpHKTK7iSVY7Wo1isgZJ2Y",
  "key33": "gvpomv35QUXoefADkTAygyghdbjEQjC6sFrNh3u5guLf9DHhiPBLfcHAF9C7jPSdvVSbCTQjFDGWbJzvzUotuk9",
  "key34": "2ctcW1YJhJsiFqtwoEbLLHZ34NdtDV8n5Dj4bTvscnkTqRuceAzBRBxMQfwVt3Ubw3gPTkbDe6RG2R63d1yxSuto",
  "key35": "2mxTVsLk98R6YjfiC8PdVgzoHu1JeewKkV47ikbpHpc6wpbKxg8eZzGYzjXLoMVikKU7taXah1KvZNEZbXgaecSN",
  "key36": "2FM6WoFE3V4LwA7uAkcXh41DBspGYp3MCa6M5BW4Zdce7q9d8vzf6H1YezWKwp9qxyzmue95s4C9PwMQTFDL9GPw",
  "key37": "5FHtcPhsUMx4ZqAsYCfuQfgke3J9tULcG24yoGcfkvv3saNxQRa8Yx2ajVB9B1KVcdmA488NKVSsNDiRnBwcEDqz",
  "key38": "4CFUsVFww5Fs7GhqUA73QmsHtutLPFbZpncQF1473hEauFsZgaaEUWed1KfDEtx2Q16WYBxERzfD1WSgzDjP3LbL"
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
