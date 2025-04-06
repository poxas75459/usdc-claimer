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
    "5LFebH5CuWoQXj3vpU3ff7vBoUqkbPoZisk7XA47wGxco5sXtENuYLiND1rNYGNZc1E8rSVv4iKxu9HqHEcynjbv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GACvgiwgwqDoSjoGAGdeuTAn8JGxrfCHENCCSLhJ6QWoPmSsEiPFrMfUxiUJhYnCxNSDzuweQsyqF9gJaAaUEm2",
  "key1": "4TDJ7k8uLxvV4JNt36md1atN3F4pXs6nwn3TzgajDUhY83cQwHtxKvnFiGsxZGxuT5x4BCC61pHunbqk1g3kzxUF",
  "key2": "2gxbvrX8rHHjNrQhsBuFGc9Vj4wBowZgCMapfEShqGDwKHNFWmkd3eHjW2GcBBFNPbZB4ZuUa7NHTidxwpEgG3qk",
  "key3": "2FgcYjGJ6VBbcJ3iwtxTgJX57N11AvSj5XRdFYXmh5jDZFJ6fJPtDcfszH2V3mU4xUxnhH6WmGCZzUnJDNXSCmDy",
  "key4": "MWVkpycUWiA3DeBR6mwHLzyJKsNuTGBdDWvN24v6YDzZ5Cvmnae1NTNyfrc8Ypi1fLQRRx2NS4wmvrT3WgnthuS",
  "key5": "5Qgc2XZQKx5cxhszKoCow2WKomwheGGPsjtztSecHYd8suqB9iH5L85ZXmB5c7SmjMq3s4GgumD3gAbTuE1x4ec2",
  "key6": "37Kpp8c4F8XbzKL8cmmPtQf9BY4U26KYoM8hbR7JXQkDdA5dPz8crSrKDshHK5zyYqFCeyk4sxkNekuUJ71Q1gvD",
  "key7": "3qveYZAhkeyuAUh64meKny4jRxcCfYfLepSQTkhpeEuSH3iEJ3USkadSVb5jMmffCJSvZGg3rWvAm5kV6cZ8HTmY",
  "key8": "3zXwYatfQiwJVrj68dyNdGrzkofXaM7jkEH4gJBSEh52kJRe8ZsTqnqChWkgdFoTmiUv5kVDfGTpzZAwLsnmESKT",
  "key9": "3omepxYxF2Jw5dg2viQYMG9ptcQ6RAy5PJGySEZmqYrWww71dgKphXLRCv2nfXdQmb1TxnEAzYVVAXGHbQhPD9K2",
  "key10": "4Meh33TrtYxjR78U78onjiCbE1rmaDNr4Hd28Vd3nzmQ3FkLm4Xi2SdTq9uEz8FBdcFvyNRkvo1WLEo8ffZTggGa",
  "key11": "2h8WXqL6nokvUQTe7gbTdvvyZKnuMm3gvqhWwnKkyDMm7opfS5L67Q4dJz2Z8spTTRt31XTAH9NuiiNTGrgHVTfP",
  "key12": "2dZhzVUAzyUyqhihZ19M3ZVjVsyHnSziTQvDZfGHx2FGwRURgF2JvcwwysjexSxhLXypnHmsHxrYSBYuiVHHiT65",
  "key13": "FNeAYTmpLYY6mBSjNu1Fo1hX82Gmwt9LxTUdNMozadP7NFH5oLrbDywZaym7ECRBFoFEayUirkJj9cAZXnHARLd",
  "key14": "2ExVhdr3Rh2MCBH1n1PyNtmxijdQKXxvWMwZskr3tSVCb7M42F5P5j8PbQD3aX7PmbBp6W5RdspAG5wToHe9Tds2",
  "key15": "3KYfBDvDkiEyCCuHszvHzJtB7eLW83vEyop2MjgbUhqHotGqRPWKVxN65m35ycsHwdjGZNHRpoe5L5eBBhX9Tti8",
  "key16": "j2kbsbbLS2VL5xS1cMW7Bd9tTP4MvUD4KASLcYkq4hB1qULNUZMg92Nm6ebErfbSMD8A9LZqA46eDmptkxp174a",
  "key17": "5XRDbVbXLwLkgCQcAWvyRnpuXaT2BAhKag9Yfq4LD39wZvBikRn6THqeaLn1upnpXRZ5F2RdNMy1qkhVebwQc58s",
  "key18": "48kt4eSRrjMFKXaRvcDs1T6P41jAMgBdqghAj29pSPX6KhHVmxuiFwzE9TqHDYb72Cuh3coQE8hqMZ7oGVaCWh6D",
  "key19": "2bzsbL9chdYtFJfeEfGmYsnCXW5dXpTqod5FioeGdaHA7YaCRNuQjAE79rK92NnpC5K25MjZ4LZz51LjRvm5aDBb",
  "key20": "5ACt1hrJAV5pK9KJRmuqk4uc3m6akSG2McKoZRCXtmEZ3AiY82yaSgkA9LLhctYQNStykUb9bc6K6QUWn1yJZD4E",
  "key21": "2x9ThbTwsV1mNw9CRoQr8f1G49FQNJRTGBXsCm9Z1koDy9FFAhkxgLBetYbgaaKcosbiGSbdeJqz3vrVeecpbsCv",
  "key22": "RM5XWoH67xbCFyUSJaq3Lvo5iM9yXGq1rVmZnRVMC8UEp551aU9LNY92g4GW5RoMpt87N2VtALRB7bFvGGN5sNM",
  "key23": "4QbgZpTPo8LLPKmQzh5JkXqFPsoDby1d3ztiJqmznwx7ZTc3eJBFy6YRXPe6LuTNKSof8ievUmktm5CzVpxV1WYq",
  "key24": "51KeS3utDoykyQZLfbciYjqyh8vEW5T9imWsmohS6RqxjVFWPBXoLbizXqGuwNX335WZkYdNW4nPTmmDwDR6UbVE",
  "key25": "3T3W7YuxMCSEdANcz92hE13XhpsBr6UAbPveURKqRc75NP9TgP7jW4NX58QNShGrjZGfmBRAXkq4S9KxB5qb97u2",
  "key26": "3vQ5Ta19HG1oZd4xhg4NASjnMb7aX8xL1YCpPvpzxFC5FT9v7qJ4cYqg6wzG9S7PybhULYBA799hYjEjiDZQTbDu",
  "key27": "P5KAZms3NcAec7MPCMNCkvDQJeugDqnXRbV2tUCf1Es62nA1vyDxqfdNFZkNdJXT7hwXJWmJya7QJXr9BX7FiLG",
  "key28": "aYfftCZvFouYPvWzeLxPowDn845cwG6FGcjkv1bVKmgYEMatYuhec3xuwCco6VQhBjrukRqTqXr8MrZ7P1hQhRd",
  "key29": "4PL9bdCuCZb8YP4tBaZVifyEqnPEeN9nUNjJ9ccjWi7oAyJGALKXFgzGbwkXvZ7VQyxCPqyG2DgGa3hjJVadr7zB",
  "key30": "29GtXV3g4jY5qzRCyLJTiRXwzxN7cMwRwPZBczdBTvjXnRUnJm96mT5PBfL1ciZrQSFNVeSjL6tYDoKVGaU33Smu",
  "key31": "3LYDCzs21XJjmGNx9n5bR3kmf56ezhN8TETaWn6ictkiCFZ8TGwXmjrzKWWnxjTVV6xXuDvejhpWrw4yLFhP4cjU",
  "key32": "2TX4Ur9rmoZajoxAr66FuqRSR41GAPTMHjGzFyLFusympd3cHjvnFdpnmDJfHQmR77yERdyoXCJQqU3F1RyVUCDZ",
  "key33": "3h9zQPsyW9jEn2bsiG1UHs8bMTLRkM6b4gRF3Z6UdwQhUYponeFuA7gTd8WVCC4VYmD9S1LjV3ys9EwyJAZaWayj",
  "key34": "2685ThuKExpg3Zhb4KmiyA5QNrfeUZMPEWs79DgSV9FC1Xc1Td6hm1fmTsigDM6tc4Y9vthzXmoXFvLGgeZgzkDD",
  "key35": "Zpi5jBCoUbzcb8JxrzJQEvv5wBomA7bUP1vuRNma3sbdvNaNQrYe4f6z8dfX5xzBtCWEwiyfQUcPZ2NrjyBGUVA",
  "key36": "3xYShqttaVmjADesV3yaxy9FrS1sf4LUDszvxzdzYYgNp1rNKEWNSgoLtmi8HEt9GMFwS5MSSFW5cNzz9HK8tf4R",
  "key37": "UeXvZJ3hQ2hSXvAYc1ovnGc1wutoXhRULs2cgFHgjAbFoUEJuuu61JHzt7CAvJSpBBa6SS3rqJzTrHq8L8Koite",
  "key38": "5CtVeFXbVdx6gxUak6obcNCTBLd1Szx77qrtoUxRG3qwWX7SQ64i8ea91QYQshqM5JxkanQikrbMFKeXEmNRxeNA",
  "key39": "26RyVtqDV3me3St1E2L2wsWcR7FLkPBGtuu5NMMTpjbT9fTedZPgaPZbHXojom7Ba9s6ADNVFW3pNK6keTDqDwgR",
  "key40": "5mCiBY8E8X8ggNKn1SvmTKDZ4DLRvwerVC1EneeTuCmqQ7YiTdXd2pWKGDPF12X2Np9dKd3hAnupSbUMBdFGn7Ch",
  "key41": "4W5wDMSMxgDfNsNBFf73uG6PJ1JbRoSRNWJSmHs96NiNgXyK5BF9SaHQeb1UXbXnr1PtCCuQ83EA46QtpYMvMYm1"
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
