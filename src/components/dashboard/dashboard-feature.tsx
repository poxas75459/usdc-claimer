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
    "23Uy2xcsSu5WJeCE1WdrgppTv2QYHmvAvEfHhRzVAFJJPqJgtkADv3HFeRWC96fTi8zfVuwGEm8UpRwrAcwQxhar"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rjpRCNt7o7PsxxBRwJxeGeAPGBWiK8AU3pKywAuZnzrYRWCt7v8boQM2keVqVGfHNvzbgZ87hrwZV8MJQLpsNeA",
  "key1": "4bQA3Cb11WyzoVdKCq8h6hWSbkqC2LGDpjqrkyPrcAJSbZdzzj2HAWEUoHYkHHiGWUzaccVRVvcuvAeGFWC1BCZa",
  "key2": "4DMhfXgotchtJgUoBcCrd3gzN3tMurnd73NQiGhnAH1GeVkKKbt1y6b1kvxYh8iuVWkeGFcgEhudT74UJYG5ULaH",
  "key3": "2TTnvX2FNoRbTETD6D4dTKKR8cQNGiT34xgGoUgkLiuLu4g7M5dpArDdKqgzRjWA29goyDq9kjSWoQbcWh8nto6H",
  "key4": "4L1cgqf251WRwT2apXUG7TjjzvrsPn3RJ6Lo329TRqpCBCPMBQgkk4Ca6fErk8TpDUeqwKcikXzGP18GyNq6WSoy",
  "key5": "4zj3UpJj34z4XmvvUZnjurW8TacuBoYVQ6aTvdMQBqVg4aftF45WqyoPZGRQ4ge9SAR3oNY7iiZ1n5p7yyxrKMcw",
  "key6": "W3cRtm8EQVWQ1k9ugxWF9BJt6d9LRSZgAvotUxLpgQam42Ezt4YiVGVcu5kh3gKQ14H3hubSeV1QXGvZUkSZ2A9",
  "key7": "35mT3RJpSZXktqVvzmgRNpnVYNHVRXd4QQknrUssdu4P7u5WbWTiXJ5tXE28heCKYQQmRDUgA9pv8tns9KWkHUr7",
  "key8": "5G1ut4v9sLnvgxjLKcYojuiSqs31EM7uHr6Fs9ZVxnupLSu76FcoNafxaRQks7DykNiXkLFZm8rcJWi4VrsH6YF1",
  "key9": "3CHaiz9XBbkZb1JHNo2hSbjEvSqsAyJVmd6X2VwEDVYtazQBmwWkqk9cUadyXHtbdfFhunpgihAyJQViYpY21jPF",
  "key10": "32na8XtyWNCwSMsUKczcnFARcq7RwTiJF1AxNJEqgeeDptMf61Zid1f1jEWFeQcv5D815yfooqcLKoBYKLHaqXVP",
  "key11": "dyEDeBMxorLpLM6DEnGKsEZNPvMMoorHjzQC5YmCWKNNPjvyjBPuKeNxx2WnC4uZ26NvcsdntUV2P4kurTXqSXC",
  "key12": "3JxQJHgzAitDXwL8xV4bkJH8iViccxLLpMKcxcnsQ6x9qfxvx7PHPeYdNjjZ1XdBepGEmPhsD8ivDWv9YDyadU7j",
  "key13": "2hQk8qLTQamypGdPqNV6VWebdhqxgfrAehqLaW9JKDKAAahyJ7AKg4PWmZ5Q7GDt9PWXSVC9D3w35QCUhbCBEX8Q",
  "key14": "23ZHngfV5DnNRZ5Zz8cJz3VeuFs9CSW9LCKeZNwp4MsXSGJWZzHwPAsoEPJ3ZV9CHSTM4eSPd413f1n2z28XvjSL",
  "key15": "2nTa8fZWYfh5z28roMrdD6576uh2zNLFVw1Mab7CAPwd8umAJSrnj4ppFcwPC824LwT1JD2qHmsBmkSymSo3sFfL",
  "key16": "1goPUrwKHEgw1R525PUX6gAUKirrjdJ5DXD4zMP4mdyf5yhSNRVtae32eDHMFaBAQpa7QcyP2X48Wp98VkgV7p3",
  "key17": "3m3ZrFcZ3VwMVQUnTtyabWkFs141iJQwKvWtgVyf9mVaut5LHnGLA3xwrjuok1Hs1fgD9HTXnXX6Hqdn2YCjUX5V",
  "key18": "5Cz1qznshXTMmEGdzWnpWLxXbCqTARKQ2MSjQtiFE5KwccPF8uc1Z4e7YB5AjmKCFDKj4Quk3JXM4JC6xBLDr8VJ",
  "key19": "3LscRQTAqJruELtnaYg78b7xVjVQWiYpVoL4bDTqnXfcDBJqAHqJvvaLkvs7PJ2oxRAubJWLgLqoTG9xya4fVzS8",
  "key20": "2y35TMjHN7LtzXeqb4ARhUbKcbhd6kMxnvXybAFuXbTA93m32Rft867j39hBKJN6Jcupnebg3hjZqSXeb8W6QnvE",
  "key21": "5iemzaHfcibZ8jxj8k9vXFxryHueVDC7M9f1G51C2YWNC6gXfZ6dvptSwU9rKdhxfEjGg1M6CkTiuvUsJBC2uBDF",
  "key22": "dEkhSUXKDqASdy43eQAzhDV3UepsD1var9SiZbRiYDqWRAHrkACPw2nqguwqZ3RHy7UqLYRyqkGvj3xGVvibyJX",
  "key23": "2HLXFp7th2MrQZvQNag4DkLwRm6RQ3E2DoNUasqAuqX8MJCPoKAXKeBwdy9pGrrn9netyX1BEU5RqofFn5YDGAMC",
  "key24": "4c2kfM1ZYJ3YGrbJifvSWzsfxbS1tiTSw8chkRZ7CMPhVJpahAADSpVAiTdp1mkKC5kUMC4DTGKLWVm893qRYvMj",
  "key25": "31oowxPwyzYuiF65cHTQy4DxcncP9mcRUwUEBfn4yLzukxuTrtx1eCCHmXDHcrvqp3S5TcBxCe7UvELtf4d5Z3xD",
  "key26": "4R5BRj5n6xbd3utVg8zD1MU3P3tVQTn6LxcoCWf7UqRNW4oczkz7P9xykVRMjSbiE7eTMVXtX2b4QZkfphbZaJQT",
  "key27": "26HFC5buSwGcSGzFxUvSLiCBNqiCWbdE5xeSBZNKwZZvpkerAFK8nLXoN7BfXJ2ayxWbbL9kQCE3kJwjEr5x34r1",
  "key28": "3ynJG8vQLYoGu4wHHMj4CprWztpeVNuf3V7S4xrqmWNKKT5bycF5xVBwWxyjBoBvFiqHEQvfnT3hCVdrHSxsA82h",
  "key29": "5DPxKk4tEyiNATehVxDJ1xV5yTWSc731ZAbYuVbyGsifjm3kmG9KHY5G3RPMoAPmBMbhJ1HV4kGn5aFizYJrbp5F",
  "key30": "4AUQeeXtiiuMSPkQzosNTWX1vXGgqwnqDMVWTtsuYEY8sijvQZvN3iafY7PQcY3Kinv2Gis8y41214kTie57mtWu",
  "key31": "bKwJsUEyjsb6vX8pGoa4y9hPCnwz6CzsLpuKs7bcDUvD8D8XvvVsnw2h8VcAomKxpKDkCeX4wR8Hw6h4Cizgave",
  "key32": "2FPyfbJRYTgtEaWWhXVjud6yc9zzPj4cXwJQvdwy4ynEYEZAySiqYskW3RGbz6AnoDqqTH5iSnST9CCQRZyqyZmg",
  "key33": "4doKcw6TTs1rtSrCef5R7FgEPYwMKWhah7tc1hZ2Hryj2QKteeQzkX2VNx5tjnWEh2X8CWM32hEN5su9HuSKiU1A",
  "key34": "2XxmzzPqS7JQgVPZru6ZhYpp1VzJZzAssVdNejhgm75QtvDwffi9anKdnEdkb36zWSZs1bPhqqmPG7Pmd3GC629o",
  "key35": "eQHg5xuAsY6BR1uxJENbuSCWFTKwQ6rQTuRQejWkiJYcS8uAmhQuGMsJFj2ed4xiqzbW1SrUVWpnZPLBqh38JSU",
  "key36": "5e2wN5iVjLkhVh25ZVyEBXVC3tpQSZtCH29DZtgej7o6QAV8A211GCnXNSTpayEbyJjh7iu3WkoC32WcRTtdx3uW",
  "key37": "4dQaNBitEERSSY8hNUJNiJabu5jPfrUrM7WDYu4srm2DNjDyUeAiuNoa9yq9Jc6k5CND1UTTBtCu9UCVog7BZeYC",
  "key38": "2h3SUDnp4H7s1W26xoz2m6MoMSrDiHG4PJvJDBxbLnRBHaNYTNVZeboeqgFvsfm7gM6mhW9Rtv9L5cHFtTTsG3X",
  "key39": "2e65FrNGJqKYzWxEok9ZabbfVgGNiBHk5FHivBBXxWKpWQBXprsT8XcaKaUqkkmzU4t2G5XXHnK53rChe8KuvuF4",
  "key40": "3r4TANKnzy2bh8gVoZEzb2BmRfCe1udV9xnRiPPJN9z8U3bS8FAjgvAMc8DFQfDQpQjU5CWa8ZjizArnBxcD8WnJ",
  "key41": "41gi8KpJeiGt8uTNKq1ig6unxEvHLYiqDo9n1bJzBUvHx6z6gCnQCjfCG1dcWBMo2BrQREjeLgTPtPUAue2UDQNw",
  "key42": "62yGgU9YU7CzupPx27cJnj9HtWshc2a8kWWNh3oh1548b7WYR3mjMAFQEV6jeBnYBA6bjnHrpUGMiPppiMtSTSTr",
  "key43": "3yoDpQ4jcJd9gbxaWpMzMfyzLEp5NVqBZagtYhMAnCimqwbSA23VvJFnawou7xSrkBDDKst6QtSTGc1qjAKb3CKA",
  "key44": "9GgTLwWxoRHq7quNRwUTatQtvZcE5N4NSue3PqZGhiqF2Jwpv117qRt36LHSKwSE7nM3GGMvrb82nqLkr1HuAsw",
  "key45": "G1ui6Yx5qsWZTmiL7gvgPF34ierTRrAHFBPXpsS2cEJn8Mw6RMU6avGrwHki5cxDxCa2pTe7vpUwx1vqTkqPvvX",
  "key46": "5B83cJEf1F3HBEiKn7vjALj8DK98N3SKRt9dVk9HUHKwBd2ikG4wycKYCU5ZKhosmisXczmPjMKTDBwzJkYEZgWh",
  "key47": "61QX6E4ErSDYfCBGu9P7sNk4q1KLGgNPhtFkJNnkTXonwwU4hBqEiTCqwjTWqP9cLw8ZLRqHfZwjz2boCw9qmfj7"
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
