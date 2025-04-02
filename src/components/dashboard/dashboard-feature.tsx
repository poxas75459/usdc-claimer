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
    "SQDjvfnrNCnsozpcH3P4rB2sUS5wkmqZA7YsDVHYxU7oYGCfyGzyA1XiTFWHEHx9DwzDonKco2w65ybwk9dMY6K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LyXMUYFDQReDh4YMizRjcGN4F4dnkU7zPKjy3dFh75xnWHq2NM37RRKPBxhVLv4bGe54RcjCVHMnCgY1FGv3BVq",
  "key1": "5BSEAHyn9e3kGw77L5UkthpZ1hoRvpc88roo22WJcufDxtr2VsbK1YBRc5tMmrTjWJ1bdspE7GKQc8fNM6U9Wkhe",
  "key2": "2KMBTTJEDxQTYwxu3AzJuQk7DR6yw2w8jiqwWCXF1jJ3rhK4iDwxkQuJUQaVGQvTN2HDEjQfo6CDvZfotp3v1YEA",
  "key3": "2A93Ccvg3fZXLZyQWp4NSfeg9eEXYV2zkPCNXTG7ZoGzxJkKCH1VBaGun1ekE458ib7oDLSE9qW1L3iomw6FDzcm",
  "key4": "ReBeYFZ4NecDCMqzoqvzUwG3Mw1FQphG6koQcgkgDStxTGd8DqgTRsUh5AeGCRgi9DNR7vVg9QYgdM7CF6QjHts",
  "key5": "4kMWuDyNtnZ2cvxf2s4gM7uAP5SppitqLG3cEynvSiyYuTw2WLN9JrdqQGadnn2CicWbo1BkBxAajpnuf9Zw8CfX",
  "key6": "DjHzMyePr193HpfGYNqavE1NDjFG3DTWniTAJUP2Z9dFqcxj3v46okBwCtNRiSHdeNL6JKH8vkyAwzYKXn5VkYF",
  "key7": "yN5CrDUYc9zrxqKFPdAMP49yrTkEPp8gysnFw7KaALrdUDbRKs3ALaWvZc2XCazfRsXVZ5qPVLPQycRy5R5uQCy",
  "key8": "3iEPFaSoUgLupqiGNxHJnVs2RWk28hSX8GpgswGWh27keCxjE1UGLW8WcBr8RbK1ifcDpdji7WFL61yzDVoretGm",
  "key9": "qVwjkdagJ2apFhRdpLRtJa4eH32tZ28d388f3EYBG28ebEQbBYpSg8E7vpGoERatiEeLtMCD24W7HJjX5xgR47b",
  "key10": "49z4fTJq7HW2v2M15ZmxhErLP28nNGS7ZkaXGGCdyBc3327HqheJAyenmk62wGyzaSTKrRNzbmZaLMjn3P6p8a6g",
  "key11": "3vvbtch4emaDVST77aST2njTRFaEbu5VAQetznSPHKFdw9qQjQK147anm6MGV32QVqbNKyn8fWRDoqqJWWQzYP8z",
  "key12": "47otZWRihtH4t9YkHTCN9MaeZyDpMjFNApvEp62ZpbgzTCy2TxmbxLDmiWWEYtFD2iW4kSPrNhkZ5MrWsHxwXRWH",
  "key13": "2sJAA18VuEoUKk2tf2KpuVZKsVyvEpYhrAezzT1i9L6TmHyW4jNRYA2egkZMw56pUbfdxc1RgajUk87ywZUs1tpo",
  "key14": "4pMnUZwSyDhi7LHsoz7X6LZpzWNXxa6hBABYcc7whoiaxrvuXEQvhExdZdWdhenPf2QvvyzihssCcQE6fra8U1Zc",
  "key15": "2DssCxSFRMRMJwy6rCYMVi2TobHxuvzhJsghXrgFAt5bocYJVFd9JTTQobipSfeKEwPwbRUVGspXFTY8W7vLUJzA",
  "key16": "5odCgSYo8Bh2VsAVMzXDES7FjDi3jfRK9AXQNZy2XiE1ZfFQxHCCZeEeS4PyG8S641jjpC9w3QepRKxKe4qXDFSX",
  "key17": "3EcJdwTWhkHsYns31UpduEJo9eteJmYaY9ihgjKVp8Qd494u6y1htCyrGUgU2Ktxyvi1buo8sFWZhBjogNKkcnQh",
  "key18": "4QbTwWHX1YF95YeLXxC8gkz3R2XwwrUu6KLY7JRnqnGyHLf7jMvA3zKd595ws9s3g8zHe7eNQSR1XcVCdP1XQ7ec",
  "key19": "2zWbakq1LVoe3TxA6V5corEFsqCWQo6yX6KfA9GPPNFQsKgXcJTDDbCt9kH336Tcj3wEi5ukBs7d8M5dAutpuezQ",
  "key20": "cmSQL83Vvb1892DuqKBGVXKeGEcwuPUeuBmZYJF75YmoyBi7b64n8Hz1Bmsp1bM3tjowH4B5aUSkpqxAcf4YVdu",
  "key21": "3HWvZhtCuiSXbZWEBoRLsZMoukiX9aVkznSxTDzhPSveVUThRchXmpSKMW5R2htbKwVEtKjkMHuhiU8m694H6pM4",
  "key22": "45132eVFAJa9zLKxy1cWkaexnP9RWyc5sZaDAD5FQtCKxCxyzSrKAMaFM5hf2y2vqjhGtwqqb8MNmkC4ePKPxYEm",
  "key23": "63fgDE6PnPj5S4MFzJF3f31Wi4dPCmKQHCG7Ms7bizrWRJ5G8NcVHpnTsUDkRRJHk4fMxQPqMhARmDUqYTrVCmkh",
  "key24": "qkNR4PeGY778Y6JUjXbVVXgECusC85UG5tDn2ppJ2wBZUzZAYzPryknuiax65pwTpTCgGGocDQwB23JPoMgFTes",
  "key25": "5ANdHt12nBadQo1xYbZoo4CgkD51vKk16U8fXDLiUcxdA2rXiQjg4BDcXNFYwNpQY4znnudTfk52YKiGccgMfHtv",
  "key26": "2vMQe4g9Y6vNmYXQw3iQYd5fQ1WuKTcdjktqfn7rhNmu881PhkDauaQR16dbMtNNLDgfS5u65fNGhsoWucauuLZ3",
  "key27": "4ZG5PQAvoDbdiM3a9sLV6tvZwi3TpWFEUzhHLQazw3nyzM4Q2rrW6Z5VukjiWS944UkrUmGq2YNq3bhnRQ9qYG4B",
  "key28": "7CtBoXNLxY79AbNxHX6iena9x53RCpvyo4WSqAPHY2oUnAjMfbhQF763uNxKw8rFhpT1xAZ4WCswK3tRHkxSLbM"
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
