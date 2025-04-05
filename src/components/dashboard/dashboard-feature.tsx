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
    "3U5iXUGtz6tfkQytTmMZ2hqJh1g2ec95GncFngCvep69zF54enHeQGBP4WSMU5ugSuGDfKtkmhVDXRGkE9Ne2HmS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bnrmxWoiJnR94uWADKU1BkiL4n7idQ8beDB6FqLyJYQHxfMhGj6ubNegqHeZbRCpjfg5h1pSvrrW3SR6LYJmFBd",
  "key1": "63qwDVXJGNFVKah5GNjzynquiKVUPTMyrp2uUHrzEmTBMqA9ganyVFpwTEbBrE2v3jKSW1RtHXgqGomEUrZAyPdD",
  "key2": "3LcJ7aSQ5V5gSZT1hBR4qRL6oVurT7M76pzWi4MTA38UJUFjNDnQMtGLjgCEjV5ArNkV6zFH3dR63a4PAAChUfNT",
  "key3": "Lrdm47A16Mrfp4ZK914k2t31A5GG5ix8US7KFgWmmnbTEimP3dbuU8wJLZC4CMPfkYgCbi92P5spr1WdWzpaUPM",
  "key4": "53yB1DzeWwNPR86RVkGLnnhqNUkZzNT9wGvCeiaMYihem4xT1HThoSq5wgPwFQNWSMu1iMRkXvL1rCWJHqKoD1pD",
  "key5": "5zMsKqrNcFkyKND7WuYNtTyV1JrVeiU133B1nDXEpDVe48pfLS41iuiNs7XG3RLhGefrLyEvXhwKZxMhNoFZncKq",
  "key6": "4vbyjNC75bq9LyDMnPp6ppUi1k9uLq86FEwqj8ZjkL13AaFM6JKVHQFRR3srNAhboJr9i8tw7odhei5RbUH3HCVW",
  "key7": "5UsyG3YzWbXez3zh8z6roemmPQVfSxoSqaa7qYx9xy15tmjUAeWkE8nnQctzShex9uxoYapS6Zi29i86Bt8UHdrq",
  "key8": "3NT3H4847AYFGBr5578iTo3pcz1yxdSsfT16dEGqJn9gjQWzqs4YkmJ6CfKS5eaNwu7FwUUPwGfRV5ky1xndkg1v",
  "key9": "2xFX4zawUyqaXfLkLjABhtPmFwntUHQd3ZXCsZWHHKD4KLSgV3fABDoNMfyaCmyybxHPCt7uMxDFj6hC46LnJzGu",
  "key10": "5Lfy3SkTX5Ki1k8UDzcno785d5dE9CFsgvEEe3wdKwCU4NRFs1iQhqK9iZzJxTp8JF6aB2cCRaXyrpt9ptWjTwBp",
  "key11": "3QvfxJz7iQ6P9NiUMEDhgGvexwzc4k6WLaEwzYGtUZ7e7Xwk4cwhmAuZaqeuiEcTXGHcZX6H7FgXUEgEGjdNXhPj",
  "key12": "2BG62yJNv9uNqx95VEMKZeUyvkiuo6M1KV8yG6kF4sXLZUpAK1ojuEeLNH3Czm5b2JUpT5gQph32jeCCkUAXoNSc",
  "key13": "63d2iQdtQvHH93PmC8UHZDCDCXZkenPYuQVMUiybMiX2CesyfvntkRkbnNjTGjQkVZfgdShuVHKnAvU5KJuPeWiP",
  "key14": "3j7UtQBWrtotwR8WxmA6r3VJtK6xHMeG1pc738KYV1kaLVhLacVK3m43N1VhQ2xkT8RsPUZBusfY6YrpcbPvEqsw",
  "key15": "5XHvq96BuxUHEKydNJuPdSUMCEgYA9A8CogFPsHxTW7YG34NarjBJuD2a4NMYnjVidR3wEL4BX5fxRj5LeD6fRdf",
  "key16": "5B3nfhnyJgACmyWgRCQR12W6Mvvi9GykmfTVVYHu3MQqXuiCPScp7cwxftSsP5VtN1Bu9u1HushDhJCHGQr2UKm8",
  "key17": "67gzzmzRDBHYTLPv8QhB87SS36tSs13aq6RwxsW4Q2VzAnRDdxzgRT3nZxVsNz5J5FDYn2586Loup6mvY4iJbzrb",
  "key18": "4RYsRHMcjCs1peiBbBFHubg8c4gihcb2mVWeBHuvsTzyUgsQ6LfiuHab7VDKZy8qdKCu3J3xsYXaG9r9KY9qLw8W",
  "key19": "3s38cRgkwDSevzGcVdYRthtYJNFWstAV9QEutHLVgpMvcCzLvAXooFCLJLkUxBQmowCwr6EvMjo7ie8tmtUS2Dcs",
  "key20": "JRrec83X6qz5xXATWSgKJR2HJCWtfoMCLT8mFPLwhkppNBE4DSHJc9DCZayCPow3smEUh32XLngTBzuGg9d7yne",
  "key21": "67aFBK8X394oKV6qpnvCBCfaChGktPAMDu4jWvutScaitkXcWt8qiHn4xNaBkhiL8a8214GLadRZCStJrA3bpHZu",
  "key22": "e4KnaYU7t7xxsgn6HscYDpPB38Y2W7a24bUw4yTvXdkfgX3eMkemzLTbnj6ppWM3dNfqACRQVtGXj4sVru3tZSf",
  "key23": "5Mzkh8eGqYLivQ6jAt9kTU3Ntu8ZA5sw1w5byFQYoF5a8GQf9HgRB8fnNMe9T1oXRL4uykp7HPu6zjKy2HiCSN5L",
  "key24": "3mjo8pbSu8bkrUw1qF43r3MMYk1AGbtyndZh2Xi7Ao4ECYmG4kFzue797qALSaUhFFU1Wk3U8F25kMUM6ti6V7rN",
  "key25": "5RvpDKAdbeG9MfF2heycqxfjSdsPeyEDeB8Vw77nKhgAudJDNJoG6LzYSAtvMYQXPoZjj7DXSZcGZ2RU44AyhAGC",
  "key26": "3DfqYSeNTuAhXJ25DSuGYdSRitNvYfaCHG6fn2QR5TFcHzNKvyFC1n8TtuuZAh4dLzqvQnu9EydFcooDPYs7dFST",
  "key27": "4wZoPax5wroC2VXY55EBHKHCEDChgp6fhyZNytDyYjDopSHDiMBGZgsfbR6XpLy5d6872NBUx71ioW3SBfmTVfEs",
  "key28": "5vM34LbKL1GCy3m4x2t93RBUa4vfgKqB7wDuprQiFFjsiGwQdn6ptf58av7ePxKLdNmqcPErYoLfUdRg5KFPh67T"
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
