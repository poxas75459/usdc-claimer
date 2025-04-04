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
    "2qMYCBQK4tPzf4TtGJLpogSGodoLhJGMoZeqPbz3mpYJA3BqrGsgVUQaeq7LFnK14Ain5i6xZCZjiJMjzP2RNVGN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22ZEW2yYhHYNskAebXjqco5fmwxLRubPYnWaAaLfpNWMJPerbKjTXfU6tmKy7FtqTao3mGnJzZ6JrvWLgnXKfsv2",
  "key1": "4kdmDsbKN2bSU2S9z576ouuoSznvrJdJU2VroR6dyZmVDSM1xSToFYToHTKFxet9sMJwxQDdYK6NAJFeLX4UmDNJ",
  "key2": "5GxG8evF8uH5JLKXSsqP1jfASbAWoxtQ2nYj5VysxzJ4k22uscLaQzJe6LfcE4ABJ6rqKgyfhRTPECthNE2PbLen",
  "key3": "2VXF822qrSSLYxWRUghF1tKDpsXYaykaxUeGW7uJRZLZYi1CNhoR8C7UAj38V7WndBs9d1caLNge2su8VwQC5njm",
  "key4": "4kLps44Kg6JmwX3UW1yNUZiWuymGm88sUubbteQMv5H5QornAUcWAb1Tt1ne4vwG5iBmN1khQ6VZYsdYCYSLhQgv",
  "key5": "64nR6YeCHC3u35sUueLsELcriTStZx5oGuLYjEqT8m9UddECyrGHowr3n6fHnmDF1Pzu89Y1PQ2vm9mqTdACWaxz",
  "key6": "3HJJ426XYQrEnkFtKiAkkwnHjvxmUxiAksW8zKYjzdsFZqze195p6fqF7ohY4qnV3qpoXmhuQKfmdiVWUzYztqwL",
  "key7": "3wrBRkyybtHBZnb1LyLb3qCMU4mpRdrxjHBHQKfmccxBexDkumESo1mDHKi2jBBTu9DRpnfsuMF5dxdLd7QemoPu",
  "key8": "jaGYTNmqvudj7fenhsQFGFGdfNDGx2EGn5ebMQVkHpP4aEiTKY3nfEUVhnz4naXz9KmHfZ1kUxh1ZBs64j7tskP",
  "key9": "55hsyjgyZDFN3BkWZPV3ZXdjC5zGKkbSvXzFehqJwr8Kh5S8yhYw6iDaXxz8JpSxBn4uXzmJp5LmWwZ9G5qttjvB",
  "key10": "mMZKeAGtpsbCXyefML2DHGqjHVdW7ZX7pAcLwXco4Eij3nX6phgiM1RBu18PLV4cj43p3rQgfqoHgsF8SGkxn48",
  "key11": "2aMKQbazJnnYPBLb4QReMQmpoH5NWQbcX2Yy5gTt3kNXk37eXzfQcnumrVgMFQErfnBx8TQCvGTWUEwHvWwdwv2t",
  "key12": "tPrk619exr5vQNCgxS3FmRqbHyNY8c3vJS4EnLVKmDC7deRjeEh1caaUuJSLP8b4CVLdPtXUgwCNthLAiXcDDTr",
  "key13": "2XJHvbFNHN61rsH2hcF8j1Roph7shqyL33VSK67yBcofuQRvshDzSpATqbLLJeVESebSSPCDRazgLxCGGK63BiHM",
  "key14": "5XshcqwdukynsG5YeX6yWnewWVSxS7U8aHKjXakZjgoVPRHGjzCQAiUyYo3rUehBr61cCz8dBBVj8r8hjh2iQf7R",
  "key15": "58RaUZ1bgdwN1n3uEiW3hSDUG8WNshshmUQWuQ252QKQXWyi8Ky9HYoW43VPXna7D1889hJDjZ741rWWTS6xNdKE",
  "key16": "2owY8txj9HaZkRHZtntchGCwZ3PLjuq83rRjAMyToKvE88fVSg3zJUXseE8dHsx3d6EWxikLvTRXZbTVev5K5rDj",
  "key17": "FFP1FUDdBuRGTDQKWeur2Vos7XsikcAiDsSkCYb3q6GrQegAL3dKoSUwKTMqfjDiY3AT2cpiw8rZb9QfRBpEerR",
  "key18": "5AZEHNkh6C4DLd4Z8HH1QWSFs8uPwcVwGqbzNEoiXVpQKGFGQVBRBNqMn5bfPczPh1dQATn5zob8zFQbGH1w1icD",
  "key19": "5pGz5NV4NdFWY3LhPRzjf5gpw6GEsP9uZzJX8RFesVHF7mTkYxk6gUNciUjD3tHSUJU8LZM7xALisNUbgSuavEaj",
  "key20": "Eskf8XLVBwz2W5jfKd2nAErrCSetvAmXEbXeREPcjW1Q8Sk7AhkRkKr3JLuqq5kDvKtSSsLcab7thbpeSwoZYwQ",
  "key21": "4J3qbhFBqgiVEFexYcLPNkoBtNfym5DKvaLPe661DY7NJqFnjetnpdb82cKTxS4Xg8rtexsoB5pwZKGbSuGmugaM",
  "key22": "56do7aYzi82WmDogpLN2UfBekmNBdeRv1k2NxcJGV4cwiCQHG9fdTpWczV9fboeJCNb7UTdRAU8wUD3workfs2Uk",
  "key23": "RdEx97SMgh7XdYJch7gPtyuu27N4tZavW3HBSy73s2XboRffjrcFG95uFbfyy5V35HsRzkwzu2yGA5hxj7hBJe5",
  "key24": "2RnP4G6y4sTGfGnC8KZJSZPzCCyYxCXn3m3goMu1XyvJSsNQVQqzMii1t1S2utfauAYJWnG1yGvmYKj1CY2CdPF",
  "key25": "UL6AKNdkkNyrxHQtirbi1TdtS57xG2W6EgAzjGuiBJnzxqUMBuAwyxJHLWCrjyk6cfYyhtYUyb3azz8BuWZwoAC",
  "key26": "jDTfRWCoAserGoSjJueXSD9RmXE64KRVtvmHqamrmwaukQVxUEuKAu8boNPrK482Bxp425nkaGCgCtwaDLN9LW4",
  "key27": "4efKiP9BENkbm9Nj6P6VaZ5hCqqEmW9eX4bUiN5TVhuzeYwV4EcuA4jXTPUHrspCgmZuvmpKaM9WnCYi7UsGfLeo",
  "key28": "2AoQQSJoukvMuMppEJASqYPVBUYqtKF935wCkfYHsTrcoF5gfQrUBi9JiU54t1zCMN5u1BZAinFzSz5ZVZ3tDqzy",
  "key29": "24J6SVhNkg71DgyaiCByQvFV2D5gTovgELqZKQQnkwEzzEq6zkCZuVmhbcPYDrLGDX5PHADGqZZD3FtpdKRQZvfi",
  "key30": "invKKMYCnMyXy5sNZhsBqH4CpkKxmVBefPJNJFghy9f5RQxtaXcrqAtM242563XM5axBtqwsAK4JNJccKTSMAaa",
  "key31": "YL8Xo5mthN2pP7Y3cheiRfCtsEQG6CXrh6eXnfbq6zSFVFWttaSLChbUWjWQyEADBacx6519hQ9Hu2BGeSLmbxT",
  "key32": "3iBi5U5LP4AzC3v7xY8wYBXviNFYoosrMqVE5WRQohWfr1fz3Eb8vg3QVgbXsCkoDp8Hp38zp6K3suJxCsg1ASy7",
  "key33": "5UJDJWLMhsXu6XU9DPqAhi3pPkDeUB8hA3RpXMdfGTgtuAyKZyRR1CU8BAXFNX3QLHyW7rsni1MFXHALYDS3F6xi",
  "key34": "435WwLmuyoFEmCyTiPLgFCJY4MVYTzUH2xMrF6YQ7hzGZ1CE6P41wpkgyDEdb25nWTMsMMgQVzZiCogTE6SzTZbK",
  "key35": "4cafi3VAwEWnm8sws3DDagVUA8D3NyFceErZmDyf6FgDGh6WPnVw9njgBRHbGynhsex5vBfk1e94QdgquT364DWW",
  "key36": "2hM52Gi6Zfg58ZYmVhWSqD2sQDpVzg3tYrnuqWJ2HZeGPrWDHeZNo7QuorukwVMcKEpEp48LgaHjbmoed8KNTSiw",
  "key37": "4fnKhKMU1WsNjxud57ucekWVmjCpUS5Z2jMGRLF2GVqygWCfqANNcxn7ik7e19TgUp8MG3yNwGHw2W4Rq7tSCc19",
  "key38": "4Vk3PCFwNvMbE8JFiQBjvq9PUG3qg3rnbBE3RnvHz2LuiVkqGykiP2v17EjnKHtb31SWcwhMi8gfKW4JZjGex1Ak",
  "key39": "2q6kgNNGn6YJxcPJ7uJJResHRmmmhsgAoKeBDapibDeA39bTYjs4t3CwJASpqmQ7Uj6oXrvnTrKSA95nDXAv1iLy",
  "key40": "5hmPrxNLLgE5qaA11eBQrCMuEHuM6wKNTPqpNo6ukNrWPbgXXf3ypysPUT1yGdvRr9akLFxxL5r1ForfBZRsvKkS"
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
