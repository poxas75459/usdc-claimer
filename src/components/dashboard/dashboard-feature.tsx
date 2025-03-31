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
    "4xpvBKtAybWoqw4PHdtDuJ2qkha7wBFfAt4KR5hncM733CCn43Njdsava1owSyGV9Pv1EwpR1gtZNZZEZ99FYpJa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2U7CbkpMEvPXda2ajdeNmqNVBHwhBF2XBQ9t3DuGbD5Zp24doMC8i356uvHUBSReT4hKjEAVtBMJMJnNezXrq4LU",
  "key1": "2rLaqM5VwYPpHVY1usXR8sFfuXn9xw2CfmM3gYzVwhhXnahyz2qYvRwbbjsEregKbUswQUSFLBEEYpqXDTPFWxp4",
  "key2": "UT3wbLQfhzSnWwNhh6h4hQ1x6j6t2Xos12NdheS228dacyKhbeRSz6C5u62QLrELjvLXrXtD9v4uFqqGpbUULYU",
  "key3": "cLQrtE9gLkWhv8MVckdTKyiYQZVse9qUrpoorad1coGkqw6P9C6eoDnzRx85oQ8QfWaMMvq6rYm7rot2wCSrX2i",
  "key4": "FC3osuXztBfyQho3zFPGkPgURpBKfu3YNUV5tT1aeTcUVgJb61Gv8ZGHQp94PZNY38cSU46CwfRRwyM3v16RjZV",
  "key5": "4APWxMji5opWKNjFFVqFmPYAa7r7dNDqhEhq8KyA3d3wcxnJLHqYqyuEqMBw8nXWRwnXqyN8PDymTpKyKP8s5WKg",
  "key6": "5NDh4muUhRjyANjXdUnEVtbLtXF6YzeuFJBkMch4sNZErLMbhPUrnGxRZySbj96QjY8LrzMNrEBCcP4JTd77detd",
  "key7": "4fJQeaKhYon47nD2vBbvYwTHVXZwJG6eRJJ7YYeve2CgsqGwjiZnceeRWkAiLe1WRotPMdVWAQbpeWbKvRBdCBYp",
  "key8": "R37Q2a4B6gVJfpuERSYmtFUgJd1RWCJzjT26FDMz7UaQTr8R4vgrxSLYCai2Z2VFsRKZwuigKwoJhDD7abasCqU",
  "key9": "2SXdr1ndXYevSgcWU7a4usC2WjYQhfVtzsioXXKhmFBah9sfbnZygJ13vfM8TnYtUbbgSvF8R34SQB93BeJpB3LU",
  "key10": "yRakRsD2LnRDBBVrYkAhsBWop9nY36NtfVZNJtixQN9kd96crTRGiWECFsd4CYFgcDREGAVwron5vseo6pdgPeD",
  "key11": "G4oNm2LTZBCVXYgh8T1xDbZBh2bTjSUFrABaf46nRw4YSh4Bo5D7RVX1LwWyLmUzxav3Kk2bzct3S9jdjw5c56E",
  "key12": "64ezwVjy7qNby6WU1AbsEUw8nsHk7rky3brSp15J4UcsSi9NLENeCxrZnShC8U89iPzXcRHES4zsVshaTcWh9rxX",
  "key13": "61jBeekDcXpqtVob6Uaq3Mp5bCyX5swA4aVX88UCVm4darJDWnddBWcqbzKNUjATsnwfZn91S9KZsCQoM9Mpqs8b",
  "key14": "3xfizfJW7s7XxusBFJtPQAeJCNNSq6B6DuWmfcsJz4MWab7LewWCT7GADfFTYQFD9roynnpsntoY7iq8xj2U9Ysy",
  "key15": "LXomR2JUwVuJkiZTN1ENrRSDEoKF59Es4TnVTy1hDqNJY1XBiJpJtHkhBiq7ABBY7eL8F1Wv8PcQjUTTsVVHgwS",
  "key16": "4RP9E2MWVUtqBF5tXeQU14UZAodD5YEWANg1YUxfJekrAmujhZgn4LBFciJkyC4bScqErHh3q81cGcHiq5bVDfHU",
  "key17": "5sH6dugJUezrx8TzYRymrTyQgXRTwFvdeGJC3pV6QeWaHkeBN3oLorJ6VtGtyCaLbRm8hyF9muo8wjDC7DeRbR9d",
  "key18": "2bMicoWN8HNNYPwySoEHHu6b3oCffcF6B8TFQ4RMQwJncXaz4RfGFZaJUYdzXS7EnCsMn87TkiSMtZhaxQQf9SHs",
  "key19": "4BbSY5TaB2dooLdap7ChUeowNirmcMKZpJrTquHn4Hc1QaKYskszNYAbZFk9ooS4dZHTXdHMML3DJckkPh1vZGH7",
  "key20": "3gtfZJkJcK3oBVxUbEp2vfDUs38B8yju37vnE8mv7zAg49i2877ZxT8FdRsreC2vHNfyrRmT7kri16DYjYfQHpqp",
  "key21": "2pXgHwvtcE3nQLmpHTVEhgcoJRJSQttfchjhXXdCQ3GHAPTJd1FH2ihbTB2tUEBPZycFxrfKH4wwLiGiqD99oKZQ",
  "key22": "48BkHBebdbLcdnFeQDY7U2e4VXR854VcJwyqunwRc63TwGDK2xNKq4c2Z4NvJQANmLcrurtaMSAvrtzeboFdA83r",
  "key23": "475Z6NykxBvY7Xm8CW7NDeyUknkK9zs8QF6z9DKfxcqscNJTL4QUY9v2FpbNeGbUdqDKWamKKVmNZpn9s2xnFYea",
  "key24": "5BDUh9WD8XfeUiDUGyFzV8WfGSW3BNn3RxxFJjnyxQBZwiGcU93ktZfRf1PDz5wNgJ68qyG5huJ1pwXgvYHRz7AJ",
  "key25": "4NQg9ko3zyvBS3Kc7E9qYn24N9N2h7kQxdKSYhP8rzNDZNmrH3igHqJ1syMkFK7cYUqXknWBfD2dP5gg6svrhciQ",
  "key26": "3Nm5w8E4RmYbB2e14ikTJrjP8MFKuSfMtNyGKAcKFTMeUxn67oNA8QCuZrzvDQH8xtM5xptNgbwprnQ3GUUbWBvo",
  "key27": "3AVTEqLpBjSz9s6XSsdKo6CDSKy1rvXjbY8j4LWfDqWfWuvcwo2xV3hhdnBZpJVNhtiDeA5q6MTVeYUorLfsX4cN",
  "key28": "3BfQiYyY8KZpeEMBGz2Q1wtnEutENtbkjA7LiCz3ne2wc1QQCc3LVjsQrrMx1mhePBf41uhDcdv7tfEgQwvRu5ew",
  "key29": "2EZu6UVLui8Gf95CgxFaUvngvMyycjwqjuZYZ1LECfkHex5gkL8ogZmXv9TCw82RnxAMagi4yTWN5zgqihTdhAxK",
  "key30": "4sgN7ukVFid2kx56XvBqEUAdA64WU8PtJgQ7RguJ9Sock63vofZZH6Sx7HNBawfTBc7g3zHLEYfMiCDqe9sq39pQ",
  "key31": "DR7Ef1ACb2em7eMPbx1DLsemHc7YQDbeDov49ArBZarkvsDQXKU4Wm5yyRaFdbeqofsXkyvobbUCWh6bNWD14rz",
  "key32": "noEMr9oM1tbgVNACqB8gwtzT4VqhrpwTN4c5F545xfmQ9izyyZoeWcnpFoQ29wJKKSLh7vBB7BLXhX65SCQ5xWw",
  "key33": "2AYHaehnnUiNpWdJ7tew2P6piaMpx6Uf7bqDBvSHh3peZSKrBKm8nuXUBtYcheZAbGQPpEJ6RVJrpekgLUQNcZnV",
  "key34": "5KyjKXThMfMthquYv4antoG9wX32NiLGmsPQqxPDYXFf1aDJhptRVV1vG9TvwLobFaNfknqArx812AaoaRZkg2JC",
  "key35": "BomhZ4TDR3VPmDTeuq1eprssaekS6AzgpM5mgn38PZVTjkGGTyhsR3Re8X4u3sKyMiHLijPdXqgZJdByoSRLZo3",
  "key36": "5gDqN9MSbJmTYFF5FRr67v9XvzbjHrmei7zYMhBik17j8NSyNHfgU8eMXJrsWN4a32uh9aYwDH4HKm7zFdBocgrY",
  "key37": "3dtv6YEV524BF1czSFZaKFLgGCVQDh3oey91DHvhofjDeSr3BcDBJpHrRje5F6A3FD1NvBmx4rik9wkb2KsiXrx4",
  "key38": "5w1mGnkvMJRSsF5bppUa5pWKLoKdxywwoSoUSjAknuHG3ibx4Jbn3Xi9JJhm7mz8YVKh34oRmrL8pviiPCiuTfh7"
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
