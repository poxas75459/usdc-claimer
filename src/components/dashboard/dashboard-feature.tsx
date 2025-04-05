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
    "3P8YwZ47ssmh6LGxyTNwKkwgkEFYkwuxmaA485ERqLzfZ4vry9zjZe6A3ZNsWfMXfQLaeGVjfkmU5mAvUVPtuSxt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3U8QJivyEy4qNRrALoh6UP5MBjE9mioAKD7XxW9f1pXDGcu4cZn1SywegzPhVkjaD4ZDwH8ppCBJEqFFL6oS26en",
  "key1": "666uZTaZMoeD1J3hZsdedHfXBA4bbMpnio6geAj1zXHpRQyw41V7kbxGdmUuWvDkaj4k5Du3DsdnaF2Gee497rvQ",
  "key2": "3sifTFkZLBF7jn3iXXdQwZXmZatjBkga9xtNRkgudzzzysh7uKbB9FuHtQhTgdcKR5VWHCcywnWnxpQyQm6GNu2s",
  "key3": "RG1uJxrQeEJLKtHHvSQ2wPRkrxvXCQGnpVdqper5f9BRND1dsoZThrKGwsx9dDMG7TVHgb1HdH7eTSN5Kupjapz",
  "key4": "4MvM3xvDRgCQRoc9UpurpEykb16JnJVAVmShRyA3m1GHD77UfgrwZsbRT4eAy8fWJxpk1Rmz16ceVh1N77vkQZCF",
  "key5": "HsmtySHN3AZb8vDTpbr73q9EXFFQyEiFmd4eXh5pmtHZqmKGdC5mZfZF4NGwb7dbshy53HaF4XXovSBBXG6QwqW",
  "key6": "pLvS4tMPz3WZU8BVTT8HhhhHqWVbCx7etsNA22h7gvEu4NKdRQEjvKZPGnQ41nXwqJdBfT4gNncLULgtW2t2Lo9",
  "key7": "5Vdw7hAyq8obaVGZaZ8EJ4Z1GyH98TN3og6MqvTzcc6dujkx1G24bhD5LqcgqBmkqegRfbKckKGpYikNXGGUDmAt",
  "key8": "2iQXvUFt7vQF34AFaqPn2VQpDc2sbhCZhqAzXBzRKhVhKDjirkAkvS9iiE7HHkQBNqzfSJou9DZPjnz8rMQGFvJf",
  "key9": "6J5FVW6jkYNAfNsjyKXkQe3zvvMEVy9cUUssSggDAWCbqBxHHCWsaWryfuW2H7NNarh5ubb3raT9aqBdfg9LpeR",
  "key10": "bdtwhJB7QKEFooHhyjnBRwp9ezqQt4UMnudxErxSk1UG7bPNs6H66qkeZ6HreVHGUSg9a6ZWgqP1pcERjSzzzdV",
  "key11": "4jQgAkuNUzheVtDcaH2bqqZ72qyWyRmNLwcjYvNMJRhHmNftVqBAucV3SqWA81gMfyFNAD4K25LwwRNC1MJRFdCJ",
  "key12": "2MCaFv91QyiidbbawJ2Qn5Q1WVZigvTw3DDyhRheymYceHxSGJW3fuV97aEXnBuSVJA3ySM9F16nHaA6JevBontS",
  "key13": "427PXpuFtBSUvXf8Pko3piiZ7Y1dEhVnKB9DonLCNA8zfWG8A2ivcZLQSenzmAPfastfaEjdm9MzL57jmums7YfY",
  "key14": "2iQqf9ByoBLZPGayewLcpjMmVCYJYZCq7QFhEH5zTVMA8wkayefcPKCuyc7oLgMhz3nuTetzfHQXcBi9ibGzaYDk",
  "key15": "3vZ8xK47FJVvJwKMjfG9sLkdKu4e3sEK5N6cdT4hHhyCZY6DAXafBq9x8F8LjUQQgmm87onuE6JTJgZ3HCADgEZv",
  "key16": "5SwZCfzSj7WL4K7NVnhZqXevzX4pJb4qfWbVDZExBDSZ7u2PFT5PLDnkGdgnq8MBHrme4gjvBTtmNiyTK9axFwpA",
  "key17": "3zwk8VSdPyQsTkB9gGdCb5ek4MukfZRy9ZmDVGDaSDdJ82jLjNapR4RNcvMyGhCxkmcjoEHLk5KeTnMBdgon5kUL",
  "key18": "4BYwesTrUUW2mGD6WLxz6ZKwdwujL9jy1D9PeS2WR8tM7oxh1Dpi1AGMi6bMoxRCb4ac5fexF4VxH7SDLHsST1nT",
  "key19": "4PgU9sxR21R5PWQSP46Bh4bEDkzGtkiPFJx5PzPSoJzauxLGKL6woQHo1sUn7i1WbURe1ngxx9Mt6BgC8nco8GpB",
  "key20": "5cUDHMkb8hdBZvVsDA7n9UwnDwucERSpCo7ZRAQ5UdVU3CuXofAWVLJodsPr8cvDDQVo2sYsdxmyWDfLDSJEFPSY",
  "key21": "3LCJt7fwiTh4FDpS4dci5VQrVZHW9GhyxrjbAqYEEmqf68K7gi1657hFxp55y5yuEiTQ1QCS1mPRNNHBf2nYqKQL",
  "key22": "25jvFrquaukQyYS9TkyLUCwetMyCWFRVvdngPg4WFYkSb6VBmWJ7zfsodT2oM6TZhyHew9V2J7inBJs6XzsiUYFq",
  "key23": "21t4E85q1gJSoWCkZHSQYg4tbsJ48NQduUTzNVcGkaxiCk5VRKq2iWMDdz7DPuHuXmScVwD17RvD9fGP9TdPPxeH",
  "key24": "6LnhB7VkBLxSNRthB7FCeUrVA4C7tKcN8om7vb6VcGzv327fLkGPjwShP4FkmgphJGgVJxrv4X5Re9xeqYL9Rpc",
  "key25": "5zRsky1KMjcJ67ija4c6g5MdcGRHhNdp8rBuWwzpone2Hwung3zz1xLdTkiZ8MtCGfASnjGXc6AuKvNMhWm7w6S4",
  "key26": "3ZGs437jdorey1jEQRryiyf4EWdbGRi4KQneWZVzzocTnQ5h6rocf4mPCricej5ft3cJ6MSEWEBstDqViRYo95L8",
  "key27": "2zru1mBAMKKHG9Verfb4XiDgJWRtg82YAVCBKHndcYLSvhCgCB16JLF1dLRYVD83YXieaLTnEb74pnRtfWFruUFo",
  "key28": "3W5LJRvkZzhFEE31DFgki9MeN2efkaZvtGskNaoj19ZdZxJ6JhSZAe5nX6MwJw6agnACSav2SJcrd11XzzLrTkRZ",
  "key29": "1K9mFg97RHYSn6V7itmFKifVVBBZ5xcXjKwLJ353GDmjiA6pzaqUptnVKUEgBhhwbjroYbHxqTWwxJRmjQv9ptT",
  "key30": "zASDGcjcHKjACuykN75KFRNi3W3HwCGU9VFegTuG38u6qEKkFrmGofwcJ3Vp6XCvE2Zk8Varph58vMvDzub4KjW",
  "key31": "5Y6ESdCwK6DGn4z1QcfjkyZMuYT7FC5iutGtstMoircgH1Xg6zUpSQ2rzymZXvCg6nawvDfcgkM93LUxsxsDhCai",
  "key32": "2jprqv9f3hH6bQCwpvhw7z9R3R9LAfLV8oCRDJQpN5TnuEUMaS1DNybwdD446NrVpgrbhhFHLNCvT5PoZa5o9G1f",
  "key33": "5M8LYBDSMYCbEUom9h2hb8ZQpueY1oFJHdmKG2XtCujTiUzCxuX61jEzjRaJSa23jGwxXdaK6BchTd7ng5kCcXjE",
  "key34": "XGFVAbCbhK91iHfUS1PbsF29wct5gSU11g6hTjgW8s6Vw4ur4u1CbAbWoMX5LKiDCAbtjFwDBKB6Y9pc3ph91kq",
  "key35": "5HwPG72pFAMRNyoLyEHHXMriErVekV2msAT2iZhyhaKpAoXY1qdDg33n6u7w4BfteyDm6T3fbU7mLqwLtDF47v8W",
  "key36": "5SFLohbXnwqeH44QiU9Sxr6AEBRyyyYEXbgbChb2efKbpUcdn8Do6bT3Q99uCEv7wfwDVywT6x1qvqxm1bp1ge8m",
  "key37": "4vu7eSSAKov7n3QyFb5ZzG8gnW2FmdQVt3iQxSTYRmmQhV6oupbahQWeSQqTtXYqnrs4G53aqibZ4r52SJkRkDwx",
  "key38": "TLoqcwKA9LLnyZopWyBizMrkV8xtavwok68LpEuMrCGDi2KRjr3GzUtm7U33bxTcjFpYHQPWVTW4nc5tmo5qMr2",
  "key39": "4h3XkSgWq2w7v6UBvgagwGBpkE41suNAb3pzDCpBeuzq18WZAAsF2FPzUQ5DZ2Y71ccM1kbJ9up6X8pzh1RsaVcc",
  "key40": "5cD7V6UufB2xrJ4RVMG9Fq5ScmFqM81sKJUHPCtszRZaxbNrMwmpUjcNr8BNKVEkLSi6sxRHx1h2eqDKosoQrb64",
  "key41": "4wyrz7JAgLt4p4jnxjejjBG6mp1TAWjCL7vVh2U72WMAR2EDathVzao1RD6hFHoR67MY4T6qUVNzk5KaoD4cHv23",
  "key42": "4gDN3N8cX2KVY769gM2UbjD6TSNfZUErCHbz1fsTVBCxktafwW7YvdwDikuDiPYRZaDQPkHsF74pdVpwiDM3GupK"
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
