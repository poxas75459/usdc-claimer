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
    "3Nha4XSKzs2Ru5bgY6ajUtyi97siazmcDnr5mQnmUVhoY6AWWM3kU4C26pxJjAzPbE1TQRdxmn3KrMhybvkJgAdX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8Bh8JezGn9WpPcfwGUcbX1PMVhQEcimQypGCJAAh2QXpq4rquiwgGEvAHJknBTDq8NMJe9WBX6kn4pxYS3T2Jds",
  "key1": "3YuiVx629c3KvrApUwTFwSonTvexkoN5HL93zmpQLjQcymNoZFehnVeMsB8w4SBACoJ6u2s7cHtdyN8Q62k3MpUB",
  "key2": "4uaxdCP1k5BRBw2fXsM6rxB7GQTwuUH1M6D9tD4skmf6rtMKD272TkQgVKxRrPuNWjjaw5Lr96x58tcu5GaLMxsP",
  "key3": "66orr6zh8qzAoB5MqSiJRsv85AXZ6YK8rbUPhNv2WTU4q3qjTrPzoHsBw4r9d8SCF3TViHNyAxqWCy2gtzdi1a3A",
  "key4": "3Z7GqzA5EoGrfNJv2kuz8U9y9oSPCGn89iLsEUustfs7JSNSHYJzsdyH9XWkxFpKUDGJ3QzLnh4hb7wRpHaELbaT",
  "key5": "4o3mUA1HXZfqyT3eRREpXSw2SkwZqJ25VEZeqULnXgZ7KdA2HvsWBR2C4isJStuYtnSbCpj7N8BQdg3eyknxXg9B",
  "key6": "vaZMULvHw4NB1tMuymu46R9bvbTMV3zJ9iTrFGdpgpo7pjNG7cAAepwsWXPX5xqiHsvxrqDDzXQwoWP4Rw7t8j2",
  "key7": "2vWHasHWeb2RgfyoFzkoQtpmB6et1mjwFc2EjrRtAeBrM3Q6xkmBUodK8wpk3QjaWPbrYhA35nakqm4yJGZp6ibQ",
  "key8": "3mQb6zwMTssYS5bRuNLCTNXM49AbTjiQWqmtEpfu7jJCouDXEsCbrssVfDtpmywJodqbbUnmnnarw7zUTnf5rtaH",
  "key9": "3sTbjvKihbzZrNwfkTmbCGzaV4JPEpdPqWCaV2897fnoxcDWvZMqb7N9rj7SRvuSWgdUszPumhe99MxsQQGq35uA",
  "key10": "51Y5eRW2YYSLYxKJXaXdxYcPJhPyBzhCJkz6Hz3gKS1zZxChBYwQh2R99jwe6iV8fTLDbxmPqff4agHywxkocq6y",
  "key11": "569X1FWT1KnqQbWUkRZGSWQ158TCBRSTTcgNMTBDJMB4obmjGqoUsrmRW7P1H4HmYRosYdwZ11ABzSBn6pfMPNio",
  "key12": "2SXT91n1ZF11jFqiixPCdJ12EgVEToKBqnT4VN6wVbBonEVsEgwFns1G9F9uHt7H9LLrt7VeeQYF8AUgSRyvmoRL",
  "key13": "3xuhAAmjJepS74nJxiT8DnuYQV9BU6dXj4aNu2rPAy2T8U5qeobG6E1R1GtJ9vMXPWpEjBMFCAtHXbE6YZN7N1Uv",
  "key14": "7eEynYusD2dQe7QHGEKLdfNETHhWxYBfASuxGqZyayyTy7F75LRtgRDC4VFd62qt3PWQe4ngFFhQNVbALYdHPLJ",
  "key15": "55sYBNBFNJ6g2KXTELLA8XXHKAVuRvRDs9r2vcLNcFRfqSiFqQWkFehCRsSaVEb1c6Xpc4WAdTKQbysDUUdv6Tgh",
  "key16": "5GBdNFEDB9VzuswVrPfi6pCUcZXetFeHSamanS5ZZxMTvMMHEpv7927V3z6hqxjimSk2JHyqasLHnRAodVQU5CkR",
  "key17": "4JMQZJHYwQ7op6rVnWAnAAmWaSEMA8jx4DTrwpgRxVteEb7JR2ifjU12x9YRnhJ9WeuaqtEsZDFhfC3vYHe2jbYr",
  "key18": "2pgEEovX9Qu2F2LwFiSnB8Fa6bxKn5VtxRXwqzo8Hp3EpdrfCf9umYxVoLiaTFo9BDMMrXgJNWrcLVfqqu2wD38Y",
  "key19": "26M7SBq2Ttb11Z5njuKjfWRr4SWXx51MCF3DZdMApU4YawbmAQ784pnPGUWJyEwdZ7xWEuhv7M2ZxEdqBmCxtGVp",
  "key20": "2NMenSFuqbSoYcKnM8nTxcaUeT26XjRbeLtWyXYKY9iWLZS9M6gA4bzCaPGBxFfoGNYCYaprJVkKd5Zzaz5G2bwS",
  "key21": "5WoYRyJJtTfp4uDXrVKPKsadzJ9ZZyaiYam1Nfe9QNxJgrYgk7Rs2M24Td57UH8wMHGZByixVMREhmHFVUN4zW56",
  "key22": "x7o5zPTgsgC4ZvCUFM2GgodS4o4qbKDFmbfPpAGjUnTwfk2cga2vKcdKPScBQMiNhFQyrRFqC5ryHfX85RkVQp5",
  "key23": "5gt3GvuHT6VkLjhwZHL1vBuiedFRfFnrmfi4wmA48oB5RerrZeFhfKQXP7uUQuNdxPkMB9tBEBuY8SEhDTQbRNH",
  "key24": "2mefDUsC1KEDnNkcFHanQDekzZxCy2iMmNNNusGwsiwExPBS8i8Wt2zLnnMSPVzmTUdixfeTaHTcyh6hU4ELXCLM",
  "key25": "2vpY9ujJUTiVYpS8sAy1c9LUKbjtTCrSomfZYGtetXnjR8SwoMXuxW4waTGPrWqANrF3hQFwtv5NC6CD9vuVFV9L",
  "key26": "3yWsyda3UvvfVbDPVLbch8uZP1cCucA1jRb2aPEBQCFt9nUK96v6NHHREix4xe5NVBy3bXY7nJ36WVgcQu4uzKWP",
  "key27": "2cJRzYyLp75CR1CdTDJRkwnMMEvVzWAX4Mg8WnbgycYc6cYqHK4zcEWRfNNsxT19rLSEEpmQ7ZeJEiSDkwcSziPB",
  "key28": "4qKXhVrm2DEPJfh2G1Exbeahy8cYCbEstQeg6NFwmzDCCkWTEVB3YmbMpS2urLLJoHEQ1tnuNPqmAPkm5HFmimD6",
  "key29": "4BMqNvHBcWKCJpCXdiyUkVsE1Ne4HgBDASeeKntCU3qkCAzRDuHGB68qA43zpvmh1nTSAHwbWDinkkscvbwWHHhN",
  "key30": "37Q7XrBW9x2mLjBaiuHN84KJ1oZja536CjrXigJDwA4zw3GVUrxn4j8K6F1XkEWKo11qXRDQrd8C3akGmSbikanT",
  "key31": "wzsbDPDZpojG5omKvKjtkWS7rqEvzLn18cjfv75Z5QEhRFknpwD3Gt85DUntELtfRoaKU239hYtvs8tzAYF1YzM",
  "key32": "3NQvsmc3X7jtjjpVYmL3JfUWLWeP5k9JJ2sU9HztWYZ3JvUtnoRfV8wrbs3yKN8YFW1ukF1x9RVDh5tb5uZYer4p",
  "key33": "262rzH9reCdWHaehbqsdhoZrxRrJkaVTKRXvQutDRYCGd7YBwcd1YTdM5FFqXK6zUHkuw74UMiGzHbTKtW2nFjvH",
  "key34": "2SBz5x6ZcY1m9dqxJL2QiifggNG1BaUFxzA6o377y6PY96FknEuHUKLta37r49JLTe1a84JmejKzQ5biTK2MzJjz",
  "key35": "5dEhrri7cu9gMAN5Z3TzJyGERwjLWXkDCY2JYY3zRk7B1eoF8NFot2jHSwUnVsbYt5CbEn9KPkf6TPpMWp5sam4E",
  "key36": "48YcnGcLewWbqbSocpkNpzwd2NBKRkPSjrKHhPre7NqwMBd5SSg75J7xF65Vv27ewvoiES3hduoLa7vHXVSfxZuQ",
  "key37": "jTR27FozDHYAZib6QjsybLFZmLHQ52cNwLLLrarQNW7TbejnpDP6LTi5CAN5SDwZC5VVwGGDbMkzQTHjbWebcYr",
  "key38": "67WEqMDEuZfFsJ9SuPkeVz4ifRAP2YTtf57cQEuxH6HUmvVqV3dbp6KEugPFbPekXQSdReAiAH4Ywxf9MBjNdwH5",
  "key39": "3JPJCa8jRympivfZrCpDmKh8oLiJzs28oTBVSdTuQaKfgZ7jHyTY8g3RuvP5mdg4pfvFTzyu2DTzyBXwFG9MUX3z"
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
