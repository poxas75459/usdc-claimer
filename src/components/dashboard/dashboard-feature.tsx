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
    "5XsHgdfbNNTEqEMhzdaKBFD442v1N8yehNALR1C2E8RdELwdPsGTdMphfQcD7xMSDAkWTzNj1BtHxZoWtnfYaaHD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nLfxN4ZeBoUaSiFhRo9sZi2aJhmjfikSVpvT1CoYMSbCKUVdtT9zXtzyoy5MvdBp4ZdSLiZdnRYwb8t7kSPNXns",
  "key1": "2NTTNHvRgMkksWnkRhXwfYEbUSKf3y7aaqgjkabwSKCVbbFRg5tS2AoKWP3iYxbypMmc1x4e8ZDV2v8HimS5stwX",
  "key2": "5dzbYUox5TRsNrhv3M8TZAs24LhF2oRGnAvCftAoUAC1n2PhVbZxdwCBrj7aiYvd5okqk452FDottq11LBd7rGN3",
  "key3": "589u4x8rGgYdYFTxSv1wAV17Dr1ictkeYkmpDWn75HYvFqzBN4jnpvURZ2DnGQxXuJkuKNB764Fge7x8PCjZwwM",
  "key4": "2scTLRd9HH9s2oXnnUaytuZddGE7m94sYinLEWRwLPsNYWjx9nxpLfk9HzA4aRHokXfX6mC7umPsPf2VbEPnGW5s",
  "key5": "5VS8Uso9eNXqnwcdZiTq7qncskNLun9LSD1do2MBEyLE1FT7mLfqj1CeKDrPKf2fZatxDM3iuq69Pnx7QiySngfn",
  "key6": "oZVSTqGhtCwDCxXTo79QLtd36oTxfGRXZUhTaXvQfMhZZ198JYRosWCTJhVGFvN1naSSCECczBMfMQ1rSNv2bWL",
  "key7": "56kNFhV8uHCkoHcjW9eCSMHdb9bye9HjixB81BFQ7dXMpszc2xiAMkc2K2d5TuYRfgLb13Tjke1N6RRoYqXqHFsv",
  "key8": "4VBEgPLMejTG2WQbkXTCQ6CESDk5GNgrRU6DQJ9o9WNqXRRUYjuQ1YVzrAv9jyTxSiVNvUB86cdNUKnUXXRQfChB",
  "key9": "4hRH2CfZeAZQvnLFhKsvxjBBA5HpkmsdqqRgpGVBpq4XppcHZWGi1uZvce5MeX55Er2DLmLHHX922kUFgJmJz2BE",
  "key10": "27x6bzid2WN86gXEQS5AzHi2AqBvgLmJepdGnUBt8KYeaFWpGgj8E5WtgRmSaNePFM5yMXc8dafK5cZ1oxd1aGqA",
  "key11": "2BGfyrZD1oZPK7xPYnGWSxZRRDs33ficro33Lyw4i3zJfFEJkVzFeN3AzmgfbsTQBr7ggF2Pb3AegHfvEa1xwk7f",
  "key12": "2zseP5VsELUUq4frYzPRC46YNkzQBQR3gyxm65denfLjVM1wWJZpQziqgXcgJE5spqwqtLXW8qq3CBQNT4zKSRRC",
  "key13": "2CdxN1fjwm9fcDr1iF4KDfUmQ3bzGDdtiUsPPTvP5USERWDq43PHBjSck3ikKpVBMjFt3ZwNi6CrftMrrF4qCmnw",
  "key14": "uJ1kSbRLDqDYABMbK2y85v5TiqTaWBdidjbmvRAhkQWVZ3yhUnsDMokdmobMC1VVfcZ9RZ56JM23m43iZMBZqBM",
  "key15": "5k37N8PxUU5qffTJFBqad8VtgGPqUe3dTEKnfNxnRLTMQCVRva92QsfNUXeCfq5ATL2eiNnGv4nm9hhi1zAbN235",
  "key16": "5SDLTqHjychns8rRmREoXpDRAEbBx4GMhcpf2KHeJgaJSQGER9SecfvycTB45K7feis8CedXFYuz8q35TLH3MEhi",
  "key17": "57QLuK29H9NbbZgfZmNszyVFFQcqUrr1dnaahjQGk12XenSAqm9QwYs8kTjg3EZ2F8LtZxwi3gro3rbGThDpgvDz",
  "key18": "4z5vrfpQ8im1XZ5ycfwgzGXoYvSgydXGfynk1SrRvgimCxixkPh4mLodx1rE6XwaUogy2TWXiKwdSPsXEUxt7UDV",
  "key19": "17mN7NGk1NPdRr7Yro6WEcgxMguxLy2eGUqyEVcD173Dt64Q89rUG11SUwFD8iVq85Aojh1ZUPnf5RUuqmC1q6e",
  "key20": "TDx9ryyaK5jmrf9PZ3yUcbrwtAvFXt8twSV4w2N6pNvkn2Wbv7stsJanPuf9qiya4NEKj9EGDK6FxUdMcDxa1rx",
  "key21": "5qLD4HUmDzUU2oexYzMiDiMLbZLSZL6suuP3NieS7712KYSEJvaGMHBHU3DcVraHzkHkSfa6cQC8NKPTxf3KmJYr",
  "key22": "4hDYq4d7kHjswSULSp6RX8sqKY7eRRLBCTfihpNNV4gHZGE7xPPZNxBGacCiX7iPmUXZoC5kparCDhCMnixew28u",
  "key23": "5bCrthiZwwDGRwhQkkiPGtCnhded7V8NyYvTRZHaqoKkNpV3TKesd8q3uATUp4oC9vFichb9ifnB2cLVrjsB9UTH",
  "key24": "V7zL4hzhRoaozhDHsGPJgFnKqY2igHGb5QQsfoQctUuMMm1WoFdc49hbAbUz2v64pJQKxNYWhghztTuw3Ua9guz",
  "key25": "4rnnB5mzbmNZSaj1on3cvFEQ2SfcDxABxZeXCZMT6UTX6igsqw4eagCbCDMXLMZkgT2bJ83tPsZKaJNU45dDgPLG",
  "key26": "EySzWYz4BGPAuo2EUdhG33nPiHoW8rXoqndWB5zt8ZkdRWqyyuPLfVbpvgf9NafYsTnyzQe1kF6dMofaq16EXv3",
  "key27": "ZKjeNSiHy9jLt5X5X28qTn5em4SGodVTDU4h39Gsz8xit3cZACc5LPgjUbei2GwRG5tNFefygMSEhxN9FXEL5dU",
  "key28": "5ZgaJfA8FeJdkXizRomQwGLpXAo38xXZ4Y6KKRe7u1JN5bzeTpvmduKiXeFEyJJZoU1Rvd6JoF9XjnGNHfCHvbim",
  "key29": "u8XGeoXB6eWRjaw2MaAgE74CEhNChs4hoqoG6nQHq66pmAqZym24wofYDMsMKuvF978Tx1Urz9W7JpAitVoRRTP",
  "key30": "426ixUXZeevZ4c4oN39tQCXCHB3cegEe5k2anp8tfYSbKxVNxVxT4J23Gih6k8NYhBham7ZQNbvA8B2yWrKp3ZNd",
  "key31": "Pgrx2XDnVvEL2PsKfo2KCoCgNuCHGrWkqqkVfNNrE76iYeDv6ChAfbPZC8NQDofs7jVVoMXq1Zk9wicgBjJ3EPG",
  "key32": "4E8QegxG8cC5ugbTm8s2EWfk7rdYSuvDsVyQdYuRj5wfqMnGa494wWBvqbMQk4Y2ZxKEw5fQavdK8BXpJKZ8HRtv",
  "key33": "3UtBZJtLnfSR7RSK2Y58qvjgMYUqoe89NMi8uA88wg5SF4ptY64a4gxYJdyPSRXW6XyyChq1QP46tnsEv5a9U1Wg",
  "key34": "4ixZ8uFXdcjc6B9T7vxrUX1DotdCimJivcD6muVRigN2WUQrS7KAQtyNCrDTv62XZ9ET91UKWqSXeLEfdups9wzP",
  "key35": "62PQ1Bz6JB7DKhbE4ByRksReTGPTbSqtwgeH9MaDMiFGmfYhURQSuaDoYLr2sTHwnH3w9Tsba1TjGTVJrNKpyMPz",
  "key36": "2kth3wvuNAT7skeiA6FeWrZfcDpGi89NQmNJVMNLjvqbmQyNAe8pBNJ7JfouNGdWhj6F9xqLWyhUVTjiKJ34m4kx",
  "key37": "5zJdqYW3B2rA85hmzp24JVZebKvXejEjiU6PfSbfJGtevmQ1soNWuWZBkgTNtqbKCPTWXhBLvH4GKEC9gqMnYWtY",
  "key38": "3R2hoTw5CnqFkE7VEyR4TWf3tMML9zZZKgv3Kqf54TSfUK8VRXDUgbnGdzQ4WoCXMzsUwxamx1kdSzfcXFtZbAps",
  "key39": "3WPKwPfEFJ9989HAMvCRP2v1GZgfz3pcnireDGRkqowFMiqRtkaqvbd5jKLcvkvuFmHjnrkJ8BBGjEYpfB7qjKM4"
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
