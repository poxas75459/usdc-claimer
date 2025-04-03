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
    "49Lgteat2x9hsMZDtbZWHfNNePQbXsFhmyfv59VdF4w1W9AKKhi8k3fVNXvZa45LQcSDgjLtMXSW7Wtxo2YALjNW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZuG6npzfKqMNvjCsRkgeo8HWXKV9koa2jwjwF3VqeRijVZxi7ST9jBt2Zt7X2wzBiwiZZzd2SnALsqM72Yj5eZQ",
  "key1": "5VjQ73Xdbq6xBHH6n1hjRMinXXgCMnDw5PzFKwyhCHy3wHGDX4eMozJoVZdTmk8Akks7U9Fz1gURALC6GkdnGdZx",
  "key2": "2EPgmqcDMHp4icFnMbNdRNWWJYJL8NaGjfDCzqrzjhoc6rLBNwWuyNsiUBSuUCzDQo8vw74DC4z6hXMjFBp4r4su",
  "key3": "3KcHLVEe6UFKRSVwy7EvvLCAetXZZKxfZhT3FAs7XQUnTiqTRf8SjZMg5X66aKcXR8BVqCpHvi8envy3igYL4cEQ",
  "key4": "3To3nPFe3YefGDFTbqwgxMmSvZYGGNGPHLEUjFH2aGEHmURNn2f5B4eWTZzA7sMAinS45FG25jYEp48tx2or6iqa",
  "key5": "4m2e4Jd7KF4kpc1Th6zt7z3jxsDTn2wcgyGRhhnpumeswPEBw6p1SNsLKELRiAss5Ksa5ifbQhRbaSjsoCNFDm5f",
  "key6": "B8WQEDjXv3m5Y4SedLrzztQRU4sVMQqdoh5kTKmiXep6BSJn8KMoCP33TMhASC4YMk6R7HjqnwjFQYzUDEy9JAW",
  "key7": "2sCE5UZ4vyGbwkamCDH3oMHcnaBUswRh8xgCBLyCHxi5CQN9ztvuzt48Zzs2dPpDTigQDBAnYvvNkFYAcLmFaeNX",
  "key8": "2q9btWGUT49ZV6VWAANgzsrheAf1N9C4kh5NQh6QSAzBBrU4edqiiCE4wEtHMLsWNQdhHf9CoG1rrCvyK1NEVyR8",
  "key9": "57ThMWCEPjuasgxe4PZtue749aVmTkH2S1NywF3S3EsbLv5n2nyLZEa5cJoAGYU74WPm13dQHdJ968ewR7wxML2u",
  "key10": "54nMUpsdZSxexMW4DDfHmbt4hbac1GK31jinPRVwjbsvAuTmjkvGRF2qu5YrHUNxa3crzjhjPXmJB7vudDia9YCP",
  "key11": "5ywe7cemKwe3ommvm3vdJCqTz6zB2N6hmtG61WEMkLrC54UyyQTqNhFvtZLXYojKuxkn6dsfsiBsdkfWZPiYM2Mq",
  "key12": "5QcJ4UZFUZTmC1c8zKyPJPUpqcswwwHtrhrUZMa3ApPPnovsK26Cw9ygnL7B19ZGwuuwb7JTzxizxK6QR6APfFPu",
  "key13": "5ABTbrSvY8PqKreWJ8AoBYtqhtkqW7isbStjmRKiGyS9DCfzgWM3tDb7arpvDHM1AmWQtAZQhak16MoeoMNToRpW",
  "key14": "3Sw9HuxLiGwFNSsWq2SXxsmYPzbHe9P4DzFF1o3s7srV7stjqDTaAdY4iajzR7BytrAbdLarBN8vYRq68nJ1mdT9",
  "key15": "GSXz9oUxTfMwuzC6heajcLTMgpRtZJ6yw45kExkMLrSjgJNKiKYaahWqzfihzUFPZ4HGFZh1grFRUDjvtNWXF1S",
  "key16": "2WuLYCWq3oeLZbJAAyNEGpy5wgKrCAspwXK36GD4ZezNkrao9XSrc1Dpzzcxnjpvf37FzBcGHXh6KXTLwgq5FTdG",
  "key17": "zNP2ogEVUdJNHQkAzjKXvPyc23SvVNJPaWQkhVbEzmXRBYr6EPQmh4TeMZ2hJV8HPrjMmj8tonU6ziN9SPdjvVz",
  "key18": "66hGCweu74AL6ayhRpoDWZB2eGbjxH1maMF65LDXN7XwxqmsydL2ksKSgCNJeRzk93Qj1dp9CHk1aVSAxoRrmSVN",
  "key19": "65WaQy2dbn6D51Qvwe8edP1ww4uGKNqXBT1jHFx3gUS2RP8DtLmjbCiYGLxnWABqKQ7PtDCGesuDLzyJCiR7pNwE",
  "key20": "48odJcuZj7SKGT8YZM9NeYNNPpJQkKtkUGeCAhGCdk8Lea7AnwFKtfaqDmmnZrKyX5Rzh3Esy4kSBUdDFuXyZ5Uq",
  "key21": "2h6n9LG1GckaBcRaPKVNKqKtkKTRQ7a89eGExxw4NUEyjjvp8JtnzemzRBcEiUJrSyzVkqsJ9sRjjTjsjhSBY4ya",
  "key22": "69UbbQNsWy524CTk6YZB5kzRK3518wNdrZQr37pxaDUgzs1kL5SRoen1zRnRS1w8wiVMP1PCuV2R3Di4qA2wme4",
  "key23": "24AeukxuM64EWES5ub3iHBGEyG7HpEdrvaRy5cReBEcKuiaA3rwysKtTWTDUmrafdXjhwKn6HjLts864vTpyMkDF",
  "key24": "6iELBiXeEYtDXfQZYjCM9r5FDAKZqhfx8SRJVfzYzJkfycEFAvfKzTpjmNDv26CnJ2pxRhPeVRNDe1K6tm343St",
  "key25": "D7VK5YAFrxRoj26A2QxPT2GHAhpt6Jf26mfwC9y2C8rW4VnQwZzuAq5oNBiH1oz9N9SU8AZeuvmHaBzMTHg58og",
  "key26": "5cHWX2C7S6v4hVx22oZCztr8KQ7mx5otKzhJveE5wJurPDPuTkYuDNLYVTbeaADbmuFukyFG3aKw3koonURkykHv",
  "key27": "5Ap2UugbgsJkLnjnKr7gnBx35uRzzBExxMXwPghtcoifPxzgLbKg3ufoMFyYLFu6H9KEkM9qqgnaFyQ9qSbxqpvT",
  "key28": "4Lnh73cAxiiSahtR7Ty8iMsLUE7JbKdFKwSz4vGDyCZ9pufeToPDH14UAS78hNzUwMmJHfwXofqgPkGRXng9fHFC",
  "key29": "4i2n9V7NHEH1djuBFwSaCBt482xnCN9NUt76dmxqSnAv5yskreKXANgFGYq1briuP1vmPEmdUFwMsMvVdtZZaqWv",
  "key30": "5avfGgEdWKPWDFRQogS567SbaXN8Ko6B5NPe5Dnr3KRTx7EoxHk5kNR4rERbmUDw3FhWDw8GMJnmTWMjJcAtxXhQ",
  "key31": "2iDghpmyF6uuDxS6csjkPUM4Hude6yzfU57WaBCfoyEWq9cAYP8aWXdWtaspYMTc7kZU7BMt8eG56jeLLxa31u5w",
  "key32": "3q2aTcQ5Xx8unDunqw3erNRxPrvuhhAMvFfa5BfK9nfN3ZD4V954BFzU4zMNHytY4D9mdnWwftzNRifLwUgqphRg",
  "key33": "5tPvnE2ocLFoPgUM6ihmrLnSBsxEz6BiE4zReAovSgGvAmCRH7EHRmCwiDDw5h74mh7UDKBttFHxz3w6LYbUhcfM",
  "key34": "3r694JFYjPaiYkt9rdwNLysfof7fYAPgBESNFHPLaNN2YjyHMntkg4gur3z3Qh5s4pbidgaePGNUCRFvNxnqLUZw",
  "key35": "39G3JwPYryZt6dyNomweAfUX3tnpjmS51hDRJncbPCJSgoZP1k5SX1RAzJmspbPpaGBWH4YEVL1DAhvJ6Jpth7RL",
  "key36": "bXs3zqJ6cw45t8ADt6PoD6DR3gcP88c23ohUE292AxcGoekQroocmuDmamRtT5qXqSznUssPd3CEY1TgoRBWEs4",
  "key37": "5mGLVB9nkucQSsfbANwvcXb71RvMbDBBqgdA4SSwNtfjKRgT1ZDAAyqyjt2kAnnwcUgL1p7JiP6krPSLiKMez17F",
  "key38": "393RR31A1RcsV2ioL75D4DqQWCZGnveP7MavjvcSC715gaH8jyCRHQcQyN2Je3t7qY4V7ENmQAufoJzxKsQQsvVT",
  "key39": "23UrhFreZ9LAbXyT41ndnUdpKN5dmmRN91BRMngVEnkUq4kw1FfF8rUe1CckUBWobjRYm6b4J8ymVn4pRdWQi6TS",
  "key40": "5WcYmxsZWCeBFeCmfpWKwNeh4miJuu19xpTHavUAPudbk5mu3G5wyJNRKrpuRUWUEExtzeNuRstav3aTgZsx8Jru",
  "key41": "3Y7PmQiav9PQZNqdC8q249rppVDTYz2Gmdhx2PNRmjtYT5s83piKQaLJWv2zc868BdcJnNer3DYMUJu1CJFxFfrJ",
  "key42": "GR4ZbTs11FmSZvMKMdaZp9xuzKbNcuEpW7uqhGC2XcLtV8Sa6p2QShnAaSRuuRUNgJuPPczEjf5zXp3QYLoZtfQ",
  "key43": "zF3HD45YGzrdDoq9WtGkRGLogPRF9Z4tF75fP7CY2FrMmdKTtQpG3KJFj1tjFU36E44oVngxmcwqFE5xa8ukKqd",
  "key44": "4o79prvCjYmQz8d6JTnZzqZRPhUsAAoAdCCZMc4SMzXdH769xX1uso9ot44WBJSFzMjxa23K2DEpWGkP5hhC5HNa",
  "key45": "4oXzu4uVQStJ2B6KnJcSYCZ4xAaA3SGeKf9mc34fbxkXwyUQXWhNnticC1mEYMoVaQwvxkLNi8wKTQHZwVdQWdrs",
  "key46": "4Lycjvvef8UEGBd6YyHSmJ2ubDZyy24GpXRFtvCF3NuTc1oFkvzRfsCVJYeJCAAWLv6WmZNjYegqoc6nG2DTqkkF",
  "key47": "SySzYMSFQtkj1H8r8hFDgkrPuD5E4F4hkHPE5Gco54iWdSNL9Eppt8ApHQbAFcTUF1A85hvkRNtXgdPHsRLvkxp",
  "key48": "2xYe3Ss78ZYQPU43H93Gj9zXPyNKULvBk13Qrhgxra5Vhv5rXuTZzX1v1qZE7RvN79sqDsmxumnRcK8fTG35BkvH"
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
