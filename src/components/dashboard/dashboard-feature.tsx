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
    "2byur8864jgWP3o63DfSHf5UBgG5uNnVxpjC5FZ58m8d5RWBhWFShNZkvhVEUpCZpqpwC9FKpGxa3HphTXBhZpDP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cWMg55y3onnFZBgxCZvbVmtTQUC8eEx9vJMymTuq1Sa1ryRiifVvPr6LF4C6qbxTxtURh8DgdtkBPAJbQHoYGFM",
  "key1": "qtqgJBh28MwHnnuK3JAS17k9RRXjoA3aDy5fybsFL4GmvKgDCABC2hKaYnWkjeT4BQXftka6GdGXbrTjt2cPnk4",
  "key2": "Y4cHMBbqPGCDnMJ3JhRnGVGWLJc7S8gtC7GK43z35p1SCcqL3D7N7KVTxAkEB5bX7ftxfTq1hQ7QmGH9CPGYJVA",
  "key3": "RREmvmR5iyeRdP3oYz3MEPJ5QUwKmYKbwJ5FG9Z2LM4tSfgZw9AQN7ioFzac61AXtnmGK1RfSYYc5QTNSi642Te",
  "key4": "58DHMz85pKBfoHDRVUTqESRf1HkYCQEQHgxGpqH16ETcH2mBfaG3A4Pr5aagQw6whnRNeiA4XBM86UoLre77WsQa",
  "key5": "5DyzyhhPqPt6tYAzBPnh8eLcZTv4wBuvVUBY2kLNxMzVXTWetwdTfjceWhd63K8bdXyLs21MCsnr7C3exgfZVFee",
  "key6": "5paCucetpX9evQrzq5ubNdFxUJ7K9Rj9URj7GPNkE7GpWm4jMW7cPDfz5BZ7mdxJuyk6j3mqMPsee9VkoYDCEkQ3",
  "key7": "4NA7tD8krTypwktAvdpsTe9P36ZXMWL59fefmyzgsc3mE6eTf9sSWYgNdMJy2Yfcdjfqc2Q1AH4n6SEhkrgR7Hpe",
  "key8": "3CQ1ZJTdASFvdwGdU8s1pWUDG9LZJGyguefyg9mKSuRqqEHMmoixecY7jFbnAxCWfkVCLx6BGh5xNQkLB7AzTg8E",
  "key9": "36DnAWndaQ7su3Qmd94YCVKvDQPnAt37LWC6AyTp3cAfdmNKuM78usphQLEuxgq6TWa29jvReLxDBCXywJaEzMg9",
  "key10": "eN5h7FnLw98qVz9z1bovAVx64jdQTbF9qkepVDdmSKyure9EGXPF6yUqi85NddQtP96s3zVMovSSE5cpx5pA2kR",
  "key11": "2nfptRG4CkHtyeiBDoBUmY6kD68abdLtSmdj5SrGhzZrhjzuFqjKbD1b3jYXVd5nphNs7xMSnbD5h79RfwbLWRvD",
  "key12": "3WBWC1Cge9Hn1VqzETU3qnUUQYmg3sPAQkSvgy6ZuSwxfeRZh4E8P4GuhuRhPJGZB6MJ2Rc54msqLoRm2oRCS7Cr",
  "key13": "5S9imrpUrZdL8oGp9Qwv2hfuSo3u93q2hSbonU2PsHf9vDT782c4axAPpaNor7dSiJgJrZkPS1ktwcEqadcgSw8H",
  "key14": "2Zd6goYGLhDjZoEsZe5jUtueuv71MvMNHRTn4n3jX2bT2Lp7fbcVAx6AYadmLLBWAqLR3bWKyJDHG1apKaX8V89Z",
  "key15": "49qUJCzWoHMEZicHDs4GruW4rXmEm3rW3FuPY1Zt487PTp7dSGkdju9RxY9Jh3GZztFQjWBQme75PTRa7Dz52mKg",
  "key16": "5Xh7tDnSyfacwDRrWdnJnjjBbitg4AShDmRZx6mgQZQaGFQqGKXQT688T2m487dqc4o88PJX3pgr4PJaNRrtcTJa",
  "key17": "3PGaqBS87XDTjZbiLsg1rnJ3DNMi1tEymasLUcfsoAEcX5Q7Q3J4azWqh3uQLhbCGUxmyw3bSwywGBt2ybaiXQvy",
  "key18": "G8ibwFEBxNGbsfFBKxYG7jjas8cKGFLyGncz8ejmW5185zq3hrZ4Ps8vru7ZHMVbETaWj9pnCSvvZapet8pAxA6",
  "key19": "5Xa9rveCrxKMHPqjT9ZgWpab2qxbgbwfcRgG8aLxy6Zv21WZoUCTC4bSLAxj4yyaQdiwtXa4Tpzfk6Z5kdcGRKLY",
  "key20": "2jkVyxTXv3pMFBYAorYMLiFbAR6MvrBijc5D9UVsEkt1VZUVS6NA41qU9uGii9bJz1TaZArpYfsWnSdA6P7kAv8H",
  "key21": "5kytG5BbeBBUBrTvt7p3d4wpYsagBCViWS4YCmUDydNewg9DtLTgPQhiE68nTxku338mAGtutTmfaZiFcaXhsCR8",
  "key22": "5tqXKJKVdcA9XEXbdFja5ZemgKB8R2ZeaJPFei3vem5ZknpjgqnPWvGEh7bPc5rvSQkZTZfe6rppZhmX9x7EsTpw",
  "key23": "3TJ9QgDJA7FHWbH8G7GrwmFRD9UM7hK1ci79k59jYUeiPSxefXRdtkoGMT7QYrXK7mMANZJCra8dPechHofYPygJ",
  "key24": "4RHVeHF5vbGm92k6JTCaxJHQBjH3XB1aChTS7WNS3weqVY1VmWcJKEw8Yuqyji8HGyjdS31dL5ZJQb7noLdNpRuv",
  "key25": "33isDs3ydcQJZDTLnih9mgeHvk9xd73K4vXN3VYUiCz6DPRuc4VjbnFzAGaxeQS22MGVnMZYBXCc5vU2S7he1SkY",
  "key26": "uUHC5tGxwyGYeL1QYPR7CkcXSMD8CC17Ec6RRFiRjbHtUbhmEmKnhMEq41kLbUQsh1U2jHvzNkhodNNRsg347FD",
  "key27": "XzmaHjhBybHgPCC8s9N2cG2gUCeRCc5CKBkvWVW1iXo3yxa5yifN4MHGzhhbPszZ5h226sJCi2p2dejnvuexNSJ",
  "key28": "2R9JyA6fMT8nz6j8cXR7hsFkGs3kC8Lfj5g7Yst3EiBn3voRRbDRjPiWdvRRSKhGMnxREpu4odnr9nqzKbSmN6Rv",
  "key29": "pu4dofiMVFjnqEzQvHNjL9t9yhM436vSqntFFUZ1yJMEN922kpGF8bFxfkY1BkCgU7cbLmxWG5qofrumsLQ9xjT",
  "key30": "2iMDqYhVkb64LBQJBmUd3hcZApykTHtEptvEBcwotcr6CLD63c184h9pSipdixiUZu7DyqmfvPvo3J4ZNypBS8BM",
  "key31": "41dmniQnLu5QF5hGRpnEaHeYKn7cA9i8aN77jwdqgvgYEaeXugdYbej6dqND34Mt7d23ARTdnBvApDH8ePV7k4uh",
  "key32": "ZuWyxyzZpEPeV2TeLA7QM3D7yS4wsjipgddyUdMFrDxadF6LEGHa28fpennajnagLVL2ybHEmJkZVhkzPJED1xC",
  "key33": "3JNnC2JcpgYzofdocnQTpsMjFVKbkjuFBXRpiAPhvhJ11xH8qLtvZWAezxEGHiLcwWu6SSBkPrR6AgXaDiQLVXT4",
  "key34": "5ZePWyfmTsdqvBUd1NyhNvQ8JrhQzU5XRfv9tsqoyCipAb2Xo1RcNcuEeg6zPgT45oVBRpU8uXBkxHkBobTHEx72"
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
