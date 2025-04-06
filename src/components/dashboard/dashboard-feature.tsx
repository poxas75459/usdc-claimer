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
    "5jrvJ8rybiRoibKx1xv1pDp5tycYBUByPCYGgdFGJQfZUdUHKyEJs8XjttFxXsJB8vecVqqSEPCt8TdFUyDG4c5i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oUzppCxkRbVpujSCnTRkNcDixucAaVuL59jULPjPdyB8h3aEzwRuwhjVT8dVtxCtz4deb4EhbHmwTpA7k8o4qyD",
  "key1": "jrDTXyAavFDbSRWGbdAqGVrazh3JWnuoUzyDQx3KRJxBS8djLCDZRbLsm47nwkvwgRvZ7SREJwrcGfeieZu4xiG",
  "key2": "4bQK4YEuXgu44sgvgh6c6r11Q1NX135GHnmnGykDTFAQcn9dkaEcf3cak5Ng4mRWPSdPW3SyT4gYyMkDj8c9Cz6k",
  "key3": "5DpcGKgwGPtVoatGN5aEdFhgG2KNhwLHCuY1bfBuUjdzxCJXKuxkhK1vJAanKaUZBWcPtRMnrEtpHbTjFnwkum8s",
  "key4": "597hhfWZtQv4ZmYiatobomm4K6CY3hZ25XEX9zHXxntct8guyzgGPuoKSWs7ru4pEN6hgyn1AFSyA51NDGgZkq9H",
  "key5": "ZYTjusDoUwpSkmgbTAiHkSzssGA5bHYXqKSRCa9htzJ8R2X7Pvqenayy9TGvdthSmfbe9GkWCHbrYkNpswGqkaY",
  "key6": "4xL394QtuwA5Xs3atfu1irLnnmXibA79gufbFNxbogXpETNiZLCnd6HTFr285G4JwRSMETFuRzdYLpomyyRMNXZF",
  "key7": "3KnNY2jtcBzyenQbtPt7aoZ7hR1zkNWPoFNr1BULoQkDvd1dwH6vG8aoyNsXaonjZMnDheTu8EBm2KDyW1gKk4Pp",
  "key8": "5zj7VimrGbKgic583DWFpWyMi5w7SLTizX9CnNS4G3phw6yTXL6hgxgsYxWpdbSnqRWAjQ4ZLZtXkgaVFPm49e7s",
  "key9": "5cmX81wdLrxypHtNjRKdhBUXtySSFrhu7bpk24dqyi2LAKeMWJPyTWpKyHKKAFYPhSPfw9cEts7E6yuTr674UP61",
  "key10": "4DyugsYficwVHLTKigeV7aGWmnCosTQSkgXZrhe3Ejyy9AePr9ogJK8wcDYvz4xDr3vfp9Lbjjkmaj3qUHZAxKFz",
  "key11": "5ASji7TrMRtBGVQSySFxs5w5LC7G6QvTezzc1XF7ZJCLB8E7bJwrmNwkFxcuns6T2f44yi4B2aEhMvV1AXC6AiJU",
  "key12": "44E1dAXwd4NnizcuFJzXuUfecaZEuDqaZhHUoLiwaCr5MAsU3k1XMub5HKP9P6UisXDQ1LQXQtU26uzcGZ8cTUbK",
  "key13": "3Vm243ZjZGcsWQSSCjdJyWA4E1mqwhBvgFmKjw9FbXjtbbR4vZaMFms2GZDtz8mAohTFPjbs3xpKxczR2LCzNsKd",
  "key14": "3aUCvDfUifps8Rv8kWt3uzzcpNQxE5rngaWptanY1RboaLpwbTQW6ZYTndTLKvUXRLfvqaVJH5o3XoA4tdWusyhr",
  "key15": "2QZXhhmvwGXj4ycbvudJAzWQeznCyytouoQ4dKkzuDjaNkxSPrFC5smi1FXnf7pAHeDcJbairmdLEZmswMkZQaHe",
  "key16": "4vvnSjTPURvfpGqFHyv6nZYiRpVnJD7vpuWpYjf1eCKPhHVr6cywHKpVhsBzUVErvnEqeZ7cSBVdLHViH1h3c9KQ",
  "key17": "2KiUfzVuT7xrC7QDtjpQF5F7RFTP2zpBe2PtY2Sz8QFKEZATLw9iJSNgYcdMEaSTfq8VdRrAbHKeh5NqNUcmeoH3",
  "key18": "RVXxxtn5THirSU2uZChJyDExHvoSBJ8KRBZBi9NcvrafLmZk3nrRFdX7fiJvms1BAgXjEKEcXHWKXkG3oRT1xQz",
  "key19": "4SmVMMNyHFAc4aQBwRy1Su9t4MT7RtyZeFgc338eqQavpksP89W422txYPMi48RHE7vYSUkecM3Rbrqu5o6RPR82",
  "key20": "51Ue7kSuBMCYbvuzSnpKSd9NXx4iu8E4o3m1EJa4p9pcsT4cVxySz23fnPw9eysqZDqUArhgSV5mFcRSFQR2Gxwx",
  "key21": "5CGazKmMmnGrbneAqrdt1ff8S2GY68kE5A9RtTN4tsQCBKnKdaCZYaXe23kiTbAqMJo8eV2iQq92URWgsZDhmyFq",
  "key22": "29o4mpYmnHzaoe2zoxEZSskY7o8QMBTVKCMnmdJnqDwWamXCdrpm1RnpyHFaY7HAqYWmSYR5BZ242ahXd597deYB",
  "key23": "4uEJEpy8AgwzQwoZgxnDdaFa1i19UGtgwbp6MMb5sJ9dEnfhqGpTER7zYLrAvMqNBaZ6a59SwVc3hD57ECzSXLUK",
  "key24": "34cEKHtX5ZjS6F1mB7RUzusCBxEBg82soyr3j12JradeABsLuQxuwS3St6kGKUaCQY7XQYDwqhjXQPWsdzU6eWVA",
  "key25": "2Qtf64EUNMP9tvmWgyWehTmaxtfKyQ8CTPJvAwaZfiBHKs9UkWjC474PwGUiCpcxc8Tiua3p4LAeMpjYf524ZSfr",
  "key26": "3wmKWtifkwUf4wu5dWfDxc2VwxxsyQfRBDp6DzdKtNacAnBMWmkzojzYNFKfAKkxNiSr8TBjxCFVueCZQDJZEBU8",
  "key27": "5vLZLL9spKyMudgefWaMbjzu4GrvLuNhC6aUaaW2kaUMinidiDNPKFrfSPTSNq7kj5sLfX7MyiBtzDE6k6nSrnnZ",
  "key28": "4LV3g5N8vo2CQxyPLv2ZcoztTHq8YfpkVQEzrtpdxZkZh6isYHADY8kEj3MLHr7Af8CHdU1pcWoHHKXjToQfZ2HJ",
  "key29": "5FfSmL8GnuArHF7TUQQQZZeMNSUNkpqQ6de9HSGVWmqiETzTTK7Ey7413igd95B2eEjbqWtKAwKSgoFoT29abh3N",
  "key30": "5jvPUqLHXNnjTKghqMAQCLTg7VkvbCHMhYwT3XuySfUTNyUkuDhjux3JgacXLQmUC3fTWMxS7pefUSvb18k67TE",
  "key31": "2mhR7U2VmNSeJXthWgmbjK9RJaE38NPLeo32FKs1JHmGTk4MeFMvm35GgKDB6tnWApCazEowU9Sd4KNH3go2eHFV",
  "key32": "2RbL1rJX5MnYRNjaSyoEu8S6YG9VBkyzqMck97FUei7LsChDhE2GoT2MGHNzvEY5TcNa97QzfBTJz2qvP7bChv87",
  "key33": "5BwFhhLHkJMRcobswozsL3CQmQNRLib4QtSk98zLZhGeyxBTctbSXdgxKAQhaTF4me9ibrfSahAmSSXFH1UwoBfS",
  "key34": "365ruMZxjG4kAgQ34UrjqRH4Zc6gauHaf85MLoN4oSMAab1M7HAuNrLMKAcAFBcK8qtGDuc7xVXBhgUtnLh9SxtJ",
  "key35": "58Sispm6Nq246RkwzrLWKhuTXQD31UhGraL32bAspohKs5jL1vXzeDW6yonCFMrBzRzzseJAWknpLxnUm6RCTU97",
  "key36": "4c1EoP3mjDBYvuqC6kkwQUHvZ5vkWKpupeU5KMAfKJXaUUUnGDwQiSfhnRJLeS7VALUipJ9Cih3txozV3YHArjVq",
  "key37": "3k2ZP5e47qhHeontEGqeUje6XsB62caDMt185NDWHHi3F4vBWARz2VYxTNuT4wu4x57gX32JoctBPdQjeGcct1wm",
  "key38": "3xa6d1b7pMACxahFE3rPp2CBb2cUZFcP4UrfxgiZfxen9c5zDRWQmrZ2Ry1eu52NLhQcrdnLBDBFM1vmAWuXjobM",
  "key39": "2nXhejB5rgH7CPfoKBdPYsmnkmfoFgvJMLFKRZ8PEStASvePyYpdHT8KxQWZeV7ecpWLHPCibAnNSEj7kWxBz811",
  "key40": "33QA1etUMP7PdP85cBCdKyRsPjXpk5m9SBAMS5EN5nMgGrX8znqftHmiasusXcZ85b8BxRqp2YMpQTgfqa8N7xdS",
  "key41": "2d4MKgHgc4PEETX9N9aQ28SeQXKdTToPexyZajUJf5LBsKbdWm1KdDScfhzKPvJ1odHA2jmxamLQ3jNctjvAvPa7",
  "key42": "2WvTFb8b4uPx5LouNXdP52PUKkd9D5ZqeXnJ6qnSoL259zASQ9JiDQG8DTU2dByhAc2QeTFSph8EdZcDThzKjzg6",
  "key43": "PRNmG1PUhWa9AAwhwRRKpCAMA5j8M3WrJ5KsMAkC6HzY7D7iML5ECk11RZ33BgwVXzgYkVaFeEeBpnAwpekQ7KG",
  "key44": "26nuTHhZkHyrgxBfa14Jr2bfK5MvugaDFVY4uPMm1EHkcSQGGzy6AoY7mRPRFn6C5JSKYvPFZE5FgRB7Z4ExmapK"
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
