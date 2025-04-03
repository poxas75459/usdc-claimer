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
    "StZMfeph8QvSdmryiE3Xz7m1m7sckJrgkGwgZCozZqLUxmXnKQwLHU3Lx7nA7YkipKcND2JfSgjnzoY7PSh7XxA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jqrXTrMcG7JSVwqSyp79N3vdmztobZGdooV5Hc8yrLgdZopxBJeDmVd7Sjs2BFXbKgZaLCvwoZU9HP7FcPorpZu",
  "key1": "5R5QbYAaHYge3HCBKZQ7hW1H7y6ty9Zq6o1XjQEj8xmHr93FvX4GSDshdVaDo4VnoDXqZKDadYnRCyQ6oWgEPQoC",
  "key2": "2kSwAsVUrT4cLPrHNukiiko7B9Qc3gN79Vp7Yy38X9ynP4wu9o2j7jufJerYCp4qzYrhQ2hsQU26LU9vHMCXpinW",
  "key3": "62ofzgUR5DC7Hsmf8eC8yDUGJTAJM4tbFGyqDoiBqJUNcLFC1vGAuXJ3CsKKDatVLrabaRT3P6T56PeyoXaXtZ8M",
  "key4": "bJ5U5B9CPTPgveevuxTbnM7DaUYSbdtUv2dVbpX2SvwBJaL8Aa1e49hyrTRRpbxKhvukm744jMbFZpGzCBCaTyz",
  "key5": "2W6rFa5ShpvvmotMVGMiaSSZYJxN66oSCyroMxp9SWUNpBRHMbYFrXMoGLvex5psd7Cpd4fAr2Gc1gUXiqUtB9Qb",
  "key6": "5HksEun4UMFFUrMJHcaqatzjyYupKncrVSemGUjL7SCREW4k1z2KqJBGcGAVebX8qTQtdcMzkrnT9XS3UmmSjTKS",
  "key7": "2Y3zS9ByfKqMPtKzXFicU8ysUWy7hiAYYwfsctfAJmSezG71FTRkdNXeuf5nu4nHkNDWCSkjfpev5VZvbfhKBnVQ",
  "key8": "3gLZt21S6mhJ5FAf3T5om1BYbsVSPrcJqrTcSmGFdok4SqAXnHtPUN9ju8aH7wzD4wgRBAzeP8demGFWQbticnpM",
  "key9": "5mhBvd8t6zsn8UCS2MfoRiEUdGbi3JJGMUzNow8QKSZ6YaktZKN9fq8tjwksmXLTKyFexwEZ9HNRMmkrLH3KbUnp",
  "key10": "3BQBfMSYKAM19gyfNZ84frkjZCFcP89p1Dw8EfTPEcUtU7hn2SqKj3EHSpL2UzRxdjfXb2zgjLNb1ANQUGKS3eJk",
  "key11": "3tLJEnwuQWDU7yV2pyYh2qmBoMwDUPw6QJyxLZ5eGEnbmUkAgzMQgkAGwMMQEPERRVaFbSxuWhPV3MGJfymwTom1",
  "key12": "4FaPgeVjFKCpDjyMonAcWWyfBkmtMveQzt1Ew5XcydVhSByu4xPYv324VyXFmhwmmYVGK2uNgDJdaJCkhwrfy8FM",
  "key13": "39PgXqZwU7jn9Y4QzuisxNLJ3xS51nmQEyEW9nrnrpn7h3sX7EwNaiiwHZym9BqbFevtjm79HSsC8UQhVhyT1VN7",
  "key14": "5Nq3oQkE4MmrQxBwvvHZXZWe4uZvAcJzToFWbp3eskegwf5Zy6cz7MQe4equiAkf6wCwgR1KZu4hxkc1JGbwMyhy",
  "key15": "VyTkNDwZaf1jvn8ZSMiXoKqy3Gz7NmxG5XZ196z31byyxGHaQsMr9vrwqDkS42u9dzEVShUuk7YobHijGeYym5P",
  "key16": "5emTr5UVPG5Qa7uNMWLsinfeuN3uxZua3mFb9VZKH12NgwRGYx8777aByJ9GBqxRTvSfG9jDQVn8bYp6EENZpkay",
  "key17": "2Dz9HBRRoyf8yPtPKNnoGkzPTFfyTP2AzFoayoRvwimhKKy7C5kTBXvy1MzVGDgyrYGnE7EgLcp46px2VXJ1eAH9",
  "key18": "Tjy1Zdb9mun2XqwgjvK8yamSzQKS67WefHRW5UpHsvdpnHPZNmxzJbXRwnv36U5qEB8wj3a8A2HBZTYjRyeDZ9P",
  "key19": "4TcHcgMYLu1eSzBLbFkBEaPFgtuoiykCnBu3Pmfi2Y4tQtnDs1emiiV5FFF6fpGvG6obANz5ykLtU9TR2DymJeXK",
  "key20": "62qosqNPq5FvVmTKRqheCMSdjdQZwYPaQ3wcHySxgjJgzji5jJgcYepTBwVP9w6YvqfzuAJnZMswMr7wro8YjD9j",
  "key21": "boviRNxJErwwBfoD1uU5AWb1TfvLhsVy2RRpvrP3bLDqDDYL9zrbuRdomT5gQiYGnysH52NoaQPgHXiAyZooVwg",
  "key22": "3v4HDV64bSV9cbySKTCUPybPHcxpoB1Jp81qFUHbAJvZZKrQW7GooikWfFe5xs3s35zVGKidL68LGFXu9bHg7SZP",
  "key23": "44KCn3xmr7nAcAwcHjR6zibjvtnX2s3irsK3jaNpVziX2GADR81a2ymDDKJauN9eS8X3TTC23ojhUUcGeMh9w9NV",
  "key24": "3Funyr75bVPTxsUGjLA56xaCpdktP5mZpB4Jp46sewYuJfD2Y993K7iJqCZKaJzfdSFNTZpJWyrxTsTykYvdNNPZ",
  "key25": "4b2TM4Z7LsEFVBjMHhgKm3NFuk1sAJhRXgUeL1T7DQzAg4NhK6Zc1wUUYkKJMyBaLYJWwqsDtBiHSzD2SYwutHez",
  "key26": "AEJgzRpvHUo4LCCT44q11UYX1tmPpLxxdqQqudgvQqm9dksfKMTubxjDSzkUD2d1isPpxs174GDWuCaFpF3jHn2",
  "key27": "3GgAsTjP6uMFnxKmyd5fFEDayVU8jiSqByj4unimTZAyTqqgDJGCPWoMYhxngNMz5FC22fpE1FkHLJ2hrGjQuLQS",
  "key28": "2EkmqF7NYKNZosMb8hUN5WK3teorszvwrQAs7TSiha4U2w7sovFj3pMCCimkKuCs52TsdpjTyoucyK16ZU8R4YW3",
  "key29": "3EMkkMQgiCkHT9x8PsNYAMh8uv7fija7hzAzbK6t7Wc3qdCDC63fSmwfmxGeDhzJYQK9EH7SkkqxqoLvLNeRUNd4",
  "key30": "4Xh5osdpNXPKJPiWwvXyRnorg7YUKwNo4FqpbSrU5XrMUBSWXEFKgDWV8xJ8AvjxEcFtKJqR5f7er4Q29buwsQZS",
  "key31": "RpmVs63o7wodedkG78j74p5bcjKfUnj66QYJTrxQ3dah18mAdcoZ9MuoCZVXZA7odHPwJr5oVJSnTfgnQkU4uxf",
  "key32": "4CvqsS2ZPbK9c2nKBPpJazWLVBzbchvbggXp2hYWDwomPfEksieiHvNH5PedyUJ5ArimVQadMCm3dEYLK3ChYsBB",
  "key33": "5NeYrQhkWrQbeBhxWvrHm4ntXx1sf5suFeYUtxnNd7QeMCM67SEfzxFfiA7ME9fByrmPmS2Upr5vRs8tyuMr991K",
  "key34": "5toqXCZ1UmtptaNnMEuVYCNop7H3xEctSpafZRFYQUUMFfSYz84GYaVuN3Ki9SaHB4JDj5UKQfYXkSMWqZvrKGRV",
  "key35": "34A1PfeKcfmpFfKkC5GjSok2SWGQCUoVx1edVhLvwdp84X1pEKKW9mkFjKkzZkZwkp2aKuxt3GbofnxSkSKLiKcz",
  "key36": "jLhdEJKusx66P1MjQAqBvYSo7qCX6RcC88mEn9R1CSRwaJ4c7ipRVnhuyRWKMXnSitSoC3f8LVyciCETgrUFwqa",
  "key37": "2ZB5Y5e5NmHSsr6ayVbNvZ59G7vCSggYBNdqYUxHeyPzgPks1ev61a9hXdkxVfthLU7UNGG3MJ1HHrtsvTEdh2eM"
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
