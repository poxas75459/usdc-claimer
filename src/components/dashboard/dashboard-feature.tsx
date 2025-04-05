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
    "3EM82QgjdR4gHCyr6uTmvAQ1ovz8efjTWoDAocsLkVgtoRMyHWh6SXATwksfMxAS7rJqyQcWNG8ftgmpBs5wNJMA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58zp987Epc4jNybJ9ATfwqokTtxBuzsoJeXk1x6T3y3cV41dKfD9WBdtQ6f6sH6UNXefwKZgETmqmX9d2Wteha2U",
  "key1": "2gn4z9t2k6WPiVjGhbyq8c4zmCLUedVy44KHmu4ePCbF1LShG39SduTnw6ck6nPVveCfSfYqrAqKvKX31muLdq8R",
  "key2": "MgRjrh9AjN2JX9ne2xaarRuwgDd4sfcD6cubGcDLTeKVWn3iZRjeGdiW2ZgsH3sAHKFi9pL1abfaXLhScQ1AVEw",
  "key3": "4SRu5TcNwyEHGo9NgenggVZHsTRcPBG7nZ3EryxTPWnN2YHfPZVSzMFwqfU1w7z7gBd4p5exsYkjob44AkHmMJvn",
  "key4": "2XmLHcagk6bT6mBZ1vLKJoAEg8FdfFHSkCM1JKEUvkFKZSzwjK7pzApYZa4urNJbXKNLBGWnqeuCmCQHtwxpx4Kb",
  "key5": "ziCTLKJrDREgm8tBzP5CWMoHS3Y5vunyp8seYtBqxnPBYBywmjdBQaRv19N8nKxzbpQ8CquSi8zAHAqmrLUza7c",
  "key6": "ytgadPPsUSrUfTFzaMaGsjRajLxqt1PTzr8Tdy1BvJvfEpKb4z4iyZZdPVqFX9jGMbCL6YH6cin7TxDTkqD3xPJ",
  "key7": "NjHpQbn1r9QqVx6Ws6cM5Va8PCMtVNveKf7CU5eQFGWJqpmK23QdUFdh8TGnnNYnoZVaWdm4nQS1JtZBQYC8asz",
  "key8": "q4fM14YxWJWgAxbUGdPcHNryAzW7ZNrnTbN9trKmSWxytZbvJU9yH2Azx7o5orFo54dN53CCV9yJ6tuDVrvKrc6",
  "key9": "4u9RFvJSs7PJLV1gKPX4EiQix8hy9M1aWXJ6eiWvTh12iqD3GoyK153JEkzyX7rqL1JB9k4mbjrWCgrgkooER84K",
  "key10": "4ZFq6rRvDaxKrfjMs8LuJLcSKGrmKHLLbxqDpunUN69FdUXu4aY1vZxvHxyBuPkx9oADjgaGjozzgoBLb5vLtKvi",
  "key11": "4DhzDM1Z7k14y2UTsNzucKfq3zMYDjf2QJtiz7vc3BPTsCP62iqDEdSYbJAkSwRJvukSKwmu2XHyQPYQi4EvDpJ7",
  "key12": "ARSN3Sccs3He8Xjd8pv1UznAi6qKQWzMzF9seL5aNPQXDJtdjP1HZ62fu7zNRWs3xGxHC18bu4zb3e5th8uYhc3",
  "key13": "4Hyu7jLmsF18RGAEX6n6Sx4B6ktuFCUu34iwtGfbWFNV8YWs5uME4VW4mEqBpTTJnGye75YadzseQU1WsSm4DPoT",
  "key14": "5HFNs11ZWLciNyDqTKYhS2CgWsyywCGytThp1oeKJ3nxr6hwtbmQPmGxDBso6Zf6zyst9SrVaqPpRj3fzTwYomNK",
  "key15": "8oD97qux5M4iusr4vx2HVwjxxjAH5Asn2FqxrsYnEGErDC5dwV4n4iD3faHTsbGuWMvh4otCC5Wb5Ut2mMLdaCb",
  "key16": "3B7TQhYAi7PCoK3oy3nwpUauSodKfoPaQuofw2oJsSKer1C6WRb4nUwnASzMTrR8U1HJdATD2KMVZt3FRv1byqPZ",
  "key17": "AQAdMHzZbzvo4Fp59vRFJJWygmDnno5WVTZcjKH5uh9hCHc2ErBGuMMgNuGXF8uESWHSCjKrqJyvruR71JiPwVZ",
  "key18": "65A5tx1WAD5ZvprvWUDwxvhRcWF3Dhj6svfwaMfDjcNiAr79ZD6xHxJoqgNpT74aVa9txh8AFJ57D4hNdkpGetvv",
  "key19": "o1f6Lzt3M699eSSP2RDQnDMdpCF2rQ4ZRwxeHhfiJ5fwZ4sm9hUefvry3F65YtsevuZCXRXiq5zsf7ZDmBgnS57",
  "key20": "5WYDac1Xp73rmPDyRw5nD5o2uars4npZ1pqkwcqpdn81wWetpze9GnDbbfQdaKncDqJ9qqDNssJw3E6NGdNu9UcX",
  "key21": "52BcQ6td9hmKZWkoPZEgkVsCeCQKznCW1PaHQZTAno9b6kLnxvuwZrYYgiqGXAKqHfCfCP8McBZoGj4X7AZwnSM9",
  "key22": "59RhHHqNLjfAzxN19MzGtohwSzcVAEtTczgHYSdp2guPHHRMw66zmE8VXUoSm318p8UopsvUyJbWxQJ8KbM9Q61p",
  "key23": "5QK5QFQh7yWvgrG19zJwyNQ2HXz24kWUemgZge4xt5iiv6YEbk8whBHy8bSMQG5ucScbiU4XfXkyVboGsoGTMooM",
  "key24": "3JRQdTidQbFbRpykWJNDj5QZ5SdbjYWUtDkEH7uERgHtd8XXtQEUsxkD5QqDqADLufGs8EiJzeuSscKNGD8QyX4F",
  "key25": "21thwMCJUN454xN29hLYBPxnesZeDaZmbVidKZiLJW7aTpMN3rQoMFMvuqPFHApn38vAGDJPf738UAcGXX7YMqGh",
  "key26": "5ZJK2RCspNSaWy3P8A9oXE6eNmq7etWLe3Dj2xAAYSrWkLsUCnoj9CNySQJcVYFfQKWRJ4VS2AwwtitLq4U3kMBw",
  "key27": "2HT25VggWKgWUtBy6x3nwQa47hH9mTE4nSzAuTm225fcaKkab2Z9RdNawYBUwVcxcxqMUYvHRezc5EvEMRUYnJZc",
  "key28": "VS6Y6MwtSRp4b3iP52ihe7aBj4aHvqfyk7cPKZ5jpdMztXB1aD9Bxbc38kVv8F9fbfT5XRNNG38Q15WmtuGN8tN",
  "key29": "5t2NGjgWCRF3cnAyYM9CEPpikiczrs8jMUBN61VGtKC7H6HW47tiYAksMxrJzrnNJkEb7RWZeXE4EYAVhW6Hj5Mr",
  "key30": "4w64fNGFNswXrUqG6br7cTHzjpabNitt7mhAQcGQJ4LEZpk1MGM8NnzCoLBkwNQ8Kbid7sBadNRSzrzqnh65owQY",
  "key31": "2kf8hzQW4wknowioc1VhPfWqqfMCeTZgXsk2Gwg1zMcV7JUU3tNig9Zi5qDp5bo916E46oLpCgeDBUyGxW1Q4adF",
  "key32": "HkzbZvgf4ShsbLi92sb8U9v9m2GUGaEETRnh2yS3xrXbHSAV78W28oRWvvDyFu6AniPPptAaqydRnE31DjPfRLd",
  "key33": "4h2PwFpeGZPJ6xbA517AzWNDRxjXSjRKxyss9KXwKcwrYDRS2h49EJekqAyiZw82k7VNZtDCYrndh3hMv1XXwbxE",
  "key34": "4Ur3RiSy74AdcWu6n913YrQDcMs6thnKSVoT62i2UrAoY1izS4FmHzfZNeGiUp15QoAQsqWAaeyvhUjP1wZYt4qz",
  "key35": "4xo8mhjdMtoko5mmNh2U2eavkBrpVCCJdo7WX4cNysG2VF8xGrd1B7usUttqZbrTw2cM5mi3sDXeukmt7V4pS43W",
  "key36": "3JSErqoW9GyUGzYoHZ6yc6DaTuf9fqCHc3HRH2a8yDLktirYLvq62jDREh21ptsep9FrYJjUmEZvU9Xnn6rMKbkY",
  "key37": "5Mux56QC9YNs4jLD3mH954XP7mBkhSbbDKL8xMtJPYfLoontynHbbEDjjirtUmiT9n4HFUtBuzE9aLsh7UzzeyMt",
  "key38": "5NYBmsk935CqfHjd9SXeK8xEUkEvWjjVQay2rAu4gQQyBWraKLbxUkG9DUhe8dsHaobcHnNnuXeQAWHTU9XAt2Bf",
  "key39": "42ajaWn7ELNTMKFtNwPsjBoFC6JMti882KoS7BKp4FYTGP7NRd9Faqa54FVaYz13EqsyhHnHHLL5UvvKKyAmR1Nn",
  "key40": "4V6h3BJrynfXM39J2bfvScbVGAWyYjK113joo1gkRzMBDPcvAXu9GWZ3Tzn1wQEmSKpp3y9biNGKnK5MhLHoRT4x",
  "key41": "37s1UHds1kFYSeGqiYQKuM1P2hdd9QP7yaPCvtwku1oDVjC4LwdWAqJ8TaReJwCTj2uCvDkFojbyE9Uy4WjU5cSh",
  "key42": "4bjBAWuH57ZiwswQSU9mCSju211WKjpsbPgtxVMH4GfQTQVKoXPJui9pjMAmFJTme6d2b1GSVrgbDnsJPLpzWAx1",
  "key43": "ZGKjTHB34ETraR6LfYwRMRrSpafRpTWCqBxBi1PAhwZcBv67ircPZMejgmd5iLiRB2LxKNwGdA39JN6foxrWZNQ",
  "key44": "3NPLDjEPJeaxaSstVuBLQCPMtdWK3xXsc1o8yW7LeTfz4KPCLGHRBp4D1zCiRtJgqbRvBktcnEgcfVQEPr6ehP7E",
  "key45": "VQLEUZc5CLsTR8DrfCZR15e4brcyt8jhkNog994DRRYxmRR631Rtg3VSdx4eWy9NYcQCri4AW3KZAa6HrCGQNxx",
  "key46": "4bzKoTgSpC5APZiJV7nAcac74itR8ZqkDoSmUVyt1CvKRjXJiKn3zDmsj3a31j9inu1Ap8LKGCtZqx5UHFBA5ZF6",
  "key47": "5vRJ5amqUJYgRNxUgRi7dJu3EG8H1GS7QoRqDTYscryzwBSj1V4psDbNS8CYZ51rpouYX7KjxP3TFhe7yrDibJxw"
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
