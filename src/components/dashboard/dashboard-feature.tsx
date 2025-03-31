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
    "SdsP9ox19mzoG8hVmxpdhWyq88e4DDKptaHAw6PbizAf2u8eVwofqM1MLwnAXE6RvKDdgjxBnJjqmBT88rKbzzo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fyRH25jsn22ebKiD6ssLpg1DyjqW64zZxdVYrvrTHprTWfanfAWpWNGPxWqJLNXUM9HZbHDb327d2zSdw9d5AZd",
  "key1": "3cQzjMPyCivt8nWwXKmsG7Syp6g4YwhChUxvLUDRSwV5PP5SSbK69vB7fY6rxivwVRJi8tNcrrrd7yKdUZebuPp2",
  "key2": "3r1A84JtnndytuMc3sURXnMkVyFty8UL2EMArbPXKuSFByNG6chdf6mJqTF1w1RmcSv3q5t4BHWsw76Fbt7722UH",
  "key3": "3gQuzk6Vv8KaQcfWbmVViu74Q7bKQroFCWWBg1PGv3ogmHHkUykLcYENTvQwyKnjph7rvwKz5j1q3QUK9GqNHaPv",
  "key4": "44PtYQDC4z5jykUqLA6iJMqWzNvHQi7Xim9Ac9ABfgi2Skx9BAC36XeCvgpdavBvbTYwBv2x36D985YCoHAiFuRh",
  "key5": "3Hd41r2k3Z95wk9yoihvXdMH7jhNyEa1h8AmVDVtfhJtxJ6gZeZ2yHJR862wnZUG1ocC9mmLm2p5hY8CpHYsvFJF",
  "key6": "t1GC1m1QgsNuPRF67U8xnmGaVhDLeiCz8k314BUAdqX28rw6Hnf3QATyDYDLX45cuQb6kwqwcs4GBx5Xe9E1MYX",
  "key7": "5BRJdEPVvzSo4fcvvwGrAW9DJtxUnJfx7VD6SLPhndipdfmKg2aB1egq3PDiM3T1RVkBxQqcrqAYjs7QRAZaD4Jn",
  "key8": "4t5v1K8eCSa9318QfgZ3LjzyUFtZsfJ6AwMrckFUbm8xP9FxRx1duWxH5H6Essvh1xNR4cjxnxP23LA1qUkTtZVo",
  "key9": "4HdvsVQCwdoN6nM6w1eh2HCyyVk5TVFmqgsgHfEk5DvKNtCe7fa4CahChRXKyHXEwPkPD2pfx5EEscXWjcdmesJ8",
  "key10": "2dsPSCHmwvFeEXDvY6LpG3VdLze6dWWyMxVpX92LC6KiRnhpfr2MGkyQxGSc3tj9WGuC7EkPVn8DCnEcYP5ZBLmY",
  "key11": "VfeHcuDLmesxY74kHVUcHbhTyMUJb7r6Lf2MKKZy3xaYa1zXQMmqsetgUAx68Fx1Dqe9J3wAQjBwC2qUyAXc1Dr",
  "key12": "5PpDK8nzjcgmXwJn1PpaDvMMMVx12xzFKFzA5RA789yTEHisMYV4JB3c45PiTH5RM4YK7PpcfyboD1caAN4MPMru",
  "key13": "4FYzD7RpV3WDb4z15q3tCbKmEwMkNZg4hDHZhSSZJVeticJW2L7fbRzWWvLGnLsSr2q5Kay6n56ZBTb8uuwoFgMv",
  "key14": "hwajkHLYLJqmstzRQjZxoiPbxj14AJAPEC4tFFocp3m84Zi1vak6g9bUdyHfZC2L6fDB6V7F8EwoceStZy2Utkx",
  "key15": "4qkeG5potQtySytdcgYQ51Th76DBnxJCAsUVVtNoUmpR6aDapDsGkzoMRh9i6GaQEEAR8uvVKBeuLjgdWjJ9ztwf",
  "key16": "21b2pivjM2fzufurLVhtXUFAPNWPS6f8vpWgpu1NthamqwdSvRgHLZhyY3chNF91soNSwJFHxdvQToDgdzQvewhU",
  "key17": "4myYscp8qCnENshPWuTX6x2AoeYGCtM47iaHGPoQKmcf2aMnbmFjKitfVqYD3aZ4t5nETX5ofGrH3cmL4FZ83i5K",
  "key18": "jAUq7WhiZhYahLetCFdyc1QH1L7oLChTMQM7ny5pJSE6EgfSmdbcfytpAmsaKH9SnLRCKJp8cyJcPiWeVWZ72Xq",
  "key19": "4HtXFKHpNcML2mToee27cerN4Qy3vJkjBRs6ZprraAYTde5aRChk2deBUc8vtCv9sMzzoCeHgyLTUdQten8wMCgx",
  "key20": "4kgD8pQbEber44DU3XjQziJs9rioRTrYwXr4gTLDRFDBda5vzHJbd5n91BBDTnGzBKnswpqREsRXESt4LnjgLwB2",
  "key21": "29pAB7skXUNXR9tuij8G5kWbo8KSKipmdpgopNQsasZVC961vscfA78f4aAWzPx2FWAaFNtDEizCC4PPYvp45ghB",
  "key22": "3rBKfgJK4MigoEs1Gj81kvvw7FdRHq3xx8YMA736VT6vjzFF9YuRcJiv4evVYnFjbFUWNGhqewWwog6PDp4i7W6i",
  "key23": "2dixNuWWhxfSZVCgz5AWdrhwX6Vvo3rT8rrt8QCbrtZ4QLSMX1mJNMSi5BmrVSB9FroGghGMJRBp6zLdmvxcZCNR",
  "key24": "NQLqbbVcTknCTJ98a81pAa5eEKSaC6WtSR6dXT5ehZUKQ1xDJymfk3ezbSPHHtwAqQbtmZKkfshMHwCRCG3KXMW",
  "key25": "4VrdDcYvkFzH4NUCFF8y4GaE3A9sV4dUMGZbcYvpP9sp1oSA4B32giNBvHFn3r3jaUYqcme37SKVEisSR44xzpDx",
  "key26": "5W2QsXuH5BKx6ecNUPwjAfSScouK2pNLdhnAVf7w3napqb4ri8eCzrbEnkwavGZhEQ3ovTC2ApneKDhwozEAyo47",
  "key27": "2QikwV2t28wtEXAURceELQ7PzZ5Bw83NuwihgFFvDK7xKjHGcexwz5xmQ9V174hGSP828hisFcd7GBhGVmFD9n3X",
  "key28": "2s5iwaUfRYJjX59PUxNLuJ5WR6mncqvJviDT24bZj933qH61SGoQuA2uLWdmycsj1xmnmUvC3giNsY8CGxsCxNJH",
  "key29": "8NJgVCrkVJ2FCSzHqZafDgfyL3egxrmgSAJGLekjM4YtQvEJdFrSwwvf666XMoBMx4tRk4k9uJ15RE6WZ1DnBLX",
  "key30": "Cju1DpTQq4PCCatJ843H5vDUkY2NwsYcG3KPtCH9ei8DrGHpJLqvWEUWQ6a7gpNBFBrkDYePZWucsVq7juCqhq9",
  "key31": "3itHHTuykQhi4D5nVUoSpbwA63EJgTrLTi9ffs9CeZfV5naM8dc4whvZKob5x6MefTGFHudfJ84X6SNbDp3G5nPf",
  "key32": "5eoA1QKTZQexFsQScs4Q29f329m3Mo86MhtHgjyr8ycD977JKP9SVyeTJNTrMGB9pwyv8PypzAajUXabPvCW92wH",
  "key33": "5EzQfxsdJRo9QPcBytBdAufnKnuAGZHoKuXFrzhGVZqBFHrpaTQfHh4CvH1G13HxyWqsAWCwU9Ff8snwdkUDbbBG",
  "key34": "oZZxXGtnY1wAFhEZ9iQLeYuY3Zmdr14iRDdhap6qNxJxDmPn4h9GrXsoNmirVjzUGwDf698rv4oXTshkp9fyvXS",
  "key35": "27M3NkGz33cpurTojXeDsE7XJbtcizpajJgeYRuMnib4etYKb3c9HV7o6K16cSzPsvg5tLSBNY6ygryzLwQacVLp",
  "key36": "2kaq5JL1A4xJCB6ris8HLsMR7mXF2FA6FrFQisamXpyFLpYacv1MD1ckuG24pTDZ2Hk1MmCpzAxr6dwsvqKj36m",
  "key37": "24DhBNuXYdmYWNJzCGARBa8E9qAZ1hGiMRn1eyJ5SCL2WC18cTVYjXeVrucc7P6XKo72yzmNH7ituBd1D1NuDfjr",
  "key38": "3FUt9DHvKTMvr7WGAcWJQr6cfiCmXk1ykpyuzMESGDiAAuSwhf3G7Cej3S2s65vYeSQm8Wz4nBM2mBuSHoeLv9YQ",
  "key39": "5R1J3aT9HyJ6DWEbcAYfGtHg82bFViyaTwD2mZ44DPmhqvwsGdKyXQfFQnfFcDE21xk7LSgRzqGYHQxLqGSVnEaA",
  "key40": "2CvzUKmymDzHCGdF2En4fdrBABEpzs28QsLDuZ2GrPFn2xy6ubJNnWnPMUWa46J5Tc5eg6MfNiGgVwCK141dRwD3",
  "key41": "4L5nfzqxwnvsovywdTkAdi7ChUN6QeRfRMUwcq8mUVC6zMwCDCxVp8MHCtA9gM2dnEVxG4GyB9pzu1YQdotWdrup",
  "key42": "2QSih5oxaFRSJdVXLX6W68bRY6AL5EBxT4N2MfQF28vAbkUTx6FcXf1uFHvJ8DN8C93cR3m85oEfDVvVRzTWGmLC",
  "key43": "29ivCNKdoj7yFTWJyfQMHtdxowmAifgM4wgiw3x8WUiBqrDeRuxcbejwGe2xYeMvCTJrN9Wa62GNRYnHEqjjuo7f",
  "key44": "4qz6XkwoLtFzSQ73P9HnecbuMWNB7chRxymnUAcHd6jSPy6LnvfxPy7WuHauYdMWqqjvM3fUQKidknepCWE4oMPj",
  "key45": "5Ywcbtcd29huGpuuoBwEm6wG3ieUTUQoeFBBU5CaRWU7ULiJQzEUrhWuQ4pK7Eqh3ZwviFgKE5wA8KzVnBTF6hg6",
  "key46": "5uAEHtZRUicAEFVKbofwjvkS7iVCiHEhHBrkQWo9QQN716ArfL59mdRk2vDZvpZjvkMgWdd3mz1ooS6N3wXN7Fz5"
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
