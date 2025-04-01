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
    "2y4DdirtxmkZhzxrwYmbdJ3mVsDQbD9xJN9a9gCKGfK3ggoYByVCDnhLMUZRaV955wGhCFyyx3miBC1xZjAxnJnT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DzbNWoWafttpgzvLHM7Fwz7PFXpzxiTjWDae2tWSCQHosaWaq6idqA4eqcPGyK67FCf53Lsd9o4tz45ZLEWu7MA",
  "key1": "3RZPoyvptMKtanHHjHGRJbJfk9jU3Shvy62HCN2iJiQFaSCDsdrFWwvEfwv5fKrb6x1kMt2mkvz72t5UWyWnmeWT",
  "key2": "2Y8wafbgPuoxixLWBmkpXSaseExZ9wAu7Thni33rMh2NeLBEYhiRQacULmDH5gHmVkaZM7tVkkqm1Gi2hXnDC3rX",
  "key3": "5Xs9CKpW58jA7rorb8n3mPs1QNuBDdMo39iMDZMPPYbkAQagdDZBBBdKFUAf18Rn69wfbi5QqYyhDK7EnCZo7Jc2",
  "key4": "54f9ntsNv7ressxRJYaJyvJQhr3RgynQ8JYpf99Exg6GmmLDiJz5PDs3mnM9bKjAgcBavHbZQQjMQaPTDCcEc4p1",
  "key5": "jTgA7mMeYicAwsQRNcH8kWKTmiKMgrs3jtTmKdyVtLReCPoBFJqgG1otGkUxKAEh6E7U2JXmH3zwGL2Frz65a6h",
  "key6": "VxRGnk8q8F43h8AuuunjzHkGN9fpTXEs271jgbC9rtnsfcSKeoKhLYSVvZv4dM55Dx43sw1T7XjpPuzemNpR6HD",
  "key7": "291LV4aKR4EeAsuZhpzmn59fuN51aesThEYFRr4Ky76YsEw3v47cFfyZ4G831YAWFPveemeK4wmxXUB7HDemvGif",
  "key8": "57Y4tYMzXX25pXvaghzKJ7yjANEzvq6dEx5KxkmKWwfD6MyZLqqE2rxQAWX6AqRxCsTy4yFqeZ3SSHTdXEkNesq8",
  "key9": "VA5ivL8Hrmn2TJqVZorFjkxnHkSWkVpBwzEuPS3pt5prd9izrSQy5JA7WzpEv486LNM4iNT96riQZ3hnVAC5roo",
  "key10": "yz6XXEKsnQhK1XEuWCdGVh2tq8Dvwyhu21JbsB625LeRPu9qnQASr3fxxfyhi53YzYYXZrZAZUqdLuL2H98uUWU",
  "key11": "T5Gn31s8u7WiJ8WqU98W8esXL9tuqpDmVoebaT8a1h1FtzVpHC4rciTYmujCugZ6L9bAgJJGfjjavrEXczv4JEw",
  "key12": "5QG5ryjm9H47pjw9VVHjuStTHSYQJAzqYnfergYdQNyeBE8D3wXwBLPhmaAtSPykCzrPt9gTfZEmGT22MX1oJUEA",
  "key13": "yxJ8DigP3WYuCK2fB7eGeXUMaDmg6Gj63LVFknfFJ6MjTJhvaWsHBjuSQfLG4nAhR9NTgiH5FgLmWmPvthcLUq6",
  "key14": "3tZcfhBaa8JUZD5JnD3dLiUguBVmN7fudh95cM7L1BzCe6fkh2oD7rVi21BJNt4Coq9WMFq3zZGqZ4qLWmmEXe9m",
  "key15": "3ppApLYjX3mNqUpYxcjrqXUJ4XtJR41fQVR74n6qsBJLTyUKdWtWZL9dBnutmJAba2pdvNLJAPfyJjxsakw5z1F9",
  "key16": "4zPtkWWEK5NXN9zWGAkiTFG5HPxavJt8voRBQtVt7hqyCutGa5BjZSjKayc4TLSfT5BMRvGAFEbrLxWc4qUQLrkp",
  "key17": "F5WBSVqx7UjBhGpsk12QFLxJNsM6sAp35qp9Njf4pZFsPFrmXxnF3UbFufz5W7D5CgGnsEYRcdSCyJm6HELNGP5",
  "key18": "3PVF8gPGaWwRDrY3xKzZ56pP4D63mhUqbyGJpHmYs81721rGaL1kygMPEYUMW3UKj6vwKgQSW4S8ALNH1rhmDpUD",
  "key19": "4AD44z19adMDpKMXvxdpKGLy2LfoZY7S5FP3bVpr2LMpfx5AzAVfhLkY7sz6Ay564mRsYbxb1nZTfFavop2BF6Cm",
  "key20": "53fKXFJ8sXG5sMqZFyQdCBuKYasdZUBBddnWsZztXBMC4s2TsfknBtyvULU1bL24rmPtYdwd5S4iUF6ASG9DGas3",
  "key21": "3Ysex8Q15vMT4EARtp2NwQ88dqLXdRCpZxDo9a5tv8gofzqzANrwY6JxNoT3Sx2jB9iXhh1wb2wyh9Sifi3KoSRn",
  "key22": "ZhTgpxU7HE9ezUGewXQsY7zSSHMFWoJfZ36J92Rjsm51Mq4BRvWyYfRxpTxzsBLrsyeSsp7Zh7KMbMd3sMFQkvE",
  "key23": "3GQSsbk63yCxvuefjY4m5ckKeH32WN6fmH8seEnqBgM2sCokRoVU61dJxbEjfdTeKUFhxxUzCoh6QwT2vss8NMap",
  "key24": "5gSnrTxS6AqwLGXfXjYh6SLcicFFpKCba3NGBqhxBDJgKc2ZdTuDpFvTS8oArpVPznEMbvRp8bkZrH5LZ51G5n42",
  "key25": "3u5QM19CaebSK1r4jib1YVvQ1zLhTY2u95FCSw1gDLFcLRA3jQsFWhVZY3ecAah11tPx9Y1yqhDUyN6u1eEqW4Rx",
  "key26": "5U7dLseZ4wKEfHUSAq291Ya5d4zyyJzyhVJYMgfPDKnoo2fK1yCYhYjPMSFPUAwcDyDvmaGwUJmQYeMNEmHBMr6h",
  "key27": "2Cfgcjn8f4NWtP8VnuCNDDJKtBZzFeywWQ4C8F9LvSYW5a6FeWUSj1oYwP7psiwri1UhiMDwVJ2aebHGztoeyJxP",
  "key28": "RRAZ3dR728SYURGUD65UAoWnkGMKYogktupEwqZttnxyEtje2Y5bicsTfHRT4CvwV2bJ9Hsr8eeBD13e79Jom6n",
  "key29": "4sqfa4e7wpsJVtcCXkDzVBKtvgLFwnvitQtJ9wRqNeJxMzqWGkU7ZQjPdUvMCQ4e8Z5eprs6uBEDWFikWBNRVdSe",
  "key30": "28pduWLNudNj8gfyQ3MJ1eWSHpr7rDWnVBj64EwCx15PtH6uYcakLbiQaM5aaPACLmo4JTNPvjGKZM5rQPLtQyFz",
  "key31": "svibCsCs3rVB7x2sntEPW9dyZQZM9G9ZeYqdnsh47rhRAGTi4TQnGuy4b7DZ1Dce5oiVW6BPerwZHHCuesSSNNQ",
  "key32": "2FEXYKb8sy2WkF1263Y5thsGRh4F7H4XfFYE32mB88Eon4XEDTdkNdVTx9RLokWJUAJYfL9uPTm63txSsVmdVKY3",
  "key33": "5SkCic5fqQJnR1t2VwqfQyUWTQBxozSkaZdkNdcHm7L84BRnNXosuzdVXW9fzTWq4un9saZ3WyHirF7PXNaud61Q",
  "key34": "5Tb1qooSExCymgRZdtjJWe3cyaychv6Y4FzPbzu1tiVrKUPKmABRoF22eoQGFxXGeYYrpAU1pG8BmjYeSXTt2584",
  "key35": "prj9wGGRddaKiCs3gUS5UjcJJDR3yteqgVEwuZofW237dbWhR39y6MhFHsjXJB31GRznG14udkoo9HYj1WEGaQJ",
  "key36": "3XwFRmCqvaqUsnzm8UemZ1qcVb8o4aRnKjRJHpUrkth5hdWFka9nT1K3saoDNf8C1LC5t1htqc9vTeXEBwxEh4V6",
  "key37": "4Q8vZKaVMBwu8WZasdkfjN12MjiRBn8khe6sXW3HCSB5Ehjesnzr8cx25NYXfYr61rk6q4myr8EWwgg6P7PQhMnt",
  "key38": "mLVxZ4J5VCycWQjBXHPnR2JSmntn2Hvo2MtekLEByCrsREASVbiUnbU66jRpZv35aASozQRdqhQWHKufnb3rckN"
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
