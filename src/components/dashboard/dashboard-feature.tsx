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
    "4T56no7LGVoHcRzZMyPABd34z72iUe6vXygNCcujTFrEnxyqsTedgSDZAcKFVMz9h2pfiPezMouvnyAJkPhPvo1N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jEP9YEBZpyPyEG5CqqbCXJKcKZv5pvkFSUJENdxuEFfj53tfVFH4DfsbAkifygTj272ZjsicEGFzeFXR2u4NBZK",
  "key1": "5BuE3XbboM8Tm4dcqo8gyPGUH3KDQiHWaVxUdGCC5U61iSdfcmuN7BDTHg1QuJ2g86SYpfwaEtUwJB8yhZA1TEwv",
  "key2": "h9tne6yqeLsMBZUFYZKUPbaFGih6j5c3dFxwzJ4siXDYGWvN3qwpkWiCxShRbpgG77JM6bmFzG7GtBETLR2a5k5",
  "key3": "4hwAv8hyJdubcNM5RZLVBYJmMSxztsQqk1ajvm7YJiZDDzs4ArEjULUoJk3C1wvHynK2hUWhN3s6dyspfrGDLUDx",
  "key4": "3hBSzmPWt5bCv5YQs7cNFTtbtGL9x823cMuiNUa4F31ovieG7dcM7x6TTrFVkMERP958zmWiwMd88snepPudL8rZ",
  "key5": "38mN3aAJWyLexr5WxwQZTe8UnmyiEe7XsRhF14gW4S7tZPG1FnMkbRGJj7scqjewQzr622mGDWAKu9e2vStWMwJj",
  "key6": "2pnyuUD5wQjc8392WxT9oGu43gz9y4LyAnH4VVREiiKPpJHU8uG6ULNKmzafvnixo9Kix2Uv2vwmC79WC6uQbNj7",
  "key7": "5B4Vx25shA9KmLeA4vDL8ZsNqMzcSzbCuCpB9jxsMSn7oKYAZUKjifapLNPDqgFSYXfSnYYG7z5GJB2FCTMob7NY",
  "key8": "73zXc7ZYpUDkwNnKeG6Uoxjvne3XZisiFDnvYY3gy6pkee59uokqQT98VrupFXbqvk81gQF3vVLnVWMx1295CqY",
  "key9": "4iaczBY1pAjvY3RTxd5ctYKVTKsBsty6cHg232bN1SZ4BxZ71j8Jjow5FXaBi8tpAzTtRq1Uk3iEetcFG7iYLx23",
  "key10": "5Yik3fpf5shFja28U6v853P28DPucrKjNCzsXfiKvAY8zh4QQ6CMfPBRzKBwmYTFicptrB4aS7RZFguBZAxoCBnZ",
  "key11": "3CUHenhxK1o6sQf2YA88QaSechbx8AFxi5XNoYeRRAFqN73nPVeGEKk8J5ae7n65c4TjuresbcJPvdkQZ8V9bXcJ",
  "key12": "5wCHjGTFWQJxRBa1ifgvcxYzpZfNTfjRPSv2jdGBrCtNgoMJjS4eHN4qSFy4eQbiKoT6RLUGzGFHmsk2aUGBEZuW",
  "key13": "2xLfgTZ62qvdWvrrRZxwQurRNFCHd8c823fquSEf5KoL1kjHNT7fM5sH9RobZnWbmffZ9zRVw7iyaDRNY7BV1ook",
  "key14": "4McRwifECNDs71jqm45sZc7DYGbpn6Rwt2BpKdJCHw3nkjzSUMwMfTAP1L3JbMoTvZ6aK6uRCDtLVQjJbEM5XTMS",
  "key15": "57eoRuUvFQ6X1E1TqZA5DZYYDiUY3biwMF8EbzyECD4e22xbsgRdMZFbnQMsLKby5y6y7oZrHqdxz25pNeQjS3P5",
  "key16": "4QVkAhD8kHhuC6pcgbjB9Dg2mqsAF5HQN1xdVSXBDusxAu7RkD1M6MYbfvbkfyjmjKayjd4fy4TnFXAqxFaDeWs8",
  "key17": "3E5RhrsCFP9hAgXGiNyFx261ZxEGCEo6TeC1PZuyASnCE7gURCk4FefkpQVzEdjd5na4xTb76gaBYs2SPCZJBavE",
  "key18": "fats81P7z7WBvU86aiNb8J4mrakGrbvnsaFo1Dqo7edFBsZ3x4iCB1i9jETPzQsF1pXEnSGEd3bSvGvEESdMD8v",
  "key19": "5wPVYUBCyoV1gt3xtRAMWcmo8YKaNEtLxVojDLfNm3qq7nD5FoRCveC8B65RDTskBqBqCPr3fnVYez779vj4CYZk",
  "key20": "2iHjRThJVcAuZVgbwKh2fK1PqPbn953j3BpLaaWVjSL7Z9FmdWwGU9GZRKdrSniWJJeHZ3641pYPKFARCzyKLxUA",
  "key21": "3nTqJafmZC5dwqcShPDDBd3qZeMLFsVaKa3pm9itQJusCL9npL1qMbBk7hNpuPzbci42bEjwyFnuMjKypE28NweE",
  "key22": "TN2UMpdzi9x8DjMVrQJ61N3ubeAK5Ae2bbEvoukujv2f4cbdLbnZukWA7X3Fhhu2brGhGLrDDDxs3UFXoA7yTTi",
  "key23": "3Qdbqkx78bap2XJUa6Gy1FjPnFyeynbLgQKUXejR2gdTuGcDW4tL6wtVyVZ3MKfCwdDaDSVoJzUtHiVLED6rLQNq",
  "key24": "5qcEgazyD3XffEkVaEMD39breGm7wrUGZkXnW1hw5CYbY2CnLUN66vzEQqhr8y5sonr9T19NUDnxi9zwS1Kz1sEh",
  "key25": "3FFAgzSaqnw9aowcbP52CduNJjuq7PSaM6Y4RwP3YTWkgVwUuKUee9n88ZhcA3bSWqu9YWbPH7CJSqBei6qXYx5q",
  "key26": "29WKDhnEjm6tqaoJZqEG7JPuwUKATLKhGPehdiiryi7N1vt2aoxUZUJr1EveKns1iRZhbdDtBvjayrA11ySy86t8",
  "key27": "36D1XzE5DX9saPbmXHgLdAmQ6D2zDrSZESotbsJxPNkYCxrGZN7Ad6mAY5fZkCkD3nxmbCxjoTwD8e4RsBfJRRR6",
  "key28": "4rb6GZTry3uFC3KZAcDu1BdjWk8zDEbWT3KQQPQQhM89evXnJi9m31CFoYMDtL5RaWbsD9fqVQhBn1sEePjT78GY",
  "key29": "4kAKLsC9q4V5HtSp44otRajrpYuQNYtugvH6NV8qfjBdhx5afqGHJnXiht5FQi6HcRrCDeXiN9mj6coXVeAjijaY",
  "key30": "39LfHXBxazVD6PgFVff2krBarX1zfa9DAZKYjXqETYFRc8c8yr95kLW5mpJpcL6fKMybSGTxed8Aer81iiBKLoVS",
  "key31": "4AP4D4FLg1XzwgXazah9FPme6Hw7hfUcKQWyFdu49TpsjhUqpGx42mUgThqTqBrWKPCwG6eTQ1jKMRA3k8L7iXFd",
  "key32": "LN5okMNbaQtTxXLx73ush31xPCNAnUKYWAFGNSUDM2dURfAhi7JQ8FzngsANYGZ7VUao4J151F9YkkeTZPbbyHG",
  "key33": "2PohJ34dHPDXS8MtigYmDLxT5tb89SDQfJXBVQqJHXs8cK1i7EiNmyFqNa8rwE1YCdVEc3JLkMLdwWcExk5XcVqe",
  "key34": "2MdAHm5213NQN7cyDx4bRoHRqMLAh3pSdpxr5L9gZ84QHV3Bhk7475PKQYnyiWXB3kaZC512T4naiXbqqzQEJUh2",
  "key35": "GXmDYn6nmbnKKVGkka5Ud3xiEnxSVUqBGhiY77CkpzS6LFt7uAqc533ZN3CayLyLXpAhbUGTu3kiMeXVfmc48W8",
  "key36": "4pc9nuSsko4LX6Yk8PhAmmfaBLXTfjrz5pL4izqWkUaTuPmReGnfWwHeFmGn9iPj7yiKhXryiApCeBG2DtfRmbeW",
  "key37": "3Z7W1pyP4Ew124Dq37HXumABf6vqs82YRTMUtGmAayMhDYTDGuX9pvmiffkq7KD9VpLaPLBegXquvvbZ4LcXiBmQ",
  "key38": "5UeSTJmrEvwNfdwzCc3Yv5mgGazeAyGEhbTw3ao4R5gLb7q7JFV4XcPcQBvMggManRyiUpRLg1FH5Dr1Suw4gsK8",
  "key39": "5xdgjcZr1nozs2JvHFvxFdBG8zosVg8q9DX2yG1ppyf3pF6P8zC8BTSVejLPuf7YeXDfdfYbSB29cDvbWkf8LFAF",
  "key40": "VRdEDJwWmw457FYx7DUYNx8zYrQWbTBH4SLXwjVEa8L3nqLJAB4zbQCkuBVntSd96nVkiV1mJLu9FHphzn945xT",
  "key41": "4YYER5kB5fMuuwgSKpL2fJJYsG7mMHqzdKg1UoKP5r6LxsGYcixjp1fNSstTpUpVGjiBkXSexnmrVB6krb6LJtG5",
  "key42": "2aVXCQGvPF1g3ryorTGsSLqDtgzVeDW1VRwCeRYZKdprPamVs9kQdicFZKgSAENjr8T6rfD74Dz3PVyS6DX44QC6",
  "key43": "2mwWzdeQt1hdj15toemqnGXJdWtGpDzKzZEfVCb2qoc5JidFup2eDoN4Pc1LV3YC61F55xfgk5pmG96bdRspPsTT",
  "key44": "5voCD5Khif1u8Gp9UWz9TSGiYfo1e5uLL8pEwkjFwSWNzZsoQMDSik77zVY8sWSZ2WgWPQyzBDjm7omr1kbxuzVa",
  "key45": "5G9XyW6jkj2jb9v1ckH7nKjWXDjiKYo7onSw9wSjhvVd8inzYmEsZzqFJkcCbJz5whcDHRrJdE2TpZRL1ePw5L4s",
  "key46": "2r3BA2L4KaVxf4R45SLNnb5SjbL43GWqdAfjcYabzobVo5NUjzbvenoGDpmD6USM7X9stLHjb3amsvnQntDDY7aE"
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
