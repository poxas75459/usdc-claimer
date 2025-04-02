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
    "3YJ3m1RxWfQ8Kn13fBHLhG1cCd2vpyGknEWqF1vdyi88JmvMXS3SHkCk5kg2Z656hwiddoL2nUpn8iRa7G8VgLwu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VrprvDh9SqVifnwNdn3jzPNDMn8CnMbB7wksnfQnED1m35R5g1XjfFemyYTWAf8j7JvomSvqUanKEPMKZ72TGbc",
  "key1": "GkaqQfHPj5e7t5PXGTm2GLrUQpXiz9DktxeF4qgsDzo1wXVLDqgQkgCeGFVhAnDFVQkBJLCcahSqkHsJFMju6nG",
  "key2": "CFjhTrZ9TwUKwCQCyrCLA3k5WS8PWgznCgDfXfXGnsAPi1F6CQ3HnSoFzxuvUMqXE5YigmvbzskwFBVTmmt2ssx",
  "key3": "4oW7ZfBQuDYS7w56idyF8QAKXQ28EXNZhtp3c8hbxgrXNzDxp7eas9YSE6u3ydNc1nkW7MaxEe3JFSZSxmHdsdLr",
  "key4": "31tPrXhePssCJwMMkh1TdUSFspQKS6iKy8FVpzQwuiAAG4xRECBUPpzB73UUnxnxwTUTsZ7yrdmgaiDKDTk1UcdH",
  "key5": "643McjmbcRWn3coQXk5UeTijEKf7xZiuXqu7J3k5rn5HMxyaEqMGghAy5U5TZuWDtzmYccrBy7hkYFay22TLPG7M",
  "key6": "4Sxn1BHcxszbcU3MUyNJbngHte4dSJeuiUvaQC31LZo5eAbbws4vxsz1megwLjtsex4ARwriJkYLm3M5LY9c9stc",
  "key7": "5hqX4RPWFGhn7YooDH4vBisKDxmFrGa4wfXH5G2vYx775e7Z7J1no7dvPRZRznNBTFDEB7M2PjD8E53RYWsxfH9d",
  "key8": "35CY1a6Nc57B8LFm3HxYqDuXJMSAAVWnrSCVEBKKFcY6sgxjRQcf14STuSS3uDhTvi4mVE7f8LR4wC3o8kALq4nW",
  "key9": "4aUzYH8mFVRswi8E8zK8wesm5GQbToTeymYQUp6M9GcMjbNKQTU6nj98qiafhgXZA6qrwMzMDfhRxFgFWKDnhtPD",
  "key10": "4g1sSf7vULw6AdGFeD9s1uYv421TEAEYQwxDiyvFne2DmSZjrF1X7b7paCPf7WVWFc9xCuUHdP8tzjhs6CcosvWu",
  "key11": "5qRNkX87MGU8JQz8w7DorsGrEyayK5TDznFmk8zADpUWi7pjiJqiUm1cZf958E56eEGaNXT8Fkb3N7RFmAQ6y4HJ",
  "key12": "3vPy9he6cVeAGbMGwPLshMj8BEiLZ2GpC5Qjs4Zak2k76KyzihmjmjkJyTGAFf7beEmvQS5HLx1Pe7XEbw166Gxr",
  "key13": "5KQAGAVYweYp2GYpvGN3Cc7hYzH57tuP8TLkrbUJmsTY5NQYphEWArGwL874h8Tezs9Eur3ZxpfANhUWeVQTFVk2",
  "key14": "2q5ZSq4BgwXB8dc7m5AbnKHZChH4MU6bmth8dPn4vQoWBXtM2qRi5JzGcxjKsgNMXjMqDJy4FWVG8JoLamez2zaU",
  "key15": "564YvXMhhVvUsrJr7SQJhRKNHq77tA7BY29XUz8CRD8ViXvhcU3pFXsquS5aGHGa641eiY1jUqSo4AKy92Qj1zb6",
  "key16": "2NSC3enCHGCBf6zH3sKByXQp2XCH1scSgj71KswWftRNWNyCSGPBdjHxhkaTy53y7GfJCbahs6L3oGeDQM8uKFYC",
  "key17": "58iTUtWmmgKe43FvgFYfCLVhAhLc2dxbzf1nhEDfjxVG8Yx1RxMypytTeS2iyBhLgG5Z8H49gx9WEt3W3VVDWyVw",
  "key18": "4mAL81ssB8hj3s1uWfYoxjH8nnvgQxANeTq8dtM6GHTeeaBp9mas3JBitmmkStUBBEEHdrXyRUjSmLfheo4jNCx6",
  "key19": "ndyFT8JNKnX5ahUNLmfVrk9vmxc7paQWWTEj28k8d9DAw9wGPQWuh9mfzQnTqypcjwUzB5L3tBkY9qfZMdSRxoA",
  "key20": "3uWVCpDoYPwEFdAC7CzSazxpgwj28ahVvYXCFe86yrDfBQhLgK5PdtHexPANSFAsWtthp3ASq53Z8szkDS6w9CVY",
  "key21": "TAATTKmv6qRxo2y1aw3AaeNyd3Lhb5KteKugsPHKzrK1xgWNRoZmYzmT9mVdkHAF3t6TFqQPgY96WKWeB4kv8hn",
  "key22": "4wpeKmmAVucD7yQ3kEdRp1z987KMwPZ8tN24mrNGz1idmfNWZkHm6ViyMhpuSG6ffLRoCi3kpWBBVHwWZBPMbHH",
  "key23": "4BEY8RTYxoe4ew1oapp5hH3ouq4GfHm9PppunP3kivMaAWSrYU8pZibwQe8vnF21TKFyhqYZzqgA9BPbcvoSxajN",
  "key24": "5Dkp2stD1DZpQMdjndaBsnEhhwD6WETUKhPDb944VVj9LamVVH8KDrCfdCkwFWNzBgXZyrtXnHUDHxyMVMdyQkPj",
  "key25": "24CYphuTy2RaAxzcKQSjc3b2TRAMNEctGrprrEmxwQeDej3XZQvsTshF7zxPtkAW4v4uW4QsLXTxV5RntEupvdRE",
  "key26": "5Umt16b9TiHhMDXN5PHu3xW33NKBnqwyZrWbTZdxNyr25bg1FDCzjHxEJK8yuhSzPySh5bEedN3XESoKvmzZGTBg",
  "key27": "3Adf5iKyVQKA2NrKZXyyLbN1rW8m8uNdspEvLV2gerAoqNbLtYvpdtky69cP4oA911B9uCxSZJdscjyTrEhu7asw"
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
