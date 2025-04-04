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
    "2Bya6Do3jonq9b9EgS1J1G89aRv7rbTj3eBHf6Sf4MN3HyZEhF5Bq9qm9PmN4d9v7yUTfyBZicBymRnborwVRq75"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JDr8TxrtCj6LrMJjgbBwUWwwvKCw2BYXDno6aya7RDLW5f65G4ubBGec4xrsa72RcQSprcTAx8oFi7LNbx1g68V",
  "key1": "j7eZgKg4hmHJ687aFs8FtFELWjYAszskPbtJYM42TD6QBknCKSpU2KjLvPFXDNdnFtC5F6V6pw5SLF4LncNB77S",
  "key2": "5PcTBeAe66NkwcvzNQBrcPEmMm2JpYR2KPC6q8e2E2PVRpTmaAsdTRtMKFAjXA6QzZp8ipPb4KHYBd6TqdN3E8B6",
  "key3": "3oQJRnhSaj61n2kmSXRfDypr6yK2mK3dW7gBqdHTQ7YLbkPbzjeHcCR7b5jtYrkdUtzvBYfFX1QM5sjsSNZWmJt1",
  "key4": "mWMheiM4LUWMsFDq5A1Cs5dErdyNSshLpg1sBmQ9VnmeVm18GaUdQ5bz5L6tLLaWDK9ivBRAnPykozooWBaaouL",
  "key5": "37vsiT7pic3xrdxZpJSkXB286V2pB6bPanWhCP3CkzJAGuPAQrHU1Gv8nV7HtA5af7zwMRrYjXwapajMUfmnbCyc",
  "key6": "4H4N9LLEna2gfP7rK6BwZrpwzdFd96hrUaqAh5jb5gawvzixSsk8nS6Ynz8nH8vxRunFXoEDw1oTndX7GUgcy6yZ",
  "key7": "3zB6EUDdNK4t4eiU1bQEHpjoxULC63gX5RG1m61FzAbaqfqzhQYygMVLaN74RKabVovhthkuxqkLhVfzyuoKLfgY",
  "key8": "45VQTXvLdxMwWaDy2RgaCQZnik3oJEEcZvZ8D1ft73LiA6Aq5UiXo8Zr7P8feBNehaQUYmyvsixx6C3WKTVkjqQF",
  "key9": "3Y24P1FgnfjyM3jXkJB2z1rdJCyRHLU4ESt6vTWWFxyZ9t9Kcjw9PZbouactH8BrwgPH9B4CcpMAkpJxZqPSV3xk",
  "key10": "4dzKDnxt5RPrWmfwZcAZTvKG8UBTXRB64jwuUDRZRp6jh9szbsubQD3CE72q1j5zz158L6VTtwYfZFZ848Duc6wS",
  "key11": "5bA5qp6PATGcJznHqgjNwkLrmJ5hWdAAd8hZ8fRXQBrBr1qznQ2SfWcMv6jd1GKuudUFzWrzHh6u5s2j3wXVKEMP",
  "key12": "4bkfJWNjt6bN9uarDE67pyyWihXCVGLtHQymmzovMiLYLYiiJbkdb8CuW8ffZddZJQYZsSBW8zfgD3EygBH6aqN7",
  "key13": "2uGeY2vZdbmMgUC9FHWXLbgUWTUSaWX742NaSgEGybbK7twp2jDEfbyFvqCpVcNaHvnyBFLvzZ8wgkqKhRYy9EBJ",
  "key14": "57VQYNUmrcugxx2Qy2VXhZjKnfMUkmcbpNKf1CnBLnLQ4DoLXqYxcyV5FTSpnEMEVjzDsgU7nsD764G5JxDFLrix",
  "key15": "ZVUjxEGojgA22qgZVUMcejEiukgRe6q2yzSKMAHWTiHJ6x4M7it7kkGp9UPKoLGDNRNk6oTXt9Tn6Wp65mbJMR6",
  "key16": "3cH3ny4nN3V294kM4dtspy3BPgTag3hMVte6CNPrQshydqYL47JSBHxhpQT8KzN9S3BAz7sixoU1VWPJKZqtjzdK",
  "key17": "5vnbRQELrBYMvJkwe9er39jyEiRmA6w9mhcadH3372W7vV9pduEoHoxwjQmH5t4VRdg5AJiGxuKAQ3DwSjMcqQ1M",
  "key18": "2hjFQBq4DiHwNbrgkfe7aG6oLNCLYEaSgPjdMKr8LPSQorxEbArg91WcFAy3goi9Ggvo53r2RrF6gETGPsDyyFXx",
  "key19": "SgvYsjhRqPi7tBy4B1fTbMjV6bJnbfRSit6phnjGFNSxwJ28ByXZMZsY9hUVR5qdmRsfUjMtpp5UCaF1rtAJJsA",
  "key20": "64oFsb1H6zNFX2bJhV3Ua9c8jDQH5qi5rqX4ocqPKDg8jFLLUtwAQDsXtx8LzMDgT8KyuKZiy1Wws472bM96Kx4m",
  "key21": "4pzhip2vzNYSkt9te7xDuQz7iqdj1U9ku8cQGv2NK4jtxE9VvEmcML4PpJJwjzKPSrF9wc7sPBpRkJEJtNyUidpH",
  "key22": "4T2aFm9VnsuJiCZLqSymsvavhLhUBPmTZdwCS1Lq8U7q7vCmZf2NQruDyXtncvsAaJkzpYWGRe2qyYcha75AiDM3",
  "key23": "2jQ5FFMBBd3QnLKKiuFQJk6KcUXFhB6NfgqvAw5tGH59Vt824rC1TQwkTHZjvezk8KieTT8RhZQ3bQQfCMr9bhkB",
  "key24": "3baEwthgD4FqYduFsgwvS8j6zLkZnfgtg5Buo4BaGpQbzzPDB7K5Ad5ckzE2ZvJfneRwh28CEf2gjAqyWYcdTbp5",
  "key25": "a7qfH7Usojeu4RcZsYDrG42PLn6JTRh4YSe3PYEMRQyuucbfx2ZSa2U17iZrBoEYZTbCcoLoG1xrm5oJsbKLMuE",
  "key26": "5FSfcDTHL67YKUfJeJpfbVTYgMjD6XYnSEsixi5wrte2PofCLmX683rvDeMGLj5WP78jwLx2MYAVryUTM54xfC9i"
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
