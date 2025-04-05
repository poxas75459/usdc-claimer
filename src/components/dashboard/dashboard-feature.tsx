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
    "5MpTd7WnEiBUi9h1aa35jMUM8c38rYgcJXq2TNWEU5eHm4PqgPx33igSs6y3Hf9xXgL9H1zBAUg65XFoycy1Ayzk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6VX52c2inYW5k9vQexARDkhzz6m6MfnpRbYKYiZY6LJWD619ii6tBhEYaEqHnor1aczMhjuYcLr8fXnhgaM3MSR",
  "key1": "3PjvVSNvNjUJJJvWr4JZt6dT86pmwZ99kPQ6C4hSSqfKcAkLAb4STrQYnmAWVmvrHvCncCAC1PP8ZKrW4Nsrsz3C",
  "key2": "5CqTkbRAfyA8rUV5wnRqnnFtBuSCWHN36vRgVXjUhSjZfRAFPHKjocsFmm2CcPr4mgvpQGahRGXdwrCH7KwVGGCg",
  "key3": "2T2Bxry5qyQMdWwSXXxcFAZQUiBGGNnoiC76AFhxKRuaq3eZDoAyePVaknQzniWzqHcC6Zer1fxAX2bzQmJwbojt",
  "key4": "4Fz9HHvyzUwQcKjdW2B6ZB4D8MkUeEZumTZqiyX5pLcrF5VHaMjuKvuFnyaYJAPEKbLiZoNJELmpD9r6QYV8fEz3",
  "key5": "5s85qHacqDRjZnZaFF7By1zx4he9iHPEHvDsbA8BjzbZK3xN7pRrTehtjJq2DQUBofwVV26zWLXRNqEu26XUXcbd",
  "key6": "4Dquq6u7yZeFCbzbTVBJMGUkg45khhr8f72EzCkQ8WmRFex9zhq8S4wzTfo8CWHWUvCr2Yhou34QSBDgAwYPScfP",
  "key7": "zjiF8BUfkhM3b7MDeN9usrntnobyjCNDX8ghSGTZYfzZoa2BUWEi5iquMEJub7vhjHF6d1edtQhcKN3n3MFKeeh",
  "key8": "4a3q6Xj7uBbCyVa67xv5s4XSBhBFZDz4NQgSURQ6k447MJYEv1QjW3g2eWsViKratq91ufis2ghn46pBLSWwD1Ls",
  "key9": "5RUiSfqTJx4tTRjUapB47eMfrgwLk6BueHFybAUD3sY7JQGehfgoKcz4khX5fbJDBBMUDt1UUyXfNDfoUQ1yq17d",
  "key10": "4TBMLr1i1pzvpExr2DdfTvbFvm9gx3BAx1KuGgcwKn8aNgphkEmpzmQsaunboeAdRiFZsFbUF4fAEnhqgHphnCZU",
  "key11": "euAQWSxseEbvnumL9yDXksKKTL6Q26zR5bgmioUGyu1DFy75HuZiUD1StnoTeQ6hzYmFkJReYeTrPjw4iQYM8Ei",
  "key12": "31MTpT4ZAe54mah3J4PwQhAQNALtECjxaFc6TMVvG3fZVgbaPkwiCMw922KSG7GhUZia3uKLNgc1SdtfoDHdVhuD",
  "key13": "ecBH9yw6ov7QE9utQNcsfYptFP2pP7bCTmhRBXLTPJRNGGnkVvQkDyUmGwh6XHUcDtri2CyAMu1PpQweNK245ud",
  "key14": "4x5Ag1M3uF7xxE4iL3KKC3QLNLdKXV2CqvuRLaCXi1JvoVyetAA5Ucn4Lx9Q24z3rQjEH9ve9dhXAECp42KAi9kB",
  "key15": "3mpqYiQNbnvHDoaJTYvcmSobxGf13a5Kbwfe4dUCkfaD1XL9ECFHYRXXUg1EWFAXTCd5BcqxN6RLehTg3cnALA9w",
  "key16": "27xV5VFeMNb43z2ZcKLayavrYiwbUMBnDwbwe1PnsdcarSc4PFFfPkUgxqHpFJfA8yCY2ubaXKpnyVmkbB9NGW45",
  "key17": "5pGzWMjoT9XzEXYbf9HkdF1RKyaaiuCepMHsopVmwJL9Dnswz2qwqegMDLcWUgPxipSjSXGJ6rdqW8fmWManjb2y",
  "key18": "2q4KycwaASuHrA4df3V6KVx2vFzfgCQxo4K4NfKyv2szzVGca5vWq9TRZktyL8hwR2j6KZemVJ9yqfK4dDyLXiZd",
  "key19": "1cDsafREViEjboW8iQES2bGBC6oYkUAh5dBusvzkZkWUiVe1r9EijG2FfkvJ5rJK3AsS4FscAckikgBSZCvoAUB",
  "key20": "GtjQZ1ZdDYyL5BeE1sP5ZA3oUsXPS8es36yKaHd7iUKkQHQUB6mZSDrEay8f3xHdpfupZeBQFERXnf9KrXLQSkC",
  "key21": "5QS8wDdUPAHxeLYam5oqdaxaaEAWtCnCQFni8QG3yXfdGXcSg7i8ge4Sdpj5DrX4GHCe2TJnYpTWoTG9d2sq6qa2",
  "key22": "4nG1mFj76nKeXuXdXDio9WCK3D8Hxti6YSij2sCCxfH7ppgCGMxrt8Z5nKc69e3iou7mLNBReehupZvwPYFzUi6",
  "key23": "dnVFiCawffqMgtxFj3fLLRmht2B2vZT63nPu6nZwwh4AvUyAGRYh7PVZ8SwtN4aEsLPqGsweLPToqfy2t7zGJ1G",
  "key24": "nW6ZTUH27Hx1GJz8hQYKduYrECRSk2EExH6i72XvxK5ea4RcwhvEkmewof2gm7DfmRyEf97Y73sRan15sy2idpt",
  "key25": "4B5m9FG6Z9cBs29R4Q4JTUtPEZG3EuH4YTRJQL7NGKuQwfcBGGhkmAemVJ7env1h5fzK4UDtGHqNsyGaf9Bre9f",
  "key26": "3G5mZYGcetX2MHixqQqcbJQZHycWNf2hmpwn1Y6iPtXaigK752WcEYVXw1heXiSKSH5AFthSHo1ZYAa6mzyFcrU6",
  "key27": "TV4DTTn8uRmC5cqeVLLoQEjV2wtJzN78qxuk8c3KsjSrtdzJpiQjFDRrUZB6S7DGSRPdXFtp9YqvmfmfbQ28dPG",
  "key28": "4pRdxYBARenHPoeSNdPaqwivbySqtNtk8fJeqFV444maEyiMu1Cm9N4vzhyyw2nLVyg9fvNi7uRua8wtsHLLAZ2G",
  "key29": "8i7DwokPts7bWzq5GQ2DtHmWkuGVNVqvWyHmxrHW6FW4YPZTh6H2pnAbM5GrW5cT1VEtsEntz3PFJgVh2F2Py6H",
  "key30": "64FMqrKhrkk83L6CvXXjrvasfXinw6y7ajoQarokHuSXxPKwdS3CmNhPL7LPDocXusDGpDMXUQ1rkv8unmuZYoCU",
  "key31": "5n9Bh89zWAGWEXXqd4KteoyeYeVbemj5UsgdWXoXF76HF254SGLwEsL3hBdTbTpervJzuvtx9gXGcPzjE4ixS1dj",
  "key32": "3e9LxTV3fvgohDePADJnU2MQ7FvP91s1aD7mEd1nLDQpCEWYmJQtMxgQQMjAZVgk46y3Jhiope7Xn1UxmXZeiL99",
  "key33": "5vcDc2R1rwLDtDnq4xxLpVsfURxtf1AfBDqtPxRzm3T5oi9svZe8ksUJXfp6oVcC3cnLhsufYgiW2Kn8BsXy3d4o",
  "key34": "bzBzr9Kf91syV7E4ABBD2y31B6RzBisyKJTG6bzjfiSbAnN564emyvsrfzzuksrvXbcDa1nxspQSwTpUkcm4syC",
  "key35": "4pGkBdx2wJFJ61imxfbbaNicz45nPcycPiHV5RE7UoQmAoftmQJQQPxjtt8MdBd3QTCt9ujKXgp6BvfMKztLFQMa",
  "key36": "ewJSEEuMsB2MhiacoAu26jLEnMfZaCtwozfTKaw4PWpCpPkMrDyPuvvPmfTNpXQACHNpmdkGgBmrUWBZfESy62y",
  "key37": "qG6YUPFxVrC37HuUcPsqfZSpuPHa8HZgEofyV4LFeaW9sagGtaNeAL4EBc6BW41zzHkYPKoDXqNVJMQxA4c67tu",
  "key38": "2KuZhJTuk76QERSJYE1M5bj1dzQAf3xtFCgCpsmBgia46cFR21jUb5k3ghRfKLCre4cN7W9Jg8Pqx7n9iMzrER3a",
  "key39": "2HrwjE4M8jDBFuxBTUEP3hcEEFjLXyJmGB4VmLanh9Krsf6nhPzinysKYDe88MtZG6cXECHojSeR8LnsPaVo9NAW",
  "key40": "2nqrtWU2bWh1ePk4h91pFaLVfSgPZrvsurjpYeRDthZYhmJnADY4vrsqj9rTBEod68LQMM2LTYoqisJVcqG1Cotd",
  "key41": "4WpceGJCTTCy9rY4AGcbXnvP8bxWwt4gThrJ5HLb7ZBAALpiJb4jnTFD9srse5HTn5EGHvBZT2FLKZqNJwZ7TfGL",
  "key42": "fkBoKdni5qMonpTmFVawQ7XzNDiLyHPgMPbExs2NWteGopdVSSmC5ymBctCdHpruDFhnsRUnemZ4GfwrprgEPq7",
  "key43": "4fpbb36rd8mHSz3GRVGyCYfC8eE2v7eZqBv1Xy2mYQ6T5H2XPM8wJv3nH6SFWj4jyKXmr5eEXvjJhG8FeQXMaeqY",
  "key44": "5RMU7R7CNt9wief2M2zHdx575utjFTYLsv4zKZ41gomhtXhQpmQhg1FYBrqjEyxnp8L79jPUwxAxeo6tAuwM1PCN",
  "key45": "568Rf9kD1kcXJaS9cn5NDdHsqmzfeckZbrd5RVQgAkYzjfAJbtdX6N6MLNERzoN2ode5MvUJuf8ACCbsTiwVMSLr"
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
