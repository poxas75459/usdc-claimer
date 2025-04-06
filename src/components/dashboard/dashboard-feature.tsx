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
    "2AT1J1AQxRDvYNXVSYyNabZDUWwzCMkNMGYKfwt3h9qKtcHz9VtLuj5AfQGUJLupmy7XaPDDBrKPi6CBLo653Tae"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZoFyPL3uR3rZ4gNCY4Y85wW27JQZr4MsE9xszHLERooEs5hbnBLj4JGihgUEpNTQjjMdwba2DyiPnLqRxd9yXTj",
  "key1": "25ewn6nqKYDKevnB4qsRyXZuV5S9mqgmcazAFLyQz2CtsGCSiC3N4yoP73EordSDHecwSaqvLhAVaqFNMqq66gPe",
  "key2": "ZVZqV4ize8MturDNZxsVudufb6ro1giCxvbfuXpdEetnDwSjyjc5zdpvts2kcaVKyzLNFkQvk56gkQMyYPkQqBG",
  "key3": "3mAwyJW8M1J4ikczjWDgMH8jT1UDyHSjwvbgD5V4Si1Y6KGwWKKjDFmKSfD1ZccinkZ92db4wwHrzjrcTyUvjBKC",
  "key4": "KhZ23xm7CoTU63uEww2RDPY2Zsh6z2N5tFZWpQvBG5CvaLibZWgH96oDbLKFqXy19YiPGXr4mtmmSuQkWqi52up",
  "key5": "5nZbVxzwsH8v2x3LkuhDmDnH74SZYDa5z878MwQrcfK9jXQ7zwfq6bW9jFDMjvM26rzDNX8WiyEsAQuHPNtm6gv3",
  "key6": "49uFAQuESsZbxJneHFGNugHEs4YXPcUCcWPFkBQdfuNgqUz6sVtbf6jUbwM3qjpX2BgGLKbnmjDSb9gJyBAinw6Z",
  "key7": "5tcamgKGshWBfrj8XUoUjERMsv1iAxiQe4T9GAPE5co3BSbWM68vYgtHSgdZg7DKSfdtoK6FZfBmVNBfg5VjEvrZ",
  "key8": "2jDe3p7VqPzeLW3RNAAZfNMaN4cf6B6fWt6bK9Qu5KxYtdkrprHVuH8DqF4dYvii2fo9PuZwdJPQt28cwxTbzATM",
  "key9": "37q6caTjaLf4et3gHpMGdWa1z2GYRYYxWQ7HaWSN6NwQqYfc2jjKAZaq96t4MZdPmRS7RVTgCB7x76QGf3go8w7U",
  "key10": "3JbAFZ85hgctUsPwmAZqLqGZCsmxTtebsoo2VKJeMNfsj2FTr68WmUCirwhoxFKPcuEcyQ64bV6yuP5MUYf4rU19",
  "key11": "2APTJDMrRKXQqv9ECsBLRJeZ4WiLvbSAhxu1rjLRx5fDtM3396e1PLzZyj3odegaG2ktNUYJ15qtGhEHWKdoskV9",
  "key12": "3JTmnQZT5PusLoL3zJDfEM1Z5amwXGzRAKgPNkJ2fy92cBBt5cwFD9ePAa99yttVPMYWEvXEV1StgnDyNjmUwkcV",
  "key13": "4iP6UGb3PKEoL1ycjwY7aXpXrTHyK66QhEGz5LTboLKxKfqrSSpNaudfzYC1JeBQJgtTgw2EtP5fknjMN3tNzLbK",
  "key14": "4VpqsFfmkDp1953pRKY1iQkr6xDZChPBeDJQjWjhauQj7Qns1jhrBev7uCAPzCtdAs5zwmqCmUgXRaomwNULHum6",
  "key15": "3XtEbgrLnBeHzRDRav9jg14td5Avnz9gEG85D4iX5sXU5w2LRES1UHj2Nrvmb4JUMVA9AhyDA4pocHQbP5bivu7k",
  "key16": "peVPFqoTPkjgJFjmyhiUGdYg5AYyaMJZVuyR1r9e25aTajXXj68bWY7qD1cLb81ojuTFCeYFCUc53GHTsjEkUsS",
  "key17": "5DtYC1kBkt35KNQ9mELkLH2NtLmP2QszKtDykz6PGxPk6ty8iT3e594E9s6Xd6DrqkakQ748Ki68yGKyajzWTebu",
  "key18": "JinPsghyJoETv2khZgJdsmkh471ovyVXHDFMZM14caA5tzNAzuTF31KeZdeB8kbpcZ84xP1UsyJPznxNYgWW5AP",
  "key19": "37Kjujh7fRVamV9Tc7y22wvzPxzC6Cd41V3J7T9bMwabaA59Y8dgdEYPfCZcnvVGqw25Qw9grmWSw9GEpU7QixtT",
  "key20": "5xrYdHYsm4ec18VZcgkXmafNzJJb5G4qreqPGZNfnEba4KgbVM4asF9NXgfNjAQWzNc445kEuur4eTxmNiyiQHnp",
  "key21": "5GRvzXEH3EhJ76Yvp59CifHY7Bzhhth49FYTWvVHvFi4vqfT6bygiwtSUQuMuopehZpvpw5s2aFY9ePwcQ4hMJoB",
  "key22": "3ikED88L6qSED8MfLAfeCRZ6w1finYT41FbtETsXweBtfGodnMRJzzg312SGfjBbv1tKucCGFc3jDsLQTccKtzP4",
  "key23": "5dx6BhcSzztsXELzUNwETFcjWrfWA6nsBSwW2kEye4Lc9p9Ys5iJVZe4aBX9sQ4fqVZrMzkBbvvF66VXY1Z4tmXy",
  "key24": "4o7CSU4uZQ5ktBMgXUCcUTq2zvumssCpxRGvsXDuEprxzJoZGLFnkiQavyaKDHBdnqAtRNqdDJhbrEnhop7hbvr8",
  "key25": "4zgHuaMQ349npgQK3sMkg8KsiZroBVZuuWzzHA2fjjhb3Po9JHQfEC4WfV3rc3Zx5VUZvEbSnu3t1MamRu8nZGBi",
  "key26": "2zLmSFrcHBZb6HvWY5rB4QNL58u48QhY3r4fbDwQFqqaKmG86ypkYLHzBQAXUoPnbw9Xx8DsoemiARYxGuB32eu1",
  "key27": "4nwA6JE2dwxNdTZqBoKVA5k72uXiKZff41r7iu6KCTLB6cBcDaMNuRKK7oYAYbQXS9X25xKECu8uyxdwcG8FmP2Q",
  "key28": "fJ6vrL5VVQPHFDFvkgEbUmAqmh6umNxYbb92BZJPHZc4sE2htPK1yq2EqYRa3NWakH7R2g5Zy1iX4nBJ4AtmeZA",
  "key29": "hDMRE78gSdowjW2isdSiUgo6X8ZVwVTsv5XM8KJxAfu7TaQiBWFjHC8afbyka5J7QgUua2b3SVC4NN5zPBPC2a9",
  "key30": "MxjJKaReWyK3oaQSgbiUTBFFxpwbnQwxf5CQPgHTK5JJXhfcRmUacGgmjVMW4Ukdc9RrfTmn9yx6RhaQAvgVya1",
  "key31": "4xgpduA8arEM2Xsk98DnUpDMwUVgsW4mS3ynN25FCAReweCJpYqdoPHytxRteHdscZLVh6xjqqx15Z9mLwMoVtwg",
  "key32": "4ieia1vU2PemGoLbFU88jrG8cN8pb34xbuFgs3iyrGNDAbts2GSHedyvm618xu8DCmmTUxJPv7eecMMwfZJWVkTp",
  "key33": "4hHeHtEN4NPwVA9hahTNzHaNmafcsmeJLjXzRUYjZupCzZr7GJ4kuvRRZ1uyX37796xsxgVvoMrstmL7W2ivKfLL",
  "key34": "FdALuVB2WdmxbA9w52X6Lvqn8dYP8pvpWpEkZqx3XWYDUwTHPnX9gG4FpxFRuVh9sjajehJSDZ9ddEt1MqduVdN",
  "key35": "4iocdunj8zehU4ChQF4iuer1w45sdinJFW2Krg55KodTEzKMc3RdRjticGSx94jPS7aPTpKDqbcbDVycLyhEMZTK",
  "key36": "3ca6PHcMXisfVz9nJpxPXU5aW6FfME9N9fAaDVPa7SScMBqaeDdwoJQzbMT2ct9bF3qTUnPkvJiShypxgLf2a14M",
  "key37": "5WWTPijMr6wQQ1FZSLoYNczMvdH8QCvaRmymmjkt2vYDqgHDa9noXquL2y94yTgcw3UzBzNKbn6mPSopHeayBq1K",
  "key38": "2jtpwD2A3GhnFYxxFzNBWv6SHRyAxiFjNDvvLAKFD1MJgAmzq6xzjWMWvJah7AN1GDLc5MrdtBKKArdNfmvN4SFY",
  "key39": "2jX9V84sQSogFvLCWLxDEQEXjjhDzDY1dzDknS1TXWFm3p2UHtA3Sr6d957BFsFhuN21uHbaKvXjZRBJMZMiNhHS",
  "key40": "5wUciZSGVnTatjwWCgec48wVvCvnr3XnSKp8JYLaxcfVxxpAU5UaH2JCm5MigV9Bqgm51E4oZf6D7vZ11wafJMec",
  "key41": "2SNqgGFSpmTqNiz4p9PqpUyiB8piycBFEXxm8JAnne3X5o4t7zb8F4WNRC7E5QvKkLzJqV9nYRAG1Cc4y2HT3s17",
  "key42": "2HdBXR4UDo4wmVN32gjUso9B9EKfcKVYKztTGZmBCiXPpL8VrwfUpSX42diFV9bnM2LiLBvDxztt6bU1NPTJ3pr5",
  "key43": "25W1oSudZEJRNVneZb5opxqxJZnXRrfug6LFkPG5iFJ119yc3f5ENaXGAQGxYNhCwwnNo23yHuMvo9UDfrP8dkDe",
  "key44": "4hVcLUCjUWjpcnuT7wpbd5u1Kf2AxWpU2qxfqaY21N9PKrYkZSdcWwo7grk34uZbubbm5qvkAU5U9BVqgczMJ1i3",
  "key45": "dSip8XBA8wgYRQS3zXYWMcHEJaMh3EzA7w5kqSkS5RsazHtdc2JGetc5osjwa2mTgCMwu7Tzz5cj8uos2BX7ycR"
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
