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
    "45AXUp2MdgznMgKLLH2tseYencpEoN2ee9vd1EC52F2hmN3LFzPZvLzY66287ZsBD7wg193g6n3hyymz2HkXMz86"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pjdyXEAHrJQvoG7v3cZskUWr8dwCTY7S7tKr3PGMkU5uHijwyk24tUD1pqH46EWcGELPwKY8jHo5QkwDHfqmTyn",
  "key1": "UBfkk4WV8KfBb8EgzYuyoJnH1jA4s4vWvkv6fceWbyHCU7mZ3QpNSYhDXpAi9GdvzPAwsudqgzRwnXN8YYCHizB",
  "key2": "5HpHFeqtWozrTBbvj9VytycQhJziwS4ynrKm7EHcfCytnizhF9Nyhsp21K9kSsEjJiJUiATv1iqAzxCBBLJommVV",
  "key3": "5VyJ4JgLSWA5VFSct2bYPJKv4wkCFdwaQ7QXwXxngp9Kyoq53EZ6fGa5BJA66oer9C5nwhV2NZSorjj8kjJ5MGjY",
  "key4": "5e1QVyKWqgNmsW7oGkhGpTD5AqLHP7jJrzvg1jQSJ4mth73dTZyUGzFFZD4xkFgwpW4he5grR2q6UuowEZqnEoa5",
  "key5": "WBrJBbMso8s6QSt7anbhtSxFUQy5BKv3RkKBbtP5gvH9gbH477t3TMrJmqUhfpt35EecccdDnF7o4fDeXCrfEbi",
  "key6": "3jwMnHy2DTEjefBmL5J8KrfbMPkpAG7ZLu4zcpEPEmdjWVVtZDivqBEAL17NZuCJkNCc8kXjieHD1SRH1hoLEMmc",
  "key7": "nSmjVZfQJGz2Xt7iNFP5UBWGst9C6XYtJxH19zxiz2p1ooQB9Tv468TfgkfV221RdMobB2KHrkVKzgKvmXqDLef",
  "key8": "bcyTVyLLLFqHAy3v5k2pvcsUKvumjccTbT79VV5QBYXouSsUUqNyEJUwqK8ExRFfeK3UfpeBogse56WdGVxHwGa",
  "key9": "3Gf2dEkTF3Zu1hv3gQhWPR8fYeDJHCLYGqDaXjt5Ma3uwVTKSjGioFgJdqFnzPdUEoAqxHNgkZfczqezwv6XUT7C",
  "key10": "4PwPqkXL8V2QpuXM3AvB2BCq9DuBxAke5BwAi3gkqvkgaM3rUNB1guCXbrL389ecTqSJ7RfFSrvfFXJE8YFDWjM1",
  "key11": "5N6TKCYEuN5nNamyFunBfnW8cnBcLfHcCx7JPTvCa9jQnDxkyWVVY1hQErAV1UUK7ww5ix9eTAmTRKBzFKt4eG8D",
  "key12": "ovNbL9G47NEE91rg44VAKo3HVgCrguybTw6PzDtMs5mzweekBEz35iiJLScMMDUx6Ygtc78yyKiwR6hGzsHcJzg",
  "key13": "5iCtCxPWu3ThWidfbXX4R7rPXGSUxHi4si6yCKFdoqbn5U32bgP6VErkMz8zSheH74jG8qxUxF8W8Tg9SnuRgnPk",
  "key14": "4xQrGNdsB5Lwz1RHUprZ8C9hpHvmw4Rg7asmbDA7RHPLgvwvPAuX7Y2Ntdbz16CzJxdBmsyaBixQGAXBrE6jeENZ",
  "key15": "5A4QYnGEPXGtPr7RRTkQWDNe4uphNWuQtzNL2KLbdA5AwcQcgCo6NDKt7KVHibqdfyvFbyVFXvJ6manSm1EwspKK",
  "key16": "2Vwap2ha6GNht4V1nHjZyfVGj2sJZVbuVQVEzFMJsKBEWVTtzzPpaGex3iSsETv7PCvxxb1jF2n1iX63vFCz5wTM",
  "key17": "2MZeqd8VvS8JvUSJPzCoBfntLYoJka3m2Lde44kcYMipPSbmCQ6L3y9TcjvNYTJhHvoaSte7wYKxLmLzAzgSUWeH",
  "key18": "3cGmLnRYz3zM6cX3aD8MSJ85C8Q4eKi3KMwRdb3c4e7h93px71Y2fR8jWpLGJZXEbG6W97Ersm7BMAAWGEWRQPvU",
  "key19": "5XF55ttWjS6u6cs3fw8MucNh1pLVpAko4wr4qtqAemtLZqh3n9zmGscezSnaP7agyUiqCmTXKkV4Mko7m8YiUGwN",
  "key20": "2oJDyQWW1F4gEYxyKMGtByhU3nwHUeYEMi2BiGHLCZyU9QPfP41K1F8wJTk2q3avLBFk212Rw1m5XpZYJtYRHcUc",
  "key21": "2jSQCMr1nVhCvFi54xT67bVx7fwhTiQH3tgGZjuc8bojc5awWYvaZvQQqeVXn56X3ntKBJsUTNsXEhKhdc39fvCn",
  "key22": "4MPkB2mb69GSdK4JuM3b4axtwZyjj5gjQa5zohLtyHXiCSMVZcPQovUds8AXECNCYE3QvQqiXLksqVBptSrmKNnS",
  "key23": "5nomyJ58MiQ3y85Ss3ksXjSZnA2u9eCgg4ii6SxAYEUP3EnCmXKpKwSrSuBrHkw3s8Tu1rucQazPZXBUpM7qnzhJ",
  "key24": "3fUigRYnpNyML36hC13QzrZpuvPAKJ5CuseBfhoXBPCXyhSimXF9BkeHEmwgeqojapkx9y8wWQ6gXqLMX6Pu4Whf",
  "key25": "3JtD5P4WdxZwZvEgcM8PeznEofWgDxoHFEw6u86vUUcz7wyq3eFD7KXf9jDdUrZ2bmCY9LbdZM3DshF4m3Pehi61",
  "key26": "3wUMmKspvRjnKHs6Pz29asqp5pS5RTPTWDkKzGaq3Yrh98TRpzd87RsCs9a7nmwsQDJsDK9h2ps2At8cMknBWfbn",
  "key27": "D48jN5E3k5zwmEzHoyojbwUXAbJTMJ7QxESGKQLbfe928REbeR2y7JdG9gLY3cPy75im8G6EtYtvVGctBLv2ZHW",
  "key28": "5AujPX6AeQfPYGbMn5kHbMjhpq6kkT2QS9T9M3crM2CgiYfzXw3i8sraiBAiR6pk7oiVtjALZvDCLeKwsV2gQwsE",
  "key29": "5mL8JQ7XY1gFpuSR551Ho8dAfXw1rvJ7Hh1G8wcYfmV7GTCiaHYDg84eSAibR2FX2EF9ZJgxZFNtgvsEniq1Fs8c",
  "key30": "5b5CvHiGyG2keRMrSv9f5J8tVvGQWrNw9FmeH7piGrWQwvfGwgEom3bSjjsYFVg6Edjh4FrBL97UknTPaM83v8t",
  "key31": "2EvmK8Tv1KVXjum1P1fs2GLYQhyh3hgHBrSBE7t6fKuXPY3K6t4exMCsw6LBSzv2AV3MG8cH5Bw4s5XzQvLhMgXj",
  "key32": "3AzxCATNNYsV53YNH1cbkaeWk2aWBciMdSUYSzBVf9RFpjdH456AoTPynQdh7TaMFPpmMNodFvnu1zsmex1DhMXS",
  "key33": "ejKAEipd8uo1Z82qNQoZtVEH5nPRieGw8H8z4hXEC4ar8B3DgyLiPaDcxCUU2rDH1AiKAaLYKUVdCZUA3WUfB64",
  "key34": "yVVQwLNsEhZAdCJ6Av6DVyj44kGfHwrAcyK73PNqDQSVukHAzfojY9X975dnk6TxutQ9igkJNhgHGZsJnPH5gwR",
  "key35": "5PRbyqtPxxzsUucGMnzJEgqSnJxweS7PEAkvW5cWvJ5TooJAMgJqzbLHgyYKg65cHJBSATTaMX7go5VcuEgJ1zm9",
  "key36": "3chbmDEGH3qaHKtP8Mi9bF4dayQU9mZ92B9PJJSJHEDJWwUdvTtqABkD7syY9FQXArTZfRxRGoyKScwKBpun7Jfv",
  "key37": "4U3tzu1hCKTt9siVzr8Ne11b1LGwaGBYMvHXv5PfxxmURE3qVaEFk7uwQkJzdwkqi3FSqWofuqYWZCiq729bsywq",
  "key38": "41VrMwLLhisdmK6Ng5JB83Pw3CvBGkQ6q1J7ysZBFmrsGyJB8Z64SqpaRDL5f2ZMXutySgRBA7Tz8VzhmvntFndz",
  "key39": "4yjUQozcgMWy78V6Vz59K8pDNG6N883QdynzeoH1uAdB6HPm37BPm1SyFUpZbkyGJqHTNgDsrtmTrNcYYS1dgDCD",
  "key40": "2s4q6V3dM9CiwZwN4dGXYWUcLRUvYkx6BACPdbsmkaMNgexZhdChMg4dy7ESNzofiTrSKVda4NmNPLzGwNNyUejo",
  "key41": "2hRGyHCG5SDDoLErfVddaMy4N61aUi8QdapNidGi8ytC4a6wzynpKGedbKqkCqMtXeJwRz8Qz8deES5KnKnGwQzi",
  "key42": "3VnAGaURexBBdFuhpbxEf3QMUZ5NTH48hwLTnXX3poJcdo3HHY2H69h4AWeDyQHAaXcsdc9fkWWSEdKn5gs2YMBT",
  "key43": "2yK9bXyJ8BPbCK4dFMQQBJD54X3Z6HNs5erXzNipSB7CUFGHQUQGSfPssNeXf5gCETZFLYWozHgeJxT19Tzrdc3D",
  "key44": "22U2QSgbSmEefoFTnqqcLp4qfKGCQNKQ4XwHang4uAwm722Ln1RBuTcs6qrx7vEYr7rwhYvN3G76UvXqeWoXcVF7",
  "key45": "23xNoAmaBmB4gE224PbwCsj94mHPELM1sqCiPX8QgC7sF9MbJ5kZbvSbFW1DcGiGyvY38dPonyYYZTKmY3sBkcp7",
  "key46": "xzWJ6FKcRtorzvaKvna7gV1n9MfPY83sKzJWBrTUes5VVCJ1gYYdEgwB6bZ3x8oEfhGiKjMoWQyc6DxB9tzd2Xx",
  "key47": "46HiBEaKU5oLeTK324unzCBpxCNA9QmYo4n2Yc25drrpksBNJmVqdqgjZAock7TnfAxfPSATQZrSTSoRLMzJY7DM",
  "key48": "4EqGH8CiR7ctNtKcantxpHhLiyNdwoJu6rCF4oea7GxzgHt6HnnLxJLTDuB8hnhfHpgqZRsKsM5LHbjRWFtnkFrD",
  "key49": "4E41ExWNaXAnw3auS7dMUcVmrKANitQAqPtfsnN515m7VPbKW8AneiqyWKGy95QZuS9wwVU1sjs3CahrGDJ2Mtmr"
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
