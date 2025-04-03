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
    "62aXdXv2wcARYEotSZ98kfoPV12qNUs3rUFLPHwNUEEaasG3JSfaGbhTQGw6bgW1pk4ev2qw8wqykiHUtokk6oeV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QiPSHAmfVbx4y2G3bpqi93PJZ7oVFcuKxDdfzdZEDwsNskqSQrLJAVtU7NXdA4spXJ6TYpF9bHipA6U5MJKar4Z",
  "key1": "3WNWZsHvnfsqQ39Xpg9x3Wq7x4X8MueSeP2RYLGRzz7gi6CGGQ2AcvLACaqPsySUGVKtLtkiDk7B56HSocMsS7US",
  "key2": "2phxnTYpB2EUARw3Z4YXRaJAvLB8ArZWJKrAopigskJzWW6ha1VY5nx1CK4FiJc2KsGX3EhUdA8qFmwkH4W479iJ",
  "key3": "3Hi6SdAKKF3VykJNNzGoUcVnuk4Ph1XQrBxZBY9eDKBeixoLY9hLinMbjQYaKpUNBmfdfKf7dpETJVuWsS6icnbo",
  "key4": "5LSrFNFoYn9YLSmy1mAxDo9GbAFGTf7wunSCDHWUEzLVUaAqcoXng5GoMVD1j5vP9CMec6tBht7xtnSTfGExWKAj",
  "key5": "44W9ve29HDDKbsHEdGNYZs1XuFHd5QuLVRvhAicZWSYj2iYXZE4VZ1gAiZpYikRnf8CTPVVyQxpEJ9zqsQWBcV3F",
  "key6": "36HXDsTZeKRguanZcKVKXpBrdiEpaPMiHzrmkYQVjyqJc55dcFiYkdXqVndW9B61JyNapBXH66bA7J3iV3MAKQcs",
  "key7": "4hUssyXPfhT1yQHAdS5NnvcyJur1F1PeHPU8cUuhRQDSJNmWQ4u72CfAS4g4brTkU3c3nKDQxUuz8FQy5RHEh1Zi",
  "key8": "22qVfoFzwQeFvE6hnMfGToLkyCKHVVkDzCEsuDyL84DeutCvKszuXrEST3bsJVb2c5mMRURFXZmtAFRHgGgRm7eF",
  "key9": "3HANxVZS5W2xGNNcbCz6NNy8dTgFy1k1cnFH4exXN76bT8WgQ1R4Meu9mcP9sYuzkGoZM4NA29nkDRvtWJBbdZVF",
  "key10": "4S1xBKANhPuc1eU136huRwwhHeQvM2mkiT63CzQEQUSn4z8HXkT9r1o55SSL96GW6u3hLTZNXmYZv8cPJ3Emc5DA",
  "key11": "23o1wcFKNrBfd3kpU5HVBx8tU4EKfykQLthDZXh59qnUFBqUbAAgDsTbYSAc3abT39pUn9BMjSTTnekH4bscENop",
  "key12": "adEfLMfqGJBTLmHN6pej9avGpHFVDFkr37PrsBHh1dYTsHAWBLpL1WGisdDfrj4M5mrrRkbhguqqYuFyQkop3DC",
  "key13": "5CNhZ1YhUWGAJ3Kwzk6sL7KxYFxuQtwZJNnHf9kXqGW4rNRry99R8LpWTw4KRUnFk42u2pN1CFDABy18GBJq3Vmy",
  "key14": "VYzcuur6aPv4tNt5x5twRQCDMfCcJ5DrHJT3adTbA7QXzMwvzkVTgC8rBu3kFwWC3iQ3EUVwKxnqrbpRxbCWvMS",
  "key15": "2Ng8A5HNFdptKmu9826aAsd64yCFuRTiSsoaX895MjazmZEXs5mhgyrxY1ujeFhTj3EdaSswM6tsFxFakHWmRVeB",
  "key16": "3WL4TAxciiBuwECuemonA8nuko6qisxQFr2boGKm36RxBbPtibLvpC6LNmEhoC2C2vVWi2U9Q7t8faw24M4nkaqk",
  "key17": "2TeDeB5AhCTWFFw5gGYBecd1w3XuEzKXUb8CZ3RixkwKGLrX9aKmvu61aXw67rZniJsomVdfS49dyjfQs2Zg43Cn",
  "key18": "G9k2JYrpiCeoRZ9QhspWdBLHMjPXCgWPyXe3sAPQ1ABVELgRaHv2kenUcUg8quAqUQam6ffzd5MARk2E4oBAK72",
  "key19": "3ecAXHYV5oWwhNs2Xkj1A1AcopTH3PXmQYDgFrmeRPuBTGbh5M93pJpeEqja8ATNy8gWpgHY8Sn2neRSg4oNv6sA",
  "key20": "53tuYNEpyv2keofRyVBc5rrWabpt6JdRwtok65H1CpN89GRZTdNEtdysCUeB22U8X3CP5vPupZ2SJNBVT52uR4Sv",
  "key21": "4v8jc2y2zdxfs9JgpE88mULy3myzbtp3axoXTjci3SLhAWiiyR3XQxeDhmGUvyGC6XAmo239yEjWv2CLEDfgeeUZ",
  "key22": "3diDbnARJe4ZKmQB4ZBXjc3xivDja2ibhdBmXmgn4NMoYKiTtbJekfETEn3Dotci9X3rpvpHW6uMjoApUN4Tokp5",
  "key23": "283NPwoenzsoyipGcBg9XgLe7yygMiSQjE8tXrKwQBUFcRHZ5twC3EcPpW51mRsrzWwZgZQXM5aXPaaKKJ2uKe9B",
  "key24": "3WAKu5DbaiPHmY33KvTfiYS3uCGEgV276YiykQNPSLw8aoegX29rcSULRVf1d2AuX2iAgcY1va2XmT3ScqvvvoAH",
  "key25": "2DWzGS4g1NLFoBezaCvJPuVwjXiFnzvKNP6UFMfs2YQUmzVfstMB6MDmLPc8VDc7GDz5914AFgpzo87Dbp96xwT6",
  "key26": "rXRSChxGiGXRj6FtvJswTW4LvFqvX88Rg4HUMcTFXNX5VMV7gkoRXNo5HYYWax5SChvj4RVcsCY3aKKdsDDJCGK",
  "key27": "fb5nnv3bMTazjFfiMpYEKBw1FFtqcysBgjyZf7ae6DoG7TvSHpM9W5SMHz6L9YLmAsAZHzHraSkNiAXjKDkTmgR",
  "key28": "63rQdNwwFjbFLa8dyfPEWupMEM423HsPT4YYz4ngSggXxAedp2jnh4wgwY8pBLYNmyuHK6ggGAYfyfENgX9a7RMd",
  "key29": "4tW748b136vrUekxbAzXF5nhJTNtyQ7eVvh23UpoBd8eoQDAMCYWBCdxqiEKwrySdHtHR69RtjnhmnWsZq7h9CSo",
  "key30": "3soaoyXhGzCusVFZMJjFF5KpM8Bs5DpUbGxGEEtFkuoF13z4ryB8n19b6Z8dfsRzwyWCMmMprvjTbh2xkRs9ejvk"
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
