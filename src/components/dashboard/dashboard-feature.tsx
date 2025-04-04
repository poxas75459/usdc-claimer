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
    "kJcX6V1vUJ8cmrU9EJPJAPghvugJX5MwEpmE263VP3SXWs9WuxFt4wWq7Y4URSX1CnqGcyTUS5Q7Vp3vQtQuk2E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MYjD28qVWgbD84z4Enuq99zyy1sxLgmj4y2NQ2JjhUzjKzknVvH2UEAcRDQYJNwear8idgxZf1saWNP3QZww8Xe",
  "key1": "3dpqzyuLgJsfvQx1YrfyfpQiT3w5SubAPvbbntc5QvWQsL5XWNX453QAK93u2413Y5eFa156munib66VBx2KqqqF",
  "key2": "4h5PyVZ9PovUFNPoKCpkBUER89DeBabDfQHKuLCs2hkRSY2LN8V7iLQtz9BxnM8e5xSnZdUfa2dkWeJVEhgCnF1S",
  "key3": "3pVwsyy9jSittgn3UQSPLymhNNaSf1sio7bjYZFX7qEWaEzseLouEXaJxEbGuvXPQbRJFBhd69Yf64qn79yc6yLW",
  "key4": "3GXiSoTSDpnMM9bUwYbybrwqFPgZENmUqHK5YDMKKECiQYSqpeuaM4HUMx7vj2cNMthQKD1hwnSEhCgF3iTRGtvJ",
  "key5": "3sZRZ3bebZ6Adr15e684z5LpkhWwoVv1uEbGWWXH5sNqoL3YF8VuP8pPpXDvNVFUUE36diMDLjawmMMDYRxnSbMK",
  "key6": "UkpB6P1xApnREoMUmvQJw9dhcQ5PrTsENaNzAS5YtbwDW3sdQAgkFuijm3U8C3wLyUNHSTDsWPYsns8jvsL1V3D",
  "key7": "3beGUJWFtWDB6PwW6owk5drgrPpPg1zAhMt3tsjsZhhrFN6BB5dmx89jpmmLFME1zodWRkcepL3NZfvarg7CLt46",
  "key8": "4G9KNY3Y88zsD9AGFA8QXu2wFcqM85Y2zgfse1RvJ9ZvEZTra9bzh4NcC5L2xmDrNoTcVYHguMShDAvC5mmBLjCw",
  "key9": "3UckTVUt9buPo2XmnFHAN1KTWRbqqSq4rAeF3kQApF54HmpjBKxMehpmvVvSoAgtkQiscz56uAmzRv7LXcQv5xCA",
  "key10": "VYENe7Z6B275BUUceotVtpePcWU1YE2jkkBJ46zbn1B91rnqmH197Z2gDH2jpYwov9QrmrtzH1FvfrQtJteyTwQ",
  "key11": "4B8XCQczu1pEHhrCN6cbiFYYBFzDqJZXqnczQh2XKedMJrToinBrrZ9LbS21Lwr9J8XN3AKfBwRqsHbrhxHpG96",
  "key12": "52Lh6kscCLgHtGgj4DGNmuknpSQ5YHLAeBTRuAJXaqwaxqkPjWoyoueiVU79QdeDNPR17AxyYnnyg2njVa2aYpug",
  "key13": "3kGuG9zqkgkWUNntCkVnL3DcU7GXVTXCXrxHZScbrXZjnYnLtCCjuTC3nbtNaGZBLPy38KGtcSePYcJvPAFy4Vd2",
  "key14": "2ZFdpiMxRYgMQyxnKVpfibnGtS9Af3bw7ELkzk9XRzMP5ASmFU23XtfrL5vYj16oEg3q6zmtUjUS1HKcncSEURPP",
  "key15": "5YKUXeYuEvfdbBCMc6nXDiFFo5XeuUWxZoHCiPGK5uwV7bmr5C1kkGaGwSYZpPGTGQftTsWiQGTLH2Bq3Fk8qqjX",
  "key16": "PWJKZTxmXpZqVWb3SVz2DPF6RD9EygNcEwCTaTGguFXrGAck1WPevZg5uhtMpsAaYpHwWBpceY23A4fdYRaBFtn",
  "key17": "5nbTKLw6qe9rgx67VZz7T8xWJmbdNgebSBBKjig6hc74EHgB6Emnab3SMBSX1dXNMmNvM6zCCupWrAEwMA3bKyKW",
  "key18": "2kimsjcidtnQEptJMDnYmnVkESLA9qZXH12i6JrYuGqVdfFWuuE35U19xnCfRnJedxbkzFBiPMPUg1L2SrUZaCT",
  "key19": "5YJNfYWS7TtaBZJZzqr1CTMFTzPHURf5PppMkx3AP2Fuc4HXQMZXuZ4whmSYzqsEuLahobHQCkjvsF5RuqpVWSdf",
  "key20": "MM483GV6YMrH3grC5j5aGje1pZaNqD9TN6u2ng8b23DxBB92GZ6R3nJYxXbGx7EkuRafgjscWWxJjCAPwWM8PWd",
  "key21": "2W8Hhfabj9hvgppLzP2yLXb4H1pS8xUDP5eqJxW6GBrvxs4NVxdmXHg5dCw2K4ZsPuLR1JHj9Msh8ZTF3FHUhUx",
  "key22": "4eWTT6oxzGp94tbxNCYyzNqDdYH76Gwrrp48z8oimEUQn3mBN8QiNUZ7nuGjB237Y1hahQFzZsSt9kwJEeraeSMe",
  "key23": "QSSuWVEdbhmpXggxyoFgBT4xUzbhNKTmytQcP6zD291zXbzdcA3FbCMu5bovXqUFj22gBE1HKoru3DmiKYcbsks",
  "key24": "3XaAiDyq3ATBoMFZE9chMySyXaoyuKL1WzA81LLrZy5uJcbfEfMey9LhyRfYuSruVShoC9FjvcJRavnDkZps5sw7",
  "key25": "2nL9V1sfDASRXrEKcsQN41FTAuAJ4CCmZeZ75fuNLkC1nnAcSryCocDyQQ2PmtEo7bUYPzeXQVt7CVVwCiQxR9Eh",
  "key26": "33G6ZSVeo1ro3NR6wDSE1RSTYGaW69niuscVDxcwCpuYo1W5bcGYdP79vYWNamZCDmFt9iY19RmA5MmNf58VbaZP",
  "key27": "2hV9VDcj2Kz9RmRxBUDYwB4jfRfqFDmU7t98QqN1oQTMsf3K4SUeiaQw4bcdNpHyUhA8DoDGL2dwXXm6DrxwAcwo",
  "key28": "J5mK2VdanyqJ56obZ1x9VqdkH9xh9gZEu5A93KRrgSGGWecAzVXt8JUt7UAjEFXJZVGHn9km7xwavhQuKfioVgH",
  "key29": "5PawWssP8SgprrKq6BnXDMdcXs3XMN3UWuMBmmb1V19JYkCe3FkpGi5sV8aq7MNrM26HpnA7KaJvMmm6haA5QXY7",
  "key30": "hZXrCz1EnVzSAGyvMyco6NWcMHLy96QNJkANNMrLjRExkUq5MqeKAyK1tQ9DyErPzSwjuxBuNnsCXQ3nAoSxCZ9",
  "key31": "3gXwuw6aFLTXxD5kTwWF6qNzTGrn86d4YwtpVa3vCWwSWeYcbJiUBfcQMr9o6qYy8Eq4Y7i2G2KrZZxcgvnuWA2N",
  "key32": "4tqcERj777YcoY9D2roQPoc7N8ff3Jy5BUsfUJihRrfN6Ap51HH7hTPDrKPd3ip6XJSbG3y3mFVYNft7cJvBuaa5",
  "key33": "3Gnyr37Ca9fkv33JPzfUSkCQdqNc26rZaREZVLvuhhEpZ2kohLG2ZvQVuRR6bVqbXVmr8KpoEXK8C49Jx3vzG6ov",
  "key34": "25r3RbGG5Bc6zjHhf6UDuPEdssne7UCwEuoutWWuS63VxxPft8F3vgJHCwH3emZu2nmFiXk1N6SEs2HFXqHxFUjs",
  "key35": "5y677dZWJVnuVEs32ACz9spjuvHoADrnPs8N9SPgFwKksEW4QbdbSrR7cj3epwE3hpUjpN8VAum8FG4v1nc6ea4h",
  "key36": "2gyZ49DJPMDsd2pYCrmUxuxWrdKjGXEqhkxUiQwLExdnQioywnBQbtJxqofQZKPHDWEGDarQo2bpcJJFE2BKbZFW",
  "key37": "4mT9rvuWppYq5qsFJAwiRKAaQHeUwfbpLgisee672iSNC3JVLSJY72AaZFL2W8qsPX29foo3UqEmxgK8Fqxia5os",
  "key38": "4rGnYgmWiT7orKyfnWs2A2G1ZC3Zw1QHB2VnGWDBfgA6sTWvTTnYWXU14PBKHvqxk6GpJNAsy3AskvijyhHfYxCj",
  "key39": "5sUuenDcQ3nXaVV64qWr31Q8ZYnyA4AdynVz8F98PeHjwuKWmnR7rVBhG9WrK1p3vMUhcDR1xRSTMBqcbztomx7V",
  "key40": "4hWYQAkTiP6g9cv5Ugh72bshRsEoTPJyEteUi9iWDYPmvobCdFNoP6EhHXVrb9A7PLCqYGjmC5YASWakKzqfspNR",
  "key41": "4ipSPXDxuDP6MC5uAy7VSU42AsvUnDRXyHTekbfh8w5rhKtGM2pPBQAAKEeK9qwCkQBSoqeWWfb79HMxeB1oEoLz",
  "key42": "5ofhJQm5dFpdR7XnQnzYzfoVC7cos2qwarGuDDZJGYurefNhUaR8wgFB3idbk7WePGn223Nnu5pAuNCFDDUeEfLD",
  "key43": "4uXWHgxTBmFo8tLie2xXxR5ohrFnNDTpKc6oUqfXcVWtbviTMQVcYpFQmJq3zmMnbK5mDmmmUdrHCM9EW4Hkn9gM"
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
