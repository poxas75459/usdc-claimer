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
    "56bedyLeQ63X6mpsDK9qDRzfddBhfd3hzyhGPnawsEjWHpHoa4XLJ8dxUfhnGk46xazHkg6d2goWb2VXm7DGLjtK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bGxWL8h3mtxqcgG2W34QyXfJpgCsMETUNHhSoRQ3bwk139Ac3FeiGFc4h5xuDWUrzjWFiZYNdGpUiz98xqkujHt",
  "key1": "3AvCYpLu53tbdXVa37AxvSzg9eyihYkiU3VkwRxS3MXmbYTutgumwRHBUioPUPmiujjxTNXWTAFTTDrVHqVH5xPU",
  "key2": "LZbt9Mk7KPGv689caztw2t3wQgr9ePcLRgrZ8FXxFn4mF3k2esRUwfzyWLHQCLPPUvkLtiDLjoB2yQ2w1Njf1PP",
  "key3": "21PtaihXXtoDvosNKd3VKCoHLfLndo2TjpRhdfwLBBHbX6eTSoXGK9iTEYNvbF3mSB3h9rct366LPRHEUuSdrvbz",
  "key4": "5BW8KQkoD2nfCpo8iQt49yLc6v71HXdW5WE3ZwfZmZhThwLAi6oXcaMnWTMrjSwFZX5nib1q7qoxMrH9xri1UCvG",
  "key5": "2WaVZ8EKbQMVAeVMTRGWs9FjcJXFYyv18pX8UXZsUA9efKE5ghQp2AKdRopva7S5FroUxCLJxu92qb9Nh4FdqMeh",
  "key6": "ZKbwobFibtPPpkpDwhrRWHj1fAXw7hh1VXxNaNQnhAt8WSK8quTKyMaC8i2XtHZ4xuhXUvscB2rare2NUuNYDP9",
  "key7": "Wx5Y869EfCbdQPHAKmcUTEGfsrdQyT9ZdPMcWs2fnTymk74A5MviNX3oUVh3RnvC41MEybsUmMZf4Kp47Jf4Hvy",
  "key8": "2okZ848GvjAJvSNbjaZ3K4V6z1fEaDEXvEuyteAZFtJnvKK1aWLMbbCB2NDEW2AhZ58mcvvWJQqDn24mpztqs9FF",
  "key9": "3LpqfebDaMHHBquQYA7CGcH9xirzUFNbAcF2UbwoBWpfmU18ofYdfk1E2nmSAUck5VUV11ZVUfs5diQEnPoQNPDK",
  "key10": "5rw8zRLAS4WUq78ehxuP5p2cpTWkh8rUZAYYXViSMfLJQEg1AmbU2oNE61avixamVVGXuYjMkzMHmuxNipBiKenm",
  "key11": "5dKHbVsi17NwUyPEpsEfddBzcvLz8aLYzazLbkKYASfQpEp3KRKdFX5WJ9hphbYMYntyKEfn8joioSaTmRRGMtB4",
  "key12": "4etYe5JAc29AbBMApcrajsGJLdtQCGtVKELVfgd8ZGCGcv1fjK8dNiLt65SGr3DAg5CyfQ6BKFaEFKZyk3GgePoR",
  "key13": "5p7nDRt7mFwjLQqMpQSWi5TctPWTieZ6D1xriUdyAuyNUXBJSVLiFGzKP6VpD4ptDg4Q6Xv6qsSf3Jsv4a5wYaL8",
  "key14": "4eSo63SZfBWg3aoxMxneWm2zo1U7TvT6zWYQVvKYhrH8JL7mQRxsQHnmuEJR2DAipurEuq3wfMmQxjEugHG2mxxE",
  "key15": "4sw9tLyoNM6hq9u4UUoBexhUQ8NMeCuxw1am2K76PrEKwCa2BfJ7so6hHUCALCkE4BGEYQGqKr8ikqBfa3TzqTdw",
  "key16": "5sWPHD664NoorHxc1uQ9t1onYKos2pLAY6ijE7BS1cAxPchU2fP1iH5RuXbar5c3H77rzw2AbQwBDS8uwqARRLaW",
  "key17": "38HaNH61GBjYvSUzJTXnQ5UCXo4GeAsGbxUdKgdPtXh4e9U2cycw4EmXPrWY3BTRKiw53JsL8FecrYqGzj2wu1dM",
  "key18": "4QHF7738agkM4XPhJQTHg9VQiJPzLHHcyHKBaxkoRuMNbJvHVn462evqcGQPUXXmYrw5gpjCvrjKzJ5JCaHKDpcV",
  "key19": "2qAHwZjPHqR2J4Q2MhDMeVabP3SEyfTym6pBGHnFPuuRU77nY1vmNhDzp5WyP5ha8gZgK27khPUH1gbTZmGmasqy",
  "key20": "2g6pwfUMGfJifKZxShNfAyLiJ1rynhFVFRN3vj67w8wQbYX9yNNM2gMriMtmwEgCFUoUCvtjw5TtyYg4fGzupdhw",
  "key21": "3NTGkp1Zr6F4h278xN5rhQk18avZksQVS3j8dGSZrCEDeLrVibR6vVpyVyPmHWdRkHUZZRF8MQenpXizJ7F33X3R",
  "key22": "3TSSU88yc2xi1vQHMPcfp7ZZKVjEBvhaDdcqM3kdLGZB2hHr2PKFG5wpygrh3HMNWDvzBiJc5e5S4b1Qo8sA6NfJ",
  "key23": "5RVEZ6LrpdbQ8MkLze6TbhJE5uAXCoh2HmaXFwBPTcT2AETKt7i1e6LVxFJv8YuuqHtXHz2E52wGYLeyg4Zs5FH4",
  "key24": "5yhhW57hHkcBVcwd7W4G4WDmgNoWrDC6jDHsoLsitGhBMdXHd8CjazBVbk8WcX98DSxrx8skYfg7AY3g8r6Rm3fb",
  "key25": "5NnPdQ24KsnMabePuZq7CtDRTJxVfF8DVZrdx9YwniGAcTfESn5HWrqb1F15tKZMaaS9c6aQR6PFRscFXsWgEm9Q",
  "key26": "2K8y5roKD757pK7A8gaTUaJx5hAzW5D8GsiARs4PTNyckKfSTpUb4YKoURZjMsi3STeyeRCzxbXpwEAexW9z2PkE",
  "key27": "3tHZb1EGp13xHucio4Aw6DRoDiNo6UPdgm1C62qqoRTStYA4HQUQiAkWCziN3vkQPryCBLJVuf4rEPB99Wx3qoGg",
  "key28": "452xofE1QfTGtGkswsGTQ9AW33fuzfWgfqjcm5mkqibN94FPtitSvQNfFGBjKDjK1dM4xoJNkVPRHxkBqkNFj6VM",
  "key29": "5MpXF5bTNWm82XMsNEAhRGiGav3PiHmEJoenEQ1QtAPbTqiWjdK8EmC8gKueJhpDJzn9EcTJc7UjQQ6fMLwsZ2Mi",
  "key30": "3Kiu3Hg7tdTDcEXs3m3MKFjRXm6foQDFdt5nL8j2dZJeFufhvLKkkFXyeFDrXyJtL1Yxvvz9ZPQPJFhBuU1cysUt",
  "key31": "4t9WyNmvCaC1VeCaabR4a2wF5Vx21Ea1Vsm4dhvXnRYGDtv97b5VDWLxQz4SkMBNDjcByvVx3ToKCPQcxmtggeLf",
  "key32": "4ewpHk8TFZJcR8hss2sqQd5jy6sAfXLyjZpqiwgQzJ6QqFhwy15WFbvwTafAcWn8fBw9X4JxF4b3kgGNwpBCxsj2",
  "key33": "46HvJNZUXV1XHVVtTWzQ3EgCsJvtzZL5My7JRHSqdapYeYABoQfgwxnBAxvGPEmm9MyheQDTLYNLqaUNePKMn1Xs",
  "key34": "2hCQEmdFke3Uky5sEPy9B6ECyQ4oCHmXTJN3XA55u4FSsuYLVoYhVVnXBYuKK99oeJxU6gxncSZKqnmnFLFF29Db",
  "key35": "GLBjwzCVogjGNtZBsupm8BrU9DVxnfJ9WuXfFgo5NiWuCqHFnqyMBzD2iH1e81Mc8ZygnrCU123LQBCmUYBoEY5",
  "key36": "2Y3dnsGTKKLAWVQLGEZe8VuWiUBwmavVnSbbiwrAK5KraFTwKxc4CTD157VycVq9bupyRupesqY2MApW1LmostPu",
  "key37": "WvQqCp4fgcQ7Gg1P9L63f89QB36hZXuemEdb57hVn2i26aZRJD7C8dSsmph8sztNvxch7E8D2JvW3EDQ2Tg1YTo",
  "key38": "5oJHVWDKeSYhshXNxCgQmpc9PkGcFoUNaHEjTnitSPkWdXCRm5Q9HtyvMDCveeGVbZhTfKxeqvhb56G5kDaCFYdq",
  "key39": "5pXrbuXEAQyRwuhTV8b62uCUyPaYBZrVHgiAoBwTGtmnuAqhbkPueXzQQW1ixZeJ1fhnoCdrwHpnbReaSWRy2Nct",
  "key40": "5qSNe5WHHSxQTA35gEGAd94nP9QR8LyBT1KTaKwhu2SQqoUiTPAgMRU6k6A9hEVP9hoJZAWaeUs46CPi9GnEcHpR",
  "key41": "GJ3r3hidw8VkhbaUyrQw5CswV9CA3pvDcgwyJ4vZGT1rMky4C4cZXihXWquRQznVhBDbcZDmBd6fR5ALFtFn45d",
  "key42": "3gPJuU5yxsPjgZz1q3KpA4eVas1B47gqK8Fp9yC6n8asAuVoHPZ26o1qELpG8vpzPpeP85ikyXqNrEJ2CSvQeaTb"
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
