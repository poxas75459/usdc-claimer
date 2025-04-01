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
    "3Mt3oWfhjnw7AQtw6a1AqY6MFSh6QeedBXCxGtMHCvveA7DhxgZVPcixbj1NihjLZiaFtbGTbFUCP7tJgD4AHBL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BaWuZSo2M1yQgbn1e1FnGjFLUVG3LeyED5eux7AybsTBEWmJ2qcyCL6PzqvBgWvYjpia6d1gsQnZHAn1yUW1XeG",
  "key1": "SoURu46ZvAXue7jCjmcLXLvWYJmgqo133XsG1WiT5d52KJQN3yLL3qYZAWrHB6roW2VGpqSe2HxascAdbKR2Z1f",
  "key2": "4DJsBKNw5bnNR46sHXnnQb6zSEqUkeMi7gsRbDvXxsfF1bGVzwXbPntDhHd387Gb7HcB8z5oKSzunnEzte8RmAnA",
  "key3": "49H5VF88iCVSn95amXUcdD5FEwZkRWKWEEQ4RoZQHMWGXbtrWWgxXzEsXBvybWHYFy8qRuHTLWHD3LM72EeXLY1F",
  "key4": "3cNgTQ7LD86NPZRfvJ9bs6Jpb9DD7n8JPw3Jm3GQxXgtct6mJyrpRfAyctYga5tusKWTZ7xLnNfDiJqSaHFpmk1v",
  "key5": "5zbsfDsKdU2E78q8UnHh2RDkjLrVVhb1RLbYCfrySGkHXTPS7FuWTc13hxxS6pLp6X7CRcUU5rN4eRBQChER6MBR",
  "key6": "5KrUtCShq13o3hFnYKvWT7KGijQtbfVkWSym3fuUpAcPjbj77eacyMjtMu23mBRDZMBptptrmwg13Sgh4AxWd86Z",
  "key7": "4cUo9p8zUCzKEMPyFwNHWh7Gt6DgJRwDdCq3HXA2n5PkKPgxcPn1mY7aARmfE3gNKUWPZS7NHsj2cQXbFWv1N9Zt",
  "key8": "39RAPcRnAkNamPgbBVN1HbZkac5DPP9oGd439qrU19cdK5RPDcDwMUsikYuX4q7bixMprynMS1ryQh4hBxmmVooV",
  "key9": "4Wfpg6WB5wqLMCrHKXFxoyfbeXpnYndLYTmAU2pByyR2XKFyZZxxu3VKi6zptFL8ejxUuKcV5AqxfCn57PUyLVUe",
  "key10": "5sa7tQ3TEV72xg7J2eYjWdCnCxVTfczgf14xWnQT6biEw8sRP58GfeR4FM1ZeG9TNxVYTDPMaMkhGFt14vBy961P",
  "key11": "mc4WNz6egAruPJc9PBAmcj183cwnKbd4CPWSwsbjcDsX3ANUWu5JzBKYD2Rjz1Zc96CtFuSPbDZVCSSsCABp7xm",
  "key12": "5jgPD7Q2L18Dp68k3sccDafLiF8b3zRCRsJ5Cs4pJCM9BABRASVoCqY4CxAktXMf9MzzMkfQsizqrPo2b5ktzz3A",
  "key13": "okQybVWqYNwMUSnz2PcjH3SqS9cUEYES88miVjRMyZNBj4SNYb89ziTSCs9VCYzBhezmwEi2n6xrVgB4FLsrdgF",
  "key14": "4SGdLJwc71G7a6mjNHnipVjjZ2Cr4tSNSCUzfVAXB4T1TzBgtdCJenvtow459hTXMokMM4Fo5bQXs2fvsuFPnzcT",
  "key15": "5X26DKeyUezuwVwUajrWCjhp76Ce12UiVWYfseJSYAg95FWvu9Zce9K8WzSFExMcaR7SM6cXpTfjUZPZHZLpXBZ6",
  "key16": "gmsaCxiErFsFQPpTEpGJ3PShwhVyEepE91RGtDdVCZ63XXAy9noRQAqyXnYzwyESJ7zV5sdEx2F7Ndcyo6jARRz",
  "key17": "2tN2mY2LXQQYgsjXQgZD8Ko9V1oeXhc9zieuzKDKG7u5LnFsY3d9ai6An2RE6DpUqZgqRyz94JXFRC3ZV6rkttSq",
  "key18": "43RtpPazUM6Zwf92fHbW71nYWmCfnxkAmTcprRPKNXD13oLVFAM84wuMVMsScVnmrUW6gdzmThE2YTyNqq3K2K2p",
  "key19": "RJ984adoRqmdxzFpKYQVxfZGxwmMkp7xpEG49teAQFQKeBieYF2NvS2bAabhWLcF51Mub7iumSaJsZF33gLamnc",
  "key20": "2G6PjYBgZSNnJWBiLLGS8mJeUxyNp1FhCEekVgEyCRgZHxTJzsHZ2aNjPptS1jpkuRXZjBfQv3CFYiKRdMhwuv8z",
  "key21": "4QxmESriTVKYYB1dkkB7f1pQjjh9j1QrS7tqGy6M5bZ2YpYp1KHaiqNPNiMkCEY6DZueerpKLVCt9YcAZXHAkRRa",
  "key22": "54FC91h6zd81rdrwLm8V4wT8p6yZdViSeZ5TpVLwMUfhfXHe2tSj1oCMRXwHnVawAnrZrDzVDqWurWiGdGKSz5uB",
  "key23": "2mciwKq8UdJgpKc3sokjv7bX8dX2CJ3BM7UnijP25cUcBRyP9ABSBTZqxsbvESQDk6KjMhAsqGQxPAPp3GgYoLda",
  "key24": "2Z8pDSSrtcnUabgFQ74br5JM4WYNqPfs9958BtD3dNTwScxntgWY4MSF4CGD113D4vBKHoBYvfbMSLnVtHBtkHcT",
  "key25": "4BHFRpXzjo1Tovq74eEwnzkiaenSTVdQqEcwjy7QwkX5YMNZM9337rMJQDvymK9hHRem7b72vne59NRczLmk77V7",
  "key26": "naJ3ffwB1gqxu74V5YYpivZYNDS2juER8G5BnWm4j6F9W5LoEpJbiYm4iXw5dnLP6Xho8b2fTe5Z91u4x4ZmGB5",
  "key27": "2FEhKSxWGBt6BJTNQpF6Ae3PHhCJtti5Fv2P5zcFM6oLw76ik7xuXWTS5B5qEoZotMDVVWxuGCcpZJP2qCT8d7DZ",
  "key28": "21MLXYdRfJh7NiT5Tajw3jY1KfksJV1bN82VpsERqCH1pBaqUVg5w14RtCTk1L4DHYGe5xG4fZWz6KnoEWAuiU52",
  "key29": "3iYSpUZn7zyR6qwZtYDNYECP9Yg7xQ1bRhBA18A6NsqspENPc5f9Av4p7h6L3zD6SHErfctRffQrBfENDU4XPxYh",
  "key30": "5HNZ249fc8mLtQ1Ldfcj3VqpTQmR3QMuQR18sjt9Jgrph5ByM6212wGKX3QNFzD5f9KYsALj9tRWz6YXdxMTBTKd",
  "key31": "2M8XWscALDcnX7yAxT4QabadG5jr4M8VmPcssK7Y3pgPYmBv6j5QbRPZobsvduqbYgxiEMM4jTnLPVyiRZWXYocj",
  "key32": "2PzbDkstiyZyyhuMRioX4EJdRxFDaFNqYCGjpq8VgDJxCVMZWXkigTEdNf9Ss3NLiyKbLi27yxvphbj3FPWVyHXA",
  "key33": "3kk8tEr9arj2atTQU7wG2MkpFipFVSWMx1RGZfaWFA3o6HKJGoPgn9GqgJSkxpoho2qbDiNfKiAZZfyg69JSaCX9",
  "key34": "4YGaQhVWcFHKK88qJPoeC5UPgeC4GGVjVjyFdktURLxnVtJouhSSFVxBxBQhjkGGdxzhcujYffYabkmtKJEbqvsW",
  "key35": "5H25GQmHUTgDdWAxPvDkeFgeYhxVtEGMJNmwKPLKjFt92FzXXRY6eSBCXDrRfvPVJs52Hi1Tp65SeRmzoLEssNsc",
  "key36": "5EXnSTq9Ux4rCa2pSyGTzPNPmRJyz2L58kM3q17tkDRtVYu1umSo3WzL4kyaZePs3M9DAi1w1SMPxXTHPkdMatTP"
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
