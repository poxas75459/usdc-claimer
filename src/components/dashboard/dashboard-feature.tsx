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
    "2ck1TZ9SAkPohuaaiZfKpeBxWBp3nwrqzCyqY4ZPnvTPmncLdcUzMFPpzpBsp6gtVMDjQ2NEmgLDP3kHpsqSZFZw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3idp8nn8LEyQLqJNCyUfZCKv5cGSKsP2e7b89Hw3sRWCtdUhXt7CMz25tFWUFzBRdLeE7BKi5yVLWC7NxxybCYm9",
  "key1": "2diBQrAJh9EPCat4FghGLJU5XF4oxzwTxugLhbnU5f6haDGCvrh4yrwXerPwgUk42zzx5kgobFSwkfXFoxkWY54a",
  "key2": "5cUkoPBsf8EmJTEVHdovWwpER5TnPep72wB7f2qCcj33R7DBNU2VhxV9S2bS7QtxfDtTbNL4JDmVYs2oQdz7RGMf",
  "key3": "qXKYzn4RDZKiWvjU9qcVkE6gJUXrJZEjfwUSvXnGms8VSEG3ZNhSXWdKA8HUMQiyrngXSzWefpypXKXsrsCCV8i",
  "key4": "2nLuHLJPTJtCM2kXRWczq7cs9QiqryrmGoATFju5F2cfoxXKsohZ6jZnpSUkWy7npVBTVrbVF2GqTZbry2E4VN1Y",
  "key5": "5VSLwd5TQ2NGanEmzF9TZakzyCDE5Et6C22yk4BkUW1hEHqkYC5JqthHLZo8tJaGyZrbF1hkh7S1WHuTAFCEu38Z",
  "key6": "4XJQybEZpJGHHdAFETqECLYqRfrPxBDDGD7uQubSLkY25E8zwSd5c4KPQx4m8Y6BMdpakkAWMZErubnrQjAXqjih",
  "key7": "5f9R5uD3ViTLL4eEZguQH81TJ8A9Cnkeck92vzGbqHabWHgvpyoTj9M2AioUxhcGiSZzeaL2d1aSZ5xhkn3g1oeS",
  "key8": "3NdBAANyWtM6tvMcnYF291s1kYSqmJge163EfBZ8FvxSZrLMnMedPFPBwnrvUutMMGtkeGe6JtGGfSzDAoi8JDza",
  "key9": "3DA2JQgEQagAVepwmcpxo7xGJMWbA2fiq7eR3xNp8tSVZxgY415n2FBWit9snr38HzuxUyXV1Gdmmf61UJQLtpom",
  "key10": "4sbYXTXv7M6EG2MXZHphYVZoG73BimSLwwbAYHmqy3hFHTd4TkY6Kzi5GVZwMn8DkRtz6gweez2PF7giqQvkTgn6",
  "key11": "4PE8BUhLJFNF6hiyeN9fCk9dQbbTAmsezUwowJ92gHtU91aYant1pqQwXjLBPfbVeca7vQd1PAV9LhdrgdpmSmL8",
  "key12": "5HHCB62AGHmgYuoCHLJZrF85KGKo7PZwittCoYD3rpjR5fARMicvuWhUjHSBFKVy7d5x8kXaHzFrjidm8CWDJEm4",
  "key13": "2DTfjg5cziEYt1e6DHMvWHucRLCNH7CEGCHwKH9rScUva2X8N94M5EdMg3Q45kCs2T7SMCN2GNzfx8zBu84ah43e",
  "key14": "37UXc4J7adtc4XiDfXhgJfsnMRZQLhmbkrg9mRxUWRnzqb4EW9XqeaiP9VxX4vVjGPxHZ6gbg2sUf45qn84dH9TE",
  "key15": "3uthUVzmwVStK1rrtFky8iscxvMzMaPDWogNWZrFpPmv465dx7jP9WWuwkVso26yHhgPmJMNm6YgG4U8WraCdFUu",
  "key16": "5BLPHicrLA5sEXcmkn5yUmwzaRJ4JgXo1F3rKmignkjKtKXvxbKSmR8yJjnYgNC5rU6QEBi2SnjP8G8yK4W3Drdr",
  "key17": "32hDuUTyQdESMEv5rz89U7orfNJXD4RChCENUoD3mCWcpgaVhZJNEmvF8NHAQTXxY1Kvmspsf9nJmXGKjA3typro",
  "key18": "42ow7FogYSWcdMrb37qVwaoq8EigiPTYntY8SjSL5iaz3NrMD8cNjtxTKcjaGk1Unh3MUt6USNszvy4MiJGnzAZk",
  "key19": "3EiKfTfiNA7g7MB3RWDySJ3tjwNAZrbSP6nyPeoQggriKbVvPH6pgzJGV4C2ZbiV2nm6qBg1HctvZbqz5qNTUWQj",
  "key20": "22YgQvNJmfj6SoWUjoEJJiSsbCgW3m3P9LxTaFZ2zsG7iqNHg9NScKRDdwAKDjBGHdAXavKqDSQvuxSzu39U83eD",
  "key21": "2WDWMasQFQ9rxghRj8i7YQnR7FUWGZzyHAcKqN2JoZuGVKRshA57Dqaegx9TfXCkL9Pa2VAXbXvrNEATSFXS3v8E",
  "key22": "222xMhxifRZkRd9zguxvxymceENcKTAm3YFacKNP1HCor695Zrj1w8M9gnY8MggySHw9MkxrjBiyUysANZroCQGF",
  "key23": "51S5Wu8ycZuhzweK1xF8694iqPckkKSr2oY1eajQnZ1fBRNSLCUuzwfhkznU5UqZVwZiDYJ2sA6a4iCELhnGdb85",
  "key24": "EFJEBDgYusZdQrfgSMcfttPYxy6haXdUAkL3RFFEdicsFpv9k8waYGExRU9YvaPvu8tZhiUnKxsF7D4K2TTeWfB",
  "key25": "5HZoT8vWUCD5nqANDNUVu8u5VVVbhytfUja96xKDBnSciUjifDXt76jPN919tJQwukBhF4evmn7qLNizMkN6RbR8",
  "key26": "5tPWZvF9TPx1gGtnucpwQNDMdvXxhZcW3FSqpw8iAuVo4vEZ9SCzu3cToNhxS2drnAqLVJhctYuQHDkpsyMCrDSh",
  "key27": "4wAYwwqqhewc8JFRQ8SxsdDXUaAnzmjMKdxu3ZCqzQLZkCGCWCnb4whzSkXF6cSKgMHse4uVPZfDhLmNmNHQ8jX8",
  "key28": "3eVpTLmhrjvqQY4eSYLjboxPNt2rNwmoXtCxR47YY2whL95aGgFGGwXadu3BSg1ChRRCcqr7NYTA9zdCRCrL8Jk",
  "key29": "5o2rQyrdYgjbcsanQTy78DKN4nvKYtgYa2gVJwD2uZ1y4wBnWwhi68sPF46EAqdB6gjBMeWcPHBfhxCpZhbE6LuL",
  "key30": "3AoqMrLqDBPpyxkKEc8HURVn9MPAML33D57K5h4X6qXbU9Z7fj43pCEPakzMkaYUe5gFuk9TTYWsSVQg4FxfM8f4",
  "key31": "3weJjUv5TEbmT5PfZCCx2hSPH7L8wHJ52Qi1Lc76BT9zeLoymJcpcQhgvJXkXpmQqSvnjpVqmAAmDE54oPUWcG2P",
  "key32": "5A2RaCve2UXUiMSsx2ZJFNiYatk8ncNLR1pcekTGrxYzYTXMAyod8U66KC6cwMH4rQKBA5xbcCXYRjXeiqDmQCWS",
  "key33": "5PaumDyeeTgQYMvXgUuw8r82hojLgM2WoVswp1cZNQw8HbKtUgzuQnxKhs8qhjBZf6XbhqNAAJb6vx94oe32xQDr",
  "key34": "5CqZKYzcNFAgENW71aByJ12sehuqGsHYNRqtrrttz87wsUBmhxvxzYMEf4JvtiwWTHreRWPDKDTRPBpAZeS9bog4",
  "key35": "3unCytVF8qmggT6aCgqPV7yRjR4zCDeG8BHE8jpp6m9xsWSRL9r3zNvn2tgAJ95quSopTtKxo3E1ReJ7DykZDMvu",
  "key36": "25uiwtdgHMxPZnqt62FpHYBbmgArtXUYaFuADXQ9srdu5YNHXAw4QtAx7JNMY9PvNMdFi9xV9GcGQs7s3zrSNfbH",
  "key37": "2WVz1a3HXuqnfXHxuYnxFmHMnAvfvKZqLzJxniuoHRuJPuUAA28B2JLXrSsdhTyV9MMQjdGrYoSpTCcQu7rMiHAF",
  "key38": "5vHWgHggRr46MTuuuy2dGhp6LaSj6nQLE88CfpWnHFoRLGLPYyXYuZ3SG3VM8M9kgStodwd5rM9eLyz5griAKwgb",
  "key39": "2kmCtUWd2So646qKm6G58m9UyZ94KyN5LKDBYyrhMfUnc9nF7Ar5EhV4jq5erB8TXFUnWNdxXu8QkHQiwzPAMjQh",
  "key40": "46TRRAnBw1NYGW2CKjyM936iX645cipeCXkuHJyjb9P4g1VNZBA5ZkJDxxkcziqqnAQftvSSCfLdnzftkJPRa7TE",
  "key41": "2SuC3oTQx7itRajYtyED9ijE7HbJPb7Q9eTV5vrA68YhwXS7sg26BLbnP99uz25S81xYzXueZaVLiN47v6RGCmG1"
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
