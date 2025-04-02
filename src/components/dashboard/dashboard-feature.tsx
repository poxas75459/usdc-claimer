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
    "e54orPjCtjq4YPr62ZxU5FXDrcnVPZ3CSFJ9y32jaGSWu1MfDTf7xE8WiPevGF3U5P6xpWtKickci7GMQyJMJq4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "82QMYedXQrV3f5hVSsBaPrPSn6G2jDf219uaxn5ApDz8aDwnumw6ug3fRqWW2dAcQvd3oiWeQk5PCKAxAvDRGWT",
  "key1": "3jGwr3HbtKd16W22oBySVw8gPFW5byAdVgYU66AE38Bq6b8DfFVgC39m2fuvVMNrh1oZB6xxopPY3u2caeceVUEz",
  "key2": "312jahK7pDQ9Mmo57fktqL57NgabrxNQAsS7s95SPyYhRwwv7KBRUexzchGH9HBkTRYD6QTvPwyodypr5i8SLrSk",
  "key3": "rohAmbu9W8UM64ApDgRiak5tYEkkXwtWbTNgkEsXT3wgnNkiG9yJ9GDWhFrY6axmSTk5FrK9r6iPrkraH1Cdxya",
  "key4": "KnQtHARkvtXpfv6L2joArpJ8rhwV1xR6Ah68MMVLxFYyTjHE3hVR3tG2zKTgbBQVtB9xWBmMboQZccUsG8BJ3VF",
  "key5": "PcXemxx4ZB8GC3USC2kZg6vxjMjWYTimK6suDdWyzACJeE2qaiyfy56kyuAgQUB776bGzih1AmNaVkcY3m8TbPb",
  "key6": "2vQ9v9GsCBvcjaAaiP6C7vp8XoKWKBobkm2na8udnkaRWguDBckkG63G2D45pqurUGEyAHrvcxjbnbPCZr6tz4md",
  "key7": "5w815LxP4BL995B8HworAVYEdfdTAjzYbDJAWscFYizBMzBDW2qWFXoVzdzJ5XSJfPvogu12VBJPp5JTQoYNCanP",
  "key8": "4HDwM5cjDaRxxALsQP4XA8ogvfHkzeARjwC4dVbBdn4VJivbXYkdy4KgNiuCk1Hk6tFwazvFihmtDYx4maF5ECp2",
  "key9": "5ssKfjpkxUYC6rLNdKYQoMGcUEf7Cgf7c1NUSuc3LJDyBRorZhArNo3WjkBK54PYUJKgGokH2hrbYYzA7rQeFjau",
  "key10": "5GqVjyFUBdzQpgogJLV13ZNrWYH4XnytvyucK98Engpx6T7busEs95GUgQT8n3Z7ZBiBucaUG9L9bmYqpzeATo6E",
  "key11": "4iisZnmnW4jYDixc7f1ynEb9ufTP44PcWGFyNPp5bRtjEACDtN9toMTaCES2UDKvNJrQ6hzajC1Bvtc4MJoeA9WF",
  "key12": "5VyvKqHpu1LwkC12jn6Q3VCoDnF4T5uS1LmcX43LLUKQUrky3B9TcyMxTNhC6AqQ1aRcypX41kXJt67UGnp45DfG",
  "key13": "4TLVsyLqYRrVncMYSF7MS1ZZCpNeZTpiw38pRJ7M7RMGwJ5qDabKw5r7GvaUQpHgY153Q8u9chyyg6aSn8F2TGBE",
  "key14": "4GxLttUpUm6Jc5XHqu7R7uKqQNPks8weEWGYQLgPU3JB3WMWWmT1TJnxNrXfGBSPd37DTZWj9wo5u4qnJrUkoXZh",
  "key15": "3T1m4B1yhoBd5jNZtsAbhSKwW5P7cx1CM14apYDAbZLKEFvYXRxHQ8wQvAntzoVfy5u3YsqScvBXhEqzi5bqFnwW",
  "key16": "3Yo3HZzPGDswvyjfEHQjshKLwgtsrfU8P7AMzc4acZHS2XdZhGTao8EEQMiRpReNv1KuU8JMy1iKFWECYEE9ffsy",
  "key17": "Kx5onnhvahT6yuDEAsuG7HEwVztHTaHX3BU54rjXmDZP8PFeEL84CqwkAf2szFuCfxUU7wTQVTRjgYoz9dwDLCT",
  "key18": "2KzwxJSm2CZLJHGERNiSajTZohBHamzx3qoNSR7K2HAkiHDZCntNtGbKMfggQ991Y2SQ5wB3tnxBGkHJ7yDGnJyY",
  "key19": "56pyJfnF78GTefjjuaTw5i925qvZmpJAMwAcnWoox1vp7xX3zvseKsKduTLf5C866qrGn51DTYoA6EYh9u8qYTLD",
  "key20": "kXBj9W9ga7YrDP8tbkph91Mt93aDqVDUCnwjGZKuvCZyUbutVkroxG42uZ2vmUQBzw19Ug9JU8PREkwMKYoZvsT",
  "key21": "5UfAhmjJWn6V53bEBuevZnJwYVt2xTSx5YGvDut1T5LrdZvkZv5XYEaRUKN2jJGwvo5FjHHESAiG19VbykbLYyzS",
  "key22": "3EMgXqm7fbrFAbDFQ32tRboDJhZTgxgRDPBQJRT4aXGc73g7W8mQMVgwt2Q3Hf5ZHGRP3ZJNTTkM7B2n1JDHS3jh",
  "key23": "2WNtvehwmpoc3nGAGwDoHhbWKrCFR2EDFi5cQuVrwUSgk9YaJsk99co4AbUhWPbxxgcZpm4UE9TRdvw4yQ1GtNfT",
  "key24": "5S4f6vhzLTqvwhcsVMVfNQNtAhUL1P4qtZpLALfyVwNg1mmVcSXJrn1gWbkT1ebu96Hej7ppw5ammbzhF2rq4U7z",
  "key25": "21RgKZCMTBiVtwWFUhxcTaA5GYp7yJH8XAibPPze3h9Ahh3Xnz4tk3u3w88Yo7R3PwSPYXTeX52ifKqJ36er4LWQ",
  "key26": "4V7z5ytNrBEc1fE4iXtj36zMJVQMMRKzhoFZrd91bmYVH41xVtt6gChnU2Byswf2hCjgcGnA817KiqGeKYGjj46o",
  "key27": "5eebXQKBbFFpgtcJyeofwLxQLQYQYPcs9M7bAHNL8L58QzVA9ULXaCsDzZzqkNiNQCvqnvcCaAq2T91xVbU4Wv7x",
  "key28": "36AnDudmicW19Zo7xaYjzzA8ghSFq3TYmWZiiLzWskq7ud5DEfzcTW7E3Ct2f7mYhAviCk7beMYn2RVdk8oekxTh",
  "key29": "4fjFE8q8R19mtQUwVEfagHNpwF7RbMGrdGD2b934aUtBpGuv1hC3iXxnWGsUNNH51PuhodVgJ6LuA5haYeB5b4rp",
  "key30": "5tLvu4gjU1tRgxdgdKswh44teyF5fKteipVYa6QQzVFNeWvze8ShBmYxUNvJw8FYLwxaZSvB6Kh1mDSeerjGKyw6",
  "key31": "4p19EmZeuTHwcUyGhkPZSWscF2Rf1LhAXJmj58mMzfbNU3ZYJUbYonMSWc6CsR9wYLfwbu1K3pXuCRkZQYFeTLjr",
  "key32": "5HX98XxdyPcViw9ATNn4GqoHiZEuFKgkp21xZhSLGfTWDGTpAbfeVCfkoceHv3iXBhGUyRpy8szAkhwvmZ62FNpE",
  "key33": "5m9bAEcXGLXevEnk818LaNdXVA1jhE8tXdKPKgBCKiRBKCoUCR5hk5ugjhraS3qcgZ1K3vah1urpaHMAxngX44Gd",
  "key34": "4zCyj8CffqEqTLZ7qHH6h9DWEwV4uKEuZk5K2EbPxojTQwSUDPfVJUoDQRAixW1Y4jUEqnfhhhP3HemFpa7vktsp",
  "key35": "4bYmMYKf6dcKxki9zEcUZvogV1B6oYd82wYeVNXisuFm4GrzcpndfrX6DQ3ZD1csAb39Mnjau9j45y6JAzQYCw5U",
  "key36": "jj3i82z9nbMyQesM9xcaYV5aqaowGCjA5q2KDVkXf75MAen6XVpSyL5eD1112akyLZfpEEYTzZkin5kghdDg8A3",
  "key37": "3AxBfekBkoFau2xFoYXaYXaooUpLmhsjmgQy1TpYv3n8bcha3TuHZGAzCQ6NTJmyjcUU7Vsij7YhgWA4L7wpoMUL",
  "key38": "3B5n6mZ7S3mJNKAwQzDWWXud8ryBx5Y1mQ5hqhwjUzAQyZuCAF4WF664sE2G4vcgKoerBECuCJkpCpgTuUrpk9VX",
  "key39": "2oF2ipauMBiqr8wzteA2bYUWbwFjqDgmne2v9wtDP8JVDBqs5SoxzFUzCAovErueseyihXv4q2v16X3VVc966nRc",
  "key40": "4SX12DLV7VX1Cwa92aAK7xhv1otCwMw3gqm6FWtDAypA43c3W1qd36aydu7hszm3wC5Gyzei1J83K3DB54oiJnEN",
  "key41": "3epYUBEHBDQMeMVjvP9XCm25K69YLoyFTqPUkZ5RWLy3xSsi6pgtey2ZqNEGkDbB4ZWkMp2x5c8w4t34QKDJJzQq",
  "key42": "2tYANDjY2ShbgdikRZTiCZp1ZgovWSSdAEaDm32VoMuW11tyobYtp92JXMXittSpKaMiyKANmcpgcTM5adVynY8m",
  "key43": "21LcBnrqr4nMZtWpzfe6Ab8aiBu7nTYpQsD9kD9zeBaydzXyHCrWtFTK4XZYSBs8QmKx22HbC9NAZwd2FaAa5Ga6",
  "key44": "BPZSGJTeVmxjrUsAYoBceDNGDP1Ht3a1Z5qzaErQ3eaA1eoFhR6yjkM4m7RdQXBPMHLrURTbRz6smWASxsmFLSk",
  "key45": "3MJJgTA34j2eEysruMGsarqRkV2UH8ypyogz7a81N9pcC5kiPqjgmWZfQ6r16xWY4bfcfa5sWXNbAbrnBi4NSzaj",
  "key46": "6x75fwmGELFv4PNHqJK3vNnqWTJfa8k67CmBRudq6raByY23MUookcogRwsx7Dj9cxmGP95o1zEXfLupuCwkt34",
  "key47": "4q4gqjK3pNTYMA1CDNEDebMpnXtFAUaUu7YEBpCSqPg23TfsWxYSKXUBX15SbmXLfZvfETBi2UETu2FEmNdtx65P"
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
