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
    "5732hzVNcTQVR3DUqEFAbk8hEuu8Dukt9BJgbZSCgTp4DwpqobDqDsNfqyoFTG4wP15jrJsbtE8Ub5txg9TnxKcK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AGC47NoTCJPBTdrpKQVtV34F4bXzwb8a6Jsh9AfNBxHDorgmKDqjjoNv75hdhVJZoJyLrXvUnXZGMBzr29UsEQy",
  "key1": "3MKqNU3149stEGgSSCuzvpSrCw2f9Ye37T942ibx9aWjG7GGBWJCSm5DS2veTj3aagUXxqFDfjd2t6udy9NRZxnd",
  "key2": "EwePDJpYgAdZEqjbaUX6ov8M8oicixQCbwQYGYGJf2WKTtEdEboywPipcK7J4vajyvaMB6qzVgwTkhpekrQqZUk",
  "key3": "4wqyQeHGWjGorZm5uJqcjf4kZgb2NQqfbLEmmncLHqcfprpkoVqYuK3Ux4FGs4wPCWvPoNXkGPT8hA1ZBhHKSQrr",
  "key4": "2eRr2E1EUyqe1EU8ukfHTd7cL6Q7A4pNVRv7oA8CjPTyxHj6qDxy2LKr5McyuuMXhzUu6rnoRaHTAr7c33SyWXh1",
  "key5": "5bKWjedNeqH6TbocgCNGRaUuhuCixZCK35XRkngyKNuZwW5hQQBartktJB6kXYpWsomXwUvDA1TPEm4kvz6qfqG3",
  "key6": "4f5gmTY7WPbNfZVqx8FyB8UhfbL2i3HBEJeXDzocaeNnQehwW3vnaKeW9tAxZeQJKej83icZfRk2UcKsr1mJg7WL",
  "key7": "HeNz3PoAPjqCNxZMtJ5ZkHtm5PrAVxFJurZG3VUDNK8fyAua5yFe86cDLChmCoZknbFa7o1cXPUws4hwpSA2Zh5",
  "key8": "9i9v4wCf3qukjT3XbcHDa1aJa1CBQYZmJ99UQCJAC8CtKfU37zxATgXwg2B7SzgdHwD83aUFXRMskd5hBiwaiUU",
  "key9": "h3np1af6Ez7LutXff32Fz84NiY2ppvN2A9qXh5bUprd6r5viB4yjgKmvQbWz9rpSvkGMHmeTfssEJfGh5Ha2GQB",
  "key10": "2QYtZbQ4fKmkRwJV79vPJJCxc6CBoViTvv9drUprg8fzhBJwKos5AyvLtTfvGaENX2L523yEGt51ZTtWLcX4tKgK",
  "key11": "3GLyUakQ3tR7GLu5UAQMBKoqEYEWRUWKXsK5N6mEgfpFvubqAn55Mh4KQmWth1j83xhZX5vEHuGxaFdwHQ5YSmNB",
  "key12": "5UCK3YXEAjLG7NYcjGYoaSdTuY1UoWPdWXDZ5xxNUQcxSr4GRsXPaTnkpWoc2QhyNzeqouVcd7XUdP9n8XXw6ND1",
  "key13": "4oPFVZi7ZK373BWAN83yM4pAxoodn7hYeKa337TN8UaPxWJ4sWj81GSpvJvMmJbT7yekwkm3trJNoB9MCZHCZsTH",
  "key14": "da4eMXMQWooT7VqV1YsFATcRVBT6bTpruhoMuLyqzhPFJV2Fv46UZNJXVYF2p8iJHAYLA82uwyXeu19JTQrqPU7",
  "key15": "XbdRLPD6hSitofA17oU7BPkdnHz6hwTXWLZmVFKhDUPvBGgAZbWtE9W4PB2EWBjuJHNyxERP3dgcqeLY4y4Cehd",
  "key16": "4MUbe14tktrZG69TF2MBEmGbTQiQfsRp2Ti1FS1qWrPnwWA2gJe4w8v8sHCf9TD7sED8tdJanh6BX7AAwd79ysGB",
  "key17": "3JmLiLSiVaZbDYc2r2SPFDRMjSLzQehMvoa4XHviVSskpDb8qHcQkMjBEY1prXWE2PQXhGu9Afg5MQraHihZ8L3q",
  "key18": "3VraTxqjxoNkk9xauNGanT7uZE8JUESJ3wRAreyM15ht6wPbzbmcs3iUyrZBDsVDPJqaTqXstt1eHBADYydKy17p",
  "key19": "2viZgrLZc66QKGH2FNEVxsn6GXNxDDeoQf7rhfKTw65v77QUWjdNKGBhRSENuqr6AG8V6k3syBs4GsV65xLRE1C7",
  "key20": "3Y3e5iGXhdDvwgT2XPKzxxAwWBxNWttZkD5BqcNmcNBcHwXZGmJAqjmEWBGgk17G376wSkyygQjZ6EuXwA55aStS",
  "key21": "5cksa4rUfNwnPTpihM7xWWDrXmqK1DRHUe3cUFbNC87iyNKv5oTJrTzrrZU8VxiwdW51NtfPrdnz3C8jeTBCwCvg",
  "key22": "5ncqCNCawtwmhVvSAmUhprqU5X4YFxdjmJs7qZk4rmtrJdKmxg264wrvwUV3SqZp1poM69nzVpPZVRVpRjeAm5sc",
  "key23": "2Urs3aWyoa9rJpdTesYxmssze3MkMw7ejaXDGKqoiQgSUvtuBPGQ7NwzGz3kbhTRot9iPBNtCHWyzgsbHH18mgUD",
  "key24": "4C6yedbFNUdUMBwwJY18ZfuVwKmfvpm3Qt1GSTz3Lph75UM9XgmK8nMiBz4Vc2QTj4P5XWbjBJgjRA53gQhuQcq3",
  "key25": "5dpLFafAMDtYwAcXAhDpcKtuWWkfW1kGMbfgcLH2GG96gbbhckmjLjXt9HAmybXH33DrKUn7drASXCv6oCVPzA8K",
  "key26": "3gyS3U3Gvv5LFu7ABt4DR2sqS8vMWx4wrpndJ5iKnKB8JyDaifbEfz7E812xunFYCwTJ8Z3W46h2NvGUxmmCbwDb",
  "key27": "22feoUaP6EB5BDBmh47btAssH5TCAt3UzLWf5bNSx8PyzFYnNV9rS87gMyZBEfKbojMyhB59SFHUy7Wm6e4qRzgN",
  "key28": "85wnBJiDrgT396PgQgMwgUqpHR21fftzrBTm8X2sdkLzwA5QFMXPMZhxYJGczficvNszrcGHcoaJh4Gv25VnDRK",
  "key29": "5Zqm4xuqkhrHyMcFbDcCLjXtqpKYgnbDHrAy3E4PXtXpCvRWyFuRzBYgvP4HNkJvhJmyWm7BkfSDHGoeTuYczCHZ",
  "key30": "59txpkqNGQDnN3FX7zP1s9PxQpEgjPSZ73gvMqNSSz5s5ZTaC1VUYyymLgK5sPrT18jVfnhUzsbeETJLwzDRA8Yr",
  "key31": "4ituWkoFrLqzhDcgQ1wnfyso1FD82ifUgyaEMdJYx1kFtpW4cUPUbJhm3MbrxrbZFETHG3kXDjtdy8S9A7WUMcgE",
  "key32": "3g1sACrzpt7zikVZ2qX5HbDcf3xLgCCvcE2PMNpEYPoKHS3R9s43mY1Wa22jZvv7fvGZ81uz8v8igijWMiu8KRUc",
  "key33": "479fK191c3GohkYXvfM5i9rgZ6B1PoZh2j6PyRMWT4QHjuop2RjGtMLqKJRVzgKbcMvAwREUCMwMnqwPsbHr6gcS"
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
