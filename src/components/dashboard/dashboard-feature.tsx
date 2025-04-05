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
    "3MsT46rZNdysJrcaDX1BHVKiioSrTrXuJvBrXJkmB9Dw6H5pLzAvuVk7dfvpcmkZXPsUEDE4yD2mdXYezjrv198Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3y1NbaSX4KoEAk5tdERyaBFw8UP7TQzfSXX1P58dS28JsCjLimi3oUzM3AhD449tax2cvZHcg5EAQHqGrM4JY4dg",
  "key1": "2ybyaGBd1fRZTRFyeA7AiWrNVGzXNDoSTAUF6cTD99831aX3b66dozPUC6ikuYrbhZxQZHpFsuvbxNtKEcRbQGMX",
  "key2": "4GTEFt7bs9q2uQ5od6yYeuzMkFhZavmtmYwDrv2DyrnSWjtfo7M22z4Bi4acX2WR7n4bhNJ9FLuNAB8254srpiA9",
  "key3": "4bb6GTbf9TnG1UC1vbRPk17F2PjEohZyA8qq8JeLDieDXMtKe6kQHaZY9dQC2Sz8toPifcTaoCxzQVtwEr87UfYR",
  "key4": "4LtpR7J5oNiRwT81k5kngYuJ53qbkhMQdEMYo5VtDaqQ4mVWT4nQbCT2GNy9ssUsF5L3ydwQKnznoXtDwGkYXCDw",
  "key5": "5Z5wXXk6DwXcBUzxfqGmbHqYnYi5qVywjkmBx2qwD3g5XvPXK1m2kAjj6vZLJTeV9y13vm4mEiTh6feENqT6gDhi",
  "key6": "NxpsvLwGP3K99HdZpoBkDk4HxBKJm7JCTWR8XGsj7or64wJjLPqYQ2BN966rHf6juXgZX1Vy4dwPLGLf5yMjRRo",
  "key7": "47xYQnA84uip1ZToXjdheapAj1WreDjb7J5MZrEVS9Xs7TtakjEuhBf1kzbT6Pzi8Xxq2vN749FbBDXSNaEKfGjs",
  "key8": "3kfwUnppWNe2mNyArYb8AwwyusDfwavQfrFd2Tu1xXQps2WP4AJxS8qpewbKm4L3rUk7RFCqra1ACDY5QNiC2fXy",
  "key9": "3WQaR19ZQ4FhmgUVQxt3vysGjcAuP1an1pH754ade1BT2G7KrXY5Z28VcWgXvrS1fbUY7PAc4kZTHb4m6MVntrCH",
  "key10": "kKTYp9zAwP6jyTBYaq1Y84hoS3emWM55Bmo8dVjsnvj7dt4fzjiVNLnEQvkbYjQ5NfijUfZiway79QXG9zYtwYY",
  "key11": "2Dy85GjcrGHns9doey362dqWcGt4Qt1TVhzxm6RMMVJVGcCHCnxLXCML1RQzxVJWeuEm4U3qSVrrNCvw5ZUDgZ2B",
  "key12": "L9ef32JhHLQBU6Pq9Lnj1Qjz3UiP86PajoabZKd1hZiLUaJ4kGkqTdTUVHaCAK97uTPGh6tf83yqumr76WMUNU2",
  "key13": "5xDCywZczJiwFLiAcsmfL3xvNcC63RtZ9ppsTQCJeeD41CtrxYsYJM7nLrpS9Wa337zwUREvhveV71sShGuX8aQa",
  "key14": "2n3NexRnTFcreRWwdjs25jQEBnPgnnFr96jgpUvD9ePKyh4x7BZWvcNfZoUhghQ8dkCw5R5RAm7VhtXEuL2mESFa",
  "key15": "2Ef7LCvegj1qAbuGAf32XNLJ1KEaRFCPy1cPZ7xev3sPwbQotwBwWkAfTAzDjSwEqWq62ijhKGY991U9wDm6eP6S",
  "key16": "3APrpMW6tVYCMgtAu1nX25xTXHy65Mk9gJcXy3FvyWQyqRrGXxAXtiRr5iQfZ9hGmmBpgmibAWBhW2B3x9B9S7yW",
  "key17": "4ktog5sQYnqATZsPXYyC5aqBzBVisSKDjGAHY9Cpk3cH2TksG7nZUQmPzN59LvEWYx7s7bUxqj47neN8HpDuDaa5",
  "key18": "5AUUTqA7ffXKRcCMHzTncbUVMbEy7inJ398aDYEqHw7eFyceH7LAR3fk6ggCJG1kqUFULgzRhukrud4L4UuP6mqQ",
  "key19": "5imGvbK8VsSNvwrXUUJ2zQZQWRHcikNxVQPnzKPZ93XNgdLrWgQ6vJeH9s9zMtTZWyZgeAiLrcs3aGQT1rUQ1KJY",
  "key20": "JLVgquafSnR2SogiAoz2RbLdVoNWnSJZvdU1qB9gnivfYUbBxvacR7FPCtx2ZDq2LDsM7HjwVXxyXNq6yrMmF7k",
  "key21": "bXdzJb2ccdU7LByRQhTDbcv2NBngRfk6p2ysR9UQjvqjEo88vrSbAPqvJTVz2T6z9PTcCLCSmsK1d6XNxAkqMy2",
  "key22": "4yUiuR3krerfh6zrws5w31pStXeLRFRCL2ZbgNtUHxaHoJUtTD9WFj142Dr1XAhSTRpeHjvURWDRg1L3cX6h9Y4V",
  "key23": "3gpHChNqe2zqGdSdLHHmhqLknAJSxLwLb48dDa7CNttS6oUF7ocQbjV6BGMhhEKunFcKJS3CP4xL5zFAr6VJRGDE",
  "key24": "5MV5kA8zEHs4u34Txr5VbKVbMKuo3YJHMZGQLCfBRLTLkwVqDH2jDiEhTQ5w3eEFfd35yhpCHHA5gQgkKHwMm4nD",
  "key25": "42g5Qj3ycstu2m4bfNJCnr2GcrYbSWAvcHtPEWJ2s9PaSfTidvS6n4MtEYW9tiBCMaBfrwfSbbo4nvncTTVjET5N",
  "key26": "4nAshcLgBYc4hP3fxpGBVHMMT6tmrGdTuHsRG4cGaJNBxoaXB1HH55uxiD2sWJJeRq4v7wPgkEgvqA25vrYwJDrJ",
  "key27": "67huXDXpfT9bruiDsTDXyPJnRbBcKvnhKA5Vbe8rrc2T2gCzkoBy25YwkLATW4Dz6VcqsqEpMooxVKQPTXVZ5VN3",
  "key28": "3jTdX7P7qSefgNwMuQyC8QTUxTEsUFenHb2u1pQDRtUkkzoaC9f1wYGKWBXT2t3BKysLcL9zpH5Dej76DZoDjokn",
  "key29": "4iMHQehhkmRqcaEZqfjW7k7Eoxg9Sh2tdTebs6jWtJYH6TVdGKQ4hvQVxpTc8vjghELGdor5ovek9Q9RaD4xVRUh",
  "key30": "31ydnEYotL12Zy41H6pAAZJeoShdw8sMf6eaVRDBLsVNnBaJWjTNLWnVk46CJp7HyZk7H75f3tK2vXb5CvE3CW78",
  "key31": "4rwTPT17gGPxu3EC17xcrAv6vsGXJhm1SGDcwqND5h5KDx5TrqTDGQjt1t7cqvYdNNwhtDZP44CY9xnfwD2VnMb4",
  "key32": "3RJVRZw5DoWPfMRmB6PFKD53Mh9J2j3Ew5GgLQezfBCtJhLgUhKYqUeYM3qVnnqtePV7UtKTuhEGRZX2nKQBakp3",
  "key33": "2d2TFVftUCBqVKseW6aFaMt2KyR1W9RpabwJJr23jT8cpyLKFuJLcbPyUc3D6xdtaZJTFvqaifu6eqntvZz8BycS",
  "key34": "22a3sECh1NSncqNXPVZinNUwMXwUd2VsFom2oGN4XwQb6RRCL6epeQ44kmcUhryttwiaNppMWKkAzjwRoqoEzPDa",
  "key35": "5ncT4pV6ZjYLbV74BPpUFffagiBNCu7yuv93NW4Qdvpj9nzxhgWnGyxHi2YWqchn9kVeLPuJqmiiy4cAJrp2cJxZ",
  "key36": "5QJThd6Lc5ChqsrHDEnnAFkx72HtZSbHHLc4P67hNYn8EQqmNMbBTMdCToMVnmbTgQqXQVipTQv11sHPiZHhCoqM",
  "key37": "49eiFxxepH12VXJAo9Hj7B2JpgPMKsFDXvmfag18ZYuk9du4ALGPLeJfrMa3XTY172jQi8yB69QGb3qgAb2wuc83",
  "key38": "2xUQR9QRN17busk811qW6MVYNpYAPeZ64j1cGU8NFXL3MVPXakLCmcqtkpWAUeM2NWcRhHAmCBGeHUwpFvQUkArb",
  "key39": "43qE8iaBQA3sujMQT1dSScp9Torr7tUksYxJdte8zpo6SqDNsdxFaVRQyKj3VWahGEc2ZVyqUSp9PtXKDqgj3EQP",
  "key40": "stAGAVBaa2APBo6eQVxwd3D8bz6RESstYQfFcF15CWBVTW5xGx4k9zfRsDsfDGpiPZQbSuFLKUWQj9sM3bcsVQo",
  "key41": "4AugYnB6UgLLTiJcEMzjteLpVBcw6sK8kJSVGn2vssSmhENkF6tPMa5xizgSenLBZMCbQwo5HJrwo1JuLCxzhasV"
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
