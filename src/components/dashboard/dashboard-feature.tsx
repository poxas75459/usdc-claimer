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
    "52hGQoeoMMdXs6nVij7CBSXT6omdPiNEkFmy87j4iNDaTh8JpxPJDyGNp9xDJ8NoAmwZ1mqFVYFSui3LKtJG9E6S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tgQ2X9kdJU54FkLAkpGjqobmTG3iUuHBENMzNdeF4ocFn3CvyeMX7E59ubhqm3CzE4TXNtPi4K9XVNuWE88zSgf",
  "key1": "2EZosQufgDn74eZSR3qehCpNnLu6YL84zPTUt7FbZuAYhbr844N7rH7jjzmyxvAQrQRr2PgWJyPBgujyf3fUWK3z",
  "key2": "2Z8MRy5P7zcSCqLjQZQKkd58mq3taSeM3gTpFeymMD44YSyYAh5BWkwE3tv2zC1imnQBG3GGLTAF7HfvrYEw6Ayn",
  "key3": "42JNeZ6PD1CvApMpuepMpsqKkpjWaQJiCZip7bWvwZoUiRspwfeCckurNBZw64ZcUbwZBcWCrCdYp2b1xJjTMvwJ",
  "key4": "2hjgdVfUJmqsdwr9WxKdMtBLTdVzQRJ6xf8bJ2nNkYdqUvuByKiizXcChEJkmksu79rwLyCBaSJUa1DUr1cgCvtN",
  "key5": "3D7YDf6yWyDrRyyoTXmQ9F4U7akdYi3kJjtdQ7v7iXS8Vg3aAegyLv6WXTefBs591AvV3Jcr2A7B4CEwhsByWW44",
  "key6": "2BF567q49uKiApnxX9QVGeLg3MEeBjUZZzUWatbbfzvsm1pEjvKDe6NB3UQWmxTxdmaRhZ6fmNCucAJaDr64PkDJ",
  "key7": "5q15gLX7epvtKh9QBiUc9nmmJdjafRonPUzttdkwJ645CQ1NR5RnU2cQjqMJhdccF1WZykgkijLweRttLrDRieKf",
  "key8": "4Euh2hmBn9TmFU3voWMqQsKszZ943myRiLWYygBLGGQESfvfZJRDpNBfRzrApZ3KWFbfjdFrxAddTJ2iv3bghBLz",
  "key9": "2ahE9hwS6JUU8w8xkBMzWTDsSsVZzefmb8HP9qbgyLpyCGPh6mVF3PV7zVaSCMqMdDJMCyviHZNjvbwHCdWvyniN",
  "key10": "orkQmzvxbYvjCmttzQwPmdvLnEHWFjBsHocv2CxET76gERean3vPVcoDgsVqACLxza3d5HdftRzzUQVd3NFmgrX",
  "key11": "67NGFfWdPtEfPrQ1ZFeXgFyRimzfRLqtdhAJxLa7cr2Wz1yrYEzRfHTabqwumctTMsfbGQJ81ShpYcHvj5tqkJsi",
  "key12": "5fVi12WzbZWWPY6yAPk1esUmzXuBgwLZqPip4XudAE5FifoXuz985neDyrNhbWoinJPUWH3GDeThDgwTLe6hKLvH",
  "key13": "3unHtm6zXYP5Hjv3USY91TGWbteJd2X6oc1N5uuZCS3MJJDqKDW8ARJfmf1NpTupaqDo1vyex7auJLXE6ZFTateX",
  "key14": "tfdLSiqRnde7cYRjBZbvbHCPT3UoBevx3Zw2yGEpeHDVVk6rVi8VrHBTPdmG5q2qdMwRdtGugyg76MJ4GnpzMfJ",
  "key15": "4niJbVnvGQ2DAENRSXVrGFo7KnpzSJkS6E18ZNwZLDrusRshorxnfRTnjmFYChPvjazwRKxcCij7ZKXzwkvFrt6o",
  "key16": "5XsQMuQwYy2zGGzRPgiPy9jqPxBiqFHZXm9gMqbTe6EjEyQtQGXmruuux5dJpaBLyUNqgoMg6dewmejTNiWJUXbp",
  "key17": "3Lx66qkeAaWLa68qYheRLnkom48D9ySiPU7xPk4kLg1mnRz3LetFoKYu4KWKzAndBczhaaTWHMmKkrzKRW6eaKT4",
  "key18": "4MFbf3Aso9QoMhuyypGw6w3q3MZoHcLjUNnWEtk477DuxNgUVyEMQsDHpLLWU7mmmfpGHZDZgG5NnqWCCHyL4Lt9",
  "key19": "2C6Fjw53WFHukLzASrYDicRvcks1kjZXUeZLXvRZyzJSDkyEDU88KTiE6vynA25Yuw4Qbrth5hMnXwYx3w3rVVc5",
  "key20": "3rqR6pX29Nzs3iKSzjwWTbMzAUFce9a9YR2KyKHmbxhkJxzvCZzBd2C29HxeP24o8rf61yN8QBa8cK2U2DEtyLD5",
  "key21": "5CfXRMQqJrW8TFNxwtyD942XYu2pmUyxGvjrztcmcjH8xzJChZ8y1SEC6YMsDiQjUiuza4HUeMUpnBeWQHjGCHNd",
  "key22": "5NKD36aNSUeuTsYdnbNKQu9UdzNL77sx6xW2JPwpcuTKcTD5b6tKCecUyuMisBiJYKcgssaMWX7A5ykxwTvPJFGR",
  "key23": "589i57PkS9envAijy6GHVjo4BjcuRBfS4SUUpX5neNXXR3kpTdN2ha4TfyyMirP39hebjFZ9NAXXyYxLsssMvheK",
  "key24": "66WfP24jXQfhvWG7BdSpu6tciJp5jMf7TsvE57g2yy41teeU7DLnn51UpGdCC2UdzkwMontGeFqyxJJLEzvvJ312",
  "key25": "4sd5LaJ6cqCqWzChB6Ncd6dyvHetivD5ak9E66SXCJziovhywXrZF56CAAHyQG32DBooH8dRxnwq4fJDrnvqedhs",
  "key26": "3raGJz4CHzM1f87TrGFd5w61SFf2aPr83wbwpx2mTbGN56c1vacL6akLTCEbTEcxC9s39Cbxj8baxg7Dgz8SXftK",
  "key27": "2twcpubjNDRuhMEQyre9KeYQm8ZfqChVK8CwCFFRwtmkjehTVYXo5Tta1ewcYBda6q7N51ugcLtxVYir5XaQ7Lud",
  "key28": "4fivfDfYL9wLmrLaxyjjCShwH2g5CpmUgvup2kELARf22bxXoxcghn8wNky8kCPcyvJ7LJFRoA6MZQH8QGKUdHaj",
  "key29": "4N4CL4p5QxujmhCou9CQcss9d3gKps7KL5Pzicf85qmH3WJzSk27F2FhXYPC3KpgCtszn87pgNJm5uzKzoFsj1v8",
  "key30": "9B26A4syrogpcPHDtTwczaLMhLcLYmpbqc13Zm9VQynM743nkYGexCkvVC3f3TKf4iiZtdHeYdoMDrf7nyo9Y36",
  "key31": "TpGaZgzxm2N9xJ9TCzWQjYEqAYqpUG5p9GPNZ8TvJJaTcWt5CHiSjfkaA8Qa3sCedLmL4obuC4tEhxgfAhfeQpA",
  "key32": "4ktzLcn9gAJTGXN17Pesra4gSVPabHXRTDwf7W1zDMryTJFLMTm8fQqREuDRDfGqoCYRAehdKpPRKUQbrrs1sV7V",
  "key33": "5rEQR1nv48e4orYKkZ8X68LX9cf3yzFawG2LP3LgkeCjLRbUNhad1e5VYx4i3YNwjgxj2iE1xvYc5ogNGPdgKdvL",
  "key34": "2ji5zi2vYNk2bmh3tnTSngCKdYMUF9bBULpQBYkKtRfoZ6WKyz9gaywaqi75yJWwtDqV5Fdu4fQgJZuqir7UEJtT",
  "key35": "vpyyFnBGGAzCYR3rDgsLrziyHTcEyCr6wnDgdU8uHKFGwRwAmK7sTMNas6EmPzaKxds8F2iG2q1duJxT2sFx8Gw",
  "key36": "XVf6xaF5rGAfh3GdFU1ZwKF2RaZMmMgMTtmiQs3o7q7p8YTAmj7J1QiQFTsQLQPkN8KfMdF4N6jSAUCXxL2UsZP"
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
