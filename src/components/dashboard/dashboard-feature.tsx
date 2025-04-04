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
    "42UkTF9M79XmsCjGPrFSrdmZdQj7Qh27ynxnEN2dT62ybk6prWj9CuYVfH3v3VRjNQ3vFjzid96DZANvVdmmmZNd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6193rLHM1pX7b5NWiEkaggdxfKT7yo31a6w1KQkJPweVUfKo3LDLz2v4yKTdMCHWXfbwX81UTCMWJyqSUkNujoWC",
  "key1": "245wQYLmu8uZVRsMk8sfpky2qmRdL9VsKdgbtuK8edDAkYaNjhRDBfuk7C85yoq8BUKZCyjaX9Uy6nZJuRM8c5CW",
  "key2": "4iDg5koQsKp7QbsjFCdBo2ZriBxzGWk4khu6y6TBkFZGuW5k891NG2K4bjfbnU456nHCF81gji5rjGcHw87gzp9a",
  "key3": "4YkbSvnaSrwPHv1ePohd9TvpzCgPMGai4ZwuzLXJBK1jXT97jWcNgd1Nc3QRHTBHaYrGaWPvVWBXovR4ScBu28DV",
  "key4": "4NNn3FWPrvz9VcVpBmGfRmePBnjkxkhZMAzRVBagt2VwzxLW1RbfMHB6iMeTF9eqKrRXHKWRN1H2ue5fuvjb8nmJ",
  "key5": "3Fe8vyosyKyhh3Sg9Xtopy2LQejsV2b3tYqPBYLvKpe2mwVxofc27DB2Wox2iFmonXjnDy9Lm6Pp1hHBFWfdKU7r",
  "key6": "4pfnfD3amff557kktLn49Qef5bJtiJXF5h9gDMsgMCpv4pVvndp7rEG6BFGWzz7p4tCnM6xrRBZooUkBnicZ5mFb",
  "key7": "yRaWJx3pJtiLmZJxDXRhJXqhqyaUmHNYM3SwGfjA8srFbRGy9Lwz4Q5v6jrSQFsggBagGPJrbhJTLQN7YKHGALT",
  "key8": "2BH9W4hBCA5HASVD9WLqWUGv2oq2kSw7pvUNZTXiJnfMK9qtY79YTcpa3kyRgrSHCXjWUoyyGtCQ34CmmRfEDQc3",
  "key9": "3whYiEsvgwZ1pwB6osNkeiuxba7fm33hTMLPTUuuCFwV615W5K6QQveuieLskr8D3ARQsZqdbgGMSpWW5phq4hqA",
  "key10": "5g7rCBHjgYHS1H8KMhWThT7U8REoWKu4dmZsgjmARFcLYjW99Yd6WBjLm332bVAKMqAzmv2CVV3JgycEkgwHeBRD",
  "key11": "3rrUNztEV1dDzWhU34T9EGf69sH2JBnnJA4m6BmeQRL55BXMDcpoFhGjK1W4rngZu3WMiCQM8hbZAy5K2iKD9Zoe",
  "key12": "5NuJ6YnsB1ciKEPJRshkbT5t62sfZfdKJ7stCRvATyvqiovsTCjSj8k4awrAUX12YFbwuujAEosMoCYW6j98RJZ6",
  "key13": "22CXuvmJHmW2qg6EoWPYJd1PPtCn4r5j65MemX5SWJHtJFXyq2eq4Wg3bTrppQoDHQgdC25vRqxJz2GBhEAWhhv2",
  "key14": "3g1vYGW7L9426NtyApQgcGgnRCXF5e4Ls4hyQtohfVWhyTLZqJ6sqoerwDaEdbP7KyGJnUJEvTQRUib89M7SD3Qk",
  "key15": "4iJ5tvvb3vVREJQnESU7cHtWDNGofgkaLXfVTyss1kY6RQBauhUmf8RUijEzQXom7Gnp8BedwZ4rTYUf1MXn6bga",
  "key16": "2CvngEALbdwBsRPiHMnCnHuH9PtBMNqaqkgf5aJP31cSygXVqWVEwuVB3F6AtQS7ju5Va2QtvArW14y9D29xRALb",
  "key17": "4Qmb4PGFemWYHUYizcvuDCkoDmd775qDvt1s2saspKRYFdim4UuH6JcjZ3h1wsbTvbbfUJNaGVjAsihz1D1Movn",
  "key18": "5BdanYtwnq3gAxvTfGggAmaSxbnQzAcHv53oWzW2K6qPXZjJ3bZcFToHe76S9Hu9a35futfCA7fS3rNRPnsTLwna",
  "key19": "1UTH8rgVkUTPkjfymZxK1fDpQ8zbj3LM1aT2esRM5o3L1w72YC8byURBXCWWVAsCyVVvt9uX9NvrsHzuVCRrV9j",
  "key20": "VJHLPT7Q8kxBuU8MPtpxCe9bkHKjv7Pp3kUQdWJ1CdPKJopLjG7ip1fv9oF3ygYokxmbmzpQM6uPL8yGR4UEWmA",
  "key21": "2Dwbv5uWNkbsx4uBNe83XmNP4DinxijWhvBCSqK1ZEqE19Y7CSpDmeiPh8x1fvBo4H2C6eq3T9UoExUNzPWT9s9f",
  "key22": "3NhjTB8jYRunBPDA1Ks6YmwepLLGkQ2Wh3SvV9ZMwttxdAPYe6tawypFFXvMFXmi8NWKy3hKWVyUwQGwbyaAefPh",
  "key23": "2NQokwjZTNGAF84vin5B6p9YRFRBK16fSNdt9mcNRKZctATCP3YWSanDgkUiAxGqqEPzkJHQKn1N2r6aDQVb3zzx",
  "key24": "dgfrKuFCmCNYBKJNERP5yeKaovtzjQJczu7hDYzeWcCtxo5pbDiDUMW2b3y5UdWpXBe5GVX383Pyfwm81tPXAEg",
  "key25": "2VZdkmpqo4J7mb93Z1EPoaGqzgJ2TvtPD3foV1wsRxYhG7HVvBgbEdV5vcAXwpywLv7td2q2tqP1cFkEmFgZTuhj",
  "key26": "2R2xv2XnNSQSBU14feZNfBxrx1nKR3sYzVnqZTAtUqgPfQsdHzZhyfp1oJBV9tgqBVkxcgkY2kwgHNhU2ynj8a7X",
  "key27": "3zGG8VFVeYkThi5eWYcFc35NphfuLo6mBz7QtKQBTdTNGL9N6zzb3Bg9qiHFokyoTTaJ2cfuP6irUhZFabfkXpAU",
  "key28": "2xubGtq1QXEp6PwDZK5Z6qNz1onyjSXV8wdsagkV5Yw5fj9CuKauxJjo6z3rngHh7yidruh8orpX5ebbEymzFhVC",
  "key29": "4mipGx2dGe1GCNhPWnpnDe92J3BAxTHkeN7N6fGVBosVuNiQSgjsHQfSpAPZcCvHYMosrR4qfbZhcV1NSQYHS7Di",
  "key30": "3CJpjXi9aehEu7ZxMF5FvkT1hxZ5jsNxb8NqvxMgdRNiHKD86NYNYUFuneREFV5as86VB8grKdbb78rJcS5WkHTC",
  "key31": "3Z4TuXf6oxKr6JXoiEC2UMQDq2urzQrcN7EbrwTAeDRXQjTARxACrg38YLtCVsXAggTjQM57FxBhiaUcbGUirPCa",
  "key32": "3ha7YvRStWip5pMxoYFmFs4dgJJypurkRVVsrLXzzbtGzmotPhbGJDg7WKjkg9nid8T5YBbRi29q6XQmJGecRfyF",
  "key33": "26d48EfCECR8xTWuPyFowSqRCJinrwS7kq3qTqhqncHNsqVvDQV1vqJZDA3TF2T7V64KN5X3DSoLG5Jh2uXpUpVH",
  "key34": "4f2HxUdjU5J7t88AHEbw75efEjWjNhr7tC21b5EtoYLm6WqNpkNaJzv634gpzmDpszqc18Ck3KvUuzWh3UFXrFSv",
  "key35": "4JGmEs4UpQxd7MttDzoPeFxWCBQpf9jkiqMmmCMHJNHM94bBWu37sYNshjHggYchHXatEMDhHtqYeEMVYduB6799",
  "key36": "43fhM7NdXgHMoAAeiCQ5GRFL7S65NLf47bBBNjKnKUZBmAnosD9ABng5vpqmPQdGn6GiCe8CLJxvfd9wvvhAQAsz",
  "key37": "2SGc1NFzJZrmgvKCMgV9FWEM3q482fxyogZGWRoCgBmpZ5YxTp32PMKWvniQLAhczqReqdZU95LyHF1nw34d1T1b",
  "key38": "5QUuxMCBwYbdeMRB3eC3FaXqCEtn29mg4TYbD3q31jot5N6r5naA8qZ87En6xFbmvyfHx58U3Bq3XCap8qNmHVH2",
  "key39": "4FQUJWDZh3GZX85a95uJvTitiE6LVP9z2qp1GqKGAMLWgveKu9Z7MMGkjxGT5zNAi5fthUxNvUkXnSja9b3GNvXu",
  "key40": "3fsQgSyZUnokjoinpuUDCqc5R5dJBFVeRcYsot668aZvqMJ1mqekVLxtt9xxtHXhRRrdq1wkQQFnMhv2TjovPxwB",
  "key41": "2UwBGjcbAE7ELwEhNkfdTxqH1ktxotz4UANqMQNhwVnfqYprRMtNc7g1prbZVz8LzyJJtowAwZXigbNXKegAqYfp",
  "key42": "3gjjkUj6Vv4JNajXsXZqbQM1EXKbuurd4xWMUjv6Yan1LonM4YLe5SFghe5FxNs9vizWxx5AaYfLJRsXBYqRvvQD"
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
