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
    "3Xad2NvccYmgmQc9huNcWc3MFjroAg4ToyuaLqSRdS9xJYPotdHyDiyu6cqzjPrXgDxYkv39D9AwwSav4NRZSL14"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54uGKynfTkyX7nhASL8Pmsijz6Rib4YmXhEdaUvznW9Yy4qimSeYFy5YaJs7MjEinCp4mM2orjBDCC4q8yZ6cgGq",
  "key1": "59jAUMvW1npPyFJRPuXoVCV6a1KbxgErBNZk6FcHZ8qDmxMcFUPmuNpmLXLpbmRHnQzMZjJXgS2QGQG1r7Z889c1",
  "key2": "49NR2xKGVZ1XypY11gjcRhjDJvSy71SQ5gRAdUj1KPVheTJNpypEU3gnqiMJXrRXr8EVJFA1573X69dYCL1uF7pZ",
  "key3": "2frsRfwqPgosoxqVKmChbNo5MTBKFtw9MWFoxYyR4g3kobT4jJV6ZBASu6DCA4Fcaw7sgH8VP4nehy365AZt4BgY",
  "key4": "zhtGmtXbMnjyJsbpyC8jkha5CXZ9EHa4Uw9A6vgkvJoFBZHHVxEc1dceeFyNP8YUoqAzGioejnpfKiQCfcWoNEp",
  "key5": "mRN8kS1TU9qDot1jqQB1vxuEJuYHL4uc3yRxwNgiv5jXaw3dg5DaLLa5vJgsqCTsCJRmo8X1SaLegSAkmuVScxg",
  "key6": "67USuQ5n4Kc2bydM5wx7cenZVV59oahKUVZ6tFJAgYKShw3sYYCpNxsgau14m3tnoFTHGfihdoJLSrudPYgB3Ech",
  "key7": "5nxnZX1JCFtrZksiEyuakttHmnBFvzVSRpg3hRFtpMz5ewZks58g8z3tqUcgpPCWszJCaFZ8XSfauEka1DWBhuS1",
  "key8": "5XT7RUAgdJV9c6csgWq6BdXnS2zggwk2pnaDwSWCUFBckDpZm3Pk72x3M6fcKDGwBwoaKwiMDpDN4SnSTviVKmxC",
  "key9": "21s41cK243UEUYGe5GZ1R7MPGgqiJdCyB8cEkSaqbj8SDUuti2NywJcnM2nPJsrd2sHApLYM4maBtr4czFBKcWn2",
  "key10": "4wWzJMZiLjgusjAJdPJ5VVvkGj9NxxJfb91F6nVmjZdtLPKwCLsWpMbHwndjhfFsibJN3gkUCsA4mvs8R75JdLgK",
  "key11": "fB8Hp9ekCUGbupBbZymJPZcSB4XeL4yvxtgkcQRXsAhcWkvToj9xRSG7qf66LpDq9QWk3ZUrnxV2hSiMHXwbx3N",
  "key12": "VMC29q9VNXZLqku37NEdm2qVVaihe1QDoC7AbirUTLd29NBdQGEya986U66dfyjdUwFRLZkXg1G7ccPg7BRboTK",
  "key13": "2cBxUSZXsmUtqRHHvAJFHR4Uq5J1utUSQCwyvcgmM6a63QAKyNwVvXwFaVMx3Bk35hMGqNVQsuQRhYJxCmVcBWK3",
  "key14": "8HzihoWzjmnDyMEXQTMagZTqver8FLKLCyn3qZV46aZhJ27tUFLTufUTh5Snj8iqMXMbwuJ48ByvHgPRhcMzpDj",
  "key15": "4WPz5KKCNjoEhtpEfFvfodRKvpVw6iQ5V2EUe91rSevN6vQoGshDb6x9rx4hh6TSGk7HshKAk8KQTsFf8k2tv2g9",
  "key16": "2ptmqhNvpG7HEKivHX3w8htsHDVmWXkqAzy2GK4nmBeX3MEP8xeQuV9TbVpk4UXVR4qDBPmrjmKzQ6UVCy8Yhppr",
  "key17": "4McjTAXoeedsdvy1WpiVWNXTqcJUm6mENtjA8nQv4bCvJtzcAou4Mh7y9daXaFtP45ZkTsNw6tcw8EBwSR4scRRf",
  "key18": "3p3vm7EHG7HaT6qaz8KzHMcg72sjQdsXmWPaAkwKTEv2JyFq7TQCvACYVbr8CVxZE7did7YqTCYViBynWQCYQDjL",
  "key19": "SBzS2Z8zzip9ZW28MHB8HqBgdA6kchTDD212HYwBicCqkRpu3q6fxSM5k7QiN47Nd1AyRArmnKTb5zmuqX9JkvP",
  "key20": "AgLsauci8H4sGDvizsDZUmNU3qQy25Srb8WvFL96Cw33kKMfA3BH8AKbd32ogCbBa1Bdk8ZnNjXQaNYSz6tgepF",
  "key21": "3SDzW9yQzrALZMvwMpX4LYx6opiN4oBvChM9UQ6vKjSB12XUMLoywJJnyLuhE8CTfUd7hdCEpAWFLrMgAD7BRudF",
  "key22": "3UtWonetv8n29MJid7ciro2YykPctEdfrqXVuHtnLGnwFVUETAhZR9hFpTpKSDqhpJyY7j8puRNrYhzUFFXUCU2M",
  "key23": "3ybHKnz7ZVYKzSvJzbp9oLuNoGwN8s8pT1cwGpC6sbWCHqap9FkzuZdBoeFLxa57gn15zuk1WqTuLChpxSrYAguL",
  "key24": "2BEfPfNGwzbyqKhDkp1hrdJNMDms2WdxnByaNpUPtqFm4B5QbSpqaimwiiYYASLSyCFjwYLptqRqqYnQ7zYUGeuf",
  "key25": "3pCXz374qAuiap8jrK4oWW4Sdd3BaTQnzgb3XYqmDfGKwH8x5GGjnHozmt17FmSe8tHhi28e9rJR9zDcfJBYsmy3",
  "key26": "5eYLYQySiEPxSRWQiGhRnK9qETPGJZBFAHn8BVXHdxKzPy957DbR8S1tG71RwoDsjJNmo2C3YsqpnS3Vj4WvkRTA",
  "key27": "3arRjsbgyJUHC1zr9ixuGyXozvq4wEJUBSb3jwYVk6DbsrfUd4aPJCfhCQmPK1HHEKZPEyNQ1heohjfEbpbSPjff",
  "key28": "3jXBGnFik4Ud6msT6JhuTaHNnTHX4uiogbR7YUZw32MPuVAU8xyP2Ztrvw7xptv6Yn7wmGS4bmwQXnR5BTcX3ftD",
  "key29": "3kUnceM2ZGBsWuz8tD3u2QTfnS59EJHq1axQojx428xHuu4AchzcSYzuBGGaFFJe65W2RXew6hZtiVtpf71mj7Xo",
  "key30": "5tznabHLLKH3GTNjVt5LyBP1LBBCeGLmztprE6agh6e9zUcL9y276zTpSnAdcj6Uozsz7D8TEWDZnM9wgZava9NZ",
  "key31": "2pCR97PJbhKcEjxfFbZp11Uj4RcxR3yksUJ6mdpKpC9uxQyRFe7SG4AQ2AWGAj2tFKthV5vDw4upsZJR8d6NLL2Y",
  "key32": "4b1HEipaeZqLZBU6u1y7XzttQDkqBWZMLnurWJCKJEJf8s5kmck42J5bzgTmSDVJrEnttCqw2ZN5w6zbtdAzpPDC",
  "key33": "4F9MbWbGKDQ2hZfDatcRPhjKiSSEf2U9g6Ua3fkGm74QzLeK1sAvvnL7ymA9p84V4erp764bK7Ky2xCVnsAYLKA4",
  "key34": "4HGtCZaX7YedcGWTUw7Yd9bRAbJFhxfj6L9ScgGz8oV8YVKDi3h7GSRZ7Zm7cs3nsd1tDzmVRQUChSByeYGNPKf9",
  "key35": "2Bb1vXEWiEe2KntxTCi3RFUaTU3UnBhN9RX8cYh4HkDFGPcTotrVn9rKn8gNguCuGqRNkch6RHET6Dq2BKuRYD7f",
  "key36": "2g3RTvXLyho6G4xKCSzq5oz3kPMKurkotratNYdsbfSVaeRivyPbu9VBj6R4D6didTMyGhYDPtKLJH7Wmf4L2sAR",
  "key37": "3iBf3Ya8orZWYV5dFrHnEUuHaY8Sx4esRjTm3sje96Z9zfCBYFhZdRaxvubbFSDennRyvwfmf9Mr9uR4BSBjzRXt",
  "key38": "3WgYWiPCvvN4ZFbMRC7aW1EqjaSEuGARiHPRjiQgvYtgUUA3hbfWXLBpyBfsfws1kfzEb9QeLujAdS7KWhLbV7kh",
  "key39": "285BHfAVJbzqiCfY19txVhCUYGXDK6o1qsnn69WvVbkQby5J94wesfUtgQZpjnrT7icnbBAvgST7on1eWVrjxQU2",
  "key40": "4UBAsX8cHggrdcNisDeeUbcrn5bW2LdfNj91QMpUFjuTHPYNDRDUSFKcwzNemrjXfNRck7BvL2Zs6CELFnrdbACo",
  "key41": "3YrLL8dfg6TcE2FRV3MQfdGF3DXJsrirkfL57AMqn4NTiK8ZDNdwC7ZpU2TszaHVjXZ4VcYEKzMENGzNDuZCtakP",
  "key42": "3d2oPiqzUMYJ9XrxM4Ze7G9YNTjvEdhwWdN7GeKf2N792ZhxkAzeyXz9NN12ubRVvkHdinR6q7aJ5HduPv8fH8qk",
  "key43": "5c6ihtja5mYbqVxFivNpuyfaH9wet2Wuiv6f4mYfFK5BzjfiVmdB9yQqUxsaccz2C2tmdJJqHJ2qjjfHRk8CQfqx",
  "key44": "4JEc4Rm1JHrtmACVdGYrtfM9aVaKRcxQU3T59bGJHEDyW3nG9dVoA67twSvd7UaoRizrL974NYKGxARyTfX6h6nx",
  "key45": "4tbyUM1BSyqw4UDqNcmLSRDfwQjQKQvRs3PjrCKsmjLvXKagYcGqWsJCarYMgqTnQq1wVARnQcZ2ohQR8auZ47Zs",
  "key46": "45vHHpzTxtNnk3pa9mgpeLH87gGLZwucv4BpEWvnPZbwonQWgJkimPZFqfkm9rxJFHGPqBMtfk7TP7VSZHvyfYAH"
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
