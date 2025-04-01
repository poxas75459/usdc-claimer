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
    "Ebdn9ufPRrSJGbLHCuVUz72NuhPXHK7smXgtxsEHV3Gv1BwbFiGwoiysfhxBTME74AqEeremoovseNshxuKDLoj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4i6Z7jouUW4bjUggqz33Rjz4k2xGHLxGHYgV31FzBWtGwYotcWsdVMfc5VXkhvH5KnH6XHkTwNLxMcAxfCcQfK43",
  "key1": "yZozpamHaBf4VfBkzQz9RQVo4QW18BQZnF3DHCmpdPfxyy9uppjk2YbTowqQYkbDi99bfzcYTMfp6aSvyCToFLd",
  "key2": "2VYkRj2AL4Dx744JbQzmUbKmKc8iWoEV4SDwEF9FBHGXqqzJkfqVKqPgjf3YkwcMoBXDmZnoppVxACovUVrgHm6e",
  "key3": "4DMuJCxHqap8FmLA8seY6tJKbKBUQScZjc78RK4SxpscgfGhqnQwQRCRMnNvSg2GjRCUFjg6ydsKuJmJySxXmzhV",
  "key4": "1oZHviHm91McVjmq3n1MXovDr274R2gULSUYZb9AQ3YesawJZVM6B3XP3ZWbDuHsqVmRxMqgFvm4TkexeyUfbbZ",
  "key5": "5FzMvDWRAYdb32BgEZPta5z5F1smaeYYHRnw3Mitz9BM2Um2gLthk7LHNqTXjPSGTTs1yGiV8rSEyiWoxudU2Djq",
  "key6": "22sqvR3bdtmka4Hw1Nsix6tV7XpEj1Dw4nsudkXja4oifeJfpMit37aktmudj3dyn4DNZr7sCfeGG1pJisqRUXJe",
  "key7": "2XhfqexxBfCWiTsKhm1njBgUeKhj4HadB3pF4wiEC7frKgGt8RqG1hKSQjzZ4TQYqakLt9DNxvZuvZkks15PpbU3",
  "key8": "2fTa3t5NSE5fvL7vLLXeEGn6ktU6tg91DpwHUjm1EzbTye8RVRWfVSgpradsCY6QwdxFmByzHwuJw9XsJKuAJvVQ",
  "key9": "4nSwkaJ7Vs5uSEMUEtSXnkhUZRtAPJfVVnkKY5N4aV7kttdW8oGj85r9rATtuXpqSnniPnvyj1HYinV4bV2xbpsZ",
  "key10": "41AEXiuW15Kjjxu2iA1LsT3PgUZ6696cwaKoyFahvKEWZ3bs8bPKAJis7VGEZhTCeog4pdwwkcotBmdv87276UJ2",
  "key11": "2cnQDJiJMFjj1gNsKBHQ5HxJrovAuyD9hH7aBECBPKF1otx9rueoCeGVDzdZH6DtA9yoJK4SaTY9r9oymhaChJei",
  "key12": "iywScJYQuS9zN3XiHm6FbV1BM1qByLmzBGX96rEwcyeCCh7ZwFQxVEfi93RqoAz2MgSMLwGE4rwFRMr2c3KyWRL",
  "key13": "2CNg58SAASPd1sUfJnLaV1h9cL2JBdE4M5rbjXzetZS68KRgjJZLaxvAkfKM43CqjjMjBVeTTWf7QYs1iptqBJ9g",
  "key14": "3y9YRCh5eBYufLVSuV8HNJERF4g5MCVMSWt6XcqNxZKbNX3Z4Ayo9ReLwgiUQ57R5BT9dmPRAKBhBHVY7R8Q7gw7",
  "key15": "5hS37e3LZdjCLUVT8HqFjH16K8anReDf5uz1Q3e88NMRiXQNTNe3BQXDieuujZL1o2tcXDkVUtsJ3XXJaBGBPue1",
  "key16": "TJM1q99HFhcEvSpA7Re51wtqsBdLQaUMLmEGb46nWykh5S4sg2Kv7X4gLH313oq8akv34ecyqAwDaGRxcYzqQom",
  "key17": "3h6nSffev84jLW7JHNpRb4DKKCaq235FwV48wG59v1q1i7MjaynCtHzxQEKbVRUav9UWoGWiPLcAyHTiU2fqNM5W",
  "key18": "25QebvNhLuGdT2zmK3YBJYarbYt1XW6JbTVzGdJb87jj19RfBynTgVasq5agBG6VRXYux6dqRSaTRx2Ejwm9BUdk",
  "key19": "5NJEaY4KjwsgME3yvERP5ZDpqqKw5bDCYbkakjDK6TLtqKJo49pKeDCZ8LTTEMJRmPfVryssVG4UGhvrU8PYk8rj",
  "key20": "5vbaHGT4F69bBmu89VbLFU2MWA3P7TYkF5fqhVJdFBuzgEhR4sFJMkFAB6gu9ARmXfWfsoMr5puirfsTA2kgnMfq",
  "key21": "59sFLKj7koU9EKX4FTGUJcxseWptQNgqT2YWAPk2FPT3XMUy7McfCWyBikruNRtwQXPXHS7aekfXJ7KXzTM1QJRy",
  "key22": "2N3Z4JBNm65RVLkCS6frMjjdZTbr3KrfarTxbRnHs7B4DopH2B6g5HM1Z1CcQWwnFcsiaXfkHWxercHeN3e1dDYp",
  "key23": "5DpWwnoHMgNC8jWTGWEvSNEPdXtKkd6xqBjqs9yEconBUJvzFfAX94ByXVmiwfHEJiy4xakboXozcFmagRYnHSbY",
  "key24": "4m2C2dneA6HxDsHGaj3n7tZm2dWy59AB1SYaL4iPfdFmLkZ39he5EPKiY6wiNfnf44P6iegxKkeRzBLLCtoUrwCE",
  "key25": "5QKQ1u1mQMG7GAnh4uZxUPozDv6ispzcEHnnU5GYr9UJ3Amozs1LN7GkuKYXUf12x4TWLfnseug8YyXuU5TJU8ZX",
  "key26": "2WJwFBZ3RYku7ws4nEX4aV9KX8qhxVM1KMWWNBepNA27qTBCLTTb2Jwwin9Z8h3RDa68dusesj6JU1v4krwtk8Q4",
  "key27": "4VWt2oN1TjwgGyxLyHHt4oUkUXqonF6G1F47b12uRSdVRSqRYkHwZNUjA6hhPBKYjsd4jCt2FwShFZJHqdnTgDz8",
  "key28": "3hSQdhW636KynTSxhcvphLXyGNxuQYUzzbMzUed8Q397VHeUThv5bmXmArLRgB4pjFZsPDtSZA2sk6TbwQ4qRhi5",
  "key29": "5DVsqqEwGn8C7THfTiYLfvSMYavPBrUCXJ1XrYdnRRwyjma72yScAQeRA4xuj6d5WjRWUSTTuHLUdUC4LHvCpiub",
  "key30": "4u9RrNANgRZiqt9wRdm5cXzvQ1m3Nkgt6PuVZkXtkMBPweoPARJ9zLcF5u4CvPvJZQKM3HNZsVDZ5XcJ5NN3DP4G",
  "key31": "kQ2xn9KL2xWXntouS1Ed1tERJFMv3GYyCatS7xcvTccvZvJmppfLSCoXrYdbPzSnA7YXdCRsmMoCbGmZvfCF2z4",
  "key32": "456AYxYKxvNJaEsc1L78xGmsRNf4ac85vePxi8RT3KBnPmhbEyPAaKxqqj8nA3CC3spSKXZ7Rk8T7aTRoVmDFvhy",
  "key33": "DqyQbEEgaocTekvvJ86t97Xv2A7CaxSvJppTbJyhmVG7gK9o9EuywZQF5jZwwGsDYaQi1PdvGGfXiP5w1ZsiHuA",
  "key34": "3FBHJZbFhGEJn3FwabZ96FuqE1aySnLinXqRphxG3fPVr3AzaTkTcF45gu9tSKaCSehdvUAtp9R8H54KX85xj96H",
  "key35": "5MLvBCpniKfTtrKbzttAj1FKe1ypKtYYGcbetfzsYy8s1M6Qi1TXkC5L9G5dAAo3Spfg1fRzv86gSWcJveo1Qsqx",
  "key36": "5XZTXAshQb82NvTywucaRDiRu5ZA1YqKyGtR5oMtoWsBeZPvT7ohVhxFRNDsSJoMqhz8SUfjZcPuhcKqV81fGaNa",
  "key37": "4Qm1ov9kKdEtpw6Tm3fpiDUvyjcPQ7HE1YJ6inDLash7dWFQQmDfguQk354rxQqStjdR3gWZ6VYRDDaTksTfrKEu",
  "key38": "2oNupaA5kjQAh5wFwEYgCTFAUqGnMQu4Un8twkasE22jEoK9B6cfp2CvDBzmsnkWj9J5JdAfNKRpk6omCiU9kdEW",
  "key39": "5aJYHZtecnqXo18KyokEhKb1gY9BtvDwfqKeR66hyhETsX23sGw6sKidRkYCVzH15XTVfo6kzRHpijmFJ3wRuR3C",
  "key40": "2fwjUjNDFuKj6jAbviTtcvN8SQJcdTRgipnke4AvVkwfGmcviBmf3obfe6VMTGUuFFAZYt4ia6hVMLkoNbcd48Sk",
  "key41": "5PVheddyZqhm3uQXjDwgPgzCti8N2aZPFschiDzCej4itp6xVyVKFMvzJxznW9Pt9j7fjpna7uNoBfbAs9YS7VpA",
  "key42": "2QHFW7Bzqyp6ARjhSmFU3WPsRQqhUUySweHoLSoSYQgozUe8h7T9Ta37bzxo6eYhC7R6cv3rmAkm2AWUBe639DTY",
  "key43": "4LGLux7KkWtLxTnBsk1JNcnrEhL9pHPuS5J5cjK2Ftph3F7KzSiKph3vZ1MvLApnSxKyvJg4T9KSugZziUUN9w1m",
  "key44": "2zk7zwcgK97mSwNXeChiAnZaNrgmvUUHqB726kqpehnewGYnJf4Uh2fDexn7hZoxWFvKD1GjvLsGKJxJFamHj1ym",
  "key45": "31XP8Arp564SDu5Cm9p2cGAU6VhMSyLgMQK1oTjzPphZv93ZpQaxW7Y1pF1xWbMZ6WsABoqoSnyaSotdG1GM7KFR",
  "key46": "5VrSvHFYKqzQTgR4iSfgYAE7XgkGa5GpGMXFoagwCpPKRvMe79xBmjxVtc3NHVuzr4pua1gkmNDC1M5rGDAENPqR",
  "key47": "5oHjC5Jcs64JGNCyMm8RT6K2KvEgWdW4yQ9NzJu3J6UKiRNovByWxfJqGAeU5bVpNW5uTXehnaGDkJnHSPr3AQ2y",
  "key48": "4TEmKVVjx4N97v8745tBuUWqJuDX8DpGBGJzsHjDB43W424triaiuDJaaqMEv4q3H8VKcYm3BuHwWbvvj8YJGT7m",
  "key49": "3AztKpwSpQRfd23vEPZWNfoZGS1Ektkahops6a8c7vSeNUfCurVBbysfXQ2agwDP2hWzm7Bm5qSYErvgGhaeZNQ"
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
