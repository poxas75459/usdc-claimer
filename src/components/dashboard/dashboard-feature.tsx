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
    "27BBP3n9Kc4wN1GzhP5xCq2awxpk2zR5QLfvcAQ1uTyKEzrMseNmXxS9k27ehBiuMqUDbhNf1b6H4r9pcb5A5Eke"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2p9MqFYMXjAJkiyUG2uZpAoU63i2aAbuvXHceMUroKP6xsai34RX1CX7FwcEFSQTeqNwBuavBcUJYyCgPALNFbPe",
  "key1": "3RhN5AL6kWyXbV788ux5mGWNNEz9uC5vE6GxbuHrZyvN9p3rGyKUMfindN7shffcy9nsoXP5eAeKcPjt1A5gXFv8",
  "key2": "2gdfjiqpEmiyAahHnNb5KJmhc6k6vitAeeKMM5GyJCNUSXhGsAYAEJSaTSo8Zofohf7TgjY5FGR5nojDwz2wu5q3",
  "key3": "2kGuNjCkxvuHVKetrDHBqtgQE5mFV6dYf9TmpsAU2fCBrxHrg7r82ZrGgtSsNnBhuuQmM7TQ2ptpVSY9DBjZW5hp",
  "key4": "2oyNgasHnH4dFyEbjFQKHWoGbkyNfkryM5j5ER64KPdjU9ov37EHH6xvgZXjwics8tewRPtj9KqoFCTrMzstWTgf",
  "key5": "5eY5TTA3Fra2j3CA3kZ62Gd2JtWNtzj4GyUe9SmPkKxYFxAPcL6pjsTm8kpp5EL9rGgNmrcCWhUc7u7P9BRwEKNn",
  "key6": "2hR1u7sfBwjz4A4JTw9vxX1KMCjMFwMH5CZQFy2EnMKsSUdZo3QqeFq8hbZo1owiT3RpEubjftKZBe3CT5psjeUa",
  "key7": "3Qm8hjrnZPWfdejTySxxwUTUisVZUnKpGkzPgqz2tavLMEqgjeKz6A5nKRTpr1Mqh6QxgTeX3b5ws3DNC369fZHU",
  "key8": "3vaDis6pjtX7FeMB2b1Mf8YXh6P8VJGHV3WrVbRqkYhHEfiUhL8LuuqGW3sn4YzPATGLJ3xiEsDNUhCJyMeV5WH8",
  "key9": "23WY7BcxeoHYtqVB66f7FRaTo9Lh1n96sWkyqXTbaosS87dxLh1SjrR2Lrw49RaeJPHX5pfN5h5Y9BxRxNJyk51P",
  "key10": "58duHXFNoeQeoT8gWqVB8aqAUWw23dYXR4icZJHxwADrcHAz6nKfh7xXruDVTHErA8jaw2zLZeRxuiY2vXyUSemm",
  "key11": "3FMjRKXLcFHAMerRX3LJFfrT6hxfWaPx7goraPpFMQG3pd1DAM1C9JQKCK1h7RA4qNbGd8QLmSqcse572JFgLyfR",
  "key12": "CiftGCx3M8x7kMcAnsQEcxNfsKo1wKxM96da295yfSv57mKnuu2rtA47t7hzDk9nuzMZDAPxpy2wqHuTh4iLpT7",
  "key13": "zMn8xDN7MB4bNvXqa8Wk15vDZyL34H9QEVGZwdTpyZJtNF4iSFYTx44qhhn2sYRLU9bvxuSTRHsJC7ghs7g3z2P",
  "key14": "5pnqMzN2cb14UzU3jkgpppDMscCHXp1ebRSZK8JmV8etMv4nBXuxUZkKLrT2EdVb1ji9knMi1LCQtDHHoDKFKQbs",
  "key15": "4r4jhaRzzVuoXhPTqkRr1P6FF6zxRa1Q746npbrD9PqpnWzemFfaHX91fGuHsAqqrNmKofVQfwjdXLKdEWKNWpBg",
  "key16": "5ZdBWyFPgBiJUfqQH7FP2FmSjFN4dKbDjGr4ShjRvmUFAWiHczoN3cPZZpbPCuNRPg3VD1sXYB9PtCbq47PbKTz5",
  "key17": "5y2ePHtiSB4XSjGSHU6BxX4ThcJ8pmc8mMjjFVQXfbDNNgMcHWvuzCTiPTAosTpF31mabgFHc9RJPGwKshM1LXUq",
  "key18": "5to6ieZ3XVWzWuhAKjHh8ehpcgbDFWbXE7Lojtk3YkXUvQmU52Hc497TrHVkjv8fK576hQWbRG5p9SNMrgoiQdaq",
  "key19": "59coed1WFaxXm7TfbH6LiBYgcWfx4GTFZLBz9qXEoVKwqbq9KnPSAHroVxCXcNBHvXaqqGftb1sDDnTgMTb5uAgc",
  "key20": "27wJZGk3dt2appuTAuhNMFLzTmjd8SEs1HiL8TV42G7LjMZTXKCYiqTp66nwnjjF17YBSujzt1oXRpJQWjnUYqsQ",
  "key21": "4yNeCNGr6SEp8WVMu23HuPJDqtBKa6P66R23yj7VPPJZt7sAWEU3drUCacKRnCid4EBtyRUskDoo7N4bDMa1ooEd",
  "key22": "32HUXnN7UJ6vbjT11qPkA9UnWdbbmPUJbp6BTQ2iYfReQkMxVyWVsfEHr5BGo6zevAD5FRARdvj9Fo8Q6gFSrjaS",
  "key23": "54KxPgKmpd4LEmNwFfb9B4jA3KXecVu31cr7wwq5VBacDhrZMDS7sSZBvM8ioMPnJ64NirCpJtS18gDxTSiJpebn",
  "key24": "3jE5pyZYs2tQkru5kwEyoQbU2Soq6UTQydP3MPH7YRkfXkwKYxeGrhTs9erWn9zGp3wwUZbcZSVekS19jB9k7Kj2",
  "key25": "4rp64rU9j5pTJuZDQVRexGNumsKeKTFQUZparwqzpdD8JiEnt7CAk9TNLSKH1C7xCPgawDzETLW1Q7MW4JnXhqCF",
  "key26": "2ivCrTDDFCrjUQMvT2pP6eYfGwNQ2bW4zpaNv7LZWajL8g8WSFK7HNM4LEjFCRCmiRpDnhP8De7Z4tkyzzYQZaU4",
  "key27": "3caCZxFr5uDLbD3fKjkPexiTSwbxqepjFAW8sdmcCUnRm55yMTw9htB3avjLqRUPEZ79iemassSLkS8ApwrWQ19Y",
  "key28": "3Dh29jqDVG48nqHCStweFkjk9S6nLNrFM8iXX54tRYXgzoXzZCNZ7jnXzs5twtH7LfCSxtEoKxuihKn3LP1eBj32",
  "key29": "ps7Y29WpcRo5GMdnyKPJu6SjtNsDzMywhbvvsFrcgkkfpp9kJyaVtCPmfuZft8ZT8tJM37K9DoUWHQytibiUMyQ",
  "key30": "DA5YJQ9FPYH9CFW5wTSTG5ewVtsDUQGTmWx5fXmaBCRiz1fzpgKwdMLVKZethhjZLLSBFoqRECXrmMPqUdYb5Ed",
  "key31": "41nYu6wjTNXh5qcph2AMwMVaoeAZeiZAZqtRVpBk7t2ondYjZn9fm5FgT3PFprbKKbuQiEMSgiiGSPahTRbaoxfa",
  "key32": "5rvHJeJoe47L35qmsejf5VnhGxD1THu9BsaN4unEbTJnjS8a9BmkH3xEPmAaoaLjRRwRpBMUCTjtEutu1D7pya2g",
  "key33": "5roMmYCpAXy9ChUcxV2ZrNaZ8JghAmfmJhXZAN84hr7KNFthB1SMWmBpb3mnnVitgEe4g2KSnkxGzpgjNNiD57kb",
  "key34": "4rPe2XZfQAG4L84xanVpMe3fdcLzqBGGrzTPUiEDUBtQUVieV5Fwx4gcfPaY8oDCmCi9pmEqZLECEqhMxp1tPHLg",
  "key35": "3PaWJP76BUskTKm9a9fZsTWTssL12pZSuQRUYzZ4tFGK81mw6e2TFtG2mCfdxJs6v4Fn1TNkgUTgVmRjoYvRot1e",
  "key36": "5fLGQw6CSPGcuXna7YjLy6XVCsK3yMRcYux6ADCYDvJmoYrRetBquqCTWBNBoDbQjf8eo6zDBRhnV7rauN4qHf6e",
  "key37": "2aUqRJeV5w1GcV6BKNqLiee9j1FsVj1xfABprYus3HrR8vTDpLceAJfpcGmabsQTRHMazN2Q1LdTSQZzMPnYsN5k",
  "key38": "5Vigg5e6h64gKN6s1beakjEpXUcSgZWJETixMC9xaVzPey5VcscvDvQAiQAndbRk4nX5uPBBj3jDYogymgxjhMf8",
  "key39": "57tTrHAaVvMzQNUNQ7CqVu9wyji29yp2wjyNiauv2qJVor9ew39cTu3pGZDZKGgsreUAaF1GhFMFZHP1eqDCPwHv",
  "key40": "4MHZfRfo9DGRJeacaK9vsvN64dq24Z2pEsDFGyaaWL3uG1NkiMvLvgGwkSz3Si1T4ftB7K1vujqkFggbUsLvwUf1",
  "key41": "2zHiYsCVYWFXc3KpUf8jidVu1hYn4cGxEgND9jJUkiNb3GswhJmQs2ATdjFqSpdEcUP3UoFSCbiqBdL1BhJyejup",
  "key42": "2PGSrZuXFgF4L4oM2YYqUk2o6Pp1LM3PaPdJC4ginc1bohZ2JBoBT6zDmR6JPhqv9J5kAxKRzPDuzQw5xkZjM32s",
  "key43": "312eTg1EmB9jq5FCQ2q4PN5SkHnU61PrPYaMvsnxPNi13kpWKbn7vbDMy9v5WnvWEwG1hGn8AgL5TXdgfAS3jPPR",
  "key44": "3wyPUppyPN2cH74WCuMHLNMjr4pzLSSuqXh2PSoykCzFtQ81XigKyCkBbBF1oMduiqqreKo4aCDaKj7kTwCFXpr5",
  "key45": "q9peqWRfEkFXqUczNfxqubhEnzt22NQgNPnmWmK9VyarhryTqGEMjx1LzgfBLoS2HrFMKmdeXUdv7k3CURCS1mS",
  "key46": "3qjnbFwTggcuyebcTo5jkz9VAYGje5zkojUeNCFfmn7jdE5C3mSidKyBA9xoXoUXd6UgkWfMZwC1dCtNHLeXdpD4"
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
