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
    "61vHNFwMkUgxoQtuEJbLufgpc1JLzVMk4y2QfdDLcBUiZoPBMFxvBqWo83pGwjtBWhcNND3DvcCW4nZW2Ejahkji"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vAmnzkAHyJYMydHYbqWd49MDziGAsuBkkLRuLY97ypJBYox2pdEjzE3nxwF3kJHtXRA3169rYxbupHaHeAzbP1t",
  "key1": "4oEwR9PU8mk8HusZsKANAh29vL6HrCXz4biRCTMog3F9yspHVUoRtyrB8nafBW4kWbN5CrFEmew8x2UNWWpMcZhm",
  "key2": "WBmW6YsPwzaFwUuFbaEa4EovKZhjGyGX5VXLz9t9RYJWSsfAtZVd8DtJ5BBTozSZfUNLZXJLFUmoonS3pfPfMZB",
  "key3": "5QLGM8YtRT31sHZW1SSv7oCWa1bRtagEbo7pMNPVaS3kLPEYsedb6YjepDSa1uojD7k6tQBSr33QFP6d4TNm4PD9",
  "key4": "4pakGMf5eB2DbDAYVeTpPWmBiudvm2odXW8W9ZCC9Mtwh1RunUxQXRQHrwKnexzJ7DvbTYf147wt9MpK4CQgLaJo",
  "key5": "2TiDydjwe2zDh5cQP6tATCN3ftF7rpKjdbTBxETyF3kziGLNcVKeSHsYcuzxbBVc2c1zFUijJc1mb8tBMGFjqZCx",
  "key6": "YSrRW1jnqgUjYgXx9scy5WMSuwqo9pdKzgggRsrdfnq9poLZPzANYFfepNn18fiC36Ajd1kT5MAcJNgqFFsg7gR",
  "key7": "23EL2KphXV1Rp4jRJxNPqPbD3HXsYdUJicfh6tcDpPYmVuLG9y7tQ6ZdJa48r7aDMG4eFAKhZd7no6u1cHY9wJdV",
  "key8": "4q5SutpYenjQphFzWQb7PDHxY2AB8ETkVqkiyMXuMFQoMRtVvGibifVF5y5BybW45BwX7xvBiMefyfAfHWcoTQr1",
  "key9": "3tQaUkGQiC7nQBqnruHVBTYNsRnDjn2mCtrnBmw7yh5jDrokDCJJesnHWNg6dYDoaDbLJWfQSwfgsfys3C2v97fC",
  "key10": "3uzjiJLyfGt9rXMLJQu5o8L1LZzxArsf6psXFhiKrr9ohL91ToBnRVnkZkbBQp7ppSNDLdxjrxaHJaa89VLAK3YA",
  "key11": "3mvtSmAg3vGNuZWZ2D93cdRihaWDaDtACdky2e1yHrKsUHyazge69YVywjcWQdYcg5KaG16QKj1zQY3SwkhBeJ3f",
  "key12": "CjgDvYgKRHg3Vk9mXdn9SnZmQ1UNFQN7gEjY9uYeGFWQ5yDYE55RcT6Cw9M4hybqwH7sZn2YwrZnYbYC75H6MLG",
  "key13": "4UCXjcywipwXfQK9xrpiZHtuozZUjsTaxsumb6cEVbhawZmZUR4dwAwUP5vqRcUyVjzL9CxCWYED7KVwSWWrgdeH",
  "key14": "5kfBWVQLrTtXrMm83JepW1JTSsam9xXtYshKbtsrBcWTsvAm4K9A88v7mQXPYRMjjKosjEt4mG44M2PLcoRpJUh9",
  "key15": "614yU4Hojv4Va66TEJKQBKfPPMmDeG6Au6PkLiWb1YeS1gdDJ5iCAqJYgr21QQE8gcauH2rA5JviTugpwJ9xwJd3",
  "key16": "38SUNKa7JHynU7zDngzL9oFmH15WvkPLriEJCkWXyeKev4yRRUbJ7muxsCRsPPpbsTw76TEaKBRNgv7jqDDZqv88",
  "key17": "3Ep1PqNVMyBJ49CsXFEHurF8rLucccwP3REgH1oz1gdTTCZvEMrcTNQafZ9WurhdNYy1p1mVwsLt3B5BQbk6QGrR",
  "key18": "2rRzkVUfXyhB5ft97wTYyh1aS7V7RFMjtzezRoVVucfqWPj1RathZwwthrJM4sHeZo3KBTLPxWgsx6FEfspXQi69",
  "key19": "35y45ZuQYoAeqcsCpcuL49wv5sxz3PvutdhNhXiRfSwSNyXEauqHbVKpfNRgCdxGWC9ZsR98piNSfNsbhuzmBcxH",
  "key20": "2Z1i6bFvgVYGEjYVjNgDzHooivY42oA1on3vGW15om9pruxN73oRhftxgdGc9LCWTsAjHv7M6nPgZ2rZhDyMKHMH",
  "key21": "EVPFNgAA28L4TqKaEcKTsSN9XQTJWzATdhg6jAAT38E45wmd7jg62EyhJE1Qj53Mnu4JyyZ1H4QbbEay7tfXHMv",
  "key22": "2vQ3vqSHRFx2x5SpUiZSr7A9T6dmGEYkGXursv2ME5JAgQvBYreP5hRH2AsC3YFiYNz9khkgF2hMkLWiCn7U42VS",
  "key23": "BQVWaKmJiBUEpfgvuDfMW7fFGqy1o4NNd2AS24YzCqjKXvajZ8rAGnygY12a5SuEW8YLQuK7QKjAXWys8Kkr47Y",
  "key24": "5JmdgC5zp1AjDYR42xcwYyUwuhk4KiVN5du98EycRzR1MTckqRjVtJT2LVxhdg9y22q7QpeMLYbS2V4nbnJdQuiL",
  "key25": "5yQrcrdDwoFokkAdP2cg1QLkgz9BTHR4GdHVDhh7TpjRKDnp7M6wKbJK93Z5bLnzoFxnPRFpeCEFxoi1gmnA95wr",
  "key26": "5kovoJu9ngbxNksfUDmt9GMBEnuoFmUbaPTUnEG8i5wA71JZeP4tKiA81kPaTKHW4cDFjTBrZYrst36Ws2h2jRMo",
  "key27": "4Sn466kkB4LRmUW9aqbtcRX7wybrD3kGCX9hNHbWoi5cVN1vBkGnoLCH8YGCrRgeFTgRjDFvc9kyNndbuVaHCwTc",
  "key28": "4AmECyacXbnhLKuSFLFrApG9pUqZYj6hFjor5jU2kFqQYGTTpLEHyyWef6DpSd6fr8ytaA8KhhKqTxsGpCPNRmev",
  "key29": "31cvD2pUi84PLjKMCuaDBKoBA8oZhBswC7BK8FgXg1QBmxUMTPHNmHMKshekecb6tg3wWWh9ZhjBsMgr1giNMhNf",
  "key30": "zDn6ckQA9fJkCPJWRP2jbAnoxYyKirjHeVK4oPwj51AbXVY5qMDKS8MF7NvteYTzMQovcUnibW8AsAVbknzkdXs",
  "key31": "i9h9WqYfihXffw6f9ct97Ppzo1g8b3gBA5Svjipisj1Hzhu8FKUu58C7mhmTfow4YiM8CDaud4QDTU7js3fk8y9",
  "key32": "5EJoxrFKx684ATZTmwB5TaUPsqLMbcKy3ABhbMNByDPVbnXgJY9zbbYDKiBEZcM3covW2nQMStb6nsvbQyVGNcTE",
  "key33": "3Y1YvrREWqLmzUNKrXKAiDXva5uCDADKw7V1CNYT36ryFvXu93b65foHqqEXcCAsht6EJp3kpAYUwUeMipShMtMf",
  "key34": "2VeToaCWQvYc8Gx1EgpvtXaWGF8yuNnwLbzotZiHMo761Zth5mnnGTi3BP6PJhN1d1saQc2W8iLDx4UbLuEGqw9C",
  "key35": "4P7k5zmFYE34SnPGfA5Gv5abNBaydZCH3mkSyCnRqbcix6dBG76jYjt9zXfaFQoo75iysi1uc8xMnUbDEwkiWrbT",
  "key36": "5H1p6K5LzexRFmewEaBCtKtE15hJcSEhVDZgckpGnFqMpJna7zhYMR91AHx75hCpF7pnYnHsAz7pN1jTxaXjRBwy",
  "key37": "66yvQwkHLfRjdAhRaoVRjXqZNsH1JjsjEsibZQ4MwDNDzQtj3wBGJxeTWnSXga5k74i4eEQre3sZNzhgP6mko6FC",
  "key38": "2mhpTMJNoBw2B67mK9a2dzZsjRodi3jqpf5W53tdAxBKpDvWM2h9JqvWEW2qUfTRi657SonAWqPwtRwo7RXkS2xn",
  "key39": "2Xd8saSwJKByQxLV83HZYXVuV8rZm4wmMCwehrn2dNKB2Jjofzs7FhuwBzaJyt87rN6u8fhhroXy74JNBLx12jsC",
  "key40": "4m1RhyY6ufbcbsXpKExyX2FhsVUykoxMpnDTW7veQDGoieeDVKYkLA7hWea6BGT4X7nhyReAmJcshjUzccU27KZe",
  "key41": "3dkmY6hEaB4ZQ3zowVCpg8rzkv5qAb1hKWFbqxdR7Yg81bew9m7vPy9JzQ8whPgfsubxEdfzqCgPALfkRAjidPuE",
  "key42": "3YR7gZ4LpAQrhXoXBRDusWtTyfWBYAfJ1iYZSxXk8uUZgiU2fV9W6Aa6k2VQW8shNw3LCtmjdkKCD3rkLhw4ysJP",
  "key43": "tLVJ47J9yYgm2NUyxvKH67QusVqD65ey8qhWYtgeRsedLiW5uBo9GqyfQTS5iUUr3xvV6v4KnSs5hnkKnR78GPK"
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
