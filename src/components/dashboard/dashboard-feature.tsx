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
    "2a3wKcLrf3b3wkvEQsm3Xccx7Rfk5vvwGM9NjkdyFyKppFnXswpd3AXV56tv1zmYUrjyBbgrSZo6Xiy3WhL1LECg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Nm6wvvcbctfE8iNGhbN7qj1EY2Mqk78iSsSB3ZEjX44RqLqWLDtK3wikTq6UqGoxakdKFj3SAV6n1HotWejdspR",
  "key1": "4qnrAbnDFDbvpbNq5eFrN3uXua7Uv4hw4n36VSS4xiPzPB7iWUyursASJgCzXpnPmVNWs78xyiLuBhnYpMKfr2NS",
  "key2": "5t4qrMWF5ATRWrpKBs5WJeLSYrJ8vuL9DSPqHSwTif2p9Cg3cChUp7ZPp43AXVKtQyirHXPhaubbWGPe2a8LzZmR",
  "key3": "2yzHnAzKWEGabXU92F8v1mqnhGpasLqQn2uL4qN1gYpzqhSKp4w6rGtodSN4SDmHM2wmMGTwCoXCV9thVBAEZdxB",
  "key4": "5L9yo6tKHhzQhDDsn85jj15vYDdnm8wudVB1VcE6LWct57qMMxwGcx5JioY2CyByMZhCbKaTt7BZ8grE5BoXuxRM",
  "key5": "5HsCFVihwzi2jXYrQQXVT7fdSaqaZhEytHyn38yDCNnEDUQcErWgtoEkcgs4t5DYCtuJUf6tnQgTVpewgQf3dHVp",
  "key6": "be4whYHfXAAEwoUC4Rge7kifwKCygZz8v8rPnN7SBKyy8gyPZkUG5q18TTbsSPijkrWwKAKc7EL8emrwC5e8mdF",
  "key7": "3cmdyfQxUbEMuTh73metfUd1uYmXkF8dXP6m6PzPNSyy2orN33DfcfWKBzHH1c6gwdUPxbzFq89rc2eNB4W7V7Y6",
  "key8": "6YXHyj3FV6tJ1LVgi8aQNy9BCvVqpttjQDCsMkRdFPZmzWVtoGhPVp8y6C7uuatJqDwqUWN8CMHYwv5PFBpZKiB",
  "key9": "pzHuqYPNMwQbvS8PDmhtPis8cW4fC6TiQJzh2kQScvQoWo26sJgM2suA7nC7nYEhVJdx4X2kgQoXwoX2ZMUEDPf",
  "key10": "ap7DTxPKxEFTxUyo4XjZaepdkJBV3VVQ36KMXDyNfh66cKnBZEHPWBhAXvEtLvnovgyCYHVJVkMpZLXgxm6d1jj",
  "key11": "4AU3z8hLyDQDgDxpJRvC71sJYErY3wU6ohm7V3jaMqgqNvMkA7EBvthJLU6SboZ2TQVVXx9LiZqqE7AnNeU5ZunH",
  "key12": "zXDZN17peFTFPU4aFHSzW8KmEpKpak8LtxnMjFJMiP7dD1UewDkCSxkGtZtmvYFsxdDHnwqhWJXGkRtENfwXuxz",
  "key13": "GYpukZLSaR3soKzTG3ysVtSbwL9J7NsWzrWezhEhY6LUcpJaTbs3eo6zrq9Ua7deTLrih4111jHm9GA9KydvibS",
  "key14": "4unUuHP9SJcBqEFKGXJe9q7scskNdeA39uFEbhGDfu3Fo8nMQTZFrTCf3wgq5fy45vdPxkka7Cq95vXF4M6WeMnF",
  "key15": "4YajWP6Vfzkd6vq12DbyKQRqp4bAtfAgeNuYMCqXLH2MSAgt5Apbqhngg61XAiYEAmezuUXhYkYhBS1W8jq9YjmS",
  "key16": "5EPTZyQDmFjbAuqF5Cwh4CY3qEbFCQjRvbnZXJ3GzvFj2tY7qdZLYafGsptAU84TaUGiqCozVoXuX32SMc9qvs3L",
  "key17": "4GDf7wDzE7qoeFimN8ZTHTHn8cSGwo14DP4yfquCCwz4oo6prtyXJSPQNZSniPRiJfvSWk723Z3ckUC8fgpGRqGg",
  "key18": "5fDDrZZyydmqQ1X6jv8qvZbvPbCuRSUdBkgQqLmvmBYQPkjTwJNeC7JzCzYeqcKPZZ9Bdf6Y9C4H47rRyq59fbfD",
  "key19": "5VoE1fCVdw4Ei4pXG5u6aUJcCmeWKHQFoupGPZry4HaWUvGU4kANVboyTiFgM3WhwFk7j9fHaNN1HjU4Z4qGdQXa",
  "key20": "48HHi6EgURbXJsFVKZssgefAa2YDD7CFFExEnAHAmSqXrtkoMUqgNRw9Fp56zZpBQzgyNJMjt6gdTXbzXn4cs3nP",
  "key21": "mzuKmLBPMg55HMSYKKkZFH2wgLvFh1VDv3zg66fGqUh4P53X73pi6SDMbS6XU6DmB4YmuvA2CZF9kxkS5zYnXH9",
  "key22": "pfEgoBJGoFENxMzjXQpBGmRtW7MXMRPjFmMAb38bqUbcm23yg1zVu96aEkV3df7y4NRugCaEq2ejEMMusBSAVsp",
  "key23": "2XLEJ3U2fY8yB6pQNrrr9493KDT2Crm2SDuQfwGMh5LJtQvPSrfxS6UvM7YKAEo8ACZ5RU7ZGqdyBij5nN59d7o6",
  "key24": "2DLyPWibG1ErTshehuVZaTnNggeuUtXDZGQchddY4HZniN1SrUasgVCJzgMihY8Pci8iZbCoBCFW9vGoqdFarzDL",
  "key25": "2mP47bVn41Qr1B1Gq4uZoA77xSQeSyHdvWjL3FHHeodyuNAkNRun9gpJdgubp4QFBrajngobuqe8fHVp9FDVqBew",
  "key26": "3edaw7HLasnjgA7tMgds2tZE4yNSytKAx58eZJgNuPLCj9MqoBH4g79tBKy1yUrcB8ykNgXGComsuvqryVSU6gtY",
  "key27": "5uGuKSX9qqiDL1MbnVkTkzyUAotnhPKQCFQzQX7hZ8JeRWUaiRsuQxziAcsVJ8qhcpARimga25jPUUAXF7CG9Phb",
  "key28": "4UDK4FiyqiYtjW5PHYJmXrAbSkvKhE3oeHpBdN7EQEg5Mkwud4TGqXiB8DG26E4Zpsupg8i6XEevRJXAUK1QGs64",
  "key29": "5EL6ZWhtK5cvhcCuHGz9vBXg1hSs4KGAPtzHBFPQeTdRNLAuG33CwGy4WdjgnPSnRDxfqSmk6j1MoEr8g5oiymCA",
  "key30": "2EqGkVwHjgZRijnzGsqtxz7L4ayuXTiF4gUtyBmau8BBbgXbhKhAmaxkTywQw2iRfxQSZohzA7EPsvAHyXmzEVwv",
  "key31": "28oBYHmhVjDkqp59WovA6PT9XhhZ2WSxAA8tQBQp5RQ1WPGQAKmkB5dTPho9wQMn8noppZtNNndHxiUF2pY2kHR2",
  "key32": "3oFuAyXu21idUiS42HpxHhnaXWpyNyQeCEy157B4WoW6VPrnW4tGvEeiydz7kpuS1pfytAfCpC3WiP22wP531TYk",
  "key33": "21iFNfxkJHWv7bZgapZnT6A6usWr9dbZDGr9EGF57psD7XGrh4YTmp71kUz4cUfQ7TQxtLU6dUBjbDDDUGVN2UdA",
  "key34": "3rLiR5uaYhJBBqos3dYLEg2u8xkPYxCTHJokz8ZQJjz9vfMADqxm9y93pnuqFBNR7WMLucGuMue1zi3hyzue2Rn8",
  "key35": "2NY9wvJos4hQ2uutLpXR6o2xRQpFQpjgA8gDWKxDpXfn4k5iXdC6fqKuE6LYNfTspmZbn7ipfyo9p2ckiadCHTeT",
  "key36": "584sSo75rx8LmEHBtWuqgd7FdXGFnhdTEBxzBv9UwVGxnLyJPiQrctgb2cMDPpTJsBZXTWHu947f4fzCtboeddb3",
  "key37": "6KRgFSkDBWpzBvvV4Lwg6q1NLuj3ainszg8ubdHJ7P5kyhjCb31nFXpGdsmWGxcy4TM29Tt6JKaqafgZhkRAtkQ",
  "key38": "562fo8fnuKMkNSB7gPjuqw9ypJ9ue4rj7Q26GGGC7viXRRKZpYpYdqngJ685axTFZogTKMeBZFEuprPJ1xmPcDAC",
  "key39": "xDF2YDKtqiVWUaCYrzZidzK8sd8FMxmB2hkUT3DYSfsSeioHsexaL33yTCBqEChvq8d2dWdUnhRiJL2JSQ1w3Ed",
  "key40": "3KmyASVFMV9iL8jHw9dtjM2Lg8vnFP2b52noeU8jNV4ZcfNr4RsHRgniLPGrF6xdukj929WuzyiumXWSSDkXmq62",
  "key41": "3555vpwSa7T2SL1vtL7Yj3WDeTeAiWMq3gMRyjKwdE6gYFUNBcgsM7s6xDrV4pfEMesLHbsfxZb5jVCUjVuHdpAT",
  "key42": "3iJKAEQefhnXVLFjZmQgY8m2r2dVu3VFvXEfdc6QFoebq8UzSjUqiHCeR5KC57d4RUzMHkxBqhACWXce8s2cgN6d",
  "key43": "3K8qPxCbzcGfy9LRehkBBnY1gifnu9kCS6AvjNP4aEQvs7McaDNBDd2xcz31gdJ49hxQmNaABmjSKzhJ7bMMWfM6",
  "key44": "2GmXdfLyuR4vbsDcpo3WEXGdwnZeCyTejYhU11ujvKzpgWP8Y6oLA36h4njH4Rnr6ZCquxzszgCAdqLrtYegfnUi",
  "key45": "46qTw4MK8Zaf5gXwrsRH6PJU2i6t2Ua6KASKdNXeJtPY9pMHRywHb2yvXa7bXCcGs32y6B94bzHGHfawq8m8BgxX",
  "key46": "5eXamGQLot2ntayzgCSZp7wQS9u32nsfmUbk77MHCMTcpanLo4XQwmseRd7FSC1YxzXpxsFN5BSvvZ3rjyAtEXGF",
  "key47": "ZZc5AwmRtLRoy8yrXmd2oxGcKedRgD5BiZsJ3BbT6wjTsbVWM3pja7XK2QXucJ5A8SSX3BHwi42rPdcGjWr2rYy"
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
