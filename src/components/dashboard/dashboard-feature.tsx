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
    "5dYwFXSE9yjujN7hXn7dtZCb4bCG8juYG6VfWgzBEgA4TkZqNmNt2ia9j2CJobAP8R5gpe3BoQgejjVHiaKrgoJE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rxiLFKEjeKNRft7CL3aJfgnJpaV2KyvHZRRFszGYskJ3tkt9tQXo8u88aJLq6cMzYuMttwkDQwdP3zX9LNNk7d3",
  "key1": "4cJBC6nR8DUuQAmtWM2erUR9xFo1KrkMAeXGomJDkSMwWQjeW2SMUkCDX9DZDdPkQHFKna2baQXT9awM5vFAhect",
  "key2": "4BVAZUpqEGgQoNUbZTW2pzAn53YciZZqcXVnr7wxxb7yh5o2FfczJUyF97iHuYrqPbpbXpc9RTV2XwTTPKHE2udd",
  "key3": "4QAg3qkQqdhKBueqaJdHmzEbf2xWnD4cdv1rbHJqtH7yWMecsrM9KdTLjo37cvF9HaWU8YCvoUqW6VeqCZGo8qMn",
  "key4": "2Bvp36ju71H17hhpeBMNUZY6AbiyZuMTx3d8cNNknrbuf1V5ZwT6SFF5bZbUxSC2XbWPK3PFJKQFv9ZLpectkaYv",
  "key5": "2713nVjXR6jTPvydgdxUteTqGNaUEHWGScMPypoTCNQ2yZVheAz9s1kPyW8zs2Reoe6JpXj43L8hKCVokv4dyrXn",
  "key6": "5Esakxemf9aLnmLyErvH2LKmgTMT1Ct7VSoqdtCfSBAahrKkxjNHkpTKdZQAhpTTqNfH8mBRK42ZZTG6GyQV6G7Z",
  "key7": "BkeweiDhKnqau7J4TH8mFJzhFTLWo5BEWGwbEnqGeuXPJPiHRdcA6Wbsko6evbLsnWbpJ1ULFSBZ3xiJ4kjzkYL",
  "key8": "2uGXWeG4njqe9dxwYJhirDj9DarQwHGywKJAiTosviJexThCkCjby8YhCrPraW2UUArtCSRgVQCsYzPG2z8eFFJS",
  "key9": "4jpFzhRrkExyhPodMT9HBUHThoNW1bvSM4eKrjhNgAVqaa92vVunPhJtFEPQUu6ZyLYeCBuaxJRCeTybNY9vkjw7",
  "key10": "3QirYVcD5EaBWHd1vzbSuGGcgq1WdyTcPVyFunQ4Yco1wWQvk6FR3ktthfL6DVqc8Ne7CtfJ3z51etTh5fpt2YX8",
  "key11": "Ng5z5kVdraoe7ALy3EG2Pz6KJAfjq9GCRTzg935wNCyRjTfrTpLhaGyFVXaV3MBP9hhjyb6A2NtCj8yiVhpNUh7",
  "key12": "vEpZLT7qNdGTXY5nEgpP74eXw3a4FtotnzMHbrVK3UXMVEZ2TvbaDRM2h5nuSQvQ3dfASyWQnmNuHUHYMUrj3pm",
  "key13": "egn1AFmaEbNwvG5qsMzXxQhzqpSUoUgC6DkjkMy4bPJujDBHUbfLsRBXitAPkzwGJzuKg4dwG2PZTWJrJ8zinuJ",
  "key14": "54s4YqFiuUjKLmZpKQ9eqXG9JnNfH4FkGoAYHC3fZPFywxmaSM5rg4CqZMeygTosbHfSucTp241EcvNjujd9A1oB",
  "key15": "5i7tgfBBJBv5LZNqfDuLnSJbFXFBeMuZw6gkwbXkjxwaX4TGYuboGtk46WoU5NJ31W8dzmEXwVQmV98zbzRaHhXE",
  "key16": "4rhKHVH9ftaXrCnyUXB8VMUZX9AeUBeKpAwJKLcsN8g8oGs4MHFkE9uUS3h4dyaCEKH7zVvPAPn9TxHxKFgrpHEn",
  "key17": "5YUVckDDv5zoVKGNJZUeVwjcH5CMeBVbyeGyhbuXg319LZHhDN7Ck6a1Gfv5FhNPiEZBCV6bwBjs52fQgjifj6Ug",
  "key18": "UT244jd5gpSK12xKqS7j6656rLWLT8zjFFtLvCMkrJ4VY7PGZys7bNSTvgTpvk1BFhjdy984g1qDnnGxiWLrCcg",
  "key19": "2oxWKheFRb2HU2xvqq4hpPQp4WmotUvCfHVbbSdRGhaTC7rDyhdU9fzzQbDVbZB11WtBCutn3grDDCKfmBfQ8S2S",
  "key20": "2wVUQVGRdnXJDKhHhPATAYvvBhCAWbTwNuixjEoTd5wuQnamZV7VA92f5SV7iMq9wkERGwsgChifaTKtnGWhnciM",
  "key21": "5XdqphHCdoBfwL8JakPqWVRYvdTQMX7fFXB22jDSdYZuyfF5huF2byBhB2hc9HjkTSUorTrPJjBLr6tBkSk3opQn",
  "key22": "3PtsXkXKeVQArw6N5oBJZvXL4L9NmH5C3ArdRaMtQT6LgDXGBkzskMGEht8bDFMLgJc5wq7pG2i3MtJSY9g6oKGG",
  "key23": "3NtSqTMB8MRwNCnCDhpbra66HdqvkkqrRXLJ2QoaiPG594V2aFJF1VunxqUrrzuoTmCRiVtADrTijHwC6M6rCKtf",
  "key24": "3jhyTs9Cc2vB4HCL9yq1Zu5MBN6b8Mp59gMFvWZPgrXq7DPJc4c7rr6ttGejRRKgWHUmCTMJQ8Rtk8Kd52zPULEL",
  "key25": "3hAesYqnNsWkefQLiVV6LX4pEVNycMUUYJ9vQT3Dk7YXXUwUEqXuQrqjN4SZtNF4KKtEsuGHXrWxvGFGFbUrkk6f",
  "key26": "5B7T8qfhPMmd2fLDSrKQYnis19anT9ShEQRAGK27hMJ9BsaRA1UsjzjVxdnUrEn2e7N5V56P1QYgbJdMXhzRYnjQ",
  "key27": "56dVoKpN7ET6Uev6gC2e8QKXnGWZ4YhXeTf7WfZQpmyYwwmGDaywRKEsATEj8B6jcrHNUF9DSUNP5FkdX5TW6JdP",
  "key28": "71Sdw5LvZQQh4kGGekN7DYFUfGmtJscV4JUGaSPHmzP39uHRvwnpdjSfnjnXYr3cGUDuHt7md93V3Lt2GNY2p2c",
  "key29": "56xdKAkzimH2ggXhtt2Mb39Z9dpL6S8GT3cnkvcTAEGiwEw3KMHAEqCGZJenG87sa2K7peTSJ9Lt1f3FGoGSATkh"
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
