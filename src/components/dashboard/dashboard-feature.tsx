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
    "knsdUnzPtVZgoUV5HhpXt2Jsv3cLGQgWxybMQmJr8iGybDy85g8vesoYWgRiTxM3A5FjLxNNLubwZwe4CmNQG6j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21wwAU1xirKzhHJ8Jbv8GzTkobfPLEY4oTPHcED6aCvwQtbSqoxh1TnLDmtsXmPGWxoypHPQXG6Fn2LUULS1zrzU",
  "key1": "3fQKtbAugXdVShUqYnknSL9A9nt8NwcjNgPj1BjjFZNAPLdSybtdr7V8sKdq6YUfu6DcEzK3XzzPAKBL5Pr2CFvu",
  "key2": "4B5piz9mMppAyVZKkuDJ55E8uz4nEAEAFC92HzNWkEw92uVuEgjTkqK2R1gSy3fUZef6XXGUfobkm6czmUS71WXc",
  "key3": "3GvDwkctXarD8BuKxW4hDHNtYjs4zgLHbvVprR5YReasnbgnNQLVFKfGm8fZ9dH1hGxpiNmJNHpkCAoSYHtCVP2u",
  "key4": "5FJroZNKGHoL7svkX4RbocJV3SVe5u84Ca6NXDG4fky8xCS5t4veJAx7Z99qEF6qRyqayHhEv1f7hmaWFDu44GkA",
  "key5": "2yauBMdB2TEeJ8G4xg9Wh7SJsgcCo4N7Fi7Ai5SgoCgpzp4PE68qcMN5AKLmUgpxdTPYggVecCDR4HbLyENSj4R3",
  "key6": "3Tkw8Ed2FeNm9x9d8cJ56PQP88NUPV9z2wkqfHnUBDNM6gxCC3nH54gNkAEskCJbX2dE337dn2QBiVVnUsL6yAtc",
  "key7": "5nV5YSmJgYJjGR4R3ooi73C7c9npbkt389X3vQQZqYeRanCn9bcrF1p3Co3eoNjRjCx4uJ15nEYdWWf6GK6VqS8P",
  "key8": "E9QMRZmooMGG2R7VBDHNb4XCbJ7j7ApYshU6nwZb37erXqjwN97QXwzFH2N4C9bFc4rfwxgRa1NJGhusXXV6kgd",
  "key9": "26C2ZC1R89vnzfamXnkU47N3N67BC49ciE5q5mdfmJoVrgR5whwRjS9KgTWgAQVkiGMWYPSYHRrDN6sc7sL8YVMu",
  "key10": "26X3h3LMJqLEKhVwx9fHq3URcqnJLxM6SHGMxD3TXnWP8tuJxt1Jb9T7WPfzkE43gkJnd7sk8845wvm1WdohfMc1",
  "key11": "2WJrhVwjtTXFLBjU3zHdFoqk8oeN4Bu29ooJuhyNhZGPRUJiCKhFjqHRgejbkBV71ZsSpgveuQmphLiyzManUVQm",
  "key12": "2kh1esKUbw5ohwCHqTuZaaJtH7LBFzWYN7h8LE7uHvbDrgKAu8H1N9m4AAaFnjZoaqepKC3ZAN8iXxsghHWApBPj",
  "key13": "4qGfpxd3Zdwoz96UFrJfoxiKC7ufmDeNhr3KrABxdPdJDA9CAm48N8ko2KKpQkSbw7rj74BniShmPvHVGtewDaBU",
  "key14": "4UV9DzTMYtVpjL9Cxs5nVxXuMtwyEeimMnrWdNmuVCVYJPa535EGYEpAKcG6UfBYE5G9Rir6LqkuripMUzmGUkDo",
  "key15": "4bFR75inNgUfpuedT93hcSyfsMkCNg81fP6cTTrzMAB2pAN291iJQW1f7UePdYdVYXCH3jxwuqTFRV3V6RE49w57",
  "key16": "64f6q6JzEXudfhCnQLm1Rbf3Z79SPTStNJtv1ZqLav49v1bm2qY2eHEbB6LKLkHzSscWo3f3RPo3SKmg5GezgKSn",
  "key17": "3gEZSimJgQbv688LGcVFDf8D7Ew1bNofEqRiMXa93KLqFB7H6J4F8FYesLkpu3LXw5vXfSSxC9R6HvSDgotHqLDD",
  "key18": "5Ji1Ff8g6eawiSKwRVtcHD849GNufbRLZCxAVn5kKp6ivEJZYsEujoBc2p4jvqApDj9oae1xF7wqzfsriF69XAyH",
  "key19": "3u9zT7DJy68Nvixz7HVQS1mcP1n71N9YTJDaqFUJRPHtQxgSEdvXcDL67JSRnmC8Bg3t5oe6HqGAjUMST7iicArg",
  "key20": "58M9Tv8NAHqR7y6B5ePNHj6zeGH9bWAk9KFYRBzN2iAUeVKbzBbpfFyWPSnYfW9iPeSXpe8ifRxkZkMmGFeD6KBY",
  "key21": "4wSgYSfH1V3AhdscQuSCsxcXtFhVJysDnou3Q3qd39icwrqo7Knyt2mmiZDjsm6Hj9WMRMuRwd9Jr8jfD4BBygDH",
  "key22": "3Nh7AfwTsWdKdRcdqeDuZYr4qA3CmvH3DyPtV14YBrGEBccHSaQicn8aeBGULoQNqTGwUAZgQgrpEAvmXdMrky1T",
  "key23": "2taDonZkYSftMfYTZ14Q3aNQj8HPSz5UX1pGzTExZuPpcWwqJaB9YcNJepTM8CAZdrve7sjt2ohQGzSJXC87ZfCn",
  "key24": "5ZK1ShW3pWgFYE4k9iP6wav6fBydWsNpoiN2u3vMcgTf2A8qmpxH9dc4K2R833Tx5aC1fGSxezsD45yy9gSHhDU9",
  "key25": "hw9mfPdpKC27QvbmSPpsrgsCC5vyuKNJQGPJqkd96Ckb9Yxwt57zSYerVLwXv5wfwA1PfExpoM55gc1x1V127T9",
  "key26": "4j5VV4JgZ9Wy3F1mtBSmXJjaok2HskjBa7rhnEzJbPxnTdZdRRHX2tjPVdgL1NXZ3SwdbBB68Tdf7j9RQmzL8euH",
  "key27": "XAxAqmb3999oc8nfbToPBPRfHJSdgSmrvtHCQhgVL9TMCwhXM1y79XVXufgpmtfD4rbLnwtu873RypUkApqNySz",
  "key28": "4kQHD99brwXzUt7J7B2dxWWyBovNsivnMtUX9tz2dFetxR6AQyYDHD62i2xYfWtAfvBa8CzbLzQLMMPQU92RKDGy",
  "key29": "Ua4Rwq2ftJsrVohhzP6CmZ3eqyFCwaV9HP2MpoJdP8q7VGQDsa8zQy1v1mGz3vGoz7ZUoEx5uHjtkrPNdui2nim",
  "key30": "2mkMjSxArBxSEkQLo8rMLb39oLesqMLHRY95tKE5WS7F4VaV18bwkqz3MyjUi4Du4YGaNJgTfXaxAVbuq7rGz6B3",
  "key31": "43diAx4NLch7a39oezwXeVBvxNwdBL2w7ver5TNHGcS6CwhtmusN4eByNHyJcawRBGqvJDL5HW57xADDu8ZSWojh",
  "key32": "37neABRdmgoJrkk7o56nbjw7s21Dq1h4BFFnDygQPXPcPc6LpovJAs3a3rrHwaCm7HsetQJTaQRwyRdqL9zLAvSc",
  "key33": "5ssF2wn3HF3G26V5QmFqtFpyeZ2aPM2WGSRkfT6es349yFYzjhmqTYmxAAwVLr2A7o7FppWmxzZE9rUjXSB6JeH7",
  "key34": "5QGaZsV6UhGTEjzXuVCca5c95DkW1AskNPacoBxo1fUZUQJnBazK4oFupqqSyNmtXMGRpRUdHRWUeEzamCZyn5Ai",
  "key35": "2unxjrheK65Ypdim8v19WHtgnLgQpwaKhC113UCoVrxCUq8RvULBUSTibz5EpDzRY69FZVDjQgBz7TrNDUtHiTvQ",
  "key36": "2Gy6YvyREq3qWq1Tjq3EzoEDF2LpiQVg3Vwo3UwjVXqMFqvYqPUzQfiap8iQKQGeArVSJvTPiS4zTdAV5hcxmzbi",
  "key37": "2bJ1FTDn6MXeybn4PqJ2ZiLHS9n35drar44LsuUGeZtzcpU3ormqDngGvkd3M4TrSuRjrHmJzfeX14BXFkpPXVT",
  "key38": "3WJo4PHxHx9cb5cGTUUsUWr1QTQUJXQnhNMDrCBaYhMEwmEGxfKaCYXZTCyJnWuvLCLRFvzLKipQZ6GXuBcWTkm5",
  "key39": "4rQ3e4CqdrdwWpEHvxEzDEq8Accy24WUqZiaGr1hhQCmo2s7UHVbJ2MhoRyTrTWkcFePRpUMhJAggrCvNbHKicbt",
  "key40": "21nj8sFUjQrfdLSua1gP2PBELyfSL1CdiYgmabQccNLN4Sd4uPxoiACURW7NXvRdxkGdQ5vAyFYGUsPs7FoYUrsN",
  "key41": "4D3WjaiA5yGwAQ7bxFZvdWVT9Nti5djE7AiHp9wWejFDrEDUu7svUCcqxPMLK3YtjYzLSqwiCka3194p2kYERuUY",
  "key42": "4ZzYir48WkqWeUBPdcqyxNg9TAmeCJ1b4X3n8G7c5M7CLWU316iaBhXqMZYnXbDSaJxDfjy162nkFeGa3nESUqGq",
  "key43": "5oGXsaqZJXq7hmURboFpSmDHB7qsQFY6zyA7VQJ2JtyZCqmqCx4zoWqd3czaQ5VAtG7ZR3kdDsV4VHc75SFWFkSp",
  "key44": "4Mm2nrajkirdVJyWyVfqDyg8bDF3CcxC8FKjitwcX9rFP36ZFbUcUsa8JS8qTJTYnyWvX9yRghgnjeRfQFKeBG8R",
  "key45": "3JHWX2FMB3xtqwAPMEGYPwzdMiqutVsSAAHSRtymbYs3zDAozNcRN6iGnzZ1cikTyGLKMhr1ftz19cVMSd5ty53X",
  "key46": "KVJE5AQkMkjP1Z2AqzUsmR8MRS76yz19qKvNFzNp8mtSd5bbmqaWMoz4van73fxwSq8DGT1XmtcL3jApEpCPuXa",
  "key47": "3Bd7p7q4PYp9i7qACAeapMFKQCGefA67QuFuf6k7WPXaUMTN2oFCZ1D7GrebKq7Un7CfQA686tdEAjVnBQbh8k9A",
  "key48": "qsNaRh5RGfzS1vTFtBcCELyMB91TABhWXk7qWeTH2MzBgvVQEJWeVN7gYFDyqfCbWgQuieapVET6audVLhGn2ca"
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
