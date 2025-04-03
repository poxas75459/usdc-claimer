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
    "4SzbW9oynMYmyC9xyJg1wVDtu3DHiyA1qB8QWasEPLv7mexGepz8PQoE32HVwXz1FPw1dkBTTHsw722XS9KoNWrc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Uii3jiDtWypvwKz2WY6zLX3V2Coek79v5hZ4AJqvADVaqAvienmGQ12dTJrraApvB44sX37NuewsXsEtv7SZwuo",
  "key1": "5ErrbvvvmuJ8teSmrxqNeZMovtxNWqHYMsvYzF2iKuTHSytuwTyrfSfo21PK4T3HXLjHwh2ksffFDdMRCNDsRsU4",
  "key2": "4WGygdpp1Qpx13KjzauWmjZSZA8fi4FactNX2jcN8RvDHFxnfjjWL3btXv3TNqyjqRHYaspdZVxUhhUFGn4zdhvD",
  "key3": "5Qs36UN44W8V71xjTvZKh25sUYDkLhvYaxhXjKWVbjKM9k3X448AUh4E1Jw5qiGfC4Fx1SPvb5VirR9oMpo3KzbQ",
  "key4": "45UsWXQKrszoRw9n6nun6GJ7A86GreWksfAn4cfJmV3KcRpLeohbXyVSXhwfrec3ri4FzJywoAMo1dWzbduxKKSA",
  "key5": "4T2Zpr4LT2SQ6M8h2yq3kw1GHisE15PbYg1pYC2oHgpjKsoKyW72q8z5HtvEBoPtKNdYGwvskCCR125v8YF4QgAh",
  "key6": "5mmV5wqoHo9Dxw3PpqLdjU5AUxBxzQfrYV6smUBLeawr4apTgqQJkSfN96HAiDPZUAroQkcDeBm824Sz7teJPtMg",
  "key7": "2ctUjNJP2eq6UbqUnvYBq1WjLTKnWPn6ZbhFuerCYmcCiZqQ45RekQBygAm4TPjcmd9k7XxBmMHKLwqyYM4hiPf4",
  "key8": "3ieeHfLEssRPFgUJ9hh1vCRBoCPydFpZeWL9FmidnhMU4iKmkr5rEbMPddfCfDLQ6gKUXJbCyK5TtKrEQ6miG33F",
  "key9": "4x9mrse6LwQR2MDvuQMVRMyfubNGxv2mLgCksLVt8VLpZCGb8DGgkqt7ouDyapXVGK4XcdqUQsiUpBV696RqqWJX",
  "key10": "47vepDjyoZ5oDHKSrJwnYQH7VgbctNpqLxYJ2QpfQViE33dpEupPTTUGAtpsbpNV3A1dPcupk7Uzz4FEg8JtvRB",
  "key11": "4XnXtthcr9wLyJacbKpPEJXJ4VYTv2UTsY1ET5PF93PKi5cxjvnqwGzACwBSiWpwiFiL4oj4LijMQjw64nSihZip",
  "key12": "3SEuCaDqNdXMgrJkdsow1Q9G4DRjtJpKUMdXFBsSBT8SsfQJRRXzjTkzFfYGgt4XGLwK3szfUuXyeU6Zzucd3n2a",
  "key13": "5LXEWV2EKmXSmE5v7eL9bJAawt4Z2ggv1Rb23WENoujHBEWwWx2X4jofUf1jocQgzd6bipHggqBP7KbJbdBBrJh2",
  "key14": "4UyDBFGR8gmee88yCawQkjkbEZeCDMDRzs9AzsKZEVzUfkc58k3CqBNkrbUm2QrxkJvKw1a9om766G43uSs8gnnu",
  "key15": "5YgERYvEiddHkhXUwMVeAo9qwRxaoLfU7t7RFivdvMN5hR7v8wu7qZDmXE461adLduuZSoUCNg9ierKPFFw6wG2B",
  "key16": "3WREE76MnGpq3eVUM6gCdstBnwsGYKWUwznJM46ajDm5pG8RSjM3itoXcQgHRP6nZzW8Wx5mjdKhtNtwRnxEBp3z",
  "key17": "3P2HSnZvvBJeJTnZZR64mJtE4ijG7eFkkmxPD69JXymao4Xo9j8atPwtJPWjcjD3o2p8LwEEkA8JvnmbHtQH2zAG",
  "key18": "24aYgs8RKGLQKXXgn5axsrDdWuvMjnyUa48wH1U6y53s21HuRbCeVM92cqwdXmnTvLTkYPA3JVqq6ikWkrgQ9ZEw",
  "key19": "4iAurQ6ba3AKMgC3gzueKee9osC7ZCzpESikK5Dq8KR2EqxgYdAahfJufubybzg1hM6skbXhmFmRcsrLAJFnimdp",
  "key20": "5sa7YkVft27WGrvArZ1XPkEZGVD17qHZuAg1CxVicpMKdhALnoegcG8562jMEfBW726hRfuwgeGmy1hVFd4EFVt",
  "key21": "64Gyhst799bGnUGm735kxRrxrmt1dvq4Nf9DNKiZm7L4qh5cn27U2sHQCWMzNtYwyGwFggtg8kxUoWgszK9mHU95",
  "key22": "4FhpMrknXjyPCjuBTiRDKK5HFZ1uwXia1MKNH7jsRDbEQKr1pUdkHThW6w6zEmAmoZP4fWqQhsENe4Px5eXiMaiJ",
  "key23": "4wwudW34Hx2do7qZ4oKT9bWTVbGjqmDzNyEvpfBA9EqDnK4j5tm5Nag6SdHxdBwpypLv6dUgicYC16jJ5LJBYVmB",
  "key24": "FFpWHynhafXvNeJ978udVrTa43coGuwoPkrNnP6zpLpUeUPt8hMZdrDpBgqAUHA9S2tSUM78zkmtGpkuTE64yfq",
  "key25": "5qb9pmxZfVvHLz98s626kYUwMranJH48hAzk9qzzxebUyaBb7aYhHknmEjwzRyha3j4McRnt6UNwUCDzH2uN1WHB",
  "key26": "3PLXZEWjGqaFU7Lf8VEjyK9WXnPR7pxNLXv5dynY84zQHCTm4yGY87vbLmZfNUgjwjdJF4P1EaAAbBHfHAhKvjBN",
  "key27": "3eHNh3YvR8sD2RqN5NcANdKS9fcN9XiDX93EEvdceMX4mWNnwFMKCtc1dFedBBaDuzRuFsHM7b6XG4e2HSG2b1vW",
  "key28": "4hUDCsHgWbcLd9sVDnjzEiTL3oqxH6JfifFbo43unoGoo1aBfRp6bfeV31GyWNpz2Dwrz8ebUPBtfpaHpQqc7P8y",
  "key29": "Kw86c8ZEdocHXqTKvohpuXGrWu925dx1RXUZ6g9yjECi5PgvFrJ2MzqnPBfcnqaaa2T7dL9m66N4VXLUqkn6RiX",
  "key30": "3Mi4XcnB62oXFF3jaZFBTnZice62yQCzU6hUNPtGyqpqhkiqfYA8DpN2U295Cz1rLzJgB2ngqfiQMm75EN9ntYwC",
  "key31": "41TXDVc5Mgd1pWoTszYYwaf1N8NnAcRLWADi1s6gfGaW7LfZkRaGRNogfY5ncW83ZNz3mQbDv6Awc7WMQFHPkTEF",
  "key32": "4uyEZTeCbafRDouxCksp2swzsmjbMkECnyxi8rKwA5iu2jiWAjpWN8btaMgFZHd7g2YmqARgBQrAZqjLy6mrbxdq",
  "key33": "radW6si98HESqhLoNLeU3QnPY1uNX8VGCP5XCZ9Vk6Aa8Mg2eWpvQu47y8pKMiJXozFUraRDXYLKTpPFfBSYqGF",
  "key34": "Vc2n8Vq4LRCYHhio6vVsqK2uj2URBCEim8MdvtcLWeX3HpFK2jcTMysD1nAwqHP5sP5SetSm2G5DuYkk9NYPess",
  "key35": "2UQ933UMiqcjgM6JEi5FqNhgKfCBYqSwBe5Bb148zx9QYu86TE7tWjTRvZJvWWTBUu6RvWFjiToQngU4dUBaDaQ3"
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
