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
    "28DLeJHW7Yt72RefpPZh2ry8i33iG63Zb6h6hdyehL3qQZUxHeTvCRKzguANudv6EAiXyJJcTzAEKNEYj1E3pbvA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Nc6A7s2G6jz3NPLmD7HrB84WuH4tUBpGRVV1V7AXhnVqtHU5PPf4oaXykQePyKfDK2aNtpKT1p3RidyWDt4Ssmx",
  "key1": "EcJro1eQXAAeZV1UgHzt9NZne4QdiVy6FJXcGGnGXZwvsWReACmaXrbXx1rCoSnfrXRbRPN8WFQfCUtfvUPAVHm",
  "key2": "2ibm5sfvHaqjC7MJYYUL3pjacFPKWZdLKDpNcaWtR1i5exHzKKP9R9LJSabeuCtJJFVmkexP12Kn5dn1mnb2GApS",
  "key3": "4BPoFvuGE5EscEV7UhN3Sj2q6CzTyHQGddJMkWwbWWmqVZA75gneCH69aYCncgf7RM3fwZG4zKtnEKX5jWUvzpVZ",
  "key4": "53gcQCKgsiQD5pa1YzbwD4c9w6saJEUu11nJ2ydrVXWg2ESCqqS5RafLeLrPr8H61iCBBvCwo1uLZPZgMZtu3ZTq",
  "key5": "VngsHfHMHhGvpPoG9tBRf7u88Zntq15w5PuzhPtw5esoT4gwRxnuX5cjswEGFp2k69B23HznvVDdyCA4A1jARky",
  "key6": "3ccRFmqKtmgmfBb2zs9iibU7qAuoYpHPxjLHwgMe9KNSU11cDRs7kNYmsJUbwLdKw3TNBQUoPLfuS6qmBzLxnfyh",
  "key7": "3pU2wR3JP44iC9kKeFfbezHPmnqCLM9Z8M1Kr16tZQ8XwY4TxV2trkKqbgsWb119oBNrCzmLPmZUR4iYVQQf6uXf",
  "key8": "3QKn4xBtEHsidVeKXPRiXxwKQciMTVEoszv5FUPfUmzkyKvWSkYa7cFTGgK5Sghj1saXv4v3tKxaJ7CnSZSamDzn",
  "key9": "4SqN4Qj1G5SoSywz56Bv26VRY1cm3fpfxgxEdYuC75STivQvDiAcNtYsiSp6jYveXhcjw8BHBAp5uCVyL1RJjGeH",
  "key10": "5y7zroiq8wrdZvjoyy7RLpmvznySkkBSqYnnHt39jpP4GrEfEwTCT4krYPVmCvtJfBNzCkNXvQeo7pPCh23B79Y6",
  "key11": "9vjv7cSzVCdhh6K5FdLzPVCGJpdEtcefHjuJ9SkyP7wSmnXnKC5nVKhCBbzeKNEvFbvce9EDrNJbG3A6ErbSWGV",
  "key12": "4a1uMGvTP93RUiUAFkHHLpuaQRDALPTkTFSe9LpDkqj7oJpUv5gyM6sFKYz3WkGemaJB1qLCBQ4BoGZSpXEJVnAY",
  "key13": "63YRmqb9uYETLCe6ypsJmBs66GMnEKt9fCtZX6W9eSS598A1oCDVWttLTQ3Jw2bgDbNfBVCxE8Tqiys2EucD5H5M",
  "key14": "2zz8tHyZXDKR3DFuNXsfGiXNdEU7DJ5WkKEgjcYBdUF4xAKED6rpbnxSJYDeVYRhpj8qLUvgpmmtiYnWHQPyLKnp",
  "key15": "46dW7SCbMGFStazRXKpJsdqBo3yQLGMrjx2U8aDCiPWhAd9aGZJxeAiURPU74rnXF6CB77z9d7MJPpM7RFzy5bJz",
  "key16": "3XPyLGNe7XsbfeHRTwVsyctPcDeCZ6a9r5db6VCXTghmJTHrZiVK43e5mtFuYvuCjnoDUEkmeYbt7sFo8YEgUrAy",
  "key17": "bZH4urqnSWChr8cAyrG6ebPG9EipJJYchJWRWAdAxsnRnW4iTRh4KnVRFQWF3HGS2G1PPncRSP5zWMQQSskyHJm",
  "key18": "5veNLMSNBLj4yUkEFjv54VutKfG87fRHZoBMQCM4n7WjcpdEWpJVMn31TMoRX1DpdhhDja68AqqjunBGgzCi39ev",
  "key19": "4t8qJa56woXTEeqWWuJNnD6R6x5aNkvgVeJNVp4g3wUqRiHSto6PL6ddPF5i8GwGi3Y8ucDYnVkunQfSwHDBa2oc",
  "key20": "VAnMfBGprw8h9CmE5PS6SKiNCsmWxPxFBGP7DBsEC9BPe1uHFX6t1fDQuLQJkrCgwnY6oYDmghCDus3rCUgrCnE",
  "key21": "4Y9oDqsrhKQyPkWqt9UNexsxCjkK5YheUgNPbSmdeiAu3Fp2xLk86eMRdHBKWFuQuE7GBfgXZbxpBrLiRrzXe4AS",
  "key22": "5dGnURF8Xsi7NwHqUawrAwhN6DJ5N84aTMDkwGuB9ZPuFRVp5d8QY7LP3Z8YdC5xkxBxa8xWqi48UBAT7KLTrFrG",
  "key23": "46tN8jq53gimbm7fcyhUhaxeW6DsKGbFR8KQFEqBgCjRQoNUC8grXAxCfx5crSTZGidjZCPmSvdJ1FTkwi5oMQrd",
  "key24": "5K6Jck1fw6yaqczhWNubemWesQ2axaXQCLqLM2Ziqh4wvM2tGfhjzPNi5SYZozWknpaXieK8Sks3DfED96SNa7i6",
  "key25": "2ixSnJ8WQk99p1tPVao4EdCrVCQ6yvgqykdGxE9a9oYiGGMw9gwjBWvZhVTx1uvb6GULKX3cL1JK81R1YqVc6Lex",
  "key26": "332mis8zR3xcGESr8DShyZVSorNTHGCxt66mh5AwMGA52yX99wQiA8BtMTor4Vr226D4NGw9UoJbuvnLoN33j2K4",
  "key27": "2B9pgrhHqWbkpxxSRY9HXTL13PUyhfbGKafjFVydA3LJYvm3fvhZ3vUmqh7qPHJPM48jiCtvD6cMreqPKa7dAyta",
  "key28": "3A9psXrXW3bHfJAMgcsfZfWugiQFuSxdzYT429ryMaqKTnDJ5kJBXwh7GZAwaQhWY36gXrRvnKFS73DyPMpurs1Y",
  "key29": "3SdwQGoXBCa1XhDgFtc9G1MK3xTHiaeGbWu3G7Hq7BRpgVHjXtgsiDmZkog8oZbBvtAinrekH4KWusNQd51XJ36M",
  "key30": "5W7UpU7G3oE8crUxcWXgyGHjRbd4rBy7kcdd4csQ6odfuMoT6VCMHMUBjnFyGqpUe2QzSMBqqYW2pW4Bb5yhLfAk",
  "key31": "3r9FNVxvxpxbpy5bizCHh8mBVk8yyJvMoXsymBiMQ3BLzmWL9BtpydV5jbTm5rATMZkFGot6iK6JPEDH9JvJkQz1",
  "key32": "5YFyv1eZGdfVu5osLKDntG6q8VX1JQk3GYZYVde9gYrabWfUBrzNYXCbgP5F2RsJBT2AqWJj1y5J9yQSLiKs9C9p",
  "key33": "2KzoLZa85LGNnXVdQ74Q9mNJYFYzJTxeXHMGch6sb5aULDPtMUd377TBtt1ULJ5vHtVCuT9Ks2isV4n49L6RuR6U",
  "key34": "2shmk7VMaskDZp3YjP1jmYBr7qp7RfSvQK1c3MMQovo53b7ryLQjvfW8CrfTYPD1Px1E6thEYExW4pquXtH4enCu",
  "key35": "2DEQSyyZR1ppPeRhMiGEBH3CGhQvyxy7YA5VwXQyv1p2MMAPatsfm3Xw6McvtkcKvNSFR2cc9EvBANbxbJzS85FZ"
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
