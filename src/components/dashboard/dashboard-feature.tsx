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
    "3j1w2fBt1Y8zfS6YRDfnxBz7YGDPe6K1ggJ2xFZTmN5jbshDa3M5hW4zdmnZVnG33iT7k5pN3H8V1j9fN4Dytrw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YQMHJb62yhkkRZxu9WhkQMA5pR6eCHDw7GiScJEGHmuWZ3QLsZXVuQuepe3f6GpqKP4k3TaG3BbbjKriGBzr5Em",
  "key1": "3uPkPYqRYctx2knhBgLm9vfMwGt8viENbBvMDSnE1rxCEp5XPhCuziEQP6Tr61LrzHeKUujJcyCEid9BJuCLp63x",
  "key2": "2td97YnVXS1avtYj8pA3DwL8o5YxHQRPWY9N6dQPGSTXnenfpGFDb9X4itGGrrnxCyt44T3AQWZ87Wpvy9duUvZX",
  "key3": "2XD5EALnSZXTcjPWuLA1PhKAa39QqCyVNWAjdMatBxVBSxUJHbhzx3WfDYjBDm83gGr8J7sgEZy1isZJvJKxB71V",
  "key4": "2HJykB7TZMVbk3by8JfGphcVexMPokVfkfuimc173LR1U2tqzciGCScNi7YNeVkrzvG1iu77E267uDCTwjuvbQtg",
  "key5": "2sf1oeA48YjPswV2HntTA86DB7cvGAoaSBwhVRMB4Q97cKgGRteBycUT1MsfHwSXdSNXbnSfbhAnfCagVcYWgNtC",
  "key6": "5qNmpza1r7A6QGFftBvSR7AgP21MrsunnXVHiRChvRfbcFGG9sM6rqWjwcNf7aam1sxRD4gfA6HvRByvsb851Ast",
  "key7": "2tCNkzi296GWwbaxwskrvPSVrGz6cQuodnar4LpXiQWUB9TF9jA5Xp97ytvm7SsACGTfmMTqvoXuchCuacNWKDmE",
  "key8": "2wcAh8mshWSZojYHiuXJhZk2KrbMVvtFqYA5WXf1SaiPvGXpMzAqLkFCTDDR2t6U9L4dSY4dHmnAKiKdXrjfkCQa",
  "key9": "5sagkZhzkzBFPxY7w6VApJXLjyGS8wMe1NpKzM1RjYH68kYxnGtnXNRMJzJeBaXUydK1YVbP69MARXCJDdTuuBgK",
  "key10": "4k76QP5ko93C4u2aL73nohjk7bvHmqpZWr6voNKMjdqSFwie7eHiEhXUAk8BUctvj2PxSwwUnhE8XHzpjBjL1xNs",
  "key11": "W8nP8krJBiqVcQYLvXLzWpoYEnVUSHZMLW7yxSjHsJ4EbUVDTRvBfVXJjeZrT9foBf5BXdUVLcczD2A9QG4GS8H",
  "key12": "2PrXvaqaXzULB64QB7D5We8Xcw6M2NnpmPoxRGL8mMrb3799tgYzCLXjkwxdUp4aDDkfaehKyK4a7fA4YmAhA945",
  "key13": "5cZcfrUf759SCn2mdKQcQTALhMj64y4aJQDJ6fSNx1JpZ4zAM3aDD7W4bdq4AorxrBuoJxkdpxXDhodcdp3wgTqD",
  "key14": "5GBz3FbAu5aTNwyfrQxSUkBC5Quu1y9L8VE58LJtHUhJLbWxf3JcJfkaJZqKY47Hm4vks2pLN5nGKwbm4xNRRNVN",
  "key15": "38jttGpM2fjbgCkLMbA7Pt8WMCaxtFP3UYKUKTFaw6FcBHty1FmREW5JKShVEb5F1WkZ9eEt5puHvNHbxdi9PH8N",
  "key16": "3ASSP7ZtmrnEs4T9kFanyagkbdh5s6oYBEAdDGouxauTBMjf3btcQTPjUBmqrG9xYuUcDx8Av9QGvU8FzcTmkdJu",
  "key17": "4jqdJuJMNeA32M1JUX8zQMRvnK2ZekF7LHQkQERBEbSa4j14EE7dsu8rj5p77C7VVbiDkUXwJP3BU5Z9Pk5G5xDu",
  "key18": "5YPj2hwrxC4znmB8hGcC6UcTAsZYQSS3d67SZdL41wfJW51e1VUphG4piVPLmzp9tRXDg4ux97FXph6311LkRmrU",
  "key19": "3DjLq5NpsmQLC4rNKihxnvQ8QzBo2t8L1dAGVhABQLRiC3AjWfbqewV1QT2YVC9BSC9LELguHfa7NQ7JJKpXzzXG",
  "key20": "4nddgRJX88kcNJUYQZfJjuPxuCad7rxVZsLBr5WZmDZxyAVMtuZZZFswp68fMgcenCZHS2EbxgBvkQiLfMkHT6qj",
  "key21": "5YeFSJZG7D4FLxUSLTCqFJguCFyChL2FAZF8gMFW1vipAvQYjBwxoCZqyAxJzEBGrxp5Uo4YnL2gNreajf39yqr1",
  "key22": "3y7uRVMKsy5d8wB2RxeNd4WSTwZ2EwvvCwkdzN4qL82aojthxPmsFKpBg5KdAyhgV2a7T1j4U4w661LNFLgjoHUv",
  "key23": "3uhA4434Uc2a828wfKnV1cfGpebQyS4vwPfpLu2xb3SdmLGAsd6jN8QZP381nwxM74LPLEiHTm7mhJT11E1hEXmp",
  "key24": "3D5Mb9hsskV1Bi3SZ4Jj5Vn9cM2eENKuuKE4oWBsXkpwgFeRTZrvSsGZ15mExksEgUUu9iszmy4Wm4CT6kq8DthH",
  "key25": "5pqAjByuyZCwaNQ1YS3GPWXaFAAt5YDY7JeCwMKReSvuGAE9akwP3Sjw28tLJYWeU4uRefnadiTRhragte6T1XHD",
  "key26": "5Mgkoz1TGYdEokzesSNFKK7pTs9hCaEoXwWLms7Wwcy2X4pWGp5BcQuedzQwvdf1hiqYKa9Xy4wamyLkZZPhSk9n",
  "key27": "2kZynqEAskQSaMAGmb8QVCPU6urVx5SEM5yW6Yfn4BWpcJ8jYHyQ7c3Mmh5dcsamjon2J4kxV7v6dt7dCsM9s891",
  "key28": "3QgsErCjUHsFcyKe31RZBKiuJqJiHFcyAARDahgq2nNdw1GsSYDAsf3iRtBTt9GPnG4t9u5kcq6B1FqDwCut94fF",
  "key29": "5aW3bNfQjTySuUK7Xb5mvMsNsrNdSnpFGNZDjH5iRGrxWfXJB4UygZcYVQXZqQ5WMWa8DnAM76xdScJGrdFf6UnE",
  "key30": "5NXTUAFn1B6oDi4iJMzsmnTR4GDF8CC9CAj63ncnjrv8pr6NqEcckBj8NEv8UbhmyqZMqZ31LGntELpEs1aReZaa",
  "key31": "uVYARSMx92JE9PNCC28P9tp67K5pE3a1QaxyZuhNoUjYDrDngZgY8CZt2A5dd8pEZ9XWCVsXo5UxYH2jjHZG84E",
  "key32": "5y1BNgkrBnEeNqY8YziZycRPZMokb29VSa3WCeUoFkTTp5CPpheRcoePdF6sE1RgiMBuGToGDiBjK8cXq48vReMk",
  "key33": "3phJFfx46bv2fkoD9kBAUPP9FRRVkHfNMRWrbB2Xz8SaHrycmWnYRhH5EWnoWEHmYBpkpJoM7RL3RasmGxzSgR9F",
  "key34": "59bMdwRKfgAsaVRktyV5CJG7UewzFG2xW4NWUHidaYCP21pszNQxxqQeijibwbf7Uw8HVfRyhqjw72gq4CgvVayi",
  "key35": "4g5nqyZ69BDRjagzVqAPnsAivXKQ7E3eLWBBetbgu9adCDYkrjT38wn8Na3rAqjshDpi3XqTmdsYG9quqgYDa8kA",
  "key36": "5gJvsBWrrFF2vEyRMmen8AfYeEsDtXQHdpaZ9M6ZxbmyLwAG785PjtPuzdEjwXpxZxDee5NUY3u3ZENqFodAtcqX",
  "key37": "4MTpvyXC5GD5QkQD13twbRwHqQRSoSbDcq9cNiY2EtkXbdaTPscv1GsyzGGqxd4fZtHBiToMtoXxiF1sNhcC51pN",
  "key38": "5vyh1wygGEM9R3gYnUaxobYqEzi6ZMSSa1WaiRCRdoEccy67KAxiVtMSNti5ocpy16pHEfPag6kKygNAgduAnVqr",
  "key39": "5X2Zp88w6CL9BvpBbCAw3hd2mMrwG8fF65xD1dcKvV1SCJ5WTnWweMMw5uUtzp4nGZmU6CozYP8KF7aTb3Qsra8m",
  "key40": "3gcqRAK51DhJgf38CD9hrUGL5f5KfeHLXDqzRbVuvP5KhT5GXMo5Va9vawowd8hypAwYxNpfxmPM2Znu9JXMnAxX"
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
