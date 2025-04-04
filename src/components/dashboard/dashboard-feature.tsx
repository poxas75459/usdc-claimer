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
    "41jCLAF1ftjPEvNRpCdETcPfBQCeFTmYtbFmXsUbHd9h52wgg4ghwjjNkZ8nhWAufKsMaMQ2vhV7nKiWBbHSigy1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jwKs5wQj11c6rUwUuLMKvb4ehAivxK2r7HQ1GwQ5pQWf424LEwTJwHeeLg8Ay8UjqcQLWHQh3uYqiTj2MwXjMUh",
  "key1": "4EaYiVzaKVHb8EPMjHkDXdZ43FsBwxNgDHdjvfbUdUBQzpocm9NgEwArYcVfm8xy8NVkj7R2x4spTxdJuYsB7Whm",
  "key2": "3GodWVAxvG57RGu4WZJNEi2xtzvMD98gJEgJbZ4gWwGKeRtEwM6Mrcwb66T9gLD7kcwKxTpDUhj2ghy2nUMyV4nY",
  "key3": "3yLq2u1aRABnykuM3TFUdCSjucbY5bLk2mB84ySzGkv1Mb4dnM5W48TqKDg5NcT4i3CAJjKSWY4t1eG1ziSAxhGz",
  "key4": "38HxTN48fCRv86CUNHiD2Hc2tsMWxXTJbsFjZ8Cp9dAMQzqnTLH8BhLL81pKtAEG9RNGUdDHL5V1Te7VyhpnwPjn",
  "key5": "5pKsQwPMXVymdbtsyfJaELQvida1meduQhdetoeHGzbpbEzZCRmbZmzpQuJBH321dhLMhNDZ72Ddg9V1UkQRTgGq",
  "key6": "SmdzydA94X2YHJLXTjAfHXsMU6Lcwm1tTJsZPWeRDC8oVYptJotxponGFWgmwfWK6ULi85WSSCWFVDzpNipSXTp",
  "key7": "5kPeneoFQMLpdXMY8Ky5wL3j35tS5SccLvtijAj3DN1VFpS4r5Qt8HesTYKYF1HQSj2zGrWxGpsRxehWcQfyxAgj",
  "key8": "64QZhedjHCnbHaibNxQz4KzFqRsAkPLMLh1y8pvttMLcHvoQ8gGSPPstsVqxNNKC1FWzNgVfkqPurCuEf8Zvt8fV",
  "key9": "3Ur84eJeCU8QLqfxkAiGKPkj1aqifSvKT26iDmvVqgPQJBzyJNMPhdXZxZzKpkqQmQSBMGC7GmKgaWCZ7Lwpq9hB",
  "key10": "AWjmQiSABr5UJu8i3SrN5s3EBM4GEkJQi8925amtgK4DyHD4zZ9NkF5DJi62tb645J16pBTrH7LuXHDVtyZpadz",
  "key11": "A5tzixhnpnjhccYr3ZZDXUGvaz9936dbY6kC5V9p4saevpaNiyPqtS64ubmndoCqrmHZxtbzWm9PL2tpKDZQYbo",
  "key12": "5dZJDKaQVczDt9rDUSVuJzjauXnZ5Z8yE1hxeX9X9qwKv6H5BhhyBqDWRuCG7WdAnDdms1PLPcR56GfeSYAwyop7",
  "key13": "5hLnQtNQX9fujhDnNfTvBoNA5LnbN3FKebbcDU3mNxWQ7vWUoZ5FrBd4AFRqD3bj6CFNKtc9wUjfzJJLSetiipyX",
  "key14": "stNGtkCX6oMpjAdQB5RqoeETmaKEpMD1ue7oQ7WmVZfWRKo9cqSPRVBrXVxnuBkNkcap2X9uyKfXx8bEBaLcAJG",
  "key15": "xA47kkkoNfb4hmorCSkC7AXbcf6YK9kHehdoBTapjgLo6PWxCkoRX6PkyYvR8d7zt7H7y4Qo3Mg8bjwhQj18G66",
  "key16": "3fyDXMSeD2LST8CvV8yeKjg66bc7zSYb5NoWyEoZASvHNnESLe6Uvq7on52S4KiXCsFkd4q281yLyL52q8nwZBrQ",
  "key17": "2ZRcWtqLQsgmoC2SaiU3wKxJ3MatzG9Yi98z7UCxDRTBSheHnPZ4fmfmf1Ca9AMh89Uz1JUMyezNWdXPoakzrkNn",
  "key18": "5fvHJXho7bTEMynYX1TGor1aaon4uJhegwHJskAPGRqmzmBpfXLpMMRGsUH8XkgnTfXbhJR7uUgup2p3Ghx8VruR",
  "key19": "KfwjH8ju1726UrCR7fMtfia3NNmyQ58HnTwYATzre1ZDNptNqQDNXPFujEbhu4CbJuUJHsFfRu8L38QbYuVSR96",
  "key20": "5ao9FRevTHZXbnB6ELemcaVaLhDPrxayuG5EtVVhvheGndnrEQ9wfKMRxsNSksJq7JbL5isn96mwsCbg2JkWn2Q3",
  "key21": "4VdW3eMM2Bv9sjZKEoRbXqF1GZmTsrpf6kekCatBc3WL7HScpmEf3doWeg2xeWsAP6cCpsTeu3GHvpGbbPWuSRA6",
  "key22": "3Np55AkCwStYpEQsF8S45j1mAGM42eXvLiPuE9bFRXYVS1gtJ2Kw16EvL76sCL8emfAEubYHXRqgwsEaZgGwZLYJ",
  "key23": "3zsF2wb2Psypo2tkte9wFUidM6XpxwRShWJPG2G2XMCTsdpocvVFPfe22o2NaQAfQDRAeUU8S9xpJ8zdUYRtqfdG",
  "key24": "2dbvJMonwLGkzjNWjHwDPD2APrcGdhnqyMC6yF9Z9KoxXcSQPLPboaJ5bwLQUmTPKNGa3SpCBJLxQ1VWvNzuX3mv",
  "key25": "5iQ8h6r4fppKPrUBTXYydroNsn4bMgjPGQnfuvXTFLz4PBd3vSbNoRheyq3H8h9xJbsgKiGwV12GzwbTAGK22nL1",
  "key26": "4UjN9QtPHKWoaEonnS3KWfqcyTMPeCEcJEXTxqnp7cusRJp3NDz47wVWbcg24VdUPxip1o5sczWx3iMFGrLCFiHM",
  "key27": "65YjEkTCRRDdQk7RrzvGdomh35ryZb9kDTSJP2HxszJjEUarMfH75X7DFD46Wnb3rdzHr2Ehn1se3uMk7Dhtokh4",
  "key28": "Ea6RKxy8Ff2CNmPnc93M4EiZJKsviUsixdASiYjDW6TpBAiZ2hwDNqwB78NjZQJfoUUPv8rgqnMB2UV2dzNZgzG",
  "key29": "5uNWf5beR2GLUkYfBZzYGzwk2PCDjVzaUUmHDvKZSaTjiEekj76iYHgj55k2yHpSugT2FV31bMhpcPG5vUoY6ivH",
  "key30": "21NbN5XPR7Q1JeB8Sat4TcQc66ZSgQwkaUBfM3GnoLnGVpyYWyqCrAyg7Kvpw4QZLNjXQrkHP2ocxumSQNKFR3ai",
  "key31": "4RBD8L7TDubohM44dz8GVH3uHRZrHi1TNcRAR3TBBfHSHadtUMxZaKYExRLHCEgGsNWxb9EoWeH6XYS3nzLF9goL",
  "key32": "3QKyLzaKgavRSeAZnRkvXZ3zdjFiAmty1Eai6y1rnf31kfHQyQGZw2oDuWbmGR9xgQfLizuY5BEWkbfoK4kxKuyc",
  "key33": "2ZrKUfi4QQVQXJXeetw8mTTAbVSR4CprcSEm9VFHCApdQ4RZVYymnR56sfFn5BCQvQaN1hpRWJEhhPkW3k2k1jQy",
  "key34": "3Qx9heHmTnFpDFxRR5Ta4tMfzf3AdEWFa1LzraCC7RLS6vnxdv77G14ssrQ7oCbbJ643kf5RAXzWqgCFgsghoejm",
  "key35": "3htG7LMMGuCjr2Ji2SNYFiPRyh9aukvzFLcSjcDpwohVZ5UnH813yYDGZqWYbuFuxKS2bYUf7U4dBQCqeUTEgF74",
  "key36": "RSCCZHesfmDQrMCysu6aPWbjzdeT23zrCTwbky3sRW4aD2n7DojhYRNa1NrUggwwUa8aZ2BSyrbHWNHWW49qLMs",
  "key37": "5b6XKctsN2BTTpRRv6QzPUrCijLo9ixg4ma4dxdBdX86Se46FWvcJbaG8UaET2tbZUFR3rT8uXwqbCh6WreciQdH",
  "key38": "5PMRjn7ioQWFKqmBuqbrTGjfAT1Cm5BCtjW4CMWhQmTMEAQH8sykHVQK8rKHLwsHRpspbX4FR6PZ5J8johBY1Ua7",
  "key39": "2BztonxhCvCrrtX85kSLLFGouevqfyB8m7MdgGVpNqY8ibYY7SLHqMKQZBMksM98dVKz4draFhgGZrnEzn9Jed74",
  "key40": "5SV4EeKCRaoYrNFZ7rqb6FVbP39KPgs11PTeuDJUTgyPfM8ETdLZge3ybU9BBNyayEF2TK93bZ5Cz8Ev5Kug9N3e",
  "key41": "3tDEggVQkK9uVeEoarWVLJoDVrEj1QpWnujtP74zGgvZcdpybLeUQbwAabpaCDwRR3DY4qQy9nwf1BBcQMHS6Zty",
  "key42": "5Xa5WivGwuLaf2Ax3P18tBRTRRRhyUb4MmDziF1XieRXcAiHjDUphucyNb5pVSet4UFUpENCGTdzWxGfAzegaJgZ",
  "key43": "4VXS7oVDmEDga647AKLPWcf21KQhsjcovLE6cs4KxQuZMxjGMSq5uut746LkCW2oHpNfedkmcMeFxFUPpEv8nvkp",
  "key44": "aA1VsjMpG4BcxRP7gfzFTR9JVSwQq1doRySJ7mxMoX8rCwaSz4BEVghQLYP38MYFxWNRLMK1oqwG5UdjHitbKrT"
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
