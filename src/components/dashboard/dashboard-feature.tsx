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
    "3bQQkrZG4Wyvh4GrFLmtGGFYttkB6Z8BdzY3mhuK6YEDfRm4wUnxVhqpKigJaPvnjskzhivq8TuQovXcHcu1Whtw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57Cwfz4WTxCrJCYKmBjN2GbuXoFxwnVKVz8tL1SCCUXdtHb4H5e3ka2qBAJfEeDU8YjTYN43pzP3gRxVR4iibYgf",
  "key1": "4rbNL68FuiBsYTXu1wkLVLWerzTXNcakZGrMZHfTLLKkRv2332oo8qjsaUV5Sy5gL7zxXVs83s5ur4wtEF2mqNH9",
  "key2": "37hRiQX5JeeVCvqSdjjYfTqWH77kggyJf4FdMz2vDuiSFenHL2Xco8rmK91dUc8igGa1sh1Y8nsknmtKSdBwSyMJ",
  "key3": "4i97umjrhhQRxcr1LNqwAWFy772xJg15SxgZ1yfj6drYKNCV37BzrmsTgqo9HzPiEYsisRA7gHKAZ6dWwChGqzej",
  "key4": "NJX383RpxZZhzSgBZwbD3GgCh99D1GqdGiSsSAxcSJF2zkhiUzNUTxtmoFwN95eoDe251UaYn9LxsXgdmckX31k",
  "key5": "2ekWcSK5yiVXrjMMDvAardHHrfLuBwGDNYajhWx8oEYeFs7PoTCaXR9DgChqyzqKVmxV2BLWGWVsy6v5tp9xWJzJ",
  "key6": "3u7acU13P8cKQdhvymJCMLFNBe5xggQzjcvZ2frQNFtAuZ4AJS2nbPRSMqF73iHaxY7NNdAi6C9MUzzjyiCw7g7M",
  "key7": "3VeSVdN5RcgQzsTw4JRAq5EzZ26GW11ghpYJ2PnFLJaPiPZQFMsrNhfpF8UNQLHvDQjYU8cY5mZX47ePqdP2MY12",
  "key8": "4u1dkW8TGdYQTshiMotPkv65c54kSQnN6HBvGtqLEx2QWWSavCEgWxfVaKVsGyfCrZ3QNnzkiyCBCmzhUzmKzw4i",
  "key9": "43ko5TFPt1BRXKFazE3RriUyLzGPLDVXdUgV9YedTC5JNY1CY9LZfyBRgP5r1BVos9aoBYsMDLzAtR8G83QZU9Mq",
  "key10": "dzAbmc4tPAXjVS6wNsuvWm1AT2r1i3KTpzjmkAtZ4m4BKe5LNXwHdrDhJJJiofCbvPreuHZaR4n1gWCSjDmtwXq",
  "key11": "4dGYAb4eY2N2DrEGTZGKaq94PmKqGZEBsbpDxUa7xGTya4CSza28TGSyBZhgH76JkMKarhDBDokpW6xrfxCTMc2L",
  "key12": "4eHYMZdHLKbAWeEMXfCrmgP2xhbgydRUSXGcJupDKrVCWP3uVM4byW8sKKyTy2k1g9tdNEdCbBLcPHc5diNm3fAC",
  "key13": "PrFgxf9qJA6to7ahS9ce93Ey88x3TCS8hJapwvsSUADmrzqp5gRuC58znM9gexD68Cg2RZZMCebVEEiTTPrLtJN",
  "key14": "4wNoojXDhs5oC5YuQjLtLbSn2uQpAETdEmz1LXXMZyXoprhTEfDudTaVtPUNpmHu4j7k3QGm6uTUSwDW2Vp2UxQd",
  "key15": "3khmuXuTjjFLi5vJc6mUGPbi22S31mKV9udJk5DpdNAzfSQipYzSpyA92DYjkE86t3sqD51kLYuhY3eLSL4E4ouX",
  "key16": "3BLsKnDMCrNjy1NiN8dLkbPTEvDqusbxANq1suXzjhLzV4QfBnmueNkPmJfF9brHvDFay7uLaF5iWZYnqHqKYXaB",
  "key17": "5in2BZCdRKTiqYNrniPsgaUWvyecFF12N5P2LyMu5THaYXZHK2QjGGbrLqMScwruLfG7VkDbSkEDPvgZoy46YwEV",
  "key18": "3iB8FL6rmXpMC4FaEdFoSnr6m1hkS8pLEctWma3yiW6NKgdqG8FEQtLgXkdk8SbHjTTUcMQbAaHesmSU2zgyQyKf",
  "key19": "2re79zKcPh9DeZyhFjfGdKvixvuDM9eqYFFegTh8Hgq5bRLHKcyfFfEz62s2mXtqWZSE634roJSkqwFq384V8CXH",
  "key20": "43mmhESBrq4ZFFgxcvB3dYGeK1kNyixhQKGcdAFMmY5nScGUsu98kVvD8XC21QsHeF1M4fxpmQLks4UYxErKV37b",
  "key21": "4h1zAGThWnB5ctndHJcg38q8pkRAFwmqmVNBFLATA1yfzqqaw3v9D5ASjrcLyKJMghaGe6qbyykqtG1Lb7vZqRkW",
  "key22": "4Re7uqKtwnKxCNHGiVC9uupEcAoma1Z5QvyCTn6woS8ZNb45oBwSSKKnFdv9zyx6b64FcTQFmdziPx5CsiGRbfSb",
  "key23": "49f3HX32piBbRR6FEtbWZjYJnvTcZtVjZ1P64THyXqceF97TvpcE8BiyZGr6Faq3suGG1VoqfomAvGvLLa11MXcc",
  "key24": "4oZo53mc45FmQ8uB5dcmYXWZQ8rYUo6LEFdX73pbBKE1QM3BFYYkNCFUzrpz7oskgt5NPYiB1zayTAQyRtXisP68",
  "key25": "S7KuKWC1YKkKeXQZwBm6Ky1zuKSc31aF2SRhiU8jPa4Ttw55wQ6bsaU1BrR73d3bgLNT35gH2FrHCzGhh3RdMCC",
  "key26": "3CtoARMBNqVvThMKNSv1uHvAeJH4NehDe1mka4wY14DZ7JkHzCqGNFLgVTT7VcTG7dNkw9hsWGu1fNPcYHfzQ7RW",
  "key27": "4ZTXSgwon6qgzZZAQePviuJJJ5o7mULd2VQnNevndd7Ta9RM1A95miMzUaP9R4Qxx9WY665Wc8Ycy1Cn1Dzbx6ED",
  "key28": "4oLbq1RCdtkQZGWYUM7AkqfgBmUGVjSQLDKCkHJ69EdkBjGyjXbvv7tDqH7C34h1twxhuqPXDqqXaYcLYUfSQ2xG",
  "key29": "35pKyVPC6i8QVKhWU8MYTwtAT6RvFFKhDyKBh47f6eimqiAhQQLzb8MFqJrGowqdrtkAwj6a3bJJX39ESP2e2vaa",
  "key30": "2iiEQjEmEvesqxZ6iKRV3Dvwgq4ZfVGWCrpRVMPHxBeo72GQyeQN2N6E838kpPHGttJtHJodXBgfQ2yzBKjRtL1W",
  "key31": "5JsJRTwNH7zUy3unXqk7R1Nae8CrdCfYzAxBBChVjccCuiCktbLUwuhWpPJ4syVrJEq61NdFbL1FfyhD5t2e2pQ8",
  "key32": "4zbfqBEv7CvWx2jMPdtLqqgGHckQgxRscmjYykktsHupbWgdDPjMGX5fgRu2moHrRVGUWBeXbKyzrKqQtwy4evrJ",
  "key33": "4hrmcUuvsjoF17FGaPRJdycKAmYvCHxYrXL6UMGobxsbdqGLqUk8YoZGUqWjYj2AzKKCCsPYjcXW1ibsfrfVqHZG",
  "key34": "5r5aikakmerEjbarCfJBKKxYGi7SVdXUw3UNn2C2c6DvHxrkr5cnP8g8Fyg8KYELHZavKpqQWRyAZ6N4dRsyAD29",
  "key35": "2J2iKt6JiE2TNJgwLh7noFyCfmFTZDAEobAQDvbWZJJ5LcJi5Kpg8Y6LEgyyyJLf12C5YCgx2vZ9U1zMrdtUMt36",
  "key36": "5DqxLTkbAbmsH2hZipiwmPY795zh8GEbVKvhCZD9b8DUqLHv3Ax84s9rNGmwRoXfvS4T5pRrTbvU7a8FyMyo2bYe",
  "key37": "4ubb9GgAkWkc5ssjJyVfDgmQHtm6qf7wNyRT1xCD5jitq7HxMDV7NiFBH2iB9F57NYhz4N9fnYT4FFDZUjiVSfeq",
  "key38": "2z98pKtHB8gdiZAwrs4x9TVYkNjXX6xc1PZKLNezhFr74x8beiZFQGd6MsGfFLuUAo96zcTTF3qvmC1KTQ42Um11",
  "key39": "2NjnXimStVnATkHxEX7RsDeGWqGHbp59miVVdGZWeuWtxj4Ps98X92STU2QrQWbPkRaUxkdkCkUoPEp7piesva2M",
  "key40": "5QrDkiEaoHoXTbToKW3smqvzm6ng49aG1Mne5C6iszp81FgBUQZrCZpacvdzd2abd6TyG9CDaHjKCRNWGrtk1hqE"
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
