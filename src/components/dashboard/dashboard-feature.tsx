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
    "4G3djcwSXPq9CguJdp98maLwbibLtCtD5kNi8TY4GgjQdYrSAXAnneK552YXmHUuvxmW4TGjhqTsoeALwd4dNi6b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wTqkYYv7TjXPxhVmh3uQCFPchb2Lbnvx1t9NmggUGU2CEHrXy3paeSsncSmtn2u7DFagq3xfURfbf4SY2UpFdQh",
  "key1": "3cGgRKJirFbiTvHL8yMPSckDzChWwmbmZUaqsNjgM1QfRJjmnGXpHM7nUCb7EKYHbTnUk5aNoSixyQNmUP73q1uA",
  "key2": "4E5rzqvH4LH1A5mmLuWDRFijTURtVCoWAjwnhuiB9WbqLTNQr1UTSTEzGpbYMACPLDoGb7R2bQUtctQ9e2FvTYJo",
  "key3": "2kXjEKXehj59dxvRipy3NzpwSiyX3JiLpLy3ZntamUQ4yB2fNrQpQfDyBEBuF9rAT5pqkx8zBjcH6aud2EDNfPXP",
  "key4": "2Tmp1ugMGXMWGMP2CkoGiFR9cG1pJwYJ1M5b7yHYiJFHiVs1JqGXT8dZ4swcP4EjqcB9JBa3rwVD8RMmUE17SQ7r",
  "key5": "5eDT2TJRw8D6iQwArcaeUbfSJZhLB5WPwcmi1eviHKDYLVQsYkhpJ7gt3WofksX6arSpknLCZDsK5dMY56zUHUBD",
  "key6": "4a9Vb1ooVUs41sZjUQi6PaPexP4GUVGFAUqpvh1fEwFJRaLf16Cx7LCfiQGcmpuyVSjvPMGbBttBDtsnTtWJZj5f",
  "key7": "4ud1TCxNpi1QtD43PT2R7We1Cxet6GypWVfgofWxoAKmt3GrgPbrwaZAhoAEYKyz8peNmMdDCXcby8gs2AcHic25",
  "key8": "37kBZ1LfAEYcxZkZbxRxGosP9b9sucLhSDwnsMJJTWoXb7DLbThKQjFzr7kTWg6JJJenLxS3cs5vzmtTdEv24w5o",
  "key9": "3rcNukaW73gLEJiJHudcQYpBSsmB1VXDUxZRwVoVdSWKorZzWRvSyxeqxHrPpSrCnFkqz1sNn1om5PCMDZEm6dgR",
  "key10": "3ez2YRGABQoe6M1LJbmwnQzxu3mzejMhBiG95PFzV5ZLKdn94kn55jKGtfcms4BDGMwsmcqi6Df9HufnNkgRdu24",
  "key11": "4dKy7msCeD5TXgc4Md7VuK9keFmdnpMDfkM8cisBxD5AXCyBKNUajB9PagBGzN1Vjn9oRxJxAL3XzStBhKDioy5u",
  "key12": "2Wi8pR5Fwg8sr4t7DpNaerAf2igiJzBCsdmLZxbaV7ky6LLjc5DfwQ8Z34opDnc5Hgkn2pBjgsBKa2aKQGjgDwkS",
  "key13": "2y3ubVTbtnQDYTKoy4Gpu6Pd1BzMzauBtVHpJU6bm2TEEKXaAaMn8fGc4U5WoBQ6h6jJfBuurNDR3Tpf5J8eYHXL",
  "key14": "49WBneV1ezmhm1k1a1TuUSgbP2Jp4YQfqNC6pBQTyumMuyq9rbRu4tMetS1mBW8ADSG2RPxJHThCEVkVEDSfNYSe",
  "key15": "5DygnpLuRj1E21B9NS9WYTfZtkznHEACWvShCMFSkzM5U1oherFPmsrFzuzWNQDdDgH96rp9CoDrPfhzre6nmfWa",
  "key16": "Vnmuhm3YsDcfsfjcEd49LMwFM4eQRVGXToduMKDsyUPnwbUovNb28gc8dG3C7ifa3AvHMCfBeUQE3QcafpY56o6",
  "key17": "Vqzr29eDvbBNTq1yYC9ksmBvNBy3ojgTzsVYVzGUuaDQwrRfodjwqrmT7C1au7i7zP9zcBQA7rLEFsZyNtpHJcf",
  "key18": "3DmcXy4NyoGpWyBjHBbyErdg6uk9bX7VuzLSBEQpNHu2N7yc4KifxUSnw3LAdstKxh3tJHqW45hJhaboyJuthirS",
  "key19": "fmmELg6tmguuyAzZ4zE9rEWjoTA6LyeesctcyeTy9m2h5FaPTfR12oLzd8T6dCBFAsPHEaRNUE9rgZ99sTEKj4U",
  "key20": "25658ayiMoKXtzKq7JcRWNybQ8irTwaoGjQ1yiMX6frhgKGverZbvivCD6am3SuVjPcWULPsAU83i2GTwx9NF3Tp",
  "key21": "64y6EBspqVdsj3w6oDbn9nfi3BBXXqZCTvzVLTSySffngjBAhvTuzLLhW198SoQGkFVTwDck4uRVxtr2PnZSeM5w",
  "key22": "39ifEs5dPxgpJ3ZKQUWPagHq5mJSYix1ikmH9vSfRACEVbrCL2wws6XGLeiAgZs6cVH34XoMZKRddoJ2iVcewQxj",
  "key23": "3cyDURXK8ZU1TW6D2YM39ffPjP5sbebeeWXv8yWny8BJy96mCdLjLhttphc1uDwv6ybBrLjB4HQcEse9TfVPVrZk",
  "key24": "ZDNWyCyjGER82zMb2rwiPQVc34FEUW8hc7aYNVXnRzk2pgLjAdqKbqvnmR3eh7XuaXdbyKvnDSsxFRBFF8xGq1V",
  "key25": "5hvV9ZiLvGt2hoyMj859H4fWj8ePiwUMyb4hc6VFspEgGGCGC98y3LyvFtTJB5aeXy5vD9X7UDCWuGbtkcR2GoPs",
  "key26": "4qxP7tpeNfmnVbDkrSsWVRfLuLHvfoiiZZD3cxxgqbcUeq7QoYKeZTU8QsxQo3GThWWNN5wMYMtugoykgWzeAx4j",
  "key27": "5vPdNwpE3vw36UYdZWxMUTdXqLhkpKLFw9Sc2ESBkJ6YtfEkLBy2oUeYWEtWGoTQhUkYu4c8gX5C5Zxnp19qPQYf",
  "key28": "AAdUbfhk4WzezQ9RRN5tEbSaNwKDAto7A4tm9fDGTVZghpsMtMftc92ac4aNXaHbRigYC4sqmhjXUjbFnpoT56w",
  "key29": "2WmjsUXkDrmmCiYHLybdhfi4rW54R5Pw9Ea6ki8WQKiZrCMtHHKRSJRNBQVUJEkjAk6qdAGHi2mdRz8HsegWuYku",
  "key30": "mEN7c5CeNzmYhA5sUf8hgjFeLxXd4q88KyLm95S3LuinF2qRtF5272aLM8xEit35WA8EVs76XbcV2NFeWdxtY9A",
  "key31": "4P5oC4CaunCCKRW3hYTyMWyHJwbmkSp6xJEx4HfQnrVyF6pysx6NRFN62GSYoE2Yg63aNyNZibxecw3H6Uafru8C",
  "key32": "419hLfhpWnXxmo3XufjXh5cw1Nu7LRoVP7u7Fj8ZbzqBgoXjNZhGdDzJZ3bQcFeHJDEjSy6vP4QDUHSuGU7sBr77",
  "key33": "gv6RkhiknrXDC9uBsTstcB1M7mBtUEmQjX5ZCRNFh9tGgXEtkFXAY8MGs75tPrYoHPHByahbgwHQCtb7U2bSMV9",
  "key34": "4ECvAjpk7WYQc91EL23SrAdH4nnsFt9HhGJTJ5tW56n3L4EkujBoTNtgdJy7GxYHyZfrSkNtEdoso6C1GthEEmsg",
  "key35": "5gM4NgSMhToNcoeZqRMdKM9NUd1YN4zoTfCCAN5n452TeidWZ66TLuh39b7TCwaFH3btrperBwqEcc4g42WU8EP6",
  "key36": "3CzUQg25QsUYtCzqavbS3JtiYrvQt8jRGhVRmYVra9M2DNq4NBYRm5DbNQZ2X5v2xvASf5h8MT5N7Ltd23jNrP5v",
  "key37": "51fioMvwEmAgcKqtJkqbxMZ4CJbHbKyWqCoMKHdSymG8kbvNXdLLtLuf4iMeiQCiEAViNUpbNRDUnJiyNQtypRJH",
  "key38": "5uU58nXKMBSqacuzxohSaoeFqMVTaGHsptCJQn8NybvLb7nvZd5UmEcRtNnsKXy6Wa9wernEApRUKVUQzx6fRL1w",
  "key39": "54vtaL4XgVmsdQKWpPN1DJjyDgPkkSNra4RczsC9qsWH65tux7ygvczdrB93rFooH5CWDsQNTmLjdRk632XbCWyu",
  "key40": "4mfEtEhufYDLrDnRJ3JEhTmcuGi4D6gj5q7vJqsgSeNUfZoHSi3Vma4w7wvykrED4K8hAwFm3FHHRvtrFYNCmLUm",
  "key41": "3u4y7uBHFCq2tAAdASG1A7feYRhtC8GLdbwEweDKrQuz2b6eked5eMQRswBu2kjw18f3wrb7RFN5GiLz7kNzUnNP",
  "key42": "5hfYBQrngTkqSbWoDUErgqsYkRkGXFUnhmESCtQT55zCAYe3RmotAM15UtCHCgAuczJusBWCCdZKPCoXBoseMWSZ",
  "key43": "3XnHNmd79BTVeQRog8h4ZVD2XJ69QcfxPxEK3VkszBaDzMcm7C5yd1gwxm6ei4dr1ZAgXZDHUia1EPWYnixH7Vdn",
  "key44": "24z5uXdoNPwGTST8aUQZ6QaqsXBcPUfewTstTgFzHcoLZYM9EsbwoZENnZCtdzy19rmgaCgahKR8ZmghNAgbSSsg"
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
