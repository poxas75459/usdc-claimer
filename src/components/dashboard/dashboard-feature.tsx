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
    "2k1xe1HtdkNQiakzkDbxVMkmojptRN2U42YeDdbpD846CP1h2xBsjZcBhX37FnD1ZWM6Ga5zYeL5rWARDsuTTLgb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fcK71UySsj9a2QRRtiow3dqsdbNFh16ubM8LHbCxddiztWb8S2VPeAbwyrPhqYHTDZTkxtZqGtngfq7Y6XjGMGh",
  "key1": "4pK1h8cXJqQmjbnjcw4PZctUUhPjRZnTuvE3DKPhKgJwwC2UEYxFJTnPrE6r6YB4fNwYKvYWKM3me3xRDx5sy2bH",
  "key2": "3xEmxZkHe3a97chq5qyqUWYQAFyikARsfWeY7Kr1BMKABixF2jSdXrsLLdHumECp6XJvfMzCXDrL9H3RDD3vMh1u",
  "key3": "5n4na9C4Hhk7WBdAsFyXdCJb3fC3jUSp6fiwcDJDakAd83Z8QEe43RgFwpmkHqM533ytV59i1FpD44yekCzvAnKv",
  "key4": "4bFYKpWcaS8SWTsDKebsac8raPDhfBFiMtZWDz4TCADL3tE59LSG4PKxg7DSidDkvof4QDcdBhGrAW3dVPKt9PpE",
  "key5": "4TVxDBMAtjUaUSithEKpgPVfmQEX5NCk1xAYTbbJNVYrpa2coX7zca1sBFiHKbXQAUegTYXVbTneFLWPx9U41PXU",
  "key6": "2N5ZK4qRrgghPM2S25LpsZAesE8RKzCZmnyK4JRA7A1j86CJKvTm7x1V2s92o2wRFkHZnxB1VthaWUPdAVsGjSgG",
  "key7": "3HRaMLN1GCz8gQUSb1SnESq8Cy3yfTo6U3T5Xi5kEVH5ezQyfLBXRArCojgaajdcMqtx8S3azpZtDKnw9rX4EUX6",
  "key8": "3jktMYTzrQvCHUYZ54eQ1gBPSMBrAMvzfRwpqoZs1QE6Lz3XPN7bkiT5BtpT3xf5XEoNytwsVdPMFECmaCygnmbh",
  "key9": "2tPdRviiLNSLy6nEn1dNFxaQSp7EGxiuZBC4aGEpbhTDJcRwkqfvi6wVac1NCdD9bgKmpxeunSvmbVBmkqdBoELn",
  "key10": "h5fUL19EEHsJU35qjiJaFngXAYiEBhnMtcJPKsyAQZWdA4UdhMvEvVcfeaKkVxbCaqSqsAVbbusSRAqRJtTa6sR",
  "key11": "4rQha25ArdgfLWcuLvsZGCNmqaEKcAkty9cuUA7eHZn4SjqqGDn5fwqE9EtjZeUppkkYZLJwZFxbdG1a4sHENvXz",
  "key12": "3cxkEdudUGTsBVd3vbAysJhnxT6uRM6rDtVQfo6fw9q37hVFZ5ECqrcAt5VPZXkwgK3wwuAyju4uNYjdytR91e8t",
  "key13": "4RDzz44siojGVYSX3WQYRv6PTrsTJ4mjhfR2CtV77BmXiizdjZduSHKs1d3jqrGQNCGEBNy4Fmcs8KTJWief8kTN",
  "key14": "3CNhkVXzuiToVsdoydhQtSr3XdwWsogHakcfZroUVbTWnqeNvcGmfdXiYha7qx2xfuYWfAfXSDzP7WAZS1Xoer1H",
  "key15": "5ehBuFENJtQZ4NTvjeXeK9dNWuZdKc9vRbvuhKJDoEnHnvxFCPjccLNtFJXJfYJkLYi39WuKsDMLf1F2etL9HRL8",
  "key16": "3vuw7oMpuMceF6HuapzCLZjS9PkoAhm18oS3EcPkPXJMU7u4L2KbKZiuMPtBSxHXWVQQ8JSR2UWLr2Ntf7np7TfA",
  "key17": "4wupvW4CxVHSrQxxRjxMac2RVtP7kZ9KH6K57ySd24jy4EJZUf68A4w2G2HroCte5zNAxFCdkE7w9R6XK6tCQiUM",
  "key18": "5czDqsoZL94HMkJ32BpV5Ukm1ELZJY5qY64cYNnZnPrN3Tth29VkCxsmgYAroCEHeEXK1ztbF8a16pPvirxrsEB6",
  "key19": "2JXmBAv3nvyWRf3PNWeNYrEDthBNuL1Fso3UiCUmYvgyG6Dtw6bVMda8phs8oFYctYXPURmTg4rTrMQbeQw2S71x",
  "key20": "4rWDJo3V1qPrqcqEfCCkCAhP1j1gNCfhviafB711SJ7vzcthuBFbV91d9Yh3uvP6ngDoVqVaQvsKjnQm7LrY9pzg",
  "key21": "4p649z7zJHFVCLaqzzEB8jb9CygVau4rvHtWWnsAsWVS6PNf6SAVCnRPHZnAhJ3jY7eH4LQjswLvS1EhHyfvj55q",
  "key22": "LEQdL2YdocmFuqCiJKXRmAH7Marns8qnQhpH5V1KhKKiPo4VFFvrQuLTags8VcpS7KckF3nZDjUj38hZGVueBPC",
  "key23": "4UtefnYEh8SGhPXk7n35btcB3vLrHpuJcbDDFhgshtAukJaz8a7asnTKM7w1s77G6Pw1YAJVDoZobnMMxEQs2u1W",
  "key24": "5jt74yC226VbSCYZrdrmJYaaayg2tTGjD3cJk7D6CWuwjN8RntjDTrbSYH7RhTpnTzSaBtfCR3rCPhvoeAFWP8BE",
  "key25": "5BYcwrXyYgvKw2vggcn7J1kDZwedfJh9uN7X48eXSCws8PuHS2nof8SKaDNMwsM8YuQjBAzKjnAn4JVtNJ93XLVr",
  "key26": "3XpnQkBbGd6wVHryPXpKDyKxtP2irgMdd4sDbrfWjqkUYVCdqL9LsaM6v7PaNjUoyC8ortZ366wUMT38FAnKRQqy",
  "key27": "4Aw1w6h6UAs76Xibq1hkyVoCGGepBNYW1ESo1yjf75EryFARDahLGQMST7p7EwpBEVWSraAuUj54pyd1F1hRzCyt",
  "key28": "5VztfZs89gUHVoMKuK9BgvgWz7S211RLqR5LuqkSeFEaWBgX5YDfRQkwLitwcqNPyEgvbMNBZ4hvHij3PxnLDyM8",
  "key29": "2TUMRTSbaugskGU9HnHrobWnDYboYDbsshYWbXmT3oi5cKiqZ6bVacySqxXoM5UWbmdvS6RqLN4Xwmav1sepRxFh",
  "key30": "YMsWf5e3tusaMgr3TFcSPq2wq1LqGAyXLqH4W9aWNwQhqB57Fg3XMC3oeBipFVha3ZewBwLiyHnFM4SPbFDufn6",
  "key31": "3cSqLzBtegcWKwC7S8e7dY66aSgxNc5CsEAMKDtzrrciTC7gm3bp4yVjRqXvxtovpHW8FUi1vLdBxCUnU7BPNcBZ",
  "key32": "3wqk8rNroyJxc6nqUvEELX4tmics6occnvJprsbMWxUAjbrFQs3kczL926zcK5uojPUoHnqSwLqwyQcsBtjD4uRc",
  "key33": "kUphtCxpeiqiLaab1zUvZygPMpvTWdVh97wpRfedrqfzdzpQMhiqwtobUPZ15SMYfzbkVTpryD4JZ682oP2G8ni",
  "key34": "2L74QUQ73TC9ohhqGGNUexq4qpG1PYDC634TXxdGXtE54KQ3AzDH2hYJTmd5vyRaJ5opDYqUf45t1v424TB3cfbB",
  "key35": "3N8SLzwtCA5C4TGykazVrzo19DK4CamBTgEhquDRV3qkM9CYQmumyJNkPRPdA8YLtpR9SXbFCcedwh8kMnBqckHD",
  "key36": "4Gczgb5XoM4Up6sSkjd8zxXxG9ypYGPGSNuNywDNhPvcYm1BJUjVRRqM1uvUBQKQ1DinxtoKjSW5CTTD6hSqPhnn",
  "key37": "2Y4cSbqSciDMihhWEK3bjn8w7krNHUSr6PLxHunxeKgmLQv4FC3vx2DoGXDzjN2a4atoQgHPkcuKuiNkA14z6S7D",
  "key38": "4z7Y8c7HXHSQKsDVdvK8dm4p4B81vxhH3EqQvTD4AVRqrEEaFq6Eyvfg6oYnJ7aw4sZNdGdF1HTsMXk2C4Euqhqh",
  "key39": "3CD5r9YASzWDdDKtZPbjK9r2e9wDkpZeezjSDow7ps16L2hbW7vQK3c1NGcEPK3VJvamBzE35vNGPCxWYoBZmvQ2",
  "key40": "f4v2qq245b4B2Yy4eJZNS3GtX62cUzWWtQ1W7MnEsXqnd99Xg8o7fM6BDjP2M7ur1eDqqfqwKXJsgRLNRWRsYWr",
  "key41": "3vq1XNCwu5ddfGCB7NEUaaH1q9yK9v3Rk3EgD92QqH9ye2QKishLePSsRLPXVWGAh6mcZp8DsScB61ok67fWQFYn",
  "key42": "2RKntDrWUMktCZd1x2NWsKZm5X5XxomCYM784AunY1PN7jTGHAJACa7TNtLMoSJU866oNcqiHnVZ1715CGLB2QCL",
  "key43": "ETMk1WiRApmTijzac8AxetN8rEAUcxyDhvH5HjqvXxpSZ3Lv2bpKrqCCtqfPsi1UnrQcdF7MkGbNyeduN8KyT6G"
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
