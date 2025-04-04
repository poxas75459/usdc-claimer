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
    "4ryEyT6UERJbttxQJiKYBBwFZHD7N9iNxYKAxi9ME9hqFGU8xWRfHoNL2ZNEjFp8rWNGaydebfmbH3Qtr5aJem4u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AhKjDWs9dP4YJshJaxxRfbaAFCvUmqbxEZxYtbLsTiYgDmnp8eYyXkgUBKX4dKsfHToJR1Fqm1r6RJsHzxkDJ44",
  "key1": "3zLc2FEMocoyEXAS3tbGG6PDSc1jXF4FqDv9nWCKTqY2G6MLsYcxLdniktf3wDFVQWwvL3rPVdxJ7n8VchpXK5mj",
  "key2": "3UeFi3zpYZoUeeMBnQMcNMniDFbmSH7WKC5ah5v6Gu8xBoduyMVZetkuE5Vp5FgtUp9P1b1vBzyJiReEEfA9sq9B",
  "key3": "3vdXUznPoy2r6mzMc6EvJmJcAvumB8m6RaLzWk1Vpfh6PukFddnS4N6MZyZf5xBaLVWPJYGfpnSBciiViot6i74h",
  "key4": "5bqftLbZvQ4rmgHriDzeXsQVUzhzmwJ6897Hvjxyqh93GGCfGTfS81sFAVufGCKiDMVfJxzhRUfRZghf5jCgQeej",
  "key5": "QYhoksyAXsNbVAw4SnEEhxYASFuZQhzRJSrfoLtKc2WcQwabmeyvTZSThywAUwh8nT6yEm2CGtZw3iMcH92yBA3",
  "key6": "VmUqxPsnqyCMaa6joterEzLs9rkTpUbyVaAWW3XSCE1vLGD42Vzi8vXWzf7VRVPVvQETenVa4D2652efwYtGmjd",
  "key7": "2uqiXhQQMbkA5ZkdJfRbRagWHeue9U3iHANYsUDYJEq41q7hCUf8kSv3wLMLgCmSc9oHVpmdbszBqDA9tNavLvQk",
  "key8": "4AZ1ZZqZV2fUuQvmfSH22sGyRcQezpymK1y1DFxsuihdsceN4yNgBHLSnHhct5oDLhaFHSmstwxUxDVYtjE3upvq",
  "key9": "3a4wA3eziianALokwGcTVJgoCD9fo5yGxif8s2vf1jaVGyv8fg2GfsgP7xzFyPaKN7oztHASLHWHEwVEXXjHavx8",
  "key10": "UFhSx2SxEypNo8UNshehsQpYW9nALPd2tRKih4cLG7m9FMAkTTvteUG3ooEavv5gm2TjmeFgNREUE4gkQN9329K",
  "key11": "PC8VLgcBjteRRwBCHJpbMtCDFHewqSthUDUnv1R6hXjozxYfD1P7bafemA4nsoCiM73absdw11usswcvV4e6ZG5",
  "key12": "3izYp1YDrp1WG9256chjvt2UPT4rzp6pKNDuYMcpKzSucAC4UEd78UECYctrXyvoBxeot66MocoSdhc83XrnNSb8",
  "key13": "5mffQ4WEtST1gcj1DBoSQeni6o64T6SQ89k3nNFkXHSJzEnDP3b7TaxtphU86yL8HYbiJNtF6QJoBzQ25991Aava",
  "key14": "NdzuXfu2raYnd198ZFQNXx7HibqGvErjB6zJCrgzThZCn1mNQkxn7YhrkAWiQQAvQFD1txCtEZ9xLaVoq65XMgs",
  "key15": "c3jd9i7E2ErrpxYRHzyacMbXnKnizD8dcb9WhcU7gyX4WvXKga2NqPg21jt59VNKvhBMScpCca6xuCkvYNzWgL7",
  "key16": "a3jEg4uaqpgwQRkAuJB6fQyokMbRGJJamHMB9KUuUGKiVXNfZgwj12RqRYMcAdGdn51Ap3ZYGGCHyHjfznH24Xe",
  "key17": "5ccgHM2u2YGS3DMhJwisbgRtRYHuPGwCi3nTRHyk9AxJLUAZ9mrwMKRgmjWifQFYpWKkAKdTR2jyBJjYXwvVpcU6",
  "key18": "5ytfhamAJLG2tbLto2GdsTxpERNa9QJ8fwDWq6FnbUyvPWZ1ckQhUNTYKymjcg8b2Gf6URfUpyKDMj7KUbcFJo7h",
  "key19": "4vRMqH3T4i6ZmGRMAofcg7BsyhYB6TuhGPGpgZnXS5QzkKYQ7evcaN4CyejZkkCNxaRNPSqzNheH3AQRY317psE",
  "key20": "3PVGd5LpACfsjPjKmachGewSV3oL3kUHpAzrTeG1vzDM867svGkxGyvotTGU3H1Bng9LbtuysS7axX72BUZeaKqi",
  "key21": "5nddZExAzWsT2oTgo45ZmhHaWo9Dd6SV1unQJMGKyzSKwfN2MExxdPFBWyLxB89HUdsbmPDUcxg72N3zWn9SddXN",
  "key22": "h1VbM18Eb2tqJLoP1ph9BLjUuRnQoGXZxRbBeUPAcwQg3bT1vNYzgmZSxqB4FerMV6ZD8Tnha7CSMgRCYSbLJXw",
  "key23": "2WixeatxrsvDR5SNrLc7vpGgdq562cwyunfokcCnJUF8GRHAVs7MMQKoRVHNqR57oxVr5hRUZ2mf7SUUqx4p44f4",
  "key24": "2SBPYsd7HJGNQ7UbrijsKYbUGw5DZVZRRRbumBQTu4KG3c1iB6NttY8THxhY4N1thHrf6fCgvubra9XgkwqYZu4f",
  "key25": "2vfzMSkCJSWcVWs8Ubmc8J9YPx3o2vsm1wU5JkMAB7J6bjFUkvixcHtYEiRiM3RjbFVpCtHqZVzq9LPr2fAFUwN",
  "key26": "51LcD5kG33NkTbEjecoNVY9BmZ1n3XWvK16uKJfdeyp5NTev1jA1pARQMgmwWCeXiuq5uSU7RAJgFXYpnWd7KFce",
  "key27": "WNfhVeycT1AVcytnrcPXSBp9aNyLTXmKkRAax5M6qKhrj2nhFmtufQQGsspWctBtDpCJ5xxTykSnibxHkmFCKv6",
  "key28": "3eyHCHE8j5UwUAuXKA2f1kr88pRjXa1fbUd6t4YYtteesRu3zLC7k4r7rpcc7F9KsGWDHmBJcEsP8rKcPsZ5NLrG",
  "key29": "3W9x6fF6wQurpjU6RCYL1cFHojEw2X9wXFDUQQqvjDnVSVZNuUuKKnE1ZgtD5BdBzEGJ9AEuvfdhko26xHYA3RNF",
  "key30": "2nUyA1gBnyS8nSBQLfVfm1UTVjj2djp71UQWJYBoT89NVHRuNANYWmR8Ej8Zv5DV22ZeZNNWyBX1f99s5vRbYPwL",
  "key31": "2TAaaY1A5v2PvCmeM7cMNppsHJMiVvNywQmYXzrUo1wAmdFVk5RwE5XDoCL5eKh4D23hzQsNDYNUo84ud7kPxCy",
  "key32": "3NcLJUaVie34JRuEbzGFUXLQiLFfyV3K3NVHBSQWD3te1rzFt7WXo4GM4EksiYfmMSxZwiXXjJBNhLR6cLJQDHf3",
  "key33": "5uvszqwQPeSuvUXWaL3DBPYqfPqxigaZySjwtj2URZfKotTUZpmZVLFyNFFLfAXsrWTNL5NoKp69jWjk9nMKznMF",
  "key34": "5pCmYxtkMrmbmUaJH9bNnqP95aiqAmDDT7ofDLEfSGN3drLRPQBxb4mNAcrBHa8H4PUga8tmNu2tsAbFg3WsG5Bx",
  "key35": "4gM7f6agR4cS6jSmvUC1neBWGEBQ2CGkqA8VG5jiuKC8j8boNkHpMsw9Ng5R2eh4X6aaZ4YrNemfYHKK2PLhUrhr",
  "key36": "55HxxGvjXVe1Vgory9KM1C1jo55N2LEp9gCMb6pDfPMHJ9szEDcCBdSMJG9pbzMoFf2cfk39R5mXE5yKGEJAzkYP",
  "key37": "4rRVBvBVGec5edFztHo1GMuemNiE7zn7dHTZSeZ81kvo34ivKATTZMMeWhL5o868LtkgYVxXuUtDUxQB3LvdHN2j",
  "key38": "GVZcP1QA5kYsWmVwDEKqVcoNWCEywWjs3F3BD6GQww3ZM2RhHdswijenZmuCL5qSEbnUaLqPhZptm1g5cV2x2rd",
  "key39": "4dxXyREpGvrB7kEgDYQ5GBnxsENUexKv4xFHNd5qmN5AqxAh4Zd8YZYPA1YbkvaCwhefS6vXVzRBuiESfM5T25H4",
  "key40": "2ujxia2HqdtTB2fDMCJUP5KiidK4XtuAJRiYGzj4q4tdcKKo8nMCQpgKUZ7YGxVQPy8Yz6CoVyADjeQbS4j5x5zs"
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
