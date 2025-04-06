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
    "4MAzXrxgXYL7WxRCkpC9p6kdTPryMMJ4uVpEc5LCMrU5WBENsekhYvbQMN7itLfSncLcyuY2vTPvMqCMKWMU7UYg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fSSzEjnUAzgUbWoBdVbF9EKYVADrXUn634gWHprRPpC2uzZWQChqnoJxqY623oMHSrnQvTU3CuDBbfsmgR3w1TW",
  "key1": "2iM1NZv74SGh4Jj5E2g443pmKhLHWMqeMfXUXyrxnLX6W1Az6iRUcQnnmMVrQT9BMjdKJE9498dQyndaTpCxVtCQ",
  "key2": "5iZuebGqssTkZZuRydUGP8kwh3jE7NYRyCjsvbvQBRHNHuwiGg4bP8CM2reGwtwxRjyWBnhqaoVNKwjFjEFLUhPN",
  "key3": "36B32cadDyGFogcsvfBa3yKqNwrrc3itve2LX7LRscEqE9ZprLWjbprpoRegowBTHjmK8sFBtk6Xc2Dq2iPM6V77",
  "key4": "2kby2FVQ5YFKhDFvuwM7coPCxQCtCh4Tya3mxc8XH3Q2uYtAmVwTYjYhgJtXcfj6T17qgcTQDoH9F7nTDHBoRqKh",
  "key5": "4t8WffeAsLwKcPW57Vhv3HrtmhTsf7H2FRhTQFMPCxsTU7HELwP9dNbZitsHTJAVkeARyyJyr9osT3nNmbomHSU1",
  "key6": "4ijicerxnbhm1oTaSPufXidV6mYoLUpZdZtRGJornpcPC586gCxzUFSecFve7QSg42V8TQAQyGg7CWTM1L7csFWn",
  "key7": "4YWF435wtseXfpTGS3LCkkgjzGa31ZjCzVni9eSi6CTVm5inGKPr3wzqiY7tgvRERbvzqwXidJfoRfXpMpccyTMW",
  "key8": "42uJaEBWEnqZnRAdakESHTptVN8KhGJodJhSr4i4JAhrTZqC9u3uUMHGVpB4u37t8YZ3xYeVug6ngj6nuhNoXS4v",
  "key9": "2sYEDCnMAFBuCWDaaGfLpBKLeRQ4vSrFTexZ3XV7q9PdZne1Ez8BQxvuorgf9Xzs8fBZNxx1Lzv3KHn7ZHCAe8TX",
  "key10": "5BptPv86PqjneAtWD3Nb64iVYW8iPua6C4Amki2gdiM46QUeMH5EbcgcK1hsbWNprnqZ5SyWQT4adRaMvjEs91MS",
  "key11": "2zgbPWYnGaWBViRqvqu96x3AWUXigrVX6nurB1GZPFvXGawJDSY4RLDRFG7Dta1iSVHSwkXnyUto3aG6tDr3qjCG",
  "key12": "tsZbVUWhMaBAnqiQR1QXqSW7NJsaZPSHnDGqgJiWUZiR9uPSyrDH6m1cajd8ZzNjwL4CfGPmBMnAAMoHCEjh9L8",
  "key13": "c3yu9GzSGzF1sKJYf2689LnJmSPz81pVyq3tZVe8oFbKHNvieGd2YPtiH3JoHPrtvA6xnZGTF4bPRQyAmLwc9cE",
  "key14": "5UWSJ3Y9GGqSAMii5mfskLWnXH1fDWYkTPcgrV2oPuU2kexeEwPvRJpuLYJ6fvqSCAdJucLA1r285oYvXg7EioAW",
  "key15": "2f4aqRhVsrGeqmz8sHFC3GpjdL3zSBB8YXyA4V27XVKaQm7tCZettSoJAu5wHDXPxkDezF5MdX2VoKrogcK3rEDx",
  "key16": "pNCmatRBzNi1cZQ4n8wjoxwLLkJD6mC2vsWaNo5Nn4NNhvBRCTXw96hs7X1CXGZgVYjTSS5gM8ToUJyUQDdziHH",
  "key17": "5RAZ5tbyRemaAkCgBMS4B1LUkh35t9Hh8uBLP9nvLPsN1v3JS54CMuJPM4iymLn4EiFLiFR3FATkFEyn3qy89ek7",
  "key18": "4XfYeJ6WSxHJJrUoK2zs9uU1vMLAUikuq5hQhyKFDvUax71xLNQNSb72qf6F6VbosEbJv7LD9JhwTvTktxhK2LyF",
  "key19": "2iA45Q87hQukL6frViEUiRpsrvzMKgxzHFHYsUAd44irGm18kVAdzTwg6qj5YXcTYXKjkgcuoELhBJkE5eUeT1i3",
  "key20": "5WkESE8N4twapuvbbzEg7eZ9PCzXCo5XzoCJhmJt5gfPZ5vXyJegSb32BT9jDijnFPngpKZX719NPNU5jeaE71q7",
  "key21": "66dGR1BLDzZr7zwmaK2BAutSsXBHye2rfWuNmBrSxwyDekAGuu4pdR6kXRY2p3MEHWXbc85WqkZTfMvZV1YYaFgF",
  "key22": "2xnBMxSVk1ndiKVPu7rg58NhFtGdQ3xbC3E85Ja5nkBnKFLc3rCHNNg4WDJPBSZ6bx271aTqPPWZX3q8X3sA1GAd",
  "key23": "2ZxX1enP4zLGpmaqvGwrTDaokZ1wU2Cd9kCPg9uQwcieECbK2d2hkpkfnELFyCmuGtCz8vAnS57GU4HYv3o3gJG9",
  "key24": "3RdgcL51ZZsGZ1ahZmARR1tLEdRhfDpEFRyiiLsaZQSvKoH9rbtLv81pTW74MrcaM68wDco8jhTaS4Aza9fhBQH8",
  "key25": "yoms59a7Psg9ZwPi74xctyTZXtf1odJ6fVgPdETjBnLn2wc6kbHkJZPt8G4dNyaDmcEtJ1WHQhRY1wv6q5TDkrT",
  "key26": "LwjBNrNsgnt9HwP72jXvR6jmK3b49VUFbFs8q4xdRznhgaNyGy9idBCiqAZrg4nFgYbP48XfbqbKJyADbu4PGvJ",
  "key27": "3ESZsHpUswaQwa6mYVJMqUVpZ3YdDtFuyfD8gXdYxBAr5q9D1HLE9eynGW19ouS2mjzt2ji46HCCC8UdgfJVJ8GJ",
  "key28": "3Sqot7Ds5pmxhJT4AwvqMaQ6i1T8DNuT6jaxHQfbNHwSBcEpV6AAtoKGaNcr8vT1YJPq6jPgykQ9Bo1KquLYqTyy",
  "key29": "EoPdr6FDZyxsuYmwaKWiurnt5Vxrp65QJ39NRMSTgmo862c8gA4uY4SD5SLwbVo8atchRutB7RWDtwQdSjjg7xS",
  "key30": "5j59dTDSqf3H9qfhivs97usPwJsRfjgxM6Y2E1rn5pmuurUfwwk3tVYeFMtyReggHzqh7nT7eSkwQZFAiQ1Pm3JF",
  "key31": "25CQry3JqFjLPHFz1wkSTEamt77qeaqnUwSRQ7unKpWE89rktDj7VRrzCUkwBmpyX29cvtWF8KYBkiqtYYE2qQ2i",
  "key32": "HXZFE3B1Gise1xTd338vQp8DfB7Hg8T3dGJaa68Bd35zGteDRBAhQj1EVwPurPHv9dB2U8BVH7ynipbmg5w6Z9i",
  "key33": "2u7HFpMYadJ4hBRxkawQbkLEu7naDYAwry9BaW4j3NPc2Fgi4eUXxkzk8SEjagTv992veDUnwu4H6jDpr3HmiTci",
  "key34": "4AUXqEDCL6JmM5k9rDBaVJWSKBugAcLc8tDjAxADZ6N4uTqKKEmuki6Kgc8pAyskkMvAMjFikCv6jKkSERTJdPNr",
  "key35": "4Pws99GCnsCCCbLRZPQTxrzJAYt4FA9N3D5J7CMK7g6jgk173vf3bZGEiXd94LGq7Vuh4mqGnDgK6KX11ZH41nxY",
  "key36": "6RK3fieh8QUgFCiVGYZKq8GHT7Rb4oP2zMEpXEA7q6TmHqVwbByT753eKSgGtyQRatyfobj86NrwdhB3Ae3Eskt",
  "key37": "583jmh4RDU5Lg92oErxUUaxorQCnvYnLE7dvwLpBBNNiSpUBT1CoS3xsySB19Xy4WW3UEVqUJfmWDyTfHS5qoWWE",
  "key38": "5yUgZ2pPK8uLpGUVgy3YvNy8Dk1TSzeCVbQuwUP5ZEuPi4GGbpraXsYLPuFzuHGsrqWxYnJFmFNMcBoX4GwkCpLJ",
  "key39": "2syPc9tStCGTwBV2XFxjJp4yMYQqMHqvCb2CukSnKWT1szRgWjGrgii1pacfLoMbH4VXEYBeqjni42h8xMC5XesS",
  "key40": "2PDQNFsTDgYSCzHaBNLZVdTeYTuv2pP9NHSCgY3J1D6WQbvMnXbGLQCpjY4Hjf2sxkAnAFMpNWQqgWY9XAzvB6hv",
  "key41": "4WCKZBnDQys6hFnvPrUVc7XprMW9gupXiyt6PA3cXiBGsb5hJEvuzZCsgKLA6ZgnpdzHuFKGsvnS9dZY9bkaiA9m",
  "key42": "497JEZdJgD3drv88KyeC2yscqEqh2fpK92HJSQH7VCC5Jiq1EfCQfnsh8pH3pv5nEDXBxmRYN4QsMZZD2VZKZywP",
  "key43": "3cqbvTiKKvaTdw2tnYexGvLKM4nhcutyzbrPjn5QCZoZBN7h3yT9HCYvdti8gRznT3JPFg81gkhphPZGUMX1LhRv",
  "key44": "4h1uhTQZqeaLoMS5ccQHRuq3bYKRTSvSAWjHaxSTyqjKTdF6grd65f5enbY5VeTXwYCM486EYzoaYg55SQ9tFWw"
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
