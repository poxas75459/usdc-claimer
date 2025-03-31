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
    "62TgLg37nVq74DSJwNKTDLvb9m3j3HWbpWYxT8L7Aef3j5imiU5eFyLtn26zpThMAJ6aAFLuEkdkn7UxyFpK5TJk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Zc4kukNTN3ZdaooM6tAA8VpnsimcwESJUMyWqwJTZveqU9k67LM7a2ScxajjzeBH6uGdkF8r4d6ybsHkAVtQ9ee",
  "key1": "2mDmcKD2faEgkpnXtaVY8iZL4zvTD2cbzWf7JHejTB98Fx5z1rMNaSrfZFK7h3MWF5emJKMo3AwWYTZhMxbW8ciD",
  "key2": "3c7haFWeVcZnjnBSARh54WWqTNmPXUBP9BrCsHSWCgJZc7Jrk5mXisrGLjT942XEPZo75QsaXZj5BeFg3SMCA1cM",
  "key3": "2uYAkLyzAMvDk6tVYu84safsva3StawxVW8EZpSH1cZAmUDvx8NWxdV1ihH1vmTN6n1XbDAYJVRVULZakNZp4Amx",
  "key4": "22cHFiY7kcU4zeqzceDvV8kbzwcmVnRoiJgK4wsCEqUZVKLjZpFweNWQYZxvCCfSpfCHheUyCdsVWSoTu2fgJVuH",
  "key5": "5UA3KWP5amWYghMjrF5T7NDjPpK4nqjifv7m1z7h2xgwkKNT1kJ3GW1pXuC2UoJyhTYV9Pteb32yFtpzgrQk9kyt",
  "key6": "YJNKHLgyVzmKdFuSwapf4RoWyQg4cMMTKZwMngMkAVHorNPUQC1STwzwFCE8WTv554fq7SF5nH4u1G4Y7w6vnTE",
  "key7": "5neyDRjsmiNjn3rdcpDTYo6T9emT36B8g3DVJjE3g9qkiUbdEWMjuC8jeqTg3T5iJe5ifhxs6gau2HsY3DSuieHo",
  "key8": "562FsgPvQJnS1GRWtsZvYtfQTS9Prj4ftiU2yKSxwjb65F4k5GihnkryDHacH74PX9hnBL3dvFqpcmqjhiERp1Xk",
  "key9": "65AL39wgTKy1yX2fjAdvj3fxXtAxBHnW6oQBvfMZNKLXqni6XtQqftkN7QPaGgyE8wYBkBPvwvfgtx3sU1QDfnHL",
  "key10": "2gY3tQCEgX39JReCndHtarzyAun9b263xihYTpPnwRnRTvwmtjLaC7MoPYJybqrhw7N2EM6h1RBgtYrjv4vY4qXN",
  "key11": "44v7n435Pe56utaH8UUUfzNrw6ThKRYLwyQRteHDN7mmM97Buk81egJcuUVj7RZvFaf12FDLcvkEkAC7t5vaeKSJ",
  "key12": "4eMNowXuXE5eAhzgoxkQJggitBKztauDHCh6QWRe6EC6bB28CYbXZUpM6TAX5t5hfAqK9Uu6yizMKV74TjMm4JQv",
  "key13": "3WAzrjsrN3qsDxpyUiPUSvTbHxsTJ2kpXUGmwy8etFY1fm44gsNvKtXcXD3nGv6QRsc1tV4rUtgtwWaTYzhrkXnf",
  "key14": "3Uxfn5o4L6YGWVXtcjgmfUZu1Unn8FA2MDehjhHc6w3NKUCAaogScDQWwe2abvPohTiCHY2tp3c9LWy96bAKFs8j",
  "key15": "5xs5wnFqexAUUPoWYtbt7UugrvdUSZx8ceaAvjMNGPH3jMdgmNKfCmnPgkDnvXoNXLUM8fP4t5dGLMgWu3VakAaa",
  "key16": "3jRHkkQbEnJi6pAnL65LSascunwcmPvUrRf4DNA3SXojxcCLqs1M7NH32m7kG3t5TLdSaXPd3Dr22DghTFa4rjRe",
  "key17": "5mnyJ1MVovUDfNuBoSJQxCFaGKntF4wi6k5Qbxjufxy37N2vNMTu2HtvaSjNEdcfmEP2sLeNSDah6ez4PJvB8TR7",
  "key18": "5Ax32MPcceCKWpxp5bBLCySJwbC2cr1SWtyS4oq4KDKu2jamWxK2uKsCbdrQcZMUoiagCEHuMmp76E6D3cLt9grF",
  "key19": "3dzvY8SYfJkFdowhuHEPu6J8XPXAoLxivDUoNv4F2aJu3RDTPW3bshCpQyLFz2ybbnxC7KKkGoSdfg8DG6ZeAWGr",
  "key20": "3bQ8ntVQDnMropQw9kXhhoJHPYXDcDHvauisAXhsnVV31mQLgBQJg6QrHgy4QZzPMFmpeYneJpyKSjBon8QQ9Rhy",
  "key21": "uNFZcRBQS5aXgwpSEwLm8zfKg3DwszN7kKyT7ZsysDbcfRHUJDTCE9rKy8MvFhpQ9PJTroArCPeAnYto4qfDFkL",
  "key22": "3JFJ55By2G53ufZcxvTVfsvUKcVJDyXPidgrFvYCzv8DuVxjfGriB3AhneaGd8YjiDYkKtLAwuEEdxyWeD7bQrei",
  "key23": "5kEx1XcCrxKnsjrJxNiKwAi8mMW8tmkdzoYDPz8yZ43EsdZ9xZmaTdUrw8aCZWj2jJdUBiwSdxeWpNfTziKiQB1n",
  "key24": "5NXzWoPhc9zuQjk2VZdWb1Kc522Mqhy6nWhqSX1PL3yADNt6LLBfE2zDbYBaUaBnpA2dYM2hHdFcvpFwhBswcPtL",
  "key25": "5NMdkEKzyzxkZ1zuNhxdXyq8P5h4XqM1C1oVALFxgKbv85H4vUPQ9vLkAZexUKTQDkRy8SvQMixvEZDQR8uCrFPb",
  "key26": "3dMQXREb16V9Hms595c8T9Fhn7cwMviAAgZCxTN9LMrVRjVbWj5jpxcrWuoTpqDAAFcN87ykfXCuGnoqwDWCPUa2",
  "key27": "7nMjYbdgzm1WYEaZumd5JEHUhAiFUDLvyNq2bxgXqaugZyE4fogqoHCzrLHKTWyqn9yF5UKidbtJLaNJZCDnC7i",
  "key28": "5Qh8y6KRMsNbVsL4wG2vYgz46xzu7Bf8EfqnNvk7nMA6ktJEqEXm4gtETeN9dm5vpkyA38RfgyCGTCyMNTqYcx4c",
  "key29": "2mPmpqnLswvdtnAKUQNhLUm15mNG2kKEqv14rqRGTSqaL2oRonWhgNBH8TaCiJJxJdZx2ER1pztry18KBy1XoqWY",
  "key30": "3wwcemdAdt7P4XQxxNFyQr295fGTTmTzq9mn38D4YBt7YZecAu6VvzQjBqN7fpgD9gCa8nGr7xaQsNaf2kq69pqp",
  "key31": "4qoTBgaUyTqbHvy8HJK87cMhSAewxyZEvYXFD8FKzTqZMMwL4Hnn7rXqP6W3eHR9fQYG4MktV6piSeSG5WNH6iTX",
  "key32": "fGtEf7Kvv8BKf1fZuhsxbXJ4KmitgSCgjewaJhpxijQbAjBKwhsg61ADU8KK6PwLX1qomFJxr4qUn1d8cA68C6z",
  "key33": "5kJPy8NbRRHizEqGDMAwWHTh5U2CWH4XSyGTF4tU1ECFbqL7r1LtALkvbp7qvzHRwGSxNxCNxP1PteAhsEHDraN3",
  "key34": "5Hbfrhqw4ZvuNddBGfqhdZa5y87PxKcgsgSVEoy1cAksdKtHGF4UTgJDQFLeKsDr2q5GFnZzTRffpuLeyYquS3F5",
  "key35": "59kUPoZytU3hydfhhkdSCwuN39y49NF94PjCDp3Gx3zGgk7MuGbndJbGhVnnKcjHosEAzbLAtLxL2woQJYvuv62M",
  "key36": "2Ng6PcmyC6oyzfDgoPAhyojUUbbHqzZz8EPqSrXy5KpftXdjSScCsDxK9VfvgzrmGE3FucGqvTbKa9CKJL4szvVr",
  "key37": "GTuw5gmbR5JokxUkaccYU4bP9GjNQQQNMvfeGhoHq6JXEREQBAa4xWT2qzApW2YS85g2mjfWGrqMz9teYM7v17Q",
  "key38": "3UH8ZmECudTkdLS3XaJXVxNwqJMy2jqFvdgBzxnfnwVgjYg1L4pJqHBbcoGvmJ5Pqj3DpwvpBNSs8sLGYaUEr2mj",
  "key39": "3WDS8kNBSM5vubH19F84L6mLTzvF2adZ1b8uj5emt1gGoMRjniHJGJCtWwKAJR3utTVz6A89c9uGJ9g7TTCWeCEB",
  "key40": "go8TxVbiqEckqCrpq7AmHUBHZSpWeXwF4WujHd4uC1BNeKYRcEo3XB5qpthzRCjYAeUAvB8J3JsCBkpo8fKNiFk",
  "key41": "hKk5FiwYwwuV7YNp1USJ2bW97UsQ6A9dcQH1VwofH7V5RbmXQ9mzGq12Be2uW4ZCuGk5BaRxvS2szLGc3BZf4SM",
  "key42": "3jb3sNRLUjYMSqHG4su6YnULmWB7RfTute1Q5KQ91KUDGqecPkuWa2X8H8xp1bFvaCJ79quZU97VCNdh6MopYpaP",
  "key43": "r872FcBY3H6P8WZGxJT11UxJxNpcrGxfFFQoeJB68dpfq1BYeJGQ3rFfcHCWe4NpMW5j6hSApxPWSsdobejXYxa",
  "key44": "FhV7u3QH77faTUwnEKB1updnuhFWQ4xcu3etuCuL2mQttMyaNxs4YWMm3diz1sQYHfPuNjF3g57aTbn8fX4CtVa",
  "key45": "53yH6t5Ypss2ZVNSYyJiUW5vtTsVfpcdE8YiTEe9rosEsqDSdJfHdqDR1moDSukEZwp6qNQtwzzshMXxghhDpgmQ",
  "key46": "5VVWbJExHmg1kMCTzdxYnocQZttmVNyA3PvPo46ocU5McWGtB69s9KZL5q3xxASjYeC2Y3srKpaL5UT7EaPYCcov",
  "key47": "5hEeCiyX8RL4fnShzZCMr3pP4wroiKdrn2aJ88dwQ6PN3xtJnaEM7dhxrdoSgpm4NbTefnWZnr1iauePiwU4VfVP",
  "key48": "5YYg27BgV2egWA8CUA27AYh1Si63XWHswcRzRktCFGgcVFUyrzXGu54U4HYjV6PQsCXyiY8iThF1Xkj3LVZSRmkR"
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
