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
    "PyedhRmYiz4RAKqzYRSsPN54R3TH1wbeWHjJpkm5jp673vYsqdPzPHLyXkmRMx4r34dZjN2kqJzWVBXzco2ogdw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Q4cG6ZSxSLLhYUy6YUxxxZfxzoWZBcPTUeJMYWduXoB4uisX3iL8X1jfyHFj4Mndkwy8opkKMz3F7QRo3hmo5W",
  "key1": "nnkn7iR7f8xweyXQtffjVCYRu65yuiN1j5wXmgTWgvPjHm15RQzM7d4sv62zuhb7vvWtz3BsKns2sAmsk4bV52B",
  "key2": "4deEoKFr5AQmBPBFNcoQXWTsdjBpdRnG1DfnZKx3dq57G1pFo6DbV77uMre6egP8gt5UV182zfnvbaTzWmJBT719",
  "key3": "4f2LZyM24g9LBjv4BjSEByYcJBGmvv8RSJ4U6Z9s3moZia6RCtjfbxKt4syGTzXNWopqqjEwswCpWG6Xq2EXqXJc",
  "key4": "5Y7QgqPZ6tCVdTNfd8E8mpbn7VSL2kEzRLmCBgiqxcqwEmWGmw8NSrUkPymmk1bxnK9d5XNBmjc8njVwX5vkmQXL",
  "key5": "3LZKGFk3RVioNcVpJJeVSP49vieHXjrBoT1ENeAzJENrWmMETTyahcm9xPAtLLB1R1TD9rDdKnkFr8jqJXfK71DT",
  "key6": "3apWacLinNudtFZmcz1CHEjD41ZZe5LozVTtg1Jd538xiymauhJ6DNQjWAoKdkzmM8ANx7QtVQTrcidZN4xvmdsq",
  "key7": "NrYSjyPzdmGdmF8d8gfJaH78nDxeDtPVZBjSgYyF8ZdsWKu1ZzY3oqR7yPKwRH39RsoRfPPDWftPFrWoBaMb6By",
  "key8": "3LoKLmWn2cUUxdTaDTLZ9BK1CM1b1LrVYW1UtYGw3WdzDYGwRLRrHG9XWYAg8y1hhBDWPZviGjn77J5Zj84i4Jc4",
  "key9": "57Aw2H7xUf2sa7Ad7h9kGV1pd1Hxe1Zvhfcbn4QRzw2E3scCipNEtj7PcZDbcuSCuS7QQ7FrZd5K4Q7egXJZLuXA",
  "key10": "5MwaWFnCfWpZAzMF8DjsuR2ZmigwARe7n9qY1ZSSGb75U769xeyjTuioxAX9pXVZV6UYgtG5xzYVK3JsFLdaPPUj",
  "key11": "25MqsPxBUhszmSovJocn8nhDpzNoFgqGBYJUMWSu5WCbQm9KdJBxtfcSa1pDoYZ5HBrEmNVnNnqQfDuTsymKqQCk",
  "key12": "3dHnVKAdQbRDNgGcwKmPRAenzXR18dXbmx56yLdaizJ5qFswgDcQBMVhuehq2ubj5NaS5ZM9YZ3hAkciWRi3Thdc",
  "key13": "27kTiPYNC1RABm6XVsw5cXwByLVVN5SqWqyZeaQeRPF69pmqW5UtY8JFEchZGZBffihxkYQu1ZaaGvEXAAHun6oJ",
  "key14": "3ERWoUJSWxaSPSs99ruRLqJGZEhZvKvD6xheQdAU19djPs6rRq5FhZLfEHuuGJz6cFaPFZjWD5HdRsKfnUwKSgPE",
  "key15": "3QZeTquRnLG9r6FJarxzqb3y3bQTyvy2PECNeD4zDaY5CTwy1J4hCpT2ek36xiT9jszvsWvbiwvKJQ4xssjSJMpY",
  "key16": "2piC3dPoCoSQQAouCCxfoZNXgAat4Kx8N9FexhXupZUy2omyCSn1TPj9519NXCc4CitptU3ejwLVKzqtX4LJWJqr",
  "key17": "2Fk31EFrEp69oXJS2iiPBU34aXKbzqoDd5PNhvqytjcWkNFnNpQY5zLi91y6SZYd5LwcseTbezPjYdscYurQXEmG",
  "key18": "d6JUcDaPD9m2W3GrkSguqbhiHtTsKVr7MeGpH8UNo1KhHz5suQBGgwvkoWhqYHdVCDn6tFbzTVMKHAqsqxF71TB",
  "key19": "3fpGaJ1ueoKHETqL8uJuNJa3u5d6FJ9N5hpTFGhwgfRpWcLYPfVwy4AgvR4E5vxW7yH4u2nGuSa4QXqc5CTBUswm",
  "key20": "3gzCa7XwLvr1pYYDfa28Dr53LVdKyEjDFDBuDPUWuq9rpGAxmmpXgAA7bW9WKRogtd1NJKnuJZU4aMnHJbWJHVnJ",
  "key21": "4rVMiAUD4BA6sZ1c5K74V3PCUWHsA8zH7n94Aztoy4aSLAhxhqaX6k1UmpfggUQh5NUYuFqbsb57YYt8wdXd5Z3G",
  "key22": "3JSrD7VoRniMPvbHjAdQfPzNkPseYc3XpkvYqXA9WUbC3nmKBJ4UPwVAZLq63uo3rPb5ag3K27yuEotBW1cKYvni",
  "key23": "4nXz9dW1fUXh9q2VCzRtZNtWoViJ8E6yZmtWQu98pjKGccKnk6T1qZEpEgotwdruBRq7g4WuMYaui3uemN9cBMui",
  "key24": "3HMjePUYiQdbyyzkkpQKAivVjTKndm2n3jW8X4a3v2wK8dpUwHCc7JhfefbjTRuexvgfHnycv9VYGMgEnYQhVK8",
  "key25": "44x2gnygdbKPPMURNo4GDYPxCGoRb7kHs1tCYypbQ7UurZZQzcVufLW3QRoMpvJ1n5N4sZPFwF2XnBkYzAaS7iF9",
  "key26": "5MfcVL1LG45U7HmoxyKN99jrSLjgsMUAek6aJgiZAjzk7JDbJ1swtxxn6jduYFZiPcSCvwWNNC99J6WtgKzfsShX",
  "key27": "3LJeMZAJ6L6xdyXY3PqMdqUbKWXroXL49kgZg1DAuw28D7CMcjs8xudvoZ26HgLFEuvtPM6YkXxt5X86gpXnYe74",
  "key28": "2E2ix3zZY6iCXtmj5ZbGzAdAp9MKE4y1Tou6QvT47RDYRX8ExFwnv75jm4t5hirsR9kQp4zX7XjENgNhUqLQ6s5R",
  "key29": "2v5DKFi1aZE9Gf6AzWPJkWVUFwDShmY34nXMNex2upFCeV7DGbg8Ukyt9JGRZBLTSXEgaZRJfgwj7qxLRLkh4L49",
  "key30": "2r35ZASR3iWuT7jwi3kgzL6KGnEe3A5SbBuCtBK9a1atmTHeeGLjoZLYDAHPRsqgTvkHxQUrPAeGJzHDtHcWM7Go",
  "key31": "5zbHoqeC3b9vfCmAx3BhTRzakV37EceMGbofhXJWJ1eXsCMhATfKari8dEsXGT1wUtQzYom5CpP6ANkDstK3qspz",
  "key32": "2HJJ9kcSp5ywkRdeFw3TnWzpY5kYkF8cCo3cA6YbL9A3d3k18YoBD4J6pmiZH5pFfaWvJ8arpM7C7fzKhbopHUtu",
  "key33": "2i2QmKCoAwkj9DeMvYqm865GEw9yUpD97CiDPEZYUkFGvnKHc49sbpQExFbwjmhsXnv7nf2tLQm8vh4AgMnzz9Sc",
  "key34": "67SsargjbCGAgHdtWUQgu19D9aYsAMnyyXXb3FVGHErzK84NxodNSLgot5mFSwD2KV49uKxmmFabRk6sTJFBQCs6",
  "key35": "MQ7kKNHpLsLPB7hT72ukV7pfirMfRQSNQV2BoqbH47S1UVua2vKfDE7VArxDZRpis1x4KGMo1d3B1udU25P3krv",
  "key36": "2eX1qqtY25cSWBrjQAqWSvmyW6Gf1URid72jaYFa57FYxkD52ygHeL8qqaSGLaDErLZTF1Km13QXM9f3LGTMEG68",
  "key37": "DuNkAFNSZTimFXB7k1ewCo2SisaF8mvfjjvB4jkAVqaJwaUXWtv3rXPhWFyjkNFTeFUyiubUox8QkNQtceUrYBg",
  "key38": "4moApJJM6rP73mUVSwTqwaM68o5dcZ8ZoudEUyi42988jP9eMEWkKTGVExyMCqVargksos8vY9aAN5iUzyEApZ7Y",
  "key39": "EYEoyKVtqRaX4w2Mad1yxXvMaWaoEXubNaaMfvHZSTcdgagsFdG6qBXZ6aHUzZNxVJoGWKjNyEVZu4gKR4Pmxfu",
  "key40": "5qqQ9zNAxyeSDYYZ3RKxWQ2LKgJWZ6R7grNLj8KAS21CiX36XJ2MGnLdWN8SVguMKCfcTK5ZBa329V4qkxn7p4nj",
  "key41": "5u4WoMcuZg7KCgkSM3ZesvcdG8AN7ZBTFS7Qaw45STxbuujZFmRBhi6mwRUtQUPwWxB3jRsTPxqHQ792RBiZPCDd",
  "key42": "5Dk9cZYXy63uxU9ci4BXaMoKj1g1aW69gX8H2rhLSZ4BdevjtZ1RbACN3TGR4Nhbz9asgNHcZ9eNTsASzWmWezyd",
  "key43": "3qhbHqbdump5EhqEhV4yoZD5WjbhHXWxYzAgg4Rp6WvY1eZnarcFzr6y4TgekPZRPJwrpjbXtStw59P8mdSTxjts",
  "key44": "smL1vPN5c8afpwRsw3ySP7egyoBkRxKKj2opcwdrLXtnMHJfU3wm6QAGeZ8Sp91znP4j7PnrpQVjsWBp3euQgX3",
  "key45": "3W8QeCdiytG6cfK2JXzbmXVrnDCUR8zNkwFx55UKLSddyVjfgmb627ZqE77Y8FTTeJF17tuS4ufETmEX4BADy5TQ"
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
