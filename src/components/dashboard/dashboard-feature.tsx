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
    "ZB3MiMXtUozW3SEkzTFhRXchWYPC7Hvb2sZgxN1Z8TtEWPpwtJiFeRDy8Zfj6WnN7KMCCSrF851FtxyDfr8hYsd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nNHu6SnRtstJ38L7BtuM2ojnVyPj6njysxd2QY4f8BCwhY1kDQ6QUKiHSZsVyxg89317CdkqWuYepTxSdE7FSXM",
  "key1": "2SdK3Azx8HuDtZ5t6nXu7JJF9R1iAjarFikMJP7i2wyDTVRpdT7dAT9mSVK6bj3EynUQVLzAJoeYSCvE4TeJQkTY",
  "key2": "4rNSy7Z58gi1r5smqVmuFBmg9NmuUcVwzwDXP34bdwioNXvyQmuTXi94hNKhUpaWRQSXT7Yds515JB6NZL7hqwA1",
  "key3": "25SwhA7qjD4HzhFSw1MHXa1eXZxXmnrDipnaHVYKKNgANRVc9hHVgoJMafzLTzJgntAMwtxzeCT6dWZCFnbHB2C7",
  "key4": "5iik6PTAt4JLgP3hWN4bgs6veSxMrr6gNJV9h5qsjEj1vYao6yE5vAvqLzDiDqn2hTs6oGmSbXRwbKNqkVAJHVoj",
  "key5": "34E5s9DfHzaMMqfvhW1KiKLTEQ72RjrYmBg63GBp34H2JWRqi3yT6RSfVvD9BnHVvvrNmkNEJvCyyNmqDJszLR8B",
  "key6": "4Q1TotRwgKVpfS3TichUvoW9W2XWcC8QnbrGTaHdrHGa8Spxr7Zutz6yyckKgqcm3WH4pqVgSpyHQntPBAN3oamx",
  "key7": "3tgXF13LHhCd1zbGkTUNew2fNi52NAHApsNm5SCCgxBLzY5R4AabzVPd4V8fgDiESjHgx1DYJokXEDKGXfMWMz6x",
  "key8": "7V3dwp3JLTgG2kpbRPndG64Y4NhPDPKov9ymY6HmJjPX1CVC7ydAJC3P1ZTeieVUykAy5HQAjp7owMvcVC7UDbz",
  "key9": "2hi2ifPBaQvyguUsBPRWovsahQRKgCmWTSNPLo1jJwdoH3B5vfPUEeAsZPTp14JRYpgmXPBff3WACLS57gYSfKWZ",
  "key10": "4SwaLHton483s1oZxAiUrsrt4v4H71CduHgGaePGaMA7rzt2hqEDk1mbGTvY4RTe5xBegtiHahPWwzcQ5ysZ7icN",
  "key11": "2fmaBrsEaWCbdjZKWf1JfU4h1mecnBVyfnqv4ykP3z6UdK2uzEbcw7hCgZym5BdGqGQPcfsCPV1GcLm6v4vuLVSV",
  "key12": "ALqFUzxWYobpjboVHfBQJscAEPEQA83TzhHBwRbLSQaEnAZbWnPH24N5UCzGmjyoVQSaauwPhq2mGnk8wvLhptY",
  "key13": "36kweCQZqyAq1NVcW5FX7qk6MrhnHkV28q22anW8jrxK1mE7SNfEj2EjRf8fyofhtRGJTzJQtqNy3tg9sP67mWzq",
  "key14": "4jZRXMATk642U337ThRmT7oTE9Dk9upesLceF3CHEn21qivy8nePo57L3arUZXVwpfVoT6w98oRuJVvRZczarm21",
  "key15": "476xYCU9UFvipTqmKDpdruCDnwgxgAgCxKgcUrSfv76kq75cxVahdTJRkpxcsdNJNXxwePwmZj4R3kFfxkY871EK",
  "key16": "dwKvNAAK63jgfVVe8a7k2merCqg4YS7abRdujk1vUFiXKjg6DQwMmqmxX137GQhQLgbCgzrMgJdt2K2hhgJCBBn",
  "key17": "21vzSmVwodtYQ4QXJT66LCUo4x3KG4x61Lkm1vVjhfyrYXvKxLrebHUswgGBTbNfnRR1217XuC1Xm9KMAGQy6BNM",
  "key18": "5GihnRQDyYbodYmossdfhJcsX4J4nyWrgJzkMP7TVrnZMnBTaKGx9GQBYEYNfxaAg3DeZA27cxdXwqmBpW2VDoP4",
  "key19": "3W1do16BiJEGECiK8jKjxviTeginAREUo53ahAShLDTCaDcjxxVL534cwX3FCnHgbAF8S1DJQ1PSKhhwAGwYYXja",
  "key20": "2P6oqkS4yadayQTWvXdspPgpLWhTaLchdo3yXFxjaBEKPnRz2n94e2JgwogKhMVwHZQ7hCADiqA8Aeyx61rFRFh",
  "key21": "3SxtCUo33bR4YYUrSyxPPXnot196m9D8jyAGbvXoZ3heMRAq1wpHh91yKpX4Rxe1iLKVFGxdFQEMPyLyVSKHbvuD",
  "key22": "nWEM98ZJ5RF8hDkKB6fN6yRqBRBw6SQhPxLxt78ZUAGF8wTqMsLT7WXuCHQHCxPc1uX18hsrFL3ymtq4mVshPjQ",
  "key23": "8GvHoC9GDK8hWSAavWRhc3CqrY4PJDMGP9s8z2wZffgtiToaN5sLBy3f6cFdKn9r6PNweAa4WTX11VdWW9Z8A6j",
  "key24": "4RnbmJCcvtGbkCsUjYD41fWJL7oFhbbRSUiXdPULjhxe8jwsr6o3Ks3FrxXAtKu61AdpTZB3qar6myPfR64f8SgB",
  "key25": "5y5LutihGEFnuCzAuA5MtAzAxFSzqVFzYxct1nMeaGvh3WY4Q9L1wpHJd7E7PqZgAxB1cSvBPSrvXnp7Rx4a8c8j",
  "key26": "YGY3ZRmCV7ikuvBdDgkZtdz2fWZAi8XqXLDZm9rd8bkY6mtuJzSWNKrzEPrfLpXGGhYdbvvxUDnBVesz2f53HWS",
  "key27": "3Mzc7FF4hv9T3EaopoRm3DQZaicSdmzoFDo5qZMFo3UTg8wtm7csu1R8Kjen3fu2b4MXMzDyJaJyFwCbgc7nVcQj",
  "key28": "4JkAdNz6gTvnAij7B22h2ygHjePk7k72vH3N8Uz2qrnSrAtFAu5xChm9V6UPbaNrrQjhDh5PeswnqU2h556ywfan",
  "key29": "4qdkYWs9jzCkUXChFE9SLGF2phcWksNsWXFnrnEqwA4ohQL1GPCzsMez5ngVWuGGerHMPHNXXopXnqDW8kN2RuB8",
  "key30": "5VKuNCp4a1rktQ7WidvAPCorCp3Q127LyYny3ahwdnHfvEge2YNK9kHRBq7w8immXRsjGMs2gGhDo3AgeLB4cz7u",
  "key31": "m2pYxdgATkz9Xpyes2Jk1utFGd8MMECv7Q9ZVxtD6EpsJdkMJoaZi5bfrL3ScUoXYbo3QRPWu5J49XvdaBiHSuD",
  "key32": "4BbdiyJmp29JaUA4tp97f4p5sxehczASE93E4bSG9UB9H17CSTEJxNqTZ473sKp2tqAD7AmUhM9JaQru9xkiePwH",
  "key33": "5YoWY2n7zJjfDAWd5P7n3yxnvUWe3nds3npwJKqRgYBiuJc4g3rBsocgWVUgXJ4ddy4yBHm6FDTKAUhfWMZsbNNd",
  "key34": "5JxFV3ifCmyfUBAy7MaVLMa7Ar6tbbLZQqNNWz8hrTS7qmpEWdNkt3sAqnmn9m4LRQPaiGnr8emSdsm1AXSiWiUR",
  "key35": "KXPDhwc6eVvjuTpx5PVA7MQygMK2FtCGhJZhwRprCuyB5xAqP6mDvQwn2JTHXwt5tpq3cWFBc9mrXhr6DT7b97M",
  "key36": "4Y7QJdSupcDm4csPQ5eM8bX4qr8fSZWC9YWVEh6kqbbHu1S7xw6ppJGmnaK3DvwAqrgDi2i98ASSp9sFEojkxLzF",
  "key37": "5fkQmnssRrpUWfQ4eAmKBCbAMijdd4mBZmsA2WXfGhCT39yhKnAo1d2YsPXMoEGfNgHMvwhM2z15WMK53N4v7hnX",
  "key38": "AZsZ9YEZKrdzVUrG5yJ8iBXdNJfwEzfLzFducT9F5dNzpvsNmmNdpNvScWY5WBAVaifmDZCYSxta8brVGJQdRCk",
  "key39": "3sQqpnWtF3LZeUJ1LbVDsFeNoVeUL64moZpiENsgfQcFt1qdZXEgtvPKDDV8WkCYGuLHd31LC6fnjFYmjBmG9fg5",
  "key40": "49AFccUqchAXW76UB5RGf2679zrpgBnJLLtPwrAZW5BVES64pLCAFucQRLayGrhnb82qmywbHJqhNBrxQV4fgbwJ",
  "key41": "hCVb6UcD4wqeSWcSVnEXpfBYeuKV4qUKtqztGuZzXuR8V2rVX1L75YEm8tDJ2J9BxcnMiqCKYmJwS6bUrJeAZTM",
  "key42": "4nJSapQVJrL1xMntLVi1UqD1FGTEo5QNmu5xmuyhWnG9koD5iyeiQD1SYJc5nrnwpsRuoPRvEigFs5DN9P1Kv7jR",
  "key43": "DuTqv7SLHnN7N1q5iqzxrPFgx6iAqKoAZZnLt1rfaTVfwNReLVjadWwG3kg4UrvxHSmZeV7jESLKRSjEYBQzqra",
  "key44": "4SN4aK2zSVD8x2cie9H1ZUwTGmr3dF7aJSqQEhACm4fT55HmXPLQ7N7Nkpm8gnhrSmM1tf2WMAdtb3BfETaVtfn",
  "key45": "2Z3JSrzK4G6URtFbeWHv2CMauzcYfimRkVcrp5Rhd4gpYD18YT2Ngpunh3smQbitJ9vEdWuphMbc4jXS2b3DMaw9",
  "key46": "5rkE4CKERXPcg9dKDuYp5Kz6pHo6bQtYQsdBxRNAGfTb4s3U51YKPPjimSh2gXPmxy7wpYzYuhiHX4NnqSkttAVP"
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
