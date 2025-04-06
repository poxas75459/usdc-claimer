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
    "2oYeUSEk5DkxtjyRrbwEBFbsK6GycqCJLryheHz1vh1oFPQBucMV41rwVG4Esnso4mzsJzruSoJXfSZFnyR9zwax"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hr4w16qKpFjBBwPu9YNsBoxBc2jZzqYQ1uMfettHRTtfyCjZTbDEM1uEKoAnJBY7dzWTDCwaJaXnbRiU2deZmYa",
  "key1": "eeXC4Fm7yXVjUeBotJrawaKjr5xanqXvUqk2KC5c3ZsJFr4ZCZNA1Miv6VKrri78zKPmiPMoU4LLVvznU13JiN3",
  "key2": "3ZtdrinqejKr1Xv11PYcLsq3W3NfLDtp37qYxvP8uvoWn8zBzJyRPuKAYsEirc1itMNPMd2yvoBSXqndv9U9JaJ",
  "key3": "4mMjqCSaAvhY8hkni6UHGULnP24padqy6ueGPs68Xy3eeyXWxN1pPqoyEy7JfLVXBvcKVB7CnbLgWfdtNBDtHc9D",
  "key4": "5iXxWTaZnhcFgPLz37cGSaKRsvkCR7FpcbqNUESGuPYrcUnubXa8RzpAPAkSP2SeERQbYGSZL87CtsXQzAKv3ghU",
  "key5": "RVNWNMdwugZKCFt5EpDXJq9JeUmUP9MqR5FcwR7LGm9p39MVqPgbxg9X8vXjQDAWaicJXknPp1KWBrqnRLSxtJh",
  "key6": "3SFiYCDsPVzsc9KrmJxK6qRez8yz6Dd8TAzBT4hh5hYNQ4oUNhYYujcFV9BvLSUzpxVFtaKDcqDk4Xfvut9PJ1UK",
  "key7": "3gQXbET1E7K7Y2dusZdtbQkmyP4zJd9hXwpMMDstgaxH9KB5KDM2wBqQyT2azr8DHGYMgb1qp5WbUt1cth5SYSNV",
  "key8": "5HjojAHKZy7UNsBzgKxJn7QoEk1eyyAqs9QjwRsUYSs6wj82PiVwY4fsLDMxzapzmnuYNzrcUkJky5BMWGLDbDd6",
  "key9": "nYam2ftc4pJfwfa7uqbVGQWGJTkZUWvMXJWhheuFribb9FVQTNXKa13H2KG7CuqjtFvFmHzuRVtZDPb4KnKjmwN",
  "key10": "2FFgpcB5iLeoFAja9CkXP7KkUPChqW5gM58jJpeSfKashZL1e6xmjzPy3Aeuu2zYCYmHpwjVimqX9TbRFdNxc1cX",
  "key11": "qysM1Cg5L9eyJbu64UohjHfGeDqYKjEdfpQvuABJzb7jGRMn8C7a966srthsBZRbw4CN8sFpxDzZAaEQ2QznjN1",
  "key12": "3DXk5cA584L8fqrD8KijC2p5GzXtR9wZMHz31jDF4rYE6rZ5GaCvQiGWrjUj99ciHpLtRA1RtgcVtTVfJo78t7zb",
  "key13": "4B9n7JhihrWudcPFSsGnssCBUzfRWMTAAJB5YUqjQRpL8z99zrdPNE6iG9rFh3hHCdtjQvw8m2qeNhLcb4F3TztF",
  "key14": "ZfLMZ9hhDK3HG6NWYw6nobsSYorJXidwPWFw5YvoudCrT2NHv2fkLV5p5mZMSFX9x5K8XaKaD3pyULoNET18qkv",
  "key15": "59Nai3CR5T1tTSSm9gRzkRPNwNCjSSGkkK96a9f6UTcNG8TqKvUz4LPRmxQNK1RJZvbyhJGWqq391jPp6yUJjR8P",
  "key16": "43x8maEyybThUKicxiwPyuAQTEtGwLb1nZHrZfAmsqK7TfDNComcPh5UbxpzkTQBb4V3MQfLh4tY34Kn3k5JFE7a",
  "key17": "2jCQ8HcQuiAAkxn2Bf1B1EEpdaB6fm3epWXCfdRtPzG1pq5DFB8DeXEpExB4hihEqG1Ld9eB38i4133GmgqkMtTc",
  "key18": "3xFLaHBUvBnnaLHUNkQDVJ3CQgFJpyruMeRQu8J7e6PTUUDrghmY7vJo8yi47MSxT5dgXnijkYfGuKmcMnxnCf2D",
  "key19": "4LouPrr43NvJycfywYATRmtBgnSttELnqXk43UJqAx8ZrQuFJaQLojSjJS9v8oyadFhFxTWTGam7nUSEhYfVGJ5Z",
  "key20": "7jE4Bd2GE6XaBFPM3oNmnrwNkCxxbv8gDooNyBQdyM8Wqj1NvRNT8R6aBLY8cu81kSaNZVufaY94e5LkEkSBaAz",
  "key21": "5HVKJcpN4NKNDqZ9w1Q1nhN2UNJqKFtJr14NXzp8x38UsxV1hqB5o3euUXmZN7DmfVXxCbYn3BckX4jwo71nd878",
  "key22": "5XvabXXLXmmoqp1EPXRoibGDgDH2nx6PUxY3pgqKGPaBfAaco2UYUq2bAaARuyLrjVo49Jc8Doy3azAV4XENv5Zo",
  "key23": "2cfwbKg4ksxhK9mArdcg1Li1T9uwcHyyKpFwR32aBHNpUB1NSYE2oae2MzAyt6A4pkDqVoEr7LSamRXZhZ2wmNaC",
  "key24": "5ybZXgknxYZhLF2LK7RTXZSF89Sg25SHW1n6rtUatzE4jr2anconWTLpdim9myUp9gqrP2tQyVRRrCFBxgdCUVTr",
  "key25": "2W3y2ZZQ8JdWMDw9ZiMqLYg7mp4a7xTg3ZuwbEcCTWFb8dQDrNzb55ZKiMjT3s1g9oQaUpe1LDahmyL7ntjDKEYL",
  "key26": "3fjNS5kvjGqejADDUEPfRJFyavJ6DvzGVUqyTnB8tgSssBJd5h2dJ7QUUEva7tyfwhcXP4gJZYRfMzzjXrK4Sa34",
  "key27": "5e8ipNGJuYK5kpePQ6RLBGAWw7K4wVWk85DW62wxzcNyR2gpcJYu82jiebCM39fW3zJb5ycRmR5Hm7GfAUae1tQ6",
  "key28": "3eFJhDHfiuHaZNWEhjsEzPdCy5bq5Uf5Y1R9aStwAUHWW4DNBVSNGwQE1PqCmUFjjMx7rZZLmVujNeEkmnNFiW7C",
  "key29": "3NhFGf8NUydKdfzJbrMc3xrb6zFPShkJNJE3R2FZk9rfLe1PWjhJs2pCG3pc56LqKxHBvHiAiGV351EjphwdtbeF"
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
