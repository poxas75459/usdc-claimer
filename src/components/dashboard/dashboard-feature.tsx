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
    "3pcJKpvZYA3nV4h4E7FXHjhtKYdGv8cStnTCMyqADdpsk8pTnvaHKkwkiJJEZDBTiYxsmwC6jF54a715oXBgYnkv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jmTjB79QhmdPNG1Zt6z91eTHT2iPyciFdF6aZhs7pr7EDshrS3CaNrs2JR24aeBx9GjCjF3etWf8G6BJ1qPZt7G",
  "key1": "f9oTL3C16vTTisGHsikE6uqk1fDUE3mZGa8ZBRpqXjkYrYDS5gkieFVVYFn8NpQZUrFsCTaMA1dbTPerLzJ7RHQ",
  "key2": "B1aTAht9FZESLi2WDgd8U3XLDELX6t5ZY7VherpKxd67AEZPc3iEug4QUzdEvi1uXVKNdkdTsv8Whm2Egtdyvri",
  "key3": "2xybsXiSc3LXPrSeUxpCbV1uzpzasdgkic5RC547gTRfmhLDU1go8kCPvKJBfuTnngXHKNCNKi2bMcMHg78RDwcN",
  "key4": "675w1RB6JVACXQNgmKi5oGXdJc2jw1sVT2ZKZ2KQEQnixTv5xNy8HxN6phcJq7YMBL4RtAomB67zChXZ2HThfNbW",
  "key5": "56tywV625WSbyDgKTwfN3J5hU21PpwDK7Mf4Yrh3xpUfuSjpa5xqhRtngFRzV4LXyS6uPWD1ccAGthMLCT5phu7i",
  "key6": "2X8YoCE4N5c3ztvRr9RnKfgJLNgjDyL9ssFGr7Cbix7DtyE3QYEt1j4JyPpYe2KeDSLnhztgzH7yVPYys48nzBQd",
  "key7": "4W71FgsTBNNVV2KHkUZbvwSw4WNJt5FBN2L7XqUGu6pURjqHo8LwFy81PJt9eu5zgEcB3DgwVxcPjhwDUwXoFnJu",
  "key8": "2mLBk4g3W4E1GNG2yj38oJ6EpnjaWvYq1pdySHdhAxkxZqcygUFRYzeo8JZ4mRtG6tFLHB4UB7An15UfzyqyLB7C",
  "key9": "5YGB921DdDc1C7MhEPot22ntiJCbu2C1ECYm8pwiE6a9YHiMzntxdZA46JomQ3Gz3hsBN4Ks1N2MuaV3yZJDhzkA",
  "key10": "3gpNj8Aa8zgaH5Cr71otJC3zYTh3au3apszs1WEAp7uzZEL8iyaAaMiB3fbTh6Nx3BkWBu7qmiQvG4fvr1azgVsP",
  "key11": "2UA8oRHKXV917omu284JmbiCxyEDWSgdnqh8MAVyp9bPGF2p2pwyYe5HvEmYxjBiPQomZ2PR1wtni22rAtvLSQrT",
  "key12": "wcyv2nhuXMcga4dAT3YfHHvrRhVqFX6i3R4oXT2jzQPvSGvuYYiEbPstittYXWAxUiEsQMrzsJiof2p8RREiUKJ",
  "key13": "3oGjroHVMmUZ3ucrH8HaRr94YaSZqwhRnNLNtjLmpJwXndKqSEswDwFFoW5ZtTMN3cLvdeDghRFqwto3qxW35bXW",
  "key14": "2AF223Rdm9UeCf4gN9JECFBZopzuFXdeSiTCJPCoLoqfmkL7ZCJEgJALiVczsv1YwFpgYPGdGeaNyKgNMKKr9KAd",
  "key15": "GitaYGScrfxxtimKQ9ZanRkw54YeuPrZZqHjysoENRMjLRDMArLtLLxAixgV7z3a39ii7NmiWwVgAnzChBGEQyW",
  "key16": "Ws2ZuNy4bVhaWRge2rGf6yLuN2Mzj39X5waCiVNzcYbKpgzvsjDyemvEKxLNch5a4Bt374wmJoVVYLaLMDxNZv3",
  "key17": "33b6SygtGFV6hANUua4rEBe9ueoRpngKSCofXXagnLaghDz5vXAKKCcAh7M2fNK9NZd9xpNiSfUm6RfBedMFjJSb",
  "key18": "3UXifmBD492KfvUd9PsRuXb1J3mEsH2TGZfzypkD1P8ccT9iWWN9b8LAvQHAUNnq9TCvEaYHEgpJc4NsQ1rRcJDs",
  "key19": "3XHidKbfotgFbGTHfCCSfsjgm3qgj9TrVVrNNeUtN1QP4p2Jvk5TrAAiGaE9ikxdqbNJHyvk4MmqBGiprZ1TTV7h",
  "key20": "4T7cYJAjghCNuMj3fd2Ux3Nsev833rUeceXAyrLuBjirzqRnqw4YFean9nKYjHZEGNHmccxgnojfDfw1Vx2rBAPe",
  "key21": "22vRCnuG6EHTnszi3eX1RFQo7gADCyWj5W6s2p1Lwg67W7dWk1dMqHK6MB8V1RhXjHAbSYpZnQ2ARb7Ga2bAUTcg",
  "key22": "4oiZ1n3BNDbTTEJ8C4MThjse5Am9aaYXhyL8bqzxs85mG2ECkzB2YGA5TgSwE3ZiSUdftpCrz7JWTL2oPCrd9aPC",
  "key23": "z7uJ4ntEntcAvjbss4gn6aKpiddBU6ySsXR77m17wZVJiphcYJ2Y7F45j21ryTgcCuQ85RKB8HSHAwvKZNWQawk",
  "key24": "45SLEwzYkEnLNqYMJ4W8hBDKqin3tWFYnBx75agDjpuRCeSUHR9JjYBMbzQiWBER9MHtDVSoXuzPoYvopzxznzEb",
  "key25": "5Tuvw6o8ZLRRR7rQwSRHLUik5A6a6WfruNLyqpTsqr8nXzrUGUrtMGd5j3GJdpwSwxyDdnxtB6SqUxwA8TVubeZG"
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
