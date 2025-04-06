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
    "5o8xdiCWreFY8yMa96bpWWHhkGqayL2mCnZAfyp5duj8DmDdoEbkq4sYEmHXHAKP4LrWXqHRPmrHjwwzFaRkDCsC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VpPDBDA84X2DHy8GDrzHD6Mk2tpxCAM1fjUPiT4tMURy9x9QtH5YueA6piXDbRD7TxJfn5jURgk5YmtoJwonJLK",
  "key1": "45mh6ZEcxwgb6LaKB8KftbM586CFma9newuAZWKYsBgdz3mor5TUtmL5iNs2SNUFaSAw28ayVj7VvqaB6utxKH17",
  "key2": "64o4D4V6BwRpJVA5T6dVRRkAW5zE9k5MzSF16eoxt1tw6sGmZQgpUkX6Xu9hxVFJECa7p6LDLixkfF1NdyN4tCKM",
  "key3": "5ThA2tU3XKWRqexgBaczJzvVR4owLbpPENAUERAtnoTVD3WJ32v9d1YBwTbHrEPPcLrk6KGgEKxrwjw3EA9iYVgu",
  "key4": "8oFHzTvXRGpdufA4YnXDAtLMP3Q5kscJha2XA5nF6fr2g1gTwA9ySgcg1SuQbKbVzjQRfocj9J9jtwFGutQvSkg",
  "key5": "CMeNTFadCiDtLsxGuf91AgKo35hqG1Xaw2998sSy8SfcEQFfHkn1LL3Y2LxqCZrUdYUEefzDzUU5NbPLbEUQkKL",
  "key6": "28euqSjtb27Vdkc5DEoPAZo614CB2JYudvRXvLaMcvc8EePvFFJjQmaUsjirxai528pH9Hy7JJ17z7WvGR5cjWNd",
  "key7": "4RVPyzaF2n2ndjCGcwVc2sGMLkQR4QnhERj1fny2rnyWQHby61yoaSxV2TA4SQk2L4wBZYHBXgmy8u9haq7BZdeg",
  "key8": "2CwbzBoDhTMH7AoPpceRm2gRJituUZuJ4NmgULLCa47iEKAnyiwu8GYBFC7FQ2bTquhT24BXxELoGJQD9tjkgrPL",
  "key9": "4rbaNMm7Azrofpynthy4BZjwuVH46shk9C7mvVP6A7Sdoj1M6ba6BTtC7VREnUwGNrzGMFbvPMqNBihBYZHahgcp",
  "key10": "2wuV1zguXeUgiLFXjGPQNHmLfEzLf3hhTdZhSbZwjSjZEWC3hpadiL7gJmnqTNA6zn8a2B3Gz5DeM8n6b9bfsjbP",
  "key11": "3h5Ym48j3HWZCzh8guErnBiNZVSBQfWQDpQiVRp84rSu5cxyAyF7tsLih3T1eZVXDPaUnWmJ8CiQJeVaXRSnscKs",
  "key12": "5EMXQjGM35AmNNXDs1t5dK6YzYpsXo72rbt2D8PYmcfxEw6j4yMUxhhpDfoaRBpZXdh6VVzNC5YtArexrHBgU475",
  "key13": "5bk9AAemhioMs9MDsqioAFWjdZQcGASD9DkZuqLYHzLBsSZBSEqS7adwQT4x45DAF2EzyQgzGBtbenXnTBRHSJDv",
  "key14": "3AdctPFTtWJGEo2Pbnbvmqunss4s7UqDev3PgnMMn9DGRSZsyFfF4A87UbnUgK8833jy2NFmiGxzdjh65wZjmZAP",
  "key15": "5aAouwH71wkdpjcyAWdtUtVU1ymXG9W142KRWu14LsuhJkeH89iGUnpSbarZ2ZNZqqF1V3TCzy1Uon57b7chcbqf",
  "key16": "3CAvE7YKyz4Vj9eSWanUyJZ2N129pHAANDHeXHU2nrvCyCPyFLJSepwMVEfbiufGm5VLFNxpfBLs66FMtbuBn2kV",
  "key17": "4uSRbXvBydBRZ1feiZPZDMAqCJrnTXMo8GQGCTqjvRdrzXeCxrEoVbWudP8ctJ9F5JXR5hQ66uujhjymo8AUWaPD",
  "key18": "2QRhbDACS25qFbvHYZdG7ZRHKiyUTENVGV91Kz6ryewwWA2gFrAcAn7RUWnoLicqc5JgqU1XhKL7FP6hKwifc5KJ",
  "key19": "5SESLBdfncbU7VL3WMpnDyFJT7qxZDM2ddH8ak8iaVBDt8d412A3UtTFqQnYk52HWiaiHinbwt6oe6HWwjUMBVcj",
  "key20": "5u8StuiTcYbMtra56dwGHGTXWzWsYBFKBBmnn9unsMSmdKejusSvo7cydTtcjxxyEG7A9oDhvF4tex3z5dQ58Lgi",
  "key21": "2RdXX7RzV6ZQkBb5AxLMxzqaS126d134FSmLSyeh4xgSyVoqSuxo8dcQhe6KFkfRfWi1unWxeXXwFb6ESWLWQXs5",
  "key22": "AePakaWdf1N1A6qnz3nLF8Tfd98LXSLY5nCJQuAevK9KfaM4LmZ34BBssXeJghkmuenh2qGpjVBSsSTR1Mjvt88",
  "key23": "4ruBLE9Y3v9dAv4K6pL4rXU9Vfq2P1RskMPPcBCuFJWj3pk9mubnEZW9pjND8verNpuivt8u94RMrfuTV9m5EauB",
  "key24": "3knHCkREhmoHJV4f2fKe6AhPoz59t3yvyucdPr4ssFggH6GZKisvXo3m58XqzZpDEqtx8kfR6jLp4834weayCnJe",
  "key25": "3k5eQnCCqpsu3At9iCW4R7rXNVQuRiQNwqbeuS5E9AyzgfAMUhn9ve9sgo2Cuqiu64RBoyApfn1tRX9fUi9c4R23",
  "key26": "vX26d71CArQdAKZWBGAALqBU5zpJx9WbgsSPsbbY3vw5jxqjjrARYigREwME2KMdQ37WYwEFzr35XefD43T2Qbs",
  "key27": "594d1GBXBmii6KMWq5SUgWjkmesHNKwEx9QzEdr1QiXeui5QT9ecAupSmnmZQyYZhCFHD4N7YCUEE2L4zMvowEPK",
  "key28": "3EYqYSRjg7R1FRb1A1w2ss1kztYoiFgnfx9pvA6R1dbwiRhkY8ySQ7ATcdsY2qkifqua2itxE8vnwwNAyW3R2nb1",
  "key29": "2Jq3UMwzd6ymzABWuBZMJt8v28DaqS4XpjKn5LvAs33MiMp2tqEErzCgp62yzkaMmE9J1ei3ZDmUKNAo5Gyw6E6q",
  "key30": "5majFhP36V51rhmF86pjjM8JZs5uJQe6kCH2cuMH3tv1svAcDFZ5caidnWQPLt3U3cAmd68t57JCJrYV3CVGKkra",
  "key31": "3YmTWaoiuokoiXzhmL8igSJ2pN2CKeFvgvSQnDkbKUDMHnvrxYDjWe5DSmHzWKeALCm1gudEEXAq9EAxFtoTRs9n",
  "key32": "2hNgYnNTyoZfCkHMAwbY2J1LeJbCdfm7HQ2AAvHmKTdjzK3fio5kjGrf2yncixmRQNeWmrcxdpQhBLYFT5ka4V1G",
  "key33": "4KFHWP6mGU4BCD3PaX3m9u3bm5JKvoLZuLxoSeXkDfvps7Jc1nKfGJdHj1EcpkaTTDp3qJFv2sjYjFhhPkDi5Rug",
  "key34": "aeVt9CDYeZEKXg8ka6pkTptUX7RT6Pss6sEjmQUaUE4BjfaxfEJAPdNWNUoT9rzLaW7bXwwGY5AVBtgPiMEcfoC",
  "key35": "5jnX68E7HpQ4B7rnTnAJPFSjuwjhPrqsBWHX1oVKE5jtHCbZnw5YrvJk7V8cewkQm7adayjLY5swVMdLTvyNfj5Y",
  "key36": "2rVjLwktiWuRqdYRLN6N7qkkHaBQuq7SPXBBEsdq4jmnuo5QZ7vrYLYG1o9MUoPG7bgDRvc4B58my5iK4S6eF1Fy",
  "key37": "HPuFKJiwqbxMsKr4SF9gSVzYGHffLEJsB43oWkUkZm71W4mZPTsmSMCM6Rkg8Xw1KGdXnVhDiSi5egjwjxZEq6H",
  "key38": "5vtaJo2zGoCDGMiSh4HLP7kqeBrHZBDXhmiNKndg42MQHyjm7AJeq8n87iJsizcu7EB46d4913XFjNCcCaqKReqG",
  "key39": "2GYu3Dm1u6ycuaq2HPw7yhdgaT3P3u6xsz2HUk7wyL35QQY7wsc69LBQqr35bWm4CYVCYiHZi5yA1A5GF25sGagT",
  "key40": "58R7qrNk19M2UAu8uR4z27sAdoBGh5QBF61HCuXCGCNJFgn13rhbzouFQxHCowuPWAfSkgbnX2AqHgmaBNDRs5Gc"
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
