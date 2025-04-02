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
    "5noz1M4tC6PppzMkVud19WSKb55gn2ZmoRShjer7xe62prbHGo3t8q78s1mVpGei2QsmisRBD3PHCEQnkGcw8GVd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5S3Y2QzwMGFx3Sdd3bGrXGWEBH3wLYAds8q6bUbQ8HeUvw5ymMPBsHHBFPWr7xGegNDJsd5UQ9XT3nWcUBQhVZxp",
  "key1": "3N3Pu3zxS9k9hQph3BuBxh7yWqzJLeRZMWgB6r9ZCvMUHZKx69rxgn1NiWzZBiPLj7WZdPqASHLiu1bXdvtCXvds",
  "key2": "4DyYq4GuucGADJKAGXdiP7HWyCQCfjdPDMZRu8LtThT7A5iyQje51nEcfuLKEmk2516qR6esmmRgb7QX35xJgLS5",
  "key3": "5qjrX6yQt8sBuWkAWbmEFqDhv5vpycXUeLCqXEZTeyMYhuzM9EcZVYHKdzUpiLUsQirLjCHXvC43mmffrLuD2a5o",
  "key4": "663y4eSMAToaYSfKiXRz8PzoFBUpP1H8yA9GeT3DzPKME56DHX6qe8ZEpgW2ceEc5iiYbfzP5zKtQLyUgkTopyHp",
  "key5": "2tCav1sdfWiYyUP5MiPJ41R8FZmrAGgHTxXzHdKFXb83veooxUg6UXneM9K1C8yWSyzVEnAJVA5vzbqHchCSJbDJ",
  "key6": "3UNzkvtE1mKU6TK8fYF7oVczhWD5UNZqMAaTQbeVUjbMsj2dgDiJkZQ53gpX42WFvhqoeUeMYvCEzENzmkNtuaTQ",
  "key7": "bmjTEyLMeVHJUFMVKxuZhQAxwr9n455RC1A3QkyCja7YiZsWc8xWtDVeLSvMGZjd49tr1E2GcYCMuyJXVTSdhs7",
  "key8": "5GiW2fkGZtpAhVQVaZZ455485vUrjZZWBVR9kv813QMGDqd9CVQLrXYwthfX8fPPQ9jKRFrYoM8DxUoNM43JsxMG",
  "key9": "M6mr2AqejeJbGQh27K31vTqWivYH454iDQ3Dgu5qErN6nK8ijJUVoQQGYTMXAfNy5B1Czo27GYmi7qVwQHPNo7Z",
  "key10": "5HcswPZmmLGqphj3xQAUPScAs6UzxuLHuKNXHx5bc844fEKFFfdrtz3p3moW459DixyUpGNkMiMP7SdHTix54Fkh",
  "key11": "2YD4cF4R6fCR46gKHhk2MrF6tfSw1UKyyecsUjCb2moiTR2TzVaBF9JUiQoZ8uWiPhNkSTfynnYELtGXRz1MhhKL",
  "key12": "41rWakQtxrKNRWpWAfEULABa5nPgR7hDN76YofMXFbKKdFVCjhZ4JzsBe9o7SgiBuv5Jz7A3LhoJou1BNZdrGaW4",
  "key13": "3z8Rkr6AHDGPQdNeqqqCgq6CA3epJPHr7euWYp2Lskj1c1xCLtqWUoCJAdAPyf9UmYr6BrAvPRmyomUwPKRiZUCq",
  "key14": "J1jp3gEWZV6ibbzPzASd9PUzMfusgV2KjzsUrGD75PKPZLhU3TEy9nmByzBMPZn2YFugmcBgavnwwqmHX9bTSEG",
  "key15": "3hvMpzVbpyRNoTiZxEbxF2C6ba8nXj9ixWiJ8HcZ1m7EuSofFMGJggL4ffNPmKKuK32CmP6HR99fdjKACKnuhh3j",
  "key16": "5RV2wEPtDyigDBmiw4wAqY9ufRHTPSJdrCz2ssVKABbmQ8TsBGGGWB5y3TBEHnWDE4ZJpbUGMBcFNJfdJ2Vvfvwj",
  "key17": "57SRxdmnTTPwhpzhLUdmnswAt1hkYy58P9Uh62GMni1g2vgwhjEorYSx4jHSjvH8psiQposawuRwBLZUQvAR8ytG",
  "key18": "BXS3kG3MaX63wBiz4dWyUh54DeotLpAhzNAUh741BfkQHAqTGZX1JuPS8675Ga2ESjJWBrq9epcR2QMtb1N6HZ3",
  "key19": "ipy1TLo4En1JBekc5KALDbtgsvqZ7T9g6jBBs1jjmPfsuMe8AUJjChEQed5qVsKA7oFaRiBxayxNBrw82GdvqaW",
  "key20": "5TfqrjDWmZ2GQwiU7rkYRf2jkSmn2sZKTpK9DabVhmWKAF4gYfBSNwhM2P1tbupSTLpjveRaE1gm2kLhFDNtcc5G",
  "key21": "3SJRfQsYHfqtWxAYYPwoUJLBP3sPwLEiMvbYCeLWqtHVLJtXCr5pmSxnyLx3mEYJGApyZvGdyUJUH9yBcNw46N7o",
  "key22": "3JSA5ZZfH8aVuDXHcECJ5gWFg8FyvXbmMZ3d8VPPjP1k25qVhBia6P2jkk1bPfuqYfNrjTyD67b5KBkcjduxyMF9",
  "key23": "2FXBkQGrrQwQYGiuGGMmNig9Zimk61fyLNL22B1ykJJWVHJMG39KntBrEeUXW1m5Pa8HYZ6BBP59iWU9ZmMdmvch",
  "key24": "3jFPHuHm73Pzp139MUd5NdgQUrgMCdGscuxPph9GVRymFs3hukBLXa5XKb7Tb7oQdVHvSVXvx4fa986FnmbTpYLG",
  "key25": "37omWnyv2aRtpbVss9WoM4ByjW6XsyDUdiJJXfmyZBcy8vLK1SSVndXSLL5PJArT9xXt66UbV8idrJFddMAiEQ4T",
  "key26": "4rTaQJ8SJGaYj7HYSy1DGJfLfNTw5SSNmDvKh7QPyfoZYbbMwpvZD9CYikqux5vUi1mBrqF8WbyXX9v4yH14XW2q",
  "key27": "3Bp1rRUNjitojS7Nb8uxUSYF46uzfM2pDLD8nivKXb3kgQUfxXtXRevigaFcbfwFJ6dYmrBVMpo2N2yFxvdo71bg",
  "key28": "4xSnmRd9o1u6Cuy6KqbTdyBy7vyv21KUaq2k8VXfZhAQEMXpZgyzEvL2au1Ae65nQjGActrLGC3wGawEvojq4Yua",
  "key29": "2oMNh2m5iybwRHo52vikDjkHqMpKBzSmC2YHsDqEnp1KNLhUzhgKVZsYc29KDuKEUeUmxfKA37T9Wz7ueCXmmVGB",
  "key30": "4QUK14griyMPkdc27YTnrBSnc6bEJr8MPnPrum2wbCxd1kFiykpmfAzhscHKF4morqCs5UGCDQPEYr4DbataZ3Sa",
  "key31": "4uCqf588LM6GeKeQ1bzWrP2oNgWf3N9XpCDuR14tSCT3DfFCTyYHtDXm6YS9LzZuwXwNF3PrW7dZJ7TquRQ9fncw",
  "key32": "3SZM3MPR1X69z2f9GvtyZCefmyUG5VTngwyDnQtMeej1smcjKgu7rQwkbhXUVFFsrAS1q4Zb5kg6ZaJNoWAvK3j1",
  "key33": "vUoq7tNuTsTpunuuHbrk3HGHwjpo871Fc79u6oA5k7qujXE56xQCAURyzM9hUjDqY7rBUVcwTxNcPqeND1cnSej"
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
