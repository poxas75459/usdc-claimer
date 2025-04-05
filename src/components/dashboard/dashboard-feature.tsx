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
    "3J9L42wygpNGZhnFPconZ3i3Tro5iiXu75Wxi3mYhBinnwMNnsaWqe134ZAF5d4VoFNxEiboUrvR7WkveAZgBGy5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mQdsagJnDH3vd6Fv8speJeg3gN11NbQv1mixXxdYecUHj6yBw5ttju3j51aNoBt3y3BCtCLMMh3BAF4xkMmCf29",
  "key1": "4vXC3pmCs1PV7rMJKfi4M8eGgcVk8MfZRD8c3MaLym29zSj6rdm15ueCeBy3u8187uxVMRdEB1Fa73FERF94LAsi",
  "key2": "4J39yV6BsGd8KsPPyoE6Q26dXjf4w7khbMfqTDEtV7Kh8Dpr4tk5CXZWyXFisbzAjb6iZwCUSzPEPaEUDuFVuwAF",
  "key3": "kbcyawAotk8SXuuWzSY8i83nTJ5Nr2uLX8zQwX1MBxHXpLrN9rKZ3cCqN2GePqJP2NeKdzWYm64bGb2xDPGUh6x",
  "key4": "4Y58iUxo61TsKedWJdtgiv7mPhMWabtofGQo5kLJaJZKz4ByMMwgrjkvQ4Ztfg4iQB7kbchpqc1fPHPcSg2LnUZM",
  "key5": "4Xhc6LjDCn9dV6EFPgabLtehc5fYJxZjL7dagQy2wCCJci45wH7ftLrU8CQeqnD2DB5cPBEzUCuREcMnHep4HA35",
  "key6": "2nwVodeY8hYDaavzBDPuu9BNsQ5yFTXUveQTYLrUWvSWnU3menigKsbciU7HSTAZVZdMW1R1chGuqqGuCKxxfh35",
  "key7": "NDjE1BLbvzivmnHhGwMhcYhEZpvSzRLcwDzQNLd7DUF3Dm2XXLPHeqFZp89cYRVkSdQGfJZ98nyo5ERBwdzmchH",
  "key8": "2xQWo7h9KpFqguuUSGwzt4LwzKUxpEtk64G6FK1iYKvHT4gXc3Z17X5MsmtEd18FynQQcj3W4dSQAQysh9uUeHg5",
  "key9": "2zqckdyCssFFkyvGDQDhQmMUJpe3iLrC6rQRUqrypN7hmhFTmU739HipnAddudUJvGSB17JcqfHG1n9peetAuTV8",
  "key10": "FNzrHDYDdKhJqqXXgS2PRQyQbokMfg5kZRyHJ9u92anCVbVJ93rY4b8t1ovq2AzehnsJP3jD83Enocnjzk5dikX",
  "key11": "3DENyUv5N9PqseZ8uJ8UeCjKschzS9Rofecr9ZswNraBPRdr1YecKLPS4QpgdqCLdtinzF5YoW3GX5F2LqTFsCyC",
  "key12": "4cKmZAusTjbQQWoV4wL425snoBbsD4mSPVoBuXtPpZzqLZq4LGH6hiwsgyVAzsMf5fqPxM68LdtDRqi2iDVApofa",
  "key13": "cew7fMZ7pgb4bD9NQB4cvBMo6jjsMd71N8XhT9prsAt6oyaiks9PWXkCcb3FUQJMpoYNbkaRfsAmieMjAf8QYCA",
  "key14": "4495EPtsMKN4MzmFbuQdbEdZLU6ap5mAvXSnLSMwVBJBZtZoqbZvoG7qG9pa9762Hjdm9PRURaJRusuQCbphcq7U",
  "key15": "5sXRV6D2jiLJg3VvG1yEjdQb1FUBiap72fGgoFx8DWrfXguzNuiBGWNGYgP9rTPVSm3oxc87b7n88Eu5Wdg244RY",
  "key16": "5PxjKTF2XvrpmPp8rm1SYFGeaz5KHeMfPfp3htsxcN3W3cbzdtHwyp7ZKpXzV5bRLByuDKphiM3tzGCWsF4hZY5M",
  "key17": "5d1pyLz8F3U7XppfHUmJKJxakJCPVJbFPhCPucwKBpFYZ2A24NFAS6JyBKsRyE8QaKpDbFAFkoJVf4T4M7tJA4cJ",
  "key18": "36jj51JDYHLTmm8p83CrenG9D13CfeB2LUYA4jcuun31sG2wuPTV17RcuvjFVonDg8RiyD1mJhF6gMsHnQK6sakX",
  "key19": "3ExcU7uhaFCghcBRtJHDxMLa5fz5WBPbtLBoEdBCdXsSEiw7EUbDFfkvUsConrMgcMw2CTgSZtZqjHgRWG19uSjV",
  "key20": "4uttYcq7CV96uoFv6gT6vMS9RBiM8hGoNA8q9xT5CwyumG4kRq3n2i9s8WjozQQjigVqSSn3huNf5ws3tL2TpmvG",
  "key21": "qz8hYYDS5nrLdUPmnYPUJcxwsPjBh4mifN3sc3XBzWxMT3YhvQb5GAFcdTFng3QffR2N5gMTvMVVSkHjj9MueNX",
  "key22": "5fCejUZYU2kzqPxhoyTHdSkCQyxN6RtfUAi1vpfd3DR9bbPwxgcwaFeKBew7cdshepYaVbj5V2v8mohnciSgaco6",
  "key23": "qMEhzeqJkMrEn3yj9GjDS4Wq957NainmCCMCWGTPbUwjwJCBTQKfut5KsEoFhivcp9czPk1Ma7Xr54u56H9pCz5",
  "key24": "4fzgcf6jojPrmje1thvDeMTP2KQHgV5dLrgEeTZcgdxFfJZTqPH7NDaRAKeDDJqrwYNhFJeB1AhpYJ4TBopEn9ux",
  "key25": "51hxYQLGcGSYNmo1RNKrFpzN5e59ZiymrcT4L6UekAn8TJ2kWatBJfHnWTCQzCzxYsrXzJi1Hbyt851YrA6BUo9K",
  "key26": "5kqvcdNGGQY5bVNYoMH8CTiXMrqC4i1DBK6Jkw6hnMvBKnvZahrpQqKr2HXDHk1LvZQgpGvMjGK8uYCEd2LWm5xH",
  "key27": "3sBH11JsHCheZ5riPJ9w3YxZM566CERBBZUrx1s4hLMmQaai6u4tHgoCST2cGaJyYoQ22zocrtMq9EhQ7TsD14LB",
  "key28": "2mxjZQXdEA1ffmBJFGWZLF5f1ZKYDh11k1VvpfN9V1V9TLPY8B3jxPwKyh2HEbR1Ffgu7hWTQ4R7wCqvjBHh2Lew"
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
