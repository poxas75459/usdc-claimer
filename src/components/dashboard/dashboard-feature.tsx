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
    "SBLtCSnEVV2PJ4NiYXKxakDXivHm5EdXZNtuFmzWyuAWqSKoE9csy14zwDpopyTGL5JojqGbBxc9Pgmtj5iUL3v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bwkzSyWKyQjQoq7yv5VBFvp98nMWornpLpQt1aaevYdUM1JztFTeXNU8V9v6f8qvma1UGSmCeLoXJynxzZRjaiJ",
  "key1": "5ocBvrYjbmqY6hHSaKdc7Mp45wdwdfWgd3zKU8n9E3DBFyWiiJmGUvCRjYg8aYYwvShAdwyPdgT5Giv6rUXKjedz",
  "key2": "5xnEV7p4PfnxG59Gfz4vwMRArTziP5aV7ZBnJJ5UobwJN9x1PRiy5RxbNX59fZr2wek8ipQjgk1JJ2maGxLZjaeZ",
  "key3": "Ukc2a1vwGiwNerdWRP9FMePZTVVWwrMBADg2oVJvaCRTbw43mWR753ZqEThYNTp5oRguMusDHtTUs11P8psyXgE",
  "key4": "3rNbGz1S4ck2ajg2a24V6H2ZrcK6kbspsgPCn4EzCJGfmsZuhzPa2jLTaPGnoyodkqQBAXJRR8uPvhgVcBzA6dSs",
  "key5": "4MV6a59bHc8W1RH3JeLRyaXYpCP56PxyCn9fdvTMkwqEzPTUTXSj3PUonLgaDTSG2psmMYJ4kFyAxLM2cFxWuZvx",
  "key6": "4gw249bHynvsuxpx1mAey3UuCD8cDDFNAje9WD5oWkSJLLD82L2Ao3jUHpGXepK5Ywe4DLtTAUQQuBRKeRw7FL7y",
  "key7": "SUygRuia3AMQCaH9JrcEdvtgzBnfsXM4xWzqW6jEFKyDHxG49V4rBzBg9yzjk98ioNgkjaWnCuGLjRBG9Ce73Ce",
  "key8": "qZgaTk9CYRHFeYJTsetGgpW8Kb2qQU4TLivKJnsTMpWSHMYJZHPkSwyzsUHQawbNnfmRcDWqSCZEAgfTheDuLDE",
  "key9": "49k9VLpypYQySzpKqpe8seC85aZeqeDJSENGkRfnqHavAz3K9SqRMvjYZhevuaDWLuS5g7WC8QU8Xn5gRm4uRptL",
  "key10": "4Ah1GoUUBycqErDVRTH2XF8Nb9ZpEbZa4KvpFr6phkeZpMN36rynRNtE1J2vB2Js4WevLmPEPC5y4gtnWhcA1ZxM",
  "key11": "2bTzNQNviReWpX8wSzXdnb4Tn43RyQsCEYoym8xWRmSDzKtUd6pTbfDNMfxWzFSEUhUzug12f8YqZebayDtFNLRL",
  "key12": "2SnnesEbNEMYNw7pUm89pCW96FVqGUghfoLghEhqF84QfRvyGdZdJsPmKQqmcw9BGbcYvCoSjRgTYiRYNZEvDek1",
  "key13": "4fidwp5gZEDqf4nstXJaJXtJptJYCkzc56323z1TULfoWzjnMTpBqCG9ECMzwY1KHu3yEEQY6p7EHHJNeqKRfuRC",
  "key14": "5NxZChxYJGa7cqZxN3KguLRKa7mZVYDs5N3uXJsT5JdkbbV5MCCJeMfj1ybFbjBrRgbppaxGcJJ9QwFKmPBKhhHx",
  "key15": "5Knxjx8gvoLhAmFXfaRRgnXkmniPEpbdbsnrkYVkY88PZCYgKkyAozd9VEMSVmFE2WvUPozfLtSRcSqEZmHb7dr1",
  "key16": "2b3i1sah29xX31gC6xmtpTzEKpYjBJ2B8V6TbAxBskZ2nn5zMGvpwGdZ1htyYJKx6AGRXARF5x224oLMt4VTkmJy",
  "key17": "3V3ximevWjJFm1Jg55JiAPQ4PPPrbYN5PFEMdub1Wha8182PT3XySKHB1TdCfu8tkW3J5EaoC6EWf7fdoKn1NNJB",
  "key18": "rynChjxL3f1WkLdw6HiDgi9ymNLRFGTTgd3XwkX6Kg4KhdSw311whYWm8ZRdv1x35ggWSLsRNi2QLtEhCs23s4t",
  "key19": "2LiyEm5rfCrjHMCJouHKLiK3ePcdUPnMtF7LSeRK2aWHS9rReyr1vpxgYPLszossxZYpHja8AwE7efHXDvr5BecQ",
  "key20": "2EBrWv9oMSxfHUbFrd2JzrCMjpiPAnmgdQFmTX7dcy71jdqpNUGLtP4AqBuvYANp6p7VcwCfmUnS1ZYC7dg5im6Z",
  "key21": "4HbyBNrU8AhfRNqDxkxVc7Y9RX5KRTATAx3yXjZxme3grm9mTpjK9c4qJHmoVd46EAFEEKC1NRdALpB1DsN7G9Fs",
  "key22": "5j8eDmXV8KfSi2EchwTzJhkCXYJUQXo1UGrySZ1nBw7L1K6YyYF9oEuNtXrHz3fPCZXXigvx8e7nts38YBTn3Mvi",
  "key23": "4yc6DChYHDxQnmW79kvPoB478ShHHXH49Z55T4cHMrVqWrEwFcipAJsDeZSxiKnf7sFxnVq1Rq4CaX5QntziDvo1",
  "key24": "4DZbAbUwe1vvfPHC2K6ujttJZZ6s8ft6BwyH2N5cHa81xm7CDjv1J8pvSFkskYTnMsY1oBdDR1TK6bSPffXrEm81",
  "key25": "5YVTmFs7SPksG7wgYXRsW4Dv3mAq6qsSeyorWeWWz9eoeDXKbDmd6KGARHE7pLhW7tKYhbMBBXjmF6Pz79YMYCs1",
  "key26": "9LPAscRSpyXaGst4vyN8gcnWaVx6T6zUz7zRaQYmZKFnNUJVAe7MkRBBq3k2Q4c8fwzQ5kLVjhinEDzBoyK52ic",
  "key27": "1LjmiNpgDfpxDQ2FwZobXZaW11xTPqNxZV8YgezVRQMY4P2z3qTfxL8WvPw7XUR8eugJMYVMUGYiheT9JWqpVnQ",
  "key28": "CtomoaK6kcpRAKEiFPGCWNPUWH1mDyMQ38cw6CAe8qPjTevuuiSGmEvT6WyF6uAk1ipFavpT7BQtgXyG37wN64E",
  "key29": "5Fut6nxa9ZgqaSPMdjsaHG8Cj2wxNTgnaw4VYfbGpFPbHQr8yZ6NqMV3N69hBv6M4B1dyu4WA3owF2bStSPNMaHH",
  "key30": "2wjSFozZY6RUc9hK5DBBb9CBbqWH2nJZoxVFFVRt7bafQWYB73WehWov7sAuJnpDtk8bwccMWAhTfF2jBWVf7MW7",
  "key31": "45C3ZggJAyxCzRKbpu1v2iyRhS8MsHAvLBkwKfePPqdXJM42U1uuCVserFhwEJuJnjLSBNjvfPFox6H8ZdnUVWYU",
  "key32": "AVfRZ9ooiuq1n3JYF91ZUeGzGnkt7ChUXUwxQe5kV56cdwKMW2GDci8EQGtDdduB8T9aSL5KkkPQmDNmfbs8Te5",
  "key33": "QYsEd2HRdiTUFJEj8PDYMJvztAXFL8zEovzgzDQWe9kR9hbTARhihrhCUySfN3hQXoxuCxMyVhiMmeujEKbWP22",
  "key34": "5GuRQyWfb1iQ2pSeERnBudUTWRdTuntT1ZFb4ZSS1GDNddQs7Ht7opcv1U712Fi5fEzQQdFk64P1o4DJishXQEtv",
  "key35": "McX1SYoMxcaqw3NGGVzRrnnnKrkwPCxEwDzaMEWaNMkJk412yQjvYcTh4UNmXtTtikY2n5Y7buyGXpDa342YxdF",
  "key36": "5DLrx3rkpzVCw1RAW1m6Ym8H9Zum1HasxGDLRV1tVLyxgxMBRXp93mnbFw1gCDz7z3tJG1Uvvd41YpCCq8pr37Pe"
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
