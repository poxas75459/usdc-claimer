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
    "5VmNrjmCribKkDitRQQrYF968TLGgre6L1QHaucB4X71EcdYpqjDmbfVMotscRK5Xb3WkatU8MVmV5nkdict1xkU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49Mqys6v2x4UongE5h9XqN2SW7rYUokV6dwFeV12oDZ1QwbTfJoQ7CrNMck38KLA5E4b5Nw13dvFwuGE8cV9S2Uf",
  "key1": "431NTwwDFkuaPpyi9AZiJ8pWBsG6nCCd4ev6nUMJGt1t26j8fQP7H9887PVdTJFfc4J2LV1A3oVj2JFNZKedKPKj",
  "key2": "4fdjczuzzLE7K3ojU3ScrNAKXdEVvk8yNmr6LzA6BRxJF3mEcXo2papyzAmbrhRcHUT9jAAfY6vK2rAFSKDjn3ZP",
  "key3": "4VqAyvRwvqykjUqyCtXr6uGtzC5hVjDcG6A99p2hKpJFNAoMGkMQf8477K9xdSxVX4TTU7cH8Rhk8JMcTpLjr14c",
  "key4": "3FCgLc9vTahoahxUc53kuqDXVCpNa1CK2mszuk5udgs78iK283CKvYSDkCVSeeAHHAKMR47MpvK3SQfQa9LBwHcL",
  "key5": "HzLszFiXHvKUDr2pd5her3JwmNxtcFyXQTcxFyGafhC2dUn9oy4CHLf5GUj4A5fEoByGwtxwFuHsF6urkpSsGpk",
  "key6": "cXtRLCac3jmhosuwnMSwYvVH7ZWXjq57mU1P4BGDs152P2mRuuZTRqCPSSiptssNxJv9eLr2moGCFFtdtZRxNyX",
  "key7": "4NBPBau4dTkMAJAneX35zqB2GAqpCnJcbJo5WUMQUcXM2nRUdxizzAS832VVciPVB6R3xakzNQ3t2kuooh2oAYJC",
  "key8": "5aY8MyqwmG2seSTaZcfrfwKybd6uEJUQSQVFxqdNfRYCBoMHf2TE9rZZCdntBrCmEG3YJDG7G5dPfYa8eScptQqk",
  "key9": "5Xo5rDdQH9RfbT2bKdwiShXZkrYEFavFgY8PZfThSkiStQ6oDyTKw1r2hiBJ8wQhKoC4fA3fyLYmUyz3P8kStgz1",
  "key10": "hQ7ihyXrjsMjNYbq8ppBfqxbWBw5HXYhPrhsBdTJzbmq4wMwLc3nsb9YDokqmTGtN72Pj6eJnNcBLmNFJpD5cz1",
  "key11": "3zL6nrd4EdxfZ1Yi3UUeL6irhwn7vnuAPdjnVerfAPZqdpwu81BD8DkKhrN1j7YeSjN9bn5LwLA3wEZ6K6xT2MPY",
  "key12": "61A2g4gfvB6PyMzsFwL1YtDBPZ6eM6D1abUSrP3BkgPkBHvHN8nVUwm8jKFi1eHTf9tcEQs5zT3atX9zGqdcTfRc",
  "key13": "QgW5sv4uFYiSkEqeBSU3aCHbNuWxSLWAXDcBjxdQW9dX8Lrgw25sRofLqDdN2MBW3CGnhEg67HFhHUU3A9V2x3D",
  "key14": "2eaBdKyAky63dJDBLHsLDyKRNM3xFmY2mYXKigBfsckYFcuRQFv24JkaCyTzBGWM71L2dA43vhuqhRfv3P6biesd",
  "key15": "35z5myBkvgPLCRV7jo2389wvJx7vQfCYAJ5p5JKQXn6X38UEY8tKaZppSGAHryDfgsQq6LJ6q9SM7PzFiPebXHcB",
  "key16": "5U1Qm9tycU7nN692pXSRJHBT3StbSxqvJSAvpKMh8RKdnKT9KhgWYsA2t3hVhWaioGjFKwvTVNhx1cjfsMFP2kNr",
  "key17": "3ExrCg8FD5qhHkMLjFMYagKAv5c7W2iXWSjPAArEW5RXZiPPozVd3iz7dVfKQqGqwYAvAhcgTq8FqRD2HF4e9oQG",
  "key18": "2j6aA9YswcRc36n2AkWxa5WDQj1No1X9MyvjnjafUJ9mMMf3DhBKyNDEvcokEMwv4dvAStJLwPGRcdcbMH2UDpqB",
  "key19": "atuFSZ6gHouVXs3ehpbvbG8SWb9EiKeXxyhRA6qjFFCnruhMiMzZsoNe6cifdHTLRfKw9Zo3CwR1GJSRWkdg8mZ",
  "key20": "536GweM7CNM8qY7b8US4eWSgAwuU8UbZVtjd2a6cXUF2rGZRAEWyqiHBQ2KBJs5x4QoD27KdEg9X3LBsxUuHTG9D",
  "key21": "3eymwHC5JH9BLmCF7awzgQWBPbNt7zCde815VoCgitfeQaAz3tPYK7V3vLoHb4ALePuuZFetJZbCsj5PfR8TYTnd",
  "key22": "4BZk4kSBTUN831qeKkrKVVGWGQaAiZqMjqdTxPE7qgCrvGnhu9p5sK62G6c7cBQm6xx3zgJ54B7sLiHf4CBtL4fd",
  "key23": "51VkyZBmAcz4MorJSmEup4b3m3gGmTSEjZsJRvDp2jErhFLeTeZPTYeBQoX9bKKGYGT5qcMZuPTm9TdsKYEjGJ8c",
  "key24": "2wxssj2s2sPaUCSu9CyfpmbpEZ2AJXnYRNs83j6Rr6zCUntHeKWmd2rmFN9BG17dFh7UXygMx1TdgVnZZ2wuTTCK",
  "key25": "4B9jKzWVAb6rhBE3eYRsJ94zCRatsxtRFQmSQfAJwEp4q7ne8eKy9yaHeHg6pP7mYsSCQkwpjJwAYNri5Sb4bcNq",
  "key26": "2unMn2xnL9q1jDrduQziRHz4ZgniqqU9Xc9rVqHxPjUjPdcc5WFaPyFUkhHsBD1sAAnrqCHUL8KRLxEsK5hu1avr",
  "key27": "2BKdripuqi9tEtancQm8gXTjn2LHH6JHYESVxsKBQS9KPKSVx1HLJW4WqxySbngUhRjtFUpwGouF2h7aDkMenL4W",
  "key28": "jk9LeAPTrGX937A2YnMUxctEfrkgGm9nvchjm9HcM4teSYAfr4sz1fXMxR4QSSqht3tPWEZX6ZPRS1FFZKmD2Nv",
  "key29": "5mBMtHoXtPwoSJBYQ1XEtDBESc8WN75DnQavhkMXUkENRZYGSeCDy73KA25b3R6azVVuDdYbpSy56h9iEWmNuYQh",
  "key30": "4GR3ez8UdmWopKijebE1kFRUwt5w75KNz64SWEKajKMPCz6qyxyT1Yd4yxvPzAX99nraHYYdcoJSD4zDJzTo9ef1",
  "key31": "5HFNJ2GHFYv9ezoXpjhhsbeQ3LpBavEn22rT2Q3KG2JKRmHHBiXhLuR7hSstd3pyFUojKLBvyaCdm4C2tYDFSGcu",
  "key32": "3qkvQ8bKesM6nYV7Lmen9MKAorShmgkAjHD2UGQ4tuFn2Nb4TrShggwPHDgpm1rrJDGpTYe7zxuW1Kd1SPnVQtFK",
  "key33": "ckNAEDyNHUjXPypp8vtDQxLxeDdB6iGWQyaXmbHpFZL5aGbNcQ3VCKqXozhqtDn6S73Yi4e2EZqdsuie9un3RF3",
  "key34": "2UBiz43jQ71r3TWxjMJxG8dijBKFfFR78gacL54kHa6rFrznCtXvvR4g15xrnbdz5ug799nsycRGorD6snQ87FL3",
  "key35": "3WiEs3GaLswexeoBAjgbdcQ7EFwCViysoSd29Xray4WWYJPbTxFoX2ooN1qzuHQqvsd3XuXXzca7aAbWitfE9vLj",
  "key36": "7sAJakM2gGRHGiiVEd6jAN96vfMDm7DKHmPbcrXQFSFC5eCy2EAx8hyKFscs19W61JtmfQinjSwjmVwdjWv1pVv",
  "key37": "GhQt7N7gLxSH1YYaVjT4T7HweZUgvtvDCBe4HqAccfRhc2EzuFKyvoV9uchzMGL2i3uESHBTYQRyuvVS2X1Dxne",
  "key38": "3UnZCnWhuZjvcrM3E9kGdyf9G545vU4PseevKNQH1x8okumaAH4KCcetkK9qaGGdtVAA1hqXErEmfJN3s9Pa5N9A",
  "key39": "25D1eMyTqRjYCSm1eyJg4uivqAW9ZzPuXZY4UaDzU6yei8jo4nzpevMZe5QtXDiFYMrdePE4Q3ng6dAuHpCenj3t",
  "key40": "4LrUVguNwRZfMvDQZoSugzZSZBDsaJzmJXBdtg3ErHh14ZbrsF7SnLmMsCedUyZjT816aG9kqHd2PGpUu31j7dhE",
  "key41": "4twq4PErTAeNVfWrUx6hSa4ituLsbg1mL9JQxy1EqrZKWXRbSvX7aBwKH8qTj6fF9dQYgHE7EHn489PvnCpod5xT",
  "key42": "4mJcTotMhRoUvH6Ve7mbYHiaRWi29F9nUoSK6xjr2fwiM1QdPy9tS7XvYVhZuu4f5hpeRLdmRqoWdb6kziScV76A",
  "key43": "42mZX6oZwwwqemMbr9CBgqFwUzfGqN6BkNHcR9pv3833JVTsFnK1owFtTmuKAucmge2FigtQfmyLC2vfHfhHw2Gw",
  "key44": "2N1eW5MG7gLZk95CnCxfsrWwPeYfPvtwUWLeVCKdSk6reV3QJEZe2hWbiDAE7MxkKUPMsoJ1fpdaruyy2ART4QWh",
  "key45": "46Re6N46AtvybhVe8xvrAek2hVBhnLFZkCFPKDceFNxzQ2gnianDsj6VW4rVGJyJCcU8a4DprQLhtMGg8MYrXzRK",
  "key46": "48WKYC36xmY3DNhTdccfspLv8Vgrd6PLh8K2rK9Qw76zxwquHQfcD3biJXWxjvpJ8LxyNtRtPTjApk4z5HsXKn8Z",
  "key47": "3S9szZC8Uyo1iXCw3XnxizD22aD5fq6ZzAVB73hX7u6K87iEptwJH4N5qjmybJkrpkkmmxRPTPZEky1WdKWrFHqU"
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
