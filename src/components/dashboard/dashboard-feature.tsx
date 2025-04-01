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
    "2ZRRZQyCr82Z5ZBTJzyEXPmeGq8KiA9Cw629kLySTFiVK4bFYE3mZz7vFm3cjHZD8igoWZFroTQxvuaruxEQkvBZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38PoTFxHenK9U4d8rBUU4ThkVepkR588LvYzSSq4eJ6aqQPE9tGCjEgHLZdSVDzFN9jNHq2o2jsJdPSf3tforxJf",
  "key1": "32QU9U1cugoCJ7RLB2rDjUdktWz81U2eYPtwSQo92HSRzUagFkz93Jgq6Sma7aixQFArtfdEAuMikjMoaTXcxUhw",
  "key2": "22e89LVJBSrvJLoYZdJWWVvVPhpN4pxKKxJTNs7P4bFLkgnEzYopzHfuX56rWXLAwVrqvB5x8sJUCNWZANnUFqAQ",
  "key3": "3EyPGDiej6H66A5bFnntKnUjbbKfcbjrtkmU6Yfyfj2f44Ly7MDgDTA11mpWNfgrWj7V33eorRDDt35GfNyGaRMy",
  "key4": "5fqqXoZf4qtwVKMBM8NNXHhQtwoqVmmQ5qY7B5vk6cFYYg69iEhAGWmZYv3Aw4Dxc5DriGFgezExbKmKNcL5vzh8",
  "key5": "3eZ2tjhR8k7M98UWdqxaGVcKQVTtasXLCuuv8rDbTsucJz7GWQjxYuWkxnagKhF3AtN9KCNy3Y5Zaap7nykCECQV",
  "key6": "56YwE2FESLQho6Dy478Lv3VkimW7AqDsBXGfbuhKKUGhvScuwcWKKmeUUrPpkbSpidVAUSKkBeK17U77XGYTXr9v",
  "key7": "4hUcPtKtBFsRrwSww7N3nU4Me7tSHswykLgtsVzSgAXJjK6W26yb3wctSLkrZ57MiBV8sCN3sqtjXso5meXuA1bM",
  "key8": "36SbCdHAoqqBAXEd489WnUEaZ4yn2nfJeVKMhcNSsRFUp9kUwxRduVzunrCrxULzxKmdY8sLEyokGktxh2xuG64r",
  "key9": "3nkip2QY6kAdsRgt8RAaW8LYcHJc4HzmwHzEqbR1oWhy5jLJJdbZ8K3z1tPb86Stryg4dtKdBe8tDVVwt9nK9XeQ",
  "key10": "42fznJNPAyHiFbYR7GCnGtEJXfXy4EU4ktH4mjcwsYAjrvTJoGvf3kFvsRaW3f8fgR6gRoFKHSbwjb3gPzzWzGu7",
  "key11": "2kvPpTDYeSm2ty4boy3eDU9JqpEhwSu5oVfoHXaAw2e2bsR6n8PY2oFJksy6r3hgfNgP6Fo5LSdqJ8nPHWBbWRqo",
  "key12": "38W8N1ihj8J9CFHKEed1ZsBoGkttZ412itG6Li3GuYWiXfzSj7EKYG11XYKvFThUc8L2geDEKaLo4Lzv376jJ9sN",
  "key13": "5g8JR3MvzbAHZGmjyvmbjfzbozmpazCDQ3VMdE3YmFRgPKuKvtZ6dSGrgbh16XMysfNdd6KXjsvAoeBrTMBEeUph",
  "key14": "2FQDdpFUc3gpHCtMQSLqadpQQanZLGEPGKwnidE8nRgPzUj7MCPGwGpxi8bYvf4W8nR1TDtaFR3GNhxqPwTwoqrr",
  "key15": "RxXZTBCqURtApgvHs1mWzZB5bDMzG9GPUGbUEVXxnDfGfm9XdrHi7rZkEXgto7cVmpopkAKCcGDJemzkdVVSUm7",
  "key16": "msmbLA8mhJKdz6mbHUwVa6Asp6hxFY6uGDjKfVy4YrBSrwjAmVsmnTk8QiJiAMquWspEdDaQv5nVi3LouxGjM78",
  "key17": "3wXjVicsBFzLtMcYx3KWd3AkjsfWtnNSdTiNLdyHBTSDQr9Br3ZvaqSCHgCy2Vv2KAgnR1ZEyj2QGsh76Qy8T7UN",
  "key18": "5VYmMDXbRyu7QX3egSrZCNAcnvaGZyH7nSYUfsh56NSf7RgA2fowtNaoCPRsJtbqWDc1XTxr69MncFxoQSiynzTY",
  "key19": "3WKesgnkPqRob1gvTMuRsuAokF5UbDXBhQG741yt2rwAxEzSgeU2ke2f5zLemgepoFMo5V68Ye3sHXueVKzZr4s5",
  "key20": "3TFpKxEccH2Neyvmc6ngs9E9mSStrmjHbStkg2qPhfLq28sLoDhD8vSr5QSYQE1nnhw6EhBqfQRfHKmpNgxwY7Ts",
  "key21": "yDC4L3ti3nTjoqXYo5ioPubLhK1HnaLRgr24mVKYAdodygupHUkLDtkWyvyRHKnGk1bdroYeaHskzxUrS4N2oxy",
  "key22": "55ZT5dazcCdTrowDkSuWDR58RNVNzSXqDTUtpZS3s4AeVQN5KK67ZsyC5xWyEhpf1ZyXzMuU2M3LkqrwQhjRTPF4",
  "key23": "3g84h91uerqmgPSff4MoejrHUgksCoAqnW61WNynh8Uok7g6iE8XU3HDcmXChjh8LfuF9TU8Bh3CigNfhTwvT5p9",
  "key24": "5PLYbYwGSv1X4NAu8wK2Qm6xpCwAc28YpWhzNy3pjb9gvXKvrkJuXtJ3aykpDh4oX3MhCNh5pHw71dGBkZZhncui",
  "key25": "mx86LYYkYscMGKfF2JaNke48as65NYdoFCUYjsNMSHZx26WVjcMv3gR6RK69RiRCXNMrVstxQMzWG9LYSn1yz5Y",
  "key26": "44ViG26a7coj8Tkd32vKfbp23YwUfNKwPoj6h93PRa5SNDAhmJW2ANyz21dSAkpsHSGRdBh1udJBdo3xpqaMZMxf",
  "key27": "2gk91xrVZXVasDnFKcbhXt8Ehj8sTa7HjZGXTnfUbiNuEP5JsXofHD5RjknJ55xWJ9VfNm5AiyhiJbpZEF1kiHE1",
  "key28": "4rVNTUSVfrQBcKrVvo6PjzvRqRKP36cC7hVvp64Xt4aNWu4puz6wND5zfyxLUjCiPW5DtYqe8umzgNeXqeh11be8",
  "key29": "5m9s1RJnkNQ2PCYiAfips3UV9Gz1NyVE2z7ramPJ1v85Yzq5WB4r2TAQYz1HhJsav6BnA2qMmEE7fX3mjV8hr5L3",
  "key30": "5tmQ4C9WuXiVNi5iMywHVfMVa2KHCwVbfnJkYqXAUCQE8kxyYqmXamEavsW97T8X5X1G7RMAH8oRe81rm2m5pkBZ",
  "key31": "2XMD97QygJod5RqUjCnas36rSoAdRDq8uhVgsKDCTqPFR9oVAmycSwkDs9a5CtWAQLBVuMMa2x8vdseeSho8csch",
  "key32": "4KVNaH3jbfXVL4NWoE8T1aHegwgQYBorJ3jW9MrAWoS7LKdNs25CL2ozrya6oFTeyJFUJy2Qnenn5oLVPwcAqCzS",
  "key33": "5gnM6ksJorHFFFbxCNmeAhvm7X7KUGe5YbxFTmxThjKviLv9gv5AaAm9vEDvJGsXbF7zGzL78WjvuSGxevFgnrJw",
  "key34": "4SNNiCvNHuhL1NEyiuQjuu4ken3ZatmKpTUH8Szs2xm3XQsQmLLqmNjkLZKEL7fyDCyuTMbGhkVtEAW7PMdeDzGo",
  "key35": "24o3DJGBMGM3sMiCAhZMG2g9rHfM5K3pF5ZmkSyR6e1dcE5vpWujQikR2bGeBZT6otrRR1WTZe5WBhFPCu87joWV",
  "key36": "6AxTun4GUuBeRmKvbBqm8LBETNBfB147xvJRUjfmxkktWxkK9LyRiCYfaYZhtDwrBrmUUG5mHCdL5AzartXCJBA",
  "key37": "zxMALwgQHFbfWsNzoVpbzKyBHTqkWcCHAkBxQxQMM5M1BPDmhN876iFtWPrPshbB5o9bjL7TmvUuGzQwWHM2Dy2",
  "key38": "Pnh8pnu6yepcTfppzY3XZWe977At4WU51b3ewbq9iR4n6c5NM1q1gr3okJmEqAyPBPmdjyZnFHfjWjvtFnEib2j",
  "key39": "2iKWD2BGWymAUQ2wg15UENzcAewh6DGo87xhMhyoAMxy3NJtC2gf14CuFsT5E2KKW3RfW7gAuMXooGkUBfydK97S",
  "key40": "52bGLkvUJYtix48PgtPtVcMaJhbP27A6Uwjf2nd4PFDpk3yFDdSyU2pheV185hQKujyZu3i77j59ioJef7vNzK9H",
  "key41": "ZQqksz6mJGdtw3RBvYHFw9FyV6dEmggU9Gd81kM1K5QbJQDpTi1zEKG2nQUT9cQavhWrkTYgnNE3nDgZr5EdNDZ",
  "key42": "5NTRwAubhJmxNnsYSyhmjDYTR1NasoAY9A2BpzR7TfLQoCNynk3dQ5PQYTZ9jRJBKFphz5MaXgbmRkpmVh7c9cXf",
  "key43": "aRhhLfD337NUKXfi7ivxtg78zAytwqfRPcKhr7sVQmDGbT9EW6HJAqo6pmAM2hKrf7raBHYsXoDa7nHQjHHmVuM",
  "key44": "5e6WJoiD3DTZYyERG1gsV8o5sBy32LPELdL4Zp7eve7zv6jaohLwvMPe3ZMCDjMArQ9UWCPMmsT6mGpC9jkQd5LC",
  "key45": "3V8D7oe2pVfKqzZoe3zWh9NtNazLLxrV8zdWjJ8TSmqQQqd3RTk8XHXpfF5D4PVEwsXuqvBjR2sL5oTH4vmk9wVv",
  "key46": "5QnaUpTuScN3vRhyEFhTgk1R3fJ32KgztboKL2WvWY9vGirwyKPjRPVRe6Y8D2AR7woR7o3iLabbLiHyWM3jDD8X",
  "key47": "3dNcofre53aFCZ2s4v17s8y8ahGPX3PVNve8CRzgr5m7cpxmaZMvn7JfJTU4DxooioxG1g8oeWfY6vpvmbz6up7"
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
