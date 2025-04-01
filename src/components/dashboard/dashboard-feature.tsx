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
    "3QjYueUvvVdPm7Z6g4Drbhos6dBu2j5q1aGHhKmJA25XahgP23bY1arDZekYrGoHuBLCuB87aQoqFQb9dHzG6iYW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oaduQn9EUCBMhHedVgCAnHbz93rsv4FN2bWMe4u8SHMUbKrMAA9iTC9tAGZSEjq6SgybFhfg22nuiC9CoT6vom7",
  "key1": "3mvLSqFMyBTBJ8VJFBjhsKnrpqz24my8UffcJtZfBXHRVBHiKMZbKHKDBkP3rEUHccuFoQLLiS2MPLrDovs3ReaP",
  "key2": "3ANVwidfwXgJn1waqTSwiuwbsssc6JXTKaRk5X7zSAZGZxULoExxCLK1XDFp82CJaUcv99YwZ8KH1VyDzwZc6kYE",
  "key3": "5gXfFgFJs9fFX7kVSWo82Fo9QE7oqQTeJSYTbrta5FmfpiPbvzXi6BYVGzHFJj8wmbycf8Y4CTdF2CpBExar3tUb",
  "key4": "2aeVoiBqjEreB8m9NcGXytKthXbVapYpGd8N9jd8i3K1yhLuWR6sAb2EQYiNKc9zEkkJnKUSgVwUZU3LmAHwvTMh",
  "key5": "5jXs6BPBg54vNK4kkUNqjHMJjooVvegaTR27LBiaycscAPKXSSXcE19WqfN8vixpUdntPX1eQkpHMnxNTX9ZvDLL",
  "key6": "4YVUfTmWWfKo4JDTmuSxYXi82d6u3Q3DEV5YgLgonXj2zw8EyAgXKR1FJTMXbt9Ti5r9W7nYPSKRKMiAVc1dw2SA",
  "key7": "4pfx7y1tCsXi31eCf84j3VDffqswNYW5QUmBfBigt6PXAvVH22AoXtXFQoFJ7TRFzSUqcT8tBjCGY4MT27FEMA32",
  "key8": "3LXoHog9LvkEuiqqQtbUgcBjYkJTPUDuJLCPe96aLkW3X4gdpva6nW7PGQ7RU4tt9H227YctLY48G7oAHFYajC3S",
  "key9": "EwENPfdkkqEXEBzDPrQRy9YAqeJjA5KuBW5nD2Rmd6D1eGFNsf7dZCA9JbYmfq6sqvunEyMXzgaToYAUFqZfUHV",
  "key10": "2Dpf97oXeYpfZXhaShQAzzjKDm4Kvb3sHrMh7zWm327Lm4zAqgdEkzUqb65eDxRfYgVupZuLrJaEi7XjJTVWxWWj",
  "key11": "3WjMSQJr7XhxxU3wiC7hxuH1WiK6dUSJ4FZBaJ4Ly4jo1THwXcEuwh3VVtA6vJKoBeeTRDXJZGXb6pM9cibqJaor",
  "key12": "6KeA9yS7zugzPZgkA2rmJCTBLUrYRPENRqcBAdP2HaawnNgAWddx17zEb794XXGqyJakjNZWMDYKBpxLZmVvaKy",
  "key13": "2pCQDX1XFczf8wxFCFYF6Mi9KTDohkN4kXjKT3VNg5EyyvdguJiC1CwNARGiQLzYEneGMtEfWrKaPsw23wXmd4gK",
  "key14": "31BzBricBMPjbHkts6pnmQpYARASg44SiFkxmXGcsiAbwgQaVFWZVLVekKybgopyv3CC8mo8Re8xThesZyb1NjgA",
  "key15": "4twaw8nVSHU4PWvgAcRYJCC1qQVv6Nbwmhg7giZA94FHrjioUKxtSnL1feRH4bEEZ1uPrGDsXM5gW3ViWp7wqMqZ",
  "key16": "4n4G9SdNqtqFmZsmtZECqCpGSHhSE8vP6jNwQ5DMScQcW61c2yr5f3dQAQucXU6oDqijZqwitKNfNPuURqzijnQL",
  "key17": "5Feh1Nr3LpY7HDkvoy35KKNmX54vqZCnQPUEBjp4ae21d2eL87rzJ2n9U9qLmRtNiVgoRKehM65Ur4ZNb5jd82Re",
  "key18": "WfjqEBRaRpBTZ35Qc6LcUQQETKRnVa9ujLn5a4DU8QXKy9oRcKAbNQpeMe5SFrHWTUob4DczQcc3N9Y3jvjrXoM",
  "key19": "9CDdEJ2CChdRfzNKqFF2Ao2LtAJmEQE4iJewVZDoT2Zv64F4Nzh4JeSZGLsAUX3DAdPVz34QwDSrfyuhvkWLLKB",
  "key20": "2JUUEkqJ6EYnvnEgrUxLt4sCLt7LeHQUbnoygvWsspWKkGDAJMETzxfNvPL59KngBrbmYGP1wHErjTWPAGNeevW4",
  "key21": "4YTrg8BbKN1Jxg4qUKhdNGg2v74TURTacwXDvExxwzc6pZKCYprAxKqAPzbw5hZr5uamvb25QJtRYYSFmhtN9MSe",
  "key22": "3BLS34pdxvHqnfeLRrLgjqW8wXdULEuYnFva3fJ9QxJ2s2fjTgj2tivX4o35BHuBwBaabv2CxtBpQ6SBNrpanSFG",
  "key23": "5tdn8XfcrUXQRCzDck4wpzCcEXWP4ELzqXvwcbTrsGf6dAhuZPkaKHWni97yTnVfPnzeXrDtHjNhnWzQWLyNdrtJ",
  "key24": "67Yq9wWTUEyGNFUwAhXuz46G3qXmveD3Q1VSuYoWy8RiEMp6oXsFRkjjHXnXerWhegBf5k9qJifAW3h57DHurscy",
  "key25": "59BVdSPsBU1oub8qrCoA98UoGJnGZVAwmdvR7S5haTDc5Br9NJv7jeUg8vHsHHyzMpHJJmaG83jM1aXfuF97JTJd",
  "key26": "5kYTdv6tW2tXvbAi5Zr9T6eyPHyE9HaUvKXdrdZi2h9QNXSg9Vuv8WWU3xWHdaXQZfhomFs7wHGVVmxky1XqBFZ9",
  "key27": "4vzfJFLz9TNyGyQRYDA7HgAFAB4MDLzmUHcbjdL6RsDCDzsCfWTGsHVVJ4stWxpdq1Ucufw7AwGY9kfjQSQBpRZb",
  "key28": "2vD3jnDj3ZA21RBtAxSCT7C3J4PG8yTuTJHV8qsgJ1SFM5RyT7MhNibzvubtquvUHKkmypGXhKYBnH9uvRnfYz1Q",
  "key29": "5qiM17fdYC4MyfstCRi4UjEvFp6mb3z8cSJ6Bh1BSvJT5QegLYPH4QCwrELeT9GbVSbK5fDwwU2jmgXPkfh22JoD",
  "key30": "3GXakSRkX6evUNHJAEntBp3vZcjZ1maKqo7GegWccAE7xfZJoRAxUxQCccK8VM7jg5P5dyz1mQnaqd7FcaSuiJAm",
  "key31": "5gEAeQ66Z64oRcdL5T1Ht1yBmT4kL4Pnro27K4M3gBhnnr7t328Fwn2fweMEw2SfTQsoJ8Q7JrXHhmKew7oYWePE",
  "key32": "3XSR2MSdCsrfS3MedpHrL91sULmKBGhPVXmpdEVh5oWgMCT3XkHMXrAw8zB5UBWXT9wZzZ2kWukkmSTW53Numnue",
  "key33": "3kJyY9XqU2g8k8XaLAEJafnJrEyHjiXSqt44FGDyQKBZ5ct4RND1Qm5kQuZZCs9tiUu5WvY7MJtWD7U9YbFrd24X",
  "key34": "5mzpQT2gCMATngNcJb3zxvyNisbkDo2YSrbospY7XzorQcC6Ewx4PRjXVyG1PEjwPTYFLPzAP4YU47PokZ9PteSQ",
  "key35": "5yoib1bWipDxhohNtR368pAP4VVjpgtsMdkNUZJ7ipUsyZVkssDWKpjyuxkWQHdVy1himHR4ZeaUhYkGXqvK9E1a",
  "key36": "2sRUgqmywtDMYEdatqsLaefC9wacW7acMm9oiHzU1KQy1RdebwLC4MRsYMN4bdaQkdy54K1Y7zobTDbBdNM7Uffc",
  "key37": "4R133xDR7VVPCq8byMjRTmJMPUhkKm21TCcbirbfRqmMfL1YLyoJzWt4eZarqWP1RbSoicTLP9Sqy9GJXTgiJhaW",
  "key38": "32MSvZMuWx4Lnk2PaEcmNfWV1Xv4iKyYAareAxPG3jiM8ZjCAGqGyM2Jcw3GFBd6r5Ed6mQNcodc6H9Zm11hzFgD",
  "key39": "51Ai6wHDi1nfHHFgNfGuh3NgEkHEwppfYAQ8B6ekox5cy7ssfnDUis1Gt5Sy6hoK95eFAiTQmfVLkY5v1USBKhmj",
  "key40": "2wwbFFUsvbrc46FfdYQZsVd8FTeQZ5QULPwMw6avNYRp3CeYG8323Wgn3XinPCivY9vkqDcq1GyBHE77CrnehE8q",
  "key41": "4AWHkSJSgm12isQrQfNbtYUVk3uQJSgqK4qVdcbdU2Mcjzw4hqKwPkzAr4fPUuMAVeoMrEuvufyom1Pbtn62Gv2e",
  "key42": "4qsPQswd3Z6i4D7dsoRS5zT9pAHFanUvVqdnseeQEryYRBK5vDAUxqwbbAvwx2oymoPbgwoZP1MrKySGrU5ksrMQ",
  "key43": "1iVVfBp2A2twZ2jEtGraTmwTt9Wg2PyqcpJGCdyMGTUV9MpmpSz9cpdJ2Tkqzaus5aHHg8AbgwCXvb1wqb37ngk",
  "key44": "2F6EEJix9FNXZKkKC8gH9Y4ATAfqjjfTJY8tTGFuWhpxi72psA5vf8fGgxAhf4ic6VRHRjUujJ2iBwFXUddoWjJj",
  "key45": "2RqWviaRP7EScXjQh89VCNEqejYRqrMPeTZttnxeynsiBymAZq4KeK9kBRLS5UB3hd6YbiCZBsnJ1iukhGoKsVVM",
  "key46": "412ga6rnsPRZinUpezi6LC3NsbSoJ9rLAv6wPTRayz27GuPsXN94NDYH695dkhLGpAaT54nFZG9HNyxN3qYg9MCD"
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
