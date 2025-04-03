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
    "4VA36CXvzof4eZhoKFvs6knHweXDW8LDCNLKHiDseSmLkAbcwv9dM9fqD4mquprpbPGzSUnUzhznDBicH15BpQ3A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ENeYF9KLyqFBGb4ggSPQa8BCGW7K7ZPbfLiX1BeMSz48bMUxZsGfrajjqn4cmiy6qGjCxDeciZxQFLeTkT8s4uH",
  "key1": "nnJxRz4WtCgFVd4Di1qxZMtMfpY1anbhbevoWK128XS7mcdzA6bL3qAkn5QyhbAYrUL8vR4ja6qvoYSeS6dP7mr",
  "key2": "4vXUaY2CChJVLdi4dAxZrzUo5c6yWKvUrKbgeMGkqLNnAEsTvMs8384iUC592zX8MFnGNZgVaSYNSi2u8dNKSUj8",
  "key3": "2KZhWcFosFGudcxBjAyLCYNkUUbSCWXL9yQjfKB6w8gZ6eqRCW2G1Ud5KfBNMg7aoR2XntJosBS7L8KCkvEbmbc4",
  "key4": "2Jgcife2A8q9zv882WytutiwVfjvvTDhAzXN6YHMMfokGzNRt22tUWSHSvU1pr8tXqpx6bLuR9H3wjzkVu3rFgEw",
  "key5": "5Av4EXfPGiWqtMAijDhZC3tqaqGqerUyEkkkoBf882wDWvVjsRLHSsfbj13Ei2xg5YHmQgcKosBWtg92FZBzafbN",
  "key6": "43HXzfaCG2zFzYfhNCL5U8qiuapu5QfV5y589gzuZ64XuJtF7ECk3cnywSzZtWDB5tNxXmuh24aYrWuhvrGJCFSs",
  "key7": "4yRwkf8dR8XrM5y6fE6mgSSxcB6f5nrv59w5hJo3tQH3h8dv66iDAVYB6HASkzVpBgrhHfBpeoBLTs7eyV1J3tx6",
  "key8": "3WXqt1YHoWpWTvTrPon4CQAaFVDh4UjDDJSzbWUpgmapCjus53GcqeG2QWPcUwWoux2RCmAPFx7dk9SbrGeAt8Tm",
  "key9": "4XKg1jyHVoV9H7AUNNCyX1eGQRf41sskozMH9oYDhaY5Puo7P7x4x7Us15gr6j5VnwTG51Pjm3vSpNuGwdSioGA2",
  "key10": "25W2WbmG3CwsG3QNz6QaVxYHoWXTwsfFua1tEQ8JTkXZeM9hjiJbRvpYfSU73HWYMRunU1FecbsZhRArENhUCyc5",
  "key11": "5A9yVKfoTNjP7XkagrwWgPPhNMJp1TzHzq7niDkjTVkWzvED1Wwer4kP9Yxjm93CcaHoAkidLnCW7yDBHd9nGM55",
  "key12": "5vmyXeq8upEtwwgvu3yVTCNU2quSvtPRtKr4SMXxkk7PWMgThzv5r3yuGSw4marbFhrxeeEaxKZaounYMy7NmKcn",
  "key13": "51FPy1N26Qo74fioS7H5VpcCQUdYjE7jyGYqQGYDtENc2zdi8pdzqdoqd6wNNnscWXxBP6tWejuzmZsjxXPq3FQZ",
  "key14": "3WtePz5txVNYLyaAdNuoPTX1A4pfCMv8QYW2DwsqfsSFen4jK7tfWvopDjPbw9dPPDibBdxGXCpKgWhWmgwQkUfB",
  "key15": "3u3pa3ekeijr4hofxFJBay7xwVGFzkg3ME2RGKdtccdyvHX7UDcaCLemFdgfkzivvQRNZpcYf8ZvuNWv8rbftkiE",
  "key16": "3vtpyf8wbooxnAHski6ngyr9g1SHZWDRfozF5QLQGSCcbAswKTM5JbtB5c5jKnNzrAgkMxvdEraGguitHtWNJJTC",
  "key17": "4q7CJWWm1PENceTHLh4ehCVFn7CeywNDZs1aa17jVdQTRAShaK7MdcPNhjDeG86mJGkBaKSiA7eU4ZtK5NsuvLpH",
  "key18": "3YPKtE2amNsyJp3KC2r1MvfExhWda94EeaNTHZfjNrDAXQ6Q3wctpAGurqHwAQV7rzb4mwFEsdwsqCVMrsfxiLeS",
  "key19": "4hXC81H5L4TP2jGrs4YbLMjKRZ8bbXhLf9D9q81uESSP8knaoXoETVYPNctFVBmc8yN9mb6gAPhP6Mm9M2czzo8m",
  "key20": "33BYrrBCWftHQ1t861J5xwLaBd6GEytA2fUxNAR2fF5wE1eghKZcgQYNnEBy8bTWyJuEASyrgPJ8W9Bm9Xp8PSzj",
  "key21": "34nS4rgdAHGbHwxqKNtY9YBk1HXQTwLt8MZLC9YC1idzZMgXp5HxL5TF1mZGRHEwTxkwBwVtq9yVNLmZunRAy1aX",
  "key22": "5f45PanvzPcpJcmtHQ8yYPGcw5e6tdn4fMeFEsaLQDvJste5e7kNcB1k8ccVunujtfx9utfKYAh3oM35rm4KeDAb",
  "key23": "4AcbsUJ7R8azYdnwcakVoKohk6LMSQgGyF9ZEjg99on6gS4SreZmy6UEEpJhTgRKoGZZTn5bEBbgBYr6ip9DbGVF",
  "key24": "2MefA3LjCpwtAHZovRiZ6cTdyUxfCK7eEEGvWcpdEYqQ4z7bUbKPvwsfwQrGmawWNnkKRKfisgodAKqcg8TcAJK1",
  "key25": "4uY1q4joees29UNJPZTDKQUv7TMDcs46sEMGnJGrmkX4zWkyhu47aFShRMnnzGzJEwbXwf6iMLYLbhjxNPZwPQjn",
  "key26": "3RXpVrhfo6RqUd7T7DrBo9YGUSHNp5ys96Cfy8CGSEdSyeb3qqS1bs6Sum1PrdXFRCkmftD8nzdzmKnhf5c1QXbC",
  "key27": "3S3BdNL7exo7EXiH9i4UebQkovMc5p6RCEyLfwUQSnKZ78oMprsr1JgQxta8V2YpPFgKtfDBuCbWEzRvmbDJ6KfU",
  "key28": "2XyTD7V7P2jiPj2ptvA1XXSo39PKm1dmokXS2oJNWotsyuhFxhQgMypFnfB7rPFW1pFBtgC6yTYgDgrUF3xPMHiA",
  "key29": "2BjXmdSKSfro1uDQGFoqUkN5GrYDVEnsiiR2ggFrHR1Jc1ha5vayHRHUvHP9TZC2CjjeodFa9pXF5GV6rZYWWhaz",
  "key30": "4JcCSbFR5aNSvXb5jHMv6sHwPotvdLM2rjQzwT9ji8NTFUjWjHNPU3MUA6E41khWdQJrRLsxu9SPTNdzktAQuYFg",
  "key31": "ViLVzDQBCYNfoqEg1YsbFpcnuJZJgPZuJQhcS4W5GnqyWxKu8wFBwxUXHa6uAYPFAMnJo8tKsYrC4xUjLoLh66Q",
  "key32": "2i7FGuYVJrWc8Px2htCuQV8dyezaNdV3TATVvBeF3WnVw5u6ifS6ue6NHdCTepMH7nNVT2B63eBhbSqzuTn1x3CR",
  "key33": "398SL2XoEaYvxne4kyuKDFYwSg4W7fcK6mZYxt9C1cLYGBocwiJw7DhXNPkF8gYqBVj3ACz7XdruiFE1ugm1gPuV",
  "key34": "5ARJK6ScHgkLbwSzJH1gQYWLwLEXScX4S1Ekp1zkkz6Wt7hZbwsXWkH7fXhwB2ZAT3aRpn7zuHGJ7kRx7tGMnw2x",
  "key35": "5sfqMVy68kiqbuPMQzFZPnvULzJdjkiLJWY8ciG4QUfGTh1jPJDs8z5woXTUejHbGHSrfzxcm4egP8S3FvmH1ydb",
  "key36": "5P2zcVfvqeQoWth3sjh8eZszZ6H6uxGcZUtUEXKkZaZV1Mj6iyemzS5DEszm83js4DR7xFF4kj3EGYpzTto7ytsb"
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
