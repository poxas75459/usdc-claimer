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
    "cPhyMaXUfQFB6HTA6SDVsfcneTHibjqx5SfbiYVDuvHtxmsyvkpwruygtZ33TdY9qTUAtkz8DiRAeveGD9HZ3Zs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NXqxuNG2fWuAKSXGoEBGj8S4BQe7YGMuJzcMnvGp5p3wQNmopndYAkLWm7M2vPg2j4sorUr5BPnRCfvk1L9zbJ5",
  "key1": "3uJYDYcCwSbqyQamhevxDFrhXYBxPBXv83F5faZFFFfwmQMySs9jMD6HXhvPT2ndYFafpsThUFhJ32G2DK7FgZSV",
  "key2": "46oGxijKE1wrFiUWA2PpFgZP5a8ma2s7UjhCyHYKbvbCZFhTEb3mExZ5pA2WjBPqi8VCqiRXeEpLfcawcXFEhSyD",
  "key3": "5CNt7hsCpggnxKC34AsSusQmUESz7ZqhWqeu2uSmb6BN2gUMKpJK7WkajgL6j1vmN2dDpqTaptAbnDN3mESYt6Pv",
  "key4": "4xbzNrspaHQ3iBnfSTYJNbHEf5FZxmrDJpBJHwKNNWkMj6KCJ1Ui1dCRUZcDhQPxMAE4p8pQtPwfS1QQ5Zwwpibr",
  "key5": "3zbhmPqe9WjYvCGjhJRg47rTxA3PpWzVkdfXUjc3wvaPpFazVACGqbiGf2d5mbKmBt1mKNDnQdFETBUuoQQfiE7K",
  "key6": "4pf26h4DMSXeFtnH31Y42Wdz6VnvXUx22fDS6dfxXy8wwygPBM5YgGhhzvzqcuYFdNc2zoDFLdCwRe96pV9xHcR2",
  "key7": "L5STowK5KrCd9UTMziAkBBwaQMuidrW4yR8u7kr7vxsdtq7WU6gFCrKgEsQXbzSJYA5DNUgisT67f9LgGvHdkpV",
  "key8": "28LdKYUQZTVNtozZes98U55DvxFZg2MMEfmH6cTwqDbG17efadtv3RZDBFufPfKEbHrdi4Nx9YDEs2KZCBEmxzgw",
  "key9": "53UXbJqCAW3hVC8Q84v4xBFoF9cFkGQNb2iHa63G1EhN8E1MjNaLxr4ubMXVcCy1bw34rg6ufrLBwvwuz1XrmgPK",
  "key10": "3eibmkQEsMg2d5Af7PvVE5upcfoRXHcjkeaedrpRUTdAJj9qBrarvfvanWgJW12T25St9B5QfnbH4vuh4LaBE8a7",
  "key11": "3akRKqGhQXhyuMmDD5XkJGz7RX4S1UqtRwRfkfMMhC5dUREZcMNQZFMRwWmJFh7Jp6fBAicYXHyNeXAquPSp2H4t",
  "key12": "5QMY9uYQ8MZL3benGnwniRCNcy5FiHBRn8pX8562JDu4RJXrUm9yArL9igdt1apWse2mT7n3DoZsXBGjEucsjcpk",
  "key13": "VLjqRk38a9q2anVTU5crrYCmhMQMnCaW1MviqVE8KavbQNqBhn31U9iSdoG8A1iE9JVfddbUeYXsAvmGKy9kJ1R",
  "key14": "sQMQniS7KaZ37EW6qe1az1vs1kuwHGxtBFz7dTuvj5b6QDPd9AJwg5cP5KeUEuTLRg345BPwErfqwoB8T69tzFH",
  "key15": "4JoALjCrvfaN4s9M9xU2TH9kCS61NVktvwNCyxzEwDJUPzwyCdkoB7eJniDForDpqABTMxPdCqT4KruNsmtcLv3W",
  "key16": "44PmGc7oXBsRx3AmBenEA74doSNkPc6HGV6i93cS4N85h8TADdayVX2XdpMXUbSzk9CxaQ6NpqhhfwGLToG3Pijn",
  "key17": "3PeZAxb49VuQJ7bo9mc63d7nHGuMBXJDNrUCwD8vRsou1upDbshoGo89gMrr16hDfYCvjKJ6E9wvjAEphZSunjJY",
  "key18": "cVaJPMP3JySpaYufgeD4Jfh3Mg8tg9pSwFaAHrmWkF3tKJyPnoh8Qus5eA9Hg69f7uYnU9oJjfEHg4VV1WEfCti",
  "key19": "4mAZM5mafbbBqSFLRqibc8GDLrcRBA9biP3JGqaugYUnvNimvUEi38WY2oz3pn1akwCcZYi1S5nFUEvpjNiEBNMC",
  "key20": "2zXncsAKp2NMTfQDaxVgi8Z7MoAb26cpvnuAqNcpzm22yg4TSNeqk8LEBkCqfNZ9uYdiCk5bKzjjqo6F3GwbacYi",
  "key21": "3z3PovtHXJzdtGJNvsbLDoKL1JJmrUHCnNpTuyNvp3nVcMnDXjEXUQUcvAhtzoD9q3sJoZBCeQxN1DAGugq87MXZ",
  "key22": "3fb1pTn2y7EK76EkYxTD66arztrSVyYeJLG4om7vHDer3PAZ3qbwuTeNDaqiNoiin7MUQo9P5Hpv3LNqLvV9JBCu",
  "key23": "jCNTUHk73b7AGbxrrXrduEjQThTPY2tiK4wbrWWDQxnUvidyZ7Y14nNUAiZd6A6dYoy6mbfYW6j34MMHftgQKs4",
  "key24": "5VomXbFpbrqrzSJYVmicFdcusd9trErxiCyqvi5Nm8yt4cJiEn99Y3RGqxbjjdJi7EiStCpDSX24ZBmeDJu1Y2so",
  "key25": "oL2knzfrn3Dd28HVwM6U4gypnyd9nB26Lnf7kRNibK4eVFxMwx1HbLBTyKUznjMNE9Uzk2gd8R99zEsBHGTk3Le",
  "key26": "2JZM8WtCoU2MHL7eJZJnAqbVuMHgdF2kgPLwGtPU7X489jR2VKZ8V8KCHEyn9VLwNiXwFHEc7aE2jjgS7NPd2zeh",
  "key27": "5kRcgjpkb46LXNeZemXzLgyyinU79Vzpa4RwJysKrVnxuhsc4H8C5dgE4DJqZ3N5dPfZS8WMCmMNTAkHhb84coPb",
  "key28": "EEct5oM7fvs5oFtsjtd4p2cvYJUmPkqjtjeBQXYsg1qHx1gGLRzjhKWYG8wy429GSrbwWfiYZQnMzZoRe7GczR3",
  "key29": "3zBTHPp2X29VqRVYF8JWcPm8aFt5PgZeGb6rW9jdfN22H5foqZXndU2w1LUbS6hQqWzKc9GJoFFdW3R3uQMuCjbY",
  "key30": "2YkhKHhxgbpDbodmvLQi7MfdEj969TQ8qvTa6H2wcjw2oC552dmnjt5yVymiLe9Rtv78bPhWBaCfj24oog4zmJMu",
  "key31": "2FSQvXn29GoBT2nSTBTnjboppjDXxB2vmY9SQsxBwAbB6SNeJ7nmbvj9KfxyMFmQgJkJnsbGW6vkCx2oSkyUmu2G",
  "key32": "3zrAw9JwiCDhs49znWQ58ggpKvgX4MPLibYhVqNGxzbFHraDVqqYSiASixMYGNc5p1QupBAcxEtoWcdAfceiXW6",
  "key33": "467VTi3eJGCN8gLcK9vafqZ66n5A2zMhTVDZgNjyStCadTJ6j5RLxSnAJAiQcs7wPgBaGMgeskqm1NhsPcka5Rwn",
  "key34": "39JeQXDFQuLTcUt8wAyKpUGuRgzcK5tSWyYNJXiS3dwdE7cTDwr8KqUGtdHydHKSFtWuNjrtmQnZhZqmcfLKXFzL",
  "key35": "2j1SJ1ASyWH9ak1rA89zqse9pPff21Zmhvh17yU7UDcJeB5uF5eowe7MVPEGJYyiczBUautUDHeWNEaEAaYmYANY",
  "key36": "5bQRhPehu6txwXtNnWnQH4fee69zjwtHdgpcYoJNq1p7MVuFL8Tk1hsrHFn8mNQZBaMJReCt32ncPTH5VEsKD4ZN",
  "key37": "5JFubK31h92XWS4s9hSZQRiR7VZjUnoNtzQnb38C6ZDCMWFsPRhvqnaYvQWTBic4fzrnqDeamojJyHqnXGzSBeuB",
  "key38": "39BVYYwRSZCffJdAnnEemvfumrAAhzVNaBj6d8vnacRjhU6Mc1efEt31MJnTdaqTNDJ8SpfCTUSHfqsB9wSkVeER",
  "key39": "3B3hFajDAhYnFXndjPnNsLMJkzgE5K9C4J8513t7NotNcuAh4qw2sY8pCnSZbXm3vTvZHQzmNZmzxJtQPCn2QL5w",
  "key40": "2DqdKfcHYozVGn7rgQm5RF7NNNbvjL8eU7e7xWpvRqbZZ8YGwQGKDx4yin8rSg2HPCJheJ7Umpsvoxjj136na3eu"
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
