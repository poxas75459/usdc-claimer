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
    "3ncKDv6TMMHorWFzDZe7bh3x1UmoLPrSo99sd9VqS5sJ8E9YH5ij4bgi2u1uZx8HNERdtqubthaZUFdrMbYAhNNh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fBM3tamwewS1Yw8mhsXGzLSXwjazxbfxVgzRhTEoSbByjZmQ4M3BZExBxkgTcPEZdyQtH7oLdZFibji6mPdy1M5",
  "key1": "W3LCDGw3GTYeP46ofBWdPKzik1cZtvFn3F4Usc3LUrfvkgG5r4WKvAEHRYKsrqdWMXvxcaTpNkrvTC6Lq2oTeQp",
  "key2": "4oaXowt1jMerWtqsAYwukdA55WswXWWu4z3radrGvpjTUrHSqbtBMyPdMw3n3N5wJ37Wy6GNySYhsYQtv8beF9Ff",
  "key3": "4MrNp53sRS2aKhwhKaM7azYL7TPoUV5yLyDyNn5DZFGPFA4C3bqzYeJXytRNc8Wwo4Dhh77N5Q2Y1KY4pD5VuZdk",
  "key4": "3rbc1k1iTitaNv8WYR5jdxYjbgL7f1XZMvNKHP5T1gifGsLNfJCGwX2onrBEJ9e995xzSqE7HhPV6s2LmMdNjggE",
  "key5": "2BYW6JNTLQscZMCyGoVTAkSVAB6naEphShQTxnB3JTzc7Z1MNDJArkWKUfd6NTTGGzh9TkzJaYujaeRHvh5soG3Z",
  "key6": "24fRetjPmMadom6MT6pjJp91XLYiAwhZkCorXoSvr1b8jsgZdNRy9ny991rctzraRMYt9pt82LVtmDw9rpbLD6sg",
  "key7": "JBjpttsaiFHWERzU9aq2EUxUL9WMwDn6AMUpSB3sjEeRAbAuuSaK144j2M6PAq6Z3phCU4oZ9Gq57bBaX1Ler6p",
  "key8": "2hKzmreEKKeGyUNLM2cHkzWz9xNjknzuXwyhRnM7sLK7z2RRnQ22GeK4em8iQGM8o7h2JHXqUaACeSc7zTKnNnHw",
  "key9": "2GmzZBJ5v9wqgkszgiAP6CWPf96LwfqsFTdCwd3Ndq5KP6ajv9D66FT9MeYaXHqfC371LenfwLfcctA6KP4q2tJw",
  "key10": "2yqeeXmk8m16783UVsBUCtcRVvNvZCaowTeJdAzrqDhT4vw8TyL9k8ywf9bzPV7PgepDDgiSGYbZR9uVVatnJJga",
  "key11": "5hwEaE89UgKWZ5GGWQKwFNVg7Duox8XQ2n4GH5Ucc6rBitJQDEc6yD79FAGz9tbNTZPd1vY6GD6XCZVB9AgzM6eE",
  "key12": "4aZUf8u7WyQqUY6mziJGeiXJdVrfg2bBahC5x3NNzg2QRpfPRBBbYRGrNE57cZsoA3BmX7gJPdhr6Z15cs5dKT38",
  "key13": "3tMoYXnh4mmePDAdzMjRpuzUK6SqGjc5jYGxpV9qyKFoKKwfnXLrEULd5qXhR13feyFWYXo3BeiFNx9raKeFaw3",
  "key14": "FQkWCMb3aLTGpNGVwdxoA1eH4rPMNma7HgAeujKzeGTsc9VNH1yiy9n1CQ6E1LYUuPJx24XP8bs5JBCz3nnf22r",
  "key15": "2gpyyyYYf2YmSLtqV7gEFPL1tESWxDTiCEFsakgnjsJycK5fUnam3htoyWtnDNYbpyRPw8ahUi7Bo8saAu86gLiF",
  "key16": "25UZiXcSoKup8mH9bNibdQNngRCGCNHdZtZDoizakQjizNr9k54Cn4vFUsyMaZhdSEvMsJCWcK1KnhC9BP6as1dV",
  "key17": "2nxhLeSVtQgaVDoRtEj7ApgwECjtHfWhbBzQXdeEVqnnrWidWEjG5VUpuLjuNPR259WBNYKrHbCuEnfBMMCuMdUZ",
  "key18": "5MUYfJFVzmrxvfZdRTMX52sjuuMWSgjN75EL3884KY49QoHKnHJi3U561zrZyScnAfCgzSRTgkGDzosGDwrecH1c",
  "key19": "2CgDafQnSfy5zf4pENSqR8QcAefzmYDYBZYk2JarDhpQqrpAH9F3CABNEzFGfZs6pqvgsuhxrvwtypFZ9gxWQHhW",
  "key20": "WVvifF3puwGZQfTRF1wVZofXnFGXFEcxRsiXCMzrY4Jo6EDVapBz7yPToZqVKUkV9sS4pRd42xbW16tscZ8Apeb",
  "key21": "44Mb7PwimvtHXjbKZuhJ6NDvHZfU9VmYHw4XterYshS7JyvuaDv3dWSrURo3gYkkQ2biFwuVdhXAYjhNJrMfXbF7",
  "key22": "2ppn4nkS1fTsn8w7HoztV1Lga2tENFkyM1dNYKBQBcCSYyPSbnX4ubFXYVdREvu1oeux8j3MfN46WJDjjZg5pQe3",
  "key23": "3Xr7iy25e6mfWzrAqSjosyQaHiK9qz9yUyj2CoDw2XJKkCXdPRWAtMUEqf3LSzYkKUZfh65Nt9TJo2fH1kLXEpjB",
  "key24": "5V4zJ8NDvR8rc1gpegjzkGrSkTi8LZYVPBGwJ3PgouEoxpQMU2QBiQthvP76HkeMLfg7yF2D5AWasPbNV1hGeiFW",
  "key25": "5vhouP9bg7SCwkfZcMZTVP3tBXz8t9JJqKBUEqWU1fwWZ4J3id8o2tbrQDLRCwTTvGbCyMvi2csgmm9C7ovVpXGa",
  "key26": "gc4zZYf7pytgDg8cmWPJLakwnr9LT1wqGHTgjUUx3XeTVv11X2r4v62BeABDFKye6APPXXc46caqTBR7UhBGMqb",
  "key27": "38hav6Jm1Pa8nA3XUtUg4gbZC7XqT5FmgfDdWngNHPvgVHuBTZFuktUbsttqYYggs1HyfR6L9fhvibj3LSgnPJDT",
  "key28": "4AaXXa727uB1R6G3J79qeytfLAHqJa5q1RmXTTgPdsJn4MfLEgwP1t8DqJsV7bBCZRZ88nGgtWR7z5C7Rm9R6TAm",
  "key29": "5t7T3adHRPNgFxxRCEyNwijdssWZDqmfNwYMqSQbb8SqbqJbeaVw9hZ4s4mVNXpPghDYckfL6EMi1i4GsoGwd5sq",
  "key30": "5GPf6AFnrxX1QWZQHLfUeW2RhUrP9C14XixJJQwrkgN2RRU7rQanjZsdnMp1hzqcipkr5pinrJV1pdpnyySahK2T",
  "key31": "27GjGiezQLcDE8dD8xM5f57vJyU4ZUWCM6m8bjWVg8Tu6F4Vxd8KmUFNq6Hz2wkLacoXWHs2iLM6Wd5SAi8DUy1R",
  "key32": "51Y2dE5kYYqQhBHTg4QeatA3U6BF2wxpQU9rXkbciWRFpFmhSoRnkqxkM9SBh1srA7SMKLZbNvRjhR7FpqtVnvHp",
  "key33": "r82SFuJgSkpheZ7uiqoke8pGpAhzLoqKkNVZbLJY1bSPFk7LYnD9qYjj8zFJC5i2hz2c64RDZq9eeKdrwK79Cgs",
  "key34": "3execgfMnKjasMZeQNRJrz5MrDgaFBnBgtBLfLaJDiRZtfhQNqg6jNt5uDSWeecAU4sRwtWjk2gVAZhXLNkw7ppM",
  "key35": "2YP7M7TxXPhQAFopF8J8GJ3s4UthdUWb1NqLp6CCXN6sVQCkdbiZ3M9GiHS32FVpfz9CP66Yy7UWvEymox7iBcBX",
  "key36": "4xW6ukBCRcggqj19uKZaZkeoit5PbVgGEsVEKMqorCfUfpVXWkrnJcmCRSoxvbT15RpfoHT38qdNMDmrig493c7a",
  "key37": "57XtGt95PP174bXNddgMs1vCkgxKLUK26LZTcvmKkQQjFGgWCXee3CWU1dpF3spDeJGkXruth3fxVAhyGQCajL8a",
  "key38": "MoU1ineh1Kc5kxSYpLqYkcyHLeZb49t7ErTLh77FGZNvYeRzZvuvmKZnCk6CG8qLrDRaQ164sDWzAemAZpGGWVv",
  "key39": "wB2cpTmWaVDqFGjoWmxadMTFa3ZypowYh7MfnaohXFsJx8Qj49R7kTAsrNBh8KYHQEUDwiuaY6aTjN5RZyMVDay",
  "key40": "33pGwfpoF7auCpdFLZviie9NQbTzYWAzgszXTK4Xg1mhgzDunyZ8iu6G25eSztwhPWWyhHxqdRdWQtntWdXkFPca",
  "key41": "2BsoqfSiWdJeVbfBiq5uDQRu2AkeGeijqcJxhdEmwi5SyptMeBmgpuXWT51fRUyvgwxWLutRMBs6HB6CAcoXsqWC",
  "key42": "33p7nFkQKAko2Ebv14q8vzXsjr8KZKiLCPGSK3y5E7bGyL5DjhxbG7pB3XtGCqAPzKH7FfQYe5eF9HG1u8Upepjk",
  "key43": "NLHBErp2DW9gfMew1QjC3MuMwXKetdcbwd4iZYjmcjUJXDHicaKwZo9yN943BVvVx9XNSqkt1u1x1zuADBzQNri",
  "key44": "2LQrmL1QQjmmZ9zpjqHAnP837JewRPLAcVWaMc6YMRn29LvAMkpkz6wTRPj9PHDhdkisWPXVpcktdsDVUzDBXYfv",
  "key45": "349koFNjSoefPNN8SC9bmJZb4KehoNH6n9C5JRaFcBBt5Wyg5VgQBAC6y6enrNbc55mpXXpe46j6ajhMVejfBAPo"
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
