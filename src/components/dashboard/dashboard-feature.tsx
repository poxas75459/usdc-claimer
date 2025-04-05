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
    "2HLMpEnsiRie6RQZyMo7htgV4FM77UsaRHL5km9LnVeoJrC6SGGzAN4Ytd3PvZKw1Q2qBt2W4KGT1tdTpMZWDQpu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SnDL7pw5QgQmViHFu1psfvCJzdHdUJkT6qndJeCuuJBjodG9VbJHgybV8L5h1SSi6JvqBjtHBTCR83MgoV7Aqg9",
  "key1": "538HQQT3oEjNAjZbRhLE7xAkjyAfHYfwUw9HQUbp4KkEyqDLX1taKGJU6NuNK795eFPcMu2brSuB3yb1RMiPPzGz",
  "key2": "Jypa9ZgpzbTvaAdD4wXbbGj5GK8u1egBPGJRYjmRM3GkgK9An7cVfctJqMZ3FrXdUY8M3eMSLQt8gbRnukt4ASP",
  "key3": "5gYo8nY3jCEmN4Vo37vXMawri9h45a1qzitSBmbyW5tZWPKnLv7Mey47Fwar1m678CdRNU8vsL29xnFvHtoKu31R",
  "key4": "5ppcuA3noh1yKVtpVE5u4XHf87oLy496cApiCY4BUifHEQ33tEsA48hw8y382gW7oSW5BLQ2kAH1WArKMVPF3xek",
  "key5": "5vPMxwv2GgrJfpCcrFy3Hce35uzhFajhAPtPjJLaHLUgCyJ9qdvuP1PfBvA86nP3krVwUybMBYhiaSmBbDKCtsNx",
  "key6": "3hjsU2oreTgr7Vpw2TG9DzDXQXNLT3uQzhrpjtaRbYGRjtkEDz8ujWBYYv4cd2EjXjP82Ekp6h3y9QdNPySBHkJj",
  "key7": "2XqYpqGeFB2V1rVBShhS3uuxWKnAFNpMkd7svPZphKWHifdNu7JDwbGLGqepZqn3q197pRSWEM9nYMHZvANnPfGc",
  "key8": "3sDgUeoe5Tqx5Ng1L7Nhh1ECarxgg5at69KTgEYAxKjNXRgoyjo5zLwTkmQs19AVppbXjWYnkuZKNfREY6hW89Zu",
  "key9": "4u4R9y8HaGSj7Q8FkYugkP3mWvdkJqdWL5jjkNdu4tdsGvB1tzJQpnLUsvGTcjEG54t1sG9jyRBdyzS6NHgYDnVW",
  "key10": "4mTw7GeNWrQewVXcfuvWdLQwxSBC9mS2seHiTcYmw5hQjHBwM4yB21PhtYVxR1n7SF67wvPw6FNV52hzqMHreNWB",
  "key11": "28uLhZ1onpxcwEWF5VgT4vQZb1ot6XqL4Rhv6qxfzTppAhEJwfs5iF9BjYmqV7XaUfhnBpV77DHWRjo5pQFcwUjR",
  "key12": "46NZD7qpbjf72oDYYf7zs4ddpX94o2fPTheKc9v56N3R1MKtz6Hycb9PrMbXwu1iQjMR4FYogwAkECKADsL8d3Ww",
  "key13": "2dteFffueM2f4pY9SVcSht6Z6JNbQ5gYCa842szF2NVfGBTyVbGUQTsL6A2vLADZ3tra3DnzWguXZobS48DqKh2L",
  "key14": "3qZbGGj5zJsjG7Z2DFkBLum84Bs7afmN9jtijogLNjFLGxntSK1VToVH6JdRLUo76MkvQ9zyyYciLKchR1eswjm4",
  "key15": "pZaRzBBuucr62AHpbH7Da1BoBzXxzxc7wGJ1f6XvMH1zjeLau9j2wjgVLBSDv2xxBeo48n3bpKcB9zkNsuB3vMo",
  "key16": "2WkTVecVqCQ1RT6cJ9Uj5RrnrBspZG5QVYxoAB4mnUyQB87veq24rMBzuhR1R3i8PQFxCMCovNvdEpYaG1z2pia",
  "key17": "v2azAKrTQjm7v78WvWTDUgeYAEKiH4Ck5rssK1XCrMPyUK6srKmD6YsKzHaXAQr7LXvTyyega4PC95kQxJFsTJH",
  "key18": "5qkXMkwP8ZkE5yVNtsCzvBquDZfzf92YdQydVrS2EWvJdb435FQSKa6pyyS5VxmCkDJAiTypGe98rmz442nomHiJ",
  "key19": "U8yvtiNsvXCy8ogbdgqWHyaGXWjd8ah2cJYXCVPw9Un2Yj8ZSogTpJMw7M8MUJXw5GzCu1gESRJFpmHf8FJ1gZd",
  "key20": "5nUd1sti4RVnTtoT1bWYdWmJxMidzURWfQu33BsQ3Tjw5VehyVDBEDHYr8fRSzDzauW7ZVvST5w6jh7bSV3MoYN3",
  "key21": "2Ls9hqrodeGZyteN9GHLq2wMD9SkFCqiPXjnXih2NhkxxShRLyM3pQ6pXS3nbJPJFnpaUfMYhk2uYR2VJAzjYgCF",
  "key22": "51cHVTyB8B7jnGF4Mo4CNRnMzgtG1K3oJpAtbEcn6aCv9pcUEt4rzrTQEUaVt64MfeaUDjCyvA4d1T2AjVce75Ft",
  "key23": "4QTFt2WTmbcFahpseJL67EzQzn9cf2uvbEoacDEnwHx2rzWUotkc7u4GzNtvWGdMriPeYjBWBBp4My8pZj9LXbrQ",
  "key24": "4bXRs2CbSJU39VRegurZ1ss5XG8AviXmNhVMsusP5tAAKyPs8JUs3XX8F7RDGH8r1K3kaqfhcp6QmXwV3a3ELHhz",
  "key25": "4sRPHx9cbRVChftj8ZJMPwSmo6ZeAjTr9X9iqyMdn114WduaM9MFj78yAsBiPMsAwBDHYqfZWJ6VKrqbX41jq4Vr",
  "key26": "doEuv2yk5B8TzVk5hkYCnYW8bKWmwZtWiGe6w9WAddEM6p3KnY6Z49zgByZLg5Ape8X6hkSdF152zYoV9xNDJ3M",
  "key27": "BBCdrLMwkqPmG3xZBrWsmkByNxpsVrUFVC32ucQgwcJKWeQkAZmM3siuJaUq3pXfJe2HdGLNTt4bS7n8e7c5rk8",
  "key28": "2188khSZDGi9yNdhjk8BLtRADtTYe7CCiN6obaT6u1tWcYpTbsZmFY5ZCdk57uA3NY4JnvvHXf2VJ48Bd1DZGaCo",
  "key29": "5oQrqofMrEzp3UA4LthPHxWXYECELCaoSeQzTwfWoBZJiTgEGo2ZL621zPD5KJimGfFE7b17mL4PncW5S7AAJb8C",
  "key30": "m9D1uDSpidhtrSJBSCxZk8srpznNgGcBccXhuR2fAfsdhdssu9wHr7fDzcxcQc3gB7REqUp1spV5wr1iRFdWqJQ",
  "key31": "4FH4tYBLKRS4TVLvpZWjoRywodmMfYNnyoBS7ns5AyFpfNLPbrcyeCSrVTebveavFDDJAF269Pe1Be2oREsGizeK",
  "key32": "5FVnQobW8GSwKudnZ4sUpcnTW66LhmSqujSBctrNVbXwSvcoFxDgeF94k17DtbUNDRK6w3vC5Mdez7BsBGPMMqC1",
  "key33": "2zL9XyjDDBJiP429YXZccfqukd3HLmfbD4Hce8uZyufxjhKSkjqdaGjz2jujD4S2RAHvUkbLoDDsMrE2T79kjfAB",
  "key34": "5R9xAt3PyYcjE8d4iKLv1G5mc9bwsuALkSJCSNsXgYu5JiV8ULuSsq7ubDoQ2AQG4G3NMDie5LQ1UkEVLnYCKj5J",
  "key35": "JBj71d3VF8mgWAEkYKt3EkozFMBvBhqqqr7itkEtR6GfbQQwwDUekofsdG6c8wtYckVj7CaBf1fVgXcqDHmYDuZ",
  "key36": "9xfan6g89GejST5WwwzYYmiwD3h9PUCwHUPWBZtyqYUwwrCZKPGzW6VX1QKwaKxW9MvofCzavrf4Hf2SUV2aAXg",
  "key37": "5EFVPriDB3dgCHY7pQ5FRoZE3GoeowixcuWZUhHnTxBRxLQn1SJrgjXkyzJMJzEWJwbDYWRDRo2mY1rsPsrv7Qdd",
  "key38": "gBS2oBFXHUv7qW7Cjq1YY2KRe2Vt1hsYdMGCHDXbAb1kbG9XhVCHa7snxogspjhibXFDxaLyDrEEvX7MKsvncmJ",
  "key39": "2CcPVxFkz9ZZAKoxENMLsUh6mkRjUX5AqEMJFmwTemizx7ArDU4974r1tuGXiGCdgJYwsLszHeDQdPrJwG3RGRvB",
  "key40": "5wfh5Nsqow5hc3yHQiNiMpo1W1GXh4f9pKWn7CfgrPKHCH4MDag5AfxRo7hmQ8J7h4fmVXkNFSUsDkBQM5YG2RSg",
  "key41": "5jT472hxNZAheSqC185Ts2FYwGQNdL5P87f3XM2WTXrVBb2w5vHVbDA1Ty5HbK1vegER3dvmsfc5MSBf1iobq2Re",
  "key42": "4CD3hjdHUTVbw9hhcA4QTKWw98za2S54TdjoNgcDpEZ8h4ANLFWYFfQoEtT12M2U4jRJNxMF2wF13djgBRsuLt6P",
  "key43": "4QegCQbs1HuSuDEq45XJpzzoDd7QSy1GGiXdZDK6aafChrFTZDaycvqbNAtgBoYR6eEiw7ZYBx2WNZXzJjcDLeqF",
  "key44": "4CKSBVc4UBU7CaYqrQYgRCiYAzT5Ri8GAB5czPRED4jUoHZKaRupzgrXisWJJbH7Du5N2DXj2gcHUhXEMuJN5w5D"
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
