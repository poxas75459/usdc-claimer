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
    "5Gt6yEMC5Gzm2ikiS6qWt47GooJdd2Jm811AfVqaAXAMdgqYeoeFkMW97eQpPDKsB19UXg8AdMAuWqrQ1N7Y3XnE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ccnzk8X7kJ5afYdoBZKHKk22uZ3ZXFpZHtuEBWJ3h3D8KMVy3aLo5CrqUkD1otar8iqN4kRvx14sQ1EoNUUPSBK",
  "key1": "3uEQAzyvGE6tEhDvCyxvYbfFiEUd3LY2SJDhXbtGDQ3Vnf3dXNf6h5PUN6wDmvwTFEJ7kTDSt5oWRe2E9sDGXkjL",
  "key2": "2RNzzxZBMceGK5xci8GxfKmX9m8WZMBKRKUuSkGYBRCozA5LXJAqhUQMywCcfhFJooYCj3G9KdkrsemzuiYT1Uoa",
  "key3": "3tVwyqpnmnwSBhxmoJiuxc6qEgK8gmGMsrMRgThdrRGpxB6F8T6C29XQGvhnh3TqK6FbTop89E6jM1hhstK5nW7N",
  "key4": "4c3jsaCXt44iJkQdyni7PwQTwnhybZ5RGHF17dUvMbpxp9cPY7baWoLh8ap9Fq77JuBgJL8JsDub4cfZ6kgRDNXP",
  "key5": "4zLMGUCvFgarBDX3TosPynFnfi8SFatJ78gopogFnxshoN71Z1NAT2ngUvGWx1iKuwmSSrWuj1M7zGxzV2X1u5Tv",
  "key6": "rGG2tNNAC8vLnCvkWsmnby24Y38dvgJayWEWxRvqs3ft5moUMrZZPNwzHg9iTtMFBEa2qp4HUn3pY3tJD8AHuMt",
  "key7": "3G6PmfaG9jMWYYNuTpMTXwSpJn7cNxgiXqTA1yGZddUvfbZq4u6umYVdgkvgi57oXZgkZniJMyNxn74MwXxrEHFT",
  "key8": "5xNehdqJ7LWykq9bEkBfEyiv9W28tAmJjZptM4TM7c6wa7FARrZDmA7mzZQTRknmzrZoE2NuVpqyCTSA57aM1cKv",
  "key9": "3MejhmqvhXcgWwM6r3mfmw3vbo561ehYBxDk6UyFQbsMPgJZMGWTsHKXPj3Nsn3TqSUaXa2qW4QaFXDnHshri78J",
  "key10": "2ZQacAMSoiVS4iNak5ezjZuo9VHRCF7Yedxscz7YW8edkcvumr8CZ93HdCHnmLkuzkCHZDMY29ZLn8qNStnBmAWx",
  "key11": "5RqVKhB647hrLvWyDnQr3dyFv4RHzh7vB165uzLEMV5pwwC3f21sBEnQcqdbPYpDJfitxGdBS13bdFYyckwrEQHm",
  "key12": "5tHse4oJG9GQq4Hou5irTYfyXkkMeKSj5EXXi46S9R5ePxinARQXeu5HbjDq7gvTdQFyWB1eQ1LFGZZqLBBuo96U",
  "key13": "3H1LTkj3pMYjm2mrc1FMumGyhVPenBKd9dZJji4Mxz4KTGPH9AysYMNRGZbhWfxxTffxWBHkH1y4xUTAsfzAkbqf",
  "key14": "54CYo8xG53PqfAoidAi2yBqF23Nhhue3d4Bv3gp2nxZ8MWWaqxmK8KmwsgzXAMbyJexK8zwRS83vecRHFWH28dQs",
  "key15": "4qme39TbnZKtG6ByABzZYyKpeB3sKTUQLnrjAchRSCkbntgVAyUvk9jvvcd2WfHCFTyd6f4895qAy5NZPDi3n3GQ",
  "key16": "3fPM2vR3BPT8s9xmAphokk9mpTsyPKmD3ktgCvFiLxkqgmdBmSw4nHVLmooxqc9CW8jTivFS6dfMMNNMsYwUgfH9",
  "key17": "5YCWReWM7bfrVepejiSySRBPJV6b8MuTaApo4nGiUEY5RMt7NFvsB9F5pYiffb9sHr5dTUH4dkEkBeTPTw9mdttT",
  "key18": "EKfm5WrXkBxsvX8ZoU4EqMPnaTYSdvT6gwLzQ4miu4qM8Lh2WygnWrUgVUmXKb1wmAtYD6Bcd8HErU3RuvGQBDF",
  "key19": "3uUTXUFDGSM4vMbUdpYH5Gb5Vhdqa7WB769h71xF4uVK5umAemEf86WgJXUVTtURCqtJy4QCWbEKB2D6bYDa1mDY",
  "key20": "4GU3LTRY9kpvFBoEVA47TH4EAgp2zjBCcw7X1KaR5Uk2VDjLCVWttgDuUKpkyMeah7t51ZgzxG3QEYma4fF82K7",
  "key21": "3ZmvmRafKayFQUo2CBx5RxuHZ4zYCWq8nhgLwUU7rcyTp7Y9jvJL6KYceH6CR5hpiULyvHcAir4yG6RdofDUJnQt",
  "key22": "5dHWXusUrTYf2MdnXovMR8D9mnFHhKSuWhcHLa7tSUeGwbFg3kQzYKmp2ZYpd6ZVTrSYwJdyFFCPbvZbSSZxYvPE",
  "key23": "c9j2bEn5exBFuNVWUpDFz5iUDPC2rnL3Kh7N5shLZrFDA38HC8eatiJkok1w7XAqeCBQQxryGJnSuAh7Z3zvG87",
  "key24": "3mGQdpF986i1Tf5ksZfzhQnwFKiQwd6eP9n1nzeN5DAhFf81gBkowS6wQEMfiUuqdnSZSokosX1CeTThbeD7EqUE",
  "key25": "3CNyvBfNhk8sswLFs4AHxEaSTVuoqqJkMXY7emFmPELpDnpn7MJdhhZnJrVoopaC7m4jC3tdsgYaFdUEhih8Ys57",
  "key26": "4rJsBD6nm4ertwVA9AFFZCFGpPYUeWCTvhBUR9ob12NQvb9nZU4wYWUDnUgxr15HewNPtXZkzvrZNPJWjEiwakeP",
  "key27": "5KhjDDQduLX5M1dtAxSMYuDuGvr91nYPdJmtxbyNZj5gTuNzeaQ1yTnnFz3FtVTH7V1ubc1acqXMe5TMoD7YXABG",
  "key28": "4ifoQk3hPeaZW4Gu8RtBPCrgjXNankEo6dPjmSssQQmV6PwK5dPtu72CUrB7zrvXJK1wcXmC7n7GtqpFeqcQdn8z",
  "key29": "5cj7PqA8XdkozobtVQjh4Avm9Rz3ucTF8JsAkYEeNnfB9EadKLCZFgsxPumiMGWLHjrC2g1pZuf4toEZehtobcCG",
  "key30": "5Ji7VaVUXjg4D9cnRUXNdB8KdmeNoXsSVjWMGY3eB5GGGypbBMZyWV96mDrmubgTcksd7srusH2esd6w6yH3GDfb",
  "key31": "31Yp26Zs4B67vbosPq56e1uxxhrsofMeedKLdFCS7WHNKzNzxEQ1D5rRbMeF8N5ByC4WE6jScDF9MAYC1XVCVfbf",
  "key32": "4fnHW1HgWVaqJGWASFgaKbKcD4m9ZCTnrws4rc7dhrW8ZdbP4GKk4NcXfpR4suJNyGNfabz88FtmAXk58wkDGD7s",
  "key33": "4UduthpoUMd4LqEnZqqi4YYdsTK3cQ6ACEXNAvFxsWQY4r8eNHUt5y5jvdokLJgjNpNAEZ3K8yJsBaXdyqFonC28",
  "key34": "iXrMooPaE3nKqsfMQPY8ffcjzZVhdHT45wGVJxTyyJYndb9cnfFSo6892jDcJ9uiB5tVLhH9tuUjqr3kC89xnQC",
  "key35": "4RE28EbArRUVqD7ucRUekWNW1gNRKyEM7MXjM59AthhkANWKbsN57MFvFzwLYiTZQv8EfCrG2JiduMEHwZV9esSi",
  "key36": "YtYXQo73GLrc9G58GaxPN54L48ZJQhjVotsAgrNDibGZrCUcDcKVobb67zpXg3XRZ2kSAYKERTVMb4uKWA3TdwQ",
  "key37": "2nBWvURDeL1sLmJva82JhfZxgYXBQa3UjmgsHXU8DRop7nXDfvRrvy9uSdWfwLBRseJc2hXpv1qvVC2hV2UuFdDP"
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
