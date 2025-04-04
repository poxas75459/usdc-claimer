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
    "KYa8q9G16mrBDWuauBTgBNxPyvbnsvYdyF3cg6ZKHX6PcXYt8uCWokueiHqYT7J1beGSKYE3Ku2e7zc9cvFLYYf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YXJZJKRcWdEU5kUKy2KrgS9UUdrYveug2yDe4EXND6nHNGyzLMPxc7BkWATAsfJjFhj4teK5UxYKyNzcFFcBfn3",
  "key1": "Ytfgps11QXTaxmfXnYjpDv2KYVpHBPnvFHEU2ebddDhjHMi3h1gbYRm76f3gXwkP78cWNb1ojfP2xijWvoj4tWJ",
  "key2": "5rqckc8VhDo7KGKSZHmCKYPHE4vMu9EfUe6f54WcTVCkM46LWKo92iRVPhnch3xEKRXC81hKAb15bMwwoVyXunSW",
  "key3": "3o89CzLceEo2915JfjHyjpBfRH6wnXn9oK3xhn4Y6MWkAkkS1fwHdAyhV5AZosY5KCCqY9zSPoX1pHX5opLBYRmG",
  "key4": "2AXMJRv2uvvX4WditcYTbwfoYfZZaRp9YGnWFsdne99gv9r577MRyqHC5QMH9dkz6dTVhUXPoD8kzqC2kfuNpWQJ",
  "key5": "3sbnr6Bj3C3NGunJREUToB6mpGNip1GU9SsXdA2FFe1uNuX3LARSu8cCFPBNyAHFZe7ZFr16iuPSANb4eY3i4TVA",
  "key6": "3Bgf26tM3bf6xPBSvZKnUVGFDTkEZcKTyTXyu3CWjztDHnwXNhFgxxeGe47ogQxvY6jzWvzSg3Z8y8vweEHRVPrP",
  "key7": "4dxVoQqS88gJnnt6gi1DHusTuuvSC5ejxY3NSw9M9ooQVcAzVUND6K3ayHNsQ54cfBrLFWNXAn8MgzGHChAmMXci",
  "key8": "2W1uevih5sNoYTod2c6B4VNKUKNTkiiDpoqgj6rYdCzc1hdqRRvSRxYf8nyaEP9WuXbEoraUKZkT8N24KBM7FhkH",
  "key9": "3jZqfjkm7TXbCFeaNGgLCSm6gWBuUfp2oFq12pzn3K6QP1iaotEgWLomTrM8Tac1FPS53SUvQ2J1yceMCF7hiwG2",
  "key10": "3SYw8Y5K2FQ5158fQe919MwbLB3CevN14yAKcFQ4UF6KLtKDVBVZiZ9ckdjMCKYP7Gm2HLaNVNTz2eSmz1rkiqSc",
  "key11": "DEp1igisZRn7MK6UFzWwSoSEFbXVE56Wz88N5bE32yaDSQ7YVSWnEoBQRcD934WEWkt6oA2BP22K66fuP4bm4VH",
  "key12": "dxEj9RKcKSfSStW6fmfoEj1BLfdu5yCPkRKANFQUEwC1WjQ8M8UkpGdpmECwrMby3brDWmfJQe7CM7pUQJxw261",
  "key13": "4ucmqCPpk6yYNfrJPA4Uy54eGEhbpwq7bpapMwHxfYoB2X3LJoHKWZ1bzm3jkoQPQbPY8QZkrZtjyz9wR4jFz2BV",
  "key14": "5Z4t96F6ykB1J9uY3zhHYUPsidMFgJ4aGaZy6YRWKwZYyCrykqRJ7Xwp67oL4DqE5YKhbNSprJy1D1yf7zrhe2w5",
  "key15": "3CS1qb73z6EXUtruH2qCDJs5Nr8dtSqnZL3yYkEkyCSkZUxoPyi1yv3uVfV3GgfAudNSZxWeBmqTLd272D7WMDXq",
  "key16": "14FsnD5hr5Fce57TMuUhhCxRXVYdpX9SNkUybAZFTjHaVeJNBGAZsF9JVTrNZBafcXgdRjMuyacPE8RAMfeC8YQ",
  "key17": "39QKbpJH3KjFZmhbzhbBCnDcFdXrjNQ3tfDNQ3C5U7tAaX9Jip2x25S3RcGCt8ZrrvfdqRdxV4UE84Wgf1kyYynz",
  "key18": "VgywmJBjzyW4fKs5jKdUqo4jUPmpiSv5SHJrZKQZBnttC41FgTwPn6xZwQ3xiPVEzTuejAWVU5agWKMuCDmXPRJ",
  "key19": "4og3qH7XXX3RxGm2y8ba2Gk2rve5jHvkyL6r34DYu9WuwhJGzyTxhz947CSmVnoej33Nv2M9GZjVQSsBUiiV1Cq6",
  "key20": "UPgyxeeFTxzf5apVeVhyGYgcqUo9NtMG6DDPQY8LMhQ32KNQKBPrpvh2kYtRpboyzbp66aDrGgRVYARvodNTZZw",
  "key21": "Q7iCojmJCbVxubg255BARLxkhqmcnoY46GctxLiqXdAJbnFa7qsB4QkvfcJBKHH3R4uCLc4XspvdRKLygRTm18e",
  "key22": "5irqn6i1V9NU6CnMpTepZmFfPLBTkaiL9XA8dNuSZ5YZjpdwLBjtqBWNzXAzPpgjV912giACEGR7zZbG7kzL1cPq",
  "key23": "2B59A9FzVCN7Kqfxda8S7P8hnZF1jjD9YqgauDg15PVoQaaN1dY6D8oqNaA9DvXXM4xsfTvQncB4Ggsi89ijw4KM",
  "key24": "abdWoGCL4gQ6sGNPx3TPvsZsuv86BPb8ecKFrE4TuM6DwBNhzGPJUAK4HyPXag6Kfvnwb9maSNns11jbGNKr2td",
  "key25": "3jaKEBAy6uFa6nUU1hxbTeL6wXZG9QKMovQ8uampEDdzRftjQnznQzZyP7QgMAjZ2bzWLYATSANXih6mfynX1YSX",
  "key26": "57SzbjedudQ9ihWKpnUMExCDmbzvWLeMHBs2SJcGw8UYhNz5gZbxr7wXmvPzB9Khk1cPD6f2A7DHCBJyufWsXthp",
  "key27": "4pZRVwDfF98sHZs8Vt8nmhVFy6fjfehMkvcRWLTWY7B4cLtqy7vdPutgAPspfZZU1ZLVfE7NpnxGj1AsMZjT2Yow",
  "key28": "2aWSwAgmRKU8zdtxTJtQDKbLBVi9bDNGz1wpjgfak5ve7J4cy3EUnNHcVfaDuTj123ZMxq6LL1qagQG28cHxAuwK",
  "key29": "3G6ZsXA8Dsqds1MuiCvvB6UDFxiznqz6n11enc92Q4mWJBHEDcMDeYJ8gxyXiVE58QhxTkDoTF9xaput8MgPhWi4",
  "key30": "4aSFgRNimFVmMiR9xRyTxxuWsNE3Kvipn9GdNkwAN1nBLbcZQcK8CZ6jAXSw3P4TKXcrjwxE8R7QsCTMWgN7wm2b",
  "key31": "5BBk7MPswmwRbGo4Rmr4BXZV5ggfXnNien9CBef2ANGME89pwURm53eyoQ2sKmdQKFCt4kxNHUHjMuxriLX5Q1r6"
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
