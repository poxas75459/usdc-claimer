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
    "2Pttosyvozd93g5ikkS44YonBKBnKWNcNSXfzyZB9JdVrtuD7Mm7iAcT3wKiQ7NWxQ6u9K3tC9VKNK2ZwWRyXUmN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65S8kEcFPTNDX4H4orfFf4JNvPKRzB3HdL2c9RhLVVZKKMacL41XxgjPTB66DttjwAiXMqAkrmsgGgPu5ZLPofUa",
  "key1": "4xw1vLYyGW2wXX1xSFc11xx1qE9sUnyCpYmnzsNEgDA3b6xhz1VCJ4i7LS2xf3bS2caYJynnA8i4FGqERzj2ByVt",
  "key2": "5NW5DgNUBaxpTeBDQztWeMDYcpcV5gqoCZ6xUNm4hrK2M58h1caPi9PrmMNsEW89rYnYCeCPsrxeqp6uuPC573Bx",
  "key3": "5xRHhr3pzaNuow8RTphEDsWiQ4kBWEynNDXuZq27nd7y9fX4Vgkonak7YS5QH6rYSy3iYW4jupyeKvKSyN7iojJS",
  "key4": "4nsQCvtCQUdxrC5xcLSiTypTCTSjUpmsgHZbF6jYnHwGomPuh9P1pLuc21HaKkwREgigDoUDbPXyMmsmr1bQNwZi",
  "key5": "372eeH4VYPxtg1gzizAjFvww288NJiYHhtL6wKYA8PVTbCHxRcqCKog6uUHgkYm23XdJHvn7mHAca2FU76UGKybu",
  "key6": "2ydW8WJFHfo8yGDjKEzWHMjRc2CYBT162pweLtRjPH7Xs5pByysKv1aoyTNQTpwUaKgbRsqVyzU12JmUo4GkrUkx",
  "key7": "79ueZDsSA9NamcpUjQS27Wb59WCbp6WDQ6VCyXuaHxqmVLGf7VNTqMJdKLpU8grH43w4xWMKstDMMUX1dfFzEJA",
  "key8": "5wSnpDPM6vWbRJmfKgwsuvEfLWmyMW7MVTxKRqnSSnehjHp7JVqc6ucWG51byE4WXgJYa5jX2JEVQcaqeX5kdyja",
  "key9": "QUgMTSb12i923g7FJHUcF139ZYX7ut5RPwcMsdadYjwDqHsEZcp6yKANWcqvJokh5y7u8w3vnV7yUAjz8bz4nkQ",
  "key10": "S1wQAr28rzWaX8f7kgb2ys1aGWXeKQpDPSkdQyDJcoAw7M12ecyPmqyRp5nDnq1ixFUsPXqZdaGUghQnwm7gV1D",
  "key11": "2WzSyPUGiUdnhq5Y2e7MurVNsKJFkpu6nf3TtSsFPhmbjh4PUpWdVPA5njy3UWe8bMbUt41sKmu3UQa8geJc71RL",
  "key12": "5Gf9kmiTE5cTFQEgMLmiwsmNv7MgthGpJ7aDz9iqJ3RVEYSSvNqkgJDcQ8PdVAxsL3xNgyXPtLSZZFHYf2KLndKV",
  "key13": "2R7teRRh2EoUUH8Ba4K9kNoPg2KsbsKmcZcRNDAkkWrHR8S7wwrmz9BvREm1QPFaQSFpwokz3z5M1jcB8hoL5PMw",
  "key14": "4SBbRa4sLCkKQb8UirjfKSywshDPf3e3LgoDTbCmsqowgZfFA8NzVfTz2r7NivZkh1RtyUBwe4wUxgVcXwKiUq9w",
  "key15": "3S7EExSJtbtBYLpyZPcB6DQiN2ipYNf8SZtjnJTaqB76soevhPRC8nZdvgzWyZ4joeCnkAjvMYRSjtqBCG93otHN",
  "key16": "3Axvv9xzB9GGpUciXxGdL6aiB82VZHvittkAX9nWbqhNhSDw4ioZRaYZWsborwhxrPV3VkrRyNn9xdVEX5e6BZQL",
  "key17": "4RFC2Hkmx1B8p68r4rvyWGgEseoUueRjjwuoKAbaWxF6CxLfu5TKotjao5igQevMrzm2DgNRkPxr659wmUKP8Kh8",
  "key18": "2F8K9p1bEEuy3fxr2RGyg3j7Jts6JWwnviBcQsQtMxgnB7HRnQBTtEoGS3cXtZZWaViFUhcddDuGCGjDqQ8dPfKC",
  "key19": "2GmSB9XFZ2BUR9Pt1fyY1Xz3EjjmBWPFHH6uWk8ZJvrn5rzKviP5s5QqRfNiDDct6SqKoXqyNfXeu6ftNo1CsHG5",
  "key20": "v75s38JL7z8jQavXCGGbdvHM61SgVcd7tM9pHk3fKL7oskkoqzqvXz2EwyU6LGvyYGi1689nXBDEU57QghRz8Gq",
  "key21": "4jRdhLSXYxk6C8NCi8fk6fBWtETaWm9kh8ebGNDqoHo3eCEVV2MTSJaZuH7k5Tk3bcdWS4FFR1oiZuyTKZ6jUsq8",
  "key22": "3haxM2dt9mfLk4nZMcRehqwAD7ofzmWdSYh8HSaEvVbU1jvZjdCwVdZ9wwHU9FuyGaJsQZrn1KzpkTuv1E4ctydt",
  "key23": "3YK9ksFrDKAPCuVTiXARm5miZCNriJt1KpYddVjqq2agpS7x5YbghCRFo2rsPbD5gkKu251JYwjeNinpGB81X5z1",
  "key24": "5asNzaF7sAiEBZu2erncthbZ6d27XjL6bTUnQrQkjP3M9Xrp6KeBshxwCL3Je1YUY1yoU8Er9uPYAGr7j4qipYDt",
  "key25": "2HLaBL3tRnptmWj3N4uhK6cHSnhqW8m4XrWRB3EXk4MxvZS7Eo31imHzJoYdDy8qexiKbn1T2LEd1nGwoefUrQTM",
  "key26": "4nVx6rAoeVKnFXZe46Lt3p6hs8mx5ZV2kf4ViDcRxuj5gMb9QSyQFDua7iL9tSCXwgM5jcRmJHdxp1ZmtWTxjLvc",
  "key27": "Hvjbr8SDma6FA3hUvm96h9zky6gKU5NEkrwkaArVX6icnZA2MewswKtAGFKqRKGbXUCxsvpfJoFMDUijCrE2r7e",
  "key28": "2aV6PVeDQ6jpbHLeBMas3N87x5RwEX6HJjyRR3eBkFJ4Hzb44LYEuteBtSi13yjQddrzc9Tw35qehiHURYQcAcro"
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
