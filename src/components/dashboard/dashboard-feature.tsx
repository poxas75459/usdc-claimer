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
    "213DiJzphnKkHmi8HdSUfsfjQqC2vTyFD6v2UWZ9fJgGqkDsSybw21gnSi3JcopUhRJGCB5zmXJTwnfskNQMxupJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cSCWeJ61D1w7QCcFLdSWYLWk2BRqJxfPU968eBz9rEZy3hb217dt1Q3psLq1fN6diqhBq4hBj9b9SAHot1Em2jU",
  "key1": "3aZGvtJgPyxT3A8JPpjeeDTJWM5ZxNL8Wh3gpw7jrALqMbjUFFeGWSTgkRbUfKBhymHGw4GVJC6z8nHy9ajUa6go",
  "key2": "Eq5ZdXk44bD1YCg3gtJkzVCYb7mccyP6Wad86R5D7QnmygnYz4U4a6fsRGH4yYaRcYvc6CEoxKPFUVhNLpLwEpK",
  "key3": "4SPNR84ZwYhZcr19g5bPSW5QPfa4r4EYGVreNT8pwuhxoEjBiNpww6FYVqnuNHz8gL88DpTCUnmkHrRsFYkWAYUn",
  "key4": "5fEcA29kVB9q6hebwkgbQhkEKihfKaG9u2etta7WB38GE7T3cmaPVYNN5hGnwS57aMVXK7Sc8yXV64DEtNtFwa4P",
  "key5": "23w1nwQLCUxs9d2ngrwdQCcvgyGVDBpzDBiqihxCg2PdFip5Q8f5FWyoVb5AmhDRypecpsY1JhtsSZa3ewVSJWse",
  "key6": "1423o8UB8acQxjZyszY5yKAYeMNtYmUv7WbvZKvUCZ5UUHzVYTR244p6qp9fZ3CuwVPVj1ESM8yF6evcFnqtxtz",
  "key7": "LnmpNTpWe8HSpMmxr7D3NSsBRE7Wy4z4CA5EHDEZAW7DDvwgm7YM8mbfqv9KSEFKWsioMkyqTjPuC69jT5DP4hb",
  "key8": "5hd26AycYgT9b52TMgJ8PUCqaxb4Bky1Ds6FPFREzFyhuZy2iennU9WQ2uhyLJvmVibeYBPvehCxQiYz4Y1Xx4Bu",
  "key9": "3BZ1FEX4ToZFpwQk7kfBEoGYsrBxYksdvgTULKetzCTN94sr8jzWWbAFywy24VdSb8AFGyMx4GamhR7V7URg58TH",
  "key10": "Em9j4vvTtWwAE7yUrzK8ruCphfRqbx4hTtHdSRAEHiKQLnCfpY2Q3XB9puGAoC3ker99rW8iyJpEQRKMbCWuSpm",
  "key11": "5K9XeNMYkQHdVjmS9f3oagEhBAiSUA59HUcjptLbGmLc8LxFKVvWPf9KBbDGK4j1ebwHdv6MU7UFJJDzgtPznwuQ",
  "key12": "5Kz19opTzMp9qFFSntuxSGp3Ykf1G1YmRts3PizL9ctGEd4CeXY9eohwwHgGfUzbpWPb3FX7thFokYsDx47yq9Cg",
  "key13": "2CrnqSkTmaY9iVM3nmubkSEamJZZ7vJfFXLymqD3gkM9FQn9ryz8cA2qL1dgP1J6jFA2Sgd8YZCT3BycXfFsW5wi",
  "key14": "2MYB4UWBA6oNSiSZMTtKQ53NmL8a1Nqgc7xksGJCUV8agpw5NBiGCS3Gj4apNbZM7vMiFkgkf9H4zJDZhQwD8VC9",
  "key15": "5BFDmQhnEYZnwzewvxLssHjQEKh65qmUj866Se9camJpQrWNGgrPnCCSp6XTuiQyecuFbzZ6JQH9Kgt7P3B4rQD4",
  "key16": "4WA4JDLLzhQXA2gBWZ8Nku9hTKj1QNB3Vejb8TF9YhaxqJ2ua5X6SXUy89Ym5Jkc1q2Nkbu6DNjaGeFU63QwDudG",
  "key17": "5bsfnMAWPFFZXCoZCznRVhi3jmWLSZ4KpBxQkPHjxxsAo2BwKymtvNZBDNWk7GHYusc9CXsgTdEBnpiEZqVmBfw1",
  "key18": "Shwug5KmtynRg29T6hXGvfn4q7vn36SL9btd2B17qdYGR8aaMgLRfBy4qhcRctYkxzJSEvVPrZYpVJT83V4rbPZ",
  "key19": "2Bj2MYn2398tiKb6BtMTFcMuEoJWT4DdoB53hJZ7TpRuNUjmXgaB4Drov1nGtKNWttUv296ZY9Qe8VifkmPvC415",
  "key20": "5UWbtS7PQVkKDmSmfJiPez1R9b1coHLdC4tdsocBrwrSoccdBhw89pEKX8UDjLMNFJSt7G3u8KD3yQqDsLqN2ct3",
  "key21": "4zmemhrH18ByhxyNSGGDmC2D75rkVUBdbJugMRg842HSWgTRp1V8PLmZMfZSyG2NWfsWASGy3KQzeYZTB8zvD7t7",
  "key22": "3KhZcqEeDJnyQeTZgv2HJ1dcU8qvXphT1zcVYQZZnanmcEAT6oihGgtPMcy6ryYFLk8EaxMpFd5tVX5zkqK3Fye9",
  "key23": "5CZZ4aP3XVPEZuKMQAzvey9s2fPX7cfo3PvLeVbL28x2SmSbyupFi6zcTedSvsKUiH2fvV2ZoVNDA2tABxRDEbw3",
  "key24": "33bT7ARWrsk9zhDMJvp4v2RgW7C7n9TamCyCBkcHEc48nH3woVAvBf3RBYk6Zi2ZQrtd6erPPTAow1Qc3a5XpB2R",
  "key25": "2PxbvicJ6UDHv94DrRHW1Ya2keDK7NRtoCzcbSuWnPqgLHseLUcEb6A8gzeY1DHdk2cSLVKQk7XqrtCMQU8q4ypB",
  "key26": "WpLKdcdDyZXgbfvtijXiJqRNtFkNokGUYnKRvhQR9aiFXYj4BtKVusNw4i8KZ3u7r8rqseaTeHC1tTaz365NQwb",
  "key27": "5sNr39PXGZkVytBhNJHqLx2hPinjWkgDLgcdsT2ypgor8PFj14oe9AGuMjLExxLPztXcsYnq2QX39EAoJFNMGypK",
  "key28": "4wGsbXMYHjC3db9vZcqMbj8hL3uYaLmuENhJcEQmpwoV5iotKGB7D83s3h8PWqiF6eStcKff1FuAZAssCRgYFsSz",
  "key29": "25TRvRJy7hCQ2H9YwrYQRuZ27KBM38iUE9CE2HP8Q3PS8Q5M8BSocGWSBjukZZFtHok8ybFEHKsvjxY7dNusZoTA",
  "key30": "4yZwb8P6SoqevkKNP8Zo1QoWVQw11RXSvb7JwBmEpuCs7m4tz5Vf94sxVz1Ku2xHTsqZZ7qfB9hEKXu7Db2f1siN",
  "key31": "mPumrLH4JNjcEDyKaGXfQ6RB3hkiCCVY57fSSStWcKS9QAPFGft7yQ4WvjTycx2acbXQK8YaaYouARhPB4r25Cm",
  "key32": "4rzJrVzLihhkZtrVfw5byG7WsZNaZ2H2kMJQbatK6gjZB1oLiLpR9sZEpmVktxpkm66qReYq8X6aJVZP2zzsSRUh",
  "key33": "47RTyFwjEEuw1M37QHzGvCRScDNxcEcS1AHe3VfK961AnvMd387u2xsP4hSBBZ7MByjdgHvQ91qGVMupzJQ9vp7h",
  "key34": "2BT14SBsYVhkb8fwFpmyBrzgdwL2DvZ4Lrv3dGujfXWgSjwtLTJB2jn831sQo736E2sczhha21pPPaWj35JQ1E5R",
  "key35": "39LLvc6o3vsYTNnD1X7zGcBqzXmVNP6UTjGwa47QZx3K4yyC1L7EJBUpvmwa7WDftR8g5QrcpvU1Wumm4VEh48qm",
  "key36": "YoQ5Ti56jr399w98Tnurds9UsTxGrMKEbgn7qkrvJ6HKmDuNhCJfxVwBzc8cAg3peJ6zpi9PtQ9z4R5FiNfye4f",
  "key37": "4jo9gsCWz9orm6sRAib3C43sBFCCqjabuvY3drAsyxFzMtsfkGJLf3jaZecbQTFyY7UX3eH1TQSt1oz4JWY9naBH",
  "key38": "2uRKvSfQB3sarXEkJ5ffBSRNfAQYwpupqKjjmKSFZWzMr7UT5yHJpxeGS1iM5cbvymMazNNyHHbws7KUY2BhRUTQ",
  "key39": "2cv9RiBsBvb37PriXpWVjwFiqwQwMLAYxrzS8hdB25fLpc2H6oRJoVbHtkkmm9Abf3qB2RLPHATsz4Z2rfS52mQ1",
  "key40": "3n2aipbmcqNrnvvQeqgrg5jadnDTRZggFiF8mUk91vCqVrtJZkoVPfzwuzPYRHSgFy9JaiuQUaDjdJBjXKtghFnA",
  "key41": "MwUrWNaATGgHS345sWfPk33cojmA4FwDcziNQ6fT4cJYf5MHXab4RYyfELyXsHcuwiBZCX12CpmyQK8uUUWhPz1",
  "key42": "4wekas6cu5LbHrXWrv8ukMkgMmrrRiaQMsPypdSETmRERWpaqTzEZS3qxjGgusDzeUYEET19ar9uBEBfyEV71cga"
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
