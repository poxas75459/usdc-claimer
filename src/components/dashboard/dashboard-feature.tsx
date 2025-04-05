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
    "3P4ZZz5GVYupmLhBdPRM8XnNWTpWkHWBsEwxkLJLtsBDbDvrBkWrKEsZzZLBtT8KSqL6a17DRiARc7Xsknua1Bfd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4k2wxiDJJGntNrLM6UFMN7976ZqewdXYGAv2JXhJZTke68eeMAn7CkQpGEddaXWsVoyMcN6dhSKxrfzca9vpuAyV",
  "key1": "2XbvKURbF69w2YcfWcnsyWqHYiwENjzHUQg2BzVXsiy7idwVjz2RPuuQ41px7RUnwjfoc3iHku2eKMD9xNy8yJQZ",
  "key2": "2yMQMwgDjYu7Wfz3KGusXNfzno23aa2QDKa2QtSebXGh4LYNcrfEQB8uC12EK6uLm16mnUZxNw6qkq3ajSmYdG93",
  "key3": "CpiMFRY5wJX7PNqMbvvLJYjx9hC6ounQg3bGcDiVT2F8TwzZWeTMRCq1GLZWpVNTikmdLpQ8wNPBz65JX255QNB",
  "key4": "5tW2oDBw3b6xJZEjC5XDTuPFZApUB8QYxzLf5NkyfkHMmTSgVjr7A1bfSikEMgxN8R5qPePR9peAdFiuYigGyb2H",
  "key5": "3i59KM2qYWTbxWTc6gPKwdYVvXuh5A8z96HxLDz7crm43N6ZqqWEFtrYgF4dyWNmc2ZFhcazXqTbCDz3fi9SL5uD",
  "key6": "4vMdPfTRTxjH4GNSpHymGBiPEM3jyCeEmhHKxhHQxGDRTC1om7nDSUK4CHibCYbH7Ne4PTbZWKLhdCcXrrHUDuZ4",
  "key7": "3nr2EhmHJwJ7HzEk9B34M9UitMHQV8sYAyHbjRJNAcLVZVHRgT3FL3FX6pcou3c4e9hruxM3DPew5HJ9nxdE4TNv",
  "key8": "5CWxRj1KUhy5zMWy2yE1TsHNtsLQaPRKXFeyacVbwaX9KJKYLyB5S2ih8S2tSvuj1RvAyHLAfPtDeeRcY2A87H1R",
  "key9": "WaCMbbnSqYuDDZnmcY3pTSb7uAywxY2ri2CoGxJbWNzMfqbeBX9WPWJ4dWHLMuAb7CCu2tEt2oySLmb6wWA1czR",
  "key10": "5TEYkTqhnUnuRk1stzmieSefptzwqBfEgKALRPqMwNUAEFk5E5XwuAyZncryH8aBjKsrRHQoRfrtrYAKZjwGnCk8",
  "key11": "5UdgzCnHZ5UYbzvgUpCAqgdMfrArTqj6UL8vimgtzoLQ9i5go3mzBafLdYKAq4mUHe2bcASGTZGyASdB5WhhTXSS",
  "key12": "49wBcjGbwxhnfeiU1kgnxBxxUUmbfGNPoYrMvn8mS3hnhWuKBbw8koWa5xorEGjNiJGhNebrbjLD6GgvQsbRidVT",
  "key13": "5QGwTHJ9jKoXuwxXLaEoCHPprezHLKgWZaKyysH6vF3R2ipaNzEGgj9yxwbB5adW78yef6qzFxgcrLm6vCt4bNmv",
  "key14": "3aoD1fkJ839pNvbWjj4oQHvE7pFL4zCiaSVDdPXGEYgdwWgpKKKkP9hP9Ezbhzho7crNtgmADuTrUB9Nk9KhEQZ3",
  "key15": "3uicC65GVU42PwwRU9DkTTeR6Bq4qmzUKt1Tr4F4Gjq5KytHJNHGG4ZureqSvuCJ1Jjt4p56vQDeWDynaTnWJhq6",
  "key16": "4SZcZnqa8F3hsHzRV6ejv5Eg7Ntmkx7KNAr2XrLsmve4yT6zLKECYmVEAJ3W7QsNrFoQqGg28XM6tGz89zeohTXq",
  "key17": "sWSK1LkUd1ZPcTm1MkUwcX2hBor7wA78NPs5niyX4izywUTj9esgwrYobeZduaG1K6kfurs6mB2gM8nrUyvSeNX",
  "key18": "yKuywVXWF6FUNPL8R3YCQP1Biud1EC6L5Hs57Zj7HVtenTA7no9JYNTUQAqfCFyG7p3wrJXnwF6BcALxkR3uaws",
  "key19": "4NqpFuibBm9wSLb3AgpwaQBaZEiAbEsbHbG6ZNpUauD7vHkPmuSgZD2Bfy3cv7zRTdYBhWmzyZL6BN1rxMixAyGn",
  "key20": "3hMxyfyEHQpNhvkKhrxmgc8ZboTw8vJUwPeKBMGBB21Yyv5HtP1pErd1MYajUtT9ars9tFDsjGeqdATE7cnznU6p",
  "key21": "7qTgH1euhEy4tYEUC3FkZwb3EtEVvbrnftg8K5iZboMqtNLQLJBYk7TzvzSeu3LKFdurY6m8A2Eo9WjAZDCnDeb",
  "key22": "3hzTVAkfAedV8dEAFpQHnRcvmEoPY7ApSuXgnCWcthFfMPQE1JPhfc4dZnCLmAu2fEByLNyjN894DnAXFyBvmb52",
  "key23": "4EHVJtsG1GsiCseWWaNtaSk7xpVR5GcnofmQr9Z2vCBT3k52D1ZXsiDnZcNsDUfLJ6U8nMg6DvmZPq9hSN7q3vtH",
  "key24": "4qkM9qTnKzpwR8En3L9V6sfmkcuZJnQoR69eer5wFeEeyfJTyCXoDkLfaiULnXuseG8YeRVQwAyKP6UBpN23yXpq",
  "key25": "4f2hvTUhyH6g49Sf9S7Dz62Sg38G2RaiQMk3jraNn68FB9aa8nAL4oihD4X8jEDxA6GoFXR23snyHAxeTHoTspKt",
  "key26": "35TrFLW3S8GEG7AfXiFwRCQhU6iUeWbRqwD4NhmVwV7JkP6trZZ8mxYKwWQUWXxQy76uMejXsKFtQEVXtXUVr5NK",
  "key27": "48eX9buXKBsU5JGiae1GY8TXCSJiVvt1eBaSooxkz1MzBHBhgi9YmgpBTopU4wuoAw1BttXjbNtwJVWYubkm5DuX",
  "key28": "2iMkFKuXSAoUTGRVu4munYZpNLeqxTs5iBoo3AdGtMQWyyPE1Q5GVmnv5N8DePoP5E55dja4DxoHCBByoVAqQJsY",
  "key29": "49uuE6XKStgUCBsvZtPwnJBytwCj9cY2JYwA7fcVv3fVmNFaq9tGJQwFyezCPxEcwsxtpuTjUpgoj6tt5nfpGNB6",
  "key30": "hKSQmXMkBgQvBRwZCJhiBhhXiU4et57XXpUgYaB5rMj7nn2ZsVfbMFUVcLwMDtR52TdJ2moSgr1vV4DV7Jsbnp9",
  "key31": "3zBTZwm498dJxrdXjxrbM75vii1RXzTRfpQy9VN2jhRDUPLFDTkyueEuziiRJsxP5iDhv5jrRfabhEoJwtY8HoTN",
  "key32": "QbYdbfCdffVQxaPtaDmf2JAKkrZ37s8g2iGmfS7PfBUQ8SFovXHHU9EjGSJbMt9x29aKsSCe8Z2PH7XcGdaoCB6",
  "key33": "3ncqyhT4YFT6hBWJrPsSZScnreoK4danH6Nvgr5yXSgYDntVH6Kf25SVYRUzoozgX7cbRCi84NqzHGDZcbs2yvRy",
  "key34": "2i4LdJ2fKnGupFsqf1PBmmRanYnPcrmG2pBAEw4aAxgdiqKAY8cMsdekJ87eEpextRooaZkcEgDD6mkgHSQaJ8Ct",
  "key35": "5MHkKqDY6HQKv4nwr4Njs3bCSSEh4jvWX1QRGMSTLjjgLFc8asAyptpKWoLA9eJA8MXLiLsUUkzTicjt6M7rWB3F",
  "key36": "4Vxko3Vd3esb2DWRHsFe682saPi5ebzYR21TTFjyveJ5PkwfbEf4JzCCCvnjLfEnzgPwgJQkwc2AmSuC9H6r1iyJ",
  "key37": "5f7kjbRZuPRVVBMCrhcpD7h9h738s6UKwh1uJVer2RkgwVo788LEeBGCVLXdfipGevTY3mcNP6Ph9cyrGteynuiD"
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
