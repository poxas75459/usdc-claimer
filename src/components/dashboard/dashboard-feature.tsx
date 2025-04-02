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
    "54kQk4UF6cTppp97WkF4dCWLK1dedUjh9s11AdpBgVR9BU2bBP7pAP1BVgLUfiuyszapFKohiuucgx548tbCVPAp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "javYRe3MShD8FjKtYu1s99FwXmnfXEkr4eCkdwGRwoyre3zVvUuhGXqoS2PFX1qqzPf8xPNz9XzHPkgihYgQbtf",
  "key1": "2h1nfHXfxU9SuYYpqm6J4g4gY1wxK3TxVMw7AVZP5exMkPsLNUxYmPB8PDrw9eAvj2LXTkyasNuHbzhVeEWywiWV",
  "key2": "2X8EbbJgfxLVfR1Y5djx7UbqmshfiLkVSrwUYqFwvrnD6NhTkTb1PcPM3qZe4XomCfWBwS2j1wqRUumag1zduoWL",
  "key3": "3KN8xp1FcU6GJKqaZrMaq6zxshVSMk6tqVT9dxdUA7FThoxLbdacZuUktmXMPGxyUjDmUtq7MVtzsRLYYxB4snfC",
  "key4": "39VbVogJYBVaDKZ1Q7NeZEdwfgRQXh2K937euAtXjgXugyiuWFhTiXaF6YCWGxfF7JpbtqdEikKczTtoak3fpLn7",
  "key5": "2BdLa1SKK459GaDHpWzVRGHusFyJfGCozA39BhxwMXqFdyRkdx7EyaZnEyJTSai6wysSqQFddYvmvrGdH4x6zxR",
  "key6": "WB3KM5RixYfUY9KZwShpN9MqzjqvRmbwJ8vSU5KTYna9bGgMF4bd5iFsszR4KUaBxUk3fTrDn7dCupjCGz3XLsF",
  "key7": "5roNpTzzmArBfLxsWQmwtamJCRaRDrASpnR5mJzRZLx6ZYucw9n8ucw5yQPLNHrDJAsSsxHBpXWGF4o8r42qXK2D",
  "key8": "2v4eJHgEQNENWxpxDBuqv3CgLjeuQuGFwEttRVjshtWrXrHWwnkhUa46aMpmnkRv5TeSRbM3dt1qe1fEZZBFXvFN",
  "key9": "DykMNB8q7ovBH1RLuWWrtbMpLSg539LBxvaPmKz4ZZZhtu2Tb175G6dcyDENzjXyEDrepfiCdQyksSo6eq8UmVj",
  "key10": "2tYjHKsW2RZW77cYfq6uXWUThdpmkBuYoqsxJGdz7vsFmrMZtkaqQVt4mwDC6prwcEjG21zfuZan9jGZECJhbkDw",
  "key11": "54ZYvLfTfeNow8QsTN6EXXkTnrggVh9dGbQbJGdk2ELRsBMp1n4Y834WYRwQko88GSHMBMWtaynaFi4LUFpkMAk9",
  "key12": "2mpssEWqWs1j19Hg3wndosYyEDMMXnRisFT7NZpxQGJzq4KATtF4ANi3YthZQMMAbzrvMHhFL2Jh8LELz3vWVpu4",
  "key13": "5jF7zDx6x9PXsbKY3DbJN9yZaESxyfJgcXLT27FNbJD8Pv3JicZvVreFaPbNfvsHuz6BsUrLJJRN8xrUcQ89RHmD",
  "key14": "CCWwwAmVY8igxD6kQ2V8ZbxC29dNmZXnJmoboMgJiTQ1Dgs5VS99Z7iuc8ANXidPDSBNFb1dKTzk5UFp3eqGsmB",
  "key15": "4rWBP9L9yqv6qa5YUv5Bfu6Zk7A1n7pB8bMzNyX8vpVSjBhUtYms3mygMqGMNCTpurnwqPVqci5iw8GFzNy43Xhf",
  "key16": "uvQxHdT8mGn7H2rETwEDRJY9NSyg1T7uG7szxVLdFo3hZZ2N3NAssnnVm36mEQujUcxdHfiETXeGJHtfYqYQms1",
  "key17": "3mjV9c41By4mcqqoubBC1rAnM37K3x77kBRziqKRHXHZyH5sQRyCxn2Bc978UngjmavApvb7zacQ6EzQ5cVHgXxQ",
  "key18": "4eCufbbxJwNuLw2TqiHYwH8UqH8kAvifpspgQsqyfvwiZaqcHXdmZzoUNH2DpGfu3x2dshzQ6GBYBDrUnku12SuY",
  "key19": "pXYWXzC6h36TqL6pH2Z7TJzW2D8dyNenmWDytUv1fbFcefcoCJP9ozPR35u3mLXG6UCQ4pN3pZC5bvPPBUv1Ugb",
  "key20": "3wic1WQPHH8znEmVEMqF5fjKdYTUXTvB5ZkCWPQqWnmoEkBEUiJdFoGA63jLPFntKGsP78Sccas4hewwkmEqu1zE",
  "key21": "rhR8oNeSQtq4bXcrw27rhzP82MwovhxLB3mdbzy2GvvuDSjcfZig5PwDbEdAz7WD3xHVkrGmQQ1xwCagMBUDYFD",
  "key22": "2vGr4VoH2cCpWv9BRsUwMsBsMyj2K566aGwCBR67Y3AdBUWu76qBBxoxgV3wJK4YqCmqbZ3ANL9itfJ5EtRv4HqQ",
  "key23": "vowZqf3F4TRC7Lyy3RaCbbm7K1upppQzuRe6ePzXuz5Rg21YfsdMuFPXBGyMahXQdkYp5H4zhDw5sZpn5kwWjjQ",
  "key24": "4vPU4civskAsPKML5XQrWkUzQjvfyWeosq4TM6ffD8AoedTr2iRNrUz2d6sBZe99XYEGbqDXT2exhw1CXMXB9vcv",
  "key25": "2bLWZxxFF7jynQSELnTigXewsmtTLGEp4mbhose66TAGuMJgXqLn8QcxVgjN9YNpG9GBiNqzSFVb6nmm4H8gW7BZ",
  "key26": "7Lj6U2y1s9faUvME5SL5JJvF8veWjpxHHyN24L539gmM8dJCeJ8geJoTKdepy9CP6sYjTyeYeD3U9xhgArwWiWi",
  "key27": "4K99xYBcXXJPvCr6vaChgAPXpGc2WWo7QNdjsqJ7yxymtzxLia7LKqHMgbUBAhwE2ErN9L2GC3zfEE3TLPXb1wKq",
  "key28": "Eu8XHTcT78Hey5C825aijkE3DC8a69tBHZVexrBBpSvk4HoFSYBqS14jEuCwj8vsRUE68LKyoPLQ7RJzLLoqycT",
  "key29": "2b8TFbEjQ9U5U6xq96zbgx75Morw625gVGWBa5cKUBsZY9UEaVRZ2eNB4RpmeSH4zyc4m9BaPvQB14YpGSqL4Bb1",
  "key30": "3pzNr4nNX3LgTMepvnctNg5TeUYf6LprqEQjRr6yjY5MNDjC1Lu1ZTKDX2Y7u36HapKwJGcSVxUdSAy7T7VbnVYr",
  "key31": "AFRBX2WF3ybmZkw9fQyHC8wUCkBHWUge3mDeyN5fdCde8SyAGnL6RbGSbvsq39oxw21Q56fqMm5ikxABqrZxEzj",
  "key32": "3qSwv1tHqqmcxqKZHc4F7VTWDjQrGdJ7XAnsFJDLLc8GSRD6DYrVA82XrK8DvUnXeuj44XZuQyk98JWcs9LNLQ6g",
  "key33": "3rPjh4TvBdxNv9rmzXnkzjyeCQu5r9Sj74mw8rwf762v6S1iFSxbYsJotmF5T4nDCpqbE7ei7yWBC2hvvuS16phN",
  "key34": "3h1Z1itz9aVvC67rvpFVfVHfNhApuAdGkxt5YcbePijtkunAmfqWxwyELPDaQjj1omusg7iZorGgHsbGq9bXqZm9",
  "key35": "3CER8MXtN4JX5zXj2bNfwCVEWb8PUQEjqrFVgMhEApDRAYUvf1o3AJaYQfqadUbkBEKNmnSNFjmQ9X2WCgsc3tP9",
  "key36": "2WcgbpvqS3S2dbyknxshWESwzdAFu9v7QMSEDxESGjojxFuvsE6j4Gwurd1R5YCxwnTrC97sNaY7ze2S6c9nM2cz",
  "key37": "5fBmkn4A9ZHMsWf41nN6DtXkacEUmWK37bEaheUhXpSM3fajHn3iXWH4Zb628N3FkwbRLbgBKQFkQhPospS4tu9L",
  "key38": "3no3zG8g5e3h8p6J8D9WojD2ZAHHekmFKXVLrJ6ynoNCqD4Q2JeMwR9MDJLM3Jppgb8CRAgPi4jrj1izayMtQ1BG",
  "key39": "2eAXT6DtsbE79retn9ur9DjccMTJQJtsfpuc5T1oPtGQjrRR27QHT1YGWVMzmPGzg1SHHTDqT5Zqo3nx5QS3Xv4G",
  "key40": "5jujTdP7e6iuFiqiz5Y6AHNNDFWfKoJaW85Cejro8snYeTeoHZmEzm27FUDvE51Y6h8L9f1yfJNSxo3SBUt3Pv1E",
  "key41": "3A2phPuCTZCVUZ5mhpHq9HuVBjWTgZ1qUfhE4e1cs5iPZCDtX4xmAgoKZQvqmErz7uZd8DDQTLUEirmPhY24zeDe",
  "key42": "2Y5ai19FuynC7agYUahonWyBJG2Cv5TcFecYVwJL8QhwtU3ra8DyYxWLGgoqXioRzm5fuQDJ2ZFwPfTcVCNgeGRm",
  "key43": "2x3Aq54iVs86pHLafToswcBp7pNFBsPywfbVWBvJnDVkvaQmwL5uoMFGnNpntnwhsvHwddpWKux6GZhVWRgoesP6",
  "key44": "4b15Cw4VZC7UJjLZyhFoySUMC6Dye24kA3bDhL4Mybp7ivyVrKh6iiktyYkwvVWVeBb9pFyU9Txqx47GEzo9Mpb2",
  "key45": "3ZhHo88bPPDTBZU8VTFPovQBAXrdb3jNYtgKZs8DGRLKPQpL7RfsBeEydhkJ1yjgBUbidTsibSkaCqYeKYVexGKr",
  "key46": "5gf2oaTb4n4Jv9JAbntpTzQs8JseaA8wNsUb6MHFAk9YemaKKDiRr4JkZ7N7kK4j9b57DAEqpUUND617bXrHxPWo",
  "key47": "48MuU4JGmot2Wqbc9TBoscBcepS9keD7sT3LpC9r4xYacGTPWSY4e7C8WDUut3zGUUe9MK2aSSXN2R7fLHej2nCU"
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
