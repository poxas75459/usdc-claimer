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
    "4XBizSJ4K1qCjD44hVrc661cq7fycaVmEomcNbu8Sqf8zu41aPt1anfzjjififUgC61XCwKzK7Mp92Z5cWNyqYxH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jDgmNcTVk6zvB2arGbuk2zGstdnapnxtGAgjayw3NESVEuPqMH46VtiL74T4NWEygmq5CoR9LtEM3TAr9DgNfAw",
  "key1": "4bbQqbi9AEyNfp9uuFkM6R4UfhPjBBvufrfKVrV7QHfwk7CtjJcNh2rB5t2de5pv9FjCkn4CoFim2oJrr3V9jYdp",
  "key2": "4JFEDzYjYT5FCr4jqQLf7o85fGyjWyiACV1bwWEvySkQuyBWConhk7BkhtExdwhwba8Qz1WXik5JhEi8Eo4JzoqQ",
  "key3": "2F4FbVqCfjGqFNjGA47L7X3UvRwreHQwxZrUK2WBaCE2Tj2A86PVPaGLw2X2CpX5cURjv8GGBYJKZ1d15h2vSjAY",
  "key4": "29VS9E6p8GqBiHnZo9RQcxZr1ooWaYk6h6W5BDVSjbk3o1ziLedUPbU5DXCnmkwfkW2hecSH4tYpfMLKjds6TYfv",
  "key5": "2UGtPnZewtwfLyPoME7so8yZZ1G95vPtE95kJdT3yV24ssYaJbYWTu2F2ye6svagnJu6Wc1zuCa1QoT8CP2Fn2C4",
  "key6": "5CcBa6kay5ySJTfYRBTDyLdDRS7JLEYDWGKzgPyr1J1NAvDfBBqJijhNaQu1JW5eJD6MyjrsfSFGTmQqFzWPGAc",
  "key7": "2xmiFj3NrJNh44ZZPksjR3Vj1KYZwfDjWbGkCFTevXFeSJzSY2ga4Duuc8wJq8dPPsBLSv5DzHHE5PCdr49QRrCP",
  "key8": "5fdCMYLGNbix1jynAX8qJa3M4oPfro9dXu7WoMNRb2KKHptr241WTxQRf2UKgoc6qmbxUjZWGJh448oGGFw72nsi",
  "key9": "57zQdTnWMnebgPGaAcExpjgF6oc1Yqzun9pgYQDkE8CZmLgQ8aL9wo7PipKMwkiaYxPsb9m8HYwxf6RYpWhLEUzq",
  "key10": "4NgNnpSiigdtENPbrtrGDUnBkbF3zQEHrTE8QvLQz4uVrNgJ2im6Z4H3B2snukSx7as73dPjkBdj5p5UbK4yg2vC",
  "key11": "5aWVRprD2fqutFv7Zwm5bc8J1wQkotrBPCCXkm1Z4PJKme4PX8JyLB3JG73y2LGpsfjsPuFdshSriW4aeWgatmM3",
  "key12": "4kSMGCzDUzP7hCYLPA6A7dZbqYxW5t1wBGWiGiLbVoogJGKVnXqJbjMPzTtFreiL5ziG9a4nE4xeD2KfMaMKbKep",
  "key13": "yYNE39bjtv5TzDsKEoGLFV3W9xHMMK27r69F2xRvs9z6Nycg5aq7GdwL9L5pmZAMjd71D5Sk6CyHianbdu1EcYT",
  "key14": "4UqD9HmczaABc6AB7AxaE9FG1CW5F547rY2aPoVRwPUqLYC74trL4nJRTF6tkvBts9zpg5GKJ2WDXJSj63TWEnaS",
  "key15": "ve2SfyipwfzMF7mfuMJKJqVecCiCZioQYL6n1xGZj7gnSQLjLiw8xGYqd3Z2xUB1XNMc7QCvybVafPXQS12uioh",
  "key16": "2Pfg24bYaeNrCMCfoM2yp9Cse3jyVjWP3svRrPv6cGhnoYHgaoQNrUBeA6UaHsD1CDbcGXypLcKcKxg77rA2FL3y",
  "key17": "5fY15X6gEQi3Ha4ncTo1joXhup9eYCdR5ATBXDbo4LfoiktdYu1CtJvt7TXEj5oC1kdya4ocHaKXcW89H5ydddDN",
  "key18": "4p1xMTeGAuW2eps4TiAymAQ1UPHzpzuandXcuxhQHZJMYL4TFk2mEwzE8XXritSvxcFDPiNasndtAfM3PchsSmtN",
  "key19": "3pethwBTdYHLtcKm1R7Bw3GSyxpEzKbqS2ygbqyCVFN4HwuQfwQQf5VSWwRJd4euk2N8TdQtrQrxinKLQYGooAV6",
  "key20": "2XSaH2H6oHwt86cGjBSGyrKX7Pb8tiR6WR8XMqh4BvGouB1u4ppBSE7uodzeta9UuGHqpcDbiNUUBCKTbjCVJRPM",
  "key21": "4fJnRRojWoFwkrHA9qtGWRqX8uHhVDScNNyLxaBQAHc6U1XmEuiMsSaFKtk2VZ8teC4useRFcce8XqGGQYW7hqcZ",
  "key22": "4Fm9wT8cf6EZqHqKvLGuNuqd1sgQgKSTicKER2RZ1CA4E6XWJEoq7S5QQ7Ni2swFsXLJUmVB8gMYW9YddnJaDVRw",
  "key23": "1KmD5wspdm8pkpCDDxFFkmb4BAPFJthpzMgHpevJyuKVP4yUF8vGUN4hXiCk1cPbP4KSmLRJYkHcqehv54edH3r",
  "key24": "4g2rww5UnmkkF97ZCocHawt4Se13EviPGKLQ7UVeUayGeF1nehwEqvbvNKFybpkydW8kbgkEKTfbCH4rumVYxX9Q",
  "key25": "4SqdknMccAZgc7aPEaCr3g2enQ3vVY4GcnQ1jpVxNuQ8gfnm1P1zE91YjNz1RPsLvV7JfU31hEz2o2UAhJ99unHe",
  "key26": "4PvX7BSpQjHPjkE196T7NB7wkiSfVJyhJKzxV6iGUj3CfdvSMoSqPaQku6ZK83wq8mfZsoEzTukMPmsxWQWrzWGC",
  "key27": "2x36t5C1yV95JCUFmNFMqB2Z87e5DzzMjrBUzCXH1sUnXH9Kdc2R2kEzyARqtCViGuQM1Nba4QqgGH4f43UFyprD",
  "key28": "2pRi5ZWXKnqNwAK3bQRWEkqUurMGTnhuNYZAqUnqbCE5svNusjaYhhEuHsweWfh7ECiHna3BE5ALjN8zmzAU6Aet",
  "key29": "3PNPXePuNsHwr86UaALLDmuFP8KhyoSMYKwVPpV2c9eSsvA4nXEUVS6iDndaDmBZ4dikpY5PD47hdbDVvQ5NQqDg",
  "key30": "2eQVtkCk8zzDTC9m9VgewCJs5twNwudX1At82uMkPTBkKJ7jXsxGPg2ZsmUmK1ix145tGWnS9ayUwszwg38Ecdaz",
  "key31": "4yrkD9oQcgrvFtMBs6fH7MWyXVodXLjYEQn4LNvobb88gGnhXSTFQtcxAq78v8jz9bgx9xLNgs8gFGRT5PPvKTSD",
  "key32": "5znFCHF3kNeZqkRV4C76Y6RmyTEsCWwGvynKVk6s67aRDYArkXbeRU89dr1dJuWwJGfscjGzxsejwyF8JLZ1X2DE",
  "key33": "53CwkfLtsc7qBX5qVsbhQ5CcUaK6sLTRFrpcaaQpM38zTe3GNvY7GiJZpNJoNfohxKGiUKeNCyLqCtxxKiQe12EL",
  "key34": "2X63oBCri1RbGgHX4zzPHkDJsKebmJ8tQe2XcRPoK375RmFSuwGVtDP7Q7DhNBRAxmuSAJdXsYaYoHMhaZgn8FjB",
  "key35": "4y11pSZuRDZqtMtwHFCpd2yRYXdTfUvLfr4fZ2Mf7Cuorx7GtKWnVLj3sp8fF5dXgpZ3bDqrUQzfMi1XXNbi2jAw",
  "key36": "2qtirEjYrZKNYYYsADJ3fx28RhjWs6GF1sepf8VS9ZJZgNfHatcUHVZf2ZwSG9YEGFsm7WRi6RAkbUL29XrkoxA9",
  "key37": "3oxgDhYC3FePegU7GfKSpMt9Y3mQoZNf1ro2jFXKU77ubXgKAYRqw5mSU8LGLWgGMfGhJz9zSr4gLmFW9P83LSeY",
  "key38": "8eRvrWCYdKbjJiUD7c7GRkxhDHEZ29mTZZNmpSA9AeWao6dnZMu3giGN1fRrX4V3MVd3AJJ3HsM24JioLtMAT8d",
  "key39": "2WzJv7TcRg2KsandKDhwWjugwHj1vFQye9oF41DePgGdEyPsQ8hWiB5HVBWmzAiv7LGKHn1WZBNuEMYQ8n7yrpqc",
  "key40": "2ptiME4UpWBvfHepzMof83pseo9ByB9jcYgiz4zwPzZSsijyDfwKxupdG6XEN3u2Xf9NYhLYRiU2qoMBmqVPoRcY",
  "key41": "5QamEGjWHAsYJF2M8CD3gAYquRghMESJA3rv2fGCjeKacjXdQomaMfsvCMvC6ykayWEz4CfJX22mVscuVi9mcSD9",
  "key42": "5u2jN9MwvGN224iJJkWjwoFdfhj4Ai8U2tYCbeRUt9VbYGfHERvHGyhVakEpu9YDbGk6Dt7uUuDFxUz54DnggHvS",
  "key43": "4wGpDdiEBQxwQcZz9wLDYPceReP6VRNSAnXg7Jr4nvvBSTQFhRX7wa7dDQLZ8tXPyannv3HNvwTCMWqEP33wp8vZ",
  "key44": "2s5r8HwWLG78ZsXP1mMGpzhbPBojfcjdKAaHv5UawHfgUSknwtTPsUpsejsJFtjW7apaMhM1kpdyxwNb1CZLCQAg",
  "key45": "YR1MAXv9rDdMpNiTiZXoUD69Lv9wrSio6KH2ugDqKYNx7S5bKB519pSz4BGaJ6YAx51Hk1MQk8WpQrMHBKoikjX",
  "key46": "4vJnawJ3ETa76eJSgmRtsDf7oPMUMga1QDyQx7CLNQbYEiWS4gANcUAkfL1Pe3uErViLyfWWrF1wZpcg7FBuMags",
  "key47": "54kC66SWroGAs1NNoQaQfGzY4Sxb1fvA7zojmqWvdBmGNYu6bhLb1BLnY2XQdBL6JeD3ffavw7wNddXF1f9RnSYF",
  "key48": "3DUoj2zdnGTcFppJBaHNfufjXiR9B5WQ3Zui6G8q56LP9tkh4Mf5nSzVNx1fKaFnisxNoSmrptC5Waey86yEFDuD",
  "key49": "KHK67pJ5dhW1FgWd9wfkCFpz7QzfAu5qkH8PssyfwaCFuDdWyUKGonCXotyWSsQ2XiS7DtsZkx4117pP6Ftxy2V"
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
