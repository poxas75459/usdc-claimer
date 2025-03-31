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
    "3Lmy28YWkryB2kACyca6dYVwgGcGGduXbtfvUeu6G7fkudsdF4KRpwbDansoPHd4hTuknWdTq2beqsKhhWQseVQX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nWzye1cHXt5xYdjEkSZsVJQK8rLFqp8ErbiLPs6y8SNP6WLCs764RAa9Apz4wXtCVqescmfYsKUsk5phcsGhXUm",
  "key1": "2zgVf1KkdLhPTvdMhppG3i87txUUbyvMgR747k2EQqDL33N8nMdrff6fwrNErHCULbzBp5qc3od7aKPmmR1BYZD8",
  "key2": "3tAFFH17nB3MBNoKk9GxRy2NPDhWGjmfbQ4HSZL3cmxp9heBX1kT7shwm4eFqnB4uztPHcpXLx2eoTb2jEXr1sGP",
  "key3": "5mwoxs4pgEkEkQ1hgHcY4pvRpgfjx5em9rQmc3usMeZ9Mydfm5oJiy2yMQeKMrcNAkr85XtyKZzvAhQXZcoauauK",
  "key4": "4FpCSHRUKiuon5mNo9yiueHW91Sav4xeNqRrxoCLiFAM2vEPGni3kRQgdtTWMx6FzDGKmqYpQ6VdmhRUsT2z6mGp",
  "key5": "1vWa2dz1YwWyStRRpmLbYCnEdFvuupafomCevXpNBGAangbjKQXbGk8LQ4B6xB4q4hPeMHnyx4H6zxXzmzgnGgS",
  "key6": "2pTVM8naWvhZeFnfX9vV6omuR5oq7d5in6ry4x5ePFNdxn9hBZ3R2cjNzEwEHAgPGynwdAkrDqbdcPxXXFjZof3r",
  "key7": "2n8aBvrhJAxDFieEXMjCGSGYVfyaF45tuxfNcftnNBVaKtRnsGEtk7Mkp2YddtEbWAMAGUKWBQuLzZwMM8cPbQjk",
  "key8": "2koegNci9PQtsPQCYqepkAS3uhJGUNEN3Rh7mUs1UzZubTcnN6sYCU7XKE6P6LWvPLFi4P9hHD34P7EYj4bKpwNB",
  "key9": "5nJfdK5ev6aN1JN9QDSabRriwRe37SitrFe6rSmKgUcVNoY8cPvCLHArjkrtMtzsarpUj5tY3ihJn4TPChEhVKTA",
  "key10": "5ZkkZjaf99ttod48xFhF8MQFJsZHQF1sPMNQ4mN1qXgkR6z7KzoZEk9pBvJZafEFis9qzhf2YXFu65AfLuvV4PAH",
  "key11": "3zRim6wJBYv5gw2CfWVfV5VHZaaj1LUjKHKaPh35VLbF5ti1X8dyJqYDej9mVqF3XJddQjs8n3x4M2iv1kCSnznX",
  "key12": "eifjnR3mVCL6EdomAo9yh7CorEMKrFuxSqRP35ULMKQsFNsof6nSTLBfbP12UReFnw3YVJ5NBdvQNoAx6mvX9cS",
  "key13": "3PUujHxesQJrzFufUnkeHCChHLoPAdjC6JFAhh8Y3zG9CMM9EuDkQYPdqKfMCQjbLXYxQHa9SdDVeCii315GaLjr",
  "key14": "44AXGuYhRBBPiHGNH3MQQDbxNRjpZwakZBZfiwDvv86CXcbWcXCzapEi6CXJtMDqu6HP1DoZMGxZMGXu9HFXwunN",
  "key15": "3Huc9ixf423xonv8RRgwDD7bp7YVuxwv2s4KjZMWsmErzgnDNSnFn4ovXnDcqPvjynEHtnQYxvqWko5oU62UE7jJ",
  "key16": "29sd7dDYvzxQHZo1XfhSBc7ZSeb1RKx3FiBGN64uszN6rHPMCzdDFvYyMVPijMWiJDha9RPJzuJnQytWHYY23ej7",
  "key17": "65oJzrwAESVVUkGkrtNg4pNNPQx2iCKahtW15AhC94wEC4ZcLPPdXqBkniMxZ3RG8YnjYMEssNSyGFCQaAUFdPdg",
  "key18": "3BLhgJs7gWG4dUAqpPAKgpspKkRWvW7X8o5KLEJBoWLYFMKkecgek9UGCNK8wgBBxuEyUHBngCMXYxKgcMm3V3Vx",
  "key19": "2d4mNdMsa51jYB9nLP5SjcFvirvDSaVbNjbMdCihnBW1fTZy384vvwAXTV5h7wKpPs2yWSUBDfX9s889oeTukzfn",
  "key20": "4oF29osEmg86qbtG8pwb3nuA82mwuAfZnKzLx7QdERVSVU82XcMpzPfzfS4spaonUT7kRhzYTCjAyGPTV1AmWgHJ",
  "key21": "5AHo3VR9njWx4oS5yezo2xBiXjE8UcRofmuexX21DV1zZS6CsR5G1gxHXqRFzi4g5xTPVanZRmLpA43htnvKfhx8",
  "key22": "2XRgai1NW8wryZLk1hDJyaF5uNETpYjEi1pUhjMJ2bhfqGfCeXu6jc5LpG8rZRrvSntpEPbhvkq1qWRTdddAUmHY",
  "key23": "2SRAFzgbi5zVkvecfG8iGhNz6Z3wJs25nAM6XtdrnnmYtMhWFsQaBSYxB4aVjTav5RaZTgAzD1jvVjephNVRDLmV",
  "key24": "62koEs6TPSwCqNwNZfKxCMyK1fb9fH3GXny1QVKKxPwDnwV1NEcWv2zHhEuKFdE2R2BsiopCnCcVRBmM1JF2Hz1x",
  "key25": "26jrh1AHeaoDVx3YAXq4mHMgKV3XfVijho5dWvGfG2dNpTihWe4S5RmMh9jcqZwyjHQ3uKj2XPNFjFGbVXQ8kFwE",
  "key26": "5JMqUNF2wqL5nkE5nEehw9hb6Swma8NbXTrAGULf8h81QdJcNy2fa4qrueCSNCzZV84shLTHbLPHwkepUPfPoS5i",
  "key27": "2wQbgLKfXBchUxra8tYQWZe2mevMvVeeLqF3y5rg2VQTxTUabCEck78h4ecg5vcxkmzxaiTdc1qiZTWxPYTwtxL1",
  "key28": "F8K9y3opF5Cq9TnrZsKeg1MXEUQftAyu5WimDj4icc23AhKWuf2m7bVcfVdXuSN9KpFq61AnKWSTTTcppQKEHQy",
  "key29": "3hwPE7bKEKiNBkoUfi7w6mfuUZzfRAbFozHjV7t7CLTe3HGCyH4iGC1unhCGUfHKtnLSZaA1qb9YcTUtD374rASA",
  "key30": "5HYUYGFhQzZZ9Dpd2P4tLWqjjAj78Qhb592e5xxqy6hrJWAjXLZQj9VVThSTJ9cSY719N25QcmWkg7W7Bq2XjQnt",
  "key31": "VEFNew1ntgbAn5CBQCAoV2HYiadi5F5KWska7JptEkS5LPWY5DzGu1xFtFgGyr5RqmyPFQ9RkYWjJLhbsnCv1EY",
  "key32": "hVMkNabPW51FRxJ874C2W8JpPMavbxvAq2CfgySH3KCg2wiXJNeptSHf3tWzuXqWDSZqSVPNX9NGLE8zYACJodN",
  "key33": "2AVZHUdB4PiyfPuuzfMeQHpnQTn4HwDwCz4AWKVE7PxeMumUhu1V3WC6mWLjqWvqVmCC3AFG6cxbqNskZSCMiQMw",
  "key34": "58LczxqBo56oSuHsLiyg9WqAvdKxAMSFKAuC6yc7zkd6rX6PBLXPsFyeUfmBtvwKtQjdi6qCVSi8npK7iLxAnRyR",
  "key35": "4z3Puk1JQzCJqqnmtbcQPuEBrVromJhCi9rNftpXW3pvCy5fqRQc2WeEGsVb6xLNrBCsZBvgGCyEjUhreiPTTZB",
  "key36": "2iTxBZ42ABdTSu92romUMpYK8VshFnPejYnYzD6TP8X6mmJ6WzVQ2EJQey4vXW3RoFfhBuTH2UMfupXGa5xwikuo",
  "key37": "5oyJmeHaC6cC6HV1apboJvhsu1QqcEFGhuT7T626reCRAPvcYsXxLrBcdErnH4cXjy7FPtYYj95BNKUcerZ5Whup",
  "key38": "4rz7BJHf51QDFbsXSg5H7mVF9rWnBZpudUXuwohqjszr1zq3PDxdtFegtZeW4KSLELTvqZ9mc2QEHbkUWkABL4fm"
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
