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
    "hsqmPp2K8RoV7TSeug6G8cjQkPSh4w3D1TqV2eULGyWfp8ant84WmGpVh1W6QM2GbkHKdJ6oRsWycrZwhzR2UJR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DnPJ13okUzFCFg8JRRA3vE7gjNdgziqLKcQfKZysraqNtezUYKY1GSGMogVXf6UoTYSbcmtrWXgzrWrJ4XzMvyM",
  "key1": "BYMvSM2yH8Tg3bjYATAvNnzEBMiUHeEXVWMXhVUEZiKkCQES5Zhyg5amUELjTkdx45haTddcDxBP6EGnJNv3qiY",
  "key2": "5r1oyecFuXcFYorvFK8kHW347U47fAjikvoeeMp4uUVsEjmQFBJQvPYvJXZo7UfodbhbCAtUbbrRXhRB7sY4tdzU",
  "key3": "28uCSnjBHVTCxCQt6ghVtTyMuuUzQqDYeu7gBZyLmRaLVnD94HjrHxSPv3hobB17fvSUotvVRNmy4ETpZdixv7si",
  "key4": "MX9t2pxoMzxQNAYoPBxPGkZmCQbScC4sv7Bvw4ZhA3o9nSrYhhCtnaL6MwYDGPyYPn1mCDvHgFzz8p4aG2Xzduk",
  "key5": "4GvPEHfnMKknChCBXtXnr2nRiGrfdYraaWmoW5xxDrUNiVnuDbNpoFNHVjr4Eypghv4rPgxJUGvkWanSTB96trJB",
  "key6": "3ZMa5mnxcSYsanaq2RQjhHajjXXJFyp7hyHAPptmAY5xdmC84kMUb32kiikeFcvxK3qr1pFPQv2tbRDVFA76MmfH",
  "key7": "4r8nzewKq9tkjw2DCoiT5AghkisnRayU3kp9H5hjXbmLaikgnRdvadroBb9jM38ca4ETyEpFgPXCvsRico9sHhRr",
  "key8": "3zQrQSDS41PdHQnSBeJVvMXF5T4RNSqCRkKGhtPE34Gh3QAA1MVGDs1Ue8vVWGFG76FcdPtEXNKUAmQ7sQXUkitQ",
  "key9": "3vqBLT2W6qqW4kz3RrjBM2jayNPMbAfhfSBGnTE7rkPcQVdb3eT1WGViQdMtU4JgKf9C6sg5yRXvasVhAkMo59oB",
  "key10": "44sv6QDe1wUsbyocvZ9TF5spR4myJ7hNEbygEzDnc5A6jgtAYZ2ZMdvNaPW8nKw16SHzBRNaTx4SUYUdjae9QQUA",
  "key11": "4Fhj1jVDoNXK96NSjzrNmG8ftRJXsLq7wGbpzJKyEw2yBMzuePj9rhVYk8jbiw3mDhRcD7QCeRKixsU82HUhYWgw",
  "key12": "4WckayTzx3E1W2GQ9DnDxQfrh1E9Kf7pDNuQ5DMktewi4nMy327k9eUdgDRGHmKPBouYnWjApXJGgxrhn3ae9u63",
  "key13": "3B3yoGnar32D3DfLT1T21VNmQ2q3NK5MKev3TY6GQJK91EyzYMoNkePjehHyy9K35GsUPAYfEXxfU8pRh1Xx26xZ",
  "key14": "swEjFgFPZLsq1gThegybVmJZfdkDoN5busfjJq467cCLGeHoAkTE5m4vBbAwhRAjs2Dn2Bwnbv3RQdhj9CBGkN2",
  "key15": "2Geh7wFRh2PaBtvZVYcAHt3gS8sPU1jwmVSFb4SEStcbBcZizNG6TZhwVbfv3VQio9dyo2YGCLz1N2Asn8hqk95K",
  "key16": "593AMaoxvNYaQk163AS2rjqC5BJYcwmM2FyHKqFhCUftM9SjBEKFgErzGWD7DdADy4zzCtBqD7eDCXm3c4QWexrc",
  "key17": "4Sb8c7QqEy4UkppJJdT5jF9JL3XABoY9NiKhqPApPQsTCCEBh9CSC2f1Rqj8fMRpBsiCTyCvQdHwK5tApyNfkzSb",
  "key18": "41TQbFBpcZJ9QEobcmUA5fEUVY5NNjBuHKpfiVjcNcAb8CDwrkWxxxUA9Vo7DvaDsV7rMmjqc1zvHXRtFaaUJPy9",
  "key19": "4z4pf8murBb4WA1UqjZxBttrWykyUAa6H9QyiiXahK3DFbcXmGgJUhUX8peXWt9DQUvZV9AKZ64rN5pMFxPxHjB5",
  "key20": "2MZbsMUAueifujdaRfD3jGZXB8Y7KBXTtnG922o8EgFs7bDxSyoGnFbBMgyd7bJvX3NPC78ujBY58hj8c35Qw3dC",
  "key21": "47Pa27rP5LCAtZxfuC1wrNfGbPyBq77uUZUSTZAkyytFNegvsWqSGzVwhVjF1nz6UNpXouZhX95iM9eYvK7ZeJUy",
  "key22": "4xdw4FyL2pzhFdmbWuTgQf6evjcVxQcSCh3dyVryMd4EpJPWBr8Wo9zFS8S9y1bEzmSvJw6QSGShrEcVXjtHjJXm",
  "key23": "3D8rZjZW4HFDQ3hiCg25uj6ZPFyNDfQzDJpaBiqaBoWCEPs2urhJGXDdnuW6m9VRahMDampSAwC9yyiGEwwYoTRa",
  "key24": "2gopm5TeCB2TWtMoEc7YMiDDnmpT6oLcrqDQaZoT1hV8GcUR4vptf31jN48mxHMpHwxEcfJzXRUMpsxoy7WUZvSD",
  "key25": "4vsGEYdCsmJA76GbmRrr2DnXLQucaL9vDCh3iAUkTQqC9EhU3n1wAviN1gViHR1KSfQjuB3ipvLo2JsHJZJCJg79",
  "key26": "5iq2yywFs1KyyBHhnTQyGbwEPxqtgqJ3r1KiJb3voXgnX8PYG1FUxYSgAc6JdAGPFYgKLTDfLTN4uDTJKRbAWemC",
  "key27": "BE8pKs4tx2ER3M3bmh4kerCiRR1x3U4xQM9sDaN62pKwwH65ib4JisoDJUtRutqXNBKhNEA6niYAJipwvk4UDLy",
  "key28": "23UbLDjeubnr53KXqMjnEjB9DoqL9bXXjEFhRSGEfnkqT8Nkwxi6vR34qrph99xEqkmnBXpUjpyv75ULQrqPVQq3",
  "key29": "5fdkvGTrVShM5cnzHwjRAhW6SJdMbp5DPt7BCbgu6jfEtNg42yBcjARo5udxE8vCZAQLcVe1rTfjnLmQAsxCkH12",
  "key30": "QzrkaDrgfQFCACJK8TDFw8yjqoiuKGfoq9NpDye2wr4mgjaPmTMraWuL6wREnnkTHGBYUA3RLXjZyBCHuTmW6Bi",
  "key31": "4Xxn7FiUUuJxww1uhMmN27T9u9b5TJcZBNgncCsURKkjKqAwT3tMCkMohKqkkzhKCoW31TzcjG8F9YKxnT3pgb6S",
  "key32": "4VMAo2nHT9NBpjJMt8z6ETe2wJofnJYhNMJLe2WwbieTsquDdTp9MYedhdz9LEEXiZuATxxEjEBtB9vU5c53sfUp",
  "key33": "4TatePH9k6ZYwEbmKTKrrNS7h2xmhi7Edq3pRWNAJG83ok7mmvDWST4Jv9Js9FtN28WqYU15st8P7K2MymERFfGf",
  "key34": "27CTihXR3ChDPY2jCs3c3Pzwdqup6mz7uFncWSEvDAHQBRhYHJx4P1kZshjCzSr8twCKHdnxtZNJyGVe71UaMY2B",
  "key35": "2fdPypAMDGFA2HQzHpQPFhfZNafsdJLE7iCcxpjvgULQPjgteCTkHE9PEhcLizYZKFhXLF44SopqwjiqL1iGEsN",
  "key36": "RYshx7h1d9EPhRJYK61ggwLtErAAoLkQ233rxANRH6cGGKuXLm9ZMXZvKpgLTyXGzrKbf5E4aNuXu233XH54xsm",
  "key37": "2bxXfWPyxxEQPSL9N7oHc3tbcACRnhh1EdYknsPKvADjb1FzHbnuzWx7GYVcr78H3jbFbS1YFZJdjtMcH9tZfr2Q",
  "key38": "4YYo4MgHfCXRb1jdQLewBhVpXXLcc3ZsfmNqBiYBbw6WXhQ8ttEtfPxF8emVPjFCc2mGFscf9NqE47ghzmtwdzzL",
  "key39": "4DCjWYDs6G155aQPT4NyN5dQa1mvNAha4xVkHm424EftzGC7vBk4zXoBiDrqEm5S4ezNfs1kKR1X87VuJVRwmtwG",
  "key40": "3HG1ZgvR9iGMQN5asA54e9erfUeo943sEysf8rYdtkUnMgtGq4iWVGnPN74bvhApnR1L2C2Ei4FyP7wvTSZJeU1f",
  "key41": "45dSDkrCQ55Y2dK5VUVS7KNFtAhA4zAomd1uwhHpBHqMJ7HagjhCaoywahQXmEmCcXFL9rJ2PEBnWPvmKcUJiFrU",
  "key42": "66KzZueXhzGp7Qn1VniaPLnVS56QETRZ5ThACKh1o1NHnH8FWwSxEpybQyN5QeFBE5ZkVVFKCHPf3Si75joQbbqe",
  "key43": "d7ML7ZP3mTrFSehL5j2UGe5MZnTosRYWyRBXZosX1j4GdJazWeDYifYuKBvKvdiZ1dpe7Vo5X4GcmFCTtRCG5bm",
  "key44": "3pCA1CqS6WVQiV6XijpTprpNGsCUPCjtxkSaUz9Eo9ZwmVMEbTJCrMe1Wtsdovwwrp3qGn4i3hFj3jak6p8fuNXh"
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
