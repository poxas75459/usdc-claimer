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
    "4gAAamRymQWnm3Zg2mC59iknhZu3rDnCziyApWF66LBBFT7vGMuowFv9kHhjYRi7hGuyU7uEn6YRhuLEDRVuwVfq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AyVvnXMMJAvhrJnuBgjGdzc93iAbXRV1gZkk3zAS674bkmW82W3wuxf8rBB6DaUscTLJaWhCvHFA1wQJfwRX4Z2",
  "key1": "5E4KXfF1ZdLkzhQB7uuQi83YZg7UKWPDBBgguLYuuc2pos2vKsaXPz8twcLqgR2xZ2s7bbRtjhFGczxaaFxBZXpN",
  "key2": "5TJG81PBmvPykH3Cz2ys6t6DMdQfSuWPDmcQM3VqWWjYhpzGC6dKuK2R3Lq97BrrvVoU2dprbeWtVbdecQMRwTnG",
  "key3": "4dPu6xTomcc3kqMcJNnwV6fgWgDLHhUwSHLVLSiTb7zqsHzo2mY4pJ9zVgut5Nniwo4Ui8qZfTYvh5PNpC5BkGhU",
  "key4": "34w6K59fcR8KwPB6BJcu2iPZWXuTpoyxLXBXThm6PyaXxUbxDPWHnbUMDT9RwrBGBMbbHLh2aK7Uu9Y4TK1F6Wbx",
  "key5": "4bBHbHbp8zMv5VBEyEQAQFPK3FqMmUJkK5vEtsNJeLYBA3DGiz8T3ZPTF3vo3hp3EJNaaANfAMMyKw9kvg8U9Prm",
  "key6": "5wMDZefsZZCsFBgAJBnxxHM5HhUMUiX23tDGb9ewHCyAMAyxJsbH6epTFwyZec7gK5mEvZcC5NM8zCRUWfRcScu7",
  "key7": "MmpAo96AsuqvCCRaKkZhRXPyonzsF6Zf7tZUXfpFVFWuRJrd78QHGQCQR1CFpA5YhY1k6RCFxY9jMsWbmA142h1",
  "key8": "356oE9KyZ9cexmJrEHThQg6qoaZQTiSNzHLiJDp8BySBcFULGCxb54ZrLwfdLHSZVLX4e5dgFr6uBZJeKEwDmEcr",
  "key9": "63HAb2mJZJH1MqB3h5qPkZBY4uehjUexgXXnrrVceyTW8BQj8sYeywhujWVT6k2nKsfjaYdHwye7CoDL49Sfkths",
  "key10": "d1CFVVUMYud3i99pqJ6Bpo927vwyR3dEV5w8kzYExUVX1oW1ZyrPcPLRmB2duWyprr2DtaEjM4pVVFXYWv5Ax8F",
  "key11": "4Tb845uKHfxo3y4ErpRQvzqYr23uAXKEzyxhofto53fPhPaUR63iTGeDhhKmq6xos3Qawiyz2c2H6F48Hmd6BdrC",
  "key12": "byvoKMoWSMH6yfVXJ7hDThAEywt1bXZWMrtzTxU83fy8T2tbgggVqYCLLFckUpnc7r6Y7Kym2zAQge6cu6VYuDG",
  "key13": "ThMoVoo4fxB9YGivUBGLP6C9bngKKRVMen1gcCT4JmBUM5JnV9SPomMJrpmPsXXrUjnBJehryLBU7DHFKT4oi6R",
  "key14": "2gHocmzmZg8DqGtagpvFgF2hUGzna5hj26G7umcnD2XV9ucA9RvvkkBq78udtLG3HyEYQPqwRPwMATy49VeDWfDU",
  "key15": "5bxvaQEv7Cg7d9Up6t14peLiU4ju4qXKWLmNqbR65dnqmfU9EBcaBC1adQdxWC2ocXG49jbAR9TBg7z5DJDCPKcR",
  "key16": "5fe7myUQUMdKcU8sRgQVM153hh6DY4pj2wRB5jtHJJQ61TzzCjXJkAGsKDkDwbJJ2SqNRswwDFYD3Xn4ivUrsEoM",
  "key17": "3JJqyjA4p8Cy2z9XYQLPhdbkFp1Ku1bC8GgcJSsSyf5g23NXgQVR5L9zkQNTtQnFzuEZiNyEdG7eW2hAJnB9324n",
  "key18": "4tVcfvJoaGSngvDQgxEDytz6J8m3diqZynRGsLmzF3hX4mBhMScx4xiqo6DtmzWcWukxGpM3g2AraxRm9wTJUb8j",
  "key19": "24B3qKSVqeCmUw2r2u7AuLuTEvisQoZU6zTf88mwt3KSmUPXuYHaTnRXi7keoqBt9A1NRsqQqchHj5WeaLLkPWai",
  "key20": "46hSBP96t4vjswr5wpiRkKqTK7tJZZMj4ctfy4NoYaAsy5kJhNgSE5F9NeKTDbFbKKsMXjQ2MRFWSVSfSfT4wHZg",
  "key21": "2cL5WFRZUHg8deWSBu8i5FFaYxTnD46FS7Q4ZCC9Fw5wmZsG8DbjmJtidbzhbTAHeb8GbTf1cmafEt5dqxW4eWdY",
  "key22": "6ux6y8uhxbjVQMC2hZ7iQ3zhs25o9erXxkysEzdKyv4PG8BMUy66HCr7Pmsxwh4gmcCm4t8Toir6QmZDQPRRnxh",
  "key23": "58z77HrWqQLA9TEGVApnXCWgyQAdxUaJiAbyFozJUpvFJWW18n7x171E1R6Ha7KzgpBZnQTs6AahcHQcrm9uQLWF",
  "key24": "55A9Hv8vQjigXVzfwpbUtoFzbXrxRonrGepx33mxvU5EutCJg6k2VpX3hi36smAUcK2qrgNggTZdzzuJuzQUWGvK",
  "key25": "7cSyMd4NJBoWhKesjn2PM2dyhPTpJrMryhiAQdxc4H4tqRko8V3aot9kpMW7hiBFug8bR7uYEjrseY4QfCGxtds",
  "key26": "2jRwDr17PFvZ5UUJB3G98NSPzRtT3kVTWDxLw37A9mrbHSTkQ5vqSsL1QmK93mUu6miPCMDFLDSXtgm1972MLMp3",
  "key27": "3Ukrqnvgm3wPAUBfbci72wTDBteWrMCvG2P5TcnVnwpB3hZg99BPry7oYwvKTxRdaU5DFsfBM5QEY4e9ucVxxR5E",
  "key28": "415jYAhoa2jdau98wKLXNC6UbBfWjR9etQX6rjzARoQzNugaracztaqBeNePxxDzcoJifVq4GD16nwNf1EoJQsqU",
  "key29": "2peGXbwVZubUTh98LQ2U7gHcbyRxENHKxDm7b6Aoeipgdfh9n8VQDuQcG8QPv33kgknU9Pj1V6xkVkbK6V5VtsSr",
  "key30": "4mVL4GE93g7jn8wi2thw5B9WXhKi63sWz5xpbeehkBY7xYEaNiogsBbU1GKgn344uH1ByoghtsG79DvGPgKMrw19",
  "key31": "4tDZSbgyihyfrJRFcdEPnaDSRDrw3Km4kmxLLfBD9U6juNYCqNot9dfB4Kq8CywsN9SWyyZzK9QtHBvj7A4tGc7i",
  "key32": "ZRcaWW3XbBHsjN1PPRTKBzUns1wCcnyQKs25NVovP85MGsHrjs5tTzbhFbYWqjHQ57sF1pbMHeWvT9aiSadjcQc",
  "key33": "2WhH2PGU77Fkn4oFDnswFmdfCXCMksGTiZuuv9uRC8EE4KvX71YdQ21X6hdeMGLQRgb4DHVR3v7pmr7z79E3jLBh",
  "key34": "2oap3jqFCJHGHRPHasgziEdgd8MqxUYGpDVcqLsat5amR916rDEotguhBmJUsPfx36Q6FcXLACpMWRUD6NNnX2sA"
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
