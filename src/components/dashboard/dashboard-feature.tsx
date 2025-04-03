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
    "5mnijL4CkaBiA1QioZc98GLCEbPXQy7TgrKtrQKfrhtjfdbi1t2B9SbVx1uxRrm7EEuWgJHJKXpaiA5rSFbJPkv6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vrCLGqx4DBsEkg8jmwfAW8YhEZC4zT2yyEUcXPW2XfLdZjmCZFj9hZxwK8wjRU7GRPP8nF2Wy7uzHfz6kV6Exbc",
  "key1": "4DcgGXZi2ySpv4q3ZqNd1ooUBuQhGdAUVyKNy9yAjC2XpoJoo6bYQJBBM4huRzFwTCtFM2cCU6mccXBd9VX3V4g2",
  "key2": "3kjBBEhi7o2KjpzchsQRN5yq7M6AsUfTMVARkkmMzNYY5NTwYHbf4GXPRwuLyofq7o9QkCBv4UUz2gJuc9y9ARHQ",
  "key3": "4Rt7D7TMuzA39UcWKRXgXQGBZJV4sY7pxjWvZFmVCBfzjZrFsZ2xVh1Kvwn1nHf27r9VFmYDSCRwzurWdjRSWdUb",
  "key4": "G9B7j5iD4Nva3bKvCzhbWtA6tWdoGcPwtvz6eVgYEEocGtfzgd6WgoL3Qm1R2vyY1e51THtQJa3BispZrEQmyR1",
  "key5": "54uFYo1CxsCPdQnTzHRHRHPHCWGNNfNU2BrTtRThrd6ZHfiQJnka6H9Rw78fUBEXPfXXuiP6M7bKUqgMcYdSajQx",
  "key6": "M3zYCofEFgsAiziyRDGBNtNPho8oXfbCh6mtmX8LEyCcZyTgqn69367UvL6ouLi8jUyGK1LPxraA15BgFVVzjBF",
  "key7": "2AYuaSTgzkzfTBTFXG3d64eHSrrk2Xesi4muhLXFe9n51DD4WJtzRw2LBhEuB1r8YnQvn7mdcDtJDXCAPibLTuCV",
  "key8": "XZA6GPGVWSYKTezcB5CGxkJNJuGj2AUS1jVJ3rn2DqRzgMbjnQ7NS6hpkc8GFASg2RZAQHitWCNQM9nECyYvnKU",
  "key9": "4VbF5W4yMtCdoV8Rw8KTqUUzicmrzUGhj2u38nJnZ7pRVq5GiaTmypZiadEqsr8XPSQfWk32pHFoFMt1zABTvvHh",
  "key10": "2wd1WBw9rLoHzwSmtbM2R86k63zbwJd4cQ7UWmStAwkzJrS7uzRWbFLYLYy2S6FocZvq8abvrJkhNjpVjnxFMCbA",
  "key11": "5QcjpYfUEVRjkmFQweLWnfY2ja4bjTE8J1VmEMBXKFqGX8WsSaiT4P29UJeSz6kayvsxeejvUybaDYuGT1FaZE9x",
  "key12": "63emrL2Fnbz8jQEiQ2uVKwhRr2TBfp51xqcyHLqnnDKtZqxXPZK8uH13oW4hgBfKqXfbB4CAzfZkjXKp9wuq6Atn",
  "key13": "5TnbS9uS9yXTZm5RhrmEX5A4XDNUc4TRwTr8JEZN6jQ5KNDsBzMRH5rW9VGn2ExbkGe8w19a2Hfeqx9uPK5YWova",
  "key14": "5YFndvVEhKKVtuPKQCXV3JJWKSFqtsjxd8aoZZyXy4c3N17GbEDbVPSYJHXign2VtfHZir4q8xgH3AHfk4CcVGzw",
  "key15": "2HA7R1pAoDDtYNEQRxVvHJyete2YETgZFgNusdtvSuKpzk3g93T9uQMoaTkAoy5Day6ngr3cxk7Ai46zG3ziqTzM",
  "key16": "29hn93poXMJXVeZ9vQfbZBM3K7rmfk4RvuPs6XEBpqdseQPpZe4f3Xt5XFR919DihFtjoEp3rh9GKEQJAU2nZx7x",
  "key17": "51nYoXyv87JWAb4WvHAqJh2XMuxMT96VD1EV248xmPcsJ4qTpWChUfjTgWPWDXMeEKWXQutWRb4UHMV26v3vGKa8",
  "key18": "DKSazyHFiaGtHGuYmrfm4dpiD7Ah51PzG7EHYL25QNiQtUSeRmx9Y3X62o73sBD9PggbgnxoT9WmUnN8BKA4V67",
  "key19": "43Mg92SSiwEi3c6abPp5LXpLo9fNjFA8KoxqfBv2jWHzazKU8FzvKnvP5mL3Jrq6ioLJH3xRdiK3MkoybqshEnTK",
  "key20": "3CWmnr2QaB2eNRJX6UB3FN21uzVeW3EBjpj2Wu8uzKBcU9q3E8SWPWyAGpvF87fy4jP6jhPavVhRD7B5aj8UJMq3",
  "key21": "ic2tVdTnJ69W51KVPSngmD4YRrwJQuisZJZwchzLGJH4c62J99zuZrbL7pGyvCwHXgbVucH1TZKX8jXrM9ugUCS",
  "key22": "2RZvHcHLidXKB3NVga9ywD1tzd8pkeSHfERRSdhHFBX6mPywYDYs1G6zZp1TXYa7UbtThiohSZ2HviAfA2p7H8th",
  "key23": "2yq2DZnk36KKoFivFcQmJEgiTrf7VwEVwRQK77A7XMmmMk7pkPwvsrguYzibJzEm8PxbjWpv5YhzoR6u83eRSyDP",
  "key24": "2J5rWubjGDmw2hBaofBkau49R5JrWNyxgACBcChxJfctsvnUnVh5N9SdRD3YzxtoiNxkv45NCjA2WqTKpU1Lox84",
  "key25": "2LhYyuA6jSWQSg1SwRNMKdX4vNQDEzjb2rPW6iEoMixmAZQwD8gJNxo3xaEKe8rT9PwMuV2v8znjT1RwyMe7if9X",
  "key26": "2gmbh68mSMf4nUoLyRb4sRSx4i6NgaXCdq5VnJYgcNExuRgryMa12w7FTpm15e9VcQCkWKN3nHetdVQVN3vzEUVo",
  "key27": "3cgAb9Rimd7PtucxL4TPFqhbfgR6Rv3VxmL3tBF6cs42mtuZKG6tYZ2bfvJSbkS6JMWVkgNFytoX8QYp1CYfpqWC",
  "key28": "3JmVzPeeF6qN2ysM9EoQuJeDo8qKGBwPuo9ZV2dDKFqaYc5ioSagXL3n3yYECfkWVMyfoUcL8LfUi5iKL2U6Q83J",
  "key29": "3UfBcW2gfnREjoQMH1QVVT4nxmhVbAe64ny2qXxnMVWzN6mNYSRYxcqLDHgQbTZGb9CUXpawAeBmoUEytZAi8AdJ",
  "key30": "37X2ketuXk37iYVfNcAJnVfecwY3sCFRQgUPryS5MARVVyeZGDGZ2KKdA2qw8ND8AvxD7wsVne8oRorLYC7iMQj",
  "key31": "3WJbKtNMxrxGdYKp2w9SrWywSYsZU1L281Bdfc6w3XYjKL1C6b8K9A6eG1fR79eoSWC9SXGA8nDVod5KvxQdva9s",
  "key32": "2JnS9MU3E2SA5EQt4oifC3aNn7gJLewGGZH8e9R9W3MHVhi5FyVtGXq17Xf1KmiWdcPY5AGN8yqtoFS2DnyvZSQ3",
  "key33": "53j44TcavV23x677fjhSZaF2hx1noZjzKH1WtSQAvtmASEtgwoU8e3rzbdtPL7zWai7KwS71yxwJQUUvCF8f11Qk",
  "key34": "2P8R4Hi9xbxarCarTPBQg8fQThwSYKPAxa9KW35SXQQbNryqqyx1WNCr9u2KGbfyupruy4VCn36QRtKv4AC31SUF",
  "key35": "5BGEj6fdxzLuiJdmKzdRreFkccBWzM5EcyX77hdc8H3mUE27eHbswxJZg79im6tWsMfCpmsHj2YaXFMDU61CBUHw",
  "key36": "aKgffjcgEv7YPymmUBvCfmrrVamAu9ycJ4NfzbXg5hQaHCiNNFWXUoYAt9JGZDWaqT1aEQYXxtGB6fqrwqRAmxC",
  "key37": "64Q6fADLx8gy9AK2sstqyB3fELMDgdXJH5BR8pV7Wg5tF2iavX6kcLpvZsYgfn2BrhT5DufxeQTSPstwqPTL3Uw5",
  "key38": "3K8U39NzYrsXmcgsE24JiahbQ8cj8oNuuQGRcAF9ZXJS2KEkgk9s2XRASgCApzkyf2LcDth6BYNfH7cVyqk9D2UG",
  "key39": "4AngrJVVtovKDfC6R4Xgidv8znghS8FBojguRF2bjwEcG9xSNfxzTYZBWRHSnApaZcJAEhvNYXpgNNxnxgybxotC",
  "key40": "UhbMGkqrTrKn3s9RzJoEqvaaAoPsTcBLEwVzvmv3R24dPGdbYJdbUbDLjokpjpX5g77bzc9aG8nDzEg7MJD7Jp1",
  "key41": "3FvmdynokydCxnASuSXAkRzLX7fbZjzhcGrEdigwPYYh6JKiH6pet7dVHkxtoyeitwoF826fu1HkGaVfZ8mXkaJk",
  "key42": "4a6e55Te9EJZ4U4L6DS9VyWmVeuDk1CYwRB5CTKqHTHP1UrJFCzJcZfYWT8ZPjJebrggtTwVjNMNLx6nfMqdquwN",
  "key43": "m4mWwuPPDHe8zZUhYcDqesvDNa9rHcHoNoG5Mi8HWw51A5x2Qir3wvoLD47EivftCBTzKkgeAuDnWivHkEDpWit",
  "key44": "cyZXXrC8Koj2McX7LXxYcuyhL1LrnLe2JseP7H3khyoUx5Zuf6STnupxMtznCJqhx3qVawoRVQ4mXK31ocZKibm",
  "key45": "3g7jWrFEAtZR2XK5Y3DDGjmNAtxbNn925snz7FJ9Kmaa7WgVLJGUJBH8qDFh6F8poQi6fjNsjaLGwbyu34tBQ5Az"
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
