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
    "3D8Wn2Z2QSsQKatgdXv3RYcowkc2dDLHT1qAFS434C9Qh7RBTe7RppRqSq9LohrK4bc3NS5tjJVQgE7u8q48YBXx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24ZJwjcS9q5wTgQ3iqjF8JWnprtHtXSNccAuW8AGFgwwXupXvkPeQekF4LwavdFZaGPwFfLd9aTnUhDXma31ELD9",
  "key1": "3SPNddwXWVCJ9u8Wsb1cZRey9oCR9i1C1M9gcH9XGtsf3ZKABUc58CfirWPY2aBcNknmwViGp4dxYZ9YgLQEdE5N",
  "key2": "aXL3VD4xtzuMzxw2Vtk28wRJBHHSsrqAbuXFgjDa9aBpawQHuzw69o5UwJxja1KaSUw2ADfB2SV9BQ5Rh7aEP8G",
  "key3": "548C1LrXhW1Ap7FeBVfZERysCAMom5WoZ6qpTSsTsruz6NuST6joBLfu269PMnT8Qw5ugZ5afKrnSQ2WcZDsQkK2",
  "key4": "5PAgapYrrLkCCtZ6AWkS67SUbYyKiWNu2f1zA5HPSukzpUEWJny6YFxxDHn5RCxAiXpbnwgwYaMqBdrRcwoBFmEu",
  "key5": "5BUbt1sAWyMUZYJarUiQHWqnXHr6NW95rNLisCmrsvF7UzRm51AsUnUFRKB39C8fBEaoxUjc3His3BmVHoxeDjTV",
  "key6": "4uNrRE27JEz4YEVLCFT6FfXSrE7AWdAYvhgxYFabeLs7g8KpEVjfkwZiLn6P343VmCj5rMGq3Q4op3WoB3KmM4zy",
  "key7": "4xvJDzUhDaH2f7Xowvm99ZBT9U2U4ETEjVP3S6ibWiAS7yQdnu58jm9qGVtYsieT9rjAjvomJJS4PqzZV8Pt6vZf",
  "key8": "5p8HG8gp77RfAun8awYDQakMwiPYy6aH56FWYQwbhwEifoFvzeg5ijmNL79uFKpE7NeZie5JYtwfqGmGQKtxdbAK",
  "key9": "3hf7j5iqv3yqcyw9QLkLwm4fz97AuqfTj3XadiSAtbXrBEmNWKabzA9CYbBAQ5Fth9qDRZmspdZwBLinu9xTaRgb",
  "key10": "2r1K8ya2CgoM5TS36Rn3U9bDLYfgGMTY4TenSTaPXR1oofjcxtPvAS6MUfSk7p283x19wTsoUT87aAR6M5odFXuA",
  "key11": "5sMDxHxdW7TLWSr3ht3ovdmKmNU7QARs67bdxE2ivpbTELCC1K6xEdbQVJSrCYDDsaPW6pAT9ftwmRnyzqdGhFx2",
  "key12": "5KUgMwVZGboKaft6naWsB4hH5kG7nVvsz5NqyYg8fQKho2YMMigctvJFyGKroe7AJC5JZpjhmzJsHrCdZFp39sNg",
  "key13": "SkWz5nUp7Hho8u77SBgBxVn6Bjdzk4L2uNaZr2vgWFxeHMV5kBqdkwCDmBCvYkQ3j6QwDQhx2d4qm5ZVVa2GfA7",
  "key14": "3V4txj87mWDoauKtqvVM7D2duiJh8AGHiYs37F1CpdAwDPoZeeFW7aTJ27cSTxEuyJXe7GYdNLQZFNCK2kR6vxxy",
  "key15": "DbVoU2ftyrs3ciEPuNcp2wbEfmU47SFPoUEHn68ouiiYJrBgLnPjc4Gyh7D6quaPq4CGcnBjLJk8fJeLEDr2TKR",
  "key16": "zgKkb9nGq8KKER1LwoYg6fR9LTE8p7jwpDxUJ4PgCuq9aC3XenuUR1vLxgqn1GhfybhVxu5eotKDrEAJgCrnRzT",
  "key17": "4Kr8cTqxs7ZxCo1T512hYyj5gRbdVJFCX3uSf6c8BG2Jx96wuQfeecxi3SJwJ6rkH7BVGQbXJQqQgmmU3jgb5i5y",
  "key18": "3rdsFavYZdgtV2GeDhVRZYsiztxFfYwMRY7uAcH7zYi1BbPvcx6Xcoa5mvtY6t1RWLZUEPML3yEkKA644hM66mF4",
  "key19": "67qbyj5SMjDaMhbANMu2K3YkBrZ9mjSMtRi8o4GmsserkhsEvopFzTDn1fJk6b6Q87u7drtiExc7Yt6B8fE1EgFq",
  "key20": "5V9HSbdtBhDSdxhnJ8PhzVUjP8SwsyMZSXBQfquZnKXPpZNxsAFNojYRfJxpEXh2deK1ddGHEPJ6bwccPTw6x6Gp",
  "key21": "3QNQGUNuX7yfneWvvAhoTvyWdn8VPGf5zyB93QHChWYjbPgK3wUTwj18FPRLKX1VniJiziuzw1yB8LR7xA4UCXzi",
  "key22": "5CMBi6HbBdamanAYnmkqzigahCweiXosqFvK1REh9zNF7XwZocYr4PNtCykTBwTZA4JJoXW6Bd4vhbghQXwirvUT",
  "key23": "aJSuZxAQtWVbJboJzCeFxytWg9TX19RCqN7D4wZMVTUCVFmGrQDizatbFvyV1brTwg9bDHjmiZV4Wwd7nbRF6F3",
  "key24": "51WzogN9DNibAG9A59t7JhpuEkjxdc8ZWVkAUiuFprKwfXqDJqAKzdG56DC4KCKdgHyVvtBtStqoMB8BSLFfgucV",
  "key25": "jaNW11vjECuEA91u76KrBAwxJwBaA6HCE87rZ6JQvMzntBA6r5UxvZqVnoUxt2NtifWQsUjUCqeJGLFJB2T82Bh",
  "key26": "3evvKmZpFaWz7ZdQN84YWUajpsoFuFD2LGuYBVgS5HD6aezF1ZWcAqNmCiBNjnah2F5QruLkFhbns9YFshuEknN",
  "key27": "2fzbgFBVbBkaKjU2dhFNJtC5X3cxS1X2QW7tkxGDffkkJecpX1BRrU8yGAdHTsr9vLfVWVG2V3s3tXP6PPq3rJyC"
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
