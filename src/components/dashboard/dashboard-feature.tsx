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
    "42hTiemV9YJGrYwrP4iJgHLqXewMAqfU7iC7NeNtRuodGTJ5Y5ccq7u18pzuWKzZBzyPKXUKeoKunxS2u37LSodd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CnmtW3SpmkrG66Gjc7MGHJXjFFvDYhRoJBAEuDgtg7CFxDoHQ9wBasz8vafeUpVXLkVtQuRXFQfzf9Zz8t8g8hu",
  "key1": "2WfvcuxhUZeo8jD8i5gvkUM8RugAftEhXzkaJ2C6TcaCEujqhZC62deEoxsRTDW1gGoyjhieKhexXwhv6ZLskGrc",
  "key2": "nFGnkzwGSCr3S1B1Z5yZVaUUSSk74LzkHQvxVfiC1W69oWPEJCgL12uvpSxfq7izWcNgwYZD1e8LfgWHo7GKJr6",
  "key3": "323XM6ShXxrNaDhhH5nXk181FLkyPot5dTcfArL4AEVvKph89NXXVg78AjqL8kMhzWGMrWZ3YztQA5dNBk4yUrrq",
  "key4": "2Wc6a3kyRZavmcQTuHGNPzkkgRtZpdeV5NWBUq6gcggNjrzaMhLdZzC4ghivRgyZ4vCMFuMT9pZYj4Z6jhi3jqGg",
  "key5": "5Gwb1Jkq6ZDMFvpzngNBPZq5Uj6QLyUYzojf3upWj9WiKmC9uZ8RptsjcfmR1G6LmY5VBo9QWhacJa1QbzCtMznU",
  "key6": "3sMYimTRynkbKbP8AJYm9KhD5ipxLb9aTy9okRvDVc6UY7odLmqyEusRZYSwtjEJpDmCzdFsVMw4VmuxQTUtwY2H",
  "key7": "3Yx9xCVVucii78ayKMCvEh4gXA989EKrFuyjERiipf2rJWggx2a2iimrZ9w8mGCQNWPG4w7eDv2q5jApcaD1o3rv",
  "key8": "5LLCzEtMcznZtW9NRwCy1hovF9AEWMC2MSGEpFsE4D348bgUkUkEo5KXWBQsEDK3mKjPNuCLhwDSyzPACEAsnf8Q",
  "key9": "K8pStZaAfVDwyZEhQdVbdB6bsPQuhpmvKVv5YV9sSD6yAf2ViKxvJNDpFi86MRxoRX8BA95tRUjComCWGzchPhe",
  "key10": "2v5Krjq9paADFtd3xMaZquQEW7vHQxswYSDX1MCDzpkQpL2GVihc5hGotr2zf3Eos2XaXHWqdKRPse6Yp2uAwgNV",
  "key11": "3Pho5TXzGmh7UagEmGQCsWHiT2jkc3UZupGRDQbqPfwYQVs21VvMNz1AUpVf14NCFdSZhG6KxTKLmE8fdxEvJiGP",
  "key12": "A9mUKeCYWaEzwZngoRPBjmbXxLurrbnYnETFSh746bHaMoQbQrHMQeH7pdEpvQdAk8ggisTJNzJpcaVADCfKExZ",
  "key13": "2bUJcJPQHYx3KHxvFPfM4sxnuSiBHyR13GxJmswXXmzJJj7uirRx3uAd33t2e47v4eCgZABtBzKCg6waFwPdk4pk",
  "key14": "M7hggUCXFWDRFdB9Ba9AuAXcVGRZ8XxRMkZqHRb6nhytBC36xWZuTuiUnyBqZZUG2az5TEirp4iCgSDSyiLitcM",
  "key15": "55zXdQWECViLrZMxjC5DZ3XcmhWM5uqAZRZbDDiJ1uikGeDzixzLenfuZhGPdBinagx72psuRQ9ceCgjf6mHHdqP",
  "key16": "566zcSt16rsVF272D1WGMh9TgwJS3KJYX3fE6p83xSJJQvQz9FjeTo7AWbXBSAfXsSoLQcGNtY8pJSKu4gq3kLZM",
  "key17": "5DB3YxowjzF8HTfMaYDQD2z1cFgb8tHmZXGUfhca4RZRn8FuJCAc6zDMAYtkswsS6TGmZ8nXxAKRNMr6LUQi5Eer",
  "key18": "TiPu49V3dttmZtP7vMYG8kd6KWXMc1ekvbRdYXF2BG6L7VxfGBwkLviJUd1X62pDfVy9KhbRKCXZiKimqzP5qz3",
  "key19": "3cfLZwNX64jqhXAnRkVYjzNGM2eke6Z8SYwwUYJeRt2D3wuefUajiVKCWrfgGHxdQPoCY8QNj9zBb88ENkKvwjZ3",
  "key20": "3iyXa13dQnREX6eWj6hgkcP5H53NX8WdSF52VwMDzfvFis8bW8bHhGcNWqk9hB837btA6gNntQRhd72gj75kBPGB",
  "key21": "21xgVqjqFzjhDNAr8rKkDHCMGJtRXC73qMge9vgXFGbJZ76T2RLQCNaE89jDCA6kmKouhWwgXA4ZjNobVzCFioC7",
  "key22": "5JX5hYBuWQTJygTTeU2UUSUxhPpeXNYYtkDmNJLSXifj8CdkkwbQfEGomkcEvnVgPsNTBe3wrj5ftdQ2S68VTcei",
  "key23": "3V4kESXdZxecFuhyqCyZdsUX94UPDx2dYYPikiDWf2YreUBCDjgtTz3Mbud876NDQjw28pP9UnXmXTQKHu9FimKa",
  "key24": "7Nh5vxMXwJ95KmDt1cZBD5XJTjCUgE8ySF74MucxUTDp7ff5Bh9UQLUE29q8vhbyPZgMprFead1gt8bWrwouAmM",
  "key25": "3stfEPCkxnJFjHWirZKv9QsdfVu1wuCwgrjwQrXYBFH9W3zLTz5H93ka7FMXJitFYyTzyvg2fjjDacwVk4L1z8Dx",
  "key26": "4dddYPMU7KYmsNsPhTPKz4K6M7D5SDWdLiMWAVutwtNsKLby6bm6ixsLEAxfxgQLkzKbJKcKFAzNzs8Zg9KnBtj3",
  "key27": "hyS6kqinr1PnrZiT4HWyJdE87wb38ZWskMXWwDsE1aPhLcStvhPsrpeMZKzaqXAUG4EKVqmKBvRQRQjRCLH7ibf",
  "key28": "5gbNC7ZpttjgxvMmcLtyi9D2iLbJjpuJyoZ4JWsU4gkWYvDwjE4iZq3EyP3gnLGwR5h2qLCyXSE7ogS5YqVUy2kx",
  "key29": "5ETyAmJPHmfZUdoRN9cAAoSSwiXMrK4Pon3JeVhieBwg7gPRMoFdqTUaNEerNMv229cuKqZZedCG8ThUfAtGANWE",
  "key30": "3Gqo1pWRx6onCUgGfrBZSbRsQxrNNqtYSPCWfwJAeadFAsNNpZMMbW6oS359Z55qvbaBXKzVxwDpc5PLE7hWHoLS",
  "key31": "2v12uG3AQWfqF5ts8r8FkTPbmjeBYieNLAK7kvH99EJbKhZbZCrMtubi5HP49MFiP63DTWMsLMUyr6GVjdAPcfkn",
  "key32": "5DS2SMQ14rnaGKSTBsAk9iD5FNXZ8vYA1yEnh3JhrPDr1fuNExMG23pEq9f2uwAsYAnaFYbun4pr73ZKGz6LCmBH",
  "key33": "4CNebHeaKDVwW4bRpo3G34PCSXtrjvGfXNMRsTZqJXkmdY1KEocViQVT6iGNRPp1atWjkHdVRXc9SGYkhLxBZdfY",
  "key34": "3QdaTn7gMffFkgRVuGHsoBvi5H5hBExXWWSVB9ZXipkDPKQC9QCGw73htEJJeWdTW9nYqD9LCHYqHDX7UswRrDGW"
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
