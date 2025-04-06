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
    "5JTU3H4kJjnqzPMkKxCdf8hT8Vuv9ngtno1MSGEQfa5qzJTT5p6LVJcpCgQJM2tjj5mvBKJdG1r7dUWs5DCmmrQv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29vQ2Lu8siPgC3CFdpxUWs3Jir5FNfKLonagq6xTyEyGBdoJW6QBbQW1qC9qQBfA2hQqcavLFqcbh3W5bAStKXpZ",
  "key1": "67p6s15CiBLYAiKmAu6ZpA27qibSEL9nPDSKNAMZczG5RW9QZDYUA4XYCjMJKWpTNauro6TEAdXXCgWbqh19N8oQ",
  "key2": "3QxzsbShsxR5TR8B3EjWQizxsoZkmg5bY1eVmL47bYpwBVGbzaLv5ne7kTyc7zGC1PmAyeuHJfVgTcVSYp24nxbJ",
  "key3": "4SGJYHKikp3JooSmgpZG7VJw9K7aXAbU64ZHqbCdthxCHMDE86EYfUhL9abBkjhPrtrHMLuLBZdJ9AXquhYFX1aU",
  "key4": "5aPJcu2bVefBc2E8uYDizc8PXqdYrGm2fhrocZ5x2PKFXqLw8vfco8asqHVaJeABjzyeCT78JwqDpNMRKy3uXe5B",
  "key5": "4qTL8exzsb89HFENowEBCXWeHYdR8PMuvZA8hgcZg3oRoyMzJpqdego99iJFwX8DbHPfrJ3K2iz4r49RJy4W1RWQ",
  "key6": "279V6PHiXyDVvSYbpnwQuk8riNUB2DP7S4WAQAkVXoqhBJGPpb2mMw7UFfWYGw3KtWkWEvijFZTvMfjisiXthrhL",
  "key7": "22pf38qftz9uRXQ5Ae2Mf66U9s7TwPNLifmVbkmc2W8a77h262nEBQjbzcevhiGN4PG8Ck7aztDitTSLSoQ6nmST",
  "key8": "4pdsY6zQ9V1Mjs9PjFgkJdj889C1YKV1Z6du7cziyQiS89hqoQG6vwJPYoYaBfefXBQKSqsjGcbHpF3mWiMWBH1P",
  "key9": "WJW4mUXHynbWRdGrRY1t8ZxgKWTfPvgtVX5K7zDAPiLDAdFWQDPMvrvMRoGzAX53Vm1QQHqtWusBi7p8bTR1xqv",
  "key10": "3GEWUW1TFBDLH8tPVKPnBgTJQ2ean9BgrGrsh9anpS87e9Q1WERnPfSBp19C8TAy2W2mXFRucNAQVSW8fsBHyUf4",
  "key11": "4kBAzgjU5LEYQVD7jnW41wazqb9oRieCznzouBYir2drMgkwPsdaWkSKhLyeEWCJQqcofmpTirHBxtX2KuxT6fcu",
  "key12": "4kAf5XEiQT273cWWZTRp8jUQVfPJG63N3xpkT2XGqMsjqyXS9gz4TNs2rXE83cKiGoagv97r5gtoosAQHNedXizW",
  "key13": "bWaAdirMCT4GcR5s2KCobM74G8RJbLaaJAWUsBBRXaLdkTcD6SskhKFqkXDSrk4Rsat63bGWdzPHXUtC9RiH5H8",
  "key14": "Hrb21rbHDJ8pBP4s332nLDGmYWuv65xBMZkogFHnFo3VB2VnRk4SvvNqYDAHJDveGCFJYf8hof6RMJUFrQLzV97",
  "key15": "2WSy22dENWyXafpUNXNYZStx71wNFww1mvWGHVb2oWa16dLF2WLxsrcTUxCJ6AqsQMCMC3dSUPfB3CUuVRzSnf4Z",
  "key16": "28ksPn4Kvb7tcfqFR9CM5CZboZupH2VWyQ7z6H9G9x1Ud22ohAAKmotxZVVfZ1iYfvJc5YKVziZLVb1EgTMu9fcc",
  "key17": "3NbQdvLZQ8sKYdj7xCKj68J93mKaVnfTNcq1sM4ChWm4muXEjfevfjQBJGyc648wS4mqfWWK1v1hzeXM71L3UnWa",
  "key18": "5Ef2Gny5bB2xMXN3BGjtT1hrctPHbxo9BR5ZEHVJBptVKPCaqACzqDiQb1LJJ7qDiz8ZozdaxRJ1jo8cSosU1D8Y",
  "key19": "5myvFf6hmfmoseSQJEX3wnKFU2E9VduxPwK11q3hodMu5NUyr9KbnCQNr7Q92tsvvazVNsmadJTZo9G3FviahzyG",
  "key20": "66AzBfQcQCXGnSk5GsaSERK2ohevV57EqwgzZVqqM6vGL8AJJEToRouMy5Y7z5DMjwDxREpsmhruCYDCKUivfv6B",
  "key21": "3s8vHDxDDW2yieEy7YU1ENoZwq6HvoG6LAYveTxK82aR6tkZaZ1zjPsmwtYHrf3GgVry3GT4FPxsYaSYzNfYm18t",
  "key22": "5Ads4iKRqcLjA4ZgMgpq6rWh5q1XazTusGTTFDwxAoaK7vjU7SR8agJBYcXLF7CKWBjk8eZmM1vRaMLeR1h5N75c",
  "key23": "5qf2S2kZ7Qe88kVDaeRqpZKb7FiTPdFKHQYDBzZMXpUKgx5oTNRzFFgc4PoovtqVmzLmSPE8uASiCgsQUeVsoVyr",
  "key24": "d476i1p7uRPrhutQExcLynvjG6KUR95hsGKGSMNMpEkK46iRnYXcuNWvb6um9jNtRGLaN4v3kkJtXDxVVt4Hc7X",
  "key25": "4hcTzjCHQEh3LAKai6xxMux1uTV6fooQ8J45wzJZJtQ5kSu9uRQkXz9WKwZnGKprDYS8cerM1jDutquq3A5Y3SvF",
  "key26": "5DmzR5zFM5LyvkFCqmJAeFyDajKjhBcQyiWFz8MLRnTnSbAjAcVPM9LiUtV9ranb7HfAaMjJTgiofjJs3bj8HsLd",
  "key27": "3cK2t8aoPSqRqTngvbpUAQwom4fN8NxRLKEVaYj2eki3UdSNhq1w5jYhPAJoL3AnNTp7jwf8SWfv9jjnKQhfntP3",
  "key28": "5qreBiKHs8cAdxAdvGCjcA2DE8APC1k6Mfb7n2m6wB7XGtsR3j6Xa5YBY1W69DbgvEd8bJSWmYroPgQao2NJ5yBU",
  "key29": "bsM9NEWbZr7gz7tBeRxov1kvN9AqSEbLR5vn8QWagx5F4mFLmbGP4o3TXMzSSXCoz5fmCZwiYjbXHHK69VVr6nc",
  "key30": "3Mp5ezyykheh37LgB38WAm3f2Cx7WXTr3GuPFrpNJdPbiPWEyVJKRFfU4qwMkFfnibpNZtQUzrbsfUGnoUxWqp5M",
  "key31": "5Qc8Cm86EJh71ooPxE2g1wMyVTTfRY4VnuJVDt2C9HbUUPkKtJZfcvbABibbJSt9NUn7x9URyqmtsDW546j9zvcB",
  "key32": "3RJq3jZzye7WxBGSNwEpvzMN1RJ6W1vGukT262ezprX3YoXV6bo9dvnMWWzUkzuEmN53zEXBoyAAG38ngTMG5iVJ",
  "key33": "42e22TVDmbppVmb2svVLfmYLwS1YAx3UjhMmyCPqbQJAz6WVLs2584HENtPb4T2t3QvEmo7tqbtgaBqUm5zBSw3c",
  "key34": "6jpXCmHXeqqMCBuhD7vCG5edN5sKd6anLfYSLKvC1yTPmQSMiVrHRVvHxTyQSTPbeEC8QKdQUZS2ZMaWeBH3DgR",
  "key35": "3DwxT6A3KeGX5nCk1PwVGcus39qYkysJBDtJXQjsuUoBWbkLwti2pZUMKnSrGVeft9EDrnVikhqwmZv5xMgCm9Au",
  "key36": "3kPmwrNE1qApCCUFfMFXCz8KJgdvmL7pGTtjvuCn5QFSHMxVAx1aoFPW3ReLVgNqGZCqnQgxVCHiDWkm13qQWVk",
  "key37": "ACQqfrmbMJhH488JRAVzgR5acu2Gq3iQmuiKPVNoqmRHoTqNk5pmbkwPNRn4z2bsgxCdX2MkujgreTSfq3mz8hU",
  "key38": "5M7RFoinVBWATFTRMfE47ZhaNK3enSMYpqzNurNKnrweJZLHthAKrZEtHJxxEKB9o8W4gRdzKQ48tDS6dQ8t6qwT",
  "key39": "3NTqRuhgL7YvJET8yevH8WdU4aP2GLD2DJJmHPSZ24eM3yBVRXPonLpmC7LyV6aU7B3NwRr3tmg12TZL4GkTjndh",
  "key40": "62UPmqedMmqmjZNhmETZmKeoczsimVmFd5jjCzn1AtvLBYGqqXaa5xVkbh4sDfvser7vuDzhfoqjT2H9S3ae7S6E",
  "key41": "5GM8NZiw2MRwepk815odatDxG2tymxxzUEgQgQNq16T6yCpfwXzKUhnSaJDJX7ZQXqffUuuPRYLDv8TUUEWWkjFi",
  "key42": "4dC9YjvkKFnaEttDcFGuPL46qpCo6p9235nBWsqtMKiBLPK5KMUpBdh8fnUNys7AVSRkZo7KpQ3SjUT1tBQFCXJu",
  "key43": "64DZW93QzN1fxMm5Wu6u64UvHdQJ2HBew2dniNYZ47qQ3LGHwJCQykSjD1VAL3Zo8Rvd68toZWh2fEToywTLGa2u",
  "key44": "3gVt9sjo6ysTiyKQbsxkyJ36swpdx99CQ1uoornaYr7ceE5X3xZbycyt8ypPAYNnbZQng9dFPUfFWTamx3fqF64G",
  "key45": "5Jvob9SNUh3tosT1e9UvsejF8pGYipgPKj79Jjt59SGwpxy91HBDGY4u23XHGPMGAZzCSXiwKu5gmyWTAQRdqdmB"
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
