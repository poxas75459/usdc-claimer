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
    "4V8Q7VhxFnwer6HXh8oSGi8zkhvQ3HHpT2DpT2a798pem9JLWRzq2ifu6kLSJXgFtc3azueTsZRySpU9s6dTsscx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jYY1sdnFF41MjBjxhi1YKkqsikupyvb9yyK8KicefJGW3RBcmma9pWraXMfF7g5RZAfnBLNCQeRHHCZkb1QCkQ5",
  "key1": "3b2VrfbXsv5bAZNH3dyNdGCsnYM4d2DLLh7gykofyqRKgZkhhcFL7jFx6sc6VxhNkKrg9qCckcYRqTFzirMvhbnE",
  "key2": "4s2DGcRuE8pJttAgn7FmVdYb74Jr8mJZgshKUcQqzef6PK4sz22RiQCMxuNNz5PW5KQfSDDAEvG29ZR4W4T3b8Vt",
  "key3": "5ReukRoZabWAm1zYQ74ntAur7BYkgrbZbYrxoWsdzURhKbBVkvksJLSNngUmoq3R6W4Z5wvGJjd5itwrJ9gwPwuY",
  "key4": "47v73EPFrxStFfC3EKV578F1ks8tVRTNU99j5xctwjw5ZuufZjkDXQLD3C9fWdTaSG7J54aijGxuqN9hq9eE4FWp",
  "key5": "3CvJKmt8d1iSxAPS8BZ74cNJhqEo52TjzT2MxMAMCHM7r9Naoj42L9wwS4EKuAGRRr6DbvZpQFyWBejbT8JLzaAL",
  "key6": "3jQjJfn8GnyRe9cUEDTgRPP4dq4gAsDG9dRguWr2AkA5hJqMJwcEN22mjQ4knZZNsFBdn1pWTDDYYhVpmgbve3tt",
  "key7": "4MogPS99M5XDaNgfV13cQz2PHbwgPd4mjoq4NNUbs8D4i5499mtsvx34qTZnrHp449AVhDgndCVm3amz1ppsakP8",
  "key8": "5XEN9EgE4CKFCsovt57YJBeSrVsHxsAV76hBbRdrvijsX22pc7adXAhy6b6wPV5wKNzDRut9di5LEq8YFTWrQyZw",
  "key9": "4haY7xPY2RfPeWX4G7mbguMYmuAqsj6xEyKAFnmERHk9BkoBivY2Mzy9V3ejdiMNXdMjjTNcjKtCHAP7BSukVLZp",
  "key10": "2RUC7v3VYEnSPUTk1QuidNP13hLL8Q9FwAy5Gfvo3SBJKTwbVXEtMyLYookFRnUWt8cNcgJhUYEALjL8ffmzjeY9",
  "key11": "46ZQPewxpZ64WNyfdPhdx69rH3K5YUm6JqMDJn78N4DUtoJvPmGVgQc8ynrvwD6uE7seBwVtXmCStDMJww6Y5ne1",
  "key12": "2antRMScfudGGRo9vC9gvPmuE3uLnxXRiL4xewuY9kbbd6GifpmxfncQkDhgUY5hJwPzKQKc9sQgx4W7cNPG5yTh",
  "key13": "46T76zGw2HUnYky5SbsJXU9Kr7TnDRw9mMEh7d1kX8EhDy5Zq931qZuUqLNLd2MbKXn45RPSxTHmPZr8TWnDW1em",
  "key14": "2K8ozKUPDVnhJjgfA1ReURBXiDoRFa4EvcXvJwdWi7Gws4V7mdasqTXasF3e3E3VN3iZT9bmKeeSpANs1oGcENat",
  "key15": "37RFUMSqT6JpJj7wuLKVz4Bg9FYtLhL3TwrcXAU5a4fKni6xFXw3LCiVdwbfFHqcd3XrrPnuxBoz6k6DZMLYpBWp",
  "key16": "7CHmnw71xzYRXgohheGYZmsnt6k9HUH8kpJ3Ck49ZQFv9TmQWS9Jf2cScv9cRUgxRqHunS8ayFn34YPQxavZQp8",
  "key17": "iyNhg8gLgKMbRihJ2S2Yq2YKrQYyaAfq6X6Dnr9wgQutRKKRged2tRgFMVnpDxJC78ayYp4vMaKViVe9P2wmia2",
  "key18": "QbkUwunneRaopPZMB332vBatEM6dB9b7S2uV5XzHzx5mKXRPLSYnLha22TVfazc6WtqxQzkjE77xsnN68Zgq54a",
  "key19": "nb9ezP4hTuPiE4eqoBCiKb6CwSqwsdEYFADh4hz7AcPVsqarzDq4EhfBAUDtgLmvqWRKU25kncb5N5j7cqriEPc",
  "key20": "4xXZr23tMjZJiGb1Tc4A2jMWKtXHqmTcvKnveSD6xby1PvFDNKLn8yRhWTKmZxunbt7EmgZqus4AxSXXat8R887m",
  "key21": "4fLsgKEoJz8ziUXgk2WaaAUDMEiS9CgrNWwqWJNvHZDp2nVf2492fXjAM9z21iHujEKxFfGSvmATKq4m6LVV1ofK",
  "key22": "No1SkYCjpXGU9N6Ae8WJKfZSoAqdQ8oAiavc51zTQYhQVhmiky5FVYNhvwcvyPsuBbbMTfAxRATntPfJk1WHvw6",
  "key23": "4zagwRdyvuNuGEkSu61xYBpnVYEFAkfGnDcuGyicfMW5ZJDRS4KVaMDmAPBBAUQoYmCpe9umWaU9kzyDWC6J8aUg",
  "key24": "5LsVpWtBc32oHrsYAJyGshPotz62oFfHtETtYtDamxFmY5QWvXaFHXMXL3ipvBRyW3bEZCxmxoHHHwtA8qzKbpcm",
  "key25": "5TkLRUHekYk5vE5rcFTDUANBoqSpx5vauYNjfsUfUjiZuiqKzXaLbRFqg7GYuF6WZjctF9CGZMSjdvm4ERR8cKRJ",
  "key26": "536TGu74ZxHF9veNPgfTuQa46RrZCyCh53TvNwJHDytMkdGc5ZozPb8Q8Evoa6HkQJFA7GsjLosddQdHb7LCK3kd",
  "key27": "3hpy6GgpHK2k432kfX7fXeGbW9ky1YqFRXqkSxUSUhe9ymjhG2HtgYJ9q6PEbgi1oYZ8qasEGg1M3YYWcHuRp2Ty",
  "key28": "6431UYenj89PqoT8j78DcTiL9APDXmfqjh1MmB8XGeHfaMLQs8w9SAHjuTmkbHr4xJC9mHjFNTZKMmgGsEgAgxhP",
  "key29": "oMBYYzpgCYMJ3twZqAAf2VU5yUan7hCuFqRGQGqMc3FSnK2YqYvNhFE2fTuvb26FpYMnCbD3xxH7fdYVy1B53yr",
  "key30": "3gm9Su8ut89hevQ6pyLAW2DMF3hE8JgnSBosy6BXs5hfDtEjZSMpVAkWLCcsbevkoU3jPZbwmTudv1MFkwpopyQi",
  "key31": "34QmovLx2hqjdF6uCUEuA8AmsSbZofHHC5zc2QFywNTokvkiswNWZQSM6oLt6ByrY2jn2SW4rg1xr3NRMRDqyGNK",
  "key32": "4eaSJqkEQuJdr7tFW57xDvNqa1GtYB3kFjtuNB7svRx4THoaygwR8mL5cZtdkfCUzqCQt4zUSuhBuo7XT3Pyjumu"
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
