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
    "2DjosrQ81VTjSQ6hFAtiqmLz4tGS6hiL4hijh1aPBoXZkCAhy2er1UgcaEdCq6Q9e1cStk21rdzUsjLebkaDjgqb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4w8gM3L73vGKHeiHcB3R1GrqMv2vDuRx7HJ3kJtBJhCGDh6F3turEvmK6ek4a1H2zm2BX7WXj1rYXku1cnGk8tqw",
  "key1": "3G8dhN3R2W9N4CrtDncLGgJQqEs1aMpNrwAwEKfsLu9RyNch9nyJ7UQ1oMCKCN3CBu2bjXtQjqayJ3RbRXV7Crvo",
  "key2": "4aHxLMAjzWWGoLCTKLsMCoULRFbLU5S2G1DTC4eJ2PTfHcjR1WxE28FD4R6raiuD3iTVE5Py3YQEKEnMx4Dh7Qm9",
  "key3": "1LBfPQHc1jHPtVF4aNpsNYK1RuhYhLiyd1gWyBqbVYSogAo4AvmQq6RMPVZEAKHCPaax3aZYtscY4a7NQZajHHP",
  "key4": "2escoK5Q21U3gEhQVrzdVAFxU4Pa1ZhkEgxUbZp2izfVHCDx6Ja8agcGhRdZ77eBABYn7nXrNiiLBT7H3Ae2ejfB",
  "key5": "4rBSmZpkaWthNf3ZrnnxYyqvEvkzZuq7bk5q3snrL1k9qSAs5JBMxrCFcbRaayb8mH4KRvuvnLWxbBSXq5U3u6wu",
  "key6": "46yCdUS6YLPxsS8LvEXBNHPreFdoXq9CZp3EuTZ3MHxMzFMoEFutAhRbusJrKgjJmMHrw2qiDGLz2RuuSKKgvqwk",
  "key7": "mNm343qGmi77yWUjAy75wfCPxrvcZYD5U9hJ1uXwzTu5Srj8XhjPauJnPRNsHeCdT43omy7mqaGaQrF7PePQU7o",
  "key8": "2X6cTWU2ACiT3RWK2swQGRf2QWfPxS8eyDESZCqUVHq5ev6GPM9MyEKodJQAUTfZTyrr7CVc5ib7xESAASYt4SQx",
  "key9": "4UQu8aZw1SJBZhcv2u3RWosb9BVMWWCSiHpMTb2gBMJmwAEjcrnNjQiGiTKguKNWLsCP3qjRKb39wSWMhsRXQuRf",
  "key10": "3Bsw1PPg8M1tFL1VQjE3crmCWsQcnbFbK5SBr2vLEC1UrqHj4Hv7be4BiqJ8Dfhym8xkrmZ2CZDnyoauj8Jz8GnE",
  "key11": "5RbmUgKQaaQrHcabgQK85mXmmjDwLQTcTxBwkf3KcRiQ8J819TRYV72m7qvB6cdTHLzWf57hLB71pTYGMGQxnTZ7",
  "key12": "5dnZE8XQwxPEoCfgP5Kx5QELPauqeM219S3fGHSqwmRvy1cDZkfcAgLwrSPRFiFyWSrVou7v7gjH2eUGH2iouMLM",
  "key13": "23UEL8gcEg5DUy7MNngQoA7AfWhvCkgSSyKZfbbZ4NKXkNywGor9LXP2cqhZCGv8fDZdm5CEtLyN9c46YVxmWyzz",
  "key14": "2XbC5MiFUjzUNc3iXVBg2UTzGFGEbettd6Kn2U3AHchM4ka5FDkLCKVB327YYQSKE81CFB8v7gXjx7bbs9F86ggj",
  "key15": "66XeAk8zbXJ6YqcDm16CKW4SXGzn7ScxsQxiF9yuENNSxKhcJKQKfQRNRMU4k4M6RuuaB6EiAJBfiYuooAudoenk",
  "key16": "4YCuaXCQeUo3PZvbBDUeQvGbMDH4BCVCQdBZdNuBpWGmX96AzaC6F7NFX8KJ5krbdz1Mw5WsG1bYrPvWTBfcw4tJ",
  "key17": "4jSANTkrPnRzbP4G5CrfYr9kjSh7GxWNrik5rQcXCg5rgZ9NsyywQ8WmSiid4N11YDFpe4dDYiqys8wwrTV7FFSG",
  "key18": "X82zU9LHzkrAr8HYyaJbYhN5S3AxJwGtTdgjjbGuiobv3urEqFCwyz2X2Fm6LnFPa7uEbGXVf5XZEFxtGtSWNjQ",
  "key19": "kaERBYYfvRdAK4BCLfoPXZ46mfodZANToPTzL6skgz7WcdcDXzP5ZBxGUSGv4fm8tseMRokmZ4VUduArFBAqXzR",
  "key20": "3pm3wNdPXz5a2ym5R1bRo2tv2Ta4Ds1bUVkHeMn2zLWcS1sn9ir4r5FYmEhFcZfu4dcA1xeCDvS668PWhHuYVF81",
  "key21": "4GaMv5sPYhnr8sdQVDRAij8Q8EfsoBm9rAufq9MngMkA71bQgrjuhepuqKXo8P5iXThvE5FHSVT8kY1Z9ioUyZg7",
  "key22": "4W5nXSgg2hWpq4g2ae3VspKG5gZGWm7CNgwMXoY44JzMyWoz3A1BZDoBQYRTBESvoPDXeUpYHEnUW3Dc2T7jKXbs",
  "key23": "3RvsAL4ZVhJBNAhJ4BoPxfFtyUgnTcEhJqmXWW7jt4FH7whUQeCy9HWuRUBTXvJjfs6meihvg6KHz5vDmYGhW572",
  "key24": "4o2MViayMFfab9kXfGgQoWrBoMVWYKcGnA62xoMjBiydZfvXUzcPCpqX9Gt6rvLHkuzQTh9GC5BH51wCEoEARpK8",
  "key25": "617JtL72hXazeoHr19nnFCxPjKpFuZvb1MFVN6uWyQCst6n1XUkQvy5zMY5xicCR6KRaiVmBt1Yfe6ZrbKZtboma",
  "key26": "59KPNPmE1XrfXrbxTwzHxTPKSXibHxCy6sXt4Y3qnqFhZHXDxcpzDjMSci4gbhFdsGcQZPQ5kphUuL7ksHiENu53",
  "key27": "4eivFuHUuFAwE8MLzFjLazyGSnLbGT8A5MSLBqeNcxzgzBaZLfqvvcAF9LC9fM5hym7yvnsGgpVyW979Yo6x1JbY",
  "key28": "5WwqKPVipojRu9nRM55MKuVEaXdsegMcPRpCcL6Pq59dHkWRUMY2taUzNt7U6tKaaxZDjZ8KeFqLHhxwndHX4AvD",
  "key29": "5MnsemZMknqxjMvAMbMg7q9WBdh9dwtwr6JnkBK9RXex6ANKbdhT5BJT46NDUuujX6BufiRGPx7Z1Vi4Sw92Jrw5",
  "key30": "5HR75a7CFBUpdJ3FHukJBhwm86iXvhLcRWzMFr4ZjrTWzQ3EH1HJkC99fBWqp2hvUNK1hWDwjcWFfHex6FG7uQXX",
  "key31": "2WNrEx7HuRQAUcUyGJaZQ6H8SZXZtpsDwBfZnSFdceLscXhaRBe7P18sPnBUiA832EJbgevP8xNADZMs9PzrUJgD",
  "key32": "4hKkT6PqSABmazhKudGFEZ2W4hFQVd4n3SPMFcGYJUAM6cPhvaQh6XU9Zk3VPVYPNn9TE9Mt63Ug2TtCbzitKFL",
  "key33": "2cFnWSSfH1asZNxENzxvdGbC9d1uvsTexwnBBjzBbmq2YG5oWpBuDuwwXg9xvghuZpWPuHS5MbhL5SRxaNfimAhy",
  "key34": "5XasxJk9KwxqbMbcqoo8TYKxs5fBAv6HJkC3rdod5qccJLGpYXh5ebhNqpDnLHPkCtJvum9UFGP1bhr9GPdzf6Sg",
  "key35": "3gXES2msXXqWSynjEQH1jBtLTS3q52zCqdwoUqJmwLeMSLqdrxz99aiLgPz16JcKC2mvEncXQUHHkmrkhTde2JM",
  "key36": "4JshGdcvkTVibXc7uephcuYTWB84h2QLt6zqSZCr5MjENJNuWzwCWXgzDQFD6uco2qJjunCRY29qtLKM2HLfQ9Ra",
  "key37": "5hSs67HHsjV8XgKAbxQ2cMCcqs88Tpvb1ySH4MKPRSfhTd12V1CxG8gvZVduPq3QeKS3X8sSMQDu82MogRnyK5iZ",
  "key38": "2RazDHJDHWPs1fBKCXwtht65F6PfPTcbsX2a9CvFe9geAxKtkNWF6TQee8qQbp52FGEiMhhSxny8ZTVphCzMa8dd",
  "key39": "mhtFLbHGJnbXzkKDiHVbEU3pCkBsyQztqx9hvc5RKAKNzW6XQgD6Q36udFUxPqYnsd7b1pgVTYMAtWcBEyeC2Sg"
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
