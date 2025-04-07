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
    "5BypnrB7rUTuqAatn9EuyeRy9hARS1uhMEeXnY8AX9qZZyfrcCQ8HJqmmpe9uWGtCxBWX8AqiEJG5GuetFiSqxrn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UjjfEWE3eCR2isutjhGRjCwVGCyD5KtMEck4oFUyE2trkzqtQgiDwvBn6uqdMLqNKJ6EFbnDRJqnwKZwTQsPEJs",
  "key1": "2HuHooNVGDFYNzLHGZVrcX3465Fs7xLcp3cKmphVoUcYAK16pQLQnY5etZXhyB8o8ekhhZDHGewarvbeyBmAUes2",
  "key2": "bKwnL8zvbj7V8BCqZ3WxZ8kqvvAQuUAepZxB6Q1FZTzKhEAG8d3gyvUtNnP2GpxNGE5b7DKnU4fqaBKo3885r2m",
  "key3": "Y1DMNnQjUh5yjQ1bDQTM4EoQwcUB2Qzq9JRDNznBS5gNdBBpkp6wMq3rhm9PT95dX3Mbu5vWp7GCbq2xGfjDbcF",
  "key4": "2fj4mhBCW8kSfKLh1jmAaoqFGC9okD5XET9rizkhBAmJxufTrfarq3fDkEDFtWarkN6k4nfYT9p7FTNyKiwAYXYu",
  "key5": "2yHPx3GGLwLdPFw6zvGV4jsLg8RiU57FF3eUbEQbseVnGqTttNztDvKN7XU9CCUddhotPxuZZ6W44VJR4pVSGXs8",
  "key6": "3JGrhDF5o9oqdDazpEpCocjUFNNvqRrLsDm842S7khWnPTaPskFmGyeqkGob5e9E3SqmGD2LCPA3NmshU5N3qmvL",
  "key7": "3FoqLNJxfCtTRBZ1GgLrkBbuLUuUwrqkZQMaDstkymypFr1uy3FPeMrmdZzKJHPe6y78WwzCjRuP2PpLwXpLnxsE",
  "key8": "3bzEhtYBLrLGBuwWkRNuXxcdhwZUryqsvohxMFdDWLUE68ZoHXssXWrErSqoR8GvLwm82WmmckdnDMVDhAhd45vF",
  "key9": "2JncoPqPRMSj6DNykP5kpzrdL9rGULNGMmjTnNVhg8PphixjkqHgrUp5HZtKyDcUs62Mo9NK7XoS4Vdupj8LBnTH",
  "key10": "27wehKfYTtWwczEBAaKMnxGducbiD3PRnRt5gQQZzcBLViwiAkVjCk3tEvQA3tq6h2jdg2Xg8149RgWu77B1QWDi",
  "key11": "67T6q7QhpnrWC7bye5LSzEZugj6aZ8aPgk6ZQHJU7hzY1cEQGTZm8G3S5AqigCshmZTfkiSMKvijjEqJ3AGAb5pE",
  "key12": "4CY8cU4Cmjg9oV7u5EhFLbUG6A7U3fQZhA3Uvwnxf5xizjF4ewyrD5sz3dFG1W3aqo54ysf14rbZDXkThjpbvksr",
  "key13": "55i1zoHf3J7cEkfAKbRQQYUzX9FsFnvo9t1PgCfNx9aT1c4fNAnM6hu8JAgbjWcjTWUGhMBgXveSXoaJj6uKxd7J",
  "key14": "25Kkdy8SwfGGsrxKoMvziULKDGypnjCzj8G8B58YpfnKPGc1QQ7n9gWQNZ78BQXETsZufMgLQd9bp5jUz3ArU9DM",
  "key15": "5zVWAChkkCjbAG4F1F4WFpaCstwP9sGkez2WyakXYJvYUDerAJjWsZpLYCzvnKYtS3fwQQTt8MNU2pejzvZvP2qB",
  "key16": "2qXGHkQLarj4WYgxcv5GogKVFGJG24ivBS1UtuVkid2wk84go6M4YrxPpPgA1PYRuJvWfJgbdAFandN284mXTPZh",
  "key17": "5u4TDFeoEcjD2sc8PPRAwVgCCCGx8aZFhCUcPMeAUqGyYMQfCoupsnhmtPHfMWy435XCGAPafLqYxNqFNSMrrEhR",
  "key18": "5hSNArgPJJ1HWdtXaxQvJzNfJX6TchCY5NfrF29JaVbWhzCw9YuGHxaoWcq28KRK9rsZs8mHxUs7TX4Q3qH8rR4t",
  "key19": "2Z9XE6Vq4UEorfvHtHpy89mJcYthEckP3X1Risas4zAm9v5KS8uVaNzYioTcNvVa4cUchn5SPF8Z2BdCtmxSVxFK",
  "key20": "5kYMBZ67yt3EW1YDmCGArFydTgUGVvyL6EhzeSNp31GhBdL7mnqLbkCfJF5AWYzyNV3pgahe7nnPysWN5VBWyfNQ",
  "key21": "3Tz3D4F9YdPZNF56MCHfWvtN2cXUBn2XqtTgLqxu7deHYoNroaWmZZbabjSjcsBrqbg8YiGZbnhTwq4TiXhufxfJ",
  "key22": "3yAP1LohxyNH3of9sXxyw52KqRf2Pn93Y6TDocYCAHKvmb3AWqXipC2vYY8R46QaTJ2kMRobRL9R7VvKVqzv19Jv",
  "key23": "3w2PuQMm8gPa63fz4q9KtDDr5sA1GsmzKdu2JncX2RRjBY7hxdpTHP3tRY72i1xHcYkygPvNQJLNWbg59rFfffBD",
  "key24": "5FwUy87st8h9HvMvzpw4Q16kAKA1nFqrWn1itMD4pLJbXcnDZgvKQgdJBYsiMYfjDNqFD5nnWPuyEfzPoK9Ke8Fp",
  "key25": "52CPZiXozRwt3KrRTmjvjrrtLfwmzAye2LKLrwvsquzkMvG6mKjP2hN3Z3wxhueUm8indrBApmAz61N4bSinLKqj",
  "key26": "36VV71GNLqFyzm1ExMBW7CVuJvGyUCAPkr6TupawVsfkxbxzsS5vWB8SUM4fWoF1fd2HjnTKrfJvZAF8hzGkg1DL",
  "key27": "Ptr9DTmq7Bk8p6UnJkjhVaoHDPnCo8USmrFqq654KYFPFcRyjLTFXpjTMcpRQ2XuqMkQB3xutjjL1w2vbLBUDxD",
  "key28": "2bL8Xqgay2SoLVMsf52mMAgUoNJKuDzghBtJwBgMPqG7ouocssuk2yX3o1rZfV5ofou2yB2WWoNtyY5Khz6j5icb",
  "key29": "Qbrw6ucaPS8LoxuCYQ3gSHALbG7vqkTcddWXno3JGNpTVSGJbBBFvfSBh5QBLqXC6VRg7rZGonzPvCcjjzXzBjD",
  "key30": "4Q6pQccSU2duycvp7VwjFpGhPP1ZALpiGc8sHbXGQ4R6ty1WATEGGVax1VY99tRP5v11KfVfmtsSBndQ2VSyCvQA",
  "key31": "8oKxwkZ8R7U4f2cU6XEeFFXGgMBAuG58T9fqiyuNf8u6gQMCdCgzF5g2eMBwRYYecqbwwEq6s2frXEQ8vAV7H5s",
  "key32": "224UUpBtmDjxjZvYjxeUtajRiWuuySG2evHSd2YD3CZ8GKdrSm5vbZro9UtdZBpwo2GNvUfYbVRbFFQpVc4QngWN",
  "key33": "3acu1Y16cLd3ryZtG9Mz2M984MG1ZGMuE45DR4Axykh3dwAcr3H8nBVCSZrEUq1ydSjJEDXdDY3ihzGnEsE5HXMw",
  "key34": "3sp7rXHaR5yXYcHKvnuJDBC65w2r9wowfqrs7NARdStD54EDUthpdYyHpZT8jCKV5DTJet8ebMR33jez4eZZUzii",
  "key35": "3JaskJMnKF5P2iZZhHaWingZNBDqMbKMr224mTRfWBchWHkZwoWn9WzHNEjyiVoLgDJNGeJEvQjgrLMTuaX7yo96",
  "key36": "367xt7qWHrqpbuSrTSwy7LUa2Fn7wpF9snBGzqfTgtEA2QxEti8QcfAXizmdq7JenqnG7DeZCRBY3oNJUeVCKSjs",
  "key37": "3tTgwZrLPbFZk7bG3g75ggMjAUK5KZU2pHnrDP9SCHEkRHLQhpNvMFKYTh2Q4yYXMVQmcm6akvwRt7EA5Tf3QhH8",
  "key38": "2Z3E9oXPpePYcgAiHE7go2csXNkZ3tYHE3vQPhj6UQBNgg1LipQJUcgA4NniuwLqkDhAuTyLLNMCrZjGvc1byLWz",
  "key39": "2hxrCDERHBQvDoZMnsDyjLBu2Jdbcp82FkiQ6BPKg8mvWRjyJbSJtEGS9pd5j4vLo2MetHM3rwurG44p5NBugmbB",
  "key40": "46rHFpvHHYK3TRn59vRVcUcv6FUfAyUbRztAdg6Co8ShCHxqVNmD6Gw6bTtGhrH2gskwiXaRGrKgUUHL4BvhCP1m",
  "key41": "FAzXipuJ7qtC1mmTVBmihrfj5JAFq76R9yn8seFQxqwQPutxR93A6imHxPyNzUAijDW1bvfRktZNaPFibZ54uCs",
  "key42": "5FrYN19ShyYNPv1pvZUC4V9q9kzYPPo1MeYwa8nkGmp9oiyLyiqbRxGudgeqG2XqhyZaZjiizUDf1QNjrTrS97b2",
  "key43": "4W898pwScDki89MC5CC7cc9xFMaCABFBAmn5JGdyRkPKPmsFMBkdfgyyXiEmcjdu4unpvrUVeBvsGtyR3jJ353d8",
  "key44": "2zLbnVJNtHzBheWr5mETygYMbVTGuDWYkyh43VGEe7zAvubm76Ejhk8jjRNWHV5hpAPgKiujfmB7kJ1PVvE44Jmi",
  "key45": "566jXc3KRc9GU8ZbVfk1QAGwydcjW3kqJHq6E7Huey4KFHkzW3uAow42HpdCX6cC5PRh56HGHigoUyfiZ3eSe2pt"
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
