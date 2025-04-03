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
    "44LEtAuSE5L7fxUhtvH4FQ9CbQE9q4rTxyE6VeiwdoHgMEVW9yR7TyDnRtM9WyyzZ9JQg7qQ9rF86nRtZyaiFZSc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23PbC1k21926jPyz6MygyYTJZynbg3GxL3ztfxwL87BNwJrZEZKvhj8hHg86VskEvf4rw2oAKxdx7bcRbPA9xHcu",
  "key1": "5erL7ZKHLo2uok1n6XYrpkNjeW85QahyuEWoSdJ8Uif8wKqypCRfUbyb4bph4Y2in4mThYQ2n3CK4YpL6pAb6QgW",
  "key2": "2ywrQKPRiFeEvH4fr8X5kzTuyb6SfSjNGDk3TBpa47jazdUUZWqtu27Q9AefnycWgGWZ1nZUBhsF11eaFkKYBnx1",
  "key3": "5RRsr4ELaoaNFqUGzyD1EKC5jo6jYVAQoxRNcoq6dAwiXkgwYmPLevPGWSLC7KEHxmWeM8Cnbsaf3F7ZmmArynP7",
  "key4": "4rMPJqrqWzfFoJ1qYcFQ2Ujauifkkz2eMuaAvCye9XCninjiGmUfGauUw6NEJDowTwswmBdKauVrBhWLph535CU2",
  "key5": "iJzkHy8iexLM26zpq3XHvobL5AnwNFnPYBKnTqTRSiFTTMtoyhE8K7ywcJHbUDQYchtxnQz6ayCfAd5R215qXHp",
  "key6": "4ibYPYPEBo7DjLB89MkANjPf8e5NMu9RA4zDLKfSwYThXWFHR3soN3kVY21egf272oUnzeU2F8bDY9uYm3g8rkcH",
  "key7": "2ZXxxYCgkJAHiZsVqQME3DxFdKTjCgWtfJrtyYUL98GHekbzCSJ4KrEJb7P2SWVD6TVbipN27V1mLFwF16k6pUAy",
  "key8": "2XcvjeeJX8MY1xy11zzGdZsYFH47fCNjJrKra5V4cCAyC5MHnf2P1VUrdbUABE38r4GxbExXz1iNSZDRJmGXaGHD",
  "key9": "4QQT3v3ikR4BauFo6FYT3sXhxdDEYukpyCafRepFq3ZqXMVgDoQzp3XKU6b5X5bRAAa9xqE2c4ipoumcUMxSv6ua",
  "key10": "2WaDZxtB3NHbqUDNKa2bYizzme57LymTJLfjJQLqLjPJJgF7ssWVx4cecz2mZWV6yPPRKtQX4A6v1yo85mn9hUQK",
  "key11": "rajAm21mUYs28hqcYzHtnU8vdeN8afxLLrXPwjmxwWeQpa9az5L11eKtxTzjkSfX2nnZBFnQXboG59Wk38qC8y9",
  "key12": "3K3bwvxsQHCYKinBGks2juu8ySDXZjnHks7TRptWk1f53SrWrVQuTxcnY5ApaWET6cZ8aGdw3kwufKdVNrbCJsi7",
  "key13": "3gFdsPk92rMeHd9TKAWEAeBvzGNdB12v8EtmkvrDgy1A6d5uzwcPByqFZHPfcPd8FRqhqLCVZGSGoiBsgSTtHkzG",
  "key14": "2JshaSTGArzwbCaSutM4Fn9Lf6uc361c8cZGYqRdAgux86k8CN1twES8M6SUBcBH1HEBwqc63EpezkrZbyeC2seF",
  "key15": "XxvUCjDLSNHV1EkJQoKMnFjEKJdD3KaXQMRrYgu1yeNUns8q6Rs6nu3JRQcSi9hD2eQyxsKhjf8cS5hDvJv7gAk",
  "key16": "5hzC4whhiYnLqfxotCZrgF29mpaFEDLMLyqqsrEgBeTBuMCesaD4iuMwrNbCDpmAGABBxzPBRQMzBCxgX8TXSiTM",
  "key17": "5FSQUE5p4ZWR65NMZZ1n8pcP333rtLTf7dcU3wvRxSjQh6FKhWQiyULkE2DSnGuWmK8RoCfuPNBAx9pmUYd6PsY3",
  "key18": "4i6JQDiRmqmPsrUTBbQKQTCS1UeB4G7UtEGbj8J3KbrhnsmCgtZGZ2qPgoZFkPm6XQUeDbXsCwzVTyKgNKDzgx4Z",
  "key19": "67EHFx6THJFFtx9xzqzemmWuRsnzsbpyTb6ysyKEZdEDGEeiTfP6X4Nh6DB1AHWyuqH4naxw4h1vYV2W9yjZ3KNJ",
  "key20": "2HR7xGCu36zXZqvB6GKvh874zM8kzUSnvGiK2qhpUd6qHDvjeYssMzmDopeWAATSGaibwRkBkVddLaENfiAwK7Q1",
  "key21": "671tQu2sBCLxYMBZhKugA7s7Zu86JFLwSkBDwP4EwCkNkrQVX4ri3pLTuHLdTcthyWsEsjhMQP7WmAsrFGEocxDQ",
  "key22": "3vvc1r8Nqw1E5zY45dEVCXe5izDjAud7ZW4gZEH7vWGoH2T4xR1nL1nmaM5EvgRCPrsQfkD5bKwh1fqbuQogk9oH",
  "key23": "2ifwWeTQkTe95vxQxPdrqJijQw5tb8RftVXB9VDS6WQu8GfjkZBEbBKZTfPqdQLYf3jzXjKjLsDj3atZe6VJURVw",
  "key24": "32uvrQxgMvjp2zNZuhdLU3Ndw7yg6XdmHyHU7a1G9TLLS5oGnsuPu6sr3ERPYgHumHaadasxYpopdwqqRG8DPGvS",
  "key25": "4GtNxPxkR5RmCSQZZXJHxquXTVRv19idPzzraZmeUykE3tVcmHKUvN4XqpGJEKRvgSMsgt4BndPN9zECcyLHc5YR",
  "key26": "2BnGc6Bu8Cf4KnZZGV35nxtJ7whNA1K9CMGZCEhSUAirB5AJv6VA4ZMjJ1CdscwGp34QrsxDufB1W38GLSf9gkys",
  "key27": "4NDsXCNnAzhwA5Fu5o5Nr75WjFuKLnmD21gnjvVGcTD9xcdULsMkycEEPQmSNfBSPRjFveC913jxqr7crH4ZRmXX",
  "key28": "2Dd8zMDu7udiLC6uX1NAE77gknrL5d9L1jN3bffGN3KCEHfnPLeEFFPv6VuMFEVRVsjvuH3LDYNTs1AUBeNskZPa",
  "key29": "59dqVnQ5XBSr47d8wYBsXFBhmv4YMdne2Ls1771VHLB9cvDo4DLq38YZ7T13yivppYDFyqFPUqfAj2SSHPHs8Fpe",
  "key30": "fJXMZEWKsHcUowXDDeEwFba6TRXCCYFr3gnq38n51UYewgwZMvpQmqzFSYaeXAotx8QeEyoFD96N6QWEHgyF5nB",
  "key31": "5v7bou12KdRU8PiRHNvh9PNo3e4dwk5fMkJdQNs7tZWwzG485wFDyqhTEsUgoxoAqMMc4n32LHdQUYwDdFYS1bKK",
  "key32": "4BMwyAK5oruAmqZGm5jDk1uP3PitaJhgfjyXMaCiuQc1fZHrXpiGFVthAAyMZJhTfMjnid3MeUv8A7QBmL9FW9ZW",
  "key33": "us7Mh2NYAQ6D3rqVYticUUBMwzsDQeTS9mDCvfQu71rBU9hkTjY8z42zHHbyv46XpzWyPJkeKDGfJ5EGb4fjdd3",
  "key34": "5yjsxJL5VYXJ36k3YUaQY8ycvAT8ZwBED4Y5keMykxode6eKovjFg3tVq2ksAznTTy36UMhtozfVSzJ6THMobBvY",
  "key35": "2DpTmUnjLVJ9TXsWu8pskPqs4hgaT5HU7QAuS1UUJNYcwzjccEoJyH2LDp4SaPYFy9eTsa9NSh68M4KLHMy8uA8s",
  "key36": "3YwZdK21Sh62kwBaALaj8BvVyC95uGoatxKaiAYka7tuiS72XDhTnYWHp9ZDhmA6bXvZzJzU8Ygnc1wtYjFkLKX9",
  "key37": "2XfUW8PTvaQC1wdnNWojYKbawRruyzZxRp7ZMw56dfkgGtwVMm4VMHrL4nxRjuArcwGAeW9spknbPpHWJd9FSHdU",
  "key38": "2rfPN8pFS1mitzTCWUiwvh5avexbQxLh2JXLtimtD3fs8pDse2JCLyhFGZpjckXRZrC9Lb6dcSEMn1crvg9MJ5Sp",
  "key39": "7bnhfg9AN7FAXtdK32xjeBAMW9MYEJkQ2R7qUreNZUwkpWZnXkyRcUBZZ5gZqGWyTX3jp1dRd54Gq42hb4NXsWE",
  "key40": "4KCd6b3bNjHrVTnoSbXVzX8hJfYs4DLbUPGganXjCPCpnLJAk9bY3ri1V9kB4qmzM3MskWKg27CCZXqZVLsimZNX",
  "key41": "3WAwbXS8dCeBL88nVfNoWmFcJDPRiTTHGsHs2SAfFBiymv8iBU2RmFaJtHAVnjmCVovXBrHqcinZo4Xs1SSpYuzc"
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
