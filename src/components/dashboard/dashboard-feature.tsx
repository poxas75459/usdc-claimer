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
    "4T15XdxwNf49eSMBQQNPikQGP8d5wR21RpaApdFfHtLRk8Lgs8ugKUqcN94L4K71Xy719yMaYKFUVcyBsxHLFcBe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49YVWD9oEqeEShBPDQFtKnKFyR9gPWk6AydhnHtsbLttaXpDKZCKhh77Fp7B5s4NLBi6xw9ivZbwFq2mNddSjWFp",
  "key1": "4C9DacCjHUG3rWxzMbRTgvED2T2tEhD2UqDnn6Xrav9nSDPgdD5wydiXK2AKLtvgWob1FxcX5JnZ6fApWxmNG4Qq",
  "key2": "5D1VRtUiNSFCzHWTL6eQcqGS7UBHM5X9vESKo9okApERdFui2mmzQ7mcSnafNjRz79GtJULXTNtUgypSR8H1uRvi",
  "key3": "5fFJfwWDSmPQn8kH7GdyiP1icVpdnuVPxCNmZmGactfy3YzsvJU6XtG9b3ibNJ5iB2t1TvgXjQ34asTwSf13C29v",
  "key4": "8u9CuNko2bc9rPsZtV5ZA7crGkXviqis4jnwCc34qu9LHJrNjCPgh6NbUWik7wzUYa9YTDBttFTnx9zL62JLGqG",
  "key5": "2NbrS1NBBXw6Hf45EKUXDZvDzspWEzLQcQ6wir41CGfJkoaEXxEueJdWn5E6pRCsPbjg3FW8LuvHtbwHKPmyGXpE",
  "key6": "2CVXbH62aKoGgGfaystdrqtj9Q2Aivy1EFV31FmodZqnJ9ypzBVf9yWmM6hhDVhHnJvFpdtFeZYzZykL2KXsuhKH",
  "key7": "3rneLwjcHGUdcuJ6BNchDqTNMvnKU2JdDCSXUzawsmDfR38vwPhReQLJpmZEtprWYh3SS6amd2CVGiJ9NnL2W8rY",
  "key8": "4Nypb1YKJoU6VMpPjdRRduAahdXvxqUnQvCutjwHAidKiUQk1uyRW4rFmRgQWC5CdG49eLD9WncbK8hEvCCecyqf",
  "key9": "2ahBSokNkgjygE78HZdKgLXQhWLF9gfJyDDo8jnHxhKP1ZRusAwA3FrBBEhfRvqhw9fYP3LFSV9fXy1GzG4CSy1c",
  "key10": "61Pidfg3v2cZY4NrMnPM1oGF57VJZbt5J1kQ8TYARaj78BmqiceqdwRkQn6uAi38cYysRXLJYmPpaEz1exj4hkQh",
  "key11": "2Kz426eGaNyJibv47PrXaTqi9LsQcytWmY1n9qnnJkeduhWnf9qnrV2isXxMvEpwchwDMwc72HWSHUsMqyLhi4tt",
  "key12": "3HuvaV3A4mCLrTtYGKLS7GrCPZU1Rtks2zyZQKB9PVoDWCpXdApm7qMK9PEY4FrrvMfP1V2KezdYhLaZ24mT866H",
  "key13": "4R6vubEYGqh2SLpL1eGuMnai8dFyrATQurKZPnC6rGaG1bc4qcfEK1dYtXznmpozuftytoUnx9woXnj13vJ3hbmC",
  "key14": "5pWtcvzWVcRbn42MZih8zH8wNFUexrQFRvKzFBQj55UY9uWtx4LWdV3eziE4LR78KWnZXZMKCGMqgce9fpegdH5h",
  "key15": "3qsnifgwc9ZAD6iu5j228mNeCF6XRCd64gt1VowRcWe97K9Ee71EhZp3vixki6EUUSMSpDy221Ba4CffZw2JeXps",
  "key16": "sdS6pbxFxrcN1kUxhjZ7ForRfEiW1qULit8BiaB78nxGHRqq1f6u7bY8rGW7aWoTqAUgQ62zHTVma2J1NgPGBKJ",
  "key17": "QSCnSXCwRJxVrGdSnPLXNVRf3AXKpuJPrCVxny3wcCf1XZDSpfZdHqBBGpfhhuhzoV9iGwXgDP38VCApjmrJj7H",
  "key18": "2CKbABtJq1GgTZAJqzev4w6jLZa51oUQxCzTzXjJWJcKvALwmtHh6KxLWwBmaBQPsHYi5mdrWtGxnFhQTMwX7urd",
  "key19": "5uoK8gctk7YJ3xXFb4jurxWmfndJ2fCo6sKVbSHfcnRPdLTt1x5SwgDMXf5794wi16Dc7ApMz9o2Y9Hurq4fUFw",
  "key20": "Pc6QLGqr1bUV3meF5aCjfFbGKptq2wF6ckubnrJHsZ9tMy56oKn1pQwFVUKx1ud3TwpaLywHATjt19n8MgwdV3K",
  "key21": "5gdr45MVq1r6M1gEqYArFPKv7eSmHtWTt95C52XKwLqXvtRS9fj2U9pjoZPh9kT6c18CdNZ8VX6omhTwi7evNmur",
  "key22": "29jZBgYsu1j2zt2BSFc2FYREjhNpT4h6sDd1GJAGuEXQREYCNxaSFUteqeFVqjDLuPV6vAXXCkGYQhSgF3iW4zcc",
  "key23": "GLaJaPCv3BngaitEZbPcNXT7nt9HavscMkuRJH2Z4cgvCR8aemM4QwVVA5iSnnSGzqJANJFsvtXmW5oYGCgxx7S",
  "key24": "3FaJd9A7kJ2uhBvSm1KKduDnrGsBNDRuZ4v1yuUXgStJvTWNXsPaTP3F5Jzp9rM5arnSFQHnrbzE3tNq4S5auvYv",
  "key25": "3fMDfuXaeYwu3acyFFiNkcazGMUcgQPrrM18MpC6uQZiAeTrv2ixonMuo85VLh6zpAc88BQsrxKyJ5C7yseF5oDv",
  "key26": "5wv4mBZNkPjsmUraxEEdL1kZaakbSThWdJ4JpUZ7KoEQWR8joZVHAPb6hJeWH8igGCfJ4cu5WcQnhoBVY8rmZrdD",
  "key27": "5bvThgg3F1paCDTPHVsAiKuQbVjCRCBbcwrvHW33SRJYBiQmdtyfVZPqnn26ySyoMPuSpRiLhZUgYoG1RcchMFr",
  "key28": "3M5K1XbdAGzJ81rkrZ52C2jx7cQMe4nfaLNH64sQ7J3Gxym8Khys49M1PCMVHiaHh4zwCR3ekXcDMuVETr5XWHSK",
  "key29": "5pC3Y3ZbzHv47YgPUfFSDrmxmJgYqrhbe4gCDG5UDqjcN849ZvS965Lz4cuYhBAzzUfykcmQqR3nk6WgEuzyVp7g",
  "key30": "2fVUouGaRRRq3ojBPwT2d7NnQNKaq9svaGDbiqy4KBFjizUDenR3rpdVAbgZPoCx6pxZQRsGNdeK8d5EhosaBHZV",
  "key31": "3zgzxALKgmf4vsJnv66nqKU3mzgYH9VvDSX2CUgpLitY7wAeR8KKRv4igCRYGaxUCJsRc3fAP4bQGJAYwZj6wXr5",
  "key32": "4ZxootF7FMwpsDCZzvWJ6fgNHVzCwigAD9u3TPngrDnfBdA9ndZaVYCcQFLjqa9GEjTFKMLYGXuBbSyzcuWpvVF",
  "key33": "3z8cQNq1HctBBrmY99E9HpA7GHTva3s8Jme5JoTP6X2DehkSEQfTQrKXwgoq3oQ5kzv2i6BYTTUsM1jnY3z6J359",
  "key34": "2nJ2B8N9ziZtnZXfzu9RzYCnTY3Mzio2xz5L1ohKFucJUMgsMqJViAjCbFTZwTZ1vtkTBCYjHoKLNXMVFrXGN8q6",
  "key35": "2wSJXqknDhEgkD7DGjBa5BhPEvRTxVctdteKt2NXB2y9y1R21WpZLcYSfPJpmWvtpDZo2minAXUsjKzzEsWAGSrC"
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
