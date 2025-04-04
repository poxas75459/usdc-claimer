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
    "29vyK9ev8E1Fbzk5S9pv6yLaaA1qAyNB3sQ9uGPbAMcNwibMtzpC9ro3uPAetFSLLpQNxEmdGfLbVXavvGHrdAPi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kP8hCgiS6h3hfgkGvTDSexRZswC7zDWAxnR9fjadjtSwkbkU9iag6d1VCBQtiakD4i6z16kGz1KXi2Ra6iEsS2C",
  "key1": "2C349QKyQGdQK1J1DxC3MGQiH4FkokTYPVugy61irWYMXa1eJ79duzSasK8ferXyXDwu6wBbAQH8cia3CL7BiYTp",
  "key2": "3JYBwNhDgPraksEThRgNtXy6cWgdF22buehqiAQVwJYajmGy2ue8Abqs9mhsWJfAfz65CXiynawhzSaexnUhX2QD",
  "key3": "5fqghcCJqYHCJ4bzvhVB8DHiT18jDD9nUH7MxDMrWwcbSNMqxh4X8mZ4QCt5SHY8NmF8ukCrae19pYP7ZAuELLFC",
  "key4": "5263BmEtXYrE4ExbsGAaAZpQZ7xQr97F4PemzVV9xDS5TFzcYoBwFE5YcpE1WsAVGJnh97QtAfMstjURoFQpXssK",
  "key5": "3m1YttUx66o5QHC1ZyHNwjwwDfa6yYJPosMp21XXVqGCvL9BzavYr3T4Z83VUwdTPTCxPNJQDJ7BUCkydbTr4oBs",
  "key6": "5yXeC6sumEHYJdZxLcqN5ygkU6K5xmyA8newn5ejodEcuwccWkoyDVqqGp6MUXrjTAFJTmXnYPz3cGZ3E1K35tVw",
  "key7": "2m1p5PgsyhKnoKk8d8uFJUqZEyD3kEawS86EVJJs2JNtetcqeSpagAV8ZUed8Gg7MDyD3cCDv31ZeCXWd6SLN8Zy",
  "key8": "5igWD2jKaYzSmPY9vwkLAGPZNSH8G2vJuGcLroVkzpodYet1XbWxgkB8VYU536Lyo7JXPKQQEKxDUwUfdxwdE22N",
  "key9": "5JHL35hiZ3gD8ziXNE6b5wtc91zEqDTVSy87u1e9WxSE7vWkD16WGzXeubBC5eN86d5kbsCxdaPBMGe6rd1ACnPT",
  "key10": "pFjeAErPck5rGEhEQ328oYNgfsqjgkd1XuAoUzLxp2ofMN6J5GbESntJTsTVb55QUN3FqRtjZQtrmaMRWkYPR5T",
  "key11": "3YtZnkwWTx5WBx3rmiSKzxtCEyGUjy4s6xSvfRVQcdH3Zw2Lxnine3MuHLqfkFdqTcx3K1omJNkxcUo4bgJ91Vkm",
  "key12": "5uDCSsCUdFXvFK6L6s41nycNnp4gVN41vY71bHTaXDzPUNuDQeYkwCtn2egfjU73e8LRcoADh6LwsmdRJtamTcKj",
  "key13": "4oMiqncFXsoBfjhk8kW9uMmQA2Z56Y17s6uLzAsa25C8qkM3rYcgEviKeRE3S1LQSjx8Bwba6FYawYuuw2gEsgmw",
  "key14": "fybiCKCXXry5X4TvHnT4yL91cdmr1MjMbp3PfNPzcPoSfLuzaxPChGun2TGhz1y9yj378SZcYy4DRERcBzZAJc7",
  "key15": "51gzTQGHeG3ypjCUKAatxwJC6DdmAj1VwWGEGK1BBbWGpmRQuL4p2zE5ZsSZpk24KeNCNXSsdThPEP9uYu2i3qPY",
  "key16": "34xcSS1mHVNjXNSgvoMXJEEqNcBygq8GR7aZ3aWpXWoRaxTtZg6jDdcTgcobnWRctDrRe6pmhfPfkU5FgP2A8U6M",
  "key17": "iqzGXHXhkprkqCahpLrCVHbjNMZqn4uoaJ7Ls2i3P95snPM7UamkYESvAgJQgVi9WSccu7TkHC7NwA7NmYgMjGv",
  "key18": "getvxBuggGbkQ18yoiADMA8oxcjdzuoq8osGrHSSBy1Wjmnkzf7NSwCHifgwbEFHZmUqtKwmJ78MJPzN3WG76rz",
  "key19": "5EFZ4opGbkL2HEbxJErtr4H96MpNTtwpSAHc9edt1HBtkagSEgM6bqc8EM6ABALJ1xRGLQWfpP2E88fMrzFPwPfJ",
  "key20": "3UnBmcff33Nswu8XfTpRJaYUTpXr2uzB52xJJr8E2WTjvvLDcuQ8SfwAo2TC1Vgyv837CxVbFJgcB2RTneBruaNx",
  "key21": "53ALo7xinAepaUCj2FH7y53StWcVbnqqwa7rhFTmahMJe1ZSpJH3K1Ry54LTPpo8DxUjtbbrEKRtfXhyptCrxrz4",
  "key22": "2DXF76hjotTG3RR3gRG9HG66pJbRnnKWBK3jS7enxFQiZupr3AdcqS9wtYmtf14q53kp1PJKFrCuQBJzhZ7vTzUd",
  "key23": "5eSNJS1DVMYkpeHPgHxBBbVQzRKk9J8vCnDGJ51oYpji1g2kdHQNMatCWmNTG4H41Ro9U7eJx2B8qRrnazgc5hPi",
  "key24": "87Jpu1prVGQ1LYHrkie9bk2E89pPM2Qn4FRPfiTtWsTxV58SewQGqbHkJPfqkJp4Kppj6NhpsJGV98cHrDng5Kg",
  "key25": "XnVGCputFdQE4bM6ZjG7i7H7U8KTeTSSaj4JoDjoep1o1aATsZ9vhey1itWHsL17v4dYcsyvyX3GWV6hFFPvG5D",
  "key26": "44tDLJZF6zchFdhZwjxAsCdHwEfyCkEMNhycFs4tuerhbXwvpBQApQRpkRXhMegCJvCW13FNqjGgeTGVU4No47eW",
  "key27": "jzsdv5dCd4ifognkno2FRtpiFfFMQfeigwnfGRPnURW9Wbs9QuSYmG9Wmd3qC576P2Gt1hTJd7FCZNUpoYoS2ju",
  "key28": "35fXkdzvpYFByS8oGUQ2HCAezwmbSKp6sQeMgFUtYG3BeZXWd9NiCTYB2MhPxxWthwMTcwuUBvT94SQTazqWaPdn",
  "key29": "4o7AaeAH6kAg2VYXzvqkU7EBTGx5gBmWQzgdVV6eeisq61vaqn4jThajxZ7fxKFKE7nqmrpTnJSwAZdFWCAaGDZm",
  "key30": "rqwJ8WDpdT6nR3MF7bZxHQbuKY8hYs8cVpGMdpLem2q7spSWtKoCJbBHF7N9p1kM4JTzfZHFoxMZk8hk7R34RVg",
  "key31": "3qu7bZUZFqTnLSE36dtyVNurd7dgZDSkWrushT4SAC4TSiaKmXGByUoLCuwGfwfPJ6wpM8ywWeSrb1s3fbzyqzjT",
  "key32": "4wndBU94LJyhzoCHWb3eiYjzrLLMJKzbJec3JgYgdAtNCziWw5gbANdfBob2njYfWfPQqSKoQCojjgiikwyo5Bd6",
  "key33": "3aoZtQmKoJsKBpy2rcpEkLVh3emAzBCgrkM7my6cmo3wDqLjh7HCtTBPz2JkeYqXzHiKyBpxiVuWmEL1dzQJDMd2",
  "key34": "2BZ39Ewp7ZgCVksmHrzXARe8xeniqwGh8oANz2qNcYrduypNBXs3dUKZLQgVcEVbCJkuEPg9rytENiuoeDrgN6mR",
  "key35": "kbCeK9rQx2y1E4yJzWoWrpfWPsRFmo1HDbvfe8WEJrYmTaEPPsaGphaDSgQwyFbtTsMTsigrVuMVcoNxDhU92Ya",
  "key36": "EgEECs58eCabpm5NLd7WPSdpQts1H4deAZ66VSsUTkNUgdbXi7BA3mytTA8M6bgGHu1MoUNkVam9CvGN9c7skZm"
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
