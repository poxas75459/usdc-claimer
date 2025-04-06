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
    "63UL4cv3rYxeYvc2hE146rr2RPFbhheMvTnDMUF3Hw7X8WGi7FUvh8f2mBq1Cyd8rRLLuyvpRWdg1b5ReSm4x1wz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cVCrsLefhBe239R6TVwY5Cd1fewKzmtHyYVw2YqnJ5WP6XFHhTN9P6E6N9YVfZofbiu8WQ4Ve99QMScf8ubpHsy",
  "key1": "5x5NnAkYUHZoD6cWzmQ7i6ghUXaueQaLazg5Q51Ew1Lhrf6w33GrYPNEQFiNureSMWJv4SeCP72hKbtAQbKSmRwR",
  "key2": "CZYJ1bncpqWGqcF5sJELrfYdNzUjefiW8uGSd49z1tUYfanXntBpQX8WaXRMx4BGAor7X6a13fVrJo3hxgUCdz7",
  "key3": "5aGE371T8Xu5DpyLh1p1gdPqr4ivZb9EDJ4snzMG8qTxqcPCGWiLE4JGDqGVeHYuokpKV82w82PgzF5CjRkGLFp1",
  "key4": "cDZq6W9UMPbXHkpHdA6uj1TZcZ89gGXBvDYSq7Ktp5abXTsrVuJCwQjEZftM5Y2mNXWKPN3PyyKadHE8LgGjFfP",
  "key5": "3pqV9cyt819syVRhM4wv4k9ZmVGc823v8rRgwdJYBH62jH6d64LM6ybkoKAS768ZLmYoU5ibh9VBbWTAP9eKE1A1",
  "key6": "4BCYHpwBGNstL4Po3pfN6NfbgQs7MtkbkZehDLTtuVGgxH8ZTHLy12bX8VTtLU8sDXngn13eJdSn3gHw2f5nBEBQ",
  "key7": "67RUYubJY3tDJgjqPj4gQJt6VqnykqMvRBj8CRcpX3nUuYApgZWJCUjRtt4T1Cs4S1z2e6hct25KH7PpXE2QaVfo",
  "key8": "3yxvVLjdiSWNaYyqkQYX35HcmqWRP6HvHe4t8xd4LEtWLRLxzfL8FH27BVYT75DxTyu3H64VPJ2pHoinsXTiVVxo",
  "key9": "3pzaLWwj546eZoMR8riQqkDHAWcqtNSDsjzvkStSTWvFsnSabyx43xkzoZeR8ZK1LApAREkhecG6ASp5ayoJvKmW",
  "key10": "5bPgRMANuifvVwyTtgvGtLxvAmNgj1d7QxSEvG7K6rvh3xRAwNuHXFHwLPnjFirMr1r28kGLtjww2rXUAvVUsLjn",
  "key11": "2HNxGAAGeimb64ySCP7edARgGVHfbvEP8Ppq8tp1aGMPqF7hRPqWSVJC7kJfnCzmW9Bbmfz7NMohJv39jafjEeXq",
  "key12": "s89HhHBSJSfreRKee1BP3G4GreCxqF7pojwiVsRX8ckeQ7PTVkrP6ng7dYjnAkVKQr1E44AVvLrcpbM2srdqmKF",
  "key13": "2eLXz4jcoRPMerbVonpzcoMcSnVRDXXVvDYUFK7bVgMVKszZyWUSaGhezhbPCTYeLUVapR89Mk85wRBMudgMETka",
  "key14": "j7p156GbDzJG7fDrfeattEVCDHRGD4cbrHPaUZFhGnSDgeidTcAJVbG93gMmaudzFiw16AqFvgS1rHSuQEahBx5",
  "key15": "5M8V8koffgK1jjQnBnBwzj3BJ9RUp8cZMn74uE12hA3VvaSavDekc5EGnYQofxRactqiGHCnwr7JrJu7khW8wfo8",
  "key16": "3Q8dLVVE6WkecsUkQQq81V1cRDBVKNoxG864i4H994EeR5Zb8wcuv4UbUb6FDJEdTR3jmAtZqp2rPN1EKN7inSah",
  "key17": "BcxCM3ff1w3zVA9hQwWZBYMctQEvQoZJ7c9m3bXfnjoEcLGTLZGAo5XLCrB6yacx29r9N3pYkWbEVna6ybRrF7i",
  "key18": "3REYRP3gmWAf8okk5TmkfTtejyLZsYDdnhUFZNojtUkuazUa5uT1i3ZJ67amG9C8nP4D1hAsGczrUoXNwhbN8RRN",
  "key19": "2xZyAwbS7HxQwr34WYgC4eYsG6jGaeJ2KiRjQ5wyugZuqhCCjRS3nxw8JHCU8t3tRocnagZMJkUKCcXP2n2AJYzB",
  "key20": "uMNTYnJYvyx4JKQA7osmnxV7GD6BuBmXr5vDWzhLppKpv4a8Av67hjAHuHi2uS9nCVACeuNpKurY84dknfKoDT1",
  "key21": "3dHkaVdrxWNTWT8mEsJaFZev1zzuydhNmS5XEoi8GcjzTWoE3faBBa6QGUo2Sw3SYsWtCbLNypfgfC52WeXmLWtm",
  "key22": "3wpTm1qSjMh4qv6gmk8JHiAsv3DRANmkzqdQu6ioAmbhZjw91A9LToq5rTXPG2WrhSqmCod15iexmXdWovVV6MDp",
  "key23": "4tw5KWFM9dPutwQJ8zbwZPi8qQNZj5Vs8jTVhnHz2HMVEKw4QG7vAfDXij2zS4wXz45dQTjecysQ1mBBU1kfBwHD",
  "key24": "5jftZjP1Km6C3a44ByqCPZCzwtAiwFUpk7ge42au2zvdq4fJbddqXXCoodJmcQK3hCZ9z8ejskZF7Rrv8mtCmKLB",
  "key25": "wZFipoY3wyESqGAwZsdPrSdr4JfbnZvezbVecgX8i7UVKJaAG52BECkLCYjW2tRb3whsEgVQHKU7gi2ECskqEPz",
  "key26": "rQh2qNcHH8Z5k9bTPeHKfKqFrrVLW8HQnLhRGhKxrRDT5mwupXKo8Uwxg6XBjvRtp6PM7ZqXyZptVKmdeawtM9t",
  "key27": "3pyTfMu2s9Qn9MA3LPVtcc8vheCcKtf2ACYb4ywsBfknqYq1ukiv65Rf7ANz4DXmZHUEqA8bhtM66r3B1SecLJbz",
  "key28": "6naYRvTfZ5AjjCw3EjgZKtd5sQ8n4hdydmJxrospTKdVTstrGKK2Nq9w9MWB9VmjTEo4TvddMWDAk2EkxbsPBGL",
  "key29": "2rFSEcbwVJ2B9KUwWgyS3c6u7EnqWZcnKSqptABk2B9MKWYf8dA3Tzt4JNQGRgSUoMXYPNsg3Jnyg3NYoKXFNBxs",
  "key30": "3HrfKVmW1YEFfoNimASxau9wvZmjKJPiumCURVELBtBPfUqbg9eDZ58ekJruuc6xUsET18sZRnKexvJFtiqmWBgC",
  "key31": "49h7gS3Bm9KwisRJa1rAzjnpwnwkipwNfrkg3YmbGtkAM5fgCsPa93f7oe9G2tGmP4o7jyScDghGWk7VJT6d1rAH",
  "key32": "F6EVQWHxhFaAoa7kFNiiXV4LyC99LAXXY1NwoitbTGvEME4XziedLngQTxKaeyxxDCseBaFRkVybSet6rCxbaQx",
  "key33": "4cxAqqRvCvumfEk8PTpsMisAkkcTXTojB2X1jyQKVF9rXQk7zQtPYQK3Frj9fjueHusmUWdWtHs4hgnrugvdCJBj",
  "key34": "HYuJTZtBA9eBA5xujDWbr6U4goWR23EfLQ1dHQ5ELFgq8fifmLmc7Jehw8K88QgDexXmnEgADRB4dE7XYRwDXK1",
  "key35": "5zA7aUmyZax537YenyASTHFttcXZq3HHq3RDWVbDwNHMwtXWhRSa1ic2F9xiJUMj5HdFrdUxN7U4jMfJxfzXjJ1j",
  "key36": "64FiyecqjTFCEAKhXPR8iTUNMSeoFLPn3JWUn3obgZmwn3bnLq3RChCwjUrkfXepGLYynDoAbzbEr9yKZLDxYBwV"
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
