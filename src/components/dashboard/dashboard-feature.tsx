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
    "2MJQL13qDpAPqkFmmUTpYQ4cDPEXYWkXUbpRKS2NkymPH96dkjttYhqNVxmtJ3m1RPwfCWbAF7vCJVfbqhexa9WP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MVZwmzbpabyJUHEX9bTp2MijMvYwvmDBURqMNn8hcB5mVYJxitYjwr6A85bxVkuZBywQCAyMNsJwhYv6osFz3fb",
  "key1": "5g7LxNfuueGbL5NK8ucAhco9jPxQwbL8RYAZBa98g2jG7azfNFSbTcgtZyKASwe6byv1puYWVzALwFvXMjGTQLdv",
  "key2": "4JyJNZNViDzyEMfcHBQqKsnToMBqrk1hpVLHmQPdHoB1HMuNM9oK89vxwELLiyzLhfUk7r1DbPQexPhkDhuDaNJn",
  "key3": "4h2UtNL7TSmToPh828YeWTTaphED9AWbMjR9qHT3vGu29NKKyqYZcXP8dDAkKT9HKuAPfxRWakVoGUdfQ3f9QfnE",
  "key4": "5B7sXhChTGoMRVPYXcE49X92tXkp65tmo2VnABrH4tHanmD5Asj4G5db3c9XxHFiNJwRLyHZygFW9ggf2fbouJF9",
  "key5": "2kRxQvCiL7BEHmVGU53GM3Nd7WsgfSDT4JYDYim3kGmiZcF7thRaZ83AoCqpNK77LTi6jBZYBdc8aYfVwbb5xPvJ",
  "key6": "38cmSbRXHNoXzAWdo317mRUyP8X4JyRQWbtPLazimVvVGRh319NyyarGMVMUowynqqeBT95FqYeXRXbMxmrLPfuU",
  "key7": "76LyXJsJgG45UQGN2847hUAhmr1rBMj9X3fgc7HaEtcpEaXxM7ZhY5RcYTpmt9wqGB9jcvnn2cEcoQsBwJoQx8X",
  "key8": "ZQY7RJSpLZCdKFCraisEYVHpw5qdk2f1dWvp2jhxnqgYfwWfVrZBerBs6eYD3eFfduNGSLF4PtG1hr9n6NU6BBB",
  "key9": "2a1UuhvY3Hp3XcEhqM1mfUEEkcLywcA6LaBYLC7s8kEhPUnV6PM7DVawb9WWFJCdRDyMxyoS5jJBXH2TaGmwNmru",
  "key10": "3m2H3SuasGDQ6WmtmQrCWu3YWiaLPuJUUgjhvatTG5qQi3UMmzjjnk5jToFXE8NckUjUkcFZH2hpb6c7hh2QP32x",
  "key11": "7tpzhxum8HUVQcEsDVG9V5LNyKjMeZQpDwnm71zphHFxznRstJDcy1F11LEgBKft5Z1GK7UhrD9spXb2CCLpA4r",
  "key12": "4jyE9WKeFAQ9LYJrXRKuF1ioi1Dqpk8buZGvsURmjse4BES69PpBWbR3qvGvgnByejmw2p6V4v4XRnHev3z796Ta",
  "key13": "4NnhdKtuH26n26cqp3XyNoWTzvQchZy38VEAkrGqLWFUwvPiJFQGwgNMY879pNTax7kJVcVZWKuAEELBN2WsyTiW",
  "key14": "4nK1ZnHvLPHz17wU9RY6f39afcYEc4VsRy3jeeNBbytF9EJGvsXNup4MCYESBXhj4pquiUzNfK6Lchzsnv1jVqD8",
  "key15": "5dSiZEspPQvVNqr54DnGKLZY4h6PEauJ8roi81nZNfb5iLRgCmuL5T7735fihvTqetBzFJNM5ghRjkXWs1Ab7zKx",
  "key16": "2VzZ6KtFfBCtLjWcpxefjcArGZTXn1Rd1Z8B8Fgo4F9MZZjmddC4r3ybsJgr2Ba2MkPP3bWST7ifSxKNFwXrWp8Q",
  "key17": "mU1TdwZvbWLLumENWr9pbeD1L9TEtYEBTcyLh9FCHQeqRAA9pVuLYPrAKji68QrPgcsjVx3jnhRTDZLxwXi8B3e",
  "key18": "4uSdkG3NkBc7fBgnVSs8oAro6e8jNK1vVz2FFiZfPjFwtKcAiTTAjZdd2q7Ji4tTFWQCRnJgD6zna8YMkx6enwVi",
  "key19": "2b2YLajb8yhbe3jU4QdRhHb7cZYApf5DDGKH5reMYws27SYJihrWDVb3CSnBeL9i6CQTAo6aeM4FvtzYZEBxh7cq",
  "key20": "5z2ziydjZKvXjfX2xSWEmRuNS1wLG69KjzNqdpBQZ8rkvaitFFKkxsoLNMLCnwiFxiniN6KeLqLousQNtiaiJCv8",
  "key21": "65A7JbRYRzUn5euRpPbRcnirXyy7zCR9mrW1H9AvqyhEaB59fRBbiRLSJVvmD5XYnD3P1AswFRhXnyiTSkLVL6LW",
  "key22": "3GtQv3QzsuPyuUfnbffqkFbJVXi2zfvxdK5DisMgzuN5cFwGFhhwXYhbMHVJN2AuPi8ivtWiH3i5LrLgw5a1Y284",
  "key23": "5MGYjTLMVacuAnh9zmrwbbPDrohXhNx69XqNBTFgJR3dseLrJC6vjEUTnF2Bcyhn4xmhNas841SmNwuQNu9XzMoY",
  "key24": "3jtV8r6SSjSedA4QYMU84UjWe7bpQd74CJVQg61rHfJPjGUUireFqXs7XNeoNZ7ADfG4WYXN3rT6yhZeW2GCVt97",
  "key25": "38Dr4R9LvQSCxgmLSZ3sD8rdnEvKsY5A4PTuJfg6Qqa955MaiuQQc1XpGuZXqomAhK4VeH9YVn8GZDtft5WzaBNx",
  "key26": "86mtNdqSgRekS2FB8AwSieXr1qcU9ZSdfwGL4fXWNyqtV2717JeH6GMMnxc7vGxB2gaivyPTqjdVbRhojgaG46f",
  "key27": "KQoowffGvQ1SRuZ6YawGCknBz8xCZ6fuVcBew3H2EKrymX9APKb98gF56esXy7ar5L6jgQYwQsCHe7wk4wE14Ts",
  "key28": "RtoNx6bYqoaAffpLHRbP9KLTEQfNQzWaw1kxncTTUm54rhHsMbAr8YDUGcCifuugXdfXZ3ngHHEYHW8VGwvBxci",
  "key29": "3BX6ZiiSCnRu4tWvgocETw1PiakZXNBnxbmJbynpHqiPqXjjLsLD2YSYEXxySM8iZe3JMVGpSWVp1DYS9Tk1jEJ9",
  "key30": "3uEN2ZepjCxYvtS1HqFBowxC3rua1sPD7vuRpr7HJhYVrZxEihxrdYRwdwafL64JPRpZhYadvYHNtbL7UQuucMJ8",
  "key31": "4eaegSbRVGZZQUaJBzN5hwiAJ4edzyNdrG3S83KRGBQPLzEGToNhmCekeBtrKhdJFR9RG4rvCcqw6efhB7E8oyFv",
  "key32": "3PoD5cac1NvGrb9a54dsvqenLyohStgiQKsEYcBnhbgSHjo5euXsByxcsZFAz5KP9h1yu1Z4Y7yYaJVuk54L9AEL",
  "key33": "2AvuDWmq8xVQKsvTnkeA4EH9eEJmBEGuTFsPzkHrDP3Ku3CGaD1Q4m5JoYYYDz1AwjJMHLUxFv9G5wCzQRTM23Rs",
  "key34": "BQxE2wwCdtT8BPNEYG1AXqtd3kd8Kk51d7ZQyNLAeU8EYDKgLvZPZqyXshFdETAJYGLzCWfB4XRz8AuUFDT3JRd",
  "key35": "3YYXQ9UVL5i8AHCZgCpxiuWRDgdzTTnrmnAciq8eUja2ktuNLh3t5bwGxkDe2QTRWofGbRbAhi81RfBhi77UcN72",
  "key36": "4EvDJ5v6cW2oFRBHNqtBZDGHgnNTB2zhEvneoHbmqunaKhSXjdsSRCuzPkQgcUX1NJVLZpsNJK9d48zvNxeYv7hG",
  "key37": "2dxkXPiFNuRG7boxg8LNa4ZFboL7yhPc9Km67hWpqXY6LrmbZHduTXCQ4RP4ZvScTdx3sNjd921coXFkSvFv2y6y",
  "key38": "3VmiefdKiqBxiZjAZ3JVWbodRCQs7TW3b1vB6Rhm6Z3ew9rGUZTgVFHZkjbtGG73g2RjixAyVzWU21a2nsSq5QEb",
  "key39": "4ReUiUWamoHQaq5qpTtkTSMm2nqncb2kJmrdv4M6qDaxABgE6afgfLTKa2MHnF66YCQYkVd4kZXAgDesbTBYGYqR",
  "key40": "5qZcrxrD4VmWip9MvCQebhkwGjY9iNTgPtJbmiMbg8qquabLn5kaaiNgJM7XWHgkp1LcD3eHpDmurxzNqNsBzma1",
  "key41": "3srbhveNzAnRWUWMavqartDtivwS1wz8TVfkW18oEneQR7ii3DWVm6Bcssq7LNikrujCATDuQbaBjDQyHJKnEC9m",
  "key42": "49RrvVJwtiadkQcfyr2bTZLcz2hD7dPcnqbSRyVzmg3dNj4m9cW4kCnYgoipsbCphPppcV153Cx4Hkn62DytHowT",
  "key43": "3XRUSUCN4tFuKzmVYqisnveQWR3jGpzL4ydJjGDntZuo6KjygR5R9jsaNXLPrub6CXosHmGPdWJCip3NC8n6Y9Cj",
  "key44": "2SdQjSpzrmRR85tAjJEuFD82FBhnDgRB4aUL41eY2ExscJorjkiee7BQYDbQr3cq23WvJSr9uwvCwF7byLDKF7zF",
  "key45": "2Kruj2YtWG8QGRPiU9AD24Hmrbwho6uXGopJwgK5qJX3Qf9FfkqyTmXNYHEN1MxpBaoziE3bK8AwC1YUzHKftYu2",
  "key46": "3STdtMwm2pSEcPCVjNc6WXEpiQ29S7YyUiEgGo1zVXGwuWM6LSZ9z6NgjPkuJpfv8T2rxp5jBXUxmqv3Q6H442om"
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
