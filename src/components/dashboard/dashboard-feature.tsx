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
    "8uzJubpSKG8QUDMejsvxJxsU8EtiHu5FsWvngZ6xyhgkMvcb9qsBf443KfVtLbjGe1aQEa1nfsoVreRRhrCswjt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GZi5MA6QRfG7AHdmB8f3mbaMUUCEt5fJSbPhLC6rMgmhDa87HwT6C39SRfbqvP25KK3nsWrqt2meBtGCB5XrLwL",
  "key1": "4d4bVx9BrKFJ5x8FYjMpvCcS2ZMgueZdAUmT4fkWrit64hUA6FbyiHKt54SNuH8bbsVszM6QMpGvoYyFi4hSkMP3",
  "key2": "5hbULWyBTwyr6yr5cKdNp5wKLSHkbZ4nxY8JbkLS52CuRfjhFJgftj85yHuqFXHsrhc4PnvFUxrD6Gb4XC7pk5xF",
  "key3": "4Et8XcrscDVsWkBkbKu2XQa4coq3g2oTGULCPJbHkaTaW5HdyPT7vCYieavhFfnojZ2gZsnC3Aoc8kBdpGSQGBrx",
  "key4": "4MHKChxFgaL5EeLpiQLLRETnGNN2mukPaLN75p7xXHDfF9yezQQXuTifopHNYht1v1o4eVATp1hf4TJatYuGGjqf",
  "key5": "5gwYGxJNzN6dVAnNgfBxpsFDgBYAFzXFo37Pa5HZvVMDs7DqV4QWoYNd3Pa5k3Uh2Q3dxK4AHDB93AZv5zit3FVr",
  "key6": "2JDk5apgpQf1H98v8FFwSyyBXnUR5nXszuGVEakGf5bM58HqTU44macbngfQuGBMUjaATAzJsmh4GJpxkYBuacd8",
  "key7": "4cfwAWg4AUBqxREXbHByyTzXP6G1KgkauAe6H1fKYYLPJNLiyxUSh4qbx1PqHaGWm3tmWMBMAPgRJozuWZwJf2VT",
  "key8": "5cLgQQyG4PLnxS1Qa5piGsFpA7EYqyinib6YnCJXPM8HSDSLcT5HPia8xd7HuiF2fqaWGXRvusvYGrS1PSKRext9",
  "key9": "5TijSk43wn8r7w8os8PmzqmuESfMbst4tfpGVVnybYp8vuV2hsQzUak6eMHyuzGaUk5xaZUfYguSYJSBWSezNWrF",
  "key10": "2yVQv1unoU9sE8E8iqpFJjjXuZKLgrXnxeSNmdYgq5AYPHM1KnRynCh8Y6CxXVGo7hLCVb5drpmxaqmvQt5bKVfP",
  "key11": "64wtistS5hVT6C3FEMwttWd6CML2S3j7V7jp19yM1bvZeiHcCuxQp2q2aimy2vKQKAAijDuetKg6jrLSHXVna9dc",
  "key12": "55UG5rawMMLmEhGL9LJYExenvnPhV2nT7HkHejKwVdL6qkZqdwYpVamUd8XPjSsawncBHY98323VQzMBAVUML4vf",
  "key13": "5UeuerRF3iR8ViqQdZfmGXkxwjKAkdet6pYfMxeeoBne4uic2w5DjZdLJZ4ohF5fhPubozk51Sf9CpXJAAgzWPJS",
  "key14": "36PxBFMV4dRtJFjjqjb9BR3Ycyiu4jLcitNeKHke88zJkA4ai7vKuYKTB6n5pnAVNxNH53XMe1RrL6kDpcFko9V",
  "key15": "EiGiLLSioiS4DjqdL12gm84ECzhYp8h51ftrSXenM6Gm7pBLgseZERNpLDbqBJ6ekdU5yhQWhYNXoGoQANv3i5f",
  "key16": "3o84vTFaFUeoJDwhVTvdczuVKJ3SBZdAJsv46R4aacArU3RD3CSjttf75jNN8MdNwCKVJcePTjNQecNcuHVcRtLc",
  "key17": "3v1D9XpuHeyw8tMj5248CQZ6BMRyEgxaQjdWrx2GpbtF2SJ3jjBkiZJhETVgxwh46YF4awrNKBypzzZr6Fg866rm",
  "key18": "gp2CcaF1tSYTU2pEtEcJbMcAeamMe9e6wf8NdJBLdNrUksYH7tfSW46AgojkXPfBcUeiX6SrqECz7YkGGL6RZPB",
  "key19": "4AkuXXjVM2fp182r3qyBgsDtZjXnNWMeKswZMYq51tMvt5W68f6GS6j5nnEkDJGDCfBR1WY8pqSjjEkDqGZaZo8E",
  "key20": "39p8anKcEdBaLvnb6qvZZUpdPdfaDMYeZMeaHmkNsjWS1FJqat7bGMGNbUHVHJpQ3utAKqaNui4VynPYdw7en788",
  "key21": "2YpE2TpJmVMVoVWvPhoPv6HPL3V3SmLzPNa9WYXXFv7eFt9uMBjMXvfz8ivJDZNaTSLgpZmZDkkLo6UAdJGRcPUq",
  "key22": "63bAHdJ77sQ2KycSazxxVcuLqBfeNSXuARCN2nEYbDXCaRyzbL6VPwk2jBA4GFCcssM1CbUcn9vnHVQAfbbYCqdS",
  "key23": "vBJeuyzgff7v4mWP3BdAe9Qf8Dq54kPrrcM7jWYeF7Bg8JanGcwfyTB5a9oRKojYBUoumWHmFEvYNTaQxCsfzVP",
  "key24": "Mub4h2mYdKd3m29KdwwpVPNfgWptp86Hxs5H7T63btfwsa6UhF6X5T3QpwtfzQwkb44StzWrLuQ1aSEo8qjXY7x",
  "key25": "5P3VpxZmLSZrJhSUrXSsjTPbo6An6LiKfn7tKpXB8EzJPxXWHbtW5ipZFFULLXDnPiPpEjvP1RDcU9yV5LX1axwF",
  "key26": "2gYs7qQ9zSRc38CLZYheCCDoXfkdCKqAfb7vz4fqcXcrhrxZCwxrgR7s5tBzKZMRBy2BXrHqKkWq4xyj4NeZ6DZc",
  "key27": "3vFqC7Amq9Kr7fNyakcbvsL5jqnZ6PHUdUyvgt1DtYf68oifbAMLF46gDz6syGazN6fv3vQSacZ5E24UNneWdEyg",
  "key28": "5UqKNkhAqM4EBGBZiowrAwumzn7V45qkC72TTki5vpjGrkEkDQcTpcaVJNdbAbeutanvaA5KiXd9KXgrACVuHJJv",
  "key29": "2NMtRktULvGGUagoEZBDmAxgzZZ3ReeDNcyK9Ez4KYoboa7fJwknnasCrDg7VftsxXxbzxYkSGmLV4PTk8BophPX",
  "key30": "HJhWRAtXJieZc9KZooPSJhDLGFfhHTQDjHr9S7SPZuD3i5zKxwre3JTmhidMpPKJTWq1qKinm3R666jkfTPgWka",
  "key31": "223hCqNYS7b7Pz2vajDrqighNYAETaHaVCFwJ87t82VX4P1VTsCZb8c5PH5wa8HrhQnzP83EHmGbZUsfk6bZpt6a",
  "key32": "6WGoioF5LJZfF1jmoyDQHFjhp2JMTu2bV7an1cRopb3CMrtBvNHqMD56jQGybanbxFCrhxRF6pXZqbChDBACBvB",
  "key33": "5DaNmNew4TxthK2So2xvB3stNu4uw2yVYHr5mT9x9QWxF7oD5hhc4JMMRjJcLwNjznhXZVftHgMjEMnBhMT7F3MT",
  "key34": "2kpJ11CGH3ziTH8y92crBZL5MUQWviyNNdy2Lr7ng9amMuPvWszQakerNAffHrzxfk7tHJhv2nFYFp4EYYDd4hVJ",
  "key35": "3MYtMDYXDyqciDhPb355N8Pex9K6df686wXVPrGmPWBcgS7ku3jHh5eVymMdammH1wngfnpnQ62PNpytXjoVvgs4",
  "key36": "54jerNLjqzR3kUNvL45RNGJgXAqkEXQTnJnTgGFwHDJDYVmEttqrSKPBVMyQnbpLxiw3ue98pAEqmE6qvcq225HA",
  "key37": "GvgwpHedJ4fCvALw6icMzkeMBWkqU5FZCNx2cB2zSCC8uwd39nuQDNF5NYzpqf9LUrPVUiFbnJxP24dfSBikESz",
  "key38": "aW7qLB8wpDTG2pBZdYquEYpxruRHjshtnZKVB6t95zVK76hQobYeBeUeK36dbzuqDYn1mCj5nNvUQGEqbbztnuR",
  "key39": "4nGGKLy5j77ydmcoqv62ExysQG1fG7E9wbrq3xuqMfTNaHnZZc4hLAAfoKSv5SQeZFQnzFXvNBzyiSQ1eitZPnG5",
  "key40": "34AXvRb7DXuGFeXTqAccfzS3j6bxHo3jsqGiNaG3ktJr9v4rnHrzsi1R1W6WHjDJ9ojdoEMgnQKvNWPBAMncAPaG",
  "key41": "36UEDGuLhjMdBjeiM9YTkALwgfQMMappQFwYrsHGJPzje4yRz2xSUvr7zt9tq3yQtE2BhDmCs7oXtmX2NLozfZaY"
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
