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
    "dQ81UwpATG5z8Zca8z4RYS9NLN9yNQQjKjdpRJM6ocYTAmJn7mYZQHSm1GXu6ZKxaxLCPvdbTPh7v8G8thUstT7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CyPjRTm5p2hmJKNgzuD7DYBmQto1DKQrdMHmDpGeKjAiDh4S8VEVTEejpXUXnGg21eeGzBJNRBSrbDPXdHR3vGw",
  "key1": "2VtuEBSSa8vXFGQhGMXyVAS2h9TDj78oB7mg8hbapxxBczdG3viu4egoYmHfnBgv83RcXGm7h7BnGQdvpikFXCEk",
  "key2": "4sFyZQJjPXrgdw5bFxNDiWFkuuYCevMtMfuBmydeckv2LP9jjjFDoBQicgcLSbTG6bALHp9dQTWUjF9ZNiaK5NDs",
  "key3": "4qumwhZ8gprVBM1CXKev4DkdYVASTUYR3scp5opGvtdTw1oDkwnzGYM6eecGzKB7A36Ljc8mWnRXXy8yjbscwW17",
  "key4": "d237bZ1kQ9JH3FugXjz4P4FpSrRZg5Te1yZQhyfRLnw8kiecdi98VoG1Cuhm7b4SYfSmv1tKbSkGQiU5sfsaCwB",
  "key5": "5psVViSKw7kL85G1e3VHbnkoHZGzYRUSxZPXJRj5DfdvJv8dyh4TC9dD9jhjmdPf7WQm32rUaGFUFDYPuRjzkS3x",
  "key6": "4W4cCqUCna6Wbvax2eVT2FhN3HQgCgTgbsT4wwrFKCLaSwbRMrKzEgmfYChkicR7LtsTZbBqTSV9Y3ewxuJuJHtu",
  "key7": "2RqrJsQBjrEXg7JUzp8iivM9sDm6Z8FZCBpCb1aMEBrXEf7Sr8UJog2WpZqjt8zo9FCnRHCmkisBGuWzm62KsQpT",
  "key8": "35WPkRqCpfAKuvpd3DwjZ5AtMry67QYG3ChyaAPdHoXkvw59LL9W9oCs34XXfVkqzvgN9HggKKXCojW21A6PYAtD",
  "key9": "34Mfbm3XHaS6KHzguALvMGtskPuzsX62k2QGLBz5QAYtNFHkvbEibih9ZDPyx3zhnKuLtfgJPZ63eEPQFMqxzR5Q",
  "key10": "4XgQBqF221b5WkgsNXJ8kt4HpV6CbrUb9LgbZ1chX32LUWbaHxFMeJ917kBUNQYKXkLEEmuDyEE24V8wH8eBiruJ",
  "key11": "xrRwZynVgNSAnZoCxMGM3Cn79XrMGyhmtGcksmeJVy8uBKhChnvNCKAcYghUkVGyp9AnZVjBjPXNsjjwwLSuw3r",
  "key12": "4xhzmiDJksbcpyDZK3moPhLYNdVbQszeEpfKxnwXea13QGkQ4SgKC8h5mXijwNkmSt33Wvym1CGvzh3KR1MYMYJY",
  "key13": "4E9AA5FJKEzG94zRGQhSG9r62MaWjezUWKyHut9abUoGogZdnr6rbABaZnsRYQ4Y7eNxZGucWLRYWhReJi2feqA4",
  "key14": "3ghhpRMGz8uucRDMrSgPM8tcyvADDQuvobiwTYBzuYaGDT4QikDf7iVtE1BjpxMLdPjzjHDkkhu6UM5QJtHfrDbh",
  "key15": "sV1vmeVxfPK33mKyzW6ApVcjDEFtLrDASrwvM2XsC22Pz3RWEHgUwaawLWsScntZEzsSUyx9ui4Zx5uUg8B3Dy1",
  "key16": "2p3jN8MmHHoYRh32mULVF5UzrZDbhoMv6GeyKjAYzgySqft64AMGNRwD5sYFTWGj7DDjf5fNxu3bn8k3kYSsZphP",
  "key17": "4HFEeFWxiqKmqUfNpFvJQUuKVSMWJ6oFNUvUVhR31MmkiQDeQnJmkku8ijddtcqtH4cpWXPoGMv8RMczJ8LEkUMY",
  "key18": "2YD8VKkibgHfxe7EG7avMb4xN8ubmFuMxG7TDpKAEd9BPvmrL6wGjbmdiQpJ3UK9chQnFm32SMY6xs6Xq8t4PiGr",
  "key19": "61AvB3pFJQLTCdoHcaMvUfSaGZSqLUtm8Y9Ft4pdsoze3R8hBNxvTWxsYg1AXEbbTc45bgm9qhcUW6xHnBrHp6wZ",
  "key20": "2pwKNmojDtA33NuFjMugQVFdJaDJf2rb9JBSvMk64Kg8MCzWuRWDda2TbWeJDADknotWonQXDE6W6X2Ja54Wj7E3",
  "key21": "2E9dbSJnXshhygx2U5m7evJeRmem9LHrK99AXdQAaaH7LbhjYJD8NobHFazjqmNdNmxwCE77GcL36kW3zFRv8ZgT",
  "key22": "24kydnCqJiHri9MFj3w6bWJNZnewH6Puc97maCiMr5ZQmAmQ4JfzHrQMFvEaLiq1BMUvEoyFJURF4LCGe46ngDHq",
  "key23": "2X9hWGxhMxhBNaRc9v1jeaeLaczejmWDTeVQTfWLhEnYUASJ32Rt1usFfVdzHpcRXrPaWcX1EjEu2vzqxuQybKQD",
  "key24": "BKBxSkkLFi9MBruAVe1PGGM3kzCesoEJd7NycREfBU7cM32vQzPqG8KVpk6LQTyM8oTdthvxooQvQKmMDmhy7rH",
  "key25": "5N6WKvkFNevDaa94GBn5zeLSXuKZHW24KhEXYiDhNJLN7wY81hX6H62C9s9wmswmCfUXteViddssco7N6d75WpT2",
  "key26": "3avd8PtjFX3YEogLCkyNyvE82RdfFQJUHufN7mtaXPq7TBPY6HzRkMXkrHBszjnQnLy14WLCRs6NLuweZ2n9i2YY",
  "key27": "2nGqudMMQoMfH612Se4Nq6N4J6BsoWXb8LrCtnixkFK277Zr3pmjV7MpqNNH6WSPw8kHyojX4MBDvY1ogR9ae5vE",
  "key28": "5wXCQkAKZcN4W3k85AA2dUxk2jF5HDLCAxPg83db9ETBKp1tmq2MYEu2sqQiCKhK6hpJkovxco1Xb31YC712L8nx",
  "key29": "SKJvKHVMFAmGp2XsEkSDENR2KYcBvox78gq9kDBk4771sDqfyghKW63WvqnSKosUK2AD59jRwK93YAfhbMZSNsv",
  "key30": "4SqFgc394SNm4iN1qGhxsABa1dB8faS6o2ksTrwcTLpUoSFTRPPZ2UuASxhdMdesYVqWwzeU7DwH9weCfm8JBZdA",
  "key31": "e9PzzAf9dfGfEQpQvqAN1aFMQzp8RmMKPkVV6Zku3S8tmYZD5ygZWC8wWHdTQsggtu3k6v4jZA2NhSMertYzpJk",
  "key32": "2ZSzVBHkro6267xPnaQbcWZBNu4zCfjVNXMb4JQPYc5Ey5mTUa3puhj44jJ5akCGQXCFKYsnVSk7GrK2aT9LPqxV",
  "key33": "43fdqkavGzYrrrAAz4BhSAVHBCKbWVPQcPMMdSjEwLtfENSPyHAtZ8kBuvXsNwxwtCf2Q7MVVUoLQ5bsjJj8ik9M"
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
