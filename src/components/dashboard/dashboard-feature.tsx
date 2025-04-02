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
    "3opMSx1XVG3KTiXK8CapzhA4NYgoXFBWPgd1iQ3oUPVS8vL4xPXUDaUrh4d4v7JfvrQiQ4mCmhsgpZaukHjQtUWm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DTKHHTEJ2GNx9sWqMh1fCxnKezpmj7rgFS1eMC1yBrGGw5sjNcJrgBtDX4cueiTEr4AcwJo1FvEMdkqkwdachsT",
  "key1": "ypwPWQej3bfXRe5yj4jDnbCWU4BQE1GcUY9U5rpArt7nH3EBHQN9FEis5ewdYRZcuCDXfFWufSU8cUwW9rhJnf8",
  "key2": "4kMiQLK9D5VrZzMBgDgm3iHS43xtEmo7RsQPyY5Naex9JT2SMsmjDFpQaxUBgDysvds64UUDb7dDt7Lf1VaQatDN",
  "key3": "542jmoX8YLNJpMcS5fptWWvG7wDSkC5L9yqT9PRZssRPra8JkdzXhzL5DpK9KepmbuaoPsXbpvxs7F5sT3MmizcL",
  "key4": "29X7iLz4uPPjGBuHQL2uPFuQYCrPgNj98dmjoPo5bbZCEA8WDoL1P7U9mvnpDncRg2rBu3zF493QzdXchEhbdrB6",
  "key5": "PV5UUDoaFHqZxcp569ZPhnpdMiEWRobREZUyDBUwETT7BkoJB9P1VraWNGwXs6YfsD787gZctWC1psXttYrR9qA",
  "key6": "4CiV2Dog4TTX66oQriz3CRoQ8FXeJkHnVujpjKuAHS5a59Jf5BoqbN3bB113M8QrPBWAA1KrLfBo1S4GZtgnKQsM",
  "key7": "8F2TBVh9ogSEAYpiUos1Sopwh69JoT7ZGVC8R8MbZW9RWVrDkG8QWqekuT2E7BLpHaUxV5VTjdjfDDEEy13dYGS",
  "key8": "64v2k77EwUrAEtNdpt6hjgABzuYhmB11eYFRSG3BBi3XDoESCXJBD8JFHxb78egYq6Z99ZC5UnYjbKZLMA4MZXLe",
  "key9": "3Wx59HK7xofcpjCPEGsvqdYyNdvYn9NP1bPD7KbSYegsQS8PjMu9reoLHr1t39pcgSi6xwDDAARy769mBUFV8Ysf",
  "key10": "SPQi3kHoxJhDynFDRj9Qs92E4sLZtoi6ApkqyL8eapD7CtoBu8QNSNRshCxjAdYBzkt4Y8nusYL2p65sCXfS2dc",
  "key11": "43kDFUvLMoYWYG8Hmv8xRyjFLVioeP6zq8VR4ksaUTg3ak1JGqbDZNMRah7XcK95bnksoFMNo72qbWGpY69RXXYg",
  "key12": "28HPxXXwudtc7fkJGQjBCPrsPtAwNCz2dVqHigB1Hgzk2C5AW22mfpvzdWrTTpQpjiXczXUHu75ECefZLWZYPjxt",
  "key13": "4to2kfKaH3xKnTcPaY9KVvBVNQhE8Hi8QBbnFj6qzWMVMpUvrppSxBCzo7aQpd8oY3TMiQZjp7zUwcpbQVELBZUb",
  "key14": "3wTQQU8q2Hcg1YdwEnpzJ5gAjZLc92zm7MoUWber19jBLxr9WZbBfBh1cpNfBq5SgnZuHdgpyAZadJow5sZBq66d",
  "key15": "o3SgV4VgvgF6bY4qH2j43xBN6z8GYyEBpeut5eujCLA1a32PFAJmPfktLb1bPNpTX6nkmYTaiwSLm2ThxmwrL8Y",
  "key16": "5LcaUS6mJvpxsNuJKmakLeURtVz5BrNWjgTgw7KBHZ34jWJeAQCjU9Qq6MjEE3v2Dwz2TJmrABCc3sQJnpM8SqQ4",
  "key17": "dNrNaksW8cNqyaDAkxqmULAjyzXLhBLk8wnEGj8o9i2WNqksXFUTLhz3XLCnBhW2r4h5pQG6dMYSpT3BZYkxWiX",
  "key18": "2ujEAfAtfczD6fgEHU9em1N8DSvHwKFccZ3fUiHukMVb2XCQgiuAZ6QDuRazYAzWSiw7BRmxpBgtSa4ccsqJUpjJ",
  "key19": "2QNkSPnViaEbtdafL4j4chFu9rM3GRjLCyWR1hJaV8LMZa8Gs8zxzfaU1TneZRHX9Vp9fZD36ouv1YyvVBSidLYq",
  "key20": "5n8sVbNDne9j8uYsVCtvypJoCEZ7ACgweWfd6kcf55KPfZHRG3uMtGZv4amrbFTTzfTKpDELxmZmVAQqVnr5QVE2",
  "key21": "UgbACkLzhzwN2udCUq6Yh13Ra2HVhxmQyWVVdRBAwGBqHx9qAraujqGXkWKZfJzVegnBK62v5EVHYcgTsH4Gxrt",
  "key22": "3qh8i56obKwcc6TD6MHcNec6L1ZTYaAMGh3oEDmpYx6u4tFBbT6woVWYZRCgaUi8rXBxv42QEfrE2ZzFXRxowpjj",
  "key23": "5cYRKn2BCSTDYUYApNoQQp1B4bgdCWno7VZgszjL6qJQWyYFmp8apm5tFxUuLqdEaBfpZoQFHSvqA12NZoEeb5Fo",
  "key24": "zkktuAxBdAtR1giRNB1GYbmH6PdSwKZEN22W3HLicRKqTfyX3GoBr6VpgjWiXtLPk3wJt5hfBfcr4XzLeGZNB8Y",
  "key25": "5thDvBJq8ReeENUhmnJvUx1yQgG2Y2UtzDLric6HeYDqUQAppdwe4LAv3NdYb2ZsiiBuBzYYTfh2Wn13RRYjdc1Y",
  "key26": "3CQixpX7omoQFCfaC21y6LqZveZX7qyHYgYpDfTtF1VHb4ZCAq5KYrziCoUWYCNydUZsu1SVMgnvx8PMxN5Dgx53",
  "key27": "65fwnxQia6K8LQPLjPbRgdMMAiT79kfoezNrNi7RUHGE1N8Kp2WpqYq8MuH7x8DHUVpQtX13PpkAmfPzo1kMx7oJ",
  "key28": "3b9Wg8eTMVpxJ6y9Wqmgby9kF1qYgtxZW6FgaUj4qSKbCbPaZq9d8qT4Uo4Zbvmh599d8YteD4tZPUDziQVd2GsT",
  "key29": "59c2iSssP9uBizP2P8mJrw6MT6BDuWMEdtAzXNxJJYgmxc26GpqaczxGfNAPHUhcsLmcG1WYHnzmRT9mx75GEZgs",
  "key30": "4iSH69XVFPebhkKkc1dD3QQDdm4qKpufuRZ84PHj1TXHGrLNuBYaPt119kKfuyVw6KGNuiAhu8HdwV6gQUpKedZu",
  "key31": "htacj2kLvQbD5ARu4q6om3BA8p8XZ6o3VwLVkvP4agntwf9Zi7DzaBJZpZCATj5XPZFYpfwXSPL42W3dFCwkpxq",
  "key32": "3TiqbHVEjk6K1MZK9nuV9e1fUSLBVxHviXqKzdz5JMBtohZyCUGC99Lvas6SvEwovFe6dU5JdWmJge3Yvh91hhT3",
  "key33": "5QLaDSkZX9zMXfFLod9XqA8hKrubtsGoBnMeTxXuvxLngHaJUveAtwA89PGAsVeb2i1REAsVYgUCDzx1NVh1K9oV",
  "key34": "4isKC4VFmgvS2RKsPwHHW6ZHutab41SCo3wGULKakwSBDYr6h7vBn1qdfauJq7UkQyNMRxZMthtszR2Y36zWFMKf",
  "key35": "3RiyyzMZSiRawYJjPdngrT6YyVe6WN1Ka7dPEBQxptLHSnibMw8xoZwC8CKuWZZjF6u2yKAiYnNhGB9NiEJ7HGzR",
  "key36": "3Jw4xEvw73qJuSzeRZLPfEAAae27RTjGgK9eYjiiMyBWyHJJxaQWXd73irze8k3MCAmQnFhSE2oHq5ZnBaAy8qAj",
  "key37": "25jeJJzy4uwtUAhgMwR1ePgqNSC9166gghuRaVqyzxULMzkWh8PLbhwRPwrvHBeNtD7nrpyLddyGJFcRBKJ9nKzQ",
  "key38": "65De51yLhNBk1anNqk9aETPChJyXpT3myh5azBJDLSjVHtZpTtmcBSVaDcK4SZz1moidFVJNJgvoyCyUx6FLyP84",
  "key39": "5Ux86t1vthD1LgtGEWNozaDoq2kgj1g4SV5BK6rnMYQA3d4Vs5xQxa7UawDeiRKJLovt5p6xRKCP4Df1tCFrHMXk",
  "key40": "HYwbVPHZZo4PK2tPHQitWyw3JgsknZ8TNn3yb9GBDSKzcokDxH5oB1caEWGVBH2QRCp8qiQNCNTgiso1fCVszYv",
  "key41": "4nitcXRqJNfDF8aRHkxwcBJ57nwNAEQuoqZMJzuqLXrpcZQ6rFHPNkZWbQ9g32e9soND9HrcXvTXf3fSExdcddm1",
  "key42": "5ERWzEw1RpycNNSxkkSWvb1dNEKLYQVjeWMVaisU477xcqMJvzbZfGVyk4mNHe2CFhCAmBoKgpbXXf92VEAyATqT"
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
