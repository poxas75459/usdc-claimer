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
    "EXs1q3C9LV3yFpX1812458Qr5rQ9m4yFuuU9HopUUzDSdcwh2LhSXgWFFaQT8YjnadjwCfT89doVkpJZF1d8UWm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "621MU5iuoFnCY46JZRCuQTbZHGYUctDAHsyTgqYfrGzEctvBkBFaUMt6tGjhZz8vXgU3CQayTjxzZBwJFabMShwX",
  "key1": "bSsMvszd1cDy5HhsTb42koxtuKsJtTPFjGKGWi1MjqxLSaJWkx6bRdVoZicjv6GkXZgpBAqGERvFDeDW2Mb8XtL",
  "key2": "2ZTH314bSUgota9gwFBpygPbtpsmQbTCxKRoivoS2Gv5ipnjTY9UjUBTqbdpFNmf7R2GSVaeNVbLLRFgw2iDoqjG",
  "key3": "48VaCeksYo5tqWrasTDoj5VtjReqZqRGev3QDZVHGCKRDoYGNkCd953dRkT23pF1tniYssWDoTsyjJJTwRn8NGhP",
  "key4": "3CJ5bbpeur86D1FmwcQFWvktPCeDGDMDRPEUCA5qrhb8XHk9Ttr5BxhrkJMwcCJudL2M8a4GLmwwQ9GXhfsa5E2S",
  "key5": "228YP8oXYnhY3vwssY2RvTRCD1qHmLjqmBgKAUxSKuwpgbkZt5ceg4gPQdy9jamyXQDSWUh5wMsCKh5bHqKBSmfq",
  "key6": "rhBnLSZAeM2ZjKpGdVzyub9PCUjPkBu74itCmnLjBFfzqakxV1iLyK4CdTkb7ZMQ8o2a94ArT5q4V8okW7rgcaH",
  "key7": "2BknwQ6irrSiCGNmsqSHZ9o1z1Y4gDNbgcZi97njNXcuDZiKkCsT2Wv4YNQbCh9z7mEcYZXXDH2ePMtBF48uevyV",
  "key8": "5fK1s1FhNtNVwVdCHAUy8PxXX9FpokpWySyCyxbK2zgEcnLygJf8kF6uXJ5PfKrH4PWgxAcRbEkY5CmCaiAy7qJT",
  "key9": "5nqkYE8VNFLjqJnoYbbSLrxNWw51xBmooxrgKXL7J51nNWjrEF2o8XxTth9VWiJo2cbXpdzNqgV5XSs5fy5rJ3kt",
  "key10": "4ez7qPE6ZLVrmyi21PRKokevZAMxUXJbuVcPCuSAL5RsbnBxgEzWhTr6z5giS7tM6XDx7PC9LELEwRagRASp9anh",
  "key11": "4rRWNa2ewWwfu8ZxBP4qRH3v4tEKGxUf5nCR64bWhCstvspnJ1M2NstUBbSU4pbKCueVojNpYMcBQXvkhVKpdYPX",
  "key12": "4FLFtCL7cV262YSnosAjFu7SZaQ1xwH9KiuLk5qu6uewmM26bEzQgG6iWvXX9SvuQHvJnoPMGzp1ccu4m2aH5AAK",
  "key13": "5D5XPpRjRhruQr4p1Soh72Y2goxgA5gJ1T1oXUbYRQFkPVComPVpZCwjuyWH1LmKjPtZU4QQaT52DVm9Q6d28GnV",
  "key14": "5ohmKjKpPwDK9nRKNNbfwM2Poe8scTqkXenuNf1qyGyPnPPVmDr6PWvx4Z1KEWSvvKSg77hAvjduFy8dqaGAXNoC",
  "key15": "873D7Mv3kL5GBuinvvizxmXEYgPpP6sWDHdzT6FTnJL1XzupqYBKyS3qNKU53QYHYytC1P8TqqzUYGwpfRf5VQk",
  "key16": "xJZH5NHWRrD7qbkK5era5XYVx9amfKh8JJKzmMNuoQAfCBTAk8Ck4ehZ5SfdHEMX3r3qfiC6hW3p7UvxcEUj8pc",
  "key17": "4dHNpgtG9cEEvP4TRSaHt1brFR56FVehbWq2RnFeMbjocHhSrNcSMUMUwzgPpUKnP8K7UMmPAh666qqw1wDn7zEw",
  "key18": "41H6e7ag54k4MSrpDEdLdmrWqUHphVi1kiD6qUVkDTvZDSu9iBSGoXp7VBxYyjNCWL43CudvBEvKQs43onaA6WUC",
  "key19": "3YT7Vs8PbSGzSn1LM1WhECBUhYDWh6LeLyjkRrVrZ9yUbmMKbQFfXwiwXGoWysCYrbFg7s1eXg4zsbmUfBMmft5T",
  "key20": "2n17qKW1egLDDVpNCcHfrrqcbZovShgKqXoAkyqUNhtxaZm2mcdxxiTW5iDFn3WQF2TAUGBft8DJMYkGdBoSqSyq",
  "key21": "4j5BtrPgN5f4EpruVKG4zr3oi3ZMHMWA75tg6Qj8H2eoWhCprn8HemzGcF73ddhsHL3AzrV4LGzVQ5XB6gWSiikL",
  "key22": "kcA7vSSteeLrdowQ9ErVS2oQLUWu3e33QJpzgRQ7SxVunpc3hWxphbJFKSkAJ1g3jiU4VD3ccLgbFfkxDecisds",
  "key23": "3Wna7Sg6J8hUCz5Zd2TV5XiFNLuZ87V2vWYNbsQMKDHfFCJfrHohKpJVgykpnbDjpu4nHHKVb5A3dWueN2WGtMZe",
  "key24": "2BqTrd7M5fcix7FTaBS95RJWFbQmNgxjn5UBZ89U4f78go3wfVBapYeRzzB4sTG7bQbcnFJRsde58StqGu79Am6J",
  "key25": "3yXSioDeg7BnEnFyHQQyEmzqWgryVwh9yham4KyUYnTAUNqrxD5wSdjGZxnzCtMqBENTdtwmAtn5ZMcttDGDAL1J",
  "key26": "399rnY3etRZYMhXU6NfsDQjiUPriF2MUYYX8EHUmrnLFkrRZHrCdiL8VpdRdpELSvE8MDZN4jX3w7g2PhzdEo3sH",
  "key27": "4GofRk27ejQUqpvkZXua7kSQeA56pTMptE7GXuCVN7ijFQ832UwVUQn7EtT3tqhseyZ3SnbgYatLgieok9KKeJdw",
  "key28": "2daCa6LhXdP4WcBBa3sBXjbPC75DqWXPK9zKiJLQf5Q3StsZDyUauAhXJgB96bk5sFkt9p8vA6VF5jfC9ygrKmpd",
  "key29": "5uYTyBCZPCW57jqo7Lmh9CZhVk78ULj3KF4KHv9T7knisddKwi4PZbDevEVfHXGTTSBnzgUve5TVE5tbUfxVqoZL",
  "key30": "4zeEitw47Ee1TqGt2XPfQkVJEpdMWBoModvXUyRZb5soWaDmWB6aQkn3gb9Fvt1tsrnrZ2m7jBQu141WVuv7praz",
  "key31": "CT3Udnk7FnYEaNP8VknviqKYZ6wUiYcgGNJbTeptWsugwyTgDgxqroKBmocwxmrEV6EKAoVTtpjL5kLUmttyqAV",
  "key32": "2dfQNTSGMdcC1Ypt6ikfZbvjwase3baGi7aE6s32nmtAPmzsgpRriQbxQSPckWKanPzSRTZikqVbXpcUkAJU25Ec",
  "key33": "GeRordr18reEhWpYEyPeEECDvUsE5CC8iqbfah54TsBntZSVtKzVWJj8CcHHmWRmjCvz3dpQzUVyGEaRTsahaA1",
  "key34": "2rkabTqckHkkbJZv37baiuzBTnxYEMnNBouSj3xDXD9MRPF63AfEg6KDmHru3QxrMYYXsBPAtUJREM2SMobKk2Cn",
  "key35": "2GejtmMmfKD8jmzGqhpFuwDffjYZ1k5mTyiMhMP86Ra1cwpVEcH1xqQwGF2HFchbfFB7bdv6uAPhbsrD4ptCXtoJ",
  "key36": "3b3NXWHoQRDfkFN6L5orBfDdUZ8wf7B1qtH1LqbQtEV1HPUdVCeEh6HHHWhNQjVCtrGyoWipkciDyGzCccbtuMLp",
  "key37": "5Lf6XDPUU4kr3pXWvNqoGVpEh4ixfzybbk8hzdZ8ehUbxAkxCQ9CoDZ8MULaC2L6jpTKvwv9btFrwmeW1rZVY3hk",
  "key38": "2r8q1kscCyvLjUwwfbzCK2CpNbxsMG6ZxQnqkfCosi3GBzRExrMg4weYkyYouKsEWqZt1SEvt6PkDhtnFxVCtxwe",
  "key39": "3oLfQDXNYkzQfzwejssUYw2oMtfGcWLoS2WAd6aP3wNvF3z7Hh3iQHWtHNxw3ig1tfrMoEsMNRiQyHCTXnVZAdxB",
  "key40": "2Bj59zxDZms12YJRNwrKitg1sf1d9ptrFVm2C9ZF2u86hSFmpnJKuBRYN3inRydbNEnLwtX8K3eKm2inDL9UK3Dh",
  "key41": "62xghWYZeiuZXC6DZ7PbzGuAE9rhj3Lzfrv6fXutRCmGpXKZVvEcX2GbwafbDLoo8z6333PrYwxL1YkLoKD7PtQF",
  "key42": "2ki7zGGBsaV9PLfb93q617EevcCg4x3QDktqMKJPaZ3LK6c3RsXHyTNefB4gw3GbUmW5fYXsoPsuYdybSFJk8YmA",
  "key43": "2zxgc6oNevdEjeZKv27bjphJSsZeEZB4zNd8fPuzFijwDtDfaAhB7yapcWBfeTQLomQPmZmWCoytuLSzwb4Vw32w",
  "key44": "GsaWzVBhiGztvjkxNaMh5cepv9CbTsLAkaNBzyNX7Z6tN4WGgrPn5fBVQ7vyKRa9MbCPPLWXy2EQJ7MQs62wMeJ",
  "key45": "2CRgxWcrjH9Cq1x2gi8dD4jePBB3NU2FfEkZa7HK99S9NJSfNim46pwjRfAgaGf6Jva5Z6kFyMUv1RBEkd57UTva",
  "key46": "3XkenTajK2fYKUy44GGfdyCcpv5CZxMd5ZkeY8J7p7eUAZQxSVcws1uEKZWhFqMxhTK7uTjtNbpMYFnCyf1WLav5",
  "key47": "cemDSDazAJSny1k6jScar6hRRaa6HUX6f8YZVz3icucweGY6dxRNuGuEnqjdLQtEhMcyyzbmPWdZennHBNm6H7u"
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
