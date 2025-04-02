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
    "7wfg8KNhmypz7cPzQ6VxHoN8UDd414dueHz2HBFn8V2YsR1dCEHYjpNoiD7MJ2TFdfSTFmuMHWPchWMtCnGYcsi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4foZ2Vw8mdmuWtHVk7H4WcfhbkBPkX5Ji7YxsLfBGucywsfcChSYJbiDnqznjTKswPYNUDrcG83inba8NiNY5i1e",
  "key1": "4UegpJ85VfsVBAeMXXrEYLxPeJtw66zxorEHLmmyV8iB61XEtDWdFHQJzwwjA6Af7PaKpscoS9PapRBeSmqLBUQR",
  "key2": "2iYiL7pTX7FW7ZA4rEhU8YciY9E2B8ZAcxKpvoMjWJYUpipRDbmCe6bGcfZGixzN4ULaZhyt8yMQm4QTRcxEkfyg",
  "key3": "2ZiPuHBbyxheqYpwofwCf4wnffTT1aSR4aEo2jKJ6GxT3r6UrHThmXzez12QCo6Hi61SKXKw49jC7TTWp7bjVedN",
  "key4": "5xtjScDaN2Rsax9tyVArwqhv1vkSpfvqYe1n15r1MthYXAbZ2SJqj18rkDb4iUeXL3gieqQNHKsuPfghm4ixmwte",
  "key5": "5RCp7tmHduc5HUz6SBmjz3TJKqdm1wKQSJiVgUzAkofTRakFaXLkMC4a3vKztxw7MdH4qQcEL39pFV9e1hA1urR2",
  "key6": "2oRT8JjGfjKhbMMsk7UtPCEXR3ejwYaErkLXLAgR49eZzA6QSCyBXuaH6poheeFwCSLGifS5GbxZ4aZK4CHzg3Ty",
  "key7": "4YMQATrWn74ZmdEuQC43fhTiMv7FqKjHTvE3imiVEaaAXTzgpUKSPL95q5DYcFLJnHWGe7yAPjHsjuBVtixe28Jk",
  "key8": "2wfU1u99dmnTXvsBqtErpsf4h7Wei768CEReAsHWydSZZ4kYYdq3CnRBdhHevMRWSkp6CG3uiC4vKYX1CNhmKK3V",
  "key9": "34Qz4CF7EvTPXAX9mkmjq2JEZLoxXptHD6VWdMKfrrrcW6bKNSyDjarDy7iR68W9Y1q9fPxZdQViBseqc8ZQkfZZ",
  "key10": "idZggQNd2K84MEfJEmjjvzvAHN7EKMy1RxdX8topmYDdSpNYhBjZSY3fmS4851evpqGGRJ8wKj5RQzAcGKrd4ph",
  "key11": "53nWDeAACb2e5szH6YkSs8s9sMk1W5BDf2Ey23PWf7VFoAEqpPuUJBgj5rc7ggRdKuMfNeocPmrQijoWmzsZmTZ5",
  "key12": "5JgeGd7CBauUoFFDwY5rCmihQ9UTdczjQZGDQR7RLxJtqMZF1RTxv7sJh5e8SJVoRyr1ixYyeUJy2M1q7UtnZKjT",
  "key13": "wVAAEixc2uVXVK34ri3USzCNdKPGeKmhM9qtaCxP9GJUYD5SMb3AafdShsErPZ1RKdwk2dDStAoRHbcYh21y3q1",
  "key14": "5ML7k4rmfniCkZDV8GySTWvhYB8b1GjhAE8XwUkqLQcQbnRM9fDKr8AtCmysGPDpBWce6kCieHgNzz6H7fT88JDH",
  "key15": "2aXHMx8pZrobrXjPRcd67PgpHremfWaXSmFAE56joBSF5wYCE4e3G86DM32NNHoPn3PpcMyg2Z6S5P1zAqePtnRL",
  "key16": "5tTJjRysdgPeBniwSYtnmn2Zge6hwM3aPHsGGeqL43aUJZ8LkuTXL7YqPctdrsmt4Xs9QGoSyvQ2wPN6Ft6PgAX",
  "key17": "bcymBcybzksBSSmAXXt14MUjnv8BDr9xNDo5DvG5DR5MXtmYPgchyhs4jBuavp9kvQ8a66jmhrRRweMPvwQZEhY",
  "key18": "28qzkRK11HeeAdKCoKMxdW2ttS5oHowXRyPQwAY9vNt2GVViXKYEdpzbJrerGb2VJAkvkEp2QGAhAgYit3ReGh5m",
  "key19": "4d9AF6AZK2pSSfAWdWV9n4mqCVUKrsxtTe6QVQ1yMh9PL8t4LEtyYyUeEocFS8Ykfh3wt5uFy7yVoHQJapwJDSNb",
  "key20": "cURXppYAaDgjivUhkfUkjkHK4EJgT5NeU47n2ntS4TX8xz6yRuKeT9CT6CUWocFhhktgXm7yDYhpbMdsYF5ctwc",
  "key21": "25h2yg2DaQGmMfm3nNE8PY1s8gjqREXMfugoJFGDbsyZRpfM8jiKZgawVBiKN58Prv6tUGSGV4rgNSgJPkY58W8w",
  "key22": "3JBNwH3vw17tMskCBapP6DuXnufnXptjQ2vPr52WNTvRWwK1UEezuTuPnMthTQKxfSGWhtGKh8DXMGPQmRiUzuvV",
  "key23": "2vdsZ4nfTPHd1kgF5p2dJ752jCuwsWePSY7Ti7kTUeeNUMWFrW7BX527LirLKwa7sVDMCZDcDAMTfvqU4sRPaYp5",
  "key24": "4ukqstETN9A3gXZ9RXvkrtcPjfbrrr4YUeEeKXqLTF5K2ENH8vkbHK1J7QxV5k9GLaqN5somr5ETPpQZuKcuUHMe",
  "key25": "mDd8XBuzWhrc7yKEQnwUZUwckYBzBBxqVZq8fP9BKcWGoggpXJJKpMTmyq1CaFPEmvfbvjLkhvVp6rURAv7ciUh",
  "key26": "XUGW5AttZUPLZfyGUZEPJtxrMcb2B5XkECJa5GYzkZLJ9zWiBkvDHDQj7PR29eEthjqfAw4mxR18GyMvZMNadwR",
  "key27": "4RfJ9ZK2VEyRELZem6QaZoN4mR1YAXe94SoBUxjQrDX9HaMPFP8d65qDaF17ASst8NcCss3UJYbLByx3WyEaC7u3",
  "key28": "5amvXjDjowmuxTvfw77ShpDr5P3KfkNkEwsUaoCzpxHSApTixz5U2dvoDA1tYKgNtsY9rJZsaTRxH946o69UdAAB",
  "key29": "2xE1K6BEhPJjGYRqkSu72mDPFWczue2vFUEpXG7xax6amk65GAZxdajRfLHrFxL32SgrKqjpPsFtbfw9HEvoUi2A",
  "key30": "2WPNmQJssTMqtUVkVmSV3d7e7DE4cESLbkaqrnosjV3qNaTFhytkmYkCaGPjqmYoSD4w4Vv9WyqqNBn5BvqCpvbg"
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
