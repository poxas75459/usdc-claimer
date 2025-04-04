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
    "3rQC3aC7ySdVYgZwKYErbBcQSw8vPWg2gmSchWoS41dsBCUNkt2Q1yN1semHV4tXSrRyZ2VaosHkAcMJHbEhhsWZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61qTi9d1QkeiUhfbWGc1nmsxmJoA7w7GxkqQwv2LyhzCAWsoQmhn2dXGTL9FDaWzaNVGGZZYst2RwHGNajB43GVQ",
  "key1": "5X7KH32Q7Y6kWJw2ditZzvUd6kw8yvtnPrJdcKsnthkFeZQqwrjLKs8HaUD2mvpLuvxgv3Zq4JFQYDSJ4pTDaRjQ",
  "key2": "3Cfjb3RYmxaLSqSN6KPav2gQagLRzfiCWpC9hgE4cXGzBMpFwuQsUa1eWezj7z5pFUHVVh11yu91CDovMnLYRqsP",
  "key3": "nu2F6QkzBkoz2T9barf9isLS2GDQVr782GnaDHA2ZGTNWEN8pCqD2DDejeQjNFeiYrrHfjG28av1qmjuU7G8yPj",
  "key4": "3TGQvqKSosTHiZ863SDpLvJDBomEmwkjPbQgrK9hufkot4dKZDBMLr7AUcD7R717LbGzmYUN6dMEkXwuYuCy9oFU",
  "key5": "27WmvKKQzkm6RGLSypXQkGYkRLTSRkDC87bnJyWQtTuTzynk8FpuKKVtWq6YWApM22YtiDauHNW5qmhymQaCrLZS",
  "key6": "35SKpUaWeMMCzoZTSUXYsa2fyrnhgm9S1sF9nsTx5qzdDXgrrGDgTfK75detDF4dbvY4ftahUagyEf6tyuSgJKMn",
  "key7": "5UT4EAAmLZGZXjmj1yWViYKrktdapMS7apzvf3SfJyKhg34cBZTDVYLTfhAJnUYq4nPAQpXX2PfXJCwTV7tfgSW",
  "key8": "3o8UEV8uynnGSgmmM7R4JnAZU39mdyxfgUs9WNhZsW6dxJzkimZj9xHxsVMLMcVjve9821txoaYVZbfNjGee4jcd",
  "key9": "4MDipATRmTaF7eadCixKRKp9rvTRopT748Ckp2SCGveXdVwypfbNJuqV8Mr2FRu94QSHodHwA7k9UVqW1dr2SuyX",
  "key10": "4CRyJQKbziQcXKpJDX5UJM3BQEaJNTehiW4MnPsQxoGsucuQpzsAGMSTfwmDr6LyGvriSWRD2STH8QaABykUhDGH",
  "key11": "2MjZwny5Y5RDRbCXm9g6UUrsCjprEgk1iw7Lchfb62Me6oUh4FSPSUyiYeVghbSx8jzoRMsUGhtpwVBKPomb1rEX",
  "key12": "U2hpG9FgENxa2c3byuhdKjG5hedm6BskirPwcLMSvjv8KCjJWxN6kQTuNf19L6ZQCrEdcakuawrq2TSJk4jknK7",
  "key13": "3gfixwPsRGzQP4q63rQqHWLtriLKT6XNTtt96RJnoWHi8NiPpiFVXMjQvHexRjgySq7CPNZJXTSjzbx22Hon2pFa",
  "key14": "64ccNQP6cCkFLUU444gU8R2fH2NCxjfDnpr4yYtvEGTfK9jyH1NLovrQuTNLGReYe8nHnJbFL1SHEDADxJWeMvjy",
  "key15": "37j4DPWKV3e8THP8t1S2DpCqUGxAUZvZnqktmnqFy8ng8bjSz7ZV6upRxVLb4hMEVExH75jeQiRNNjhq3WSyeZhb",
  "key16": "2K1XchbjN7u1LKC7wjoDbbudpaJoQtsmWWxUkG1emPxJgRf2rA5uoWxh12Eydy3mGwCDT9vzWbFFUVD5obn87QpS",
  "key17": "4qgJNZdkQiHHi5CAu4jgG6frLnQEh9RpFhis8hchu3iEMSh35hvaf8Re2ZeqRGsfCkMyvvtJVfFTe3w2UKTDnfYX",
  "key18": "53DvcKv919Lki3UVUb6PNjhxHsDd2EwECgRXsjwD4ifEHqdpCDKiXQSe9bSwawCQn3ihd215s1dWfmtncWU66H5N",
  "key19": "64dXeFbxPM7iS2pvUtDgMWy6dJ7TXqDw1pL2Jgs45dpYYH5LKNSdzxPqZShi9CpKnzB1JcLazTdthK5dEXV1FFNR",
  "key20": "2wvGaa7ufMDNWAeMZbd5czCQkoFHEbdD9uj3gzKeoMRMjs5DT8FduZptVJ5FbyhhVTNcaLRH6Dej5bZsRSMYTiBb",
  "key21": "3RxQ8ufN4cFK9trZX6eHg7weioRnW51LspUiFvV6mmiKiM1NTyarCHTemv6K3mrCg99qbPg3zHQmXXoBnYYWpiUS",
  "key22": "2B58JUgqbUk69fz8WSikQBPJVZX9kjYnp2cy3qmnHN6jqPZomr99Kf1ADXu4WWPev6cTeL6Vy39BMLZ3UovoBF5r",
  "key23": "5oBoHXmvqk8TULZuYLcnGnT2cx1HRYMDWYWKwNw3hs1KaPiFTpRZLtzUJLu44b5WsRZzF3tHDMQzke8wprDthWJi",
  "key24": "42RxypRqZazF2UBVMLgajNK43Z3zKdY4KnSDEP7pAGLB6dTdRm2zQdv6X4M9fFK9GiLBtj2Wg9w7XworcmNGaKeC",
  "key25": "5CULQbA4gS5wGKzqTrGVDYtuu9BKrdZvCjbVcj9jfRiAg772XARxJFvDdYKV61NzchLnjs4fxMMLFQqX1kep5TUu",
  "key26": "2FcKiYbpzHrBp46ChcBTepgCbMcUv11KXdWmvJYK8MhBmL5UvbxRXDj6HVb2pztU1y9yE7FQ4ijYN3gzwbQSsHc7",
  "key27": "5ckhmtvVke4MCt8hkqjPYJr8nrfvc6eoTn3Jsh5kv4q8LaWPvWY4Qc89CbGF9z6QFBfw3u34KryqsRqQQ8nCVQdQ",
  "key28": "5XsdzD57uiZuXL9bnMdr6GNahQg2ECbjcg7nqiVeCLVT1GUgFcGVJXHTVMQkUWM81UWpmkiZ2GWsKa8Dp17W4nzb",
  "key29": "49gHu1dxXcQR5GVcsQRzZ8CoBH5rLmkycwLmmtynbKpN4juU8aSRN7UGLqC6hQzAsyUMxY658FdvgmRkcD2rW6rr",
  "key30": "4meykGVB3Ym23oyQFuTVK5zCd32CXz15AT5in6ZcmF7zyMjPvotY4qM8JaKyrzSnKeBxfcJivWWc9ahbAYYjsYdG",
  "key31": "36hyXetbauPZfUvesbaVRE5xRFC9Tdg92VhzVakfgLAcsCST5YUrqzmCD5yz7uhxN6kakTozg8bXng8z7tTgnYNd",
  "key32": "5U6CwMNgVQP6hKsfnACrrUfwP8PQ5hJ1EFm6GysgaVFuESYr1qhcsjwAV61ohguZgn3FNS6cxYmMBmVpkyQPkixN",
  "key33": "3AisC395r4oQ1BhCmAN6NH5EJtU7mTCQECTo8KPmavgKQvDuVrY9ivXt1MQnkmUJZYqiEwWVmFyZKbJnK81vePCz",
  "key34": "25aNt63rmbNdoDireHy9hoVZDavyFP8JFHDUNV2R8kx5mMvjVkQJ1aZHL2QLEtf71jLU2BoReoMmCbDKx6zCEZ5j",
  "key35": "3st3wbtXYtQwNfUTToux72XSaRzwebKVjrKijYmBcsnca1v1SxbSne2uJ7hkzqYwaFMfCxQiTWV9ygsTfDuckugU",
  "key36": "4RMx9Hw628dM21HNVocBob7pWbcsbkCKtCYrPQ66UyPTBzTvJYbU2TA6Cc4z7enGeoadmw7J1j9K3bYWN5eDphgy",
  "key37": "1h79W4kNYkwgxAtdvHjkh783wCDvEW7avtcapyBKDQvhQYbm6sxtBbRBCjRgtezdTPqbJz1b25thVLqhPYVBCRm",
  "key38": "3kB4wCcg4zFQRChz65FqykVPqGvLGmrx9P8xeA9MSaCoU3HQ8xdkbwQboPCjeWwo6nRrRC3QkU6ncZ7Jwa1vmXz4",
  "key39": "4q3jxNFPRa1WSDCfgPjGEu5epgU2mNT5a7jdN2ULTUsbW4H5pcD1s2D1LhTupmBscCJ9Q5QJU9a4Gqufxms63jAc",
  "key40": "4QawSCeR4Vb9DFYA6jHMkQozvqfGsa46mA5TNRxA9EQ6hRbK5cuzRuD8gkt89v5rjUY7SacaxmZpKidyGKHUrrt8",
  "key41": "24QybfyshUqyM3dyuLg3k1RB9MJNrKZjtvVjvsrBtMVBuH1eFuFPfEeCzLgrU8v3R3yTqxfbpW29PGdHm23fanVR"
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
