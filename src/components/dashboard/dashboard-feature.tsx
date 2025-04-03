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
    "FHyKPCga16rt5TwJwvU2RQ3fZvefjA7Zt8fEMbJ2pYc5o5hUFV9FMfeoq7kqY3rGoPXUS8vXDGs52tN3uDPm7sV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48tXekqZ7T2ntNCeXrLsxAn1hYwz47LLo7KEV6mZTkEbQ5qEDL6JC6QTL3Y2wcNHJtDVMhtdhSnQNguL47Lp6bop",
  "key1": "5zTG9AXAz9GdBadRyc4fWQcBgYYq26k4TA3GZ5w2SN1gpwf7pSa4NiNkuVyVHg9Q5J4PCzY665S8sYmE5uo9ReoL",
  "key2": "35uRATTAGaDyEexUMXr2RsXeLbRSF8HCyBDFpQBtsRKdn2WDvfvbijHsXA8VD2ctoYsnZZ8kB8xahHK38MqNJ2c7",
  "key3": "5WcDcSTuwHrcm6uR8JHYjAxVYnVNtGBK6358Lfb418fju7g7QYxKqaYH1CD56TeGiHrTyhxgGNppnXirgEU12i7V",
  "key4": "666AHb8iRQtMJgDdN4MgYNdjaLq6oe1gnyYo2jgfJJvHJJrmP5oaVR4E2WowkZcLbsV4RoC2CsNMQbbMFadPFKXK",
  "key5": "29ZQPfLqgnHpjztGBxo3DFcomWz2WRxFYvUZFqpcWL4To1nnpNM54yQsZZjYMS5SatMwfBQBV5aXg2523uKipgqU",
  "key6": "3L8tn1geQiE72SZAbqrdq6wG4NWHz9EGU6UBbnYhU1kKvdNMc3UiJcHzKQBAZAgBm259cKvLRGCMZQJEH1t1N4YF",
  "key7": "3TcDt7Bohv7cFXRaUyb5AxqDVhzTzUbNLWSVnwsBsbbRSD91VuT5SE6Psv7dvJa44PR68QWVrST6LoJcHyb3q8dh",
  "key8": "47vGHvS7eAHn9SicutqAbUNUF7WmDe75DMogPNJdj41oGqMDzyuVgtm1ceJPEcUpFJcyEqN62quVGCrr5Ybu88MS",
  "key9": "vRoFC8wDBunN22GBmJvzYyDje86KrF2k3NbYFceAgEEdBfYkq8iPgNKQWouNG28zxbf3CmHM4GnoUXT9Pwvn8Vq",
  "key10": "3cPNLSMvXf4pLmo4t5PsriJpJk64HRBYxY3TYjhZZTfnfXj2D3A4gBD6T1FJJ9UpJXxz9TneV765KzgewBkuirVY",
  "key11": "txZTw3ntKtG245CaKji2WwCKojM5ugP8jmc6dbaiA5DRdpxW694VViZ9fpbQtxccRgPvHBoTqUMidF29wFcSiCC",
  "key12": "5MLV1tnFMYvGTZH4RppCUAtnfbw7NNn7RDFfLg5aRREjyMDc9XZKJ361yB3mnTNPKjqseobtPan8zrYoGiaccJgu",
  "key13": "24WzJ2NnwvcuCDGjqosrpoYqmq6bsfjouw9cbAinynbmoNMm7zf9CPU4eqtJqYK7My5MZcQjgF1aKvkC7rhUCNrw",
  "key14": "4HLdrdqr3uNfuEhVkZCon7SakHavqtBkc6Rs8FTs9ju5FEf6crLhBzhVGEzW83sJ3sUhhP5bghGYhGhHE3jz5ZS5",
  "key15": "4fJyQbTUbA9o9ztv9d8UCxsfr4uRYKUYMy1ojxFMbSVLertAV6np1dTXb3Poeicu8jPg3MQ8XjZzPjXVT75jR24j",
  "key16": "5sYgriCzDpoB4Yb4UkJLkGpiAuy8EsHE9GJz5tSEAdGfJEmF7GRgRSmHdiHFPran4MyMue4oK3qpqRt9DbCvgBS",
  "key17": "zaqHeQzTszUdayVVa6udRMJsdBCoPpvuwjg6jmidFqrNqFFXK83PJo3XCQpSxafD1ub4NAxjgFXyAUhE69mgtMZ",
  "key18": "3wqiLgTN8pJfeYkLKnDbVgGCS4bjVb97DeJBNmagouPNgHymt13BMbw3m6wDm8jhHZV7GPDRU9NEZFfaBZ66WExF",
  "key19": "5ico56iSTGhHQXVqNgSCPmKk3WHcxrCsEbxdeedTkPMmzy8JLwRA9sAsTB1cVopq9zijc8AFkobqwvHxr7vZNwA3",
  "key20": "4SgBspkKZumhAgRxctDjuoVNxPy3hTkU4cts7hzh4G7z2EkTAbAnRuHi66rHuiEpaxTNgxZaeLf3hnMUrzW7xtzD",
  "key21": "67jBhkLEdtiCRDGJTyygLGrrL8GHAiKfEcxi8uzTh25QyesVjxdkjjreNTAXtY34pGiKDGVDYNovAYF5bHDa9bdn",
  "key22": "THVdR4RbzojaS974EWcCtotgdxTxrPPYNTEUbWZczpr7jAFdCmD2XTXkXv5gnctxDHWUYvdZi95wDV37f1MsecW",
  "key23": "61sBejmBG4ZVHpSC8ZJaXi36JRoQsevxMAPeTpSgyp3HuvcMeorn4CeFRNTxBcfbxGXcfVB2ejvAuGnTg4hDjpnk",
  "key24": "3wBSqtDr1WqfdnMM8ZsT6AKScFwtwb9EBbFfQgTMVs1yE7wCCw2fSqKxh8YNn6X6xh4TU9pBHKKvsm2ffzfEoApB",
  "key25": "2vfnxN3BwvfawJP1KkR26v2QSJ7PMSpzvvFCSWrcjC5WnZAVPdi8fsK2jTR36eFoq8StH9oMu3q7X4SS7GKtPjXi",
  "key26": "5ZLW6pTXqmKRigJFHxgJbC2Kg6daP6WV36sNqD56CNMhurneatCd7Ze67YGHjUXehZnb6YRQFHkY7j3MDYfEQQtz",
  "key27": "3QUWUWwvC7RDnAQcTRGE9tT3SzkVGmPSByTabx7BRxiU51AcDGfzuzMwLkmrgCUqbfEDdvH3uosUcCR7k8wLQkhv",
  "key28": "PgbwMKfZSUKRjMUX9wHM3iqHPM4DJwFoFaofv9kF5uFm4YtKCgX6mg3G7mGKSLVZoztjXmq41G12JS4jYVkVQCc",
  "key29": "Caz8hqqhczfi5LWvQMAjnyX2QUx8pbZKj8SFMkL3eLgnyGoYZSyeLHRu6ioHFLzsEwEPEaLBCK8GrMZ94FHBb21",
  "key30": "GgReeUD1TZVBthHJUbf21aQaLn3pJY82bWdQ49qxXaDRbLECbCgMpkMyiL1YBzmgArLcr8k17g8ViUkoDNuFqGN",
  "key31": "49shQYgu5ecy8dABstgjZcfp8HiA3bjVfgH8tsCp9jaxE3KHA1so3raQtF4b5hiLvRXTfYDGAZvY9fcE4NeVS6QQ",
  "key32": "5smbKqtzbwDXYXnrXaJfZFayAe44kp649nmF6Lzy5q8h5iTFpxMfMU1M5dBet58dE7P4p2QLa6SeS9tQhPxZyzsd",
  "key33": "3WGu5Mpqbx9fWDcS3si4bZCQYxKqjT8sYNmWxytW19NZUrnEAn5V2iVqjWgNDjut1TW7yxUFfWQ7j4vrACGCKV3W",
  "key34": "5osoD6m15gK5sVaHCEq5LmPMGLRGmDEqvSRexZB1995JY8VQMYfwGbALp23teaZnKavnps5r5fm8T6NcKZYTbdP",
  "key35": "2xDb5VsdXfbADXiTtJ4XmbeLZoRFGYRZnbjZSPKeiiVn3fKo3zpZEA7TzFqRqqn2psPHFXGSKeBHcRNKX34Er8bD",
  "key36": "37t8Uz8iw5Bb6YKHLF36kSbsfFuZNWJdEHSb8hHjmPwoZbKjLpsncUN8YSW9HyUcsMZwVwKRzM2fB8ieKxpHyDnX",
  "key37": "4paE3w4vXqNUzWyLDpvA1pGeSAZ7Mb1CPibK5CTSkWF86WfhKx223Ty7jsX9FuE4Nfz8FhTnGnLZysexhseuqqFi",
  "key38": "5BiYq5KnWXhVaV8hYNSkgh253PUYRAquqKjGbAVSZLH5XxNTBNmJwWRS5gyU6xWmdfjBYcViYqR6DqQ4SA1iXy7Y",
  "key39": "43ARMnrPtKdsyf1vCgiVMnVNkujgzkn1XdQHXZjQbbP5VAHcEasdG9mfV9FvB1MmsZ9Ln1KauWYCdwWGJu7Bpy3j",
  "key40": "2coXC4eTghA4NMoZsRyscP8FPuXmBMmJoucpUPhMnAxQJ1ywnb8RTHXVqe73w4yPVnJePcXXEtcU8z1cs2cUDLhW"
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
