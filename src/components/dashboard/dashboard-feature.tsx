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
    "2V5EpoqdEFCqjgtmu6N1gT1PMgQZ2yi5QATwKmy9eeKdZSCrZWHk9UksscHnJda1Y4bCjoztmxaoPqeRcqKqgEiv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Q6tBcUUrEjEQQrgyHmQk5sUi9z4kh17SWJZaSbxDfPf9f2tmzHfjcxsBZUAuzHH2f7uT5wsG3G89kE7MkHrtQtg",
  "key1": "5J8ErpN6pkzRw7WjaMZ7whvNx4V2MYL59ZP8xKDf8LaR2CGG8AX7P9R8fJ7sBzk2gxLNGrBYzM9kdJQhKrV2t5av",
  "key2": "2MXPd8j8i64HjSz6NpmcogXiGqm4QPVLcuJmNQhBBtPNNqbAtz5FACXQEnjvaJFypBVTC7yGGPS1UXVT3xE8ooU4",
  "key3": "5ceQYVKoPSBBdoeBhWRdZ2KY5C3iEPjXEPoJmd8L5tJWNPYDsZSrhtGvPTEAZfJX6YRPoNh7LutqgKENKbm5DPwE",
  "key4": "2ir4ivS9VQVAngEafSzeCESXC3updWCDKr1MpmFEXy8AamdCZp3XQu9WfGWWzjbVf8r6pjX4vm3B97aesP7zKNuE",
  "key5": "4McrUsk8LRhCyeYLzkJpAcF9AbFitVqgHTmhYCsQ2PfRcmtGmEKCq6DQkhpDzSL5aoxxWnSq2qUFWLgk9EFbw1KV",
  "key6": "2hZ3MTxcFoMTpPHNze6sBWu5imfT6DSRxL6BJTcpsoS9Cct5Bcr2efPiP6GuGS1ZFuwZVCrf4NY4HmWWGRMUvGHz",
  "key7": "48zpuSomHfS5mHJrsY75Co59yJQyK4kSZqWro9Gmc3PhndnX36sdXjby7tgh3avZSxY54g97VkWZaHLXntNudAoV",
  "key8": "42h8yJ7tKAE36FZo8x1gdN4ZA8HaCv7D8A1huA6jRgn5gk61QnbwDY6pyPH9V1VRnQLqaFYiPGpQJzCA5cBzVc4S",
  "key9": "399xW3kdxuFwSaAS9KtCt7LBVT7Baja5mH1aUH77Jd8LsxRXLAUfqMKSPmWfX6kLn9aaaU4sSsNEpapBeyi2TMTb",
  "key10": "q6SXpLADrLgDUShyJmk9p7b7RSWkPGsaprHbPpAAZP4xbh7NxwCqzGFFfBwSxrh22t4CZ3pcn6sh5LEg6LSFt8j",
  "key11": "36NP2pdNftDuL1HRRh1bi78Vk4kG4Z9Eb2iqUg6X3EAXTkLPLvYMDkzWkEkYbmVNvw73Rte5ZsikQicSPdqRgQVT",
  "key12": "oexbChgeDka2RisfnXbvoHGKTaFNiuDohHd1uxj4YVaY6SL4PjCMqPbS1AMRmegrVzrwMbtVrFDBUPbUPWfAQkp",
  "key13": "4hDzUQiTEfynxnntn92FrodtZto9tAmdAabkNomDpeqPuWmKsaRcX1diVii4JpKNKXGz49xqTRYUJP1pFjT2L6KD",
  "key14": "2jraW8TFdxwJGfD2j3cnjbSvrjrMf9fJdQ6PR234wEsqUtJuvDnHWi2JwDYtQoUJV7yaxz8rBHG4hXsLXJdcoZ1e",
  "key15": "41k6dZJXkKkVEqiyMVqtw4FniwYUDdHnut1fRtoYo5ZiHBf3PuhmKnbg2zFNj1LvhHcXZz2DG1K2md9RvTmBey4w",
  "key16": "5W4BoFzW4iE768FJkqs3zSxyR9PRiHtt3165ioN82T26XWKuM4YWk2xvm3DA2TA73hmd2wMLVYAVHk1mrLNoemqE",
  "key17": "45W6gjf3HK8JNyWDE6spEWSXZfaBNXLDgt6e6yu9wYBK4p9ATuNm428FGUNwHVouEyeRHd1eMHEL7XnZ3PjyBqQj",
  "key18": "5zAxcRY1ax1PctQcUmUu7FRBmu91qBSZScsphjbaguE8PC4NNxYfQpjLJKaf6FCFMKg1BkgfyacURf6yQ51Vu4DV",
  "key19": "4TuAaUBSijyM5bMuwdN3ZipA5mXWDpsodQh1qQd5HqXxJJgji4qF4v7T88MPou7f3b4fpaYJ5ZwrZFTsd6Y3errH",
  "key20": "5atynoBvfZsPTouQsbW5rFix2U87dnH6RQdeV6H4AHnX4xuQRGG5JcaHvuUjgoixFyn8zYG5TnoDXK8CEAdbiQyy",
  "key21": "GVHrEDWSzbapZsxN1SpbCbibYuae6cgjbUukQkfoQ9YTHkUZTNPz5zsbxryppyr54Vj5yv2g6R7DBiKaaoBsr6x",
  "key22": "c2JsQ2h57WmhbH6frFh6Y2s9K3BpA1sEkKrUACCi7trmzgzsfGwK7ei3yHxaR3TB3SMXnXjw7k3VybXrhYwhz7Z",
  "key23": "4QUGTRxsxKyhTchsUvUChfN27TzSUNwyG1EskYpTRoasNnNtPGx5FFNzXfNLwrDpQmREnadCNeyTMj78JBeh5vtu",
  "key24": "2DYSshKEGEQE9JdFAwxXcw5nxZaj7QJjmSfio4GGg4Y8gQTju22PP2sRJqHUruoNBxmeiE8N77BM8xihBiSUguEf",
  "key25": "4kDgV8j8tdug5v1wczqb3mCxdTJrWHzbt5p98WxF26advydais7m6BnevZEp6sEv1sC1WKDDktjSqF85ieNAt1xq",
  "key26": "2Zwrh5C62iyoqSYFhcfuHPqhLDFje1uHGkwjC5jvyDv33Z4dZ6AWG7MZvcCV9y3QY3dBMDGUVXj8qp4MXXfBmL9V",
  "key27": "4Wiqf6qZRLuF3jEWPUMfBGeFJVpPzFSxa4eYuQMkHGWMLq35pvNiYYWj6JYXyQAbpP7DZxHa3wRqe5aM4h9H6cae",
  "key28": "4km7SfHcHodvXyUBFV8A9aMhfAoq1thmMcUYVu1q9i3AV62jj1bi98MsMvoqg3pAquov91TWrZ3oBkkdDU8KxsQs",
  "key29": "5EWjWPm39TXfBQSZBz8w43Ky3wK6TnSSLSc1L8JvornjhEHvQj79zMpVs2b9hk8cf3zkodVqMoh86fthxRog4Uht",
  "key30": "2CfjPCBaQ3aBkRiE6J3yuthXitJu7D8LGJGYfr1aUEp3rok4RSVdHN9ywfspzdwRTZtgZXKPrLFAoGPdGgXQFu2A",
  "key31": "3ccKwAD7zoKhRAQCoew5U1vTK97E3tYcU1NwMPfamVRcbZ1VJgmG1MytcjHtAcLujfpDqxBxDXDwbW6hWf9ZbhR4",
  "key32": "3YMQPEU4JsNNEzh3Bp6Jte1qRdmrqDHANjr9rZDK81EtLGLaR32fK7iSEpsiZa86sDhrgwHHPbcQex3GN8BGgV2Z",
  "key33": "5WCYtAfsUfDjmcW4xTEHiGJnb67m1oNMWENyeBPDFzhWFnzXs1fLqDdTZ26c9eb9k7aVzsoNRKjybqtwNDs84AYH",
  "key34": "2K7zDTE8Qybtwn7DCa76Rf7chNbsk6ruG7hmcN5BPvfinc4d5QaZs4b7wJnrqURc2gnyvV6Ljn22fdK2RRSJGBHj",
  "key35": "55kFM3MKRedkpqzVRxjcP598R6nZcN4MXLmN28eARZUpmeRvGRrWehRKXBExR2hCu1qNZACndGPSRJayTm5VB1wZ",
  "key36": "3u4F2VPhoiKykrMb73s53MaewEVpTFKw4HLpLorQCh4FRK1mMHZn9j9fcqiKnBhsVorZCRHGGEJb4tizWvih7F35",
  "key37": "4x6MAw1PPyrQMkHRhdbiFg7iB8vq9a8GkeBC1kRPAeoDrccwQLu2JZg584WqDNEZvRN9rncaf2jHwsT3rLe4fgYj"
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
