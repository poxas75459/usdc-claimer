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
    "45mfdJp24iCVh8RzwXcCoeL26G6zuAkBHNUjRKkwQUKcieRKSgD6CB5V8o2n88ReVreTTg2D7GcfJXGSFz7hEYag"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xbNT9NrPF4hsFe5Sm4jcMFkH1nwEJUCJsLtou99i3iQnz9mj9oH8iHnWnLiYjiH7x6bsfji48LQ3WZRXFAF3L1s",
  "key1": "3sQwWuMj4LYV3Pu6fLL1M1Wdo8TGRMEp8Y9PjJd1uDjAYdcjm7Qi8uryAvRqwzDTuwtbYRuo8c1KVP9veLVv1yDz",
  "key2": "f4CQCnJMvic5SqYwjNAqmYs7RA9eW3KnnwzGVmounASt6DXadA8yKtbiU2cLCcqxukupo5YSPfzYsGqTju8mDms",
  "key3": "2yg1FwrKg5gLs8WAs4Pd6Rz3kPrjHX1aEhVDco28hFPondNHe2FNgd4HixbjRkX45X6TQZMmV9xqtc5in3DZR6M9",
  "key4": "2cUvHXav7eQokf31jWWBjwE9NrXL3FwaBcYHjWGBf1eLepU5QKPfXiuwVqnYdVckC4Qr1PMCAX9CRBYiGHiwVpC9",
  "key5": "sp1Xerz45av3N64H2tq8HqRenQuFp7ArD1Rr778BZeJVSVYZdL8B7VmAJooU47vLRXZW9V14fyWJgNHQgv1p3Vp",
  "key6": "2dffVK628VHJDuMfM7q5oD4m6VqWMK9j8K1Jw31yH8QgJxvQskhSp4sE7K14PmPNgyYrYp5YKLcAfXvyUsR5HCf5",
  "key7": "5eBxjDJxnqb3YiP4JzXAww7MBhcdF8NxnRwzER25UmTvtNBukgLd2MuSwCT3TpSqUxKSJNiJsiKUHLMFkctvhsD1",
  "key8": "23z7MzDHWVbfPM8a8NsPpt6qxq3FPNL4DaBi6Xe5LK1MQmqXUXfKYw8c5rHco16CJ9VgeMA4rGEsLs4p5SuoFcfF",
  "key9": "RogibkRRaGgbBZFyjZQFXD36AkwPrNo5PHTDnQugCaGLrcuyVQznKAkGYNouzkwYsCGyfoQE8tkcRMTWJQWU3Mr",
  "key10": "3nq9KCJhP18zAbPiKJrLS51JSmpNA6SoywFG5tLfaiHV9UZvtHnd79DaMzqtXSA9uKsMU2rUquX9wPpCRxgHq3PE",
  "key11": "3hhgHYbdQ2duGxe8Z2b1TA5Dre5KVoNKdp2HUKaaF1xWi9nnEKygoyexRjpQB5HtT6SgY25pncKMewuti5wWQ1CE",
  "key12": "566S39u8fF5QQMY4tWTSSGoxSLT8AfPvHUqJgicYvrD52krBnBEpkVtSLicrrQ8xzUTEbtYhpaxagJ8tcZEN63Jx",
  "key13": "23375i88hsZdWpHt7XGUiioXHWhFU1pzrfaSuwzDW9DaecLitX1tgm3Pqn6V5yiKH3vVzWfkRm1Bg4eqH79XaNAa",
  "key14": "4UGZQvKrwqcSEE69N44HEAg2mXdCPGWftKsR6Yu4icryg3qJmULdZ8ByYTj4JTGzBfun1j3G42Aj3pF11YKKg72C",
  "key15": "kgbrns2ap8SvnC3n9EL6stsshJgjQ4ZiCzgrXycN7Xf9X3XijSSR6ity1bBDda3jo2muZV59Le7vFgZdYubhv6J",
  "key16": "3R9oWKdbo7Mn4JFeZdZMuU9xiqDeX1fR8KmkHKMfbPnLp9X1G1TVZWgB6SigxCRWeA8eYdfNaa5FzbJeJWtz9mqf",
  "key17": "3EFZxXJQznQsWLgz3fXXXdsMC9zxoeL9iCyE1kbTj3bTqGX5JbVtdpfoiuJY5phcQtRGrRtGgarnX4zT7Wfk684n",
  "key18": "ztqgv8aFjhzTpFyu1Uzrkme12HN2CsnozQnMzQV5E45R3JHXVm77gCjSbW1JWof4bco3wpbhCcPybiG8q6CLXxP",
  "key19": "3TsY219jarR3QNf2uKTH1RXLmVEypWGkz8JU6VrmPDKz4ZxVNhaQBnTYsHfDHgt8TpX46T3Y3zKoj4e5r7JDUKxp",
  "key20": "UcoUeXtNwyoHUDqeP1BpkbW64RF1UwdUwE28VTvt4gCTaZmXKxm79mcTyXvARVUMgHxbX1QzULVrEWyJfV2qHuE",
  "key21": "5wmRq6GbMawAL8bY1hJVG4qKFZDtABYoKrJk3q7KeSZnQ2dLZJWYTte96YibArEiDc7cC9A2t7ACboL49qR9KLTE",
  "key22": "5fy31AMLLWT6GMmU2xn8mVX1kpLYMX2VjfqgNturpUb9oHPjUD21KzVCgUHci8xtRJhkrhZK9AK48HBcc4NGss46",
  "key23": "2sdn9YFLyudiDz5tx1jKARLnH5r4G8b2P5YGQEzF1M5wLjW6NupMfQYXdCDLonrsvK8zWiRfwQzV44CaQSGoee9J",
  "key24": "4JKH8yt5tGa7U8gwAdY43SaFK1swcQRcESt2bm8aJPJUJ1HYep1T55zr3Dhii1WYZufanWYouFLAuLy6R3kf3Evh",
  "key25": "5JyHTFHu3E9x1LA9RwhJBcGrNMPvus27m96oNVwjHi6sSE26WNEjAQ7xVTHzP8YgA6pGSS4M7dLWJJmrNxoCBDH5",
  "key26": "pQoQLTdqG5mH6V32j3s7hhr7CZj9kcCSYBFJQejJiPD8nA6rebeCjYqSikT3YYqaSt6inZxAcM2SqpX59EUzC9r",
  "key27": "3ZWCF6AkcqrfaKkRpEUVcXPM61Kh1MhFzndniNpzM5yMtxcREP2DBryrBMDw7SExWx73vfsrQVntYUtME8cmoeXJ",
  "key28": "4JBahkngfUaE5THHiiHM43QbTnKftNpjipFkwdgyPeGfN2zbegTYf6tZ2A6CwdqfjpDGyFFRGbeKb6bRNusZPUsb",
  "key29": "2UjyK5QFDxpyEoT9Q4XwkkjKBFcMZPNumpBHZqGHZpVBdr8EjHRaoAKNsxmukUbdjb63PaYd9UEzQAfN9nSgnnYr",
  "key30": "3zmUGh7bGChQSayu81vwccn6Y7AgoMauKuJUopfSTFkJXq4XbB19LCSGSzj1iNYKhPW6ndtWgGNrNGPJB6Rmy3Lz",
  "key31": "6tkhDufZGGdCHcFYJg2sNZBeuQSpkKDiti8dmKZSDce2bYn63Wd3i6RQgbo7VwqEp3YmvvPf1QoDtoKmLzpzX3M",
  "key32": "3v53uiM6hQkLQKZkSfaQ7zFbHGUiS93Q9f1h1W42BeRQa4KV67BiVB5y2SksEKWUP3QY4WhkJpPhNZB4vnGB2Qns",
  "key33": "57QxnPSgD7twt1neJxTvk9Fjtf3ez59WRqmvMGoEhdATeVxzvsxgNPkYynhGF3sDpN1Pa3v6qTvBv2W2UKWPFpHP",
  "key34": "HfRWq9wsSCyUZ12x8iBteRaaTfRTTMkxeaDAB6bvZzNmZJxUkMp7WgXpL6PcqFjwTEzoz9uveuvm9nvK2Lev6b6"
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
