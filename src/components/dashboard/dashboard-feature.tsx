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
    "4S5ENvhn7DALtXAEDzu7Upgx3kky9JR5cqENpiRaNuGG9GNi2xgxU1ihaR7gsmxuuXNrzVSvsJfhGoP3UNEZ6NKB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HCxLkg5hnSApPuUcg18kD5hWLfQRjx2UZEZdZfqBmnUXg9BboETqVSoDeAT2WSpE1NQ3e7wzfXJokWCeJbS1K9L",
  "key1": "54gUUDhzUU3t7mAhyZvHVRdXGdsQxvEU7tq89GL3TXdKAViwhp12DtYvyRqYrpp1vMiHkpqCjLpbSgKhV7qkecfV",
  "key2": "2RoNxhcQpAxsF5LBR5EtHzDvu8yXBLZHvyF5hFyKf6JdtWNSQZxgQMGDJRgvoxFgjbaFBczM1uF4ug8fwu4yEJA1",
  "key3": "4Z81SRDtsDKH52kVWtYocdFaWQnbDBoD7D38SJapAV92wwy3Kno4GYsrXBo6UVzQztm8vgwkgsuRV3SFY8JY9Ynb",
  "key4": "5Ga6Rjyzomg5YJZPLKqpuFK9R5wWNgaMQJZKGv12U1EtPhX2i5ETy3GgLJte6ofraYFQ6UaCKSW2ZGES3MQrApmM",
  "key5": "4waKG8nsWQC48Jk5WPxaEMXer1xras7GuVdKCVeDH1C6ikCGC7QHTP9biBRHupYbkoonixhbWALCRcjTMLaomcdt",
  "key6": "334rY5Zb7Wr7rdWxNjSYFQ9zpcRaAQad8U13yTyX4RwXxb4ApWbYdJNUVBKqzZQuHD9VPHjTuguEcX4D1Rz4y1oQ",
  "key7": "36C8HuQpSYEGZ88ZXkLrgcWeLjcstBbf5dcMGeHTTcePxffthHAogkpg34diA7Q87CfmzmpJNEjA2L1fjgnkDgP4",
  "key8": "Jqy6EPQDUd2acWJyUWgsHfJBxzFHveCWQdqagwXzdY5NvWBmKboxXs9cY2ZfYC8MxGtXVrrR9GeJCaFyEZyPLxR",
  "key9": "2LeL15RfwZ65rM8bCLhTUhfFtyhpN3pRgqCaAgCuQGPemhXpW4w3LLfy7QzgYAWgGeb1EdLpM2DQppWzoJponGk8",
  "key10": "3Xhb71TgWMyKESybJGVRmfgu14DVgH9RP92TpyTKsY6j1cGd9RLFqRskQgH8sR6jWYcBLzToyHo6uGzBQtgqxhwd",
  "key11": "5FU8AzE49DxX2tbDX9dJZ52hF7ERdYh2mE5cuBH4zXGmg1h6TQM3Kq6uyUtXr5XXybHw8fhZyu4Uxe7Bna6cwmff",
  "key12": "2vwEacuJ7jeYmY5rjLf8v68kVFAs7rx5XAKL69KDoX3j2zJvSdaP3YDX5EeaaSMGk9kR4REeyHfrsbQ7RhrPQNbo",
  "key13": "LGmh5eM3Z5KNEKXW4B9SuAtAf46EfpcfNd5MBJjBvWZrdCw8xvNRzER8ddKavqZtyyswH8ScHx8UpP5ZPLSAhqo",
  "key14": "mWXCoDaQFRxvGu6xFvSi2nk8C5E3rchec1f4mwiSRimQ7m2KzphKWdcSVgocJHhqduBmkGNLsZMwiV3Zw4GrEJL",
  "key15": "3j47o1MhT8unZiyZAg8Vb5ffYDUfisAtWmXzLH9Vpp2cgqatkB1FFWGbzPov261tzEuDtGKKfLf6LyZX5JuGBD1m",
  "key16": "5wU4uZ6qJjMUjWjt5QAojXyGCHrYqbx3n7Z2rUqdgoXm8VZ5n4YoLwRG7crvcfZvZuAZmX5iAuLfS9tG9JAAH6gA",
  "key17": "5fnMdFTiP4JiWv9sogGnd45KuL6qF3uLWjuuNwikKDvDQgFD1gfLMhYBjwnnwnPTkntG5Y3eZiSRjbcMq2MFiNh5",
  "key18": "2w7g4889fogZQ3U2cjYDLL1QuAd9avVYyzWHJjKrPDTeKfN6LjrVuh4eEJDVLDyHv1EfAnTJiHycrrfvBzzp1Etd",
  "key19": "39T6JgYz5QGh4Hr6h1HrsCTidGmXDKRtmuBTcjp2haK5BrxvV16yzQ3KgkCF38Vb39DgY5ndoSv8SXqeHgPmBPUW",
  "key20": "2bUHWpD3UyegeuqmwaEuJ1TsBEoeyxeA65XMJVtguzhbxipvMySkMemXPbZQ7Fz6TL4UtBw2PFmXpZh9Sahp1Ga4",
  "key21": "2PvruHjmyThWS8mfga2A5huaLz4db99AFzVDNMr3DD9dH6jdijjFP52142v1X66J3QJiKpSqQ75X669iYiqiguLC",
  "key22": "26LUMGJafaydsGdUaVB95KAWNzhTV9WMCxqHkM96Vn8FMBwAXTAzaiGegYB53rg4yh9yFqGXSs9afF6muXzBsnjk",
  "key23": "2NhqWkc3tDmhpU8VQMTDTdTaAwR58w33uZhfmFSNr1pzP3Fph9q9Lf6ST38wHhoNVJBXA1hc2GGFs5e2gC4hA6Yd",
  "key24": "4fPeDvzMKsofDg6hxBmoB9Pym3HR59PX9L54wUnRmP5ZCfvjVMM5krLwC8g6DFi7KjdtpMfsgapbpxppbSmyfFAM",
  "key25": "4wVVbbsRZrhiFvR8uNfJ2c6GWahiVarCFuThaCizw4aoPiiThjrqgWbhpcniRHaVaDug9WPdD63b2NYNmQecRKNa"
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
