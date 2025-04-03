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
    "3LRZXDr5sTh1BjygnyjdgUDDBUpnvCezzXQfuUQJJHfTwU3sXZN1DKVfyB5rqvhiSovMGS8fRKaNMXDqF1Djdpoo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hfNMJPVQhM2Y3pGKMBJNVL1DKJYb5gBy3YUjSdNmfkmCy5J2iWNsjUVnSdc5FCMQE74p36ed7UECD73fk6txyN2",
  "key1": "2RZMeSkQktMLVER6D5ZQMFw82KAbBxryYeSic6vJ4DP6tkWXaAnNGQ4VQqeecdjzKws5qPEAjRJXk5M3BVgkuMjY",
  "key2": "2rvLuGy7FU4MpzbXkC3hUz7xdsQzLwbKkGSYEjp6NmCiCX5nht2gHaRNuaFFDriM6riwVZtYwtfb55jYQzWasc2A",
  "key3": "4Y7uQHSn6xUCLduxSwh42MU1jiqBNWinD3QLaNhGxni8JFUoyiEMhAje34HnBcuM1Em5q98GGHZtF8F5iXk77RRp",
  "key4": "27KhVqjD2rj3LcmmwkJLFiFNpXFxekeYkEpCCLbqCAcSxmmM2qUrgkZWHVrhDaffYKbaJFAvj5JpQiwrWnrFW1TV",
  "key5": "2RavVrJwY2LDJf5Y17yw6B8f7JdmzdcM6xXSYUewjwVgw3Dbpgm4DzUAjaRgnufgoaNxz3Jwqnbr3JKzbS8YEYBB",
  "key6": "3zHULfx1iKhhD7YoAEffbWMzHv4piNith7MiUuc7mvysFmdMzcvU6r8PLx2KV8C31nofvdZZc5V7xZCLwcUgshFZ",
  "key7": "38VLGQZij3soBV85s8QU9RP6zC9r3a3bBXeTKrH3uJ4tQoFzXTHfQtHvEgZLKLQpTZqicqUTbALxb61CPpcBaBJt",
  "key8": "2hdiCV7hCP6QYCfPfGpVZCRcNccaniUeQs76WFEPiPVwCxXWsY7yynk7eEa36ETLZFGXWxEch4Y4QaJGY4Rkxuvu",
  "key9": "3kxUHk4Jtg4PsULhrsrpxVdU8v4tSj3ZjisXuHUQ9hZ2752ivCosmpMhnyekDP539yuJU9HJCeYcgWjGv74eCSdm",
  "key10": "24JG5MFASiuSjXra5HdVm2KkLE1zA1hF6KHWa5J5STzD14VWYpXbLzwVU83vvw5JrrRWRvD2mnCwtT9EgNZVddix",
  "key11": "2zavU81dQoLxdVFEpC97qTwssbA5gWyQMkTkBgXjgRRGjbvgBzwL912SEChs3FcGWMyLxBSaHzp8f9CxqH8MU3rT",
  "key12": "3fpUp7wMH52dorwLnvuN1rbJftBJpdoWN1P6URsr4qZtMfWXUKrmeAxgYMqDQMqHZkPHVdbcTXV4CaB8c6kggUca",
  "key13": "gyjLcG85UoASJK3kg7NxuZjxrYKK8MkRoV7L9XaD4tJH7Qqjb8TbtB53onbFUpxZMsTPoWcm5F6fcH5D1XrRqB8",
  "key14": "4oMevXt516Y7VEftjYRp9Cgq6tZFLHZJdvahrvLjFsCvmRLhzaQayPXPMPJ7bC5uhh6BcWBFuEiuruDoUJqPD7k9",
  "key15": "2DpiZGXhQC54Zw2u4H8bRKn1rs85fzWCoKe3hpnwfEHcdbMhFeDMJEwTxJNaEo1HTu1BttyGtpXqRSnQw4xbp4cX",
  "key16": "WgitZLkY3DvPj3QRG947aJYeouAifq7QEwiu67wfhrMWYm6XmsQ9uJfgC5J8KEBCEnThZ3Ed4QwmefKSdAS159u",
  "key17": "3aCh7yXiTgovXWxUbHcErMcxYPBZhAb7E4Y7Sx6Gb8yCSBac2oeL9BfA8AFtbLnsHj4Lp5hogsE7gzQJvp59VGvF",
  "key18": "3PBhF8gDv8UVYe8ASGEM7BpUKxk1nqdXZjhXWiNucGinuYzmBqZ7Zt8ezhrSyT7B1ZJtYF4Vs23xb2r6L7pJQdLv",
  "key19": "56j9fDrkH9k27fwG1NPwet6EhZ7tM5wsuQPoXkEdAp91Ze5mqXtCZ5B5vh6phhXXKtZ3pWU5bQSr5q3khxxU6zXi",
  "key20": "2Hpfs2NuFzCuxoEBQSAPybE6wrGjvf3H3PL6i4umRoNEjEpZ15RN8NwBC5Qxm3N1J9RkSRnT9vfXTt87tKuVqAun",
  "key21": "5yNdgqXBwiXTiGxXmTv1JYPaMUvrjFjcLMvEANgwGSizzdfe5KN1FqF5QFcU9U2Y7qHjiDrbiiDd2zPWmjfxM2sF",
  "key22": "3KFscy4viBuuQFssW2HxqgEtXia6jmao5ire8PXRrUdjbEDGVmi4JfeAqtJ5SfGtxjqmzwJxtWvNC91DomWATrqm",
  "key23": "q9aoZtRn9Wov7ey94BUjBsPxERLCCY8wGyvt4X6bjfWQr8ytnrNhd1f4qCZNiQsYrWQjnDGy6UjsNxSXD1o3gR2",
  "key24": "ufDnYhq39SYdQNf9NRgDoXojM9V3V66C6nmZq3XQ4GdHDv7APyc14KydecR1cpGxgp8WUuBrqXLVkYDhT8q8SnZ",
  "key25": "3BnrXMFvX7GNkFyzYPdsVUT83peMYLDf1oWkzVpYXFJnuyM7hZa3Na7WnA6NyAtUpsT6Vm5wjyRJ5UNwGawJ5ZuW",
  "key26": "2kDjTg4qHTgpAFPamqQ53fkcr4hVtFWx4A2rLRKqBGtaEnwNJzNHHyyt3knuqDYokV23Ch9Hk6gJacAgRPESPyLJ",
  "key27": "36yMHn7jBPwLWf5fFPeaUKiMpbf6m1H5PrSKPEK6ntFjKFVxJWjxnRdM3RWfq4232bnrkTKhTYp1paU2L42TQF4t",
  "key28": "95rFZZ6eB6epLANqUAWN1MHmXeyrywFrjQmnLTRqnotXZSbRc2fKqwE3dBSaKpBVJUJfkUgtMhWBe73Q4CEwUjq",
  "key29": "2WLvSGJ2JMLAsWZoh36uDXLToDG4ZB8YfFpYMwGx34YHHcK8D9CEm3C4ACwsVr8ZSmoKiavyNLMspLY7nBJs6B2N",
  "key30": "5wxWdXms4m9vrS9zijbQip9m61g2QVCJtTf3N9wdxhdsv3PZYNhBt9YXpxrm7xTF2APgik4kFrAyqoFoCeezopAm",
  "key31": "3CQLgK77FeyVpPL9XSzCSs1B7yXeL9y7PijRoBaBYQ9WEHdszSFYjYFpY4hG49jwt8btJ6eizwHGRijmnWUwDUPG",
  "key32": "4XL1Hq8mfejjmE7UCdA9Q621NcaoA74krx1VHNtttrTngjSyU7yApFpNEJo8SUhFCosKWTEW8uNbDc9xMjYG8FR6",
  "key33": "rHxcdDSyymxEehdNrWh4qaBqMNEzpxTyMo7tjx9vHPH93GkQaxqcBtJWeWEmsgXCgPnKyDYesQUtjMKhcG7Gbj7",
  "key34": "5aRcj5vE7eJTi2WAicwf3RkCMoYMNgBv84oNQTjLL9fFv7NFkoscD71tjyoM3RCKEZqJW68FQE5WoTNoU9BMcbM9",
  "key35": "2xeSjEsWddBp7jtjozoNDFQp7V4Rz7Lu59q7kTVkBSndBKBCejymryQeBUoyNuMh5c9KhWmhgcJi7gxp58zjxCua",
  "key36": "DBzBZchSWMKL3NvHt6nVhpAseNs9y5RBt7EjozSB8D5hjkvt1dDXL4oS1oQXhGL6FseQUy8z2tAF7d8cwWahsps",
  "key37": "FjhREBggpcf1WwfzUf7bgefgaG8L1UjjBP4pmizsnYhmY1LQgKzB9z578JMQBCjTLzjaKKSZAGmrBGtYyuPUety",
  "key38": "38sGpe6NvHDq7ZtHZXrmfgLPzVkoRqu57oRdEaWZDieeDQHf3yUWvW8FcNYHgVk12WgirEc2ZLkMfH1yKCNmheh3",
  "key39": "4xqxZDuJPPaTmZ4w2FHN9LE51TQuJj54sBnxzqDADZj9f3kZ1aP18oqJb79X9JeeMLEdYMuCzqx1x61mpax39f3K",
  "key40": "3wP8ytceVpN89NYgoXNy6mWU3nKHp1uW6HvND9qYSa89fEtgJKv963vp8gk62nok8uTmdXUbkDVZdikVKKeMsBiA",
  "key41": "3sVLviL5PhFBLjW8RNPSYSzr15fTKQg5YPxNmUHqPXiLyUdoh2g7DfiPEhTPzvmMoXXzpUGCxygeibqjBbpD1LgX",
  "key42": "EWbvLL8xVM6C6oMHmVFNX82ZZSQ7ULxWLQUczKWZgXCfMKvLxrNrVkYrHzfafhSvwxx4XmNbXNJJB36v2RPbZAn",
  "key43": "42aEz5gaVeRNhEU3NQwTBavErB2joN8Dr6At1jiohGywmh7tEv2UJ98nPFZAPsgx9UAAr1Uk4VEWZPjsCr26Cyz2",
  "key44": "4LLrLKzuocnSr9L5tcbpx3WfUUKjG6LpR2kkJvXXLt7CDigf8y5uo4LLYe1aiDoHBdmCqf8UUz6bxTSgsaaKY6Hn",
  "key45": "47XRrj5hxDYBVyWA9VKpD6Cnb7PhyvkGgZvEDcCjyXiTqtiYFsYpKqhMhZpxpu5bVRh8eRZfseieCwbkcEHE9fX5",
  "key46": "4uCb5pAM4nGhA25APw8yMRZkvDvGKf5B5cfToe1SUbVHcsDD5sNP7B5Dzo2hwN5U8gB3mNqND8owJbWtCYL2i4d",
  "key47": "5HuETnTxENmchCraoTtTLoFQJnDzDRbThxXRAT8uuiYdrBCPRx3a5YJYDXP9b9bZ1Rmes2qgHxLbhekgGxUUkuBi",
  "key48": "4aU3fTDsmvNehEdS4T22WtQhykC5egdV3wk8vcV92wvJjLU1hpCRqppNTBVGFtS1ATizDP9TNG4n1h3t7w8kzsz8"
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
