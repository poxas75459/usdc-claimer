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
    "5mmUfqssxg64vu2wHsgDppTL5S8SxUB2hdct7vqZJe51ULqNTk5YPjWAWJkkH45NRa9MkmhseGizMDbUZs35WNXX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZWV9Jd3oF2iMCMYEu8V4jpnZkWtAB2JKQrE1WazXP2xjVJBgGNtYnKNXuk5LBUNQgJypoHnWc9YTrkcG8foZnCb",
  "key1": "CvEgEh4M5rYjjTxsMY4ALdRXHHkJdRLZ2GJEeqbM2MJKUyjUEuquyVbpnTzagW5sFj7yAp8K4gzrJdf7HPwbmPg",
  "key2": "nQ493SFRv6kXczFgZypBSA78ZJ78xTv2GUZDqrzLksYFEJ2aFiyG7E4QBzVGv4DZpaB9HFzRa8wjnyGUn7v6knk",
  "key3": "3z2qbPDg9qo7XxUyhc8fzxK2Z6hKxD7hPgah5GMbMFRCpheDVNhqGLgT4GFrm8qM7zRdDfTzvuZBPjdRu8uncYMb",
  "key4": "h6fP8KLDMkP7HMQiCtK5bU7J7XYT2mMMaYnoU1oMsgzK1HniWEegxZjdq9hVQBvpJHfdasYeJ6sfzGqKUeHuPg3",
  "key5": "5XaycpaDn2zakGHNd5S84NV27nAzcU3D9jdsgCAPzQ8jt2AmWi1DKeSHP15oCRzArw9niQbctaXyHTgoGFSkHggE",
  "key6": "32MdAi7783nJVJ13GyQ2Sb5nzM9Z26BbBMRY8CwFLnkYYUhfNtR34h3X2JpvcHz5zZyWdVow26rjssoXrGrtKTbq",
  "key7": "wn6U9MfbG5dEVYe5Cri8UfAaV5QctdCad9Jiuty9LVsDjrQ3bzzqWdDmxvxKRt4QEgxmPWZf6MZWaF5xzwwHPya",
  "key8": "3ASGH2c8KmGPAPZ81hY5CK2hcRQUCGyDoqvEQh7kGeaMU1kSbeAa3MjtSvqE5y4Ef2aALUXDw96GJ6e6id13cG5U",
  "key9": "5HZTudX8UyVxiJSVa2yKFPvUBYtrhMNrZsof3eFRVgow4CfrWcrviJs7z2waix4YbmrWB61PKvtEZYty5qVntXaA",
  "key10": "3f9Zv7mG9XWZZ4VtCVp2r9cJtcpzf456wnCSkjULqJmpsXQN4wx5sZFjg7N8em472Wfb2yKqw9f6wv8jRqsFDLXY",
  "key11": "3dwdh6VbDUo5MxBv1ZJmSMxSkHFMVjQTCrBtDrtThLSShzTjQx3DNM2oadDWhaahGU5b9evtrfhQjA7QcTMPwa8D",
  "key12": "2uvvS8KPeLQv7G66xrZczGqv5zj5Mzbuqs5EDeSye8UqJy2p7hJvaBnXykk5XDGEpYqEK8KowBqqVDgg6Vd4t1jQ",
  "key13": "5g5JLuBWEC2WCXUaWtNnYMP1vQx7ZgXQK4cUNFfXXk746i1vnQWefUcNrfsJXffeTvEq7fPiTvbMK1KdUHU1FfSq",
  "key14": "45y6Y9thn8HpqbSSc1uGTngXBYVZv5SGwxKATuEJkcwtU9xaZq7jUsXWB36FTiFCVyziSCxHsFDEBrWeoiWEyEcE",
  "key15": "44YcS5kgH5rhzw1vGxCGeEu6mRdPRDdJT8jNd8yWPb9UWkJces4eeYpU7MPCNoa3aGcCtorPQnqDmRCxbBfgk5dG",
  "key16": "41TVEUsYkm48nNVxfQwSxbTof2oBJLynaVnzomKkUZBdDvJMzNMJuDRwWAUKVrwtERLLNpXtUwA2pJgejudYxvHu",
  "key17": "3gYujkEJ8K2Rw9nLanD8cLEzCeWivgTWNy8hqtkApP7B7YFPrcJioDbC4ZdrDB38tj2P6qzgQjXxbVR3XGfVxJdR",
  "key18": "4WeQzsKN5JtyVSiHxGWJSUjcSU16wMA2mLNZQE4aiDC9cUdpq3M4ekTYYFDfSjebYfigBDdpvMTyJ11xb8hWnoGH",
  "key19": "5VBzY8QQ1g8tae6X8YVcYRb6CB7Xn1nUj1jgd4DBdF9CNVB31VY9H4Km7Kq2cEvqLxoDj4nJW8pZSdobLP3VKAZb",
  "key20": "3PUdDPPaVBfeyzPLdNbDtfc9xYXVyS3g2rAvhx5W2WWAaHqVwnLf82cCGEwCeWtCgcARWYnhKm2hiqPBZHfBF3pM",
  "key21": "4BvHnNPrs2zzZNZmEfi2Mx1GryNfdgP6WsfhGhB1JFakBW21JfoyH51RgcyuR9ZcN8T887KMB7GakgzLAy6thcf",
  "key22": "3YTNm59B5fNPP8NZL63UD9qsLwqsCET9jowEnMsvzZLjXKqYD9TcyXJuue2xxjd7iG8qKtS1if6jimUmjFPfufrC",
  "key23": "2yHXAsWe25HkmFfKuuV8PBEuhn2gif6ZeEe6z9pWfUZwVAdACabBYvCeUXARm3FshS4CnU2ZoWXmxL3Py6Ne6LD1",
  "key24": "TBbJjLScBXTB1SauCmSQweTt2hfBE1pbtyUcW3YPXHNQmskobvwsHHVwADRB2vq2C2N9bUcQ4bo4TCBeh4pj5VF",
  "key25": "35Hcw2t4kma2cVLEzYM1oEVGvVPeQrRBCJr4sQNCMsLmUaRZ41aN5866qBG13VGr1wqXwM7Y3m7AcxMhPNtehzRm",
  "key26": "3TrVn2iE1Bu64CNTAWGwfwP8NFwcFFQPz1yRiEfCqyS49Kztx1LqeQiGXME6AFx5cjp3k8hXqSZLCgbrYwLUry3Q",
  "key27": "ntEfSiptT2ZTbWcqKSSZg8pKh4M3A4946pZNzwKy6gcMrtQxnXddMDduRrJoKoFnARjkVoGNHRUqfgL11pLDZpe",
  "key28": "4TiUpFA7kyrRDjFftdSqVTxLr7awfeF8jk2oYiMtq6Euwpnc3v7K2NQVy7YQHdhRBinx3gBPJj7cdMpsQBkbxYAB",
  "key29": "3myqbTh5YidY9chgchUSVx1nWnLoroeJgwBDAsiZGZgKm6Q9qEi3tgS8suHbiYcp732zBr3ESEVuzXH7GA2bW2Zf",
  "key30": "4d7RjiV5XmUwDzVLoHJJqn1Sm4myXy8FKbEnN1VD2sXgXZpRRX2hd4mvCQDFLFdNuXBQtrndngaMQTBR32a9Gtby",
  "key31": "3fYF64kCG1KYofdaoHcxWnKpxcDqfojeT2L3pxZDayxpBZCQaXYioEh9zvKe8gj6ufdvz28D6Cky5PQww8AeAfjA"
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
