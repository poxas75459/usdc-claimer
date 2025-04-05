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
    "2X61SFBV86ECQ3XnhnKfbbDujMUGUYcPc535Ed2otJhziFhPUvSzWZqSvysmGEkKy8diUBVEVjnEcDoyUPRjyLAf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Q55iK7M76viFW1WFxRxjkyXgfQgJzFRSQGnKHt3sPRw8rcJUAAcSzt3sGxe89rNuJMPDh3YYbaf4S2iGdVwkmL6",
  "key1": "24Qqnm4GFPmgDZsjqLZZnnb8m1MYRfMVE5zfgoip94T8Ep9M95aScT9981aP8vQ8wkCTgZjAMpLDGdowVxAnLpRU",
  "key2": "oJaLVu2mr3Vee3FY3yEvLvALoY6Ym2KavrvG5sGS7GvfNCy48mANDCwutRwEW4gVknKP7xGfHjiN3WtfnueWUjW",
  "key3": "5B2Y53Yc62QgkLyR1X1LEvjXm8Xz4hAnBZqgB4YXmnwKp4LjZ76SegU4rtoFg7en7piuaptUDXivc8pgB924EeJ5",
  "key4": "6PxaPZ4Vsyxu5nxwTJrtjeFjEdNuH7QieYSRzvnDLFg2RuY4LaSY3jAKeuEfbA3aPNPreV4RnriF5eprE8NKMp1",
  "key5": "5M5n612p4FAJXfKa9xsBkVEsTrmXBH53fi8MSyX3bbs62HxMyz32DybNmYCbbb1GoBt6pyg1BQGDthqaj7bNbTgr",
  "key6": "4ycqEUS8HV16GVU63uGxNDrJsKFcP2daf5rduuZs8C1bt3yPv87PHtAmTwKBXE4WoXqmPJ7jCny8jvw9gUk3rK7C",
  "key7": "3MtWEhJ2Grp9nHJzkVeMH2b44dgLsj2RpCWGvshLPZAXfUV6ngADs5fLG6qSpzHN9Z6bZ85h5p9DMAGHp3vkJgFA",
  "key8": "EmScReMS1Q1DDijMKsDtTF9jmVXuYtyJBVRFR6Qv2DLmDd2xJpkoSHKeE5wnnABdDPXVPf1aUZrEo1wdeEB19jf",
  "key9": "wpF7yCR6L5kMtYwFxwUbitz4Ks3psdhwzY3Djt3742FuJHkqBFnhSjHoJr5tdKAbL9bxqmGXVnLcjNNav9e87mV",
  "key10": "ZbVw7JBeZTr5yyJv9uaTtb3cYQwqvvzhFax9ecMZFBaZQLJMYYcFepMwQS6qEMTnC27kUgcpWceNiPEY8bftBUL",
  "key11": "4E682YGxvuxJikyTPf5MxBq6DWr4TsXqvUbikgdpgP6f7U1aempNupbKQ1yhVAaLKosZEqy6QEA4UQoHddo1rd5a",
  "key12": "5TNmLvLDC2DiJNWi9uRDLAHv71wgm2fPTXfdQPp6Mrkru2Y3i8uvTDtFHwa9XRCBBuRsGDJ9hcnSxCDAzb71BVdE",
  "key13": "4yr2m8MSA4WojgMtcwQaq7YUrDvywVMpuvhbKjLAehjLG4yKD8ZgVXAmoLJS6tfeu8fSCgzZcEhaE9RMWQ41xZrK",
  "key14": "RExyEBMGyMk1fHPHFUswcaEg14N7mL4DPosfDLhbVPYpMjw58UbJLCAP3xDQzSQPPcWQX9mxPpsgU2GTN1Fdpo4",
  "key15": "4RBWCxqWsqXjrZHgZgUuwpuHMsqpe15uyfg5CqYDuJbeL8apD7p3zbd7sEn5d9N4JBKvsJpwcqenGc7D8t4GoDUt",
  "key16": "2rLFkriyDrghkxmCoTL2DsXd31NJi6cCzZdvgaswPEEuWnvvdm5QCwynEu3FoRKvHjbh6jbLWrd1CParNqhWW9ch",
  "key17": "2J5VagXc3xWTJXoH3URGu14BwDRdZYpfenkXwJKv5zpjFRd37CYp9oLmru4Z7zKzLiYGWtEVX5fnAoyW9tZos3C3",
  "key18": "5dyKz2yk712BbQUpxyCHXMPDghpDpXyucHwEuDBEB3m13dvkJ3GdukMPWKfZifUPw4fN7yj7DvMKzRDJwxs8GneU",
  "key19": "X1ZcphhX64AxqmCMuDKbnKCrtSbiWBFhHkziFVu98HphamKHqtoLcxDdMEGKxeL76Rz3rWm524SfkaPYDiZ45wS",
  "key20": "42vdqGCUWDhw21G4Ddfky27u6AeF6uUNZAbNXn9keuKU9BgyMYjBPsUQpBEiy7d4XAB7js27V1kSm9oNJiMa23Jm",
  "key21": "4sRctLG65Do57TwLtDuvLnUJ8eke8Wv5L1korGGewc9pr9tgn5FHjxbuWsHT1Tb8UyvVDNMywVQ8eq46g6K41KhM",
  "key22": "5rSkRGAYyChPvdjCvwQezkdmB4uPjd9N9BKd6DAxLeKUjnoiJ4XmEWAfg4dA3FqbB3k5b11Z7gAcu29odtGttfnV",
  "key23": "2Cjg5RPkbKfeJKFz4uo8uLZcZC6oNrCXUJ97uzqK2gX4X7SbujgZu2DbFUUw76qhfH8ASJ7Bqam1GVvw9PWKvHjb",
  "key24": "WUkLtXe7W5B2S4TZqmDWVXvTBytMjEjoJnLepta6nP3vV84tPyqhVBf79mgrk928Rk887cvVwG5FrFhuE6rHrbc",
  "key25": "2z1A1h8puHHQAeXSnPS5SNfEUoxhcMvho1T1i6fvtTLwJGCLRbANumSqGuQKpxfVYmjtXg6rVMCh2TxrE6Y1FDjH",
  "key26": "2LvkSgxCE3PXv4PXcLJtyKaaZCPhqoq88DRijXpWvZaW8ZTrkCXpjL4bYx46CijG38emty7wSSYPkwDyaWKFcMzJ",
  "key27": "431qgexoWScPyt6utxzwhz3hgHrQDSx5PoYDkytU5o94VUb9r6ndLVp5wxKYYPxdMK5Y74Am6W8KZY6vpJr5RRX5",
  "key28": "3X77id96nf3TNnkXkvTmfN2TKBe4LbKXu4HRc7C6EYkfkLogwehfXNnHg8T825PLwPSLTmTW7s3u8ZMi4FPd54qa",
  "key29": "3scmke5oyeJcpmtjWzNn3ELveRRWoDoEW6jTT5NkrvKsKo1o3qXtPABsujCmrTYDFe5A3PwnmSFunfURBzQH6fth",
  "key30": "2sRdH5RjusQwQk6QKEPpc9Lqsv319y7DRwr9MVuhCkCHHLiv1jPjujscSVUohwnox3FqDW6VKzcRPEeExKPDpGzU",
  "key31": "PRz8Q4Fg12hDPH3RxdVvi3D7FDWoQNbg15PcogZahnRKjBRmwPatEYgCVACtUgy761SEV42gLTX7k582yeJGuDi",
  "key32": "TFyKj6aKEibaPUMUh6WxqpxQEYXeYgT35i5FWznrYA7Y3rzR4q5czbtyzA7HcE2S6rZe5mFpQ9uWY5TUMKcwkvY",
  "key33": "MpZRBcGfJc8rNygRgAAJZEmiRU6Gn5WsXjaMrXcNRtGS1NSxttY8nunG8Z3WSbJ5QzYsvGjT2rH8HKj6GWJ5jbL",
  "key34": "Z3GJpqD9nZP6rz3zf4cULgX1nh3X6Y4mPewYnDn7N3RLayrV7xf7ULmXu5urjcMjKBoxeeEGf3Upz9o4tR2F8XZ",
  "key35": "2xwEYQa8yvKDnPdcPL5LBuJR5jKtuN5KVfb3Hqb1iFdXYzp2w6LDGjbHyepfvqbtPPChYVJHqk2abzayQePZUyUf",
  "key36": "56AK8THd4qjLXLqoaDPhVxF9LnaVqaxkLx2zjBeti22W5pFeJ2s8dVnfYKNd3ALd9SviCGWyDe37o18JGnBEt2zT",
  "key37": "7Vx4RWB5xgs7Tzpevv5wWocUXxt9Pr4LqyWAYKtRNQW3hE3mDd4ZCmCFgskuC5XEi99ShCMMTWXqJHwNjEnVMw5",
  "key38": "4abNFTZJa22YhZ65LT4UD3jfhX6ifRqCZJuz6AXpwAxgA3wdeYrqdKNK5YT7ReXv2MvsnQnDxHnq3LshuMsap7CT",
  "key39": "581FJm6biFSXyNnVhhoCJGV9xmzLPjUoPGAbzGYHFYQ5hHuNJMVMDLzM7Vr9q36pWUXbsVpLXxLqPGCRh8T7e6AM"
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
