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
    "3dUmqtN4XX5TCXE52ytJZkoVHJ1Z3Xhfmg6yuuuLxtaktjCRFbCmdeM4pkkCjkaiu2WpYXxq5FU58mWwZ4iqCPzp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JhsrF6LWuTxq7tGbNxuew835ijgn7bx5e5zvozNBi9XE8qkyFx25WfHhEtPyy1xBfsHPJ89HgPS5J8X5SbUPYvx",
  "key1": "5HCX2jhrEMN2EbnFLSpZXERGVC36ghurytiQELP7XiBFPCNwrCZP2w8sqQLyKx9L5JZdD1PrGsJDSTscZ2DS8zKv",
  "key2": "mepdFGFhGoSbvA1PgBfyX9pas6o8rJ83aU6fkm8iYp8wx7EExJ5nsqfY8P8TWuxWeegaVZuVruKAs7g9s9rktae",
  "key3": "5654yFQcx7Xtdd8JSCQSsMGe7DScsRhpqCJm6EHeMXrq8hecAbbLCsSUEUseBEAfKkRkhn5DepdvYHNinpGKvqrS",
  "key4": "4mEEkDj1yHvkZgcLdsX749fuh5WHjmeg1vbHeZTUHxyQrj5eP7gw3b8aSDworcoDdFqUTKaWR3MiztmWTu2w897P",
  "key5": "5gnFz1DNBjwo1Pu9jbzhnU3iCsEC9aCAkrdq2KhixHWSX1c6fMiNDoz2xCCA19U8gub4Q4qTGibAjj3f85XmXpEN",
  "key6": "5asujRA1W3aija68ZWdQCSManYnqL6ocRBwoh3cAfgLRB3At6vCeQQmrcvekN17qvqC1WFqzfwEahh14c1Trn3TZ",
  "key7": "sybvw94keNs71owNaybMkpzCNjUt68TvCra8snPhKnX67X7dE8zsqepj12b9oCmogMXkcvkosaP8bNRKEPCHTZu",
  "key8": "5TMLyQ7EmLgNqSE1TMueJHwjrfmtpPHXGtw1srQVhKKnfNkSVfsy7k9kjMGdE7bNB2oXjcxds6SDeL5ePXRMziS6",
  "key9": "4jp1p3TECDZyusew9G9dfa4UiKPEnS4dPQkqYeXX4xwWkE4p5WV75Q5f8GytgkXBUeuijmTPxCXqttnYgHJegHFJ",
  "key10": "4qgP1UsWRzjdfQMZKJes2A2vmU3AWAssmBv9t7aBKfjhnuGMvVavxpwk7xM4xJc6QgjXMjG6s1bNvShUGz37sWTG",
  "key11": "2ik9KFKsHeTxUFk8oahsKQ24F1YLgALkxGZRqyGsHm4v1yKWyuKW7BJ3UL4h2XXphxgapKvC267CcvDNjhHsCNRB",
  "key12": "bxwidXWu42eqYMZ3GPGD9hymkVD8JXWQvcex3kd2xbGz4SAPuzCAVqpmfcMCCqGtNCTyffYLSgUMUZ6ZLKaZFug",
  "key13": "4ZXUp5MctwkpqgZD9Lw9xXJNWr1FjH71MhtGv5v8y7bT2h6diVXqYdXmBpm9E4VDDugR3ExTjymCyKVofEQKQyVE",
  "key14": "NjVXUmhvZTH3FVncU5Sou1GtkYxaAtdYPG5Sm1NKq63whgSeQnWENsgNs2thQieSYe6uk7XYH2KXtWEvrvoMTw9",
  "key15": "4hq8zMTYP19dhMNcbRfNeNzF29fdaUB6jc8A7289JAdc3UXseqozJ9Wp3gUAobGU8EWHwEe5mm9ohNAmucBWbDgU",
  "key16": "23XRVxdFHxPR44DnW4aACQK2PocoxDZZJAJiK79uq2J3tsJd3UuVLRBDyZLYMSnHhtgpVZi2AW2yqUdihvAVTa41",
  "key17": "rXDjDJ4WxzbDDCfp3nf94B8F1WA8V2gJvd2i6bjxVL3SHKa9kSHU6YXwyP8hgGXbC8HtY3CSRskWJB7FzqXJBpP",
  "key18": "2ztJXBSRpwvccG2ZF4EC2savxc9ojgSZvqjCpuBYN3v96kZwnFmW1kuJHH6rSiWDRfHC5VjqPjuTTBB6n1LNyRSS",
  "key19": "5pvHFWHW8aP9xr9HkQXneH1TCeis6V5kjkbpNSEsqyy5yXk5MjeddvqNJfJJmcxxF8ii1Zyv8KwxhVBFAZHDUqA7",
  "key20": "3VEpcFhvHvC5oj4r2bqT6nfkUUChZiZtZpyU2UVx2WnFV9QWLg8ejkjqACLYnWpDHEYAhbvep8xuicM6fESuBVYV",
  "key21": "C6LSViwhfKeDvVo4FiAafcEUx1eXAjpYNjDofeenUHdaLKFVXSciZocUZL1oUEzqfJuCRAbQ54HvveCCZeMS7zv",
  "key22": "4rGN4GcLeKo6TEdtrgynEXjisn4ru2L8nQ6B1vJUig8LzGrTw2mff3guzKWHhDNgqEgLYkexu915iaJKXLFDist1",
  "key23": "B6exzGusfsHksKBQhTb87sLKdH2jYhWDUZsut86wHU3HWWUHEkx56SLGMqURFbj3MwkPvaFT3XmyxJCiVZoec4e",
  "key24": "xwhtxMThQ9kzTnjbx7PqYQPoVu1bS72fdaeHmEC3SVGeEbUWGU4jZFkFg8CuN9mYm8AKDGeAasu7p9z5UkTNkBT",
  "key25": "5XhGwdVh1wxvBbLW4qJQPQSb1BguVHRWSrvgBcLyUYsZoNJ93BPyCj937ktBgRSV3ouytS8vD4zkNC19ZDXSogg8",
  "key26": "2ocmDuTaJa57cvvX6V8efJR9M3sh67fxS8Zv6eRWBMq7GPZRd3zT1SenQ9YcXXqBFmo5EviZVBcGiYH6gkhbr8aG",
  "key27": "3eptZZz3a9cUerapM3dC8QioTdM5b7z2HxdVy29hmbPWhFhnni49QiPTsraP6fKjyenKYPRoiYiY325njhi8zGnn",
  "key28": "3bBxSDoBEH3Y5ZvtaCqKTWBmmMgsA4MyEyJZoJE7ZNs184mQ5CoG6DQiwC5a2cNEAhMvK5Tk9PQDUCwyYJXe75T",
  "key29": "3nKxzLXdT9SgUL2XahqCZmugRqRenjJyUUmg4Nh5CZhXzXnYG6sLVuwejDgYQaCNcM2pPnUVD2UoDJCzJ91WsCE8",
  "key30": "2Eq6pnsPu62V1Fm81FPJoMvFKWkdJCmyiGLMCwRSqVeTeTUbFXvV1GeA99B2gELkPQZAD3BUmJ34GPY8XJsGLpkd",
  "key31": "2TbbHJgQ1ZKAULZ2SDLS1tAXTsZSPPSUmhcrD3tyv3JPMGMzBq4xrBLD137rUNQBZp1xJiCfM34AdguEopsw3ekw",
  "key32": "3yBskHV6By8uEdbHmJ6NtTb1q71VgquVg7JhEWPuiyN6qirM5bHKD64E854vQCXaG8C8PASriTMSM8gy5UhBv24Z",
  "key33": "5zNJHkNREHT5nraTWtAXfXmBUXbP11YB2Ksx6pvaVu6DWrHVPcWgpRi57uMtKbNJ5K9T5xL9bkHHkrv2Cum6AAw3",
  "key34": "43nAewYjHW5YLCZyyu1ye85vnhgw6mbW4WyBRiTdyK1nXdwRiLK11Fj47pLuCNooVHtA4G8r1MPcDpmqsxiGuL2j",
  "key35": "5PX8FzYuJstnugN3cQ9ejpVtpp7zDCYzh4uBjHQ1R1zWGn57WCDZmrT75Nv5suz32ok5Ud3PsPGEG3ptyxztFp4r",
  "key36": "4P6PzeVp7UcBGtE7XZVS7hfLmFPB4HUbAGCUc3Qbba4HKYAK4Qagxr7CHcab7SXZBGprq2X1jdVUDGSYuX24ipgL",
  "key37": "5pwHzLgqPC5x53vuRaM6B71MTw8jXjobhH1c3FviNTwGLydkkhUXcuX9vq9aCogw4jPcx4sUVXvrd5MQoNg27Zb2",
  "key38": "3tp1y7spEcXfjk6wXrm6PSAcLRZGTGWxZFsmqGekdi8boWvWJ1Nh7jivu2SFhnwT2Po1nc6m1QmUGw7k1gVZk61N",
  "key39": "5moZqXZGodsBhynxJ516K2tMy19hAvv4uLKneyKk51U7Mi72YyLvg1eaQ4iDWHc3WbPcLNKLtT5Mhg4QLbHz2jHp",
  "key40": "DM8LfjJpu9yUugtgvuzyTMm35UsDwU2JtQRHjTwvgiEDtc6L2M4f4v7cikeu9qPc3vVhWRoMum7UKAnfQ6M7Dcs",
  "key41": "zSQd66rwQh7SxHCwne1bCYn4nWMfoDBpKNPd2eMaW97aYYjyoc516y3TzzUgBA9EZ5oAWEDZM6Hy3ChLruRq4eo",
  "key42": "Qdu8zwTL2mZNhuwyFZGYj8dxqdJ8Pp52Yvfm44F83EnKUFBuu76eQN9KsJdJ45rcDsjMrUSw5RgFnUmCCLQhgft",
  "key43": "fB6QdxoBN7vuLTShD5KXBPtd6ro64U2Exstg5snFBq4moLZcTVD4342yS9nrVotw9Ss3w7B8fyymVCRF8dD8rqf",
  "key44": "43mNY1UAt2d9uyb7J8e3ymkjBV8uTLH8DdezC7hFbi4jTnqDpi6yQ5N8gCwYgzc1pk5k6G37qF7vG2UQG9g4uF37",
  "key45": "3zjjZsUVb2YimBGJYbfeer5oDQEb6kM9S8Dae4CFLZboKPNTLpPs1cwWqg7VTtDHXG1W7L7yd7Fk1we7FU8kFAsd"
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
