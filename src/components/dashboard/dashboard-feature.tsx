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
    "tpimthM13ohkM6NGEHQhVdEYE5pKixujbKgWuFP5UYwmN533jQibtELg9uBVrFTJqzrU6Rt62FY2mGwc6fqTwTL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4paZgA5LPkYTW1b8tRmyQt8XeGRBTxFhLxyRT8bLEQdRZTzWfzeT1UGLrFfrFfmvyayMea6f9PvK3dNBvC77T5Hh",
  "key1": "271butgdPb3HBLgsLYF8Nc14vTTKLzZ62kzyJpkv7q2GNr6LLJBjw6jQhbzHgWhYLBADkGXqwMkQWkUCN5BNWXhE",
  "key2": "3yimhWTVGRi9KZaAjS72argWzkZYFnj7pkfJjMNR32NjBa2BTaUAGusJmZyvUzvULE9exbyL2Ykz3GVLQ317airS",
  "key3": "26XKQn8BX7Q5RiPSSqNCtKCEozfs4CojAYGLuTzfURKqnrpU9D99qESye6DqxfKfXzh2zXmgCPtHHquGwn3Lmu1D",
  "key4": "4gLYhSToDWVvKrEeW3FE938r83BDyVrPDxudhiRBzmUMPugH8vLvqxvyYVY4t8k5YpuB9k5UoLvuDhsucpry8PLR",
  "key5": "2zV1qKqfYsrPWxRPuSgYf7vr1SgAa3fKArtsuU1iJxffQjQBHyyPSJYyEtVFdW8uChd9TbMptsAkCp9CuUTjaPCH",
  "key6": "2qUpoAtB8Xh6VApEuXkHbqNCKg11vzhjbzBTntqkvoUYKRr8zYSk9RqF7ZbscGJRQhrb2NALExuESVgJrNBSazW2",
  "key7": "5uyp4frQfqrFVJRQ2V2fZx8GtmZbg47kfx8vkxZta3gy6zdAvBAfvGtrunhD9917C2a1QnPZjnRMtkBT6iBdXWTP",
  "key8": "3ZezSVp5hLCpNQDQoG97jEM2JFpPgXtXHnfwEGBkxPzNhBenmGUgNp7tBErtzHefFo2JEstqfNcyRGddFDPSEspR",
  "key9": "3pBEL5cqZvF6YW72SrG4KBaekpXgBgPfqbLSi6RvFmUd6yQVq8jL1Xe742jPY16XSJoW338gdoir3jHFxzr5394E",
  "key10": "4crxEk14vBYUBU9asoLq6e82GfHzeqbuijjrLo5CPuA86GZocAtsyJMaajpCv7Ye4jFRMn1tEUgLEbgB4SiBqGQp",
  "key11": "4brPQxTX5UdEx2MDNWjxoFTEjGT92JMhjqG2UbEiVKczRuwoSv92Bu6zTjnzgkEuoxiQQuRirCDLFhu1KxHBQT1h",
  "key12": "2SUXL8DmciMBQnV6xmQ9oorRwkgwAG95RFpJojj1HCyHZgHJY1GK4fUHPA3G4zvpoHtHqJsHEawznKjpRxmeoJus",
  "key13": "5b9BrWFi8EVE2jDTVY1HefUH55TLPfvYwT9VqnBuhdoEd5JEt7dgJeuommA8d7RJSWWd4P7QCBFfnCt9BFqMfx4U",
  "key14": "29gD7URA5aJ9wt5VW5h3PhtsqsrYEsCL7QLfSzRJAgveR7RHghASp8hhMfGDe8vb64MEEcw2Z8fP5YqNR6HdRe3f",
  "key15": "3JZGuM8bvY7MNLRj2eJxErJCgyRqMgjk8aLEZXG44BfemRgQxrqeDUbHWZBbEXJHhyRaNUL89hn2GMnfeyFfZysZ",
  "key16": "2UJKBNzY7BayNNmo3Zoogvg2WkLNpKAWbTajQfqnAMQQ2oeXnFbhvDwKX4tYPiWAVeG56zEMe1b13Y8sRRUHpxhT",
  "key17": "3L5tykeqKaU7tQ9DVocZhrsxyq3eQaYjf8yqoc4UPwUKZ1pNMKB4gspye2MjJS2GEv6CwRQMpQyycPTvFqwpVsNv",
  "key18": "2Zo4P5Gch6ApxcXZ4VG1dgSKMCQFwgL2PBP32gA3ppzCW4BEZ7V7rv6MosdQgNsUxu8PVd9wCQPaBUYYQYkdRsq3",
  "key19": "g8WsBeigMe29YRqEkYGByn72AFPvJnPrREJW6vp2SaAHvSv4XK6jDRz3XvtAMTh2hwEPApzY7AsaamHfhg9NGNs",
  "key20": "39aqq7J1ekwjjVh5cWo6aJQHNQZLsDBdT7xd2frzwWr9NondXErC4FZNYeLRHeRd6t6CAFtM8wbrmKSjQwwxjZC9",
  "key21": "XFefZbJDvRRYcEkJwr1vdaXiDtUa6MbwHfqP96fEbYuMWECdL3gu4uDcjwrSHG6CKLweQroZPLsUpfz4x9ZJNiv",
  "key22": "5hrhbXVxM15drwAhLrC3XpV4vVM4xRZEgLqWAVpB6G3biG7V4515QAeQ7fjVajcp6NCVoqD5qJzRwamT9C3Sus1b",
  "key23": "2T8wkULw72hXUxGnFpbcpVLwgXK6ZUii97zFcRiDhon47uniDUMaPCDjXLwyYRcg2vHfYaprp8avYRR8bAQhzspt",
  "key24": "3CMBLcTT91iXhPf2JHgPEazN6RxBRbZYYfKQJKmvvaxgtgzCq5SpWB8af6hcyjD41VQYBqk8wHYiuzMm9V3o6xNr",
  "key25": "fr2wesvYRBGDNFQERRYViLbXXGZkBVyWsABaf8iicV6fkAisaygN1jozR3XGauSSPE9WJgm3jDvSNAQxa2TPaM1",
  "key26": "49NgovCUwpGoLP36HcEnj8mZNvM6tsVU3JLAsP2CQT1hEWd6kwxZhcxmgaXWpacWyM51kFqfsBx9gd3SNdKUGUC",
  "key27": "4CCkcDEwB2L6StQJbfWd3uDywZGjhVNtqR9HEgEFgVLBcifUfuujrxB5wAy72A6zzJ9smFXVDpjP9aYaDQKsvftb",
  "key28": "wvWWk6uynHZFDyGmKKqaFcLd5A3hADLiHBHpFYKrrqTiXMXhgCzkmfu68iMjP5qCvVRZPzw9uDdqVumAW2fw5iv",
  "key29": "Z6TDEPry1Nx5k3mmmMDz9ff3GHqF7QuJvDAVe197rC7qqT4mNcynH5XfS8f574zu8UCSYtodgv6hDcHSZ6TdzhQ",
  "key30": "DHzKst7NojS8otiCHTy1kiAHsvUVRBghzFojCo4kKPW2pgwA8Afv4wP2UhPZX6JJjmHWNhTJokQik5bFCYoSN9o",
  "key31": "5xetcgyKuWAfmC2fLWBK9R9TWAZbYAEd7S2wzoVgLW2AJc3FadcfaCmG58whU4zK8G6Rsn1QspHwpMHQr8djySZo",
  "key32": "X77CoTTMyZ2fxaGkZyeB1JdE4pMt2HmBLLcXewoVBUyfnTadRAjVdue3acRqXiPboZRGRFQ1GJAgnVUKpkmUi8j",
  "key33": "2ZoWGepKjm1v32csaFS7xEVZ9dimAzERodtvC7LFxf2sE2d9vNFhrq4UJAgW9BYTi7HexFeLiDPQTXw7KW1qTZi7",
  "key34": "5dS9wRSmm7NpcHm3AZxiPJbqaAuTQkfMegmpdW9tFXJU8VQoJWGHxttxpBXAZaFcTQfrf7EiyiP2gmQesxZ5isAa",
  "key35": "39ENEdSn8bkX5wVPc8LP5jESrbcVe25VRbCoZakeoWL4dTQ52wigqj1ZsHK7JomzdL8zf2QACwUCsfgsGWjniSoi",
  "key36": "5SUSsU3dEdESeJPCQU4Tz1xYefvBBfXN3Vb4rL8QgHxC4UFqXKFovZ5T96yCoTMdzvyCbG1DbPYwe8eYYvLjS7tC",
  "key37": "SC2R4LfZQH9CXhabEhKcojmqfwuwzsid6urGNTW7a945Uq6Vgqf8YHy7b8iGZREMUVWDvQ1NaCgLF7hVTs2RXdR",
  "key38": "4P6Mg4bXkGrtBTya7mBYJWJAY7dah4u6TstAWdjhXNpZh4ssA7CwyS4S6CiSwgQus1ysYmUQ45N1WVe9E8c2XoaL",
  "key39": "5RVEwZLeTQ1AoDTuJqrBac8zuwXwBhtG8axxNn6gTfJLfaVkH517DArnj8goQubc3MGkrMu46d9V3Gp1qp1XsT7F",
  "key40": "4KtStEkMoksnhxxnctBYofTqRyncRE1xEEbHE6znYM19aoc7KY7tE549SUjsGQJErLce2nL7zfE3qJ9QBcfNhtZ2",
  "key41": "49hRWMmNXT2yp76YiuhYFtMXJ62HNHeZ1Cm94wkD9w7VYLJABPjopaTdrB6qbxNVJu8t3BQwdsGQcwWTtJmxDmDf",
  "key42": "4XUoBVzJLW2MhUVB7wXGgF3FUegJ2JMzTfQuEfvByGWAp7niVcEjdzGFmkgqNDYBDqtNRqCQwMFjDivu7RWM2ssE",
  "key43": "5PE7fQ3gNNPaqMVeHcBrxuMmPw566iJQT7Xz4bGG3xFsabRYiRWLNRboXbAtCC5VTQzCjeeV1NWEBBMArRTuMzXa",
  "key44": "3VFWD17q8CLYgq6dYj2yLqsotjJp9GnLb5zJgWHf3h3paQNG2PFHMqU2RqVpMqWswLQ7TjAKjtGguSZCbBMPPpWK",
  "key45": "HP5jFY16ZoXUph8Axh5crsFJXhAvaRrWeDfYTBE93DvSwTPcfpAzFsoqVi2cbrTXMVHY9ssitMVwerebWe3LiBF",
  "key46": "2MuP6DisMxKALtZBtDtQFYvMniS83bUwwS6WSt6REN3duj3tKLJUhsx92RNwrX3DKAX5XBosaWyZSUhFM754y2eZ",
  "key47": "5vGSUiFL59wrg6ZjgFtpWRbQLRCT7EGK8vKKs651ryXQL4btdxUbVYhud2UamZRCaESZ2dTZVw9NgZbc7wwvcfoW"
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
