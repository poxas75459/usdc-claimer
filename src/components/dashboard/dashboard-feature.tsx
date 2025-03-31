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
    "UqdEccuc4FT4T6BDvKF1AB73LxFKMEtNLL2CuK79PHkwZuP2Xt4YmRf5NyGDhYx5mVY6uf5xy7SFmnYuQSmuNfU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Lwzv2d7oy48QLXbmZqfDJfBnbDXxnpbwTFJEPsNk2aJgtwwaP9kejymnzYVwZy1jheerGJrmLs5EyegsaBPasRk",
  "key1": "uPhKeDw9E2LGEmmen9qXxvMmi15jMLAJyg2g4JjKn6DfUETa7TwxNzcgkkMm8xLEEdpaHY8Mfmcw4HKTSFtjbGh",
  "key2": "yyhqq6JVVkKRcLG6DqD9VC3kAbweLSn5b276dAbdd9FJ6X1Lsuicb88hHw1wZSSyAnrKuvaS5B9saGtcA86GWSv",
  "key3": "5KzETx1CPRnvfLEV7XM6MB5v8Nu3iWFzQS8uwYf7cqaHb1d8DADLapT2bQ7faaoix9w7WvWXdncx3DA862cxN4EB",
  "key4": "224whwzYPFZsevT5EzETAyokvYSUymPLfGy5nivTMDQPsHqn9UzS2JXs8FzKVVvgPTboGPTrMSFDiHmTKpuxKD2R",
  "key5": "Qdzvn44uFC4BvWnkteYzqpAew1A7HiHrtxatWh6tF4eBVBoEJ2o8i4ggrjcAM7qvMU7nEyjgzYaRLvGzNJmE4au",
  "key6": "5HSSnZ5uCMkT4dFUMjvBMF6B5nu87tmtUYFqTqYGvGGzcRqy33HRUy8RDUR4XNXsBGLpu2CCBqcz4aNa4KBA7YnM",
  "key7": "4EkKmvfkmVJ5z7D6vruDmh7VrkH6MRP6keJjEHiMfmG6eBpNzEC9D6kNt75ukNR7VY1YTtKQW6gamAXWt4kcuzKd",
  "key8": "2otBZo48aJptxdxGbg6vhfowfTZuYDDc7qizzwe66rR91SCNcRoJDJZy3vvAAgfNJ4De2sx87Ypxci9hxWTqvL44",
  "key9": "tdXFzpvLAqhEjemr6VF82uoPb1WU4bVmMugWN2xrRBM1xEQpnqRrGoLxRA8rfiu9GhS8Dzh7so1HpfcPYGpgXzF",
  "key10": "3LaK2ZxkLGgfrpNCyT3bEPKwv2KoWmvLWkbscefp1akc5Jq8gJ5u1bNwVZkA7HxRU6VcG9jBNi531yX5uANcEgx7",
  "key11": "5cTLH9hqyPAEGwHm2gQ2QKMNs7Z2qZUHSKyAAHP9jTpL8z6Eky66sz5ZYhaWKPVu8KUVYPxSvSJ7Ba49rkqrxzij",
  "key12": "3xdcgigd8WZCYa7goSM5tvkBc3fa8pt3xJaoQD7h25UpzvvPGLw36udGhtJxsiYTG1LfspfV6UV9v4zkWtwKDH7C",
  "key13": "3sWPWrkQJmvr2H2wNvUE3T9vVoBUapSoeofSFp5zuCx97kqPzf8nHwjEzV5dUwqaWVovpXASzcHPXMt2Ua3owsgV",
  "key14": "4NeyJNBDVsJPawvi2i6gFLRSUrQzCdzFEcPGHehPCmDStE9x8fZWMXKC8wntibfQ4dc4PPSjh4hMQVdnd9y2BfZV",
  "key15": "51ZECVkr77KN21y6vTAA6m3fwdATvTTHzyJpUkQ9xdvd9hfhufGknSQWh731WC2ejdfZHCCem5fXzGr6ypdfTG9y",
  "key16": "5dJBSbbyH9aQZKUG888fJWUYTJKjuZ1Mrysinsp2jLbBEJQxjmVwyvYKFuH9TVvNKGRPduyTuy8rsXjZHReUixdq",
  "key17": "4S7cNmVcKx6P6b97RoDdi3KU4tFsjD1jPDatDyxYt3729ywoKgGWpn4KiBW8DS6eDGY2r996jyDnBfQXWqVvKyQW",
  "key18": "5aN6btwMf4QK45MnCj14W2o8MFfw1WG8TSyo6ga27a46jGQY3NrzgtdQLWmKnCtLvHqDYiW4bhu1czshpeRLp6yE",
  "key19": "5fBfWwzarMVLjAcFLXqhvYJLmyy6KN2RS1BEtiG72WUYWtS9FQuaVQgREyTXAokxcV1qXCXrvbr9DKrowPbfqysz",
  "key20": "r7Dput4ipCB6EmKzSxxkAtFjf6MeWyNjRgNsTemEkDXkgwC7W87q5zETLtC7HJmE2hyPLNyaxT5PZGgKyw7qxFb",
  "key21": "64yUb7XvsQXyefmV2vN4csPfUBSSyYdZRsQxSe2Qvtoikq3P16EBoKCLK9WkdF6x49RavKESonj2Vb8RWFWumjud",
  "key22": "4gaL1JwD6qhHX7y1zMyLKaRB8cGVrKj9skYfpyGh9A8G9fzLJUyPrn95jkxkwJCrGz3oj1Y4aQmcxJwyAXvgLhtT",
  "key23": "4GZbwzmuRAubamTNVyapBACHtsWmGEkKmm1UXR5v9eVcgvmRa4YTaFFcoQ7GJAgd6dbPR2sVfAYKD8T4aSq6feFp",
  "key24": "3Gcwhv62XxiTDLJz3H6o5cnaBDYweUVV8yNPD4oyTx8Xai6JoQ9JjU1ysUMdjLCssobcB194xaUqxWA4WPy2oWKQ",
  "key25": "3GiNFyYVrJrBn1fBpaVaW4mMKFLdN6MVDe1wnU9E6tfNt32xpd4Qn7QTWdMntTyjfLSTn5Z8me1jz3ez47pxo5P6",
  "key26": "3ne5oz2oSXjjUx65c5P7kGvpv7UP15HvPxNB67MQs2miSXSgCyhTbNpHEWxsLHCH6HPY5R1qTSMAhRt6njxvkFi1",
  "key27": "53jyjEZwbJRQNrnNaSh8SVt9T3fg3reUd5f5SZ9bRqfUiN6Cqi87vortNmaKg8UwPqYSLAyH33MF4WrZRQJHyNn9",
  "key28": "5j9ozE5FDYhyNARyFwV1NC3CFCZWiUNfHPDVvEHxoCEnQnzdCkn5HQmFqD7Br4AJAaMCcMjQkpjqFgbmvHsXLN4c",
  "key29": "4wfdqudAoaSeweRWxLn5hspbfgjiyojqBzPWqWqsHY4CwwxhtmRvF6Tgk1FMdCSoLGGTdeE6mNfdyrNKYVYPNZWR",
  "key30": "2gkkCbKtsqd8aq1qYQQgY2XJa4Lu1km6dS3wbG2FvTB6ESEjwUaiALTxpZH263sAERdNqpT43NcRJzBbeARHuGTD",
  "key31": "CcbwWdfHrCjVkuuXi4zxuK39WYCgv4Mb24UzdVWDDbHwYXg4mm8o2t6a1enMWBvWKpwB5wkwQXGH8KXowFPmkf6",
  "key32": "4pRrrAaoFGrxbZGZdM2qydeK4AsGV36Zr4t1wa2DYewJin5x195Ph9zfZ1PkPu54SdHkaS19aKs7LTDixxy6E1Na",
  "key33": "51kCZkd4KknGda1CrQd5d3ZqGD3Pq3eUHRUJF8sHugKeknprowT6YjJbyfhgk7uZXGNf7kCUeWWTihgTZtYeNmfL",
  "key34": "2mSCTnBFjvJz2atgzHmvXSFk4UP4RFMrdXw5gZxNDzH1Q2bugNSmHZq5Euiz72YsViN6q1dVZGBsXboqKud72gXZ",
  "key35": "2yZrkkSRQxSj3J4cm7aBGfdfXiiHUDbHefZ1QSHTpke3sLTWo3ZHzGsb9PQN3s48SB9RGZFKq7FmrayzJoNcF97S",
  "key36": "2sFzjoS7v19gf7JohmiqrqFKHxnNpJDV6XYWXwFaotZsurqY2JVWGxwsvc9BGw6NMW31RAGjrpqKMxUx61tXyuDB"
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
