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
    "2uwo38XVwLAKvg8tL4RecubKEjr9MZwrMoT6ojY85CbC9yvZ2GuhCsE2eU24AsCiSV3WDFe3PWuHEXRZ2oXkh5Wh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GYRxqnFTPe3bkE59Fb1gTssF1ATTvtFuLnSqP4VBm56HuBbtNc55KBsXWDHhoWhYVN9P9xbJtNmqXFJxEqZ1cPx",
  "key1": "3yTGn4JXgjWEZPLVNiUnPpCeP8ahTE9272sWGNEvXa1Lco8FunCZUL73dHWPBnAwUB8aYXhjJVL7eZtffXH9sTqh",
  "key2": "wnYjLizR3viH3M9rw2w8s3PtQmwL9eQeon1LhbucHdpPpEPrM8GjzitpDri3N3Wuz4zc4KuotFsbR3CxkShKm1R",
  "key3": "5oZu8ZcFci9VCs7z6LWbYY4gZLHp9RALjKc1CVmin3XDZFo7RCGVjfV3DPZsLuqRvTRCrQvSReGeCQwbfERAy9JQ",
  "key4": "2tfvf4YckG2aQehV2XTwjP67JoYHXjh8kRzZckxV9wurmv3efYHcwnwyxdRpjC3oxF7cxuD7YptL6tosUQqwEQo",
  "key5": "2dChyTvR5p8yugtPvEBVGmsuP2b4wkh5aL8uEzFEy98tBNoZgwksCNXwnrnhvKctsT26ds9EaimVAwwVREZmb7uj",
  "key6": "5vFUDTMmRdawuyrEWrLb9zrRtQ4eCtH3La7ge3NNu9c5rDzGHyEJDPkGNRaXyPytNW4myTSoGLRFcWjP3DZjzDUj",
  "key7": "3ds6DwxyNdKuEfZafjuWnCJKye47acemYr3gqBDVsDMaT5zt2QjJXHASvyuSZvNbBVkoUiYF5yPnL6nXWqMWioc",
  "key8": "gd5xrwxcpi4kzPKUixNSFDpyNwEFk7vJtXAeTPiYUeV2Wh7BqLah8sW9xVepRNew5L1KyvgGXY59iVZfTxninZU",
  "key9": "26PeYdnzWxhMVp1LzMTpV6deoP7iTywLqCccvV8oAmF8eQ6t4ZzT1NM8EdxuszRKYargTpE72bf3QYRFnksGEqvn",
  "key10": "5GtYLEjTm3RTS39yGyyFh3gA36AiVb6eTfTcivkNhzzH7ywekQgq9d92938n9NgkXXsCxo1otb8Xz7NMAuefph7h",
  "key11": "65XRJ5RpthbqqSiXq4mbTdwH35YYwQefgNCzCg4einRZQkTeopSofjm9uGzcpyoJCStxztotm8WtVDJPskm4wosC",
  "key12": "EERkKYtf2Hxhtis2XK8ywoJRP2CgiDz6hnusTTQNfeJ7Y7Nrgdp4tLRL9VSCqoNoRrN5kktSZjUW1FiLTvtnpMx",
  "key13": "2rX2FvbRf5qpXzGyCvZ8cACrRdg24BbavrWcAbasMfzyUG6dunbbxu9q8yEQK6BaXuRftQTZ6Y375A5bRmQYEgej",
  "key14": "63B4EwJX6B4a1i6FGqMNmrvdK9Gf788qnk2eSwWyKNyrDCDjKR69WfUpF7HrarfhDh1duvL3Uv6zf2co1GRD3nd5",
  "key15": "xKrjaXEnNfaFWsMcfppXddWpVf44gDS99j58eKquUrFc2mtCq4vcEZ5EETyrfiPrUnWQstekGttpBsWZkrNdCzm",
  "key16": "np8zcdfwH4qG7ta87ZJHVcqmZvKvpRminqycBy8vMANuqRz7PL7eyKw9yPzxcg9NhyYJt7d6MvZa1rK9uMVx6ya",
  "key17": "4HyR3BsGjbHi5jXta4rYRfVfyvJkRvu1UxAiufgwrMLvzSd9SeBFzRbwFbUsM3c8g9xriCBHEypmW5SCk7wSqg1Z",
  "key18": "V9jiUvHACySQkckcZNoj2SGzx9X6tTifnKbJyiRQtBFh83uXxByvTkqMJMEFdTri8tusbVajP4WVgHGzkLD7pYv",
  "key19": "MJsKkkxJ3QUkKJ8pJTZ7TabEyn11EJQY4mB1qVJjJhB5th31hmvxoMUtpUCrUGrrVvKBiMARfTPfmbAQK7tm9qK",
  "key20": "3wNvAcQhXhFSqfdDBTecqR64TBuevDBnLp6ZCP1zwenxhPJDCsoJAdBnBgA4ypgciVigP7BKyAwZqupXfevXv3GS",
  "key21": "49BDdgfxww39H2WG4HWVakPyBmrhwmpY5T55a1qDK2KVBraL18fx7nyS6rnhzKxdHvh8zdHJCHyQYP9HcE3n455P",
  "key22": "3wc6knAVr87QEAgwjm3Dpvm9TnXDMfKNa5QuSMF2BALKFdxUgoZq7BvEp2tihqPz2kWGM9Cm1yWZyodL3vct2CZj",
  "key23": "4JRMG7FUjR2Qv1D5NHXas6wXG9Y2dyp4KmfBfJ4o5TL2JCKGf4iZapakGxmdk5Nwu43M2r7QCoMtYkJSHKSaYzQK",
  "key24": "5H1fFVDw6XaCsmbsn21yzTj7mVxyB7WzZQR6H8ievxjEfdofadBy5Y8YjeK3gHoxhAe4Z4WZC8MkCjZKdCmnDRY7",
  "key25": "666maysx4cTAE4vUU3jmGfUfwcX3hgHHSmo2hX3pAsS7D7y9XQALztuKC4yuVm8qV3SNPAVsBLwoj4XXBGLzRmwQ",
  "key26": "67ULULg18RE4UWWeD6jtxZFrWBHiq22eVvLwCAntVNhnyWVvCQv77dHJKUtJrw3Scvqqk99A4NPNGMrPM51FtEt7",
  "key27": "4JX7fKUT98uyN6g5QPvUtshWYVzuedhV48NEz2yEir7s9648VM2fAF3hoLqDSDYtPKgkgFt6iDTUaCvnAYhU1ASW",
  "key28": "5WpAsb744skgbsytTLS3SmB8RUrUiN6QNnZCBprR9ySa7q9fAiJhtBBfaeciNkkTwiq2HTcDDdwzeHKyxS1p4iaC",
  "key29": "3SuHfz8RECmf9KythW4EyHpzfpUw3XjWFLcGngFJPRFu3gdXzRk5xUzSoVAtsuz5qoWkGkYvmGn15zUrKyz1vo7S",
  "key30": "3oMfibt7sQt3Z8YaQ5aAB8PZF8vA8ACgj5dd8sUAagq3DWGTeeJ8wDWgKq3h6sHP5zALWmLNg5e2FMzToho2pPT",
  "key31": "2M6C5Lrn4kXr3BPijHQoKnCL8k2M7wCNELLmy9LN2vn9m9F9dHp9mKhz8DUk81Bk3AB5q5N2RCK2QDz1MYwko8BW",
  "key32": "2zj5XUH4AqtPGarxT8evM6u5xkSXGhHaX5d1bbqncgQsWFQz5WDFxvYa1E1x9cNxmWGk5xUuEhP2W3RvLZGKFi38",
  "key33": "mV7DuHHcjQdPn8B6Y9zbQVGSKsTjU6hDH6XHwSJa8Ze1e36geMcJKpkkR2abeJG8KjMP6Zdg7nLB3a2ydAHsbBf",
  "key34": "5YPbbzZ3G6z4oXd6HJLihZvcYTiUXFfhPKwcRcemsYQjjEvG8cQgSRHQ6963NRzFPszoGDhgphLejZ2QG6zN1L8L",
  "key35": "2VUPsK73DJUYQhCoxS4wC477sojsHYxNCv9rs3qWyvqugWLuuizQ6rZTXoeYSiDhEtdCHcimm4uE2ZEnaoJgptjP",
  "key36": "3sKPwfZj2PWcte6rXnLhxa4SxgqYAKgoPoWrES29orpYkqbJu5G6nPEFw3WH8H7Md8hkN4tLosBigcRyWHEnjS76",
  "key37": "4tbxf52yBUv1fuQFNFTagEUhmS4dnAbSBpQS9WQ2697i1xWw2Ho8MgEbUUkwGeEAnonpfKYUGpyDaqdg2RshVm9y",
  "key38": "QoZWUSYBRxmyPzKpK6MkqwQPmSgzsYsWW7uTeyGcLafc7bj1x5pDeY6QUv8LSSr1ECjRMeY8mtig33UJDXt5b2X",
  "key39": "63tXfPrNRBq9qLUpguVEiNpu3dXVsEaC4mFd1A2sebdXAbuCoRgiTT89jzWDgHuwqzpj6C4ipbgXRYkdmrWW9gWs",
  "key40": "57YbY7wEE9UFGRaQ1gzZtbbcJdoUqZKSu6Acsbb4xCpAbKWjC1WhFoAetyPJPpfXFtdrm2iEajqQR5ywhq5KDJ6c",
  "key41": "5UxUCF72QLTQfqDZ6Yi14PMfBS3LpyaM4pDeRq8msxuyZfPhF7G5WfiPKEdtvSMrxuSGy1tXyrsdFdmD2a1hjb1Y",
  "key42": "2KpTBNjwfSxeaQEGte2qN46zyBqNbuxu7fcpXNuQa8P8vVrX78nd2mM2cxMFoBPxcM2hZK89CtZ8wpcrtfkfaKAc",
  "key43": "5Ref5d7fq7Fsi1pm52y8Br3hQ6MVnN4FHhPPv8HGhaMgFgJuk6qinuocN1KFREExVmQuB7NR9z2UsDd2DBHJP4F9",
  "key44": "59twyGZPJJQ8o2FqgKaHSajcv6J31uKJMD2sFuhr2ZiybWd1ZKdEZmFYMAFjXmnsdL9vMWiyPTK9oxbVez6xqGHc",
  "key45": "4iSseTdDKSQCXJZQ3aUQMq7Q22Jts3iC47bFeEti9vwk8xHZqztsinwx1QVayiXrZoDwEJC9JuqrWHWsKu6hAFJJ",
  "key46": "5aZG5fge9BHN3GEFSRv7RW84u8dJgoBrTXTYPCErCmzg2o3phMoaPCp3q4KoybTpE2X5ZBk1r8gMvfMGaceN5XtG"
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
