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
    "37w7LqKAgsreAcHcADLLXYZaSsZDbEEbPtqWefiZHB8e6rBctMJ5meTBpip41siX3EM6VwnYGJNEHCELGLMzohxp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3H4RCsqZfkrT2zQCBjEzFnbZQEVQEP9eqUR2dNVxGirbhLHv1BZtjziWh9NzJ4AU14Dh276emThotWhRFL7NyQgi",
  "key1": "49ukxaFXeFvMv7s4vkp9jFY1T6ox5idWJUhtijCy2Mx49uZ2pP7PbAM2aW1MGjEtReS5121UTvm2wnrFFhW6QNat",
  "key2": "5H5WE151Y62rLai1ZybhF3tQ9qLeMa8wv9WHHBEJpMobcN7e7SCsqNT7yGafzH2ENx751j2Yk7j92TX5EB3bUMaw",
  "key3": "4VDD6JceGqNDf5k9RpdyzH6F6nFd5qa4m2biU4uL8AYCAbHhnqQGpzk3Nt4MoFnwfAqvfrwzkpKiAwXwkXb2zS4Y",
  "key4": "2GsSZnVMoaYgvRebhrECusXiPvKJHpG26Ce7xFGCpxHRg5QVhpASJRwL2DAxFLoEKCdRA78ACKJfUtWmFRwQ4Vdq",
  "key5": "4WTu4eufK7UxvaF5rxFJK4AHqi8VVVMCpzCmsQ9CkM6YEUGRhe77PFspPxUjzNW7xffw4AJq9tR3ujVqRBEmA5NE",
  "key6": "2NZUhMH3D9ECkQZLo1Hcpi1EkootKpQVTYZarjYEknXF2GmDr6iZPcSo6HAEkDca9gbsdAYZbZx2rJpS1Fu3D4ju",
  "key7": "3m4apEYXpCyTC17j7qw6MT2c8mb8czMkFE6Yq14vebRNCJ8UAK8BBTBv1ZyU9dC12hRkz4LNUyqjq5BLdGhxxduT",
  "key8": "YJPuLUZsV2TaKuMSrmr8m9vFw4JJdjW1NoTZts3gTMr81LjjDxi9XmAWpGj9GRJ53YQuMVTpnwcepbsUxTV732k",
  "key9": "4hpHRLjCNj81fPzFC4eZBxKPSXDTgMForLwwMoPx1WXxU3HYZ15QEDDQwpuycoD3gs4Ed9EXD9sdicaEP4qL5soP",
  "key10": "vUtx8WgsMmwAuGbeBxe1ithoi7tNXbj1t5KnaU7NQj4QrQ4bv47tq8NTaCEfM12P9NcKtCurJsMstPFfB7eKQ7F",
  "key11": "4c5aZvm21RKSq7afrVF7YJ5DCthANvnwLhfBk9g7tVfNHGcAqLGWgufSUjYujiUuAJnHhjZcQWxnC7PN5VFBpW5R",
  "key12": "4Ejw7Cwa3WpRTTsKmedYg3yREsXBuk4U2QRatiE7s8EARfHcQnysqYQZWRi1HpFQyp4WtYcacUXXR8gAAmAxrEeM",
  "key13": "3vNC6Z1Ce5ZSi23yEKjVr9ynPrSS4biymhDPREeD3BCf4zaJzp6Z1rJ9ATskX852Au2BhbuCVu2wbEM599vaKiHy",
  "key14": "2kTxDG91hYRZ8Ztkhmh25UebDwSTfiihQnst1pYskRbJqCjdbsKyTJfAaWuoTdFkuMxT2eFsR83n36mvP1EmSGps",
  "key15": "2VAVbwaMMzM6g2XBpEpGumjZid2f8VfCiRa9NYeFZ2vKA47FBFidVeUp31LUkda6RXa7gFMY6SMfyd5ei88vdB4p",
  "key16": "48Hgrk4m4zszTBbL1NyUYmNSvmK37ecbuwRzck7uZjUFPe2B4ppgyoYg5yGLDUD3uDmx3twPQFrx1r6H81X2ML1G",
  "key17": "4hTTF9WEu31jYULpqpHTKnhgCZxbWqo1rSdSwK9VC2sD6DzEyWiratxK5m76ZsAGaeUqRkRo4q4hdbKfmEaRqdpe",
  "key18": "4kXN1DE9uR71dyarMxApcwxrVGMbLkFJR5Q5y3jcwfVcLKSvM4pSugQbjB15En4xqrLkN7hgtMnxB86Q5HhfJAwg",
  "key19": "3c3bJmNyLjWuPPBxGRedep4PG3zXEQbJ3EyMempy1wRreNLUBLizs4q9KFwTd9wMAwJVseiENVNttdbhsrCHfbtJ",
  "key20": "c2qwRoAfTTSBeRGwpq5wGi1CKzim1ucdBxZQJEpLtvHpH9xYqW3PGpsFH33UX1LotuDrn9hXzqWieLzqbNpjuot",
  "key21": "3Y3mKr35BARddhXByR8adoEj7BzyJVrkSMgavV3zGgMXDX2sbevTjm3TUQNxyvoNnJXyJAzxV7tk11BHGxQxFpfa",
  "key22": "5vt42MMxdkpGpJ1HY8TkU2QvDuGXAitVFVXyfAZnnoeprkEQ1BP4uRqYinE8ufLSEndHnbtnJqzoTCAWeZZJKsp4",
  "key23": "5MxN7C89yTLnFqeXX9moFvatiVgszJ85cB1pwwUtTKvKEXBdPXskGx41yLAox3HAmj3NKAiX3qQ8kQaKngx1hztt",
  "key24": "44uV9wZtpV4h51SGVQ7U8vGBADJ3Zghscjd9XJBxyZbVLaYR8uRPeCKkTKRr8SHeBmDjFYZHsP8juvDfMzThVXy6",
  "key25": "5UsLeYdJxWQLk4sHx9WHEd3LXGaMNzRyi11qrH2PfPgWtdDM1Yjh5FbhFrB5fiJRLgzT43Nyd9LMCCEiQ5usRMin",
  "key26": "3YJPfD5sy1FwRAYtdH7Edb5LpSJHsuP1MgFZphGdQ5xPuKP1fyrAuZGFa8E3JBSLAf1dABvEm7jNPE3mijfrqTgW",
  "key27": "3EqrVDbCdNVK4HycqkeJSksadK16q2YVhZDNs4TtEex25iEbaEMiEhX3DWxcdc2uVzjaoKg68TxY7g5G8LRyad9K",
  "key28": "2Y7mpACqtjV7KemchZmBjdNXb59NPZqt13ioiD7kXkewoQCLUr5YKJEpVRXh1wuRB9dFaB9Cx8kbfhpD4s96wfr5",
  "key29": "2CZQpehBB7w7XYhFQxrHwki3feefK8d66Lia3398VXuXwssDQbohnEjTUU7gDdGXw93RKPiT89hhdmoqXBZzXxmR",
  "key30": "64GtdfwnKoYd6V4SShcJuVbsuk1sgBEiwBj9HYvpRJRzc9hTWzJXofHq1GL2YfzSD1EiP9yVbKPvCSLWQrZmsQfw",
  "key31": "4nj6StPm5BAVixgmpzQzEGZcfqRsn2vPu99pHWDgjqrDp7w5eNxu6SQKW7ZQK69tydYT8Cuuq2xVigZK89h5V5sZ",
  "key32": "2Jck8BNYrf9MbVUgnac7z6EBsc3NLXGm9rq3Ukje4J96fcvJLbP9oShUooZ14P4ZGZAp52TQyh2vNMxKwWEQaTZH",
  "key33": "62ypipuEL3jYzxxR9BgpyCyEZC1juERoiDYF1dNrqpdKwPDvuM7iTDa865e3Qy2y1GLXrjiUVuTM4GwqfEFivs8i",
  "key34": "2bgmLDDPuzE5Bg74nXnSekj88efxqTdQFWjfHjoWh3BfnjNUNLsBxUDfvh46iQqR7BGZcbVEuQbj8WQL5MWE3efZ",
  "key35": "4DCh7euegPVfqH1hXGAvjx1fX5ET5V1WXixSYUCaVuufLyQY8PnTjNm1ij1ZG27z9TCw5CFrRUvjpZwNNPaaokgp",
  "key36": "2a4yeBxGxLwNcW2HkR2K6NEDhtocSPLBJvvmY177BGrZr9PPdPDwUJY7yv5ZXfdwcpW1d4R4f4AieS1ep9j6RwNP",
  "key37": "48XDLXRY92kM6DrhoN91CTvLpMNbN5zohgG2PS9kGMsCpRUB5sBSKYxHn6ogG2qb5SoBkdBRcUrWTvNuyWczgQqR",
  "key38": "2tuqC8UGJp3R7yBRK8rb6NfUiygykKre2TeyqyvmQn7ropqU8EKyk4HdUo2QebToLKqaCR5FZdB7FTURNizJMo7d"
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
