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
    "S9D3V3Xb16H9ypqXEJpikvAoddoRTFdASQfRKHfvSkdwKrcGwhJVf8SyKTGHD6LWt81F2QUhvJmmMDZQrgbwGpL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Vf1nUwDGPXYXqioLDoyssdyqS9xLEi2xjQy78cHkETya5PRiePZtZpkWJDhP1RqKm4aDWwYvBKvUpyuSR9kpVE1",
  "key1": "2GDnKgmbymGyxHFS5UxuSbYVF7ErGaASVGEo3DLS6EafkfYeswM6rNNZTgoYZUBaFSnCSWNFP4bPSmRaxkmBTCCZ",
  "key2": "45ppLF1mbjQ1e6Sxek8X94v6dFR3KmQaXvN5Tex9G2LcQ9N5ifyMDaurg1oz5yzhjFbQdGUFWeUp1Y2FS4Kf1B5b",
  "key3": "2WFRUMfAwraVmSGM8RoPgNaxd1QnUKr7URbYnEcLdRMHWK5zsGxNhsZt8Dt9douoJnAaKNT3YT7Zj8bwZfVt3zkV",
  "key4": "2P2THBxeVSJSDEfqPAps4mj6rzWgKSjtDaHMQszg9K7cLNCEN6E974abrExj6eVDaVux6p29xSWUKw7jmkuXhs67",
  "key5": "3Cfse3x35zTAMKeL6upYVr9kwHbHwkpfNP29EzxEi4sVkL7GzJ7W9yxGg4pKQQKmHa3gqzixBJkgh36etPfEtqf3",
  "key6": "5jUL4fauwSpcq6YHShUWHC53bJaZyJyeHUa4qxJSTHHiL2io8UwaM1RfdHmd28yYZ7NQRjfsSsk5SkqgDR7cMFJE",
  "key7": "2KuGj2JQ9Be3uCjwgpBHSzf2rVemgxGjk6hTQoQ2VpS8AnAouiwU1pEuqTDGdU4TowxVWunBViS75rWusPMtQqgG",
  "key8": "5Js5QdxVbDekZoxUduX9aLEwGVSip3Z6PKBdzTKAmphGYdr3wkKbfhVUWQwRTDQA8x24xGhLi3xJsEeyvodDQ7zj",
  "key9": "5UwkL96mLhEKFLBGHpaznLZBbM5FXp2ECHffq85aqETBqPC662eUkwSUTKXB75v2BDvj9LCGbATo5cVYyQnVhsTU",
  "key10": "cjkWAxh6gKK5XNiD6TzsDPdcptn2gfcae1x2AWwH2aRRV29bVrTjtEtj1UfgowvoP7k9YmkptpBRMpGRunBYjoQ",
  "key11": "5zfSePc8xv1x3LXfQoFNZGH6px8QZWdhwaR3wq5yym4JsV2FhMgYCNFz65GZRy6SKvWABVkCKFKLc5XNM7jKAXPA",
  "key12": "4yibZpQbB8UJ5vjry8nkZHycgBRkrXwT4Wib4y8md4ak8EpCGhLeaTBkaQXJtfQspezQxkGzQWEMnRoBnzt896bb",
  "key13": "2zwtDtsV9PfYX2Yvr9bg5WH9rrfyaUkRdwC5NM4s1g8JVK85HBvJvKpwQT95R6v6EuNiVSkNr2ZHqfCfXn3UvPeR",
  "key14": "4T1pVWZ9HhpHj7Qe513j8FLSLCiHEDMUtUzAFebHYJphx5jj7VcVYb3r7b7fzWfbDdD7BwnKqvGV6puRVz4Y4SCM",
  "key15": "64sv4FWtVDCK2o65V3Zfg29rxjcbcHz6UVkMogy7xFD31ZvQ3F5gj5SpENu5cPFng3jH2EvV6pLqiX7UJdrNHDM5",
  "key16": "35y76pSZz3ZiixAfknD3EyotnLXbap4Avf3gKgnairZNhyAM6RiWCqhHhkwNic3RWXxBbJY46web5PLMJ333YSAL",
  "key17": "66FmTxTzgiv8iZAZUMau3ST5byhRvrhnbSwDdCtW1WVmjju5X6z26YUtH7SXmxBQcN5ApkDQbuvjVbCNSjMsDshg",
  "key18": "5PeqvSPxnCdTWoYMGmg7kM88Hi7CPaxzBHbA2r1WxnQFZg316HB9Nw8rMgsvWp4tESNXDS4LC8GDQHxKK7BPzV15",
  "key19": "5fmLG7fJvJ9pfbn6MpWTezDdkrbDaZiwwK1QD5zgSQcvtwpegTUy9pHXsFt59Xfrc3dSAX683sPnaXdVqbFSbMkQ",
  "key20": "2HDzaQxTTaVtNyJcxQ36EjyKbG5hr99MQZnunUADBALM7rpTxiYmAcyH7tSrEETu1ZLvJGj7z2aHcXcLpkscTAoG",
  "key21": "62Dig6fcs76Ly6rzfNrUenfRLe7eyPSEkwTMJVQ75SDQxn7Tna67p1tXCfPg5JLNN8UtA1WTecsw5BoJHjkS2Wnb",
  "key22": "5B6yPHfmEtAD95oPQyHRjioqGB2xxKqFqkhY9x6LUcEqEgH4znc6B1N7euCMwoSwZRdGSi4DuzWe2RwdRFDHZ7ei",
  "key23": "3JQUEgM9kxNLC5CDrXsxaPCwajq7oDcPixwMbCLEx42DT6eqrPGjSZkXW3F3wYEhLqAiuwEnpT8UjDBwZhEesYZq",
  "key24": "4GtLmG5NnrJKMGH5gJfhoakk1S2BnfrCraHscq4T5jCjEGeWvK7ajE1kwF6iJ1R27ChBjej6NFVmuvpctCc14swM",
  "key25": "w7GnhrjNq2Ecd7xjfV1BC1goyfe7YPjPyKtt3KBoiZCfW91EcCk9CbTco1nJ5ARegjerpjn3tEGF8bYg1YAikfJ",
  "key26": "GaWthNpNNVCG2QFYVnGQnkudQr3PpYxMdXGdG5CjzUtYnY3M8nWFgkYGng9hHWR8ynXAvzTq8Av8PGgpc1gQqDV",
  "key27": "BjHXdz8gxkby7ffHw6zadhFYZyQvpxw7kLPo2RSrUrUdUksyxv97eSBPjZS6T856RC92GiLLG7qQburEqGk3usy",
  "key28": "3kZtv7swgAUHv6BcLqaVN4P8s2ovnAEsArdcSQ3xsPEjp8KpRDN9y97wRC7WreqFoYxsGfT4An4cAoFUbi6kHeT3",
  "key29": "3yvtxandfmFgaJGQmaJBoM5JoPuzzbsr2dRRiT6PJ1Qju25jy82NKaQM7zhGyTipYwUtwzKjepVeKRJXKPTjLT6r",
  "key30": "5Wn1WX9ZKuEvkqBac4JbBF42vwfWN69tRSrHLVaDbxRS8zuRGCSejgE51Ang2dhnKhxLvNREhtwrFC4AAEZPCyao",
  "key31": "4hBAcfa32PsVYjoAnPK95BKJ3aCuRXYSJE4zLmNta2wVtprELpdL3wyfZ63X9MZfY8B2XEdbtwbdFnFSCAgmAM1A",
  "key32": "5EsKcacCpqMs8BTGZFWdoBgfWjnrJxbdSzU5wTMADBEMQQz2ELTJifZdi7BWnaKUccBZTKoPNs3xNYP7uzmfj6W2",
  "key33": "31GJLbKSHq3qk7uwJNAqxC1UEaqrDC8dGte5rSMQcD4hYX4oeCvc4TKFK47G582gbqGya4Va9BwMXHRxwyLX2Ven",
  "key34": "4N4HNx9FU8cqxTUNhD2uTfTMocAJZmWayqokH3xdqFm6vJrJqeeQhumRfuhaN5bE7jh6d9ZaPq7QthoPSwnn1NrW",
  "key35": "sxcm21AME8Ugx3U5gmBjcaSTwTCSqPXZTF25sMAnthUkFjm32od8Zu7tGhvsxYWzZc9hGfGFwz7zKYAbUdVcf61",
  "key36": "5fycd82Dqj8vKp4ASYwMvj2SVcaj7S5tRnpGuADeFCJCgAybFn3WpZBdXsq7Zk7r14p214Tjd5Ky6KtMbj8583rD",
  "key37": "LjokuaBgmj2gKWBWY418wxsjiJMrWna18HZnrBpkkLkD5i2Ruhe1DnS5Nae1Y4wYAiLzH3wir75hWa75PeHUy41",
  "key38": "2aS3EJF13t2iM3XJVV95NPZJje9tSJ3qy4R98HWKXPV3Gyh98fQqpUJ8x2DfyuH6xYYarCu68x5EhLcF2DhZSdsH",
  "key39": "4T8BQhQdZocjVGnEBRQRQ2xH4rRvBbanVR72qbjjAqmxyYP9uqrdJENfHA6EynwB9MHViS9JvACWQEFCsiBbX4up",
  "key40": "3Xx6P8czPYxg1Pw18k3EpPh5o2D9i58xQbvXNn4WmF66mK6TzhLoQazvwzNXEEPB2H6PwSfXAyH793SYqX6ks3qS",
  "key41": "3XA38yyEDTfnjJdGXeT6HiY4e3vhQVFfnSqzfHoESsgDvLuRGjxQZHZxufAwa4Zc3RtoQk65Zv2CJ6iYccVTBH1h",
  "key42": "2H3GSNYJ5QBBoimGYH1J3m4v8xcrMRDam7vupN8Pvv1izwoG2hjR9sz6MPjjFUszti7Rk7CVny7qZnzCNHPP1PGK",
  "key43": "5ZSya1iskxbm1HAE2RreyYSNN9417CYJLbo2exnL153EDd1XYuQe5V8JLEKdtHtJiyCqnufuMpbUqmj96P2V7fWv",
  "key44": "5drfjVbTAbYJd6XMYXCSJfqcYd58pC8Ba2BxXqcfvq7LKqyHEH8Fg8JdLwba36TKeLPBBvg8RLfZwCXYuKXYZ31B",
  "key45": "VsEHmq4xmp9EXnw7wcHHNqG8UYKYVnw4Yzr3cZdLNjJ6G2k3ogoyTcr1qPbU2KJ9tATc3K6tXXCnrwhyc6BaGj6",
  "key46": "ZnjDXKqqV3wKPpGEV5SqAefFez2VgzC4mAw6LgMx8oD5YdfiqXhDKwLLAYcVmvgp8cRQwRTFtdEYdd38QQo9zco",
  "key47": "3eZWL9GTAKMNH1sv1ZWC5Gwu17f4QA1y2gFWBXgQ4Skg3oFXjP47wwefbDaNWwZsLThr6xpTuFzxoNXs1jXC6KE8",
  "key48": "49SdCZFhcFVjQVdYn9UBRoJ9wfxhDfGWo3SHrUSXk2godsHL9AbCZwry6qNserVFhZW8QQ31S9soZnpW8BReSWsk"
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
