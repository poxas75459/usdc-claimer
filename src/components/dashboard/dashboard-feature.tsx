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
    "3YuotxcBmTMp4KPJPogHyqnyrCjo1rye91ZUEHZokESt3BVrWuMZwrt3VaxMWWvPpdnCmWxRBKLokif49ANm6rQQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QCgcrXDzVEonx1PGdHfbYZyRFoz5ZnKQfsQWD9ZboDzqL6a7uJZNSHn6sAcUQbohaeo6ofRhH3XGv1hr9jgRG7t",
  "key1": "2gEbQd7GQjY35qQ4wqzR825dco6Sz5qqQrh45GeHUDT1d3PSt3RpGaCDmhSrMytVsnyGiDaQEq3mT7GJHDZw7n18",
  "key2": "5HYSPrz7YaEjmEjvJdnb5zNtJkuNr1bA9yV8qxAurjqQbfp2Gucrg1qwScT6LpnauXTyniZc17USTu2Y11eoQJFw",
  "key3": "3yM9T5mZbBKYQtLZJbMCPJ9pMnhxeETdRUk3B1uEBGhtDzaJMNsCedofEuDWfCCwHNa17s2FwtLMsfidCa4fRUNo",
  "key4": "vcpKTqCSPHe8PDrgQTrUnUPqevpFU9rbgkzphZ7NEZov55VCWAuwWvNVGA984qPqjNVGfD2ssvQNjPzNQgkDKWd",
  "key5": "3ayotrstz4HZaykUWQLh9YSPLMBQAV6kDfdxjZZqDf1L6DVPocw4hRH4r2JbWYjeP2v2EuG9g9a28ozk2Rrpec2Z",
  "key6": "2He8X3zNrGV71e8Y5fdPugZwpEB8DZEvrhAZcwb4QgiSycmoPrANQDaromj1QBX15irKddKUXUyFjPTUxLv44d8",
  "key7": "4rjZBDr6PVr6C3ZpZz5GVpf8PPS1UzT8Hjnp8Yvm1q37A9C7s3pnHpo1TAm6Efwex7uVhrC5th3CkwZQRLgDNHYG",
  "key8": "Nz724ZaGGQpfS79s9kpaJZHyY6BprEpJcbCEuTNvTTY9369Qv3GTmBX9mAKCiJgcqG6XQfDX7CnqQDQV2Y1NVvR",
  "key9": "2EHn7s9XA9kdxvocWDiEWp1eaaGRQ4oRqgmDXMwq3KvfVzAy9w9Mk4LBp7qHzb24ninFDKpkyWa6c7M84Ga5DVQB",
  "key10": "ACsWunvE4gJFSY5DUnpV5YwKJA5eLw4S38r3fi8ymanhTFzH3r1CSJJLJiTcAjpd37uavmqXXm1rFHjwS9LcRYY",
  "key11": "5FxgYBqseFeMUrmytzUxptmc89DJpyLQ17m8r8uWQgTaaELLDhTVaaESaYifqJVCAG8UbypZoEwsah6wju2F8AeX",
  "key12": "Qr7PQJEshgCQkxGnBR9VnxwXxkmTTBVyyoouD5YPBuBVNENX6enPhXX9JSeUfPB6EsL99VT7XseqJThtAcCV9Qh",
  "key13": "WfxfxKPuULPLz9wmy5aGiGLamq13bZKdBWyry5Jb6BKcg7uJ48bnQmiEVjYRTwPMddoTXtqcEntsUHgV1XhVQzm",
  "key14": "259LuxYFYMwoM7Rxnv6bqp6JR67csLDNikMrX97Jrvw8q27cDHhSyoN3AcYgyeBPMe1bKUdgWEHSAVripA6TagMp",
  "key15": "5QQiEyTCu3fWDNKJn6FT6fZA6SUqMjAqgwU3r89je66A3JVAzP4UBimkahXtfhzfLzKy2PpTd13qHfFVqJF5Dqt",
  "key16": "4UEnRNgVSPCfrFQHPUuMkdhZRn3QA8G7ke63Mgg7CRvhsFFx6hbA8JFWzvx4W2FjnMgdHpQviyg6VqDd6AfboXGK",
  "key17": "3PMzG4JSexRhVTCqLcYWySiDmCfVbkwruZsNgb2MEPk6JdNZpbUtJKGrGd1u6eaK54KZYjLQLwaW3WPv4hdwKLUV",
  "key18": "45NJUvHt2UNcA96oyo2eWxAjDYrdDiizwuUt5d1s5SL2Liu9s6sqr52pSQV2eTZCArgStFMayGkvkaQB5ix3Ymjr",
  "key19": "jJAYM4pt9GaxF1Uf2zisbkPPhFv2W7hfN6rGFq2FKRQDDvdAj1MVFcw64RkuBETQZpP4JrSkDQQ71RyJpgeAMCM",
  "key20": "5isoo6V9iLtyeMu4D3uzhQn9HXYGnK4mN5ssX92qNr8RrbZemHqPZpU6KHcdewXUD1nKgYcKMBay3T8nPmrYvS4f",
  "key21": "4wGCEHLWqHiiZJH2mgTeLWZB45fFcoXEDEvqoyYyYUCpxJ9C5iQdvPDmT1d6nnsr127FBEaTs5eWkTtPgn8pJZaN",
  "key22": "2sLby9k8a52ZZoyMUsa29XeT96yQzbUPfcE5mudThrCd3Fqp1SFqMY5mQEca77X1Hs16Ew2oAVZBcp8LaPd7r2ZP",
  "key23": "4Dsjn2eum29iAiUiHJnrUx8KMcXz7i7hgeyNyAd5opEVPnJxCSEqwdfwYueP8Ax2nagw7vDNG5giDZz9tUTZA2PZ",
  "key24": "5dHmkVjHaCmMc7QHBpGqwq7JtCh9r4icbdufPPeBfUgrNAHfMrkTpyJJV5o1kjJmMK4RAvLnBhQoq6SpFUQ2xZ1R",
  "key25": "5Zx2mgAUykqYwBTwc3sAAYhyCTQsPJZfpEfz31UrJjJYVFbHp8NREkE8MQ15nP3zLT5bsd8HDLFFb2rkCqFXH72D",
  "key26": "5YiG2tKFHQnus9JGTodpiGeNhKftexA9VNcpvdvMv7ZgptVRW3NTZcjxHeMpMKvAUdnZJ3KQsJ3ySVRksfWJGckR",
  "key27": "4n8NusCRQGw64ngKjrE5iGXkEJN8kurqTQUdphwaPwvaMwkCabhGxBJdf4PfEV6HePaa98MHj6wtExF8CNStqw9k",
  "key28": "5n4HHuM4TyFHSXrLZ2r1Y5WJuktUVeHEavKT9yEYCHUeKcLaqkjxm1yuG9HGrv5BuxzDNhF9iFsD5Za7oPMpmuQU",
  "key29": "3SgJxDKc5W7VporQFoJf75tMm3pKWjC6jQauyvZuQoWXS5QFDHYyXxXPFx14d5RRj9AodG8Ri73cQGuH8yVGZweh",
  "key30": "5mL8dNExbkwofGS2ZhKUJafm4to6gvPrgnxMTp2ShLdEp7iBCjHgJFW2eFfGtQkdquyr9NgD2GZCLoiYxB7x47SN",
  "key31": "2oEonohqmdWWHHQ3zYiLQVDpEDWEfVRw5riaHQyJBDztnou6uXA5KCdqjnyVfMSTNnPxq2XPt6cQYJJxarBoKZ5",
  "key32": "2qVZbSDW1gFxk3DHvX56ZBqRoRguXGCALmZbJVZxCBsvxhNd6S6KZwiCEosW1YHKSZRG4TQxyNDiuhHcjW3n1X4o",
  "key33": "2XPWJfdTd1Hb55jW5EAT7cdqNeDjcgNp5ZYD3sjAscQ8EJAnUrwiRUYmTs4ApDXetP2Gc5w5Jx1FdJJAWSxdFHSA",
  "key34": "4ZftYBx6V7apchQXJ9L2JDNFz9Xnf7P8DvYS46nyHY9rMsKhzKWP7YVihFxb7UgPBgbHCDUsAw9UPoFBCeGeRBod",
  "key35": "4vkhmKyr3cGBHokpiCSYcd7C2za6yR9cwyeCpcon1icncGJ958zn5HuDBYLQ3diztvEo9Kkdi8dxL8AWdyUgZPw1",
  "key36": "45bkzVqsKDG34xY1Fj5Zsd63PQVpsx7ohsButpfXA4qtShBBMA9FbvkgjoWfSxHrxgddQGd9xRCf27GXsc2vQH9y",
  "key37": "2ChZmXvvV4EN3FGphnSpTtTWK6wZXTReNEXTeWnyiz1p9juZGLTnPsH39f9JS7uLMqnm9pomhYeShz9oYQVGC31t"
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
