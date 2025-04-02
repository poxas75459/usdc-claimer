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
    "3GC7t2bX3PMg8Sgm7yrCByhSW7XivFT6zBcetkhXkQnvY3dFB7mryRsmH8F9jqrksbtZWHxeJcLaUcFYLnr9tJgi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rxVFJeqBKHSw9NN3FWPwXZ1VxscEhrJTJPAJdTKMYGB7Kz79aG4neDZEgFn2eM7TAhZP8GABNwb9VtUwDYBPdZ",
  "key1": "DSt4G1xrh5JRUrrHytbVHWLGqVpuT7YKQ9npKmGB8M7DtwV5T611uEazYw7cnofvCZ17G5co5MFz2wffNt1spvM",
  "key2": "5onywGiTwSZ1xJFjkGspAnsdft2Qc7Y8BoUgdeXv7pik1it7VE2ocsyPGXoM7QCm34ULajvC9JRsAnPZK77kLyJZ",
  "key3": "DRfV2FTEJxsvzBaod14XMcoqot1E8A21KHGwSKMfYdi1qUEmgpHGL65Xe8buUqRdz5A2KZT53gVXMQSC66JpAJU",
  "key4": "MYHcJYgXevSqPsgj9oHXqbF9fgFcGrdsXSq1Sa3oT87HZDz26BCWV5twBgY7s3CcBMgFrmfEDHHGJSJa7AZf2fs",
  "key5": "e2LZsjdMqLbXAMvX8nCE7se5Ts5PYjSY3Ue1Bkmb5ZzkyvP1Ef52hbv3eZZ9tjkYrjBQpnsPXUU4uSg4FEdE6HR",
  "key6": "DUzYdCbTqkSyua2nZNKTRMRp3qu11fgT5hebVDh1fDwbi3DkDkH5PEDwQPf6KL2eSCt5fGPFykiC8Wy9Kyufvp1",
  "key7": "2mFRTgfkc7A7DhVsAq6vnKGo4rMp57wdhGkqV4X9jkoEhSX4N3Ehhr43WeBNaZY4m2U5ehmnc6VKdBZXZSV9x3ro",
  "key8": "3cLqnMW3wpmgHV6A2MBLTjDQS4ZVeCD3729UBeGLtNusmszDAqH8S6pLsanaNXQw82iXmXRA2y8Z9UbdQQkaxNuT",
  "key9": "4G6E3Q1J3Kgx6zuBvYjHDSwBZ1PRysuNzWN9W8THa4JYjJTupQHKzwdQFzGEm83wuWUpXHEyu5qfBqTocpqJMxu2",
  "key10": "5peyVLjthjPRMsS4PYb9cMUrs2RAP59RkUwzxXj2Kt6QpVqZTDnNuitujPbesJzuRsDavRNpsB8f7xv31BKraNv7",
  "key11": "52s9p4KRGsXzyVEr9rWjHkPtFhzJJw7dCcB3gL7eBfuc8Mh13by78aqtgKAU4Vi6Hns7ovUGVedpzVJbquZ8tRgf",
  "key12": "VD3e4kamVy89sWu9swNXTR9VT8ppiLcCEQjj1yypBgQ6rUrKYnnscVTVsEDgr1WghniZ6Sjnt7RdZC4AFgRmFLw",
  "key13": "4u9V7bc1HdJQvvjXM57U97rvW3ASa2KWA9amSoqgEURTsriYoJ9krjDfj5GCXK6kiWvyjwSxSxt45kvfAJhqTjUG",
  "key14": "umht2yNHHWsUxqLzvPFddgTNtePYexQXYMHbQkqfWjQgw6pAjT7BYifFZ8TcwYajzYmnvZdDWqLYJqqKRwRvYf5",
  "key15": "2DDfNNsEVJYgDM6QohwHKFjyC55ntji6uRhAwTgJjSVGEXFvC3z2pK42uZPLkYhrUhF3JwKpjDzxTyYo9ws9B9kH",
  "key16": "3czY9MJcUuTdp1J6hjXZFvzSxXzmmpx5cN2vbf1FKc6zuVJeoWTAwksYgLKphGZ2avqAmEAMqRkvLxwgG9GpUZuX",
  "key17": "5LjFaQapwRuxuMYKoFwtRZf5szdKut7AdtrybVruEE5N3sbmV1yXNqkacpVzngAD4niNM1C217gqPTiw46LcFJL7",
  "key18": "524bpZuAkkBn67TpVT9scfahSP88v3rZYgcWpfR78gRir6FQ3wuCksoNkANzj7uBqsuSer972c4kWjaUqQGAugki",
  "key19": "3k6hBCWBpe4nsQidLGN3Ej5yqgqNZ1inCuveMG9uqqzNgiWsLmCCp6MKkhPBMCaX7P13L7nJqe3xZ87V4eCqB2jp",
  "key20": "58yDjpEgiVZTbUTE9DWNdjXcc5EpHLF1FjmVRC6sARNnfz5qaDdUr9AWWZ4myfu2BHKwPDGuG4DLXRumXJtDjZkY",
  "key21": "2oUxRmfg83FFLt6spjVTFFoQaAPgjHvtq95187bu4DgAodHkuKaAGJ4HcsaoCc8L5eU6ELqfBCNSaLvfBLqs6bjv",
  "key22": "2EeD1rSmEUytYCmQDmsX5UWUBz4ajgxZurDL2QfmaXEmwhwwivjqsFgXppw4VN1KZu1QPXcsbn34qH44GLk2RwjV",
  "key23": "5R8YG8ajbH2geexjBxaQfSyYnRoy3shK84i4YSkdYe1JvzQuKP87SYAYUrK4Md5PkFdoQXx27H1yap3jEfPLppnX",
  "key24": "gQ4cfGkeEV9x3j9iq6MxTWSW6hjWAirDEN1TYAMi41LnUhPZPCiXVcRVebhYyEK5jrHgPHZMzwbH2Pgvb2qm2LL",
  "key25": "HEADiRvTECGDvhmCBL9QvAK4pAmRJHyYdaKcpUg559kvDHahgjij2VtmqdV3Zeu1YxVhMVx4UbYTvzymCNMP841",
  "key26": "4jt5n8iYioKtzpnEuEMyBAfkM1Kdzra9hqDbGTFCkAxDh8T6N6V9LpJ6dc1Q56BZFMpWER7QHwnQutHC78Pgsp1X",
  "key27": "5PvjafqypxAq7g1Ract6m8JJkBLRs7n7qsKF3q8bhcEyGhfbHmmSVySR4WyEFzH3ovMkJ6n2zMiW1zzXZMXLjTrd",
  "key28": "2B2boF2GrZEbp1SVnW1EsDzdXcyvfuZWEfu2Y59QBpgUP76QH1Sj4ZxQhQjvoQQiKfzwyQwFUYxd9CAXeiQHpNKg",
  "key29": "28ehpKS9Rh3q5jpPC1qqTtnk8cW8897FRGkkYd5VDb3qzXTw4J1m3qyVGHqp9UsYr97W3wtPx34eSDBMVss1Vj5N",
  "key30": "3y8ajhdMvDJBPHvb4wbrYuk52eTBnsyHV166xfuQSu2j5rncwu7XZGwvDEvwoLeLFE8wgc62N2k1G53UdyvZKWg5",
  "key31": "4hkrHt5mCBd9CzER93ohDfZahnt3ZkecS2ZN99w8mTbQnJwW9NdGnXa1dRTwSiZovBjixsZLK7Eio7BaYTYZcEMR",
  "key32": "3EY4TkdRk4eLHwhYygbRdk5HpyHbRhAroV2fevhBDfHz4hpZuCkPTmHGfJ1DYxx327eXC4ZX5KFGqHGS41cj9Zjj",
  "key33": "hZzVJZ3de2marRSWA1EkvW4v7gpnue95FA5H54jxSy8bvrupEd2WZazLXE9GaL23SVp7p4jxGfD64P8U8X2TerW",
  "key34": "5ke1ecEHgrc67PzQv4DZjLffDDyfnc9BQ36QbKQefMb5zZEHza4HC8Y8k2gYWVBobjAkvbMysx2T2xZhHGYER9Jn",
  "key35": "nSo9c7CkYy1d5G7u65xWyGavbh4JHyEDYAsqZrzw2QzA7YySsnygFxiUBAaKbk3WRxbTycCkhHgeU53gB3GSwuA",
  "key36": "LJWnhvrq5qRVoSAFGAHEzbVCr79JdppnekphUbTsKCcbJk2cUNmox8h6x8NCoR6dJwxUXwaX7t1gChHRaErESuQ",
  "key37": "4uEKAzHWuZL2j6D3JkB1k7QesZFA8HBNqNGbpVhK3jfvacSyPdPC8iNo7MQVVuts6EiSeh4Wo1ZFUBcDn7GrqA8y",
  "key38": "4mS3o42zAP6Ji3iA92igDkLUDeNNLEYcDW2CX2gV6gfw1jhe78hGhgzZj3i8eM4PwchhjApTVqxGRS8RHwgJvxsY",
  "key39": "59b3FmDS9JnvLBDj3DKpmPhmkRGWCqDFWcsQdh4CVmk9MoWsMV1JzYQAt9DVfK7StEV4kLPmgw6GTroNZJfuXELC",
  "key40": "3tpvCgTVP7AWprTfABJzvzHRgz7F19WJNQgrjAtxjdsSDckKopXuDg3LetMB9qqXBgwr3yEZk7h8w8kLDr8FmgUA",
  "key41": "2bjABBDAN1yTw66ebybqxjCYBmqKBZCZfRjmmNTEUxWuMmztfQ9ZLyHCArvL3MNhSZCWsQzZkoGskLGPCiMy38k9",
  "key42": "3gNBQ2YqdvDTepT35ry8KTnfPb1aY9XGP3eZf9AWndzzBUESywuw26PVzUJCJtpBS9xXa4T7JsqEKGCqSFBAXvWM",
  "key43": "3cZS5zTe9RbSzhZjkCoj4nYQbtsMz7U4Lb3Cx998qvWCtFjwzzGMzoFN1W4kizqFx9RQH9XLss9BgNoCf7V1U5dg",
  "key44": "4xvaNrXQwuJXZ5HkXqBb99bkJpftaSYFMBU66duamKnUhZtbbVP9cHDPWs5j4CydYTJtTi3n1DbFMEkULXBUSfjx",
  "key45": "2cMALbJuhpByUKSB6QxFg6eRUnh8B8cBbeYeWUCTuCSAujX83uS4mHBA4B8K7i2mqbee9f33du8iLGdVFSaZJho",
  "key46": "3GemWQ4dMq1Gnz5JYJ6phpD3nGZ29Dd8bQyxKkXeVHYv8L93iMbGqMxNigf2sqvUZRsPY5buU3mHk5fs5GCeRMhm"
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
