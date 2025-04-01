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
    "32PbrHtD63AADFsk7LfkNx4tg71K4yk7zrZZTFLroESwAS4VDKF4PpKQ2jkUYzD6ZzhYSBXZDkvXPwxvgoSxneQ8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2on56mrFqH3q71EDuXJtwYm731j5Tx4aykcRHtfFMVuCxZ73EjLqzrjqnBE9dH2LhNPftLekdr5iQTBBPcvNzgWo",
  "key1": "fL8qDYYDNKei3KbjEVv18CBr2aEZZv74gkLtt4XbxUhNe8nx6dc6Xg3sCcHSoEH4nYwTbN8ZGXiomq4aDp5ysq6",
  "key2": "2saXtKRNMpzwKXLvjGNpyaY16CNVmdM1KzqjTjnPM3rjtq79M21Ct9y4d9SsqzeRChfEPbB9XUsGVA6AZvNQkuTS",
  "key3": "FZHtrvUNH8UbeKduQg3GtM7jweCjdcMWd5ZqEmxu7LygA4qwyR2d6mybAJBr6cQyMSSq73JowpFToXkx6Am75AZ",
  "key4": "2ejM8MKMUGRfx4ZztTHY4tXq2xMzw2me747hdZ7TxeXdrm2kAUGYm3FRScsLX6azwWgeotfyBttkQeePtoWMTmgN",
  "key5": "333RXhAGbxmXNE1px1MML8oxEUuvSrUbcuySStmAL3P94GomszUbqHqPFWDdGMnCZixrP9fdyv41QbZ3iSdYgHWn",
  "key6": "3CDsjsfBk7EU1pdLgJTjn5M9mjns5zsf8LQsGmCK4iSTwckJD8PqPuSDr9ChBNxTkuigMqKDd32VddQTA6RrwxCn",
  "key7": "4cYv5yWHNEoTzyoCDkKKMv9A3unS6NCCg5fSxCtNYFzqojGUggh4WuhEpo4oqmUWRh1JhxkS7qVnBecjtGZAevxw",
  "key8": "4dfEk4Xmw5PGrN1YaB9WfEPwsuAuK1KPZYLNjCLEbCH7ANNjvTMZt8mytNHp5RuG52oT1FUzPs7qXLyiDcsajWvf",
  "key9": "MYcUangshQSMhPGmYvC7JVP1z3fMTKTJMAHQgUjXvucdAE6ZCUS3ciPcuTsoTJgV3hb6MAmoNqF33dQUergdQik",
  "key10": "3PGjJhFizCgKcCQm5fWV3sTsD3CMuCvQt7VvF2vTkPeJncnKdLFDETjqWf4ACb8UhsU17gVyhfmYM3Gz7mz765Xz",
  "key11": "3qFuyrdfFUZeLFULts7ZF53XZGDKbAyvXeSfmmqFT61tNJwvEY9jP7T5sJC7X2ATSfGjxk4ZshYKi17MU7PwWkCp",
  "key12": "5Nnnbyb6tyXzqQQsVWfFW7qBFGaH1MnAC67Zu39YgzM9dBgfVLzuz2qfME23agRoBtTvxQVSUmQ6RqWcuhaMrdDw",
  "key13": "z388ZjVyDdnW3iaDn8zAegTLSCsX9jWXVvsW1ZsHwgPEaGTwHiuvZx3NgGwkGEuPkxt8MjpBCJ7ukGfD6ePXCno",
  "key14": "Wj4cWo32YM8ggiPyMkaLnBWhmR42kfS6M2sS4pj9K36BjGcwc1ozTjXwfEFD9fuN3w5a5LuJiqsC7kZPKWRVKap",
  "key15": "cs9X2RvhDKAg2mq86WpAGr2EanEXBoDP5ih67WWoZxrSeMosN1E56W93G16E7YBuioBY8zTZcK7gzhooax9o4fz",
  "key16": "J9Vrf8zzM2xaprTqKehFHKWwe9iBHykZ1dnxfjCd1NzHmkyYo5H2baFYrHiPyea8GJLF2vgP9Dk5sZVoCVHmNhE",
  "key17": "3yj9MJpsFU8Kf1eJdBvzWtR9Pg8Cok4QnS1rrsyvN91vvogQcDcHTLn3vR1vP5kKhbcwFyS1Hgy1Vfr9nWz9QgLN",
  "key18": "vkMeAA6pAeZyFtiT6CmTUvfDyx89Pkh6iHKLHQadAaYpYd5CX7xCeDpzvoAmLN8wCCXGrBWut8FF3hnZdRYfr22",
  "key19": "3MeFd1mQcpuU2ifLwouhtPA7dt7ftJvwes8yde6w33q9jNHxSqAbPmDu9SBBB3vvadwr5QJPY8Lv3DQpTzVAmmpZ",
  "key20": "4ssisXt2zQHvtc8MrJf9cY1oi4hQNggtdRKwNuLFxnfJJzTTiNZ5N7wepG2ZRWFnFvQcNTnrSSZYD8kGo5AMinGA",
  "key21": "2UeD8Pjos4ppXpogZ3xtTsi3QYB4KfqFPGqwGdKLWWwBeHmHZTAMVPwAHVgwyn7VVUny6xr28mFioXVkoxayNQju",
  "key22": "4YUXAoAnSpCRHVoWKpx3Y2k5eYBM1yEg8HxqTGt5uh4UKtqwEur3cu11JsSbLHNDYeHKxToyohDf4VLMQCWN4rhw",
  "key23": "5n37f16DqrD4xPfbSHdE3H8DitQXfxEDMe3tjSS2SAMnGStDr8nWniKFB7jZdGEyTcAygvrxEyHyhW5kEsDnUPFa",
  "key24": "3JZSB3CowxEpnLKbhJUQHecB6vrhVevJkeD2X2N8JxvLkzQeGCQoCprsPvsPwrUuer5RQHuHZEatYcs6siPgBRYH",
  "key25": "2bJqrpwrmLai7qN6rmMm8puHP49fKYfbaBwyHoSA2SGhopNJi28z5Ay3brXXqzv8WnARKDKEHdKGc6FaQs41ZoPX",
  "key26": "3C1VB7aDN5EP76NuBBQFE3mCj6WmZ9z8tiGnVYbZBAAZHGC46y9k5QqHBfrGpeaHApLAuSdVvfacLf51gvdQuPzZ",
  "key27": "4xarY29yYKcU9mkGLHoHMBpYRbA23L1bYjnTC2u8Gkh28Cx6FPuwRwjUKxNMw5dEouL8HaRA1Wfm6KCAGxmhvN5C",
  "key28": "5dukK4juFhXLCfP1Ct3Ckf2dcuxgTuXHcR5zduWuq4LdcDBBLPWWy7P7Ds8GE1ECU4N8CP1aiad4JHWTRnS5KHyq",
  "key29": "2bt7hAf8kbCtV6RY1bMZpuB15aDgv2LvwDJmwxYf7V3DJ6eV2uTG2pk8xirbxyEJ97W1KGWLMzsNMi23a6y39Zju",
  "key30": "5di4YLVETVDUUsJPnreKGRtMjdAcjDLp7VP9FgiGx6MJ2tQHBwES6co6dJ9MGM8NyWCmxqWLzoQYQuhb6aDbspSz",
  "key31": "3zUECNnVTnp57BTBLJK1PSedYZo9L6k4x8Sfbqx3VKYzE7SP6rC8xXx29jposhMeUHEiYsmK58wdsQAbWoaW5Gx6",
  "key32": "4xQePhgnwUXqvE1v6ngjgforQmFrvtWnmuQMN8yR9mKBcsiycENqpjLxJxfrM3bWGAu8w1vTfN2UKsAZ9amRMof3",
  "key33": "3TtPZnXv9tfW2g1m21SpvYRLppUJgZnroCoqLSZ177EFE2UGkHyXRTbaJYW4mRjYk4EtYyv7oeeSRQjDCiQxD8hK",
  "key34": "2o8nYEehSqBKBrGKHyFb4d7WUzjc6dxrPR9ebb4HA16iVUbEH6uG5HEXzB9PKZFB3TRGiW5XFeSLxN5uUyXRQ3np",
  "key35": "7P1jehi9BjvfFTQnHXBAiFQX17D6SVkwoZottZPNnDCkUQGyHLraJiPffRA7V26sB5ZcHEjZYMX4uTdz1jbLRfS",
  "key36": "5UqRfYMeDjuAaC2RD3cUy41db4NP9AHXtYRrTLHGVtLQouxAjNnYoizjyjywJaud111fYcYWn3SAtucrU7XqTuAT",
  "key37": "24hK38yfp7aM2p5bsjgu94HZKgnuBA8zSdarzhjQsXRoBhQa615akoHjHWuaENkcBzUz59zY9h2zLb9941wPajtn",
  "key38": "5rzsEuvA7xiSB7UF8VrAY7QtAWcemovsLoiLV4vL7PU22T3Q5jSA7xLKx1rmjsgNjTr4stapSowUMvfwuYEnNqbT",
  "key39": "59mRDFUNcUcoP5ioWiT4YbgNFF4TqorfzDW4nu29J8a7CcStg97gi6qpW9mSTCvvepyVBiyh29h9j4EFXnvJo8kp"
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
