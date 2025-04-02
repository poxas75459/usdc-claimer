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
    "41KzbsTLLD8rtJpMiVqRG6SgxX9PL19Jh1taaEkoS3ddHo59FeGrHTAueBjwjHfmzbw5rGM1GJMMiGrzUzRaPDRr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ub58hQQiRobhkNW6iBQAocF41HyciKT35oCmiUVEBhntZEzP3BKbGiMjEwV31ywPJw8P5GZkWRD4CzvoVcN3rjU",
  "key1": "2AQWCwxjCgMQbKE9X2evD7rfKy8gKeyF9is9Jr46VPvJsz4zCazGhtAhkw4C5LrpV2Wfn9bbV7Hf9pxHvrMWwAML",
  "key2": "WxS5vohoV2WrRX3d9MWbxNgz6tPGLz4fo9kR7xCFFKiNcnWzeNHE3jT3xwVMoWiLxoBCtpek5YiJnjLm5kPdBhx",
  "key3": "2E3MhubBmJT1QZBbsC6L1rGVBaN6Y1s6XBohYaRW9zGskKiuSNBaibwGUX1Vn1UCinrUh1xhcJsJ5PMxKV5qLo2x",
  "key4": "YgKRPeWcvBZfaXnYdbKZyP4dG638mKSHuGrjx4m7gugpxWRqfnVEbTQRNndFSMrxKTNSahF1hyg9zFDFahb3mF8",
  "key5": "5ZEB34Pyf2g3JKh2rRTZyH8zSWFmi3B7xwYAMmBykdHPj8wxARYhSH3QdP6qwDuM25ff2RVrbDih5cwvbxA4vqXK",
  "key6": "3st5CDFWh78W5mUEkoN3rtjr6k3ZmxREyZdyRy2SMKE2yuensQ58vM3nYZeeqTC2rfhGiA3fnhzz1NqvZ8WFKnCa",
  "key7": "RYKyxvmxm4avt2b71QZZ947MB2r9Xevz9m5Mfzja2wDFDmQ7cQQM3o7Ya82mFAhH9vXjk3aKqcWWqJgyH3rpDfR",
  "key8": "2RLmEUiB4HvgBrfpKi2HnEWE81AMUcie3zzjm6EhFTAscRgqA6hcgP2qbgAbscMVWfo5NTqq7h1bhT3ZJnPUpYkL",
  "key9": "5T68H4uxCuTWVbEb6DKsJF1pbEYPNvHckDdyX7aRp8E6rsW6skok8CxhHrVLo4eDfdw79BANyyRuPzgp6Sei9PcH",
  "key10": "2hzcD4YkqHf1nWFFYTx1RyqPJnNUVE8DPZVCiLdGiVQYwTsUddrVtWCCxDpY8agSMMLAtYB6UoDJKcT5vVvvYegQ",
  "key11": "BhdFB5QbaPXrCi4dfen4Lb9cQLxZtMJHFFyjfr55epBFtB7b6ZXqWmksGyaKSMqPVN6d4ttcAotPCH8ujLarjHT",
  "key12": "xRbRjNts6hwYsWW87zqUaeuyUNqGmMag38Ft5gK2UPvJBsTLRoEiemWRknEoe1t1KaVUrjqiqr8xSAeDUwppzzf",
  "key13": "2CfVHwVqWDMuMkaWES3mkrb3oNhXx6XhaYAuRSghLM9ipW8wQEeYwBsJBW9ocympjPNy4jJZPyrtgePqW2LQnaw3",
  "key14": "Ef8jG3QKbVZC8igd1ziz7rCRDWMnwgmk3KbRoyPWQq2WUaJfEz88HCSHvc4XhAQEj3PAC1o13JFMdfpSrYyjSDr",
  "key15": "wAiAGKYhzCcWgMAQoNUhw8BNmtfoaApWHmxBngxW34WUHVzQcCKFH5Vua1f4QaVZBrXro7Q13W2vBwyti8jfJUr",
  "key16": "3SgKv83Cn4PHeMxTpre3dzMmAKx5JnKWjUhRAKbs1HpphUXQz9Xaygg6WQiQ89qRzadbxZsF6k8JqGCq3VwZUXdD",
  "key17": "4y3XXeSg6M6wdjruk4mdQ86qbYdGfDMmSVgQDcngyxbtmEGsxA7wAhhxHsu5D8fmbxXR4ESswgsEB8P4h4ZCk9ix",
  "key18": "3YVtuSNZGGT7L17GBBQB3j696ECfVMDfTU8BWTMsxYk3VQ3syzb3CTMiwYFtdtRJzmkZyTbsNe8Mkp8FqhCm464P",
  "key19": "2h31qumXUu4DHHmBABHhiCLyfTeTXGeQXgrophziQQ4vkXGgkFt5EoJxbbx5ySzQL5gbZgsncFHCVBvgYggmPJJP",
  "key20": "3NFkJDLA2b7pgmt25nGpi1Ms7KCzA1oQmEVS6mWQiy3Gbu81td1GnDivkiYEL2mokGEr2axjbH5NTEDiJHzNmZF3",
  "key21": "btDbGB8gfuWcH2Ax7UXohppPeCTJ8i1HGC2mPNMaRGKYoBt8Bj5u43jEw5UXgugapRwmEJQsdZFsXxZj335snJ7",
  "key22": "353g1XboXzCDYkzQqdsgoQyMcfi8xA2c6Xh4w7chbHHNW4LeKk5KkYWr6WnzHWMZmoPLDpqEdd1XaKfkp19CAPTd",
  "key23": "3WQCXuFffVLTG4Ko7gxQSuCaBjWHws28hox6rzYvvfe5NEecopuv8EiFtGKxGHuwapXf77tfs2JroRTxfzfzG2BT",
  "key24": "3EnstYBFqJ2GEBX9sh7ELLdP7DFyeu4kZ3Fa53B6u4WNMiGJh7naF49j1o37eB4eBb5vD8d7RBnxhMcVNrEnLVva",
  "key25": "6dPKgWLzE8zYsv4aJCQzpYmrdVomayqYYFLd73sx77Q3S3WSHw6zXMv7Jyavie9Rq7GNESYP1Dvb6ZGbyYbmcBs",
  "key26": "2EFLVpYM9Gbdria6WPQQesBwP2PsCwvqq4h8YdxT4UQXVGyhEYsNDdM4gunUSWshV9wzPoxbtUG3zdHjZYFS4ENR",
  "key27": "63eTeVcTeVWAj9hdLPzaL75HMVTUf2ZWo6NT1p6QokGoENzsnhwWGEPjbUGUh2ZHcv1JBdhQuVCdK1EZCx39vqAW",
  "key28": "5hoiCL9YGRGx3NnRzNG6zwuUgcedX69LWHGjsEven44Nv1H7ZqALujBocCEkJKvBH2PfpbbK7qejMGXMgjVMC6qQ",
  "key29": "ddF88JUHuNvnEwxLW41Ejbajj6HqXe779ecf6JW32cx4Jz2T4otjnWRugPE4Wwj2x7C8U8duxtJA3X4AR1Rrq7m",
  "key30": "3Eo8s9rvRv5MZ5dA44qKEWWgWgLe58fbpu8VLTHSkTXQyCNCVhsbBc32dG4tmin8XhBSn3K1QmhVTsi9hhX5mAie",
  "key31": "2zCxBYR7Cmi44AadtZQw7mmJ7TahrjRq4ABKAR3hZW4HTVeaRxKnDn8Zct7gJri2RVaQG8nnS5jesae3waEq9pA7",
  "key32": "5XxSUY5ybnXQY9Z1XHNq8StnLNCzdKskxd5WnqMSBF2jqAjn8JqrK6LbxqnMYkd1VUXcJiY4gApU4wUiL6w2vJkg",
  "key33": "5rTNWh4pAFdpmivJJDPdKBB9kq5T4etdXYjG4CpCK5QVVCxpaqoN1brUPcxGWd7FDMjRB49xEUCe9KHp68ewkatJ",
  "key34": "3nvKeHzepUMnK4fmfZDyKf7C3pjEcgts22xQKz9KKb5KA32BWBZHzW8AS9ZEZkoeryig2d35H2PGP488U8geTEmr",
  "key35": "bCnuDgqJ9QSpaZSiCDh99pSLTE2XEwTXBfGBdQZvYWw9wrNRK5w6vFTT43BRCn58AMfcjo3xjgarvZf5Svw8MsB",
  "key36": "4yGZsTqtFC57QdLpKwJkDgpvm2mdBmwnwuKsckjRXSnkyHwhaFQYMxQc9Px43wvYEhSk7d7QqQri8SCF2kxUzcdi",
  "key37": "2x41i8buGyxpuws41Ktdc64D22VJFizdQoxDq2e5ixCxcbHym1z2ULW9GiqWLt5nPTahD8c9hw99KBP5A2NTmLPu",
  "key38": "4Q3M1PMWMK8z7c1ZhFZMV1eyWGwDSi91M9SN12QJ7TPduqN9U43K9hTv21tfiUdthQmFHtbhjVDY5do51W2vuH7S",
  "key39": "5ngT68rxotJSmmjSyqHUjvLhNaAoLw2HdSHPDBJ1vogYYBKCzYfk3raSnVDEkwmWd87u2dtL24GgjnN7rZA7PnTe",
  "key40": "2QcgDgQMXSuG5vP8P4JKr1jgsRoBRRf5Noz1b4eDoBtyzDWghWb1fHjw48D9iW685AwGfcCGh6BJdL2vbqSbSGm2",
  "key41": "1UgPZdGxsoDVgLAMEesw7yEh69gXqgBhe6DLKpxQHax1SUGdBkFJ67AgieXmMJ8jWzzCaVfj8YYcBrbECQ6Vynj",
  "key42": "6uxwjjj4qfDshuX4pHA7Za3hn2uAUaQKLurrrhWbbnzcoPA1QFdCuix9pYDqwf6SWidtXHKadzxFYWGjc62GmH7",
  "key43": "4EWxipPeoaVHqbyt5PYWvoyZ3qPqL3V3Tvkh2DXfpCi1RgHHjyi7UeYyPFhYvtGu7mWejCdXzNijXMv533ZkxKQC"
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
