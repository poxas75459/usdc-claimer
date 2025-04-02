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
    "5DMw5ZUCT5xfDuWaehEcGdg3tJpQjeh9hH2rkzqeYxyZsjLxBHS3oSwj1QDFsPjJnKFYivSNYMquSJBA69WjJzmE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2n7aA5C5fKjvcQoyWZLuPrt922eJwjqwNJgCxV6zXX3XBg7LqY5DwUWtEigLHwt71Yjud69U1Md9CV6UHWUjYqW2",
  "key1": "54EUR7JdJJS7bnRTR3XepqWAE4VqK1EmnCj4hx3NEBqvRqNE8t9tmrx1wGfuqbUBYifwfN3SD29vdQ9Uyy74yr6W",
  "key2": "MS4cRyr2zh7Wr1SSBaNQn51uwcjY3TyuHsFMWmGmhhsvnAuPBdo7u2HjYNXWKd7GRZewAMAxi5XADFH4WxXC1MK",
  "key3": "5pS6EgCiDUxoJzF7GrwtdyoAjATSn2T1LERGY79SG6AYBGGRXackjk6NFh6jkLKTcRGi9n3EY2jeVZRXtqSx6Dg9",
  "key4": "WKAA9m1kvREoMHRZUhtHXxEjs7HPwcinycCKDkvtbcxtc3LKF1WtVwhrAsoLUJiaKwFZSsAi1vu5ZJCy54mBQ6F",
  "key5": "4hG6bVhaLb55zNwWqqxwYb1gM48JY5Cz4fgcLM6g8ij94w8NL4Ejt9NSXhu8jY1VYaHKvLqD9SWuKyq1hVtCsuXM",
  "key6": "L7SAKf9qAh3wJ1sdEYvfgLbdjFwPGKWWBv2MNyzP19PTR51LzWQ7anfr6e7o6Kfr3pZo6seVGGhShq1nvMCfLft",
  "key7": "56xnsLcXXpEs6cDfvP4wayfGzwoSDw5uXkiqx26jZkMKpQNBCvBHwuWWaWmXcYaiTNAEKTBesekxpJu9QBeEK9A1",
  "key8": "3DdK9zoHb58cW7eBk4fbtCxyf3cTNWXwW7rQytCeEL66UsxGx7Kn3ZoGuSvaUWqpPc6owqci1ASywFWZhK5K34Nz",
  "key9": "4mbLQf3YiTv5MEZXX2XEkT578TTKnb9J4KowxAjL88WGq86dL7DVCfGHD8WasJsbc74C2kJCZtNXaTad8JJudVUk",
  "key10": "5UpnBDnE6TDCGpCS5Zn4Pekcr6csFodzoPDcMAo9xnm66jyH3dNxjq8S79ENKgstKcohZVdZjdxBpwV7N1xgA954",
  "key11": "5T6SQ9dtKBN85f1VVBe3zkjtiMdMLEzpRDSP6TCyMJhUrWm8Jcup1hRP5pNtgDkKpM449rJxQKZKDjjs3DjB1BDT",
  "key12": "2KS674NhX6dYVw43SFxF4zDBFZnPP85uEmwbX7a6CSngTQgCBmWdyWtD5AGorD51fZTxQ21Hgyd5nUS6hDtHWxcK",
  "key13": "dMGxGKbR2WHyLz1vikgpA6pw2RSoqDSHjBaYwicix6awLZTr7eKH4C82nmZSJPcxE9BMKkivgQyVuGXx2Lv123q",
  "key14": "4Y3xa71zK5R2DHdoZRG7G1Kp44ybzzmDj5FGXhfoSAMGbQN6VtR1BQdecZyfxkfprLoqsLu65ja2xHR245JLcPrS",
  "key15": "4oc1sdDB9FqwaYAWj9FZvrsFoW2kRjynyP9oasB1ySjbeELD3oVhmQi4Y7ybw9Nw89QXzBSKixjHpynFRSPZf462",
  "key16": "3uRf56c6AVw2nbMwW8oLvBT8daKktUhPWdm4iD4yq9KMWgfskkoKSXQDjhQM3FEUKs6kWJQDndrf58ybASz3Gr4T",
  "key17": "5Jf5GNHrQAScxBob9YGbiZBTq8Lws74ddeVPpmYFkdvazQhD7WrBZw2tKX45fHgh9YEGkNVMcgVoPeZAPWCc5CKd",
  "key18": "2e44kJvbDrP8CQgJCxivkM5rwfc5JaJ67KsUBS8r5qCLVk9kGWvZ3By2WZ3AimJu6nAVCxLMSZgsiPjDc3DLdxyq",
  "key19": "3P72wHRxGVTy9USdSqRxBBJvzcX6eybVHhdLjXbzdsF6eBsmzh6peuMy38UtryQvQzNGw5aWVPF1Rwojsmn7Xc8M",
  "key20": "3RDVGopgN1mbDG7v1Q59k2zNGkZMdV9Wmagtc18F4k5emXmhbpuzxQ3sfRxuseuKo1YhgnptzVeQkBy9NXNkUp3P",
  "key21": "4pgMi37XhKBvhLo8PvEVFkbBnUPFkgPzB3YimmUZ3sKcdrcUmDVWMgWfPSnL6bkemYsgFuVqtNUJTgi6VeUt33PA",
  "key22": "5VrEQddCbFLgm9hF9jnZ1D77xFLEcWhoAjc6jR83t7dbRoqi496sPrE2EELgtSRZveCSKzwSdSDsdRhrRtV9hJx1",
  "key23": "4W53jCBXLJetrNrXm3FJr33AW8Jwj24tRV1QFHnQNvBxBHsXEnGDX22vzWBLXnD47H53932CFtXd4UJKhvaqpfHp",
  "key24": "2aQ7SFY7jgB3ZgUicZyXfHvumPTxHQUpSXrUcu4uNKxP1djQUjVD77nbtEXyvTrBek4yZKRcCxXY5wpDXXDDcuaL",
  "key25": "4MkoyZh1sRdXriecT3GBUgohDGNsqGc9RpfGXrzKRygkDT1HSccHVHhWie1DHKEeD7T9m1occPHWktJxAkRAEaTj"
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
