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
    "3vXBV5F5ZUkU4pb5oeDPPe2Sqc84z7C8wHyMXYSVgTCcXmnqUWYoVYdMe1LU7WLnhj1SE44ctVB1DzEeCopvKtHs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RHzrXoWkUCSuP8jz13bTG53ABkJp53SWmr3d3oXSuzVw4odmJwhE5Mgs2CET7rgQzAXZKzC2Us9zeddbZmwtNge",
  "key1": "3uz99UWXAdcSQotWmUieAj3ftGoTxXQnF7ZTv3NHLodxgddnzQ4xfEWK55XuGVs1agyT3wCbXZMyrsMQeQhnMw6f",
  "key2": "eLkJ9Fi1aWHfQRbHu92Zf1Y4RzgppBsv617Kme56CZozmxwJwBmUaucXJjMPfN2naGcNVRiQ97LTVewr4QJtXpm",
  "key3": "m7qrz6VyLN48GGaieRZasPfkYv4e7UiVBQMxBwpYnoZ33JcMfTEqvihnxJ9tqncyMLoHdabbJLD8TWGRgzjE3Sz",
  "key4": "4xGiL8kPXspJH5w27jzB5Lc77qzcZYxv9QB5P7FnGJZHYZhbFaubATDmdk1Uk48bogVZBbhhYvU23AsjM9LcS7C2",
  "key5": "2CEfx3Mt1HAUmYgKbovMhrmKdPHeacUYARjhKq6qTeXnjQMmFZLe4yeCYjXBXYeohGNtxQUhyhVow8zM7oKWDQhP",
  "key6": "4VcwFrErVh4APLCN2fvCnFu5LjkXiuHSTmuTXz9D9jxiFkhZ6D6uqtb8kTQxphM7YdowRP57maW1AVZCPFsLvqp1",
  "key7": "5DU3XS1EhANG3rBaHmyYc1APqcDnFhYZ4ofJt4j3fkZWduf7AfSTFNAwZ7LrqdkfoSrw5NpRgWqWyxCxgS1io5Dm",
  "key8": "4QcWFmX6bxXtEkXLHdTcbz9cWSat5FdpHqFMWiWBK6RQbrpVwta6ZB82gNm1X29WSBPoduk668NpEi5eWYGbWErv",
  "key9": "Z41CW683STqsT9ufVpRKbEJEUc2ien7PC4PbHw7LfWQndiMr3MDbnD5TjmFviFXyhn5sXUYdfUJx8CQmMwykyax",
  "key10": "4vzYoEpNPRkyfQCKNgAP6hmkYWHhU5cYeKwEZ8bGXYDdRfzGBUF9eXmGJemwKJaJDWkMK87uWXXockTtozw9BJWm",
  "key11": "xXoNddfXSdJ85vC9DKafCJ3ySWAu1YdQr1wb2zTbk3ebNaJ4SsVCHhmjutLaGkXQEghMGJiN7wrXq1qgdP3iEPS",
  "key12": "3YAjui5UaB1VTk25MYRT5G1UJbUQsPfAX6nY6rp6sEmTLzcUfwjdV8rLmsYswMCBr4gC2TJCWEXocMEQchamiq6v",
  "key13": "DfMNdc2CPEUq5Upjn1FH4HBUfCRcxpbtAygDQqPCvsQPYPydcFMktCvNPPdH2iqDZQJpww2p8HgipCMAzws1c6w",
  "key14": "4FdtHzDgB6JLUSo78nuf8jcnYBTzrReGmzACw5416DVjp4DCXBDm4sswnF6PmqGFFRBCZNY9jz8zMZZgsK3B3xUp",
  "key15": "2x4vk8TpsoZQu4zprazPNmJgv3uqCgu7oLi2n44KC4CraVFx82ui5gRCj3Z4mV2HqDZMMsQhNA3Ko6a9Cw7fitH8",
  "key16": "3VFcMenA2n9JnRgPxpYfAKDKrSzoELX4uv8bdX9pzj7siWTwzapTuRoJ8gQ8LXK2pDuK96wrDCNByatsn7BgvvFg",
  "key17": "QpULpdBzXV2i6zhop33o8xEfUxPVSDdWtVgTK9hZcGVMqYLxBw8JvrohNoLgbwnHeDC7gqUXZ13fvUJ1i7y6Re6",
  "key18": "5qasStpawUo885A6PgZkKbsbkMLzbs6GHyuCJxfnRxfbwoAWpyBGqvCwds9hH6BiibAESJxdy6NFFsSbLNHo9WVX",
  "key19": "tPa5osLFW4HRB74x5ntj2X6MBBGXcbRZLCTVicQZ56H5ejGgZAYFQk9NpLDn7fo7DkvPe1VgBrk6JywWXvZ6p1N",
  "key20": "5WiUeAXiFk86j2iE8QtzeRjYL5dvH8SiF8X2s8dVzSjwhMgXJT8R4CfGGfnor7UXTjmdha8eeVJSFKuUjroW87r3",
  "key21": "2mUttu1b2YSYRjq8idmeLFrrwRF3A4PjoxTp1soPreynxrwfw1b4ohcMyjHKvHH1TMtjqj6inYCNTL2Xt9Lo4AgA",
  "key22": "2BC5PuJGWkUzkxHLZsZo7uUdBdF23Bc1PfsGQ8ZB7HL7C5NGmLKFF8KPrmFYn5YZUqvmMPs17UMgYvnrPGQ3XLnC",
  "key23": "48DXeTXtyjQ22ZkZyk7w3jVU9H8Zidng9rmwAVmpwo9PAPx7WTah2wy1mkvmhNG9pFAXDCMqT5RH69c4bxksDPWe",
  "key24": "4TvzMPTBzwsQtfUbwepuiodWji9MRfG6FUbY8zxb1dq2vUi6ZfNHu6pFqnyrQPED79Yus1Shi6zD1UKoQqXq7Nqn",
  "key25": "4idqfyUgxAh1t7KnDPujK7ETzPXAGFkg8DSEbB9PmTVqaEsBHUJDHEKC6KJfBor8XBT87ud5aHrK3NsK43roNcNL",
  "key26": "xzTDXD8zHC2KRBPywPArt2UAup3RGGc4R4nbTNTV9LQ9dKzcz7vS5yK8WkpRqx5RNKJZsifWWns6gby3Keye82W",
  "key27": "fyC52kMDzfHrvxZMHV4XeFrUQD86zQwC3WPqY7FnWeoFx2hwnHkv8hUrhZxe7vaQuUgBupygitJqCcFWhAAxTvA",
  "key28": "3LQ9y5xrt8KdAMYmQ8wqHBaizkaweAJMj3dYuRYHHX6ewLzqsUJ6TEbL6PybJDffxpDhGF9vcda78ASCKvX5XDKG",
  "key29": "61DMePTvHpRgahBh1cMpzyo8j1oDRcKRWyNWkhQ5tY6ce4QBRfyW9cd8fY2QgcuGSwTWeYyUjYSZjtXtcm5EtGud",
  "key30": "2VoviEam7aCGDM49toMELC7NcGw2TpY5Y5fZVoo235RsqgZLPqKVrLDEqcnfBkuYuVUCKkznKAi6UxCZaph331er",
  "key31": "2hb9N4XHPWgf3aaUziriUVZnt6R7EZnyi22Ge5uZRwbbfjM8386K61nEzNzcyUmMvocQ1n9pqpspTYUBWHG58C4D",
  "key32": "2fMWkHGa6XtuTM5ShyqqjZjvb86DBZ75pBK2voC2PKvt5dGsvdk3r8onJN2tNzHgTxNx61PGbscQtgAaZycsXrPJ",
  "key33": "67WVSV4SRE71bg4mrRUPvr2BBYv1wvVBeKbP9UJwr3HuiKq8P2doZ1uFof3o4XgXa8kZhWtU2E1p6UNF4HE2Zcfh",
  "key34": "2wEEmx4FGNiULYMKZoK5cLb1xSWfTV7MfSspY2j7JCkbFga4C7STxndFtnLsMBhEfT2y4Vfo3RgRipNCpF2TnWZY",
  "key35": "LAs2cWUVLPFdPd9zazSe66wQPqeCnZnoZ5znirLGTcMQXbQPw5VESmTKADqo4D7w8dTMPFyU2XmZnrWmwvZQdHm",
  "key36": "5jTrLQ7f1fBdyKKZPxu1EAL6xDWfdisedgs49Wo9QQ1nm4M7tCZsyCRF4r4azPYkeni5smEHBRWSR1GkmeEuByh9",
  "key37": "2mWYSvWzKAvnFgqP9C7ofzhb1M1MkVNnbwGJjMmacqh11UAphDVjiHG17DF1z3AGB5hsw4Vz3BtKAeWtoRYaMTt8",
  "key38": "39aDv6otiPLxF3hMLYbzrd6q9o8DBwviZTKB1JGYTSPPoJae8Ps6FRevx4A5GBVs4eDb9327veG7329iKgHHWdKq",
  "key39": "6FBrATvLTeKd4g2VpuTgBy7SCt8Hw1jhj5AKQEbJzVjAGARrxqZRjDMrJVg5RSkNFcBhezFbqpn4c8mo74hy1un",
  "key40": "2y3auWwLHfnN2ncPd9p812qBgwDwBJwwxD6dadvUTkL2qHzxwXLsCd3SSXynRDTW6LeikAf3nD8vqsYobCR7NEej",
  "key41": "2ct75hrtJWNUkBjKtgL4MutQ8NSVSKeDqkSRMS9frgq8Y9fgSe6mTUFjWggo2YEFQq9bTwNiphAARiX7RFHDZVU6",
  "key42": "4yGGm7z3Rbptyp3r5XQ4DWBWiW9AHP4WC59poYd1G2pex4cpNvgNbxhigY9DRUfvBF7nG4wVP8mjE5DCbNrKgUH2",
  "key43": "2x7ft7L7quSFyMySDfuYdRsrRHcG91BmStwFhDPJFwpJdKQ3WPJzoK3ATyKjV6wRGQ5Kgb9Peq6HpxZGYozcCJxu",
  "key44": "3D9Kkht9LPad68TSaPYUaGa6QzRVwrPm25rrTUtzzQPJKqgTeZ7vdg2P7yLoko27hBs77Wa1NZ9jG1mV14uzJTJw",
  "key45": "3gJw6F8HxKwKa63TSZ2jMZ9huhBXwr2yUETykBSXvqDPzynYjx5krs8p7dbpVbxB6RtojHAEEL5xDz5uV8BBtEmi"
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
