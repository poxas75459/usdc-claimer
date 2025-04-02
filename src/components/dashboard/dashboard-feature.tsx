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
    "4L4pfo2UYoCHBfQcLRdu4VVxgzwqV9CNaoat4cmLenrdvnCePueU4urdgrFHYCeyNBLJFKKbnr9PYgZT5AWf61Z8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RmR6wFFeNyZbC3FmPZcb7kwY64caj7nhxoXXCt9QPXoAeAREdmg3fyDDTKmkQTSzCjCEW8BVZ7pzw7DdtceSFjV",
  "key1": "CBFYYWyxVtBFsRW8zSsaBSsCcAV5DxBQUg5GU8wZMisX9qkCVPtQD4HJkarFAAbBJxFhJfc4u1aqeJUnJ7Vt9gA",
  "key2": "3ecWqtFeHYZADiPFKfJpsetN9H6EA82JhSBimR3Ki4MnTk1YHFhgrjn63n1wYqEZ6C1Ris7TFwMa9cnKS1JiE4Rm",
  "key3": "37FTVhpwYsKn7QMsPTNUjXK4r5ywdkcq78GKzJY3tLXYwrY7Yh9LoaQ2PZfPp6xkvxYeJ2xL7UEzwNfv7Wb7pgaM",
  "key4": "WCcK1AqD45rTi4DuaQna8qniFHfpP7agVYhFZcbV3Ma9nMGYQ7ByJtncfGvqUNcf8AFHruzYDHdhLp1Jy86Ko8g",
  "key5": "5AMLzFSaeg5YoJVbv9KTzfBb3MTTYzqLpjjwouKWn2Hcq8CQnTeLaNLSxLA4v1YDiTwB3ssUS5735cyr3dDE4btD",
  "key6": "3ksTDdDVK7bhPuwDyvZUTrhV9HTsb8bwNeVW31Zcm4LTttKW2uHXhhbs3mHL6GXoPBe1wx8HWFatugE7xvWYsZ2C",
  "key7": "oJ7YAFpjPbWYLEE61DHExJktTeidKhJ33zr2xp8u4kcgyYL1KVpEAA1U5jjt6maCacmbajknrYobcQbnWEvPbyQ",
  "key8": "2txvdqhsr3fmnYP9LAvESZ7jCumyY3anUUzPRGYE5dk6RDihjhygZEZLGmsdCFtiyqH9hgssUAQMCaWr4LapU4rA",
  "key9": "62FqtmsYob5kjj7zrvXUAffxyRMkow2t5pAh67myVvWvxXUUWXTfYNd8SYQnigNpcbUY4Yd4EhEyJBBbfQ8q9n9h",
  "key10": "fytv8aeivRq9PPuUe1o738Zny4x1rHAKfETUXbuvWPd624rNJjkUhxd7V5wFLEjG7v35ThVp2ofx1pUNy654x6w",
  "key11": "3Ve8MmGAqBC7VUq18YrQVksmoL13JbGQqFGEawccbzizWSS6qVm3rhPC5rX8vh4xQovh59htzYQwSz82LSdFZtVn",
  "key12": "4NxWHDz3xk397YFFAbPqyHCA8M5gNDYGfw2EguZyyTigXT5aF3BWvq71YQUVvyyydTfja5TPVarcPAAEiu6ShVbC",
  "key13": "Ht4wZTMGpRBCQFuaPcVvtdkxGnMpjMUkxJ3GTiaRZqSBh6Djta62PnetD2KoGwgoo3dD2BRhoZExZJro1fufum5",
  "key14": "4cVepAF5Fyoj6MfwSgfLEV4zpfqQyE3DUjmb2qmQS7e8CksHpA2ZDZeBWLJW6Dh2RUjjTKzAT9Ly8HBLnKHp91Cz",
  "key15": "49cVzNKvgvKRB2t2bwvfCECdCQUuZpZkAYE6vs7X6pXSMG1gYLy7dduhQQxuA7477Gsj7FN5YikQks3D52p6h3gY",
  "key16": "4KW5u24DnVq4f8Ld9NYAX859QC7yTHu1ytDCSXr3xfKysAwbUyqLVQ7E2YbXaztmBB9JySrdCA7fvaggWMmUwdjc",
  "key17": "5Yj9xn7ByVKfv6LSqhAwx8eLCCDn1JnAPbU9LnwcN6TY14o818XiXCYDVFPAYypRadcLa5mKSpMJEhGiWq6JiK17",
  "key18": "2ird4onAeshCh2C8nCfKpZAUsUvdbQczumyj6sM4YpyH2Ufs9AxJT71fMjH3KFrrYuKW2LUckhRoZyeYKEKaDEM2",
  "key19": "63h5z9yjsprYa8TW9wbQpoeygTgoS8qpdsu1tDn6rw3Th18P12aFpmqzRBm3o6azjrDtcVQmbRYfdKrfDHnHW8pU",
  "key20": "66P9f55uwuY7bQaBCnNQp3DVJAPwT2V7ohkgx41zFUWNf1XoE3mnsBuamhCzCvUkrYjLefh9Sw1DFDJ72hqcmWmr",
  "key21": "2diAwoYPpAbSxMtFPRQyQGGALTC3rBnYXdrQS3xyBk92LefWd6Ku4bZ1JaZc8VZ4UwxRNitTYRhsim7U16cTsPxD",
  "key22": "24KPMV8qM72TpLBGq768mKkSS4zpxqFAVcKvaToCWPQo5yUVuN5dmK4RXfULa71Y1poDGrvW9gDMnNkh9MCUgcNA",
  "key23": "5a7r6TWtpcSXjXzhi28uDUG4pxFhNhBBc8KHP1DPdmFR9YcRiqBegKjTzchbw8KA27eQnsGRbaH2QciZdYk9KcsL",
  "key24": "4tkCeef7mHRQs9r1WeojZL4BHsuoFkxtvVAugYQrQMex15FqqTPAfHC7sBxBJ87REgYSN5vH7LHgUpxa5pCNXuXW",
  "key25": "4Bfc8AJ2tXNHgQneE36i83a8NMwQUMdPmYo7m2HGr4g8XZ4k58sUiEuMSoKs316fHkMx9qCZj7ZgAnZgefWGsGqJ",
  "key26": "5B6QcoWdYK1bk2VtxETCs2aibTLagUZsFKE9mtwkfnyFCu35aNTeM21UVkpxvK8Wjh922RzGtJAU3fnSa4QxZNxt",
  "key27": "48nRinFyeqAePfEfD9WCVEkgQUqxwp2UC6dNEbtHebbwSzFythz1gDGUUphJH3UxMqgbwxvJ5BV1PMXHoHCWDLJp",
  "key28": "ZZzcp4bNFX2fFKY7u5cYD42SN6YVE9BfUmtgYVZzULsjnbQtYZRnMPQu92LDaL3cqcu56hc5B52indvPyFwGcD7",
  "key29": "3j4UAsx5yX7gx4SMizbpbP6thQC5g51hJvXf4qUv6LqjPBXQhSD8NGys47vBZSjRmPUyTjKGNywocmxm4CnLiSzg",
  "key30": "3YKykYHE5wC9VBoj8JKC8NB2tRcuATP5F3NefBYvfWLTQXMJitSCDdxN6fpYtdJLh95L1M9jdf8JZWRaudrZyjUR",
  "key31": "3CnHtbtWuHFFud77RME2hE22yiPKRjKWrUhSi3g7xVuLuS7RiSVFUCZU86Lk3KejUjTYu6cg9BEptFzaDbrEHAP6",
  "key32": "46YJ24FWwdNieMjtjADBm85Vi1gwN5BxgjeMxThXwTyrXLpTZW3C8ihuzGH4DsPDJtUj6mn3GGuvJr4AbgvikXSN",
  "key33": "3Pf2cYs2ZDVESkVoAEbf33qrzEqPrqDrW65btmFLfLUdzkg9r5HPw52Gid5o1mGCPuWK75amNpc4NCohJssCP598",
  "key34": "4i9b9HsZnvv1xmTnd1joM3FAx8kqLKcub7YGdJbPznG8k32g3ySwDpBMo16jnBi5gX4RaFj2mhunGwgqBHNTgLEE",
  "key35": "bi9Xvf3MiH35JSmywB8aZCypdvDBtenHZcRDxchrRRnQyvy3fhQ7eKBDCkRELji3JW3EStsbZbZKddTWE5cfB2N",
  "key36": "N3WJv7N7YDUvVSwn4kAgHARPvW3hCoaoBZnvUZBNFCdj2bR1LZQJCzv2rEn9rYMEQwXZSDKytNU7sRGPCUMk9K7",
  "key37": "51LqLSEPmn3NznjrtMbpy41YRMwFg8GzdMMK49VggdHQrtFwsjAhsebxtwbjYhsuaCGSxV8K5qemmg5LtHp898BK"
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
