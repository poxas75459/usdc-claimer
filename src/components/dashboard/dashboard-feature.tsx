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
    "2UcU3h2BBy5YgHF1upKoSUvU13CQQ1PV5S69m5g17yqft3wYqEeQNyTeVtWDtM4evEYbo9nqpLGZuqsCmLd36EoG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bziewzeNprVbKz3qiWWppijk9aFafLucMaoQismM5mM16VnzKvXssjMmP9f1RxjW1whbmxAGVvRUGGRbbNoKBYN",
  "key1": "3x5vdRNmbzPi7iTzuH3tBkMj8MuxC5mx6C94Fjop7vs5CiQYnBMQDbdd8LTXQxbJuTyK2st8L4kZQceW2HFii7hy",
  "key2": "nv3EFyiLrvGwVH83hhCzn5YPKLyBZ3qfe5nwt2gUwch4rS8X6GDiRZtH9zb9jGXuC4eW6egoSrmBGGj2zhiW8p3",
  "key3": "336nJ4KPcoDi1bWiXXSaSB7cY83QqsFPCSiCQ4pWsATm21nw9u4Th5ExQw8h6UGThp5pDqDLRQCdAuhw8eyTNbn5",
  "key4": "48CCccTCqEuF5eiUF56wqSfjjt45BRoa7bzaBb4iJoTrfuwjiL3eVPd5eiCvT9JYv1e8UTrG5JGXkVRB4xpZRvMM",
  "key5": "YfiAYHBuXPYsC3cbLd2V5SJQtMJm8cyuPUngqKAvgbHquKsjYnd3jtdMfH6W9yp8nctveyRY8eG7uQbPJe73747",
  "key6": "5PFdaKFtj4s2egQX1wuZ67cWkNcEGTQ8mu6fEjKBDTcMRbBr9oajEY7x6jJCzhTXCUKEg3vfCuVNGbEeknU6dVYX",
  "key7": "49WT22y7JQpv7iHeZwhk2tGsjSvd613uUnTPMfpEKMsCjRGuLHeJMrvfyyngCos39p6aibqjLzcUg9D65ubwhswo",
  "key8": "3tzschLUPnHbPNjx7gsbTTUQGZV7mqzCvL1RNmQyXVeAEmDe5PzEpPNUZqN4JHg1AewmjAkhDpJTfJXiW9rqPEoZ",
  "key9": "3wcZzgLAYQpS2qXZaZ4cht6p9BGDz9Fv8mWkYXVRgS1uURZPG3Wt2ScniJRjRvcYxsckrjx9p4EDdL71xePorpLH",
  "key10": "48iXRQygrfcTqma6r8sbE7MJWWc3FUCeDphaYvpmguWBTybiqeLwrxgUjUo8sRzSXrJuh2qGsZ1578GjafX2FMoH",
  "key11": "2FVAktQTKnDBgNYaPa6wZu7GK2ZNjYeVzybrtm2J6PrV7QkJeeHobn1cBUChfru6GHR2soo7QSxhi9QD9vqSmfDw",
  "key12": "4TBrmQrniv6Ro2f3tZ1u9aa9bRu2BqmxUXhTXLcEPT8nX3K3yJVGyXYFcWCLyWWtcJDSHhdmXQTQzBRq6UDDnfY3",
  "key13": "5X9jpCa8LiDpAFQFgR9Jy1wDATBSbNmYGPpnEzzW7F3wAHWFhJcwfeTTdHJKqRd8ry11izHgNMQgRw8QxKBocDrx",
  "key14": "5BTFbrv6bgWFRvK9zEkqpaCRP8j2UcYugfHSNMBynJ3nLqBmdG8FX6bKnxs7gBd3XyvAH7amHRLsyVPq1ceDU7Cj",
  "key15": "2s9SV37buJCGLMTwKAMzPnuuEw1FgCafNYHXiVVyD2SzyZMntvj4pQRGht8jkTuNZ8oQJK8SMBgndjtQDvehpLk4",
  "key16": "3Db9UCtrYDriLpYwkVZGwV4bchQLjGdAXtawpixCU7yLoWxQUXnbD9NH79DrMcQJAETuCgZVyXqcYBdvfv88osGT",
  "key17": "cG1HGZBfV4b3Ye5yZN4zatFEpo5Et1WbT93f1L6Jd9NtpZHZcLk3T91Tb47p4YVWd7f3crgnjdU8kumTh8gMc4M",
  "key18": "4uQjbZXC9FTYJC8Ao5jo7AuEkpKJ2zZE2qwNdBFJcPVc8wMgD9gn4rGUzNqfENHmy2biF89P65gx5s4f7Ue184An",
  "key19": "2Rwr13ZLNfX6DD8AwF1kGqcJLfYwRS3ZBY6swaSaYUqKmRrTTumRcv15HB2Mm82ZpDTa1h2YQn4FrrfNqerrACsQ",
  "key20": "3M5EhbkYQ714Veurs7awnrnAmwnwZ3iCsym7b4sMcmirAxFyLpcd9k4UxxhhaZX5AbvcJ9LphhYwt3fwWEFfnEDm",
  "key21": "2cqEXcKCX89ymXzJQQQdAhCPzDRwFQNaavQ55WegipaDSJQdpHVyPNJ9oSWQh3qfhnMZxjLggMN7JcGY1jvxDqQk",
  "key22": "2QZNLygc8JxrkycPNTHxWszdnexiWUrm3QMZco3jJSS2BR8TjSErjB1mUHhey5jqiZTa3RRKTAKd1brDzP3ssam",
  "key23": "3eLgtEvM3N9WaNkKJBPP4VctrqFRL8fd8ryRyiN3DQnNwukyctn6GjavmhWS2cqY4TJpSkHE1bMJqhf522zVHfkd",
  "key24": "RV42LdyYae6d1kitL6LExMB3m9gD5ew7XvH3CBrbV3XtWoqhAXGTbWcKFk24JGcU3YxviHLrfeSdz1yGdRvmTM3",
  "key25": "2E74x2f2nfBpGhazDqYuvZwW72NPN1kNyR8eHwFoSJCAkSuutZX6hLASHJtr6fvm6Th4jhYFrbVAyRTB8LcVEsTw",
  "key26": "277zJD9vS2KmsdEsQS394nqNPyxqnyrzW2dmgGiEaWsLvtegWxqhZoKYPdxobSidefSPBaVwjUiLrr65hMUxF5mh",
  "key27": "24d92yuVFTtANxE2oMDGXjQ2MHAa2GYERyWBDt8C69WEAxD3XWbQEi9XB5c8BjNUCV6j869Vzxpo7JKFjrMCYcwL",
  "key28": "4JCtcLQsfMNtG82t26czgzFsgMu6FVKEdMxLySUE5ugJCS5XW8TGrUxBwgDBRxwwNjirsbJRf2UmWSg5RzhiKsk6",
  "key29": "21G3rKn2hMBoU9YS8tSTYywq92vJJGjp3gWZJ4MeRGo5iFf1hyS5FsRoQ4ZCFpmM9DCtG7thLr6Gvw9yt1W8cUz8",
  "key30": "2R3J8QWu8cm1LFhRUt9hd2XyEVGMDxCDgMQdjwxp2H7JsXpb42Xo3rdyzn4M6KA5MW21Ss6MGzrjQnNZNJpZvFNd",
  "key31": "3rSjMReS555CzTeqZr7E4Cz3jKPTkKY3vBqcBqFGCvLQ7udUwAFWFjB3DuMwXjNJiEGwWVyYY3NvSQUKoQTuFXQq",
  "key32": "2kQ2kchHYmpjTgzKWFyLFRGEwJi6EsKsGZoWbU3WzPuX4bFMP2tokbX1EgeVAbRBURHGXnQewHbUQc71Ca2aUQTB",
  "key33": "2aJP43VKxR4hmYPUhWSgfnzR8oTS6fRw2ky5RUCxMjYXQCeneECs11GS1MKTXnHL8XDp7aVdp8XpKKupHSovb3HZ",
  "key34": "UhsXtKhJkGierNDwFpBaRUtMdwedv84iZCpgj8UNcScXB99jidjNJ3Xevi6nXUsKumR3ANqd8uESewGNPn2m1NF",
  "key35": "25KAn5ykuxBUz7Dah95RsTQWhKV5xmavitkqc6BADgBhyfSTk9esB2AFQCt8yDoGJFJjQn7iMc6ziBFtaA34YrZb",
  "key36": "3oJmyhdw9dPDVCo9A14zoP7nbktqhdSAScZCP9AEeoR1rzMsNST9krnv4TmwRvifDbCtPtH6h1szLJ4peHXHM168",
  "key37": "US2QtbMkddM7rKfcXDZDxacnVpJ2zg8hCjteVBBC5fJZZaM8D29qdiBS8SZkdVk3YDFaTQNtouBtMbukZizxb5G",
  "key38": "2SwiVsUQg3srB4PD36bqtocmJD1oHGFHKpWfkfn4qkPeoMTZd2KdHn3k49BySNhR9XdNkEnu7igfHdfvMRYZuDZ5",
  "key39": "3LkWVdJQS96zsGaWppNAxc2YA9Z6HXjajcFyjiB9sZr7UncXNAaLUPfAmRLsLUnuXHM66MQiELhSTpnU56yFKzNC",
  "key40": "3mJQbArM91H3EM5M5WiR7hHB1DVpW6M7rGq8ZZ7uc39Q52GpUx4MtBZouo8hGujbhZnUPYJAMDcnfea7HHGi7aEB",
  "key41": "2Lt1NAycrmpxGY93dqnuKZ9ybZx5QWHWGuj9cgFyGS1tkd1CEGYfpnyn6jEpZK65UqUtZjmg4ZTyCwjTo5yQg3aR",
  "key42": "3f71bfFLFLZKzmEo8XJdeuMNqfFwxAws7C5z1NNAu9z5TqMc9aStxMYcCYVwKaUPGswyz3fgzjZMSft45mDPrh4",
  "key43": "4fdVSAJ7fiX1RFftTUzDeazLFyY6KcRj54j3oAP5XKVmwgQo5T6PdxthMMeEg6F5sbjBdEsMpRzQ2rzC27P2Y2ND"
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
