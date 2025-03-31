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
    "3i3UwM2JCnQiY4D4iUcmsTUBfdTqu5ULyxYrRd1JJqRde3TQ8ig4Dd7AfddprH5VgTX7baQgdHThJgBt4GSQeGMT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UVeRNPGNSdtpHJ8WtNtFwM7YK99ndwvx3MBvM24EvHFNKbN7YCFSfay9xZhD1xckxV9ft4msNNbNHH6p7TAkVPF",
  "key1": "36sq2oiJvtwHFDhhC9WP72KMFRawEnSdtGANwKxegHTxhRUT1d56cxvkdrnzSHgseXwkJcz4NPGT1ZCiBKhVo6mw",
  "key2": "4B4nAFTciXa1b2z53QeggfR6GiMbPLSt76LXxLfAanfJiq1Z1w3Li1PtP7V87mwVFMxyLuqxrt9eAE7FRTLcmRd7",
  "key3": "5XeKrKcXfmEqwpJjNpHyApL58utZtR9e5at2wCdtKmXiQ5HxhSYRVa3xN48UFS22WNdWTVoXTVGfMxbveza91Cjf",
  "key4": "3HbVEWvWrZnF26oKgSnyZweKAAKqPJBn55TTgqVX6e4eTSZnwWdcSdmrBiPXVLfUGcit1TjGCof6kN6fMzEX6RPo",
  "key5": "4XSUGBN8gKgdaYBgZUh1z44C329ioa84ZxFmsrsgnW5rD1FMU3HSBJc3mH7qraKpbNC2nHD4DQXJoN4LyzWjqPjv",
  "key6": "4Kj9B3Juy9jGJF2fZVfio5xmkBAtHmqpHnD17Foo2NWca7PyPspuMycd38WCkAKVodbtgjFCcM1bBcak3QQeju3y",
  "key7": "61eVTf6AJnNvMVU3XU8wvA3kLnUo2uNjPM8LiNDYKF5TMFWEukZUSh2VYK3389SbqtLdhLj7p3kWMV2GgPFYNBXU",
  "key8": "38MQvGywcZPcockg8xbwrA5drE5gzuJ4mXjKdPRkJ1LdgesAXjzaapJawRzsvov7tongfx2NVdabS6a9TeMsy7mQ",
  "key9": "57V6xZRsmqwRErZSWQYiaB49TDNmhC4oopENft6uKhwEv9bDWuZ72fGR3sa51PJwQHLSHzd91ebwwL14jAbYQRpG",
  "key10": "cty9V5f8wbiKNRaaJEUCw8CdKG9K8vG7bhxN713VmtEPSBvB4h7ZSYeJFWN1t5pR1wGPfuXwr6pAkcms5KznqG4",
  "key11": "2wTmzwxbJR5AckG5MipntagauxAtWnMQhjbeKa8Rp1gxxhQZjrWy1RJz5CMBEPbBT1Vhfa9KmAezWYbbpeRTex9",
  "key12": "5HZS4hnrsNQk4VJm6yMixHNYnG3S1ZiRthFnpEu8eHXTPgvMdJEUFke6578poWi2GabJ3sja1TrX6sZtzvYneozq",
  "key13": "CYoA1vRVn7mAZBpo4uiGJeDPPdVcMauZtevk5i57n2sLuHja3UuxENvcMwfgwEpvWud8vHBUcVYbUfmcSQFFk53",
  "key14": "67rks7GxyyLnLbBrWPiekGdBAmjS7LPNSSmRbLBBTYE7oZDJRLw97jxtNkvfamErJWPGCfDyD5Cq5q3LGUQn3Z8K",
  "key15": "5S4oAADEksrmFw3AhZhoAsusRuSK7MrmKmdwCoWxyvvMgRzAwiwawt8Xkh7UvmnNBMg1ZRthc3FdjcxNCrRnU5W5",
  "key16": "j9i9czBrvEgDgeVvb6EjJWmgmPGU8eaeL2GnqL64oVgcujXDbJnN8f6Jh8zaAN5Hq8h5zc8xR39ayhjmwsveshZ",
  "key17": "3y5hdj63pvLYUNV1MapJB8BMRkL6ekF1q1uxSRTA39os17zxSS8GdQXJFd7BAkGcrPMctCyME27wyma6E4ygq2Xf",
  "key18": "5Deg7kzjaAMR8gSQZiJtw55tvsDvS1rMZLLUsMy9dVNiP7gDqD4F1qc26ChESnJUBZJgf2AyuL8Cn8WDjdyJLCbX",
  "key19": "26jKE6KJhjraQ9PRfinJaBSiXXH3pdf75BFzUUrxJxqbf528SX5dhgnG2QMRLNE4LDAPJjwsB33HgF17erihx6Yz",
  "key20": "oRTunLu86qTu6gRoZ5mvxdjrP9xU4xhTjD5QqEGzMoQw1ThcBCASsfz5pJjBJbqHpR5icWVQGTonuJUKAo7WnuH",
  "key21": "3p8sR4GxnjS79MHo9h8t7GttCk9PFY76o7oPasYfexMbWCDvkDWbvLvxcAXcwhSFary4oFiNt5tk2U58c3hUiVAg",
  "key22": "21eyxNfmj2Co6kp34vWsrWVUjdmvuGpzmzLpQhAUQrmUu4HpongmnCctQLnccs3p5vU2pkX8KvuY26WgqFmPuVzt",
  "key23": "3Z1oDLiQ1wbjmfbqeChq3aJfzC1HVuTxjjoTL25zidupDKpvmnJvEhZujHjAQ98tLQ1S2o6ZUKVM6pRxP6E3cxgh",
  "key24": "Wr4KMx55M3SLopQy6FMs3kowBkv67JziAzJPPvk127u3KQCrTMmKaYGQyfaMKizHQYNraMrejnQuYjSCZdHi13e",
  "key25": "3iPDzpHkUNsjXGseeEgeAqBsJMF9tjv46un3LzKn3u3hDaf73naA3CVKsGTCzz5WWSvkRi8bmxsWeTsLDbRrNeuY",
  "key26": "3rUPYfQ4U2mwkXyx8Pfm7pGgV75Uxdkth4czLgR4p4ZWucr49ixQb6SurJ5eDiiv1QBqryM6eCznXBt9h6x9tiem",
  "key27": "3NyBYR6MLELjKnS3iW28uxUq7mJL8XTXrVQUZNT9BNUi1jSC8ZZ9D5hPCXXdFJ4VnY6F1CiXZ2VJxnZVc5vQSDbg",
  "key28": "5o8WW4qxMxYhXr8C2u1fUQ6GTaCbjCi8pEDbfuQcGgMeDoWjaTsCu7dbv9W5qRku6s5JwSap4xVhZV2MpK1XjkW9",
  "key29": "4Cp5bL57vQi9gnn6JyG6xaukcYD4poQFAuYieuTVoAsdgfoQX5LvzmWKXFiCtyYuLEt4BW5RREMQyYqtesR87CxM",
  "key30": "5vpE15bENq85m6ndL4bKMFFugZqMcnscSLsGjQneZUZP9ZvADTT46kDNicTAa9fddLNr3u1qtsejUYn7LHXdZYoQ",
  "key31": "3KyYwc5tvasKG7PK8MZuMte2de66WPkbxVRtDmaqopQrdDcvR2rji7RTNyUoayLMM67h39npZngpW2rjpHNLGBoe",
  "key32": "Nnr72Buu8JQaVn4Gq8dq7VjXDhjLK821WLRYEH6MGvwpXjdk5oCP7cMwnFA5RFFmGfGKviK51DJaqjyKqkZp9vQ",
  "key33": "eXuwS5u9LnRaBmGK6gPb84SxQXCvuNDRJAE57YQjudof6xegUcdBUUmbCJuoPuicvJWHP7T4SmQ9qcXXy7Jqg1f",
  "key34": "27pU4KJB4Gf9KrWrawMiAEGAGsAg1WRsMHNdWbT1NHh5ehguJ1vKPw2moKsxxH1NVEaeKhQrqAzmWa7eWpF4aQoZ",
  "key35": "25wP2yQaAbLbJXXCon2R2UUyQquNxnoWJ4Litid9FawJsYZCAEPTMVnaMebhCYTGmCERxByTVJotEn7dKUstzSEG",
  "key36": "5BqpevQRpCB3M2jyfWaQrfhvKy5EmsAUBMrXDH5FxFrt41xo3cyswc1by7cJTchj4ZqEUwDdfizdUYSFFvwy2rsC",
  "key37": "2Wg2mxwfUsndR1Ges8EUggLbPFV5U1W5ytaweSK5bnAGpyVu37LNrjo33W2rLubb2spzB7c3Jja1ExKdYMFeTZCe",
  "key38": "368nrWToKnEtmwcZzQgiT4cjgPoF3RJCZ2Q3KurB1xGs7YdALWgvJ3M47rWACCAnEidPjUJHFJw9buiEWHoLBQuv",
  "key39": "3J1ZwomDkNWris6f9BeFVNwY83MhWdnSsgmwx6h9XH81Ko5GHqhDYtqH2WAM1jX6LbbTwnptAsXrJaENTnoDsFBH",
  "key40": "3PZmaYEBjS4egKHM3Y24Fsrp1bo8Yz7BqZ1cyQHc2hEnjZJQvU2BRzE1RteQ2v9SSt9F3oaox8pXiPmqzF53JCdm",
  "key41": "4FPb9KAzof1nmrU2QR9RtLiS1BBbUwj7MXyB3CMvrXxR65SCvCtVz2zCLWxbuiNkqG6gENffxk8Cz7s74H9a9FM4"
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
