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
    "5kZ8iWWAy2iwmjfhWzCwDUSrnzJuFyPLctnithmSNSQ2BkSLQMCUuu4j9rACPJENZkNLTzaJKBckG3nvpUutbKJZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AK3SEyQbUwTYS5RG7AW1fCApvi57NN8U7LPErRjLHdaxYBnQrCV4Yf9pph7gYMuvxBa86b87yWkj9fGTv8rdF6E",
  "key1": "4xrujjenhFpx8SfnZP3aUfyfgo5MTcPdG4ha9Wa2oBYLXDK4nMFkAoRsXX42pVRNxsWJ2yxj5TrAnMb9mnZzy2Q1",
  "key2": "4Cdwxe8CQzPaarE8J1gEpFRtGD3U3RTxXRXfCqz6bBYsYYH28zU53W2vqW7nyWQFUsT6fBDsnGNXcnWFqznq1Dny",
  "key3": "W9WnwKQAqYdgS9EunK3vpcTVuuxfk6poqtr16tZFXndBLjc7zxdPz2iDwWtHAUFjS1cvEa7ori8ai2UDCF7YUZS",
  "key4": "2yMaaLy5jzYU5rr5nXEVCBQpQYYrhzXwgX2YESiRhRx8rBaAbMSJrsi4gdZxM1F7biC4icaHgHCBwkpytJi1ihUf",
  "key5": "2qu2NMqz4K5MsJiA3PCkgoH24YvaoZG4XbsnzX1qcFTQ36gfNgayUTxLsU9W6MFS58Tps8i8t18kdMr7LpnjRw9u",
  "key6": "2HHHtvZCiZwmyb9YpeXuHojcwMiissv9WoaR1BoTjgeDL55FAd1FPELZq11zhw5jf8Gcj6APDKxqPJWCTjvU4pPC",
  "key7": "5whfnzBGgaAJeTWKw4W8obpr8KJZyxYRxrHJNc3NdYDHgD1iCXKmgLjk4vjPkrbY65tYEFMUEmFgC7Qi7bfjkZZc",
  "key8": "3bsXdsyyiKEqEqBe19HqszEN7q2VsyBeHVRSJapaeHrhXJh1jnenWQALeu6bLBT82oHzqL5cMDU1AjT9t95HgiAb",
  "key9": "2C5yi4cjaW9zVCakqJ13dZ2jnycfSSnkt76B4T7LU54D9JtaVDSfyf5g9xHjsEKXm7nMhQxeUDj1wsvNUwmZ9kFb",
  "key10": "rfwsBvpzUndxGTE2xhWHjDvwXwYYoakMXWxKR7ikRYjqo5U8DsNSMt42mKNGPRvyMNW24zU8YocEovFJ8NDe6JC",
  "key11": "As5PCh1viwkQT3QtxE46QQG9Bkz7r9gEvjNF3aV1S4Pvj5aMo7eb1tkFyxwuHnCmTo6U14K9GAqicW6gFDZ9trT",
  "key12": "63ZsDgKnG6m3Zdfay3cWZuEMVwgAFKePy5Ztp1ffPhBhAQSn2gWaUGTEThPySAjATpYso4wT1a8okbjuhCGGBuef",
  "key13": "5Jtcbb6V6wSX1p4BHHcys7wGFyGMo9Y6ZwvKzMfiW4nqHSAemEhLYVSokhPEVJPtNHfgwu8gNKNSPwEAQjmN6Aq3",
  "key14": "3myJrsMW2Kk6Yuy8wvYhMTdosDxJPRpQybLs3G8kgJ4DpH9hNXT1pmaUfoF4NstEzzEp5bkCkDszrz4ydntKrmDB",
  "key15": "2qetUk72WcPQAhjog87kPxUwvzQ9TPCFgtWqgUcHRo6QiaEQRc21FTrTWTV6zf3ku85t3u5rf5RUxDpcmK2s6mAd",
  "key16": "52JFSUNFevY1oR3bSWXK9WC5PJwzy8owk8vggUyKsj6wqSvZWWytnqYKFXgxmJeaQz5nUezEkxpQu7k5WMwFGg3S",
  "key17": "2nCzWZnprR2B4nyfvEp9QCV72Jv5UjegBMqLq1qqy826bQs7pb5W5PsaGXPstrmZBE1QyoEumhBPx7TJGs2c1UjG",
  "key18": "39C6nG2yQFLkyt5hNQEeavyqRLqDEC27Z8bHMUAJZiu4UMwUmBbi2Uo8yWyPXcEvqC9gaMYbpeQPsQW52f5b54RC",
  "key19": "3SkTz6T1qrgermhFUPntn4efrSWDJc54CVRwomQofXau3354GUDuYJDbYduEixJhEo7D3xEQGqaZnRGs7dJ3aH5V",
  "key20": "44PMf2gMnyVxJoF7C4CaNoZbTj6AwpGcFjsNETLykzZMihMyTmpFbNxG6WXmhaX8ZbdCyqv6qoritNBnsVwifSMj",
  "key21": "5wPBowXTxdAi35HCcqg1jHkJAJC2ZPG5qoJesgfnTMrkKgDLywdWZim2gruufub3A67znp3gafp9TRC5UkbzAALw",
  "key22": "586zt9AGPcAR3km9WajgjL7YApMPyB9LVL8xr1sr9HXmSS64rF6mLFPpWW7dXjjexLznqR76JeEY5dTEhVU2ZxG1",
  "key23": "25eurDVaMy8E365JZ3VHbLkUzoUEP9LzMqc4hQyBMRns3dTkDnKV28giVivb7V9LoXh38ERiZ8QKp3XA5G2nERp4",
  "key24": "3kTnrMo1xejF76qzeCgKyCyt7eDTx6hqkiNc13BXZo3JrXtLnKyKxBDEZ7J1DA1EDodVcVLNEcutpvgnkihdrQHY",
  "key25": "3pEwwRsjGW3bBwRsFS91Vr7hBzZwsyxVK8RRuFQz91ovW4LkZANC1v1VAtMbJaeRQQaCvkkwiRNawwBEHide753m",
  "key26": "53ScRnxBxNwTCCpnd5hVyTfiAXFBRvoGGcJjY7FvoRKoJjfAworyzs1vYCQXo7BEuyvqvhJbPM3THwfCZFJR7ca6",
  "key27": "67hbAKPtBn3HGqtaLc3waTHmuowwkvPUbcBao3YokT1LkypgyfatADQktxn8WwQcRoA6JDjhZBNTdd8nAyEoUek6",
  "key28": "4HpcRSzdXpLJYvvqf9CAA8J8ai9JApP9KfBa9CzFjSRFiArqZe4YgAdJuKuoenAR6e5T58Cm6DsamZyLte6gZY9M",
  "key29": "5xUCLn9m4pDNHKs7w4X3Tc5zpCaX9ix4fVcT1MK8zD9SbNTwkhxSAReTxmdKQKkwzKeBGE8E6za3q6d3K3rRbZpV",
  "key30": "61M1rLR63G4L55FcrmZjN2nH7nMKaQjqU63eaXeJ8fpf1PEHuyM9ZTcaaSJQojCQDBM6Pv1FTM5aLArQogecJ3cY",
  "key31": "XgDchWtA9mcwE94MsdZSh2p83RePcwNGpz316F6HkJEmNx9W6PAFioWGEPfp94MaCF2BQzzPN8ZB4r4NgTUW7fs",
  "key32": "4qP1AumJhBdUYsm3Wn9Kk2ymQziepVmG23gkZ5nEAsdU5DF3Aef5XhbtEp7dQbd2XhkJv2aSCT1nf6tkwoDCgGKf",
  "key33": "3gseJs54xec6sz6Rv2K5TusS7XxSZUh5s3vz7aSfzHJXHSdzExkAJLfJy2GhUCUWsKVwqe54E7XddkUD7Ln1CZwh",
  "key34": "gdPRhzv4PWHUw5D3Y8qxtGVta5dxqgJyEZoR3fccDnc7xBLgJ8qYb2R4padr6EeRmcLYAu98KUAtyV26b81Fe3t",
  "key35": "3zXuaETiyAKiWz5VgyEfF21goEiZBTyiD7MjnuEvP5fKfWah3NEy92MbcY5PDG8xtj6WvoA1yh1xmFHQNVZeTQkp",
  "key36": "5ZDkG3YLE8XKZXsju2dp2ZTuvwjdHJJdz4rzbUSy9p5PxkixukkZ68MgCMqa66A5iJpNvutai5ZMB1Z4J7P8QmYf",
  "key37": "66iemhcZQLMdxXEw1AJAsUZC8gBgxa8A1upZY4A8YjmyXM8hevWUU6YfFUsfJsHfsaWdUtPY6BLKdUPATM12HTgX",
  "key38": "4WvDG2DJnxzeE5zipvgDHaK1rWVqrMphPtuf6KDQAwU54UVcQ4HhSWFk2X3LgyF6z3pdqKopJyZ6mSGJCv3xxvLA",
  "key39": "5CEZc64LVgyWYGPJtg2z4tLeBd2q6Uz68qEbXsjH25FZteYGFhLGWHpCSSEMKKUpVWKKEcnLLtrEWe2UGEUYuZ8v",
  "key40": "5rFXPGeJ1L4TiSJ6VApwC95DPqrs6Hz4KmwpEkNfM1KWvthoKtetxPjq33uZbjGHXg11eTtB7573hQ9Jqi2PUes6",
  "key41": "3yx8p91t4Lmo3g6YTSwz7XA6u9LJBTEtuxYQf93nTZ8WvBM7rw9iQFg88mKqZ4uoSZEHUmw5HxaCZxW2pRu49VW6",
  "key42": "4wv1WaCQMMycDaCdqZyqK9D9ZVF6V9wWnQCmfzxNPvvJ4tVodiUYTY5NwLTdHzCjT5k3UjBgEYPfoG5NnQFE5RHN",
  "key43": "4BHjxx7RMLo2fXv78mhjAZNp65Bx3GuKAYjR2QFiEgdnFFLcHjPRiYfuaBmWUtqePBDLfuoUGidQ7XQzqWJDU4ro",
  "key44": "4X84y9gbnt3fgzmPh1b84FtghSLXMtQj9NuyLga54RGJ6x42GSjsbh7FL7oULXgvd4GR1h78dxTNu1tFv6FYRT9b",
  "key45": "65Umw4XMPwpy3cedjkRqSugaTrT2c9DcCwAQpNQVuE1RjvHDDWxfh6uvPeWaGU4jAq4vYLXmbb89du6NHPFBSJaV",
  "key46": "3RVNPfrKQULc7FVbBXtUY6uSu5u2iencpYDjr3wEFJ2DGnf49k1xkSXVhuzpyqT32RttBAWHdJpgFiSmC2bWKZKF",
  "key47": "2Uf3kQfiQH23tMyyQbeZbk5FYQN4MLqSJusqHRUawiJr6WctRGofeL9xSGa33wDew25us5dKz89Lh9DbC4K5zGWd",
  "key48": "4yiL9DbZAxjNU2orY2QoxU3EFviyCieY3v8rjcZnomZ1EYjtFz41wRc95vsqQAUfzpyW9hCwaA2N8oCXZiEy2Vqg"
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
