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
    "4eUYoLYTjV1bqAVBcfheZBXdZKNEEJ8QZ67b9ir6CEqR6drnD3RFv56eLsLsnehPuzHu43xEsvk5qkwZ86Exg7Rb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4e1ArMqaKiTcPo5qTWPVfyuUBGfAq68qRSHwFX48bq7x6hW1Jq3oErXbojiN7txkFFtjCgqBqxv2pausahHRZ3oE",
  "key1": "3sxdhT66j9xkTMzH8HwQR2ZY4pMoM2brEyV7YdTj9hK7AvgPmRqUt6PiR6uoAqSDrxKV6dY9Kuaxxe8kRxTfGLCn",
  "key2": "3kFZv9Afp9rNquihqENxsNc3Yzdj53bTA9nGxDFuSwoxyX6AGwBAsERFitZqLiqg2k3NnwG4ztHfWvxssD9vgZ5c",
  "key3": "2HAi7uEWzoRmmo8557fuw7LRM62iV7FJNpMCSLSVr5wQgH8yFQNCaRfaxgyQoaD8fDifn8VCt5tuTy8uGzfSYw51",
  "key4": "4wRTHFqrNzGrdZuGgjWxwkuu4VXi6G5iY3VBvUeLkSkh5jeBqfa9wRgTFQqm1wY9f1nhyg2WHKaWLMUXQ4Mq9ij",
  "key5": "2qNTvPHZJ6qNJMDhkXMsaP1xtx6UVDPYmgmBwSyhPU6VnMSfr5iVjrwah9pJoTUwYAMZqN5kuF6WayaH6YVNZ4wL",
  "key6": "2NWQw5sUrQ3rA1mhEw7Pn1v3jAecu2T9znTcSWTQGgcd1uAHL4rAhLTgb58GxzVVvaAUC9oPVLjVxgFtLNu5iuWh",
  "key7": "md8WWuihsm4mRZ9vLcvwVWrZXVxocBsKV4gVdUPMbn5wR4CVFvTMqrVoATzPjEf4HGv5mZYoZiFbmRAH6t5AuZw",
  "key8": "3Qw6uERshkGfGnUDvg7sN8Y13P16xqEAuYpNHRmJm4JJrPFTG7tGwaU4fMapwVYdjZppJxgx7V8ThTfw9BVdeCV5",
  "key9": "5m9gDxQ4xZQAjNyAyuVPCPq8Uu4FuZd2HzWo7YPPVCZSZGjhTGdcc9ug59mYgYx3zT3EsCscZkSUJLk4nYZeUCjE",
  "key10": "WgaPFLLCo36GLPyMJM1i9d3EFw3e4V4DAJLTmJoGNVNPkVrqvCEbtdrXWwacQChyCgW9PJm1zxGXeW5dcnFJ1Vr",
  "key11": "CKqWyzNMf6X96mhkRrfhCTYAjKPSfLPxx6DQroPXxpRXPs85S2vSFpf9tguddxqBKHPXjM2yrV4e6GodiPYqBHd",
  "key12": "Ezcv9EYpkTk8RgsCS5sYK97dwmfF1352VCiczVkMK6pYLRyXQ9eHMBrBDDTqoRkHXhW6S2zteEswP4J9NnxzgQY",
  "key13": "3Z9SYUSAUYQUURufSivs4UksdggpqL6knt6jYQeR44tefg3JzAfSzPwJMh7AZV2KgXkd25E4uFa1djGULfnN1YsN",
  "key14": "2UQ1kvS2wUvLHwEyJASzJWkETGRxP8ssYaoy76vBXenyup5LMFFxLbrsLomH4uvFVh5kcwHs53RWGpMgayh9rbDC",
  "key15": "3vPsqn3Mstqe4EWmWTQivfW9xzyEdxrT5AAHcCKNDxG1RkmmuZnePHB7QbE6T45ZbbGQuLEid83P4SYYn7bWiwd9",
  "key16": "5CLFZDu1gNqKQwdCEBz2uLZSB61UdCpAgxbfCnc3DkfUjkiwWsL782KngxsbdHPxVY9uR4j3hQb5KruEXQKBTFyP",
  "key17": "S9o7aJJXGzX9YzUgPhkVS9jyPPusDM7915sk8Zskp1Upxnxc8jzCdT1p2nxEfW2mGeN1AZbBGpvT4mvfNMHdHn5",
  "key18": "5BEXytXLRtWaQFLdbchc2xg3VwxVdyPWTzqdJubQswbxBYXExzusSGMgH6bTMuiW3qMxzjRS9KrZXTAr36XWLu43",
  "key19": "2PT58fQ9XxfSpL6jM4QLj7KgMqXftKvU2zxf2NMo6pSFUru2BUcJnbsvxFxGdQf2RruXy1M4Eh7sjyDc5XhAMZfL",
  "key20": "3nKMcxxjR8yMKXbFkjeyxW2yJQXaa8PwrigbnNB2qghRjpMBPfsngevwZBctVoHS828dnvis7uT22C3wLxGMaUjG",
  "key21": "4XobY2i7szp1wuS76YPyjwmHvQkGckbGgPyQ2msBGLLjbhZ5DHB86MRxQgXiLPdPHhR4VHNdrJWfowL3JZc5dN72",
  "key22": "2bVkqV7KdWsSRxbWqZMh3j7muFBnekJNXRDkX5p9TmD3xfEPeXLY5fuLJwXFcy3xkofE4qoKXjHESfDXBerBJ7CJ",
  "key23": "4Eg95A7ToZ2FPdCumWAJBbbDryNJYZ7HQNenV8nheEEnmnqny6DgLYgnzHLWYoGk7TkMkqyJR8ht2XTx1ZyShRfj",
  "key24": "8Y6AKKnDMQFh9mwtoY9xcBRVFWmkjWXwZbymxPfzxad7BH1zjBjyTnPZfKsheBk41zQzf7aTKVR9B3tGiCV3vNk",
  "key25": "25CHuaQBmAq4GkA7F228rjeKwxVtrq36XAtSdJSmowiCcroLPiMAKwMzudVoUanGAConFT23ckGjzZGwwoR5Lvge",
  "key26": "dQ9pqNgyXTjTYhXCBXtTnW6fXw9CXBmATCW58bzj9nXmg1cDsAomLtipzdzEd4T2HSGfuAjLeK5PDGt9n3Vqnj5",
  "key27": "3kkH9fWpvHTqsXoAsEzY5Y5ADWqCVaBg4Lt5zkycdbHECDw7MDA1L92poBWhk2o7ioGS4cgH5vhS8Y259Q8oKetX",
  "key28": "52eeqQzk1uh26pZ3nFTHzDKMj6Sb9T1MkCoCuHT9EsNLxwC9pF1WC9JVat74HEEy8Saj3HWGH5hGXkb8AR2THwg4",
  "key29": "WyXNcUvqV8j1VnsTkzXS2BvvK2Qx2y28UCMCS8qM1sRy5MWD6YfMijKFeJWdLyqEFrWwqayUtiPEvwhKyQENJXV",
  "key30": "5ReKnPmC5wK9ABPty9MdEqT9FCTfUCkYEjdArt49VMes1yJpXHmLNyM8HdxUabVzeCBwMXjbTvMpzrRi29pap8pq",
  "key31": "62mzrxvrB1LLxzqK5ZYdWcLBXsgNn6GDrdrafX79PGBiYF7CqdUV2rGYUnYAXfFWQrLKH5RbWKxpq7Gzi2yN92L9",
  "key32": "3BUp6cHDxDfsnDt1pB9vY7Jink7gvRYYaUuCLz1CGmkWHMQuAyqqmkxbbMK1ViFihsNJULB5Mxg6pYih1ZKYBHsR",
  "key33": "z53FVBNMtkuAM4Sdw9GWrGMipvvP3Y4vF4LW5N2ugc3Lg6m8B4TxPcGWvQePHwNXodBD5iAKoFKmETSvnsYuzhh",
  "key34": "4RfmjXGoqRzBPeNa5g12YrZyFALPioyzxLQmZjiKFyGBTmugQjqbwEZ19JakKjfkAoLdatvrn9xKN4eD8DMGaEQY",
  "key35": "3RCSwZnowVqFvZN8Cg2eBwo6sRyhP6NspxGpgZuW7M8VwJiJoJBza5efwzktq74GU2yLpJVrcjLFwkqSXLz2pdmm"
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
