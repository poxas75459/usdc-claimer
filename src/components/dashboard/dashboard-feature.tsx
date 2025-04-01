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
    "37nMEWZzC1jZbBbqiLo4BCmArCZTeiSyCKiT5oxibBvJgn5BPFaWJJcXCWisSj4CRzgoNTKdt5gq8zAJ7t9jFBG2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rKik2N9rackyY9cPKMvo3GoNG8NmfwRAwoJeeHc76A8vXGiNVavz9ccGPqY4MZNq6iYxPvkYPrRr8UYQEb1EDJ9",
  "key1": "iLPPu1utYAiD3ZjZ7wSWnJB6T5mQZDWoUBwsQupzufscYg9RQVyHkHWiPK75RfLyYGxxH6DDNwL7sN7JmRcwwkW",
  "key2": "56XPGtMZ6VvGWXSo4bERp1BTfzbCkE1SqwRxkwceAGTppcT5S5RyhmRxMxWHEcXeA9rpG4XCDqRCL1dnn4psCUcW",
  "key3": "2D4AP39yiatgVZ7Kt1u4J1Xm6NXY5LSmzEYrHzrJmpMhpghFk2Kk6pftSAkbPC3b9xFcaoS8QTvf92EQYFQXwyZu",
  "key4": "5nvRbUmMnoWA79tkJPWPMJMKcgALf7WuzAB64yh34uh45GaQa2YNPzV3dVQ5yPjdG7WMHyTm2KqREaygtDVKV2nz",
  "key5": "QS1Qk4fNqM9fUewsvpuEKnp9njMyAU9dFEZePTPsHb2KkKVeZe4Tzz2coVJd3EnKsfaCxG4jAQHEbhuVDvWFJ6K",
  "key6": "pGGKoQTmyQttoTFV5B2AaD58nc1MPaLCrFPuTe3XCrZpcrABdrREtYRn84fLxgSnEtHJgvJKBXZ7DgfqsuF32Lk",
  "key7": "4V4CZR6eW6dmuFgJjcFwpTBH5QhhvLKA6GZxA1NXR8xmtVqaKYsGMEdf9dMEJ7BqZ8iuRYUDS8vnnHvV9QTkJytH",
  "key8": "5fJWnXeKe3NM6buytmMWVsZPAWqXRWJ9QKyQSp2NUonbJQ5czAz83VsFdX7XsKe8VccbEjPUpvz4pbG82HyFTBp",
  "key9": "4b7BUQsArZ9fpXj2JN7PpKLbherBQFA7Z36wULHghHxXfvdbYgSZ6vhFQY3L7CmjsoSeX4oTyhWxAVkqibXccDUo",
  "key10": "58m5EGWGFhuvXgEPGufqcTYMMhXoyT2RGPosSd6qDNEcuM7RtKbNvjxAzDLvQPrYuXx3AXLwGHfuaNPCs6JcJCQF",
  "key11": "3KrAQdJupiRNVWpR3mnF1ZehKgzrMZZBeNvzKMicDWqUWRoDMLwsCVmXeg9wCdrKVLQtR6WbmmxLLq5dVwXTwRsA",
  "key12": "3G9iGBYu9UqPjE9ZgVfAD7iHReJqtxNSQrfnGBq3aSFT8WRjcJDqxy3LiDyyYiM2gXXL5cy3Czh8kRnLABj1Jjrv",
  "key13": "2CSZhBjz2tQmgGFHPK64usK3B7femcTkKkvx1cmEfpnwmm4eJw1Ts3sq2zSJN9ex89ofEaVzSv9rqskU9Hh5wfFM",
  "key14": "2Qhjr6g4Q1dJg2jDPYq7vsHtsNTrykv4MMVj4TYTwFCboehGUdb6tNBodyRY3FZqaqBmHg7hDp9zW6fLQiwGQ2sV",
  "key15": "2tEV7VjSS67YT8YM8HDH431iaRqmansn8AuEtxvtsJhXhjm1nwuvsDekGYduiBNrMKcm9SVEe3P5ErksR1RMkrzo",
  "key16": "5bZP3WHHJfiPF7kn8oKhmJXcdSbZbCcDuLsRKGZp7vnYMXVCheaMvUFyZEFGMp5KEB3AftvZKepAodMzmn95hUpn",
  "key17": "4mReH2jqfn7qAnP9R4sW58oMLVNjUyFiBYuqe157csJUrGegHuPXHJGkDdFMzPqcar2c5Go5YG9b2W4aTcoB5GSt",
  "key18": "66QUMUMvEsveYcP2pwdYiANEVLyQHobnBoKN7F45fV6hHDuFM9XPjSBvs8t1eXY5XBKTeiukMeHepWdAG8swGCFs",
  "key19": "3TJRDBgmJLgsZ7YWHe4Kda8FRQ9pCduiTwdZZTs4eT6E61NFhxGiLryzRBDPni4qvFQXdX2JhyWrDiS7RjRUSbPC",
  "key20": "4aubZY5x8wvs57eFwjuutM2jpixrSp7KzQksUDb2g1c3bpo3jtg2HYSG1Gk7WpQo6ozgsanAH7hbZn5w3t2rHNnV",
  "key21": "5SVdaNVwZ1bb1R7yLMFELWVujfh9zHYM1ytPgNq7kJy8zX4uM69KGeX6kFqmh9xKraL9w4kQ5D2ZE836ukmZVgZx",
  "key22": "4ZZqs2nQqcvrP7S7JgYKiRgJ4cfXzN5LoHVzgdY9RymGnBv84hpuXfLwZE1tJsPSkMSaG9ES3uycydAtQ6NK1UpP",
  "key23": "2UeynNfNDZ3GqtGwXHjJXGsxhTaZUaMvD9uxXfdfuJdxsZd8tec2PRTYSTEn2KtHsvTGaWxuGvYTvC2o51hN9QuK",
  "key24": "4JdB2M8HmyFQ82XFUFtb11SVksFw51PErBaibQLHFDzZ26cwfyWUL9qFH5LPy9yFtRRMKvcaiBY4Dg7XB3YTbv6",
  "key25": "3aFLj2NdE78J6zZK5HCvrPBn4T2FUH7E7ie5bAUY9MttUkzghHTk4HAoiggu4QLvDg2QK87ttQGGSwcs1ismWm3T",
  "key26": "upxJD9VjjTBdzAGxhQMFhoB1drHzgc3fY29nhpJQYEw9mbTN4f72ze5VTFctuVmAsbaJ34wTVULGPVaBKuTspRb",
  "key27": "2RqUgmEgeByhUJzFPoYe5unkLYoh8HGmhDPu5nbQZSySREfj4YtqTanH8o9ewY8kVCT5X7bTfG2pufTrGX2X7VSS",
  "key28": "eW1yYnfDRGjRBVg1QB9nKPbEJwSttn7xJqGqXHGPhD3xM9iiLbp5yPx4gf6u8HyYoVwqqrXjcjDXEiKGQoxfacL",
  "key29": "5RwGSFEtncbX3bDSneGKE2mDv3CD87fhPPdMWGLW8qmhUdRGdFYLWr369adPxwJVQqXwGysYcrehjdQyL7i1bko7",
  "key30": "3xNANPetzCwPfGg8LL3oGrKgFauJ6smaqtjEkCcemtnHrFDhLDT4bHpabL2sou5bh5TzU2zqRWLkJYbJwR7n8Cxw",
  "key31": "8edoywtFDTn1TBP47qgCo3hBUfgtqKstPoWsXJ7HcCwZEJe9LzYfvcZQTFAhiiUxYDzBwjvPtDDiAgZN6jd2uf7",
  "key32": "5TfjyH9Wpown7EDFFK2zuxt5N79cNg8D4w1io6KPBfPGnkk3y5aXaUSrCq3aoM3TW13jj9xDiXBAqHFxbEjkwWtB",
  "key33": "3qsUizBmbyPYJhsBFLxz438KTRYgexAznED1ofussUCXspys2ah1sCig7w7jKiGdXY57nJ3CYvMH2ESWWJqXmCb1",
  "key34": "2t6dkWGNykxHU58XqqfJFRtXAYQpQsDchcApdbQ1x2Jtn8fb8B4ZEsvU52N3FUGBiZAYZVQTkdsBpeAy1ZLigYq5",
  "key35": "3howU427QkD1V9kPeLqGxTX3eFc8FNPTgNsDFdEvsJpHffggzJjCGTsjDbiQ25s1AbiV1wTvN7FGwqotcZUo3fqo",
  "key36": "5mhUchyUyAb143sb39HaaV4P8LvVphsPBMyHmJ49c446n7zwHxDMKmW7cT8gARXRpbA3BUkSk8P17NSScwQ78ZTT",
  "key37": "3u8V8Ji8cPFYAEmFzDJvdS5XGxCUBE9PiZzMznx3DEda6TunJhpvWA3jnHAktQRgGcXNbi2h7FTeCLvYh49xD6cA",
  "key38": "4x3i86R3VrdSR6X6z83dxpB3HCetsYwQiKYTqfTGehnLH23rFbETs3p5qXhsmPQXGSLGQwSgG5tbTMWdMNFy3EkV",
  "key39": "56TrRQDXWS8WzeMW2y7NRfbc89QuusNLdFfXx25yUcUJ13F8LffQKKuEUsZ1L2MJ5UcGagtj2b65ZDV5vxPtrdzf",
  "key40": "3s1ZZum1Nou765zFrAVZ2Gw555mrvi8eomeUos8MHsLc2kw7CTtN6hWacUrMrzX1BLtB9tty2SkroWvwP8siL1Js",
  "key41": "355gR5UkuRAUYUKCkYbtnmnuJsrKgb18QYxkmBcuuHCRBPAMwXYJHmKgGJjNys9SNN4gZwrtrvYJdXSi5Qj4PqBk",
  "key42": "3cFpQuJDzxFvLndKvPbtBaFF3V5DfBKzHoRLMNGXW4inMGhGDNBZ2LZxn9doFpQmQy1wGXtL7bhfKnMY1oEa6CtN",
  "key43": "2uTdgx4RKMoRUQQvhXWCW6vg6pL3MJEEqQ8QGEGo7pUbq5ixRtqBKD5TZkfchxAFFi4hLgoo4mAFZKUhCbNQmorT",
  "key44": "27nY8NEziVaXeaQj3zShDWR8KbRFE8PewDjkt9iNztYrQMfPGF7PQ4SF7NE5QRDNfWFwj8e2QQS5MHbw9ETRbt49",
  "key45": "2MY7MnRrsEz9DofCLFNuuXiMbsE4KBWSfrWbgDGrEvxmw2cdcorLTVd7k2L5jKU8HQi7RpgbxRcthJ15oFsfjLV4",
  "key46": "dR8XvARaxaFN49bk6c7gVYv35w1uTnESa4xMgtArHdGK2Cn2KdbkSWdv6Ku9qfhLTArXzpyk3iofoobgpviP2ZE"
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
