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
    "3tzteWSwwHKNXbnvd6WwSZ6pmSDrEP1j4CW9WRoiB8BDP376suNxJQRsHazM7rSNZyUq1sCU1P9nyjCRYq9GBk7o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28GovUkZskMmcdx1oM6GaGyF8uj8Qyr5oJiBeC8KabryCUCNtBJZNdspYYqzTR5KgVtmJnPsHUGXBR2Jx9pWekij",
  "key1": "LfNAeTXUAWkdJ8xmjozXYRHEptX1AQRMY2jexcrYDoEXzwT8XWXen9AuqzMDRHv2hga13bXakEvwvpiSY8KRuzR",
  "key2": "2BrL6hSYhRuTZzZCnUKgtUZ3ZZUnYpyiQ7W8gj1jtZ5mBZUML4NjfGYJTDsjRs52ScwXvTC4VZNG8M2vVnqY6GHe",
  "key3": "53xuW7gaXniPkJMX9P9S963L5o9JEHNur8h8CjKJantLMVP9hwKxYEtsZMh9aQ5wM79V5pZHp5GaGBV7MXkEtgHd",
  "key4": "1z3stQnpQAvZbC3dDzutzpQyfvK4WhvAza6TsEVwsEq2nJqrdXrZ9WgW9rkTRGXsACtCmhVzw8ySchFaokKAD2q",
  "key5": "4n4ezAw7ZyiMj6h2wEWT2eVYN1uxsu6AM7S4H8XHZz17qQNwxjJre3sKYEQP1wADF8gR6ku3aHLJTuBkUaBawefM",
  "key6": "ZFxa8JjorEdDohT9kZ9fJ9FCuZwRG2uMeg3HtCNdGASEkA1ruCS8GnmZW8LYPNtYabzV6APFV5AZvfxxZGnp44q",
  "key7": "dSzrHrYnLiPu9fdbDY4mUKhiaK3C6ynxj9zHXgA2NAyGEqgrt1cRVi22BaDjZtmq2TnpfBtKGc3Ve7ZX6ESFhzR",
  "key8": "4CppJkKCQAJL9q6XsmSMmqHY1VQTjUinhMY1AgMhhw3q7QmuxHkVXyDToNLHAQtoG19u4po8AsZSBr9YCbsYv8hs",
  "key9": "2hDq7d4bLkM68nGEdmihPEN8VVTw4wAd4T6RKDv3Fun9RD1Qh1Egzrj8VqjG3KeYeXykio6bWBdPEeg86fFY5bQn",
  "key10": "3NAR1G7BGMVhi4fkBrmTj3k862m5aUaoLetaxbKqxBUUz3cqZpK5isMVvdxg3czZ25p5R2hXjxMj4C7T2sYn6kwS",
  "key11": "58B9WysV3UyExDbUnqagK6oqnBUE2LtQoCfEdRLEQXUmRYqrfSycgf4bvF4rmu2WzXJU7mJGwVw5feTYu2vFyPsC",
  "key12": "jocQjnGnMrKQtrMRySY8Q2ZzkAQoMKgSU5gnQQj85PzUoh4qgegsjNobLNqdtuNfjXSnCMLG45mdMbeptia6V3E",
  "key13": "bPLt98d4hWZdJdmUYYqz7apowj7iTJ7J9DS8LK4h2SqgGZhXWkNttLSRHMZpqsfbz4xajSCq4jDwCXdaA94cgDQ",
  "key14": "2AiZ1PRRZgf9PoAyX5mCQgmNvMYWRtsNBYxFaoGBLJJsy5nxHnDJRfsmEpZH5a6hv7hMi2ACMis3f627eCr9tjsE",
  "key15": "2KgAmGNtEqncGH8PhcfjfrwEjsoLcL4jVSxeGgKN2w2XfSxCQHEq4VJWr4bbXY9zbSmKw22oQEnAaXayUQHDtsvM",
  "key16": "5QV2tq6CPHy9gHwKhRJm7pnBjnQqTP4YfpUTkr6Cgi4uwBsqccarNpCQN5Kea52FtqeiJcaVSsGBgmRfy4nmeZPZ",
  "key17": "3UKr99DDPMf4w1bnmfcnNB89JizfN73HVh8h74hcLPFnG6CnX9ww1kG5vKMMLZgJMHSqim5Ctxy6ooQCUsmjq8qc",
  "key18": "2EuBJKvMPeNkHB8YjXy7AM1Vmui6dTz4UBBMa28QAAymSDwrkZaX4p4769hLa99gVZLgg5H8EC8R3h8Bz1jxKJZ4",
  "key19": "2KCgycRPEgQSB6DoSB1K8rJAqTUMB1fi4A7cVuuPhoREoDAoPzzUic76WApaojbWW4igyk2Y6H2LGG4nfVHyARxx",
  "key20": "2oVyCkAhGjGKJ9XjwsmGrUeQYCDEdWDEGwQnnbw3pPd14BasMAaXHZG9P3sQe2rhzuETPuDoY679fKvbeXJrjTFd",
  "key21": "5Rrqz21c8AjGss6Vm9DeAjuJgUWHuNArYYgv4pRBSJTxx9a8sxvzFkLzvGgJZ9ZuCQiCdQoNTE3VEFhZoXNB8VgB",
  "key22": "3rezHAyM9qKpF7wJLvQkrCmR4QLv41sWHMJDHQpupSJMqbKrmuZwRcpG8DmSzossFjFe73CQrFiEDJfoSwhHDaVL",
  "key23": "ttDJwGKkX74hBuAiaZtv17HLin7vbkVkmCFVuUmHpHxwaAhcBjd7ba7As9EjdGMFxZedZdHVfUMf8etDortnxVk",
  "key24": "GewHxpN2YE9YfXeeuiqaWSQWgDTeTjpuADwQD3rJs63ZEwr5YvgxbxyPzfUMk4ajNCD2Uc6E1kPNKuzWBcM9ZtR",
  "key25": "2TJfvCsDWqqww8B3w9fbDoi9vF3xVyUGPT5WE47nb7bfA96XepfYepJqV9XW6cTyeWtHmurxC2YoMc5qFnKLrFQ1",
  "key26": "37pnM5yuojiVf6UbqqJKafPtWezgB3rXu4oSh2DJRcarHxYtz5wcPwiMpKU7AxFCj8ViTQ8eZKhjbWheEb2ya5FQ",
  "key27": "3KxwkdAPrw6fBE5KHQfDEc13HLWtcqRCKrf5s6kgpMsmQHTyKBP4PqRSDM1bk7ZHRb8yTTshV7m9DmCMkmskk1qh",
  "key28": "5AryNUWZhJfFV6ayd2tjXzUyrZ87Ygix6MQFKHCxjyXtdjejytRciA5JJdUGttYyKXhtHXQopsW77dSYph6NP2ie",
  "key29": "5tLVpAWnatukwUdR5VLN4ZPiN8nsxiB4tL3oa6xTxyMv2UmegbcbG3G3WjEubtPeBAvp6Y79GxDf62WesFCpvT5w",
  "key30": "3m6rDASb8CRLsrX1azvQUTX39ShYcKtuG8fDj6Y7FpZZigei4P6QEfsquJG2JXYZKRqyw3GTqkHgBZ3nHuvn5Giq",
  "key31": "2r1mjUjYYJJkhJZVBknTjjtXYUaCRvW8naowrwvmv7vantVAjyqV7Tse6xcNZPUjWw7QS8GMaKCqXKtwpGkrAWwX",
  "key32": "29rgTchGwHuXGiS9YjNfBKT1uBbSxpZaeGVfcAEewgipuvgFnRgR8nPaevk8srrbuDdqMEdFw48XRgrBqmQ6rrgt",
  "key33": "4YU9CJtXn4Wasm6QDLiDyAimuFjZKBeocQXkkLfuWym6LoiBzSBAZwNHCA6R6V17cHydm4QScoEiQmSurJCYNAp6"
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
