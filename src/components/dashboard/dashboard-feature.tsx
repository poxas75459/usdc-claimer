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
    "3TToquygcvSgXTsunYCeRnTLkbmKv38HMzaBig8aPtvcbzRmycNRpFUcbniYKKPUk5e383Reqa7mJa9Kkz7WuaY4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3g2rQAN5Ejs3FtGzxQ7M9ZiVB7ZHwfXoP8Ug4kDCQvjVy1zQjVZCPcaG2Xes9Po1d6zX7MPM9NZTVskLaZEv56cU",
  "key1": "3ypbK8xxdJQFxPtVgh6YeFFLYpaBC367TWC9U2AtxKcEMvf61v7GVgwhmWUkWcmZLmnGQrDWXmEUs1nNJR4ChKDZ",
  "key2": "3U5ZFkYDUP2n1SQvzhpYgYncznE4P8JG4FfQABtpxUY2UohafBHuynYFBrP71ZWKTcKo48wASpZ6S3z5FKV8SLCX",
  "key3": "u2xV9rdZDzmojXrzX6yjhH4TTEaPSQHyxDA6GLKygmw433yDKincE7ks9hDt58GFek1uroTegDjcLsC77MQvzmY",
  "key4": "129rncNPChiQzATicEVCNDk6DZN4QAt6p9D4c5Smh3n5b87cHyDL1CHZfKDLFfoQMueZHwhguwaFQF1FVk7qA9j9",
  "key5": "3fe6wsXA41ocgrZ3ewNf7GAJr8B3KF15UTYhXmdm5gMaYPjEy8r2xWmcYVtRNM8duKLahDvNHinygRKbTVeYAZeN",
  "key6": "3CRkQSVyZPgEQ2FJ4ogqFMKn8CExm1zhxyKZkK1AwELgaTW9Gv928tSc7oDMGM4PdbCSVUFj46pPrquFuXepVatw",
  "key7": "5mjcXgReFUsrMazJPfpJxJjpmpr7Yw7zVVVwxmYq5Qd1MKVKCSRWFKWrg3N9gh9dZhrpHCyRaHjPpRv1Vhv77SvK",
  "key8": "58kUDh3XeN43EQJJyfswK1P2uAqSBRxA991GbRrTn2mGGStgc8gftXoMeAYsQG4NR7JaVNHv1kdQC2ujcJwG91sT",
  "key9": "3h6CMRYtREacixRR7d3j31bkjrdtfhaeFukoMtuozegm5EZtDxXcrx8XBmrsDEJw7rXren194wTuKTX1gD5HPnud",
  "key10": "TLJTUbhLo5tR5tNd3C99L9NFvje14C2in1szwmYSD8RB5CU4C3hHc977pBJLQdJozWJqM85HUrA13V5GXA8fuNx",
  "key11": "52Mr6t97e4KfuMm1P6s63vfVMfJ68dDQ97bjZNMjeHrYX4h3jZbJsgaRCu6fHTAa1dXuTHNak3x9xvHs77A76kZJ",
  "key12": "JPeWxFyEmtfw7m4KNwkSpNNHmXz2piKz5c9TYX42goFsHxtcuHbjEteu8sVmZUWzoR1hoQ2ZYfg45M6VZSVJnNm",
  "key13": "4DRmM6cx6GB3MKxvQjTN3jYJ4cFzzZfg5KGWm4ARQuySVgQicDiScrVUXNYWxKRXtJLupzyoLZndnVaCjJqWrhKF",
  "key14": "3L6kcUt9jSa4Yjys1kP1Pa5UkYXkVmxoUEi1yjcsE28hDD2hRkKSXCCj7GxVLk13cp6TLWnvCy1E1q7ybstZ26R",
  "key15": "3H4GhPtDZToFERWaKAKdW8CtzU9SdVUtxByvXqG5q8U1esH4EipPdAvJa8WWkgDHsn7fgstZp51HvLmC6wxFqh1F",
  "key16": "4bB6rR1b9bLZR7q69h49FG28Mtpsduw7kY87ws83gQuh8jtXRQBXwWxWpFxvivYcEK5FVxaHBuZLbxq25SSkTpBZ",
  "key17": "4xWgfKkPvDht1jm1ZZcxbzwrKM5DYBat9vvuXrGfUYP8vtf2k9HfA475pvV5GoTU7ingT8UK587hVQTRr1dDzZ4f",
  "key18": "3PD5BAUR4MFL6Sp3PxxpcvejSZonro141KxptVq7ZT5QL2e4EQoLWczXSRT9KatsJZJ6ZW7ghTfFJXL99vJWfHux",
  "key19": "5xVGpgDZyrJp8KDz56W85nVPfSnGBRr9ktTff4Ck9RgVALBr96oBya8Bbu1e7pUXjpJT5Hb64mesm7yfYnFuaHac",
  "key20": "2NFhgnRtDNC1ppL6MgkN6fsTaFzAWmnBf15e2GaW9SkhSmhrefsXRcvyzMqPL75VBfMre2SsYgbXyasAmLEEEE3b",
  "key21": "3wGY95iqXahE1EQJYgw3ECoYrCqZLCNLTLRw5rdUv53jyvGtzjTkKExjxnJ3CtoUTkn5iEZuJLbLnBmbnCoYERM9",
  "key22": "4yePsLqL7uWyMoMWt1rU1B1uzk9XafBpkErjj57yFCoAsxwHD4a4RnaEfxBANaqYD8z2NdnyN6GwAeWHBKM2bLgW",
  "key23": "5vuEssr35YUm12EmsAHYiW1Gdq9QGeurRQhVZDncpj85hBjv4fLeD46r5cLYNj3Bv9TvW2njth7PDe8YAdsNuLwu",
  "key24": "5bSo7NMHbX8jnxcutFNBDfUwGXb41p7MVHxFN2xdLpuqmqkVarW5zbp34CTVFGvHs9VaA6rL6GaaBPWWYCEiEpwy",
  "key25": "5hy9n1LRUnX9XqGhYBAQWef4EFhhCwoDcYEfFDCBDJjK3Y5Y8Ghn6nv4KedDqrC31ensfxDEF1tzqcTaFmtygNZp",
  "key26": "2esVhtJSnP4cLGQj3DkQF179oT11PeZ9nyuJoHoKfjVUhYYwrEPLJFZFXojQrrCT4EhMBrQvt7dgg2EDSbATezUd",
  "key27": "2LDLDo3R6UjHBmLsGLDuWrH6AzrjhBW4k8Dk24HDzmYoZ5YFAzN3MMUPwj57zNGM3Aaq1Vazq6GPu5VqRtPVPX1c",
  "key28": "q1dSXwyaDdUYGhtZqMAREVNwbjM99BvV8hSyVfzxFM3eX6BtCW2tNP7M1s4GWtt56irYsCrcvdrjX5f5VwCy1oj",
  "key29": "3UzECzf7SvaVmrhSqcYLuNK5KiPLPwczEmomtDXFZ3fFeqChXsR756mieVPhqvoN8NF2AQABjreNmzsXx1coRuu2",
  "key30": "5inyiy8hQHRUudVmdcViDMRWMzLvVSiJKMhr6KLXbZEPw8UFwX8PA6EsnV3Ex9ezBvQiYhkSYhREEuAxM1nDK61C",
  "key31": "3MLhfdZa9EvBjpkpuVwZtB8wynt6oakWrERFKd5iUYMcAR4yCGrNeyLCq4nnFHubGKdj9nMbTm91XbWt1ZTSvzBQ",
  "key32": "io3SrDrTw8RegAtAVYCuPGWGeuwEt4r9ZipH9k31KbDCv8Byn1RkogLVin5LXx1iz77TGE4ziEdt7VLzNWuuuMG",
  "key33": "4JKZnx7J95ap1n7HjeRg55xikuHemjdKuy45Ui1eQLChceYnKMhWowESfqk1XQzigL51eqw5Ahb18SLvzaS8fM5S",
  "key34": "5aJSvpkavaYF8ZGnxSWAbHCXVar6HRj323BjUXc7DEbHZmoquzRss8QMgmdr86DypQBhM251JHbNQvE8Et6ZdveC",
  "key35": "VcbqTzJ6pspvC3pLmZf7HRcJnTz4xcGsiJ9fn9KN4NaxsxtSLNHWEM7S8j6aYrVkrxs71U2qTXvwm7ZjhpLGvuv",
  "key36": "PU8xpbDQ3RruzYR9i4mcpCNn6VAAQtBMHBKboUCo61PPCZUXm2uLTg4NSL9Zbp7VsQ6zfhkxmHVoHS8WpPbMXHt",
  "key37": "37rGXV6gYKUXTS1kiYFB6TmA4jKdxeTZWHraG7Nwum4N9Nk3wiaWt9MANw6dZWx7umWUgBiZ1XXvUDbCwuAQsoQp",
  "key38": "4dJG76CyY3Yim7kXFt2sJpPVWqJzdUGVCJ7mEpnSVQViNAMeCASWtG1wZUopFrq9TeMjYRQj7ynus29XNNh5gbpW",
  "key39": "gpENAFvd4UxQu3vLmgPMLz3uFr2nghiVXgBm1GArY9ZWk84h2yMsVeqaBPB6jU9SN8vxc55amAsKAstPtN4W78s",
  "key40": "4gZLGg77UqJJahNgeEfPgM56KCGdx3vCCAH8qJ7PALqdMvypDWdNMuxorWSkLbX3QVpxSfd1jpJfu8eJVpFujEPb",
  "key41": "5HZ5ci59tVJzr7qpBXSmXGe6te8Jkb5wSYC8HMRWhFV8PMRSiWg7cuAo5AzjLovb1g1Jk7DUhLeyvon3Yii6TV9V",
  "key42": "2CAHaSGrck6EYuEW9fFjTMHuTiET8btkimAsWqskz1xQiPN1bw1X8aTTZfzTMACe8EMMVvUD8ZC3EHin97Un4uVQ",
  "key43": "3rydvhf2ePe7EinMprC3MQdbAYT4SLQ3nAshYwrh2m8nXUo81jd1de7jxgZXGvUKDxuGtakQdATrxHfmfhfyQUex",
  "key44": "5F8bBfy57WhnKwLB6WUQjvMFJbEUGYUDwXfnaqSQmdBuBN4JTTiYaezhwZomh1PsrpdH9obgdsmkccEDLrCYDkct"
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
