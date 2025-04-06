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
    "3JjWBbac7i9FfY87TJvKEqUNNHahE3Woatk6PchPXnpksNJR7EaM4JNNYm7GqZy8fvYgyUG2UFLWZQV2Mt4WRNCH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CCS1P7ky6PactxzJNyQKuFNgfCmqG5wQLWX1AaC7DwYMhhksYJGzKvy5zg9dLoRf1tFUs9P7a4yfz4cDxfRdZEv",
  "key1": "39Ev2wQ9jiZBH14HM9b4Hao8eukjMy1iHKeAhQngB3QeLNaUFPBtBJidYwVVR9kXc8YGrRojCs8whPyZgmphtM4J",
  "key2": "5XkKqnEiW9s5fm1d4LM826FWxKnPosF8pAdAdESNThDbdwJdaFxV7Gq4Vgjkj7ZuUxM8DQYwYVcD9thGmbD6RwVT",
  "key3": "3TGsizGZndoXt4wm8LUSmJQmDkbLZ5pAxSA6Vn7M4Z83BTvfZts2KgiRKtQ9Jz4jHBo5WX2VbdpG7KEBHft81MkV",
  "key4": "2RCM9roKFkYbwZ79sEURVx3CFmV3L2nd57htd8nQVzX7nw4bjcnfwFFC3G5eW7kynM4RenPeipoorR9LtXgBc9yE",
  "key5": "5vvhMjq2pDLm8gzEaToeP2gSruH5g3GkNvmYgC1hTzK3Acdibbsjv8BVLYTuY8Tw9w78kvshxbKbgKhKzHgkUbsU",
  "key6": "3sP63SrnogXMserNFWzGP2CM7rWqNLwyxTdCJcKhMyj8Wx9tLCAZBjXPcuYBK8RqxeWVjCdT1GuAW2rZba4Co63k",
  "key7": "4ArbLZjFS2trhpCx7bfgv5khoi2xvvbVXChw74fyisNS7RpgppsAEgGbZ6TE78wZvZNryQrF6xc9pLttk15pRuQY",
  "key8": "5AkssxkfLVB3i3Z3MxbLoZFfDRXKcbJ9TGjByUUy9Bo8ATFAugwZ37L2ARWgPPTz3NpS4xbjQdQpggewMbzkB9zc",
  "key9": "2JJz98AJP9AVsCVYxQV8k3tWdbWG6rAukDG5Y7FWe9TLJ4KLeHjrhZs3L9JTonBbzGtDxAmhFfHrkUP5WP2TQ9hG",
  "key10": "TERQ2y9Kvr7TXP9sHmZWydPv8dxXPWiNLQFsv1MNXFBtpWQchPQGrFWZKXji8wMDKJH8PCphaDvXfaWqfTgApXP",
  "key11": "5fQnfbdJYPBijpEnSfyi3BWtuCffYCWk55X88SGfKYwAozwSGRhQWtA7aRRkjds8cGqhbShCBP7PbjbK37d72rgJ",
  "key12": "3ngzoSGD5U5iBRVmxazNrioP6bpRTJ2zjhZvy9gc9ckdnicy7Pry1vALNj8KPj8D65xhapB2pCLRRRV3KBqFep6h",
  "key13": "3eH9refxB2UEjeLUvLifsGn3xyFwwjuPRVg1eG7dGP7qyD5xJMYTWGi2eWWB4qh38RgE5RKoYgt2oTDiSVNEfep4",
  "key14": "5D8rSTdSq4tXReMdTnYoousmiszqbjq7f3WQRh11JFhVqjjCuJK8h9L22XS3WefSNoAUi17xtizvZ2xQvCkXYazw",
  "key15": "31ZJGZVvzKBR7SEqn4QBXBu8GxcaAx9kqvr1BRxQ9TLDgyg8uvKFUgGGzrX5UdckeTEoXrWoFh4XQ6vTDjwRoWPy",
  "key16": "2y8ZizN5mNkefwdzYKtqtCvjH9hhYGd9stFi9cAHsUTTt97B56i8YFpKVerzTRYWdqDV5aHQF7afKTWKBq5G7y6N",
  "key17": "5AXBVxvjxCGZpjxKTtNzWbNSxFCNr9DRwpjQAimSayZ5GCKPTH2XMpWrsfdRz2vzYEtra7kCEH3axnVSEC1qYtyU",
  "key18": "4sU3W2SWzXWUzMaLSpXMetjxLbjCh64VgMDug1KQ6oWy3FQes1ihVNDTLa7AXWwto8Brvw5QjUdLf6NsgfHyMLvQ",
  "key19": "2v3FRrUJLTBQaWYesA8c8DNVC1f73YuTpYL7krQVcSsW9wXGTcksgn7gC22WNvTrWz1KuMiDGBanGWcw1ir5dXi2",
  "key20": "7FTLu1jh4BWgw38BtR92rLcNZCWscUCgpwZSHJA2ZP1PSxU6QkncY3M5omTk6uxFH4ZXy8k1Gvq2x565VS77xfg",
  "key21": "fxqXtMbdyuq5EydVs5o2Q8HUSanPBdN2xVok1ZfdZr8hSUyUv3hBNryj6TEyAZojAnGchRPjRPqfWg8doSZvv8w",
  "key22": "5Xxt4N937WcAwu8FuJr7tf7EKqFfbPkPRTePwiJGpmF2gov1EcW6Pdu4wJp7ZWNrRvhciENeGmG4zVHD41qokF1A",
  "key23": "21ZPfefU1Um5MiBBWC5TKBdUfU6yUDXerU1PjaEySy6Js7XeEbbXMPBRNjAVuApCzUzEhWPyw5irwrYMyyTZiKeY",
  "key24": "26oqamEKhsx84jeRbegKUwNeSi5m9XsEhHsUcCMhvinduPJXAfBKZrnKsfgFDhiLuVctxSV8zuFJuhCoELrPcjFW",
  "key25": "2seawN9KJZFbJsUvuR8PA7kNeXAWEe9yLbtibwoPx1pVd71fd8ViKmBzzKBZJK6aSfnySgF57K61cUUzHqEB8TbH",
  "key26": "35kwLfuqw4ANY88vutHm7WHiAZktE2ww2wyL5FgT5Sb566Bqv1obWD7uXM3nBCFMrSWzEqRGm8jsSRgYRnQqBCTF",
  "key27": "3HbQK6Bz9RgroeDCmFPCoCrbQsjzkZvi1e773h8ysjyZKJddBKL5KWKZ5LWawfj4RnQprQJ3Wmggv76WpNsVSLcP",
  "key28": "21tpaxREkFTi5CrQmVXiycYsrV2YjHUSDq695kt15XEoVViQ9HZmS81NBVTUdwNidKdMXapfHASmAZ2XQUT2FyTL",
  "key29": "fiM5XsDLxfrgV4JCWGyxePjM9uv8xRLrDBrrqav7oUZxGzh2xv5Qo3823qicBSuD2YjGJnr5YoXw2K3pu8tRMYr"
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
