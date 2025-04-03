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
    "2mZ6togJy3o1CLGUfQia4PWhgJNxpv1xa8fbPBQg2RBCXtcRY1dtMvcxBFLd3TxNeXj4AQb3VBsXegV7vr3Mw34A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KmJSvYscQwMcAMXv4jjWrqFpos8poAAkXxPgKy2EgEBvb99TkRQL5DkHdBd1RAwYQToKfFfNp97HnyKX1vrGWch",
  "key1": "3p3qjEEcmqXZb4mAgBRDrJd4km1YdCQpyacQNrwAPPVWVkSWcDkS6ViE1zR3cd4fKXLvqxgDvWtt2xm3ka4Hgd9t",
  "key2": "5aBDoGDEJSNAQRQuRpiWNMX8vEwi6hQM7KCBB2iQc94V8TYmhXSj1cYrFNYoTw58ZEsGH9Z98L4Lz9WfkPdrQPmr",
  "key3": "3JcgCasq1M38zXExzajVY2FGE4r4UjuSKuAqw6NjTM1qeLi5V6zgx12buaWuHNsD5uk99XSsbYDLsBGFybuGtLrH",
  "key4": "3bgrR3KUfGbzkAWVWLKtcm1BE4s1sSYzPEf22v4TuRNtFoPYNz4ccGiZLR9ADSvJBwQ7TApEE1vxG5fWi6ZYkQAG",
  "key5": "56yT39RFbfwpPPdc88GeBuEzbLrcYDCKxBTg9pQF2ZrCrJzfggZcCCk83Vxzx54obywWGD7EvDye3hoUZk8CB1JK",
  "key6": "4k8U8FxVVg9RCLUreXF9MbX6Z3na5szv6F9mMQgPo7evoyvfZtftMyUBu3yXqZM8iG8DpMYkdwuEmA9nAES998s2",
  "key7": "coZ9wwJgUHwNXUjs829Ctpq7W7xRrfouG73WRLFPbfrCztyA5vB52G3SmQjGaquEpoMJTcJ3ZAYwKBEoYsBvzR1",
  "key8": "3ZAn5NQWbShkzopiavAazHk4YmcVuSYJEz6ZEQKx4nTRWjCQxuG6gTAa1b3CRCcmMg3b5w1udiau5iAH3HpqGH31",
  "key9": "3sGpF4gE1nPAE3Azz7AJ3DnTtCNWAsq6ZdTJM4yfEAdhKrTrw6dMjvQ6w2oztTAGkKwUW2cMmGrXP4SqnnBiEEMJ",
  "key10": "38jViWa6YAMseqP6Hav1nZ6VtqfgYNzgFJJ7wvjrq8FL6PsohnEwpT65KSV7nxL2FcwrL88zbYaerXUN2UBuPhCp",
  "key11": "PF5vPg1QvJC3GkK2xeqU2mCNd9sSD2vxdUi1Y1g4fPLhTk7uQmvo4BXsWfqScgmBoTBtg8EyDRt9BfFa6X3RwZ2",
  "key12": "3QJSexW8SYqCuEgeES5azKjxU5K2fboFfkNCE3rdwdoeatBNf2GqEsEtwDF1sxm3YVJhmxHD9bK3xTdkJs8Zo4ip",
  "key13": "4DdEJExPdnvXhza8swZDdfPoomBZjQTSWWuvmtu9m6McXGZV2tcRQWozH7kQQ5rfxrBZ17QBsv28TgqUJsknuf9i",
  "key14": "3VRL4nBppaCn9wFqwmeHpYzDAYtc9UK3zACkF2D68jNyHHyUWk8kezx51VN6CJAdxStC433dosWnsz6gd6pd3bDB",
  "key15": "SEYqvbVs9yLhyJKccMswVpfhjwB25mUYMaiwQr7RuHWDz8esMoU9nwBqFZf7bUkQkuDwBHyj5yKXbB3JotdJSGd",
  "key16": "2juZy67XMx22g47ugbauMFxw2pNx78hF6D3UBJRhCqCG2S5jBaLiNuRMULMkZpnsStpgJkcS2J2k5ZcAvEeQcRPn",
  "key17": "4Zh3sWjTVsUK5ZdRSGakcHn1x7p9DB25yjGQmFDJihDXXfzx2cw2tMrhFyAtoweLbbgc2u1mDyhAfpoeLtd8gwGc",
  "key18": "2g7pemMxKRcxKSCjgZKmBVURwwKXqXSLwv3YLgJTcotBSkwBsi9nYmVKwFCof3rZaTZ8G2BdVHBUzXmsdDCnK2P2",
  "key19": "2EUrioiKiyj84kBHbjiTeAwLycWVshdSTJScBC9rJR5ZBwW6WuEiJTZmi2yAx7WzDBxeUjfcX46stBhSDFfgeuF6",
  "key20": "5KXE1FLKuZK4oeDFBovcuisaUTiexFRNQxAY3BXCLqchmw3XGyRjjKpxgG4b1mijESjhWZZonvkErsog1J83fWjD",
  "key21": "APjk1Q4ThFJJY3Ho22o7g7vtqUKHxERXg6GXHauuXxipk3fidk847BVTkasHiSXYHsSuJJUrNfr23KybSyAuytz",
  "key22": "3J7vpjK2Gmwq2aXm7KSDL2pgtnxF4ELxZVLq9KKVjeLdWeEjjxNtpaoYJy1Xuc8E6yDA95XELH5rV4b3uL4tfCiz",
  "key23": "4WmH6PqYfDKVFaR8zDNZEcgMUy3XNWqDbwyV6CD5HuRfdndra2iYEQB7164zpF6659xXpYXsURpdjXiAFj591UGg",
  "key24": "4MRQMsu28yMKjsLofGZizTTqLuD6oAh31xzXszDfHA6uzHdVZKZEjT946N1Sjsde7t1dv2TBRq29g3xyFtdZD31W",
  "key25": "e4iySmr4PZen6kAdME1bSWJYNmzgYf131BVZt7A7xEGQxfi1XEHncQsuyBhtg2JxCSifPdCzB3b8DjA8tY5PX5a",
  "key26": "5QtvhUwCcwoWyKMkKfLPqfABseLGuj6AyXWNLT9i2nWCPcaHY6NwZ2edTbJEzUSKFWwCekgswKdhoekDsaYtGRD8",
  "key27": "iVpvztdwKzN3PASGprYe2mieRussJXqUguYZWRv3M5ogxQrc3YmAdGyPE822WDyrRGMq2uG9eeLLmWmDqk5t8mq",
  "key28": "4dEBRWp4uSQomci7cQ5ZEQJujFdYaF1bpHhkZ3DbC2Vv83k9941suwgx6cdmuAq3dPKrR6oWwaAa3sXChXZr6KM6",
  "key29": "4FMMzVkkkkBjRmBV3Pobd68dLinQLHfQNdd8oW31kU33He4T9RWvhCeE8geQ12KkRdncntMrwihWBFNtZ3Kn48bR",
  "key30": "5bPndUZDcad9QRwC3vt3TPehAKYRd4r5UH9dHTteezKFTg9tQ6ZySydXfArvGScH7CvZTrqaQUruDnboa7FxKD86",
  "key31": "2kAketrcK5YLbvHy4K3DjSRTRQUfigDjmwk2F1AowKzY28bN3GtknKfFivexpGz9CXMcCZuTfpQjyKvoyVA52LYa",
  "key32": "5z2atps1MTr9GG3aMU7z6RyLePBhQXduc9hXkshf24PDbTKAZuzQWSTe5qD5CqtuPXfMqZP72WUQfH8K7ss9ah6N",
  "key33": "wpDXMSgByhqYRQN4UoWKivEkjN57knkrRU3Q122QNbmrCZvobybpfqQMTwyrzSFNGZjXfmyA5FnVc3G1pwgZx2v",
  "key34": "2iGmUEXCCC9cRDPEQP1AVXnuPLZWY3AZnPMUgS5Y8ZaPvbgeYJRCdbbSCooCxsoEktNxULC6WwQ1t2osCsCSddNw",
  "key35": "4eXgrCUfaJCnnWLBu3fyPBsLxkC2UFLQFe7xmawezCncjz6hJHvggaHuTtLAqyEqEdv2bEkKtDrSvx3nvostgHVy",
  "key36": "igt3VuaFNj6YYFxCKsp584johXU8AJik28wJSdAUHWxFEvfpjWM15hnSQFK7EMFKXajgwxaYX92VTcN6sMUNFzH",
  "key37": "2sF24gBbAjNote8EE1T4NvbKkrnrh9X6sgeu8VsfNX3cAS4ieB9LS7SyBq3kks3Q39my7b3ck86ViUvT62jfSKcN",
  "key38": "3rkPTKibJLHQwG2oKxJQGrXiLr7EFGRKiAwxoNPhepg58Ns1gRFDxejsLuKBC6UGwMxbA1GmBQSu7GGLwjDW1D8S",
  "key39": "4iswxmRG4Y8jTA5vCuRViErgBWCqmbB9maYZZxrheAHnyJS68oJT4vPw7WvST1io64bSyE5qJr2g3oVNSRwQp1rF",
  "key40": "5WARsjcpbyGSYqwmvtLoByqRzvRXJVFrqiXExBCeswxjaqbP4pGC7BQv1CZDvxEdnsBvWWMYBATtrqkCrdZPUKcK",
  "key41": "5NTBfpYXEC7vYhMTj3VX3jxQkjvoaHMf1mmhLj2xtQrfrS3G9dQ1MwqSFTTCGFjq8oNJvfhzsc2c2ERG8j2haxEc"
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
