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
    "4MemFz5fhfnvMZDhaqDPcWyAdBVg5sK24LzkQw4WyVA8vNDJVPh4uCXzjMQud1dB9iL28XQKN63ssec8jdhbtV4v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pB6rby6ZpmgU3muNq1A3VvmJihMbGc7pYkWUe7W5aVFBxUv59XSc5vcZ3tvjTeuoe3rmo4et8gcSEDdjPe4qnh4",
  "key1": "41P8gP8BLrt4cARbD8eo3Bm1Z5tytLKp35SKaP9eVzr65a6UcNC2vgVzWGSPBPyCx9W4nLqgU4oFGdxP9e8R7DYd",
  "key2": "5hz4TSrSPd9q9TTraqRfn3CpCbdJsD7sM65jmC34qHKy8CFnHs31gRh3T7KX7X7yZ4UmxwFy25xq2vDZhFjqYYdZ",
  "key3": "3dbAY2YDunhrULUj35WhzADJJiXS9F6N3MdCqSkMxuazFXEn6ifXoG9TVFuNzWsYdaZJw8wssGbnWmARi4qBdLsm",
  "key4": "4oGuLsinqj5fhdXs4KXcrDNS8bWjwwGKiWisw6sN5yhMAN6uUXm9B9gRLVjRjMZxC5jXF7uGnhQGbDsigKwAFGpr",
  "key5": "44nQ8BG2VBLuCqyDjt2E7WEehe2RGEC4ji6m7mgK7deMESAQZL5sqjVgtjSW8kUb6NNz7foveCZ9LnPbHZmpNUQ3",
  "key6": "328uonei3i6orm3hLjUVBtTG3RbkTtm8RmqvzJz3SBALjuC53saB8mt6tFeA7dYkjgzEbUhhKY6q5rCtxhUTU2aV",
  "key7": "2JHf1DuuZdDRMqNWQUqitewSMUebKsuex2BEXRenXJf8GxPVxfUZc8zozjCzCuYrnMuYwhnNG9arbepxTiKggSzH",
  "key8": "YwtTepQJZdCxGECHFLNcXyVU6BpR3eJEtbKj9U71PYcACiLbVbHD7FoghnUV2STZo9i1yeQuWpejxWGNdqT2hJU",
  "key9": "2hF7w9g4uh9cngePmxKGqv1AmyZDR4QLpETbBq3QXCAMskuZ5L5rZiFL7JPvaZ7DfVaMotygitB7WUe8CsCBEySx",
  "key10": "5XhpHE49HdhQtDEofbkLgtRvbX5UjzoNeWHn8Pa4BWWb1Zpz87nitMSS2GXPmQ3U8gWrimXZ1hLnLWf2yhXJLW68",
  "key11": "3HDSkxtpZ9Zfd2MnUcTC1R53qnAQTeYJeq577N7GJw3AZtkY6Lud8DuuFz5wwFqj6HBjs7nrJrZUkX1CDZ2NC5VH",
  "key12": "3Vx3Gvopr3aih1rTTqzavTLaogkGtugP8NpzMXLsZTmQaY4wGkcrCwypYU3mmKvUFR8akHaZmhtmiFnBDUEDt6V7",
  "key13": "2a9uaLRCWeHfmU952SqwtRJaBfKT5GXjqPCjtmLciMhD3w4th8TTBWrDAnD1SAxb2UPH6ygfWc8dGtxu7w84RjhA",
  "key14": "3VdTTzDzAP3w9tfXaAnFwnzb4XvLuUFVZuJWvkoBigeKfioSMXjhn6iFkfZXuFUzGZWYaiXWd2c5rweGFAqWGph2",
  "key15": "5HgUFLtmjdmGPa7vDeymbP42vKoFVyzTwEi7o13uVgGpmUuDr1a1ynPmtcfSS1To333T86z2DXCmvcEUWtszmhVY",
  "key16": "TrbTaoRe9TsucKRrqj9u6ysuCMmg31Sk1pHd3NV8YV7DUPeXuEw5WZ7cv1FBgjKEnhM5wLCDfjH8ajAonTWzrDP",
  "key17": "536a4P1CVbZrGq3UpWs59Zzn3kntgkAXWNAE7tNy8X1zW2or8kEFSou5c4RCiE6ZanbMK31raayJcDsz8CdmF6X7",
  "key18": "4tEvuQJcE76UL5U9YRRkaWyCDmKcFkUWUo5eq22TMzJryeHeBRBasfyFrw28jRioDc1bJWfcHxtArsGLJg3Si1uY",
  "key19": "5ezQ1K8WWW98yuitK2A6ucURR4Faon4uGr79ZyWEYGaEbv86JcreR8gP9REceA4Bka7yyNLPvPx6VcoSu8PMZUF6",
  "key20": "4r9j7umbqjmsDYz3s9VrgqYr291UAvFroUvcPjVpmkku1xsXUVSUyN5mmLfEyrKsisnc8rSzycr9xs8efEyRaN7f",
  "key21": "2ASWS2HgmX2AZNrwqGXUNxpLw36QMpQkMf7RpN3diQ4Lk51tGKEHrshJJtV7UqR38EGD7cX8ncv4EhCvP7Hv2BdP",
  "key22": "419Eq3PfrNUi7xhY8MDDadsctefBideeGCKkeKgHi8izFhDpmFSNa8f91sXj86yzidRxNfbR3z1Ae31itwVATo1f",
  "key23": "3bgKKKxSz1htuMW4Yf5CwacwfaMWktpfn7nYGBDc8ECy9Xk9U96xETNFM3u84pvkdQSvu9QGVZQAGwfhkkhokWtw",
  "key24": "4GrFNn4tYJBALd4sUcVgjWftAWGAqLnCepQgThhjK31irsC2qK935GXZv81hYfvcuba2VAJJQRyBA3Aig76F6JX4",
  "key25": "3Bhbg4yZSZirzKMpA6HRzFziFeVmFW35e1k6UsMh1tFT7kjFrW3ikmNqbfxcAaai2AgCqunw6MX31N7zaZ7kREnm",
  "key26": "4oH9Ci3XrC2upTMNRqXLfqvPu8HfBaVrvh5CFEv4nMrFszZSLigQkDfWxa7HDf8msJGb2hVRttWjR85QDisMBGZb",
  "key27": "4V7Lg9hdhvNC14RJkG1BwvzTHCRPXcP88PiAbYt55UWJdtSCSZdB7FgyX2VcR6ykFnEcsdYYGYReG77Po9LEGr5t",
  "key28": "44D7pwTPb2R3ECN5czSxRrZDrn7wD8qxsyTXX8V4BugbkTWuj3HSubiir5t2SwW73KLUAaiBZomDFahFHSJtuS2D",
  "key29": "QWG4ZfGMgjRxmqndQ89v5y2DNXRwF82tTvrMYTi1i2jCNb2za4cP93QyezYvSxXyP1z9KHssL5471H75wzF3MXi",
  "key30": "2EoXUhcMkQP2hHzbLCkAZTXT4XzDQkMmVCyREuDiH9mvSpkKY8KkA63RVssR3uvKGeLKkwfLgznWudws7MmQQsby",
  "key31": "4a3MqQeDpwDHSkP7eoDq4TuDdFtfJDjatzcxHS8opnb18kSPHVABeeJ2NxhtjVUZfYguaTwEtN7zsumVRYKzxfk6",
  "key32": "2Y8kewBwnYtMKTzTjnnNEgMEtwgnzNJEzgaztSoZPYExATJFCRjmZ9hcyq3Ax2BdKYFpR1LEpmf7kZiEFY2KqCro",
  "key33": "3XBT4pp7Wne5KoanMNQhctqDbvyq9ZZBkEjZpgcx89e8Qvt4yNZeDLMV3S2WgqGu2AGjnGUcjNPcpyvZ7Qn5QKGk",
  "key34": "LhivxQRa5rfyc39ETMMZzJ6guweWk3XubzUwrZHfaigjwM8t9uqSY6qMoZsFqpYxzDMDuEer8ZrEvibHAvgzhpC",
  "key35": "2EAbATBB726xtC1wYCQgg7hbfTy8kwTriapUZ8Fu1GT4RiXU81PaB35zwia1jN4XK677Yy9dgJTr8AkhUR6wG6Ka",
  "key36": "5qmeECqtjVXPW8Ud84MQ8QbfKfdSa8rFoYWjLMkv9CnxxkzJLpHKSgQqzi5QcRmNHD8wy7MsoED2y96k29RWUhjK",
  "key37": "2QBGGRw85zkNZTiZyoS5Y5pBYq1coZim7L7RtZbFa3paL3TFYJ99LGdaLQnbmmz7Qu3Mz17GkqpvCtZjXAKyN3Dv",
  "key38": "5XDoBNfkkrLWiSFhfdP9j9nTxj75qC56NYtnr8BTYxnj4ZypxQNfNDSN8dg1j5hnzRg9dAFSKuwKwbGUDMuQYJQu",
  "key39": "29gtTZBMoCt5csadidP3q75QJupVMD86rxRrfjB7mi6kLrfrLkGhSVfANVq7hG3Sxggf71QquzSXBQV5roDMeUT9",
  "key40": "U6j6vXWaWoCF2n3QPLnbGwfGgDouTKZRubwbU4xtbAtbAr6vieobqASdxBJXqoABoshmPJC3dqFbHVZUtP2ExwA",
  "key41": "y7KUhhBuKZrGajXuyp5xQXh4oMUYyvqyRFncL1nLLtEdaNZju6MWWKHsoENUbUqvbNcMWy4pNqfJABTSyEK6x83",
  "key42": "27dKFgikaSVakNZ9VvFaB2PqDD4teKkWrs12GjjYuHEfVeAnGScc1zG6ayXiDHTpXuHbDAcGNEutFgnu58PzjdLU",
  "key43": "3iby795PJNWgSuv239TRcCJco7gtHSKKn36uG3XPDckXxvxzBxRNrRCzuVsgLyJFT7z5t9bPskY6XS2AoM49aPQD",
  "key44": "5eYWSHeKHpoc6gaQt4MWa9FFYgyqNxeNHakphG4zMVWfjq4FrwqJbUVKjS9c7W8v29K2WatTdK1j1WTCPbfQSAKD",
  "key45": "4yddToNnpDoxa9JWuNfyohUP3MviDK6aWukL4vkHxRYeH4oCyTSd4tcm7zH6bHjfJgD8baEAJsbxwzEbgyDQHTek",
  "key46": "5iWL1UnSqUgUP4htTpbPmfSuw5Rf5bFaNkHhLVZzjxqPn7jGko5gAM9ADJvbTrTp8T8HCgpSXwXE5t38HWMxQzTa",
  "key47": "2eBkp5GfzLmzALUBHLazNxmppTkKghRZYFsrWxd4AEKV41hKJPWBUmoUJ4PgnZpRqmFKViCwY1won5TVcPX9w2MV",
  "key48": "4KBJi8UMzXHYATM8Upid7cPveQT5xZzk11gzc4ebUXgcH6a1Acemt34MGif84LxRv3cbXgG4gUYAooJ7q6sG76i"
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
