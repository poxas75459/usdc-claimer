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
    "2xVtQRYcLL9V46WCyV6MGqDj1HVZbM7ZxCB6YwJpgMQtkp6tXyxfJpwxw77r8Y7GXHwopixg89pfk3pAEfAez21S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37kUP7t9KKciEkvMUEgfvrLnHuxiX9LM6Be2e922L24aCqMNedypVSUkvv6tGNpG7heupDzSiLyc4YppzDi2DPjj",
  "key1": "5vfGYneMXX8PvZHfUgwQj4EjJ1VCqWfb5p6CVQxxr5euVZtdt66pZz5BCQDdHGJHFhxtJHLhHtRtf4bRkACFyczp",
  "key2": "4zTy8gAmwxqoJpudN4FkTQADWLFUMYvLahXpt6kKjFXZ9LdSwW3cqNJBiUQf2pz4pDSNYFg8iQLAbva5gbVomDK6",
  "key3": "57MxLN5EC9M8irq5beFT6sspUwDXjGwWmoJYuj4kDKq2GPzQXLEdfZnYGBCvZ9whUVjm5tPUiTefoRxV8KHWaH4U",
  "key4": "3UUCV685muu1i75DZ8uAURTbqRWWse2VLCdh7v7egvD4L9ieTMHgwvfXYJXjAoPAqPcYMdavU9rLXQ3U9nxxNhT6",
  "key5": "63HttP5HKbWYhAP54saAp7xArBZmAbXxAKHXKzdrpiWfWXfcMe76pc7rtyb25koFU3ZyukQTvsr4rrADAZdMRDXD",
  "key6": "5cNAn1byohDDqHxg4wnutTAzPydFi9hkpTC47xzrMBLB5fy1icsX7hm3BEHHQgF87gaXRfgTgTJjiVyQ5ksgw9Z7",
  "key7": "2GD8b9mHqFHQx29MSXGgTEEysSvdxkxuwq5tEKm7F7c7qzCriEMGD2GLGKyJQncRHTfMBiHctcpY2xsG49GHEeMm",
  "key8": "45X8GjBxxFpSajS8Xysit422k5wxtBc1WhAeKLJKKZCAw5M7JWmyGe2zM74XS56T9MtMP71g5kKnXXhtXjmPpAon",
  "key9": "oVfdpVmFe3wuwmdDwgdWEoNhv8Pug7Vs2cp5cGhvXyruipnKP7LGUyKQjiUdDSngySH2pJ7TWEP21YwX4cfZVMN",
  "key10": "fANMpkUMkpjnBQBhYHcFsjRnA721WBqhTLBsw78ovUdirqtvYfQXUYiL2N9BiDNk5qJVXy9cjxCqzNB3MHGa6n3",
  "key11": "5dbFPyAABEGsXjqTvNLHewcBiEcvXE2PQbStKJ3DApMdcjG9FUXXzqYy3DoqNkJwbJZ2HAUiJb8M92o3ZNKAZd5F",
  "key12": "2L5QBfoz3b6U7VQZwUvsKh3p38pWxjremEKXjEYPZDqn8TMoBsyku7VpNmEVynZGamS2dLJAePtvPWmicZ5zhveg",
  "key13": "b6rtJdH3DxYtQz9Npz2Pom837kC3wiSbztHyXPs7oVsHng8XEqiaJpDB4e2pCsFXFM5N8M4xCV22w8dt5hNx3GS",
  "key14": "TAHcXx8RjezeTkT7hu6HtXQkeJQgwKXdqsMjpgwXpCKJAFCemDCdMC7zENCvZNQfFAHawZexEZbRyJkkKSL62xU",
  "key15": "owzVmqirBEc3rJB2DUsSsy7LztiYsNd5ZeBYgkauVqUeGRcpFGePRrPszGAdWoq98pvsJx5Zq8HvBgKfonvMeVn",
  "key16": "4YSNF5do7dPxbJBTgqyXEVWPNEWZWNxDkjkGYq7BHWV1JToBhXRYZWYVPmfnTrhkxa1CxkcqjKf4WMpBhX5TonaS",
  "key17": "QRCngBfk9bSrgwRrBt7QnzoENSLgr2y9nSx5CL6WhrJ5rMgGEec33ZnQ6Wfk9UBMokvTKs6iKfpYdJRLAYBfita",
  "key18": "5LTA7ex2mdnZJ5DXtzBvsJhMnKUZAgWxPyRoR1KEdTvmm94szCYZirH9ASe7EfxtYUTr5AyPJ9YYdpe9FhZH8R4X",
  "key19": "2PLikQsXNyqHToq63wJwcNSwWRhWGDScU211cWk9mAKB1Wag1P3kTLMuGTobzRJieVsKRCth2dMAGANFkVSBFuLZ",
  "key20": "27SxcTBZwbuc31p2VNJvsW8Fduda3rhknrA5tMbFp1GtV72vXj1t4iWauaV3tXYBkzrVFuPUMjCb5qUsbLH2G7hd",
  "key21": "i2rLwoyxMf42tjKW88YsbzngakvMp3vpQiPY5m69gjLGF46RuoTCyjMavVT8ZTHpYQaMYGUSEMkKNMFSZYQ7aeF",
  "key22": "66mGbBUhbtmCqCM6UVuA4ajkZkYuqiSMKCJK3twzYB8GA4KNvapos3yGZ2aUCgoYDddPbYqXWj9GYuuPF5L3CNfo",
  "key23": "31VeVgQM1enpJVWPrZrYi1CvxKCynQbhMm6sZ4YNC9zyVgjw54BpwLsLUr3QYcYDCJFBQ5VeZHtcGtuVBgQCseLw",
  "key24": "62cnUynvuzTA4zJz93rjZaeKR4ZNhUCTwoeY8aJod2cxpLgtQ2Tdh9ydyzEVqTnmqWGeZ2tTtWmiKPfdT41syAha",
  "key25": "22CWwqec54AwgGfM6RLgqdCdfXLVTQVCw15WTzkzhATEyyWmvG5XHzJQf6npszJgrRxpiqin6B9bWPZnuGrcRLhG",
  "key26": "2m9RQXpfpiFf6LErjDFwqGj2xKdYqG9XBiXaxx65hGLQRFxXZqhApVokrTdeCYnD3qMEjRiKnXef6aCS5yh9amga",
  "key27": "Y7H8GXjKxV593uCHAXRTpr96evJYFW3zQpuMi3UXnqwJ7ixSXUVKepACLC7pnDwHtChTnxJFwRdRnnHLqGfxMNe",
  "key28": "4HCApm5zvZULfRwMSL6NryuEqJBstNvcqc2bZW5MyBswuyCt3je5coFFdsZBiGmN8xoJdKYE7Dy41iCiYB64bjoM",
  "key29": "2Ymq6CwpF8ZaXa8h6RX8HD5KGvfsgaroxHFRCTSkesbABacxuq6f5onTgpu4dyJBVqgho1FzS2jMJNcoYXiffy1V",
  "key30": "3i54R8U29sN3K1VTww4Z6wc332XT6voR48dVqWuLmjU7saBNTCzqJcTj1k4U1DJHEKHpRuatycjaJ8qX1ypEXW5B",
  "key31": "2jHPgYNcN8gvH6EaFpVixB7QvNBJK5yCeoabJSyq6t2aHnT2yT9htSWRtgv91CTruK8RYs6EGEYhrGh16qkEEYqc",
  "key32": "Sdk9nGmgPBiDGzYKRjevPTQB5PmKxFwXjtbvHhgtp1Wj4riSiBUaee5J9imRSCDTGAFXnGUQsf7VdRVhpPJXcGC",
  "key33": "4CFqVmp8BKQmMAAaa92jKd8VzYea9D1SWviHqsPSZTw9XPhfYY81nsG4Uhmhd7AjiV6HQG9ZxA1LzYZFfBE1V1gX",
  "key34": "38GnXSsPnVZAgABYkysJfzGvus5UHH6tTmcXk3kUDtQhR9FKXL2a7eF1s3UanNWqESCE3VsJ7wQGfduQic2vmwK5",
  "key35": "5RQHBRVgAMxjbgjQ7BaHGJMjVz2VTnrq7n5zQKRN8c883gzMYzg4zSoCPnxZGYXgU92T5utgeiUgtjW9bKLB8xVK",
  "key36": "5B8yRrX7TB9AisgaA1xeoiouMo4iZZr2koxEqS5T7jbxLPD9X6XC55bQDfnCx7Fgskbs3AjtFvLdMJNgzdyRwjZp",
  "key37": "2RyqVmUTq73Ej5SmcY1faxDmSRGxXzPLEGM21HZarGZPFA3bURbyD41cPon436K8QXBwXopc8wKKtFwvUXswaTJR",
  "key38": "43TabQekCNhrL6sA9RkLUKni4CcnDgYfofSTEqM4omomHdqRd8xP4bHjESmwcbx6CVDXMnpF6kwVuXQm1w8V2ndn",
  "key39": "2isZHWuqpcg5jrzMGWwy1nDQwv23gsVNG9L1XLKokeE6UFZLmmNwU18SJQ7DBwMWoiKtYMtQUbJryt3nsFtuePQR",
  "key40": "5wh1kfZsbeZpGUjTpUd2q69r5YjKBaiCPeVLeAFTihxmtWsQwxT63Y4r3ZCSGU6L5nfXcMu4U16Nj74Hf5qneaLy",
  "key41": "4Xh6uvL8nUwDmd2iL2Lk7oUry7WpL5mndGzZhS6RoaN2DLLbvWYULvoD1cXVtMH9xJDVeoJNQaUjAwu9wiwKcPM5",
  "key42": "2N57WMzYa4SjSXPj2pcCNrwkS3riEUwE7cPd9Dgn9GzLedB9kLQH8wNzsYjXF93jJgq6rmPFeYC2buQQApxcdLG9",
  "key43": "37vnMiyR7VhoU6Ddi7dChbXqa2VF6ctUqCnM5CJMLQwfdLvm53bMjfTjjpmjNFYkU6z1TStPX49BfgtrnZeA9DrC",
  "key44": "3H2ATSiyPcjDpSriwGUCrQMBuiGMQGBWgv6bgP7GA7JPP66cBipkSnvxYqSajd9BHpSrmvq2GeKbeD3E9oxbJBVg",
  "key45": "4RtXuNP4YAL2wzfomjcSWCLA1YMVdyBQ3MyMPAjeXEgaLWSh2nShSNCRQAtP3doGRQw6n7zupVh42K5Gso5mcHg2"
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
