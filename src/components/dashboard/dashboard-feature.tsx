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
    "2CFhU72qcCAZH9HbnD49vYZmnF3dDp5qdTiXXGQpvVPcQXF3BntLR2Nt5iynkRaMy8MYpEjdyr1SodmoY1SXp3Hd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5txGxq5DLFb6syRNBsDenHGyby6Gxc4hqqbvgPZLdNkjoPJ67ypaaqxDdF5bpfJym2p8cLDKtrzXDhd9oegQnTtb",
  "key1": "2qzxK8hEgGwTUZ3JEPGxgLGFgLrXaqgRhRUTBfckcoDHaEApwXdK3Fk8UesvhZxK3WQa8MFPohRS5J7sxob1s8Tx",
  "key2": "35t438Q2t46nDo7nS959UQo3kFJ72cqfQ7F2d3JcUhvZmdi1ZAcuMeAdDXDSfJhAECrX1BtjrAGN8dW3UdVHBa4a",
  "key3": "4yBhUya9sjWP4cb2EwgvHjatV6HgXsCRmKa2DmTvpbTXDujLxLXbCjr6MVEH9VtH9JYpSk2EUoZijtnS5dXCXd9J",
  "key4": "4ucMe7z6NCKJZz4TXcoXNsunfWUGxZaCucvX4mAPNEeid5dUSMYbmySmrmY8vHJQBywuPgVCmGd5ESFtxahNWzLm",
  "key5": "VhdnUFJzefe6LTrVHjE3ZZqeMPycRpMKFSrUE2jAhv8RHGzGMzryUHcVfaUnnuEDs7ayuYQjLE1GdyeKoWujBoa",
  "key6": "WFSwy7SbQFfRx6Y7kV5xutV3dzH3JbV6NjUAPXfNZnSAA27nc1Fp4qF36ED6Gt7EjQki6Pi5ZrujZx3ACCJ5iMP",
  "key7": "2dVXaBNKtxGQfDCDmyqRWNfvByqHNVhawRRCLPM6UrzKxce3GYhJq9vTFm3HN88nAVrAMDy4sPKxY3onRsUZBXVn",
  "key8": "46kya98NKQneTcnTT3Xgrr8EW5YSfgyq5ho55hqz3BjD5YjYwR28q2DtQBKkx3KUeinGDvLj4EPtr5jjcTHUCcHe",
  "key9": "3CEzQkwobUCnH5p7rW82aNmpeYEAM3JAY4LTemVhjptsJ8FTU6HPgy2w8ZQAoNFUsf6pX5nMMNDgwdsqZJuZbwA8",
  "key10": "dH6yQsWAENRsYUhWEhnGQ7b3wxAxeiRwQYLKYkZptDYTmM2vXsTH8Atcx9hnas8kV4GWGMVNMRBr1etGvtFKPFD",
  "key11": "5FZqLo7kM3qSw8QoUQWRqWJg2B8UDcBPoQ4vcJE34YFkQouW9ZdGizRgooLfbrbQUo3Ht1yow7UHC4mDGPdw7ToU",
  "key12": "4mR4TjrGbtC9w1jPzJ3NUGLF2RoSEThCFvx5QJkvnvUMZQpvmmWYfKnNNhvZC1HdPmPuatDgm21YXavCkhwhgGFQ",
  "key13": "4dBYKydq7WWePeG2FzSHGP83yzzw33pUwHPUnYx1XwDx6HfRnHRATZ34vrMYRuRMSNMNsbVbqeSvK9ArGdodmWK2",
  "key14": "5qv5rcVe773upeh4q5TfP4YcvCRX5G1QRM3htLYVxm5LNYs2BfzDwMkQSMocHdKDcxiGNAiWtYGbPvwJzLms7BvM",
  "key15": "2GYUefdj9A21FbMwB6wmrJ6xTK7MgkVuzKbAc46tU3e3fkAqvwbVSYjPkBv1LPFHR1K9Whzr3ZUCWwnVbL8jyzVH",
  "key16": "5mjSm8njrA8xWQnFQiJ48LevGYiEXtrvV86uJLkYKwpJRQdMviFcWsEtAdxRPgDcLVJL8nV3KFRyh7hzX8BipLKE",
  "key17": "4c1LeKWmUsXNDhH7gZUQZQ2e5TAFan1FK9VUSAKsEZKivtQMxzHwBP1mfGXqXfYTPpYm7AnARoH8uFMaNiFMK85Y",
  "key18": "2e2i8asuTpKkWUxgUPhwWSz1h6d6GB81yBPZEyEFRsaZzMhPhWeanx8d1SeTzbS9zHRUpab9eAxeNfeCcETM2Zgz",
  "key19": "W6bgAAMDeyFQFQzG5h7J54VitFQYYncmNfzEMZMq5GU6kPVwE6ZxeZvMYmQ1R9unH583G8BM7Ay4jVbLjyFK3ZR",
  "key20": "59wV8XbTDPNxCjbwnG3bSZ8JpaFUc4EM5hzNR4gHfUTDPKxcQCbWvtDZ3z5WLHbq2HzmyfrQrYaJRyeqY2JktGJG",
  "key21": "4by4792uQghvQZ8x8bP1UDy2LyN6tSU8f2x4H3M7632a1jQNtoqQULvkkEKm6akoELq7uk1TLbcbuY9HWWqg1zkT",
  "key22": "YcGu8sT9fnAxMhXxQ9puMTZomTLH83a3YXGjTzk5TsbztxzmbH7XnBxrGdaNhAaC7V6Ev65c6giF1uh6NimqZH9",
  "key23": "gF6bQNdwzdsudAsGqC5fdNzBN39TwG9XWoeoAkebqgFdVbFynqBmAzPVew9CdNkwKJV5QDuc99ULC9Cz9TpZiwC",
  "key24": "4b8dgFTv2A7mcnnz4piACKpeYuChreL8m9Wgp9dSwFPR6QMWdF9TRHPkNVr5n91VnkXAYmhVTgYxoX5dXPVJRb82",
  "key25": "4seJ4ehHwJkg1nDGYc7njkWwgvSraZGmRpUKsdcbJN2DEpjk26gr6wXdYamzL8CqE844JuM3u4Ybg9KvGBRgCLR5",
  "key26": "2z4tsSJecFuz1yKLfQVdoMeZy8VXrAmzGDpNscoktGxhDVG3psegsdYJg7zh76oKuH8njEroYDsTC47oUqmLu2ve",
  "key27": "5h5h8TMeWM3KqDs57pskVsiU4e9PYzriS226DQRR1JEJ1iUMeoJqBpomL3BVzafxkveFPjfpPmYcfg3emwPPPqPG",
  "key28": "x6vyFhpKeHziH5mce4SkCdyGqkeWCWfcUP3STrUyfg6YEwJpYLPq8DfUYd23XreXVG8hZ4vweKjPNWthxmRWFZX",
  "key29": "TSkXXYD7oDQrFh3vThWQvHZgoQeLL5ZXmXoF2Ey4a2J1Kzf22P4omjcW11Ex1AXgQKfKFRJVXGtsCsSeB3YFVoh",
  "key30": "4dHoHnBfCkvttnPrw22YxxmsboDCWFCNDAiCyfYVdmYNnP2DqRN8Qe8G99FhUuiZLHwB38AjWg1cbYyEgR7c3QqJ",
  "key31": "2JeAADJLQtXYgnMDSe8KUaSrWZv9toSQNy2Em5Xby3kfyaDZajzNrLeByos81KKfCGzTXwzXgrgWo3oycLqgqWHT",
  "key32": "2qeoprGWeCET9U133izYAL3vyJEMjr9NPJPrYB4bExsaxKZad8vK8qrh1VhffDWENURFRStP6aPRbeaff1dAD579",
  "key33": "2WjRVxQ2VG5tksPbtM2CFP2pF2uS6J3mji1WpDnVSqYwRdWQuGrjG3Bfcv7GZBqsqvxtYvf98KEFzjHZyk5XFLYD",
  "key34": "rMuDf5eNmE1DaN2pmiib2w9SYHABGgQb5MzDQFwnhtjc1gXHbrHp5XTDtzv2F3PRctXm5mMnUmBSfggYrgoR6gc",
  "key35": "g4UiXnrTPKojxzfeWSRg7zzAWV62Nw8oVqptva6C9t7wQAD5xMsuz8h1S3Y1gnZaKabcCA5xYh81Xmtg3zePL9i",
  "key36": "468Xuu3MVjvKNKcF7JgwHwKQArf7hpjwupKQWbzZbVRRiJt5jdUg4zcw6n19VE6Gns9Me4Pg6p1KNCNZj8Qc2uwh",
  "key37": "5yKrwp33R4enpW7NiyKhpWF7sr3XBwTbyCon8aRCM6J9ytWAQpU9UQz8rCgaPVjwqMoecHe4W6QB5anwGvw6wRW5",
  "key38": "4wQu4WXB6uHHrXUQZy2nUMYkk7Ltaf299GswV7AVmoGMoHAje7aVvCtvCRx89oJHUJwVR8AEn5C5dxRqL764qdhu",
  "key39": "24QMXWhkmxqHyWnJqYHnAaxMUzzJ4oJcZ8YVd4VwBWxparpzKrJyho2mwcqzgQSt1RCoVDQNzJGu4i4zJRgySZ48",
  "key40": "m6nYUMyCgM8itMctzigNCCvCZHpuc2VJUiJVBaVFbJSELEXbdXMdt3Nbi5YM5gTv7ewW1BMxoi7YQRZ16V3oZ5d",
  "key41": "4caBYN292cuXvc47VnbeZACZ7BoMHWV3tRvxYwmzzLwXhhnX9C4Zzznh4HmGFS2Fm6vXrAmPsiQNsDfrStUPF6vY",
  "key42": "4unpWVJvKALZSUnJWEriEeio49DXtnfvKYhxypiH2M5AB6QtZU3Poo5ok8suGkonKucb6nkDqVLXH99wpGr98aWW",
  "key43": "5yxncLQrgHw3q7uQFDMzjY2Yvtqp1hdLN7GHQ5fs1agKWdPnT5F4AwYs1x2KYjF2Rt6mKjf9zyMyJ64Q6MT3a1KG",
  "key44": "3y45UYGfffrcvjbRU11EURT5AxWaf4BghExxznMHriie7M3jNCaeXM9TyWPFrQohinQyw53qhqdRwzu5ouuwQogo",
  "key45": "4gaE9kWyywxRT4Hd1zx2PP36TZaDQCz7riHZoH3UmMDQ7smis18FnTB2esNTqVuzQmRxduD2w85Lv4iQoqhKbdha",
  "key46": "2PnwePg7bTuGXxVs5g9WdCP6ZMtmZQGKGGpHQYfTLQmWwuj68xr65yAJSjMoaA1JKX5JJyWTgU8kQnJ37SnW48ce",
  "key47": "4gdEfvxh3Nj3zb6fk77B5DSf5DhH35kDPRcVukv9nxtcycY2A3Dg4okYadNQSJiE7gLkS23ZzwVBKrViTUNx9aEB",
  "key48": "5hZTRjpwvoYMJLSzScJLHWNxUpUXZEvHV3PpTTXY7WwUh6vwebHAyP3jYSMpen8yJ9xXDYd4kV3Q8gPdLsxy58Q2",
  "key49": "3QNCTsKcvQAr5bcRbN5hETKYLHrfFQqJga73EqSZknfPryAURS9LR91DBXKN4edYfgKrG2hXouX2qjbBPqiA3gk4"
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
