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
    "45ukoXvAisoPgoX4kMktAPeNW5LkJjbhRDaEbRWC5yCSUGyCJtzUgqzUfuGakfq7SkatqpactCtHT4WftMSqxqWz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iQgis9YQYpPfZvftEsRYWQFXqDd9Z8CkzVWeb6NbHwfXi8XgUE9wAGduv7PdenXPDpCseCuX7oB7AbE2QL82MfZ",
  "key1": "23emohtEsu3nBSQasVtS68xXrwKrDAKp1E5dMwcyhUoAKWbTQRhoQnxaE9dmRYv8VyLQYK3tysrHGWv1Xc46JAKM",
  "key2": "W7zAQsXybMrejZhSzR5Kg7Ribfe1FiE7xtBrgtWjFWsmdezp8K8oLntP4i2dqJyV9QuApsV2MM5wiDPWLb5WJJM",
  "key3": "41fdqrtFRtHhPyvcXnjuSXoyMLFHcFU5pv8EPvrPtzaQ2NrnvcPWUZXn82ogRWnx3QwkdPAaGtNqPmKm4yujmnfu",
  "key4": "4LuZrBuHkzUUD4rK1hkiXSSajSsPYpvWS6txrMWaAMxiVf7g7RnjBJnzpmJfshwmgqM65Tc47bhqdR2V5nc93553",
  "key5": "4rhLWHqXd2qqh1mdtRXzDqEoxcNzHSvtSVJgmwUboQtPbRCQYbbPd8eEb6LW8WtNrnXK2GY1pLQV5qj5Qcgk4zoA",
  "key6": "4S6RB4HDmbxTdzf1T5CjAzsx9zSfbz1m3obCWneY2jwuW9xZmm6kj8Tqutuwy1YQ9vsJEBsvAqgzFAVNps6ZwQLx",
  "key7": "PL9kPir7i6ZPbTBR2xCum8PmZL5JkZjuguWuYyBGoke3KrhjwV5u66xMqiDBBKuSaRCSERd16jRqMVapXQQNccM",
  "key8": "3LZ9UMuEXHHsSmUj3tWS5M87hjTCQ5yLoSBTvtSvFRbxwSn6mWKsUf6j3GUmMBq78KExR3JNk5Frr2raDZjPHCNZ",
  "key9": "4JabzCAFyjU9XJ17oHYQko4acapyAJN9DNj63Rxmp7oCNE7D18LsX7Zb9N8sE8RysQJR7BJmnKL1wEAURAr12Yxa",
  "key10": "36337E1EZu7fP1car2w9xF7cSfKnKfDqxgUyxKpPTzsV11J7LJTvTpfwoMmEedpuVbQz4fVEnKjz3ZP8FGyRee92",
  "key11": "4S37Nzq58QdkZegASEWLHR4Nbe4yZc6DxPXy99AxQV2yaPAWVLyeZPusn7wKtGhE6aVY8sLj5naUdy64PZR4umpH",
  "key12": "3unjyYYBUDgMyszX59USszs8omu2n6uNMQE4Lof48wgXB7mFiJsiu8iLp17XMydjnRkecE46SNj18Mcrkb34jAUp",
  "key13": "21MwtZpFab1dygUdA4XVuMgwLF4nMRxwcU4ERBMvsshqzNV3qu2KGbCyRUwcWvuxn15Y2BDFYp6g3ccGZQjfoMUi",
  "key14": "3Hdqoraxz1Wy15jVXtY1eKngtLJ5abEeBmqb1oAHrSa9Ny3NQEHQDQPBBvzPriSoJHXbdtN5QbfScE35ZhX8ML92",
  "key15": "wQFZmPQYgM2cu571ypgNHMtBMC2zTMxp9c4aUvQQgvxg7PmARAgQyV1E9FqGwJyUzH3wAdF7PhF5gwswDcDbJNM",
  "key16": "NjwwrJvJ7aPDDiumjMUsxk2Hs4jLoJnCuYSgrZ1Qq1MeWks75ugpQE2vgf2ZZCujwFJcwAKVpA4rf8SsfHxXCmb",
  "key17": "4cC6pWQw7E2ByqdVu3LUJ1po2X9mNedz6ZCdsS1jzBfsnSvoJqv1hnUepqvCDs3MuBkHViigyKmUyiCySmKrcQFp",
  "key18": "3gLFW1a7atM2zXq9BnRxNoGmmm3HoJA5vTa7d81KJrxMyMXKQ4dCYD63kAAP7fMdDdcWD3ZvEYM54f2u3Z4T18A7",
  "key19": "5ZAQjD627ShJ1CPbfpz7sytWLEwaX5Wk665aDcBzZT9iPeMkD3uLo25XJrqopKucYq28BhHJ1Yc65jnaYgyommVb",
  "key20": "4XB6o4KwcTXjCF7HpYZkU9VWNYZb51xchgG4Lsxa9NpkfpnPpZsd6gUXcaMRdj2utoYUh2GiUg7ccxBq7uMcHboT",
  "key21": "54MGJX7s1XJQqBNNBuxwKPLpunCmEuQNJoLTtXbHqQ4p85V71C2WmuxnwL7xAytqcaWnF83dJAYkRv8h4C9PkE6X",
  "key22": "Wm9TC6p2NUwJtyQxDJSVRssS7eUqto5UN9siBExUZgMiwRgYhs6kQRTXzyLpECngFmUGEarDX5MMLFcRLC2a8TG",
  "key23": "4omkgARuX8WaWWYz52UtH9RiNxEd1c1xV68tvy75ehhnqKsr7EV4ssqf33JDmVVxA8yNnsFcRECD4kdukCgHScbr",
  "key24": "MV1ZVSCPNpAvMAMqsmb1LPBzcsv6nkAbvLbANDcCUFaXnvwp3Z9aL5RnSN5xP5uURLjotgnuZBmRKoanV5E7Kfa",
  "key25": "62qBuGhTBmfP58nWKSMygmcrvHL8Q5LffVAqgoWZr6Apm5xxQicperfh9BzKUzbaxKhucFLZrXWodRPBe9wHvL1A",
  "key26": "4ywEDRs4Vzq1gk7JShuUB11U4cWNWDK9KBZkYwakNEDLiCYnkvdb8Ev5ACwSvh2YJ22sYaz1FCqvTf6mXFGuAwp",
  "key27": "4GtYJAmVtX8oLQ8mYXPr4WWVXod1gyta9junqjPq2rSjygiAvd3ofvdbwnuUxYPR92oXYJzygoFpTQo3WbbHcD3",
  "key28": "2DZKtUzrijQMvbojNz2KFfpdvH8xh3YCgMRGWeJs4PQrKtBxjAUP9RfLM3MZzN3DmddYKnjxAqxdyTcn34RvDx3m",
  "key29": "35cCK9Y2PNC3FSixRjmoDv9UCA9gQNKkvWBrCF8fWZdU2Xx9TjYMuzacP45A2MNMvH4qgfFqFUu5ASjh5PDSfM38",
  "key30": "eC5QBwZPaUxDRq4ao4hwzceEZh5cEm9bVGpKWvR6mfbSDtQEwmQViSy4r2ViBXaSsnxefx8YtTPhwafZn6A9EpQ",
  "key31": "4D4HrRXeKHocnZZjU57KmYNqHngk2MbbbnQ39Yj4LWd5BWrNbYrfEbv7RT4Xcr45aqfiriKuHnMAggtQQCUoa2zM",
  "key32": "3G9snSCG64et187rFurfukYx3fZA3ddGFeoLngc8j5PRDQgcLEwcSH1uLek9NAdt3gzVQNCsEYdgYTgoJtC7RxvN",
  "key33": "kERp1vQ9GwQBL3ykztyZdg7wqamZzL27GN6JsGBywP4Wpva5WcXym1zt769vqghCH8HPX3hAoEVJCgPVGYG3pPW",
  "key34": "3mtbRr2LCKhJ4Zcwj9XkQFxVVqaPwGQZMWamCbgArswfQ9ZJz3QmesMFDJChgXUPBwGtqi6hBeirREwCnsVAhGwq",
  "key35": "5rmzRsqxdAb4Ui2ooiH66cbidLXQTgjSkdicD1z5iDBUZZZLqB9DjbG6E38ptJUgTwY8b1JvFdkvqwc5kCX8eFa2",
  "key36": "2UndSUp9VrU7DZzvjEMxyJM622b6md35JJvcxS7PgFJ76wr9kLNvuuX4M8UNtehTAbaWey5y2UxAGmw3eA1VUgvK",
  "key37": "2ZxrBZz1A7CwQcPQxHuykrV814vfe2vgDv85C74AYGunrrPzXLxo9exVDTZTQvThZL3B7BRLh3TgCxpPtBppWVaG",
  "key38": "2oLMQZGKnLhhJQ4m7deeELz4TsXy24keizKePqn3MvKhRCDfSHUzC5VLiGTHpUEiGo9u2z5RBJbcKJYX3uHx4FaB",
  "key39": "2Apu3cQrXczfYRw5KiCHeYnSEg1MkBSVJB6oDUQjDEYiwVVxTrzfd2oU1gcfoixsZHwHuuuk2PHFiUBTdbzSpFCq"
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
