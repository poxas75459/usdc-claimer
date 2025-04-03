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
    "3LPTHGhWRgfPuwGpcooYaZNwT3gERA3h72LD4G78x9vM3h3cTsic1rB93uqjphpUaFhC524dd5bKVGh63NhZU6Zk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mpwhSKQq8D7JDQ5VjaVR5jkXKkM2PtzWzgN6hy39Wy8pCY5ACAbLdA2gTsFwEMvR5dNzjRrQqp5F4QDvFyFK46k",
  "key1": "DMpC8f5vNo493Z9h8wNZugu3H7j5jMXUxrYALJ6waz8NKpZF2AKvo81mJ4S11aZsQ9bxVJKGozjhFJHD8YLxDgJ",
  "key2": "3pDga8MvisFgNwJW5MfaERQzQ3pKJukMJCJjCBYQnkrwGDv7pR47HeVGrdWv6WdFB5dJmTLRerpi6BMC183QWRh3",
  "key3": "2RcGZrgrR8LSZNy4UzLb7dnih9gGujknu8sMSMf5uckqwbq6i3NBhRW8WBGQYGTsrusjNCsRfaiw2Pa6a6uXa4UT",
  "key4": "3RMAariWioETbWaDrHVthwuQmiK6cd4A1Gtn2ozuWFtRPx7c22EQmeUKtHwBvDR4ncLT6zSFJHCvjcXpjg79N95h",
  "key5": "4M1vJE9Cxj4z6yx5imvaFBtxF1Xc9TqEpdgSTrASGRY2UPzrbzq8xVTfVrREShgkh9spuiUoLjQxy86FqQUZD11C",
  "key6": "4yerjHRx8wjMSY7mXVWcLWbmkwCP7yj8cvcrPZFS4iXNtnZENo5tqHJzVUKMPc8uAc1oLaGBPeUDELQfxYGAaSy3",
  "key7": "4rLypK4vwC9BA6G9XJ7zsifEmhqEGegWJVE1hsYNGjiSev4fb8EH3AEYapjWVuwycUUURJscvvYZ7Y4eri6dityf",
  "key8": "3EAL5jUjz9Tz7u9JsQJVkoqeaePRL2uDMJxVDEg145Z4uSGc73vfkQXw14VDS6h2qjs3uuqDjGSGFUGaBt8qNodA",
  "key9": "j5eRTBV1crQys6svSCj7bo8JukvhASS8XtneJ1CcFa2MeyY9viVQD12rcugahfePwn4asUUFDCyPKi4pqHUQESb",
  "key10": "65CuGoUg8gKuo1XwzP5Aci62ENfpb65WViGHFEetLcGoem1gUDRAGLAiJpDTD1KNWykHjvvUxbE8K1ku1rNmor1S",
  "key11": "YPQq7zSFy8P2rtmNRnDcGnuiBcsUtDPWtDLMFUwPnktZ6FYWoZLtBorL5N6PGagP81TxyBLjLzDVtezkwRUL7sH",
  "key12": "3mkb4CgtAmmEZdgE4171Q2ZbbwcDzWGnxfWcP61qVbjyZzfYXNKej8iSxMNHr13cXxdZV5SE729KwYivJRuvKp21",
  "key13": "t743fq4FgR8peTJXDo6ny1KV5szxjbGPak3SRNw2aiSuzXhYpL3KGHKD5svGv6qbzw38pfdWwo3RVAKf2LfkJkA",
  "key14": "YguzL34zDAyX5jsFDuAvHx3Vh87A1XrNTxv6qsLh5DD22aRLjj3mGpTBCi4YU91emEDdTci2kFqSAtT7MzbjKod",
  "key15": "3z92eso6yFZEWuQowY34iW6M79PWRQwsvREk59CuisgxeTFN4L2zYvaSmEE8eMrck56PyFQwbSKHusNGi6zWdeKF",
  "key16": "4otWvR7bBp2GBzYHxs78mU8DCgP28pzSbLQHvozYCV5daD86PiPGGgGgTwgBCoBHBY5zg2dqJEvXxPe3VJrLgZB5",
  "key17": "3BuY7vRnyK5EdxY2s5Uqf9Ew7UWXgtKGjg5yVaAqvE16qAciXL4ZYcN1TnnWX4Cj7z6LxnqYS2ZJHdPZNZxPaR1Q",
  "key18": "45We3e5okjJFEUmrBN43SP2uztbhYdYnrsq2k4GXcMkrLnPCvsVR1r21mcT4Ricj8EVSX2dBcMPsqTdDbnp6jcZy",
  "key19": "8uZKqYuta5PkRT1HdrJcgKfUF8DT9QG66YmvfqwauGMMonDugbDeUwE4fXRbTskqKc4iyFbHYihW2X7WB8Mj6br",
  "key20": "McgqY9domTU6ZHxdSETFG3abWW6EY3y6cqb9ngYx5bzZeA6yWmzZTZWf8S1grHXgq3hLYs2kzJvgrtY125uczx2",
  "key21": "5nKJmFrgvgVBCcSmFK7fcmEeFs5yY7pCYsAPwMC4v9a9MGcS3LLTvHzCD3AATNcFDCs3sfcziyvpLGCnVmgpboex",
  "key22": "3m2uBv5gNBKG5WrMfXTdgbWeaoD6CZan9UipEQPTgJs2xw18S1m1cCX8yXB67X1GoNY24Dk6zDvNoRAKtL85WNPy",
  "key23": "2MYNbEuP9d4o7f7HZtrFuAzfWz6M6xBwdcSt6hyvumwLeau3bPeVCrEYEThf9LYCYLR2P93dF13hjELcmpsgWwjV",
  "key24": "3vQqXs5NjthDHQi2bt5ohzJ2PT14bcRjs5eKq37NwRpeT6GKzpBs7ChMMLXhk92VQgYc6q9FRBkCiL7zq5o9qU1w",
  "key25": "4ZhnpkHiivio3qB5YRequWSi5rBCyTWp7EPCKT5rPgG13oU4jmHrupYfsAhibLPvmsutgQiJGCdxfUVRAJi1dRZF",
  "key26": "2vAxHVAc19Ds17SbBgYnLaQMmSrQwaYgC3ZtsaWSTBVtgLeLhTg1q6F4dLm88SSoUFWZppR5bTQH7Nuo66L9ennD",
  "key27": "57VnYcLnetH7o66LwoC5ZEc6GYmyCwRmUc9nCDV4ouyypXbiVMHidqzYGDQAyN9bTrNPXSp3n6vcJDgP6DbkSoVy",
  "key28": "3VeXNEAiR9rxUozVnLbmsM2vr94sLCPHaVohRjsTTVkHrzFyJ6tQLsuhseqQV6Z3VcFRr6QaGCGh8MUGnw3t62dZ",
  "key29": "2cTd18EebUv1CRbotjXUTEtrokPXJceFpRc1WxvfeNNiA7KhqDVY1dbDiJt1UStE4cmZL9M22u4M2BKV8tjD2CfD",
  "key30": "7KwtjBeYv7WTCiq5VUUC7LUGKWbyD4P9metdVH7ikNTqmiNKN58LLJSNywnG5QmLz1SpVpUK8GuSX4wabDfE7yu",
  "key31": "4oZzV4F6dWPJyhmX6QSJk1FS42uTf5WnbdTpGhNPE5rSYstosFTZvhQPvZBpVzfEpit7jsZh3CMmRYzBDrpRbtac",
  "key32": "5hHCf5kC9SnatQeMAdiqTE7uUt3MYPdtNYvFnvFZ1adHcBCWqXqyVNUi1JScGRYnJHaBLXKjPUvsKQcw3h3q2Moh",
  "key33": "3SE4iVBe61LAbimaf11fqnacfNWJn3Xe7bZ6WXKPXisMU9kKnbFB9Q7yx4siD3uWxmJfEbjLVyU2QGQPFp9vwEAS",
  "key34": "RUyHL8aGb2zDFfEr2tqNvjwT4wKduGBtJMd42prNLDbkSMTq2BuHN72aLm17XYZRanSyxvtFbTo6m3QfnDYzAKy",
  "key35": "55fZLGcwntpvHUFirTSJkkFzYepznVzX9LZDBHet45DJrQ5GKNQh5UJyrskH9djETZeFVMKpXpJe3vRBn5kqeyrd",
  "key36": "oAH9MhH4Y7pxPbGzQ2yE1YLEcPyQend35G8RsLu6k3n6ku6GaXguX6Wavff2mryQXH4nxexdKpvoriQoJSoCpRj",
  "key37": "eNqeyLditqoZBSvzGFU3hyrYVvPZWhbQLrffzENJ1FcJG4ZNggKDTbZc7j4gfvpDaaNhm6wjfTXkRfGBHm6VSq2",
  "key38": "SuAPAQ721BwPgkahq36DJhAqBGCaCVCXGWwnQtVNTpbGLAyX5Dzn6taR2W4srv96NR3XVvAuTUPhdvexPJRf9SY",
  "key39": "3ViWoao6b8yESTHuDVDBJGGnBzbYkRtRFDE1ZYGqqmcTuxW7eUMkuYmzpcdoKjoUb3tChvqAQRTeZiPEi3EYsWgs",
  "key40": "4v2UKJn1JeChBSpbqhFJNmMTP2mnUpkSfjmrjvTaPeebR71j2dkYiMNFByhQXX63PJaW7VKjgDQjk1gM1eNTJjUk",
  "key41": "2MdPx6dByoHWvphwCrvaJj8Zk3Fwht1rVXrN3ru9ZXgNzTjyRq687VnUP2xxpKJrfDL2jYLj8SuzCfBuA24anQmb",
  "key42": "44eK3SPv5X8exaUAipC2UNFnuKU3Rjfm2urJhSwbC2n7PH8XaPG7JVx7WE1pPm3D11suKVsg1xPLJoerw8ByeyGe",
  "key43": "2PQm2k2NJNFuXBqoEFpogLWrfWajCnzdwH1PbwMcNf58kA84YMJwgBMJmnyJgWZMbpXTMaEpd1Z6UJMhcFPNemTb",
  "key44": "5HrY3oYqDBNDYBZLsZdh4cbaZU4guC5TnqiytT3hboXkFQxzHdTW9HWfo7mqoWzUPmnbXtGVUgrZM3jiTiRBEuJ7",
  "key45": "a2gYCrrANiFoQgV5RCFu7EMbv8zMJbQAw9FikECGpUXbDXq5uSshXZxnDG1pYrnXTx8DVcDRvz7AxnsYZoTwCxA"
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
