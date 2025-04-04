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
    "2Ran4sToTw2CWa1DaLnZtcvToPWcLR18oBh3GqHUPdy7penisPionA8dt78WbTewypxBog7Mzsc5UnyqLkYfok3X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vKSZJBrUGC4XjQQUefPVw6MKMGQR6xhA2CKWdQ5yk1XUaDSecaT3kFpWtzZuo3qbEBQ2LgrTtfMfLrCeiCKatwV",
  "key1": "2sAnakiePuY88Z3XSu4Bs5F9VYuq6oDX5AXxqgAcArCZey1iei1w2J3qsu7fX2Qe4eXbZpsBWXy1YWCStTgAyhBQ",
  "key2": "2ZqPiM8jxL8AssLJF25HbsRDFx3hVmEEN6JBgZ2ZxMew6M5WooUz3HiJ5qM4P3W2Ey6gx9a51ekVzbCN9eNqoAU3",
  "key3": "Zy1GDnnwktUYY5ejk8J7qvDj4UXD4Ke8MT9RUorWUnnJNHJeoxvZ789Gu6Bbng3qT9ZsFwgkmyoKzUrDFrL4ene",
  "key4": "LsbJNkX8VTUr9FgGnyzUBmatLCchpddHybJU4C2zdcryL1askaw2T3cFLiKndMVP3iTMwWWFqDCUm9Cy4t5EGrk",
  "key5": "2esHB1GDo6VrqgMgfwnyuzcaXBAJoqrHg1XDuT3kA6B5BALWRPpD2fRxNEsXf8eXiMZ26C97cKawJ86sJZUH1sPY",
  "key6": "3hvPe5VNYyX2Ack3KVksK1NssSjjUSE1gNTdnxA7fK2KdsRsi8HP79viPUDaseVYPC1yedN7ApprxEZkRvmCmrzo",
  "key7": "4eZke7ezSjQQhWLwNNEFCUMD16s4pvEbGe9NWrtgZ2mTfy3TLUcrEdw92UrrHYb7pCXDB5uSsxGhpYnE9EbN1UuL",
  "key8": "3mn3YhY4DSLxBfCRkrwfX52vcnFmT8p165gAb8gdR4ED7g6aDEheRVxypg46gdPZ3KDT3mTzzzwRSqFvhKwddMTV",
  "key9": "3AJrmXQgr6BEpcVJotdLe4Ry74XPb9PAYoW7oSQQLqRV2jT9XWq2mUpSMNyJnw9QF46cMMC9imYUqUTEQTE49itM",
  "key10": "2D3PpxuHC5kwv6tz3NsAgzt7um5njwh2En5pd1d2L3s8pJ5XtApTsHoZTueUYQX3jiC12QLUWV6MZKRfWRvEmk3b",
  "key11": "2BfQfsfNgQsdtLeuVvRguScpnAomW9PhybG935X1xJtjjaPntgPhJicAhxAGU8rQiqSqZV2Xm744icwmDvsn98xh",
  "key12": "3cwmcfTepy6scUSdMxUWLTURoWLbkBTn6h48dbmNKQftAhFJNfbmVeAAnb5qjL4pHgvNHzbRAwcAGSifoxFxVvmA",
  "key13": "4L6x7NvmGp7136GjqaYbc2FCEwqxtqTaY46MTdzUs8Vmz2nWMQ4MDhSgSLHMxqq8Ggjcs5ByfmFNJQi4rXc1Dzcu",
  "key14": "2SwLEy5eqrzCkrNEoXWWBpzE7A5g3FogGg7Loo1m94S9dyyhvcXJThHwVyZokePKuxx8C64XEjRjY9PTj9rwMipw",
  "key15": "67hGxcJT1XWC7nf8CYNpHKomcW7XgV19sRKaLLy5ATzu7rDPFPjShVbLzxS3jAWLAE4wYZXTKb7nxei5fPzky42z",
  "key16": "5e67ktHEVXtKtM8zkinbiucbsjLiZCfhYWYmkNXEpGZR6QRiMRmYgqT44UjyfLid8xUWXWrXPTUUckKFfo5yqFbk",
  "key17": "3fCVfj6sKcecjQagmHZhE5toHg14gBsnqrtMQe4DV88qigA2KRb9KXkszBffxzBpwWgezZegcytMN9z9ARKjLtMU",
  "key18": "4j2q5Ci7Vf1Ns4jfpZRMithGQ55rBeTNmh9BFfNDS4TN29S8scDBAsTMCVzwJsvst6iMMPXkD23T1j16pZ8G3UGs",
  "key19": "78FBLeDfoammfVU1mpqEFJ8hGjeBevoZC9FKDD2wGaaeScNgetq7c6GcnUqsMqDXXuSgbpAfG8vssp9x5zKwqnd",
  "key20": "4bZaXfgdxQqgDieBVQcxmJejHz9x5cnE5BUFeP1EKxNjSRGJZPEwQFL5CcSJfk3L4CurKc3y4AYXTwNxuncivbJL",
  "key21": "3Us3jh4pdoAf6KENTYkbwVki6Y1qdJoABPeyndAeTeTzwr8tXrFh8XndG9cmgmxua5Pfn31D478tdkPLvEkSHyqg",
  "key22": "3MJGGmuKiwNxS8MyG3VTmzLaPGc1QezSPhaHWTpUHwid9N7mnQfTpRhyBFB9HCaYGyEd7Gzru2gjHjtKTJUB9nov",
  "key23": "48nVTizDXu4J4t7yBQcYAryFz3uWTnwFnqjWLPiqBUbFXkjyiT8RWusBeVfASBXfqZLqZBuzE2vNcZRc7d9KwwnY",
  "key24": "5CkvivHVs97ZKnU6cPhhxQUm35QBN894RVgxf1fYUmtmYsbZ8dvyEeJdAZRw2XNDVm1ep3t6r7gqEdiXD9q72Jgq",
  "key25": "3KFkEVohr2cPurhuB2u7Hhc6stmxmHi62TRKwb7RpW35BB3WRz25FYCxgvZ4khfcnpVEoK2SPeY4ikPQhNHwMTF6",
  "key26": "peQLgja2emRB6eEcTERRvcCDWDsp7bBqWyWkwLV5kBVyTdWbM3jZYRqeKmShWhGrUAFVy8cVEJ3QxMt5eBTNWm2",
  "key27": "3L95H9qBDsqYfKp2sLVz6MzPm1rQDq5UVTRbdnBJiEJE9K7yTsusURQN5HHqvwTEjZrcLBuTVxEhkEh3vE2Jvzk9",
  "key28": "3N8nbk4nATe9G57He6ycumsFhDtgZrSBEmmM8V6xMeG1huzw1eoRJSDYWNauHMi6kHs6o7mWi91vHQvut19zVrvz",
  "key29": "3Gj1eo8aoL7nJuuUZtEFBorP3HsmQ3s2i5AAc2oAPxR1HrNcHiF43oq7tvdL8755NXU87t8ND4avLpskaKTGCfYT",
  "key30": "moA1RpzwdvSDTMC6A6jE1v8EmABqZCtGBm23tp3iCueAy1Zs7HgrFuRfEd59DJEUThy2DarCBx19DYbY9ache6G",
  "key31": "29Leun7pqq367ZbpNGiofKa4ykC4KPESEua8WmS923XExLLYA8tz1m9HPSujdJ7NjorMdNFeoWfUSQd9KhP49dS7",
  "key32": "4Lq3cF8sJBhUqHg7w66ypKi1p3Z5W8ouGwLSogFpR99WgYZSrjdmvufXb4Bna6QTM6Tfbs1LxG6SnCs7b4kAFKXt",
  "key33": "fGMrotTsQxJXZMVzDu3EyZotg3ANKkQJ1mpg7s3QK5ERqzToDZPKqq9ZFzCsixuMzdqCCwfGxhonzAXS8cxAiBU",
  "key34": "3DxuGXV8M52iAiDuK5FA7V4iEJk2mYPe71HdGywxMCvp3sJzDiD2MzAbF7xbzCQzHLbfGUxjNMU7PJ6vHBtPoLtx",
  "key35": "4sztZxWMifnG4Eosga6L1RLT2HemqAzWSDbkk56pWMFHpW9ovZVUzaexzZm76wyAN25ge4bwPPmKM7nS8R2Q2d68",
  "key36": "3YCBosCqr3gSiBXSCgCWiNUNFhHaa37CoZLAsBBXkQqq3oPvmnv15mfxPccHv6rQRks1WhxNP6a3jvA6ZTFK6idS",
  "key37": "5vmLeXSVrLowPJmXcaJXdsF9vxC6KTeoBvi9RPh7yzD6HWTt5ewrBFprob4X5XpZJxu3ipLEuv4ABecATK8yJJVK",
  "key38": "5Fdj8aPCyit8yNVHoHMqupaxJZYJ87WZtspRFfLqr4V41XMjmzQ1pzEmWnsdD9YkspTpfkKnti8ioqRLWnuvDYUP",
  "key39": "3Uak7RA8o9z2LhVbXVXsK4M4YdTmq5ZKHEtX4GaVEv6FAHLQ2VE5orNMP4zMTWEaGe3kgN1UjeKB1Ta2DSLTpQzM",
  "key40": "5figdCzLQyvrpTtU3epPDUicPPeCNSy4XM15gXviUoSivnYqTuY218YRCqFHwuqYNHcq2mZBHX4pG6V4z7McZffk",
  "key41": "2qFjpvD1DLMGYtGsa5ggBA4Fodkks167gREqmnVgYzKxAq89SWPcnsWcfDZC4CKWmi6bo95fmksMEtDavfQSHcem"
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
