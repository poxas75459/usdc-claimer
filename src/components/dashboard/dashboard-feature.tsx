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
    "3iBxH9gncG64LTuByuemw2ZiZ1SeM3njGZraL6LYFmNyLMFBuHtH7cf6RHju5Hn3sQwB5eTctzLuPnozHCG5JBBP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xftNKE422iDA8Wte6pErnQbYBUAREUCKDLB8Sao8kdFTf9Zj97zAwjtvTeD35c1ReGj5REgva31WbmMA6x7XXEN",
  "key1": "4Y4YPh1WfrenABEr4PVM6e6bot3YutoyAVvYTUhcDowHZRtpkuuyW3Jvcuzt9R7J72CA2cKXNeQr9p29CryBhLAH",
  "key2": "3YKTvvJJd4aa6mKsnN2z7qpBi1RzCUNnin4wLJwihg3XNTMej47Lwf4VfjxwpfWjyqF1HebVbuNvJ9hnYGdQoWs8",
  "key3": "5f35s8SEMeoJzpaPGWRjAbSQWwNgziJRNpKguf2W2rvx7R1aCgBsdNQZheLmmm66cpWaUBzScyDhYCCPxWK5sqJp",
  "key4": "W2zWu1XCTnwvnQFKprzcr6ZYzzfByMKivyZwv3PJELTrrc4LYkQbn2Z6naoaaaayLmtbjJbzSzvNMBRc5E4ET6y",
  "key5": "64zSM7E39mziZT2FBX9WNQThaGZoHH8fxzTSbXk9wABkot44cYJ3tYDpyKxa2qPGtLrQqJf9GejaZ65Xm78kyEkB",
  "key6": "58jRYPULnvL8YdJUu2MgqRTrbvyoCujCR1aap941dVzkNpSF2gBLmMZkXryT4NcqUbEUNDkwVKNeSFULXVnF15td",
  "key7": "4ZN5TZ4miQSS8g2rXB8piHj4SyYAxy585XichPjjaUSn6UuBAP1QJ4tfNLyyciDucdgaHrYxTKzyzsZYuB1QnT2H",
  "key8": "3hMszquR2ovLE2XVSxpDPAnCdcBXVxVh2Wjmfo96yGxXEo4pjodC8YzCzcSoqudrniPwU9wrQX439ZMdWkFsB5Xx",
  "key9": "H3QBps6PsbTdygQ1d7iDgizCjzUnA5ZoTr6wmaFqeYv8jmv2JsUjSUzEjKeLGtMd43UhzyDXrBZhKioorwUFuXF",
  "key10": "4dyiLtD66DFKkfsAK8j5rkZozEJH6sa6DamPB3H35zJyj7kNht3ugDSLN9SAnXPZQjbri3zBQSKmzctZL5uU5XTT",
  "key11": "496sgTNCw7hwjMYPvhS1PcxUWjnKCHV2UgaZAGaMhBHm8b8m84hSN1YmWKa6HNjmSpK38oVhVvf3YzJ6jPzp57ZX",
  "key12": "2oiMzii9jxpxvQH39kMtMe3pr4pZZnQd65BFRBGj4dJP27brFeCwY8hr2PzkZXPs9S9yKDc3cvP2E9azxomhZGzL",
  "key13": "XUowSSfWDMAXBAUHsA7LB9y1RLuyjucFB9jiqEDkBNzNpupRD2gPPRGnTXd6VxoaCZkC24ufa1z7A1mKQB6Cb4a",
  "key14": "uwquvf4q6o7dFaFKU8XnBbDg6paFmMVXnV4Eaptddt2MF4q3GCApgy9nb9rWqZunZJ9q3Hm5w9g5WxH3h7neMty",
  "key15": "3kuBmWepzhntiUytwoM6AByPByHjtBokyTLD7nQZD9LgR2jgb8i6GAfr7irFHsKPhUZzVqRzrM38Qa17jeYCZYk9",
  "key16": "2Wqj1shmknkB6KWiRH4QsNowC3mmNe8VUqt8Gc4PxbEbqnifnE7VeEtdBwrw4xbeGvEdtB5pzjtSLqLsDAGty1Qb",
  "key17": "4JhBMfYQ8XABfXQrgL2jFSxMio8g831xfwwFsahJzkG2L4Y3oaHCCxBo6gjAwo7Lcz8B77YxTn2sTVKzDCoz9y3T",
  "key18": "3oKwZxRT9pcPuwj5Db4ryc7VitXoNZY3LB9ZGrXdhzRssnHzBxNpTLeQWQ6ot8pYxxxfvvHY9HaTvssspTN8iPzN",
  "key19": "KwNUtVRWkXn2NxSyABmJdLEUYnK1rffQb24aHM4dETsnRpQp7wXJZhQULPCtsNzDyCqFs1XoczxtuQKWGp7S7km",
  "key20": "2C2pEhLMFodVDzgSortej3nMzdRJdUWvkKjijPqS1wRQny9ENWfs6Ds2DNZqzBm3LNjBgnPpkWtgUA6k8YTZzx1j",
  "key21": "2DqKt4PjWXgbvhc9astNogFJPkmAXt2RkQJsNUKAmpjfuWRoeoAabamPVAkWnnx98p27Yjj5hJe7TmNRVfKUQ5dC",
  "key22": "4QTskbgQkvn46C8SFpFaTkY217NJbPL8vnANCfnBi5L1jG54zN9Tjis4HKvnXybbKZoR28yKaSznrx6UiaNuzxTz",
  "key23": "32Vx57ZXMnZ3K2ujjr63j8PCibn2qcSQCPtuDJveFJtVb5AM7nji21VoC1mTLePyLM8YAquX1b5BxxN65KwdDBPN",
  "key24": "5QQHrVx4p2rVyc1R1ZhxcMNk6kJLsg7rhFfaduhq6q8zNwyFu3fxR7PoMMbiMGvzG9ntE8YfHVWHvB6UnCtPgLAj",
  "key25": "5XP7ogwRYAyGomfTcedXjvi8E4EWgaK35EpsqHMMgWjwBDe2C6yKTix8BkvKdjpCWbc9eeGa4dgTjw8cNaikP9SV",
  "key26": "315bhM423Zy21oLjjfHpE578b8CdoX1vnRojqAqffRxgLR4rN46UqwnCjjHhgXWHvvL3wTc712FwGhRasgCKhWCL",
  "key27": "5vfDPdtoK6EqEADMRh2FV5wmwQgohqoFTifKYChUrAYw8StKHowseJ7gtE7n6o5uQXAN2LfyKw2mFdQ94rqmyt6b",
  "key28": "35tpd9xWHMHJCr3yUt6XCtMMeCU8fBn8hGqT8PaKQy7cfkkSkBG7gR7PMezuQwEJzSae3srgTv6ufJWbYTMFjRuY",
  "key29": "5yFWkxpmX4eEvawXGPCD9rJsCJe3wdKYaUCAWQUqB6EARGfKBQwaKvgdhhPvPq6fz58Be85HZZeZQesQyM6cGiqM",
  "key30": "3xt9fa2G99HXmTFk6iaDJd6bAg16y628Q6w5kpTt3MN5qS6cSCGJg3f5UXbZSx319k8QHfCe47JfBW2bmUFfxFtX",
  "key31": "5K2B4Z6goNPYxJjPNd7Qp6LnerLisfTmqg7FyY6gfbDzFW4YiE8T7Pgpv3UC9tGseFtj4MjDUZ9AqQfMj6pqQu5E",
  "key32": "532y9LXNHT5jh8HGWQWFpqGDxn7ayu78ZSPxGpwnJRkBTvthtvWLNsUAHNYBVvNEkAh6UQBp9JELvHeKnTyYCF8S",
  "key33": "zgb7ZaadnzReUZtL5UFgsTLAgn5ZtxRp5y6KPUpM6eXccW1w1Ln3vn2HY4Y9cLEJy1Z2XEsyDwX3V5mBt6PURE6",
  "key34": "63zErbgCQHsxPWUUYH1hNyCrVzpzTzdBfrnR68oKxF6T7XDEkvWZWp6fLX9zU4SRoibEbd8MXcvx3FnF2xMggpRg",
  "key35": "RQak5gdj7jkJscRtEMQtBvi25NKmYtM7SAMh1wth54wwADSbWjVFVXFAUpnJYXZMknEjYZSZL9sgNDHFCod3144",
  "key36": "3KnM1nytsUfSvaG7uxoqixE2sayej75Ro8TeToWxKnuSTjQqHqWBoBeJjD7dh7izagZDiSrbpdWjDdHKSeVepVBk",
  "key37": "5FNQGFH7DDBbRJijR8Ecjcb1MxZ53M9cgAL9MFW6jR9Mdb5HBCaPpvCWJUcS9QgTCf1rweDwhBihKixEu4AFzaqy",
  "key38": "5RfUctYpctVEhJdTR37V7HeNNVMfZRWiMaHqsgU55SbgCX6KyUat1BES36EHQyboYv9Zju7NFRkNKv4iRdNJ4iZb",
  "key39": "XApMDXX6FThX7P2TuMFyqkgK1XzirVv9Sm2xvr6sEZjwTAhTy5BeXiNHfpXj3zfEA5zEo6LAQZLd4fwDWCcHQ8r",
  "key40": "38CGMcdTeveNi99FdJaMoqRGktPRv8WM4yRez2oq6SRdyGmePNyA1NEL7ec841g2ReiCvm8iAPnmGL5eM26yt5h8",
  "key41": "4Sq4M52twHFxezw8gCnLYxMVkBW9HLZSaEMiLdHmeNinL5cmgrUkj6coVfDWMxKu372hShpZ14vzd2uMxd7PntA",
  "key42": "3TQ3BKgJ2c1XYcaHsfZrFDGDEAcSzoFXc96vYH9ioVmH4h1PfKv7hHFGByoFcRppnC29H4vRtCoz43Vux64z4Ua6",
  "key43": "eUqqJkaurTQMhH3G2SfEGAoqHHianYtN4UvgwdgP6qk6e6vx6u6DvPPsK5mKg9NZ1vgWk7WJ83U2z5cfEgqHVJr",
  "key44": "2wBZZghjFELcGQPvHgcLkRNyhsXnQaiezXqZeTBFz4ubvekMVkC3qVM7LDV6fGKxDNU9c4Xt1JtTXkHvAR1Sa5gw",
  "key45": "21bBJkgEWwvD6tjc83DLuuest8mRZDUdP6GZun1G9JMjNSXqmZ6zukPTQNHx5P5wYow6mnyiGvyfBPoQKf7hA4Ga",
  "key46": "3apxT8uuTPxMKHpNsvBna4zgZm2yCTnQmza3pWYFiCh7vsjkq9Uq9WeWgwGhASMumZqLSXNxt2YHe6PHrZfgGTSw",
  "key47": "3GZKzXBDwfRsLCGHUb36ThC4obtcS4qR4FkCVa8tXdoxTKSz8TB7kMTDVzkzrEc6QRFfefBeFsK9doNdJRzbQkpv"
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
