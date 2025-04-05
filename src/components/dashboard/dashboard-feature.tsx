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
    "4wZXV6T3oKQZUiPdjtPopDskHL1hMYmEcWK5PpTB3BmCAeGearRPd9vKuK1NFpLmBxcPcZLB1j5VLL3BqkBND1fo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KzJoJwHDrx4D5KFmkVYLjmRem6Bkst4fNBoCwGiRpMdMxfM9AQq4ujzYybBvkQJkeKkH6rMkkNfVcWJzWcyEmGY",
  "key1": "5wxAmZyzAse7XjFcd7bZseHhmNqr3uqMMbfWL9PoXSRpULpPFaLnwbVXr51mNcupfwR3YX3C61hzyrAKiSiKUuxw",
  "key2": "TAJVM9vQYhTSknyUiJFMSNYcgDizbpdvr7pNQFg9Rpncj9fxkgyFeDahjfybsbwWPqH3tqoGtuaQMyWLb8LByrg",
  "key3": "35t8BsWEyJQCenrRMxa51b4HmqK3qA6o3pDwtinE9WE4TQwv4PRR1nuGJyLXaRvn3Y966RsvEfJ8UkwZZ1R7tj3w",
  "key4": "4czE9vvFKmKrWGxHvbK1bzJZtA69WdzqtDUaQYr87y84npLx9LX1BHnpX5Dr5SeXS9exW4LQU25y5k8b1GJrCNYd",
  "key5": "487157sv5CRUFKNB12xPYk7v4bUMVkSFSq3G7nVarrtwxFJzRyb3Qy4W1PuGM44TRQNeT57Ztyskt2hj6siwyke2",
  "key6": "3Vd7p9Ljna3T3uNd3ybpWcvSro2666W5WCKfGHyy6obkEwPcsR5JoXjyTvnPXZd15bcT6M4kDxKsbjgiM8EPJJ29",
  "key7": "26zAjSvqP7LuEdibdAZKhVQWF5kxpCw57XXnyFkX6Q49YrofFq2vToe3ecGiPhkL1QxCuUYUHbZE5zWF6tJk6nTe",
  "key8": "5ThRwpfRaTZjdpVPGjyquVqPgt5zvSvwpcYr8N1SyTPNYG72GDdzr7AULj36hoZ7q6e1h9SGGyj6udi6rKbwCGgh",
  "key9": "3p1e2Xi4GP5W29uYPp6A54Z1UKVDuEG75AK33NgyUV5MxHCnYeMvD2snEqLizp8cPuUaDGHfUmHdeHMpW9CkHt49",
  "key10": "4DLvTHTekqAHHbwjceSsnWJMmUA1DAjsKV3xtUJ9Ma15kvvkopzi9GYDvn5jFp94LNg4RZXLdaDP5ZbrqNRvBQyY",
  "key11": "2ZGJfLpeBj7aWag3qvbbnunTVVFMx2Qyy6CBE8YFdTBdxkvN98PmgBZoStcUTX4G74g7yZQSk74KcpAC9ULu97QE",
  "key12": "5H4aJcZ582TVPQtzp733QkM4biK34Ni8p3DHdvzRWthwVHB7a2aQA6SJGmZQnYMVcH76dPL4MapFzvdX5etUZzoB",
  "key13": "5ryJkZ78U1AG3M5w9EWnTQFumcKKog4q7MqGPeHC3S5xx4vK8jXXwuJumvHH5FZMoLjJbhvZhtbCYSydaJcFLMy1",
  "key14": "sKjzfVEUF4f5utXpc5iNaAGEG9FxXv5kuZ2Nm1cJ6EUnpYwkLmENZJPpTeqeB2vddKVJzpAsqXC56heCwSEMEdk",
  "key15": "4ARLbBV2Qcv6moNNr9wvvnnNJYRDw4D4EousdZXRyvHGMphNccgQDFhVRc3FtZ1sTX8q1r6sBDKpvxgkGtEZLkz4",
  "key16": "KENdU7c5vVTR1xUXiAAFFV6iiVJHJrBQPfTXBNf2coafkbXqew7GWeYp5ek9Edu6xuuKVXjAyN6JPozXyB9FiAC",
  "key17": "5fnxuPEWJ42GDvuTUkzAiF1itXGZddbmFZ6wv8ZM4syEKhPoiV3v5B5azquSibBnjsYmXHCrLbCTY2mYCgXA5Nxm",
  "key18": "4MyHPLjahydWxQovajD6N5Wv9v8fe84f83kdPkWKxzCAUzoyouLSSvddhkFV2LX6vgwbN2LfWp8TMaHN6jx4LFEj",
  "key19": "sBQCFr2kLnqB9ZPVsFXQXVuyWMg8qzvsR3psYrhFoMz74t7nRpXpxY7sDyk7MVHgvpFhKr2UCbzizbWEYe2VX3w",
  "key20": "CJpQwxbs7i9owEsyCsE4F4pFdzmoExq3EKgskJAac3ZX72tW7GtFUnDSaQc2dHrjoJfN8t24rJZg2mt6DzZM35W",
  "key21": "UsWaanxFsbVn6vePLWi27PfAjdsrhudJnXsJwKJXLpL5PZnvu1KjUb31hLG92ssbYmptozn4RjhnMuF42NfouaZ",
  "key22": "3DVYgCgRJX4u81ZfeMZKjRW1wbWhFMXZxgu6mcUaJUumpwHt3XRNXLJmVgPWZyr3vZncDvikVm4nRdiNf8jhV8fM",
  "key23": "4GCT9CZwkZ6orsFPUH5fhpnvHdDumyXuSX6x6ciPeQPfRPibjmJRtd9zyVrLU4Qkkcosg4c5KkxAQQb1BFTbiPGQ",
  "key24": "2TfEayHePeAgPMu4KWiwzRXvjdpHpRaLQ8e7quR54PUCVNLKNtv6BP427JaEobEmPhRfSYAKkgwzRyJpEaiAM3G9",
  "key25": "5facHBtxAWVerG4kjCT2dk5vLTP66qMuJJ5S1tC2m6VYTigrigDdFRrYbnX5YERi6mhbFBNBpuT8MJrTNTXbrQw5",
  "key26": "55wy4cwafhPeGZzTcVT9qdTep8SH6hapCgot6RXJMAm3X63wt9JJwdv8sbHoxQhL9kNaW718EeotKYyu5Jg5ybxq",
  "key27": "L1dgpjraLtUrqmaBeeXVEoCMaoFwBHMtgEu1iLNTecpbtRg5QS1AARj3B53wegzphQ6VhvCzk2z7JxbA32wtgFS",
  "key28": "31yVptGhYLNAYyttrioiTkzPMXJzEK8mAFaNtqfwtrioMWDayZvvQ23C43XTxX8AVq4rwM1Y5cVEVKjAfmXDXkcG",
  "key29": "5Bu8unbsz2yFGNinAXJz5BtApsYrriqUY937kJkMLY4QGUiFiTpXVPcA9S4z6dwa3CtiqfwtDjFfyhwhPy4bWZTG",
  "key30": "2PqrqNBFy9gd4pS5Du4SuuSSYuPZVaStMsSg5vX69NNys3NYx3dnXF74rz13hPfnZmoQLHgYGqBN9ZJbFcGFk3Aa",
  "key31": "3AkeNWuKQ9JhiLk8hdCAk9kMDSZEA6Ydx5SuTBQYb2TfR9vjNmFAHA6HG5hfwx5QaMKC46cJWUXuhagr42HUzuy1",
  "key32": "2u4jamiytkz7Y9h2UDUmwYegvdDXdy3gjt89VWwe8miMXy96Hi5HFgGv8FvGXcirBzatNseVqaeWoiJGfijrF945",
  "key33": "5pBSM3FQgqapAGbQU4HM57M2XMbyjC5qtzEzqozb8vVj3Vu3t3pAoCAHKn3cxcdjh9yAFbQe9d6L3555bECMANoi",
  "key34": "MS66dQDVZZTUWF2Nw9XRKmn2x7xVhZPUai7aF4WjBKmCBiVYuQUJiU2G2h8mr8dYt1jSfnzQEajiAU7YjHdaK9z",
  "key35": "uSb6abMgLwZbYRiVqBQn4cFv2Kf4DzoWXtMmUfnhnttuj3wrAyu6mbPBLSgQ9PunFqFx9yd1hE9HTESpsFjdCzs",
  "key36": "4hhZoFo1cUXhVmYLXHaTeMQQ9GR78op1E3Y9FgdXFRUxEe1GD3voaUSjfx2afVqkuyQzaHxKNuRHmvfPhmgBdgmr",
  "key37": "3D8NxeJ7Chk6nEscsZ9fEiSYZt8bUnvwCzBqQwfewDpaPFQFPzd72Vc1akXnMmJeQxbBEhZ3nnBg3b67JcKfEQZm"
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
