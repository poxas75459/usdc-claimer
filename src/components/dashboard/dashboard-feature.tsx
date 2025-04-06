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
    "2S6ctACy52668JYhPRACKWtZbv82VoqeE74t6tV9wr49JVQYEmMh6pP4jjHGFZDa7BfCmnJKvfj6yMRRG3kxRwuv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EMQqnTiy7LA9yRxiSoEgEmgqByheo3u8QxJJivkBC4MEmcgqKPpksktzQ3MxX7uMo9MzkpGZj4VG1Amk37Noqj5",
  "key1": "4gnkcpvCLSJmcCcTEeGaZoQizn4NsMRuHiZKfTnQuLtzjLSxRKfeJAZw4W2q71bKuYYzPwz8UKAikkB9abWsNhAC",
  "key2": "3TgHZT6m3ckruty42AwUn97TEHdF3ESipjcEK61fQUpWL5XEfJP5iD6kGEphsM2dsGS4HDjT8mXk5RdRwWeVHBwJ",
  "key3": "2nNUskpbgtcwgiLTmutbTRQwTThYny1uUZa7y4ZbDaUZQNWey8YgNME2zxbUUL4HsryiDFgvBmxQ1F9zjgqWPt5V",
  "key4": "41h5ckR2Yi7tNj3nbvF9BZcWqk2tPUcSukMMkFWRNGuXjz2HBiJQiKP8VhzTXrBqbFbCienYc7Avj4CKweMq5T6n",
  "key5": "5DsnobbiRBkSv7rBwoc5eBhnfGqcSum5mMVSixK5L5zG93EwyMz3ryNfuWCmsuebKmLMxNZNFMaK5Mhoy19j6FL2",
  "key6": "4TTtSxtUT6ZF2P1tmtXc7LUzF4jQRP4XEpwKqTmsKJ9ukgTcxmzCuNiiZSHEpkZczJDLsZoKaUqNhDNBPqwego6k",
  "key7": "32Mcqu5AzMT1U1ow9A8NRzarZ1XqukVZANvDueFvLk4SmEs81FPFjZ2Qzb9BFqaHzr9oDMXAuYjtqvExXUquEJMm",
  "key8": "2KmA2LgaPhBXiJr1Ze5WfLxMgpaPM1uJcDJkJeCfjTADh1ZC7oNnZPgimuHaEHXLxVEGMCY81nQyuBrE6cK8NmiK",
  "key9": "61aiiVGJ6rr2n8qFSrE1uwf6FmurEUJm5ANksoutA9aPfzXdPHEK3pZh3ACLaEcAKYiJNwEerBW4kDaVT52yxxWE",
  "key10": "4jAVBaXsgx96318TrhNsNCFfAJkLoCj2UjigAj4KeNZYUpd2LxdcT8FWSFjuxUnkW9WFu7V9aPEMocXsotirD7RT",
  "key11": "43aeon74PRrv4WffAWAdB769NsAdNqCEm6QWnL67RvZriT3ouRcXvy8kJziav7tfyS4qUZZJSamv1p1htSY6LvXD",
  "key12": "5DMW3j9efmyx6Cxn47sy9jCTNJeL7heMxHpAdFdmSnUyyxwcLN38S8cjuDmmLMmQdjzt99GTMyqGM4mc73EtteiY",
  "key13": "5qvwu5EmubALWZoxVYzt9K31TGXNwUByRQMor6B3vtoYPeJTQgdCp7YtkVWwSu6XNZe2fSYyTmtwsx264TxbRoW4",
  "key14": "21uLdRA9SnQMaMzcm3d38rZPMJnNA5SXmXHw3Q3hHVEyeC59fPMgvEJ7r6tHV9iz6CxNVor5cGparc3MnZV1uqjS",
  "key15": "4vNkHdHKVBf8M7oUVzC4oLsV4a4vLHkSYsW4efvqtRRmRuL9qLvD33LgqguqSfRsBVQXmgcaQcdAvrucYm2ZnmNP",
  "key16": "PXA1ZA58t5BWyiB4oNLxhCGLGf8FhggH42NEqrnrtjXWusS3FuJCYJVouV8jd86iYxrX7CpvcRs6ASW42as77qa",
  "key17": "5eHqowFNBZNqJ91XfJe1FWLPiJtzr6ic6uiuhRsZr1smDh4Jv2dV75D2WCq4nhRC7R3twiXT4LbAVNPArexs1NaV",
  "key18": "urbNTaaRtpVh1wSLwwCYCU3hEVzbnmSwnmn7TwpooKxLamBkdqAjuhTQdZRHiviE5EwAav9vknF4gJF4XE6M5XK",
  "key19": "5b5bp1f8QMACbmRyNARTxvvvKiJTLEtDZicn21PBgiWVksDVtxSn7mby43M7va5kTgQscxncCvdfJXmFqRrL1EgW",
  "key20": "4FaRV3fCRJ5p6qqW3X6fdamPJvP8frWnxnr49jb5bcBTwW1MhLKKBdgu3k3PJvbaJtsKt7mj2SpawN2H92bcaJXZ",
  "key21": "64K9WKp6XZv1LPQAvTk49pAH5XSdJqrFnDo2B6aXpYJBM138MRnKj3eTTmMXn2AvKsHCdfJ6fa8pzbBX1tCVLGyv",
  "key22": "4iLu8Qms6wWVXazwNYU1kJm8yWhPwPV2pse2iSZnMdzeauc2Q5GTqvzFXTFrRXRqUr8AwfBh4vpwxpep1syAHSRp",
  "key23": "3E8KKrDUbMzxttEKNJUR5hnXzTiU672Bb48wpEwttPqawmfRKTY2phJ5ddVis5p6WTsXq1DB6ZUZVXLNwYYVcpsN",
  "key24": "45uxHDF29XTcRh2wqkiJxcPyvA1ZshSaUdrTNEhpgitUV6uEzrKh7Wvo2HmsARFRPbgL7uGRfWsMTJfbQTpeei71",
  "key25": "35H4QCygqwfhVkwQgzCqJxAu8SiEHVW3qnL5jiv6SceKEeJKqTAC5b8wRGoukDxtciNGbtc4v58UvjNdWRJ527ZP",
  "key26": "2pDkE4JH8MoSvzKoq7DPMoWB7969h1ytnoCnMDakXLcYprGYHRY5vCV55w83HQdeMHsPjjbxoY5hzjphmmoAnGP2",
  "key27": "4DDSgrXREJu1mtcyKzp8VBbYbyBfLut5FAGF8wZU3Eq4Mw7EoqvQKhvJtsntptgd9FNqDYK6b6Rs2uoLHwUfpuXy",
  "key28": "5LfMy493stWAc8QqVetwiHnQoMaYgjHR9rrCtfpm8ZNceJWKxCKziCJpsCkRavuHTo7cY1eHk7nSoajHBwV9SgGe",
  "key29": "5EyL8CZK6yDXpq7vr1GsydVmVhvcVhjPqxQc2MR9R1Km8BZBuPr741egq7tfQ3CJJWZ2Lf6WWv8JasGxpE3UnzLk",
  "key30": "5UJqFGB2fczvcQidva4DexufnCthJevk3bLL4pB3tRDjkWomYt181C8okenso6QB4ZVDgauXmifzkKSvfvJ2kmkb",
  "key31": "5mZj342Rv67H5SnUzvfgnNYedKLTntWv9bmCyMz4nwpS3ARATS6YeGNBFP8sN9h3fqbWJGCEWD7vhwaF1BdV1V6t",
  "key32": "2FRc1djUW9EwBxfrCJHonDBh6WQABNLbXGydN7qjoNjxAjYNwkYPCUnVGEi23wasojGrb7tFd5wnMLwArkkhpkow",
  "key33": "4AWykkvfM2mr2c8cdtLkMwMPYgXUZBNqDYhdx6r1NeCRbNp8gNg15VCe4tJnRokuwEZmrnAHqCPfLS35ZirTrFkm",
  "key34": "3F6GygxzuZUpvX99FaU1xWPbJmdbNtNpfiKVczLRXuiZEhPtE8RDCWgczPyqzyt1cFAbXcoRMPSY2vH2xHL47J9n",
  "key35": "5yjdDLgdQ5dDqn4p3QAZVaqMcJy2dogwFBX7RaktLJwuxuH2fepz1vAojYpRbym7AMt9QGnCdhDpbYZ7MMnjM7d5",
  "key36": "PtYXEoHihKphuNbzxHCb5jfvrNrTninDpQ82KAbL2x5o7bP51siBp7R4quxoWz36RS2gmLcykZBvyR7YjrTAURz",
  "key37": "zS4AhzgkCaVi8CAxNR58Psfy1Yd9CxRv6uh3QVG41vHFTrWrRvCm4og7ZwSRdGhBrvHHLsvTRVdCRnNSg75CHP2",
  "key38": "3KcXntHwtwLcRVcMPrT4rdeZpqQDPzBFy1dDnZWkbZXWdqr8S8tanG5fg2MmyfjKVM76R1HqzP1TuUCPhXEKCEoX",
  "key39": "3NSg9Vf4oFeATW1WGq73XSFMapk4nAbX6GBze5ahrZgujcrmNBT51SUvvuMSDgryxi2YXxL4TikYT5YpaMS8bcjQ"
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
