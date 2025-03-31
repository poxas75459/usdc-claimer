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
    "3LPTxSbghJSUHrL4z6yrVAWayYXbfijr9aKfEpMH6BeJMM6ZCUjWHxgAjyum5wCFJVJTUZvvXGzBM7HE2QAR1JDa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YBcTZQJ9bDdLwpjAYBRCTLruSoaGxDKrz6HELEiS9c4KWzHG5BTuafc7itWMfUXtNragURhsyLAL8RUwDNDbMJ4",
  "key1": "677QBpQHS6MXpeHfvZQqDnLLnwwPVq2CZaoPgAYchHySr83EuXopPA43qENBsVL1MCzxUaBQ1vYrURCtkeGwf5Nt",
  "key2": "2HxjJxjnVHa5pL6Ky4GwcWfAUUL3w6FRm4uZUpFMqJ38Thwj1yL4czNVGwjonnaTvndcWuFY89z2jzAh7J7UU3XT",
  "key3": "5ohKRBYfTB3biipH9cCTJ2P3TxSWv4WXaAnyvcuevGDGkeWrnJUb55tMQ4wdBBqXUdejhovKbbUUhDnmkAPf7hHx",
  "key4": "4mCk1VrSfWT1CR9CxErFauTCnQD3eBV4n4MH1bxYR4wjMvKDMx98yeNZzqFiFLAw3ACD8Z9GdBSBwYE9KaqRC6rJ",
  "key5": "56Zz3HgkmUTj2XbzsAYVJ6KoA2tJuf4de6VELZXZFX1scSjvwY2tFEFNbjSDbFQKHbM4uy8cSwqJhXTFW3YhEE1B",
  "key6": "2a63AMGwQcqjehGr8zNvRxsZNQKwPZVVvomacn3aKyRkfxYrqvmC3aC8FC8xrRG1nb8qDmkk7jotR78HCjdyNoHJ",
  "key7": "2Fx4wPhx7FXdmAzBR5wSDG5gtB7tuMVLoTHPN6KrMLhP1e3mj1LDQjYaTEAUwt9x2aTVJL8GV7quXeortphD9ktc",
  "key8": "3RmcfkTjKTRdGn3LocsE8fs7vD8j86YejqdGHY91Mu52pECiDWnpPMzLnwDLdjH129pwDWJEZyKmdTBzcRJERVgy",
  "key9": "6JUTLaGeQmaeqk9AEaX22q6ec2GEvX9xiStditTLToUSuunTwQKbJhtinc8yxM1qbUnwt4C8Ajdvv5UeMEwdsEJ",
  "key10": "2QutRpdkA6EYp9gqyD3FWdpATx9tk2SHMMVox5wugmtQTjuNsYskgKg9onivGPqVXSRrX8ZWuHYjuHU4ULprLtG9",
  "key11": "4PYsjc3mfjdoMKzdcvN831oFdfgmzBE7ieVcJn2es7QU4a1FRRGaVmdDKAH54X14NtKNQp9PNYy5cqHGvEscQYVP",
  "key12": "5untB5t1ZP7JdBzN3TPU9ZUToSUo5M9FxoGR68ukcEssYo8DVenhsybitig8FR3KajnHkiK9guo472ZebKbqiU34",
  "key13": "2EkTksAmW3NVo38JUQ1bPNqb9JjMcCiDPrWqy2QYYRYfdjNdomW6YmtUNRds2g2QBvAvSBSKYiLr4zPs4mTEXPZA",
  "key14": "4JHDhfQ9RSEJAHz2GHrAdiyHypoK313q7dZ7jBuLBHtfRFPMUJHUNEewCkLbih4Z5qJNqacNZQkWqtbtQD3yZUNT",
  "key15": "4vA3eJYevTq618NC8GA2GdKo3V1BUyfB92aXpjtA89ATzcBVJ5otdtwP557CJswDpqqmg5ukT7sNsBJJLMDgxWFR",
  "key16": "38ftz3ny8MjzpY5HP942L9ikvWuXgsrgYnH2ZjW2AMLFjuib7tFAzFDVq68BXvZw2v4A5u3bzJDwaqUQpEr3UHm6",
  "key17": "3tUsKnNNcKcwAvJh5vNhJ7Xx47XLduUBshSHsYFPi5trv6cPwuVUL2Gychq7Qmg9xQQib8BZxx9mnxRxYsjeMRvZ",
  "key18": "3YRL9EPdrq4uQsevbmCysjSDpgmnHRtQE2MUcs722eejSbYriYKjNU7Ck6vRimXGpV1z3faCrWXFABKbTQPvTkYd",
  "key19": "3DqmktxbabrSYiojKqsXpqCZD6Q1w4fhK94RzwuEWLRbvqfgKPax8s4t9wybunRdW4bwdQiGk4RafPhdyM3Kd9hh",
  "key20": "4L5ojxiLq1qFhicfQVS2KZtTkvZeFnccv4FagYUER2cNh76Ya22Dxr2bfde2zsFwbBHD8FEoD8ijKYaMyC1DdWm5",
  "key21": "Ya9r3g9F3mG1yjpDVvzQ9xrTQh4afZdgTqe8XehHL1TWYBvwfofosFjPA1QuoL9jYic3BAqXJxdzEadPo3MFuS8",
  "key22": "58JivP3RiH8NpWgNvsj3n4zgjVbQF2N1dANKKKYn1L8CUR5k8cELrPmTLgyRAs1Dazvcnv1ZwsbDgQbTBJguYCx4",
  "key23": "4oXFpB1KBiUyN13r4WWBqvqsXvjMV4xC9ebedYAEFsZBABpe2Wse2ToSKuf7j3Zw4HJ7q5deXWiGmhzAcJuTYY1E",
  "key24": "kTZLpDyfMFAax4zrU5LHML2hmeNdFwLq37NHnwUKvsVUCwCP5rcnxJXUvqVvu3PpuWGFn2adoujZixx1tZeuHqh",
  "key25": "33o8vtDGZQPRB8s8jSR2AvS6KHbNR5cQ8MhcW3gcZD1cbfw6BVwXXYerDhf4G7rCjcWRqzzcRLd9PkrwVEbru8aX",
  "key26": "EjH581jiiY2NqssqoDMXt4xEk84zMBbid4Xyv9YE9GHedHKw6m7dto3cBFwHjLPuduF8HGghEEca9BJFrcue1Mm",
  "key27": "4rnCiw1oYQaNhmKctjpr8LinXgZndoaFNF6WpShCL2uDoRU5XmdL4P4PyWBt25KjKqb7jn8wxueLwyi4Rpb6Ecj3",
  "key28": "47pF6MKfMBAYX64kJ8abhNDv1GgdDwMhdHWy6RPZ6B8zA73nEohQpkerZcRPxMoPufHtEkQrBHAQZgu3zNErXqM4",
  "key29": "2aZFtEdWM5vWxHtadhWBkLV2863TuJVBe1dFxQwrm7ZqGABfiinvdJVV4RKPgMK5f2FDYQNDtXvRNMhVKmY466sa",
  "key30": "3b3iPZEztQZj8uNjvD6thssdy7mQMpQnf7phwLUSB1fXJgachq7SPRhG7NuxbBcbGTTxUe7zoDyQR85qMNYDAWXH",
  "key31": "47YQuZJCu1kntyuyZc1eLfoa2jRL8BEGXsUChvdFNaQRom57vUgLPaMCCMdC8pCdcyCD3At1FifigJizXhv432o1",
  "key32": "2JGs86b1MZ5QxgQbHJtHx5JyVmyACqVyK6wNvrkW5NzkD4zCZmrD2YNJ6B7KWcSDtzzXhP4DjzyxpZji7AXrjHDT",
  "key33": "2f6f13pmRBaztiic9Fui7JV4uXRMD6KBqsZ7PvaCgnb3eEGvUQMXHBt4HUCzkT9jhctuiEjzwZegD3Z9UnXt6Nr",
  "key34": "3BWAJ9LbtZyieHGuBeduzH8amwFZJXGBAm9k3uLswH7zeyYNHtKHAw8pZFG4mtq2PM2y5pJwKt6zuehHrPKadZ4U"
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
