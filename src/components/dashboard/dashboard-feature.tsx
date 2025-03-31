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
    "9KLoegxo381iK2V7ehmXvChqs8XHpX5JBp5kNVfLu8srnn75nJ9q7vXEc2GyetFLAy3qRH6k36eDKM29dpoUD6h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Jo1XZ7mE6bKgWZyC98taCVyGiB6HuiPWm9m8uKrojuNqbZidRXs2x2d1sJgoa1qCvBQa6YJXgWkdPiBL8j6sSeA",
  "key1": "3iDxWgB7i9cbXKkUTBVpUyzS36GDR2Wxewj5r8Yn8aa8yBxZtEeppKSh4W2vejXa5eQDuc1KkX8Su2k6BHeVwoWe",
  "key2": "2ArvBwRoL9sK7sesYfAcn8tD4CopF9VWvHchncvKqM6YxKXfT77pqGFP4Q19RC9c8cuFD61ujUvzc8BxiUQzBLxe",
  "key3": "3Nc3j7aMyuRRHxzCCn8nLwdccGRtkK5VFv94LNwnxj9nvRrCYTzyDRwbpPtavJhWWHKHy8tCryhncLAW8vg35RQT",
  "key4": "5gxRPZyXU8ycm5DSakBCrkqeKd4YwNBwTnNrExdPMgUWPXkG6yxFBdnBjZZxK3fbAvEuyZyp8X9d2sNMVAjTAYiT",
  "key5": "5SnRoAS4fvbyMn3mm3tCmduPjCAev2mJcSHpvdk4BoGwFLkpE1tjCvnkwqfw3NGpvtVxDgik291pELP3XbeMwJrN",
  "key6": "2TmjeravozP3zWe2YbPFMEdfRq489FTLso7Bv6cLbw33mJXiYPuoxqx1wvtem22S6m32rfUKx6eQF2xKJdUmGodY",
  "key7": "5j6UGYZYQuNLAegPC2QkFaHnFdd2U3rwcxxsgNQs4zFmMo5WnxtK9vzKgPQrtyswig2Nr3PnSJ4NuRCmWwXYfKbo",
  "key8": "3cWX3vz2ypCb844EYV6JMDy59sNkF4ZPot8ePww3iV49m7DEJfqLzpuUTniQbGVB66vcrMMMWDsL6ob8bb8ikrdt",
  "key9": "4LB6UWNcn9Ht5s41HbAAyjfgMGfJc9QruY8gPKKn6ko2vZAbRhXTNgCi6U2eyywRsdTf1dZzBtRrh5suSiBtVw1L",
  "key10": "4coQ1fRYy1peJVuUsrdSCByEAgHPfo4KZaWs36JrRryEKVoSPvr5pEQj3hA1xemYwk5krKyvBfJYgUd85ukE4Eek",
  "key11": "3a5fisnGUmgM5zeV2qw1WJK9cRAgnEfXa3mWzDrPiWe2huJrr5BRQU9MQySxhJBRejsCPzScAFMm91kRv5PUYWRV",
  "key12": "3YFyYsY1LDzUqSU8ehj5Kss9KRZXi5uHC5wpnCbdArUt4Cmkz18aCXsLGgHw8nrrntM1fpjn93QXBRMn1kqEpgH1",
  "key13": "3s1D9G2j21JYyXZ3BLLLU3GWFzDwRg9fnS1hZ1PoN7HPf6LyLtJhCCLymKgVJMp4wZLcQSRAxzki6JYNMJN9feUZ",
  "key14": "3h2j9tBV47n5pcpMUfxeT8smbvKjwdMXBZsmSquugPWMikBSTXXJUFJvm6Efz3iMbkpZgBmx89LeFjmQzW5ZKonP",
  "key15": "W5U6LvTJYVP1A9BW1uAkoY8WR4J8H253QfRthWuLdXpELpfGYaCtWSG3t39cymtpPCAkN9z7Z8HFgRC6A6ST6VZ",
  "key16": "A354TQGdYC4xSf9esNz2siFd3beVG8bpLnRBWJ2ZzReq1ddBWHfUuv7KaJJWXX7RbfwaX5mWDtFDhsJWMTHc4aQ",
  "key17": "41sytxUU7DpxNkM8Dg7FpoqDaB3yoxFnTbyxuRiqHTWYkc4b7soF796gBC7FXj6nhDU7XoPXJjB6cDDmUBmUjHxm",
  "key18": "2df78JEc1LdnWB9FDcgYnHcmEa8VaKBC2XjafZn7dmZ1dLDCb9DPBcVMMU7LFvoRMsWmNUTESyrJ5Q6fHLtf3w73",
  "key19": "67PZiaegRey2iHJNBrNhmhYt47RiUMVRmib5UmF6yUtWf7gd1WyJt6nTqQ2Tys9UBaiZum3FXZb3AAaqZUuEaEon",
  "key20": "56xEaB3GcsthFEiUbdbbZJdPGhaLBzq76papa2VkTsT9WdAYcz3wMTmNB9NZW7eUAHSYZCyVmSfUB3zUQ92kgeEF",
  "key21": "4a9j8bqod6wUZLEeUePdbcehWLuxFAA7QrdPG1RbqDEXLS9c5jmAqnEum85V2MarCuoMqRk2QACNK9JUmGfXB1v6",
  "key22": "53oTbzT7wtVFrcNXJeFrt1vUHZQ5G5D5mXW3rcyAaNDFyu4MU8HVS8Zg5msFrtYvBtRN5vpzYNBTLDcpSpKKYYft",
  "key23": "51fpKoHJJNC35KcfbepKdXxsJAvSS3Qrxh4dCFvf9RoKkCGJqquWfxrsnDUrLvTC4BVcrYgsiFuWM9QapWn3VBy5",
  "key24": "3YpqDvWiJLedYtJyCsFnCQcH6cGrjkRdS68Lz5Dz2aKvVphbxyeWHsECNXCxA1kvqAbKVrt23isoDfaNfdxRvXAy",
  "key25": "4gQXDEVGbQu5D41d3qab2iooqR7gjT1pAmc5YVrMK56TdhV5NfcXbQSTVmKqn7fw8qckk8GrGU9x1g15PhCLG5kD",
  "key26": "5kJkzKJBenhRDHKiY7jmc9ixAHxnHxF9A3Joo5L7gcRnLRE7Hpj9Fq1h8Fv4WBGAarrvWTDwQZaQuW9sYnYbDgWJ",
  "key27": "2vpfWaFo4DLTtUnd7jYMWRGjhCu3oUPZNJUkasS5XBzcfY4GSFagrXKgZu435L9GNdBbgV43PUD1bfrqpCJHAwqM",
  "key28": "31LQdz7ifF4EuFiyiYViWNd5bPPZbgoJh1r8WiBrDaEc2WcBKwjwJWe4jJhcThcBJ7vbU7qGuWeKr6mQbP7Ur8At"
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
