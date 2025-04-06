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
    "3gkKcjuhveGbeEHToDdZgX31eqDXbkbssX8hS49EBRNs5rvNB4xfpfHzXJU2EwWN65x8sG9ELLddvwom8Edyoz6e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32sYnuExLhFCzd4nnKyL5CyYBpUUAMsNxGb9uGADPCtjRS6LYW7EYVDENvt9VPV44hrbsdRr3xdHwfA3vHjvnvik",
  "key1": "4RgGcchp7WgDc9W4dDHJaRvq6C9cz5g8r53rjQQm1iHCnWpSfomzAbef1PcMD33jBjZKqfrTzn17rs2nfGPX15Yv",
  "key2": "528F8KZ3JfxqaMZrxFdyngypRPgJVXRJBnkdibg6wSdnhZn6SRNcKuRs3Je7z2wTdTTRe4Mi2KRyxDVWGYVoL7ai",
  "key3": "52eDkoaz3fNQeRzFjQ7cJoDbVp6FzLHnqoBhY6z5ANMpeHpFLFPgbaKoH2r2NVeohBzuew2Yhma2wfQnvn6Mvm4L",
  "key4": "3vYCXLVTVqkfmMmnAzYhXNn8yjs4SrrhgRva2w1gWQXrnea6NiqZSc1Xds3xASReG1SoGisEgzhv8nZ9stUYakog",
  "key5": "2PycjW3ZxPn2BRRLVaMkfDw5jGWcXDcPNP1JqkCUHCV6x8YSuHXLifrH3z5dZJwfebRyhjeBGA4B9wpXM2UyWiHi",
  "key6": "3wth7YvNcf4TtiY1bQvqqNc4i8gYHLM2hATYg9wA38aQJ4Yon2diMGinSu1adhdujm9R2dVxuWzAUwLQRHvXwmG3",
  "key7": "h6mswhMtrT9MJPCg6Lsof7wyTdPkBpvJqh2wJ8pshxX3eabZTkDYFh8Y1Na6RdGmcdne76YAnibwtAJMhFom3XR",
  "key8": "6QwJX7vXEJPH8QRJbZScoN9moBHuuTvVaBq9SutGE73gn7krBcc6B2faoN3ioQRueUcd3EqPjJBRHoGBFnw7paG",
  "key9": "3fso69ct4FmfYaoPfxMuQWFsbJQPRaiaxmA9Ff13vE35NAQfBytX5oz1eW2rq3KxfZjRz8VCUfsoi5dk7T4DwHhX",
  "key10": "sMQWkAqpevcrJeqTWWb1bBnei2iDL832iZYQgfnsF7nvf12n13prB9CuFqxamsHY1ueKH4MaydU87oU7sjNG1Fj",
  "key11": "51sbpbjybhMmvsV5jUZFoGZxDB8vMhAReaDmjKrWshjQt7Qw1iiCccahDFxPMWekg1jWvF2zgBVmAFMgyS3S2hnq",
  "key12": "4EH3AKx7HRH6u1MMkjr7SARxNtb9mtKSEhXhvGjgPno4GtDpRoShxPthaLhSVUHozkqWhF6Sm6xLtoMPi8nciqn9",
  "key13": "5tHLiQBNYAL17BYYH5iTJeF1cf4KfC2x8Hk2rx19gx31UscF4QgBg54fmf22gYxT5j8xGDhd4nY7EdXauGXj1pTf",
  "key14": "GV2RV3RPTxPp8jtao74MTqKvYXRq8nwdctK4nGWNoSLhMJ4YPkZkTKuW4qrn1A5c8aDS8QF7nKWWYKniyArzXqE",
  "key15": "jKgNX2YmSS4qDQDVznVTkByDdzpq8G2irxEQiTjPtyXzMbjkURGNyVqQhzuv98jyHUvdpxR6SW7oYCUgWD3kHEG",
  "key16": "2DUK2e1igiKi9KHkuzBtjowo7Fzo4hrUhnYsYoPcMJWLF7SNAFHGmvyGJNseZo3XzQWY65kFPoSpAKV3TJQSfbqW",
  "key17": "35ubJhbaRJaVrkvZXAicex9YQDWN2Yrb7dLLsKLjhc45QDoZDSNdc7SHfr7MLqd7vkUK3wY5ba3Tv3b6rYE4Efwo",
  "key18": "4TNpebwn8wr5ZCGpELjh7eotwaqniaurspyEVY56ETKc1NDTxZqn5A5QZLaxXmTa4zePzgFavuVcWWJwUt9VTJqB",
  "key19": "2eJo8xK1HS7hwLu96kyDgAPrcYX5hsWJMNQZdgAQviRLALS3QFxXNrLcgfjkwtAmNMEXBmBGS5R7EnWu4rwcTUWi",
  "key20": "62uMsMPa95sBMsSCsP33Wrz1Vasx52FYewdHvpULPWrFJRZDJRKQNhk1WTWfbR67md8yxRR7FCBba76h5vNHmXoY",
  "key21": "2BN9srKNC7vadmfp185zudb6LYrr5cD2CJTxdJSUW6YZs5bLvwmEpDKneJ5SFY6ZnSF4JhudZuDsbwx6FoxEoMtc",
  "key22": "3MwvTJSxQDg9vFoFbAubzmZi4r5611aAtHRf1kAKpf6vM9w1jZo1PjZq7NqCLPgspPqxgTXhnMZrAe2BGuzcTU7a",
  "key23": "4zeYjDRoBETmAHvySxdKYXkQy3jMGqHTWwjtcEFLky3EaJVcvtJybh6mmdiGyjm19eQNAdxuD6DJMYaw8wVS9oG8",
  "key24": "3KKi9dunW1FK891JRJvCPNEEp2Qmkv6w7XL9ydj2QWDvv52BTXELG88VJMUT8TgauMSKPFZHEQ2LRmHDtSV3zDqo",
  "key25": "YSrVRReSUWAmHDcTHteL8KfP159ZU3gsspEArK7pTdp5oW8gUn228EjMiP7ruJjfNCXoDiJRLxECXsyMF9aprDj",
  "key26": "zRTU1CQAwC6pcgMhdpsKd85cd8cLd7rHcKdHDEzfmTDbQESWmjGe9NTVR1VptHTJUxUHbCEmgm8qK8mVj6BKuaS",
  "key27": "2mp6Vibp2BMLCgEVCEpBE6FfvQocgU8zkPeMmJCmUd5cCEZiuym2bd7Eu447RSruzxuX7dGGpTpXjJy6L9qQULXK",
  "key28": "3Gcu53DMcfZqXupDxhThdDV4d3pbnSUdiHbfo9AEDt8JZbTM5bSk9HjsRrVm53Zrptm9RDavJRDYqHvwAvvVgEPT",
  "key29": "3DdwBzxHDn2L93Ec4BTMfk6onRsaSU9N4SfRd9DBv8R5oYMYYH99cRxNs6BGTjm2yTfsPdv3fMhdy86nXgv3yo6F",
  "key30": "5Ngqe7kF2EEB5yHagzGZ5Suf1baeT59DKojEZ9PqFSMamekdi4sK7TRWiuZuAxzDsuKC2r1ZKEdsQ3p6qBRPaBCN",
  "key31": "4gpnFEpWWRPycbUZtzGGaBiAt5rKPfH85KLs7pBZA2RpBmptgzZhDfCURPhFmBDegGW2Y1RJhmTFwcMKqkAV6Fcn",
  "key32": "34wj2NQgtAmX3U7Po26aRrnYGbXKqoDcfimk8Yu5NLvC7bzzTAWmky9BrK8GiBKRR3mqWArH8eQqA11wcKoXQFaF",
  "key33": "5Sf7NkzvpFWrTRt99EZ3UVMhDNt7wX7RRqvh18ETeax7xq1CkzMGpnPUg6qwmFWA7d3k8Zg2GH3oDvVh1oinhU3T",
  "key34": "5pSaw8KXYR9g7XgLXeq9iFCBfyURN3nQ49KVDA4r4C3XZCwdQxNFYZkApuWtWF4muQvSi7AzTHKXUz3yQ8D6pASX",
  "key35": "4zULvUgNVgLqkDLGNSvXJTZsHZGswLdAxefzy92WFy6iqUSg5ZXyF7eMdyMSyTdoHY6wtu5MCwckSjwz7ZMswxVw"
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
