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
    "bcWu2i5NiHzNyyNpiRvytCakuTm6RVRbpakqV6gCF9b77axGQEp1QZjp5UZytU3KFrxWsxsCiFdWsaGJwVvSsHF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LvEPcprpBETrFc6xnFAdN8WcTSmUKzCRujRRmvcohdbUqKtmGT8HnrCwytGnDUZE2vZnDfKBJmBjS5vt8m8HFkC",
  "key1": "2MF2YkkUmNRzUcMGkwB3qf5JkE6mwk9BA5NvpAVTTtExCJ7aH5pgjEkRxWckQnee55dnByhqgNEvGoDUbFYF93GG",
  "key2": "4uGS2XKqGmfmHKx45oGnYjH9PAScHvCJ8bPva5NfuGFVo2DoxUeyoN9FnR2kgyK1g8CA1N4fzbqsBXrqP7owuMF3",
  "key3": "5HF24pSGw7SHqL3Gh76iUENivmrt26bsQQo15WsVp3jeSd2YgCe4nhEWEJeQnehfrL3twX9oYZccGYAt2Q1Vzfuv",
  "key4": "kDZi94jx7esdW57gACwqGz2jr6w9PyFcXYbvxYNasMQ46zjuGxWiVZAsTWm1X1UEvP3xn9PFHFoiL9Mn97Vhxnn",
  "key5": "HW9dJE5Me3FmZFqCtNwgEpJoenSrHJZyQTQFGU7N7FMJQrQa9wZ3T3ZLfN7uijkTzDsWYNwA3VaPap8Yutomfjw",
  "key6": "tA8UfkYwNhTMHYnZ1Nfoacy6A7isg5CorQwoJAJW13WF88VJxn9qHGf8BBuwVxvR3J5RyCbMFTuiZ36APv4ez2f",
  "key7": "5kguheS6StukDHZg13SKGZ6mMHFFJUJLYVwrqvpWd43rKKVMJsYmRUA7XmKuncU58hnWA8az9WuNJKHj59NpbR3P",
  "key8": "66Lyv7Jzdb8NmXJHWnfQ5h2Fjed1YNGgQ1RWKtDeXHGymqveoTK4NmdmzDU1c12xC7f7RxqmrhgfoGyctaXYbben",
  "key9": "eZMVmUvxiBUdgqv6FE1CGNoFKftrDLRmd6v3SokkkRaEXEBWiPvX2AhrrmDeXgLTLeKvekzxyBEMp1dNRVtXcyu",
  "key10": "3CqG5jDeohmuEtmMcxxum7CZjinuc9QKkEqYhJPkasGJ1yKgS4hK58VVmwenW7vgjrYkTe4sqnT7rshej3PeeuA5",
  "key11": "4krKKYwbxGvXxoASuQJnaujKXgbMpFpczHdEzf1GkTaxTBwx4XFmA8vxvhAo2WHFokbPauUQRUWZSEaiDshdCH1s",
  "key12": "5x45NjrNUeb8ayzQzEnz5511NWUMcNtHxE7sYgcWY5Gj35Nw1LdkCebHrh2nbkVaVNv7c8KJJdhfGzRJ1eoHWFNm",
  "key13": "3X2MuisbFiSQSfGZhmm6c6goarA6qV2GPXxqdQgNknUwej2pskVDHtkeJWnDbiGSAxFnh2PaPcJCzyHA5CBa1Byn",
  "key14": "5EggZPVPmsKnDS48sDCmusRwMXbVMmo9xL6vXY45UNDLpGhRiUR3tTgH3QPLz8dupBfuq49tLiKdXoYdLPV3QuqF",
  "key15": "3jvZWNgdBfRFDCqWfG6XZwNiqC76KhiPZH6n5RradJW8bmURGJRWi76X9zJrSNczvzdSTwfy1EG5XwR7X1zxLnaB",
  "key16": "34aTzdArZV9WHTzSti4HrYJxDQYF1ipxZXV9fRmo47YYD3ou6vXAThLz1bZXbbonTmupcct7nf9rS4W4LskkZJ2q",
  "key17": "eX1ytRRKheMeUQWjkrPGekzNZXhpCXBxGfPuL2xLrsLGPPQ97aem5raXsfqARJRad2T3gLNQNA8t1X8pmKKm98j",
  "key18": "5vPiPjMzc8dkkt6DM5iwonLdQwX2RBA11dz5PjpT7NptCEKBorEmrdWCaVefPxDJH5JAUqk7e2pVDeh8NgXovqus",
  "key19": "3Z6W9dY5QtrBbz1Gdd4Ch2rc6LJfQ12toZSEsyBBMyJtWNScwjqvgGc1FpbJuf2VWYv9dsg5LejZCQJTz1kYFhP6",
  "key20": "4tshyuvpL9HTzk17YXx9X23NXgsABad8k8bwLMS8RaJoPLKaPzMTavgAxWSkfFA1zRfSXC6753ofo69JKk4Qc5S6",
  "key21": "5QyAJjVgBGY6LzD8BEWvvnBFUCjTn7nk8vCjhyMk73e6eBzSRtSbpZWzBAsBCRybaYmCcF8jXTJ9R41BxTjBKdhL",
  "key22": "3piiQuEjvQPpr56yomzLqyrmckBeZZhDAM71TxJnEbpc9EWxgUBdmFUq3BwZmAcnxgJC46cxRCJQY3inBtFcYSxu",
  "key23": "4ojChQLMxLQpxnvYzQLLQ3crWUqH7KDYeWgtojb8nbV8whkacPYyPodajRbSqdTYBf48k5BosRKTrtyr2eBujGKd",
  "key24": "3B7fJNDeiNavJrf8zunzhhd7WAAHtM5M3T1WhXqnv2Vkm56TFhbRkYAG6skevdNRS9YyNugbLwEyAEZqEFMiq264",
  "key25": "5gZDJReVVaYp36BvtmHs2idmLGf2Lc3iszpWSzgVuiXBsPe1fxtuiAszF689F8fJitXEGRPvzCwTFYy52anHkcHK",
  "key26": "3HtaP7cX9tmSGyfi1w1XFqixKNqCC8RGPsP8mYUX2wuF1wz6GUzLNgMjTbvL7jgSzCXrWBcLR9ecoJeFtXfEi5km",
  "key27": "4r7WLqeHyn7RRvz4hH6scx83pnxJCwaykAMZkVSdA3BTmVUUguasMx7u85rcyoeRpGWCUw6cjzuXNT6aWP7XutHL",
  "key28": "2ZUKpnMAgYey2VqKiezX5vsM6qzA73qAT8kL9jM9dsL6P7L9xmYi5RRTjSminS6FuhVDqciWvWgEyMdBgWDGd9KK"
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
