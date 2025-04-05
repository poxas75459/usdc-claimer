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
    "2JjVeWH4GQo2kEWyV4s98Zhze9HWHx5aTRaan5AZNPv4vV7poDyg5BpS6Pq3uj53AhsR2D7MVSKE7146o95Lqsfv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vzb19jXoZGtbJsBbQ7NtpiTxaXiykNywRY7tTYXCouG5gYtZR1qkScegPxRRqpLoZVdSfL87GHXA6LYeEHJfk32",
  "key1": "x7fXDBSazfrAvRfHQxdD7GXM85TaGppLgvKpyvJ17nxwdoHxwqAtx1LDyaGFuyf8dHNZwXEiWALaYSj6RfnKptM",
  "key2": "5guBU9J6VHaKNioFcW72bGEMHwjPwXfKJdEyHZsuUY2DASCKNw6xD6UpZmkjEMEe5b4sy6ZopZYqcdicydTarznK",
  "key3": "5ndAHZXfdJpGvLeiAqAfyhLTmZZzAtJpZ1FYbL9gBxwCPXx9Y5iRzTton4Ymy9T3vtFNAcgZCPGpFWr8Kk8JiRiY",
  "key4": "3b8ncr6Tfz1euGEr3ry1Xe42Ys2qoZGVwVkJoTG5NSD9Eg2E7WGqX8gwW1pRRTcCak3mUsMe1Jn7yooJ9cqtLsHy",
  "key5": "548JX1fKSLuL8fHsb2kB14xpJUVCzFFG7Q8HPB4XVBEgcyLqJpYrNnhxofbGMPqKvgj9hkqPWGbTSRPFrAKhoqcP",
  "key6": "4m7kk4AdQZRgEfav2jCp7ekjS6iSPwsLLVM9jgb3uDh5sPBSALWEv7rKhRK7QYAUpQf21q6UnMMuqc12Q433sf4r",
  "key7": "3NkepYuuNz3B4rLvJvW3MfW1vZDCgxB9yq9Kf9jXdJvGZXVtRbXAtjGqMZ5ScyXnq2e4uFnqNYtSGq2GyN4w6rbt",
  "key8": "3VjXJSPVYynoKpcJMsiELyEbdC5psDCAnQbJF6vHBwY8AiEtrPSKhoNFD2Qob3cygV18613scaPYWDdRHjmAU3JC",
  "key9": "5xxCMr9ZWRSynaYqHWQTx5ShrcghNLAE4emEiJgew9m3ZTqLkGXgV7JrHmtrsBzoKX5Yaq36Ahuk468U17nZ9q5q",
  "key10": "J6xEWZq8KrhzeQvLxbkZThBusr3wujmy2njg3EHr2RNLusuzxcGXi3d9dVUeMuUrAS9hiAbrKU9oQjSHkTEPpdr",
  "key11": "4CDkBfXbuGnuKfehqY1jzghvPhTNNwPqArusSbBtZKD9ynM2vTYQUfAKJ4Lo5unUyVce4gyHvnmCzSosiZKawD6M",
  "key12": "4xAuhSfM1tJuhYxcZKZ8Gyq1za7kfsF5DBNUGEskxy3GebGwTWPzkWFvdMhTM2ZTcP3uPN1CxTqwCwoWV1Rkq3uv",
  "key13": "46UBmLHfvkJN67xMxbizzfXkUCgbp5da1nRSAv26BkiUCbi8iEE2GygMmWtrKFwNs9jGUHidE5bEVVNPURVRBvds",
  "key14": "Sd6Dy9ymhiMcCqBrGBGx22c7vy19JxyLk68LFdtTQkiMhLmXf68NFRucQuupDqB1sCEHez5vTf7ExRXuiJ5zKE2",
  "key15": "55Z6sS9enM1CzW2Wqw2xhjdgATeVy48bmP5q36rXo9jown3vC6KKgo8cumWuLyCvV9FBs1XaBM5qcGdjjU9H7mbQ",
  "key16": "58SfMLMvnXS5tGYbztXLQXd4TTBKHMx7ygmWzoFYYsfBbARSyj5MeRREhXw9SejwEp3zZm9NEMLo8taQGB5X6WS9",
  "key17": "3LYiUht2NpCQFJ5DirfnEss28GpdRUT28KBVoZQKfkH4PVFkGFMTb8ZcrPrXZrtizgMELENJnofjP1HvXiWAEGXd",
  "key18": "3oMHyiTcnB3q72LCJuZZ1Z1SN2WnypDfNPzwcZobGd2EVDN4gcZgNKU7y586m9nis9HJVGVqJk1JDgbqa2j66VoS",
  "key19": "4fggVds2fDuTfnsF7fYho6GMPHQjSk2ke64kXRV6YdY3JzqF2SyzGfA7HVoyb3JZ4BTnWh3wJnqarz7vXYJkhsDe",
  "key20": "2LGLHq15x7Tz6arNpNNaTXCpSLchVsccH285aaXJydP8ArChd9KJejnZeZLVdPv1m87Q7ahkZGRqvq5E6mHSgx3c",
  "key21": "3RRrmx84m47pJ7vK9SSmQWbKosBmA4DeiungVznH6f8yqgqkeR58rtYaPM52MgknaoJR7KZxx2oBGx48UfJEdWFQ",
  "key22": "2WR8vyCfbb5ydWKF5DdViXf41NyZA1Zy9Gp8LoxwGjE9MA9DGPJrTZCCb6V6VwKpsSfrWYQUAAu3TDECPfpjf8vp",
  "key23": "3GtkdyQEc3YmfA2dVLyYWKxmo1q1c99LC1yAzcgR51Rbi9hUbjndZg51j9B6wqD4XhuqcphHizh2WcSUQYN24r9r",
  "key24": "5xk4HnmozUSGf9MsfbRfd552TQtM2P8S4JQMDZVP6bmtU645MSe7F9xDVJq1jnp17mCNvm5WqdnhBLKEjQC3Fi31",
  "key25": "4aFPwktT3wpKBQcZcdkMt1AdoyNaqH2cPhJogUiyr15GcSq2hSTSbbbZ43pJhNdQZF6H8tC16K6ErDVPdn9wiTkf",
  "key26": "3ks5zHXXjnx414LBFRrKy5GFCzzS2paDq5yCZ6cLXtoEdjiu3Znf8CWAWwbmsthbDeBGditTY8sPSHdscxYTw2oX",
  "key27": "5BvL2Bby5TDU5u827HbfuEsfW1qvSFqrYLoLAQAkuy7sEHHeUgerEZ9Afb3XnkhzhVwVLVCwfAk6SaNtrH7jcb1U",
  "key28": "4VynGy3sKt1EXgx3qsDXLRxuxhAXG5RA1uCV3CYoUgYvRCsKqh32qExZrLokKrMSfTg94CDC3Cwmnb85GNx1B1PQ",
  "key29": "hZu8rSTTvywixtBSWs6GC82EXPfAVANEPQ8rWTDr1WvGiF5hFQjGwoWv17k4HR4ziAomPXoJJ2Wi1UYmUo4zYys",
  "key30": "29Vi7bBZhecJwVftLBSVzVhcZFgPQDGqpepWpeFVxiM7WU7YZSqKrZCsHkvxHbXknLbo6PxDCfe8sQxShvEKeUHW",
  "key31": "4sLhSYwKLBnZtWdK3WrD1BEZya54s1aL9RZhC2fDX7mWH7i9bSSFrKucHjtPbcZUha5fW4agEi3nwEgogjG5bkpH",
  "key32": "5N7BnVnwt3q7srZ89ph9Rfus6d4p6zUYLam6JbdLnRd5zKkn123tJCNttX3d6kUiraHK1cBQE73yDNttHePi5whp",
  "key33": "vnVJGjnSqrue3qZXWaVXc1wiXcSqSRytLHZ9U2knpDrV8PUevt8QQGdQWN5qjJsuZZbG83sUiZEDHryV9AFqEmU",
  "key34": "27Xdxk3sMkYo9S2yLBfvqYgV8mZN6NdLPKtR9Y8RgHT8DGjC9paBoUVJDxYGhZFwZxCAXneMCa7kmMUb2dyEH6em",
  "key35": "4VaRUf66WC6Rz9t3Nkorjh5My4VWqq2y8anghz9b1KPrrBH17NP9xEvdUBB8Doiqtfp6nHdvFP2KG8aXMvSQpc2H",
  "key36": "3ZKSNpGMbdjNXCnLs9A7Qt8XiQ2diX2YSsYcd8c8mVKQaPdL9BEApA7tntt3Sk54tpWrsx7Ve7QpHEhiGcqCB7pX",
  "key37": "3GS8F99TjyUxDsbkuZMqH7sLbLkmUvjgzdjgKSDqutP4zynFug3FFHMM5ZZz2SwX4TwTRPBePXaVph3RF3KzMLwG"
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
