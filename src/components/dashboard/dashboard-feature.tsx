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
    "5Tn8RPzrpnbgFPHYwp4Sz7egf1eNPeER3dJxjMyrhLGH93J9CYr3jPx6K9jHGtNetWqBzqmwewwhUqd1BjwxvxMk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2X6RParGsezFWKaWyuzfuDirdEGVJxhN4sG8FAwCuXTmW8ny2SZMRtBVGbzPPXn8xMtZCYgdivEcWVaH3UmhhHhy",
  "key1": "483QqKiSwBbtyzrC6wDWvGsqN26RSRzgYBkQGjmsaa8QwwduPnAotHh3Q5uDjMMCRV6UjpPPrhgmFNyXAQUgcjQS",
  "key2": "2C1qA37J3NQiHsK2FaUSKQaf6HZ6bd4rvNtq21BzCYAoPCYZPF1KDGSsHVYaKj2NAtVawmJ5JxFR2DKSMCM1u3nd",
  "key3": "3Hb989B5M6K7PYtUriXdRzmXVtu1qhUfCGuVmMVDBApd8Gu6FbUkXhZM3oNy9M5HaRio5Q9p1ZwpAqwWgMoNrptW",
  "key4": "5wZC9FYNVJiY5rEuDhDCEGLpgYgu2Xwp3t7v2nh3FzyKLD464L63mSt9SDZLEnGpYgYH1LiNuJtxmYcwgjvKNjMT",
  "key5": "32qHvGDFTSA9LyAZyDee8n8QR8UjAsVr1EBVRAfdtZyEEWpr5w2VJ3bwsf5qUHuFPNu3cYwzY3R5XUCWi58cvQ6X",
  "key6": "5bMuL6nWeEv5sHmbnjpX5s4ApDE7SuYCiDnsQGMj96y88xLcsjjux93YFup47AGxJAwTQaRQ2oQrkSdTayh7i6wt",
  "key7": "2Y6uhTzG6wQKEkG7C1PJUkqtKgMvBgN557PtNJtfrMtwhcz9q82THmNocSBdpQm5zJXbXWBvxv9xjS6XsRmSkEPf",
  "key8": "27ZV9Mx7e9vN7NArE15wADoTkC5SoBqcFiLaV6qNLm5ubibeuMgYKs8HnUhV39HmaCXSLe5stH8mnVhtswKiKJRX",
  "key9": "tTK4uMU8jfx4zZka5RPZX1igdE5zddoy9EhPz4uVNkUvDfdsrXHh22CbMBTSu6otF52nBpZ9Dr4BQsLudqxWuDQ",
  "key10": "38ECE7uPRHz9Y7vihzUH7wTdMASuWdt1Avo4S6d4zdD7Y4oMMd5ZrAfnN7RCq8fRemxQda8MBhNWCi5xvRxP8KDo",
  "key11": "2dwjwAbf6TWLzPMduyvhbTbBjCx6it4NK1SigD98fRrLNSSJs9yK2ZLuxbRemreBiiXZhuGwzQ6HM3u3TjBVKJTe",
  "key12": "3N2oRQZZQvG88P6TrXf61WMJqqfMPuoExH2Ce2mYxzh3qTYDHAJPNe8LC66DkT3tfbXe7TvrCA4stz9uBThwAVCE",
  "key13": "2bLuRLFpaWWJgn9KhFK5fmNm8jx3w1RLJPimSZSP7tmMsx3S8txmBW67SFC2FoPnYpQf6nua58hotk5RV7QEN2Fa",
  "key14": "3NmDazWMRtqQ4qXkPv2Z87SjqhMsTtriyHTQmxMcSVirctFASSEYdHCixg8VQToBC3wDDvh2HLCSr7aLfE7uWgJt",
  "key15": "2cFX38vU72uYiDwwPdPmFoqCjC3VtSxif7i4BSweFoyJmojPPmuZVpANNSQxnjEuMoAxY8GE9pzgd9DFeepnjeBQ",
  "key16": "3M1fmxx8ekLy7nDF9wL8ef8KqcRohg3fCrzsRee3hdEuFSH3qzkPVjpaszyp74pzcdTimXmg3bpVMNLpetfbRug1",
  "key17": "2SJgCapHDfeUWo3dxG3SQNmEuYHXMNHDGeJqAc9K91P49VJLahuMAQkC7rgsqwZCyq5pMC1esGtpSc3nkUugsmgN",
  "key18": "3gFbzKtJxZdXbJPb1jsJCiZoU5VydnC2TcZ7uJHYFjcX27JijAQvBgGVJveNb5Zv6JGrkrKg6n2JkZguEMtVMBkG",
  "key19": "5hwAfV2sULn5WbUv2s2MUh7HSokRZsunuyNSCxPzr9FsuwfLue4y4qH6wp9sreNSH9NVsaNVYEXT83JoPzaB91HB",
  "key20": "2w12iq74dmfQFQR44VWCXCxSrJocpHHsU1VNpMw8JgkweWXykaiDTqnWGCKytiQ6UYEALYJLKddGLDcV2x1QGCX5",
  "key21": "458hiuy7mwHw4BbfRLqxFKEivFvgBeM7SCvXYe7SVqnheQ1sXQuiMMQcR3eNu3wf3bNPnSU1GM6VRJB6ghAe7RLU",
  "key22": "2ZUdtAb14mCaBHkJgBYpqBa5JgyU8BDVCgtXTw9dBCAA9AhYWnwJZpq7o6Ps8MSt5ny9c9jfGd8hHm7fjRaNMaqJ",
  "key23": "3unbXHMZPhKhRbJXPXhMPqeQr9M9JXM2dniU1TovKiZqU5e2xUmZvpUHVPbz31WhwjQB8nmH8yXiUGutdJdMXKrB",
  "key24": "3gwjYezCmsfgA8eqx25QdxF2PV4AQvZjyuB9svue4SaM8UHVBt7fUr5QtzBjtTV1fKQKoe2MeMJZ3wX33Fp1dtag",
  "key25": "2GjFZ98gTsyTjJ3UQ9BWXiDBf3UrcMj29EK7gzfmNLP3UD8J97yEMTNdSbsCoq94SnPebCDmbgeqZCBqFyLeBdWV",
  "key26": "3c1mDZuQBqtosLA1isVwVfw4wAaiykPwkNrtz2VyztqRwNV3KeNZTdrzRBVyQxqBPExTubtyUfU26TfAaHY9ciiv",
  "key27": "5KqnPB3cBkc95NaxPDhX9JLzC56TQkgvAzbar4wwspxpZQnfN3GDTrc8gDAtwE6arL2SkP6atjxVTHNQiDzDXsTV",
  "key28": "2Wpgx3YDktSzADJFJWBC2Tqb8oBqW4jQiW3dr2rtr6AhdwDDwiNi45DwRC36RGrch1dNn7iWUfbrHszdQqWLcwaJ",
  "key29": "3h3MiJC8fzUZK3KdAryK5biQHFijQZKGz2UEZd1B3AFPMtTjNBouxbfj2UsdTaQVVHZq7NnV2WwdUdTZnAa5ztAs",
  "key30": "u1yMLSHHqjTNwa8VFT5ERXrbVGUVZWrvspWMeBw1JmJPk1yrGNRHEyFocQbbJVKN1CEGBRCdXPqp5mDP9Zfc9gC",
  "key31": "4NgpasC3tCZMbEhBDupLX8DQBExLKZFidF3YJpwjJ7m3VAWj6BMeAVYDXVhhuLoXvMFNQikeQBbjGJjinNwjDWMC",
  "key32": "4yL96b9cXvYF9WdkhYptxuvnmiL9rTxSwGGguHugyZYt5F1MJBxnDrqZVNzhdXUEPXiJxCY8prq4MpTmxstzQabv",
  "key33": "4ZXpnCWgTKi99aykf6TsojWPiRMbSbyHiZFVwrrDfFibtyVKz83yhhjFpme3SEMxL75mq3J7oh9jAbEPYcDtSpDh",
  "key34": "4zosSPvTCeTLCKyKLP2KdHY7sKLTZqxqio26C6GUtDBh7848vVYdrCazxVCLzPmUZnBe3eVXDX64hgxgCgSn9LdH",
  "key35": "48MEudpMC7TKAW2g3Gzozywnc1CPuGzMpPFB3bBVRBBAKWVcShUX4oqLxpsqdBeUUHr4YmJU8WjZsigZod7Fnq4E"
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
