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
    "3rUKHrkg6fLHotjsXV9SghiHtjnctCvo4wqUkCGYosUAdDxT9RnCvBZQoD2FiyCDTpBFyziGF1qp1aQEbT7q6Af"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ky9aLEcYwdh49pkxE3UdycgXCJVpR3r6KdmatU3kqi2Z32M41cN8fdfwbQdULjWWf1jPaJyzkeXvux3ft5DR6Yi",
  "key1": "4QP5AVAMUV8Zj7f6oekYqjM7UubEV32QiZQ8rmxmGQaFFc1NdUtzRjsjScUHSifsVgzSMWsHMttPvXY2KSs2WvDT",
  "key2": "4bg7f2sghfBiJSsMfB9wJKWuAb77vumnKAWibZzQMM6ZReHnq4fo2idmXWTNsGwUHHM4Z2gcK2TGoAjhhNkLTLyb",
  "key3": "3qBHVoNmq9xLYQMr6cZQSrDCwx9vsLBWzpfY24DtqswcnyoUZkAbPLePHD2K2LPD4KX3Evxat8ump2ENreFp48Jo",
  "key4": "4vYgNGXaTa3ZsNNPU3TfYB5eLpnW5G2N7PKG4CEmKwND4SHjpusWPE4E63JFbfdfyTTJLy9mcZzPfiaC8JLzLt4p",
  "key5": "3N8UxGSKEWPoovhtVMDqY7FTgLw2tLXUV79KEvAnXuX7uhAMGhraV5VA5ZDiu57F5Ez7AGcW96aL7pVaazHtimYy",
  "key6": "3ULNP1DHF6zrQMY4faVow6icJsfUsYgnXWDx9YqPyP2ApY3qcSgpHe9uaaeNUZPHpSAnDEQg4uDGpCSUD1gnQ1H3",
  "key7": "4g9i79gThM5gvsa2CzozBPzNEAzgekwsjvsbRb85c5MsbC2zZeEGC8BZYqqX14iaLR2nseCbSkDjAY5U4XQhkQtE",
  "key8": "3q7bbjXmhxQPho2LNW2yBmhKcpVUHhsySy5e95kGLr36kgjjyoQxYG6Yfyw2LGnTnAjz7kTFqz3GqicvuXZ8x5Pj",
  "key9": "2YLmySRKR6AWL1A2vcEeYFEDeyMbUK7bMjtDQPb5X4ruFFzmXx9YLZPV1XsG2zJYd5CXPgWK7VFRtdh51WZCHhPf",
  "key10": "3EfuppeyYvVkL1MKjoyy9CXBkn2ZvCXf2ZRsqurWWw2od4kZyp5Lk7wMT8oFeGzRb5kWfLoK6ZrTkTcyksx8zaAv",
  "key11": "2dhK8intdZFEdyaeDsRae5tQsD29161PGFEWiwCJiwFDDPztjEJpAURB8oGiZXsRXzz4YB3UdD2VymFHZfiJtiDW",
  "key12": "5zaUtAJk8HNi5VBXUGq48SHQf8y2ttZAPrCEvjgtAPqJx9uqx56EYcsfzNxKoQhhF6JSK2nzzYasCMzgcwvh1BH7",
  "key13": "5f4Z4oHAGKxAaDU1VH1L4ceHLUgAEhDW5Fe8EoXyTax2wBNwjXF1nGduxtv2sejPq6akaALibJJHEkgRnNNZGvkV",
  "key14": "3sdxUhnopXDHFdQpzC6Z98eu4E5osM6HQkVBRcgoDqx74XdSNFdGVGfNqtGhunXBcLVDa1Rf6tWmLCNqoD9rDPaE",
  "key15": "5wCKbPpsaGAhR9Mh3TnEzHbVtuMyRK1d4Kigqm4oWWc11xk9B5kkRhTAYNQNz6UPES8wAYBYmZZt9e9SkhgMF7Ts",
  "key16": "64vfp11vgYNtvM53MvN6UZVHCLN4qa6m9TBqnvp4tnkM4aKAEEXWW7xw2Mr9QHWExPd6BzQSVvt86EuywSdugZ3B",
  "key17": "P1SEp9RLjSXZEr9ZyQkeTPw6rTykjg4dQm1W7TKz3rXd4KQxXS5B9Q7kCeuoH4pMjLChvGi3vjfn1WubCfMLQeo",
  "key18": "2vBXFNbgre9inHtzCcYV33aMu56SxGZDb33HYzmEm1wbbUohR2usDzHUspb8MvAo1DtpSH4wAzFfA4e673stZrJG",
  "key19": "5cvt64gnpL1wgLmhd7sDELfookjWJX5euS2S2qUbEWtU7NsTGNUY8LvtaCKoUScnZKXxjgaPqCqB8FPbLBy73ACL",
  "key20": "5DEw9Mx11hkKwdgmqmknoFxRWuazy36eykoVJN72sEHs4WAUYuaTV8UkPH8JyiV8qViutiyUV82WiysQcYPg17xr",
  "key21": "33jqVEXnY7KL7UA9zgzX7xpVYCe8trY9KxE3xUbN1hA9v7aGbR8u7sPVvoyxYbi3ouUhQUgKUv1m2nGwnXQ5KV6U",
  "key22": "3PTuew37pLGb7uGdyELsF5DbVvgP2ut3xR8CdQRMYDmMj8d5FeNo5va7p3vcbPvuvK7DP4nWL5rqcSrEstdCAGZC",
  "key23": "xFaq9a2g2vRCF1bca7QD7zHtsLQvxGGinoyvUPUnfc3qhAdzMxsSuUBJXw85qZurdfFxsrG8REW2BCXPqe55jaB",
  "key24": "5QKiMRbwqg38WdAVmyYzvEYvvS8GueWSWSNedRQ7PzRmy3e9VxnxJHEqH5xmoVRD5Wbr8ikpr4MyPJBBkesbdjPS"
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
