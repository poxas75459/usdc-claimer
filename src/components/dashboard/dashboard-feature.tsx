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
    "zYZrWCsjPuZTj3FMCxAjME3ddDCc6akM81bufXBVnbUdCo48JwkgMDyxyJRFDmtGrUtKwhb5uzMwWNZQnSPBbou"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4W1CD5MEd3iTktN3mXwoFmbLrDCiKJqbMs2qQuu3Z9gpsmNjrDxooCSkTmKw2c2MzoucJgbUkn57PjSenFnrGynV",
  "key1": "vz1JubTowK7RRkZczMRz7NSibPb57Qrf2Qcjyq6dqLDxFKGsiWN1KtfGFaLLPg91zuyH9mj6gpoMwRz4Btu4rAC",
  "key2": "56zk7qUEzkE1TVcPgM71MVCAkjG3BFwnY5B8y9nCDuA8mSfJrzCYWatMohsyqqm6LzCyti1shzhYP5ntEFGBVE8H",
  "key3": "4eWL4Sqoof2JczcuGiEsGwinsoqAvirGn6ADfQ7weWtNWdooTx2Cud6D4z2VaBkyA15vBFwoyDsuUAugBzzm66af",
  "key4": "265Wss5NZrqhKfnJp7ej6zptoGhvcYo1MN4JdzqwfSrtvxFhCUFcEaucKruF8DP3JY6hVp4dN3ZVFejtDniawBkb",
  "key5": "5tWGTCXBSD1F5gYgoNnbTkJEZMEQnY9GP87P7DKhJRWdwhi91zTWxAQHAShpXM6t4yQMR5AqoBPzRrSPpraE5rbG",
  "key6": "2DVWRj4fSErBwN7ZJL7kH5Kiv7vCtsRAXaDnsrRTESkrEgLoi8Udp88aEUDev3gPvrAAc9UdzqQh6xi6TGmifeob",
  "key7": "5Bado4V5rGRtJro17KmzgswwTjd19T3YjojAdruQaENBj6vq5BLpTtsx5EkDmsbtv5YDC8wuATeJu1nqbtBg2rYR",
  "key8": "Szn5xExhUXmjy7dBPytmGK6SyqRxeiuxqKpPpaAjbz7KsjDLsWu9r9fVHK5QkfUDeNyQzHuo1FyTUoLF693YyWf",
  "key9": "2mso37SUo6AB3sjsJGXDJmwwMuA22cRCKjfDbvXVtqCCuo175tH5jgVVHfbnNTLskTcVigAhhkiL8pu3MNcUmnJy",
  "key10": "2UqoM5P69R1oLSoL5wP4oYL61GG2G9BdcBmg8ct4LSZDcVihtTo9h8r2MBWi8wL3BX4gzkGBJ82abdefEjkevFq4",
  "key11": "2wPuQkcHXCXGv7q57D51WGF5eKoVVf69mFRtjKncKB1qu49DATqDWWVT4CHfzVBi51TiJfx3f8cEW5mNtoKRDcWh",
  "key12": "64CrnscZLf82S11EMdwXzj1gVshVzfeGiFcrPnSFFtTRWTKwbLqVUzgPHXCXJupLHd5K9SkTesD6B1BfpCTKGoJC",
  "key13": "k1xwkBgMgMxAHWLGwe3fZrhZnEj8maTzBKQuqvVuz4U6T45tz3q7cXujMHP8p1faVB9oxAGxKMptoR88sNLveB2",
  "key14": "59f8vLjpbrz4BaHQByzZAWMpp9i92WSHHwr1swvEcmqfnnn8vvNqkHGX8pKZMU5CBQzyMsZoKXCdvtRr3G2H7dH2",
  "key15": "5yHMsh12Q8HyFXNyx5UfBuYZeppiZ1zoaCve9MLRMJDa8DHo3mwQEZ1PqBRCcgT3owSQ5GnyhnYZ14fKLGAwD372",
  "key16": "29z1gVyq5gymfk92FbG1cu3vo3MiUfJUXBv4XJUM7N8DgWK1MJfmkLffi6ag146qFVdY58gAd7Wk54jxqgBNPCXt",
  "key17": "5Rvu8ZB4rq4HkghxEaBqLzrPP51M5AneLLFapeKdidBJ9sSbd19ctpANftTvovGYb7LGFbTDeYY9Jc5oKzN4VEBk",
  "key18": "4mWyNB9ghL4FLaretU7FRY4P6ifkRuM4ZEPAAjafZFB2wXT1Y2D1YH9865pKoU1VemfeFygbGf3jnaMY7rtw55VW",
  "key19": "5S5hjN5D34FhRzfJHTe5GCS3zBRdrpvTUdizNrRBrJg67FTBX1bje9zMK1VUJXoWjukFm1JjyhmmGHGLe9ytun3A",
  "key20": "56ymEkNyzr3W49Xy9816WqeZkyEvq94NgpnkCJj2bM394xoyDGuyxFr3H5nspyZee5CiupzmEGCqb4LC3y7enEiw",
  "key21": "Ciu6TNCEaQVuqD5ZRoaqo1YUrfppP8uBUwkqw3rcc7xm3tXLNHGadg6fVKtRkDDjBEf6W1uWRNVBR1UJhFtT9Ax",
  "key22": "5vjXEJjqTgMQ66ombSeHAXu3D5J2p4wENL5LbH6a5FF29a5duK3Rfhgh9Wgp1VF8pH9pW8VymCzdJ9wS6FgWzWtY",
  "key23": "2YFaAvHvDRQLJARq9owveqPAH359hHCrZFz1z3RUWiMQFXNphS3zfhkvPHDU8iW1tKAWSTv6uMoFseDvx1iPaAWn",
  "key24": "3AS5NrSyAy74CAdSihnFLZTYm9pwThRRpxwZpT9dsAJy1NeCodsEaQ3nQ4othpurdhSgPJbKWAmaRD7sTat4yB6h",
  "key25": "2FndFPfRGGZ74WhGVUJY41WrN3WVsRR4Vkk2EqYKSELMNeyBxRjj3YsL8taE1rMX6oUXHgQ1Dx8QccBpnCwr2Xvo",
  "key26": "2XtDEJFHpc7Sf2d44yhHWVV82MCVtFKpvpiqduXryuokhk3GnVpgnsoQmhNii4nCjKHLkEvSxgHcse8LyFi5ixQ7",
  "key27": "5oDZH4Tr92KXKCQeu93Z6VNs6BexyrK9itf8Yby6zfHaZiGMM6fyFbmt1XdBEHmQiybyz8oLUR2idC6tPtj8sZAX",
  "key28": "H6iai11hpYRJWVvVft1afeyYcvdrxYabmb585Z6aEBN6hPe26HefYkPZiorTRXFuhgUSVDvhH9N1uTcj9CPYdVd",
  "key29": "GZ8s94rqrkSjnQxS2FYt9q6zXBYPMMkyhCA2qDpUkUK2pchSRFzricPNtKAPLDT2v2J6mabAbuDeGLpDuC9Wh7E",
  "key30": "4wSNHnSTG5LFKuaVwdvS72PQ9p198iDo2wjuSJXWsYvbVZMPAEbqV1ksE16uitgwkoVb1RowJVP2AfnnpxEPK9ru",
  "key31": "3t5AYJSqoov6g81wMMoRprowdTUvquMPGZ6JfJrHuA1Jf7LpfVgZBvzUM8TFPE1Cr6NXWcJwYinw9Ex16NwE6Sry",
  "key32": "3Bo5SUvpm78pPawkcL2rUeFPGvkF4KScA9HrCaxq2dnsFgCs8gZPJqEAmSgH4ADEocemnszZGqD6msBNWXMZVBTh",
  "key33": "9wGhxBzBbaH5kZNxQrg7feTFu9JS5b15tBVhAvnxYT4kf8azPWFm98xmykZqMq3AWp33to1n3YX72RmvSQaN5id",
  "key34": "395i6uqdV2xhs7wSq6FCTugACBDzkEqZf6XFi95W4oVvjaoTQbSc8fAQo8vXSjFE7gRxh9cZ928fe6KEc5Lg9seF",
  "key35": "4R35cQ7ZLFDieMKr9RF5KFL4fYLtS4tUXmVwrjLZAqcPvyAXQCnnaWuvsbB3VmAuvzZkrTjnQJd8UbN9MYtAcUu6",
  "key36": "2rvbMeofzRbWJviHtK3EmDpvi1UTm299MGi2ZoWQukTfn4B2CLJYUoDrnaD5GMmtkjGLKAP4U6DtLxPfv1JRxTPi",
  "key37": "v8kSD9wTspE6mJAR92b8rbBhbKzMRfxQi3YYs3uqGnUE3wNh5DyTtosAPJ84NkTbownne4pWkR3sM1YqNwoxpMk",
  "key38": "4tA9GHaBPwSHwLWWX2Bwnw3eYPcjV81NqmqjGY3WZdN71HNu7dV2YMyf5pXkhxzo3t6EHabQRHGjSuieZUMQ1zg7",
  "key39": "3FuHbfsX3S9oQ96cP53N1d8h2nzMCHmyfhc6nmzmw6EH6X1B78xgThiqwenjbHGmnTVpoEnqkYkuqTiTmAwZkvcq",
  "key40": "4vxJA8fx3uyU7RHUEPxPGuYjLTkkZyjwg6katmrETUbtpMZWXwjQX4Q1UmNSS3nm6YQ6SGdQLUrrXxTFroJXfEiE",
  "key41": "58ZBhwxMoXtQYdhwZ8zcFc7qphDY2amWzq1oXqeK4XoxvkBBYE7C6x7hJuXyvLehbQHuX6GdB9LPR2NhsNKLeUVt",
  "key42": "34hYQnZyhEYMNixjRm2zXERUsjkf75M8GvPek6hN4aSoyNJPXrPSbyjUH9K5gKbF4hnQmNv1GGDR7HT9otEpvXtH",
  "key43": "FEvw3Mdz7tNYuLUFQ7HmyzHi72ArrkxAGr9S5c9ig49SQ4wx39f1cYrCgRKYHps3WXokPfeYy1VpWVg4EJys821"
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
