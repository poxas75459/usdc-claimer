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
    "3cByZWffnNM2hKya3cpJ4qJPEQ1jTzktgBNxJf3CHKGgifQCMchpyUUfvz3BhexbFtCuNbUW3Z8qBx8jDVeLXkiJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sBLYgUSZvhTsUZS3tJmw5wL93xL7uPwRzwWyEd5uDRq5WJb7mu2pgAfSD4quh3QA4MUSwUS79E11xFeJG4P3dhd",
  "key1": "31KSrGWV7BkGQdojiynysN1NqqFqkqpxQY3cFekNyeytjsiNSXGMMtSw2LSA3V34dumrqXKx3p4M3c9r8EtMzU1k",
  "key2": "2zz1VBTB59jyPz3L1H15xfEQNpgGkL5dwFibBCRCQ2dEUDviXQP1S6rdfVt2WXU6N1BHTJoZATuKmUye3gtG55Gt",
  "key3": "55Td4EmFcQxr5izUE8jFWUJFFKz4orA5fFdC4VSDRpRyKMBYw1ELFwc7vKyRcPR4D4d5r7FNxoHsXpFSpcz5KyxL",
  "key4": "5FiuFdvG2cfQb3681NRtPLSXM9PimY4uiKALnsTvRPuy745RDJZhW2H8Ku44ntQwzc9sN91bNyAtEcn1q1oM682f",
  "key5": "5m9VzgPQVno39wWEx1MPjQWgHwSwYsVckFHTC2T4nWV7GwQbCgzxojwNVJgWZYVyzNwfFCs4ZSBHHi9JKM4rCewh",
  "key6": "2njWX8Wfxj8ZBVbxXsCBuCbvGaNcbinrJWhXPdaPQfay8VuAeqJvjqRdTho26XvoeJf5dNGKZJRnSFU3PizmbcBa",
  "key7": "4ociwW2vGoXqcmbAuHmnpqSHsKh9b9g6As9m7GbAoy4bhmsPsBWBfkUgeCTCp1X84EKzT449Bt3FkR6U5dJnByTi",
  "key8": "5Hh2vyfeL4v9iFEpRmARBbtZ3H5H76RNnfWYiCQxSqXh57Eymo7yee1obGizag7j5NqsVUktfakucWgmpidMwBhR",
  "key9": "31N1wt5pFgmZXjDPQeRHNjMpLuszAtDdsFEjsypahqHdGRTKZxfT7yEoGv48UDczxGUFSWaFjMU2aLGuDgSdZTo4",
  "key10": "5ukYqW7jYL3r3QJuAfP9oygT4tWgYqAmxRoNHoKf9gdHN3551S7z57Y2KvpnBDAaGfXGFSQR7zLUXu95sdHYxCUi",
  "key11": "56TVWn6SGSUuz3DvC84Q8x9D7KqdzknucPDyJcaodUoXzK4tXzrgYxsnszs4PyzM4UEAwH8BqBo9fz7bL3bBKZQM",
  "key12": "58cVP2m9nEZu2y3CPEcTbgm4VkQiGrgp1GS9tKEo3kQGrDoVgyGftiRPsRpjHNjS9VDsrew8zc83ECMdXCoQcfCv",
  "key13": "5eBXovsEDBe4WQuhdXkEVaMEAfpPMVwbbqJoPSn2c7syz4BK64JzgXmC7S5rauNn7k9hoiBoyWKHCSGCYvUmK6aA",
  "key14": "3L4mqp6cptRa71MEZirzYczxAmGs2nHuEg8S1KA6Bm7GpAh6yCRNHrfGKs9Lc3Gtc5P6T3bQJYStnNW8AE7ouh4",
  "key15": "gQ11x9JHSSmiW3uqtDGhxmsFFfoFuNnBdc29RKGkbrriuvjUWQpSz28aUqHeErhmxyPyL4eDkf8ppJuLm6Q1vS2",
  "key16": "PUVtoPuTDSmiFn8hNgB1qXD5T2M93zXyopFc8Qo7dXjC1rBdXwTaTgfWa87CPjdnLd6cEWbhNsKJJnewasrPhQo",
  "key17": "3imKgDEM4eWvxPafS2uECf91GDZR7PjxbuZqzWbhpwsk723N2QcEPV9M9unoHgSBvL3eceSYqPcbpey7DKdPYvE7",
  "key18": "JqSMMzdTTiBiEaj452vcuD5GFHHJ9QZ3mJ6FLUPqa4bhXX1JU1L2ytRVnY1sGp2bPdfYbzVQGycs2XyQ6dg1rwc",
  "key19": "KiUJQGiZ1MzzRjYXnkJqFsjdG7Z4hPAxARLh88hHX6r6MaDVD7qygn5YyW7Skgm86vX86VT4Y5hZUnopMCbng72",
  "key20": "5zgHRLHEGu8A4Gh91ij7xvPPherak8HzPNJDwHVKABXzqrN5eB4M4SLwDmao4S3HxSaoHu2NiFYyKALen4VwBQ8B",
  "key21": "3KM6fUon9gTbnJSmrR6EKsbYGGivQekgjJhzcuM2ifq1uxw37QbXothxxmnz4YVQfzkQP8vHtkkA6S3bJ2tBSFrj",
  "key22": "2diMaQG8buEPdtN4frvRQk45cmFwT9bUwZ7r4yHAtDHooTEaV5V51z5ZzJwxdjMm6R6aA3HP9e3FbKAFuUSxzZRA",
  "key23": "ZpQrjmYNEjFQrodYHTL9xKUn86iAdq38oVyFJf8Z1ypBhvFwjAwV8914qtTAAhoh1P6QLYi9dxpvxftxKHoXgyB",
  "key24": "SY26kxQnUGM9japEgY2Hw13q762gv4kK45dBBnw4BF1pfJ4yzrSyrTgAZa54U5Pp5Vt3VZSUN3pQV4LspkVAYY7",
  "key25": "5ri8xzy5bU2WbKxGxHuyCZPNsgd8V88uCs2DXohodw27hL3bpuLpf5AAs7aQev1SGQgErq3jgMNEiYgoqD3Rr5EE",
  "key26": "5iz3WTcXThH8WYSNdMVUcbFTQAjBpTUUraKTw5jAax7sRAswZtpY7haJDWYKdecUQrUVgeukrWeB4dHb8duFReHM",
  "key27": "kXsDnhCsfooKP45PSmPYy1TRTSxx2Y55aHhQ73nadUFxJ6bTaPMykYPFLEJ6yPFzkb1rKzDDHgEW6MBkEXsVWZZ",
  "key28": "3mAJ8ZzBzy2ZTJCKT4pH2bKE5dkECEYtj9vTLsLuW22ymVoRWxuihDLTSPMrzmPudmc7TmSKox68156fUbN1GL87",
  "key29": "37ordjNmnukgyUB7i5WFhHLCZUs9hVbznpEDbxFqw433k36RUZECPGJJxpHCHLtXAkMUyjfGR5oghLHXrgPfhYfu",
  "key30": "58wMm5wJPsHvvcLCZHo5o8vnziPWrbwTFJFLqPHgzYoK8rtXb67ckENw7yPALQ5NwMzmq13Rcmb5HKxVGBL1Vqhz"
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
