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
    "5DCVm289HgHdRiBamiRAQjVugp6a18ntcK8dS2GoD6cj8MbH7aHSs3StjrtFwthkMBQco8e3ikqMsV6pSWHhKHJB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FSHDeaRYSEpAPqsAKdgxgFBaPQH8T3iMrMciS9XJJk45qic47kHT1c9rcAAVJ9RJEfXZkSbCHJJszunvZxChikK",
  "key1": "3PNm2MKvvs9x5HY2ovZbcJoDMJ9F9Se1njq9ihyPQuWaMXTwfWUNeKg9QT2RCoixgzNLj1UqdGX4vaUt8avguWan",
  "key2": "5kqJoBnEVue58C3Q3ni1dhFjATxtuRHGyuCeKiYQJLsyC9nCMg3DJh5Y7aHcMVBLJLmn6Nr9LeAYQ4MBcmmin1CD",
  "key3": "2nKSY4kacfBmyojPnqc4dsAmT8iNwQE9BLtGjU17wBh9K63R4w96nF22h17eE6ohEfU9bo39XSA3ABqoHE5ZNVem",
  "key4": "3NAjRpSBso82TMDP4MxNbeuAzcsnJdkM46XzgrPaSqiQ2tjJL1PHfu2s3mVMYByW5SPN7317gHDzNigX4KGJFEDi",
  "key5": "3depuNerTW9uTuwGib4sPyhdqdAJbeQ2V6KiAqSJQ4sZsnitvsxwKrNTSAa73GL2T7yaag4VxB6rzYj1jRqAAY99",
  "key6": "pnck4ne93nmphZcKc9WLiP9rcgFGmxosjR1KUMiRCbctoHKvsM9T7mFjr6igKX655ZmzWZs1FKg2NkdBd5JYaXt",
  "key7": "erJEv6F2mydpHreKixMoZnGWmMFL4U2eRmtxoTrPjvbCcBDZbd9PLW9JB84LHDinkdxRq29qHzHWK5D1Rhr3RSj",
  "key8": "55iN8UTYHfCvCmWhjs4M1rspcqaqs5SpSVjLkMHjxsfV1peTp9ZNSpDzJZ9AzQxwoWaEkqMwoj2FRhRoN3WQ28BE",
  "key9": "4KHAwJcmuJQB97ismVxpv9Umu57bMFPux1DhDrQxNAA9pcUZwaghdJGLkVdvizisGcaLUS91gSNk3jPf28xnbd89",
  "key10": "5eNQZtoS3NWrXk54ZHGkcKUnD3mnRb2UwDq4CPUN7z2zFUUoNLeQDHZoMefaoB8mCDH1WdA4NUjNkxTA2waKrxM5",
  "key11": "3xe591hX9cKq8whUo1xhpYd7jqe9tYZrc54Cw83z8bNimcMrLcfxrVx1DQuDBn9Mh5H3m5vtURVEwNHs53chNihq",
  "key12": "5rRvD1BUsQ9na4Kv6eBjC2Z79icnCDzAcvGA5xwFhKsoJfRfwzoS7T6ZWYwWxLXQVGqxc9hPP7uAgeSc2ugveXKZ",
  "key13": "3KGPfXwA3xtgS3fJVKuNVDLbT4fkhetkHXWYYo1NLPLQ8PxKexxVTdmbDQ9LLEV2T3iMry5iHUXuynTm9rGUHp55",
  "key14": "taCb7zg5JAjVYHrmEaUm5oSXVJYhDgawgPNBurbBBVufU7Wv4GC6ny8XbUHJgAVGwEkPvEVcrCgB6dPyB6ND4sq",
  "key15": "5C2qnxPgYHb42h1j1EnVsYQbNKaxXHkwGfLjV4panVHP1N31Egqgu4zD3xruVDJMeh3MnmAe9RZjpKTSo9ZAA1kQ",
  "key16": "3dunpxroPeQb28r4mcVBXj7dKJFm3VntiQitsyUsqkxoMqmD7MrYwXjy1NSBennXLMT2iZNuvAzgJVyVup34BYz6",
  "key17": "4Bss59NhRsq7SzFxAgZ36uyvGiRthZugBxDXL7A6VgFcMGMRE7vexuurw9phcmtGHjxQJHsJZZg8m64JFGAn6nva",
  "key18": "5HC232o34dQxpUZJi6UChLwGco65EDbAkerFnQ1r4aqdmQYFiSbnm6F4QmCu6q7TmToi776NYAkomKzFQqy1dM6B",
  "key19": "5s8p5ZzmVjqB3M71v5zspJat8quQbPwetpKpWeb1ynVL4SJYoizJq1EZdBt5nNjSW6kjj7zKnydoFP9m2Prf5us1",
  "key20": "4fgxEs4YtEX9ZvJJbycLDuUtBoHxbUgRrWLpshpUrZKvGjHCDxwDgmranwfKdoKihpRynFEFmcUWRNCLNbiJuAku",
  "key21": "4eWVyCAhe7dH9VYZKFVxMUgwcRw9U7tRWPcZUkqgqmx3SLU96gihiuFK73owSm7TZfsM2TVTVt8UXguunwnax2vC",
  "key22": "5GpjJ2xdQDNSnjcrxoFo7rzAZfCx4xrH2jqRaVzxHxMRbzphQPVSfjP8zbBTKeHANTQJriqKkJgdjMA4Frf4GY1s",
  "key23": "2Mf6bCy9q7PGkizbVWj3AFaEoi8bFSCrNEDBUvfaKrDzEmCa8Eit8UchPwUX5hjQgaG8a8fxjk7zxtYs132Ph8UQ",
  "key24": "43KuRnynZ7tT92ooyYjuxPvrEcuSk5hTHkprNKPETfpVEzDQ7swDei3TJir9HST4hSto7CNwuNT6hLH1Hy23dg2o",
  "key25": "5MteXLGwnZSEpGjYP4Qr7DVmEpvWkUWifzJZE3f27nD1ZqVtuQDENQAUGycvzMRhJgzyFcP49rnc1yYAui3iAD8t",
  "key26": "3kVwzZTGWvxgZQo3Gj8kASdJhyscASGKZk6NeWwcEZrcpDZMeRBAvS2WaNY5q6w79ZJp6i97KY6GQ4BsK7aFT4qC",
  "key27": "31nUBs949jM2V9rFU9ygE8Z4HaUYUuEGa3LrwsH2oEbAbWik6jeiVUsxnrsQ7BVEH4MuMNE5kDrFcwyCEV1t9rtE",
  "key28": "3dgVA8dkSZpPvESqeUbd3qC2PRgysu9fvWyZ9i9bqmbRKyaLWdpR1TQZ8K4Tg8svkhtFT29YwYV1hZXNTsHMuoeV",
  "key29": "3Ny15A88C7AMVyTE5GJy2HTHi2eCKNf6MeMh6ifcPwSKvRaj9FqQHNVj6tR1Mc8gGiySXQddB5hC9r6GcVfRb6tf",
  "key30": "U6qQyzwYvpYYe3X1ZaNM7v5e6YMEogqhxTVQR5AEjT1iTciz3c8MaQv3nGxDm5itWcsLZmdsu5LEZ81jJQfkF5B",
  "key31": "5F6HAyH6wgmS9F7DqpoZ8g7ZaGtKGd7MiB1vvmmgge9rf1dbUfifpVYMFPnJNeh7wfAKa72MRG1a2ftXwoFDndcA"
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
