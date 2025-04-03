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
    "3NDFLQ3Ryfk83LmY3oYoeogU6KuxciJZ3MNe3FnD3Q9rG8fe13NM8ZXYNuxceXv2in4Rhp7sJHt26ECeqBeyqTFf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AXK4D3wNJJwBkHKVGTS6MCbhiSUvXVqqnhmkkMEeVzwk5biQo7T21EP7u91Cf8cwAvUZCeAcwN3KTjVSU8nNrTs",
  "key1": "2UDG3PMjgCuCGqQwvaBVhnyGTAVyC2NmPYkETDqVhbTfgHrcUqJhW6UAv2muhmHhkGjQMGuAUVNjfUXzn8GunhrJ",
  "key2": "2DdoBjQenmSc2DFQRD8cHVD5K3gy5YYzonefS9Q55CbZ5MwJo59QWYcTuQZfwRunLDr2v5Xu5LxkEntbPbTw3FMy",
  "key3": "4XHz8XwVUm3avA6yjn2BEN9CBX6mgxXVGtT3BfJXY6MS53FEtTzU9xTePQ7Acqhmg4iCzj5YWCgLnTwgPcnFg6gC",
  "key4": "4VFThgbxtFpKhri3dZtjfSYuVEFgNPQwieQNe1fzyUTXXjggVyx5LbgXFmotT4ux8N7vPAoFY8xsexW3VUeucp5K",
  "key5": "S9ueiRXnkNs1wByzfpdXq4kY6QHUfMrXGmQhrKzThU4GuiiwJUeYB7UgKre73ZH5JvV1uU31AaVgLWMuSLr3iMS",
  "key6": "4JiSZm3CP1TjQ2T4PqXn8XsWWpVNZvUkcson4YhXEdvRhuX5Ah4tFqnVR4hrYNTokqLUFQFAz3HtSBqPih5sbyBx",
  "key7": "3Vx9RiGrFzsFVz4MUAirBasNHjPnPB4Tm19mkmcJdfUeg11xEyxNrEnxUdZHfaeJj6vCFQdx6cQNKfMVM5E7KrSR",
  "key8": "25yTuAGeTcdNtxCSNPVUZnR1HAHokAztSgKuvPxGRxsjecu8zxE3CCBB7o55ZQaGYjwjdQKZvhfFbxPLvNiL2X4x",
  "key9": "3NR5s5trhutbWcBqbfMDy5DbZrfSurvbrANu63HoMAhLsLbrbwTXgw16QYVWCVtG3A97ZaULdzimQik7UyygHSyC",
  "key10": "2HzXMYz7cnHqLNRdivXYAsv9UXKcEaCUNNXP1RWha31i1gsy7Kbvc2oAnG3BFzXvuCg1KyQcjxYfjnMQSCSyeao9",
  "key11": "5gZhXpMgBq4HzW6ZtCkgEWxJSBnp3Fg6mX7r771uBmBuT1esUkXbdxtX7TW2wwwUnHK3JDDpQXBYiH5oTbEYJtKU",
  "key12": "sMBoJfGo4KaieNKpvzBcZxb2jHohZEP83bd4VA2zSyPFNJ31WnNu2AfxufqoBogmTcnCVSZFp1i1bmhGii6zH4i",
  "key13": "5HTfzRJMuZEvCosZE6YW9DmrQP51JvwpQHCrKh867XLxeyc7WiTyTwnrTJHtoqLUzRt57N95DJQVcTt1kfwznd3F",
  "key14": "3oRr3V6BqdL77ncYyWtV92tmbguPHLR1scKPArRHNJBh4UQL5oUastNBAF573W1GDS6x2kyrVrsnrRPJEE4EwiMR",
  "key15": "4yLbSb1Rcd6ZdEWUfK3KJtubToPANoHqVAz1mcbpuvGVP815oePX65SQXurHXNHP3BxHEm1aF1UvN3bCugFcPVDR",
  "key16": "sdcxYN3gQCvwmNyK37v5kAj6v3KnPcC6oSL5Zyp5NPfL7dMaC7DKsFaQvB7ny6rrnSTMR5LdQYkBjcLTyNEgzpY",
  "key17": "4NbBnihVWY5jU4ctBHmNVC5bQ9fRqvY1zqMMZkiNFWJh3qk154cypjojgtwWUYM3biDUP4DZxfxVZ1ym32Ymdbjg",
  "key18": "5A2FtsueQvpZ4noj9iqkjcZpNKKmvGYmYgiBD1ago35mqQ895ig3Pzw2kjgaD3ec4DdfWj9x2RP4j5UZoQCKr5vK",
  "key19": "31srpiFC4DHhtzfZfXUvqW2Hvo4UM4FJPc8Yb5JUf9d8xmF8rXUppjXKdWAxB2PS2mTsnR1mMqrwtEtTtrcv4y9r",
  "key20": "5UJTgL6FrgbdFNkiL37BvcWfUBTL5T3HFxjQbZbVo9jT8azUxapoG9WvmvUqwBiiodgXjTrGnT5NgujuKTEnzziQ",
  "key21": "3Zn6S75fUqJzpQWRv4ERXXYQR5igqVNgasbfaWdTYZUFuwagkba58b1VLWjURyMcXhoAnkRaxS3KCMNPfSVArVq",
  "key22": "4o8g4mJ5jNd4CcJR1wXqxmhw5Utd5XAqyS1Xp9Yi4fEoY3s3dc3bLrKWx6MiwyzSGteiCiMK2PpMjiQKwK2GF8Rt",
  "key23": "5rp86xej8yjjAskdPnoJmCxEAjFMDLtABNffvysTsEZQAEGBXwkypbsjXf9DGMh6BQR7pWic7QXSKy7nHUsCF4Pd",
  "key24": "3hiwFZmttLwMMo6LoKfQaMHDEv7VTfFTF3cYRSyx5gFTxT1Ri5NyfubKhEVKjDRT2je1pycpZuQxbtezsbeNqatB",
  "key25": "5zHt6ccMEs2rqL4ZutzRjyQD34bYzc2Gf8f79r8xLbiezfC35SKaWy68quVCK8feSjWzyJ1e1uN556AW5cNLfDX2",
  "key26": "4tD5bdtiARnKEdoPFMtfhoqTJb43dtX1uLZN3KXvLyPLk7ZYw1kLBFZUEKjuSRBnbTKvVho8Ho48WWrJENTb6A7g",
  "key27": "64xuXK6ajUWtqkpbnTVVWHcvqdQeGn9fGzB7DXCUTB7g2RN6SxZQo3FCJ59JWXFusp17omsuq7RGDQ16gm9kgrMh",
  "key28": "2b6TV1zCzfNVDzwT4J4LBen2bMgBLPvsJUB8uWE1ewTtLqPavKv27G1ETz5mx5XJmKVqw2JzgGXhK3ZSsVv9rTjc",
  "key29": "2YeBtPUtJgLETTFzSSZgXJUj4JWjzfpST9uZo6X4esk7Ab5XtdqULskaU2XvhNxmLE9FZKW7e5ngiAozPpVDe1YK",
  "key30": "3nuXoeSyja9ZxdXzYDA4avUewxb2TJRAmyuhm51Kvbbt4b8RuUwT3JcMq45KghSwnJtFeRwtcToaUWxTvffLu7ZR",
  "key31": "3VaNJRqxCBe1C78ZPuf2zb7dvBArahFf4ifTnD1qsTCkHcybNwQ9ExKMnAoAGikqwpn742Nqso8ySjouvWR2J2Xk",
  "key32": "3oi293DbF2SiTwFhZXTNohihCd5HGyAiBhooRu4iYn1FyYsv9ZoqkhNMgay1ZCJG3PfaU5Aof47qwknAdgBfmtS3",
  "key33": "3vncLkB6tJ5GSN6zw95Vh7SFtdY8i23uUTNvb5umfk3A3cMUB9M2tF4s68YQh3eoXkHsMH42CfbJGcscpC4hMdWz",
  "key34": "5D2MW76SpEdDTnx7tRjs9b2jWsq4hb92oot89WAx6EJ5St5ymTgQuKxRQS88SnT9mi79JM8yamZ2taEvhshZPw8b",
  "key35": "3hisJn1MtaaVDaW5BupZ6dtefvCwJ2wJNoSeuyysHovkKvg5MisUKD31CoBAMjXEBbKKReGvQ6uciiLes8uCoh9m",
  "key36": "5d8PK3PSDSC6t3zBNwUsCm4qjJw5d75Kn4SeA4ZvwosGxTo5JUKEaydy7UuMMDkqr3Gp4a4n7iG3LjDjofrzYVz7",
  "key37": "5t4kq81h545oFzU4EzyoFWQMsDD9t8F6rGfcb3fz66ZEmLfkJQWwLUbgDKFMe6jekFPckn9GnpTieGSy4XhmvqnV",
  "key38": "2Wrf3C44GHuCqcpskumCW58V2KpRpBH3ADZPGEdYX1rvgD7YC7m17WJ3jxQHsT5tHPyAvGDQ9K731JUZ2siGeNS3",
  "key39": "4Atbw7bbf9VMxW8fhNMGmfCqg8niE2nA6ZDn4CmCEFYVnsKCXJhpL8YWCQcYxt8Q5Lkvpce7gM7K8VYcXjXBQd2M",
  "key40": "2bGrUuy5Zg9pXJwgfRtkKDXrLaDCyCjtwnxu58DmSA8ckZu31nBRPH22QT1Lsyuoa8jRhkYkDnhVKcPXvgxu2RqL"
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
