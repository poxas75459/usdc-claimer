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
    "3YqHkmzPygR5ySNc4Jd9U37J1Q1zHh6G5gmGafZ4CbrrDYShEsng9wYvEtBXoyXDqYp4P7TNyXDBVPcRn8G8Khz4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3X8FkTVxRrJR5P1pX8th3z7fJVHVyqFinsNk8Tk1HV3PjJ5cYKS8gzRX7xah6F9dQ4MCyyvoMcEhMmmr1p31uuSU",
  "key1": "5UyUE5FMNWad1iQCgMDV7HqQR1goCPhq34tBsGTaQ3Q9pD9f8XH3aAVyMVtSeDTWhfwWzp5LzeZdnYeS7KrKLewC",
  "key2": "5KACjtdJRKKJynNa2XRbM2mgbkkazJCwVkESCEb2oi7NpFmNaioJKjYReEvrS2psZwcq2WgH36PGFnuQo2FdCo7p",
  "key3": "4WLwDDA9Heg8ufhsZQfpjsXgSvp4nGTZa5aCDtpL5u3K5d9Nn2bemNBvvFAbfuxdbcPA8gjkc8LCAh9xxZknnxCn",
  "key4": "64TtfxSQt1YYdiKmx8EL5FbEqfe1Qdhuf5FTr4C8GcQ1bLSW3hh2PiJJ6C9RJjfsJVr1rv3rbRA5n21amFdYxmXq",
  "key5": "se2xPMQGcTbNuRZFU1c1QPLvpEAQgSZZ6o8xPWMmy6h1G7qUddpCUc5NPQgKJTS41ozkhcBnzvrwwzxnZ2zPuAS",
  "key6": "2wKu76NjNeuscSTn7N9y5ehYin3wyw2uvCiReqDgvmYwXjXJRsBjKUhTKe8fKQr5K3hqpWLZUWVghnkd1DSJ7dR9",
  "key7": "5mHZTGWnqYQAzXbSL4xZgAAQUowmXM5VaDnxbjZdyPz5HAz7NBVCdNwdnfLAg9xiG55cnjatBLXHMwBJycmyAQAD",
  "key8": "4RFukn6o3PgDZZCfWUCzBRaZ3PHatZAjMpEDg4ETWE3spUEWYUMvgp1xhsvd8ebTAsYuSopELDJxDGkW5t2GAhEY",
  "key9": "2SmLouAViXvqsCEX44fU4hitTv6LpeAxCQkE1d4CPJzeJzYPf2UKbLHD4UTwFKtyZyKYYakQ2fZbTqsAdPp66PUA",
  "key10": "53iefd2iRs3JdGAVpdMhKn93FYrVWgrxdSbD9jNGNJ9TGbTCm1g5UTZSLBmXj23v6MG3wXrLGTSXCwbvNq44EtoD",
  "key11": "3CszTFhkwaA22hP7pFrXeBdTmdiaGAEQP78oWwoKk29j6ayBUd5QRNV3Y6kSEwwbQTapFB4HGUsBn7eMJRDMBkkN",
  "key12": "3Fb4cdaNEQjvVPrki8TPiT18AnWsDZM4A2DpCzUr1c3YoS4qzQpnDzjjMSwckbaC8KJ4ARgmXzrwFZGRggLQKdRG",
  "key13": "2biJk3eBuhysid6uazF676TrpcTj6i3tt84X2YosH4GmmGEAU5bKbcvGFMWB9QLgrrtQmZvAXQWnMaPHqEj194eq",
  "key14": "2vqAGcbeVqjGGAt3iLqiG5vGfKc81oxPwdydy6fiENgFzZntT7ufuUxXtnSpSXibFThPb714rzb36QPz3w5tdvp9",
  "key15": "VTPpnzLzcbjqyjYtSSeuJZSN9tpirHgqzCRGRavQD1cQMojejThwhJafmS8DfkmF1u57eDYAnCNFJgNV6FwLre7",
  "key16": "vdZfktbEX8McXnthvDVqrCymyUFFiFK4bQb3fHN9imeEwFakB3XvsvmEgzHnCVnX9jqW8JPZUKnDXkxBavqDMgU",
  "key17": "ZcRr3ugghBa9yQRc7MYWKGxn8pP73EQeYwBHPYDZuZ9UA4cbJPWUAxg4n78YbUiJvMGBWU7pXMp9gXTwBPnKntb",
  "key18": "3vi1jqGHSWzQH1LP6mLmi7J6iEQ3fncuSEVSaGTUSVuGibpxaydfn7YjuhgHnrficdd2PWcHM1aYyRxKJk7cCXhn",
  "key19": "2EkAMD7r4qZf5UUexr2YXeqkZExhMh5kXQKewyYeaREZ5Z4xcXTb8W5atr7ZWGigZ4FmqToHYrjopn3Rbbxtx5zk",
  "key20": "2nDpKBszPuQGFojtu1CAQR4NdMpA9HVF68PXWHNLfJxnfn8BsWba1B7FKsxgLK7m7YR1iTkytNHTGHQ1V7tizmd2",
  "key21": "561YwByXDBocmdXxp466zRQfvr51KJAdVn2EXeMxdvodWArNRBdBCLgs2oRPabNje196AQPGy9gBqUFTh4RcSzc5",
  "key22": "2rG4LJKGfbGXLN1SBg2a9zSAB3AChKEBipokNzTvpCYZUC2hYMLTbNNNhDJzZvydyGisHoFj7d18GhU3yXzJBAyz",
  "key23": "4zwZCPKFVZgZKqX69RPX7VAnDSZMSeSGyuPQiLNW3UTJBq483diRAUBFTCk8GDL2A2JF8jFJJjgZbSpPiV2WZreB",
  "key24": "55hZgp7uU56jjxpejYY397ACiPGssvi9AJXPbihfnD7wRLr4eniayBZbZxmK6Eh8ggnbnhevVPBdBD98fwM5soAv",
  "key25": "4M6V9LziQL2QJDDwquNTNve6AnzxkJPc4cTr2KEJMNeY4QK1R2ULczeL3vXFZJdyiWF22GufQgaiytxg3hmR8o4e",
  "key26": "2Wv6iRAxtswGXSKaZgXQQxBeStR39z8DvnPRN9sidRNcmFqHtwSd4UiZc7vnCLxqShpF3KfGedT1P3c2jGdK4tFT",
  "key27": "4uUxdsA3Yc4D4T88reDsF812UgNdWCkAX4FL3iP4tAFezcJeu5RoTsx3wTXhwuZntDNGbUGxUXVcCXyYFit5xHvn",
  "key28": "3GXxxxSxKPb3XwkNKbYPnqeUCrgM1ypLjwoKnweG4Rs2XDHaWurSNjtvCzf4UA3ti8FP3DXC4eMWMtzitNhyr78X",
  "key29": "yTnN9QQ5bDA5zvZHvRn4uMT919FMLoZ2t3RGAhqJr2UABFiZz8os246AjHDimckqKZZ8oryARVRbTSgidPa2GvN",
  "key30": "5gfiztWfrhcY1gpQo6JKr5KQB2yTGHEvoHv7j6T5VU3QhodYstFjb9HmaA8NmRbDFfZq8oN5Lq64HwXVAud7Lt3G",
  "key31": "3Arn9sd5rPUrUT4zVTcUppqtAqdpW4H7hCdBxgtUqQ7P9ke7NxrZHjNRP41GefMjRzfZVCZqepZjw8yX6JYhUKMj",
  "key32": "28MCCH459PTQz6janvkrGPLNfUApsuebXCaQPQDw7PykrciEGxxJz6vP3sH36gNarbGUNNB8N7q642HdMgH3dHMz",
  "key33": "5WnrgKWbZQXLtwoQKmzVqGMYV2SeLNY4xxasdRq2XG593CKiz5jqLy6WrEB4xK4HGsjPqeMZHeKU7dfDKw4PY3uA",
  "key34": "2Cza9ywzCD3baj9gy9sTdNeK3asDchV69nNpH5yMDpfB6wLte75bmUFqKM4UPC2ti7ysyYX9mZPp68UzYqE1Db9P",
  "key35": "CAnXgn5fCZs7cXiRVxU3FHxaCKYhSeA4YPL5oX6Aj7JvWpZrhmiPbTjA3zw78aNRtwqHnFJAUsYNF6U6jVLFsX3",
  "key36": "2KNWoJR7vWLAqZASXbsomExEtqgUWF8uGJkuAWMLeFc799USWTqsPzfNyKohMPS2dMPG7DuyqQAunwkqH1iT9Khq",
  "key37": "4kyw8Qy4X4SEhc4SDYfTf3ph7STkKsiCo36S9c65mZPFyFUzs2LESJPVdoMt8khQLgX6XsadccN1xAaPkqzftaiY",
  "key38": "55nGLkuLJcfVBsKdPv2ePq8Jrr2j1G8XYJAGamosnWF1EU53uqzEXKN1fA71WWhJKUA1mkcYBoGDMgyvA5K8SPYx",
  "key39": "yfWSTfsfKkUFm5R3oajWzyt42kSemeXt3rff8wrMqg6oo59JpxZsU5tJEcbsbcmd5V1kFnPNT7CuUMXqd5TwA82",
  "key40": "4pCKhXb4q7Y5ZsxjhQG7MSWXGL7L6X1qacpKU58zFo6uLvTv9DH5N6haQZJziSAXHxGJtSJMowjTw9Cx65E7WgWW",
  "key41": "2TGVwM6GgRYPRwD9hHVeV57nzpVwEeTfL1g2JbwCKpvknjS3ZJoN13mCisVKec9aNnj7qvcHJgy1dEbERVahQvUv",
  "key42": "Ww36rmDF8MpVbG4vbEPcGnZQnx1c14qwHkWmq5U7ipNxYenp54i4huDK8es5TDud28VzX28BziZN2xBrEHdmeRJ",
  "key43": "22RD2Zaeb6Eg7VR6gGe43gnGN6F37gqgne7zHLgYKazqC43Zb8trJLVNvXRNqfXXdDrLnCTNzWy9t23wVuptAWfL",
  "key44": "3nT54HeYjo5gTHW6aUVmAshT4QQNp8yk74EW61bbEPZpFTzDoi8rwUphHMYkdJ7YXt3Mx3FT83TeQ6xzanykyekd",
  "key45": "5FFtitvXjuNaVGGsXwNekyC1AdUewZTYER4AkDWirytPrVRzTKDZdajRByDvdrfC6kh6nKFhgFA8G883JyYhHN6T",
  "key46": "3qP7B9GC79LqX3Exsh4ryQCfvZRT5wzRcrCvKPTQrF2Ghg6ytdegAAwBmvVFJDV3ZAkKyy1L4CrCi3PRTCeH7FcD",
  "key47": "TTaeTTYPrtXkKn7hqMQmVkkBoT4wZE4xVQPe7hUE4gbGy1EkPAY1q8oZB8xD5i452M43tkFvnV9NQ61faVTgsrF"
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
