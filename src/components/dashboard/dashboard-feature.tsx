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
    "22n9eByfdr6WsFaWASse3WyykukMJF2pXJauynJ5XG2cyCtEWUtsdXc7RvCber2FkyGk97tXHkA91PBidZfzF6iX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2y6rxLSV9F3GdJoRcLzUCaz8CpTvwcM1iKsB96UidYe9eHdeYJosVEJAz3XSNzQVy2r6QPxE5X2CEnE4VthUWChQ",
  "key1": "i48c7FaRGAb5ru1XAzxFv5r8xQ7JKvKTP1AoHv3Vy1uMzA4mpNNFTMSo5KhwCeUkWop3weeCeLsjeLeJR5PC5Po",
  "key2": "4hPYsXovdshr4p5ue9AmmaLJGWQGkbvcCZoz8mGT3JUpoTSCokALnHLwXrSN6pYPVEQHezYwY4jNqYdU32K5dA9y",
  "key3": "57sufp2NVK2xpG9px5oSyN3PP1mcxPTM12dJFnKSZ3Zvkb6LfhoWsfBVA5o1oKq6ry2DRWro6njcyw3Re1tFsess",
  "key4": "4Ytz2A42KAAJpGys1eujmwBzTa3a1iyBQLiADdD9ECz7vmcTx77B4Pb8csWownqb8VGmD2611oLCZJZXxBFDenSP",
  "key5": "2GieA1vi8zaksJjwpBmf8iGzi6wjysnUsU58K2XUxE72dj3syPTACQ7u2SJGiGGB1ZRgRrK7BnfbbREuTjFEEbzz",
  "key6": "1cyn4uFiNiG56hQFLcYfoUe8nBqVf9JNUg3e54gBxXDKur5MXDk9mRXRomwb6RBqeyqYdx8XJjFDFMiNwTpLBvn",
  "key7": "4rRzLXwcNZLhoaETdUtnBwRZSoQAvBW223jVAzZAMYYN2AjNYAwA6H9ekCcYzDqUKXuGXGDL6QTpismR39Xp6Eku",
  "key8": "86SVuSWgjTJLBtz6NB4sQqmEhfAPyhmKwimgzQLhfbjnkpFC8chWdPVGMfKA8KddznSodTrWNbtvZnptEcwzBBg",
  "key9": "5wE7dYLbe6u3AaB5WMVQk8y2VAurAmy2Qut5nBWWffg6jXamJ1AkmMfYr8sonFT569FQfgJ6mqaxD5d3ML9DZfLp",
  "key10": "4JdsSFd9KDYV3kwaCYdwX2yjyQfHseQXUf1jeBR62edtSWmC1a3sBvtzLDpqBYywaxgidY8E7hCxYm8Qwnc5L3Mu",
  "key11": "2AXoPtNbQ6SdM9nwrcLktrnXEMsQk1w1Qiouqe1Voi35ZiC8PZUuigRq5jE5Hvn5WN4VM9vetKcKD5H7wR6DjMSA",
  "key12": "4bCZzrcjUC45ezjPthLWt3LveVFo2xtyerrP3LpzTNzio8ahGD3ds8S4M6xNHwUAcYs1q3eqb7YB9V9KdB3DF9TS",
  "key13": "2zScNJEEW5RYyhuMPDxbybn1rBQDw7E8qZnJAH8MJb568Mw9xCqd3sewEqiio9qaeUNPyogM5jMhPPErpNSzeb3F",
  "key14": "2p863Ab6jDXpCwBGxJxQvoXKQFnESG79p9yDBnsDybquvmp8VgnYNRKiYPbJDcM8donQbAvZgwRwCpSTTojXz79p",
  "key15": "2Ca2rrAFTfuZryZcGdCoQZrUq5xi2tUNRFSW23sZv1BjCA1DDnXdFeZ3BhXjYozBSR3B4RtHwWQp12Cxt5C2aU6R",
  "key16": "yaMnUjKb6Mm5tb68dyT9qySM8mNG36kXPNzJ2B1JRVCrFZoKDuK1VhTDL2nPGMBxwMsmUjXHmQFDJVsxMM2VYFC",
  "key17": "JNgg22hHfbPURis55cEfUe5iBoQcv9byVufoSfzEK7fADvXwXcMBBLxQoNnF2VTQ5Tk5k7kwfBQLCiQNfem4VKu",
  "key18": "44bUjSqXpPSq6ERw9G8xbsZ8qxCHyLmHrdbBF5BSL5JgrLiyV9HaHiPLBG2GZ56Ly4tjhHaZXQXAbqPnjt6F8etw",
  "key19": "2noYhRNKfRowB6Gqp3dKmffuE4DBEozDzq6emL4tt78h1YxnKWDjc8AakoqVpZmSUYL9vz9y1PkMuiqL976i23d9",
  "key20": "2srTegVT7Pk4d1w9QW1U9qXNRsU8hw9pvhR2yYhZZNboKTBfBipyP6xwSchN43nN4o92FPDQy8PU6yJJRcSpir9M",
  "key21": "4B3a5RSuBwiG66B1EGUP1dEsadtuZDmKQTHJBgnnx8n3kM956r63e9zVEMxkA6A5SMhCvh5mmzAQeUcYn9b5WPEa",
  "key22": "4f15hhDTZDaWLH4iHdVqyQ1QEuQh4VusSRDnndTf4CtMsJn9G9zwPVgX93PbixUKybEBmFLURNyn8Q1eJZ3w1o6Q",
  "key23": "4Jokrixp5hctMW38ovapdc8DYSMKGdWtXiSjzNMrmxgDNhwmiuHEbiybajw4Fd8LNpaoyY8MVpcbg8g5bb3fTr7a",
  "key24": "2tLp2vX4YaFpS5TG9BN35sKgA3DHhgkDqdAVWSMTNQYcKiYTYV4cAukRsVtXuCdv7x5XRB9ivJnTSGTyhyVhadL4",
  "key25": "3i5xRAN8hL5B7eQ2tWKaoK6qDnEF5Pd1X6Tjww3oax7FEJ1Vm6Wpw1QWUM9UwsV9BmP7qRUDvki9UPUPDPsdwvz9",
  "key26": "41RVXADsb5f2m2ToE3SnCd9957tRyjmwCiV6pz4dHny4opbDbb8Dhgw2otYFVK8tLt4pm6duaDSCA6w2A6yKZsrS",
  "key27": "KGDSjvTAh8iogmSivcQioA5QSgmYe7HGFQ8PjG7dR8cbJ6y81BYWNX8btUM4ui5MkVZfy1bWNxp6hTRr6GbFXbA",
  "key28": "39k9jzA6E9WbjbYAgNDUyBYBXVazypm61MvN5ukS5qp4e4z7JHWi6Z6Pa1QqSfoD7c9g4YEG7hgYcrt1JmkzCvLG",
  "key29": "5tN8dGNt59Rcb9QetgRx3VccAmcC67DSg4H53Pu3d12XH4PVFc3EhJeSma4QyMaveZfMDeuPF6q8zAhpTePnzqRE",
  "key30": "3EnVFJQxbWc4vr3reDqWTH1XTeJyDHeVn1eHV91bWEWMfYY3vpsCizPJzqU3RJswNyGyei3CiHVkGCh8ptccqGnD",
  "key31": "44ybP3hkDbTwiVepSfKENCNV37aP8ReGhHprshAi1V1t5oW8Pp7XXnciDyxz9H864tKvJyZYLq1GLTFYNchAEF5V",
  "key32": "5LiACUsJyNZ1S4x2UDKkwdDL2dpB5UJxymvMcQLMdiW7osX5yrGMx1zKQZPVfpQkvHDpzM3PEboNaBtSaKM5qqSn",
  "key33": "2fVq1rnRj2rJ1um4UCpKxprwmgVniby1uck3DUKbXa1ZFy45hqV3nSrjSSedp6HpyAvHoyjtyQGbHRzMD86T3txR",
  "key34": "5qu2jUU5ZVs1vjCN4QEv5RqmbLqHzkizwp31Xax6dwj3DhnpWYyFweWRMG9MfNX3ZR2TzfaHinX9Asq9DUQjKVZY",
  "key35": "yWLaB5K2HKi4yZX5LicBPckxKp2fbvdzeYr4NpbK5He2qCAU4qcATBbBmGH6xx3wqdA6xEbdtucnexryuzGWPMY",
  "key36": "4unKYYQzZBe5bJaQDVNo49LCt2KvZB9WrZt36QGiCN81Mfh7SAhMQExaMwfWcTvV521YQAk1ErBWfhcTg3135mnL",
  "key37": "3yuxfZ85oCzYs5KkXaomeCHvQwmEiYipaZxZEAFi2SeydrJ5PT6ViQLKpkWjH1pi1gvZfvgTn1RGtiNHkmKRyaAx",
  "key38": "32HJYpozvw7CBpHoWkBtDmteuwvmbMV5kTqPes4a9wHWhSsptW8U4hCHZYQEKEBby9mSJ2VGzh6KbHxCnBBtNx2u",
  "key39": "5NEXqdbMDk4Koe4fxGGTFg3viGq6yfbcJ9vobG7tBncENTdET9nE79kA7Zc1Qzbn6rTUDG9aSxgP1Wz8iusQGMQj",
  "key40": "3fjm6PnHCfKhuTP8GtduvPmnWAqNcA5mknhbDrzSZxLRi2wonyiFmpbFyQVLBRcDaixryC1rKJWwDL3ceE6Gzu3z",
  "key41": "64VrihbvSe1Gryy7eeJyTNRTnkkt9HNu4RM5j9bUMYbTbU7rSAY8Bf41AYHzcDkhBRfNisjg9WQzuAhWAvW8ETC",
  "key42": "4yMyMR9AZnoTrwgcegs9SNAE2vcA4DShPBWg74JSFeQaM7yJ981FDYyKdsmSAo3Dv2otQzBYYf3oLn4yniNhGQya",
  "key43": "Aa7Jh7VBN3digMuX61kRTb18PdeNpGZYoV1F253hSxBk1Gew35mpsBd62HFANkgJLtNeXxWJdiYqSYmfSoTLMSJ",
  "key44": "TN7iDK3gjzjG9jewy8hornrMrqpf4WMTjXtQAdYM3RdFzgWLHHu2chcPGbPXgkdR2kDa3ovDTRH23zmB1PxgTLB",
  "key45": "264XKyWdRoSDFgDNtWZ41N7QE5q21xA8Voa2HUsvxQnPzksYd2PBjsGGZnQgkmVHH4UceDJWZbMhguGaq1hbzsMF",
  "key46": "5Thv6mYk9X1y5n9nCs7QwfP296WLD9Q9xBVqW8zef7qmMcfyyWKFxEKpZkUp4v3JFsrMZxkr1suYyGZ7JmmKrcin",
  "key47": "5MWsVXihc8NrMyo4sby1yqVoXrGKE5Bg2v3ebxAYQ2WKGu56qJwx1JDQoaTUz2cqR3nxo3SCxyhPeqGYFDUNAMUD",
  "key48": "2VP8QFChJuxCJJZxsZomD7BcozocJwMuRPvND1KmbrbYhiXuTGUcxvQJnQZXRbKRNrzemqN9nR4NYNuEBwgeP557"
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
