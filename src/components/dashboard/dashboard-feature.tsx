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
    "3yE4DmDXh5kE5QAfZzttJh99D3NGfehW8QMLq22sTLweMs7Nwz25D8qjHN4MM7PozdRjPBkgPNoSr76ftunnaUho"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GNLbXFJZ4Feu556ib4PWECrxrKJjcm4iF1xkwbhsWCzPhWP34NG5SgcMRFaEbJcb7xKiWVSZLvzpzswwxW929Zh",
  "key1": "3zVqqh9n2saTNZw3QyzxFFjbfrPJDJXB4GcPLMxAvbdriJbRtXQZRFNEWvNGNLEjR9BqDcqequ8kpjn4YuEMWtX5",
  "key2": "5b2uRFh5fbUyMG8fkZmDJ4PPV5G7TTnWaHYq78ZwrXgh6kzeSJthmk2pg6waiqpVYa9w16jP6FK4WS9euJdZBjLq",
  "key3": "64PegdWMvibue8XhSFsRxnmfDB7427DCMJNyMdjTZYfmVkKw3F8fBwDVF836k6sUdQLZn3V8597inxu3zJn31qrP",
  "key4": "27wJsQExu6fhcpBzvU14oFQE7ia6Vvg68GdHeyznYq9GVBpgQyjcDUV2E5tZo8RKh7hnYCUfC8uziQxs7sJcFDAf",
  "key5": "2Yq7yBpvtEhZ6oxMaDdpo5oaAE5zTAyCQqLYnb6E7BwhD2SjZYYfNvSCM45TgYLe6aJa8W6499qiTRbh7uc8zPjB",
  "key6": "41Am976WWy6yYpNK7j6vCBU1H1JQvZHq9V652RBYGv91qkFzq2Mz4SXvucE8UjKsCRT1yapbG81S2GmN66ruYsNd",
  "key7": "5Tnm8y2gevcsjxptQ7HBHGdgGgaWQeDd162XKJvAwHiWPrPMPejHDnJwRfuKQ6asEm8ohLKdZsn4zZBsa7EUXMi3",
  "key8": "bDGreTSDFkbois7QqQNz4dxFL8TSyrDNzFeDYJazBJDwsKVa99j5Abe1jPGR8HcbLMpQ1jLxDQuXUioSLcLVGUn",
  "key9": "2cF3PTGfMhe4QTv8YpcPbSSsveJ3nC7wrenX1YT5u8dfkLNQwqyKXytVL4gneUGQGq8pTKjwsoAwDUsuv5jNJBLk",
  "key10": "5MpAXyMpv9rMeZEzBDjabyf2TZ21VAAUVvW39LTqf3NAwU8MX6vtEuzvtrq8JGMXZaDjGz8vf5z5szfTkdNWVaon",
  "key11": "2cvkJMLXeq564EcwhEPb3hYK9b7cLKqogCN9A95VxJF4dDwn4nHJpstv7PLB5bqyHGzcLJC1CsSEoE5NYFaFSjfo",
  "key12": "31XkZMgvPkn6de66eSPUuSQnJvcQF4kMyW7mLbZweEAXtZPVB28ggbzv4QQb4bobEToHnfwYK4MbUbAoZ2CWrc5q",
  "key13": "5pdVKeeeTSkqYttRsQyFtQp11n63Q96BT885zGLFLNPmkFenfAiZqEcbssb9F7LCWmP6ts6WFmnsrxad2L4owPbN",
  "key14": "4MEeqYnCBtm5owWbzLEZuMzhfJ4aCBebQnzgvFs8XS1uJZ2ZBf1wL1p2zMJJUYtwHeWxrkHcX8kHjgSHoSrSVA7w",
  "key15": "2uKUCyPagfnDPTGKBTj1sy4RztrQXENQ3wqrkdr9BuyNmW4reVgfGP3Ys1ip5ss6vrtJ7qQYbydBQj2UuQXRZCtf",
  "key16": "43NE8HukwZwDRQw1XwKFoa4BerJPoPueHpmu6F1W6AZH6VxGg1jbG4U1h57vmvb7eHpHHVP6uvaCUz8DogxzFCAy",
  "key17": "4ExZQudHz6xJxFhRdebc6adqQb1JGrdCfnHC7Wtnz5RmcQDckVjXJGuRAfL1g1fWwyZ6nji3HmquWX8Ms32tMHVG",
  "key18": "5xG2Qo7nZgcrCt2AJbDz6tiq8HS7BUTPYBx43FaWjYf3hfbxmKhJQxavs2vNuDT41oYKGsZ9A1xCMYs9ULycfe4P",
  "key19": "4h6V62jifUMB1DnpdnbZkprWiareqZdywaQKaypJTawJSTymG2gV3Nj1LY9TdQ5pkV6zxFeLg6Db6CmMZK79MC5Y",
  "key20": "2sAPguRjH6EC2TDEs58dr7PCrSzLtF4LWMssbWKGtYwyX1FHi6U8AqCkiHPfSf2WCifGG7xjixWBCTvYDrKGKyei",
  "key21": "3U1aSJhgc3NheaCvg8mGaHa9fbTecuAkyQJn2LLgSsw2C46eh8W3cWu6yKPudd3xieXCfteK9bkPSKoPHqh8Unzm",
  "key22": "BfSDttLjePMqf9SoCtTEPBkBoPSJEqhqr1QuTYdtCE1q5JWrd6Rxh8xfzN7SjtcbKgqtsZx7MABZDBVRMh1RuWq",
  "key23": "5yHFB45cd4yCRhcdRB4rq4GnRU4FqNVchPYLBahha1rfpHo5gv82pL6NytQWsXrJMV1G4L5HqFHwqNCZWBDa4Fzx",
  "key24": "5KZh9z5RzGJdghNfPMFhtsuKFAdXDTnrM7aWagug9iYJb2VGP1oKDd3bdjY2Qm3wWRyeFNj4BfKvY2pktav44c8R",
  "key25": "28oVgLGm66fAeFH6UxouveMcuAQoiJPc64HKetEt5H2qQXbnBW2KpXEHg7PVbEWsaJLAyCiLrhqvyocF5FrqQa6Z",
  "key26": "4kXo6bL7wF13sEWpyKgBYhQUj6wDCSmGwckeQ6JiSYc63UKsyTmxzc29Wpk1DSiiz46fu2TmzBTM8RXSaMr2w52j",
  "key27": "21f3RjgG4n47FoW9Q1ZsLMJnjK35XmuHc4tXCjsNe6ZiX2eEdTYh81vVJd9fWJanjZKxUSac2DxDsviBjvgiYi81",
  "key28": "5ZfQCvYTgSnbJV7awpGa2j1B5Vx2eK41NTepGeiXjv8DQXqTkwfEwPzTo4tA3r6m4kyxBMTb4ibLR4e29dUeu1e9",
  "key29": "2UurSb1sqjauKkZA5EYDUTDbfWVzbgrt75yHDSjNr2fEi4t9pNHYmweVrY1M26XR9xdzDuuHpyauqbyaxUyPHZWX",
  "key30": "EsHXk37MqSMmaRwXHQHTHf6t6zB2FXefREjxb3yMc81W7AJATsDRzaS6Vs3B4PjNYSDYifi8ApYJ9Av1nYTY3MK",
  "key31": "56vfw2S4J6bURfk6SoUhDxuAwFcdyREX3ddShEM6jPCoVNNHPV7b2YaJvZVdRi8SHFFgrxHc9nnmBjXhN3BJEJ6E",
  "key32": "qphm3eUFrK6kJwqq1aXWUWm8CqJLnkv1ckwERN1xy9yaWqnccW8PE2sJFPfiB1TWdEpMn2zBCHTrNSeRDUGHzDu",
  "key33": "2SkzzqgU4WGxyTSy51SAmV7x4Cd1fTSrtMw3t6qHDcYitVythvLA3CGbYj4M2v7m4X5doP2KPWgoFsrwyUUsejDH",
  "key34": "4KGaeSfq6eQZyryqrGkVtv5b2Mf5TaBsbmtPvzQzMU9VmuyhiLpXfYTcQ2fSo8P25m6YvPaJz8qgf2Sq1FBT1QN8",
  "key35": "3sEixXEwYwhs1rHUwNAhBy8jao28eWG3a9qmrznRbbgPbYYEcNe3mnhah8Cj9huS1otsbCDb1Yh1gWTUVvkFnCzT",
  "key36": "iKPtYFPLFQv1JGoEG5TZAwqbJvhysgjTheSNsG9KZ5JKfd3BPojxbaPendTqKVxRLH2YHeqUL9aH2p6NC2FCH31",
  "key37": "5MZNCnJZH3MdqtiJMPZxR1fL2WAmSytkZBDRbwdnTDb3itVktWXsz7ny9QVRC1UeCDbUKEjoZm3idzgqh3z1n4aD",
  "key38": "2J7PEGJwjscAS7cr9MsEnqxRMAXrjudgzoKXN6DSyNMhN7TgVZpDgFCWYQjd253ua1LbZfipNAN6dpV6E6k1gR7W",
  "key39": "2cf3aWNbuvzcfiDFFkjUsrUKyg7UFKoyoFDHcXXT8wGTQWyEj7r6uQr3TCiSLpCLiCj3nMdJ2tPQ62FFG5qbbaKz"
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
