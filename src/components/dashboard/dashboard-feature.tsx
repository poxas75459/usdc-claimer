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
    "4z4wrhNECoRKzVGgcgT23qBxWVMPmfZX7sLnuzPzPvkPmDEmbrUzz7obpiz3SkP6vMjFE3bJhsCJEwqZ28TLZ1G5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5C9KNa446gsrUspHEu6L9UEvHmZZesCwDMNTnCuBW2RY7y6PwBYsGfSab4nTBBykcc1QLMFwLHpHqtfD2ZowQ7iD",
  "key1": "2M5DBDtWidvckaMG4YvFdNbnPtRHZqG51T4L1bf3W75H54XKwsQbnLAxDRZxa3uJ16Dwj8d8dbmCf9rBwirhfCBK",
  "key2": "4br5zWTzrSySyeADJZpPpaytjkEUAMasmDKHvSJDJWfu9Hqc8QtVYCRbosAT3qUZMJiKgRUfzPxCDuyrvwxxGvB5",
  "key3": "9QNgDhAw1VoyL6DJa8bdo2Hf4hVu8uP2DEGUngRKU7LyZiz2NSRJqpCczn1LKxxnV8Smcyn4LiQiWi1fkzrwjtq",
  "key4": "5GgTcay7z8CxfCysxKGK3nCNovKKe5CuLoqBrfRBnBYGyRQifQVyLgbpP1oWXw7BGZTuikYeRFdrpuw9t3bBKzTw",
  "key5": "4prCMpG8eHmZmFJ7Acu4cwZ9LYnZYS1Rj4YybeiViZwjqm4akajd6hmpaNAWdAXNKwzEKVguaVmuMmE351ykELay",
  "key6": "2mifNEUFocFR6FoQKQu6YhyEbGCPKBRgHVE8tyLKAjnCd9eBofmQWpsLUsxMPUukRKPGMkqLkjEhhEB1os1tvv5z",
  "key7": "3MG9S2qtJQsM2BsZzhhvrbzZ4bkMuzKZp99QZqMcZH8QAm9BjuEq8zWUU4C2G8RaxwP15PcMJ6ixjoPE8VBcy1D4",
  "key8": "2zyTqAeKt5mxYN5NZUrfiPTZvzpRkPS3cNkAY11Pshc4Hod5tKUxkcFfVBw29KoesJjvCcRG9xuzgj2y3WKBuXah",
  "key9": "PsSDgxe9XAML5tQVUfZwJzBSMaiPeV8pndz2TZPCv42o5NpAdFbcKefJd6ZErapS8hnUoF2TyQ2TcA4D5PWToMY",
  "key10": "5HFHdJYCMiyu3n6b8wWPm2cwnP1pwiWpMgegAsXHBSbQYfR3ecci69tdGBwxRFMZHxW7xumF4JEW5SNmeQ9dVAX9",
  "key11": "38vNNbniv5tf9HGcwWcUnmvqRHkiHxwropXVJjU3U6xAaGC7Ewx7hKk6uPBu5tDBPmLr8vbrVagBSoZHwrxV4pNQ",
  "key12": "4CZvmB2GHnmFyrxa6zHbPWt3kTnbMTqMuWSkR5WtfoAtx4PTULPWKQhyVqGyabe6cGUKBCTtFNf9iiGyzVU828VH",
  "key13": "ohuKC38QV32t3rscdm2oaRNHyQfVXcWi1VX4tEWLnjUdXZxH9jLvUzveeYRPxhAd8sJrJ9wGET8cxKceeSgsz2k",
  "key14": "3pW3nRPAoaSiu7NJT4wXuRX51dfeoKvpPiwgxjSJd6xTKumWU5UxoXszWpqUkFAVQ5vRLahjFUDEYTwCXzDChFxz",
  "key15": "3p7hPusSpWxdWmsn4tmVZdo4JySwrvU7BboJqLa8qoHtw9H33Fib4HvNj4nTKsdtrANairSeFP5UUTq4MwXM1Zte",
  "key16": "5hTuHckJ56ZYRcN3Ud7Wj5G9teDrBaGiGyVxnJ5ANqQ1ivmvMSCCyZsuyv8mPY6En55UuK2eHEJESkdeEW9zAj5g",
  "key17": "4dmT1joDZJ5qgrHmpbfrpPQAbFGwqCMJLf1qe4spBsmKf2e9zj4CXe34EsfrHdxwmZLYCiJ7f4kWdC25KcE3WoLG",
  "key18": "45E6EBjRcEcg74YHpnLyxHWxmjyXS7vP4hn5U65UepHaY318taKXhYjXHrAbznXWiEzu5nNMuQqny2yjjcLczau",
  "key19": "424baibbq2gTKDL2Y23BAfM2g2jhRsak5vRXKSKtTA3HupqxTD33azsdXFjMNi3bB92nYoo3DqJZQvNfLM8ApQQd",
  "key20": "38YPrhWEw5PoJwYgEny51kWDStqwXKMeNTokNasEt6PBw5KKDUzJF9DLEqXbagjE9iCR79hst99H1TnjGG8JpCf5",
  "key21": "4vV6Ln74FCBNgq2sjtAuFPhdFie96RNDWBzL4U7YFZM9uTDEUkMy2Qcu4N7E79rptZyHGdCQ7E3BTz1eVksNrmw6",
  "key22": "4hJqScZN9x7SDqewCsVcm32ZkoV7bVS32WEzQXhduUBeQiCo6E2UWiovpNSSEH7DnJnYfmmMokzrtmsyDkrHamkP",
  "key23": "2a3NssKMEsRyNzc4AgvVSiAL4hmUQPrXZ5CjMurqqWzLpoQ9ESLtnTrrUn3Pm2dpuiDnyvX5dNQBf4x8qNvsAnvg",
  "key24": "3RAYu18AsG4VfpYK1RSLfPuGgq8PzHnVBmPaJFurPmgydSPWihJiwQfaPzbvAchmWcUK3d4isGFKxYRu26pNRX7c",
  "key25": "1N8zwfTTxkjgUzoQx7F9NvB75h1172tMHgWybXRYzfzEpa312Don35a9kC47LfsirxKZvpMspWfvv66kmrhw36x",
  "key26": "5sh2DU9i4smAPhoepXEjNusZ5McbmAiLqP2ZRjBQD5MKT3tnkiFb2bLUMJMSVuF1fooLMEE5AE5DJojQ4LbUbn5E",
  "key27": "5NKZi9qrHGS9d2MsoJKy7TKc2casBSeCSgTVnYemkaGJdeqAuL9dv7k2vzWsKDdtX2BqpeyN4oPJqYiCa4jnadG3",
  "key28": "2rPXk2zgDmUx4Njpz5eNxtTYmKYg1XKjYbUhuN938gXuFwyAfdTBmXsaBWuz7YPeLPe627c4tDLXq8SPysG9bHKK",
  "key29": "3zkPNJASB1owPZQsDCDhPCCFc5hfWyFUPavN3zd8vJ8Eunwv6WvUbwtEv6xP9JLhSVFYs4D8Ze7Hrmu5quzKGhHL",
  "key30": "c4h9pHkmXC5KRv2S3rB47BzX2mmX8wQEAp8DpYHjboMYm7kVhbhNdEajE5jTQBbukqU6xwc88eR4aMVctrNn9xp",
  "key31": "2R9BUBRXgW7KYf6mSWvMTm9CjVd3LwpVtqrtisknkEhmT7gkVBQo935mU1CeH4GRUYtibdowtpNUcSeLDhAMq5ra",
  "key32": "7412xRPGJGtre5LHgR7D98K1LBVpgzXuGVzsF1Nuj9MsZGTNXj1v1HUVom7BPQ36A8CpGQ4MLNLMAAwdeYGruUF",
  "key33": "reMn18LHnh958rCg7mMUFRhsP3hkUjF7VDbRcE1zf6JD213odXzZzQcnp5PfVNSVdFBa8LwP8mVyBxhqUb5N2fs",
  "key34": "45dT9dmLNSbBpx55NitebriZhyLkoowxmxjHtf3AdHwJFUgeqt9GWjg71rCurNDGQY22UNwGqoDtkhTwRcMH87VY",
  "key35": "2ZBnHBneHVWURcFQXCw5pi6tt4cv5PPw9BrmeE6LXBqmBF8E7T6aYpXUS3UDnFVBVKnVyXa2japXEVsKXVfmE2YD",
  "key36": "377NbWKSfnPGxQkVLW3QAtwRHVUNuWWRXKztMDHWJjToAzkxJyF7LDpWMqUu4brgo8gdc6nAWBxv9wr81i4G7NbM",
  "key37": "2dHQLRr8tEUHUUDBjiMz3R5PzFHRCNsTEgp3zZbgTJ32ZkqxKeLnnhBa4psmisdppgVhbj7dynKvnNTssUJV3pga",
  "key38": "4sPbC74xKdjRAepmiqtBFegA6dFnAm5k3M95xM1zMV9WrNLNjVX4DGfdVM6gq69TrBadRr218gQSLnf9wh72xQX5",
  "key39": "4kePXscfji9So4XPLmdvTu4omiuSFbwa51WpEgJDQzEN8UwPYNyAqbtb6vPu73siMwACLYaNvVHe7WuJWVzcXBAJ",
  "key40": "4aMxWfugFksydmPwr6pRxSac72JurceAGcN3F6gsbFDJ7Kjr5sywqyQbR5dzENxdLHA9828HbXo8LEFUkVNE5P37",
  "key41": "y5WirDqFGRJeeJ5sxgoHEkZeWmUK6MgKpKxfWcVBasobf2neotS2RaDxvqiyX8MJjKNwbrxkmZY3ufZ8otX5yhc",
  "key42": "3GzohA1tod6UH1WAmPxFciEfnGTtQfyifLtMxqDRasMExXVkTLaNcZudaD5gzJKRNTEQvC7Qfib82L5Bp1jbEjp7",
  "key43": "26wNCGdSuLjMnDRmftMPsz1q2oVKM1SyDLhh5xV8kRihJR3T9wbfLio3od6f97gVs4Ve9xw5NqJM4iMXUabQ6jdk",
  "key44": "5G9TPsLptGk9DAz7rLiFc7bkRzsXZU76FxE1yrfuFhvJpv81XmPEf2UpwomVTpoNgNEQ6eNMvJnwpgcEBPbUnpLj",
  "key45": "2gVNbPiyoc1sYvShtK22sJm2C4Lr29WciVEb7iR8jvxQ7mKVw3ETRqDiMVje8rbeR4f3ZbmTFuFXaGgfzFNdmc5s",
  "key46": "S9ifJAdoFUVCGtjLRZvgew7RBvB9riYTqMTcYFQBPiqzktN7yAgnaNtnfWpU8rdfZXJ5LTnVVZVgyg91rNUMeTB",
  "key47": "538VijwJF97QgxwuyS973YF9KmcAL7PQHpVueSoi7UppnMbc31t1A14V92ou5ug8fX6sVkKDY6camcJoqjbBS4ty"
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
