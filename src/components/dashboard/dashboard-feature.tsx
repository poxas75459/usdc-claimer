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
    "3zfX8R85KYUqJ4vJSS1ukiZcJvpdV7WiyBixUM8bdudj3AiW3yLHirrEBJinDm5WCZwfzHteJbDDujfD9ighZhPX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4m6Ump7Dyc4BLvhBgZWpVkVWD4mmwV7XcN5QUN8448PQgUFQeyCTq3TYiuEjuUqod2y4UEgWWNZtCWR5pn8H1ZGy",
  "key1": "2cSoNoky6uq8H4Nxcm6MWSj7FSMMBLmy99TVuHKeJw9385dBTCsstUTe5HNASaeUAu8yCM1YNbvrL3XpCL3mtqUx",
  "key2": "CxDoqGjTgNLEfmAvBqnr4n2fjjHHEg35Fo5ANAH8QaprVgr7fnHLkXEskkbxycPKfHm92V4zTaBDaEJ15Cen9EK",
  "key3": "24V8XANhs4PZpasXQnYJ9rHjqHxoKaVgfuCY3HRC7yFWJd6aZCFSbWunXN9yYghwQFVwfseYRQArYSWCa1GJcay5",
  "key4": "5F6NePzGhTkDKUoFRmDspsAbJ1wFm3A6n3Yz1hMdDcFHggnY1vuU6TFVNMKhaB1guS4qhwVHyvMi5aP761MrE8gz",
  "key5": "5Kjz5ZoWBQJaWPvK6rWZqEFqwEWjnqVqtPK4jGjEnHbJR6bm3NXJxEULXqV6h9DUBJ27xxGQkmTC3ySZJ5CSoi3o",
  "key6": "55pYPBxrdZ5Y5HCaQnKgbzoYSTcdYwfF3Z7X9AiispkPCDJ228Vk3o4zv3iMrCb7oHKwTAknYD2RFmnBxEtBA4hy",
  "key7": "2YYi6bPerFVEYyfN6uCP6TKsD8gJMdEUQ1MpEa5zo5garnumHq3LiN4Mfh8kUGBU8PS8tNwH33DhDGxtaZ5RE69j",
  "key8": "4D387rDzYmozpf6bogGDct133U4McA7UfqTaBcs4BSmQmve5F2F5MRASkrXW75yvuLddRRDtMtvR5EuYjnhop24S",
  "key9": "fykUkq6i6v3Z9ynWtgpQqWGZKZyX9deiuPop7NUtHbPWE5pa5ZcStiP1nwwWs9TobKUhLSDLhMu8gmtEp1ScXUY",
  "key10": "3Sc7oHsKChJiDGLBHnPj5Z7xDUYEbU7GdDCFAKRaAhECsEpmxqS9r4WAubsJFjH6G3tQkbi5y33J8fHRhCq6aXss",
  "key11": "2ys2ouFhxMUiDYMVLT5vnjJZsJ8ELPcMiEAP9BXj4xPkLNgKDLJM9xM7RZ7hiHdsQHAdx9NYqZrRnW5WG7okPpBD",
  "key12": "VnfRVCQ17bdoM5QRTB5rK7xCcTUHtwTXLsERFgyJFLk9rVh1P5CSYABu3AEhrkXvNX8xK12EfPo6hok5Q4xcgSX",
  "key13": "48rQ5BvGHm3YG9Pb5rivoniCPmXXZBHVSe6rH3iihp8bMybJnTDVutGu4bSYDraqaSpCnKHqVr4v2FF2ftboYVmH",
  "key14": "5ExhBnN8s6oorMtqeybUjS7LovKdvdxJqgredCxPpoVwwxRAVtvpEMXuirk8hCBz5PKwWu39ubovRUFDpYCbFkjL",
  "key15": "4DXuZmBoSqF5XnEqNsAgt7J3dk5xmgvToZjF4KjfbSNgxomBVhetXLGQjtEo8KgkiqZzRkVUC5Y7Np2GM5yfLs49",
  "key16": "4G59bpePrh1A8SY2xFFPy8UZwS6w6p7WByByMrX5GKFxCzCq9q7NyoG24z16YxWxXdVYqotBUmC59UHWM1eGkyqo",
  "key17": "zQrUfSmYrJyba7AVx2DxiyzR5oE8utAruEGP2z1V4fUad37hwkLV8vAdMkg7vezggf3NuKG7ZmRV2wvECFfzRbP",
  "key18": "4HoNA4Pgc9gygM5htQ1M95BCAAMyCWcwwGSYZiTz7cgqoRPhWp4nJZZtbpDtpd4Jghnr3qYYGTgx1BeCmQkY7XJh",
  "key19": "2iR3YX1KuaVr1vRypLgCTQTYqdMmnSqqFJW4WTfUn31SVJMEqeR6LMMdjNSJ9U1J3eDeCsWda1oquo5WYafg6bsF",
  "key20": "28qPZUezLMTvreVDntNWB5H4Pnz8JnzYxJSgi6cy9Ykj7thkraByrGby7Vq3qmSayiZemasX4sS1jnKQ9zsDFgJQ",
  "key21": "359QMsVPXUvD3yng3vu79NASGqpYbrYAAf2iVRE4w9gjWEfwwbFA5A7wpt1vxxjGmH98kSGQKeVkWYfXczdgXpUi",
  "key22": "5tiYTMG8scZWLifJfaNnXFXWMGoR75NwDr4C6jEs7v5SgLseh5LxThLcmfMn9y6UnYYdRT4kfynt2YktvY6WfGj4",
  "key23": "dsrATAxRqGY8WQLAv646SsLA5837o1vxtD8MhSDGxDjeSTixdG5GZFsww5dmq38yVjFoXmCuRn9jR7UTgoYmLF2",
  "key24": "3br54oPZNjGDCvdMuctodokeD2FJmnA4NMqmv1TKFaZpwT2J1nQ9mKVaS9pvdqwwLuoet6vBzN2PZwGMwd5q3ufR",
  "key25": "3vomf32EqwLmBJCApqPdM1t2AqHQhvfudbuMSxMK6c3YqbjoZaNEVXWejP8EX3Ec2rXGwNg3wUaJJ7vpLBcTpWqw",
  "key26": "3yparwxfRR2vbG3b8zkBdf8VxUAD1hPbMNusV6osaK52uWa19ejdtBTu8nUMyr8yfkGKNvARmwmjjotsTPGqyE9Y",
  "key27": "8n1i3wD6TCvK3GxthqK9SCkouuJbY3ccYa41Whn3y3Rw4Zx8cog5hLUvhDVBCDaX8V7a3bFigY2v26WBf5n2q5e",
  "key28": "2b3VMAN7sTp8eDZ6AFHruiSL72Xf7HCZAYuu76CSZzfaHeuaz3oRKeVCatdK2wq4uMcWx2j3EACPunybn7aY2YNB",
  "key29": "4oFHmqeqoJ6RvzMXNPH9qpDeHpRXhteRkJ6Y3yvnLdCiokkuC7a3bjJeKdjnuigwptkSVP45FhDzyLaM4ySpkHx7",
  "key30": "2q1Qezxfcsr772FfECeB2mkLGfcRchShkVC7Ezt1rhGuratxxHk1Gaqf9TXgkuYAAta5TgLgvBAMpb1CatNmpEa",
  "key31": "48NqW1vWXQBeNeRSy3ZVpK2nqwxZP5hv1qNmgKNP7Bd9m9Xn6RwUUVjfKjifYmd8JYoSjyngAcPqf8NhTA8dhsBb",
  "key32": "3gxuJhxDxiNWjBQqsgh6AqHoyQFcLQcaT41j3JmqDn8ZAfia6WFdZeRNoXoGmAY4ESqYbMykq8TejbbKYi7aq6NG",
  "key33": "5V5hfLZLYSAo7WNvyZxEnUwjE4fdgEN8Bd7pLsz8wXUrs3k2C1fWXQThTKHhyeUs4AnFhn77h6F853YhtDNhBthE",
  "key34": "4JUgP2Q476ZHgwCmpDsP3ZZcCMyB8dP5c9gN39NoaUKvZmqLN5CTQwE1pxSuXxNHBWSQFqriP4LCLWJcU6dy7kqj",
  "key35": "2aJ3N7hbRgYZg6U3Hyso4WeB8FQ7LqSPH8TCqXKhQsB3wGLa3QWbi7BW6F3oBY8m8cjCrJQUXhdy35gtPVouxP81",
  "key36": "5CZHMtx9FRveyjTCVXwFUDrtwBX7RF2rdMyMceVmhhd5n9KVg5TESWH5nakFLHAur9AxV3JHwLvMgJMgiQHrK6yZ",
  "key37": "2ksNe8uMXMphhVkxa9TENNcoLi1rjAM4X6pe32q15B5waNgwiN6iiR2kysL94ZCR6JAwJrbDhj1ZX6Cu39663pn3",
  "key38": "3MpQdcuvscdwSvHsRNjQzUtNhs9G4nC4s1KAXWMwj5WYFi4BbdrostnwUpMVPV5Z6rxNbk8VTwpHjXzN5WCN84T4",
  "key39": "3jX4FggVnjgx6AxVsFbkiwqqntoezF71Xfz9hUMERoqtMp2gxguJVFJfE5ruLAfmHLpeT8xKKK3hqGdheGkA87tB",
  "key40": "3uDyg7xkfg3rKMF5MjXfscf6BzUf6jti6Mg3Ai5Rd9S2xkMhY2uymRe4axQUTifWWnn1QCTWHmgJusiQVxKiFRkR",
  "key41": "55XXNi9dUBL4vcu4NNt8FSY2GmdUYdyLP5TUzdyj2DH3zPj3pTS16CDq8ziQXx8kFcYZbH5MCPuPucEW4hrNiC2a",
  "key42": "roiuwyjSaS8S5deSGr3XTmUkSsfsaqBQcLDswepkUhwj89JHK5rD1CPhaKTZA1zsb2S6i5iFVhxdivQpx6M9vQk",
  "key43": "592X7X3bpidYPH7D2YDFczufWfLvJron2UVH8HSeakVNteWsdHqeYWz6KxE1tmwqBmjzZFcFMg5X2UX4zSXmqFHV",
  "key44": "5KF7QjGmWriNykcZ9RKguqHWzLc7SerY6UmRusAERAXWMsWP5oYjMU4Jm7CKtGtYGa8VBzRz4MnoTX7v6dTzr1BK",
  "key45": "4961dfqxMmmxpKk6e3mS9L5K672WdeXYi5WDRhvyxWC8hHwyPqAUuPkQBSB8scqTmo8sjXP3zNhJYDnr1gPvAkCc",
  "key46": "2MZitoeAeDHpUuLh69GwqYxkw6MowtoMKKouup7a5Qj95N1GPt6kGH4GpZM6AYthQyWweQSTotG8WdjjTbMWPbUj"
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
