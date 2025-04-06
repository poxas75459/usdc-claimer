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
    "WK1s9yScffeKCnxi51ge7KoTaWbJTYi9p94BHLQ8RfF6ohqXAAxV1KeakeUfsgwRJGyQ3yCsrwtvKmyU5Uo98ng"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ettLRd1B3eLz8EpGdvHHgi5TTwnV3d1mbAHF5mPaGVxYjnAWpcvxhr6p7VTSPP6CLnprpuYu6HkyRoqs7pMGfMu",
  "key1": "nZNxXtBQw8TKk18SoeCgnVBYrLu2zRmh5pPG1GET3quF8tmVoPzFqXyox7J6rC2e6k6n6SWpsWt5j1XGvdJPg3x",
  "key2": "3uFFGibSWATCGdiPQ8YpmYBnY5Y9QXwAjEm8pkDsXivYv2QEqYZMzpKPRMaTYEa46dhPFBSeGzG2odXPrb3QgQrQ",
  "key3": "65A9dBbLNxWWybZRt7HbrgbbNW9tXaFAncCd9qu2C7hZxtFwfWY8JEpnJvkpnogWbA2N9638N9JBY8JCq9vyaHvB",
  "key4": "34NNj6MiqxUj1wVx8ye8aMV6YnJqSePt4mTam1zqJQB1vcErhAoMKcpDuJD4PtWs93rjJYUE84XNibFXLHTk8DMb",
  "key5": "3KHTwNhwhPAGgCDmrfMU1AzLEDimibbHwWEEcW6gUMmABWAXheo6nS5nTtketoHM4rQts9C6FuHJQoW8g9Tny7Qd",
  "key6": "5G5Q7cQGorCk3wecURp1R9RojhgPtQ72XjK1wVE55GzYit7RLGUhzUYjPndsn58UgGitgAfefFzM4K79F3u4dFqc",
  "key7": "MKdhRJJiHJW1f8DVFM42Y5CT5hT4RLATxKXKRdqn8Ttrw7KhBpyQ7grKfEcKxh7EXwhpgybB4tPvFvF2qcQWQAG",
  "key8": "UVwWq6FtfuQLhLs1gs3ihseF8F7p8p3j39xjEztRxo2HBHbTQzwux7FHvyedVjhcbZ1n519R76jFEJQYrmrsjHi",
  "key9": "4rAKbKekac2JshpkhD2EfUzB5twjVNaVZTx3oUgPp8nbpzb9s2yyVAHAkqECSXV112wKLNd38A5BAWSEySzRrSuv",
  "key10": "5PdjcmECiDdLN9KUciFkwpWRJjsbS7NqESAHY7sbM7xTrfG3f1jW3cTLbG4WfESf5LMbiV5MDaKP82qSqqhboSVk",
  "key11": "2HrTBbewvb7WwL4qyL9WrN5uE7ALsGn3d6rM9VgoB6tEScqbHNdKNLYVCBmbM1bP7AC8XVLFg1tTj7QX6XdFGuFM",
  "key12": "2PgoyqDqV1njNRM6zcGBTpsGivMhWUvFarjpgRsEEcYLogv2FgywSQX8NP7ujjk4wBz6Mojv4JRcq9oxFggmxo3Z",
  "key13": "3B47Y73GDu95w434aFFZ1HcTWArdx74yaMjdWMiN8R6u9qxjESJUV2AJ1fM1TCdbg1Huku4pMafb4ixU2gP1LJt1",
  "key14": "JzBrXej3puqAzMzvJzuBRP1ANcuS4RY2X65yBH6g45MxnEJBthqaxqa8DfHM9oKLBZ4NQDzVZSfZ8iSjfzr2ikB",
  "key15": "pq8s9FuJRj9vocihj7MoLosbXEgryQ3Pc21HkBCdNoPzHN6VKFteAEv1tu3iNgN9ED9S9SggF1CEbYmBCgVKwnK",
  "key16": "5orTMXoAUyPqT1B9gZjqqtq5Vuy6zykwJDneVqbMeRKTdgCAZTSQns1DgDEBff8oytnQFipo98ENQANLqPotbCHn",
  "key17": "23FUGJThJ6ab64ugLUhCFB4tyfRxqsP4na1Xp7ynAdMP9ykGkZ1KAD94wapcqqggQBmg31YHFcMv3P2E2D3XKLW2",
  "key18": "3KF56sxLgjdEUkGw3MYjMjyxYcNSr1oeRa4grmPAPJ4VSJNPpLMHxJuZEz1Jjge75AcxwoCGxabMnTt3mrZi2ZFv",
  "key19": "2J49pf2qshvwXuFRomRfp4ur6PxqAjUUjYVF98AmXBmRkLy94KpbqacJbLcJLXfoNbvY7cMc5A7fBgxyQxcQxtQP",
  "key20": "4GwuU8yCMEXQCUfpZXgLzjeN6aixoF71Py1YxjLYQs7nhYE8moHJXG85CwRhyyLfZjXYKSYNW36jbnmFAvLcoGws",
  "key21": "2kMq5oXKnHxwVYRwRW4RMcKvgcCs9i2YZ4QVBzWY62JTiQNdoWgi1SW39wuioFae4fsK1aWQspFYrjGaLaQYP235",
  "key22": "4Xf2zJH11HQQRkRnMpW9NMkUn7QF3By3tPtLtzmfAiMSKuAcsqfJUhyu7LjBWhLGEAtrBpka2PMFfTiW8Z473uTP",
  "key23": "5JfMN3BCvUia7m69cPTbYxGJ8MF1d8gSFubrJHzsggKAKGER7rjd6nNYSk8PRYHkEkguZN7sXL3nptA7w1zFWwHS",
  "key24": "5EFxK1vBWYbH3ie887VbhxkKzD5GmnwCpvQTCWgb2fzpei66zDAd5N51zwvJcCKMkBXvcxBML9K12c9tRX4Y1LNz",
  "key25": "5igS4xSD5hvKGkrWyzJcpd3Qmj6XhnKU86YJxBEujivyw4NogRNgKXCk9euxkhytbv4zW6MZiSZpvCLmjqVfq955",
  "key26": "55fRdasm5GfVeNrp3tD5b3ma7y3siFDzjV6XAgNuog58fHcj2N2Y5cqWXf5vtcGAoSgAMir264jmukbBa4FpxvRT",
  "key27": "4xV3yqogiM7UHkNFgNuA4FR5KiHEaJJd4UyZLkkqXpeSPibxGy3VBTsoo44PEB8Ds3KxrgkTN1FZiosP3hJVFG8m",
  "key28": "2SPSJsyrRN3WmqPQDWoyCNeWqEFFWhHe4CkrSoJHCeJbjedTccDCigkkELDC2W54k6wcA1rpJ4MvSq2rjfUt99rQ",
  "key29": "A9xNvPRfzcHCprFU2sDCxanxCD4F6QihGFT4Zwbr6GxAGv7dcfarYzYxwuto7gixw9ZcAxqBwKVvQ5nZAaGWK2t",
  "key30": "2xZc6XmY4vgcGuTRSaPK3RaR4HFWJeRtFvEMTjPtW4fsdcp5QwYJbHrg4RdCsnzZReVKo9jgprMkEQUgrDLR8HGc",
  "key31": "AzcbVTgeRrt96X8q7u1T7GDBDX57pvqrs5rprfCH3n7hpUt2hwwPRCfe3sQ2xMwaiC2JVd7XsSezchiqdwixp7F",
  "key32": "5LLUqJJ8epEgSQg81JoRqoib8KQU3g8nmB44iEjHxMkcS5xCJ1yCMp9ymbchQhcYjohT9aTAs7bAzsRtDb9QZrhr",
  "key33": "3RZvkdTUW1Hig3MEhpdJUCpvq4FH3GEwg7hjfKybLjdDiMeW6FrRNTh7ip85BFwHS5ocqrAQrQpNsQhPWopi6UJJ",
  "key34": "3cstA9CWCdTyHdgDwGFn1TKKPZ4UNnPW7CyVWMaNCfZKqDuvjqTwb7ZNNbCUo4kHhDHY8XULPUztEQxsy8rKa39V",
  "key35": "5Czk1BAqMYpprNihNg6zEpHUpxVzsxyLDCKNsKzNymeA6LdmucovPpzZejwXXN5T64xAXzzzrN3xWAoQXjthnW7i",
  "key36": "3xM7X4ap1AmjuMpg381QPwo2seMiyt4kP4U8kGCrkhGjYPPUjPFfuNkHZKJ1pqUbT68BNaz4NRy664jy3vLdZfn6",
  "key37": "62B8c7GFw8V3tFdDvBGr3VfhqM1vbJEADGNe5MqRvZQKyFQNWVKt3NuJWVYkVRhkZ44D4b43c7n4vycR4nwRHt75",
  "key38": "4WthzWDAeRqZSpAVUHVjs1zrVXECFTEYDszpYkUGreNMirrE8EAi9gWLsDz9Gm1Tsc7W8Nr59J8ZMHRhcPSSs2w",
  "key39": "4zD2emPJXQ6JcptzfNz22Bmv9uazZnrKgpftqcWkpykxnxNGNWNX3RsGi1y9b8JqXbP981n1Dx2YMzkxmZBLaPMk",
  "key40": "k9cddPR9A85PvfG3zPFa3YfDPAAf9P7PKfqpYpC8jY3x98nAoDU2fSZuvX8BguaQQCRarDELXjyckAQzpgD6Y7r",
  "key41": "4HsRzsHJrrcp5HJAbsEME7Efwg2L4ZoReiphn49AgeV6xSddV6wSpzxYPnRqfTzKQdNuaAo8X81LANb2gV4GZdzG",
  "key42": "2Evk63a9NT1RjkFJGMJxVJ1wQKuG4QkoFd9e4WdzNtUt8tuMPhY3zi6NLapK8SYB3MtQdqSHiFvFJAkAtxHnP3t4",
  "key43": "3XYAZaL6d2UHjFf3MTUBd4ftytQQa4P9m1QXrqdnnFHiud9BeatUGmtxSMg7PapSq3m3RnGta3bdUDq73z84XhGo",
  "key44": "4K4sFWe9PUcio9XwB6QUtYsVVk79HFofu4xMLJbdcSUBcf6juxDrxzhrwgYumGFhQSyVSwrRypJcsmgDFjDpuDhx",
  "key45": "3ggX4oAkrVRDpJpKmbrDZ2xgtaAz1PT378quo2nesRekkWsdwhVhaAmT9ntvXYgrxEXKXewRvfXrkWfivLq52VeB"
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
