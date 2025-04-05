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
    "4D5K5s7nZvdJ5YdbC5GfC516w3F6sxdauuQzNUbPCBSbkBcTvxdk2qgrg7i6qCizK6gBtvZDX9Qqq5HYPMTEKHTS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KJ497WQ7hK9eUDL1ztkEpS2HPtvRwTHqrBMbBhwTJZUgNoQsnzGFse4fAP2kWLoCFcbKLo1uk8ChZPGTQs347fM",
  "key1": "QTHv5GjMmQTx9MkQUKr3n1baLqiiJe33zn9zmyf1SbU6JBVHqNgrWSBmgJc32U5jtRB7jnYu7P4fkyjtoPKqAUJ",
  "key2": "3Z5HriJWKkMgZgPHfZW7cG6iqH3EMuBVqLaMqxDNajQ3dyqkE4sfrg6fb9GXBh7WjkbaLTbSauyg3GNBG8VCK51v",
  "key3": "3PXRiM5JkPHrPtyM5759D9HxRq3rwK35fhhSbED9ivBXKeRYXqNU2xNw8stfdZcUhbiz5ZoBFrvMEq3zL4xQqq8q",
  "key4": "4a4vVHZqXfBRQfVp3fzte4UdcWcEWNpVyshwJfJq241NxTAKVF6zcdVsAmp2ZWSgiU7dPPpdxnVeQ5VGbhti4hcq",
  "key5": "2Qz46UDRvRhQ2UUjKJX25TLfKLAv3fT3yN1dtqxq6xB7c1hv5mc2G6nEUiJTFATu3dJcsoVFwZq2fpm4ipvFR6Pp",
  "key6": "4A7ZtmGx5JVGALW8KnVeht8zC12y5erJcqZD9i7AWjaNxXG8RJWqz6mMChuiNk6tJaKvzafsDw5L3j5NWS18biQz",
  "key7": "58pfyJ8CVrDigsoiZwwRLjsvmZxiYm4fXQLL6qeoEtuNS8jLjotLnDrhNvfGANBejXTaEboPoQCy2fxrH9WAKxC",
  "key8": "zzQXuvuVpMD8aaAgxoNDNJKL7gC9GDvhaKwfZKBXjyz3pmZwX9SitSZ6Kjm5bXeSNpV4vcEgq5EHnmbm6mh7CEQ",
  "key9": "CoMsyie3U8UArxYnJjTmvAcXN5WNhL3UsuohGoNmREevTD4ybeqPHR5uW9YkG8jATaMQPFX6FG6GGMtRqpgbUTP",
  "key10": "5C3Nn5w8kQdHgJPHpr58hrjHB7aPv44mdohQoTtRjQDg4h5fgbyHpW67y86fVYJduE9SQMyDENUi4kPih36jHAqB",
  "key11": "3uVZhxpAyGrMw9sRfCoKqjJbfjiFJyS2YDtdGYuY3rXXxY7XbFxz61dqSUr7ReJCwGGgrUWgbx1ybHPd68LwCApb",
  "key12": "5ERJWxwWK1ay9TsFVGmA4g1PbUeJaebYHgjUwrNXS6XhjQczHxcJVp6q8gqEDEwnbTJECpGc6AJonyuUu4VjU9n9",
  "key13": "4Hks4tqWQcAMj575qTdazxmKFqnwFJZTFARKrKabMv96AS36uCQEjDE61n5adYy3mKPbCPkR5dfk29azdktsw1vb",
  "key14": "2Spce8pzyA2tAav4MjtN9dsa343Wkenwp47WKpDLLTKqY4KqHoPREhNpC5nVA86euWxfwQnVMEyGA6YADGCUuwET",
  "key15": "5FAEx681vU313MRJuKxLawinuSvJxJkbBXurJ2VcUhYHZ71t1zrB6bMzXzPZMpZApBkr7yiDR9pkgGyW7Q6ZiT87",
  "key16": "5vb4YKxEUHJMBpzgBQ4ciWNKTUr5uWyBmbsDLuZdnPL1MRHMhy7cVpgshRsRZzGBqYkfWDD27bfMfykR2SXcGYcw",
  "key17": "3Q9nwFfXYJ4W5uQ1NTCZQiKrKZxw86rpt1ePzq9PpgRkmjeu9iXJ4VrhBBLbtJULeYjFRzCsm2zXTzJP4uCKtJnU",
  "key18": "2aW9rBLpvW3FLjbAX9ws2jxsbh22PJee4GK52N2ASE1Dq9bC5oY36EyBqU9jWwovRRpmPhFYqv817cJYsQ5FzJEM",
  "key19": "5R1apHwZNZdbd4HCMJUztXji1rASHpLKrvmZgfqqnbdKgj2sQjk5CBarpxZ1DqyrM894e5adApZsW127xwuSerMe",
  "key20": "cBWAUeuWJZRuAfj8KwUgi9RN8EeuRaMJoYpmbmq7R7aLEo1PfXKiD22YvvXjvUn2gKBuCtUURW13nbHGk4i9jap",
  "key21": "2pDnSSYhyUQxroTqfGCJjn7k5TCfDnVC1SQfdP5fEMunrDe4cCer8TQKzwpxUE7wegzuLZnnjicTkPq1Lx8diQEM",
  "key22": "3ThmRVdjoCsX6wKddi7ruuYZ6fZVX7aJFCi5vtM8MipWfxc7c29FaxxfLQWJxNmMZ6FefVfeH4z6DzmAi2KMvvds",
  "key23": "5FHDxcFSaf6XpvJYywFnjNKCAQeFqBgyU9uwASmtjxNPXLoLEjZvrRQfLBMjo3ZWkGgr5qjjsjmJAepY32H3rgX4",
  "key24": "5w7cJPK2VDTYDp4iYdok5nWhe4cST7NStTBiFow7H4EUM9uKcxtaiGBNWAAbqqGnUoXp5gff6J11e37oJZbw9kyT",
  "key25": "4vBNwUe7ZrYNPpozw9v3paULGGaqyoAXQKA6YHL4monbzwiZsCNnWFs24Suv6ieNyzk2T65vJdVby5magfKcLCaq",
  "key26": "hYP5bohx1QephiwhZwbPskzSJAN49YamTud7uVYttJp8CfGr369jFA3zUxaR36GEX1Hw5pTEbvmsCCmCc4AVs8o",
  "key27": "36YzWC2eKtCPYopvYpBRhteXDXLvqbcQfSrgToyXEjRkB4VvH8qzJKPTu37u5WUnZqSLZEQJURtcThwLYfGExXGU",
  "key28": "4kZdFs1EubuTh8935FkQ4rnLNa9RUW9gWAC5FQMzAoTD8NZ3WHZPTbgxjfvE9qh4JQfK9ZqzNTstRtoqhdVFJfTK",
  "key29": "4NmcrnqvMnfNHP8pDvLubt5GLhufWQqQyqmKWUosBiG6cyjq1h72Z5U9phC9Pr9xmpnCD6Lih5AUZbT7sTGfuEof",
  "key30": "4P2G9yY5AkHaog6tnWEgSyxGQsXgkK2RrCtL81Kt1ugPBYWwyDEX6jTGeaFtPsbSDXbmF22r8K9EcGhMjbJsaVAz",
  "key31": "4J8t6hFY7P4CgnMEXvqMa2f8oCN2Rr7eMV1nMp9aLca92NkvAx5qC3JkqGXJdNC9tnuNRtU8wuhEeQNZUFhi4huc",
  "key32": "4wvjn8vU9kfq6uKjxoMJWphRjwuRs58Dy4RwLj62Y6pqrCahDUWWAgv6JLJra4K7K7WZvow2tStsjQ5MSB4HuVJZ",
  "key33": "4BPUgVgxH32ThFiCxanN1RZq4cWfecjuMPhRNuFcZoNh3WGXvdh252CcN2WsnpZBk1nARc7VptgHhEYT87BDDCry",
  "key34": "YFqTDXVsZSkGY4jHN3MJXeum4sZtSeoQoc933wFDwex5HwFzymebtBzHM9wZX1xxPrsrB7boPGZvwfYz3xpm1BR",
  "key35": "21GFvnhDhziEXXhHiHbBGzL56r4NLxSQQSWxijpWU2nJBLpjUYp17FGmMUMg4UdWz8Yjk755G99AFJCs7sAZ96ZX",
  "key36": "tSXVfJvArbYKjnncMjAEnmXjWWnfdHqf3iP7y6E8pK74AmaiYGpvnq6E35KEVnUmWdTNSCciFaDCppX5r2U413i",
  "key37": "26VEJL6HoE9Vvvu3AvRWxknEXXvK1C8gNpp7SLXNwD2xvSNL6g118jHzcKbuHw3b8cWnfhfw4fsFBgzVW3Qp4i8F",
  "key38": "2RLLEXJ6gekedLovizgX5V1sgsZ45btVNPvTdjW7K16kQA7gwJKynGYBX9NtWV1bCJVtb5n2e8WuGvy1zQPkboac",
  "key39": "3BxxUvNew42hZcX6WGh8cGMCnriYkfynhkGh5w3x3EZXSginvQGHaamFL2Su7LpRzpvuQXfsHWHEcPPkHhYpb4iN",
  "key40": "3CaRoKXTW3aEphDeCWmZT1H7kwv18xZ78KPxxxeubxx14TacCW2ayP6fUr1xwWQ16m9YQv34bQTFKwajDDKyUE67",
  "key41": "3PLZ3oioaR6mLduMZEXVZbCaXjKf9mgkXUmo2WasFQJHFm5rvgAEsS86otaVcCrUgctQZCRS6nFSAmPUTENa7Nsu",
  "key42": "4FvTcE5N9dQxxRQTz7Y716gx2ZaaEkSyD3aSrXRE9GUMag3V74T6dk1tKFSS8xeSujoJKjoLTrcfKuRTucHQ5fy3",
  "key43": "65FJwf3SC92SkYw8EvQYzzSzS1YDKyHVzKXFLmX7eKGFmh2iXYRYrBWYCgAkzwnM9waMP8PUjkAVsjBs3zBBcXfe",
  "key44": "eN8WSram2ThwCCQAT1pxkkSmb7jeJX2QKrGcjFon3xiJmcyrbddK7nDmWKHji2EP97U7DzaX13nSS6yBsZrorAW"
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
