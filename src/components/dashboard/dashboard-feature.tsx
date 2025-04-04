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
    "3sHXeGjGUu6MG6Bpo3V2MKET8VMtuJdjNvERt1X5HRGP7KnpT8o12NMgQMELq3ztWejM2cfzSENYopqHxSDXJ8uZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cj69dEn8iQUEtCAUL8QkfqTQfDE7BikJvwE9FHrWuMFJLgD2UnXqwVN7hf6xtJVAzyqYF4L7x1ghi6BWbwRYdBt",
  "key1": "5jt8RmHjNRS3q2os3nwYxJdY3AhFg88CDy2N9PaN6QzGwL231dovRcMkpaMc2f22PNPPbFbpH6qyQ9Su3NF9e7xS",
  "key2": "BvvavFcaDyxAzK8PhATLNxqVrW2sPQc3JzPbce327qjDz9yTyjPFjg2wwfgVEVrGrSq5W6LktnPRKrvJgs6EPMt",
  "key3": "4w8JPRE25Veft6bXM4o4SA5HYmPjLkYZg6rhd8PSi7BzVMKoKWPCUe6UqXRMgqnPrNwi7wi92RZbE5KjRGERjaoG",
  "key4": "2WbjyCXHvMKh3qsTyRgnqKJkoZYQ9BPomesLv2cWLPBStD2J8SD2FYdtZHabcwpdVbqTPk6Cutc6HyiKxG5C7zd9",
  "key5": "4Z6Z4jWj7f5cDd44R3XE4MsecB5Hg14R43YQvXQadD6RV56VUX86KhjdqUiXiQpUGwxV1Nard4CMdh58CRpsDTx6",
  "key6": "1bLbN2ekDRQWCj3ukVmX5CqugmQw3rH4KB5Yrsxrx8Jrx7mqVGDvjJrM7NMtickB5oPGQMczKMEAFsox8SPhiCY",
  "key7": "4zJ4HdKSWhsg8VZQSkp1mNyFPPJHxzbPbARfaKZ2kMtocJ8HLZNP7rcJFbBTmzTEYfHLWtEKAPECqJzLsg1vv1Dw",
  "key8": "4sQEgjLPHaw5RNVSjBGq19YHf7F5hLECd3M6yjmNu1o4UndWonn9n9ShsbsjCMTGwF2wwqC4VnXCDgfgod1FMYdQ",
  "key9": "3JqbNZShFVRiEb6dX5zaaBFroFyGBsiSpSXPyiR8aG8J2cg6UwGiqFLX1YnSdjKzxGbVavMMufXqaZw5LfzDMg5N",
  "key10": "245fNLk544u5zdEVz9JoyMKJXSU5RhKDLQpgZ34Jk3Mwg1f5Jw4y9ZXqB1jfqC1xrtaCTxiBFvRzuV3xohJjKfeo",
  "key11": "3pr33k3KaY6L5bCV89ECSGrLmtbu7zsWje7jdqV1KTJczm96Mv6CkYb637VJk9BBEuWZN28cP891sYK54xfKm88t",
  "key12": "KF4ogqXkZEEGdPTN4NFRSsB3Zc3kRny4E9mTEp6brN2A69WvVuih4abvqzU4y7Er1NhoLUcUD25ineWeZf9ehqa",
  "key13": "2aEnoqz55y3L6k6rs5tDx3JcFmNApiw7dgA54kZZ84KZrJGuHqyC7pAshDBVwXdBoUCYTCLYgG34Ff4im3mgTYnn",
  "key14": "5bLv6ASZJ27RGKR9wK8z7HM3ZbCvHdHgYhuCUzTrdKb72ZvSB6SQNgaCGUff3cPVU5SKXN2Qo7iqn6vQtRMoJQQy",
  "key15": "2MC6SvHbVJ7JaQGgdXNo9nx5GFtvExvbNKPYuQZWgv9hnyNfYjXsdzefgtSqSCPfdLTr46VBqHHSxvLVoEHqLdbb",
  "key16": "2cZCHaQYdP3pweEi8vUmgY1JHz24R759e6nLVi3GkXGgzLDd2bfbZd9D31uEE7kPvSxgSZwa63sbJCXVPcfN8PDM",
  "key17": "4gijjsqQ1W8BTktu2V9RAMQLEvHhVHYTi7mYEadGPJJybzac5taGZaxUGpr8UW4sGSzU14E4SK2KNUDWByWtBW4A",
  "key18": "3uteWK8kp9rULCJoWxwMtV6ShdSZvUAmXoKzUJXxNVZYEFGa3acvfkP9gmL1R4RViD2813H7efeNnENxWGVoSEm9",
  "key19": "APAMkVYVnewK56iVPFasHAo9yMGtu4dnc8mmq4bKdbZGbm7bc47GCFMBagntdXSE2yjx1LiDoPnJDaJrsCGjiNW",
  "key20": "2ogJKZaxVTXTxz6wzdYzTJQx66QYJ9r2iZDMzSmjajCHhaUssK5KFkTSNkChwBPGtzQYeaZQPgxUuJpoSL2twDw1",
  "key21": "64pZkyGjPXQfq2XEc8PeSwVTWKQBDK4tESei9SRVppRug2tjWjDh962EYXPMPyf1kUEdn9A3n8NRYLubfyfnYunN",
  "key22": "ZqAMmwBUCDXF6VKcYAswzPWJCuPw74n9WuPZ6PtUGiqvuxV5hqmdTeq8vk6muXyZRGrt7Watmj3PK2nkgK19Fhs",
  "key23": "2yPHwcBj7gsczDAD6Sc9HELxy4QzSKGZe9Pp6jEWAchdtBSEbhWJpKCEyX73NL1UmjXiZr3nLEbTnLuFYFJ1WVAB",
  "key24": "wtP79BAmqQgLedMVnVDfmvtDojq7jDTxEbU61rY3ugC8VmC6U97raCV4i4dR9F3L6TEVjKPZcVn4yGDDKSYCoLq",
  "key25": "32UunfmWcy2a7EXba447H5Udd9FfAN5WmMkCSAnBjN4FSk42orkAJdFH4sFTZPWMvT9wyGc5G3G2CZoLQUqkwkho",
  "key26": "4Hb1NrpReznurMVMgtkkuocPeowBh1hqfrgSqzs2iaUQtVHpjXeCu5RRxbMdB9CjEWxE1s2FA4LeVrWTgETye8xT",
  "key27": "N6RSFnuzudxsosnSsDCreeW4bptxw4EJzmPmsNLDKrghPxNSVKoLDJ8sbHC5HKFZTuDY35A8GxS75HXeaZgvRE4",
  "key28": "3afqhDFKUj6FDpWBczn3KQ2KnoMaHQAzytBpmivLTdK3ZwJW1UZevZHbxpHHzqW25FR8HjhLu4XHLwRSbzpfh965",
  "key29": "4mWQYcvBLZ7BJghpv3FZFeC8sC7VZhoAJJHBuqoHDmSVuJoaBG8VCjjAGxMem83SWZ7giBn8Ne9DuAy1dX76hSXn",
  "key30": "36soMd6hevH8whTSkfDfHCcnwphx28jfXGURMFkt8LxAT72T5fbwwA9PqL6f4eedUzaXJGM24S6YZn9KumfgCSgp",
  "key31": "3WpFreXuoh33R66gGxMEP7yEJLxMvaVaPdNLrc5W727PEHo6bU1Rz2BupzBoiP3oB349fbA2FxG3wUriAv8nd7VZ",
  "key32": "53dZLSYjmFWV7M7QFJRAowKchz2WCJxjpBgpbFGbBPfpQXvZbKM1D4YEQcC5YKAhGXiQHrSn2bpg9K3ej9VRVEmR",
  "key33": "3jRrtcmXpsjAAApYrSdvaRLZQTwcrvu75zadX1ocJvp83Umr5x5s18F4Uu3SMjp4tn6nCD1vfgeAhsVjhUrcXww",
  "key34": "3nEVpJ5PJEzJnK591YG6GfRipFAaELEsPdPooTYqA6Fr3bWSnbwaBPoKWjZ1nPZXhQHbw6FqBm3TssuCF7z9q9XB",
  "key35": "MSg4RCKNJ3RkhrEGqHb3BWbD44naUkc4yi2Sj2D1pBbsUGqXFbeVEnuu6CZ1xL3QDUvEb6BQJoLTRxKJ5DD9KJ2",
  "key36": "Jw8PXR7hM5FzfN1WpmfisF6bU3XCZgkrU8koye718QZip7eqEK6BErkRkefWVGGihPmefJnpGn4bpT8LxTpp5Rt",
  "key37": "3RR6rs7VsWn3GoJrupLAKMRvnNdSczfC5WZ6ZJjKmBaqzhv9u5WXKjpKJG7NL2TrKf5xgSqDTpD61T7dVPB3rkhe",
  "key38": "QqZzzo1RU9PkqBjWrrYqQaex2DzcjGCBZFFPFPyL1V6XvZFTrSSWsKPw3983MGRC3QwCNoFZZw3B4mJqbdnc7JP",
  "key39": "2SewRtnsGqP6WYNHhUKikp5qdYZN2cxGTT6ESmCg4rNYhNE1aCfyqpqBh2a2hDUZAie8YK3HYspP3gC9dd42ybH5",
  "key40": "4vyUStRL8A2fcZgsEoZbKyRvUnX8bYdLHpoymyQsnLSu6CpWQCHH3bwpcVDFk4Jy58eTKpR8ThiCBch4wULnchNu",
  "key41": "2i5omYqpCoWsvZFN8qDoz2fzMw7P97xzsC8hG5sWpxQDuS4FhAwkzuc4waJTE93HBmceoiidf7qQipJTmj2Rd2D9"
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
