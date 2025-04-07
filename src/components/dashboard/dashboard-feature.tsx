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
    "3yGfvRAFh7T9bpgDFP2vjBeK8BwuaXyDcFZUovDNWqRXVnoEB2WJSXne5UtBXK7Zrre3WkDpmGHfrf7qBKVpceVu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qF4AS94f6NX7zzK4DU5AA8RSKkoRnqF5TMMToyTohgWXFWdgXB7dFukCB4zyAKKuAhL4xafqjSthaQQvoaHJoiE",
  "key1": "4ynV8VNRvmtR3bxA9CbKy8SBNpkzXB2cU3T7c44RfbbNkSMroNsT15yPQz1Yyqhk5HxPMGWCjYsJnurkevpQr3jD",
  "key2": "3SWm34NfnC4uJ6DAMrdNXLDeE4ZgWraNCXx9paths9b3F3wBZn7Tri9GKuU8EgUZqM9cic3KvYmuAn2MZGCuTaDJ",
  "key3": "DDJc1bCtM2sXkciiuQ7ommbLcdDeAmeY2MwsthFZ5TARx1XukpG8p5VURDe9EitzWsXVap6CraCP3R6FUQyWvfv",
  "key4": "2iVCcBWo2yNrfN25Wvn8TZboYXFmNquNsyPbQGWZKG3JK5zPV2fHSo2Pkr9bmHSjiD2DCaxiJ6LWM9VB9pjbq6bX",
  "key5": "3uxMoGm7SZd3iQmHojTgHTTRvtPnVFXwgsnmH66W6xPNtVegerTYx81bEjU6bbjaTh4TdGjux9CmxGW2eyC5fyJK",
  "key6": "3oD1GZSy55tEhofjiyfcKt34NLWnQtxLKzPicUcVeKgC1YgzjgDpiASCcK9Sk89PLPdJXMs71pkSMCoj1qarEiRk",
  "key7": "5iWcp8oa17Kj426zpDUFAjfVuy5uzyNjA6YGKz4UFkcAJtCTiRmb7QrfqKfZvo1yXqZGbRuUf8MiFExw44nrFTxa",
  "key8": "28bZEh72mvH3QPYQTufTKjTW8wwyK7VTAj8sYnYdJcddG1VcUJK93CnuE1aH7SU1Yn7GSR2t6UAHzHwArCdYFmsX",
  "key9": "5cmZJiFz1PApj6LgxU7MgfyoAFsM4cfpQh5SRn6oU6hscUPYoUatxyfuYhRQa2CFQ9oQ8vrB59DXmAEPfbQFAGYe",
  "key10": "5eREZcXA8FWENHLuo3Tasi4Z2XaFC1qn22b8t6nUSbtRrQnPrz9pbRFFkq3QRqf69tSAzSfnyzfosELfQuFyRUTw",
  "key11": "47NMeHot8FyvAikrn1ZEf4T5XUG9wBhxaCzHu7t8k5SvGw5dXEvL2U1xKuDBDTAC5HVSRJPcwA6KuzwhT1nLfbX6",
  "key12": "yzBoysYUvJkEuWtnw4oVNZAyqRaC1m3uuoQGg7TLoXYWdxF2NPWpsJkd8s6JLN9ARjXAgUW67J2ibZHeTipNpR2",
  "key13": "SpG7wiuqHwec6bE3T4jz19yhCCUuFYTQGxDpUmcQPe3eSsYF74ZySTJjsSSHQ89dBbDtr3DUM4GCM7LRDuXcFf4",
  "key14": "3bbW6NprLYBdZUHUpY7AJTkYRhrBQ2HN5L2868Lrwcegs3xKssbYRkRxXHGjUxheK51buhwhtd5wx2UJimNixqdQ",
  "key15": "2dBJ5GV4xa4NbH8o6Crh1ga32eqLYxpTV5edqWtfoxDe5NUQ4QPCu92MVLDtEFrM69uXBcmKXndPd1dVohTJoMkF",
  "key16": "3DQ9mxSNsia7RRcEENWPkmX3tQTmJKzSbD68TxfDMtPMKnYhLKtgVeEY8NJ2VrEUDk86mrqWEH4jb2nQKfA7dQUC",
  "key17": "2Kkdyue89cn5HFKQYUbhHgoAFYzBFmmgM8EK5PiYDfdi9dZq5BLZLTU1cDN8pYFxBoeVNzTPPDDzDJSnUhozj1rS",
  "key18": "5iJRYKRpro9MBqhMVur8aERHGkk8BaQJEMA95p3BTMComG91o42sq9fx16FzT1UbMip2Hq1KBfviQVXnL7paDAJX",
  "key19": "cABUzNrkJ7PjwHTHnJx73x2mFrKT5DDhGdQ1sa7aQ1Ba7JUeJ7N8aYd2yHZct5m4kCwTNyQbRgXEiKgATDPsdcj",
  "key20": "2c611joTs59bhmFrRrUXsSz5d632N1e7e6ntfD3qmek9A7G4uajSKhAyQpH4BEpTW5WJCccW2RXg4PC1WTfFPWpv",
  "key21": "5ZJhHexFro5K6KqEmztbBFQLjeNabDbyWPVbowgxnFH8E2n6dtVMjPsS8HqikiPwZUyv4m69x7m1Km8wt1sNTT2M",
  "key22": "2M9ikLTNWpXsv21bRvwU3QFYFXSNcter93LWh1gVdpGrZwA81mwNP2GhfkwU2VtYbJCrrN4Y24D8KP4CBLu6v5Up",
  "key23": "3BtKqqCgsfY3shrpDvsc4ymxeXtCGGV1U9SP7aBdAXpyFADbWMWZfJ6BfJZhP93W8JBLxZg77B63J7A5v8ySqySC",
  "key24": "124TVbjzDWx6fedra2HHphGtDJ6VmAoTkQXAjdXua6tV5MLFPNEUFBCoQAZZtqUhWYEVraKcUWXsrvo3dVkW1ERS",
  "key25": "3M75yVLhxZCoEKCZezju1rCK5J3WMXXEwG1VQH14qT8sbh5J1PCoMrNwQHy3sTpBXiW3kNeMTU6ei9jvn7c1CH1T",
  "key26": "jF6HHHdabKQBy5DD86QXbCXKC2nr73fpGaczrvEy5xSuusEsJ1gSERsjrKLEk2gRqYEqeD9yti4XYNpgQeNJcXH",
  "key27": "4ndAgmYmUcfaCs1UbT48vF72ipfwZUQ9oFFzUvaZrDjVxorEciVcjRgzo3FvvxreCgL7E1rBEZpVFxgteacwv1Fx",
  "key28": "45YMsFU5BAvzhBqghGLVgB38q3KH9X4Rf1kk7gfqQRmZVduKTeLuasknPoZJpnF9QPCb8ocLobRKUXzwZiW7NdNG",
  "key29": "5jGXqKM4Mn4y9yudGWRYQckv3CAZY8VCvnsysCmHxoFzZjwDqejBB4FarmEPGa2yUuHxLxN6tFygAqTq7x2TPB9q",
  "key30": "4pgqASVcFm5md6cg2Fmrgw6upttGw9tenyeB6EHWXQYZeVXb3xtcVKjcKrpcTihk2qjzchW9kQRJ2MBF8M924mvh",
  "key31": "2JB3q9ELRaGBpT3JCwMTau7JgbqhoqeXPefuhCjdhMvNG7LqQV2amn3ZwX9Zme5NiUHybEs5Sk4UpqwZZizic3tm",
  "key32": "2UTaeCCuSFkhNjfsYrEQoudvD3sv1hYxGyyRGAZGBoBZdd6B1dKt9g6z5kMvZ9Mia21orGRAfEALtr7xULLzatQ8",
  "key33": "4nVSJYS2q8J5Q5ZR8dsdRqvMAfgmjqpDnC4TSK6cPDfgoBYKG4JKxUnJ4cv5TYbFPN8yHrGZZNzGnJ8bAYZSkQyf",
  "key34": "522YUSBvV5wZBCeS2wyiNvFmmEWH55CDXjg8cEaMb71itpCGn4WrFr8tgfhE1sbsoMMFkPw3rhJyvYMJ9NA2CtuQ",
  "key35": "4WWiw4dyttu2B5uTJjCYuNXcX3GTBiALFFuEDAMBziCK1mBFRPxKdMv1SEEF9GxZiPoWJ9LnFEEfCj8htyDn67uh",
  "key36": "YvdKGyJi3qYHcLiXJHKT5Km23ppFuwpB8P6EPtfq4temrwrKKJ8DecEAeqKDnMPZZ3TSx2hke6pR6VhdJQB8bk7",
  "key37": "2sFakFt6LjwZs3J8v73LCgfUKGM3pmnCGztgCQFvmrWzSPdWVSRYMunnyK4fqBtxK7EegrrTJPjysGjDACimARND",
  "key38": "517aBEiXTiLD4REFtDtYd7YB7BpJctizyiQjhDBdM92F8ZzkocYiTZLRfxzoUQX9xnjWfqdzW2YC1f5fH1DG7NKV"
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
