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
    "3Ei9JR46RQPKuQnj3GLWAJaDkNbn4souuwY2iNcGbNj3RiBtY2WoHAK5eiXZhSRS3YtEUc5jLyqE11NmJUHhAxGU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jKBt7DxJcfV57Usz6ceMxxU2QNyp8FCiu8iRH2Gd2MvX1HkstEpn6SeLDVmAggNGt7Ltt4j5Vw9YZAW9xVGR6wH",
  "key1": "rihyZaZvV4Np1AN2e6SrfjcR9rxJ3u24LpmpqtihZL52nCietK7ekh3qUJtHhFQxmE2Naovn4BL1122dZmnqVAU",
  "key2": "5KYxzrZoaUfp5ZWsJAahSPQ5QG9q3vTmarsngx9aM6u9kkdjpGgwZAaV6Tina4GQoE13oAGQXkESAdqzfwDzwHby",
  "key3": "5FXnDjBvDFXQTF6xFYjvcYnaDeBiPMnR1LgfxJEsDJPW2mZ3ssnyyThw8uUFushzPWyRfHV7UQ5VeTyYrMHK8ZET",
  "key4": "4u7xQjLhZSu89SkD31dwFndyddhAex633otqrBncMtyvkJXLRLw1UpbbwaikBTvnx1gdFiDtbikTfPKjYwWS2x1U",
  "key5": "3QkArMwQUo1UQkekPopFyF41GsXGJRMW46V7vzC9SHEBwGtMSVEsSNhAHH5G3a1WdSQnSVYevm6tTH1Wj3gqrJnd",
  "key6": "RRdvjWvKdoAyZmE97fsFDbpXWTpm5Ye5y9gzCGgzNxLagcYgAuANvtCZUL5uKHYyHmUHcxbKBDrpN8XcRsurDGp",
  "key7": "2C3BNu9bU6B3d6xT1jbjXKDtEGEL6rFNNZbk99YbjtxkcYp1GFcji4sYUFK4nbYChrpnkgcVFsHEkh7MKheJvnr",
  "key8": "5uFpmCQCokno2bxhu9KoVeeZSKD3hVuHL7W4cCSh5Pseh616CAXiFSgTbPr5gX6RkKswxmBRqFArh2eCezHByeBE",
  "key9": "3dUkoT59DhsPBE5cqNG33KbsGFwsBWAjq9gcGMu33z2boZbtK3bD2f56KptEPH7Q8ekAZLr1jcCWC9tNLSmokhjc",
  "key10": "4LsSaqUp1YLPyp5Sy5jWK3H4BCT9m4zoai8U7zSNbcLUxgLWHUcprQgq4dqLMDfWo5kLFJjLYVCan45UXGvDv9pg",
  "key11": "2g9VDyNCH8PRCov5pBHcncbBFw6dPLSRLsXDndUB4KKggY1gkiw85T9ZXyUX6JWu5XxjrQGK9pDL3QNc72H75ebe",
  "key12": "5auRtvdLHn6ygxLKDjEzCpRgBxweR1BfJxEGvXm3nqrjddd8e46UjnaikxYjpZSfkVkB8w4pfkiW7Ef2Svb1cnMd",
  "key13": "5yYvHkfa34g8gnnDp5kjarS3yBFrbfLoRDAuMoAAbNZBgKR7RTjc8kn7oMq7peBZBjK8a1au8kmkBK6DkYWnTC1z",
  "key14": "2p2rUA3hJ4Qja6cuDauA1TZ521mh8e9UFD2c9nq4SfmBP7Y1KWiQLDhohcGkDXxGeLNvAr2Y4RR8hjKaWaJumc6i",
  "key15": "NGiyP4hBHe7TnMwrCqBsezkzNPiNj2Zro7vf5JF2XwVS4TNenQNTvAdBq8yBGFpiYnysWSVw1DUxdfcjuV863gc",
  "key16": "5P6sPJtQsxmy5CZhFe7Gr9xYzLAAar6Sv94eNVZT6zRuMm6Z7BS8ZgZcW1Zb1CJJ7aMqPLfMtyTX7BSi5jW82kWL",
  "key17": "4Ljfz4M5bJYwTRNQNyzJCVWmbCMzMVTQDuBsRbGeVR2utwzu6hUbgdqXe62yVmLW1tqdYKRedTHn88MXDFHCAtKc",
  "key18": "W6wr8tteha4CsWub3kLpRQky84qurW7SH4oMA6ZR8uWHkj4dpG2ibDZ3hSUne1FeURfYEyKntVnhSNJPRmArKAG",
  "key19": "2AGfJeTZxqzVKT4wiBeG53rK3yw3JTGRj9Ue93Lu2mB6XwpPfbnSQbvBRqptY9JYCQHWURFD8t3taVqKDmFD2ZJ3",
  "key20": "pMFiGMZ1PuvQomUaZnJmBDdSb6djy15V82VzEYvptyCyAG79cR1sdtZLb6kiQjfgMmLxoiz4u8nWwd3siu8rTWD",
  "key21": "3UdwvNwDr9CuXAHvD6kH8LbwdKMKGVJs2B7TEmJHQNYGsTWruHGaSuNRH5eYDw88bsLwycrXBGHhkZJdF6UTfZfW",
  "key22": "5EHXAyPw3EGvscQmZB9whmDZPHwbcNSA56vmb4NeZxKy6W3KJWS55418bQASBZYVKXo9quztSeYVJRjy4banP4oP",
  "key23": "3LD7VopyNXMdaLFDZLf4huyDThoMs9jv9K6TFmi6kdnwAhEBGxsD7biceGdjtb8ySobg8biXhg9qy9bJXBefKAy4",
  "key24": "3ZYQF7GK4W6gUTuWASLckPtt9ZwZoiJtbKpqaYNJg7dnLxJ7qTLF3LCF4UWfafbsqjLGg5LFJtEx8cXjFw8JQeUN",
  "key25": "3imypS9D3oSgXCNCdVc8AmLzYuNYrbdnCHksfNhy2XdsmpsNonEjZVTChmoP69Nq7wszLFCnG6shFe76Vbaendn9",
  "key26": "3oAkyYqUYj5JHUXa3i8NN6T3SxWtghrVeqAWJPzV56L5p9AEeRmsr1spDhSDVZauaq4AqMfbv48KGBomjacvkB7B",
  "key27": "3acXBMaRNazNdfEEz7fBkLGBv72N31Z5YyAL2ABxW3pnX6XnixjfyqWxrQFkJM5hVo4SEjXjiaF9upQseM5C2ijd",
  "key28": "38Tx7hQNzZ7pDGhJaEE7mBCBdz57yntWRHnfcxRDipmZsjwmmnXHHtkp9JvZKTaA7vFjPqxHheJppwTs9QTifoFi",
  "key29": "3RbYT3BJBeLCT8VMU5e7C67c6JqyfkzGS99x94eLc6Y9rJ29iGPyM26CEXdi3Gqaw4BwUvvhajcxjstiz67QH3gf",
  "key30": "24s8s3w2B8LGP8ZTpV4YiiK4Z28HBcJGVqyVaFsWLHjphe4htbqYHmFJcs1rr82owoSFRKBYXPoRe3C6D59E17fq",
  "key31": "Q6ysq9wiMNytT6tkhE5mPuCfAi4419Zn2RMjr713YUCcaXTay1coH6rLpuuVFpyaX79rtxzWPUecjiceoiAiyww",
  "key32": "4oRygq4eQE6h1GwD37ujM9M3SomAnqK9p41wja2k8TCFYv71DA4ek8zVZWQaCtSa4BaZBFgYu6vW33HJC9Fiimz7",
  "key33": "34V8UbX9qHr5JDgPXT8oKqTJocD27Y4btCS92RvdE3LAVgqwYPRMViXDpdPVhoW3TLX1LKWTaMsWRbg9xQxA9m62",
  "key34": "iUxCQ5VCuGGMSAJxAUt3D5pUQK92TsBPL1F5iQgmYePhZ9vN6K5Ev41ucgRVi7dN9tsr55MjCWUPLfpDk61Sr3R",
  "key35": "5vmWEX6gzG5bvhdtsR929oAV4WjCp6L3FXqxb22pXzrSEYmH4DfTMRBCL5r8C3aDzvWvxzvxKsiawdrenSAFLgcH",
  "key36": "5bchemfMHXvb2giLnwoQmGVqsgoSepMPuLrVvgSqRAJsRbTqztgvKcK8CbVftBQ4wYW9nAD8tp4h3BKqqFstz5Kt",
  "key37": "3WVpHAwG7paen3Dsme16wL8fHo42poKQi7Yp8eDify7WBq1kviyYViVT4PkBYFHDM6JKkK9w7G2JF3grbF8Ad8nE",
  "key38": "4z3Dv37GwsG7Q5Rq4YUgVRXyzcnaZm2xeE4Tgdi6nHkLzveKGQGQtqY9jiLVAkgeXfUnDZiYj3ijrSdvyWnMHWya",
  "key39": "4WgNtPUuppaduCLp3YRjmcaX35ypL6egyupYhbtrhMKvxMykbWQHAQpoALQwtz77ojXUxKfdSNmvPcEav6cZwuKH",
  "key40": "9NSxfrkUy3vAaY8FH7Engwa4d9L9j5PgAmHEGsifr4y154n3J2V1YnQd95mbRESz1LujQVBGuey3EARjiDxrdzu",
  "key41": "5vD5n4zXbmXQVU2cQZgAXUMcGosmJfrpW9GxZC1mPpi4QRgURmcZVxQaq3HNtG4mycGvmWcVWCLQ669BR5ffmjgV",
  "key42": "4wofTem8aNRgHiKBFteD5EZWtdp2nvHh76nVFHh7oAth1uSZ5YEj7GCPtt4MrEE19MW9bMxfZNcWbxt2fMeHJAdq",
  "key43": "2uzV5xjbEcfJGdAKALCEDhNDhrRVj4fQNQigQzrUUB4CA39tALZuHNCjJG8irAWUtW1ZdgmHRnPD2ACsVUefFmns",
  "key44": "36mc1JdpseCQGqSBvVJnE6AA8NooQZdRDUsQCG8hmHiocdHRGVhDTDVnVsFZyaL3KN7vYG9fSqD9WF71RHa3rpYQ",
  "key45": "4RrQ4y8yUNvkpFJHftuUBeXWnRy79GsVCQBKA4YmLT62rSj1JRRfV3h3882sFshH7au2RLaZpN7koeHUNYvkhYUU"
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
