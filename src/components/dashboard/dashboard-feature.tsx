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
    "2C7dm4Dyq3rp4DEUPdReNsAdyUFBb3tok14VhFQpWci4Fkhg45tgXjM8H6gEFCaXRATCFYZXskV6mB1ruxp3U1qF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35jKj126RtvLjuYA3H4bo8Ex2HhDGCf5SpTqmtDU18tRYxFHvNB2zrXBsz5EAhL5ei7Sh4FmjYcR6FsVUkoWJmF7",
  "key1": "3QGT5U5ZUhbfiaoEQMPvsjWVUC8YP8SCuPcjQmeMgFEn7FLV2qkNBYWya3pQVZNskhfBaHToLhFVCkjNF6TCu9SZ",
  "key2": "4aAc4UqoDLXR5MvCasV4VwLCQ3yUuktS1KzmjXnXqTvifPtrXP9hsRzjjFtmUb89zbVGcsvDGfPXrePKzzSsvEd3",
  "key3": "4KYqYDtVTxub8v2oZfjnEuKTdVcJRG6eegVMrV96WQZyXhST3BUaGiCgtKYDLWDq2JmRmPeMkrZmQnszmDUeeYAi",
  "key4": "SST5Rc4i5mt3XhKywkx12TgXFVLTj6fXxaxesS9tHWWzd6W5PZskziFSPSP8VTQT8VrkgFH7X2WoHhLz9gFSVTp",
  "key5": "K3uvYpjxYUwavEGmfMRKW33wrvqoBtG5QbF7VNQFnd2koh3CVH78vsp5KR6zbgmCKgTsUyDv7v4PWYaSf6ZYxCJ",
  "key6": "4zgge1xt48nFZFFhzx7e1tpXGRJqMNYWcmfHoTfwJPTMmYaSJZgmaN4rpFyCZDcRoA4xT64z2uzcWu6X5q9xNPVq",
  "key7": "32TdsGCvdLCh7hcMZdwa9nXbu3AFawwArtch3FRvoNLXrjJ3tYy65TWJCAZewkAmyLfEGSwbGGsPEQ37MvinTRZS",
  "key8": "2BAPiJPk11TJtzQTqkCFA9HGSCq3J77jpsTCVFArvCfGJtiqiKFZbD1hrpqeYEnTG5rtcZcZgEhsGZXg8m3rWrz",
  "key9": "4BDVqacg2e7R4JWR1N3NSuYrnXUCGgtfAkPWkAAUDJczpxirs4KQ4BwfhiGXs5exsB2KGvjozM3mVVc5wV1mUPoN",
  "key10": "4HvkXvchz22nrRa3e76Kct7V9MDtEyt59K3bmF9D8UW3mUnURKvmWqxVzcpCGy4c4DHuzuBAc4JXD3tgpFpRvyoY",
  "key11": "5jLsMMomnARb3BEujAPJ4DrT9Ss8gEeuqg48pwsQzcuGxyNJtqyzwo3WfpFAnPcZEgPCMhBaG61ufCPTXCP4KMUW",
  "key12": "559Jzu7FXmnV5rPYKmXNeCAS9VBVguuU1PySosKUVqUowydCMxC2hhuscHsXsK7uDq9aAbVNnxoskctedP8abSn6",
  "key13": "3AKbb1HRV67K3F1ZcC2seRiyYcBNx41dMbWiXpCWvpSW9LBmxPbmMTdP2T2dWSiN7MNrARRM18gvWmAGBToremMK",
  "key14": "67FSoTU2x779hybni2SippZLZWPXxFCGjT3sEa3WWya52epHt8EYQbdnGFiSk9BLdMkRZVVQEZpEbX1rzdp1syHz",
  "key15": "4sAjGr8jA3uTVUHzNNpPGKvKCbUPPojGuvk5BKtdUaLyaqygMAMgpG73ypjeZbG2SXuQW6ZX7h7hwyUCuTRkyq9N",
  "key16": "49tW79EezQih6RtxuUHCj3n1WcAiKXSyHFCcUUVzRRp4nu9DLdmerSfahHhfQZ8RnZSQcBQMmFJYoFK9pZtJ7aAq",
  "key17": "2pduU77CUgJYYv9BSfd4gMXE7wGTMseByj7mjep2BR5yRBaf7nM8kK9aUGcmUXR158xa2ZZppVYbu8UTVamVKWnX",
  "key18": "3nX9Utr5E8G1kavbmiAzV48hLFDesn3uRF8PB5KcNwUmFNs4eC1mKzQnHZLabgGPCfoFJbuBsvA9Lbyv8PTKVAE2",
  "key19": "2oUqvfZhdCh8CX9GBk5T7gf3T5bzUEop4fFqCTGvowdAePMtZxcU7k9XBAG4Ngpjame3FTLucYzPCbyNXawZMhDq",
  "key20": "4uwR9nZZYLLHKBpmBMngBL5MDUSudo6RVf5AQ1ahKFkj1pKj2zaf5WMzzMv3qpZUhsvrHZxDZBcjWYhqSV7F9b2f",
  "key21": "XQwFAWcXeq3esHupPV4DnbHq7MddFM5THdvUevncoEPuoRQ6fNod31LE4Ys9e7fWKxFDXonn6k6FdFnjfA9GuXC",
  "key22": "3fpdDWSn5nJGxdsqoiCWcCvpmVbhJQtWXkT2D5KVeuiGaZPuF3KHjEGFN5SQpKQmrkM67y4Qv8Skh1u2URDpEeqd",
  "key23": "5HJgdWbJ2YbzgvrqCRQ7xUz8Zcpx6g7KSzp1BGEtZ5BNSXfSEcGbtt3gy9noDq6kdHt9yHNWs3oopPqQqZfoiYkN",
  "key24": "4UsU84Y8W1NZw6v1CB2bCHnZYFuFguEaMsq9RDJ1NhtCDnzXQd7nmed4rTYkuso1YuVqJMH1mhRy3xcZTnMVHt6h",
  "key25": "3j55YSXuPCFneNPo3uXfrr21KnFYzGQMxXK8NiPsNK9tZreY3JEUTnqKiHhzWzukVafTJc7LRCYnsn6ctCD6QXWc",
  "key26": "57RvToBKAeMu3XxBuK929GL1Zh9DZH581eLmrrow75ixkwpJNKPBwPF9fNzbKxrpc1bNES7YfzNNLHGK7NSVkquD",
  "key27": "3jZPHBU9K9iS5Yh1XT6v1N22fcgYm4zE4zBrnbPuSZrdyK8iXwyAztNxhMsNMvszS11Frw6LSvNg2GmBcP2kwnh9",
  "key28": "mZBUSVuLN4zPGSji6NYDonaJ1ghZFZL2jvygT9CZA8BgArLpX3r5RxXfDz1DW3ofkgZajD91YdRfRpve6VE8HVg",
  "key29": "5Ey4zgr1vNt4LVj3pGfyMpqxX1F4nvHCmzYwYqCHHhNmdNyjVQtxDWRx33Tdb8ZAJjp5mEtuneKeYRBiVSfi9bgv",
  "key30": "65GuQrTcPbuv494cPQKYnepkRk7e6amD19tWR95vRmUv9aZ9vgrbmQegPKcSkcMua3n9GfE4zEQMkPZY53667deJ",
  "key31": "SiWk9zMXGeTp1b537dsdKa19XFPYHSeuuGYcLCCgr6MVo2evcfPoECJdttDNE4UxLAvN2V55exQi7t697spJhvv",
  "key32": "3M5Hbb5MU9RbtUduB2mWq2BmFg5BdUnr5GqEXgBWqZ5Y61qFEZPBuYFxqRNHghnr4GZRu1NTMtp8Cuja4BiL1m7t",
  "key33": "4zQ4QfnGSXaXiVktcQKSYaeHT2NjhUrH1iSoPPvrYA5ppiXNvP3LeErQFovrHyMU57m4aneQivFhCeoU65pxLoj4",
  "key34": "2DofAN1tnVvpX7CvPqaJVAHCDEBXREGQWTxSTFNSBMHCYxBZ4huZdJfdJf15WvU1K8B5X4rfsFfomCSCd541EbjH",
  "key35": "5aG4CbK5DDcAUExNWuXHC5rhwtuZoCzycD1FmD6ZxdEyjFNF5MYPJEme7L24VziubZTG8ibJenPf2tYfrqLpSzWR",
  "key36": "4QiPNvzkSqN3ma8HUjQ4nJq3qG1qdMsArYEG3AyQv21tx2Bwdf7iqNoQ86yQs9XXwWoFcsfVwhPD64kZYqjndTh2",
  "key37": "4o7PzsfRPXWAYKgkr3PqX2n4aQQmFzt9gQsbTqWp2eumiZmSims468q6X5GzxctLCGfp7E98jQo8LuRKszEZ3HpS",
  "key38": "4PijMxZZGWAAKDNx6Hd5iaVDXhvDmZxp7R2Pr6yuMQZFLEGRhNzUmdEZG91gn8QLDvYsDPYFAY1ai1MJmsta3XEi"
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
