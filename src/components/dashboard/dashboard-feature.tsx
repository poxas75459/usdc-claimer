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
    "ZKvP99JmgnTbasDRNhZME57QnathKJCPkUwZNAo1vuM5Ey9pDgRS7PM7YvvLFySkGNwH3P4JNLf1MbfCpPsLfT7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pwpKf9nRGybxqbgwMLDpYvqGv4QL8nTWkANXWMGbPCPhaeZEKZ56kdiMsi3rUdvzWpmoC8fP5eiZbAMun5GNzxb",
  "key1": "6qgwyM26qDrPcN573CUanyL564qDDyR8GfK98vAqoyG7WQMoEVvjuWBfzTCxDP9j9ugPY1s1FoYq7heJ899mF5y",
  "key2": "wWE3DnQTvfj2d5SfgymfsLyH5VyXX7y3LpXefDpdG4rEaVv7HZceDCN3E5cXcSajGV1a4eqoZTtZQqaJCahBinL",
  "key3": "4ZGo7E4pQyQJiLHqkWFFkuTR2Wyp7DbYghSZYD5mZNGs2iUP9E4yrGFT8Dx2mb7eDJgLyVUAFGK5pAKYoXkZpTXx",
  "key4": "3HWJAVL4BRpgVHKbfH6xb8ErvHTB9ivahfMMnfAMSqUmmKFDzqb9nJunVeKaDFSSB87YrurGbLJzBkJMXJgAGcq9",
  "key5": "2PUeLZido79iB1XispPnwNhrS8wdoA2aPpJf1J4bPapsWUkg1Z7BpFBHUKjoNsDGz7Nu3okqqSTcH4ASyWpMY8p4",
  "key6": "5gz8PipePbD9eztzVrUkEv18fxZinP6PGDW8qiC2USTQUpbt9diRJ4HNRvJAoSpc19ZgaecLrWTZj8uRqbwaFNCg",
  "key7": "os1ttRNomgqNHPzpXu8sk3kvM7QLNcNWqb87d4ZuRKJAfkmMGSFGs8yJzYwb4h5txiE5cHde7pkLTDBGeGdjKbE",
  "key8": "8osGx83mW4P7efvHgTd1VMWTfk57Q2gZaqwS32VvKdd4uCwPyD3HKCbYNZLvYS2Z9HfDMnVH5ez4RHfXGYZ3F5G",
  "key9": "2ZefaQHoHVKWCysdJnVhardgTexgsNSiU4DKAZqBfvDW7tEMQ2GEfqRxwVxcjYnFRqFFcfxFULspRx1rRdnweF1g",
  "key10": "4HQQo6TKkqgrzUgvQ7LwaGY7DCbaBe4oXLJ4JVufAC6D8J3f4DpcEDnwZmmd8BLfzo53Jvv2LY7bzJW9DskzyBj2",
  "key11": "4JMyAoxXfjuW9MDR2mht2XqDFr77FZUS3KbEim4pybjCReF22ZfoToF9yDQ5AsyLANw1cKpVBvgUmvGDuazHdCFs",
  "key12": "41roGSmY3jeWUcAJJiu9tHWbTpPUVPtDP7pzbVpF2vZ8LHD5VwHbwPiCqD4xpLek6Dzzf8nSf3seX3dwkgXQWhJY",
  "key13": "2rsSEMtGkM8GCbyKGfJtA9bgz6tTCLwCjztJho4cQTgyc88Kg3iWqoCQC4D9Dbp13oKp2DNpjuHx9LS34Vrtd72q",
  "key14": "54ZrCA1HMyUuLwL9noA8ygRu6tZ4QLUkjs3PwAJyuZETs2nc2oE3HkjTdexhJ3D99uWBetD2Ui7CUKeHUvojJp4u",
  "key15": "4XRCHUbMdypmo4DaB6pcv2opmeDxwUzqbRiFpYag5e1h19wVQt76DXjb8E8MLDFMpZLCjf7GjMbvFoBPpDWZN9cM",
  "key16": "ALZtNBVAF3XkG6YA7VXioWNV8eiH4K18Cj4W5Zb6Pksr977sfuKtGMyTZV3oQSpW98q2VaDTzc2eFk89pb8iNXL",
  "key17": "3TozH3oHBtZqzW3VPQw8RayRPu34tZqnNsgeMiDZEQKp7PiaBVqyE44aFa7xMzn8BAaBmgzcE2NQuaGT3QkXktVj",
  "key18": "Rda8Kn6RgyFGtzgTAixzNapamVdoDnb5FWwAcXdKzQfaJx2Qf4L6iQffEjxYbmFmnCMTbhxSMbWkaRhdhea5V9Y",
  "key19": "2QVmgyoz3anz3PcBwzLWdi5osi9M4u9bF1S2AXhka5uSjBuVSjJzLaLmWbhyztxC4RKfcbtwk5EEKrQ2x3Tgj916",
  "key20": "29TZH8Haw8ZH7uRPRs7uhLvd4ZR4zUbfMqhgCJKno8DVbtqC9bKG6JtFGGPeBH7btb8Jd9xbmTRhiP2wYiXvXxBk",
  "key21": "3KY5oNhvkr7TUzgcEVgjVWLv5B6TM3iNQXNUdLzCchoRbrNYHw3X72FxUEAX8qz1BQ2fNWJDTdQ2np8HscHmc1aN",
  "key22": "4Wu6Y8PktMd6sVBTSSs1XJU8gaDPUjYKC1V16hVLQ3mbP7bMDBvdMqHQTWXhZHruRnGuhVFB7x8n1C9NTiP5oZUH",
  "key23": "4CDGdnZCLq1HKUundzWQatccny5Eu8s3Ksc8F2dBj1dBSPcEvTFAQAD1Gb1LqHpaDU2s3AbmTftPPmeSeoR6XooT",
  "key24": "3GrNRCSMzK7wAePQGLPhYUhRB9XkLkhArHfzXs293d6zUCLAxvzCKyvyfWBZh9p1xTYgMtxXCtehTbgVzzm2eEfd",
  "key25": "4WWgxxboRMmL516PGePYc6yPiBdzCnGsuqHZaJAFh1dUXaEv1XvL2WaDFgEHRaRoW1oUY5hPuPe5YyX77wjfMca",
  "key26": "dwdv4XrwWo5Sh8MC4e2byqL8kyRE8FyGv3v8m5mKTLrpLbo7M33LSoCB454f8nJGV9WU8oDSnx8dqgXnJkyGU2u",
  "key27": "2PRkQEszwKuR7WRwvsR3uMqzzkyFRU8pRb1RF6mb5VsAf21PrPzJaADrTxJKzgw3xxVBVrqJ2xfdXeXXhWcEW4JH",
  "key28": "2JBPSiQZAxMpsftuQvf8CyNcKEBNT6oZr2gV5jZ99Z4uCJS9RDD176aPzLWQExCMusNxgttdPcwQJ9pccgEfSAye",
  "key29": "5YoBSjuDApXBoGmxGFkVKQGgFR8v4jKSyTiQrqjSMYwFdPpb2ZBG2Jecr5JJMAfLGhMx9us652pFPkoxzTwzFyhV",
  "key30": "4jXZQUdy7uc9GJ1ysh9YR3s3LJuyUBYepkWUXxWRgQYvESTApwwKtUTdrdKNgaAZGDPr7xf22soGoCTLNiu1D1Af",
  "key31": "3aqwNBHoa2Q397BB1bHk5mzocdHQArdA74n9fN1iwzBVHqZjtcNLU7hPGdFhH4SF6Mg5CzgDm6CqAnhVpjYFnqeb",
  "key32": "3GDHoHUAmUuiMwRQP9XntK9uYRaXFawyaM8mk98781vgMmDok1Lq96zvC1wLAcoRcgYoN2nN1UbaUzPH2binZf6r",
  "key33": "4kyFcWiuxv7a3jefsZsZQz6XwDTVZeMk7aGdYEFU7rkCwgiE2a14VrXkLHKuEtf54XhNDGrUKpJk8ukMVsNXmThn",
  "key34": "5fW65JHVcPKKg5bWWGGWw3WsL5Pw8W94o8KJRSUGdrMb9jVSS4Pje1XLB6RWP31zvjd8JJ33Bqp38dM96Dkq928w",
  "key35": "5FhKbTfcmp5FUYVAsnSr5yPpwgCz7VU6Lunt8v7k4fapqdVkQDFjq3ps5nra53VfxfhBKy5J4WSyUkaJcV9sNAWL",
  "key36": "2bvDRygmdPAyZCfGkxH7h2twFEjaGT1j8S5MADsytZBSAb6bDbaToK39cwnL5qrbbQssnq1aGmd9Qtm9u3rTdwYv"
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
