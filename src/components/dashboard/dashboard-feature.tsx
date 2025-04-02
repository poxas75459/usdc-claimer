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
    "5dmGibhKZXdt9fxUHnSHhmATBVAcFMkWGQzoGHFcLmmTJruwE4VuwrvMMumMrRQ9kB5xxTL2zopsxVKD1ACwpQLn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Yu5FR3kbYQxCrgAPEQiN4cJ92Ux3saWc8eKb7jisDXeZ72sWZ8WPFJRBLWKb7iFrNw5Bt9wWDs84PXuA9oNX4F6",
  "key1": "4btwSbP87mvM5WmvRi2cxxVLoEWj5upfSR7eAM7uM9Cgt1NvchSofNFM15WccWHU2wfXruVAoXs7r3HdzBwqN6jy",
  "key2": "nexoWpbJYaz26dKYSGbrV3c3xvQGjgHSgsMDh8najKJkZXjiFwdtdgki9HXmBS5qi8VyPVnQVqBCAeoP17dQcz2",
  "key3": "3wUEdQ9ULA1GKhgrMXCthGMDFAuXPGzNXiXrDcTHMyZ3ZZ81b25w8esPfZchYW21hE3AmxopVcj15U6nVLMknykX",
  "key4": "563A2Hw4BeMUuZpcb2i884C1xkWNZQBKiC1bWdAUBDyEsskXMTonxS5JJPq15kCiuKDccQfTkNsGbFY9Wdx5S7qN",
  "key5": "BJbFrP2kLYkQz99AaRnMJLvehC8cJEaUCMe6ofZtBaqbR7Pc1371EwJ1PBEvY1ot9aAx85KTK7VVaaSAiYcpfpV",
  "key6": "4hVYBn2XCNg6T8vwJWCppq86eNQvB5U7gEFidobbYXA3Wor3gE3atarGi9dpGVdgaNA9JdjnSGxpHYgm8rnBMzvB",
  "key7": "5KhoLBusCGJuFk5hEHcAVbYpJ1mKksxyGAz7EeJjqpTEjheMZKPREAt4cHsSiU5cQ9GcNAwtxhbFgRCaF8pqjLBt",
  "key8": "3ieUjpv8zeh4srP1gmUnF3g4eS4EXRafWnFzrZuYCyKGcXrKgP48DcHkG63pywiboddwM4Q5H12gHry1Pfqtjuie",
  "key9": "2CkcrPEy4jNKuf3NZiAsKqG4MQkvwh5vCfkHWVAcHkWBfh3QCvM3gw3nYrXnXqAncE7FjKNAaNSzdp1Lwhp8hV8q",
  "key10": "2CLfw2sq1nohqYrWtspjnzgZ7qZiCi5wf7zhMnkocuJMboVyDkvRyAWZBh4Y3M9SNTPoaP7vkWk5ikodpvqB98UU",
  "key11": "3bqDzCCRaWJDELhJLkdH76V7ivLFr8Jkkme9CBxXp4u98QLqKWQDRCMM75tfZTudSj1NwafgubPySPpE8RVwxLWs",
  "key12": "3RbogFEj8x3feNNzjFesXDwUAQ13pKHXXEz4ABB4jKUz6E4hRQ6jKFVg3JagTzLrvD8fRyNv26eaRGwu2L4SnY5A",
  "key13": "3p2zh2X2jp4SoFjZfk1je2qjzQg2944JWdbogpqSqg6PusQF47BwpcrxKBmmKFusKc7Kj1b4qbrqEYUrpgNuZm6s",
  "key14": "3F4mFwKy7xrwqW6bBPKGTXKcHhW77w3kHLdpDVUhUKf89VjnEqj5AcQvCrQpEca4FpNzJuy2oJJJ4d96o1jmobuv",
  "key15": "5qVJzvJtRj8eDpPgEAmxnhTWNef3gF2DBaHuCVwPcHFZWQayPcjiormb1FYrTKX2UZ31FMneniPQj9den5YyPDbU",
  "key16": "42F8eJvM9QcRHiLo7mE4ogxQsaNghZiViSxtVwfd8jUKnjehxyBX2T685Spxk4r47ctZKomaskVsXbLbf7brHkvE",
  "key17": "G5HU7pC3LWqyDQE3PFJCNTS4VaC6YbD59cmd3NEUGA39Y5fWMg89sugx5f1Nd69kbSb2o64KHrTJWrGUND8sNjs",
  "key18": "yar3hHcnuU45wKZgJgMWWoQXb445ki7nRDbEs7wh4UPaF3HxHxxxVzG121MK6JbZJHt6n226jAd9XQsyecawkQT",
  "key19": "4utsXbpXRdywuZJRokY6hCZrPMh9d97Rto9vfy1p5HYjGgpySaTY8hdxDe6SYeQ8ijYf779ja4FF2ZJGyqw85ku3",
  "key20": "4aPKXr87HtyfLeNGYJmqf8GPxVM4ScgyRJ884EkzHVZ1AG2jcqvbK1qrCb4xWP4CoGYgYNzyTDATyYsNLVBrqDgK",
  "key21": "2seVsvpASYdrBjEXRLskKVgp79Gd3DxVGu1VcxhjA2FnZ5uRVLL3p77mH1WQLesNNGq3gq8Pbuy1Ve5ydEBcZjjX",
  "key22": "2kByFnLseHgpxeSh3RiKofegU8fts3VUryWj8ae9krfqua16dExSbaHnakiw7Vpu4VbeCfmXH9tnQAfjeSmezZcL",
  "key23": "4dFgbGeU5TfBLSqasdAoSnCoVpec22ynYTvURNGLmcCUVWXz1H4s2mm7VLz7RquhKuiJenBdjr4nMLJhystivD8u",
  "key24": "6319pUdUcUYhFzAbupoXkKNAUQHoYQ5NuXkJ7RP1BB7Sw5Ywe9HShiYJfDPwPe9LbYAC16oJyaeTM5xJDZvZjwyd",
  "key25": "5qZKiXZcp2VaKoFQUzeDCCdKiDdKrdJprN8yjwNEGj4YRKWbBfVWgd3S6bSRa2Jwnd8wGsQSdzHEX8VKfNGKArm",
  "key26": "3JVkCGVcvA1uc5xu5izxawrrUczGgg7yKydvuvRGzyHAzjDVkHUVUPJ84dRmzJZPAa3TkqJBA92nHhtVBivUCjfk",
  "key27": "3YADFeyquyzccHybVuPSMSfCcB82cXe2AeJjjwgRZZcYzv2tQ5if9XxHGaarRqrz8gEvYr9TiP6oDrgxq2GPwk7",
  "key28": "3415X6n1Bs69h3GnR9ZT9DCLzEsN2f4y3KYFMypKXFLB1KHao21RCFN68WTmMf2r3WN229wcAFhYwe4WXLtQKxE4",
  "key29": "3TKC5iiWnfKEZbzvL5eswjFdVG6AwrzkAGGUonxmDGGe6TPuWmjoMD4uDriMp8NR7JTQx9oq1gCMyEDgN88Lc93Y",
  "key30": "5JRtiuu64tNAzkJGV4Tsdn69Ks3fZ3WxX4TtBa4KJvHZQWiVvojavVrvvPduWPi4Q9oUnmxeqy1PJ6Ghmj4yWdJn",
  "key31": "pZ3fbaRVUmmkbzsSVyhddrTrmfw8D3PqW9iPpoZF723gYGoXyecgn3gjtRZk9mPFr5f5zE5TV3LXsaB6SDRC5PY"
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
