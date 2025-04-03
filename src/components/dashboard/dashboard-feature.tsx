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
    "qYViweecqjv9MzN8zX4aPhrJX5HDdCy8v2seHVsAnfRw35Ctkndypxdpya8XeVGvU7xERptG1m5SM77A73ZF7p6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "v6rM6CLsf2PRL8HMu3KDeuZEuDq6wB6FgHJos4LCpTJTzMdkTT9vWHwWMayKnBKMo7jC4X57r6u5FZoUzf8yQPp",
  "key1": "5Ceogw9wo4i6JoD5WS497fywhj6yiFToPcpRnikb2rv5uVAicTyk6QUbG11QwqRhm59KVaWJcPcpNfARhSoWCkAd",
  "key2": "HqWx3dGdv84KRJSYnbb3wjtB8JryZdGeqWUW3pMM1UyWtTHLfqGBQUvmyYZ4M6MiPih427m5WusB59ZK7H3iWz3",
  "key3": "38rTDxnwxkxkvRZL8eNzcUQePzknJf9RqdUdD9c5DnMx6tXTdbzsAmq7Xkec9L7KSg5rwcAqAzkWpNJXLNrc8a6g",
  "key4": "5Ks5JZRDPEytSPTS5pyYxm3dLd6knCsXN8ApPjtTKTvSLx3EcoKToTFwEAWGz8SJHggjzPMouNURW69S81WdBjTU",
  "key5": "383k4KRw8gqtS4U3vdzZxdvpMpzbE4spzk49t3cYJdBpv7py2LLUwJvQiARknNXSDLF6Vf3rzddfTWiR7WDqMFiQ",
  "key6": "4B1HyFhDJBUUVvmA2JsKVkThnsyzsWdwN17yPDkuvKCdUQFdqHwUbkJ2Hk1G3KksUP6bE5rb6u9jqK4dys8YneXk",
  "key7": "zgNkgiMeDRBo8EAmbG1C79qM4frKUTrGBZmHiinFAVU2qZNYgoabgNWddiPqLFoE6brmz3nAxUMHPKQ12khzLM1",
  "key8": "3pcwxGGwGokVHaEKfuqZ4BeCRK9xEg2oS5hafsNv7g4qSpZybT2rpJMQVRUtzzrKqhP2DgxqJbU3aFBaHpaWwLcX",
  "key9": "LDA9pve2Wrtokyd6b1pGpHGiu2XnFuBvJTnsvxCq5aZrXDFyY8s3yzJd8sWvozCWQtGKFhTtA25fckQLjX6WRfd",
  "key10": "35Ugop4Ap4t6weAWx7pnKew2uyfR2Ukizjs1FBNaWPCQTLpdrWypJAUb2xgFQoBDYbKFUErZNLxwE4KcpXLsTh97",
  "key11": "4VNfa7BegVbGTPHU7s2iJUhwHp85x5hya76mcjfAuM3sXwGabfL1Y7eV33iZKqjewfLWsENarEQzXYZnVw3TM4C2",
  "key12": "3nfXmfW97EfypeWzHzRiioNGP42v914mQm3mre5DV64VLjF3FCEyuoKeKQ4fwJxuf5Xe98GvVhEzRsKPUfxmMoec",
  "key13": "349sJM4553K9SMzBHbzcqax9tYe5GweqnQhL81WFzFnRZPZFCywKszijhPVWSWhukkTiNUvQLGK921UgGh3V2n2b",
  "key14": "4nPxwfw4nqm3rcBSqtV96PtiBeVzZriEa5AWsnaTDa7QwPvxw4f8GaPMsT2zfq18WaggsvsdBSR5JrKjjwPHZeSN",
  "key15": "5ebZdn3BisvoigjjsnUTJuaZpFEy6Sn9Tpt3QPRu17jEnffX1b8idUbTfo7pjCwBXkdKf5YfodKQKQmjD3FHhyCW",
  "key16": "4U45FMY3v3aCN1o9KMLZbRbyBvXDtuG5jYVPWFY7raVXi9G5T5ccv4zX9weznb9mxBXxeELpYmVAgngPB4fiB8sC",
  "key17": "3krFKwzRPLRXPbeuhexh1tmYT988Ngcx9yBWnkr5geLUDptHuhKaphDf1FthRwp4X8QBSzthue2nQT3y7DkCxJxG",
  "key18": "5FehNAU9hMju3PvZwUyg1a6Cr1gZqeW7AoSfN4AT5kutTbEwYB2dUwboHue6DwLM89Xn1aJQy5CX7P2hhrMgeb4q",
  "key19": "43HkhKNZRs3yFREwh5xTZaiek8sEkVyyvLiYnZEjCm8WT1k663wRScJE2gAbdTyN5xpFrG9QNNycDUrWUpHikASP",
  "key20": "3ZzgJCjJ5Hd3VRz7Fb2oExz51ABFsmugPQFNvkeGmMcbJ1MDiLe3PscrArsJDFwn8GtnJCS7sRfJkAX5iRKTDZwW",
  "key21": "26mCGPkgmbiE6NjyS5TepXTx8Rr5FDy2dYToJW6FveRWUQ9jLwLqTNZpqo4rjNyscnsA8DpARZbRbd78bz3954sN",
  "key22": "2oVjVDemQUMHALzPZT4SH5ULeaAnzEpWm2nC9gas27qQKTWFTpSGmbArmBTaRMFHhFhtKapaozfhuC5j5HLDyiBo",
  "key23": "5SzvaqpiLvLYnuJTwTsB27RLT5PR2zmGtMixkcbh82XeBT6RCZZegydcrWz69spTcUdjgMwRhTaf4MB6MPraYm5C",
  "key24": "3oJowMF5b88PyFta2PwcqqEXTJumfvsUmw83SpLUDYwyXpZoTzhucuh7T9EpeqibtNnnx4GcbpDEG7s58hDAmeoQ",
  "key25": "Qidte3ZgwphpwzPmSJLXD8LYkjV51dybpJNrqmiKVmtpT6UuejpdLDByLMzS8YU33SJ64zCXk8LpCYqhFQR5fa9",
  "key26": "3HmmPiE9qjCX1XyyH4kaGJyuCKxt3eSmcq1vStE2tiJd9VawdQ7ySJriCUPHoLJNbsrBwGtDY2PMXfKeFG5CzCL6",
  "key27": "5K7tb7xoCEWJcBq1LXcTTAAL28KCDsTuEWpEcniViot12PhbBxS28AVmh59EJY8tT84RUYNWocN7HCjBF4YoeMtJ",
  "key28": "2mMadWaSdoSaBW6EhAE94Yd7N47Pm5uvDxvHsEbUUj1pYbMHjSniLTHHn3RPny3XEsYEWsx6fyPqM5RDhU5Gmh6y",
  "key29": "2Pi7iw8bSUYAyFDud1qUzkuL3K4aqRx6HZef3pNWRkJw7cLUwcEjC22RERv6XY773sc4U9QhSnQLYmfWu1D8jskQ",
  "key30": "5ArBgKgMrwq1DpAwMkDqR6GrZB7j54WrXfrH1mFdUXHP8ZGFM6mayL5mGQza4cfELtRCuJnDHH8xDt4CqosnmoUd",
  "key31": "29sMEm6jfd3nPsu81bkxRwJzcypZgjdASHWH1K8SHLsC4heX9jdywswhR178i9pQPQLUDxq5iKiuZED3cUpC8V1M",
  "key32": "Mkds2LyrvknUCSSqDmNBJvLVqEBHZa8L6DHRdHyVrbRkBrkRkF9Pus67UVE3b9MkVaWqS7YTzAqUPzknNTr2y5F",
  "key33": "5EUKbBbU2NriHhkfquTZRFB4mUii73ghgbdRRPG6HSs5Hy4qTuSYKdXhcpCQMoppHKospSmqMebbMM5kF84X4zKa"
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
