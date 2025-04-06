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
    "2wb3oyhf1WJTMi4hMg1nqwWkdaVYKHii9EuGmHwPL1iuefv8HQjV8SaPu4CvcNteawQBorqJYs6EdkYLaAG3CWKC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56BL8R6bdTwVXiNvnGDqvsMvN1Zc6CGf33YNW8nMmYCBjNi513oZJRwoRh8LZYpumts62mY6832SBnpXwPVz5SyT",
  "key1": "3aXpU2eV13e36f1insXTETt4CX2krLqueUhqs6jDsEJAs8yCBh1bddCBke2HCDxDpCqWDcbxpMFuQH12abGcb71Z",
  "key2": "5b1obtF4pxWYLrJu1uvH3jfzdMCdu4rgc9uhRdJU56o8rBWkhFSiFiLWE4bzmbh3Lbk7NX4dqtDez79xUvXYNy9a",
  "key3": "2HRMK71vEGMbSpNwBzmcU9ZQQgHn2uiBNphSZpUUYKsDSQiXuck3eB8ztqvoEYPCBGwmGQspt6mwpawpTgrCxPKh",
  "key4": "9bpZzqD7aEo689Ax6zSXv4hF7h7R1MLMyYZgk9cgkA3eaYzHWHfNQd3nH4ZCLykEGgiwbb7vSbq9QA59T5atC4B",
  "key5": "Dm4h7qaHYVAmmQc5Ngwdrvqv4aFQZBhdds4d4B5tHkZ2EXZJdhdeQE9VJSFaN2S8J6VD4NWR1cv7RBuB67cqmmu",
  "key6": "2GBGktwwt593FEkBBEG7BeEkJZdhkLfAQAD5JYVrT5b7rYGVmEaYYzoHGaK41pwLA7BV1Fd6gvEba2k24zJiCoJV",
  "key7": "2jV1EfGAsiQ8wrFWgGHqxqztio1iMGLJQ8mSGqBfHXMwLhffzdjHnpeMqQdoSkaHQC2cGAb7iBv4sh4J29rebvpp",
  "key8": "4hnCVFYkKGg9mH3a3S2n8fU4eCp6zgEJfAtQSZTANNTUbHt9U5tjzqVZYhm3E8oMifoGA4aYUmp7zqceMcqgWr3c",
  "key9": "4LsSdMx7Gsv6FfUYFGNCxWohLyWEAGn5p1xLckNR8drmtXP9NwF7vGmU7m59C9RpbqhFiUCDwYC4HocSP3fiFW5w",
  "key10": "2aNBGyr72ZX7xk7LUq5AaR5zYKK4fedCVZMz29Q9A7kz7RdQ6rivKUiqzUcCyX45uawmmVzs6rxad3XEPNj9yoEe",
  "key11": "2QJ8nhximsGimocgiDGykDgTsWCBMVxKmP7jt8QmYQTQED3RGRzmBViUFf9pgW6yB5AbFQAcRBeSd4PZ48oB7MBk",
  "key12": "51FMpimcN2KCc1FSUWhJ42CBevX8XpQVgs51XW6MdJCYdSnhDjz4zBbXFRMfSJyYXqtfaYWBdBpkLbXcVwtyVa4L",
  "key13": "4Q4mue9sJMdYX8S8X5uXmgjyMB8KD3HiWzQZcpQvSRKEM2gBP2R8nGYkx1P6pCMoMtyxKcyXzDgAYBLcBukgUN44",
  "key14": "56eN5tHo8pzwVCMFSVf9Tryxhe95Edy7HGemDuBfXRivYcwoCTp1kkCKsyiiYtdTNdFkYw4SvahQwgHpy3fUVwYN",
  "key15": "2iGNNJXtDGjXha7n4V1rUhsbp12a3t2xmeGXBwnoLACsPiG7sKpgz9jqxq5WTnxmcLFjRifA4KefztkE5p7tDqfA",
  "key16": "Gvbk5XMQnT6tjKeCtkewKFYKqMfM2LQ7tSgpWq9VchhVhg5kdNzeCJrndaeEkybp9YEPwDuVkHhPQpSdGabKdeD",
  "key17": "61JfByReh39oW85GVafSh6oqyWVqCMFJYzBtMFqQVwmfciYggrawyacPKEE4JECTNvdGaJyuyKVCrPjGdR24R3i5",
  "key18": "5DojG3gZW9PzT3N49AcRhxg4WZSSREKdZbqFxTGqQhGfQ13oavHGBYagDND4E3K3DXCV21gW7vJtHxaDuSQ9PmHQ",
  "key19": "vAZridqDBSrN2RaGm9oLGrbPBr7qZZvnDnU4Ck2ce1KsL6KbdMUSo9NYYhpUVEB2n4N3ijMmajNT7tqMujf66x4",
  "key20": "4vpCQFTDBMaRg6orp7Q9GMHMGDFVnC2Gve9mqriMfdphKCdPmVUfuSwu2EcyQtF1fpsvksB2rrGAEjRgcEwzNwVk",
  "key21": "NFptqqecqrb7wu8JkWDrThahLAa985TiW9ohqd6ok6LLdaCcJraa45RmpSKkrMRhkV4283khRG4bgsMVCGgCJ2H",
  "key22": "hbvUdjm9taxpVBCNDCUpX31LuhaBHJiWV9WMcmEvSCAVyFizxmmrxDJJmPuMXHNruWJ1pLjgXvgBkbbWtfLy1BF",
  "key23": "UJosTUCaKhHMuBur9WFs3uhewqP2z2DrfAy8VriYtGXcVBqEKpbKFEwNPSR4fX31WPqaohUsErfNYMyUnqsbSPZ",
  "key24": "4QBNSCwhTYFweUEcPxskpmAviw9w1sNWBZLbhvyoJRVeYU7oXiHkmo9FaEu92eib5UXX3tq9Bg5hqsdXo8Tmpfa7",
  "key25": "4CABFsEYDq7AQGiVwozBydHEGxDS71FpXYW17z8ibU9ER5jnEeaNE2JogqXFFwRRDB1pzpTyNArzsfk4atdPxbUS",
  "key26": "Nc8SCLMGQW5oQ2HKGnTCJU4mjxPrZFhazFotx21Vr53379XtchYhuWos3WEYpsfqMPipP6KHh3G2nzbCXn1BZjm",
  "key27": "27dzuqjcDShg5hZUMy7tjyWKVVD7dKTjYL1Tpbadq62UsP8rv6zrpGpWd6n2zZpzdat2PNteC5tdEJsDiR3Zjr1X",
  "key28": "QfTLfxwrHMQPLDnwWiEohvPwzged3exuHxrfPREgf4QAbQxXwjyCUnnpK8sz4qTZ7tp3uoM8cSzLD7CcivN9taM",
  "key29": "KNbY5bkGR8mK3cMMGkqrAG1dmm5fYofwtN6ZRKP2KtJ3DxGJkbCfpyFMAgkM2jXbyjwJFP2pMBxhoaw2HwsebPr",
  "key30": "5FKXsWVRQH9pivXRkLTs6kpk82Y3PRd5q3WZk9sYHKgvZCk1U9VJTeGkVTqMFMF8gory2PwXAH3FV4aJDJKa4M6T",
  "key31": "zSVasZpEcF1nqy396xJU4AvyCrxRSss6bE1fBJLv8xNGX9Rk1z6d3auJ2uyFg5ciPAfrAqm6SdtgVsbo8kty5Bq",
  "key32": "2FUwqZpttJ5sN7vSHScsSSq2aM6ySaGw1YXrqhzmjjHR5gMNDRgcQMNGQ1EFCzuX2nExq6SUouKyNyuVghG5UDnn",
  "key33": "3sXU9YuSafPdT1NPGM4sVSt4jwjrfQwAx8ZdZEueiUeqaSQfKTdvJ9CKnJhevViXZ5Ecy2HH3WLhVhsNZeHsnhRh",
  "key34": "3sQGWq6Y6A9pMstSnSWUBmDHYn7Pxpw74TTTNWJvJQoLSdf8XPAu6c8XTkdHH6WvSRtrWfs9nU56narXmVwCKXWv",
  "key35": "22FRRCVXjCxCo85PAWmgfjdvxher3xezDLPu8TtTp2WCphPSjE2pkj1E17uukJLbCjJfZBJuA5yuc7CHNUK3yxpG",
  "key36": "2PwPPbNhZ1fwjw6SVo61d93Uh2Ner1AhNgWjNA63CWKZBMSESUgVcM6q63D8sAFuHEmdehyiWrHabkSYsXjQ3sBQ",
  "key37": "3eUGpAJ8rNb1ZpCewkQyiThPAkzuPuyMex8Xx4kDSwabapWAqTfrXEwo3cF8VXsc1xQDXfG75y1mgCkXJtUSBcCC",
  "key38": "5mj11Lror1hFg7BbryFb9gwmQsmZGPFzgRcGsZud4WHi7chSwocWDbryNCSSdJbLA6aji38D6JqG37bwj9z4VoxD"
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
