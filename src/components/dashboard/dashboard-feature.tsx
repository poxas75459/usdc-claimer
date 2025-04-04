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
    "2XT5B5ppWvHsFdDmzvK6gP3pNUDze6WqQpQ9CNLLCHBtHf1xWqDkk8UCSTN89CqfHuiJfqWGpskDxJHZ6dbmouPf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qC4j8DW6VbR1qhSP7hn5duAYx47SnPfiNytVEFYzpuVCJZwT8sgZN6htHm5tddeW3N7g2AAV9ov9b4e7UjwhUy7",
  "key1": "3nj6MLMzAoa7ZYrddBk7fEpZiYXSpWBTzAGqYkbXGokruJtEqBYtb5HA37Qd8Szwzzqv3yusd1k4k6NujKuz8Tv",
  "key2": "5RZnse5UNDDBbDJ4TAnvtgDoQDjEQEQNGZVUWHFo1Xddz3iyqHZYa7Y9GJH8xccdmBCMFgYgDocVLNWQR8MJ3UD7",
  "key3": "2xCFnk7g16i638JG5HqSxLXZR6fTsf4Qc7KMiqEgwkZHPmScV1n97JR9kzC8BNCFAYPpKDdisUY3LeXKbVXtmXvM",
  "key4": "61PBi8P2y9tCd3uZBfCiiDiKPToiuozdpZyQ7bwCrHnFNswoyARcdpVaLh9tiXhE5Lf9eeCeGhhAzTugsq1sWQ2p",
  "key5": "bi6mdaF8UAKcT3maXAQedBEVsoCFUwuFCBT91b7qWcXUvpp1xuBvLELCnCYBwiv25gYTofh6TBLFbiR8unGk3Bt",
  "key6": "4zyyzFCYYJDTtUEaQa9qabFszbXvHjTNJYrJLnienhcAuWsacRUre6tZzbnGJWPbo239M29DYDqN9RjyTd7KhDSW",
  "key7": "2AirbnSt2X4EQhvfdqQ8HJ5vxpPG4Dmp9wmLCRKJQw2xWaqTVSNStT4AvsRgDn1jN1uUtFE8o9HpyKaKH7kJ8qYp",
  "key8": "5FDK5Mjq56J84HL4y9Yhi1JuTMe4vNcN9tfg3d55KhnsLwJKbYWPShHgh5T2f6kLfk9xSsUwDWdWN25T8AqkD8o2",
  "key9": "4dTbPrusBd9F4Ri161AZxjYQ8R2xnusRuuC4yS7sxXY26xTuvaJ12xHtCJwC47AfzSn9shTb6GkLdXQce58gst8o",
  "key10": "2Drdhx1cW6qZ6uq9nXtSLt5rTsgWETe6bAZ7JY7zTYz18pbTRRyzDQ8qZWXvBHD9hyiyZGaFeFdELGQixg2KGitf",
  "key11": "WEc9xUNa1MH5FXW3Q6ynvsj89aeQwahJF94hT2Ctx9YtR3gk2dWyZTEmNXQTznMQvfjMKJ2mBHzvadbHJXrb8cP",
  "key12": "3PrN5J7xSiBMGJLhU6M65pHwerHgLqmGKLBYfFQ6vxC3TVg3StCVrMU1BNaazxgbksKhEFFMWSZDzAwR2FrVoePj",
  "key13": "VYTP6DvvfZVAdmG12cm4eLp4SnbUNFC6CAf1xKu4t9L87QuiAUC3yuCyehbmiNDgAKuSoqULhEmoBhaNxjzyyve",
  "key14": "4SPzbVX1ba9okPqAQjpapk1eTgzWRB6s5YShT85GaXQRT4BJEUdt4FKrMbR26th9Cd7WxG9wHicJAaCqJ9ouQagQ",
  "key15": "62qkDZFaAeNwXqrt969B72VfZcKJB31tk6eHgZLfzGXRm4s79mnJ9Nzg7aoANSBKdPNFrv3rdbFN61sHeQ1Ykk8t",
  "key16": "4xSvC5kmfFgY6xnmkbCPcjuLU8k47gZG5S7tvo9w81KzY4hFCodBKmNL7NY6GxPr3VM9METxV5xQY8XRn2o8MLd1",
  "key17": "2CLApqpxRY2dTMtdzxR352EBDuyetPn73Hh4EbLKMF6WdVDFFbbrjtp2a1F7AZ6E7zT2ZtJqoPCAFgTgXYvRWyDp",
  "key18": "4dUGeg9Jcqqu3GnXMXsP7Zp8jR84QHcKoE1eWLwhnGLn5HoGXQUS2xshqLvcKSeVFgk9i4rNZHujtDDPqR5GemcN",
  "key19": "dkgj4XaeMTQ21RSwKVe9ZfZcSJyydfRUAJxbPFYEC2ZPYt5ocjNL8LAUVNRUHHYtMXaMPuB64PvzCheB5ApqFgf",
  "key20": "332GtaooRh7QesJrzZTEGtiGm1DC5Cb8u6rF96QHUiM6s5mNDCTVaF5a42b8jAUQi8ztueon2jANB3imtiri1U3T",
  "key21": "3yVDJhPcvrhNWdZJx1SiriW4nJAQ7b6KdiotPESMj6SnhAcoihqJupGMM1XnwZrKb3nVBN5XMEJkxpFE6wnjktCa",
  "key22": "5BFsrQMk5pQVBHCSubkwTzMmUtXUJn8JjKJ6MAwy6KdqxdCh4dDqEijchWWkwHBEd3FgcFEZe1v24a4ryGB5AtcQ",
  "key23": "65v7N24KMCnEr5EbXwt8aq5or3b24oxFr8TmfZaPhT17deuJ9sKcZi2art3fLLrjiJpceivftBpAK5DMVZX8n2GD",
  "key24": "4LMf3fByt8t7P8LcCs9UC4x5HKULUK9zbgdQLgZ1uJiL7NDVbJLMcRgKDWCVoyWzjRQsuErwKUwpevixDWTAZfGg",
  "key25": "4uxUX6qysjv5buXQor1CiJsW3xAyBYvC8qv98u9dRgJQ7sC8jJULNPLmaD8dsNx9x6ipYzfKTKYj1A6TEkAtmAME",
  "key26": "5V8zfEbH6PKAhBm4qivrSuMH5MMbSC4xsbVabwcNq46WwPNChUW6Gg1xD6BLh5DLWeFrbstLhg23s8r1Hc1EsNDQ",
  "key27": "53jm27V1JsU9uLGAxXnjy5pvK39T8nZ4HgctW8dM8hwQr2A94oo8B9MdNmu3qcvRxFBHGQDfibVAn2QUj5pJohaC",
  "key28": "nx5DZFR1R8GURt5LiAprK5hMPA85TjssbmQYzNM1gVpuhi8whH2PQPQ1pzMT3He7QjiDMvYmiSSqhebk8aiQb9Q",
  "key29": "4rFV6Z7WCTcqb4YC4VJt7o3FD6WLbYyUinn4k3JpEr9jqnsrgqvWusUNDboVfp5wKmgjWdtMZqtG8mNYugadPT5Q",
  "key30": "4oL42JbW2ePfeuVFs6fWmRVXKL2xdP7oaDLBB4x8J9ELKc4jM2An1qqzsret9NtEc9TbMZvC1dwUHjjHwBsktGPc",
  "key31": "5u2SfAMmSHSMdj4mHqGhKmaBfvD5Jyw5or9HRy9BTuXEdzXL3FkNaFtkwq1smpWBWYbPti87ALsZRv4TAq6Tnvmk",
  "key32": "4rjgqyUvDTpbjRzhNtLv3fzvDigRrCGqybdrnJruVQK3Ey4EJLD7J5BdArFmdDz312TTXTwZ9qN2nmihhGRa6TZ4",
  "key33": "2Pp1QoHsGDxhdjT9dfUptaW9PDSwRub3q5vKfRVbtwS4oAPodeztQ31r81oGrQBM7omiWYxUkhzm77R3F8qWtxjX",
  "key34": "3xhggYoUNKtpwNBi5g1cLYG58WdsWv8wuXw6ZSaZMpkFKRgBBj1tYAGMCGJWLiKKYwueXeReWL8qkCp6wNvn1arL",
  "key35": "4hMwYnnkHPtciQKCJqzUPNocwa283EnpyYJMa9bg7xPppvNiZ8yyHZva5LQ8eQ22CYJPmFFqSyetNBvHpG5Fm72H",
  "key36": "48rDvdHVtL3pcmac324ayGKh56AgGoTqRCN9r7ce8VKLXT5CLuRt5wodY9JpgSNcNm5XunfJ9NLuJZvfmT54cZ6X",
  "key37": "36CWP4SLgzhWnzihaja3bmV4CPUpURjgwMVfrxPPE1zUpHuk4GUHNJYqY88BcN9BL5cMaTxrbcm5GpzD7fgHYaRT",
  "key38": "394MZeqzz41SdFMZwQzEK83Dh9LHpxea5rhWExd3nagroZquzeYpKCAKwfGrTVkqzBw9E36fR2VWNSwA9h8CsDWm",
  "key39": "HhGyorfmFBvTXc75QBBjME51QTh95MrZmGDGZV2mXSoSaanbWczwSgT218pRdKj6fuN5RSaE7eby1wNQWFZ1W2b",
  "key40": "KRBb2NfhXFsVe2tvFuTbaTJPHvitDD487V1zREYTXhTSVG5mapkvRZeMYfF7mDgcQDM2JvzKN4GqjT7rfKgZq9a",
  "key41": "xL3EC5YAKc3dHrbFEiAPs1QCj955steU4LF8KAMBfvA2qMdkg7pQ4Lw9TBKouirJQkN8NXdBTMz2uCWoz1a7jh3",
  "key42": "2wLHUnTVAp4TQFpPQgRzrKWqzEiG65VTWLJQtrPhG9mWcv98mZbRN6y4qeekecJFPNPDxqfAZ3KzK8FiSTEvGFA1"
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
