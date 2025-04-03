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
    "38VuGj7VuYyRT64GbPWje3rJwzMUHYFz4EKPVu7T3cAsHDhvNHzfvbZLWqtFNvPvwbPYbMCd25PeThj12EweeAsG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JL4s9bPT2RBcLS1hABwYujRySXb6iGXrSV6WkgB94rJZMmemAxBaoFrHD2EM35HopCKqNJ4ARekihAV6wSdLA7P",
  "key1": "3QnDkg1h6u6pxnRVTt7iR8wxzcojQVqNRqUpJsPCZdUCWHRfJNhtCJ7yWidBRrjkKzyhZXnfHNZLwjFN4nXTVvHm",
  "key2": "LSpd9rUBhZHtm4n7JYmwZ1mcPGLunyJmKwneovuX79LwVvBQ5L5xfsRGYZfciuCjkc4vPYWWdmHDoUd1M41akg5",
  "key3": "45nqTERrzSUCww7yhmoU9FWbGYtoiNQDRf5u2YoGqQQbkzcVVtWF8nkpkH1K69crTFWnVtjBgySomvxZHw4bHELg",
  "key4": "2o5jeS5A1Q7pnfk3Yjp2RZwvA6zjtApWsVJM7fn4hwMM1aSGC4w855S3HDfjZYqV78vtUQwxoKxH2EeoxJm2YBff",
  "key5": "5R8j1MzLMPHUrFXZDZXpN8booNpn8XR7D6RT5LXLL6dZXTxZVQ4tTxDVpDg3y7FQupcP9GNvFJfcu2QfAKzgVtBB",
  "key6": "38aCjJJaPxxUm5y7MXoExXsh6rDPPfjr87Lyaj6u3bUVgL9PpgwRpGUefBgdkKTKmowcnxk6tvmQezMzrYNpxrcr",
  "key7": "4dpYQHvw11S5MafAXQsb4UPf4KQkAXaQg2B3EokRKixS6ZVxqzUe2Az1gAtm8XR6uJbEutQd88dcNsJxhywvLRaw",
  "key8": "5DLtqaaHmtZ7fhdPbsxctz1sMSahxwAm4KrVhfpu5z3Sx9RkaEMZhcgCJ6tZEg3MBZkPtN8JZACwQEa3o9iH54cv",
  "key9": "5CBrNQHVAg7mzBoAZQyqaGZXb7iNRpTA7ppNFLhcFWeRhnHNuW9hgXX3ECEucMsRPGpoLrJkWfVe7Taqe1cJaD4f",
  "key10": "4o5r3YTg9zkqjekcGrjyHV1wNx7zPN8n5RxfFfWuokecYNTXU4ETkrkABa8ztK4g6crkNj2HUDfRkAWUvZiQodf3",
  "key11": "UYyiN1YvPFVu2R87Y2Skg4zMMqEL31xnxvDFqh315KcRt1zXZmr6LDrmuCeBUgAWnj4dD7P5Wu4ytNuEGRNYCyA",
  "key12": "4z7esXySrmiZ31VxQkcohv88PKfRT7kiRtRDt6ik6S1TvNwSTPL9gVDy6PmZvQoBd2ZRzb5ukBAHYp8Kwn7h1dyc",
  "key13": "4FfVAWdQ7oKvr4gFL2yaRGhs1arbkgSbA7QXjDh7BdFEdB9vgR5wjJkE8bGKbnkuwu2ZLtN6NZyWUTyog5tQTMSn",
  "key14": "5WL1hcgMF2e4kFLfwNGXHjvxLktusZHMMm6vhRfVQuVGYxf7awT1tFoxBks1EHqR2PXGZ3hB8agY3LbygVjqACeN",
  "key15": "36VkC8FEWSZp48RDRiHS8sCgTgxvRCRxFCePVsHFzviZMSVMKswU63zS2k7iJ3p7qbuGXYE2wM2kn857CBmSXVhZ",
  "key16": "4JoTBZXMSowuk4XsoZC9psQ8enebfZS9wQdXhXRsntMkYEhH6BVrv7WbQzUEEFF7vjnQTcxp11BsSn2BwKPCo95w",
  "key17": "612sStdUmujTYX5aXkvwBqdZLg7X7StGxEjh6MkxmCS6M9E8byFXQskCtkXw9MySWB9WVDUVKx7Ua9PcEUvnaCCM",
  "key18": "2i7KrZpas1Mjw4sE3XrzXqG1GLFZj4qcJAqzV7jChV9WqxzovyZKu9RiYwHtoi48DD4g7jn43MPbfhwQkkicgv8X",
  "key19": "2Z2CGtaeCmFMsjJQxjPh7Sqi2BU9hpi3gcYBu7JfM5YtssTABbzQMd299xMLZABw1k69XsN5ZnsaXg4mPQonps3Q",
  "key20": "26nDmS6vbgbLdPPyhS2a4MfqMr6jhJY4DP3J19bUL7MwsAC1PXLFBfVcbsS264ADSDj2NGwcKQXL51aPXwFbybut",
  "key21": "4147HwqfXLkFFwbQjvRk9g4y1A7pCt6cusSG3xXDHATLPyu6efyKuSnbKRbfTqt6Dp4eJBbrVC3qEMjxUWa4afCE",
  "key22": "5jsQMJmS2RnqFWkU1dFmzfCBJxSz1kDy9MrDbovLwtz63xC8WVPB9hL58SvnJx5qBf2kg84SKKaW9rK3YaMQzBu6",
  "key23": "4GEwbc1RBms4azBL2mG6rFVgNkrERFhj9ajUiGggKgDASt6NvvxcdGWc2GiJHBxN9D3Nr4mvPXceyrkmEfVwskxi",
  "key24": "36Bf9GnbGKrJbJ8Zo92unRp7D8K6fmQRGS7FEmLJpQsCYwtA4x5L9xRAA2P6MeZXCZ7e9SNKVXXmUAVvUvSwKvKF",
  "key25": "2TDoiGpRoHMbrhJpgRbUW2xPpacLhrTZjUDspNpi4Y7eM8N36RiyYEhR2WXqRP9ju46fJzcrjpEtWbaJdWo5oDhu",
  "key26": "3YQvaEZYfy93b4vHr7bQX1gecw239d2ym164QCS2jDZscktrkvtAff1b1VMHxoJznc7NsharxswAkjjKjTA7qBoc",
  "key27": "27dhZEpM8eoAS3JLr4MHAkZsrWnfGCKNdG91ExjTjW3skRn6t9ouG4jK3VtCroiQngYcYRbHzHryKPsNc8GdVW1L",
  "key28": "5nGgFJSDNNqEVKVseYoNUQSjM2G9TeYmkSQBmGps3TCRUHa2DfopxmphcjSFd8SEFf8s19rAaqaXcSJRqBUQ7dB6",
  "key29": "3os7Rk6g7Uym7n2MCsNjtWHwqvi7QiDHsxqAGhYorQqwMNaURiRLV2TBcA6D51fgofkwsLorcztesQykGquUcXke",
  "key30": "4bhVG3H6pvn473Uv7BUQXUairDEqmmLK7rniMBgKdfARcqLmsmUd63xEmjr7FUqut7MFHPMbWeZYZCA9ENUTmPVG",
  "key31": "yC8stsFhWqUBCornJuwWrDWYQJZk3KMt4aMVLo1N4s7aRmBiP5N4P9tYCuKhVw1sEWNmBEktp8SBseXxN32r8dr",
  "key32": "5b3YT4X1NpudV4pSfVBMyTgBsrh3vqpnZmkcpK9prQnREjtBzsK35UXdiVy48QNedBguzg5bGYCaZd3rHbDFH376",
  "key33": "3BEZZRpWvSTd5M19vwSHGj99soQPvpWumXqvn7rGAjwrZii9r6HRqjpnXGSDjQuW7SLmvsqs1odwBCBG3jzxKY3Y",
  "key34": "3M4ZnSWLkSW4YRmY8SgxwZQtHmCNPNVkJqc1FS9K1iqfwWYVU44hZzVu4LvuJ9eyZLxAv8mTQbTXcZ1Hv18EHvpL",
  "key35": "5L9mXbeJu6TkTdPoYCZXna9vCWkG913ptbVLqNG8Z1jER79ZD7n2JGHR4uCuit6EMgwCNsWfW1xLmNwYAV6Cogu4",
  "key36": "3pMWgES39ZvqLNp9vYqfjeUd26oYwy4tsMm1u3AniqtfPofNaxh6CXcHnMhpiPDb7TVBs4j8R5voiLAUND2FGDMC",
  "key37": "58bRoM5WA822R5ErzAnE7bdNzAjoTSsGinSWwJwsuxSbXTkkuyCXLpDCtyGkBck1BN8UQPaUq6YtfyBS88GxXH5c",
  "key38": "5mBUNP45JTkaA1aat1xGayEyTmYggrSKcXct7XdcrMJASpW9gDwAhZX4QTpqwrdjjjoQ5sa4ErM914sgAetNfLf8",
  "key39": "4yJqkwqQpL58uSuVRaCiQHk1i2enwLMAvtErF7KhxmQ6Yz4xWLY6P2HC4FE1DCnwUNiTZaztgkPpokGqy8oDoBSr",
  "key40": "TVBvK15YaWq2ztisBb94fu1ui7e7iJD2tdkQYPZRJBgyDHhUwSqKtu8WsknYjLRUbYMW52bAVdVQfBCZmzus5nY",
  "key41": "3cmtgBvRMuaKyRih3oF1VgcugyA9y4RTUXRUcPuABGhaeVFQ87usTjH5GzQXsLeCPJREdA2tNLDgkQg6b6ePyqvT",
  "key42": "3tgtvG75cA7eT9JevuoJnMAWL2Vv1JbesrJjQ4yixajN7KHqJSAF1gF1RxqeGe2EkXMy2UF8Craf926sMX1T9hjc",
  "key43": "5xNfBar3Bw76k2iZFLdyejrD2uTQ5c6Tb5B39FitBrHnxtTJ4YaZFPkhAXbQc8RAMmhq5zz39z1rsYKx5VG1vvBv"
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
