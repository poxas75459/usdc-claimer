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
    "4vvfbmdWU5hL5e4JHXKnE1fvduLKwu18dQqUF8PY6sMtUgXkTr3rCkuZz9fB4AwFcAsHNTsN3zGVwxM5NGsJHpjS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3StxTSK7qgNpfsao4pokpWc9YBF6HdVqcEQy8Fzg1gBuys661oMeEfkjhL1YKcaVn9ci4urJqfr2pfeXDSUZ3zAH",
  "key1": "3exuU1qCXHt4STUAPm8m1siBjhCJXi7DJj7A6hqePTusjdStrPhJYiTMUCtPY3shf9qDhQm9vARQj846wwZZDJN6",
  "key2": "5KWRHC8CEzwQa4ej5RNMRZMEseE1vMtWr65H6ZJsYZVvBNBmZrv2FbWr13eFGVjdCDcoVDKEuXpoQCgbs4ZxQsqR",
  "key3": "2c4ZPEMSmpkxUN5SPvJRXwfpMMDY4dqsSV6NecsdAhR4XPqDJXzC5CuQHFPRr7no4VwBnWBeavrjoXgLdoeqKWqw",
  "key4": "3ewpL7gj9eGM3Dy4eHDYWcmzDG7WHaEZFt4L4oa6NGhpa6XPbf1ofFTGZuEpXHEpKj3vadKocCdmuuac6WvkbNVP",
  "key5": "2Mhf2sT8AVwA7oi5Bx6QYn1Eyditkrc7h4H5A97qcgg5ycJ9qq49Gteixp3664FEEJkFXGxvPr6kmEkMhUYm52Jj",
  "key6": "5VFZoxcuW9XMU8CZ6k2USJpo1KGsLraWU1fR5EYJfdV75x9NeTch8aA8AFzXFTxhvhaFK44oRcdvyCExwDocY5D7",
  "key7": "2cr6tUeu3ZU26NqZp8uub8ZfvjUmiGasiRNg4ybZxFFJwdPNRbQ7wgMYrLrz588AGTc445ECVn5E5nb6aqy6TDuN",
  "key8": "hnwRkEzpLpZsUoewygdhvz3opqfwJGXXYe2c8YsF4i6xE28bHRUBvYeRiuai1afk1vxaFjuDxUuLJ4GnsZBUX2f",
  "key9": "5NV7LP2oPVvJHcmCdM849x6SowDFzLth9brn57YzqfgmdcoHmHZ5FfssK5M4qt29diixqDMgPGg2QQayJUJPdU25",
  "key10": "2gZPYFiX1eK65C2LgamzwLhT7JiZdnW9kFRx526iA2pUG9XMv9kZt2AdqD2BhtNKYTiV8BDuYS6d3zdx1CogZBzk",
  "key11": "2nhn6ago4sQcN9Tt93GPKVTKzRYxDpwKatM7syogyAnPjpKezsFWA7BJg1Khd9VgotjH8bDzpEp3G4LKKqBjAVbV",
  "key12": "5PsCQ2TzEwA9H3GZ3nMwJAEmiC3CTGTbcVmBf8wM8M1Qu1u1ncyZNtyDi5oRwT2m4NdSEZ8C6uzjGHakZ4fAaCwJ",
  "key13": "3SsCSzxtnSoYyUebDuFMRNGKipJPuXAiCKFYjN7NymPhjMsVjBi22g29hj77hNzpncp2zydX2RjFFWzxazBidNGr",
  "key14": "28C3BD3FT9mrvKwv8QRsf51FQuqSt3MGBkUyn3NTeDQ8AmdL2xkBF8kdGYrKyERryYaXoaAK6d65KHqpwQedy3oy",
  "key15": "5ixDc1ZNdsAoQSVUJ5TAzuD4Nja4pibtoM212SXsRWF2m6etNiCbzgQQxm994KmxPVFfyV8LfZdKUrX8wzgQQ5C4",
  "key16": "3bimNK47jibUTh2Luq17CYhc67AB5WBVkWdzH1XJysJzdtT1ojZSVkR4UfyWQ9gj3mUXyrQLsuN8B7oSvFQHzHa1",
  "key17": "4eWDWqZGetE9aEVFbXbHrJw39A5ogUr1GGKNjaSTvjkUQmmCdoprsCvbUMynHskvydh2nuR6g5Dh6xKY1a3u58yU",
  "key18": "2oPvCCGBZ2RkznTSbHVoVyEhZbqmYmJA378r7Dw62mRvBtuYpQsYidMGoGMh9cS5dWJuc3FJw2fotYPnLwYxq9EG",
  "key19": "2KbLk1YAnWbig9Eqnzpo2eXVwdMqGgdd8He8KXwh4thoTaiZSepBUSwPrrXPQoW273axxoDR6w3tLt8WU3CfuqWE",
  "key20": "3CgjsM1eCT1TtsXnsZjpSjU8qJ6EVuvTQbpQNS8sL2u3ytBP9ijtasnJJ59gMXjA4YPwEJBZsyA863wS2JxnF1zo",
  "key21": "3TYvdwGXdvJhMSsyfN6V5iU9cCtV6hXScVEdvZ8hR9syhNhdgH5Qx4zq4GnwBgGWk5sPq6gXbMhCFEgsnvLSZqVV",
  "key22": "PM7LFkCxbzyDfjEfBgAmVP4qWQzUDgNjHounK323bER5UX721tPhvegJuF3fvVaBbrSBBDXQZ4hA2Wwh3rZBYVv",
  "key23": "3stLkAYKuZVVfbq9hbrwK34FK4ZJYnVXkFpB9Qbwccqt4w4JoEci4K5z4oDGAFcutXH1SbSbixswMp3cUhj6WwFf",
  "key24": "2pzkabzB4fXWPJfaM3ksWjS1hqWf6XgGyPzv9NPVC5NEjtmQHeSX2T6zk8vqJPzNvuRFPnUhdkrseJWmTfed3ATw",
  "key25": "2775iHh6fdufUiw7EMLLPcramc3KRYisQ7ZdBAYyQZf2qRWJxM9LC7PtJGkkFhiB4dojrvWvzx8s3N3eQ87y3ZZM",
  "key26": "5gaY6PoMxuDguXSUgy2aJuecYhhwrpKFfJAFB7uivdvcNKBee1ujqvw7EGVLWj7gzSKAyyNC9W7bqCtpv53iCaRo",
  "key27": "42hpvR9oEjzBKyPMSbJ6FJE4Hri2Q4h5t2y5GoMV8pBf771QNR2GvJEdocwr65oJkvM9RK3CmMnR8Wa1uZtPJ3Ds",
  "key28": "2WsBXduyU6FZnBAEBRDHGL5XnWfhtZVvnbZtLgiWxw6ydgwtvdNY1889RnCLCwpcVe8QnbCNRJ4JYRYLQpoaNmXW",
  "key29": "31vjRc6yDbdZzHbEajhNVRaEvPqSoQQz1gnmLx1tmQUCXt3iHoWZWh191VNKRiEzH2KfkzXChAgoWEgsioPtdYNn",
  "key30": "2pwLAP1cgLX53KRZHymxqdpfuwVX98PTwsAyrZP7QZTCpiePCW4nGYt39VmQsT6W6eLergvCHkv12NuPULtAW4Wf",
  "key31": "4bXMCTNVFCY7jbimwsh2JFzjh9WZeJXiXynATWMJJUntgekVYYzWLwYSn3xyD87JkaFAdX4BmxaCvDPhzUq6eEHD",
  "key32": "5xDiY4AGgJKTme3ceeRPqUPUVY2a5rGuEmrGfFfRMsJ5Sy8jwdEuaHTGR4VQgyg5qmfZuU1od9PaP16FsfAZGvDE",
  "key33": "2mE62WDCEFg2HUAdbD1CqH4NxtUXQ6xfK8VV9QA7N93ZR74buujrYgidX1JzeBu4s4yRuAm6wFndZUgb2B2Bf4h4",
  "key34": "27YvfirJRgG3fnfiQLSfpBXGrUn5RzZFiaBiv3byh4agQWrfmiquyGbdHH99sEXQvP8jBw7cvfrbZYfVv2PcjKkb",
  "key35": "57TfUHD4xArdPz4LxB8pnymsvCKfbMpwV4CJNEni7prKvpm665yYaZNXyjjE7yEJ8whSoBYUu2J2iKhQVvEEhQkH",
  "key36": "XovjeSSkU3GcZSFnhsnrFLyjHbJucjJCJn1TNWyTpL1WhTGdgjidx3tuyL92qkzCReLpjr9Bc5hjvyNRbGXrRUT",
  "key37": "JwhoZ9Puf1o27FiMdpG1bETQUivjFHkeaRgR2BtAyVZadGdfmje64wahNRgYqo6WDfu6KfV4Xdqo7bKddjdQYEK",
  "key38": "672YqSBSDNZPegs4bodyqrkacCL6C6YLM1cZ8WWPNtw5iBs5eg7bARWqrvd4cjyfjiv1urQ2gknrh7Rk1b1XuJb4",
  "key39": "3eDLCvzCpxYYmADvJFiPmZkqyuVeZRUWTzppEyPgmrtXMi4tTY9ikYeuyhRqNuUrudJaRiCvLsx2hCdnc95jFuTq",
  "key40": "2DXZbppBm9ffLj3fnubpsJ4KHvgmr11fDxfNAoS2MkC5oJD7FFyTvwWWe9BppAURkEsWuFg3mSaXqUcffWDSMsR4",
  "key41": "3hikM27yMJmgwiCVG4prv4xAxzbXEQ2owjt9utZvfByXWwgcvKWvcaHstZ7kx7msz5CmgpaZcYks1YtxDDkAwTWh",
  "key42": "37H2v13BTpySwU1j37eu27wPmP77pjZefqvKZboZ92F8vaxUWPySHj3ecJqLLhZyt3kqdDhqpMrEcf88jn9pXcXE",
  "key43": "2RsPGqBtQ7NXYHATeX5GQtVNYZvXuXwJNZFiM1c7o3FZyMqjLxCEK7uwv5LFuf79eGTkjexz9GDTj5ntvg8ow3uv",
  "key44": "5Ndq7iTAbn1JAZtkdsPQv3TVTdHUgCaYda3xzp7zi4E48v2Mo8HDHYqhG1C2W2t7PWitDaQEj1tQir6y8MYVD8jC",
  "key45": "jNpeoonv8fEyhc4DBoK4jWtXHzo4rPqvWGiEWH3qvNCp2vHLQGxQ1Fn6wzZFEbhBZDJ8DkAiQ7WqadGnYBwZMxF",
  "key46": "56tLZAfbu4x7JTKCTX2UjnatTtvvzEVcwNJUR87z8HEPvf7QiUEHow31w331uYKYaNgRei5HZmrxSGBFkHh5k1kt",
  "key47": "3QQD5psXAHAH68nmd4NuWPFuGAtZSL4PW7aNsZ9QeSCuP8kJ1VHtfR4mxbvWHKoeDgCeZDcJGKhoBMWLN3KYRsFS"
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
