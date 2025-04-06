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
    "271Dr4e47Cw8aq84UcTaYB8xHoWAn4FsmymFPzrEHXj8mrPyZdW8HV2x37ajRv3njxKvVbNJuz57yueJr1iWbx1W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tCPyucNaTxdGQM76Tg93krfqitf1Sc6KakVatGXx82fkEqixbZDcszj6pKTUvawxrcrcmiQPUm8RwBdgkLoKxPb",
  "key1": "4zuiqB5XtLPJF1WiBhdethdDTmsR4mBzKk6uoFXXvjU9rseuAZq2vwKDw2Jhvk8crjEcXFCbf3iHXuUkVvAYQ63f",
  "key2": "3727Jby96aYgh2YtvFxwdFm5MR9eRy2McFa5P3JGDLghgtDqcZFE7gATvUspqC6PhsLHrVSz8mafC8PTwNG2LJmE",
  "key3": "3jdEU2y77Z6TvCmFeW7AB1xi9zQ2Cf1URxc3TXeA7ocjyhbAJdh4DiL4q5J5PdK6ewPYeVnZCeYW6VSvfj8zZZhf",
  "key4": "3ipTUU9x6ZRAUMN9efsXW8J7fgeGwvFEgGhcGHJZA8agQ3DJhKGr6x7kZ12amij4pNd833eAg7ELJUcUZhMDNsqH",
  "key5": "3a6kq7SEBN7FGWQUkXcagERfm5tkc8TgkZzs9RpXevv8MPm6VkX3qbJqee6XwWzWhaLCt4mDm3HyboEyEfrSDyns",
  "key6": "3W9ZDRzphmYLibpUr58oCXNjLu9C8pzS15BcrZ4d8if7HqfshpU9eW1dyoJBaxmCNFBZmqZH6wQsEExMkNxtB1KF",
  "key7": "29rSrX1g2pVdVYRMSunWLhGFaf3XPv5HP5i6492U7XcQrjRJKxkW3BDqWk9cxGqiAmewMT7sShZu9DgzZh2aUgSi",
  "key8": "3NGrAf5s7LK2TAJxj28syhSPDny58T33dWoXaRqNL2pUBUStGTXuxzPVgTzXTEmkZLPUbAMzt4zt6FoTDjwng988",
  "key9": "4XtvguQJ7LpTcjRbgAnSKwnUDwtmav7S7irXTizEqynGomuhtS2RnBvkCFdXyEtGzcxYRkVUNozfL3Dh6GR78US1",
  "key10": "4dyp1RAooiL67qcUddrFQkH15iQrHPbwjs3ZWr3gjFJW6Z2wYhSPZRqQcFWxZoTxGXs5qeaPZj8yCy1ziyKF9FQm",
  "key11": "4jkATkKdeXEBbdknqbC8Qh8QnVsiF5WEEBh1HmTKwGEZQUZxtQHaNPPq6kCsLieuX6VLZPei8aE5SzkchD41g7HH",
  "key12": "5F4Kx5ophFTszTHof4javTg7pWe6xmvvFcVDbKdPiVrhV91YAnoCBoeCUtRjRayAaXKuhaG1wqhAiVWcmKUceM6",
  "key13": "2qQaMcaA6PqJ2SZpS23AZNK5UMZ7Y3d9ATNftBYFzqnMWKxGxSWiETEGZNqkiCDgj5Hv1fyDe8kYJi4uwuVWYjcR",
  "key14": "N9pzZnrsTVnrTa5urQPXDcp5X3y5QomHs9TVUzjU86g1s8D2baW3vXsKCA7RgJLmexLuNk7EzgkGaKjnq7BVvpL",
  "key15": "2GJSy1Qt9kRsdzU7UK45EBfnCtPywkkTnMfXJwZa826CVUqzasodK33p7y5Adsn65eUzUHyBAsHpWNbFbJ9ycWUC",
  "key16": "5MaBbNs4gav8UYMrbrzXd4dajmtAjFcKpdEuM6iACcjCPXRfjRTiAhRD3BPezgtNpSH2ghNvtmrsjQiAfUwXyi5y",
  "key17": "3rrV1o6cRDf7xMREWJomg8gxtsLcyWbQWEytzuRgcTpMQhTxvsoBUeFS6eFYP8VDZpvrsK2LaP2BmtHvzmoGuTrx",
  "key18": "53YThQqxD5uQWBYYYuEETUGoK5pC2P24h6XCijUcnvVnMwMhmSnPeZErxuCc3bmcjKhWapUyq6hD9AztFCT2Q6Gz",
  "key19": "48MRiMxTN7FfjtVTQbEdLh2ZPeHjdSF9z4A6p9MDknWLaWo6sZAEAvXU2w71mswaAdtWURmA3f9heE7cHmGdzKCx",
  "key20": "3h3j7Cnt26jjxjwrcLzeW7hnfSfB2g4xUeujfnmANCcE4GVhCbgAP9DE3h272EJWyPm4cgw5BhMsnFai48bro1zd",
  "key21": "VY75Nuc4w2H84BtvBPVz4T46mHBdMeaSpBY86TMDmYThbYqfBHMmodQQ734sjXhdjbr8vAWnBQkq3VqHxLeha8Q",
  "key22": "GyTRVkP3nqsM1XsjS8pX54ve6q7NthrHvoQCNxjM98Y1vnw1sjMhY6igUu8t8bo7t7uzyj5ZeMBbMmVeUf16rDa",
  "key23": "5qbU7N9agZE4JdbiqVhWvFxi1Z6zmTdDC685Wa6Q9bMtDpCrmhhoopgeChiqMiqA9ADaL8iAhmvRHSetxMYJmDcJ",
  "key24": "2RmtgYgHJZmRkaRddbnUk5pmEQcMbVNbc7SdSUkHAdm7gkxNhA5RJqsUiD4gkjJ7hYy8U9zcC2GjLpnBmnd5Cta5",
  "key25": "67bs3yveJfyUugxytVziobsgfMZBeEKMbpLx2RMZxsVn9efRL5WCVnoXfBixbMAUrzedk5ZhxqLkoPqBgcsJ3kL4",
  "key26": "BMSUfgRxg7ydce3rHyy5wzn5asXstXhcErt6aigeY4TwgCetphoaiMn7c5mkDFK8y9CsU3xnfTnGzrHpve8rEMP",
  "key27": "3Dd8VXzhNLMVaY55AsptULyxo9wUoKxs1sHS2erMVArtKE3a14TUN72xtMKAzZhY2Rh2CQ8htfbef4dMpMcRvrzP",
  "key28": "3XWjkR36W3K9sTXKvfCo8UWWfCsNMvMffnWNHkfmLiVQ7jze4ErmtYwZpppKo5WgWQe6XYQbr8dyeVMpzer6s7yV",
  "key29": "2pGzAjjiaczc7DuEgtwpuUdanGj2dBZvAaju4QVJf6vFPxUNJ8CQbKNUeu3fyLnosBArRwzDZfiYnN1FEfwVj6kD",
  "key30": "2a564cTNxKzLL8imFLsWfoeACzC2z9Vcht3kocThxBZAYa8B9xCa277iPL6Awjt728VKygxCUFaPNDA6NwiHMeMP",
  "key31": "5JSS4qNSeVngosCr2fqwmuv4nkiHLNemhj5Gwta3dHYrphwokzqjrpUiB2uh3ypWAvazzR4aRYGNA6FjXJmN7zx8",
  "key32": "gny8riLmLhEwxxtkR5vtEFQzx7ERyF4kFZpnGWCfBM158gpHm2PT7YP3VVmnozUHfZ6Vvo2DgPngJzXRkknrBVY",
  "key33": "5zbz7badz7rtpppZnwveQcATwg5vSwVfAPFDRteVJfvwpBEp1AqTYVXFrbyWt8AUWtcbJDYHzev43GAEf3qj1Vpr",
  "key34": "ZdjkXueu47xfWVJC3fGf9vfa5nJHL8zEYWcMuKfyJTcvLkkD4KaqT5C95uwYmkKi7DAjfRRxBLR8Ro79ZELC9aS",
  "key35": "gyKhzMcqiHaCPYjZevRLyhZJjkrHwtoWf18L4S3qzcbcT2jZSFck1dRbbKuLJErQSGxzrwWJMGJM6LWVUPzkim3",
  "key36": "CFdaSijoncg2eHnjYQf6eJ15dRd9cBLnhU7fWN3BWtzuZtSSbcn8TQ3QJtbAQ9RhAPt8fJjHehxG164CGmaon3Y",
  "key37": "5VafazSmoC8qQPNAi3VymNAFKboS1gnFnKyHnTcBqJt3XNNpqUPAgnS8v4Zjkw47tWL1fHgV9BH4ti7GGf2zDatr",
  "key38": "4BLKXfEYM2YLcEaJgaDcfHRtCXV4UUx78XgXHmeZY9CZduE6ezRURvHi9GMeseRYTfndRNFDKPFr7VutrVNM32SW",
  "key39": "4srJFhxGFcVx4qsgjpyveheixGZ2UR98etfpP6DQbADRKEY3bWMAgqbMiQ7Ss44A3wKkqNMox9ZXkQA9vJR6tsq8",
  "key40": "xwekWHd3Awp4ci9YEUiZGbQo3NoS7uh8CKyPoBuhBPnaFBGPqMKASAF3cjhCkc3eYR96b4BUmmc4YCdvwg8E23D",
  "key41": "4DhFBgAzYhfapeBBoJ3ScWYY8zsYXWDkzEjhm8LWMJUYVBhetVFLuxC2ftf9NF7zSJuF1KuBBi4JSdUUqSoMcAgh",
  "key42": "Kn52spp2dndGhbwVnDh382LwQoERJUa3YWN8HiReaSGxz23RPEDExKqSKGyG8kjRYAyucT1WMyRYEgRwDPJJXZ6"
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
