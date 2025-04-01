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
    "qk2MwzzCEsX1zMGgFDus4jYXvTsriPCFQNpXBJAk9kDPRmCDSjBgEaw2CyvVNF4KWD4zKUSV4ZQcCAkLSRjremJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5b4YWWej4VMNxGJpK1DDKEmy9Yn3vHWhMmWRScCJhgepWxqJHMMSnqWGpHmNPJ2TtEe3FbyNUVobacC2J3c5REFp",
  "key1": "eowyR3do5R164eo3g1whRm4GBA2MwoCF6cQjo9g6tskgWxPCa3iQyRsm5AnFgXrBFbBxT6iu6cQvpfqsbsmfoKJ",
  "key2": "kkfAL5WzKEVW7GUjWSpt27QCMoRqPBZ4t3XY3B2xrBUdEN5RcvWDPohdaDxjpgjrb9UWSeFL33x4JdJ2oNvNtXN",
  "key3": "f54EajhCVxVAJfEFXiCyt7721Gx3dzqGe1SBhpyz5JAY8Fddue4H5En9ytu36y5vu95mhMfYCj8M9Rnw1M33o8J",
  "key4": "57ExF6ErWP7kNYhzZmd5dybS2bRNYUWtr8H4bs87agVQnXexTHe3SicRdRccCt2yQuJNpKcw9BNjHM48DBXMy6q4",
  "key5": "49PVyNe9XHEpnCxamEMwLsgbQgsMWTLugg7B4Kk4UyETmHdkp7hZc9JqhELZtDAFd9xinPYhcU83aAp8NFKAGPT1",
  "key6": "4xZfxFbkiHCmy3RhcVSHQuQSLTKtZfT8thkut5aeGa5noLCLu8k4bK5bhdECAqygxsycRAVVDeECKn8CTgHGhj25",
  "key7": "4jJSgB8zr8vjyggpCsN8m6Yyc1gvXqAXJ2k4FBrzxarAeRW3JSWKs3LX6Pm27ghHL7ie5fWRsJML5LKi3sX72nVw",
  "key8": "XDvZqYHtk3Xv1XvRNabGjHoNvXXRNFG4dnU1hurAyymmqg9gYvTUoQah5y8MJxiU5Q9RHe8ARrHMGhkMdv5c5S1",
  "key9": "44FURNgTQzieE5GgptvX4qjiMijUvmVVn9hddGeK4ngzQ1dAbj4Bb3Vb5PrrH95Rns8JvsRypeqVkPtd1LddTX5a",
  "key10": "3Lf7E3YgDRkfmsJiEZWBymkySQ1YUm1uFmUyaN2mXvFd1yyLWfKocHtRxVNscb4hyXaEem9n77xMK6BfjXrfdy68",
  "key11": "2qYSnfEsSJQd8F2WsVV8hNqYpSkKL3L2ztkXK198jncSJnDtjpRy9sg5oGoUqJgBYBDKpS3C6LPWwF69rs2Qbjkd",
  "key12": "4rnfRAiFqBhseFazAQ3ExBGwkqfcC7s4YKDocDSWsPhwbqveiDjES1iipASo4QDCszYn85TXQkd1ZHxmpghqgA5n",
  "key13": "UfeCB6BZTZd9fWVpFAxrdyAG45MeouDKt9LUFDnMxbx6HZVbodENJH8YqjJn4WVy6dmJd7GxQT6WfHyybDpjoLa",
  "key14": "3k8TQxuy9BrpCqgZyDi3aA3r3QemxPpPtjTTpT2VjyCM6AQ3DCD15ZjcZ6wqJVY3KERXTc6vcANMcexinHGcfRvr",
  "key15": "5GneLouEcfG34fevGhsf2waYep8BnS2z65nJ4EAfr7R65GyX5zR7bHGCczxyznJwkbgb6KanHtTsRVHUZuR2Mbrg",
  "key16": "48rPLLz95DbS8XR5atmVN8UGQJsmz4eDeeTkSBjMczeZgFiWVx9sWwM6CQwNR7uqcHt1CkSWG2bqxzQDNQnkuyNQ",
  "key17": "49N1g23PF5qjdj6zRz6goh61m7ZHPGcP6r1LS4ThfGpHZXn3QYJpfGUMSrhhaiupmSW5VG3ap91h9jaY4C2AyUxR",
  "key18": "pYL4YMK4FSN7KhaD3NeWgbSD9iCHQQMEdn4oaPvSh7EVbcGXNbisyFm1Gp5scXixUKFHD7e9uo1qacSoxjyRNxv",
  "key19": "2h8r1CSmb7UzHXRPhAyVNcMNzQdQCAoHQS5YyBMAKqwapVc7ZgLNbAp6x8PzU5Jjg3tMPK8w364L1FyBRRm8EnsZ",
  "key20": "5WJkxiAVER8s65He97NGqjGdUQJCfGyzRw3ZcCPDXgZFb7buormqJgCSTxDJvF1npvUyqEftmf8oKNkZJgqtFK8w",
  "key21": "4KznneTwvY4GEYpf8eQ4CM5BDVmsT9fHwwRGahJ8nLoK61eFBjW6ax4zQiiUMSjUSbTm5ZTZGdKYB73t7pmwbJ5w",
  "key22": "2QVVWcgUdvhUji8A558Prf5D1ZPGJQ1gedL5sMpGnQJQVmCDEPvpmE8Z1caFVLuJ2bt3Pkiyf7inQjhgDAPFoG1i",
  "key23": "5WGgoTzfDiR1fUcxquanxpGmjLr4xzHx8FNediDm8o5zXyPoFMASBR2KLkKKXVSuk2bECazt8BX5t8UcQWRbEwEr",
  "key24": "qKrC5q5oGw11Qk6nhYDLK3HM2UvHZxzXTMcNzRRANYMpb7KdM8rfCKqjwLAW1PgBfpHsnkTvaGYkpdDMkN1ivFq",
  "key25": "5wbgpuPY1CGT9Ne6Xj7iaHi3WJqmgpK4oeUpvBM5YW8wKMsx7Ja2PV8HHXj5yEoEh2kpPwHAKmEA6hBjhq4jKyLe",
  "key26": "53vASKojnFcgbjiXScafLKqvqmMq9Jm77tL9k7M9As8kJd4NLojg6Fns6G16PNToYMJHFvNCswfWkmPz9GfSEkoF",
  "key27": "2ChhjccGSW4H7FqpdAXME99jvrJA9nGFVYBe6ykkNZgocBJJseTapr2s98Ld6dSVUM5tXRGhCdekdDBvdJCJMLjA",
  "key28": "49sC4qdcpdSgqu5DedAp9dCewY5sEYwSBUW5NJH2sBPVQQpBEEta3ygefkiuQePHXiKSSVF5C9DCT9Eh4LGwhLGz"
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
