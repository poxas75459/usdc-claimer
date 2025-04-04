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
    "w87rriLpPF8DcpLJj7KePNXpAPMVqcn8T4v158CutEMxhjDrQofj2DzKVGEKtNVinz8hJc1opvWm65nw87NE3xX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5b5cWA5tuaL6MEHUBH7WM2WfyhG6qK11WeoQ3u6YB4tB5yRT5X3cUm4BpPNiPV13yPGjotBooAT35bkr3WMHY1E2",
  "key1": "v23JT3w2QFhy7Wm4gZSWybCcwDSwLLKBKMJhcUdydUL3h6XsbWpAt3CYHZUHFTaAwZDWjaDb7FZ9wGkxVjVdgcd",
  "key2": "5ZSJDApdFJZxyLqEs27kQZ6LkZrU1viGRx5TFi7zn8xEcPw1q49aPePkqKQD9AKVU7YZgvyufgUWV3pY7Ad1Urw5",
  "key3": "2i7ktVjnn6SXrshR3wUtEmmSExvuj3jyDrbJJwKVGHr5gBbw22PWuUrcAuP6KSk3Lw9Hb4QNk1UmybE65u5CJL8x",
  "key4": "5jCZw4S1xnJ74MrsqkRWsjHQ6dWq3ZncXte5eAAZGUohjyVXTsfAJwVQXTabNxiFgsyDBeAG3Z3SvDvE3xod333K",
  "key5": "5DGkCuAzSJs7k36oSXkJue3NtAZTFMGzo4cdAT8tHxrFWbX1CZEv7eP5LcVfvBYHXxqHdxN5o56f4oQtPC4Y9HHS",
  "key6": "5cwEFJkt3oncEouoHXbjhsjdNm4X31mumYqfhMezt55j9EHFDD48Dfd7GFDRYzhFjugEfK4G9ZUdMBdA8P31RhvY",
  "key7": "48wEr4qDSRokmq8aFDXG7AeXQvSwNEEXp4xDor9wtXAD2C4PsNWbhsSEGcxw68H99KcWiGg7jJmJ4xLpUtmgPG5F",
  "key8": "2yDofxeARduWFUkgh18Xva6cMWgDd2XfMRskyhhgKLMfmT6x1AfsmPDAbaCHWUkWLH5pCftsoocwcZyf8c5FnFMq",
  "key9": "2GdScXR9PcBbV8kUafQwmm1YXrTzKK44mybbVdUniYcKpsHzHYFhz9z2YKthdzByEK7nXiV8KGyTTvL1QoDrr2oe",
  "key10": "nUyYCWMjxyoyPtCrrreKh8VWVMVpKFWrUyYDXktze14gnm5cc9yrvSQT7bmXKLj73bTxab86xzCr6juXwGQVZ62",
  "key11": "2yzF8ULrU7ovknUTH3vxmLuNwPSAfrPMSUw18hFLXYiSKvcvsK4dFa4mJvxafc9qm7i598AWPK77TZ3Tqs7cDG47",
  "key12": "5n7iHWeKgiRPSVgWLzAE6tAyFag92cMQqML6TzYN39rFvdfr89GiBiDcfsnsbuhAWidMKG1eQfUU4dz8PEJ3CPRU",
  "key13": "661DjfGVMsq8FZBcxtvCZCbkHk66DJ8ifChKseR1YMMzwYC18xEPMsDE5cX8wejSvfNwM2XgMLdLsV2TpJkoqmon",
  "key14": "32QJHhznmrraid6tQRnf6jT4Xmq91g9573v3hNVd7s6YAGKZk71VskRe2f87SD74qWqL4M4LE1vBYVPKwNsqtGN2",
  "key15": "35wH5nU2e7D3ZsxtGoxXKPJgYtkGb37rVZbqAtZHaxzpataCTtwkbMnETEaxjvVsunXfHe66GfwcWYFVCSSwCovZ",
  "key16": "f18gZh6iJmjooJCwxNGACZ7CeddqrjEdcK86kWAT8RmkX43kWrywZrKFWWLz5g6DraRP3GRjwUcTSTeXttKjgCN",
  "key17": "5Xkye4LWD6rbvCqwsrDR54eTTX3DQGPqkHEAFjai7wyP6cwT6c27UwRegKEGMGcFsSWgy7S6ckzeH75CcWYoizHx",
  "key18": "3Rp3UXpjDWFHH2rdPkd4w9ZDL6YbFP7wXW4hm9KTakxd8GAibAzJB945m81Y32Tx6QjXnrRWsR4SS7hUBq899XoD",
  "key19": "67BR2QvvKq8yc3QrDj3bsdLaW77NjWKYaRFsiZXi31jCosPWX1FvRcLMUgXAs4m7azBRVsBWptu38dLkS8yXnpZN",
  "key20": "2QJfDTyJr7bnUH9T1KR9xNcF8WTqMeGKua4dmooHwsfBWLXdiZbV5NKGvqqej2NbfA8cXupfcQh22Uxhq3eJGRRH",
  "key21": "4CZTmtczqMuMMbMkK1sKsZoBC9wRmMjWvxMs8sVjXALjubgsFzwDJYQUoVC9RQ1ELfSb1VJgS9P9d4L7fRrJBuSG",
  "key22": "2FVgBPrpTtJKJXD8dfNXQ1rxThHohj2EtX9NdEGrpqgw3isrxxtmhW3eePn5TeZPX42uEKoG2RFfa6A678dBKxEZ",
  "key23": "5foq7RgiGzGiH2wLtXrCeDozgtctdnkmBgj4TPgGxK9inH1yGUMcHBiH6zVxocmeTHbKx2q4FsXKGqwpKsrYN2Zw",
  "key24": "47K7x7F7utgdFswhYQUusU4TKWHDFZUgGNJNc19av5ddm4pfNbzuuUWE3e1tksrFSPV5kJADhEE4AxEuWYHXZ1nN",
  "key25": "5b2eyPur8mTxXJLd2ogwEfemafiTJXXGsQe48qD7jH4BuZFJEGV9oWJur7xNpSPwA78UTUQiBWzE4uPDgCF2V1rX",
  "key26": "NbE3jKiFG2PJd1jpq1VbSoQPqtPmNyFvaC8w3ezCi5hDqLwtFfWf57je6zEkYX6da8BMFrPmAi6LnmpP8STXodY",
  "key27": "5EcCnWqrdQZp97dqPMLvDgo53x5aCGTwRHxtL84vv6iwbYLcBzFjHBjSKQvKqUgcHK51MPVc1tkrhXJy29VnuEqU",
  "key28": "2RdKH7rtCMpEUb16yj4iU7qqXszWkcrzahtJJRpc9W9tieEe2YVjf6HjRNfE7VKNmwZZifu2uJzrJwtd1QJDQiAe",
  "key29": "31JTgHBw5bazY7N5zjhTKCneXjaTHoaNMLCFz2oHuCuRewqfEfymUpCp1kmhrSqc3f4zsnR5M1DAEyc4XDtNkXEc",
  "key30": "61BPYedWKNcGdVqcHJZ2HSYXH3KS9736ZKmAUMKsiakR3s6LV6FJFo8qXL9TWo5EyYnqxpgp5kNkhab1wQW4dGr9",
  "key31": "5RHbTWmkkCHPTpAK9LJKKLbJo2QTpcEaCUautvEKKjKZRf66GXj2Yt9pid1j19gqu42qyyqnVkt4tWhkrtPwtRvk",
  "key32": "561CyvjKaGw5en9bwvhqQxxA4UrjKGbN9FmfZh2PsDDbcjVhZiMx17Sbyg8CsCUwRipf7jyy6wVJ6fTyWfnB84zZ",
  "key33": "2dQLniiY33M3BCNjFitLhZ34b7VJBVey4ggWG9ZTC6CDiSGGN7qEU1JruY8tmuJaSCTdq521TxUKMkVq1GzZWfv9",
  "key34": "5HvTc58Pyyx4osYVWPdBmfFPMrqpZ6sdFtfH3UPwkMj8N5RWCaTtBmudZLyCc36UoQt8fguZT1xUn9NyF3bzJj4k",
  "key35": "KH1PzhBqhqKmpUSYnXEGghyrdZxAjWszpD2vLTMmUuhjkCjEYEMaZqJWVsRcp8R8bMYPfghmkz825K2ZAAKwhVu",
  "key36": "5UZ8fE5WYdkhRWFASdrJCosoSL8hqRxBxWfQc4uEsAD1n3Tc8MTy3d4HVLyhEK7V3Xy7QEroPZqFqcp4Y6T3B9dh",
  "key37": "m8k2Dz3PB7CsXk2JF4t43fcxM9aCpmcgGEATqGsQepmXi6eJCAGW19eUSdJXt14LARycb1kVRPYx4hxHgkHL5GR",
  "key38": "4xuTqWLtm6mynfMk9S2kbSoivjDpeKj8w1UYqN9Tx9r2xhaVX6qF8tbukdn8PdfZMhWYeiTGbuyy4zfNKmQra1oY"
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
