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
    "5F3XZsPeHXyk9NYvTBpqYhtjyLNtoiEWGiK1t3ZAkwtgB6CGLH1jGPcvRP6rKpqTQ2Qtg4dSnr7sLp4o9oYN4iCw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dLffHcdzK6u9EEyET82HCrKsNPjbaVfjVoTdx51LmAXpsNzDZw2Dok7u8xCJVM3uWUawVPXsYzEuP5RbV3L6q3U",
  "key1": "3wPz7EKbKjowsPyrDgCqKurLamDaqYDtcdU2X46gxSXH7xS9XiZxJnhRbXtBiG3cdb9Yv1tVoridJiS8bj39Ebma",
  "key2": "4kdeerjKmD3tgL8cuuT1TQa8DxLt3VNcA66Sc3Fha2EupgDp5C9fdkuCtoXZPyfnSxDNDtrfyBamxLLf8f4UexRr",
  "key3": "2XGd4YYqywz4iBazu7skoabErjhFgAAmmSjsu5fnotV25qwYVZJFRXRZimbiX2pWqW6VPrsqYK3FMWw6aM2yr2oT",
  "key4": "4ws9Z6JCCdfrwSdZEAJMK9GpdLuNGRcSKGk6cvQ1p8aaXFoJwnXaEmwkXembj9XRheK4qewueAD8gk5e2Gb5gXSb",
  "key5": "3cBh37EjJXc45qP5RW5BftJqwDXdV8gKf389Wjm5i7L2XRjUF88E4QJWewqMRNavt8RUHK1qs9Mf7rKihnc1RJQs",
  "key6": "5xcg4Y7zwbWvLQUqjVkTnzPo7TGFScrWsXAPWYKx3AnoYHE9kHAhQ7NDL3cgPzHBnDcuiXS8vNKDVprBDXyt1Dwd",
  "key7": "p3Sv9HVhVCgUxVtE7rZxVpyh6bMeBf5WpnwNYuSsiCtUUBwGqUcwHy3eVij8mSmsdivnyyqZNYAuhN5bkMAEeKF",
  "key8": "5PuFoG9EaLBtBXz9HFDMTuQFD1oBTbWmZ7YPFXCwutwrTUT4AUKivtXX7Fx7CVrYvnyvVSWhDCN24ZiexjV3DzEX",
  "key9": "5W5hLBaBv7HDk3pGZaujM4ZY159FkGUJFzRjbYvytCy24Unjy9gwcBhRV6d5SbTP3BbcEVuK4BScC9RBCqnGJWJP",
  "key10": "4Xu8BLdiffLELRoAyB8o5qvrU4NjvXkDLpQKu3HLVFc5921VqQ9fSe3ujVmtimo51WMcyET1MWqz3cMDjmDwBWmp",
  "key11": "121DkN62Y1rgVhAJ2x9gZJC5BCpgmiADdHMoiXwQvzqjdeAfidJ9JnbDqHBt9PC3eqThwLnHFVG2e5ogL8zYkC5v",
  "key12": "27DGYJ7Da4BKpfCu8ktsJzq3e1nH8jsxxUZ2Lvfz4AE5rv7vX6N3f3jGJ4LbCY86xBGPC4Dhn25TXrYqx7f8BwJ6",
  "key13": "3th1CjDvKZUicxvUAZ5mQ5T8APGJE9ppgcfupEy4KGCoFfhMBvNNJizv8LTPgP7v6DCqwH4k7PuN1xZDx7mGbunJ",
  "key14": "3zzwTgY8yhAfD9zCUQZBukxgZJdT1LkU64GvaTuj3RZq5L19JZZhUTXpxB5PpP5QgkW8WWTVHcn22Gps3myCe4vk",
  "key15": "JXeBPp79yEHmSTA8ZCF2Upwcd8dpzrycqjtyz1oahTW6TNr89mwkQSWFAFebKWwqi72hNLqfqTwRehTp7SeomhW",
  "key16": "67SxeVqSgbPNxdfPTVro2vvbwozsW8ffHYKUnXqbSRtMND5iAXQs4pcqyW7Z6UyQx2sateyFj9uunG3NBWgcWUf5",
  "key17": "2dDYT25nhZuLMkQYEX5fy3TE14HVtQWufS3wT3hxkVEeDzHe47CdMdJ5dFACxWhDg2uF2y9RXMKEQLZRJ4V81Biz",
  "key18": "25gq9J7JUsPJwDcu47sFDzbijL82rnphLm5rwZVUWtbCRWh2q1RpFwRHFyge1u5yBhZKsxN7yeSBiiNhqcZDRZrV",
  "key19": "636SZxoRP4UV2M3mV3z9mJiyoZdyFgmNNhs7pKZi8WMcR6GNLdeMyod2K8jEgZBZRvLdUpvYmqB2GAPx9BeP5A6w",
  "key20": "4QMhuorwqXw1ahKMPPyR4wnfdT162VFAgPMozJHipJzLT63Mu5GvPApNBwajMzX6YeeGRDYrg5Z3EUDVeC8yuNVx",
  "key21": "K4pB9MrQtUhHDkM3NsoENmsTvyVjaAi5CAa2oAW71vKaUb8KSP35E3WakKwRV2FXQnPp5Zhf5kDxJf8rJMDBaCT",
  "key22": "2tadwNanakNonJ4BpLiQxHBar7ZXfto5Byjya1Y9Nq1EYk5AkTw6nR7UH9ED2jWh5a2VJPoPxFdJr5x2osBNmChD",
  "key23": "55PQXThWK54QNxpq1UXJCfazPgrYVNjeip7TcTbYPMPrDe1RnnLzuGxQc61y7gscR8nrDX1WizTUPeT6Gr6suUaT",
  "key24": "zEYq7BdaSxPXfmGa1m4cj6EKYxm8hrPwGH6w6Q7SBuvsqRwFyNC6oDUpPRwJCRiFmmxtfiryM4Ftqas5CKS8h6G",
  "key25": "2ZyJDyA8MG3suFyiLxfgGLwtEp28N54PhBDAuVA1aDGefWn2uGtnpgHoZiWNLhgMsCtv1yrNipPifmrqaAjALXv6",
  "key26": "2sUxWBWPu1isYRyRihiB1wjHdz2Qfb427UgnGVkaNSQZT384toSigLkcq8A2xq6nfzmNAYV5PjZuFed9EdFkUXEw",
  "key27": "5pVgHLB14GXuAzKEGZ13x4kj1mwePDiw8ehDeSgooyZAFmRszFMrGWC66xfFTGzjr5JMiicmKPzzJW5y4fV6HQwH",
  "key28": "27Rc8wRqBMD1JSNa7RHgMyCY9YaP7vq6EMJcrgWUzpmyUAoj42z5HXtj5B5aGn7JLDgr2d4sQ9LjZb2nhcWLUvNL",
  "key29": "2L3JEoGRHfjHymNqByAyHvu5FHedBtvvWRuK8QeqTjGeXMBAmiTiqfopRBZ7UYxrS3AZnw3aur3H8T5NNEPn9DwN",
  "key30": "3S8Rdd17bF61HETfsnHaT7iFERiMrxwK8ogMwgsrA85ASUMxhpn3h7M9Vrm8bxqQp1TRESHW53BuPwVkHqvGMZYQ",
  "key31": "3zKs7e9Tp5UanxFh3BrqgPdow15nbgyGvUaURnPBXZGsqc88JRTNwNCAmuqzyx2zVAmNzK1ZjPyCYBbatyJkcgW",
  "key32": "3QzsY1JVku3jjp15wHaxVLpCatu5nfDcFNSMFuRhQZNW3XN79QkJa4yuHyyq3439J413iEsPjP4Nhec9zd6WnDZd",
  "key33": "otcURa2cDBZox9auca6nnRLU3iBUMecDfeJvmJASrAg3myzyxJG3439AZsBA6eCEqSvNekR5maEg7higgmd3WLZ",
  "key34": "3KWRXdagrDNbfZGYvCuJsrVH5s4y5JqnitbYXW3U3qeBrVS5h7pNcRqGkwDShDbLDkE3JxRrYtREQRuiqecBeAhN",
  "key35": "3noWhN1V6SMPWGnNhw26RDXnJtA5uacAq6CiuByvVCp9DM16KPwGxD21HHX7HDtZ9N8ymT59SN4TLJjbGUgs9waT",
  "key36": "4z81m7E5DbF6eM7pHZ9yA5wZqwQt8zpxq5UQWAVZR8CTyFtUM6t7xxJGxbBrmcvZPXdAzJvHJpHP2QXtVw6bzDdZ"
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
