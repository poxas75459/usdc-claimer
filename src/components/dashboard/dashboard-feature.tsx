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
    "5s7jaUp2utAqndBYqdfpP6KVTe2db87hGDfrUWfMq9wJtYByXfKDCXRhufDNZJ5bTrAnoAbHJ6N3cp9Q64DGp2C1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iQ54TQrYttTsaZn3vz74bJVsaFqMiye9qUNRjFk3CSn5WJdJXzqiatfPmMFZvjCzEvbuNHdt2mTpBGi5hQRk8MF",
  "key1": "syFACr7BgbWU2DQwdBxFuA4Pn8xkRLTT8hy3pycKcyHWs4mrLkyyC7Nxfvm5eGv8G7pP4BMdgTf3MCF7jt8gZr8",
  "key2": "YXGKcBqWfJCvuhxQq2s4GLEaJpVHJvcU3APUu1wxqfCXZXxurNN81MG7t5Crixq2ru8wKQQ4SHDCrJ4ZRTp2mzH",
  "key3": "gVJPFTF7h1cSWLBFyiQaEv4DuDDMHV1DqWvGKuTYo3GjvYFPeMcmp4e5HiWVGwvhdCACzdM2aKJGcWv4cULZ615",
  "key4": "4X1Vvrr2bdMdzA46sF6WmhNVwqQkK43fQhLdQirGqk1WYwvK3gofyN9y2qLqmymmcqYSj9BcTrGSiEtqsrvdgsrq",
  "key5": "5LFoAbBwTeH5wHj7M1MRE5eenMmrRBTLFpuQLgrWYf2Nscu9GzcEpsKP79YAiKvDdVSyRSCaK2RyWnF4rdyMmKfp",
  "key6": "336mBthSSSST9E25cVUrofUem3QgQWj23r4uaNdxagi4CCps9WA8YiQN391TUKXT5MEykB5yRMCzVfwRw6TQ2BjG",
  "key7": "5mtyNmwkmPNULe4TXi7cKPPEcJZfbZmUBkynQTuPTp37Fm7YZL6s3aRAVp8sPKKzuf2EsdehBWTT6vUgtx8EeNQx",
  "key8": "4QLppxaDbU6d7UA44pKqHMkegMdqHNoWL3MBckxcTCFpPUyBfRhiF4FJqtY4CsUYAw4edyZKJtjY9eGCSAd2tCA6",
  "key9": "3y8Qc3Vm4quRHhhzoa4hJ5pmQ12aGZWKQKojv691VvV9zsUW1jbxWuuYFEUKgM9i8UtQRrMXQvBAXjScEf89UDwY",
  "key10": "2xxUCZ2AEpBiqLfCVgFxwkJaMy1FtbRXzceKUy9m8Dj3TwsQro9Ud3c9HTFRKmkE7uzjSxWTcoz5kL9EngVjKHE2",
  "key11": "KzhUUdxobTh22gTvYJJBDmGZn8Y97BRZFkzoycACp3yBsjr7eRRhHhC3XsKSwManrkHaQbBRej6mjc25SazCMCr",
  "key12": "44amGoQoV8WHEN4Ar9vtofJbm4noN9xYVcBH99TtXULs7oEWA7og7XH6LCuqUL9YnvSHhJzqAdnsLsaFzCEo4waR",
  "key13": "2oUy4WMQpV4oM9XqMtpbMRD7cwUqqPjRvrdJSQF9Pf5kTNpufAXJgYSF24wgVd8i5TKA1F85ow1EZS1VGZ6VBozw",
  "key14": "4Ak6kTF7LxWJaBw6veu1m991on5mwZw9kbiobWtRmijxpdAPH9CHMjCWxL1o8vUBgu5Bm37PnkU6JQcT86bFrgum",
  "key15": "2hS42iEJdQeY6cXiVqjPd83pktVHTHAYxQo24N5WiWnJjjfQG1UBRS9TjmNqSYymXS36TUErvHwB6LkBiyaiCqg2",
  "key16": "2YvDcscS61mw7m7i6Z5AQa3tX9wsgEmue5AS5bRPmLJJHUgwT21YVrGVz4pYETSG5EpNTzWxYt82gv9sHRKv41c4",
  "key17": "rDTXhu4UuHXD2SEUjyoaJbnNxr5HpLbN8dQqMUrr8SqZqCnKZdDQsS3CAURBSxbzSAsuTdbMcGfFYpcJnZaxDFJ",
  "key18": "5VDD83s5SBn8Jh7SRJgfxMRA2qzzRNDHL3zZYTwLoDdzLfpSDMo99XZNXKsYuuiuSrbTLqqZx75JCunquaCKCaud",
  "key19": "3dPGPLcVWczTbBsgUG7ZACrq3QpdkVBj1FbiB6M2j1awxm6evnXW711HfygktNpm4AzRULYtQQpJ5r1dXHmc6J4G",
  "key20": "HrBWD9qUJ75NZYxtMz4z3nyP6NqTFFqNjL3sxWAYQHK1L77FmcUAM8Qotw6iZcsxb7vzqjBPMyZMikA7DKDXSy1",
  "key21": "5Hbd2mAZPahqoB9DockTReB1mfoTdf2dxD2KmRWqfpzAB5ZLjGw3GpVkHbjBeHoZqWJB8mE6eno5zpBbpveuaScw",
  "key22": "4WvYWN2Y1BnLMggM3R4tqMYPD83UjKa4Ms9Xrn15BMj6dddGpfLV28jheqSaN9ns2XririBrkRmwiisZfvMsQ3Yv",
  "key23": "3jnyV4v7bpyV9GQYZY6zMiiK6bU6ArNHgKcGH6LqyUG8Z3HvHDvJtAywbkDV97SDB3KqR78Wfae6sB8Zpo7HgjTG",
  "key24": "ScTfeGG9QwsW8nYC7QMkyL8EFndnPFees92MSVnt87JeLEsZY2c8thVkVsuCsS7FdN4iuyrsA5aJvtziKQtggBU",
  "key25": "2yAyXQCK5Rd4Yho4L56s8NSKnbLqJQkht2EzUcrTNm5LiYHoCH8Lu68VaRx8pFHTzFCWBAcR1eqek2ba3gUv3fKV",
  "key26": "4AfqPfff79EaEZzcMtxQ7L23drfcz7Mx8viU425L16oJAe4dXa2Y7s1aBTrwJsYjJT5WzzaGvdoxBjQJ9GqNWTem",
  "key27": "3h3KFQKhujryq6TV6RXREMwGvuCCdDJmLpHFFs7sexaDh7XpWZWh9oyhcNUEQJvguTxmYG3en476X59ctgo1vVpT",
  "key28": "389SdBV1CJeGA4npswr3jcEjSQyBJALtjfKWUvtC47LgxwT1W89yBwWFA5NJnT1fMEZAG3ytWmkeNbVTmV399p1f",
  "key29": "33bwwGNC3PU1hYxEwdFu7HqMHgEDPYF8WANWY2mbbBjbYA2mdThb3AWGeTyBLEKGantSz5ss3V5EUdnTfoLtat4e",
  "key30": "3T19KZHwr2oFo982iYPu3GBNm3SK9u4zDdCBWGAASr5ZRLdzTJPxWM8boawHMzDLSnGazhPsQ8Hzhrkt2kjssyAJ",
  "key31": "gcUV1CiokUaBVEmWtZvDvDHhxwLedhTytbk7iag98aHvAhTXyzviYiBcmUaooFcX6gonvUNoSQDHDP2hyu4UdaZ",
  "key32": "2MQaTMxWrE3bVuWeuXRcehUJE8GkNQapHmGwTLmGT9C1N57ukLQU3RVf6aGCJwRGKgJ3Zc63WgSpcqBTxmUBdG3i",
  "key33": "62YDNBsUFy9xpWgZGCn5WUWcGNrDFFJ6X8sfhsfXPCZoa9BNMPg316sFRKGFErfBFjBXbUXRKGycudGBvB1dyucM",
  "key34": "538EW2FBpLGGfak9puCVCopqE5AqxE4P2BidyLDSfxXTgxDnByqp85ddJkUU4XU8Lj3L9hf4JdDvaSSf81pEK61Z",
  "key35": "ff66cSu2moAWWyiUiDVJUTMWTufHewity222pLEgVvVxKXr3o2GmUKBcA6wScc2A5z8T2E5QehNvCtsjCuRqqdp",
  "key36": "63zWN13YTBSfUtv9GbMymrZEwuM99hrPR2CsNnE5ksF3oAZmYTWp6smmmKs5ToiMpj41GJn4tJVjVK6JQN9beLhE",
  "key37": "3qhtzec3mPJKmSgegXYWq6Hty9fJ5kqyHATLVTt3mmmDYGr9UsqrkzvKDkFxnSM27gG1VEHrkaEp1GHzCKNf7SbV",
  "key38": "4LoGcPTcB79n9FxhbHq4BfMJAVVXox5jXiQRneZsEW7nRVyBcoWLoPLYg5WaqTM6yET2gHV6z3mmKRZsYAqSBdge",
  "key39": "2ZdFCW4asmfc1YP1Zx8hU9Ru2a2ZbG9o6DL5Egg5FBF6B6aXLrjFmdKMSJhLSTgfGAr88y8AQyjFC5p6VSmCefV7",
  "key40": "2ADEZ9xmTwyQZtrXu37hbUz68h1V9MGcZwKEFSLkqqVwpLrKwSyHXFesqCNPENP6qR6JabZFSGRLCjMjcpkAwTr7"
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
