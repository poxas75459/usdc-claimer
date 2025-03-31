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
    "27DzdKbZoZymVDpkHQ2qEjQkHJCq8djvd6co3aMYTmXntWh3ZFy9Yw5euiVhKLagyZoCTkFsTGSM5yin5ggRYeMN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "475XjYqryCHuDsqWxZKckR7LdX4vjDkJmZN9iavhvy5Yfn3PNptYMepReNDDLGKs8AkKpXufdKKJx7rvGvUkNMYB",
  "key1": "3R68dtjc7jsoJeZSVYzT8eSofo9MrZNQ6RG8VFSUnGzuDr8mEcjHMn9pJgnpMSxfRHF2Tc29ts1GBzzEPxzCkWNe",
  "key2": "2CY6LdEvRrgYBA7UWBQiBFpKfk7Ry9zLNnBoS98hABCdHGpVVZnr1o9uxTJ7b8LoPzYuZgPNWpYVbkMbXvfb3cWf",
  "key3": "ZYSz9SUEtbNomwmtNpe2FfDWCvvyqS23LB4kgpfXBzV9EEtEKGWUiamGpURaRYufyhGjMB6oRiwbrywxhCRdvws",
  "key4": "tJJAaBudQyBxB33TGorHB7sxpidTfvZBKjFgssCfrMHJWurgvtgyvmG8EToeCyxfpiH5UVhiTeptWYvU6hTEPm4",
  "key5": "qsVWABToHgqmR8saR2kdMfvWYvvjmFfzwFToTRRaKPBPhSGoB25uyz4Rorda4xipfq1ywy6DW7yFNAVBpvcXbSG",
  "key6": "2Feg4j6t6GddFuZyk6MKaTdCVLjdV35z9Fyh966E6yvx3Tiu5dvfFtxDv4LLpvnxbDn7wTmZerd835HiwLicELJH",
  "key7": "67jGabihNfuYL5JtsYjbFKKpbFL9Y6gcwyrrrpHqH4LiG69aqUPECA6g4wbWrCVYu5MVQryMRetmWpeskcfyzzwg",
  "key8": "7dBmMxszP1mAV3o49ce5mWz5B4Wwd5ibfB4bSPhBxd9QQsAmLPCaVpJq4F4ztVgYkJdHutinXPs8NxBxWvHyGh2",
  "key9": "3xsVWyy8i2TUNnjSiKGybZJL62xnVC3oknxSKGZ6Bf8B3uHFnk4Ur2DtwYatdJno5cMU3HCxVD4to26ihJyGDh3J",
  "key10": "yHRavtLCMgBjLRuYLY9SrGdY1mSkxV8AEWYeMoSWyLMjZvJvEK9WCK6XBGZSCiHAA26F7aJZVWw2TbECPV4MwLZ",
  "key11": "4aaFWZ6racGVejqmTSR1v5hpdmBUrTkayNvkt2SVy8Cj3msUFaXxUCoBVuMUUMTSj2U9omWkv6aXJTdxMuvHjQyZ",
  "key12": "GRycchsEr7hAYTve8NgMTQLDMaE8Ei9eDr3LSsqqCGDrSv5CwTjhPFLJ6ePExst8sTwq3pXoQRCY936iMW7uQZD",
  "key13": "2SkNkdumP3vqCAnJKkvkmnU8TLJiSjUNqGGhSTRPetuXzWqR5r6ESPe3XgZayggUQq7NR2rNSrPa6ZRLSx99G99f",
  "key14": "5WvCd65rVy46Y9WuxERtvomNv5aGQFWxyARsmhebqN9e8oC121eDSJP2va9vaZ93PtmmJfAZkK926QMWqWjNDyXt",
  "key15": "35vwYUhJuoCn6xCnyqm5AYmrca5HFsey3knGdS355Uj3RbuMAcab3gph8gBJTLu64WecmXEFqXpaMFLBLSnnaTEM",
  "key16": "5f2DqH4UdCh7rmqMoyemCeCxo18PqEenUnbQtsqftC3iYddSPZRcCv9oqXzfaWNRJyNSmaNKbtk6j8RjszDwuiei",
  "key17": "5S4qkMFemw9ieNDeCsabpwToyKbEGYSXRbRUKuGcsQKMsd3YGoMmstMGiEWfvRYMLDuDNiWMeWP6jdhAQnJmURYd",
  "key18": "xtCZ1gBCpNBRhAkzok33EDHaye2CHNURhQg4CdEsaK7JWocof9NLLaDaxwjs6XnVtXhp2gQuTT9Ej7etMkVRhZz",
  "key19": "3f3E56C56rLGpfk8VVG2EXswvjGJK38U496DeHpoMK5Pwf9Nvx8gsF8dtARbgvHJRWnvJVofGse42yfiGVQJFWjh",
  "key20": "5pRdo9ACopZNFezaH2FMtPL3UtoP8wvm2z3bGKPDYyrndpBCiEqSVdbPM3BeFJWj24oFLFBQtZXtNu4rUMHfNJmA",
  "key21": "4Y6jLH51W7MjjhgRAQPRiLH3b7iU2HS7XYQPRPMcWZVKpBoAyhLGkY42a8BH8nJeQXUjoBRMz41S6pxt4a69SsCJ",
  "key22": "2MHTxGko4pCfNF4aBQ3X1fbZGhbLbCvTEdSErKLNYBYcyq1MqHoxi6L5nAz2hGSZmwphLQN3nC6mw6vLdJMQJ4GD",
  "key23": "3BpJyDySs4RnccdFsf7uN9UdBWmpPL8Wz7CERH79M3GsQZHtttHkGfv2LLGWJiASFiUPYqdMstu9BT65ZNRuyLV5",
  "key24": "oQziNkD9kK6xsdX21A9KTw3sb975yvucAfKKaDYgPEruj6ZPJyqRVKkN69rRMXJscT6kyFUmqFKsKVLvCT6AqHN",
  "key25": "BgNigt4HMGV7ovVk43Sdssuy92pMAUSyKQcQKU4DReneXrBPTA5wQ4xTFAUR67qPn6pyyq9X8DQ1XeJ26Czjv8Q",
  "key26": "4UEetJDfhAy8tdyX9g5kbEdVRDj6z54pD3d747rVvWpBnAA2ftv7EhM5CcmqTLnNbeUYaFnZoEmjYiaDLuEs5eBz",
  "key27": "RWqAWk8BGuJQuH5XdoLCwffmUMNTYWAs2ZQS11pK6rZxukkFpKHp3A6DkC4pPEZTVfyA2n7oJg6X1Yo27MRA5SD",
  "key28": "5oCmcQD6iPAnZgF9ox64eKyFZNMj4jwomW3v23tkL32dD9pJXgJC6x5TpfS4co1tBQk6sFjzCG46xxFBhrAwy8TN",
  "key29": "2kpAe346m4BKyXdyCjkSc8uAR9Gccd2RZjcuPAzcEpveNcKgmrwsbWnBSDeKaJpfD84kDkfApUu8hfnRvEFzqNup",
  "key30": "21gxxKWPQAXCapTRKj3ztaKt8gvFKo7HDgPtrGZSdKX9zHN5h9tibz284Bg8EpdhDHWi38eDxkLYDqfTWUucY7tH",
  "key31": "2xmcQGaUM1tD2UwHa8gSmRzrN2BNayE71SaacyH3Kv7QKXmKZg1GEYzGnup55CsREZHdcAtkvVXaWYDr1dTsikQf",
  "key32": "5ZsoEmQG7RRvqeA9xCvGxQELsD6jaCwQahoEfJEUEGAj2GD4LbBwmJf6iUkLKvQQzxsUfoHmHTt3UGES9wXNvERH",
  "key33": "3UFTx7xPz1Ga7xyYNjY186NeHTSMwk5KxAJTaMQ1hN7RZx3F7RsCZEXe8UtmrHSHKCFBq67FEfs5scmNX9XfzvpD",
  "key34": "53Xqw3wdD4UQgh7SEmQwcn25hSfYs1R8wWLpjJzKZenwGNRquer2NYFhwDoUGRqRoZmqi9RysYkYJ9JcjtMpxpPL",
  "key35": "czjLLJiy7HYJ8nXVinY4iYPQpQ2c8LQEoMVpbwF1VLJ4pH29VKXnX8yzH3B7C7s2T99guJZYwrrSZMLQUF7AGzn"
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
