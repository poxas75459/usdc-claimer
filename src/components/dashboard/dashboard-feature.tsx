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
    "2YokuMGD9eP2LXZBNksdvYRPGxjWgfZD8GxdekRhpybFg6z7qtyLAjuhfZpZgBdnjxLSkAyiJRBtSyZLcQzXnRsj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JQQXNVau9Wt8RhkUL4Td7f3STkz2A4TeMiw1mGxGs5d84Z4nvUbsagGrReT2ErgZ33XhY7pkdcffVQ2x4RLi4mX",
  "key1": "UK7rxPdimUhFrPD6BSuNvKGRDpcS7VyyVTvFLMXmauBB11KjYK6YRv8M7dMYU63Ze9TB2Ku9peK9sDoJByrkt7G",
  "key2": "36r5CwSnj4rVquf3h1Yf5LZDJFTYJT7kV4n9U8iK33gYjJAEyHAKaLjsrhGz2QcByT3JpZwC3Ve7SKMTujtvTQFF",
  "key3": "2i4zFBdcE7NoJDNMQMMPCNKttnfNP9AyQNzTA5bur9kMd3eNZaDRe4LRUJwrC24dTs8sRGV3TzdDYCibpdQME2Sb",
  "key4": "4u5Ez6XYPkJT4U6XmnxLDKfwX5bRpuUDmCbA2sb8CJMTG39jcYpxoBfpGN78gQToQ941rTRFQbH52XkJL6ifSRJ2",
  "key5": "Q13jNVFgAz3vhXhZMQexA5eZeF4offgJPwStUDZ4sryemETgk7ko1mcNEmSyQeQXS9Ft7Bdo9X8rQh6Pq1VAFNS",
  "key6": "3o8NxCvhssvP9t1PRHUPjRBxaVGDwuyEdHCpGnFuogRqCRkbXpEV7jj6Vj5fhYp3mBCTsv8GCmGwmb92w4FrPRNj",
  "key7": "4PfpxYAdCcvGJDGCMMrYWVBiwwERfDiJYxBXec2Ef1mR2BtbpW1ioh23cSj2TBPhPau2YtgNxVd4ZAmVzSUEEygY",
  "key8": "3vdT9WMFzUNFJuuVMLk3cTQi3UKEyBdaEEqaqdZqbqV7ghrwb6dTpJhikaHyvPtPKD5yzck66ktkDEr2nnEH5K6d",
  "key9": "K4TDy8Ff2mo1JRi3iDiysW9jAvQ7QAarocYsCs22GzYi6W1CqPLiUipwy4TVy5EZqWvbKNM5kgxGLWbx5NWztEe",
  "key10": "4sRxBBfDDWaduTCNU86XL1N3SFjbEHtCufNP9yuSjkraSLQ1k59fEdyM1T7YGBuu5VC3gn4ELjsg5mb6QA9fhoUD",
  "key11": "53cg5pt5YQUXMGNp8stqsMz5wf8mw1kiVu8sc5wER2twUYxoiR1saT2w64HyMavm9RDS73rbeddbaoft2ua7cmfi",
  "key12": "iggUmrrPdeygbUjw7DLjqJD9dGuQNzAjYjaMvpBhF9WUNQVCiBLABYQs3nTjUm1Kw6jKsrjSx1pKzJesymXfii9",
  "key13": "4HBNG8Ni1TDgB8hMy4p2pfPsHFs14o6ns853XihBhzVDr4ijnJSMSf4W5TDcc23Y4QLcpNmd61Dgs3q7BPmgeSVT",
  "key14": "2Rq9WNhZ73XhF5iiqJQDScUzMsgAY7fbEQBQWcbFdM8BHnWQBQWzpkV6bvYzynWPub9ycTKX4K3jyjra1LGFKv81",
  "key15": "2SHbRGq8SwZkv7CoHcBs3R92MKcUu8gicEvT4g7gaQu1KQKoQ1Mro4frshSWW5Q45rkiXyrpTwGkiuDsP15gBNnq",
  "key16": "2PXDcWv1WBsEgtaX1cSogkYGQHJwjBqRSdK9XJvVVVjs655hyMk5x6gTs2fyUEeeTT2uoggWDWkwbcTvXgQTPFC2",
  "key17": "CtjhqWbGacgHCpfA35VrC65JypLjuVhRGGysTrsK5y5AUBGEXR8V3tq4PsGsikm7YjY8BFZQD3mJkTLszjjUNH9",
  "key18": "61vbWJZthsH7zXwAHQD1SYt13btDUUyePQM1Fv1VdySbA1XzuatzQPqtMDi6AudRbDND1GEhq5q1SugA2pawbgHq",
  "key19": "56KmiqaDRZTjPskKsmaEeMaxxxQixu7tZYeiQGQL5d8NQcaATd9zzxgu6LYw3uuxGntgXpeX41ZTQBYBL5gxs1yw",
  "key20": "muFdfiHwZDdZfm8cQTT24zFv2SBLjeg9A3ZJS8QVg6XXAsfABfjA3qjDikAa8gk52rATvnQ4AJfUPnahpzrgo8w",
  "key21": "4RU7hd1Xce3VDNJrH2tCv6utk2nqfh4rFDeXfKBWFgkK3NHDi8EZGu9mYQQZdfvHrSwGUyzb6GM9UpUNPLETQKzr",
  "key22": "4qmwN7dPDdAGdSQU3Nt6Aa8LbjXHqiyvt9zCGqbgYSkFRyMKJzNm39NYjJRp8bRygd82TWYyPauYhUgSxZAFBP4G",
  "key23": "5sM61bfTmefN3Who4cCA8TJwVFthjT1vf7kLdpYganxgQ1KnUJUbt9mQjQZ3S4ZdWtoJZaCPGnH2EWkvrJWC2Yqa",
  "key24": "2kRcSmeJjzNRuNugovq63TqNGgG4DvPwqXrJkKKTT31ZtiWeSpPpumU45UVrXe5ycCoEj2JLV8qccETCAahvU55b",
  "key25": "GE3iTXPCxpbZ5aSHx6bo1BEVmY3R61ojRnbvhaV5EAYMc5aPPbyufDi1q6ySQ2nNqhThS6t88X7v6YU4VYL77CF",
  "key26": "2HNbEnzhR6Co3uqb7Nn9TwgisqCxXN7g6jAkcFLN3mjUeNq6o6vwx3TVKYHZMwEqSLZ5LJchmAWfU7ctNUmMk8Hf",
  "key27": "2FXuqFp67m1XjFAr7JGi9h12eyGfyAf58eUqyvLDXZrrFskQSnYRzJTSxkWEDQLR7HqC67MiQaekHQXS6f7cpibz",
  "key28": "bVN7YJFm9gosxhm1bUCPbcfasrrBtPway6QvttS4CcGWjkqn7DBZ9zobDeZw51xyhbCsDZVkdYexegH7WgUuGSp",
  "key29": "3zTKkLAFwKjB3aHi2J3Hu7NbPcQCi3MdPF3Fd1b8jSPemxUHJpXQcepFwVpyBZKqoWgJ9rq2kxN5Ff1h3TJan8UM",
  "key30": "ywC3sfqEKDJSGeN3j4hp7gBjzic9jR9btUfYnxMvoWmytNUccqWipkwEiqR3JAm1cu9BzvdowzgoSwosXcEdYH1",
  "key31": "2AzLy2H889Zu5wEry2PaAEbDESFBL4BNx5UZrN1Coy1yw2EfJuUjCERfyu2QkLcvGWSsXsqMPgcPaT7PFbXzb3QX",
  "key32": "43Jj2psXv7pWtHTCuSFN1YdTmVACogNJVvc4DtnWoNdX7fqfRyBSHpjnFJBfsc9RF1BQDyiipUMvqJLGSanmpPpg",
  "key33": "125BuXZm73WsWo7apezmyRHfW9MzDSc5q1BS26RQU2a9NqvHZ3QLDx3qNcA2MuM7ZmznPKMALdQ5wzgSp1bKmQN8",
  "key34": "5hCsThWicioT63FiGwyV8jpxGi4VNEdATeNHYPq7oETZvH3TbBZk6hrDwzK7HwAgGXxmsNYyeNtgWhbf4bjYbQMK",
  "key35": "4FxKLGB7XWwCzubtirBohoqS8xW9S94jRMyUyCzP7NKSvVnXdZdVuzj2P5yW7aQVTvCtN6C5D5wEVgfZppQ9WjsJ",
  "key36": "tXMD7EHVaiL4qFwECuhoVVY637eitmXMscwwrW3EHye6TiTHSZQzFkURJboe7t3y83rM6CW4zEqdCm3qAV7Nwn9",
  "key37": "2KQ3EKJiyo2jSoj7GYZBVweQh3RgjrgcbZ4mgzGWvdxLMy1rHdSLGQUADAVaPWZU9RAzhSKwsMZ6AHpFjGgVcKnX",
  "key38": "2Bzy88c6Gxj1YpzB4CYY8TsKkvLBw3CFu2gc281A9x2xhrETAR1zT81uh3PtuwmdJZ1yqYmsYUdNoJinsjW5bu64",
  "key39": "2jpCy4LBBjbxKU8e1Rsk9ErcjDd5D6juFP24rdQgRY3SD1yyT3YHsnnSZrigWeAcNwvv5eo2jwf5YZvkCGUiASTq",
  "key40": "4k6bqbU5PUt96dcALXaoXFAiUfWKRgA9nzpHwHoBD6myuTdmoTi4Yyy6imBTujMrtGvqp2njoegot8d6CHdphTPx",
  "key41": "2NEiXGEncnUpt4FYyAYdNhf6ToTfDJ41UWNnKqizNUFivZtLCuwXE5ZxTPsAwHjukr7JSCrTaQ3zH7yUSgR7ZtD",
  "key42": "4V84LUE65ePYXEHKbwxd8MTGAg4dfj5i5kFMr6cTRpFa1dWrQcdxGuJpeCw9deS5ypjCa5xMxhCqYGvrKkp2VvG5",
  "key43": "fJBkEoBoEZgpNWrshT4Egrz95tPkog2mFHFQFD1sWDngWZZgR8rAvnDCgxgJCPybkRLVmD568U7xVFibtMfQ1zH",
  "key44": "5F2e575fUvKoiW9VMqLU9Yqc2yBrPsZx9nFoZDgShf6QDTsMTbppkEdUgYTyaCFoZFn52KvqV3uP9jLQ9Fsz2eki",
  "key45": "hBtTzjG25W8xwh8hZS5G2V2MUdrsku8s2Y6kHkPFWHqqGm7thru4YDxqDSCYssE3AqsoHKhLVU9WnTxqAqbiSi8",
  "key46": "3ddivUddX6sT7DMPrmVhyzJJJfXa92wRRfPcqunE1DWU4E4Viggp4cwm2Ct42StQnLoiFpaDqU5HhAg2pViLnsur",
  "key47": "3KkLNKJBhB5bsuVgC93wy4F7ca8vmVBkSwQ1qgNbvfAns1ZP5MkTGooQ1jWjPBbxfq3212hZCgLpN8DyMVbmmBVD",
  "key48": "2Md9GPxpKHHoMRXe3ux6f2146YRPBHv42m69n8RMuV63wkZzrLvnNsBSRF5a6tFA9f72DRqAebiPM7EZdte249wG",
  "key49": "7EraXmTqw6aMzFbKjGV2icDhcWBCp8Bgj57GPLtY41T7ZY8TK21TuBSZQsVs4619fYquTJwhS9DwosbbXKUT1Ew"
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
