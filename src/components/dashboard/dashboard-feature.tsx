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
    "3KMm7npcykhQgYnefw8ja7eGRtd9s3n9QyoebXj152pqYknajtJTmSa63ebd31459HpzPDrNF4WFhnLmwAut9rvS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FTUd2A8FPmFijdNbNuuygrVf4eLkg3BLTyxxo45mXsuA5kxKvpiXGcgQFqRpResJEVQMjk9rKtmZpbye26gtHro",
  "key1": "wto4aPhREAtqKD4LJL2ZJCDMNwk5KY5vAdAk2qGZNrnqFAL5VgpDeHNujyzeArPputVAJp7gAd82g45XgisN25T",
  "key2": "4iYDGiSCjKrgtUMNn7sM2da5j2qBCgN6kRPDy4pFGYMTo5j8sPVjAVr2xF9VwZdnivoQWfWsRdYYZgBD9HkUNZkg",
  "key3": "dxE173hvsrpbtPA2crGd4v7zoWtZAgrXbZgvhrEtzzM8WWKZoBUy1xBeXzpyWBrkg2N3AZbVjMpEDb31By8cK5u",
  "key4": "3KXiPaZktrLpCjXZenToXHmsJ1RbjwEepr5eCm5vqXGdoNds2MscApEJV1fohmYBk4JJc1MWX5RR5ZNiAb3dSSXR",
  "key5": "kWGzXmvBBEiUPCtmWn4cgdCyzPgJ264K3Kj4YR8VeZXcPD2Cja14zjSVWDcXzGdP3i3MN1h3ra1K7PjjidzdpJG",
  "key6": "4i8jVzGXio8VjhLW3FMcc1sLyAKPkBazLUDXiJ23ggFVwdyZ1FVc5oabsS82nt8mR8zDJkg4xmgaGaVkBXHTSdPR",
  "key7": "56iVTejognNT5gAZxwmpMHTAntNmz4XSoXuAU8PsGTem2bybUptBpFcFbessmXarzgNGhb1NViqZ1hzdwhTumspm",
  "key8": "4HrFyJAJg4Byz9YuXGhbQhfakWwmVgYe2XWVhaeKyA4XFtscErSHDsGdipFWgGVReHdoogZAYkPDYWcz6gNGyRHX",
  "key9": "5qnNY7hhS4gtLfD6hSG1xND2zGgAXkkKDLtwDLUQXfGH9q6xYhQicf6ehaie1b73yFkUFU8rQvrWvXJkb44LPCxn",
  "key10": "PGCwxwZuLqRvaJFQpoEXdCSoCLX5L6XamUM3LfwTbPLoVBRTDxD3heMAxiQDc92XicfZFE8KjHmsNuHrbfbGKqZ",
  "key11": "3VbW2fggfhumcotJ1GfQcTEwSTypqmpxL6HLwkawd84V9dMbyjTfmgcDNVXBbr1ZLnZMFyUFHVvRgzjJFysgbZ7E",
  "key12": "2DJvuh7CZr9vyoMjmxPUpkeLMcXcHECoUiMpgFS5KBmRT4m8cY2R9TAC2h1AceRDtQF4uD9PzgDLL84xmsg6VsxB",
  "key13": "4e7cpcGyEC9q3vevezsWbmbqna9f9P2c4QDb8hj3hKHctWg8AEK6EbWqhQQLHtmAfL9bJerEReb3eAaYGW6ECGAe",
  "key14": "2TkGJzYwobwo2YTFygcunjTmVupZSgo37iTVUNBzhs2Uz6WZ6sjTtUoLstZvGpDWVxjSJPCqJzA4cZmcFSoBhCTW",
  "key15": "3h1mqcaTK6677XSCuoqzBWiUPYEXfDZGbQrS7gtBaRaejGYrTg5mNQnM8UZZL4MxdPSYiQuyXaydpEq4YnJjv1ci",
  "key16": "3Br4iUgAPekhekinLzbKgKcwSA39FR4CKuZtpsNED8mWfXyhMPTVLmhiTs3BrPKEjZUwFh9GBSqa39CURbDmRFyN",
  "key17": "5XyFVoiajCipxpjqsQL5SrFrHX1j6bGYFWB4NVe1prFZPPrQ1RJ8Tuva6W5LJTDP8m5pKktvyCBCgcoBiBoXb7BT",
  "key18": "4sJ9cTxb4eSv5pG73iveAv6j2zUJv83J3G1DKVVjp8VSKYxqcpXkmhvtwB465Dwz1PKZ8Ch14HNqdxezYELE2LZE",
  "key19": "2D3wZTg68spfpWeJEGRoUZrSEJh4ctrbxT2t1j6rNPQd6jjceTTpgsQwwAYUEXbrUPzV65jBof6TCCiAB8d8p41H",
  "key20": "2KdgtqSnxgkjjYkFqx8Q2nRZAP45utnjaSJeTetsPVmYzGrLwd4nuxVewdMRjHXkdkg1bF5DtjTGyUCPMNXyPU9e",
  "key21": "zCU5rtNwyqb4jZizfx1gEnWZFpHj4YqqrneKyDH2MBkVvSSYQqpdS4GiyWSouirRwYJuzkdKuPzuvhjHFqWF77v",
  "key22": "3wmpCveAX3JRJLJXLQtsMfq48V5Dc3jnGHHo7t5TYBCuC9LZxhYqj5qz1v4bmaRkb344SipudkxLZmLP6kwwmxV5",
  "key23": "3fwrgCxA9aNKcbb9JGX1zqpXyj83aSGSWYCkENAdUg41kSVUPzP2fP9AnCo67DXtHqs6ZNR1u3qnz9zR3YeSpFSq",
  "key24": "3KWa5NZkqbAMLtsvYQUNjdGAVhusxJZ28my3x2jnEZ3sPeW4twnEgqc83kQ9M9no8Qh4vEVZXmTg1JzssSQc1WKW",
  "key25": "7pJSLLvPbSgWdyfPKcdqBS4se4Hqzjcs6NNPHLvikih8P84KkWssz9NhNDaTyuVQ9fcNj2snmpucqFdy3Ecc1gP",
  "key26": "YrRbA9GsvAUDstAs9kFjconwHVZZJxRHc8Nk1xmyvhiMmDbAEoVHjM7LdW7rBeR1cJmkszsZixwmC5Xw8qzFuH1",
  "key27": "5HxT7yCHJHiFz2izVuD5e2oS8JNkak2SmJw2t9woW3Gk2rFSZZwrKh5puXKsK1uCJiHPfFWBHw1XUhvXygizBTrG",
  "key28": "2JhJQyjPius5J73ZmJRsv9gyFatgKY8iXwLhPSPQ9rsQj9x1kT3iDFD7PDGFvQhZWiGDuAzdD2TknGAjQYwopq34",
  "key29": "3nbbh2buCuaRgDpTn77niKecdYkqaJTGzXdyuAmNHPrVEPNBTz4dUmbFL8AUh8jS9oHF1GVKr1bDctVZBjpf2eir",
  "key30": "2rGGX1MJPqK7twk6Lvt19p2hxYWexNFEVW7TqhQbSnK8TLgf4VayoVVReXYZnw9MQ94rBmad3TgdpTSUXPfWSwWh",
  "key31": "5mfZqAcWKMafqCDhqFg3Cjv62tcpFXJEaf3cAw5b93gBZUw9ATpuHDWhPxchuuCMGufDTt9ubvoJ7WQoU43E6ezK",
  "key32": "4H98wWE3BkCWofbZ1d7y6i7RJ6VJMZD8pUsgGzGauUA7LMFvvUvWSMDQgb1515jwHSWcec5fjHU2Xzc1ypjVkF6k",
  "key33": "33z2BWfAydbMWoMazGQMgPC9QswgdMrGZEdRQenZwy6eKAp3xbhAhyggR5SD47qsYZEmnk5RsaTLz7f9UuWuoobT",
  "key34": "39jREGMjYn3Rb4kGGdiguQK1Mjqimn3RWFuCsapSaABHaAL6Ee5yF69cmiGhutPVgTxVpzxb1e5wPcjj6vqx1kyz",
  "key35": "4gAWrEEnSCoNTgyyUUyCzoTQjSesVJtkXBgYUgZRwwtJXxM2wkxr7TLRVMtVbRfikT8RvhPQujE6nnND9QRuEKD1",
  "key36": "5CLFjSWscpUgA8XNDWY1ZEwoZCXVj19gjnSZ7cRSbdYAzeibjQtFBxDyoZKdoMdwgRdgAeF998vPAdfzzw9EfhKz",
  "key37": "3V8Q84j257cQSDrWsqbZEk9qzdqQ9G33VcuEXWH67X1cSz8ewWLkHbezGFEJRrk4zoNJAemcaiPR8CbbdHukG536",
  "key38": "5VFbBJMtvGrgaDmpb77sBM4audzen2RxQR1REujRxNm1hpx6tB3bkxmMsbEbmTnpez62JEBi5LRETP5r5EsdPo1B"
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
