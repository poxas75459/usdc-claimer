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
    "5Y5rPauGvCoKVdf6BxpM4dqwYb5KZoe22NbP1sAtzWwrpQ8j5tUrqEgmopEYhf8hYy2EkH3ehEsJqzPux8f97Htw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GBS4iiFwyDEFSqAb8fzi8jrs4r8QSwXAa2mmtsAo6eFaj2eRPXYHVzV1ZZ2p7TDaHsjD8vp114pbvqKDtRAi4A7",
  "key1": "4LVc14onjQz6gLt5Yv9peSLB7dn7Y1HxRX3LVqodSvvu85Zz6DnbM8urGhghep33AgpjDuCtVed1JNrb1Vsis52w",
  "key2": "3aHAkZHUe1M1Gb7Re8DfZEP7cUt8ff1Ti5zRktRhQVFsHpJxeB1CrcgN1Ffu8S1ZWpzThD3uAv17mhKgUc36ZdXi",
  "key3": "32EumWJC9wXXwdaiAkRmCzpzXxZxTeuosD1J7cwzqANhKsxFHoFi9pPLztajLWPVsG3BsdL4Kpwx7EvTa792MFRw",
  "key4": "Y7YUyvWdzhVnnDX5z3qArq9k5jfWEgsAH2ioBssGR9zp5LJjJVXRyYjG6HowMDeoQ2RvchLX6xbc1DtgQAoQrqV",
  "key5": "4YjXzvFGMoBXRFp2s4TYy5vvd1U7enQpDvUooKuCLMVEoK7fznGabWg2XejascoaVy2VwFEKc5uvaKD4jWzLakvJ",
  "key6": "5PoWGBL9tLkGz2CrWKD4dDEsiX2Q2NKkj8EeSxK88wdqtdtfEDUw2GFeE2g34qjV9a1b3AsPqrVwzRUazHQaH5rc",
  "key7": "4ocXjRQUFsuKUY8tQo5HfGogZdKDJkF5yoy5ZVYG8iqQR9LVSGJdnfFxcrkCPiE7rACbUxLTa84T4J3sqxi4jQz5",
  "key8": "WtsVuN73ebZ23yWBLJYAEw3e3K7M1N2xkQ76ahN6CXyK4DquWvukaxHAjWGPf5dmrEi7GYYA5CRYKhjEvnonXf5",
  "key9": "5x1HnP72ynxh6JjXVLXjDRPqURnM6nF8h9qSpf5aA2JJFSDasU2DUxEraeioe2eFhtVHGh18Fi7Ff8q1R1ZUxXZA",
  "key10": "4EZsAyyUbMhLvW9hLamoHFNdJfqdd8gQGY9qqNrD3c2yUkT7s9cEEEfnWjfCW45xqDtTknu5xnLyyfJvVJrFfNTi",
  "key11": "5H6h6jnyZ7AND16Ht2JgeFQGLFkxPPMnwnJPBaDhJrC3CXHhsxj7EyNKZS1rqZVe4fonYMyLKkJb46BVqXVofg8A",
  "key12": "4MG2LDRod8QYGDw2rMMXgfh5s3rUkt2b8C72kh2DhYG3hC1UYQ6dVjT71ANeMEWHLjr9Vs8DPYiuSsXREx7oiFLU",
  "key13": "5ZD76ZK32MbG3Yn2TLqygSTAdfHnYzQumG6EXJJqqhtcSQphz1JhEA7n4CB9wRvuvaYhE4Wy38YEFKnjDQnh4udX",
  "key14": "3jqBzmKneGnRio6xCBkCWeP72Paq6AFtcpNpEhcSb81vAwc1AQLgNFKyziV3dXLqWqw7A2KvHj44qbrsErdhyXFx",
  "key15": "J26M4NkHu1M4Ur6yzRAHod8B8EzJvJn2EKMcb7uj1o9iFwuGqk9arxg56EgPrJsPth5HVyk6WxvEKRdTZk9D6FV",
  "key16": "AoiFeH4DimDTBbTRCVCpeJzRvgC2SmwpwEJ9XXRpQ8MgnRbvyu3aHMQxmM6JmgJts99iopgLxyhHJX2YnY6r2yV",
  "key17": "3uUz5ZCZQv9jxqjjHfr2wWGqn2icipyxZTBPABN5kBbYDuW12Tzo6RjHjkp9GPQwndnV1zj4NuGDMwCKRTAVuY23",
  "key18": "ExhYYekdFfK2QzrA4efiexhZeygJaPzi15WV3rHDA5bcbcyQDWe1ysTMnSgjLRVN4DXfMKQ8Vrah7DKyf6ivuvR",
  "key19": "5rY8Z8yeVjbteeTebdkHib7gQbmtE1ywD9Gwrz93HqcTnzfvC6eRKDw6nPkVZnGvWcQJFiDeUNAVLxXSXHuBwdWc",
  "key20": "56A8WEKPkgV8PDDoNPLCeVmw6q5vigFLiRrQp3poQTLz3ABBTjD4w2t2d1rEGtyE3XbGsDjXCofWLixrM3xfr7hi",
  "key21": "27ycNzMakAoJjnpEkwjd2sg7qc3DHoqtrgDVy4kxSXYu6mgF8wrdtLFa5jUM6d4eRPqDPeR74UhBrLMX6aAkJKyd",
  "key22": "28xrAMV14NWnWGqpy4Vm81RBUU4xETmKFgdhAH7gNyiisR4ufszSg5hVVUTZaKZtPr7Wi1UmmTPxjbZAdGP3Zn1X",
  "key23": "3oAdm5AXRbmJk4gNWQjDeWzYB8e2tuhCWGd92Ze759GBRyt5y7WhmfJdch5Sh1mXrwYnNBz3zhD6vHQzkrPWNELs",
  "key24": "5VcbFwoLHyC1AZ6Trz5LyVZZfKzfdrBHh38c4oTjctcFcKr9jUrFzz7pG8CBZRMfVo9FsHuyJahvCCswLWKYuYBN",
  "key25": "3gPAogb1HXnntPgyFvQd5JJVqTX3Mp7Muv15dybqyXEwE82ko2bNm5vkTWZLSStJBcGi4Nspwh75jXj3ZjzKRJ9S",
  "key26": "3q75ZAykvosWFNtMMbKvpTbqXaFRTg7c1xC7LziL5w82PnxVWjNDReMhboNQUd519whU1D7pkc63KEzBjzWJvAXA",
  "key27": "2KUteNWKvRiFm5eQumCLS7idMC91P7dALozy622xZpPrd25M5zHX8zbtziK3yidxTeouRFdDKRZn4eVzEuBUcdmP",
  "key28": "4oDjRUvEBT4kqUQsDrWbDLWiBRAEX4h68WhbMVE5SZSKKcjqfWSXS8iXjZgzGjMt7CeH7K2TEmyseUuJiZ4fvvp8",
  "key29": "34KaGM3aSpCS29BeTJejzubqTX7HuXseEKxLrMsafirfRGFFWHfBBhQ51T8usjKaAy3XUwnshiPgXy8mY7W1zZUU",
  "key30": "tSYWaPTbURpvK1yZFbst1VMvsCmKqnbxTaTpPi73UE75ZE8zHzt8BM8568zYpCK7NMHmxHeHww7kPyan7DNfWwQ",
  "key31": "2UgHoQJ25nLk6SusivT8DECE5QYkUELm8hMPzo2AZnkkMaetpMZtRUziQ3PXNsAmkJMP9sc5RZP9wUz19LkfB3on",
  "key32": "4fxMp6S4bX2yra3qgttiz7y4ve7rQ6XKScf49SkfNN1Q7ULA3fjrT9PNivAjz1KjnDhUgkjWsT7aQb1NHEfzz6i9",
  "key33": "3EXLajt1tn3e1q7fMb8hgyWNqRePSsDFBYnpsRBHbUZmBow61owHi4n983DwVi5FJ6dHWPabKScN8hMVVvKume32",
  "key34": "2it2JKuYHuvrY6txEGXvPgBwnJWwDP6ohnA91DF2h3aBC76DWVbg9VtmJTyF1tY35irTJTFY1yF7Z6fG45QudNSS",
  "key35": "39DJAb6Jhey1MP7nW7TwUemjXUupUNWiYtDvcpjgkUCCPAPP1sB54xGwUG2UvEP7u2ornuZr54Gp57DyFgiezNh3",
  "key36": "2RsmGfTEU483wVyiijMmnH6qhBeDhN2yJWGjZXpBhN6xHoQzdqXzEchjzqNTqzHhW3cyT5u9MmS5H6TJMXz93uQa",
  "key37": "hsK2vHsaq8ReKyaZwJQFQxECwVSPGnSSPSSHJhsAPNkBNpKR4S4jvTgLMfJ3a82qc7RvdEcDEvnHLCZuTigqYsa",
  "key38": "2VJDFkxC9Uz9KFbjfXp3iRiLBwfiLbGRWQ99wwSszQjpsSQ8DxWdLUPAJeVBzEkUWZCZ9eUKoAuQ58r7zvxtwyoh",
  "key39": "P6XddxvuhN9oKz8ySL7ECaW7qqSqdmUurmhZbFkBGnGLi29CzC5Zvn3QDECF3nQ5tmmau3WMzdnU4RgbVsXycRX"
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
