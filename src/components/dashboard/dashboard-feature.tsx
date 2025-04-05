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
    "48sp6bXFDEq9B5HPSdr3PZbcAWXm1qL1ag7Wm5Wmy99hz736k9EVo6ugRUkdQTomiQvnT4xm2muTQTdUWGJQWnvR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PWrw9E2UduBesUeX3qaxEmrNosCSs1oXYhAkEpzMAtKyS6mw3TFkUUW1tZTQFG4pkFq7vYjbMXiMxUdSsyvqgeK",
  "key1": "67CcvM9P1LbwhyDVSJuvongX75EJWeCHx4SjFNgVKGqS5JE8AozaHdtGs4JnhqTnGkDteKywd8Yv9DYJgsYN4PB4",
  "key2": "3k2SXq1W3kr1jbWy3md2NzE39Zg8rRCKCdXMh1vq2rHS5S2pgUxZbrzwjgVwS1348UMnuH16mSixy9pYZdFLmQjF",
  "key3": "3eAGhLEzFuu8iS9dqxmGxp6h15uVvLaXoqCyffDjsUTttScp5gVeUQVSsg7Fm8HUj6SuVJFN3MXbbyvyRwSHYBcZ",
  "key4": "2qHRNtTCghW2kAUSQj5uYh2EuqeVwveV1i9SnSK27qY85U1ptZj3o4mk1L2rqcF7e5eZu6fPRuGJmpAks5yCXB9w",
  "key5": "2vjv93BKTRQmPtBVYT5ZomotkteDScYM3Bg52i2Z4gA5mZpJSjURXt2h8eL8gBcjduRyvjXm8cmVurTSbsAjqJXL",
  "key6": "3camaFiywSQjk7V9rgi5eFMXdoNNqkiVp2LZpQUbomvwpX8LtAMqeAGp98Rg8q757HkbbtRYtSntgAZYoA2pWx4C",
  "key7": "4sJrJ7cTueggxAJx6ctp9D66NrQTMq5J15YuwkBUjuJwJVpUo9WwFC2tmRUq1xcLtRZDcDzDFVPYtEKMZKihCd2f",
  "key8": "3ikjNz93TJ59Eabmb7o779m6j5bzzBk7MW2mPro2DwwsxCgPKwELS65R1TQnXfvWPUYMwjqzmqcMuRES8KUbT4ys",
  "key9": "3M6xuxsjgqYdoMLBuM8knBt6PkpzJpJXy8Lj1Cj8rssWF7j7M3ZNEUhhfFnDnEKEUrLuPaxsLhfFSaLJ9u131UDZ",
  "key10": "AVT3Fs5ZWYz7aN5gthGKoymqXMexYJ2KrFeV1PbQ9wjfxYwxFJTrH53EigcKA6wGJPn95gJvQrTjewUKjRZ7HmA",
  "key11": "iKwck3ePNxDM1ctH6JgsXNXWQ3Y65E5n5Rv5DLoxEDZmwQddCPwLTyziXniZD3r71suvBFwo5YuCG6XW76HZDbf",
  "key12": "2ajZbztgMDpcYJLcNqrT3tQV9QeMuseRXWEUFD7XVpUrFcdDSYTMWUqhvGzU6Et8q8k4TGzthhmuvpeh3UoDY4Fy",
  "key13": "3466zPGaQurTPVDXPStn27HF5vn5zdfYwYYG4AkgAq6SN6JU5gEAmvPbA6P9ewxFhsSAcBUkSvSqAHL3bcvnNNMS",
  "key14": "2iNBq1cFF1HJcUHk9dAmjfkJBDGuevaSXhsvXU2Kemx2PSnBWF9EhraJTha4aKtfRg9z21Rdvf8EMQyxehTHtzRM",
  "key15": "4oBqNJadQ9sCgYwCYjhAZieKfryDmjpsuj24coacgnJxZmEnTaoTELKyB86S8f7jp9Y86oSf1xUFFqyAc8sNKcJr",
  "key16": "4a7rmjs2U3rXFXfQ9mTNrkSFMVivQQzFSw8DweZhEjeWPRmSw9wJ7xUKJc6q3zRyDaDbPCJxLdGjfUGhug7QnHY3",
  "key17": "4XAsmyaFLRGUYyhWGjKvpFBR25MDSNkdtjr67VMWFJm7tVm1EDxF7YBPANsBNETMdFEP7eUTQBNTHeGrTBNRWA24",
  "key18": "5TktZ3YKkFp8u9PzpZ7CF5p6oK5MdZx3AnrcQVYkEG14BzreNgmHPRbaebCNjKiM8TTvnc5ngs1fhaRsiVz1y7Nk",
  "key19": "2CM4CAgDaFtRN86wXDjCxXTfhC892oBNYzmWnu1Mye9Ppb1F3Uu7ou4KB2D3xu25iKx4oU9SnjnFchXzUQwu8Lja",
  "key20": "3vKp7zfN3r28WVNxyyvKTHxnCtSRK2hwqVy6mhaebuVHtNjwyGq1HctNxEjRn1rdhapdMTcpodAnkohHwYQFi8bZ",
  "key21": "3a4yimMtHZAfE5U9Rd1bwbXSn9hzC2AYTy5wFUGQeekNdQYbautYJzmfB7UPRGyMhZJ6pmYmBEVJXuDC99e4yM1D",
  "key22": "5tm2JZ8ppr1UdztzbsDDeksPBs1sY95KPnKZzWtr9Jhy1AQc8XgEn7XB1iNKWf4S9mq1sZWo5XQ7NN1vpf9k3fhg",
  "key23": "Q2FbUVzMQmezLW5bdCJWr1qcCRPGUyXUn8m7FChxEWkQSRF96dcvjG72qBZGtVhP2ZnRjbMWzqD4W8tArYsU2Wo",
  "key24": "2YqhLDQ7v5g87EBYc9mRg9nrwpWYhDU54BAHKoCJctjok5cypd4NxB71wH1YnBtMT9YAmg3ySah3R4xYcVnkq9NU",
  "key25": "5yD5yd5BHv8ZKrYJUfUbx5GQavVQzrKhvTxnvXoyzQHwFLBPXF8Lrg4BizPkHhDMKqWGDG5azEiLPnhQNYvDiTHA",
  "key26": "2yK1VcwrHG7CgHtdGTxrpexfYuUmbNqU5NhYmJi4f5BmwJky6AeaHroovKKJn4Z7P3GoHSFR5VXw11MT4e97gqSZ",
  "key27": "4vU4kpxPrjTGfVCiwkER6hr5DcpXySPYMFUsLftydcRhUWcB24GMHewDCJvX5DMPJ1ZWrkQNd74Kb1iecSXQMz7i",
  "key28": "5SZBMfQ2J3qSSTQ2QwL8k8TBi1DsF7EZ5K4VoF9LWW6cTUTsfhnH8UG8vAZGvrQW74dgaYSzLdPXNu1oG2xshkHK",
  "key29": "2sA3JhkE29RNAEQ1JF9htCqYgJe4mfRW9tRzn2g5MvRApdLe8NH2U2veiSvTMaywU6vD6bt6Xh9EoiGCGbw4hfqf",
  "key30": "svnApnYhM6h4YXcFsBxDYq2413n4XwjLNjho7Vpnmac2RZgS3586VJ4JKeJUTPY1w2z2z8j6cy3iJmud2cGMgW2",
  "key31": "4VTsSDAbDDYDyyedzJZCCQNZQtHnKeu33HsZeb3KCxqEvysnqq1b9h1DCgWnTXqgTM555LtxsiPvnBgcAbUTJzUy",
  "key32": "3WeM7qhV7yEhbdNqm5H34HfySbTBd5CSMHuex2VPTSEsQAgqLAhCgy7PUMzDfcg4bKXdLSBmMjtv6swpBXaobh69",
  "key33": "5jKY7vZJAdtWbHJjbU4zTYjoNFBhGb6P7wo9SPGspz9TAX3SRPpVqLoZ2eFeN5qAJQ6ByGdk2dGg9csaNS3k6dKQ",
  "key34": "5mxKmPKBCbApuGXairRiTfYUw9HumZthMnpB28Dix1xxQZZfJjjfqeTh4f4BiCgeiwg8fQM8w4NBMG4mp6VzmAmT",
  "key35": "33Gpy8eLm89MxUrFS6LYsvVS6a22WLGDbrcXRGQMbcjWkyVUwULyAFFMAT9qfY6YpVaVQjiu5kJaFHkirYDf5rmh",
  "key36": "5kS6SSn35HWhoS6QyDbMABYSeoFgW9uLcwm6ycVuU8Yi5HnnTfb3jHbKpP58n4a82nYnfkJvTEtaMtYxSds2duiu",
  "key37": "3mWeBaH1VyVucNatLByfEZirV1ohCRyHNtaBisbJPHW7KcSDXqDhyg6LL9m4Z7hn9crFJbRWuqzTFbUxzAuTt9XR",
  "key38": "3XAiiNaNBL8X5JfEXnKGfvprUsUGaD45vzUYYBB38tb4yCcY5hmof7nT7pPxndP2TD6Zhmow7fDASYwxd4tYBjRu",
  "key39": "3fBWeRb3DddyuZa2x8JBweBZDeCHWiFvQvSgZjzuG9kDyK6g52wx6QtVEBjRbpizCbw8jMTx3QbGA15YNKPSSkoT",
  "key40": "UQbTPKgXviEguQTB4qd1GHuEqmEoQLuinLSSyGGG8wwBVBWc9jbkqntgKsMm3T33qbRFXK9uAT3NsYbqcvXRx6M",
  "key41": "G6AJ5tYZtL1WLFfAJkc4fH1pz14YzyuuR9AahxNePQNZWa82XD9Zrm5MTmdka2jDxjLEhyhLMMS8vUcxvDY6vvN",
  "key42": "43p44cjdXqcPn1nDwFJoo2uajjNcwixjE8F37vXXBnPHmdaPjmYffpRXQ9yvR87zJ7Wk4iiCpXi1rm2rq2K2R6Tx",
  "key43": "n3qv2XK4aRmyssoqyt6w3VgAg6j6bcWbjdNdtVW8dCkTQok23xBmHjZbHVTSKt7yJDqhVuw1bnXBa4yMnhfEBDF"
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
