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
    "5vELfQTfESadNy39Bo1WBLWbc88QthRnLzt4DN3JUHW4GDMrwZYC2iEeXdSaG4fxuxUZwhWnJy2viZPQQDRz9Bfc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oZV1FTjkY4tutSY86F3NDMVMNsvcGx96WQxDqypimpZhLTCu93SYFMB2RC3gSSrrZE5cADbSpoVNu4P8mGsd6kq",
  "key1": "5pAMZLziv5MjAPTfXfKtikxCJsvtN2hxXiiUVCzQFYa1ryyC8LQqGvMSSVe29RjQKAhgkdWrUyAHpnwkQdT7M8xL",
  "key2": "aqMVmfXvrSfR9FGZzj3DL3VKrghogyxVYHK5zXxuPtL8V4HiuUiedDshUet8fwve1LXVCjxxHVaDyjDfyK4EDie",
  "key3": "2see1sxQ5p3mPU3rjg4cZZh4nuceEBbS2J4e1mjeMnFgMW9apzVt7EYn7uSxHB5yGAsZehNRFoHAK8oxcXa5ZzTy",
  "key4": "32sVG1jReHxZnssPFM7B1zf6Q1abeSiY9vKTDoNSE2yeSepFRrACBsPp57wtjTRbDts8Uww3RWhZWLVPfbDSTkYi",
  "key5": "55jUVntzKZz94QrzLidDnd8m7smq2eFPAjPN6E2s9cdwA1D6twETQ3qAtBKnHjiLkXhWk9KuVyUcbGxFdo7qMHnt",
  "key6": "26hBbUhrXU23Ab6WFSSaB34jPAZ4Jubfx26sqZH5E3vKx5mKT7fk3Vi27GwoTcbowUwcQXCX5gbrLiR2CgEeeGBB",
  "key7": "3i2PvLcznXzRU7UDewNqJHUKSgUZNzsfdVRfaPJF3BwRDAYvRa396AyUptEPR1p4vKNapNzj9hqMbsvVuWA7bmv3",
  "key8": "5eopvwSPD3db6c53DMY16VMNJw9fYHbXScihNPWmneWNSeTkamRfh337H3mbkKJ33RBWCjbYWeXd1ztwaYr9JyDH",
  "key9": "2ekpcYh638yt3SsQUqHm52UM1EtvgRp8uBQDEU5GBhDEqw4HJcXjwEHcTDjrh7sYeU67nC1LtzpPh5cX6bPxtiEX",
  "key10": "5a134v5i45hhQjDKTpZtkBZKQCF94ydQMovA1TrnGbt6QWnKV9chVtVothptC9czBaTbsrFusNp7c6gN3TSx2kPc",
  "key11": "628EY9KeMan87phhRbtVjo6qgV4sgStyPHSRKoBd28CKxVz9xH7EZjczzsCfXRWTGbt4ZqVvLRZN5wbVYEefGKb1",
  "key12": "2xaiQHM16Cof5kRyP1mSMWRQG7SNpAS3z8xYb6BMzNieXWo6DVeXrJy9ZrhDqps1aG2KYXWcESubajnzJRpaW4gu",
  "key13": "5B9mD3F1D5SoTtVBzBZLRV7P7u7P2SWpKq2QQ2AQj6pF8zTuNYVffjS1SG7MSkuapsje77J659DdLi6Ad6pCEKAj",
  "key14": "3DPyevnU4KAXFwzJGgXPCLKWoyh1mQPYBy9fj38zamHSAjoVm8HZjeaQpbXWRuNKJtLsFr5KwQZmW3jmyffnABDa",
  "key15": "XveMqDMd9YifU1q2pJs6fHbYvGFbDEdqxQiDNCrcgnurV8pxBRrtxnDmWLvJCKGY53MjjSBf6RjpfMJ2RWVXhKG",
  "key16": "2geYREVAw8EAxS61Ex37JXUHL9xD472cxbKrWeiQSbA2ByoX1gnHiLZe81zyQUdgRJzfsFdCqzyoNLGx8676LaBD",
  "key17": "5N4deSKHwUWmrvcJFBayLqULULTYgQqxCYrLg3d4HPXkdStyfZoJucG8KCY5C3SFVpBguLjLJyYA1JWitXZJbGqH",
  "key18": "61fGmgLP8YGTzwYpo4Di1LFLfo2M9d1QmwJvotbiw2HEwS95T9tbsMoqjY4rBuUazh5zut8AmD5owZWKXviXZ7E2",
  "key19": "3KuajVwGyTxm75Vc4sn9n2KByGejvYJcccmeuXUD6A1pQXrwWoEkovG1e2kmqLjRgJZmYtQaCf8y1M4ra3oLDbdz",
  "key20": "4ouKCPLzeApotdJYvdv85qRN2UBuoKDKm8goXwoCzZvSQKzhJPPKDmgYoc2UDDzMaWqcQdTajyTfJyKSvNZABWFq",
  "key21": "oDUdrTGoTDocu4qadwi5HQy4MfJa7UTpZhWEp5s89y1t127HgDBWmYD1jWvCL8DNWhjdEz7iea7nCE5nCqLg7JW",
  "key22": "VcWkE2fHSiBFsXQhDergPyAjVJraFbrRhHKqQRSuizb4ZSvswHiEzbLWD8R9CPGh7VHyWkccVK6m5vLyz7GVWqk",
  "key23": "5sUfvhqu3HP5FHvaQN2zu3hkXKGwSU1mqNdjzp549djCrxWAfcF4nFyGvXRNScDDUJYNhRSxJLzQztpY5GyvuFKF",
  "key24": "3JqWi44JbdoRsoJ6CTwPDMToPNjgoido79AgmAzKcjRKKMG1wA54xFjzG5BrrDxLERGJFW3gLxQSwd9buJW3RuSC",
  "key25": "5TXuxfvPpnhfsahvw43QVpfsJPnh8qBDAhoBBWZ7HawKKZynicWfZLYugGsxEU9WKrjQ85TtdfzXRuShxqTJY9uJ",
  "key26": "556VraFTCrquVXJ5x7VsAxDyoNKxFPH6k4aLEMFTvqnYPiEDgJ6jBdbfjbqNhAg5NroJ7bgvujeHiFHszjxz15gz",
  "key27": "2Pdkt2QMgRAw3FcFJ9h5yBQHxxtYuV2MStesXmVL54xeTdrCWAJV2jzNajjo8S3ah9YwdbGCrDHKyphY4aoQeT7k",
  "key28": "31ty5TBYie3cUupeLAY5XN1fHNBATVRSqEn3ZR5HnPVQ85fWvxGzoTTt4f42B3xH41ecx5FYv27tDA7cQTJh7d5m",
  "key29": "2MmUGqXGJRTkMH8XHMhW2VYVoMbfBH9nFkQAMox3vFjvnVexYSTERrrXEGrJNU9CaYN5P1BspgbcoAyWmCTFnraC",
  "key30": "n82iM2rC8nUnWBZZk7n5XdxpcXUaoga4iNuiCcPCCk4j9NvjQ9xud1nMqxZN6YuroJzm8guGuv6GQG7zep2pSph",
  "key31": "61CtTXo8vsHscSxkv8Zuf1utrxMKaNoSUY7vBkFLEiGh6ScsLR8PqYPFvfDdq52xje1mkTDw6W96PCc9iqvdF3wR",
  "key32": "61yqviFUzp3xchPp6shtEujwVzcPgg8TFkRdknyxFCrQx4xyKQkLh4EcmGaSsYEsDhtRLNr63fdXagKYwhQjsafj",
  "key33": "5Q5kgzufYp6Egxd8PP8bwNGCSMtwFqCJt8WBpTNKAF3iBg6w7CCk5CS6nmKN7jk6Vg6ubC1juhuMN1J4NzSmwgYc",
  "key34": "3XHrVEhJJ2ckAcmVak5JsyeiiWwcoLPnPYTL2zfUUZvrHd8YAGbqp3ZGZxXiGAw7mkdMTXYXzwNpsEfBFYtENWjY",
  "key35": "2SPSPUrRyURUqnBqoVkFVdFsrqezuy7B99iZc2B2f6We5cxMM48dRnxNHp5PGZQtaYUvS3vtyb7NvMMd8jzmYDzA",
  "key36": "9ewuY5BETHyek37QbaUiV8kHJDznLbaWpihca36LyXrxRaV7QBCMQmYP8MLKW3gi4zE8ddh37Ejkw1TYnq7UJon",
  "key37": "2j7Lgd8SYTy7Mb5baUyc8ZHk36xgYNSBWVecRaEAG2E5KDz1ZKNUDW6jMWYCUQj2RjqePGVQUshcmsHy2j5ub4jt",
  "key38": "25P294McM5ZUBznmf6ZUP5dWhNRahiK6tTJNY2WgkYxMeaUQiBtZzYJSrWnrFZSxgBCgSK4ViTngs6BcknY2Lxkv",
  "key39": "5xUSFR4DJDwhpSVSSjjfW9DbjVx3xdcp2uaDDhEqVkkCZTaU5Pet3xNnfpXydeuNH7faV64FFfgcHtr4moWeTzt7",
  "key40": "iugbqDiomrKTdQkcCiU8ZdeGc9WxatQBhZVQwZHFvzb8JXyxxjB328AeifhgDW57EiR8UT173MSm8Mtwh4G67iP",
  "key41": "2pzyJojcRRrAdSDMmjHMAtuBW8T14aFh9x9d6QB1tqoLBjUhR7TxZv38Tv3mp63VJkZKFFByd9cx5fsFJLG8RFRh",
  "key42": "JuXoVBMAhfVLb5b7RW4K5Kowovws12zQxSmge5jztUVibk7AYFVT3YXYCusyhGF4u1kv7K1JAbFvc9z4QfRSVe6"
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
