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
    "4RnrfKyV9yNR43u5wMK7pNMNAL88sEMAq2qJHgS4dXHZruVxQu3tr1GurjTsEhSHwQAVyP9k9fDnjgqnUP6zKHCW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CzvGDKKZ2WnWCSVmKy9XrDcDwYnbTiNuu2ycySFyGDpooyg9MsaQSKrexv3XyGuyZmdc7w799x8mi9J5ASQQyjK",
  "key1": "ZrCX5VUdsDwuCMC5a85sGtMCCyYvj24Z1t8SgqvnVvGCnPeZZcMGfyWB9N3s2HPt7EQM8s5cKeE9ZdsTy6Ua62i",
  "key2": "j95AFmBGmKuyBvZ4aUrYT2HY5vAUf91Vndkn61YqctX1PN8LthfrKEfPhSduxZqnCgQZbKfarEWzZdPtEv7s9y2",
  "key3": "9cr83m8QS1iqFAyh3fDU74k56xWE7Vr4BYmxdxp4ZxSBSz1ypDzuEoYhgy2av3S19gAVtaTDPxP42EZzWqTYRmq",
  "key4": "2BTYKgMMRx8Epr6Rpy6ZyzE2av5TCma4vYY1nWnq3w1bEeCdVYJqMefS6DZE8dsU1RoPkVkiTgCDMpLaizXftPJa",
  "key5": "5h1QGJTLdqFp191sCBSdyhwaw6HttN4Nzh1g8c7RB6v1DqDhj3LCbUPLPXQuay1bo7LvberHzNEWaHsGXSAMQbhj",
  "key6": "qWUBNijw14Vfnrh1Y8dL8RT1avRTayFppyAMmdAFG6AkHEPYCZDCr3uaQ7bZT7qysnRJKcPZ7B93MiF41kUumj2",
  "key7": "U6kiNhooY8bAAUTCW6tgkUukFrcNafjHdVvau5mPf1cmQZqM3L6Y4ggMs6hHQEcec3KQmrQVkxxi7Lm2N1H5Ryh",
  "key8": "3T5CKneUQnFiQjN5PPpVFA7wtrEEdGSPsmLtKnQSM4wWaXH9CYoBx8WLLtFYCqwBBsN6DZ1vpQrrdJDLfsKEQq4C",
  "key9": "5E4FPKxFVYjde8RseJ5N2GmUj5rniWtCB8TuBDD1r4H8Nxz93NjH3zdANvSeQAWn3JjsgzczP3UMqbPyGgSZqETA",
  "key10": "oVpEXQaYy8B1akVHFZXrZYjhDA1oBW4jq7FZmqhhwEXxxpiwFANfUfhP239zAmkK5ugSgh5WJUdYU3MKJ2fDB2d",
  "key11": "5bqBwZbLHkGj73JdD396xtc56dawmBKRw3pPtBSVGDBLgaBamzxMEedFZnmjEpQZ3Gw7b4XsFY7trt2mVCWmorKS",
  "key12": "JLDbrjbBrBuSyM7NG5Q4XVwvsPq6jjf2pntmBXdqQ1RZyyXMZQahWyBiadceq9USACvamaTbyiXKHxqjfY3qqRV",
  "key13": "3FxFbWVVUJtXN4oAQ14M2sTqaTKrmHJ37NmcjtERXw89ftDRLuw3pGke6GYh1M5f5ZwxrdZWBmnjibQqHuTJ3FQg",
  "key14": "5FyZhYNkBzuH3D5Nqq6WcEanLQeFqBBy4Q7iZZL4nCG8XZLZWYUfAbexPhJb4RJNMhtNhFpz6KamxjheMKRh91iq",
  "key15": "4hjP2HG54VoPmct6JbEsmEimqV3WZkFopunci4uB1MzyMnXYD5eHXXQWQ4gAc5CDJ75me1wBGm3nBp22Hu1eD5s8",
  "key16": "3eLmWu3NrLNfHcBYTeSSmXhURxhuscryJm4b3XDbBB4KLhXJmHRj2a4esu99fQgGSSh1VgNrmsY2Vte5wzhdAxU8",
  "key17": "2ZKHmwYNwhb5HbvU5tSsTRdveFRQNjCmMgAjyXm5qVj6dQhecRMWb46A98Y9d5zMLnc8eJo3GNkBesqjoKXiDiNc",
  "key18": "XEZL7U1d7QCXtezHUys1mXHXwuRyMmuJasZ1d6MhPx4nfocYZHiTX2CzzUXhg9iVD32vSggeAxhwDRrS1eN4ScT",
  "key19": "4ZVCxaU11FR3dR7WFnCn2y4mvT3Quce1oY7JTjxes9K6f4rwLMGE3ytEKhF3jPSGqHtH8SWKWwYwTdVnxF1jMv2p",
  "key20": "4Z6yP2dYHZjkjqaXEhcST8Jx9eXZKYWMWCLdAcjq1Y87QTMAynrF6omP1UNyX4245E6wYGi7y6KNNoD1zoBJY9hH",
  "key21": "63gdzzQTb3HAhDVpbm14wpbkCzNdef3r5J7Njtn4B23mo99BA2HGnhHXpeEHeWu4CYsD2e5o8Rg6mLK7rtR1B7d4",
  "key22": "5sEq85jzDCvvYS6FvGBxMK4aUGkZiVNcY8z3Ua2xCfKaswX8JMvBVJmpL5tMnG5D85MsgFmGNf9YeSvTwPqFd3uk",
  "key23": "3vE6qXgKcUsxPDdpCAJzCbT71TamG2GNEDjMS2e8z7dh3rDHBL8CUobYentF3VpqS2YZ8xtJqq57APLJSMkaJVqt",
  "key24": "5YeyCvy1H7gowo2CspPsfDSB2MtN7wwXieqUPUWkwH8BSHfFxKeawYBYZjjZgkyEuxSUkCHm2Cdmy1o2CFE8usRi",
  "key25": "3RJ3erfZbGD2wTp4XkKMwVBP16nTavHurKTpQT4fyQZZQABKxkcVZC4chhEFVDLbMApFdQiUp5ALyzCoanwcVj77",
  "key26": "27EfbGjN9ocbYkaaS7qSTB6qEBjWf4EweSeCXfxLqrfWDofL8HuCMxcdwyh1qrQoD8VpDs8ZRyn7Mx3szsSqL5eq",
  "key27": "4sk1WtV95NRGX9oeuL19WQdAWmjhb4kayR77wgdsR8vMBn6UTfTBCHiKoqSdN7r3btRxdxHT85NEN5PNG38CjBfp",
  "key28": "3SLcTZ7WSg6Kzp4gyeQg38WbDRkgDpTGf4BApPVrtS6aqRqPMn2x1bgqqjiPNfF4ZZRYbFB8dfzSpyFodsav9hTu",
  "key29": "2LMK9C3WNHGgSf6U4M4dT6EoScsFq48ejkjYNifNaKcYejJ8Z9kgzvwPCGJYNhWk6VnEVQZbaP65WTTT6desxaUs",
  "key30": "3NxrLjuVxEyXtLftwombq4MqwYddAXxrZmsjk6HaVABstmFx7LALecuN1n1zSmcFuMKvAz3L826pXvyj2bMd5yEe",
  "key31": "Q4P1v1JdBh2L2oxYMf6w5SugPQCdA6tjfcMBz9HeAqhBzwtqhNQjk1LefcU9SP2MQzxMqBiFedtb6ZbyzybMtcP",
  "key32": "U2xA1YM7gQxdxWkBLmg7ykVad7kow1df5tSZzLsK4ZJ5VXeS1JtvaDc6qwKPJfaMVcu9AHPKXWuRUup93MGAkaA",
  "key33": "2tkyXkdgjcWqhzvXBMdjb3dVsZcZLgJoYLek3XRhREa92GrKYL7E4jaH7kAhgMT6e2LeRBZFaeVczTrosQQmgXUw",
  "key34": "4SU18h5fow4en4mdzZpoRa1AqqomtnVnnSAkSoVoPnC7RHfpMqUxWBoF5mYaLFbD9FdNhjUn7qG4V8cLKGgMLvYc",
  "key35": "hoRHokwbzioFmv9z6cBsLPsDJb7QCiSdhcEuGMNxpaWzjzPxCPFBgWRfwoR9X9WDFwbeNBLmRZNEuQtR6oT8Dkb",
  "key36": "4Pgbewp1jipc3NJD6MpBFhrQTsCcSPSpxvP6tFLvM1TU8GJZV8bCiPgRdw314cH8keNiVui4esrK4Bte8z9JWQ5c",
  "key37": "5nnLfiVXhgBaPEKco2d52xeqkMsPd4HBptb35xFZWLNFb66c1ZGFntwTz8gynZnZ1qU6ZA7XUX5zvtVgJZ3TDF87",
  "key38": "3J6iJ7K8aMV5uoFDE9xjXqYd3BdqjKgEDYTgJpWMD6mair3C1NjHGj22856jcWrgLGtdVhJYCdgwXwpwBKTd2MfX",
  "key39": "2pzvUFusFyVM7J8uhZthtjrEZKWr7MmPyPy5LqnPXXQCPe59Ep8pzitCbEhQ5SjmqWDW8kveXKudWmks4mXMDuR7",
  "key40": "4gHrMr4UyU9VS9nkzVa7W5bbreoiT1uufH8rQMe5jGHd62XgBPpCuUbqCMf11zvPQ9GLztkV86thbzx4RdESFDhC",
  "key41": "31usRJdiooarGojX6cdBkDWPKAEHxBZoXhqHiAnZ1WQamxMPHxKZa5NwZqL4Ha8QjwvA63B1yTypZmxUkfi6DXbR",
  "key42": "3fiabazeCmi9HN4AhVhQp7ZdX81L2oSajub8gYJbiw92jkigYAVLZvzNVfuAZGfQ3qrtyE2gsJj7Vyo4BLeNq5rW",
  "key43": "3ERj3tviPYx1NXpTHm9kbGT6vsTwS5X5AcbFy4o37ToqQeNVsa13EkCrWZr3kfd4UddFpS7hd9buVPa76MTjSMYM",
  "key44": "2MWVar4t5Z8U4YEnYBmNCVSE5DZUcnGoTmC8ZmvpY9W3BLMizRTpgx9kn6KPd4xqNVZ7NKQQQy1dqNasENMRVFPw",
  "key45": "hiUpworzpWP14C4RduxsLQDn8wLRJpQM2gLuJsPnXYLbXoHvYw1uNoAh76yt3EcrVrrndMbdm2ZA5ntjAay6sKW",
  "key46": "5Nj8JjLyesEKyznWAtcoeJLWViDyVGVp5hY2wHG3fCbLnpQ3EtHnCDwuh2j6mMuVhRMMNWoMMMB8eGJpkaXNEMyq",
  "key47": "33E5FoFKc6YhvuRkLNmGYhG1MBAsKvN9FaZxpTGDXNgWTuXdjfmcbCYL4C2tCfY9HMCfF48bnxwFAsTkg6apyja1",
  "key48": "ZKpj7ZtGGTrGan1Do4zpwnrEwRbmjU1DUGE9zztviLrQzimUUWThqWJPPgYP4bJPU54zxfYEUcRtXtwJTmyU9Kx",
  "key49": "4hywhnod6AkxsrRUv84Hf6h7WzcAhMKuTntZewehcNHhKqnQgo5YiaTD5xE1wqp1iK57HF8Y6C8BJR39W2HPqUB4"
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
