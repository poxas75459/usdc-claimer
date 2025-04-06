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
    "2L79owKK9X78PF4ck1mscoTaxHdD7D6dxPwfyqFtTo4kRxG1bbRSBnUmKYdEVc3hdK1u7V3nDpDj9gckJcugSxyG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hQLAroCwbzsRhfEDCUpmLC2vfdbXPWERCkkZcvfryQCzh9sZvRjbsJ3DgLxdzThPwnrgM9FgbYVcM9AzaUcnHQU",
  "key1": "235kQvr7sWok4Xj3wMStxR6MrjnkUKC8V1BMJ2KGU6E7nMoW8rdJMCbbVe4s4yySQ8jCsLjCRRnPmzCoUoR7FAHL",
  "key2": "JnPXnAbEherp5KHkSYQhGHDTKEpbGkLg9qjF1AcSV83MDWeouHQFnw6LE4qwxTuqsJEy9ESRH5LWM5DtDu5oFXX",
  "key3": "4PcFcSEhavweruuhuybRfVoX5frKPbbjQBXt97sqtWqS3T5ygN8GSGJPmYM32oegaBn9WQJTaEy7eFqC5F5ix1mv",
  "key4": "5764of9xQTFBvUWX98bjAdqiCej5AmhyXwW34cgAKCbJzqcipzxCwHEzD9bSThnYvHSNqZFdAZB6eoPEKwRFhrhF",
  "key5": "2pTnZUSCRwy4Czew8SDssQ2ir21atmGjMiySpNX4JaLH843Yaa6dxjf7Qu7CdjJfgxooCVKxCkVJxnKdmeEw8iJH",
  "key6": "2F5bvvY3aA1KsMYJ3FFaBrd6Anrd6tJUnG5YngEafrdJXqtbyS4ofpgjv9kreXCe63gbGgT5Rr3rg84b57PMLFXp",
  "key7": "2GupqKvsWxJ2LGwjWrJvMxJP7ezgmgFnybc85udsdT9HX9PDDeNjq8Ljrafm3SXMsArUdsMCQETSDq8QuNmT4aqr",
  "key8": "54WyHs47gibfgapxNdZKG2KWMKBVdRVQeGvXXpSXEZ66PvxakB7AfHfQuzUofbZ6MEZjUjaSNz3cU1kfSmLe1tkF",
  "key9": "4yPvCf9xWs7feCMmCKsKbZBxVNGksW48dzTUBRgC7Bi4E1cmPi3KXAvDCWzZcnFYR7dsBwVLc7MW7i9P2Hxbn9gD",
  "key10": "5exYjnM9vXNvRTyYxR4w1QWZNpp5jWkfwvaHoj1sJYhdh192YX8SZHXVAZd2Ttxw8nRm2wqpzzyoFCh4t1TzwXky",
  "key11": "4TTy7kchuAL9QmTbAy8Qb7cWBLPGMJQ4XudcW7NjkpyeYYvz7UWQ2rBhT69PrqEYMJDk9U6vJDXWcMsMchBXQHKH",
  "key12": "rYvfDD5bFJrgaBb2WWR1SzfsDUanxrNLBNCPFtv9KvjuhwoqsGHrY913MBpkuo9A65G2GWB3MvC6NdTSxhHDqeW",
  "key13": "217Lky4XZsiNXmq1AnuHqNLwV2L9yEEwmAzasaeTG6mWCnz9xaczjMztYCbfJBCXnuzWkd5AAM9cAm6bdvHsTn4Z",
  "key14": "4KaJKpHLCbcS1RpoB3LfGZGaSu5opiNgT8gmkiVEAxhZjxPmkdqvcAQuTGmXnymWu3Lwg4QWitMiRwayFCvKQ6BJ",
  "key15": "66xewTpMBe9yA4RnEHdubrfv7NU3X7z7NyXBLdSgoECwhZ7NmA9THEL4a6UF7P9ozahqGvPeHcauwEE7fwPxDg3p",
  "key16": "ETzLFxx26jLuNzGPTvxrsE3hPNUgPke77UmoDVWdeknBYzybh19ELqUHuXxuh5cDHy6tVwmZjkaBHCug2x35ZLn",
  "key17": "4xrAPCPyWB9viHVeZq6WwmtkQ3B6SkyaeMmk3VkwByVtj4xmZSASsd8vNnFbw61qCBZeB6tjZup9drXTRKAH8n9J",
  "key18": "26yk3sipHSAXt6kccSSkLTvYiWr7ohNzVFqU7W8h72dCxD1rrFHD5zsP4FtySormzMiCffxPAVW59Brk9AsMhsvG",
  "key19": "2X3sDcy126CBrfKR6gTKrCiKoAWkjJdJnAH6i8j3u8LUb8hr8nYmpbLfPaF2R3vUXzyKqQkxW1bhfqKA2H3tuQts",
  "key20": "576bz7qsiN6EFNuJtQshhquDMunP9Ng2b2jnn1bwvg2Thi9YeZBBWta4gtFgB4899tfkmz3gjmYWYgfvvdrxX9QS",
  "key21": "41VwAtyJe9kdN7ytjaCaDuiUhdth9vLCWMKpjWq5i34GjsZtGYxnHTDYHpW7LkAdTRRzAXgPF1uG3pGrjPtyUi46",
  "key22": "3HUhTbk7a4F3EpwZLDiQFX9MCdozRUnxudP8gsQ1e5zp18ZKT653rLWJBYdNRX24kyYGHVu1RA9pownGjJv319wY",
  "key23": "sE7crKiuYxgtaySuB8bSgwE99LNf18EtF9yJyuWqNALv9ymGfJxozub4W7rRFQnFY3MRfizRyrt8Hztxphz6fMe",
  "key24": "2VnJv9fwzdXaDYytWNuTfpXtqrfHQXKt9m1Lhx5ka1oANgasPAu231rc8qjCQhDebsME3Z9N8Jix9KhGCann4xDH",
  "key25": "2ngPkCYyDDY2QvaKG4FgBDxmKWUKeMZrCvbxFrLLmDte8Q3PQYp5XhUd5MXBJgEtpfgU4CRmdhiubntpCgd7YrmP",
  "key26": "26MmFDLSt2v6zehFa6LnA5SRfBcxPNUfYaEMbAya7p7HmTqfZHhLCxrVxAkrbtHaMRriTTjjRDcnwyekStdaFNLt",
  "key27": "qqVy8MpUqbkJZYf1nhCFRv1sc2oY92Qn5iFTSAWYoHfofWC8MTs77M7uAdR1dYQ5sCeFhiQedsjkJ27yC5Xr1Qj",
  "key28": "2qfWRxCwP5aM7j1miYmsZKDCK8eddB6pPpSF75Uf6RsPuDaMgQTKVxpFHLvMvmwf8Sag4CYP8MH9Xqh8fzyXmoVV",
  "key29": "48a4J8gQAN6rDB3pYZxLpjKskNFx5RuXsiEBghTNUDJgg6ZfFVZfiDybgpWRodhnJwAGpQZ29JWm94753nhYXVZW",
  "key30": "2LwzxsN4Qb1j1h6Le4aow74uZG1iQpnQdwrVmdzFmEXYEKqDVku21UXzcmvenPSGGXdcFAiUgeENNTHPR6wH8iss",
  "key31": "ckD4rEy8gBd39AhtdtXeDizqo7KGQZMabkM1RZPkRqmX5v3wAbrz6BaEzqRQezJzr4dUtYhyxSyNDxDbLNRJSyw",
  "key32": "X9LgRsfmqy2x8Y2gGp7bpe1Gvo2nWjEDJfNWwaSvRXcD5Ys4JLeFe9UzKUj731bshvqtc1WUvDtaxxFMyX8Wrpm"
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
