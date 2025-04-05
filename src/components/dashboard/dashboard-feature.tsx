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
    "425U2TLpsvx1npc7Vtj7JgA7z4REynmgXNKvTsThVmuE5HvkrL4S1zG8RhJok8R8rS7YoYbBqmQZK5ZfafwSAidT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oS5x7rpy1wjVaJ672g55e6L2rz45DSw86SRkBf939XsNJUEGqstKJaEM3LqpTh4skC62JhtsvtMLbBCjxRAZ68N",
  "key1": "23sCQ3ooFdfgBuvmzfDVbSrs5PRA9rLffexHiC2zxeDxMZJy26KriDrmAMmFe2MpNpVrxqB6DbGzEcTTHUAcuAKo",
  "key2": "2EDbGZ1pN798jRrDKhdXCS5DfuMco7mXGuKwi7ajZW9djw42DPeyqi2BBhvKo9ETuFYCpGUokih7T73p5tNmnzej",
  "key3": "5TQN2mgMsNKvnztcUXkQpCBRBEE2HKgf5PkXByvoCpP2iR1rVPYXqX3ziRSr3Bemf5keaMS6zdED3W6n37kWgSpA",
  "key4": "m5yvkDHE2sXuh2JgkiGyYLJLjHwUyJaEpheWsnRzGWoY9HquVUK8rsfHevkR2qzZgSvokSpMjwEnWfHEK6NSrrZ",
  "key5": "DPTHJ53FMC3CP5unNajFemjQSZMgdyFJFt3ruagvUXy1FP737gfDCzSV4wu2ogaRfu45q9qrXaeWJ2aHYwXjiVd",
  "key6": "37AmBsCrLgSQn8fajHvWnJFDhjxZjFzHexTxTCm3mJ2mhNdEU2scdA8iEqCzKkC3dxwuFKsMuGh1L71CUgM7kZ2a",
  "key7": "2CXLkkmEWBEcjmodr8Fzi8t48xitHxoFcVwidT4PQP4tgcizifiDhAYm2AcgxUJEzc5yyxGiSQGcA2inKAudaD9p",
  "key8": "2i5MRATPg2RufudRhuot1HmWLxLFUrZ2wqRmWGxzXfbdPpuF8HJ3yXDGTezSoucaymCobg9kLauWb7v3sV3jdUAB",
  "key9": "ksAw1AnQFPNaRjZptYP5zuwHjVPQycLkQLDyZVuPkTYR71LLU2KU56m5cANQmeKGaFzMonrj5A5Eiq9dxjnh3Zx",
  "key10": "J55AA24dTTrnZQkKTHRVeYxby8NHAziNqzyh45KcCpYt5GEyDTZDvEwU31PfPajSKg5LwCE9PDEJjnDzSvFweQJ",
  "key11": "3AhFrsxEKbXKyFMU71FJqU593kG9gZq6Ug4dsGSP1mKXcWTU4C4V862B8UjtkaF8u4M4osmXGAvuTJ34P9cZWJJG",
  "key12": "L2sJQUo7PuL13yyXerDRhnYd6duGr8PVAB1SjoCLBEKkQBck6Jruj1R32z23AZU9NdAL721pyBRxjyPUBbeVqfN",
  "key13": "3Q8ubg9W5npVcAD5S7ECsdUkPSz6oXpSSZAP3e1prbiTRm1RPTyBC7RjarXvXDKFDTu11xk5mYVX9ew9YNbWYhyp",
  "key14": "XzTz7ua1eaPjYrakMFV9fPiFDmqLSrNC1nrB5Jxnr9oJvaCsXpKfUekDYwjbf2F5LdGkExQqTYbibiTa9Ta38zr",
  "key15": "3bRLCQgGyEEe2KAhLXJkSAfY9eswfX2miNrbRgcE4yxXh42JFRTRc4ov4rgdCtzctHHzzaSF1wkLDafv6cAE5tKr",
  "key16": "673AaM6GtYFFGbpG2zqDATmgCfT1WpgbXCREboYLJQGJ4bJU9wkcmYrxY276UqgsUfmdYq9YgEw6SbEkDvp9JH5K",
  "key17": "39Dco4sUXjYqWN6bymSdw5x6dJXhKfa5RjMxww3B9HAB4Y7GRCJ9wEpwY3mJ7bSep9nj1b3CLXQHXDsVbyMjsj6Q",
  "key18": "3BZX7kCz5tvsNFHqQHqJQ7Sn7EBrAJ5U2xGV69ywwutdgK23RBiGDG7nXXSPpWVDyBAKPEHCpQg5PP8vgiBtYkUy",
  "key19": "WoGVUsUpp9thRqCUp359hDWcazY9ihjrRfH4eYrN9qn1j6JEFes8GFMFczJjGAkfrPJyo3hms99n45WnuUpcD28",
  "key20": "5u5Mq8cvpAERp3ciQoP6XPq6vnMVDxJ6pgHgHAGhQrfA37W3oxWCXEAEecpWwNPdHkDEsrdQtbVEM9pr1vuTVfxd",
  "key21": "4JaNvzVE3PJhucJHB6hoHfvfzyJTnkrG7fFP3vqujYaCSwBT9Qnr1zvWX7oBf1SC1JvH3XZs8LBT77s5kHWqnp3j",
  "key22": "2njV7ZvFh4X2JQJTqvyKajPU66tLfyVytsKvKETk13cr4ToYVh8iri6fZgXcokc8U1xpSp5ARUNWry7PQymSU8F1",
  "key23": "4rR46FdQBzfncXZxUvTpNQWsrFpmcNzGANPVptRCQArKXx1j7Dvjm5X3gGv5iJ2Q3zTKLD3AXChSSQsQ5w8fHgHH",
  "key24": "2PYCN8KrNQiZVsipH3h1sr3ZUzrGKWQVa7Xxdt1PAd9CNRjhyqpVu9gDSfaVacSLKxY14VpsSFGdedRm1htY9krk",
  "key25": "3nzQwwjH8Nu17V4AbgCWjsQcAWQRaeL8sn3AYNmVbjTCESVoYJvb8j51bRYT5a95jF34mTTVDaDMc8Co3wdEUZTh",
  "key26": "3uLgmw8YQBzBFSs7vWvcbncjk83MUCGC8aExouoWxm19QtCCds7hThft7hK29wAujHbdxfrFK9bK4a7uYV3qCn5G",
  "key27": "k8LJzgP9KRaSMmFY5dnxZRJrkz9VAQcAJyNgdz1CVspPoqy7KaMLoTUSyzdgim1eQkKy2uB9y7tVp5B5hXfwKZ2",
  "key28": "2SrYLhC19c7UAGrhLwzgJKds853wNCuWoVuhvvp7wnyRnRp5v56x1VR7sNEjXAwkgwWVrZpY4GcWSiV1PD5myBwY",
  "key29": "4EbEwyhVyieek4qBhaFfhG4eGfajbbcNMhJPMNhbsGqp6CgQZzXmw2kvsdfbf2gQ7tJoh9rX86MQKLY7BWUNq2yy",
  "key30": "GgEnAgkQ2qkuuwXZiwrRv4eTEP5E91L49gvqRsmHnNCUUndABavG98B4pNafCBynVsgw9cUFEVZpepnGMxLKqJA",
  "key31": "3uKLMALST5QyRxaqD5q8yKknsGHm7hZ683JHD6xZ6KYEjpypggKGkQYCxXanMamkBTLnpGK43Dmvfo1wdVMhV3ay",
  "key32": "297to2L6z1G5CRa5cWorAJHmXzusZTkEZxLRhT1TMFKGQxUVa5N6bVwi5WLJRHtaQmBFbqHjrXee8weEa4M6qwFT",
  "key33": "5Dm55Z8DLEcEmKXh2XRBUHMw9LsHQfLiUjjWfo2Lw3HZ564X48jaB8N7KpArLRHU1kRgqUT58HRBTE76wNpEHgh9",
  "key34": "3PrzkU8EM8KhrZXpeT9Ak5fRboFvBUfQxSdWSHy42DTM5jhP15WmPcuGfKXyVa1W24iMftBD8MtGsrSZAp2pMDGA",
  "key35": "21TcV5c9mkAc12Q2JF3KAT6HmFX4to7GbVdzbjiprhiFzuiF22yEjNMNvrYYKNsoaZ18DxgJbocyiPSKgggpFn8t",
  "key36": "3bBVAb67wJ31YnZqeCZGTCcYrrBXWgYhf4pBQuDZMqWgCsTiwRavuYiahNegCGfTxH58kgqjSgHm5d1bLAp7T8ev",
  "key37": "5WoULYS6v3g882y8j9WB2TxctwqjzvTqicFsXkEN6RLxwHW7ZL1BwtCBzfpycKo1igcq1HVJDancGUPezidULtGU",
  "key38": "3phoSSeVBVamtTioYGSMJZEL7yeKsggWwWnZfG2ru7bACL6ZaY7a418gK3c8p47gKNtoFmkxQLziXs9PVkDxGuxi",
  "key39": "3iqbcUf3ezYaWPHAjJQLghK8EoyrzbqztZzbBEGvQfGsi3GngWvcdTi36kZbCB4YyEshpJk5FFsprUWsfoek5rXX",
  "key40": "2yEf4rZyDkqC5kcHa9o5jDr8CNopGy8XeozfLryQ8dgWEkdMBYPwJq5sD648QXMUxrjAn1bRGD3UMGi9jDG14izn",
  "key41": "5cdSzPLdCmCJc39V8Z1deNimEaRm2LEb3GWpphGnhDGSMCw8QrYmgQ8x2E8QX65ATjXtoXx4T9c3Gf8KCZu6onn2",
  "key42": "2G9yqLVFHBEqkJ5BsgAbbn4ViZ71gXLjK9c85jYVFZBqakEFkkKB8sMpQDgzZBwYrsgfbXuBq1JbfxjbeH14JvPe",
  "key43": "5zLHMDFXVukovJHzrQTECrbbvDwvCUT8oR4nMQnWKtjL8ppSb8o4CVyYHcpBgu47G9KwoBo4Rwt6LJMm2yhFNg1",
  "key44": "5yUTM3ufzMvyL71H6cD4ur6KKyvBXKfTuLLiVxk786esyU22oCZekV1DdTV1UF7ezTpZvXcbQZMfiSusXaiyHS3G",
  "key45": "5TX97qi6b8qnB4eyaCZCeCy8vvJPgS1N8RBPmcrv1XrbEPRh7U7LSWsnFM99RJrjQfCu4h8pnSjBrrfsDBA3Db5C",
  "key46": "3SKtCEV6k1BS1Unkh2YY4vPfvtcH94aj2fnrKMKeu7g6buCyzoZe6fjqrKUowBWQw4GwMfSERH4YuwEdU1XUvx58",
  "key47": "3dyMmxbmr7Y9pFVR4AzNsgGt114EJhLMvsAGwKvZD5hBGuDqGZoWmN32DYHUddqugrRAQJtxP3ws1J3QXrDB4pZf",
  "key48": "3CZC1gmasAvw91EpEZPqRnGXv73MENqS9biaKDeh6HGTanCyVmpgv917KZSnauN79Q12vEasbE2cWirWu2Uv9nE5"
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
