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
    "5tvjthdsPfMPEtoh6SpH79Kis5LRUbuH519TK8rCbVAZxupZAL4TJnb9T47Sz77RiacYiZ4DRbc82RkrjQFJP2RY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xcZC6Puzfuv7kEmXY6CyKabRTD7ZPP39y3Aw3CgPHv5JJSkyjJEapot47cByBsKeBRYmZB9tUgdGNpL2S45ZAo2",
  "key1": "3UqDFoxbxknRSwmAms1bFUdfr1AwnTwQJZk4U9iVuRC3dXCs4VM8QB3W5xgUSqUa9D2gEVGwyc5YU18CJUARXibb",
  "key2": "5mDsZfCkX6C2Ymnd4deciEPQSRdGJk6uvMqrbADB8oKH5kpT22KC97S1V8wu78nZM2oeT4aa13G7drv9NLokXZH3",
  "key3": "4H9sgpoukuuWvYd3VMsTdvWBMcTNu7aQKuhKMab22BX6pPcN4jFPeg31Ubh28d2b3marCmo8vPEHiStbWTw3DAty",
  "key4": "36gzFZq1rXb4k9oLt1QFhfgvETzpL8JpGUJc8ViTaCXUqiVXWRu6umCnHVnqB1VPMdesfQAM92pdgqdnHFsqRU8J",
  "key5": "2Bg4Pgu6Spek3CtMxALfUmDJwXwr1XMsyHs5b14dWAcJzuNj2bZ1yAZBmpjut1Dr45RCd9UWuB3KsSPqYcgSS4SW",
  "key6": "3MRhf6pmGb1HxvhdhwDFKYWJS1kW4k9WXs7aUL2NY8Lz6zLYTg38UCiDvsKuvAiUf6ftjCp6gfp4zN8vBePpKv5w",
  "key7": "3sdWRUJFov3hNZL6nDdjHevf7LKFpvXizmApb8jQ3gacVtWdzWSVyN9RMYovAjkW5x866poTfQvKpGqWsZo9w1zM",
  "key8": "265WdjjaFTng4y2JhsD16rc1d8Uv844ZmvpaRFinAHxWd4WKaiCxWVcbg2cQBwBjdZeRVAFNWSJWkRkS3irYSYX2",
  "key9": "67E82D12dtC4MRdBYhxcAAvKs5SQXofgbqZbNTihiNF5Vz3bEqTz7XokYLnYsSkWLdBVXujk2fZZGtXtXYMRh7fi",
  "key10": "67ocjnE12CBjJ9etGRCe2LPRnLPbb8TyX6oeiNqUqNwzULTVmiVS787BnCUNw7J7wnySUtcUAyApfq54soQd5Kdz",
  "key11": "5NyorsBZBVPzBbXcy3YQkCgRqbdscsquneJSibEi7DC1phzAVGdPvub6MnKeexKBNqAZ9163SEzUQwjM4XgkimTr",
  "key12": "3UoFjvNvPLve2Ch3fsTMiibNYfi31efeAabwdTohKY7HwBA8h5iBGyk2zLuKdyLhRkho8brEffUrLqGkttJjj2e3",
  "key13": "3bjVz2pt6Kxr5tAauH54wgH62qEdkYhmz42WbeYYUNJLcF9rNjeev4X4wYrNaaFhuAUeydQGUhGgRNSBRTU1XR4o",
  "key14": "34k277KCPFdKamfvXgT21QaBuPDNq2nizrGqYCGh1zByYAbJ4oTJByZfxTwFQLHbpCzqYaZRvYS1pDHpT3QuRm8A",
  "key15": "5vRZXLTMRJDwyPR1VqZGtia2yeBqGsQyBTSYu3dVSepdU5VQWGszt2i6xW6Dqp7KTKd95VEnEdJjQtyGeBozSnEv",
  "key16": "5ND66HFQy6efyrgFDQiXnqx1eYKFFEWVayNV4BvCiwQmn2xXLnz9nGoAZgNTBGYKjxvvyodEBpRpi89cX9RqiKNC",
  "key17": "39CQTSdHuaFJ92TSpzrypdCKyJ3G4tcpPhB34Sjhrjqw68oRRxRtEjt6Ey8WFuUDfY844VveWx6Y8wpZR2e1JapT",
  "key18": "2KpJ3gvFhu3gRc3yZb4KL8Rbxmw6MZVAmGuZ2wbDjCDcqCSuZjc9SY2DNs5KfP619ueqkzY7y8wx4XxZr9dH1TPx",
  "key19": "2iQq5MoLYgH8p9V9QvRLrDcwFDWLbP1wHGPKeqMmoJ1Ljk5WLfuTpGTSqJa3mpN847uBSHxa5GH1wgLib6r6erXg",
  "key20": "5bdfJjHd9SaH9TS1DUthzNioZpDy6WtaV7YXt9LrmhV5WrxNGiHAxDtVpLnEh5KNTa6WWBvSbt9Ste6p2XX2ao3K",
  "key21": "SK6CYjPmZt5kYhvWocqKMDUsoqhfhSGjWn8W98rugckf8WKzWhr3TvQQQXNR5oB7f15Rj6nr44cNKoCGPHadfCW",
  "key22": "mYgbpoERUmg3QqWsDQL3gKiPZp9Ak6Fr6ekR1p9fhDnRWYEdHToPLk7dw94hasxdo73XKcAZ7XGYT9E2h41ubJg",
  "key23": "H41DErxz4uqEJtdhUiHpG93dz1jpwiK7dGgqe5CY1Yz169jsbEzxYXiAroknQcQq7PHUAZCYj4hPpC8rPr3uuKP",
  "key24": "HTHJQMvma1b1KEvUnqNWymopQR8NKyZC5niqzzdZ2KwGQMewuVkLqLvfXT4kYvcCRup4qPz4rKnvFF86AexoHuH",
  "key25": "4EBQHnHUJrHXissDutn67DySH5vKp8aXMLkZZwwRe8D8bGrYmG4MaMU5NYiHc9krvgZgKQaU8bGSGV6H8H4H5HGY",
  "key26": "3uyj7cPSuaoNEoxTMq3hj7qBxH1P7vqQMY4CVPLyAQzavGLvViPMLHc48Z7TLR4Ytox4VtMjvVkThUJRiRbgJTJu",
  "key27": "5mD7qu84V7UZokQdcnQqTQJ5AgWGEcNM5PfakDANT9uxrSegXDWr59EouT5wbFUxhtVqUqEPbnJ21KZCrqRqLfVq",
  "key28": "5VoLcNirFqABRgoGVULiN5n5rb3jQtmyPTD16CXLnTfbTChvZRoaQziTN9JWRwUBxbXb6dXBEn28nLFfZn75KpS8",
  "key29": "3AVyHQPSZW5xuSXuHWappruSE5wjmnedaLZbivmdXtRtkHVkvVYWeFVUkZeCXAgHj6vGRoWfaHS9HdRkmUJZMmX5",
  "key30": "2xQfktwy6xhidnaWShGMvGpWMaaSznuVAyS1vdStaqX3EyndWgHgzhBZMJxyuft7Z9TzKqbJnu82TRWQeMBuXrb7",
  "key31": "26Hirxc8SPhJrMprKN5Aioe57VicN8agg21RTFmaVe5RCPXYvqEk8fHux9WWd86BvntLvETLsazJAmTA9Sc69U1k",
  "key32": "3SS5vEhiJ6M3UyQD4Jiamg8vQVbo38MUv1HGrGywa1hHPNbnvoW3Gykx8RD5qHbM1mXxqJhYPD2xJWSbMJj1WjSv",
  "key33": "2BNgm75x3PY8SrMvatQUWTbMtcCAo33SMxXBF7FFAF6qan46Mxe5frcNubrBUUQaVjjRSbW5JBhksxzYMKrp5cHV",
  "key34": "5g7hwJss7V1qqvVxR92TAuou9v3bdnjFD9H5oXD2doAX8AMSwJ5Tc8SuhZz9qjZG5B3MeT2AYKhdWNQ8PtD4mi46"
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
