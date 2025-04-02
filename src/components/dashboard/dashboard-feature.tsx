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
    "2UkcwRCNfHCgGRqAApNaUFEhHPieofSMF4pEWg6ZMAB2nX69vcEwC4qUaGCvaUapULrz1XovRTTEFGuXSxkSsF3z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qBz6iNxtEvxneYFJF3vgzVie9GmMkrjfmWVbihm7nRKLwyPMjJy38bNiMgzy8T9yMiVYE82AJ1J6Y8RK2uhYsbJ",
  "key1": "26SLmid83KDW8LHo5UwtU8zjCsLLyJJYyy54EpmiRrgAF9tWFnjvoC4MYQsdoK13mscL2JuRK5CE5Kna9tP56qy2",
  "key2": "3aoXKz1z93CKWZA6kPb7P1C8mLJgfbvDBzY9D5WmYeHoupsBNg2grwi44pm3wxvyUQYApr6YtKmxPndNLAsFQ13j",
  "key3": "4haBQKmMPYHZ8dpeA5RTD79CMupPoAk3MBFuUxdame1GRbCqpgibVNi1Pah2cNNvwSMHpAkuDfSCkpApRzzGcNYW",
  "key4": "2ijVsmi4sajxGMU4rWEKKvUbYqwAvmPq22geS4fZE8nqACWJixu1JYogUt4bdy3hsWicqgqpuDygsgPe1uLb1Yhd",
  "key5": "4cH1Lsqv9sx6bLqmXe9CakdU536PwwzyG6hXqic8CqKTSTWE4y1hQ6UcDvdhuusXntaSPxHzZoF3pJNq6C6JUvP8",
  "key6": "A5PPyeP5mcrxuneEjuxBHQ7rSnNkQCq3hjBDp4Y4JPmjbGFT3aoDLZAS3D6eQLdpCiewrDYd9pe4igiURR6WsaP",
  "key7": "212NPyx9fWyepPcvFhxHYaiH2CexYkbk94hvtSvN1sM9YJkRpqRdVS68N1vviLZrjUvXKygkex787AiK6v7hHkhB",
  "key8": "624j2A9xGNaoMxzhgUB3v4Q1sacwZ4oxXK4oaDLJ4rSnbmQds1pUQqvEcMRyKeEHctB1mHX2gZ7HtSrMSyUhRi89",
  "key9": "3KL8tBcyFJiMYgxPP1xyqCTKEqVmEotqUPiWW5kMP4kyJT39bYHkBH2qCd9L56ydFp1gjaveDR2Bp8R8zxPS3fVz",
  "key10": "51DgTyXezVeuhz6RJBsEzwCBsTRsM8r1gEhETL3iA2Eb1PThSj2iLRoCMHhnQRRNmsaZD6uPsFEt2KKcoBKSKQfE",
  "key11": "4JPv45CgUXMthgqqKQ3sLefWBfHc3vSPnBVWry8U4cc6ti2Wfr5aN51deERtGiRhJLyVsnFATTrzLtGv6qCbdXAi",
  "key12": "2wUYiZcrnX9RNKpdEa8gwkj6jQ1YZnfK4rUnXHGsWzpUm26vQUw5ymuyQiHerwgVuD6fdJTnT4ez4N9B3tZqLu4m",
  "key13": "31BKspVobuiqWrzQwd31CMiBx2fg62BarmbVmDiox3sPKGNC9n6tRhmTh2hEWqGZV1z3qy7G6J9FMaFZehcRhDde",
  "key14": "2SLWues9PSz9GA1zx3zSJWqAf112Rd1x1DGf9cGKiRDSC1gWYeEjdHPFLC8ukwCdSU8WXUwVgcdiJBzeBGP42ErU",
  "key15": "5s1AjAzaG2imTP1v4EHpR1h8wCkVHxHisNAX8TZnJnTDhGz6a8CBKnT9TDvjqnWqiyoEt2P79LEQmy5NKknQT5yF",
  "key16": "35RML8RnJ23BpTRcw1cHU975bgpjKdXZ8JugSTKUtvycmq7wSnFeHUgwwiom8GzQ6QfZVfYxQECQWRqQhY8pfnox",
  "key17": "vc63KpjY67pLFpW3FnbvzjuyGU4uN4RkaYVBcKR3QMmDX7BWkpXt44nbZSKVvhmkxe95RwBsDyHfvWqBidN8jrF",
  "key18": "4QwNfroopA14qadivsPeqpawFVzoeD9EqPrwER3MYXEXaVtyGAf5upgtXYvqDGqVqt6Z6vsNckhNfB8pfwjtYZUC",
  "key19": "3t9GAvtGqmPUkx9tr4BGsLBgYr3tcA9jipiXWHRYHNYiLSQbCQQrsrGcPA15eJJdpg5DfEK8ku6ykAKdn9hH873W",
  "key20": "3PGeNZb572baLaiRggUqupLYrtzUqV7RBbzTygQ78jRJcuedU6dbeZpeNPDXDtUj763ZaiepacrLep8Tej2CGmfX",
  "key21": "7pRnVbQBDYD74uat6UCRe4Ew8TaNtuhk3NwCmSfeW82ty2V5T9LVvKzfjYHiRhTtP542aaNBF5nnaScbPEg8ATv",
  "key22": "64wF56PkGRMsqEgBWktdMPdjCUWgLSbACdjcSEGnUrqMp9dEhTrRL4Hek9GVxFriYFpNF6cxJWvPziXEYTtsBzpa",
  "key23": "5JUXLySuHxp33QPuRuWjvdyXcud2tzMYDwMPEZtwhNKbyBbaa9MHzJHEDhNCWuqr5YQ2UaWoVq5GndsRb5fwXRQt",
  "key24": "4iWFT2a9BssGPpRnDGexAeamLk3QPM8Yd1UPYMLLUadkyPV6fCXw7xjWfPi5PW6QUvUqFTZL5DC6HmTw7vv3jMxU",
  "key25": "538iuJgttgHq7bZRnmTiRknSTe9pYs3mXLhwJdr156ndXnK8492nmGQXbj5P9VXNGkiC8CewUacjRMH1tm3EsEsA",
  "key26": "4vd51M8hfLoSuiLkrpDU7fc6zeeHaLxPTHdYoifaJRRhHxarPskxR9sNJhvDq3HAwvfoTSKHLrkFz4j1iw5aWG88",
  "key27": "5gaycpSnYuL1ozP9R5HmxR4C1UVpCAorVWRJKnFVdfkGYCcs1WhaqhdDtnEhTuL9Ms8JGYUHGNphqMJa6tGcCs4m",
  "key28": "7swoEgBWdHkTeSUSwAuEuGP57GVonVuor6K7fVWyVSwuv4orDhWdWkoAUy3GeGwekRm2gQUVJDtxC4gmWUmCEaV",
  "key29": "3qSzdsHwhfNPEtPs6VrQFwXZ6LxhJuQ6HLuJVmUga1iKL7skCbjD3ELLqbg5MZRsMjYdizQm3hD8xRs2557QiesL",
  "key30": "5PfMCScYdNQY5Wt42MNMKVyaBdD8S4RgvV7yt9qybQqHf56xvSvPchZtapeEMU7WjWNcVPTE3gsjcvnao9w1GJGv",
  "key31": "3NYcK28cwwLfKt7cvC7XGz7wiqBiLiHeijhnvZqWvvxheTjz51M91TA8hEcu9VMvptWaPFk8xMiAXwJYRzoNYFpm",
  "key32": "4kQ2DV5V26XVKVb3q7UMiFEZvLhqLL8UjYps1NeE3eVwqC4AZDUi2zqvDrtqgK7JFAQD1Zamwgwb3TdhjMeFkXkZ",
  "key33": "REyNCQoTdMxtPjAJhu6xp89o56fKsmRvxhd5BPB7u8A2GBpioJVdUdAZEJD1Sea8XBqUh7pHR7ozxijck3QmGpw",
  "key34": "4UGUw7TFLaAPkt1uhjU1KJVuSVDGyXADdV99jLi6SjhSzNVPNLNYs6vvWk5pHPT48cL5kY6VWU5TkNZh12oWeUhs",
  "key35": "2mrLEDdZyYvko2n7nkmyPxBr6WqAMCq2xtt69J6GDMeBbh9wNu2vBjEUM4fGCaB26qQYjVouJ8kXzWMQ3UyZEZC9",
  "key36": "3Rry9RsQocznaszLK2r81zGpH3DLEpWif2UxHmhc4oYJYQQSvBEUVCYfTAnWV7XBbZwfsKjYibkaTHo8LB8F24Zr",
  "key37": "61ryhkNRzRFhKEQzxnocBEE2ZAsMLfpyhhkuU3AW4ZiDSUyL92XAc2wTHjZ9ZK4K9hM7MYc7779DBx8qt3skKEag",
  "key38": "5sB5iegKn2KSBr6rmVxm8pZbLDwYxgRJfsE5javJtfMVtsgqsdq2i6Bv77zL6tJiPAKrh79xdrDMWq9ZBBxvsjQu",
  "key39": "Xe4kBAxLfce4DjgFsZ6RdBm65yvZtEaBt2NWL5TmcYhkc3c53G5Zt2rk2PX4c5ivNdyjFWEpz4RTGTtneHHmFUe",
  "key40": "4jwcz9e2Wf2hS3x46U26PYV9UFwNPERtD32WrdC4bi8Pwd6obN1tqCvjpBZZuEoE5nmM1dDD14yy2pccJH7cL2vx",
  "key41": "41CQWSVscwjQBsNRkugE9BRTFj1SdYNus4pVXfzAHzLz8ZMohDLrewFoY3ZxCFPpX9MZ3L9inBdZBgyh4U4nxa9b",
  "key42": "4VX3yAUvGHUW4BXb6NYkjF5z7tf4d1opDy79RbDmBh9f57dgcox48aj4TXzMYi3N9So94S7tkCjVHBu3ij2GeUMg",
  "key43": "5YQthCD4NbTL1vwm7DfFd1JxBP3gGoK75CRCaqXd6BuUvrDsdj29xUbqkoN6arX7yrygX8Ge69twwemYUUhn1cNv",
  "key44": "4zGg4a4v1ooWoB1UrsZNF5pVuc8GcTxV1S8yLhhaD6G8v4gFijhzwVCdyEjoJYcvXNRLWpcCGoBD7WTdvrbMRo71",
  "key45": "5abmwZ31JWU37eqn8siAH5d2JzNPDdYifPAF8t4G8VybyA76rUJQTTYkt4QUzZGwByFNP2J7xTsAuin1Dr2NvXCN"
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
