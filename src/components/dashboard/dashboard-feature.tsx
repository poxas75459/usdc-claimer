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
    "42GAsHCij9HzXx4uo7EKUMeDmrCn341T19FGGwNfMmjrvijWXRMn2wLNqaawg3wERtqkT8AV7CF75TKGmLTDLBz9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32JEwNzK3DhE7VPYNPMCCGobNhDGxPzGaAJBscwZnzoDkGpqXV72b9RtkPPcD8cgUP6UPhsD83Gf9P1YzdfLvYEd",
  "key1": "4JCGNiry91stcmwQJwXckDFpJYcQ3MLorJcz2cvWJh9vX7i8qfU6Cqmej11crpM3HQBupYQSUbDKTNAa95DneeKq",
  "key2": "tgHc3CqmBKAXzeL6ZVgM85rUxaZRm3qfYMQWRPhz4cwSpeirioqMVAbqq2LNSWWFrYbKEhMaWiHHLxpgdXp6fbJ",
  "key3": "5Afrep9VP67T4JjZpCw4635U5uPTMeFYW1rChdtEMqnPmmhgoRGVwVxbsz762xisDMNsrCsVeyPvW9Qqq7YgfSfG",
  "key4": "nybUAnQuYa4B7MxVbQf7yS8o1feKqWG3t2EhdtnYXLuxy86Zr6UsX3pznu49fg3z9djonsAaiYMXXBhUqpHJxMe",
  "key5": "2qHuHHhpZN6ctXNwbDZgFnkP2rbCXBty9aiciFW1Eaemetxg5gjRjgsHN8RNj5yALAwVkWMxYcsnLwNYccNuvwW3",
  "key6": "254kfr26JwziXWPEEY4doQYZ2At3iBk3dsPVeHxvC2ibdwyqfg6pVUfWxnNG2ePH9tn5nwgmx573ZTuVzdVPr37S",
  "key7": "5QCUgYsjrZAoK9GNBPttobuFRRceNZUWN9rnMx5dLNWXFnB5zfZoBr4FYXD9dXGnnUch3yV6Ay4gQWXcdtk9giA",
  "key8": "32Vck7YH3Zt6Ps683gryb5jrszohkVwn6gjBshGU4Aw7rjWYV9BCjAhZB2iKkHehRwUo2zh1pqKRp9CKka2aUsaS",
  "key9": "5iAf1LgVA7W1bqw8KnxAikeZcMLdr6eewbYWRqfMuSGoG6CHewA4wF6rUYTjcNt53JHYdCYh6eG5B2PoY2aGBgex",
  "key10": "2jTpjcy4WgQEyegJETF7qAPR1P3dAZB33E3jm8x1TsE6hHBXi8kva3wU6uQq3RTcx5NDMSNLdyhisVbHJcJBCQug",
  "key11": "298EbhoXZDQ3CHz5sgcECtuQPuucTmrQejowN8XKo6YixHnZDu3L5STBqUfM65kBp93AMYWzdSpgEfPyAfvG6LUF",
  "key12": "5QaJyDFs62GtXHU4Rz8sxaWSUJPrRKUis6PuNHmaUZUiPpxprdmSmH3LNbgA8tdZucxhKZgJhtErGLYpPAz9ULTz",
  "key13": "2ssq5Sga9PYxeSa6pgXkMSgGseL1qjXBUTc11a7neoaRuTEaTmTsPCHLM8UmcWwNvy73cPuLmc7tGRjAxtgD6y4p",
  "key14": "gFniMfT3uwz4qcVqRWN6X3SkVE5EXcKzDAZPSG3RprFAJ7ebV3Y1tmJbBjdpqzEVWWBZgxXaUzmhcFsJaHPQrCX",
  "key15": "2twH7GJbvSgq9mUdnSJRWLW3kBwTmqfnErraPhUvHKLy8WhfFya3GFh7g2Kuf4m1SAMAFjehrgbibHX1MrhF8Rxt",
  "key16": "4yzQcc6hX3c3HXA9NNBtd3kJkXwyDHpFkmyUyykGz5Sb4aQRYgqRiPhhHbZpYQespbieyFZd5oABKhPtrzradMhK",
  "key17": "2RsmJ4vn1qfgowCHmummH3AZv1RfG4S9icR69MyekXTc1oxsqBG6BSbgBxc6LhtfpTsVLbJu7voA7R6ERXSsYBTf",
  "key18": "44fBGWuKJJxtBot3EzpQBgUfrq4eYR9ADee3RpSHR9gv18988DeR54gyVQpByRx4hCkdXzBgi6StXueCLL4shAwL",
  "key19": "yfv5GaQdSdo8WM6G1oc9evqJ53K9QwjY8h9nKAsBRNJCJsphao1KL6w5G41z6fmRYF3X2Ls3Si8mcG3NdDNvXKk",
  "key20": "2qfarW3nvwMWxmh45Y3RCo9Qjf44i5CF4GvPHTrsLNqNECAQVtypJETk2buAhJ1yWhBzaAhZKcVSyzz5Y1bSyVyD",
  "key21": "4LCmsmodmH25tzgVJ1HzcjjR5uB8BHg7RdGZc9d5JmRziqGh6NbTsXN3KwXmW7nAoZ9TZ6YvZiYRoHvwTZptCmk4",
  "key22": "3Wja2Q2vUXTkhiE1uHb87hWAquCxxGgzVkMNFeD6ej6s4KCCXFpGAZteyFTX9YZrCGrHf3VubxjdxmhhnbgrbpgB",
  "key23": "rUuchBgeg8BbRjUfSpsCrBveB6ShFbBoCSbwav2uRE8s3bpg1a5PbemK5FpsFY8nrVMYqpD2QECH7CBcpriWi7a",
  "key24": "2ViyFPtSoKY6cbax2xDdkZKCks85NBRYMkYEZBGzj6Fyr9DLRtwThHqE9qasbzAs9vs11nocJfwEVLZYvxhCiXEE",
  "key25": "4aAz9udLy6wB11aCicWKWzE9XBXt8qaPhUX2aSqNgXrHkEx2UrySzhyX4DvWVMDXuxD6AnxVtadZWvepiCNzrrBq",
  "key26": "4qjTVSZvSY9R25CEEbneUdZb67dvRCyw73ASCZnYHbfUGiZY5MKEQTkGSTtodMgJyRoZoywy144Sz3pBv5CgxxUN",
  "key27": "5Lcgq3bNuznbf3aNgLyw3eKzeBewwyUpygo5cNKSn7T2kUTF5yFxffmUTGsxBK6aC9Sptfy4b88bK4RncbjUhQE5",
  "key28": "4S6iRStfSRwSJRW6UkP836E7rDEbduq2DvUaFtJjZqoh1fowARjYc226egipAWivvQyPt875iSGuZ9nuu5ZtXeWk",
  "key29": "bnwviQrQtqwTApmA3fdWfUxnH5KaURJQM2YfFx4jtfedppiX3aMB81SJ51gEudiAEpRxbXazFsi2cWxQoADHYYQ",
  "key30": "288jWuyyfEfmeGDAtgHLMQshHSENLdgqCM3Zm21hS3j6CYLUY3a2DGWsanAjopyBiyajSdaUPas5hUFkGG3Wdnpq",
  "key31": "455MgsY7UeintfWqN5KHvD6vurECTH9qHii6MWicYNVpgCeRc6W4ZVtjdyrsMfp5ayvWVD2RswdkY8XcPC82LxZT",
  "key32": "2wiptbJF6ZE3v3pFCJP8KGMD3WBdeQp5FnVGe6cD1pq6Q6CYgWnVAM4gMnV3aoRD5WHxQH3MBbvyyprVS6neggxZ",
  "key33": "2oVXqLGPmkbKRsTFauGx1HEE1R4m6gK6uP34srqEXyuTkxNsE43vTn73qKe9mvvaZH77reshA3UbKAzJdCLtH3Cc",
  "key34": "5u1b8b9H3P7Bk9ozMFxhuxJYjgkKoPtV6zvnmGT79xww3Sn2xTaFHgrgx13N64bYNLbB3842PgCqk8365bdRB86X",
  "key35": "26NcjNFrUvPK9yTVC2g5UxtJEoDxbXyPcMCrcmCA8N5QyMFqXWML3aMFSPsFKALfYS6HqU5ZAXtXkiVguqqPwKoK",
  "key36": "CEGr3XzNJwLwagj8ZDFDde6jtzmAqqEHiLpE5QcNvWmE1suYqeMnLgfu2kdCzHiSycYn81F2GxE6wUmiHCr5iZH",
  "key37": "46nSchXALmS9e3VynoAvBv79JCoqcLtvKFUq51SvvsNNRQbCga3sLF8JWLxW1j2McjFtWSYECtvgMXsTej1jB7CB",
  "key38": "3wEiHUzSJoSzy9QfToJnCpxmkJ6C6R5KgZhteu1Yz4YSwPrmiMGGQ7LHUdEFwz7r2fH2jMv6sjynyfMjQLL37GhF",
  "key39": "4G9m1KAs33CXQtQUTGpJSWtfgG789Gy5QiC2TyuZRDGQ4RVHS4xEikJA5mo4FBBHr9NgACGgy8ov7hErRfAijo9s",
  "key40": "35PDGRTySHiAFSw9QUTzXeWZkvoJU1Wggd339duos7Qgxg8xKHN7QCF8hKT9fJfQ6kVo4XPgCZZVBoJJTbkcAwGw",
  "key41": "2HLnw7J6iMzhUj2Jaukfw3JL6pF78tFt8Xzp59Jbv9k5qwPx4j8ruxfc4QseRuaHTDt63Z9hmAHdk5kjFGkf8eZe",
  "key42": "2da12YpRv1rZeoyduxKS7hAoo2DohxUp67vhrxq6SSiiFHe3NxRJa8NrcuMoGwXmadn3DKcKRRVz3KfqP96C1j82",
  "key43": "5ajMo9EAzcJKaeNC9kekvGf1LFieF9eyVfi7b6Z1tcDD5H74Jb7vNkpWpBGNyYW75bYXh1P1H6YZYhnTXbQjq5oN",
  "key44": "5PHk74bHt6ffTMPYMRhZR97fvqeyVL75DAdJfB8TFtYCNFn8YhdYjJ15YG27UN6d2GVS6U3zwFwVZFVQoufseaKg",
  "key45": "5Fvaz4SYwKcRRKziNwGEYVgXzAvgW4Lh5kcZDgQeCqjgUksA6XezTUjeZBhqJhbwae3FxfRd2rkf1hXjuZsmDZVB",
  "key46": "4bSKAygKabfSJh5zyFh4dtbvq8pUUxFrRuMTcAcVkxd7SdhoaqnacXgsANpY7A6tKk5RbBEWYUZgm5WVJLjQKZqs"
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
