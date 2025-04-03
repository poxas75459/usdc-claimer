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
    "2innb4nK93TvRQ9FEtAbMTtPLTU3n2GkazpEmXRh9eeqZAiKL5bHGHysKF1i3SFVSPD4n9pxBWcD7jrXNB7EfXrr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35NnEyGvPkgJgsczQbjBkTNbVnNWDj8i3b9easHyLt2n4o9bFk6ojyVP1yH8LSqsS6PFbKjLUQnqDEeMri6jzWXy",
  "key1": "UXURa4eTJDGCFkPVZQDFYqRrU1sczrbAVXfMXiPnM4UdijZ6ZUpv6Fbv9ij97ZmXrAa5CUVtiQ9TrAmsnC3157A",
  "key2": "677FYkKvtgo4mPdiJjdgM6qoGPeGfVzGHuY1t5AHGoMwgQUhHuCWJoDbYQKJXbHYahwiTQBp9Y5YNUhWwmxA8mGb",
  "key3": "26Tu1W9XpfMLFwZNHtbHL8MuVX7y9dyfn8p9GxxVFmKnczkWaAw3rXprfGmZs2QA46Y7sYNZpyPTX6NB6VAsE9nL",
  "key4": "2ECLAie75sQTbj9yJSzgicuBn7KLT41kMcahE8ZFvzVr6aHFtVvFbRjdtV6WA23ZnZcm1ninaa4BFA1xCN2A5Qoa",
  "key5": "4GvSqseanxXghmALcuCVV8tjHAaStxRCwufdf2B2bvHF16WfeArgKfBkq64iaQqed8XWrEY4TJP7DMEmsdD3ZHv4",
  "key6": "vr8i68GGcCk7JSgt4fsTARV1ZkgTZP6XseNdB3Li8TDhcaBobbztquxvU2TxzkiCY2GDvWmVSfLBEJLQ5KkciPU",
  "key7": "FyU9ZWLJMUgYosBsaxqsXMdSLFzi6HLCFMV3EUBMrQGzHd4NNs18NoZqpAoerxaovsicYDy4sTvWsRzbdtGH1SE",
  "key8": "2LmM1ksepxgqeenpMBdFBACY6caerHF5JWnGQbQihimJHbaMXiqr3GcACVeYLumMQYeuy7QjujYmPdJSmrQLDTRr",
  "key9": "65ixfqY3mGQc1G8CS2LtgbbRz5yQb4c9GktQg2i6SLKkhjQRPyEUt62HAJhw7CZLoo7wmJDDFQxymMV8ZZR4tTyu",
  "key10": "5S4R7NXJ7CnAUhgfbWe3hSXF55PLx4C7PR3qfPj9M3fppgRhHbKdQd1Dnpa2LDCtGQ4buipJfBS8R7eBdv29Xr4M",
  "key11": "mV9KQc4YWbEjBJwpKT9aYQHBHyEgPsZPp4xNmmpRh3gstUCZSvrNAsd5z7vdk6K5U484qQ5jFDJWEsNwjRwZV95",
  "key12": "2Qp11h6weJQzv8UbTn4Y3NCVS9dqgUUqiMwxpv1sGFivpiYoCJ8S6n5rhQEE7t1rwuTJ1h9XwcYV6fT3U7FFsheY",
  "key13": "K5uFrfkgxsWZ2N8H34pBSrgdj79yMdQMqTwRoJduwKnrhKnfix7GSP9TtruSgDXPA57YR2v1vhhZ4rkwTk8vCSo",
  "key14": "A2m4snZuyQZEZPJFXv7Nf7iLb7dKDGQWjhZX3Gvj9gbGmZ316BSzbptNyPDRQuMLeTsZeNjZ9UjUMropSaRHyuj",
  "key15": "2J7F66oxeMVpEDnFm3PzcAEBLisEBPqSXbkBVwhrqi8c8XPGLAuX249YohLFdS7F2Tx1Q2hoi6VCfqjn3KLCrqcN",
  "key16": "4y5crhty4XorwnoLRtAgismmkr11NJTwtfxfHZm1UEBQE8HVMXhVegntRwSgHCQQPCEJFGYWtrnwDSbFS3hz2M1h",
  "key17": "4Y38YY3wzRF7fbjAJ44CcsEPicNr72CJtr57i7jbcNS6mJ3ULPoCBEwrL5rT5qeMsPwCukjaUPxp5xLE645JAFSH",
  "key18": "2aD8n1dqRNVyS2a5Y7sy4RydEH3soNBFRoMJREwhpL7sfkH2fJRZVp8Q58YHRpoBuWqzoHTZYX8wFxDvV6SNUndg",
  "key19": "3ACVbcdKZZFeFpKPZYaxSY68tro4fLyGRUyyW48yptxNX3qmFBRQgUavx1hsk1FT9FKzCevyyFHNKyPvtXBMaUZb",
  "key20": "4R4H9hZkLTFm5JGAiPgEyMX1q7gXd1RYPDfJBN1nPNXe6Szm2Ddm5EcWioeYrh5vorAQqihDEcFzhKXkxMrN5rks",
  "key21": "36unzn8rUSSPeSDYHJVtz2CmZFSb2hCBb6dote8Rm4Too3zzcPui77ygNV6R7J5h6bHtVXJ6zVwKRWAJCwTHXabJ",
  "key22": "2K26CQrY3D4Ub9Wd1bBfPuWgeZto1fEvg36GJjoH1ZhiH7QYkdh5XXQNeVn5sscRwTpG2JHH2Wx9HcxA2pD6qJbL",
  "key23": "47Dm9sSK5V5Xd9zZgt2VmbFj4zxToFi93urmW77CcbochmgoN8F3dLokhhaSgzSUxTXMLLRPXTEN2d9SLcbyHiP1",
  "key24": "5a9Y8BFGZAGYSMtp2LcM7hgX9naev1QRxeUVpUScdeAzeYHp3EN1hSVNeRjzEiH5RAWqbeDssDN93zg463GCK17V",
  "key25": "4nkKE3rH7nNEzVqn6BSpeeXszAvsXUaHkDwhbZUAjen737zMUV4E5fQxxKBS6zfXdFp4LuL7oiYVjqDRtn3ZatuT",
  "key26": "5UJjQLzHoHLzkXiGBLEws48HLSeK64sPvf7YDVvoNwGAxHWHXzSnEHTsnNSznY4VAdC2hVrgrAhGaQ6526wSdw9n",
  "key27": "3gZHTHUTMWP3dtRUb5nBrDQ5hYWGaNh1Whdfyvr2y3bRazW1Tiv53bBigmTgn13hmbBxj1GypRwj5Fn2sU1FsjC5",
  "key28": "DRJ2gRLcvyxdh5AxAdnjZkX54VJ4UGs7kJHYXKYRNeFrCn3MoZL899vaeHgPhQQkhMfa5hCqHhsCxM5mdxApKmN",
  "key29": "5b1nB623aTbd2tvTym2nNGZjEupwCRT9eVSLD7Dumno1CHJiAFST6DUefWYCFSNSnv63CvxNRvQbrwRSKS365kPD",
  "key30": "4sYwgVZoBxYdrFL4ztGM7A84qFV71FQ7VNUch42SM6tbB2pPp53R916ey1Zq6aNa7EeHAk4xWA3JLH4dNpx1PDcU",
  "key31": "2PtPBYmetrXJ3qJPJpdovZKGk77qP635xEQhp7EPvrTxCuLqmUMpWHNZe4K2bXkMM5k4eHnuH1qyHeV7tHuzDx4c",
  "key32": "NtoiiUAtNYLrp4Tvbfu1c9jKV3M47d6z2x3PZe5J7vf4fUNdVVuz1SiFGgqpMhp9pcTxLkQBb2UbV6gXYkWqsq8",
  "key33": "2gBNZK7rxLC1iLUTuPLWCL9hx9AbpazU1YeVEpaaciWa6V4sR4Ljrto8EM25qBSAHL4AbqrRCFHehrQbghkzwD8J",
  "key34": "D3mStNwjQUhZmuuf2jo7MQ3hPeLhrwNygcvS73r4YSXwXPvv956AdXZhcodncbqE5anoFzPEXFg1BowUiEycP9f",
  "key35": "pPSZJPYHJnJiJmUrvyw793MuVFteFt5LvfZGETbPsw7nQs6rShSfsPCdFVg2Ti81hY6Xs1tZD5Gc2kRU9GdJ4Pk"
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
