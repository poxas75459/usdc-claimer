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
    "4qoDHFMu7y8qoCibx4wkZewX4ngwJhj2vrutyG4fKYedL79ntL5LQH1QtomNL8B5YHwz6rrD9jPULJGzdjHex1Dp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VFp1C2eVJhYLFa7PAiryYjEEyntEu8EhEn1pxzNPPRcA5kxPk5ZYvE8r6hFWysAWEJ3BCFkEddGLwTHZuT9JRFi",
  "key1": "5i1DwAvakEjtkBCJ7QiMNGbs7hXbPf2tJbypvbuJkfVJwiAUJab9szbker2B9ZDsNBiEebfAZh5Y2P6RqEJY4da",
  "key2": "52kzYSqBV7oymw5xBepScUaKm1V3soir7e6Synk4PLdTfH8n4GyLNhsx2Gx1XYMMJqXBbyA7USSuGkv7NdiSf7Ro",
  "key3": "4hvZ8EjmRwX4KWY2ps8RdrZAPsjNGPcpxG5sPDMXbYj1eKrLQemX5fRT3o9R3v7R2UUyFLgZks6MTxhuuYkJ88p8",
  "key4": "5u5X9HFkVEQCHZoismFS9N9Cz26cUYZzku2L9rJkn2WzeaELM9NrREYL31PBAuEog6Y2KGqBjkqrw97488ux7FcQ",
  "key5": "3XS1fy6ECK3fDrNXAUktggeU9K8QDQ4ZbuW1MmLcZqgjVTSAFSb8oCUpGHhgMpJja5ziko5Sct76a2zvvZQrkeSU",
  "key6": "3rs838Dopr4uyqCpJZYajU6GnCJ9sTbgHdjxRbjokTVbCAG4kk6kJjRdgt9WDBuVeMrdRcDKj3d4eqVY88ihxfaE",
  "key7": "2aJSe2Tazp1Co2P3oSyBmXjzBnqZ4aTQBbbQuCqLAKz3BPNaaq26oWqbXncyFgCUgzyFE3tPmc8Xi2vFXSKBdDJ8",
  "key8": "5XnYrEQiWy5k4oAcs9KURvBawCJiaKckMZFrygDgFBtdKJ8V7m3SB2WqF4yHr9duEMBwurt19B8sf4ewa2mAxtzW",
  "key9": "4NzWkAnTykroQJvdv8GX1rEATg1VtQgADk1znKSVAfrDSSoMZ3dGd6WsyKKRvrxTZqwNKnciA3cJ4dYe6oaY3if4",
  "key10": "4C2v7e9NX7CsFMcnQtXGQYzksYQuyLxEoYtATzGJVFvvAMoypf5NnAGQ2QtA1BDCmuRgz78phjYoBfjaAStDpxdu",
  "key11": "5bzyuP4D4DxN9ZWYgd6uk9kDhZ7WnBxaR9qNx8NKurr7iBAxR3krEQQs77WiKW4dJQGRpj4RbjTG5Xd7J4ot5Zo7",
  "key12": "5a3den5yGN5Hy6hGX2RYwLSLnTXP5x2xH5yK7vAU5HqRMTJAh89CWGv566R4pWoR7U6dBm4JcUbFJAJ3HjUSVvu5",
  "key13": "iRXB5JrEu4CBUawD1cEzqFy8xi9VcYKeiGAZDKXZ4NBsypeMeRejQqjVJL79gQv9xdjoLttvRs4gpFCq6T78efa",
  "key14": "121dfusq6UkdAbHwzAcmuKJM8C4iuZ3Uq8QxEvivQ4AiqJY2QHpu8LEbyXabzxJ4N6VzScC1Kfk8f2vUM5bzk8m8",
  "key15": "4tj9gsaeDMbm7X7sEkizgVX3rWg13dnpCUHhkpPRa1nd3XryLnHneYccmMjQKa3aZnkbQobJuEvRUAY8TJYURrsi",
  "key16": "fbGLta5fdyF2NqBfEPoRByFzZ8FfvoGGyX9cXhCaP9qRaGSZvMaepX7m4JbQ1F5nuYp4KdUjUpJXQ6d2FgSpwkm",
  "key17": "be3f6mocnDcXKyhsqEERtQm5sfF11or4zoZNpGdLornocCudV7Tst1yQeSDZD2kBJPdotpH4XnLPYC2JaxwnARL",
  "key18": "39egUriarL4c2SNk2vU1cxbHaXm9gUGAZkGuJ5RpyjPKWbcTwJSBNLsDx6fYYi6BqFngSRVptPFxTgZ7zXdF5aB9",
  "key19": "63t2GsArsKWj7hxNqAfefFuAnZG1ZP2ijhmo5PeFEWCkovPVcPAy1gV8eAirhnsf4fyY6TRiNkA324u4fVCnzPMM",
  "key20": "4i4s6qbJFFkXviU6ZzqpeUUU9Nasb2QUETvVU8kfChTD5CdJQivK89ZXojGA9bAzojTrnyqxbbPK7nHdfwzzhdrt",
  "key21": "662tvdsvyfWHNCkw21HvRT7FRCRwm6sUmTP2nLFgWejvxbssiTNP1kiMTEak9m6EL2n8mBgcn1nph6hyP7kRMwgR",
  "key22": "52RFyZBiEJnkugx2RMjYxiJ2rHsVV147WetMKNpQ1ab5VzVBexSTDmQ7qBWXNwpQZFXTY58dr2EBMit9cB41W3vH",
  "key23": "5ugpPbX9CeiYb4Yy5TJxGbKNseEVZk5LuyjhSr6kvGP6qzoqC88e2R8LoBP7ka4ZVUJbwKsrcuJZrAGroACCt5SF",
  "key24": "5a31H64ZzFufwTkKXLDKgQCuAQ9brumkZm91EZRgeKW74PjCaVksHp7C3oRCpwxNSMLLquYBXVVKhGEg7uN5QCju",
  "key25": "2vVD9vJyG5LMxWcvbUqmdtT9oXCVWY2pmyAQJ7NZyJuVpeAj7aTRUJVhtGu62Nghbwmd2W7MBy8DhzYfHBNcgcnL",
  "key26": "28GiZCuyikZYnDu6XkRpPtf1nN8eJWuKesTTdqek3ejvcMLAp8UJjw6bunZCwpbyEuqy9GGVU83XoBXPHQVdubi6",
  "key27": "4iksBcTG5DA7QbydHvuLauiNTgXvA3gjqWu5pZ7X6dFkAnhLZ3rPu6T1eTLxPMKiRUZQc34psyt9X58tcUMw3626",
  "key28": "4nmSCyGcJa5JW6kjdFPveD68edkkNfadKNjz9o2KXFFsdm6d4jphUSbW4MtXBtYyCyTVK1BHo53VBCRzv4wGfDrJ",
  "key29": "8U9gaHD8dAvrHifnrRK1FaXRJWuTHetAfoMpSSk32bggHdux3rRNL3DnMXvSVqHXyZMFDiH6RAESjugLTt6Ai5L",
  "key30": "2wxnvu5yhq5tNSbYx1CvUiiHSar1wiN8oqfZtku8zCKpxZMgaSBRV5TS9G5Hap8p2q63Pb49xXBzRMEfVrCnPsdq",
  "key31": "2yzNEdLd8kk2bsmqzjh4vzsGTVFjgigwv3wz3Yxw4Y7QHJpGKg7Eq4YXc9oZuHeeucmQdUua8vLhjeUj2rrSSNWd",
  "key32": "2aWuAdqpn4GdeS6X6wef6ofKGArHzzqZ7f1iF9t4qRybefs22cRovLfEKVFnNEXiHZyE37qr3HtKHK2qaaMA447B",
  "key33": "36uvCLRvjTf8tFqU6EMcn1Qj1QjQRKXQYUK3yt7VgLfxANdgvWjFkMePZrMMR88tNaU7otY2Rwit8ERjvppiRYQq",
  "key34": "6M846WjVJi5Nee5YmzWLE61C5h4YV3muEvEaSTysQeKyCN96mGdufLJhWAiKZRrznnMRvYEj1pdH2QjdBesp4aC",
  "key35": "4Z9XRsMJBK1deyTp7f8r9V5o5tSzbYPBSviEZAtTQd42xvrcREAxeqMdeMPMm34oQac6GyvChFAUsKvh1hmZSnJd",
  "key36": "3aphQkEoY3AsAHnEZcR8DUKTEf4zexk1rJMovzoopB1gCCPDhTHmRqhf3DcqJSvz8hWr15Mcd7rt6S88LVexFRfb",
  "key37": "2Fj9jsAmbQJqC5a7ZqPTXzAa3yjWw9iM3RtiBiApYgUs7qSx8aMnsjynpE1FEQBFBQLonWR7YpUfLVJno6AZPBeB",
  "key38": "2hVB94JmAqcuyabzjJeXEnzbEuXywcx3hexskDeksvyVKwjRcqfyB8T5PPS73DQ4inwTBGbSDaMbkr3QXXpkBYjG",
  "key39": "4jxWGaKUedBY4udyCexiftcQMNupgRTSrQGRuthKJZGz1pEAU56DBtC1oEAw8F221ncXTHcuFDyLXxbU8mSRUxpD",
  "key40": "43cwzzb7UG1jtxR5KUVSAfLwy398WDzAihXVJkNTPPwKVV6BQoFSsE8MB7CQkjcboYtgzjmbiwsnR72ngNhNoTVk",
  "key41": "uDqxWrD5eQvjDxUSbspAxZeiCD7Dkq9zX72rN1k6bCQZmRu1UzgStHfmJqpvJEZ8uCE1f6MKmDCLe7hUQLGcooK",
  "key42": "4d946VLbHnrpM8MfNMBxYEv7TU2dTTyngm4t5C4WU4BsxcPyxR7ZdVuRtcNeUetoyi2WGE5JsZfci28yUA1nmDD6",
  "key43": "4YUb5PrhAHuadaitN9nR5D52nrhkYvpub2TQ2vtACaG3m3WHMc4Q5Q7gtGwtM4zWhwZFubbs5nBMmo4oAapJiE3D"
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
