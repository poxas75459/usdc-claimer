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
    "3psnwdodkfTGNbrStr4Zmk49vgqBFXBxS8CmHEfkteo8F5fPdztmtVEvvYXzAZ6wQzznSBY6xG8vwPxKRbjLUxV3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fM215v8i8SrEXqVHSRYdZVxsLZv3AkmhMAEPo3WrNacDCb3NguqB4vUr19TCDZSALwxtCnfLXbjfUSbuYp4EX2W",
  "key1": "ikGQ5gd4kLHxCBsq1wHDWJGfh1FpkYor5TjbFEShng3rfE26KXKrZa6zMTBSxKR4EjFEgjuTUQRHuoXCT5fJzeK",
  "key2": "2GoihgBdRJqPgpzQEKHZvZjbdVezyq1y254NaT244iGTfyTb7sMzfaZNSPCKTSCX2CE7N9fi4kvGjFRNUjTyA1Vs",
  "key3": "3tSUujZHkNXYEnhH5Aeu2gWHNxKuvrf1pK8BVAqv1LTemUsVxKeNVZpjCu95L2kjzDHEgJwBD1BDTYREfDpnYaeB",
  "key4": "34W54itvo93TLbfDmLmXnUDhwZh1mfo7APEPYLXMLahrSfHhaDSNXWeonkjpowJVCRa4AVk3rNNYHYwB5vuW4SSU",
  "key5": "5FF4iRD6Y4NZdzSrSnF5wyXpYHMrnkN9rfBWxHqy4Ko1Gc6RVXw3xQB3rA3RJk6bXvRVstJu5Xw2bBw1vVs9aJJL",
  "key6": "29t8BnrUM13ngMoQET5RXURpuYMJ8hcHGNgdSSgPgaAA5CXM6pLNsjt5oRGLdWXMwzS2xpX5qjZGiYn9q92GTAj3",
  "key7": "3rT37fUk2YEBw6kw9uLhhGApYZZnoERV99vt1PUdWvX3uynsQMAnQLXjSx28n1AAnPaPRh2ewdrBax1drHRuz1Mu",
  "key8": "2Gtjv4wWLZWFx6GThC5nT8FkMJ8LUgFWGR5MJTqhiCwj4nNcEYxmB9P5bPRzVyoTh7E8JVM5K9A7ixvT7QdLp7TM",
  "key9": "TvoTCHpvmHBJ5KbarRHmnqPnBP9ZpbE1QeHWNCLpZXaWXrNUaE5kHz23zxu8NezxD91xrAaVwULQQB6qrdNK81b",
  "key10": "i8znqQFqWB55u8zyxu3iuoy1RytrdKVLfHpVtQGiCwWtmZoik1Y6upj3e32wG7kgfxCThiaAZojg9sPKr283dGT",
  "key11": "62wBwCmFUiB8uFuhxwCSFZARzRsFNFiuEcbHMu76oHYGvF7eTjvy5gWC1suk85U8nA9G3DpdTqqmpef9gqnXHMhF",
  "key12": "hYmzi2bRj879T3skRnY6hWNdX5YtW2es5FpWRfcYpceU9uJBENZdHVv1ouL3ujbkKmdRb9C6AWa2yynyoSJfot4",
  "key13": "5B55HNuXXHbz1gwrKH9XkqzeK6VnQSJqNxhB6J3VC9jkpBapH59eQkfQxmJyNKZVEuEAYargVQsGvoAptqy8mzvw",
  "key14": "61HNjGWaExQo4ajcDEFQ5Wc3wfFrgBsPW48S5XAzBtr8DXqqoVvdYp6fv7g7HC8KGZhcSCwfhN8n6g6pBX1ot4q3",
  "key15": "3j6MwdB8kiaDa9De7fbJ5CGfBomhVzUYYGd7mDQ11gEmViAGZkBvqCkFhYUX1HYQEGzr1Z86vwf16gknZvfcouFf",
  "key16": "4hPvzW2NG9PPXRjDQjkNxxAfdzDvVEbs2bL2MbbFZzPQ5nanZjrbJL9XABAQsyCtgpXodpd66ZLRw4gxCitmKFaL",
  "key17": "2SsdZ1jRUoDZRc84v7GpcrzxS51oS8kZodPPLcn8n6VkEw3wGhvMNqeczmF3FPUvjpy4qqVyDY2kCsPCuGCe4xGd",
  "key18": "2YR8u7hS3bToasaRqFihKKiMKc3ZFLF5yPEeZAcY8mfPUCLkPZeYJD4uKHFVUqf3vEHrtqztnK1t9T1XCeERziBL",
  "key19": "25v2PCXbejE5QVTtzvaHeenQhTT1MUXbFfgR2siL8o4FzZqUUBwxMSqcUG4cYSkqVdnrxBMufvwN1kED1RTwsxHf",
  "key20": "42HyZuYczJGxabKcQTQ16CLSr6otJNHkBYBTx5PrmE5TCybTbv1GQmBm47xLBT71DH6HNhGTNQtKkAHXaYizNobm",
  "key21": "2Fb4wgDCDy4ao7RPwPGmds1wTaxb3eq53L6hNkmbAns5DXSnzHzjWhgRAA7ga7TmKjyf9Au7qLY7bastH9u8Zr3q",
  "key22": "2q8y2G4PcpWtzZ5GptjaCn2823uTTEcqhQaPbsqGTuwrDSYXnaDieQHtDpU8V2cdQcd2iikgsomCqpJQXAhFknEG",
  "key23": "5tiG9iab2HgJUGidnd4bpUz85jkUAbEb5xoHEg8GF5oE7GayHopVZzJeZQk5cEwsGXwx8NRa7QDBxh6UitgNyh6N",
  "key24": "2MK7hSsMZYtPAo2MBegk214cHYNGaa8oZpast7jFL7yQ4WmXiT4ENXpHMi4K96SCAmCGut9vUfFyomxoKkzbp8iT",
  "key25": "3Hc5RkV8noPpaU4CqygXvpuwzQ2L723u5ubrJBFtX8CJG5RHaXFPxjBLKG4VyKeXEBDSdaYz7Sq2oY2qMWxroo3X",
  "key26": "5XK9L7Q31kXCKDYZjhDPho7s5JWJR5JGt6jKVyKgzwLMTBk65utrhijpnPCyyd22hszVxELzEPP27yjfy6qmQyfX",
  "key27": "hLk8Luvz8FVXhjaj9wk6L82mfvE5GYsR7ZjiLJRTJwauqM7oaHsh3wFznhD31kqDGx4nVuYBzfz5pUaVAzagJ31",
  "key28": "dVpeLxU6U9tWsaqqtmmf9jAfLY7vXPJVUu6EtAnExo4nhwAvp7roonQRFpggDkFA9qpuSNWjYHF6uKGc37RP2pe",
  "key29": "58yMZuPifAWfDYacpwcKhD844kCfjAsti1s2F51U22FJe9rFb8Gk6y8jtRuB4PoNtDkMSdX2i1gtqVsrcxHxmw27",
  "key30": "3GPNvY6g7PA3DbLsgbxqv6bAAYBoFVeWtiweYukiU5Ao4KKfeQAzdURdaR78eJpYKZUBBXZnmDB2Funoha8YyBx9",
  "key31": "4iop4duEp5i2z7tmxGBKyVurZwTRXDvihr2zUeBoxKFXYNXxLUnv7XBCkHwbAoc1WjHysSLPQq7PKdGdKSeboLLe",
  "key32": "3yV6Rwr4x4MnEfp19osrFuw9qXk6nh1JWGNHWxxpHYMV4o7FWL3iWZeJbPcaxdBB8ttV3ajNqiD9Su4vvrcNMZ4Z",
  "key33": "4tZ5JpPDD8u9YvhxLZqzr4Q49hWdjfnzpk5kTSsXBdwVWKrZypE5s7eWtaTWJ7jp4cr4YuKpEdXDyNr7yWx9aCtB",
  "key34": "Ej3MweB8mLoKbxzYsedkpZSyZsDM8fUi5ee3WF9eKR4MjEdXiQirHCKFaaskbPrfhN35ch8gBWGFPt3QiTMpm3W",
  "key35": "2aZr1iKDk8FgidwJECb3b6EYrXGeVTZdMGAQJrDUMX7sF2GKztoMZes5bWzdLsLxfpNPcBAJt5QRSaLE9Ni4AdwB",
  "key36": "4kjih6aKxoRkci8ajukqxsauXZG8NApdJqDVgmxQg5JwbWB4g5FdZLhkf5sfEgp3QZfgcdU1pNDhzpf76P3qFqTF",
  "key37": "4PWBPnXoKWBttbWy99BL2eu8otgH9ej5rAsDCdDfFGETWRSmyT2AVwZtkDEjTbbGKtp9rstzBUbVqRWZJ4q3ZN6U",
  "key38": "4eHH2zy9uykGP9cMd4YwtqcP3wyeoDpsPVzq12B1ehg8iMtHAp4K3ygbd2xZos1KbqQzHvqg5NDS7FoxMqc5UkZE",
  "key39": "jqx83SRWvfRnHXYb2NBt5FwY5je57QTMajAoJsnECaDknTn7aBqgwGAf14r6VN9TLqA1Ycr1cqskGQUDdHmhdQ2",
  "key40": "KKpDGQbysgkbYdpLJ3Vbch92QwBszgNggt3U9HQGLBS7TMvZEn4Cqz1y9kRowhRWHSnVtJFhBYQnqEdZFEC3TGr",
  "key41": "3DZNnVPNt1pRcBBTtA7DSUwQoFdvRiVxrQzSehmqvgmHotALRcAw7aFPkHpNfSKg97phPJv1QuF73DwT3hbcmjpP",
  "key42": "2KXpUnv1trXxnXLJ3p15FQdQa5hC5ZSCeM44Bmm6PEi9FfPMua8TWUkfusx2G5Txv6WbhiKuNVBTdcd1vNbNPjJ3",
  "key43": "2CQzx5e55ELEaaG6GWDu9mheBsWMLt38ARLA1yPWsbVMrkYBCytqVmuLZm54woqZNEhtSCNfqZqyoZQ6g3LFfhj6",
  "key44": "3jS6SAZmHo3ZCSBQVGMvrtW91tENbDLdW6jBSBugWKEH2BX8pZAL9bZqyB6EcAtHdvcNpukmZLJmanVPPKLU4QJ6",
  "key45": "Zcswj7bD2oxUYDvXz6vMLXF5QLCv5W7nNiDoUp7AjDoqTGjabxfQ8MMYMq41vGwreNU1tXGWsoVCzG89D5Xvtkw"
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
