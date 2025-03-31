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
    "5cJxYDc1G3RHgMQsv6VZ7xEon5pCg1tCHeyfmjG6nEpBD3WNCmg8MumXzCNW4Rosaa6Coo1fhdyEoUwjD5Y6W1zj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41BfFgwqcHFKhvXJVM8VoAqAow68vAhHaCpPbbDzK8m8vAKgsAL936GG3yo7CXFCbbCuD49UWjhLsfmvXzKjzz2E",
  "key1": "4FLT7kQTF6qwm6HZoPQYP2MLkq33HrekNYgreJrxhyTL5inTjwdAJFsvhb5RU5tmCwhAFWHxpGP3KLG9PUfkdyHf",
  "key2": "4fQDrRZVpGCwKvA9pvD83JejyDKTPqFiRWN9bHpzQat7wz3YvvoW6NvvLaLH4QrrDxPDX4pp3jaMZyh7Syw27qZU",
  "key3": "nFgwN8kUcq1Njgv1TZe18DhtCJcq5fyMSw6H3mEafcKsokX9fTb37PbS3epYXyRjHMpPnZodXJqs28o1YohkFM3",
  "key4": "fW2ZmLTZcixgQk9uSHSUy5YoWq18V5Dk2xqcgyLvvitPzJj9KjPkzuEa9nuxKFMM6HWcCZB7SqYUpB7JMDhzRHy",
  "key5": "4wUESJa2k2fWXWxECV1BZj4sn3hqyG5cRL9f5LYxkyr6hTg2ARjVVqkkn9Qs5z3YK16PBT7H9kw48GjjWgeb13cy",
  "key6": "5eiUEfC9UZ4yubwrgv4TEY3LmiBMzry58PGQ1HrNvAieDQs2JXpMYoxSYCkLoR9hiaArBRoanAjGnAQ3ZwECvG9j",
  "key7": "WNC4RBDRainDnCXNEmL3h9uJA11utfSAA2hwmVAccsimxbejWjULx53S2eHd2YnfQVzywu74C9Y2Utv1sCZpoMy",
  "key8": "3BqCZZ3969mvY4H6Yoovf6iKy2UddZLnqWgGDtKpBfoihMkhLebwJsbYXCytYsxu24ksA8bpBkUeJKeYc8ndW2zR",
  "key9": "2rcC9tRgasS8BLsULD9UDe89KLEda3875rRRXuWqUfKosDVbFgAD4bmo6BbUoJiDZGBYUUS74DYY5zUDQbgpsQvz",
  "key10": "ahZSCQwLnMkPDN1gA6SpCRn8vGPjznyswqQvJMJZLezG7eESkdcGpxedNPGZuAoMqJVtHVBze67FdvLvEVxzndZ",
  "key11": "3Ny1Mq1yim6QKKnou2e6DgdhaoWrnu66v6GaBWRDY6ji2aXsds9vbTQYg7zH9oARfZDCJcnwGJgz9XJVYs2PAX58",
  "key12": "4fPaTB15FbGUK8kfXnN6fbF5pj51Nb8ruXqNtcnUv5VYjLHqpoVAuWnMRHgMUUnp4um7jfv7yNh7Z4HQ1N6QurRy",
  "key13": "3zbt3X3G3mQL34GaXMQpDNXoGV7nwGBVMU2qFNBsjb7zWHADvKz2uyM3WktA6m64qcBYQ1U3taEKBrh4UkKAvRZF",
  "key14": "5yWwhBTJ9nni9ghhyrCjETonfbmpD5SGT77ZPCXNSfpG4rY3HkNJGdeMXgtQCgPGgwEZMBhS49miruy2RNDCmXS2",
  "key15": "3FGPuyphDtrk7TdRxaXKkt9DsVxYbHVywmzuNgvvJxppfvyxqK3HHTSvxqi7roJ6i8Wd9JbJzzMPDERf3GAHoxeD",
  "key16": "5dmDLoFU8t6w32QhubMEfa6ystJUqRo1WrnhAz7x41pWz9JSsk2khryjaRp9G5VFGankAkFG8q3m5DgKHGM5Bujd",
  "key17": "3n5wovtZkXYjJnZe2ovYBQV7JzUeA7KD7zCUV7G2CPZD2HtMoP2fHHoBgK9HdaThw1AMKceNe6xCqFrzs536yv3V",
  "key18": "4gfAGmWF51QXrDJPowX1Pc3NjLXjXvcoi7TwwYG3qi26WQr4ktvVSJe68GdXgAGMst59KY1ZGn3JXv2iRb4TJNT2",
  "key19": "5f9AaFefS3UdjdAGdS28JE6UXJgKui2kUMmJnr1fKF6vABJafpn18niBynkQQKGQsF7fscgZUWUhC3y453kv4hix",
  "key20": "3br2b7jF7P9nVCmCqL9e9RbDNeithjYKr4j4GeuMjV4PCD8H3MmY8i1nYmu4P3dqXAT44KvacETM1HfE4z1vHUM8",
  "key21": "3Lm9Cwx88MNLKak1r29hU3ue23qrBXVhTmHbLcSxojgFVqcJhb4hGV3oP1ET5A4CA9RBEoLNR63ER5WbexWj9GV8",
  "key22": "5d5qTBs9oHaFGpd5kx1y8eC8F8W4jvzJ4EMgogeTbHWr9gkF2w6mtVHXVZdTtTuBAv3Bi5yZQCYpartURKgCbmjY",
  "key23": "5ABp2sEiTUsuo3bdjzFw1oMGWXMs9VcoH54j5wUwWm5hA8GhUTpyQLDbdy8QrsN2Viw1nALNWDZPNu9roEi9nz1A",
  "key24": "2H1usEasx8SEEQ9BA8mLTsfkQfFz528tc3gSe1y5EXPJi5HVScqafeyrBAama3Fv8D6BHUWvUWeXhGWTa3ryfEh1",
  "key25": "2xHvMTF8QFi2dZycMJXkKhHao73DDCZZgHTXuAEKErkGictVuLQoDaM9k22FmCgkTE5EFqoH8ZWFMAmTGp8MkXJV",
  "key26": "fqnfUHiEjymiJvxRAR4jVsrYfFsDSJ5FK21xK2xzhpaq22MGTFAh3EvuR9Sz9Uvf2Yo8bNPc8Azi1QqZiLzFsGL",
  "key27": "44XeGNyEiHey91PcBLpVmjLG91R1ZPMqic97LhSRRY3EZiW92pSDy5txszgts3BcxmmL6dgN3H6pLsB7M3FPRFT5",
  "key28": "2Ze3gNuEX75jF47zigkj5WRnchU8ME5EZbosx7t8bBp9okPGYbDsmbUqp15va6ZEHieJwS7tVNks525muZPH3WGv",
  "key29": "4riMPgKk77Uc3wwiKpdLPYJdiR8dBs9Cfk7aRsP7ChKcyRnbxwegDnJsRAnw1iQQ96AHF8CmEpTL7oR2J16G4qfC",
  "key30": "2bvcQ4rw77nv9yrCfMWM7XesWh4sg7RsC8j44RDi2qXpgmqbaftkR4gKf4ozrXXkw5GwNnUXuTDQ3Lz7WGJkEPQx",
  "key31": "2uUHsVAdipx6iZMwAJrXQrWvewgAQmEe9FjHKmSAZXc9RDC3XhcMQv5tzsByYBMKGqzzs56SVpnCHK9A5Z8dqJuh",
  "key32": "5xSMzCNxs38BB51ALv31eWUgGBKXqy2CHUz54JvQTTjV38KVdFvZUDfZ6j7mnMTxnAsnprDgB51ggznefZ5TZb7x",
  "key33": "4qn1a4rtzAmJyxcUdF17hVJY4jB2RkHhfskPAdYoAudc1kpefEhtYVZyNsPg46gJgjQ3GBZijCEDgRh8bjboZGxB",
  "key34": "GgvDsqN6jpF46xvRitVpKZuU8cYArpfrmZT9QhY6aXFfCMARJDu42KqxsbJ3hT5RWrVHVsk4NbhKLFPcXaBJpth",
  "key35": "m6TPgZHer8m8TQeDU41uXQYG2FcjEF4SWkDH1BuAKfNomviUMys16jynVzABR2KVfrqGLfDN3APFQyLBwmSNbqA",
  "key36": "HJoiLGQvQxn9ZeLPem4UgEtTF8chQywZwqST9RK2kY1sszs1NpeFxQuAJm3PbJP9mu2w9xYmFJtYh6jVxRH1ANp",
  "key37": "365udSwfAF561UXJdEdMU4GxZdcPWwvgxrpdRWrQuZhuoDxtr9RvoUy6SNRnL7bMPM1Rm7tnosKizpKrgCPFna2S",
  "key38": "3imq15MNmYz6BELqkhz59PpdvWsm4GUsWii8YASaZcfHWCf1c8Br18QmJJdW3C3Z7iYjiLEZh7Vdyk2LaKdk12UW",
  "key39": "3KvmVMtg6aKcwgGwztYRrCE7tpqrzbdUq7piwupxKwWp3gUZpMGWdbKVB7H61JR8R6gnpKZ8WBPpYifEhjTk6LzQ",
  "key40": "3DKpgnWCUnBZGgJNdCRUn3rSy2WXHACkbJYVRHJzK2F2TgMRsydmLZXhWqVGkAw7YsAzBiLxqZGR218zA3hSvwXM",
  "key41": "5YPa7f5suhPEmYbDphEQ6yxrWJ8SDmdnFiZnNUc9nNpLag9V7gbVdcp6tARb3YoJrv2pNFRqRq5gMH8XNu2W634o",
  "key42": "3wJ8Yy9nm2SXJR1aPWeXMfk8BV6X84sQPndRwQYF4RKCrHdUaMnkXULeT2qnZkyhnrdKUb14MLNDg3zevXiirttE",
  "key43": "36SH7UzkU3UX7YhYe1cocvy81kAJAoW42ctpbUgXnfaH9PgAuKBxVqBWCcr4FiE4XxnUuzP8ZK617tgBUiwnpBa9"
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
