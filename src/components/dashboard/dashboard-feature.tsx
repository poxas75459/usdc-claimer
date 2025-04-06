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
    "3ApXi4WhNNZrbyAaV7p1jTD43fBEQiHdxJLxLWwok79PYep5SHDBaXPyUEaDJgY4ZYJKdRrWeHYyK7Wx2Mv9NNCS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51x5u1vqj5hFWLehUrNUBs6roaAVR45MDwF7v197mz9CYAzL8qn4rUTWNJSSg7JJZ5U11Haa1dPCJJDTUDaKYiSH",
  "key1": "2CSQuY637TsAKfaBbapkEBwUXN19RPQdAo1ThxeYRseNxS5c2YEWpHi6iwkooDsWoYm1N7KzUmopzpdrs1V3YrZY",
  "key2": "23NuKBfnN66Te1P64PZAAgCCpPrNkY3VoACxqaJVUfnrWRBWWjHBFLYDpW8xSd5mNYZRYKPcrTpM8NNPFRdgN7kU",
  "key3": "5TRdg1tMTYb5SzjMgqFMuTikTHGiUzBiJeCvTCwqFZGuU5v1h15M7KT7xJ2QeuPoeGR92HBS9oJVWf2HY2SX5Tt9",
  "key4": "2SLjCYkXQamwvTYNvBqhBm9TZV7MaDT7wmnrzSuTuytTntWZfNF3dxPDrVqWCJ316DzbhzJByzUo7gUWMtNWfkny",
  "key5": "2ZzsnYf1wyo8PfN7Ksvb1E2RyJqjTpAoaBxRUpYK6zQcCAN5zcKiiHKTqdfkEJBtFLF3DSL4tB4ce624vkzYAnRQ",
  "key6": "5dh986QgH7tsHxsdy8thuKLmZN5hJZq6ieHvufGgVf88mEs92QgUEkyzyNDbaJJXPcRgcBN67iv7Pe7SFUCv96zt",
  "key7": "2qXm5KLVeTFCzUtpRNpnjuD3YXquTiDkPCDiELt5gXEAgdyAkRuHUYYisVVZgH3mTuMopNN2162z4pz5jh9SgEti",
  "key8": "2iqogtWCcGuK3CjX8HTyBePjqTQh7m2bNVUM9YJnRFnzv6x9dV1ApHvyDDEcZ5gdbCMDSwn5xLWP2SstEY7uqdTJ",
  "key9": "QNc7yqFJ36KNXExtXZF4fa3zSWQZtuQrY8u43aHyK1QNtLTpg62Km3QczbhNZsTng1Cvt27Hpk5R4JD84sdxCR2",
  "key10": "4BfzBk32Lh96KhWq6EMP3LVJUUyMJUPGy3WSqCenzH9vkUeew3zditGnjh77SHpKJ5ToiyBYQ1BSsc6Rjprh7Eow",
  "key11": "5UysjMb4B5y2MRYeVzeKBy4gjKNjczYyP6ZGR1Eh5j5gHHahxNXDoAHCqraNUU82VrgAPQaPL2etdPshx4JQp2um",
  "key12": "43VZCDDveENf96xdKS1wxGu58J8n4r4MgKmqfE8ujp8g6x4L5N9jfeH4pgJbEL2BrzLGadBpUoVfbEkKB61fGYkG",
  "key13": "4mTf7LkRyRBTWccbMDALzxyMi21M7atJrZCXsP9x59ykAtzqCVEG1HAcrZuApk1ocFf4sg2hAaNRnDDaBJba1y3L",
  "key14": "3ofwaAy6LE6qoa4VBn3AYfKiDsZNPjs3o9aWs4vSoBixbeQR6xF7iAWpixBiQCCaRJJzVuXFbTVxdSXP4gSgRB6f",
  "key15": "4GGwEmXYrnbB8i4pDP2mzbDRh9tzKcLZ3vN3RVMQ1EVh99tXCxh8QwjyWwG7KXcxoBHapBgj32QepXeRvZaJbkLg",
  "key16": "53oAh2k2KuiXw2snV9mtywqNtR1GbWcQvG4LmFAGutk496cdBtBuhiu725hfPLysSEGQSMrkg23ueJ1SthjCktJB",
  "key17": "4gHyGL2i1DKcFZQZLzjozkW1dQFom5eYmLap35s1jNPLRkE6HRST7cdCgVZy6wJWq98MYHjcswKSWoGHxbeQjwXo",
  "key18": "3iW5APK925v7cmTggP936ySM9pzDkSx6TkUB56srmMAYbUYPL4i2Hv7q6f9wn8tCaip9LnXNrENikWcPktj1zE6u",
  "key19": "4ieSoHV98YcATeMjK7rZ5VWbAiPBWep8B32RX7pNYdHzNpKy9HakVfLfebbajYeiUXqmTHvQcXtwPMj7RYGyd2k9",
  "key20": "3uXrWr6kUuKbngRreKwJzncubCBhcCSf7GuUq52ubjkxk3xMKerDV6EZUGJVYbvsGX7ZJvdHp1MLTg7hMzux9kMM",
  "key21": "3tq9ZZgMz2Yb2rThPGzjfqipANqvVNwZS16m3nEYvW6pxgaKUc4J3jTCp5wh7c4P9oa7mizTiuxagbGrGgHe3qFV",
  "key22": "6628QXyEgs6vsERf1Y2zAQLEKwUqGegXf1qSRvnfgXfjdHCVM6wW1m5PAFhDsuQF3qyeEBz2f42SzBoN24JzJqvi",
  "key23": "2rzGQ7xxv79kQkcQ33pY23vXX7xf3VuMpSWoLxj32LU175nRjqvj65EkQFfj27Q37baos6njMcb8V5ViPQ5ZspCN",
  "key24": "5to5VaWvsW1f8J5PfYAMMuX4w3VqLNKB7vv8usB6c8CmS44jcNxjWgAtxQyC4EGKLSYpKJ2sfX9PXhjcx2jQgFrP",
  "key25": "39wZnsAeKYxGr3TKZsFMrKzEW42UZN9tXardNsGCLtBFdJyc15rToZSX6fP2UWbZHTDG5VjCKUBmEygqa8bNexdE",
  "key26": "56MBCwu4MhrE9hpojf3gtJhzd1bN8t9ode47qvSBcE6mW3dngAXrnNXPKpHRozLn8qmjCBn9aWWRPHVLhGdeZD9C",
  "key27": "27tR3jdoKSMtV3sRMvLfwRoxb6MUTGtveD8XcRqiKFRjrNJ5LGK2uhcRu9dtXQwFjXsPcKn4Sm6M19poRN2GcKK4",
  "key28": "28jJg2WUeYeqLkobcBF2JuFQcTjN2DFbcEDyGxvu65jEj54BFfJc5dYzYw75XQkSvZYDb86EnwLkCGfdYXK9R68X",
  "key29": "a83xN6WMFfPtwRyAD6N1QbFeYzy1cbAsqZ4SGYdTvKEmSr4E86mc35n2jcJUSZtVqRLU8vh3iUrco7uMsBNCo5Q",
  "key30": "2ocxRWV3cwqtkc3sYtxbmzCk4NrE5amKDUBBsZZtgdTnxkr2GeN9dTV7GkSYHXEbj42yJRWdDb8TS5ZJWEjQvheo",
  "key31": "5yQezWvoBojAR1wif5A3RyDw6cAyuEAAH6PURD6EESUzMRQqaqFTJ6LNTKrmraWRs2szi7X42yJD6tT21FjtKT1",
  "key32": "fjT9y751BJqwhRdJGysZpXCSuaVN9zTksa88oQ9QotTN2EZuoZyfx4eBJvtYfHR4nhFxm1wqomEPVfQVTwD1keD",
  "key33": "4JLjdzn9TJETstxUZsuFewkUKBPqYNQ7kH8azCuc4LS8MB3VcZzCw4BWGK2vrPn6jWih2MocC1pvzR4WUwPbH1PH",
  "key34": "3W18sBeH93R3TYoZdfKveVVagrV2bhUtjndE6p6CfEZVbnd77PKuhNJ3oYF2GLaT6AyHhNxbdtFWTUEj3roXDGQq",
  "key35": "4rx47bwhabnioTyADKw1bZ1myweE9zdBc8oWpjhAyzSWwGSxax1j6zAeHq9EWiiUWH2sRTwG4JPDUk7kccnSevH3",
  "key36": "UPK9KuMwRZjURYS4yLjGFfDStQHypLNPS84Vrh9TDqCD9qNupmQG5gzX6YkFygtzrTLDt47LttqtWibP9atcf8B",
  "key37": "4muZF5vVN8P4GMRYEbkbZVHQepZesq2c57GmHe5wMJcGu6rN1CXZ31Z4x6zRxsXpKJA7zi9TviNjWVTeXACqb9mk",
  "key38": "PXu2pXcDB1kDJYyaHtLQ4wq6hGFkLQQ4sYfdzzNARWF1vrGoo633t5M5uYfEfVAuiUZGKn7n2ERSskUgmXM4jjk",
  "key39": "2gv3vL4WfU3RuKUEp8GCkJqedRQZsCG3GjJxFyTHY8zxpwG4HrRg3jSCvEc4ZGZGo2oNfNQjAToAnwfREE7VM7nB",
  "key40": "4zEZmU5J1Fndzu1d494i1qbAAvwq28kwAiZ6RoGuwk7WuFDmUVXcQwKfMTLuwjdVMZUQWzim7PKPn2vXNsHKcuuL",
  "key41": "4vJ5v7wHC3qQjpkCPjgi7WnvZAhGgnC6BTgjGfNmAtUY9V2nFr64Kp6Zkmys3G9jo3mjf8my2sFzJr3YE5chwoTJ",
  "key42": "29FqQPYWgLdXp3FiWrcE1HJUcmFxGZWMtrZgDRFshHERo5tNbERzYX4pT153AfKfr4paCwMwENEFvKMBy2FXF8UC",
  "key43": "59P7z7fWgdWgNamn1j6j97ZKKSQLByq4u6UdXqu7yPCKaAVLckBXGaFCPeg9jHk1y5saAzaue34m61wYYGe2ZTFH",
  "key44": "3dh5DTGxKRRd4PxJhaFTpwRT5pE8zFPkg46Y3sDqvrEgDkY5LwTHJtYGynBw2HYmT9K81RY5i3W6KLuc8LNvVKtZ",
  "key45": "27BdbvrQNkvfYzwP2xgPb74tgJkTcyQXwudidjf7AY8nwSum446DGWamUVBTxrd9fkYp3HfuVfFTPUHcqUcNi7wg"
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
