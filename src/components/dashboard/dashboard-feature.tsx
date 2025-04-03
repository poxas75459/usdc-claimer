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
    "3gQP8d5tCjYJCe9tqogeEAdhrrv4CrcWHviYU8m7aUieu1cMSS6T5KFsrTdce2uhAJJZkYrTsAcm358qx2WwSHuu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tzVXB7ypRtwJu5Dd3hDWqvgF1a78W1Bmfpt9M84QR6F9cLXsTzJP8qNHrcMaUDPutisosW39Ei36mXEjYhxdYKZ",
  "key1": "34Whjb2ex5wKRv3m4qSCHAvHmY28y6vdvkWo7uFiGb55KmC6pBG8igTwitGEJjZyUgbz8Nuvquh7KZkfkqy836XN",
  "key2": "2dSBUdZmGuTzbqZLBpzj9JAkWmHFaA36LxPe3KLw7E6Y88bmZKmyTyK3U9TRTpV81kNgsYmtJYt5FQWcEFyxjfKi",
  "key3": "34uZTCxWxrcdusgvaaY7HPCRuHoUj56ycZSph5AvsZF3EfPbeZknXdeivpk6pMdaMyY9StqUwy2SNd7suGUZPwXq",
  "key4": "urTcNe8roNSeqjstRDQp1bsJD9bx2AADBz3n3AJzmDsWJHisBg9Vgn3xPX1F72JPHF3RkEB7RE7Af8vR3YE99SS",
  "key5": "5GbcL5vc5LMrJBGGgcsC8YuQ7Yji3FgPxu5YYXCtxDPebbTAnPBbD1Ts5Pxwxr5sbNiBUof3qx8BNVLoo2S1mCRK",
  "key6": "4UrFyr7yMbk8h5AuvJyhczXvD4MZXURDD1YkZo2JZWf8sb63TBUxfAZiC6H1db2sQvEQdwxJcPgeZGZz9ytrt23p",
  "key7": "29dsLGwj1ogva1MYadqU8EQKpoPx87mktP832FtP21R55AGwc13SeDen7kK1ErMjoCbxU323qjA25eM3oqwpsH3V",
  "key8": "45KDiGcfK35J2jnkVUfEXgRWmGmQenyh56pP8xuafXMukLTMfULFi9QL5TXXPAxDannsgAbFkxbsWCcttWu93N3K",
  "key9": "316X7skqU8QxrhDJQuHA1SyYU6WqQzHhgFJmdFwkspeFRiEqBLmYvYoWhGdmZL1zxvrxtET8qmjveKQDF9X9Dc5W",
  "key10": "4NAvzM1WVNbCLpF9oBcjYVRV6sDXhVxaWSCEhW5jpJD8ygBXygFGLEcsmwxaTNWeJLbGup4qygSkyoCMpYSuG86G",
  "key11": "3FzL11SPY68Yoni8YvGbJDsN1zs1qoZg88Jiqyzw8ZqBk8EvfKrUwwYXuNekmch6s1MAC4DmF6g6eCshE2CPVema",
  "key12": "5t9fuRgTdscHjPT614Sqg14iAHnz88fv4vuaURmeuCQUZYagvjZwXDAVCZpYGMSbjq7jdtYeGjncbFP5cQn52ebU",
  "key13": "3g573qgjL3uSd7BNidbfNkgkPLqaTYk8DtgSWGd3HMx9g4ikdgkRj5C8SUs1GK4uFw29y4j6xsejD4yRnWPYT6cC",
  "key14": "mrkvLrVrqqBTXz61DsXDPxrKFUUmyd7YR8NuSZRhoXSnPm6VjJ1c7ZzBRCSSXowUxyciBdR4kHcvmUaNzr7PPz7",
  "key15": "5CMLbnHsczovf6utZkgkJS8U4r8CtSm3eFa1VxkWRhHXE9yhaUSdJVYsuNyiWZ6bgdumqsURFjCXH6CB9jGx6Q3i",
  "key16": "DqNCaDmX3oCbNiSSy56yuA3WxTmg9nAf911fsnMaEtRUW4YtYsVe7mpJNkWVHqVvvyjMk6mSvMKDqjRHdsucDw9",
  "key17": "isWUJ7aSuQaAGyHHvBE33gvYqQEPVjo8kraeAR3CaN3w1YKP9DwUr6dpVBTogYdiANNJgp6frTCZfqyZMS2zbuf",
  "key18": "2FmCU6NuwGKgLk2F1PTHL7pBzR5f2S6rLE6vZUVqsEUvdVgimRyih7NWyKk287KGdAVwqVWpwLRPsKb4dWKQ8AMk",
  "key19": "4VLQUsYMhnZjXToiSfbpNFNCxa4khPHiQeu6Kt1zEjMuCsid4UQeZPyTWNowPcwtzuQHz65NWtHNT8Cm6Upsrax6",
  "key20": "4PaoT1WTEeJdkTvw1pu137G9p79fwo6yVhPYz1ZegiR6dcpCH7EnKfrkUMHsGUGocw7mrLmcMcbo5XoYcdpi5Yqb",
  "key21": "4kmwzCbopFHtSEFywsboNHXeExv34VguQ9t8CRUaH9P5D1H6mPa2cQq4c1hPKyMGQ9AJn1aYzMFGpSSSj3Uz2tjE",
  "key22": "4of2tV3isHhqezU3kFx95XX3ZediGhXWGo2CdabUHEiWrhRvfRwHa4EHpwj8cm987PeVPTfoi7dch62kBngYfFtt",
  "key23": "3n3j4FZeYZFW4yrfee2ASY7FV22DVTevTpg6pLHxYcwQzFcqgPUVpvTxELqv6aQYGUcwz8mW6q6oBVcXMkGKNpFy",
  "key24": "5UjTp7xqqkxBcnz3xjfFyvvqBLAxsGyf6Jnv8PQqxZmug6jh5TqSjXjJdrYnSx85ktpzWgHspYiV2EcvxiTzVAe5",
  "key25": "3ttEa8bzcSSex8Pn3BdbUnJvH3f8omkiZwWR62X2ZLg7cQDyt9HjsQkgdz7pAR2y6FJgNZYNkci2XrPxAbwDSctB",
  "key26": "5zc9J2XrdBDQcco6aWGaTWazh8RxiXzhaf94bB2vBHtdm1bM2qhicmXRkyXpJMRZFp9arjFYN81EYDMtEo8P613j",
  "key27": "4F4jGSjikqQkp9qid7hGnAtGq2gwi9w3hkcdZbogJNNy1SEqLydiERc475NRyE3dugsubx7xbVQfMkKMPmotdDsG",
  "key28": "3U2dxxmUv82wC3hjkKfqZVnFooDC4Uzhji1LyRqAyJGL2FhNVwhrNy3UaFeMphhKFH3frFYGZytz7Ehn9wHvFkx1",
  "key29": "4pb62GT2xn4z9JMRCRDuVnpg36jQ6UVzKbQoNrfiDiFWhYNnvG35HF1HUXfCJJG1WPm31r19JWyWLE9AXhN6LKLo",
  "key30": "5mTMtp5i9mnRvxDwNQoJcUUbzmewpasqpN86raFiMHGcLKq34NC2vFAuh5Uh41vWycEcMoWAsXUZiYuyVk6H1CDg",
  "key31": "x8U9LosaRpmzw2AatkLQswpMqmwTwVA9zxcfiWKK78peFhQ7xZSfA3F4QjEftj1zBhwm36n8Auaj1h14QTmic6F",
  "key32": "3UepNQbPKCZzZ9rMYzG8WGWtfDzXwjGDZxmipZZpuiHYpK4tfR7e8ZHeWTp14VrGrATw2dBd24fQud51GRchVfaF",
  "key33": "2yb926gt358zEWqLbqYrU641L1Wd4ED9xTULdehYxvaPdGipohNJf24Y8e6ko68Ap6siLDbUR2U1USceMoRfTwBC",
  "key34": "3GZKgHSbGMn9NqR9SQGdNf5zSfEt5CiHhd7svNtfNkQmD27WvbbM3hRnvAxNJryHcxsdgGbCMWz74xEtaUBkan5K",
  "key35": "j4Kug124X6aFyA2aC898jzyVZrDtidn1V7j52kZLnaNSRDnTsvQfvRsxCXCi2Zp7Hg7W8jbiAFCWQMjY3aZSmS4",
  "key36": "5czVM2dATkrw96S6RuKuYYjLDn5dYPBir94qjqQN7TEcmmbRzTX1ECNgZPEM1RJ9yyJGeqYJcdqHtXozEpE8dxEq",
  "key37": "55J2LdkmE1jfQhJsoNotkyqCvith3ESCSxXxg6ongaxLUmccpGFzT2P9oZy1hLLqqjUoAqvEbzi4bpnJ7LnufFx7",
  "key38": "5AH5nduY9FQmxTbnXNnVpz2QiqtPnh8FxPWnZWe1ztMwQWmFAk4hQCCh3BRaQB29RgV4VToRwPx7cBYAvERN5hVk",
  "key39": "2drq3gqqWCwtzmBH7q1mp8BKzHbkydGhFxT2jAoi5Hura834TdmyZBNPFeWVXCFu9iRgh9vpPKMyZ4havgmnpDep",
  "key40": "129GjuisNvGcFXUAa8mET6phnuuJ2kDUtakZnNmfEtfqDdEYmbDoA3xF1ghcEtbPRoTzKaCygRsfysHVDbAAiewG",
  "key41": "3hA93DeHi2r5hL3eiDqRdL4XKjWL4ZXEoYXzmVP2QZz1siQFJ9Dfr3cVA9VwjdBL86xxdTCTiiirq4Tkgji3MPUY",
  "key42": "ND79MEuzyMJJkHaHSkS2we8i9rCRe95Gi6MNXzTWNiP2pDDAa27DqBNJ6vMDU7bL6AGpSYUYg2hKaoQF8rMzzSz",
  "key43": "5hgYeufHirsaYcqN8st2yf66H2trrYFBndYLeVRzgsVv8mzdNV96i4azWpgUqqUscF8beYD5mdmsmW9bE381fJJi",
  "key44": "5vk6oPRheuAtV1TbTsmBkh6eFLb1PHNkJeA2JS726gUnZY2qDV3Mr76dcUDuARfV8RLeNmt7GwFyum6vvJyvqrqn",
  "key45": "4rhBbxnbYfRRpaTHnaafjsJ51kPEtJJ14kLW1kiZ22En5f6ynFWJeRm8UFH38ZkRYpa6Sj2niR3pahxH6TwzUcVB",
  "key46": "5JmAgdE6KrLjqRFhkQN5qQg1VyNdxPjv66DGmpDFMk2nFJvBXy38DHq1xxTdUu9NmSvb3BLTPbWkRy1geavZ4NNd",
  "key47": "6P5VUZ5MhmxKNK5mf3FYuz58i1mzVwnhTkvkKoFKAwnVWzr4dEaobgDDpHRTcetHM7zuLss7MBmqUk8e3FYwMeu"
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
