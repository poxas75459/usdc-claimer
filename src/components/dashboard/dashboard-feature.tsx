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
    "3aTzGgoot63kYS9hagzHaAc1G9D2y7PJUgc6QewhJ8tK6X822eNj7RqBh17cVb888Ktw8Pc5beSk2oEVbGdAmWJr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44hBVQDEry3z3JpqTe7DPffneiizwb2R26uVrn1PCmF6kDG7dJig6nadzXqbx4fJR25HK33BnEriZK9HVjZ8gP1c",
  "key1": "9YdcAWMfa8WYG8yQxsJVEw9KB1JFbp9wMyZSjskNyLJEeVBLGVu7oxGR4vTY6yh1MxGrfiXotnQGrhjvwt2LsjM",
  "key2": "2nBD6LwLAJjsZjkL423B6jWADuqxWDUWvZtuiTHpJpFXR1HRnG1L736XpQRp4uNDLTA8TtxxkEPJMtNTzH2Ywp8v",
  "key3": "5tH1yvuX8DcfM3HxtTiXWb8Nk89w5iCR5MXR5AXeNUNQVJRgUf8RqgLbghMa2aebtK5XsyaRL4Jf8R5rKJPLzmTV",
  "key4": "3LpjU2zG7TELDC72jASRboYqPhp58p3KJaeB6HhEYd1v9QbwyFa4hDM857N9eYDMJCZoqu2EEVq55BRQxn4VqPFU",
  "key5": "5JQkNmRK1FZqbnRnrheb34DDMRoGr1uwpeB4eN7j8e6mbpaZBGJaUM6y9MT9qB54SfBit6djEkvLLnEC2NRWZeMK",
  "key6": "ycLKmtf69d3GpJiiVxxp41MMn37otWdFaGYXHa8AP7mXYn44fktcXrUHvgdsa1EnVvzeiW4XKu5ukfZTsd1i1kL",
  "key7": "2JJWAgkXvNNTEN1YqJxsaLm87RUCyEYwrAaKjgNnJz2Jd5QQEwfwWiGtAmnwu77pvpWZHir7GEYaSCCwdtd7TreW",
  "key8": "4FzGAfD5y5jvgWwjVeXSGKj1g2f5WxaBWSfZ6YsMXcU2Xdbtw9pt6Lkdvd5U9E3j2i1qrWuWpNoahwjKdgqcCgpv",
  "key9": "3TajjutUguFRVZH9TwSHisBYbCw8PcwYCfDtNhg8JyBy3Vb3BJx3n8B3ZPrAGowuwNvxJyz461YMVgXeWGnjRjWL",
  "key10": "53hpXXCM9ZMD9Y8BfEyq9a3bBC2BLbeBBcwRDL7Bon6K2NVghTpuPpMi2ZBptMhLQbLYVyE4Ac45FKsDcSFCm8BG",
  "key11": "4nmixtV9xgDbisvXN4kguCaEZcoTJhvH9AesYNiFV7KLZxXiZFREs55Sh4hKkVWe1SXknk8EDAHPY9jWb32fVGF7",
  "key12": "3Ln6Jr8UEC7Zw6vN4dyCJzJfMDjrJUx1tGRXNEXjTzcqtKjw9Hs1gZyixqNiEPJyEyPQxRPkqhjiXQ2TQSeUX3PQ",
  "key13": "2yoFdR4U6ajVZdZTxs71H9Vf5vZCM4waK2S6ACmcYFipxWByg4A6B8boxKN2YgHNJtUvVBEoJFBq1auubwYSbGDZ",
  "key14": "dzk32PPuufknvEmPozYb5DxFMNYn6HU7gaXzEorUkm7J8CtBGJ427TpMSKZjaLWiHAZVkRXg2RuVkMjeLW4PBuF",
  "key15": "7X4xRKGgv9YkRbwJcSc6kZAD6vkc35iSF7KnnXoqpQcLXiDCZPGLzijmhwu3fQ5TbtGZwE6rtiNC5Pdp8q3SnL1",
  "key16": "4Wmb78X1QrKU2enjTujhNBmG6WpUknEkQVh4EiMDMVkMdF5ZFnQSC5kRfivfQoJ3EMGPSai1uHMV4MP4GYhegNPG",
  "key17": "4K6QH2Rxqg7aaeahGqejd5m8jjEEs957YQsX1v5M3N4feDEH3jbCzVzXxiRnMTbNSq4XfRsP9mZdK3h72Nf3F7Ub",
  "key18": "45mFTLNnoEqkmCdcG1VCQJb3jMYEG7JdnA6AxbcLec1sAce831qqKWU27dCFpiMt5amXT68PkH79wKeTPCmtsBQs",
  "key19": "3znfffa91yTxxd7vDSXP2sLAPNpFdgAxczabTZtJo4XRK8gSuo57mUjBm9uyGPjTNumpwGkfiLyctHzxssohkRsH",
  "key20": "3mnppCf6DmBxNtn8rWEckdJ6cZRx5EmETX7sSyZ23EGNsFjFQoPRLypHUmbhk3DLegyVnVy4P1FFXVkGmqURJFhT",
  "key21": "2Jg7pNCrMnRgtc6BVndytRr8uHL9s7VRkx1rwYucAEEmzgeeWoBpmEmxFZKCprqU4aE2guxzHUfymuoWnJiagnFN",
  "key22": "4j6BURgmszYYdEKGpFqpCPcwKHf2b2Nycsvm85GXgBPHEVma1F3pmcDuDo1raMW9FSyChoj1qFUKzkh13e8uj6iV",
  "key23": "3fddThNAqYr3kVmQaBMABGdhJeb9zUmW7pkgQc7YyWgHy3QsBvQANR4RRb7YtQ761t6DdkebX65XKXcggMes2dnf",
  "key24": "43nrzPWXXXgz6FqCiMyeDEAMKfTSD6qgau8ip9rKZY7cT9kUBLaTkEfBWYncozL2pTwtAFhdB27M9xyyevQYc4co",
  "key25": "2fFM9Eo9pFkxhd1k6MGTVCQKHEfdF2oXXK4a8V2HxQVXJxLT3BG9TL7qSnZZQjebeAF6iWNgYPnQ8JG9DvdwP1u4",
  "key26": "31XazkdeXaJWi4zJU2AMVEZvg4dzQ8d39EvAJMnSE1QfFNteSwQJ38VcpywKd6arUg3ACogKakmw2tJSFde6vPY1",
  "key27": "338DK4jbAMhfaq9iikneLcE3vWMcTph1ZuW4URHKb8KDTEcAGos9xxU8Mf7J4k9S4f8F9ibmxbxBJ3tZrtmtvAKE",
  "key28": "RTTG5tkM9hsb1rVNAVshX2XzRgQvdMHXSXwR1dk4j5VUHKBDoLCHtTFVUc5C89dzcziSiAc974Qm5nyiqkdiPPr",
  "key29": "xJ5D215Psvv8aLZA8HifMnJA1VAGe89sJ3EWAZdd6g5yQqv4hGArvfdAEdUGVAs1APmiRjbaPZ8pNiSAuByV1ZZ",
  "key30": "5dnRzXbsJrZLy4eLQ2gWLKqb2TwZmMtUwBHb7okdU2sze4niydQwkQge8MgV53jvKxadiN7CunvCNA9qRs6z5xnt",
  "key31": "3pbjp8RYEfXckGxcm6hUUM4kumkaC5HGnBRY1TtBhN3cAqkVn1JdaNVzhRSLnDg7scVg4rw6P2bqWmJjBuvZKdjW",
  "key32": "5SCQ4Gf5wFKrTSDeksf3WZb1KjqedUhqjwvy71FnGCvSmK2cU7szMknGYZn9rN8fEXZripmsQYjfqEY9br2cmybu"
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
