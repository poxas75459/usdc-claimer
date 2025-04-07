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
    "62VaWTCHWSizXu38QbEpcmHNEbuLKQfNeRVwbiiMHoVgNwcP5JuuCdptw1d444sbQ9ZmtB7UHpuYQN58Mwgswr3T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21tWnri1DNvubobn8nBRSuhkkVPnSB5p3wsJNN9p8BcRaMDmQbpf22VEF9zus4huUtQfisdTURNTbK2dYioMRcnU",
  "key1": "4S51N3RCFnRaPeb5VMiXAZT2zdomTz5crytMfjKNgJPr9EByijhZ3hPLsowogAdzZxra3hbpQmzA6hFbugohdMtW",
  "key2": "z9D8Asbq9K3tejqyL2N47Yvq2Bay2UCChZHU7smgRR2Ps5rwvkdfvHTus2VJXyvhayUd4GSaXPnTBc3tWeZ9Dj1",
  "key3": "4qLZ1xVbs8LyE5CdLeoNLv4tYhSpdhJ5SA9PeLQ5b7cvXVso2zrahcVLw9dBbZLcjtGYEU2L5FAf6GwCvW8FSsUo",
  "key4": "Q3GVNjpLqiyWyDVS9aF8JZwMqazdzMG78SUJefP78TjEomW7UacMGFkzEyCcVR61qX3AuN67fT67Yh2kJzqWTEy",
  "key5": "Ao2tbTS2VL9xaxdet8JBb2VSWJ5Ldckfmn1kyUGwawGKWeQzbGooaUKcF2H5DjHtMkDpVwvzpufjNxnhwUbfJZi",
  "key6": "5NqMxv6qfRi1hK3wP2AWihpkm5UU3bBc9z4QA34hcNEn91Qp24bRxWmnsLqPHnSRX9EzXswdB6xxyiVWgVgGJzrN",
  "key7": "jWcojfecvVUP1vMNy4V7hktGLJAhiYafjDFPZ2xG6hx7EkQousqB8dSnET2Q99XqJAmTHeCURyxkUnkDzM6s13b",
  "key8": "21nQKtGvescjkXbPuVTp11T9uAHBUAxzUod5HD7GQnr8YKtjpkPwhGe2gnwFmFenc3vjsA3qDMcHRjQB4uyHmWbR",
  "key9": "5zjkiB9AWzC2KzD4Zcex3NioVdrFxsiMdgEcZpTxdkeoNjDhrjzn5N532G83d3So4gGisw7BM1LgHzyazKFb4MTg",
  "key10": "5v4WLqqhcRsg6UvQGhhBWBsQZorJXhpBtyu4yZFc59qidVEFNXtjZepV2JGbNduBNrxQqNLdDJ7JDJ7j55fomcbs",
  "key11": "3GwXpotdfme52Kumsk6t7UzybzHhTczQmtseMW7W87LXmLC4pX7aKbBEs7TUiTR8qaWVpGfcr2Vv9dLAeX6CVaCk",
  "key12": "5ZaAVhFqj28w8xrRuUHbcs1n5tmD42gbzBb3GkpVcZHKC7e6oWYpqGVjvjm8LZjNx1vN4zf8zyEEq7yRfAX6WoGJ",
  "key13": "vw3vGzx3AEXwqfESxUt9iSVsSJcmoftytAEAoPbf2dorCPwVsJ8BPFWZnotWKryxtaAKL821aHU7xMyCi2RQKj6",
  "key14": "gH4edQipvceShz4PphsXhVnFwv8kCdcXjmQEq2nto1hF6AuEGEK2DKSn9Z5c8NuHkTXTBQwCUrm577Zo4tKqLAf",
  "key15": "46apLdMnjCRSD4wsEDFzfnJ6r1ze6MThRhfbPKRKysuKiZ4RTTHnQpye5teh2dRj6iDSUm85JLutaeERQeeFvtY9",
  "key16": "4nKTC1PuzKgoN7gzkVY4sKNuLtZte8prYmreWhtZaS8v3WwnA3LjfE64FzF6fdoRdcSSWAmGgu5xmmJtSyVWHvPy",
  "key17": "4makp58XzkQUYTt3KJirqpUff5fPxGhSWN4APpnAeQLVmhTKAAfJehbTg9m8LJDUWSMTKhC7pqdPEPh1bQXmH2kX",
  "key18": "5SCakMq6avvy6SbBTgBAZyruAkncpZpQAqkSrk6kY6rWpSceQvXPa31fiPPDrsHqpUb9cfyCsmsBPchcArJxhVJU",
  "key19": "5Ja4DMMLofiyX2vysRWe2tkLpFU1UHpd5FLALYYoiaiVgoumW9r8z7KihmyAv8trtKT2mqJKZr5sLVRcSRxxF8Js",
  "key20": "SXHmhNxkRUGfRdmMjatkAqsxqa4oUNWTvshkoiSdVwDHafevqra9C2vanAdwHhYzPuHzsapjQWRDBKna8R1HxLE",
  "key21": "3PVp34f56GTbsW2uF4BUgywjqmMNbss3dqNZcKwoMNqKrMM7nyh6GxUntYFewa8zydEBFhZ4zh7yLXvVRWv7QZCc",
  "key22": "TL6fdtYVbh2TwWqJkEUUMzzhTJVJPvEfrxKe1j5QFyuATW8HVNyBE1NwpTYeZFAf5MhLktic2WtHHR5w4hNpmcn",
  "key23": "2opjRSmah9faaMsUpv35Lqy6yUTX3vb2ByJFcv4C8dMJ7hQvSgrgzg35TZ3o2XfNyxWGByhm4qLJTw7JFt3fgXS1",
  "key24": "3grW5Rq3nZq5eV1QErgBBx42eHh3NRqZ6BZru4isUC8SNvuKHktwsR9wx9fun7n97q4ijLVU1NyBM2jhQAAZTXaf",
  "key25": "oz9X2Y6RTy6KvsEgBHQdggFgqTTAXUfpAMWEA3BHeGBPwRCeioRfZ8QyrEUrXScn5z38bQw19ag8TaagXbh9kLy",
  "key26": "52dEZcQ8C95Dq5ppvNduMTcNNxJ1VLTsYDt52rwd3PwryvxEXgan2GVCwfUmxaHjkcjch14qdXw2zJpeC4nmiSN5",
  "key27": "3WfkgGDiXhW5JaJgZ8Z8JkuTMXGaC11xMiQEWrESuRPqUUuNs6dzBa1YeEMqLrzXpW2ba2obGYqXCR61c2W4615D",
  "key28": "55RkPxHRrcMSNwQApmiKfiVghbvxypTTfhw7Stcnm1zNW7EBAqJA4gFfKPKto5BJQu9wxjJe8WYPRvLXMr3fdCA2",
  "key29": "52JMh4EJ6BwTx7bskTBLrNTPCNbpbZhcJpHqht6pRjiNAHURwXY3peUgN8agXrb6rYtaEGdH6o7UQspxRymdgaBB",
  "key30": "53tgurUNqtgmyzSRgqN1USwHxUR5oJS2gLE4jXKB64ze2U1hxLxAsLeRq9yiXUjBhKrWi8cT5qqkbeFXSFtKGesB",
  "key31": "47AmUVjAW7mSbjbaPSXUzjMcZ31JDJSju9rjBPJfMsL7N7tZA6VxQ7x2JmqFcTfss45XtCdWhxQcJwE7fpDtRBCw",
  "key32": "3MEMosuyjAAgGF4rfSNSwUbS53CMdxP2yNT29aS3vQCsBGZnKRwJ3sSc1xdaTiwKZQ2RZfZKHHeccRLiN9d1PDtp",
  "key33": "BLpLXpe1mgLbm6ak3o7mSwsCn4SY7TaTgRtXGsXuvoXAqh3t85qPQyZxNBWAwxUmbQ2vrXdWQkjEf7uqKNyx8Pv",
  "key34": "4iHYWVAUwqV5XzRNQ47LickPhkrnZsSAenWS7RH43YWo1b2R9H3wgGWvHBZxcCijwPeifkCm3efHjM57mC3F1g7h",
  "key35": "4hmsDea8vk4Dy3j1jB9oJ5LkD89y6gdtq5eHAEqWgBjSfUoVx4TMaDkeg4mEr6DwaigjJh7EGZkpqibMU87guveb",
  "key36": "3W9mQqnr5buZ4NoAqgG28SNLFihuJ5kBz3wsENBwALwMXUmG6BTJjePWmrbv1Wbp2SF5MfW56GEpJYXgLi7s8Tys",
  "key37": "4VSDdUBXC7bWNmXu3RJd1pUQF9p7iXjpFXViEScRcHvzviDffohk7C27vu7dYT9cLDhTHURYVuxzexw41iq1mALG",
  "key38": "CqnY5EBxjWhjPfiX3cFEgjBUjiXX91sLkcgwnJSDdtoYP3CQbjQzo28Ty8EZbgcbpeqrYLTYfJPSR9cvmpzkQZa",
  "key39": "2ixiRmFRXQGqjjn8oKsqfinRcCtTTA2i8HT3ntereBojJDBSUYvS8md19yaDwL8uRZb55HE4mLkNEByDxTb8Sc4B",
  "key40": "CjpTQe689nszNTc6uFXbR1khwrYbQhVeJj7sNSRCgFMKjVDWGtrpsSkEhmsZVE236VrNp1yQKtmXF9pcfhZJsPy",
  "key41": "5qfM6d9NuNyfkC7nVvHDS6jdMV6isC1838zfnmwNForesDUEiimGG5GK4MUw2XJ29bNDvDNTKSUi9yue4vUhUL6D",
  "key42": "4v1AKWmzxCMGjgLpGxmFna675p22SstK12ExnT4AvSLuhBvsBtMNct8pLTv67L3ZX1tobVx2Q4gfTrJ1192ojvxo"
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
